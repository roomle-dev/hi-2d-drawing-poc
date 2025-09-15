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

export interface cti_tab_CarcasePartsShape {
  readonly in_Part? : string;
  readonly in_Fingergrip? : string;
  readonly in_AdditionalInfo01? : string;
  readonly in_AdditionalInfo02? : string;
  readonly in_AdditionalInfo03? : string;
  readonly in_AdditionalInfo04? : string;
}

export interface ctm_tab_CarcasePartsShape {
}

export interface cto_tab_CarcasePartsShape extends ctm_tab_CarcasePartsShape {
  readonly _id : number;
  readonly Sequence : number;
  readonly Description? : string;
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string;
  readonly ExtrudeDirection? : string;
}

export interface ICT_tab_CarcasePartsShape
extends cti_tab_CarcasePartsShape, cto_tab_CarcasePartsShape {}

export class ct2_tab_CarcasePartsShape {

public findExactly(
     in_Part: string|undefined,
     in_Fingergrip: string|undefined,
     in_AdditionalInfo01: string|undefined,
     in_AdditionalInfo02: string|undefined,
     in_AdditionalInfo03: string|undefined,
     in_AdditionalInfo04: string|undefined,
): cto_tab_CarcasePartsShape | undefined {
  const res = ct_tab_CarcasePartsShape.find((p) => 
p.in_Part === in_Part
 && p.in_Fingergrip === in_Fingergrip
 && p.in_AdditionalInfo01 === in_AdditionalInfo01
 && p.in_AdditionalInfo02 === in_AdditionalInfo02
 && p.in_AdditionalInfo03 === in_AdditionalInfo03
 && p.in_AdditionalInfo04 === in_AdditionalInfo04
);
return res;
}

public find(
predicate: (value: cti_tab_CarcasePartsShape) => boolean
): cto_tab_CarcasePartsShape | undefined {
  for (let index = 0; index < ct_tab_CarcasePartsShape.length; index++){
    const element = ct_tab_CarcasePartsShape[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_CarcasePartsShape :ICT_tab_CarcasePartsShape[] = [
{
 _id: 1229,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 10,
 Description: "StartPoint (BottomBack)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1230,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 20,
 Description: "Move to front (thickness)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Depth + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1231,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 30,
 Description: "Move up (lower point of the angle)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l 0,' + (m.mod_Height - GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Depth, 0)[1]) ;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1232,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 40,
 Description: "Move up and right (angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + m.mod_Depth + ',' + (GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Depth, 0)[1]);
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1233,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 50,
 Description: "Close contour",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1234,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 10,
 Description: "StartPoint (TopBack - Top of angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1235,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 20,
 Description: "Move to front (depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Depth + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1236,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 30,
 Description: "Move down (thickness)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l 0,-' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1237,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 40,
 Description: "Move back (Bottom of Angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + (m.mod_Depth - (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_Height, 0)[1])) + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1238,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 50,
 Description: "Close contour (Angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1239,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 10,
 Description: "StartPoint (BottomBack - TopRight of angled line on Bottom)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1240,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 20,
 Description: "Move to Front and Down (BottomLeft of angled line on Bottom)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Height + ',-' + (GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Height, 0)[1]);
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1241,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 30,
 Description: "Move Front and Up (BottomLeft of angled line on Top)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + (m.mod_CarcaseDepth - m.mod_TopDepth - m.mod_Height + (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_Height, 0)[1])) + ',' + (m.mod_CarcaseHeight - m.mod_BackHeight - m.mod_Height + (GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Height, 0)[1]));
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1242,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 40,
 Description: "Move back and Up (TopRight of angled line on Top)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_Height, 0)[1]) + ',' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1243,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 50,
 Description: "Close contour (Move down and Right)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1244,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 10000,
 Description: "StartPoint (BottomBack)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1245,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 20000,
 Description: "Move to front (depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Depth + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1246,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 30000,
 Description: "Move to up (height)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1247,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 40000,
 Description: "Move back (Top depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'H' + (m.mod_Depth - m.mod_TopDepth);
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1248,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 50000,
 Description: "Move down and back (to the vertice)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + (m.mod_Depth - m.mod_TopDepth) + ',-' + (m.mod_Height - m.mod_BackHeight);
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1249,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 60000,
 Description: "Close contour (move down)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1250,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 1000,
 Description: "StartPoint (BottomBack)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1251,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2000,
 Description: "Move to front (depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Depth + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1252,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 3000,
 Description: "Move to up (height)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1253,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 4000,
 Description: "Move back (Top depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'H' + (m.mod_Depth - (m.mod_TopDepth - m.g.basic_SidepanelOffsetFront - (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_ShelftopThk, 0)[1])));
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1254,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 5000,
 Description: "Move down and back (to the vertice)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + (m.mod_Depth - (m.mod_TopDepth - m.g.basic_SidepanelOffsetFront - (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_ShelftopThk, 0)[1]))) + ',-' + ((GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle - 90, (m.mod_Depth - (m.mod_TopDepth - m.g.basic_SidepanelOffsetFront - (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_ShelftopThk, 0)[1]))), 0, 0)[2]));
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1255,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 6000,
 Description: "Close contour (move down)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1256,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 100,
 Description: "StartPoint (Bottom Back)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M0 0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1257,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 200,
 Description: "Move to front (depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'H' + m.mod_Depth;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1258,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 300,
 Description: "Move up (height)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1259,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 400,
 Description: "Move back (depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'H0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1260,
 in_Part: "part_SidePanel",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 500,
 Description: "Close contour (Down)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'Z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1261,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Top",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 290,
 Description: "Fingergrip top",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return ' V' + (m.mod_Height - m.mod_FingergripType_matrix.LShapeHeight!) + ' h-' + m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1262,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle1",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 210,
 Description: "First Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos1 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1263,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle2",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 220,
 Description: "Second Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos2 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1264,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle3",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 230,
 Description: "Third Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos3 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1265,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle4",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 240,
 Description: "Fourth Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos4 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1266,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle5",
 in_AdditionalInfo01: "All",
 in_AdditionalInfo02: "All",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 250,
 Description: "Fifth Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos5 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1267,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle1",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 21000,
 Description: "First Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos1 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1268,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle2",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 22000,
 Description: "Second Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos2 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1269,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle3",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 23000,
 Description: "Third Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos3 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1270,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle4",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 24000,
 Description: "Fourth Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos4 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1271,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle5",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 25000,
 Description: "Fifth Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos5 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1272,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Top",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01",
 in_AdditionalInfo03: "SideCShelf",
 in_AdditionalInfo04: "All",
 Sequence: 29000,
 Description: "Fingergrip top",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return ' V' + (m.mod_Height - m.mod_FingergripType_matrix.LShapeHeight!) + ' h-' + m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1273,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle1",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2100,
 Description: "First Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos1 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1274,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle2",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2200,
 Description: "Second Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos2 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1275,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle3",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2300,
 Description: "Third Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos3 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1276,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle4",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2400,
 Description: "Fourth Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos4 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1277,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Middle5",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2500,
 Description: "Fifth Fingergrip in middle",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'V' + (-(m.mod_FingergripType_matrix.CShapeHeight! / 2) + (m.mod_FingergripPos5 - m.mod_Originpos[1])) + ' h-' + m.mod_FingergripType_matrix.CShapeDepth! + ' v' + m.mod_FingergripType_matrix.CShapeHeight! + ' h' + m.mod_FingergripType_matrix.CShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1278,
 in_Part: "part_SidePanel",
 in_Fingergrip: "Top",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "ShelfCSide",
 in_AdditionalInfo04: "All",
 Sequence: 2900,
 Description: "Fingergrip top",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return ' V' + (m.mod_Height - m.mod_FingergripType_matrix.LShapeHeight!) + ' h-' + m.mod_FingergripType_matrix.LShapeDepth!;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1279,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 10,
 Description: "StartPoint (BottomBack)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1280,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 20,
 Description: "Move to front (thickness)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Depth + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1281,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 30,
 Description: "Move up (lower point of the angle)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l 0,' + (m.mod_Height - GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Depth, 0)[1]) ;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1282,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 40,
 Description: "Move up and right (angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + m.mod_Depth + ',' + (GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Depth, 0)[1]);
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1283,
 in_Part: "part_Backwall",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 50,
 Description: "Close contour",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1284,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 10,
 Description: "StartPoint (BottomBack - TopRight of angled line on Bottom)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1285,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 20,
 Description: "Move to Front and Down (BottomLeft of angled line on Bottom)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Height + ',-' + (GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Height, 0)[1]);
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1286,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 30,
 Description: "Move Front and Up (BottomLeft of angled line on Top)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + (m.mod_CarcaseDepth - m.mod_TopDepth - m.mod_Height + (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_Height, 0)[1])) + ',' + (m.mod_CarcaseHeight - m.mod_BackHeight - m.mod_Height + (GlobalFunc.calc_pythagoreanTheorem(m.mod_SlopeAngle / 2, 0, m.mod_Height, 0)[1]));
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1287,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 40,
 Description: "Move back and Up (TopRight of angled line on Top)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_Height, 0)[1]) + ',' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1288,
 in_Part: "part_SlopedCeilingShelftopAngle",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 50,
 Description: "Close contour (Move down and Right)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1289,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 10,
 Description: "StartPoint (TopBack - Top of angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'M 0,' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1290,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 20,
 Description: "Move to front (depth)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l ' + m.mod_Depth + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1291,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 30,
 Description: "Move down (thickness)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l 0,-' + m.mod_Height;
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1292,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 40,
 Description: "Move back (Bottom of Angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'l -' + (m.mod_Depth - (GlobalFunc.calc_pythagoreanTheorem((270 - m.mod_SlopeAngle) / 2, 0, m.mod_Height, 0)[1])) + ',0';
  }
,
 ExtrudeDirection: "x"
}
,{
 _id: 1293,
 in_Part: "part_SlopedCeilingShelftopHor",
 in_Fingergrip: "All",
 in_AdditionalInfo01: "SlopedCeiling",
 in_AdditionalInfo02: "Construction01.1",
 in_AdditionalInfo03: "All",
 in_AdditionalInfo04: "All",
 Sequence: 50,
 Description: "Close contour (Angled line)",
  SvgPath(m: any /* WARNING: No parent found; assuming 'any' */):string {
    return 'z';
  }
,
 ExtrudeDirection: "x"
}
];
