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

export interface cti_tab_ObjectMapping {
  readonly in_Object? : string;
}

export interface ctm_tab_ObjectMapping {
}

export interface cto_tab_ObjectMapping extends ctm_tab_ObjectMapping {
  readonly _id : number;
  readonly HardwareItem? : string;
  readonly ProcessingItem? : string;
  readonly GraphicItem? : string;
}

export interface ICT_tab_ObjectMapping
extends cti_tab_ObjectMapping, cto_tab_ObjectMapping {}

export class ct2_tab_ObjectMapping {

public findExactly(
     in_Object: string|undefined,
): cto_tab_ObjectMapping | undefined {
  const res = ct_tab_ObjectMapping.find((p) => 
p.in_Object === in_Object
);
return res;
}

public find(
predicate: (value: cti_tab_ObjectMapping) => boolean
): cto_tab_ObjectMapping | undefined {
  for (let index = 0; index < ct_tab_ObjectMapping.length; index++){
    const element = ct_tab_ObjectMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_ObjectMapping :ICT_tab_ObjectMapping[] = [
{
 _id: 23257,
 in_Object: "DesignLegRectangular001H50",
 HardwareItem: "HardDesignLegRectangular001H50",
 ProcessingItem: "DrillDesignLegRectangular001",
 GraphicItem: "DesignLegRectangular001H50"
}
,{
 _id: 23258,
 in_Object: "DesignLegRectangular001H80",
 HardwareItem: "HardDesignLegRectangular001H80",
 ProcessingItem: "DrillDesignLegRectangular001",
 GraphicItem: "DesignLegRectangular001H80"
}
,{
 _id: 23259,
 in_Object: "DesignLegRectangular001H100",
 HardwareItem: "HardDesignLegRectangular001H100",
 ProcessingItem: "DrillDesignLegRectangular001",
 GraphicItem: "DesignLegRectangular001H100"
}
,{
 _id: 23260,
 in_Object: "DesignLegRectangular001H150",
 HardwareItem: "HardDesignLegRectangular001H150",
 ProcessingItem: "DrillDesignLegRectangular001",
 GraphicItem: "DesignLegRectangular001H150"
}
,{
 _id: 23261,
 in_Object: "DesignLegRectangular001H200",
 HardwareItem: "HardDesignLegRectangular001H200",
 ProcessingItem: "DrillDesignLegRectangular001",
 GraphicItem: "DesignLegRectangular001H200"
}
,{
 _id: 23262,
 in_Object: "DesignLegSlanted001H250",
 HardwareItem: "HardDesignLegSlanted001H250",
 ProcessingItem: "DrillDesignLegSlanted001H250",
 GraphicItem: "DesignLegSlanted001H250"
}
,{
 _id: 23263,
 in_Object: "ShelfadjFittingWoodDesign01",
 HardwareItem: "HardwareShelfadjFittingWoodDesign01",
 ProcessingItem: "ProcessingShelfadjFittingWoodDesign01",
 GraphicItem: "GraphicShelfadjFittingWoodDesign01"
}
,{
 _id: 23264,
 in_Object: "ShelfadjFittingWoodDesign02",
 HardwareItem: "HardwareShelfadjFittingWoodDesign02",
 ProcessingItem: "ProcessingShelfadjFittingWoodDesign02",
 GraphicItem: "GraphicShelfadjFittingWoodDesign02"
}
,{
 _id: 23265,
 in_Object: "ShelfadjFittingWoodDesign03",
 HardwareItem: "HardwareShelfadjFittingWoodDesign03",
 ProcessingItem: "ProcessingShelfadjFittingWoodDesign03",
 GraphicItem: "GraphicShelfadjFittingWoodDesign03"
}
,{
 _id: 23266,
 in_Object: "ShelfadjFittingGlassDesign01",
 HardwareItem: "HardwareShelfadjFittingGlassDesign01",
 ProcessingItem: "ProcessingShelfadjFittingGlassDesign01",
 GraphicItem: "GraphicShelfadjFittingGlassDesign01"
}
,{
 _id: 23267,
 in_Object: "Minifix01White",
 HardwareItem: "HardwareItemMinifix01White",
 ProcessingItem: "ProcessItemMinifix01",
 GraphicItem: "GraphicItemMinifix01White"
}
,{
 _id: 23268,
 in_Object: "Minifix01Black",
 HardwareItem: "HardwareItemMinifix01Black",
 ProcessingItem: "ProcessItemMinifix01",
 GraphicItem: "GraphicItemMinifix01Black"
}
,{
 _id: 23269,
 in_Object: "Minifix01Light",
 HardwareItem: "HardwareItemMinifix01Light",
 ProcessingItem: "ProcessItemMinifix01",
 GraphicItem: "GraphicItemMinifix01Light"
}
,{
 _id: 23270,
 in_Object: "Minifix01Dark",
 HardwareItem: "HardwareItemMinifix01Dark",
 ProcessingItem: "ProcessItemMinifix01",
 GraphicItem: "GraphicItemMinifix01Dark"
}
,{
 _id: 23271,
 in_Object: "Dowel01",
 HardwareItem: "HardwareItemDowel01",
 ProcessingItem: "ProcessingItemDowel01",
 GraphicItem: "GraphicItemDowel01"
}
,{
 _id: 23272,
 in_Object: "Dowel02",
 HardwareItem: "HardwareItemDowel02",
 ProcessingItem: "ProcessingItemDowel02",
 GraphicItem: "GraphicItemDowel02"
}
,{
 _id: 23273,
 in_Object: "Hinge110HalfSpringSS",
 HardwareItem: "HardwareHinge110HalfSpringSS",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHinge110HalfSpringSS"
}
,{
 _id: 23274,
 in_Object: "Hinge110InsetSpringSS",
 HardwareItem: "HardwareHinge110InsetSpringSS",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHinge110InsetSpringSS"
}
,{
 _id: 23275,
 in_Object: "Hinge110OverlaySpringSS",
 HardwareItem: "HardwareHinge110OverlaySpringSS",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHinge110OverlaySpringSS"
}
,{
 _id: 23276,
 in_Object: "Hinge110SoftClHalfSpringSS",
 HardwareItem: "HardwareHinge110SoftClHalfSpringSS",
 ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
 GraphicItem: "GraphicHinge110SoftClHalfSpringSS"
}
,{
 _id: 23277,
 in_Object: "Hinge110SoftClInsetSpringSS",
 HardwareItem: "HardwareHinge110SoftClInsetSpringSS",
 ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
 GraphicItem: "GraphicHinge110SoftClInsetSpringSS"
}
,{
 _id: 23278,
 in_Object: "Hinge110SoftClOverlaySpringSS",
 HardwareItem: "HardwareHinge110SoftClOverlaySpringSS",
 ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
 GraphicItem: "GraphicHinge110SoftClOverlaySpringSS"
}
,{
 _id: 23279,
 in_Object: "Hinge155SoftClHalfSpringSS",
 HardwareItem: "HardwareHinge155SoftClHalfSpringSS",
 ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
 GraphicItem: "GraphicHinge155SoftClHalfSpringSS"
}
,{
 _id: 23280,
 in_Object: "Hinge155SoftClOverlaySpringSS",
 HardwareItem: "HardwareHinge155SoftClOverlaySpringSS",
 ProcessingItem: "ProcessingHinge35/13.5Screw45/9.5",
 GraphicItem: "GraphicHinge155SoftClOverlaySpringSS"
}
,{
 _id: 23281,
 in_Object: "Hinge165HalfSpringSS",
 HardwareItem: "HardwareHinge165HalfSpringSS",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHinge165HalfSpringSS"
}
,{
 _id: 23282,
 in_Object: "Hinge165InsetSpringSS",
 HardwareItem: "HardwareHinge165InsetSpringSS",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHinge165InsetSpringSS"
}
,{
 _id: 23283,
 in_Object: "Hinge165OverlaySpringSS",
 HardwareItem: "HardwareHinge165OverlaySpringSS",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHinge165OverlaySpringSS"
}
,{
 _id: 23284,
 in_Object: "MpCruciformA0SS",
 HardwareItem: "HardwareMpCruciformA0SS",
 ProcessingItem: "ProcessingMountingPlateScrew37/32",
 GraphicItem: "GraphicMpCruciformA0SS"
}
,{
 _id: 23285,
 in_Object: "MpCruciformA3SS",
 HardwareItem: "HardwareMpCruciformA3SS",
 ProcessingItem: "ProcessingMountingPlateScrew37/32",
 GraphicItem: "GraphicMpCruciformA3SS"
}
,{
 _id: 23286,
 in_Object: "MpCruciformA6SS",
 HardwareItem: "HardwareMpCruciformA6SS",
 ProcessingItem: "ProcessingMountingPlateScrew37/32",
 GraphicItem: "GraphicMpCruciformA6SS"
}
,{
 _id: 23287,
 in_Object: "MpCruciformSM0SS",
 HardwareItem: "HardwareMpCruciformSM0SS",
 ProcessingItem: "ProcessingMountingPlateScrew37/32",
 GraphicItem: "GraphicMpCruciformSM0SS"
}
,{
 _id: 23288,
 in_Object: "MpCruciformSM3SS",
 HardwareItem: "HardwareMpCruciformSM3SS",
 ProcessingItem: "ProcessingMountingPlateScrew37/32",
 GraphicItem: "GraphicMpCruciformSM3SS"
}
,{
 _id: 23289,
 in_Object: "MpCruciformSM6SS",
 HardwareItem: "HardwareMpCruciformSM6SS",
 ProcessingItem: "ProcessingMountingPlateScrew37/32",
 GraphicItem: "GraphicMpCruciformSM6SS"
}
,{
 _id: 23290,
 in_Object: "MpHorizontalSM0SS",
 HardwareItem: "HardwareMpHorizontalSM0SS",
 ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
 GraphicItem: "GraphicMpHorizontalSM0SS"
}
,{
 _id: 23291,
 in_Object: "MpHorizontalSM3SS",
 HardwareItem: "HardwareMpHorizontalSM3SS",
 ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
 GraphicItem: "GraphicMpHorizontalSM3SS"
}
,{
 _id: 23292,
 in_Object: "MpHorizontalSM6SS",
 HardwareItem: "HardwareMpHorizontalSM6SS",
 ProcessingItem: "ProcessingMountingPlateEuroScrew21_32/0",
 GraphicItem: "GraphicMpHorizontalSM6SS"
}
,{
 _id: 23293,
 in_Object: "HingeBlindCornerInset110SoftClNP",
 HardwareItem: "HardwareHingeBlindCornerInset110SoftClNP",
 ProcessingItem: "ProcessingHinge35/11Screw48/6",
 GraphicItem: "GraphicHingeBlindCornerInset110SoftClNP"
}
,{
 _id: 23294,
 in_Object: "SIEMENSIQ700",
 HardwareItem: undefined,
 ProcessingItem: undefined,
 GraphicItem: "NoGraphic"
}
,{
 _id: 23295,
 in_Object: "BaseUnitVisibleHanger120kgWhite",
 HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 ProcessingItem: "ProcessingBaseUnitVisibleHanger120kgWhite",
 GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite"
}
,{
 _id: 23296,
 in_Object: "WallUnitVisibleHanger52kgNickelPlated",
 HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 ProcessingItem: "ProcessingWallUnitVisibleHanger52kgNickelPlated",
 GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated"
}
,{
 _id: 23297,
 in_Object: "WallUnitVisibleHanger75kgWhite",
 HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 ProcessingItem: "ProcessingWallUnitVisibleHanger75kgWhite",
 GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite"
}
,{
 _id: 23298,
 in_Object: "WallUnitHiddenHanger92kgWhite",
 HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
 ProcessingItem: "ProcessingWallUnitHiddenHanger92kgWhite",
 GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite"
}
,{
 _id: 23299,
 in_Object: "WallUnitVisibleHanger45kgWhite",
 HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 ProcessingItem: "ProcessingWallUnitVisibleHanger45kgWhite",
 GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite"
}
,{
 _id: 23300,
 in_Object: "WallUnitVisibleHanger45kgGrey",
 HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 ProcessingItem: "ProcessingWallUnitVisibleHanger45kgGrey",
 GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey"
}
,{
 _id: 23301,
 in_Object: "Legra_White_400_N",
 HardwareItem: "Hardware_Legra_White_400_N",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_N"
}
,{
 _id: 23302,
 in_Object: "Legra_White_450_N",
 HardwareItem: "Hardware_Legra_White_450_N",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_N"
}
,{
 _id: 23303,
 in_Object: "Legra_White_500_N",
 HardwareItem: "Hardware_Legra_White_500_N",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_N"
}
,{
 _id: 23304,
 in_Object: "Legra_White_550_N",
 HardwareItem: "Hardware_Legra_White_550_N",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_N"
}
,{
 _id: 23305,
 in_Object: "Legra_Terra_400_N",
 HardwareItem: "Hardware_Legra_Terra_400_N",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_N"
}
,{
 _id: 23306,
 in_Object: "Legra_Terra_450_N",
 HardwareItem: "Hardware_Legra_Terra_450_N",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_N"
}
,{
 _id: 23307,
 in_Object: "Legra_Terra_500_N",
 HardwareItem: "Hardware_Legra_Terra_500_N",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_N"
}
,{
 _id: 23308,
 in_Object: "Legra_Terra_550_N",
 HardwareItem: "Hardware_Legra_Terra_550_N",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_N"
}
,{
 _id: 23309,
 in_Object: "Legra_Orion_400_N",
 HardwareItem: "Hardware_Legra_Orion_400_N",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_N"
}
,{
 _id: 23310,
 in_Object: "Legra_Orion_450_N",
 HardwareItem: "Hardware_Legra_Orion_450_N",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_N"
}
,{
 _id: 23311,
 in_Object: "Legra_Orion_500_N",
 HardwareItem: "Hardware_Legra_Orion_500_N",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_N"
}
,{
 _id: 23312,
 in_Object: "Legra_Orion_550_N",
 HardwareItem: "Hardware_Legra_Orion_550_N",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_N"
}
,{
 _id: 23313,
 in_Object: "Legra_Inox_450_N",
 HardwareItem: "Hardware_Legra_Inox_450_N",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_N"
}
,{
 _id: 23314,
 in_Object: "Legra_Inox_500_N",
 HardwareItem: "Hardware_Legra_Inox_500_N",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_N"
}
,{
 _id: 23315,
 in_Object: "Legra_White_400_N_PTO",
 HardwareItem: "Hardware_Legra_White_400_N_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_N"
}
,{
 _id: 23316,
 in_Object: "Legra_White_450_N_PTO",
 HardwareItem: "Hardware_Legra_White_450_N_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_N"
}
,{
 _id: 23317,
 in_Object: "Legra_White_500_N_PTO",
 HardwareItem: "Hardware_Legra_White_500_N_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_N"
}
,{
 _id: 23318,
 in_Object: "Legra_White_550_N_PTO",
 HardwareItem: "Hardware_Legra_White_550_N_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_N"
}
,{
 _id: 23319,
 in_Object: "Legra_Terra_400_N_PTO",
 HardwareItem: "Hardware_Legra_Terra_400_N_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_N"
}
,{
 _id: 23320,
 in_Object: "Legra_Terra_450_N_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_N_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_N"
}
,{
 _id: 23321,
 in_Object: "Legra_Terra_500_N_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_N_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_N"
}
,{
 _id: 23322,
 in_Object: "Legra_Terra_550_N_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_N_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_N"
}
,{
 _id: 23323,
 in_Object: "Legra_Orion_400_N_PTO",
 HardwareItem: "Hardware_Legra_Orion_400_N_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_N"
}
,{
 _id: 23324,
 in_Object: "Legra_Orion_450_N_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_N_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_N"
}
,{
 _id: 23325,
 in_Object: "Legra_Orion_500_N_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_N_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_N"
}
,{
 _id: 23326,
 in_Object: "Legra_Orion_550_N_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_N_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_N"
}
,{
 _id: 23327,
 in_Object: "Legra_Inox_450_N_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_N_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_N"
}
,{
 _id: 23328,
 in_Object: "Legra_Inox_500_N_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_N_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_N"
}
,{
 _id: 23329,
 in_Object: "Legra_White_270_M",
 HardwareItem: "Hardware_Legra_White_270_M",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_White_270_M"
}
,{
 _id: 23330,
 in_Object: "Legra_White_300_M",
 HardwareItem: "Hardware_Legra_White_300_M",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_White_300_M"
}
,{
 _id: 23331,
 in_Object: "Legra_White_350_M",
 HardwareItem: "Hardware_Legra_White_350_M",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_White_350_M"
}
,{
 _id: 23332,
 in_Object: "Legra_White_400_M",
 HardwareItem: "Hardware_Legra_White_400_M",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_M"
}
,{
 _id: 23333,
 in_Object: "Legra_White_450_M",
 HardwareItem: "Hardware_Legra_White_450_M",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_M"
}
,{
 _id: 23334,
 in_Object: "Legra_White_500_M",
 HardwareItem: "Hardware_Legra_White_500_M",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_M"
}
,{
 _id: 23335,
 in_Object: "Legra_White_550_M",
 HardwareItem: "Hardware_Legra_White_550_M",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_M"
}
,{
 _id: 23336,
 in_Object: "Legra_White_600_M",
 HardwareItem: "Hardware_Legra_White_600_M",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_M"
}
,{
 _id: 23337,
 in_Object: "Legra_White_450_M_Heavy",
 HardwareItem: "Hardware_Legra_White_450_M_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_M_Heavy"
}
,{
 _id: 23338,
 in_Object: "Legra_White_500_M_Heavy",
 HardwareItem: "Hardware_Legra_White_500_M_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_M_Heavy"
}
,{
 _id: 23339,
 in_Object: "Legra_White_550_M_Heavy",
 HardwareItem: "Hardware_Legra_White_550_M_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_M_Heavy"
}
,{
 _id: 23340,
 in_Object: "Legra_White_600_M_Heavy",
 HardwareItem: "Hardware_Legra_White_600_M_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_M_Heavy"
}
,{
 _id: 23341,
 in_Object: "Legra_White_650_M_Heavy",
 HardwareItem: "Hardware_Legra_White_650_M_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_White_650_M_Heavy"
}
,{
 _id: 23342,
 in_Object: "Legra_Terra_270_M",
 HardwareItem: "Hardware_Legra_Terra_270_M",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Terra_270_M"
}
,{
 _id: 23343,
 in_Object: "Legra_Terra_300_M",
 HardwareItem: "Hardware_Legra_Terra_300_M",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Terra_300_M"
}
,{
 _id: 23344,
 in_Object: "Legra_Terra_350_M",
 HardwareItem: "Hardware_Legra_Terra_350_M",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Terra_350_M"
}
,{
 _id: 23345,
 in_Object: "Legra_Terra_400_M",
 HardwareItem: "Hardware_Legra_Terra_400_M",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_M"
}
,{
 _id: 23346,
 in_Object: "Legra_Terra_450_M",
 HardwareItem: "Hardware_Legra_Terra_450_M",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_M"
}
,{
 _id: 23347,
 in_Object: "Legra_Terra_500_M",
 HardwareItem: "Hardware_Legra_Terra_500_M",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_M"
}
,{
 _id: 23348,
 in_Object: "Legra_Terra_550_M",
 HardwareItem: "Hardware_Legra_Terra_550_M",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_M"
}
,{
 _id: 23349,
 in_Object: "Legra_Terra_600_M",
 HardwareItem: "Hardware_Legra_Terra_600_M",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_M"
}
,{
 _id: 23350,
 in_Object: "Legra_Terra_450_M_Heavy",
 HardwareItem: "Hardware_Legra_Terra_450_M_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_M_Heavy"
}
,{
 _id: 23351,
 in_Object: "Legra_Terra_500_M_Heavy",
 HardwareItem: "Hardware_Legra_Terra_500_M_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_M_Heavy"
}
,{
 _id: 23352,
 in_Object: "Legra_Terra_550_M_Heavy",
 HardwareItem: "Hardware_Legra_Terra_550_M_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_M_Heavy"
}
,{
 _id: 23353,
 in_Object: "Legra_Terra_600_M_Heavy",
 HardwareItem: "Hardware_Legra_Terra_600_M_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_M_Heavy"
}
,{
 _id: 23354,
 in_Object: "Legra_Terra_650_M_Heavy",
 HardwareItem: "Hardware_Legra_Terra_650_M_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Terra_650_M_Heavy"
}
,{
 _id: 23355,
 in_Object: "Legra_Orion_270_M",
 HardwareItem: "Hardware_Legra_Orion_270_M",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Orion_270_M"
}
,{
 _id: 23356,
 in_Object: "Legra_Orion_300_M",
 HardwareItem: "Hardware_Legra_Orion_300_M",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Orion_300_M"
}
,{
 _id: 23357,
 in_Object: "Legra_Orion_350_M",
 HardwareItem: "Hardware_Legra_Orion_350_M",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Orion_350_M"
}
,{
 _id: 23358,
 in_Object: "Legra_Orion_400_M",
 HardwareItem: "Hardware_Legra_Orion_400_M",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_M"
}
,{
 _id: 23359,
 in_Object: "Legra_Orion_450_M",
 HardwareItem: "Hardware_Legra_Orion_450_M",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_M"
}
,{
 _id: 23360,
 in_Object: "Legra_Orion_500_M",
 HardwareItem: "Hardware_Legra_Orion_500_M",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_M"
}
,{
 _id: 23361,
 in_Object: "Legra_Orion_550_M",
 HardwareItem: "Hardware_Legra_Orion_550_M",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_M"
}
,{
 _id: 23362,
 in_Object: "Legra_Orion_600_M",
 HardwareItem: "Hardware_Legra_Orion_600_M",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_M"
}
,{
 _id: 23363,
 in_Object: "Legra_Orion_450_M_Heavy",
 HardwareItem: "Hardware_Legra_Orion_450_M_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_M_Heavy"
}
,{
 _id: 23364,
 in_Object: "Legra_Orion_500_M_Heavy",
 HardwareItem: "Hardware_Legra_Orion_500_M_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_M_Heavy"
}
,{
 _id: 23365,
 in_Object: "Legra_Orion_550_M_Heavy",
 HardwareItem: "Hardware_Legra_Orion_550_M_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_M_Heavy"
}
,{
 _id: 23366,
 in_Object: "Legra_Orion_600_M_Heavy",
 HardwareItem: "Hardware_Legra_Orion_600_M_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_M_Heavy"
}
,{
 _id: 23367,
 in_Object: "Legra_Orion_650_M_Heavy",
 HardwareItem: "Hardware_Legra_Orion_650_M_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Orion_650_M_Heavy"
}
,{
 _id: 23368,
 in_Object: "Legra_Inox_270_M",
 HardwareItem: "Hardware_Legra_Inox_270_M",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Inox_270_M"
}
,{
 _id: 23369,
 in_Object: "Legra_Inox_300_M",
 HardwareItem: "Hardware_Legra_Inox_300_M",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Inox_300_M"
}
,{
 _id: 23370,
 in_Object: "Legra_Inox_350_M",
 HardwareItem: "Hardware_Legra_Inox_350_M",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Inox_350_M"
}
,{
 _id: 23371,
 in_Object: "Legra_Inox_400_M",
 HardwareItem: "Hardware_Legra_Inox_400_M",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_M"
}
,{
 _id: 23372,
 in_Object: "Legra_Inox_450_M",
 HardwareItem: "Hardware_Legra_Inox_450_M",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_M"
}
,{
 _id: 23373,
 in_Object: "Legra_Inox_500_M",
 HardwareItem: "Hardware_Legra_Inox_500_M",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_M"
}
,{
 _id: 23374,
 in_Object: "Legra_Inox_550_M",
 HardwareItem: "Hardware_Legra_Inox_550_M",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_M"
}
,{
 _id: 23375,
 in_Object: "Legra_Inox_600_M",
 HardwareItem: "Hardware_Legra_Inox_600_M",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Inox_600_M"
}
,{
 _id: 23376,
 in_Object: "Legra_Inox_450_M_Heavy",
 HardwareItem: "Hardware_Legra_Inox_450_M_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_M_Heavy"
}
,{
 _id: 23377,
 in_Object: "Legra_Inox_500_M_Heavy",
 HardwareItem: "Hardware_Legra_Inox_500_M_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_M_Heavy"
}
,{
 _id: 23378,
 in_Object: "Legra_Inox_550_M_Heavy",
 HardwareItem: "Hardware_Legra_Inox_550_M_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_M_Heavy"
}
,{
 _id: 23379,
 in_Object: "Legra_Inox_600_M_Heavy",
 HardwareItem: "Hardware_Legra_Inox_600_M_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Inox_600_M_Heavy"
}
,{
 _id: 23380,
 in_Object: "Legra_Inox_650_M_Heavy",
 HardwareItem: "Hardware_Legra_Inox_650_M_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Inox_650_M_Heavy"
}
,{
 _id: 23381,
 in_Object: "Legra_White_270_M_PTO",
 HardwareItem: "Hardware_Legra_White_270_M_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_White_270_M"
}
,{
 _id: 23382,
 in_Object: "Legra_White_300_M_PTO",
 HardwareItem: "Hardware_Legra_White_300_M_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_White_300_M"
}
,{
 _id: 23383,
 in_Object: "Legra_White_350_M_PTO",
 HardwareItem: "Hardware_Legra_White_350_M_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_White_350_M"
}
,{
 _id: 23384,
 in_Object: "Legra_White_400_M_PTO",
 HardwareItem: "Hardware_Legra_White_400_M_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_M"
}
,{
 _id: 23385,
 in_Object: "Legra_White_450_M_PTO",
 HardwareItem: "Hardware_Legra_White_450_M_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_M"
}
,{
 _id: 23386,
 in_Object: "Legra_White_500_M_PTO",
 HardwareItem: "Hardware_Legra_White_500_M_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_M"
}
,{
 _id: 23387,
 in_Object: "Legra_White_550_M_PTO",
 HardwareItem: "Hardware_Legra_White_550_M_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_M"
}
,{
 _id: 23388,
 in_Object: "Legra_White_600_M_PTO",
 HardwareItem: "Hardware_Legra_White_600_M_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_M"
}
,{
 _id: 23389,
 in_Object: "Legra_White_450_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_450_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_M_Heavy"
}
,{
 _id: 23390,
 in_Object: "Legra_White_500_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_500_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_M_Heavy"
}
,{
 _id: 23391,
 in_Object: "Legra_White_550_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_550_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_M_Heavy"
}
,{
 _id: 23392,
 in_Object: "Legra_White_600_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_600_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_M_Heavy"
}
,{
 _id: 23393,
 in_Object: "Legra_White_650_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_650_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_White_650_M_Heavy"
}
,{
 _id: 23394,
 in_Object: "Legra_Terra_270_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_270_M_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Terra_270_M"
}
,{
 _id: 23395,
 in_Object: "Legra_Terra_300_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_300_M_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Terra_300_M"
}
,{
 _id: 23396,
 in_Object: "Legra_Terra_350_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_350_M_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Terra_350_M"
}
,{
 _id: 23397,
 in_Object: "Legra_Terra_400_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_400_M_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_M"
}
,{
 _id: 23398,
 in_Object: "Legra_Terra_450_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_M_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_M"
}
,{
 _id: 23399,
 in_Object: "Legra_Terra_500_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_M_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_M"
}
,{
 _id: 23400,
 in_Object: "Legra_Terra_550_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_M_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_M"
}
,{
 _id: 23401,
 in_Object: "Legra_Terra_600_M_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_M_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_M"
}
,{
 _id: 23402,
 in_Object: "Legra_Terra_450_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_M_Heavy"
}
,{
 _id: 23403,
 in_Object: "Legra_Terra_500_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_M_Heavy"
}
,{
 _id: 23404,
 in_Object: "Legra_Terra_550_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_M_Heavy"
}
,{
 _id: 23405,
 in_Object: "Legra_Terra_600_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_M_Heavy"
}
,{
 _id: 23406,
 in_Object: "Legra_Terra_650_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_650_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Terra_650_M_Heavy"
}
,{
 _id: 23407,
 in_Object: "Legra_Orion_270_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_270_M_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Orion_270_M"
}
,{
 _id: 23408,
 in_Object: "Legra_Orion_300_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_300_M_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Orion_300_M"
}
,{
 _id: 23409,
 in_Object: "Legra_Orion_350_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_350_M_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Orion_350_M"
}
,{
 _id: 23410,
 in_Object: "Legra_Orion_400_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_400_M_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_M"
}
,{
 _id: 23411,
 in_Object: "Legra_Orion_450_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_M_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_M"
}
,{
 _id: 23412,
 in_Object: "Legra_Orion_500_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_M_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_M"
}
,{
 _id: 23413,
 in_Object: "Legra_Orion_550_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_M_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_M"
}
,{
 _id: 23414,
 in_Object: "Legra_Orion_600_M_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_M_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_M"
}
,{
 _id: 23415,
 in_Object: "Legra_Orion_450_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_M_Heavy"
}
,{
 _id: 23416,
 in_Object: "Legra_Orion_500_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_M_Heavy"
}
,{
 _id: 23417,
 in_Object: "Legra_Orion_550_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_M_Heavy"
}
,{
 _id: 23418,
 in_Object: "Legra_Orion_600_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_M_Heavy"
}
,{
 _id: 23419,
 in_Object: "Legra_Orion_650_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_650_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Orion_650_M_Heavy"
}
,{
 _id: 23420,
 in_Object: "Legra_Inox_270_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_270_M_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Inox_270_M"
}
,{
 _id: 23421,
 in_Object: "Legra_Inox_300_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_300_M_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Inox_300_M"
}
,{
 _id: 23422,
 in_Object: "Legra_Inox_350_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_350_M_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Inox_350_M"
}
,{
 _id: 23423,
 in_Object: "Legra_Inox_400_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_400_M_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_M"
}
,{
 _id: 23424,
 in_Object: "Legra_Inox_450_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_M_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_M"
}
,{
 _id: 23425,
 in_Object: "Legra_Inox_500_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_M_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_M"
}
,{
 _id: 23426,
 in_Object: "Legra_Inox_550_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_M_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_M"
}
,{
 _id: 23427,
 in_Object: "Legra_Inox_600_M_PTO",
 HardwareItem: "Hardware_Legra_Inox_600_M_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Inox_600_M"
}
,{
 _id: 23428,
 in_Object: "Legra_Inox_450_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_M_Heavy"
}
,{
 _id: 23429,
 in_Object: "Legra_Inox_500_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_M_Heavy"
}
,{
 _id: 23430,
 in_Object: "Legra_Inox_550_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_M_Heavy"
}
,{
 _id: 23431,
 in_Object: "Legra_Inox_600_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_600_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Inox_600_M_Heavy"
}
,{
 _id: 23432,
 in_Object: "Legra_Inox_650_M_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_650_M_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Inox_650_M_Heavy"
}
,{
 _id: 23433,
 in_Object: "Legra_White_300_K",
 HardwareItem: "Hardware_Legra_White_300_K",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_White_300_K"
}
,{
 _id: 23434,
 in_Object: "Legra_White_350_K",
 HardwareItem: "Hardware_Legra_White_350_K",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_White_350_K"
}
,{
 _id: 23435,
 in_Object: "Legra_White_400_K",
 HardwareItem: "Hardware_Legra_White_400_K",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_K"
}
,{
 _id: 23436,
 in_Object: "Legra_White_450_K",
 HardwareItem: "Hardware_Legra_White_450_K",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_K"
}
,{
 _id: 23437,
 in_Object: "Legra_White_500_K",
 HardwareItem: "Hardware_Legra_White_500_K",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_K"
}
,{
 _id: 23438,
 in_Object: "Legra_White_550_K",
 HardwareItem: "Hardware_Legra_White_550_K",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_K"
}
,{
 _id: 23439,
 in_Object: "Legra_White_600_K",
 HardwareItem: "Hardware_Legra_White_600_K",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_K"
}
,{
 _id: 23440,
 in_Object: "Legra_White_450_K_Heavy",
 HardwareItem: "Hardware_Legra_White_450_K_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_K_Heavy"
}
,{
 _id: 23441,
 in_Object: "Legra_White_500_K_Heavy",
 HardwareItem: "Hardware_Legra_White_500_K_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_K_Heavy"
}
,{
 _id: 23442,
 in_Object: "Legra_White_550_K_Heavy",
 HardwareItem: "Hardware_Legra_White_550_K_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_K_Heavy"
}
,{
 _id: 23443,
 in_Object: "Legra_White_600_K_Heavy",
 HardwareItem: "Hardware_Legra_White_600_K_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_K_Heavy"
}
,{
 _id: 23444,
 in_Object: "Legra_Terra_300_K",
 HardwareItem: "Hardware_Legra_Terra_300_K",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Terra_300_K"
}
,{
 _id: 23445,
 in_Object: "Legra_Terra_350_K",
 HardwareItem: "Hardware_Legra_Terra_350_K",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Terra_350_K"
}
,{
 _id: 23446,
 in_Object: "Legra_Terra_400_K",
 HardwareItem: "Hardware_Legra_Terra_400_K",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_K"
}
,{
 _id: 23447,
 in_Object: "Legra_Terra_450_K",
 HardwareItem: "Hardware_Legra_Terra_450_K",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_K"
}
,{
 _id: 23448,
 in_Object: "Legra_Terra_500_K",
 HardwareItem: "Hardware_Legra_Terra_500_K",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_K"
}
,{
 _id: 23449,
 in_Object: "Legra_Terra_550_K",
 HardwareItem: "Hardware_Legra_Terra_550_K",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_K"
}
,{
 _id: 23450,
 in_Object: "Legra_Terra_600_K",
 HardwareItem: "Hardware_Legra_Terra_600_K",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_K"
}
,{
 _id: 23451,
 in_Object: "Legra_Terra_450_K_Heavy",
 HardwareItem: "Hardware_Legra_Terra_450_K_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_K_Heavy"
}
,{
 _id: 23452,
 in_Object: "Legra_Terra_500_K_Heavy",
 HardwareItem: "Hardware_Legra_Terra_500_K_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_K_Heavy"
}
,{
 _id: 23453,
 in_Object: "Legra_Terra_550_K_Heavy",
 HardwareItem: "Hardware_Legra_Terra_550_K_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_K_Heavy"
}
,{
 _id: 23454,
 in_Object: "Legra_Terra_600_K_Heavy",
 HardwareItem: "Hardware_Legra_Terra_600_K_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_K_Heavy"
}
,{
 _id: 23455,
 in_Object: "Legra_Orion_300_K",
 HardwareItem: "Hardware_Legra_Orion_300_K",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Orion_300_K"
}
,{
 _id: 23456,
 in_Object: "Legra_Orion_350_K",
 HardwareItem: "Hardware_Legra_Orion_350_K",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Orion_350_K"
}
,{
 _id: 23457,
 in_Object: "Legra_Orion_400_K",
 HardwareItem: "Hardware_Legra_Orion_400_K",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_K"
}
,{
 _id: 23458,
 in_Object: "Legra_Orion_450_K",
 HardwareItem: "Hardware_Legra_Orion_450_K",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_K"
}
,{
 _id: 23459,
 in_Object: "Legra_Orion_500_K",
 HardwareItem: "Hardware_Legra_Orion_500_K",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_K"
}
,{
 _id: 23460,
 in_Object: "Legra_Orion_550_K",
 HardwareItem: "Hardware_Legra_Orion_550_K",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_K"
}
,{
 _id: 23461,
 in_Object: "Legra_Orion_600_K",
 HardwareItem: "Hardware_Legra_Orion_600_K",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_K"
}
,{
 _id: 23462,
 in_Object: "Legra_Orion_450_K_Heavy",
 HardwareItem: "Hardware_Legra_Orion_450_K_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_K_Heavy"
}
,{
 _id: 23463,
 in_Object: "Legra_Orion_500_K_Heavy",
 HardwareItem: "Hardware_Legra_Orion_500_K_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_K_Heavy"
}
,{
 _id: 23464,
 in_Object: "Legra_Orion_550_K_Heavy",
 HardwareItem: "Hardware_Legra_Orion_550_K_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_K_Heavy"
}
,{
 _id: 23465,
 in_Object: "Legra_Orion_600_K_Heavy",
 HardwareItem: "Hardware_Legra_Orion_600_K_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_K_Heavy"
}
,{
 _id: 23466,
 in_Object: "Legra_Inox_350_K",
 HardwareItem: "Hardware_Legra_Inox_350_K",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Inox_350_K"
}
,{
 _id: 23467,
 in_Object: "Legra_Inox_400_K",
 HardwareItem: "Hardware_Legra_Inox_400_K",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_K"
}
,{
 _id: 23468,
 in_Object: "Legra_Inox_450_K",
 HardwareItem: "Hardware_Legra_Inox_450_K",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_K"
}
,{
 _id: 23469,
 in_Object: "Legra_Inox_500_K",
 HardwareItem: "Hardware_Legra_Inox_500_K",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_K"
}
,{
 _id: 23470,
 in_Object: "Legra_Inox_550_K",
 HardwareItem: "Hardware_Legra_Inox_550_K",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_K"
}
,{
 _id: 23471,
 in_Object: "Legra_Inox_450_K_Heavy",
 HardwareItem: "Hardware_Legra_Inox_450_K_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_K_Heavy"
}
,{
 _id: 23472,
 in_Object: "Legra_Inox_500_K_Heavy",
 HardwareItem: "Hardware_Legra_Inox_500_K_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_K_Heavy"
}
,{
 _id: 23473,
 in_Object: "Legra_Inox_550_K_Heavy",
 HardwareItem: "Hardware_Legra_Inox_550_K_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_K_Heavy"
}
,{
 _id: 23474,
 in_Object: "Legra_White_300_K_PTO",
 HardwareItem: "Hardware_Legra_White_300_K_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_White_300_K"
}
,{
 _id: 23475,
 in_Object: "Legra_White_350_K_PTO",
 HardwareItem: "Hardware_Legra_White_350_K_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_White_350_K"
}
,{
 _id: 23476,
 in_Object: "Legra_White_400_K_PTO",
 HardwareItem: "Hardware_Legra_White_400_K_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_K"
}
,{
 _id: 23477,
 in_Object: "Legra_White_450_K_PTO",
 HardwareItem: "Hardware_Legra_White_450_K_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_K"
}
,{
 _id: 23478,
 in_Object: "Legra_White_500_K_PTO",
 HardwareItem: "Hardware_Legra_White_500_K_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_K"
}
,{
 _id: 23479,
 in_Object: "Legra_White_550_K_PTO",
 HardwareItem: "Hardware_Legra_White_550_K_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_K"
}
,{
 _id: 23480,
 in_Object: "Legra_White_600_K_PTO",
 HardwareItem: "Hardware_Legra_White_600_K_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_K"
}
,{
 _id: 23481,
 in_Object: "Legra_White_450_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_450_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_K_Heavy"
}
,{
 _id: 23482,
 in_Object: "Legra_White_500_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_500_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_K_Heavy"
}
,{
 _id: 23483,
 in_Object: "Legra_White_550_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_550_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_K_Heavy"
}
,{
 _id: 23484,
 in_Object: "Legra_White_600_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_600_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_K_Heavy"
}
,{
 _id: 23485,
 in_Object: "Legra_Terra_300_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_300_K_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Terra_300_K"
}
,{
 _id: 23486,
 in_Object: "Legra_Terra_350_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_350_K_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Terra_350_K"
}
,{
 _id: 23487,
 in_Object: "Legra_Terra_400_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_400_K_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_K"
}
,{
 _id: 23488,
 in_Object: "Legra_Terra_450_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_K_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_K"
}
,{
 _id: 23489,
 in_Object: "Legra_Terra_500_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_K_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_K"
}
,{
 _id: 23490,
 in_Object: "Legra_Terra_550_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_K_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_K"
}
,{
 _id: 23491,
 in_Object: "Legra_Terra_600_K_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_K_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_K"
}
,{
 _id: 23492,
 in_Object: "Legra_Terra_450_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_K_Heavy"
}
,{
 _id: 23493,
 in_Object: "Legra_Terra_500_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_K_Heavy"
}
,{
 _id: 23494,
 in_Object: "Legra_Terra_550_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_K_Heavy"
}
,{
 _id: 23495,
 in_Object: "Legra_Terra_600_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_K_Heavy"
}
,{
 _id: 23496,
 in_Object: "Legra_Orion_300_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_300_K_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Orion_300_K"
}
,{
 _id: 23497,
 in_Object: "Legra_Orion_350_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_350_K_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Orion_350_K"
}
,{
 _id: 23498,
 in_Object: "Legra_Orion_400_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_400_K_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_K"
}
,{
 _id: 23499,
 in_Object: "Legra_Orion_450_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_K_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_K"
}
,{
 _id: 23500,
 in_Object: "Legra_Orion_500_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_K_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_K"
}
,{
 _id: 23501,
 in_Object: "Legra_Orion_550_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_K_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_K"
}
,{
 _id: 23502,
 in_Object: "Legra_Orion_600_K_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_K_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_K"
}
,{
 _id: 23503,
 in_Object: "Legra_Orion_450_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_K_Heavy"
}
,{
 _id: 23504,
 in_Object: "Legra_Orion_500_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_K_Heavy"
}
,{
 _id: 23505,
 in_Object: "Legra_Orion_550_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_K_Heavy"
}
,{
 _id: 23506,
 in_Object: "Legra_Orion_600_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_K_Heavy"
}
,{
 _id: 23507,
 in_Object: "Legra_Inox_350_K_PTO",
 HardwareItem: "Hardware_Legra_Inox_350_K_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Inox_350_K"
}
,{
 _id: 23508,
 in_Object: "Legra_Inox_400_K_PTO",
 HardwareItem: "Hardware_Legra_Inox_400_K_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_K"
}
,{
 _id: 23509,
 in_Object: "Legra_Inox_450_K_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_K_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_K"
}
,{
 _id: 23510,
 in_Object: "Legra_Inox_500_K_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_K_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_K"
}
,{
 _id: 23511,
 in_Object: "Legra_Inox_550_K_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_K_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_K"
}
,{
 _id: 23512,
 in_Object: "Legra_Inox_450_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_K_Heavy"
}
,{
 _id: 23513,
 in_Object: "Legra_Inox_500_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_K_Heavy"
}
,{
 _id: 23514,
 in_Object: "Legra_Inox_550_K_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_K_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_K_Heavy"
}
,{
 _id: 23515,
 in_Object: "Legra_White_270_C",
 HardwareItem: "Hardware_Legra_White_270_C",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_White_270_C"
}
,{
 _id: 23516,
 in_Object: "Legra_White_300_C",
 HardwareItem: "Hardware_Legra_White_300_C",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_White_300_C"
}
,{
 _id: 23517,
 in_Object: "Legra_White_350_C",
 HardwareItem: "Hardware_Legra_White_350_C",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_White_350_C"
}
,{
 _id: 23518,
 in_Object: "Legra_White_400_C",
 HardwareItem: "Hardware_Legra_White_400_C",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_C"
}
,{
 _id: 23519,
 in_Object: "Legra_White_450_C",
 HardwareItem: "Hardware_Legra_White_450_C",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_C"
}
,{
 _id: 23520,
 in_Object: "Legra_White_500_C",
 HardwareItem: "Hardware_Legra_White_500_C",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_C"
}
,{
 _id: 23521,
 in_Object: "Legra_White_550_C",
 HardwareItem: "Hardware_Legra_White_550_C",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_C"
}
,{
 _id: 23522,
 in_Object: "Legra_White_600_C",
 HardwareItem: "Hardware_Legra_White_600_C",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_C"
}
,{
 _id: 23523,
 in_Object: "Legra_White_450_C_Heavy",
 HardwareItem: "Hardware_Legra_White_450_C_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_C_Heavy"
}
,{
 _id: 23524,
 in_Object: "Legra_White_500_C_Heavy",
 HardwareItem: "Hardware_Legra_White_500_C_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_C_Heavy"
}
,{
 _id: 23525,
 in_Object: "Legra_White_550_C_Heavy",
 HardwareItem: "Hardware_Legra_White_550_C_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_C_Heavy"
}
,{
 _id: 23526,
 in_Object: "Legra_White_600_C_Heavy",
 HardwareItem: "Hardware_Legra_White_600_C_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_C_Heavy"
}
,{
 _id: 23527,
 in_Object: "Legra_White_650_C_Heavy",
 HardwareItem: "Hardware_Legra_White_650_C_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_White_650_C_Heavy"
}
,{
 _id: 23528,
 in_Object: "Legra_Terra_270_C",
 HardwareItem: "Hardware_Legra_Terra_270_C",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Terra_270_C"
}
,{
 _id: 23529,
 in_Object: "Legra_Terra_300_C",
 HardwareItem: "Hardware_Legra_Terra_300_C",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Terra_300_C"
}
,{
 _id: 23530,
 in_Object: "Legra_Terra_350_C",
 HardwareItem: "Hardware_Legra_Terra_350_C",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Terra_350_C"
}
,{
 _id: 23531,
 in_Object: "Legra_Terra_400_C",
 HardwareItem: "Hardware_Legra_Terra_400_C",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_C"
}
,{
 _id: 23532,
 in_Object: "Legra_Terra_450_C",
 HardwareItem: "Hardware_Legra_Terra_450_C",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_C"
}
,{
 _id: 23533,
 in_Object: "Legra_Terra_500_C",
 HardwareItem: "Hardware_Legra_Terra_500_C",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_C"
}
,{
 _id: 23534,
 in_Object: "Legra_Terra_550_C",
 HardwareItem: "Hardware_Legra_Terra_550_C",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_C"
}
,{
 _id: 23535,
 in_Object: "Legra_Terra_600_C",
 HardwareItem: "Hardware_Legra_Terra_600_C",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_C"
}
,{
 _id: 23536,
 in_Object: "Legra_Terra_450_C_Heavy",
 HardwareItem: "Hardware_Legra_Terra_450_C_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_C_Heavy"
}
,{
 _id: 23537,
 in_Object: "Legra_Terra_500_C_Heavy",
 HardwareItem: "Hardware_Legra_Terra_500_C_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_C_Heavy"
}
,{
 _id: 23538,
 in_Object: "Legra_Terra_550_C_Heavy",
 HardwareItem: "Hardware_Legra_Terra_550_C_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_C_Heavy"
}
,{
 _id: 23539,
 in_Object: "Legra_Terra_600_C_Heavy",
 HardwareItem: "Hardware_Legra_Terra_600_C_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_C_Heavy"
}
,{
 _id: 23540,
 in_Object: "Legra_Terra_650_C_Heavy",
 HardwareItem: "Hardware_Legra_Terra_650_C_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Terra_650_C_Heavy"
}
,{
 _id: 23541,
 in_Object: "Legra_Orion_270_C",
 HardwareItem: "Hardware_Legra_Orion_270_C",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Orion_270_C"
}
,{
 _id: 23542,
 in_Object: "Legra_Orion_300_C",
 HardwareItem: "Hardware_Legra_Orion_300_C",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Orion_300_C"
}
,{
 _id: 23543,
 in_Object: "Legra_Orion_350_C",
 HardwareItem: "Hardware_Legra_Orion_350_C",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Orion_350_C"
}
,{
 _id: 23544,
 in_Object: "Legra_Orion_400_C",
 HardwareItem: "Hardware_Legra_Orion_400_C",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_C"
}
,{
 _id: 23545,
 in_Object: "Legra_Orion_450_C",
 HardwareItem: "Hardware_Legra_Orion_450_C",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_C"
}
,{
 _id: 23546,
 in_Object: "Legra_Orion_500_C",
 HardwareItem: "Hardware_Legra_Orion_500_C",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_C"
}
,{
 _id: 23547,
 in_Object: "Legra_Orion_550_C",
 HardwareItem: "Hardware_Legra_Orion_550_C",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_C"
}
,{
 _id: 23548,
 in_Object: "Legra_Orion_600_C",
 HardwareItem: "Hardware_Legra_Orion_600_C",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_C"
}
,{
 _id: 23549,
 in_Object: "Legra_Orion_450_C_Heavy",
 HardwareItem: "Hardware_Legra_Orion_450_C_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_C_Heavy"
}
,{
 _id: 23550,
 in_Object: "Legra_Orion_500_C_Heavy",
 HardwareItem: "Hardware_Legra_Orion_500_C_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_C_Heavy"
}
,{
 _id: 23551,
 in_Object: "Legra_Orion_550_C_Heavy",
 HardwareItem: "Hardware_Legra_Orion_550_C_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_C_Heavy"
}
,{
 _id: 23552,
 in_Object: "Legra_Orion_600_C_Heavy",
 HardwareItem: "Hardware_Legra_Orion_600_C_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_C_Heavy"
}
,{
 _id: 23553,
 in_Object: "Legra_Orion_650_C_Heavy",
 HardwareItem: "Hardware_Legra_Orion_650_C_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Orion_650_C_Heavy"
}
,{
 _id: 23554,
 in_Object: "Legra_Inox_270_C",
 HardwareItem: "Hardware_Legra_Inox_270_C",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Inox_270_C"
}
,{
 _id: 23555,
 in_Object: "Legra_Inox_300_C",
 HardwareItem: "Hardware_Legra_Inox_300_C",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Inox_300_C"
}
,{
 _id: 23556,
 in_Object: "Legra_Inox_350_C",
 HardwareItem: "Hardware_Legra_Inox_350_C",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Inox_350_C"
}
,{
 _id: 23557,
 in_Object: "Legra_Inox_400_C",
 HardwareItem: "Hardware_Legra_Inox_400_C",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_C"
}
,{
 _id: 23558,
 in_Object: "Legra_Inox_450_C",
 HardwareItem: "Hardware_Legra_Inox_450_C",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_C"
}
,{
 _id: 23559,
 in_Object: "Legra_Inox_500_C",
 HardwareItem: "Hardware_Legra_Inox_500_C",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_C"
}
,{
 _id: 23560,
 in_Object: "Legra_Inox_550_C",
 HardwareItem: "Hardware_Legra_Inox_550_C",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_C"
}
,{
 _id: 23561,
 in_Object: "Legra_Inox_600_C",
 HardwareItem: "Hardware_Legra_Inox_600_C",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Inox_600_C"
}
,{
 _id: 23562,
 in_Object: "Legra_Inox_450_C_Heavy",
 HardwareItem: "Hardware_Legra_Inox_450_C_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_C_Heavy"
}
,{
 _id: 23563,
 in_Object: "Legra_Inox_500_C_Heavy",
 HardwareItem: "Hardware_Legra_Inox_500_C_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_C_Heavy"
}
,{
 _id: 23564,
 in_Object: "Legra_Inox_550_C_Heavy",
 HardwareItem: "Hardware_Legra_Inox_550_C_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_C_Heavy"
}
,{
 _id: 23565,
 in_Object: "Legra_Inox_600_C_Heavy",
 HardwareItem: "Hardware_Legra_Inox_600_C_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Inox_600_C_Heavy"
}
,{
 _id: 23566,
 in_Object: "Legra_Inox_650_C_Heavy",
 HardwareItem: "Hardware_Legra_Inox_650_C_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Inox_650_C_Heavy"
}
,{
 _id: 23567,
 in_Object: "Legra_White_270_C_PTO",
 HardwareItem: "Hardware_Legra_White_270_C_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_White_270_C"
}
,{
 _id: 23568,
 in_Object: "Legra_White_300_C_PTO",
 HardwareItem: "Hardware_Legra_White_300_C_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_White_300_C"
}
,{
 _id: 23569,
 in_Object: "Legra_White_350_C_PTO",
 HardwareItem: "Hardware_Legra_White_350_C_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_White_350_C"
}
,{
 _id: 23570,
 in_Object: "Legra_White_400_C_PTO",
 HardwareItem: "Hardware_Legra_White_400_C_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_C"
}
,{
 _id: 23571,
 in_Object: "Legra_White_450_C_PTO",
 HardwareItem: "Hardware_Legra_White_450_C_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_C"
}
,{
 _id: 23572,
 in_Object: "Legra_White_500_C_PTO",
 HardwareItem: "Hardware_Legra_White_500_C_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_C"
}
,{
 _id: 23573,
 in_Object: "Legra_White_550_C_PTO",
 HardwareItem: "Hardware_Legra_White_550_C_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_C"
}
,{
 _id: 23574,
 in_Object: "Legra_White_600_C_PTO",
 HardwareItem: "Hardware_Legra_White_600_C_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_C"
}
,{
 _id: 23575,
 in_Object: "Legra_White_450_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_450_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_C_Heavy"
}
,{
 _id: 23576,
 in_Object: "Legra_White_500_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_500_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_C_Heavy"
}
,{
 _id: 23577,
 in_Object: "Legra_White_550_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_550_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_C_Heavy"
}
,{
 _id: 23578,
 in_Object: "Legra_White_600_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_600_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_C_Heavy"
}
,{
 _id: 23579,
 in_Object: "Legra_White_650_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_650_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_White_650_C_Heavy"
}
,{
 _id: 23580,
 in_Object: "Legra_Terra_270_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_270_C_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Terra_270_C"
}
,{
 _id: 23581,
 in_Object: "Legra_Terra_300_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_300_C_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Terra_300_C"
}
,{
 _id: 23582,
 in_Object: "Legra_Terra_350_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_350_C_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Terra_350_C"
}
,{
 _id: 23583,
 in_Object: "Legra_Terra_400_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_400_C_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_C"
}
,{
 _id: 23584,
 in_Object: "Legra_Terra_450_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_C_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_C"
}
,{
 _id: 23585,
 in_Object: "Legra_Terra_500_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_C_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_C"
}
,{
 _id: 23586,
 in_Object: "Legra_Terra_550_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_C_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_C"
}
,{
 _id: 23587,
 in_Object: "Legra_Terra_600_C_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_C_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_C"
}
,{
 _id: 23588,
 in_Object: "Legra_Terra_450_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_C_Heavy"
}
,{
 _id: 23589,
 in_Object: "Legra_Terra_500_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_C_Heavy"
}
,{
 _id: 23590,
 in_Object: "Legra_Terra_550_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_C_Heavy"
}
,{
 _id: 23591,
 in_Object: "Legra_Terra_600_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_C_Heavy"
}
,{
 _id: 23592,
 in_Object: "Legra_Terra_650_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_650_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Terra_650_C_Heavy"
}
,{
 _id: 23593,
 in_Object: "Legra_Orion_270_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_270_C_PTO",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Orion_270_C"
}
,{
 _id: 23594,
 in_Object: "Legra_Orion_300_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_300_C_PTO",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Orion_300_C"
}
,{
 _id: 23595,
 in_Object: "Legra_Orion_350_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_350_C_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Orion_350_C"
}
,{
 _id: 23596,
 in_Object: "Legra_Orion_400_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_400_C_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_C"
}
,{
 _id: 23597,
 in_Object: "Legra_Orion_450_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_C_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_C"
}
,{
 _id: 23598,
 in_Object: "Legra_Orion_500_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_C_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_C"
}
,{
 _id: 23599,
 in_Object: "Legra_Orion_550_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_C_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_C"
}
,{
 _id: 23600,
 in_Object: "Legra_Orion_600_C_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_C_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_C"
}
,{
 _id: 23601,
 in_Object: "Legra_Orion_450_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_C_Heavy"
}
,{
 _id: 23602,
 in_Object: "Legra_Orion_500_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_C_Heavy"
}
,{
 _id: 23603,
 in_Object: "Legra_Orion_550_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_C_Heavy"
}
,{
 _id: 23604,
 in_Object: "Legra_Orion_600_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_C_Heavy"
}
,{
 _id: 23605,
 in_Object: "Legra_Orion_650_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_650_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Orion_650_C_Heavy"
}
,{
 _id: 23606,
 in_Object: "Legra_Inox_270_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_270_C",
 ProcessingItem: "Processing_Legrabox_270",
 GraphicItem: "GraphicLegra_Inox_270_C"
}
,{
 _id: 23607,
 in_Object: "Legra_Inox_300_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_300_C",
 ProcessingItem: "Processing_Legrabox_300",
 GraphicItem: "GraphicLegra_Inox_300_C"
}
,{
 _id: 23608,
 in_Object: "Legra_Inox_350_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_350_C_PTO",
 ProcessingItem: "Processing_Legrabox_350",
 GraphicItem: "GraphicLegra_Inox_350_C"
}
,{
 _id: 23609,
 in_Object: "Legra_Inox_400_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_400_C_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_C"
}
,{
 _id: 23610,
 in_Object: "Legra_Inox_450_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_C_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_C"
}
,{
 _id: 23611,
 in_Object: "Legra_Inox_500_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_C_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_C"
}
,{
 _id: 23612,
 in_Object: "Legra_Inox_550_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_C_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_C"
}
,{
 _id: 23613,
 in_Object: "Legra_Inox_600_C_PTO",
 HardwareItem: "Hardware_Legra_Inox_600_C_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Inox_600_C"
}
,{
 _id: 23614,
 in_Object: "Legra_Inox_450_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_C_Heavy"
}
,{
 _id: 23615,
 in_Object: "Legra_Inox_500_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_C_Heavy"
}
,{
 _id: 23616,
 in_Object: "Legra_Inox_550_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_C_Heavy"
}
,{
 _id: 23617,
 in_Object: "Legra_Inox_600_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_600_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Inox_600_C_Heavy"
}
,{
 _id: 23618,
 in_Object: "Legra_Inox_650_C_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_650_C_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Inox_650_C_Heavy"
}
,{
 _id: 23619,
 in_Object: "Legra_White_400_F",
 HardwareItem: "Hardware_Legra_White_400_F",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_F"
}
,{
 _id: 23620,
 in_Object: "Legra_White_450_F",
 HardwareItem: "Hardware_Legra_White_450_F",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_F"
}
,{
 _id: 23621,
 in_Object: "Legra_White_500_F",
 HardwareItem: "Hardware_Legra_White_500_F",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_F"
}
,{
 _id: 23622,
 in_Object: "Legra_White_550_F",
 HardwareItem: "Hardware_Legra_White_550_F",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_F"
}
,{
 _id: 23623,
 in_Object: "Legra_White_600_F",
 HardwareItem: "Hardware_Legra_White_600_F",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_F"
}
,{
 _id: 23624,
 in_Object: "Legra_White_450_F_Heavy",
 HardwareItem: "Hardware_Legra_White_450_F_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_F_Heavy"
}
,{
 _id: 23625,
 in_Object: "Legra_White_500_F_Heavy",
 HardwareItem: "Hardware_Legra_White_500_F_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_F_Heavy"
}
,{
 _id: 23626,
 in_Object: "Legra_White_550_F_Heavy",
 HardwareItem: "Hardware_Legra_White_550_F_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_F_Heavy"
}
,{
 _id: 23627,
 in_Object: "Legra_White_600_F_Heavy",
 HardwareItem: "Hardware_Legra_White_600_F_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_F_Heavy"
}
,{
 _id: 23628,
 in_Object: "Legra_White_650_F_Heavy",
 HardwareItem: "Hardware_Legra_White_650_F_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_White_650_F_Heavy"
}
,{
 _id: 23629,
 in_Object: "Legra_Terra_400_F",
 HardwareItem: "Hardware_Legra_Terra_400_F",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_F"
}
,{
 _id: 23630,
 in_Object: "Legra_Terra_450_F",
 HardwareItem: "Hardware_Legra_Terra_450_F",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_F"
}
,{
 _id: 23631,
 in_Object: "Legra_Terra_500_F",
 HardwareItem: "Hardware_Legra_Terra_500_F",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_F"
}
,{
 _id: 23632,
 in_Object: "Legra_Terra_550_F",
 HardwareItem: "Hardware_Legra_Terra_550_F",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_F"
}
,{
 _id: 23633,
 in_Object: "Legra_Terra_600_F",
 HardwareItem: "Hardware_Legra_Terra_600_F",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_F"
}
,{
 _id: 23634,
 in_Object: "Legra_Terra_450_F_Heavy",
 HardwareItem: "Hardware_Legra_Terra_450_F_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_F_Heavy"
}
,{
 _id: 23635,
 in_Object: "Legra_Terra_500_F_Heavy",
 HardwareItem: "Hardware_Legra_Terra_500_F_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_F_Heavy"
}
,{
 _id: 23636,
 in_Object: "Legra_Terra_550_F_Heavy",
 HardwareItem: "Hardware_Legra_Terra_550_F_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_F_Heavy"
}
,{
 _id: 23637,
 in_Object: "Legra_Terra_600_F_Heavy",
 HardwareItem: "Hardware_Legra_Terra_600_F_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_F_Heavy"
}
,{
 _id: 23638,
 in_Object: "Legra_Terra_650_F_Heavy",
 HardwareItem: "Hardware_Legra_Terra_650_F_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Terra_650_F_Heavy"
}
,{
 _id: 23639,
 in_Object: "Legra_Orion_400_F",
 HardwareItem: "Hardware_Legra_Orion_400_F",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_F"
}
,{
 _id: 23640,
 in_Object: "Legra_Orion_450_F",
 HardwareItem: "Hardware_Legra_Orion_450_F",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_F"
}
,{
 _id: 23641,
 in_Object: "Legra_Orion_500_F",
 HardwareItem: "Hardware_Legra_Orion_500_F",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_F"
}
,{
 _id: 23642,
 in_Object: "Legra_Orion_550_F",
 HardwareItem: "Hardware_Legra_Orion_550_F",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_F"
}
,{
 _id: 23643,
 in_Object: "Legra_Orion_600_F",
 HardwareItem: "Hardware_Legra_Orion_600_F",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_F"
}
,{
 _id: 23644,
 in_Object: "Legra_Orion_450_F_Heavy",
 HardwareItem: "Hardware_Legra_Orion_450_F_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_F_Heavy"
}
,{
 _id: 23645,
 in_Object: "Legra_Orion_500_F_Heavy",
 HardwareItem: "Hardware_Legra_Orion_500_F_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_F_Heavy"
}
,{
 _id: 23646,
 in_Object: "Legra_Orion_550_F_Heavy",
 HardwareItem: "Hardware_Legra_Orion_550_F_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_F_Heavy"
}
,{
 _id: 23647,
 in_Object: "Legra_Orion_600_F_Heavy",
 HardwareItem: "Hardware_Legra_Orion_600_F_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_F_Heavy"
}
,{
 _id: 23648,
 in_Object: "Legra_Orion_650_F_Heavy",
 HardwareItem: "Hardware_Legra_Orion_650_F_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Orion_650_F_Heavy"
}
,{
 _id: 23649,
 in_Object: "Legra_Inox_400_F",
 HardwareItem: "Hardware_Legra_Inox_400_F",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_F"
}
,{
 _id: 23650,
 in_Object: "Legra_Inox_450_F",
 HardwareItem: "Hardware_Legra_Inox_450_F",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_F"
}
,{
 _id: 23651,
 in_Object: "Legra_Inox_500_F",
 HardwareItem: "Hardware_Legra_Inox_500_F",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_F"
}
,{
 _id: 23652,
 in_Object: "Legra_Inox_550_F",
 HardwareItem: "Hardware_Legra_Inox_550_F",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_F"
}
,{
 _id: 23653,
 in_Object: "Legra_Inox_600_F",
 HardwareItem: "Hardware_Legra_Inox_600_F",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Inox_600_F"
}
,{
 _id: 23654,
 in_Object: "Legra_Inox_450_F_Heavy",
 HardwareItem: "Hardware_Legra_Inox_450_F_Heavy",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_F_Heavy"
}
,{
 _id: 23655,
 in_Object: "Legra_Inox_500_F_Heavy",
 HardwareItem: "Hardware_Legra_Inox_500_F_Heavy",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_F_Heavy"
}
,{
 _id: 23656,
 in_Object: "Legra_Inox_550_F_Heavy",
 HardwareItem: "Hardware_Legra_Inox_550_F_Heavy",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_F_Heavy"
}
,{
 _id: 23657,
 in_Object: "Legra_Inox_600_F_Heavy",
 HardwareItem: "Hardware_Legra_Inox_600_F_Heavy",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Inox_600_F_Heavy"
}
,{
 _id: 23658,
 in_Object: "Legra_Inox_650_F_Heavy",
 HardwareItem: "Hardware_Legra_Inox_650_F_Heavy",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Inox_650_F_Heavy"
}
,{
 _id: 23659,
 in_Object: "Legra_White_400_F_PTO",
 HardwareItem: "Hardware_Legra_White_400_F_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_White_400_F"
}
,{
 _id: 23660,
 in_Object: "Legra_White_450_F_PTO",
 HardwareItem: "Hardware_Legra_White_450_F_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_White_450_F"
}
,{
 _id: 23661,
 in_Object: "Legra_White_500_F_PTO",
 HardwareItem: "Hardware_Legra_White_500_F_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_White_500_F"
}
,{
 _id: 23662,
 in_Object: "Legra_White_550_F_PTO",
 HardwareItem: "Hardware_Legra_White_550_F_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_White_550_F"
}
,{
 _id: 23663,
 in_Object: "Legra_White_600_F_PTO",
 HardwareItem: "Hardware_Legra_White_600_F_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_White_600_F"
}
,{
 _id: 23664,
 in_Object: "Legra_White_450_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_450_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_White_450_F_Heavy"
}
,{
 _id: 23665,
 in_Object: "Legra_White_500_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_500_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_White_500_F_Heavy"
}
,{
 _id: 23666,
 in_Object: "Legra_White_550_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_550_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_White_550_F_Heavy"
}
,{
 _id: 23667,
 in_Object: "Legra_White_600_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_600_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_White_600_F_Heavy"
}
,{
 _id: 23668,
 in_Object: "Legra_White_650_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_White_650_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_White_650_F_Heavy"
}
,{
 _id: 23669,
 in_Object: "Legra_Terra_400_F_PTO",
 HardwareItem: "Hardware_Legra_Terra_400_F_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Terra_400_F"
}
,{
 _id: 23670,
 in_Object: "Legra_Terra_450_F_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_F_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Terra_450_F"
}
,{
 _id: 23671,
 in_Object: "Legra_Terra_500_F_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_F_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Terra_500_F"
}
,{
 _id: 23672,
 in_Object: "Legra_Terra_550_F_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_F_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Terra_550_F"
}
,{
 _id: 23673,
 in_Object: "Legra_Terra_600_F_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_F_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Terra_600_F"
}
,{
 _id: 23674,
 in_Object: "Legra_Terra_450_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_450_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Terra_450_F_Heavy"
}
,{
 _id: 23675,
 in_Object: "Legra_Terra_500_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_500_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Terra_500_F_Heavy"
}
,{
 _id: 23676,
 in_Object: "Legra_Terra_550_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_550_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Terra_550_F_Heavy"
}
,{
 _id: 23677,
 in_Object: "Legra_Terra_600_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_600_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Terra_600_F_Heavy"
}
,{
 _id: 23678,
 in_Object: "Legra_Terra_650_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Terra_650_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Terra_650_F_Heavy"
}
,{
 _id: 23679,
 in_Object: "Legra_Orion_400_F_PTO",
 HardwareItem: "Hardware_Legra_Orion_400_F_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Orion_400_F"
}
,{
 _id: 23680,
 in_Object: "Legra_Orion_450_F_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_F_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Orion_450_F"
}
,{
 _id: 23681,
 in_Object: "Legra_Orion_500_F_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_F_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Orion_500_F"
}
,{
 _id: 23682,
 in_Object: "Legra_Orion_550_F_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_F_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Orion_550_F"
}
,{
 _id: 23683,
 in_Object: "Legra_Orion_600_F_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_F_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Orion_600_F"
}
,{
 _id: 23684,
 in_Object: "Legra_Orion_450_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_450_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Orion_450_F_Heavy"
}
,{
 _id: 23685,
 in_Object: "Legra_Orion_500_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_500_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Orion_500_F_Heavy"
}
,{
 _id: 23686,
 in_Object: "Legra_Orion_550_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_550_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Orion_550_F_Heavy"
}
,{
 _id: 23687,
 in_Object: "Legra_Orion_600_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_600_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Orion_600_F_Heavy"
}
,{
 _id: 23688,
 in_Object: "Legra_Orion_650_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Orion_650_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Orion_650_F_Heavy"
}
,{
 _id: 23689,
 in_Object: "Legra_Inox_400_F_PTO",
 HardwareItem: "Hardware_Legra_Inox_400_F_PTO",
 ProcessingItem: "Processing_Legrabox_400",
 GraphicItem: "GraphicLegra_Inox_400_F"
}
,{
 _id: 23690,
 in_Object: "Legra_Inox_450_F_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_F_PTO",
 ProcessingItem: "Processing_Legrabox_450",
 GraphicItem: "GraphicLegra_Inox_450_F"
}
,{
 _id: 23691,
 in_Object: "Legra_Inox_500_F_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_F_PTO",
 ProcessingItem: "Processing_Legrabox_500",
 GraphicItem: "GraphicLegra_Inox_500_F"
}
,{
 _id: 23692,
 in_Object: "Legra_Inox_550_F_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_F_PTO",
 ProcessingItem: "Processing_Legrabox_550",
 GraphicItem: "GraphicLegra_Inox_550_F"
}
,{
 _id: 23693,
 in_Object: "Legra_Inox_600_F_PTO",
 HardwareItem: "Hardware_Legra_Inox_600_F_PTO",
 ProcessingItem: "Processing_Legrabox_600",
 GraphicItem: "GraphicLegra_Inox_600_F"
}
,{
 _id: 23694,
 in_Object: "Legra_Inox_450_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_450_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_450_H",
 GraphicItem: "GraphicLegra_Inox_450_F_Heavy"
}
,{
 _id: 23695,
 in_Object: "Legra_Inox_500_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_500_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_500_H",
 GraphicItem: "GraphicLegra_Inox_500_F_Heavy"
}
,{
 _id: 23696,
 in_Object: "Legra_Inox_550_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_550_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_550_H",
 GraphicItem: "GraphicLegra_Inox_550_F_Heavy"
}
,{
 _id: 23697,
 in_Object: "Legra_Inox_600_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_600_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_600_H",
 GraphicItem: "GraphicLegra_Inox_600_F_Heavy"
}
,{
 _id: 23698,
 in_Object: "Legra_Inox_650_F_Heavy_PTO",
 HardwareItem: "Hardware_Legra_Inox_650_F_Heavy_PTO",
 ProcessingItem: "Processing_Legrabox_650_H",
 GraphicItem: "GraphicLegra_Inox_650_F_Heavy"
}
,{
 _id: 23699,
 in_Object: "Legra_Connector_C",
 HardwareItem: "Hardware_Legra_Connector_C",
 ProcessingItem: "Processing_Legrabox_Con_C",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23700,
 in_Object: "Legra_Connector_CM",
 HardwareItem: "Hardware_Legra_Connector_CM",
 ProcessingItem: "Processing_Legrabox_Con_CM",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23701,
 in_Object: "Legra_Connector_F",
 HardwareItem: "Hardware_Legra_Connector_F",
 ProcessingItem: "Processing_Legrabox_Con_F",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23702,
 in_Object: "Legra_Connector_FM",
 HardwareItem: "Hardware_Legra_Connector_FM",
 ProcessingItem: "Processing_Legrabox_Con_FM",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23703,
 in_Object: "Legra_Connector_K",
 HardwareItem: "Hardware_Legra_Connector_K",
 ProcessingItem: "Processing_Legrabox_Con_K",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23704,
 in_Object: "Legra_Connector_KM",
 HardwareItem: "Hardware_Legra_Connector_KM",
 ProcessingItem: "Processing_Legrabox_Con_KM",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23705,
 in_Object: "Legra_Connector_M",
 HardwareItem: "Hardware_Legra_Connector_M",
 ProcessingItem: "Processing_Legrabox_Con_M",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23706,
 in_Object: "Legra_Connector_N",
 HardwareItem: "Hardware_Legra_Connector_N",
 ProcessingItem: "Processing_Legrabox_Con_N",
 GraphicItem: "NoGraphic"
}
,{
 _id: 23707,
 in_Object: "Legra_FrontBotCon",
 HardwareItem: "Hardware_Legra_FrontBotCon",
 ProcessingItem: "Processing_Legra_FrontBotCon",
 GraphicItem: "Graphic_Legra_FrontBotCon"
}
,{
 _id: 23708,
 in_Object: "Legra_Syncro_Small",
 HardwareItem: "Hardware_Legra_Syncro_Small",
 ProcessingItem: undefined,
 GraphicItem: "Graphic_Legra_Syncro"
}
,{
 _id: 23709,
 in_Object: "Legra_Syncro_Large",
 HardwareItem: "Hardware_Legra_Syncro_Large",
 ProcessingItem: undefined,
 GraphicItem: "Graphic_Legra_Syncro"
}
,{
 _id: 23710,
 in_Object: "Legra_Syncro_TipOn_Large",
 HardwareItem: "Hardware_Legra_Syncro_TipOn_Large",
 ProcessingItem: "",
 GraphicItem: ""
}
,{
 _id: 23711,
 in_Object: "Dowel03",
 HardwareItem: "HardwareItemDowel03",
 ProcessingItem: "ProcessingItemDowel03",
 GraphicItem: "GraphicItemDowel03"
}
,{
 _id: 23712,
 in_Object: "GlueDuststripGreyBrown",
 HardwareItem: "HardwareGlueDuststripGreyBrown",
 ProcessingItem: "NoProcessing",
 GraphicItem: "GraphicGlueDuststrip"
}
,{
 _id: 23713,
 in_Object: "PushToOpenShortBlack",
 HardwareItem: "HardwarePushToOpenShortBlack",
 ProcessingItem: "ProcessingPushToOpenShort",
 GraphicItem: "GraphicPushToOpenShort"
}
,{
 _id: 23714,
 in_Object: "PushToOpenShortGrey",
 HardwareItem: "HardwarePushToOpenShortGrey",
 ProcessingItem: "ProcessingPushToOpenShort",
 GraphicItem: "GraphicPushToOpenShort"
}
,{
 _id: 23715,
 in_Object: "PushToOpenShortWhite",
 HardwareItem: "HardwarePushToOpenShortWhite",
 ProcessingItem: "ProcessingPushToOpenShort",
 GraphicItem: "GraphicPushToOpenShort"
}
,{
 _id: 23716,
 in_Object: "PushToOpenLongBlack",
 HardwareItem: "HardwarePushToOpenLongBlack",
 ProcessingItem: "ProcessingPushToOpenLong",
 GraphicItem: "GraphicPushToOpenLong"
}
,{
 _id: 23717,
 in_Object: "PushToOpenLongGrey",
 HardwareItem: "HardwarePushToOpenLongGrey",
 ProcessingItem: "ProcessingPushToOpenLong",
 GraphicItem: "GraphicPushToOpenLong"
}
,{
 _id: 23718,
 in_Object: "PushToOpenLongWhite",
 HardwareItem: "HardwarePushToOpenLongWhite",
 ProcessingItem: "ProcessingPushToOpenLong",
 GraphicItem: "GraphicPushToOpenLong"
}
,{
 _id: 23719,
 in_Object: "AdapterHousingShortBlack",
 HardwareItem: "HardwareAdapterHousingShortBlack",
 ProcessingItem: "ProcessingAdapterHousingShort",
 GraphicItem: "GraphicAdapterHousingShort"
}
,{
 _id: 23720,
 in_Object: "AdapterHousingShortGrey",
 HardwareItem: "HardwareAdapterHousingShortGrey",
 ProcessingItem: "ProcessingAdapterHousingShort",
 GraphicItem: "GraphicAdapterHousingShort"
}
,{
 _id: 23721,
 in_Object: "AdapterHousingShortWhite",
 HardwareItem: "HardwareAdapterHousingShortWhite",
 ProcessingItem: "ProcessingAdapterHousingShort",
 GraphicItem: "GraphicAdapterHousingShort"
}
,{
 _id: 23722,
 in_Object: "AdapterHousingLongBlack",
 HardwareItem: "HardwareAdapterHousingLongBlack",
 ProcessingItem: "ProcessingAdapterHousingLong",
 GraphicItem: "GraphicAdapterHousingLong"
}
,{
 _id: 23723,
 in_Object: "AdapterHousingLongGrey",
 HardwareItem: "HardwareAdapterHousingLongGrey",
 ProcessingItem: "ProcessingAdapterHousingLong",
 GraphicItem: "GraphicAdapterHousingLong"
}
,{
 _id: 23724,
 in_Object: "AdapterHousingLongWhite",
 HardwareItem: "HardwareAdapterHousingLongWhite",
 ProcessingItem: "ProcessingAdapterHousingLong",
 GraphicItem: "GraphicAdapterHousingLong"
}
,{
 _id: 23725,
 in_Object: "Rafix01Nickel",
 HardwareItem: "HardwareRafix01Nickel",
 ProcessingItem: "ProcessingRafix01",
 GraphicItem: "GraphicRafix01Nickel"
}
,{
 _id: 23726,
 in_Object: "HingeFlipLiftDF",
 HardwareItem: "HardwareHingeForDF",
 ProcessingItem: "ProcessingHingeFlap26",
 GraphicItem: "GraphicHingeFlipLiftDF"
}
,{
 _id: 23727,
 in_Object: "Aventos_HF_Front_L",
 HardwareItem: "Hardware_Aventos_HF_Connector",
 ProcessingItem: "Processing_Aventos_HF_Connector",
 GraphicItem: "Aventos_HF_Connector"
}
,{
 _id: 23728,
 in_Object: "Aventos_HF_Front_R",
 HardwareItem: "Hardware_Aventos_HF_Connector",
 ProcessingItem: "Processing_Aventos_HF_Connector",
 GraphicItem: "Aventos_HF_Connector"
}
,{
 _id: 23729,
 in_Object: "Aventos_HF_Mech_480",
 HardwareItem: "Hardware_Aventos_HF_Mech480",
 ProcessingItem: "Processing_Aventos_HF_Mech480",
 GraphicItem: "Aventos_HF_Mech480"
}
,{
 _id: 23730,
 in_Object: "Aventos_HF_Mech_600",
 HardwareItem: "Hardware_Aventos_HF_Mech600",
 ProcessingItem: "Processing_Aventos_HF_Mech600",
 GraphicItem: "Aventos_HF_Mech600"
}
,{
 _id: 23731,
 in_Object: "Aventos_HF_Mech_840",
 HardwareItem: "Hardware_Aventos_HF_Mech840",
 ProcessingItem: "Processing_Aventos_HF_Mech840",
 GraphicItem: "Aventos_HF_Mech840"
}
,{
 _id: 23732,
 in_Object: "Aventos_HF_top_1_L_Grey",
 HardwareItem: "Hardware_Aventos_HF_2700_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSL"
}
,{
 _id: 23733,
 in_Object: "Aventos_HF_top_1_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSR"
}
,{
 _id: 23734,
 in_Object: "Aventos_HF_top_2_L_Grey",
 HardwareItem: "Hardware_Aventos_HF_11000_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSL"
}
,{
 _id: 23735,
 in_Object: "Aventos_HF_top_2_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSR"
}
,{
 _id: 23736,
 in_Object: "Aventos_HF_top_1_L_White",
 HardwareItem: "Hardware_Aventos_HF_2700_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSL"
}
,{
 _id: 23737,
 in_Object: "Aventos_HF_top_1_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSR"
}
,{
 _id: 23738,
 in_Object: "Aventos_HF_top_2_L_White",
 HardwareItem: "Hardware_Aventos_HF_11000_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSL"
}
,{
 _id: 23739,
 in_Object: "Aventos_HF_top_2_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSR"
}
,{
 _id: 23740,
 in_Object: "Aventos_HF_top_1_L_Black",
 HardwareItem: "Hardware_Aventos_HF_2700_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSL"
}
,{
 _id: 23741,
 in_Object: "Aventos_HF_top_1_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSR"
}
,{
 _id: 23742,
 in_Object: "Aventos_HF_top_2_L_Black",
 HardwareItem: "Hardware_Aventos_HF_11000_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSL"
}
,{
 _id: 23743,
 in_Object: "Aventos_HF_top_2_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HF_PSR"
}
,{
 _id: 23744,
 in_Object: "Aventos_HK_top_4_R_White",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23745,
 in_Object: "Aventos_HK_top_4_L_White",
 HardwareItem: "Hardware_Aventos_HK_3500_White",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23746,
 in_Object: "Aventos_HK_top_3_R_White",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23747,
 in_Object: "Aventos_HK_top_3_L_White",
 HardwareItem: "Hardware_Aventos_HK_1950_White",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23748,
 in_Object: "Aventos_HK_top_2_R_White",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23749,
 in_Object: "Aventos_HK_top_2_L_White",
 HardwareItem: "Hardware_Aventos_HK_1200_White",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23750,
 in_Object: "Aventos_HK_top_1_L_White",
 HardwareItem: "Hardware_Aventos_HK_420_White",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23751,
 in_Object: "Aventos_HK_top_1_R_White",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23752,
 in_Object: "Aventos_HK_top_4_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23753,
 in_Object: "Aventos_HK_top_4_L_Grey",
 HardwareItem: "Hardware_Aventos_HK_3500_Grey",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23754,
 in_Object: "Aventos_HK_top_3_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23755,
 in_Object: "Aventos_HK_top_3_L_Grey",
 HardwareItem: "Hardware_Aventos_HK_1950_Grey",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23756,
 in_Object: "Aventos_HK_top_2_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23757,
 in_Object: "Aventos_HK_top_2_L_Grey",
 HardwareItem: "Hardware_Aventos_HK_1200_Grey",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23758,
 in_Object: "Aventos_HK_top_1_L_Grey",
 HardwareItem: "Hardware_Aventos_HK_420_Grey",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23759,
 in_Object: "Aventos_HK_top_1_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23760,
 in_Object: "Aventos_HK_top_4_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23761,
 in_Object: "Aventos_HK_top_4_L_Black",
 HardwareItem: "Hardware_Aventos_HK_3500_Black",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23762,
 in_Object: "Aventos_HK_top_3_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23763,
 in_Object: "Aventos_HK_top_3_L_Black",
 HardwareItem: "Hardware_Aventos_HK_1950_Black",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23764,
 in_Object: "Aventos_HK_top_2_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23765,
 in_Object: "Aventos_HK_top_2_L_Black",
 HardwareItem: "Hardware_Aventos_HK_1200_Black",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23766,
 in_Object: "Aventos_HK_top_1_L_Black",
 HardwareItem: "Hardware_Aventos_HK_420_Black",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSL"
}
,{
 _id: 23767,
 in_Object: "Aventos_HK_top_1_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Process_Aventos_HK_PS",
 GraphicItem: "Aventos_HK_PSR"
}
,{
 _id: 23768,
 in_Object: "Aventos_HK_Front_R",
 HardwareItem: "Hardware_Aventos_HK_Connector",
 ProcessingItem: "Processing_Aventos_HK_Connector",
 GraphicItem: "Aventos_HK_Connector"
}
,{
 _id: 23769,
 in_Object: "Aventos_HK_Front_L",
 HardwareItem: "Hardware_Aventos_HK_Connector",
 ProcessingItem: "Processing_Aventos_HK_Connector",
 GraphicItem: "Aventos_HK_Connector"
}
,{
 _id: 23770,
 in_Object: "Hinge120OverlayNoSpringSSForFHF",
 HardwareItem: "HardwareHinge120OverlayNoSpringSSForFHF",
 ProcessingItem: "ProcessingHinge35/12.6Screw45/9.5",
 GraphicItem: "GraphicHinge120OverlayNoSpringSSForFHF"
}
,{
 _id: 23771,
 in_Object: "Aventos_HS_top_1_L_White",
 HardwareItem: "Hardware_Aventos_HS_350_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23772,
 in_Object: "Aventos_HS_top_1_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23773,
 in_Object: "Aventos_HS_top_2_L_White",
 HardwareItem: "Hardware_Aventos_HS_480_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23774,
 in_Object: "Aventos_HS_top_2_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23775,
 in_Object: "Aventos_HS_top_3_L_White",
 HardwareItem: "Hardware_Aventos_HS_800_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23776,
 in_Object: "Aventos_HS_top_3_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23777,
 in_Object: "Aventos_HS_top_1_L_Grey",
 HardwareItem: "Hardware_Aventos_HS_350_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23778,
 in_Object: "Aventos_HS_top_1_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23779,
 in_Object: "Aventos_HS_top_2_L_Grey",
 HardwareItem: "Hardware_Aventos_HS_480_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23780,
 in_Object: "Aventos_HS_top_2_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23781,
 in_Object: "Aventos_HS_top_3_L_Grey",
 HardwareItem: "Hardware_Aventos_HS_800_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23782,
 in_Object: "Aventos_HS_top_3_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23783,
 in_Object: "Aventos_HS_top_1_L_Black",
 HardwareItem: "Hardware_Aventos_HS_350_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23784,
 in_Object: "Aventos_HS_top_1_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23785,
 in_Object: "Aventos_HS_top_2_L_Black",
 HardwareItem: "Hardware_Aventos_HS_480_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23786,
 in_Object: "Aventos_HS_top_2_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23787,
 in_Object: "Aventos_HS_top_3_L_Black",
 HardwareItem: "Hardware_Aventos_HS_800_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSL"
}
,{
 _id: 23788,
 in_Object: "Aventos_HS_top_3_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HS_PSR"
}
,{
 _id: 23789,
 in_Object: "Aventos_HS_Front_L",
 HardwareItem: "Hardware_Aventos_HK_Connector",
 ProcessingItem: "Processing_Aventos_HK_Connector",
 GraphicItem: "Aventos_HK_Connector"
}
,{
 _id: 23790,
 in_Object: "Aventos_HS_Front_R",
 HardwareItem: "Hardware_Aventos_HK_Connector",
 ProcessingItem: "Processing_Aventos_HK_Connector",
 GraphicItem: "Aventos_HK_Connector"
}
,{
 _id: 23791,
 in_Object: "Aventos_HL_top_1_L_White",
 HardwareItem: "Hardware_Aventos_HL_300_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23792,
 in_Object: "Aventos_HL_top_1_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23793,
 in_Object: "Aventos_HL_top_2_L_White",
 HardwareItem: "Hardware_Aventos_HL_300_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23794,
 in_Object: "Aventos_HL_top_2_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23795,
 in_Object: "Aventos_HL_top_3_L_White",
 HardwareItem: "Hardware_Aventos_HL_390_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23796,
 in_Object: "Aventos_HL_top_3_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23797,
 in_Object: "Aventos_HL_top_4_L_White",
 HardwareItem: "Hardware_Aventos_HL_390_White",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23798,
 in_Object: "Aventos_HL_top_4_R_White",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23799,
 in_Object: "Aventos_HL_top_1_L_Grey",
 HardwareItem: "Hardware_Aventos_HL_300_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23800,
 in_Object: "Aventos_HL_top_1_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23801,
 in_Object: "Aventos_HL_top_2_L_Grey",
 HardwareItem: "Hardware_Aventos_HL_300_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23802,
 in_Object: "Aventos_HL_top_2_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23803,
 in_Object: "Aventos_HL_top_3_L_Grey",
 HardwareItem: "Hardware_Aventos_HL_390_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23804,
 in_Object: "Aventos_HL_top_3_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23805,
 in_Object: "Aventos_HL_top_4_L_Grey",
 HardwareItem: "Hardware_Aventos_HL_390_Grey",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23806,
 in_Object: "Aventos_HL_top_4_R_Grey",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23807,
 in_Object: "Aventos_HL_top_1_L_Black",
 HardwareItem: "Hardware_Aventos_HL_300_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23808,
 in_Object: "Aventos_HL_top_1_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23809,
 in_Object: "Aventos_HL_top_2_L_Black",
 HardwareItem: "Hardware_Aventos_HL_300_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23810,
 in_Object: "Aventos_HL_top_2_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23811,
 in_Object: "Aventos_HL_top_3_L_Black",
 HardwareItem: "Hardware_Aventos_HL_390_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23812,
 in_Object: "Aventos_HL_top_3_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23813,
 in_Object: "Aventos_HL_top_4_L_Black",
 HardwareItem: "Hardware_Aventos_HL_390_Black",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSL"
}
,{
 _id: 23814,
 in_Object: "Aventos_HL_top_4_R_Black",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HF_PS",
 GraphicItem: "Aventos_HL_PSR"
}
,{
 _id: 23815,
 in_Object: "Aventos_HL_Mech_1_L",
 HardwareItem: "Hardware_Aventos_HL_Mech1",
 ProcessingItem: "Processing_Aventos_HL_Mech1",
 GraphicItem: "Aventos_HL_Mech1"
}
,{
 _id: 23816,
 in_Object: "Aventos_HL_Mech_2_L",
 HardwareItem: "Hardware_Aventos_HL_Mech2",
 ProcessingItem: "Processing_Aventos_HL_Mech2",
 GraphicItem: "Aventos_HL_Mech2"
}
,{
 _id: 23817,
 in_Object: "Aventos_HL_Mech_3_L",
 HardwareItem: "Hardware_Aventos_HL_Mech3",
 ProcessingItem: "Processing_Aventos_HL_Mech3",
 GraphicItem: "Aventos_HL_Mech3"
}
,{
 _id: 23818,
 in_Object: "Aventos_HL_Mech_4_L",
 HardwareItem: "Hardware_Aventos_HL_Mech4",
 ProcessingItem: "Processing_Aventos_HL_Mech4",
 GraphicItem: "Aventos_HL_Mech4"
}
,{
 _id: 23819,
 in_Object: "Aventos_HL_Mech_1_R",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HL_Mech1",
 GraphicItem: "Aventos_HL_Mech1"
}
,{
 _id: 23820,
 in_Object: "Aventos_HL_Mech_2_R",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HL_Mech2",
 GraphicItem: "Aventos_HL_Mech2"
}
,{
 _id: 23821,
 in_Object: "Aventos_HL_Mech_3_R",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HL_Mech3",
 GraphicItem: "Aventos_HL_Mech3"
}
,{
 _id: 23822,
 in_Object: "Aventos_HL_Mech_4_R",
 HardwareItem: "None",
 ProcessingItem: "Processing_Aventos_HL_Mech4",
 GraphicItem: "Aventos_HL_Mech4"
}
,{
 _id: 23823,
 in_Object: "Aventos_HL_Front_L",
 HardwareItem: "Hardware_Aventos_HK_Connector",
 ProcessingItem: "Processing_Aventos_HK_Connector",
 GraphicItem: "Aventos_HK_Connector"
}
,{
 _id: 23824,
 in_Object: "Aventos_HL_Front_R",
 HardwareItem: "Hardware_Aventos_HK_Connector",
 ProcessingItem: "Processing_Aventos_HK_Connector",
 GraphicItem: "Aventos_HK_Connector"
}
,{
 _id: 23825,
 in_Object: "DropDownHinge_L",
 HardwareItem: "Hardware_DropDown_L",
 ProcessingItem: "Processing_DropDown_Carcase",
 GraphicItem: "DropDown_L"
}
,{
 _id: 23826,
 in_Object: "DropDownHinge_R",
 HardwareItem: "Hardware_DropDown_R",
 ProcessingItem: "Processing_DropDown_Carcase",
 GraphicItem: "DropDown_R"
}
,{
 _id: 23827,
 in_Object: "DropDownFront_L",
 HardwareItem: "None",
 ProcessingItem: "Processing_DropDown_Front",
 GraphicItem: "DropDown_Front"
}
,{
 _id: 23828,
 in_Object: "DropDownFront_R",
 HardwareItem: "None",
 ProcessingItem: "Processing_DropDown_Front",
 GraphicItem: "DropDown_Front"
}
,{
 _id: 23829,
 in_Object: "Aventos_HK_XS_3_R",
 HardwareItem: "Hardware_Aventos_HKXS_3",
 ProcessingItem: "None",
 GraphicItem: "Aventos_HKXS_Mech_R"
}
,{
 _id: 23830,
 in_Object: "Aventos_HK_XS_3_L",
 HardwareItem: "Hardware_Aventos_HKXS_3",
 ProcessingItem: "None",
 GraphicItem: "Aventos_HKXS_Mech_L"
}
,{
 _id: 23831,
 in_Object: "Aventos_HK_XS_2_R",
 HardwareItem: "Hardware_Aventos_HKXS_2",
 ProcessingItem: "None",
 GraphicItem: "Aventos_HKXS_Mech_R"
}
,{
 _id: 23832,
 in_Object: "Aventos_HK_XS_2_L",
 HardwareItem: "Hardware_Aventos_HKXS_2",
 ProcessingItem: "None",
 GraphicItem: "Aventos_HKXS_Mech_L"
}
,{
 _id: 23833,
 in_Object: "Aventos_HK_XS_1_R",
 HardwareItem: "Hardware_Aventos_HKXS_1",
 ProcessingItem: "None",
 GraphicItem: "Aventos_HKXS_Mech_R"
}
,{
 _id: 23834,
 in_Object: "Aventos_HK_XS_1_L",
 HardwareItem: "Hardware_Aventos_HKXS_1",
 ProcessingItem: "None",
 GraphicItem: "Aventos_HKXS_Mech_L"
}
,{
 _id: 23835,
 in_Object: "Aventos_HKXS_Front_R",
 HardwareItem: "Hardware_Aventos_HKXS_Front",
 ProcessingItem: "Processing_Aventos_HKXS_Connector",
 GraphicItem: "Aventos_HKXS_Front"
}
,{
 _id: 23836,
 in_Object: "Aventos_HKXS_Front_L",
 HardwareItem: "Hardware_Aventos_HKXS_Front",
 ProcessingItem: "Processing_Aventos_HKXS_Connector",
 GraphicItem: "Aventos_HKXS_Front"
}
,{
 _id: 23837,
 in_Object: "Aventos_HKXS_R",
 HardwareItem: "Hardware_Aventos_HKXS_Carcase",
 ProcessingItem: "Processing_Aventos_HKXS_Carcase",
 GraphicItem: "Aventos_HKXS_Carcase_R"
}
,{
 _id: 23838,
 in_Object: "Aventos_HKXS_L",
 HardwareItem: "Hardware_Aventos_HKXS_Carcase",
 ProcessingItem: "Processing_Aventos_HKXS_Carcase",
 GraphicItem: "Aventos_HKXS_Carcase_L"
}
,{
 _id: 23839,
 in_Object: "HingeCenterForFHF",
 HardwareItem: "HardwareHingeCenterForFHF",
 ProcessingItem: "ProcessingHinge35/12.6Screw45/9.5",
 GraphicItem: "GraphicHingeCenterForFHF"
}
,{
 _id: 23840,
 in_Object: "MPHorizontalBL0SS",
 HardwareItem: "HardwareMPHorizontalBL0SS",
 ProcessingItem: "ProcessingMountingPlateScrew20_32/0",
 GraphicItem: "GraphicMPHorizontalBL0SS"
}
,{
 _id: 23841,
 in_Object: "MPHorizontalBL3SS",
 HardwareItem: "HardwareMPHorizontalBL3SS",
 ProcessingItem: "ProcessingMountingPlateScrew20_32/0",
 GraphicItem: "GraphicMPHorizontalBL3SS"
}
,{
 _id: 23842,
 in_Object: "SquareBracket",
 HardwareItem: "Hardware_Square_Bracket",
 ProcessingItem: "Processing_Square_Bracket",
 GraphicItem: "Graphic_Square_Bracket"
}
,{
 _id: 23843,
 in_Object: "Bracket01",
 HardwareItem: "HardwareBracket01",
 ProcessingItem: "ProcessingBracket01",
 GraphicItem: "GraphicBracket01"
}
,{
 _id: 23844,
 in_Object: "PlinthLegTriangularPressH100",
 HardwareItem: "HardwarePlinthLegTriangularPressH100",
 ProcessingItem: "ProcessingPlinthLegTriangularPressH100",
 GraphicItem: "GraphicPlinthLegTriangularPressH100"
}
,{
 _id: 23845,
 in_Object: "PlinthLegTriangularPressH120",
 HardwareItem: "HardwarePlinthLegTriangularPressH120",
 ProcessingItem: "ProcessingPlinthLegTriangularPressH120",
 GraphicItem: "GraphicPlinthLegTriangularPressH120"
}
,{
 _id: 23846,
 in_Object: "PlinthLegTriangularPressH150",
 HardwareItem: "HardwarePlinthLegTriangularPressH150",
 ProcessingItem: "ProcessingPlinthLegTriangularPressH150",
 GraphicItem: "GraphicPlinthLegTriangularPressH150"
}
,{
 _id: 23847,
 in_Object: "PlinthLegRectangularScrewH100",
 HardwareItem: "HardwarePlinthLegRectangularScrewH100",
 ProcessingItem: "ProcessingPlinthLegRectangularScrewH100",
 GraphicItem: "GraphicPlinthLegRectangularScrewH100"
}
,{
 _id: 23848,
 in_Object: "PlinthLegRectangularScrewH120",
 HardwareItem: "HardwarePlinthLegRectangularScrewH120",
 ProcessingItem: "ProcessingPlinthLegRectangularScrewH120",
 GraphicItem: "GraphicPlinthLegRectangularScrewH120"
}
,{
 _id: 23849,
 in_Object: "PlinthLegRectangularScrewH150",
 HardwareItem: "HardwarePlinthLegRectangularScrewH150",
 ProcessingItem: "ProcessingPlinthLegRectangularScrewH150",
 GraphicItem: "GraphicPlinthLegRectangularScrewH150"
}
,{
 _id: 23850,
 in_Object: "Keku01",
 HardwareItem: "HardwareKeku01",
 ProcessingItem: "ProcessingKeku01",
 GraphicItem: "GraphicKeku01"
}
,{
 _id: 23851,
 in_Object: "Handle_100_Black_160",
 HardwareItem: "Hard_DH100_Black_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH100_Black_160"
}
,{
 _id: 23852,
 in_Object: "Handle_100_Black_320",
 HardwareItem: "Hard_DH100_Black_320",
 ProcessingItem: "Proc_Handle_320",
 GraphicItem: "Graphic_DH100_Black_320"
}
,{
 _id: 23853,
 in_Object: "Handle_100_Black_64",
 HardwareItem: "Hard_DH100_Black_64",
 ProcessingItem: "Proc_Handle_64",
 GraphicItem: "Graphic_DH100_Black_64"
}
,{
 _id: 23854,
 in_Object: "Handle_100_NickelPlated_160",
 HardwareItem: "Hard_DH100_NickelPlated_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH100_NickelPlated_160"
}
,{
 _id: 23855,
 in_Object: "Handle_100_NickelPlated_320",
 HardwareItem: "Hard_DH100_NickelPlated_320",
 ProcessingItem: "Proc_Handle_320",
 GraphicItem: "Graphic_DH100_NickelPlated_320"
}
,{
 _id: 23856,
 in_Object: "Handle_100_NickelPlated_64",
 HardwareItem: "Hard_DH100_NickelPlated_64",
 ProcessingItem: "Proc_Handle_64",
 GraphicItem: "Graphic_DH100_NickelPlated_64"
}
,{
 _id: 23857,
 in_Object: "Handle_100_NickelPlated_160",
 HardwareItem: "Hard_DH100_Tin_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH100_Tin_160"
}
,{
 _id: 23858,
 in_Object: "Handle_100_NickelPlated_320",
 HardwareItem: "Hard_DH100_Tin_320",
 ProcessingItem: "Proc_Handle_320",
 GraphicItem: "Graphic_DH100_Tin_320"
}
,{
 _id: 23859,
 in_Object: "Handle_100_NickelPlated_64",
 HardwareItem: "Hard_DH100_Tin_64",
 ProcessingItem: "Proc_Handle_64",
 GraphicItem: "Graphic_DH100_Tin_64"
}
,{
 _id: 23860,
 in_Object: "Handle_110_StainlessSteel_1060",
 HardwareItem: "Hard_DH110_StainlessSteel_1060",
 ProcessingItem: "Proc_Handle_1060",
 GraphicItem: "Graphic_DH110_StainlessSteel_1060"
}
,{
 _id: 23861,
 in_Object: "Handle_110_StainlessSteel_1160",
 HardwareItem: "Hard_DH110_StainlessSteel_1160",
 ProcessingItem: "Proc_Handle_1160",
 GraphicItem: "Graphic_DH110_StainlessSteel_1160"
}
,{
 _id: 23862,
 in_Object: "Handle_110_StainlessSteel_1260",
 HardwareItem: "Hard_DH110_StainlessSteel_1260",
 ProcessingItem: "Proc_Handle_1260",
 GraphicItem: "Graphic_DH110_StainlessSteel_1260"
}
,{
 _id: 23863,
 in_Object: "Handle_110_StainlessSteel_128",
 HardwareItem: "Hard_DH110_StainlessSteel_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_DH110_StainlessSteel_128"
}
,{
 _id: 23864,
 in_Object: "Handle_110_StainlessSteel_1360",
 HardwareItem: "Hard_DH110_StainlessSteel_1360",
 ProcessingItem: "Proc_Handle_1360",
 GraphicItem: "Graphic_DH110_StainlessSteel_1360"
}
,{
 _id: 23865,
 in_Object: "Handle_110_StainlessSteel_1460",
 HardwareItem: "Hard_DH110_StainlessSteel_1460",
 ProcessingItem: "Proc_Handle_1460",
 GraphicItem: "Graphic_DH110_StainlessSteel_1460"
}
,{
 _id: 23866,
 in_Object: "Handle_110_StainlessSteel_1560",
 HardwareItem: "Hard_DH110_StainlessSteel_1560",
 ProcessingItem: "Proc_Handle_1560",
 GraphicItem: "Graphic_DH110_StainlessSteel_1560"
}
,{
 _id: 23867,
 in_Object: "Handle_110_StainlessSteel_160",
 HardwareItem: "Hard_DH110_StainlessSteel_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH110_StainlessSteel_160"
}
,{
 _id: 23868,
 in_Object: "Handle_110_StainlessSteel_1760",
 HardwareItem: "Hard_DH110_StainlessSteel_1760",
 ProcessingItem: "Proc_Handle_1760",
 GraphicItem: "Graphic_DH110_StainlessSteel_1760"
}
,{
 _id: 23869,
 in_Object: "Handle_110_StainlessSteel_1960",
 HardwareItem: "Hard_DH110_StainlessSteel_1960",
 ProcessingItem: "Proc_Handle_1960",
 GraphicItem: "Graphic_DH110_StainlessSteel_1960"
}
,{
 _id: 23870,
 in_Object: "Handle_110_StainlessSteel_210",
 HardwareItem: "Hard_DH110_StainlessSteel_210",
 ProcessingItem: "Proc_Handle_210",
 GraphicItem: "Graphic_DH110_StainlessSteel_210"
}
,{
 _id: 23871,
 in_Object: "Handle_110_StainlessSteel_260",
 HardwareItem: "Hard_DH110_StainlessSteel_260",
 ProcessingItem: "Proc_Handle_260",
 GraphicItem: "Graphic_DH110_StainlessSteel_260"
}
,{
 _id: 23872,
 in_Object: "Handle_110_StainlessSteel_310",
 HardwareItem: "Hard_DH110_StainlessSteel_310",
 ProcessingItem: "Proc_Handle_310",
 GraphicItem: "Graphic_DH110_StainlessSteel_310"
}
,{
 _id: 23873,
 in_Object: "Handle_110_StainlessSteel_360",
 HardwareItem: "Hard_DH110_StainlessSteel_360",
 ProcessingItem: "Proc_Handle_360",
 GraphicItem: "Graphic_DH110_StainlessSteel_360"
}
,{
 _id: 23874,
 in_Object: "Handle_110_StainlessSteel_410",
 HardwareItem: "Hard_DH110_StainlessSteel_410",
 ProcessingItem: "Proc_Handle_410",
 GraphicItem: "Graphic_DH110_StainlessSteel_410"
}
,{
 _id: 23875,
 in_Object: "Handle_110_StainlessSteel_460",
 HardwareItem: "Hard_DH110_StainlessSteel_460",
 ProcessingItem: "Proc_Handle_460",
 GraphicItem: "Graphic_DH110_StainlessSteel_460"
}
,{
 _id: 23876,
 in_Object: "Handle_110_StainlessSteel_560",
 HardwareItem: "Hard_DH110_StainlessSteel_560",
 ProcessingItem: "Proc_Handle_560",
 GraphicItem: "Graphic_DH110_StainlessSteel_560"
}
,{
 _id: 23877,
 in_Object: "Handle_110_StainlessSteel_660",
 HardwareItem: "Hard_DH110_StainlessSteel_660",
 ProcessingItem: "Proc_Handle_660",
 GraphicItem: "Graphic_DH110_StainlessSteel_660"
}
,{
 _id: 23878,
 in_Object: "Handle_110_StainlessSteel_760",
 HardwareItem: "Hard_DH110_StainlessSteel_760",
 ProcessingItem: "Proc_Handle_760",
 GraphicItem: "Graphic_DH110_StainlessSteel_760"
}
,{
 _id: 23879,
 in_Object: "Handle_110_StainlessSteel_860",
 HardwareItem: "Hard_DH110_StainlessSteel_860",
 ProcessingItem: "Proc_Handle_860",
 GraphicItem: "Graphic_DH110_StainlessSteel_860"
}
,{
 _id: 23880,
 in_Object: "Handle_110_StainlessSteel_96",
 HardwareItem: "Hard_DH110_StainlessSteel_96",
 ProcessingItem: "Proc_Handle_96",
 GraphicItem: "Graphic_DH110_StainlessSteel_96"
}
,{
 _id: 23881,
 in_Object: "Handle_110_StainlessSteel_960",
 HardwareItem: "Hard_DH110_StainlessSteel_960",
 ProcessingItem: "Proc_Handle_960",
 GraphicItem: "Graphic_DH110_StainlessSteel_960"
}
,{
 _id: 23882,
 in_Object: "Handle_120_Black",
 HardwareItem: "Hard_DH120_Black",
 ProcessingItem: "Proc_Handle_Single",
 GraphicItem: "Graphic_DH120_Black"
}
,{
 _id: 23883,
 in_Object: "Handle_120_StainlessSteel",
 HardwareItem: "Hard_DH120_StainlessSteel",
 ProcessingItem: "Proc_Handle_Single",
 GraphicItem: "Graphic_DH120_StainlessSteel"
}
,{
 _id: 23884,
 in_Object: "Handle_130_Black",
 HardwareItem: "Hard_DH130_Black",
 ProcessingItem: "Proc_Handle_Single",
 GraphicItem: "Graphic_DH130_Black"
}
,{
 _id: 23885,
 in_Object: "Handle_130_BrassPlatedAntique",
 HardwareItem: "Hard_DH130_BrassPlatedAntique",
 ProcessingItem: "Proc_Handle_Single",
 GraphicItem: "Graphic_DH130_BrassPlatedAntique"
}
,{
 _id: 23886,
 in_Object: "Handle_130_StainlessSteel",
 HardwareItem: "Hard_DH130_StainlessSteel",
 ProcessingItem: "Proc_Handle_Single",
 GraphicItem: "Graphic_DH130_StainlessSteel"
}
,{
 _id: 23887,
 in_Object: "Handle_Bracket_128",
 HardwareItem: "Hard_BH_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_BH_128"
}
,{
 _id: 23888,
 in_Object: "Handle_Bracket_160",
 HardwareItem: "Hard_BH_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_BH_160"
}
,{
 _id: 23889,
 in_Object: "Handle_Bracket_192",
 HardwareItem: "Hard_BH_192",
 ProcessingItem: "Proc_Handle_192",
 GraphicItem: "Graphic_BH_192"
}
,{
 _id: 23890,
 in_Object: "Handle_Bracket_224",
 HardwareItem: "Hard_BH_224",
 ProcessingItem: "Proc_Handle_224",
 GraphicItem: "Graphic_BH_224"
}
,{
 _id: 23891,
 in_Object: "Handle_Bracket_288",
 HardwareItem: "Hard_BH_288",
 ProcessingItem: "Proc_Handle_288",
 GraphicItem: "Graphic_BH_288"
}
,{
 _id: 23892,
 in_Object: "Handle_Bracket_320",
 HardwareItem: "Hard_BH_320",
 ProcessingItem: "Proc_Handle_320",
 GraphicItem: "Graphic_BH_320"
}
,{
 _id: 23893,
 in_Object: "Handle_Bracket_352",
 HardwareItem: "Hard_BH_352",
 ProcessingItem: "Proc_Handle_352",
 GraphicItem: "Graphic_BH_352"
}
,{
 _id: 23894,
 in_Object: "Handle_Bracket_448",
 HardwareItem: "Hard_BH_448",
 ProcessingItem: "Proc_Handle_448",
 GraphicItem: "Graphic_BH_448"
}
,{
 _id: 23895,
 in_Object: "Handle_Bracket_480",
 HardwareItem: "Hard_BH_480",
 ProcessingItem: "Proc_Handle_480",
 GraphicItem: "Graphic_BH_480"
}
,{
 _id: 23896,
 in_Object: "Handle_Bracket_560",
 HardwareItem: "Hard_BH_560",
 ProcessingItem: "Proc_Handle_560",
 GraphicItem: "Graphic_BH_560"
}
,{
 _id: 23897,
 in_Object: "Handle_Bracket_640",
 HardwareItem: "Hard_BH_640",
 ProcessingItem: "Proc_Handle_640",
 GraphicItem: "Graphic_BH_640"
}
,{
 _id: 23898,
 in_Object: "Handle_Bracket_96",
 HardwareItem: "Hard_BH_96",
 ProcessingItem: "Proc_Handle_96",
 GraphicItem: "Graphic_BH_96"
}
,{
 _id: 23899,
 in_Object: "Handle_Bracket_960",
 HardwareItem: "Hard_BH_960",
 ProcessingItem: "Proc_Handle_960",
 GraphicItem: "Graphic_BH_960"
}
,{
 _id: 23900,
 in_Object: "Handle_60_Black_128",
 HardwareItem: "Hard_DH60_Black_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_DH60_Black_128"
}
,{
 _id: 23901,
 in_Object: "Handle_60_Black_160",
 HardwareItem: "Hard_DH60_Black_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH60_Black_160"
}
,{
 _id: 23902,
 in_Object: "Handle_60_BrassPlatedAntique_128",
 HardwareItem: "Hard_DH60_BrassPlatedAntique_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_DH60_BrassPlatedAntique_128"
}
,{
 _id: 23903,
 in_Object: "Handle_60_BrassPlatedAntique_160",
 HardwareItem: "Hard_DH60_BrassPlatedAntique_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH60_BrassPlatedAntique_160"
}
,{
 _id: 23904,
 in_Object: "Handle_60_ChromedPolished_128",
 HardwareItem: "Hard_DH60_ChromedPolished_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_DH60_ChromedPolished_128"
}
,{
 _id: 23905,
 in_Object: "Handle_60_ChromedPolished_160",
 HardwareItem: "Hard_DH60_ChromedPolished_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH60_ChromedPolished_160"
}
,{
 _id: 23906,
 in_Object: "Handle_60_NickelPlated_128",
 HardwareItem: "Hard_DH60_NickelPlated_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_DH60_NickelPlated_128"
}
,{
 _id: 23907,
 in_Object: "Handle_60_NickelPlated_160",
 HardwareItem: "Hard_DH60_NickelPlated_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_DH60_NickelPlated_160"
}
,{
 _id: 23908,
 in_Object: "Handle_Rail_128",
 HardwareItem: "Hard_RH_128",
 ProcessingItem: "Proc_Handle_128",
 GraphicItem: "Graphic_RH_128"
}
,{
 _id: 23909,
 in_Object: "Handle_Rail_160",
 HardwareItem: "Hard_RH_160",
 ProcessingItem: "Proc_Handle_160",
 GraphicItem: "Graphic_RH_160"
}
,{
 _id: 23910,
 in_Object: "Handle_Rail_192",
 HardwareItem: "Hard_RH_192",
 ProcessingItem: "Proc_Handle_192",
 GraphicItem: "Graphic_RH_192"
}
,{
 _id: 23911,
 in_Object: "Handle_Rail_224",
 HardwareItem: "Hard_RH_224",
 ProcessingItem: "Proc_Handle_224",
 GraphicItem: "Graphic_RH_224"
}
,{
 _id: 23912,
 in_Object: "Handle_Rail_288",
 HardwareItem: "Hard_RH_288",
 ProcessingItem: "Proc_Handle_288",
 GraphicItem: "Graphic_RH_288"
}
,{
 _id: 23913,
 in_Object: "Handle_Rail_320",
 HardwareItem: "Hard_RH_320",
 ProcessingItem: "Proc_Handle_320",
 GraphicItem: "Graphic_RH_320"
}
,{
 _id: 23914,
 in_Object: "Handle_Rail_352",
 HardwareItem: "Hard_RH_352",
 ProcessingItem: "Proc_Handle_352",
 GraphicItem: "Graphic_RH_352"
}
,{
 _id: 23915,
 in_Object: "Handle_Rail_448",
 HardwareItem: "Hard_RH_448",
 ProcessingItem: "Proc_Handle_448",
 GraphicItem: "Graphic_RH_448"
}
,{
 _id: 23916,
 in_Object: "Handle_Rail_560",
 HardwareItem: "Hard_RH_560",
 ProcessingItem: "Proc_Handle_560",
 GraphicItem: "Graphic_RH_560"
}
,{
 _id: 23917,
 in_Object: "Handle_Rail_660",
 HardwareItem: "Hard_RH_660",
 ProcessingItem: "Proc_Handle_660",
 GraphicItem: "Graphic_RH_660"
}
,{
 _id: 23918,
 in_Object: "Handle_Rail_760",
 HardwareItem: "Hard_RH_760",
 ProcessingItem: "Proc_Handle_760",
 GraphicItem: "Graphic_RH_760"
}
,{
 _id: 23919,
 in_Object: "Handle_Rail_96",
 HardwareItem: "Hard_RH_96",
 ProcessingItem: "Proc_Handle_96",
 GraphicItem: "Graphic_RH_96"
}
,{
 _id: 23920,
 in_Object: "PlinthLegTriangularPressH100DrillBack",
 HardwareItem: "HardwarePlinthLegTriangularPressH100",
 ProcessingItem: "ProcessingPlinthLegTriangularPressH100DrillBack",
 GraphicItem: "GraphicPlinthLegTriangularPressH100"
}
];
