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

export interface cti_tab_ErrorList {
  readonly in_ErrorId? : string;
}

export interface ctm_tab_ErrorList {
}

export interface cto_tab_ErrorList extends ctm_tab_ErrorList {
  readonly _id : number;
  Message(Text:string):string;
  readonly ScriptSource? : string;
}

export interface ICT_tab_ErrorList
extends cti_tab_ErrorList, cto_tab_ErrorList {}

export class ct2_tab_ErrorList {

public findExactly(
     in_ErrorId: string|undefined,
): cto_tab_ErrorList | undefined {
  const res = ct_tab_ErrorList.find((p) => 
p.in_ErrorId === in_ErrorId
);
return res;
}

public find(
predicate: (value: cti_tab_ErrorList) => boolean
): cto_tab_ErrorList | undefined {
  for (let index = 0; index < ct_tab_ErrorList.length; index++){
    const element = ct_tab_ErrorList[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_ErrorList :ICT_tab_ErrorList[] = [
{
 _id: 5576,
 in_ErrorId: "Error 11001",
  Message(Text:string):string {
    return 'Error 11001: Could not find entry in tab_CarcaseBackwallConstruction  for input values: ' + Text ;
  }
,
 ScriptSource: "find_BackwallConstruction"
}
,{
 _id: 5577,
 in_ErrorId: "Error 11002",
  Message(Text:string):string {
    return 'Error 11002: Could not find entry in tab_HandleConstruction for Fronttype for input values: ' + Text ;
  }
,
 ScriptSource: "find_HandleConstruction"
}
,{
 _id: 5578,
 in_ErrorId: "Error 11004",
  Message(Text:string):string {
    return 'Error 11004: Could not find entry in tab_CarcaseStorageunitConstruction for input values :' + Text ;
  }
,
 ScriptSource: "find_StorageunitConstruction"
}
,{
 _id: 5579,
 in_ErrorId: "Error 11005",
  Message(Text:string):string {
    return 'Error 11005: Could not find entry in tab_PlinthAreaConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "find_PlinthAreaConstruction"
}
,{
 _id: 5580,
 in_ErrorId: "Error 11006",
  Message(Text:string):string {
    return 'Error 11006: Could not find entry in tab_FrontConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "find_FrontConstruction"
}
,{
 _id: 5581,
 in_ErrorId: "Error 11003",
  Message(Text:string):string {
    return 'Error 11003: Could not find entry in tab_CornerunitStraightConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "find_CornerunitStraightConstruction"
}
,{
 _id: 5582,
 in_ErrorId: "Error 15002",
  Message(Text:string):string {
    return 'Error 15002: Could not find entry in tab_HingePosition for input values: ' + Text ;
  }
,
 ScriptSource: "find_HingePosition"
}
,{
 _id: 5583,
 in_ErrorId: "Error 15003",
  Message(Text:string):string {
    return 'Error 15003: Could not find entry in tab_HingeDrillingDistance for input values: ' + Text ;
  }
,
 ScriptSource: "find_HingeDrillingDistance"
}
,{
 _id: 5584,
 in_ErrorId: "Error 12001",
  Message(Text:string):string {
    return 'Error 12001: Could not find entry in tab_BoardLibrary for input values: ' + Text ;
  }
,
 ScriptSource: "find_BoardLibrary"
}
,{
 _id: 5585,
 in_ErrorId: "Error 12002",
  Message(Text:string):string {
    return 'Error 12002: Could not find entry in tab_HardwareLibrary for input values: ' + Text ;
  }
,
 ScriptSource: "find_HardwareLibrary"
}
,{
 _id: 5586,
 in_ErrorId: "Error 12003",
  Message(Text:string):string {
    return 'Error 12003: Could not find entry in tab_EdgeLibrary for input values: ' + Text ;
  }
,
 ScriptSource: "find_EdgeLibrary"
}
,{
 _id: 5587,
 in_ErrorId: "Error 12004",
  Message(Text:string):string {
    return 'Error 12004: Could not create the graphic data which should be stored in tab_GraphicLibrary and tab_GraphicFileLibrary for input values: ' + Text ;
  }
,
 ScriptSource: "process_GraphicLibraryData"
}
,{
 _id: 5588,
 in_ErrorId: "Error 13001",
  Message(Text:string):string {
    return 'Error 13001: Could not find entry in tab_BoardMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_BoardMapping"
}
,{
 _id: 5589,
 in_ErrorId: "Error 13002",
  Message(Text:string):string {
    return 'Error 13002: Could not find entry in tab_EdgeMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_EdgeMapping"
}
,{
 _id: 5590,
 in_ErrorId: "Error 13003",
  Message(Text:string):string {
    return 'Error 13003: Could not find entry in tab_HandleMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HandleMapping"
}
,{
 _id: 5591,
 in_ErrorId: "Error 13004",
  Message(Text:string):string {
    return 'Error 13004: Could not find entry in tab_HandleLengthMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HandleLengthMapping"
}
,{
 _id: 5592,
 in_ErrorId: "Error 13005",
  Message(Text:string):string {
    return 'Error 13005: Could not find entry in tab_HangerMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HangerMapping"
}
,{
 _id: 5593,
 in_ErrorId: "Error 11007",
  Message(Text:string):string {
    return 'Error 11007: Could not find entry in tab_DrawerBoxConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "find_DrawerBoxConstruction"
}
,{
 _id: 5594,
 in_ErrorId: "Error 13007",
  Message(Text:string):string {
    return 'Error 13007: Could not find entry in tab_PlinthAreaMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_PlinthAreaMapping"
}
,{
 _id: 5595,
 in_ErrorId: "Error 13011",
  Message(Text:string):string {
    return 'Error 13011: Could not find entry in tab_GraphicLibraryMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_GraphicLibraryMapping"
}
,{
 _id: 5596,
 in_ErrorId: "Error 13012",
  Message(Text:string):string {
    return 'Error 13012: Could not find entry in tab_ProcessingMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_ProcessingMapping"
}
,{
 _id: 5597,
 in_ErrorId: "Error 13013",
  Message(Text:string):string {
    return 'Error 13013: Could not find entry in tab_HardwareLibraryMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HardwareLibraryMapping"
}
,{
 _id: 5598,
 in_ErrorId: "Error 13014",
  Message(Text:string):string {
    return 'Error 13014: Could not find entry in tab_HingeMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HingeMapping"
}
,{
 _id: 5599,
 in_ErrorId: "Error 13010",
  Message(Text:string):string {
    return 'Error 13010: Could not find entry in tab_CarcasePartConnectionMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcasePartConnectionMapping"
}
,{
 _id: 5600,
 in_ErrorId: "Error 14006",
  Message(Text:string):string {
    return 'Error 14006: Could not find entry in tab_CarcasePartConnectionSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcasePartConnectionSettings"
}
,{
 _id: 5601,
 in_ErrorId: "Error 13009",
  Message(Text:string):string {
    return 'Error 13009: Could not find entry in tab_DrawerBoxColorMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_DrawerBoxColorMapping"
}
,{
 _id: 5602,
 in_ErrorId: "Error 14005",
  Message(Text:string):string {
    return 'Error 14005: Could not find entry in tab_DrawerBoxWeightTypeSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_DrawerBoxWeightTypeSettings"
}
,{
 _id: 5603,
 in_ErrorId: "Error 13006",
  Message(Text:string):string {
    return 'Error 13006: Could not find entry in tab_DrawerBoxMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_DrawerBoxMapping"
}
,{
 _id: 5604,
 in_ErrorId: "Error 14004",
  Message(Text:string):string {
    return 'Error 14004: Could not find entry in tab_DrawerBoxInsertionSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_DrawerBoxInsertionSettings"
}
,{
 _id: 5605,
 in_ErrorId: "Error 14001",
  Message(Text:string):string {
    return 'Error 14001: Could not find entry in tab_HandleSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_HandleSettings"
}
,{
 _id: 5606,
 in_ErrorId: "Error 14002",
  Message(Text:string):string {
    return 'Error 14002: Could not find entry in tab_EdgeClassSettings for input value: ' + Text ;
  }
,
 ScriptSource: "find_EdgeClassSettings"
}
,{
 _id: 5607,
 in_ErrorId: "Error 14003",
  Message(Text:string):string {
    return 'Error 14003: Could not find entry in tab_PartSettings for input value: ' + Text ;
  }
,
 ScriptSource: "find_PartSettings"
}
,{
 _id: 5608,
 in_ErrorId: "Error 15004",
  Message(Text:string):string {
    return 'Error 15004: Could not find entry in tab_PartsGraphicRotation for input values: ' + Text ;
  }
,
 ScriptSource: "find_PartsGraphicRotation"
}
,{
 _id: 5609,
 in_ErrorId: "Error 15005",
  Message(Text:string):string {
    return 'FREE' + Text ;
  }
,
 ScriptSource: "FREE"
}
,{
 _id: 5610,
 in_ErrorId: "Error 15006",
  Message(Text:string):string {
    return 'Error 15006: Could not find entry in tab_GrainSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_GrainDirection"
}
,{
 _id: 5611,
 in_ErrorId: "Error 14007",
  Message(Text:string):string {
    return 'Error 14007: Could not find entry in tab_EdgeNumberSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_EdgeNumberSettings"
}
,{
 _id: 5612,
 in_ErrorId: "Error 14008",
  Message(Text:string):string {
    return 'Error 14008: Could not find entry in tab_HardwareSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_HardwareSettings"
}
,{
 _id: 5613,
 in_ErrorId: "Error 14009",
  Message(Text:string):string {
    return 'Error 14009: Could not find entry in tab_CarcaseBackwallSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_BackwallSettings"
}
,{
 _id: 5614,
 in_ErrorId: "Error 14010",
  Message(Text:string):string {
    return 'Error 14010: Could not find entry in tab_HangerSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_HangerSettings"
}
,{
 _id: 5615,
 in_ErrorId: "Error 14011",
  Message(Text:string):string {
    return 'Error 14011: Could not find entry in tab_PlinthAreaSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_PlinthAreaSettings"
}
,{
 _id: 5616,
 in_ErrorId: "Error 14012",
  Message(Text:string):string {
    return 'Error 14012: Could not find entry in tab_ShelfadjQtyPosSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_ShelfadjQtyPosSettings"
}
,{
 _id: 5617,
 in_ErrorId: "Error 14013",
  Message(Text:string):string {
    return 'Error 14013: Could not find entry in tab_ShelfadjSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_ShelfadjSettings"
}
,{
 _id: 5618,
 in_ErrorId: "Error 14014",
  Message(Text:string):string {
    return 'Error 14014: Could not find entry in tab_HingeSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_HingeSettings"
}
,{
 _id: 5619,
 in_ErrorId: "Error 14015",
  Message(Text:string):string {
    return 'Error 14015: Could not find entry in tab_ShelfadjDrillSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_ShelfadjDrillSettings"
}
,{
 _id: 5620,
 in_ErrorId: "Error 21001",
  Message(Text:string):string {
    return 'Error 21001: The selected value for the attribute Carcase Direction is not valid' ;
  }
,
 ScriptSource: "mf_CornerunitStraightFiller [Bauplan-Skript]"
}
,{
 _id: 5621,
 in_ErrorId: "Error 21002",
  Message(Text:string):string {
    return 'Error 21002: The selected value for the attribute CornerunitStraightFillerConstruction is not valid' ;
  }
,
 ScriptSource: "mf_CornerunitStraightFiller [Bauplan-Skript]"
}
,{
 _id: 5622,
 in_ErrorId: "Error 22001",
  Message(Text:string):string {
    return 'Error 22001: The selected value for the attribute Door type is not valid' ;
  }
,
 ScriptSource: "mf_Door [Moduldaten-Skript]"
}
,{
 _id: 5623,
 in_ErrorId: "Error 22002",
  Message(Text:string):string {
    return 'Error 22002: There is no fixed shelf on the top of the divider. This construction is not possible.';
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5624,
 in_ErrorId: "Error 22003",
  Message(Text:string):string {
    return 'Error 22003: There is no fixed shelf on the bottom of the divider. This construction is not possible.';
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5625,
 in_ErrorId: "Error 22004",
  Message(Text:string):string {
    return 'Error 22004: The front construction associated to the FrontDesign attribute is not valid' ;
  }
,
 ScriptSource: "mc_Door01 [Moduldaten-Skript] + mc_CornerunitStraightFiller01 [Moduldaten-Skript]"
}
,{
 _id: 5626,
 in_ErrorId: "Error 22005",
  Message(Text:string):string {
    return 'Error 22005: There is a HandleStripe selected in the HandleDesign and the HandlePosType selected is not valid' ;
  }
,
 ScriptSource: "mc_Door01 [Moduldaten-Skript]"
}
,{
 _id: 5627,
 in_ErrorId: "Error 22006",
  Message(Text:string):string {
    return 'Error 22006: Could not calculate the position of the push to open: ' + Text;
  }
,
 ScriptSource: "mc_Pushtoopen01 [Bauplan-Skript] + Function ops_PushtoopenDrill"
}
,{
 _id: 5628,
 in_ErrorId: "Error 22007",
  Message(Text:string):string {
    return 'Error 22007: There are two DIFFERENT dividers that are not divided with one fixed shelf. This construction is not possible. Please consider adding a fixed shelf between the two dividers or select only one divider type.';
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5629,
 in_ErrorId: "Error 22008",
  Message(Text:string):string {
    return 'Error 22008: There are two Fronts with DIFFERENT front width´s dividers that are not divided with one fixed shelf. This construction is not possible. Please consider adding a fixed shelf between the two dividers or select the same front width for each door.';
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5630,
 in_ErrorId: "Error 22009",
  Message(Text:string):string {
    return 'Error 22009: There is an Inlayed Backwall that is not completely covered by another part on bottom. Backwall number ' + Text;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5631,
 in_ErrorId: "Error 22010",
  Message(Text:string):string {
    return 'Error 22010: The type of fixed shelf is not defined (mod_ShelfFixedType)' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5632,
 in_ErrorId: "Error 22011",
  Message(Text:string):string {
    return 'Error 22011: There is at least one Backwall Overlayed to the Left Side and one which is not. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5633,
 in_ErrorId: "Error 22012",
  Message(Text:string):string {
    return 'Error 22012: There is more than one backwall Overlayed to the Left Side with different Positions in Depth. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5634,
 in_ErrorId: "Error 22013",
  Message(Text:string):string {
    return 'Error 22013: There is at least one Backwall Overlayed to the Right Side and one which is not. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5635,
 in_ErrorId: "Error 22014",
  Message(Text:string):string {
    return 'Error 22014: There is more than one backwall Overlayed to the Right Side with different Positions in Depth. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5636,
 in_ErrorId: "Error 22015",
  Message(Text:string):string {
    return 'Error 22015: There are 2 backwalls overlaying one fixed shelf and their position in Depth is not the same. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5637,
 in_ErrorId: "Error 22016",
  Message(Text:string):string {
    return 'Error 22016: There are 2 backwalls in one fixed shelf. One is Overlayed in position X and the other is Inlayed in position Y. The position of the Inlayed Backwall should be bigger than the one which is Overlayed. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5638,
 in_ErrorId: "Error 22017",
  Message(Text:string):string {
    return 'Error 22017: There are 2 backwalls in one fixed shelf. One is Overlayed in position X and the other is Inlayed in position Y. The position of the Inlayed Backwall should be bigger than the one which is Overlayed. This construction is not possible' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5639,
 in_ErrorId: "Error 22018",
  Message(Text:string):string {
    return 'Error 22018: It was not defined the Part to which the light should be insert into' ;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5640,
 in_ErrorId: "Error 22019",
  Message(Text:string):string {
    return 'Error 22019: Front element is starting over the carcase top end' ;
  }
,
 ScriptSource: "mr_StorageunitSingle  [Moduldaten-Skript]"
}
,{
 _id: 5641,
 in_ErrorId: "Error 22020",
  Message(Text:string):string {
    return 'Error 22020: There are only 5 profiles for finger grips provided in one element' ;
  }
,
 ScriptSource: "mr_StorageunitSingle  [Moduldaten-Skript]"
}
,{
 _id: 5642,
 in_ErrorId: "Info 22001",
  Message(Text:string):string {
    return 'Info 22001: The attribute mod_ShelffixedPos was overwritten to GapMiddle on Front nº ' ;
  }
,
 ScriptSource: "mr_StorageunitSingle  [Moduldaten-Skript] + mr_CornerunitStraight  [Moduldaten-Skript]"
}
,{
 _id: 5643,
 in_ErrorId: "Info 22002",
  Message(Text:string):string {
    return 'Info 22002: The attribute mod_ShelffixedPos was overwritten to AboveFingerGrip on Front nº ' ;
  }
,
 ScriptSource: "mr_StorageunitSingle  [Moduldaten-Skript]"
}
,{
 _id: 5644,
 in_ErrorId: "Error 22023",
  Message(Text:string):string {
    return 'Error 22023: It was not possible to define if the front has FingerGrip' ;
  }
,
 ScriptSource: "mr_StorageunitSingle  [Moduldaten-Skript]"
}
,{
 _id: 5645,
 in_ErrorId: "Error 22024",
  Message(Text:string):string {
    return 'Error 22024: The construction of the corner filler is incorrect. Please check the matrix of the attribute mod_CornerunitStraightFillerConstruction' ;
  }
,
 ScriptSource: "mf_CornerunitStraightFiller [Moduldaten-Skript]"
}
,{
 _id: 5646,
 in_ErrorId: "Error 22025",
  Message(Text:string):string {
    return 'Error 22025: There is a HandleStripe selected in the HandleDesign and the HandlePosType selected is not valid' ;
  }
,
 ScriptSource: "mc_Door01  [Moduldaten-Skript]"
}
,{
 _id: 5647,
 in_ErrorId: "Error 30001",
  Message(Text:string):string {
    return 'Error 30001: The ColorTop and ColorBottom are not the same. Please check function ue_bomout_Board for input value:' + Text ;
  }
,
 ScriptSource: "ue_BoardInfo"
}
,{
 _id: 5648,
 in_ErrorId: "Error 15001",
  Message(Text:string):string {
    return 'Error 15001: There is an error which is not defined in the table tab_ErrorList.'  ;
  }
,
 ScriptSource: "find_ErrorList"
}
,{
 _id: 5649,
 in_ErrorId: "Error 13008",
  Message(Text:string):string {
    return 'Error 13008: Could not find entry in tab_DrawerBoxDimensionMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_DrawerBoxDimensionMapping"
}
,{
 _id: 5650,
 in_ErrorId: "Error 11008",
  Message(Text:string):string {
    return 'Error 11008: Could not find entry in tab_FridgeConstruction  for input values: ' + Text ;
  }
,
 ScriptSource: "find_FridgeConstruction"
}
,{
 _id: 5651,
 in_ErrorId: "Error 13015",
  Message(Text:string):string {
    return 'Error 13015: Could not find entry in tab_FridgeMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_FridgeMapping"
}
,{
 _id: 5652,
 in_ErrorId: "Error 11009",
  Message(Text:string):string {
    return 'Error 11009: Could not find entry in tab_OvenConstruction  for input values: ' + Text ;
  }
,
 ScriptSource: "find_OvenConstruction"
}
,{
 _id: 5653,
 in_ErrorId: "Error 13016",
  Message(Text:string):string {
    return 'Error 13016: Could not find entry in tab_OvenMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_OvenMapping"
}
,{
 _id: 5654,
 in_ErrorId: "Error 14016",
  Message(Text:string):string {
    return 'Error 14016: Could not find entry in tab_EdgeJointSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_EdgeJointSettings"
}
,{
 _id: 5655,
 in_ErrorId: "Error 14017",
  Message(Text:string):string {
    return 'Error 14017: Could not find entry in tab_PartOverdimensionSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_PartOverdimensionSettings"
}
,{
 _id: 5656,
 in_ErrorId: "Error 14018",
  Message(Text:string):string {
    return 'Error 14018: Could not find entry in tab_DrawerBoxExtraItemSettings for input values: ' + Text;
  }
,
 ScriptSource: "find_DrawerBoxExtraItemSettings"
}
,{
 _id: 5657,
 in_ErrorId: "Error 22021",
  Message(Text:string):string {
    return `Error 22021: The selected combination of the ‘DoorType’ and ‘DoorDirection’ attributes is not possible. Possible combinations are:  DoorType = ‘Single’ and DoorDirection = ‘Left’  DoorType = ‘Single’ and DoorDirection = ‘Right’  DoorType = ‘Double’ and DoorDirection = ‘LeftRight’  DoorType = ‘Double’ and DoorDirection = ‘LeftLeft’  DoorType = ‘Double’ and DoorDirection = ‘RightRight’`;
  }
,
 ScriptSource: "mf_Door [Moduldaten-Skript]"
}
,{
 _id: 5658,
 in_ErrorId: "Error 22022",
  Message(Text:string):string {
    return 'Error 22022: There is an Inlayed Backwall that is not completely covered by another part on top. Backwall number ';
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5659,
 in_ErrorId: "Info 22003",
  Message(Text:string):string {
    return 'Info 22003: The RackArea forces an increasement of the cabinet, which is not valid to other front modules! The system will ignore it! ' ;
  }
,
 ScriptSource: "process_RackAreaOversizeCarcase"
}
,{
 _id: 5660,
 in_ErrorId: "Error 13017",
  Message(Text:string):string {
    return 'Error 13017: Could not find entry in tab_DuststripMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_DuststripMapping"
}
,{
 _id: 5661,
 in_ErrorId: "Error 14019",
  Message(Text:string):string {
    return 'Error 14019: Could not find entry in tab_DoorSettings for input value: ' + Text;
  }
,
 ScriptSource: "find_DoorSettings"
}
,{
 _id: 5662,
 in_ErrorId: "Error 22026",
  Message(Text:string):string {
    return 'Error 22026: The backwall position must be equal or bigger than ' + Text;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript]"
}
,{
 _id: 5663,
 in_ErrorId: "Error 22027",
  Message(Text:string):string {
    return 'Error 22027: There is a part inserted outside of the cabinet. Part: ' + Text;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript] - process_StorageunitShelftopConstruction"
}
,{
 _id: 5664,
 in_ErrorId: "Error 22028",
  Message(Text:string):string {
    return 'Error 22028: The Door quantity defined with the DoorType attribute does not match the result of the FrontDescriptor';
  }
,
 ScriptSource: "mf_Door [Moduldaten-Skript]"
}
,{
 _id: 5665,
 in_ErrorId: "Error 40001",
  Message(Text:string):string {
    return 'Error 40001: The provided descriptor does not match the dimension. '  + Text ;
  }
,
 ScriptSource: "process_Descriptor"
}
,{
 _id: 5666,
 in_ErrorId: "Error 22029",
  Message(Text:string):string {
    return 'Error 22029: It is not possible to select a double drawer without a MiddleSide or a MiddleSideShort.';
  }
,
 ScriptSource: "mr_CornerunitStraight  [Moduldaten-Skript]"
}
,{
 _id: 5667,
 in_ErrorId: "Error 22030",
  Message(Text:string):string {
    return 'Error 22030: The Vertical Divider selected is not valid for this cabinet.';
  }
,
 ScriptSource: "mr_CornerunitStraight  [Moduldaten-Skript]"
}
,{
 _id: 5668,
 in_ErrorId: "Error 22031",
  Message(Text:string):string {
    return 'Error 22031: The door direction selected is not valid for this cabinet.';
  }
,
 ScriptSource: "mr_CornerunitStraight  [Moduldaten-Skript]"
}
,{
 _id: 5669,
 in_ErrorId: "Error 40002",
  Message(Text:string):string {
    return 'Error 40002: The front weight could not be calculated. ' + Text;
  }
,
 ScriptSource: "process_FrontpanelWeightCalculations"
}
,{
 _id: 5670,
 in_ErrorId: "Error 21003",
  Message(Text:string):string {
    return 'Error 21003: The selected value for the attribute Fronttype is not valid.' ;
  }
,
 ScriptSource: "mc_FrontPanel01 [Bauplan-Skript]"
}
,{
 _id: 5671,
 in_ErrorId: "Error 21004",
  Message(Text:string):string {
    return 'Error 21004: Frontpanel can not be inserted. ' + Text;
  }
,
 ScriptSource: "mc_FrontPanel01 [Bauplan-Skript]"
}
,{
 _id: 5672,
 in_ErrorId: "Error 14020",
  Message(Text:string):string {
    return 'Error 14020: Could not find entry in tab_PushtoopenSettings for input value: ' + Text;
  }
,
 ScriptSource: "find_PushtoopenSettings"
}
,{
 _id: 5673,
 in_ErrorId: "Error 14021",
  Message(Text:string):string {
    return 'Error 14021: Could not find entry in tab_EdgeSettings for input value: ' + Text ;
  }
,
 ScriptSource: "find_EdgeSettings"
}
,{
 _id: 5674,
 in_ErrorId: "Error 13018",
  Message(Text:string):string {
    return 'Error 13018: Could not find entry in tab_EdgeJointMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_EdgeJointMapping"
}
,{
 _id: 5675,
 in_ErrorId: "Error 14022",
  Message(Text:string):string {
    return 'Error 14022: Could not find entry in tab_PushtoopenMapping for input value: ' + Text;
  }
,
 ScriptSource: "find_PushtoopenMapping"
}
,{
 _id: 5676,
 in_ErrorId: "Error 22032",
  Message(Text:string):string {
    return 'Error 22032: Hinges cannot be inserted: ' + Text;
  }
,
 ScriptSource: "mc_Door01 [Moduldaten-Skript]"
}
,{
 _id: 5677,
 in_ErrorId: "Error 40003",
  Message(Text:string):string {
    return 'Error 40003: Could not insert the data for the board: ' + Text;
  }
,
 ScriptSource: "process_BoardBom"
}
,{
 _id: 5678,
 in_ErrorId: "Error 21005",
  Message(Text:string):string {
    return 'Error 21005: PushToOpen drill could not be inserted. ' + Text;
  }
,
 ScriptSource: "mc_Pushtoopen01 [Bauplan-Skript]"
}
,{
 _id: 5679,
 in_ErrorId: "Error 40004",
  Message(Text:string):string {
    return 'Error 40004: Could not calculate the drilling positions: ' + Text;
  }
,
 ScriptSource: "process_CarcasePartConnection"
}
,{
 _id: 5680,
 in_ErrorId: "Error 21006",
  Message(Text:string):string {
    return 'Error 21006: The configuration of the FrameConnectionType is not defined. Please check the settings. ' + Text;
  }
,
 ScriptSource: "mc_WoodFrame01 [Bauplan-Skript]"
}
,{
 _id: 5681,
 in_ErrorId: "Info 22004",
  Message(Text:string):string {
    return 'Info 22004: The configuration of the FrameConnectionType = “Mitre” is not possible as the frame parts have different widths. Please correct the settings so that there is only one frame width.';
  }
,
 ScriptSource: "mc_WoodFrame01 [Construction plan script]"
}
,{
 _id: 5682,
 in_ErrorId: "Error 13019",
  Message(Text:string):string {
    return 'Error 13019: Could not find entry in tab_FlipliftColorMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_FlipliftColorMapping"
}
,{
 _id: 5683,
 in_ErrorId: "Error 13020",
  Message(Text:string):string {
    return 'Error 13020: Could not find entry in tab_FlipliftMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_FlipliftMapping"
}
,{
 _id: 5684,
 in_ErrorId: "Error 13021",
  Message(Text:string):string {
    return 'Error 13021: Could not find entry in tab_FlipliftWeightTypeMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_FlipliftWeightTypeMapping"
}
,{
 _id: 5685,
 in_ErrorId: "Error 14023",
  Message(Text:string):string {
    return 'Error 14023: Could not find entry in tab_FlipliftSettings for input value: ' + Text ;
  }
,
 ScriptSource: "find_FlipliftSettings"
}
,{
 _id: 5686,
 in_ErrorId: "Error 11010",
  Message(Text:string):string {
    return 'Error 11010: Could not find entry in tab_HingeConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "tab_HingeConstruction"
}
,{
 _id: 5687,
 in_ErrorId: "Error 22033",
  Message(Text:string):string {
    return 'Error 22033: Hardware for fliplift cannot be inserted: ' + Text;
  }
,
 ScriptSource: "mc_FlipliftHardware01 [Moduldaten-Skript]"
}
,{
 _id: 5688,
 in_ErrorId: "Error 13022",
  Message(Text:string):string {
    return 'Error 13022: Could not find entry in tab_FramePartConnectionMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_FramePartConnectionMapping"
}
,{
 _id: 5689,
 in_ErrorId: "Error 11011",
  Message(Text:string):string {
    return 'Error 11011: Could not find entry in tab_FlipliftConstruction for input value: ' + Text ;
  }
,
 ScriptSource: "find_FlipliftConstruction"
}
,{
 _id: 5690,
 in_ErrorId: "Error 14024",
  Message(Text:string):string {
    return 'Error 14024: Could not find entry in tab_PartConnectionSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_PartConnectionSettings"
}
,{
 _id: 5691,
 in_ErrorId: "Error 14025",
  Message(Text:string):string {
    return 'Error 14025: Could not find entry in tab_EdgeFrameSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_EdgeFrameSettings"
}
,{
 _id: 5692,
 in_ErrorId: "Error 22034",
  Message(Text:string):string {
    return 'Error 22034: Frontpanel cannot be inserted in the fliplift. Wrong configuration.';
  }
,
 ScriptSource: "mc_Fliplift01 [Moduldaten-Skript]"
}
,{
 _id: 5693,
 in_ErrorId: "Error 22035",
  Message(Text:string):string {
    return 'Error 22035: Frontpanel cannot be inserted in the door. Wrong configuration.';
  }
,
 ScriptSource: "mc_Door01 [Moduldaten-Skript]"
}
,{
 _id: 5694,
 in_ErrorId: "Error 22036",
  Message(Text:string):string {
    return 'Error 22036: Frontpanel cannot be inserted in the door. Wrong configuration.';
  }
,
 ScriptSource: "mc_Drawer01 [Moduldaten-Skript]"
}
,{
 _id: 5695,
 in_ErrorId: "Error 13023",
  Message(Text:string):string {
    return 'Error 13023: Could not find entry in tab_MaterialMapping for input value: ' + Text ;
  }
,
 ScriptSource: "find_MaterialMapping"
}
,{
 _id: 5696,
 in_ErrorId: "Error 14026",
  Message(Text:string):string {
    return 'Error 14026: Could not find entry in tab_CarcaseShelftopSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcaseShelftopSettings"
}
,{
 _id: 5697,
 in_ErrorId: "Error 14027",
  Message(Text:string):string {
    return 'Error 14027: Could not find entry in tab_CarcasePartsShape for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcasePartsShape"
}
,{
 _id: 5698,
 in_ErrorId: "Error 12005",
  Message(Text:string):string {
    return 'Error 12005: Could not find entry in tab_OvenGraphicLibrary for input value: ' + Text ;
  }
,
 ScriptSource: "find_OvenGraphicLibrary"
}
,{
 _id: 5699,
 in_ErrorId: "Error 11012",
  Message(Text:string):string {
    return 'Error 11012: Could not find entry in tab_ApplianceGraphicLibrary for input value: ' + Text ;
  }
,
 ScriptSource: "find_ApplianceGraphicLibrary"
}
,{
 _id: 5700,
 in_ErrorId: "Error 13024",
  Message(Text:string):string {
    return 'Error 13024: Could not find entry in tab_HoodMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HoodMapping"
}
,{
 _id: 5701,
 in_ErrorId: "Error 13025",
  Message(Text:string):string {
    return 'Error 13025: Could not find entry in tab_HobMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_HobMapping"
}
,{
 _id: 5702,
 in_ErrorId: "Error 11013",
  Message(Text:string):string {
    return 'Error 11013: Could not find entry in tab_HobConstruction for input value: ' + Text ;
  }
,
 ScriptSource: "find_HobConstruction"
}
,{
 _id: 5703,
 in_ErrorId: "Error 13026",
  Message(Text:string):string {
    return 'Error 13026: Could not find entry in tab_SinkMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_SinkMapping"
}
,{
 _id: 5704,
 in_ErrorId: "Error 11014",
  Message(Text:string):string {
    return 'Error 110134: Could not find entry in tab_SinkConstruction for input value: ' + Text ;
  }
,
 ScriptSource: "find_SinkConstruction"
}
,{
 _id: 5705,
 in_ErrorId: "Error 14028",
  Message(Text:string):string {
    return 'Error 14028: Could not find entry in tab_SlopedCeilingSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_SlopedCeilingSettings"
}
,{
 _id: 5706,
 in_ErrorId: "Error 14029",
  Message(Text:string):string {
    return 'Error 14029: Could not find entry in tab_CarcaseSidepanelSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcaseSidepanelSettings"
}
,{
 _id: 5707,
 in_ErrorId: "Error 13027",
  Message(Text:string):string {
    return 'Error 13027: Could not find entry in tab_FrontEdgeColorMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_FrontEdgeColorMapping"
}
,{
 _id: 5708,
 in_ErrorId: "Error 22037",
  Message(Text:string):string {
    return 'Error 22037: Configuration is not possible. ' + Text;
  }
,
 ScriptSource: "mc_FrontPanel01 [Construction plan script]"
}
,{
 _id: 5709,
 in_ErrorId: "Error 14030",
  Message(Text:string):string {
    return 'Error 14030: Could not find entry in tab_CarcaseShelfbtmSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcaseShelfbtmSettings"
}
,{
 _id: 5710,
 in_ErrorId: "Error 14031",
  Message(Text:string):string {
    return 'Error 14031: Could not find entry in tab_FillerSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_FillerSettings"
}
,{
 _id: 5711,
 in_ErrorId: "Error 14032",
  Message(Text:string):string {
    return 'Error 14032: Could not find entry in tab_CarcaseSlopedCeilingDimension for input values: ' + Text ;
  }
,
 ScriptSource: "find_CarcaseSlopedCeilingDimension"
}
,{
 _id: 5712,
 in_ErrorId: "Error 22038",
  Message(Text:string):string {
    return 'Error 22038: The TopShelf violates the minimum depth allowed. Part: ' + Text;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript] - process_StorageunitShelftopConstruction"
}
,{
 _id: 5713,
 in_ErrorId: "Error 22039",
  Message(Text:string):string {
    return 'Error 22039: Incorrect dimension of part. Part: ' + Text;
  }
,
 ScriptSource: "mc_Storageunit01 [Moduldaten-Skript] - process_StorageunitShelftopConstruction"
}
,{
 _id: 5714,
 in_ErrorId: "Error 14033",
  Message(Text:string):string {
    return 'Error 14033: Could not find entry in tab_FillerHardwareSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_FillerHardwareSettings"
}
,{
 _id: 5715,
 in_ErrorId: "Error 13028",
  Message(Text:string):string {
    return 'Error 13028: Could not find entry in tab_DishwasherMapping for input values: ' + Text ;
  }
,
 ScriptSource: "find_DishwasherMapping"
}
,{
 _id: 5716,
 in_ErrorId: "Error 11015",
  Message(Text:string):string {
    return 'Error 11015: Could not find entry in tab_DishwasherConstruction  for input values: ' + Text ;
  }
,
 ScriptSource: "find_DishwasherConstruction"
}
,{
 _id: 5717,
 in_ErrorId: "Error 11016",
  Message(Text:string):string {
    return 'Error 11016: Could not find entry in tab_CarcaseCornerunitConstruction for input values :' + Text ;
  }
,
 ScriptSource: "find_CarcaseCornerunitConstruction"
}
,{
 _id: 5718,
 in_ErrorId: "Error 14034",
  Message(Text:string):string {
    return 'Error 14034: Could not find entry in tab_GrainDirectionSettings for input values: ' + Text ;
  }
,
 ScriptSource: "find_GrainDirectionSettings"
}
,{
 _id: 5719,
 in_ErrorId: "Error 22040",
  Message(Text:string):string {
    return 'Error 22040: Could not create the handle. Incomplete or wrong handle data.';
  }
,
 ScriptSource: "mc_Handle01 [Moduldaten-Skript]"
}
,{
 _id: 5720,
 in_ErrorId: "Error 22042",
  Message(Text:string):string {
    return 'Error 22042: Data for the legs is not complete or consistant. Legs cannot be created!';
  }
,
 ScriptSource: "mc_PlinthArea01 [Moduldaten-Skript]"
}
,{
 _id: 5721,
 in_ErrorId: "Error 21007",
  Message(Text:string):string {
    return 'Error 21007: Could not create the leg. Incomplete or wrong leg data.';
  }
,
 ScriptSource: "mc_Leg01 [Construction plan script]"
}
,{
 _id: 5722,
 in_ErrorId: "Error 30002",
  Message(Text:string):string {
    return 'Error 30002: User exit for the legs failed: ' + Text ;
  }
,
 ScriptSource: "ue_PlinthAreaLegs"
}
,{
 _id: 5723,
 in_ErrorId: "Error 30003",
  Message(Text:string):string {
    return 'Error 30003: User exit for single leg failed: ' + Text ;
  }
,
 ScriptSource: "ue_PlinthAreaSingleLeg"
}
,{
 _id: 5724,
 in_ErrorId: "Error 40005",
  Message(Text:string):string {
    return 'Error 40005: Could not create data for the legs: ' + Text;
  }
,
 ScriptSource: "process_PlinthAreaLegs"
}
,{
 _id: 5725,
 in_ErrorId: "Error 40006",
  Message(Text:string):string {
    return 'Error 40006: There is more than 1 graphic item in the table tab_GraphicLibraryMapping for the plinth area! This was not expected!';
  }
,
 ScriptSource: "process_PlinthAreaLegs"
}
,{
 _id: 5726,
 in_ErrorId: "Error 40007",
  Message(Text:string):string {
    return 'Error 40007: Grain mismatch. Board is grain relevant but part does not provide a grain direction. Part: @part, grain color: @grainColor, grain program: @grainProgram';
  }
,
 ScriptSource: "process_BoardBom"
}
,{
 _id: 5727,
 in_ErrorId: "Error 14035",
  Message(Text:string):string {
    return 'Error 14035: Could not find entry in tab_FrontPanelConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "find_FrontPanelConstruction"
}
,{
 _id: 5728,
 in_ErrorId: "Error 14036",
  Message(Text:string):string {
    return 'Error 14036: Could not find entry in tab_PanelWoodFrameConstruction for input values: ' + Text ;
  }
,
 ScriptSource: "find_PanelWoodFrameConstruction"
}
];
