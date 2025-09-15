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

export interface cti_tab_DoorSettings {
  readonly in_CabinetType? : string;
  readonly in_TypeElement? : string;
  readonly in_CarcaseDirection? : string;
  readonly in_FrontDesign? : string;
  readonly in_FrontColor? : string;
  readonly in_WidthMin : number;
  readonly in_WidthMax : number;
  readonly in_DoorType? : string;
  readonly in_DoorDirection? : string;
  readonly in_VertDivider? : string;
}

export interface ctm_tab_DoorSettings {
}

export interface cto_tab_DoorSettings extends ctm_tab_DoorSettings {
  readonly _id : number;
  readonly DoorQty : number;
  readonly FirstDoorDirection? : string;
  readonly SecondDoorDirection? : string;
  readonly VertDividerType? : string;
  readonly FrontDescriptor? : string;
}

export interface ICT_tab_DoorSettings
extends cti_tab_DoorSettings, cto_tab_DoorSettings {}

export class ct2_tab_DoorSettings {

public findExactly(
     in_CabinetType: string|undefined,
     in_TypeElement: string|undefined,
     in_CarcaseDirection: string|undefined,
     in_FrontDesign: string|undefined,
     in_FrontColor: string|undefined,
     in_WidthMin: number,
     in_WidthMax: number,
     in_DoorType: string|undefined,
     in_DoorDirection: string|undefined,
     in_VertDivider: string|undefined,
): cto_tab_DoorSettings | undefined {
  const res = ct_tab_DoorSettings.find((p) => 
p.in_CabinetType === in_CabinetType
 && p.in_TypeElement === in_TypeElement
 && p.in_CarcaseDirection === in_CarcaseDirection
 && p.in_FrontDesign === in_FrontDesign
 && p.in_FrontColor === in_FrontColor
 && p.in_WidthMin === in_WidthMin
 && p.in_WidthMax === in_WidthMax
 && p.in_DoorType === in_DoorType
 && p.in_DoorDirection === in_DoorDirection
 && p.in_VertDivider === in_VertDivider
);
return res;
}

public find(
predicate: (value: cti_tab_DoorSettings) => boolean
): cto_tab_DoorSettings | undefined {
  for (let index = 0; index < ct_tab_DoorSettings.length; index++){
    const element = ct_tab_DoorSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_DoorSettings :ICT_tab_DoorSettings[] = [
{
 _id: 154,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 155,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 156,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 157,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Left",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 158,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Right",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 159,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 160,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Left",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 161,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Right",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 162,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 163,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 164,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 165,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Left",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 166,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Right",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 167,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 168,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 169,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 170,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 171,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 172,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 173,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 174,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Left",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 175,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Right",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 176,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 177,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 178,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 179,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 180,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 181,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 182,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 183,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 184,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 185,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 186,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 187,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 188,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 189,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 190,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "RightRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 191,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 192,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 193,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 194,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 195,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 196,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 197,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 198,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Single",
 in_DoorDirection: "Left",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 199,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Single",
 in_DoorDirection: "Right",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 200,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 201,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 202,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 203,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 204,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 205,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 206,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 207,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 208,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 209,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 210,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 211,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 212,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 213,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 214,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 215,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 216,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 217,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 218,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 219,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 220,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Single",
 in_DoorDirection: "Left",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 221,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Single",
 in_DoorDirection: "Right",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 222,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 223,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 224,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 225,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 226,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 227,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 228,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 229,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 230,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 231,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 800,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 232,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 233,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 234,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 235,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "RightRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 236,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 237,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 238,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 239,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 240,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 241,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 242,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 243,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 244,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 245,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 246,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 247,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 248,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 249,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 250,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 251,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 252,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 253,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 254,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 255,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 256,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 257,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 258,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 259,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 260,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 261,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 262,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 263,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftLeft",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Left",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 264,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 265,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "RightRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 266,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 267,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 268,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 269,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSideShort",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSideShort",
 FrontDescriptor: "1_1"
}
,{
 _id: 270,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "MiddleSide",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "MiddleSide",
 FrontDescriptor: "1_1"
}
,{
 _id: 271,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 800.01,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Cleat",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "Cleat",
 FrontDescriptor: "1_1"
}
,{
 _id: 272,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Left",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 273,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Right",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 274,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 275,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 276,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 277,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Left",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 278,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Right",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 279,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 280,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 281,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 282,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 283,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 600.01,
 in_WidthMax: 9999,
 in_DoorType: "Automatic",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 284,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Right",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 285,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Right",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 286,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Left",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 287,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Left",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 288,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 289,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 290,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 291,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 292,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "Automatic",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 293,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripRight",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripRight",
 FrontDescriptor: "1_1"
}
,{
 _id: 294,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "DustStripLeft",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "DustStripLeft",
 FrontDescriptor: "1_1"
}
,{
 _id: 295,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 9999,
 in_DoorType: "Double",
 in_DoorDirection: "LeftRight",
 in_VertDivider: "NoVertDivider",
 DoorQty: 2,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "Right",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1_1"
}
,{
 _id: 296,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Left",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 297,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Right",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 298,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Left",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 299,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "Right",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Automatic",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 300,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Right",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 301,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Right",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 302,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Left",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 303,
 in_CabinetType: "mr_CornerunitStraight",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Single",
 in_DoorDirection: "Left",
 in_VertDivider: "NoVertDivider",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 304,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Automatic",
 in_VertDivider: "MiddleSide",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 305,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Left",
 in_VertDivider: "MiddleSide",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 306,
 in_CabinetType: "mr_StorageunitSingle",
 in_TypeElement: "All",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Right",
 in_VertDivider: "MiddleSide",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 307,
 in_CabinetType: "mr_Filler01",
 in_TypeElement: "Filler",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Left",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Left",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
,{
 _id: 308,
 in_CabinetType: "mr_Filler01",
 in_TypeElement: "Filler",
 in_CarcaseDirection: "All",
 in_FrontDesign: "All",
 in_FrontColor: "All",
 in_WidthMin: 0,
 in_WidthMax: 600,
 in_DoorType: "Automatic",
 in_DoorDirection: "Right",
 in_VertDivider: "Automatic",
 DoorQty: 1,
 FirstDoorDirection: "Right",
 SecondDoorDirection: "NotNecessary",
 VertDividerType: "NoVertDivider",
 FrontDescriptor: "1"
}
];
