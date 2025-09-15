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
import { IThreeDModelData } from '../models-3d'

export interface cti_tab_ApplianceGraphicLibrary {
  readonly in_GraphicId? : string;
}

export interface ctm_tab_ApplianceGraphicLibrary {
}

export interface cto_tab_ApplianceGraphicLibrary extends ctm_tab_ApplianceGraphicLibrary {
  readonly _id : number;
  readonly Description? : string;
  readonly Width : number;
  readonly Height : number;
  readonly Depth : number;
  readonly WidthPos : number;
  readonly HeightPos : number;
  readonly DepthPos : number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData|undefined;
  readonly StretchParams?: any;
  readonly MaterialId? : string;
}

export interface ICT_tab_ApplianceGraphicLibrary
extends cti_tab_ApplianceGraphicLibrary, cto_tab_ApplianceGraphicLibrary {}

export class ct2_tab_ApplianceGraphicLibrary {

public findExactly(
     in_GraphicId: string|undefined,
): cto_tab_ApplianceGraphicLibrary | undefined {
  const res = ct_tab_ApplianceGraphicLibrary.find((p) => 
p.in_GraphicId === in_GraphicId
);
return res;
}

public find(
predicate: (value: cti_tab_ApplianceGraphicLibrary) => boolean
): cto_tab_ApplianceGraphicLibrary | undefined {
  for (let index = 0; index < ct_tab_ApplianceGraphicLibrary.length; index++){
    const element = ct_tab_ApplianceGraphicLibrary[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_ApplianceGraphicLibrary :ICT_tab_ApplianceGraphicLibrary[] = [
{
 _id: 9127,
 in_GraphicId: "OvenDefault",
 Description: "Oven front",
 Width: 595,
 Height: 587.5,
 Depth: 19.5,
 WidthPos: -297.5,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:oven"
}
,{
 _id: 9128,
 in_GraphicId: "OvenDefault",
 Description: "Oven carcase",
 Width: 550,
 Height: 580,
 Depth: 550,
 WidthPos: -275,
 HeightPos: 0,
 DepthPos: -550,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9129,
 in_GraphicId: "BI510CNR0",
 Description: "Oven front",
 Width: 594,
 Height: 124,
 Depth: 19.5,
 WidthPos: -297.5,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:bi510cnr0"
}
,{
 _id: 9130,
 in_GraphicId: "BI510CNR0",
 Description: "Oven carcase",
 Width: 560,
 Height: 140,
 Depth: 549,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -550,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9131,
 in_GraphicId: "CM776GKB1",
 Description: "Oven front",
 Width: 595,
 Height: 447.5,
 Depth: 19.5,
 WidthPos: -297.5,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:cm776gkb1"
}
,{
 _id: 9132,
 in_GraphicId: "CM776GKB1",
 Description: "Oven Handle",
 Width: 507,
 Height: 14,
 Depth: 45,
 WidthPos: -253.5,
 HeightPos: 304,
 DepthPos: 19.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1a8d99ce-3f54-42fc-b875-8e63c5eb5d44_cm776gkb1_g.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=2x8PGrSHyNZAmo0x6e64zVHDcI70GWHnlmMt%2FHzEufs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWE4ZDk5Y2UtM2Y1NC00MmZjLWI4NzUtOGU2M2M1ZWI1ZDQ0X2NtNzc2Z2tiMV9nLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9133,
 in_GraphicId: "CM776GKB1",
 Description: "Oven carcase",
 Width: 560,
 Height: 444,
 Depth: 526,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -527,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5f269608-98de-4ab9-9f60-d8c89e38e70f_cm776gkb1_c.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=h2%2BBRosJ9sYK7qGh8MkC7d1AF7FqRUV8eq766jviHU0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWYyNjk2MDgtOThkZS00YWI5LTlmNjAtZDhjODllMzhlNzBmX2NtNzc2Z2tiMV9jLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9134,
 in_GraphicId: "CS736G1B1",
 Description: "Oven carcase",
 Width: 560,
 Height: 444,
 Depth: 548,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -549,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9135,
 in_GraphicId: "CS736G1B1",
 Description: "Oven front",
 Width: 594,
 Height: 447.5,
 Depth: 19.5,
 WidthPos: -297,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:cs736g1b1"
}
,{
 _id: 9136,
 in_GraphicId: "FridgeDefault",
 Description: "Complete Fridge",
 Width: 558,
 Height: 1221,
 Depth: 546,
 WidthPos: -279,
 HeightPos: 0,
 DepthPos: -546,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9e9e065-3fe1-489e-853d-88f51a0e3ced_ki41fadd0.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7UTGM2S4HBrnKvFlbQYRO7%2B3q99fSI419Dp0oveCeHA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTllOWUwNjUtM2ZlMS00ODllLTg1M2QtODhmNTFhMGUzY2VkX2tpNDFmYWRkMC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:w980_st7"
}
,{
 _id: 9137,
 in_GraphicId: "KI86SHDD0",
 Description: "Complete Fridge",
 Width: 558,
 Height: 1772,
 Depth: 554,
 WidthPos: -279,
 HeightPos: 0,
 DepthPos: -554,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f9ddff9e-96cf-4549-9988-eb01012ed1dc_ki86shdd0.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=QH0Mk%2BJ3inck8JSKT8jx%2ByDlHP13QmQkQGESJCV%2FZmo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjlkZGZmOWUtOTZjZi00NTQ5LTk5ODgtZWIwMTAxMmVkMWRjX2tpODZzaGRkMC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:w980_st7"
}
,{
 _id: 9138,
 in_GraphicId: "KI82LADD0",
 Description: "Complete Fridge",
 Width: 558,
 Height: 1776,
 Depth: 546,
 WidthPos: -279,
 HeightPos: 0,
 DepthPos: -546,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/45a7ecae-3bb9-4fc3-914a-ab16107317c1_ki82ladd0.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=g3bhX9qgwX0NLF3aKSe8qKq%2B23Y5uo8vqTx1wTi03%2Bc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDVhN2VjYWUtM2JiOS00ZmMzLTkxNGEtYWIxNjEwNzMxN2MxX2tpODJsYWRkMC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:w980_st7"
}
,{
 _id: 9139,
 in_GraphicId: "KI41FADD0",
 Description: "Complete Fridge",
 Width: 558,
 Height: 1221,
 Depth: 546,
 WidthPos: -279,
 HeightPos: 0,
 DepthPos: -546,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9e9e065-3fe1-489e-853d-88f51a0e3ced_ki41fadd0.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7UTGM2S4HBrnKvFlbQYRO7%2B3q99fSI419Dp0oveCeHA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTllOWUwNjUtM2ZlMS00ODllLTg1M2QtODhmNTFhMGUzY2VkX2tpNDFmYWRkMC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:w980_st7"
}
,{
 _id: 9140,
 in_GraphicId: "HoodDefault",
 Description: "Hood Base",
 Width: 598,
 Height: 41,
 Depth: 500,
 WidthPos: -299,
 HeightPos: 0,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/02494cce-8c96-4794-9138-fa27c529a954_carc_lc66bbm50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=oXQMgsMDfd80BkctlK%2FXhVloDFRfpMRRu%2FtXa2d0r9U%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDI0OTRjY2UtOGM5Ni00Nzk0LTkxMzgtZmEyN2M1MjlhOTU0X2NhcmNfbGM2NmJibTUwLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9141,
 in_GraphicId: "HoodDefault",
 Description: "Hood Tower",
 Width: 260,
 Height: 700,
 Depth: 250,
 WidthPos: -130,
 HeightPos: 41,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d7476195-2507-4512-87cb-5e4d6be03ae6_tower_lc66bbm50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Exs2aquC63ND1He1sffuqujpDtyVMDN7HCQhtVzykTw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDc0NzYxOTUtMjUwNy00NTEyLTg3Y2ItNWU0ZDZiZTAzYWU2X3Rvd2VyX2xjNjZiYm01MC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9142,
 in_GraphicId: "HoodDefault",
 Description: "Hood Label",
 Width: 150,
 Height: 15,
 Depth: 1,
 WidthPos: -75,
 HeightPos: 13,
 DepthPos: 500,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9143,
 in_GraphicId: "HoodDefault",
 Description: "Logo",
 Width: 50,
 Height: 8.8,
 Depth: 1,
 WidthPos: -25,
 HeightPos: 150,
 DepthPos: 250,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4fafff43-79a7-425e-b7f4-fcb60a30299a_siemens.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=imJBUzMNYT4EKrpcDzCQced31xLOaTZAmYnp4GIJF2M%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGZhZmZmNDMtNzlhNy00MjVlLWI3ZjQtZmNiNjBhMzAyOTlhX3NpZW1lbnMub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9144,
 in_GraphicId: "LC66BBM50",
 Description: "Hood Tower",
 Width: 260,
 Height: 700,
 Depth: 250,
 WidthPos: -130,
 HeightPos: 41,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d7476195-2507-4512-87cb-5e4d6be03ae6_tower_lc66bbm50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Exs2aquC63ND1He1sffuqujpDtyVMDN7HCQhtVzykTw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDc0NzYxOTUtMjUwNy00NTEyLTg3Y2ItNWU0ZDZiZTAzYWU2X3Rvd2VyX2xjNjZiYm01MC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9145,
 in_GraphicId: "LC66BBM50",
 Description: "Hood Base",
 Width: 598,
 Height: 41,
 Depth: 500,
 WidthPos: -299,
 HeightPos: 0,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/02494cce-8c96-4794-9138-fa27c529a954_carc_lc66bbm50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=oXQMgsMDfd80BkctlK%2FXhVloDFRfpMRRu%2FtXa2d0r9U%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDI0OTRjY2UtOGM5Ni00Nzk0LTkxMzgtZmEyN2M1MjlhOTU0X2NhcmNfbGM2NmJibTUwLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9146,
 in_GraphicId: "LC66BBM50",
 Description: "Logo",
 Width: 50,
 Height: 8.8,
 Depth: 1,
 WidthPos: -25,
 HeightPos: 150,
 DepthPos: 250,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4fafff43-79a7-425e-b7f4-fcb60a30299a_siemens.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=imJBUzMNYT4EKrpcDzCQced31xLOaTZAmYnp4GIJF2M%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGZhZmZmNDMtNzlhNy00MjVlLWI3ZjQtZmNiNjBhMzAyOTlhX3NpZW1lbnMub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9147,
 in_GraphicId: "LC66BBM50",
 Description: "Hood Label",
 Width: 150,
 Height: 15,
 Depth: 1,
 WidthPos: -75,
 HeightPos: 13,
 DepthPos: 500,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9148,
 in_GraphicId: "LC96BBM50",
 Description: "Hood Tower",
 Width: 260,
 Height: 700,
 Depth: 250,
 WidthPos: -130,
 HeightPos: 51,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d7476195-2507-4512-87cb-5e4d6be03ae6_tower_lc66bbm50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Exs2aquC63ND1He1sffuqujpDtyVMDN7HCQhtVzykTw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDc0NzYxOTUtMjUwNy00NTEyLTg3Y2ItNWU0ZDZiZTAzYWU2X3Rvd2VyX2xjNjZiYm01MC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9149,
 in_GraphicId: "LC96BBM50",
 Description: "Hood Base",
 Width: 898,
 Height: 51,
 Depth: 500,
 WidthPos: -449,
 HeightPos: 0,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/37e5418a-f979-4a67-90c1-755223b19d5d_carc_lc96bbm50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=zZu06vxR%2FK0TfWraOrR9EypN6sSCad96ek52c04JCXw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzdlNTQxOGEtZjk3OS00YTY3LTkwYzEtNzU1MjIzYjE5ZDVkX2NhcmNfbGM5NmJibTUwLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9150,
 in_GraphicId: "LC96BBM50",
 Description: "Logo",
 Width: 50,
 Height: 8.8,
 Depth: 1,
 WidthPos: -25,
 HeightPos: 150,
 DepthPos: 250,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4fafff43-79a7-425e-b7f4-fcb60a30299a_siemens.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=imJBUzMNYT4EKrpcDzCQced31xLOaTZAmYnp4GIJF2M%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGZhZmZmNDMtNzlhNy00MjVlLWI3ZjQtZmNiNjBhMzAyOTlhX3NpZW1lbnMub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9151,
 in_GraphicId: "LC96BBM50",
 Description: "Hood Label",
 Width: 150,
 Height: 15,
 Depth: 1,
 WidthPos: -75,
 HeightPos: 18,
 DepthPos: 500,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9152,
 in_GraphicId: "LC65KDK60",
 Description: "Hood Base",
 Width: 456,
 Height: 1090,
 Depth: 318.5,
 WidthPos: -228,
 HeightPos: 38,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/02d83b3e-1431-436a-9d05-2142924a8cdf_carc_lc65kdk60.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=MWU89UpU1VzUhCeV7NiLhqtVlm6vRG8WUS6%2F8WV6R3A%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDJkODNiM2UtMTQzMS00MzZhLTlkMDUtMjE0MjkyNGE4Y2RmX2NhcmNfbGM2NWtkazYwLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9153,
 in_GraphicId: "LC65KDK60",
 Description: "Hood Front",
 Width: 600,
 Height: 440,
 Depth: 241,
 WidthPos: -300,
 HeightPos: 0,
 DepthPos: 151,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:lc65kdk60"
}
,{
 _id: 9154,
 in_GraphicId: "LC85KDK60",
 Description: "Hood Base",
 Width: 456,
 Height: 1090,
 Depth: 318.5,
 WidthPos: -228,
 HeightPos: 38,
 DepthPos: 0,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/02d83b3e-1431-436a-9d05-2142924a8cdf_carc_lc65kdk60.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=MWU89UpU1VzUhCeV7NiLhqtVlm6vRG8WUS6%2F8WV6R3A%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDJkODNiM2UtMTQzMS00MzZhLTlkMDUtMjE0MjkyNGE4Y2RmX2NhcmNfbGM2NWtkazYwLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9155,
 in_GraphicId: "LC85KDK60",
 Description: "Hood Front",
 Width: 794,
 Height: 440,
 Depth: 241,
 WidthPos: -397,
 HeightPos: 0,
 DepthPos: 151,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9913ab49-47cb-4072-a973-74accd04f41b_front_lc85kdk60.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=8lPfKXGnJPuL7xJhAhAUpjMu5AaMSTKUTeR0LuuwIrE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTkxM2FiNDktNDdjYi00MDcyLWE5NzMtNzRhY2NkMDRmNDFiX2Zyb250X2xjODVrZGs2MC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:lc85kdk60"
}
,{
 _id: 9156,
 in_GraphicId: "CS736G1B1",
 Description: "Oven Handle",
 Width: 507,
 Height: 14,
 Depth: 45,
 WidthPos: -253.5,
 HeightPos: 304,
 DepthPos: 19.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1a8d99ce-3f54-42fc-b875-8e63c5eb5d44_cm776gkb1_g.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=2x8PGrSHyNZAmo0x6e64zVHDcI70GWHnlmMt%2FHzEufs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWE4ZDk5Y2UtM2Y1NC00MmZjLWI4NzUtOGU2M2M1ZWI1ZDQ0X2NtNzc2Z2tiMV9nLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9157,
 in_GraphicId: "BE732R1B1",
 Description: "Oven Front",
 Width: 594,
 Height: 382,
 Depth: 19.5,
 WidthPos: -297.5,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:be732l1b1"
}
,{
 _id: 9158,
 in_GraphicId: "BE732R1B1",
 Description: "Oven carcase",
 Width: 560,
 Height: 362,
 Depth: 300,
 WidthPos: -280,
 HeightPos: 14,
 DepthPos: -300,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9159,
 in_GraphicId: "DefaultHob",
 Description: "Hob carcase",
 Width: 539,
 Height: 49,
 Depth: 470,
 WidthPos: -269.5,
 HeightPos: -49,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9160,
 in_GraphicId: "DefaultHob",
 Description: "Hob frame",
 Width: 570,
 Height: 1,
 Depth: 511,
 WidthPos: -285,
 HeightPos: 0,
 DepthPos: -500.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ba47816f-7bb5-4466-98d1-7ed9fea48335_et601fnp1e_frame.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=NuaRU8Bxy8FtzE1FytOMr8ssLQPgf9zxE9Hg%2FsEGSek%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmE0NzgxNmYtN2JiNS00NDY2LTk4ZDEtN2VkOWZlYTQ4MzM1X2V0NjAxZm5wMWVfZnJhbWUub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9161,
 in_GraphicId: "DefaultHob",
 Description: "Hob glass",
 Width: 532,
 Height: 0.5,
 Depth: 471.5,
 WidthPos: -266,
 HeightPos: 0,
 DepthPos: -480.75,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9162,
 in_GraphicId: "PUXU",
 Description: "Hob carcase",
 Width: 809,
 Height: 199,
 Depth: 579,
 WidthPos: -404.5,
 HeightPos: -199,
 DepthPos: -579,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4690e9ce-7e52-4233-b78d-2bff8e4bd5c6_puxu_carc.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FA14rxH47qop6fgNYeo5kPNfAhOcwi4ZgsWJvgjl2ug%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDY5MGU5Y2UtN2U1Mi00MjMzLWI3OGQtMmJmZjhlNGJkNWM2X3B1eHVfY2FyYy5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9163,
 in_GraphicId: "PUXU",
 Description: "Hob glass",
 Width: 830,
 Height: 4,
 Depth: 515,
 WidthPos: -415,
 HeightPos: 0,
 DepthPos: -505,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:puxu"
}
,{
 _id: 9164,
 in_GraphicId: "ET601FNP1E",
 Description: "Hob carcase",
 Width: 539,
 Height: 49,
 Depth: 470,
 WidthPos: -269.5,
 HeightPos: -49,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9165,
 in_GraphicId: "ET601FNP1E",
 Description: "Hob frame",
 Width: 570,
 Height: 1,
 Depth: 511,
 WidthPos: -285,
 HeightPos: 0,
 DepthPos: -500.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ba47816f-7bb5-4466-98d1-7ed9fea48335_et601fnp1e_frame.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=NuaRU8Bxy8FtzE1FytOMr8ssLQPgf9zxE9Hg%2FsEGSek%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmE0NzgxNmYtN2JiNS00NDY2LTk4ZDEtN2VkOWZlYTQ4MzM1X2V0NjAxZm5wMWVfZnJhbWUub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9166,
 in_GraphicId: "ET601FNP1E",
 Description: "Hob glass",
 Width: 532,
 Height: 0.5,
 Depth: 471.5,
 WidthPos: -266,
 HeightPos: 0,
 DepthPos: -480.75,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:et601fnp1e"
}
,{
 _id: 9167,
 in_GraphicId: "EX975LXC1E",
 Description: "Hob carcase",
 Width: 864,
 Height: 37,
 Depth: 495,
 WidthPos: -432,
 HeightPos: -37,
 DepthPos: -497.5,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9168,
 in_GraphicId: "EX975LXC1E",
 Description: "Hob frame",
 Width: 910,
 Height: 6,
 Depth: 519,
 WidthPos: -455,
 HeightPos: 0,
 DepthPos: -509.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b7477f4e-cb4a-489d-9a8f-7b6bee0e54f8_ex975lxc1e_frame.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1OR09q%2BBLN8%2Bo%2Bqh2RKJH93oG21McEG%2Frenlomvrx1c%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjc0NzdmNGUtY2I0YS00ODlkLTlhOGYtN2I2YmVlMGU1NGY4X2V4OTc1bHhjMWVfZnJhbWUub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9169,
 in_GraphicId: "EX975LXC1E",
 Description: "Hob glass",
 Width: 905,
 Height: 5,
 Depth: 520,
 WidthPos: -452.5,
 HeightPos: 1,
 DepthPos: -510,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:ex975lxc1e"
}
,{
 _id: 9170,
 in_GraphicId: "ER6A6PB70D",
 Description: "Hob glass",
 Width: 602,
 Height: 5,
 Depth: 520,
 WidthPos: -301,
 HeightPos: 0,
 DepthPos: -505,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:er6a6pb70d"
}
,{
 _id: 9171,
 in_GraphicId: "ER6A6PB70D",
 Description: "Hob carcase",
 Width: 550,
 Height: 50,
 Depth: 470,
 WidthPos: -275,
 HeightPos: -50,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9172,
 in_GraphicId: "ER6A6PB70D",
 Description: "Hob handle",
 Width: 209,
 Height: 21,
 Depth: 40,
 WidthPos: -103.5,
 HeightPos: 5,
 DepthPos: -47,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/09dfd9a7-5681-4556-ad8a-4fe14342be8b_er6a6pb70d_handle.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Gn9w7x2mgY7GpvyouV0kx2d0EZF2dQWk1uooR7Zjgbo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDlkZmQ5YTctNTY4MS00NTU2LWFkOGEtNGZlMTQzNDJiZThiX2VyNmE2cGI3MGRfaGFuZGxlLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:chrome"
}
,{
 _id: 9173,
 in_GraphicId: "ER6A6PB70D",
 Description: "Hob grill",
 Width: 590,
 Height: 30,
 Depth: 427,
 WidthPos: -294,
 HeightPos: 5,
 DepthPos: -488,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/70fc4cf4-974b-4270-b9e8-d2e18db01d3c_er6a6pb70d_grill.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=kszcuGP%2F23jjAeOyOVfayBmTwrNk0UNvP647MXeXS1Y%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzBmYzRjZjQtOTc0Yi00MjcwLWI5ZTgtZDJlMThkYjAxZDNjX2VyNmE2cGI3MGRfZ3JpbGwub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9174,
 in_GraphicId: "SinkDefault",
 Description: "Sink top",
 Width: 990,
 Height: 5,
 Depth: 490,
 WidthPos: -495,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axis_l"
}
,{
 _id: 9175,
 in_GraphicId: "SinkDefault",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -480,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9176,
 in_GraphicId: "Dinas_L",
 Description: "Sink top",
 Width: 860,
 Height: 5,
 Depth: 500,
 WidthPos: -430,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:dinas_l"
}
,{
 _id: 9177,
 in_GraphicId: "Dinas_L",
 Description: "Sink base",
 Width: 340,
 Height: 195,
 Depth: 400,
 WidthPos: -380,
 HeightPos: -195,
 DepthPos: -440,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9178,
 in_GraphicId: "Dinas_R",
 Description: "Sink top",
 Width: 860,
 Height: 5,
 Depth: 500,
 WidthPos: -430,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:dinas_r"
}
,{
 _id: 9179,
 in_GraphicId: "Dinas_R",
 Description: "Sink base",
 Width: 340,
 Height: 195,
 Depth: 400,
 WidthPos: 40,
 HeightPos: -195,
 DepthPos: -440,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9180,
 in_GraphicId: "HB774G1B1",
 Description: "Oven Front",
 Width: 594,
 Height: 587.5,
 Depth: 19.5,
 WidthPos: -297.5,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:hb774g1b1"
}
,{
 _id: 9181,
 in_GraphicId: "BI510CNR0",
 Description: "Oven carcase front",
 Width: 560,
 Height: 140,
 Depth: 1,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -1,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9182,
 in_GraphicId: "CM776GKB1",
 Description: "Oven carcase front",
 Width: 560,
 Height: 444,
 Depth: 1,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -1,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9183,
 in_GraphicId: "HB774G1B1",
 Description: "Oven carcase",
 Width: 560,
 Height: 577,
 Depth: 525,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -526,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/39c07760-d7d6-4d0b-8aea-80bb3028b9af_hb774g1b1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Vcy22aJQQwE%2FtykWhmI5ittmmKXHBNDoxZv7gdaFUU4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzljMDc3NjAtZDdkNi00ZDBiLThhZWEtODBiYjMwMjhiOWFmX2hiNzc0ZzFiMS5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9184,
 in_GraphicId: "CS736G1B1",
 Description: "Oven carcase front",
 Width: 560,
 Height: 444,
 Depth: 1,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -1,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9185,
 in_GraphicId: "HB774G1B1",
 Description: "Oven Handle",
 Width: 507,
 Height: 14,
 Depth: 45,
 WidthPos: -253.5,
 HeightPos: 440,
 DepthPos: 19.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1a8d99ce-3f54-42fc-b875-8e63c5eb5d44_cm776gkb1_g.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=2x8PGrSHyNZAmo0x6e64zVHDcI70GWHnlmMt%2FHzEufs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWE4ZDk5Y2UtM2Y1NC00MmZjLWI4NzUtOGU2M2M1ZWI1ZDQ0X2NtNzc2Z2tiMV9nLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9186,
 in_GraphicId: "HE510ABS2",
 Description: "Oven Handle",
 Width: 469,
 Height: 16.7,
 Depth: 12.3,
 WidthPos: -234.5,
 HeightPos: 440,
 DepthPos: 49,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7292cf2f-793f-4a2e-8bc2-9c7f39df6207_he510abs2_handlebar.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=lj82REhDswuoucrtS5YU22atIOH4JlslF%2FcarxTa1Ho%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzI5MmNmMmYtNzkzZi00YTJlLThiYzItOWM3ZjM5ZGY2MjA3X2hlNTEwYWJzMl9oYW5kbGViYXIub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9187,
 in_GraphicId: "HB774G1B1",
 Description: "Oven carcase front",
 Width: 560,
 Height: 577,
 Depth: 1,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -1,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9188,
 in_GraphicId: "HE510ABS2",
 Description: "Oven Front",
 Width: 594,
 Height: 587.5,
 Depth: 19.5,
 WidthPos: -297,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:he510abs2"
}
,{
 _id: 9189,
 in_GraphicId: "HE510ABS2",
 Description: "Oven carcase",
 Width: 560,
 Height: 574,
 Depth: 525,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -526,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5fe94730-4168-4cbb-a844-9e4e88dfd0f8_he510abs2_carc.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=mVD2FXM1i5BCx5xLh8rrNuCBMyFnXYU1sLfHnUC0TEY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWZlOTQ3MzAtNDE2OC00Y2JiLWE4NDQtOWU0ZTg4ZGZkMGY4X2hlNTEwYWJzMl9jYXJjLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9190,
 in_GraphicId: "HE510ABS2",
 Description: "Oven Handle",
 Width: 469,
 Height: 16.9,
 Depth: 41,
 WidthPos: -234.5,
 HeightPos: 439.9,
 DepthPos: 19.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cd5e856b-c36c-44b6-9a0c-05b8029f3658_he510abs2_handleblock.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=dJmTZdVpLWGBZn0mn6XrRi%2BGxS0S79PFVAxAOL3iGOU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2Q1ZTg1NmItYzM2Yy00NGI2LTlhMGMtMDViODAyOWYzNjU4X2hlNTEwYWJzMl9oYW5kbGVibG9jay5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9191,
 in_GraphicId: "HE510ABS2",
 Description: "OvenKnob",
 Width: 486,
 Height: 42,
 Depth: 15,
 WidthPos: -244,
 HeightPos: 516,
 DepthPos: 20,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b2e92e47-e470-4f2d-b85f-c880254b8aee_he510abs2_knob.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=OqAEi36OeDIE617ic7fUbQSLU5yY8Zu6lgRg3EyAe1w%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjJlOTJlNDctZTQ3MC00ZjJkLWI4NWYtYzg4MDI1NGI4YWVlX2hlNTEwYWJzMl9rbm9iLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9192,
 in_GraphicId: "HE510ABS2",
 Description: "Oven carcase front",
 Width: 560,
 Height: 574,
 Depth: 1,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -1,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:metallic_black"
}
,{
 _id: 9193,
 in_GraphicId: "Metra_R",
 Description: "Sink top",
 Width: 1000,
 Height: 10,
 Depth: 500,
 WidthPos: -500,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/33a3388d-1296-4abb-89ef-a92659e0d94c_metra_frame.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=yCjfv%2FrD4sTrTvY%2FK6BEw%2FoANLPkWS1ZT7FCF7uNoqw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzNhMzM4OGQtMTI5Ni00YWJiLTg5ZWYtYTkyNjU5ZTBkOTRjX21ldHJhX2ZyYW1lLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:u960_st9"
}
,{
 _id: 9194,
 in_GraphicId: "Metra_R",
 Description: "Sink top",
 Width: 495,
 Height: 3,
 Depth: 430,
 WidthPos: -15,
 HeightPos: 0,
 DepthPos: -455,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3cf43978-446b-4cd2-b4a8-9b47206860b0_metra_r_base.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=PnWI9%2FnjnczQGYidnZgi3AGWa2Am6kGjupGFfqwcl9A%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2NmNDM5NzgtNDQ2Yi00Y2QyLWI0YTgtOWI0NzIwNjg2MGIwX21ldHJhX3JfYmFzZS5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:u960_st9"
}
,{
 _id: 9195,
 in_GraphicId: "Metra_R",
 Description: "Sink base",
 Width: 495,
 Height: 175,
 Depth: 430,
 WidthPos: -15,
 HeightPos: -190,
 DepthPos: -455,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3cf43978-446b-4cd2-b4a8-9b47206860b0_metra_r_base.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=PnWI9%2FnjnczQGYidnZgi3AGWa2Am6kGjupGFfqwcl9A%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2NmNDM5NzgtNDQ2Yi00Y2QyLWI0YTgtOWI0NzIwNjg2MGIwX21ldHJhX3JfYmFzZS5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:u960_st9"
}
,{
 _id: 9196,
 in_GraphicId: "Metra_R",
 Description: "Sink top",
 Width: 950,
 Height: 7,
 Depth: 430,
 WidthPos: -475,
 HeightPos: 1.5,
 DepthPos: -455,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/755487b7-de8e-4a67-98ca-40f6c6f39bbd_metra_r_inlay.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=j4721venLXyRd8w%2BPKCSlKLcNXPygP96bJpxqxUu2u4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzU1NDg3YjctZGU4ZS00YTY3LTk4Y2EtNDBmNmM2ZjM5YmJkX21ldHJhX3JfaW5sYXkub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:u960_st9"
}
,{
 _id: 9197,
 in_GraphicId: "Metra_R",
 Description: "Sink bottom",
 Width: 100,
 Height: 1,
 Depth: 100,
 WidthPos: 60,
 HeightPos: 1,
 DepthPos: -290,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/080851c0-32fa-4ccf-ad8b-44fd7f151bd1_metra_bottom.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Fkk4nVve9DRYdGIkrNifZLXkxCz5qCLTCwcygoZvwBA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDgwODUxYzAtMzJmYS00Y2NmLWFkOGItNDRmZDdmMTUxYmQxX21ldHJhX2JvdHRvbS5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9198,
 in_GraphicId: "Cosmopolitan",
 Description: "Mixer tab",
 Width: 105,
 Height: 306,
 Depth: 259,
 WidthPos: -25.5,
 HeightPos: 0,
 DepthPos: -25.5,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e87aa0f8-bb45-4a3d-9e0f-fc82ec0475e9_grohe_cosmopolitan.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=mXeAOQWExl3vGhy915CuqBUpbfAttMqGe0v1DwsOR%2Bg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTg3YWEwZjgtYmI0NS00YTNkLTllMGYtZmM4MmVjMDQ3NWU5X2dyb2hlX2Nvc21vcG9saXRhbi5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:chrome"
}
,{
 _id: 9199,
 in_GraphicId: "HGR7764B1",
 Description: "Oven Front",
 Width: 594,
 Height: 595,
 Depth: 19.5,
 WidthPos: -297.5,
 HeightPos: 7.5,
 DepthPos: 0,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:hrg7764b1"
}
,{
 _id: 9200,
 in_GraphicId: "HGR7764B1",
 Description: "Oven carcase",
 Width: 560,
 Height: 584.5,
 Depth: 548,
 WidthPos: -280,
 HeightPos: 0,
 DepthPos: -548.5,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9201,
 in_GraphicId: "Minta",
 Description: "Mixer tab",
 Width: 132,
 Height: 333,
 Depth: 274,
 WidthPos: -27.5,
 HeightPos: 0,
 DepthPos: -28,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/44bda16f-05c3-4732-9c8a-883089e0e3b6_grohe_minta.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=imHjE5VLrEcsZ%2BDZVD81dGA5gMTxLvmCPDd8atl414g%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDRiZGExNmYtMDVjMy00NzMyLTljOGEtODgzMDg5ZTBlM2I2X2dyb2hlX21pbnRhLm9iag==',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:chrome"
}
,{
 _id: 9202,
 in_GraphicId: "Axis_L",
 Description: "Sink top",
 Width: 990,
 Height: 5,
 Depth: 490,
 WidthPos: -495,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axis_l"
}
,{
 _id: 9203,
 in_GraphicId: "Axis_L",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -480,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9204,
 in_GraphicId: "Axis_R",
 Description: "Sink top",
 Width: 990,
 Height: 5,
 Depth: 490,
 WidthPos: -495,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axis_r"
}
,{
 _id: 9205,
 in_GraphicId: "Axis_R",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -68.5,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9206,
 in_GraphicId: "Axia_White_L",
 Description: "Sink top",
 Width: 980,
 Height: 5,
 Depth: 490,
 WidthPos: -490,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axia_white_l"
}
,{
 _id: 9207,
 in_GraphicId: "Axia_White_L",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -480,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9208,
 in_GraphicId: "Axia_White_R",
 Description: "Sink top",
 Width: 980,
 Height: 5,
 Depth: 490,
 WidthPos: -490,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axia_white_r"
}
,{
 _id: 9209,
 in_GraphicId: "Axia_White_R",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -68.5,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9210,
 in_GraphicId: "Axia_Grey_L",
 Description: "Sink top",
 Width: 980,
 Height: 5,
 Depth: 490,
 WidthPos: -490,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axia_grey_l"
}
,{
 _id: 9211,
 in_GraphicId: "Axia_Grey_L",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -480,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9212,
 in_GraphicId: "Axia_Grey_R",
 Description: "Sink top",
 Width: 980,
 Height: 5,
 Depth: 490,
 WidthPos: -490,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axia_grey_r"
}
,{
 _id: 9213,
 in_GraphicId: "Axia_Grey_R",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -68.5,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9214,
 in_GraphicId: "Axia_Anthrazit_L",
 Description: "Sink top",
 Width: 980,
 Height: 5,
 Depth: 490,
 WidthPos: -490,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axia_anthrazit_l"
}
,{
 _id: 9215,
 in_GraphicId: "Axia_Anthrazit_L",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -480,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9216,
 in_GraphicId: "Axia_Anthrazit_R",
 Description: "Sink top",
 Width: 980,
 Height: 5,
 Depth: 490,
 WidthPos: -490,
 HeightPos: 0,
 DepthPos: -490,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:axia_anthrazit_r"
}
,{
 _id: 9217,
 in_GraphicId: "Axia_Anthrazit_R",
 Description: "Sink base",
 Width: 548.5,
 Height: 190,
 Depth: 470,
 WidthPos: -68.5,
 HeightPos: -195,
 DepthPos: -480,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9218,
 in_GraphicId: "SN87TX02CE",
 Description: "Complete Dishwasher",
 Width: 598,
 Height: 813.5,
 Depth: 550,
 WidthPos: -299,
 HeightPos: -813.5,
 DepthPos: -550,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c84859a9-c718-4ce4-b667-00099283f11e_sn87tx02ce.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=PpyyS51dI93E8mzWPWf6jOX9JvSGww8dzJ1dTz48qwM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzg0ODU5YTktYzcxOC00Y2U0LWI2NjctMDAwOTkyODNmMTFlX3NuODd0eDAyY2Uub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9219,
 in_GraphicId: "SR65YX08ME",
 Description: "Complete Dishwasher",
 Width: 448,
 Height: 813.5,
 Depth: 550,
 WidthPos: -224,
 HeightPos: -813.5,
 DepthPos: -550,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6d7f88f9-1343-44a7-8b3f-0f7bb8336582_sr65yx08me.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=JmbqC6cX6VrZ7xEqcEW5qKqbi8XpAIre1Eha%2FTVdNdM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmQ3Zjg4ZjktMTM0My00NGE3LThiM2YtMGY3YmI4MzM2NTgyX3NyNjV5eDA4bWUub2Jq',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9220,
 in_GraphicId: "SN55ZS07CE",
 Description: "Dishwasher Carcase",
 Width: 598,
 Height: 813.5,
 Depth: 515,
 WidthPos: -299,
 HeightPos: -813.5,
 DepthPos: -548,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3c45c286-eae2-42eb-be9b-6ee176a03634_carcasedw.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=FIU7Ws4XniiGJHXbGRUj%2BqJym38VpHi1MAIz0KL6svo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2M0NWMyODYtZWFlMi00MmViLWJlOWItNmVlMTc2YTAzNjM0X2NhcmNhc2Vkdy5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9221,
 in_GraphicId: "SN55ZS07CE",
 Description: "Dishwasher Frontpanel",
 Width: 594,
 Height: 530,
 Depth: 30,
 WidthPos: -297,
 HeightPos: -650,
 DepthPos: -30,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:chrome"
}
,{
 _id: 9222,
 in_GraphicId: "SN55ZS07CE",
 Description: "Dishwasher Controlpanel",
 Width: 598,
 Height: 115,
 Depth: 53,
 WidthPos: -299,
 HeightPos: -120,
 DepthPos: -30,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:sn55zs07ce"
}
,{
 _id: 9223,
 in_GraphicId: "SR55ZS10ME",
 Description: "Dishwasher Carcase",
 Width: 448,
 Height: 813.5,
 Depth: 515,
 WidthPos: -224,
 HeightPos: -813.5,
 DepthPos: -548,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4350b225-fb0d-4d4c-9305-02622ca13b41_carcasedw_small.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=cjEm8sYcg1T%2FKixwLSwkgM2omKVu2hfD682bv1t84lU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDM1MGIyMjUtZmIwZC00ZDRjLTkzMDUtMDI2MjJjYTEzYjQxX2NhcmNhc2Vkd19zbWFsbC5vYmo=',
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "egger:f765_st20"
}
,{
 _id: 9224,
 in_GraphicId: "SR55ZS10ME",
 Description: "Dishwasher Frontpanel",
 Width: 444,
 Height: 530,
 Depth: 30,
 WidthPos: -222,
 HeightPos: -650,
 DepthPos: -30,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:chrome"
}
,{
 _id: 9225,
 in_GraphicId: "SR55ZS10ME",
 Description: "Dishwasher Controlpanel",
 Width: 448,
 Height: 115,
 Depth: 53,
 WidthPos: -224,
 HeightPos: -120,
 DepthPos: -30,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParams: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParams
  }
 },
 MaterialId: "cabinetlibrary:sr55zs10me"
}
];
