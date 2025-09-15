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

export interface cti_tab_GrainDirectionSettings {
  readonly in_PartId? : string;
  readonly in_TypeElement? : string;
  readonly in_ProgramGroupId? : string;
  readonly in_ColorGroupId? : string;
  readonly in_LengthMin : number;
  readonly in_LengthMax : number;
  readonly in_WidthMin : number;
  readonly in_WidthMax : number;
}

export interface ctm_tab_GrainDirectionSettings {
}

export interface cto_tab_GrainDirectionSettings extends ctm_tab_GrainDirectionSettings {
  readonly _id : number;
  readonly GrainDirection? : string;
}

export interface ICT_tab_GrainDirectionSettings
extends cti_tab_GrainDirectionSettings, cto_tab_GrainDirectionSettings {}

export class ct2_tab_GrainDirectionSettings {

public findExactly(
     in_PartId: string|undefined,
     in_TypeElement: string|undefined,
     in_ProgramGroupId: string|undefined,
     in_ColorGroupId: string|undefined,
     in_LengthMin: number,
     in_LengthMax: number,
     in_WidthMin: number,
     in_WidthMax: number,
): cto_tab_GrainDirectionSettings | undefined {
  const res = ct_tab_GrainDirectionSettings.find((p) => 
p.in_PartId === in_PartId
 && p.in_TypeElement === in_TypeElement
 && p.in_ProgramGroupId === in_ProgramGroupId
 && p.in_ColorGroupId === in_ColorGroupId
 && p.in_LengthMin === in_LengthMin
 && p.in_LengthMax === in_LengthMax
 && p.in_WidthMin === in_WidthMin
 && p.in_WidthMax === in_WidthMax
);
return res;
}

public find(
predicate: (value: cti_tab_GrainDirectionSettings) => boolean
): cto_tab_GrainDirectionSettings | undefined {
  for (let index = 0; index < ct_tab_GrainDirectionSettings.length; index++){
    const element = ct_tab_GrainDirectionSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_GrainDirectionSettings :ICT_tab_GrainDirectionSettings[] = [
{
 _id: 849,
 in_PartId: "part_Heatshelf",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 850,
 in_PartId: "part_Backwall",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 851,
 in_PartId: "part_Backwall",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 852,
 in_PartId: "part_Railhortopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 853,
 in_PartId: "part_Railhortopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 854,
 in_PartId: "part_Railhortopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 855,
 in_PartId: "part_Shelftop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 856,
 in_PartId: "part_Shelftop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 857,
 in_PartId: "part_Shelftop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 858,
 in_PartId: "part_Toekick",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 859,
 in_PartId: "part_Toekick",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 860,
 in_PartId: "part_Railverttopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 861,
 in_PartId: "part_Railverttopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 862,
 in_PartId: "part_Railverttopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 863,
 in_PartId: "part_Railverttopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 864,
 in_PartId: "part_Railverttopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 865,
 in_PartId: "part_Railverttopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 866,
 in_PartId: "part_Railverttopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 867,
 in_PartId: "part_Sidepanelleft",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 868,
 in_PartId: "part_Sidepanelleft",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 869,
 in_PartId: "part_Sidepanelmiddle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 870,
 in_PartId: "part_Shelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 871,
 in_PartId: "part_Shelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 872,
 in_PartId: "part_Shelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 873,
 in_PartId: "part_Sidepanelleft",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 874,
 in_PartId: "part_Shelftop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 875,
 in_PartId: "part_Sidepanelleft",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 876,
 in_PartId: "part_Sidepanelmiddle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 877,
 in_PartId: "part_Sidepanelmiddle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 878,
 in_PartId: "part_Sidepanelmiddle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 879,
 in_PartId: "part_Sidepanelright",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 880,
 in_PartId: "part_Sidepanelright",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 881,
 in_PartId: "part_Sidepanelright",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 882,
 in_PartId: "part_Sidepanelright",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 883,
 in_PartId: "part_Railhortopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 884,
 in_PartId: "part_Railhortopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 885,
 in_PartId: "part_Railhortopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 886,
 in_PartId: "part_Railhortopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 887,
 in_PartId: "part_SlopedCeilingShelftopAngle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 888,
 in_PartId: "part_SlopedCeilingShelftopAngle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 889,
 in_PartId: "part_SlopedCeilingShelftopHor",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 890,
 in_PartId: "part_SlopedCeilingShelftopHor",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 891,
 in_PartId: "part_SlopedCeilingShelftopHor",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 892,
 in_PartId: "part_SlopedCeilingShelftopHor",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 893,
 in_PartId: "part_SlopedCeilingShelftopAngle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 894,
 in_PartId: "part_SlopedCeilingShelftopAngle",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 895,
 in_PartId: "part_Railverttopfront",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 896,
 in_PartId: "part_ShelfadjWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 897,
 in_PartId: "part_ShelfadjWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 898,
 in_PartId: "part_Shelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 899,
 in_PartId: "part_Railhortopback",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 900,
 in_PartId: "part_Backwall",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 901,
 in_PartId: "part_Backwall",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 902,
 in_PartId: "part_ShelfadjWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 903,
 in_PartId: "part_ShelfadjWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 904,
 in_PartId: "part_Toekick",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 905,
 in_PartId: "part_Toekick",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 906,
 in_PartId: "part_CleatVert",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 907,
 in_PartId: "part_CleatVert",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 908,
 in_PartId: "part_CleatVert",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 909,
 in_PartId: "part_CleatVert",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 910,
 in_PartId: "part_Countertop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 911,
 in_PartId: "part_Countertop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 912,
 in_PartId: "part_Countertop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 913,
 in_PartId: "part_Countertop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 914,
 in_PartId: "part_Heatshelf",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 915,
 in_PartId: "part_Heatshelf",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 916,
 in_PartId: "part_Heatshelf",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 917,
 in_PartId: "part_Paneltop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 918,
 in_PartId: "part_Paneltop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 919,
 in_PartId: "part_Paneltop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 920,
 in_PartId: "part_Paneltop",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 921,
 in_PartId: "part_ShelfadjGlass",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 922,
 in_PartId: "part_ShelfadjGlass",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 923,
 in_PartId: "part_ShelfadjGlass",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 924,
 in_PartId: "part_ShelfadjGlass",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 925,
 in_PartId: "part_Shelffixed",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 926,
 in_PartId: "part_Shelffixed",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 927,
 in_PartId: "part_Shelffixed",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 928,
 in_PartId: "part_Shelffixed",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 929,
 in_PartId: "part_DrawerShelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 930,
 in_PartId: "part_DrawerShelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 931,
 in_PartId: "part_DrawerShelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 932,
 in_PartId: "part_DrawerShelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 933,
 in_PartId: "part_DrawerBackwallWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Lengthwise"
}
,{
 _id: 934,
 in_PartId: "part_DrawerBackwallWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 935,
 in_PartId: "part_DrawerBackwallWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Neutral",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 936,
 in_PartId: "part_DrawerBackwallWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "Grain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "Crosswise"
}
,{
 _id: 937,
 in_PartId: "part_DrawerShelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 938,
 in_PartId: "part_DrawerShelfbtm",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 939,
 in_PartId: "part_DrawerBackwallWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Horizontal",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
,{
 _id: 940,
 in_PartId: "part_DrawerBackwallWood",
 in_TypeElement: "All",
 in_ProgramGroupId: "Vertical",
 in_ColorGroupId: "NoGrain",
 in_LengthMin: 0,
 in_LengthMax: 9999,
 in_WidthMin: 0,
 in_WidthMax: 9999,
 GrainDirection: "None"
}
];
