import { Buffer } from 'buffer';
import JSZip from 'jszip';
import { v4 as uuid } from 'uuid';
import { createEditor, INPUT_EDITOR_OPTIONS, OUTPUT_EDITOR_OPTIONS } from './helpers/create-editor';
import { OD_Base } from './lib/internal/base';
import { BOM_ElementTypeBase } from './lib/internal/bom/base';
import { BomOutputFileEntry, bomOutputs, createBomOutputById } from './lib/internal/bom_outputs';
import { CheckAttributeValue, CheckDropDownEntry, ChecksLogic } from './lib/internal/checks';
import { MultiArticleResult, processMultipleArticles } from './lib/internal/construction_library';
import { clearLogMessages, getLogMessages, logError, LogMessage } from './lib/internal/logging';
import { PartBase } from './lib/internal/mod-base';
import {
	bomOrderOutputs,
	createOrderOutputByIdFromJson,
	IBomOrderLineDataJson,
	IOrderData,
} from './lib/internal/order_outputs';
import { AssignParts, exportModel, IVisualPart, PartSpecialType } from './render';
import jsonUrl from './test-orders.json?url';
import { BomOutputData, DisplaySettings, DisplaySettingsType, OutputData } from './types/custom-types';
import { getSelectionsByAttrId } from './lib/internal/selections';
const _global = window as any;
function uuidv4() {
	return uuid();
}
_global.uuidv4 = uuidv4;

const root3dRef = document.getElementById('root3d');
console.log('Log ~ root3dRef:', root3dRef);
const inputEditor = createEditor('inputEditor', INPUT_EDITOR_OPTIONS);
const outputEditor = createEditor('outputEditor', OUTPUT_EDITOR_OPTIONS);

let testOrders: Record<string, any> = {};
let lastOrder: string | undefined;
let firstModule: OD_Base | undefined;
let manModeCbValue: string = '';
let bomOutputData: BomOutputData[] = [];
let bomData: BomOutputData[] = [];
let articleBomData: BomOutputData[] = [];
let displaySettingsList: DisplaySettings = new DisplaySettings();
let showOpenValue = false;
let showDockingValue = false;
let articles: MultiArticleResult = new MultiArticleResult();

const loadTestOrder = async (): Promise<void> => {
	const lastOrder = localStorage.getItem('orderId');
	const testOrderCb = document.getElementById('testOrderCb') as HTMLSelectElement;
	let orderToSelect = '';
	// testOrders = JSON.parse(JSON.stringify(testOrdersJson));
	testOrders = await fetch(jsonUrl).then(response => response.json());

	console.log('Log ~ loadTestOrder ~ testOrders:', testOrders);

	const props = Object.keys(testOrders).sort();
	props.forEach(k => {
		const option = document.createElement('option');
		option.text = k;
		option.value = k;
		if (lastOrder == k) {
			orderToSelect = k;
			option.selected = true;
		}
		testOrderCb!.add(option);
	});
	if (!testOrders.hasOwnProperty(orderToSelect) && props.length > 0) {
		// Select first entry if we do not know what to select
		orderToSelect = props[0];
	}
	await onTestOrderCbChanged(orderToSelect);

	// Assign bom outputs to combobox
	const bomOrderOutputCb = document.getElementById('bomOrderOutputCb') as HTMLSelectElement;
	bomOrderOutputs.forEach(bo => {
		const option = document.createElement('option');
		option.text = bo;
		option.value = bo;
		bomOrderOutputCb!.add(option);
	});

	updateDisplaySettingsFlags();
	const checkList = document.getElementById('displaySettingsList')!;
	(checkList.getElementsByClassName('anchor')[0] as any).onclick = async () =>
		await onDisplaySettingsDropdownVisibilityChanged();
};

const onDisplaySettingsDropdownVisibilityChanged = async (): Promise<void> => {
	const checkList = document.getElementById('displaySettingsList')!;

	if (!checkList.classList.contains('visible')) {
		checkList.classList.add('visible');
		return;
	}

	if (checkList.classList.contains('visible')) {
		checkList.classList.remove('visible');
		updateDisplaySettingsFlags();
	}

	await doAll();
};

const onTestOrderCbChanged = async (value: string): Promise<void> => {
	if (lastOrder === value) {
		return;
	}

	const order = testOrders[value as keyof typeof testOrders];
	console.log('Log ~ onTestOrderCbChanged ~ order:', order);
	inputEditor.set(order);
	lastOrder = value;
	localStorage.setItem('orderId', value);
	await doAll();
};

