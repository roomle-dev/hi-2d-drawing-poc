import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'

import { IGlobalVars } from './global-vars'
import { OD_Base, PartGroup, OpenGroup, Matrix4, Vector3, FullMatrixMode } from './base'
import { CollisionDataRel } from './touches'
import { BOM_ElementTypeBase } from './bom/base'
import { IThreeDModelData } from './models-3d'

declare function uuidv4(): string;

export class MatrixHelper {
  static rotateX(degree:number, rotationCenter:Vector3):Matrix4 {
    return this.rotate(new Vector3(1, 0, 0), degree, rotationCenter);
  }

  static rotateY(degree:number, rotationCenter:Vector3):Matrix4 {
    return this.rotate(new Vector3(0, 1, 0), degree, rotationCenter);
  }

  static rotateZ(degree:number, rotationCenter:Vector3):Matrix4 {
    return this.rotate(new Vector3(0, 0, 1), degree, rotationCenter);
  }

  static rotate(rotationAxis: Vector3, degree:number, rotationCenter:Vector3):Matrix4 {
    let o = new Matrix4().makeTranslation(rotationCenter._x, rotationCenter._y, rotationCenter._z);
    var r = new Matrix4().makeRotationAxis(rotationAxis._x, rotationAxis._y, rotationAxis._z, degree);
    let io = new Matrix4().makeTranslation(-rotationCenter._x, -rotationCenter._y, -rotationCenter._z); // invert matrix
    return o.multiply(r).multiply(io);
  }

  static isValid(matrix: Matrix4|null|undefined): boolean {
    if (matrix === null || matrix === undefined) {
      return false;
    }

    for (let i = 0; i < matrix.elements.length; ++i) {
      if (matrix.elements[i] === null || isNaN(matrix.elements[i])) {
        return false;
      }
    }

    return true;
  }
}

export class ModuleHelper {
  static posAndRotateX(x:number, y:number, z:number, degree:number, rotationCenter:Vector3):Matrix4 {
    return this.posAndRotate(x, y, z, new Vector3(1, 0, 0), degree, rotationCenter);
  }

  static posAndRotateY(x:number, y:number, z:number, degree:number, rotationCenter:Vector3):Matrix4 {
    return this.posAndRotate(x, y, z, new Vector3(0, 1, 0), degree, rotationCenter);
  }

  static posAndRotateZ(x:number, y:number, z:number, degree:number, rotationCenter:Vector3):Matrix4 {
    return this.posAndRotate(x, y, z, new Vector3(0, 0, 1), degree, rotationCenter);
  }

  static posAndRotate(x:number, y:number, z:number, rotationAxis: Vector3, degree:number, rotationCenter:Vector3):Matrix4 {
    let m = MatrixHelper.rotate(rotationAxis, degree, rotationCenter);
    let pos = new Matrix4().setPosition(x, y, z)
    return m.multiply(pos);
  }
}

export class PartHelper {
  static rotateX(p:IPartBase, degree:number, rotationCenter:Vector3):Matrix4 {
    return this.rotate(p, new Vector3(1, 0, 0), degree, rotationCenter);
  }

  static rotateY(p:IPartBase, degree:number, rotationCenter:Vector3):Matrix4 {
    return this.rotate(p, new Vector3(0, 1, 0), degree, rotationCenter);
  }

  static rotateZ(p:IPartBase, degree:number, rotationCenter:Vector3):Matrix4 {
    return this.rotate(p, new Vector3(0, 0, 1), degree, rotationCenter);
  }

  static rotate(p:IPartBase, rotationAxis: Vector3, degree:number, rotationCenter:Vector3):Matrix4 {
    rotationCenter = rotationCenter.applyMatrix4(new Matrix4().makeTranslation(p._x, p._y, p._z));
    return MatrixHelper.rotate(rotationAxis, degree, rotationCenter);
  }
}

export interface IModBaseProp {
    get _id(): string; // Unique moduleId (guid)
    get modId(): string; // module id
    get g(): IGlobalVars;
    getOrigin():Matrix4;
    getOriginPos():Vector3;
}

