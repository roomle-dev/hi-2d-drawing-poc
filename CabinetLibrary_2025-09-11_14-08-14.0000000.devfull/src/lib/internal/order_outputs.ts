import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'

import { BomOutputFileEntry, createBomOutputById } from './bom_outputs';
import { PartBase } from './mod-base';
import { BOM_ElementTypeBase } from './bom/base';
import { create as xmlbuilder2Create } from 'xmlbuilder2';
import { GlobalFunc } from './global-func'
import { GlobalVars } from './global-vars';

export interface IOrderAdditionalData {
  key:string;
  value?:string;
  originalFileName?:string;
  fileType?:string;
  description?:string;
}

export interface IOrderData {
  orderId: string;
  orderNo: number;
  posOrderNo: string;
  posOrderDesc1?: string;
  posOrderDesc2?: string;
  posDeliveryDate?: Date;
  shippingCountry?: string;
  shippingState?: string;
  shippingZipCode?: string;
  shippingStreetNo?: string;
  shippingCity?: string;
  shopDescription?: string;
  shopContact?: string;
  shopContactEmail?: string;
  shopContactPhone?: string;
  targetProductionSite?: string;
  additionalData?:IOrderAdditionalData[];
}

export interface IBomOrderLineDataBase {
  orderLineId: string;
  orderLineNo: number;
  posOrderLineNo?: string;
  posArticleNo?: string;
  posArticleName?: string;
  posArticleDesc?: string;
  calcGroup?: string;
  quantity: number;
  additionalData?:IOrderAdditionalData[];
}
export interface IBomOrderLineData extends IBomOrderLineDataBase {
  bomEntries:PartBase[];
}

export interface IBomOrderLineDataJson extends IBomOrderLineDataBase {
  bom:any[];
}

class BomEntry extends BOM_ElementTypeBase {
  constructor() {
    super("", "", "", "", "");
  }
  _a:Map<string,any> = new Map<string,any>();
  override getAttributes() : Map<string,any> {
    return this._a;
  }

  loadJson(json:any): void {
    this._bomElementTypeId = json._bomElementTypeId;
    this._bomType = json._bomType;
    this._description = json._description;
    this._touchOrigin = json._touchOrigin;
    this._touchPart2Id = json._touchPart2Id;
    this._touchPart2Name = json._touchPart2Name;
    if (json.a) {
      for (var key in json.a) {
        if (json.a.hasOwnProperty(key)) {
          this._a.set(key, json.a[key]);
        }
      }
    }
  }
}

class BomPart extends PartBase {
  constructor() {
    super(undefined, "", 0, 0, 0, 0, 0, 0);
  }
  _a:Map<string,any> = new Map<string,any>();
  getAttributes():Map<string,any> {
    return this._a;
  }
  setAttributes():void {}
  checkAttributes():void {}
  createBomElements():void {}
  loadJson(json:any):void {
    // INFO: This must be in sync with the "PartBase.toJson"!
    this._id = json._id;
    this._partId = json._partId;
    this._wdt = json._wdt;
    this._x = json._x;
    this._y = json._y;
    this._z = json._z;
    this._dimx = json._dimx;
    this._dimy = json._dimy;
    this._dimz = json._dimz;
    this.parentId = json.parentId;
    this._xAbs = json._absx;
    this._yAbs = json._absy;
    this._zAbs = json._absz;
    this._groupRootId = json._groupRootId;
    this._groupParentId = json._groupParentId;
    if (Array.isArray(json._childParts)) {
      json._childParts.forEach((cp:any) => {
        var bp = new BomPart();
        bp.loadJson(cp);
        this._childParts.push(bp);
      });
    }
    if (Array.isArray(json._bom)) {
      json._bom.forEach((b:any) => {
        var be = new BomEntry();
        be.loadJson(b);
        this._bom.push(be);
      });
    }
    if (json.a) {
      for (var key in json.a) {
        if (json.a.hasOwnProperty(key)) {
          this._a.set(key, json.a[key]);
        }
      }
    }
  }
}

