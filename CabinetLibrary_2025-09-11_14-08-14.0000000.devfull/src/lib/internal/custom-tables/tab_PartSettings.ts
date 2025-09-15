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

export interface cti_tab_PartSettings {
  readonly in_Part? : string;
  readonly in_AdditionalInfo1? : string;
}

export interface ctm_tab_PartSettings {
}

export interface cto_tab_PartSettings extends ctm_tab_PartSettings {
  readonly _id : number;
  readonly BomPartDescription? : string;
  readonly PartGroup? : string;
  readonly OpeningDirection? : string;
  readonly EdgeTypeNecessary? : boolean;
  readonly BomArticleGroup? : string;
}

export interface ICT_tab_PartSettings
extends cti_tab_PartSettings, cto_tab_PartSettings {}

export class ct2_tab_PartSettings {

public findExactly(
     in_Part: string|undefined,
     in_AdditionalInfo1: string|undefined,
): cto_tab_PartSettings | undefined {
  const res = ct_tab_PartSettings.find((p) => 
p.in_Part === in_Part
 && p.in_AdditionalInfo1 === in_AdditionalInfo1
);
return res;
}

public find(
predicate: (value: cti_tab_PartSettings) => boolean
): cto_tab_PartSettings | undefined {
  for (let index = 0; index < ct_tab_PartSettings.length; index++){
    const element = ct_tab_PartSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_PartSettings :ICT_tab_PartSettings[] = [
{
 _id: 1,
 in_Part: "part_Backwall",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Back Panel",
 PartGroup: "Backwall",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 2,
 in_Part: "part_Railhortopback",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Rail Horizontal in Top/Back",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 3,
 in_Part: "part_Railverttopback",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Rail Vertical in Top/Back",
 PartGroup: "RailVertical",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 4,
 in_Part: "part_Railhortopfront",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Rail Horizontal in Top/Front",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 5,
 in_Part: "part_Railverttopfront",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Rail Vertical in Top/Front",
 PartGroup: "RailVertical",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 6,
 in_Part: "part_ShelfadjGlass",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Adjustable Shelf",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 7,
 in_Part: "part_Shelftop",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Top Shelf",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 8,
 in_Part: "part_Shelfbtm",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Bottom Shelf",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 9,
 in_Part: "part_Shelffixed",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Fixed Shelf",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 10,
 in_Part: "part_Sidepanelleft",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Left Side Panel",
 PartGroup: "Sides",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 11,
 in_Part: "part_Sidepanelright",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Right Side Panel",
 PartGroup: "Sides",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 12,
 in_Part: "part_Sidepanelmiddle",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Middle Side Panel",
 PartGroup: "Sides",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 13,
 in_Part: "part_Drawer",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Drawer",
 PartGroup: "Drawer",
 OpeningDirection: "Front",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 14,
 in_Part: "part_Leg",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Leg",
 PartGroup: "Legs",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 15,
 in_Part: "part_Handle",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Handle",
 PartGroup: "Handle",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 16,
 in_Part: "part_Handlestrip",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Handlestrip",
 PartGroup: "Handle",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 17,
 in_Part: "part_ShelfadjFitting",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Fittings adjustable shelf",
 PartGroup: "Adjustable shelf fittings",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 18,
 in_Part: "part_HingeDoor",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Hinge",
 PartGroup: "Hinge",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 19,
 in_Part: "part_HingeCarcase",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Mounting Plate",
 PartGroup: "Hinge",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 20,
 in_Part: "part_ShelfadjWood",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Adjustable shelf",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 21,
 in_Part: "part_HangerSystem",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Hanger System",
 PartGroup: "Hangers",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 22,
 in_Part: "part_RackAreaUnit",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Rack Area Unit",
 PartGroup: "RackArea",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Carcase"
}
,{
 _id: 23,
 in_Part: "part_DrawerShelfbtm",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Bottom shelf of drawer box",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 24,
 in_Part: "part_DrawerBackwallWood",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Wooden backwall of drawer box",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 25,
 in_Part: "part_Duststrip",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Dust strip",
 PartGroup: "Dust strip",
 OpeningDirection: "None",
 EdgeTypeNecessary: undefined,
 BomArticleGroup: "Fitting"
}
,{
 _id: 26,
 in_Part: "part_Backsplash",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Backsplash",
 PartGroup: "Backsplash",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "AdditionalParts"
}
,{
 _id: 27,
 in_Part: "part_Countertop",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Countertop",
 PartGroup: "Countertop",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Countertop"
}
,{
 _id: 28,
 in_Part: "part_FinishPanel",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Finishpanel",
 PartGroup: "Finishpanel",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "AdditionalParts"
}
,{
 _id: 29,
 in_Part: "part_Toekick",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Toekick",
 PartGroup: "Toekick",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Toekick"
}
,{
 _id: 30,
 in_Part: "part_CleatVert",
 in_AdditionalInfo1: "All",
 BomPartDescription: "CleatVert",
 PartGroup: "Vertical Divider",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 31,
 in_Part: "part_PushToOpen",
 in_AdditionalInfo1: "All",
 BomPartDescription: "PushToOpen",
 PartGroup: "PushToOpen",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Fitting"
}
,{
 _id: 32,
 in_Part: "part_DrawerPanelWoodFrame",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Drawer",
 PartGroup: "Drawer",
 OpeningDirection: "Front",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 33,
 in_Part: "part_PanelWoodFrameBtm",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Horizontal panels for wood frame",
 PartGroup: "PanelWoodFrameHor",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 34,
 in_Part: "part_PanelWoodFrameTop",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Horizontal panels for wood frame",
 PartGroup: "PanelWoodFrameHor",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 35,
 in_Part: "part_PanelWoodFrameLeft",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Vertical panels for wood frame",
 PartGroup: "PanelWoodFrameVert",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 36,
 in_Part: "part_PanelWoodFrameRight",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Vertical panels for wood frame",
 PartGroup: "PanelWoodFrameVert",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 37,
 in_Part: "part_PanelWoodFrameFilling",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Filling for panel wood frames",
 PartGroup: "PanelWoodFrameFilling",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 38,
 in_Part: "part_Door",
 in_AdditionalInfo1: "Left",
 BomPartDescription: "Left Door",
 PartGroup: "Door",
 OpeningDirection: "Left",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 39,
 in_Part: "part_Door",
 in_AdditionalInfo1: "Right",
 BomPartDescription: "Right Door",
 PartGroup: "Door",
 OpeningDirection: "Right",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 40,
 in_Part: "part_DoorPanelWoodFrame",
 in_AdditionalInfo1: "Left",
 BomPartDescription: "Left Door Panel Wood Frame",
 PartGroup: "Door",
 OpeningDirection: "Left",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 41,
 in_Part: "part_DoorPanelWoodFrame",
 in_AdditionalInfo1: "Right",
 BomPartDescription: "Right Door Panel Wood Frame",
 PartGroup: "Door",
 OpeningDirection: "Right",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 42,
 in_Part: "part_Fliplift",
 in_AdditionalInfo1: "SHF",
 BomPartDescription: "Swing high flip lift",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 43,
 in_Part: "part_Fliplift",
 in_AdditionalInfo1: "FHF",
 BomPartDescription: "Folding high flip lift",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 44,
 in_Part: "part_Fliplift",
 in_AdditionalInfo1: "LHF",
 BomPartDescription: "High flip lift",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 45,
 in_Part: "part_Fliplift",
 in_AdditionalInfo1: "UF",
 BomPartDescription: "Upwards opening flap",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 46,
 in_Part: "part_Fliplift",
 in_AdditionalInfo1: "DF",
 BomPartDescription: "Downwards opening flap",
 PartGroup: "Fliplift",
 OpeningDirection: "Down",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 47,
 in_Part: "part_FlipliftPanelWoodFrame",
 in_AdditionalInfo1: "SHF",
 BomPartDescription: "Swing high flip lift wood frame",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 48,
 in_Part: "part_FlipliftPanelWoodFrame",
 in_AdditionalInfo1: "FHF",
 BomPartDescription: "Folding high flip lift wood frame",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 49,
 in_Part: "part_FlipliftPanelWoodFrame",
 in_AdditionalInfo1: "LHF",
 BomPartDescription: "High flip lift wood frame",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 50,
 in_Part: "part_FlipliftPanelWoodFrame",
 in_AdditionalInfo1: "UF",
 BomPartDescription: "Upwards opening flap wood frame",
 PartGroup: "Fliplift",
 OpeningDirection: "Up",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 51,
 in_Part: "part_FlipliftPanelWoodFrame",
 in_AdditionalInfo1: "DF",
 BomPartDescription: "Downwards opening flap wood frame",
 PartGroup: "Fliplift",
 OpeningDirection: "Down",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 52,
 in_Part: "part_Fixedfront",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Fixedfront",
 PartGroup: "Fixedfront",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 53,
 in_Part: "part_FixedfrontPanelWoodFrame",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Fixedfront",
 PartGroup: "Fixedfront",
 OpeningDirection: "Front",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 54,
 in_Part: "part_Heatshelf",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Heatshelf",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 55,
 in_Part: "part_HeatshelfFront",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Heatshelf front",
 PartGroup: "RailVertical",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 56,
 in_Part: "part_Panelblind",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Blind panel",
 PartGroup: "RailVertical",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 57,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Sloped Ceiling Top Shelf Horizontal",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 58,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Sloped Ceiling Top Shelf Angled",
 PartGroup: "Shelves",
 OpeningDirection: "None",
 EdgeTypeNecessary: true,
 BomArticleGroup: "Carcase"
}
,{
 _id: 59,
 in_Part: "part_Filler",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Filler front",
 PartGroup: "Filler",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 60,
 in_Part: "part_DishwasherPanel",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Dish washer panel",
 PartGroup: "Dishwasher",
 OpeningDirection: "Down",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 61,
 in_Part: "part_DishwasherPanelWoodFrame",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Dish washer panel wood frame",
 PartGroup: "Dishwasher",
 OpeningDirection: "Down",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Front"
}
,{
 _id: 62,
 in_Part: "part_Paneltop",
 in_AdditionalInfo1: "All",
 BomPartDescription: "Paneltop",
 PartGroup: "Paneltop",
 OpeningDirection: "None",
 EdgeTypeNecessary: false,
 BomArticleGroup: "Countertop"
}
];
