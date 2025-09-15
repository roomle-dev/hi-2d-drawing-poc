import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_ncout_SawingAngle extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'ncout_SawingAngle', 'NC', "Tool 124 Sawing Angle", partSelf._id, bomParentId);
  }

  // MPR grid distance
  nc_AB?: number;
  // This attribute indicates whether processing is necessary for the drawing or not.
  nc_DrawingRelevant?: boolean;
  // MPR mode of insertion for groove
  nc_EM?: string;
  //  NC group name
  nc_GroupName?: string;
  // MPR coordinate system
  nc_KO?: string;
  // This attribute indicates whether processing is necessary for the MPR file or not.
  nc_MprRelevant?: boolean;
  // MPR width of groove
  nc_NB?: number;
  // MPR side of processing
  nc_RK?: string;
  // MPR tool
  nc_TOOL?: string;
  // MPR tool on the machine
  nc_T_?: string;
  // MPR Prescoring distance
  nc_VT?: number;
  // MPR Prescoring Z
  nc_VZ?: number;
  // MPR orientation of the processing
  nc_WI?: number;
  // MPR position x
  nc_XA?: number;
  // MPR end point x
  nc_XE?: number;
  // MPR XY information
  nc_XY?: number;
  // MPR position y
  nc_YA?: number;
  // MPR end point y
  nc_YE?: number;
  // MPR position Z
  nc_Z_?: number;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('nc_AB', this.nc_AB);
    res.set('nc_DrawingRelevant', this.nc_DrawingRelevant);
    res.set('nc_EM', this.nc_EM);
    res.set('nc_GroupName', this.nc_GroupName);
    res.set('nc_KO', this.nc_KO);
    res.set('nc_MprRelevant', this.nc_MprRelevant);
    res.set('nc_NB', this.nc_NB);
    res.set('nc_RK', this.nc_RK);
    res.set('nc_TOOL', this.nc_TOOL);
    res.set('nc_T_', this.nc_T_);
    res.set('nc_VT', this.nc_VT);
    res.set('nc_VZ', this.nc_VZ);
    res.set('nc_WI', this.nc_WI);
    res.set('nc_XA', this.nc_XA);
    res.set('nc_XE', this.nc_XE);
    res.set('nc_XY', this.nc_XY);
    res.set('nc_YA', this.nc_YA);
    res.set('nc_YE', this.nc_YE);
    res.set('nc_Z_', this.nc_Z_);
    return res;
  }
  override validateData() {
    if (this.nc_AB === undefined) {
      logError("BOM: nc_AB NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_DrawingRelevant === undefined) {
      logError("BOM: nc_DrawingRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_EM === undefined) {
      logError("BOM: nc_EM NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_GroupName === undefined) {
      logError("BOM: nc_GroupName NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_KO === undefined) {
      logError("BOM: nc_KO NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_MprRelevant === undefined) {
      logError("BOM: nc_MprRelevant NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_NB === undefined) {
      logError("BOM: nc_NB NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_RK === undefined) {
      logError("BOM: nc_RK NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_TOOL === undefined) {
      logError("BOM: nc_TOOL NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_T_ === undefined) {
      logError("BOM: nc_T_ NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_VT === undefined) {
      logError("BOM: nc_VT NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_VZ === undefined) {
      logError("BOM: nc_VZ NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_WI === undefined) {
      logError("BOM: nc_WI NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_XA === undefined) {
      logError("BOM: nc_XA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_XE === undefined) {
      logError("BOM: nc_XE NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_XY === undefined) {
      logError("BOM: nc_XY NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_YA === undefined) {
      logError("BOM: nc_YA NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_YE === undefined) {
      logError("BOM: nc_YE NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
    if (this.nc_Z_ === undefined) {
      logError("BOM: nc_Z_ NOT set in part ' + this._parentId + ' for BOM element ' + ncout_SawingAngle (Tool 124 Sawing Angle)");
    }
  }
}