export interface IModBase extends IModBaseProp {
  parentBase?: IModBase;  // parent module
  _manufacturerMode: boolean;  // manufacturer mode
  //a: {};  // attributes dictionary
  variants: string[];
  get getOpenGroupDict(): Map<string, OpenGroup>
  get getPartGroupDict(): Map<string, PartGroup>
  h ?: OD_Base;  // header data module
  assignPartGroup(groupName:string, part:PartBase):void;
  getFullMatrix(mode: FullMatrixMode): Matrix4;
  getOpenFullMatrix(openGrp: OpenGroup): Matrix4;
}

export class PartExtrudeInfo {
  constructor(svg: string, direction: string) {
    this.svg = svg;
    this.direction = direction;
  }
  svg: string;
  direction: string;
}

let _partNumber: number = 0;
export function resetPartNumber(): void {
    _partNumber = 0;
}
function getNewPartNumber(): string {
    return (++_partNumber).toString();
}

export interface I3DElement {
  _id: string;
  parentId: string;
  _x: number;
  _y: number;
  _z: number;
  _dimx: number;
  _dimy: number;
  _dimz: number;
  _xAbs?: number;
  _yAbs?: number;
  _zAbs?: number;
  _matrix?: Matrix4; // full matrix
  _extrude?: PartExtrudeInfo;
  _threedModel?: IThreeDModelData;
  _hideThreedModelWhenOpen?: boolean; // hide 3D model if part is "opened" in viewer
  _threedModelOpen?: IThreeDModelData; // 3D model to be shown if part is "opened" in viewer
  assign3DModel(threedModel: IThreeDModelData | undefined, hideWhenOpen?:boolean): void;
  assign3DModelOpen(threedModel: IThreeDModelData | undefined): void;
  setMatrix(m: Matrix4): void;
  extrude(svg: string, direction: string): void;
  toJson(): any;  // used for serializing to be used in "BomPart.loadJson" also in "IntBomPart (C#)"
}

export enum FaceKey {
  Default = "default",
  Bottom = "bottom",
  Top = "top",
  Left = "left",
  Right = "right",
  Front = "front",
  Back = "back",
  Side = "side",
}
export interface IFaceMaterial {
  materialId: string;
  faceKey?: FaceKey;
  uvRotation?: number; // rotation in degrees [0..360]
  uvOffset?: number[]; // 2D offset (u, v)
  uvScale?: number[];  // 2D scale (u, v)
}

export interface IPartBase extends I3DElement {
  _partId: string;  // part id (part code)
  _g?: IGlobalVars;
  _wdt?: string;  // width,depth,thickness mapping to xyz
  _parentUniqueId: string;
  partParentId?: string;
  _openGroupId?: string;

  get _width(): number;
  get _depth(): number;
  get _thickness(): number;
  get g(): IGlobalVars;

  set canHaveRotatedTouches(value: boolean);
  get canHaveRotatedTouches(): boolean;

  getAttributes(): Map<string, any>;
  toJson(): any;

  _faceMaterial: IFaceMaterial[];
  addFaceMaterial(materialId:string, faceKey?: FaceKey,
    uvRotation?: number,
    uOffset?: number, vOffset?: number,
    uScale?:number, vScale?: number
  ): IFaceMaterial;

  /**
  * @deprecated Obsolete. Use add3DElement(id: string, parentId: string, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number) instead.
  */
  add3DElement(id: string, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): I3DElement;
  /**
  * @deprecated Obsolete. Use add3DElement(id: string, bomParent: BOM_ElementTypeBase, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number) instead.
  */
  add3DElement(id: string, parentId: string, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): I3DElement;
  add3DElement(id: string, bomParent: BOM_ElementTypeBase, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): I3DElement;
}

class Bom3DPart implements I3DElement {
  constructor(id:string,parentId:string,x:number,y:number,z:number,dimx:number,dimy:number,dimz:number) {
    this._id = id;
    this.parentId = parentId;
    this._x = x; this._y = y; this._z = z;
    this._dimx = dimx; this._dimy = dimy; this._dimz = dimz;
  }

