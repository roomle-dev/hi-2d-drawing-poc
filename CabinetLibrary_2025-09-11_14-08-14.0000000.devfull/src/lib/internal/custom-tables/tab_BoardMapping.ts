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

export interface cti_tab_BoardMapping {
  readonly in_NeutralColor? : string;
  readonly in_BoardThkMin : number;
  readonly in_BoardThkMax : number;
}

export interface ctm_tab_BoardMapping {
}

export interface cto_tab_BoardMapping extends ctm_tab_BoardMapping {
  readonly _id : number;
  readonly BoardId? : string;
}

export interface ICT_tab_BoardMapping
extends cti_tab_BoardMapping, cto_tab_BoardMapping {}

export class ct2_tab_BoardMapping {

public findExactly(
     in_NeutralColor: string|undefined,
     in_BoardThkMin: number,
     in_BoardThkMax: number,
): cto_tab_BoardMapping | undefined {
  const res = ct_tab_BoardMapping.find((p) => 
p.in_NeutralColor === in_NeutralColor
 && p.in_BoardThkMin === in_BoardThkMin
 && p.in_BoardThkMax === in_BoardThkMax
);
return res;
}

public find(
predicate: (value: cti_tab_BoardMapping) => boolean
): cto_tab_BoardMapping | undefined {
  for (let index = 0; index < ct_tab_BoardMapping.length; index++){
    const element = ct_tab_BoardMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_BoardMapping :ICT_tab_BoardMapping[] = [
{
 _id: 287,
 in_NeutralColor: "152",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "U502ST9_38"
}
,{
 _id: 288,
 in_NeutralColor: "152",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "U502ST9_8"
}
,{
 _id: 289,
 in_NeutralColor: "152",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "U502ST9_16"
}
,{
 _id: 290,
 in_NeutralColor: "152",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "U502ST9_19"
}
,{
 _id: 291,
 in_NeutralColor: "152",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "U502ST9_25"
}
,{
 _id: 292,
 in_NeutralColor: "155",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "U575ST9_25"
}
,{
 _id: 293,
 in_NeutralColor: "155",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "U575ST9_16"
}
,{
 _id: 294,
 in_NeutralColor: "155",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "U575ST9_8"
}
,{
 _id: 295,
 in_NeutralColor: "155",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "U575ST9_38"
}
,{
 _id: 296,
 in_NeutralColor: "155",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "U575ST9_19"
}
,{
 _id: 297,
 in_NeutralColor: "160",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "U640ST9_38"
}
,{
 _id: 298,
 in_NeutralColor: "160",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "U640ST9_8"
}
,{
 _id: 299,
 in_NeutralColor: "160",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "U640ST9_16"
}
,{
 _id: 300,
 in_NeutralColor: "160",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "U640ST9_25"
}
,{
 _id: 301,
 in_NeutralColor: "160",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "U640ST9_19"
}
,{
 _id: 302,
 in_NeutralColor: "165",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "U645ST9_19"
}
,{
 _id: 303,
 in_NeutralColor: "165",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "U645ST9_16"
}
,{
 _id: 304,
 in_NeutralColor: "165",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "U645ST9_8"
}
,{
 _id: 305,
 in_NeutralColor: "165",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "U645ST9_38"
}
,{
 _id: 306,
 in_NeutralColor: "165",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "U645ST9_25"
}
,{
 _id: 307,
 in_NeutralColor: "190",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "W980ST7_25"
}
,{
 _id: 308,
 in_NeutralColor: "190",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "W980ST7_38"
}
,{
 _id: 309,
 in_NeutralColor: "190",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "W980ST7_19"
}
,{
 _id: 310,
 in_NeutralColor: "190",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "W980ST7_16"
}
,{
 _id: 311,
 in_NeutralColor: "190",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "W980ST7_8"
}
,{
 _id: 312,
 in_NeutralColor: "199",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "U999ST7_38"
}
,{
 _id: 313,
 in_NeutralColor: "199",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "U999ST7_8"
}
,{
 _id: 314,
 in_NeutralColor: "199",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "U999ST7_16"
}
,{
 _id: 315,
 in_NeutralColor: "199",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "U999ST7_19"
}
,{
 _id: 316,
 in_NeutralColor: "199",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "U999ST7_19"
}
,{
 _id: 317,
 in_NeutralColor: "230",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "H3860ST9_38"
}
,{
 _id: 318,
 in_NeutralColor: "230",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "H3860ST9_16"
}
,{
 _id: 319,
 in_NeutralColor: "230",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "H3860ST9_19"
}
,{
 _id: 320,
 in_NeutralColor: "230",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "H3860ST9_25"
}
,{
 _id: 321,
 in_NeutralColor: "230",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "H3860ST9_8"
}
,{
 _id: 322,
 in_NeutralColor: "215",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "H1715ST12_19"
}
,{
 _id: 323,
 in_NeutralColor: "215",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "H1715ST12_8"
}
,{
 _id: 324,
 in_NeutralColor: "215",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "H1715ST12_38"
}
,{
 _id: 325,
 in_NeutralColor: "215",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "H1715ST12_25"
}
,{
 _id: 326,
 in_NeutralColor: "215",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "H1715ST12_16"
}
,{
 _id: 327,
 in_NeutralColor: "214",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "H3734ST9_19"
}
,{
 _id: 328,
 in_NeutralColor: "214",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "H3734ST9_8"
}
,{
 _id: 329,
 in_NeutralColor: "214",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "H3734ST9_38"
}
,{
 _id: 330,
 in_NeutralColor: "214",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "H3734ST9_25"
}
,{
 _id: 331,
 in_NeutralColor: "214",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "H3734ST9_16"
}
,{
 _id: 332,
 in_NeutralColor: "240",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "H3190ST19_25"
}
,{
 _id: 333,
 in_NeutralColor: "240",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "H3190ST19_38"
}
,{
 _id: 334,
 in_NeutralColor: "240",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "H3190ST19_19"
}
,{
 _id: 335,
 in_NeutralColor: "240",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "H3190ST19_8"
}
,{
 _id: 336,
 in_NeutralColor: "240",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "H3190ST19_16"
}
,{
 _id: 337,
 in_NeutralColor: "326",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "F235ST76_25"
}
,{
 _id: 338,
 in_NeutralColor: "326",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "F235ST76_19"
}
,{
 _id: 339,
 in_NeutralColor: "326",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "F235ST76_16"
}
,{
 _id: 340,
 in_NeutralColor: "326",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "F235ST76_8"
}
,{
 _id: 341,
 in_NeutralColor: "326",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "F235ST76_38"
}
,{
 _id: 342,
 in_NeutralColor: "316",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "F186ST9_25"
}
,{
 _id: 343,
 in_NeutralColor: "316",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "F186ST9_19"
}
,{
 _id: 344,
 in_NeutralColor: "316",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "F186ST9_16"
}
,{
 _id: 345,
 in_NeutralColor: "316",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "F186ST9_38"
}
,{
 _id: 346,
 in_NeutralColor: "316",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "F186ST9_8"
}
,{
 _id: 347,
 in_NeutralColor: "324",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "F244ST76_25"
}
,{
 _id: 348,
 in_NeutralColor: "324",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "F244ST76_19"
}
,{
 _id: 349,
 in_NeutralColor: "324",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "F244ST76_16"
}
,{
 _id: 350,
 in_NeutralColor: "324",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "F244ST76_8"
}
,{
 _id: 351,
 in_NeutralColor: "324",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "F244ST76_38"
}
,{
 _id: 352,
 in_NeutralColor: "380",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "F800ST9_25"
}
,{
 _id: 353,
 in_NeutralColor: "380",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "F800ST9_19"
}
,{
 _id: 354,
 in_NeutralColor: "380",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "F800ST9_16"
}
,{
 _id: 355,
 in_NeutralColor: "380",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "F800ST9_8"
}
,{
 _id: 356,
 in_NeutralColor: "380",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "F800ST9_38"
}
,{
 _id: 357,
 in_NeutralColor: "222",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "H2033ST10_38"
}
,{
 _id: 358,
 in_NeutralColor: "222",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "H2033ST10_8"
}
,{
 _id: 359,
 in_NeutralColor: "222",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "H2033ST10_25"
}
,{
 _id: 360,
 in_NeutralColor: "222",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "H2033ST10_19"
}
,{
 _id: 361,
 in_NeutralColor: "222",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "H2033ST10_16"
}
,{
 _id: 362,
 in_NeutralColor: "229",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "H1199ST12_38"
}
,{
 _id: 363,
 in_NeutralColor: "229",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "H1199ST12_8"
}
,{
 _id: 364,
 in_NeutralColor: "229",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "H1199ST12_25"
}
,{
 _id: 365,
 in_NeutralColor: "229",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "H1199ST12_19"
}
,{
 _id: 366,
 in_NeutralColor: "229",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "H1199ST12_16"
}
,{
 _id: 367,
 in_NeutralColor: "178",
 in_BoardThkMin: 15,
 in_BoardThkMax: 17,
 BoardId: "U708ST9_16"
}
,{
 _id: 368,
 in_NeutralColor: "178",
 in_BoardThkMin: 18,
 in_BoardThkMax: 20,
 BoardId: "U708ST9_19"
}
,{
 _id: 369,
 in_NeutralColor: "178",
 in_BoardThkMin: 20,
 in_BoardThkMax: 30,
 BoardId: "U708ST9_25"
}
,{
 _id: 370,
 in_NeutralColor: "178",
 in_BoardThkMin: 30,
 in_BoardThkMax: 99,
 BoardId: "U708ST9_38"
}
,{
 _id: 371,
 in_NeutralColor: "178",
 in_BoardThkMin: 7,
 in_BoardThkMax: 9,
 BoardId: "U708ST9_8"
}
];
