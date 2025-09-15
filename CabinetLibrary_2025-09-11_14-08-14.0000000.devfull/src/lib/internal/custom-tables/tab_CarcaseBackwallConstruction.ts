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
import { ITableParents_mc_Storageunit01 } from '../var-interfaces';

export interface cti_tab_CarcaseBackwallConstruction {
  readonly in_BackwallConstruction? : string;
  readonly in_PartLeft? : string;
  readonly in_PartBtm? : string;
  readonly in_PartRight? : string;
  readonly in_PartTop? : string;
  readonly in_Visible? : boolean;
}

export interface ctm_tab_CarcaseBackwallConstruction {
  readonly matrix_EdgeTypeFront? : string;
  readonly matrix_EdgeTypeLeft? : string;
  readonly matrix_EdgeTypeBack? : string;
  readonly matrix_EdgeTypeRight? : string;
  readonly matrix_EdgeJointType? : string;
}

export interface cto_tab_CarcaseBackwallConstruction extends ctm_tab_CarcaseBackwallConstruction {
  readonly _id : number;
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number;
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number;
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number;
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number;
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number;
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number;
}

export interface ICT_tab_CarcaseBackwallConstruction
extends cti_tab_CarcaseBackwallConstruction, cto_tab_CarcaseBackwallConstruction {}

export class ct2_tab_CarcaseBackwallConstruction {

public findExactly(
     in_BackwallConstruction: string|undefined,
     in_PartLeft: string|undefined,
     in_PartBtm: string|undefined,
     in_PartRight: string|undefined,
     in_PartTop: string|undefined,
     in_Visible: boolean|undefined,
): cto_tab_CarcaseBackwallConstruction | undefined {
  const res = ct_tab_CarcaseBackwallConstruction.find((p) => 
p.in_BackwallConstruction === in_BackwallConstruction
 && p.in_PartLeft === in_PartLeft
 && p.in_PartBtm === in_PartBtm
 && p.in_PartRight === in_PartRight
 && p.in_PartTop === in_PartTop
 && p.in_Visible === in_Visible
);
return res;
}

public find(
predicate: (value: cti_tab_CarcaseBackwallConstruction) => boolean
): cto_tab_CarcaseBackwallConstruction | undefined {
  for (let index = 0; index < ct_tab_CarcaseBackwallConstruction.length; index++){
    const element = ct_tab_CarcaseBackwallConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_CarcaseBackwallConstruction :ICT_tab_CarcaseBackwallConstruction[] = [
{
 _id: 764,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 765,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 766,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 767,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 768,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 769,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 770,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 771,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 772,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 773,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 774,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 775,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 776,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 777,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 778,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 779,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 780,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 781,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 782,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 783,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 784,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 785,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 786,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 787,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 788,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 789,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 790,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 791,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 792,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 793,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 794,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 795,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 796,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 797,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 798,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 799,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 800,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 801,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 802,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 803,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 804,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 805,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 806,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 807,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 808,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 809,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 810,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 811,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 812,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 813,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 814,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 815,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 816,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 817,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 818,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 819,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 820,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 821,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 822,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 823,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 824,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 825,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 826,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 827,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 828,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 829,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 830,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 831,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 832,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 833,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 834,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 835,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 836,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 837,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 838,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 839,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 840,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 841,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 842,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 843,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 844,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 845,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 846,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 847,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 848,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 849,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 850,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 851,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 852,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 853,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 854,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 855,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 856,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 857,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 858,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 859,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 860,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 861,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 862,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "NoSp",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 863,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 864,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 865,
 in_BackwallConstruction: "Inlayed_T",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingBackwallOverlayedReductionVertLeft - m.g.basic_SlopedCeilingBackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_SlopedCeilingBackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 866,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 867,
 in_BackwallConstruction: "Inlayed_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 868,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 869,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 870,
 in_BackwallConstruction: "Grooved_LBR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 871,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 872,
 in_BackwallConstruction: "Grooved_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 873,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 874,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 875,
 in_BackwallConstruction: "Grooved_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 876,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 877,
 in_BackwallConstruction: "Grooved_LRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "IV"
}
,{
 _id: 878,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 879,
 in_BackwallConstruction: "Inlayed_LBRF",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.mod_BackwallFixedHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VI"
}
,{
 _id: 880,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 881,
 in_BackwallConstruction: "NoBackwall",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 882,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 883,
 in_BackwallConstruction: "Overlayed",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.mod_SidepanelleftThk + m.mod_SidepanelrightThk - m.g.basic_BackwallOverlayedReductionVertLeft - m.g.basic_BackwallOverlayedReductionVertRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_SidepanelleftThk + m.g.basic_BackwallOverlayedReductionVertLeft;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 884,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 885,
 in_BackwallConstruction: "Removable",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace - m.g.basic_BackwallRemovableGapVert - m.g.basic_BackwallRemovableGapVert;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace - m.g.basic_BackwallRemovableGapHor - m.g.basic_BackwallRemovableGapHor;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapVert;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return m.g.basic_BackwallRemovableGapHor;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "CBE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "CBE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 886,
 in_BackwallConstruction: "Grooved_LBRT",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "NoSp",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace + m.g.basic_BackwallGrooveDepthVertOutside + m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthVertOutside;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.g.basic_BackwallGrooveDepthHorOutside;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "NOE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "NOE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "II"
}
,{
 _id: 887,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 888,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 889,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 890,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 891,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 892,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "FixedShelf",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelffixedThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 893,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "n.a.",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 894,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackHorizontal",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_RailhortopbackThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 895,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "RailBackVertical",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.g.basic_RailverttopbackHeight - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 896,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "ShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 897,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "ShelfBtm",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelfbtmThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelfbtmThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
,{
 _id: 898,
 in_BackwallConstruction: "Inlayed_LR",
 in_PartLeft: "LeftSidePanel",
 in_PartBtm: "FixedShelf",
 in_PartRight: "RightSidePanel",
 in_PartTop: "SlopedCeilingShelfTop",
 in_Visible: false,
  Width(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return HorizontalFreeSpace;
  }
,
  Height(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return VerticalFreeSpace + m.mod_ShelffixedThk + m.mod_ShelftopThk - m.g.basic_BackwallOverlayedReductionHorTop - m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackwallThk;
  }
,
  WidthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return 0;
  }
,
  HeightPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return  - m.mod_ShelffixedThk + m.g.basic_BackwallOverlayedReductionHorBtm;
  }
,
  DepthPosition(m: ITableParents_mc_Storageunit01,HorizontalFreeSpace: number,VerticalFreeSpace: number,BackWallPosition: number, BackwallThk: number):number {
    return BackWallPosition - BackwallThk;
  }
,
 matrix_EdgeTypeFront: "CBE",
 matrix_EdgeTypeLeft: "NOE",
 matrix_EdgeTypeBack: "CBE",
 matrix_EdgeTypeRight: "NOE",
 matrix_EdgeJointType: "VV"
}
];
