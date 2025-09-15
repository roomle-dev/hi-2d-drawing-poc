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

export interface cti_tab_CarcaseStorageunitConstruction {
  readonly in_Part? : string;
  readonly in_LeftTop? : string;
  readonly in_LeftBtm? : string;
  readonly in_RightBtm? : string;
  readonly in_RightTop? : string;
  readonly in_PartBack? : string;
  readonly in_PartFront? : string;
  readonly in_Visible? : boolean;
  readonly in_AdditionalInfo01? : string;
}

export interface ctm_tab_CarcaseStorageunitConstruction {
}

export interface cto_tab_CarcaseStorageunitConstruction extends ctm_tab_CarcaseStorageunitConstruction {
  readonly _id : number;
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number;
  Height(m: ITableParents_mc_Storageunit01,Height: number):number;
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number;
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number;
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number;
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number;
  readonly EdgeTypeFront? : string;
  readonly EdgeTypeLeft? : string;
  readonly EdgeTypeBack? : string;
  readonly EdgeTypeRight? : string;
  readonly EdgeJointType? : string;
}

export interface ICT_tab_CarcaseStorageunitConstruction
extends cti_tab_CarcaseStorageunitConstruction, cto_tab_CarcaseStorageunitConstruction {}

export class ct2_tab_CarcaseStorageunitConstruction {

public findExactly(
     in_Part: string|undefined,
     in_LeftTop: string|undefined,
     in_LeftBtm: string|undefined,
     in_RightBtm: string|undefined,
     in_RightTop: string|undefined,
     in_PartBack: string|undefined,
     in_PartFront: string|undefined,
     in_Visible: boolean|undefined,
     in_AdditionalInfo01: string|undefined,
): cto_tab_CarcaseStorageunitConstruction | undefined {
  const res = ct_tab_CarcaseStorageunitConstruction.find((p) => 
p.in_Part === in_Part
 && p.in_LeftTop === in_LeftTop
 && p.in_LeftBtm === in_LeftBtm
 && p.in_RightBtm === in_RightBtm
 && p.in_RightTop === in_RightTop
 && p.in_PartBack === in_PartBack
 && p.in_PartFront === in_PartFront
 && p.in_Visible === in_Visible
 && p.in_AdditionalInfo01 === in_AdditionalInfo01
);
return res;
}

public find(
predicate: (value: cti_tab_CarcaseStorageunitConstruction) => boolean
): cto_tab_CarcaseStorageunitConstruction | undefined {
  for (let index = 0; index < ct_tab_CarcaseStorageunitConstruction.length; index++){
    const element = ct_tab_CarcaseStorageunitConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_CarcaseStorageunitConstruction :ICT_tab_CarcaseStorageunitConstruction[] = [
{
 _id: 1259,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1260,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1261,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1262,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack + m.mod_FingergripType_matrix.LShapeDepth!);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1263,
 in_Part: "part_Railhortopfront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_RailhortopfrontThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopfrontDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_RailhortopfrontThk - m.g.basic_RailhortopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_RailhortopfrontOffsetFront - m.g.basic_RailhortopfrontDepth;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1264,
 in_Part: "part_Railhortopfront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_RailhortopfrontThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopfrontDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_RailhortopfrontThk - m.g.basic_RailhortopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_RailhortopfrontOffsetFront - m.g.basic_RailhortopfrontDepth - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1265,
 in_Part: "part_Railhortopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_RailhortopbackThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopbackDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopbackOffsetBack;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1266,
 in_Part: "part_Railhortopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_RailhortopbackThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopbackDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopbackOffsetBack;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1267,
 in_Part: "part_Railverttopfront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopfrontHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopfrontThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopfrontHeight - m.g.basic_RailverttopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1268,
 in_Part: "part_Railverttopfront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return Height;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopfrontThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1269,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1270,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1271,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1272,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1273,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.mod_FingergripType_matrix.LShapeDepth! - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1274,
 in_Part: "part_Railhortopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_RailhortopbackThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailhortopbackDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_RailhortopbackThk - m.g.basic_RailhortopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1275,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1276,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1277,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm - m.g.basic_ShelftopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1278,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1279,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1280,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1281,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm - m.g.basic_ShelftopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.g.basic_SidepanelOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1282,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1283,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1284,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1285,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelrightOversizeTop - m.g.basic_ShelfbtmOffsetBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk+m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VI"
}
,{
 _id: 1286,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1287,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1288,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1289,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1290,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk - m.g.basic_ShelftopOffsetTop - m.g.basic_ShelfbtmOffsetBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1291,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1292,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1293,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1294,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_ShelftopOffsetTop - m.g.basic_ShelfbtmOffsetBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "MIT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "MM"
}
,{
 _id: 1295,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "IM"
}
,{
 _id: 1296,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "IM"
}
,{
 _id: 1297,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1298,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1299,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1300,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1301,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk + m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1302,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1303,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop + m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1304,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1305,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return  - m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1306,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1307,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VI"
}
,{
 _id: 1308,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1309,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1310,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1311,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1312,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1313,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1314,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1315,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1316,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_ShelftopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "MIT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "MM"
}
,{
 _id: 1317,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "IM"
}
,{
 _id: 1318,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "Mitre",
 in_RightTop: "Mitre",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "VM"
}
,{
 _id: 1319,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "VM"
}
,{
 _id: 1320,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "MIT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VM"
}
,{
 _id: 1321,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1322,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1323,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "MIT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "MM"
}
,{
 _id: 1324,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "VM"
}
,{
 _id: 1325,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "MIT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IM"
}
,{
 _id: 1326,
 in_Part: "part_Shelftop",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1327,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "Mitre",
 in_RightBtm: "Mitre",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "MIT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "MIT",
 EdgeJointType: "MM"
}
,{
 _id: 1328,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1329,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeTop + m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1330,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk + m.mod_CarcaseShelftopOversizeLeft;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return  - m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1331,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1332,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1333,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1334,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return  - m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1335,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1336,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1337,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VI"
}
,{
 _id: 1338,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelftopOversizeLeft;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return  - m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_ShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1339,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return  - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1340,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1341,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk - m.g.basic_ShelfbtmOffsetBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack) - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk + m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack + m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1342,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1343,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "IV"
}
,{
 _id: 1344,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1345,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1346,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1347,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1348,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: true,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1349,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: true,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1350,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "n.a.",
 in_RightTop: "n.a.",
 in_PartBack: "n.a.",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1351,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "n.a.",
 in_RightTop: "n.a.",
 in_PartBack: "n.a.",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1352,
 in_Part: "part_Heatshelf",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide*2);
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_HeatshelfThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_HeatshelfOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height - m.g.basic_HeatshelfThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CBE",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CBE",
 EdgeJointType: "II"
}
,{
 _id: 1353,
 in_Part: "part_HeatshelfFront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide*2);
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return Height  - m.g.basic_RailverttopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_HeatshelfFrontThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_HeatshelfFrontThk - m.g.basic_HeatshelfFrontOffsetFront;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CBE",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CBE",
 EdgeJointType: "II"
}
,{
 _id: 1354,
 in_Part: "part_Railverttopfront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "Fixedfront",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return Height + m.g.basic_RailverttopfrontOverdimension - m.g.basic_RailverttopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopfrontThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimension;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1355,
 in_Part: "part_Railverttopfront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "FixedfrontHs",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return Height + m.g.basic_RailverttopfrontOverdimensionHeatshelf - m.g.basic_RailverttopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopfrontThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_RailverttopfrontOffsetFront - m.mod_RailverttopfrontThk;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1356,
 in_Part: "part_Heatshelf",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Fixedfront",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide*2);
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_HeatshelfThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_HeatshelfOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf - m.g.basic_HeatshelfThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CBE",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CBE",
 EdgeJointType: "II"
}
,{
 _id: 1357,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height ;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1358,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Backside",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height ;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition - m.mod_BackwallThk  - m.mod_RailverttopbackThk ;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1359,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Backside",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition - m.mod_BackwallThk  - m.mod_RailverttopbackThk ;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1360,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "FixedfrontHs",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailverttopbackOffsetBack;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1361,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "FixedfrontHs",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1362,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1363,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailverttopbackOffsetBack;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1364,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "n.a.",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - m.g.basic_RailverttopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1365,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "FixedfrontHs",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1366,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "n.a.",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height ;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_RailverttopbackOffsetBack;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1367,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height ;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition - (m.mod_BackwallThk / 2) - (m.mod_RailverttopbackThk / 2);
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1368,
 in_Part: "part_Railverttopback",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Backside",
 in_PartFront: "FixedfrontHs",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_RailverttopbackHeight;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_RailverttopbackThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.g.basic_RailverttopbackHeight - Height - m.g.basic_RailverttopfrontOverdimensionHeatshelf;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition - m.mod_BackwallThk  - m.mod_RailverttopbackThk ;
  }
,
 EdgeTypeFront: "CBE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1369,
 in_Part: "part_Heatshelf",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide*2);
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_HeatshelfThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_HeatshelfOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height - m.g.basic_HeatshelfThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CBE",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CBE",
 EdgeJointType: "II"
}
,{
 _id: 1370,
 in_Part: "part_HeatshelfFront",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - (m.g.basic_HeatshelfOffsetSide*2);
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return Height  - m.g.basic_RailverttopOffsetTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_HeatshelfFrontThk;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_HeatshelfOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - Height;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_HeatshelfFrontThk - m.g.basic_HeatshelfFrontOffsetFront;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CBE",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CBE",
 EdgeJointType: "II"
}
,{
 _id: 1371,
 in_Part: "part_Shelffixed",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "ContactBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1372,
 in_Part: "part_Shelffixed",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "ThroughBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1373,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1374,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_ShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1375,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1376,
 in_Part: "part_Shelftop",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelftopOversizeLeft + m.mod_CarcaseShelftopOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelftopOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1377,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + BackWallPosition);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1378,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1379,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + BackWallPosition);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1380,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1381,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ThroughBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1382,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ContactBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1383,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Mitre",
 in_PartFront: "Mitre",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle-90, 0, m.mod_CarcaseHeight - m.mod_BackHeight, 0)[3];
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_BackHeight;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "DOW",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1384,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Mitre",
 in_PartFront: "Mitre",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle-90, 0, m.mod_CarcaseHeight - m.mod_BackHeight, 0)[3];
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_BackHeight;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "DOW",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1385,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Mitre",
 in_PartFront: "Mitre",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, (m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetBack - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]))), 0, 0)[3];
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_BackHeight - GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle/2, 0, m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack, 0)[1];
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "DOW",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1386,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Mitre",
 in_PartFront: "Mitre",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, (m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetBack - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]))), 0, 0)[3];
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_BackHeight - GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle/2, 0, m.g.basic_SlopedCeilingShelvesOffsetBack, 0)[1];
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "DOW",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1387,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.mod_TopDepth ;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "II"
}
,{
 _id: 1388,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.mod_TopDepth ;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "II"
}
,{
 _id: 1389,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1390,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1391,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.mod_FingergripType_matrix.LShapeDepth! + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1392,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.mod_TopDepth ;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "II"
}
,{
 _id: 1393,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth - m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.mod_TopDepth ;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "II"
}
,{
 _id: 1394,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "SlopedCeilingShelftopAngleMitre",
 in_PartFront: "Fingergrip",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelftopThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.mod_FingergripType_matrix.LShapeDepth! + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.g.basic_SlopedCeilingShelftopOffsetTop;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - (m.mod_TopDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.g.basic_SlopedCeilingShelftopOffsetTop, 0)[1]));
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1395,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1396,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return -m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1397,
 in_Part: "part_Shelffixed",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "ContactBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1398,
 in_Part: "part_Shelffixed",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "ThroughBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1399,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1400,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + BackWallPosition);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1401,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1402,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk - m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + BackWallPosition);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1403,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1404,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1405,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1406,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPB",
 EdgeJointType: "IV"
}
,{
 _id: 1407,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1408,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelftopThk + m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "IV"
}
,{
 _id: 1409,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth + m.mod_CarcaseShelfbtmOversizeLeft + m.mod_CarcaseShelfbtmOversizeRight;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseShelfbtmOversizeLeft;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "CLR",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "CLR",
 EdgeJointType: "VV"
}
,{
 _id: 1410,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "VI"
}
,{
 _id: 1411,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight - m.mod_ShelfbtmThk + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VI"
}
,{
 _id: 1412,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1413,
 in_Part: "part_Shelfbtm",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelfbtmThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.g.basic_SlopedCeilingShelfbtmOffsetBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1414,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ThroughBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1415,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "ShelfCSide",
 in_RightBtm: "ShelfCSide",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ContactBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk + m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1416,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1417,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1418,
 in_Part: "part_Sidepanelleft",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: true,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelleftThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelleftOversizeBtm + m.mod_CarcaseSidepanelleftOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelleftOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPT",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPB",
 EdgeJointType: "VV"
}
,{
 _id: 1419,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1420,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Overlayed",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1421,
 in_Part: "part_Sidepanelright",
 in_LeftTop: "SideCShelf",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "SideCShelf",
 in_PartBack: "Inlayed",
 in_PartFront: "Overlayed",
 in_Visible: true,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_SidepanelrightThk;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_CarcaseHeight + m.mod_CarcaseSidepanelrightOversizeBtm + m.mod_CarcaseSidepanelrightOversizeTop;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelrightThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return  - m.mod_CarcaseSidepanelrightOversizeBtm;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return 0;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "SPB",
 EdgeTypeBack: "CBE",
 EdgeTypeRight: "SPT",
 EdgeJointType: "VV"
}
,{
 _id: 1422,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ContactBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SidepanelOffsetFront - m.g.basic_ShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1423,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ThroughBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "All",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SidepanelOffsetFront + m.g.basic_SidepanelOffsetBack) - (m.g.basic_ShelvesOffsetFront + m.g.basic_ShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SidepanelOffsetBack + m.g.basic_ShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1424,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ContactBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - m.g.basic_SlopedCeilingSidepanelOffsetFront - m.g.basic_SlopedCeilingShelvesOffsetFront - BackWallPosition;
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return BackWallPosition;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
,{
 _id: 1425,
 in_Part: "part_Shelffixed",
 in_LeftTop: "ShelfCSide",
 in_LeftBtm: "SideCShelf",
 in_RightBtm: "SideCShelf",
 in_RightTop: "ShelfCSide",
 in_PartBack: "ThroughBw",
 in_PartFront: "Overlayed",
 in_Visible: false,
 in_AdditionalInfo01: "SlopedCeiling",
  Width(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseWidth - m.mod_SidepanelleftThk - m.g.basic_SlopedCeilingSidepanelOffsetSide - m.mod_SidepanelrightThk - m.g.basic_SlopedCeilingSidepanelOffsetSide;
  }
,
  Height(m: ITableParents_mc_Storageunit01,Height: number):number {
    return m.mod_ShelffixedThk;
  }
,
  Depth(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.mod_CarcaseDepth - (m.g.basic_SlopedCeilingSidepanelOffsetFront + m.g.basic_SlopedCeilingSidepanelOffsetBack) - (m.g.basic_SlopedCeilingShelvesOffsetFront + m.g.basic_SlopedCeilingShelvesOffsetBack);
  }
,
  WidthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetSide + m.mod_SidepanelleftThk;
  }
,
  HeightPos(m: ITableParents_mc_Storageunit01,Height: number):number {
    return 0;
  }
,
  DepthPos(m: ITableParents_mc_Storageunit01,BackWallPosition: number):number {
    return m.g.basic_SlopedCeilingSidepanelOffsetBack + m.g.basic_SlopedCeilingShelvesOffsetBack;
  }
,
 EdgeTypeFront: "CFE",
 EdgeTypeLeft: "DOW",
 EdgeTypeBack: "DOW",
 EdgeTypeRight: "DOW",
 EdgeJointType: "II"
}
];
