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

export interface cti_tab_ProcessingMapping {
  readonly in_ProcessingItem? : string;
}

export interface ctm_tab_ProcessingMapping {
}

export interface cto_tab_ProcessingMapping extends ctm_tab_ProcessingMapping {
  readonly _id : number;
  readonly ProcessingId? : string;
  readonly ProcessingLibrary? : string;
}

export interface ICT_tab_ProcessingMapping
extends cti_tab_ProcessingMapping, cto_tab_ProcessingMapping {}

export class ct2_tab_ProcessingMapping {

public findExactly(
     in_ProcessingItem: string|undefined,
): cto_tab_ProcessingMapping | undefined {
  const res = ct_tab_ProcessingMapping.find((p) => 
p.in_ProcessingItem === in_ProcessingItem
);
return res;
}

public find(
predicate: (value: cti_tab_ProcessingMapping) => boolean
): cto_tab_ProcessingMapping | undefined {
  for (let index = 0; index < ct_tab_ProcessingMapping.length; index++){
    const element = ct_tab_ProcessingMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_ProcessingMapping :ICT_tab_ProcessingMapping[] = [
{
 _id: 4086,
 in_ProcessingItem: "DrillDesignLegRectangular001",
 ProcessingId: "DesignLegRectangular001",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4087,
 in_ProcessingItem: "DrillDesignLegSlanted001H250",
 ProcessingId: "DesignLegSlanted001H250",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4088,
 in_ProcessingItem: "ProcessingShelfadjFittingWoodDesign01",
 ProcessingId: "DrillVertShelfadjWoodDesign01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4089,
 in_ProcessingItem: "ProcessingShelfadjFittingWoodDesign02",
 ProcessingId: "DrillVertShelfadjWoodDesign02",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4090,
 in_ProcessingItem: "ProcessingShelfadjFittingWoodDesign03",
 ProcessingId: "DrillVertShelfadjWoodDesign03",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4091,
 in_ProcessingItem: "ProcessingShelfadjFittingGlassDesign01",
 ProcessingId: "DrillVertShelfadjGlassDesign01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4092,
 in_ProcessingItem: "ProcessingItemDowel01",
 ProcessingId: "ProcessingIdDowel01",
 ProcessingLibrary: "DrillHorizontal"
}
,{
 _id: 4093,
 in_ProcessingItem: "ProcessingItemDowel01",
 ProcessingId: "ProcessingIdDowel01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4094,
 in_ProcessingItem: "ProcessItemMinifix01",
 ProcessingId: "ProcessingIdMinifix01",
 ProcessingLibrary: "DrillHorizontal"
}
,{
 _id: 4095,
 in_ProcessingItem: "ProcessItemMinifix01",
 ProcessingId: "ProcessingIdMinifix01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4096,
 in_ProcessingItem: "ProcessingItemDowel02",
 ProcessingId: "ProcessingIdDowel02",
 ProcessingLibrary: "DrillHorizontal"
}
,{
 _id: 4097,
 in_ProcessingItem: "ProcessingItemDowel02",
 ProcessingId: "ProcessingIdDowel01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4098,
 in_ProcessingItem: "ProcessingHinge35/11Screw48/6",
 ProcessingId: "ProcessingDrillHinge35/11Screw48/6",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4099,
 in_ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
 ProcessingId: "ProcessingDrillHinge35/13.5Screw45/9.5",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4100,
 in_ProcessingItem: "ProcessingMountingPlateScrew37/32",
 ProcessingId: "ProcessingDrillMountingPlateScrew37/32",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4101,
 in_ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
 ProcessingId: "ProcessingDrillMountingPlateEuroScrew21_32/0",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4102,
 in_ProcessingItem: "ProcessingWallUnitHiddenHanger92kgWhite",
 ProcessingId: "ProcessingHanger290.03.937_8",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4103,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger75kgWhite",
 ProcessingId: "ProcessingHanger290.40.980_1",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4104,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger75kgWhite",
 ProcessingId: "ProcessingHanger290.40.980_1",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4105,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger52kgNickelPlated",
 ProcessingId: "ProcessingHanger290.02.702_3",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4106,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger52kgNickelPlated",
 ProcessingId: "ProcessingHanger290.02.702_3",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4107,
 in_ProcessingItem: "ProcessingBaseUnitVisibleHanger120kgWhite",
 ProcessingId: "ProcessingHanger290.40.901_2",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4108,
 in_ProcessingItem: "ProcessingBaseUnitVisibleHanger120kgWhite",
 ProcessingId: "ProcessingHanger290.40.901_2",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4109,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgWhite",
 ProcessingId: "ProcessingHanger290.02.710_1",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4110,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
 ProcessingId: "ProcessingHanger290.02.710_1",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4111,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgWhite",
 ProcessingId: "ProcessingHanger290.02.710_1",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4112,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
 ProcessingId: "ProcessingHanger290.02.710_1",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4113,
 in_ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
 ProcessingId: "ProcessingHanger290.02.710_1",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4114,
 in_ProcessingItem: "Processing_Legrabox_270",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4115,
 in_ProcessingItem: "Processing_Legrabox_300",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4116,
 in_ProcessingItem: "Processing_Legrabox_350",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4117,
 in_ProcessingItem: "Processing_Legrabox_400",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4118,
 in_ProcessingItem: "Processing_Legrabox_450",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4119,
 in_ProcessingItem: "Processing_Legrabox_500",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4120,
 in_ProcessingItem: "Processing_Legrabox_550",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4121,
 in_ProcessingItem: "Processing_Legrabox_600",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4122,
 in_ProcessingItem: "Processing_Legrabox_450_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4123,
 in_ProcessingItem: "Processing_Legrabox_500_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4124,
 in_ProcessingItem: "Processing_Legrabox_550_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4125,
 in_ProcessingItem: "Processing_Legrabox_600_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4126,
 in_ProcessingItem: "Processing_Legrabox_650_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4127,
 in_ProcessingItem: "Processing_Legrabox_270",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4128,
 in_ProcessingItem: "Processing_Legrabox_300",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4129,
 in_ProcessingItem: "Processing_Legrabox_350",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4130,
 in_ProcessingItem: "Processing_Legrabox_400",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4131,
 in_ProcessingItem: "Processing_Legrabox_450",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4132,
 in_ProcessingItem: "Processing_Legrabox_500",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4133,
 in_ProcessingItem: "Processing_Legrabox_550",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4134,
 in_ProcessingItem: "Processing_Legrabox_600",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4135,
 in_ProcessingItem: "Processing_Legrabox_450_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4136,
 in_ProcessingItem: "Processing_Legrabox_500_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4137,
 in_ProcessingItem: "Processing_Legrabox_550_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4138,
 in_ProcessingItem: "Processing_Legrabox_600_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4139,
 in_ProcessingItem: "Processing_Legrabox_650_H",
 ProcessingId: "Processing_LegraboxBtm",
 ProcessingLibrary: "Milling"
}
,{
 _id: 4140,
 in_ProcessingItem: "Processing_Legrabox_270",
 ProcessingId: "Processing_LegraboxSlide_270",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4141,
 in_ProcessingItem: "Processing_Legrabox_300",
 ProcessingId: "Processing_LegraboxSlide_300_350",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4142,
 in_ProcessingItem: "Processing_Legrabox_350",
 ProcessingId: "Processing_LegraboxSlide_300_350",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4143,
 in_ProcessingItem: "Processing_Legrabox_400",
 ProcessingId: "Processing_LegraboxSlide_400_450_500",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4144,
 in_ProcessingItem: "Processing_Legrabox_450",
 ProcessingId: "Processing_LegraboxSlide_400_450_500",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4145,
 in_ProcessingItem: "Processing_Legrabox_500",
 ProcessingId: "Processing_LegraboxSlide_400_450_500",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4146,
 in_ProcessingItem: "Processing_Legrabox_550",
 ProcessingId: "Processing_LegraboxSlide_550_600",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4147,
 in_ProcessingItem: "Processing_Legrabox_600",
 ProcessingId: "Processing_LegraboxSlide_550_600",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4148,
 in_ProcessingItem: "Processing_Legrabox_450_H",
 ProcessingId: "Processing_LegraboxSlide_450_H",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4149,
 in_ProcessingItem: "Processing_Legrabox_500_H",
 ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4150,
 in_ProcessingItem: "Processing_Legrabox_550_H",
 ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4151,
 in_ProcessingItem: "Processing_Legrabox_600_H",
 ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4152,
 in_ProcessingItem: "Processing_Legrabox_650_H",
 ProcessingId: "Processing_LegraboxSlide_650_H",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4153,
 in_ProcessingItem: "Processing_Legra_FrontBotCon",
 ProcessingId: "Processing_Legra_FrontBotCon",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4154,
 in_ProcessingItem: "Processing_Legrabox_Con_C",
 ProcessingId: "Processing_Legrabox_Con_C",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4155,
 in_ProcessingItem: "Processing_Legrabox_Con_CM",
 ProcessingId: "Processing_Legrabox_Con_CM",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4156,
 in_ProcessingItem: "Processing_Legrabox_Con_F",
 ProcessingId: "Processing_Legrabox_Con_F",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4157,
 in_ProcessingItem: "Processing_Legrabox_Con_FM",
 ProcessingId: "Processing_Legrabox_Con_FM",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4158,
 in_ProcessingItem: "Processing_Legrabox_Con_K",
 ProcessingId: "Processing_Legrabox_Con_K",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4159,
 in_ProcessingItem: "Processing_Legrabox_Con_KM",
 ProcessingId: "Processing_Legrabox_Con_KM",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4160,
 in_ProcessingItem: "Processing_Legrabox_Con_M",
 ProcessingId: "Processing_Legrabox_Con_M",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4161,
 in_ProcessingItem: "Processing_Legrabox_Con_N",
 ProcessingId: "Processing_Legrabox_Con_N",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4162,
 in_ProcessingItem: "Processing_Legrabox_Backwall_N",
 ProcessingId: "Processing_Legrabox_Backwall_N",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4163,
 in_ProcessingItem: "Processing_Legrabox_Backwall_M",
 ProcessingId: "Processing_Legrabox_Backwall_M",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4164,
 in_ProcessingItem: "Processing_Legrabox_Backwall_C",
 ProcessingId: "Processing_Legrabox_Backwall_C",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4165,
 in_ProcessingItem: "Processing_Legrabox_Backwall_K",
 ProcessingId: "Processing_Legrabox_Backwall_K",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4166,
 in_ProcessingItem: "Processing_Legrabox_Backwall_F",
 ProcessingId: "Processing_Legrabox_Backwall_F",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4167,
 in_ProcessingItem: "ProcessingItemDowel03",
 ProcessingId: "ProcessingIdDowel03",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4168,
 in_ProcessingItem: "ProcessingItemDowel03",
 ProcessingId: "ProcessingIdDowel03",
 ProcessingLibrary: "DrillHorizontal"
}
,{
 _id: 4169,
 in_ProcessingItem: "ProcessingPushToOpenShort",
 ProcessingId: "ProcessingPushToOpenShort",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4170,
 in_ProcessingItem: "ProcessingAdapterHousingShort",
 ProcessingId: "ProcessingAdapterHousingShort",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4171,
 in_ProcessingItem: "ProcessingAdapterHousingLong",
 ProcessingId: "ProcessingAdapterHousingLong",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4172,
 in_ProcessingItem: "NoProcessing",
 ProcessingId: "",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4173,
 in_ProcessingItem: "ProcessingPushToOpenLong",
 ProcessingId: "ProcessingPushToOpenLong",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4174,
 in_ProcessingItem: "ProcessingPushToOpenLong",
 ProcessingId: "ProcessingPushToOpenLong",
 ProcessingLibrary: "DrillHorizontal"
}
,{
 _id: 4175,
 in_ProcessingItem: "ProcessingPushToOpenShort",
 ProcessingId: "ProcessingPushToOpenShort",
 ProcessingLibrary: "DrillHorizontal"
}
,{
 _id: 4176,
 in_ProcessingItem: "ProcessingRafix01",
 ProcessingId: "ProcessingRafix01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4177,
 in_ProcessingItem: "Processing_Aventos_HF_PS",
 ProcessingId: "Processing_Aventos_HF_PS",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4178,
 in_ProcessingItem: "Processing_Aventos_HF_Connector",
 ProcessingId: "Processing_Aventos_HF_Connector",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4179,
 in_ProcessingItem: "Process_Aventos_HK_PS",
 ProcessingId: "Process_Aventos_HK_PS",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4180,
 in_ProcessingItem: "Processing_Aventos_HK_Connector",
 ProcessingId: "Processing_Aventos_HK_Connector",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4181,
 in_ProcessingItem: "ProcessingHinge35/12.6Screw45/9.5",
 ProcessingId: "ProcessingDrillHinge35/12.6Screw45/9.5",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4182,
 in_ProcessingItem: "Processing_DropDown_Carcase",
 ProcessingId: "Processing_DropDown_Carcase",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4183,
 in_ProcessingItem: "Processing_DropDown_Front",
 ProcessingId: "Processing_DropDown_Front",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4184,
 in_ProcessingItem: "Processing_Aventos_HKXS_Connector",
 ProcessingId: "Processing_Aventos_HKXS_Connector",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4185,
 in_ProcessingItem: "Processing_Aventos_HKXS_Carcase",
 ProcessingId: "Processing_Aventos_HKXS_Carcase",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4186,
 in_ProcessingItem: "ProcessingMountingPlateScrew20_32/0",
 ProcessingId: "ProcessingDrillMountingPlateScrew20_32/0",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4187,
 in_ProcessingItem: "ProcessingHingeFlap26",
 ProcessingId: "ProcessingHingeFlap26",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4188,
 in_ProcessingItem: "ProcessingBracket01",
 ProcessingId: "ProcessingBracket01",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4189,
 in_ProcessingItem: "ProcessingPlinthLegTriangularPressH100",
 ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4190,
 in_ProcessingItem: "ProcessingPlinthLegTriangularPressH120",
 ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4191,
 in_ProcessingItem: "ProcessingPlinthLegTriangularPressH150",
 ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4192,
 in_ProcessingItem: "ProcessingPlinthLegRectangularScrewH100",
 ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4193,
 in_ProcessingItem: "ProcessingPlinthLegRectangularScrewH120",
 ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4194,
 in_ProcessingItem: "ProcessingPlinthLegRectangularScrewH150",
 ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4195,
 in_ProcessingItem: "ProcessingKeku01",
 ProcessingId: "ProcessingKeku_Side_262_50_368",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4196,
 in_ProcessingItem: "ProcessingKeku01",
 ProcessingId: "ProcessingKeku_Front_262_50_359",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4197,
 in_ProcessingItem: "DrillBracketHandle128",
 ProcessingId: "BracketHandle128",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4198,
 in_ProcessingItem: "DrillBracketHandle160",
 ProcessingId: "BracketHandle160",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4199,
 in_ProcessingItem: "DrillBracketHandle192",
 ProcessingId: "BracketHandle192",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4200,
 in_ProcessingItem: "DrillBracketHandle224",
 ProcessingId: "BracketHandle224",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4201,
 in_ProcessingItem: "DrillBracketHandle288",
 ProcessingId: "BracketHandle288",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4202,
 in_ProcessingItem: "DrillBracketHandle320",
 ProcessingId: "BracketHandle320",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4203,
 in_ProcessingItem: "DrillBracketHandle352",
 ProcessingId: "BracketHandle352",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4204,
 in_ProcessingItem: "DrillBracketHandle448",
 ProcessingId: "BracketHandle448",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4205,
 in_ProcessingItem: "DrillBracketHandle480",
 ProcessingId: "BracketHandle480",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4206,
 in_ProcessingItem: "DrillBracketHandle560",
 ProcessingId: "BracketHandle560",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4207,
 in_ProcessingItem: "DrillBracketHandle640",
 ProcessingId: "BracketHandle640",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4208,
 in_ProcessingItem: "DrillBracketHandle96",
 ProcessingId: "BracketHandle96",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4209,
 in_ProcessingItem: "DrillBracketHandle960",
 ProcessingId: "BracketHandle960",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4210,
 in_ProcessingItem: "DrillRailHandle128",
 ProcessingId: "RailHandle128",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4211,
 in_ProcessingItem: "DrillRailHandle160",
 ProcessingId: "RailHandle160",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4212,
 in_ProcessingItem: "DrillRailHandle192",
 ProcessingId: "RailHandle192",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4213,
 in_ProcessingItem: "DrillRailHandle224",
 ProcessingId: "RailHandle224",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4214,
 in_ProcessingItem: "DrillRailHandle288",
 ProcessingId: "RailHandle288",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4215,
 in_ProcessingItem: "Proc_Handle_64",
 ProcessingId: "Proc_Handle_64",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4216,
 in_ProcessingItem: "Proc_Handle_96",
 ProcessingId: "Proc_Handle_96",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4217,
 in_ProcessingItem: "Proc_Handle_128",
 ProcessingId: "Proc_Handle_128",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4218,
 in_ProcessingItem: "Proc_Handle_160",
 ProcessingId: "Proc_Handle_160",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4219,
 in_ProcessingItem: "Proc_Handle_192",
 ProcessingId: "Proc_Handle_192",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4220,
 in_ProcessingItem: "Proc_Handle_210",
 ProcessingId: "Proc_Handle_210",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4221,
 in_ProcessingItem: "Proc_Handle_224",
 ProcessingId: "Proc_Handle_224",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4222,
 in_ProcessingItem: "Proc_Handle_228",
 ProcessingId: "Proc_Handle_228",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4223,
 in_ProcessingItem: "Proc_Handle_260",
 ProcessingId: "Proc_Handle_260",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4224,
 in_ProcessingItem: "Proc_Handle_288",
 ProcessingId: "Proc_Handle_288",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4225,
 in_ProcessingItem: "Proc_Handle_310",
 ProcessingId: "Proc_Handle_310",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4226,
 in_ProcessingItem: "Proc_Handle_320",
 ProcessingId: "Proc_Handle_320",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4227,
 in_ProcessingItem: "Proc_Handle_360",
 ProcessingId: "Proc_Handle_360",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4228,
 in_ProcessingItem: "Proc_Handle_352",
 ProcessingId: "Proc_Handle_352",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4229,
 in_ProcessingItem: "Proc_Handle_410",
 ProcessingId: "Proc_Handle_410",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4230,
 in_ProcessingItem: "Proc_Handle_448",
 ProcessingId: "Proc_Handle_448",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4231,
 in_ProcessingItem: "Proc_Handle_460",
 ProcessingId: "Proc_Handle_460",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4232,
 in_ProcessingItem: "Proc_Handle_480",
 ProcessingId: "Proc_Handle_480",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4233,
 in_ProcessingItem: "Proc_Handle_560",
 ProcessingId: "Proc_Handle_560",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4234,
 in_ProcessingItem: "Proc_Handle_640",
 ProcessingId: "Proc_Handle_640",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4235,
 in_ProcessingItem: "Proc_Handle_660",
 ProcessingId: "Proc_Handle_660",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4236,
 in_ProcessingItem: "Proc_Handle_760",
 ProcessingId: "Proc_Handle_760",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4237,
 in_ProcessingItem: "Proc_Handle_860",
 ProcessingId: "Proc_Handle_860",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4238,
 in_ProcessingItem: "Proc_Handle_960",
 ProcessingId: "Proc_Handle_960",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4239,
 in_ProcessingItem: "Proc_Handle_1060",
 ProcessingId: "Proc_Handle_1060",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4240,
 in_ProcessingItem: "Proc_Handle_1160",
 ProcessingId: "Proc_Handle_1160",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4241,
 in_ProcessingItem: "Proc_Handle_1260",
 ProcessingId: "Proc_Handle_1260",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4242,
 in_ProcessingItem: "Proc_Handle_1360",
 ProcessingId: "Proc_Handle_1360",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4243,
 in_ProcessingItem: "Proc_Handle_1460",
 ProcessingId: "Proc_Handle_1460",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4244,
 in_ProcessingItem: "Proc_Handle_1560",
 ProcessingId: "Proc_Handle_1560",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4245,
 in_ProcessingItem: "Proc_Handle_1760",
 ProcessingId: "Proc_Handle_1760",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4246,
 in_ProcessingItem: "Proc_Handle_1960",
 ProcessingId: "Proc_Handle_1960",
 ProcessingLibrary: "DrillVertical"
}
,{
 _id: 4247,
 in_ProcessingItem: "ProcessingPlinthLegTriangularPressH100DrillBack",
 ProcessingId: "ProcessingDrillPlinthLegTriangularPressDrillBack",
 ProcessingLibrary: "DrillVertical"
}
];
