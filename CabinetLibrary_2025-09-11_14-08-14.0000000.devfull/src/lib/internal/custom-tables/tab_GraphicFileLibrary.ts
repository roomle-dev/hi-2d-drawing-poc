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

export interface cti_tab_GraphicFileLibrary {
  readonly in_GraphicFileId? : string;
}

export interface ctm_tab_GraphicFileLibrary {
}

export interface cto_tab_GraphicFileLibrary extends ctm_tab_GraphicFileLibrary {
  readonly _id : number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData|undefined;
  readonly Model3DParameters?: any;
}

export interface ICT_tab_GraphicFileLibrary
extends cti_tab_GraphicFileLibrary, cto_tab_GraphicFileLibrary {}

export class ct2_tab_GraphicFileLibrary {

public findExactly(
     in_GraphicFileId: string|undefined,
): cto_tab_GraphicFileLibrary | undefined {
  const res = ct_tab_GraphicFileLibrary.find((p) => 
p.in_GraphicFileId === in_GraphicFileId
);
return res;
}

public find(
predicate: (value: cti_tab_GraphicFileLibrary) => boolean
): cto_tab_GraphicFileLibrary | undefined {
  for (let index = 0; index < ct_tab_GraphicFileLibrary.length; index++){
    const element = ct_tab_GraphicFileLibrary[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_GraphicFileLibrary :ICT_tab_GraphicFileLibrary[] = [
{
 _id: 1421,
 in_GraphicFileId: "Dowel",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/08bbf27c-8704-4792-9418-d2a326f87fc8_dowel.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=m1pa5xxZzQ4b%2BO%2B3Bgx0g6jvrIdcVvBE0C%2FzEgAgI7M%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDhiYmYyN2MtODcwNC00NzkyLTk0MTgtZDJhMzI2Zjg3ZmM4X2Rvd2VsLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1422,
 in_GraphicFileId: "DowelMiddleSide",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/08bbf27c-8704-4792-9418-d2a326f87fc8_dowel.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=m1pa5xxZzQ4b%2BO%2B3Bgx0g6jvrIdcVvBE0C%2FzEgAgI7M%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDhiYmYyN2MtODcwNC00NzkyLTk0MTgtZDJhMzI2Zjg3ZmM4X2Rvd2VsLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1423,
 in_GraphicFileId: "DropDown_Front",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/525a8d89-9471-4006-871a-28652db7536f_bar_front.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=wHwkHB2nv%2BWR0qaJcBazr3YWdu7MQfVoK9YZemF712g%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTI1YThkODktOTQ3MS00MDA2LTg3MWEtMjg2NTJkYjc1MzZmX2Jhcl9mcm9udC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1424,
 in_GraphicFileId: "DropDown_L",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/21fe7682-2abc-417b-923f-6fac94ac6d56_bar_l.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=A9KEf6dqI%2FZSK258wree4z%2BW7RCBi7de9PkSHejmHds%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjFmZTc2ODItMmFiYy00MTdiLTkyM2YtNmZhYzk0YWM2ZDU2X2Jhcl9sLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1425,
 in_GraphicFileId: "DropDown_R",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6c8f6bdd-c85f-4731-aa38-99fc58429514_bar_r.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=8%2FgGr86nUwtVKzM93H39mGwsfFf1cJttXsb4xj4icxc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmM4ZjZiZGQtYzg1Zi00NzMxLWFhMzgtOTlmYzU4NDI5NTE0X2Jhcl9yLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1426,
 in_GraphicFileId: "Graphic_Legra_Syncro",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/decbb19b-ac1b-4372-8c4a-b4c101828e05_snchro_legra_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=QNaRj3jw%2FbL9c62eS%2B%2FGvhCT5sq8xNA80bq1bPfVuUA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGVjYmIxOWItYWMxYi00MzcyLThjNGEtYjRjMTAxODI4ZTA1X3NuY2hyb19sZWdyYV8yLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1427,
 in_GraphicFileId: "Legra_Box_C_270_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2cc31ec5-1244-4201-b44b-74e2f6ac7436_legra_box_c_270_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=NTzz%2BZkqKK4FuW88sXo2BwPYbRvU3nGQO8nzpExrsSs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmNjMzFlYzUtMTI0NC00MjAxLWI0NGItNzRlMmY2YWM3NDM2X2xlZ3JhX2JveF9jXzI3MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1428,
 in_GraphicFileId: "Legra_Box_C_270_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f30f4587-8d7f-43b0-91c7-56dead7e6cab_legra_box_c_270_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=jXdc96C85nJBdghy7663xr77Lz6vScSk6jRSxaEhom4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjMwZjQ1ODctOGQ3Zi00M2IwLTkxYzctNTZkZWFkN2U2Y2FiX2xlZ3JhX2JveF9jXzI3MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1429,
 in_GraphicFileId: "Legra_Box_C_300_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e4437c34-21d5-4ae7-9b19-ab8706514f59_legra_box_c_300_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Wzs%2B2WSswsIY%2FscWA32xEOS56BNqq%2B76x03VRnH0oK8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTQ0MzdjMzQtMjFkNS00YWU3LTliMTktYWI4NzA2NTE0ZjU5X2xlZ3JhX2JveF9jXzMwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1430,
 in_GraphicFileId: "Legra_Box_C_300_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5df27e40-5d82-448f-ac06-827cd7e656ef_legra_box_c_300_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=V4ImSxo%2F4FjXLKiAZu9AtsluP8RwP4OApoGGy1feGno%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWRmMjdlNDAtNWQ4Mi00NDhmLWFjMDYtODI3Y2Q3ZTY1NmVmX2xlZ3JhX2JveF9jXzMwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1431,
 in_GraphicFileId: "Legra_Box_C_350_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/18139b03-e184-4d21-9bc9-11785b8ff11e_legra_box_c_350_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=o1K5TQyRD3N0p9VzGzJDlw9V57xZm6%2BAlWnPzOGG4%2BU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTgxMzliMDMtZTE4NC00ZDIxLTliYzktMTE3ODViOGZmMTFlX2xlZ3JhX2JveF9jXzM1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1432,
 in_GraphicFileId: "Legra_Box_C_350_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/342129e2-ec1f-4761-a759-c85e672c3991_legra_box_c_350_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=kg9G6swXdteXPsgYSJrPi7hsrRIBg9JgUyc3by4u6n0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzQyMTI5ZTItZWMxZi00NzYxLWE3NTktYzg1ZTY3MmMzOTkxX2xlZ3JhX2JveF9jXzM1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1433,
 in_GraphicFileId: "Legra_Box_C_400_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/932f81ea-569e-420b-bd8c-73ee6074b823_legra_box_c_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=51oa1t28HVLGNSC%2Bx87snYRMif1yWLONeoeBFt6deCg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTMyZjgxZWEtNTY5ZS00MjBiLWJkOGMtNzNlZTYwNzRiODIzX2xlZ3JhX2JveF9jXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1434,
 in_GraphicFileId: "Legra_Box_C_400_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e4c57c95-a15e-48a7-a61f-ab2a8244aa41_legra_box_c_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1iBvVmv6q5j1hGnAd4nfxuxLV5tNxK%2FGPDxE4JsuOY4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTRjNTdjOTUtYTE1ZS00OGE3LWE2MWYtYWIyYTgyNDRhYTQxX2xlZ3JhX2JveF9jXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1435,
 in_GraphicFileId: "Legra_Box_C_450_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ba023bfd-139a-4352-8624-b360e200f7ae_legra_box_c_450_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=5qsBFdy4wOUMrqxxd4JZF7Al0BacgXp1RNuDKcU7BtA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmEwMjNiZmQtMTM5YS00MzUyLTg2MjQtYjM2MGUyMDBmN2FlX2xlZ3JhX2JveF9jXzQ1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1436,
 in_GraphicFileId: "Legra_Box_C_450_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6e2b84ca-b05e-4e3f-96e2-de6fd94574e3_legra_box_c_450_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=oM8gb%2FR9ffvkekyMCmY3x81QhLHZKkd5Gs%2BBppQw%2F%2FY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmUyYjg0Y2EtYjA1ZS00ZTNmLTk2ZTItZGU2ZmQ5NDU3NGUzX2xlZ3JhX2JveF9jXzQ1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1437,
 in_GraphicFileId: "Legra_Box_C_500_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/963c299e-6e90-4133-b84f-30320e306554_legra_box_c_500_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ASHNSDnHkgyV8r22sWibBn7GlgLYEH4ZiQWpQ37zZ8w%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTYzYzI5OWUtNmU5MC00MTMzLWI4NGYtMzAzMjBlMzA2NTU0X2xlZ3JhX2JveF9jXzUwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1438,
 in_GraphicFileId: "Legra_Box_C_500_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/595110d9-9a31-4843-a51a-2b70e4f04385_legra_box_c_500_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Wf%2B9ZiyChfdJ3vhNB8wgtIHIT9wH9z26f3uFR3a5ALQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTk1MTEwZDktOWEzMS00ODQzLWE1MWEtMmI3MGU0ZjA0Mzg1X2xlZ3JhX2JveF9jXzUwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1439,
 in_GraphicFileId: "Legra_Box_C_550_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a456a80c-9763-42d7-a12c-2699213e6e13_legra_box_c_550_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TdzsHS97R6Z6BbC4XAVrut%2BD9nxUI0Z3kyoVLEgS%2FFo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTQ1NmE4MGMtOTc2My00MmQ3LWExMmMtMjY5OTIxM2U2ZTEzX2xlZ3JhX2JveF9jXzU1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1440,
 in_GraphicFileId: "Legra_Box_C_550_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cd4076cc-8549-4e28-8dbb-5b883f74acaa_legra_box_c_550_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Z8mIIqIxi7OzZnGPpk6YL2N6zzI0hzDxFzoINBmULOc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2Q0MDc2Y2MtODU0OS00ZTI4LThkYmItNWI4ODNmNzRhY2FhX2xlZ3JhX2JveF9jXzU1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1441,
 in_GraphicFileId: "Legra_Box_C_600_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ea0b6944-0e37-4298-9114-bbb8a39abb8f_legra_box_c_600_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=js1OcyuJUssO3tZzjRaAD2YcJoCP17bzacnJr5v57Hs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWEwYjY5NDQtMGUzNy00Mjk4LTkxMTQtYmJiOGEzOWFiYjhmX2xlZ3JhX2JveF9jXzYwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1442,
 in_GraphicFileId: "Legra_Box_C_600_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0c02f3a0-80a9-4925-8a96-b58f9ff305d4_legra_box_c_600_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=w7H8LEAKgi6DrUwIQjaufZfQ8Pk1B5o8HmUyPk2aUJs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGMwMmYzYTAtODBhOS00OTI1LThhOTYtYjU4ZjlmZjMwNWQ0X2xlZ3JhX2JveF9jXzYwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1443,
 in_GraphicFileId: "Legra_Box_C_650_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/32ccb004-c05e-42d7-aa51-6361b92f5d39_legra_box_c_650_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=b6q23p72BfcXU3XBQOTl0aKZhahynJQlysZLuUTqqmI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzJjY2IwMDQtYzA1ZS00MmQ3LWFhNTEtNjM2MWI5MmY1ZDM5X2xlZ3JhX2JveF9jXzY1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1444,
 in_GraphicFileId: "Legra_Box_C_650_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9648b09b-f145-44db-ae1a-6e3ea5255699_legra_box_c_650_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=B3mQjR5aPMWPJ4C9vsVizlAGUcHj%2FSHzVu7D5BhMLjY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTY0OGIwOWItZjE0NS00NGRiLWFlMWEtNmUzZWE1MjU1Njk5X2xlZ3JhX2JveF9jXzY1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1445,
 in_GraphicFileId: "Legra_Box_F_400_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ab655e60-e3c9-4066-9786-011d56f26847_legra_box_f_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=g7ILtoCj9GMSQdT2fzfXd9KXn%2FFgG%2B6N75XYPpH9xNU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWI2NTVlNjAtZTNjOS00MDY2LTk3ODYtMDExZDU2ZjI2ODQ3X2xlZ3JhX2JveF9mXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1446,
 in_GraphicFileId: "Legra_Box_F_400_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dcf6a45b-6f2f-4075-8a85-70cd07a424a1_legra_box_f_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=gQ3aAKmFl2Gctwx%2BZpZqTKMrYX1gjkID8xT4myxRhIU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGNmNmE0NWItNmYyZi00MDc1LThhODUtNzBjZDA3YTQyNGExX2xlZ3JhX2JveF9mXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1447,
 in_GraphicFileId: "Legra_Box_F_450_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1789776a-ca1c-4e89-9029-8568c0e08c1f_legra_box_f_450_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=BtDqBXdl65fnjMBxaD%2BFxI158CLMYqoOz6tRVz96gxE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTc4OTc3NmEtY2ExYy00ZTg5LTkwMjktODU2OGMwZTA4YzFmX2xlZ3JhX2JveF9mXzQ1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1448,
 in_GraphicFileId: "Legra_Box_F_450_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/03bbc5f3-4205-4524-8987-e0b840bfb7c8_legra_box_f_450_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=iy%2BTg%2BUBVlb4CqlUIH12LbCb6UWI67Usmmmmk8WOs8Q%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDNiYmM1ZjMtNDIwNS00NTI0LTg5ODctZTBiODQwYmZiN2M4X2xlZ3JhX2JveF9mXzQ1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1449,
 in_GraphicFileId: "Legra_Box_F_500_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f533de2a-39fd-47b2-95ff-c6461c3ee678_legra_box_f_500_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=UF%2FPaWe%2FWplGn8To0x9rSyTpXdjcaBRy1Qk7ZVY7pjg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjUzM2RlMmEtMzlmZC00N2IyLTk1ZmYtYzY0NjFjM2VlNjc4X2xlZ3JhX2JveF9mXzUwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1450,
 in_GraphicFileId: "Legra_Box_F_500_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7412d06e-2c4a-42aa-bf91-4234a051233d_legra_box_f_500_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=yzLVUzdGWHfJ51mRnMR5vRN3Dl39%2FHKA3Bihel0TSdQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzQxMmQwNmUtMmM0YS00MmFhLWJmOTEtNDIzNGEwNTEyMzNkX2xlZ3JhX2JveF9mXzUwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1451,
 in_GraphicFileId: "Legra_Box_F_550_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6c307aa0-0403-4f2c-b0c4-0f31aafb387e_legra_box_f_550_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=X2a14D3JDqwrwYaVXlBOEgpHf1AWVabTRPNUCinjYrs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmMzMDdhYTAtMDQwMy00ZjJjLWIwYzQtMGYzMWFhZmIzODdlX2xlZ3JhX2JveF9mXzU1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1452,
 in_GraphicFileId: "Legra_Box_F_550_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6ef47cd4-4b13-4f71-86c2-99c3d89df796_legra_box_f_550_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=cyrf2YC08MNaxbTbnfUiU%2Fpxx5IBkHi3Yj3RzkwkTsY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmVmNDdjZDQtNGIxMy00ZjcxLTg2YzItOTljM2Q4OWRmNzk2X2xlZ3JhX2JveF9mXzU1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1453,
 in_GraphicFileId: "Legra_Box_F_600_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/503757a3-ad5b-4797-9f6c-5d04dad5e1df_legra_box_f_600_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ky6pvKNqc8bfEEDwfWoMemaUG27Pq3v7NTtUksxmnCE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTAzNzU3YTMtYWQ1Yi00Nzk3LTlmNmMtNWQwNGRhZDVlMWRmX2xlZ3JhX2JveF9mXzYwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1454,
 in_GraphicFileId: "Legra_Box_F_600_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1cd5a059-a9b8-4daf-a8bc-99f009619a65_legra_box_f_600_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BLJ41ODET5%2FfJwm1xWAkhj3M4yMoDEkb9aANF0%2By47g%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWNkNWEwNTktYTliOC00ZGFmLWE4YmMtOTlmMDA5NjE5YTY1X2xlZ3JhX2JveF9mXzYwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1455,
 in_GraphicFileId: "Legra_Box_F_650_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b48977da-1fda-4600-987f-bc0b57c806df_legra_box_f_650_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=CFEJMlwnFI%2B7Gj3R0gNGWTZpofjBWNjzjqIptI6ftlk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjQ4OTc3ZGEtMWZkYS00NjAwLTk4N2YtYmMwYjU3YzgwNmRmX2xlZ3JhX2JveF9mXzY1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1456,
 in_GraphicFileId: "Legra_Box_F_650_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8c12091b-3575-4899-a028-6505933b20e7_legra_box_f_650_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=9d5ZzCoJE31kieir2gcn5jscmXmzv2o0mPjmprepA54%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGMxMjA5MWItMzU3NS00ODk5LWEwMjgtNjUwNTkzM2IyMGU3X2xlZ3JhX2JveF9mXzY1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1457,
 in_GraphicFileId: "Legra_Box_K_300_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/88a602f3-489e-47a3-a2e9-49e756f56ee3_legra_box_k_300_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=VLqNFE1Oeoz0YgAuZKplrwvOI1xYq6Wv3%2F2SazLbbf0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODhhNjAyZjMtNDg5ZS00N2EzLWEyZTktNDllNzU2ZjU2ZWUzX2xlZ3JhX2JveF9rXzMwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1458,
 in_GraphicFileId: "Legra_Box_K_300_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c05d8793-3de7-423d-86a3-c15b4a6f50e8_legra_box_k_300_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=8VGjaPmH6HFWdPFWUDuRp%2FIlZF1GzkZkpzEid5%2B93Rw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzA1ZDg3OTMtM2RlNy00MjNkLTg2YTMtYzE1YjRhNmY1MGU4X2xlZ3JhX2JveF9rXzMwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1459,
 in_GraphicFileId: "Legra_Box_K_350_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0bbc7ec0-78a9-4f8b-8fb8-2aad07eea005_legra_box_k_350_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=jQOgmDzQHU8SsAlhqRso6BiknfonT8iOyn979yMWQ8Q%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGJiYzdlYzAtNzhhOS00ZjhiLThmYjgtMmFhZDA3ZWVhMDA1X2xlZ3JhX2JveF9rXzM1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1460,
 in_GraphicFileId: "Legra_Box_K_350_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ecaa86b4-1476-40a2-904c-dd4448a2567d_legra_box_k_350_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ixHCnBjUR%2FatEEndtsopDsWsAnylWVmoEfYZgZ55Nb8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWNhYTg2YjQtMTQ3Ni00MGEyLTkwNGMtZGQ0NDQ4YTI1NjdkX2xlZ3JhX2JveF9rXzM1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1461,
 in_GraphicFileId: "Legra_Box_K_400_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5c20ce28-69dd-4fc5-9f50-ceddb0c3bdf6_legra_box_k_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=nrZ7lsdrtu6BI6jT6065I4hEZOnWNBavYlwQbcNklX4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWMyMGNlMjgtNjlkZC00ZmM1LTlmNTAtY2VkZGIwYzNiZGY2X2xlZ3JhX2JveF9rXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1462,
 in_GraphicFileId: "Legra_Box_K_400_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9c537160-4ab4-47be-861c-c74677fa089d_legra_box_k_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=0%2Be3jkAYIaypm7qNA2ixUfQUP36SoEMPuGR5%2Fzmsie0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWM1MzcxNjAtNGFiNC00N2JlLTg2MWMtYzc0Njc3ZmEwODlkX2xlZ3JhX2JveF9rXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1463,
 in_GraphicFileId: "Legra_Box_K_450_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0f3a8472-4169-4d53-af2f-7d8989fff7ed_legra_box_k_450_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Rlu7LW5aHcfBXm4QksTwM9ue6WK0gFzztLGW%2B3q2N%2FI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGYzYTg0NzItNDE2OS00ZDUzLWFmMmYtN2Q4OTg5ZmZmN2VkX2xlZ3JhX2JveF9rXzQ1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1464,
 in_GraphicFileId: "Legra_Box_K_450_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/78495d6c-1bc9-4193-93f8-f6e3ef99df29_legra_box_k_450_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=erlAEyXJYJ1OfnS2lFUZ0DVlaLSYCL%2Bnkoi3KpzoNWI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzg0OTVkNmMtMWJjOS00MTkzLTkzZjgtZjZlM2VmOTlkZjI5X2xlZ3JhX2JveF9rXzQ1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1465,
 in_GraphicFileId: "Legra_Box_K_500_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77a1d5f3-45b8-403f-993c-bad005808d5f_legra_box_k_500_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=nxckXtYmBjFJJX1W6L1e2iH%2FhmMNwC89yvpe4XpMGVo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzdhMWQ1ZjMtNDViOC00MDNmLTk5M2MtYmFkMDA1ODA4ZDVmX2xlZ3JhX2JveF9rXzUwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1466,
 in_GraphicFileId: "Legra_Box_K_500_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3e43cd64-e372-48f0-b067-9b399af72016_legra_box_k_500_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=wrVNKow5s28O7aHneu2oSTHobSR9fSqUPwm%2BScD7N58%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2U0M2NkNjQtZTM3Mi00OGYwLWIwNjctOWIzOTlhZjcyMDE2X2xlZ3JhX2JveF9rXzUwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1467,
 in_GraphicFileId: "Legra_Box_K_550_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3d53efb6-8982-4f5a-9d59-567ce5e53676_legra_box_k_550_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1i2iFotFIjS6YrCdlivxVH3wHDuRxuBdzxTNHo75BvU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2Q1M2VmYjYtODk4Mi00ZjVhLTlkNTktNTY3Y2U1ZTUzNjc2X2xlZ3JhX2JveF9rXzU1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1468,
 in_GraphicFileId: "Legra_Box_K_550_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dfc47b73-2f21-44f2-bba1-4929b9112838_legra_box_k_550_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=VXyQbKMjwjhhZ8IAYJi5x%2FKOAYYYk3h8rQn8KBLbfcg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGZjNDdiNzMtMmYyMS00NGYyLWJiYTEtNDkyOWI5MTEyODM4X2xlZ3JhX2JveF9rXzU1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1469,
 in_GraphicFileId: "Legra_Box_K_600_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/027243c6-861b-4446-87df-4f6cf250eba4_legra_box_k_600_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=knP13pTPjrD50jal81KypGKX5jBZAnuyAUAR7KpHWF0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDI3MjQzYzYtODYxYi00NDQ2LTg3ZGYtNGY2Y2YyNTBlYmE0X2xlZ3JhX2JveF9rXzYwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1470,
 in_GraphicFileId: "Legra_Box_K_600_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9ced33e7-eef2-40b0-809a-2c9ce7a1342f_legra_box_k_600_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZBXoWXl%2BOThlPOfehVXv6pt7eIM%2FtTqwgD1rjdAd028%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWNlZDMzZTctZWVmMi00MGIwLTgwOWEtMmM5Y2U3YTEzNDJmX2xlZ3JhX2JveF9rXzYwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1471,
 in_GraphicFileId: "Legra_Box_M_270_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/844ae99b-d833-42d8-8ca9-dd2455f9dc15_legra_box_m_270_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=o77k7mvVQTr7Yk%2BEYLKxi4lvSdNjuRKPGPCTTHucrq0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODQ0YWU5OWItZDgzMy00MmQ4LThjYTktZGQyNDU1ZjlkYzE1X2xlZ3JhX2JveF9tXzI3MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1472,
 in_GraphicFileId: "Legra_Box_M_270_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ba3ca32-fcf4-49f5-8a68-58f46433953f_legra_box_m_270_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=DqM9HQ7l9f7jLIe%2BlkSLHwx4%2BhRpnfRl53aPK3aghvk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGJhM2NhMzItZmNmNC00OWY1LThhNjgtNThmNDY0MzM5NTNmX2xlZ3JhX2JveF9tXzI3MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1473,
 in_GraphicFileId: "Legra_Box_M_300_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e391b0c2-1fc7-4b39-953b-8d54f50a6bb0_legra_box_m_300_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=kbpx0%2FxvwFbZnBW0K%2FSO1yAmX2bMZiWVi%2B7v%2F0oU8pw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTM5MWIwYzItMWZjNy00YjM5LTk1M2ItOGQ1NGY1MGE2YmIwX2xlZ3JhX2JveF9tXzMwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1474,
 in_GraphicFileId: "Legra_Box_M_300_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/581f963f-779c-445b-a358-de832d5ec0e6_legra_box_m_300_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=4AnIiJR%2F%2BNlvLvAtm1mgbyVsexL41EF9htO6biQqkMY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTgxZjk2M2YtNzc5Yy00NDViLWEzNTgtZGU4MzJkNWVjMGU2X2xlZ3JhX2JveF9tXzMwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1475,
 in_GraphicFileId: "Legra_Box_M_350_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f9dbb2b4-2cf6-4f76-8db0-82a879524c80_legra_box_m_350_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=eWsrI5Z%2BxWP8R9iFe0rZwQqmvtdrvtTKb%2B%2Fogl6VJMY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjlkYmIyYjQtMmNmNi00Zjc2LThkYjAtODJhODc5NTI0YzgwX2xlZ3JhX2JveF9tXzM1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1476,
 in_GraphicFileId: "Legra_Box_M_350_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c1d70e3d-01aa-4b4d-983b-428575829569_legra_box_m_350_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=mDM3HC0dCkOu72Pa3NZPyhEhbYrrv4LxF5A%2FYmGNPgk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzFkNzBlM2QtMDFhYS00YjRkLTk4M2ItNDI4NTc1ODI5NTY5X2xlZ3JhX2JveF9tXzM1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1477,
 in_GraphicFileId: "Legra_Box_M_400_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/809d60e7-e0f8-422f-8b13-d3708e4f1585_legra_box_m_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=9ngtH6t8VaJ0%2FXuki51G9uddNEhVV9y8pMXup6j1piU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODA5ZDYwZTctZTBmOC00MjJmLThiMTMtZDM3MDhlNGYxNTg1X2xlZ3JhX2JveF9tXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1478,
 in_GraphicFileId: "Legra_Box_M_400_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/424a04a1-9b08-4b1d-808e-0ace1d39dcd4_legra_box_m_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=8dvf09uBBhkZEaunVjBLM0zB8UZmnamnz4ynPxqVzfc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDI0YTA0YTEtOWIwOC00YjFkLTgwOGUtMGFjZTFkMzlkY2Q0X2xlZ3JhX2JveF9tXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1479,
 in_GraphicFileId: "Legra_Box_M_450_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3dcfd7b7-b736-45f7-b6c8-156a41695fe1_legra_box_m_450_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=4pf1jNUFpG48yg6bza3FNir5K47jivnKr3pIFUz%2FpYw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2RjZmQ3YjctYjczNi00NWY3LWI2YzgtMTU2YTQxNjk1ZmUxX2xlZ3JhX2JveF9tXzQ1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1480,
 in_GraphicFileId: "Legra_Box_M_450_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/293e2719-2f32-4bec-8642-bd9ab85a57f7_legra_box_m_450_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=p%2FpKDarlF0M9Pg1kQ3E2tZpmIi6hljOQ6HuERph1%2Fpw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjkzZTI3MTktMmYzMi00YmVjLTg2NDItYmQ5YWI4NWE1N2Y3X2xlZ3JhX2JveF9tXzQ1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1481,
 in_GraphicFileId: "Legra_Box_M_500_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3a8e7562-905b-47fb-91c3-beedaf511100_legra_box_m_500_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=lLRt1%2FvQc5rSQ0v2u5rWwFE0u4VnEKg6KmVr5vzRdGw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2E4ZTc1NjItOTA1Yi00N2ZiLTkxYzMtYmVlZGFmNTExMTAwX2xlZ3JhX2JveF9tXzUwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1482,
 in_GraphicFileId: "Legra_Box_M_500_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0f86ff2d-1434-45da-a3eb-b53c6db2806f_legra_box_m_500_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=uFUKHwpErmqtJ6RAngvliPlU%2FHNN1gWf758zNoFITPg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGY4NmZmMmQtMTQzNC00NWRhLWEzZWItYjUzYzZkYjI4MDZmX2xlZ3JhX2JveF9tXzUwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1483,
 in_GraphicFileId: "Legra_Box_M_550_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/12908a52-009d-4632-bc18-0bc73dbaed98_legra_box_m_550_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2B998P2mlNcZ%2BUdTsrXnolwQiXHKltIgd3mX71MPUaXg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTI5MDhhNTItMDA5ZC00NjMyLWJjMTgtMGJjNzNkYmFlZDk4X2xlZ3JhX2JveF9tXzU1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1484,
 in_GraphicFileId: "Legra_Box_M_550_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d57a93e4-3dc5-4d83-a79a-2cf62439d418_legra_box_m_550_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=3NGFA1usN1A4peQ2CxuFMsNNSR9zHdFR4l%2B%2FUY6nPR8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDU3YTkzZTQtM2RjNS00ZDgzLWE3OWEtMmNmNjI0MzlkNDE4X2xlZ3JhX2JveF9tXzU1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1485,
 in_GraphicFileId: "Legra_Box_M_600_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6804e3e9-b459-481b-bb4c-f19eb9732131_legra_box_m_600_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=g4h4TSAbMgC9XLzTWB3ZefmKjoDOBUdny4EbjLhESjk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjgwNGUzZTktYjQ1OS00ODFiLWJiNGMtZjE5ZWI5NzMyMTMxX2xlZ3JhX2JveF9tXzYwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1486,
 in_GraphicFileId: "Legra_Box_M_600_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0fb26a53-673d-46c8-9008-679d886dc45d_legra_box_m_600_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=AhEuqKOoeIs%2BgQhPVDMVp7l24bVUVo65RH5zfPpBqCc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGZiMjZhNTMtNjczZC00NmM4LTkwMDgtNjc5ZDg4NmRjNDVkX2xlZ3JhX2JveF9tXzYwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1487,
 in_GraphicFileId: "Legra_Box_M_650_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d834bd36-4923-4cf2-ba02-18cb5e3766d5_legra_box_m_650_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=vj%2Bs7JV1oUBB7kIU6umYhVs5gXYi7Cz6A3yAHfQNXcA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDgzNGJkMzYtNDkyMy00Y2YyLWJhMDItMThjYjVlMzc2NmQ1X2xlZ3JhX2JveF9tXzY1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1488,
 in_GraphicFileId: "Legra_Box_M_650_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2f9e8535-5263-4752-989c-e3b4c0e5dfa8_legra_box_m_650_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=qupzcJTf%2Fd9yjQyUqMTQP9%2FfDboDg54TDs2zKyRJGSY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmY5ZTg1MzUtNTI2My00NzUyLTk4OWMtZTNiNGMwZTVkZmE4X2xlZ3JhX2JveF9tXzY1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1489,
 in_GraphicFileId: "Legra_Box_N_400_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2123dcbc-5dd9-45e1-bfd0-af64d90db191_legra_box_n_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7tN8M5Z6aUAxHUja%2BKxZNk6wazUQQZqdAtUg%2FF4ucGc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjEyM2RjYmMtNWRkOS00NWUxLWJmZDAtYWY2NGQ5MGRiMTkxX2xlZ3JhX2JveF9uXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1490,
 in_GraphicFileId: "Legra_Box_N_400_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8fb1d313-b048-4c6a-8577-bfaa3bdd579e_legra_box_n_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=i9zCqMI7hOlloTN4UL%2BWieV05Scj7RiJdE3%2BVSoqs9c%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGZiMWQzMTMtYjA0OC00YzZhLTg1NzctYmZhYTNiZGQ1NzllX2xlZ3JhX2JveF9uXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1491,
 in_GraphicFileId: "Legra_Box_N_450_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1e648089-1e6a-425b-b302-1c10558d2c88_legra_box_n_450_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=9YdMOyJQ5r23f7%2Fcbrfo5IW%2BiegOczDgjgjFWvFwgvE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWU2NDgwODktMWU2YS00MjViLWIzMDItMWMxMDU1OGQyYzg4X2xlZ3JhX2JveF9uXzQ1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1492,
 in_GraphicFileId: "Legra_Box_N_450_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/84767f32-ac14-41b7-8b8b-b83732a779ee_legra_box_n_450_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=MvFoOXonoopfxs5jqLXtr01YPxI2%2BSWwkfWeq8SPr1A%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODQ3NjdmMzItYWMxNC00MWI3LThiOGItYjgzNzMyYTc3OWVlX2xlZ3JhX2JveF9uXzQ1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1493,
 in_GraphicFileId: "Legra_Box_N_500_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5012bdaf-c9d7-4c69-9def-a539b7cb3cf8_legra_box_n_500_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FHecu2URKMNrqXOBqqLi230XQO2zWhyMPKEqa7XNdZo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTAxMmJkYWYtYzlkNy00YzY5LTlkZWYtYTUzOWI3Y2IzY2Y4X2xlZ3JhX2JveF9uXzUwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1494,
 in_GraphicFileId: "Legra_Box_N_500_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b94db2ce-313b-45df-9448-5b738738e849_legra_box_n_500_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=sB4EVTRFC1CRsYTCc1pdH54zaQ3XNHJmUSXr5UjaXdA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjk0ZGIyY2UtMzEzYi00NWRmLTk0NDgtNWI3Mzg3MzhlODQ5X2xlZ3JhX2JveF9uXzUwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1495,
 in_GraphicFileId: "Legra_Box_N_550_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1544a2a7-ffaa-4c18-ba1a-0efa03105661_legra_box_n_550_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=zn8YPdLTi5fueS%2BOLf1WXeNZ5utlI1ZuOsTwb9T1gTk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTU0NGEyYTctZmZhYS00YzE4LWJhMWEtMGVmYTAzMTA1NjYxX2xlZ3JhX2JveF9uXzU1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1496,
 in_GraphicFileId: "Legra_Box_N_550_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cb8a1506-6c1c-4854-9678-a976033cbb01_legra_box_n_550_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=amneJsUk6tYe%2BQMV8C5cWdr9CplmgwBPvNrgx8538ZE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2I4YTE1MDYtNmMxYy00ODU0LTk2NzgtYTk3NjAzM2NiYjAxX2xlZ3JhX2JveF9uXzU1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1497,
 in_GraphicFileId: "Legra_Pure_C",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ec10b140-e779-406a-8cc1-343c22633508_legra_c_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7A8G%2Fm198UqC99aeROad9N7RDgF5IcfA%2B%2FdQ4caLnCE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWMxMGIxNDAtZTc3OS00MDZhLThjYzEtMzQzYzIyNjMzNTA4X2xlZ3JhX2NfbG93Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1498,
 in_GraphicFileId: "Legra_Pure_F",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3f6b99b4-f2c3-49ce-855a-60761a32957d_legra_f_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=K8CY0AZGpcYFtyCqSzaxx4NBy%2BF7k2pcESU7Sjoo%2FMw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2Y2Yjk5YjQtZjJjMy00OWNlLTg1NWEtNjA3NjFhMzI5NTdkX2xlZ3JhX2ZfbG93Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1499,
 in_GraphicFileId: "Legra_Pure_K",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4eefefc0-3f85-46ad-8942-444d1838e92e_legra_k_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TO33%2FqJtgBs9j7gTxj1t%2FnGG9ufUZUYsJ7QRjqtYM%2Fg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGVlZmVmYzAtM2Y4NS00NmFkLTg5NDItNDQ0ZDE4MzhlOTJlX2xlZ3JhX2tfbG93Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1500,
 in_GraphicFileId: "Legra_Pure_M",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/142156a1-18f0-4153-af8f-0a05c1a810c9_legra_m_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Gu6vYiHf2vl6r4OpsTa8Kk%2F6YguVqRs6VvWPl2vW5E4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTQyMTU2YTEtMThmMC00MTUzLWFmOGYtMGEwNWMxYTgxMGM5X2xlZ3JhX21fbG93Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1501,
 in_GraphicFileId: "Legra_Pure_N",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f81626e2-2767-469a-865f-78875590146c_legra_n_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=P2CPMvdasHJEXO9yXPtHawXZoimQnpojnbCRDWCcMEA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjgxNjI2ZTItMjc2Ny00NjlhLTg2NWYtNzg4NzU1OTAxNDZjX2xlZ3JhX25fbG93Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1502,
 in_GraphicFileId: "Legra_Slide_270_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ed1958c-e933-4e14-b4ae-77a4a7c5af57_legra_glide_270_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=v6AfNM%2Fte9%2FCgd%2F08iAWvXv%2Fg8vPfkilxfSp14QKEHU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGVkMTk1OGMtZTkzMy00ZTE0LWI0YWUtNzdhNGE3YzVhZjU3X2xlZ3JhX2dsaWRlXzI3MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1503,
 in_GraphicFileId: "Legra_Slide_270_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fa21cb58-a083-40b0-bd16-5fce247390b1_legra_glide_270_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=xosVxx1d7cJqS3j8oyj%2BXh1keL1PjedD%2FejXcgUTTls%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmEyMWNiNTgtYTA4My00MGIwLWJkMTYtNWZjZTI0NzM5MGIxX2xlZ3JhX2dsaWRlXzI3MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1504,
 in_GraphicFileId: "Legra_Slide_300_350_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/96ab3bea-2a34-4d3b-b270-8f6959bae14c_legra_glide_300_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=NR2Dt0GiTN6d0S6SEvyFPZwn4g5CosMRZHWMhNdLod8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTZhYjNiZWEtMmEzNC00ZDNiLWIyNzAtOGY2OTU5YmFlMTRjX2xlZ3JhX2dsaWRlXzMwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1505,
 in_GraphicFileId: "Legra_Slide_300_350_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/52fbb785-0721-4ef4-bc45-937422af06e8_legra_glide_300_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BpZVbT%2FsO5Rg9JsoZGagpKg%2FKMinpgpFpbXjeiRuKaY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTJmYmI3ODUtMDcyMS00ZWY0LWJjNDUtOTM3NDIyYWYwNmU4X2xlZ3JhX2dsaWRlXzMwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1506,
 in_GraphicFileId: "Legra_Slide_400_450_500_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/010cfe06-6515-4a9a-bcf6-3076eb388bab_legra_glide_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=o%2Blr%2Fc7nRamc60Pf0jiN%2BG7ufHorWRwwya%2FycP%2BPdPE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDEwY2ZlMDYtNjUxNS00YTlhLWJjZjYtMzA3NmViMzg4YmFiX2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1507,
 in_GraphicFileId: "Legra_Slide_400_450_500_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4e6979c9-881f-4f4b-97a8-b179646c27e4_legra_glide_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=xdyu8Xfu2mG0axmWMNwIGnd3d2BZYPDj5wsHW5r3fa8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGU2OTc5YzktODgxZi00ZjRiLTk3YTgtYjE3OTY0NmMyN2U0X2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1508,
 in_GraphicFileId: "Legra_Slide_450_H_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/010cfe06-6515-4a9a-bcf6-3076eb388bab_legra_glide_400_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=o%2Blr%2Fc7nRamc60Pf0jiN%2BG7ufHorWRwwya%2FycP%2BPdPE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDEwY2ZlMDYtNjUxNS00YTlhLWJjZjYtMzA3NmViMzg4YmFiX2xlZ3JhX2dsaWRlXzQwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1509,
 in_GraphicFileId: "Legra_Slide_450_H_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4e6979c9-881f-4f4b-97a8-b179646c27e4_legra_glide_400_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=xdyu8Xfu2mG0axmWMNwIGnd3d2BZYPDj5wsHW5r3fa8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGU2OTc5YzktODgxZi00ZjRiLTk3YTgtYjE3OTY0NmMyN2U0X2xlZ3JhX2dsaWRlXzQwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1510,
 in_GraphicFileId: "Legra_Slide_500_550_600_H_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a148c74e-db5e-403f-9bea-e04d231f9884_legra_glide_600_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7zsxMvXCRqAlpFJJ50Cjo4b1ttTFccGBDgYAkw4FSuY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTE0OGM3NGUtZGI1ZS00MDNmLTliZWEtZTA0ZDIzMWY5ODg0X2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1511,
 in_GraphicFileId: "Legra_Slide_500_550_600_H_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fb1d2625-b5d5-4a7d-aba5-36c2f3e8f8aa_legra_glide_600_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Jvw0Mjr4x45FKDRDLhbvZDeXpyFabmrynFxGXofTnMQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmIxZDI2MjUtYjVkNS00YTdkLWFiYTUtMzZjMmYzZThmOGFhX2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1512,
 in_GraphicFileId: "Legra_Slide_550_600_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a148c74e-db5e-403f-9bea-e04d231f9884_legra_glide_600_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7zsxMvXCRqAlpFJJ50Cjo4b1ttTFccGBDgYAkw4FSuY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTE0OGM3NGUtZGI1ZS00MDNmLTliZWEtZTA0ZDIzMWY5ODg0X2xlZ3JhX2dsaWRlXzYwMF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1513,
 in_GraphicFileId: "Legra_Slide_550_600_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fb1d2625-b5d5-4a7d-aba5-36c2f3e8f8aa_legra_glide_600_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Jvw0Mjr4x45FKDRDLhbvZDeXpyFabmrynFxGXofTnMQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmIxZDI2MjUtYjVkNS00YTdkLWFiYTUtMzZjMmYzZThmOGFhX2xlZ3JhX2dsaWRlXzYwMF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1514,
 in_GraphicFileId: "Legra_Slide_650_H_Left",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/90401d50-04e4-457b-8821-9bdb918cd56b_slide_650_left.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=2rJtBHRsahMA7zzDj9Q7torfobCs5%2F8PUPospsq1rPY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTA0MDFkNTAtMDRlNC00NTdiLTg4MjEtOWJkYjkxOGNkNTZiX3NsaWRlXzY1MF9sZWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1515,
 in_GraphicFileId: "Legra_Slide_650_H_Right",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a8b8bda5-9265-486d-8232-10e749688ced_slide_650_right.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=8m4x0UCOoSi%2FoHRPmvUxFEy0JnkCworZbPnY1KlViRQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYThiOGJkYTUtOTI2NS00ODZkLTgyMzItMTBlNzQ5Njg4Y2VkX3NsaWRlXzY1MF9yaWdodC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1516,
 in_GraphicFileId: "MinifixConnectionBolt01",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0fe36a7f-c54f-438f-afec-c807681c7635_262_28_920_details_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=WJZqYUxoEJytS%2FiQIzGzZP5%2F%2B17ie6wNRYNMs1%2FFTrE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGZlMzZhN2YtYzU0Zi00MzhmLWFmZWMtYzgwNzY4MWM3NjM1XzI2Ml8yOF85MjBfZGV0YWlsc19sb3cub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1517,
 in_GraphicFileId: "MinifixConnectionCover",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ff75c27-f06e-4ccb-8402-8310b80e1cc1_262_24_751_details_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Srxim6ft1LhhZ1jRLAsK4poRgGza%2BTrtFuvk2f4%2B7eA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGZmNzVjMjctZjA2ZS00Y2NiLTg0MDItODMxMGI4MGUxY2MxXzI2Ml8yNF83NTFfZGV0YWlsc19sb3cub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1518,
 in_GraphicFileId: "MinifixConnectionHousing01",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cad97680-7a15-4f1f-9759-ff8972c6c4c5_262_26_533_details_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=M8mPHDC4xVSb6iwBqCo3xLvj2tdXtNmhNBvSboY8drQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2FkOTc2ODAtN2ExNS00ZjFmLTk3NTktZmY4OTcyYzZjNGM1XzI2Ml8yNl81MzNfZGV0YWlsc19sb3cub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1519,
 in_GraphicFileId: "Model3D_Aventos_HF_Connector",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/87a7baa5-5ccd-40a5-af49-095a2184ac6c_connector.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=c8YU0EjeSl4H79OG%2BM%2F4RU2cQrzvq2AebEKVKWKMwTg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODdhN2JhYTUtNWNjZC00MGE1LWFmNDktMDk1YTIxODRhYzZjX2Nvbm5lY3Rvci5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1520,
 in_GraphicFileId: "Model3D_Aventos_HF_Mech",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/40440972-20f3-4165-8c93-abf18ca740a4_mech_480_610.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=hSRLAVBASi1wudqgNPxF%2Bo1dQUWou7JUBW467uDV4Q4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDA0NDA5NzItMjBmMy00MTY1LThjOTMtYWJmMThjYTc0MGE0X21lY2hfNDgwXzYxMC5vYmo=',
 Model3DParameters: {
  "regions": {
    "x": [
      {
        "pos": 0,
        "scalable": false
      }
    ],
    "y": [
      {
        "pos": 250,
        "scalable": false
      },
      {
        "pos": 340,
        "scalable": true
      }
    ],
    "z": [
      {
        "pos": 0,
        "scalable": false
      }
    ]
  },
  "attachmentId": "bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTQxZWJiOGQtYWM1Mi00NWZkLTllMTYtMGVkZGJlYzY2YjgyX2RhdGEuYmlu"
},
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1521,
 in_GraphicFileId: "Model3D_Aventos_HF_Mech_480",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/37d3ff36-29cc-4199-ab1a-a88cea4e9baa_aventos_hf_arm_480.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=dgCXbVynlRwV4To6bXJVS1au%2BOC7WuZah7UgM7pB4uI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzdkM2ZmMzYtMjljYy00MTk5LWFiMWEtYTg4Y2VhNGU5YmFhX2F2ZW50b3NfaGZfYXJtXzQ4MC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1522,
 in_GraphicFileId: "Model3D_Aventos_HF_Mech_600",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fbd731f5-a0ca-410f-ad82-90967cb92673_aventos_hf_arm_600.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=qz45yJeZlXuKBs4VbtXYVEeL1d6s%2FvTynwPfp9Bfam0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmJkNzMxZjUtYTBjYS00MTBmLWFkODItOTA5NjdjYjkyNjczX2F2ZW50b3NfaGZfYXJtXzYwMC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1523,
 in_GraphicFileId: "Model3D_Aventos_HF_Mech_840",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/93c65a06-09bf-41cc-a9f5-cd51289f9239_aventos_hf_arm_840.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=8f9t%2BuO31n2EQT3uGfsBZcqQ2Xyxr95zf1rTg78A31Y%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTNjNjVhMDYtMDliZi00MWNjLWE5ZjUtY2Q1MTI4OWY5MjM5X2F2ZW50b3NfaGZfYXJtXzg0MC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1524,
 in_GraphicFileId: "Model3D_Aventos_HF_PSL",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a053336f-8f1d-4f51-8619-bccff19e4d39_aventos_psl.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ehj2RD3nKFaVN4ZF2chbpW4SWYGpnFBg8EfC5CnfMDI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTA1MzMzNmYtOGYxZC00ZjUxLTg2MTktYmNjZmYxOWU0ZDM5X2F2ZW50b3NfcHNsLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1525,
 in_GraphicFileId: "Model3D_Aventos_HF_PSR",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8ab2238e-9440-4ae2-80bd-e7cbd8e0d5cc_aventos_psr.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=4i6%2FFPsXBnAYsje09AJ3OWo01SkeLO1i5uLM2cVfNOM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGFiMjIzOGUtOTQ0MC00YWUyLTgwYmQtZTdjYmQ4ZTBkNWNjX2F2ZW50b3NfcHNyLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1526,
 in_GraphicFileId: "Model3D_Aventos_HK_Connector",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3e6e2db6-ad29-405f-8018-7a44ed5e0071_aventos_hk_connector.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Aipre4BiA%2FP2aH4geuk8YBgLbDBL%2F9JRckX1uofP6fM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2U2ZTJkYjYtYWQyOS00MDVmLTgwMTgtN2E0NGVkNWUwMDcxX2F2ZW50b3NfaGtfY29ubmVjdG9yLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1527,
 in_GraphicFileId: "Model3D_Aventos_HK_PSL",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/49897793-7496-492b-a43b-b64e9d223fd6_aventos_hk_l.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=f5kPXYKevCtvHnSVZhio%2FC8I2GKPT6vT8t8MjonMbHI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDk4OTc3OTMtNzQ5Ni00OTJiLWE0M2ItYjY0ZTlkMjIzZmQ2X2F2ZW50b3NfaGtfbC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1528,
 in_GraphicFileId: "Model3D_Aventos_HK_PSR",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a38c6b7d-2a3a-4846-b908-30e737afcf4e_aventos_hk_r.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ghDBGCfDYjQ5jVBcrMhcXhsOoVegwroZd5Y%2FE0LV2oI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTM4YzZiN2QtMmEzYS00ODQ2LWI5MDgtMzBlNzM3YWZjZjRlX2F2ZW50b3NfaGtfci5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1529,
 in_GraphicFileId: "Model3D_Aventos_HKXS_Carcase_L",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6e935933-f458-4732-bd27-07260741e894_hkxs_cl.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=XYRACMiHZNWyltq0hrEIqipXtjFcxP083rUK6ikBtqQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmU5MzU5MzMtZjQ1OC00NzMyLWJkMjctMDcyNjA3NDFlODk0X2hreHNfY2wub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1530,
 in_GraphicFileId: "Model3D_Aventos_HKXS_Carcase_R",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/126628f6-986f-47b6-b15c-320ae706381a_hkxs_cr.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=EPmTKMoB2JxpYKK7P7x4L4xjdsA2FrJpKUEX184RWSI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTI2NjI4ZjYtOTg2Zi00N2I2LWIxNWMtMzIwYWU3MDYzODFhX2hreHNfY3Iub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1531,
 in_GraphicFileId: "Model3D_Aventos_HKXS_Front",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ca72e582-ac1e-41c4-b575-b28e0fc6c4d8_hkxs_connector.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=o0y2YJD4rjmV%2Bs%2B8rjrNgVbtNI0%2FmJ6a9fO7u3afhX4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2E3MmU1ODItYWMxZS00MWM0LWI1NzUtYjI4ZTBmYzZjNGQ4X2hreHNfY29ubmVjdG9yLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1532,
 in_GraphicFileId: "Model3D_Aventos_HKXS_Mech",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/60b86aee-2e5f-4862-aa35-01fe899d239b_hkxs_mech.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=GwSfOVHPjrnLHfWwb%2FxMUsr27Y4RCiefzlP8lPbbDLg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjBiODZhZWUtMmU1Zi00ODYyLWFhMzUtMDFmZTg5OWQyMzliX2hreHNfbWVjaC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1533,
 in_GraphicFileId: "Model3D_Aventos_HL_Mech1",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/801acb9d-768e-4df2-8a01-175a307f77e1_aventos_hl_mech1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=BkSblg%2B6ZKHmHe1de21cDEAl0h%2BhM0BCZKCItOXjP18%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODAxYWNiOWQtNzY4ZS00ZGYyLThhMDEtMTc1YTMwN2Y3N2UxX2F2ZW50b3NfaGxfbWVjaDEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1534,
 in_GraphicFileId: "Model3D_Aventos_HL_Mech2",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8f0c2694-3af7-4af3-bdfa-fe8888acec45_aventos_hl_mech2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=9SbligYlHtr6pdMjkmPKOGAzyTk0lI65DIra3r2blDg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGYwYzI2OTQtM2FmNy00YWYzLWJkZmEtZmU4ODg4YWNlYzQ1X2F2ZW50b3NfaGxfbWVjaDIub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1535,
 in_GraphicFileId: "Model3D_Aventos_HL_Mech3",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7f6326c6-1add-4b1d-b7cc-cb217df0babb_aventos_hl_mech3.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=DT6bjoJ12Hn9KU9Ocy4HM8p3N3S1ZEsSCmTaJVY2z4s%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Y2MzI2YzYtMWFkZC00YjFkLWI3Y2MtY2IyMTdkZjBiYWJiX2F2ZW50b3NfaGxfbWVjaDMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1536,
 in_GraphicFileId: "Model3D_Aventos_HL_Mech4",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/12514354-a8f3-4c51-8fdc-0de86739fe20_aventos_hl_mech4.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Q0jYuX2SMQSj2Ygr3H6QfYjrYB8yk5s%2BK8V8PCrJjNc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTI1MTQzNTQtYThmMy00YzUxLThmZGMtMGRlODY3MzlmZTIwX2F2ZW50b3NfaGxfbWVjaDQub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1537,
 in_GraphicFileId: "Model3D_Aventos_HL_PSL",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8f16bf30-39c8-4539-ae5f-725f2ec90b90_aventos_hl_psl.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=xVQZFzqPO%2BlQxK7Cjcljftp4t60%2FyLj%2FysSME%2FysruM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGYxNmJmMzAtMzljOC00NTM5LWFlNWYtNzI1ZjJlYzkwYjkwX2F2ZW50b3NfaGxfcHNsLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1538,
 in_GraphicFileId: "Model3D_Aventos_HL_PSR",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/812b244f-2a57-4120-bc0f-6e5d297b0c87_aventos_hl_psr.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=hhybwpBl0%2B477%2BimIEYcWqcUUQE5Gs0C4%2Fo287jDbb0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODEyYjI0NGYtMmE1Ny00MTIwLWJjMGYtNmU1ZDI5N2IwYzg3X2F2ZW50b3NfaGxfcHNyLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1539,
 in_GraphicFileId: "Model3D_Aventos_HS_PSL",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0e269bf7-8564-47bc-817e-07c6e9a53984_aventos_hs_psl.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7Y0rRoxpP891nnXgATCVqBLzqVbQu4XuL8%2BF7nQnTRo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGUyNjliZjctODU2NC00N2JjLTgxN2UtMDdjNmU5YTUzOTg0X2F2ZW50b3NfaHNfcHNsLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1540,
 in_GraphicFileId: "Model3D_Aventos_HS_PSR",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7d705d6f-6ad9-419f-b40c-90edb7a7b3b2_aventos_hs_psr.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=51RODzMllQotMegqP5r%2Fa7TWXgWLgA0DVBzd4ILdwCA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2Q3MDVkNmYtNmFkOS00MTlmLWI0MGMtOTBlZGI3YTdiM2IyX2F2ZW50b3NfaHNfcHNyLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1541,
 in_GraphicFileId: "Model3D_Legra_FrontBotCon",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/40f58c5b-30c2-463d-9267-3bd736b7668a_legra_bottofrontcon.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=A%2FBTCNycSH4vuBIuJ0e7HODN18A5LsbBOQ2E6BYl0pE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDBmNThjNWItMzBjMi00NjNkLTkyNjctM2JkNzM2Yjc2NjhhX2xlZ3JhX2JvdHRvZnJvbnRjb24ub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1542,
 in_GraphicFileId: "Model3DAdapterHousingLong",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2c00444c-4a8f-4211-9d01-b38eaa8c0760_adapterhousinglongblack_356_04_362.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=glfzuRlt2Fw2TCgZkFrFEoCy7DR%2Ff0WfqcnrC2zGBTA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmMwMDQ0NGMtNGE4Zi00MjExLTlkMDEtYjM4ZWFhOGMwNzYwX2FkYXB0ZXJob3VzaW5nbG9uZ2JsYWNrXzM1Nl8wNF8zNjIub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1543,
 in_GraphicFileId: "Model3DAdapterHousingShort",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/54cbcb18-bedb-4c57-9213-64a69c8fee16_adapterhousingshortblack_356_04_363.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ooFxTKxPbGLW%2F%2BWsRcpzxHHfHCi7HFZZ0s5QmmqrTU8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTRjYmNiMTgtYmVkYi00YzU3LTkyMTMtNjRhNjljOGZlZTE2X2FkYXB0ZXJob3VzaW5nc2hvcnRibGFja18zNTZfMDRfMzYzLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1544,
 in_GraphicFileId: "Model3DBracket01",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4d9ab82d-eb05-44cb-a886-42aa1dbe3933_bracket%20-%20260_28_004.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=k4IDpa95xVsHAGJ%2B4OI81907Zon%2FKOFc0c%2BzsONrZ2A%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGQ5YWI4MmQtZWIwNS00NGNiLWE4ODYtNDJhYTFkYmUzOTMzX2JyYWNrZXQgLSAyNjBfMjhfMDA0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1545,
 in_GraphicFileId: "Model3DBracketHandle128",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/85d0593c-de43-4046-b8d0-088fea14fdbf_155_01_251_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=7usw12LPRJS%2FhIRm5CahPiEXYyrrWHQAL%2BJwVmwKQmY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODVkMDU5M2MtZGU0My00MDQ2LWI4ZDAtMDg4ZmVhMTRmZGJmXzE1NV8wMV8yNTFfMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1546,
 in_GraphicFileId: "Model3DBracketHandle160",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a589c4b5-6e5f-4ecc-85b2-8894f1a1662b_155_01_252_3.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=UIv6ttP3Ql4%2FT9CLVx2t1gWN36a8t0wXncDvt6xwwgk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTU4OWM0YjUtNmU1Zi00ZWNjLTg1YjItODg5NGYxYTE2NjJiXzE1NV8wMV8yNTJfMy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1547,
 in_GraphicFileId: "Model3DBracketHandle192",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b93fe75c-239a-4945-80f8-cfc06b6cb1aa_155_01_253_4.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=P%2Fw1biyM84JU%2FHpd4G03fVowAsa%2F11OLTinMjeogV2o%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjkzZmU3NWMtMjM5YS00OTQ1LTgwZjgtY2ZjMDZiNmNiMWFhXzE1NV8wMV8yNTNfNC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1548,
 in_GraphicFileId: "Model3DBracketHandle224",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0905b530-82d5-4b7a-9bb0-b51b18c55b93_155_01_254_5.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=wK%2BXRyXWjnkvtSf5FU3T6cbT71oL8U3G0RxwJLEAhak%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDkwNWI1MzAtODJkNS00YjdhLTliYjAtYjUxYjE4YzU1YjkzXzE1NV8wMV8yNTRfNS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1549,
 in_GraphicFileId: "Model3DBracketHandle288",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3a77d906-9128-4359-9611-b32f0c1d57ab_155_01_255_6.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=2rKDAWkbgaV%2BCQ1EP19GaS6dlSsoDqeaHrrnqyCtvpo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2E3N2Q5MDYtOTEyOC00MzU5LTk2MTEtYjMyZjBjMWQ1N2FiXzE1NV8wMV8yNTVfNi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1550,
 in_GraphicFileId: "Model3DBracketHandle320",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/73d6ca21-a595-4fec-8890-e3fa8b690462_155_01_256_7.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=xaibGy0zys7m21I8%2BVWXWLvsStKZVMAcNztSZx5k7I8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzNkNmNhMjEtYTU5NS00ZmVjLTg4OTAtZTNmYThiNjkwNDYyXzE1NV8wMV8yNTZfNy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1551,
 in_GraphicFileId: "Model3DBracketHandle352",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/de9f9baa-2c17-4c8c-b755-e601b6a2e3ae_155_01_257_8.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=FXBqFzzIAM%2B2xvry0BhImTCUMVlIZPzQj11FAXNv3kI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGU5ZjliYWEtMmMxNy00YzhjLWI3NTUtZTYwMWI2YTJlM2FlXzE1NV8wMV8yNTdfOC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1552,
 in_GraphicFileId: "Model3DBracketHandle448",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c37bed4c-9e44-455a-ab60-ca07d26ebe51_155_01_258_9.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=jblpPhEWSBwqgCLOl9QEwU13ipcXOsnqnasAlJzr1ZM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzM3YmVkNGMtOWU0NC00NTVhLWFiNjAtY2EwN2QyNmViZTUxXzE1NV8wMV8yNThfOS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1553,
 in_GraphicFileId: "Model3DBracketHandle480",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/389288aa-f28f-4cc2-b184-9832a1abfdc1_155_01_259_10.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=X9dBOs%2F%2Ff6HQe%2FRzpVNNH4ZgHrPzTj21AXg5ySpIO0g%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzg5Mjg4YWEtZjI4Zi00Y2MyLWIxODQtOTgzMmExYWJmZGMxXzE1NV8wMV8yNTlfMTAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1554,
 in_GraphicFileId: "Model3DBracketHandle560",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/79e75c08-83e9-4a4c-a5b9-9ca97ba11c4f_155_01_260_11.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1qsHglrrS8sxHIDvr2YLzrnvLNe0iWDxiOZZ5Ckna3U%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzllNzVjMDgtODNlOS00YTRjLWE1YjktOWNhOTdiYTExYzRmXzE1NV8wMV8yNjBfMTEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1555,
 in_GraphicFileId: "Model3DBracketHandle640",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c17303d5-7977-4388-8d66-8234ef5fc1ce_155_01_261_12.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=hfblJ5Ax5N1FDK5nf8gYFeMhleB4DeyoJ%2FMYv0sI3eE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzE3MzAzZDUtNzk3Ny00Mzg4LThkNjYtODIzNGVmNWZjMWNlXzE1NV8wMV8yNjFfMTIub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1556,
 in_GraphicFileId: "Model3DBracketHandle96",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/da4d35e0-f2ee-4515-82d9-88aceed40c04_155_01_250_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=M%2FfMFipVp2xKEZZvopJ%2FvVNEIx28odbwPBW%2FkGpj1g8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGE0ZDM1ZTAtZjJlZS00NTE1LTgyZDktODhhY2VlZDQwYzA0XzE1NV8wMV8yNTBfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1557,
 in_GraphicFileId: "Model3DBracketHandle960",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c2a7c0bc-5350-4987-b812-854e5cff6c79_155_01_262_13.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=wvTxUt4gmbHTyAL3sA9TIHFMeHZYSEtSbzPYzyS3O24%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzJhN2MwYmMtNTM1MC00OTg3LWI4MTItODU0ZTVjZmY2Yzc5XzE1NV8wMV8yNjJfMTMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1558,
 in_GraphicFileId: "Model3DbrARRAS5",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b2df4957-856a-4d3d-95f3-b3ba426b56c9_support2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=sU8DERWEaryUTifX6KxluqlGxF0DHPObZEvCDcGfitY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjJkZjQ5NTctODU2YS00ZDNkLTk1ZjMtYjNiYTQyNmI1NmM5X3N1cHBvcnQyLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1559,
 in_GraphicFileId: "Model3DbrTucano",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/52fb353b-8340-4029-98a6-848f78c83ca6_support1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=kZwLSSSe3bNQGTz9Dk9BQP7KXJuFWVzCjzphEubuKRI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTJmYjM1M2ItODM0MC00MDI5LTk4YTYtODQ4Zjc4YzgzY2E2X3N1cHBvcnQxLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1560,
 in_GraphicFileId: "Model3DCoverCap290.40.701",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9c4ff2d3-47de-4340-a9db-5ab358a150b2_cover%20cap%20right%20-%20290_40_701.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=4lK1A3Mi3yZ6kACNy5fpzAbKLefOoqiX6elzVzT%2BGSM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWM0ZmYyZDMtNDdkZS00MzQwLWE5ZGItNWFiMzU4YTE1MGIyX2NvdmVyIGNhcCByaWdodCAtIDI5MF80MF83MDEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1561,
 in_GraphicFileId: "Model3DCoverCap290.40.702",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5654e4d8-7ee0-47e6-b49c-ddc938a1c5ce_cover%20cap%20left%20-%20290_40_702.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZqhlFu3u4mT6MOdV6MePz16x0BA%2Br7Lr9ZAbUq%2BJuSI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTY1NGU0ZDgtN2VlMC00N2U2LWI0OWMtZGRjOTM4YTFjNWNlX2NvdmVyIGNhcCBsZWZ0IC0gMjkwXzQwXzcwMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1562,
 in_GraphicFileId: "Model3DDesignLegRectangular001H100",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e3eefeef-0a4e-40c9-8da0-cf33bc53ef2b_model3ddesignlegrectangular001h100.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=pLdpbcrzauSfNJftYUicjLBIgoX9giC57HMVREdDtk8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTNlZWZlZWYtMGE0ZS00MGM5LThkYTAtY2YzM2JjNTNlZjJiX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxMDAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1563,
 in_GraphicFileId: "Model3DDesignLegRectangular001H150",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/16d994fe-db0f-4b8b-b516-8832e3bb25ba_model3ddesignlegrectangular001h150.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=L39TApwu5ugj3Ynj1QK4SBv2ls6n4zIWMwZeCYJTAdU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTZkOTk0ZmUtZGIwZi00YjhiLWI1MTYtODgzMmUzYmIyNWJhX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgxNTAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1564,
 in_GraphicFileId: "Model3DDesignLegRectangular001H200",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ef530940-2140-4383-9a52-304f25104f53_model3ddesignlegrectangular001h200.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=FQqA%2BM1RtEfcQLJuc%2B9iQbpZxLaiNUYSJ3SncZO2Jaw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWY1MzA5NDAtMjE0MC00MzgzLTlhNTItMzA0ZjI1MTA0ZjUzX21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWgyMDAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1565,
 in_GraphicFileId: "Model3DDesignLegRectangular001H50",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7da2e978-87cf-498e-a150-83b09acf8479_model3ddesignlegrectangular001h50.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FIvj3l4DXcoBCZLyGUszonVBU0FiyCz6lp83LukonOA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2RhMmU5NzgtODdjZi00OThlLWExNTAtODNiMDlhY2Y4NDc5X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg1MC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1566,
 in_GraphicFileId: "Model3DDesignLegRectangular001H80",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/aadb8c73-c33a-4bd2-a080-c58b25aa23c5_model3ddesignlegrectangular001h80.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=YHyH%2B%2FsrekigjcQ39oFEA3z%2Fb4GaQjk5laIAvg%2BUGF4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWFkYjhjNzMtYzMzYS00YmQyLWEwODAtYzU4YjI1YWEyM2M1X21vZGVsM2RkZXNpZ25sZWdyZWN0YW5ndWxhcjAwMWg4MC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1567,
 in_GraphicFileId: "Model3DDesignLegSlanted001H250",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cd388c74-e105-4e48-836d-b8c22697a035_634_48_050_6.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=U%2BB66oI1Ps3xRKtj3bbTbbYyzee6YddiIczRY7eifC4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2QzODhjNzQtZTEwNS00ZTQ4LTgzNmQtYjhjMjI2OTdhMDM1XzYzNF80OF8wNTBfNi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1568,
 in_GraphicFileId: "Model3DGlueDuststrip",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d67bb9b9-88f8-41ab-979e-74989b759c28_glueduststrip.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=tAd324OiFHJ60hy9lEX8VMlVSQ9J1aNYFARrePbcAso%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDY3YmI5YjktODhmOC00MWFiLTk3OWUtNzQ5ODliNzU5YzI4X2dsdWVkdXN0c3RyaXAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1569,
 in_GraphicFileId: "Model3DHandle100_160",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4df72848-c6a7-4ad8-b019-55944de6dbae_106_69_321_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=G3hNG%2Fd3ceF0YfIJgZmcNvGYDhj50peIJGUsiHPFvSw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGRmNzI4NDgtYzZhNy00YWQ4LWIwMTktNTU5NDRkZTZkYmFlXzEwNl82OV8zMjFfMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1570,
 in_GraphicFileId: "Model3DHandle100_320",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5545c385-a19f-4828-96b4-71c758d6841c_106_69_322_3.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=AbAqVS3NljpDoZ1brOV37oSycDMuhttMMRSIoxCMsew%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTU0NWMzODUtYTE5Zi00ODI4LTk2YjQtNzFjNzU4ZDY4NDFjXzEwNl82OV8zMjJfMy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1571,
 in_GraphicFileId: "Model3DHandle100_64",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2e8e272d-b4dc-466e-a144-aa176003177d_106_69_320_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=vqW3nSVtTGMOpeg4ypF%2FtJBIinN9t0W6MJM2yDMbvS0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmU4ZTI3MmQtYjRkYy00NjZlLWExNDQtYWExNzYwMDMxNzdkXzEwNl82OV8zMjBfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1572,
 in_GraphicFileId: "Model3DHandle110_1060",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f3124fb4-876c-47e8-a2d5-be4f20da665d_117_66_101_19.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=bd7BK7Oz4WvCcTfI8KJmQUXbfmf4T5YUf%2Fi%2BOb9lAjM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjMxMjRmYjQtODc2Yy00N2U4LWEyZDUtYmU0ZjIwZGE2NjVkXzExN182Nl8xMDFfMTkub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1573,
 in_GraphicFileId: "Model3DHandle110_1160",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cd35643f-efc6-4bf6-845f-ea9341470a0d_117_66_102_20.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=POhlwDtEft8%2BSPwyNvK%2FgCEULQjBfls7G6kTwAJcr0U%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2QzNTY0M2YtZWZjNi00YmY2LTg0NWYtZWE5MzQxNDcwYTBkXzExN182Nl8xMDJfMjAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1574,
 in_GraphicFileId: "Model3DHandle110_1260",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/40765e74-f7cf-423a-bf3c-f3e06c296d76_117_66_103_21.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=zZ%2BBvgyRL86S8MHRUqpMBNnMB1NT%2BP%2FK58lovY37ppU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDA3NjVlNzQtZjdjZi00MjNhLWJmM2MtZjNlMDZjMjk2ZDc2XzExN182Nl8xMDNfMjEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1575,
 in_GraphicFileId: "Model3DHandle110_128",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/02293753-1e29-42b4-bb19-c01d0e65e0e3_117_66_026_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=xIjGeH4bKA0FAyM3NBtizaCEOhVJ%2Bs%2FzdbMq6AMebv0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDIyOTM3NTMtMWUyOS00MmI0LWJiMTktYzAxZDBlNjVlMGUzXzExN182Nl8wMjZfMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1576,
 in_GraphicFileId: "Model3DHandle110_1360",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dfda2707-9818-48e0-8888-52c418642f07_117_66_104_22.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=5CR2FRuugp5NgPhp59DUNuYPsOmJ85J%2BHgzZh7%2BlbJg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGZkYTI3MDctOTgxOC00OGUwLTg4ODgtNTJjNDE4NjQyZjA3XzExN182Nl8xMDRfMjIub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1577,
 in_GraphicFileId: "Model3DHandle110_1460",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3becd62c-8737-4bc4-8485-af12f5d99cfe_117_66_106_23.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=VmYtzib7M%2FuNYRggqMepQbL8YqOucQqncb5A8P4x6Ac%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2JlY2Q2MmMtODczNy00YmM0LTg0ODUtYWYxMmY1ZDk5Y2ZlXzExN182Nl8xMDZfMjMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1578,
 in_GraphicFileId: "Model3DHandle110_1560",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/436f5eeb-fb3f-4ec4-b3a6-bf7d7f258d9c_117_66_107_24.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=p06QlPYNwwsJQPBGKFiW4cFvclrwCp07l9ULgP8kxRQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDM2ZjVlZWItZmIzZi00ZWM0LWIzYTYtYmY3ZDdmMjU4ZDljXzExN182Nl8xMDdfMjQub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1579,
 in_GraphicFileId: "Model3DHandle110_160",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/74acb708-9c5d-4307-b7d2-379bb92bcb98_117_66_035_3.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=W2F7csNAzVjBNFzF7qpR04GMq6zjc7ySf3wM7ylEb6k%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzRhY2I3MDgtOWM1ZC00MzA3LWI3ZDItMzc5YmI5MmJjYjk4XzExN182Nl8wMzVfMy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1580,
 in_GraphicFileId: "Model3DHandle110_1760",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2a48d38e-2a9b-49ad-bf18-2230ddbe792a_117_66_108_25.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=vlEptNtFHKtMTPE%2F7z7VJDZTj2uqwlOufOoCnQZXOyQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmE0OGQzOGUtMmE5Yi00OWFkLWJmMTgtMjIzMGRkYmU3OTJhXzExN182Nl8xMDhfMjUub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1581,
 in_GraphicFileId: "Model3DHandle110_1960",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ec66358f-e8cb-4bd7-9d13-c5f48ecacfb2_117_66_109_26.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=zAH%2BsGd9HGsqlP8PXDCZR8mA78P5Rx2y1irUqMJxnXg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZWM2NjM1OGYtZThjYi00YmQ3LTlkMTMtYzVmNDhlY2FjZmIyXzExN182Nl8xMDlfMjYub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1582,
 in_GraphicFileId: "Model3DHandle110_210",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/11c998c3-58c0-4dd5-aac9-fa3588aab482_117_66_045_5.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=5bmPq%2BTBdO%2BkBuIR9e2DVk4OltNGnSxOBFnH59JP7Yk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTFjOTk4YzMtNThjMC00ZGQ1LWFhYzktZmEzNTg4YWFiNDgyXzExN182Nl8wNDVfNS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1583,
 in_GraphicFileId: "Model3DHandle110_260",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a2718ca0-6ba1-42e7-baa2-7d6351dd7ca9_117_66_050_6.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=6Zl4DVSp%2Fv41Lc2RwektX%2BDYxbvh2wkzUBc2IKD6M5Y%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTI3MThjYTAtNmJhMS00MmU3LWJhYTItN2Q2MzUxZGQ3Y2E5XzExN182Nl8wNTBfNi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1584,
 in_GraphicFileId: "Model3DHandle110_310",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/af56e17c-30ab-4962-a1b0-d987690e72cb_117_66_055_8.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Yqhynl6096E1RZgl%2BUi7nYUYOEcGBS0Poz0Alon2meg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWY1NmUxN2MtMzBhYi00OTYyLWExYjAtZDk4NzY5MGU3MmNiXzExN182Nl8wNTVfOC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1585,
 in_GraphicFileId: "Model3DHandle110_360",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/47a11f4a-d69a-4771-b783-b0d491004b2e_117_66_064_10.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=GV1%2FiA%2Fk4Fanoal18kExEtSLFkfdeTram4fi1LacDw8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDdhMTFmNGEtZDY5YS00NzcxLWI3ODMtYjBkNDkxMDA0YjJlXzExN182Nl8wNjRfMTAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1586,
 in_GraphicFileId: "Model3DHandle110_410",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f6c90511-bb45-49a6-bb7b-dcafcc7eb3d9_117_66_065_11.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=MoAchMWklLCYxVPRnbJxZCdmA0%2FAGASBte0QlyBRRRU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjZjOTA1MTEtYmI0NS00OWE2LWJiN2ItZGNhZmNjN2ViM2Q5XzExN182Nl8wNjVfMTEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1587,
 in_GraphicFileId: "Model3DHandle110_460",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4ce186ca-25e8-4737-ae96-ebe0e75370a8_117_66_075_13.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=OJ2YAfyyjkjTue%2BFuEBC%2BqbEqQOBTzD0QTmA1M%2BYeVg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGNlMTg2Y2EtMjVlOC00NzM3LWFlOTYtZWJlMGU3NTM3MGE4XzExN182Nl8wNzVfMTMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1588,
 in_GraphicFileId: "Model3DHandle110_560",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2276b924-b0aa-4d3a-b84e-3574d2f6abb4_117_66_080_14.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=SutdhIqi2ZrEFiySJmiJkKlXU2dUXJFtL7Rks4vGLCs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjI3NmI5MjQtYjBhYS00ZDNhLWI4NGUtMzU3NGQyZjZhYmI0XzExN182Nl8wODBfMTQub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1589,
 in_GraphicFileId: "Model3DHandle110_660",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/972aa2ed-8d63-4f93-bf9d-e1c214c76db3_117_66_085_15.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=CWp4leUlE1OdTYBfHsLYcvzDBfKTFpuZYG4OdxirBio%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOTcyYWEyZWQtOGQ2My00ZjkzLWJmOWQtZTFjMjE0Yzc2ZGIzXzExN182Nl8wODVfMTUub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1590,
 in_GraphicFileId: "Model3DHandle110_760",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/363c396f-6376-419d-9a77-d3044ed60b2e_117_66_090_16.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=s5vMLyWZRI9%2FNUeEaSFsTNSv8KlHfSMogezJyeL9WQk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzYzYzM5NmYtNjM3Ni00MTlkLTlhNzctZDMwNDRlZDYwYjJlXzExN182Nl8wOTBfMTYub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1591,
 in_GraphicFileId: "Model3DHandle110_860",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/229b8cf1-d818-42ef-a4b9-4c4c4a8a5b36_117_66_095_17.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Kez25LNHskkmWriCWgGDlNDcPdbGY5y3%2F7SCjHxS3cY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjI5YjhjZjEtZDgxOC00MmVmLWE0YjktNGM0YzRhOGE1YjM2XzExN182Nl8wOTVfMTcub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1592,
 in_GraphicFileId: "Model3DHandle110_96",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f7fda0b4-7140-4a4d-aa6a-893136198e28_117_66_017_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=9bm6DOsXlo%2FvaZwoSt4oxfh0NtL6NDO01TYBBN%2FyhKE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjdmZGEwYjQtNzE0MC00YTRkLWFhNmEtODkzMTM2MTk4ZTI4XzExN182Nl8wMTdfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1593,
 in_GraphicFileId: "Model3DHandle110_960",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c0808110-bde1-408f-9017-388a0be5a435_117_66_100_18.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Rp41xbxnE9HAiH5%2BQB6RSal1QvPxNKk5BO3FjHNjH20%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzA4MDgxMTAtYmRlMS00MDhmLTkwMTctMzg4YTBiZTVhNDM1XzExN182Nl8xMDBfMTgub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1594,
 in_GraphicFileId: "Model3DHandle120",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/2ce1c648-a640-46fb-aac0-45d24888a2c1_mod3d_120.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=dOrQ0Yvg%2B36Pr88ALuWpqaZIcMH%2FprZQkSZstWjfLAo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMmNlMWM2NDgtYTY0MC00NmZiLWFhYzAtNDVkMjQ4ODhhMmMxX21vZDNkXzEyMC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1595,
 in_GraphicFileId: "Model3DHandle130",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7349bd44-d8e7-4f0d-a65d-30b2cafb6f39_110_35_393_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=m3w%2Bl9owpzufeopagUB1OdGZpVzG5n%2BYR0Y99l6qszE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzM0OWJkNDQtZDhlNy00ZjBkLWE2NWQtMzBiMmNhZmI2ZjM5XzExMF8zNV8zOTNfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1596,
 in_GraphicFileId: "Model3DHandleDesign20_128",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/1fd4134a-2660-498e-8c6b-6eac7c981667_155_01_381_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=y645FgR%2F7OAlDyTcF83K%2Fv5HGijNfqrHAfcP8QXOyME%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMWZkNDEzNGEtMjY2MC00OThlLThjNmItNmVhYzdjOTgxNjY3XzE1NV8wMV8zODFfMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1597,
 in_GraphicFileId: "Model3DHandleDesign20_160",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e56bba9d-0081-4a5e-81bf-c6b337632daa_155_01_382_3.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1z%2Bi4dm9jRM3nYdxVqoWGTBI3s5et3Somy78aN8WDvw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU2YmJhOWQtMDA4MS00YTVlLTgxYmYtYzZiMzM3NjMyZGFhXzE1NV8wMV8zODJfMy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1598,
 in_GraphicFileId: "Model3DHandleDesign20_192",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b53d16a2-be3a-4356-b59b-c3e665eb05b2_155_01_383_4.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=j1GEYr2Uhg428jmiKBfHz0jzCCiqya9glSykIICiaNs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjUzZDE2YTItYmUzYS00MzU2LWI1OWItYzNlNjY1ZWIwNWIyXzE1NV8wMV8zODNfNC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1599,
 in_GraphicFileId: "Model3DHandleDesign20_224",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a9bd00ff-9aa1-4ecd-a14b-7258ea991ba2_155_01_384_5.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=U9jpY1ERGy3NvwXC9Hbu5OQucPHwqlnuZBbwtUDAACI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTliZDAwZmYtOWFhMS00ZWNkLWExNGItNzI1OGVhOTkxYmEyXzE1NV8wMV8zODRfNS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1600,
 in_GraphicFileId: "Model3DHandleDesign20_288",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6a65ab04-4818-43a5-b5b7-d8829c83bb99_155_01_385_6.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=0SNQEXN1C7UO9ES6P1bbHD2e4jLudJbl%2B3zoTzTkfT4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmE2NWFiMDQtNDgxOC00M2E1LWI1YjctZDg4MjljODNiYjk5XzE1NV8wMV8zODVfNi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1601,
 in_GraphicFileId: "Model3DHandleDesign20_320",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cb39bdcb-6607-4fd7-bf93-6825c47e2b7a_155_01_386_7.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=vXF6WYYHRR0NpZOT0fNewh57MjcWUcEm7eQGRbsILFA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2IzOWJkY2ItNjYwNy00ZmQ3LWJmOTMtNjgyNWM0N2UyYjdhXzE1NV8wMV8zODZfNy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1602,
 in_GraphicFileId: "Model3DHandleDesign20_352",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7454291a-0d95-4c98-bee7-e39e63f69372_155_01_387_8.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ELnxNp4EZEpNL4CQrzXDnXJPFZ%2BmVLcrscgitgh9WYA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzQ1NDI5MWEtMGQ5NS00Yzk4LWJlZTctZTM5ZTYzZjY5MzcyXzE1NV8wMV8zODdfOC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1603,
 in_GraphicFileId: "Model3DHandleDesign20_448",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/50444b08-57ea-4d75-b439-b8ebd019352c_155_01_388_9.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Nuh%2Fp8KuihZxOixfEMARNX1ckMVBfDGFZn32YJZE%2FYQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTA0NDRiMDgtNTdlYS00ZDc1LWI0MzktYjhlYmQwMTkzNTJjXzE1NV8wMV8zODhfOS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1604,
 in_GraphicFileId: "Model3DHandleDesign20_560",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/5c52f93d-c076-49a6-8831-d393624a2298_155_01_389_10.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=rwFJxwaBxtznhjtArd%2BJyoCgmvuJoNhkRKRxla2PXuQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNWM1MmY5M2QtYzA3Ni00OWE2LTg4MzEtZDM5MzYyNGEyMjk4XzE1NV8wMV8zODlfMTAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1605,
 in_GraphicFileId: "Model3DHandleDesign20_660",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/062d73d6-f217-4d50-a65c-1865a4766bc8_155_01_390_11.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=UyIMTJt8ZgaD5kdJXNLD2m0Pm5PnZZyr9yQiTBkLVIo%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDYyZDczZDYtZjIxNy00ZDUwLWE2NWMtMTg2NWE0NzY2YmM4XzE1NV8wMV8zOTBfMTEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1606,
 in_GraphicFileId: "Model3DHandleDesign20_760",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/10f2bf2b-1364-4be8-885b-43f7d812a9a4_155_01_391_12.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=40iGcaoCRRwXVWSrapVGEZR5%2FOTRvluiUkM5mOJ4VkE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTBmMmJmMmItMTM2NC00YmU4LTg4NWItNDNmN2Q4MTJhOWE0XzE1NV8wMV8zOTFfMTIub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1607,
 in_GraphicFileId: "Model3DHandleDesign20_96",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/22e43e58-7553-46b4-aaf1-de02f5047047_155_01_380_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Bttye4iRPxj0ff9Ho1nQth9iJZRCGAj2R4ADIjw1sN8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjJlNDNlNTgtNzU1My00NmI0LWFhZjEtZGUwMmY1MDQ3MDQ3XzE1NV8wMV8zODBfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1608,
 in_GraphicFileId: "Model3DHandleDesign60_128",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/afb42dde-a164-477d-b64a-1286334cf1f4_106_62_425_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TDLYEy%2FLNdV8yiyGs23%2BS8OTPZyGVhp%2BvIivBoVKDjI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYWZiNDJkZGUtYTE2NC00NzdkLWI2NGEtMTI4NjMzNGNmMWY0XzEwNl82Ml80MjVfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1609,
 in_GraphicFileId: "Model3DHandleDesign60_160",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b212ff85-20a7-4c82-9ccb-c71f364ac3ee_106_62_426_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=fQBLmZZvWnvjVZ8geC7OREVURoaJFGsMwVq8xhw7zng%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjIxMmZmODUtMjBhNy00YzgyLTljY2ItYzcxZjM2NGFjM2VlXzEwNl82Ml80MjZfMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1610,
 in_GraphicFileId: "Model3DHandleDesign80_212",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/14f48ca9-4181-4ac8-84ab-2e96809a7983_106_61_214_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=RfdDGT22XlgIVUCcv9LpOcW3VVFlYdjvHbwFzzBwj80%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMTRmNDhjYTktNDE4MS00YWM4LTg0YWItMmU5NjgwOWE3OTgzXzEwNl82MV8yMTRfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1611,
 in_GraphicFileId: "Model3DHandleDesign80_340",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/98c12254-c4fd-4afe-b9c1-04a018a54566_106_61_217_2.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=OTHX0Jqba3OoZp8JMXaknqxbhlwCrsrunD0OPTqLm60%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOThjMTIyNTQtYzRmZC00YWZlLWI5YzEtMDRhMDE4YTU0NTY2XzEwNl82MV8yMTdfMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1612,
 in_GraphicFileId: "Model3DHanger290.02.702",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3aba5d5b-49e5-4791-ae2b-498c13c17e7a_hanger%20left%20-%20290_02_702.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BVFDPBYVmONT%2BeBKZRyxVZxpEXjZQ10XdkEvHalRdjE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2FiYTVkNWItNDllNS00NzkxLWFlMmItNDk4YzEzYzE3ZTdhX2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcwMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1613,
 in_GraphicFileId: "Model3DHanger290.02.703",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7207b80e-0b68-4269-b594-a36382ed9a1c_hanger%20right%20-%20290_02_703.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=hKh4hnHx5kAHVIRzX8Vt72w%2BHRql0Srqc92UzStWSSQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzIwN2I4MGUtMGI2OC00MjY5LWI1OTQtYTM2MzgyZWQ5YTFjX2hhbmdlciByaWdodCAtIDI5MF8wMl83MDMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1614,
 in_GraphicFileId: "Model3DHanger290.02.710",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e67a22b6-7cf8-4565-be85-d6e5ff844cc4_hanger%20left%20-%20290_02_710.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=RWHlY%2Fo9sWuMqPagCSSnEBPENgSh1Cb7uRhhfG452Qw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTY3YTIyYjYtN2NmOC00NTY1LWJlODUtZDZlNWZmODQ0Y2M0X2hhbmdlciBsZWZ0IC0gMjkwXzAyXzcxMC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1615,
 in_GraphicFileId: "Model3DHanger290.02.711",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3098e3d8-4d49-4daf-a85f-f58600151983_hanger%20right%20-%20290_02_711.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=MCPOKIoDsJmOJNmb5EiEzcMl9lKbBvzJMnzcU9FsXks%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzA5OGUzZDgtNGQ0OS00ZGFmLWE4NWYtZjU4NjAwMTUxOTgzX2hhbmdlciByaWdodCAtIDI5MF8wMl83MTEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1616,
 in_GraphicFileId: "Model3DHanger290.03.937",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b13c958a-42e6-4fbf-9bf0-2ae49ffd5fd8_hanger%20right%20-%20290_03_937.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=YCEd0oS%2BfdsuC7nsGCxDTLgdUwuGmbSFc8E1Oz0Ccls%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjEzYzk1OGEtNDJlNi00ZmJmLTliZjAtMmFlNDlmZmQ1ZmQ4X2hhbmdlciByaWdodCAtIDI5MF8wM185Mzcub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1617,
 in_GraphicFileId: "Model3DHanger290.03.938",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e563e7e6-86c2-4d38-ba42-de569ec9e3fd_hanger%20left%20-%20290_03_938.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Gm65Y2OI6BmOtjYQNZP2VzLQbXhsxAQwpUMCs5lqrd4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTU2M2U3ZTYtODZjMi00ZDM4LWJhNDItZGU1NjllYzllM2ZkX2hhbmdlciBsZWZ0IC0gMjkwXzAzXzkzOC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1618,
 in_GraphicFileId: "Model3DHanger290.40.901",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/dbedee76-397e-4cda-9b60-92283ab4bdda_hanger%20right%20-%20290_40_901.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=PxXgf1AVSqpBjjSJ2FUKyDH5nnjMVNWPT8H%2FmHaMaqU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGJlZGVlNzYtMzk3ZS00Y2RhLTliNjAtOTIyODNhYjRiZGRhX2hhbmdlciByaWdodCAtIDI5MF80MF85MDEub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1619,
 in_GraphicFileId: "Model3DHanger290.40.902",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d57f9688-4f3c-420e-b390-7382cd373534_hanger%20left%20-%20290_40_902.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Ll6iOxufGqU8XdalpuKnnu57nAFB61s8xR1%2FQpLFwFw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDU3Zjk2ODgtNGYzYy00MjBlLWIzOTAtNzM4MmNkMzczNTM0X2hhbmdlciBsZWZ0IC0gMjkwXzQwXzkwMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1620,
 in_GraphicFileId: "Model3DHanger290.40.980",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bcc03241-5190-4f1f-a19c-365c610708b9_hanger%20right%20-%20290_40_980.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ULxiTxcGfBZJm1jBARIttQkn9R08rXwhrAoHDlegfxU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmNjMDMyNDEtNTE5MC00ZjFmLWExOWMtMzY1YzYxMDcwOGI5X2hhbmdlciByaWdodCAtIDI5MF80MF85ODAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1621,
 in_GraphicFileId: "Model3DHanger290.40.981",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/33f79e0b-262b-483a-9901-ab29ebcaf054_hanger%20left%20-%20290_40_981.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=GXNw8Jqb%2B1Oj56dmNVEKSm%2Ffh7gGOg%2FBsSBIJKEXw68%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzNmNzllMGItMjYyYi00ODNhLTk5MDEtYWIyOWViY2FmMDU0X2hhbmdlciBsZWZ0IC0gMjkwXzQwXzk4MS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1622,
 in_GraphicFileId: "Model3DHinge110HalfSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f0c8a9d2-097a-47f6-8149-49e4c7e721f5_hinge110halfspringss%20-%20329_17_602.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1SvqXzszRaG39zPs7Z5l8a0zFr1%2BUamkl18xYVMtzmc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjBjOGE5ZDItMDk3YS00N2Y2LTgxNDktNDllNGM3ZTcyMWY1X2hpbmdlMTEwaGFsZnNwcmluZ3NzIC0gMzI5XzE3XzYwMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1623,
 in_GraphicFileId: "Model3DHinge110InsetSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fa4e71e6-f2a4-40d5-be95-52215c2f23c8_hinge110insetspringss%20-%20329_17_603.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1PxqOAi7kJ9jpvWfqGbDvLd1h66tmZxeBhm%2BoRTuN3U%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmE0ZTcxZTYtZjJhNC00MGQ1LWJlOTUtNTIyMTVjMmYyM2M4X2hpbmdlMTEwaW5zZXRzcHJpbmdzcyAtIDMyOV8xN182MDMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1624,
 in_GraphicFileId: "Model3DHinge110OverlaySpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0a835021-5a4b-4513-810b-d86ace8d681b_hinge110overlayspringss%20-%20329_17_600.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=KiJLqCvxqkyvl37rNdoHBr%2By1%2BPSD7nbOoCyZ399uAw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMGE4MzUwMjEtNWE0Yi00NTEzLTgxMGItZDg2YWNlOGQ2ODFiX2hpbmdlMTEwb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE3XzYwMC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1625,
 in_GraphicFileId: "Model3DHinge110SoftClHalfSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/41916bdc-bc29-44d6-9863-2ed85c42bef1_hinge110softclhalfspringss%20-%20329_15_403.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=U2%2BPfX7Xw7m0olN9a4U2RYtRWCHaDwjskaBIlK6JXfE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDE5MTZiZGMtYmMyOS00NGQ2LTk4NjMtMmVkODVjNDJiZWYxX2hpbmdlMTEwc29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzE1XzQwMy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1626,
 in_GraphicFileId: "Model3DHinge110SoftClInsetSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f9d90475-8b1d-4250-a620-995f1567b039_hinge110softclinsetspringss%20-%20329_15_405.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Oazi%2FA9xCbBEEe%2BDnYsDYTfjxwVyycNdH4r1UR8rdvU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjlkOTA0NzUtOGIxZC00MjUwLWE2MjAtOTk1ZjE1NjdiMDM5X2hpbmdlMTEwc29mdGNsaW5zZXRzcHJpbmdzcyAtIDMyOV8xNV80MDUub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1627,
 in_GraphicFileId: "Model3DHinge110SoftClOverlaySpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/4f6903bc-38fe-46f4-8b13-1d28b4e98ef6_hinge110softcloverlayspringss%20-%20329_15_401.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=IaSihGJftZZ6Bo2YyF%2F5EOUu%2FivA6VgUUFQEhK80cUM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNGY2OTAzYmMtMzhmZS00NmY0LThiMTMtMWQyOGI0ZTk4ZWY2X2hpbmdlMTEwc29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzE1XzQwMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1628,
 in_GraphicFileId: "Model3DHinge120OverlayNoSpringSSForFHF",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3e126c33-c5ad-43be-89b7-6850d517ee64_hingeflipliftfhftop%20-%20342_81_400.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=4juXG9XTh4knIGrXFqVLogQbpmNboptYRkqSaWko7Vw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvM2UxMjZjMzMtYzVhZC00M2JlLTg5YjctNjg1MGQ1MTdlZTY0X2hpbmdlZmxpcGxpZnRmaGZ0b3AgLSAzNDJfODFfNDAwLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1629,
 in_GraphicFileId: "Model3DHinge155SoftClHalfSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/01d3aa1d-e9b1-4a3d-9f2d-d5388f23a692_hinge155softclhalfspringss%20-%20329_29_221.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=n2lRz4dwxdBWFiDDNxzZa34L4AP821%2F2mzh0hnaWAc4%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDFkM2FhMWQtZTliMS00YTNkLTlmMmQtZDUzODhmMjNhNjkyX2hpbmdlMTU1c29mdGNsaGFsZnNwcmluZ3NzIC0gMzI5XzI5XzIyMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1630,
 in_GraphicFileId: "Model3DHinge155SoftClOverlaySpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/09bcf8f0-6aa5-4bfa-b8f4-3ee6ffd52061_hinge155softcloverlayspringss%20-%20329_29_217.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FQIml7vfdLt5mqO5BPo3AjUxNeTfeulZOXA%2Be%2Fn4XoI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDliY2Y4ZjAtNmFhNS00YmZhLWI4ZjQtM2VlNmZmZDUyMDYxX2hpbmdlMTU1c29mdGNsb3ZlcmxheXNwcmluZ3NzIC0gMzI5XzI5XzIxNy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1631,
 in_GraphicFileId: "Model3DHinge165HalfSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/3860eeb1-7cfd-4d09-99cf-6d324901a778_hinge165halfspringss%20-%20329_07_702.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=DhB64CFrvxeNe15C31kjJOrZJr7xYN3q5HpxKEJ%2FZWM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzg2MGVlYjEtN2NmZC00ZDA5LTk5Y2YtNmQzMjQ5MDFhNzc4X2hpbmdlMTY1aGFsZnNwcmluZ3NzIC0gMzI5XzA3XzcwMi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1632,
 in_GraphicFileId: "Model3DHinge165InsetSpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/bab5b4e9-cfdb-44e6-89b5-86f40942f887_hinge165insetspringss%20-%20329_07_703.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=a61Tuiida3K2eiTMNIM8P3yGVl0%2Bx%2BVTVMSQdQFCjKk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmFiNWI0ZTktY2ZkYi00NGU2LTg5YjUtODZmNDA5NDJmODg3X2hpbmdlMTY1aW5zZXRzcHJpbmdzcyAtIDMyOV8wN183MDMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1633,
 in_GraphicFileId: "Model3DHinge165OverlaySpringSS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/59cb31f4-fb71-41c4-9071-c57f77787bb8_hinge165overlayspringss%20-%20329_07_700.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=PJml0vvFYQbhdfm31MipW75JQB2M8cQYJ7i3uWOb8s8%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTljYjMxZjQtZmI3MS00MWM0LTkwNzEtYzU3Zjc3Nzg3YmI4X2hpbmdlMTY1b3ZlcmxheXNwcmluZ3NzIC0gMzI5XzA3XzcwMC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1634,
 in_GraphicFileId: "Model3DHingeBlindCornerInset110SoftClNP",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6a1a600a-cc48-4b97-9163-a2d2f35784b9_hinge110blindcornerinset%20-%20329_11_705.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ToGi2uFCYeoO69rHl7ecOloWbMqo%2FfSGXr3sNV07nQk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmExYTYwMGEtY2M0OC00Yjk3LTkxNjMtYTJkMmYzNTc4NGI5X2hpbmdlMTEwYmxpbmRjb3JuZXJpbnNldCAtIDMyOV8xMV83MDUub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1635,
 in_GraphicFileId: "Model3DHingeCenterForFHF",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f55017a7-ab31-4868-809f-d9b032ac2c12_hingeforcenterfhf%20-%20372_74_990.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=VwjDSUS5bgEAE%2FzIVYPC8BgI61%2B6lEuCawXab7ec5Ng%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjU1MDE3YTctYWIzMS00ODY4LTgwOWYtZDliMDMyYWMyYzEyX2hpbmdlZm9yY2VudGVyZmhmIC0gMzcyXzc0Xzk5MC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1636,
 in_GraphicFileId: "Model3DHingeFlipLiftDF",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a917a9a3-1579-44b2-9493-124013ca790c_hingeflipliftdf%20-%20342_78_700_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=MOaUJVJ1OKTO57PoQkFP9azOHLEVkD6ksNCe01XvAzY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTkxN2E5YTMtMTU3OS00NGIyLTk0OTMtMTI0MDEzY2E3OTBjX2hpbmdlZmxpcGxpZnRkZiAtIDM0Ml83OF83MDBfMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1637,
 in_GraphicFileId: "Model3DKeku_Front_262_50_359",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/81b37dac-ed41-4df6-b851-882db92befe0_keku_front_262_50_359.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=z0QhMeIDW13pT%2Fc7w8tkC0e9wc%2FbYLiF2mxLDnh1agc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODFiMzdkYWMtZWQ0MS00ZGY2LWI4NTEtODgyZGI5MmJlZmUwX2tla3VfZnJvbnRfMjYyXzUwXzM1OS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1638,
 in_GraphicFileId: "Model3DKeku_Side_262_50_368",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b9d3b9a6-a426-4ad0-9207-44a2c2ee6b5f_keku_side_262_50_368.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=mFhbVoUmeBriHU%2ByrdkRPK1d9%2B1WApjdLqNvxkkyUeI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjlkM2I5YTYtYTQyNi00YWQwLTkyMDctNDRhMmMyZWU2YjVmX2tla3Vfc2lkZV8yNjJfNTBfMzY4Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1639,
 in_GraphicFileId: "Model3DMpCruciformA0SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/baa067a9-41fe-42ed-b550-a454a2297434_mpcruciforma0ss%20-%20329_80_528.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=nf93f%2FFd4PQhT0D6n%2FB9MxRkUDJl%2BG%2BMQAOf0oZIKcE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYmFhMDY3YTktNDFmZS00MmVkLWI1NTAtYTQ1NGEyMjk3NDM0X21wY3J1Y2lmb3JtYTBzcyAtIDMyOV84MF81Mjgub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1640,
 in_GraphicFileId: "Model3DMpCruciformA3SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7677d101-59e0-4ae8-a11f-ce8842df322a_mpcruciforma3ss%20-%20329_80_555.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=1zqVyA11cuuQ5YxXN0YHf%2FKffT6MQijfF4T9szKOaCU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzY3N2QxMDEtNTllMC00YWU4LWExMWYtY2U4ODQyZGYzMjJhX21wY3J1Y2lmb3JtYTNzcyAtIDMyOV84MF81NTUub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1641,
 in_GraphicFileId: "Model3DMpCruciformA6SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/8fe5661c-2e56-4b4d-ae12-6323541b2c7b_mpcruciforma6ss%20-%20329_80_582.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=h8iO46t4S3LYy1nMaT%2BltYn9%2B1pP3l%2BQ4gYw%2BgZ0Wno%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOGZlNTY2MWMtMmU1Ni00YjRkLWFlMTItNjMyMzU0MWIyYzdiX21wY3J1Y2lmb3JtYTZzcyAtIDMyOV84MF81ODIub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1642,
 in_GraphicFileId: "Model3DMpCruciformSM0SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/71d1dd1c-f6ac-4356-ae82-c8f9a5c264d5_mpcruciformsm0ss%20-%20329_71_500.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=M4STiBbP1z4aHtkhCPW17nUCpKp2vHWT5Uvu8P5dPSE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzFkMWRkMWMtZjZhYy00MzU2LWFlODItYzhmOWE1YzI2NGQ1X21wY3J1Y2lmb3Jtc20wc3MgLSAzMjlfNzFfNTAwLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1643,
 in_GraphicFileId: "Model3DMpCruciformSM3SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7dc431c6-6d86-4a6d-bcfd-e8490f85c612_mpcruciformsm3ss%20-%20329_71_503.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=zdj%2FRPcTwLuhKf%2Bx3MzeP%2F6YyyFnieOS0Hjrqg1yjqQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvN2RjNDMxYzYtNmQ4Ni00YTZkLWJjZmQtZTg0OTBmODVjNjEyX21wY3J1Y2lmb3Jtc20zc3MgLSAzMjlfNzFfNTAzLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1644,
 in_GraphicFileId: "Model3DMpCruciformSM6SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/233300a6-be49-428a-a2e9-d365b683c90b_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=dhhxxHE%2BdvlUWsisoYXaV1xlyjcblsjc8j8So28wW04%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjMzMzAwYTYtYmU0OS00MjhhLWEyZTktZDM2NWI2ODNjOTBiX21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1645,
 in_GraphicFileId: "Model3DMPHorizontalBL0SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/59dd361a-83dc-4c52-865e-4dc83c920b52_mphorizontal175h3100%20-%20342_22_060.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=NvqZylLXVwNjeabBWR6UNDe6VDNE%2FC0f2zHooUX6IS0%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNTlkZDM2MWEtODNkYy00YzUyLTg2NWUtNGRjODNjOTIwYjUyX21waG9yaXpvbnRhbDE3NWgzMTAwIC0gMzQyXzIyXzA2MC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1646,
 in_GraphicFileId: "Model3DMPHorizontalBL3SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/624385f4-1e4a-4018-ab8d-fdf7b1496db5_mphorizontal175h3130%20-%20342_22_063.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=tp%2FW7oYCzQ17ppLxDrCA6EasOtps0xCf28N3zPpuQ6M%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjI0Mzg1ZjQtMWU0YS00MDE4LWFiOGQtZmRmN2IxNDk2ZGI1X21waG9yaXpvbnRhbDE3NWgzMTMwIC0gMzQyXzIyXzA2My5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1647,
 in_GraphicFileId: "Model3DMpHorizontalSM0SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b71f0015-1ab7-4543-a44b-8e651f41058c_mphorizontalsm0ss%20-%20329_67_000.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=is8%2F%2F5%2BXdXorob57jVFUUEe%2BcwamiI9RcTkI5XdgOHI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjcxZjAwMTUtMWFiNy00NTQzLWE0NGItOGU2NTFmNDEwNThjX21waG9yaXpvbnRhbHNtMHNzIC0gMzI5XzY3XzAwMC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1648,
 in_GraphicFileId: "Model3DMpHorizontalSM3SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/82cc5da1-0aa1-45ff-a869-3baab17c354c_mphorizontalsm3ss%20-%20329_67_003.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2BdLGTCni8jr3Bbyo3z8j%2FJUU5uU6ZL9vM9l4L3HZiEs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODJjYzVkYTEtMGFhMS00NWZmLWE4NjktM2JhYWIxN2MzNTRjX21waG9yaXpvbnRhbHNtM3NzIC0gMzI5XzY3XzAwMy5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1649,
 in_GraphicFileId: "Model3DMpHorizontalSM6SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/233300a6-be49-428a-a2e9-d365b683c90b_mphorizontalsm6ss%20-%20329_67_006.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=dhhxxHE%2BdvlUWsisoYXaV1xlyjcblsjc8j8So28wW04%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMjMzMzAwYTYtYmU0OS00MjhhLWEyZTktZDM2NWI2ODNjOTBiX21waG9yaXpvbnRhbHNtNnNzIC0gMzI5XzY3XzAwNi5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1650,
 in_GraphicFileId: "Model3DPlinthLegRectangularScrewH100",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/b8b4d126-08f3-4830-b2af-d7de7898003a_plinthlegrectangularscrewh100.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=d3zsvzU%2FoXbTfk1rtf7UUubxb05wDZmmXh0YppiEqWs%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYjhiNGQxMjYtMDhmMy00ODMwLWIyYWYtZDdkZTc4OTgwMDNhX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTAwLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1651,
 in_GraphicFileId: "Model3DPlinthLegRectangularScrewH120",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/a3591362-61e4-49d8-a96d-4d20a97f8c20_plinthlegrectangularscrewh120.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=aGfBMEhK2mVdWsX7pXZy2OKBYKPPEBqNBCjfhEdSQFw%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYTM1OTEzNjItNjFlNC00OWQ4LWE5NmQtNGQyMGE5N2Y4YzIwX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTIwLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1652,
 in_GraphicFileId: "Model3DPlinthLegRectangularScrewH150",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/fd10287c-a318-40ad-805c-c0c941f7494e_plinthlegrectangularscrewh150.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=VJF9PDEZKT6D37rStO3jxpRcCbfL9cxPspMn4ZIRGMI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZmQxMDI4N2MtYTMxOC00MGFkLTgwNWMtYzBjOTQxZjc0OTRlX3BsaW50aGxlZ3JlY3Rhbmd1bGFyc2NyZXdoMTUwLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1653,
 in_GraphicFileId: "Model3DPlinthLegTriangularPressH100",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/76c3337b-594f-4b0d-848d-98eedc25caa3_plinthlegtriangularpressh100.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=AiQBiZF0obyHHYueRQNaEiAFHiNtbWvthC24%2F2E8LAc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzZjMzMzN2ItNTk0Zi00YjBkLTg0OGQtOThlZWRjMjVjYWEzX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMDAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1654,
 in_GraphicFileId: "Model3DPlinthLegTriangularPressH120",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/0831dbd8-997c-414f-be90-8f980bf28954_plinthlegtriangularpressh120.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=mo6B35XAK2XgVAztjcftYXNZqO3WHMAD2YuAo8Y28JI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDgzMWRiZDgtOTk3Yy00MTRmLWJlOTAtOGY5ODBiZjI4OTU0X3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxMjAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1655,
 in_GraphicFileId: "Model3DPlinthLegTriangularPressH150",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6afda210-7a0b-4bf8-b0ab-9d811a727f40_plinthlegtriangularpressh150.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=gJ8ilNI9NPiiY8rD8DLHRmDkq41ix1XA2rgZBgnsmpk%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmFmZGEyMTAtN2EwYi00YmY4LWIwYWItOWQ4MTFhNzI3ZjQwX3BsaW50aGxlZ3RyaWFuZ3VsYXJwcmVzc2gxNTAub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1656,
 in_GraphicFileId: "Model3DPlinthLegTriangularPressNoise",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/860fbc4c-71c4-48a1-a0c8-4493ab3e88be_plinthareadesign2007.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=%2FOnQuMeY4zgumU3aQebSuQuI1ML3W6pxd5tZlz0cNPI%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvODYwZmJjNGMtNzFjNC00OGExLWEwYzgtNDQ5M2FiM2U4OGJlX3BsaW50aGFyZWFkZXNpZ24yMDA3Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1657,
 in_GraphicFileId: "Model3DPlinthLegTriangularPressSensitive",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/08423f32-f206-4692-9ac8-7a2fb7a180a7_plinthareadesign2008.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=TjbFvsm9mKADvw7MsBfGDK0CIWDJ0rFBamFLt8jPy58%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMDg0MjNmMzItZjIwNi00NjkyLTlhYzgtN2EyZmI3YTE4MGE3X3BsaW50aGFyZWFkZXNpZ24yMDA4Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1658,
 in_GraphicFileId: "Model3DPushToOpenLong",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/67e12d67-58d7-476a-85e6-47ee760dc8de_pushtoopenlongblack_356_04_754.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=KX0VIUBM3EzCJxHwyDGMpLTOMffwTN%2FZpP4Vw7ImgCc%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNjdlMTJkNjctNThkNy00NzZhLTg1ZTYtNDdlZTc2MGRjOGRlX3B1c2h0b29wZW5sb25nYmxhY2tfMzU2XzA0Xzc1NC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1659,
 in_GraphicFileId: "Model3DPushToOpenShort",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/7824a821-624d-4d03-8139-184ff5133932_pushtoopenshortblack_356_04_353.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=2xh0snHIQ4nQZik05m0tQQ%2BmslFt3oEJuWKQm72I0Ns%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzgyNGE4MjEtNjI0ZC00ZDAzLTgxMzktMTg0ZmY1MTMzOTMyX3B1c2h0b29wZW5zaG9ydGJsYWNrXzM1Nl8wNF8zNTMub2Jq',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1660,
 in_GraphicFileId: "Model3DShelfadjGlassDesign01",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/6df3caf6-e8bd-4666-8471-f8a5bceba548_281_41_907_4.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=YDwgmgBVKPPNseZ2HAkYqnie2oGj6qD8mzCXMGQQHuQ%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNmRmM2NhZjYtZThiZC00NjY2LTg0NzEtZjhhNWJjZWJhNTQ4XzI4MV80MV85MDdfNC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1661,
 in_GraphicFileId: "Model3DShelfadjWoodDesign01",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/f1ecb51d-e104-4408-9789-06b88de99aa7_ft_stift.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=I6DMMf2R7M8mdp%2BWgrfPUJqnYT3k5OtYorvzcAf2X%2BY%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZjFlY2I1MWQtZTEwNC00NDA4LTk3ODktMDZiODhkZTk5YWE3X2Z0X3N0aWZ0Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1662,
 in_GraphicFileId: "Model3DShelfadjWoodDesign02",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/9a336dc2-a7bc-4848-a96c-e6fa56c1e3aa_717_24.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=aoEL9zHB4NggxM7SF8A%2F4jQjCUVygkoRYdfh4tqkOjU%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvOWEzMzZkYzItYTdiYy00ODQ4LWE5NmMtZTZmYTU2YzFlM2FhXzcxN18yNC5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1663,
 in_GraphicFileId: "Model3DShelfadjWoodDesign03",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/359eb2b8-1033-4f1b-83c7-d4c95901e982_717_25.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=Xf6Uay1CXxcrcUFw00oUYxFKiDOeSyO30%2FgSUcCAr9Y%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvMzU5ZWIyYjgtMTAzMy00ZjFiLTgzYzctZDRjOTU5MDFlOTgyXzcxN18yNS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1664,
 in_GraphicFileId: "Model3DWallPlate290.09.910",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/47b9b3aa-e291-41a6-bcac-70ee7060ca76_wall%20plate%20cuttable%20-%20290_09_910.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=LnL%2FWhzlGllj%2FJQgItr%2BiWFeXRbTA3Ks7vNkmddgY68%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDdiOWIzYWEtZTI5MS00MWE2LWJjYWMtNzBlZTcwNjBjYTc2X3dhbGwgcGxhdGUgY3V0dGFibGUgLSAyOTBfMDlfOTEwLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1665,
 in_GraphicFileId: "Model3DWallPlate290.40.989",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/cff6f06b-cad4-49d7-85cf-b3fcb544f87b_wall%20plate%20-%20290_40_989.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=ZgV6PcbbpJLAR7C3FrlvJu6U%2Fxr%2BTmAwCIGLFidQLUE%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvY2ZmNmYwNmItY2FkNC00OWQ3LTg1Y2YtYjNmY2I1NDRmODdiX3dhbGwgcGxhdGUgLSAyOTBfNDBfOTg5Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1666,
 in_GraphicFileId: "Model3DWallPlate290.40.991",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/ddb785eb-1e03-4397-a65a-b550fd93fc91_wall%20plate%20-%20290_40_991.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=edY3qzG8QfkdPWkNuL1oSpms0THBYuG2mwTk9qY%2B24Q%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZGRiNzg1ZWItMWUwMy00Mzk3LWE2NWEtYjU1MGZkOTNmYzkxX3dhbGwgcGxhdGUgLSAyOTBfNDBfOTkxLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1667,
 in_GraphicFileId: "NoGraphic",
 Model3D_Value: undefined,
 Model3D_Id: undefined,
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1668,
 in_GraphicFileId: "Rafix20Housing19mmNickelPlated",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/c3516b91-02dc-4c26-b050-e7f304f8800f_rafixhousing_263_15_705.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=FZgXFjC3bfG0yoD1z%2BYuUd4l3KH2uTDcfn9gOWADH5U%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvYzM1MTZiOTEtMDJkYy00YzI2LWIwNTAtZTdmMzA0Zjg4MDBmX3JhZml4aG91c2luZ18yNjNfMTVfNzA1Lm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1669,
 in_GraphicFileId: "RafixConnectionBolt11x5mm",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/77897df7-fab9-4fed-906d-d253ea5017ca_rafixconnectingbolt_263_20_847_1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=DEWByT%2FQA6zKIgwpc8Hl1zYbheeEeM%2FpzPEuPjGTwoM%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNzc4OTdkZjctZmFiOS00ZmVkLTkwNmQtZDI1M2VhNTAxN2NhX3JhZml4Y29ubmVjdGluZ2JvbHRfMjYzXzIwXzg0N18xLm9iag==',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
,{
 _id: 1670,
 in_GraphicFileId: "SquareBracket",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/e44a7c73-1223-432f-bbe9-3df20e024df2_cornerbrace1.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=QcAhb%2FaouLMpxlfLZxLp2rItNHS2gh%2BbkQlKzvgzWIA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZTQ0YTdjNzMtMTIyMy00MzJmLWJiZTktM2RmMjBlMDI0ZGYyX2Nvcm5lcmJyYWNlMS5vYmo=',
 Model3DParameters: undefined,
 get Model3D(): IThreeDModelData|undefined {
  if (this.Model3D_Value === undefined) {
   return undefined;
  }
  return {
   _3dUrl: this.Model3D_Value!,
   _3dObjectId: this.Model3D_Id!,
   _3dParameters: this.Model3DParameters
  }
 }
}
];