const doAll = async (): Promise<void> => {
	firstModule = undefined;
	showCalculateStatus(true);
	console.log('Calculating...');
	updateDisplaySettingsFlags();

	let manMode = false;
	if (manModeCbValue == 'man') {
		manMode = true;
		console.log('###### MANUFACTURER MODE ######');
	}

	// Reset error list/info
	updateErrorInfo('');
	// clear bom output data
	bomOutputData = [];
	const bomOutputCb = document.getElementById('bomOutputCb') as HTMLSelectElement;
	while (bomOutputCb.options.length > 0) {
		bomOutputCb.options.remove(0);
	}
	// clear bom output display
	bomData = [];
	const showBomCb = document.getElementById('showBomCb') as HTMLSelectElement;
	while (showBomCb.options.length > 0) {
		showBomCb.options.remove(0);
	}

	articleBomData = [];

	// get the current json
	let json = inputEditor!.get();
	const intOutData = new Map();
	let logsAll: LogMessage[] = [];

	// Support both input data for now:
	if (!Array.isArray(json)) {
		// Check if we have a BOM order output generation
		if (json.hasOwnProperty('orderData')) {
			showCalculateStatus(false);
			return;
		}
		// Convert normal object to array
		json = JSON.parse('[' + JSON.stringify(json) + ']');
	}

	articles = processMultipleArticles(json, manMode, true, false, false);
	console.log('Log ~ doAll ~ articles:', articles);

	const dockingInfo: IVisualPart[] = [];
	let idx = 1;
	articles.articleResults.forEach(p => {
		if (!firstModule) {
			firstModule = p.orderItem;
		}
		p.orderItem?.dockingInfo?.forEach((d, index) => {
			const dock: IVisualPart = {
				_x: d.start._x,
				_y: d.start._y,
				_z: d.start._z,
				_dimx: d.end._x,
				_dimy: d.end._y,
				_dimz: d.end._z,
				_xAbs: p.orderItem?._articlePos?.x || 0,
				_yAbs: p.orderItem?._articlePos?.y || 0,
				_zAbs: p.orderItem?._articlePos?.z || 0,
				_id: 'docking_' + index,
				_partId: d.id,
				_specialType: PartSpecialType.DockingVector,
			};
			dockingInfo.push(dock);
		});
		p.orderItem?.insertLevelInfo?.forEach((d, index) => {
			const dock: IVisualPart = {
				_x: -1000,
				_y: d.height,
				_z: 0,
				_dimx: 2000,
				_dimy: 0,
				_dimz: 0,
				_xAbs: p.orderItem?._articlePos?.x || 0,
				_yAbs: p.orderItem?._articlePos?.y || 0,
				_zAbs: p.orderItem?._articlePos?.z || 0,
				_id: 'insertLevel_' + index,
				_partId: 'InsertLevel',
				_specialType:
					d.isDefault === true ? PartSpecialType.InsertLevelHeightDefault : PartSpecialType.InsertLevelHeight,
			};
			dockingInfo.push(dock);
		});

		const od = new OutputData();
		if (p.orderItem && displaySettingsList.hasFlag(DisplaySettingsType.Articles)) {
			const odJson = p.orderItem?.toJson();
			od.BuildPlan = JSON.parse(JSON.stringify(odJson, myHideParent));
		}

		if (displaySettingsList.hasFlag(DisplaySettingsType.Logs)) {
			od.Logs = p.logMessages;
		}

		if (displaySettingsList.hasFlag(DisplaySettingsType.AttrChanges)) {
			od.AttrChanges = p.attrChanges;
		}

		if (displaySettingsList.hasFlag(DisplaySettingsType.BomAfterTouches)) {
			od.BOMAfterTouches = p.bom;
		}

		logsAll = [...logsAll, ...p.logMessages];
		intOutData.set('Article-' + idx++, od);

		// BOM
		// create entries for the bom output
		// Assign bom outputs to combobox
		const bomOutputCb = document.getElementById('bomOutputCb') as HTMLSelectElement;
		bomOutputs.forEach(bo => {
			const bd = new BomOutputData();
			bd.bomAfterTouches = p.bom;
			bd.outputId = bo;
			bomOutputData.push(bd);

			const option = document.createElement('option');
			option.text = p.orderItem?._id + ' - ' + bo;
			option.value = (bomOutputData.length - 1).toString();
			bomOutputCb!.add(option);
		});

		// Create the entries for the BOM table
		// Assign bom outputs to combobox
		const showBomCb = document.getElementById('showBomCb') as HTMLSelectElement;
		const bd1 = new BomOutputData();
		bd1.bomAfterTouches = p.bom;
		bd1.outputId = 'bom';
		bomData.push(bd1);
		const option1 = document.createElement('option');
		option1.text = p.orderItem?._id + ' - BOM (incl. all parts)';
		option1.value = (bomData.length - 1).toString();
		showBomCb!.add(option1);

		const bd2 = new BomOutputData();
		bd2.bomAfterTouches = p.bom;
		bd2.outputId = 'bom-short';
		bomData.push(bd2);
		const option2 = document.createElement('option');
		option2.text = p.orderItem?._id + ' - BOM';
		option2.value = (bomData.length - 1).toString();
		showBomCb!.add(option2);

		const bd3 = new BomOutputData();
		bd3.bomAfterTouches = p.bom;
		articleBomData.push(bd3);
	});

	// Add global messages
	logsAll = [...logsAll, ...articles.logMessages];

	if (displaySettingsList.hasFlag(DisplaySettingsType.TouchesLogs)) {
		intOutData.set('TouchesLogs', JSON.parse(JSON.stringify(articles.logMessages)));
	}

	if (articles.performanceLogs && articles.performanceLogs.length > 0) {
		intOutData.set('PerformanceLogs', JSON.parse(JSON.stringify(articles.performanceLogs)));
	}

	if (displaySettingsList.hasFlag(DisplaySettingsType.Touches)) {
		let touchesHash: any = {}; // build has table for better visilization
		articles.touches!.forEach(t => {
			const key: string = t.PartSelf._partId + ' => ' + t.Part2._partId + ': ' + t.Touch + ' (' + uuid() + ')';
			touchesHash[key] = t;
		});
		intOutData.set('Touches', touchesHash);
	}

	// pass cloned parts for drawing
	const drawParts = JSON.parse(JSON.stringify(articles.globalPartList, myHideParent)) as IVisualPart[];
	dockingInfo.forEach(d => {
		drawParts.push(d);
	});
	await AssignParts(drawParts, undefined, showOpenValue, showDockingValue);

	outputEditor!.set(JSON.parse(JSON.stringify(Object.fromEntries(intOutData), myHideParent)));

	// ### Show all data
	if (logsAll.length > 0) {
		let text = '';
		logsAll.forEach(logMessage => {
			if (logMessage.category == 'Error' || logMessage.category == 'Fatal') {
				text += logMessage.msg + '\r\n';
			}
		});
		updateErrorInfo(text);
	}

    populateModuleList(json);

	document.getElementById('conflictingChecksModuleList')?.addEventListener('change', (event) => {
		const selectedModuleId = (event.target as HTMLSelectElement).value;
		populateAttributeList(json, selectedModuleId);
		(document.getElementById('conflictingChecksAttributeSelectionsList') as HTMLSelectElement).innerHTML = '';
		(document.getElementById('conflictingChecksResult') as HTMLParagraphElement).innerHTML = '';
	  });
  
	  document.getElementById('conflictingChecksAttributeList')?.addEventListener('change', (event) => {
		const selectedAttributeId = (event.target as HTMLSelectElement).value;
		populateAttributeSelectionList(selectedAttributeId);
		(document.getElementById('conflictingChecksResult') as HTMLParagraphElement).innerHTML = '';
	  });

	showCalculateStatus(false);
};

