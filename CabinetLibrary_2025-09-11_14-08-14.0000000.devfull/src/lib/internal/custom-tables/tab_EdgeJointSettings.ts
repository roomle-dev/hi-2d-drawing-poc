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

export interface cti_tab_EdgeJointSettings {
  readonly in_PartGroup? : string;
  readonly in_EdgeJointType? : string;
}

export interface ctm_tab_EdgeJointSettings {
}

export interface cto_tab_EdgeJointSettings extends ctm_tab_EdgeJointSettings {
  readonly _id : number;
  readonly EdgeJointFrontLeft? : string;
  readonly EdgeJointLeftBack? : string;
  readonly EdgeJointBackRight? : string;
  readonly EdgeJointRightFront? : string;
}

export interface ICT_tab_EdgeJointSettings
extends cti_tab_EdgeJointSettings, cto_tab_EdgeJointSettings {}

export class ct2_tab_EdgeJointSettings {

public findExactly(
     in_PartGroup: string|undefined,
     in_EdgeJointType: string|undefined,
): cto_tab_EdgeJointSettings | undefined {
  const res = ct_tab_EdgeJointSettings.find((p) => 
p.in_PartGroup === in_PartGroup
 && p.in_EdgeJointType === in_EdgeJointType
);
return res;
}

public find(
predicate: (value: cti_tab_EdgeJointSettings) => boolean
): cto_tab_EdgeJointSettings | undefined {
  for (let index = 0; index < ct_tab_EdgeJointSettings.length; index++){
    const element = ct_tab_EdgeJointSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_EdgeJointSettings :ICT_tab_EdgeJointSettings[] = [
{
 _id: 385,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "II",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 386,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "IM",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 387,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "IV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 388,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "MI",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 389,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "MM",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 390,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "MV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 391,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "VI",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 392,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "VM",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 393,
 in_PartGroup: "Backwall",
 in_EdgeJointType: "VV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 394,
 in_PartGroup: "Door",
 in_EdgeJointType: "MMMM",
 EdgeJointFrontLeft: "M",
 EdgeJointLeftBack: "M",
 EdgeJointBackRight: "M",
 EdgeJointRightFront: "M"
}
,{
 _id: 395,
 in_PartGroup: "Door",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 396,
 in_PartGroup: "Door",
 in_EdgeJointType: "IVVV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 397,
 in_PartGroup: "Door",
 in_EdgeJointType: "VIVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 398,
 in_PartGroup: "Door",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 399,
 in_PartGroup: "Door",
 in_EdgeJointType: "VVVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 400,
 in_PartGroup: "Door",
 in_EdgeJointType: "IVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 401,
 in_PartGroup: "Door",
 in_EdgeJointType: "VIVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 402,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "II",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 403,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "IM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 404,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "IV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 405,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "MI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 406,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "MM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 407,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "MV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 408,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "VI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 409,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "VM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 410,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "VV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 411,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "II",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 412,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "IM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 413,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "IV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 414,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "MI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 415,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "MM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 416,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "MV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 417,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "VI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 418,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "VM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 419,
 in_PartGroup: "RailVertical",
 in_EdgeJointType: "VV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 420,
 in_PartGroup: "Sides",
 in_EdgeJointType: "II",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 421,
 in_PartGroup: "Sides",
 in_EdgeJointType: "IM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 422,
 in_PartGroup: "Sides",
 in_EdgeJointType: "IV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 423,
 in_PartGroup: "Sides",
 in_EdgeJointType: "MI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 424,
 in_PartGroup: "Sides",
 in_EdgeJointType: "MM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 425,
 in_PartGroup: "Sides",
 in_EdgeJointType: "MV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 426,
 in_PartGroup: "Sides",
 in_EdgeJointType: "VI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 427,
 in_PartGroup: "Sides",
 in_EdgeJointType: "VM",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 428,
 in_PartGroup: "Sides",
 in_EdgeJointType: "VV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 429,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "MMMM",
 EdgeJointFrontLeft: "M",
 EdgeJointLeftBack: "M",
 EdgeJointBackRight: "M",
 EdgeJointRightFront: "M"
}
,{
 _id: 430,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 431,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "IVVV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 432,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "VIVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 433,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 434,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "VVVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 435,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "IVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 436,
 in_PartGroup: "Drawer",
 in_EdgeJointType: "VIVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 437,
 in_PartGroup: "Shelves",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 438,
 in_PartGroup: "Backsplash",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 439,
 in_PartGroup: "Countertop",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 440,
 in_PartGroup: "Countertop",
 in_EdgeJointType: "VIII",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 441,
 in_PartGroup: "Countertop",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 442,
 in_PartGroup: "Countertop",
 in_EdgeJointType: "VIIV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 443,
 in_PartGroup: "Countertop",
 in_EdgeJointType: "VVII",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S"
}
,{
 _id: 444,
 in_PartGroup: "Finishpanel",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 445,
 in_PartGroup: "Toekick",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 446,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "VIVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 447,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "VVVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 448,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 449,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "VIVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 450,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "IVVV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 451,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 452,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "MMMM",
 EdgeJointFrontLeft: "M",
 EdgeJointLeftBack: "M",
 EdgeJointBackRight: "M",
 EdgeJointRightFront: "M"
}
,{
 _id: 453,
 in_PartGroup: "Fliplift",
 in_EdgeJointType: "IVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 454,
 in_PartGroup: "PanelWoodFrameHor",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 455,
 in_PartGroup: "PanelWoodFrameVert",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 456,
 in_PartGroup: "PanelWoodFrameFilling",
 in_EdgeJointType: "FFFF",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 457,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "IVVV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 458,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "VIVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 459,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 460,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "VVVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 461,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "IVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 462,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "VIVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 463,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "MMMM",
 EdgeJointFrontLeft: "M",
 EdgeJointLeftBack: "M",
 EdgeJointBackRight: "M",
 EdgeJointRightFront: "M"
}
,{
 _id: 464,
 in_PartGroup: "Fixedfront",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 465,
 in_PartGroup: "Filler",
 in_EdgeJointType: "MMMM",
 EdgeJointFrontLeft: "M",
 EdgeJointLeftBack: "M",
 EdgeJointBackRight: "M",
 EdgeJointRightFront: "M"
}
,{
 _id: 466,
 in_PartGroup: "Filler",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 467,
 in_PartGroup: "Filler",
 in_EdgeJointType: "IVVV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 468,
 in_PartGroup: "Filler",
 in_EdgeJointType: "VIVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 469,
 in_PartGroup: "Filler",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 470,
 in_PartGroup: "Filler",
 in_EdgeJointType: "VVVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 471,
 in_PartGroup: "Filler",
 in_EdgeJointType: "IVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 472,
 in_PartGroup: "Filler",
 in_EdgeJointType: "VIVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 473,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "MMMM",
 EdgeJointFrontLeft: "M",
 EdgeJointLeftBack: "M",
 EdgeJointBackRight: "M",
 EdgeJointRightFront: "M"
}
,{
 _id: 474,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "VVVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 475,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "IVVV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 476,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "VIVV",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 477,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "VVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 478,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "VVVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
,{
 _id: 479,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "IVIV",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L"
}
,{
 _id: 480,
 in_PartGroup: "Dishwasher",
 in_EdgeJointType: "VIVI",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S"
}
];
