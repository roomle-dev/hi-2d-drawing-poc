import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import {BOM_ElementTypeGroupBaseNc} from '../groupBase';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_ncout_Group extends BOM_ElementTypeGroupBaseNc {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf, partSelf.getNewBomId(), 'ncout_Group', 'NC', "Create a group of processings", partSelf._id, bomParentId);
  }

  // MPR diameter
  nc_DU?: number;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('nc_DU', this.nc_DU);
    return res;
  }
  override validateData() {
    if (this.nc_DU === undefined) {
      logError("BOM: nc_DU NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Group (Create a group of processings)");
    }
  }
}
