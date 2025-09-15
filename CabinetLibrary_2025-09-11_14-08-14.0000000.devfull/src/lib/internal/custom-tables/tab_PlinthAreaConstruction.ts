import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
import { IGlobalVars } from '../global-vars';
import { GlobalFunc } from '../global-func';
import { dc_mc_FrontPanel01, adc_mc_FrontPanel01 } from '../modules/mc_FrontPanel01'
import { dc_mc_Drawer01, adc_mc_Drawer01 } from '../modules/mc_Drawer01'
import { dc_mc_Handle01, adc_mc_Handle01 } from '../modules/mc_Handle01'
import { dc_mc_DrawerBox01, adc_mc_DrawerBox01 } from '../modules/mc_DrawerBox01'
import { dc_mc_Hinge01, adc_mc_Hinge01 } from '../modules/mc_Hinge01'
import { dc_mc_Leg01, adc_mc_Leg01 } from '../modules/mc_Leg01'
import { dc_mr_Paneltop, adc_mr_Paneltop } from '../modules/mr_Paneltop'
import { dc_mc_Panel01, adc_mc_Panel01 } from '../modules/mc_Panel01'
import { dc_mf_Drawer, adc_mf_Drawer } from '../modules/mf_Drawer'
import { dc_mc_PlinthArea01, adc_mc_PlinthArea01 } from '../modules/mc_PlinthArea01'
import { dc_mr_StorageunitSingle, adc_mr_StorageunitSingle } from '../modules/mr_StorageunitSingle'
import { dc_mc_FrontPanelGlass01, adc_mc_FrontPanelGlass01 } from '../modules/mc_FrontPanelGlass01'
import { dc_mc_LightSystem01, adc_mc_LightSystem01 } from '../modules/mc_LightSystem01'
import { dc_mc_HangerSystem01, adc_mc_HangerSystem01 } from '../modules/mc_HangerSystem01'
import { dc_mf_Fliplift, adc_mf_Fliplift } from '../modules/mf_Fliplift'
import { dc_mc_Fliplift01, adc_mc_Fliplift01 } from '../modules/mc_Fliplift01'
import { dc_mf_Door, adc_mf_Door } from '../modules/mf_Door'
import { dc_mc_Door01, adc_mc_Door01 } from '../modules/mc_Door01'
import { dc_mr_CornerunitStraight, adc_mr_CornerunitStraight } from '../modules/mr_CornerunitStraight'
import { dc_mc_ShelfadjGroup01, adc_mc_ShelfadjGroup01 } from '../modules/mc_ShelfadjGroup01'
import { dc_mc_ShelfadjWood01, adc_mc_ShelfadjWood01 } from '../modules/mc_ShelfadjWood01'
import { dc_mc_ShelfadjGlass01, adc_mc_ShelfadjGlass01 } from '../modules/mc_ShelfadjGlass01'
import { dc_mc_ShelfadjDrill01, adc_mc_ShelfadjDrill01 } from '../modules/mc_ShelfadjDrill01'
import { dc_mc_ThermoformedPanel01, adc_mc_ThermoformedPanel01 } from '../modules/mc_ThermoformedPanel01'
import { dc_mc_MetalFrame01, adc_mc_MetalFrame01 } from '../modules/mc_MetalFrame01'
import { dc_mc_WoodFrame01, adc_mc_WoodFrame01 } from '../modules/mc_WoodFrame01'
import { dc_mc_Storageunit01, adc_mc_Storageunit01 } from '../modules/mc_Storageunit01'
import { dc_mc_Handlestrip01, adc_mc_Handlestrip01 } from '../modules/mc_Handlestrip01'
import { dc_mc_StorageunitSidepanel01, adc_mc_StorageunitSidepanel01 } from '../modules/mc_StorageunitSidepanel01'
import { dc_mc_StorageunitShelfbtm01, adc_mc_StorageunitShelfbtm01 } from '../modules/mc_StorageunitShelfbtm01'
import { dc_mc_StorageunitShelftop01, adc_mc_StorageunitShelftop01 } from '../modules/mc_StorageunitShelftop01'
import { dc_mc_StorageunitBackwall01, adc_mc_StorageunitBackwall01 } from '../modules/mc_StorageunitBackwall01'
import { dc_mc_StorageunitShelffixed01, adc_mc_StorageunitShelffixed01 } from '../modules/mc_StorageunitShelffixed01'
import { dc_mc_CleatVert01, adc_mc_CleatVert01 } from '../modules/mc_CleatVert01'
import { dc_mc_Panelblind01, adc_mc_Panelblind01 } from '../modules/mc_Panelblind01'
import { dc_mc_CornerunitStraight01, adc_mc_CornerunitStraight01 } from '../modules/mc_CornerunitStraight01'
import { dc_mc_ShelfadjFitting01, adc_mc_ShelfadjFitting01 } from '../modules/mc_ShelfadjFitting01'
import { dc_mf_Oven, adc_mf_Oven } from '../modules/mf_Oven'
import { dc_mc_Oven01, adc_mc_Oven01 } from '../modules/mc_Oven01'
import { dc_mf_Fridge, adc_mf_Fridge } from '../modules/mf_Fridge'
import { dc_mf_RackArea, adc_mf_RackArea } from '../modules/mf_RackArea'
import { dc_mc_RackArea01, adc_mc_RackArea01 } from '../modules/mc_RackArea01'
import { dc_mc_ShelffixedGroup01, adc_mc_ShelffixedGroup01 } from '../modules/mc_ShelffixedGroup01'
import { dc_mc_DoorGroup01, adc_mc_DoorGroup01 } from '../modules/mc_DoorGroup01'
import { dc_mc_VertDivider01, adc_mc_VertDivider01 } from '../modules/mc_VertDivider01'
import { dc_mc_Duststrip01, adc_mc_Duststrip01 } from '../modules/mc_Duststrip01'
import { dc_mr_Upright, adc_mr_Upright } from '../modules/mr_Upright'
import { dc_mc_Upright01, adc_mc_Upright01 } from '../modules/mc_Upright01'
import { dc_mr_Countertop, adc_mr_Countertop } from '../modules/mr_Countertop'
import { dc_mc_Countertop01, adc_mc_Countertop01 } from '../modules/mc_Countertop01'
import { dc_mr_Backsplash, adc_mr_Backsplash } from '../modules/mr_Backsplash'
import { dc_mc_Backsplash, adc_mc_Backsplash } from '../modules/mc_Backsplash'
import { dc_mr_Toekick, adc_mr_Toekick } from '../modules/mr_Toekick'
import { dc_mc_Toekick, adc_mc_Toekick } from '../modules/mc_Toekick'
import { dc_mc_Pushtoopen01, adc_mc_Pushtoopen01 } from '../modules/mc_Pushtoopen01'
import { dc_mc_PanelWoodFrame01, adc_mc_PanelWoodFrame01 } from '../modules/mc_PanelWoodFrame01'
import { dc_mc_HingeGroup01, adc_mc_HingeGroup01 } from '../modules/mc_HingeGroup01'
import { dc_mc_FlipliftHardware01, adc_mc_FlipliftHardware01 } from '../modules/mc_FlipliftHardware01'
import { dc_mr_Fingergrip, adc_mr_Fingergrip } from '../modules/mr_Fingergrip'
import { dc_mf_Fixedfront, adc_mf_Fixedfront } from '../modules/mf_Fixedfront'
import { dc_mc_Fixedfront01, adc_mc_Fixedfront01 } from '../modules/mc_Fixedfront01'
import { dc_mc_StorageunitShelftop02, adc_mc_StorageunitShelftop02 } from '../modules/mc_StorageunitShelftop02'
import { dc_mc_StorageunitShelftop03, adc_mc_StorageunitShelftop03 } from '../modules/mc_StorageunitShelftop03'
import { dc_mc_StorageunitShelftop04, adc_mc_StorageunitShelftop04 } from '../modules/mc_StorageunitShelftop04'
import { dc_mc_Fingergrip01, adc_mc_Fingergrip01 } from '../modules/mc_Fingergrip01'
import { dc_mc_Fridge01, adc_mc_Fridge01 } from '../modules/mc_Fridge01'
import { dc_mc_ApplianceGraphic, adc_mc_ApplianceGraphic } from '../modules/mc_ApplianceGraphic'
import { dc_mr_Hood, adc_mr_Hood } from '../modules/mr_Hood'
import { dc_mc_Paneltop01, adc_mc_Paneltop01 } from '../modules/mc_Paneltop01'
import { dc_mf_Hob, adc_mf_Hob } from '../modules/mf_Hob'
import { dc_mc_Hob01, adc_mc_Hob01 } from '../modules/mc_Hob01'
import { dc_mc_Sink01, adc_mc_Sink01 } from '../modules/mc_Sink01'
import { dc_mf_Sink, adc_mf_Sink } from '../modules/mf_Sink'
import { dc_mr_Filler01, adc_mr_Filler01 } from '../modules/mr_Filler01'
import { dc_mf_FillerFront, adc_mf_FillerFront } from '../modules/mf_FillerFront'
import { dc_mc_FillerFront01, adc_mc_FillerFront01 } from '../modules/mc_FillerFront01'
import { dc_mr_Appliance, adc_mr_Appliance } from '../modules/mr_Appliance'
import { dc_mc_Dishwasher, adc_mc_Dishwasher } from '../modules/mc_Dishwasher'
import { dc_mf_Dishwasher, adc_mf_Dishwasher } from '../modules/mf_Dishwasher'
import { dc_mr_CornerFiller, adc_mr_CornerFiller } from '../modules/mr_CornerFiller'
import { dc_mc_Cornerunit01, adc_mc_Cornerunit01 } from '../modules/mc_Cornerunit01'
import { dc_mr_IslandBackwall, adc_mr_IslandBackwall } from '../modules/mr_IslandBackwall'
import { dc_mr_Shelves, adc_mr_Shelves } from '../modules/mr_Shelves'
import { dc_mc_Shelves01, adc_mc_Shelves01 } from '../modules/mc_Shelves01'
import { dc_mc_Bracket01, adc_mc_Bracket01 } from '../modules/mc_Bracket01'
import { dc_mf_CornerFillerFront, adc_mf_CornerFillerFront } from '../modules/mf_CornerFillerFront'
import { dc_mc_CornerFillerFront01, adc_mc_CornerFillerFront01 } from '../modules/mc_CornerFillerFront01'
import { ITableParents_mc_PlinthArea01 } from '../var-interfaces';

