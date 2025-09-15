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

export interface cti_tab_DrawerBoxConstruction {
  readonly in_ConstructionId? : string;
}

export interface ctm_tab_DrawerBoxConstruction {
}

export interface cto_tab_DrawerBoxConstruction extends ctm_tab_DrawerBoxConstruction {
  readonly _id : number;
  ObjWidth(FreeSpaceWidth:number):number;
  readonly ObjHeight : number;
  readonly ObjDepth : number;
  readonly ObjPosHeight : number;
  readonly SlidePosDepth : number;
  readonly SlidePosHeight : number;
  readonly BlockSpaceHeight : number;
  readonly BlockSpaceDepth : number;
  readonly BlockSpacePosHeight : number;
  BotShelfWidth(FreeSpaceWidth:number):number;
  readonly BotShelfDepthBwWood : number;
  readonly BotShelfDepthBwMetal : number;
  readonly BotShelfThickness : number;
  readonly BotShelfPosHeight : number;
  BackwallWidth(FreeSpaceWidth:number):number;
  readonly BackwallHeight : number;
  readonly BackwallThickness : number;
  readonly BackwallPosHeight : number;
  readonly BackwallPosDepth : number;
}

export interface ICT_tab_DrawerBoxConstruction
extends cti_tab_DrawerBoxConstruction, cto_tab_DrawerBoxConstruction {}