const showCalculateStatus = (isRunning: boolean): void => {
	const statusLbl = document.getElementById('calculate-status')!;
	if (isRunning) {
		statusLbl.classList.add('lable-visible');
		statusLbl.classList.remove('lable-hidden');
	} else {
		statusLbl.classList.remove('lable-visible');
		statusLbl.classList.add('lable-hidden');
	}
};

const updateDisplaySettingsFlags = (): void => {
	displaySettingsList.resetFlags();
	let inputElement = document.getElementById('display_articles') as HTMLInputElement | null;
	if (inputElement?.checked) {
		displaySettingsList.setFlag(DisplaySettingsType.Articles);
	}

	inputElement = document.getElementById('display_touches') as HTMLInputElement | null;
	if (inputElement?.checked) {
		displaySettingsList.setFlag(DisplaySettingsType.Touches);
	}

	inputElement = document.getElementById('display_bom_after_touches') as HTMLInputElement | null;
	if (inputElement?.checked) {
		displaySettingsList.setFlag(DisplaySettingsType.BomAfterTouches);
	}
	inputElement = document.getElementById('display_logs') as HTMLInputElement | null;

	if (inputElement?.checked) {
		displaySettingsList.setFlag(DisplaySettingsType.Logs);
	}

	inputElement = document.getElementById('display_attr_changes') as HTMLInputElement | null;
	if (inputElement?.checked) {
		displaySettingsList.setFlag(DisplaySettingsType.AttrChanges);
	}

	inputElement = document.getElementById('display_touches_logs') as HTMLInputElement | null;
	if (inputElement?.checked) {
		displaySettingsList.setFlag(DisplaySettingsType.TouchesLogs);
	}
};