export interface cti_tab_PlinthAreaConstruction {
  readonly in_BasePoint : number;
  readonly in_MatrixPositionType : number;
  readonly in_RotationMin : number;
  readonly in_RotationMax : number;
}

export interface ctm_tab_PlinthAreaConstruction {
}

export interface cto_tab_PlinthAreaConstruction extends ctm_tab_PlinthAreaConstruction {
  readonly _id : number;
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number;
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number;
}

export interface ICT_tab_PlinthAreaConstruction
extends cti_tab_PlinthAreaConstruction, cto_tab_PlinthAreaConstruction {}

export class ct2_tab_PlinthAreaConstruction {

public findExactly(
     in_BasePoint: number,
     in_MatrixPositionType: number,
     in_RotationMin: number,
     in_RotationMax: number,
): cto_tab_PlinthAreaConstruction | undefined {
  const res = ct_tab_PlinthAreaConstruction.find((p) => 
p.in_BasePoint === in_BasePoint
 && p.in_MatrixPositionType === in_MatrixPositionType
 && p.in_RotationMin === in_RotationMin
 && p.in_RotationMax === in_RotationMax
);
return res;
}

public find(
predicate: (value: cti_tab_PlinthAreaConstruction) => boolean
): cto_tab_PlinthAreaConstruction | undefined {
  for (let index = 0; index < ct_tab_PlinthAreaConstruction.length; index++){
    const element = ct_tab_PlinthAreaConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_PlinthAreaConstruction :ICT_tab_PlinthAreaConstruction[] = [
{
 _id: 1,
 in_BasePoint: 1,
 in_MatrixPositionType: 11,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 2,
 in_BasePoint: 1,
 in_MatrixPositionType: 11,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 3,
 in_BasePoint: 1,
 in_MatrixPositionType: 11,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 4,
 in_BasePoint: 1,
 in_MatrixPositionType: 11,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 5,
 in_BasePoint: 1,
 in_MatrixPositionType: 12,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 6,
 in_BasePoint: 1,
 in_MatrixPositionType: 12,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 7,
 in_BasePoint: 1,
 in_MatrixPositionType: 12,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 8,
 in_BasePoint: 1,
 in_MatrixPositionType: 12,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 9,
 in_BasePoint: 2,
 in_MatrixPositionType: 12,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 10,
 in_BasePoint: 2,
 in_MatrixPositionType: 12,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 11,
 in_BasePoint: 2,
 in_MatrixPositionType: 12,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 12,
 in_BasePoint: 2,
 in_MatrixPositionType: 12,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 13,
 in_BasePoint: 3,
 in_MatrixPositionType: 12,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 14,
 in_BasePoint: 3,
 in_MatrixPositionType: 12,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 15,
 in_BasePoint: 3,
 in_MatrixPositionType: 12,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 16,
 in_BasePoint: 3,
 in_MatrixPositionType: 12,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 17,
 in_BasePoint: 3,
 in_MatrixPositionType: 13,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 18,
 in_BasePoint: 3,
 in_MatrixPositionType: 13,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 19,
 in_BasePoint: 3,
 in_MatrixPositionType: 13,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 20,
 in_BasePoint: 3,
 in_MatrixPositionType: 13,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 21,
 in_BasePoint: 1,
 in_MatrixPositionType: 21,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 22,
 in_BasePoint: 1,
 in_MatrixPositionType: 21,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 23,
 in_BasePoint: 1,
 in_MatrixPositionType: 21,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 24,
 in_BasePoint: 1,
 in_MatrixPositionType: 21,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 25,
 in_BasePoint: 4,
 in_MatrixPositionType: 21,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 26,
 in_BasePoint: 4,
 in_MatrixPositionType: 21,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 27,
 in_BasePoint: 4,
 in_MatrixPositionType: 21,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 28,
 in_BasePoint: 4,
 in_MatrixPositionType: 21,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 29,
 in_BasePoint: 7,
 in_MatrixPositionType: 21,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 30,
 in_BasePoint: 7,
 in_MatrixPositionType: 21,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 31,
 in_BasePoint: 7,
 in_MatrixPositionType: 21,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 32,
 in_BasePoint: 7,
 in_MatrixPositionType: 21,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 33,
 in_BasePoint: 1,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 34,
 in_BasePoint: 1,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 35,
 in_BasePoint: 1,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 36,
 in_BasePoint: 1,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 37,
 in_BasePoint: 2,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 38,
 in_BasePoint: 2,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 39,
 in_BasePoint: 2,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 40,
 in_BasePoint: 2,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 41,
 in_BasePoint: 3,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 42,
 in_BasePoint: 3,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 43,
 in_BasePoint: 3,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 44,
 in_BasePoint: 3,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 45,
 in_BasePoint: 4,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 46,
 in_BasePoint: 4,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 47,
 in_BasePoint: 4,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 48,
 in_BasePoint: 4,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 49,
 in_BasePoint: 5,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 50,
 in_BasePoint: 5,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 51,
 in_BasePoint: 5,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 52,
 in_BasePoint: 5,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 53,
 in_BasePoint: 6,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 54,
 in_BasePoint: 6,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 55,
 in_BasePoint: 6,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 56,
 in_BasePoint: 6,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 57,
 in_BasePoint: 7,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 58,
 in_BasePoint: 7,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 59,
 in_BasePoint: 7,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 60,
 in_BasePoint: 7,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 61,
 in_BasePoint: 8,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 62,
 in_BasePoint: 8,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 63,
 in_BasePoint: 8,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 64,
 in_BasePoint: 8,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 65,
 in_BasePoint: 9,
 in_MatrixPositionType: 22,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 66,
 in_BasePoint: 9,
 in_MatrixPositionType: 22,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 67,
 in_BasePoint: 9,
 in_MatrixPositionType: 22,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 68,
 in_BasePoint: 9,
 in_MatrixPositionType: 22,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 69,
 in_BasePoint: 3,
 in_MatrixPositionType: 23,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 70,
 in_BasePoint: 3,
 in_MatrixPositionType: 23,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 71,
 in_BasePoint: 3,
 in_MatrixPositionType: 23,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 72,
 in_BasePoint: 3,
 in_MatrixPositionType: 23,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 73,
 in_BasePoint: 6,
 in_MatrixPositionType: 23,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 74,
 in_BasePoint: 6,
 in_MatrixPositionType: 23,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 75,
 in_BasePoint: 6,
 in_MatrixPositionType: 23,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 76,
 in_BasePoint: 6,
 in_MatrixPositionType: 23,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset;
  }

}
,{
 _id: 77,
 in_BasePoint: 9,
 in_MatrixPositionType: 23,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 78,
 in_BasePoint: 9,
 in_MatrixPositionType: 23,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 79,
 in_BasePoint: 9,
 in_MatrixPositionType: 23,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareWidth/2);
  }

}
,{
 _id: 80,
 in_BasePoint: 9,
 in_MatrixPositionType: 23,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosYOffset+(HardwareLength/2);
  }

}
,{
 _id: 81,
 in_BasePoint: 7,
 in_MatrixPositionType: 31,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 82,
 in_BasePoint: 7,
 in_MatrixPositionType: 31,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 83,
 in_BasePoint: 7,
 in_MatrixPositionType: 31,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 84,
 in_BasePoint: 7,
 in_MatrixPositionType: 31,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 85,
 in_BasePoint: 7,
 in_MatrixPositionType: 32,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 86,
 in_BasePoint: 7,
 in_MatrixPositionType: 32,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 87,
 in_BasePoint: 7,
 in_MatrixPositionType: 32,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 88,
 in_BasePoint: 7,
 in_MatrixPositionType: 32,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 89,
 in_BasePoint: 8,
 in_MatrixPositionType: 32,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 90,
 in_BasePoint: 8,
 in_MatrixPositionType: 32,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 91,
 in_BasePoint: 8,
 in_MatrixPositionType: 32,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 92,
 in_BasePoint: 8,
 in_MatrixPositionType: 32,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset;
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 93,
 in_BasePoint: 9,
 in_MatrixPositionType: 32,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 94,
 in_BasePoint: 9,
 in_MatrixPositionType: 32,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 95,
 in_BasePoint: 9,
 in_MatrixPositionType: 32,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 96,
 in_BasePoint: 9,
 in_MatrixPositionType: 32,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return PosXOffset+(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 97,
 in_BasePoint: 9,
 in_MatrixPositionType: 33,
 in_RotationMin: 0,
 in_RotationMax: 0,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 98,
 in_BasePoint: 9,
 in_MatrixPositionType: 33,
 in_RotationMin: 90,
 in_RotationMax: 90,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
,{
 _id: 99,
 in_BasePoint: 9,
 in_MatrixPositionType: 33,
 in_RotationMin: 180,
 in_RotationMax: 180,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareLength/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareWidth/2);
  }

}
,{
 _id: 100,
 in_BasePoint: 9,
 in_MatrixPositionType: 33,
 in_RotationMin: 270,
 in_RotationMax: 270,
  PosX(m: ITableParents_mc_PlinthArea01,PosXOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseWidth-PosXOffset-(HardwareWidth/2);
  }
,
  PosY(m: ITableParents_mc_PlinthArea01,PosYOffset:number,HardwareLength:number,HardwareWidth:number):number {
    return m.mod_CarcaseDepth-PosYOffset-(HardwareLength/2);
  }

}
];