export function createOrderOutputByIdFromJson(o:IOrderData, ol: IBomOrderLineDataJson[], orderOutputId: string): Map<string, BomOutputFileEntry> {
  var old:IBomOrderLineData[] = [];
  // Convert json to PartBase[]
  ol.forEach(p => {
    var bomEntriesJson = p.bom;
    var bomEntries:PartBase[] = [];
    bomEntriesJson.forEach(q => {
      var bp = new BomPart();
      bp.loadJson(q);
      bomEntries.push(bp);
    });
    var oli: IBomOrderLineData =
    {
      orderLineId: p.orderLineId,
      orderLineNo: p.orderLineNo,
      posOrderLineNo: p.posOrderLineNo,
      posArticleNo: p.posArticleNo,
      calcGroup: p.calcGroup,
      quantity: p.quantity,
      bomEntries: bomEntries,
      additionalData: p.additionalData,
    }
    old.push(oli);
  });

  return createOrderOutputById(o, old, orderOutputId);
}

class OrderOutputBase {
  #g: GlobalVars = new GlobalVars();
  get g(): GlobalVars { return this.#g; }
}
export class OrderOutputBaseOutput_ProductionManager extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createOrderOutput(o:IOrderData, ol: IBomOrderLineData[]): Map<string,BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: August 2023
// By Ludwig Weber
// Purpose: Create OrderOutput for productionManager
//
// Description:
// Create OrderOutput for productionManager
// XML-Export
//
// Revisions:
// 
//===================================================

// Create variables
let outStr : string = '';
let countOL : number = 0;
let openEntity = false;
let openEntities = false;
let target = o.targetProductionSite;

// Function to validate strings
function escapeXml(unsafe: string | undefined): string {
  if (unsafe === undefined || unsafe === '') {
    return '';
  }
  return unsafe.replace(/[<>&'"]/g, function (c): string {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
    }
    return c;
  });
}

// Function to format the date
function formatDateToXml(dateInput: any): string {

  // Dynamic Fallback: actual date + 30 days
  const fallbackDate = new Date();
  fallbackDate.setDate(fallbackDate.getDate() + 30);

  if (!dateInput) {
    return fallbackDate.toISOString();
  }

  // Delete bracket with time zone
  const cleaned = typeof dateInput === 'string' ? dateInput.replace(/\s*\(.*\)/, '') : dateInput;
  const date = new Date(cleaned);

  if (isNaN(date.getTime())) {
    return fallbackDate.toISOString();
  }

  return date.toISOString();
}

//===================================================
// Insert the MPR-Files and drawings
//===================================================

