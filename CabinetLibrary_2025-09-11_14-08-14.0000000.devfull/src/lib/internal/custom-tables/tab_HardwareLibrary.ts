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

export interface cti_tab_HardwareLibrary {
  readonly in_Supplier? : string;
  readonly in_SupplierArticleNumber? : string;
}

export interface ctm_tab_HardwareLibrary {
}

export interface cto_tab_HardwareLibrary extends ctm_tab_HardwareLibrary {
  readonly _id : number;
  readonly Description? : string;
  readonly Description2? : string;
  readonly Length : number;
  readonly Width : number;
  readonly Thickness : number;
  readonly Weight? : number;
  readonly UnitOfWeight? : string;
  readonly Color? : string;
  readonly Category? : string;
}

export interface ICT_tab_HardwareLibrary
extends cti_tab_HardwareLibrary, cto_tab_HardwareLibrary {}

export class ct2_tab_HardwareLibrary {

public findExactly(
     in_Supplier: string|undefined,
     in_SupplierArticleNumber: string|undefined,
): cto_tab_HardwareLibrary | undefined {
  const res = ct_tab_HardwareLibrary.find((p) => 
p.in_Supplier === in_Supplier
 && p.in_SupplierArticleNumber === in_SupplierArticleNumber
);
return res;
}

public find(
predicate: (value: cti_tab_HardwareLibrary) => boolean
): cto_tab_HardwareLibrary | undefined {
  for (let index = 0; index < ct_tab_HardwareLibrary.length; index++){
    const element = ct_tab_HardwareLibrary[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HardwareLibrary :ICT_tab_HardwareLibrary[] = [
{
 _id: 745,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4002S-TS",
 Description: "Zargenset Legrabox N 400",
 Description2: "Terraschwarz",
 Length: 400,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 746,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4002S-OG",
 Description: "Zargenset Legrabox N 400",
 Description2: "Oriongrau",
 Length: 400,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 747,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4002S-PS",
 Description: "Zargenset Legrabox N 400",
 Description2: "Polarsilber",
 Length: 400,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 748,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4002S-SW",
 Description: "Zargenset Legrabox N 400",
 Description2: "Seidenweiss",
 Length: 400,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 749,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4502S-TS",
 Description: "Zargenset Legrabox N 450",
 Description2: "Terraschwarz",
 Length: 450,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 750,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4502S-OG",
 Description: "Zargenset Legrabox N 450",
 Description2: "Oriongrau",
 Length: 450,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 751,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4502S-PS",
 Description: "Zargenset Legrabox N 450",
 Description2: "Polarsilber",
 Length: 450,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 752,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N4502S-SW",
 Description: "Zargenset Legrabox N 450",
 Description2: "Seidenweiss",
 Length: 450,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 753,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5002S-TS",
 Description: "Zargenset Legrabox N 500",
 Description2: "Terraschwarz",
 Length: 500,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 754,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5002S-OG",
 Description: "Zargenset Legrabox N 500",
 Description2: "Oriongrau",
 Length: 500,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 755,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5002S-PS",
 Description: "Zargenset Legrabox N 500",
 Description2: "Polarsilber",
 Length: 500,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 756,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5002S-SW",
 Description: "Zargenset Legrabox N 500",
 Description2: "Seidenweiss",
 Length: 500,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 757,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5502S-TS",
 Description: "Zargenset Legrabox N 550",
 Description2: "Terraschwarz",
 Length: 550,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 758,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5502S-OG",
 Description: "Zargenset Legrabox N 550",
 Description2: "Oriongrau",
 Length: 550,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 759,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5502S-PS",
 Description: "Zargenset Legrabox N 550",
 Description2: "Polarsilber",
 Length: 550,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 760,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770N5502S-SW",
 Description: "Zargenset Legrabox N 550",
 Description2: "Seidenweiss",
 Length: 550,
 Width: 0,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 761,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M3002S-TS",
 Description: "Zargenset Legrabox M 300",
 Description2: "Terraschwarz",
 Length: 300,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 762,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M3002S-OG",
 Description: "Zargenset Legrabox M 300",
 Description2: "Oriongrau",
 Length: 300,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 763,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M3002S-PS",
 Description: "Zargenset Legrabox M 300",
 Description2: "Polarsilber",
 Length: 300,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 764,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M3002S-SW",
 Description: "Zargenset Legrabox M 300",
 Description2: "Seidenweiss",
 Length: 300,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 765,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4002S-TS",
 Description: "Zargenset Legrabox M 400",
 Description2: "Terraschwarz",
 Length: 400,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 766,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4002S-OG",
 Description: "Zargenset Legrabox M 400",
 Description2: "Oriongrau",
 Length: 400,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 767,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4002S-PS",
 Description: "Zargenset Legrabox M 400",
 Description2: "Polarsilber",
 Length: 400,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 768,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4002S-SW",
 Description: "Zargenset Legrabox M 400",
 Description2: "Seidenweiss",
 Length: 400,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 769,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4502S-TS",
 Description: "Zargenset Legrabox M 450",
 Description2: "Terraschwarz",
 Length: 450,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 770,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4502S-OG",
 Description: "Zargenset Legrabox M 450",
 Description2: "Oriongrau",
 Length: 450,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 771,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4502S-PS",
 Description: "Zargenset Legrabox M 450",
 Description2: "Polarsilber",
 Length: 450,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 772,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M4502S-SW",
 Description: "Zargenset Legrabox M 450",
 Description2: "Seidenweiss",
 Length: 450,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 773,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5002S-TS",
 Description: "Zargenset Legrabox M 500",
 Description2: "Terraschwarz",
 Length: 500,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 774,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5002S-OG",
 Description: "Zargenset Legrabox M 500",
 Description2: "Oriongrau",
 Length: 500,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 775,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5002S-PS",
 Description: "Zargenset Legrabox M 500",
 Description2: "Polarsilber",
 Length: 500,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 776,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5002S-SW",
 Description: "Zargenset Legrabox M 500",
 Description2: "Seidenweiss",
 Length: 500,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 777,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5502S-TS",
 Description: "Zargenset Legrabox M 550",
 Description2: "Terraschwarz",
 Length: 550,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 778,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5502S-OG",
 Description: "Zargenset Legrabox M 550",
 Description2: "Oriongrau",
 Length: 550,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 779,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5502S-PS",
 Description: "Zargenset Legrabox M 550",
 Description2: "Polarsilber",
 Length: 550,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 780,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770M5502S-SW",
 Description: "Zargenset Legrabox M 550",
 Description2: "Seidenweiss",
 Length: 550,
 Width: 0,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 781,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C3002S-TS",
 Description: "Zargenset Legrabox C 300",
 Description2: "Terraschwarz",
 Length: 300,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 782,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C3002S-OG",
 Description: "Zargenset Legrabox C 300",
 Description2: "Oriongrau",
 Length: 300,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 783,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C3002S-PS",
 Description: "Zargenset Legrabox C 300",
 Description2: "Polarsilber",
 Length: 300,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 784,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C3002S-SW",
 Description: "Zargenset Legrabox C 300",
 Description2: "Seidenweiss",
 Length: 300,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 785,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4002S-TS",
 Description: "Zargenset Legrabox C 400",
 Description2: "Terraschwarz",
 Length: 400,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 786,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4002S-OG",
 Description: "Zargenset Legrabox C 400",
 Description2: "Oriongrau",
 Length: 400,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 787,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4002S-PS",
 Description: "Zargenset Legrabox C 400",
 Description2: "Polarsilber",
 Length: 400,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 788,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4002S-SW",
 Description: "Zargenset Legrabox C 400",
 Description2: "Seidenweiss",
 Length: 400,
 Width: 0,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 789,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770F4002S-TS",
 Description: "Zargenset Legrabox F 400",
 Description2: "Terraschwarz",
 Length: 400,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 790,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770F4002S-OG",
 Description: "Zargenset Legrabox F 400",
 Description2: "Oriongrau",
 Length: 400,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 791,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770F4002S-PS",
 Description: "Zargenset Legrabox F 400",
 Description2: "Polarsilber",
 Length: 400,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 792,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770F4002S-SW",
 Description: "Zargenset Legrabox F 400",
 Description2: "Seidenweiss",
 Length: 400,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 793,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4502S-TS",
 Description: "Zargenset Legrabox F 450",
 Description2: "Terraschwarz",
 Length: 450,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 794,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4502S-OG",
 Description: "Zargenset Legrabox F 450",
 Description2: "Oriongrau",
 Length: 450,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 795,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4502S-PS",
 Description: "Zargenset Legrabox F 450",
 Description2: "Polarsilber",
 Length: 450,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 796,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C4502S-SW",
 Description: "Zargenset Legrabox F 450",
 Description2: "Seidenweiss",
 Length: 450,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 797,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5002S-TS",
 Description: "Zargenset Legrabox F 500",
 Description2: "Terraschwarz",
 Length: 500,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 798,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5002S-OG",
 Description: "Zargenset Legrabox F 500",
 Description2: "Oriongrau",
 Length: 500,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 799,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5002S-PS",
 Description: "Zargenset Legrabox F 500",
 Description2: "Polarsilber",
 Length: 500,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 800,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5002S-SW",
 Description: "Zargenset Legrabox F 500",
 Description2: "Seidenweiss",
 Length: 500,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 801,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5502S-TS",
 Description: "Zargenset Legrabox F 550",
 Description2: "Terraschwarz",
 Length: 550,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 802,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5502S-OG",
 Description: "Zargenset Legrabox F 550",
 Description2: "Oriongrau",
 Length: 550,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 803,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5502S-PS",
 Description: "Zargenset Legrabox F 550",
 Description2: "Polarsilber",
 Length: 550,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 804,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "770C5502S-SW",
 Description: "Zargenset Legrabox F 550",
 Description2: "Seidenweiss",
 Length: 550,
 Width: 0,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 805,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "750.3001S",
 Description: "Fuehrung 300 40kg",
 Description2: "",
 Length: 300,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 806,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "750.4001S",
 Description: "Fuehrung 400 40kg",
 Description2: "",
 Length: 400,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 807,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "750.4501S",
 Description: "Fuehrung 450 40kg",
 Description2: "",
 Length: 450,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 808,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "750.5001S",
 Description: "Fuehrung 500 40kg",
 Description2: "",
 Length: 500,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 809,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "750.5501S",
 Description: "Fuehrung 550 40kg",
 Description2: "",
 Length: 550,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 810,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "753.4501S",
 Description: "Fuehrung 450 70kg",
 Description2: "",
 Length: 450,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 811,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "753.5001S",
 Description: "Fuehrung 500 70kg",
 Description2: "",
 Length: 500,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 812,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "753.5501S",
 Description: "Fuehrung 550 70kg",
 Description2: "",
 Length: 550,
 Width: 72,
 Thickness: 50,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 813,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7N000S",
 Description: "Rueckwandhalter N",
 Description2: "",
 Length: 10,
 Width: 20,
 Thickness: 80,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 814,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7M000S",
 Description: "Rueckwandhalter M",
 Description2: "",
 Length: 10,
 Width: 20,
 Thickness: 106,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 815,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7C000S",
 Description: "Rueckwandhalter C",
 Description2: "",
 Length: 10,
 Width: 20,
 Thickness: 193,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 816,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7F000S",
 Description: "Rueckwandhalter F",
 Description2: "",
 Length: 10,
 Width: 20,
 Thickness: 257,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 817,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7N7002",
 Description: "Frontbefestigung N",
 Description2: "",
 Length: 10,
 Width: 6,
 Thickness: 45,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 818,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7M70E2",
 Description: "Frontbefestigung M",
 Description2: "",
 Length: 10,
 Width: 6,
 Thickness: 55,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 819,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7C70E2",
 Description: "Frontbefestigung C",
 Description2: "",
 Length: 10,
 Width: 6,
 Thickness: 110,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 820,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "ZF7F70E2",
 Description: "Frontbefestigung F",
 Description2: "",
 Length: 10,
 Width: 6,
 Thickness: 170,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 821,
 in_Supplier: "Blum",
 in_SupplierArticleNumber: "4711",
 Description: "",
 Description2: "",
 Length: 35,
 Width: 35,
 Thickness: 10,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 822,
 in_Supplier: "Camar",
 in_SupplierArticleNumber: "80702E1RV",
 Description: "Hanger system",
 Description2: "",
 Length: 92,
 Width: 25,
 Thickness: 55,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "",
 Category: ""
}
,{
 _id: 823,
 in_Supplier: "Homag",
 in_SupplierArticleNumber: "DemoHandle50Upper",
 Description: "Upper Handlestrip 50",
 Description2: "Color Green",
 Length: 300,
 Width: 46,
 Thickness: 19,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 824,
 in_Supplier: "Homag",
 in_SupplierArticleNumber: "DemoHandle50Bottom",
 Description: "BottomHandlestrip 50",
 Description2: "Color Green",
 Length: 300,
 Width: 17,
 Thickness: 19,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 825,
 in_Supplier: "Homag",
 in_SupplierArticleNumber: "DemoHandle60Bottom",
 Description: "Bottom Handlestrip 60",
 Description2: "Color Blue",
 Length: 0,
 Width: 17,
 Thickness: 19,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 826,
 in_Supplier: "Homag",
 in_SupplierArticleNumber: "DemoHandle60Upper",
 Description: "Right Handlestrip 60",
 Description2: "Color Blue",
 Length: 0,
 Width: 46,
 Thickness: 19,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 827,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.380",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 136,
 Width: 35,
 Thickness: 10,
 Weight: 0.135,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 828,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.381",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 168,
 Width: 35,
 Thickness: 10,
 Weight: 2,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 829,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.382",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 200,
 Width: 35,
 Thickness: 10,
 Weight: 0.155,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 830,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.383",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 232,
 Width: 35,
 Thickness: 10,
 Weight: 0.165,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 831,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.384",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 264,
 Width: 35,
 Thickness: 10,
 Weight: 0.175,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 832,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.385",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 328,
 Width: 35,
 Thickness: 10,
 Weight: 0.135,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 833,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.386",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 360,
 Width: 35,
 Thickness: 10,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 834,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.387",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 392,
 Width: 35,
 Thickness: 10,
 Weight: 0.275,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 835,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.388",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 488,
 Width: 35,
 Thickness: 10,
 Weight: 0.35,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 836,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.389",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 600,
 Width: 35,
 Thickness: 10,
 Weight: 0.45,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 837,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.390",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 700,
 Width: 35,
 Thickness: 10,
 Weight: 0.5,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 838,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.391",
 Description: "Relining handle",
 Description2: "Stainless steel, matt brushed",
 Length: 800,
 Width: 35,
 Thickness: 10,
 Weight: 0.6,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 839,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.250",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 108,
 Width: 35,
 Thickness: 12,
 Weight: 0.135,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 840,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.251",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 140,
 Width: 35,
 Thickness: 12,
 Weight: 0.165,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 841,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.252",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 172,
 Width: 35,
 Thickness: 12,
 Weight: 0.2,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 842,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.253",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 204,
 Width: 35,
 Thickness: 12,
 Weight: 0.225,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 843,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.254",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 236,
 Width: 35,
 Thickness: 12,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 844,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.255",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 300,
 Width: 35,
 Thickness: 12,
 Weight: 0.3,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 845,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.256",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 332,
 Width: 35,
 Thickness: 12,
 Weight: 0.325,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 846,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.257",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 364,
 Width: 35,
 Thickness: 12,
 Weight: 0.35,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 847,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.258",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 460,
 Width: 35,
 Thickness: 12,
 Weight: 0.4,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 848,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.259",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 492,
 Width: 35,
 Thickness: 12,
 Weight: 0.425,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 849,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.260",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 572,
 Width: 35,
 Thickness: 12,
 Weight: 0.135,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 850,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.261",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 652,
 Width: 35,
 Thickness: 12,
 Weight: 0.135,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 851,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.262",
 Description: "Bracket handle",
 Description2: "Stainless steel, matt brushed",
 Length: 972,
 Width: 35,
 Thickness: 12,
 Weight: 0.135,
 UnitOfWeight: "kg",
 Color: "StainlessSteelMattBrushed",
 Category: "Handle"
}
,{
 _id: 852,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.001",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 295,
 Width: 37,
 Thickness: 19,
 Weight: 0.15,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 853,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.002",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 395,
 Width: 37,
 Thickness: 19,
 Weight: 0.16,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 854,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.003",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 445,
 Width: 37,
 Thickness: 19,
 Weight: 0.17,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 855,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.004",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 495,
 Width: 37,
 Thickness: 19,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 856,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.005",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 595,
 Width: 37,
 Thickness: 19,
 Weight: 0.19,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 857,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.006",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 795,
 Width: 37,
 Thickness: 19,
 Weight: 0.2,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 858,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.007",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 895,
 Width: 37,
 Thickness: 19,
 Weight: 0.21,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 859,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.008",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 998,
 Width: 37,
 Thickness: 19,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 860,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.009",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 1195,
 Width: 37,
 Thickness: 19,
 Weight: 0.23,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 861,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.012",
 Description: "Stripe1",
 Description2: "stainless steel color, anodized",
 Length: 2500,
 Width: 37,
 Thickness: 19,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 862,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.38.925_B",
 Description: "Stripe 2",
 Description2: "Silver",
 Length: 2500,
 Width: 21.5,
 Thickness: 18,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 863,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.38.925",
 Description: "Stripe with 30° angle",
 Description2: "Aluminium,  silver anodised",
 Length: 2500,
 Width: 18,
 Thickness: 21.5,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Edelstahl",
 Category: ""
}
,{
 _id: 864,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "155.01.632",
 Description: "Stripe with c -profil",
 Description2: "Stainless steel coloured, anodised ",
 Length: 2500,
 Width: 35,
 Thickness: 20.5,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 865,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.001_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 295,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 866,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.002_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 395,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 867,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.003_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 445,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 868,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.004_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 495,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 869,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.005_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 595,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 870,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.006_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 795,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 871,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.007_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 895,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 872,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.008_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 995,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 873,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.009_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 1195,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 874,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "126.26.012_Ang",
 Description: "Stripe amgular",
 Description2: "Stainless steel coloured, anodised ",
 Length: 2500,
 Width: 3,
 Thickness: 37,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: ""
}
,{
 _id: 875,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.81.302",
 Description: "PlinthLegMountingPlate",
 Description2: "Plastic, Press",
 Length: 95,
 Width: 78,
 Thickness: 36,
 Weight: 0.5,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 876,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.81.311",
 Description: "PlinthLegLengthAdapter",
 Description2: "Plastic, High 80",
 Length: 45,
 Width: 45,
 Thickness: 78,
 Weight: 0.4,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 877,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.81.321",
 Description: "PlinthLegADjustableLeg",
 Description2: "Plastic",
 Length: 78,
 Width: 78,
 Thickness: 59,
 Weight: 0.4,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 878,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.333",
 Description: "Bef.Platte Axilo 78 schw.viereck.schrb.",
 Description2: "Befestigungsplatte, für Sockelsystem Häfele AXILO® 78",
 Length: 97,
 Width: 79,
 Thickness: 25,
 Weight: 300,
 UnitOfWeight: "gram",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 879,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.352",
 Description: "Rohr Axilo 78 Kst.schw.m.Verstellt. 80mm",
 Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
 Length: 79,
 Width: 79,
 Thickness: 77,
 Weight: 0.225,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 880,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.424",
 Description: "Schallentkopplung Axilo 78 hellgrau",
 Description2: "Schallentkopplung, für Sockelsystem Häfele AXILO® 78",
 Length: 55,
 Width: 55,
 Thickness: 18,
 Weight: 0.05,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "PlinthAndLeg"
}
,{
 _id: 881,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.38.340",
 Description: "Dreieckgleit.Kst.schw.95x95x25 EP",
 Description2: "Befestigungsplatte, für Sockelsystem Häfele AXILO® 78",
 Length: 100,
 Width: 100,
 Thickness: 47,
 Weight: 0.28,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 882,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.422",
 Description: "Distanzring Axilo 78 schwarz",
 Description2: "Distanzring, für Sockelsystem Häfele AXILO® 78",
 Length: 52,
 Width: 52,
 Thickness: 18,
 Weight: 0.4,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 883,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.423",
 Description: "Kappe D 38 Axilo 78 hellgrau",
 Description2: "ABS-Einsatz, für Sockelsystem Häfele AXILO® 78",
 Length: 38.2,
 Width: 38.2,
 Thickness: 10.5,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "PlinthAndLeg"
}
,{
 _id: 884,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.351",
 Description: "Rohr Axilo 78 Kst.schw.m.Verstellt. 60mm",
 Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
 Length: 79,
 Width: 79,
 Thickness: 58,
 Weight: 0.2,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 885,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.353",
 Description: "Rohr Axilo 78 Kst.schw.m.Verstellt.100mm",
 Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
 Length: 79,
 Width: 79,
 Thickness: 97,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 886,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.354",
 Description: "Rohr Axilo 78 Kst.schw.m.Verstellt.125mm",
 Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
 Length: 79,
 Width: 79,
 Thickness: 122,
 Weight: 0.275,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 887,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "634.74.400",
 Description: "Furniture leg, without height adjustment",
 Description2: "Load capacity 50 kg",
 Length: 60,
 Width: 60,
 Thickness: 50,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 888,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "634.74.401",
 Description: "Furniture leg, without height adjustment",
 Description2: "Load capacity 50 kg",
 Length: 60,
 Width: 60,
 Thickness: 80,
 Weight: 0.35,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 889,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "634.74.402",
 Description: "Furniture leg, without height adjustment",
 Description2: "Load capacity 50 kg",
 Length: 60,
 Width: 60,
 Thickness: 100,
 Weight: 0.45,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 890,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "634.74.403",
 Description: "Furniture leg, without height adjustment",
 Description2: "Load capacity 50 kg",
 Length: 60,
 Width: 60,
 Thickness: 150,
 Weight: 0.55,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 891,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "634.74.404",
 Description: "Furniture leg, without height adjustment",
 Description2: "Load capacity 50 kg",
 Length: 60,
 Width: 60,
 Thickness: 200,
 Weight: 0.65,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 892,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "634.48.055",
 Description: "Möbelfuß, ohne Höheneinstellung, mit Platte",
 Description2: "",
 Length: 139,
 Width: 139,
 Thickness: 250,
 Weight: 0.825,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 893,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "281.41.907",
 Description: "Bodenträger zum Einstecken für Holz- und Glasböden ",
 Description2: "Stahl mit Kunststoffkappe",
 Length: 8,
 Width: 7,
 Thickness: 7,
 Weight: 50,
 UnitOfWeight: "gram",
 Color: "Grey",
 Category: "Shelf support"
}
,{
 _id: 894,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "282.43.905",
 Description: "Bodenträger zum Einstecken für Holzböden ",
 Description2: "for drill diameter 5 mm",
 Length: 8,
 Width: 7,
 Thickness: 7,
 Weight: 40,
 UnitOfWeight: "gram",
 Color: "Bright galvanised",
 Category: "Shelf support"
}
,{
 _id: 895,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "282.24.720",
 Description: "Bodenträger zum Einstecken für Holzböden ",
 Description2: "for drill diameter 5 mm with plug-in spigot",
 Length: 14,
 Width: 9,
 Thickness: 10.5,
 Weight: 55,
 UnitOfWeight: "gram",
 Color: "NickelPlated",
 Category: "Shelf support"
}
,{
 _id: 896,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "282.24.710",
 Description: "Bodenträger zum Einstecken für Holzböden ",
 Description2: "for drill diameter 5 mm",
 Length: 14,
 Width: 9,
 Thickness: 10.5,
 Weight: 50,
 UnitOfWeight: "gram",
 Color: "NickelPlated",
 Category: "Shelf support"
}
,{
 _id: 897,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "262.27.920",
 Description: "Bolz.Minifix S100 verz.B24/5/8",
 Description2: "Verbindungsbolzen, Häfele Minifix® S100, für Bohrloch-Ø 5 mm, mit Spezialgewinde",
 Length: 32,
 Width: 7,
 Thickness: 7,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "CN",
 Category: "MiniFix"
}
,{
 _id: 898,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "262.26.533",
 Description: "Geh.Minifix 15/16 Zi.nick.",
 Description2: "Verbindergehäuse, Minifix® 15, Zinkdruckguss, ohne Abdeckrand",
 Length: 12,
 Width: 12,
 Thickness: 15,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "CN",
 Category: "MiniFix"
}
,{
 _id: 899,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "262.24.751",
 Description: "Abdeckkappe Minifix 15 weiss",
 Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
 Length: 17,
 Width: 17,
 Thickness: 4,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "MiniFix"
}
,{
 _id: 900,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "262.24.359",
 Description: "Abdeckkappe Minifix 15 schwarz",
 Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
 Length: 17,
 Width: 17,
 Thickness: 4,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: "MiniFix"
}
,{
 _id: 901,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "262.24.555",
 Description: "Abdeckkappe Minifix 15 hgrau",
 Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
 Length: 17,
 Width: 17,
 Thickness: 4,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "LightGrey",
 Category: "MiniFix"
}
,{
 _id: 902,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "262.24.550",
 Description: "Abdeckkappe Minifix 15 dgrau",
 Description2: "Abdeckkappe, für Häfele Minifix® 15 ohne Abdeckrand, ab Holzdicke 15 mm",
 Length: 17,
 Width: 17,
 Thickness: 4,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "DarkGrey",
 Category: "MiniFix"
}
,{
 _id: 903,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "267.82.227",
 Description: "Holzduebel Buche        8x27mm",
 Description2: "Holzdübel, Buche",
 Length: 27,
 Width: 8,
 Thickness: 8,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Beech",
 Category: "Dowel"
}
,{
 _id: 904,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "267.82.240",
 Description: "Holzduebel Buche        8x40mm",
 Description2: "Holzdübel, Buche",
 Length: 40,
 Width: 8,
 Thickness: 8,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Beech",
 Category: "Dowel"
}
,{
 _id: 905,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.320",
 Description: "Griff Zi.vern.schw.geb. 74x32mm",
 Description2: "Häfele Design Model H2190, schwarz, vernickelt, gebürstet, Maß A: 74 mm, Maß C: 64 mm",
 Length: 74,
 Width: 32,
 Thickness: 34,
 Weight: 0.13,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 906,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.100",
 Description: "Griff Zi.vern.geb. 74x32mm",
 Description2: "Häfele Design Model H2190, vernickelt, gebürstet, Maß A: 74 mm, Maß C: 64 mm",
 Length: 74,
 Width: 32,
 Thickness: 34,
 Weight: 0.13,
 UnitOfWeight: "kg",
 Color: "zinc-plated",
 Category: "Handle"
}
,{
 _id: 907,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.310",
 Description: "Griff verz.antik 74x32mm",
 Description2: "Häfele Design Model H2190, verzinnt, antik, Maß A: 74 mm, Maß C: 64 mm",
 Length: 74,
 Width: 32,
 Thickness: 34,
 Weight: 0.13,
 UnitOfWeight: "kg",
 Color: "zinc-plated",
 Category: "Handle"
}
,{
 _id: 908,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.321",
 Description: "Griff Zi.vern.schw.geb. 170x32mm",
 Description2: "Häfele Design Model H2190, schwarz, vernickelt, gebürstet, Maß A: 170 mm, Maß C: 160 mm",
 Length: 170,
 Width: 32,
 Thickness: 34,
 Weight: 0.2,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 909,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.101",
 Description: "Griff Zi.vern.geb. 170x32mm",
 Description2: "Häfele Design Model H2190, vernickelt, gebürstet, Maß A: 170 mm, Maß C: 160 mm",
 Length: 170,
 Width: 32,
 Thickness: 34,
 Weight: 0.2,
 UnitOfWeight: "kg",
 Color: "zinc-plated",
 Category: "Handle"
}
,{
 _id: 910,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.311",
 Description: "Griff verz.antik 170x32mm",
 Description2: "Häfele Design Model H2190, verzinnt, antik, Maß A: 170 mm, Maß C: 160 mm",
 Length: 170,
 Width: 32,
 Thickness: 34,
 Weight: 0.2,
 UnitOfWeight: "kg",
 Color: "zinc-plated",
 Category: "Handle"
}
,{
 _id: 911,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.322",
 Description: "Griff Zi.vern.schw.geb. 329x32mm",
 Description2: "Häfele Design Model H2190, schwarz, vernickelt, gebürstet, Maß A: 329 mm, Maß C: 320 mm",
 Length: 320,
 Width: 32,
 Thickness: 34,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 912,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.102",
 Description: "Griff Zi.vern.geb. 329x32mm",
 Description2: "Häfele Design Model H2190, vernickelt, gebürstet, Maß A: 329 mm, Maß C: 320 mm",
 Length: 320,
 Width: 32,
 Thickness: 34,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "zinc-plated",
 Category: "Handle"
}
,{
 _id: 913,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.69.312",
 Description: "Griff verz.antik 329x32mm",
 Description2: "Häfele Design Model H2190, verzinnt, antik, Maß A: 329 mm, Maß C: 320 mm",
 Length: 320,
 Width: 32,
 Thickness: 34,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "zinc-plated",
 Category: "Handle"
}
,{
 _id: 914,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "155.01.486",
 Description: "Knopf Edelst.matt      20x30mm",
 Description2: "Möbelknopf, aus Edelstahl, zylindrisch, mit Griffmulde",
 Length: 20,
 Width: 30,
 Thickness: 20,
 Weight: 0.12,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 915,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.017",
 Description: "Griff Edelst.matt  12/136x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 136,
 Width: 35,
 Thickness: 12,
 Weight: 0.17,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 916,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.026",
 Description: "Griff Edelst.matt  12/168x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 168,
 Width: 35,
 Thickness: 12,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 917,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.035",
 Description: "Griff Edelst.matt  12/200x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 200,
 Width: 35,
 Thickness: 12,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 918,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.044",
 Description: "Griff Edelst.matt  12/232x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 232,
 Width: 35,
 Thickness: 12,
 Weight: 0.19,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 919,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.045",
 Description: "Griff Edelst.matt  12/250x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 250,
 Width: 35,
 Thickness: 12,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 920,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.050",
 Description: "Griff Edelst.matt  12/300x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 300,
 Width: 35,
 Thickness: 12,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 921,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.053",
 Description: "Griff Edelst.matt  12/328x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 328,
 Width: 35,
 Thickness: 12,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 922,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.055",
 Description: "Griff Edelst.matt  12/350x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 350,
 Width: 35,
 Thickness: 12,
 Weight: 0.23,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 923,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.062",
 Description: "Griff Edelst.matt  12/392x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 392,
 Width: 35,
 Thickness: 12,
 Weight: 0.24,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 924,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.064",
 Description: "Griff Edelst.matt  12/400x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 400,
 Width: 35,
 Thickness: 12,
 Weight: 0.28,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 925,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.065",
 Description: "Griff Edelst.matt  12/450x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 450,
 Width: 35,
 Thickness: 12,
 Weight: 0.29,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 926,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.071",
 Description: "Griff Edelst.matt  12/488x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 488,
 Width: 35,
 Thickness: 12,
 Weight: 0.3,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 927,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.075",
 Description: "Griff Edelst.matt  12/500x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 500,
 Width: 35,
 Thickness: 12,
 Weight: 0.33,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 928,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.080",
 Description: "Griff Edelst.matt  12/600x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 600,
 Width: 35,
 Thickness: 12,
 Weight: 0.39,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 929,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.085",
 Description: "Griff Edelst.matt  12/700x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 700,
 Width: 35,
 Thickness: 12,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 930,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.090",
 Description: "Griff Edelst.matt  12/800x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 800,
 Width: 35,
 Thickness: 12,
 Weight: 0.5,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 931,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.095",
 Description: "Griff Edelst.matt  12/900x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 900,
 Width: 35,
 Thickness: 12,
 Weight: 0.55,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 932,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "282.24.728",
 Description: "Bodentraeger Zi.vern. 5/5/6mm",
 Description2: "Bodenträger, zum Einstecken in Bohrloch-Ø 5 mm, Zinkdruckguss",
 Length: 20.5,
 Width: 8,
 Thickness: 21,
 Weight: 40,
 UnitOfWeight: "gram",
 Color: "vernickelt",
 Category: "Shelf support"
}
,{
 _id: 933,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "282.24.717",
 Description: "Bodentraeger Zi.vern. 5/1mm",
 Description2: "Bodenträger, zum Einstecken in Bohrloch-Ø 5 mm, Zinkdruckguss",
 Length: 20,
 Width: 9,
 Thickness: 13,
 Weight: 55,
 UnitOfWeight: "gram",
 Color: "vernickelt",
 Category: "Shelf support"
}
,{
 _id: 934,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "282.25.717",
 Description: "Bodentraeger Zi.vern. 3/1,5mm",
 Description2: "Bodenträger, zum Einstecken in Bohrloch-Ø 3 mm, Zinkdruckguss",
 Length: 21,
 Width: 9,
 Thickness: 16,
 Weight: 50,
 UnitOfWeight: "gram",
 Color: "vernickelt",
 Category: "Shelf support"
}
,{
 _id: 935,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.17.602",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, half overlay mounting/twin mounting",
 Description2: "from interior width 70 mm, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 936,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "017.91.043",
 Description: "Chipboard screw, Hospa Jet, countersunk head, TS T-star drive, fully threaded",
 Description2: "For universal use, TS20, length: 15 mm, thread Ø 3.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Screws"
}
,{
 _id: 937,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.17.603",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, inset mounting",
 Description2: "from interior width 70 mm, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 938,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.17.600",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, full overlay mounting",
 Description2: "from interior width 70 mm, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 939,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.15.403",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, half overlay/twin mounting",
 Description2: "for wooden doors, for standard applications, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 940,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.15.405",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, inset mounting",
 Description2: "for wooden doors, for standard applications, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 941,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.15.401",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, full overlay mounting",
 Description2: "for wooden doors, for standard applications, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 942,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.29.221",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 155°, half overlay mounting/twin mounting",
 Description2: "For wooden doors, for cabinets with internal drawer boxes or pull-out shelves, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 943,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.29.217",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 155°, full overlay mounting",
 Description2: "For wooden doors, for cabinets with internal drawer boxes or pull-out shelves, Cup fixing: For screw fixing, drilling pattern: 45/9.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 944,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.07.702",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 165°, half overlay mounting/twin mounting",
 Description2: "For cabinets with internal drawer boxes or pull-out shelves, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 945,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.07.703",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 165°, inset mounting",
 Description2: "For cabinets with internal drawer boxes or pull-out shelves, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 946,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.07.700",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 165°, full overlay mounting",
 Description2: "For cabinets with internal drawer boxes or pull-out shelves, cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 947,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.80.528",
 Description: "Cruciform mounting plate, Häfele Metalla 510 A, steel, with chipboard screws, edge distance 37 mm",
 Description2: "slide-on system, pre-mounted Euro screws, distance D: 0 mm, steel, distance from edge 37 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 948,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.80.555",
 Description: "Cruciform mounting plate, Häfele Metalla 510 A, steel, with chipboard screws, edge distance 37 mm",
 Description2: "slide-on system, pre-mounted Euro screws, distance D: 3 mm, steel, distance from edge 37 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 949,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.80.582",
 Description: "Cruciform mounting plate, Häfele Metalla 510 A, steel, with chipboard screws, edge distance 37 mm",
 Description2: "slide-on system, pre-mounted Euro screws, distance D: 6 mm, steel, distance from edge 37 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 950,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.71.500",
 Description: "Cruciform mounting plate, Häfele Metalla 510 SM, zinc alloy, with chipboard screws",
 Description2: "quick fixing system, fixing with chipboard screws, depth adjustable via eccentric, Distance D: 0 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 951,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.71.503",
 Description: "Cruciform mounting plate, Häfele Metalla 510 SM, zinc alloy, with chipboard screws",
 Description2: "quick fixing system, fixing with chipboard screws, depth adjustable via eccentric, Distance D: 3 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 952,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.71.506",
 Description: "Cruciform mounting plate, Häfele Metalla 510 SM, zinc alloy, with chipboard screws",
 Description2: "quick fixing system, fixing with chipboard screws, depth adjustable via eccentric, Distance D: 6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 953,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.67.000",
 Description: "Mounting plate, Häfele Metalla 510 SM, zinc alloy, height adjustable via eccentric",
 Description2: "quick fixing system, pre-mounted Euro screws, depth adjustable via eccentric, distance D: 0 mm, drilling depth: 11.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 954,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.67.003",
 Description: "Mounting plate, Häfele Metalla 510 SM, zinc alloy, height adjustable via eccentric",
 Description2: "quick fixing system, pre-mounted Euro screws, depth adjustable via eccentric, distance D: 3 mm, drilling depth: 11.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 955,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.67.006",
 Description: "Mounting plate, Häfele Metalla 510 SM, zinc alloy, height adjustable via eccentric",
 Description2: "quick fixing system, pre-mounted Euro screws, depth adjustable via eccentric, distance D: 6 mm, drilling depth: 11.5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 956,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "329.11.705",
 Description: "Concealed hinge, Häfele Metalla 510 A/SM 110°, for blind corner applications",
 Description2: "cup fixing: For screw fixing, drilling pattern: 48/6 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 957,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.701",
 Description: "Cover cap, For cabinet hanger for base unit",
 Description2: "white, mounting: Right hand",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "CoverCap"
}
,{
 _id: 958,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.702",
 Description: "Cover cap, For cabinet hanger for base unit",
 Description2: "white, mounting: Left hand",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "CoverCap"
}
,{
 _id: 959,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.770",
 Description: "Cover cap, For cabinet hanger, for wall unit",
 Description2: "Visible inside the cabinet, Mounting: Right, white",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "CoverCap"
}
,{
 _id: 960,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.771",
 Description: "Cover cap, For cabinet hanger, for wall unit",
 Description2: "Visible inside the cabinet, Mounting: Left, white",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "CoverCap"
}
,{
 _id: 961,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.702",
 Description: "Cabinet hanger, Wall unit, for screw fixing",
 Description2: "Visible inside the cabinet, Left hand mounting",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hanger"
}
,{
 _id: 962,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.703",
 Description: "Cabinet hanger, Wall unit, for screw fixing",
 Description2: "Visible inside the cabinet, Right hand mounting",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hanger"
}
,{
 _id: 963,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.03.937",
 Description: "Cabinet hanger for wall unit, For screw fixing and press fitting",
 Description2: "Not visible inside the cabinet, Mounting: Right, base plate: Long",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Hanger"
}
,{
 _id: 964,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.03.938",
 Description: "Cabinet hanger for wall unit, For screw fixing and press fitting",
 Description2: "Not visible inside the cabinet, Mounting: Left, base plate: Long",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Hanger"
}
,{
 _id: 965,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.901",
 Description: "Cabinet hanger for base unit, For press fitting",
 Description2: "Steel, galvanized, mounting: Right hand, base unit hanger",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "Hanger"
}
,{
 _id: 966,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.902",
 Description: "Cabinet hanger for base unit, For press fitting",
 Description2: "Steel, galvanized, mounting: Left hand, base unit hanger",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "Hanger"
}
,{
 _id: 967,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.980",
 Description: "Cabinet hanger, Wall unit, for press fitting",
 Description2: "With hook-off protection, visible inside the cabinet, Right hand mounting",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Hanger"
}
,{
 _id: 968,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.981",
 Description: "Cabinet hanger, Wall unit, for press fitting",
 Description2: "With hook-off protection, visible inside the cabinet, Left hand mounting",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Hanger"
}
,{
 _id: 969,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.09.910",
 Description: "Wall rail, Steel, length 1,250 mm",
 Description2: "For screw fixing, for cabinet hanger, Zinc plated",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "WallPlate"
}
,{
 _id: 970,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "051.48.001",
 Description: "Wall plug, fischer Duopower, plastic",
 Description2: "6 x 30 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: "WallPlug"
}
,{
 _id: 971,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "017.91.143",
 Description: "Chipboard screw, Hospa Jet, countersunk head, TS T-star drive, fully threaded",
 Description2: "For universal use, TS20, length: 35 mm, thread ⌀ 5 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Screws"
}
,{
 _id: 972,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.989",
 Description: "Wall plate, For cabinet hanger with hook-off protection, for wall unit",
 Description2: "Visible inside the cabinet, Length: 60 mm",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "WallPlate"
}
,{
 _id: 973,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.40.991",
 Description: "Wall plate, With hook-off protection, for cabinet hanger for base unit",
 Description2: "galvanized",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "WallPlate"
}
,{
 _id: 974,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.703",
 Description: "Zargenset Legrabox pure N 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 975,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.704",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 976,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.705",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 977,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.706",
 Description: "Zargenset Legrabox pure N 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 978,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.803",
 Description: "Zargenset Legrabox pure N 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 979,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.804",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 980,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.805",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 981,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.806",
 Description: "Zargenset Legrabox pure N 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 982,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.503",
 Description: "Zargenset Legrabox pure N 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 983,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.504",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 984,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.505",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 985,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.506",
 Description: "Zargenset Legrabox pure N 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 986,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.004",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 987,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.005",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 988,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.713",
 Description: "Zargenset Legrabox pure N 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 989,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.714",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 990,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.715",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 991,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.716",
 Description: "Zargenset Legrabox pure N 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 992,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.813",
 Description: "Zargenset Legrabox pure N 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 993,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.814",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 994,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.815",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 995,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.816",
 Description: "Zargenset Legrabox pure N 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 996,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.513",
 Description: "Zargenset Legrabox pure N 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 997,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.514",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 998,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.515",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 999,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.516",
 Description: "Zargenset Legrabox pure N 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1000,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.014",
 Description: "Zargenset Legrabox pure N 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1001,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.015",
 Description: "Zargenset Legrabox pure N 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 66,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1002,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.720",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1003,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.721",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1004,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.722",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1005,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.723",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1006,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.724",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1007,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.725",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1008,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.726",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1009,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.727",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1010,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.734",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1011,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.735",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1012,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.736",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1013,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.737",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1014,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.738",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1015,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.820",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1016,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.821",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1017,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.822",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1018,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.823",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1019,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.824",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1020,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.825",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1021,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.826",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1022,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.827",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1023,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.834",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1024,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.835",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1025,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.836",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1026,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.837",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1027,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.838",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1028,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.520",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1029,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.521",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1030,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.522",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1031,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.523",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1032,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.524",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1033,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.525",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1034,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.526",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1035,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.527",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1036,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.534",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1037,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.535",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1038,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.536",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1039,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.537",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1040,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.538",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1041,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.020",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1042,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.021",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1043,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.022",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1044,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.023",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1045,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.024",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1046,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.025",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1047,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.026",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1048,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.027",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1049,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.034",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1050,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.035",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1051,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.036",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1052,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.037",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1053,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.038",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1054,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.720",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1055,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.721",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1056,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.722",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1057,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.723",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1058,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.724",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1059,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.725",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1060,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.726",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1061,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.727",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1062,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.734",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1063,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.735",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1064,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.736",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1065,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.737",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1066,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.738",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1067,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.820",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1068,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.821",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1069,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.822",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1070,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.823",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1071,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.824",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1072,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.825",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1073,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.826",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1074,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.827",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1075,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.834",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1076,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.835",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1077,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.836",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1078,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.837",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1079,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.838",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1080,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.520",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1081,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.521",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1082,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.522",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1083,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.523",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1084,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.524",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1085,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.525",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1086,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.526",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1087,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.527",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1088,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.534",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1089,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.535",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1090,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.536",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1091,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.537",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1092,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.538",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1093,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.020",
 Description: "Zargenset Legrabox pure M 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1094,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.021",
 Description: "Zargenset Legrabox pure M 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1095,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.022",
 Description: "Zargenset Legrabox pure M 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1096,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.023",
 Description: "Zargenset Legrabox pure M 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1097,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.024",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1098,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.025",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1099,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.026",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1100,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.027",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1101,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.034",
 Description: "Zargenset Legrabox pure M 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1102,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.035",
 Description: "Zargenset Legrabox pure M 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1103,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.036",
 Description: "Zargenset Legrabox pure M 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1104,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.037",
 Description: "Zargenset Legrabox pure M 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1105,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.038",
 Description: "Zargenset Legrabox pure M 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 90,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1106,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.741",
 Description: "Zargenset Legrabox pure K 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1107,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.742",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1108,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.743",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1109,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.744",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1110,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.745",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1111,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.746",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1112,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.747",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1113,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.754",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1114,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.755",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1115,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.756",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1116,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.757",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1117,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.841",
 Description: "Zargenset Legrabox pure K 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1118,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.842",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1119,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.843",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1120,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.844",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1121,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.845",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1122,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.846",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1123,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.847",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1124,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.854",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1125,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.855",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1126,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.856",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1127,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.857",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1128,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.541",
 Description: "Zargenset Legrabox pure K 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1129,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.542",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1130,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.543",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1131,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.544",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1132,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.545",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1133,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.546",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1134,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.547",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1135,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.554",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1136,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.555",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1137,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.556",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1138,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.557",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1139,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.042",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1140,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.043",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1141,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.044",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1142,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.045",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1143,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.046",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1144,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.054",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1145,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.055",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1146,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.26.056",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1147,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.741",
 Description: "Zargenset Legrabox pure K 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1148,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.742",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1149,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.743",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1150,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.744",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1151,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.745",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1152,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.746",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1153,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.747",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1154,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.754",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1155,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.755",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1156,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.756",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1157,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.757",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1158,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.841",
 Description: "Zargenset Legrabox pure K 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1159,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.842",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1160,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.843",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1161,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.844",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1162,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.845",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1163,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.846",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1164,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.847",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1165,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.854",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1166,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.855",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1167,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.856",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1168,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.857",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1169,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.541",
 Description: "Zargenset Legrabox pure K 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1170,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.542",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1171,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.543",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1172,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.544",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1173,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.545",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1174,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.546",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1175,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.547",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1176,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.554",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1177,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.555",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1178,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.556",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1179,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.557",
 Description: "Zargenset Legrabox pure K 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1180,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.042",
 Description: "Zargenset Legrabox pure K 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1181,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.043",
 Description: "Zargenset Legrabox pure K 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1182,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.044",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1183,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.045",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1184,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.046",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1185,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.054",
 Description: "Zargenset Legrabox pure K 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1186,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.055",
 Description: "Zargenset Legrabox pure K 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1187,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.72.056",
 Description: "Zargenset Legrabox pure K 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 128,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1188,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.700",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1189,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.701",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1190,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.702",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1191,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.703",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1192,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.704",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1193,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.705",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1194,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.706",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1195,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.707",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1196,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.714",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1197,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.715",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1198,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.716",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1199,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.717",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1200,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.718",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1201,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.800",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1202,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.801",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1203,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.802",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1204,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.803",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1205,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.804",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1206,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.805",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1207,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.806",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1208,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.807",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1209,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.814",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1210,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.815",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1211,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.816",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1212,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.817",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1213,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.818",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1214,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.500",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1215,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.501",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1216,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.502",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1217,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.503",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1218,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.504",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1219,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.505",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1220,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.506",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1221,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.507",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1222,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.514",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1223,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.515",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1224,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.516",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1225,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.517",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1226,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.518",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1227,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.000",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1228,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.001",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1229,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.002",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1230,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.003",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1231,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.004",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1232,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.005",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1233,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.006",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1234,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.007",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1235,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.014",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1236,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.015",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1237,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.016",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1238,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.017",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1239,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.018",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1240,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.700",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1241,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.701",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1242,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.702",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1243,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.703",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1244,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.704",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1245,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.705",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1246,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.706",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1247,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.707",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1248,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.714",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1249,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.715",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1250,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.716",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1251,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.717",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1252,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.718",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1253,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.800",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1254,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.801",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1255,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.802",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1256,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.803",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1257,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.804",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1258,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.805",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1259,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.806",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1260,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.807",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1261,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.814",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1262,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.815",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1263,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.816",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1264,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.817",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1265,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.818",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1266,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.500",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1267,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.501",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1268,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.502",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1269,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.503",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1270,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.504",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1271,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.505",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1272,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.506",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1273,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.507",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1274,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.514",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1275,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.515",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1276,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.516",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1277,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.517",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1278,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.518",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1279,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.000",
 Description: "Zargenset Legrabox pure C 270 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 270,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1280,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.001",
 Description: "Zargenset Legrabox pure C 300 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 300,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1281,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.002",
 Description: "Zargenset Legrabox pure C 350 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 350,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1282,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.003",
 Description: "Zargenset Legrabox pure C 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1283,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.004",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1284,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.005",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1285,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.006",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1286,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.007",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1287,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.014",
 Description: "Zargenset Legrabox pure C 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1288,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.015",
 Description: "Zargenset Legrabox pure C 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1289,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.016",
 Description: "Zargenset Legrabox pure C 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1290,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.017",
 Description: "Zargenset Legrabox pure C 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1291,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.018",
 Description: "Zargenset Legrabox pure C 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 186,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1292,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.723",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1293,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.724",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1294,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.725",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1295,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.726",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1296,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.727",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1297,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.734",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1298,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.735",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1299,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.736",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1300,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.737",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1301,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.738",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1302,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.823",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1303,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.824",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1304,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.825",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1305,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.826",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1306,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.827",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1307,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.834",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1308,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.835",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1309,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.836",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1310,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.837",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1311,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.838",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1312,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.523",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1313,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.524",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1314,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.525",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1315,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.526",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1316,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.527",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1317,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.534",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1318,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.535",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1319,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.536",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1320,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.537",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1321,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.538",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1322,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.023",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1323,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.024",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1324,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.025",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1325,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.026",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1326,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.027",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1327,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.034",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1328,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.035",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1329,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.036",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1330,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.037",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1331,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "551.27.038",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg BLOMOTION S",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1332,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.723",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1333,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.724",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1334,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.725",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1335,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.726",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1336,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.727",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1337,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.734",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1338,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.735",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1339,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.736",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1340,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.737",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1341,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.738",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "seidenweiß",
 Category: "Drawerbox"
}
,{
 _id: 1342,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.823",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1343,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.824",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1344,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.825",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1345,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.826",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1346,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.827",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1347,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.834",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1348,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.835",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1349,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.836",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1350,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.837",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1351,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.838",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "carbonschwarz",
 Category: "Drawerbox"
}
,{
 _id: 1352,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.523",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1353,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.524",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1354,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.525",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1355,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.526",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1356,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.527",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1357,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.534",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1358,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.535",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1359,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.536",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1360,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.537",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1361,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.538",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Drawerbox"
}
,{
 _id: 1362,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.023",
 Description: "Zargenset Legrabox pure F 400 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 400,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1363,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.024",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1364,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.025",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1365,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.026",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1366,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.027",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 40 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 40,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1367,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.034",
 Description: "Zargenset Legrabox pure F 450 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 450,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1368,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.035",
 Description: "Zargenset Legrabox pure F 500 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 500,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1369,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.036",
 Description: "Zargenset Legrabox pure F 550 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 550,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1370,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.037",
 Description: "Zargenset Legrabox pure F 600 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 600,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1371,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.73.038",
 Description: "Zargenset Legrabox pure F 650 mm",
 Description2: "Tragkraft 70 kg TIP-ON",
 Length: 650,
 Width: 240,
 Thickness: 65,
 Weight: 70,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Drawerbox"
}
,{
 _id: 1372,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.054",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe N Expando",
 Length: 8,
 Width: 30,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1373,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.051",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe N Schrauben",
 Length: 8,
 Width: 30,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1374,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.064",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe M Expando",
 Length: 8,
 Width: 40,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1375,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.061",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe M Schrauben",
 Length: 8,
 Width: 40,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1376,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.074",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe K Expando",
 Length: 8,
 Width: 65,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1377,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.071",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe K Schrauben",
 Length: 8,
 Width: 65,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1378,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.084",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe C Expando",
 Length: 8,
 Width: 110,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1379,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.081",
 Description: "Frontbefestigung Legrabox",
 Description2: "Höhe C Schrauben",
 Length: 8,
 Width: 110,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Drawerbox"
}
,{
 _id: 1380,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.75.590",
 Description: "Front- und Bodenbefestigung",
 Description2: "für Schubkasten blum Legrabox",
 Length: 48,
 Width: 42,
 Thickness: 13,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Drawerbox"
}
,{
 _id: 1381,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.710",
 Description: "Cabinet hanger, Wall unit, for screw fixing",
 Description2: "Visible inside the cabinet, galvanized, mounting: Right hand",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Hanger"
}
,{
 _id: 1382,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.711",
 Description: "Cabinet hanger, Wall unit, for screw fixing",
 Description2: "Visible inside the cabinet, galvanized, mounting: Left hand",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "zinc-plated",
 Category: "Hanger"
}
,{
 _id: 1383,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.781",
 Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
 Description2: "Visible inside the cabinet, cover cap, white, RAL 9010, mounting: Left hand",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "CoverCap"
}
,{
 _id: 1384,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.780",
 Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
 Description2: "Visible inside the cabinet, cover cap, white, RAL 9010, mounting: Right hand",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "CoverCap"
}
,{
 _id: 1385,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.521",
 Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
 Description2: "Visible inside the cabinet, Grey, RAL 7040, mounting: Left",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "CoverCap"
}
,{
 _id: 1386,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "290.02.520",
 Description: "Cover cap, Clip on, For cabinet hanger for wall unit",
 Description2: "Visible inside the cabinet, Grey, RAL 7040, mounting: Right",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "CoverCap"
}
,{
 _id: 1387,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.80.183",
 Description: "Seitenstabilisierung Legrabox",
 Description2: "für breite Auszüge kurz",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Drawerbox"
}
,{
 _id: 1388,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.80.187",
 Description: "Seitenstabilisierung Legrabox",
 Description2: "für breite Auszüge lang",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Drawerbox"
}
,{
 _id: 1389,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "550.60.119",
 Description: "Synchronisierungsstange",
 Description2: "Tip-On",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Drawerbox"
}
,{
 _id: 1390,
 in_Supplier: "DemoSupplier",
 in_SupplierArticleNumber: "267.82.020",
 Description: "Holzduebel Buche        5x20mm",
 Description2: "Holzdübel, Buche",
 Length: 20,
 Width: 5,
 Thickness: 5,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Beech",
 Category: "Dowel"
}
,{
 _id: 1391,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "239.91.105",
 Description: "Strike moulding, sealing profile, for gluing",
 Description2: "Color Grey Brown",
 Length: 2500,
 Width: 21,
 Thickness: 1.5,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "grey brown",
 Category: "Duststrip"
}
,{
 _id: 1392,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.353",
 Description: "Push Catch",
 Description2: "Short version with magnet, black",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: "PushToOpen"
}
,{
 _id: 1393,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.553",
 Description: "Push Catch",
 Description2: "Short version with magnet, grey",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "PushToOpen"
}
,{
 _id: 1394,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.753",
 Description: "Push Catch",
 Description2: "Short version with magnet, white",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "PushToOpen"
}
,{
 _id: 1395,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.354",
 Description: "Push Catch",
 Description2: "Long version with magnet, black",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: "PushToOpen"
}
,{
 _id: 1396,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.554",
 Description: "Push Catch",
 Description2: "Long version with magnet, grey",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "PushToOpen"
}
,{
 _id: 1397,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.754",
 Description: "Push Catch",
 Description2: "Long version with magnet, white",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "PushToOpen"
}
,{
 _id: 1398,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.363",
 Description: "Adapter Plate",
 Description2: "Short version, straight, black",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: "PushToOpen"
}
,{
 _id: 1399,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.563",
 Description: "Adapter Plate",
 Description2: "Short version, straight, grey",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "PushToOpen"
}
,{
 _id: 1400,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.763",
 Description: "Adapter Plate",
 Description2: "Short version, straight, white",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "PushToOpen"
}
,{
 _id: 1401,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.362",
 Description: "Adapter Plate",
 Description2: "Long version, straight, black",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: "PushToOpen"
}
,{
 _id: 1402,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.562",
 Description: "Adapter Plate",
 Description2: "Long version, straight, grey",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Grey",
 Category: "PushToOpen"
}
,{
 _id: 1403,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "356.04.762",
 Description: "Adapter Plate",
 Description2: "Long version, straight, white",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "White",
 Category: "PushToOpen"
}
,{
 _id: 1404,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "263.15.705",
 Description: "Rafix20Housing19mmNickelPlated",
 Description2: "Nickel Plated",
 Length: 22,
 Width: 24,
 Thickness: 14.2,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Rafix"
}
,{
 _id: 1405,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "263.20.847",
 Description: "RafixConnectionBolt11x5mm",
 Description2: "Nickel Plated",
 Length: 20,
 Width: 6.5,
 Thickness: 6.5,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Rafix"
}
,{
 _id: 1406,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.517",
 Description: "Aventos HF Set Euroschrauben 2700",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 260,
 Width: 105,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1407,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.518",
 Description: "Aventos HF Set Euroschrauben 10000",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 260,
 Width: 105,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1408,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.717",
 Description: "Aventos HF Set Euroschrauben 2700",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 260,
 Width: 105,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1409,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.718",
 Description: "Aventos HF Set Euroschrauben 10000",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 260,
 Width: 105,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1410,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.537",
 Description: "Aventos HF Set Euroschrauben 2700",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 260,
 Width: 105,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1411,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.538",
 Description: "Aventos HF Set Euroschrauben 10000",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 260,
 Width: 105,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1412,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "342.22.070",
 Description: "Montageplatte Aventos",
 Description2: "zum Einpressen",
 Length: 18.6,
 Width: 43.7,
 Thickness: 26.6,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Fliplift"
}
,{
 _id: 1413,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.655",
 Description: "Aventos HF Hebelarm",
 Description2: "480 - 610mm Korpushöhe",
 Length: 19,
 Width: 463,
 Thickness: 43,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1414,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.657",
 Description: "Aventos HF Hebelarm",
 Description2: "600 - 910mm Korpushöhe",
 Length: 19,
 Width: 573,
 Thickness: 43,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1415,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.658",
 Description: "Aventos HF Hebelarm",
 Description2: "840 - 1200mm Korpushöhe",
 Length: 19,
 Width: 843,
 Thickness: 43,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1416,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.553",
 Description: "Aventos HK Set Euroschrauben 3200",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1417,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.552",
 Description: "Aventos HK Set Euroschrauben 1730",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1418,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.551",
 Description: "Aventos HK Set Euroschrauben 980",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1419,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.550",
 Description: "Aventos HK Set Euroschrauben 420",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1420,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.548",
 Description: "Aventos HK Set Euroschrauben 3200",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1421,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.547",
 Description: "Aventos HK Set Euroschrauben 1730",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1422,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.546",
 Description: "Aventos HK Set Euroschrauben 980",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1423,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.545",
 Description: "Aventos HK Set Euroschrauben 420",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1424,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.578",
 Description: "Aventos HK Set Euroschrauben 3200",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1425,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.577",
 Description: "Aventos HK Set Euroschrauben 1730",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1426,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.576",
 Description: "Aventos HK Set Euroschrauben 980",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1427,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.85.575",
 Description: "Aventos HK Set Euroschrauben 420",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1428,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.790",
 Description: "Montageplatte Aventos HK / HS / HL",
 Description2: "zum Einpressen",
 Length: 16.5,
 Width: 108,
 Thickness: 13.4,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: ""
}
,{
 _id: 1429,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "342.81.400",
 Description: "Concealed hinge, Blum Clip Top 120°, full overlay mounting, without automatic closing spring",
 Description2: "for wooden doors, Cup mounting: for screwing, hole pattern: 45/9.5 mm, model no. 70T5550TL",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 1430,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.727",
 Description: "Aventos HS Set Euroschrauben 350",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1431,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.728",
 Description: "Aventos HS Set Euroschrauben 480",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1432,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.729",
 Description: "Aventos HS Set Euroschrauben 800",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1433,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.527",
 Description: "Aventos HS Set Euroschrauben 350",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1434,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.528",
 Description: "Aventos HS Set Euroschrauben 480",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1435,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.529",
 Description: "Aventos HS Set Euroschrauben 800",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1436,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.587",
 Description: "Aventos HS Set Euroschrauben 350",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1437,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.588",
 Description: "Aventos HS Set Euroschrauben 480",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1438,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.84.589",
 Description: "Aventos HS Set Euroschrauben 800",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1439,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.757",
 Description: "Aventos HL Set Euroschrauben 300",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1440,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.758",
 Description: "Aventos HL Set Euroschrauben 390",
 Description2: "2 Kraftspeicher mit Abdeckkappen weiß",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "weiß",
 Category: "Fliplift"
}
,{
 _id: 1441,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.557",
 Description: "Aventos HL Set Euroschrauben 300",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1442,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.558",
 Description: "Aventos HL Set Euroschrauben 390",
 Description2: "2 Kraftspeicher mit Abdeckkappen grau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1443,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.567",
 Description: "Aventos HL Set Euroschrauben 300",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Grey",
 Category: "Fliplift"
}
,{
 _id: 1444,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.568",
 Description: "Aventos HL Set Euroschrauben 390",
 Description2: "2 Kraftspeicher mit Abdeckkappen tiefgrau",
 Length: 185,
 Width: 162,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "oriongrau",
 Category: "Fliplift"
}
,{
 _id: 1445,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.681",
 Description: "Hebelarm Set for Aventos HL",
 Description2: "300 - 340mm Korpushöhe",
 Length: 18,
 Width: 300,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1446,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.682",
 Description: "Hebelarm Set for Aventos HL",
 Description2: "340 - 390mm Korpushöhe",
 Length: 18,
 Width: 340,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1447,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.683",
 Description: "Hebelarm Set for Aventos HL",
 Description2: "390 - 540mm Korpushöhe",
 Length: 18,
 Width: 390,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1448,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.86.684",
 Description: "Hebelarm Set for Aventos HL",
 Description2: "480 - 580mm Korpushöhe",
 Length: 18,
 Width: 480,
 Thickness: 35,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1449,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "365.46.061",
 Description: "Seilzugklappenhalter für Barklappen",
 Description2: "Anschlag links",
 Length: 313,
 Width: 46,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Aluminium",
 Category: "Fliplift"
}
,{
 _id: 1450,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "365.46.060",
 Description: "Seilzugklappenhalter für Barklappen",
 Description2: "Anschlag rechts",
 Length: 313,
 Width: 46,
 Thickness: 25,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "Aluminium",
 Category: "Fliplift"
}
,{
 _id: 1451,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.95.703",
 Description: "Aventos HK XS für kleinere einteilige Klappen",
 Description2: "800 - 1800",
 Length: 177,
 Width: 94,
 Thickness: 20,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1452,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.95.702",
 Description: "Aventos HK XS für kleinere einteilige Klappen",
 Description2: "500 - 1500",
 Length: 177,
 Width: 94,
 Thickness: 20,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1453,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.95.701",
 Description: "Aventos HK XS für kleinere einteilige Klappen",
 Description2: "200 - 1000",
 Length: 177,
 Width: 94,
 Thickness: 20,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1454,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.95.780",
 Description: "Frontbefestigung Aventos HK XS",
 Description2: "vormontierte Spreizdübel",
 Length: 43,
 Width: 29,
 Thickness: 17,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1455,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.95.790",
 Description: "Korpusbefestigung Aventos HK XS",
 Description2: "vormontierte Spreizdübel",
 Length: 68,
 Width: 37,
 Thickness: 20,
 Weight: 0,
 UnitOfWeight: "kg",
 Color: "vernickelt",
 Category: "Fliplift"
}
,{
 _id: 1456,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "342.22.060",
 Description: "Mounting plate, steel, for screw fixing with chipboard screws",
 Description2: "For Blum Clip top Blumotion, Clip top, Clip concealed hinges, for Blum Aventos HF, HF Servo-Drive, HK-S, HK-S Tip-On front fixing brackets, Distance D: 0 mm, model no. 175H3100",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 1457,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "342.22.063",
 Description: "Mounting plate, steel, for screw fixing with chipboard screws",
 Description2: "For Blum Clip top Blumotion, Clip top, Clip concealed hinges, for Blum Aventos HF, HF Servo-Drive, HK-S, HK-S Tip-On front fixing brackets, Distance D: 3 mm, model no. 175H3130",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "MountingPlate"
}
,{
 _id: 1458,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "372.74.990",
 Description: "Concealed hinge, Clip Top, for Blum Aventos HF top and HF top Servo-Drive",
 Description2: "With finger protection, for screw fixing",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 1459,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.425",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 139,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.23,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 1460,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.426",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 171,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 1461,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.225",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 139,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.23,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Handle"
}
,{
 _id: 1462,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.226",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 171,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Handle"
}
,{
 _id: 1463,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.525",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 139,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.23,
 UnitOfWeight: "kg",
 Color: "BrassPlatedAntique",
 Category: "Handle"
}
,{
 _id: 1464,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.526",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 171,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "BrassPlatedAntique",
 Category: "Handle"
}
,{
 _id: 1465,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.625",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 139,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.23,
 UnitOfWeight: "kg",
 Color: "NickelPlated",
 Category: "Handle"
}
,{
 _id: 1466,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.62.626",
 Description: "Furniture handle, mitre handle made of die-cast zinc",
 Description2: "Häfele design model H1735, black, brushed, used look, dimensions: 171 x 28 mm, hole spacing: 160 mm",
 Length: 171,
 Width: 28,
 Thickness: 11.5,
 Weight: 0.25,
 UnitOfWeight: "kg",
 Color: "NickelPlated",
 Category: "Handle"
}
,{
 _id: 1467,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.61.214",
 Description: "Furniture handle, bow handle made of die-cast zinc",
 Description2: "Häfele Design model H1510, dimension A: 340 mm, dimension B: 30 mm, dimension C: 288 mm, dimension C1: 320 mm, nickel-plated brushed",
 Length: 212,
 Width: 30,
 Thickness: 12,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Handle"
}
,{
 _id: 1468,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.61.217",
 Description: "Furniture handle, bow handle made of die-cast zinc",
 Description2: "Häfele Design model H1510, dimension A: 340 mm, dimension B: 30 mm, dimension C: 288 mm, dimension C1: 320 mm, nickel-plated brushed",
 Length: 340,
 Width: 30,
 Thickness: 12,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "Stahl",
 Category: "Handle"
}
,{
 _id: 1469,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.61.014",
 Description: "Furniture handle, bow handle made of die-cast zinc",
 Description2: "Häfele Design model H1510, dimension A: 212 mm, dimension B: 30 mm, dimension C: 160 mm, dimension C1: 192 mm, nickel-plated brushed",
 Length: 212,
 Width: 30,
 Thickness: 12,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "NickelPlated",
 Category: "Handle"
}
,{
 _id: 1470,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "106.61.017",
 Description: "Furniture handle, bow handle made of die-cast zinc",
 Description2: "Häfele Design model H1510, dimension A: 340 mm, dimension B: 30 mm, dimension C: 288 mm, dimension C1: 320 mm, nickel-plated brushed",
 Length: 340,
 Width: 30,
 Thickness: 12,
 Weight: 0.22,
 UnitOfWeight: "kg",
 Color: "NickelPlated",
 Category: "Handle"
}
,{
 _id: 1471,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.100",
 Description: "Griff Edelst.matt  12/1000x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1000,
 Width: 35,
 Thickness: 12,
 Weight: 0.5,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1472,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.101",
 Description: "Griff Edelst.matt  12/1100x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1100,
 Width: 35,
 Thickness: 12,
 Weight: 0.6,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1473,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.102",
 Description: "Griff Edelst.matt  12/1200x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1200,
 Width: 35,
 Thickness: 12,
 Weight: 0.7,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1474,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.103",
 Description: "Griff Edelst.matt  12/1300x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1300,
 Width: 35,
 Thickness: 12,
 Weight: 0.8,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1475,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.104",
 Description: "Griff Edelst.matt  12/1400x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1400,
 Width: 35,
 Thickness: 12,
 Weight: 0.9,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1476,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.106",
 Description: "Griff Edelst.matt  12/1500x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1500,
 Width: 35,
 Thickness: 12,
 Weight: 1,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1477,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.107",
 Description: "Griff Edelst.matt  12/1600x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1600,
 Width: 35,
 Thickness: 12,
 Weight: 1.1,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1478,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.108",
 Description: "Griff Edelst.matt  12/1800x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 1800,
 Width: 35,
 Thickness: 12,
 Weight: 1.3,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1479,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "117.66.109",
 Description: "Griff Edelst.matt  12/2000x35mm",
 Description2: "Möbelgriff, Sockelgriff aus Edelstahl, rund",
 Length: 2000,
 Width: 35,
 Thickness: 12,
 Weight: 1.5,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1480,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "112.02.105",
 Description: "Knopf Schwarz.matt      20x30mm",
 Description2: "Möbelknopf schwarz, zylindrisch, mit Griffmulde",
 Length: 20,
 Width: 30,
 Thickness: 20,
 Weight: 0.12,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 1481,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "110.35.393",
 Description: "Möbelknopf, traditionell",
 Description2: "Edelstahl, Länge: 30 mm, Höhe: 28 mm, Knopfdurchmesser: 30 mm",
 Length: 29,
 Width: 30,
 Thickness: 29,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "Handle"
}
,{
 _id: 1482,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "110.35.392",
 Description: "Möbelknopf, traditionell",
 Description2: "Vekehrsschwarz, Länge: 30 mm, Höhe: 28 mm, Knopfdurchmesser: 30 mm",
 Length: 29,
 Width: 30,
 Thickness: 29,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "BrassPlatedAntique",
 Category: "Handle"
}
,{
 _id: 1483,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "110.35.394",
 Description: "Möbelknopf, traditionell",
 Description2: "Verkupfert antik, Länge: 30 mm, Höhe: 28 mm, Knopfdurchmesser: 30 mm",
 Length: 29,
 Width: 30,
 Thickness: 29,
 Weight: 0.18,
 UnitOfWeight: "kg",
 Color: "Edelstahl",
 Category: "Handle"
}
,{
 _id: 1484,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "342.78.700",
 Description: "Flap hinge, 90°, 3D adjustable, for wooden flaps",
 Description2: "for screw fixing, for panel thickness from 18 mm, Zinc alloy, nickel plated",
 Length: 0,
 Width: 0,
 Thickness: 0,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "NickelPlated",
 Category: "Hinge"
}
,{
 _id: 1485,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "260.28.004",
 Description: "Chair bracket, With 4 screw holes",
 Description2: "Stainless steel, Dim. (A x B x C): 40 x 40 x 15 mm",
 Length: 40,
 Width: 15,
 Thickness: 40,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "StainlessSteelMattBrushed",
 Category: "Bracket"
}
,{
 _id: 1486,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "637.76.355",
 Description: "Rohr Axilo 78 Kst.schw.m.Verstellt.150mm",
 Description2: "Rohr mit Einschraubgleiter, für Sockelsystem Häfele AXILO® 78",
 Length: 79,
 Width: 79,
 Thickness: 147,
 Weight: 0.325,
 UnitOfWeight: "kg",
 Color: "Black",
 Category: "PlinthAndLeg"
}
,{
 _id: 1487,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "262.50.368",
 Description: "Frame part, Häfele Pacofix PF-L, with mounting lug",
 Description2: "Installation with chipboard screws with countersunk head",
 Length: 10.2,
 Width: 38,
 Thickness: 46,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: ""
}
,{
 _id: 1488,
 in_Supplier: "Haefele",
 in_SupplierArticleNumber: "262.50.359",
 Description: "Panel component, Häfele Pacofix PF",
 Description2: "Installation with chipboard screws with countersunk head",
 Length: 23,
 Width: 48,
 Thickness: 29,
 Weight: undefined,
 UnitOfWeight: "",
 Color: "Black",
 Category: ""
}
];
