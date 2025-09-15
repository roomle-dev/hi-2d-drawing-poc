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

export interface cti_tab_HingeDrillingDistance {
  readonly in_HingeType? : string;
  readonly in_FrontOverlayMin? : number;
  readonly in_FrontOverlayMax? : number;
  readonly in_DrillingDistanceType? : string;
}

export interface ctm_tab_HingeDrillingDistance {
}

export interface cto_tab_HingeDrillingDistance extends ctm_tab_HingeDrillingDistance {
  readonly _id : number;
  readonly MountingPlateHeight? : string;
  readonly DrillingDistance? : number;
  readonly Application? : string;
}

export interface ICT_tab_HingeDrillingDistance
extends cti_tab_HingeDrillingDistance, cto_tab_HingeDrillingDistance {}

export class ct2_tab_HingeDrillingDistance {

public findExactly(
     in_HingeType: string|undefined,
     in_FrontOverlayMin: number|undefined,
     in_FrontOverlayMax: number|undefined,
     in_DrillingDistanceType: string|undefined,
): cto_tab_HingeDrillingDistance | undefined {
  const res = ct_tab_HingeDrillingDistance.find((p) => 
p.in_HingeType === in_HingeType
 && p.in_FrontOverlayMin === in_FrontOverlayMin
 && p.in_FrontOverlayMax === in_FrontOverlayMax
 && p.in_DrillingDistanceType === in_DrillingDistanceType
);
return res;
}

public find(
predicate: (value: cti_tab_HingeDrillingDistance) => boolean
): cto_tab_HingeDrillingDistance | undefined {
  for (let index = 0; index < ct_tab_HingeDrillingDistance.length; index++){
    const element = ct_tab_HingeDrillingDistance[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HingeDrillingDistance :ICT_tab_HingeDrillingDistance[] = [
{
 _id: 172,
 in_HingeType: "110º",
 in_FrontOverlayMin: 18,
 in_FrontOverlayMax: 21,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "0",
 DrillingDistance: 5,
 Application: "Overlay"
}
,{
 _id: 173,
 in_HingeType: "110º",
 in_FrontOverlayMin: 15,
 in_FrontOverlayMax: 17.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 5,
 Application: "Overlay"
}
,{
 _id: 174,
 in_HingeType: "110º",
 in_FrontOverlayMin: 12,
 in_FrontOverlayMax: 14.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "6",
 DrillingDistance: 5,
 Application: "Overlay"
}
,{
 _id: 175,
 in_HingeType: "110º",
 in_FrontOverlayMin: 9,
 in_FrontOverlayMax: 12,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "0",
 DrillingDistance: 5,
 Application: "HalfOverlay"
}
,{
 _id: 176,
 in_HingeType: "110º",
 in_FrontOverlayMin: 6,
 in_FrontOverlayMax: 8.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 5,
 Application: "HalfOverlay"
}
,{
 _id: 177,
 in_HingeType: "110º",
 in_FrontOverlayMin: 3,
 in_FrontOverlayMax: 5.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "6",
 DrillingDistance: 5,
 Application: "HalfOverlay"
}
,{
 _id: 178,
 in_HingeType: "110º",
 in_FrontOverlayMin: -2,
 in_FrontOverlayMax: 0,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 5,
 Application: "Inset"
}
,{
 _id: 179,
 in_HingeType: "110º",
 in_FrontOverlayMin: -5,
 in_FrontOverlayMax: -2.1,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "6",
 DrillingDistance: 5,
 Application: "Inset"
}
,{
 _id: 180,
 in_HingeType: "165º",
 in_FrontOverlayMin: 18,
 in_FrontOverlayMax: 23,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "0",
 DrillingDistance: 5,
 Application: "Overlay"
}
,{
 _id: 181,
 in_HingeType: "165º",
 in_FrontOverlayMin: 15,
 in_FrontOverlayMax: 17.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 5,
 Application: "Overlay"
}
,{
 _id: 182,
 in_HingeType: "165º",
 in_FrontOverlayMin: 12,
 in_FrontOverlayMax: 14.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "6",
 DrillingDistance: 5,
 Application: "Overlay"
}
,{
 _id: 183,
 in_HingeType: "165º",
 in_FrontOverlayMin: 9,
 in_FrontOverlayMax: 14,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "0",
 DrillingDistance: 5,
 Application: "HalfOverlay"
}
,{
 _id: 184,
 in_HingeType: "165º",
 in_FrontOverlayMin: 6,
 in_FrontOverlayMax: 8.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 5,
 Application: "HalfOverlay"
}
,{
 _id: 185,
 in_HingeType: "165º",
 in_FrontOverlayMin: 3,
 in_FrontOverlayMax: 5.9,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "6",
 DrillingDistance: 5,
 Application: "HalfOverlay"
}
,{
 _id: 186,
 in_HingeType: "165º",
 in_FrontOverlayMin: -2,
 in_FrontOverlayMax: 0,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 5,
 Application: "Inset"
}
,{
 _id: 187,
 in_HingeType: "165º",
 in_FrontOverlayMin: -5,
 in_FrontOverlayMax: -2.1,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "6",
 DrillingDistance: 5,
 Application: "Inset"
}
,{
 _id: 188,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: 18,
 in_FrontOverlayMax: 21,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "0",
 DrillingDistance: 3,
 Application: "Overlay"
}
,{
 _id: 189,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: 15,
 in_FrontOverlayMax: 17.9,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "3",
 DrillingDistance: 3,
 Application: "Overlay"
}
,{
 _id: 190,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: 12,
 in_FrontOverlayMax: 14.9,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "6",
 DrillingDistance: 3,
 Application: "Overlay"
}
,{
 _id: 191,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: 9,
 in_FrontOverlayMax: 12,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "0",
 DrillingDistance: 3,
 Application: "HalfOverlay"
}
,{
 _id: 192,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: 6,
 in_FrontOverlayMax: 8.9,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "3",
 DrillingDistance: 3,
 Application: "HalfOverlay"
}
,{
 _id: 193,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: 3,
 in_FrontOverlayMax: 5.9,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "6",
 DrillingDistance: 3,
 Application: "HalfOverlay"
}
,{
 _id: 194,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: -2,
 in_FrontOverlayMax: 0,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "3",
 DrillingDistance: 3,
 Application: "Inset"
}
,{
 _id: 195,
 in_HingeType: "110ºSoftClose",
 in_FrontOverlayMin: -5,
 in_FrontOverlayMax: -2.1,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "6",
 DrillingDistance: 3,
 Application: "Inset"
}
,{
 _id: 196,
 in_HingeType: "155ºSoftClose",
 in_FrontOverlayMin: 18,
 in_FrontOverlayMax: 24,
 in_DrillingDistanceType: "CalculationBasedMax",
 MountingPlateHeight: "0",
 DrillingDistance: 9,
 Application: "Overlay"
}
,{
 _id: 197,
 in_HingeType: "155ºSoftClose",
 in_FrontOverlayMin: 15,
 in_FrontOverlayMax: 17.9,
 in_DrillingDistanceType: "CalculationBasedMax",
 MountingPlateHeight: "3",
 DrillingDistance: 5.9,
 Application: "Overlay"
}
,{
 _id: 198,
 in_HingeType: "155ºSoftClose",
 in_FrontOverlayMin: 12,
 in_FrontOverlayMax: 14.9,
 in_DrillingDistanceType: "CalculationBasedMax",
 MountingPlateHeight: "6",
 DrillingDistance: 5.9,
 Application: "Overlay"
}
,{
 _id: 199,
 in_HingeType: "155ºSoftClose",
 in_FrontOverlayMin: 9,
 in_FrontOverlayMax: 15,
 in_DrillingDistanceType: "CalculationBasedMax",
 MountingPlateHeight: "0",
 DrillingDistance: 9,
 Application: "HalfOverlay"
}
,{
 _id: 200,
 in_HingeType: "155ºSoftClose",
 in_FrontOverlayMin: 6,
 in_FrontOverlayMax: 8.9,
 in_DrillingDistanceType: "CalculationBasedMax",
 MountingPlateHeight: "3",
 DrillingDistance: 5.9,
 Application: "HalfOverlay"
}
,{
 _id: 201,
 in_HingeType: "155ºSoftClose",
 in_FrontOverlayMin: 3,
 in_FrontOverlayMax: 5.9,
 in_DrillingDistanceType: "CalculationBasedMax",
 MountingPlateHeight: "6",
 DrillingDistance: 5.9,
 Application: "HalfOverlay"
}
,{
 _id: 202,
 in_HingeType: "BlindCornerInset110ºSoftClose",
 in_FrontOverlayMin: -10,
 in_FrontOverlayMax: 1,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "3",
 DrillingDistance: 3,
 Application: "Inset"
}
,{
 _id: 203,
 in_HingeType: "120ºForFHF",
 in_FrontOverlayMin: 14,
 in_FrontOverlayMax: 17,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "0",
 DrillingDistance: 3,
 Application: "Overlay"
}
,{
 _id: 204,
 in_HingeType: "120ºForFHF",
 in_FrontOverlayMin: 11,
 in_FrontOverlayMax: 13.9,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "3",
 DrillingDistance: 3,
 Application: "Overlay"
}
,{
 _id: 205,
 in_HingeType: "120ºForFHF",
 in_FrontOverlayMin: 8,
 in_FrontOverlayMax: 10.9,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "6",
 DrillingDistance: 3,
 Application: "Overlay"
}
,{
 _id: 206,
 in_HingeType: "CenterHingeForFHF",
 in_FrontOverlayMin: -6,
 in_FrontOverlayMax: -3,
 in_DrillingDistanceType: "CalculationBasedMin",
 MountingPlateHeight: "0",
 DrillingDistance: 3,
 Application: "Inset"
}
,{
 _id: 207,
 in_HingeType: "DropDownHinge",
 in_FrontOverlayMin: -5,
 in_FrontOverlayMax: 20,
 in_DrillingDistanceType: "Fixed",
 MountingPlateHeight: "0",
 DrillingDistance: 0,
 Application: "Overlay"
}
];