const myHideParent = (key: string, value: any): any => {
	if (key == 'parent') return undefined;
	if (key == 'parentBase') return undefined;
	return value;
};

const updateErrorInfo = (error: string): void => {
	const errorInfoElement = document.getElementById('errorInfo')!;
	errorInfoElement.innerHTML = error;
};

//#region Ui Actions:

const onBtnDataCompletionClick = async (): Promise<void> => {
	await doAll();
};

const onShowBOMChanged = (value: string): void => {
	const bd = bomData[parseInt(value)];
	createBomTable(bd.bomAfterTouches!);
	const table = document.getElementById('bomTable') as HTMLTableElement;
	if (bd.outputId != 'bom') {
		// Hide all unused-rows
		table.childNodes[0].childNodes.forEach(p => {
			const r = p as HTMLTableRowElement;
			if (r != null && r.getAttribute('opt') == '1') {
				r.style.visibility = 'collapse';
			}
		});
	} else {
		// Show all rows
		table.childNodes[0].childNodes.forEach(p => {
			const r = p as HTMLTableRowElement;
			if (r != null) {
				r.style.visibility = 'visible';
			}
		});
	}
};
const onManModeChanged = async (value: string): Promise<void> => {
	manModeCbValue = value;
	await doAll();
};

const createBomTable = (bom: PartBase[]): void => {
	const table = document.getElementById('bomTable')!;
	// Clear table
	while (table.firstChild) {
		table.removeChild(table.firstChild);
	}

	const tblBody = document.createElement('tbody');
	bom.forEach(p => {
		const rows = createBomTablePart(p, 0);
		rows.forEach(q => tblBody.appendChild(q));
	});

	table.appendChild(tblBody);
};

const createBomTablePart = (part: PartBase, level: number): HTMLTableRowElement[] => {
	const rows = [];
	const row = document.createElement('tr');
	// find out if this part has somewhere a bom entry
	if (!hasChildBom(part)) {
		row.setAttribute('opt', '1'); // mart this row as optional by setting a specific attribute
	}

	// add as many empty cells to reflect the level
	for (let i = 0; i < level; i++) {
		const cell = document.createElement('td');
		cell.classList.add('bom-level');
		row.appendChild(cell);
	}

	// PartId
	const cell1 = document.createElement('td');
	cell1.classList.add('bom-part');
	const lbl = document.createElement('label');
	lbl.appendChild(document.createTextNode(part._partId));
	// var pCb = document.createElement("input");
	// pCb.type = "checkbox";
	// pCb.name = part._id;
	// pCb.addEventListener('change', function () {
	//   if (this.checked) {
	//     this.highLightIds.push(this.name);
	//     this.AssignParts(undefined, undefined, this.highLightIds);
	//   } else {
	//     this.highLightIds = this.highLightIds.filter(p => p != this.name);
	//     this.AssignParts(undefined, undefined, this.highLightIds);
	//   }
	// });
	lbl.appendChild(document.createElement('br'));
	//lbl.appendChild(pCb);
	lbl.appendChild(document.createTextNode('Show'));
	cell1.appendChild(lbl);
	row.appendChild(cell1);

	// Part Attributes
	const cell2 = document.createElement('td');
	cell2.classList.add('bom-part');
	let attrs = 'dimx: ' + part._dimx + '<br/>dimy: ' + part._dimy + '<br/>dimz: ' + part._dimz;
	attrs += '<br/>x: ' + part._x + '<br/>y: ' + part._y + '<br/>z: ' + part._z;
	cell2.innerHTML = attrs;
	row.appendChild(cell2);

	// Other Attributes
	const cell3 = document.createElement('td');
	cell3.classList.add('bom-part');
	attrs = '';
	part.getAttributes().forEach((value: any, key: string) => {
		//for (const [key, value] of Object.entries(part.a)) {
		if (attrs != '') {
			attrs += '<br/>';
		}
		attrs += key + ': ' + value;
	});
	cell3.innerHTML = attrs;
	row.appendChild(cell3);

	rows.push(row);
	if (part._bom.length > 0) {
		part._bom.forEach(q => {
			const row2 = createBomTableBomEntry(q, level + 1);
			rows.push(row2);
		});
	}

	if (part._childParts.length > 0) {
		part._childParts.forEach(q => {
			const rows2 = createBomTablePart(q, level + 1);
			rows2.forEach(r => rows.push(r));
		});
	}

	return rows;
};

