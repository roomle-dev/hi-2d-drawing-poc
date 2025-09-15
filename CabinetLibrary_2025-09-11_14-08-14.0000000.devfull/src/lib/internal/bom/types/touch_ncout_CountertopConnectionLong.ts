import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_ncout_CountertopConnectionLong extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'ncout_CountertopConnectionLong', 'NC', "Connection of countertops on long side", partSelf._id, bomParentId);
  }

  // This attribute indicates whether processing is necessary for the drawing or not.
  nc_DrawingRelevant?: boolean;
  // Input component
  nc_IN?: string;
  // MPR coordinate system
  nc_KO?: string;
  // MPR length of processing
  nc_LA?: number;
  // This attribute indicates whether processing is necessary for the MPR file or not.
  nc_MprRelevant?: boolean;
  nc_Position?: string;
  // Side of the machining (Top / Btm / Front / Left / Back / Right)
  nc_Side?: string;
  // MPR tool
  nc_TOOL?: string;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('nc_DrawingRelevant', this.nc_DrawingRelevant);
    res.set('nc_IN', this.nc_IN);
    res.set('nc_KO', this.nc_KO);
    res.set('nc_LA', this.nc_LA);
    res.set('nc_MprRelevant', this.nc_MprRelevant);
    res.set('nc_Position', this.nc_Position);
    res.set('nc_Side', this.nc_Side);
    res.set('nc_TOOL', this.nc_TOOL);
    return res;
  }
  override validateData() {
    if (this.nc_DrawingRelevant === undefined) {
      logError("BOM: nc_DrawingRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_IN === undefined) {
      logError("BOM: nc_IN NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_KO === undefined) {
      logError("BOM: nc_KO NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_LA === undefined) {
      logError("BOM: nc_LA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_MprRelevant === undefined) {
      logError("BOM: nc_MprRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_Position === undefined) {
      logError("BOM: nc_Position NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_Side === undefined) {
      logError("BOM: nc_Side NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
    if (this.nc_TOOL === undefined) {
      logError("BOM: nc_TOOL NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopConnectionLong (Connection of countertops on long side)");
    }
  }
}
