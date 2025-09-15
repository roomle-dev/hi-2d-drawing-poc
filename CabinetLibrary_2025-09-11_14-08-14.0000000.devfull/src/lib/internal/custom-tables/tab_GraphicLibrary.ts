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

export interface cti_tab_GraphicLibrary {
  readonly in_Model3DGroupName? : string;
}

export interface ctm_tab_GraphicLibrary {
}

export interface cto_tab_GraphicLibrary extends ctm_tab_GraphicLibrary {
  readonly _id : number;
  readonly Model3D_Value?: string;
  readonly Model3D_Id?: string;
  get Model3D(): IThreeDModelData|undefined;
  readonly Model3DParameters?: any;
  readonly GraphicFileId? : string;
  readonly ColorId? : string;
  readonly DimensionX : number;
  readonly DimensionY : number;
  readonly DimensionZ : number;
  readonly ReferencePointXYZ? : string;
  readonly InsertionPointX : number;
  readonly InsertionPointY : number;
  readonly InsertionPointZ : number;
  readonly PartOffsetX : number;
  readonly PartOffsetY : number;
  readonly PartOffsetZ : number;
  readonly Visible? : boolean;
  readonly Identifier? : string;
}

export interface ICT_tab_GraphicLibrary
extends cti_tab_GraphicLibrary, cto_tab_GraphicLibrary {}

