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

export interface cti_tab_EdgeMapping {
  readonly in_Program? : string;
  readonly in_EdgeClass? : string;
  readonly in_NeutralColor? : string;
  readonly in_BoardThkMin : number;
  readonly in_BoardThkMax : number;
}

export interface ctm_tab_EdgeMapping {
}

export interface cto_tab_EdgeMapping extends ctm_tab_EdgeMapping {
  readonly _id : number;
  readonly EdgeObject? : string;
}

export interface ICT_tab_EdgeMapping
extends cti_tab_EdgeMapping, cto_tab_EdgeMapping {}

export class ct2_tab_EdgeMapping {

public findExactly(
     in_Program: string|undefined,
     in_EdgeClass: string|undefined,
     in_NeutralColor: string|undefined,
     in_BoardThkMin: number,
     in_BoardThkMax: number,
): cto_tab_EdgeMapping | undefined {
  const res = ct_tab_EdgeMapping.find((p) => 
p.in_Program === in_Program
 && p.in_EdgeClass === in_EdgeClass
 && p.in_NeutralColor === in_NeutralColor
 && p.in_BoardThkMin === in_BoardThkMin
 && p.in_BoardThkMax === in_BoardThkMax
);
return res;
}

public find(
predicate: (value: cti_tab_EdgeMapping) => boolean
): cto_tab_EdgeMapping | undefined {
  for (let index = 0; index < ct_tab_EdgeMapping.length; index++){
    const element = ct_tab_EdgeMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_EdgeMapping :ICT_tab_EdgeMapping[] = [
{
 _id: 413,
 in_Program: "All",
 in_EdgeClass: "NoEdgeClass",
 in_NeutralColor: "All",
 in_BoardThkMin: 0,
 in_BoardThkMax: 999,
 EdgeObject: "U708ST9_28x2.0"
}
,{
 _id: 414,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass3",
 in_NeutralColor: "All",
 in_BoardThkMin: 0,
 in_BoardThkMax: 999,
 EdgeObject: "U708ST9_28x2.0"
}
,{
 _id: 415,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "190",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "W980ST7_23x2.0"
}
,{
 _id: 416,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "190",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "W980ST7_23x2.0"
}
,{
 _id: 417,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "190",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "W980ST7_23x2.0"
}
,{
 _id: 418,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "190",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "W980ST7_23x0.8"
}
,{
 _id: 419,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "190",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "W980ST7_28x2.0"
}
,{
 _id: 420,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "190",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "W980ST7_28x0.8"
}
,{
 _id: 421,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "190",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "W980ST7_28x2.0"
}
,{
 _id: 422,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "190",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "W980ST7_28x2.0"
}
,{
 _id: 423,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "190",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "W980ST7_43x0.8"
}
,{
 _id: 424,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "190",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "W980ST7_43x2.0"
}
,{
 _id: 425,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "190",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "W980ST7_43x2.0"
}
,{
 _id: 426,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "190",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "W980ST7_43x2.0"
}
,{
 _id: 427,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "230",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3860ST9_23x2.0"
}
,{
 _id: 428,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "230",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3860ST9_23x2.0"
}
,{
 _id: 429,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "230",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3860ST9_23x0.8"
}
,{
 _id: 430,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "230",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3860ST9_23x2.0"
}
,{
 _id: 431,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "230",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3860ST9_28x2.0"
}
,{
 _id: 432,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "230",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3860ST9_28x2.0"
}
,{
 _id: 433,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "230",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3860ST9_28x0.8"
}
,{
 _id: 434,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "230",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3860ST9_28x2.0"
}
,{
 _id: 435,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "230",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3860ST9_43x2.0"
}
,{
 _id: 436,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "230",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3860ST9_43x2.0"
}
,{
 _id: 437,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "230",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3860ST9_43x0.8"
}
,{
 _id: 438,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "230",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3860ST9_43x2.0"
}
,{
 _id: 439,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "160",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U640ST9_23x2.0"
}
,{
 _id: 440,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "160",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U640ST9_23x2.0"
}
,{
 _id: 441,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "160",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U640ST9_23x2.0"
}
,{
 _id: 442,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "160",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U640ST9_23x0.8"
}
,{
 _id: 443,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "160",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U640ST9_28x2.0"
}
,{
 _id: 444,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "160",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U640ST9_28x0.8"
}
,{
 _id: 445,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "160",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U640ST9_28x2.0"
}
,{
 _id: 446,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "160",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U640ST9_28x2.0"
}
,{
 _id: 447,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "160",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U640ST9_43x2.0"
}
,{
 _id: 448,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "160",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U640ST9_43x2.0"
}
,{
 _id: 449,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "160",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U640ST9_43x2.0"
}
,{
 _id: 450,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "160",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U640ST9_43x0.8"
}
,{
 _id: 451,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "165",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U645ST9_23x0.8"
}
,{
 _id: 452,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "165",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U645ST9_23x2.0"
}
,{
 _id: 453,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "165",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U645ST9_23x2.0"
}
,{
 _id: 454,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "165",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U645ST9_23x2.0"
}
,{
 _id: 455,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "165",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U640ST9_28x2.0"
}
,{
 _id: 456,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "165",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U645ST9_28x2.0"
}
,{
 _id: 457,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "165",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U645ST9_28x0.8"
}
,{
 _id: 458,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "165",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U645ST9_28x2.0"
}
,{
 _id: 459,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "165",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U645ST9_43x0.8"
}
,{
 _id: 460,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "165",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U645ST9_43x2.0"
}
,{
 _id: 461,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "165",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U645ST9_43x2.0"
}
,{
 _id: 462,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "165",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U645ST9_43x2.0"
}
,{
 _id: 463,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "199",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U999ST7_23x0.8"
}
,{
 _id: 464,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "199",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U999ST7_23x2.0"
}
,{
 _id: 465,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "199",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U999ST7_23x2.0"
}
,{
 _id: 466,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "199",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U999ST7_23x2.0"
}
,{
 _id: 467,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "199",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U999ST7_28x0.8"
}
,{
 _id: 468,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "199",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U999ST7_28x2.0"
}
,{
 _id: 469,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "199",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U999ST7_28x2.0"
}
,{
 _id: 470,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "199",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U999ST7_28x2.0"
}
,{
 _id: 471,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "199",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U999ST7_43x0.8"
}
,{
 _id: 472,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "199",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U999ST7_43x2.0"
}
,{
 _id: 473,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "199",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U999ST7_43x2.0"
}
,{
 _id: 474,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "199",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U999ST7_43x2.0"
}
,{
 _id: 475,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "152",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U502ST9_23x2.0"
}
,{
 _id: 476,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "152",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U502ST9_23x2.0"
}
,{
 _id: 477,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "152",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U502ST9_23x2.0"
}
,{
 _id: 478,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "152",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U502ST9_23x0.8"
}
,{
 _id: 479,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "152",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U502ST9_28x2.0"
}
,{
 _id: 480,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "152",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U502ST9_28x0.8"
}
,{
 _id: 481,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "152",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U502ST9_28x2.0"
}
,{
 _id: 482,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "152",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U502ST9_28x2.0"
}
,{
 _id: 483,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "152",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U502ST9_43x0.8"
}
,{
 _id: 484,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "152",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U502ST9_43x2.0"
}
,{
 _id: 485,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "152",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U502ST9_43x2.0"
}
,{
 _id: 486,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "152",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U502ST9_43x2.0"
}
,{
 _id: 487,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "155",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U575ST9_23x2.0"
}
,{
 _id: 488,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "155",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U575ST9_23x2.0"
}
,{
 _id: 489,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "155",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U575ST9_23x0.8"
}
,{
 _id: 490,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "155",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U575ST9_23x2.0"
}
,{
 _id: 491,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "155",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U575ST9_28x2.0"
}
,{
 _id: 492,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "155",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U575ST9_28x2.0"
}
,{
 _id: 493,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "155",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U575ST9_28x0.8"
}
,{
 _id: 494,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "155",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U575ST9_28x2.0"
}
,{
 _id: 495,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "155",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U575ST9_43x2.0"
}
,{
 _id: 496,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "155",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U575ST9_43x2.0"
}
,{
 _id: 497,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "155",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U502ST9_43x2.0"
}
,{
 _id: 498,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "155",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U575ST9_43x0.8"
}
,{
 _id: 499,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "215",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1715ST12_23x2.0"
}
,{
 _id: 500,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "215",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1715ST12_23x2.0"
}
,{
 _id: 501,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "215",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1715ST12_23x2.0"
}
,{
 _id: 502,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "215",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1715ST12_23x0.8"
}
,{
 _id: 503,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "215",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1715ST12_28x2.0"
}
,{
 _id: 504,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "215",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1715ST12_28x0.8"
}
,{
 _id: 505,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "215",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1715ST12_28x2.0"
}
,{
 _id: 506,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "215",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1715ST12_28x2.0"
}
,{
 _id: 507,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "215",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1715ST12_43x2.0"
}
,{
 _id: 508,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "215",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1715ST12_43x2.0"
}
,{
 _id: 509,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "215",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1715ST12_43x0.8"
}
,{
 _id: 510,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "215",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1715ST12_43x2.0"
}
,{
 _id: 511,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "214",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3734ST9_23x2.0"
}
,{
 _id: 512,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "214",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3734ST9_23x0.8"
}
,{
 _id: 513,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "214",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3734ST9_23x2.0"
}
,{
 _id: 514,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "214",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3734ST9_23x2.0"
}
,{
 _id: 515,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "214",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3734ST9_28x2.0"
}
,{
 _id: 516,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "214",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3734ST9_28x2.0"
}
,{
 _id: 517,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "214",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3734ST9_28x0.8"
}
,{
 _id: 518,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "214",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3734ST9_28x2.0"
}
,{
 _id: 519,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "214",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3734ST9_43x2.0"
}
,{
 _id: 520,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "214",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3734ST9_43x2.0"
}
,{
 _id: 521,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "214",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3734ST9_43x2.0"
}
,{
 _id: 522,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "214",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3734ST9_43x0.8"
}
,{
 _id: 523,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "222",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H2033ST10_23x2.0"
}
,{
 _id: 524,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "222",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H2033ST10_23x2.0"
}
,{
 _id: 525,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "222",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H2033ST10_23x0.8"
}
,{
 _id: 526,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "222",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H2033ST10_23x2.0"
}
,{
 _id: 527,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "222",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H2033ST10_28x2.0"
}
,{
 _id: 528,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "222",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H2033ST10_28x2.0"
}
,{
 _id: 529,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "222",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H2033ST10_28x0.8"
}
,{
 _id: 530,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "222",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H2033ST10_28x2.0"
}
,{
 _id: 531,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "222",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H2033ST10_43x2.0"
}
,{
 _id: 532,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "222",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H2033ST10_43x0.8"
}
,{
 _id: 533,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "222",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H2033ST10_43x2.0"
}
,{
 _id: 534,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "222",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H2033ST10_43x2.0"
}
,{
 _id: 535,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "229",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1199ST12_23x0.8"
}
,{
 _id: 536,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "229",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1199ST12_23x2.0"
}
,{
 _id: 537,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "229",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1199ST12_23x2.0"
}
,{
 _id: 538,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "229",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H1199ST12_23x2.0"
}
,{
 _id: 539,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "229",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1199ST12_28x2.0"
}
,{
 _id: 540,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "229",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1199ST12_28x0.8"
}
,{
 _id: 541,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "229",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1199ST12_28x2.0"
}
,{
 _id: 542,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "229",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H1199ST12_28x2.0"
}
,{
 _id: 543,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "229",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1199ST12_43x0.8"
}
,{
 _id: 544,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "229",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1199ST12_43x2.0"
}
,{
 _id: 545,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "229",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1199ST12_43x2.0"
}
,{
 _id: 546,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "229",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H1199ST12_43x2.0"
}
,{
 _id: 547,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "240",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3190ST19_23x0.8"
}
,{
 _id: 548,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "240",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3190ST19_23x2.0"
}
,{
 _id: 549,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "240",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3190ST19_23x2.0"
}
,{
 _id: 550,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "240",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "H3190ST19_23x2.0"
}
,{
 _id: 551,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "240",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3190ST19_28x0.8"
}
,{
 _id: 552,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "240",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3190ST19_28x2.0"
}
,{
 _id: 553,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "240",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3190ST19_28x2.0"
}
,{
 _id: 554,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "240",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "H3190ST19_28x2.0"
}
,{
 _id: 555,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "240",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3190ST19_43x0.8"
}
,{
 _id: 556,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "240",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3190ST19_43x2.0"
}
,{
 _id: 557,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "240",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3190ST19_43x2.0"
}
,{
 _id: 558,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "240",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "H3190ST19_43x2.0"
}
,{
 _id: 559,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "326",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F235ST76_23x2.0"
}
,{
 _id: 560,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "326",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F235ST76_23x2.0"
}
,{
 _id: 561,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "326",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F235ST76_23x2.0"
}
,{
 _id: 562,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "326",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F235ST76_23x0.8"
}
,{
 _id: 563,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "326",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F235ST76_28x0.8"
}
,{
 _id: 564,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "326",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F235ST76_28x2.0"
}
,{
 _id: 565,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "326",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F235ST76_28x2.0"
}
,{
 _id: 566,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "326",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F235ST76_28x2.0"
}
,{
 _id: 567,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "326",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F235ST76_43x0.8"
}
,{
 _id: 568,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "326",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F235ST76_43x2.0"
}
,{
 _id: 569,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "326",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F235ST76_43x2.0"
}
,{
 _id: 570,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "326",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F235ST76_43x2.0"
}
,{
 _id: 571,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "316",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F186ST9_23x0.8"
}
,{
 _id: 572,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "316",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F186ST9_23x2.0"
}
,{
 _id: 573,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "316",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F186ST9_23x2.0"
}
,{
 _id: 574,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "316",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F186ST9_23x2.0"
}
,{
 _id: 575,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "316",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F186ST9_28x2.0"
}
,{
 _id: 576,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "316",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F186ST9_28x2.0"
}
,{
 _id: 577,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "316",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F186ST9_28x2.0"
}
,{
 _id: 578,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "316",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F186ST9_43x0.8"
}
,{
 _id: 579,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "316",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F186ST9_43x2.0"
}
,{
 _id: 580,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "316",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F186ST9_28x2.0"
}
,{
 _id: 581,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "316",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F186ST9_43x2.0"
}
,{
 _id: 582,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "324",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F244ST76_23x2.0"
}
,{
 _id: 583,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "324",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F244ST76_23x0.8"
}
,{
 _id: 584,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "324",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F244ST76_23x2.0"
}
,{
 _id: 585,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "324",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F244ST76_23x2.0"
}
,{
 _id: 586,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "324",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F244ST76_28x2.0"
}
,{
 _id: 587,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "324",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F244ST76_28x0.8"
}
,{
 _id: 588,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "324",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F244ST76_28x2.0"
}
,{
 _id: 589,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "324",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F244ST76_28x2.0"
}
,{
 _id: 590,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "324",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F244ST76_43x0.8"
}
,{
 _id: 591,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "324",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F244ST76_43x2.0"
}
,{
 _id: 592,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "324",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F244ST76_43x2.0"
}
,{
 _id: 593,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "324",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F244ST76_43x2.0"
}
,{
 _id: 594,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "380",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F800ST9_23x0.8"
}
,{
 _id: 595,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "380",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F800ST9_23x2.0"
}
,{
 _id: 596,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "380",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F800ST9_23x2.0"
}
,{
 _id: 597,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "380",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "F800ST9_23x2.0"
}
,{
 _id: 598,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "380",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F800ST9_28x2.0"
}
,{
 _id: 599,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "380",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F800ST9_28x0.8"
}
,{
 _id: 600,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "380",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F800ST9_28x2.0"
}
,{
 _id: 601,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "380",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "F800ST9_28x2.0"
}
,{
 _id: 602,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "380",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F800ST9_43x0.8"
}
,{
 _id: 603,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "380",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F800ST9_43x2.0"
}
,{
 _id: 604,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "380",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F800ST9_43x2.0"
}
,{
 _id: 605,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "380",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F800ST9_43x2.0"
}
,{
 _id: 606,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "178",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U708ST9_23x2.0"
}
,{
 _id: 607,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "178",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U708ST9_28x2.0"
}
,{
 _id: 608,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass1",
 in_NeutralColor: "178",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U708ST9_43x2.0"
}
,{
 _id: 609,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "178",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U708ST9_28x2.0"
}
,{
 _id: 610,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "178",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U708ST9_43x2.0"
}
,{
 _id: 611,
 in_Program: "All",
 in_EdgeClass: "CarcaseClass2",
 in_NeutralColor: "178",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U708ST9_23x0.8"
}
,{
 _id: 612,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "178",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U708ST9_28x0.8"
}
,{
 _id: 613,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "178",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U708ST9_43x2.0"
}
,{
 _id: 614,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "178",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U708ST9_23x2.0"
}
,{
 _id: 615,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "178",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "U708ST9_43x0.8"
}
,{
 _id: 616,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "178",
 in_BoardThkMin: 21,
 in_BoardThkMax: 26,
 EdgeObject: "U708ST9_28x2.0"
}
,{
 _id: 617,
 in_Program: "All",
 in_EdgeClass: "FrontClass2",
 in_NeutralColor: "178",
 in_BoardThkMin: 4,
 in_BoardThkMax: 21,
 EdgeObject: "U708ST9_23x2.0"
}
,{
 _id: 618,
 in_Program: "All",
 in_EdgeClass: "FrontClass1",
 in_NeutralColor: "316",
 in_BoardThkMin: 26,
 in_BoardThkMax: 38,
 EdgeObject: "F186ST9_43x2.0"
}
];
