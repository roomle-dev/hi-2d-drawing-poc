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
import { ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01 } from '../var-interfaces';
import { IThreeDModelData } from '../models-3d'

export interface cti_tab_FrontConstruction {
  readonly in_PartGroup? : string;
  readonly in_FrontProgram? : string;
  readonly in_MinWidth : number;
  readonly in_MaxWidth : number;
  readonly in_MinHeight : number;
  readonly in_MaxHeight : number;
  readonly in_HandleStrip? : string;
  readonly in_HandlePosType? : string;
}

export interface ctm_tab_FrontConstruction {
  readonly matrix_EdgeTypeTop? : string;
  readonly matrix_EdgeTypeLeft? : string;
  readonly matrix_EdgeTypeBtm? : string;
  readonly matrix_EdgeTypeRight? : string;
  readonly matrix_EdgeJointType? : string;
}

export interface cto_tab_FrontConstruction extends ctm_tab_FrontConstruction {
  readonly _id : number;
  readonly FrontModuleId? : string;
  readonly FrontConstructionId? : string;
  readonly FrontDesign? : string;
  readonly FrameType? : string;
  readonly FramePartsWidthHor : number;
  readonly FramePartsWidthVert : number;
  readonly FrameFillingType? : string;
  readonly FrameFillingMaterial? : string;
  readonly FrameFillingThk : number;
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number;
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number;
  readonly Thickness : number;
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number;
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number;
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData|undefined;
  readonly StretchParameter?: any;
  readonly FrameCenterPanelType? : string;
  readonly FrameCenterPanelFixing? : string;
  readonly Cutout? : boolean;
  readonly InHouseProduction? : boolean;
  readonly Weight : number;
  readonly UnitOfWeight? : string;
}

export interface ICT_tab_FrontConstruction
extends cti_tab_FrontConstruction, cto_tab_FrontConstruction {}

