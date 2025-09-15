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

export interface cti_tab_PushtoopenSettings {
  readonly in_TypeElement? : string;
  readonly in_FrontType? : string;
  readonly in_FrontDesign? : string;
  readonly in_FrontOpeningDirection? : string;
  readonly in_PushToOpenLine? : string;
  readonly in_PushToOpenPosition? : string;
  readonly in_PushToOpenType? : string;
}

export interface ctm_tab_PushtoopenSettings {
}

export interface cto_tab_PushtoopenSettings extends ctm_tab_PushtoopenSettings {
  readonly _id : number;
  readonly Priority : number;
  readonly Position? : string;
  readonly Type? : string;
  readonly Offset? : number;
}

export interface ICT_tab_PushtoopenSettings
extends cti_tab_PushtoopenSettings, cto_tab_PushtoopenSettings {}

export class ct2_tab_PushtoopenSettings {

public findExactly(
     in_TypeElement: string|undefined,
     in_FrontType: string|undefined,
     in_FrontDesign: string|undefined,
     in_FrontOpeningDirection: string|undefined,
     in_PushToOpenLine: string|undefined,
     in_PushToOpenPosition: string|undefined,
     in_PushToOpenType: string|undefined,
): cto_tab_PushtoopenSettings | undefined {
  const res = ct_tab_PushtoopenSettings.find((p) => 
p.in_TypeElement === in_TypeElement
 && p.in_FrontType === in_FrontType
 && p.in_FrontDesign === in_FrontDesign
 && p.in_FrontOpeningDirection === in_FrontOpeningDirection
 && p.in_PushToOpenLine === in_PushToOpenLine
 && p.in_PushToOpenPosition === in_PushToOpenPosition
 && p.in_PushToOpenType === in_PushToOpenType
);
return res;
}

public find(
predicate: (value: cti_tab_PushtoopenSettings) => boolean
): cto_tab_PushtoopenSettings | undefined {
  for (let index = 0; index < ct_tab_PushtoopenSettings.length; index++){
    const element = ct_tab_PushtoopenSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_PushtoopenSettings :ICT_tab_PushtoopenSettings[] = [
{
 _id: 75,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 76,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 77,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 78,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 79,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 80,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 81,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 7,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 82,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 8,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 83,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 9,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 84,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 85,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 86,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 87,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 88,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 89,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 90,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 7,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 91,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 8,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 92,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 9,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 93,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 94,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 95,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 96,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 97,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 98,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 99,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 7,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 100,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 8,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 101,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 9,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 102,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 103,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 104,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 105,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 106,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 107,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 108,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 109,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 110,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 111,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 112,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 113,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 114,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Top",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 115,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Top",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 116,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Top",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 117,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Top",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 118,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Top",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 119,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Top",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 120,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 121,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 2,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 122,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 3,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 123,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 124,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 2,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 125,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 3,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 126,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 127,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 2,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 128,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 129,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 130,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 131,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 3,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 132,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 133,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 134,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 3,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 135,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 136,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 2,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 137,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 138,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 139,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 2,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 140,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledCenter",
 Priority: 3,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 50
}
,{
 _id: 141,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 142,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 2,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 143,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 3,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 50
}
,{
 _id: 144,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 50
}
,{
 _id: 145,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 2,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 146,
 in_TypeElement: "All",
 in_FrontType: "Doors",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 3,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 147,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 148,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 149,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 150,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 151,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 152,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 153,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 154,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 155,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 156,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 157,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 158,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 159,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 160,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 161,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 162,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 163,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 164,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 165,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 166,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 167,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 168,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Bottom",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 169,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 170,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Bottom",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 171,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 172,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 173,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 174,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 175,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 176,
 in_TypeElement: "All",
 in_FrontType: "UF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 177,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 178,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 179,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 180,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 181,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 182,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Above",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 183,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 184,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 185,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 186,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 187,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 188,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "AtTheLine",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 189,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 190,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 191,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 192,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 4,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 193,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 5,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 194,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "Bellow",
 in_PushToOpenPosition: "Automatic",
 in_PushToOpenType: "Automatic",
 Priority: 6,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 195,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 196,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 197,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 198,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Top",
 Type: "WithAdapterHousing",
 Offset: 0
}
,{
 _id: 199,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Top",
 Type: "DrilledAdjustable",
 Offset: 0
}
,{
 _id: 200,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Bottom",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Top",
 Type: "DrilledCenter",
 Offset: 0
}
,{
 _id: 201,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 202,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 2,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 203,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "Automatic",
 Priority: 3,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
,{
 _id: 204,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "DrilledCenter",
 Priority: 1,
 Position: "Side",
 Type: "DrilledCenter",
 Offset: 30
}
,{
 _id: 205,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "DrilledAdjustable",
 Priority: 1,
 Position: "Side",
 Type: "DrilledAdjustable",
 Offset: 30
}
,{
 _id: 206,
 in_TypeElement: "All",
 in_FrontType: "DF",
 in_FrontDesign: "All",
 in_FrontOpeningDirection: "All",
 in_PushToOpenLine: "All",
 in_PushToOpenPosition: "Side",
 in_PushToOpenType: "WithAdapterHousing",
 Priority: 1,
 Position: "Side",
 Type: "WithAdapterHousing",
 Offset: 30
}
];
