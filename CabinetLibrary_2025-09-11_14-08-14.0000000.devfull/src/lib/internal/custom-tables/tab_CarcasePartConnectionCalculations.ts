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

export interface cti_tab_CarcasePartConnectionCalculations {
  readonly in_DrillType? : string;
  readonly in_PartType? : string;
  readonly in_DrillingArea? : string;
  readonly in_TouchDirection? : string;
  readonly in_InsideDirection? : string;
  readonly in_HardwarePosition? : string;
  readonly in_FallingDirection? : string;
  readonly in_ConnectionOrientation? : string;
}

export interface ctm_tab_CarcasePartConnectionCalculations {
}

export interface cto_tab_CarcasePartConnectionCalculations extends ctm_tab_CarcasePartConnectionCalculations {
  readonly _id : number;
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number;
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number;
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number;
  GraphicDimX(drillData: any):number;
  GraphicDimY(drillData: any):number;
  GraphicDimZ(drillData: any):number;
  readonly GraphicExtrusion? : string;
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number;
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number;
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number;
  readonly DrillDirection? : string;
  readonly NcSide? : string;
}

export interface ICT_tab_CarcasePartConnectionCalculations
extends cti_tab_CarcasePartConnectionCalculations, cto_tab_CarcasePartConnectionCalculations {}