const hasChildBom = (part: PartBase): boolean => {
	if (part._bom.length > 0) {
		return true;
	}
	let hasBom = false;
	part._childParts.forEach(p => {
		if (hasChildBom(p)) {
			hasBom = true;
		}
	});

	return hasBom;
};

const createBomTableBomEntry = (bom: BOM_ElementTypeBase, level: number): HTMLTableRowElement => {
	const row = document.createElement('tr');
	for (let i = 0; i < level; i++) {
		const cell = document.createElement('td');
		cell.classList.add('bom-level');
		row.appendChild(cell);
	}
	const cell1 = document.createElement('td');
	cell1.classList.add('bom-bom');
	const cellText = document.createTextNode(bom._bomElementTypeId + ': ' + bom._description);
	cell1.appendChild(cellText);
	row.appendChild(cell1);

	const cell2 = document.createElement('td');
	cell2.classList.add('bom-bom');
	let attrs = '';
	bom.getAttributes().forEach((value, key) => {
		//for (const [key, value] of Object.entries(bom.a)) {
		if (attrs != '') {
			attrs += '<br/>';
		}
		attrs += key + ': ' + value;
	});
	cell2.innerHTML = attrs;
	row.appendChild(cell2);

	return row;
};

const onShowOpenChanged = async (): Promise<void> => {
	//this.showOpenValue = Boolean(value);
	await AssignParts(undefined, undefined, showOpenValue, showDockingValue);
};

const onShowDockingChanged = async (): Promise<void> => {
	await AssignParts(undefined, undefined, showOpenValue, showDockingValue);
};

const onCreateBomOutput = async (): Promise<void> => {
	const bomOutputCb = document.getElementById('bomOutputCb') as HTMLSelectElement;
	await createBomOutput(bomOutputCb?.value);
};

const createBomOutput = async (bomOutputDataIdx: string): Promise<void> => {
	const bd = bomOutputData[parseInt(bomOutputDataIdx)];
	console.log('BOM-OUTPUT: ' + bd.outputId);
	// find bomId class
	const bomFileResult = createBomOutputById(bd.bomAfterTouches!, bd.outputId!);

	const zip = new JSZip();

	bomFileResult.forEach((value, key) => {
		const blob = new Blob([value.content], { type: value.contentType });
		zip.file(key, blob);
	});

	const blob = await zip.generateAsync({ type: 'blob' });

	const url = URL.createObjectURL(blob);
	const anchorElement = document.createElement('a');
	anchorElement.href = url;
	anchorElement.download = bd.outputId + '.zip';
	anchorElement.click();
	anchorElement.remove();
	URL.revokeObjectURL(url);
};

