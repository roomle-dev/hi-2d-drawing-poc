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

export interface cti_tab_DrawerBoxMapping {
  readonly in_BoxDesign? : string;
  readonly in_BoxProgram? : string;
  readonly in_BoxColor? : string;
  readonly in_BoxDepth? : string;
  readonly in_BoxHeight? : string;
  readonly in_BoxWeight? : string;
  readonly in_OpeningType? : string;
}

export interface ctm_tab_DrawerBoxMapping {
}

export interface cto_tab_DrawerBoxMapping extends ctm_tab_DrawerBoxMapping {
  readonly _id : number;
  readonly ConstructionId? : string;
  readonly ObjectBox? : string;
  readonly ObjectFrontConnector? : string;
}

export interface ICT_tab_DrawerBoxMapping
extends cti_tab_DrawerBoxMapping, cto_tab_DrawerBoxMapping {}

export class ct2_tab_DrawerBoxMapping {

public findExactly(
     in_BoxDesign: string|undefined,
     in_BoxProgram: string|undefined,
     in_BoxColor: string|undefined,
     in_BoxDepth: string|undefined,
     in_BoxHeight: string|undefined,
     in_BoxWeight: string|undefined,
     in_OpeningType: string|undefined,
): cto_tab_DrawerBoxMapping | undefined {
  const res = ct_tab_DrawerBoxMapping.find((p) => 
p.in_BoxDesign === in_BoxDesign
 && p.in_BoxProgram === in_BoxProgram
 && p.in_BoxColor === in_BoxColor
 && p.in_BoxDepth === in_BoxDepth
 && p.in_BoxHeight === in_BoxHeight
 && p.in_BoxWeight === in_BoxWeight
 && p.in_OpeningType === in_OpeningType
);
return res;
}

public find(
predicate: (value: cti_tab_DrawerBoxMapping) => boolean
): cto_tab_DrawerBoxMapping | undefined {
  for (let index = 0; index < ct_tab_DrawerBoxMapping.length; index++){
    const element = ct_tab_DrawerBoxMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_DrawerBoxMapping :ICT_tab_DrawerBoxMapping[] = [
{
 _id: 563,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Inox_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 564,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Inox_450_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 565,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Inox_500_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 566,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Inox_550_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 567,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Inox_600_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 568,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Inox_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 569,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Inox_450_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 570,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Inox_550_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 571,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_Terra_270_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 572,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Inox_600_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 573,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Inox_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 574,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Terra_400_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 575,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Terra_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 576,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Terra_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 577,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Terra_550_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 578,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Inox_550_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 579,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Inox_500_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 580,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Inox_450_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 581,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Inox_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 582,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Inox_600_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 583,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Inox_550_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 584,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Inox_500_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 585,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Inox_450_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 586,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Inox_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 587,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Inox_600_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 588,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Inox_550_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 589,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Inox_500_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 590,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Inox_450_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 591,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Inox_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 592,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Inox_600_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 593,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Inox_550_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 594,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Inox_500_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 595,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Inox_500_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 596,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_Terra_300_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 597,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_Terra_350_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 598,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_Terra_400_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 599,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Terra_550_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 600,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Terra_600_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 601,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Terra_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 602,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_Terra_400_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 603,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Terra_450_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 604,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Terra_500_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 605,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Terra_600_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 606,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_Terra_300_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 607,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Terra_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 608,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Terra_400_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 609,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Terra_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 610,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Terra_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 611,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Terra_550_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 612,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_Terra_270_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 613,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Terra_500_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 614,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Terra_550_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 615,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Terra_450_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 616,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_Terra_350_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 617,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Terra_450_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 618,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Terra_500_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 619,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Terra_550_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 620,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Terra_600_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 621,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Terra_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 622,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "300",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_K",
 ObjectBox: "Legra_Terra_300_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 623,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_Terra_400_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 624,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_Terra_350_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 625,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Terra_450_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 626,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Terra_500_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 627,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Terra_550_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 628,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Terra_600_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 629,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_Terra_270_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 630,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_Terra_300_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 631,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Inox_450_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 632,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Inox_550_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 633,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Inox_500_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 634,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_Inox_270_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 635,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_Inox_350_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 636,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_Inox_400_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 637,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Inox_450_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 638,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Inox_500_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 639,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Inox_550_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 640,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Inox_600_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 641,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_Inox_400_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 642,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Inox_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 643,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Inox_450_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 644,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Inox_500_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 645,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Inox_550_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 646,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Inox_600_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 647,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Inox_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 648,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Inox_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 649,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_Inox_300_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 650,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_Inox_270_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 651,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Inox_550_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 652,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Inox_500_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 653,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Inox_450_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 654,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_Inox_400_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 655,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_Inox_350_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 656,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Inox_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 657,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Inox_600_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 658,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Inox_550_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 659,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Inox_500_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 660,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Inox_450_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 661,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_Inox_400_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 662,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_Inox_350_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 663,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_Inox_300_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 664,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_Inox_270_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 665,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Inox_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 666,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Inox_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 667,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_Inox_300_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 668,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Inox_550_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 669,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_Inox_350_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 670,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Inox_550_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 671,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Inox_600_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 672,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Inox_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 673,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_Inox_400_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 674,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Inox_450_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 675,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Inox_500_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 676,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Inox_600_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 677,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Inox_450_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 678,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Inox_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 679,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Inox_450_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 680,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Inox_500_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 681,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Inox_550_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 682,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Inox_600_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 683,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Inox_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 684,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Inox_500_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 685,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Inox_450_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 686,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_Inox_400_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 687,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_Inox_350_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 688,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_Inox_300_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 689,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_Inox_270_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 690,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Inox_550_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 691,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Inox_500_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 692,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Inox_450_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 693,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_Inox_400_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 694,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_Inox_350_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 695,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Inox_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 696,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Inox_600_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 697,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Inox_550_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 698,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Inox_500_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 699,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Inox_450_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 700,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_Inox_400_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 701,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_Terra_400_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 702,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_Terra_350_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 703,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_Terra_400_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 704,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Terra_450_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 705,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Terra_500_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 706,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Terra_550_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 707,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Terra_600_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 708,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Terra_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 709,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "300",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_K",
 ObjectBox: "Legra_Terra_300_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 710,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_Terra_350_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 711,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_Terra_400_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 712,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Terra_450_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 713,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Terra_500_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 714,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Terra_550_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 715,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Terra_600_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 716,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_Terra_270_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 717,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_Terra_300_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 718,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_Terra_350_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 719,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_Terra_400_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 720,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Terra_450_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 721,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Terra_500_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 722,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Terra_550_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 723,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Terra_600_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 724,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Terra_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 725,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_Terra_400_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 726,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Terra_450_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 727,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Terra_500_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 728,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Terra_550_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 729,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Terra_600_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 730,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Terra_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 731,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Terra_450_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 732,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Terra_500_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 733,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Terra_550_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 734,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Terra_600_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 735,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Terra_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 736,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Terra_450_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 737,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Terra_500_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 738,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Terra_550_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 739,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Terra_600_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 740,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Terra_450_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 741,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Terra_500_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 742,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Terra_550_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 743,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Terra_600_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 744,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Terra_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 745,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Terra_450_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 746,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Terra_500_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 747,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Terra_550_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 748,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Terra_600_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 749,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Terra_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 750,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Terra_450_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 751,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Terra_500_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 752,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Terra_550_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 753,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Terra_600_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 754,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Terra_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 755,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Terra_450_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 756,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Terra_500_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 757,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Terra_550_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 758,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Terra_600_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 759,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Terra_450_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 760,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Terra_500_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 761,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Terra_550_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 762,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Terra_600_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 763,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Terra_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 764,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Terra_450_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 765,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Terra_500_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 766,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Terra_550_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 767,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Terra_600_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 768,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Terra_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 769,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Orion_400_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 770,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Orion_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 771,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Orion_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 772,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Orion_550_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 773,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_Orion_270_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 774,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_Orion_300_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 775,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_Orion_350_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 776,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_Orion_400_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 777,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Orion_450_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 778,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Orion_500_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 779,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Orion_550_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 780,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Orion_600_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 781,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Orion_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 782,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "300",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_K",
 ObjectBox: "Legra_Orion_300_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 783,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_Orion_350_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 784,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_Orion_400_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 785,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Orion_450_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 786,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Orion_500_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 787,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Orion_550_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 788,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Orion_600_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 789,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_Orion_270_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 790,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_Orion_300_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 791,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_Orion_350_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 792,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_Orion_400_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 793,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Orion_450_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 794,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Orion_500_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 795,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Orion_550_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 796,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Orion_600_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 797,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Orion_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 798,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_Orion_400_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 799,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Orion_450_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 800,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Orion_500_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 801,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Orion_550_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 802,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Orion_600_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 803,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Orion_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 804,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Orion_400_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 805,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Orion_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 806,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Orion_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 807,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Orion_550_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 808,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_Orion_270_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 809,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_Orion_300_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 810,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_Orion_350_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 811,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_Orion_400_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 812,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Orion_450_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 813,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Orion_500_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 814,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Orion_550_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 815,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Orion_600_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 816,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Orion_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 817,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "300",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_K",
 ObjectBox: "Legra_Orion_300_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 818,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_Orion_350_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 819,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_Orion_400_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 820,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Orion_450_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 821,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Orion_500_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 822,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Orion_550_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 823,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Orion_600_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 824,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_Orion_270_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 825,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_Orion_300_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 826,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_Orion_350_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 827,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_Orion_400_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 828,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Orion_450_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 829,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Orion_500_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 830,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Orion_550_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 831,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Orion_600_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 832,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Orion_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 833,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_Orion_400_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 834,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Orion_450_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 835,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Orion_500_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 836,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Orion_550_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 837,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Orion_600_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 838,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Orion_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 839,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Orion_450_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 840,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Orion_500_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 841,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Orion_550_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 842,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Orion_600_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 843,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Orion_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 844,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Orion_450_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 845,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Orion_500_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 846,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Orion_550_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 847,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Orion_600_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 848,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Orion_450_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 849,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Orion_500_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 850,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Orion_550_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 851,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Orion_600_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 852,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Orion_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 853,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Orion_450_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 854,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Orion_500_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 855,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Orion_550_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 856,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Orion_600_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 857,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Orion_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 858,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_Orion_450_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 859,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_Orion_500_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 860,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_Orion_550_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 861,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_Orion_600_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 862,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_Orion_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 863,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_Orion_450_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 864,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_Orion_500_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 865,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_Orion_550_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 866,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_Orion_600_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 867,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_Orion_450_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 868,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_Orion_500_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 869,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_Orion_550_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 870,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_Orion_600_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 871,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_Orion_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 872,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_Orion_450_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 873,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_Orion_500_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 874,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_Orion_550_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 875,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_Orion_600_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 876,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_Orion_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 877,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_White_400_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 878,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_White_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 879,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_White_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 880,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_White_550_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 881,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_White_270_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 882,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_White_300_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 883,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_White_350_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 884,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_White_400_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 885,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_White_450_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 886,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_White_500_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 887,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_White_550_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 888,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_White_600_M",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 889,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_White_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 890,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "300",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_K",
 ObjectBox: "Legra_White_300_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 891,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_White_350_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 892,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_White_400_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 893,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_White_450_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 894,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_White_500_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 895,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_White_550_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 896,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_White_600_K",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 897,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_White_270_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 898,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_White_300_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 899,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_White_350_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 900,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_White_400_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 901,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_White_450_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 902,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_White_500_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 903,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_White_550_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 904,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_White_600_C",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 905,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_White_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 906,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_White_400_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 907,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_White_450_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 908,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_White_500_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 909,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_White_550_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 910,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_White_600_F",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 911,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_White_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 912,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_White_400_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 913,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_White_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 914,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_White_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 915,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_White_550_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 916,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "270",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_M",
 ObjectBox: "Legra_White_270_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 917,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "300",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_M",
 ObjectBox: "Legra_White_300_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 918,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "350",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_M",
 ObjectBox: "Legra_White_350_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 919,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_M",
 ObjectBox: "Legra_White_400_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 920,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_White_450_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 921,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_White_500_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 922,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_White_550_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 923,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_White_600_M_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 924,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_White_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 925,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "300",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_K",
 ObjectBox: "Legra_White_300_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 926,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "350",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_K",
 ObjectBox: "Legra_White_350_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 927,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_K",
 ObjectBox: "Legra_White_400_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 928,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_White_450_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 929,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_White_500_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 930,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_White_550_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 931,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_White_600_K_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 932,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "270",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_270_C",
 ObjectBox: "Legra_White_270_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 933,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "300",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_300_C",
 ObjectBox: "Legra_White_300_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 934,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "350",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_350_C",
 ObjectBox: "Legra_White_350_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 935,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_C",
 ObjectBox: "Legra_White_400_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 936,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_White_450_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 937,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_White_500_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 938,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_White_550_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 939,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_White_600_C_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 940,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_White_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 941,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_F",
 ObjectBox: "Legra_White_400_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 942,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_White_450_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 943,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_White_500_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 944,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_White_550_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 945,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_White_600_F_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 946,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Standard",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_White_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 947,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_White_450_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 948,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_White_500_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 949,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_White_550_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 950,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_White_600_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 951,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_White_650_M_Heavy",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 952,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_White_450_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 953,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_White_500_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 954,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_White_550_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 955,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_White_600_K_Heavy",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 956,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_White_450_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 957,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_White_500_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 958,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_White_550_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 959,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_White_600_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 960,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_White_650_C_Heavy",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 961,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_White_450_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 962,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_White_500_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 963,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_White_550_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 964,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_White_600_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 965,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_White_650_F_Heavy",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 966,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_M",
 ObjectBox: "Legra_White_450_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 967,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_M",
 ObjectBox: "Legra_White_500_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 968,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_M",
 ObjectBox: "Legra_White_550_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 969,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_M",
 ObjectBox: "Legra_White_600_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 970,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "M",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_M",
 ObjectBox: "Legra_White_650_M_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_M"
}
,{
 _id: 971,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_K",
 ObjectBox: "Legra_White_450_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 972,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_K",
 ObjectBox: "Legra_White_500_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 973,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_K",
 ObjectBox: "Legra_White_550_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 974,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "K",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_K",
 ObjectBox: "Legra_White_600_K_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_K"
}
,{
 _id: 975,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_C",
 ObjectBox: "Legra_White_450_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 976,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_C",
 ObjectBox: "Legra_White_500_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 977,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_C",
 ObjectBox: "Legra_White_550_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 978,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_C",
 ObjectBox: "Legra_White_600_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 979,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "C",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_C",
 ObjectBox: "Legra_White_650_C_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_C"
}
,{
 _id: 980,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_F",
 ObjectBox: "Legra_White_450_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 981,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_F",
 ObjectBox: "Legra_White_500_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 982,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_F",
 ObjectBox: "Legra_White_550_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 983,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "600",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_600_F",
 ObjectBox: "Legra_White_600_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 984,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "650",
 in_BoxHeight: "F",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_650_F",
 ObjectBox: "Legra_White_650_F_Heavy_PTO",
 ObjectFrontConnector: "Legra_Connector_F"
}
,{
 _id: 985,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Inox_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 986,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Terra_400_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 987,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Terra_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 988,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Terra_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 989,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Terra_550_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 990,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Terra_400_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 991,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Terra_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 992,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Terra_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 993,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Terra",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Terra_550_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 994,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Inox_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 995,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Inox_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 996,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Inox",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Inox_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 997,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Orion_400_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 998,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Orion_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 999,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Orion_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1000,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Orion_550_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1001,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_Orion_400_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1002,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_Orion_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1003,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_Orion_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1004,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "Orion",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_Orion_550_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1005,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_White_400_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1006,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_White_450_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1007,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_White_500_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1008,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "Handle",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_White_550_N",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1009,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "400",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_400_N",
 ObjectBox: "Legra_White_400_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1010,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "450",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_450_N",
 ObjectBox: "Legra_White_450_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1011,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "500",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_500_N",
 ObjectBox: "Legra_White_500_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
,{
 _id: 1012,
 in_BoxDesign: "Legrabox",
 in_BoxProgram: "Pure",
 in_BoxColor: "White",
 in_BoxDepth: "550",
 in_BoxHeight: "N",
 in_BoxWeight: "Heavy",
 in_OpeningType: "PushToOpenManual",
 ConstructionId: "Legra_550_N",
 ObjectBox: "Legra_White_550_N_PTO",
 ObjectFrontConnector: "Legra_Connector_N"
}
];
