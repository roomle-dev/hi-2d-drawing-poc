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

export interface cti_tab_PlinthAreaSettings {
  readonly in_TypeElement? : string;
  readonly in_PlinthAreaDesign? : string;
  readonly in_PositionLeftMatrix? : string;
  readonly in_PositionRightMatrix? : string;
  readonly in_PositionBackMatrix? : string;
  readonly in_PositionFrontMatrix? : string;
  readonly in_CarcaseWidthMin : number;
  readonly in_CarcaseWidthMax : number;
  readonly in_CarcaseDepthMin : number;
  readonly in_CarcaseDepthMax : number;
  readonly in_WeightMin : number;
  readonly in_WeightMax : number;
}

export interface ctm_tab_PlinthAreaSettings {
}

export interface cto_tab_PlinthAreaSettings extends ctm_tab_PlinthAreaSettings {
  readonly _id : number;
  readonly SettingsLogic? : string;
  readonly MatrixPositionType : number;
  readonly BasePoint : number;
  readonly HardwareRotation : number;
  PosXOffset(m: ITableParents_mc_PlinthArea01):number;
  PosYOffset(m: ITableParents_mc_PlinthArea01):number;
}

export interface ICT_tab_PlinthAreaSettings
extends cti_tab_PlinthAreaSettings, cto_tab_PlinthAreaSettings {}

export class ct2_tab_PlinthAreaSettings {

public findExactly(
     in_TypeElement: string|undefined,
     in_PlinthAreaDesign: string|undefined,
     in_PositionLeftMatrix: string|undefined,
     in_PositionRightMatrix: string|undefined,
     in_PositionBackMatrix: string|undefined,
     in_PositionFrontMatrix: string|undefined,
     in_CarcaseWidthMin: number,
     in_CarcaseWidthMax: number,
     in_CarcaseDepthMin: number,
     in_CarcaseDepthMax: number,
     in_WeightMin: number,
     in_WeightMax: number,
): cto_tab_PlinthAreaSettings | undefined {
  const res = ct_tab_PlinthAreaSettings.find((p) => 
p.in_TypeElement === in_TypeElement
 && p.in_PlinthAreaDesign === in_PlinthAreaDesign
 && p.in_PositionLeftMatrix === in_PositionLeftMatrix
 && p.in_PositionRightMatrix === in_PositionRightMatrix
 && p.in_PositionBackMatrix === in_PositionBackMatrix
 && p.in_PositionFrontMatrix === in_PositionFrontMatrix
 && p.in_CarcaseWidthMin === in_CarcaseWidthMin
 && p.in_CarcaseWidthMax === in_CarcaseWidthMax
 && p.in_CarcaseDepthMin === in_CarcaseDepthMin
 && p.in_CarcaseDepthMax === in_CarcaseDepthMax
 && p.in_WeightMin === in_WeightMin
 && p.in_WeightMax === in_WeightMax
);
return res;
}

public find(
predicate: (value: cti_tab_PlinthAreaSettings) => boolean
): cto_tab_PlinthAreaSettings | undefined {
  for (let index = 0; index < ct_tab_PlinthAreaSettings.length; index++){
    const element = ct_tab_PlinthAreaSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_PlinthAreaSettings :ICT_tab_PlinthAreaSettings[] = [
{
 _id: 761,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 762,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 763,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 764,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 765,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 766,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 767,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 768,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 769,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 770,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 771,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 772,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 773,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 774,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 775,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 776,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 777,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 778,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 779,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 780,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 781,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 782,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 783,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 784,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 785,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 786,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 787,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 788,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 789,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 790,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 791,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 792,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 793,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 794,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 795,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 796,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 797,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 798,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 799,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 800,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "30",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 801,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 802,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 803,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 804,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 805,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 806,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 807,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 808,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 809,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 810,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 811,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 812,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 813,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 814,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 815,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 816,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 817,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 818,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 819,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 820,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 821,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 822,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 823,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 824,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 825,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 826,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 827,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 828,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 829,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 830,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 831,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 832,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "50",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 833,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 834,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 835,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 836,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 837,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 838,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 839,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 840,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 841,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 842,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 843,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 844,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 845,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 846,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 847,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 848,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 849,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 850,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 851,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 852,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 853,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 854,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 855,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 856,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 857,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 858,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 859,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 860,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 861,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 862,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 863,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 864,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 865,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 866,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 867,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 868,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 869,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 870,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 871,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 872,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "40",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 873,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 874,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 875,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 876,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 877,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 878,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 879,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 880,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 881,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 882,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 883,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 884,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 885,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 886,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 887,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 888,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 889,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 890,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 891,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 892,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCR",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 50;
  }

}
,{
 _id: 893,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 894,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 895,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 896,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 897,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 898,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 899,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 900,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 901,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 902,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCF",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 903,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 904,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 905,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 906,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 907,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCF",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 908,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 13,
 BasePoint: 3,
 HardwareRotation: 180,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
,{
 _id: 909,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 33,
 BasePoint: 9,
 HardwareRotation: 90,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 910,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 850,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 32,
 BasePoint: 8,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return m.mod_CarcaseWidth/2;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 911,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 150,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 31,
 BasePoint: 7,
 HardwareRotation: 0,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }

}
,{
 _id: 912,
 in_TypeElement: "All",
 in_PlinthAreaDesign: "20",
 in_PositionLeftMatrix: "LCR",
 in_PositionRightMatrix: "RCR",
 in_PositionBackMatrix: "BCF",
 in_PositionFrontMatrix: "FCF",
 in_CarcaseWidthMin: 200,
 in_CarcaseWidthMax: 9999,
 in_CarcaseDepthMin: 300,
 in_CarcaseDepthMax: 9999,
 in_WeightMin: 0,
 in_WeightMax: 9999,
 SettingsLogic: "Library",
 MatrixPositionType: 11,
 BasePoint: 1,
 HardwareRotation: 270,
  PosXOffset(m: ITableParents_mc_PlinthArea01):number {
    return 20;
  }
,
  PosYOffset(m: ITableParents_mc_PlinthArea01):number {
    return 10;
  }

}
];
