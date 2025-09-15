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

export interface cti_tab_EdgeSettings {
  readonly in_TypeElement? : string;
  readonly in_Part? : string;
  readonly in_EdgeTypeFront? : string;
  readonly in_EdgeTypeLeft? : string;
  readonly in_EdgeTypeBack? : string;
  readonly in_EdgeTypeRight? : string;
}

export interface ctm_tab_EdgeSettings {
}

export interface cto_tab_EdgeSettings extends ctm_tab_EdgeSettings {
  readonly _id : number;
  readonly EdgeClassFront? : string;
  readonly EdgeClassLeft? : string;
  readonly EdgeClassBack? : string;
  readonly EdgeClassRight? : string;
  readonly EdgeJointType? : string;
}

export interface ICT_tab_EdgeSettings
extends cti_tab_EdgeSettings, cto_tab_EdgeSettings {}

export class ct2_tab_EdgeSettings {

public findExactly(
     in_TypeElement: string|undefined,
     in_Part: string|undefined,
     in_EdgeTypeFront: string|undefined,
     in_EdgeTypeLeft: string|undefined,
     in_EdgeTypeBack: string|undefined,
     in_EdgeTypeRight: string|undefined,
): cto_tab_EdgeSettings | undefined {
  const res = ct_tab_EdgeSettings.find((p) => 
p.in_TypeElement === in_TypeElement
 && p.in_Part === in_Part
 && p.in_EdgeTypeFront === in_EdgeTypeFront
 && p.in_EdgeTypeLeft === in_EdgeTypeLeft
 && p.in_EdgeTypeBack === in_EdgeTypeBack
 && p.in_EdgeTypeRight === in_EdgeTypeRight
);
return res;
}

public find(
predicate: (value: cti_tab_EdgeSettings) => boolean
): cto_tab_EdgeSettings | undefined {
  for (let index = 0; index < ct_tab_EdgeSettings.length; index++){
    const element = ct_tab_EdgeSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_EdgeSettings :ICT_tab_EdgeSettings[] = [
{
 _id: 1,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelleft",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 2,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelleft",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "SPB",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 3,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelleft",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 4,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelleft",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "MIT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass1",
 EdgeJointType: "LSLS"
}
,{
 _id: 5,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelleft",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "SPB",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 6,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelleft",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPT",
 in_EdgeTypeBack: "DOW",
 in_EdgeTypeRight: "SPB",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass3",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 7,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "MIT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "SPT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass1",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 8,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "MIT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "MIT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass1",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass1",
 EdgeJointType: "LSLS"
}
,{
 _id: 9,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 10,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "SPT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 11,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPB",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 12,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "MIT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass1",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 13,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPB",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "SPT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 14,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPB",
 in_EdgeTypeBack: "DOW",
 in_EdgeTypeRight: "SPT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass3",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 15,
 in_TypeElement: "All",
 in_Part: "part_Sidepanelright",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "SPB",
 in_EdgeTypeBack: "DOW",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass3",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 16,
 in_TypeElement: "All",
 in_Part: " part_Shelftop",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 17,
 in_TypeElement: "All",
 in_Part: " part_Shelftop",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "MIT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass1",
 EdgeJointType: "LSLS"
}
,{
 _id: 18,
 in_TypeElement: "All",
 in_Part: " part_Shelftop",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "CLR",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 19,
 in_TypeElement: "All",
 in_Part: " part_Shelftop",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "CLR",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "CLR",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 20,
 in_TypeElement: "All",
 in_Part: " part_Shelftop",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "CLR",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 21,
 in_TypeElement: "All",
 in_Part: " part_Shelftop",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "DOW",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass3",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 22,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "MIT",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "MIT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass1",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass1",
 EdgeJointType: "LSLS"
}
,{
 _id: 23,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "CLR",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "MIT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass1",
 EdgeJointType: "LSLS"
}
,{
 _id: 24,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "CLR",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "CLR",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 25,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "CLR",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass2",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 26,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "CLR",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass2",
 EdgeJointType: "LSLS"
}
,{
 _id: 27,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 28,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "DOW",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass3",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 29,
 in_TypeElement: "All",
 in_Part: " part_Shelfbtm",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "MIT",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass1",
 EdgeJointType: "LSLS"
}
,{
 _id: 30,
 in_TypeElement: "All",
 in_Part: " part_Railverttopfront",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 31,
 in_TypeElement: "All",
 in_Part: " part_Railverttopback",
 in_EdgeTypeFront: "CBE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass2",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 32,
 in_TypeElement: "All",
 in_Part: " part_Railhortopfront",
 in_EdgeTypeFront: "CFE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass1",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 33,
 in_TypeElement: "All",
 in_Part: " part_Railhortopback",
 in_EdgeTypeFront: "CBE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "DOW",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass2",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass3",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
,{
 _id: 34,
 in_TypeElement: "All",
 in_Part: " part_Railhortopback",
 in_EdgeTypeFront: "CBE",
 in_EdgeTypeLeft: "DOW",
 in_EdgeTypeBack: "CBE",
 in_EdgeTypeRight: "DOW",
 EdgeClassFront: "CarcaseClass2",
 EdgeClassLeft: "CarcaseClass3",
 EdgeClassBack: "CarcaseClass2",
 EdgeClassRight: "CarcaseClass3",
 EdgeJointType: "LSLS"
}
];
