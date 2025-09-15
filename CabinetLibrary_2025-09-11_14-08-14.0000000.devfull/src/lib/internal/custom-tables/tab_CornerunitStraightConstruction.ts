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
import { ITableParents_mc_CornerunitStraight01 } from '../var-interfaces';

export interface cti_tab_CornerunitStraightConstruction {
  readonly in_ConstructionType? : string;
  readonly in_Direction? : string;
  readonly in_Part? : string;
  readonly in_FingergripTop? : boolean;
}

export interface ctm_tab_CornerunitStraightConstruction {
  readonly matrix_EdgeTypeFront? : string;
  readonly matrix_EdgeTypeLeft? : string;
  readonly matrix_EdgeTypeBack? : string;
  readonly matrix_EdgeTypeRight? : string;
  readonly matrix_EdgeJointType? : string;
}

export interface cto_tab_CornerunitStraightConstruction extends ctm_tab_CornerunitStraightConstruction {
  readonly _id : number;
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number;
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number;
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number;
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number;
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number;
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number;
}

export interface ICT_tab_CornerunitStraightConstruction
extends cti_tab_CornerunitStraightConstruction, cto_tab_CornerunitStraightConstruction {}

export class ct2_tab_CornerunitStraightConstruction {

public findExactly(
     in_ConstructionType: string|undefined,
     in_Direction: string|undefined,
     in_Part: string|undefined,
     in_FingergripTop: boolean|undefined,
): cto_tab_CornerunitStraightConstruction | undefined {
  const res = ct_tab_CornerunitStraightConstruction.find((p) => 
p.in_ConstructionType === in_ConstructionType
 && p.in_Direction === in_Direction
 && p.in_Part === in_Part
 && p.in_FingergripTop === in_FingergripTop
);
return res;
}

public find(
predicate: (value: cti_tab_CornerunitStraightConstruction) => boolean
): cto_tab_CornerunitStraightConstruction | undefined {
  for (let index = 0; index < ct_tab_CornerunitStraightConstruction.length; index++){
    const element = ct_tab_CornerunitStraightConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_CornerunitStraightConstruction :ICT_tab_CornerunitStraightConstruction[] = [
{
 _id: 1,
 in_ConstructionType: "Construction01",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 2,
 in_ConstructionType: "Construction01",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 3,
 in_ConstructionType: "Construction01",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 4,
 in_ConstructionType: "Construction01",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 5,
 in_ConstructionType: "Construction02",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 6,
 in_ConstructionType: "Construction02",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 7,
 in_ConstructionType: "Construction02",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 8,
 in_ConstructionType: "Construction02",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 9,
 in_ConstructionType: "Construction03",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition - m.g.basic_BlindCornerHingeSpace;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 10,
 in_ConstructionType: "Construction03",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth - m.g.basic_BlindCornerHingeSpace;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth + m.g.basic_BlindCornerHingeSpace;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 11,
 in_ConstructionType: "Construction04",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition - m.mod_SidepanelmiddleThk/2;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 12,
 in_ConstructionType: "Construction04",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 13,
 in_ConstructionType: "Construction04",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth + m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 14,
 in_ConstructionType: "Construction04",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 15,
 in_ConstructionType: "Construction05",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition - m.mod_SidepanelmiddleThk/2 + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 16,
 in_ConstructionType: "Construction05",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 17,
 in_ConstructionType: "Construction05",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2 + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth + m.mod_SidepanelmiddleThk/2 - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 18,
 in_ConstructionType: "Construction05",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: false,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 19,
 in_ConstructionType: "Construction01",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 20,
 in_ConstructionType: "Construction01",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 21,
 in_ConstructionType: "Construction01",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 22,
 in_ConstructionType: "Construction01",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 23,
 in_ConstructionType: "Construction02",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 24,
 in_ConstructionType: "Construction02",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 25,
 in_ConstructionType: "Construction02",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 26,
 in_ConstructionType: "Construction02",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 27,
 in_ConstructionType: "Construction03",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition - m.g.basic_BlindCornerHingeSpace;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 28,
 in_ConstructionType: "Construction03",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth - m.g.basic_BlindCornerHingeSpace;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth + m.g.basic_BlindCornerHingeSpace;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 29,
 in_ConstructionType: "Construction04",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition - m.mod_SidepanelmiddleThk/2;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 30,
 in_ConstructionType: "Construction04",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 31,
 in_ConstructionType: "Construction04",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth + m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 32,
 in_ConstructionType: "Construction04",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 33,
 in_ConstructionType: "Construction05",
 in_Direction: "Left",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - HorizontalStartPosition - m.mod_SidepanelmiddleThk/2 + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalStartPosition - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 34,
 in_ConstructionType: "Construction05",
 in_Direction: "Left",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
,{
 _id: 35,
 in_ConstructionType: "Construction05",
 in_Direction: "Right",
 in_Part: "part_Panelblind",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return HorizontalFreeSpace + HorizontalStartPosition - m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2 + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_PanelblindThk;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth + m.mod_SidepanelmiddleThk/2 - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_PanelblindPos - m.mod_PanelblindThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 36,
 in_ConstructionType: "Construction05",
 in_Direction: "Right",
 in_Part: "part_Sidepanelmiddle",
 in_FingergripTop: true,
  Width(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleThk;
  }
,
  Height(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalFreeSpace - m.mod_FingergripType_matrix.LShapeHeight!;
  }
,
  Depth(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_SidepanelmiddleShortWidth;
  }
,
  WidthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return m.mod_CornerunitFrontWidth - m.mod_SidepanelmiddleThk/2;
  }
,
  HeightPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return VerticalStartPosition;
  }
,
  DepthPos(m: ITableParents_mc_CornerunitStraight01,HorizontalFreeSpace: number,VerticalFreeSpace: number,DepthFreeSpace: number,HorizontalStartPosition: number,VerticalStartPosition: number, DepthStartPosition: number):number {
    return DepthStartPosition + DepthFreeSpace - m.g.basic_OffsetFrontVertDivider- m.mod_SidepanelmiddleShortWidth;
  }
,
 matrix_EdgeTypeFront: "CFE",
 matrix_EdgeTypeLeft: "DOW",
 matrix_EdgeTypeBack: "ICN",
 matrix_EdgeTypeRight: "DOW",
 matrix_EdgeJointType: "II"
}
];