const onCreateOrderBomOutput = async (): Promise<void> => {
	clearLogMessages(); // clear all log messages
	const bomOrderOutputCb = document.getElementById('bomOrderOutputCb') as HTMLSelectElement;
	const orderOutputId = bomOrderOutputCb?.value;
	let bomFileResult: Map<string, BomOutputFileEntry> | undefined;
	try {
		bomFileResult = createOrderOutput(orderOutputId);
	} catch (error) {
		if (error instanceof Error) {
			logError(error.message + '\n' + error.stack);
		} else {
			logError(JSON.stringify(error, null, 4));
		}
	}

	const logsAll = getLogMessages();
	let errText = '';
	if (logsAll.length > 0) {
		logsAll.forEach(logMessage => {
			if (logMessage.category == 'Error' || logMessage.category == 'Fatal') {
				errText += logMessage.msg + '<br/>';
			}
		});
	}
	updateErrorInfo(errText);

	const od = new OutputData();
	od.Logs = logsAll;
	outputEditor!.set(JSON.parse(JSON.stringify(od, myHideParent)));

	if (bomFileResult) {
		const zip = new JSZip();
		for (const [key, value] of bomFileResult.entries()) {
			if (!value) {
				continue;
			}

			if (value.contentType === 'additionalData') {
				try {
					if (!value.content) {
						zip.file(
							'_missing' + key,
							new Blob(['No content available for additional data with name: ' + value.fileName], {
								type: 'text/plain',
							})
						);
						continue;
					}

					const data = await fetch(value.content);
					if (!data) {
						zip.file(
							'_missing' + key,
							new Blob(['No data to be fetched for additional data with name: ' + value.fileName], {
								type: 'text/plain',
							})
						);
						continue;
					}

					const content = await data.blob();
					zip.file(key, content);
				} catch (e) {
					console.error('Failed to fetch additional data for : ' + value.fileName + ' exception: ' + e);
					zip.file(
						'_missing' + key,
						new Blob(['Failed to fetch additional data for : ' + value.fileName + ' exception: ' + e], {
							type: 'text/plain',
						})
					);
					continue;
				}
			} else if (value.contentType === 'binary') {
				try {
					const data = Buffer.from(value.content, 'base64');
					const blob = new Blob([data], {
						type: value.contentType,
					});
					zip.file(key, blob);
				} catch (e) {
					console.error('Failed to decode binary data for : ' + value.fileName + ' exception: ' + e);
					zip.file(
						'_missing' + key,
						new Blob(['Failed to decode binary data for : ' + value.fileName + ' exception: ' + e], {
							type: 'text/plain',
						})
					);
					continue;
				}
			} else {
				const blob = new Blob([value.content], {
					type: value.contentType,
				});
				zip.file(key, blob);
			}
		}

		const blob = await zip.generateAsync({ type: 'blob' });
		const url = URL.createObjectURL(blob);
		const anchorElement = document.createElement('a');
		anchorElement.href = url;
		anchorElement.download = 'orderData.zip';
		anchorElement.click();
		anchorElement.remove();
		URL.revokeObjectURL(url);
	}
};

const createOrderOutput = (orderOutputId: string): Map<string, BomOutputFileEntry> => {
	console.log('BOM-ORDER OUTPUT: ' + orderOutputId);

	let orderData: IOrderData = {
		orderId: 'ORDER-ID',
		orderNo: 1,
		posOrderNo: 'POS-ORDER-NO',
		posOrderDesc1: 'POS-ORDER-DESC1',
		posOrderDesc2: 'POS-ORDER-DESC2',
		posDeliveryDate: new Date(),
		shippingCountry: 'SHIPPING-COUNTRY',
		shippingState: 'SHIPPING-STATE',
		shippingZipCode: 'SHIPPING--ZIP-CODE',
		shippingStreetNo: 'SHIPPING-STREET-NO',
		shippingCity: 'SHIPPING-CITY',
		shopDescription: 'SHOP-DESCRIPTION',
		shopContact: 'SHOP-CONTACT',
		shopContactEmail: 'SHOP-CONTACT-EMAIL',
		shopContactPhone: 'SHOP-CONTACT-PHONE',
		targetProductionSite: 'TARGET-PRODUCTION-SITE',
	};
	let orderLines: IBomOrderLineDataJson[] = [];
	let idx = 0;
	articleBomData.forEach(p => {
		idx++;
		if (p.bomAfterTouches) {
			// Convert the bom data into json
			const bomEntriesJson: any[] = [];
			p.bomAfterTouches.forEach(q => {
				bomEntriesJson.push(q.toJson());
			});

			const ol: IBomOrderLineDataJson = {
				orderLineId: 'ORDER-LINE-NO',
				orderLineNo: idx,
				posOrderLineNo: 'POS-ORDER-LINE-NO',
				posArticleNo: 'POS-ARTICLE-NO',
				calcGroup: 'CALC-GROUP',
				quantity: 1,
				bom: bomEntriesJson,
			};
			orderLines.push(ol);
		}
	});

	const json: any = inputEditor!.get();
	// Check if we have a BOM order output generation in the editor
	if (json.hasOwnProperty('orderData')) {
		orderData = json.orderData;
		orderLines = json.bomOrderLines;
	}

	const result = createOrderOutputByIdFromJson(orderData, orderLines, orderOutputId);

	updateBomOutputContent(result, orderData, orderLines);
	return result;
};

