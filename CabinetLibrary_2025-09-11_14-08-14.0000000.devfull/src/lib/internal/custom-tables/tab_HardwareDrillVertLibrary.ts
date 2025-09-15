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

export interface cti_tab_HardwareDrillVertLibrary {
  readonly in_ProcessingId? : string;
  readonly in_Part? : string;
}

export interface ctm_tab_HardwareDrillVertLibrary {
  readonly matrix_AB? : number;
  readonly matrix_LA? : number;
  readonly matrix_AN? : number;
  readonly matrix_WI? : number;
  readonly matrix_BM? : string;
  readonly matrix_KO? : string;
  readonly matrix_MI? : number;
}

export interface cto_tab_HardwareDrillVertLibrary extends ctm_tab_HardwareDrillVertLibrary {
  readonly _id : number;
  readonly XA : number;
  readonly YA : number;
  readonly DU : number;
  readonly TI : number;
}

export interface ICT_tab_HardwareDrillVertLibrary
extends cti_tab_HardwareDrillVertLibrary, cto_tab_HardwareDrillVertLibrary {}

export class ct2_tab_HardwareDrillVertLibrary {

public findExactly(
     in_ProcessingId: string|undefined,
     in_Part: string|undefined,
): cto_tab_HardwareDrillVertLibrary | undefined {
  const res = ct_tab_HardwareDrillVertLibrary.find((p) => 
p.in_ProcessingId === in_ProcessingId
 && p.in_Part === in_Part
);
return res;
}

public find(
predicate: (value: cti_tab_HardwareDrillVertLibrary) => boolean
): cto_tab_HardwareDrillVertLibrary | undefined {
  for (let index = 0; index < ct_tab_HardwareDrillVertLibrary.length; index++){
    const element = ct_tab_HardwareDrillVertLibrary[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HardwareDrillVertLibrary :ICT_tab_HardwareDrillVertLibrary[] = [
{
 _id: 11999,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 in_Part: "Shelf",
 XA: -19,
 YA: -32,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12000,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 in_Part: "Shelf",
 XA: -19,
 YA: 32,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12001,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 in_Part: "Shelf",
 XA: 45,
 YA: 32,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12002,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularScrew",
 in_Part: "Shelf",
 XA: 45,
 YA: -32,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12003,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularPress",
 in_Part: "Shelf",
 XA: -19,
 YA: -32,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12004,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularPress",
 in_Part: "Shelf",
 XA: -19,
 YA: 32,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12005,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularPress",
 in_Part: "Shelf",
 XA: 45,
 YA: 32,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12006,
 in_ProcessingId: "ProcessingDrillPlinthLegRectangularPress",
 in_Part: "Shelf",
 XA: 45,
 YA: -32,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12007,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularScrew",
 in_Part: "Shelf",
 XA: -17.5,
 YA: 17.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12008,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularScrew",
 in_Part: "Shelf",
 XA: -17.5,
 YA: -46.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12009,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularScrew",
 in_Part: "Shelf",
 XA: 46.5,
 YA: 17.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12010,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
 in_Part: "Shelf",
 XA: -17.5,
 YA: 17.5,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12011,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
 in_Part: "Shelf",
 XA: -17.5,
 YA: -46.5,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12012,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPress",
 in_Part: "Shelf",
 XA: 46.5,
 YA: 17.5,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12013,
 in_ProcessingId: "Proc_Handle_288",
 in_Part: "Front",
 XA: -144,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12014,
 in_ProcessingId: "Proc_Handle_288",
 in_Part: "Front",
 XA: 144,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12015,
 in_ProcessingId: "Proc_Handle_96",
 in_Part: "Front",
 XA: -48,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12016,
 in_ProcessingId: "Proc_Handle_96",
 in_Part: "Front",
 XA: 48,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12017,
 in_ProcessingId: "Proc_Handle_128",
 in_Part: "Front",
 XA: -64,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12018,
 in_ProcessingId: "Proc_Handle_128",
 in_Part: "Front",
 XA: 64,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12019,
 in_ProcessingId: "Proc_Handle_160",
 in_Part: "Front",
 XA: -80,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12020,
 in_ProcessingId: "Proc_Handle_160",
 in_Part: "Front",
 XA: 80,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12021,
 in_ProcessingId: "Proc_Handle_192",
 in_Part: "Front",
 XA: -96,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12022,
 in_ProcessingId: "Proc_Handle_192",
 in_Part: "Front",
 XA: 96,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12023,
 in_ProcessingId: "Proc_Handle_224",
 in_Part: "Front",
 XA: -112,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12024,
 in_ProcessingId: "Proc_Handle_224",
 in_Part: "Front",
 XA: 112,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12025,
 in_ProcessingId: "Proc_Handle_228",
 in_Part: "Front",
 XA: -144,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12026,
 in_ProcessingId: "Proc_Handle_228",
 in_Part: "Front",
 XA: 144,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12027,
 in_ProcessingId: "Proc_Handle_320",
 in_Part: "Front",
 XA: -160,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12028,
 in_ProcessingId: "Proc_Handle_320",
 in_Part: "Front",
 XA: 160,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12029,
 in_ProcessingId: "Proc_Handle_352",
 in_Part: "Front",
 XA: -176,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12030,
 in_ProcessingId: "Proc_Handle_352",
 in_Part: "Front",
 XA: 176,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12031,
 in_ProcessingId: "Proc_Handle_448",
 in_Part: "Front",
 XA: -224,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12032,
 in_ProcessingId: "Proc_Handle_448",
 in_Part: "Front",
 XA: 224,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12033,
 in_ProcessingId: "Proc_Handle_480",
 in_Part: "Front",
 XA: -240,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12034,
 in_ProcessingId: "Proc_Handle_480",
 in_Part: "Front",
 XA: 240,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12035,
 in_ProcessingId: "Proc_Handle_560",
 in_Part: "Front",
 XA: -280,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12036,
 in_ProcessingId: "Proc_Handle_560",
 in_Part: "Front",
 XA: 280,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12037,
 in_ProcessingId: "Proc_Handle_640",
 in_Part: "Front",
 XA: -320,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12038,
 in_ProcessingId: "Proc_Handle_640",
 in_Part: "Front",
 XA: 320,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12039,
 in_ProcessingId: "Proc_Handle_960",
 in_Part: "Front",
 XA: -480,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12040,
 in_ProcessingId: "Proc_Handle_960",
 in_Part: "Front",
 XA: 480,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12041,
 in_ProcessingId: "DesignLegRectangular001",
 in_Part: "Shelf",
 XA: 15,
 YA: 19.5,
 DU: 5,
 TI: 3,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12042,
 in_ProcessingId: "DesignLegRectangular001",
 in_Part: "Shelf",
 XA: -19.5,
 YA: -15,
 DU: 5,
 TI: 3,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12043,
 in_ProcessingId: "DesignLegRectangular001",
 in_Part: "Shelf",
 XA: 19.5,
 YA: -19.5,
 DU: 5,
 TI: 3,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12044,
 in_ProcessingId: "DesignLegSlanted001H250",
 in_Part: "Shelf",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12045,
 in_ProcessingId: "DesignLegSlanted001H250",
 in_Part: "Shelf",
 XA: -70,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12046,
 in_ProcessingId: "DesignLegSlanted001H250",
 in_Part: "Shelf",
 XA: -70,
 YA: 35,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12047,
 in_ProcessingId: "DesignLegSlanted001H250",
 in_Part: "Shelf",
 XA: 0,
 YA: 70,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12048,
 in_ProcessingId: "DesignLegSlanted001H250",
 in_Part: "Shelf",
 XA: -35,
 YA: 70,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12049,
 in_ProcessingId: "DrillVertShelfadjWoodDesign01",
 in_Part: "Side",
 XA: 0,
 YA: -2,
 DU: 5,
 TI: 10,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12050,
 in_ProcessingId: "DrillVertShelfadjWoodDesign02",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 10,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12051,
 in_ProcessingId: "DrillVertShelfadjWoodDesign02",
 in_Part: "ShelfAdj",
 XA: 10,
 YA: 1.64,
 DU: 5,
 TI: 10,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12052,
 in_ProcessingId: "DrillVertShelfadjWoodDesign03",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 3,
 TI: 10,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12053,
 in_ProcessingId: "DrillVertShelfadjGlassDesign01",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 10,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12054,
 in_ProcessingId: "ProcessingIdDowel01",
 in_Part: "PartLong",
 XA: 0,
 YA: 0,
 DU: 8,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12055,
 in_ProcessingId: "ProcessingIdMinifix01",
 in_Part: "PartLong",
 XA: 11,
 YA: 0,
 DU: 5,
 TI: 9,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12056,
 in_ProcessingId: "ProcessingIdMinifix01",
 in_Part: "PartShort",
 XA: 24,
 YA: 0,
 DU: 15,
 TI: 14.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12057,
 in_ProcessingId: "Proc_Handle_64",
 in_Part: "Front",
 XA: -32,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12058,
 in_ProcessingId: "Proc_Handle_64",
 in_Part: "Front",
 XA: 32,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12059,
 in_ProcessingId: "Proc_Handle_210",
 in_Part: "Front",
 XA: -105,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12060,
 in_ProcessingId: "Proc_Handle_260",
 in_Part: "Front",
 XA: -130,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12061,
 in_ProcessingId: "Proc_Handle_310",
 in_Part: "Front",
 XA: -155,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12062,
 in_ProcessingId: "Proc_Handle_360",
 in_Part: "Front",
 XA: -180,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12063,
 in_ProcessingId: "Proc_Handle_410",
 in_Part: "Front",
 XA: -205,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12064,
 in_ProcessingId: "Proc_Handle_460",
 in_Part: "Front",
 XA: -230,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12065,
 in_ProcessingId: "Proc_Handle_660",
 in_Part: "Front",
 XA: -330,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12066,
 in_ProcessingId: "Proc_Handle_760",
 in_Part: "Front",
 XA: -380,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12067,
 in_ProcessingId: "Proc_Handle_860",
 in_Part: "Front",
 XA: -430,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12068,
 in_ProcessingId: "Proc_Handle_Single",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12069,
 in_ProcessingId: "Proc_Handle_210",
 in_Part: "Front",
 XA: 105,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12070,
 in_ProcessingId: "Proc_Handle_260",
 in_Part: "Front",
 XA: 130,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12071,
 in_ProcessingId: "Proc_Handle_310",
 in_Part: "Front",
 XA: 155,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12072,
 in_ProcessingId: "Proc_Handle_360",
 in_Part: "Front",
 XA: 180,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12073,
 in_ProcessingId: "Proc_Handle_410",
 in_Part: "Front",
 XA: 205,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12074,
 in_ProcessingId: "Proc_Handle_460",
 in_Part: "Front",
 XA: 230,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12075,
 in_ProcessingId: "Proc_Handle_660",
 in_Part: "Front",
 XA: 330,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12076,
 in_ProcessingId: "Proc_Handle_760",
 in_Part: "Front",
 XA: 380,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12077,
 in_ProcessingId: "Proc_Handle_860",
 in_Part: "Front",
 XA: 430,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12078,
 in_ProcessingId: "ProcessingDrillHinge35/11Screw48/6",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 35,
 TI: 11,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12079,
 in_ProcessingId: "ProcessingDrillHinge35/11Screw48/6",
 in_Part: "Front",
 XA: 6,
 YA: -24,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12080,
 in_ProcessingId: "ProcessingDrillHinge35/11Screw48/6",
 in_Part: "Front",
 XA: 6,
 YA: 24,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12081,
 in_ProcessingId: "ProcessingDrillHinge35/13.5Screw45/9.5",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 35,
 TI: 13.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12082,
 in_ProcessingId: "ProcessingDrillHinge35/13.5Screw45/9.5",
 in_Part: "Front",
 XA: 9.5,
 YA: -22.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12083,
 in_ProcessingId: "ProcessingDrillHinge35/13.5Screw45/9.5",
 in_Part: "Front",
 XA: 9.5,
 YA: 22.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12084,
 in_ProcessingId: "ProcessingDrillMountingPlateScrew37/32",
 in_Part: "Carcase",
 XA: 37,
 YA: -16,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12085,
 in_ProcessingId: "ProcessingDrillMountingPlateScrew37/32",
 in_Part: "Carcase",
 XA: 37,
 YA: 16,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12086,
 in_ProcessingId: "ProcessingDrillMountingPlateEuroScrew21_32/0",
 in_Part: "Carcase",
 XA: 21,
 YA: 0,
 DU: 5,
 TI: 11.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12087,
 in_ProcessingId: "ProcessingDrillMountingPlateEuroScrew21_32/0",
 in_Part: "Carcase",
 XA: 53,
 YA: 0,
 DU: 5,
 TI: 11.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12088,
 in_ProcessingId: "ProcessingHanger290.03.937_8",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 10,
 TI: 12.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12089,
 in_ProcessingId: "ProcessingHanger290.03.937_8",
 in_Part: "Side",
 XA: 0,
 YA: -32,
 DU: 10,
 TI: 12.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12090,
 in_ProcessingId: "ProcessingHanger290.03.937_8",
 in_Part: "Side",
 XA: 0,
 YA: -64,
 DU: 10,
 TI: 12.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12091,
 in_ProcessingId: "ProcessingHanger290.03.937_8",
 in_Part: "Backwall",
 XA: 18,
 YA: -4,
 DU: 12,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12092,
 in_ProcessingId: "ProcessingHanger290.03.937_8",
 in_Part: "Backwall",
 XA: 18,
 YA: -54,
 DU: 12,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12093,
 in_ProcessingId: "ProcessingHanger290.40.980_1",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 10,
 TI: 10.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12094,
 in_ProcessingId: "ProcessingHanger290.40.980_1",
 in_Part: "Side",
 XA: 32,
 YA: 0,
 DU: 10,
 TI: 10.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12095,
 in_ProcessingId: "ProcessingHanger290.02.702_3",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12096,
 in_ProcessingId: "ProcessingHanger290.02.702_3",
 in_Part: "Side",
 XA: 32,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12097,
 in_ProcessingId: "ProcessingHanger290.40.901_2",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 10,
 TI: 10.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12098,
 in_ProcessingId: "ProcessingHanger290.40.901_2",
 in_Part: "Side",
 XA: 32,
 YA: 0,
 DU: 10,
 TI: 10.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12099,
 in_ProcessingId: "ProcessingHanger290.40.901_2",
 in_Part: "Side",
 XA: 0,
 YA: -64,
 DU: 10,
 TI: 10.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12100,
 in_ProcessingId: "ProcessingHanger290.40.901_2",
 in_Part: "Side",
 XA: 32,
 YA: -64,
 DU: 10,
 TI: 10.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12101,
 in_ProcessingId: "ProcessingHanger290.02.710_1",
 in_Part: "Side",
 XA: 0,
 YA: 0,
 DU: 3,
 TI: 5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12102,
 in_ProcessingId: "ProcessingHanger290.02.710_1",
 in_Part: "Side",
 XA: 32,
 YA: 0,
 DU: 3,
 TI: 5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12103,
 in_ProcessingId: "Processing_Legra_FrontBotCon",
 in_Part: "BoxBtm",
 XA: -12,
 YA: -40,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12104,
 in_ProcessingId: "Processing_Legra_FrontBotCon",
 in_Part: "BoxBtm",
 XA: 12,
 YA: -40,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12105,
 in_ProcessingId: "Processing_Legra_FrontBotCon",
 in_Part: "Front",
 XA: 0,
 YA: -7.3,
 DU: 10,
 TI: 7,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12106,
 in_ProcessingId: "Processing_Legrabox_Con_C",
 in_Part: "Front",
 XA: 14,
 YA: 179,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12107,
 in_ProcessingId: "Processing_Legrabox_Con_C",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12108,
 in_ProcessingId: "Processing_Legrabox_Con_C",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12109,
 in_ProcessingId: "Processing_Legrabox_Con_CM",
 in_Part: "Front",
 XA: 14,
 YA: 179,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12110,
 in_ProcessingId: "Processing_Legrabox_Con_CM",
 in_Part: "Front",
 XA: 14,
 YA: 147,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12111,
 in_ProcessingId: "Processing_Legrabox_Con_CM",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12112,
 in_ProcessingId: "Processing_Legrabox_Con_CM",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12113,
 in_ProcessingId: "Processing_Legrabox_Con_F",
 in_Part: "Front",
 XA: 14,
 YA: 211,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12114,
 in_ProcessingId: "Processing_Legrabox_Con_F",
 in_Part: "Front",
 XA: 14,
 YA: 179,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12115,
 in_ProcessingId: "Processing_Legrabox_Con_F",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12116,
 in_ProcessingId: "Processing_Legrabox_Con_F",
 in_Part: "Front",
 XA: 14,
 YA: 243,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12117,
 in_ProcessingId: "Processing_Legrabox_Con_F",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12118,
 in_ProcessingId: "Processing_Legrabox_Con_FM",
 in_Part: "Front",
 XA: 14,
 YA: 243,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12119,
 in_ProcessingId: "Processing_Legrabox_Con_FM",
 in_Part: "Front",
 XA: 14,
 YA: 211,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12120,
 in_ProcessingId: "Processing_Legrabox_Con_FM",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12121,
 in_ProcessingId: "Processing_Legrabox_Con_FM",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12122,
 in_ProcessingId: "Processing_Legrabox_Con_FM",
 in_Part: "Front",
 XA: 14,
 YA: 147,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12123,
 in_ProcessingId: "Processing_Legrabox_Con_FM",
 in_Part: "Front",
 XA: 14,
 YA: 179,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12124,
 in_ProcessingId: "Processing_Legrabox_Con_K",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12125,
 in_ProcessingId: "Processing_Legrabox_Con_K",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12126,
 in_ProcessingId: "Processing_Legrabox_Con_KM",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12127,
 in_ProcessingId: "Processing_Legrabox_Con_KM",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12128,
 in_ProcessingId: "Processing_Legrabox_Con_M",
 in_Part: "Front",
 XA: 14,
 YA: 51,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12129,
 in_ProcessingId: "Processing_Legrabox_Con_M",
 in_Part: "Front",
 XA: 14,
 YA: 83,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12130,
 in_ProcessingId: "Processing_Legrabox_Con_N",
 in_Part: "Front",
 XA: 14,
 YA: 45.5,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12131,
 in_ProcessingId: "Processing_Legrabox_Con_N",
 in_Part: "Front",
 XA: 14,
 YA: 61.5,
 DU: 10,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12132,
 in_ProcessingId: "Processing_LegraboxBtm",
 in_Part: "BoxBtm",
 XA: 48.5,
 YA: 152,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12133,
 in_ProcessingId: "Processing_LegraboxBtm",
 in_Part: "BoxBtm",
 XA: 48.5,
 YA: 24,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12134,
 in_ProcessingId: "Processing_LegraboxSlide_270",
 in_Part: "Carcase",
 XA: 197,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12135,
 in_ProcessingId: "Processing_LegraboxSlide_270",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12136,
 in_ProcessingId: "Processing_LegraboxSlide_270",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12137,
 in_ProcessingId: "Processing_LegraboxSlide_300_350",
 in_Part: "Carcase",
 XA: 261,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12138,
 in_ProcessingId: "Processing_LegraboxSlide_300_350",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12139,
 in_ProcessingId: "Processing_LegraboxSlide_300_350",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12140,
 in_ProcessingId: "Processing_LegraboxSlide_300_350",
 in_Part: "Carcase",
 XA: 229,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12141,
 in_ProcessingId: "Processing_LegraboxSlide_400_450_500",
 in_Part: "Carcase",
 XA: 261,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12142,
 in_ProcessingId: "Processing_LegraboxSlide_400_450_500",
 in_Part: "Carcase",
 XA: 293,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12143,
 in_ProcessingId: "Processing_LegraboxSlide_400_450_500",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12144,
 in_ProcessingId: "Processing_LegraboxSlide_400_450_500",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12145,
 in_ProcessingId: "Processing_LegraboxSlide_550_600",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12146,
 in_ProcessingId: "Processing_LegraboxSlide_550_600",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12147,
 in_ProcessingId: "Processing_LegraboxSlide_550_600",
 in_Part: "Carcase",
 XA: 261,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12148,
 in_ProcessingId: "Processing_LegraboxSlide_550_600",
 in_Part: "Carcase",
 XA: 293,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12149,
 in_ProcessingId: "Processing_LegraboxSlide_550_600",
 in_Part: "Carcase",
 XA: 357,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12150,
 in_ProcessingId: "Processing_LegraboxSlide_450_H",
 in_Part: "Carcase",
 XA: 261,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12151,
 in_ProcessingId: "Processing_LegraboxSlide_450_H",
 in_Part: "Carcase",
 XA: 293,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12152,
 in_ProcessingId: "Processing_LegraboxSlide_450_H",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12153,
 in_ProcessingId: "Processing_LegraboxSlide_450_H",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12154,
 in_ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12155,
 in_ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12156,
 in_ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 in_Part: "Carcase",
 XA: 261,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12157,
 in_ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 in_Part: "Carcase",
 XA: 293,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12158,
 in_ProcessingId: "Processing_LegraboxSlide_500_550_600_H",
 in_Part: "Carcase",
 XA: 357,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12159,
 in_ProcessingId: "Processing_LegraboxSlide_650_H",
 in_Part: "Carcase",
 XA: 37,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12160,
 in_ProcessingId: "Processing_LegraboxSlide_650_H",
 in_Part: "Carcase",
 XA: 69,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12161,
 in_ProcessingId: "Processing_LegraboxSlide_650_H",
 in_Part: "Carcase",
 XA: 261,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12162,
 in_ProcessingId: "Processing_LegraboxSlide_650_H",
 in_Part: "Carcase",
 XA: 293,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12163,
 in_ProcessingId: "Processing_LegraboxSlide_650_H",
 in_Part: "Carcase",
 XA: 357,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12164,
 in_ProcessingId: "Processing_LegraboxSlide_650_H",
 in_Part: "Carcase",
 XA: 453,
 YA: 38,
 DU: 5,
 TI: 13,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12165,
 in_ProcessingId: "Processing_Legrabox_Backwall_N",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 19,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12166,
 in_ProcessingId: "Processing_Legrabox_Backwall_M",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 19,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12167,
 in_ProcessingId: "Processing_Legrabox_Backwall_M",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 51,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12168,
 in_ProcessingId: "Processing_Legrabox_Backwall_C",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 19,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12169,
 in_ProcessingId: "Processing_Legrabox_Backwall_C",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 51,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12170,
 in_ProcessingId: "Processing_Legrabox_Backwall_C",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 115,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12171,
 in_ProcessingId: "Processing_Legrabox_Backwall_C",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 131,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12172,
 in_ProcessingId: "Processing_Legrabox_Backwall_K",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 19,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12173,
 in_ProcessingId: "Processing_Legrabox_Backwall_K",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 51,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12174,
 in_ProcessingId: "Processing_Legrabox_Backwall_K",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 83,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12175,
 in_ProcessingId: "Processing_Legrabox_Backwall_F",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 19,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12176,
 in_ProcessingId: "Processing_Legrabox_Backwall_F",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 51,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12177,
 in_ProcessingId: "Processing_Legrabox_Backwall_F",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 147,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12178,
 in_ProcessingId: "Processing_Legrabox_Backwall_F",
 in_Part: "BoxBackwall",
 XA: 9,
 YA: 179,
 DU: 5,
 TI: 2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12179,
 in_ProcessingId: "ProcessingIdDowel03",
 in_Part: "PartLong",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 7,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12180,
 in_ProcessingId: "ProcessingPushToOpenLong",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12181,
 in_ProcessingId: "ProcessingPushToOpenShort",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12182,
 in_ProcessingId: "ProcessingAdapterHousingLong",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12183,
 in_ProcessingId: "ProcessingAdapterHousingShort",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12184,
 in_ProcessingId: "ProcessingRafix01",
 in_Part: "PartLong",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 11,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12185,
 in_ProcessingId: "ProcessingRafix01",
 in_Part: "PartShort",
 XA: 9.5,
 YA: 0,
 DU: 20,
 TI: 14.2,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12186,
 in_ProcessingId: "ProcessingAdapterHousingLong",
 in_Part: "Carcase",
 XA: 0,
 YA: 20,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12187,
 in_ProcessingId: "ProcessingAdapterHousingLong",
 in_Part: "Carcase",
 XA: 0,
 YA: 52,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12188,
 in_ProcessingId: "ProcessingAdapterHousingShort",
 in_Part: "Carcase",
 XA: 0,
 YA: 20,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12189,
 in_ProcessingId: "ProcessingAdapterHousingShort",
 in_Part: "Carcase",
 XA: 0,
 YA: 37,
 DU: 5,
 TI: 0.5,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12190,
 in_ProcessingId: "Processing_Aventos_HF_PS",
 in_Part: "Carcase",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12191,
 in_ProcessingId: "Processing_Aventos_HF_PS",
 in_Part: "Carcase",
 XA: 0,
 YA: -64,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12192,
 in_ProcessingId: "Processing_Aventos_HF_PS",
 in_Part: "Carcase",
 XA: -127.7,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12193,
 in_ProcessingId: "Processing_Aventos_HF_PS",
 in_Part: "Carcase",
 XA: -127.7,
 YA: -64,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12194,
 in_ProcessingId: "Processing_Aventos_HF_Connector",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12195,
 in_ProcessingId: "Processing_Aventos_HF_Connector",
 in_Part: "Front",
 XA: 0,
 YA: -32,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12196,
 in_ProcessingId: "Process_Aventos_HK_PS",
 in_Part: "Carcase",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12197,
 in_ProcessingId: "Process_Aventos_HK_PS",
 in_Part: "Carcase",
 XA: -32,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12198,
 in_ProcessingId: "Process_Aventos_HK_PS",
 in_Part: "Carcase",
 XA: -96,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12199,
 in_ProcessingId: "Process_Aventos_HK_PS",
 in_Part: "Carcase",
 XA: -128,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12200,
 in_ProcessingId: "Processing_Aventos_HK_Connector",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12201,
 in_ProcessingId: "Processing_Aventos_HK_Connector",
 in_Part: "Front",
 XA: 0,
 YA: -32,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12202,
 in_ProcessingId: "Processing_Aventos_HK_Connector",
 in_Part: "Front",
 XA: 0,
 YA: -64,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12203,
 in_ProcessingId: "Processing_Aventos_HK_Connector",
 in_Part: "Front",
 XA: 0,
 YA: -96,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12204,
 in_ProcessingId: "ProcessingDrillHinge35/12.6Screw45/9.5",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 35,
 TI: 12.6,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12205,
 in_ProcessingId: "ProcessingDrillHinge35/12.6Screw45/9.5",
 in_Part: "Front",
 XA: 9.5,
 YA: -22.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12206,
 in_ProcessingId: "ProcessingDrillHinge35/12.6Screw45/9.5",
 in_Part: "Front",
 XA: 9.5,
 YA: 22.5,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12207,
 in_ProcessingId: "Processing_DropDown_Carcase",
 in_Part: "Carcase",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12208,
 in_ProcessingId: "Processing_DropDown_Carcase",
 in_Part: "Carcase",
 XA: 0,
 YA: -160,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12209,
 in_ProcessingId: "Processing_DropDown_Front",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 25,
 TI: 2.3,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12210,
 in_ProcessingId: "Processing_DropDown_Front",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 12,
 TI: 10,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12211,
 in_ProcessingId: "Processing_Aventos_HKXS_Connector",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12212,
 in_ProcessingId: "Processing_Aventos_HKXS_Connector",
 in_Part: "Front",
 XA: 0,
 YA: -32,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12213,
 in_ProcessingId: "Processing_Aventos_HKXS_Carcase",
 in_Part: "Carcase",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12214,
 in_ProcessingId: "Processing_Aventos_HKXS_Carcase",
 in_Part: "Carcase",
 XA: 0,
 YA: -32,
 DU: 5,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12215,
 in_ProcessingId: "ProcessingDrillMountingPlateScrew20_32/0",
 in_Part: "Carcase",
 XA: 20,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12216,
 in_ProcessingId: "ProcessingDrillMountingPlateScrew20_32/0",
 in_Part: "Carcase",
 XA: 52,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12217,
 in_ProcessingId: "Proc_Handle_1060",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12218,
 in_ProcessingId: "Proc_Handle_1060",
 in_Part: "Front",
 XA: 530,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12219,
 in_ProcessingId: "Proc_Handle_1060",
 in_Part: "Front",
 XA: -530,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12220,
 in_ProcessingId: "Proc_Handle_1160",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12221,
 in_ProcessingId: "Proc_Handle_1160",
 in_Part: "Front",
 XA: 580,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12222,
 in_ProcessingId: "Proc_Handle_1160",
 in_Part: "Front",
 XA: -580,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12223,
 in_ProcessingId: "Proc_Handle_1260",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12224,
 in_ProcessingId: "Proc_Handle_1260",
 in_Part: "Front",
 XA: 630,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12225,
 in_ProcessingId: "Proc_Handle_1260",
 in_Part: "Front",
 XA: -630,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12226,
 in_ProcessingId: "Proc_Handle_1360",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12227,
 in_ProcessingId: "Proc_Handle_1360",
 in_Part: "Front",
 XA: 680,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12228,
 in_ProcessingId: "Proc_Handle_1360",
 in_Part: "Front",
 XA: -680,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12229,
 in_ProcessingId: "Proc_Handle_1460",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12230,
 in_ProcessingId: "Proc_Handle_1460",
 in_Part: "Front",
 XA: 730,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12231,
 in_ProcessingId: "Proc_Handle_1460",
 in_Part: "Front",
 XA: -730,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12232,
 in_ProcessingId: "Proc_Handle_1560",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12233,
 in_ProcessingId: "Proc_Handle_1560",
 in_Part: "Front",
 XA: 780,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12234,
 in_ProcessingId: "Proc_Handle_1560",
 in_Part: "Front",
 XA: -780,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12235,
 in_ProcessingId: "Proc_Handle_1760",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12236,
 in_ProcessingId: "Proc_Handle_1760",
 in_Part: "Front",
 XA: 880,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12237,
 in_ProcessingId: "Proc_Handle_1760",
 in_Part: "Front",
 XA: -880,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12238,
 in_ProcessingId: "Proc_Handle_1960",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12239,
 in_ProcessingId: "Proc_Handle_1960",
 in_Part: "Front",
 XA: 980,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12240,
 in_ProcessingId: "Proc_Handle_1960",
 in_Part: "Front",
 XA: -980,
 YA: 0,
 DU: 5,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12241,
 in_ProcessingId: "ProcessingHingeFlap26",
 in_Part: "Front",
 XA: 0,
 YA: 0,
 DU: 26,
 TI: 14,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12242,
 in_ProcessingId: "ProcessingHingeFlap26",
 in_Part: "Carcase",
 XA: 0.5,
 YA: 0,
 DU: 26,
 TI: 15,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12243,
 in_ProcessingId: "ProcessingBracket01",
 in_Part: "Carcase",
 XA: 12.5,
 YA: 1,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12244,
 in_ProcessingId: "ProcessingBracket01",
 in_Part: "Front",
 XA: 12.5,
 YA: -1,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12245,
 in_ProcessingId: "ProcessingBracket01",
 in_Part: "Carcase",
 XA: 31.5,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12246,
 in_ProcessingId: "ProcessingBracket01",
 in_Part: "Front",
 XA: 31.5,
 YA: 0,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12247,
 in_ProcessingId: "ProcessingKeku_Side_262_50_368",
 in_Part: "Carcase",
 XA: 28,
 YA: 16,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12248,
 in_ProcessingId: "ProcessingKeku_Side_262_50_368",
 in_Part: "Carcase",
 XA: 28,
 YA: -16,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12249,
 in_ProcessingId: "ProcessingKeku_Front_262_50_359",
 in_Part: "Front",
 XA: 15,
 YA: 16,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12250,
 in_ProcessingId: "ProcessingKeku_Front_262_50_359",
 in_Part: "Front",
 XA: 15,
 YA: -16,
 DU: 5,
 TI: 1,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12251,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPressDrillBack",
 in_Part: "Shelf",
 XA: -17.5,
 YA: 17.5,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12252,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPressDrillBack",
 in_Part: "Shelf",
 XA: -17.5,
 YA: -46.5,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12253,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPressDrillBack",
 in_Part: "Shelf",
 XA: 46.5,
 YA: 17.5,
 DU: 10,
 TI: 12,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
,{
 _id: 12254,
 in_ProcessingId: "ProcessingDrillPlinthLegTriangularPressDrillBack",
 in_Part: "Shelf",
 XA: 0,
 YA: 0,
 DU: 10,
 TI: 0,
 matrix_AB: undefined,
 matrix_LA: undefined,
 matrix_AN: undefined,
 matrix_WI: undefined,
 matrix_BM: "",
 matrix_KO: "",
 matrix_MI: undefined
}
];
