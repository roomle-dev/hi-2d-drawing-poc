import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_bomout_Edge extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'bomout_Edge', 'BOM', "Edge", partSelf._id, bomParentId);
  }

  // Color
  bom_Color?: string;
  // Edge Id
  bom_EdgeId?: string;
  // Edge Joint
  bom_EdgeJoint?: string;
  // Edge Number
  bom_EdgeNumber?: string;
  // Element Category
  bom_ElementCategory?: string;
  // Element Id
  bom_ElementId?: string;
  // Element Type
  bom_ElementType?: string;
  // Glue Type
  bom_GlueType?: string;
  // Length
  bom_Length?: number;
  // Name
  bom_Name?: string;
  // Id of the parent for BOM
  bom_ParentId?: string;
  // Part ID
  bom_PartId?: string;
  // Supplier Article Number
  bom_SupplierArticle?: string;
  // Thickness
  bom_Thk?: number;
  // Type
  bom_Type?: string;
  // Width
  bom_Width?: number;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('bom_Color', this.bom_Color);
    res.set('bom_EdgeId', this.bom_EdgeId);
    res.set('bom_EdgeJoint', this.bom_EdgeJoint);
    res.set('bom_EdgeNumber', this.bom_EdgeNumber);
    res.set('bom_ElementCategory', this.bom_ElementCategory);
    res.set('bom_ElementId', this.bom_ElementId);
    res.set('bom_ElementType', this.bom_ElementType);
    res.set('bom_GlueType', this.bom_GlueType);
    res.set('bom_Length', this.bom_Length);
    res.set('bom_Name', this.bom_Name);
    res.set('bom_ParentId', this.bom_ParentId);
    res.set('bom_PartId', this.bom_PartId);
    res.set('bom_SupplierArticle', this.bom_SupplierArticle);
    res.set('bom_Thk', this.bom_Thk);
    res.set('bom_Type', this.bom_Type);
    res.set('bom_Width', this.bom_Width);
    return res;
  }
  override validateData() {
    if (this.bom_Color === undefined) {
      logError("BOM: bom_Color NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_EdgeId === undefined) {
      logError("BOM: bom_EdgeId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_EdgeJoint === undefined) {
      logError("BOM: bom_EdgeJoint NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_EdgeNumber === undefined) {
      logError("BOM: bom_EdgeNumber NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_ElementCategory === undefined) {
      logError("BOM: bom_ElementCategory NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_ElementId === undefined) {
      logError("BOM: bom_ElementId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_ElementType === undefined) {
      logError("BOM: bom_ElementType NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_GlueType === undefined) {
      logError("BOM: bom_GlueType NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_Length === undefined) {
      logError("BOM: bom_Length NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_Name === undefined) {
      logError("BOM: bom_Name NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_ParentId === undefined) {
      logError("BOM: bom_ParentId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_PartId === undefined) {
      logError("BOM: bom_PartId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_SupplierArticle === undefined) {
      logError("BOM: bom_SupplierArticle NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_Thk === undefined) {
      logError("BOM: bom_Thk NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_Type === undefined) {
      logError("BOM: bom_Type NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
    if (this.bom_Width === undefined) {
      logError("BOM: bom_Width NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Edge (Edge)");
    }
  }
}