  _id: string;
  parentId: string;
  _x: number;
  _y: number;
  _z: number;
  _dimx: number;
  _dimy: number;
  _dimz: number;
  _xAbs?: number;
  _yAbs?: number;
  _zAbs?: number;
  _matrix?: Matrix4; // full matrix
  _partMatrix?: Matrix4;
  _extrude?: PartExtrudeInfo;
  _threedModel?: IThreeDModelData;
  _hideThreedModelWhenOpen?: boolean; // hide 3D model if part is "opened" in viewer
  _threedModelOpen?: IThreeDModelData; // 3D model to be shown if part is "opened" in viewer
  _fullMatrix?: Matrix4;  // Full matrix for this article (incl. partMatrix)
  _openFullMatrix?: Matrix4;

  assign3DModel(threedModel: IThreeDModelData | undefined, hideWhenOpen:boolean = false): void {
    this._threedModel = threedModel;
    this._hideThreedModelWhenOpen = hideWhenOpen === false ? undefined : hideWhenOpen;
  }

  assign3DModelOpen(threedModel: IThreeDModelData | undefined): void  {
    this._threedModelOpen = threedModel;
  }

  setMatrix(m: Matrix4): void {
    if (this._partMatrix !== undefined) {
      throw "You cannot assign the part matrix multiple times (" + this._id + ")";
    }

    this._partMatrix = m;
  }

  extrude(svg: string, direction: string): void {
    this._extrude = new PartExtrudeInfo(svg, direction);
  }

  toJson(): any {
    // INFO: This must be in sync with the "BomPart.loadJson"!

    // We need to serialize it differently, because we do not want to have the defined attributes on the same level; 
    // it should be in an object called "a"
    var json: any = new Object();
    json._id = this._id;
    json.parentId = this.parentId;
    json._x = this._x;
    json._y = this._y;
    json._z = this._z;
    json._dimx = this._dimx;
    json._dimy = this._dimy;
    json._dimz = this._dimz;
    json._extrude = this._extrude;
    json._partMatrix = this._partMatrix;
    json._absx = this._xAbs;
    json._absy = this._yAbs;
    json._absz = this._zAbs;
    json._threedModel = this._threedModel;
    json._hideThreedModelWhenOpen = this._hideThreedModelWhenOpen;
    json._threedModelOpen = this._threedModelOpen;
    json._fullMatrix = this._fullMatrix;
    json._openFullMatrix = this._openFullMatrix;
    return json;
  }
}

export abstract class PartBase implements IPartBase {
  constructor(parent:IModBaseProp|undefined, partId:string, x:number,y:number,z:number,dimx:number,dimy:number,dimz:number) {
    this.parentId = parent?.modId ?? "";
    this._parentUniqueId = parent?._id ?? "";
    this._partId = partId;
    this._id = getNewPartNumber();  // create a unique id for each part
    this._x = x; this._y = y; this._z = z;
    this._dimx = dimx; this._dimy = dimy; this._dimz = dimz;
    this._g = parent?.g;
    this._rootRotationY = 0;
    this._canHaveRotatedTouches = false;
    }

  _id: string;  // unique id (automatically created)
  _partId: string;  // part id (part code)
  _x:number;
  _y:number;
  _z:number;
  _xAbs?:number;
  _yAbs?:number;
  _zAbs?:number;
  _dimx:number;
  _dimy:number;
  _dimz: number;
  _partMatrix?: Matrix4;
  _openFullMatrix?: Matrix4;
  _openGroupId?: string;
  _g?: IGlobalVars;
  _wdt?: string;  // width,depth,thickness mapping to xyz
  parentId: string;
  _parentUniqueId: string;
  _mainPart?: PartBase;  // the main part
  _childParts: PartBase[] = [];  // child parts
  _bom: BOM_ElementTypeBase[] = [];  // BOM
  #_actBomNumber: number = 0;
  _extrude?: PartExtrudeInfo;
  _matrix?: Matrix4;  // Full matrix for this article
  _fullMatrix?: Matrix4;  // Full matrix for this article (incl. partMatrix)
  _threedModel?: IThreeDModelData;  // 3D model data
  _hideThreedModelWhenOpen?: boolean; // hide 3D model if part is "opened" in viewer
  _threedModelOpen?: IThreeDModelData; // 3D model to be shown if part is "opened" in viewer
  _hidden?: boolean;  // hide part in 3D
  _3DElements: Bom3DPart[] = []; // used in BOM/NC creation
  _groupRootId?: string;
  _groupParentId?: string;
  _noNCData?: boolean;

