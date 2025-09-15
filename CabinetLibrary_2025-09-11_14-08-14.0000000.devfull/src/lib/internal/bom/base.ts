import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
export class BOM_ElementTypeBase {
  constructor(id:string, typeId:string, bomType:string, desc:string, parentId:string, bomParentId?: string) {
    this._id = id;
    this._bomElementTypeId = typeId;
    this._bomType= bomType;
    this._description = desc;
    this._parentId = parentId;
    this._bomParentId = bomParentId;
  }
  _id:string;
  _bomElementTypeId:string;
  _bomType:string;
  _description:string
  _parentId:string
  _bomParentId?: string
  _touchOrigin?: string;
  _touchPart2Id?: string;
  _touchPart2Name?: string;
  _subBom: BOM_ElementTypeBase[] = [];
  getAttributes() : Map<string,any> { return new Map<string,any>(); }
  validateData() {}
  toJson(): any {
    var json: any = new Object();
    json._id = this._id;
    json._bomElementTypeId = this._bomElementTypeId;
    json._bomType = this._bomType;
    json._description = this._description;
    json._touchOrigin = this._touchOrigin;
    json._touchPart2Id = this._touchPart2Id;
    json._touchPart2Name = this._touchPart2Name;
    json._bomParentId = this._bomParentId;
    json.a = {};
    this.getAttributes().forEach((value, key) => json.a[key] = value);
    return json;
  }

}
