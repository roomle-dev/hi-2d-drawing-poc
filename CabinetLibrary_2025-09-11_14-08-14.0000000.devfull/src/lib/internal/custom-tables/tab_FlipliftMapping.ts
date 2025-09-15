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

export interface cti_tab_FlipliftMapping {
  readonly in_FlipliftType? : string;
  readonly in_HardwareType? : string;
  readonly in_WeightTypeMin : number;
  readonly in_WeightTypeMax : number;
  readonly in_HeightMin : number;
  readonly in_HeightMax : number;
  readonly in_Direction? : string;
  readonly in_Color? : string;
}

export interface ctm_tab_FlipliftMapping {
}

export interface cto_tab_FlipliftMapping extends ctm_tab_FlipliftMapping {
  readonly _id : number;
  readonly CarcaseObject? : string;
  readonly FrontObject? : string;
  readonly MechanismObject? : string;
  readonly ConstructionId? : string;
  readonly HingeClass? : string;
  readonly HardwareObject? : string;
  readonly OpeningAngle : number;
}

export interface ICT_tab_FlipliftMapping
extends cti_tab_FlipliftMapping, cto_tab_FlipliftMapping {}

export class ct2_tab_FlipliftMapping {

public findExactly(
     in_FlipliftType: string|undefined,
     in_HardwareType: string|undefined,
     in_WeightTypeMin: number,
     in_WeightTypeMax: number,
     in_HeightMin: number,
     in_HeightMax: number,
     in_Direction: string|undefined,
     in_Color: string|undefined,
): cto_tab_FlipliftMapping | undefined {
  const res = ct_tab_FlipliftMapping.find((p) => 
p.in_FlipliftType === in_FlipliftType
 && p.in_HardwareType === in_HardwareType
 && p.in_WeightTypeMin === in_WeightTypeMin
 && p.in_WeightTypeMax === in_WeightTypeMax
 && p.in_HeightMin === in_HeightMin
 && p.in_HeightMax === in_HeightMax
 && p.in_Direction === in_Direction
 && p.in_Color === in_Color
);
return res;
}

public find(
predicate: (value: cti_tab_FlipliftMapping) => boolean
): cto_tab_FlipliftMapping | undefined {
  for (let index = 0; index < ct_tab_FlipliftMapping.length; index++){
    const element = ct_tab_FlipliftMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_FlipliftMapping :ICT_tab_FlipliftMapping[] = [
{
 _id: 183,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_2_R_Grey",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HF_top_1_R",
 OpeningAngle: 110
}
,{
 _id: 184,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HS_top_2_R_Black",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_1_R",
 OpeningAngle: 0
}
,{
 _id: 185,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 3501,
 in_WeightTypeMax: 9000,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_4_L_White",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_1_L",
 OpeningAngle: 110
}
,{
 _id: 186,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_1_L_White",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HF_top_1_L",
 OpeningAngle: 110
}
,{
 _id: 187,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_1_R_White",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_4_L",
 OpeningAngle: 110
}
,{
 _id: 188,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_1_R_White",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_1_L",
 OpeningAngle: 110
}
,{
 _id: 189,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_1_L_White",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_3_L",
 OpeningAngle: 110
}
,{
 _id: 190,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_1_R_White",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_3_R",
 OpeningAngle: 110
}
,{
 _id: 191,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_2_L_White",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_4_R",
 OpeningAngle: 110
}
,{
 _id: 192,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "Aventos_HL_top_1_R",
 OpeningAngle: 0
}
,{
 _id: 193,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_2_L",
 OpeningAngle: 0
}
,{
 _id: 194,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_2_R_White",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HF_top_2_R",
 OpeningAngle: 110
}
,{
 _id: 195,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_2_L",
 OpeningAngle: 0
}
,{
 _id: 196,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_2_L_White",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HF_top_2_R",
 OpeningAngle: 110
}
,{
 _id: 197,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_2_L_White",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HF_top_2_R",
 OpeningAngle: 110
}
,{
 _id: 198,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_2_L",
 OpeningAngle: 0
}
,{
 _id: 199,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_1_L",
 OpeningAngle: 0
}
,{
 _id: 200,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "Aventos_HF_top_1_R",
 OpeningAngle: 0
}
,{
 _id: 201,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "Aventos_HK_top_2_L",
 OpeningAngle: 0
}
,{
 _id: 202,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "Aventos_HK_top_3_L",
 OpeningAngle: 0
}
,{
 _id: 203,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 3501,
 in_WeightTypeMax: 9000,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_4_R_White",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "Aventos_HK_top_3_R",
 OpeningAngle: 110
}
,{
 _id: 204,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_2_R_White",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_top_4_L",
 OpeningAngle: 110
}
,{
 _id: 205,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_1_L_White",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_top_4_R",
 OpeningAngle: 110
}
,{
 _id: 206,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HF_top_2_R_White",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HS_top_3_R",
 OpeningAngle: 110
}
,{
 _id: 207,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_2_L_Grey",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HS_top_1_R",
 OpeningAngle: 110
}
,{
 _id: 208,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_2_R_Grey",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_top_2_R",
 OpeningAngle: 110
}
,{
 _id: 209,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_1_L_Black",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HS_top_2_L",
 OpeningAngle: 110
}
,{
 _id: 210,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_1_R_Black",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HS_top_2_R",
 OpeningAngle: 110
}
,{
 _id: 211,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_1_L_Black",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HS_top_3_L",
 OpeningAngle: 110
}
,{
 _id: 212,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_1_R_Black",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HS_top_1_L",
 OpeningAngle: 110
}
,{
 _id: 213,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_2_L_Black",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_2_R",
 OpeningAngle: 110
}
,{
 _id: 214,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_2_R_Black",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HL_top_2_L",
 OpeningAngle: 110
}
,{
 _id: 215,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_2_L_Black",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "DropDownHinge_L",
 OpeningAngle: 110
}
,{
 _id: 216,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_2_R_Black",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "DropDownHinge_R",
 OpeningAngle: 110
}
,{
 _id: 217,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_2_L_Black",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_top_1_L",
 OpeningAngle: 110
}
,{
 _id: 218,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_2_R_Black",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_top_1_R",
 OpeningAngle: 110
}
,{
 _id: 219,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_1_L_Grey",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_XS_3_R",
 OpeningAngle: 110
}
,{
 _id: 220,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_1_R_Grey",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_XS_3_L",
 OpeningAngle: 110
}
,{
 _id: 221,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_1_L_Grey",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_XS_2_R",
 OpeningAngle: 110
}
,{
 _id: 222,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_1_R_Grey",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_XS_2_L",
 OpeningAngle: 110
}
,{
 _id: 223,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_1_L_Grey",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "Aventos_HK_XS_1_R",
 OpeningAngle: 110
}
,{
 _id: 224,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "Aventos_HK_XS_1_L",
 OpeningAngle: 0
}
,{
 _id: 225,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 226,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 227,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 228,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 229,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 230,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 231,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 232,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 233,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 234,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 235,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 236,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 237,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 238,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_2_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 239,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 240,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 241,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 242,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 243,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 244,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 245,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 246,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 247,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 248,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 249,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 250,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 251,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 252,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 253,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 254,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 255,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_4_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 256,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_3_R_White",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 257,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 258,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_4_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 259,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HL_top_1_L_White",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 260,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 261,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 262,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 263,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 264,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 265,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_1_R_Black",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 266,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_3_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 267,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 268,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 269,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 270,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 271,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 272,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 273,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HF_top_1_L_Black",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 274,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 275,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 276,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 277,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 278,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 279,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 280,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 281,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 282,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_2_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 283,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 284,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 285,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 286,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 287,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 288,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 289,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 290,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 291,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 2700,
 in_WeightTypeMax: 11000,
 in_HeightMin: 880,
 in_HeightMax: 1200,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_1_R_Grey",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_840",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 292,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_2_L_Grey",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 293,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1201,
 in_WeightTypeMax: 1950,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_2_L_Black",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 294,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1201,
 in_WeightTypeMax: 1950,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_2_R_Black",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 295,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1951,
 in_WeightTypeMax: 3500,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_3_L_Black",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 296,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1951,
 in_WeightTypeMax: 3500,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_3_R_Black",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 297,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 3501,
 in_WeightTypeMax: 9000,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_4_L_Black",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 298,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 3501,
 in_WeightTypeMax: 9000,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_4_R_Black",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 299,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 420,
 in_WeightTypeMax: 1200,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_1_R_Grey",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 300,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 420,
 in_WeightTypeMax: 1200,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_1_L_Grey",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 301,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1201,
 in_WeightTypeMax: 1950,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_2_R_Grey",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 302,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 420,
 in_WeightTypeMax: 1200,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_1_L_Black",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 303,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1951,
 in_WeightTypeMax: 3500,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_3_L_Grey",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 304,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1951,
 in_WeightTypeMax: 3500,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_3_R_Grey",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 305,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 3501,
 in_WeightTypeMax: 9000,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_4_L_Grey",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 306,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 3501,
 in_WeightTypeMax: 9000,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_4_R_Grey",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 307,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 420,
 in_WeightTypeMax: 1200,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_1_R_White",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 308,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 420,
 in_WeightTypeMax: 1200,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_1_L_White",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 309,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1201,
 in_WeightTypeMax: 1950,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_2_L_White",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 310,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1201,
 in_WeightTypeMax: 1950,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_2_R_White",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 311,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1951,
 in_WeightTypeMax: 3500,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_3_L_White",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 312,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1951,
 in_WeightTypeMax: 3500,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HK_top_3_R_White",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 313,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 1201,
 in_WeightTypeMax: 1950,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HK_top_2_L_Grey",
 FrontObject: "Aventos_HK_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 314,
 in_FlipliftType: "UF",
 in_HardwareType: "Gasspring",
 in_WeightTypeMin: 901,
 in_WeightTypeMax: 1800,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Metal",
 CarcaseObject: "Aventos_HKXS_R",
 FrontObject: "Aventos_HKXS_Front_R",
 MechanismObject: "Aventos_HK_XS_3_R",
 ConstructionId: "Aventos_HK_XS",
 HingeClass: "Gasspring_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 315,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HS_top_3_R_Black",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 316,
 in_FlipliftType: "UF",
 in_HardwareType: "Gasspring",
 in_WeightTypeMin: 901,
 in_WeightTypeMax: 1800,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Metal",
 CarcaseObject: "Aventos_HKXS_L",
 FrontObject: "Aventos_HKXS_Front_L",
 MechanismObject: "Aventos_HK_XS_3_L",
 ConstructionId: "Aventos_HK_XS",
 HingeClass: "Gasspring_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 317,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HS_top_1_R_Black",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 318,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HS_top_2_L_Black",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 319,
 in_FlipliftType: "DF",
 in_HardwareType: "DropDownHinge",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 9999,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Metal",
 CarcaseObject: "DropDownHinge_R",
 FrontObject: "DropDownFront_R",
 MechanismObject: "None",
 ConstructionId: "DropDownHinge",
 HingeClass: "DropDownHinge_Btm",
 HardwareObject: "",
 OpeningAngle: 90
}
,{
 _id: 320,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HS_top_3_L_Black",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 321,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HS_top_1_L_Black",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 322,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HS_top_3_R_Grey",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 323,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HS_top_1_R_Grey",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 324,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HS_top_2_L_Grey",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 325,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HS_top_2_R_Grey",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 326,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HS_top_3_L_Grey",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 327,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 328,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HS_top_1_L_Grey",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 329,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_1_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 330,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 331,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 332,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 333,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HS_top_3_R_White",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 334,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 335,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 336,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 337,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_1_R",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 338,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 339,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 340,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 300,
 in_HeightMax: 340,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_1_L",
 ConstructionId: "Aventos_HL_top_1",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 341,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 342,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_2_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 343,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 344,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_L_Grey",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 345,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_4_R",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 346,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HL_top_1_R_Grey",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_3_R",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 347,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HS_top_1_R_White",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 348,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HS_top_2_L_White",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 349,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 12,
 in_WeightTypeMax: 21,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "White",
 CarcaseObject: "Aventos_HS_top_2_R_White",
 FrontObject: "Aventos_HS_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 350,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HS_top_3_L_White",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 351,
 in_FlipliftType: "UF",
 in_HardwareType: "Gasspring",
 in_WeightTypeMin: 200,
 in_WeightTypeMax: 600,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Metal",
 CarcaseObject: "Aventos_HKXS_R",
 FrontObject: "Aventos_HKXS_Front_R",
 MechanismObject: "Aventos_HK_XS_1_R",
 ConstructionId: "Aventos_HK_XS",
 HingeClass: "Gasspring_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 352,
 in_FlipliftType: "UF",
 in_HardwareType: "Gasspring",
 in_WeightTypeMin: 601,
 in_WeightTypeMax: 900,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Metal",
 CarcaseObject: "Aventos_HKXS_L",
 FrontObject: "Aventos_HKXS_Front_L",
 MechanismObject: "Aventos_HK_XS_2_L",
 ConstructionId: "Aventos_HK_XS",
 HingeClass: "Gasspring_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 353,
 in_FlipliftType: "UF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 420,
 in_WeightTypeMax: 1200,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HK_top_1_R_Black",
 FrontObject: "Aventos_HK_Front_R",
 MechanismObject: "None",
 ConstructionId: "Aventos_HK_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 354,
 in_FlipliftType: "UF",
 in_HardwareType: "Gasspring",
 in_WeightTypeMin: 601,
 in_WeightTypeMax: 900,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "R",
 in_Color: "Metal",
 CarcaseObject: "Aventos_HKXS_R",
 FrontObject: "Aventos_HKXS_Front_R",
 MechanismObject: "Aventos_HK_XS_2_R",
 ConstructionId: "Aventos_HK_XS",
 HingeClass: "Gasspring_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 355,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 390,
 in_HeightMax: 510,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_3_L",
 ConstructionId: "Aventos_HL_top_3",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 356,
 in_FlipliftType: "UF",
 in_HardwareType: "Gasspring",
 in_WeightTypeMin: 200,
 in_WeightTypeMax: 600,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Metal",
 CarcaseObject: "Aventos_HKXS_L",
 FrontObject: "Aventos_HKXS_Front_L",
 MechanismObject: "Aventos_HK_XS_1_L",
 ConstructionId: "Aventos_HK_XS",
 HingeClass: "Gasspring_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 357,
 in_FlipliftType: "SHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 11,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "White",
 CarcaseObject: "Aventos_HS_top_1_L_White",
 FrontObject: "Aventos_HS_Front_L",
 MechanismObject: "None",
 ConstructionId: "Aventos_HS_top",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 358,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "R",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_R_Black",
 FrontObject: "Aventos_HL_Front_R",
 MechanismObject: "Aventos_HL_Mech_2_R",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 359,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 340,
 in_HeightMax: 390,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_2_L",
 ConstructionId: "Aventos_HL_top_2",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 360,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 480,
 in_HeightMax: 605,
 in_Direction: "R",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_2_R_Grey",
 FrontObject: "Aventos_HF_Front_R",
 MechanismObject: "Aventos_HF_Mech_480",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 361,
 in_FlipliftType: "FHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 11001,
 in_WeightTypeMax: 19300,
 in_HeightMin: 605,
 in_HeightMax: 880,
 in_Direction: "L",
 in_Color: "Grey",
 CarcaseObject: "Aventos_HF_top_2_L_Grey",
 FrontObject: "Aventos_HF_Front_L",
 MechanismObject: "Aventos_HF_Mech_600",
 ConstructionId: "Aventos_HF_top",
 HingeClass: "FHF_Aventos_Top",
 HardwareObject: "",
 OpeningAngle: 110
}
,{
 _id: 362,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 32,
 in_WeightTypeMax: 41,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_4_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 363,
 in_FlipliftType: "LHF",
 in_HardwareType: "Powerstorage",
 in_WeightTypeMin: 22,
 in_WeightTypeMax: 31,
 in_HeightMin: 510,
 in_HeightMax: 580,
 in_Direction: "L",
 in_Color: "Black",
 CarcaseObject: "Aventos_HL_top_3_L_Black",
 FrontObject: "Aventos_HL_Front_L",
 MechanismObject: "Aventos_HL_Mech_4_L",
 ConstructionId: "Aventos_HL_top_4",
 HingeClass: "None",
 HardwareObject: "",
 OpeningAngle: 0
}
,{
 _id: 364,
 in_FlipliftType: "DF",
 in_HardwareType: "DropDownHinge",
 in_WeightTypeMin: 0,
 in_WeightTypeMax: 9999,
 in_HeightMin: 0,
 in_HeightMax: 9999,
 in_Direction: "L",
 in_Color: "Metal",
 CarcaseObject: "DropDownHinge_L",
 FrontObject: "DropDownFront_L",
 MechanismObject: "None",
 ConstructionId: "DropDownHinge",
 HingeClass: "DropDownHinge_Btm",
 HardwareObject: "",
 OpeningAngle: 90
}
];
