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

export interface cti_tab_EdgeJointMapping {
  readonly in_EdgeJointType? : string;
}

export interface ctm_tab_EdgeJointMapping {
}

export interface cto_tab_EdgeJointMapping extends ctm_tab_EdgeJointMapping {
  readonly _id : number;
  readonly EdgeJointFrontLeft? : string;
  readonly EdgeJointLeftBack? : string;
  readonly EdgeJointBackRight? : string;
  readonly EdgeJointRightFront? : string;
  readonly EdgeShape? : string;
  readonly EdgeCode? : string;
}

export interface ICT_tab_EdgeJointMapping
extends cti_tab_EdgeJointMapping, cto_tab_EdgeJointMapping {}

export class ct2_tab_EdgeJointMapping {

public findExactly(
     in_EdgeJointType: string|undefined,
): cto_tab_EdgeJointMapping | undefined {
  const res = ct_tab_EdgeJointMapping.find((p) => 
p.in_EdgeJointType === in_EdgeJointType
);
return res;
}

public find(
predicate: (value: cti_tab_EdgeJointMapping) => boolean
): cto_tab_EdgeJointMapping | undefined {
  for (let index = 0; index < ct_tab_EdgeJointMapping.length; index++){
    const element = ct_tab_EdgeJointMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_EdgeJointMapping :ICT_tab_EdgeJointMapping[] = [
{
 _id: 1,
 in_EdgeJointType: "NoEdges",
 EdgeJointFrontLeft: "NoEdge",
 EdgeJointLeftBack: "NoEdge",
 EdgeJointBackRight: "NoEdge",
 EdgeJointRightFront: "NoEdge",
 EdgeShape: "No Shape",
 EdgeCode: "::::"
}
,{
 _id: 2,
 in_EdgeJointType: "SLSE",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N0_W1_S0",
 EdgeCode: "000:000:011:"
}
,{
 _id: 3,
 in_EdgeJointType: "LSSE",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N1_W0_S0",
 EdgeCode: "010:001:000:"
}
,{
 _id: 4,
 in_EdgeJointType: "SSSE",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N1_W1_S0",
 EdgeCode: "000:001:001:"
}
,{
 _id: 5,
 in_EdgeJointType: "LSEL",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "L",
 EdgeShape: "W0_S0_E0",
 EdgeCode: "010::000:010"
}
,{
 _id: 6,
 in_EdgeJointType: "LSES",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "S",
 EdgeShape: "W0_S1_E0",
 EdgeCode: "011::000:000"
}
,{
 _id: 7,
 in_EdgeJointType: "SSEL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "L",
 EdgeShape: "W1_S0_E0",
 EdgeCode: "000::001:010"
}
,{
 _id: 8,
 in_EdgeJointType: "SSES",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "S",
 EdgeShape: "W1_S1_E0",
 EdgeCode: "001::001:000"
}
,{
 _id: 9,
 in_EdgeJointType: "EELS",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_E0",
 EdgeCode: ":010::000"
}
,{
 _id: 10,
 in_EdgeJointType: "EESS",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_E1",
 EdgeCode: ":000::001"
}
,{
 _id: 11,
 in_EdgeJointType: "SESE",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N0_S0",
 EdgeCode: "000:000::"
}
,{
 _id: 12,
 in_EdgeJointType: "ELSE",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N0_W0",
 EdgeCode: ":000:010:"
}
,{
 _id: 13,
 in_EdgeJointType: "ESSE",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N1_W0",
 EdgeCode: ":001:000:"
}
,{
 _id: 14,
 in_EdgeJointType: "SEEL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "L",
 EdgeShape: "S0_E0",
 EdgeCode: "000:::010"
}
,{
 _id: 15,
 in_EdgeJointType: "SEES",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "S",
 EdgeShape: "S1_E0",
 EdgeCode: "001:::000"
}
,{
 _id: 16,
 in_EdgeJointType: "ESES",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "S",
 EdgeShape: "W0_E0",
 EdgeCode: "::000:000"
}
,{
 _id: 17,
 in_EdgeJointType: "LSEE",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "E",
 EdgeShape: "W0_S0",
 EdgeCode: "010::000:"
}
,{
 _id: 18,
 in_EdgeJointType: "SSEE",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "E",
 EdgeShape: "W1_S0",
 EdgeCode: "000::001:"
}
,{
 _id: 19,
 in_EdgeJointType: "EEES",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "S",
 EdgeShape: "E0",
 EdgeCode: ":::000"
}
,{
 _id: 20,
 in_EdgeJointType: "EESE",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N0",
 EdgeCode: ":000::"
}
,{
 _id: 21,
 in_EdgeJointType: "LLSE",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "E",
 EdgeShape: "N0_W0_S0",
 EdgeCode: "010:000:010:"
}
,{
 _id: 22,
 in_EdgeJointType: "SEEE",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "E",
 EdgeShape: "S0",
 EdgeCode: "000:::"
}
,{
 _id: 23,
 in_EdgeJointType: "ESSS",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N1_W0_E1",
 EdgeCode: ":001:000:001"
}
,{
 _id: 24,
 in_EdgeJointType: "ELSS",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_W0_E1",
 EdgeCode: ":000:010:001"
}
,{
 _id: 25,
 in_EdgeJointType: "LSLS",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N1_W0_S1_E0",
 EdgeCode: "011:011:000:000"
}
,{
 _id: 26,
 in_EdgeJointType: "SLSL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L",
 EdgeShape: "N0_W1_S0_E1",
 EdgeCode: "000:000:011:011"
}
,{
 _id: 27,
 in_EdgeJointType: "LLSL",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L",
 EdgeShape: "N0_W0_S0_E1",
 EdgeCode: "010:000:010:011"
}
,{
 _id: 28,
 in_EdgeJointType: "LLLS",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_W0_S1_E0",
 EdgeCode: "011:010:010:000"
}
,{
 _id: 29,
 in_EdgeJointType: "LLSS",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_W0_S1_E1",
 EdgeCode: "011:000:010:001"
}
,{
 _id: 30,
 in_EdgeJointType: "SLLL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "L",
 EdgeShape: "N0_W1_S0_E0",
 EdgeCode: "000:010:011:010"
}
,{
 _id: 31,
 in_EdgeJointType: "SLLS",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_W1_S1_E0",
 EdgeCode: "001:010:011:000"
}
,{
 _id: 32,
 in_EdgeJointType: "SLSS",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_W1_S1_E1",
 EdgeCode: "001:000:011:001"
}
,{
 _id: 33,
 in_EdgeJointType: "LSLL",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "L",
 EdgeShape: "N1_W0_S0_E0",
 EdgeCode: "010:011:000:010"
}
,{
 _id: 34,
 in_EdgeJointType: "LSSL",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L",
 EdgeShape: "N1_W0_S0_E1",
 EdgeCode: "010:011:000:000"
}
,{
 _id: 35,
 in_EdgeJointType: "LSSS",
 EdgeJointFrontLeft: "L",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N1_W0_S1_E1",
 EdgeCode: "011:001:000:001"
}
,{
 _id: 36,
 in_EdgeJointType: "SSLL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "L",
 EdgeShape: "N1_W1_S0_E0",
 EdgeCode: "000:011:001:010"
}
,{
 _id: 37,
 in_EdgeJointType: "SSSL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L",
 EdgeShape: "N1_W1_S0_E1",
 EdgeCode: "000:001:001:011"
}
,{
 _id: 38,
 in_EdgeJointType: "SSLS",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N1_W1_S1_E0",
 EdgeCode: "001:011:001:000"
}
,{
 _id: 39,
 in_EdgeJointType: "SELL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "L",
 EdgeShape: "N0_S0_E0",
 EdgeCode: "000:010::010"
}
,{
 _id: 40,
 in_EdgeJointType: "SESL",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "L",
 EdgeShape: "N0_S0_E1",
 EdgeCode: "000:000::011"
}
,{
 _id: 41,
 in_EdgeJointType: "SELS",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_S1_E0",
 EdgeCode: "001:010::000"
}
,{
 _id: 42,
 in_EdgeJointType: "SESS",
 EdgeJointFrontLeft: "S",
 EdgeJointLeftBack: "E",
 EdgeJointBackRight: "S",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_S1_E1",
 EdgeCode: "001:000::001"
}
,{
 _id: 43,
 in_EdgeJointType: "ELLS",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "L",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N0_W0_E0",
 EdgeCode: ":010:010:000"
}
,{
 _id: 44,
 in_EdgeJointType: "ESLS",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "L",
 EdgeJointRightFront: "S",
 EdgeShape: "N1_W0_E0",
 EdgeCode: ":011:000:000"
}
,{
 _id: 45,
 in_EdgeJointType: "ESEE",
 EdgeJointFrontLeft: "E",
 EdgeJointLeftBack: "S",
 EdgeJointBackRight: "E",
 EdgeJointRightFront: "E",
 EdgeShape: "W0",
 EdgeCode: "::000:"
}
];
