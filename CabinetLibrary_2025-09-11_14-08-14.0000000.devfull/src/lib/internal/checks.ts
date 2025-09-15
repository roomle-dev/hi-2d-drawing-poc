import { getSelectionsByAttrId } from './selections';
export var checks:CheckDefinition[] = [
// CHECK 3 is INVALID
  {
    attrIds: [
'mod_FrontColor','mod_FrontProgram'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["152", "Classic"],
  ["155", "Classic"],
  ["160", "Classic"],
  ["165", "Classic"],
  ["190", "Classic"],
  ["199", "Classic"],
  ["199", "Tradition"],
  ["214", "Nature"],
  ["214", "Tradition"],
  ["215", "Nature"],
  ["215", "Tradition"],
  ["229", "Nature"],
  ["229", "Tradition"],
  ["230", "Nature"],
  ["230", "Tradition"],
  ["240", "Nature"],
  ["240", "Tradition"],
  ["222", "Nature"],
  ["222", "Tradition"],
  ["178", "Classic"],
  ["380", "Modern"],
  ["326", "Modern"],
  ["324", "Modern"],
  ["316", "Modern"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_PlinthAreaDesign','mod_PlinthAreaHeight'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["20", 50],
  ["20", 80],
  ["20", 100],
  ["20", 150],
  ["20", 200],
  ["30", 100],
  ["30", 120],
  ["30", 150],
  ["40", 100],
  ["40", 120],
  ["40", 150],
  ["50", 250],
  ["10", 0],
  ["10", 100],
  ["10", 120],
  ["10", 150],
  ["10", 200],
  ["10", 250],
  ["10", 50],
  ["10", 80],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_CountertopColor','mod_CountertopProgram'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["316", "Style"],
  ["326", "Style"],
  ["152", "Cube"],
  ["155", "Cube"],
  ["160", "Cube"],
  ["165", "Cube"],
  ["190", "Cube"],
  ["199", "Cube"],
  ["324", "Style"],
  ["380", "Style"],
  ["178", "Cube"],
  ["240", "Style"],
  ["230", "Style"],
  ["229", "Style"],
  ["222", "Style"],
  ["215", "Style"],
  ["214", "Style"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_HandleColor','mod_HandleDesign'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["NoColor", "10"],
  ["Black", "100"],
  ["Tin", "100"],
  ["StainlessSteel", "110"],
  ["Black", "120"],
  ["StainlessSteel", "120"],
  ["Black", "130"],
  ["BrassPlatedAntique", "130"],
  ["StainlessSteel", "130"],
  ["StainlessSteelMattBrushed", "20"],
  ["StainlessSteelMattBrushed", "30"],
  ["StainlessSteel", "40"],
  ["StainlessSteelMattBrushed", "40"],
  ["StainlessSteel", "50"],
  ["StainlessSteelMattBrushed", "50"],
  ["Black", "60"],
  ["BrassPlatedAntique", "60"],
  ["ChromedPolished", "60"],
  ["NickelPlated", "40"],
  ["NickelPlated", "50"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_CarcaseBackwallProgram','mod_CarcaseBackwallColor'],
    colIds: [
'GrainGroupId','GrainGroupId'      ],
    validEntries: [
  ["Neutral", "NoGrain"],
  ["Vertical", "Grain"],
  ["Horizontal", "Grain"],
  ["Neutral", "Grain"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_ToekickProgram','mod_ToekickColor'],
    colIds: [
'GrainGroupId','GrainGroupId'      ],
    validEntries: [
  ["Neutral", "NoGrain"],
  ["Vertical", "Grain"],
  ["Horizontal", "Grain"],
  ["Neutral", "Grain"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_CarcaseProgram','mod_CarcaseColor'],
    colIds: [
'GrainGroupId','GrainGroupId'      ],
    validEntries: [
  ["Neutral", "NoGrain"],
  ["Vertical", "Grain"],
  ["Horizontal", "Grain"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_CarcaseColor','mod_HardwareColor'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["316", "LightColor"],
  ["152", "LightColor"],
  ["155", "LightColor"],
  ["160", "LightColor"],
  ["165", "LightColor"],
  ["214", "LightColor"],
  ["215", "LightColor"],
  ["230", "LightColor"],
  ["222", "LightColor"],
  ["178", "LightColor"],
  ["199", "BlackColor"],
  ["190", "WhiteColor"],
  ["229", "DarkColor"],
  ["240", "DarkColor"],
  ["326", "DarkColor"],
  ["324", "DarkColor"],
  ["380", "LightColor"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_HardwareColor','mod_HingeColor'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["DarkColor", "DemoNickelPlated"],
  ["DarkColor", "DemoBlack"],
  ["LightColor", "DemoNickelPlated"],
  ["LightColor", "DemoBlack"],
  ["WhiteColor", "DemoNickelPlated"],
  ["WhiteColor", "DemoBlack"],
  ["BlackColor", "DemoBlack"],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_ShelfadjColor','mod_ShelfadjThk'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["316", 16],
  ["316", 19],
  ["316", 25],
  ["326", 16],
  ["326", 19],
  ["326", 25],
  ["152", 16],
  ["152", 19],
  ["152", 25],
  ["155", 16],
  ["155", 19],
  ["155", 25],
  ["160", 16],
  ["160", 19],
  ["160", 25],
  ["165", 16],
  ["165", 19],
  ["165", 25],
  ["190", 16],
  ["190", 19],
  ["190", 25],
  ["199", 16],
  ["199", 19],
  ["199", 25],
  ["214", 16],
  ["214", 19],
  ["214", 25],
  ["324", 16],
  ["324", 19],
  ["324", 25],
  ["215", 16],
  ["215", 19],
  ["215", 25],
  ["229", 16],
  ["229", 19],
  ["229", 25],
  ["230", 16],
  ["230", 19],
  ["230", 25],
  ["240", 16],
  ["240", 19],
  ["240", 25],
  ["222", 16],
  ["222", 19],
  ["222", 25],
  ["380", 16],
  ["380", 19],
  ["380", 25],
  ["178", 16],
  ["178", 19],
  ["178", 25],
  ["FloatGlass", 5],
  ["SatinGlass", 5],
  ["GreyGlass", 5],
      ],
  } as CheckDefinition,
  {
    attrIds: [
'mod_ShelfadjColor','mod_ShelfadjDesign'],
    colIds: [
undefined,undefined      ],
    validEntries: [
  ["316", "10"],
  ["316", "20"],
  ["316", "40"],
  ["316", "50"],
  ["326", "10"],
  ["326", "20"],
  ["326", "40"],
  ["326", "50"],
  ["152", "10"],
  ["152", "20"],
  ["152", "40"],
  ["152", "50"],
  ["155", "10"],
  ["155", "20"],
  ["155", "40"],
  ["155", "50"],
  ["160", "10"],
  ["160", "20"],
  ["160", "40"],
  ["160", "50"],
  ["165", "10"],
  ["165", "20"],
  ["165", "40"],
  ["165", "50"],
  ["190", "10"],
  ["190", "20"],
  ["190", "40"],
  ["190", "50"],
  ["199", "10"],
  ["199", "20"],
  ["199", "40"],
  ["199", "50"],
  ["214", "10"],
  ["214", "20"],
  ["214", "40"],
  ["214", "50"],
  ["324", "10"],
  ["324", "20"],
  ["324", "40"],
  ["324", "50"],
  ["215", "10"],
  ["215", "20"],
  ["215", "40"],
  ["215", "50"],
  ["229", "10"],
  ["229", "20"],
  ["229", "40"],
  ["229", "50"],
  ["230", "10"],
  ["230", "20"],
  ["230", "40"],
  ["230", "50"],
  ["240", "10"],
  ["240", "20"],
  ["240", "40"],
  ["240", "50"],
  ["222", "10"],
  ["222", "20"],
  ["222", "40"],
  ["222", "50"],
  ["380", "10"],
  ["380", "20"],
  ["380", "40"],
  ["380", "50"],
  ["178", "10"],
  ["178", "20"],
  ["178", "40"],
  ["178", "50"],
  ["FloatGlass", "10"],
  ["FloatGlass", "20"],
  ["SatinGlass", "10"],
  ["SatinGlass", "20"],
  ["GreyGlass", "10"],
  ["GreyGlass", "20"],
  ["FloatGlass", "30"],
  ["GreyGlass", "30"],
  ["SatinGlass", "30"],
      ],
  } as CheckDefinition,
];


export enum CheckDropDownEntryKind {
    Normal,
    Conflicting,
}

export class CheckDropDownEntry {
    value: AttributeValue;
    kind: CheckDropDownEntryKind = CheckDropDownEntryKind.Normal;
}

export class CheckAttributeValue {
    attrId: string = '';
    value: AttributeValue;
}

export class CheckConflictResult {
    errorMsg?: string; // should never happen
    overrideAttributes: CheckAttributeValue[] = []; // suggestions of the new values
}

class CheckDefinition {
    attrIds: string[] = [];
    colIds: (string | undefined)[] = [];
    validEntries: AttributeValue[][] = [];
}

class AttributeAndColumnId {
    constructor(attributeId: string, columnId: string | undefined) {
        this.attributeId = attributeId;
        this.columnId = columnId;
    }
    attributeId: string;
    columnId: string | undefined;
}

type AttributeValue = string | number | boolean | undefined;
type CheckAttributesMap = Map<string, AttributeValue>;

export class ChecksLogic {
    // Returns the possible values for a specific drop-down in a specific module situation
    // Returns undefined if we do not have checks defined
    static getDropDownValues(
        checkAttributes: CheckAttributesMap | undefined,
        attrId: string // The id of the attribute
    ) {
        if (!checkAttributes) {
            return undefined;
        }
        var dropDownEntries: CheckDropDownEntry[] = [];
        let checksCount = 0;
        let selections = getSelectionsByAttrId(attrId);
        if (selections === undefined) {
            return undefined;
        } else {
            checks.forEach((c) => {

                let validValues: AttributeValue[] = []; // can be the "normal value" OR the "column value""

                // Find Index in attrArray
                let idx = c.attrIds.findIndex((p) => p === attrId);

                if (idx >= 0) {
                    checksCount++;
                    // INFO: Currently we ONLY support two columns!
                    // INFO: We later might just go through ALL the other columns
                    let otherIdx = (idx + 1) % 2;
                    let otherCurrentValue: AttributeValue;
                    if (!c.colIds[otherIdx]) {
                        otherCurrentValue = checkAttributes.get(c.attrIds[otherIdx]);
                    } else {
                        const columnId = (c.colIds[otherIdx])!;
                        const attributeId = c.attrIds[otherIdx] + ':' + columnId;

                        //Checks if the module supports the attribute
                        const attribute = checkAttributes.get(attributeId);
                        if (attribute) {
                            otherCurrentValue = attribute;
                        }
                    }

                    // this is undefined if the attribute is not provided in the checkAttributes.
                    // if not provided in the checksAttributes, it can be ignored
                    if (otherCurrentValue === undefined) {
                        return;
                    }

                    c.validEntries.forEach((entry) => {
                        let otherAttrValue = entry[otherIdx];
                        // Check if the CURRENT modules value matches this value
                        if (otherCurrentValue == otherAttrValue) {
                            // Matches
                            validValues.push(entry[idx]);
                        }
                    });

                    if (!c.colIds[idx]) {
                        processSelections(selections, validValues, dropDownEntries);
                    } else {
                        processSelections(selections, validValues, dropDownEntries, c.colIds[idx]);
                    }
                }
            });
        }

        if (checksCount === 0) {
            // The attribute is NOT inside the check network, so ALL values are valid
            return undefined;
        }

        return dropDownEntries;
    }

    static calculateConflictingChange(
        checkAttributes: CheckAttributesMap | undefined,
        leadingAttribute: CheckAttributeValue,
    ): CheckConflictResult {
        let conflictResult = new CheckConflictResult();
        const attributesWithColumnIds = getUsedAttributesWithColumnIds(leadingAttribute.attrId, checks);

        if (!checkAttributes) {
            return conflictResult;
        }

        if (!checkAttributes.get(leadingAttribute.attrId)) {
            conflictResult.errorMsg = "Attribute not found in module";
            return conflictResult;
        }

        if (attributesWithColumnIds.length === 0) {
            // if no attributes can be found, the attribute is not part of the checks network, can be safely set.
            return conflictResult;
        }

        const minCheckAttributes = generateMinimalCheckAttributesMap(checkAttributes, attributesWithColumnIds);
        if (!setAttributeValue(minCheckAttributes, leadingAttribute, attributesWithColumnIds)) {
            conflictResult.errorMsg = `Could not set attribute ${leadingAttribute.attrId} to value ${leadingAttribute.value}`;
            return conflictResult;
        }

        const dropDownValues = this.getDropDownValues(minCheckAttributes, leadingAttribute.attrId);
        if (!dropDownValues || dropDownValues.every(value => value.kind === CheckDropDownEntryKind.Normal)) {
            return conflictResult;
        }

        conflictResult = solveConflict(minCheckAttributes, leadingAttribute, attributesWithColumnIds);

        return conflictResult;
    }

    static checkConflicts(module: any) {
        // TODO: Can be called when we open an order after the checks had changed
    }
}

function addDropDownEntry(dropDownEntries: CheckDropDownEntry[], value: AttributeValue, kind: CheckDropDownEntryKind) {
    const dropDownIndex = dropDownEntries.findIndex((entry) => entry.value === value);
    if (dropDownIndex === -1) {
        dropDownEntries.push({ value, kind });
    }
    else if (kind == CheckDropDownEntryKind.Conflicting) {
        dropDownEntries[dropDownIndex].kind = CheckDropDownEntryKind.Conflicting;
    }
}

function processSelections(selections: any[], validValues: AttributeValue[], dropDownEntries: CheckDropDownEntry[], colId?: string) {
    selections.forEach((s) => {
        if (s.value !== undefined) {
            const isValid = colId
                ? validValues.findIndex((vv) => vv == ((s as any).matrix as any)[colId]) >= 0
                : validValues.findIndex((vv) => vv == s.value) >= 0;
            const kind = isValid ? CheckDropDownEntryKind.Normal : CheckDropDownEntryKind.Conflicting;
            addDropDownEntry(dropDownEntries, s.value, kind);
        }
    });
}

function solveConflict(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue, attributesWithColumnIds: AttributeAndColumnId[]): CheckConflictResult {
    const state = new Map<string, AttributeValue>();
    setAttributeValue(state, leadingAttribute, attributesWithColumnIds);

    const neighborIds = getAttributeNeighborsIds(leadingAttribute.attrId);
    const queue = new Queue<string>();
    queue.enqueueMany(neighborIds);

    const result = solveConflictRecursively(checkAttributes, attributesWithColumnIds, state, queue);

    return result;
}

function getAttributeNeighborsIds(attributeId: string): string[] {
    const neighborIds = new Set<string>();
    for (const check of checks) {
        if (check.attrIds.some(id => id === attributeId)) {
            check.attrIds.forEach(id => neighborIds.add(id));
        }
    }
    neighborIds.delete(attributeId);
    return Array.from(neighborIds);
}

/**
 * Solves conflicts by checking only the neighboring attributes of a changed attribute
 * initialState: the original values of the attributes
 * attributesWithColumnIds: attributes and columns needed from the checks. just for simpler usage, I think
 * state: the required new values set for attributes
 * neighborsQueue: the attributes that might be affected by the attributes set in s
*/
function solveConflictRecursively(initialState: CheckAttributesMap, attributesWithColumnIds: AttributeAndColumnId[], state: CheckAttributesMap, neighborIdsQueue: Queue<string>): CheckConflictResult {
    if (neighborIdsQueue.isEmpty()) {
        const conflictResult = new CheckConflictResult();
        conflictResult.overrideAttributes = Array.from(state.entries())
            // return only attribute values, no need for custom column values
            .filter(([key]) => !key.includes(':'))
            .map(([attrId, value]) => ({ attrId, value }));
        return conflictResult;
    }

    // Is current selection valid? Try to see if it satisfies the current state.
    const attributeId = neighborIdsQueue.dequeue()!;
    const dropDownValues = ChecksLogic.getDropDownValues(state, attributeId);
    const searchedAttributeValue = initialState.get(attributeId);
    const currentAttributeValue = dropDownValues?.find(entry => entry.value == searchedAttributeValue);
    const isInitialSelectionValid = currentAttributeValue === undefined || currentAttributeValue.kind === CheckDropDownEntryKind.Normal;

    if (isInitialSelectionValid) {
        // the current state does not make this attribute change its value
        const conflictSolution = solveConflictRecursively(initialState, attributesWithColumnIds, state, neighborIdsQueue);
        if (conflictSolution.errorMsg === undefined) {
            return conflictSolution;
        }
    }

    // the value for the current attribute does not fit based on the current state.
    // try to find one attribute selection that respects the state
    let attributeSelections = getSelectionsByAttrId(attributeId);
    if (attributeSelections === undefined) {
        const failedResult = new CheckConflictResult();
        failedResult.errorMsg = `Could not find selections for attribute ${attributeId}`;
        return failedResult;
    }

    for (const selection of attributeSelections) {
        const selectionAttributeValue = dropDownValues?.find(entry => entry.value == selection.value);
        const isSelectionValid = selectionAttributeValue === undefined || selectionAttributeValue.kind === CheckDropDownEntryKind.Normal;
        if (!isSelectionValid) {
            continue;
        }

        setAttributeValueBySelection(state, { attrId: attributeId, value: selection.value }, selection, attributesWithColumnIds);

        const attributeNeighborsIds = getAttributeNeighborsIds(attributeId);
        const unhandledNeighbors: string[] = [];
        for (const neighborAttributeId of attributeNeighborsIds) {
            if (state.get(neighborAttributeId) === undefined && !neighborIdsQueue.contains(neighborAttributeId)) {
                unhandledNeighbors.push(neighborAttributeId);
            }
        }
        // Q := (Q \ {attributeId}) U (Neighbors \ S)
        neighborIdsQueue.enqueueMany(unhandledNeighbors);

        const conflictSolution = solveConflictRecursively(initialState, attributesWithColumnIds, state, neighborIdsQueue);
        if (conflictSolution.errorMsg === undefined) {
            return conflictSolution;
        }

        // when reaching this point, it means all supersets of the updated state are invalid.
        // try another updated state by changing the selection used for this attribute.
        unsetAttributeValue(state, attributeId, attributesWithColumnIds);
    }

    // when reaching this point, there is no selection for this attribute that works with the current state.
    const failedResult = new CheckConflictResult();
    failedResult.errorMsg = "Could not find a valid combination of attribute selections that could work";
    return failedResult;
}


function generateMinimalCheckAttributesMap(checkAttributes: CheckAttributesMap, attributesWithColumnIds: AttributeAndColumnId[]): CheckAttributesMap {
    const minimalCopy: CheckAttributesMap = new Map();

    attributesWithColumnIds.forEach(attributeIdAndValue => {
        const attributeId = attributeIdAndValue.attributeId;
        const attributeColumn = attributeIdAndValue.columnId;
        const expectedAttributeProperty = getAttributeCheckKey(attributeId, attributeColumn);
        const attributeValue = checkAttributes.get(expectedAttributeProperty)
        if (attributeValue !== undefined) {
            minimalCopy.set(expectedAttributeProperty, attributeValue);
        }
        if (checkAttributes.get(attributeId) !== undefined) {
            minimalCopy.set(attributeId, checkAttributes.get(attributeId));
        }
    });

    return minimalCopy;
}

function setAttributeValueBySelection(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue, selection: any, attributesWithColumnIds: AttributeAndColumnId[]) {
    checkAttributes.set(leadingAttribute.attrId, leadingAttribute.value)
    const columns = attributesWithColumnIds
        .filter(a => a.attributeId === leadingAttribute.attrId && a.columnId)
        .map(a => a.columnId);

    columns.forEach(column => {
        const expectedId = getAttributeCheckKey(leadingAttribute.attrId, column);
        checkAttributes.set(expectedId, (selection as any).matrix[column!]);
    });
}

function setAttributeValue(checkAttributes: CheckAttributesMap, leadingAttribute: CheckAttributeValue, attributesWithColumnIds: Array<AttributeAndColumnId>): boolean {
    const attributeSelections = getSelectionsByAttrId(leadingAttribute.attrId);
    if (!attributeSelections) {
        return false;
    }
    const row = attributeSelections.find(p => p.value !== undefined && p.value == leadingAttribute.value);
    if (!row) {
        return false;
    }
    setAttributeValueBySelection(checkAttributes, leadingAttribute, row, attributesWithColumnIds);

    return true;
}

function unsetAttributeValue(checkAttributes: CheckAttributesMap, attributeId: string, attributesWithColumnIds: AttributeAndColumnId[]) {
    const attributeEntries = attributesWithColumnIds.filter(x => x.attributeId === attributeId);
    for (const entry of attributeEntries) {
        const key = entry.columnId === undefined
            ? entry.attributeId
            : getAttributeCheckKey(entry.attributeId, entry.columnId);
        checkAttributes.delete(key);
    }
}

function getUsedAttributesWithColumnIds(leadingAttributeId: string, checks: CheckDefinition[]): AttributeAndColumnId[] {
    const result = getUsedAttributesWithColumnIdsRecursively(leadingAttributeId, checks, []);
    return Array.from(result.values());
}

function getUsedAttributesWithColumnIdsRecursively(leadingAttributeId: string, checks: CheckDefinition[], visitedChecks: CheckDefinition[]): Map<string, AttributeAndColumnId> {
    const result = new Map<string, AttributeAndColumnId>();
    const checksContainingLeadingAttribute = checks
        .filter(check => check.attrIds.findIndex(attributeId => attributeId === leadingAttributeId) != -1 &&
            visitedChecks.findIndex(visitedCheck => visitedCheck === check) === -1);

    checksContainingLeadingAttribute.forEach(check => {

        const leadingAttributeIndex = check.attrIds.indexOf(leadingAttributeId);
        const leadingAttributeColumnId = check.colIds[leadingAttributeIndex];
        const leadingAttributeAndColumnId = new AttributeAndColumnId(leadingAttributeId, leadingAttributeColumnId);
        const leadingAttributeKey = getAttributeKey(leadingAttributeAndColumnId);
        result.set(leadingAttributeKey, leadingAttributeAndColumnId);

        const otherAttributeIndex = check.attrIds.findIndex(attributeId => attributeId !== leadingAttributeId);
        const otherAttributeId = check.attrIds[otherAttributeIndex];
        const otherAttributeColumnId = check.colIds[otherAttributeIndex];
        const attributeAndColumnId = new AttributeAndColumnId(otherAttributeId, otherAttributeColumnId);
        const attributeKey = getAttributeKey(attributeAndColumnId);
        result.set(attributeKey, attributeAndColumnId);

        visitedChecks.push(check);

        const subResult = getUsedAttributesWithColumnIdsRecursively(otherAttributeId, checks, visitedChecks);
        subResult.forEach((value, key) => {
            result.set(key, value);
        })
    });

    return result;
}

function getAttributeKey(attributeAndColumnId: AttributeAndColumnId): string {
    return `${attributeAndColumnId.attributeId}-${attributeAndColumnId.columnId}`;
}

function getAttributeCheckKey(attributeId: string, columnId: string | undefined): string {
    return columnId ? `${attributeId}:${columnId}` : attributeId;
}

class QueueNode<T> {
    value: T;
    next: QueueNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class Queue<T> {
    private head: QueueNode<T> | null = null;
    private tail: QueueNode<T> | null = null;
    private _size: number = 0;

    get size(): number {
        return this._size;
    }

    enqueue(value: T): void {
        const newNode = new QueueNode(value);

        if (!this.tail) {
            // Queue is empty
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this._size++;
    }

    enqueueMany(values: Iterable<T>): void {
        for (const value of values) {
            this.enqueue(value);
        }
    }

    dequeue(): T | undefined {
        if (!this.head) return undefined;

        const value = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            // Queue became empty
            this.tail = null;
        }

        this._size--;
        return value;
    }

    contains(value: T): boolean {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }
}