export class ct2_tab_FrontConstruction {

public findExactly(
     in_PartGroup: string|undefined,
     in_FrontProgram: string|undefined,
     in_MinWidth: number,
     in_MaxWidth: number,
     in_MinHeight: number,
     in_MaxHeight: number,
     in_HandleStrip: string|undefined,
     in_HandlePosType: string|undefined,
): cto_tab_FrontConstruction | undefined {
  const res = ct_tab_FrontConstruction.find((p) => 
p.in_PartGroup === in_PartGroup
 && p.in_FrontProgram === in_FrontProgram
 && p.in_MinWidth === in_MinWidth
 && p.in_MaxWidth === in_MaxWidth
 && p.in_MinHeight === in_MinHeight
 && p.in_MaxHeight === in_MaxHeight
 && p.in_HandleStrip === in_HandleStrip
 && p.in_HandlePosType === in_HandlePosType
);
return res;
}

public find(
predicate: (value: cti_tab_FrontConstruction) => boolean
): cto_tab_FrontConstruction | undefined {
  for (let index = 0; index < ct_tab_FrontConstruction.length; index++){
    const element = ct_tab_FrontConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_FrontConstruction :ICT_tab_FrontConstruction[] = [
{
 _id: 1,
 in_PartGroup: "Door",
 in_FrontProgram: "Classic",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 2,
 in_PartGroup: "Drawer",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 3,
 in_PartGroup: "Door",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripTop",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripTop01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c7287fd6-7780-46b5-b08d-35d984057f68_doorhandlestripe1a.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FE29wuul8Sbe30cL%2BRpM0wSfT4zdALInQ9ZvFR2%2B2jg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzcyODdmZDYtNzc4MC00NmI1LWIwOGQtMzVkOTg0MDU3ZjY4X2Rvb3JoYW5kbGVzdHJpcGUxYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 4,
 in_PartGroup: "Drawer",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripTop",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripTop01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c7287fd6-7780-46b5-b08d-35d984057f68_doorhandlestripe1a.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FE29wuul8Sbe30cL%2BRpM0wSfT4zdALInQ9ZvFR2%2B2jg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzcyODdmZDYtNzc4MC00NmI1LWIwOGQtMzVkOTg0MDU3ZjY4X2Rvb3JoYW5kbGVzdHJpcGUxYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 5,
 in_PartGroup: "Door",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripBtm",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripBtm01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1fbf1d7-5880-43db-94bc-e83993fee231_doorhandlestripe2a.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=YoyEgJS3C%2FXVR6LsMbosY1KWyIuwkB7Qtwi7X2tBfTw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjFmYmYxZDctNTg4MC00M2RiLTk0YmMtZTgzOTkzZmVlMjMxX2Rvb3JoYW5kbGVzdHJpcGUyYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 6,
 in_PartGroup: "Drawer",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripBtm",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripBtm01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1fbf1d7-5880-43db-94bc-e83993fee231_doorhandlestripe2a.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=YoyEgJS3C%2FXVR6LsMbosY1KWyIuwkB7Qtwi7X2tBfTw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjFmYmYxZDctNTg4MC00M2RiLTk0YmMtZTgzOTkzZmVlMjMxX2Rvb3JoYW5kbGVzdHJpcGUyYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 7,
 in_PartGroup: "Door",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripLeft",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripLeft01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6a6486e7-52e0-46ff-b233-1744be7baef0_doorhandlestripela.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TAGT2VbWDi23sjTtakYX2sQcjRmuhAPU1p9m93thkN4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmE2NDg2ZTctNTJlMC00NmZmLWIyMzMtMTc0NGJlN2JhZWYwX2Rvb3JoYW5kbGVzdHJpcGVsYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 8,
 in_PartGroup: "Drawer",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripLeft",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripLeft01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6a6486e7-52e0-46ff-b233-1744be7baef0_doorhandlestripela.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TAGT2VbWDi23sjTtakYX2sQcjRmuhAPU1p9m93thkN4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmE2NDg2ZTctNTJlMC00NmZmLWIyMzMtMTc0NGJlN2JhZWYwX2Rvb3JoYW5kbGVzdHJpcGVsYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 9,
 in_PartGroup: "Door",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripRight",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripRight01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a67edae0-2b14-4362-972f-b41178bcbf35_doorhandlestripera.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=M7Uvpw4HAB13jue5oRAJ30rHhlwzmiAmePS9N1sAMX4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTY3ZWRhZTAtMmIxNC00MzYyLTk3MmYtYjQxMTc4YmNiZjM1X2Rvb3JoYW5kbGVzdHJpcGVyYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 10,
 in_PartGroup: "Drawer",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripRight",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripRight01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a67edae0-2b14-4362-972f-b41178bcbf35_doorhandlestripera.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=M7Uvpw4HAB13jue5oRAJ30rHhlwzmiAmePS9N1sAMX4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTY3ZWRhZTAtMmIxNC00MzYyLTk3MmYtYjQxMTc4YmNiZjM1X2Rvb3JoYW5kbGVzdHJpcGVyYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 11,
 in_PartGroup: "Filler",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 12,
 in_PartGroup: "Fliplift",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 13,
 in_PartGroup: "Door",
 in_FrontProgram: "Nature",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 14,
 in_PartGroup: "Drawer",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 220,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 15,
 in_PartGroup: "Door",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "TraditionFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "HeightCoveredWidth",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "WoodLikeFrame",
 FrameFillingMaterial: "Chipboard",
 FrameFillingThk: 8,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 16,
 in_PartGroup: "Drawer",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 220,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 17,
 in_PartGroup: "Door",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "ModernFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "Mitre",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "FloatGlass",
 FrameFillingMaterial: "Glass",
 FrameFillingThk: 4,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 18,
 in_PartGroup: "Drawer",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 220,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "TraditionFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "HeightCoveredWidth",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "WoodLikeFrame",
 FrameFillingMaterial: "Chipboard",
 FrameFillingThk: 8,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 19,
 in_PartGroup: "Drawer",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 220,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "ModernFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "Mitre",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "FloatGlass",
 FrameFillingMaterial: "Glass",
 FrameFillingThk: 4,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 20,
 in_PartGroup: "Fliplift",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 299,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 21,
 in_PartGroup: "Fliplift",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 300,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "TraditionFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "HeightCoveredWidth",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "WoodLikeFrame",
 FrameFillingMaterial: "Chipboard",
 FrameFillingThk: 8,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 22,
 in_PartGroup: "Fliplift",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 300,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "ModernFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "Mitre",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "FloatGlass",
 FrameFillingMaterial: "Glass",
 FrameFillingThk: 4,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 23,
 in_PartGroup: "Fliplift",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 299,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 24,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 25,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripBtm",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripBtm01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b1fbf1d7-5880-43db-94bc-e83993fee231_doorhandlestripe2a.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=YoyEgJS3C%2FXVR6LsMbosY1KWyIuwkB7Qtwi7X2tBfTw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjFmYmYxZDctNTg4MC00M2RiLTk0YmMtZTgzOTkzZmVlMjMxX2Rvb3JoYW5kbGVzdHJpcGUyYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 26,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripLeft",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripLeft01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6a6486e7-52e0-46ff-b233-1744be7baef0_doorhandlestripela.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TAGT2VbWDi23sjTtakYX2sQcjRmuhAPU1p9m93thkN4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmE2NDg2ZTctNTJlMC00NmZmLWIyMzMtMTc0NGJlN2JhZWYwX2Rvb3JoYW5kbGVzdHJpcGVsYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 27,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripRight",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripRight01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a67edae0-2b14-4362-972f-b41178bcbf35_doorhandlestripera.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=M7Uvpw4HAB13jue5oRAJ30rHhlwzmiAmePS9N1sAMX4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTY3ZWRhZTAtMmIxNC00MzYyLTk3MmYtYjQxMTc4YmNiZjM1X2Rvb3JoYW5kbGVzdHJpcGVyYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 28,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "StripGroup1",
 in_HandlePosType: "StripTop",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StripTop01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c7287fd6-7780-46b5-b08d-35d984057f68_doorhandlestripe1a.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FE29wuul8Sbe30cL%2BRpM0wSfT4zdALInQ9ZvFR2%2B2jg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzcyODdmZDYtNzc4MC00NmI1LWIwOGQtMzVkOTg0MDU3ZjY4X2Rvb3JoYW5kbGVzdHJpcGUxYS5vYmo=',
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 29,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 220,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 30,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "Modern",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 220,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "ModernFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "Mitre",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "FloatGlass",
 FrameFillingMaterial: "Glass",
 FrameFillingThk: 4,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 31,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 220,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 32,
 in_PartGroup: "Dishwasher",
 in_FrontProgram: "Tradition",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 220,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "WoodFrame01",
 FrontConstructionId: "TraditionFrame01",
 FrontDesign: "WoodFrame",
 FrameType: "HeightCoveredWidth",
 FramePartsWidthHor: 75,
 FramePartsWidthVert: 75,
 FrameFillingType: "WoodLikeFrame",
 FrameFillingMaterial: "Chipboard",
 FrameFillingThk: 8,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 18.25,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
,{
 _id: 33,
 in_PartGroup: "CornerFiller",
 in_FrontProgram: "All",
 in_MinWidth: 0,
 in_MaxWidth: 9999,
 in_MinHeight: 0,
 in_MaxHeight: 9999,
 in_HandleStrip: "All",
 in_HandlePosType: "All",
 FrontModuleId: "FrontPanel01",
 FrontConstructionId: "StandardPanel01",
 FrontDesign: "FlatPanel",
 FrameType: "Ignore",
 FramePartsWidthHor: 0,
 FramePartsWidthVert: 0,
 FrameFillingType: "Ignore",
 FrameFillingMaterial: "Ignore",
 FrameFillingThk: 0,
  Width(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontWidth - m.mod_FrontGapVert/2 - m.mod_FrontGapCarcase;
  }
,
  Height(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontHeight;
  }
,
 Thickness: 19,
  WidthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapCarcase - m.mod_FrontGapVert / 2;
  }
,
  HeightPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01):number {
    return m.mod_FrontGapCarcase - m.mod_FrontGapVert / 2;
  }
,
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 StretchParameter: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.StretchParameter
  }
 },
 FrameCenterPanelType: "None",
 FrameCenterPanelFixing: "None",
 Cutout: false,
 InHouseProduction: false,
 Weight: 12.16,
 UnitOfWeight: "kg/m²",
 matrix_EdgeTypeTop: "FRE",
 matrix_EdgeTypeLeft: "FRE",
 matrix_EdgeTypeBtm: "FRE",
 matrix_EdgeTypeRight: "FRE",
 matrix_EdgeJointType: "VVVV"
}
];
