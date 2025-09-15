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

export interface cti_tab_PlinthAreaMapping {
  readonly in_MatrixPositionType : number;
  readonly in_PlinthAreaDesign? : string;
  readonly in_PlinthAreaElementColor? : string;
  readonly in_PlinthAreaExtraItem? : string;
  readonly in_PlinthAreaHeightMin : number;
  readonly in_PlinthAreaHeightMax : number;
  readonly in_ShelfBtmThkMin : number;
  readonly in_ShelfBtmThkMax : number;
}

export interface ctm_tab_PlinthAreaMapping {
}

export interface cto_tab_PlinthAreaMapping extends ctm_tab_PlinthAreaMapping {
  readonly _id : number;
  readonly Object? : string;
}

export interface ICT_tab_PlinthAreaMapping
extends cti_tab_PlinthAreaMapping, cto_tab_PlinthAreaMapping {}

export class ct2_tab_PlinthAreaMapping {

public findExactly(
     in_MatrixPositionType: number,
     in_PlinthAreaDesign: string|undefined,
     in_PlinthAreaElementColor: string|undefined,
     in_PlinthAreaExtraItem: string|undefined,
     in_PlinthAreaHeightMin: number,
     in_PlinthAreaHeightMax: number,
     in_ShelfBtmThkMin: number,
     in_ShelfBtmThkMax: number,
): cto_tab_PlinthAreaMapping | undefined {
  const res = ct_tab_PlinthAreaMapping.find((p) => 
p.in_MatrixPositionType === in_MatrixPositionType
 && p.in_PlinthAreaDesign === in_PlinthAreaDesign
 && p.in_PlinthAreaElementColor === in_PlinthAreaElementColor
 && p.in_PlinthAreaExtraItem === in_PlinthAreaExtraItem
 && p.in_PlinthAreaHeightMin === in_PlinthAreaHeightMin
 && p.in_PlinthAreaHeightMax === in_PlinthAreaHeightMax
 && p.in_ShelfBtmThkMin === in_ShelfBtmThkMin
 && p.in_ShelfBtmThkMax === in_ShelfBtmThkMax
);
return res;
}

public find(
predicate: (value: cti_tab_PlinthAreaMapping) => boolean
): cto_tab_PlinthAreaMapping | undefined {
  for (let index = 0; index < ct_tab_PlinthAreaMapping.length; index++){
    const element = ct_tab_PlinthAreaMapping[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_PlinthAreaMapping :ICT_tab_PlinthAreaMapping[] = [
{
 _id: 254,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 50,
 in_PlinthAreaHeightMax: 50,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H50"
}
,{
 _id: 255,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 50,
 in_PlinthAreaHeightMax: 50,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H50"
}
,{
 _id: 256,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 50,
 in_PlinthAreaHeightMax: 50,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H50"
}
,{
 _id: 257,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 50,
 in_PlinthAreaHeightMax: 50,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H50"
}
,{
 _id: 258,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 50,
 in_PlinthAreaHeightMax: 50,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H50"
}
,{
 _id: 259,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H100"
}
,{
 _id: 260,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 80,
 in_PlinthAreaHeightMax: 80,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H80"
}
,{
 _id: 261,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 80,
 in_PlinthAreaHeightMax: 80,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H80"
}
,{
 _id: 262,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 80,
 in_PlinthAreaHeightMax: 80,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H80"
}
,{
 _id: 263,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 80,
 in_PlinthAreaHeightMax: 80,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H80"
}
,{
 _id: 264,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 80,
 in_PlinthAreaHeightMax: 80,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H80"
}
,{
 _id: 265,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H100"
}
,{
 _id: 266,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H100"
}
,{
 _id: 267,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H100"
}
,{
 _id: 268,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H100"
}
,{
 _id: 269,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H150"
}
,{
 _id: 270,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H150"
}
,{
 _id: 271,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H150"
}
,{
 _id: 272,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H150"
}
,{
 _id: 273,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H150"
}
,{
 _id: 274,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 200,
 in_PlinthAreaHeightMax: 200,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H200"
}
,{
 _id: 275,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 200,
 in_PlinthAreaHeightMax: 200,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H200"
}
,{
 _id: 276,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 200,
 in_PlinthAreaHeightMax: 200,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H200"
}
,{
 _id: 277,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 200,
 in_PlinthAreaHeightMax: 200,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H200"
}
,{
 _id: 278,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "20",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 200,
 in_PlinthAreaHeightMax: 200,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegRectangular001H200"
}
,{
 _id: 279,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH100DrillBack"
}
,{
 _id: 280,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH100DrillBack"
}
,{
 _id: 281,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH100"
}
,{
 _id: 282,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH100"
}
,{
 _id: 283,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH100"
}
,{
 _id: 284,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH120"
}
,{
 _id: 285,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH120"
}
,{
 _id: 286,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH120"
}
,{
 _id: 287,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH120"
}
,{
 _id: 288,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH120"
}
,{
 _id: 289,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH150"
}
,{
 _id: 290,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH150"
}
,{
 _id: 291,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH150"
}
,{
 _id: 292,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH150"
}
,{
 _id: 293,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "30",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegTriangularPressH150"
}
,{
 _id: 294,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 295,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 296,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 297,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 298,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 299,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH120"
}
,{
 _id: 300,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH120"
}
,{
 _id: 301,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH120"
}
,{
 _id: 302,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH120"
}
,{
 _id: 303,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 120,
 in_PlinthAreaHeightMax: 120,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH120"
}
,{
 _id: 304,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH150"
}
,{
 _id: 305,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH150"
}
,{
 _id: 306,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH150"
}
,{
 _id: 307,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH150"
}
,{
 _id: 308,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 150,
 in_PlinthAreaHeightMax: 150,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH150"
}
,{
 _id: 309,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "50",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 250,
 in_PlinthAreaHeightMax: 250,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegSlanted001H250"
}
,{
 _id: 310,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "50",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 250,
 in_PlinthAreaHeightMax: 250,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegSlanted001H250"
}
,{
 _id: 311,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "50",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 250,
 in_PlinthAreaHeightMax: 250,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegSlanted001H250"
}
,{
 _id: 312,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "50",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 250,
 in_PlinthAreaHeightMax: 250,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegSlanted001H250"
}
,{
 _id: 313,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "50",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "None",
 in_PlinthAreaHeightMin: 250,
 in_PlinthAreaHeightMax: 250,
 in_ShelfBtmThkMin: 18.8,
 in_ShelfBtmThkMax: 99,
 Object: "DesignLegSlanted001H250"
}
,{
 _id: 314,
 in_MatrixPositionType: 11,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "NoiseReduction",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 315,
 in_MatrixPositionType: 13,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "NoiseReduction",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 316,
 in_MatrixPositionType: 31,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "NoiseReduction",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 317,
 in_MatrixPositionType: 32,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "NoiseReduction",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
,{
 _id: 318,
 in_MatrixPositionType: 33,
 in_PlinthAreaDesign: "40",
 in_PlinthAreaElementColor: "Fixed",
 in_PlinthAreaExtraItem: "NoiseReduction",
 in_PlinthAreaHeightMin: 100,
 in_PlinthAreaHeightMax: 100,
 in_ShelfBtmThkMin: 14.8,
 in_ShelfBtmThkMax: 99,
 Object: "PlinthLegRectangularScrewH100"
}
];