export class ct2_tab_DrawerBoxConstruction {

public findExactly(
     in_ConstructionId: string|undefined,
): cto_tab_DrawerBoxConstruction | undefined {
  const res = ct_tab_DrawerBoxConstruction.find((p) => 
p.in_ConstructionId === in_ConstructionId
);
return res;
}

public find(
predicate: (value: cti_tab_DrawerBoxConstruction) => boolean
): cto_tab_DrawerBoxConstruction | undefined {
  for (let index = 0; index < ct_tab_DrawerBoxConstruction.length; index++){
    const element = ct_tab_DrawerBoxConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_DrawerBoxConstruction :ICT_tab_DrawerBoxConstruction[] = [
{
 _id: 1,
 in_ConstructionId: "Legra_400_N",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 78,
 ObjDepth: 402,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 78.4,
 BlockSpaceDepth: 403,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 390,
 BotShelfDepthBwMetal: 379,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 39,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 390
}
,{
 _id: 2,
 in_ConstructionId: "Legra_450_N",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 78,
 ObjDepth: 452,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 78.4,
 BlockSpaceDepth: 453,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 440,
 BotShelfDepthBwMetal: 429,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 39,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 440
}
,{
 _id: 3,
 in_ConstructionId: "Legra_500_N",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 78,
 ObjDepth: 502,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 78.4,
 BlockSpaceDepth: 503,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 490,
 BotShelfDepthBwMetal: 479,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 39,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 490
}
,{
 _id: 4,
 in_ConstructionId: "Legra_550_N",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 78,
 ObjDepth: 552,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 78.4,
 BlockSpaceDepth: 553,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 540,
 BotShelfDepthBwMetal: 529,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 39,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 540
}
,{
 _id: 5,
 in_ConstructionId: "Legra_270_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 272,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 273,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 260,
 BotShelfDepthBwMetal: 249,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 270
}
,{
 _id: 6,
 in_ConstructionId: "Legra_300_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 302,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 303,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 290,
 BotShelfDepthBwMetal: 279,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 290
}
,{
 _id: 7,
 in_ConstructionId: "Legra_350_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 352,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 353,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 340,
 BotShelfDepthBwMetal: 329,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 340
}
,{
 _id: 8,
 in_ConstructionId: "Legra_400_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 402,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 403,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 390,
 BotShelfDepthBwMetal: 379,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 390
}
,{
 _id: 9,
 in_ConstructionId: "Legra_450_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 452,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 453,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 440,
 BotShelfDepthBwMetal: 429,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 440
}
,{
 _id: 10,
 in_ConstructionId: "Legra_500_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 502,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 503,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 490,
 BotShelfDepthBwMetal: 479,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 490
}
,{
 _id: 11,
 in_ConstructionId: "Legra_550_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 552,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 553,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 540,
 BotShelfDepthBwMetal: 529,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 540
}
,{
 _id: 12,
 in_ConstructionId: "Legra_600_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 602,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 603,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 590,
 BotShelfDepthBwMetal: 579,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 590
}
,{
 _id: 13,
 in_ConstructionId: "Legra_650_M",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 102,
 ObjDepth: 652,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 102.4,
 BlockSpaceDepth: 653,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 640,
 BotShelfDepthBwMetal: 629,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 63,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 640
}
,{
 _id: 14,
 in_ConstructionId: "Legra_300_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 302,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 303,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 290,
 BotShelfDepthBwMetal: 279,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 290
}
,{
 _id: 15,
 in_ConstructionId: "Legra_350_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 352,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 353,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 340,
 BotShelfDepthBwMetal: 329,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 340
}
,{
 _id: 16,
 in_ConstructionId: "Legra_400_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 402,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 403,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 390,
 BotShelfDepthBwMetal: 379,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 390
}
,{
 _id: 17,
 in_ConstructionId: "Legra_450_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 452,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 453,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 440,
 BotShelfDepthBwMetal: 429,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 440
}
,{
 _id: 18,
 in_ConstructionId: "Legra_500_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 502,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 503,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 490,
 BotShelfDepthBwMetal: 479,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 490
}
,{
 _id: 19,
 in_ConstructionId: "Legra_550_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 552,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 553,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 540,
 BotShelfDepthBwMetal: 529,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 540
}
,{
 _id: 20,
 in_ConstructionId: "Legra_600_K",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 140,
 ObjDepth: 602,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 140.4,
 BlockSpaceDepth: 603,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 590,
 BotShelfDepthBwMetal: 579,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 101,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 590
}
,{
 _id: 21,
 in_ConstructionId: "Legra_270_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 272,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 273,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 260,
 BotShelfDepthBwMetal: 249,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 270
}
,{
 _id: 22,
 in_ConstructionId: "Legra_300_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 302,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 303,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 290,
 BotShelfDepthBwMetal: 279,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 290
}
,{
 _id: 23,
 in_ConstructionId: "Legra_350_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 352,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 353,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 340,
 BotShelfDepthBwMetal: 329,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 340
}
,{
 _id: 24,
 in_ConstructionId: "Legra_400_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 402,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 403,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 390,
 BotShelfDepthBwMetal: 379,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 390
}
,{
 _id: 25,
 in_ConstructionId: "Legra_450_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 452,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 453,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 440,
 BotShelfDepthBwMetal: 429,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 440
}
,{
 _id: 26,
 in_ConstructionId: "Legra_500_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 502,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 503,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 490,
 BotShelfDepthBwMetal: 479,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 490
}
,{
 _id: 27,
 in_ConstructionId: "Legra_550_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 552,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 553,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 540,
 BotShelfDepthBwMetal: 529,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 540
}
,{
 _id: 28,
 in_ConstructionId: "Legra_600_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 602,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 603,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 590,
 BotShelfDepthBwMetal: 579,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 590
}
,{
 _id: 29,
 in_ConstructionId: "Legra_650_C",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 187,
 ObjDepth: 652,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 187.4,
 BlockSpaceDepth: 653,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 640,
 BotShelfDepthBwMetal: 629,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 148,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 640
}
,{
 _id: 30,
 in_ConstructionId: "Legra_400_F",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 251,
 ObjDepth: 402,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 251.4,
 BlockSpaceDepth: 403,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 390,
 BotShelfDepthBwMetal: 379,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 212,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 390
}
,{
 _id: 31,
 in_ConstructionId: "Legra_450_F",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 251,
 ObjDepth: 452,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 251.4,
 BlockSpaceDepth: 453,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 440,
 BotShelfDepthBwMetal: 429,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 212,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 440
}
,{
 _id: 32,
 in_ConstructionId: "Legra_500_F",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 251,
 ObjDepth: 502,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 251.4,
 BlockSpaceDepth: 503,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 490,
 BotShelfDepthBwMetal: 479,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 212,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 490
}
,{
 _id: 33,
 in_ConstructionId: "Legra_550_F",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 251,
 ObjDepth: 552,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 251.4,
 BlockSpaceDepth: 553,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 540,
 BotShelfDepthBwMetal: 529,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 212,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 540
}
,{
 _id: 34,
 in_ConstructionId: "Legra_600_F",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 251,
 ObjDepth: 602,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 251.4,
 BlockSpaceDepth: 603,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 590,
 BotShelfDepthBwMetal: 579,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 212,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 590
}
,{
 _id: 35,
 in_ConstructionId: "Legra_650_F",
  ObjWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-14;
  }
,
 ObjHeight: 251,
 ObjDepth: 652,
 ObjPosHeight: 0.4,
 SlidePosDepth: 4,
 SlidePosHeight: 1.7,
 BlockSpaceHeight: 251.4,
 BlockSpaceDepth: 653,
 BlockSpacePosHeight: 0.4,
  BotShelfWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-35;
  }
,
 BotShelfDepthBwWood: 640,
 BotShelfDepthBwMetal: 629,
 BotShelfThickness: 16,
 BotShelfPosHeight: 23.4,
  BackwallWidth(FreeSpaceWidth:number):number {
    return FreeSpaceWidth-38;
  }
,
 BackwallHeight: 212,
 BackwallThickness: 16,
 BackwallPosHeight: 39.4,
 BackwallPosDepth: 640
}
];
