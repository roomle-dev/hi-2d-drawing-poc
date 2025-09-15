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

export interface cti_tab_HingeMapping {
  readonly in_HingeType? : string;
  readonly in_Application? : string;
  readonly in_MountingPlateType? : string;
  readonly in_MountingPlateHeight? : string;
  readonly in_OpeningType? : string;
  readonly in_Color? : string;
}

export interface ctm_tab_HingeMapping {
}

export interface cto_tab_HingeMapping extends ctm_tab_HingeMapping {
  readonly _id : number;
  readonly ObjectFront? : string;
  readonly ObjectCarcase? : string;
  readonly HingeFrontGapCarcase? : number;
  readonly OpeningAngle? : number;
}

export interface ICT_tab_HingeMapping
extends cti_tab_HingeMapping, cto_tab_HingeMapping {}

export class ct2_tab_HingeMapping {

public findExactly(
     in_HingeType: string|undefined,
     in_Application: string|undefined,
     in_MountingPlateType: string|undefined,
     in_MountingPlateHeight: string|undefined,
     in_OpeningType: string|undefined,
     in_Color: string|undefined,
): cto_tab_HingeMapping | undefined {
  const res = ct_tab_HingeMapping.find((p) => 
p.in_HingeType === in_HingeType
 && p.in_Application === in_Application
 && p.in_MountingPlateType === in_MountingPlateType
 && p.in_MountingPlateHeight === in_MountingPlateHeight
 && p.in_OpeningType === in_OpeningType
 && p.in_Color === in_Color
);
return res;
}

public find(
predicate: (value: cti_tab_HingeMapping) => boolean
): cto_tab_HingeMapping | undefined {
  for (let index = 0; index < ct_tab_HingeMapping.length; index++){
    const element = ct_tab_HingeMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HingeMapping :ICT_tab_HingeMapping[] = [
{
 _id: 1,
 in_HingeType: "110º",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110OverlaySpringSS",
 ObjectCarcase: "MpCruciformA0SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 2,
 in_HingeType: "110º",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110OverlaySpringSS",
 ObjectCarcase: "MpCruciformA3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 3,
 in_HingeType: "110º",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110OverlaySpringSS",
 ObjectCarcase: "MpCruciformA6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 4,
 in_HingeType: "110º",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110HalfSpringSS",
 ObjectCarcase: "MpCruciformA0SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 5,
 in_HingeType: "110º",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110HalfSpringSS",
 ObjectCarcase: "MpCruciformA3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 6,
 in_HingeType: "110º",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110HalfSpringSS",
 ObjectCarcase: "MpCruciformA6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 7,
 in_HingeType: "110º",
 in_Application: "Inset",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110InsetSpringSS",
 ObjectCarcase: "MpCruciformA3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 8,
 in_HingeType: "110º",
 in_Application: "Inset",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110InsetSpringSS",
 ObjectCarcase: "MpCruciformA6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 9,
 in_HingeType: "165º",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165OverlaySpringSS",
 ObjectCarcase: "MpCruciformA0SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 10,
 in_HingeType: "165º",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165OverlaySpringSS",
 ObjectCarcase: "MpCruciformA3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 11,
 in_HingeType: "165º",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165OverlaySpringSS",
 ObjectCarcase: "MpCruciformA6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 12,
 in_HingeType: "165º",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165HalfSpringSS",
 ObjectCarcase: "MpCruciformA0SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 13,
 in_HingeType: "165º",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165HalfSpringSS",
 ObjectCarcase: "MpCruciformA3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 14,
 in_HingeType: "165º",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165HalfSpringSS",
 ObjectCarcase: "MpCruciformA6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 15,
 in_HingeType: "165º",
 in_Application: "Inset",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165InsetSpringSS",
 ObjectCarcase: "MpCruciformA3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 16,
 in_HingeType: "165º",
 in_Application: "Inset",
 in_MountingPlateType: "CruciformA",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge165InsetSpringSS",
 ObjectCarcase: "MpCruciformA6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 165
}
,{
 _id: 17,
 in_HingeType: "110ºSoftClose",
 in_Application: "Overlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClOverlaySpringSS",
 ObjectCarcase: "MpHorizontalSM0SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 18,
 in_HingeType: "110ºSoftClose",
 in_Application: "Overlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClOverlaySpringSS",
 ObjectCarcase: "MpHorizontalSM3SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 19,
 in_HingeType: "110ºSoftClose",
 in_Application: "Overlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClOverlaySpringSS",
 ObjectCarcase: "MpHorizontalSM6SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 20,
 in_HingeType: "110ºSoftClose",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClHalfSpringSS",
 ObjectCarcase: "MpHorizontalSM0SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 21,
 in_HingeType: "110ºSoftClose",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClHalfSpringSS",
 ObjectCarcase: "MpHorizontalSM3SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 22,
 in_HingeType: "110ºSoftClose",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClHalfSpringSS",
 ObjectCarcase: "MpHorizontalSM6SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 23,
 in_HingeType: "110ºSoftClose",
 in_Application: "Inset",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClInsetSpringSS",
 ObjectCarcase: "MpHorizontalSM3SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 24,
 in_HingeType: "110ºSoftClose",
 in_Application: "Inset",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge110SoftClInsetSpringSS",
 ObjectCarcase: "MpHorizontalSM6SS",
 HingeFrontGapCarcase: 1.8,
 OpeningAngle: 110
}
,{
 _id: 25,
 in_HingeType: "155ºSoftClose",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge155SoftClOverlaySpringSS",
 ObjectCarcase: "MpCruciformSM0SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 155
}
,{
 _id: 26,
 in_HingeType: "155ºSoftClose",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge155SoftClOverlaySpringSS",
 ObjectCarcase: "MpCruciformSM3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 155
}
,{
 _id: 27,
 in_HingeType: "155ºSoftClose",
 in_Application: "Overlay",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge155SoftClOverlaySpringSS",
 ObjectCarcase: "MpCruciformSM6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 155
}
,{
 _id: 28,
 in_HingeType: "155ºSoftClose",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge155SoftClHalfSpringSS",
 ObjectCarcase: "MpCruciformSM0SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 155
}
,{
 _id: 29,
 in_HingeType: "155ºSoftClose",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge155SoftClHalfSpringSS",
 ObjectCarcase: "MpCruciformSM3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 155
}
,{
 _id: 30,
 in_HingeType: "155ºSoftClose",
 in_Application: "HalfOverlay",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "6",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge155SoftClHalfSpringSS",
 ObjectCarcase: "MpCruciformSM6SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 155
}
,{
 _id: 31,
 in_HingeType: "BlindCornerInset110ºSoftClose",
 in_Application: "Inset",
 in_MountingPlateType: "CruciformSM",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "HingeBlindCornerInset110SoftClNP",
 ObjectCarcase: "MpCruciformSM3SS",
 HingeFrontGapCarcase: 1,
 OpeningAngle: 110
}
,{
 _id: 32,
 in_HingeType: "120ºForFHF",
 in_Application: "Overlay",
 in_MountingPlateType: "HorizontalForFHF",
 in_MountingPlateHeight: "3",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge120OverlayNoSpringSSForFHF",
 ObjectCarcase: "MPHorizontalBL3SS",
 HingeFrontGapCarcase: 1.5,
 OpeningAngle: 120
}
,{
 _id: 33,
 in_HingeType: "120ºForFHF",
 in_Application: "Overlay",
 in_MountingPlateType: "HorizontalForFHF",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "Hinge120OverlayNoSpringSSForFHF",
 ObjectCarcase: "MPHorizontalBL0SS",
 HingeFrontGapCarcase: 1.5,
 OpeningAngle: 120
}
,{
 _id: 34,
 in_HingeType: "CenterHingeForFHF",
 in_Application: "Inset",
 in_MountingPlateType: "HorizontalForFHF",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "HingeCenterForFHF",
 ObjectCarcase: "MPHorizontalBL0SS",
 HingeFrontGapCarcase: 1.5,
 OpeningAngle: 120
}
,{
 _id: 35,
 in_HingeType: "DropDownHinge",
 in_Application: "Overlay",
 in_MountingPlateType: "Horizontal",
 in_MountingPlateHeight: "0",
 in_OpeningType: "All",
 in_Color: "All",
 ObjectFront: "HingeFlipLiftDF",
 ObjectCarcase: "MPHorizontalBL0SS",
 HingeFrontGapCarcase: 2,
 OpeningAngle: 90
}
];