  _rootRotationY: number;
  _canHaveRotatedTouches: boolean;

  getNewBomId(): string { return (this.#_actBomNumber++).toString(); }

  get partParentId(): string|undefined {
    return this._groupParentId;
  }
  set partParentId(value: string|undefined) {
    this._groupParentId = value;
  }

  get _width(): number {
      return this.getWDT()[0];
  }
  get _depth(): number {
      return this.getWDT()[1];
  }
  get _thickness(): number {
      return this.getWDT()[2];
  }
  get g(): IGlobalVars { return this._g!; }

  get canHaveRotatedTouches(): boolean {
    return this._canHaveRotatedTouches;
  }

  set canHaveRotatedTouches(value: boolean) {
    this._canHaveRotatedTouches = value;
  }

  extrude(svg: string, direction: string): void {
    this._extrude = new PartExtrudeInfo(svg, direction);
    }

  setMatrix(m: Matrix4): void {
    if (this._partMatrix !== undefined) {
      throw "You cannot assign the part matrix multiple times (" + this._partId + " / " + this._id + " / parent: " + this.parentId + ")";
    }

    this._partMatrix = m;
  }
  add3DElement(id: string, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): I3DElement
  add3DElement(id: string, parentId: string, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): I3DElement
  add3DElement(id: string, bomParent: BOM_ElementTypeBase, x: number, y: number, z: number, dimx: number, dimy: number, dimz: number): I3DElement;
  add3DElement(...args: any[]): I3DElement {
    const newOverload = args.length === 8;
    const isObsolete = !newOverload
      || !(args[1] instanceof BOM_ElementTypeBase);
    
    if (isObsolete) {
      logWarning("Please use the add3DElement(id, bomParent, x, y, z, dimx, dimy, dimz) overload");
    }

    let isParentIdSet = false;
    const partId: string = args[0];
    let partParentId: string = '';
    if (newOverload && typeof args[1] === "string") {
      partParentId = args[1];
      isParentIdSet = true;
    }
    else if (newOverload && args[1] instanceof BOM_ElementTypeBase) {
      partParentId = args[1]._id;
      isParentIdSet = true;
    }

    const partX: number = isParentIdSet ? args[2] : args[1];
    const partY: number = isParentIdSet ? args[3] : args[2];
    const partZ: number = isParentIdSet ? args[4] : args[3];
    const partDimx: number = isParentIdSet ? args[5] : args[4];
    const partDimy: number = isParentIdSet ? args[6] : args[5];
    const partDimz: number = isParentIdSet ? args[7] : args[6];
    const bom3DPart = new Bom3DPart(partId, partParentId, partX, partY, partZ, partDimx, partDimy, partDimz);
    this._3DElements.push(bom3DPart);
    return bom3DPart;
  }

  _faceMaterial: IFaceMaterial[] = [];
  addFaceMaterial(materialId:string, faceKey?: FaceKey,
    uvRotation?: number,
    uOffset?: number, vOffset?: number,
    uScale?:number, vScale?: number
  ): IFaceMaterial {
    let fm = {
      materialId: materialId,
      faceKey: faceKey,
      uvRotation: uvRotation,
      uvOffset: (uOffset || vOffset) ? [(uOffset ?? 0), (vOffset ?? 0)] : undefined,
      uvScale: (uScale || vScale) ? [(uScale ?? 1), (vScale ?? 1)] : undefined,
    } as IFaceMaterial;
    this._faceMaterial.push(fm);
    return fm;
  }

  abstract getAttributes():Map<string,any>;
  abstract setAttributes():void;
  abstract checkAttributes():void;
  abstract createBomElements(): void;

  createBomTouchElementsStart() { }
  createBomTouchElements(touch: PartTouch, part2: PartBase, posRel: CollisionDataRel) { }
  createBomTouchElementsEnd() { }

  getWDT(): number[] {
    var res = [this._dimx, this._dimz, this._dimy];  // default mapping
    if (!this._wdt) {
      return res;
    }
    if (this._wdt.length ?? 0 > 0) {
      var w = this.mapWDT(this._wdt[0]);
      if (w !== undefined) {
        res[0] = w;
      }
    }
    if (this._wdt.length > 1) {
      var w = this.mapWDT(this._wdt[1]);
      if (w !== undefined) {
        res[1] = w;
      }
    }
    if (this._wdt.length > 2) {
      var w = this.mapWDT(this._wdt[2]);
      if (w !== undefined) {
        res[2] = w;
      }
    }
    return res;
    }

  mapWDT(xyz: string): number | undefined {
    switch (xyz.toLowerCase()) {
      case 'x': if (this._dimx) { return this._dimx; } break;
      case 'y': if (this._dimy) { return this._dimy; } break;
      case 'z': if (this._dimz) { return this._dimz; } break;
    }
    //throw new Error("Could not get dimension for '" + xyz + " for partId " + this._partId + " (parent: " + this.parentBase.modId + ")");
    return undefined;
    }

  assign3DModel(threedModel: IThreeDModelData | undefined, hideWhenOpen:boolean = false): void {
    this._threedModel = threedModel;
    this._hideThreedModelWhenOpen = hideWhenOpen === false ? undefined : hideWhenOpen;
  }

  assign3DModelOpen(threedModel: IThreeDModelData | undefined): void  {
    this._threedModelOpen = threedModel;
  }

  toJsonOD(): any {
    // This is used in serializing the part inside the OrderData
    var json: any = new Object();
    json._id = this._id;
    json._partId = this._partId;
    json._wdt = this._wdt;
    json._x = this._x;
    json._y = this._y;
    json._z = this._z;
    json._dimx = this._dimx;
    json._dimy = this._dimy;
    json._dimz = this._dimz;
    json.parentId = this.parentId;
    json._parentUniqueId = this._parentUniqueId;
    json._xAbs = this._xAbs;
    json._yAbs = this._yAbs;
    json._zAbs = this._zAbs;
    json._matrix = this._matrix;
    json._fullMatrix = this._fullMatrix;
    json._openFullMatrix = this._openFullMatrix;
    json._threedModel = this._threedModel;
    json._hideThreedModelWhenOpen = this._hideThreedModelWhenOpen;
    json._threedModelOpen = this._threedModelOpen;
    json._hidden = this._hidden;
    json._3DElements = this._3DElements;
    json.a = { };
    json._extrude = this._extrude;
    json._partMatrix = this._partMatrix;
    this.getAttributes().forEach((value, key) => json.a[key] = value);
    json._childParts = [];
    this._childParts.forEach(part => json._childParts.push(part.toJson()));
    json._bom = [];
    this._bom.forEach(bom => json._bom.push(bom.toJson()));
    return json;  
  }

  toJson(): any {
    // INFO: This must be in sync with the "BomPart.loadJson"!

    // We need to serialize it differently, because we do not want to have the defined attributes on the same level; 
    // it should be in an object called "a"
    var json: any = new Object();
    json._id = this._id;
    json._partId = this._partId;
    json._wdt = this._wdt;
    json._x = this._x;
    json._y = this._y;
    json._z = this._z;
    json._dimx = this._dimx;
    json._dimy = this._dimy;
    json._dimz = this._dimz;
    json._extrude = this._extrude;
    json._partMatrix = this._partMatrix;
    json._fullMatrix = this._fullMatrix;
    json._openFullMatrix = this._openFullMatrix;
    json.parentId = this.parentId;
    json._absx = this._xAbs;
    json._absy = this._yAbs;
    json._absz = this._zAbs;
    json._threedModel = this._threedModel;
    json._hideThreedModelWhenOpen = this._hideThreedModelWhenOpen;
    json._threedModelOpen = this._threedModelOpen;
    json._hidden = this._hidden;
    json._openGroupId = this._openGroupId;
    if (this._3DElements) {
      json._3DElements = [];
      this._3DElements.forEach(elm => json._3DElements.push(elm.toJson()));
    }
    json.a = { };
    this.getAttributes().forEach((value, key) => json.a[key] = value);
    json._childParts = [];
    this._childParts.forEach(part => json._childParts.push(part.toJson()));
    json._bom = [];
    this._bom.forEach(bom => json._bom.push(bom.toJson()));
    json._groupRootId = this._groupRootId;
    json._groupParentId = this._groupParentId;
    json._faceMaterial = this._faceMaterial;
    return json;
  }
}

export enum PartTouch {
  Unknown = "Unknown",
  Collision = "Collision",
  FromLeft = "FromLeft",
  FromRight = "FromRight",
  FromBottom = "FromBottom",
  FromTop = "FromTop",
  FromFront = "FromFront",
  FromBack = "FromBack",
};

export enum TouchType {
  Touch,
  Start,
  End,
}

export enum Dock {
  RightTop = "RightTop",
  BackTop = "BackTop",
  LeftTop = "LeftTop",
  RightBottom = "RightBottom",
  BackBottom = "BackBottom",
  LeftBottom = "LeftBottom",
  LeftBackTop = "LeftBackTop",
  RightBackTop = "RightBackTop",
  LeftBackBottom = "LeftBackBottom",
  RightBackBottom = "RightBackBottom",
}

export interface IDockingInfo {
  id: Dock,
  start: Vector3, // the start position (x/y/z) related to the 0,0,0 point of this root module / 'end-start' is the direction vector
  end: Vector3 // the end position (x/y/z) related to the 0,0,0 point of this root module / 'end-start' is the direction vector
};

export interface IInsertLevelInfo {
  height: number;  // The insert level is suggested in the following list; if not list is present, the default height is the floor
  isDefault?: boolean;  // If this is set to `true` the suggestions cannot be overwritten
};

export function _toFloat(val:boolean|number|string|undefined, name:string): number|undefined
{ 
  if (val !== undefined) {
    if (typeof val === 'string') { val = parseFloat(val); }
    else if (typeof val !== 'number') { logError("'" + name + "' (" + val + ") is not a valid float number"); val = 0; }
    if (Number.isNaN(val)) {
      logError("'" + name + "' is not a valid float number");
    }
    return val;
  }
  return undefined;
}

export function _toInt(val:boolean|number|string|undefined, name:string): number|undefined
{ 
  if (val !== undefined) {
    if (typeof val === 'string') { val = parseInt(val); }
    else if (typeof val !== 'number') { logError("'" + name + "' (" + val + ") is not a valid int number"); val = 0; }
    if (Number.isNaN(val)) {
      logError("'" + name + "' is not a valid int number");
    }
    return val;
  }
  return undefined;
}

export function _toString(val:boolean|number|string|undefined, name:string):string|undefined {
  if (val !== undefined) {
    if (typeof val === 'number') { val = val.toString(); }
    else if (typeof val === 'boolean') { val = val.toString(); }
    else if (typeof val !== 'string') { logError("''" + name + "' is not a valid string"); val = ""; }
    return val;
  }
  return undefined;
}

export function _toBoolean(val:boolean|number|string|undefined, name:string):boolean|undefined {
  if (val !== undefined) {
    if (typeof val === 'string') { val = val.toLowerCase() === 'true' || val === '1' || val === '-1'; }
    else if (typeof val === 'number') { val = val !== 0 }
    else if (typeof val !== 'boolean') { logError("''" + name + "' is not a valid  boolean"); val = false; }
    return val;
  }
  return undefined;
}
