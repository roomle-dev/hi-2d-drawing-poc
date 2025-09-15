import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../../logging'
import { BOM_ElementTypeBase } from '../base';
import { PartBase } from '../../mod-base';

export class BOM_ElementType_bomout_Hardware extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, bomParentId?: string) {
    super(partSelf.getNewBomId(), 'bomout_Hardware', 'BOM', "Hardware", partSelf._id, bomParentId);
  }

  // Color
  bom_Color?: string;
  // Description 1
  bom_Description1?: string;
  // Description 2
  bom_Description2?: string;
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
  // Length
  bom_Length?: number;
  // Name
  bom_Name?: string;
  // Id of the parent for BOM
  bom_ParentId?: string;
  // Part ID
  bom_PartId?: string;
  // Quantity
  bom_Qty?: number;
  // Supplier
  bom_Supplier?: string;
  // Supplier Article Number
  bom_SupplierArticle?: string;
  // Thickness
  bom_Thk?: number;
  // Type
  bom_Type?: string;
  // Weight
  bom_Weight?: number;
  // Width
  bom_Width?: number;
  override getAttributes() : Map<string,any> {
    var res = new Map<string,any>();
    res.set('bom_Color', this.bom_Color);
    res.set('bom_Description1', this.bom_Description1);
    res.set('bom_Description2', this.bom_Description2);
    res.set('bom_ElementCategory', this.bom_ElementCategory);
    res.set('bom_ElementId', this.bom_ElementId);
    res.set('bom_ElementType', this.bom_ElementType);
    res.set('bom_ExtraInfo1', this.bom_ExtraInfo1);
    res.set('bom_ExtraInfo2', this.bom_ExtraInfo2);
    res.set('bom_ExtraInfo3', this.bom_ExtraInfo3);
    res.set('bom_Length', this.bom_Length);
    res.set('bom_Name', this.bom_Name);
    res.set('bom_ParentId', this.bom_ParentId);
    res.set('bom_PartId', this.bom_PartId);
    res.set('bom_Qty', this.bom_Qty);
    res.set('bom_Supplier', this.bom_Supplier);
    res.set('bom_SupplierArticle', this.bom_SupplierArticle);
    res.set('bom_Thk', this.bom_Thk);
    res.set('bom_Type', this.bom_Type);
    res.set('bom_Weight', this.bom_Weight);
    res.set('bom_Width', this.bom_Width);
    return res;
  }
  override validateData() {
    if (this.bom_Color === undefined) {
      logError("BOM: bom_Color NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Description1 === undefined) {
      logError("BOM: bom_Description1 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Description2 === undefined) {
      logError("BOM: bom_Description2 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ElementCategory === undefined) {
      logError("BOM: bom_ElementCategory NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ElementId === undefined) {
      logError("BOM: bom_ElementId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ElementType === undefined) {
      logError("BOM: bom_ElementType NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ExtraInfo1 === undefined) {
      logError("BOM: bom_ExtraInfo1 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ExtraInfo2 === undefined) {
      logError("BOM: bom_ExtraInfo2 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ExtraInfo3 === undefined) {
      logError("BOM: bom_ExtraInfo3 NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Length === undefined) {
      logError("BOM: bom_Length NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Name === undefined) {
      logError("BOM: bom_Name NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_ParentId === undefined) {
      logError("BOM: bom_ParentId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_PartId === undefined) {
      logError("BOM: bom_PartId NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Qty === undefined) {
      logError("BOM: bom_Qty NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Supplier === undefined) {
      logError("BOM: bom_Supplier NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_SupplierArticle === undefined) {
      logError("BOM: bom_SupplierArticle NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Thk === undefined) {
      logError("BOM: bom_Thk NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Type === undefined) {
      logError("BOM: bom_Type NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Weight === undefined) {
      logError("BOM: bom_Weight NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
    if (this.bom_Width === undefined) {
      logError("BOM: bom_Width NOT set in part ' + this._parentId + ' for BOM element ' + bomout_Hardware (Hardware)");
    }
  }
}