const updateBomOutputContent = (
	orderOutput: Map<string, BomOutputFileEntry>,
	orderData: IOrderData,
	orderLines: IBomOrderLineDataJson[]
): void => {
	for (let [, bomOutput] of orderOutput) {
		if (bomOutput.contentType !== 'additionalData') {
			continue;
		}

		if (orderData.additionalData) {
			const orderDataEntry = orderData.additionalData.find(v => v.value === bomOutput.content);
			if (orderDataEntry) {
				bomOutput.content = (orderDataEntry as any).url;
				continue;
			}
		}

		for (let orderLine of orderLines) {
			if (!orderLine.additionalData) {
				continue;
			}

			const orderLineEntry = orderLine.additionalData.find(v => v.value === bomOutput.content);
			if (orderLineEntry) {
				bomOutput.content = (orderLineEntry as any).url;
				break;
			}
		}
	}
};

const onDownload3d = async (): Promise<void> => {
	const blob = await exportModel();
	const url = URL.createObjectURL(blob!);
	const anchorElement = document.createElement('a');
	anchorElement.href = url;

	if (blob!.type == 'text/plain') {
		anchorElement.download = 'scene.gltf';
	} else {
		anchorElement.download = 'scene.glb';
	}

	anchorElement.click();
	anchorElement.remove();
	URL.revokeObjectURL(url);
};

const onExecuteCheck = async (): Promise<void> => {
	const dropdownValues = testGetDropDownCheckValues(firstModule);
	populateCheckDropdown(dropdownValues);
};

const onCalculateConflictingCheck = async (): Promise<void> => {
    const moduleId = (document.getElementById('conflictingChecksModuleList') as HTMLSelectElement).value;
    const attributeId = (document.getElementById('conflictingChecksAttributeList') as HTMLSelectElement).value;
    const attributeValue = (document.getElementById('conflictingChecksAttributeSelectionsList') as HTMLSelectElement).value;
    const resultField = (document.getElementById('conflictingChecksResult') as HTMLParagraphElement);
    if (moduleId === '' || attributeId == '' || attributeValue == '') {
      window.alert("Ensure all inputs are filled")
      resultField.innerHTML = ''
      return;
    }
    const module = findModule(moduleId);
    if (module === undefined) {
      window.alert("Could not find selected module");
      resultField.innerHTML = ''
      return;
    }
    const leadingAttribute = new CheckAttributeValue();
    leadingAttribute.attrId = attributeId;
    //TODO: this attribute value is always a string (i think), which is not always what we want.
    leadingAttribute.value = attributeValue;
	const checkAttributes = module.getCheckAttributes();
    const result = ChecksLogic.calculateConflictingChange(checkAttributes, leadingAttribute);
    if (result.errorMsg !== undefined) {
      resultField.innerHTML = result.errorMsg;
    } else {
      const suggestionsList = result.overrideAttributes.map(attr => `<li>${attr.attrId}: ${attr.value}</li>`).join('');
      resultField.innerHTML = 'Suggestion: <ul>' + suggestionsList + '</ul>';
    }
  }

  const findModule = (moduleId: string): any | undefined => {
    function recurse(mod: OD_Base): any | undefined {
      if (mod._id === moduleId) {
        return mod;
      }
      for (const subModule of mod.m) {
        const result = recurse(subModule);
        if (result !== undefined) {
          return result;
        }
      }

      return undefined;
    }

    for (const articleResult of articles.articleResults) {
      const mod = articleResult.orderItem;
      if (mod !== undefined) {
        const recurseResult = recurse(mod);
        if (recurseResult !== undefined) {
          return recurseResult;
        }
      }
    }

    return undefined;
  }

  const populateModuleList = (json: any): void => {
    const moduleList = document.getElementById('conflictingChecksModuleList') as HTMLSelectElement;
    const moduleIdPairs = extractModuleIdPairs(json);

    moduleList.innerHTML = '';
    moduleIdPairs.forEach(([moduleName, moduleId]) => {
      const option = document.createElement('option');
      option.value = moduleId;
      option.textContent = `${moduleName} - ${moduleId}`;
      moduleList.appendChild(option);
    });

    moduleList.selectedIndex = -1;
  }

  const extractModuleIdPairs = (json: any): [string, string][] => {
    const result: [string, string][] = [];

    function recurse(modules: any[]) {
      for (const module of modules) {
        if (module.moduleId && module.id) {
          result.push([module.moduleId, module.id]);
        }
        if (Array.isArray(module.modules)) {
          recurse(module.modules);
        }
      }
    }

    recurse(json);
    return result;
  }

  const populateAttributeList = (json: any, moduleId: string): void => {
    const attributeList = document.getElementById('conflictingChecksAttributeList') as HTMLSelectElement;
    const attributeIds = getAttributesById(json, moduleId);

    attributeList.innerHTML = '';
    attributeIds.forEach((attributeId) => {
      const option = document.createElement('option');
      option.value = attributeId;
      option.textContent = attributeId;
      attributeList.appendChild(option);
    });

    attributeList.selectedIndex = -1;
  }

