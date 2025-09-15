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

export interface cti_tab_EdgeLibrary {
  readonly in_EdgeObject? : string;
}

export interface ctm_tab_EdgeLibrary {
}

export interface cto_tab_EdgeLibrary extends ctm_tab_EdgeLibrary {
  readonly _id : number;
  readonly EdgeId? : string;
  readonly Description? : string;
  readonly Height : number;
  readonly Thickness : number;
  readonly Material? : string;
  readonly GlueType? : string;
  readonly RoleLength : number;
  readonly Supplier? : string;
  readonly SupplierDescription? : string;
  readonly SupplierArticleNumber? : string;
  readonly GTIN? : string;
}

export interface ICT_tab_EdgeLibrary
extends cti_tab_EdgeLibrary, cto_tab_EdgeLibrary {}

export class ct2_tab_EdgeLibrary {

public findExactly(
     in_EdgeObject: string|undefined,
): cto_tab_EdgeLibrary | undefined {
  const res = ct_tab_EdgeLibrary.find((p) => 
p.in_EdgeObject === in_EdgeObject
);
return res;
}

public find(
predicate: (value: cti_tab_EdgeLibrary) => boolean
): cto_tab_EdgeLibrary | undefined {
  for (let index = 0; index < ct_tab_EdgeLibrary.length; index++){
    const element = ct_tab_EdgeLibrary[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_EdgeLibrary :ICT_tab_EdgeLibrary[] = [
{
 _id: 1479,
 in_EdgeObject: "U727PM_23x2.0",
 EdgeId: "ABS_U727PM_23x2.0",
 Description: "ABS Edge 23x2mm Color: U727PM",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "69472948263",
 GTIN: ""
}
,{
 _id: 1480,
 in_EdgeObject: "U727PM_28x2.0",
 EdgeId: "ABS_U727PM_28x2.0",
 Description: "ABS Edge 28x2mm Color: U727PM",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1481,
 in_EdgeObject: "U727PM_23x0.8",
 EdgeId: "MEL_U727PM_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: U727PM",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1482,
 in_EdgeObject: "U708ST9_28x0.8",
 EdgeId: "ABS_Light_grey_0.80_28.0_NN",
 Description: "ABS Kanten U708 ST7 Light grey",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U708 ST7 Light grey",
 SupplierArticleNumber: "6304196141",
 GTIN: ""
}
,{
 _id: 1483,
 in_EdgeObject: "U708ST9_43x0.8",
 EdgeId: "ABS_Light_grey_0.80_43.0_NN",
 Description: "ABS Kanten U708 ST7 Light grey",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U708 ST7 Light grey",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1484,
 in_EdgeObject: "U708ST9_23x0.8",
 EdgeId: "ABS_Light_grey_0.80_23.0_NN",
 Description: "ABS Kanten U708 ST7 Light grey",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U708 ST7 Light grey",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1485,
 in_EdgeObject: "W1000PM_23x2.0",
 EdgeId: "ABS_W1000PM_23x2.0",
 Description: "ABS Edge 23x2mm Color: W1000PM",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "59173182962",
 GTIN: ""
}
,{
 _id: 1486,
 in_EdgeObject: "W1000PM_28x2.0",
 EdgeId: "ABS_W1000PM_28x2.0",
 Description: "ABS Edge 28x2mm Color: W1000PM",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1487,
 in_EdgeObject: "W1000PM_23x0.8",
 EdgeId: "MEL_W1000PM_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: W1000PM",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1488,
 in_EdgeObject: "U560ST9_23x2.0",
 EdgeId: "ABS_U560ST9_23x2.0",
 Description: "ABS Edge 23x2mm Color: U560ST9",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1489,
 in_EdgeObject: "U560ST9_28x2.0",
 EdgeId: "ABS_U560ST9_28x2.0",
 Description: "ABS Edge 28x2mm Color: U560ST9",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1490,
 in_EdgeObject: "U560ST9_23x0.8",
 EdgeId: "MEL_U560ST9_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: U560ST9",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1491,
 in_EdgeObject: "U626ST9_23x2.0",
 EdgeId: "ABS_U626ST9_23x2.0",
 Description: "ABS Edge 23x2mm Color: U626ST9",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1492,
 in_EdgeObject: "U626ST9_28x2.0",
 EdgeId: "ABS_U626ST9_28x2.0",
 Description: "ABS Edge 28x2mm Color: U626ST9",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1493,
 in_EdgeObject: "U626ST9_23x0.8",
 EdgeId: "MEL_U626ST9_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: U626ST9",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1494,
 in_EdgeObject: "U323ST9_23x2.0",
 EdgeId: "ABS_U323ST9_23x2.0",
 Description: "ABS Edge 23x2mm Color: U323ST9",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1495,
 in_EdgeObject: "U323ST9_28x2.0",
 EdgeId: "ABS_U323ST9_28x2.0",
 Description: "ABS Edge 28x2mm Color: U323ST9",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1496,
 in_EdgeObject: "U323ST9_23x0.8",
 EdgeId: "MEL_U323ST9_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: U323ST9",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1497,
 in_EdgeObject: "H1181ST37_23x2.0",
 EdgeId: "ABS_H1181ST37_23x2.0",
 Description: "ABS Edge 23x2mm Color: H1181ST37",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "22329082955",
 GTIN: ""
}
,{
 _id: 1498,
 in_EdgeObject: "H1181ST37_28x2.0",
 EdgeId: "ABS_H1181ST37_28x2.0",
 Description: "ABS Edge 28x2mm Color: H1181ST37",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1499,
 in_EdgeObject: "H1181ST37_23x0.8",
 EdgeId: "MEL_H1181ST37_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: H1181ST37",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1500,
 in_EdgeObject: "H1511ST15_23x2.0",
 EdgeId: "ABS_H1511ST15_23x2.0",
 Description: "ABS Edge 23x2mm Color: H1511ST15",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1501,
 in_EdgeObject: "H1511ST15_28x2.0",
 EdgeId: "ABS_H1511ST15_28x2.0",
 Description: "ABS Edge 28x2mm Color: H1511ST15",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1502,
 in_EdgeObject: "H1511ST15_23x0.8",
 EdgeId: "MEL_H1511ST15_23x0.8",
 Description: "MEL Edge 23x0,8mm Color: H1511ST15",
 Height: 23,
 Thickness: 0.8,
 Material: "MEL",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1503,
 in_EdgeObject: "EdgeBlue40Test",
 EdgeId: "ABS_Test_blue_40",
 Description: "ABS Edge for testing Color: Blue",
 Height: 42,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "DemoSupplierA",
 SupplierDescription: "",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1504,
 in_EdgeObject: "W980ST7_23x2.0",
 EdgeId: "ABS_Sunny_white_2.00_23.0_NN",
 Description: "ABS Kanten W980 ST7 Platinweiss",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten W980 ST7 Platinweiss",
 SupplierArticleNumber: "1705597",
 GTIN: "9010771398757"
}
,{
 _id: 1505,
 in_EdgeObject: "W980ST7_28x2.0",
 EdgeId: "ABS_Sunny_white_2.00_28.0_NN",
 Description: "ABS Kanten W980 ST7 Platinweiss",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten W980 ST7 Platinweiss",
 SupplierArticleNumber: "1705599",
 GTIN: "9010771398771"
}
,{
 _id: 1506,
 in_EdgeObject: "W980ST7_43x2.0",
 EdgeId: "ABS_Sunny_white_2.00_43.0_NN",
 Description: "ABS Kanten W980 ST7 Platinweiss",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten W980 ST7 Platinweiss",
 SupplierArticleNumber: "1705625",
 GTIN: "9010771398832"
}
,{
 _id: 1507,
 in_EdgeObject: "W980ST7_23x0.8",
 EdgeId: "ABS_Sunny_white_0.80_23.0_NN",
 Description: "ABS Kanten W980 ST7 Platinweiss",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten W980 ST7 Platinweiss",
 SupplierArticleNumber: "1686401",
 GTIN: "9010771234291"
}
,{
 _id: 1508,
 in_EdgeObject: "W980ST7_28x0.8",
 EdgeId: "ABS_Sunny_white_0.80_28.0_NN",
 Description: "ABS Kanten W980 ST7 Platinweiss",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten W980 ST7 Platinweiss",
 SupplierArticleNumber: "1705598",
 GTIN: "9010771398764"
}
,{
 _id: 1509,
 in_EdgeObject: "W980ST7_43x0.8",
 EdgeId: "ABS_Sunny_white_0.80_43.0_NN",
 Description: "ABS Kanten W980 ST7 Platinweiss",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten W980 ST7 Platinweiss",
 SupplierArticleNumber: "1705623",
 GTIN: "9010771398818"
}
,{
 _id: 1510,
 in_EdgeObject: "H3860ST9_23x0.8",
 EdgeId: "ABS_Maple_0.80_23.0_NN",
 Description: "ABS Kanten H3860 ST9 Hard Maple champagne",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3860 ST9 Hard Maple champagne",
 SupplierArticleNumber: "1192155",
 GTIN: "9009986814602"
}
,{
 _id: 1511,
 in_EdgeObject: "H3860ST9_28x0.8",
 EdgeId: "ABS_Maple_0.80_28.0_NN",
 Description: "ABS Kanten H3860 ST9 Hard Maple champagne",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3860 ST9 Hard Maple champagne",
 SupplierArticleNumber: "1220822",
 GTIN: "9010173056330"
}
,{
 _id: 1512,
 in_EdgeObject: "H3860ST9_43x0.8",
 EdgeId: "ABS_Maple_0.80_43.0_NN",
 Description: "ABS Kanten H3860 ST9 Hard Maple champagne",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3860 ST9 Hard Maple champagne",
 SupplierArticleNumber: "1380360",
 GTIN: "9010389216795"
}
,{
 _id: 1513,
 in_EdgeObject: "H3860ST9_23x2.0",
 EdgeId: "ABS_Maple_2.00_23.0_NN",
 Description: "ABS Kanten H3860 ST9 Hard Maple champagne",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3860 ST9 Hard Maple champagne",
 SupplierArticleNumber: "1187701",
 GTIN: "9009986786565"
}
,{
 _id: 1514,
 in_EdgeObject: "H3860ST9_28x2.0",
 EdgeId: "ABS_Maple_2.00_28.0_NN",
 Description: "ABS Kanten H3860 ST9 Hard Maple champagne",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3860 ST9 Hard Maple champagne",
 SupplierArticleNumber: "1192158",
 GTIN: "9009986814633"
}
,{
 _id: 1515,
 in_EdgeObject: "H3860ST9_43x2.0",
 EdgeId: "ABS_Maple_2.00_43.0_NN",
 Description: "ABS Kanten H3860 ST9 Hard Maple champagne",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3860 ST9 Hard Maple champagne",
 SupplierArticleNumber: "1380359",
 GTIN: "9010389216788"
}
,{
 _id: 1516,
 in_EdgeObject: "U640ST9_23x0.8",
 EdgeId: "ABS_Olive_green_0.80_23.0_NN",
 Description: "ABS Kanten U640 ST9 Olivgrün",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U640 ST9 Olivgrün",
 SupplierArticleNumber: "1686389",
 GTIN: "9010771234178"
}
,{
 _id: 1517,
 in_EdgeObject: "U640ST9_28x0.8",
 EdgeId: "ABS_Olive_green_0.80_28.0_NN",
 Description: "ABS Kanten U640 ST9 Olivgrün",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U640 ST9 Olivgrün",
 SupplierArticleNumber: "1705516",
 GTIN: "9010771398559"
}
,{
 _id: 1518,
 in_EdgeObject: "U640ST9_43x0.8",
 EdgeId: "ABS_Olive_green_0.80_43.0_NN",
 Description: "ABS Kanten U640 ST9 Olivgrün",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U640 ST9 Olivgrün",
 SupplierArticleNumber: "1705601",
 GTIN: "9010771398603"
}
,{
 _id: 1519,
 in_EdgeObject: "U640ST9_23x2.0",
 EdgeId: "ABS_Olive_green_2.00_23.0_NN",
 Description: "ABS Kanten U640 ST9 Olivgrün",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U640 ST9 Olivgrün",
 SupplierArticleNumber: "1705515",
 GTIN: "9010771398542"
}
,{
 _id: 1520,
 in_EdgeObject: "U640ST9_28x2.0",
 EdgeId: "ABS_Olive_green_2.00_28.0_NN",
 Description: "ABS Kanten U640 ST9 Olivgrün",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U640 ST9 Olivgrün",
 SupplierArticleNumber: "1705517",
 GTIN: "9010771398566"
}
,{
 _id: 1521,
 in_EdgeObject: "U640ST9_43x2.0",
 EdgeId: "ABS_Olive_green_2.00_43.0_NN",
 Description: "ABS Kanten U640 ST9 Olivgrün",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U640 ST9 Olivgrün",
 SupplierArticleNumber: "1705602",
 GTIN: "9010771398610"
}
,{
 _id: 1522,
 in_EdgeObject: "U645ST9_23x0.8",
 EdgeId: "ABS_Seaweed_green_0.80_23.0_NN",
 Description: "ABS Kanten U645 ST9 Agavengrün",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U645 ST9 Agavengrün",
 SupplierArticleNumber: "1686390",
 GTIN: "9010771234185"
}
,{
 _id: 1523,
 in_EdgeObject: "U645ST9_28x0.8",
 EdgeId: "ABS_Seaweed_green_0.80_28.0_NN",
 Description: "ABS Kanten U645 ST9 Agavengrün",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U645 ST9 Agavengrün",
 SupplierArticleNumber: "1705259",
 GTIN: "9010771398641"
}
,{
 _id: 1524,
 in_EdgeObject: "U645ST9_43x0.8",
 EdgeId: "ABS_Seaweed_green_0.80_43.0_NN",
 Description: "ABS Kanten U645 ST9 Agavengrün",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U645 ST9 Agavengrün",
 SupplierArticleNumber: "1705614",
 GTIN: "9010771398696"
}
,{
 _id: 1525,
 in_EdgeObject: "U645ST9_23x2.0",
 EdgeId: "ABS_Seaweed_green_2.00_23.0_NN",
 Description: "ABS Kanten U645 ST9 Agavengrün",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U645 ST9 Agavengrün",
 SupplierArticleNumber: "1705597",
 GTIN: "9010771398757"
}
,{
 _id: 1526,
 in_EdgeObject: "U645ST9_28x2.0",
 EdgeId: "ABS_Seaweed_green_2.00_28.0_NN",
 Description: "ABS Kanten U645 ST9 Agavengrün",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U645 ST9 Agavengrün",
 SupplierArticleNumber: "1705610",
 GTIN: "9010771398658"
}
,{
 _id: 1527,
 in_EdgeObject: "U645ST9_43x2.0",
 EdgeId: "ABS_Seaweed_green_2.00_43.0_NN",
 Description: "ABS Kanten U645 ST9 Agavengrün",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U645 ST9 Agavengrün",
 SupplierArticleNumber: "1705615",
 GTIN: "9010771398702"
}
,{
 _id: 1528,
 in_EdgeObject: "U999ST7_23x0.8",
 EdgeId: "ABS_Jet_black_0.80_23.0_NN",
 Description: "ABS Kanten U999 ST7 Schwarz",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U999 ST7 Schwarz",
 SupplierArticleNumber: "1686397",
 GTIN: "9010771234253"
}
,{
 _id: 1529,
 in_EdgeObject: "U999ST7_28x0.8",
 EdgeId: "ABS_Jet_black_0.80_28.0_NN",
 Description: "ABS Kanten U999 ST7 Schwarz",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U999 ST7 Schwarz",
 SupplierArticleNumber: "1705285",
 GTIN: "9010771395367"
}
,{
 _id: 1530,
 in_EdgeObject: "U999ST7_43x0.8",
 EdgeId: "ABS_Jet_black_0.80_43.0_NN",
 Description: "ABS Kanten U999 ST7 Schwarz",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U999 ST7 Schwarz",
 SupplierArticleNumber: "1705290",
 GTIN: "9010771395411"
}
,{
 _id: 1531,
 in_EdgeObject: "U999ST7_23x2.0",
 EdgeId: "ABS_Jet_black_2.00_23.0_NN",
 Description: "ABS Kanten U999 ST7 Schwarz",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U999 ST7 Schwarz",
 SupplierArticleNumber: "1705283",
 GTIN: "9010771395343"
}
,{
 _id: 1532,
 in_EdgeObject: "U999ST7_28x2.0",
 EdgeId: "ABS_Jet_black_2.00_28.0_NN",
 Description: "ABS Kanten U999 ST7 Schwarz",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U999 ST7 Schwarz",
 SupplierArticleNumber: "1705286",
 GTIN: "9010771395374"
}
,{
 _id: 1533,
 in_EdgeObject: "U999ST7_43x2.0",
 EdgeId: "ABS_Jet_black_2.00_43.0_NN",
 Description: "ABS Kanten U999 ST7 Schwarz",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U999 ST7 Schwarz",
 SupplierArticleNumber: "1705291",
 GTIN: "9010771395428"
}
,{
 _id: 1534,
 in_EdgeObject: "U502ST9_23x0.8",
 EdgeId: "ABS_Cloudy_blue_0.80_23.0_NN",
 Description: "ABS Kanten U502 ST9 Nebelblau",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U502 ST9 Nebelblau",
 SupplierArticleNumber: "1659827",
 GTIN: "9010771085541"
}
,{
 _id: 1535,
 in_EdgeObject: "U502ST9_28x0.8",
 EdgeId: "ABS_Cloudy_blue_0.80_28.0_NN",
 Description: "ABS Kanten U502 ST9 Nebelblau",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U502 ST9 Nebelblau",
 SupplierArticleNumber: "1705779",
 GTIN: "9010771400658"
}
,{
 _id: 1536,
 in_EdgeObject: "U502ST9_43x0.8",
 EdgeId: "ABS_Cloudy_blue_0.80_43.0_NN",
 Description: "ABS Kanten U502 ST9 Nebelblau",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U502 ST9 Nebelblau",
 SupplierArticleNumber: "1705874",
 GTIN: "9010771400702"
}
,{
 _id: 1537,
 in_EdgeObject: "U502ST9_23x2.0",
 EdgeId: "ABS_Cloudy_blue_2.00_23.0_NN",
 Description: "ABS Kanten U502 ST9 Nebelblau",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U502 ST9 Nebelblau",
 SupplierArticleNumber: "1667203",
 GTIN: "9010771125827"
}
,{
 _id: 1538,
 in_EdgeObject: "U502ST9_28x2.0",
 EdgeId: "ABS_Cloudy_blue_2.00_28.0_NN",
 Description: "ABS Kanten U502 ST9 Nebelblau",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U502 ST9 Nebelblau",
 SupplierArticleNumber: "1705870",
 GTIN: "9010771400665"
}
,{
 _id: 1539,
 in_EdgeObject: "U502ST9_43x2.0",
 EdgeId: "ABS_Cloudy_blue_2.00_43.0_NN",
 Description: "ABS Kanten U502 ST9 Nebelblau",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U502 ST9 Nebelblau",
 SupplierArticleNumber: "1705875",
 GTIN: "9010771400719"
}
,{
 _id: 1540,
 in_EdgeObject: "U575ST9_23x0.8",
 EdgeId: "ABS_Denim_blue_0.80_23.0_NN",
 Description: "ABS Kanten U575 ST9 Kosmosblau",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U575 ST9 Kosmosblau",
 SupplierArticleNumber: "1686388",
 GTIN: "9010771234161"
}
,{
 _id: 1541,
 in_EdgeObject: "U575ST9_28x0.8",
 EdgeId: "ABS_Denim_blue_0.80_28.0_NN",
 Description: "ABS Kanten U575 ST9 Kosmosblau",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U575 ST9 Kosmosblau",
 SupplierArticleNumber: "1705586",
 GTIN: "9010771398467"
}
,{
 _id: 1542,
 in_EdgeObject: "U575ST9_43x0.8",
 EdgeId: "ABS_Denim_blue_0.80_43.0_NN",
 Description: "ABS Kanten U575 ST9 Kosmosblau",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U575 ST9 Kosmosblau",
 SupplierArticleNumber: "1705591",
 GTIN: "9010771398511"
}
,{
 _id: 1543,
 in_EdgeObject: "U575ST9_23x2.0",
 EdgeId: "ABS_Denim_blue_2.00_23.0_NN",
 Description: "ABS Kanten U575 ST9 Kosmosblau",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U575 ST9 Kosmosblau",
 SupplierArticleNumber: "1705585",
 GTIN: "9010771398450"
}
,{
 _id: 1544,
 in_EdgeObject: "U575ST9_28x2.0",
 EdgeId: "ABS_Denim_blue_2.00_28.0_NN",
 Description: "ABS Kanten U575 ST9 Kosmosblau",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U575 ST9 Kosmosblau",
 SupplierArticleNumber: "1705587",
 GTIN: "9010771398474"
}
,{
 _id: 1545,
 in_EdgeObject: "U575ST9_43x2.0",
 EdgeId: "ABS_Denim_blue_2.00_43.0_NN",
 Description: "ABS Kanten U575 ST9 Kosmosblau",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U575 ST9 Kosmosblau",
 SupplierArticleNumber: "1705592",
 GTIN: "9010771398528"
}
,{
 _id: 1546,
 in_EdgeObject: "H1715ST12_23x0.8",
 EdgeId: "ABS_Walnut_0.80_23.0_NN",
 Description: "ABS Kanten H1715 ST12 Parona Nussbaum",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1715 ST12 Parona Nussbaum",
 SupplierArticleNumber: "1704818",
 GTIN: "9010771392854"
}
,{
 _id: 1547,
 in_EdgeObject: "H1715ST12_28x0.8",
 EdgeId: "ABS_Walnut_0.80_28.0_NN",
 Description: "ABS Kanten H1715 ST12 Parona Nussbaum",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1715 ST12 Parona Nussbaum",
 SupplierArticleNumber: "1704981",
 GTIN: "9010771392885"
}
,{
 _id: 1548,
 in_EdgeObject: "H1715ST12_43x0.8",
 EdgeId: "ABS_Walnut_0.80_43.0_NN",
 Description: "ABS Kanten H1715 ST12 Parona Nussbaum",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1715 ST12 Parona Nussbaum",
 SupplierArticleNumber: "1704986",
 GTIN: "9010771392939"
}
,{
 _id: 1549,
 in_EdgeObject: "H1715ST12_23x2.0",
 EdgeId: "ABS_Walnut_2.00_23.0_NN",
 Description: "ABS Kanten H1715 ST12 Parona Nussbaum",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1715 ST12 Parona Nussbaum",
 SupplierArticleNumber: "1704819",
 GTIN: "9010771392861"
}
,{
 _id: 1550,
 in_EdgeObject: "H1715ST12_28x2.0",
 EdgeId: "ABS_Walnut_2.00_28.0_NN",
 Description: "ABS Kanten H1715 ST12 Parona Nussbaum",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1715 ST12 Parona Nussbaum",
 SupplierArticleNumber: "1704982",
 GTIN: "9010771392892"
}
,{
 _id: 1551,
 in_EdgeObject: "H1715ST12_43x2.0",
 EdgeId: "ABS_Walnut_2.00_43.0_NN",
 Description: "ABS Kanten H1715 ST12 Parona Nussbaum",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1715 ST12 Parona Nussbaum",
 SupplierArticleNumber: "1704987",
 GTIN: "9010771392946"
}
,{
 _id: 1552,
 in_EdgeObject: "H3734ST9_23x0.8",
 EdgeId: "ABS_Dark_walnut_0.80_23.0_NN",
 Description: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 SupplierArticleNumber: "1192208",
 GTIN: "9009986815159"
}
,{
 _id: 1553,
 in_EdgeObject: "H3734ST9_28x0.8",
 EdgeId: "ABS_Dark_walnut_0.80_28.0_NN",
 Description: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 SupplierArticleNumber: "1220825",
 GTIN: "9010173056361"
}
,{
 _id: 1554,
 in_EdgeObject: "H3734ST9_43x0.8",
 EdgeId: "ABS_Dark_walnut_0.80_43.0_NN",
 Description: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 SupplierArticleNumber: "1343080",
 GTIN: "9010173945306"
}
,{
 _id: 1555,
 in_EdgeObject: "H3734ST9_23x2.0",
 EdgeId: "ABS_Dark_walnut_2.00_23.0_NN",
 Description: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 SupplierArticleNumber: "757636",
 GTIN: "9008283845890"
}
,{
 _id: 1556,
 in_EdgeObject: "H3734ST9_28x2.0",
 EdgeId: "ABS_Dark_walnut_2.00_28.0_NN",
 Description: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 SupplierArticleNumber: "984326",
 GTIN: "9009094371745"
}
,{
 _id: 1557,
 in_EdgeObject: "H3734ST9_43x2.0",
 EdgeId: "ABS_Dark_walnut_2.00_43.0_NN",
 Description: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3734 ST9 Dijon Nussbaum natur",
 SupplierArticleNumber: "1380309",
 GTIN: "9010389216283"
}
,{
 _id: 1558,
 in_EdgeObject: "H2033ST10_23x0.8",
 EdgeId: "ABS_Dark_oak_0.80_23.0_NN",
 Description: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 SupplierArticleNumber: "1380464",
 GTIN: "9010389217839"
}
,{
 _id: 1559,
 in_EdgeObject: "H2033ST10_28x0.8",
 EdgeId: "ABS_Dark_oak_0.80_28.0_NN",
 Description: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 SupplierArticleNumber: "1380461",
 GTIN: "9010389217808"
}
,{
 _id: 1560,
 in_EdgeObject: "H2033ST10_43x0.8",
 EdgeId: "ABS_Dark_oak_0.80_43.0_NN",
 Description: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 SupplierArticleNumber: "1380455",
 GTIN: "9010389217747"
}
,{
 _id: 1561,
 in_EdgeObject: "H2033ST10_23x2.0",
 EdgeId: "ABS_Dark_oak_2.00_23.0_NN",
 Description: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 SupplierArticleNumber: "1380463",
 GTIN: "9010389217822"
}
,{
 _id: 1562,
 in_EdgeObject: "H2033ST10_28x2.0",
 EdgeId: "ABS_Dark_oak_2.00_28.0_NN",
 Description: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 SupplierArticleNumber: "1380460",
 GTIN: "9010389217792"
}
,{
 _id: 1563,
 in_EdgeObject: "H2033ST10_43x2.0",
 EdgeId: "ABS_Dark_oak_2.00_43.0_NN",
 Description: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H2033 ST10 Hunton Eiche dunkel",
 SupplierArticleNumber: "1380454",
 GTIN: "9010389217730"
}
,{
 _id: 1564,
 in_EdgeObject: "H1199ST12_23x0.8",
 EdgeId: "ABS_Black_oak_0.80_23.0_NN",
 Description: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 SupplierArticleNumber: "1193975",
 GTIN: "9009986824731"
}
,{
 _id: 1565,
 in_EdgeObject: "H1199ST12_28x0.8",
 EdgeId: "ABS_Black_oak_0.80_28.0_NN",
 Description: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 SupplierArticleNumber: "1786371",
 GTIN: "9010771980884"
}
,{
 _id: 1566,
 in_EdgeObject: "H1199ST12_43x0.8",
 EdgeId: "ABS_Black_oak_0.80_43.0_NN",
 Description: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 SupplierArticleNumber: "1786373",
 GTIN: "9010771980907"
}
,{
 _id: 1567,
 in_EdgeObject: "H1199ST12_23x2.0",
 EdgeId: "ABS_Black_oak_2.00_23.0_NN",
 Description: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 SupplierArticleNumber: "1786382",
 GTIN: "9010771980921"
}
,{
 _id: 1568,
 in_EdgeObject: "H1199ST12_28x2.0",
 EdgeId: "ABS_Black_oak_2.00_28.0_NN",
 Description: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 SupplierArticleNumber: "1786384",
 GTIN: "9010771980938"
}
,{
 _id: 1569,
 in_EdgeObject: "H1199ST12_43x2.0",
 EdgeId: "ABS_Black_oak_2.00_43.0_NN",
 Description: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H1199 ST12 Thermo Eiche schwarzbraun",
 SupplierArticleNumber: "1786387",
 GTIN: "9010771980969"
}
,{
 _id: 1570,
 in_EdgeObject: "H3190ST19_23x0.8",
 EdgeId: "ABS_Ash_grey_0.80_23.0_NN",
 Description: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 SupplierArticleNumber: "1366407",
 GTIN: "9010389115517"
}
,{
 _id: 1571,
 in_EdgeObject: "H3190ST19_28x0.8",
 EdgeId: "ABS_Ash_grey_0.80_28.0_NN",
 Description: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 SupplierArticleNumber: "1380266",
 GTIN: "9010389215859"
}
,{
 _id: 1572,
 in_EdgeObject: "H3190ST19_43x0.8",
 EdgeId: "ABS_Ash_grey_0.80_43.0_NN",
 Description: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 SupplierArticleNumber: "1380259",
 GTIN: "9010389215781"
}
,{
 _id: 1573,
 in_EdgeObject: "H3190ST19_23x2.0",
 EdgeId: "ABS_Ash_grey_2.00_23.0_NN",
 Description: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 SupplierArticleNumber: "1366406",
 GTIN: "9010389115500"
}
,{
 _id: 1574,
 in_EdgeObject: "H3190ST19_28x2.0",
 EdgeId: "ABS_Ash_grey_2.00_28.0_NN",
 Description: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 SupplierArticleNumber: "1380265",
 GTIN: "9010389215842"
}
,{
 _id: 1575,
 in_EdgeObject: "H3190ST19_43x2.0",
 EdgeId: "ABS_Ash_grey_2.00_43.0_NN",
 Description: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten H3190 ST19 Fineline Metallic anthrazit",
 SupplierArticleNumber: "1380258",
 GTIN: "9010389215774"
}
,{
 _id: 1576,
 in_EdgeObject: "F235ST76_23x0.8",
 EdgeId: "ABS_Slate_0.80_23.0_NN",
 Description: "ABS Kanten F235 ST76 Scivaro Schiefer",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F235 ST76 Scivaro Schiefer",
 SupplierArticleNumber: "1585399",
 GTIN: "9010588577987"
}
,{
 _id: 1577,
 in_EdgeObject: "F235ST76_28x0.8",
 EdgeId: "ABS_Slate_0.80_28.0_NN",
 Description: "ABS Kanten F235 ST76 Scivaro Schiefer",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F235 ST76 Scivaro Schiefer",
 SupplierArticleNumber: "1585398",
 GTIN: "9010588577963"
}
,{
 _id: 1578,
 in_EdgeObject: "F235ST76_43x0.8",
 EdgeId: "ABS_Slate_0.80_43.0_NN",
 Description: "ABS Kanten F235 ST76 Scivaro Schiefer",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F235 ST76 Scivaro Schiefer",
 SupplierArticleNumber: "1707317",
 GTIN: "9010771408906"
}
,{
 _id: 1579,
 in_EdgeObject: "F235ST76_23x2.0",
 EdgeId: "ABS_Slate_2.00_23.0_NN",
 Description: "ABS Kanten F235 ST76 Scivaro Schiefer",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F235 ST76 Scivaro Schiefer",
 SupplierArticleNumber: "1707312",
 GTIN: "9010771408852"
}
,{
 _id: 1580,
 in_EdgeObject: "F235ST76_28x2.0",
 EdgeId: "ABS_Slate_2.00_28.0_NN",
 Description: "ABS Kanten F235 ST76 Scivaro Schiefer",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F235 ST76 Scivaro Schiefer",
 SupplierArticleNumber: "1707313",
 GTIN: "9010771408869"
}
,{
 _id: 1581,
 in_EdgeObject: "F235ST76_43x2.0",
 EdgeId: "ABS_Slate_2.00_43.0_NN",
 Description: "ABS Kanten F235 ST76 Scivaro Schiefer",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F235 ST76 Scivaro Schiefer",
 SupplierArticleNumber: "1707319",
 GTIN: "9010771408920"
}
,{
 _id: 1582,
 in_EdgeObject: "F186ST9_23x0.8",
 EdgeId: "ABS_Concrete_0.80_23.0_NN",
 Description: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 SupplierArticleNumber: "1195285",
 GTIN: "9009986836406"
}
,{
 _id: 1583,
 in_EdgeObject: "F186ST9_28x0.8",
 EdgeId: "ABS_Concrete_0.80_28.0_NN",
 Description: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 SupplierArticleNumber: "1220904",
 GTIN: "9010173057153"
}
,{
 _id: 1584,
 in_EdgeObject: "F186ST9_43x0.8",
 EdgeId: "ABS_Concrete_0.80_43.0_NN",
 Description: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 SupplierArticleNumber: "1380976",
 GTIN: "9010389222932"
}
,{
 _id: 1585,
 in_EdgeObject: "F186ST9_23x2.0",
 EdgeId: "ABS_Concrete_2.00_23.0_NN",
 Description: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 SupplierArticleNumber: "1191941",
 GTIN: "9009986817252"
}
,{
 _id: 1586,
 in_EdgeObject: "F186ST9_28x2.0",
 EdgeId: "ABS_Concrete_2.00_28.0_NN",
 Description: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 SupplierArticleNumber: "1197432",
 GTIN: "9009986853595"
}
,{
 _id: 1587,
 in_EdgeObject: "F186ST9_43x2.0",
 EdgeId: "ABS_Concrete_2.00_43.0_NN",
 Description: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F186 ST9 Chicago Concrete hellgrau",
 SupplierArticleNumber: "1380975",
 GTIN: "9010389222925"
}
,{
 _id: 1588,
 in_EdgeObject: "F244ST76_23x0.8",
 EdgeId: "ABS_Dark_marble_0.80_23.0_NN",
 Description: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 SupplierArticleNumber: "1701005",
 GTIN: "9010771365261"
}
,{
 _id: 1589,
 in_EdgeObject: "F244ST76_28x0.8",
 EdgeId: "ABS_Dark_marble_0.80_28.0_NN",
 Description: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 SupplierArticleNumber: "1701007",
 GTIN: "9010771365285"
}
,{
 _id: 1590,
 in_EdgeObject: "F244ST76_43x0.8",
 EdgeId: "ABS_Dark_marble_0.80_43.0_NN",
 Description: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 SupplierArticleNumber: "1701073",
 GTIN: "9010771365346"
}
,{
 _id: 1591,
 in_EdgeObject: "F244ST76_23x2.0",
 EdgeId: "ABS_Dark_marble_2.00_23.0_NN",
 Description: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 SupplierArticleNumber: "1701006",
 GTIN: "9010771365278"
}
,{
 _id: 1592,
 in_EdgeObject: "F244ST76_28x2.0",
 EdgeId: "ABS_Dark_marble_2.00_28.0_NN",
 Description: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 SupplierArticleNumber: "1701008",
 GTIN: "9010771365292"
}
,{
 _id: 1593,
 in_EdgeObject: "F244ST76_43x2.0",
 EdgeId: "ABS_Dark_marble_2.00_43.0_NN",
 Description: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F244 ST76 Candela Marmor anthrazit",
 SupplierArticleNumber: "1701074",
 GTIN: "9010771365353"
}
,{
 _id: 1594,
 in_EdgeObject: "F800ST9_23x0.8",
 EdgeId: "ABS_Marble_0.80_23.0_NN",
 Description: "ABS Kanten F800 ST9 Kristallmarmor",
 Height: 23,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F800 ST9 Kristallmarmor",
 SupplierArticleNumber: "1701112",
 GTIN: "9010771365803"
}
,{
 _id: 1595,
 in_EdgeObject: "F800ST9_28x0.8",
 EdgeId: "ABS_Marble_0.80_28.0_NN",
 Description: "ABS Kanten F800 ST9 Kristallmarmor",
 Height: 28,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F800 ST9 Kristallmarmor",
 SupplierArticleNumber: "1701115",
 GTIN: "9010771365834"
}
,{
 _id: 1596,
 in_EdgeObject: "F800ST9_43x0.8",
 EdgeId: "ABS_Marble_0.80_43.0_NN",
 Description: "ABS Kanten F800 ST9 Kristallmarmor",
 Height: 43,
 Thickness: 0.8,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F800 ST9 Kristallmarmor",
 SupplierArticleNumber: "1701121",
 GTIN: "9010771365896"
}
,{
 _id: 1597,
 in_EdgeObject: "F800ST9_23x2.0",
 EdgeId: "ABS_Marble_2.00_23.0_NN",
 Description: "ABS Kanten F800 ST9 Kristallmarmor",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F800 ST9 Kristallmarmor",
 SupplierArticleNumber: "1701113",
 GTIN: "9010771365810"
}
,{
 _id: 1598,
 in_EdgeObject: "F800ST9_28x2.0",
 EdgeId: "ABS_Marble_2.00_28.0_NN",
 Description: "ABS Kanten F800 ST9 Kristallmarmor",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F800 ST9 Kristallmarmor",
 SupplierArticleNumber: "1701116",
 GTIN: "9010771365841"
}
,{
 _id: 1599,
 in_EdgeObject: "F800ST9_43x2.0",
 EdgeId: "ABS_Marble_2.00_43.0_NN",
 Description: "ABS Kanten F800 ST9 Kristallmarmor",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 75,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten F800 ST9 Kristallmarmor",
 SupplierArticleNumber: "1701123",
 GTIN: "9010771365919"
}
,{
 _id: 1600,
 in_EdgeObject: "U708ST9_23x2.0",
 EdgeId: "ABS_Light_grey_2.00_23.0_NN",
 Description: "ABS Kanten U708 ST7 Light grey",
 Height: 23,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U708 ST7 Light grey",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1601,
 in_EdgeObject: "U708ST9_28x2.0",
 EdgeId: "ABS_Light_grey_2.00_28.0_NN",
 Description: "ABS Kanten U708 ST7 Light grey",
 Height: 28,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U708 ST7 Light grey",
 SupplierArticleNumber: "",
 GTIN: ""
}
,{
 _id: 1602,
 in_EdgeObject: "U708ST9_43x2.0",
 EdgeId: "ABS_Light_grey_2.00_43.0_NN",
 Description: "ABS Kanten U708 ST7 Light grey",
 Height: 43,
 Thickness: 2,
 Material: "ABS",
 GlueType: "PUR",
 RoleLength: 0,
 Supplier: "Egger",
 SupplierDescription: "ABS Kanten U708 ST7 Light grey",
 SupplierArticleNumber: "",
 GTIN: ""
}
];
