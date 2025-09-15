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

export interface cti_tab_HandleMapping {
  readonly in_HandleDesign? : string;
  readonly in_HandleColor? : string;
  readonly in_HandlePosType? : string;
  readonly in_HandleLength : number;
}

export interface ctm_tab_HandleMapping {
}

export interface cto_tab_HandleMapping extends ctm_tab_HandleMapping {
  readonly _id : number;
  readonly Object? : string;
}

export interface ICT_tab_HandleMapping
extends cti_tab_HandleMapping, cto_tab_HandleMapping {}

export class ct2_tab_HandleMapping {

public findExactly(
     in_HandleDesign: string|undefined,
     in_HandleColor: string|undefined,
     in_HandlePosType: string|undefined,
     in_HandleLength: number,
): cto_tab_HandleMapping | undefined {
  const res = ct_tab_HandleMapping.find((p) => 
p.in_HandleDesign === in_HandleDesign
 && p.in_HandleColor === in_HandleColor
 && p.in_HandlePosType === in_HandlePosType
 && p.in_HandleLength === in_HandleLength
);
return res;
}

public find(
predicate: (value: cti_tab_HandleMapping) => boolean
): cto_tab_HandleMapping | undefined {
  for (let index = 0; index < ct_tab_HandleMapping.length; index++){
    const element = ct_tab_HandleMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HandleMapping :ICT_tab_HandleMapping[] = [
{
 _id: 200,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 96,
 Object: "Handle_Rail_96"
}
,{
 _id: 201,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 128,
 Object: "Handle_Rail_128"
}
,{
 _id: 202,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 160,
 Object: "Handle_Rail_160"
}
,{
 _id: 203,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 192,
 Object: "Handle_Rail_192"
}
,{
 _id: 204,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 224,
 Object: "Handle_Rail_224"
}
,{
 _id: 205,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 288,
 Object: "Handle_Rail_288"
}
,{
 _id: 206,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 320,
 Object: "Handle_Rail_320"
}
,{
 _id: 207,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 352,
 Object: "Handle_Rail_352"
}
,{
 _id: 208,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 448,
 Object: "Handle_Rail_448"
}
,{
 _id: 209,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 560,
 Object: "Handle_Rail_560"
}
,{
 _id: 210,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 660,
 Object: "Handle_Rail_660"
}
,{
 _id: 211,
 in_HandleDesign: "20",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 760,
 Object: "Handle_Rail_760"
}
,{
 _id: 212,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 96,
 Object: "Handle_Bracket_96"
}
,{
 _id: 213,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 128,
 Object: "Handle_Bracket_128"
}
,{
 _id: 214,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 160,
 Object: "Handle_Bracket_160"
}
,{
 _id: 215,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 192,
 Object: "Handle_Bracket_192"
}
,{
 _id: 216,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 224,
 Object: "Handle_Bracket_224"
}
,{
 _id: 217,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 288,
 Object: "Handle_Bracket_288"
}
,{
 _id: 218,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 320,
 Object: "Handle_Bracket_320"
}
,{
 _id: 219,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 352,
 Object: "Handle_Bracket_352"
}
,{
 _id: 220,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 448,
 Object: "Handle_Bracket_448"
}
,{
 _id: 221,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 480,
 Object: "Handle_Bracket_480"
}
,{
 _id: 222,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 560,
 Object: "Handle_Bracket_560"
}
,{
 _id: 223,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 640,
 Object: "Handle_Bracket_640"
}
,{
 _id: 224,
 in_HandleDesign: "30",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "N/A",
 in_HandleLength: 960,
 Object: "Handle_Bracket_960"
}
,{
 _id: 225,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 226,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 227,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 228,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 229,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 230,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 231,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 232,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 233,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 234,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 235,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 236,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 237,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 238,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 239,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 240,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 241,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 242,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 243,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 244,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 245,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 246,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 247,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 248,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 249,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 250,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 251,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 252,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 253,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 254,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 255,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 256,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 257,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 258,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 259,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 260,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 261,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 262,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 263,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 264,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 265,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 266,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 267,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 268,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 269,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 270,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 271,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 272,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 273,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 274,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 275,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 276,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 277,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 278,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 279,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 2504,
 Object: ""
}
,{
 _id: 280,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 2504,
 Object: ""
}
,{
 _id: 281,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 282,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 283,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 284,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 285,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 286,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 287,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 288,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 289,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 290,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 294,
 Object: ""
}
,{
 _id: 291,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 292,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 293,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 294,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 295,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 296,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 394,
 Object: ""
}
,{
 _id: 297,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 298,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 299,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 300,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 301,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 302,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 444,
 Object: ""
}
,{
 _id: 303,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 304,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 305,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 306,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 307,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 308,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 494,
 Object: ""
}
,{
 _id: 309,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 310,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 311,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 312,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 313,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 314,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 594,
 Object: ""
}
,{
 _id: 315,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 316,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 317,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 318,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 319,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 320,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 794,
 Object: ""
}
,{
 _id: 321,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 322,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 323,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 324,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 325,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 326,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 894,
 Object: ""
}
,{
 _id: 327,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 328,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 329,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 330,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 331,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 332,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 994,
 Object: ""
}
,{
 _id: 333,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 334,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 335,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 336,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 337,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 338,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 1194,
 Object: ""
}
,{
 _id: 339,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 340,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 341,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 342,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 343,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 344,
 in_HandleDesign: "40",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 345,
 in_HandleDesign: "50",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeTop",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 346,
 in_HandleDesign: "50",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtm",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 347,
 in_HandleDesign: "50",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeBtmTop",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 348,
 in_HandleDesign: "50",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeft",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 349,
 in_HandleDesign: "50",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeRight",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 350,
 in_HandleDesign: "50",
 in_HandleColor: "StainlessSteelMattBrushed",
 in_HandlePosType: "StripeLeftRight",
 in_HandleLength: 2500,
 Object: ""
}
,{
 _id: 351,
 in_HandleDesign: "100",
 in_HandleColor: "Black",
 in_HandlePosType: "All",
 in_HandleLength: 64,
 Object: "Handle_100_Black_64"
}
,{
 _id: 352,
 in_HandleDesign: "100",
 in_HandleColor: "Black",
 in_HandlePosType: "All",
 in_HandleLength: 160,
 Object: "Handle_100_Black_160"
}
,{
 _id: 353,
 in_HandleDesign: "100",
 in_HandleColor: "Black",
 in_HandlePosType: "All",
 in_HandleLength: 320,
 Object: "Handle_100_Black_320"
}
,{
 _id: 354,
 in_HandleDesign: "100",
 in_HandleColor: "NickelPlated",
 in_HandlePosType: "All",
 in_HandleLength: 64,
 Object: "Handle_100_NickelPlated_64"
}
,{
 _id: 355,
 in_HandleDesign: "100",
 in_HandleColor: "NickelPlated",
 in_HandlePosType: "All",
 in_HandleLength: 160,
 Object: "Handle_100_NickelPlated_160"
}
,{
 _id: 356,
 in_HandleDesign: "100",
 in_HandleColor: "NickelPlated",
 in_HandlePosType: "All",
 in_HandleLength: 320,
 Object: "Handle_100_NickelPlated_320"
}
,{
 _id: 357,
 in_HandleDesign: "100",
 in_HandleColor: "Tin",
 in_HandlePosType: "All",
 in_HandleLength: 64,
 Object: "Handle_100_NickelPlated_64"
}
,{
 _id: 358,
 in_HandleDesign: "100",
 in_HandleColor: "Tin",
 in_HandlePosType: "All",
 in_HandleLength: 160,
 Object: "Handle_100_NickelPlated_160"
}
,{
 _id: 359,
 in_HandleDesign: "100",
 in_HandleColor: "Tin",
 in_HandlePosType: "All",
 in_HandleLength: 320,
 Object: "Handle_100_NickelPlated_320"
}
,{
 _id: 360,
 in_HandleDesign: "60",
 in_HandleColor: "Black",
 in_HandlePosType: "N/A",
 in_HandleLength: 128,
 Object: "Handle_60_Black_128"
}
,{
 _id: 361,
 in_HandleDesign: "60",
 in_HandleColor: "Black",
 in_HandlePosType: "N/A",
 in_HandleLength: 160,
 Object: "Handle_60_Black_160"
}
,{
 _id: 362,
 in_HandleDesign: "60",
 in_HandleColor: "ChromedPolished",
 in_HandlePosType: "N/A",
 in_HandleLength: 128,
 Object: "Handle_60_ChromedPolished_128"
}
,{
 _id: 363,
 in_HandleDesign: "60",
 in_HandleColor: "ChromedPolished",
 in_HandlePosType: "N/A",
 in_HandleLength: 160,
 Object: "Handle_60_ChromedPolished_160"
}
,{
 _id: 364,
 in_HandleDesign: "60",
 in_HandleColor: "BrassPlatedAntique",
 in_HandlePosType: "N/A",
 in_HandleLength: 128,
 Object: "Handle_60_BrassPlatedAntique_128"
}
,{
 _id: 365,
 in_HandleDesign: "60",
 in_HandleColor: "BrassPlatedAntique",
 in_HandlePosType: "N/A",
 in_HandleLength: 160,
 Object: "Handle_60_BrassPlatedAntique_160"
}
,{
 _id: 366,
 in_HandleDesign: "60",
 in_HandleColor: "NickelPlated",
 in_HandlePosType: "N/A",
 in_HandleLength: 128,
 Object: "Handle_60_NickelPlated_128"
}
,{
 _id: 367,
 in_HandleDesign: "60",
 in_HandleColor: "NickelPlated",
 in_HandlePosType: "N/A",
 in_HandleLength: 160,
 Object: "Handle_60_NickelPlated_160"
}
,{
 _id: 368,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 960,
 Object: "Handle_110_StainlessSteel_960"
}
,{
 _id: 369,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1060,
 Object: "Handle_110_StainlessSteel_1060"
}
,{
 _id: 370,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1160,
 Object: "Handle_110_StainlessSteel_1160"
}
,{
 _id: 371,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1260,
 Object: "Handle_110_StainlessSteel_1260"
}
,{
 _id: 372,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1360,
 Object: "Handle_110_StainlessSteel_1360"
}
,{
 _id: 373,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1460,
 Object: "Handle_110_StainlessSteel_1460"
}
,{
 _id: 374,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1560,
 Object: "Handle_110_StainlessSteel_1560"
}
,{
 _id: 375,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1760,
 Object: "Handle_110_StainlessSteel_1760"
}
,{
 _id: 376,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 1960,
 Object: "Handle_110_StainlessSteel_1960"
}
,{
 _id: 377,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 96,
 Object: "Handle_110_StainlessSteel_96"
}
,{
 _id: 378,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 128,
 Object: "Handle_110_StainlessSteel_128"
}
,{
 _id: 379,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 160,
 Object: "Handle_110_StainlessSteel_160"
}
,{
 _id: 380,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 210,
 Object: "Handle_110_StainlessSteel_210"
}
,{
 _id: 381,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 260,
 Object: "Handle_110_StainlessSteel_260"
}
,{
 _id: 382,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 310,
 Object: "Handle_110_StainlessSteel_310"
}
,{
 _id: 383,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 360,
 Object: "Handle_110_StainlessSteel_360"
}
,{
 _id: 384,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 410,
 Object: "Handle_110_StainlessSteel_410"
}
,{
 _id: 385,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 460,
 Object: "Handle_110_StainlessSteel_460"
}
,{
 _id: 386,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 560,
 Object: "Handle_110_StainlessSteel_560"
}
,{
 _id: 387,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 660,
 Object: "Handle_110_StainlessSteel_660"
}
,{
 _id: 388,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 760,
 Object: "Handle_110_StainlessSteel_760"
}
,{
 _id: 389,
 in_HandleDesign: "110",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 860,
 Object: "Handle_110_StainlessSteel_860"
}
,{
 _id: 390,
 in_HandleDesign: "120",
 in_HandleColor: "Black",
 in_HandlePosType: "All",
 in_HandleLength: 5,
 Object: "Handle_120_Black"
}
,{
 _id: 391,
 in_HandleDesign: "120",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 5,
 Object: "Handle_120_StainlessSteel"
}
,{
 _id: 392,
 in_HandleDesign: "130",
 in_HandleColor: "StainlessSteel",
 in_HandlePosType: "All",
 in_HandleLength: 5,
 Object: "Handle_130_StainlessSteel"
}
,{
 _id: 393,
 in_HandleDesign: "130",
 in_HandleColor: "Black",
 in_HandlePosType: "All",
 in_HandleLength: 5,
 Object: "Handle_130_Black"
}
,{
 _id: 394,
 in_HandleDesign: "130",
 in_HandleColor: "BrassPlatedAntique",
 in_HandlePosType: "All",
 in_HandleLength: 5,
 Object: "Handle_130_BrassPlatedAntique"
}
];