export class ct2_tab_GraphicLibrary {

public findExactly(
     in_Model3DGroupName: string|undefined,
): cto_tab_GraphicLibrary | undefined {
  const res = ct_tab_GraphicLibrary.find((p) => 
p.in_Model3DGroupName === in_Model3DGroupName
);
return res;
}

public find(
predicate: (value: cti_tab_GraphicLibrary) => boolean
): cto_tab_GraphicLibrary | undefined {
  for (let index = 0; index < ct_tab_GraphicLibrary.length; index++){
    const element = ct_tab_GraphicLibrary[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_GraphicLibrary :ICT_tab_GraphicLibrary[] = [
{
 _id: 939,
 in_Model3DGroupName: "Model3DDesignLegSlanted001H250",
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
 },
 GraphicFileId: "Model3DDesignLegSlanted001H250",
 ColorId: "StainlessSteel",
 DimensionX: 139,
 DimensionY: 250,
 DimensionZ: 139,
 ReferencePointXYZ: "022",
 InsertionPointX: 123.85,
 InsertionPointY: 0,
 InsertionPointZ: -123.85,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 940,
 in_Model3DGroupName: "Model3DShelfadjWoodDesign01",
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
 },
 GraphicFileId: "Model3DShelfadjWoodDesign01",
 ColorId: undefined,
 DimensionX: 13.3,
 DimensionY: 16,
 DimensionZ: 8.2,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: -3.5,
 InsertionPointZ: 0,
 PartOffsetX: -7.4,
 PartOffsetY: 5,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 941,
 in_Model3DGroupName: "Model3DShelfadjWoodDesign02",
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
 },
 GraphicFileId: "Model3DShelfadjWoodDesign02",
 ColorId: undefined,
 DimensionX: 13.3,
 DimensionY: 11,
 DimensionZ: 9,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: -1,
 InsertionPointZ: 0,
 PartOffsetX: -7.3,
 PartOffsetY: 2.6,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 942,
 in_Model3DGroupName: "Model3DShelfadjWoodDesign03",
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
 },
 GraphicFileId: "Model3DShelfadjWoodDesign03",
 ColorId: undefined,
 DimensionX: 13.3,
 DimensionY: 13,
 DimensionZ: 9,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: -1.5,
 InsertionPointZ: 0,
 PartOffsetX: -7.3,
 PartOffsetY: 2.8,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 943,
 in_Model3DGroupName: "Model3DShelfadjGlassDesign01",
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
 },
 GraphicFileId: "Model3DShelfadjGlassDesign01",
 ColorId: undefined,
 DimensionX: 9,
 DimensionY: 7,
 DimensionZ: 7,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: -7,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 944,
 in_Model3DGroupName: "MinifixConnectionBolt01",
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
 },
 GraphicFileId: "MinifixConnectionBolt01",
 ColorId: undefined,
 DimensionX: 0,
 DimensionY: 0,
 DimensionZ: 0,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 3.5,
 InsertionPointZ: 3.5,
 PartOffsetX: -8,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: false,
 Identifier: "NoIdentifier"
}
,{
 _id: 945,
 in_Model3DGroupName: "MinifixConnectionHousing01",
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
 },
 GraphicFileId: "MinifixConnectionHousing01",
 ColorId: undefined,
 DimensionX: 0,
 DimensionY: 0,
 DimensionZ: 0,
 ReferencePointXYZ: "000",
 InsertionPointX: 7.5,
 InsertionPointY: 7.5,
 InsertionPointZ: 6.5,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 946,
 in_Model3DGroupName: "Dowel",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/48c082df-05d3-49e1-9974-5fb7970c3d1f_267_82_227_details_low.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=iPpeL61CrD1ORmh71aysz9oTifZ1VptAlr2lJZyjhFg%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvNDhjMDgyZGYtMDVkMy00OWUxLTk5NzQtNWZiNzk3MGMzZDFmXzI2N184Ml8yMjdfZGV0YWlsc19sb3cub2Jq',
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
 },
 GraphicFileId: "Dowel",
 ColorId: undefined,
 DimensionX: 0,
 DimensionY: 0,
 DimensionZ: 0,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 4,
 InsertionPointZ: 4,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: false,
 Identifier: "NoIdentifier"
}
,{
 _id: 947,
 in_Model3DGroupName: "MinifixConnectionCover",
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
 },
 GraphicFileId: "MinifixConnectionCover",
 ColorId: undefined,
 DimensionX: 0,
 DimensionY: 0,
 DimensionZ: 0,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 8.5,
 InsertionPointZ: 8.5,
 PartOffsetX: -3,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: false,
 Identifier: "NoIdentifier"
}
,{
 _id: 948,
 in_Model3DGroupName: "Model3DHinge110HalfSpringSS",
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
 },
 GraphicFileId: "Model3DHinge110HalfSpringSS",
 ColorId: undefined,
 DimensionX: 37,
 DimensionY: 66,
 DimensionZ: 74,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 949,
 in_Model3DGroupName: "Model3DHinge110InsetSpringSS",
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
 },
 GraphicFileId: "Model3DHinge110InsetSpringSS",
 ColorId: undefined,
 DimensionX: 39,
 DimensionY: 66,
 DimensionZ: 73.5,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 950,
 in_Model3DGroupName: "Model3DHinge110OverlaySpringSS",
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
 },
 GraphicFileId: "Model3DHinge110OverlaySpringSS",
 ColorId: undefined,
 DimensionX: 37,
 DimensionY: 66,
 DimensionZ: 74,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 951,
 in_Model3DGroupName: "Model3DHinge110SoftClHalfSpringSS",
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
 },
 GraphicFileId: "Model3DHinge110SoftClHalfSpringSS",
 ColorId: undefined,
 DimensionX: 36.8,
 DimensionY: 66,
 DimensionZ: 75.5,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 13.3,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 952,
 in_Model3DGroupName: "Model3DHinge110SoftClInsetSpringSS",
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
 },
 GraphicFileId: "Model3DHinge110SoftClInsetSpringSS",
 ColorId: undefined,
 DimensionX: 39,
 DimensionY: 66,
 DimensionZ: 75.5,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 13.3,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 953,
 in_Model3DGroupName: "Model3DHinge110SoftClOverlaySpringSS",
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
 },
 GraphicFileId: "Model3DHinge110SoftClOverlaySpringSS",
 ColorId: undefined,
 DimensionX: 36.8,
 DimensionY: 66,
 DimensionZ: 75.5,
 ReferencePointXYZ: "222",
 InsertionPointX: -19.5,
 InsertionPointY: -33,
 InsertionPointZ: 0,
 PartOffsetX: 0.2,
 PartOffsetY: 0,
 PartOffsetZ: 13.3,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 954,
 in_Model3DGroupName: "Model3DHinge155SoftClHalfSpringSS",
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
 },
 GraphicFileId: "Model3DHinge155SoftClHalfSpringSS",
 ColorId: undefined,
 DimensionX: 82,
 DimensionY: 66,
 DimensionZ: 75,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 13.5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 955,
 in_Model3DGroupName: "Model3DHinge155SoftClOverlaySpringSS",
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
 },
 GraphicFileId: "Model3DHinge155SoftClOverlaySpringSS",
 ColorId: undefined,
 DimensionX: 82,
 DimensionY: 66,
 DimensionZ: 75.1,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 13.5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 956,
 in_Model3DGroupName: "Model3DHinge165HalfSpringSS",
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
 },
 GraphicFileId: "Model3DHinge165HalfSpringSS",
 ColorId: undefined,
 DimensionX: 71.7,
 DimensionY: 66,
 DimensionZ: 72.8,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 957,
 in_Model3DGroupName: "Model3DHinge165InsetSpringSS",
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
 },
 GraphicFileId: "Model3DHinge165InsetSpringSS",
 ColorId: undefined,
 DimensionX: 73.7,
 DimensionY: 66,
 DimensionZ: 72.8,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 958,
 in_Model3DGroupName: "Model3DHinge165OverlaySpringSS",
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
 },
 GraphicFileId: "Model3DHinge165OverlaySpringSS",
 ColorId: undefined,
 DimensionX: 71.7,
 DimensionY: 66,
 DimensionZ: 73.2,
 ReferencePointXYZ: "012",
 InsertionPointX: 17.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 959,
 in_Model3DGroupName: "Model3DMpCruciformA0SS",
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
 },
 GraphicFileId: "Model3DMpCruciformA0SS",
 ColorId: undefined,
 DimensionX: 8,
 DimensionY: 50,
 DimensionZ: 41,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -16.5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 960,
 in_Model3DGroupName: "Model3DMpCruciformA3SS",
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
 },
 GraphicFileId: "Model3DMpCruciformA3SS",
 ColorId: undefined,
 DimensionX: 11,
 DimensionY: 50,
 DimensionZ: 41,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -16.5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 961,
 in_Model3DGroupName: "Model3DMpCruciformA6SS",
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
 },
 GraphicFileId: "Model3DMpCruciformA6SS",
 ColorId: undefined,
 DimensionX: 14,
 DimensionY: 50,
 DimensionZ: 41,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -16.5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 962,
 in_Model3DGroupName: "Model3DMpCruciformSM0SS",
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
 },
 GraphicFileId: "Model3DMpCruciformSM0SS",
 ColorId: undefined,
 DimensionX: 13.3,
 DimensionY: 48,
 DimensionZ: 64,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -9.6,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 963,
 in_Model3DGroupName: "Model3DMpCruciformSM3SS",
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
 },
 GraphicFileId: "Model3DMpCruciformSM3SS",
 ColorId: undefined,
 DimensionX: 16.3,
 DimensionY: 48,
 DimensionZ: 64,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -10,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 964,
 in_Model3DGroupName: "Model3DMpCruciformSM6SS",
 Model3D_Value: 'https://tecconfig.homag.cloud/cdn/5ebb30e7-78fb-4155-be66-20fb7a8cacbe/library/cabinetlibrary/images/d32c953e-600d-4ad3-a9ba-1a4ed105dc8a_mpcruciformsm6ss%20-%20329_71_506.obj?sv=2023-11-03&st=2025-08-30T00%3A00%3A00Z&se=2025-10-02T00%3A00%3A00Z&sr=b&sp=r&sig=zBs0Jq3lCq0lllEjmP3Y2Li4wjcJGdZbvdHS%2FgrC%2FWA%3D',
 Model3D_Id: 'bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDMyYzk1M2UtNjAwZC00YWQzLWE5YmEtMWE0ZWQxMDVkYzhhX21wY3J1Y2lmb3Jtc202c3MgLSAzMjlfNzFfNTA2Lm9iag==',
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
 },
 GraphicFileId: "Model3DMpCruciformSM6SS",
 ColorId: undefined,
 DimensionX: 19.3,
 DimensionY: 48,
 DimensionZ: 64,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -9.6,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 965,
 in_Model3DGroupName: "Model3DMpHorizontalSM0SS",
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
 },
 GraphicFileId: "Model3DMpHorizontalSM0SS",
 ColorId: undefined,
 DimensionX: 13.1,
 DimensionY: 19,
 DimensionZ: 64,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -9.6,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 966,
 in_Model3DGroupName: "Model3DMpHorizontalSM3SS",
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
 },
 GraphicFileId: "Model3DMpHorizontalSM3SS",
 ColorId: undefined,
 DimensionX: 16.1,
 DimensionY: 19,
 DimensionZ: 64,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -9.6,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 967,
 in_Model3DGroupName: "Model3DMpHorizontalSM6SS",
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
 },
 GraphicFileId: "Model3DMpHorizontalSM6SS",
 ColorId: undefined,
 DimensionX: 19.1,
 DimensionY: 19,
 DimensionZ: 64,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -9.6,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 968,
 in_Model3DGroupName: "Model3DHingeBlindCornerInset110SoftClNP",
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
 },
 GraphicFileId: "Model3DHingeBlindCornerInset110SoftClNP",
 ColorId: undefined,
 DimensionX: 101.3,
 DimensionY: 66,
 DimensionZ: 33.8,
 ReferencePointXYZ: "012",
 InsertionPointX: 82,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: -64.5,
 PartOffsetY: 0,
 PartOffsetZ: 13.3,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 969,
 in_Model3DGroupName: "Legra_Box_Inox_F_400_Left",
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
 },
 GraphicFileId: "Legra_Box_F_400_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 970,
 in_Model3DGroupName: "Legra_Box_Inox_F_400_Right",
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
 },
 GraphicFileId: "Legra_Box_F_400_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 971,
 in_Model3DGroupName: "Legra_Box_Inox_F_450_Left",
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
 },
 GraphicFileId: "Legra_Box_F_450_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 972,
 in_Model3DGroupName: "Legra_Box_Inox_F_450_Right",
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
 },
 GraphicFileId: "Legra_Box_F_450_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 973,
 in_Model3DGroupName: "Legra_Box_Inox_F_500_Left",
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
 },
 GraphicFileId: "Legra_Box_F_500_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 974,
 in_Model3DGroupName: "Legra_Box_Inox_F_500_Right",
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
 },
 GraphicFileId: "Legra_Box_F_500_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 975,
 in_Model3DGroupName: "Legra_Box_Inox_F_550_Left",
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
 },
 GraphicFileId: "Legra_Box_F_550_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 976,
 in_Model3DGroupName: "Legra_Box_Inox_F_550_Right",
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
 },
 GraphicFileId: "Legra_Box_F_550_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 977,
 in_Model3DGroupName: "Legra_Box_Inox_F_600_Left",
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
 },
 GraphicFileId: "Legra_Box_F_600_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 978,
 in_Model3DGroupName: "Legra_Box_Inox_F_600_Right",
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
 },
 GraphicFileId: "Legra_Box_F_600_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 979,
 in_Model3DGroupName: "Legra_Box_Inox_F_650_Left",
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
 },
 GraphicFileId: "Legra_Box_F_650_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 980,
 in_Model3DGroupName: "Legra_Box_Inox_F_650_Right",
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
 },
 GraphicFileId: "Legra_Box_F_650_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 981,
 in_Model3DGroupName: "Legra_Box_Inox_C_270_Left",
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
 },
 GraphicFileId: "Legra_Box_C_270_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 982,
 in_Model3DGroupName: "Legra_Box_Inox_C_270_Right",
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
 },
 GraphicFileId: "Legra_Box_C_270_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 983,
 in_Model3DGroupName: "Legra_Box_Inox_C_300_Left",
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
 },
 GraphicFileId: "Legra_Box_C_300_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 984,
 in_Model3DGroupName: "Legra_Box_Inox_C_300_Right",
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
 },
 GraphicFileId: "Legra_Box_C_300_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 985,
 in_Model3DGroupName: "Legra_Box_Inox_C_350_Left",
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
 },
 GraphicFileId: "Legra_Box_C_350_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 986,
 in_Model3DGroupName: "Legra_Box_Inox_C_350_Right",
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
 },
 GraphicFileId: "Legra_Box_C_350_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 987,
 in_Model3DGroupName: "Legra_Box_Inox_C_400_Left",
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
 },
 GraphicFileId: "Legra_Box_C_400_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 988,
 in_Model3DGroupName: "Legra_Box_Inox_C_400_Right",
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
 },
 GraphicFileId: "Legra_Box_C_400_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 989,
 in_Model3DGroupName: "Legra_Box_Inox_C_450_Left",
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
 },
 GraphicFileId: "Legra_Box_C_450_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 990,
 in_Model3DGroupName: "Legra_Box_Inox_C_450_Right",
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
 },
 GraphicFileId: "Legra_Box_C_450_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 991,
 in_Model3DGroupName: "Legra_Box_Inox_C_500_Left",
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
 },
 GraphicFileId: "Legra_Box_C_500_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 992,
 in_Model3DGroupName: "Legra_Box_Inox_C_500_Right",
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
 },
 GraphicFileId: "Legra_Box_C_500_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 993,
 in_Model3DGroupName: "Legra_Box_Inox_C_550_Left",
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
 },
 GraphicFileId: "Legra_Box_C_550_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 994,
 in_Model3DGroupName: "Legra_Box_Inox_C_550_Right",
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
 },
 GraphicFileId: "Legra_Box_C_550_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 995,
 in_Model3DGroupName: "Legra_Box_Inox_C_600_Left",
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
 },
 GraphicFileId: "Legra_Box_C_600_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 996,
 in_Model3DGroupName: "Legra_Box_Inox_C_600_Right",
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
 },
 GraphicFileId: "Legra_Box_C_600_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 997,
 in_Model3DGroupName: "Legra_Box_Inox_C_650_Left",
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
 },
 GraphicFileId: "Legra_Box_C_650_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 998,
 in_Model3DGroupName: "Legra_Box_Inox_C_650_Right",
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
 },
 GraphicFileId: "Legra_Box_C_650_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 999,
 in_Model3DGroupName: "Legra_Box_Inox_K_300_Left",
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
 },
 GraphicFileId: "Legra_Box_K_300_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1000,
 in_Model3DGroupName: "Legra_Box_Inox_K_300_Right",
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
 },
 GraphicFileId: "Legra_Box_K_300_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1001,
 in_Model3DGroupName: "Legra_Box_Inox_K_350_Left",
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
 },
 GraphicFileId: "Legra_Box_K_350_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1002,
 in_Model3DGroupName: "Legra_Box_Inox_K_350_Right",
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
 },
 GraphicFileId: "Legra_Box_K_350_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1003,
 in_Model3DGroupName: "Legra_Box_Inox_K_400_Left",
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
 },
 GraphicFileId: "Legra_Box_K_400_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1004,
 in_Model3DGroupName: "Legra_Box_Inox_K_400_Right",
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
 },
 GraphicFileId: "Legra_Box_K_400_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1005,
 in_Model3DGroupName: "Legra_Box_Inox_K_450_Left",
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
 },
 GraphicFileId: "Legra_Box_K_450_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1006,
 in_Model3DGroupName: "Legra_Box_Inox_K_450_Right",
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
 },
 GraphicFileId: "Legra_Box_K_450_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1007,
 in_Model3DGroupName: "Legra_Box_Inox_K_500_Left",
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
 },
 GraphicFileId: "Legra_Box_K_500_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1008,
 in_Model3DGroupName: "Legra_Box_Inox_K_500_Right",
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
 },
 GraphicFileId: "Legra_Box_K_500_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1009,
 in_Model3DGroupName: "Legra_Box_Inox_K_550_Left",
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
 },
 GraphicFileId: "Legra_Box_K_550_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1010,
 in_Model3DGroupName: "Legra_Box_Inox_K_550_Right",
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
 },
 GraphicFileId: "Legra_Box_K_550_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1011,
 in_Model3DGroupName: "Legra_Box_Inox_K_600_Left",
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
 },
 GraphicFileId: "Legra_Box_K_600_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1012,
 in_Model3DGroupName: "Legra_Box_Inox_K_600_Right",
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
 },
 GraphicFileId: "Legra_Box_K_600_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1013,
 in_Model3DGroupName: "Legra_Box_Inox_M_270_Left",
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
 },
 GraphicFileId: "Legra_Box_M_270_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1014,
 in_Model3DGroupName: "Legra_Box_Inox_M_270_Right",
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
 },
 GraphicFileId: "Legra_Box_M_270_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1015,
 in_Model3DGroupName: "Legra_Box_Inox_M_300_Left",
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
 },
 GraphicFileId: "Legra_Box_M_300_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1016,
 in_Model3DGroupName: "Legra_Box_Inox_M_300_Right",
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
 },
 GraphicFileId: "Legra_Box_M_300_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1017,
 in_Model3DGroupName: "Legra_Box_Inox_M_350_Left",
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
 },
 GraphicFileId: "Legra_Box_M_350_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1018,
 in_Model3DGroupName: "Legra_Box_Inox_M_350_Right",
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
 },
 GraphicFileId: "Legra_Box_M_350_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1019,
 in_Model3DGroupName: "Legra_Box_Inox_M_400_Left",
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
 },
 GraphicFileId: "Legra_Box_M_400_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1020,
 in_Model3DGroupName: "Legra_Box_Inox_M_400_Right",
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
 },
 GraphicFileId: "Legra_Box_M_400_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1021,
 in_Model3DGroupName: "Legra_Box_Inox_M_450_Left",
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
 },
 GraphicFileId: "Legra_Box_M_450_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1022,
 in_Model3DGroupName: "Legra_Box_Inox_M_450_Right",
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
 },
 GraphicFileId: "Legra_Box_M_450_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1023,
 in_Model3DGroupName: "Legra_Box_Inox_M_500_Left",
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
 },
 GraphicFileId: "Legra_Box_M_500_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1024,
 in_Model3DGroupName: "Legra_Box_Inox_M_500_Right",
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
 },
 GraphicFileId: "Legra_Box_M_500_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1025,
 in_Model3DGroupName: "Legra_Box_Inox_M_550_Left",
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
 },
 GraphicFileId: "Legra_Box_M_550_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1026,
 in_Model3DGroupName: "Legra_Box_Inox_M_550_Right",
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
 },
 GraphicFileId: "Legra_Box_M_550_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1027,
 in_Model3DGroupName: "Legra_Box_Inox_M_600_Left",
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
 },
 GraphicFileId: "Legra_Box_M_600_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1028,
 in_Model3DGroupName: "Legra_Box_Inox_M_600_Right",
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
 },
 GraphicFileId: "Legra_Box_M_600_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1029,
 in_Model3DGroupName: "Legra_Box_Inox_M_650_Left",
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
 },
 GraphicFileId: "Legra_Box_M_650_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1030,
 in_Model3DGroupName: "Legra_Box_Inox_M_650_Right",
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
 },
 GraphicFileId: "Legra_Box_M_650_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1031,
 in_Model3DGroupName: "Legra_Box_Inox_N_400_Left",
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
 },
 GraphicFileId: "Legra_Box_N_400_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1032,
 in_Model3DGroupName: "Legra_Box_Inox_N_400_Right",
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
 },
 GraphicFileId: "Legra_Box_N_400_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1033,
 in_Model3DGroupName: "Legra_Box_Inox_N_450_Left",
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
 },
 GraphicFileId: "Legra_Box_N_450_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1034,
 in_Model3DGroupName: "Legra_Box_Inox_N_450_Right",
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
 },
 GraphicFileId: "Legra_Box_N_450_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1035,
 in_Model3DGroupName: "Legra_Box_Inox_N_500_Left",
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
 },
 GraphicFileId: "Legra_Box_N_500_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1036,
 in_Model3DGroupName: "Legra_Box_Inox_N_500_Right",
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
 },
 GraphicFileId: "Legra_Box_N_500_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1037,
 in_Model3DGroupName: "Legra_Box_Inox_N_550_Left",
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
 },
 GraphicFileId: "Legra_Box_N_550_Left",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1038,
 in_Model3DGroupName: "Legra_Box_Inox_N_550_Right",
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
 },
 GraphicFileId: "Legra_Box_N_550_Right",
 ColorId: "LegraInox",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1039,
 in_Model3DGroupName: "Legra_Slide_270_Left",
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
 },
 GraphicFileId: "Legra_Slide_270_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 247,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1040,
 in_Model3DGroupName: "Legra_Slide_270_Right",
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
 },
 GraphicFileId: "Legra_Slide_270_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 247,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1041,
 in_Model3DGroupName: "Legra_Slide_300_350_Left",
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
 },
 GraphicFileId: "Legra_Slide_300_350_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 276,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1042,
 in_Model3DGroupName: "Legra_Slide_300_350_Right",
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
 },
 GraphicFileId: "Legra_Slide_300_350_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 276,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1043,
 in_Model3DGroupName: "Legra_Slide_400_450_500_Left",
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
 },
 GraphicFileId: "Legra_Slide_400_450_500_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 309,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1044,
 in_Model3DGroupName: "Legra_Slide_400_450_500_Right",
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
 },
 GraphicFileId: "Legra_Slide_400_450_500_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 309,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1045,
 in_Model3DGroupName: "Legra_Slide_550_600_Left",
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
 },
 GraphicFileId: "Legra_Slide_550_600_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 401,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1046,
 in_Model3DGroupName: "Legra_Slide_550_600_Right",
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
 },
 GraphicFileId: "Legra_Slide_550_600_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 401,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1047,
 in_Model3DGroupName: "Model3DCoverCap290.40.701",
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
 },
 GraphicFileId: "Model3DCoverCap290.40.701",
 ColorId: undefined,
 DimensionX: 25,
 DimensionY: 84,
 DimensionZ: 61.8,
 ReferencePointXYZ: "220",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "HangerCoverCapRight"
}
,{
 _id: 1048,
 in_Model3DGroupName: "Model3DCoverCap290.40.702",
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
 },
 GraphicFileId: "Model3DCoverCap290.40.702",
 ColorId: undefined,
 DimensionX: 25,
 DimensionY: 84,
 DimensionZ: 61.8,
 ReferencePointXYZ: "020",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "HangerCoverCapLeft"
}
,{
 _id: 1049,
 in_Model3DGroupName: "Model3DHanger290.02.702",
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
 },
 GraphicFileId: "Model3DHanger290.02.702",
 ColorId: undefined,
 DimensionX: 27,
 DimensionY: 46,
 DimensionZ: 79.2,
 ReferencePointXYZ: "020",
 InsertionPointX: 0,
 InsertionPointY: -39,
 InsertionPointZ: 30.7,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -20,
 Visible: true,
 Identifier: "HangerLeftVisible"
}
,{
 _id: 1050,
 in_Model3DGroupName: "Model3DHanger290.02.703",
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
 },
 GraphicFileId: "Model3DHanger290.02.703",
 ColorId: undefined,
 DimensionX: 27,
 DimensionY: 46,
 DimensionZ: 79.2,
 ReferencePointXYZ: "220",
 InsertionPointX: 0,
 InsertionPointY: -39,
 InsertionPointZ: 30.7,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -20,
 Visible: true,
 Identifier: "HangerRightVisible"
}
,{
 _id: 1051,
 in_Model3DGroupName: "Model3DHanger290.03.937",
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
 },
 GraphicFileId: "Model3DHanger290.03.937",
 ColorId: undefined,
 DimensionX: 46.7,
 DimensionY: 146,
 DimensionZ: 21.2,
 ReferencePointXYZ: "220",
 InsertionPointX: 0,
 InsertionPointY: -56,
 InsertionPointZ: 16.2,
 PartOffsetX: 12,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "HangerRightInvisible"
}
,{
 _id: 1052,
 in_Model3DGroupName: "Model3DHanger290.03.938",
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
 },
 GraphicFileId: "Model3DHanger290.03.938",
 ColorId: undefined,
 DimensionX: 46.7,
 DimensionY: 146,
 DimensionZ: 21.2,
 ReferencePointXYZ: "020",
 InsertionPointX: 0,
 InsertionPointY: -56,
 InsertionPointZ: 16.2,
 PartOffsetX: -12,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "HangerLeftInvisible"
}
,{
 _id: 1053,
 in_Model3DGroupName: "Model3DHanger290.40.901",
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
 },
 GraphicFileId: "Model3DHanger290.40.901",
 ColorId: undefined,
 DimensionX: 19.8,
 DimensionY: 80,
 DimensionZ: 75.6,
 ReferencePointXYZ: "220",
 InsertionPointX: 0,
 InsertionPointY: -8,
 InsertionPointZ: 35.6,
 PartOffsetX: 10,
 PartOffsetY: 0,
 PartOffsetZ: -15.6,
 Visible: true,
 Identifier: "HangerRightVisible"
}
,{
 _id: 1054,
 in_Model3DGroupName: "Model3DHanger290.40.902",
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
 },
 GraphicFileId: "Model3DHanger290.40.902",
 ColorId: undefined,
 DimensionX: 19.8,
 DimensionY: 80,
 DimensionZ: 75.6,
 ReferencePointXYZ: "020",
 InsertionPointX: 0,
 InsertionPointY: -8,
 InsertionPointZ: 35.6,
 PartOffsetX: -10,
 PartOffsetY: 0,
 PartOffsetZ: -15.6,
 Visible: true,
 Identifier: "HangerLeftVisible"
}
,{
 _id: 1055,
 in_Model3DGroupName: "Model3DHanger290.40.980",
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
 },
 GraphicFileId: "Model3DHanger290.40.980",
 ColorId: undefined,
 DimensionX: 29.4,
 DimensionY: 48,
 DimensionZ: 74.4,
 ReferencePointXYZ: "220",
 InsertionPointX: 0,
 InsertionPointY: -42,
 InsertionPointZ: 34.4,
 PartOffsetX: 10.5,
 PartOffsetY: 0,
 PartOffsetZ: -14.3,
 Visible: true,
 Identifier: "HangerRightVisible"
}
,{
 _id: 1056,
 in_Model3DGroupName: "Model3DHanger290.40.981",
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
 },
 GraphicFileId: "Model3DHanger290.40.981",
 ColorId: undefined,
 DimensionX: 29.4,
 DimensionY: 48,
 DimensionZ: 74.4,
 ReferencePointXYZ: "020",
 InsertionPointX: 0,
 InsertionPointY: -42,
 InsertionPointZ: 34.4,
 PartOffsetX: -10.5,
 PartOffsetY: 0,
 PartOffsetZ: -14.3,
 Visible: true,
 Identifier: "HangerLeftVisible"
}
,{
 _id: 1057,
 in_Model3DGroupName: "Model3DWallPlate290.09.910",
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
 },
 GraphicFileId: "Model3DWallPlate290.09.910",
 ColorId: undefined,
 DimensionX: 1250,
 DimensionY: 28.3,
 DimensionZ: 6.3,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "WallPlate"
}
,{
 _id: 1058,
 in_Model3DGroupName: "Model3DWallPlate290.40.989",
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
 },
 GraphicFileId: "Model3DWallPlate290.40.989",
 ColorId: undefined,
 DimensionX: 47,
 DimensionY: 28,
 DimensionZ: 6,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "WallPlate"
}
,{
 _id: 1059,
 in_Model3DGroupName: "Model3DWallPlate290.40.991",
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
 },
 GraphicFileId: "Model3DWallPlate290.40.991",
 ColorId: undefined,
 DimensionX: 120,
 DimensionY: 120,
 DimensionZ: 8,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "WallPlate"
}
,{
 _id: 1060,
 in_Model3DGroupName: "Model3DPlinthLegTriangularPressSensitive",
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
 },
 GraphicFileId: "Model3DPlinthLegTriangularPressSensitive",
 ColorId: "Black",
 DimensionX: 95,
 DimensionY: 80,
 DimensionZ: 95,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 11,
 PartOffsetZ: 5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1061,
 in_Model3DGroupName: "Model3DPlinthLegTriangularPressNoise",
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
 },
 GraphicFileId: "Model3DPlinthLegTriangularPressNoise",
 ColorId: "Black",
 DimensionX: 95,
 DimensionY: 80,
 DimensionZ: 95,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 11,
 PartOffsetZ: 5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1062,
 in_Model3DGroupName: "Model3D_Legra_FrontBotCon",
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
 },
 GraphicFileId: "Model3D_Legra_FrontBotCon",
 ColorId: "Black",
 DimensionX: 36.4,
 DimensionY: 13,
 DimensionZ: 48.2,
 ReferencePointXYZ: "122",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 6,
 Visible: true,
 Identifier: "DrawerBox"
}
,{
 _id: 1063,
 in_Model3DGroupName: "Model3DHanger290.02.710",
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
 },
 GraphicFileId: "Model3DHanger290.02.710",
 ColorId: undefined,
 DimensionX: 22.3,
 DimensionY: 48.2,
 DimensionZ: 83.7,
 ReferencePointXYZ: "220",
 InsertionPointX: 0,
 InsertionPointY: -40,
 InsertionPointZ: 31.85,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -21,
 Visible: true,
 Identifier: "HangerLeftVisible"
}
,{
 _id: 1064,
 in_Model3DGroupName: "Model3DHanger290.02.711",
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
 },
 GraphicFileId: "Model3DHanger290.02.711",
 ColorId: undefined,
 DimensionX: 22.3,
 DimensionY: 48.2,
 DimensionZ: 83.7,
 ReferencePointXYZ: "020",
 InsertionPointX: 0,
 InsertionPointY: -40,
 InsertionPointZ: 31.85,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -21,
 Visible: true,
 Identifier: "HangerRightVisible"
}
,{
 _id: 1065,
 in_Model3DGroupName: "Legra_Slide_450_H_Left",
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
 },
 GraphicFileId: "Legra_Slide_450_H_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 309,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1066,
 in_Model3DGroupName: "Legra_Slide_450_H_Right",
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
 },
 GraphicFileId: "Legra_Slide_450_H_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 309,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1067,
 in_Model3DGroupName: "Legra_Slide_500_550_600_H_Left",
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
 },
 GraphicFileId: "Legra_Slide_500_550_600_H_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 401,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1068,
 in_Model3DGroupName: "Legra_Slide_500_550_600_H_Right",
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
 },
 GraphicFileId: "Legra_Slide_500_550_600_H_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 401,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1069,
 in_Model3DGroupName: "Legra_Slide_650_H_Left",
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
 },
 GraphicFileId: "Legra_Slide_650_H_Left",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 529,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideLeft"
}
,{
 _id: 1070,
 in_Model3DGroupName: "Legra_Slide_650_H_Right",
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
 },
 GraphicFileId: "Legra_Slide_650_H_Right",
 ColorId: "Steel",
 DimensionX: 31,
 DimensionY: 47,
 DimensionZ: 529,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "SlideRight"
}
,{
 _id: 1071,
 in_Model3DGroupName: "Graphic_Legra_Syncro",
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
 },
 GraphicFileId: "Graphic_Legra_Syncro",
 ColorId: "Black",
 DimensionX: 0,
 DimensionY: 34,
 DimensionZ: 0,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 1,
 InsertionPointZ: 0,
 PartOffsetX: -5,
 PartOffsetY: 0,
 PartOffsetZ: 12,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1072,
 in_Model3DGroupName: "DowelMiddelSide",
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
 },
 GraphicFileId: "Dowel",
 ColorId: undefined,
 DimensionX: 0,
 DimensionY: 0,
 DimensionZ: 0,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 2.5,
 InsertionPointZ: 2.5,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: false,
 Identifier: "NoIdentifier"
}
,{
 _id: 1073,
 in_Model3DGroupName: "Model3DGlueDuststrip",
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
 },
 GraphicFileId: "Model3DGlueDuststrip",
 ColorId: undefined,
 DimensionX: 21,
 DimensionY: 100,
 DimensionZ: 3,
 ReferencePointXYZ: "012",
 InsertionPointX: -13.5,
 InsertionPointY: 0,
 InsertionPointZ: -1.5,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1074,
 in_Model3DGroupName: "Model3DPushToOpenShort",
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
 },
 GraphicFileId: "Model3DPushToOpenShort",
 ColorId: undefined,
 DimensionX: 18,
 DimensionY: 15,
 DimensionZ: 53,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 3.1,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1075,
 in_Model3DGroupName: "Model3DPushToOpenLong",
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
 },
 GraphicFileId: "Model3DPushToOpenLong",
 ColorId: undefined,
 DimensionX: 18,
 DimensionY: 15,
 DimensionZ: 79,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 3.1,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1076,
 in_Model3DGroupName: "Model3DAdapterHousingShort",
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
 },
 GraphicFileId: "Model3DAdapterHousingShort",
 ColorId: undefined,
 DimensionX: 18,
 DimensionY: 15.4,
 DimensionZ: 54.6,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 7.7,
 PartOffsetZ: 1,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1077,
 in_Model3DGroupName: "Model3DAdapterHousingLong",
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
 },
 GraphicFileId: "Model3DAdapterHousingLong",
 ColorId: undefined,
 DimensionX: 18,
 DimensionY: 15.4,
 DimensionZ: 80.6,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 7.7,
 PartOffsetZ: 1,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1078,
 in_Model3DGroupName: "NoGraphic",
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
 },
 GraphicFileId: "NoGraphic",
 ColorId: undefined,
 DimensionX: 0,
 DimensionY: 0,
 DimensionZ: 0,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: false,
 Identifier: "NoIdentifier"
}
,{
 _id: 1079,
 in_Model3DGroupName: "Rafix20Housing19mmNickelPlated",
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
 },
 GraphicFileId: "Rafix20Housing19mmNickelPlated",
 ColorId: undefined,
 DimensionX: 24,
 DimensionY: 15.4,
 DimensionZ: 22,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1080,
 in_Model3DGroupName: "RafixConnectionBolt11x5mm",
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
 },
 GraphicFileId: "RafixConnectionBolt11x5mm",
 ColorId: undefined,
 DimensionX: 7,
 DimensionY: 7,
 DimensionZ: 19.8,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1081,
 in_Model3DGroupName: "Model3DHingeFlipLiftDF",
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
 },
 GraphicFileId: "Model3DHingeFlipLiftDF",
 ColorId: undefined,
 DimensionX: 27.8,
 DimensionY: 38,
 DimensionZ: 43.6,
 ReferencePointXYZ: "012",
 InsertionPointX: 10.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 14,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1082,
 in_Model3DGroupName: "Model3D_Aventos_HF_PSL",
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
 },
 GraphicFileId: "Model3D_Aventos_HF_PSL",
 ColorId: undefined,
 DimensionX: 30.6,
 DimensionY: 105,
 DimensionZ: 260,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 26.8,
 InsertionPointZ: 99.35,
 PartOffsetX: 4.5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseLeft"
}
,{
 _id: 1083,
 in_Model3DGroupName: "Model3D_Aventos_HF_PSR",
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
 },
 GraphicFileId: "Model3D_Aventos_HF_PSR",
 ColorId: undefined,
 DimensionX: 30.6,
 DimensionY: 105,
 DimensionZ: 260,
 ReferencePointXYZ: "222",
 InsertionPointX: 0,
 InsertionPointY: 26.8,
 InsertionPointZ: 99.35,
 PartOffsetX: 4.5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseRight"
}
,{
 _id: 1084,
 in_Model3DGroupName: "Model3D_Aventos_HF_Mech",
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
  "attachmentId": "bGlicmFyeS9jYWJpbmV0bGlicmFyeS9pbWFnZXMvZDVjZTE1NjUtYjI4Yy00MWQyLThlZGEtYjcxNDVkNzMxODg2X2RhdGFfMy5iaW4="
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
 },
 GraphicFileId: "Model3D_Aventos_HF_Mech",
 ColorId: undefined,
 DimensionX: 19,
 DimensionY: 360,
 DimensionZ: 43,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1085,
 in_Model3DGroupName: "Model3D_Aventos_HF_Connector",
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
 },
 GraphicFileId: "Model3D_Aventos_HF_Connector",
 ColorId: undefined,
 DimensionX: 18.6,
 DimensionY: 43.7,
 DimensionZ: 8.5,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: -6.5,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11.5,
 Visible: true,
 Identifier: "FrontConnector"
}
,{
 _id: 1086,
 in_Model3DGroupName: "Model3D_Aventos_HK_PSL",
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
 },
 GraphicFileId: "Model3D_Aventos_HK_PSL",
 ColorId: undefined,
 DimensionX: 30.2,
 DimensionY: 162,
 DimensionZ: 185,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 32.5,
 InsertionPointZ: 36.3,
 PartOffsetX: 5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseLeft"
}
,{
 _id: 1087,
 in_Model3DGroupName: "Model3D_Aventos_HK_PSR",
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
 },
 GraphicFileId: "Model3D_Aventos_HK_PSR",
 ColorId: undefined,
 DimensionX: 30.2,
 DimensionY: 162,
 DimensionZ: 185,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 32.5,
 InsertionPointZ: 36.3,
 PartOffsetX: 5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseRight"
}
,{
 _id: 1088,
 in_Model3DGroupName: "Model3D_Aventos_HK_Connector",
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
 },
 GraphicFileId: "Model3D_Aventos_HK_Connector",
 ColorId: undefined,
 DimensionX: 16.5,
 DimensionY: 108,
 DimensionZ: 13.5,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: -6,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "FrontConnector"
}
,{
 _id: 1089,
 in_Model3DGroupName: "Model3DHinge120OverlayNoSpringSSForFHF",
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
 },
 GraphicFileId: "Model3DHinge120OverlayNoSpringSSForFHF",
 ColorId: undefined,
 DimensionX: 38,
 DimensionY: 57,
 DimensionZ: 80.5,
 ReferencePointXYZ: "012",
 InsertionPointX: 18.5,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 1,
 PartOffsetY: 0,
 PartOffsetZ: 12.6,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1090,
 in_Model3DGroupName: "Model3D_Aventos_HL_PSL",
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
 },
 GraphicFileId: "Model3D_Aventos_HL_PSL",
 ColorId: undefined,
 DimensionX: 30.7,
 DimensionY: 137,
 DimensionZ: 260,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 58.85,
 InsertionPointZ: 99.5,
 PartOffsetX: 4.5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseLeft"
}
,{
 _id: 1091,
 in_Model3DGroupName: "Model3D_Aventos_HL_PSR",
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
 },
 GraphicFileId: "Model3D_Aventos_HL_PSR",
 ColorId: undefined,
 DimensionX: 30.7,
 DimensionY: 137,
 DimensionZ: 260,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 58.85,
 InsertionPointZ: 99.5,
 PartOffsetX: 4.5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseRight"
}
,{
 _id: 1092,
 in_Model3DGroupName: "Model3D_Aventos_HL_Mech1",
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
 },
 GraphicFileId: "Model3D_Aventos_HL_Mech1",
 ColorId: undefined,
 DimensionX: 18.3,
 DimensionY: 207,
 DimensionZ: 55.7,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1093,
 in_Model3DGroupName: "Model3D_Aventos_HL_Mech2",
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
 },
 GraphicFileId: "Model3D_Aventos_HL_Mech2",
 ColorId: undefined,
 DimensionX: 18.3,
 DimensionY: 247,
 DimensionZ: 55.7,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1094,
 in_Model3DGroupName: "Model3D_Aventos_HL_Mech3",
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
 },
 GraphicFileId: "Model3D_Aventos_HL_Mech3",
 ColorId: undefined,
 DimensionX: 18.3,
 DimensionY: 297,
 DimensionZ: 55.7,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1095,
 in_Model3DGroupName: "Model3D_Aventos_HL_Mech4",
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
 },
 GraphicFileId: "Model3D_Aventos_HL_Mech4",
 ColorId: undefined,
 DimensionX: 18.3,
 DimensionY: 351,
 DimensionZ: 55.7,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1096,
 in_Model3DGroupName: "Model3D_Aventos_HS_PSL",
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
 },
 GraphicFileId: "Model3D_Aventos_HS_PSL",
 ColorId: undefined,
 DimensionX: 30.6,
 DimensionY: 288,
 DimensionZ: 260,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 53,
 InsertionPointZ: 99.5,
 PartOffsetX: 4.5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseLeft"
}
,{
 _id: 1097,
 in_Model3DGroupName: "Model3D_Aventos_HS_PSR",
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
 },
 GraphicFileId: "Model3D_Aventos_HS_PSR",
 ColorId: undefined,
 DimensionX: 30.6,
 DimensionY: 288,
 DimensionZ: 260,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 53,
 InsertionPointZ: 99.5,
 PartOffsetX: 4.5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseRight"
}
,{
 _id: 1098,
 in_Model3DGroupName: "DropDown_L",
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
 },
 GraphicFileId: "DropDown_L",
 ColorId: undefined,
 DimensionX: 46.3,
 DimensionY: 25,
 DimensionZ: 313.2,
 ReferencePointXYZ: "022",
 InsertionPointX: 22.2,
 InsertionPointY: 0,
 InsertionPointZ: 48,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseLeft"
}
,{
 _id: 1099,
 in_Model3DGroupName: "DropDown_R",
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
 },
 GraphicFileId: "DropDown_R",
 ColorId: undefined,
 DimensionX: 46.3,
 DimensionY: 25,
 DimensionZ: 313.2,
 ReferencePointXYZ: "022",
 InsertionPointX: 22.2,
 InsertionPointY: 0,
 InsertionPointZ: 48,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseRight"
}
,{
 _id: 1100,
 in_Model3DGroupName: "DropDown_Front",
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
 },
 GraphicFileId: "DropDown_Front",
 ColorId: undefined,
 DimensionX: 26,
 DimensionY: 26,
 DimensionZ: 1,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: -13,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 8,
 Visible: true,
 Identifier: "FrontConnector"
}
,{
 _id: 1101,
 in_Model3DGroupName: "Model3D_Aventos_HKXS_Mech_R",
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
 },
 GraphicFileId: "Model3D_Aventos_HKXS_Mech",
 ColorId: undefined,
 DimensionX: 20.2,
 DimensionY: 174.2,
 DimensionZ: 110.3,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1102,
 in_Model3DGroupName: "Model3D_Aventos_HKXS_Mech_L",
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
 },
 GraphicFileId: "Model3D_Aventos_HKXS_Mech",
 ColorId: undefined,
 DimensionX: 20.2,
 DimensionY: 174.2,
 DimensionZ: 110.3,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1103,
 in_Model3DGroupName: "Model3D_Aventos_HKXS_Front",
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
 },
 GraphicFileId: "Model3D_Aventos_HKXS_Front",
 ColorId: undefined,
 DimensionX: 17.3,
 DimensionY: 43,
 DimensionZ: 17.4,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: -5.5,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 11.5,
 Visible: true,
 Identifier: "FrontConnector"
}
,{
 _id: 1104,
 in_Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_R",
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
 },
 GraphicFileId: "Model3D_Aventos_HKXS_Carcase_R",
 ColorId: undefined,
 DimensionX: 26,
 DimensionY: 68.6,
 DimensionZ: 20.6,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 10.3,
 InsertionPointZ: 10.3,
 PartOffsetX: 11.8,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseLeft"
}
,{
 _id: 1105,
 in_Model3DGroupName: "Model3D_Aventos_HKXS_Carcase_L",
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
 },
 GraphicFileId: "Model3D_Aventos_HKXS_Carcase_L",
 ColorId: undefined,
 DimensionX: 26,
 DimensionY: 68.6,
 DimensionZ: 20.6,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 10.3,
 InsertionPointZ: 10.3,
 PartOffsetX: 11.8,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "CarcaseRight"
}
,{
 _id: 1106,
 in_Model3DGroupName: "Model3DHingeCenterForFHF",
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
 },
 GraphicFileId: "Model3DHingeCenterForFHF",
 ColorId: undefined,
 DimensionX: 112.2,
 DimensionY: 57,
 DimensionZ: 31.6,
 ReferencePointXYZ: "012",
 InsertionPointX: 92.7,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: -75.2,
 PartOffsetY: 0,
 PartOffsetZ: 12,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1107,
 in_Model3DGroupName: "Model3DMPHorizontalBL0SS",
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
 },
 GraphicFileId: "Model3DMPHorizontalBL0SS",
 ColorId: undefined,
 DimensionX: 8.5,
 DimensionY: 18.7,
 DimensionZ: 43.7,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -14.8,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1108,
 in_Model3DGroupName: "Model3DMPHorizontalBL3SS",
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
 },
 GraphicFileId: "Model3DMPHorizontalBL3SS",
 ColorId: undefined,
 DimensionX: 11.5,
 DimensionY: 18.7,
 DimensionZ: 48.4,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: -14.8,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1109,
 in_Model3DGroupName: "SquareBracket",
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
 },
 GraphicFileId: "SquareBracket",
 ColorId: undefined,
 DimensionX: 30,
 DimensionY: 30,
 DimensionZ: 70,
 ReferencePointXYZ: "000",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1110,
 in_Model3DGroupName: "Model3DBracket01",
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
 },
 GraphicFileId: "Model3DBracket01",
 ColorId: undefined,
 DimensionX: 40,
 DimensionY: 15,
 DimensionZ: 40,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "FrontAndCarcaseConnector"
}
,{
 _id: 1111,
 in_Model3DGroupName: "Model3DPlinthLegRectangularScrewH100",
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
 },
 GraphicFileId: "Model3DPlinthLegRectangularScrewH100",
 ColorId: "Black",
 DimensionX: 92,
 DimensionY: 100,
 DimensionZ: 79,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1112,
 in_Model3DGroupName: "Model3DPlinthLegRectangularScrewH120",
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
 },
 GraphicFileId: "Model3DPlinthLegRectangularScrewH120",
 ColorId: "Black",
 DimensionX: 92,
 DimensionY: 120,
 DimensionZ: 79,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1113,
 in_Model3DGroupName: "Model3DPlinthLegRectangularScrewH150",
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
 },
 GraphicFileId: "Model3DPlinthLegRectangularScrewH150",
 ColorId: "Black",
 DimensionX: 92,
 DimensionY: 150,
 DimensionZ: 79,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1114,
 in_Model3DGroupName: "Model3DPlinthLegTriangularPressH100",
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
 },
 GraphicFileId: "Model3DPlinthLegTriangularPressH100",
 ColorId: "Black",
 DimensionX: 95,
 DimensionY: 100,
 DimensionZ: 95,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 11,
 PartOffsetZ: 5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1115,
 in_Model3DGroupName: "Model3DPlinthLegTriangularPressH120",
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
 },
 GraphicFileId: "Model3DPlinthLegTriangularPressH120",
 ColorId: "Black",
 DimensionX: 95,
 DimensionY: 120,
 DimensionZ: 95,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 11,
 PartOffsetZ: 5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1116,
 in_Model3DGroupName: "Model3DPlinthLegTriangularPressH150",
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
 },
 GraphicFileId: "Model3DPlinthLegTriangularPressH150",
 ColorId: "Black",
 DimensionX: 95,
 DimensionY: 150,
 DimensionZ: 95,
 ReferencePointXYZ: "022",
 InsertionPointX: 39.5,
 InsertionPointY: 0,
 InsertionPointZ: -39.5,
 PartOffsetX: -5,
 PartOffsetY: 11,
 PartOffsetZ: 5,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1117,
 in_Model3DGroupName: "Model3DDesignLegRectangular001H100",
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
 },
 GraphicFileId: "Model3DDesignLegRectangular001H100",
 ColorId: "StainlessSteel",
 DimensionX: 60,
 DimensionY: 100,
 DimensionZ: 60,
 ReferencePointXYZ: "020",
 InsertionPointX: 30,
 InsertionPointY: 0,
 InsertionPointZ: 30,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1118,
 in_Model3DGroupName: "Model3DDesignLegRectangular001H150",
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
 },
 GraphicFileId: "Model3DDesignLegRectangular001H150",
 ColorId: "StainlessSteel",
 DimensionX: 60,
 DimensionY: 150,
 DimensionZ: 60,
 ReferencePointXYZ: "020",
 InsertionPointX: 30,
 InsertionPointY: 0,
 InsertionPointZ: 30,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1119,
 in_Model3DGroupName: "Model3DDesignLegRectangular001H200",
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
 },
 GraphicFileId: "Model3DDesignLegRectangular001H200",
 ColorId: "StainlessSteel",
 DimensionX: 60,
 DimensionY: 200,
 DimensionZ: 60,
 ReferencePointXYZ: "020",
 InsertionPointX: 30,
 InsertionPointY: 0,
 InsertionPointZ: 30,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1120,
 in_Model3DGroupName: "Model3DDesignLegRectangular001H50",
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
 },
 GraphicFileId: "Model3DDesignLegRectangular001H50",
 ColorId: "StainlessSteel",
 DimensionX: 60,
 DimensionY: 50,
 DimensionZ: 60,
 ReferencePointXYZ: "020",
 InsertionPointX: 30,
 InsertionPointY: 0,
 InsertionPointZ: 30,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1121,
 in_Model3DGroupName: "Model3DDesignLegRectangular001H80",
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
 },
 GraphicFileId: "Model3DDesignLegRectangular001H80",
 ColorId: "StainlessSteel",
 DimensionX: 60,
 DimensionY: 80,
 DimensionZ: 60,
 ReferencePointXYZ: "020",
 InsertionPointX: 30,
 InsertionPointY: 0,
 InsertionPointZ: 30,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1122,
 in_Model3DGroupName: "Model3D_Aventos_HF_Mech_480",
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
 },
 GraphicFileId: "Model3D_Aventos_HF_Mech_480",
 ColorId: undefined,
 DimensionX: 19,
 DimensionY: 360,
 DimensionZ: 43,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1123,
 in_Model3DGroupName: "Model3D_Aventos_HF_Mech_600",
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
 },
 GraphicFileId: "Model3D_Aventos_HF_Mech_600",
 ColorId: undefined,
 DimensionX: 19,
 DimensionY: 464,
 DimensionZ: 43,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1124,
 in_Model3DGroupName: "Model3D_Aventos_HF_Mech_840",
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
 },
 GraphicFileId: "Model3D_Aventos_HF_Mech_840",
 ColorId: undefined,
 DimensionX: 19,
 DimensionY: 644,
 DimensionZ: 43,
 ReferencePointXYZ: "022",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "Mechanism"
}
,{
 _id: 1125,
 in_Model3DGroupName: "Model3DKeku_Side_262_50_368",
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
 },
 GraphicFileId: "Model3DKeku_Side_262_50_368",
 ColorId: undefined,
 DimensionX: 10.2,
 DimensionY: 48,
 DimensionZ: 36,
 ReferencePointXYZ: "012",
 InsertionPointX: 9,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 9,
 Visible: true,
 Identifier: "CarcaseConnector"
}
,{
 _id: 1126,
 in_Model3DGroupName: "Model3DKeku_Front_262_50_359",
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
 },
 GraphicFileId: "Model3DKeku_Front_262_50_359",
 ColorId: undefined,
 DimensionX: 23,
 DimensionY: 48,
 DimensionZ: 29,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "FrontConnector"
}
,{
 _id: 1127,
 in_Model3DGroupName: "Model3DbrARRAS5",
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
 },
 GraphicFileId: "Model3DbrARRAS5",
 ColorId: undefined,
 DimensionX: 20,
 DimensionY: 150,
 DimensionZ: 150,
 ReferencePointXYZ: "000",
 InsertionPointX: -10,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1128,
 in_Model3DGroupName: "Model3DbrTucano",
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
 },
 GraphicFileId: "Model3DbrTucano",
 ColorId: undefined,
 DimensionX: 25,
 DimensionY: 75,
 DimensionZ: 75,
 ReferencePointXYZ: "000",
 InsertionPointX: -12.5,
 InsertionPointY: 35,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1129,
 in_Model3DGroupName: "Legra_Box_White_C_270_Left",
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
 },
 GraphicFileId: "Legra_Box_C_270_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1130,
 in_Model3DGroupName: "Legra_Box_White_C_270_Right",
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
 },
 GraphicFileId: "Legra_Box_C_270_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1131,
 in_Model3DGroupName: "Legra_Box_White_C_300_Left",
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
 },
 GraphicFileId: "Legra_Box_C_300_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1132,
 in_Model3DGroupName: "Legra_Box_White_C_300_Right",
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
 },
 GraphicFileId: "Legra_Box_C_300_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1133,
 in_Model3DGroupName: "Legra_Box_White_C_350_Left",
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
 },
 GraphicFileId: "Legra_Box_C_350_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1134,
 in_Model3DGroupName: "Legra_Box_White_C_350_Right",
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
 },
 GraphicFileId: "Legra_Box_C_350_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1135,
 in_Model3DGroupName: "Legra_Box_White_C_400_Left",
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
 },
 GraphicFileId: "Legra_Box_C_400_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1136,
 in_Model3DGroupName: "Legra_Box_White_C_400_Right",
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
 },
 GraphicFileId: "Legra_Box_C_400_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1137,
 in_Model3DGroupName: "Legra_Box_White_C_450_Left",
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
 },
 GraphicFileId: "Legra_Box_C_450_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1138,
 in_Model3DGroupName: "Legra_Box_White_C_450_Right",
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
 },
 GraphicFileId: "Legra_Box_C_450_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1139,
 in_Model3DGroupName: "Legra_Box_White_C_500_Left",
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
 },
 GraphicFileId: "Legra_Box_C_500_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1140,
 in_Model3DGroupName: "Legra_Box_White_C_500_Right",
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
 },
 GraphicFileId: "Legra_Box_C_500_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1141,
 in_Model3DGroupName: "Legra_Box_White_C_550_Left",
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
 },
 GraphicFileId: "Legra_Box_C_550_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1142,
 in_Model3DGroupName: "Legra_Box_White_C_550_Right",
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
 },
 GraphicFileId: "Legra_Box_C_550_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1143,
 in_Model3DGroupName: "Legra_Box_White_C_600_Left",
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
 },
 GraphicFileId: "Legra_Box_C_600_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1144,
 in_Model3DGroupName: "Legra_Box_White_C_600_Right",
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
 },
 GraphicFileId: "Legra_Box_C_600_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1145,
 in_Model3DGroupName: "Legra_Box_White_C_650_Left",
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
 },
 GraphicFileId: "Legra_Box_C_650_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1146,
 in_Model3DGroupName: "Legra_Box_White_C_650_Right",
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
 },
 GraphicFileId: "Legra_Box_C_650_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1147,
 in_Model3DGroupName: "Legra_Box_White_F_400_Left",
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
 },
 GraphicFileId: "Legra_Box_F_400_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1148,
 in_Model3DGroupName: "Legra_Box_White_F_400_Right",
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
 },
 GraphicFileId: "Legra_Box_F_400_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1149,
 in_Model3DGroupName: "Legra_Box_White_F_450_Left",
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
 },
 GraphicFileId: "Legra_Box_F_450_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1150,
 in_Model3DGroupName: "Legra_Box_White_F_450_Right",
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
 },
 GraphicFileId: "Legra_Box_F_450_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1151,
 in_Model3DGroupName: "Legra_Box_White_F_500_Left",
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
 },
 GraphicFileId: "Legra_Box_F_500_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1152,
 in_Model3DGroupName: "Legra_Box_White_F_500_Right",
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
 },
 GraphicFileId: "Legra_Box_F_500_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1153,
 in_Model3DGroupName: "Legra_Box_White_F_550_Left",
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
 },
 GraphicFileId: "Legra_Box_F_550_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1154,
 in_Model3DGroupName: "Legra_Box_White_F_550_Right",
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
 },
 GraphicFileId: "Legra_Box_F_550_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1155,
 in_Model3DGroupName: "Legra_Box_White_F_600_Left",
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
 },
 GraphicFileId: "Legra_Box_F_600_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1156,
 in_Model3DGroupName: "Legra_Box_White_F_600_Right",
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
 },
 GraphicFileId: "Legra_Box_F_600_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1157,
 in_Model3DGroupName: "Legra_Box_White_F_650_Left",
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
 },
 GraphicFileId: "Legra_Box_F_650_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1158,
 in_Model3DGroupName: "Legra_Box_White_F_650_Right",
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
 },
 GraphicFileId: "Legra_Box_F_650_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1159,
 in_Model3DGroupName: "Legra_Box_White_K_300_Left",
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
 },
 GraphicFileId: "Legra_Box_K_300_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1160,
 in_Model3DGroupName: "Legra_Box_White_K_300_Right",
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
 },
 GraphicFileId: "Legra_Box_K_300_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1161,
 in_Model3DGroupName: "Legra_Box_White_K_350_Left",
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
 },
 GraphicFileId: "Legra_Box_K_350_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1162,
 in_Model3DGroupName: "Legra_Box_White_K_350_Right",
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
 },
 GraphicFileId: "Legra_Box_K_350_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1163,
 in_Model3DGroupName: "Legra_Box_White_K_400_Left",
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
 },
 GraphicFileId: "Legra_Box_K_400_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1164,
 in_Model3DGroupName: "Legra_Box_White_K_400_Right",
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
 },
 GraphicFileId: "Legra_Box_K_400_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1165,
 in_Model3DGroupName: "Legra_Box_White_K_450_Left",
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
 },
 GraphicFileId: "Legra_Box_K_450_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1166,
 in_Model3DGroupName: "Legra_Box_White_K_450_Right",
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
 },
 GraphicFileId: "Legra_Box_K_450_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1167,
 in_Model3DGroupName: "Legra_Box_White_K_500_Left",
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
 },
 GraphicFileId: "Legra_Box_K_500_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1168,
 in_Model3DGroupName: "Legra_Box_White_K_500_Right",
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
 },
 GraphicFileId: "Legra_Box_K_500_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1169,
 in_Model3DGroupName: "Legra_Box_White_K_550_Left",
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
 },
 GraphicFileId: "Legra_Box_K_550_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1170,
 in_Model3DGroupName: "Legra_Box_White_K_550_Right",
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
 },
 GraphicFileId: "Legra_Box_K_550_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1171,
 in_Model3DGroupName: "Legra_Box_White_K_600_Left",
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
 },
 GraphicFileId: "Legra_Box_K_600_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1172,
 in_Model3DGroupName: "Legra_Box_White_K_600_Right",
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
 },
 GraphicFileId: "Legra_Box_K_600_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1173,
 in_Model3DGroupName: "Legra_Box_White_M_270_Left",
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
 },
 GraphicFileId: "Legra_Box_M_270_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1174,
 in_Model3DGroupName: "Legra_Box_White_M_270_Right",
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
 },
 GraphicFileId: "Legra_Box_M_270_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1175,
 in_Model3DGroupName: "Legra_Box_White_M_300_Left",
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
 },
 GraphicFileId: "Legra_Box_M_300_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1176,
 in_Model3DGroupName: "Legra_Box_White_M_300_Right",
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
 },
 GraphicFileId: "Legra_Box_M_300_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1177,
 in_Model3DGroupName: "Legra_Box_White_M_350_Left",
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
 },
 GraphicFileId: "Legra_Box_M_350_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1178,
 in_Model3DGroupName: "Legra_Box_White_M_350_Right",
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
 },
 GraphicFileId: "Legra_Box_M_350_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1179,
 in_Model3DGroupName: "Legra_Box_White_M_400_Left",
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
 },
 GraphicFileId: "Legra_Box_M_400_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1180,
 in_Model3DGroupName: "Legra_Box_White_M_400_Right",
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
 },
 GraphicFileId: "Legra_Box_M_400_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1181,
 in_Model3DGroupName: "Legra_Box_White_M_450_Left",
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
 },
 GraphicFileId: "Legra_Box_M_450_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1182,
 in_Model3DGroupName: "Legra_Box_White_M_450_Right",
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
 },
 GraphicFileId: "Legra_Box_M_450_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1183,
 in_Model3DGroupName: "Legra_Box_White_M_500_Left",
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
 },
 GraphicFileId: "Legra_Box_M_500_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1184,
 in_Model3DGroupName: "Legra_Box_White_M_500_Right",
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
 },
 GraphicFileId: "Legra_Box_M_500_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1185,
 in_Model3DGroupName: "Legra_Box_White_M_550_Left",
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
 },
 GraphicFileId: "Legra_Box_M_550_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1186,
 in_Model3DGroupName: "Legra_Box_White_M_550_Right",
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
 },
 GraphicFileId: "Legra_Box_M_550_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1187,
 in_Model3DGroupName: "Legra_Box_White_M_600_Left",
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
 },
 GraphicFileId: "Legra_Box_M_600_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1188,
 in_Model3DGroupName: "Legra_Box_White_M_600_Right",
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
 },
 GraphicFileId: "Legra_Box_M_600_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1189,
 in_Model3DGroupName: "Legra_Box_White_M_650_Left",
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
 },
 GraphicFileId: "Legra_Box_M_650_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1190,
 in_Model3DGroupName: "Legra_Box_White_M_650_Right",
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
 },
 GraphicFileId: "Legra_Box_M_650_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1191,
 in_Model3DGroupName: "Legra_Box_White_N_400_Left",
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
 },
 GraphicFileId: "Legra_Box_N_400_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1192,
 in_Model3DGroupName: "Legra_Box_White_N_400_Right",
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
 },
 GraphicFileId: "Legra_Box_N_400_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1193,
 in_Model3DGroupName: "Legra_Box_White_N_450_Left",
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
 },
 GraphicFileId: "Legra_Box_N_450_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1194,
 in_Model3DGroupName: "Legra_Box_White_N_450_Right",
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
 },
 GraphicFileId: "Legra_Box_N_450_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1195,
 in_Model3DGroupName: "Legra_Box_White_N_500_Left",
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
 },
 GraphicFileId: "Legra_Box_N_500_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1196,
 in_Model3DGroupName: "Legra_Box_White_N_500_Right",
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
 },
 GraphicFileId: "Legra_Box_N_500_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1197,
 in_Model3DGroupName: "Legra_Box_White_N_550_Left",
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
 },
 GraphicFileId: "Legra_Box_N_550_Left",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1198,
 in_Model3DGroupName: "Legra_Box_White_N_550_Right",
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
 },
 GraphicFileId: "Legra_Box_N_550_Right",
 ColorId: "LegraWhite",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1199,
 in_Model3DGroupName: "Legra_Box_Orion_C_270_Left",
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
 },
 GraphicFileId: "Legra_Box_C_270_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1200,
 in_Model3DGroupName: "Legra_Box_Orion_C_270_Right",
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
 },
 GraphicFileId: "Legra_Box_C_270_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1201,
 in_Model3DGroupName: "Legra_Box_Orion_C_300_Left",
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
 },
 GraphicFileId: "Legra_Box_C_300_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1202,
 in_Model3DGroupName: "Legra_Box_Orion_C_300_Right",
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
 },
 GraphicFileId: "Legra_Box_C_300_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1203,
 in_Model3DGroupName: "Legra_Box_Orion_C_350_Left",
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
 },
 GraphicFileId: "Legra_Box_C_350_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1204,
 in_Model3DGroupName: "Legra_Box_Orion_C_350_Right",
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
 },
 GraphicFileId: "Legra_Box_C_350_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1205,
 in_Model3DGroupName: "Legra_Box_Orion_C_400_Left",
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
 },
 GraphicFileId: "Legra_Box_C_400_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1206,
 in_Model3DGroupName: "Legra_Box_Orion_C_400_Right",
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
 },
 GraphicFileId: "Legra_Box_C_400_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1207,
 in_Model3DGroupName: "Legra_Box_Orion_C_450_Left",
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
 },
 GraphicFileId: "Legra_Box_C_450_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1208,
 in_Model3DGroupName: "Legra_Box_Orion_C_450_Right",
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
 },
 GraphicFileId: "Legra_Box_C_450_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1209,
 in_Model3DGroupName: "Legra_Box_Orion_C_500_Left",
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
 },
 GraphicFileId: "Legra_Box_C_500_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1210,
 in_Model3DGroupName: "Legra_Box_Orion_C_500_Right",
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
 },
 GraphicFileId: "Legra_Box_C_500_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1211,
 in_Model3DGroupName: "Legra_Box_Orion_C_550_Left",
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
 },
 GraphicFileId: "Legra_Box_C_550_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1212,
 in_Model3DGroupName: "Legra_Box_Orion_C_550_Right",
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
 },
 GraphicFileId: "Legra_Box_C_550_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1213,
 in_Model3DGroupName: "Legra_Box_Orion_C_600_Left",
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
 },
 GraphicFileId: "Legra_Box_C_600_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1214,
 in_Model3DGroupName: "Legra_Box_Orion_C_600_Right",
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
 },
 GraphicFileId: "Legra_Box_C_600_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1215,
 in_Model3DGroupName: "Legra_Box_Orion_C_650_Left",
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
 },
 GraphicFileId: "Legra_Box_C_650_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1216,
 in_Model3DGroupName: "Legra_Box_Orion_C_650_Right",
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
 },
 GraphicFileId: "Legra_Box_C_650_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1217,
 in_Model3DGroupName: "Legra_Box_Orion_F_400_Left",
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
 },
 GraphicFileId: "Legra_Box_F_400_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1218,
 in_Model3DGroupName: "Legra_Box_Orion_F_400_Right",
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
 },
 GraphicFileId: "Legra_Box_F_400_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1219,
 in_Model3DGroupName: "Legra_Box_Orion_F_450_Left",
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
 },
 GraphicFileId: "Legra_Box_F_450_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1220,
 in_Model3DGroupName: "Legra_Box_Orion_F_450_Right",
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
 },
 GraphicFileId: "Legra_Box_F_450_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1221,
 in_Model3DGroupName: "Legra_Box_Orion_F_500_Left",
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
 },
 GraphicFileId: "Legra_Box_F_500_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1222,
 in_Model3DGroupName: "Legra_Box_Orion_F_500_Right",
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
 },
 GraphicFileId: "Legra_Box_F_500_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1223,
 in_Model3DGroupName: "Legra_Box_Orion_F_550_Left",
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
 },
 GraphicFileId: "Legra_Box_F_550_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1224,
 in_Model3DGroupName: "Legra_Box_Orion_F_550_Right",
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
 },
 GraphicFileId: "Legra_Box_F_550_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1225,
 in_Model3DGroupName: "Legra_Box_Orion_F_600_Left",
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
 },
 GraphicFileId: "Legra_Box_F_600_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1226,
 in_Model3DGroupName: "Legra_Box_Orion_F_600_Right",
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
 },
 GraphicFileId: "Legra_Box_F_600_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1227,
 in_Model3DGroupName: "Legra_Box_Orion_F_650_Left",
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
 },
 GraphicFileId: "Legra_Box_F_650_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1228,
 in_Model3DGroupName: "Legra_Box_Orion_F_650_Right",
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
 },
 GraphicFileId: "Legra_Box_F_650_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1229,
 in_Model3DGroupName: "Legra_Box_Orion_K_300_Left",
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
 },
 GraphicFileId: "Legra_Box_K_300_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1230,
 in_Model3DGroupName: "Legra_Box_Orion_K_300_Right",
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
 },
 GraphicFileId: "Legra_Box_K_300_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1231,
 in_Model3DGroupName: "Legra_Box_Orion_K_350_Left",
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
 },
 GraphicFileId: "Legra_Box_K_350_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1232,
 in_Model3DGroupName: "Legra_Box_Orion_K_350_Right",
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
 },
 GraphicFileId: "Legra_Box_K_350_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1233,
 in_Model3DGroupName: "Legra_Box_Orion_K_400_Left",
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
 },
 GraphicFileId: "Legra_Box_K_400_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1234,
 in_Model3DGroupName: "Legra_Box_Orion_K_400_Right",
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
 },
 GraphicFileId: "Legra_Box_K_400_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1235,
 in_Model3DGroupName: "Legra_Box_Orion_K_450_Left",
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
 },
 GraphicFileId: "Legra_Box_K_450_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1236,
 in_Model3DGroupName: "Legra_Box_Orion_K_450_Right",
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
 },
 GraphicFileId: "Legra_Box_K_450_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1237,
 in_Model3DGroupName: "Legra_Box_Orion_K_500_Left",
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
 },
 GraphicFileId: "Legra_Box_K_500_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1238,
 in_Model3DGroupName: "Legra_Box_Orion_K_500_Right",
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
 },
 GraphicFileId: "Legra_Box_K_500_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1239,
 in_Model3DGroupName: "Legra_Box_Orion_K_550_Left",
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
 },
 GraphicFileId: "Legra_Box_K_550_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1240,
 in_Model3DGroupName: "Legra_Box_Orion_K_550_Right",
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
 },
 GraphicFileId: "Legra_Box_K_550_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1241,
 in_Model3DGroupName: "Legra_Box_Orion_K_600_Left",
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
 },
 GraphicFileId: "Legra_Box_K_600_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1242,
 in_Model3DGroupName: "Legra_Box_Orion_K_600_Right",
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
 },
 GraphicFileId: "Legra_Box_K_600_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1243,
 in_Model3DGroupName: "Legra_Box_Orion_M_270_Left",
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
 },
 GraphicFileId: "Legra_Box_M_270_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1244,
 in_Model3DGroupName: "Legra_Box_Orion_M_270_Right",
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
 },
 GraphicFileId: "Legra_Box_M_270_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1245,
 in_Model3DGroupName: "Legra_Box_Orion_M_300_Left",
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
 },
 GraphicFileId: "Legra_Box_M_300_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1246,
 in_Model3DGroupName: "Legra_Box_Orion_M_300_Right",
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
 },
 GraphicFileId: "Legra_Box_M_300_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1247,
 in_Model3DGroupName: "Legra_Box_Orion_M_350_Left",
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
 },
 GraphicFileId: "Legra_Box_M_350_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1248,
 in_Model3DGroupName: "Legra_Box_Orion_M_350_Right",
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
 },
 GraphicFileId: "Legra_Box_M_350_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1249,
 in_Model3DGroupName: "Legra_Box_Orion_M_400_Left",
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
 },
 GraphicFileId: "Legra_Box_M_400_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1250,
 in_Model3DGroupName: "Legra_Box_Orion_M_400_Right",
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
 },
 GraphicFileId: "Legra_Box_M_400_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1251,
 in_Model3DGroupName: "Legra_Box_Orion_M_450_Left",
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
 },
 GraphicFileId: "Legra_Box_M_450_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1252,
 in_Model3DGroupName: "Legra_Box_Orion_M_450_Right",
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
 },
 GraphicFileId: "Legra_Box_M_450_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1253,
 in_Model3DGroupName: "Legra_Box_Orion_M_500_Left",
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
 },
 GraphicFileId: "Legra_Box_M_500_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1254,
 in_Model3DGroupName: "Legra_Box_Orion_M_500_Right",
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
 },
 GraphicFileId: "Legra_Box_M_500_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1255,
 in_Model3DGroupName: "Legra_Box_Orion_M_550_Left",
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
 },
 GraphicFileId: "Legra_Box_M_550_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1256,
 in_Model3DGroupName: "Legra_Box_Orion_M_550_Right",
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
 },
 GraphicFileId: "Legra_Box_M_550_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1257,
 in_Model3DGroupName: "Legra_Box_Orion_M_600_Left",
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
 },
 GraphicFileId: "Legra_Box_M_600_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1258,
 in_Model3DGroupName: "Legra_Box_Orion_M_600_Right",
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
 },
 GraphicFileId: "Legra_Box_M_600_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1259,
 in_Model3DGroupName: "Legra_Box_Orion_M_650_Left",
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
 },
 GraphicFileId: "Legra_Box_M_650_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1260,
 in_Model3DGroupName: "Legra_Box_Orion_M_650_Right",
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
 },
 GraphicFileId: "Legra_Box_M_650_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1261,
 in_Model3DGroupName: "Legra_Box_Orion_N_400_Left",
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
 },
 GraphicFileId: "Legra_Box_N_400_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1262,
 in_Model3DGroupName: "Legra_Box_Orion_N_400_Right",
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
 },
 GraphicFileId: "Legra_Box_N_400_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1263,
 in_Model3DGroupName: "Legra_Box_Orion_N_450_Left",
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
 },
 GraphicFileId: "Legra_Box_N_450_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1264,
 in_Model3DGroupName: "Legra_Box_Orion_N_450_Right",
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
 },
 GraphicFileId: "Legra_Box_N_450_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1265,
 in_Model3DGroupName: "Legra_Box_Orion_N_500_Left",
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
 },
 GraphicFileId: "Legra_Box_N_500_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1266,
 in_Model3DGroupName: "Legra_Box_Orion_N_500_Right",
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
 },
 GraphicFileId: "Legra_Box_N_500_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1267,
 in_Model3DGroupName: "Legra_Box_Orion_N_550_Left",
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
 },
 GraphicFileId: "Legra_Box_N_550_Left",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1268,
 in_Model3DGroupName: "Legra_Box_Orion_N_550_Right",
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
 },
 GraphicFileId: "Legra_Box_N_550_Right",
 ColorId: "LegraOrion",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1269,
 in_Model3DGroupName: "Legra_Box_Terra_C_270_Left",
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
 },
 GraphicFileId: "Legra_Box_C_270_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1270,
 in_Model3DGroupName: "Legra_Box_Terra_C_270_Right",
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
 },
 GraphicFileId: "Legra_Box_C_270_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1271,
 in_Model3DGroupName: "Legra_Box_Terra_C_300_Left",
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
 },
 GraphicFileId: "Legra_Box_C_300_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1272,
 in_Model3DGroupName: "Legra_Box_Terra_C_300_Right",
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
 },
 GraphicFileId: "Legra_Box_C_300_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1273,
 in_Model3DGroupName: "Legra_Box_Terra_C_350_Left",
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
 },
 GraphicFileId: "Legra_Box_C_350_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1274,
 in_Model3DGroupName: "Legra_Box_Terra_C_350_Right",
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
 },
 GraphicFileId: "Legra_Box_C_350_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1275,
 in_Model3DGroupName: "Legra_Box_Terra_C_400_Left",
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
 },
 GraphicFileId: "Legra_Box_C_400_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1276,
 in_Model3DGroupName: "Legra_Box_Terra_C_400_Right",
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
 },
 GraphicFileId: "Legra_Box_C_400_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1277,
 in_Model3DGroupName: "Legra_Box_Terra_C_450_Left",
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
 },
 GraphicFileId: "Legra_Box_C_450_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1278,
 in_Model3DGroupName: "Legra_Box_Terra_C_450_Right",
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
 },
 GraphicFileId: "Legra_Box_C_450_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1279,
 in_Model3DGroupName: "Legra_Box_Terra_C_500_Left",
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
 },
 GraphicFileId: "Legra_Box_C_500_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1280,
 in_Model3DGroupName: "Legra_Box_Terra_C_500_Right",
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
 },
 GraphicFileId: "Legra_Box_C_500_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1281,
 in_Model3DGroupName: "Legra_Box_Terra_C_550_Left",
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
 },
 GraphicFileId: "Legra_Box_C_550_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1282,
 in_Model3DGroupName: "Legra_Box_Terra_C_550_Right",
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
 },
 GraphicFileId: "Legra_Box_C_550_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1283,
 in_Model3DGroupName: "Legra_Box_Terra_C_600_Left",
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
 },
 GraphicFileId: "Legra_Box_C_600_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1284,
 in_Model3DGroupName: "Legra_Box_Terra_C_600_Right",
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
 },
 GraphicFileId: "Legra_Box_C_600_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1285,
 in_Model3DGroupName: "Legra_Box_Terra_C_650_Left",
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
 },
 GraphicFileId: "Legra_Box_C_650_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1286,
 in_Model3DGroupName: "Legra_Box_Terra_C_650_Right",
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
 },
 GraphicFileId: "Legra_Box_C_650_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 187,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1287,
 in_Model3DGroupName: "Legra_Box_Terra_F_400_Left",
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
 },
 GraphicFileId: "Legra_Box_F_400_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1288,
 in_Model3DGroupName: "Legra_Box_Terra_F_400_Right",
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
 },
 GraphicFileId: "Legra_Box_F_400_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1289,
 in_Model3DGroupName: "Legra_Box_Terra_F_450_Left",
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
 },
 GraphicFileId: "Legra_Box_F_450_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1290,
 in_Model3DGroupName: "Legra_Box_Terra_F_450_Right",
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
 },
 GraphicFileId: "Legra_Box_F_450_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1291,
 in_Model3DGroupName: "Legra_Box_Terra_F_500_Left",
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
 },
 GraphicFileId: "Legra_Box_F_500_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1292,
 in_Model3DGroupName: "Legra_Box_Terra_F_500_Right",
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
 },
 GraphicFileId: "Legra_Box_F_500_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1293,
 in_Model3DGroupName: "Legra_Box_Terra_F_550_Left",
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
 },
 GraphicFileId: "Legra_Box_F_550_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1294,
 in_Model3DGroupName: "Legra_Box_Terra_F_550_Right",
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
 },
 GraphicFileId: "Legra_Box_F_550_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1295,
 in_Model3DGroupName: "Legra_Box_Terra_F_600_Left",
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
 },
 GraphicFileId: "Legra_Box_F_600_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1296,
 in_Model3DGroupName: "Legra_Box_Terra_F_600_Right",
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
 },
 GraphicFileId: "Legra_Box_F_600_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1297,
 in_Model3DGroupName: "Legra_Box_Terra_F_650_Left",
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
 },
 GraphicFileId: "Legra_Box_F_650_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1298,
 in_Model3DGroupName: "Legra_Box_Terra_F_650_Right",
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
 },
 GraphicFileId: "Legra_Box_F_650_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 251,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1299,
 in_Model3DGroupName: "Legra_Box_Terra_K_300_Left",
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
 },
 GraphicFileId: "Legra_Box_K_300_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1300,
 in_Model3DGroupName: "Legra_Box_Terra_K_300_Right",
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
 },
 GraphicFileId: "Legra_Box_K_300_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1301,
 in_Model3DGroupName: "Legra_Box_Terra_K_350_Left",
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
 },
 GraphicFileId: "Legra_Box_K_350_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1302,
 in_Model3DGroupName: "Legra_Box_Terra_K_350_Right",
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
 },
 GraphicFileId: "Legra_Box_K_350_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1303,
 in_Model3DGroupName: "Legra_Box_Terra_K_400_Left",
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
 },
 GraphicFileId: "Legra_Box_K_400_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1304,
 in_Model3DGroupName: "Legra_Box_Terra_K_400_Right",
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
 },
 GraphicFileId: "Legra_Box_K_400_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1305,
 in_Model3DGroupName: "Legra_Box_Terra_K_450_Left",
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
 },
 GraphicFileId: "Legra_Box_K_450_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1306,
 in_Model3DGroupName: "Legra_Box_Terra_K_450_Right",
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
 },
 GraphicFileId: "Legra_Box_K_450_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1307,
 in_Model3DGroupName: "Legra_Box_Terra_K_500_Left",
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
 },
 GraphicFileId: "Legra_Box_K_500_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1308,
 in_Model3DGroupName: "Legra_Box_Terra_K_500_Right",
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
 },
 GraphicFileId: "Legra_Box_K_500_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1309,
 in_Model3DGroupName: "Legra_Box_Terra_K_550_Left",
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
 },
 GraphicFileId: "Legra_Box_K_550_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1310,
 in_Model3DGroupName: "Legra_Box_Terra_K_550_Right",
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
 },
 GraphicFileId: "Legra_Box_K_550_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1311,
 in_Model3DGroupName: "Legra_Box_Terra_K_600_Left",
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
 },
 GraphicFileId: "Legra_Box_K_600_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1312,
 in_Model3DGroupName: "Legra_Box_Terra_K_600_Right",
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
 },
 GraphicFileId: "Legra_Box_K_600_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 140,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1313,
 in_Model3DGroupName: "Legra_Box_Terra_M_270_Left",
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
 },
 GraphicFileId: "Legra_Box_M_270_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1314,
 in_Model3DGroupName: "Legra_Box_Terra_M_270_Right",
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
 },
 GraphicFileId: "Legra_Box_M_270_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 267,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1315,
 in_Model3DGroupName: "Legra_Box_Terra_M_300_Left",
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
 },
 GraphicFileId: "Legra_Box_M_300_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1316,
 in_Model3DGroupName: "Legra_Box_Terra_M_300_Right",
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
 },
 GraphicFileId: "Legra_Box_M_300_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 297,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1317,
 in_Model3DGroupName: "Legra_Box_Terra_M_350_Left",
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
 },
 GraphicFileId: "Legra_Box_M_350_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1318,
 in_Model3DGroupName: "Legra_Box_Terra_M_350_Right",
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
 },
 GraphicFileId: "Legra_Box_M_350_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 347,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1319,
 in_Model3DGroupName: "Legra_Box_Terra_M_400_Left",
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
 },
 GraphicFileId: "Legra_Box_M_400_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1320,
 in_Model3DGroupName: "Legra_Box_Terra_M_400_Right",
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
 },
 GraphicFileId: "Legra_Box_M_400_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1321,
 in_Model3DGroupName: "Legra_Box_Terra_M_450_Left",
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
 },
 GraphicFileId: "Legra_Box_M_450_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1322,
 in_Model3DGroupName: "Legra_Box_Terra_M_450_Right",
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
 },
 GraphicFileId: "Legra_Box_M_450_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1323,
 in_Model3DGroupName: "Legra_Box_Terra_M_500_Left",
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
 },
 GraphicFileId: "Legra_Box_M_500_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1324,
 in_Model3DGroupName: "Legra_Box_Terra_M_500_Right",
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
 },
 GraphicFileId: "Legra_Box_M_500_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1325,
 in_Model3DGroupName: "Legra_Box_Terra_M_550_Left",
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
 },
 GraphicFileId: "Legra_Box_M_550_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1326,
 in_Model3DGroupName: "Legra_Box_Terra_M_550_Right",
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
 },
 GraphicFileId: "Legra_Box_M_550_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1327,
 in_Model3DGroupName: "Legra_Box_Terra_M_600_Left",
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
 },
 GraphicFileId: "Legra_Box_M_600_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1328,
 in_Model3DGroupName: "Legra_Box_Terra_M_600_Right",
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
 },
 GraphicFileId: "Legra_Box_M_600_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 597,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1329,
 in_Model3DGroupName: "Legra_Box_Terra_M_650_Left",
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
 },
 GraphicFileId: "Legra_Box_M_650_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1330,
 in_Model3DGroupName: "Legra_Box_Terra_M_650_Right",
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
 },
 GraphicFileId: "Legra_Box_M_650_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 102,
 DimensionZ: 647,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1331,
 in_Model3DGroupName: "Legra_Box_Terra_N_400_Left",
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
 },
 GraphicFileId: "Legra_Box_N_400_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1332,
 in_Model3DGroupName: "Legra_Box_Terra_N_400_Right",
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
 },
 GraphicFileId: "Legra_Box_N_400_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 397,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1333,
 in_Model3DGroupName: "Legra_Box_Terra_N_450_Left",
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
 },
 GraphicFileId: "Legra_Box_N_450_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1334,
 in_Model3DGroupName: "Legra_Box_Terra_N_450_Right",
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
 },
 GraphicFileId: "Legra_Box_N_450_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 447,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1335,
 in_Model3DGroupName: "Legra_Box_Terra_N_500_Left",
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
 },
 GraphicFileId: "Legra_Box_N_500_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1336,
 in_Model3DGroupName: "Legra_Box_Terra_N_500_Right",
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
 },
 GraphicFileId: "Legra_Box_N_500_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 497,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1337,
 in_Model3DGroupName: "Legra_Box_Terra_N_550_Left",
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
 },
 GraphicFileId: "Legra_Box_N_550_Left",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxLeft"
}
,{
 _id: 1338,
 in_Model3DGroupName: "Legra_Box_Terra_N_550_Right",
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
 },
 GraphicFileId: "Legra_Box_N_550_Right",
 ColorId: "LegraTerra",
 DimensionX: 66,
 DimensionY: 78,
 DimensionZ: 547,
 ReferencePointXYZ: "012",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "BoxRight"
}
,{
 _id: 1339,
 in_Model3DGroupName: "Model3d_BH_128",
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
 },
 GraphicFileId: "Model3DBracketHandle128",
 ColorId: "StainlessSteel",
 DimensionX: 140,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1340,
 in_Model3DGroupName: "Model3d_BH_160",
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
 },
 GraphicFileId: "Model3DBracketHandle160",
 ColorId: "StainlessSteel",
 DimensionX: 172,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1341,
 in_Model3DGroupName: "Model3d_BH_192",
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
 },
 GraphicFileId: "Model3DBracketHandle192",
 ColorId: "StainlessSteel",
 DimensionX: 204,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1342,
 in_Model3DGroupName: "Model3d_BH_224",
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
 },
 GraphicFileId: "Model3DBracketHandle224",
 ColorId: "StainlessSteel",
 DimensionX: 236,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1343,
 in_Model3DGroupName: "Model3d_BH_288",
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
 },
 GraphicFileId: "Model3DBracketHandle288",
 ColorId: "StainlessSteel",
 DimensionX: 300,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1344,
 in_Model3DGroupName: "Model3d_BH_320",
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
 },
 GraphicFileId: "Model3DBracketHandle320",
 ColorId: "StainlessSteel",
 DimensionX: 332,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1345,
 in_Model3DGroupName: "Model3d_BH_352",
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
 },
 GraphicFileId: "Model3DBracketHandle352",
 ColorId: "StainlessSteel",
 DimensionX: 364,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1346,
 in_Model3DGroupName: "Model3d_BH_448",
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
 },
 GraphicFileId: "Model3DBracketHandle448",
 ColorId: "StainlessSteel",
 DimensionX: 460,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1347,
 in_Model3DGroupName: "Model3d_BH_480",
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
 },
 GraphicFileId: "Model3DBracketHandle480",
 ColorId: "StainlessSteel",
 DimensionX: 492,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1348,
 in_Model3DGroupName: "Model3d_BH_560",
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
 },
 GraphicFileId: "Model3DBracketHandle560",
 ColorId: "StainlessSteel",
 DimensionX: 572,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1349,
 in_Model3DGroupName: "Model3d_BH_640",
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
 },
 GraphicFileId: "Model3DBracketHandle640",
 ColorId: "StainlessSteel",
 DimensionX: 652,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1350,
 in_Model3DGroupName: "Model3d_BH_96",
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
 },
 GraphicFileId: "Model3DBracketHandle96",
 ColorId: "StainlessSteel",
 DimensionX: 108,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1351,
 in_Model3DGroupName: "Model3d_BH_960",
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
 },
 GraphicFileId: "Model3DBracketHandle960",
 ColorId: "StainlessSteel",
 DimensionX: 972,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1352,
 in_Model3DGroupName: "Model3d_DH100_Black_160",
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
 },
 GraphicFileId: "Model3DHandle100_160",
 ColorId: "Black",
 DimensionX: 170,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1353,
 in_Model3DGroupName: "Model3d_DH100_Black_320",
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
 },
 GraphicFileId: "Model3DHandle100_320",
 ColorId: "Black",
 DimensionX: 329,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1354,
 in_Model3DGroupName: "Model3d_DH100_Black_64",
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
 },
 GraphicFileId: "Model3DHandle100_64",
 ColorId: "Black",
 DimensionX: 74,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1355,
 in_Model3DGroupName: "Model3d_DH100_NickelPlated_160",
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
 },
 GraphicFileId: "Model3DHandle100_160",
 ColorId: "NickelPlated",
 DimensionX: 170,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1356,
 in_Model3DGroupName: "Model3d_DH100_NickelPlated_320",
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
 },
 GraphicFileId: "Model3DHandle100_320",
 ColorId: "NickelPlated",
 DimensionX: 329,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1357,
 in_Model3DGroupName: "Model3d_DH100_NickelPlated_64",
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
 },
 GraphicFileId: "Model3DHandle100_64",
 ColorId: "NickelPlated",
 DimensionX: 74,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1358,
 in_Model3DGroupName: "Model3d_DH100_Tin_160",
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
 },
 GraphicFileId: "Model3DHandle100_160",
 ColorId: "Tin",
 DimensionX: 170,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1359,
 in_Model3DGroupName: "Model3d_DH100_Tin_320",
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
 },
 GraphicFileId: "Model3DHandle100_320",
 ColorId: "Tin",
 DimensionX: 329,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1360,
 in_Model3DGroupName: "Model3d_DH100_Tin_64",
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
 },
 GraphicFileId: "Model3DHandle100_64",
 ColorId: "Tin",
 DimensionX: 74,
 DimensionY: 38,
 DimensionZ: 32,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: -2,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1361,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1060",
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
 },
 GraphicFileId: "Model3DHandle110_1060",
 ColorId: "StainlessSteel",
 DimensionX: 1100,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1362,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1160",
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
 },
 GraphicFileId: "Model3DHandle110_1160",
 ColorId: "StainlessSteel",
 DimensionX: 1200,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1363,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1260",
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
 },
 GraphicFileId: "Model3DHandle110_1260",
 ColorId: "StainlessSteel",
 DimensionX: 1300,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1364,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_128",
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
 },
 GraphicFileId: "Model3DHandle110_128",
 ColorId: "StainlessSteel",
 DimensionX: 168,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1365,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1360",
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
 },
 GraphicFileId: "Model3DHandle110_1360",
 ColorId: "StainlessSteel",
 DimensionX: 1400,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1366,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1460",
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
 },
 GraphicFileId: "Model3DHandle110_1460",
 ColorId: "StainlessSteel",
 DimensionX: 1500,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1367,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1560",
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
 },
 GraphicFileId: "Model3DHandle110_1560",
 ColorId: "StainlessSteel",
 DimensionX: 1600,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1368,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_160",
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
 },
 GraphicFileId: "Model3DHandle110_160",
 ColorId: "StainlessSteel",
 DimensionX: 200,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1369,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1760",
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
 },
 GraphicFileId: "Model3DHandle110_1760",
 ColorId: "StainlessSteel",
 DimensionX: 1800,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1370,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_1960",
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
 },
 GraphicFileId: "Model3DHandle110_1960",
 ColorId: "StainlessSteel",
 DimensionX: 2000,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1371,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_210",
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
 },
 GraphicFileId: "Model3DHandle110_210",
 ColorId: "StainlessSteel",
 DimensionX: 250,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1372,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_260",
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
 },
 GraphicFileId: "Model3DHandle110_260",
 ColorId: "StainlessSteel",
 DimensionX: 300,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1373,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_310",
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
 },
 GraphicFileId: "Model3DHandle110_310",
 ColorId: "StainlessSteel",
 DimensionX: 350,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1374,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_360",
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
 },
 GraphicFileId: "Model3DHandle110_360",
 ColorId: "StainlessSteel",
 DimensionX: 400,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1375,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_410",
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
 },
 GraphicFileId: "Model3DHandle110_410",
 ColorId: "StainlessSteel",
 DimensionX: 450,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1376,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_460",
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
 },
 GraphicFileId: "Model3DHandle110_460",
 ColorId: "StainlessSteel",
 DimensionX: 500,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1377,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_560",
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
 },
 GraphicFileId: "Model3DHandle110_560",
 ColorId: "StainlessSteel",
 DimensionX: 600,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1378,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_660",
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
 },
 GraphicFileId: "Model3DHandle110_660",
 ColorId: "StainlessSteel",
 DimensionX: 700,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1379,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_760",
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
 },
 GraphicFileId: "Model3DHandle110_760",
 ColorId: "StainlessSteel",
 DimensionX: 800,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1380,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_860",
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
 },
 GraphicFileId: "Model3DHandle110_860",
 ColorId: "StainlessSteel",
 DimensionX: 900,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1381,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_96",
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
 },
 GraphicFileId: "Model3DHandle110_96",
 ColorId: "StainlessSteel",
 DimensionX: 136,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1382,
 in_Model3DGroupName: "Model3d_DH110_StainlessSteel_960",
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
 },
 GraphicFileId: "Model3DHandle110_960",
 ColorId: "StainlessSteel",
 DimensionX: 1000,
 DimensionY: 12,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1383,
 in_Model3DGroupName: "Model3d_DH120_Black",
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
 },
 GraphicFileId: "Model3DHandle120",
 ColorId: "Black",
 DimensionX: 20,
 DimensionY: 20,
 DimensionZ: 30,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1384,
 in_Model3DGroupName: "Model3d_DH120_StainlessSteel",
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
 },
 GraphicFileId: "Model3DHandle120",
 ColorId: "StainlessSteel",
 DimensionX: 20,
 DimensionY: 20,
 DimensionZ: 30,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1385,
 in_Model3DGroupName: "Model3d_DH130_Black",
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
 },
 GraphicFileId: "Model3DHandle130",
 ColorId: "Black",
 DimensionX: 29,
 DimensionY: 29,
 DimensionZ: 30,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1386,
 in_Model3DGroupName: "Model3d_DH130_BrassPlatedAntique",
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
 },
 GraphicFileId: "Model3DHandle130",
 ColorId: "BrassPlatedAntique",
 DimensionX: 29,
 DimensionY: 29,
 DimensionZ: 30,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1387,
 in_Model3DGroupName: "Model3d_DH130_StainlessSteel",
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
 },
 GraphicFileId: "Model3DHandle130",
 ColorId: "StainlessSteel",
 DimensionX: 29,
 DimensionY: 29,
 DimensionZ: 30,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1388,
 in_Model3DGroupName: "Model3d_RH_128",
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
 },
 GraphicFileId: "Model3DHandleDesign20_128",
 ColorId: "StainlessSteel",
 DimensionX: 168,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1389,
 in_Model3DGroupName: "Model3d_RH_160",
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
 },
 GraphicFileId: "Model3DHandleDesign20_160",
 ColorId: "StainlessSteel",
 DimensionX: 200,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1390,
 in_Model3DGroupName: "Model3d_RH_192",
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
 },
 GraphicFileId: "Model3DHandleDesign20_192",
 ColorId: "StainlessSteel",
 DimensionX: 232,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1391,
 in_Model3DGroupName: "Model3d_RH_224",
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
 },
 GraphicFileId: "Model3DHandleDesign20_224",
 ColorId: "StainlessSteel",
 DimensionX: 264,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1392,
 in_Model3DGroupName: "Model3d_RH_288",
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
 },
 GraphicFileId: "Model3DHandleDesign20_288",
 ColorId: "StainlessSteel",
 DimensionX: 328,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1393,
 in_Model3DGroupName: "Model3d_RH_320",
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
 },
 GraphicFileId: "Model3DHandleDesign20_320",
 ColorId: "StainlessSteel",
 DimensionX: 360,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1394,
 in_Model3DGroupName: "Model3d_RH_352",
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
 },
 GraphicFileId: "Model3DHandleDesign20_352",
 ColorId: "StainlessSteel",
 DimensionX: 392,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1395,
 in_Model3DGroupName: "Model3d_RH_448",
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
 },
 GraphicFileId: "Model3DHandleDesign20_448",
 ColorId: "StainlessSteel",
 DimensionX: 488,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1396,
 in_Model3DGroupName: "Model3d_RH_560",
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
 },
 GraphicFileId: "Model3DHandleDesign20_560",
 ColorId: "StainlessSteel",
 DimensionX: 600,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1397,
 in_Model3DGroupName: "Model3d_RH_660",
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
 },
 GraphicFileId: "Model3DHandleDesign20_660",
 ColorId: "StainlessSteel",
 DimensionX: 700,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1398,
 in_Model3DGroupName: "Model3d_RH_760",
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
 },
 GraphicFileId: "Model3DHandleDesign20_760",
 ColorId: "StainlessSteel",
 DimensionX: 800,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1399,
 in_Model3DGroupName: "Model3d_RH_96",
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
 },
 GraphicFileId: "Model3DHandleDesign20_96",
 ColorId: "StainlessSteel",
 DimensionX: 136,
 DimensionY: 10,
 DimensionZ: 35,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1400,
 in_Model3DGroupName: "Model3d_DH60_Black_128",
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
 },
 GraphicFileId: "Model3DHandleDesign60_128",
 ColorId: "Black",
 DimensionX: 139,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1401,
 in_Model3DGroupName: "Model3d_DH60_Black_160",
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
 },
 GraphicFileId: "Model3DHandleDesign60_160",
 ColorId: "Black",
 DimensionX: 171,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1402,
 in_Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_128",
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
 },
 GraphicFileId: "Model3DHandleDesign60_128",
 ColorId: "BrassPlatedAntique",
 DimensionX: 139,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1403,
 in_Model3DGroupName: "Model3d_DH60_BrassPlatedAntique_160",
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
 },
 GraphicFileId: "Model3DHandleDesign60_160",
 ColorId: "BrassPlatedAntique",
 DimensionX: 171,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1404,
 in_Model3DGroupName: "Model3d_DH60_ChromedPolished_128",
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
 },
 GraphicFileId: "Model3DHandleDesign60_128",
 ColorId: "ChromedPolished",
 DimensionX: 139,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1405,
 in_Model3DGroupName: "Model3d_DH60_ChromedPolished_160",
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
 },
 GraphicFileId: "Model3DHandleDesign60_160",
 ColorId: "ChromedPolished",
 DimensionX: 171,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1406,
 in_Model3DGroupName: "Model3d_DH60_NickelPlated_128",
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
 },
 GraphicFileId: "Model3DHandleDesign60_128",
 ColorId: "NickelPlated",
 DimensionX: 139,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
,{
 _id: 1407,
 in_Model3DGroupName: "Model3d_DH60_NickelPlated_160",
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
 },
 GraphicFileId: "Model3DHandleDesign60_160",
 ColorId: "NickelPlated",
 DimensionX: 171,
 DimensionY: 14.5,
 DimensionZ: 28,
 ReferencePointXYZ: "110",
 InsertionPointX: 0,
 InsertionPointY: 0,
 InsertionPointZ: 0,
 PartOffsetX: 0,
 PartOffsetY: 0,
 PartOffsetZ: 0,
 Visible: true,
 Identifier: "NoIdentifier"
}
];
