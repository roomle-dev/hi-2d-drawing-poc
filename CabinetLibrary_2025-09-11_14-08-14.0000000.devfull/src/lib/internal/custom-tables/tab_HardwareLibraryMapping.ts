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

export interface cti_tab_HardwareLibraryMapping {
  readonly in_HardwareItem? : string;
}

export interface ctm_tab_HardwareLibraryMapping {
}

export interface cto_tab_HardwareLibraryMapping extends ctm_tab_HardwareLibraryMapping {
  readonly _id : number;
  readonly Supplier? : string;
  readonly SupplierArticleNumber? : string;
  readonly BomQty : number;
}

export interface ICT_tab_HardwareLibraryMapping
extends cti_tab_HardwareLibraryMapping, cto_tab_HardwareLibraryMapping {}

export class ct2_tab_HardwareLibraryMapping {

public findExactly(
     in_HardwareItem: string|undefined,
): cto_tab_HardwareLibraryMapping | undefined {
  const res = ct_tab_HardwareLibraryMapping.find((p) => 
p.in_HardwareItem === in_HardwareItem
);
return res;
}

public find(
predicate: (value: cti_tab_HardwareLibraryMapping) => boolean
): cto_tab_HardwareLibraryMapping | undefined {
  for (let index = 0; index < ct_tab_HardwareLibraryMapping.length; index++){
    const element = ct_tab_HardwareLibraryMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HardwareLibraryMapping :ICT_tab_HardwareLibraryMapping[] = [
{
 _id: 18515,
 in_HardwareItem: "HardDesignLegRectangular001H50",
 Supplier: "Haefele",
 SupplierArticleNumber: "634.74.400",
 BomQty: 1
}
,{
 _id: 18516,
 in_HardwareItem: "HardDesignLegRectangular001H80",
 Supplier: "Haefele",
 SupplierArticleNumber: "634.74.401",
 BomQty: 1
}
,{
 _id: 18517,
 in_HardwareItem: "HardDesignLegRectangular001H100",
 Supplier: "Haefele",
 SupplierArticleNumber: "634.74.402",
 BomQty: 1
}
,{
 _id: 18518,
 in_HardwareItem: "HardDesignLegRectangular001H150",
 Supplier: "Haefele",
 SupplierArticleNumber: "634.74.403",
 BomQty: 1
}
,{
 _id: 18519,
 in_HardwareItem: "HardDesignLegRectangular001H200",
 Supplier: "Haefele",
 SupplierArticleNumber: "634.74.404",
 BomQty: 1
}
,{
 _id: 18520,
 in_HardwareItem: "HardDesignLegSlanted001H250",
 Supplier: "Haefele",
 SupplierArticleNumber: "634.48.055",
 BomQty: 1
}
,{
 _id: 18521,
 in_HardwareItem: "HardwareShelfadjFittingWoodDesign01",
 Supplier: "Haefele",
 SupplierArticleNumber: "282.24.728",
 BomQty: 1
}
,{
 _id: 18522,
 in_HardwareItem: "HardwareShelfadjFittingWoodDesign02",
 Supplier: "Haefele",
 SupplierArticleNumber: "282.24.717",
 BomQty: 1
}
,{
 _id: 18523,
 in_HardwareItem: "HardwareShelfadjFittingWoodDesign03",
 Supplier: "Haefele",
 SupplierArticleNumber: "282.25.717",
 BomQty: 1
}
,{
 _id: 18524,
 in_HardwareItem: "HardwareShelfadjFittingGlassDesign01",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "281.41.907",
 BomQty: 1
}
,{
 _id: 18525,
 in_HardwareItem: "HardwareItemMinifix01White",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.27.920",
 BomQty: 1
}
,{
 _id: 18526,
 in_HardwareItem: "HardwareItemMinifix01White",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.26.533",
 BomQty: 1
}
,{
 _id: 18527,
 in_HardwareItem: "HardwareItemMinifix01White",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.24.751",
 BomQty: 1
}
,{
 _id: 18528,
 in_HardwareItem: "HardwareItemMinifix01Black",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.27.920",
 BomQty: 1
}
,{
 _id: 18529,
 in_HardwareItem: "HardwareItemMinifix01Black",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.26.533",
 BomQty: 1
}
,{
 _id: 18530,
 in_HardwareItem: "HardwareItemMinifix01Black",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.24.359",
 BomQty: 1
}
,{
 _id: 18531,
 in_HardwareItem: "HardwareItemMinifix01Light",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.27.920",
 BomQty: 1
}
,{
 _id: 18532,
 in_HardwareItem: "HardwareItemMinifix01Light",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.26.533",
 BomQty: 1
}
,{
 _id: 18533,
 in_HardwareItem: "HardwareItemMinifix01Light",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.24.555",
 BomQty: 1
}
,{
 _id: 18534,
 in_HardwareItem: "HardwareItemMinifix01Dark",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.27.920",
 BomQty: 1
}
,{
 _id: 18535,
 in_HardwareItem: "HardwareItemMinifix01Dark",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.26.533",
 BomQty: 1
}
,{
 _id: 18536,
 in_HardwareItem: "HardwareItemMinifix01Dark",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "262.24.550",
 BomQty: 1
}
,{
 _id: 18537,
 in_HardwareItem: "HardwareItemDowel01",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "267.82.227",
 BomQty: 1
}
,{
 _id: 18538,
 in_HardwareItem: "HardwareItemDowel02",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "267.82.240",
 BomQty: 1
}
,{
 _id: 18539,
 in_HardwareItem: "HardwareHinge110HalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.17.602",
 BomQty: 1
}
,{
 _id: 18540,
 in_HardwareItem: "HardwareHinge110HalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18541,
 in_HardwareItem: "HardwareHinge110InsetSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.17.603",
 BomQty: 1
}
,{
 _id: 18542,
 in_HardwareItem: "HardwareHinge110InsetSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18543,
 in_HardwareItem: "HardwareHinge110OverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.17.600",
 BomQty: 1
}
,{
 _id: 18544,
 in_HardwareItem: "HardwareHinge110OverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18545,
 in_HardwareItem: "HardwareHinge110SoftClHalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.15.403",
 BomQty: 1
}
,{
 _id: 18546,
 in_HardwareItem: "HardwareHinge110SoftClHalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18547,
 in_HardwareItem: "HardwareHinge110SoftClInsetSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.15.405",
 BomQty: 1
}
,{
 _id: 18548,
 in_HardwareItem: "HardwareHinge110SoftClInsetSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18549,
 in_HardwareItem: "HardwareHinge110SoftClOverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.15.401",
 BomQty: 1
}
,{
 _id: 18550,
 in_HardwareItem: "HardwareHinge110SoftClOverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18551,
 in_HardwareItem: "HardwareHinge155SoftClHalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.29.221",
 BomQty: 1
}
,{
 _id: 18552,
 in_HardwareItem: "HardwareHinge155SoftClHalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18553,
 in_HardwareItem: "HardwareHinge155SoftClOverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.29.217",
 BomQty: 1
}
,{
 _id: 18554,
 in_HardwareItem: "HardwareHinge155SoftClOverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18555,
 in_HardwareItem: "HardwareHinge165HalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.07.702",
 BomQty: 1
}
,{
 _id: 18556,
 in_HardwareItem: "HardwareHinge165HalfSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18557,
 in_HardwareItem: "HardwareHinge165InsetSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.07.703",
 BomQty: 1
}
,{
 _id: 18558,
 in_HardwareItem: "HardwareHinge165InsetSpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18559,
 in_HardwareItem: "HardwareHinge165OverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.07.700",
 BomQty: 1
}
,{
 _id: 18560,
 in_HardwareItem: "HardwareHinge165OverlaySpringSS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18561,
 in_HardwareItem: "HardwareMpCruciformA0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.80.528",
 BomQty: 1
}
,{
 _id: 18562,
 in_HardwareItem: "HardwareMpCruciformA0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18563,
 in_HardwareItem: "HardwareMpCruciformA3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.80.555",
 BomQty: 1
}
,{
 _id: 18564,
 in_HardwareItem: "HardwareMpCruciformA3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18565,
 in_HardwareItem: "HardwareMpCruciformA6SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.80.582",
 BomQty: 1
}
,{
 _id: 18566,
 in_HardwareItem: "HardwareMpCruciformA6SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18567,
 in_HardwareItem: "HardwareMpCruciformSM0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.71.500",
 BomQty: 1
}
,{
 _id: 18568,
 in_HardwareItem: "HardwareMpCruciformSM0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18569,
 in_HardwareItem: "HardwareMpCruciformSM3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.71.503",
 BomQty: 1
}
,{
 _id: 18570,
 in_HardwareItem: "HardwareMpCruciformSM3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18571,
 in_HardwareItem: "HardwareMpCruciformSM6SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.71.506",
 BomQty: 1
}
,{
 _id: 18572,
 in_HardwareItem: "HardwareMpCruciformSM6SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18573,
 in_HardwareItem: "HardwareMpHorizontalSM0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.67.000",
 BomQty: 1
}
,{
 _id: 18574,
 in_HardwareItem: "HardwareMpHorizontalSM3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.67.003",
 BomQty: 1
}
,{
 _id: 18575,
 in_HardwareItem: "HardwareMpHorizontalSM6SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.67.006",
 BomQty: 1
}
,{
 _id: 18576,
 in_HardwareItem: "HardwareHingeBlindCornerInset110SoftClNP",
 Supplier: "Haefele",
 SupplierArticleNumber: "329.11.705",
 BomQty: 1
}
,{
 _id: 18577,
 in_HardwareItem: "HardwareHingeBlindCornerInset110SoftClNP",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18578,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.701",
 BomQty: 1
}
,{
 _id: 18579,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.702",
 BomQty: 1
}
,{
 _id: 18580,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.770",
 BomQty: 1
}
,{
 _id: 18581,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.771",
 BomQty: 1
}
,{
 _id: 18582,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.702",
 BomQty: 1
}
,{
 _id: 18583,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18584,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.703",
 BomQty: 1
}
,{
 _id: 18585,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18586,
 in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.03.937",
 BomQty: 1
}
,{
 _id: 18587,
 in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 3
}
,{
 _id: 18588,
 in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.03.938",
 BomQty: 1
}
,{
 _id: 18589,
 in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 3
}
,{
 _id: 18590,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.901",
 BomQty: 1
}
,{
 _id: 18591,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.902",
 BomQty: 1
}
,{
 _id: 18592,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.980",
 BomQty: 1
}
,{
 _id: 18593,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18594,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.981",
 BomQty: 1
}
,{
 _id: 18595,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18596,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.09.910",
 BomQty: 1
}
,{
 _id: 18597,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "051.48.001",
 BomQty: 2
}
,{
 _id: 18598,
 in_HardwareItem: "HardwareWallUnitVisibleHanger52kgNickelPlated",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.143",
 BomQty: 2
}
,{
 _id: 18599,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.989",
 BomQty: 1
}
,{
 _id: 18600,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "051.48.001",
 BomQty: 2
}
,{
 _id: 18601,
 in_HardwareItem: "HardwareWallUnitVisibleHanger75kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.143",
 BomQty: 2
}
,{
 _id: 18602,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.40.991",
 BomQty: 1
}
,{
 _id: 18603,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "051.48.001",
 BomQty: 4
}
,{
 _id: 18604,
 in_HardwareItem: "HardwareBaseUnitVisibleHanger120kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.143",
 BomQty: 4
}
,{
 _id: 18605,
 in_HardwareItem: "HardwareWallUnitHiddenHanger92kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.09.910",
 BomQty: 1
}
,{
 _id: 18606,
 in_HardwareItem: "Hardware_Legra_Connector_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.054",
 BomQty: 2
}
,{
 _id: 18607,
 in_HardwareItem: "Hardware_Legra_Connector_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.064",
 BomQty: 2
}
,{
 _id: 18608,
 in_HardwareItem: "Hardware_Legra_Connector_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.074",
 BomQty: 2
}
,{
 _id: 18609,
 in_HardwareItem: "Hardware_Legra_Connector_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.084",
 BomQty: 2
}
,{
 _id: 18610,
 in_HardwareItem: "Hardware_Legra_Connector_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.084",
 BomQty: 2
}
,{
 _id: 18611,
 in_HardwareItem: "Hardware_Legra_Connector_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.064",
 BomQty: 2
}
,{
 _id: 18612,
 in_HardwareItem: "Hardware_Legra_Connector_KM",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.064",
 BomQty: 2
}
,{
 _id: 18613,
 in_HardwareItem: "Hardware_Legra_Connector_CM",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.064",
 BomQty: 4
}
,{
 _id: 18614,
 in_HardwareItem: "Hardware_Legra_Connector_FM",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.064",
 BomQty: 6
}
,{
 _id: 18615,
 in_HardwareItem: "Hardware_Legra_FrontBotCon",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.75.590",
 BomQty: 1
}
,{
 _id: 18616,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.710",
 BomQty: 1
}
,{
 _id: 18617,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18618,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.711",
 BomQty: 1
}
,{
 _id: 18619,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18620,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.781",
 BomQty: 1
}
,{
 _id: 18621,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.780",
 BomQty: 1
}
,{
 _id: 18622,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.09.910",
 BomQty: 1
}
,{
 _id: 18623,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "051.48.001",
 BomQty: 2
}
,{
 _id: 18624,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.143",
 BomQty: 2
}
,{
 _id: 18625,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.711",
 BomQty: 1
}
,{
 _id: 18626,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18627,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.521",
 BomQty: 1
}
,{
 _id: 18628,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.520",
 BomQty: 1
}
,{
 _id: 18629,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.09.910",
 BomQty: 1
}
,{
 _id: 18630,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "051.48.001",
 BomQty: 2
}
,{
 _id: 18631,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.143",
 BomQty: 2
}
,{
 _id: 18632,
 in_HardwareItem: "HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "290.02.710",
 BomQty: 1
}
,{
 _id: 18633,
 in_HardwareItem: " HardwareWallUnitVisibleHanger45kgGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 18634,
 in_HardwareItem: "Hardware_Legra_White_400_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.703",
 BomQty: 1
}
,{
 _id: 18635,
 in_HardwareItem: "Hardware_Legra_White_450_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.704",
 BomQty: 1
}
,{
 _id: 18636,
 in_HardwareItem: "Hardware_Legra_White_500_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.705",
 BomQty: 1
}
,{
 _id: 18637,
 in_HardwareItem: "Hardware_Legra_White_550_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.706",
 BomQty: 1
}
,{
 _id: 18638,
 in_HardwareItem: "Hardware_Legra_Terra_400_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.803",
 BomQty: 1
}
,{
 _id: 18639,
 in_HardwareItem: "Hardware_Legra_Terra_450_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.804",
 BomQty: 1
}
,{
 _id: 18640,
 in_HardwareItem: "Hardware_Legra_Terra_500_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.805",
 BomQty: 1
}
,{
 _id: 18641,
 in_HardwareItem: "Hardware_Legra_Terra_550_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.806",
 BomQty: 1
}
,{
 _id: 18642,
 in_HardwareItem: "Hardware_Legra_Orion_400_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.503",
 BomQty: 1
}
,{
 _id: 18643,
 in_HardwareItem: "Hardware_Legra_Orion_450_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.504",
 BomQty: 1
}
,{
 _id: 18644,
 in_HardwareItem: "Hardware_Legra_Orion_500_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.505",
 BomQty: 1
}
,{
 _id: 18645,
 in_HardwareItem: "Hardware_Legra_Orion_550_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.506",
 BomQty: 1
}
,{
 _id: 18646,
 in_HardwareItem: "Hardware_Legra_Inox_450_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.004",
 BomQty: 1
}
,{
 _id: 18647,
 in_HardwareItem: "Hardware_Legra_Inox_500_N",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.005",
 BomQty: 1
}
,{
 _id: 18648,
 in_HardwareItem: "Hardware_Legra_White_400_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.713",
 BomQty: 1
}
,{
 _id: 18649,
 in_HardwareItem: "Hardware_Legra_White_450_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.714",
 BomQty: 1
}
,{
 _id: 18650,
 in_HardwareItem: "Hardware_Legra_White_500_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.715",
 BomQty: 1
}
,{
 _id: 18651,
 in_HardwareItem: "Hardware_Legra_White_550_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.716",
 BomQty: 1
}
,{
 _id: 18652,
 in_HardwareItem: "Hardware_Legra_Terra_400_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.813",
 BomQty: 1
}
,{
 _id: 18653,
 in_HardwareItem: "Hardware_Legra_Terra_450_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.814",
 BomQty: 1
}
,{
 _id: 18654,
 in_HardwareItem: "Hardware_Legra_Terra_500_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.815",
 BomQty: 1
}
,{
 _id: 18655,
 in_HardwareItem: "Hardware_Legra_Terra_550_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.816",
 BomQty: 1
}
,{
 _id: 18656,
 in_HardwareItem: "Hardware_Legra_Orion_400_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.513",
 BomQty: 1
}
,{
 _id: 18657,
 in_HardwareItem: "Hardware_Legra_Orion_450_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.514",
 BomQty: 1
}
,{
 _id: 18658,
 in_HardwareItem: "Hardware_Legra_Orion_500_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.515",
 BomQty: 1
}
,{
 _id: 18659,
 in_HardwareItem: "Hardware_Legra_Orion_550_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.516",
 BomQty: 1
}
,{
 _id: 18660,
 in_HardwareItem: "Hardware_Legra_Inox_450_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.014",
 BomQty: 1
}
,{
 _id: 18661,
 in_HardwareItem: "Hardware_Legra_Inox_500_N_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.015",
 BomQty: 1
}
,{
 _id: 18662,
 in_HardwareItem: "Hardware_Legra_White_270_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.720",
 BomQty: 1
}
,{
 _id: 18663,
 in_HardwareItem: "Hardware_Legra_White_300_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.721",
 BomQty: 1
}
,{
 _id: 18664,
 in_HardwareItem: "Hardware_Legra_White_350_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.722",
 BomQty: 1
}
,{
 _id: 18665,
 in_HardwareItem: "Hardware_Legra_White_400_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.723",
 BomQty: 1
}
,{
 _id: 18666,
 in_HardwareItem: "Hardware_Legra_White_450_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.724",
 BomQty: 1
}
,{
 _id: 18667,
 in_HardwareItem: "Hardware_Legra_White_500_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.725",
 BomQty: 1
}
,{
 _id: 18668,
 in_HardwareItem: "Hardware_Legra_White_550_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.726",
 BomQty: 1
}
,{
 _id: 18669,
 in_HardwareItem: "Hardware_Legra_White_600_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.727",
 BomQty: 1
}
,{
 _id: 18670,
 in_HardwareItem: "Hardware_Legra_White_450_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.734",
 BomQty: 1
}
,{
 _id: 18671,
 in_HardwareItem: "Hardware_Legra_White_500_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.735",
 BomQty: 1
}
,{
 _id: 18672,
 in_HardwareItem: "Hardware_Legra_White_550_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.736",
 BomQty: 1
}
,{
 _id: 18673,
 in_HardwareItem: "Hardware_Legra_White_600_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.737",
 BomQty: 1
}
,{
 _id: 18674,
 in_HardwareItem: "Hardware_Legra_White_650_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.738",
 BomQty: 1
}
,{
 _id: 18675,
 in_HardwareItem: "Hardware_Legra_Terra_270_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.820",
 BomQty: 1
}
,{
 _id: 18676,
 in_HardwareItem: "Hardware_Legra_Terra_300_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.821",
 BomQty: 1
}
,{
 _id: 18677,
 in_HardwareItem: "Hardware_Legra_Terra_350_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.822",
 BomQty: 1
}
,{
 _id: 18678,
 in_HardwareItem: "Hardware_Legra_Terra_400_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.823",
 BomQty: 1
}
,{
 _id: 18679,
 in_HardwareItem: "Hardware_Legra_Terra_450_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.824",
 BomQty: 1
}
,{
 _id: 18680,
 in_HardwareItem: "Hardware_Legra_Terra_500_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.825",
 BomQty: 1
}
,{
 _id: 18681,
 in_HardwareItem: "Hardware_Legra_Terra_550_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.826",
 BomQty: 1
}
,{
 _id: 18682,
 in_HardwareItem: "Hardware_Legra_Terra_600_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.827",
 BomQty: 1
}
,{
 _id: 18683,
 in_HardwareItem: "Hardware_Legra_Terra_450_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.834",
 BomQty: 1
}
,{
 _id: 18684,
 in_HardwareItem: "Hardware_Legra_Terra_500_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.835",
 BomQty: 1
}
,{
 _id: 18685,
 in_HardwareItem: "Hardware_Legra_Terra_550_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.836",
 BomQty: 1
}
,{
 _id: 18686,
 in_HardwareItem: "Hardware_Legra_Terra_600_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.837",
 BomQty: 1
}
,{
 _id: 18687,
 in_HardwareItem: "Hardware_Legra_Terra_650_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.838",
 BomQty: 1
}
,{
 _id: 18688,
 in_HardwareItem: "Hardware_Legra_Orion_270_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.520",
 BomQty: 1
}
,{
 _id: 18689,
 in_HardwareItem: "Hardware_Legra_Orion_300_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.521",
 BomQty: 1
}
,{
 _id: 18690,
 in_HardwareItem: "Hardware_Legra_Orion_350_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.522",
 BomQty: 1
}
,{
 _id: 18691,
 in_HardwareItem: "Hardware_Legra_Orion_400_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.523",
 BomQty: 1
}
,{
 _id: 18692,
 in_HardwareItem: "Hardware_Legra_Orion_450_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.524",
 BomQty: 1
}
,{
 _id: 18693,
 in_HardwareItem: "Hardware_Legra_Orion_500_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.525",
 BomQty: 1
}
,{
 _id: 18694,
 in_HardwareItem: "Hardware_Legra_Orion_550_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.526",
 BomQty: 1
}
,{
 _id: 18695,
 in_HardwareItem: "Hardware_Legra_Orion_600_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.527",
 BomQty: 1
}
,{
 _id: 18696,
 in_HardwareItem: "Hardware_Legra_Orion_450_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.534",
 BomQty: 1
}
,{
 _id: 18697,
 in_HardwareItem: "Hardware_Legra_Orion_500_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.535",
 BomQty: 1
}
,{
 _id: 18698,
 in_HardwareItem: "Hardware_Legra_Orion_550_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.536",
 BomQty: 1
}
,{
 _id: 18699,
 in_HardwareItem: "Hardware_Legra_Orion_600_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.537",
 BomQty: 1
}
,{
 _id: 18700,
 in_HardwareItem: "Hardware_Legra_Orion_650_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.538",
 BomQty: 1
}
,{
 _id: 18701,
 in_HardwareItem: "Hardware_Legra_Inox_270_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.020",
 BomQty: 1
}
,{
 _id: 18702,
 in_HardwareItem: "Hardware_Legra_Inox_300_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.021",
 BomQty: 1
}
,{
 _id: 18703,
 in_HardwareItem: "Hardware_Legra_Inox_350_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.022",
 BomQty: 1
}
,{
 _id: 18704,
 in_HardwareItem: "Hardware_Legra_Inox_400_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.023",
 BomQty: 1
}
,{
 _id: 18705,
 in_HardwareItem: "Hardware_Legra_Inox_450_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.024",
 BomQty: 1
}
,{
 _id: 18706,
 in_HardwareItem: "Hardware_Legra_Inox_500_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.025",
 BomQty: 1
}
,{
 _id: 18707,
 in_HardwareItem: "Hardware_Legra_Inox_550_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.026",
 BomQty: 1
}
,{
 _id: 18708,
 in_HardwareItem: "Hardware_Legra_Inox_600_M",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.027",
 BomQty: 1
}
,{
 _id: 18709,
 in_HardwareItem: "Hardware_Legra_Inox_450_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.034",
 BomQty: 1
}
,{
 _id: 18710,
 in_HardwareItem: "Hardware_Legra_Inox_500_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.035",
 BomQty: 1
}
,{
 _id: 18711,
 in_HardwareItem: "Hardware_Legra_Inox_550_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.036",
 BomQty: 1
}
,{
 _id: 18712,
 in_HardwareItem: "Hardware_Legra_Inox_600_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.037",
 BomQty: 1
}
,{
 _id: 18713,
 in_HardwareItem: "Hardware_Legra_Inox_650_M_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.038",
 BomQty: 1
}
,{
 _id: 18714,
 in_HardwareItem: "Hardware_Legra_White_270_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.720",
 BomQty: 1
}
,{
 _id: 18715,
 in_HardwareItem: "Hardware_Legra_White_300_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.721",
 BomQty: 1
}
,{
 _id: 18716,
 in_HardwareItem: "Hardware_Legra_White_350_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.722",
 BomQty: 1
}
,{
 _id: 18717,
 in_HardwareItem: "Hardware_Legra_White_400_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.723",
 BomQty: 1
}
,{
 _id: 18718,
 in_HardwareItem: "Hardware_Legra_White_450_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.724",
 BomQty: 1
}
,{
 _id: 18719,
 in_HardwareItem: "Hardware_Legra_White_500_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.725",
 BomQty: 1
}
,{
 _id: 18720,
 in_HardwareItem: "Hardware_Legra_White_550_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.726",
 BomQty: 1
}
,{
 _id: 18721,
 in_HardwareItem: "Hardware_Legra_White_600_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.727",
 BomQty: 1
}
,{
 _id: 18722,
 in_HardwareItem: "Hardware_Legra_White_450_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.734",
 BomQty: 1
}
,{
 _id: 18723,
 in_HardwareItem: "Hardware_Legra_White_500_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.735",
 BomQty: 1
}
,{
 _id: 18724,
 in_HardwareItem: "Hardware_Legra_White_550_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.736",
 BomQty: 1
}
,{
 _id: 18725,
 in_HardwareItem: "Hardware_Legra_White_600_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.737",
 BomQty: 1
}
,{
 _id: 18726,
 in_HardwareItem: "Hardware_Legra_White_650_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.738",
 BomQty: 1
}
,{
 _id: 18727,
 in_HardwareItem: "Hardware_Legra_Terra_270_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.820",
 BomQty: 1
}
,{
 _id: 18728,
 in_HardwareItem: "Hardware_Legra_Terra_300_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.821",
 BomQty: 1
}
,{
 _id: 18729,
 in_HardwareItem: "Hardware_Legra_Terra_350_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.822",
 BomQty: 1
}
,{
 _id: 18730,
 in_HardwareItem: "Hardware_Legra_Terra_400_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.823",
 BomQty: 1
}
,{
 _id: 18731,
 in_HardwareItem: "Hardware_Legra_Terra_450_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.824",
 BomQty: 1
}
,{
 _id: 18732,
 in_HardwareItem: "Hardware_Legra_Terra_500_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.825",
 BomQty: 1
}
,{
 _id: 18733,
 in_HardwareItem: "Hardware_Legra_Terra_550_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.826",
 BomQty: 1
}
,{
 _id: 18734,
 in_HardwareItem: "Hardware_Legra_Terra_600_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.827",
 BomQty: 1
}
,{
 _id: 18735,
 in_HardwareItem: "Hardware_Legra_Terra_450_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.834",
 BomQty: 1
}
,{
 _id: 18736,
 in_HardwareItem: "Hardware_Legra_Terra_500_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.835",
 BomQty: 1
}
,{
 _id: 18737,
 in_HardwareItem: "Hardware_Legra_Terra_550_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.836",
 BomQty: 1
}
,{
 _id: 18738,
 in_HardwareItem: "Hardware_Legra_Terra_600_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.837",
 BomQty: 1
}
,{
 _id: 18739,
 in_HardwareItem: "Hardware_Legra_Terra_650_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.838",
 BomQty: 1
}
,{
 _id: 18740,
 in_HardwareItem: "Hardware_Legra_Orion_270_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.520",
 BomQty: 1
}
,{
 _id: 18741,
 in_HardwareItem: "Hardware_Legra_Orion_300_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.521",
 BomQty: 1
}
,{
 _id: 18742,
 in_HardwareItem: "Hardware_Legra_Orion_350_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.522",
 BomQty: 1
}
,{
 _id: 18743,
 in_HardwareItem: "Hardware_Legra_Orion_400_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.523",
 BomQty: 1
}
,{
 _id: 18744,
 in_HardwareItem: "Hardware_Legra_Orion_450_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.524",
 BomQty: 1
}
,{
 _id: 18745,
 in_HardwareItem: "Hardware_Legra_Orion_500_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.525",
 BomQty: 1
}
,{
 _id: 18746,
 in_HardwareItem: "Hardware_Legra_Orion_550_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.526",
 BomQty: 1
}
,{
 _id: 18747,
 in_HardwareItem: "Hardware_Legra_Orion_600_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.527",
 BomQty: 1
}
,{
 _id: 18748,
 in_HardwareItem: "Hardware_Legra_Orion_450_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.534",
 BomQty: 1
}
,{
 _id: 18749,
 in_HardwareItem: "Hardware_Legra_Orion_500_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.535",
 BomQty: 1
}
,{
 _id: 18750,
 in_HardwareItem: "Hardware_Legra_Orion_550_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.536",
 BomQty: 1
}
,{
 _id: 18751,
 in_HardwareItem: "Hardware_Legra_Orion_600_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.537",
 BomQty: 1
}
,{
 _id: 18752,
 in_HardwareItem: "Hardware_Legra_Orion_650_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.538",
 BomQty: 1
}
,{
 _id: 18753,
 in_HardwareItem: "Hardware_Legra_Inox_270_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.020",
 BomQty: 1
}
,{
 _id: 18754,
 in_HardwareItem: "Hardware_Legra_Inox_300_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.021",
 BomQty: 1
}
,{
 _id: 18755,
 in_HardwareItem: "Hardware_Legra_Inox_350_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.022",
 BomQty: 1
}
,{
 _id: 18756,
 in_HardwareItem: "Hardware_Legra_Inox_400_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.023",
 BomQty: 1
}
,{
 _id: 18757,
 in_HardwareItem: "Hardware_Legra_Inox_450_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.024",
 BomQty: 1
}
,{
 _id: 18758,
 in_HardwareItem: "Hardware_Legra_Inox_500_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.025",
 BomQty: 1
}
,{
 _id: 18759,
 in_HardwareItem: "Hardware_Legra_Inox_550_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.026",
 BomQty: 1
}
,{
 _id: 18760,
 in_HardwareItem: "Hardware_Legra_Inox_600_M_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.027",
 BomQty: 1
}
,{
 _id: 18761,
 in_HardwareItem: "Hardware_Legra_Inox_450_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.034",
 BomQty: 1
}
,{
 _id: 18762,
 in_HardwareItem: "Hardware_Legra_Inox_500_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.035",
 BomQty: 1
}
,{
 _id: 18763,
 in_HardwareItem: "Hardware_Legra_Inox_550_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.036",
 BomQty: 1
}
,{
 _id: 18764,
 in_HardwareItem: "Hardware_Legra_Inox_600_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.037",
 BomQty: 1
}
,{
 _id: 18765,
 in_HardwareItem: "Hardware_Legra_Inox_650_M_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.038",
 BomQty: 1
}
,{
 _id: 18766,
 in_HardwareItem: "Hardware_Legra_White_300_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.741",
 BomQty: 1
}
,{
 _id: 18767,
 in_HardwareItem: "Hardware_Legra_White_350_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.742",
 BomQty: 1
}
,{
 _id: 18768,
 in_HardwareItem: "Hardware_Legra_White_400_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.743",
 BomQty: 1
}
,{
 _id: 18769,
 in_HardwareItem: "Hardware_Legra_White_450_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.744",
 BomQty: 1
}
,{
 _id: 18770,
 in_HardwareItem: "Hardware_Legra_White_500_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.745",
 BomQty: 1
}
,{
 _id: 18771,
 in_HardwareItem: "Hardware_Legra_White_550_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.746",
 BomQty: 1
}
,{
 _id: 18772,
 in_HardwareItem: "Hardware_Legra_White_600_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.747",
 BomQty: 1
}
,{
 _id: 18773,
 in_HardwareItem: "Hardware_Legra_White_450_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.754",
 BomQty: 1
}
,{
 _id: 18774,
 in_HardwareItem: "Hardware_Legra_White_500_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.755",
 BomQty: 1
}
,{
 _id: 18775,
 in_HardwareItem: "Hardware_Legra_White_550_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.756",
 BomQty: 1
}
,{
 _id: 18776,
 in_HardwareItem: "Hardware_Legra_White_600_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.757",
 BomQty: 1
}
,{
 _id: 18777,
 in_HardwareItem: "Hardware_Legra_Terra_300_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.841",
 BomQty: 1
}
,{
 _id: 18778,
 in_HardwareItem: "Hardware_Legra_Terra_350_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.842",
 BomQty: 1
}
,{
 _id: 18779,
 in_HardwareItem: "Hardware_Legra_Terra_400_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.843",
 BomQty: 1
}
,{
 _id: 18780,
 in_HardwareItem: "Hardware_Legra_Terra_450_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.844",
 BomQty: 1
}
,{
 _id: 18781,
 in_HardwareItem: "Hardware_Legra_Terra_500_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.845",
 BomQty: 1
}
,{
 _id: 18782,
 in_HardwareItem: "Hardware_Legra_Terra_550_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.846",
 BomQty: 1
}
,{
 _id: 18783,
 in_HardwareItem: "Hardware_Legra_Terra_600_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.847",
 BomQty: 1
}
,{
 _id: 18784,
 in_HardwareItem: "Hardware_Legra_Terra_450_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.854",
 BomQty: 1
}
,{
 _id: 18785,
 in_HardwareItem: "Hardware_Legra_Terra_500_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.855",
 BomQty: 1
}
,{
 _id: 18786,
 in_HardwareItem: "Hardware_Legra_Terra_550_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.856",
 BomQty: 1
}
,{
 _id: 18787,
 in_HardwareItem: "Hardware_Legra_Terra_600_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.857",
 BomQty: 1
}
,{
 _id: 18788,
 in_HardwareItem: "Hardware_Legra_Orion_300_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.541",
 BomQty: 1
}
,{
 _id: 18789,
 in_HardwareItem: "Hardware_Legra_Orion_350_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.542",
 BomQty: 1
}
,{
 _id: 18790,
 in_HardwareItem: "Hardware_Legra_Orion_400_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.543",
 BomQty: 1
}
,{
 _id: 18791,
 in_HardwareItem: "Hardware_Legra_Orion_450_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.544",
 BomQty: 1
}
,{
 _id: 18792,
 in_HardwareItem: "Hardware_Legra_Orion_500_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.545",
 BomQty: 1
}
,{
 _id: 18793,
 in_HardwareItem: "Hardware_Legra_Orion_550_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.546",
 BomQty: 1
}
,{
 _id: 18794,
 in_HardwareItem: "Hardware_Legra_Orion_600_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.547",
 BomQty: 1
}
,{
 _id: 18795,
 in_HardwareItem: "Hardware_Legra_Orion_450_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.554",
 BomQty: 1
}
,{
 _id: 18796,
 in_HardwareItem: "Hardware_Legra_Orion_500_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.555",
 BomQty: 1
}
,{
 _id: 18797,
 in_HardwareItem: "Hardware_Legra_Orion_550_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.556",
 BomQty: 1
}
,{
 _id: 18798,
 in_HardwareItem: "Hardware_Legra_Orion_600_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.557",
 BomQty: 1
}
,{
 _id: 18799,
 in_HardwareItem: "Hardware_Legra_Inox_350_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.042",
 BomQty: 1
}
,{
 _id: 18800,
 in_HardwareItem: "Hardware_Legra_Inox_400_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.043",
 BomQty: 1
}
,{
 _id: 18801,
 in_HardwareItem: "Hardware_Legra_Inox_450_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.044",
 BomQty: 1
}
,{
 _id: 18802,
 in_HardwareItem: "Hardware_Legra_Inox_500_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.045",
 BomQty: 1
}
,{
 _id: 18803,
 in_HardwareItem: "Hardware_Legra_Inox_550_K",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.046",
 BomQty: 1
}
,{
 _id: 18804,
 in_HardwareItem: "Hardware_Legra_Inox_450_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.054",
 BomQty: 1
}
,{
 _id: 18805,
 in_HardwareItem: "Hardware_Legra_Inox_500_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.055",
 BomQty: 1
}
,{
 _id: 18806,
 in_HardwareItem: "Hardware_Legra_Inox_550_K_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.26.056",
 BomQty: 1
}
,{
 _id: 18807,
 in_HardwareItem: "Hardware_Legra_White_300_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.741",
 BomQty: 1
}
,{
 _id: 18808,
 in_HardwareItem: "Hardware_Legra_White_350_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.742",
 BomQty: 1
}
,{
 _id: 18809,
 in_HardwareItem: "Hardware_Legra_White_400_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.743",
 BomQty: 1
}
,{
 _id: 18810,
 in_HardwareItem: "Hardware_Legra_White_450_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.744",
 BomQty: 1
}
,{
 _id: 18811,
 in_HardwareItem: "Hardware_Legra_White_500_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.745",
 BomQty: 1
}
,{
 _id: 18812,
 in_HardwareItem: "Hardware_Legra_White_550_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.746",
 BomQty: 1
}
,{
 _id: 18813,
 in_HardwareItem: "Hardware_Legra_White_600_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.747",
 BomQty: 1
}
,{
 _id: 18814,
 in_HardwareItem: "Hardware_Legra_White_450_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.754",
 BomQty: 1
}
,{
 _id: 18815,
 in_HardwareItem: "Hardware_Legra_White_500_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.755",
 BomQty: 1
}
,{
 _id: 18816,
 in_HardwareItem: "Hardware_Legra_White_550_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.756",
 BomQty: 1
}
,{
 _id: 18817,
 in_HardwareItem: "Hardware_Legra_White_600_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.757",
 BomQty: 1
}
,{
 _id: 18818,
 in_HardwareItem: "Hardware_Legra_Terra_300_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.841",
 BomQty: 1
}
,{
 _id: 18819,
 in_HardwareItem: "Hardware_Legra_Terra_350_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.842",
 BomQty: 1
}
,{
 _id: 18820,
 in_HardwareItem: "Hardware_Legra_Terra_400_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.843",
 BomQty: 1
}
,{
 _id: 18821,
 in_HardwareItem: "Hardware_Legra_Terra_450_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.844",
 BomQty: 1
}
,{
 _id: 18822,
 in_HardwareItem: "Hardware_Legra_Terra_500_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.845",
 BomQty: 1
}
,{
 _id: 18823,
 in_HardwareItem: "Hardware_Legra_Terra_550_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.846",
 BomQty: 1
}
,{
 _id: 18824,
 in_HardwareItem: "Hardware_Legra_Terra_600_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.847",
 BomQty: 1
}
,{
 _id: 18825,
 in_HardwareItem: "Hardware_Legra_Terra_450_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.854",
 BomQty: 1
}
,{
 _id: 18826,
 in_HardwareItem: "Hardware_Legra_Terra_500_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.855",
 BomQty: 1
}
,{
 _id: 18827,
 in_HardwareItem: "Hardware_Legra_Terra_550_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.856",
 BomQty: 1
}
,{
 _id: 18828,
 in_HardwareItem: "Hardware_Legra_Terra_600_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.857",
 BomQty: 1
}
,{
 _id: 18829,
 in_HardwareItem: "Hardware_Legra_Orion_300_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.541",
 BomQty: 1
}
,{
 _id: 18830,
 in_HardwareItem: "Hardware_Legra_Orion_350_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.542",
 BomQty: 1
}
,{
 _id: 18831,
 in_HardwareItem: "Hardware_Legra_Orion_400_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.543",
 BomQty: 1
}
,{
 _id: 18832,
 in_HardwareItem: "Hardware_Legra_Orion_450_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.544",
 BomQty: 1
}
,{
 _id: 18833,
 in_HardwareItem: "Hardware_Legra_Orion_500_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.545",
 BomQty: 1
}
,{
 _id: 18834,
 in_HardwareItem: "Hardware_Legra_Orion_550_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.546",
 BomQty: 1
}
,{
 _id: 18835,
 in_HardwareItem: "Hardware_Legra_Orion_600_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.547",
 BomQty: 1
}
,{
 _id: 18836,
 in_HardwareItem: "Hardware_Legra_Orion_450_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.554",
 BomQty: 1
}
,{
 _id: 18837,
 in_HardwareItem: "Hardware_Legra_Orion_500_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.555",
 BomQty: 1
}
,{
 _id: 18838,
 in_HardwareItem: "Hardware_Legra_Orion_550_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.556",
 BomQty: 1
}
,{
 _id: 18839,
 in_HardwareItem: "Hardware_Legra_Orion_600_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.557",
 BomQty: 1
}
,{
 _id: 18840,
 in_HardwareItem: "Hardware_Legra_Inox_350_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.042",
 BomQty: 1
}
,{
 _id: 18841,
 in_HardwareItem: "Hardware_Legra_Inox_400_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.043",
 BomQty: 1
}
,{
 _id: 18842,
 in_HardwareItem: "Hardware_Legra_Inox_450_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.044",
 BomQty: 1
}
,{
 _id: 18843,
 in_HardwareItem: "Hardware_Legra_Inox_500_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.045",
 BomQty: 1
}
,{
 _id: 18844,
 in_HardwareItem: "Hardware_Legra_Inox_550_K_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.046",
 BomQty: 1
}
,{
 _id: 18845,
 in_HardwareItem: "Hardware_Legra_Inox_450_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.054",
 BomQty: 1
}
,{
 _id: 18846,
 in_HardwareItem: "Hardware_Legra_Inox_500_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.055",
 BomQty: 1
}
,{
 _id: 18847,
 in_HardwareItem: "Hardware_Legra_Inox_550_K_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.72.056",
 BomQty: 1
}
,{
 _id: 18848,
 in_HardwareItem: "Hardware_Legra_White_270_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.700",
 BomQty: 1
}
,{
 _id: 18849,
 in_HardwareItem: "Hardware_Legra_White_300_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.701",
 BomQty: 1
}
,{
 _id: 18850,
 in_HardwareItem: "Hardware_Legra_White_350_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.702",
 BomQty: 1
}
,{
 _id: 18851,
 in_HardwareItem: "Hardware_Legra_White_400_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.703",
 BomQty: 1
}
,{
 _id: 18852,
 in_HardwareItem: "Hardware_Legra_White_450_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.704",
 BomQty: 1
}
,{
 _id: 18853,
 in_HardwareItem: "Hardware_Legra_White_500_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.705",
 BomQty: 1
}
,{
 _id: 18854,
 in_HardwareItem: "Hardware_Legra_White_550_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.706",
 BomQty: 1
}
,{
 _id: 18855,
 in_HardwareItem: "Hardware_Legra_White_600_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.707",
 BomQty: 1
}
,{
 _id: 18856,
 in_HardwareItem: "Hardware_Legra_White_450_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.714",
 BomQty: 1
}
,{
 _id: 18857,
 in_HardwareItem: "Hardware_Legra_White_500_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.715",
 BomQty: 1
}
,{
 _id: 18858,
 in_HardwareItem: "Hardware_Legra_White_550_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.716",
 BomQty: 1
}
,{
 _id: 18859,
 in_HardwareItem: "Hardware_Legra_White_600_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.717",
 BomQty: 1
}
,{
 _id: 18860,
 in_HardwareItem: "Hardware_Legra_White_650_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.718",
 BomQty: 1
}
,{
 _id: 18861,
 in_HardwareItem: "Hardware_Legra_Terra_270_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.800",
 BomQty: 1
}
,{
 _id: 18862,
 in_HardwareItem: "Hardware_Legra_Terra_300_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.801",
 BomQty: 1
}
,{
 _id: 18863,
 in_HardwareItem: "Hardware_Legra_Terra_350_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.802",
 BomQty: 1
}
,{
 _id: 18864,
 in_HardwareItem: "Hardware_Legra_Terra_400_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.803",
 BomQty: 1
}
,{
 _id: 18865,
 in_HardwareItem: "Hardware_Legra_Terra_450_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.804",
 BomQty: 1
}
,{
 _id: 18866,
 in_HardwareItem: "Hardware_Legra_Terra_500_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.805",
 BomQty: 1
}
,{
 _id: 18867,
 in_HardwareItem: "Hardware_Legra_Terra_550_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.806",
 BomQty: 1
}
,{
 _id: 18868,
 in_HardwareItem: "Hardware_Legra_Terra_600_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.807",
 BomQty: 1
}
,{
 _id: 18869,
 in_HardwareItem: "Hardware_Legra_Terra_450_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.814",
 BomQty: 1
}
,{
 _id: 18870,
 in_HardwareItem: "Hardware_Legra_Terra_500_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.815",
 BomQty: 1
}
,{
 _id: 18871,
 in_HardwareItem: "Hardware_Legra_Terra_550_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.816",
 BomQty: 1
}
,{
 _id: 18872,
 in_HardwareItem: "Hardware_Legra_Terra_600_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.817",
 BomQty: 1
}
,{
 _id: 18873,
 in_HardwareItem: "Hardware_Legra_Terra_650_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.818",
 BomQty: 1
}
,{
 _id: 18874,
 in_HardwareItem: "Hardware_Legra_Orion_270_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.500",
 BomQty: 1
}
,{
 _id: 18875,
 in_HardwareItem: "Hardware_Legra_Orion_300_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.501",
 BomQty: 1
}
,{
 _id: 18876,
 in_HardwareItem: "Hardware_Legra_Orion_350_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.502",
 BomQty: 1
}
,{
 _id: 18877,
 in_HardwareItem: "Hardware_Legra_Orion_400_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.503",
 BomQty: 1
}
,{
 _id: 18878,
 in_HardwareItem: "Hardware_Legra_Orion_450_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.504",
 BomQty: 1
}
,{
 _id: 18879,
 in_HardwareItem: "Hardware_Legra_Orion_500_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.505",
 BomQty: 1
}
,{
 _id: 18880,
 in_HardwareItem: "Hardware_Legra_Orion_550_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.506",
 BomQty: 1
}
,{
 _id: 18881,
 in_HardwareItem: "Hardware_Legra_Orion_600_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.507",
 BomQty: 1
}
,{
 _id: 18882,
 in_HardwareItem: "Hardware_Legra_Orion_450_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.514",
 BomQty: 1
}
,{
 _id: 18883,
 in_HardwareItem: "Hardware_Legra_Orion_500_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.515",
 BomQty: 1
}
,{
 _id: 18884,
 in_HardwareItem: "Hardware_Legra_Orion_550_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.516",
 BomQty: 1
}
,{
 _id: 18885,
 in_HardwareItem: "Hardware_Legra_Orion_600_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.517",
 BomQty: 1
}
,{
 _id: 18886,
 in_HardwareItem: "Hardware_Legra_Orion_650_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.518",
 BomQty: 1
}
,{
 _id: 18887,
 in_HardwareItem: "Hardware_Legra_Inox_270_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.000",
 BomQty: 1
}
,{
 _id: 18888,
 in_HardwareItem: "Hardware_Legra_Inox_300_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.001",
 BomQty: 1
}
,{
 _id: 18889,
 in_HardwareItem: "Hardware_Legra_Inox_350_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.002",
 BomQty: 1
}
,{
 _id: 18890,
 in_HardwareItem: "Hardware_Legra_Inox_400_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.003",
 BomQty: 1
}
,{
 _id: 18891,
 in_HardwareItem: "Hardware_Legra_Inox_450_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.004",
 BomQty: 1
}
,{
 _id: 18892,
 in_HardwareItem: "Hardware_Legra_Inox_500_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.005",
 BomQty: 1
}
,{
 _id: 18893,
 in_HardwareItem: "Hardware_Legra_Inox_550_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.006",
 BomQty: 1
}
,{
 _id: 18894,
 in_HardwareItem: "Hardware_Legra_Inox_600_C",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.007",
 BomQty: 1
}
,{
 _id: 18895,
 in_HardwareItem: "Hardware_Legra_Inox_450_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.014",
 BomQty: 1
}
,{
 _id: 18896,
 in_HardwareItem: "Hardware_Legra_Inox_500_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.015",
 BomQty: 1
}
,{
 _id: 18897,
 in_HardwareItem: "Hardware_Legra_Inox_550_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.016",
 BomQty: 1
}
,{
 _id: 18898,
 in_HardwareItem: "Hardware_Legra_Inox_600_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.017",
 BomQty: 1
}
,{
 _id: 18899,
 in_HardwareItem: "Hardware_Legra_Inox_650_C_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.018",
 BomQty: 1
}
,{
 _id: 18900,
 in_HardwareItem: "Hardware_Legra_White_270_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.700",
 BomQty: 1
}
,{
 _id: 18901,
 in_HardwareItem: "Hardware_Legra_White_300_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.701",
 BomQty: 1
}
,{
 _id: 18902,
 in_HardwareItem: "Hardware_Legra_White_350_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.702",
 BomQty: 1
}
,{
 _id: 18903,
 in_HardwareItem: "Hardware_Legra_White_400_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.703",
 BomQty: 1
}
,{
 _id: 18904,
 in_HardwareItem: "Hardware_Legra_White_450_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.704",
 BomQty: 1
}
,{
 _id: 18905,
 in_HardwareItem: "Hardware_Legra_White_500_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.705",
 BomQty: 1
}
,{
 _id: 18906,
 in_HardwareItem: "Hardware_Legra_White_550_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.706",
 BomQty: 1
}
,{
 _id: 18907,
 in_HardwareItem: "Hardware_Legra_White_600_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.707",
 BomQty: 1
}
,{
 _id: 18908,
 in_HardwareItem: "Hardware_Legra_White_450_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.714",
 BomQty: 1
}
,{
 _id: 18909,
 in_HardwareItem: "Hardware_Legra_White_500_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.715",
 BomQty: 1
}
,{
 _id: 18910,
 in_HardwareItem: "Hardware_Legra_White_550_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.716",
 BomQty: 1
}
,{
 _id: 18911,
 in_HardwareItem: "Hardware_Legra_White_600_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.717",
 BomQty: 1
}
,{
 _id: 18912,
 in_HardwareItem: "Hardware_Legra_White_650_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.718",
 BomQty: 1
}
,{
 _id: 18913,
 in_HardwareItem: "Hardware_Legra_Terra_270_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.800",
 BomQty: 1
}
,{
 _id: 18914,
 in_HardwareItem: "Hardware_Legra_Terra_300_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.801",
 BomQty: 1
}
,{
 _id: 18915,
 in_HardwareItem: "Hardware_Legra_Terra_350_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.802",
 BomQty: 1
}
,{
 _id: 18916,
 in_HardwareItem: "Hardware_Legra_Terra_400_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.803",
 BomQty: 1
}
,{
 _id: 18917,
 in_HardwareItem: "Hardware_Legra_Terra_450_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.804",
 BomQty: 1
}
,{
 _id: 18918,
 in_HardwareItem: "Hardware_Legra_Terra_500_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.805",
 BomQty: 1
}
,{
 _id: 18919,
 in_HardwareItem: "Hardware_Legra_Terra_550_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.806",
 BomQty: 1
}
,{
 _id: 18920,
 in_HardwareItem: "Hardware_Legra_Terra_600_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.807",
 BomQty: 1
}
,{
 _id: 18921,
 in_HardwareItem: "Hardware_Legra_Terra_450_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.814",
 BomQty: 1
}
,{
 _id: 18922,
 in_HardwareItem: "Hardware_Legra_Terra_500_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.815",
 BomQty: 1
}
,{
 _id: 18923,
 in_HardwareItem: "Hardware_Legra_Terra_550_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.816",
 BomQty: 1
}
,{
 _id: 18924,
 in_HardwareItem: "Hardware_Legra_Terra_600_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.817",
 BomQty: 1
}
,{
 _id: 18925,
 in_HardwareItem: "Hardware_Legra_Terra_650_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.818",
 BomQty: 1
}
,{
 _id: 18926,
 in_HardwareItem: "Hardware_Legra_Orion_270_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.500",
 BomQty: 1
}
,{
 _id: 18927,
 in_HardwareItem: "Hardware_Legra_Orion_300_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.501",
 BomQty: 1
}
,{
 _id: 18928,
 in_HardwareItem: "Hardware_Legra_Orion_350_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.502",
 BomQty: 1
}
,{
 _id: 18929,
 in_HardwareItem: "Hardware_Legra_Orion_400_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.503",
 BomQty: 1
}
,{
 _id: 18930,
 in_HardwareItem: "Hardware_Legra_Orion_450_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.504",
 BomQty: 1
}
,{
 _id: 18931,
 in_HardwareItem: "Hardware_Legra_Orion_500_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.505",
 BomQty: 1
}
,{
 _id: 18932,
 in_HardwareItem: "Hardware_Legra_Orion_550_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.506",
 BomQty: 1
}
,{
 _id: 18933,
 in_HardwareItem: "Hardware_Legra_Orion_600_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.507",
 BomQty: 1
}
,{
 _id: 18934,
 in_HardwareItem: "Hardware_Legra_Orion_450_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.514",
 BomQty: 1
}
,{
 _id: 18935,
 in_HardwareItem: "Hardware_Legra_Orion_500_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.515",
 BomQty: 1
}
,{
 _id: 18936,
 in_HardwareItem: "Hardware_Legra_Orion_550_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.516",
 BomQty: 1
}
,{
 _id: 18937,
 in_HardwareItem: "Hardware_Legra_Orion_600_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.517",
 BomQty: 1
}
,{
 _id: 18938,
 in_HardwareItem: "Hardware_Legra_Orion_650_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.518",
 BomQty: 1
}
,{
 _id: 18939,
 in_HardwareItem: "Hardware_Legra_Inox_270_C_PTO_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.000",
 BomQty: 1
}
,{
 _id: 18940,
 in_HardwareItem: "Hardware_Legra_Inox_300_C_PTO_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.001",
 BomQty: 1
}
,{
 _id: 18941,
 in_HardwareItem: "Hardware_Legra_Inox_350_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.002",
 BomQty: 1
}
,{
 _id: 18942,
 in_HardwareItem: "Hardware_Legra_Inox_400_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.003",
 BomQty: 1
}
,{
 _id: 18943,
 in_HardwareItem: "Hardware_Legra_Inox_450_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.004",
 BomQty: 1
}
,{
 _id: 18944,
 in_HardwareItem: "Hardware_Legra_Inox_500_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.005",
 BomQty: 1
}
,{
 _id: 18945,
 in_HardwareItem: "Hardware_Legra_Inox_550_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.006",
 BomQty: 1
}
,{
 _id: 18946,
 in_HardwareItem: "Hardware_Legra_Inox_600_C_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.007",
 BomQty: 1
}
,{
 _id: 18947,
 in_HardwareItem: "Hardware_Legra_Inox_450_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.014",
 BomQty: 1
}
,{
 _id: 18948,
 in_HardwareItem: "Hardware_Legra_Inox_500_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.015",
 BomQty: 1
}
,{
 _id: 18949,
 in_HardwareItem: "Hardware_Legra_Inox_550_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.016",
 BomQty: 1
}
,{
 _id: 18950,
 in_HardwareItem: "Hardware_Legra_Inox_600_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.017",
 BomQty: 1
}
,{
 _id: 18951,
 in_HardwareItem: "Hardware_Legra_Inox_650_C_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.018",
 BomQty: 1
}
,{
 _id: 18952,
 in_HardwareItem: "Hardware_Legra_White_400_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.723",
 BomQty: 1
}
,{
 _id: 18953,
 in_HardwareItem: "Hardware_Legra_White_450_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.724",
 BomQty: 1
}
,{
 _id: 18954,
 in_HardwareItem: "Hardware_Legra_White_500_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.725",
 BomQty: 1
}
,{
 _id: 18955,
 in_HardwareItem: "Hardware_Legra_White_550_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.726",
 BomQty: 1
}
,{
 _id: 18956,
 in_HardwareItem: "Hardware_Legra_White_600_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.727",
 BomQty: 1
}
,{
 _id: 18957,
 in_HardwareItem: "Hardware_Legra_White_450_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.734",
 BomQty: 1
}
,{
 _id: 18958,
 in_HardwareItem: "Hardware_Legra_White_500_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.735",
 BomQty: 1
}
,{
 _id: 18959,
 in_HardwareItem: "Hardware_Legra_White_550_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.736",
 BomQty: 1
}
,{
 _id: 18960,
 in_HardwareItem: "Hardware_Legra_White_600_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.737",
 BomQty: 1
}
,{
 _id: 18961,
 in_HardwareItem: "Hardware_Legra_White_650_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.738",
 BomQty: 1
}
,{
 _id: 18962,
 in_HardwareItem: "Hardware_Legra_Terra_400_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.823",
 BomQty: 1
}
,{
 _id: 18963,
 in_HardwareItem: "Hardware_Legra_Terra_450_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.824",
 BomQty: 1
}
,{
 _id: 18964,
 in_HardwareItem: "Hardware_Legra_Terra_500_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.825",
 BomQty: 1
}
,{
 _id: 18965,
 in_HardwareItem: "Hardware_Legra_Terra_550_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.826",
 BomQty: 1
}
,{
 _id: 18966,
 in_HardwareItem: "Hardware_Legra_Terra_600_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.827",
 BomQty: 1
}
,{
 _id: 18967,
 in_HardwareItem: "Hardware_Legra_Terra_450_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.834",
 BomQty: 1
}
,{
 _id: 18968,
 in_HardwareItem: "Hardware_Legra_Terra_500_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.835",
 BomQty: 1
}
,{
 _id: 18969,
 in_HardwareItem: "Hardware_Legra_Terra_550_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.836",
 BomQty: 1
}
,{
 _id: 18970,
 in_HardwareItem: "Hardware_Legra_Terra_600_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.837",
 BomQty: 1
}
,{
 _id: 18971,
 in_HardwareItem: "Hardware_Legra_Terra_650_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.838",
 BomQty: 1
}
,{
 _id: 18972,
 in_HardwareItem: "Hardware_Legra_Orion_400_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.523",
 BomQty: 1
}
,{
 _id: 18973,
 in_HardwareItem: "Hardware_Legra_Orion_450_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.524",
 BomQty: 1
}
,{
 _id: 18974,
 in_HardwareItem: "Hardware_Legra_Orion_500_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.525",
 BomQty: 1
}
,{
 _id: 18975,
 in_HardwareItem: "Hardware_Legra_Orion_550_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.526",
 BomQty: 1
}
,{
 _id: 18976,
 in_HardwareItem: "Hardware_Legra_Orion_600_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.527",
 BomQty: 1
}
,{
 _id: 18977,
 in_HardwareItem: "Hardware_Legra_Orion_450_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.534",
 BomQty: 1
}
,{
 _id: 18978,
 in_HardwareItem: "Hardware_Legra_Orion_500_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.535",
 BomQty: 1
}
,{
 _id: 18979,
 in_HardwareItem: "Hardware_Legra_Orion_550_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.536",
 BomQty: 1
}
,{
 _id: 18980,
 in_HardwareItem: "Hardware_Legra_Orion_600_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.537",
 BomQty: 1
}
,{
 _id: 18981,
 in_HardwareItem: "Hardware_Legra_Orion_650_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.538",
 BomQty: 1
}
,{
 _id: 18982,
 in_HardwareItem: "Hardware_Legra_Inox_400_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.023",
 BomQty: 1
}
,{
 _id: 18983,
 in_HardwareItem: "Hardware_Legra_Inox_450_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.024",
 BomQty: 1
}
,{
 _id: 18984,
 in_HardwareItem: "Hardware_Legra_Inox_500_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.025",
 BomQty: 1
}
,{
 _id: 18985,
 in_HardwareItem: "Hardware_Legra_Inox_550_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.026",
 BomQty: 1
}
,{
 _id: 18986,
 in_HardwareItem: "Hardware_Legra_Inox_600_F",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.027",
 BomQty: 1
}
,{
 _id: 18987,
 in_HardwareItem: "Hardware_Legra_Inox_450_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.034",
 BomQty: 1
}
,{
 _id: 18988,
 in_HardwareItem: "Hardware_Legra_Inox_500_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.035",
 BomQty: 1
}
,{
 _id: 18989,
 in_HardwareItem: "Hardware_Legra_Inox_550_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.036",
 BomQty: 1
}
,{
 _id: 18990,
 in_HardwareItem: "Hardware_Legra_Inox_600_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.037",
 BomQty: 1
}
,{
 _id: 18991,
 in_HardwareItem: "Hardware_Legra_Inox_650_F_Heavy",
 Supplier: "Haefele",
 SupplierArticleNumber: "551.27.038",
 BomQty: 1
}
,{
 _id: 18992,
 in_HardwareItem: "Hardware_Legra_White_400_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.723",
 BomQty: 1
}
,{
 _id: 18993,
 in_HardwareItem: "Hardware_Legra_White_450_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.724",
 BomQty: 1
}
,{
 _id: 18994,
 in_HardwareItem: "Hardware_Legra_White_500_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.725",
 BomQty: 1
}
,{
 _id: 18995,
 in_HardwareItem: "Hardware_Legra_White_550_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.726",
 BomQty: 1
}
,{
 _id: 18996,
 in_HardwareItem: "Hardware_Legra_White_600_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.727",
 BomQty: 1
}
,{
 _id: 18997,
 in_HardwareItem: "Hardware_Legra_White_450_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.734",
 BomQty: 1
}
,{
 _id: 18998,
 in_HardwareItem: "Hardware_Legra_White_500_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.735",
 BomQty: 1
}
,{
 _id: 18999,
 in_HardwareItem: "Hardware_Legra_White_550_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.736",
 BomQty: 1
}
,{
 _id: 19000,
 in_HardwareItem: "Hardware_Legra_White_600_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.737",
 BomQty: 1
}
,{
 _id: 19001,
 in_HardwareItem: "Hardware_Legra_White_650_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.738",
 BomQty: 1
}
,{
 _id: 19002,
 in_HardwareItem: "Hardware_Legra_Terra_400_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.823",
 BomQty: 1
}
,{
 _id: 19003,
 in_HardwareItem: "Hardware_Legra_Terra_450_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.824",
 BomQty: 1
}
,{
 _id: 19004,
 in_HardwareItem: "Hardware_Legra_Terra_500_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.825",
 BomQty: 1
}
,{
 _id: 19005,
 in_HardwareItem: "Hardware_Legra_Terra_550_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.826",
 BomQty: 1
}
,{
 _id: 19006,
 in_HardwareItem: "Hardware_Legra_Terra_600_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.827",
 BomQty: 1
}
,{
 _id: 19007,
 in_HardwareItem: "Hardware_Legra_Terra_450_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.834",
 BomQty: 1
}
,{
 _id: 19008,
 in_HardwareItem: "Hardware_Legra_Terra_500_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.835",
 BomQty: 1
}
,{
 _id: 19009,
 in_HardwareItem: "Hardware_Legra_Terra_550_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.836",
 BomQty: 1
}
,{
 _id: 19010,
 in_HardwareItem: "Hardware_Legra_Terra_600_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.837",
 BomQty: 1
}
,{
 _id: 19011,
 in_HardwareItem: "Hardware_Legra_Terra_650_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.838",
 BomQty: 1
}
,{
 _id: 19012,
 in_HardwareItem: "Hardware_Legra_Orion_400_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.523",
 BomQty: 1
}
,{
 _id: 19013,
 in_HardwareItem: "Hardware_Legra_Orion_450_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.524",
 BomQty: 1
}
,{
 _id: 19014,
 in_HardwareItem: "Hardware_Legra_Orion_500_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.525",
 BomQty: 1
}
,{
 _id: 19015,
 in_HardwareItem: "Hardware_Legra_Orion_550_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.526",
 BomQty: 1
}
,{
 _id: 19016,
 in_HardwareItem: "Hardware_Legra_Orion_600_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.527",
 BomQty: 1
}
,{
 _id: 19017,
 in_HardwareItem: "Hardware_Legra_Orion_450_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.534",
 BomQty: 1
}
,{
 _id: 19018,
 in_HardwareItem: "Hardware_Legra_Orion_500_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.535",
 BomQty: 1
}
,{
 _id: 19019,
 in_HardwareItem: "Hardware_Legra_Orion_550_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.536",
 BomQty: 1
}
,{
 _id: 19020,
 in_HardwareItem: "Hardware_Legra_Orion_600_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.537",
 BomQty: 1
}
,{
 _id: 19021,
 in_HardwareItem: "Hardware_Legra_Orion_650_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.538",
 BomQty: 1
}
,{
 _id: 19022,
 in_HardwareItem: "Hardware_Legra_Inox_400_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.023",
 BomQty: 1
}
,{
 _id: 19023,
 in_HardwareItem: "Hardware_Legra_Inox_450_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.024",
 BomQty: 1
}
,{
 _id: 19024,
 in_HardwareItem: "Hardware_Legra_Inox_500_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.025",
 BomQty: 1
}
,{
 _id: 19025,
 in_HardwareItem: "Hardware_Legra_Inox_550_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.026",
 BomQty: 1
}
,{
 _id: 19026,
 in_HardwareItem: "Hardware_Legra_Inox_600_F_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.027",
 BomQty: 1
}
,{
 _id: 19027,
 in_HardwareItem: "Hardware_Legra_Inox_450_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.034",
 BomQty: 1
}
,{
 _id: 19028,
 in_HardwareItem: "Hardware_Legra_Inox_500_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.035",
 BomQty: 1
}
,{
 _id: 19029,
 in_HardwareItem: "Hardware_Legra_Inox_550_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.036",
 BomQty: 1
}
,{
 _id: 19030,
 in_HardwareItem: "Hardware_Legra_Inox_600_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.037",
 BomQty: 1
}
,{
 _id: 19031,
 in_HardwareItem: "Hardware_Legra_Inox_650_F_Heavy_PTO",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.73.038",
 BomQty: 1
}
,{
 _id: 19032,
 in_HardwareItem: "Hardware_Legra_Syncro_Small",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.80.183",
 BomQty: 1
}
,{
 _id: 19033,
 in_HardwareItem: "Hardware_Legra_Syncro_Large",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.80.187",
 BomQty: 1
}
,{
 _id: 19034,
 in_HardwareItem: "Hardware_Legra_Syncro_TipOn_Large",
 Supplier: "Haefele",
 SupplierArticleNumber: "550.60.119",
 BomQty: 1
}
,{
 _id: 19035,
 in_HardwareItem: "HardwareItemDowel03",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "267.82.020",
 BomQty: 1
}
,{
 _id: 19036,
 in_HardwareItem: "HardwareGlueDuststripGreyBrown",
 Supplier: "Haefele",
 SupplierArticleNumber: "239.91.105",
 BomQty: 1
}
,{
 _id: 19037,
 in_HardwareItem: "HardwarePushToOpenShortBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.353",
 BomQty: 1
}
,{
 _id: 19038,
 in_HardwareItem: "HardwarePushToOpenShortGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.553",
 BomQty: 1
}
,{
 _id: 19039,
 in_HardwareItem: "HardwarePushToOpenShortWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.753",
 BomQty: 1
}
,{
 _id: 19040,
 in_HardwareItem: "HardwarePushToOpenLongBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.354",
 BomQty: 1
}
,{
 _id: 19041,
 in_HardwareItem: "HardwarePushToOpenLongGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.554",
 BomQty: 1
}
,{
 _id: 19042,
 in_HardwareItem: "HardwarePushToOpenLongWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.754",
 BomQty: 1
}
,{
 _id: 19043,
 in_HardwareItem: "HardwareAdapterHousingShortBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.363",
 BomQty: 1
}
,{
 _id: 19044,
 in_HardwareItem: "HardwareAdapterHousingShortBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.353",
 BomQty: 1
}
,{
 _id: 19045,
 in_HardwareItem: "HardwareAdapterHousingShortGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.563",
 BomQty: 1
}
,{
 _id: 19046,
 in_HardwareItem: "HardwareAdapterHousingShortGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.553",
 BomQty: 1
}
,{
 _id: 19047,
 in_HardwareItem: "HardwareAdapterHousingShortWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.763",
 BomQty: 1
}
,{
 _id: 19048,
 in_HardwareItem: "HardwareAdapterHousingShortWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.753",
 BomQty: 1
}
,{
 _id: 19049,
 in_HardwareItem: "HardwareAdapterHousingLongBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.362",
 BomQty: 1
}
,{
 _id: 19050,
 in_HardwareItem: "HardwareAdapterHousingLongBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.354",
 BomQty: 1
}
,{
 _id: 19051,
 in_HardwareItem: "HardwareAdapterHousingLongGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.562",
 BomQty: 1
}
,{
 _id: 19052,
 in_HardwareItem: "HardwareAdapterHousingLongGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.554",
 BomQty: 1
}
,{
 _id: 19053,
 in_HardwareItem: "HardwareAdapterHousingLongWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.762",
 BomQty: 1
}
,{
 _id: 19054,
 in_HardwareItem: "HardwareAdapterHousingLongWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "356.04.754",
 BomQty: 1
}
,{
 _id: 19055,
 in_HardwareItem: "HardwareRafix01Nickel",
 Supplier: "Haefele",
 SupplierArticleNumber: "263.15.705",
 BomQty: 1
}
,{
 _id: 19056,
 in_HardwareItem: "HardwareRafix01Nickel",
 Supplier: "Haefele",
 SupplierArticleNumber: "263.20.847",
 BomQty: 1
}
,{
 _id: 19057,
 in_HardwareItem: "HardwareAdapterHousingLongBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19058,
 in_HardwareItem: "HardwareAdapterHousingLongGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19059,
 in_HardwareItem: "HardwareAdapterHousingLongWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19060,
 in_HardwareItem: "HardwareAdapterHousingShortBlack",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19061,
 in_HardwareItem: "HardwareAdapterHousingShortGrey",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19062,
 in_HardwareItem: "HardwareAdapterHousingShortWhite",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19063,
 in_HardwareItem: "Hardware_Aventos_HF_2700_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.517",
 BomQty: 1
}
,{
 _id: 19064,
 in_HardwareItem: "Hardware_Aventos_HF_11000_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.518",
 BomQty: 1
}
,{
 _id: 19065,
 in_HardwareItem: "Hardware_Aventos_HF_2700_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.717",
 BomQty: 1
}
,{
 _id: 19066,
 in_HardwareItem: "Hardware_Aventos_HF_11000_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.718",
 BomQty: 1
}
,{
 _id: 19067,
 in_HardwareItem: "Hardware_Aventos_HF_2700_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.537",
 BomQty: 1
}
,{
 _id: 19068,
 in_HardwareItem: "Hardware_Aventos_HF_11000_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.538",
 BomQty: 1
}
,{
 _id: 19069,
 in_HardwareItem: "Hardware_Aventos_HF_Connector",
 Supplier: "Haefele",
 SupplierArticleNumber: "342.22.070",
 BomQty: 1
}
,{
 _id: 19070,
 in_HardwareItem: "Hardware_Aventos_HF_Mech480",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.655",
 BomQty: 1
}
,{
 _id: 19071,
 in_HardwareItem: "Hardware_Aventos_HF_Mech600",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.657",
 BomQty: 1
}
,{
 _id: 19072,
 in_HardwareItem: "Hardware_Aventos_HF_Mech840",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.658",
 BomQty: 1
}
,{
 _id: 19073,
 in_HardwareItem: "Hardware_Aventos_HK_3500_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.553",
 BomQty: 1
}
,{
 _id: 19074,
 in_HardwareItem: "Hardware_Aventos_HK_1950_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.552",
 BomQty: 1
}
,{
 _id: 19075,
 in_HardwareItem: "Hardware_Aventos_HK_1200_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.551",
 BomQty: 1
}
,{
 _id: 19076,
 in_HardwareItem: "Hardware_Aventos_HK_420_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.550",
 BomQty: 1
}
,{
 _id: 19077,
 in_HardwareItem: "Hardware_Aventos_HK_3500_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.548",
 BomQty: 1
}
,{
 _id: 19078,
 in_HardwareItem: "Hardware_Aventos_HK_1950_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.547",
 BomQty: 1
}
,{
 _id: 19079,
 in_HardwareItem: "Hardware_Aventos_HK_1200_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.546",
 BomQty: 1
}
,{
 _id: 19080,
 in_HardwareItem: "Hardware_Aventos_HK_420_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.545",
 BomQty: 1
}
,{
 _id: 19081,
 in_HardwareItem: "Hardware_Aventos_HK_3500_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.578",
 BomQty: 1
}
,{
 _id: 19082,
 in_HardwareItem: "Hardware_Aventos_HK_1950_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.577",
 BomQty: 1
}
,{
 _id: 19083,
 in_HardwareItem: "Hardware_Aventos_HK_1200_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.576",
 BomQty: 1
}
,{
 _id: 19084,
 in_HardwareItem: "Hardware_Aventos_HK_420_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.85.575",
 BomQty: 1
}
,{
 _id: 19085,
 in_HardwareItem: "Hardware_Aventos_HK_Connector",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.790",
 BomQty: 1
}
,{
 _id: 19086,
 in_HardwareItem: "HardwareHinge120OverlayNoSpringSSForFHF",
 Supplier: "Haefele",
 SupplierArticleNumber: "342.81.400",
 BomQty: 1
}
,{
 _id: 19087,
 in_HardwareItem: "HardwareHinge120OverlayNoSpringSSForFHF",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19088,
 in_HardwareItem: "Hardware_Aventos_HS_350_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.727",
 BomQty: 1
}
,{
 _id: 19089,
 in_HardwareItem: "Hardware_Aventos_HS_480_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.728",
 BomQty: 1
}
,{
 _id: 19090,
 in_HardwareItem: "Hardware_Aventos_HS_800_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.729",
 BomQty: 1
}
,{
 _id: 19091,
 in_HardwareItem: "Hardware_Aventos_HS_350_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.527",
 BomQty: 1
}
,{
 _id: 19092,
 in_HardwareItem: "Hardware_Aventos_HS_480_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.528",
 BomQty: 1
}
,{
 _id: 19093,
 in_HardwareItem: "Hardware_Aventos_HS_800_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.529",
 BomQty: 1
}
,{
 _id: 19094,
 in_HardwareItem: "Hardware_Aventos_HS_350_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.587",
 BomQty: 1
}
,{
 _id: 19095,
 in_HardwareItem: "Hardware_Aventos_HS_480_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.588",
 BomQty: 1
}
,{
 _id: 19096,
 in_HardwareItem: "Hardware_Aventos_HS_800_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.84.589",
 BomQty: 1
}
,{
 _id: 19097,
 in_HardwareItem: "Hardware_Aventos_HL_300_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.757",
 BomQty: 1
}
,{
 _id: 19098,
 in_HardwareItem: "Hardware_Aventos_HL_390_White",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.758",
 BomQty: 1
}
,{
 _id: 19099,
 in_HardwareItem: "Hardware_Aventos_HL_300_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.557",
 BomQty: 1
}
,{
 _id: 19100,
 in_HardwareItem: "Hardware_Aventos_HL_390_Grey",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.558",
 BomQty: 1
}
,{
 _id: 19101,
 in_HardwareItem: "Hardware_Aventos_HL_300_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.567",
 BomQty: 1
}
,{
 _id: 19102,
 in_HardwareItem: "Hardware_Aventos_HL_390_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.568",
 BomQty: 1
}
,{
 _id: 19103,
 in_HardwareItem: "Hardware_Aventos_HL_Mech1",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.681",
 BomQty: 1
}
,{
 _id: 19104,
 in_HardwareItem: "Hardware_Aventos_HL_Mech2",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.682",
 BomQty: 1
}
,{
 _id: 19105,
 in_HardwareItem: "Hardware_Aventos_HL_Mech3",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.683",
 BomQty: 1
}
,{
 _id: 19106,
 in_HardwareItem: "Hardware_Aventos_HL_Mech4",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.86.684",
 BomQty: 1
}
,{
 _id: 19107,
 in_HardwareItem: "Hardware_DropDown_L",
 Supplier: "Haefele",
 SupplierArticleNumber: "365.46.061",
 BomQty: 1
}
,{
 _id: 19108,
 in_HardwareItem: "Hardware_DropDown_R",
 Supplier: "Haefele",
 SupplierArticleNumber: "365.46.060",
 BomQty: 1
}
,{
 _id: 19109,
 in_HardwareItem: "Hardware_Aventos_HKXS_3",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.95.703",
 BomQty: 1
}
,{
 _id: 19110,
 in_HardwareItem: "Hardware_Aventos_HKXS_2",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.95.702",
 BomQty: 1
}
,{
 _id: 19111,
 in_HardwareItem: "Hardware_Aventos_HKXS_1",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.95.701",
 BomQty: 1
}
,{
 _id: 19112,
 in_HardwareItem: "Hardware_Aventos_HKXS_Front",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.95.780",
 BomQty: 1
}
,{
 _id: 19113,
 in_HardwareItem: "Hardware_Aventos_HKXS_Carcase",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.95.790",
 BomQty: 1
}
,{
 _id: 19114,
 in_HardwareItem: "HardwareHingeCenterForFHF",
 Supplier: "Haefele",
 SupplierArticleNumber: "372.74.990",
 BomQty: 1
}
,{
 _id: 19115,
 in_HardwareItem: "HardwareMPHorizontalBL0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "342.22.060",
 BomQty: 1
}
,{
 _id: 19116,
 in_HardwareItem: "HardwareMPHorizontalBL3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "342.22.063",
 BomQty: 1
}
,{
 _id: 19117,
 in_HardwareItem: "HardwareHingeCenterForFHF",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19118,
 in_HardwareItem: "HardwareMPHorizontalBL0SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19119,
 in_HardwareItem: "HardwareMPHorizontalBL3SS",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19120,
 in_HardwareItem: "HardwareHingeForDF",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 2
}
,{
 _id: 19121,
 in_HardwareItem: "HardwareHingeForDF",
 Supplier: "Haefele",
 SupplierArticleNumber: "342.78.700",
 BomQty: 1
}
,{
 _id: 19122,
 in_HardwareItem: "HardwareBracket01",
 Supplier: "Haefele",
 SupplierArticleNumber: "260.28.004",
 BomQty: 1
}
,{
 _id: 19123,
 in_HardwareItem: "HardwareBracket01",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 4
}
,{
 _id: 19124,
 in_HardwareItem: "HardwarePlinthLegTriangularPressH100",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.38.340",
 BomQty: 1
}
,{
 _id: 19125,
 in_HardwareItem: "HardwarePlinthLegTriangularPressH100",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.353",
 BomQty: 1
}
,{
 _id: 19126,
 in_HardwareItem: "HardwarePlinthLegTriangularPressH120",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.38.340",
 BomQty: 1
}
,{
 _id: 19127,
 in_HardwareItem: "HardwarePlinthLegTriangularPressH120",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.354",
 BomQty: 1
}
,{
 _id: 19128,
 in_HardwareItem: "HardwarePlinthLegTriangularPressH150",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.38.340",
 BomQty: 1
}
,{
 _id: 19129,
 in_HardwareItem: "HardwarePlinthLegTriangularPressH150",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.355",
 BomQty: 1
}
,{
 _id: 19130,
 in_HardwareItem: "HardwarePlinthLegRectangularScrewH100",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.333",
 BomQty: 1
}
,{
 _id: 19131,
 in_HardwareItem: "HardwarePlinthLegRectangularScrewH100",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.353",
 BomQty: 1
}
,{
 _id: 19132,
 in_HardwareItem: "HardwarePlinthLegRectangularScrewH120",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.333",
 BomQty: 1
}
,{
 _id: 19133,
 in_HardwareItem: "HardwarePlinthLegRectangularScrewH120",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.354",
 BomQty: 1
}
,{
 _id: 19134,
 in_HardwareItem: "HardwarePlinthLegRectangularScrewH150",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.333",
 BomQty: 1
}
,{
 _id: 19135,
 in_HardwareItem: "HardwarePlinthLegRectangularScrewH150",
 Supplier: "Haefele",
 SupplierArticleNumber: "637.76.355",
 BomQty: 1
}
,{
 _id: 19136,
 in_HardwareItem: "HardwareKeku01",
 Supplier: "Haefele",
 SupplierArticleNumber: "262.50.359",
 BomQty: 1
}
,{
 _id: 19137,
 in_HardwareItem: "HardwareKeku01",
 Supplier: "Haefele",
 SupplierArticleNumber: "262.50.368",
 BomQty: 1
}
,{
 _id: 19138,
 in_HardwareItem: "HardwareKeku01",
 Supplier: "Haefele",
 SupplierArticleNumber: "017.91.043",
 BomQty: 4
}
,{
 _id: 19139,
 in_HardwareItem: "Hard_DH100_Black_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.321",
 BomQty: 1
}
,{
 _id: 19140,
 in_HardwareItem: "Hard_DH100_Black_320",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.322",
 BomQty: 1
}
,{
 _id: 19141,
 in_HardwareItem: "Hard_DH100_Black_64",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.320",
 BomQty: 1
}
,{
 _id: 19142,
 in_HardwareItem: "Hard_DH100_NickelPlated_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.101",
 BomQty: 1
}
,{
 _id: 19143,
 in_HardwareItem: "Hard_DH100_NickelPlated_320",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.102",
 BomQty: 1
}
,{
 _id: 19144,
 in_HardwareItem: "Hard_DH100_NickelPlated_64",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.100",
 BomQty: 1
}
,{
 _id: 19145,
 in_HardwareItem: "Hard_DH100_Tin_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.311",
 BomQty: 1
}
,{
 _id: 19146,
 in_HardwareItem: "Hard_DH100_Tin_320",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.312",
 BomQty: 1
}
,{
 _id: 19147,
 in_HardwareItem: "Hard_DH100_Tin_64",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.69.310",
 BomQty: 1
}
,{
 _id: 19148,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1060",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.101",
 BomQty: 1
}
,{
 _id: 19149,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1160",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.102",
 BomQty: 1
}
,{
 _id: 19150,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1260",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.103",
 BomQty: 1
}
,{
 _id: 19151,
 in_HardwareItem: "Hard_DH110_StainlessSteel_128",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.026",
 BomQty: 1
}
,{
 _id: 19152,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1360",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.104",
 BomQty: 1
}
,{
 _id: 19153,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1460",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.106",
 BomQty: 1
}
,{
 _id: 19154,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1560",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.107",
 BomQty: 1
}
,{
 _id: 19155,
 in_HardwareItem: "Hard_DH110_StainlessSteel_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.035",
 BomQty: 1
}
,{
 _id: 19156,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1760",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.108",
 BomQty: 1
}
,{
 _id: 19157,
 in_HardwareItem: "Hard_DH110_StainlessSteel_1960",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.109",
 BomQty: 1
}
,{
 _id: 19158,
 in_HardwareItem: "Hard_DH110_StainlessSteel_210",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.044",
 BomQty: 1
}
,{
 _id: 19159,
 in_HardwareItem: "Hard_DH110_StainlessSteel_260",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.045",
 BomQty: 1
}
,{
 _id: 19160,
 in_HardwareItem: "Hard_DH110_StainlessSteel_310",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.050",
 BomQty: 1
}
,{
 _id: 19161,
 in_HardwareItem: "Hard_DH110_StainlessSteel_360",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.064",
 BomQty: 1
}
,{
 _id: 19162,
 in_HardwareItem: "Hard_DH110_StainlessSteel_410",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.065",
 BomQty: 1
}
,{
 _id: 19163,
 in_HardwareItem: "Hard_DH110_StainlessSteel_460",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.075",
 BomQty: 1
}
,{
 _id: 19164,
 in_HardwareItem: "Hard_DH110_StainlessSteel_560",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.080",
 BomQty: 1
}
,{
 _id: 19165,
 in_HardwareItem: "Hard_DH110_StainlessSteel_660",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.085",
 BomQty: 1
}
,{
 _id: 19166,
 in_HardwareItem: "Hard_DH110_StainlessSteel_760",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.090",
 BomQty: 1
}
,{
 _id: 19167,
 in_HardwareItem: "Hard_DH110_StainlessSteel_860",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.095",
 BomQty: 1
}
,{
 _id: 19168,
 in_HardwareItem: "Hard_DH110_StainlessSteel_96",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.017",
 BomQty: 1
}
,{
 _id: 19169,
 in_HardwareItem: "Hard_DH110_StainlessSteel_960",
 Supplier: "Haefele",
 SupplierArticleNumber: "117.66.100",
 BomQty: 1
}
,{
 _id: 19170,
 in_HardwareItem: "Hard_DH120_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "112.02.105",
 BomQty: 1
}
,{
 _id: 19171,
 in_HardwareItem: "Hard_DH120_StainlessSteel",
 Supplier: "Haefele",
 SupplierArticleNumber: "155.01.486",
 BomQty: 1
}
,{
 _id: 19172,
 in_HardwareItem: "Hard_DH130_Black",
 Supplier: "Haefele",
 SupplierArticleNumber: "110.35.393",
 BomQty: 1
}
,{
 _id: 19173,
 in_HardwareItem: "Hard_DH130_BrassPlatedAntique",
 Supplier: "Haefele",
 SupplierArticleNumber: "110.35.392",
 BomQty: 1
}
,{
 _id: 19174,
 in_HardwareItem: "Hard_DH130_StainlessSteel",
 Supplier: "Haefele",
 SupplierArticleNumber: "110.35.394",
 BomQty: 1
}
,{
 _id: 19175,
 in_HardwareItem: "Hard_BH_128",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.251",
 BomQty: 1
}
,{
 _id: 19176,
 in_HardwareItem: "Hard_BH_160",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.252",
 BomQty: 1
}
,{
 _id: 19177,
 in_HardwareItem: "Hard_BH_192",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.253",
 BomQty: 1
}
,{
 _id: 19178,
 in_HardwareItem: "Hard_BH_224",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.254",
 BomQty: 1
}
,{
 _id: 19179,
 in_HardwareItem: "Hard_BH_288",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.255",
 BomQty: 1
}
,{
 _id: 19180,
 in_HardwareItem: "Hard_BH_320",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.256",
 BomQty: 1
}
,{
 _id: 19181,
 in_HardwareItem: "Hard_BH_352",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.257",
 BomQty: 1
}
,{
 _id: 19182,
 in_HardwareItem: "Hard_BH_448",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.258",
 BomQty: 1
}
,{
 _id: 19183,
 in_HardwareItem: "Hard_BH_480",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.259",
 BomQty: 1
}
,{
 _id: 19184,
 in_HardwareItem: "Hard_BH_560",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.260",
 BomQty: 1
}
,{
 _id: 19185,
 in_HardwareItem: "Hard_BH_640",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.261",
 BomQty: 1
}
,{
 _id: 19186,
 in_HardwareItem: "Hard_BH_96",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.250",
 BomQty: 1
}
,{
 _id: 19187,
 in_HardwareItem: "Hard_BH_960",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.262",
 BomQty: 1
}
,{
 _id: 19188,
 in_HardwareItem: "Hard_RH_128",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.381",
 BomQty: 1
}
,{
 _id: 19189,
 in_HardwareItem: "Hard_RH_160",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.382",
 BomQty: 1
}
,{
 _id: 19190,
 in_HardwareItem: "Hard_RH_192",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.383",
 BomQty: 1
}
,{
 _id: 19191,
 in_HardwareItem: "Hard_RH_224",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.384",
 BomQty: 1
}
,{
 _id: 19192,
 in_HardwareItem: "Hard_RH_288",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.385",
 BomQty: 1
}
,{
 _id: 19193,
 in_HardwareItem: "Hard_RH_320",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.386",
 BomQty: 1
}
,{
 _id: 19194,
 in_HardwareItem: "Hard_RH_352",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.387",
 BomQty: 1
}
,{
 _id: 19195,
 in_HardwareItem: "Hard_RH_448",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.388",
 BomQty: 1
}
,{
 _id: 19196,
 in_HardwareItem: "Hard_RH_560",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.389",
 BomQty: 1
}
,{
 _id: 19197,
 in_HardwareItem: "Hard_RH_660",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.390",
 BomQty: 1
}
,{
 _id: 19198,
 in_HardwareItem: "Hard_RH_760",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.391",
 BomQty: 1
}
,{
 _id: 19199,
 in_HardwareItem: "Hard_RH_96",
 Supplier: "DemoSupplier",
 SupplierArticleNumber: "155.01.380",
 BomQty: 1
}
,{
 _id: 19200,
 in_HardwareItem: "Hard_DH60_Black_128",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.425",
 BomQty: 1
}
,{
 _id: 19201,
 in_HardwareItem: "Hard_DH60_Black_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.426",
 BomQty: 1
}
,{
 _id: 19202,
 in_HardwareItem: "Hard_DH60_BrassPlatedAntique_128",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.525",
 BomQty: 1
}
,{
 _id: 19203,
 in_HardwareItem: "Hard_DH60_BrassPlatedAntique_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.526",
 BomQty: 1
}
,{
 _id: 19204,
 in_HardwareItem: "Hard_DH60_ChromedPolished_128",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.225",
 BomQty: 1
}
,{
 _id: 19205,
 in_HardwareItem: "Hard_DH60_ChromedPolished_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.226",
 BomQty: 1
}
,{
 _id: 19206,
 in_HardwareItem: "Hard_DH60_NickelPlated_128",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.625",
 BomQty: 1
}
,{
 _id: 19207,
 in_HardwareItem: "Hard_DH60_NickelPlated_160",
 Supplier: "Haefele",
 SupplierArticleNumber: "106.62.626",
 BomQty: 1
}
];
