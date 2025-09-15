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

export interface cti_tab_GraphicLibraryMapping {
  readonly in_GraphicItem? : string;
}

export interface ctm_tab_GraphicLibraryMapping {
}

export interface cto_tab_GraphicLibraryMapping extends ctm_tab_GraphicLibraryMapping {
  readonly _id : number;
  readonly Model3DGroupName? : string;
}

export interface ICT_tab_GraphicLibraryMapping
extends cti_tab_GraphicLibraryMapping, cto_tab_GraphicLibraryMapping {}

export class ct2_tab_GraphicLibraryMapping {

public findExactly(
     in_GraphicItem: string|undefined,
): cto_tab_GraphicLibraryMapping | undefined {
  const res = ct_tab_GraphicLibraryMapping.find((p) => 
p.in_GraphicItem === in_GraphicItem
);
return res;
}

public find(
predicate: (value: cti_tab_GraphicLibraryMapping) => boolean
): cto_tab_GraphicLibraryMapping | undefined {
  for (let index = 0; index < ct_tab_GraphicLibraryMapping.length; index++){
    const element = ct_tab_GraphicLibraryMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_GraphicLibraryMapping :ICT_tab_GraphicLibraryMapping[] = [
{
 _id: 10858,
 in_GraphicItem: "DesignLegSlanted001H250",
 Model3DGroupName: "Model3DDesignLegSlanted001H250"
}
,{
 _id: 10859,
 in_GraphicItem: "GraphicShelfadjFittingWoodDesign01",
 Model3DGroupName: "Model3DShelfadjWoodDesign01"
}
,{
 _id: 10860,
 in_GraphicItem: "GraphicShelfadjFittingWoodDesign02",
 Model3DGroupName: "Model3DShelfadjWoodDesign02"
}
,{
 _id: 10861,
 in_GraphicItem: "GraphicShelfadjFittingWoodDesign03",
 Model3DGroupName: "Model3DShelfadjWoodDesign03"
}
,{
 _id: 10862,
 in_GraphicItem: "GraphicShelfadjFittingGlassDesign01",
 Model3DGroupName: "Model3DShelfadjGlassDesign01"
}
,{
 _id: 10863,
 in_GraphicItem: "GraphicItemMinifix01White",
 Model3DGroupName: "MinifixConnectionBolt01"
}
,{
 _id: 10864,
 in_GraphicItem: "GraphicItemMinifix01White",
 Model3DGroupName: "MinifixConnectionHousing01"
}
,{
 _id: 10865,
 in_GraphicItem: "GraphicItemMinifix01White",
 Model3DGroupName: "MinifixConnectionCover"
}
,{
 _id: 10866,
 in_GraphicItem: "GraphicItemMinifix01Black",
 Model3DGroupName: "MinifixConnectionBolt01"
}
,{
 _id: 10867,
 in_GraphicItem: "GraphicItemMinifix01Black",
 Model3DGroupName: "MinifixConnectionHousing01"
}
,{
 _id: 10868,
 in_GraphicItem: "GraphicItemMinifix01Black",
 Model3DGroupName: "MinifixConnectionCover"
}
,{
 _id: 10869,
 in_GraphicItem: "GraphicItemMinifix01Light",
 Model3DGroupName: "MinifixConnectionBolt01"
}
,{
 _id: 10870,
 in_GraphicItem: "GraphicItemMinifix01Light",
 Model3DGroupName: "MinifixConnectionHousing01"
}
,{
 _id: 10871,
 in_GraphicItem: "GraphicItemMinifix01Light",
 Model3DGroupName: "MinifixConnectionCover"
}
,{
 _id: 10872,
 in_GraphicItem: "GraphicItemMinifix01Dark",
 Model3DGroupName: "MinifixConnectionBolt01"
}
,{
 _id: 10873,
 in_GraphicItem: "GraphicItemMinifix01Dark",
 Model3DGroupName: "MinifixConnectionHousing01"
}
,{
 _id: 10874,
 in_GraphicItem: "GraphicItemMinifix01Dark",
 Model3DGroupName: "MinifixConnectionCover"
}
,{
 _id: 10875,
 in_GraphicItem: "GraphicItemDowel01",
 Model3DGroupName: "Dowel"
}
,{
 _id: 10876,
 in_GraphicItem: "GraphicItemDowel02",
 Model3DGroupName: "Dowel"
}
,{
 _id: 10877,
 in_GraphicItem: "GraphicHinge110HalfSpringSS",
 Model3DGroupName: "Model3DHinge110HalfSpringSS"
}
,{
 _id: 10878,
 in_GraphicItem: "GraphicHinge110InsetSpringSS",
 Model3DGroupName: "Model3DHinge110InsetSpringSS"
}
,{
 _id: 10879,
 in_GraphicItem: "GraphicHinge110OverlaySpringSS",
 Model3DGroupName: "Model3DHinge110OverlaySpringSS"
}
,{
 _id: 10880,
 in_GraphicItem: "GraphicHinge110SoftClHalfSpringSS",
 Model3DGroupName: "Model3DHinge110SoftClHalfSpringSS"
}
,{
 _id: 10881,
 in_GraphicItem: "GraphicHinge110SoftClInsetSpringSS",
 Model3DGroupName: "Model3DHinge110SoftClInsetSpringSS"
}
,{
 _id: 10882,
 in_GraphicItem: "GraphicHinge110SoftClOverlaySpringSS",
 Model3DGroupName: "Model3DHinge110SoftClOverlaySpringSS"
}
,{
 _id: 10883,
 in_GraphicItem: "GraphicHinge155SoftClHalfSpringSS",
 Model3DGroupName: "Model3DHinge155SoftClHalfSpringSS"
}
,{
 _id: 10884,
 in_GraphicItem: "GraphicHinge155SoftClOverlaySpringSS",
 Model3DGroupName: "Model3DHinge155SoftClOverlaySpringSS"
}
,{
 _id: 10885,
 in_GraphicItem: "GraphicHinge165HalfSpringSS",
 Model3DGroupName: "Model3DHinge165HalfSpringSS"
}
,{
 _id: 10886,
 in_GraphicItem: "GraphicHinge165InsetSpringSS",
 Model3DGroupName: "Model3DHinge165InsetSpringSS"
}
,{
 _id: 10887,
 in_GraphicItem: "GraphicHinge165OverlaySpringSS",
 Model3DGroupName: "Model3DHinge165OverlaySpringSS"
}
,{
 _id: 10888,
 in_GraphicItem: "GraphicMpCruciformA0SS",
 Model3DGroupName: "Model3DMpCruciformA0SS"
}
,{
 _id: 10889,
 in_GraphicItem: "GraphicMpCruciformA3SS",
 Model3DGroupName: "Model3DMpCruciformA3SS"
}
,{
 _id: 10890,
 in_GraphicItem: "GraphicMpCruciformA6SS",
 Model3DGroupName: "Model3DMpCruciformA6SS"
}
,{
 _id: 10891,
 in_GraphicItem: "GraphicMpCruciformSM0SS",
 Model3DGroupName: "Model3DMpCruciformSM0SS"
}
,{
 _id: 10892,
 in_GraphicItem: "GraphicMpCruciformSM3SS",
 Model3DGroupName: "Model3DMpCruciformSM3SS"
}
,{
 _id: 10893,
 in_GraphicItem: "GraphicMpCruciformSM6SS",
 Model3DGroupName: "Model3DMpCruciformSM6SS"
}
,{
 _id: 10894,
 in_GraphicItem: "GraphicMpHorizontalSM0SS",
 Model3DGroupName: "Model3DMpHorizontalSM0SS"
}
,{
 _id: 10895,
 in_GraphicItem: "GraphicMpHorizontalSM3SS",
 Model3DGroupName: "Model3DMpHorizontalSM3SS"
}
,{
 _id: 10896,
 in_GraphicItem: "GraphicMpHorizontalSM6SS",
 Model3DGroupName: "Model3DMpHorizontalSM6SS"
}
,{
 _id: 10897,
 in_GraphicItem: "GraphicHingeBlindCornerInset110SoftClNP",
 Model3DGroupName: "Model3DHingeBlindCornerInset110SoftClNP"
}
,{
 _id: 10898,
 in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
 Model3DGroupName: "Model3DCoverCap290.40.701"
}
,{
 _id: 10899,
 in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
 Model3DGroupName: "Model3DCoverCap290.40.702"
}
,{
 _id: 10900,
 in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
 Model3DGroupName: "Model3DHanger290.02.702"
}
,{
 _id: 10901,
 in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
 Model3DGroupName: "Model3DHanger290.02.703"
}
,{
 _id: 10902,
 in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
 Model3DGroupName: "Model3DHanger290.03.937"
}
,{
 _id: 10903,
 in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
 Model3DGroupName: "Model3DHanger290.03.938"
}
,{
 _id: 10904,
 in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
 Model3DGroupName: "Model3DHanger290.40.901"
}
,{
 _id: 10905,
 in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
 Model3DGroupName: "Model3DHanger290.40.902"
}
,{
 _id: 10906,
 in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
 Model3DGroupName: "Model3DHanger290.40.980"
}
,{
 _id: 10907,
 in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
 Model3DGroupName: "Model3DHanger290.40.981"
}
,{
 _id: 10908,
 in_GraphicItem: "GraphicWallUnitVisibleHanger52kgNickelPlated",
 Model3DGroupName: "Model3DWallPlate290.09.910"
}
,{
 _id: 10909,
 in_GraphicItem: "GraphicWallUnitVisibleHanger75kgWhite",
 Model3DGroupName: "Model3DWallPlate290.40.989"
}
,{
 _id: 10910,
 in_GraphicItem: "GraphicBaseUnitVisibleHanger120kgWhite",
 Model3DGroupName: "Model3DWallPlate290.40.991"
}
,{
 _id: 10911,
 in_GraphicItem: "GraphicWallUnitHiddenHanger92kgWhite",
 Model3DGroupName: "Model3DWallPlate290.09.910"
}
,{
 _id: 10912,
 in_GraphicItem: "Graphic_Legra_FrontBotCon",
 Model3DGroupName: "Model3D_Legra_FrontBotCon"
}
,{
 _id: 10913,
 in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
 Model3DGroupName: "Model3DHanger290.02.710"
}
,{
 _id: 10914,
 in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
 Model3DGroupName: "Model3DHanger290.02.711"
}
,{
 _id: 10915,
 in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
 Model3DGroupName: "Model3DHanger290.02.710"
}
,{
 _id: 10916,
 in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
 Model3DGroupName: "Model3DHanger290.02.711"
}
,{
 _id: 10917,
 in_GraphicItem: "GraphicWallUnitVisibleHanger45kgWhite",
 Model3DGroupName: "Model3DWallPlate290.09.910"
}
,{
 _id: 10918,
 in_GraphicItem: "GraphicWallUnitVisibleHanger45kgGrey",
 Model3DGroupName: "Model3DWallPlate290.09.910"
}
,{
 _id: 10919,
 in_GraphicItem: "GraphicItemDowel03",
 Model3DGroupName: "Dowel"
}
,{
 _id: 10920,
 in_GraphicItem: "GraphicGlueDuststrip",
 Model3DGroupName: "Model3DGlueDuststrip"
}
,{
 _id: 10921,
 in_GraphicItem: "GraphicPushToOpenShort",
 Model3DGroupName: "Model3DPushToOpenShort"
}
,{
 _id: 10922,
 in_GraphicItem: "GraphicPushToOpenLong",
 Model3DGroupName: "Model3DPushToOpenLong"
}
,{
 _id: 10923,
 in_GraphicItem: "GraphicAdapterHousingShort",
 Model3DGroupName: "Model3DAdapterHousingShort"
}
,{
 _id: 10924,
 in_GraphicItem: "GraphicAdapterHousingLong",
 Model3DGroupName: "Model3DAdapterHousingLong"
}
,{
 _id: 10925,
 in_GraphicItem: "NoGraphic",
 Model3DGroupName: "NoGraphic"
}
,{
 _id: 10926,
 in_GraphicItem: "GraphicRafix01Nickel",
 Model3DGroupName: "Rafix20Housing19mmNickelPlated"
}
,{
 _id: 10927,
 in_GraphicItem: "GraphicRafix01Nickel",
 Model3DGroupName: "RafixConnectionBolt11x5mm"
}
,{
 _id: 10928,
 in_GraphicItem: "GraphicHingeFlipLiftDF",
 Model3DGroupName: "Model3DHingeFlipLiftDF"
}
,{
 _id: 10929,
 in_GraphicItem: "Aventos_HF_PSL",
 Model3DGroupName: "Model3D_Aventos_HF_PSL"
}
,{
 _id: 10930,
 in_GraphicItem: "Aventos_HF_PSR",
 Model3DGroupName: "Model3D_Aventos_HF_PSR"
}
,{
 _id: 10931,
 in_GraphicItem: "Aventos_HF_Connector",
 Model3DGroupName: "Model3D_Aventos_HF_Connector"
}
,{
 _id: 10932,
 in_GraphicItem: "Aventos_HF_Mech480",
 Model3DGroupName: "Model3D_Aventos_HF_Mech_480"
}
,{
 _id: 10933,
 in_GraphicItem: "Aventos_HF_Mech600",
 Model3DGroupName: "Model3D_Aventos_HF_Mech_600"
}
,{
 _id: 10934,
 in_GraphicItem: "Aventos_HF_Mech840",
 Model3DGroupName: "Model3D_Aventos_HF_Mech_840"
}
,{
 _id: 10935,
 in_GraphicItem: "Aventos_HK_PSL",
 Model3DGroupName: "Model3D_Aventos_HK_PSL"
}
,{
 _id: 10936,
 in_GraphicItem: "Aventos_HK_PSR",
 Model3DGroupName: "Model3D_Aventos_HK_PSR"
}
,{
 _id: 10937,
 in_GraphicItem: "Aventos_HK_Connector",
 Model3DGroupName: "Model3D_Aventos_HK_Connector"
}
,{
 _id: 10938,
 in_GraphicItem: "GraphicHinge120OverlayNoSpringSSForFHF",
 Model3DGroupName: "Model3DHinge120OverlayNoSpringSSForFHF"
}
,{
 _id: 10939,
 in_GraphicItem: "Aventos_HS_PSL",
 Model3DGroupName: "Model3D_Aventos_HS_PSL"
}
,{
 _id: 10940,
 in_GraphicItem: "Aventos_HS_PSR",
 Model3DGroupName: "Model3D_Aventos_HS_PSR"
}
,{
 _id: 10941,
 in_GraphicItem: "Aventos_HL_PSL",
 Model3DGroupName: "Model3D_Aventos_HL_PSL"
}
,{
 _id: 10942,
 in_GraphicItem: "Aventos_HL_PSR",
 Model3DGroupName: "Model3D_Aventos_HL_PSR"
}
,{
 _id: 10943,
 in_GraphicItem: "Aventos_HL_Mech1",
 Model3DGroupName: "Model3D_Aventos_HL_Mech1"
}
,{
 _id: 10944,
 in_GraphicItem: "Aventos_HL_Mech2",
 Model3DGroupName: "Model3D_Aventos_HL_Mech2"
}
,{
 _id: 10945,
 in_GraphicItem: "Aventos_HL_Mech3",
 Model3DGroupName: "Model3D_Aventos_HL_Mech3"
}
,{
 _id: 10946,
 in_GraphicItem: "Aventos_HL_Mech4",
 Model3DGroupName: "Model3D_Aventos_HL_Mech4"
}
,{
 _id: 10947,
 in_GraphicItem: "Aventos_HKXS_Mech_R",
 Model3DGroupName: "Model3D_Aventos_HKXS_Mech_R"
}
,{
 _id: 10948,
 in_GraphicItem: "Aventos_HKXS_Mech_L",
 Model3DGroupName: "Model3D_Aventos_HKXS_Mech_L"
}
,{
 _id: 10949,
 in_GraphicItem: "Aventos_HKXS_Front",
 Model3DGroupName: "Model3D_Aventos_HKXS_Front"
}
,{
 _id: 10950,
 in_GraphicItem: "Aventos_HKXS_Carcase_R",
 Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_R"
}
,{
 _id: 10951,
 in_GraphicItem: "Aventos_HKXS_Carcase_L",
 Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_L"
}
,{
 _id: 10952,
 in_GraphicItem: "DropDown_L",
 Model3DGroupName: "DropDown_L"
}
,{
 _id: 10953,
 in_GraphicItem: "DropDown_R",
 Model3DGroupName: "DropDown_R"
}
,{
 _id: 10954,
 in_GraphicItem: "DropDown_Front",
 Model3DGroupName: "DropDown_Front"
}
,{
 _id: 10955,
 in_GraphicItem: "GraphicHingeCenterForFHF",
 Model3DGroupName: "Model3DHingeCenterForFHF"
}
,{
 _id: 10956,
 in_GraphicItem: "GraphicMPHorizontalBL0SS",
 Model3DGroupName: "Model3DMPHorizontalBL0SS"
}
,{
 _id: 10957,
 in_GraphicItem: "GraphicMPHorizontalBL3SS",
 Model3DGroupName: "Model3DMPHorizontalBL3SS"
}
,{
 _id: 10958,
 in_GraphicItem: "SquareBracket",
 Model3DGroupName: "SquareBracket"
}
,{
 _id: 10959,
 in_GraphicItem: "GraphicBracket01",
 Model3DGroupName: "Model3DBracket01"
}
,{
 _id: 10960,
 in_GraphicItem: "GraphicPlinthLegTriangularPressH100",
 Model3DGroupName: "Model3DPlinthLegTriangularPressH100"
}
,{
 _id: 10961,
 in_GraphicItem: "GraphicPlinthLegTriangularPressH120",
 Model3DGroupName: "Model3DPlinthLegTriangularPressH120"
}
,{
 _id: 10962,
 in_GraphicItem: "GraphicPlinthLegTriangularPressH150",
 Model3DGroupName: "Model3DPlinthLegTriangularPressH150"
}
,{
 _id: 10963,
 in_GraphicItem: "GraphicPlinthLegRectangularScrewH100",
 Model3DGroupName: "Model3DPlinthLegRectangularScrewH100"
}
,{
 _id: 10964,
 in_GraphicItem: "GraphicPlinthLegRectangularScrewH120",
 Model3DGroupName: "Model3DPlinthLegRectangularScrewH120"
}
,{
 _id: 10965,
 in_GraphicItem: "GraphicPlinthLegRectangularScrewH150",
 Model3DGroupName: "Model3DPlinthLegRectangularScrewH150"
}
,{
 _id: 10966,
 in_GraphicItem: "DesignLegRectangular001H100",
 Model3DGroupName: "Model3DDesignLegRectangular001H100"
}
,{
 _id: 10967,
 in_GraphicItem: "DesignLegRectangular001H150",
 Model3DGroupName: "Model3DDesignLegRectangular001H150"
}
,{
 _id: 10968,
 in_GraphicItem: "DesignLegRectangular001H200",
 Model3DGroupName: "Model3DDesignLegRectangular001H200"
}
,{
 _id: 10969,
 in_GraphicItem: "DesignLegRectangular001H50",
 Model3DGroupName: "Model3DDesignLegRectangular001H50"
}
,{
 _id: 10970,
 in_GraphicItem: "DesignLegRectangular001H80",
 Model3DGroupName: "Model3DDesignLegRectangular001H80"
}
,{
 _id: 10971,
 in_GraphicItem: "GraphicKeku01",
 Model3DGroupName: "Model3DKeku_Side_262_50_368"
}
,{
 _id: 10972,
 in_GraphicItem: "GraphicKeku01",
 Model3DGroupName: "Model3DKeku_Front_262_50_359"
}
,{
 _id: 10973,
 in_GraphicItem: "GraphicLegra_Inox_270_C",
 Model3DGroupName: "Legra_Box_Inox_C_270_Left"
}
,{
 _id: 10974,
 in_GraphicItem: "GraphicLegra_Inox_270_C",
 Model3DGroupName: "Legra_Box_Inox_C_270_Right"
}
,{
 _id: 10975,
 in_GraphicItem: "GraphicLegra_Inox_270_C",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 10976,
 in_GraphicItem: "GraphicLegra_Inox_270_C",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 10977,
 in_GraphicItem: "GraphicLegra_Inox_270_M",
 Model3DGroupName: "Legra_Box_Inox_M_270_Left"
}
,{
 _id: 10978,
 in_GraphicItem: "GraphicLegra_Inox_270_M",
 Model3DGroupName: "Legra_Box_Inox_M_270_Right"
}
,{
 _id: 10979,
 in_GraphicItem: "GraphicLegra_Inox_270_M",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 10980,
 in_GraphicItem: "GraphicLegra_Inox_270_M",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 10981,
 in_GraphicItem: "GraphicLegra_Inox_300_C",
 Model3DGroupName: "Legra_Box_Inox_C_300_Left"
}
,{
 _id: 10982,
 in_GraphicItem: "GraphicLegra_Inox_300_C",
 Model3DGroupName: "Legra_Box_Inox_C_300_Right"
}
,{
 _id: 10983,
 in_GraphicItem: "GraphicLegra_Inox_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 10984,
 in_GraphicItem: "GraphicLegra_Inox_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 10985,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Box_Inox_K_300_Left"
}
,{
 _id: 10986,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Box_Inox_K_300_Right"
}
,{
 _id: 10987,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 10988,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 10989,
 in_GraphicItem: "GraphicLegra_Inox_300_M",
 Model3DGroupName: "Legra_Box_Inox_M_300_Left"
}
,{
 _id: 10990,
 in_GraphicItem: "GraphicLegra_Inox_300_M",
 Model3DGroupName: "Legra_Box_Inox_M_300_Right"
}
,{
 _id: 10991,
 in_GraphicItem: "GraphicLegra_Inox_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 10992,
 in_GraphicItem: "GraphicLegra_Inox_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 10993,
 in_GraphicItem: "GraphicLegra_Inox_350_C",
 Model3DGroupName: "Legra_Box_Inox_C_350_Left"
}
,{
 _id: 10994,
 in_GraphicItem: "GraphicLegra_Inox_350_C",
 Model3DGroupName: "Legra_Box_Inox_C_350_Right"
}
,{
 _id: 10995,
 in_GraphicItem: "GraphicLegra_Inox_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 10996,
 in_GraphicItem: "GraphicLegra_Inox_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 10997,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Box_Inox_K_350_Left"
}
,{
 _id: 10998,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Box_Inox_K_350_Right"
}
,{
 _id: 10999,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11000,
 in_GraphicItem: "GraphicLegra_Inox_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11001,
 in_GraphicItem: "GraphicLegra_Inox_350_M",
 Model3DGroupName: "Legra_Box_Inox_M_350_Left"
}
,{
 _id: 11002,
 in_GraphicItem: "GraphicLegra_Inox_350_M",
 Model3DGroupName: "Legra_Box_Inox_M_350_Right"
}
,{
 _id: 11003,
 in_GraphicItem: "GraphicLegra_Inox_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11004,
 in_GraphicItem: "GraphicLegra_Inox_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11005,
 in_GraphicItem: "GraphicLegra_Inox_400_C",
 Model3DGroupName: "Legra_Box_Inox_C_400_Left"
}
,{
 _id: 11006,
 in_GraphicItem: "GraphicLegra_Inox_400_C",
 Model3DGroupName: "Legra_Box_Inox_C_400_Right"
}
,{
 _id: 11007,
 in_GraphicItem: "GraphicLegra_Inox_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11008,
 in_GraphicItem: "GraphicLegra_Inox_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11009,
 in_GraphicItem: "GraphicLegra_Inox_400_F",
 Model3DGroupName: "Legra_Box_Inox_F_400_Left"
}
,{
 _id: 11010,
 in_GraphicItem: "GraphicLegra_Inox_400_F",
 Model3DGroupName: "Legra_Box_Inox_F_400_Right"
}
,{
 _id: 11011,
 in_GraphicItem: "GraphicLegra_Inox_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11012,
 in_GraphicItem: "GraphicLegra_Inox_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11013,
 in_GraphicItem: "GraphicLegra_Inox_400_K",
 Model3DGroupName: "Legra_Box_Inox_K_400_Left"
}
,{
 _id: 11014,
 in_GraphicItem: "GraphicLegra_Inox_400_K",
 Model3DGroupName: "Legra_Box_Inox_K_400_Right"
}
,{
 _id: 11015,
 in_GraphicItem: "GraphicLegra_Inox_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11016,
 in_GraphicItem: "GraphicLegra_Inox_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11017,
 in_GraphicItem: "GraphicLegra_Inox_400_M",
 Model3DGroupName: "Legra_Box_Inox_M_400_Left"
}
,{
 _id: 11018,
 in_GraphicItem: "GraphicLegra_Inox_400_M",
 Model3DGroupName: "Legra_Box_Inox_M_400_Right"
}
,{
 _id: 11019,
 in_GraphicItem: "GraphicLegra_Inox_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11020,
 in_GraphicItem: "GraphicLegra_Inox_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11021,
 in_GraphicItem: "GraphicLegra_Inox_400_N",
 Model3DGroupName: "Legra_Box_Inox_N_400_Left"
}
,{
 _id: 11022,
 in_GraphicItem: "GraphicLegra_Inox_400_N",
 Model3DGroupName: "Legra_Box_Inox_N_400_Right"
}
,{
 _id: 11023,
 in_GraphicItem: "GraphicLegra_Inox_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11024,
 in_GraphicItem: "GraphicLegra_Inox_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11025,
 in_GraphicItem: "GraphicLegra_Inox_450_C",
 Model3DGroupName: "Legra_Box_Inox_C_450_Left"
}
,{
 _id: 11026,
 in_GraphicItem: "GraphicLegra_Inox_450_C",
 Model3DGroupName: "Legra_Box_Inox_C_450_Right"
}
,{
 _id: 11027,
 in_GraphicItem: "GraphicLegra_Inox_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11028,
 in_GraphicItem: "GraphicLegra_Inox_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11029,
 in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_450_Left"
}
,{
 _id: 11030,
 in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_450_Right"
}
,{
 _id: 11031,
 in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11032,
 in_GraphicItem: "GraphicLegra_Inox_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11033,
 in_GraphicItem: "GraphicLegra_Inox_450_F",
 Model3DGroupName: "Legra_Box_Inox_F_450_Left"
}
,{
 _id: 11034,
 in_GraphicItem: "GraphicLegra_Inox_450_F",
 Model3DGroupName: "Legra_Box_Inox_F_450_Right"
}
,{
 _id: 11035,
 in_GraphicItem: "GraphicLegra_Inox_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11036,
 in_GraphicItem: "GraphicLegra_Inox_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11037,
 in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_450_Left"
}
,{
 _id: 11038,
 in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_450_Right"
}
,{
 _id: 11039,
 in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11040,
 in_GraphicItem: "GraphicLegra_Inox_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11041,
 in_GraphicItem: "GraphicLegra_Inox_450_K",
 Model3DGroupName: "Legra_Box_Inox_K_450_Left"
}
,{
 _id: 11042,
 in_GraphicItem: "GraphicLegra_Inox_450_K",
 Model3DGroupName: "Legra_Box_Inox_K_450_Right"
}
,{
 _id: 11043,
 in_GraphicItem: "GraphicLegra_Inox_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11044,
 in_GraphicItem: "GraphicLegra_Inox_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11045,
 in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_450_Left"
}
,{
 _id: 11046,
 in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_450_Right"
}
,{
 _id: 11047,
 in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11048,
 in_GraphicItem: "GraphicLegra_Inox_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11049,
 in_GraphicItem: "GraphicLegra_Inox_450_M",
 Model3DGroupName: "Legra_Box_Inox_M_450_Left"
}
,{
 _id: 11050,
 in_GraphicItem: "GraphicLegra_Inox_450_M",
 Model3DGroupName: "Legra_Box_Inox_M_450_Right"
}
,{
 _id: 11051,
 in_GraphicItem: "GraphicLegra_Inox_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11052,
 in_GraphicItem: "GraphicLegra_Inox_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11053,
 in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_450_Left"
}
,{
 _id: 11054,
 in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_450_Right"
}
,{
 _id: 11055,
 in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11056,
 in_GraphicItem: "GraphicLegra_Inox_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11057,
 in_GraphicItem: "GraphicLegra_Inox_450_N",
 Model3DGroupName: "Legra_Box_Inox_N_450_Left"
}
,{
 _id: 11058,
 in_GraphicItem: "GraphicLegra_Inox_450_N",
 Model3DGroupName: "Legra_Box_Inox_N_450_Right"
}
,{
 _id: 11059,
 in_GraphicItem: "GraphicLegra_Inox_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11060,
 in_GraphicItem: "GraphicLegra_Inox_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11061,
 in_GraphicItem: "GraphicLegra_Inox_500_C",
 Model3DGroupName: "Legra_Box_Inox_C_500_Left"
}
,{
 _id: 11062,
 in_GraphicItem: "GraphicLegra_Inox_500_C",
 Model3DGroupName: "Legra_Box_Inox_C_500_Right"
}
,{
 _id: 11063,
 in_GraphicItem: "GraphicLegra_Inox_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11064,
 in_GraphicItem: "GraphicLegra_Inox_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11065,
 in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_500_Left"
}
,{
 _id: 11066,
 in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_500_Right"
}
,{
 _id: 11067,
 in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11068,
 in_GraphicItem: "GraphicLegra_Inox_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11069,
 in_GraphicItem: "GraphicLegra_Inox_500_F",
 Model3DGroupName: "Legra_Box_Inox_F_500_Left"
}
,{
 _id: 11070,
 in_GraphicItem: "GraphicLegra_Inox_500_F",
 Model3DGroupName: "Legra_Box_Inox_F_500_Right"
}
,{
 _id: 11071,
 in_GraphicItem: "GraphicLegra_Inox_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11072,
 in_GraphicItem: "GraphicLegra_Inox_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11073,
 in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_500_Left"
}
,{
 _id: 11074,
 in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_500_Right"
}
,{
 _id: 11075,
 in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11076,
 in_GraphicItem: "GraphicLegra_Inox_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11077,
 in_GraphicItem: "GraphicLegra_Inox_500_K",
 Model3DGroupName: "Legra_Box_Inox_K_500_Left"
}
,{
 _id: 11078,
 in_GraphicItem: "GraphicLegra_Inox_500_K",
 Model3DGroupName: "Legra_Box_Inox_K_500_Right"
}
,{
 _id: 11079,
 in_GraphicItem: "GraphicLegra_Inox_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11080,
 in_GraphicItem: "GraphicLegra_Inox_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11081,
 in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_500_Left"
}
,{
 _id: 11082,
 in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_500_Right"
}
,{
 _id: 11083,
 in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11084,
 in_GraphicItem: "GraphicLegra_Inox_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11085,
 in_GraphicItem: "GraphicLegra_Inox_500_M",
 Model3DGroupName: "Legra_Box_Inox_M_500_Left"
}
,{
 _id: 11086,
 in_GraphicItem: "GraphicLegra_Inox_500_M",
 Model3DGroupName: "Legra_Box_Inox_M_500_Right"
}
,{
 _id: 11087,
 in_GraphicItem: "GraphicLegra_Inox_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11088,
 in_GraphicItem: "GraphicLegra_Inox_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11089,
 in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_500_Left"
}
,{
 _id: 11090,
 in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_500_Right"
}
,{
 _id: 11091,
 in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11092,
 in_GraphicItem: "GraphicLegra_Inox_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11093,
 in_GraphicItem: "GraphicLegra_Inox_500_N",
 Model3DGroupName: "Legra_Box_Inox_N_500_Left"
}
,{
 _id: 11094,
 in_GraphicItem: "GraphicLegra_Inox_500_N",
 Model3DGroupName: "Legra_Box_Inox_N_500_Right"
}
,{
 _id: 11095,
 in_GraphicItem: "GraphicLegra_Inox_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11096,
 in_GraphicItem: "GraphicLegra_Inox_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11097,
 in_GraphicItem: "GraphicLegra_Inox_550_C",
 Model3DGroupName: "Legra_Box_Inox_C_550_Left"
}
,{
 _id: 11098,
 in_GraphicItem: "GraphicLegra_Inox_550_C",
 Model3DGroupName: "Legra_Box_Inox_C_550_Right"
}
,{
 _id: 11099,
 in_GraphicItem: "GraphicLegra_Inox_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11100,
 in_GraphicItem: "GraphicLegra_Inox_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11101,
 in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_550_Left"
}
,{
 _id: 11102,
 in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_550_Right"
}
,{
 _id: 11103,
 in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11104,
 in_GraphicItem: "GraphicLegra_Inox_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11105,
 in_GraphicItem: "GraphicLegra_Inox_550_F",
 Model3DGroupName: "Legra_Box_Inox_F_550_Left"
}
,{
 _id: 11106,
 in_GraphicItem: "GraphicLegra_Inox_550_F",
 Model3DGroupName: "Legra_Box_Inox_F_550_Right"
}
,{
 _id: 11107,
 in_GraphicItem: "GraphicLegra_Inox_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11108,
 in_GraphicItem: "GraphicLegra_Inox_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11109,
 in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_550_Left"
}
,{
 _id: 11110,
 in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_550_Right"
}
,{
 _id: 11111,
 in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11112,
 in_GraphicItem: "GraphicLegra_Inox_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11113,
 in_GraphicItem: "GraphicLegra_Inox_550_K",
 Model3DGroupName: "Legra_Box_Inox_K_550_Left"
}
,{
 _id: 11114,
 in_GraphicItem: "GraphicLegra_Inox_550_K",
 Model3DGroupName: "Legra_Box_Inox_K_550_Right"
}
,{
 _id: 11115,
 in_GraphicItem: "GraphicLegra_Inox_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11116,
 in_GraphicItem: "GraphicLegra_Inox_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11117,
 in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_550_Left"
}
,{
 _id: 11118,
 in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_550_Right"
}
,{
 _id: 11119,
 in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11120,
 in_GraphicItem: "GraphicLegra_Inox_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11121,
 in_GraphicItem: "GraphicLegra_Inox_550_M",
 Model3DGroupName: "Legra_Box_Inox_M_550_Left"
}
,{
 _id: 11122,
 in_GraphicItem: "GraphicLegra_Inox_550_M",
 Model3DGroupName: "Legra_Box_Inox_M_550_Right"
}
,{
 _id: 11123,
 in_GraphicItem: "GraphicLegra_Inox_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11124,
 in_GraphicItem: "GraphicLegra_Inox_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11125,
 in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_550_Left"
}
,{
 _id: 11126,
 in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_550_Right"
}
,{
 _id: 11127,
 in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11128,
 in_GraphicItem: "GraphicLegra_Inox_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11129,
 in_GraphicItem: "GraphicLegra_Inox_550_N",
 Model3DGroupName: "Legra_Box_Inox_N_550_Left"
}
,{
 _id: 11130,
 in_GraphicItem: "GraphicLegra_Inox_550_N",
 Model3DGroupName: "Legra_Box_Inox_N_550_Right"
}
,{
 _id: 11131,
 in_GraphicItem: "GraphicLegra_Inox_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11132,
 in_GraphicItem: "GraphicLegra_Inox_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11133,
 in_GraphicItem: "GraphicLegra_Inox_600_C",
 Model3DGroupName: "Legra_Box_Inox_C_600_Left"
}
,{
 _id: 11134,
 in_GraphicItem: "GraphicLegra_Inox_600_C",
 Model3DGroupName: "Legra_Box_Inox_C_600_Right"
}
,{
 _id: 11135,
 in_GraphicItem: "GraphicLegra_Inox_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11136,
 in_GraphicItem: "GraphicLegra_Inox_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11137,
 in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_600_Left"
}
,{
 _id: 11138,
 in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_600_Right"
}
,{
 _id: 11139,
 in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11140,
 in_GraphicItem: "GraphicLegra_Inox_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11141,
 in_GraphicItem: "GraphicLegra_Inox_600_F",
 Model3DGroupName: "Legra_Box_Inox_F_600_Left"
}
,{
 _id: 11142,
 in_GraphicItem: "GraphicLegra_Inox_600_F",
 Model3DGroupName: "Legra_Box_Inox_F_600_Right"
}
,{
 _id: 11143,
 in_GraphicItem: "GraphicLegra_Inox_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11144,
 in_GraphicItem: "GraphicLegra_Inox_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11145,
 in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_600_Left"
}
,{
 _id: 11146,
 in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_600_Right"
}
,{
 _id: 11147,
 in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11148,
 in_GraphicItem: "GraphicLegra_Inox_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11149,
 in_GraphicItem: "GraphicLegra_Inox_600_K",
 Model3DGroupName: "Legra_Box_Inox_K_600_Left"
}
,{
 _id: 11150,
 in_GraphicItem: "GraphicLegra_Inox_600_K",
 Model3DGroupName: "Legra_Box_Inox_K_600_Right"
}
,{
 _id: 11151,
 in_GraphicItem: "GraphicLegra_Inox_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11152,
 in_GraphicItem: "GraphicLegra_Inox_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11153,
 in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_600_Left"
}
,{
 _id: 11154,
 in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
 Model3DGroupName: "Legra_Box_Inox_K_600_Right"
}
,{
 _id: 11155,
 in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11156,
 in_GraphicItem: "GraphicLegra_Inox_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11157,
 in_GraphicItem: "GraphicLegra_Inox_600_M",
 Model3DGroupName: "Legra_Box_Inox_M_600_Left"
}
,{
 _id: 11158,
 in_GraphicItem: "GraphicLegra_Inox_600_M",
 Model3DGroupName: "Legra_Box_Inox_M_600_Right"
}
,{
 _id: 11159,
 in_GraphicItem: "GraphicLegra_Inox_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11160,
 in_GraphicItem: "GraphicLegra_Inox_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11161,
 in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_600_Left"
}
,{
 _id: 11162,
 in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_600_Right"
}
,{
 _id: 11163,
 in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11164,
 in_GraphicItem: "GraphicLegra_Inox_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11165,
 in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_650_Left"
}
,{
 _id: 11166,
 in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
 Model3DGroupName: "Legra_Box_Inox_C_650_Right"
}
,{
 _id: 11167,
 in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11168,
 in_GraphicItem: "GraphicLegra_Inox_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11169,
 in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_650_Left"
}
,{
 _id: 11170,
 in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
 Model3DGroupName: "Legra_Box_Inox_F_650_Right"
}
,{
 _id: 11171,
 in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11172,
 in_GraphicItem: "GraphicLegra_Inox_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11173,
 in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_650_Left"
}
,{
 _id: 11174,
 in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
 Model3DGroupName: "Legra_Box_Inox_M_650_Right"
}
,{
 _id: 11175,
 in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11176,
 in_GraphicItem: "GraphicLegra_Inox_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11177,
 in_GraphicItem: "Graphic_Legra_Syncro",
 Model3DGroupName: "Graphic_Legra_Syncro"
}
,{
 _id: 11178,
 in_GraphicItem: "GraphicLegra_Orion_270_C",
 Model3DGroupName: "Legra_Box_Orion_C_270_Left"
}
,{
 _id: 11179,
 in_GraphicItem: "GraphicLegra_Orion_270_C",
 Model3DGroupName: "Legra_Box_Orion_C_270_Right"
}
,{
 _id: 11180,
 in_GraphicItem: "GraphicLegra_Orion_270_C",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 11181,
 in_GraphicItem: "GraphicLegra_Orion_270_C",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 11182,
 in_GraphicItem: "GraphicLegra_Orion_270_M",
 Model3DGroupName: "Legra_Box_Orion_M_270_Left"
}
,{
 _id: 11183,
 in_GraphicItem: "GraphicLegra_Orion_270_M",
 Model3DGroupName: "Legra_Box_Orion_M_270_Right"
}
,{
 _id: 11184,
 in_GraphicItem: "GraphicLegra_Orion_270_M",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 11185,
 in_GraphicItem: "GraphicLegra_Orion_270_M",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 11186,
 in_GraphicItem: "GraphicLegra_Orion_300_C",
 Model3DGroupName: "Legra_Box_Orion_C_300_Left"
}
,{
 _id: 11187,
 in_GraphicItem: "GraphicLegra_Orion_300_C",
 Model3DGroupName: "Legra_Box_Orion_C_300_Right"
}
,{
 _id: 11188,
 in_GraphicItem: "GraphicLegra_Orion_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11189,
 in_GraphicItem: "GraphicLegra_Orion_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11190,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Box_Orion_K_300_Left"
}
,{
 _id: 11191,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Box_Orion_K_300_Right"
}
,{
 _id: 11192,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11193,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11194,
 in_GraphicItem: "GraphicLegra_Orion_300_M",
 Model3DGroupName: "Legra_Box_Orion_M_300_Left"
}
,{
 _id: 11195,
 in_GraphicItem: "GraphicLegra_Orion_300_M",
 Model3DGroupName: "Legra_Box_Orion_M_300_Right"
}
,{
 _id: 11196,
 in_GraphicItem: "GraphicLegra_Orion_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11197,
 in_GraphicItem: "GraphicLegra_Orion_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11198,
 in_GraphicItem: "GraphicLegra_Orion_350_C",
 Model3DGroupName: "Legra_Box_Orion_C_350_Left"
}
,{
 _id: 11199,
 in_GraphicItem: "GraphicLegra_Orion_350_C",
 Model3DGroupName: "Legra_Box_Orion_C_350_Right"
}
,{
 _id: 11200,
 in_GraphicItem: "GraphicLegra_Orion_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11201,
 in_GraphicItem: "GraphicLegra_Orion_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11202,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Box_Orion_K_350_Left"
}
,{
 _id: 11203,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Box_Orion_K_350_Right"
}
,{
 _id: 11204,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11205,
 in_GraphicItem: "GraphicLegra_Orion_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11206,
 in_GraphicItem: "GraphicLegra_Orion_350_M",
 Model3DGroupName: "Legra_Box_Orion_M_350_Left"
}
,{
 _id: 11207,
 in_GraphicItem: "GraphicLegra_Orion_350_M",
 Model3DGroupName: "Legra_Box_Orion_M_350_Right"
}
,{
 _id: 11208,
 in_GraphicItem: "GraphicLegra_Orion_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11209,
 in_GraphicItem: "GraphicLegra_Orion_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11210,
 in_GraphicItem: "GraphicLegra_Orion_400_C",
 Model3DGroupName: "Legra_Box_Orion_C_400_Left"
}
,{
 _id: 11211,
 in_GraphicItem: "GraphicLegra_Orion_400_C",
 Model3DGroupName: "Legra_Box_Orion_C_400_Right"
}
,{
 _id: 11212,
 in_GraphicItem: "GraphicLegra_Orion_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11213,
 in_GraphicItem: "GraphicLegra_Orion_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11214,
 in_GraphicItem: "GraphicLegra_Orion_400_F",
 Model3DGroupName: "Legra_Box_Orion_F_400_Left"
}
,{
 _id: 11215,
 in_GraphicItem: "GraphicLegra_Orion_400_F",
 Model3DGroupName: "Legra_Box_Orion_F_400_Right"
}
,{
 _id: 11216,
 in_GraphicItem: "GraphicLegra_Orion_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11217,
 in_GraphicItem: "GraphicLegra_Orion_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11218,
 in_GraphicItem: "GraphicLegra_Orion_400_K",
 Model3DGroupName: "Legra_Box_Orion_K_400_Left"
}
,{
 _id: 11219,
 in_GraphicItem: "GraphicLegra_Orion_400_K",
 Model3DGroupName: "Legra_Box_Orion_K_400_Right"
}
,{
 _id: 11220,
 in_GraphicItem: "GraphicLegra_Orion_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11221,
 in_GraphicItem: "GraphicLegra_Orion_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11222,
 in_GraphicItem: "GraphicLegra_Orion_400_M",
 Model3DGroupName: "Legra_Box_Orion_M_400_Left"
}
,{
 _id: 11223,
 in_GraphicItem: "GraphicLegra_Orion_400_M",
 Model3DGroupName: "Legra_Box_Orion_M_400_Right"
}
,{
 _id: 11224,
 in_GraphicItem: "GraphicLegra_Orion_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11225,
 in_GraphicItem: "GraphicLegra_Orion_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11226,
 in_GraphicItem: "GraphicLegra_Orion_400_N",
 Model3DGroupName: "Legra_Box_Orion_N_400_Left"
}
,{
 _id: 11227,
 in_GraphicItem: "GraphicLegra_Orion_400_N",
 Model3DGroupName: "Legra_Box_Orion_N_400_Right"
}
,{
 _id: 11228,
 in_GraphicItem: "GraphicLegra_Orion_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11229,
 in_GraphicItem: "GraphicLegra_Orion_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11230,
 in_GraphicItem: "GraphicLegra_Orion_450_C",
 Model3DGroupName: "Legra_Box_Orion_C_450_Left"
}
,{
 _id: 11231,
 in_GraphicItem: "GraphicLegra_Orion_450_C",
 Model3DGroupName: "Legra_Box_Orion_C_450_Right"
}
,{
 _id: 11232,
 in_GraphicItem: "GraphicLegra_Orion_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11233,
 in_GraphicItem: "GraphicLegra_Orion_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11234,
 in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_450_Left"
}
,{
 _id: 11235,
 in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_450_Right"
}
,{
 _id: 11236,
 in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11237,
 in_GraphicItem: "GraphicLegra_Orion_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11238,
 in_GraphicItem: "GraphicLegra_Orion_450_F",
 Model3DGroupName: "Legra_Box_Orion_F_450_Left"
}
,{
 _id: 11239,
 in_GraphicItem: "GraphicLegra_Orion_450_F",
 Model3DGroupName: "Legra_Box_Orion_F_450_Right"
}
,{
 _id: 11240,
 in_GraphicItem: "GraphicLegra_Orion_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11241,
 in_GraphicItem: "GraphicLegra_Orion_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11242,
 in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_450_Left"
}
,{
 _id: 11243,
 in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_450_Right"
}
,{
 _id: 11244,
 in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11245,
 in_GraphicItem: "GraphicLegra_Orion_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11246,
 in_GraphicItem: "GraphicLegra_Orion_450_K",
 Model3DGroupName: "Legra_Box_Orion_K_450_Left"
}
,{
 _id: 11247,
 in_GraphicItem: "GraphicLegra_Orion_450_K",
 Model3DGroupName: "Legra_Box_Orion_K_450_Right"
}
,{
 _id: 11248,
 in_GraphicItem: "GraphicLegra_Orion_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11249,
 in_GraphicItem: "GraphicLegra_Orion_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11250,
 in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_450_Left"
}
,{
 _id: 11251,
 in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_450_Right"
}
,{
 _id: 11252,
 in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11253,
 in_GraphicItem: "GraphicLegra_Orion_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11254,
 in_GraphicItem: "GraphicLegra_Orion_450_M",
 Model3DGroupName: "Legra_Box_Orion_M_450_Left"
}
,{
 _id: 11255,
 in_GraphicItem: "GraphicLegra_Orion_450_M",
 Model3DGroupName: "Legra_Box_Orion_M_450_Right"
}
,{
 _id: 11256,
 in_GraphicItem: "GraphicLegra_Orion_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11257,
 in_GraphicItem: "GraphicLegra_Orion_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11258,
 in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_450_Left"
}
,{
 _id: 11259,
 in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_450_Right"
}
,{
 _id: 11260,
 in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11261,
 in_GraphicItem: "GraphicLegra_Orion_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11262,
 in_GraphicItem: "GraphicLegra_Orion_450_N",
 Model3DGroupName: "Legra_Box_Orion_N_450_Left"
}
,{
 _id: 11263,
 in_GraphicItem: "GraphicLegra_Orion_450_N",
 Model3DGroupName: "Legra_Box_Orion_N_450_Right"
}
,{
 _id: 11264,
 in_GraphicItem: "GraphicLegra_Orion_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11265,
 in_GraphicItem: "GraphicLegra_Orion_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11266,
 in_GraphicItem: "GraphicLegra_Orion_500_C",
 Model3DGroupName: "Legra_Box_Orion_C_500_Left"
}
,{
 _id: 11267,
 in_GraphicItem: "GraphicLegra_Orion_500_C",
 Model3DGroupName: "Legra_Box_Orion_C_500_Right"
}
,{
 _id: 11268,
 in_GraphicItem: "GraphicLegra_Orion_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11269,
 in_GraphicItem: "GraphicLegra_Orion_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11270,
 in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_500_Left"
}
,{
 _id: 11271,
 in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_500_Right"
}
,{
 _id: 11272,
 in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11273,
 in_GraphicItem: "GraphicLegra_Orion_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11274,
 in_GraphicItem: "GraphicLegra_Orion_500_F",
 Model3DGroupName: "Legra_Box_Orion_F_500_Left"
}
,{
 _id: 11275,
 in_GraphicItem: "GraphicLegra_Orion_500_F",
 Model3DGroupName: "Legra_Box_Orion_F_500_Right"
}
,{
 _id: 11276,
 in_GraphicItem: "GraphicLegra_Orion_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11277,
 in_GraphicItem: "GraphicLegra_Orion_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11278,
 in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_500_Left"
}
,{
 _id: 11279,
 in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_500_Right"
}
,{
 _id: 11280,
 in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11281,
 in_GraphicItem: "GraphicLegra_Orion_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11282,
 in_GraphicItem: "GraphicLegra_Orion_500_K",
 Model3DGroupName: "Legra_Box_Orion_K_500_Left"
}
,{
 _id: 11283,
 in_GraphicItem: "GraphicLegra_Orion_500_K",
 Model3DGroupName: "Legra_Box_Orion_K_500_Right"
}
,{
 _id: 11284,
 in_GraphicItem: "GraphicLegra_Orion_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11285,
 in_GraphicItem: "GraphicLegra_Orion_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11286,
 in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_500_Left"
}
,{
 _id: 11287,
 in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_500_Right"
}
,{
 _id: 11288,
 in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11289,
 in_GraphicItem: "GraphicLegra_Orion_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11290,
 in_GraphicItem: "GraphicLegra_Orion_500_M",
 Model3DGroupName: "Legra_Box_Orion_M_500_Left"
}
,{
 _id: 11291,
 in_GraphicItem: "GraphicLegra_Orion_500_M",
 Model3DGroupName: "Legra_Box_Orion_M_500_Right"
}
,{
 _id: 11292,
 in_GraphicItem: "GraphicLegra_Orion_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11293,
 in_GraphicItem: "GraphicLegra_Orion_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11294,
 in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_500_Left"
}
,{
 _id: 11295,
 in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_500_Right"
}
,{
 _id: 11296,
 in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11297,
 in_GraphicItem: "GraphicLegra_Orion_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11298,
 in_GraphicItem: "GraphicLegra_Orion_500_N",
 Model3DGroupName: "Legra_Box_Orion_N_500_Left"
}
,{
 _id: 11299,
 in_GraphicItem: "GraphicLegra_Orion_500_N",
 Model3DGroupName: "Legra_Box_Orion_N_500_Right"
}
,{
 _id: 11300,
 in_GraphicItem: "GraphicLegra_Orion_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11301,
 in_GraphicItem: "GraphicLegra_Orion_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11302,
 in_GraphicItem: "GraphicLegra_Orion_550_C",
 Model3DGroupName: "Legra_Box_Orion_C_550_Left"
}
,{
 _id: 11303,
 in_GraphicItem: "GraphicLegra_Orion_550_C",
 Model3DGroupName: "Legra_Box_Orion_C_550_Right"
}
,{
 _id: 11304,
 in_GraphicItem: "GraphicLegra_Orion_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11305,
 in_GraphicItem: "GraphicLegra_Orion_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11306,
 in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_550_Left"
}
,{
 _id: 11307,
 in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_550_Right"
}
,{
 _id: 11308,
 in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11309,
 in_GraphicItem: "GraphicLegra_Orion_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11310,
 in_GraphicItem: "GraphicLegra_Orion_550_F",
 Model3DGroupName: "Legra_Box_Orion_F_550_Left"
}
,{
 _id: 11311,
 in_GraphicItem: "GraphicLegra_Orion_550_F",
 Model3DGroupName: "Legra_Box_Orion_F_550_Right"
}
,{
 _id: 11312,
 in_GraphicItem: "GraphicLegra_Orion_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11313,
 in_GraphicItem: "GraphicLegra_Orion_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11314,
 in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_550_Left"
}
,{
 _id: 11315,
 in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_550_Right"
}
,{
 _id: 11316,
 in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11317,
 in_GraphicItem: "GraphicLegra_Orion_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11318,
 in_GraphicItem: "GraphicLegra_Orion_550_K",
 Model3DGroupName: "Legra_Box_Orion_K_550_Left"
}
,{
 _id: 11319,
 in_GraphicItem: "GraphicLegra_Orion_550_K",
 Model3DGroupName: "Legra_Box_Orion_K_550_Right"
}
,{
 _id: 11320,
 in_GraphicItem: "GraphicLegra_Orion_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11321,
 in_GraphicItem: "GraphicLegra_Orion_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11322,
 in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_550_Left"
}
,{
 _id: 11323,
 in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_550_Right"
}
,{
 _id: 11324,
 in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11325,
 in_GraphicItem: "GraphicLegra_Orion_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11326,
 in_GraphicItem: "GraphicLegra_Orion_550_M",
 Model3DGroupName: "Legra_Box_Orion_M_550_Left"
}
,{
 _id: 11327,
 in_GraphicItem: "GraphicLegra_Orion_550_M",
 Model3DGroupName: "Legra_Box_Orion_M_550_Right"
}
,{
 _id: 11328,
 in_GraphicItem: "GraphicLegra_Orion_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11329,
 in_GraphicItem: "GraphicLegra_Orion_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11330,
 in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_550_Left"
}
,{
 _id: 11331,
 in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_550_Right"
}
,{
 _id: 11332,
 in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11333,
 in_GraphicItem: "GraphicLegra_Orion_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11334,
 in_GraphicItem: "GraphicLegra_Orion_550_N",
 Model3DGroupName: "Legra_Box_Orion_N_550_Left"
}
,{
 _id: 11335,
 in_GraphicItem: "GraphicLegra_Orion_550_N",
 Model3DGroupName: "Legra_Box_Orion_N_550_Right"
}
,{
 _id: 11336,
 in_GraphicItem: "GraphicLegra_Orion_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11337,
 in_GraphicItem: "GraphicLegra_Orion_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11338,
 in_GraphicItem: "GraphicLegra_Orion_600_C",
 Model3DGroupName: "Legra_Box_Orion_C_600_Left"
}
,{
 _id: 11339,
 in_GraphicItem: "GraphicLegra_Orion_600_C",
 Model3DGroupName: "Legra_Box_Orion_C_600_Right"
}
,{
 _id: 11340,
 in_GraphicItem: "GraphicLegra_Orion_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11341,
 in_GraphicItem: "GraphicLegra_Orion_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11342,
 in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_600_Left"
}
,{
 _id: 11343,
 in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_600_Right"
}
,{
 _id: 11344,
 in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11345,
 in_GraphicItem: "GraphicLegra_Orion_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11346,
 in_GraphicItem: "GraphicLegra_Orion_600_F",
 Model3DGroupName: "Legra_Box_Orion_F_600_Left"
}
,{
 _id: 11347,
 in_GraphicItem: "GraphicLegra_Orion_600_F",
 Model3DGroupName: "Legra_Box_Orion_F_600_Right"
}
,{
 _id: 11348,
 in_GraphicItem: "GraphicLegra_Orion_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11349,
 in_GraphicItem: "GraphicLegra_Orion_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11350,
 in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_600_Left"
}
,{
 _id: 11351,
 in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_600_Right"
}
,{
 _id: 11352,
 in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11353,
 in_GraphicItem: "GraphicLegra_Orion_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11354,
 in_GraphicItem: "GraphicLegra_Orion_600_K",
 Model3DGroupName: "Legra_Box_Orion_K_600_Left"
}
,{
 _id: 11355,
 in_GraphicItem: "GraphicLegra_Orion_600_K",
 Model3DGroupName: "Legra_Box_Orion_K_600_Right"
}
,{
 _id: 11356,
 in_GraphicItem: "GraphicLegra_Orion_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11357,
 in_GraphicItem: "GraphicLegra_Orion_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11358,
 in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_600_Left"
}
,{
 _id: 11359,
 in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
 Model3DGroupName: "Legra_Box_Orion_K_600_Right"
}
,{
 _id: 11360,
 in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11361,
 in_GraphicItem: "GraphicLegra_Orion_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11362,
 in_GraphicItem: "GraphicLegra_Orion_600_M",
 Model3DGroupName: "Legra_Box_Orion_M_600_Left"
}
,{
 _id: 11363,
 in_GraphicItem: "GraphicLegra_Orion_600_M",
 Model3DGroupName: "Legra_Box_Orion_M_600_Right"
}
,{
 _id: 11364,
 in_GraphicItem: "GraphicLegra_Orion_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11365,
 in_GraphicItem: "GraphicLegra_Orion_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11366,
 in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_600_Left"
}
,{
 _id: 11367,
 in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_600_Right"
}
,{
 _id: 11368,
 in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11369,
 in_GraphicItem: "GraphicLegra_Orion_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11370,
 in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_650_Left"
}
,{
 _id: 11371,
 in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
 Model3DGroupName: "Legra_Box_Orion_C_650_Right"
}
,{
 _id: 11372,
 in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11373,
 in_GraphicItem: "GraphicLegra_Orion_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11374,
 in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_650_Left"
}
,{
 _id: 11375,
 in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
 Model3DGroupName: "Legra_Box_Orion_F_650_Right"
}
,{
 _id: 11376,
 in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11377,
 in_GraphicItem: "GraphicLegra_Orion_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11378,
 in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_650_Left"
}
,{
 _id: 11379,
 in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
 Model3DGroupName: "Legra_Box_Orion_M_650_Right"
}
,{
 _id: 11380,
 in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11381,
 in_GraphicItem: "GraphicLegra_Orion_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11382,
 in_GraphicItem: "GraphicLegra_Terra_270_C",
 Model3DGroupName: "Legra_Box_Terra_C_270_Left"
}
,{
 _id: 11383,
 in_GraphicItem: "GraphicLegra_Terra_270_C",
 Model3DGroupName: "Legra_Box_Terra_C_270_Right"
}
,{
 _id: 11384,
 in_GraphicItem: "GraphicLegra_Terra_270_C",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 11385,
 in_GraphicItem: "GraphicLegra_Terra_270_C",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 11386,
 in_GraphicItem: "GraphicLegra_Terra_270_M",
 Model3DGroupName: "Legra_Box_Terra_M_270_Left"
}
,{
 _id: 11387,
 in_GraphicItem: "GraphicLegra_Terra_270_M",
 Model3DGroupName: "Legra_Box_Terra_M_270_Right"
}
,{
 _id: 11388,
 in_GraphicItem: "GraphicLegra_Terra_270_M",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 11389,
 in_GraphicItem: "GraphicLegra_Terra_270_M",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 11390,
 in_GraphicItem: "GraphicLegra_Terra_300_C",
 Model3DGroupName: "Legra_Box_Terra_C_300_Left"
}
,{
 _id: 11391,
 in_GraphicItem: "GraphicLegra_Terra_300_C",
 Model3DGroupName: "Legra_Box_Terra_C_300_Right"
}
,{
 _id: 11392,
 in_GraphicItem: "GraphicLegra_Terra_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11393,
 in_GraphicItem: "GraphicLegra_Terra_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11394,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Box_Terra_K_300_Left"
}
,{
 _id: 11395,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Box_Terra_K_300_Right"
}
,{
 _id: 11396,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11397,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11398,
 in_GraphicItem: "GraphicLegra_Terra_300_M",
 Model3DGroupName: "Legra_Box_Terra_M_300_Left"
}
,{
 _id: 11399,
 in_GraphicItem: "GraphicLegra_Terra_300_M",
 Model3DGroupName: "Legra_Box_Terra_M_300_Right"
}
,{
 _id: 11400,
 in_GraphicItem: "GraphicLegra_Terra_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11401,
 in_GraphicItem: "GraphicLegra_Terra_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11402,
 in_GraphicItem: "GraphicLegra_Terra_350_C",
 Model3DGroupName: "Legra_Box_Terra_C_350_Left"
}
,{
 _id: 11403,
 in_GraphicItem: "GraphicLegra_Terra_350_C",
 Model3DGroupName: "Legra_Box_Terra_C_350_Right"
}
,{
 _id: 11404,
 in_GraphicItem: "GraphicLegra_Terra_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11405,
 in_GraphicItem: "GraphicLegra_Terra_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11406,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Box_Terra_K_350_Left"
}
,{
 _id: 11407,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Box_Terra_K_350_Right"
}
,{
 _id: 11408,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11409,
 in_GraphicItem: "GraphicLegra_Terra_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11410,
 in_GraphicItem: "GraphicLegra_Terra_350_M",
 Model3DGroupName: "Legra_Box_Terra_M_350_Left"
}
,{
 _id: 11411,
 in_GraphicItem: "GraphicLegra_Terra_350_M",
 Model3DGroupName: "Legra_Box_Terra_M_350_Right"
}
,{
 _id: 11412,
 in_GraphicItem: "GraphicLegra_Terra_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11413,
 in_GraphicItem: "GraphicLegra_Terra_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11414,
 in_GraphicItem: "GraphicLegra_Terra_400_C",
 Model3DGroupName: "Legra_Box_Terra_C_400_Left"
}
,{
 _id: 11415,
 in_GraphicItem: "GraphicLegra_Terra_400_C",
 Model3DGroupName: "Legra_Box_Terra_C_400_Right"
}
,{
 _id: 11416,
 in_GraphicItem: "GraphicLegra_Terra_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11417,
 in_GraphicItem: "GraphicLegra_Terra_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11418,
 in_GraphicItem: "GraphicLegra_Terra_400_F",
 Model3DGroupName: "Legra_Box_Terra_F_400_Left"
}
,{
 _id: 11419,
 in_GraphicItem: "GraphicLegra_Terra_400_F",
 Model3DGroupName: "Legra_Box_Terra_F_400_Right"
}
,{
 _id: 11420,
 in_GraphicItem: "GraphicLegra_Terra_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11421,
 in_GraphicItem: "GraphicLegra_Terra_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11422,
 in_GraphicItem: "GraphicLegra_Terra_400_K",
 Model3DGroupName: "Legra_Box_Terra_K_400_Left"
}
,{
 _id: 11423,
 in_GraphicItem: "GraphicLegra_Terra_400_K",
 Model3DGroupName: "Legra_Box_Terra_K_400_Right"
}
,{
 _id: 11424,
 in_GraphicItem: "GraphicLegra_Terra_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11425,
 in_GraphicItem: "GraphicLegra_Terra_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11426,
 in_GraphicItem: "GraphicLegra_Terra_400_M",
 Model3DGroupName: "Legra_Box_Terra_M_400_Left"
}
,{
 _id: 11427,
 in_GraphicItem: "GraphicLegra_Terra_400_M",
 Model3DGroupName: "Legra_Box_Terra_M_400_Right"
}
,{
 _id: 11428,
 in_GraphicItem: "GraphicLegra_Terra_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11429,
 in_GraphicItem: "GraphicLegra_Terra_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11430,
 in_GraphicItem: "GraphicLegra_Terra_400_N",
 Model3DGroupName: "Legra_Box_Terra_N_400_Left"
}
,{
 _id: 11431,
 in_GraphicItem: "GraphicLegra_Terra_400_N",
 Model3DGroupName: "Legra_Box_Terra_N_400_Right"
}
,{
 _id: 11432,
 in_GraphicItem: "GraphicLegra_Terra_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11433,
 in_GraphicItem: "GraphicLegra_Terra_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11434,
 in_GraphicItem: "GraphicLegra_Terra_450_C",
 Model3DGroupName: "Legra_Box_Terra_C_450_Left"
}
,{
 _id: 11435,
 in_GraphicItem: "GraphicLegra_Terra_450_C",
 Model3DGroupName: "Legra_Box_Terra_C_450_Right"
}
,{
 _id: 11436,
 in_GraphicItem: "GraphicLegra_Terra_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11437,
 in_GraphicItem: "GraphicLegra_Terra_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11438,
 in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_450_Left"
}
,{
 _id: 11439,
 in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_450_Right"
}
,{
 _id: 11440,
 in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11441,
 in_GraphicItem: "GraphicLegra_Terra_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11442,
 in_GraphicItem: "GraphicLegra_Terra_450_F",
 Model3DGroupName: "Legra_Box_Terra_F_450_Left"
}
,{
 _id: 11443,
 in_GraphicItem: "GraphicLegra_Terra_450_F",
 Model3DGroupName: "Legra_Box_Terra_F_450_Right"
}
,{
 _id: 11444,
 in_GraphicItem: "GraphicLegra_Terra_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11445,
 in_GraphicItem: "GraphicLegra_Terra_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11446,
 in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_450_Left"
}
,{
 _id: 11447,
 in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_450_Right"
}
,{
 _id: 11448,
 in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11449,
 in_GraphicItem: "GraphicLegra_Terra_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11450,
 in_GraphicItem: "GraphicLegra_Terra_450_K",
 Model3DGroupName: "Legra_Box_Terra_K_450_Left"
}
,{
 _id: 11451,
 in_GraphicItem: "GraphicLegra_Terra_450_K",
 Model3DGroupName: "Legra_Box_Terra_K_450_Right"
}
,{
 _id: 11452,
 in_GraphicItem: "GraphicLegra_Terra_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11453,
 in_GraphicItem: "GraphicLegra_Terra_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11454,
 in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_450_Left"
}
,{
 _id: 11455,
 in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_450_Right"
}
,{
 _id: 11456,
 in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11457,
 in_GraphicItem: "GraphicLegra_Terra_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11458,
 in_GraphicItem: "GraphicLegra_Terra_450_M",
 Model3DGroupName: "Legra_Box_Terra_M_450_Left"
}
,{
 _id: 11459,
 in_GraphicItem: "GraphicLegra_Terra_450_M",
 Model3DGroupName: "Legra_Box_Terra_M_450_Right"
}
,{
 _id: 11460,
 in_GraphicItem: "GraphicLegra_Terra_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11461,
 in_GraphicItem: "GraphicLegra_Terra_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11462,
 in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_450_Left"
}
,{
 _id: 11463,
 in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_450_Right"
}
,{
 _id: 11464,
 in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11465,
 in_GraphicItem: "GraphicLegra_Terra_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11466,
 in_GraphicItem: "GraphicLegra_Terra_450_N",
 Model3DGroupName: "Legra_Box_Terra_N_450_Left"
}
,{
 _id: 11467,
 in_GraphicItem: "GraphicLegra_Terra_450_N",
 Model3DGroupName: "Legra_Box_Terra_N_450_Right"
}
,{
 _id: 11468,
 in_GraphicItem: "GraphicLegra_Terra_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11469,
 in_GraphicItem: "GraphicLegra_Terra_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11470,
 in_GraphicItem: "GraphicLegra_Terra_500_C",
 Model3DGroupName: "Legra_Box_Terra_C_500_Left"
}
,{
 _id: 11471,
 in_GraphicItem: "GraphicLegra_Terra_500_C",
 Model3DGroupName: "Legra_Box_Terra_C_500_Right"
}
,{
 _id: 11472,
 in_GraphicItem: "GraphicLegra_Terra_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11473,
 in_GraphicItem: "GraphicLegra_Terra_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11474,
 in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_500_Left"
}
,{
 _id: 11475,
 in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_500_Right"
}
,{
 _id: 11476,
 in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11477,
 in_GraphicItem: "GraphicLegra_Terra_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11478,
 in_GraphicItem: "GraphicLegra_Terra_500_F",
 Model3DGroupName: "Legra_Box_Terra_F_500_Left"
}
,{
 _id: 11479,
 in_GraphicItem: "GraphicLegra_Terra_500_F",
 Model3DGroupName: "Legra_Box_Terra_F_500_Right"
}
,{
 _id: 11480,
 in_GraphicItem: "GraphicLegra_Terra_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11481,
 in_GraphicItem: "GraphicLegra_Terra_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11482,
 in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_500_Left"
}
,{
 _id: 11483,
 in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_500_Right"
}
,{
 _id: 11484,
 in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11485,
 in_GraphicItem: "GraphicLegra_Terra_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11486,
 in_GraphicItem: "GraphicLegra_Terra_500_K",
 Model3DGroupName: "Legra_Box_Terra_K_500_Left"
}
,{
 _id: 11487,
 in_GraphicItem: "GraphicLegra_Terra_500_K",
 Model3DGroupName: "Legra_Box_Terra_K_500_Right"
}
,{
 _id: 11488,
 in_GraphicItem: "GraphicLegra_Terra_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11489,
 in_GraphicItem: "GraphicLegra_Terra_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11490,
 in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_500_Left"
}
,{
 _id: 11491,
 in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_500_Right"
}
,{
 _id: 11492,
 in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11493,
 in_GraphicItem: "GraphicLegra_Terra_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11494,
 in_GraphicItem: "GraphicLegra_Terra_500_M",
 Model3DGroupName: "Legra_Box_Terra_M_500_Left"
}
,{
 _id: 11495,
 in_GraphicItem: "GraphicLegra_Terra_500_M",
 Model3DGroupName: "Legra_Box_Terra_M_500_Right"
}
,{
 _id: 11496,
 in_GraphicItem: "GraphicLegra_Terra_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11497,
 in_GraphicItem: "GraphicLegra_Terra_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11498,
 in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_500_Left"
}
,{
 _id: 11499,
 in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_500_Right"
}
,{
 _id: 11500,
 in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11501,
 in_GraphicItem: "GraphicLegra_Terra_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11502,
 in_GraphicItem: "GraphicLegra_Terra_500_N",
 Model3DGroupName: "Legra_Box_Terra_N_500_Left"
}
,{
 _id: 11503,
 in_GraphicItem: "GraphicLegra_Terra_500_N",
 Model3DGroupName: "Legra_Box_Terra_N_500_Right"
}
,{
 _id: 11504,
 in_GraphicItem: "GraphicLegra_Terra_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11505,
 in_GraphicItem: "GraphicLegra_Terra_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11506,
 in_GraphicItem: "GraphicLegra_Terra_550_C",
 Model3DGroupName: "Legra_Box_Terra_C_550_Left"
}
,{
 _id: 11507,
 in_GraphicItem: "GraphicLegra_Terra_550_C",
 Model3DGroupName: "Legra_Box_Terra_C_550_Right"
}
,{
 _id: 11508,
 in_GraphicItem: "GraphicLegra_Terra_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11509,
 in_GraphicItem: "GraphicLegra_Terra_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11510,
 in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_550_Left"
}
,{
 _id: 11511,
 in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_550_Right"
}
,{
 _id: 11512,
 in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11513,
 in_GraphicItem: "GraphicLegra_Terra_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11514,
 in_GraphicItem: "GraphicLegra_Terra_550_F",
 Model3DGroupName: "Legra_Box_Terra_F_550_Left"
}
,{
 _id: 11515,
 in_GraphicItem: "GraphicLegra_Terra_550_F",
 Model3DGroupName: "Legra_Box_Terra_F_550_Right"
}
,{
 _id: 11516,
 in_GraphicItem: "GraphicLegra_Terra_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11517,
 in_GraphicItem: "GraphicLegra_Terra_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11518,
 in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_550_Left"
}
,{
 _id: 11519,
 in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_550_Right"
}
,{
 _id: 11520,
 in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11521,
 in_GraphicItem: "GraphicLegra_Terra_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11522,
 in_GraphicItem: "GraphicLegra_Terra_550_K",
 Model3DGroupName: "Legra_Box_Terra_K_550_Left"
}
,{
 _id: 11523,
 in_GraphicItem: "GraphicLegra_Terra_550_K",
 Model3DGroupName: "Legra_Box_Terra_K_550_Right"
}
,{
 _id: 11524,
 in_GraphicItem: "GraphicLegra_Terra_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11525,
 in_GraphicItem: "GraphicLegra_Terra_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11526,
 in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_550_Left"
}
,{
 _id: 11527,
 in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_550_Right"
}
,{
 _id: 11528,
 in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11529,
 in_GraphicItem: "GraphicLegra_Terra_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11530,
 in_GraphicItem: "GraphicLegra_Terra_550_M",
 Model3DGroupName: "Legra_Box_Terra_M_550_Left"
}
,{
 _id: 11531,
 in_GraphicItem: "GraphicLegra_Terra_550_M",
 Model3DGroupName: "Legra_Box_Terra_M_550_Right"
}
,{
 _id: 11532,
 in_GraphicItem: "GraphicLegra_Terra_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11533,
 in_GraphicItem: "GraphicLegra_Terra_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11534,
 in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_550_Left"
}
,{
 _id: 11535,
 in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_550_Right"
}
,{
 _id: 11536,
 in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11537,
 in_GraphicItem: "GraphicLegra_Terra_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11538,
 in_GraphicItem: "GraphicLegra_Terra_550_N",
 Model3DGroupName: "Legra_Box_Terra_N_550_Left"
}
,{
 _id: 11539,
 in_GraphicItem: "GraphicLegra_Terra_550_N",
 Model3DGroupName: "Legra_Box_Terra_N_550_Right"
}
,{
 _id: 11540,
 in_GraphicItem: "GraphicLegra_Terra_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11541,
 in_GraphicItem: "GraphicLegra_Terra_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11542,
 in_GraphicItem: "GraphicLegra_Terra_600_C",
 Model3DGroupName: "Legra_Box_Terra_C_600_Left"
}
,{
 _id: 11543,
 in_GraphicItem: "GraphicLegra_Terra_600_C",
 Model3DGroupName: "Legra_Box_Terra_C_600_Right"
}
,{
 _id: 11544,
 in_GraphicItem: "GraphicLegra_Terra_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11545,
 in_GraphicItem: "GraphicLegra_Terra_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11546,
 in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_600_Left"
}
,{
 _id: 11547,
 in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_600_Right"
}
,{
 _id: 11548,
 in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11549,
 in_GraphicItem: "GraphicLegra_Terra_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11550,
 in_GraphicItem: "GraphicLegra_Terra_600_F",
 Model3DGroupName: "Legra_Box_Terra_F_600_Left"
}
,{
 _id: 11551,
 in_GraphicItem: "GraphicLegra_Terra_600_F",
 Model3DGroupName: "Legra_Box_Terra_F_600_Right"
}
,{
 _id: 11552,
 in_GraphicItem: "GraphicLegra_Terra_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11553,
 in_GraphicItem: "GraphicLegra_Terra_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11554,
 in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_600_Left"
}
,{
 _id: 11555,
 in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_600_Right"
}
,{
 _id: 11556,
 in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11557,
 in_GraphicItem: "GraphicLegra_Terra_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11558,
 in_GraphicItem: "GraphicLegra_Terra_600_K",
 Model3DGroupName: "Legra_Box_Terra_K_600_Left"
}
,{
 _id: 11559,
 in_GraphicItem: "GraphicLegra_Terra_600_K",
 Model3DGroupName: "Legra_Box_Terra_K_600_Right"
}
,{
 _id: 11560,
 in_GraphicItem: "GraphicLegra_Terra_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11561,
 in_GraphicItem: "GraphicLegra_Terra_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11562,
 in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_600_Left"
}
,{
 _id: 11563,
 in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
 Model3DGroupName: "Legra_Box_Terra_K_600_Right"
}
,{
 _id: 11564,
 in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11565,
 in_GraphicItem: "GraphicLegra_Terra_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11566,
 in_GraphicItem: "GraphicLegra_Terra_600_M",
 Model3DGroupName: "Legra_Box_Terra_M_600_Left"
}
,{
 _id: 11567,
 in_GraphicItem: "GraphicLegra_Terra_600_M",
 Model3DGroupName: "Legra_Box_Terra_M_600_Right"
}
,{
 _id: 11568,
 in_GraphicItem: "GraphicLegra_Terra_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11569,
 in_GraphicItem: "GraphicLegra_Terra_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11570,
 in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_600_Left"
}
,{
 _id: 11571,
 in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_600_Right"
}
,{
 _id: 11572,
 in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11573,
 in_GraphicItem: "GraphicLegra_Terra_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11574,
 in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_650_Left"
}
,{
 _id: 11575,
 in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
 Model3DGroupName: "Legra_Box_Terra_C_650_Right"
}
,{
 _id: 11576,
 in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11577,
 in_GraphicItem: "GraphicLegra_Terra_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11578,
 in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_650_Left"
}
,{
 _id: 11579,
 in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
 Model3DGroupName: "Legra_Box_Terra_F_650_Right"
}
,{
 _id: 11580,
 in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11581,
 in_GraphicItem: "GraphicLegra_Terra_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11582,
 in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_650_Left"
}
,{
 _id: 11583,
 in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
 Model3DGroupName: "Legra_Box_Terra_M_650_Right"
}
,{
 _id: 11584,
 in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11585,
 in_GraphicItem: "GraphicLegra_Terra_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11586,
 in_GraphicItem: "GraphicLegra_White_270_C",
 Model3DGroupName: "Legra_Box_White_C_270_Left"
}
,{
 _id: 11587,
 in_GraphicItem: "GraphicLegra_White_270_C",
 Model3DGroupName: "Legra_Box_White_C_270_Right"
}
,{
 _id: 11588,
 in_GraphicItem: "GraphicLegra_White_270_C",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 11589,
 in_GraphicItem: "GraphicLegra_White_270_C",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 11590,
 in_GraphicItem: "GraphicLegra_White_270_M",
 Model3DGroupName: "Legra_Box_White_M_270_Left"
}
,{
 _id: 11591,
 in_GraphicItem: "GraphicLegra_White_270_M",
 Model3DGroupName: "Legra_Box_White_M_270_Right"
}
,{
 _id: 11592,
 in_GraphicItem: "GraphicLegra_White_270_M",
 Model3DGroupName: "Legra_Slide_270_Left"
}
,{
 _id: 11593,
 in_GraphicItem: "GraphicLegra_White_270_M",
 Model3DGroupName: "Legra_Slide_270_Right"
}
,{
 _id: 11594,
 in_GraphicItem: "GraphicLegra_White_300_C",
 Model3DGroupName: "Legra_Box_White_C_300_Left"
}
,{
 _id: 11595,
 in_GraphicItem: "GraphicLegra_White_300_C",
 Model3DGroupName: "Legra_Box_White_C_300_Right"
}
,{
 _id: 11596,
 in_GraphicItem: "GraphicLegra_White_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11597,
 in_GraphicItem: "GraphicLegra_White_300_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11598,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Box_White_K_300_Left"
}
,{
 _id: 11599,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Box_White_K_300_Right"
}
,{
 _id: 11600,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11601,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11602,
 in_GraphicItem: "GraphicLegra_White_300_M",
 Model3DGroupName: "Legra_Box_White_M_300_Left"
}
,{
 _id: 11603,
 in_GraphicItem: "GraphicLegra_White_300_M",
 Model3DGroupName: "Legra_Box_White_M_300_Right"
}
,{
 _id: 11604,
 in_GraphicItem: "GraphicLegra_White_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11605,
 in_GraphicItem: "GraphicLegra_White_300_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11606,
 in_GraphicItem: "GraphicLegra_White_350_C",
 Model3DGroupName: "Legra_Box_White_C_350_Left"
}
,{
 _id: 11607,
 in_GraphicItem: "GraphicLegra_White_350_C",
 Model3DGroupName: "Legra_Box_White_C_350_Right"
}
,{
 _id: 11608,
 in_GraphicItem: "GraphicLegra_White_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11609,
 in_GraphicItem: "GraphicLegra_White_350_C",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11610,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Box_White_K_350_Left"
}
,{
 _id: 11611,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Box_White_K_350_Right"
}
,{
 _id: 11612,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11613,
 in_GraphicItem: "GraphicLegra_White_350_K",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11614,
 in_GraphicItem: "GraphicLegra_White_350_M",
 Model3DGroupName: "Legra_Box_White_M_350_Left"
}
,{
 _id: 11615,
 in_GraphicItem: "GraphicLegra_White_350_M",
 Model3DGroupName: "Legra_Box_White_M_350_Right"
}
,{
 _id: 11616,
 in_GraphicItem: "GraphicLegra_White_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Left"
}
,{
 _id: 11617,
 in_GraphicItem: "GraphicLegra_White_350_M",
 Model3DGroupName: "Legra_Slide_300_350_Right"
}
,{
 _id: 11618,
 in_GraphicItem: "GraphicLegra_White_400_C",
 Model3DGroupName: "Legra_Box_White_C_400_Left"
}
,{
 _id: 11619,
 in_GraphicItem: "GraphicLegra_White_400_C",
 Model3DGroupName: "Legra_Box_White_C_400_Right"
}
,{
 _id: 11620,
 in_GraphicItem: "GraphicLegra_White_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11621,
 in_GraphicItem: "GraphicLegra_White_400_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11622,
 in_GraphicItem: "GraphicLegra_White_400_F",
 Model3DGroupName: "Legra_Box_White_F_400_Left"
}
,{
 _id: 11623,
 in_GraphicItem: "GraphicLegra_White_400_F",
 Model3DGroupName: "Legra_Box_White_F_400_Right"
}
,{
 _id: 11624,
 in_GraphicItem: "GraphicLegra_White_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11625,
 in_GraphicItem: "GraphicLegra_White_400_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11626,
 in_GraphicItem: "GraphicLegra_White_400_K",
 Model3DGroupName: "Legra_Box_White_K_400_Left"
}
,{
 _id: 11627,
 in_GraphicItem: "GraphicLegra_White_400_K",
 Model3DGroupName: "Legra_Box_White_K_400_Right"
}
,{
 _id: 11628,
 in_GraphicItem: "GraphicLegra_White_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11629,
 in_GraphicItem: "GraphicLegra_White_400_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11630,
 in_GraphicItem: "GraphicLegra_White_400_M",
 Model3DGroupName: "Legra_Box_White_M_400_Left"
}
,{
 _id: 11631,
 in_GraphicItem: "GraphicLegra_White_400_M",
 Model3DGroupName: "Legra_Box_White_M_400_Right"
}
,{
 _id: 11632,
 in_GraphicItem: "GraphicLegra_White_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11633,
 in_GraphicItem: "GraphicLegra_White_400_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11634,
 in_GraphicItem: "GraphicLegra_White_400_N",
 Model3DGroupName: "Legra_Box_White_N_400_Left"
}
,{
 _id: 11635,
 in_GraphicItem: "GraphicLegra_White_400_N",
 Model3DGroupName: "Legra_Box_White_N_400_Right"
}
,{
 _id: 11636,
 in_GraphicItem: "GraphicLegra_White_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11637,
 in_GraphicItem: "GraphicLegra_White_400_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11638,
 in_GraphicItem: "GraphicLegra_White_450_C",
 Model3DGroupName: "Legra_Box_White_C_450_Left"
}
,{
 _id: 11639,
 in_GraphicItem: "GraphicLegra_White_450_C",
 Model3DGroupName: "Legra_Box_White_C_450_Right"
}
,{
 _id: 11640,
 in_GraphicItem: "GraphicLegra_White_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11641,
 in_GraphicItem: "GraphicLegra_White_450_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11642,
 in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_450_Left"
}
,{
 _id: 11643,
 in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_450_Right"
}
,{
 _id: 11644,
 in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11645,
 in_GraphicItem: "GraphicLegra_White_450_C_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11646,
 in_GraphicItem: "GraphicLegra_White_450_F",
 Model3DGroupName: "Legra_Box_White_F_450_Left"
}
,{
 _id: 11647,
 in_GraphicItem: "GraphicLegra_White_450_F",
 Model3DGroupName: "Legra_Box_White_F_450_Right"
}
,{
 _id: 11648,
 in_GraphicItem: "GraphicLegra_White_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11649,
 in_GraphicItem: "GraphicLegra_White_450_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11650,
 in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_450_Left"
}
,{
 _id: 11651,
 in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_450_Right"
}
,{
 _id: 11652,
 in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11653,
 in_GraphicItem: "GraphicLegra_White_450_F_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11654,
 in_GraphicItem: "GraphicLegra_White_450_K",
 Model3DGroupName: "Legra_Box_White_K_450_Left"
}
,{
 _id: 11655,
 in_GraphicItem: "GraphicLegra_White_450_K",
 Model3DGroupName: "Legra_Box_White_K_450_Right"
}
,{
 _id: 11656,
 in_GraphicItem: "GraphicLegra_White_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11657,
 in_GraphicItem: "GraphicLegra_White_450_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11658,
 in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_450_Left"
}
,{
 _id: 11659,
 in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_450_Right"
}
,{
 _id: 11660,
 in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11661,
 in_GraphicItem: "GraphicLegra_White_450_K_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11662,
 in_GraphicItem: "GraphicLegra_White_450_M",
 Model3DGroupName: "Legra_Box_White_M_450_Left"
}
,{
 _id: 11663,
 in_GraphicItem: "GraphicLegra_White_450_M",
 Model3DGroupName: "Legra_Box_White_M_450_Right"
}
,{
 _id: 11664,
 in_GraphicItem: "GraphicLegra_White_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11665,
 in_GraphicItem: "GraphicLegra_White_450_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11666,
 in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_450_Left"
}
,{
 _id: 11667,
 in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_450_Right"
}
,{
 _id: 11668,
 in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Left"
}
,{
 _id: 11669,
 in_GraphicItem: "GraphicLegra_White_450_M_Heavy",
 Model3DGroupName: "Legra_Slide_450_H_Right"
}
,{
 _id: 11670,
 in_GraphicItem: "GraphicLegra_White_450_N",
 Model3DGroupName: "Legra_Box_White_N_450_Left"
}
,{
 _id: 11671,
 in_GraphicItem: "GraphicLegra_White_450_N",
 Model3DGroupName: "Legra_Box_White_N_450_Right"
}
,{
 _id: 11672,
 in_GraphicItem: "GraphicLegra_White_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11673,
 in_GraphicItem: "GraphicLegra_White_450_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11674,
 in_GraphicItem: "GraphicLegra_White_500_C",
 Model3DGroupName: "Legra_Box_White_C_500_Left"
}
,{
 _id: 11675,
 in_GraphicItem: "GraphicLegra_White_500_C",
 Model3DGroupName: "Legra_Box_White_C_500_Right"
}
,{
 _id: 11676,
 in_GraphicItem: "GraphicLegra_White_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11677,
 in_GraphicItem: "GraphicLegra_White_500_C",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11678,
 in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_500_Left"
}
,{
 _id: 11679,
 in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_500_Right"
}
,{
 _id: 11680,
 in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11681,
 in_GraphicItem: "GraphicLegra_White_500_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11682,
 in_GraphicItem: "GraphicLegra_White_500_F",
 Model3DGroupName: "Legra_Box_White_F_500_Left"
}
,{
 _id: 11683,
 in_GraphicItem: "GraphicLegra_White_500_F",
 Model3DGroupName: "Legra_Box_White_F_500_Right"
}
,{
 _id: 11684,
 in_GraphicItem: "GraphicLegra_White_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11685,
 in_GraphicItem: "GraphicLegra_White_500_F",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11686,
 in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_500_Left"
}
,{
 _id: 11687,
 in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_500_Right"
}
,{
 _id: 11688,
 in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11689,
 in_GraphicItem: "GraphicLegra_White_500_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11690,
 in_GraphicItem: "GraphicLegra_White_500_K",
 Model3DGroupName: "Legra_Box_White_K_500_Left"
}
,{
 _id: 11691,
 in_GraphicItem: "GraphicLegra_White_500_K",
 Model3DGroupName: "Legra_Box_White_K_500_Right"
}
,{
 _id: 11692,
 in_GraphicItem: "GraphicLegra_White_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11693,
 in_GraphicItem: "GraphicLegra_White_500_K",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11694,
 in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_500_Left"
}
,{
 _id: 11695,
 in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_500_Right"
}
,{
 _id: 11696,
 in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11697,
 in_GraphicItem: "GraphicLegra_White_500_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11698,
 in_GraphicItem: "GraphicLegra_White_500_M",
 Model3DGroupName: "Legra_Box_White_M_500_Left"
}
,{
 _id: 11699,
 in_GraphicItem: "GraphicLegra_White_500_M",
 Model3DGroupName: "Legra_Box_White_M_500_Right"
}
,{
 _id: 11700,
 in_GraphicItem: "GraphicLegra_White_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11701,
 in_GraphicItem: "GraphicLegra_White_500_M",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11702,
 in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_500_Left"
}
,{
 _id: 11703,
 in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_500_Right"
}
,{
 _id: 11704,
 in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11705,
 in_GraphicItem: "GraphicLegra_White_500_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11706,
 in_GraphicItem: "GraphicLegra_White_500_N",
 Model3DGroupName: "Legra_Box_White_N_500_Left"
}
,{
 _id: 11707,
 in_GraphicItem: "GraphicLegra_White_500_N",
 Model3DGroupName: "Legra_Box_White_N_500_Right"
}
,{
 _id: 11708,
 in_GraphicItem: "GraphicLegra_White_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Left"
}
,{
 _id: 11709,
 in_GraphicItem: "GraphicLegra_White_500_N",
 Model3DGroupName: "Legra_Slide_400_450_500_Right"
}
,{
 _id: 11710,
 in_GraphicItem: "GraphicLegra_White_550_C",
 Model3DGroupName: "Legra_Box_White_C_550_Left"
}
,{
 _id: 11711,
 in_GraphicItem: "GraphicLegra_White_550_C",
 Model3DGroupName: "Legra_Box_White_C_550_Right"
}
,{
 _id: 11712,
 in_GraphicItem: "GraphicLegra_White_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11713,
 in_GraphicItem: "GraphicLegra_White_550_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11714,
 in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_550_Left"
}
,{
 _id: 11715,
 in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_550_Right"
}
,{
 _id: 11716,
 in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11717,
 in_GraphicItem: "GraphicLegra_White_550_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11718,
 in_GraphicItem: "GraphicLegra_White_550_F",
 Model3DGroupName: "Legra_Box_White_F_550_Left"
}
,{
 _id: 11719,
 in_GraphicItem: "GraphicLegra_White_550_F",
 Model3DGroupName: "Legra_Box_White_F_550_Right"
}
,{
 _id: 11720,
 in_GraphicItem: "GraphicLegra_White_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11721,
 in_GraphicItem: "GraphicLegra_White_550_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11722,
 in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_550_Left"
}
,{
 _id: 11723,
 in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_550_Right"
}
,{
 _id: 11724,
 in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11725,
 in_GraphicItem: "GraphicLegra_White_550_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11726,
 in_GraphicItem: "GraphicLegra_White_550_K",
 Model3DGroupName: "Legra_Box_White_K_550_Left"
}
,{
 _id: 11727,
 in_GraphicItem: "GraphicLegra_White_550_K",
 Model3DGroupName: "Legra_Box_White_K_550_Right"
}
,{
 _id: 11728,
 in_GraphicItem: "GraphicLegra_White_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11729,
 in_GraphicItem: "GraphicLegra_White_550_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11730,
 in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_550_Left"
}
,{
 _id: 11731,
 in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_550_Right"
}
,{
 _id: 11732,
 in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11733,
 in_GraphicItem: "GraphicLegra_White_550_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11734,
 in_GraphicItem: "GraphicLegra_White_550_M",
 Model3DGroupName: "Legra_Box_White_M_550_Left"
}
,{
 _id: 11735,
 in_GraphicItem: "GraphicLegra_White_550_M",
 Model3DGroupName: "Legra_Box_White_M_550_Right"
}
,{
 _id: 11736,
 in_GraphicItem: "GraphicLegra_White_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11737,
 in_GraphicItem: "GraphicLegra_White_550_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11738,
 in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_550_Left"
}
,{
 _id: 11739,
 in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_550_Right"
}
,{
 _id: 11740,
 in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11741,
 in_GraphicItem: "GraphicLegra_White_550_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11742,
 in_GraphicItem: "GraphicLegra_White_550_N",
 Model3DGroupName: "Legra_Box_White_N_550_Left"
}
,{
 _id: 11743,
 in_GraphicItem: "GraphicLegra_White_550_N",
 Model3DGroupName: "Legra_Box_White_N_550_Right"
}
,{
 _id: 11744,
 in_GraphicItem: "GraphicLegra_White_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11745,
 in_GraphicItem: "GraphicLegra_White_550_N",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11746,
 in_GraphicItem: "GraphicLegra_White_600_C",
 Model3DGroupName: "Legra_Box_White_C_600_Left"
}
,{
 _id: 11747,
 in_GraphicItem: "GraphicLegra_White_600_C",
 Model3DGroupName: "Legra_Box_White_C_600_Right"
}
,{
 _id: 11748,
 in_GraphicItem: "GraphicLegra_White_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11749,
 in_GraphicItem: "GraphicLegra_White_600_C",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11750,
 in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_600_Left"
}
,{
 _id: 11751,
 in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_600_Right"
}
,{
 _id: 11752,
 in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11753,
 in_GraphicItem: "GraphicLegra_White_600_C_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11754,
 in_GraphicItem: "GraphicLegra_White_600_F",
 Model3DGroupName: "Legra_Box_White_F_600_Left"
}
,{
 _id: 11755,
 in_GraphicItem: "GraphicLegra_White_600_F",
 Model3DGroupName: "Legra_Box_White_F_600_Right"
}
,{
 _id: 11756,
 in_GraphicItem: "GraphicLegra_White_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11757,
 in_GraphicItem: "GraphicLegra_White_600_F",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11758,
 in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_600_Left"
}
,{
 _id: 11759,
 in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_600_Right"
}
,{
 _id: 11760,
 in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11761,
 in_GraphicItem: "GraphicLegra_White_600_F_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11762,
 in_GraphicItem: "GraphicLegra_White_600_K",
 Model3DGroupName: "Legra_Box_White_K_600_Left"
}
,{
 _id: 11763,
 in_GraphicItem: "GraphicLegra_White_600_K",
 Model3DGroupName: "Legra_Box_White_K_600_Right"
}
,{
 _id: 11764,
 in_GraphicItem: "GraphicLegra_White_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11765,
 in_GraphicItem: "GraphicLegra_White_600_K",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11766,
 in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_600_Left"
}
,{
 _id: 11767,
 in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
 Model3DGroupName: "Legra_Box_White_K_600_Right"
}
,{
 _id: 11768,
 in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11769,
 in_GraphicItem: "GraphicLegra_White_600_K_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11770,
 in_GraphicItem: "GraphicLegra_White_600_M",
 Model3DGroupName: "Legra_Box_White_M_600_Left"
}
,{
 _id: 11771,
 in_GraphicItem: "GraphicLegra_White_600_M",
 Model3DGroupName: "Legra_Box_White_M_600_Right"
}
,{
 _id: 11772,
 in_GraphicItem: "GraphicLegra_White_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Left"
}
,{
 _id: 11773,
 in_GraphicItem: "GraphicLegra_White_600_M",
 Model3DGroupName: "Legra_Slide_550_600_Right"
}
,{
 _id: 11774,
 in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_600_Left"
}
,{
 _id: 11775,
 in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_600_Right"
}
,{
 _id: 11776,
 in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Left"
}
,{
 _id: 11777,
 in_GraphicItem: "GraphicLegra_White_600_M_Heavy",
 Model3DGroupName: "Legra_Slide_500_550_600_H_Right"
}
,{
 _id: 11778,
 in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_650_Left"
}
,{
 _id: 11779,
 in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
 Model3DGroupName: "Legra_Box_White_C_650_Right"
}
,{
 _id: 11780,
 in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11781,
 in_GraphicItem: "GraphicLegra_White_650_C_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11782,
 in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_650_Left"
}
,{
 _id: 11783,
 in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
 Model3DGroupName: "Legra_Box_White_F_650_Right"
}
,{
 _id: 11784,
 in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11785,
 in_GraphicItem: "GraphicLegra_White_650_F_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11786,
 in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_650_Left"
}
,{
 _id: 11787,
 in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
 Model3DGroupName: "Legra_Box_White_M_650_Right"
}
,{
 _id: 11788,
 in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Left"
}
,{
 _id: 11789,
 in_GraphicItem: "GraphicLegra_White_650_M_Heavy",
 Model3DGroupName: "Legra_Slide_650_H_Right"
}
,{
 _id: 11790,
 in_GraphicItem: "Graphic_DH100_Black_160",
 Model3DGroupName: "Model3d_DH100_Black_160"
}
,{
 _id: 11791,
 in_GraphicItem: "Graphic_DH100_Black_320",
 Model3DGroupName: "Model3d_DH100_Black_320"
}
,{
 _id: 11792,
 in_GraphicItem: "Graphic_DH100_Black_64",
 Model3DGroupName: "Model3d_DH100_Black_64"
}
,{
 _id: 11793,
 in_GraphicItem: "Graphic_DH100_NickelPlated_160",
 Model3DGroupName: "Model3d_DH100_NickelPlated_160"
}
,{
 _id: 11794,
 in_GraphicItem: "Graphic_DH100_NickelPlated_320",
 Model3DGroupName: "Model3d_DH100_NickelPlated_320"
}
,{
 _id: 11795,
 in_GraphicItem: "Graphic_DH100_NickelPlated_64",
 Model3DGroupName: "Model3d_DH100_NickelPlated_64"
}
,{
 _id: 11796,
 in_GraphicItem: "Graphic_DH100_Tin_160",
 Model3DGroupName: "Model3d_DH100_Tin_160"
}
,{
 _id: 11797,
 in_GraphicItem: "Graphic_DH100_Tin_320",
 Model3DGroupName: "Model3d_DH100_Tin_320"
}
,{
 _id: 11798,
 in_GraphicItem: "Graphic_DH100_Tin_64",
 Model3DGroupName: "Model3d_DH100_Tin_64"
}
,{
 _id: 11799,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1060",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1060"
}
,{
 _id: 11800,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1160",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1160"
}
,{
 _id: 11801,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1260",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1260"
}
,{
 _id: 11802,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_128",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_128"
}
,{
 _id: 11803,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1360",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1360"
}
,{
 _id: 11804,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1460",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1460"
}
,{
 _id: 11805,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1560",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1560"
}
,{
 _id: 11806,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_160",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_160"
}
,{
 _id: 11807,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1760",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1760"
}
,{
 _id: 11808,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_1960",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_1960"
}
,{
 _id: 11809,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_210",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_210"
}
,{
 _id: 11810,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_260",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_260"
}
,{
 _id: 11811,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_310",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_310"
}
,{
 _id: 11812,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_360",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_360"
}
,{
 _id: 11813,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_410",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_410"
}
,{
 _id: 11814,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_460",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_460"
}
,{
 _id: 11815,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_560",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_560"
}
,{
 _id: 11816,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_660",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_660"
}
,{
 _id: 11817,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_760",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_760"
}
,{
 _id: 11818,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_860",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_860"
}
,{
 _id: 11819,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_96",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_96"
}
,{
 _id: 11820,
 in_GraphicItem: "Graphic_DH110_StainlessSteel_960",
 Model3DGroupName: "Model3d_DH110_StainlessSteel_960"
}
,{
 _id: 11821,
 in_GraphicItem: "Graphic_DH120_Black",
 Model3DGroupName: "Model3d_DH120_Black"
}
,{
 _id: 11822,
 in_GraphicItem: "Graphic_DH120_StainlessSteel",
 Model3DGroupName: "Model3d_DH120_StainlessSteel"
}
,{
 _id: 11823,
 in_GraphicItem: "Graphic_DH130_Black",
 Model3DGroupName: "Model3d_DH130_Black"
}
,{
 _id: 11824,
 in_GraphicItem: "Graphic_DH130_BrassPlatedAntique",
 Model3DGroupName: "Model3d_DH130_BrassPlatedAntique"
}
,{
 _id: 11825,
 in_GraphicItem: "Graphic_DH130_StainlessSteel",
 Model3DGroupName: "Model3d_DH130_StainlessSteel"
}
,{
 _id: 11826,
 in_GraphicItem: "Graphic_BH_128",
 Model3DGroupName: "Model3d_BH_128"
}
,{
 _id: 11827,
 in_GraphicItem: "Graphic_BH_160",
 Model3DGroupName: "Model3d_BH_160"
}
,{
 _id: 11828,
 in_GraphicItem: "Graphic_BH_192",
 Model3DGroupName: "Model3d_BH_192"
}
,{
 _id: 11829,
 in_GraphicItem: "Graphic_BH_224",
 Model3DGroupName: "Model3d_BH_224"
}
,{
 _id: 11830,
 in_GraphicItem: "Graphic_BH_288",
 Model3DGroupName: "Model3d_BH_288"
}
,{
 _id: 11831,
 in_GraphicItem: "Graphic_BH_320",
 Model3DGroupName: "Model3d_BH_320"
}
,{
 _id: 11832,
 in_GraphicItem: "Graphic_BH_352",
 Model3DGroupName: "Model3d_BH_352"
}
,{
 _id: 11833,
 in_GraphicItem: "Graphic_BH_448",
 Model3DGroupName: "Model3d_BH_448"
}
,{
 _id: 11834,
 in_GraphicItem: "Graphic_BH_480",
 Model3DGroupName: "Model3d_BH_480"
}
,{
 _id: 11835,
 in_GraphicItem: "Graphic_BH_560",
 Model3DGroupName: "Model3d_BH_560"
}
,{
 _id: 11836,
 in_GraphicItem: "Graphic_BH_640",
 Model3DGroupName: "Model3d_BH_640"
}
,{
 _id: 11837,
 in_GraphicItem: "Graphic_BH_96",
 Model3DGroupName: "Model3d_BH_96"
}
,{
 _id: 11838,
 in_GraphicItem: "Graphic_BH_960",
 Model3DGroupName: "Model3d_BH_960"
}
,{
 _id: 11839,
 in_GraphicItem: "Graphic_DH60_Black_128",
 Model3DGroupName: "Model3d_DH60_Black_128"
}
,{
 _id: 11840,
 in_GraphicItem: "Graphic_DH60_Black_160",
 Model3DGroupName: "Model3d_DH60_Black_160"
}
,{
 _id: 11841,
 in_GraphicItem: "Graphic_DH60_BrassPlatedAntique_128",
 Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_128"
}
,{
 _id: 11842,
 in_GraphicItem: "Graphic_DH60_BrassPlatedAntique_160",
 Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_160"
}
,{
 _id: 11843,
 in_GraphicItem: "Graphic_DH60_ChromedPolished_128",
 Model3DGroupName: "Model3d_DH60_ChromedPolished_128"
}
,{
 _id: 11844,
 in_GraphicItem: "Graphic_DH60_ChromedPolished_160",
 Model3DGroupName: "Model3d_DH60_ChromedPolished_160"
}
,{
 _id: 11845,
 in_GraphicItem: "Graphic_DH60_NickelPlated_128",
 Model3DGroupName: "Model3d_DH60_NickelPlated_128"
}
,{
 _id: 11846,
 in_GraphicItem: "Graphic_DH60_NickelPlated_160",
 Model3DGroupName: "Model3d_DH60_NickelPlated_160"
}
,{
 _id: 11847,
 in_GraphicItem: "Graphic_RH_128",
 Model3DGroupName: "Model3d_RH_128"
}
,{
 _id: 11848,
 in_GraphicItem: "Graphic_RH_160",
 Model3DGroupName: "Model3d_RH_160"
}
,{
 _id: 11849,
 in_GraphicItem: "Graphic_RH_192",
 Model3DGroupName: "Model3d_RH_192"
}
,{
 _id: 11850,
 in_GraphicItem: "Graphic_RH_224",
 Model3DGroupName: "Model3d_RH_224"
}
,{
 _id: 11851,
 in_GraphicItem: "Graphic_RH_288",
 Model3DGroupName: "Model3d_RH_288"
}
,{
 _id: 11852,
 in_GraphicItem: "Graphic_RH_320",
 Model3DGroupName: "Model3d_RH_320"
}
,{
 _id: 11853,
 in_GraphicItem: "Graphic_RH_352",
 Model3DGroupName: "Model3d_RH_352"
}
,{
 _id: 11854,
 in_GraphicItem: "Graphic_RH_448",
 Model3DGroupName: "Model3d_RH_448"
}
,{
 _id: 11855,
 in_GraphicItem: "Graphic_RH_560",
 Model3DGroupName: "Model3d_RH_560"
}
,{
 _id: 11856,
 in_GraphicItem: "Graphic_RH_660",
 Model3DGroupName: "Model3d_RH_660"
}
,{
 _id: 11857,
 in_GraphicItem: "Graphic_RH_760",
 Model3DGroupName: "Model3d_RH_760"
}
,{
 _id: 11858,
 in_GraphicItem: "Graphic_RH_96",
 Model3DGroupName: "Model3d_RH_96"
}
];
