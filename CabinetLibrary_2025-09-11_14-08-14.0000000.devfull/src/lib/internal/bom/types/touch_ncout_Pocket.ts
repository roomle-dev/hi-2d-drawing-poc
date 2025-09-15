import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_ncout_Pocket extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'ncout_Pocket', 'NC', "Tool 112 pocket", partSelf._id, bomParentId);
  }

  // MPR width of processing
  nc_BR?: number;
  // This attribute indicates whether processing is necessary for the drawing or not.
  nc_DrawingRelevant?: boolean;
  //  NC group name
  nc_GroupName?: string;
  // MPR coordinate system
  nc_KO?: string;
  // MPR length of processing
  nc_LA?: number;
  // This attribute indicates whether processing is necessary for the MPR file or not.
  nc_MprRelevant?: boolean;
  // MPR radius
  nc_RD?: number;
  // Side of the machining (Top / Btm / Front / Left / Back / Right)
  nc_Side?: string;
  // MPR depth of processing
  nc_TI?: number;
  // MPR tool
  nc_TOOL?: string;
  // MPR tool on the machine
  nc_T_?: string;
  // MPR position x
  nc_XA?: number;
  // MPR position y
  nc_YA?: number;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('nc_BR', this.nc_BR);
    res.set('nc_DrawingRelevant', this.nc_DrawingRelevant);
    res.set('nc_GroupName', this.nc_GroupName);
    res.set('nc_KO', this.nc_KO);
    res.set('nc_LA', this.nc_LA);
    res.set('nc_MprRelevant', this.nc_MprRelevant);
    res.set('nc_RD', this.nc_RD);
    res.set('nc_Side', this.nc_Side);
    res.set('nc_TI', this.nc_TI);
    res.set('nc_TOOL', this.nc_TOOL);
    res.set('nc_T_', this.nc_T_);
    res.set('nc_XA', this.nc_XA);
    res.set('nc_YA', this.nc_YA);
    return res;
  }
  override validateData() {
    if (this.nc_BR === undefined) {
      logError("BOM: nc_BR NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_DrawingRelevant === undefined) {
      logError("BOM: nc_DrawingRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_GroupName === undefined) {
      logError("BOM: nc_GroupName NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_KO === undefined) {
      logError("BOM: nc_KO NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_LA === undefined) {
      logError("BOM: nc_LA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_MprRelevant === undefined) {
      logError("BOM: nc_MprRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_RD === undefined) {
      logError("BOM: nc_RD NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_Side === undefined) {
      logError("BOM: nc_Side NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_TI === undefined) {
      logError("BOM: nc_TI NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_TOOL === undefined) {
      logError("BOM: nc_TOOL NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_T_ === undefined) {
      logError("BOM: nc_T_ NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_XA === undefined) {
      logError("BOM: nc_XA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
    if (this.nc_YA === undefined) {
      logError("BOM: nc_YA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_Pocket (Tool 112 pocket)");
    }
  }
}
