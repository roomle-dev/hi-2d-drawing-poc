import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_ncout_CountertopEdges extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'ncout_CountertopEdges', 'NC', "Visualization of the edges", partSelf._id, bomParentId);
  }

  // This attribute indicates whether processing is necessary for the drawing or not.
  nc_DrawingRelevant?: boolean;
  // Edges on backside
  nc_EdgesBack?: string;
  // Edges on frontside
  nc_EdgesFront?: string;
  // Edges on left side
  nc_EdgesLeft?: string;
  // Edges on right side
  nc_EdgesRight?: string;
  // This attribute indicates whether processing is necessary for the MPR file or not.
  nc_MprRelevant?: boolean;
  // Side of the machining (Top / Btm / Front / Left / Back / Right)
  nc_Side?: string;
  // MPR tool
  nc_TOOL?: string;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('nc_DrawingRelevant', this.nc_DrawingRelevant);
    res.set('nc_EdgesBack', this.nc_EdgesBack);
    res.set('nc_EdgesFront', this.nc_EdgesFront);
    res.set('nc_EdgesLeft', this.nc_EdgesLeft);
    res.set('nc_EdgesRight', this.nc_EdgesRight);
    res.set('nc_MprRelevant', this.nc_MprRelevant);
    res.set('nc_Side', this.nc_Side);
    res.set('nc_TOOL', this.nc_TOOL);
    return res;
  }
  override validateData() {
    if (this.nc_DrawingRelevant === undefined) {
      logError("BOM: nc_DrawingRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_EdgesBack === undefined) {
      logError("BOM: nc_EdgesBack NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_EdgesFront === undefined) {
      logError("BOM: nc_EdgesFront NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_EdgesLeft === undefined) {
      logError("BOM: nc_EdgesLeft NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_EdgesRight === undefined) {
      logError("BOM: nc_EdgesRight NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_MprRelevant === undefined) {
      logError("BOM: nc_MprRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_Side === undefined) {
      logError("BOM: nc_Side NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
    if (this.nc_TOOL === undefined) {
      logError("BOM: nc_TOOL NOT set in part ' + this._parentId + ' for BOM element ' + ncout_CountertopEdges (Visualization of the edges)");
    }
  }
}
