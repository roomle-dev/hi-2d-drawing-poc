import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
import { BOM_ElementTypeBase } from './base'
import { BOM_ElementType_bomout_Board } from './types/bom_bomout_Board';
import { BOM_ElementType_bomout_Edge } from './types/bom_bomout_Edge';
import { BOM_ElementType_bomout_Hardware } from './types/bom_bomout_Hardware';
import { BOM_ElementType_bomout_PartGroup } from './types/bom_bomout_PartGroup';
import { BOM_ElementType_ncout_CountertopConnectionLong } from './types/touch_ncout_CountertopConnectionLong';
import { BOM_ElementType_ncout_CountertopConnectionShort } from './types/touch_ncout_CountertopConnectionShort';
import { BOM_ElementType_ncout_CountertopCutoutRectangular } from './types/touch_ncout_CountertopCutoutRectangular';
import { BOM_ElementType_ncout_CountertopEdges } from './types/touch_ncout_CountertopEdges';
import { BOM_ElementType_ncout_DrillHor } from './types/touch_ncout_DrillHor';
import { BOM_ElementType_ncout_DrillVert } from './types/touch_ncout_DrillVert';
import { BOM_ElementType_ncout_Groove } from './types/touch_ncout_Groove';
import { BOM_ElementType_ncout_Pocket } from './types/touch_ncout_Pocket';
import { BOM_ElementType_ncout_SawingAngle } from './types/touch_ncout_SawingAngle';
import {PartBase} from '../mod-base';

export abstract class BOM_ElementTypeGroupBaseBom extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, id:string, typeId:string, bomType:string, desc:string, parentId:string, bomParentId?: string) {
    super(id, typeId, bomType, desc, parentId, bomParentId);
    this.#partSelf = partSelf;
  }

  #partSelf:PartBase;

  addbomout_Board(): BOM_ElementType_bomout_Board {
    const et = new BOM_ElementType_bomout_Board(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addbomout_Edge(): BOM_ElementType_bomout_Edge {
    const et = new BOM_ElementType_bomout_Edge(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addbomout_Hardware(): BOM_ElementType_bomout_Hardware {
    const et = new BOM_ElementType_bomout_Hardware(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addbomout_PartGroup(): BOM_ElementType_bomout_PartGroup {
    const et = new BOM_ElementType_bomout_PartGroup(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

}

export abstract class BOM_ElementTypeGroupBaseNc extends BOM_ElementTypeBase {
  constructor(partSelf: PartBase, id:string, typeId:string, bomType:string, desc:string, parentId:string, bomParentId?: string) {
    super(id, typeId, bomType, desc, parentId, bomParentId);
    this.#partSelf = partSelf;
  }

  #partSelf:PartBase;

  addncout_CountertopConnectionLong(): BOM_ElementType_ncout_CountertopConnectionLong {
    const et = new BOM_ElementType_ncout_CountertopConnectionLong(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_CountertopConnectionShort(): BOM_ElementType_ncout_CountertopConnectionShort {
    const et = new BOM_ElementType_ncout_CountertopConnectionShort(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_CountertopCutoutRectangular(): BOM_ElementType_ncout_CountertopCutoutRectangular {
    const et = new BOM_ElementType_ncout_CountertopCutoutRectangular(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_CountertopEdges(): BOM_ElementType_ncout_CountertopEdges {
    const et = new BOM_ElementType_ncout_CountertopEdges(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_DrillHor(): BOM_ElementType_ncout_DrillHor {
    const et = new BOM_ElementType_ncout_DrillHor(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_DrillVert(): BOM_ElementType_ncout_DrillVert {
    const et = new BOM_ElementType_ncout_DrillVert(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_Groove(): BOM_ElementType_ncout_Groove {
    const et = new BOM_ElementType_ncout_Groove(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_Pocket(): BOM_ElementType_ncout_Pocket {
    const et = new BOM_ElementType_ncout_Pocket(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

  addncout_SawingAngle(): BOM_ElementType_ncout_SawingAngle {
    const et = new BOM_ElementType_ncout_SawingAngle(this.#partSelf, this._id);
    this._subBom.push(et);
    return et;
  }

}