export class ct2_tab_CarcasePartConnectionCalculations {

public findExactly(
     in_DrillType: string|undefined,
     in_PartType: string|undefined,
     in_DrillingArea: string|undefined,
     in_TouchDirection: string|undefined,
     in_InsideDirection: string|undefined,
     in_HardwarePosition: string|undefined,
     in_FallingDirection: string|undefined,
     in_ConnectionOrientation: string|undefined,
): cto_tab_CarcasePartConnectionCalculations | undefined {
  const res = ct_tab_CarcasePartConnectionCalculations.find((p) => 
p.in_DrillType === in_DrillType
 && p.in_PartType === in_PartType
 && p.in_DrillingArea === in_DrillingArea
 && p.in_TouchDirection === in_TouchDirection
 && p.in_InsideDirection === in_InsideDirection
 && p.in_HardwarePosition === in_HardwarePosition
 && p.in_FallingDirection === in_FallingDirection
 && p.in_ConnectionOrientation === in_ConnectionOrientation
);
return res;
}

public find(
predicate: (value: cti_tab_CarcasePartConnectionCalculations) => boolean
): cto_tab_CarcasePartConnectionCalculations | undefined {
  for (let index = 0; index < ct_tab_CarcasePartConnectionCalculations.length; index++){
    const element = ct_tab_CarcasePartConnectionCalculations[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_CarcasePartConnectionCalculations :ICT_tab_CarcasePartConnectionCalculations[] = [
{
 _id: 190,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 191,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 192,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 193,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 194,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 195,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 196,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 197,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 198,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 199,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 200,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 201,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 202,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YP",
 NcSide: "Top"
}
,{
 _id: 203,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 204,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 205,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 206,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 207,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 208,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 209,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 210,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 211,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : touchWidth + posRel.z - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YP",
 NcSide: "Top"
}
,{
 _id: 212,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 213,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 214,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 215,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 216,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 217,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 218,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 219,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : touchWidth + posRel.z - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YP",
 NcSide: "Top"
}
,{
 _id: 220,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 221,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 222,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : touchWidth + posRel.z - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YM",
 NcSide: "Top"
}
,{
 _id: 223,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 224,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YP",
 NcSide: "Top"
}
,{
 _id: 225,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YM",
 NcSide: "Top"
}
,{
 _id: 226,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 227,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 228,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 229,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : touchWidth + posRel.z - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YM",
 NcSide: "Top"
}
,{
 _id: 230,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 231,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 232,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 233,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 234,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 235,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YM",
 NcSide: "Top"
}
,{
 _id: 236,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx - posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 237,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 238,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YM",
 NcSide: "Top"
}
,{
 _id: 239,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 240,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 241,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 242,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 243,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 244,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 245,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 246,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 247,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 248,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 249,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YP",
 NcSide: "Top"
}
,{
 _id: 250,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 251,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 252,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 253,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 254,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 255,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 256,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 257,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 258,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 259,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 260,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 261,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YM",
 NcSide: "Top"
}
,{
 _id: 262,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 263,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "YP",
 NcSide: "Top"
}
,{
 _id: 264,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 265,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 266,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 267,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 268,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 269,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 270,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 271,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 272,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 273,
 in_DrillType: "DrillHorizontal",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
 DrillDirection: "XP",
 NcSide: "Top"
}
,{
 _id: 274,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 275,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 276,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 277,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 278,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 279,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 280,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 281,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 282,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 283,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 284,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 285,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 286,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 287,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 288,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 289,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 290,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 291,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Back",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 292,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 293,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 294,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 295,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 296,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 297,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 298,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 299,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 300,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 301,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 302,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 303,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 304,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 305,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 306,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 307,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 308,
 in_DrillType: "DrillHorizontal",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimx;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
 DrillDirection: "XM",
 NcSide: "Top"
}
,{
 _id: 309,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Back",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 310,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 311,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 312,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 313,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 314,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 315,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 316,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 317,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Front",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 318,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 319,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 320,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 321,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 322,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 323,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 324,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 325,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 326,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 327,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 328,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 329,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 330,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 331,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 332,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 333,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 334,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 335,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 336,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 337,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 338,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 339,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 340,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 341,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 342,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 343,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 344,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 345,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 346,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 347,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 348,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchWidth - widthPosition;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 349,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + part2._dimy - widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 350,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 351,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 352,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 353,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 354,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 355,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 356,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 357,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 358,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Back",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 359,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 360,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 361,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 362,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 363,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 364,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 365,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Top",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 366,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Left",
 in_TouchDirection: "Left",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 367,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "BackFront",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? position : posRel.z + position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 368,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Top",
 in_TouchDirection: "Top",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.XA;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimz - drillData.TI;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 369,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Bottom",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 370,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 371,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Back",
 in_ConnectionOrientation: "RightLeft",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x + touchLength - position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 372,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Front",
 in_TouchDirection: "Top",
 in_InsideDirection: "Bottom",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "LeftRight",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.x +position;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 373,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Back",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 374,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Bottom",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Outside",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + widthPosition;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 375,
 in_DrillType: "DrillVertical",
 in_PartType: "Shelf",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Top",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "None",
 in_ConnectionOrientation: "FrontBack",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimy - drillData.TI;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchLength - position : posRel.z + touchLength - position;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "y",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 376,
 in_DrillType: "DrillVertical",
 in_PartType: "PanelVertical",
 in_DrillingArea: "Right",
 in_TouchDirection: "Right",
 in_InsideDirection: "Back",
 in_HardwarePosition: "Inside",
 in_FallingDirection: "Front",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.XA;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.TI;
  }
,
 GraphicExtrusion: "z",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posX;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 377,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Back",
 in_TouchDirection: "Right",
 in_InsideDirection: "Right",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 378,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Back",
 in_TouchDirection: "Left",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Right",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return 0;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? touchWidth - widthPosition : posRel.z + touchWidth - widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
,{
 _id: 379,
 in_DrillType: "DrillVertical",
 in_PartType: "Sidepanel",
 in_DrillingArea: "Front",
 in_TouchDirection: "Right",
 in_InsideDirection: "Left",
 in_HardwarePosition: "Ignore",
 in_FallingDirection: "Left",
 in_ConnectionOrientation: "TopBottom",
  GraphicPosX(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return partSelf._dimx - drillData.TI;
  }
,
  GraphicPosY(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.y + touchLength - position;
  }
,
  GraphicPosZ(partSelf: any, part2: any, posRel: any, drillData: any, widthPosition: number, position: number, touchLength: number, touchWidth: number):number {
    return posRel.z <= 0 ? widthPosition : posRel.z + widthPosition;
  }
,
  GraphicDimX(drillData: any):number {
    return drillData.TI;
  }
,
  GraphicDimY(drillData: any):number {
    return drillData.DU;
  }
,
  GraphicDimZ(drillData: any):number {
    return drillData.DU;
  }
,
 GraphicExtrusion: "x",
  NcPosX(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimy - posY;
  }
,
  NcPosY(partSelf: any, posX: number, posY: number, posZ:number):number {
    return partSelf._dimz - posZ;
  }
,
  NcPosZ(partSelf: any, posX: number, posY: number, posZ:number):number {
    return 0;
  }
,
 DrillDirection: "Ignore",
 NcSide: "Top"
}
];