const getAttributesById = (json: any, targetId: string): string[] => {
  function recurse(modules: any[]): string[] {
    for (const module of modules) {
      if (module.id === targetId) {
        if (module.attributes) {
          return Object.keys(module.attributes);
        } else {
          return [];
        }
      }
      if (Array.isArray(module.modules)) {
        const found = recurse(module.modules);
        if (found.length > 0) {
          return found;
        }
      }
    }
    return [];
  }

  let result = recurse(json) || [];
  return result;
};

  const populateAttributeSelectionList = (attributeId: string): void => {
    const attributeSelectionsList = document.getElementById('conflictingChecksAttributeSelectionsList') as HTMLSelectElement;
    const attributeSelections = getSelectionsByAttrId(attributeId);
    console.log(attributeSelections);

    attributeSelectionsList.innerHTML = '';
    if (attributeSelections !== undefined) {
      attributeSelections.forEach((attributeSelection) => {
        const option = document.createElement('option');
        option.value = attributeSelection.value!.toString();
        option.textContent = attributeSelection.value?.toString()!;
        attributeSelectionsList.appendChild(option);
      });
    }

    attributeSelectionsList.selectedIndex = -1;
  }

const testGetDropDownCheckValues = (module: any) => {
  const attributes = module.getAttributes();
  const checkAttributes = module.getCheckAttributes();
  let result = new Map<string, CheckDropDownEntry[]>();
  for (const attr of attributes) {
    result = result.set(attr[0], ChecksLogic.getDropDownValues(checkAttributes, attr[0]) || []);
  }
  return result;
};

const populateCheckDropdown = (values: Map<string, CheckDropDownEntry[]>) => {
	const dropdown = document.getElementById('dropdownCheckList') as HTMLSelectElement;
	dropdown.innerHTML = ''; // Clear existing options

	values.forEach((v, k) => {
		v.forEach(x => {
			const option = document.createElement('option');
			option.text = `${k}: ${x.value} (${x.kind === 0 ? 'Normal' : 'Conflicting'})`;
			dropdown.add(option);
		});
	});
};

document.getElementById('calculate-btn')!.addEventListener('click', async () => {
	await onBtnDataCompletionClick();
});

document.getElementById('calculateConflictingChecksButton')!.addEventListener('click', async () => {
	await onCalculateConflictingCheck();
});

document.getElementById('testOrderCb')!.addEventListener('change', async ev => {
	await onTestOrderCbChanged((ev.target as HTMLSelectElement).value);
});

document.getElementById('showBomCb')!.addEventListener('change', ev => {
	onShowBOMChanged((ev.target as HTMLSelectElement).value);
});

document.getElementById('manModeCb')!.addEventListener('change', async ev => {
	await onManModeChanged((ev.target as HTMLSelectElement).value);
});

document.getElementById('showOpenCb')!.addEventListener('change', async ev => {
	const checkedValue = (ev.target as HTMLInputElement).checked;
	showOpenValue = checkedValue;
	console.log('Log ~ document.getElementById ~ showOpenValue:', showOpenValue);
	await onShowOpenChanged();
});

document.getElementById('showDockingCb')!.addEventListener('change', async ev => {
	const checkedValue = (ev.target as HTMLInputElement).checked;
	showDockingValue = checkedValue;
	console.log('Log ~ document.getElementById ~ showDockingValue:', showDockingValue);
	await onShowDockingChanged();
});

document.getElementById('createBomOutput')!.addEventListener('click', async () => {
	await onCreateBomOutput();
});

document.getElementById('createOrderBomOutput')!.addEventListener('click', async () => {
	await onCreateOrderBomOutput();
});

document.getElementById('download3d')!.addEventListener('click', async () => {
	await onDownload3d();
});

document.getElementById('executeCheck')!.addEventListener('click', () => {
	onExecuteCheck();
});

//#endregion

loadTestOrder().then(() => {
	console.log('Test order loaded');
});
