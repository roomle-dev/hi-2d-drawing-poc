import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_bomout_Board extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'bomout_Board', 'BOM', "Board", partSelf._id, bomParentId);
  }

  // Article Group
  bom_ArticleGroup?: string;
  // Article number
  bom_ArticleNumber?: number;
  // Board Type
  bom_BoardType?: string;
  // 1 Cutting dimension in length
  bom_CutDimLength1?: number;
  // 2 Cutting Dimension in Length
  bom_CutDimLength2?: number;
  // 1 Cutting dimension in width
  bom_CutDimWidth1?: number;
  // 2 Cutting dimension in width
  bom_CutDimWidth2?: number;
  // Backedge
  bom_EdgeBack?: string;
  // Frontedge
  bom_EdgeFront?: string;
  // Edge Joint Back Right
  bom_EdgeJointBackRight?: string;
  // Edge Joint Front Left
  bom_EdgeJointFrontLeft?: string;
  // Edge Joint Left Back
  bom_EdgeJointLeftBack?: string;
  // Edge Joint Right Front
  bom_EdgeJointRightFront?: string;
  // Edge left
  bom_EdgeLeft?: string;
  // Right edge
  bom_EdgeRight?: string;
  // Edge Shape
  bom_EdgeShape?: string;
  // Edge Transition
  bom_EdgeTransition?: string;
  // Element Category
  bom_ElementCategory?: string;
  // Element Id
  bom_ElementId?: string;
  // Element Type
  bom_ElementType?: string;
  // Extra information 1
  bom_ExtraInfo1?: string;
  // Extra information 2
  bom_ExtraInfo2?: string;
  // Extra information 3
  bom_ExtraInfo3?: string;
  // Finished thickness of the material
  bom_Finalthk?: number;
  // Grain orientation
  bom_GrainOrientation?: string;
  // Laminate bottom
  bom_LaminateBtm?: string;
  // Laminate top
  bom_LaminateTop?: string;
  // Length
  bom_Length?: number;
  // Material
  bom_Material?: string;
  // Name
  bom_Name?: string;
  // Id of the parent for BOM
  bom_ParentId?: string;
  // Part ID
  bom_PartId?: string;
  // Route
  bom_Route?: string;
  // Type
  bom_Type?: string;
  // Weight
  bom_Weight?: number;
  // Width
  bom_Width?: number;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('bom_ArticleGroup', this.bom_ArticleGroup);
    res.set('bom_ArticleNumber', this.bom_ArticleNumber);
    res.set('bom_BoardType', this.bom_BoardType);
    res.set('bom_CutDimLength1', this.bom_CutDimLength1);
    res.set('bom_CutDimLength2', this.bom_CutDimLength2);
    res.set('bom_CutDimWidth1', this.bom_CutDimWidth1);
    res.set('bom_CutDimWidth2', this.bom_CutDimWidth2);
    res.set('bom_EdgeBack', this.bom_EdgeBack);
    res.set('bom_EdgeFront', this.bom_EdgeFront);
    res.set('bom_EdgeJointBackRight', this.bom_EdgeJointBackRight);
    res.set('bom_EdgeJointFrontLeft', this.bom_EdgeJointFrontLeft);
    res.set('bom_EdgeJointLeftBack', this.bom_EdgeJointLeftBack);
    res.set('bom_EdgeJointRightFront', this.bom_EdgeJointRightFront);
    res.set('bom_EdgeLeft', this.bom_EdgeLeft);
    res.set('bom_EdgeRight', this.bom_EdgeRight);
    res.set('bom_EdgeShape', this.bom_EdgeShape);
    res.set('bom_EdgeTransition', this.bom_EdgeTransition);
    res.set('bom_ElementCategory', this.bom_ElementCategory);
    res.set('bom_ElementId', this.bom_ElementId);
    res.set('bom_ElementType', this.bom_ElementType);
    res.set('bom_ExtraInfo1', this.bom_ExtraInfo1);
    res.set('bom_ExtraInfo2', this.bom_ExtraInfo2);
    res.set('bom_ExtraInfo3', this.bom_ExtraInfo3);
    res.set('bom_Finalthk', this.bom_Finalthk);
    res.set('bom_GrainOrientation', this.bom_GrainOrientation);
    res.set('bom_LaminateBtm', this.bom_LaminateBtm);
    res.set('bom_LaminateTop', this.bom_LaminateTop);
    res.set('bom_Length', this.bom_Length);
    res.set('bom_Material', this.bom_Material);
    res.set('bom_Name', this.bom_Name);
    res.set('bom_ParentId', this.bom_ParentId);
    res.set('bom_PartId', this.bom_PartId);
    res.set('bom_Route', this.bom_Route);
    res.set('bom_Type', this.bom_Type);
    res.set('bom_Weight', this.bom_Weight);
    res.set('bom_Width', this.bom_Width);
    return res;
  }
  override validateData() {
    if (this.bom_ArticleGroup === undefined) {
      logError("BOM: bom_ArticleGroup NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ArticleNumber === undefined) {
      logError("BOM: bom_ArticleNumber NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_BoardType === undefined) {
      logError("BOM: bom_BoardType NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_CutDimLength1 === undefined) {
      logError("BOM: bom_CutDimLength1 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_CutDimLength2 === undefined) {
      logError("BOM: bom_CutDimLength2 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_CutDimWidth1 === undefined) {
      logError("BOM: bom_CutDimWidth1 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_CutDimWidth2 === undefined) {
      logError("BOM: bom_CutDimWidth2 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeBack === undefined) {
      logError("BOM: bom_EdgeBack NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeFront === undefined) {
      logError("BOM: bom_EdgeFront NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeJointBackRight === undefined) {
      logError("BOM: bom_EdgeJointBackRight NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeJointFrontLeft === undefined) {
      logError("BOM: bom_EdgeJointFrontLeft NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeJointLeftBack === undefined) {
      logError("BOM: bom_EdgeJointLeftBack NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeJointRightFront === undefined) {
      logError("BOM: bom_EdgeJointRightFront NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeLeft === undefined) {
      logError("BOM: bom_EdgeLeft NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeRight === undefined) {
      logError("BOM: bom_EdgeRight NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeShape === undefined) {
      logError("BOM: bom_EdgeShape NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_EdgeTransition === undefined) {
      logError("BOM: bom_EdgeTransition NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ElementCategory === undefined) {
      logError("BOM: bom_ElementCategory NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ElementId === undefined) {
      logError("BOM: bom_ElementId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ElementType === undefined) {
      logError("BOM: bom_ElementType NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ExtraInfo1 === undefined) {
      logError("BOM: bom_ExtraInfo1 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ExtraInfo2 === undefined) {
      logError("BOM: bom_ExtraInfo2 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ExtraInfo3 === undefined) {
      logError("BOM: bom_ExtraInfo3 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Finalthk === undefined) {
      logError("BOM: bom_Finalthk NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_GrainOrientation === undefined) {
      logError("BOM: bom_GrainOrientation NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_LaminateBtm === undefined) {
      logError("BOM: bom_LaminateBtm NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_LaminateTop === undefined) {
      logError("BOM: bom_LaminateTop NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Length === undefined) {
      logError("BOM: bom_Length NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Material === undefined) {
      logError("BOM: bom_Material NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Name === undefined) {
      logError("BOM: bom_Name NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_ParentId === undefined) {
      logError("BOM: bom_ParentId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_PartId === undefined) {
      logError("BOM: bom_PartId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Route === undefined) {
      logError("BOM: bom_Route NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Type === undefined) {
      logError("BOM: bom_Type NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Weight === undefined) {
      logError("BOM: bom_Weight NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
    if (this.bom_Width === undefined) {
      logError("BOM: bom_Width NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Board (Board)");
    }
  }
}