// Order Row Data
ol.forEach(p =>
{
  // NC-Data
  let bo = this.createBomOutputCreate_Mpr(p.bomEntries);
  bo.forEach((value,key) => {
  result.set("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + key, value);
  })

  // Drawings
  let elem = this.createBomOutputCreate_Drawing(p.bomEntries);
  elem.forEach((value,key) => {
    result.set("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + key, value);
  })
});

//===================================================
// XML Header
//===================================================

outStr += '<?xml version="1.0" encoding="utf-8"?>' + '\n';
outStr += '<project' + '\n';

outStr += 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' + '\n';
outStr += 'xsi:schemaLocation="http://schemas.datacontract.org/2004/07/HomagGroup.ProductionManager.Core.Logic.Import ImportExport.xsd"' + '\n';
outStr += 'xsi:noNamespaceSchemaLocation="ImportExport.xsd"' + '\n';
outStr += 'xmlns="http://schemas.datacontract.org/2004/07/HomagGroup.ProductionManager.Core.Logic.Import" >' + '\n';

//===================================================
// Order Header
//===================================================

outStr += '<orders>' + '\n';
outStr += '<order>' + '\n';
outStr += '<properties>' + '\n';

// Order Header Data
outStr += '<param name="OrderName" value="' + o.orderNo + '" />' + '\n';
outStr += '<param name="CustomerName" value="' + escapeXml(o.shopContact!) + '" />' + '\n';
outStr += '<param name="CustomerNumber" value="' + escapeXml(o.posOrderDesc1!) + '" />' + '\n';
outStr += `<param name="OrderDate" value="${formatDateToXml(new Date())}" />\n`;
outStr += `<param name="DeliveryDate" value="${formatDateToXml(o.posDeliveryDate)}" />' + '\n`;
outStr += '<param name="AddressField1" value="Herr / Frau" />' + '\n';
outStr += '<param name="AddressField2" value="' + escapeXml(o.shopContact!) + '" />' + '\n';
outStr += '<param name="AddressField3" value="' + escapeXml(o.shippingStreetNo!) + '" />' + '\n';
outStr += '<param name="AddressField4" value="' + escapeXml(o.shippingZipCode!) + ' ' + escapeXml(o.shippingCity!) + '" />' + '\n';
outStr += '</properties>' + '\n';

outStr += '<images>' + '\n';
let fileIdx=0;
if (o.additionalData) {
  o.additionalData.forEach(ad => {
    if (ad.fileType) {
      outStr += '<image>' + '\n';
      outStr += '<properties>' + '\n';
      if (ad.fileType === "RoomImage") {
        outStr += '<param name="Category" value="OverviewImage" />' + '\n';
      } 
      else if (ad.fileType === "Room3DImage") {
        outStr += '<param name="Category" value="Autodesk3DsModel" />' + '\n';
      }
      if (ad.description) {
        outStr += '<param name="Description" value="' + escapeXml(ad.description) + '" />' + '\n';
      }
      outStr += '<param name="OriginalFileName" value="' + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
      outStr += '<param name="ImageLinkBinary" value="Images\\' + fileIdx + "_" + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
      outStr += '</properties>' + '\n';
      outStr += '</image>' + '\n';
      this.createFileEntry(result, 'Images/' + fileIdx + "_" + ad.originalFileName!, ad.value, "additionalData");
      fileIdx++;
    }
  });
}
outStr += '</images>' + '\n';
outStr += '<entities>' + '\n';

//===================================================
// Order Line Header
//===================================================

// Cycle for the order rows
ol.forEach(p =>
{
  countOL++;

  outStr += '<entity>' + '\n';
  outStr += '<properties>' + '\n';

  outStr += '<param name="Typ" value="OrderItem" />' + '\n';
  outStr += `<param name="OrderItemNumber" value="${p.posOrderLineNo ?? countOL}" />\n`;
  outStr += '<param name="ArticleNumber" value="' + p.posArticleNo + '" />' + '\n';
  outStr += '<param name="ArticleDescription" value="' + p.posArticleNo + '" />' + '\n';
  outStr += '<param name="Quantity" value="1" />' + '\n';
  outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';
  outStr += '<param name="ExternalSystemId" value="' + p.orderLineId + '" />' + '\n';

  outStr += '</properties>' + '\n';
  outStr += '<images>' + '\n';
  if (p.additionalData) {
    p.additionalData.forEach(ad => {
      if (ad.fileType) {
        outStr += '<image>' + '\n';
        outStr += '<properties>' + '\n';
        if (ad.fileType === "ArticleImage") {
          outStr += '<param name="Category" value="OverviewImage" />' + '\n';
        } 
        else if (ad.fileType === "Article3dModel") {
          outStr += '<param name="Category" value="Autodesk3DsModel" />' + '\n';
        }
        if (ad.description) {
          outStr += '<param name="Description" value="' + escapeXml(ad.description) + '" />' + '\n';
        }
        outStr += '<param name="OriginalFileName" value="' + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
        outStr += '<param name="ImageLinkBinary" value="Images\\' + fileIdx + "_" + escapeXml(ad.originalFileName ?? "") + '" />' + '\n';
        outStr += '</properties>' + '\n';
        outStr += '</image>' + '\n';
        this.createFileEntry(result, 'Images/' + fileIdx + "_" + ad.originalFileName!, ad.value, "additionalData");
        fileIdx++;
      }
    });
  }
  outStr += '</images>' + '\n';
  outStr += '<entities>' + '\n';

// Order Line Parts
//===================================================

  // Create output data for all elements in the order line
  let bom = this.createBomOutputCreate_Bom(p.bomEntries);
  let myParent = 'Root';
  
  // Find function for the output data
  const findBomParent = (parent:string): Map<string, BomOutputFileEntry> =>  {
    let r = new Map<string, BomOutputFileEntry> ();
  
    bom.forEach((value, key) => {
      let k = JSON.parse(key);
      if (k.parent === parent) {
        r.set(key, value);
      }
    })
    return r;   
  }

  // Insertion function for the XML-File
  function insertStringXML(k:any){
    if (k.Type === "Partgroup" && (k.category === target || target == 'TARGET-PRODUCTION-SITE' || target == undefined)){
      if (openEntities == true){outStr += '</entities>' + '\n'; openEntities = false;}
      if (openEntity == true){outStr += '</entity>' + '\n'; openEntity = false;}
      outStr += '<entity>' + '\n';
      openEntity = true;
      outStr += '<properties>' + '\n';           
      outStr += '<param name="Typ" value="Component" />' + '\n';
      outStr += '<param name="ArticleNumber" value="' + k.id + '" />' + '\n';
      outStr += '<param name="ArticleDescription" value="' + k.Name + '" />' + '\n';
      outStr += '<param name="Quantity" value="1" />' + '\n';
      outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';            
      outStr += '<param name="Length" value="' + k.width + '" />' + '\n';
      outStr += '<param name="Width" value="' + k.depth + '" />' + '\n';
      outStr += '<param name="Thickness" value="' + k.thickness + '" />' + '\n';     
      outStr += '</properties>' + '\n';
      outStr += '<images>' + '\n';
      outStr += '</images>' + '\n';
      outStr += '<entities>' + '\n';
      openEntities = true;                         
    }

    if (k.Type === "Board" && (k.category === target || target == 'TARGET-PRODUCTION-SITE' || target == undefined)) {
      outStr += '<entity>' + '\n';
      outStr += '<properties>' + '\n'; 
      outStr += '<param name="Elementtype" value="' + k.Type + '" />' + '\n';            
      outStr += '<param name="Typ" value="ProductionOrder" />' + '\n';
      outStr += '<param name="ArticleNumber" value="' + k.Name + '" />' + '\n';
      outStr += '<param name="ArticleDescription" value="' + k.Name + ' of ' + k.parent + '" />' + '\n';
      outStr += '<param name="ArticleGroup" value="' + k.ArticleGroup + '" />' + '\n';
      outStr += '<param name="Quantity" value="1" />' + '\n';
      outStr += '<param name="QuantityUnit" value="pcs" />' + '\n';
      if(result.has("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr')){
        outStr += '<param name="CncProgramName" value="Images\\' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr" />' + '\n';
      }
      
      outStr += '<param name="Material" value="' + k.material + '" />' + '\n';
      outStr += '<param name="Grain" value="' + k.grain + '" />' + '\n';
      outStr += '<param name="FinishLength" value="' + k.width + '" />' + '\n';
      outStr += '<param name="FinishWidth" value="' + k.depth + '" />' + '\n';
      outStr += '<param name="Length" value="' + k.cutLength + '" />' + '\n';
      outStr += '<param name="Width" value="' + k.cutWidth + '" />' + '\n';
      outStr += '<param name="Thickness" value="' + k.thickness + '" />' + '\n';
      outStr += '<param name="EdgeDiagram" value="' + k.EdgeTransition + '" />' + '\n';                
      outStr += '<param name="EdgeFront" value="' + k.EdgeFront + '" />' + '\n'; 
      outStr += '<param name="EdgeBack" value="' + k.EdgeBack + '" />' + '\n'; 
      outStr += '<param name="EdgeLeft" value="' + k.EdgeLeft + '" />' + '\n'; 
      outStr += '<param name="EdgeRight" value="' + k.EdgeRight + '" />' + '\n'; 
      outStr += '</properties>' + '\n';

      // Reference to the MPR
      outStr += '<images>' + '\n'; 
      if(result.has("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr')){
        outStr += '<image>' + '\n';
        outStr += '<properties>' + '\n'; 
        outStr += '<param name="Category" value="MPR" />' + '\n'; 
        outStr += '<param name="Description" value="Bohrbild" />' + '\n'; 
        outStr += '<param name="OriginalFileName" value="' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr" />' + '\n'; 
        outStr += '<param name="ImageLinkBinary" value="Images\\' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.mpr" />' + '\n'; 
        outStr += '</properties>' + '\n';
        outStr += '</image>' + '\n';
      } 
      outStr += '</images>' + '\n';

      // Reference to the SVG
      outStr += '<images>' + '\n'; 
      if(result.has("Images/" + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.svg')){
        outStr += '<image>' + '\n';
        outStr += '<properties>' + '\n'; 
        outStr += '<param name="Category" value="SVG" />' + '\n'; 
        outStr += '<param name="Description" value="Bauteilzeichnung" />' + '\n'; 
        outStr += '<param name="OriginalFileName" value="' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.svg" />' + '\n'; 
        outStr += '<param name="ImageLinkBinary" value="Images\\' + o.orderNo + "_" + p.orderLineNo + "_" + k.barcode + '.svg" />' + '\n'; 
        outStr += '</properties>' + '\n';
        outStr += '</image>' + '\n';
      } 
      outStr += '</images>' + '\n';

      outStr += '</entity>' + '\n';         
    }
  }

  // Logic for data insertion to the string Level1
  let res = findBomParent(myParent);
  res.forEach((value,key) => {
    let k = JSON.parse(key);
    insertStringXML(k);

    // Logic for data insertion to the string Level2
    let res1 = findBomParent(k.id);
    res1.forEach((value,key) => {
      let k = JSON.parse(key); 
      insertStringXML(k);

      // Logic for data insertion to the string Level3
      let res2 = findBomParent(k.id);
      res2.forEach((value,key) => {
        let k = JSON.parse(key);
        insertStringXML(k);
    
      })
    })		
  })   
  
//===================================================
// Closing the order line
//===================================================

// Close the part group if it is opended
if (openEntities == true){outStr += '</entities>' + '\n'; openEntities = false;}
if (openEntity == true){outStr += '</entity>' + '\n'; openEntity = false;}

// Close the order line
outStr += '</entities>' + '\n'; 
outStr += '</entity>' + '\n';
});

//===================================================
// Closing the order and project
//===================================================

// Close all open brackets
outStr += '</entities>' + '\n';
outStr += '</order>' + '\n';
outStr += '</orders>' + '\n';
outStr += '</project>' + '\n';

// Create File
this.createFileEntry(result, "project.xml", outStr);
    // ###############################################################
    // ################### END CUSTOM SCRIPTS ########################
    // ###############################################################
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    internal_leaveBomOrderOutput();
    return result;
  }
}
export class OrderOutputBaseOutput_Drawings extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createOrderOutput(o:IOrderData, ol: IBomOrderLineData[]): Map<string,BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: Nov 2022
// By Ludwig Weber
// Purpose: Create Zip-file for all part drawings
//
// Description:
// Create Zip-file
//
// Revisions:
// 
//===================================================

// Order Row Data
ol.forEach(p =>{

  // Zip all the drawings
  var bo = this.createBomOutputCreate_Drawing(p.bomEntries);
  bo.forEach((value,key) => {
    result.set(p.orderLineNo + "_" + key, value);
  })
});
    // ###############################################################
    // ################### END CUSTOM SCRIPTS ########################
    // ###############################################################
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    internal_leaveBomOrderOutput();
    return result;
  }
}
export class OrderOutputBaseOutput_Mpr extends OrderOutputBase {
  createFileEntry(result: Map<string, BomOutputFileEntry>, fileName: string, content: any, contentType: string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      logError("File '" + fileName + "' is already placed in the output(duplicate)! Ignoring!");
    }
    result.set(fileName, bom);
  }
  createBomOutputCreate_Bom(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Bom');
  }
  createBomOutputCreate_Drawing(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Drawing');
  }
  createBomOutputCreate_Mpr(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'Create_Mpr');
  }
  createBomOutputcreate_DrawingOld(bom: PartBase[]):Map<string,BomOutputFileEntry> {
    return createBomOutputById(bom, 'create_DrawingOld');
  }
  createOrderOutput(o:IOrderData, ol: IBomOrderLineData[]): Map<string,BomOutputFileEntry> {
    internal_enterBomOrderOutput();
    let result = new Map<string, BomOutputFileEntry>();
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: Nov 2022
// By Ludwig Weber
// Purpose: Create Zip-file for all pMPR-files
//
// Description:
// Create Zip-file
//
// Revisions:
// 
//===================================================

// Order Row Data
ol.forEach(p =>{
  // Zip all the Mpr-files
  var bo = this.createBomOutputCreate_Mpr(p.bomEntries);
  bo.forEach((value,key) => {
    result.set(p.orderLineNo + "_" + key, value);
  })
});
    // ###############################################################
    // ################### END CUSTOM SCRIPTS ########################
    // ###############################################################
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    internal_leaveBomOrderOutput();
    return result;
  }
}
export function createOrderOutputById(o:IOrderData, ol: IBomOrderLineData[], orderOutputId: string): Map<string, BomOutputFileEntry> {
  if (orderOutputId.toLowerCase() == 'output_productionmanager') {
    let inst = new OrderOutputBaseOutput_ProductionManager();
    return inst.createOrderOutput(o, ol);
  }
  if (orderOutputId.toLowerCase() == 'output_drawings') {
    let inst = new OrderOutputBaseOutput_Drawings();
    return inst.createOrderOutput(o, ol);
  }
  if (orderOutputId.toLowerCase() == 'output_mpr') {
    let inst = new OrderOutputBaseOutput_Mpr();
    return inst.createOrderOutput(o, ol);
  }
  throw new Error("Could not find given order output type (" + orderOutputId + ")");
}

export var bomOrderOutputs: string[] = [
"Output_ProductionManager",
"Output_Drawings",
"Output_Mpr",
];
