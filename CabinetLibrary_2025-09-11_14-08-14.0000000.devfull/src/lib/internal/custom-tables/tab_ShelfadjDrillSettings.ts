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

export interface cti_tab_ShelfadjDrillSettings {
  readonly in_TypeElement? : string;
  readonly in_FrontModule? : string;
  readonly in_FrontModuleType? : string;
  readonly in_VertDividerType? : string;
  readonly in_ShelfadjType? : string;
  readonly in_ShelfadjThkMin : number;
  readonly in_ShelfadjThkMax : number;
  readonly in_CCSpaceWidthMin : number;
  readonly in_CCSpaceWidthMax : number;
  readonly in_CCSpaceDepthMin : number;
  readonly in_CCSpaceDepthMax : number;
}

export interface ctm_tab_ShelfadjDrillSettings {
}

export interface cto_tab_ShelfadjDrillSettings extends ctm_tab_ShelfadjDrillSettings {
  readonly _id : number;
  readonly ShelfadjDrillType : number;
  readonly ShelfadjDrillDistance : number;
  readonly ObjectSidesFront? : string;
  readonly ObjectSidesBack? : string;
  readonly ObjectSidesMiddle? : string;
  readonly ObjectBackwall? : string;
  readonly ObjectVertDividerType? : string;
  readonly ShelfadjWidthReduction : number;
  readonly SidepanelDescriptor? : string;
  readonly BackwallDescriptor? : string;
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number;
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number;
}

export interface ICT_tab_ShelfadjDrillSettings
extends cti_tab_ShelfadjDrillSettings, cto_tab_ShelfadjDrillSettings {}

export class ct2_tab_ShelfadjDrillSettings {

public findExactly(
     in_TypeElement: string|undefined,
     in_FrontModule: string|undefined,
     in_FrontModuleType: string|undefined,
     in_VertDividerType: string|undefined,
     in_ShelfadjType: string|undefined,
     in_ShelfadjThkMin: number,
     in_ShelfadjThkMax: number,
     in_CCSpaceWidthMin: number,
     in_CCSpaceWidthMax: number,
     in_CCSpaceDepthMin: number,
     in_CCSpaceDepthMax: number,
): cto_tab_ShelfadjDrillSettings | undefined {
  const res = ct_tab_ShelfadjDrillSettings.find((p) => 
p.in_TypeElement === in_TypeElement
 && p.in_FrontModule === in_FrontModule
 && p.in_FrontModuleType === in_FrontModuleType
 && p.in_VertDividerType === in_VertDividerType
 && p.in_ShelfadjType === in_ShelfadjType
 && p.in_ShelfadjThkMin === in_ShelfadjThkMin
 && p.in_ShelfadjThkMax === in_ShelfadjThkMax
 && p.in_CCSpaceWidthMin === in_CCSpaceWidthMin
 && p.in_CCSpaceWidthMax === in_CCSpaceWidthMax
 && p.in_CCSpaceDepthMin === in_CCSpaceDepthMin
 && p.in_CCSpaceDepthMax === in_CCSpaceDepthMax
);
return res;
}

public find(
predicate: (value: cti_tab_ShelfadjDrillSettings) => boolean
): cto_tab_ShelfadjDrillSettings | undefined {
  for (let index = 0; index < ct_tab_ShelfadjDrillSettings.length; index++){
    const element = ct_tab_ShelfadjDrillSettings[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_ShelfadjDrillSettings :ICT_tab_ShelfadjDrillSettings[] = [
{
 _id: 899,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 600,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 900,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 601,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 901,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 600,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 902,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 601,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 903,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 904,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "ShelfadjFittingGlassDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 905,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingGlassDesign01",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 906,
 in_TypeElement: "TallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingGlassDesign01",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 907,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 908,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "ShelfadjFittingGlassDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 909,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingGlassDesign01",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 910,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingGlassDesign01",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 911,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 912,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 913,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 914,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 915,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 916,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "ShelfadjFittingGlassDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 917,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingGlassDesign01",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 918,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Glass",
 in_ShelfadjThkMin: 5,
 in_ShelfadjThkMax: 5,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 32,
 ObjectSidesFront: "ShelfadjFittingGlassDesign01",
 ObjectSidesBack: "ShelfadjFittingGlassDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingGlassDesign01",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 2,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 919,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 920,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 921,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 922,
 in_TypeElement: "WallUnit",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetFront;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 923,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "FHF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 924,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "FHF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 925,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "FHF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 926,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "FHF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 927,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "Cleat",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign02",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 928,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "Cleat",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign02",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 929,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "Cleat",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign02",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 930,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "Cleat",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign02",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 931,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "MiddleSideShort",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign03",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 932,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "MiddleSideShort",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign03",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 933,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "MiddleSideShort",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign03",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 934,
 in_TypeElement: "All",
 in_FrontModule: "All",
 in_FrontModuleType: "All",
 in_VertDividerType: "MiddleSideShort",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "ShelfadjFittingWoodDesign03",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 935,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "UF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 936,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "UF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "ShelfadjFittingWoodDesign01",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 937,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "UF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 938,
 in_TypeElement: "WallUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
,{
 _id: 939,
 in_TypeElement: "BaseUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "UF",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 150,
 in_CCSpaceWidthMax: 862,
 in_CCSpaceDepthMin: 120,
 in_CCSpaceDepthMax: 350,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "N/a",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "N/a",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return m.g.basic_ShelfadjOffsetBack;
  }

}
,{
 _id: 940,
 in_TypeElement: "BaseUnit",
 in_FrontModule: "Fliplift",
 in_FrontModuleType: "All",
 in_VertDividerType: "All",
 in_ShelfadjType: "Wood",
 in_ShelfadjThkMin: 16,
 in_ShelfadjThkMax: 9999,
 in_CCSpaceWidthMin: 863,
 in_CCSpaceWidthMax: 9999,
 in_CCSpaceDepthMin: 351,
 in_CCSpaceDepthMax: 9999,
 ShelfadjDrillType: 3,
 ShelfadjDrillDistance: 64,
 ObjectSidesFront: "ShelfadjFittingWoodDesign01",
 ObjectSidesBack: "ShelfadjFittingWoodDesign01",
 ObjectSidesMiddle: "N/a",
 ObjectBackwall: "ShelfadjFittingWoodDesign03",
 ObjectVertDividerType: "N/a",
 ShelfadjWidthReduction: 1,
 SidepanelDescriptor: "20mm_1_20mm",
 BackwallDescriptor: "1_1",
  ShelfadjOffsetFront(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 50;
  }
,
  ShelfadjOffsetBack(m: any /* WARNING: No parent found; assuming 'any' */): number {
    return 1.5;
  }

}
];
