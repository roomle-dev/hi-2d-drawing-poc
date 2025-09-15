import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'
//#region Imports
import { ct_tab_ApplianceGraphicLibrary, ICT_tab_ApplianceGraphicLibrary } from './custom-tables/tab_ApplianceGraphicLibrary'
import { ct_tab_BoardLibrary, ICT_tab_BoardLibrary } from './custom-tables/tab_BoardLibrary'
import { ct_tab_BoardMapping, ICT_tab_BoardMapping } from './custom-tables/tab_BoardMapping'
import { ct_tab_BracketConstruction, ICT_tab_BracketConstruction } from './custom-tables/tab_BracketConstruction'
import { ct_tab_BracketMapping, ICT_tab_BracketMapping } from './custom-tables/tab_BracketMapping'
import { ct_tab_CarcaseBackwallConstruction, ICT_tab_CarcaseBackwallConstruction } from './custom-tables/tab_CarcaseBackwallConstruction'
import { ct_tab_CarcaseBackwallSettings, ICT_tab_CarcaseBackwallSettings } from './custom-tables/tab_CarcaseBackwallSettings'
import { ct_tab_CarcaseCornerunitConstruction, ICT_tab_CarcaseCornerunitConstruction } from './custom-tables/tab_CarcaseCornerunitConstruction'
import { ct_tab_CarcasePartConnectionCalculations, ICT_tab_CarcasePartConnectionCalculations } from './custom-tables/tab_CarcasePartConnectionCalculations'
import { ct_tab_CarcasePartConnectionMapping, ICT_tab_CarcasePartConnectionMapping } from './custom-tables/tab_CarcasePartConnectionMapping'
import { ct_tab_CarcasePartGrainDirectionSettings, ICT_tab_CarcasePartGrainDirectionSettings } from './custom-tables/tab_CarcasePartGrainDirectionSettings'
import { ct_tab_CarcasePartsShape, ICT_tab_CarcasePartsShape } from './custom-tables/tab_CarcasePartsShape'
import { ct_tab_CarcaseShelfbtmSettings, ICT_tab_CarcaseShelfbtmSettings } from './custom-tables/tab_CarcaseShelfbtmSettings'
import { ct_tab_CarcaseShelftopSettings, ICT_tab_CarcaseShelftopSettings } from './custom-tables/tab_CarcaseShelftopSettings'
import { ct_tab_CarcaseSidepanelSettings, ICT_tab_CarcaseSidepanelSettings } from './custom-tables/tab_CarcaseSidepanelSettings'
import { ct_tab_CarcaseSlopedCeilingDimension, ICT_tab_CarcaseSlopedCeilingDimension } from './custom-tables/tab_CarcaseSlopedCeilingDimension'
import { ct_tab_CarcaseStorageunitConstruction, ICT_tab_CarcaseStorageunitConstruction } from './custom-tables/tab_CarcaseStorageunitConstruction'
import { ct_tab_CornerunitStraightConstruction, ICT_tab_CornerunitStraightConstruction } from './custom-tables/tab_CornerunitStraightConstruction'
import { ct_tab_DishwasherConstruction, ICT_tab_DishwasherConstruction } from './custom-tables/tab_DishwasherConstruction'
import { ct_tab_DishwasherMapping, ICT_tab_DishwasherMapping } from './custom-tables/tab_DishwasherMapping'
import { ct_tab_DoorSettings, ICT_tab_DoorSettings } from './custom-tables/tab_DoorSettings'
import { ct_tab_DrawerBoxColorMapping, ICT_tab_DrawerBoxColorMapping } from './custom-tables/tab_DrawerBoxColorMapping'
import { ct_tab_DrawerBoxConstruction, ICT_tab_DrawerBoxConstruction } from './custom-tables/tab_DrawerBoxConstruction'
import { ct_tab_DrawerBoxDimensionMapping, ICT_tab_DrawerBoxDimensionMapping } from './custom-tables/tab_DrawerBoxDimensionMapping'
import { ct_tab_DrawerBoxExtraItemSettings, ICT_tab_DrawerBoxExtraItemSettings } from './custom-tables/tab_DrawerBoxExtraItemSettings'
import { ct_tab_DrawerBoxInsertionSettings, ICT_tab_DrawerBoxInsertionSettings } from './custom-tables/tab_DrawerBoxInsertionSettings'
import { ct_tab_DrawerBoxMapping, ICT_tab_DrawerBoxMapping } from './custom-tables/tab_DrawerBoxMapping'
import { ct_tab_DrawerBoxWeightTypeSettings, ICT_tab_DrawerBoxWeightTypeSettings } from './custom-tables/tab_DrawerBoxWeightTypeSettings'
import { ct_tab_DuststripMapping, ICT_tab_DuststripMapping } from './custom-tables/tab_DuststripMapping'
import { ct_tab_EdgeClassSettings, ICT_tab_EdgeClassSettings } from './custom-tables/tab_EdgeClassSettings'
import { ct_tab_EdgeFrameSettings, ICT_tab_EdgeFrameSettings } from './custom-tables/tab_EdgeFrameSettings'
import { ct_tab_EdgeJointMapping, ICT_tab_EdgeJointMapping } from './custom-tables/tab_EdgeJointMapping'
import { ct_tab_EdgeJointSettings, ICT_tab_EdgeJointSettings } from './custom-tables/tab_EdgeJointSettings'
import { ct_tab_EdgeLibrary, ICT_tab_EdgeLibrary } from './custom-tables/tab_EdgeLibrary'
import { ct_tab_EdgeMapping, ICT_tab_EdgeMapping } from './custom-tables/tab_EdgeMapping'
import { ct_tab_EdgeNumberSettings, ICT_tab_EdgeNumberSettings } from './custom-tables/tab_EdgeNumberSettings'
import { ct_tab_EdgeSettings, ICT_tab_EdgeSettings } from './custom-tables/tab_EdgeSettings'
import { ct_tab_ErrorList, ICT_tab_ErrorList } from './custom-tables/tab_ErrorList'
import { ct_tab_FillerHardwareSettings, ICT_tab_FillerHardwareSettings } from './custom-tables/tab_FillerHardwareSettings'
import { ct_tab_FillerSettings, ICT_tab_FillerSettings } from './custom-tables/tab_FillerSettings'
import { ct_tab_FlipliftColorMapping, ICT_tab_FlipliftColorMapping } from './custom-tables/tab_FlipliftColorMapping'
import { ct_tab_FlipliftConstruction, ICT_tab_FlipliftConstruction } from './custom-tables/tab_FlipliftConstruction'
import { ct_tab_FlipliftMapping, ICT_tab_FlipliftMapping } from './custom-tables/tab_FlipliftMapping'
import { ct_tab_FlipliftSettings, ICT_tab_FlipliftSettings } from './custom-tables/tab_FlipliftSettings'
import { ct_tab_FlipliftWeightTypeMapping, ICT_tab_FlipliftWeightTypeMapping } from './custom-tables/tab_FlipliftWeightTypeMapping'
import { ct_tab_FramePartConnectionMapping, ICT_tab_FramePartConnectionMapping } from './custom-tables/tab_FramePartConnectionMapping'
import { ct_tab_FridgeConstruction, ICT_tab_FridgeConstruction } from './custom-tables/tab_FridgeConstruction'
import { ct_tab_FridgeMapping, ICT_tab_FridgeMapping } from './custom-tables/tab_FridgeMapping'
import { ct_tab_FrontConstruction, ICT_tab_FrontConstruction } from './custom-tables/tab_FrontConstruction'
import { ct_tab_FrontEdgeColorMapping, ICT_tab_FrontEdgeColorMapping } from './custom-tables/tab_FrontEdgeColorMapping'
import { ct_tab_FrontPanelConstruction, ICT_tab_FrontPanelConstruction } from './custom-tables/tab_FrontPanelConstruction'
import { ct_tab_FrontPartGrainDirectionSettings, ICT_tab_FrontPartGrainDirectionSettings } from './custom-tables/tab_FrontPartGrainDirectionSettings'
import { ct_tab_GrainDirectionSettings, ICT_tab_GrainDirectionSettings } from './custom-tables/tab_GrainDirectionSettings'
import { ct_tab_GrainSettings, ICT_tab_GrainSettings } from './custom-tables/tab_GrainSettings'
import { ct_tab_GraphicFileLibrary, ICT_tab_GraphicFileLibrary } from './custom-tables/tab_GraphicFileLibrary'
import { ct_tab_GraphicLibrary, ICT_tab_GraphicLibrary } from './custom-tables/tab_GraphicLibrary'
import { ct_tab_GraphicLibraryMapping, ICT_tab_GraphicLibraryMapping } from './custom-tables/tab_GraphicLibraryMapping'
import { ct_tab_HandleConstruction, ICT_tab_HandleConstruction } from './custom-tables/tab_HandleConstruction'
import { ct_tab_HandleLengthMapping, ICT_tab_HandleLengthMapping } from './custom-tables/tab_HandleLengthMapping'
import { ct_tab_HandleMapping, ICT_tab_HandleMapping } from './custom-tables/tab_HandleMapping'
import { ct_tab_HandleSettings, ICT_tab_HandleSettings } from './custom-tables/tab_HandleSettings'
import { ct_tab_HangerMapping, ICT_tab_HangerMapping } from './custom-tables/tab_HangerMapping'
import { ct_tab_HangerSettings, ICT_tab_HangerSettings } from './custom-tables/tab_HangerSettings'
import { ct_tab_HardwareDrillHorLibrary, ICT_tab_HardwareDrillHorLibrary } from './custom-tables/tab_HardwareDrillHorLibrary'
import { ct_tab_HardwareDrillVertLibrary, ICT_tab_HardwareDrillVertLibrary } from './custom-tables/tab_HardwareDrillVertLibrary'
import { ct_tab_HardwareLibrary, ICT_tab_HardwareLibrary } from './custom-tables/tab_HardwareLibrary'
import { ct_tab_HardwareLibraryMapping, ICT_tab_HardwareLibraryMapping } from './custom-tables/tab_HardwareLibraryMapping'
import { ct_tab_HardwareMillingLibrary, ICT_tab_HardwareMillingLibrary } from './custom-tables/tab_HardwareMillingLibrary'
import { ct_tab_HardwareSettings, ICT_tab_HardwareSettings } from './custom-tables/tab_HardwareSettings'
import { ct_tab_HingeConstruction, ICT_tab_HingeConstruction } from './custom-tables/tab_HingeConstruction'
import { ct_tab_HingeDrillingDistance, ICT_tab_HingeDrillingDistance } from './custom-tables/tab_HingeDrillingDistance'
import { ct_tab_HingeMapping, ICT_tab_HingeMapping } from './custom-tables/tab_HingeMapping'
import { ct_tab_HingePosition, ICT_tab_HingePosition } from './custom-tables/tab_HingePosition'
import { ct_tab_HingeSettings, ICT_tab_HingeSettings } from './custom-tables/tab_HingeSettings'
import { ct_tab_HobConstruction, ICT_tab_HobConstruction } from './custom-tables/tab_HobConstruction'
import { ct_tab_HobMapping, ICT_tab_HobMapping } from './custom-tables/tab_HobMapping'
import { ct_tab_HoodMapping, ICT_tab_HoodMapping } from './custom-tables/tab_HoodMapping'
import { ct_tab_MaterialMapping, ICT_tab_MaterialMapping } from './custom-tables/tab_MaterialMapping'
import { ct_tab_ObjectMapping, ICT_tab_ObjectMapping } from './custom-tables/tab_ObjectMapping'
import { ct_tab_OvenConstruction, ICT_tab_OvenConstruction } from './custom-tables/tab_OvenConstruction'
import { ct_tab_OvenMapping, ICT_tab_OvenMapping } from './custom-tables/tab_OvenMapping'
import { ct_tab_PanelWoodFrameConstruction, ICT_tab_PanelWoodFrameConstruction } from './custom-tables/tab_PanelWoodFrameConstruction'
import { ct_tab_PartConnectionSettings, ICT_tab_PartConnectionSettings } from './custom-tables/tab_PartConnectionSettings'
import { ct_tab_PartOverdimensionSettings, ICT_tab_PartOverdimensionSettings } from './custom-tables/tab_PartOverdimensionSettings'
import { ct_tab_PartSettings, ICT_tab_PartSettings } from './custom-tables/tab_PartSettings'
import { ct_tab_PartsGraphicRotation, ICT_tab_PartsGraphicRotation } from './custom-tables/tab_PartsGraphicRotation'
import { ct_tab_PlinthAreaConstruction, ICT_tab_PlinthAreaConstruction } from './custom-tables/tab_PlinthAreaConstruction'
import { ct_tab_PlinthAreaMapping, ICT_tab_PlinthAreaMapping } from './custom-tables/tab_PlinthAreaMapping'
import { ct_tab_PlinthAreaSettings, ICT_tab_PlinthAreaSettings } from './custom-tables/tab_PlinthAreaSettings'
import { ct_tab_ProcessingMapping, ICT_tab_ProcessingMapping } from './custom-tables/tab_ProcessingMapping'
import { ct_tab_PullOutElementColorMapping, ICT_tab_PullOutElementColorMapping } from './custom-tables/tab_PullOutElementColorMapping'
import { ct_tab_PullOutHardwareInsertionSettings, ICT_tab_PullOutHardwareInsertionSettings } from './custom-tables/tab_PullOutHardwareInsertionSettings'
import { ct_tab_PullOutMapping, ICT_tab_PullOutMapping } from './custom-tables/tab_PullOutMapping'
import { ct_tab_PullOutSettings, ICT_tab_PullOutSettings } from './custom-tables/tab_PullOutSettings'
import { ct_tab_PushtoopenMapping, ICT_tab_PushtoopenMapping } from './custom-tables/tab_PushtoopenMapping'
import { ct_tab_PushtoopenSettings, ICT_tab_PushtoopenSettings } from './custom-tables/tab_PushtoopenSettings'
import { ct_tab_SawingAngleLibrary, ICT_tab_SawingAngleLibrary } from './custom-tables/tab_SawingAngleLibrary'
import { ct_tab_SawingVertLibrary, ICT_tab_SawingVertLibrary } from './custom-tables/tab_SawingVertLibrary'
import { ct_tab_ShelfadjDrillSettings, ICT_tab_ShelfadjDrillSettings } from './custom-tables/tab_ShelfadjDrillSettings'
import { ct_tab_ShelfadjQtyPosSettings, ICT_tab_ShelfadjQtyPosSettings } from './custom-tables/tab_ShelfadjQtyPosSettings'
import { ct_tab_ShelfadjSettings, ICT_tab_ShelfadjSettings } from './custom-tables/tab_ShelfadjSettings'
import { ct_tab_SinkConstruction, ICT_tab_SinkConstruction } from './custom-tables/tab_SinkConstruction'
import { ct_tab_SinkMapping, ICT_tab_SinkMapping } from './custom-tables/tab_SinkMapping'
import { ct_tab_SlopedCeilingSettings, ICT_tab_SlopedCeilingSettings } from './custom-tables/tab_SlopedCeilingSettings'
import { IFuncParents_mc_ShelfadjGroup01,IFuncParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01_mc_Handlestrip01,IFuncParents_mr_StorageunitSingle,IFuncParents_mc_DrawerBox01,IFuncParents_mc_HingeGroup01,IFuncParents_mc_Storageunit01,IFuncParents_mr_CornerunitStraight_mr_StorageunitSingle,IFuncParents_mf_Door,IFuncParents_mc_FrontPanel01_mc_PanelWoodFrame01,IFuncParents_mc_Handle01,IFuncParents_mc_Door01_mc_Fliplift01,IFuncParents_mc_FlipliftHardware01,IFuncParents_mc_CornerFillerFront01_mc_FillerFront01,IFuncParents_mc_Cornerunit01,IFuncParents_mc_Bracket01_mr_Shelves,IFuncParents_mc_PlinthArea01 } from './var-interfaces';
import { OD_M_mc_FrontPanel01 } from './modules/mc_FrontPanel01'
import { OD_M_mc_Drawer01 } from './modules/mc_Drawer01'
import { OD_M_mc_Handle01 } from './modules/mc_Handle01'
import { OD_M_mc_DrawerBox01 } from './modules/mc_DrawerBox01'
import { OD_M_mc_Hinge01 } from './modules/mc_Hinge01'
import { OD_M_mc_Leg01 } from './modules/mc_Leg01'
import { OD_M_mr_Paneltop } from './modules/mr_Paneltop'
import { OD_M_mc_Panel01 } from './modules/mc_Panel01'
import { OD_M_mf_Drawer } from './modules/mf_Drawer'
import { OD_M_mc_PlinthArea01 } from './modules/mc_PlinthArea01'
import { OD_M_mr_StorageunitSingle } from './modules/mr_StorageunitSingle'
import { OD_M_mc_FrontPanelGlass01 } from './modules/mc_FrontPanelGlass01'
import { OD_M_mc_LightSystem01 } from './modules/mc_LightSystem01'
import { OD_M_mc_HangerSystem01 } from './modules/mc_HangerSystem01'
import { OD_M_mf_Fliplift } from './modules/mf_Fliplift'
import { OD_M_mc_Fliplift01 } from './modules/mc_Fliplift01'
import { OD_M_mf_Door } from './modules/mf_Door'
import { OD_M_mc_Door01 } from './modules/mc_Door01'
import { OD_M_mr_CornerunitStraight } from './modules/mr_CornerunitStraight'
import { OD_M_mc_ShelfadjGroup01 } from './modules/mc_ShelfadjGroup01'
import { OD_M_mc_ShelfadjWood01 } from './modules/mc_ShelfadjWood01'
import { OD_M_mc_ShelfadjGlass01 } from './modules/mc_ShelfadjGlass01'
import { OD_M_mc_ShelfadjDrill01 } from './modules/mc_ShelfadjDrill01'
import { OD_M_mc_ThermoformedPanel01 } from './modules/mc_ThermoformedPanel01'
import { OD_M_mc_MetalFrame01 } from './modules/mc_MetalFrame01'
import { OD_M_mc_WoodFrame01 } from './modules/mc_WoodFrame01'
import { OD_M_mc_Storageunit01 } from './modules/mc_Storageunit01'
import { OD_M_mc_Handlestrip01 } from './modules/mc_Handlestrip01'
import { OD_M_mc_StorageunitSidepanel01 } from './modules/mc_StorageunitSidepanel01'
import { OD_M_mc_StorageunitShelfbtm01 } from './modules/mc_StorageunitShelfbtm01'
import { OD_M_mc_StorageunitShelftop01 } from './modules/mc_StorageunitShelftop01'
import { OD_M_mc_StorageunitBackwall01 } from './modules/mc_StorageunitBackwall01'
import { OD_M_mc_StorageunitShelffixed01 } from './modules/mc_StorageunitShelffixed01'
import { OD_M_mc_CleatVert01 } from './modules/mc_CleatVert01'
import { OD_M_mc_Panelblind01 } from './modules/mc_Panelblind01'
import { OD_M_mc_CornerunitStraight01 } from './modules/mc_CornerunitStraight01'
import { OD_M_mc_ShelfadjFitting01 } from './modules/mc_ShelfadjFitting01'
import { OD_M_mf_Oven } from './modules/mf_Oven'
import { OD_M_mc_Oven01 } from './modules/mc_Oven01'
import { OD_M_mf_Fridge } from './modules/mf_Fridge'
import { OD_M_mf_RackArea } from './modules/mf_RackArea'
import { OD_M_mc_RackArea01 } from './modules/mc_RackArea01'
import { OD_M_mc_ShelffixedGroup01 } from './modules/mc_ShelffixedGroup01'
import { OD_M_mc_DoorGroup01 } from './modules/mc_DoorGroup01'
import { OD_M_mc_VertDivider01 } from './modules/mc_VertDivider01'
import { OD_M_mc_Duststrip01 } from './modules/mc_Duststrip01'
import { OD_M_mr_Upright } from './modules/mr_Upright'
import { OD_M_mc_Upright01 } from './modules/mc_Upright01'
import { OD_M_mr_Countertop } from './modules/mr_Countertop'
import { OD_M_mc_Countertop01 } from './modules/mc_Countertop01'
import { OD_M_mr_Backsplash } from './modules/mr_Backsplash'
import { OD_M_mc_Backsplash } from './modules/mc_Backsplash'
import { OD_M_mr_Toekick } from './modules/mr_Toekick'
import { OD_M_mc_Toekick } from './modules/mc_Toekick'
import { OD_M_mc_Pushtoopen01 } from './modules/mc_Pushtoopen01'
import { OD_M_mc_PanelWoodFrame01 } from './modules/mc_PanelWoodFrame01'
import { OD_M_mc_HingeGroup01 } from './modules/mc_HingeGroup01'
import { OD_M_mc_FlipliftHardware01 } from './modules/mc_FlipliftHardware01'
import { OD_M_mr_Fingergrip } from './modules/mr_Fingergrip'
import { OD_M_mf_Fixedfront } from './modules/mf_Fixedfront'
import { OD_M_mc_Fixedfront01 } from './modules/mc_Fixedfront01'
import { OD_M_mc_StorageunitShelftop02 } from './modules/mc_StorageunitShelftop02'
import { OD_M_mc_StorageunitShelftop03 } from './modules/mc_StorageunitShelftop03'
import { OD_M_mc_StorageunitShelftop04 } from './modules/mc_StorageunitShelftop04'
import { OD_M_mc_Fingergrip01 } from './modules/mc_Fingergrip01'
import { OD_M_mc_Fridge01 } from './modules/mc_Fridge01'
import { OD_M_mc_ApplianceGraphic } from './modules/mc_ApplianceGraphic'
import { OD_M_mr_Hood } from './modules/mr_Hood'
import { OD_M_mc_Paneltop01 } from './modules/mc_Paneltop01'
import { OD_M_mf_Hob } from './modules/mf_Hob'
import { OD_M_mc_Hob01 } from './modules/mc_Hob01'
import { OD_M_mc_Sink01 } from './modules/mc_Sink01'
import { OD_M_mf_Sink } from './modules/mf_Sink'
import { OD_M_mr_Filler01 } from './modules/mr_Filler01'
import { OD_M_mf_FillerFront } from './modules/mf_FillerFront'
import { OD_M_mc_FillerFront01 } from './modules/mc_FillerFront01'
import { OD_M_mr_Appliance } from './modules/mr_Appliance'
import { OD_M_mc_Dishwasher } from './modules/mc_Dishwasher'
import { OD_M_mf_Dishwasher } from './modules/mf_Dishwasher'
import { OD_M_mr_CornerFiller } from './modules/mr_CornerFiller'
import { OD_M_mc_Cornerunit01 } from './modules/mc_Cornerunit01'
import { OD_M_mr_IslandBackwall } from './modules/mr_IslandBackwall'
import { OD_M_mr_Shelves } from './modules/mr_Shelves'
import { OD_M_mc_Shelves01 } from './modules/mc_Shelves01'
import { OD_M_mc_Bracket01 } from './modules/mc_Bracket01'
import { OD_M_mf_CornerFillerFront } from './modules/mf_CornerFillerFront'
import { OD_M_mc_CornerFillerFront01 } from './modules/mc_CornerFillerFront01'
import { IGlobalVars } from './global-vars'
import { CKind, Contour, ContourEntry, GenerationContour, Matrix4, Vector3 } from './base'
import { FaceKey, IFaceMaterial, ModuleHelper, PartHelper } from './mod-base'
//#endregion Imports

export class GlobalFunc {
  // ###############################################################
  // ####################### CUSTOM SCRIPTS ########################
  // ###############################################################
// Return value from carcase storageunit construction\n//########################################################
static find_StorageunitConstruction(Part:string, LeftTop:string, LeftBtm:string, RightBtm:string, RightTop:string, PartBack:string, PartFront:string, PartVisible:boolean, AdditionalInfo01:string = 'All'):ICT_tab_CarcaseStorageunitConstruction{
	let retEntry = ct_tab_CarcaseStorageunitConstruction.find(p=> p.in_Part == Part && p.in_LeftTop == LeftTop && p.in_LeftBtm == LeftBtm && p.in_RightBtm == RightBtm && p.in_RightTop == RightTop && p.in_PartBack == PartBack && p.in_PartFront == PartFront && p.in_Visible == PartVisible && p.in_AdditionalInfo01 == AdditionalInfo01);
	if (retEntry == undefined) {
		let Text = Part + ' - ' + LeftTop + ' - ' + LeftBtm + ' - ' + RightBtm + ' - ' + RightTop + ' - ' + PartBack + ' - ' + PartFront + ' - ' + PartVisible + ' - ' + AdditionalInfo01;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11004',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from handle construction\n//########################################################
static find_HandleConstruction(FrontType:string, PosHor:string, PosVert:string, PosTyp:string, HandlePosHor:string, HandlePosVert:string):ICT_tab_HandleConstruction{
	let retEntry = ct_tab_HandleConstruction.find(p=> p.in_FrontType == FrontType && p.in_PosHorizontal == PosHor && p.in_PosVertical == PosVert && p.in_PosType == PosTyp && p.in_HandlePosHorizontal == HandlePosHor && p.in_HandlePosVertical == HandlePosVert);
	if (retEntry == undefined) {
		let Text = FrontType + '-' + PosHor + '-' + PosVert + '-' + PosTyp + '-' + HandlePosHor + '-' + HandlePosVert;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11002',1)
		logError(ErrorMessage.Message(Text));
	}	
	return retEntry!;
}


// Return value from board library\n//########################################################
static find_BoardLibrary(BoardId:string):ICT_tab_BoardLibrary{
	let retEntry= ct_tab_BoardLibrary.find(p=> p.in_BoardId == BoardId);	
	if (retEntry== undefined) {
		let Text = 'BoardId:' + BoardId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 12001',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from handle settings\n//########################################################
static find_HandleSettings(HandlePosType: string, Partgroup: string): ICT_tab_HandleSettings{
	
	let retEntry = ct_tab_HandleSettings.find(p => p.in_PartGroup == Partgroup && p.in_HandlePosType == HandlePosType);
	
	if (retEntry == undefined) {
		let Text = 'HandlePosType: ' + HandlePosType + ', Partgroup: ' + Partgroup;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14001',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from backwall construction\n//########################################################
static find_BackwallConstruction(BackWConstruction:string, PartLeft:string, PartBtm:string, PartRight:string, PartTop:string, Visible:boolean):ICT_tab_CarcaseBackwallConstruction{
	let retEntry = ct_tab_CarcaseBackwallConstruction.find(p=> p.in_BackwallConstruction == BackWConstruction && p.in_PartLeft == PartLeft && p.in_PartBtm == PartBtm && p.in_PartRight == PartRight && p.in_PartTop == PartTop && p.in_Visible == Visible);
	if (retEntry == undefined) {
		let Text = BackWConstruction + ' - ' + PartLeft + ' - ' + PartBtm + ' - ' + PartRight + ' - ' + PartTop + ' - ' + Visible;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11001',1)
		logError(ErrorMessage.Message(Text));
	}	
	return retEntry!;
}


// Put measurements on the SVG drawings\n//########################################################
static ops_Measurement(xPos: number, yPos: number, length: number, zoom: number, ori: string, dir: string, level: number, position: string): string {

	// Create SVG-String
	let svgString: string = "";
	
	// Rounding if necessary
	let tmpLength: string;
	if (length % 1 !== 0) {
	  tmpLength = length.toFixed(1);
	} else {
	  tmpLength = length.toString();
	}

	// Variables for the measurments
	let tmpLen: number = length/zoom;
	let tmpOvDis: number = 5;
	let tmpFontSize: number = 18;
	let tmpFontDis: number = 4;
	let tmpDis: number = 26 * level;
	let tmpOvDimSmall = 25;
	
	// Check position
	let tmpPosition: number = 0;
	let tmpAllign: string = "middle";
	if(position == "start"){tmpPosition = -12; tmpAllign = "end";}
	else{tmpPosition = 12; tmpAllign = "start";}
	
	
	// Orientation (horizontal, vertical)
	if (ori == "horizontal"){
		
		// Direction (top, bottom)
		if (dir == "top"){
			if(tmpLen<15){
				svgString += '<line x1="' + (xPos-tmpOvDimSmall) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos-5) + '" y2="' + (yPos-tmpDis) + '" stroke="black" marker-end="url(#arrEnd)" />\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos-tmpDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen+5) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos+tmpLen+tmpOvDimSmall) + '" y2="' + (yPos-tmpDis) + '" stroke="black" marker-start="url(#arrStart)" />\n';
				svgString += '<text x="' + (xPos+tmpPosition) + '" y="' + (yPos-tmpDis-tmpFontDis) + '" text-anchor="' + tmpAllign + '" font-family="Arial" font-size="' + tmpFontSize + '">' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos-tmpOvDis) + '" x2="' + (xPos) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos-tmpOvDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';			
			}
			else{
				svgString += '<line x1="' + (xPos+5) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos+tmpLen-5) + '" y2="' + (yPos-tmpDis) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
				svgString += '<text x="' + (xPos+tmpLen/2) + '" y="' + (yPos-tmpDis-tmpFontDis) + '" text-anchor="middle" font-family="Arial" font-size="' + tmpFontSize + '">' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos-tmpOvDis) + '" x2="' + (xPos) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos-tmpOvDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';
			}
		}
		else{
			if(tmpLen<15){
				svgString += '<line x1="' + (xPos-tmpOvDimSmall) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos-5) + '" y2="' + (yPos+tmpDis) + '" stroke="black" marker-end="url(#arrEnd)" />\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos+tmpDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen+5) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos+tmpLen+tmpOvDimSmall) + '" y2="' + (yPos+tmpDis) + '" stroke="black" marker-start="url(#arrStart)" />\n';				
				svgString += '<text x="' + (xPos+tmpPosition) + '" y="' + (yPos+tmpDis-tmpFontDis) + '" text-anchor="' + tmpAllign + '" font-family="Arial" font-size="' + tmpFontSize + '">' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos+tmpOvDis) + '" x2="' + (xPos) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos+tmpOvDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';					
			}
			else{				
				svgString += '<line x1="' + (xPos+5) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos+tmpLen-5) + '" y2="' + (yPos+tmpDis) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
				svgString += '<text x="' + (xPos+tmpLen/2) + '" y="' + (yPos+tmpDis-tmpFontDis) + '" text-anchor="middle" font-family="Arial" font-size="' + tmpFontSize + '">' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos+tmpOvDis) + '" x2="' + (xPos) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos+tmpOvDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';	
			}			
		}
	}
	else{

		// Direction (left, right)
		if (dir == "left"){
			svgString += '<line x1="' + (xPos-tmpDis) + '" y1="' + (yPos-5) + '" x2="' + (xPos-tmpDis) + '" y2="' + (yPos-tmpLen+5) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
			svgString += '<text x="' + (xPos-tmpDis-tmpFontDis) + '" y="' + (yPos-tmpLen/2) + '" text-anchor="middle" font-family="Arial" font-size="' + tmpFontSize + '" transform="rotate(270, ' + (xPos-tmpDis-tmpFontDis) + ', ' + (yPos-tmpLen/2) + ')">' + tmpLength + '</text>\n';	
			svgString += '<line x1="' + (xPos-tmpOvDis) + '" y1="' + (yPos) + '" x2="' + (xPos-tmpDis-tmpOvDis) + '" y2="' + (yPos) + '" stroke="black" />\n';
			svgString += '<line x1="' + (xPos-tmpOvDis) + '" y1="' + (yPos-tmpLen) + '" x2="' + (xPos-tmpDis-tmpOvDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';		
		}
		else{
			svgString += '<line x1="' + (xPos+tmpDis) + '" y1="' + (yPos-5) + '" x2="' + (xPos+tmpDis) + '" y2="' + (yPos-tmpLen+5) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
			svgString += '<text x="' + (xPos+tmpDis-tmpFontDis) + '" y="' + (yPos-tmpLen/2) + '" text-anchor="middle" font-family="Arial" font-size="' + tmpFontSize + '" transform="rotate(270, ' + (xPos+tmpDis-tmpFontDis) + ', ' + (yPos-tmpLen/2) + ')">' + tmpLength + '</text>\n';	
			svgString += '<line x1="' + (xPos+tmpOvDis) + '" y1="' + (yPos) + '" x2="' + (xPos+tmpDis+tmpOvDis) + '" y2="' + (yPos) + '" stroke="black" />\n';
			svgString += '<line x1="' + (xPos+tmpOvDis) + '" y1="' + (yPos-tmpLen) + '" x2="' + (xPos+tmpDis+tmpOvDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';				
		}		
	}

	// Return SVG-String to be inserted in the SVG-File
	return svgString;
}


// Get an array of positions from a Descriptor\n//########################################################
static process_Descriptor(inputDescriptor:string, inputNumber:number): number[] {
  
  // Initialize variables
  let splittedDescriptor = inputDescriptor.split("_", 99);
  let dimArray: number[] = [];
  let xArray: number[] = [];
  let resultArray: number[] = [];
  let z: number=0;
  let l: number=0;
  
  try {
    // Cycle to split the Descriptor
    splittedDescriptor.forEach(s => {
      dimArray[z] = 0
      xArray[z] = 0
      let splittedDescriptor1 = s.split("+", 99);
      splittedDescriptor1.forEach(q => {
        let splittedDescriptor2 = q.split("-", 99);
        splittedDescriptor2.forEach(w => {
          if (w.substring(w.length - 2) == 'mm') {
            if (splittedDescriptor2.length > 1) { dimArray[z] = dimArray[z] - parseFloat(w.substring(0, w.length - 2)); }
            else { dimArray[z] = dimArray[z] + parseFloat(w.substring(0, w.length - 2)); }
          }
          else { xArray[z] = xArray[z] + parseFloat(w); }
        })
      })
      z++
    })

    // Initialize variables
    let dimTotal = dimArray.reduce((a, b) => a + b, 0);
    let xTotal = xArray.reduce((a, b) => a + b, 0);
    let xUnit: number = 0;
    if (xTotal == 0 && dimTotal == inputNumber) {
      xUnit = (inputNumber - dimTotal);
    }
    else if (xTotal == 0 && dimTotal != inputNumber) {
      let Text = ' Descriptor: ' + inputDescriptor + ' / Dimension: ' + inputNumber;
      let ErrorMessage = GlobalFunc.find_ErrorList('Error 40001', 1)
      //logError(ErrorMessage.Message(Text));
      throw new Error(ErrorMessage.Message(Text)); 
    }
    else {
      xUnit = (inputNumber - dimTotal) / xTotal;
    }
    let tempAcum: number = 0;

    // Cycle 
    for (l = 0; l < z - 1; l++) {
      resultArray![l] = 0;
      if (tempAcum + dimArray[l] + xArray[l] * xUnit >= inputNumber) {
        resultArray![l] = inputNumber;
        l = 9999999;
      }
      else {
        resultArray![l] = tempAcum + dimArray[l] + xArray[l] * xUnit;
      }

      tempAcum = resultArray![l];
    }
  }
  catch (error: any)
  {
      logError('process_Descriptor: ' + error.message);
  }

  // Return Information
  return resultArray!;
}


// Process Machining\'s NEW STRING\n//########################################################
static process_Machinings(inputString:string): [string, number , number, string, string, number, number] [] {

  // Excample String
  // let CompleteString: string = 'DrillV_10_11_Back_Top@10_42|20_84&DrillV_20_32_Back_Top@32_64|32_64_96'

  // Initialize variables
  let CompleteString: string = inputString;
  let tempMachinings = CompleteString.split("&", 99);
  let m: number=0;
  let tx: number=0;
  let ty: number=0;
  let numberMachining: number=0;
  let Machinings: [string, number , number, string, string, number, number] []=[];
  let temp:any;
  let temp1:any;
  let temp2:any;
  let temp2_1:any;
  let temp2_2:any
  
  // Cycle to split the string and push the machinings to an array of machinings
  while ((tempMachinings[m] ? tempMachinings[m]: 0) != 0)
  {
    // Split the 2 sides of a Machining separated with @
    temp=tempMachinings[m].split("@", 2);
    // Split the first side of a Machining to get its values
    temp1 = temp[0].split("_",5);
    // Split the second side of a Machining to get its values
    temp2 = temp[1].split("|",2);
      // Split from the first side to get X coordinates
      temp2_1 = temp2[0].split("_",99);
      // Split from the seconde side to get Y coordinates
      temp2_2 = temp2[1].split("_",99);
    
    tx=0;
    while ((temp2_1[tx] ? temp2_1[tx]: 0) != 0)
    {
      ty=0
      while ((temp2_2[ty] ? temp2_2[ty]: 0) != 0)
      {
        Machinings.push([temp1[0],parseFloat(temp1[1]),parseFloat(temp1[2]), temp1[3], temp1[4], parseFloat(temp2_1[tx]), parseFloat(temp2_2[ty])]);
        numberMachining++
        ty++
      }
      tx++
    }
    m++
  }

  // Return the machining information
  return Machinings;
}


// Return value from hardware library\n//########################################################
static find_HardwareLibrary(SupArtNmbr:string, Supplier:string):ICT_tab_HardwareLibrary{
	let retEntry = ct_tab_HardwareLibrary.find(p=> p.in_SupplierArticleNumber == SupArtNmbr && p.in_Supplier == Supplier);
	if (retEntry == undefined) {
		let Text = 'SupplierArticleNumber: ' + SupArtNmbr + 'and Supplier: ' + Supplier;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 12002',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from edge library\n//########################################################
static find_EdgeLibrary(EdgeObject:string):ICT_tab_EdgeLibrary{
	let	retEntry= ct_tab_EdgeLibrary.find(p=> p.in_EdgeObject == EdgeObject)!;
	if (retEntry== undefined) {
		let Text = 'EdgeObject: ' + EdgeObject;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 12003',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from HandleLengthMapping\n//########################################################
static find_HandleLengthMapping(HandleDesign:string, FrontDim:number):ICT_tab_HandleLengthMapping{
	let retEntry = ct_tab_HandleLengthMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_FrontDimensionMin <= FrontDim && p.in_FrontDimensionMax >= FrontDim);
	if (retEntry == undefined) {
		let Text = 'HandleDesign: ' + HandleDesign + ', FrontDimension: ' + FrontDim;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13004',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from HandleMapping\n//########################################################
static find_HandleMapping(HandleDesign:string, HandleColor:string, PosType:string, HandleLength:number, HandleLenRelevant:boolean, HandlePosTypeRelevant:boolean, HandleColorRelevant:boolean):ICT_tab_HandleMapping{

	// Initialize Varaibles
	let retEntry:any;
	let ErrMsg:string = 'NoMsg';

	// Version 1
	if(HandleLenRelevant == true && HandleColorRelevant == true && HandlePosTypeRelevant == true){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandleColor == HandleColor && p.in_HandlePosType == PosType && p.in_HandleLength == HandleLength);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', HandleColor: ' + HandleColor + ', PosType: ' + PosType + ', HandleLength: ' + HandleLength;
	}

	// Version 2
	if(HandleLenRelevant == false && HandleColorRelevant == false && HandlePosTypeRelevant == false){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign;
	}

	// Version 3
	if(HandleLenRelevant == true && HandleColorRelevant == false && HandlePosTypeRelevant == false){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandleLength == HandleLength);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', HandleLength: ' + HandleLength;
	}

	// Version 4
	if(HandleLenRelevant == false && HandleColorRelevant == true && HandlePosTypeRelevant == false){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandleColor == HandleColor);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', HandleColor: ' + HandleColor;
	}

	// Version 5
	if(HandleLenRelevant == false && HandleColorRelevant == false && HandlePosTypeRelevant == true){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandlePosType == PosType);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', PosType: ' + PosType;
	}

	// Version 6
	if(HandleLenRelevant == true && HandleColorRelevant == true && HandlePosTypeRelevant == false){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandleLength == HandleLength && p.in_HandleColor == HandleColor);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', HandleLength: ' + HandleLength + ', HandleColor: ' + HandleColor;
	}

	// Version 7
	if(HandleLenRelevant == false && HandleColorRelevant == true && HandlePosTypeRelevant == true){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandleColor == HandleColor && p.in_HandlePosType == PosType);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', HandleColor: ' + HandleColor + ', PosType: ' + PosType;
	}

	// Version 8
	if(HandleLenRelevant == true && HandleColorRelevant == false && HandlePosTypeRelevant == true){
		retEntry = ct_tab_HandleMapping.find(p=> p.in_HandleDesign == HandleDesign && p.in_HandleLength == HandleLength && p.in_HandlePosType == PosType);
		ErrMsg = 'Error 13003: Could not find entry in tab_HandleMapping for HandleDesign: ' + HandleDesign + ', HandleLength: ' + HandleLength + ', PosType: ' + PosType;
	}

	if (retEntry == undefined) {
		logError(ErrMsg);
	}

	// Return Value
	return retEntry!;
}


// Calculation of edge information\'s\n//########################################################
static process_EdgeInfo(PartID:string, PartThickness:number, ColorFront:string, ColorLeft:string, ColorBack:string, ColorRight:string, EdgeFrontType:string, EdgeLeftType:string, EdgeBackType:string, EdgeRightType:string, EdgeJointType:string, AddInfo1:string = 'None') {

	let Program = 'All'

	//====================================================================
	// Get data from tables and local functions
	//====================================================================

	//---------------Get EdgeData-----------------
	let EdgeFrontData = getEdgeData(Program, EdgeFrontType, ColorFront, PartThickness);
	let EdgeLeftData = 	getEdgeData(Program, EdgeLeftType,	ColorLeft,	PartThickness);
	let EdgeBackData = 	getEdgeData(Program, EdgeBackType,	ColorBack,	PartThickness);
	let EdgeRightData = getEdgeData(Program, EdgeRightType,	ColorRight,	PartThickness);

	//---------------Get EdgeCode-----------------
	let EdgeFrontCode = EdgeFrontData 	? 	EdgeFrontData.EdgeId! 	: 	'NoEdge'; 
	let EdgeLeftCode = 	EdgeLeftData 	? 	EdgeLeftData.EdgeId! 	: 	'NoEdge';
	let EdgeBackCode = 	EdgeBackData 	? 	EdgeBackData.EdgeId! 	: 	'NoEdge';
	let EdgeRightCode = EdgeRightData 	? 	EdgeRightData.EdgeId! 	: 	'NoEdge';

	//---------------Get EdgeJoint-----------------
	let EdgeJointFrontLeft = 	getEdgeJoint(PartID, EdgeFrontCode, EdgeLeftCode, EdgeJointType, 'FrontLeft');
	let EdgeJointLeftBack = 	getEdgeJoint(PartID, EdgeLeftCode, EdgeBackCode, EdgeJointType, 'LeftBack');
	let EdgeJointBackRight = 	getEdgeJoint(PartID, EdgeBackCode, EdgeRightCode, EdgeJointType, 'BackRight');
	let EdgeJointRightFront = 	getEdgeJoint(PartID, EdgeRightCode, EdgeFrontCode, EdgeJointType, 'RightFront');

	//---------------Calculate EdgeTransition-----------------
	let EdgeTransition = calculateEdgeTransition(EdgeFrontCode, EdgeJointFrontLeft, EdgeJointRightFront);
	EdgeTransition += ':';
	EdgeTransition += calculateEdgeTransition(EdgeBackCode, EdgeJointBackRight, EdgeJointLeftBack);
	EdgeTransition += ':';
	EdgeTransition += calculateEdgeTransition(EdgeLeftCode, EdgeJointLeftBack, EdgeJointFrontLeft);
	EdgeTransition += ':';
	EdgeTransition += calculateEdgeTransition(EdgeRightCode, EdgeJointRightFront, EdgeJointBackRight);

	//---------------Calculate EdgeShape-----------------
	let EdgeShape: string = '';
	if (EdgeBackCode != 'NoEdge')
	{
		EdgeShape += EdgeJointLeftBack == 'S' ? 'N1' : 'N0';
	}
	if (EdgeLeftCode != 'NoEdge')
	{
		EdgeShape += EdgeJointFrontLeft == 'S' ? 'W1' : 'W0';
	}
	if (EdgeFrontCode != 'NoEdge')
	{
		EdgeShape += EdgeJointRightFront == 'S' ? 'S1' : 'S0';
	}
	if (EdgeRightCode != 'NoEdge')
	{
		EdgeShape += EdgeJointBackRight == 'S' ? 'E1' : 'E0';
	}

	// Insert Separators in EdgeShape
	if (EdgeShape.length>3)
	{
		const matches = EdgeShape.match(/.{1,2}/g);
		EdgeShape = matches!.join('_');
	}

	//====================================================================
	// Define Output
	//====================================================================

	let EdgeInfo = {
	// Create EdgeInfo with values to return
	EdgeFrontCode     : EdgeFrontCode,
	EdgeLeftCode 			: EdgeLeftCode,
	EdgeBackCode 			: EdgeBackCode,
	EdgeRightCode			: EdgeRightCode,
	EdgeFrontData			: EdgeFrontData,
	EdgeLeftData			: EdgeLeftData,
	EdgeBackData			: EdgeBackData,
	EdgeRightData			: EdgeRightData,
	EdgeJointFrontLeft		: EdgeJointFrontLeft,
	EdgeJointLeftBack		  : EdgeJointLeftBack,
	EdgeJointBackRight		: EdgeJointBackRight,
	EdgeJointRightFront	  : EdgeJointRightFront,
	EdgeTransition			  : EdgeTransition,
	EdgeShape				      : EdgeShape,

	OverdimensionFront    :	EdgeFrontData	?  getPartOverdimension(EdgeFrontType, EdgeFrontData.Thickness!)	: 0,
	OverdimensionLeft     :	EdgeLeftData	?  getPartOverdimension(EdgeLeftType, EdgeLeftData.Thickness!)	: 0,
	OverdimensionBack     :	EdgeBackData	?  getPartOverdimension(EdgeBackType, EdgeBackData.Thickness!)	: 0,
	OverdimensionRight    :	EdgeRightData	?  getPartOverdimension(EdgeRightType, EdgeRightData.Thickness!)	: 0,

	}

	return EdgeInfo;

	//====================================================================
	// Local Functions (local functions were created to avoid repeting code - tipically, once per edge)
	//====================================================================

	//---------------Function getEdgeJoint-----------------
	function getEdgeJoint (partID: string, edgeCode: string, edgeNeighbourCode: string, edgeType: string, edge:string): string {
		if (edgeCode == 'NoEdge')
		{
			return 'E'
		}
		else if (edgeCode != 'NoEdge' && edgeNeighbourCode == 'NoEdge')
		{
			return 'S'
		}

		let partSettings = GlobalFunc.find_PartSettings(partID, AddInfo1);
		
		let e = GlobalFunc.find_EdgeJointSettings(partSettings.PartGroup!,edgeType)!;
		if (edge=="FrontLeft")  return e.EdgeJointFrontLeft!; 
		if (edge=="LeftBack")  return e.EdgeJointLeftBack!; 
		if (edge=="BackRight")  return e.EdgeJointBackRight!; 
		if (edge=="RightFront")  return e.EdgeJointRightFront!; 
		
		logError('Wrong parameter passed for getEdgeJoint:' + edge);
		return 'ERROR';
	};

	//---------------Function getEdgeData-----------------
	function getEdgeData(Program: string, edgeType: string, color: string, partthickness: number): ICT_tab_EdgeLibrary | undefined {

	if (edgeType != 'NOE') 
	{
		let edgeSettings = GlobalFunc.find_EdgeClassSettings(edgeType); 
		let edgeMapping = GlobalFunc.find_EdgeMapping(Program, edgeSettings.EdgeClass!, color, partthickness);
		if (!edgeMapping) {
			return undefined;
		}
		else if (edgeMapping.EdgeObject! == 'NoEdge')
			{
				return undefined;
			}
		else
			{
			let edgeLibrary = GlobalFunc.find_EdgeLibrary(edgeMapping.EdgeObject!);
			
				return edgeLibrary;
			}			
		}
		return undefined;
	};

	//---------------Function calculateEdgeTransition-----------------
	function calculateEdgeTransition (edgeCode: string, edgeJointL: string, edgeJointR: string): string {
		let edgeTransition: string ='';
		if (edgeCode != 'NoEdge') {
			edgeTransition = '0';
			edgeTransition += (edgeJointL == 'L') ? '1' : '0';
			edgeTransition += (edgeJointR == 'L' || edgeJointR == 'E') ? '0' : '1';
		}
		return edgeTransition;
	};

	//---------------Function getPartOverdimension-----------------
	function getPartOverdimension(edgeType: string, edgethickness: number): number {
		
		if (edgeType != 'NOE' && GlobalFunc.find_PartOverdimensionSettings(edgethickness)!) 
		{
			return GlobalFunc.find_PartOverdimensionSettings(edgethickness).Overdimension;
		}
		
		return 0;
	};
}


// Find GrainDirection for output\n//########################################################
static find_GrainDirection(PartGroup: string ="All", BoardGrain:string ="N", PartGrain:string ="All"):ICT_tab_GrainSettings{
	let retEntry = ct_tab_GrainSettings.find(p => p.in_PartGroup == PartGroup && p.in_BoardGrain == BoardGrain && p.in_PartGrain == PartGrain);
	if (retEntry == undefined) {
		logError('Error 15006: Could not find entry in tab_GrainSettings: ' + PartGroup + " , " + BoardGrain + " , " + PartGrain);
	}
	return retEntry!;
}


// Find Hardware Settings\n//########################################################
static find_HardwareSettings(SupArtNmbr:string, Supplier:string):ICT_tab_HardwareSettings{
	let retEntry = ct_tab_HardwareSettings.find(p=> p.in_SupplierArticleNumber == SupArtNmbr && p.in_Supplier == Supplier);
	if (retEntry == undefined) {
		logError('Error 14008: Could not find entry in tab_HardwareSettings for SupplierArticleNumber: ' + SupArtNmbr + ', Supplier: ' + Supplier);
	}
	return retEntry!;
}


// Find Board Mapping\n//########################################################
static find_BoardMapping(color:string, partthickness:number):ICT_tab_BoardMapping{
	let retEntry = ct_tab_BoardMapping.find(p=> p.in_NeutralColor == color && p.in_BoardThkMin <= partthickness && p.in_BoardThkMax >= partthickness);
		if (retEntry == undefined) {
		let Text = color + ' and PartThickness ' + partthickness;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13001',1)
		logError(ErrorMessage.Message(Text));
	}	
	return retEntry!;
}


// Find Edge Settings\n//########################################################
static find_EdgeSettings(TypeElement:string, Part:string, EdgeTypeFront:string, EdgeTypeLeft:string, EdgeTypeBack:string, EdgeTypeRight:string):any{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_TypeElement: TypeElement,
		in_Part: Part
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_EdgeTypeFront: EdgeTypeFront,
		in_EdgeTypeLeft: EdgeTypeLeft,
		in_EdgeTypeBack: EdgeTypeBack,
		in_EdgeTypeRight: EdgeTypeRight
	};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_EdgeSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = EdgeTypeFront + ' - ' + EdgeTypeLeft + ' - ' + EdgeTypeBack + ' - ' + EdgeTypeRight;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14021',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
}


// Find EdgeMapping\n//########################################################
static find_EdgeMapping(Program:string, EdgeClass:string, NeutralColor:string, BoardThickness:number):any{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_Program: Program,
		in_NeutralColor: NeutralColor
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_EdgeClass: EdgeClass
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
		MinAttr: "in_BoardThkMin",
		MaxAttr: "in_BoardThkMax",
		Value: BoardThickness
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_EdgeMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = 'Program: ' + Program + ', Color: ' + NeutralColor + ', EdgeClass: ' + EdgeClass + ', BoardThickness: ' + BoardThickness;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13002',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
}


// Find Part Settings\n//########################################################
static find_PartSettings(Part:string, AdditionalInfo1: string = 'All', returnError = true):ICT_tab_PartSettings{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_AdditionalInfo1: AdditionalInfo1		
	};

	// Fixed parameters
	let FixedParams: any = {
		in_Part: Part
	};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and retrieve the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_PartSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined && returnError) {
		let Text = 'Part: ' + Part + ', AdditionalInfo1: ' + AdditionalInfo1;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14003',1);
		logError(ErrorMessage.Message(Text));
	}

	// Return the value
	return retVal;

}


// Find the proper values in the FrontConstruction Table to reconize the info regarding the front panel\n//##################################################################
static find_FrontConstruction(FrontProgram:string, FrontDesign:string, PartGroup:string, Width:number, Height:number, HStrip:string, HPos:string):ICT_tab_FrontConstruction{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_FrontProgram: FrontProgram,
		in_HandleStrip: HStrip,
		in_HandlePosType: HPos
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_PartGroup: PartGroup
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_MinWidth",
			MaxAttr: "in_MaxWidth",
			Value: Width
		},
		"Range2": {
			MinAttr: "in_MinHeight",
			MaxAttr: "in_MaxHeight",
			Value: Height
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and retrieve the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_FrontConstruction, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = PartGroup + ' - ' + FrontProgram + ' - ' + Width + ' - ' + Height + ' - ' + HStrip + ' - ' + HPos;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11006',1);
		logError(ErrorMessage.Message(Text));
	}

	// Return the value
	return retVal;
		
}


// Find PlinthAreaMapping
static find_PlinthAreaMapping(MatrixPositionType: number, PlinthAreaDesign: string, PlinthAreaElementColor: string, PlinthAreaExtraItem: string, PlinthAreaHeight: number, ShelfBtmThk: number, ColorRelevant: boolean = false, ExtraItemRelevant: boolean = false):ICT_tab_PlinthAreaMapping{
  
	// Wildcard parameters
	let WildcardParams: any = {};
	
	// Fixed parameters
	const FixedParams: any = {
		in_MatrixPositionType: MatrixPositionType,
		in_PlinthAreaDesign: PlinthAreaDesign,
		...(ColorRelevant && { in_PlinthAreaElementColor: PlinthAreaElementColor }),
		...(ExtraItemRelevant && { in_PlinthAreaExtraItem: PlinthAreaExtraItem })
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
		MinAttr: "in_PlinthAreaHeightMin",
		MaxAttr: "in_PlinthAreaHeightMax",
		Value: PlinthAreaHeight
    },
    "Range2": {
		MinAttr: "in_ShelfBtmThkMin",
		MaxAttr: "in_ShelfBtmThkMax",
		Value: ShelfBtmThk
    }
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_PlinthAreaMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = MatrixPositionType + ' - ' + PlinthAreaDesign + ' - ' + PlinthAreaElementColor + ' - ' + PlinthAreaExtraItem + ' - ' + PlinthAreaHeight + ' - ' + ShelfBtmThk;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13007',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;

}


// Find Plinth Area Settings
static find_PlinthAreaSettings(TypeElement: string, PlinthAreaDesign:string,  PositionLeftMatrix:string, PositionRightMatrix:string, PositionBackMatrix:string, PositionFrontMatrix:string, CarcaseWidth:number, CarcaseDepth:number, Weight:number):ICT_tab_PlinthAreaSettings[]{
  
	// Wildcard parameters
	let WildcardParams: any = {	
		in_TypeElement: TypeElement
	};
	
	// Fixed parameters
	let FixedParams: any = {
    in_PlinthAreaDesign: PlinthAreaDesign,
    in_PositionLeftMatrix: PositionLeftMatrix,
    in_PositionRightMatrix: PositionRightMatrix,
    in_PositionBackMatrix: PositionBackMatrix,
    in_PositionFrontMatrix: PositionFrontMatrix
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
		MinAttr: "in_CarcaseWidthMin",
		MaxAttr: "in_CarcaseWidthMax",
		Value: CarcaseWidth
    },
    "Range2": {
		MinAttr: "in_CarcaseDepthMin",
		MaxAttr: "in_CarcaseDepthMax",
		Value: CarcaseDepth
    },
    "Range3": {
		MinAttr: "in_WeightMin",
		MaxAttr: "in_WeightMax",
		Value: Weight
    }
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=false;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_PlinthAreaSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = TypeElement + ' - ' + PlinthAreaDesign + ' - ' + PositionLeftMatrix + ' - ' + PositionRightMatrix + ' - ' + PositionBackMatrix + ' - ' + PositionFrontMatrix + ' - ' + CarcaseWidth + ' - ' + CarcaseWidth + ' - ' + Weight;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14011',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;

}


// Return value from plinth area construction
static find_PlinthAreaConstruction(BasePoint:number, MatrixPositionType:number, Rotation:number):ICT_tab_PlinthAreaConstruction{
	let retEntry = ct_tab_PlinthAreaConstruction.find(p=> p.in_BasePoint == BasePoint && p.in_MatrixPositionType == MatrixPositionType && p.in_RotationMin <= Rotation && p.in_RotationMax >= Rotation)!;
	if (retEntry == undefined) {
		let Text = BasePoint + ' - ' + MatrixPositionType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11005',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
	}


// Return value from CornerunitStraightConstruction\n//########################################################
static find_CornerunitStraightConstruction(Construction:string,Direction:string,Part:string,FingergripTop:boolean):ICT_tab_CornerunitStraightConstruction{
	let retEntry = ct_tab_CornerunitStraightConstruction.find(p=> p.in_ConstructionType == Construction && p.in_Direction==Direction && p.in_Part == Part && p.in_FingergripTop == FingergripTop);
	if (retEntry == undefined) {
		let Text = Construction + ' and Direction: ' + Direction + ' and Part: ' + Part + ' and FingergripTop: ' + FingergripTop;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11003',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Find adjustable shelf Settings\n//########################################################
static find_ShelfadjSettings(CarcaseColor:string, FrontDesign:string, FrontProgram:string, ShelfadjType:string, CarcaseSpaceWidth: number, CarcaseSpaceDepth: number):ICT_tab_ShelfadjSettings{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_CarcaseColor: CarcaseColor,
		in_FrontDesign: FrontDesign,
		in_FrontProgram: FrontProgram
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_ShelfadjType: ShelfadjType
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_CarcaseSpaceWidthMin",
			MaxAttr: "in_CarcaseSpaceWidthMax",
			Value: CarcaseSpaceWidth
		},
		"Range2": {
			MinAttr: "in_CarcaseSpaceDepthMin",
			MaxAttr: "in_CarcaseSpaceDepthMax",
			Value: CarcaseSpaceDepth
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_ShelfadjSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		//logError('Error 14013: Could not find entry in tab_ShelfadjSettings for input values: ' + ShelfadjType + '-' + CarcaseSpaceWidth + '-' + CarcaseSpaceDepth);
		let Text = 'CarcaseColor: ' + CarcaseColor + ', FrontDesign: ' + FrontDesign + ', FrontProgram: ' + FrontProgram + ', ShelfadjType: ' + ShelfadjType + ', CarcaseSpaceWidth: ' + CarcaseSpaceWidth + ', CarcaseSpaceDepth: ' + CarcaseSpaceDepth;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14013',1);
		logError(ErrorMessage.Message(Text));
	}
	return retVal!;
	}


// Process calculation of adjustable shelves positions\n//########################################################
static process_ShelfadjPos(m: IFuncParents_mc_ShelfadjGroup01) {
	
	//---------------Initialzize variables--------------------------------------

	let retShelfAdjInfo: any = {};
	let arrPositions: number[] = [];
	let Quantity: number;
	let Color: string;

	let CarcaseSpaceDimension = JSON.parse(m.mod_CarcaseSpaceDimension[0]);

	//---------------Get information form tab_ShelfadjSettings------------------
	let retShelfadjSettings = GlobalFunc.find_ShelfadjSettings(m.mod_CarcaseColor, m.mod_FrontDesign, m.mod_FrontProgram, m.mod_ShelfadjDesign_matrix.ShelfadjType!, m.mod_Width, CarcaseSpaceDimension.DepthFreeSpace);

	//---------------Decide to provide data from table or attribute-------------

	// Module to use for the adjustable shelf
	let Module = retShelfadjSettings.ModuleType!;

	/*
	// Color of the adjustable shelf	
	if (Module == 'Wood') {
		if (m.mod_ShelfadjDesign_matrix.ShelfadjColor == 'Automatic') {
			if (retShelfadjSettings.ShelfadjColor! == 'LikeCarcaseColor') {
        Color = m.mod_CarcaseColor;
      }
      else {
        Color = retShelfadjSettings.ShelfadjColor!;
      }
		}
		else {
			Color = m.mod_ShelfadjWoodColor;
		}
	}
	else{
		Color = m.mod_ShelfadjDesign_matrix.ShelfadjColor == 'Automatic' ? retShelfadjSettings.ShelfadjColor! : m.mod_ShelfadjGlassColor;
	}
	*/
	

	// Color of the adjustable shelf
	if (m.mod_ShelfadjDesign_matrix.ShelfadjColor == 'Automatic') {
			if (retShelfadjSettings.ShelfadjColor! == 'LikeCarcaseColor') {
			Color = m.mod_CarcaseColor;
			}
			else {
			Color = retShelfadjSettings.ShelfadjColor!;
			}
	}
	else {
		Color = m.mod_ShelfadjColor;
	}


	// Thickness of the adjustable shelf
	let Thickness = m.mod_ShelfadjDesign_matrix.ShelfadjThk == 'Automatic' ? retShelfadjSettings.ShelfadjThk! : m.mod_ShelfadjThk;


/*
	//---------------Settings from tab_ShelfadjQtyPosSettings-------------------

	if(m.mod_ShelfadjDesign_matrix.ShelfadjQty == 'Automatic'){
	
		// Call table tab_ShelfadjQtyPosSettings
		let retQtyPosSetting = GlobalFunc.find_ShelfadjQtyPosSettings(m.mod_TypeElement, m.mod_ShelfadjPartParentName, m.mod_ShelfadjPartParentType, CarcaseSpaceDimension.HeightFreeSpace);

		let QtyShelfAdj = retQtyPosSetting.DescriptorPosY!.split('_').length-1;
		let CalcTotalHeight = QtyShelfAdj*Thickness;

		// Process  the descriptor
		let arrDescPos = GlobalFunc.process_Descriptor(retQtyPosSetting.DescriptorPosY!, CarcaseSpaceDimension.HeightFreeSpace-CalcTotalHeight);
		
		// Create information for the positions of the adjustable shelves
		let i=0;	
		arrDescPos.forEach(position=> {
			i++;
			if (i == 1) {
				arrPositions[i] = parseFloat(position.toFixed(1));
			}
			else {
				arrPositions[i] = parseFloat(position.toFixed(1)) + Thickness * (i-1);
			}
		})

		// Quantity of adjustable shelves
		Quantity = i;
	}
	
	else{
		Quantity=m.mod_ShelfadjQty;
		let i: number;
		for (i = 1; i <= Quantity; i++) {
			if(i == 1){arrPositions[i] = m.mod_ShelfadjPos1;}
			else if(i == 2){arrPositions[i] = m.mod_ShelfadjPos2;}
			else if(i == 3){arrPositions[i] = m.mod_ShelfadjPos3;}
			else if(i == 4){arrPositions[i] = m.mod_ShelfadjPos4;}
			else if(i == 5){arrPositions[i] = m.mod_ShelfadjPos5;}
			else if(i == 6){arrPositions[i] = m.mod_ShelfadjPos6;}  
      		else if(i == 7){arrPositions[i] = m.mod_ShelfadjPos7;}  
		}
	}
*/


	//---------------Settings from tab_ShelfadjQtyPosSettings-------------------

	if (m.mod_ShelfadjDesign_matrix.ShelfadjQty == 'Automatic') {

		// Call table tab_ShelfadjQtyPosSettings
		let retQtyPosSetting = GlobalFunc.find_ShelfadjQtyPosSettings(m.mod_TypeElement, m.mod_ShelfadjPartParentName, m.mod_ShelfadjPartParentType, CarcaseSpaceDimension.HeightFreeSpace);

		let QtyShelfAdj = retQtyPosSetting.DescriptorPosY!.split('_').length - 1;
		let CalcTotalHeight = QtyShelfAdj * Thickness;

		// Process  the descriptor
		let arrDescPos = GlobalFunc.process_Descriptor(retQtyPosSetting.DescriptorPosY!, CarcaseSpaceDimension.HeightFreeSpace - CalcTotalHeight);

		// Create information for the positions of the adjustable shelves
		let i = 0;
		arrDescPos.forEach(position => {
			i++;
			if (i == 1) {
				arrPositions[i] = parseFloat(position.toFixed(1));
			}
			else {
				arrPositions[i] = parseFloat(position.toFixed(1)) + Thickness * (i - 1);
			}
		})

		// Quantity of adjustable shelves
		Quantity = i;
	
	}

else {

	let QtyShelfAdj = m.mod_ShelfadjDescriptor.split('_').length - 1;
	let CalcTotalHeight = QtyShelfAdj * Thickness;

	// Process  the descriptor
	let arrDescPos = GlobalFunc.process_Descriptor(m.mod_ShelfadjDescriptor, CarcaseSpaceDimension.HeightFreeSpace - CalcTotalHeight);

	// Create information for the positions of the adjustable shelves
	let i = 0;
	arrDescPos.forEach(position => {
		i++;
		if (i == 1) {
			arrPositions[i] = parseFloat(position.toFixed(1));
		} else {
			arrPositions[i] = parseFloat(position.toFixed(1)) + Thickness * (i - 1);
		}
	})
			// Quantity of adjustable shelves
		Quantity = i;
	
	}

	//---------------Settings from tab_ShelfadjDrillSettings--------------------
	let retDrillSettings = GlobalFunc.find_ShelfadjDrillSettings(m.mod_TypeElement,m.mod_ShelfadjPartParentName, m.mod_ShelfadjPartParentType, m.mod_VertDividerType, Module, Thickness, m.mod_Width, CarcaseSpaceDimension.DepthFreeSpace);
	
	// Manage the quantity of drills
	let QtyDrills = 0;
	if (m.mod_ShelfadjDesign_matrix.ShelfadjDrillType == 'Automatic'){
		QtyDrills = retDrillSettings.ShelfadjDrillType;
	}
	else{
		QtyDrills = m.mod_ShelfadjDrillType_matrix.NumberDrillings;
	}

	// Manage the drill distance
	let DrillDistance = retDrillSettings.ShelfadjDrillDistance;
	if (m.mod_ShelfadjDesign_matrix.ShelfadjDrillDistance != 'Automatic'){
		DrillDistance = m.mod_ShelfadjDrillDistance;
	}

	//---------------Return values----------------------------------------------

	retShelfAdjInfo.StartPosY = arrPositions;
	retShelfAdjInfo.StartPosX = 0;
	retShelfAdjInfo.StartPosZ = 0;
	retShelfAdjInfo.ShelfThk = Thickness;
	retShelfAdjInfo.ModuleType = Module;
	retShelfAdjInfo.Color = Color;
	retShelfAdjInfo.Qty = Quantity;
	retShelfAdjInfo.DrillSettings = retDrillSettings;
	retShelfAdjInfo.DrillDistance = DrillDistance;
	retShelfAdjInfo.QtyDrills = QtyDrills;
	retShelfAdjInfo.OffsetFront = retDrillSettings.ShelfadjOffsetFront(m);
	retShelfAdjInfo.OffsetBack = retDrillSettings.ShelfadjOffsetBack(m);

	return retShelfAdjInfo;

}


// Find adjustable shelf quantity and position\n//########################################################
static find_ShelfadjQtyPosSettings(TypeElement:string, FrontModule:string, FrontModuleType:string, CarcaseSpaceHeight: number):any{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_FrontModule: FrontModule,
		in_FrontModuleType: FrontModuleType,
		in_TypeElement: TypeElement
	};
	
	// Fixed parameters
	let FixedParams: any = {};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_CarcaseSpaceHeightMin",
			MaxAttr: "in_CarcaseSpaceHeightMax",
			Value: CarcaseSpaceHeight
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_ShelfadjQtyPosSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		logError('Error 14012: Could not find entry in tab_ShelfadjQtyPosSettings for input values: ' + CarcaseSpaceHeight);
	}
	return retVal;
}


// To retrieve the position of the handle stripe in the door\n//########################################################
static process_HandlestripPos(m: IFuncParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01_mc_Handlestrip01){

	// Initialize output variable
	let retHandle: any = {};
/*
	

	//========================================================================
	// Call user exit for customization
	//========================================================================

	//---------------Find PartGroup from tab_PartSettings-----------------

	//let PartGroup = GlobalFunc.find_PartSettings(PartInfo).PartGroup;

	//---------------Map the handle to tab_HardwareLibrary----------------

	let ColRelevant = true;
	let LenRelevant = true;	
	let HandlePosTypeRelevant = true;	
	let HandleW = 0;
	let HandlePosType = 'None';
	HandleW = m.mod_FrontWidth-m.mod_FrontGapVert;
	if (m.mod_ModuleName == "mc_Door01"){HandlePosType = m.mod_HandlePosType_matrix.PosTypeDoor}
	else if (m.mod_ModuleName == "mc_Drawer01"){HandlePosType = m.mod_HandlePosType_matrix.PosTypeDrawer}
	else if (m.mod_ModuleName == "mc_FlipLift01"){HandlePosType = m.mod_HandlePosType_matrix.PosTypeFliplift}
	if (m.mod_HandleDesign_matrix.HandleColor == 'Attribute') { ColRelevant = true }
	let retHandleMapping = GlobalFunc.find_HandleMapping(m.mod_HandleDesign, m.mod_HandleColor, HandlePosType, HandleW!, true, HandlePosTypeRelevant, ColRelevant);
	//---------------Find handle in tab_HardwareLibrary-------------------
	let retHandleInfo = GlobalFunc.find_HardwareLibrary(retHandleMapping.SupplierArticleNumber!, retHandleMapping.Supplier!)
	retHandle.HandleW=retHandleInfo.Length;
	retHandle.HandleH=retHandleInfo.Width;
	retHandle.HandleD=retHandleInfo.Thickness;
	retHandle.Mod3D=retHandleInfo.Model3D;
	retHandle.SupplierCode=retHandleMapping.SupplierArticleNumber;
	retHandle.Supplier=retHandleMapping.Supplier;
	retHandle.FrontReduction=retHandleInfo.FrontReduction;
*/
	return retHandle;
}


// Find GraphicLibrary\n//########################################################
static find_GraphicLibrary(GroupName:string):ICT_tab_GraphicLibrary{

	let retEntry = ct_tab_GraphicLibrary.find(p=> p.in_Model3DGroupName == GroupName)
	if (retEntry == undefined) {
		let Text = 'Model3DGroupName: ' + GroupName;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 12004',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Find GraphicLibraryMapping\n//########################################################
static find_GraphicLibraryMapping(GraphicItem:string):ICT_tab_GraphicLibraryMapping[]{
	let retEntry = ct_tab_GraphicLibraryMapping.filter(p=> p.in_GraphicItem == GraphicItem)!;
	if (retEntry == undefined) {
		let Text = 'Graphic Item: ' + GraphicItem;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13011',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
	}


// Find HardwareDrillVertLibrary\n//########################################################
static find_HardwareDrillVertLibrary(ProcessingId:string, Part:string):ICT_tab_HardwareDrillVertLibrary[]{
	let retEntry = ct_tab_HardwareDrillVertLibrary.filter(p=> p.in_ProcessingId == ProcessingId && p.in_Part == Part)!;
	return retEntry!;
	}


// Find HardwareLibraryMapping\n//########################################################
static find_HardwareLibraryMapping(HardwareItem:string):ICT_tab_HardwareLibraryMapping[]{
	let retEntry = ct_tab_HardwareLibraryMapping.filter(p=> p.in_HardwareItem == HardwareItem)!;
	if (retEntry == undefined) {
		let Text = 'Hardware Item: ' + HardwareItem;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13013',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
	}


// Find ProcessingMapping\n//########################################################
static find_ProcessingMapping(ProcessingItem:string):ICT_tab_ProcessingMapping[]{
	let retEntry = ct_tab_ProcessingMapping.filter(p=> p.in_ProcessingItem == ProcessingItem)!;
	if (retEntry == undefined) {
		let Text = 'Processing Item: ' + ProcessingItem;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13012',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
	}


// Find ObjectMapping\n//########################################################
static find_ObjectMapping(Object:string):ICT_tab_ObjectMapping{
	let retEntry = ct_tab_ObjectMapping.find(p=> p.in_Object == Object)!;
	if (retEntry == undefined) {
		logError('Error 13010: Could not find entry in tab_ObjectMapping for input values: ' + Object);
	}
	return retEntry!;
	}


// Find Hinge Position\n//########################################################
static find_HingePosition(TypeElement: string, FrontDesign:string, AdditionalInfo1: string, AdditionalInfo2:string, AdditionalInfo3:string, FrameWidth:number, FrontHeight:number, FrontWidth:number, Weight:number, FingergripTypeTop:string, FingergripTypeBtm:string, HandleDesign: string, HandlePosType:string):ICT_tab_HingePosition{
	
	// Wildcard parameters
	let WildcardParams: any = {			
		in_TypeElement: TypeElement,
		in_AdditionalInfo1: AdditionalInfo1,
		in_AdditionalInfo2: AdditionalInfo2,
		in_AdditionalInfo3: AdditionalInfo3,
		in_FrontDesign: FrontDesign,
		in_HandleDesign: HandleDesign,
		in_HandlePosType: HandlePosType
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_FingergripTypeTop: FingergripTypeTop,
		in_FingergripTypeBtm: FingergripTypeBtm
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_FrontHeightMin",
			MaxAttr: "in_FrontHeightMax",
			Value: FrontHeight
		},
		"Range2": {
			MinAttr: "in_FrontWidthMin",
			MaxAttr: "in_FrontWidthMax",
			Value: FrontWidth
		},
		"Range3": {
			MinAttr: "in_FrameWidthMin",
			MaxAttr: "in_FrameWidthMax",
			Value: FrameWidth
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_HingePosition, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = TypeElement + ' and FrontDesign: ' + FrontDesign + ' and AdditionalInfo1: ' + AdditionalInfo1 + ' and AdditionalInfo2: ' + AdditionalInfo2 + ' and AdditionalInfo3: ' + AdditionalInfo3 + ' and FrameWidth: ' + FrameWidth + ' and FrontHeight: ' + FrontHeight + ' and FrontWidth: ' + FrontWidth + ' and Weight: ' + Weight + ' and FingergripTypeTop: ' + FingergripTypeTop + ' and FingergripTypeBtm: ' + FingergripTypeBtm + ' and HandleDesign: ' + HandleDesign + ' and HandlePosType: ' + HandlePosType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 15002', 1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;




}


// Hinge Settings\n//########################################################
static find_HingeSettings(TypeElement:string, FrontType: string, AdditionalInfo1: string, AdditionalInfo2: string,FrontDesign:string, DoorThickness:number, Angle:number, InteriorCabinet:string):ICT_tab_HingeSettings{
	// Wildcard parameters
	let WildcardParams: any = {			
		in_TypeElement: TypeElement,
		in_AdditionalInfo1: AdditionalInfo1,
		in_AdditionalInfo2: AdditionalInfo2,
		in_FrontDesign: FrontDesign,
		in_InteriorCabinet: InteriorCabinet
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_Angle: Angle
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_DoorThicknessMin",
			MaxAttr: "in_DoorThicknessMax",
			Value: DoorThickness
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_HingeSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = 'TypeElement: ' + TypeElement + ' and AdditionalInfo1: ' + AdditionalInfo1 + ' and AdditionalInfo2: ' + AdditionalInfo2 + ' and FrontDesign: ' + FrontDesign + ' and DoorThickness: ' + DoorThickness + ' and Angle: ' + Angle + ' and InteriorCabinet: ' + InteriorCabinet;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14014', 1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;

	
}


// Find Hinge Drilling Distance\n//########################################################
static find_HingeDrillingDistance(HingeType:string, FrontOverlay:number, DrillingDistanceType:String):ICT_tab_HingeDrillingDistance{
	
	let retEntry = ct_tab_HingeDrillingDistance.find(p=> p.in_HingeType == HingeType && p.in_FrontOverlayMin! <= FrontOverlay && p.in_FrontOverlayMax! >= FrontOverlay && p.in_DrillingDistanceType==DrillingDistanceType);
	
	if (retEntry == undefined) {
		let Text =  HingeType + ' and FrontOverlay: ' + FrontOverlay + ' and DrillingDistanceType: ' + DrillingDistanceType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 15003',1);
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// User Exit for module mr_StorageunitSingle\n//########################################################
static ue_StorageunitSingle(parentModule: IFuncParents_mr_StorageunitSingle){

}


// Find Hinge Mapping\n//########################################################
static find_HingeMapping(HingeType:string, Application:string, MountingPlateType:string, MountingPlateHeight:string, OpeningType:string, Color:string):ICT_tab_HingeMapping{
	
	// Wildcard parameters
	let WildcardParams: any = {	
		in_OpeningType: OpeningType,
		in_Color: Color
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_HingeType: HingeType,
		in_Application: Application,
		in_MountingPlateType: MountingPlateType,
		in_MountingPlateHeight: MountingPlateHeight
	};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_HingeMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = ' HingeType: ' + HingeType + ' / Application: ' + Application + ' / MountingPlateType: ' + MountingPlateType + ' / MountingPlateHeight: ' + MountingPlateHeight + ' / OpeningType: ' + OpeningType + ' / Color: ' + Color;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13014', 1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
}


// Find adjustable shelf drill settings\n//########################################################
static find_ShelfadjDrillSettings(TypeElement:string,FrontModule:string, FrontModuleType:string, VertDividerType:string, ShelfadjType:string, ShelfadjThk:number, CCSpaceWidth:number, CCSpaceDepth:number):ICT_tab_ShelfadjDrillSettings{

	// Wildcard parameters
	let WildcardParams: any = {			
		in_TypeElement: TypeElement,
		in_FrontModule: FrontModule,
		in_FrontModuleType: FrontModuleType,
		in_VertDividerType: VertDividerType,
		in_ShelfadjType: ShelfadjType
	};
	
	// Fixed parameters
	let FixedParams: any = {};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_ShelfadjThkMin",
			MaxAttr: "in_ShelfadjThkMax",
			Value: ShelfadjThk
		},
		"Range2": {
			MinAttr: "in_CCSpaceWidthMin",
			MaxAttr: "in_CCSpaceWidthMax",
			Value: CCSpaceWidth
		},
		"Range3": {
			MinAttr: "in_CCSpaceDepthMin",
			MaxAttr: "in_CCSpaceDepthMax",
			Value: CCSpaceDepth
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_ShelfadjDrillSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		logError('Error 14015: Could not find entry in tab_ShelfadjDrillSettings for input values: ' + CCSpaceWidth + ' - ' + CCSpaceDepth + ' - ' + ShelfadjThk);
	}
	return retVal;
}


// Process CarcasePartConnection\n//########################################################
static process_CarcasePartConnection(
	ncElement: any, 
	partSelf: any, 
	part2: any, 
	posRel: any, 
	Area: string, 
	PartType: string, 
	DrillingArea: string, 
	TouchDirectionGraphic: string, 
	FallingDirection: string, 
	ConnectionOrientation: string, 
	ConnectionType: string, 
	FittingType: string,
	InsideDirection: string,
	DrillingPartType: string
){

	//###############################################################################################################
	// Initialization
	//###############################################################################################################

	// Initialize variables
	let ParentModule = partSelf.pa_ParentName;
	let TypeElement = partSelf.pa_TypeElement;
	let HardwareColor = partSelf.pa_HardwareColor;

	// Touch dimensions
	let [TouchLength, TouchWidth] = calculateTouchDimensions();

	// Find parts and Connection
	let CarcasePartConnection = GlobalFunc.find_CarcasePartConnectionMapping(ParentModule, TypeElement, Area, ConnectionType, FittingType, HardwareColor)

	//###############################################################################################################
	// Main procedure
	//###############################################################################################################

	// Check if the touch dimension were calculated correctly
	if (TouchLength > 0 && TouchWidth > 0) {

		try {

			//====================================================================
			// Outer Cycle for different connections (Minifix / Dowel)
			//====================================================================

			CarcasePartConnection.forEach(Connect => {

				//Inside/Outside variable 
				let HardwareFixed = Connect.HardwareFixed;

				// Find Settings for drillings and hardware
				let CarcasePartConnectionSettings = GlobalFunc.find_PartConnectionSettings(Connect.ConnectionHardwarePositioning!, TouchLength, TouchWidth)

				// Process Descriptor
				let LengthPositions = GlobalFunc.process_Descriptor(CarcasePartConnectionSettings.LengthDescriptor!, TouchLength);
				let WidthPositions = GlobalFunc.process_Descriptor(CarcasePartConnectionSettings.WidthDescriptor!, TouchWidth);

				// Cycle for WidthPosition descriptor (Actually we can not cover multiple drills in width direction)
				let widthPosition: number;
				WidthPositions.forEach(position => {
					widthPosition = position;
				});

				//====================================================================
				// Inner Cycle for descriptors (Different positions of the fitting)
				//====================================================================

				LengthPositions.forEach(position => {

					// Find Object 
					let Object = GlobalFunc.find_ObjectMapping(Connect.Object!);

					// Find ProcessingItem
					let ProcessingItem = GlobalFunc.find_ProcessingMapping(Object.ProcessingItem!);

					// Find GraphicItem
					let GraphicItem = GlobalFunc.find_GraphicLibraryMapping(Object.GraphicItem!);

					// Cycle for the drills
					ProcessingItem.forEach(Drill => {

						//====================================================================
						// Add Vertical Drill
						//====================================================================

						if (Drill.ProcessingLibrary == "DrillVertical") {
							let DrillLibVert = GlobalFunc.find_HardwareDrillVertLibrary(Drill.ProcessingId!, DrillingPartType)

							DrillLibVert.forEach(DrillPosition => {

								// Get the drill data from the table
								//--------------------------------------------------------------------	

								let drillData = ct_tab_CarcasePartConnectionCalculations.find(p =>
									p.in_DrillType == 'DrillVertical' &&
									p.in_PartType == PartType &&
									p.in_DrillingArea == DrillingArea &&
									p.in_TouchDirection == TouchDirectionGraphic &&
									p.in_InsideDirection == InsideDirection &&
									p.in_HardwarePosition == HardwareFixed! &&
									p.in_FallingDirection == FallingDirection &&
									p.in_ConnectionOrientation == ConnectionOrientation
								);

								if (drillData == undefined) {
									let Text = "DrillVertical - " + PartType + " - " + DrillingArea + " - " + TouchDirectionGraphic + " - " + InsideDirection + " - " + HardwareFixed + " - " + FallingDirection + " - " + ConnectionOrientation;
									let ErrorMessage = GlobalFunc.find_ErrorList('Error 40004',1)
									logError(ErrorMessage.Message(Text));
								}
								else {
									// Calculations
									//--------------------------------------------------------------------

									let positionWidth = widthPosition;
									if (DrillPosition.XA > 0) {
										positionWidth = DrillPosition.XA;
									}

									// Variables for the graphics
									let gPosX = drillData.GraphicPosX(partSelf, part2, posRel, DrillPosition, positionWidth, position, TouchLength, TouchWidth);
									let gPosY = drillData.GraphicPosY(partSelf, part2, posRel, DrillPosition, positionWidth, position, TouchLength, TouchWidth);
									let gPosZ = drillData.GraphicPosZ(partSelf, part2, posRel, DrillPosition, positionWidth, position, TouchLength, TouchWidth);
									let gDimX = drillData.GraphicDimX(DrillPosition);
									let gDimY = drillData.GraphicDimY(DrillPosition);
									let gDimZ = drillData.GraphicDimZ(DrillPosition);
									let extrusionMode = drillData?.GraphicExtrusion;

									// Add NC-element
									//--------------------------------------------------------------------

									let DrillVert = ncElement.addncout_DrillVert();
									DrillVert.nc_TOOL = "102";
									DrillVert.nc_XA = drillData?.NcPosX(partSelf, gPosX, gPosY, gPosZ);
									DrillVert.nc_YA = drillData?.NcPosY(partSelf, gPosX, gPosY, gPosZ);
									DrillVert.nc_TI = DrillPosition.TI;
									DrillVert.nc_DU = DrillPosition.DU;
									DrillVert.nc_BM = DrillPosition.matrix_BM || "LS"
									DrillVert.nc_WI = DrillPosition.matrix_WI ?? 0;
									DrillVert.nc_AB = DrillPosition.matrix_AB ?? 1;
									DrillVert.nc_LA = DrillPosition.matrix_LA ?? 0;
									DrillVert.nc_MI = DrillPosition.matrix_MI ?? 0;
									DrillVert.nc_KO = DrillPosition.matrix_KO || "00";
									DrillVert.nc_Side = drillData.NcSide;

									// Add drawing
									//--------------------------------------------------------------------

									let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, gPosX, gPosY, gPosZ, gDimX, gDimY, gDimZ);
									drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + DrillPosition.DU! / 2 + '" /></svg>', extrusionMode);
								}
							})
						}

						//====================================================================
						// Add Horizontal Drill
						//====================================================================

						else if (Drill.ProcessingLibrary == "DrillHorizontal") {
							let DrillLibHor = GlobalFunc.find_HardwareDrillHorLibrary(Drill.ProcessingId!, DrillingPartType)

							DrillLibHor.forEach(DrillPosition => {

								// Get the drill data from the table
								//--------------------------------------------------------------------	

								let drillData = ct_tab_CarcasePartConnectionCalculations.find(p =>
									p.in_DrillType == 'DrillHorizontal' &&
									p.in_PartType == PartType &&
									p.in_DrillingArea == DrillingArea &&
									p.in_TouchDirection == TouchDirectionGraphic &&
									p.in_InsideDirection == InsideDirection &&
									p.in_HardwarePosition == HardwareFixed! &&
									p.in_FallingDirection == FallingDirection &&
									p.in_ConnectionOrientation == ConnectionOrientation
								);

								if (drillData == undefined) {
									let Text = "DrillHorizontal - " + PartType + " - " + DrillingArea + " - " + TouchDirectionGraphic + " - " + InsideDirection + " - " + HardwareFixed + " - " + FallingDirection + " - " + ConnectionOrientation;
									let ErrorMessage = GlobalFunc.find_ErrorList('Error 40004',1)
									logError(ErrorMessage.Message(Text));
								}
								else {
									// Calculations
									//--------------------------------------------------------------------

									let positionWidth = widthPosition;
									if (DrillPosition.ZA > 0) {
										positionWidth = DrillPosition.ZA;
									}

									// Variables for the graphics
									let gPosX = drillData.GraphicPosX(partSelf, part2, posRel, DrillPosition, positionWidth, position, TouchLength, TouchWidth);
									let gPosY = drillData.GraphicPosY(partSelf, part2, posRel, DrillPosition, positionWidth, position, TouchLength, TouchWidth);
									let gPosZ = drillData.GraphicPosZ(partSelf, part2, posRel, DrillPosition, positionWidth, position, TouchLength, TouchWidth);
									let gDimX = drillData.GraphicDimX(DrillPosition);
									let gDimY = drillData.GraphicDimY(DrillPosition);
									let gDimZ = drillData.GraphicDimZ(DrillPosition);
									let extrusionMode = drillData.GraphicExtrusion;

									// Add NC-element
									//--------------------------------------------------------------------

									let DrillHor = ncElement.addncout_DrillHor();
									DrillHor.nc_TOOL = "103";
									DrillHor.nc_XA = drillData.NcPosX(partSelf, gPosX, gPosY, gPosZ);
									DrillHor.nc_YA = drillData.NcPosY(partSelf, gPosX, gPosY, gPosZ);
									DrillHor.nc_ZA = drillData.NcPosZ(partSelf, gPosX, gPosY, gPosZ);
									DrillHor.nc_BM = drillData.DrillDirection;
									DrillHor.nc_TI = DrillPosition.TI;
									DrillHor.nc_DU = DrillPosition.DU;
									DrillHor.nc_KO = DrillPosition.matrix_KO || "00";
									DrillHor.nc_Side = drillData.NcSide;

									// Add drawing
									//--------------------------------------------------------------------

									let drilling02 = partSelf.add3DElement('Drilling01', DrillHor, gPosX, gPosY, gPosZ, gDimX, gDimY, gDimZ);
									drilling02.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + DrillPosition.DU! / 2 + '" /></svg>', extrusionMode);
								}
							})
						}
					})
				})
			})
		}
		catch (error: any) {
			// The errors are shown before, here only stop the evaluation
		}
	}

	//###############################################################################################################
	// Touch dimensions
	//###############################################################################################################

	//====================================================================
	// Main function for calculation of touch dimensions
	//====================================================================

	function calculateTouchDimensions(): [number, number] {

		let Length = 0;
		let Width = 0;

		// Sidepanel
		//--------------------------------------------------------------------
		if (PartType === 'Sidepanel') {

			// Situation sidepanel connection with shelves left/right
			if ((ConnectionOrientation === 'FrontBack' || ConnectionOrientation === 'BackFront') && (TouchDirectionGraphic === 'Left' || TouchDirectionGraphic === 'Right')) {
				Width = part2._dimy;
				Length = calculateTouchLength(posRel.z, partSelf._dimz, part2._dimz);
			}

			// Situation sidepanel connection with shelves top/bottom
			if ((ConnectionOrientation === 'FrontBack' || ConnectionOrientation === 'BackFront') && (TouchDirectionGraphic === 'Top' || TouchDirectionGraphic === 'Bottom')) {
				Width = partSelf._dimx;
				Length = calculateTouchLength(posRel.z, partSelf._dimz, part2._dimz);
			}

			// Situation sidepanel connection with vertical panels or vertical rails left/right
			if ((ConnectionOrientation === 'TopBottom' || ConnectionOrientation === 'BottomTop') && (TouchDirectionGraphic === 'Left' || TouchDirectionGraphic === 'Right')) {
				Width = part2._dimz;
				Length = calculateTouchLength(posRel.y, partSelf._dimy, part2._dimy);
			}

			// Situation sidepanel connection with vertical panels or vertical rails front/back
			if ((ConnectionOrientation === 'TopBottom' || ConnectionOrientation === 'BottomTop') && (TouchDirectionGraphic === 'Front' || TouchDirectionGraphic === 'Back')) {
				Width = partSelf._dimx;
				Length = calculateTouchLength(posRel.y, partSelf._dimy, part2._dimy);
			}
		}

		// Shelf
		//--------------------------------------------------------------------
		if (PartType === 'Shelf') {

			// Situation shelf connection with sidepanels left/right
			if ((ConnectionOrientation === 'FrontBack' || ConnectionOrientation === 'BackFront') && (TouchDirectionGraphic === 'Left' || TouchDirectionGraphic === 'Right')) {
				Width = partSelf._dimy;
				Length = calculateTouchLength(posRel.z, partSelf._dimz, part2._dimz);
			}

			// Situation shelf connection with sidepanels top/bottom
			if ((ConnectionOrientation === 'FrontBack' || ConnectionOrientation === 'BackFront') && (TouchDirectionGraphic === 'Top' || TouchDirectionGraphic === 'Bottom')) {
				Width = part2._dimx;
				Length = calculateTouchLength(posRel.z, partSelf._dimz, part2._dimz);
			}

			// Situation shelf connection with vertical panels top/bottom
			if ((ConnectionOrientation === 'LeftRight' || ConnectionOrientation === 'RightLeft') && (TouchDirectionGraphic === 'Top' || TouchDirectionGraphic === 'Bottom')) {
				Width = part2._dimz;
				Length = calculateTouchLength(posRel.x, partSelf._dimx, part2._dimx);
			}

			// Situation shelf connection with vertical panels front/back
			if ((ConnectionOrientation === 'LeftRight' || ConnectionOrientation === 'RightLeft') && (TouchDirectionGraphic === 'Front' || TouchDirectionGraphic === 'Back')) {
				Width = partSelf._dimy;
				Length = calculateTouchLength(posRel.x, partSelf._dimx, part2._dimx);
			}
		}


		// Situation vertical panels (rails, cleat, blind panel)
		//--------------------------------------------------------------------
		if (PartType === 'PanelVertical') {

			// Situation vertical panel connection with sidepanels left/right
			if ((ConnectionOrientation === 'TopBottom' || ConnectionOrientation === 'BottomTop') && (TouchDirectionGraphic === 'Left' || TouchDirectionGraphic === 'Right')) {
				Width = partSelf._dimz;
				Length = calculateTouchLength(posRel.y, partSelf._dimy, part2._dimy);
			}

			// Situation vertical panel connection with sidepanels front/back
			if ((ConnectionOrientation === 'TopBottom' || ConnectionOrientation === 'BottomTop') && (TouchDirectionGraphic === 'Front' || TouchDirectionGraphic === 'Back')) {
				Width = part2._dimx;
				Length = calculateTouchLength(posRel.y, partSelf._dimy, part2._dimy);
			}

			// Situation vertical panel connection with shelves top/bottom
			if ((ConnectionOrientation === 'LeftRight' || ConnectionOrientation === 'RightLeft') && (TouchDirectionGraphic === 'Top' || TouchDirectionGraphic === 'Bottom')) {
				Width = partSelf._dimz;
				Length = calculateTouchLength(posRel.x, partSelf._dimx, part2._dimx);
			}

			// Situation vertical panel connection with shelves front/back
			if ((ConnectionOrientation === 'LeftRight' || ConnectionOrientation === 'RightLeft') && (TouchDirectionGraphic === 'Front' || TouchDirectionGraphic === 'Back')) {
				Width = part2._dimy;
				Length = calculateTouchLength(posRel.x, partSelf._dimx, part2._dimx);
			}
		}

		// Throw an error if touch dimension is not calculated correctly
		//--------------------------------------------------------------------
		if (Length <= 0 || Width <= 0) {
			let Text = PartType + ' in area: ' + Area;
			let ErrorMessage = GlobalFunc.find_ErrorList('Error 40004',1)
			logError(ErrorMessage.Message(Text));
		}

		// Return the values
		//--------------------------------------------------------------------
		return [Length, Width];
	}

	//====================================================================
	// Helper function to calculate touch length
	//====================================================================

	function calculateTouchLength(position: number, dimSelf: number, dim2: number): number {

		// Situation 1: part2 is completly inside partSelf
		if (position >= 0 && position + dim2 <= dimSelf) {
			return dim2;
		}

		// Situation 2: partSelf is completly inside part2
		else if (position < 0 && position + dim2 > dimSelf) {
			return dimSelf;
		}

		// Situation 3: Starting point of part2 outside of partself
		else if (position < 0) {
			return Math.max(0, dim2 + position);
		}

		// Situation 4: Ending point of part2 outside of partSelf
		else if (position + dim2 > dimSelf) {
			return Math.max(0, dimSelf - position);
		}

		// Undefined situation
		return 0;
	}
}


// Find HardwareDrillHorLibrary\n//########################################################
static find_HardwareDrillHorLibrary(ProcessingId:string, Part:string):ICT_tab_HardwareDrillHorLibrary[]{
	let retEntry = ct_tab_HardwareDrillHorLibrary.filter(p=> p.in_ProcessingId == ProcessingId && p.in_Part == Part)!;
	return retEntry!;
	}


// Function to retrieve the Drawerbox information\n//########################################################
static process_Drawerbox(m: IFuncParents_mc_DrawerBox01) {

	// Interface for the sections
	interface Section3D {
		Model3D?: any;
		ColorId?: string;
		DimX: number;
		DimY: number;
		DimZ: number;
		PosX: number;
		PosY: number;
		PosZ: number;
		arrPosX: number[];
		BoxProcessingId: string;
		BoxHardwareId: string;
		ConProcessingId: string;
		ConHardwareId: string;
		BotConProcessingId: string;
		BotConHardwareId: string
	}

	// Interface for the Boardsections
	interface SectionBoard {
		DimX: number;
		DimY: number;
		DimZ: number;
		PosX: number;
		PosY: number;
		PosZ: number;
		EdgeTypeFront: string;
		EdgeTypeBack: string;
		EdgeTypeLeft: string;
		EdgeTypeRight: string;			
		EdgeTypeJoint: string;
		EdgeColor: string;
		BoardColor: string;
		BoardGrainId: string;
		Grain: string;
		ProcessingId: string;
		HardwareId: string
	}

	// Function to set the attributes
	function setValuesSection3D(): Section3D {
		let updatedSection: Section3D = {
			Model3D: undefined,
			ColorId: 'None',
			DimX: 0,
			DimY: 0,
			DimZ: 0,
			PosX: 0,
			PosY: 0,
			PosZ: 0,
			arrPosX: [],
			BoxProcessingId: 'None',
			BoxHardwareId: 'None',
			ConProcessingId: 'None',
			ConHardwareId: 'None',
			BotConProcessingId: 'None',
			BotConHardwareId: 'None'
		};
		return updatedSection;
	}

	// Function to set the attributes
	function setValuesSectionBoard(): SectionBoard {
		let updatedSection: SectionBoard = {
			DimX: 0,
			DimY: 0,
			DimZ: 0,
			PosX: 0,
			PosY: 0,
			PosZ: 0,
			EdgeTypeFront: 'None',
			EdgeTypeBack: 'None',
			EdgeTypeLeft: 'None',
			EdgeTypeRight: 'None',			
			EdgeTypeJoint: 'None',
			EdgeColor: 'None',
			BoardColor: 'None',
			BoardGrainId: 'NoGrain',
			Grain: 'None',
			ProcessingId: 'None',
			HardwareId: 'None'
		};
		return updatedSection;
	}
	
	// Interface for the return object
	interface DrawerBoxInfo {
		SideLeft: Section3D;
		SideRight: Section3D;
		SlideLeft: Section3D;
		SlideRight: Section3D;
		BottomShelf: SectionBoard;
		Backwall: SectionBoard;
		DrillArea: Section3D;
		BomElement: Section3D;
		BottomShelfConnector: Section3D;
		Synchronization: Section3D
	}
	
	// Initialize the object
	let retDrawerBoxInfo: DrawerBoxInfo = {
		SideLeft: setValuesSection3D(),
		SideRight: setValuesSection3D(),
		SlideLeft: setValuesSection3D(),
		SlideRight: setValuesSection3D(),
		BottomShelf: setValuesSectionBoard(),
		Backwall: setValuesSectionBoard(),
		DrillArea: setValuesSection3D(),
		BomElement: setValuesSection3D(),
		BottomShelfConnector: setValuesSection3D(),
		Synchronization: setValuesSection3D()
	}
	
	// Variables
	let dbHeight= '';
	let dbDepth= '';
	let dbWeight= '';
	let dbColor = '';
	let dbSideDepth = 0;

	//========================================================================
	// Call user exit for customization
	//========================================================================

	if(m.mod_DrawerBoxLogic == 'Custom'){

	}

	//========================================================================
	// Standard Library Solution
	//========================================================================

	else{

		//---------------Data from tables or attributes---------------

		// Calculate color of the box
		if (m.mod_DrawerBoxColor == 'Automatic'){
			dbColor = GlobalFunc.find_DrawerBoxColorMapping(m.mod_HardwareColor).DrawerBoxColor!;
		}
		else{
			dbColor = m.mod_DrawerBoxColor;
		}

		// Calculate depth of the box
		let DimensionInfo = GlobalFunc.find_DrawerBoxDimensionMapping(m.mod_DrawerBoxDesign, m.mod_DrawerBoxProgram, dbColor, m.mod_Depth, m.mod_Height)
		if (m.mod_DrawerBoxDepthType == 'Automatic'){ 
			dbDepth = DimensionInfo.DepthType!;
		}
		else{
			dbDepth = m.mod_DrawerBoxDepthType;
		}

		// Calculate height of the box
		if (m.mod_DrawerBoxHeightType == 'Automatic'){ 
			dbHeight = DimensionInfo.HeightType!;
		}
		else{
			dbHeight = m.mod_DrawerBoxHeightType;
		}
		
		// Calculate weight of the box
		if (m.mod_DrawerBoxWeightType == 'Automatic'){
			dbWeight = GlobalFunc.find_DrawerBoxWeightTypeSettings( m.mod_TypeElement, m.mod_FrontWidth, m.mod_FrontHeight, dbDepth, dbHeight, m.mod_PartgroupDrawerWeight).DrawerBoxWeightType!;
		}
		else{
			dbWeight = m.mod_DrawerBoxWeightType;
		}
		
		//---------------Mapping and reading data from tables---------------

		// DrawerBoxMapping
		let dbObject = GlobalFunc.find_DrawerBoxMapping(m.mod_DrawerBoxDesign, m.mod_DrawerBoxProgram, dbColor, dbDepth, dbHeight, dbWeight, m.mod_OpeningType);

		// DrawerBox Construction
		let dbConstruction = GlobalFunc.find_DrawerBoxConstruction(dbObject.ConstructionId!)
		let dbDistanceSide = (m.mod_Width - dbConstruction.ObjWidth(m.mod_Width))/2;

		// Bottom Shelf
		retDrawerBoxInfo.BottomShelf.DimX=dbConstruction.BotShelfWidth(m.mod_Width);
		retDrawerBoxInfo.BottomShelf.DimY=dbConstruction.BotShelfThickness;
		retDrawerBoxInfo.BottomShelf.DimZ=dbConstruction.BotShelfDepthBwWood;
		retDrawerBoxInfo.BottomShelf.PosX=-dbConstruction.BotShelfWidth(m.mod_Width)/2;
		retDrawerBoxInfo.BottomShelf.PosY=dbConstruction.BotShelfPosHeight;
		retDrawerBoxInfo.BottomShelf.PosZ=-dbConstruction.BotShelfDepthBwWood;

		let dbBoardInfo = GlobalFunc.find_DrawerBoxColorMappingBoardInfo(dbColor);
		retDrawerBoxInfo.BottomShelf.EdgeTypeFront=dbBoardInfo.EdgeTypeShelfFront!;
		retDrawerBoxInfo.BottomShelf.EdgeTypeBack=dbBoardInfo.EdgeTypeShelfBack!;
		retDrawerBoxInfo.BottomShelf.EdgeTypeLeft=dbBoardInfo.EdgeTypeShelfLeft!;
		retDrawerBoxInfo.BottomShelf.EdgeTypeRight=dbBoardInfo.EdgeTypeShelfRight!;		
		retDrawerBoxInfo.BottomShelf.EdgeTypeJoint=dbBoardInfo.EdgeJointTypeShelf!;
		retDrawerBoxInfo.BottomShelf.EdgeColor=dbBoardInfo.DrawerBoxBoardColor!;
		retDrawerBoxInfo.BottomShelf.BoardColor = dbBoardInfo.DrawerBoxBoardColor!;
		retDrawerBoxInfo.BottomShelf.BoardGrainId = dbBoardInfo.DrawerBoxGrainGroupId!;
		retDrawerBoxInfo.BottomShelf.Grain='Horizontal';

		// Backwall
		retDrawerBoxInfo.Backwall.DimX=dbConstruction.BackwallWidth(m.mod_Width);
		retDrawerBoxInfo.Backwall.DimY=dbConstruction.BackwallHeight;
		retDrawerBoxInfo.Backwall.DimZ=dbConstruction.BackwallThickness;
		retDrawerBoxInfo.Backwall.PosX=-dbConstruction.BackwallWidth(m.mod_Width)/2;
		retDrawerBoxInfo.Backwall.PosY=dbConstruction.BackwallPosHeight;
		retDrawerBoxInfo.Backwall.PosZ=-dbConstruction.BackwallPosDepth;

		retDrawerBoxInfo.Backwall.EdgeTypeFront=dbBoardInfo.EdgeTypeBackwallFront!;
		retDrawerBoxInfo.Backwall.EdgeTypeBack=dbBoardInfo.EdgeTypeBackwallBack!;
		retDrawerBoxInfo.Backwall.EdgeTypeLeft=dbBoardInfo.EdgeTypeBackwallLeft!;
		retDrawerBoxInfo.Backwall.EdgeTypeRight=dbBoardInfo.EdgeTypeBackwallRight!;		
		retDrawerBoxInfo.Backwall.EdgeTypeJoint=dbBoardInfo.EdgeJointTypeBackwall!;
		retDrawerBoxInfo.Backwall.EdgeColor=dbBoardInfo.DrawerBoxBoardColor!;
		retDrawerBoxInfo.Backwall.BoardColor = dbBoardInfo.DrawerBoxBoardColor!;
		retDrawerBoxInfo.Backwall.BoardGrainId = dbBoardInfo.DrawerBoxGrainGroupId!;
		retDrawerBoxInfo.Backwall.Grain='Horizontal';
		retDrawerBoxInfo.Backwall.ProcessingId='Processing_Legrabox_Backwall_' + dbHeight;

		// DrillArea
		retDrawerBoxInfo.DrillArea.DimX=m.mod_Width;
		retDrawerBoxInfo.DrillArea.DimY=dbConstruction.BlockSpaceHeight;
		retDrawerBoxInfo.DrillArea.DimZ=dbConstruction.BlockSpaceDepth;
		retDrawerBoxInfo.DrillArea.PosX=-m.mod_Width/2;
		retDrawerBoxInfo.DrillArea.PosY=dbConstruction.BlockSpacePosHeight;
		retDrawerBoxInfo.DrillArea.PosZ=-dbConstruction.BlockSpaceDepth;

		// BomElement
		retDrawerBoxInfo.BomElement.DimX=m.mod_Width;
		retDrawerBoxInfo.BomElement.DimY=dbConstruction.BlockSpaceHeight;
		retDrawerBoxInfo.BomElement.DimZ=dbConstruction.BlockSpaceDepth;
		retDrawerBoxInfo.BomElement.PosX=-m.mod_Width/2;
		retDrawerBoxInfo.BomElement.PosY=dbConstruction.BlockSpacePosHeight;
		retDrawerBoxInfo.BomElement.PosZ=-dbConstruction.BlockSpaceDepth;

		// ObjectMapping
		const dbObjectMapping = GlobalFunc.find_ObjectMapping(dbObject.ObjectBox!)
		const dbObjectMappingCon = GlobalFunc.find_ObjectMapping(dbObject.ObjectFrontConnector!)

		// GraphicLibrary
		let retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(dbObjectMapping.GraphicItem!);

		retGraphicMapping.forEach((Item) => {
			let [retGraphicLib, graphicFile] = GlobalFunc.process_GraphicLibraryData(Item.Model3DGroupName!);

			if (retGraphicLib && graphicFile) {
				// Left Side
				if (retGraphicLib.Identifier == 'BoxLeft') {
					retDrawerBoxInfo.SideLeft.Model3D = graphicFile.Model3D;
					retDrawerBoxInfo.SideLeft.ColorId = retGraphicLib.ColorId;
					retDrawerBoxInfo.SideLeft.DimX = retGraphicLib.DimensionX;
					retDrawerBoxInfo.SideLeft.DimY = retGraphicLib.DimensionY;
					retDrawerBoxInfo.SideLeft.DimZ = retGraphicLib.DimensionZ;
					retDrawerBoxInfo.SideLeft.PosZ = -retGraphicLib.DimensionZ;
					retDrawerBoxInfo.SideLeft.PosY = dbConstruction.ObjPosHeight;
					retDrawerBoxInfo.SideLeft.PosX = -m.mod_Width / 2 + dbDistanceSide;
					dbSideDepth = retGraphicLib.DimensionZ;
				}

				// Right Side
				if (retGraphicLib.Identifier == 'BoxRight') {
					retDrawerBoxInfo.SideRight.Model3D = graphicFile.Model3D;
					retDrawerBoxInfo.SideRight.ColorId = retGraphicLib.ColorId;
					retDrawerBoxInfo.SideRight.DimX = retGraphicLib.DimensionX;
					retDrawerBoxInfo.SideRight.DimY = retGraphicLib.DimensionY;
					retDrawerBoxInfo.SideRight.DimZ = retGraphicLib.DimensionZ;
					retDrawerBoxInfo.SideRight.PosZ = -retGraphicLib.DimensionZ;
					retDrawerBoxInfo.SideRight.PosY = dbConstruction.ObjPosHeight;
					retDrawerBoxInfo.SideRight.PosX = m.mod_Width / 2 - dbDistanceSide - retGraphicLib.DimensionX;
				}

				// Left drawer slide
				if (retGraphicLib.Identifier == 'SlideLeft') {
					retDrawerBoxInfo.SlideLeft.Model3D = graphicFile.Model3D;
					retDrawerBoxInfo.SlideLeft.ColorId = retGraphicLib.ColorId;
					retDrawerBoxInfo.SlideLeft.DimX = retGraphicLib.DimensionX;
					retDrawerBoxInfo.SlideLeft.DimY = retGraphicLib.DimensionY;
					retDrawerBoxInfo.SlideLeft.DimZ = retGraphicLib.DimensionZ;
					retDrawerBoxInfo.SlideLeft.PosX = -m.mod_Width / 2;
					retDrawerBoxInfo.SlideLeft.PosY = dbConstruction.ObjPosHeight + dbConstruction.SlidePosHeight;
					retDrawerBoxInfo.SlideLeft.PosZ = -retGraphicLib.DimensionZ - dbConstruction.SlidePosDepth;
				}

				// Right drawer slide
				if (retGraphicLib.Identifier == 'SlideRight') {
					retDrawerBoxInfo.SlideRight.Model3D = graphicFile.Model3D;
					retDrawerBoxInfo.SlideRight.ColorId = retGraphicLib.ColorId;
					retDrawerBoxInfo.SlideRight.DimX = retGraphicLib.DimensionX;
					retDrawerBoxInfo.SlideRight.DimY = retGraphicLib.DimensionY;
					retDrawerBoxInfo.SlideRight.DimZ = retGraphicLib.DimensionZ;
					retDrawerBoxInfo.SlideRight.PosX = m.mod_Width / 2 - retGraphicLib.DimensionX;
					retDrawerBoxInfo.SlideRight.PosY = dbConstruction.ObjPosHeight + dbConstruction.SlidePosHeight;
					retDrawerBoxInfo.SlideRight.PosZ = -retGraphicLib.DimensionZ - dbConstruction.SlidePosDepth;
				}			
			}
		});
		
		// HardwareLibrary
		retDrawerBoxInfo.BomElement.BoxHardwareId=dbObjectMapping.HardwareItem!;
		retDrawerBoxInfo.BomElement.ConHardwareId=dbObjectMappingCon.HardwareItem!;

		// DrillingLibrary
		retDrawerBoxInfo.DrillArea.BoxProcessingId=dbObjectMapping.ProcessingItem!;
		retDrawerBoxInfo.DrillArea.ConProcessingId=dbObjectMappingCon.ProcessingItem!;

		//---------------Drawer Box Extra Items---------------

		// Read the table tab_DrawerBoxExtraItemSettings
		let ExtraItems = GlobalFunc.find_DrawerBoxExtraItemSettings(m.mod_FrontProgram, m.mod_OpeningType, m.mod_Width, m.mod_Depth);
		let BotShelfCon = 'None';
		let BotShelfDescriptor = 'None';
		let SynchroUnit = 'None';

		ExtraItems.forEach(ExtraItem => {
			if (ExtraItem.FrontToBottomConnectorId !== 'None' && ExtraItem.FrontToBottomConnectorId !== null) {
				BotShelfCon = ExtraItem.FrontToBottomConnectorId!;
				BotShelfDescriptor = ExtraItem.FrontToBottomConnectorDescriptor!;
			}
			if (ExtraItem.SyncronizationId !== 'None' && ExtraItem.SyncronizationId !== null) {
				SynchroUnit = ExtraItem.SyncronizationId!;
			}
		});

		// Bottom shelf connector
		if(BotShelfCon != 'None'){

			// Process the descriptor to get the positions of the connectors
			let Positions = GlobalFunc.process_Descriptor(BotShelfDescriptor!, m.mod_Width)
			Positions.forEach(Position => {
				retDrawerBoxInfo.BottomShelfConnector.arrPosX.push(Math.round(Position));
			});

			// ObjectMapping
			let ObjectMapping = GlobalFunc.find_ObjectMapping(BotShelfCon)

			// GraphicLibrary
			retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(ObjectMapping.GraphicItem!);
			retGraphicMapping.forEach((Item) => {
				let [retGraphicLib, graphicFile] = GlobalFunc.process_GraphicLibraryData(Item.Model3DGroupName!);

				if (retGraphicLib && graphicFile) {
					retDrawerBoxInfo.BottomShelfConnector.Model3D = graphicFile.Model3D;
					retDrawerBoxInfo.BottomShelfConnector.ColorId = retGraphicLib.ColorId;
					retDrawerBoxInfo.BottomShelfConnector.DimX = retGraphicLib.DimensionX;
					retDrawerBoxInfo.BottomShelfConnector.DimY = retGraphicLib.DimensionY;
					retDrawerBoxInfo.BottomShelfConnector.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
					retDrawerBoxInfo.BottomShelfConnector.PosX = -retGraphicLib.DimensionX / 2;
					retDrawerBoxInfo.BottomShelfConnector.PosY = dbConstruction.BotShelfPosHeight - retGraphicLib.DimensionY;
					retDrawerBoxInfo.BottomShelfConnector.PosZ = -retGraphicLib.DimensionZ;
				}
			});

			// HardwareLibrary
			retDrawerBoxInfo.BottomShelfConnector.BotConHardwareId = ObjectMapping.HardwareItem!;

			// DrillingLibrary
			retDrawerBoxInfo.BottomShelfConnector.BotConProcessingId = ObjectMapping.ProcessingItem!;
		}

		// Synchronization unit
		if(SynchroUnit != 'None'){

			// ObjectMapping
			let ObjectMapping = GlobalFunc.find_ObjectMapping(SynchroUnit)

			// GraphicLibrary
			retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(ObjectMapping.GraphicItem!);
			retGraphicMapping.forEach((Item) => {
				let [retGraphicLib, graphicFile] = GlobalFunc.process_GraphicLibraryData(Item.Model3DGroupName!);

				if (retGraphicLib && graphicFile) {
					retDrawerBoxInfo.Synchronization.Model3D = graphicFile.Model3D;
					retDrawerBoxInfo.Synchronization.ColorId = retGraphicLib.ColorId;
					retDrawerBoxInfo.Synchronization.DimX = m.mod_Width + retGraphicLib.PartOffsetX;
					retDrawerBoxInfo.Synchronization.DimY = retGraphicLib.DimensionY;
					retDrawerBoxInfo.Synchronization.DimZ = dbSideDepth + retGraphicLib.PartOffsetZ;
					retDrawerBoxInfo.Synchronization.PosX = -(m.mod_Width + retGraphicLib.PartOffsetX) / 2;
					retDrawerBoxInfo.Synchronization.PosY = retGraphicLib.InsertionPointY;
					retDrawerBoxInfo.Synchronization.PosZ = -dbSideDepth - retGraphicLib.PartOffsetZ;
				}
			});

			// HardwareLibrary
			retDrawerBoxInfo.Synchronization.ConHardwareId = ObjectMapping.HardwareItem!;

			// DrillingLibrary
			retDrawerBoxInfo.Synchronization.ConProcessingId = ObjectMapping.ProcessingItem!;
		}
	}

	//---------------Return data to the module---------------

	return retDrawerBoxInfo;
}


// User Exit for calculation of the hinge positions\n//########################################################
static ue_HingePositioning(m: IFuncParents_mc_HingeGroup01){

	//---------------Initialize output variable---------------------------
	let HingePos: any = {};

	//---------------Get data from table HingePosition---------------------------
	let retHingePos: any;
	if (m.mod_ModuleName == 'mc_Door01')
		{
			retHingePos= GlobalFunc.find_HingePosition(m.mod_TypeElement, m.mod_FrontDesign, 'All','All', m.mod_PanelWoodFrameType, m.mod_FramePartsWidthHor, m.mod_FrontHeight, m.mod_FrontWidth, 0, m.mod_FingergripTopType, m.mod_FingergripBtmType, m.mod_HandleDesign, m.mod_HandlePosLogic); ////////////////////////////////// CALCULATION OF WEIGHT PENDING!!!!!!!!!
		}
		else if (m.mod_ModuleName == 'mc_Fliplift01')
		{
			retHingePos= GlobalFunc.find_HingePosition(m.mod_TypeElement, m.mod_FrontDesign, m.mod_FlipliftType, m.mod_FlipliftHardwareType, m.mod_PanelWoodFrameType, m.mod_FramePartsWidthVert, m.mod_FrontHeight, m.mod_FrontWidth, 0, m.mod_FingergripTopType, m.mod_FingergripBtmType, m.mod_HandleDesign, m.mod_HandlePosLogic); ////////////////////////////////// CALCULATION OF WEIGHT PENDING!!!!!!!!!
		}

	//---------------Set output value---------------------------
	HingePos.Descriptor = retHingePos.Descriptor!;

	return HingePos;
}


// User Exit for calculation of the hinge selection\n//########################################################
static ue_HingeSelection(m: IFuncParents_mc_HingeGroup01, iFrontOverlay: any) {

//---------------Initialize output variable---------------------------
let HingeSelection: any = {};

// Get the Information of the Carcase Parts Info
let carcasePartInfo = JSON.parse(m.mod_CarcasePartInfo[0]);

//---------------Calculate FrontOverlay---------------------------

	let FrontOverlay: number = 0;
	let FrontAngle: number = 0;

	if (m.mod_ModuleName == 'mc_Door01')
	{
		if (m.mod_DoorDirection == 'Left'){
			FrontOverlay = iFrontOverlay.Left;
			FrontAngle = carcasePartInfo.VerticalPartsFrontAngle[0];
		}
		else if (m.mod_DoorDirection == 'Right'){
			FrontOverlay = iFrontOverlay.Right;
			FrontAngle = carcasePartInfo.VerticalPartsFrontAngle[1];
		}
	}
	else if (m.mod_ModuleName == 'mc_Fliplift01')
	{
		if (m.mod_FrontType == 'FlipliftDown'){
			FrontOverlay = iFrontOverlay.Bottom;
			FrontAngle = carcasePartInfo.HorizontalPartsFrontAngle[0];
		}
		else if (m.mod_FrontType == 'FlipliftUp'){
			FrontOverlay = iFrontOverlay.Top;
			FrontAngle = carcasePartInfo.HorizontalPartsFrontAngle[1];
		}
	}

//---------------Get data from table HingeSettings---------------------------
	let hingeSettings: any;
	if (m.mod_ModuleName == 'mc_Door01') {
		hingeSettings = GlobalFunc.find_HingeSettings(m.mod_TypeElement, 'Doors', 'All', 'All', m.mod_FrontDesign, m.mod_FrontThk, FrontAngle, m.mod_InteriorEquipmentHinge);
	}
	else if (m.mod_ModuleName == 'mc_Fliplift01') {
		hingeSettings = GlobalFunc.find_HingeSettings(m.mod_TypeElement, m.mod_FrontType, m.mod_FlipliftType, m.mod_FlipliftHardwareType, m.mod_FrontDesign, m.mod_FrontThk, FrontAngle, m.mod_InteriorEquipmentHinge);
	}

//---------------Get data from table DrillingDistance---------------------------
let hingeDrillingDistance = GlobalFunc.find_HingeDrillingDistance(hingeSettings.HingeType!,FrontOverlay,hingeSettings.HingeDrillingsType!);
let drillDistance = 0;
if(hingeDrillingDistance.in_DrillingDistanceType == 'CalculationBasedMin')
{
drillDistance = FrontOverlay - hingeDrillingDistance.in_FrontOverlayMin! + hingeDrillingDistance.DrillingDistance!;
}
else if(hingeDrillingDistance.in_DrillingDistanceType == 'CalculationBasedMax')
{
drillDistance = hingeDrillingDistance.DrillingDistance! - hingeDrillingDistance.in_FrontOverlayMax! + FrontOverlay;
}
else //(hingeDrillingDistance.in_DrillingDistanceType == 'Fixed')
{
drillDistance = hingeDrillingDistance.DrillingDistance!;
}

//---------------Get data from table HingeMapping---------------------------
let hingeMapping = GlobalFunc.find_HingeMapping(hingeSettings.HingeType!,hingeDrillingDistance.Application!, hingeSettings.MountingPlateType!, hingeDrillingDistance.MountingPlateHeight!,m.mod_OpeningType,m.mod_HingeColor);

//---------------Get Data related with HardwareItem, Processings and Graphics---------------------------
let hingeFront = GlobalFunc.calc_HardwareObjectInfo(hingeMapping.ObjectFront!);
let hingeCarcase = GlobalFunc.calc_HardwareObjectInfo(hingeMapping.ObjectCarcase!);

//---------------Set output values---------------------------
HingeSelection.HingeType = hingeSettings.HingeType!;
HingeSelection.MountingPlateType = hingeSettings.MountingPlateType!;
HingeSelection.MountingPlateHeight = hingeDrillingDistance.MountingPlateHeight!;
HingeSelection.CarcaseFrontAngle = FrontAngle;
HingeSelection.DrillingDistance = drillDistance;
HingeSelection.FrontHardwareItem = hingeFront.HardwareItem;
HingeSelection.FrontProcessingItem = hingeFront.ProcessingItem;
HingeSelection.FrontGraphic=hingeFront.Graphics;
HingeSelection.CarcaseHardwareItem = hingeCarcase.HardwareItem;
HingeSelection.CarcaseProcessingItem = hingeCarcase.ProcessingItem;
HingeSelection.CarcaseGraphic=hingeCarcase.Graphics;
HingeSelection.HingeGapCarcase=hingeMapping.HingeFrontGapCarcase!;
HingeSelection.OpeningAngle=hingeMapping.OpeningAngle!;


return HingeSelection;


}



// Process for calculation of the hinge positions and hinge selection\n//########################################################
static process_Hinge(m: IFuncParents_mc_HingeGroup01, iFrontOverlay: any) {

	//---------------Initialize output variable---------------------------
	interface IHingeData {
		HingeType?: string;
		Descriptor?: string;
		MountingPlateType?: string;
		MountingPlateHeight?: string;
		CarcaseFrontAngle?: number;
		FrontOverlay?: number;
		DrillingDistance?: number;
		FrontHardwareItem?: string;
		FrontProcessingItem?: string;
		FrontGraphic?: string;
		CarcaseHardwareItem?: string;
		CarcaseProcessingItem?: string;
		CarcaseGraphic?: string;
		HingeGapCarcase?: number;
		OpeningAngle?: number;
	}

	let HingeData: IHingeData = {
		HingeType: undefined,
		Descriptor: undefined,
		MountingPlateType: undefined,
		MountingPlateHeight: undefined,
		CarcaseFrontAngle: undefined,
		FrontOverlay: undefined,
		DrillingDistance: undefined,
		FrontHardwareItem: undefined,
		FrontProcessingItem: undefined,
		FrontGraphic: undefined,
		CarcaseHardwareItem: undefined,
		CarcaseProcessingItem: undefined,
		CarcaseGraphic: undefined,
		HingeGapCarcase: undefined,
		OpeningAngle: undefined
	};

	// Get the Information of the Carcase Parts Info
	let carcasePartInfo = JSON.parse(m.mod_CarcasePartInfo[0]);
		
	//========================================================================
	// Hinge positioning
	//========================================================================
	
	//---------------Calculate Hingeposition in height----------------

	if(m.mod_HingeLogic_matrix.HingePositioning == 'Custom')
	{	
		//=====================================
		// Call user exit for customization
		//=====================================
		
		// Call the user exit
		let retValUe = GlobalFunc.ue_HingePositioning(m);
	
		// Set the Output values
		HingeData.Descriptor = retValUe.Descriptor;
	}
	else if (m.mod_HingeLogic_matrix.HingePositioning == 'Automatic')
	{
		//=====================================
		// Standard Library Solution
		//=====================================
		
		// Get data from table HingePosition
		let retHingePos: any;
		if (m.mod_ModuleName == 'mc_Door01')
		{
			retHingePos= GlobalFunc.find_HingePosition(m.mod_TypeElement, m.mod_FrontDesign, 'All', 'All', m.mod_PanelWoodFrameType, m.mod_FramePartsWidthHor, m.mod_FrontHeight, m.mod_FrontWidth, 0, m.mod_FingergripTopType, m.mod_FingergripBtmType, m.mod_HandleDesign, m.mod_HandlePosLogic); ////////////////////////////////// CALCULATION OF WEIGHT PENDING!!!!!!!!!
		}
		else if (m.mod_ModuleName == 'mc_Fliplift01')
		{
			retHingePos= GlobalFunc.find_HingePosition(m.mod_TypeElement, m.mod_FrontDesign, m.mod_FlipliftType, m.mod_FlipliftHardwareType, m.mod_PanelWoodFrameType, m.mod_FramePartsWidthVert, m.mod_FrontHeight, m.mod_FrontWidth, 0, m.mod_FingergripTopType, m.mod_FingergripBtmType, m.mod_HandleDesign, m.mod_HandlePosLogic); ////////////////////////////////// CALCULATION OF WEIGHT PENDING!!!!!!!!!
		}
	
		// Set the Output values
		HingeData.Descriptor = retHingePos.Descriptor!;
	}
	else { // m.mod_HingeLogic_matrix.HingePositioning == 'Manual'
		HingeData.Descriptor = 'ManualPosition';
	}
		
	//---------------Calculate FrontOverlay---------------------------

	let FrontOverlay: number = 0;
	let FrontAngle: number = 0;

	if (m.mod_ModuleName == 'mc_Door01')
	{
		if (m.mod_DoorDirection == 'Left'){
			FrontOverlay = iFrontOverlay.Left;
			FrontAngle = carcasePartInfo.VerticalPartsFrontAngle[0];
		}
		else if (m.mod_DoorDirection == 'Right'){
			FrontOverlay = iFrontOverlay.Right;
			FrontAngle = carcasePartInfo.VerticalPartsFrontAngle[1];
		}
	}
	else if (m.mod_ModuleName == 'mc_Fliplift01')
	{
		if (m.mod_FrontType == 'FlipliftDown'){
			FrontOverlay = iFrontOverlay.Bottom;
			FrontAngle = carcasePartInfo.HorizontalPartsFrontAngle[0];
		}
		else if (m.mod_FrontType == 'FlipliftUp'){
			FrontOverlay = iFrontOverlay.Top;
			FrontAngle = carcasePartInfo.HorizontalPartsFrontAngle[1];
		}
	}

	//========================================================================
	// Hinge Selection
	//========================================================================
		
	if(m.mod_HingeLogic_matrix.HingeSelection == 'Custom'){
		
		//=====================================
		// Call user exit for customization
		//=====================================
	
		// Call the user exit
		let retValUe = GlobalFunc.ue_HingeSelection(m, iFrontOverlay);
	
		// Set the Output values
		HingeData.HingeType = retValUe.HingeType!;
		HingeData.MountingPlateType = retValUe.MountingPlateType!;
		HingeData.MountingPlateHeight = retValUe.MountingPlateHeight!;
		HingeData.CarcaseFrontAngle = retValUe.CarcaseFrontAngle;
		HingeData.FrontOverlay = retValUe.FrontOverlay;
		HingeData.DrillingDistance = retValUe.DrillingDistance;
		HingeData.FrontHardwareItem = retValUe.FrontHardwareItem;
		HingeData.FrontProcessingItem = retValUe.FrontProcessingItem;
		HingeData.FrontGraphic = retValUe.FrontGraphic;
		HingeData.CarcaseHardwareItem = retValUe.CarcaseHardwareItem;
		HingeData.CarcaseProcessingItem = retValUe.CarcaseProcessingItem;
		HingeData.CarcaseGraphic = retValUe.CarcaseGraphic;
		HingeData.HingeGapCarcase=retValUe.HingeGapCarcase!;
		HingeData.OpeningAngle=retValUe.OpeningAngle!;
	}
	else if (m.mod_HingeLogic_matrix.HingeSelection == 'Automatic')
	{
		//=====================================
		// Standard Library Solution
		//=====================================

		try {
			//---------------Get data from table HingeSettings---------------------------

			let hingeSettings: any;
			if (m.mod_ModuleName == 'mc_Door01') {
				hingeSettings = GlobalFunc.find_HingeSettings(m.mod_TypeElement, 'Doors', 'All', 'All', m.mod_FrontDesign, m.mod_FrontThk, FrontAngle, m.mod_InteriorEquipmentHinge);
			}
			else if (m.mod_ModuleName == 'mc_Fliplift01') {
				hingeSettings = GlobalFunc.find_HingeSettings(m.mod_TypeElement, m.mod_FrontType, m.mod_FlipliftType, m.mod_FlipliftHardwareType, m.mod_FrontDesign, m.mod_FrontThk, FrontAngle, m.mod_InteriorEquipmentHinge);
			}
		
			//---------------Get data from table DrillingDistance---------------------------
			let hingeDrillingDistance = GlobalFunc.find_HingeDrillingDistance(hingeSettings.HingeType!,FrontOverlay,hingeSettings.HingeDrillingsType!);

			if (hingeDrillingDistance === undefined){
				throw new Error('Incomplete hinge data!'); 
			}

			let drillDistance = 0;
			if(hingeDrillingDistance.in_DrillingDistanceType == 'CalculationBasedMin')
			{
			drillDistance = FrontOverlay - hingeDrillingDistance.in_FrontOverlayMin! + hingeDrillingDistance.DrillingDistance!;
			}
			else if(hingeDrillingDistance.in_DrillingDistanceType == 'CalculationBasedMax')
			{
			drillDistance = hingeDrillingDistance.DrillingDistance! - hingeDrillingDistance.in_FrontOverlayMax! + FrontOverlay;
			}
			else //(hingeDrillingDistance.in_DrillingDistanceType == 'Fixed')
			{
			drillDistance = hingeDrillingDistance.DrillingDistance!;
			}

			//---------------Get data from table HingeMapping---------------------------
			let hingeMapping = GlobalFunc.find_HingeMapping(hingeSettings.HingeType!,hingeDrillingDistance.Application!, hingeSettings.MountingPlateType!, hingeDrillingDistance.MountingPlateHeight!,m.mod_OpeningType,m.mod_HingeColor);
			
			//---------------Get Graphics data for Front and Carcase---------------------------
			let hingeFront = GlobalFunc.calc_HardwareObjectInfo(hingeMapping.ObjectFront!);
			let hingeCarcase = GlobalFunc.calc_HardwareObjectInfo(hingeMapping.ObjectCarcase!);

			//---------------Set output values---------------------------
			HingeData.HingeType = hingeSettings.HingeType!;
			HingeData.MountingPlateType = hingeSettings.MountingPlateType!;
			HingeData.MountingPlateHeight = hingeDrillingDistance.MountingPlateHeight!;
			HingeData.CarcaseFrontAngle = FrontAngle;
			HingeData.FrontOverlay = FrontOverlay;
			HingeData.DrillingDistance = drillDistance;
			HingeData.FrontHardwareItem = hingeFront.HardwareItem;
			HingeData.FrontProcessingItem = hingeFront.ProcessingItem;
			HingeData.FrontGraphic=hingeFront.Graphics;
			HingeData.CarcaseHardwareItem = hingeCarcase.HardwareItem;
			HingeData.CarcaseProcessingItem = hingeCarcase.ProcessingItem;
			HingeData.CarcaseGraphic=hingeCarcase.Graphics;
			HingeData.HingeGapCarcase=hingeMapping.HingeFrontGapCarcase!;
			HingeData.OpeningAngle=hingeMapping.OpeningAngle!;
		}
		catch (error: any) {
			// We don't need to output the error here. It will be done in the module.
			// logError('process_Hinge: ' + error.message);
			return undefined;
		}			
	}
	else //m.mod_HingeLogic_matrix.HingeSelection == 'Manual'
	{
		//---------------Get data from table DrillingDistance---------------------------
		let hingeDrillingDistance = GlobalFunc.find_HingeDrillingDistance(m.mod_HingeType!,FrontOverlay,m.mod_HingeType_matrix.DrillingDistanceType!);
		let drillDistance = 0;
		if(hingeDrillingDistance.in_DrillingDistanceType == 'CalculationBasedMin')
		{
		drillDistance = FrontOverlay - hingeDrillingDistance.in_FrontOverlayMin! + hingeDrillingDistance.DrillingDistance!;
		}
		else if(hingeDrillingDistance.in_DrillingDistanceType == 'CalculationBasedMax')
		{
		drillDistance = hingeDrillingDistance.DrillingDistance! - hingeDrillingDistance.in_FrontOverlayMax! + FrontOverlay;
		}
		else //(hingeDrillingDistance.in_DrillingDistanceType == 'Fixed')
		{
		drillDistance = hingeDrillingDistance.DrillingDistance!;
		}

		//---------------Get data from table HingeMapping---------------------------
		let hingeMapping = GlobalFunc.find_HingeMapping(m.mod_HingeType!,hingeDrillingDistance.Application!, m.mod_MountingPlateType!, hingeDrillingDistance.MountingPlateHeight!,m.mod_OpeningType,m.mod_HingeColor);

		//---------------Get Data related with HardwareItem, Processings and Graphics---------------------------
		let hingeFront = GlobalFunc.calc_HardwareObjectInfo(hingeMapping.ObjectFront!);
		let hingeCarcase = GlobalFunc.calc_HardwareObjectInfo(hingeMapping.ObjectCarcase!);

		//---------------Set output values---------------------------
		HingeData.HingeType = m.mod_HingeType!;
		HingeData.MountingPlateType = m.mod_MountingPlateType!;
		HingeData.MountingPlateHeight = hingeDrillingDistance.MountingPlateHeight!;
		HingeData.CarcaseFrontAngle = FrontAngle;
		HingeData.FrontOverlay = FrontOverlay;
		HingeData.DrillingDistance = drillDistance;
		HingeData.FrontHardwareItem = hingeFront.HardwareItem;
		HingeData.FrontProcessingItem = hingeFront.ProcessingItem;
		HingeData.FrontGraphic=hingeFront.Graphics;
		HingeData.CarcaseHardwareItem = hingeCarcase.HardwareItem;
		HingeData.CarcaseProcessingItem = hingeCarcase.ProcessingItem;
		HingeData.CarcaseGraphic=hingeCarcase.Graphics;	
		HingeData.HingeGapCarcase=hingeMapping.HingeFrontGapCarcase!;
		HingeData.OpeningAngle=hingeMapping.OpeningAngle!;	
	}
	
	
	return HingeData;

}


// Return Value from CarcasePartConnectionMapping\n//########################################################
static find_CarcasePartConnectionMapping(ParentModule:string, TypeElement:string, Area:string,AreaConnectionType:string, FittingConnection:string, HardwareColor:string):ICT_tab_CarcasePartConnectionMapping[]{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_ParentModule: ParentModule,
		in_TypeElement: TypeElement,
		in_Area: Area,
		in_AreaConnectionType: AreaConnectionType,
		in_HardwareColor: HardwareColor
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_FittingConnection: FittingConnection
	};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=false;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_CarcasePartConnectionMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = ParentModule + ' - ' + TypeElement + ' - ' + Area + ' - ' + AreaConnectionType + ' - ' + FittingConnection + ' - ' + HardwareColor;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13010',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;

}


// Process the object to retrieve the drill data\n//########################################################
static process_ShelfadjDrills(obj: any) {

	//---------------Variables---------------------------
	let drillData: any;
	let drilling: any;
	let insertionpoint: any = {
		X: 0,
		Y: 0,
		Z: 0
		};

	// Only if there is an object
	if (obj !== 'N/a') {

		//---------------Return drilling information---------------------------

		// Retrieve the ProcessingId
		let objDrill = GlobalFunc.find_ObjectMapping(obj);
		let ProcessingItems = GlobalFunc.find_ProcessingMapping(objDrill.ProcessingItem!);
		ProcessingItems.forEach(drill => {
		drilling = drill;
		});

		// Process the drills and return the drill information
		let DrillLib = GlobalFunc.find_HardwareDrillVertLibrary(drilling.ProcessingId, 'Side')    
		DrillLib.forEach((drill) => {
		drillData = drill;
		});

		//---------------Return the insertion point---------------------------

		let GraphicItems = GlobalFunc.find_GraphicLibraryMapping(objDrill.GraphicItem!);
		GraphicItems.forEach(item =>{
		let grapicItem = GlobalFunc.find_GraphicLibrary(item.Model3DGroupName!);
		insertionpoint.X = grapicItem.InsertionPointX;
		insertionpoint.Y = grapicItem.InsertionPointY;
		insertionpoint.Z = grapicItem.InsertionPointZ;
		})	  
	}

	//---------------Return the values---------------------------

	let drillInfos: any = {};
	drillInfos.drill = drillData;
	drillInfos.insertionPoint = insertionpoint;
	return drillInfos;

}


// Process function to query tables with wildcards\n//########################################################
static process_BasicTableQuery(table: any[], WildcardParams: any, FixedParams: any, RangeParams: any, UniqueOutput: boolean): any | undefined {

    type RangeParam = {
        MinAttr: string;
        MaxAttr: string;
        Value: number;
    };

    function generateSearchParamsCombinations(wildcard: any, fixed: any): any[] {
        const keys = Object.keys(wildcard);
        const combinations: any[] = [];
        const totalCombinations = 1 << keys.length;

        for (let i = 0; i < totalCombinations; i++) {
            const combo: any = { ...fixed };
            for (let j = 0; j < keys.length; j++) {
                combo[keys[j]] = (i & (1 << j)) ? "All" : wildcard[keys[j]];
            }
            combinations.push(combo);
        }

        return combinations;
    }

    const columns = Object.keys(WildcardParams).concat(Object.keys(FixedParams));
    const rangeParams = Object.values(RangeParams as { [key: string]: RangeParam }).map(r => ({
        min: r.MinAttr,
        max: r.MaxAttr,
        value: r.Value
    }));

    const valueList = generateSearchParamsCombinations(WildcardParams, FixedParams);
    valueList.sort((a, b) => {
        const countAllA = Object.values(a).filter(v => v === "All").length;
        const countAllB = Object.values(b).filter(v => v === "All").length;
        return countAllA - countAllB;
    });

    let bestRows: any[] = [];
    let bestScore = Infinity;

    for (const search of valueList) {
        const matchingRows = table.filter(row =>
            columns.every(col =>
                row[col] === search[col] || row[col] === "All"
            ) &&
            rangeParams.every(range =>
                row[range.min] <= range.value && row[range.max] >= range.value
            )
        );

        if (matchingRows.length > 0) {
            // Jetzt: Bewertung der Treffer selbst
            for (const row of matchingRows) {
                const rowScore = columns.reduce((score, col) => score + (row[col] === "All" ? 1 : 0), 0);
                if (rowScore < bestScore) {
                    bestScore = rowScore;
                    bestRows = [row];
                } else if (rowScore === bestScore) {
                    bestRows.push(row);
                }
            }
        }
    }

    if (bestRows.length > 0) {
        const uniqueMatches = [...new Set(bestRows)];
        return UniqueOutput ? uniqueMatches[0] : uniqueMatches;
    }

    return undefined;
}



// Find DrawerBoxConstruction\n//########################################################
static find_DrawerBoxConstruction(ConstructionId:string):ICT_tab_DrawerBoxConstruction{

	// Call the function and return the value
	let retEntry = ct_tab_DrawerBoxConstruction.find(p=> p.in_ConstructionId == ConstructionId);

	// Error if no entry in table
	if (retEntry == undefined) {
		let Text =  ConstructionId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11007',1)
		logError(ErrorMessage.Message(Text));	
	}

	// Return Value
	return retEntry!;
}


// Find DrawerBoxMapping\n//########################################################
static find_DrawerBoxMapping(BoxDesign:string, BoxProgram:string,BoxColor: string, BoxDepth:string, BoxHeight:string, BoxWeight: string, OpeningType:string):ICT_tab_DrawerBoxMapping{
	
	// Call the function and return the value
	let retEntry = ct_tab_DrawerBoxMapping.find(p=> p.in_BoxDesign == BoxDesign && p.in_BoxProgram == BoxProgram && p.in_BoxColor == BoxColor && p.in_BoxDepth == BoxDepth && p.in_BoxHeight == BoxHeight && p.in_BoxWeight == BoxWeight && p.in_OpeningType == OpeningType);
	if (retEntry == undefined) {
		let Text =  BoxDesign + ' - ' + BoxProgram + ' - ' + BoxColor + ' - ' + BoxDepth + ' - ' + BoxHeight + ' - ' + BoxWeight + ' - ' + OpeningType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13006',1)
		logError(ErrorMessage.Message(Text));
	}

	// Return Value
	return retEntry!;
}


// Process the bomout_Board\n//########################################################
static process_BoardBom(Elem: any, Part: any, ElementType: string, ElementCategory: string, ParentId: string) {

    try {

        //====================================================================
        // MANUAL STUFF (TO BE DEVELOPED)
        //====================================================================

        const route = 'ProductionRoute';
        const extraInfo1 = 'ExtraInfo1';
        const extraInfo2 = 'ExtraInfo2';
        const extraInfo3 = 'ExtraInfo3';

        //====================================================================
        // Get data from tables
        //====================================================================

        // Get part data
        const PartSettings = GlobalFunc.find_PartSettings(Part._partId, Part.pa_AdditionalInfo1);
        const bomName = PartSettings ? PartSettings.BomPartDescription : Part._partId;
        const bomArticleGroup = PartSettings?.BomArticleGroup ?? 'None';
        
        // Get grain direction
        let GrainDirection = 'None';
        const validGroups = ['Carcase', 'Toekick', 'Countertop'];  // , 'AdditionalParts'

        if (validGroups.includes(bomArticleGroup)) {
            const GrainDirectionSettings = GlobalFunc.find_GrainDirectionSettings(Part._partId, Part.pa_TypeElement, Part.pa_ProgramGrainGroup, Part.pa_ColorGrainGroup, Part._width, Part._depth);
            GrainDirection = Part.pa_GrainLogic === 'Library' ? GrainDirectionSettings?.GrainDirection ?? 'None' : 'None';
        }
        else {
            GrainDirection = Part.pa_GrainDirection;
        }

        // Get board data
        const BoardMappingTop = GlobalFunc.find_BoardMapping(Part.pa_TopColor, Part._thickness)!;
        const board = GlobalFunc.find_BoardLibrary(BoardMappingTop.BoardId!);
        const material = board?.MaterialCode ?? '';
        const boardType = board?.BoardType ?? '';
        const boardGrain = board?.Grain ?? 'N';

        // Check grain direction valid for board grain
        const isBoardGrainLC = ['L', 'C'].includes(boardGrain);
        const isGrainDirValid = ['Lengthwise', 'Crosswise'].includes(GrainDirection);

        if (isBoardGrainLC && !isGrainDirValid) {
            const errorList = GlobalFunc.find_ErrorList('Error 40007', 1);
            let messageText = errorList.Message("");

            // Define the place holders
            const values = {
                part: Part._partId,
                grainColor: Part.pa_ColorGrainGroup,
                grainProgram: Part.pa_ProgramGrainGroup
            };

            // Replace the place holders in the text
            messageText = messageText.replace(/@(\w+)/g, (_, key) => {
                return values[key as keyof typeof values] ?? '';
            });

            // Throw the error
            logError(messageText);
        }

        // Get edge data
        const EdgeData = GlobalFunc.process_EdgeInfo(Part._partId, Part._thickness, Part.pa_EdgeFrontColor, Part.pa_EdgeLeftColor, Part.pa_EdgeBackColor, Part.pa_EdgeRightColor, Part.pa_EdgeFrontType, Part.pa_EdgeLeftType, Part.pa_EdgeBackType, Part.pa_EdgeRightType, Part.pa_EdgeJointType, Part.pa_AdditionalInfo1)!;
        const EdgeFrontThk = EdgeData.EdgeFrontData ? EdgeData.EdgeFrontData.Thickness || 0 : 0;
        const EdgeLeftThk = EdgeData.EdgeLeftData ? EdgeData.EdgeLeftData.Thickness || 0 : 0;
        const EdgeBackThk = EdgeData.EdgeBackData ? EdgeData.EdgeBackData.Thickness || 0 : 0;
        const EdgeRightThk = EdgeData.EdgeRightData ? EdgeData.EdgeRightData.Thickness || 0 : 0;

        //====================================================================
        // Define Output
        //====================================================================

        // Helper function for rounding
        function round2(value: number): number {
            return Math.round(value * 100) / 100;
        }

        // Part data
        Elem.bom_Type = Part._partId;
        Elem.bom_Name = bomName;
        Elem.bom_ArticleGroup = bomArticleGroup;
        Elem.bom_PartId = Part._id;
        Elem.bom_ElementCategory = ElementCategory;
        Elem.bom_ElementId = Part._id;
        Elem.bom_ParentId = ParentId;
        Elem.bom_ElementType = ElementType;

        // Dimensions
        Elem.bom_Length = round2(Part._width);
        Elem.bom_Width = round2(Part._depth);
        Elem.bom_Finalthk = round2(Part._thickness);
        Elem.bom_CutDimLength1 = round2(Part._width - EdgeLeftThk + EdgeData.OverdimensionLeft - EdgeRightThk + EdgeData.OverdimensionRight);
        Elem.bom_CutDimWidth1 = round2(Part._depth - EdgeFrontThk + EdgeData.OverdimensionFront - EdgeBackThk + EdgeData.OverdimensionBack);

        // No need for the cutting dimension 2 at the moment
        // Elem.bom_CutDimLength2 = round2(Part._width - EdgeLeftThk - EdgeRightThk);
        // Elem.bom_CutDimWidth2  = round2(Part._depth - EdgeFrontThk - EdgeBackThk);

        // Material data
        Elem.bom_Material = material;
        Elem.bom_BoardType = boardType;
        Elem.bom_GrainOrientation = Part.pa_GrainDirection;
        Elem.bom_GrainOrientation = GrainDirection;
        Elem.bom_Weight = round2(Part.pa_Weight ?? 0);

        // Edge data
        Elem.bom_EdgeFront = EdgeData.EdgeFrontCode;
        Elem.bom_EdgeLeft = EdgeData.EdgeLeftCode;
        Elem.bom_EdgeBack = EdgeData.EdgeBackCode;
        Elem.bom_EdgeRight = EdgeData.EdgeRightCode;
        Elem.bom_EdgeJointFrontLeft = EdgeData.EdgeJointFrontLeft;
        Elem.bom_EdgeJointLeftBack = EdgeData.EdgeJointLeftBack;
        Elem.bom_EdgeJointBackRight = EdgeData.EdgeJointBackRight;
        Elem.bom_EdgeJointRightFront = EdgeData.EdgeJointRightFront;
        Elem.bom_EdgeTransition = EdgeData.EdgeTransition;
        Elem.bom_EdgeShape = EdgeData.EdgeShape;

        // Additional data
        Elem.bom_ExtraInfo1 = extraInfo1;
        Elem.bom_ExtraInfo2 = extraInfo2;
        Elem.bom_ExtraInfo3 = extraInfo3;
        Elem.bom_Route = route;
    }

    //====================================================================
    // Handle the errors
    //====================================================================

    catch (error: any) {
        let ErrorMessage = GlobalFunc.find_ErrorList('Error 40003', 1);
        logError(ErrorMessage.Message(error.message));
    }
}


// Calculation of Position X  Y and Z for graphic insertion\n//########################################################
static process_GraphicInsertionHelper(ModuleReferencePoint:string, Model3DGroupName:string, DimensionX: number, DimensionY: number, DimensionZ: number):any{
	
	//--------------------Initialize Variables------------------------

	interface RetEntry {
		InsertionPointX: number;
		InsertionPointY: number;
		InsertionPointZ: number;
		OffsetX: number;
		OffsetY: number;
		OffsetZ: number;
		OversizeX: number;
		OversizeY: number;
		OversizeZ: number;
		DimensionX: number;
		DimensionY: number;
		DimensionZ: number;
		GraphicLibrary?: ICT_tab_GraphicLibrary;
	}

	const retEntry: RetEntry = {
		InsertionPointX: 0,
		InsertionPointY: 0,
		InsertionPointZ: 0,
		OffsetX: 0,
		OffsetY: 0,
		OffsetZ: 0,
		OversizeX: 0,
		OversizeY: 0,
		OversizeZ: 0,
		DimensionX: 0,
		DimensionY: 0,
		DimensionZ: 0,
		GraphicLibrary: undefined
	};

	//--------------------Get data from table GraphicsLibrary------------------------

	let graphicLib = GlobalFunc.find_GraphicLibrary(Model3DGroupName);

	//--------------------Check where the dimensions are coming from------------------------

	let DimX = (DimensionX <= 0) ? graphicLib.DimensionX : DimensionX;
	let DimY = (DimensionY <= 0) ? graphicLib.DimensionY : DimensionY;
	let DimZ = (DimensionZ <= 0) ? graphicLib.DimensionZ : DimensionZ;
	retEntry.GraphicLibrary = graphicLib;
	retEntry.DimensionX = DimX;
	retEntry.DimensionY = DimY;
	retEntry.DimensionZ = DimZ;

	//--------------------Handle the PartOffset------------------------

	// X-Offset
	if (graphicLib.PartOffsetX < 0){
		retEntry.OversizeX = graphicLib.PartOffsetX * -1;
		retEntry.OffsetX =  graphicLib.PartOffsetX;
	}
	else{
		retEntry.OversizeX = graphicLib.PartOffsetX;
	}

	// Y-Offset
	if (graphicLib.PartOffsetY < 0){
		retEntry.OversizeY = graphicLib.PartOffsetY * -1;
		retEntry.OffsetY =  graphicLib.PartOffsetY;
	}
	else{
		retEntry.OversizeY = graphicLib.PartOffsetY;
	}

	// Z-Offset
	if (graphicLib.PartOffsetZ < 0){
		retEntry.OversizeZ = graphicLib.PartOffsetZ * -1;
		retEntry.OffsetZ =  graphicLib.PartOffsetZ;
	}
	else{
		retEntry.OversizeZ = graphicLib.PartOffsetZ;
	}

	//--------------------Calculate InsertionPointX------------------------

	if (ModuleReferencePoint.substring(0,1) == "0") 
	{
		retEntry.InsertionPointX = 0;
	}
	else if (ModuleReferencePoint.substring(0,1) == "1")
	{
		retEntry.InsertionPointX = -DimX/2;
	}
	else if (ModuleReferencePoint.substring(0,1) == "2")
	{
		retEntry.InsertionPointX = -DimX;
	}

	//--------------------Calculate InsertionPointY------------------------

	if (ModuleReferencePoint.substring(1,2) == "0") 
	{
		retEntry.InsertionPointY = 0;
	}
	else if (ModuleReferencePoint.substring(1,2) == "1")
	{
		retEntry.InsertionPointY = -DimY/2;
	}
	else if (ModuleReferencePoint.substring(1,2) == "2")
	{
		retEntry.InsertionPointY = -DimY;
	}

	//--------------------Calculate InsertionPointZ------------------------

	if (ModuleReferencePoint.substring(2,3) == "0") 
	{
		retEntry.InsertionPointZ = 0;
	}
	else if (ModuleReferencePoint.substring(2,3) == "1")
	{
		retEntry.InsertionPointZ = -DimZ/2;
	}
	else if (ModuleReferencePoint.substring(2,3) == "2")
	{
		retEntry.InsertionPointZ = -DimZ;
	}

	//--------------------Return the value------------------------

	return retEntry!;
}


// Calculation of Position X  Y and Z for machining insertion\n//########################################################
static process_MachiningInsertionHelper(tecConfigReferencePoint:string, Model3DGroupName:string):any{
	
	// Initialize Variables
	let retEntry: any = {
		InsertionPointX: 0,
		InsertionPointY: 0,
		InsertionPointZ: 0
		};

	//Get data from table GraphicsLibrary
	let graphicLib = this.find_GraphicLibrary(Model3DGroupName);
	let supplierRefPoint = graphicLib.ReferencePointXYZ!;

retEntry.GraphicLibrary = graphicLib;

	// Get ReferencePoints
	let tecConfigX = Number(tecConfigReferencePoint.substring(0,1));
	let tecConfigY = Number(tecConfigReferencePoint.substring(1,2));
	let tecConfigZ = Number(tecConfigReferencePoint.substring(2,3));
	
	let supplierX = Number(supplierRefPoint.substring(0,1));
	let supplierY = Number(supplierRefPoint.substring(1,2));
	let supplierZ = Number(supplierRefPoint.substring(2,3));
	
	//Calculate InsertionPointX
	switch (tecConfigX - supplierX)
	{
		case -2:
			retEntry.InsertionPointX = graphicLib.DimensionX + graphicLib.InsertionPointX;
			break;
		case -1:
			retEntry.InsertionPointX = graphicLib.DimensionX/2 + graphicLib.InsertionPointX;
			break;
		case 0:
			retEntry.InsertionPointX = 0 + graphicLib.InsertionPointX;
			break;
		case 1:
			retEntry.InsertionPointX = -graphicLib.DimensionX/2 + graphicLib.InsertionPointX;
			break;
		case 2:
			retEntry.InsertionPointX = -graphicLib.DimensionX + graphicLib.InsertionPointX;
			break;
	}

	//Calculate InsertionPointY
	switch (tecConfigY - supplierY)
	{
		case -2:
			retEntry.InsertionPointY = graphicLib.DimensionY + graphicLib.InsertionPointY;
			break;
		case -1:
			retEntry.InsertionPointY = graphicLib.DimensionY/2 + graphicLib.InsertionPointY;
			break;
		case 0:
			retEntry.InsertionPointY = 0 + graphicLib.InsertionPointY;
			break;
		case 1:
			retEntry.InsertionPointY = -graphicLib.DimensionY/2 + graphicLib.InsertionPointY;
			break;
		case 2:
			retEntry.InsertionPointY = -graphicLib.DimensionY + graphicLib.InsertionPointY;
			break;
	}

	//Calculate InsertionPointZ
	switch (tecConfigZ - supplierZ)
	{
		case -2:
			retEntry.InsertionPointZ = graphicLib.DimensionZ + graphicLib.InsertionPointZ;
			break;
		case -1:
			retEntry.InsertionPointZ = graphicLib.DimensionZ/2 + graphicLib.InsertionPointZ;
			break;
		case 0:
			retEntry.InsertionPointZ = 0 + graphicLib.InsertionPointZ;
			break;
		case 1:
			retEntry.InsertionPointZ = -graphicLib.DimensionZ/2 + graphicLib.InsertionPointZ;
			break;
		case 2:
			retEntry.InsertionPointZ = -graphicLib.DimensionZ + graphicLib.InsertionPointZ;
			break;
	}

	return retEntry!;
}


// Standard solution for drilling the handles\n//########################################################
static ncout_HandleDrill(elem: any, partSelf: any, part2: any, posRel: any){

	//--------------------Get data for drillings and rotation------------------------

	let rotation = part2.pa_Rotation;
	let drillings: any[] = [];
	let drills: any[] = [];
	let InsertionInfo = GlobalFunc.process_MachiningInsertionHelper('110',part2.pa_Model3DGroupName)
	let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);

	processings.forEach((processing) => {
	drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Front');
		drills.forEach((drill) => {
			drillings.push(drill);
		});
	});

	//--------------------For each drilling (insert the drillings)------------------------

	drillings.forEach(x => 
	{

		// Calculate the offset	
		let offsetX = InsertionInfo.InsertionPointX;
		let offsetY = InsertionInfo.InsertionPointY;

		// Calculate the position
		let posX = 0;
		let posY = 0;
		if (rotation == 0){   
			posX = posRel.x + x.XA + offsetX;
			posY = posRel.y + x.YA + offsetY;
		}
		else if (rotation == 90){
			posY = posRel.y - (x.XA + offsetX);
			posX = posRel.x + x.YA - offsetY;
		}
		else if (rotation == 270){
			posY = posRel.y - (x.XA + offsetX);
			posX = posRel.x + x.YA + offsetY;
		}
		else if (rotation == 180){
			posX = posRel.x + x.XA + offsetX;
			posY = posRel.y + x.YA - offsetY;
		}
		
		// Add Vertical Drill
		let DrillVert = elem.addncout_DrillVert();
		DrillVert.nc_TOOL="102";
		DrillVert.nc_XA=posX;
		DrillVert.nc_YA=partSelf._dimy - posY;
		DrillVert.nc_TI=partSelf._dimz;
		DrillVert.nc_DU=x.DU;

		DrillVert.nc_BM = x.matrix_BM || "LS"
		DrillVert.nc_WI = x.matrix_WI ?? 0;
		DrillVert.nc_AB = x.matrix_AB ?? 1;
		DrillVert.nc_LA = x.matrix_LA ?? 0;
		DrillVert.nc_MI = x.matrix_MI ?? 0;
		DrillVert.nc_KO = x.matrix_KO || "00";
    DrillVert.nc_Side = "Btm";

		// Add drawing
		let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posX, posY, 0, x.DU, x.DU, partSelf._dimz );
		drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + x.DU/2 + '" /></svg>', 'z');
	})
}


// Standard solution for drilling the legs\n//########################################################
static ncout_LegDrill(elem: any, partSelf: any, part2: any, posRel: any){

	//--------------------Get data for drillings and rotation------------------------

	let drillings: any[] = [];
	let drills: any[] = [];
	let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);
	let InsertionInfo = GlobalFunc.process_MachiningInsertionHelper('121',part2.pa_Model3DGroupName)
	let insertionX = 0;
	let insertionZ = 0;

	// Convert the insertion point
	insertionX = InsertionInfo.InsertionPointX;
	insertionZ = InsertionInfo.InsertionPointZ; 

	// Find alle the entries in the drilling table
	processings.forEach((processing) => {
	drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Shelf');
	drills.forEach((drill) => {
		drillings.push(drill);
	});
	});

	let rotation = part2.pa_Rotation;

	//--------------------For each drilling (insert the drillings)------------------------

	drillings.forEach(x => {

		// Calculate the position
		let posX:number;
		let posY:number;
		if (rotation == 0){
			posX = posRel.x + insertionX + x.XA;
			posY = posRel.z + insertionZ + x.YA;
		}
		else if (rotation == 180){
			posX = posRel.x - insertionX - x.XA;
			posY = posRel.z - insertionZ - x.YA;
		}
		else if (rotation == 90){
			posX = posRel.x - insertionX - x.XA;
			posY = posRel.z + insertionZ + x.YA;
		}
		else if (rotation == 270){
			posX = posRel.x + insertionX + x.XA;
			posY = posRel.z - insertionZ - x.YA;
		}
		else{
			posX = 0;
			posY = 0;
		}
		
		// Calculate the drilling depth
		let drillDepth = (x.TI <= 0) ? partSelf._dimy : x.TI;

		// Add Vertical Drill
		let DrillVert = elem.addncout_DrillVert();
		DrillVert.nc_TOOL="102";
		DrillVert.nc_XA=posX;
		DrillVert.nc_YA=partSelf._dimz - posY;
		DrillVert.nc_TI=drillDepth;
		DrillVert.nc_DU=x.DU;

		DrillVert.nc_BM = x.matrix_BM || "LS"
		DrillVert.nc_WI = x.matrix_WI ?? 0;
		DrillVert.nc_AB = x.matrix_AB ?? 1;
		DrillVert.nc_LA = x.matrix_LA ?? 0;
		DrillVert.nc_MI = x.matrix_MI ?? 0;
		DrillVert.nc_KO = x.matrix_KO || "00";
		DrillVert.nc_Side = "Btm";

		// Add drawing
		let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posX, 0, posY, x.DU, drillDepth, x.DU );
		drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + x.DU/2 + '" /></svg>', 'y');
	})
}


// Return the object based on the oven
static find_OvenMapping(Supplier: string,OvenId: string):ICT_tab_OvenMapping{

	let retEntry = ct_tab_OvenMapping.find(p => p.in_Supplier == Supplier && p.in_OvenId == OvenId)!;

	if (retEntry == undefined) {
		let Text = Supplier + ', ' + OvenId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13016',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry;
}


// Determinate the specs of the oven
static find_OvenConstruction(ConstructionId: string): ICT_tab_OvenConstruction{

	let retEntry = ct_tab_OvenConstruction.find(p => p.in_ConstructionId == ConstructionId);

	if (retEntry == undefined) {
		let Text = ConstructionId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11009',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry!;
}


// Find DrawerBoxDimensionMapping\n//########################################################
static find_DrawerBoxDimensionMapping(BoxDesign:string, BoxProgram:string, BoxColor:string, SpaceDepth:number, SpaceHeight:number):ICT_tab_DrawerBoxDimensionMapping{

	// Wildcard parameters
	let WildcardParams: any = {			
		in_BoxProgram: BoxProgram,
		in_BoxColor: BoxColor
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_BoxDesign: BoxDesign
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_SpaceDepthMin",
			MaxAttr: "in_SpaceDepthMax",
			Value: SpaceDepth
		},
		"Range2": {
			MinAttr: "in_SpaceHeightMin",
			MaxAttr: "in_SpaceHeightMax",
			Value: SpaceHeight
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_DrawerBoxDimensionMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = BoxDesign + ' - ' + SpaceDepth + ' - ' + SpaceHeight;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13008',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
}


// Find DrawerBoxColorMapping\n//########################################################
static find_DrawerBoxColorMapping(HardwareColor:string):ICT_tab_DrawerBoxColorMapping {
	let retEntry = ct_tab_DrawerBoxColorMapping.find(p=> p.in_HardwareColor == HardwareColor)!;
	if (retEntry == undefined) {
		let Text = HardwareColor;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13009',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Find DrawerBoxWeightTypeSettings\n//########################################################
static find_DrawerBoxWeightTypeSettings(TypeElement:string, FrontWidth:number, FrontHeight:number, BoxDepth:string, BoxHeight:string, FrontpanelWeight: number):ICT_tab_DrawerBoxWeightTypeSettings{

	// Wildcard parameters
	let WildcardParams: any = {		
		in_TypeElement: TypeElement,
		in_DrawerBoxDepthType: BoxDepth,
		in_DrawerBoxHeightType: BoxHeight
	};
	
	// Fixed parameters
	let FixedParams: any = {
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_FrontWidthMin",
			MaxAttr: "in_FrontWidthMax",
			Value: FrontWidth
		},
		"Range2": {
			MinAttr: "in_FrontHeightMin",
			MaxAttr: "in_FrontHeightMax",
			Value: FrontHeight
		},
		"Range3": {
			MinAttr: "in_FrontpanelWeightMin",
			MaxAttr: "in_FrontpanelWeightMax",
			Value: FrontpanelWeight
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_DrawerBoxWeightTypeSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text: string = `${TypeElement} - ${FrontWidth} - ${FrontHeight} - ${BoxDepth} - ${BoxHeight} - ${FrontpanelWeight}`;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14005',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
	
}


// Find Edge Number Settings\n//########################################################
static find_EdgeNumberSettings(PartName: string | undefined = undefined, Edge:string | undefined = undefined):ICT_tab_EdgeNumberSettings{

	// Wildcard parameters
	let WildcardParams: any = {			
		in_PartName: PartName
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_Edge: Edge
};
	
	// Range parameters
	let RangeParams: any = {
		
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_EdgeNumberSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		logError('Error 14007: Could not find entry in tab_EdgeNumberSettings for PartName: ' + PartName + ' and Edge: ' + Edge);
	}
	return retVal;
}


// Find DrawerBoxInsertionSettings\n//########################################################
static find_DrawerBoxInsertionSettings(TypeElement:string, FrontProgram:string, HandleDesign:string, HandlePosType:string, FrontStartPos:number, ShelffixedBtm:boolean):ICT_tab_DrawerBoxInsertionSettings{

	// Wildcard parameters
	let WildcardParams: any = {			
		in_TypeElement: TypeElement,
		in_FrontProgram: FrontProgram,
		in_HandleDesign: HandleDesign,
		in_HandlePosType: HandlePosType
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_ShelffixedBtm: ShelffixedBtm
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_FrontStartPosMin",
			MaxAttr: "in_FrontStartPosMax",
			Value: FrontStartPos
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_DrawerBoxInsertionSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = TypeElement + ' - ' + FrontProgram + ' - ' + HandleDesign  + ' - ' + HandlePosType + ' - ' + FrontStartPos;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14004',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
}


// Return the object based on the fridge\n//########################################################\n
static find_FridgeMapping(Supplier: string, FridgeId: string):ICT_tab_FridgeMapping{

	let retEntry = ct_tab_FridgeMapping.find(p => p.in_Supplier == Supplier && p.in_FridgeId == FridgeId)!;
	
	if (retEntry == undefined) {
		let Text = Supplier + " - " + FridgeId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13015',1);
		logError(ErrorMessage.Message(Text));
	}	

	return retEntry!;
}




// Retrieve the Fridge information\n//########################################################
static find_FridgeConstruction(ConstructionId: string): ICT_tab_FridgeConstruction{
	
	let retEntry = ct_tab_FridgeConstruction.find(p => p.in_ConstructionId == ConstructionId);

	if(retEntry == undefined) {
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11008',1);
		logError(ErrorMessage.Message(ConstructionId!));
	}

	return retEntry!;
}


// Return value from hanger settings\n//########################################################
static find_HangerSettings(TypeElement: string, CarcaseHeight: number, CarcaseWidth: number, Weight: number, DistanceBehindBackwall: number, BackwallPosition: number):ICT_tab_HangerSettings{

	// Save original values of variables that allow wildcards
	let TypeElement_IN = TypeElement;

	let retEntry: any;
	
	let i=1;
	do 
	{
		if (i==1)
		{
			TypeElement = TypeElement_IN;
		}
		else if(i==2)
		{
			TypeElement = 'All';
		}

		//Query the table
		retEntry = queryTable(TypeElement,  CarcaseHeight, CarcaseWidth, Weight, DistanceBehindBackwall, BackwallPosition);	
		i++;
	} while ( retEntry == undefined && i <= 2)
	
	if (retEntry == undefined) {
		let Text = ' TypeElement: ' + TypeElement_IN + ' and CarcaseHeight: ' + CarcaseHeight + ' and CarcaseWidth: ' + CarcaseWidth + ' and Weight: ' + Weight + ' and DistanceBehindBackwall: ' + DistanceBehindBackwall + ' and BackwallPosition: ' + BackwallPosition;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14010',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry;
	
	
	function queryTable(TypeElement: string, CarcaseHeight: number, CarcaseWidth: number, Weight: number, DistanceBehindBackwall: number, BackwallPosition: number):ICT_tab_HangerSettings{
	
		let TableResult = ct_tab_HangerSettings.find(p=> p.in_TypeElement! == TypeElement && p.in_CarcaseHeightMin! <= CarcaseHeight && p.in_CarcaseHeightMax! >= CarcaseHeight && p.in_CarcaseWidthMin! <= CarcaseWidth && p.in_CarcaseWidthMax! >= CarcaseWidth && p.in_WeightMin! <= Weight && p.in_WeightMax! >= Weight && p.in_DistanceBehindBackwallMin! <= DistanceBehindBackwall && p.in_BackwallPositionMin! <= BackwallPosition && p.in_BackwallPositionMax! >= BackwallPosition)!;
		return TableResult;
	}
	
	
}



// Return value from hanger mapping\n//########################################################
static find_HangerMapping(HangerType:string, CarcaseWidth:number, Color:string):ICT_tab_HangerMapping{

	let	retEntry= ct_tab_HangerMapping.find(y=> y.in_HangerType! == HangerType && y.in_CarcaseWidthMin! <= CarcaseWidth && y.in_CarcaseWidthMax! >= CarcaseWidth && y.in_Color! == Color)!;
if (retEntry == undefined) {
retEntry= ct_tab_HangerMapping.find(y=> y.in_HangerType! == HangerType && y.in_CarcaseWidthMin! <= CarcaseWidth && y.in_CarcaseWidthMax! >= CarcaseWidth && y.in_Color! == 'All')!;	
if (retEntry== undefined) 
	{
		let Text = ' HangerType: ' + HangerType + ' and CarcaseWidth: ' + CarcaseWidth  + ' and Color: ' + Color;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13005',1)
		logError(ErrorMessage.Message(Text));
	}
}
	return retEntry!;
}


// Process for calculation of the hanger selection\n//########################################################
static process_Hanger(m: IFuncParents_mc_Storageunit01, BackwallPosition: number, DistanceBehindBackwallMin: number, posTop: number = 0, freeSpace: string = '') {

	//---------------Initialize output variable---------------------------

	// Interface for the HangerDetails
	interface HangerDetails 
	{
		HangerType: string|undefined;
		HangerTypeObject: string|undefined;
		IncludeWallPlateRight: boolean|undefined;
		WallPlateRightLength: number|undefined;
		IncludeWallPlateLeft: boolean|undefined;
		WallPlateLeftLength: number|undefined;
		VerticalOffset: number|undefined;
		VerticalOffsetWallPlateToHanger: number|undefined;
		HardwareItem: string|undefined;
		ProcessingItem: string|undefined;
		GraphicItem: string | undefined;
		HorizontalFreeSpace: number | undefined;
	}

	let HangerData: HangerDetails = {
		HangerType: undefined,
		HangerTypeObject: undefined,
		IncludeWallPlateRight: undefined,
		WallPlateRightLength: undefined,
		IncludeWallPlateLeft: undefined,
		WallPlateLeftLength: undefined,
		VerticalOffsetWallPlateToHanger: undefined,
		VerticalOffset: undefined,
		HardwareItem: undefined,
		ProcessingItem: undefined,
		GraphicItem: undefined,
		HorizontalFreeSpace: undefined
	}

	// Get the free space data
	let freeSpaces = JSON.parse(freeSpace);
	let FullWidthFreeSpace = freeSpaces.FullWidthFreeSpace;
	let FullWidthStartPos = freeSpaces.FullWidthStartPos;
	let FullDepthStartPos = freeSpaces.FullDepthStartPos;
	let FreeSpaceDepthStartPos = freeSpaces.FreeSpaceDepthStartPos;
	let FreeSpaceWidth = freeSpaces.FreeSpaceWidth;
	let FreeSpaceWidthStartPos = freeSpaces.FreeSpaceWidthStartPos;

	
	//========================================================================
	// Hanger Selection
	//========================================================================
	
	if(m.mod_HangerType == 'Custom')
	{
	
		//=====================================
		// Call user exit for customization
		//=====================================
		
		// Call the user exit
		let retValUe = GlobalFunc.ue_HangerSelection(m, BackwallPosition, DistanceBehindBackwallMin, FullWidthFreeSpace);
	
		// Set the Output values
		HangerData.HangerType = retValUe.HangerType!;
		HangerData.HangerTypeObject = retValUe.HangerTypeObject;
		HangerData.IncludeWallPlateRight= retValUe.IncludeWallPlateRight!;
		HangerData.WallPlateRightLength = retValUe.WallPlateRightLength;
		HangerData.IncludeWallPlateLeft= retValUe.IncludeWallPlateLeft!;
		HangerData.WallPlateLeftLength = retValUe.WallPlateLeftLength;
		HangerData.VerticalOffset = retValUe.VerticalOffset!;
		HangerData.VerticalOffsetWallPlateToHanger = retValUe.VerticalOffsetWallPlateToHanger!;
		HangerData.HardwareItem = retValUe.HardwareItem!;
		HangerData.ProcessingItem = retValUe.ProcessingItem!;
		HangerData.GraphicItem = retValUe.GraphicItem!;
		HangerData.HorizontalFreeSpace = retValUe.HorizontalFreeSpace;

	}
	else if (m.mod_HangerType == 'Automatic')
	{
		//=====================================
		// Standard Library Solution
		//=====================================

		//---------------Get data from table HangerSettings---------------------------
		let retHangerSettings = GlobalFunc.find_HangerSettings(m.mod_TypeElement, m.mod_CarcaseHeight, m.mod_CarcaseWidth, 20, DistanceBehindBackwallMin, BackwallPosition); ////////////////////////////////// ROOT MODULE NOT DEFINED AND CALCULATION OF WEIGHT PENDING!!!!!!!!!

		//---------------Get data from table HangerMapping---------------------------
		let retHangerMapping = GlobalFunc.find_HangerMapping(retHangerSettings.HangerType!, m.mod_CarcaseWidth, m.mod_HangerColor);
		
		//---------------Get data from table ObjectMapping---------------------------
		let retHangerObject = GlobalFunc.find_ObjectMapping(retHangerMapping.Object!);
		
		//---------------Calculate Vertical Offset---------------------------
		let verticalOffset : number = 0;
		if(m.mod_HangerPosY == 'Automatic')
		{ verticalOffset = retHangerMapping.VerticalOffset!; }
		else if (m.mod_HangerPosY == 'Top')
		{ verticalOffset = 0; }
		else if (m.mod_HangerPosY == 'Middle')
		{ verticalOffset = -m.mod_CarcaseHeight / 2; }
		else if (m.mod_HangerPosY == 'Manual')
		{ verticalOffset = - m.mod_HangerOffsetPosY; }				

		//---------------Set output value---------------------------
		
		HangerData.HangerType = retHangerSettings.HangerType!;
		HangerData.HangerTypeObject = retHangerMapping.Object!;
		HangerData.IncludeWallPlateRight= retHangerMapping.IncludeWallPlateRight!;
		HangerData.WallPlateRightLength = retHangerMapping.WallPlateRightLength(this,FullWidthFreeSpace)!;
		HangerData.IncludeWallPlateLeft= retHangerMapping.IncludeWallPlateLeft!;
		HangerData.WallPlateLeftLength = retHangerMapping.WallPlateLeftLength(this,FullWidthFreeSpace)!;
		HangerData.VerticalOffset = verticalOffset;
		HangerData.VerticalOffsetWallPlateToHanger = retHangerMapping.VerticalOffsetWallPlateToHanger!;
		HangerData.HardwareItem = retHangerObject.HardwareItem!;
		HangerData.ProcessingItem = retHangerObject.ProcessingItem!;
		HangerData.GraphicItem = retHangerObject.GraphicItem!;
		HangerData.HorizontalFreeSpace = FullWidthFreeSpace;

	}
	else
	{
		
		//=====================================
		// Manual Selection
		//=====================================
		
		//---------------Get data from table HangerMapping---------------------------
		let retHangerMapping = GlobalFunc.find_HangerMapping(m.mod_HangerType!, m.mod_CarcaseWidth, m.mod_HangerColor);
		
		// //---------------Get data from table ObjectMapping---------------------------
		let retHangerObject = GlobalFunc.find_ObjectMapping(retHangerMapping.Object!);

		//---------------Calculate Vertical Offset---------------------------
		let verticalOffset : number = 0;
		if(m.mod_HangerPosY == 'Automatic')
		{ verticalOffset = retHangerMapping.VerticalOffset!; }
		else if (m.mod_HangerPosY == 'Top')
		{ verticalOffset = 0; }
		else if (m.mod_HangerPosY == 'Middle')
		{ verticalOffset = m.mod_CarcaseHeight / 2; }
		else if (m.mod_HangerPosY == 'Manual')
		{ verticalOffset = - m.mod_HangerOffsetPosY; }

		HangerData.HangerType = m.mod_HangerType!;
		HangerData.HangerTypeObject = retHangerMapping.Object!;
		HangerData.IncludeWallPlateRight= retHangerMapping.IncludeWallPlateRight!;
		HangerData.WallPlateRightLength = retHangerMapping.WallPlateRightLength(m, FullWidthFreeSpace)!;
		HangerData.IncludeWallPlateLeft= retHangerMapping.IncludeWallPlateLeft!;
		HangerData.WallPlateLeftLength = retHangerMapping.WallPlateLeftLength(m, FullWidthFreeSpace)!;
		HangerData.VerticalOffset = verticalOffset;
		HangerData.VerticalOffsetWallPlateToHanger = retHangerMapping.VerticalOffsetWallPlateToHanger!;
		HangerData.HardwareItem = retHangerObject.HardwareItem!;
		HangerData.ProcessingItem = retHangerObject.ProcessingItem!;
		HangerData.GraphicItem = retHangerObject.GraphicItem!;
		HangerData.HorizontalFreeSpace = FullWidthFreeSpace!;
	}

	//=====================================
	// Add the module
	//=====================================
	
	let Hanger = m.addOD_M_mc_HangerSystem01();

	// Pass the Hanger Informations to the HangerInfo attribute
	let HangerstrJson = JSON.stringify(HangerData);
	Hanger.mod_HangerInfo.push(HangerstrJson);

	// setOrigin
	let hangerCarcaseSpaceDepthStartpos = FreeSpaceDepthStartPos.length ? FreeSpaceDepthStartPos[FreeSpaceDepthStartPos.length - 1] : FullDepthStartPos;
	let hangerCarcaseSpaceWidthStartpos = FreeSpaceWidthStartPos.length ? FreeSpaceWidthStartPos[FreeSpaceWidthStartPos.length - 1] : FullWidthStartPos;
	Hanger.setOrigin(hangerCarcaseSpaceWidthStartpos, posTop, hangerCarcaseSpaceDepthStartpos);

	// Save origin in Attribute
	Hanger.mod_Originpos.push(m.mod_Originpos[0] + hangerCarcaseSpaceWidthStartpos);
	Hanger.mod_Originpos.push(m.mod_Originpos[1] + posTop);
	Hanger.mod_Originpos.push(m.mod_Originpos[2] + hangerCarcaseSpaceDepthStartpos);

	return HangerData;

}


// Find ErrorList\n//########################################################
static find_ErrorList(ErrorId: string, recursionCount: number): ICT_tab_ErrorList {

	// Check if the recursion is called more then once
	if (recursionCount > 2) {
		logFatal('Your ErrorId, you are searching for is not existing and the ErrorMessage to return this message is also missing! Please add the ErrorID 15001 to the tab_ErrorList!');
	}

	// Retrieve ErrorId from table ErrorList
	let retEntry = ct_tab_ErrorList.find(p => p.in_ErrorId === ErrorId);

	// If ErrorId can not be found, throw the error message 15001
	if (retEntry == undefined && recursionCount <= 2) {
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 15001', recursionCount + 1);
		logError(ErrorMessage.Message('') + '  SearchId: ' + ErrorId);
	}
	return retEntry!;
}


// Find HardwareMillingLibrary\n//########################################################
static find_HardwareMilingLibrary(ProcessingId:string, Part:string):ICT_tab_HardwareMillingLibrary[]{
	let retEntry = ct_tab_HardwareMillingLibrary.filter(p=> p.in_ProcessingId == ProcessingId && p.in_Part == Part)!;
	return retEntry!;
}


// User Exit for Hanger Selection\n//########################################################
static ue_HangerSelection(m: IFuncParents_mc_Storageunit01, BackwallPosition: number, DistanceBehindBackwallMin: number, HorizontalFreeSpace: number){

//---------------Initialize output variable---------------------------

	// Interface for the HangerDetails
	interface HangerDetails 
	{
		HangerType: string|undefined;
		HangerTypeObject: string|undefined;
		IncludeWallPlateRight: boolean|undefined;
		WallPlateRightLength: number|undefined;
		IncludeWallPlateLeft: boolean|undefined;
		WallPlateLeftLength: number|undefined;
		VerticalOffset: number|undefined;
		VerticalOffsetWallPlateToHanger: number|undefined;
		HardwareItem: string|undefined;
		ProcessingItem: string|undefined;
		GraphicItem: string|undefined;
		HorizontalFreeSpace: number | undefined;
	}

	let HangerData: HangerDetails = {
		HangerType: undefined,
		HangerTypeObject: undefined,
		IncludeWallPlateRight: undefined,
		WallPlateRightLength: undefined,
		IncludeWallPlateLeft: undefined,
		WallPlateLeftLength: undefined,
		VerticalOffsetWallPlateToHanger: undefined,
		VerticalOffset: undefined,
		HardwareItem: undefined,
		ProcessingItem: undefined,
		GraphicItem: undefined,
		HorizontalFreeSpace: undefined
	}

//---------------Get data from table HangerSettings---------------------------
		let retHangerSettings = GlobalFunc.find_HangerSettings(m.mod_TypeElement, m.mod_CarcaseHeight, m.mod_CarcaseWidth, 20, DistanceBehindBackwallMin, BackwallPosition); ////////////////////////////////// ROOT MODULE NOT DEFINED AND CALCULATION OF WEIGHT PENDING!!!!!!!!!

		//---------------Get data from table HangerMapping---------------------------
		let retHangerMapping = GlobalFunc.find_HangerMapping(retHangerSettings.HangerType!, m.mod_CarcaseWidth, m.mod_HangerColor);
		
		// //---------------Get data from table ObjectMapping---------------------------
		let retHangerObject = GlobalFunc.find_ObjectMapping(retHangerMapping.Object!);
		
//---------------Calculate Vertical Offset---------------------------
		let verticalOffset : number = 0;
		if(m.mod_HangerPosY == 'Automatic')
		{ verticalOffset = retHangerMapping.VerticalOffset!; }
		else if (m.mod_HangerPosY == 'Top')
		{ verticalOffset = 0; }
		else if (m.mod_HangerPosY == 'Middle')
		{ verticalOffset = m.mod_CarcaseHeight / 2; }
		else if (m.mod_HangerPosY == 'Manual')
		{ verticalOffset = - m.mod_HangerOffsetPosY; }

		//---------------Set output value---------------------------
		
		HangerData.HangerType = retHangerSettings.HangerType!;
		HangerData.HangerTypeObject = retHangerMapping.Object!;
		HangerData.IncludeWallPlateRight= retHangerMapping.IncludeWallPlateRight!;
		HangerData.WallPlateRightLength = retHangerMapping.WallPlateRightLength(this,HorizontalFreeSpace)!;
		HangerData.IncludeWallPlateLeft= retHangerMapping.IncludeWallPlateLeft!;
		HangerData.WallPlateLeftLength = retHangerMapping.WallPlateLeftLength(this,HorizontalFreeSpace)!;
		HangerData.VerticalOffset = verticalOffset;
		HangerData.VerticalOffsetWallPlateToHanger = retHangerMapping.VerticalOffsetWallPlateToHanger!;
		HangerData.HardwareItem = retHangerObject.HardwareItem!;
		HangerData.ProcessingItem = retHangerObject.ProcessingItem!;
		HangerData.GraphicItem = retHangerObject.GraphicItem!;
	HangerData.HorizontalFreeSpace = HorizontalFreeSpace!;

return HangerData;
}


// Return value from edge joints settings\n//########################################################
static find_EdgeJointSettings(PartGroup:string, EdgeJointType:string):ICT_tab_EdgeJointSettings{
let retEntry = ct_tab_EdgeJointSettings.find(x=> x.in_PartGroup == PartGroup && x.in_EdgeJointType== EdgeJointType);
	if (retEntry == undefined) {
		let Text = 'PartGroup: ' + PartGroup + ' and EdgeJointType: ' + EdgeJointType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14016',1);
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Find Part Overdimension (per edge)\n//########################################################
static find_PartOverdimensionSettings(EdgeThk:number):ICT_tab_PartOverdimensionSettings{
	let retEntry = ct_tab_PartOverdimensionSettings.find(p=> p.in_EdgeThkMin <= EdgeThk && p.in_EdgeThkMax == EdgeThk)!;
	if (retEntry == undefined) {
		let Text = 'EdgeThk; ' + EdgeThk;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14017',1);
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Return value from backwall settings\n//########################################################
static find_CarcaseBackwallSettings(BackwConstruction:string):ICT_tab_CarcaseBackwallSettings{
	let retEntry = ct_tab_CarcaseBackwallSettings.find(p=> p.in_BackwallConstruction == BackwConstruction);
	if (retEntry == undefined) {
		let Text = 'BackwallConstruction: ' + BackwConstruction;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14009',1);
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Find DrawerBoxExtraItemSettings\n//########################################################
static find_DrawerBoxExtraItemSettings(FrontProgram: string, OpeningType: string, Width: number, Depth: number):ICT_tab_DrawerBoxExtraItemSettings[]{

	// Wildcard parameters
	let WildcardParams: any = {			
		in_FrontProgram: FrontProgram,
		in_OpeningType: OpeningType
	};
	
	// Fixed parameters
	let FixedParams: any = {};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_WidthMin",
			MaxAttr: "in_WidthMax",
			Value: Width
		},
		"Range2": {
			MinAttr: "in_DepthMin",
			MaxAttr: "in_DepthMax",
			Value: Depth
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=false;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_DrawerBoxExtraItemSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = 'Frontprogram: ' + FrontProgram + ' , OpeningType: ' + OpeningType + ' , Width: ' + Width + ' , Depth: ' + Depth;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14018',1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;
}


// Process calculation of oversize by using RackArea\n//########################################################
static process_RackAreaOversizeCarcase(parentModule: IFuncParents_mr_StorageunitSingle) {

//=====================================
// Define variables
//=====================================

let CountRackArea = 0;
let CountModules = 0;
let retOversize = 0;

//=====================================
// Search for Front-Modules in StorageunitSigle
//=====================================

// Cycle through front modules
parentModule.m.forEach(p => {
	if (p instanceof OD_M_mf_RackArea) {
		CountRackArea += 1;
	}

	if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Fliplift || p instanceof OD_M_mf_Drawer || p instanceof OD_M_mf_Oven || p instanceof OD_M_mf_Fridge || p instanceof OD_M_mf_RackArea) {
		CountModules += 1;
	}
})

if (CountRackArea == 1 && CountModules == 1){

	//=====================================
	// Get data from table FrontConstruction
	//=====================================

	//---------------Get data from table Front Construction---------------------------
	let retFrontThk = GlobalFunc.find_FrontConstruction (parentModule.mod_FrontProgram, parentModule.mod_FrontDesign,'Door', parentModule.mod_Width,parentModule.mod_Height,'None','All');

	//---------------Convert data type string to number ---------------------------
	let FrontThk = retFrontThk.Thickness;

	//=====================================
	// Calculate Oversize Value for each Type
	//=====================================

	if(parentModule.g.basic_RackAreaOversizeAutomaticCarcaseType == true){
		if (parentModule.g.basic_RackAreaOversizeCarcaseType == 'FixedOversize') {
			retOversize = parentModule.g.basic_RackAreaDepthFixedCarcase + parentModule.mod_RackAreaManualOffsetCarcase;
		}
	
		else if (parentModule.g.basic_RackAreaOversizeCarcaseType == 'FlexibleOversize') {
			retOversize = FrontThk + parentModule.mod_FrontGapCarcase + parentModule.mod_RackAreaManualOffsetCarcase;
		}
	}
	else{
		if (parentModule.mod_RackAreaOversizeCarcaseType == 'FixedOversize') {
			retOversize = parentModule.g.basic_RackAreaDepthFixedCarcase + parentModule.mod_RackAreaManualOffsetCarcase;
		}
	
		else if (parentModule.mod_RackAreaOversizeCarcaseType == 'FlexibleOversize') {
			retOversize = FrontThk + parentModule.mod_FrontGapCarcase + parentModule.mod_RackAreaManualOffsetCarcase;
		}
	}
}

// If the situation doesn't allow to extend the caracase, but the user is configuring an oversize we give him a message
else {
	if(parentModule.g.basic_RackAreaOversizeAutomaticCarcaseType == false && CountRackArea >= 1){
		if (parentModule.mod_RackAreaOversizeCarcaseType == 'FixedOversize' || parentModule.mod_RackAreaOversizeCarcaseType == 'FlexibleOversize'){
			let InfoMessage = GlobalFunc.find_ErrorList('Info 22003',1);
			logInfo(InfoMessage.Message(''));
		}
	}
}

// Return the oversize to the module
return retOversize;
}


// Find DrawerBoxColorMapping BoardInfos\n//########################################################
static find_DrawerBoxColorMappingBoardInfo(DrawerBoxColor:string):ICT_tab_DrawerBoxColorMapping {
	let retEntry = ct_tab_DrawerBoxColorMapping.find(p=> p.DrawerBoxColor == DrawerBoxColor)!;
	if (retEntry == undefined) {
		let Text = DrawerBoxColor;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13009',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Mapping Duststrip\n//########################################################
static find_DuststripMapping(FrontProgram:string, FrontColor:string, FrontDesign:string):ICT_tab_DuststripMapping{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_FrontProgram: FrontProgram,
		in_FrontColor: FrontColor,
		in_FrontDesign: FrontDesign
	};
	
	// Fixed parameters
	let FixedParams: any = {};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_DuststripMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = 'FrontProgram: ' + FrontProgram + 'FrontColor: ' + FrontColor + 'FrontDesign: ' + FrontDesign;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13017',1);
		logError(ErrorMessage.Message(Text));
	}
	// Return Value
	return retVal;
}


// DoorSettings\n//########################################################
static find_DoorSettings(CabinetType:string, TypeElement:string, CarcaseDirection: string, FrontDesign:string, FrontColor:string, Width:number, DoorType:string, DoorDirection:string, VertDivider:string):ICT_tab_DoorSettings{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_CabinetType: CabinetType,
		in_TypeElement: TypeElement,
		in_CarcaseDirection: CarcaseDirection,
		in_FrontDesign: FrontDesign,
		in_FrontColor: FrontColor
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_DoorType: DoorType,
		in_DoorDirection: DoorDirection,
		in_VertDivider: VertDivider
	};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
		MinAttr: "in_WidthMin",
		MaxAttr: "in_WidthMax",
		Value: Width
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_DoorSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = TypeElement + ' - ' + CarcaseDirection + ' - ' + FrontDesign + ' - ' + FrontColor + ' - ' + CabinetType + ' - ' + Width + ' - ' + DoorType + ' - ' + DoorDirection + ' - ' + VertDivider;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14019',1);
		logError(ErrorMessage.Message(Text));
	}
	// Return Value
	return retVal;
}


// Calculation of door information\n//########################################################
static process_Door(m:any){

	// Create Interface
	interface DoorInformation {
		configValid: boolean;
		VertDivider: string;
		FrontDescriptor: string;
		DoorQty: number;
		DescriptorList: number[];
		FrontWidthList: number[];
		TotalWidth: number;
		DoorDirection: string[];
		HandleMatrixList: string[];
		VertDividerList: string[];
	  }

	// Create Variables
	let configValid = true;
	let VertDivider = "None";
	let FrontDescriptor = "None";
	let DoorQty = 0;
	let DescriptorList: number[] = [];
	let FrontWidthList: number[] = [];
	let TotalWidth = 0;
	let DoorDirection: string[] = [];
	let HandleMatrixList: string[] = [];
	let VertDividerList: string[] = [];

	// Call table DoorSettings
	let retDoorSettings = GlobalFunc.find_DoorSettings(m.mod_ParentName!, m.mod_TypeElement!, m.mod_CarcaseDirectionInfo!, m.mod_FrontDesign!, m.mod_FrontColor!, m.mod_FrontWidth!, m.mod_DoorType!, m.mod_DoorDirection!, m.mod_VertDividerType!);

	// Check if the configuration is valid
	if (retDoorSettings !== undefined) {

		// Call the attributes
		VertDivider = retDoorSettings.VertDividerType!
		FrontDescriptor = m.mod_DoorType == "Automatic" ? retDoorSettings.FrontDescriptor! : m.mod_FrontDescriptor!;
		DoorQty = retDoorSettings.DoorQty!

		// Door dimensions
		DescriptorList = GlobalFunc.process_Descriptor(FrontDescriptor!, m.mod_FrontWidth!);
		if (DescriptorList.length > 0 && DoorQty > 1) {
			DescriptorList.forEach(p =>{
				FrontWidthList.push(p);
				TotalWidth += p;
			});
			FrontWidthList.push(m.mod_FrontWidth! - TotalWidth);
		}
		else{
			FrontWidthList.push(m.mod_FrontWidth!);
		}

		// Check if the configuration is valid
		if (DoorQty > 1 && DoorQty != FrontWidthList.length){
			let ErrorMessage = GlobalFunc.find_ErrorList('Error 22028', 1);
			logError(ErrorMessage.Message(''));
			configValid = false;
		}

		// Door direction
		DoorDirection.push(retDoorSettings.FirstDoorDirection!);
		DoorDirection.push(retDoorSettings.SecondDoorDirection!);

		// Handle matrix
		if (DoorQty == 1){
			HandleMatrixList.push(m.mod_HandlePosMatrix!);
		}
		else{
			HandleMatrixList.push(m.mod_HandlePosLeftMatrix!);
			HandleMatrixList.push(m.mod_HandlePosRightMatrix!);
		}

		// Vertical divider (only for duststrip)
		if (DoorQty > 1){
			if (VertDivider == 'DustStripLeft'){
				VertDividerList.push(VertDivider);
				VertDividerList.push('NoVertDivider');
			}
			else if (VertDivider == 'DustStripRight'){
				VertDividerList.push('NoVertDivider');
				VertDividerList.push(VertDivider);
			}
			else{
				VertDividerList.push('NoVertDivider');
				VertDividerList.push('NoVertDivider');
			}
		}
		else{
			VertDividerList.push('NoVertDivider');
		}
	} 
	else {
		configValid = false;
	}

	// Create the object and return it
	let DoorInfo: DoorInformation = {
		configValid: configValid,
		VertDivider: VertDivider,
		FrontDescriptor: FrontDescriptor,
		DoorQty: DoorQty,
		DescriptorList: DescriptorList,
		FrontWidthList: FrontWidthList,
		TotalWidth: TotalWidth,
		DoorDirection: DoorDirection,
		HandleMatrixList: HandleMatrixList,
		VertDividerList: VertDividerList
	  };
	
	  return DoorInfo;
}


// Process calculation of front panel weight\n//########################################################
static process_FrontpanelWeightCalculations(m: IFuncParents_mc_FrontPanel01_mc_PanelWoodFrame01, PartGroup: string, HandlePosType: string): number {
	
    // Initialize weight to 0 as default
    let weight = 0;

    try {
        //===================================================
        // Call the user exit
        //===================================================
        if (m.g.basic_FrontpanelWeightLogic === 'Custom') {

            weight = GlobalFunc.ue_FrontpanelWeightCalculations(m, PartGroup, HandlePosType)

            if (!weight || weight === undefined) {
                weight = 0;
                throw new Error("User Exit for front weight calculation failed. The given value is invalid.");               
            }
        }

        //===================================================
        // Library solution
        //===================================================
        else if (m.g.basic_FrontpanelWeightLogic === 'Library') {
            
            // Call the FrontConstruction table to get the weight per m2
            let frontweight = GlobalFunc.find_FrontConstruction(
                m.mod_FrontProgram, m.mod_FrontDesign, PartGroup, m.mod_Width, m.mod_Height, m.mod_HandleDesign_matrix.HandleDesignGroup!, HandlePosType
            );

            if (!frontweight || frontweight.Weight === undefined) {
                throw new Error("Front weight data not found or invalid.");
            }

            // Calculate the weight
            weight = (m.mod_Width / 1000) * (m.mod_Height / 1000) * frontweight.Weight;
        }

        //===================================================
        // Control the errors
        //===================================================
        else {
            throw new Error("There was created a new logic to calculate the frontweight. But this process is not implemented.");
        }
    } 
    catch (error:any) {
        // Log the error; weight remains 0 as initialized
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 40002',1);
        logError(ErrorMessage.Message(error.message));
	}

    // Return the calculated weight or 0 in case of an error
    return weight;
}


// User exit for calculation of the front panel weight\n//########################################################
static ue_FrontpanelWeightCalculations(m: IFuncParents_mc_FrontPanel01_mc_PanelWoodFrame01, PartGroup: string, HandlePosType: string): number {

    // Initialize weight to 0 as default
	  let weight = 0;

	  // Try to calculate the weight
	  try {

		// Call the FrontConstruction table to get the weight per m2
		let frontweight = GlobalFunc.find_FrontConstruction(
			m.mod_FrontProgram, m.mod_FrontDesign, PartGroup, m.mod_Width, m.mod_Height, m.mod_HandleDesign_matrix.HandleDesignGroup!, HandlePosType
		);

    // Throw an error if the table entry is not valid
		if (!frontweight || frontweight.Weight === undefined) {
			throw new Error("Front weight data not found or invalid.");
		}

		// Calculate the weight
		weight = (m.mod_Width / 1000) * (m.mod_Height / 1000) * frontweight.Weight;
	  } 

	  // Log the errors, weight remains 0 as initialized
	  catch (error:any) {
		  let ErrorMessage = GlobalFunc.find_ErrorList('Error 40002',1);
		  logError(ErrorMessage.Message(error.message));
	  }
  
	  // Return the calculated weight or 0 in case of an error
  return weight;
    
}


// Process handle \n//########################################################
static process_Handle(m: IFuncParents_mc_Handle01) {

	// Interface for the handle data
	interface HandleData {
		Model3D?: any;
		Model3DGroupName: string;
		ColorId: string;
		Length: number,
		Depth: number,
		Thickness: number,
		Weight: number,
		Rotation: number;
		PosVertical: number;
		PosHorizontal: number;
		ProcessingId: string;
		HardwareId: string;
	}

	// Initialize the object
	let retHandle: HandleData = {
		Model3D: undefined,
		Model3DGroupName: "",
		ColorId: "",
		Length: 0,
		Depth: 0,
		Thickness: 0,
		Weight: 0,
		Rotation: 0,
		PosVertical: 0,
		PosHorizontal: 0,
		ProcessingId: "",
		HardwareId: ""
	}

	// Initialize internal variables
	let HandleLength = 0;
	let HandleRotation = 0;
	let HardwareInfo: ICT_tab_HardwareLibrary | undefined;
	let GraphicInfo: ICT_tab_GraphicLibrary | undefined;
	let GraphicFile: ICT_tab_GraphicFileLibrary | undefined;

	//========================================================================
	// Call user exit for customization
	//========================================================================

	if (m.mod_HandlePosLogic == 'Custom') {

		// Call the user exit
		let retValUe = GlobalFunc.ue_Handle(m);

		// Set the values
		retHandle.Model3D = retValUe.Model3D;
		retHandle.Model3DGroupName = retValUe.Model3DGroupName;
		retHandle.ColorId = retValUe.ColorId;
		retHandle.Length = retValUe.Length;
		retHandle.Depth = retValUe.Depth;
		retHandle.Thickness = retValUe.Thickness;
		retHandle.Weight = retValUe.Weight;
		retHandle.Rotation = retValUe.Rotation;
		retHandle.ProcessingId = retValUe.ProcessingId;
		retHandle.HardwareId = retValUe.HardwareId;
		retHandle.PosVertical = retValUe.PosVertical;
		retHandle.PosHorizontal = retValUe.PosHorizontal;

		// Return the values
		return retHandle;
	}

	//========================================================================
	// Standard Library Solution
	//========================================================================

	else {

		//---------------Find PartGroup from tab_PartSettings-----------------

		let retPartSettings = GlobalFunc.find_PartSettings(m.mod_FrontType, m.mod_PartInfo);
		let PartGroup = retPartSettings.PartGroup;
		let OpeningDirection = retPartSettings.OpeningDirection;

		//---------------Find position in tab_HandleSettings------------------

		let retHandleSetting = GlobalFunc.find_HandleSettings(m.mod_HandlePosType, PartGroup!);

		//---------------Define the column from HandlePosType-----------------

		let PosType = retHandleSetting.HandleOrientation;

		//---------------Calculate handle length------------------------------

		let retHandleConstruction = ct_tab_HandleConstruction.find(p => p.in_FrontType == PartGroup && p.in_PosType == PosType);
		if (retHandleConstruction == undefined) {
			logError('Can not find entry in table tab_HandleConstruction for:' + PartGroup + ' - ' + PosType);
		}
		else {
			HandleRotation = retHandleConstruction.Rotation!;
		}

		if (m.mod_HandleDesign_matrix.HandleLength == 'Attribute') {
			HandleLength = m.mod_HandleLength
		}
		else if (m.mod_HandleDesign_matrix.HandleLength == 'FrontDimension') {
			if (HandleRotation == 0) {
				let retHandleLen = GlobalFunc.find_HandleLengthMapping(m.mod_HandleDesign, m.mod_Width)
				HandleLength = retHandleLen.HandleLength
			}
			else {
				let retHandleLen = GlobalFunc.find_HandleLengthMapping(m.mod_HandleDesign, m.mod_Height)
				HandleLength = retHandleLen.HandleLength
			}
		}

		//---------------Handle mapping----------------------------------------

		let ColRelevant = false;
		let LenRelevant = false;

		if (m.mod_HandleDesign_matrix.HandleLength == 'Fixed') { LenRelevant = false }
		else if (m.mod_HandleDesign_matrix.HandleLength == 'Attribute') { LenRelevant = true }
		else if (m.mod_HandleDesign_matrix.HandleLength == 'FrontDimension') { LenRelevant = true }

		if (m.mod_HandleDesign_matrix.HandleColor == 'Attribute') { ColRelevant = true }
		else if (m.mod_HandleDesign_matrix.HandleColor == 'Fixed') { ColRelevant = false }

		let retHandleMapping = GlobalFunc.find_HandleMapping(m.mod_HandleDesign, m.mod_HandleColor, m.mod_HandlePosType, HandleLength!, LenRelevant, m.mod_HandleDesign_matrix.HandlePosTypeRelevant, ColRelevant);

		//---------------Mapping from tab_ObjectMapping-----------------------

		let retObjectMapping = GlobalFunc.find_ObjectMapping(retHandleMapping.Object!);

		//---------------Find data from tab_GraphicLibraryMapping-------------

		let retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(retObjectMapping.GraphicItem!);

		//---------------Find data from tab_GraphicLibrary--------------------

		if (retGraphicMapping.length > 0) {
			const firstItem = retGraphicMapping[0];
			[GraphicInfo, GraphicFile] = GlobalFunc.process_GraphicLibraryData(firstItem.Model3DGroupName!);

			if (retGraphicMapping.length > 1) {
				logError('There is more than 1 graphic item in the table tab_GraphicLibraryMapping for the handle! This was not expected!');
			}
		}

		//---------------Find data from tab_HardwareLibrary-------------------

		// Filter function to get all the hardware elements for the handle
		let HardwareElements = GlobalFunc.find_HardwareLibraryMapping(retObjectMapping.HardwareItem!);

		// Cycle to add all hardware elements to the BOM
		HardwareElements.forEach(info => {
			let HandleBOMInfo = GlobalFunc.find_HardwareLibrary(info.SupplierArticleNumber!, info.Supplier!);
			if (HandleBOMInfo.Category == 'Handle') {
				HardwareInfo = HandleBOMInfo;
			}
		});

		// Error message if there is no item found in the hardware library
		if (HardwareInfo == undefined) {
			logError('There is no handle found in the hardware library. Make sure that there is an item from category Handle.')
		}

		//---------------Calculate the DrillDistance--------------------------

		let minValue = 9999;
		let maxValue = 0;
		let processings = GlobalFunc.find_ProcessingMapping(retObjectMapping.ProcessingItem!);

		processings.forEach((processing) => {
			let drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Front');
			drills.forEach((drill) => {
				if (drill.XA < minValue) { minValue = drill.XA }
				if (drill.XA > maxValue) { maxValue = drill.XA }
			});
		});

		let DrillDistance = maxValue - minValue;

		//---------------Find sector for the handle---------------------------

		let SectorVert: string;
		let SectorHor: string;

		// Calculate HandleLine and height position of insertion
		let InsertionHeight = m.mod_HeightPosInsertion + m.mod_FrontPosStart;
		let tmpHandleLine = m.mod_HandleLine - InsertionHeight;

		// Via Attribut 
		if (m.mod_HandlePosLogic == 'Matrix') {
			SectorVert = m.mod_HandlePosMatrix_matrix.PosY;
			SectorHor = m.mod_HandlePosMatrix_matrix.PosX;
			tmpHandleLine = m.mod_Height / 2;
		}

		// Via HandleLine
		else if (m.mod_HandlePosLogic == 'HandleLine') {

			//---------------vertical sector

			if (PartGroup == 'Door') {
				if (PosType == 'HandleHorMiddle' || PosType == 'HandleHorMiddleInverse') {
					SectorHor = 'Center'
				}
				else {
					SectorHor = OpeningDirection == 'Left' ? 'Right' : 'Left';
				}
			}
			else {
				SectorHor = 'Center'
			}

			//---------------horizontal sector

			// Exceptions for special PartGroups
			if (PartGroup == 'Drawer' || PartGroup == 'Dishwasher') {
				SectorVert = 'Up';
			}

			else if (PartGroup == 'Fliplift') {
				SectorVert = OpeningDirection == 'Down' ? 'Up' : 'Down';
			}

			// Standard setting the sector based on the handle line
			else {

				// Find handle position Up
				let retHandleUp = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, 'Up', PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!)
				let tmpPosUp = retHandleUp.PosY1(m, retHandleSetting.DistanceY, HardwareInfo!.Length, HardwareInfo!.Thickness, DrillDistance, tmpHandleLine);

				// Find handle position Center
				let retHandleCenter = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, 'Center', PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!)
				let tmpPosCenter = retHandleCenter.PosY1(m, retHandleSetting.DistanceY, HardwareInfo!.Length, HardwareInfo!.Thickness, DrillDistance, tmpHandleLine);

				// Find handle position Down
				let retHandleDown = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, 'Down', PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!)
				let tmpPosDown = retHandleDown.PosY1(m, retHandleSetting.DistanceY, HardwareInfo!.Length, HardwareInfo!.Thickness, DrillDistance, tmpHandleLine);

				// Compare the positions and decide the sector
				if (tmpPosCenter < tmpPosDown) { SectorVert = 'Down'; }
				else if (tmpPosCenter > tmpPosUp) { SectorVert = 'Up'; }
				else { SectorVert = 'Center'; }
			}
		}

		//---------------Find information in tab_HandleConstruction-----------

		let retHandleConstr = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, SectorVert!, PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!);

		//---------------Check if handle length fit to the front dimension----

		HandleLength = GraphicInfo?.DimensionX ?? 0;

		if (HandleRotation == 0 || HandleRotation == 180) {
			if (m.mod_Width <= HandleLength) {
				logError('The handle dimension is bigger than the front dimension!')
			}
		}
		else {
			if (m.mod_Height <= HandleLength) {
				logError('The handle dimension is bigger than the front dimension!')
			}
		}

		//---------------Return information to module-------------------------

		// Set the values
		retHandle.Model3D = GraphicFile?.Model3D;
		retHandle.Model3DGroupName = GraphicInfo?.in_Model3DGroupName ?? '';
		retHandle.ColorId = GraphicInfo?.ColorId ?? '';
		retHandle.Length = GraphicInfo?.DimensionX ?? 0;
		retHandle.Depth = GraphicInfo?.DimensionZ ?? 0;
		retHandle.Thickness = GraphicInfo?.DimensionY ?? 0;
		retHandle.Weight = HardwareInfo?.Weight ?? 0;
		retHandle.Rotation = HandleRotation ?? 0;
		retHandle.ProcessingId = retObjectMapping?.ProcessingItem ?? '';
		retHandle.HardwareId = retObjectMapping?.HardwareItem ?? '';
		retHandle.PosVertical = retHandleConstr?.PosX1?.(
			m,
			retHandleSetting?.DistanceX ?? 0,
			GraphicInfo?.DimensionX ?? 0,
			GraphicInfo?.DimensionY ?? 0,
			DrillDistance,
			tmpHandleLine
		) ?? 0;

		retHandle.PosHorizontal = retHandleConstr?.PosY1?.(
			m,
			retHandleSetting?.DistanceY ?? 0,
			GraphicInfo?.DimensionX ?? 0,
			GraphicInfo?.DimensionY ?? 0,
			DrillDistance,
			tmpHandleLine
		) ?? 0;

		return retHandle;
	}
}



// User Exit for the handle\n//########################################################
static ue_Handle(m: IFuncParents_mc_Handle01) {

  	// Interface for the handle data
	interface HandleData {
		Model3D: any;
		Model3DGroupName: string;
		ColorId: string;
		Length: number,
		Depth: number,
		Thickness: number,
		Weight: number,
		Rotation: number;
		PosVertical: number;
		PosHorizontal: number;
		ProcessingId: string;
		HardwareId: string;
	}

	// Initialize the object
	let retHandle: HandleData = {
		Model3D: undefined,
		Model3DGroupName: "",
		ColorId: "",
		Length: 0,
		Depth: 0,
		Thickness: 0,
		Weight: 0,
		Rotation: 0,
		PosVertical: 0,
		PosHorizontal: 0,
		ProcessingId: "",
		HardwareId: ""
	}

	// Initialize internal variables
	let HandleLength = 0;
	let HandleRotation = 0;
	let HardwareInfo: ICT_tab_HardwareLibrary | undefined;
	let GraphicInfo: ICT_tab_GraphicLibrary | undefined;
  let GraphicFile: ICT_tab_GraphicFileLibrary | undefined;

	//========================================================================
	// User exit for customization
	//========================================================================

  //---------------Find PartGroup from tab_PartSettings-----------------

  let retPartSettings = GlobalFunc.find_PartSettings(m.mod_FrontType, m.mod_PartInfo);
  let PartGroup = retPartSettings.PartGroup;
  let OpeningDirection = retPartSettings.OpeningDirection;

  //---------------Find position in tab_HandleSettings------------------

  let retHandleSetting = GlobalFunc.find_HandleSettings(m.mod_HandlePosType, PartGroup!);

  //---------------Define the column from HandlePosType-----------------

  let PosType = retHandleSetting.HandleOrientation;

  //---------------Calculate handle length------------------------------

  let retHandleConstruction = ct_tab_HandleConstruction.find(p => p.in_FrontType == PartGroup && p.in_PosType == PosType);
  if (retHandleConstruction == undefined) {
    logError('Can not find entry in table tab_HandleConstruction for:' + PartGroup + ' - ' + PosType);
  }
  else { HandleRotation = retHandleConstruction.Rotation!; }

  if (m.mod_HandleDesign_matrix.HandleLength == 'Attribute') {
    HandleLength = m.mod_HandleLength
  }
  else if (m.mod_HandleDesign_matrix.HandleLength == 'FrontDimension') {
    if (HandleRotation == 0) {
      let retHandleLen = GlobalFunc.find_HandleLengthMapping(m.mod_HandleDesign, m.mod_Width)
      HandleLength = retHandleLen.HandleLength
    }
    else {
      let retHandleLen = GlobalFunc.find_HandleLengthMapping(m.mod_HandleDesign, m.mod_Height)
      HandleLength = retHandleLen.HandleLength
    }
  }

  //---------------Handle mapping----------------------------------------

  let ColRelevant = false;
  let LenRelevant = false;

  if (m.mod_HandleDesign_matrix.HandleLength == 'Fixed') { LenRelevant = false }
  else if (m.mod_HandleDesign_matrix.HandleLength == 'Attribute') { LenRelevant = true }
  else if (m.mod_HandleDesign_matrix.HandleLength == 'FrontDimension') { LenRelevant = true }

  if (m.mod_HandleDesign_matrix.HandleColor == 'Attribute') { ColRelevant = true }
  else if (m.mod_HandleDesign_matrix.HandleColor == 'Fixed') { ColRelevant = false }

  let retHandleMapping = GlobalFunc.find_HandleMapping(m.mod_HandleDesign, m.mod_HandleColor, m.mod_HandlePosType, HandleLength!, LenRelevant, m.mod_HandleDesign_matrix.HandlePosTypeRelevant, ColRelevant);

  //---------------Mapping from tab_ObjectMapping-----------------------

  let retObjectMapping = GlobalFunc.find_ObjectMapping(retHandleMapping.Object!);

  //---------------Find data from tab_GraphicLibraryMapping-------------

  let retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(retObjectMapping.GraphicItem!);

  //---------------Find data from tab_GraphicLibrary--------------------

  if (retGraphicMapping.length > 0) {
    const firstItem = retGraphicMapping[0];
    [GraphicInfo, GraphicFile] = GlobalFunc.process_GraphicLibraryData(firstItem.Model3DGroupName!);

    if (retGraphicMapping.length > 1) {
      logError('There is more than 1 graphic item in the table tab_GraphicLibraryMapping for the handle! This was not expected!');
    }
  }

  //---------------Find data from tab_HardwareLibrary-------------------

  // Filter function to get all the hardware elements for the handle
  let HardwareElements = GlobalFunc.find_HardwareLibraryMapping(retObjectMapping.HardwareItem!);

  // Cycle to add all hardware elements to the BOM
  HardwareElements.forEach(info => {
    let HandleBOMInfo = GlobalFunc.find_HardwareLibrary(info.SupplierArticleNumber!, info.Supplier!);
    if (HandleBOMInfo.Category == 'Handle') {
      HardwareInfo = HandleBOMInfo;
    }
  });

  // Error message if there is no item found in the hardware library
  if (HardwareInfo == undefined) {
    logError('There is no handle found in the hardware library. Make sure that there is an item from category Handle.')
  }

  //---------------Calculate the DrillDistance--------------------------

  let minValue = 9999;
  let maxValue = 0;
  let processings = GlobalFunc.find_ProcessingMapping(retObjectMapping.ProcessingItem!);

  processings.forEach((processing) => {
    let drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Front');
    drills.forEach((drill) => {
      if (drill.XA < minValue) { minValue = drill.XA }
      if (drill.XA > maxValue) { maxValue = drill.XA }
    });
  });

  let DrillDistance = maxValue - minValue;

  //---------------Find sector for the handle---------------------------

  let SectorVert: string;
  let SectorHor: string;

  // Calculate HandleLine and height position of insertion
  let InsertionHeight = m.mod_HeightPosInsertion + m.mod_FrontPosStart;
  let tmpHandleLine = m.mod_HandleLine - InsertionHeight;

  // Via Attribut 
  if (m.mod_HandlePosLogic == 'Matrix') {
    SectorVert = m.mod_HandlePosMatrix_matrix.PosY;
    SectorHor = m.mod_HandlePosMatrix_matrix.PosX;
    tmpHandleLine = m.mod_Height / 2;
  }

  // Via HandleLine
  else if (m.mod_HandlePosLogic == 'HandleLine') {

    //---------------vertical sector

    if (PartGroup == 'Door') {
      if (PosType == 'HandleHorMiddle' || PosType == 'HandleHorMiddleInverse') {
        SectorHor = 'Center'
      }
      else {
        SectorHor = OpeningDirection == 'Left' ? 'Right' : 'Left';
      }
    }
    else {
      SectorHor = 'Center'
    }

    //---------------horizontal sector

    // Exceptions for special PartGroups
    if (PartGroup == 'Drawer' || PartGroup == 'Dishwasher') {
      SectorVert = 'Up';
    }

    else if (PartGroup == 'Fliplift') {
      SectorVert = OpeningDirection == 'Down' ? 'Up' : 'Down';
    }

    // Standard setting the sector based on the handle line
    else {

      // Find handle position Up
      let retHandleUp = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, 'Up', PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!)
      let tmpPosUp = retHandleUp.PosY1(m, retHandleSetting.DistanceY, HardwareInfo!.Length, HardwareInfo!.Thickness, DrillDistance, tmpHandleLine);

      // Find handle position Center
      let retHandleCenter = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, 'Center', PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!)
      let tmpPosCenter = retHandleCenter.PosY1(m, retHandleSetting.DistanceY, HardwareInfo!.Length, HardwareInfo!.Thickness, DrillDistance, tmpHandleLine);

      // Find handle position Down
      let retHandleDown = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, 'Down', PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!)
      let tmpPosDown = retHandleDown.PosY1(m, retHandleSetting.DistanceY, HardwareInfo!.Length, HardwareInfo!.Thickness, DrillDistance, tmpHandleLine);

      // Compare the positions and decide the sector
      if (tmpPosCenter < tmpPosDown) { SectorVert = 'Down'; }
      else if (tmpPosCenter > tmpPosUp) { SectorVert = 'Up'; }
      else { SectorVert = 'Center'; }
    }
  }

  //---------------Find information in tab_HandleConstruction-----------

  let retHandleConstr = GlobalFunc.find_HandleConstruction(PartGroup!, SectorHor!, SectorVert!, PosType!, retHandleSetting.ReferencePointX!, retHandleSetting.ReferencePointY!);

  //---------------Check if handle length fit to the front dimension----

  HandleLength = GraphicInfo?.DimensionX ?? 0;

  if (HandleRotation == 0 || HandleRotation == 180) {
    if (m.mod_Width <= HandleLength) {
      logError('The handle dimension is bigger than the front dimension!')
    }
  }
  else {
    if (m.mod_Height <= HandleLength) {
      logError('The handle dimension is bigger than the front dimension!')
    }
  }

  //---------------Return information to the process function-------------------------

  // Set the values
  retHandle.Model3D = GraphicFile?.Model3D;
  retHandle.Model3DGroupName = GraphicInfo?.in_Model3DGroupName ?? '';
  retHandle.ColorId = GraphicInfo?.ColorId ?? '';
  retHandle.Length = GraphicInfo?.DimensionX ?? 0;
  retHandle.Depth = GraphicInfo?.DimensionZ ?? 0;
  retHandle.Thickness = GraphicInfo?.DimensionY ?? 0;
  retHandle.Weight = HardwareInfo?.Weight ?? 0;
  retHandle.Rotation = HandleRotation ?? 0;
  retHandle.ProcessingId = retObjectMapping?.ProcessingItem ?? '';
  retHandle.HardwareId = retObjectMapping?.HardwareItem ?? '';
  retHandle.PosVertical = retHandleConstr?.PosX1?.(
    m,
    retHandleSetting?.DistanceX ?? 0,
    GraphicInfo?.DimensionX ?? 0,
    GraphicInfo?.DimensionY ?? 0,
    DrillDistance,
    tmpHandleLine
  ) ?? 0;

  retHandle.PosHorizontal = retHandleConstr?.PosY1?.(
    m,
    retHandleSetting?.DistanceY ?? 0,
    GraphicInfo?.DimensionX ?? 0,
    GraphicInfo?.DimensionY ?? 0,
    DrillDistance,
    tmpHandleLine
  ) ?? 0;

  return retHandle;
}


// Find PushToOpenSettings\n//########################################################
static find_PushtoopenSettings(TypeElement:string, FrontType: string, FrontDesign:string, FrontOpeningDirection:string, PushToOpenLine:string, PushToOpenPosition:string, PushToOpenType:string):ICT_tab_PushtoopenSettings[]{
  // Wildcard parameters
	let WildcardParams: any = {	
		in_TypeElement: TypeElement,
		in_FrontDesign: FrontDesign,
		in_FrontOpeningDirection: FrontOpeningDirection,
		in_PushToOpenLine: PushToOpenLine
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_FrontType: FrontType,
		in_PushToOpenPosition: PushToOpenPosition,
		in_PushToOpenType: PushToOpenType,
	};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=false;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_PushtoopenSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = ' TypeElement: ' + TypeElement + ' / FrontDesign: ' + FrontDesign + ' / FrontType: ' + FrontType + ' / FrontOpeningDirection: ' + FrontOpeningDirection + ' / PushToOpenLine: ' + PushToOpenLine + ' / PushToOpenPosition: ' + PushToOpenPosition + ' / PushToOpenType: ' + PushToOpenType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14020', 1)
		logError(ErrorMessage.Message(Text));
	}
	return retVal;

}



// Find PushToOpenMapping\n//########################################################
static find_PushtoopenMapping(Position:string, Type:string, PartThk:number, FrontOverlay:number, Weight:number, Color:string):ICT_tab_PushtoopenMapping{

  ////// NOTE: /////
  // This function does not have error message, because where it is being used we are controlling if the result is empty

  // First try with all inputs
  let retEntry = ct_tab_PushtoopenMapping.find(p => p.in_Position == Position && p.in_Type == Type && p.in_PartThkMin! < PartThk && p.in_PartThkMax! >= PartThk && p.in_FrontOverlayMin! <= FrontOverlay && p.in_WeightMin! <= Weight && p.in_WeightMax! >= Weight && p.in_Color == Color);

  // If we got no result, then try with Wildcard All in Color
  if (retEntry == undefined) {
    retEntry = ct_tab_PushtoopenMapping.find(p => p.in_Position == Position && p.in_Type == Type  && p.in_PartThkMin! < PartThk && p.in_PartThkMax! >= PartThk && p.in_FrontOverlayMin! <= FrontOverlay && p.in_WeightMin! <= Weight && p.in_WeightMax! >= Weight && p.in_Color == 'All');
  }

  return retEntry!;
  
} 


// Find Edge Class Settings\n//########################################################
static find_EdgeClassSettings(EdgeType:string):ICT_tab_EdgeClassSettings{
	let retEntry = ct_tab_EdgeClassSettings.find(p=> p.in_EdgeType == EdgeType)!;
	if (retEntry == undefined) {
		let Text = 'EdgeType: ' + EdgeType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14002',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Edge joint mapping\n//########################################################
static find_EdgeJointMapping(EdgeJointType:string):ICT_tab_EdgeJointMapping{
	let retEntry = ct_tab_EdgeJointMapping.find(p=> p.in_EdgeJointType == EdgeJointType)!;
	if (retEntry == undefined) {
		let Text = 'EdgeJointType: ' + EdgeJointType;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13018',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Process Push To Open\n//########################################################
static process_Pushtoopen(m: IFuncParents_mc_Door01_mc_Fliplift01, FrontPositionY: number, FrontHeight: number, iFrontOverlay: any, FrontOpeningDirection: string, FrontType: string) {

	//====================================================================
	// Initialize variables
	//====================================================================
	interface iPushToOpenInfo {
		Part?: string;
		PositionHeight?: string;
		PositionWidth?: string;
		Type?: string;
		CarcaseHardwareItem?: string;
		CarcaseProcessingItem?: string;
		CarcaseGraphic?: string;
		PartThk?: number;
		Offset?: number;
		PosThk?: number;
		MinFrontGapCarcase?: number;
	}

	let PushToOpenInfo: iPushToOpenInfo = {
		Part: undefined,
		PositionHeight: undefined,
		PositionWidth: undefined,
		Type: undefined,
		CarcaseHardwareItem: undefined,
		CarcaseProcessingItem: undefined,
		CarcaseGraphic: undefined,
		PartThk: undefined,
		Offset: undefined,
		PosThk: undefined,
		MinFrontGapCarcase: undefined
	};

	//====================================================================
	// Calculate Front Position in relation to PushToOpenLine
	//====================================================================
	let positionPushToOpenLine: string = '';
	let distance_pushToOpenLine_Top: number = 0;
	let distance_pushToOpenLine_Btm: number = 0;
	if (FrontPositionY > m.mod_PushtoopenLine) {
		positionPushToOpenLine = 'Above';
	}
	else if (FrontPositionY + FrontHeight < m.mod_PushtoopenLine) {
		positionPushToOpenLine = 'Bellow';
	}
	else {
		positionPushToOpenLine = 'AtTheLine';
		distance_pushToOpenLine_Top = FrontPositionY + FrontHeight - m.mod_PushtoopenLine;
		distance_pushToOpenLine_Btm = m.mod_PushtoopenLine - FrontPositionY;
	}

	//====================================================================
	// find Push To Open Settings
	//====================================================================

	let retPushToOpenSettings = GlobalFunc.find_PushtoopenSettings(m.mod_TypeElement, FrontType, m.mod_FrontDesign, FrontOpeningDirection, positionPushToOpenLine, m.mod_PushtoopenPosition, m.mod_PushtoopenType).sort (x => x.Priority);

	//====================================================================
	// find Push To Open Mapping
	//====================================================================

	//---------------Cycle through all results and break when a result is valid-----------------
	for (let s of retPushToOpenSettings) {
		let position: string = '';
		let frontOverlay: number = 999999999;
		let partThk: number = 999999999;
		let part: string = '';

		if (s.Position == 'Top') {
			frontOverlay = iFrontOverlay.Top;
			partThk = iFrontOverlay.TopThk;
			position = 'Top';
			part = 'Top';
		}
		else if (s.Position == 'Bottom') {
			frontOverlay = iFrontOverlay.Bottom;
			partThk = iFrontOverlay.BottomThk;
			position = 'Bottom';
			part = 'Bottom';
		}
		else if (s.Position == 'Side' && FrontOpeningDirection == 'Left') {
			frontOverlay = iFrontOverlay.Right;
			partThk = iFrontOverlay.RightThk;
			position = 'Side';
			part = 'Right';
		}
		else if (s.Position == 'Side' && FrontOpeningDirection == 'Right') {
			frontOverlay = iFrontOverlay.Left;
			partThk = iFrontOverlay.LeftThk;
			position = 'Side';
			part = 'Left';
		}
		else if (s.Position == 'ClosestTopBottom' && distance_pushToOpenLine_Top <= distance_pushToOpenLine_Btm) {
			frontOverlay = iFrontOverlay.Top;
			partThk = iFrontOverlay.TopThk;
			position = 'Top';
			part = 'Top';
		}
		else if (s.Position == 'ClosestTopBottom' && distance_pushToOpenLine_Top > distance_pushToOpenLine_Btm) {
			frontOverlay = iFrontOverlay.Bottom;
			partThk = iFrontOverlay.BottomThk;
			position = 'Bottom';
			part = 'Bottom';
		}
	
		//---------------Find PushToOpen Mapping-----------------
		let retPushToOpenMapping = GlobalFunc.find_PushtoopenMapping(position, s.Type!, partThk, frontOverlay, 1, m.mod_PushtoopenColor);  // Weight Pending

		//---------------If PushToOpen Mapping is valid then break and return PushToOpenInfo-----------------
		if (retPushToOpenMapping != undefined) {

			let ptoCarcaseHardwareInfo = GlobalFunc.calc_HardwareObjectInfo(retPushToOpenMapping.ObjectCarcase!);

			//---------------Calculate position in width where the PushToOpen will be applied-----------------
			let positionWidth: string = "";
			if (FrontOpeningDirection == 'Left') {
				positionWidth = 'Right';
			}
			else if (FrontOpeningDirection == 'Right') {
				positionWidth = 'Left';
			}
			else
			{
				positionWidth = 'Center';
			}

			//---------------Calculate position in height where the PushToOpen will be applied-----------------
			let positionHeight: string = "";
			if (positionPushToOpenLine == 'Above'){
				positionHeight = "Bottom";
			}
			else if (positionPushToOpenLine == 'Bellow'){
				positionHeight = "Top";
			}
			else {
				positionHeight = "AtTheLine";
			}
			
			//---------------Calculate Position in thickness (in the part where the PushToOpen will be applied)-----------------
			let posThk: number = 0;
			if (s.Type == "DrilledCenter") {
				posThk = partThk / 2;
			}
			else if (s.Type == "DrilledAdjustable") {
				posThk = retPushToOpenMapping.DrillAdjustablePosThk!;
			}
			else {
				posThk = 0;
			}

			PushToOpenInfo.Part = part; // In which part should the PushToOpen be applied
			PushToOpenInfo.PositionHeight = positionHeight; // In which position in height should the PushToOpen be applied
			PushToOpenInfo.PositionWidth = positionWidth; // In which position in width should the PushToOpen be applied
			PushToOpenInfo.Type = s.Type; // Which type of PushToOpen to use (DrilledCenter / DrilledAdjustable / WithAdapterHousing)
			PushToOpenInfo.CarcaseHardwareItem = ptoCarcaseHardwareInfo.HardwareItem!; //Hardware Item of the PushToOpen
			PushToOpenInfo.CarcaseProcessingItem = ptoCarcaseHardwareInfo.ProcessingItem!; //Processing Item of the PushToOpen
			PushToOpenInfo.CarcaseGraphic = ptoCarcaseHardwareInfo.Graphics!; // Graphic data (from table GraphicLibrary) of the PushToOpen
			PushToOpenInfo.PartThk = partThk; // Part thickness (part where the PushToOpen will be applied)
			PushToOpenInfo.Offset = s.Offset! + m.mod_PushtoopenOffset; // Offset (in the part where the PushToOpen will be applied)
			PushToOpenInfo.PosThk = posThk; // Position in thickness (in the part where the PushToOpen will be applied)
			PushToOpenInfo.MinFrontGapCarcase = retPushToOpenMapping.MinFrontGapCarcase; // Minimum FrontGapCarcase allowed for the selected PushToOpen

			break;
		}
	}
return PushToOpenInfo

}



// Calculation of Front Overlay (in any direction)\n//#######################################################
static calc_FrontOverlay(m: any /* WARNING: No parent found; assuming 'any' */, Width: number, Height: number, WidthPos:number, HeightPos: number, FrontOrientation: string) {

	//====================================================================
	// Initialize variables
	//====================================================================
interface IFrontOverlay {
		Bottom?: number;
		BottomThk?: number;
		Left?: number;
		LeftThk?: number;
		Top?: number;
		TopThk?: number;
		Right?: number;
		RightThk?: number;
	}

	let FrontOverlay: IFrontOverlay = {
		Bottom: undefined,
		BottomThk: undefined,
		Left: undefined,
		LeftThk: undefined,
		Top: undefined,
		TopThk: undefined,
		Right: undefined,
		RightThk: undefined
	};

	// Get the Information of the Carcase Parts Info
	let carcasePartInfo = JSON.parse(m.mod_CarcasePartInfo[0]);
	
	//====================================================================
	// Calculate FrontOverlay
	//====================================================================

	if (carcasePartInfo.VerticalPartsType[0] != 'NoVertDivider' && carcasePartInfo.VerticalPartsType[0] != 'Cleat'){ //Left
		if (FrontOrientation == 'FromFront') {
			FrontOverlay.Left = carcasePartInfo.VerticalPartsPosX[0] + carcasePartInfo.VerticalPartsDimX[0] - WidthPos;
			FrontOverlay.LeftThk = carcasePartInfo.VerticalPartsDimX[0];
		}
		else if (FrontOrientation == 'FromRight') {
			FrontOverlay.Left = WidthPos + Width - carcasePartInfo.VerticalPartsPosZ[0];
			FrontOverlay.LeftThk = carcasePartInfo.VerticalPartsDimX[0];
		}
	}
	if (carcasePartInfo.VerticalPartsType[1] != 'NoVertDivider' && carcasePartInfo.VerticalPartsType[1] != 'Cleat'){ //Right
		if (FrontOrientation == 'FromFront') {
			FrontOverlay.Right = WidthPos + Width - carcasePartInfo.VerticalPartsPosX[1];
			FrontOverlay.RightThk = carcasePartInfo.VerticalPartsDimX[1];
		}
		else if (FrontOrientation == 'FromRight') {
			FrontOverlay.Right = carcasePartInfo.VerticalPartsPosZ[1] + carcasePartInfo.VerticalPartsDimX[1] - WidthPos;
			FrontOverlay.RightThk = carcasePartInfo.VerticalPartsDimX[1];
		}
	}
	if (carcasePartInfo.HorizontalPartsType[1] != 'NoFixedShelf') { //Top
		FrontOverlay.Top = HeightPos + Height - carcasePartInfo.HorizontalPartsPosY[1];
		FrontOverlay.TopThk = carcasePartInfo.HorizontalPartsDimY[1];
	}
	if (carcasePartInfo.HorizontalPartsType[0] != 'NoFixedShelf') { //Bottom
		FrontOverlay.Bottom = carcasePartInfo.HorizontalPartsPosY[0] + carcasePartInfo.HorizontalPartsDimY[0] - HeightPos;
		FrontOverlay.BottomThk = carcasePartInfo.HorizontalPartsDimY[0];
	}
	
	return FrontOverlay;
}


// Get Hardware Object Info\n//########################################################
static calc_HardwareObjectInfo(Object:string):any
  {

    //========================================================================
	  // Helper Function to retrieve the hardware data
	  //========================================================================
    
		//---------------Get data from table ObjectMapping---------------------------
		let objMapping = GlobalFunc.find_ObjectMapping(Object!);
		
		///////////////// GraphicLibrary //////////
		//---------------Get data from table GraphicLibraryMapping---------------------------
		let hardGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(objMapping.GraphicItem!);

		//---------------Get data from table GraphicLibrary---------------------------
		let graphicItem: any[]=[];
		let i: number=0;
		hardGraphicMapping.forEach(hgm=>
			{
				i++;
				if(i>1)
				{
					logError('ERROR - ONLY ONE GRAPHIC IS EXPECTED');
				}
				else
				{
					let tempvar = GlobalFunc.find_GraphicLibrary(hgm.Model3DGroupName!);
					graphicItem.push(tempvar);
				}
			});
		
		///////////////// OutputData //////////
		//---------------Initialize variable---------------------------
		let HardwareDetails: any = {};
		
		//---------------Assign data to variable---------------------------
		HardwareDetails.HardwareItem=objMapping.HardwareItem!;
		HardwareDetails.ProcessingItem=objMapping.ProcessingItem!;
		HardwareDetails.Graphics=graphicItem[0];
		
		//---------------Output variable with data---------------------------
		return HardwareDetails;

	}


// PushToOpen Drills\n//########################################################
static ops_PushtoopenDrill(Part: string, elem: any, partSelf: any, part2: any, posRel: any) {


  try {
    //====================================================================
    // Variables Initialization and common processes
    //====================================================================
    let drills: any[] = [];
    //---------------Get all the processings for the ProcessingId-----------------
    let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);

    //---------------Use the GraphicInsertionHelper function to get the correct position-----------------
    let insertPoint = GlobalFunc.process_GraphicInsertionHelper('112', part2.pa_Model3DGroupName, part2._dimx, part2._dimy, part2._dimz)


    //====================================================================
    // Drills for the Front
    //====================================================================

    if (Part == 'Front') {

      //---------------For each processing-----------------
      processings.forEach((processing) => {

        //---------------If it's a vertical drill-----------------
        if (processing.ProcessingLibrary == 'DrillVertical') {

          //---------------Get all the drills from the HardwareDrillVertLibrary-----------------
          drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, Part);

          //---------------For each drilling (insert the drillings)-----------------
          drills.forEach((drill) => {

            //Adjust position of drill based on rotation
            let drawingDrillPosx: number = 0;
            let drawingDrillPosy: number = 0;
            const configMap = new Map([
              [0, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA
              }],
              [90, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA
              }],
              [180, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA
              }],
              [270, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA
              }]
            ]);
            const config = configMap.get(part2.pa_Rotation ?? 0);
            if (config) {
              drawingDrillPosx = config.drawingDrillPosx;
              drawingDrillPosy = config.drawingDrillPosy;

            }
            else {
              //logError(GlobalFunc.find_ErrorList('Error 22006', 1).Message('Position not found!'));
              throw new Error('Position not found!');
            }

            // Add Vertical Drill
            let DrillVert = elem.addncout_DrillVert();
            DrillVert.nc_TOOL = "102";
            DrillVert.nc_XA = drawingDrillPosx;
            DrillVert.nc_YA = partSelf._dimy - drawingDrillPosy;
            DrillVert.nc_TI = drill.TI;
            DrillVert.nc_DU = drill.DU;

            DrillVert.nc_BM = drill.matrix_BM || "LS"
            DrillVert.nc_WI = drill.matrix_WI ?? 0;
            DrillVert.nc_AB = drill.matrix_AB ?? 1;
            DrillVert.nc_LA = drill.matrix_LA ?? 0;
            DrillVert.nc_MI = drill.matrix_MI ?? 0;
            DrillVert.nc_KO = drill.matrix_KO || "00";
            DrillVert.nc_Side = "Top";

            // Add drawing
            let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, drawingDrillPosx, drawingDrillPosy, 0, drill.DU, drill.DU, drill.TI);
            drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drill.DU / 2 + '" /></svg>', 'z');
          });
        }
      });
    }

    //====================================================================
    // Drills for the SidePanelLeft, SidePanelRight, ShelfTop, ShelfBtm (All are referenced as Carcase in the table)
    //====================================================================

    else if (Part == 'Carcase') {

      //---------------For each processing-----------------
      processings.forEach((processing) => {

        //---------------If it's an horizontal drill-----------------
        if (processing.ProcessingLibrary == 'DrillHorizontal') {

          //---------------Get all the drills from the HardwareDrillHorLibrary-----------------
          drills = GlobalFunc.find_HardwareDrillHorLibrary(processing.ProcessingId!, Part);

          //---------------For each drilling (insert the drillings)-----------------
          drills.forEach((drill) => {

            //Adjust position of drill based on rotation
            let drawingDrillPosx: number = 0;
            let drawingDrillPosy: number = 0;
            let nc_XA: number = 0;
            let nc_YA: number = 0;
            let nc_ZA: number = 0;
            let nc_BM: string = '';
            const configMap = new Map([
              [0, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA,
                nc_XA: posRel.x - insertPoint.InsertionPointX - drill.XA,
                nc_YA: 0,
                nc_ZA: posRel.y - insertPoint.InsertionPointY - drill.YA,
                nc_BM: 'YP'
              }],
              [90, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA,
                nc_XA: part2._dimy + posRel.y + insertPoint.InsertionPointY + drill.YA,
                nc_YA: 0,
                nc_ZA: partSelf._dimx - (posRel.x - insertPoint.InsertionPointX - drill.XA),
                nc_BM: 'YP'
              }],
              [180, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA,
                nc_XA: posRel.x - insertPoint.InsertionPointX - drill.XA,
                nc_YA: partSelf._dimz,
                nc_ZA: partSelf._dimy - (posRel.y - insertPoint.InsertionPointY - drill.YA),
                nc_BM: 'YM'
              }],
              [270, {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY - drill.YA,
                nc_XA: partSelf._dimy - part2._dimy - posRel.y - insertPoint.InsertionPointY - drill.YA,
                nc_YA: 0,
                nc_ZA: posRel.x - insertPoint.InsertionPointX - drill.XA,
                nc_BM: 'YP'
              }]
            ]);
            const config = configMap.get(part2.pa_Rotation ?? 0);
            if (config) {
              drawingDrillPosx = config.drawingDrillPosx;
              drawingDrillPosy = config.drawingDrillPosy;
              nc_XA = config.nc_XA;
              nc_YA = config.nc_YA;
              nc_ZA = config.nc_ZA;
              nc_BM = config.nc_BM;
            }
            else {
              //logError(GlobalFunc.find_ErrorList('Error 22006', 1).Message('Position not found!'));
              throw new Error('Position not found!');
            }


            // Add Vertical Drill
            let DrillHor = elem.addncout_DrillHor();
            DrillHor.nc_TOOL = "103";
            DrillHor.nc_XA = nc_XA;
            DrillHor.nc_YA = nc_YA;
            DrillHor.nc_ZA = nc_ZA;
            DrillHor.nc_BM = nc_BM;
            DrillHor.nc_TI = drill.TI;
            DrillHor.nc_DU = drill.DU;
            DrillHor.nc_KO = drill.matrix_KO || "00"

            // Add drawing
            let drilling01 = partSelf.add3DElement('Drilling01', DrillHor, drawingDrillPosx, drawingDrillPosy, posRel.z - drill.TI, drill.DU, drill.DU, drill.TI);
            drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drill.DU / 2 + '" /></svg>', 'z');
          });
        }


        //---------------If it's a vertical drill-----------------
        if (processing.ProcessingLibrary == 'DrillVertical') {

          //---------------Get all the drills from the HardwareDrillVertLibrary-----------------
          drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, Part);

          //---------------For each drilling (insert the drillings)-----------------
          drills.forEach((drill) => {

            //Adjust position of drill based on rotation
            let drawingDrillPosx: number = 0;
            let drawingDrillPosy: number = 0;
            let drawingDrillPosz: number = 0;
            let drawingDrillDirection: string = '';
            let drawingDrillDimx: number = 0;
            let drawingDrillDimy: number = 0;
            let drawingDrillDimz: number = 0;
            let nc_XA: number = 0;
            let nc_YA: number = 0;
            const configMap = new Map([
              ["FromTop", {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: partSelf._dimy - drill.TI,
                drawingDrillPosz: partSelf._dimz - drill.YA,
                drawingDrillDirection: 'y',
                drawingDrillDimx: drill.DU,
                drawingDrillDimy: drill.TI,
                drawingDrillDimz: drill.DU,
                nc_XA: posRel.x - insertPoint.InsertionPointX - drill.XA,
                nc_YA: drill.YA
              }],
              ["FromBottom", {
                drawingDrillPosx: posRel.x - insertPoint.InsertionPointX - drill.XA,
                drawingDrillPosy: 0,
                drawingDrillPosz: partSelf._dimz - drill.YA,
                drawingDrillDirection: 'y',
                drawingDrillDimx: drill.DU,
                drawingDrillDimy: drill.TI,
                drawingDrillDimz: drill.DU,
                nc_XA: posRel.x - insertPoint.InsertionPointX - drill.XA,
                nc_YA: partSelf._dimz - drill.YA
              }],
              ["FromRight", {
                drawingDrillPosx: partSelf._dimx - drill.TI,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY + drill.XA,
                drawingDrillPosz: partSelf._dimz - drill.YA,
                drawingDrillDirection: 'x',
                drawingDrillDimx: drill.TI,
                drawingDrillDimy: drill.DU,
                drawingDrillDimz: drill.DU,
                nc_XA: partSelf._dimy - (posRel.y - insertPoint.InsertionPointY + drill.XA),
                nc_YA: drill.YA
              }],
              ["FromLeft", {
                drawingDrillPosx: 0,
                drawingDrillPosy: posRel.y - insertPoint.InsertionPointY + drill.XA,
                drawingDrillPosz: partSelf._dimz - drill.YA,
                drawingDrillDirection: 'x',
                drawingDrillDimx: drill.TI,
                drawingDrillDimy: drill.DU,
                drawingDrillDimz: drill.DU,
                nc_XA: posRel.y - insertPoint.InsertionPointY + drill.XA,
                nc_YA: drill.YA
              }]
            ]);
            const config = configMap.get(elem._touchOrigin ?? '');
            if (config) {
              drawingDrillPosx = config.drawingDrillPosx;
              drawingDrillPosy = config.drawingDrillPosy;
              drawingDrillPosz = config.drawingDrillPosz;
              drawingDrillDirection = config.drawingDrillDirection;
              drawingDrillDimx = config.drawingDrillDimx;
              drawingDrillDimy = config.drawingDrillDimy;
              drawingDrillDimz = config.drawingDrillDimz;
              nc_XA = config.nc_XA;
              nc_YA = config.nc_YA;
            }
            else {
              //logError(GlobalFunc.find_ErrorList('Error 22006', 1).Message('Position not found!'));
              throw new Error('Position not found!');
            }

            if (part2.pa_Rotation == 0 && elem._touchOrigin == "FromTop" ||
              part2.pa_Rotation == 90 && elem._touchOrigin == "FromLeft" ||
              part2.pa_Rotation == 180 && elem._touchOrigin == "FromBottom" ||
              part2.pa_Rotation == 270 && elem._touchOrigin == "FromRight") {

              // Add Vertical Drill
              let DrillVert = elem.addncout_DrillVert();
              DrillVert.nc_TOOL = "102";
              DrillVert.nc_XA = nc_XA
              DrillVert.nc_YA = nc_YA;
              DrillVert.nc_TI = drill.TI;
              DrillVert.nc_DU = drill.DU;
              DrillVert.nc_BM = drill.matrix_BM || "LS"
              DrillVert.nc_WI = drill.matrix_WI ?? 0;
              DrillVert.nc_AB = drill.matrix_AB ?? 1;
              DrillVert.nc_LA = drill.matrix_LA ?? 0;
              DrillVert.nc_MI = drill.matrix_MI ?? 0;
              DrillVert.nc_KO = drill.matrix_KO || "00";
              DrillVert.nc_Side = "Top";

              // Add drawing
              let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, drawingDrillPosx, drawingDrillPosy, drawingDrillPosz, drawingDrillDimx, drawingDrillDimy, drawingDrillDimz);
              drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drill.DU / 2 + '" /></svg>', drawingDrillDirection);
            }
          });
        }

      });
    }
  }
  catch (error: any) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 22006', 1);
    logError(ErrorMessage.Message(error.message));
    return;
  }
}


// Add materials to the parts\n//########################################################
static process_AddMaterial(
  part: any,
  category: string = 'None',
  mainColor: string = 'None',
  outsideColor: string = 'None',
  mainEdgeColor: string = 'None',
  frontEdgeColor: string = 'None',
  insideDirection: string = 'None',
  secondColor: boolean = false,
  shape: boolean = false,
  typeElement: string = 'All',
  programGrainGroup: string = 'Neutral',
  colorGrainGroup: string = 'NoGrain'
) {

  // Type definition
  type grain = 'Lengthwise' | 'Crosswise' | 'None';

  try {
    // Get the material ID
    //---------------------------------------------------------------------

    const MainMaterialId = GlobalFunc.find_MaterialMapping(mainColor)?.MaterialId ?? 'None';
    let OutsideMaterialId = MainMaterialId;
    let EdgeMaterialId = MainMaterialId;
    let FrontEdgeMaterialId = MainMaterialId;

    if (mainEdgeColor != 'None') {
      EdgeMaterialId = GlobalFunc.find_MaterialMapping(mainEdgeColor)?.MaterialId ?? 'None';
    }
    if (frontEdgeColor != 'None') {
      FrontEdgeMaterialId = GlobalFunc.find_MaterialMapping(frontEdgeColor)?.MaterialId ?? 'None';
    }
    if (secondColor) {
      OutsideMaterialId = GlobalFunc.find_MaterialMapping(outsideColor)?.MaterialId ?? 'None';
    }

    // Get the grain direction
    //---------------------------------------------------------------------
       
    const GrainDirection: grain = getGrainDirection(part, typeElement, programGrainGroup, colorGrainGroup);

    // sidepanels
    //---------------------------------------------------------------------

    if (category == 'sidepanel') {

      // Define the rotation of the texture
      let insideRotation = 90;
      if (GrainDirection == 'Crosswise') {
        insideRotation = 0;
      }

      if (insideDirection == 'right') {
        if (shape) {
          const edgeColor = (MainMaterialId === OutsideMaterialId) ? EdgeMaterialId : FrontEdgeMaterialId;
          addShapeColors(MainMaterialId, OutsideMaterialId, edgeColor, category);
        }
        else {
          addAllColors(OutsideMaterialId, 90, MainMaterialId, insideRotation, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90)
        }
      }
      else if (insideDirection == 'left') {
        if (shape) {
          const edgeColor = (MainMaterialId === OutsideMaterialId) ? EdgeMaterialId : FrontEdgeMaterialId;
          addShapeColors(OutsideMaterialId, MainMaterialId, edgeColor, category)
        }
        else {
          addAllColors(MainMaterialId, insideRotation, OutsideMaterialId, 90, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90)
        }
      }
      else {
        if (shape) {
          const edgeColor = (MainMaterialId === OutsideMaterialId) ? EdgeMaterialId : FrontEdgeMaterialId;
          addShapeColors(MainMaterialId, MainMaterialId, edgeColor, category)
        }
        else {
          addAllColors(MainMaterialId, 90, MainMaterialId, 90, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90)
        }
      }
    }

    // shelves
    //---------------------------------------------------------------------

    else if (category == 'shelf') {
      if (shape) {
        addDefaultColor(MainMaterialId);
      }
      else if (insideDirection == 'none') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 0, EdgeMaterialId, 0, MainMaterialId, 0, MainMaterialId, 0);
      }
      else if (insideDirection == 'top') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, FrontEdgeMaterialId, 0, EdgeMaterialId, 0, MainMaterialId, 0, OutsideMaterialId, 0)
      }
      else if (insideDirection == 'bottom') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, FrontEdgeMaterialId, 0, EdgeMaterialId, 0, OutsideMaterialId, 0, MainMaterialId, 0)
      }
      else {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, FrontEdgeMaterialId, 0, EdgeMaterialId, 0, MainMaterialId, 0, MainMaterialId, 0)
      }
    }

    // backwalls
    //---------------------------------------------------------------------

    if (category == 'backwall') {
      if (shape) {
        addDefaultColor(MainMaterialId);
      }
      else {
        addAllColors(EdgeMaterialId, 0, EdgeMaterialId, 0, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, 0, OutsideMaterialId, 0)
      }
    }

    // front panels
    //---------------------------------------------------------------------

    else if (category == 'front') {
      addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, 90, MainMaterialId, 90, EdgeMaterialId, 0, EdgeMaterialId, 0)
    }
    else if (category == 'frameFrontVert') {
      if (shape) {
        addShapeColors(MainMaterialId, MainMaterialId, MainMaterialId, category)
      }
      else {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, 90, MainMaterialId, 90, EdgeMaterialId, 0, EdgeMaterialId, 0)
      }
    }
    else if (category == 'frameFrontHor') {
      if (shape) {
        addShapeColors(MainMaterialId, MainMaterialId, MainMaterialId, category)
      }
      else {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, 0, MainMaterialId, 0, EdgeMaterialId, 0, EdgeMaterialId, 0)
      }
    }

    // fingergrips
    //---------------------------------------------------------------------

    else if (category == 'fingergrip') {
      addShapeColors(MainMaterialId, MainMaterialId, MainMaterialId, category)
    }

    // All the others
    //---------------------------------------------------------------------

    else {
      addDefaultColor(MainMaterialId);
    }
  }

  // Error handling
  //---------------------------------------------------------------------
  catch (error: any) {
    logError("Can not create the materials and show it for part: " + category);
  }

  //=====================================================================
  // Functions to add the materials
  //=====================================================================

  // We got all the colors on each side
  //---------------------------------------------------------------------

  function addAllColors(left: string, rotLeft: number, right: string, rotRight: number, front: string, rotFront: number, back: string, rotBack: number, top: string, rotTop: number, bottom: string, rotBot: number) {
    part.addFaceMaterial(left, FaceKey.Left, rotLeft, 0, 0, 1, 1);
    part.addFaceMaterial(right, FaceKey.Right, rotRight, 0, 0, 1, 1);
    part.addFaceMaterial(front, FaceKey.Front, rotFront, 0, 0, 1, 1);
    part.addFaceMaterial(back, FaceKey.Back, rotBack, 0, 0, 1, 1);
    part.addFaceMaterial(top, FaceKey.Top, rotTop, 0, 0, 1, 1);
    part.addFaceMaterial(bottom, FaceKey.Bottom, rotBot, 0, 0, 1, 1);
  }

  // Add material to shape parts
  //---------------------------------------------------------------------

  function addShapeColors(color1: string, color2: string, side: string, category: string) {
    if (category == 'sidepanel') {
      part.addFaceMaterial(color1, FaceKey.Top, 90, 0, 0, 1, 1);
      part.addFaceMaterial(color2, FaceKey.Bottom, 90, 0, 0, 1, 1);
      part.addFaceMaterial(side, FaceKey.Side, 0, 0, 0, 1, 1);
    }
    else if (category == 'fingergrip') {
      part.addFaceMaterial(color1, FaceKey.Top, 0, 0, 0, 1, 1);
      part.addFaceMaterial(color2, FaceKey.Bottom, 0, 0, 0, 1, 1);
      part.addFaceMaterial(side, FaceKey.Side, 90, 0, 0, 1, 1);
    }
    else if (category == 'frameFrontVert') {
      part.addFaceMaterial(color1, FaceKey.Top, 90, 0, 0, 1, 1);
      part.addFaceMaterial(color2, FaceKey.Bottom, 90, 0, 0, 1, 1);
      part.addFaceMaterial(side, FaceKey.Side, 0, 0, 0, 1, 1);
    }
    else if (category == 'frameFrontHor') {
      part.addFaceMaterial(side, FaceKey.Top, 0, 0, 0, 1, 1);
      part.addFaceMaterial(side, FaceKey.Bottom, 0, 0, 0, 1, 1);
      part.addFaceMaterial(side, FaceKey.Side, 0, 0, 0, 1, 1);
    }
  }

  // Add material default only one color
  //---------------------------------------------------------------------

  function addDefaultColor(color: string) {
    part.addFaceMaterial(color, FaceKey.Default, 0, 0, 0, 1, 1)
  }

  //=====================================================================
  // Get the grain direction
  //=====================================================================

  // Get the grain direction
  function getGrainDirection(Part: any, TypeElement: string, ProgramGrainGroup: string, ColorGrainGroup: string): grain {

    // Get the BomArticleGroup
    const PartSettings = GlobalFunc.find_PartSettings(Part._partId, Part.pa_AdditionalInfo1, false);
    const bomArticleGroup = PartSettings?.BomArticleGroup ?? 'None';

    // BomArticleGroup which is using the table GrainDirectionSettings
    const validGroups = ['Carcase', 'Toekick', 'Countertop'];

    // Get the grain direction candidate
    let GrainDirectionCandidate: any = 'None';
    if (validGroups.includes(bomArticleGroup)) {
      const GrainDirectionSettings = GlobalFunc.find_GrainDirectionSettings(Part._partId, TypeElement, ProgramGrainGroup, ColorGrainGroup, Part._width, Part._depth);
      GrainDirectionCandidate = Part.pa_GrainLogic === 'Library' ? GrainDirectionSettings?.GrainDirection : 'None';
    }
    else if (bomArticleGroup == 'Fitting'){
      GrainDirectionCandidate = 'None';
    }
    else {
      GrainDirectionCandidate = 'None';
    }

    // Check, we must have a valid grain direction
    if (isValidGrain(GrainDirectionCandidate)) {
      return GrainDirectionCandidate;
    }
    else {
      logError(`Invalid grain direction "${GrainDirectionCandidate}" found for part ${Part._partId}`);
      return 'None';
    }
  }

  // Check if grain direction is valid
  function isValidGrain(value: any): value is grain {
    return ['Lengthwise', 'Crosswise', 'None'].includes(value);
  }

  
} 


// Return value from fliplift color mapping\n//########################################################
static find_FlipliftColorMapping(hardwareColor:string, hardwareType:string):ICT_tab_FlipliftColorMapping {
  let retEntry = ct_tab_FlipliftColorMapping.find(p => p.in_HardwareColor == hardwareColor && p.in_HardwareType == hardwareType);
  if (retEntry == undefined) {
    let Text = hardwareColor + ' - ' + hardwareType;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 13019', 1)
    logError(ErrorMessage.Message(Text));
  }
  return retEntry!;
}


// Return value from fliplift construction\n//########################################################
static find_FlipliftConstruction(constructionId:string):ICT_tab_FlipliftConstruction {
  let retEntry = ct_tab_FlipliftConstruction.find(p => p.in_ConstructionId == constructionId);
  if (retEntry == undefined) {
    let Text = constructionId;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 11011', 1)
    logError(ErrorMessage.Message(Text));
  }
  return retEntry!;
}


// Return value from fliplift mapping\n//########################################################
static find_FlipliftMapping(flipliftType: string, hardwareType: string, weightType: number, direction: string, height: number, color: string): ICT_tab_FlipliftMapping {
  
  let retEntry = ct_tab_FlipliftMapping.find(p =>
    p.in_FlipliftType == flipliftType &&
    p.in_HardwareType == hardwareType &&
    p.in_WeightTypeMin <= weightType && p.in_WeightTypeMax >= weightType &&
    p.in_HeightMin <= height && p.in_HeightMax >= height &&
    p.in_Direction == direction &&
    p.in_Color == color
  );

  if (retEntry == undefined) {
    let Text = flipliftType + ' - ' + hardwareType + ' - ' + weightType + ' - ' + height + ' - ' + direction + ' - ' + color;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 13020', 1)
    logError(ErrorMessage.Message(Text));
  }
  return retEntry!;
}


// Return value from fliplift settings\n//########################################################
static find_FlipliftSettings(flipliftType: string, width: number, depth: number, height: number, openingType: string, hardwareType: string, inverse: boolean): ICT_tab_FlipliftSettings {
  
	let retEntry: ICT_tab_FlipliftSettings | undefined;

	// Sorting by priority (to get the first valid row with the lowest priority)
	const sortedSettings = ct_tab_FlipliftSettings.sort((a, b) => a.Priority - b.Priority);

	// Define the filter criteria
	const filterConditions = (p: any) =>
	p.in_FlipliftType == flipliftType &&
	p.in_HeightMin <= height && p.in_HeightMax >= height &&
	p.in_WidthMin <= width && p.in_WidthMax >= width &&
	p.in_DepthMin <= depth &&
	p.in_OpeningType == openingType &&
	(!inverse || p.FlipliftHardwareType == hardwareType); // To get the hardwareType from the attribute (Not automatic)

	// Find the entry in the table
	retEntry = sortedSettings.find(filterConditions);

	// Error handling
	if (!retEntry) {
	let text = `${flipliftType} - ${height} - ${width} - ${depth} - ${openingType}`;
	let errorMessage = GlobalFunc.find_ErrorList('Error 14023', 1);
	logError(errorMessage.Message(text));
	}

	return retEntry!;
}


// Return value from fliplift weight type mapping\n//########################################################
static find_FlipliftWeightTypeMapping(flipliftType:string, hardwareType:string, height:number):ICT_tab_FlipliftWeightTypeMapping {
  let retEntry = ct_tab_FlipliftWeightTypeMapping.find(p => p.in_FlipliftType == flipliftType && p.in_HardwareType == hardwareType && p.in_HeightMin <= height && p.in_HeightMax >= height);
  if (retEntry == undefined) {
    let Text = flipliftType + ' - ' + hardwareType + ' - ' + height;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 13021', 1)
    logError(ErrorMessage.Message(Text));
  }
  return retEntry!;
}


// Process the hardware for fliplifts\n//########################################################
static process_Fliplift(m: IFuncParents_mc_FlipliftHardware01){

	//========================================================================
	// Interfaces to create the outputs
	//========================================================================

	// Interface for the sections
	interface hardwareElement {
		Model3D?: any;
		DimX: number;
		DimY: number;
		DimZ: number;
		PosX: number;
		PosY: number;
		PosZ: number;
		DrillPosX: number;
		ConstructionPosX: number;
		ConstructionPosY: number;
		ConstructionPosZ: number;
		ConstructionDimY: number;
		ConstructionPart: string;
		Identifier: string;
		ProcessingId: string;
		HardwareId: string;
	}

	interface addOnData {
		PushToOpen: boolean;
		Hinges: boolean;
		OpeningAngle: number;
		FlipliftHardwareType: string;
		HingeClass: string;
	}

	interface FlipliftElement {
		Direction: string; 
		Data: hardwareElement;
	}
  
	interface FlipliftInfo {
		CarcaseElements: FlipliftElement[];
		FrontElements: FlipliftElement[];
		MechanismElements: FlipliftElement[];
		AddOnData: addOnData;
	}

	// Function to set the attributes
	function setValueshardwareElement(): hardwareElement {
		let updatedSection: hardwareElement = {
			Model3D: undefined,
			DimX: 0,
			DimY: 0,
			DimZ: 0,
			PosX: 0,
			PosY: 0,
			PosZ: 0,
			DrillPosX: 0,
			ConstructionPosX: 0,
			ConstructionPosY: 0,
			ConstructionPosZ: 0,
			ConstructionDimY: 0,
			ConstructionPart: 'None',
			Identifier: 'None',
			ProcessingId: 'None',
			HardwareId: 'None',
		};
		return updatedSection;
	}

	function setValuesaddOnData(): addOnData{
		let updatedSection : addOnData = {
			PushToOpen: false,
			Hinges: false,
			OpeningAngle: 0,
			FlipliftHardwareType: "",
			HingeClass: ""
		};
		return updatedSection;
	}

	let retFlipliftInfo: FlipliftInfo = {
		CarcaseElements: [],
		FrontElements: [],
		MechanismElements: [],
		AddOnData: setValuesaddOnData()
	};

	// Variables
	let sequence: string;
	let hardwareType: string;
	let flipliftColor: string | undefined = m.mod_FlipliftHardwareColor;

	//========================================================================
	// Call user exit for customization
	//========================================================================

	if(m.mod_FlipliftLogic == 'Custom'){

		// Call the user exit
		let retUeFliplift = GlobalFunc.ue_Fliplift(m);

		// Return the values of the user exit
		return retUeFliplift;
	}

	//========================================================================
	// Standard Library Solution
	//========================================================================

	else{
		try {

			//---------------Fliplift settings--------------------------------

			const isAutomatic = m.mod_FlipliftHardwareType === 'Automatic';

			let retSettings = GlobalFunc.find_FlipliftSettings(
				m.mod_FlipliftType,
				m.mod_Width,
				m.mod_Depth,
				m.mod_Height,
				m.mod_OpeningType,
				isAutomatic ? '' : m.mod_FlipliftHardwareType,
				!isAutomatic
			);

			// Set the values
			sequence = retSettings.Sequence!;
			hardwareType = retSettings.FlipliftHardwareType!;
			retFlipliftInfo.AddOnData.Hinges = retSettings.Hinges!;
			retFlipliftInfo.AddOnData.PushToOpen = retSettings.PushToOpen!;
			retFlipliftInfo.AddOnData.FlipliftHardwareType = retSettings.FlipliftHardwareType!;

			//---------------Weight type mapping------------------------------

			let retWeightType = GlobalFunc.find_FlipliftWeightTypeMapping(m.mod_FlipliftType, hardwareType, m.mod_Height);	
			let frontWeight = m.mod_FrontpanelWeightCalculations[0] ?? 0;
			let handleWeight = m.mod_HandleWeightCalculations[0] ?? 0;
			let weightType: number = retWeightType.WeightType(m.mod_Height, frontWeight, handleWeight);

			//---------------Color mapping------------------------------------

			if (flipliftColor === 'Automatic') {
				flipliftColor = GlobalFunc.find_FlipliftColorMapping(m.mod_HardwareColor, hardwareType).FlipliftColor;
			}

			//---------------Hardware mapping---------------------------------

			// Process the direction
			let directionArray = retSettings.Sequence!.split("_");
			let qtyFittings = directionArray.length;

			// Check the weightType if it is per unit or per set
			if (retWeightType.CalculationType == "Single") {
				weightType = weightType / qtyFittings;
			}

			// Cycle for each side (left or right in the carcase)
			directionArray.forEach(direction => {

				// FlipliftMapping
				let retFlipliftMapping = GlobalFunc.find_FlipliftMapping(m.mod_FlipliftType, hardwareType, weightType, direction, m.mod_Height, flipliftColor!);
				retFlipliftInfo.AddOnData.HingeClass = retFlipliftMapping.HingeClass!;
				retFlipliftInfo.AddOnData.OpeningAngle = retFlipliftMapping.OpeningAngle;

				// Construction
				let ObjectMappingCon = GlobalFunc.find_FlipliftConstruction(retFlipliftMapping.ConstructionId!)

				// Carcase Elements
				// ----------------------------

				if (retFlipliftMapping.CarcaseObject && retFlipliftMapping.CarcaseObject !== "None") {

					// ObjectMapping
					let ObjectMapping = GlobalFunc.find_ObjectMapping(retFlipliftMapping.CarcaseObject!)

					// GraphicLibrary
					let retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(ObjectMapping.GraphicItem!);

					retGraphicMapping.forEach((Item) => {
						let retGraphicLib = GlobalFunc.find_GraphicLibrary(Item.Model3DGroupName!);

						// Add a new item to the output
						retFlipliftInfo.CarcaseElements.push({ Direction: direction, Data: setValueshardwareElement() });
						let lastElement = retFlipliftInfo.CarcaseElements[retFlipliftInfo.CarcaseElements.length - 1];

						// Set the values of the item
						lastElement.Data.Model3D = retGraphicLib.Model3D;
						lastElement.Data.DimX = retGraphicLib.DimensionX + retGraphicLib.PartOffsetX;
						lastElement.Data.DimY = retGraphicLib.DimensionY;
						lastElement.Data.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
						lastElement.Data.PosX = retGraphicLib.PartOffsetX; // Doesn't make sense to change the InsertionPointX in the carcase => retGraphicLib.InsertionPointX + 
						lastElement.Data.PosY = retGraphicLib.InsertionPointY;
						lastElement.Data.PosZ = retGraphicLib.InsertionPointZ + retGraphicLib.PartOffsetZ;
						lastElement.Data.DrillPosX = retGraphicLib.InsertionPointX;
						lastElement.Data.Identifier = retGraphicLib.Identifier!;
						lastElement.Data.ConstructionPosX = 0;
						lastElement.Data.ConstructionPosY = ObjectMappingCon.CarcasePosY;
						lastElement.Data.ConstructionPosZ = ObjectMappingCon.CarcasePosZ;
						lastElement.Data.ConstructionDimY = 0;
						lastElement.Data.ConstructionPart = ObjectMappingCon.CarcaseConnection!;
						lastElement.Direction = direction;
						lastElement.Data.ProcessingId = ObjectMapping.ProcessingItem!;
						lastElement.Data.HardwareId = ObjectMapping.HardwareItem!;
					});
				}

				// Front Elements
				// ----------------------------

				if (retFlipliftMapping.FrontObject && retFlipliftMapping.FrontObject !== "None") {

					// ObjectMapping
					let ObjectMappingF = GlobalFunc.find_ObjectMapping(retFlipliftMapping.FrontObject!)

					// GraphicLibrary
					let retGraphicMappingF = GlobalFunc.find_GraphicLibraryMapping(ObjectMappingF.GraphicItem!);

					retGraphicMappingF.forEach((Item) => {
						let retGraphicLib = GlobalFunc.find_GraphicLibrary(Item.Model3DGroupName!);

						// Add a new item to the output
						retFlipliftInfo.FrontElements.push({ Direction: direction, Data: setValueshardwareElement() });
						let lastElement = retFlipliftInfo.FrontElements[retFlipliftInfo.FrontElements.length - 1];

						// Set the values of the item
						lastElement.Data.Model3D = retGraphicLib.Model3D;
						lastElement.Data.DimX = retGraphicLib.DimensionX + retGraphicLib.PartOffsetX;
						lastElement.Data.DimY = retGraphicLib.DimensionY;
						lastElement.Data.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
						lastElement.Data.PosX = retGraphicLib.InsertionPointX + retGraphicLib.PartOffsetX;
						lastElement.Data.PosY = retGraphicLib.InsertionPointY;
						lastElement.Data.PosZ = retGraphicLib.InsertionPointZ + retGraphicLib.PartOffsetZ;
						lastElement.Data.Identifier = retGraphicLib.Identifier!;
						lastElement.Data.ConstructionPosX = ObjectMappingCon.FrontPosX;
						lastElement.Data.ConstructionPosY = ObjectMappingCon.FrontPosY;
						lastElement.Data.ConstructionPosZ = 0;
						lastElement.Data.ConstructionDimY = 0;
						lastElement.Direction = direction;
						lastElement.Data.ProcessingId = ObjectMappingF.ProcessingItem!;
						lastElement.Data.HardwareId = ObjectMappingF.HardwareItem!;
					});
				}

				// Mechanism Elements
				// ----------------------------

				if (retFlipliftMapping.MechanismObject && retFlipliftMapping.MechanismObject !== "None") {

					// ObjectMapping
					let ObjectMappingM = GlobalFunc.find_ObjectMapping(retFlipliftMapping.MechanismObject!)

					// GraphicLibrary
					let retGraphicMappingM = GlobalFunc.find_GraphicLibraryMapping(ObjectMappingM.GraphicItem!);

					retGraphicMappingM.forEach((Item) => {
						let retGraphicLib = GlobalFunc.find_GraphicLibrary(Item.Model3DGroupName!);

						// Add a new item to the output
						retFlipliftInfo.MechanismElements.push({ Direction: direction, Data: setValueshardwareElement() });
						let lastElement = retFlipliftInfo.MechanismElements[retFlipliftInfo.MechanismElements.length - 1];

						// Set the values of the item
						lastElement.Data.Model3D = retGraphicLib.Model3D;
						lastElement.Data.DimX = retGraphicLib.DimensionX + retGraphicLib.PartOffsetX;
						lastElement.Data.DimY = retGraphicLib.DimensionY;
						lastElement.Data.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
						lastElement.Data.PosX = retGraphicLib.InsertionPointX + retGraphicLib.PartOffsetX;
						lastElement.Data.PosY = retGraphicLib.InsertionPointY;
						lastElement.Data.PosZ = retGraphicLib.InsertionPointZ + retGraphicLib.PartOffsetZ;
						lastElement.Data.Identifier = retGraphicLib.Identifier!;
						lastElement.Data.ConstructionPosX = ObjectMappingCon.MechanismPosX;
						lastElement.Data.ConstructionPosY = ObjectMappingCon.MechanismPosY;
						lastElement.Data.ConstructionPosZ = ObjectMappingCon.MechanismPosZ;
						lastElement.Data.ConstructionDimY = ObjectMappingCon.MechanismDimY;
						lastElement.Direction = direction;
						lastElement.Data.ProcessingId = ObjectMappingM.ProcessingItem!;
						lastElement.Data.HardwareId = ObjectMappingM.HardwareItem!;
					});
				}
			});
			
			//---------------Return data to the module------------------------

			return retFlipliftInfo;

		}
		catch{			
			// The messages are shown from the functions (Not needed here)
			return undefined;
		}
	}
}


// Find HingeConstruction\n//########################################################
static find_HingeConstruction(Part: string, CarcaseFrontAngle: number, InsertionSide:string):ICT_tab_HingeConstruction{
  let retEntry = ct_tab_HingeConstruction.find(p => p.in_Part == Part && p.in_CarcaseFrontAngle == CarcaseFrontAngle && p.in_InsertionSide == InsertionSide);
	if (retEntry == undefined) {
    let Text = Part + ' - ' + CarcaseFrontAngle + ' - ' + InsertionSide;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11001',1)
		logError(ErrorMessage.Message(Text));
	}	
	return retEntry!;
}


// Mathematical support for long parts generation
static process_MathLongparts() {
	/*
			 * Provide mathematical functions required for long parts generation.
			 * Some of those functions should make it to the API.
			 * This is a workaround to be able to provide type-safe code without using import statements.
			 * 
			 * Vector3Extensions: Further mathematical functions for Vector3 objects which are missing in the base.ts
			 * LineSegmentEquation: Mathematical equation for line segment and its supporting math. This is useful for evaluating if contours are adjacent.
			 * Contour computation:
				* Convert contour to a plot of 3D coordinates in the 2D plane and in the world coordinate system.
				* LongPartSegment object to evaluate the length of the segment and finding out if it has its neighbours.
				* LongPartSegmentEdge is an object representing a matchable/connectable edge of the segment.
			 * 
			 * By Jiri Polcar
			 * 
			 */

	/** Attribute to detect contour entries with the same owner. Useful if they should communicate somehow. */
	const CONTOUR_ATTRIBUTE_OWNER_ID = 'OwnerId';

	/** Extends the base Vector3 with some vector math */
	class Vector3Extended extends Vector3 {

		constructor(x: number, y: number, z: number);
		constructor(v: Vector3);
		constructor(xOrVector: number | Vector3, y?: number, z?: number) {
			if (xOrVector instanceof Vector3) {
				super(xOrVector._x, xOrVector._y, xOrVector._z);
			} else {
				super(xOrVector, y!, z!);
			}
		}

		/**
		 * Epsilon value to compare coordinate or position equality.
		 * apparently, 0.000001 was too little
		 * TC provided near-zero position values: "x": 900.0, "y": -2.6679314139854693E-12, "z": -6.103515625E-05, "rotationY": 1.1920928955078125E-07
		 * where the previous value failed
		 * 0.01 mm is a suggestion for trying out
		 */
		static EPS: number = 0.01;

		add(v: Vector3) {
			return new Vector3Extended(this._x + v._x, this._y + v._y, this._z + v._z);
		}
		subtract(v: Vector3) {
			return new Vector3Extended(this._x - v._x, this._y - v._y, this._z - v._z);
		}
		scale(scalar: number) {
			return new Vector3Extended(this._x * scalar, this._y * scalar, this._z * scalar);
		}
		normalize() {
			return this.scale(1 / this.magnitude());
		}
		/** length of vector */
		magnitude() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
		}
		isCoincident(v: Vector3, tolerance: number = Vector3Extended.EPS) {
			return this.subtract(v).magnitude() < Vector3Extended.EPS;
		}
		/** dot product */
		dot(v: Vector3) {
			return this._x * v._x + this._y * v._y + this._z * v._z;
		}
		/** cross product */
		cross(v: Vector3) {
			return new Vector3Extended(this._y * v._z - this._z * v._y, this._z * v._x - this._x * v._z, this._x * v._y - this._y * v._x);
		}
		/** size of cross is size of area between two vectors - if that is 0, they are parallel */
		isParallel(v: Vector3) {
			return this.cross(v).magnitude() < Vector3Extended.EPS;
		}
		distanceTo(v: Vector3) {
			return this.subtract(v).magnitude();
		}
	}

	/**
	 * Represents a line segment parametric equation in 3D space.
	 * The line segment is defined by two points, start and end.
	 */
	class LineSegmentEquation {
		/** Starting point of the line */
		readonly start: Vector3Extended;
		/* End point of the line segment */
		readonly end: Vector3Extended;
		/** The length of the line segment, computed as the distance between the start and the end */
		readonly length: number;
		/** The normalized direction vector of the line segment */
		readonly direction: Vector3Extended;
		readonly explicitFootprintEquation: boolean = false;

		/**
		 * 
		 * @param start line segment start point
		 * @param end line segment end point
		 * @param footprintEquation whether to reduce the line segment to a 2D line by setting the y coordinate of the start and end points to 0
		 */
		constructor(start: Vector3, end: Vector3, footprintEquation: boolean = false) {
			this.start = new Vector3Extended(start);
			this.end = new Vector3Extended(end);
			this.explicitFootprintEquation = footprintEquation;
			if (footprintEquation) {
				this.start._y = 0;
				this.end._y = 0;
			}
			this.length = this.start.distanceTo(this.end);
			if (this.length < Vector3Extended.EPS) {
				throw new Error("Line segment must have a length greater than zero");
			}
			this.direction = this.end.subtract(this.start).scale(1 / this.length);
		}

		/**
		 * @returns The same equation with the y coordinate of the start and end points set to 0.
		 */
		toFootprintEquation(): LineSegmentEquation {
			return new LineSegmentEquation(this.start, this.end, true);
		}
		/**
		 * Returns true if both segments are fully coincident (equality on start and end points)
		 */
		isFullyCoincident(other: LineSegmentEquation, tolerance: number | undefined = undefined): boolean {
			const ownStartIsOtherStart = this.start.isCoincident(other.start, tolerance);
			const ownStartIsOtherEnd = this.start.isCoincident(other.end, tolerance);
			const ownEndIsOtherEnd = this.end.isCoincident(other.end, tolerance);
			const ownEndIsOtherStart = this.end.isCoincident(other.start, tolerance);
			return (ownStartIsOtherStart && ownEndIsOtherEnd) || (ownStartIsOtherEnd && ownEndIsOtherStart);
		}
		/**
		 * Returns the length of the concident part of the two line segments.
		 * @returns The length of the common concidence, or 0 if they only touch or null if they do not coincide.
		 */
		getCoincidenceLength(other: LineSegmentEquation): number | null {
			if (!this.isColinear(other)) { return null; }
			else if (this.isFullyCoincident(other)) { return this.length; }
			else {
				const otherStartDistance = this.getParameterOfPoint(other.start)!;
				const otherEndDistance = this.getParameterOfPoint(other.end)!;
				const isReversedDirection = otherStartDistance > otherEndDistance;
				// other start and end reordered to fit this line segment's direction
				const alignedOtherStartDistance = isReversedDirection ? otherEndDistance : otherStartDistance;
				const alignedOtherEndDistance = isReversedDirection ? otherStartDistance : otherEndDistance;
				// If the other segment is fully outside, that means that the start if after own end and vice versa
				if (alignedOtherStartDistance > this.length || alignedOtherEndDistance < 0) {
					// if other start is after own end || other end is before own start, there is no coincidence
					return 0;
				}
				else {
					const positionOfStartEndNearFar = [
						0, // own start
						alignedOtherStartDistance, // other first point
						alignedOtherEndDistance, // other second point
						this.length, // own end
					].sort();
					// the two middle values are the start and end of the common part
					// all other cases have been filtered out by previous conditions
					return positionOfStartEndNearFar[2] - positionOfStartEndNearFar[1];
				}
			}
		}
		/**
		 * Returns the length of the start to @param point on the line segment or null if the point is not on the line segment.
		 */
		getParameterOfPoint(point: Vector3 | Vector3Extended): number | null {
			const pointVector3Extended = point instanceof Vector3 ? new Vector3Extended(point) : point;
			if (this.start.isCoincident(pointVector3Extended)) {
				return 0;
			}
			else if (!new LineSegmentEquation(this.start, pointVector3Extended).isColinear(this)) {
				return null;
			}
			else {
				return this.direction.dot(pointVector3Extended.subtract(this.start));
			}
		}
		/** gets point in given distance from start in the direction to the end */
		getPointAt(t: number): Vector3Extended {
			return this.start.add(this.direction.scale(t));
		}
		/**
		 * Returns the perpendicular distance of a point to the line the segment is on. Can be 0 if point is on the line.
		 */
		perpendicularDistanceOfPoint(point: Vector3): number {
			const pointToStart = this.start.subtract(point);
			const cross = pointToStart.cross(this.direction);
			return cross.magnitude();
		}
		/**
		 * Returns true if the two line segments are parallel. 
		 * Note: They can still be coincident if they are parallel.
		 */
		isParallel(other: LineSegmentEquation): boolean {
			return this.direction.isParallel(other.direction);
		}
		/**
		 * Returns true if the lines of the two segments are colinear.
		 * Note: This doesn't evaluate line segment coincidence, only if they are on the same line.
		 * (checks whether they're parallel and perpendicular distace is < tolerance).
		 */
		isColinear(other: LineSegmentEquation, tolerance: number | undefined = undefined): boolean {
			return this.isParallel(other) && this.perpendicularDistanceOfPoint(other.start) < (tolerance ?? Vector3Extended.EPS);
		}
		/**
		 * If the one line segment continues with another one (one pair of start/end points coincide), this function returns true.
		 * If the line segments are coincident, it returns false (both start and end points coincide).
		 */
		continuesWith(other: LineSegmentEquation, tolerance: number | undefined = undefined): boolean {
			if (!this.isColinear(other, tolerance)) {
				return false;
			}
			const checks = [
				this.start.subtract(other.start).magnitude(),
				this.start.subtract(other.end).magnitude(),
				this.end.subtract(other.end).magnitude(),
				this.end.subtract(other.start).magnitude(),
			];
			const eps = tolerance ?? Vector3Extended.EPS;
			// How many points pairs' distances are 0,
			//   if 2, the line segments are fully coincident
			//   if 1, the line segments continue
			return checks.filter(check => check < eps).length === 1;
		}
		/**
		 * Takes the start point of the line segment as the origin and the 2D projection
		 * of the direction vector as the azimuth and returns a transformation matrix
		 * to transform to start point in the azimuth of the direction.
		 */
		getTransformationMatrixToStartPoint(): Matrix4 {
			const translation = new Matrix4().makeTranslation(this.start._x, this.start._y, this.start._z);
			// because considering zero rotation and rotation direction
			const azimuth = -90 + Math.atan2(this.direction._x, this.direction._z) / Math.PI * 180;
			const rotation = new Matrix4().makeRotationY(azimuth);
			return (new Matrix4()
				.multiply(translation)
				.multiply(rotation)
			);
		}
		/** Gets point of intersection with another line or null if colinear 
		 * WARNING: Wasn't tested on non-colinear lines that are missing each other.
		*/
		intersection(other: LineSegmentEquation): Vector3Extended | null {
			if (this.isColinear(other)) {
				return null;
			}
			//const t = (this.start._z * other.direction._x - this.start._x * other.direction._z - other.start._z * other.direction._x + other.start._x * other.direction._z) / (this.direction._x * other.direction._z - this.direction._z * other.direction._x);
			//return this.start.add(this.direction.scale(t));
			const cross = this.direction.cross(other.direction);
			const diff = other.start.subtract(this.start);
			const t = diff.cross(other.direction).dot(cross) / cross.dot(cross);
			return this.start.add(this.direction.scale(t));
		}
		/** Returns a new equation which is moved by a vector to a different position */
		translate(args: { both?: Vector3 | undefined, start?: Vector3 | undefined, end?: Vector3 | undefined }) {
			const { both, start, end } = args;
			return new LineSegmentEquation(this.start.add(start ?? new Vector3(0, 0, 0)).add(both ?? new Vector3(0, 0, 0)), this.end.add(end ?? new Vector3(0, 0, 0)).add(both ?? new Vector3(0, 0, 0)));
		}
		/** Returns a new line segment where start and end are moved by a distance, where the positive direction is from start to end */
		extend(start: number = 0, end: number = 0): LineSegmentEquation {
			return new LineSegmentEquation(this.getPointAt(start), this.getPointAt(this.length + end));
		}
	}

	class MatchingOptions {
		match3D: boolean = true;
		matchFootprint: boolean = true;
		toleranceOrMinimumCoincidence?: number = undefined;
		condition: (a: LongPartSegment, b: LongPartSegment) => boolean = () => true;
		constructor(partial: Partial<MatchingOptions> = {}) {
			Object.assign(this, partial);
		}
	}

	/**
	 * Uses the GenerationContour to extend the contour with an additional functionality
	 * for creating segments of long parts.
	 * Usage:
	 * 	1. Construct from a GenerationContour, this will plot the contour and transforming the plot to the world coordinates (@member worldPlot)
	 * 	2. Assign matchability to the individual sides using the @method addSide
	 *  3. Match the sides with the same sides on other segments using @method tryMatchNeighbourBySideCoincidence
	 *  4. Use the @method crawlAndAccumulateLength to accumulate the length of the matched segments
	 *  5. Go to a neighbour segment behind a side by the @method getNeighbourBySide
	 */
	class LongPartSegment {

		readonly generationContour: GenerationContour;
		readonly worldPlot: ContourEntryWorld[];
		neighbours: Map<CKind, LongPartSegmentEdge> = new Map();
		/** 
		 * List of other by their matching contour attribute under `CONTOUR_ATTRIBUTE_OWNER_ID` 
		 * The purpose is to indicate that they are coming from the same module 
		 */
		siblings: LongPartSegment[] = [];
		/** Space to store data during computations and processing. */
		additionalData: any = {};

		constructor(
			generationContour: GenerationContour,
		) {
			this.generationContour = generationContour;

			// plot the contour in world coordinates
			this.worldPlot = [];
			let lastEntryTypeM: ContourEntry | null = null;
			let x = 0;
			let y = 0;
			for (const entry of generationContour.contour._entries) {
				switch (entry.posType) {
					case 'M':
						x = entry.x!;
						y = entry.y!;
						lastEntryTypeM = entry;
						break;
					case 'L':
						x = entry.x!;
						y = entry.y!;
						break;
					case 'H':
						x = entry.x!;
						break;
					case 'V':
						y = entry.y!;
						break;
					case 'Z':
						if (!lastEntryTypeM) {
							// this actually should not be possible
							logError('Z entry without an M entry before. This should not happen. Fix this in the contour definition. Using default 0, 0.');
							x = 0;
							y = 0;
						} else {
							x = lastEntryTypeM.x!;
							y = lastEntryTypeM.y!;
						}
						break;
					default:
						logError(`Unsupported posType ${entry.posType}. Either only use M, L, H, V, Z in the contour definition or complement in the code above. Adding 0, 0.`);
						break;
				}
				this.worldPlot.push(new ContourEntryWorld(entry, generationContour, x, y));
			}
			/*
			 * Based on version of the API with which this has been developed, the first entry must be M and M can only be the first entry.
			 * Therefore, we can assume that if the last entry is Z, it can be collapsed down to the M, creating a closed contour with the 
			 * possibility to easily get all corner points.
			 */

			const first = this.worldPlot[0];
			const last = this.worldPlot[this.worldPlot.length - 1];
			if (first.kind === CKind.None && first.posType === 'M' && last.kind !== CKind.None && last.posType === 'Z') {
				this.worldPlot.pop();
				first.kind = last.kind;
			}

		}
		/**
		 * Initialize a side of the segment with a matching side on another segment.
		 * This creates an edge line segment equation from the contour entry that is of the given CKind.
		 * It can be checked for matching with another LongPartSegment
		 * @param side the side on this
		 * @param matchingSide a side or a list of sides' CKinds that are eligible for matching
		 * @returns existing or new edge
		 */
		getOrAddSide(side: CKind, matchingSide: CKind | CKind[] | undefined = undefined): LongPartSegmentEdge {
			const existingEdge = this.neighbours.get(side);
			if (existingEdge) {
				return existingEdge;
			}
			else {
				const newEdge = new LongPartSegmentEdge(side, this, matchingSide);
				this.neighbours.set(side, newEdge);
				return newEdge;
			}
		}
		/**
		 * Create a geometrical equation from the contour side.
		 * @param kind kind of the contour side to create the line segment equation from
		 * @returns
		 */
		createLineSegmentEquationFromContourSide(kind: CKind): LineSegmentEquation | undefined {
			const indexOfSideEnd = this.worldPlot.findIndex(entry => entry.kind === kind);
			if (indexOfSideEnd === -1) {
				return undefined;
			}
			const indexOfSideStart = indexOfSideEnd === 0 ? this.worldPlot.length - 1 : indexOfSideEnd - 1;
			const sideEnd = this.worldPlot[indexOfSideEnd].toVector3Extended();
			const sideStart = this.worldPlot[indexOfSideStart].toVector3Extended();
			return new LineSegmentEquation(sideStart, sideEnd);
		}
		/** Tries to match this line segment with others
		 * see `LongPartSegmentEdge.tryMatchNeighbourBySideCoincidence` 
		 */
		tryMatchNeighboursByFullSideCoincidence(others: LongPartSegment | LongPartSegment[], options: Partial<MatchingOptions> = {}) {
			const othersAsArray = Array.isArray(others) ? others : [others];
			for (const other of othersAsArray) {
				if (other === this) { continue; }
				for (const edge of this.neighbours.values()) {
					edge.tryMatchNeighbourByFullSideCoincidence(other, options);
				}
			}
		}
		tryMatchNeighboursByPartialCoincidence(others: LongPartSegment | LongPartSegment[], options: Partial<MatchingOptions> = {}) {
			const othersAsArray = Array.isArray(others) ? others : [others];
			for (const other of othersAsArray) {
				if (other === this) { continue; }
				for (const edge of this.neighbours.values()) {
					edge.tryMatchNeighbourByPartialCoincidence(other, options);
				}
			}
		}
		/** Tries to match this line segment with others
		 * see `LongPartSegmentEdge.tryMatchNeighbourByAxialContinuity` 
		 */
		tryMatchNeighboursByAxialContinuity(axialSide: CKind, others: LongPartSegment | LongPartSegment[], options: Partial<MatchingOptions> = {}) {
			const othersAsArray = Array.isArray(others) ? others : [others];
			for (const other of othersAsArray) {
				if (other === this) { continue; }
				for (const edge of this.neighbours.values()) {
					edge.tryMatchNeighbourByAxialContinuity(axialSide, other, options);
				}
			}
		}
		/**
		 * navigate to the neighbour segment by the contour side
		 * @param side 
		 * @returns null if no neighbour has been matched
		 */
		getNeighbourBySide(side: CKind): LongPartSegment | null {
			return this.neighbours.get(side)?.other ?? null;
		}
		/**
		 * Calculates a distance between two contour sides that are parallel
		 * @param side1 
		 * @param side2 
		 * @returns null if the sides are not parallel or the distance cannot be calculated
		 */
		getLengthBetweenParallelSides(side1: CKind, side2: CKind): number | null {
			const edge1 = this.neighbours.get(side1)?.edge;
			const edge2 = this.neighbours.get(side2)?.edge;
			if (!edge1 || !edge2) {
				return null;
			}
			if (!edge1.isParallel(edge2)) {
				return null;
			}
			return edge1.perpendicularDistanceOfPoint(edge2.start);
		}
		/**
		 * Crawls the segment and accumulates the length of the segment.
		 * Calls the getLengthBetweenParallelSides between start side and crawl direction side
		 * Then calls the same function on the neighbour segment in the crawl direction.
		 * @param startSide 
		 * @param crawlDirection 
		 * @param runningLength 
		 * @returns the accumulated length of the segments
		 */
		crawlAndAccumulateLength(startSide: CKind, crawlDirection: CKind, runningLength: number = 0): number {
			const length = this.getLengthBetweenParallelSides(startSide, crawlDirection) ?? 555;
			const nextSegment = this.getNeighbourBySide(crawlDirection);
			if (!nextSegment) {
				return runningLength + length;
			}
			return nextSegment.crawlAndAccumulateLength(startSide, crawlDirection, runningLength + length);
		}
		/**
		 * Returns a corner point of the segment by two sides
		 * @param side1 
		 * @param side2 
		 * @returns null if no such point is found
		 */
		getCornerPoint(side1: CKind, side2: CKind): ContourEntryWorld | null {
			const l = this.worldPlot.length;
			for (let i = 0; i < l; i++) {
				const point = this.worldPlot[i % l];
				const nextPoint = this.worldPlot[(i + 1) % l];
				if (
					point.kind === side1 && nextPoint.kind === side2
					|| point.kind === side2 && nextPoint.kind === side1
				) {
					return point;
				}
			}
			return null;
		}
		/**
		 * If `CONTOUR_ATTRIBUTE_OWNER_ID` is set on the contour, it tries to match the siblings of the segments.
		 * If there is a match, a reference is pushed to both sides, to the `siblings` array.
		 * @param others 
		 * @returns 
		 */
		tryMatchSiblings(others: LongPartSegment[] | LongPartSegment) {
			const othersAsArray = Array.isArray(others) ? others : [others];
			const ownerId = this.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_ID, CONTOUR_ATTRIBUTE_OWNER_ID);
			if (ownerId === CONTOUR_ATTRIBUTE_OWNER_ID) { return; }
			othersAsArray.forEach(o => {
				if (
					o !== this
					&& o.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_ID, CONTOUR_ATTRIBUTE_OWNER_ID) === ownerId
				) {
					if (this.siblings.indexOf(o) < 0) { this.siblings.push(o); }
					if (o.siblings.indexOf(this) < 0) { o.siblings.push(this); }
				}
			});
		}
		/**
		 * Helper function to not to have to write .generationContour.contour.attributes.get(CONTOUR_ATTRIBUTE_OWNER_ID) as * all the time
		 * @param attribute 
		 * @param defaultValue 
		 * @returns attribute value in the type of the default value or the default value if no such attribute is on the countertop
		 */
		getAttributeOrDefault(attribute: string, defaultValue: string | number): any {
			const attributeValue = this.generationContour.contour.attributes.get(attribute);
			if (attributeValue === undefined) { return defaultValue; }
			else {
				return attributeValue as typeof defaultValue;
			}
		}
	}

	/**
	 * Extends the ContourEntry from local space to world space.
	 * Applies a transformation to the ContourEntry to world using the generationContour.position
	 */
	class ContourEntryWorld extends ContourEntry {
		override x: number;
		override y: number;
		z: number;
		constructor(entry: ContourEntry, generationContour: GenerationContour, plottedX: number, plottedY: number) {
			super();
			const phi = -generationContour.position.rotationY * Math.PI / 180;
			this.x = (
				generationContour.position.x
				+ plottedX * Math.cos(phi) - plottedY * Math.sin(phi)
			);
			this.y = (
				generationContour.position.y
				+ generationContour.height
			);
			this.z = (
				generationContour.position.z
				+ plottedX * Math.sin(phi) + plottedY * Math.cos(phi)
			);
			this.kind = entry.kind;
			this.posType = entry.posType;
			this.attributes = entry.attributes;
		}
		toVector3Extended(): Vector3Extended {
			return new Vector3Extended(this.x, this.y, this.z);
		}
	}

	/**
	 * A matchable edge of the LongPartSegment, so that it can be matched with another segment at a given side.
	 * A pair of kind and matchingKinds is used to match the edge with another segment.
	 * Then the equations of the line segments are compared for coincidence.
	 * The same operation is being compared in 2D on the footprint, all matching neighbour segments are stored
	 * in the array `neighboursInFootprint`. Only one really matching neighbour is possible, under the reference `other`.
	 */
	class LongPartSegmentEdge {
		kind: CKind;
		matchingKinds: CKind[];
		edge: LineSegmentEquation | undefined;
		edgeInFootprint: LineSegmentEquation | undefined;
		other: LongPartSegment | null = null;
		neighboursInFootprint: LongPartSegment[] = [];
		readonly parent: LongPartSegment;

		/**
		 * 
		 * @param side CKind of the side which should be matched
		 * @param segment generation contour long part segment instance to which the side is assigned
		 * @param matchingSide CKind or array of CKinds that are eligible for matching
		 */
		constructor(
			side: CKind,
			segment: LongPartSegment,
			matchingSide: CKind | CKind[] | undefined,
		) {
			this.kind = side;
			if (!matchingSide) {
				this.matchingKinds = LongPartSegmentEdge.DefaultMatchingKinds[side];
			}
			else if (Array.isArray(matchingSide)) {
				this.matchingKinds = matchingSide;
			}
			else {
				this.matchingKinds = [matchingSide];
			}
			this.edge = segment.createLineSegmentEquationFromContourSide(side);
			this.edgeInFootprint = segment.createLineSegmentEquationFromContourSide(side)?.toFootprintEquation();
			this.parent = segment;
		}

		/**
		 * Tries to match the neighbour segment by finding a matching edge in the neighbour and comparing the line segment equations.
		 * If the line segments are coincident, the neighbour is stored in the `other` property.
		 * If the line segments are parallel, the neighbour is stored in the `neighboursInFootprint` array.
		 * @param other 
		 * @returns 
		 */
		tryMatchNeighbourByFullSideCoincidence(other: LongPartSegment, options: Partial<MatchingOptions> = {}) {
			const {
				toleranceOrMinimumCoincidence: tolerance = undefined,
				match3D,
				matchFootprint,
				condition,
			} = new MatchingOptions(options);
			const conditionResult = condition(this.parent, other);
			if (!conditionResult) { return; }
			if (this.other !== null || this.neighboursInFootprint.indexOf(other) > -1 || (!match3D && !matchFootprint)) { return; }
			const otherEdgesToTryMatching = this.matchingKinds.filter(kind => kind !== CKind.None && other.neighbours.has(kind));
			otherEdgesToTryMatching.forEach(kind => {
				const otherSide = other.neighbours.get(kind)!;
				const isFullyCoincident = this.edge!.isFullyCoincident(otherSide.edge!, tolerance);
				if (match3D && isFullyCoincident) {
					this.other = other;
					this.neighboursInFootprint.push(other);
					otherSide.other = this.parent;
					otherSide.neighboursInFootprint.push(this.parent);
					return;
				}
				if (!matchFootprint) { return; }
				const isFullyCoincidentInFootprint = isFullyCoincident || this.edgeInFootprint!.isFullyCoincident(otherSide.edgeInFootprint!, tolerance);
				if (isFullyCoincidentInFootprint) {
					this.neighboursInFootprint.push(other);
					otherSide.neighboursInFootprint.push(this.parent);
					return;
				}
			});
		}
		tryMatchNeighbourByPartialCoincidence(other: LongPartSegment, options: Partial<MatchingOptions> = {}) {
			const {
				toleranceOrMinimumCoincidence: minimumConcidence = 100,
				match3D,
				matchFootprint,
				condition,
			} = new MatchingOptions(options);
			const conditionResult = condition(this.parent, other);
			if (!conditionResult) { return; }
			if (this.other !== null || this.neighboursInFootprint.indexOf(other) > -1 || (!match3D && !matchFootprint)) { return; }
			const otherEdgesToTryMatching = this.matchingKinds.filter(kind => kind !== CKind.None && other.neighbours.has(kind));
			otherEdgesToTryMatching.forEach(kind => {
				const otherSide = other.neighbours.get(kind)!;
				const isPartiallyCoincident = (this.edge!.getCoincidenceLength(otherSide.edge!) ?? -999) > minimumConcidence;
				if (match3D && isPartiallyCoincident) {
					this.other = other;
					this.neighboursInFootprint.push(other);
					otherSide.other = this.parent;
					otherSide.neighboursInFootprint.push(this.parent);
					return;
				}
				if (!matchFootprint) { return; }
				const isPartiallyCoincidentInFootprint = isPartiallyCoincident || (this.edgeInFootprint!.getCoincidenceLength(otherSide.edgeInFootprint!) ?? -999) > minimumConcidence;
				if (isPartiallyCoincidentInFootprint) {
					this.neighboursInFootprint.push(other);
					otherSide.neighboursInFootprint.push(this.parent);
					return;
				}
			});
		}
		/**
		 * This is similar to @function tryMatchNeighbourBySideCoincidence, but here it is not checking for a full coincidence of line segments.
		 * Instead, the neighbour edges have to have a minimum concidence length and an axis must be continuous among them.
		 * This means, that i.e. CKind.Left and CKind.Right edges still have to touch each other, but an edge of axialSide has to be continuous,
		 * which is checked by method `LineSegmentEquation.continuesWith` that is defined as true if colinear and touching.
		 * @param axialSide 
		 * @param other 
		 * @param minimumConcidenceLength 
		 * @returns 
		 */
		tryMatchNeighbourByAxialContinuity(axialSide: CKind, other: LongPartSegment, options: Partial<MatchingOptions>) {
			const {
				toleranceOrMinimumCoincidence: minimumConcidenceLength = 10,
				match3D,
				matchFootprint,
				condition,
			} = new MatchingOptions(options);
			const conditionResult = condition(this.parent, other);
			if (!conditionResult) { return; }
			if (this.other !== null || this.neighboursInFootprint.indexOf(other) > -1 || (!match3D && !matchFootprint)) { return; }
			const otherEdgesToTryMatching = this.matchingKinds.filter(kind => kind !== CKind.None && kind !== axialSide && other.neighbours.has(kind));
			const ownAxialSide = this.parent.getOrAddSide(axialSide);
			otherEdgesToTryMatching.forEach(kind => {
				const otherAxialSide = other.getOrAddSide(axialSide);
				const otherTraverseSide = other.neighbours.get(kind)!;
				const concidenceLength = this.edge!.getCoincidenceLength(otherTraverseSide.edge!);
				const isContinuous = ownAxialSide.edge!.continuesWith(otherAxialSide.edge!, Vector3Extended.EPS);
				if (match3D && isContinuous && (concidenceLength ?? -9999) > minimumConcidenceLength) {
					this.other = other;
					this.neighboursInFootprint.push(other);
					otherTraverseSide.other = this.parent;
					otherTraverseSide.neighboursInFootprint.push(this.parent);
					return;
				}
				if (!matchFootprint) { return; }
				const coincidenceLengthInFootprint = concidenceLength ?? this.edgeInFootprint!.getCoincidenceLength(otherTraverseSide.edgeInFootprint!);
				const isContinuousInFootprint = isContinuous ?? ownAxialSide.edgeInFootprint!.continuesWith(otherAxialSide.edgeInFootprint!);
				if (isContinuousInFootprint && (coincidenceLengthInFootprint ?? -9999) > minimumConcidenceLength) {
					this.neighboursInFootprint.push(other);
					otherTraverseSide.neighboursInFootprint.push(this.parent);
					return;
				}
			});
		}

		static DefaultMatchingKinds = {
			[CKind.Left]: [CKind.Right],
			[CKind.Right]: [CKind.Left],
			[CKind.Front]: [CKind.Back],
			[CKind.Back]: [CKind.Front],
			[CKind.None]: [CKind.None],
		}
	}

	return {
		Vector3Extended,
		LineSegmentEquation,
		LongPartSegment,
		LongPartSegmentEdge,
		CONTOUR_ATTRIBUTE_ADD_COUNTERTOP: 'AddCountertop',
		CONTOUR_ATTRIBUTE_ADD_TOEKICK: 'AddToekick',
		/** @deprecated An attribute to mark, that this contour segment is not able to define countertop depth. Usage: corner perpendicular part. */
		CONTOUR_ATTRIBUTE_DOES_NOT_DEFINE_DEPTH: 'NoDepthDefinition',
		CONTOUR_ATTRIBUTE_OWNER_ID,
		CONTOUR_ATTRIBUTE_OWNER_TYPE: 'OwnerType',
		CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE: 'CornerContourType',
		CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT: 'Straight',
		CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR: 'Perpendicular',
		mr_CornerunitStraight: 'mr_CornerunitStraight',
		mr_StorateunitSingle: 'mr_StorateunitSingle',
		mr_Upright: 'mr_Upright',
		mr_Filler01: 'mr_Filler01',
	}
}


// Find FramePartConnectionMapping\n//########################################################
static find_FramePartConnectionMapping(PartGroup:string, TypeElement:string, FrontProgram:string, Thk: number):any{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_PartGroup: PartGroup,
		in_TypeElement: TypeElement,
		in_FrontProgram: FrontProgram
	};
	
	// Fixed parameters
	let FixedParams: any = {};
	
	// Range parameters
	let RangeParams: any = {
		"Range1": {
			MinAttr: "in_ThkMin",
			MaxAttr: "in_ThkMax",
			Value: Thk
		}
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_FramePartConnectionMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		logError('Error 13022: Could not find entry in tab_FramePartConnectionMapping for input value: ' + Thk);
	}
	return retVal;
}


// Return Value from PartConnectionSettings\n//########################################################
static find_PartConnectionSettings(ConnectionHardwarePositioning:string, TouchLength:number, TouchWidth:number):ICT_tab_PartConnectionSettings{
	let retEntry = ct_tab_PartConnectionSettings.find(p=> p.in_ConnectionHardwarePositioning == ConnectionHardwarePositioning && p.in_TouchLengthMin <= TouchLength && p.in_TouchLengthMax >= TouchLength && p.in_TouchWidthMin <= TouchWidth && p.in_TouchWidthMax >= TouchWidth);
	if (retEntry == undefined) {
		let Text = ConnectionHardwarePositioning + ' - ' + TouchLength + ' - ' + TouchWidth;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14024',1)
		logError(ErrorMessage.Message(Text))!;
	}
	return retEntry!;
	}


// Return Value from EdgeFrameSettings\n//########################################################
static find_EdgeFrameSettings(PartGroup:string,FrontProgram:string, FrontColor:string, AdditionalInfo1:string):ICT_tab_EdgeFrameSettings{

	// Wildcard parameters
	let WildcardParams: any = {			
		in_PartGroup: PartGroup,
		in_FrontProgram: FrontProgram,
		in_FrontColor: FrontColor,
		in_AdditionalInfo1: AdditionalInfo1
	};
	
	// Fixed parameters
	let FixedParams: any = {};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_EdgeFrameSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
    logError('Error 14025: Could not find entry in tab_EdgeFrameSettings for input values: ' + PartGroup + ' - ' + FrontProgram + ' - ' + FrontColor + ' - ' + AdditionalInfo1);
	}
	return retVal;
}


// UserExit to process the hardware for fliplifts
static ue_Fliplift(m: IFuncParents_mc_FlipliftHardware01){

	//========================================================================
	// Interfaces to create the outputs
	//========================================================================

	// Interface for the sections
	interface hardwareElement {
		Model3D?: any;
		DimX: number;
		DimY: number;
		DimZ: number;
		PosX: number;
		PosY: number;
		PosZ: number;
		ConstructionPosX: number;
		ConstructionPosY: number;
		ConstructionPosZ: number;
		ConstructionDimY: number;
		ConstructionPart: string;
		Identifier: string;
		ProcessingId: string;
		HardwareId: string;
	}

	interface addOnData {
		PushToOpen: boolean;
		Hinges: boolean;
		OpeningAngle: number;
		FlipliftHardwareType: string;
		HingeClass: string;
	}

	interface FlipliftElement {
		Direction: string; 
		Data: hardwareElement;
	}
  
	interface FlipliftInfo {
		CarcaseElements: FlipliftElement[];
		FrontElements: FlipliftElement[];
		MechanismElements: FlipliftElement[];
		AddOnData: addOnData;
	}

	// Function to set the attributes
	function setValueshardwareElement(): hardwareElement {
		let updatedSection: hardwareElement = {
			Model3D: undefined,
			DimX: 0,
			DimY: 0,
			DimZ: 0,
			PosX: 0,
			PosY: 0,
			PosZ: 0,
			ConstructionPosX: 0,
			ConstructionPosY: 0,
			ConstructionPosZ: 0,
			ConstructionDimY: 0,
			ConstructionPart: 'None',
			Identifier: 'None',
			ProcessingId: 'None',
			HardwareId: 'None',
		};
		return updatedSection;
	}

	function setValuesaddOnData(): addOnData{
		let updatedSection : addOnData = {
			PushToOpen: false,
			Hinges: false,
			OpeningAngle: 0,
			FlipliftHardwareType: "",
			HingeClass: ""
		};
		return updatedSection;
	}

	let retFlipliftInfo: FlipliftInfo = {
		CarcaseElements: [],
		FrontElements: [],
		MechanismElements: [],
		AddOnData: setValuesaddOnData()
	};

	// Variables
	let sequence: string;
	let hardwareType: string;
	let flipliftColor: string | undefined = m.mod_FlipliftHardwareColor;

	//========================================================================
	// Main code
  //========================================================================
  
  try {

    //---------------Fliplift settings--------------------------------

    const isAutomatic = m.mod_FlipliftHardwareType === 'Automatic';

    let retSettings = GlobalFunc.find_FlipliftSettings(
      m.mod_FlipliftType,
      m.mod_Width,
      m.mod_Depth,
      m.mod_Height,
      m.mod_OpeningType,
      isAutomatic ? '' : m.mod_FlipliftHardwareType,
      !isAutomatic
    );

    // Set the values
    sequence = retSettings.Sequence!;
    hardwareType = retSettings.FlipliftHardwareType!;
    retFlipliftInfo.AddOnData.Hinges = retSettings.Hinges!;
    retFlipliftInfo.AddOnData.PushToOpen = retSettings.PushToOpen!;
    retFlipliftInfo.AddOnData.FlipliftHardwareType = retSettings.FlipliftHardwareType!;

    //---------------Weight type mapping------------------------------

    let retWeightType = GlobalFunc.find_FlipliftWeightTypeMapping(m.mod_FlipliftType, hardwareType, m.mod_Height);	
    let frontWeight = m.mod_FrontpanelWeightCalculations[0] ?? 0;
    let handleWeight = (m.mod_HandleWeightCalculations[0] ?? 0) / 1000;
    let weightType: number = retWeightType.WeightType(m.mod_Height, frontWeight, handleWeight);

    //---------------Color mapping------------------------------------

    if (flipliftColor === 'Automatic') {
      flipliftColor = GlobalFunc.find_FlipliftColorMapping(m.mod_HardwareColor, hardwareType).FlipliftColor;
    }

    //---------------Hardware mapping---------------------------------

    // Process the direction
    let directionArray = retSettings.Sequence!.split("_");
    let qtyFittings = directionArray.length;

    // Check the weightType if it is per unit or per set
    if (retWeightType.CalculationType == "Single") {
      weightType = weightType / qtyFittings;
    }

    // Cycle for each side (left or right in the carcase)
    directionArray.forEach(direction => {

      // FlipliftMapping
      let retFlipliftMapping = GlobalFunc.find_FlipliftMapping(m.mod_FlipliftType, hardwareType, weightType, direction, m.mod_Height, flipliftColor!);
      retFlipliftInfo.AddOnData.HingeClass = retFlipliftMapping.HingeClass!;
      retFlipliftInfo.AddOnData.OpeningAngle = retFlipliftMapping.OpeningAngle;

      // Construction
      let ObjectMappingCon = GlobalFunc.find_FlipliftConstruction(retFlipliftMapping.ConstructionId!)

      // Carcase Elements
      // ----------------------------

      if (retFlipliftMapping.CarcaseObject && retFlipliftMapping.CarcaseObject !== "None") {

        // ObjectMapping
        let ObjectMapping = GlobalFunc.find_ObjectMapping(retFlipliftMapping.CarcaseObject!)

        // GraphicLibrary
        let retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(ObjectMapping.GraphicItem!);

        retGraphicMapping.forEach((Item) => {
          let retGraphicLib = GlobalFunc.find_GraphicLibrary(Item.Model3DGroupName!);

          // Add a new item to the output
          retFlipliftInfo.CarcaseElements.push({ Direction: direction, Data: setValueshardwareElement() });
          let lastElement = retFlipliftInfo.CarcaseElements[retFlipliftInfo.CarcaseElements.length - 1];

          // Set the values of the item
          lastElement.Data.Model3D = retGraphicLib.Model3D;
          lastElement.Data.DimX = retGraphicLib.DimensionX + retGraphicLib.PartOffsetX;
          lastElement.Data.DimY = retGraphicLib.DimensionY;
          lastElement.Data.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
          lastElement.Data.PosX = retGraphicLib.InsertionPointX + retGraphicLib.PartOffsetX;
          lastElement.Data.PosY = retGraphicLib.InsertionPointY;
          lastElement.Data.PosZ = retGraphicLib.InsertionPointZ + retGraphicLib.PartOffsetZ;
          lastElement.Data.Identifier = retGraphicLib.Identifier!;
          lastElement.Data.ConstructionPosX = 0;
          lastElement.Data.ConstructionPosY = ObjectMappingCon.CarcasePosY;
          lastElement.Data.ConstructionPosZ = ObjectMappingCon.CarcasePosZ;
          lastElement.Data.ConstructionDimY = 0;
          lastElement.Data.ConstructionPart = ObjectMappingCon.CarcaseConnection!;
          lastElement.Direction = direction;
          lastElement.Data.ProcessingId = ObjectMapping.ProcessingItem!;
          lastElement.Data.HardwareId = ObjectMapping.HardwareItem!;
        });
      }

      // Front Elements
      // ----------------------------

      if (retFlipliftMapping.FrontObject && retFlipliftMapping.FrontObject !== "None") {

        // ObjectMapping
        let ObjectMappingF = GlobalFunc.find_ObjectMapping(retFlipliftMapping.FrontObject!)

        // GraphicLibrary
        let retGraphicMappingF = GlobalFunc.find_GraphicLibraryMapping(ObjectMappingF.GraphicItem!);

        retGraphicMappingF.forEach((Item) => {
          let retGraphicLib = GlobalFunc.find_GraphicLibrary(Item.Model3DGroupName!);

          // Add a new item to the output
          retFlipliftInfo.FrontElements.push({ Direction: direction, Data: setValueshardwareElement() });
          let lastElement = retFlipliftInfo.FrontElements[retFlipliftInfo.FrontElements.length - 1];

          // Set the values of the item
          lastElement.Data.Model3D = retGraphicLib.Model3D;
          lastElement.Data.DimX = retGraphicLib.DimensionX + retGraphicLib.PartOffsetX;
          lastElement.Data.DimY = retGraphicLib.DimensionY;
          lastElement.Data.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
          lastElement.Data.PosX = retGraphicLib.InsertionPointX + retGraphicLib.PartOffsetX;
          lastElement.Data.PosY = retGraphicLib.InsertionPointY;
          lastElement.Data.PosZ = retGraphicLib.InsertionPointZ + retGraphicLib.PartOffsetZ;
          lastElement.Data.Identifier = retGraphicLib.Identifier!;
          lastElement.Data.ConstructionPosX = ObjectMappingCon.FrontPosX;
          lastElement.Data.ConstructionPosY = ObjectMappingCon.FrontPosY;
          lastElement.Data.ConstructionPosZ = 0;
          lastElement.Data.ConstructionDimY = 0;
          lastElement.Direction = direction;
          lastElement.Data.ProcessingId = ObjectMappingF.ProcessingItem!;
          lastElement.Data.HardwareId = ObjectMappingF.HardwareItem!;
        });
      }

      // Mechanism Elements
      // ----------------------------

      if (retFlipliftMapping.MechanismObject && retFlipliftMapping.MechanismObject !== "None") {

        // ObjectMapping
        let ObjectMappingM = GlobalFunc.find_ObjectMapping(retFlipliftMapping.MechanismObject!)

        // GraphicLibrary
        let retGraphicMappingM = GlobalFunc.find_GraphicLibraryMapping(ObjectMappingM.GraphicItem!);

        retGraphicMappingM.forEach((Item) => {
          let retGraphicLib = GlobalFunc.find_GraphicLibrary(Item.Model3DGroupName!);

          // Add a new item to the output
          retFlipliftInfo.MechanismElements.push({ Direction: direction, Data: setValueshardwareElement() });
          let lastElement = retFlipliftInfo.MechanismElements[retFlipliftInfo.MechanismElements.length - 1];

          // Set the values of the item
          lastElement.Data.Model3D = retGraphicLib.Model3D;
          lastElement.Data.DimX = retGraphicLib.DimensionX + retGraphicLib.PartOffsetX;
          lastElement.Data.DimY = retGraphicLib.DimensionY;
          lastElement.Data.DimZ = retGraphicLib.DimensionZ + retGraphicLib.PartOffsetZ;
          lastElement.Data.PosX = retGraphicLib.InsertionPointX + retGraphicLib.PartOffsetX;
          lastElement.Data.PosY = retGraphicLib.InsertionPointY;
          lastElement.Data.PosZ = retGraphicLib.InsertionPointZ + retGraphicLib.PartOffsetZ;
          lastElement.Data.Identifier = retGraphicLib.Identifier!;
          lastElement.Data.ConstructionPosX = ObjectMappingCon.MechanismPosX;
          lastElement.Data.ConstructionPosY = ObjectMappingCon.MechanismPosY;
          lastElement.Data.ConstructionPosZ = ObjectMappingCon.MechanismPosZ;
          lastElement.Data.ConstructionDimY = ObjectMappingCon.MechanismDimY;
          lastElement.Direction = direction;
          lastElement.Data.ProcessingId = ObjectMappingM.ProcessingItem!;
          lastElement.Data.HardwareId = ObjectMappingM.HardwareItem!;
        });
      }
    });
    
    //---------------Return data to the module------------------------

    return retFlipliftInfo;

  }
  catch{			
    // The messages are shown from the functions (Not needed here)
    return undefined;
  }
}


// Process BOM for wood frame fronts made of boards
static process_PanelWoodFrameBom(Elem: any, part: any, parentId: string){

  try {

    //====================================================================
    // Main Section
    //====================================================================

    //---------------Get data from tabble BoardMapping-----------------
    let BoardMappingTop = GlobalFunc.find_BoardMapping(part.pa_TopColor!, part._dimz)!;
    let BoardMappingBtm = GlobalFunc.find_BoardMapping(part.pa_BtmColor!, part._dimz)!;

    //---------------Get data from table BoardLibrary-----------------
    let BoardLibraryTop = GlobalFunc.find_BoardLibrary(BoardMappingTop.BoardId!)!;
    let BoardLibraryBtm = GlobalFunc.find_BoardLibrary(BoardMappingBtm.BoardId!)!;
    let BoardLibraryFilling: any;

    if (part.pa_FrameFillingMaterial != 'Glass') {
      let BoardMappingFilling = GlobalFunc.find_BoardMapping(part.pa_FrameFillingWoodColor, part.pa_FrameFillingThk)!;
      BoardLibraryFilling = GlobalFunc.find_BoardLibrary(BoardMappingFilling.BoardId!)!;
    }

    //---------------Get data from table GrainDirection-----------------
    let GrainVert = GlobalFunc.find_GrainDirection('PanelWoodFrameVert', BoardLibraryTop.Grain!).GrainDirection!;
    let GrainHor = GlobalFunc.find_GrainDirection('PanelWoodFrameHor', BoardLibraryTop.Grain!).GrainDirection!;
    let GrainFilling = GlobalFunc.find_GrainDirection('PanelWoodFrameFilling', BoardLibraryTop.Grain!).GrainDirection!;

    //---------------Parts length calculation------------------------
    let lenHgt = part._dimy;
    let lenWdt = part._dimx;

    if (part.pa_PanelWoodFrameType == "HeightCoveredWidth") {
      lenWdt = part._dimx - (2 * part.pa_FramePartsWidthVert);
    }
    else if (part.pa_PanelWoodFrameType == "WidthCoveredHeight") {
      lenHgt = part._dimy - (2 * part.pa_FramePartsWidthHor);
    }

    //---------------vertical Parts----------------------------------
    addBomBoard(
      "part_PanelWoodFrameLeft",
      lenHgt,
      2 * part.pa_FramePartsWidthVert + part.g.basic_DoubleCutDimension,
      part._dimz,
      part.pa_PanelWoodFrameType,
      part.pa_FramePartsWidthVert,
      BoardLibraryTop,
      GrainVert
    );

    //---------------horizontal Parts--------------------------------
    addBomBoard(
      "part_PanelWoodFrameTop",
      lenWdt,
      2 * part.pa_FramePartsWidthHor + part.g.basic_DoubleCutDimension,
      part._dimz,
      part.pa_PanelWoodFrameType,
      part.pa_FramePartsWidthVert,
      BoardLibraryTop,
      GrainHor
    );

    //---------------Filling-----------------------------------------
    if (part.pa_FrameFillingMaterial != 'Glass') {
      addBomBoard(
        "part_PanelWoodFrameFilling",
        part._dimy - 2 * part.pa_FramePartsWidthHor + 2 * (part.g.basic_FramePanelGrooveDepth - part.g.basic_FillingGrooveGap),
        part._dimx - 2 * part.pa_FramePartsWidthVert + 2 * (part.g.basic_FramePanelGrooveDepth - part.g.basic_FillingGrooveGap),
        part._dimz,
        part.pa_PanelWoodFrameType,
        part.pa_FramePartsWidthVert,
        BoardLibraryFilling,
        GrainFilling
      );
    }

    else {
      addHardware("part_PanelWoodFrameFilling");
    }

    //====================================================================
    // Function to insert the panels
    //====================================================================

    function addBomBoard(partName: string, dimX: number, dimY: number, thk: number, frameType: string, frameWidth: string, BoardLibrary: any, Grain: string) {

      let FramePartsVert = Elem.addbomout_Board();

      //---------------Get data from table PartSettings-----------------
      let PartSettings = GlobalFunc.find_PartSettings(partName, part.pa_AdditionalInfo1);

      //---------------Get data from table EdgeFrameSettingsSettings-----------------
      let EdgeFrameSettings = GlobalFunc.find_EdgeFrameSettings(PartSettings.PartGroup!, part.pa_Program, part.pa_TopColor, 'All');

      //---------------Get data from Edges-----------------
      let EdgeData = GlobalFunc.process_EdgeInfo(part._partId, part._dimz, part.pa_EdgeFrontColor, part.pa_EdgeFrontColor, part.pa_EdgeFrontColor, part.pa_EdgeFrontColor, EdgeFrameSettings.EdgeFrontType!, EdgeFrameSettings.EdgeLeftType!,
        EdgeFrameSettings.EdgeBackType!, EdgeFrameSettings.EdgeRightType!, EdgeFrameSettings.EdgeJointType!, part.pa_AdditionalInfo1)!;

      // Get EdgeThickness
      let EdgeFrontThk = EdgeData.EdgeFrontData ? EdgeData.EdgeFrontData.Thickness || 0 : 0;
      let EdgeBackThk = EdgeData.EdgeBackData ? EdgeData.EdgeBackData.Thickness || 0 : 0;
      let EdgeLeftThk = EdgeData.EdgeLeftData ? EdgeData.EdgeLeftData.Thickness || 0 : 0;
      let EdgeRightThk = EdgeData.EdgeRightData ? EdgeData.EdgeRightData.Thickness || 0 : 0;

      FramePartsVert.bom_Type = part._partId;
      FramePartsVert.bom_Name = PartSettings.BomPartDescription;
      FramePartsVert.bom_Material = BoardLibrary.MaterialCode!;
      FramePartsVert.bom_PartId = part._id;
      FramePartsVert.bom_ArticleGroup = PartSettings.BomArticleGroup;
      FramePartsVert.bom_Route = "FrameConstruction";
      FramePartsVert.bom_ElementCategory = "";
      FramePartsVert.bom_ElementType = "Board";

      FramePartsVert.bom_Length = dimX;
      FramePartsVert.bom_Width = dimY;
      FramePartsVert.bom_Finalthk = thk;
      FramePartsVert.bom_GrainOrientation = Grain;
      FramePartsVert.bom_CutDimLength1 = dimX - EdgeLeftThk + EdgeData.OverdimensionFront - EdgeRightThk + EdgeData.OverdimensionBack;;
      FramePartsVert.bom_CutDimWidth1 = dimY - EdgeFrontThk + EdgeData.OverdimensionFront - EdgeBackThk + EdgeData.OverdimensionBack;;
      FramePartsVert.bom_CutDimLength2 = 0;
      FramePartsVert.bom_CutDimWidth2 = 0;

      FramePartsVert.bom_EdgeFront = EdgeData.EdgeFrontCode;
      FramePartsVert.bom_EdgeLeft = EdgeData.EdgeLeftCode;
      FramePartsVert.bom_EdgeBack = EdgeData.EdgeBackCode;
      FramePartsVert.bom_EdgeRight = EdgeData.EdgeRightCode;
      FramePartsVert.bom_EdgeJointFrontLeft = EdgeData.EdgeJointFrontLeft;
      FramePartsVert.bom_EdgeJointLeftBack = EdgeData.EdgeJointLeftBack;
      FramePartsVert.bom_EdgeJointBackRight = EdgeData.EdgeJointBackRight;
      FramePartsVert.bom_EdgeJointRightFront = EdgeData.EdgeJointRightFront;
      FramePartsVert.bom_EdgeShape = EdgeData.EdgeShape;
      FramePartsVert.bom_EdgeTransition = EdgeData.EdgeTransition;

      FramePartsVert.bom_BoardType = BoardLibrary.BoardType!;
      FramePartsVert.bom_ExtraInfo1 = "FrameType: " + '  ' + frameType;
      FramePartsVert.bom_ExtraInfo2 = "FrameWidth: " + '  ' + frameWidth;
      FramePartsVert.bom_ExtraInfo3
      FramePartsVert.bom_ElementId = part._id;
      FramePartsVert.bom_ParentId = parentId;
    }

    //====================================================================
    // Function to insert hardware (Glasselements)
    //====================================================================

    function addHardware(partName: string) {

      //---------------Get data from table PartSettings-----------------
      let PartSettings = GlobalFunc.find_PartSettings(partName, part.pa_AdditionalInfo1);

      let FrameFilling = Elem.addbomout_Hardware();

      FrameFilling.bom_Type = part._partId;
      FrameFilling.bom_Name = PartSettings.BomPartDescription;
      FrameFilling.bom_PartId = part._id;
      //FrameFilling.bom_Route = "FrameConstruction";
      FrameFilling.bom_ElementCategory = "";
      FrameFilling.bom_ElementType = "Hardware";

      FrameFilling.bom_Length = part._dimx - 2 * part.pa_FramePartsWidthVert + 2 * (part.g.basic_FramePanelGrooveDepth - part.g.basic_FillingGrooveGap);
      FrameFilling.bom_Width = part._dimy - 2 * part.pa_FramePartsWidthHor + 2 * (part.g.basic_FramePanelGrooveDepth - part.g.basic_FillingGrooveGap);
      FrameFilling.bom_Thk = part.pa_FrameFillingThk;
      FrameFilling.bom_Description1 = part.pa_FrameFillingMaterial;
      FrameFilling.bom_Description2 = part.pa_FrontGlassColor;

      FrameFilling.bom_ExtraInfo1
      FrameFilling.bom_ExtraInfo2
      FrameFilling.bom_ExtraInfo3
      FrameFilling.bom_ElementId = part._id;
      FrameFilling.bom_ParentId = parentId;
    }
  }

  //====================================================================
  // Handle the errors
  //====================================================================

  catch (error: any) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 40003', 1);
    logError(ErrorMessage.Message(error.message));
  }
}


// Show Graphic of the drillings inside the framed fronts
static process_FrameFrontGraphicDrilling(elem: any, partSelf: any){

  let DrillHor = elem.addncout_DrillHor();
  DrillHor.nc_DrawingRelevant = false;
  DrillHor.nc_MprRelevant = false;

  //###############################################################################################################
  // Query tables
  //###############################################################################################################

  //Variables
  let FrameWidth = partSelf.pa_PanelWoodFrameType == "HeightCoveredWidth" ? partSelf.pa_FramePartsWidthHor : partSelf.pa_FramePartsWidthVert;

  //Get data from table PartSettings
  let PartSettings = GlobalFunc.find_PartSettings(partSelf._partId, partSelf.pa_AdditionalInfo1);

  // Find parts and Connection
  let FramePartConnection = GlobalFunc.find_FramePartConnectionMapping(PartSettings.PartGroup!, partSelf.pa_TypeElement, partSelf.pa_Program, partSelf._dimz);

  let PartConnection = GlobalFunc.find_PartConnectionSettings(FramePartConnection.ConnectionHardwarePositioning!, FrameWidth!, partSelf._dimz);

  let Object = GlobalFunc.find_ObjectMapping(FramePartConnection.Object!);

  //###############################################################################################################
  // Frame Type Height Covered Width
  //###############################################################################################################

  if (partSelf.pa_PanelWoodFrameType == 'HeightCoveredWidth') {

    let ProcItem = GlobalFunc.find_ProcessingMapping(Object.ProcessingItem!);
    ProcItem.forEach(Processing => {
      let DrillData = GlobalFunc.find_HardwareDrillHorLibrary(Processing.ProcessingId!, "FramePart");
      DrillData.forEach(Drill => {

        // Variables
        let wdtVert = partSelf.pa_FramePartsWidthVert;
        let wdtHor = partSelf.pa_FramePartsWidthHor;
        let drillDptFull = Drill.TI;
        let drillDpt = drillDptFull / 2;
        let drillDia = Drill.DU;
        let descr = PartConnection.LengthDescriptor!;
        let descrZ = PartConnection.WidthDescriptor!;

        // Connection points for each corner
        let ConnectionPoints: [number, number, string][] = [
          [wdtVert - drillDpt, 0, "btm"],
          [partSelf._dimx - wdtVert - drillDpt, 0, "btm"],
          [partSelf._dimx - wdtVert - drillDpt, partSelf._dimy, "top"],
          [wdtVert - drillDpt, partSelf._dimy, "top"],
        ]

        // process the descriptor
        let positions = GlobalFunc.process_Descriptor(descr, wdtHor)
        let positionsZ = GlobalFunc.process_Descriptor(descrZ, partSelf._dimz)

        // create the drawing (for each descriptor position and positionZ)
        positions.forEach(position => {
          positionsZ.forEach(positionZ => {

            // for each corner
            ConnectionPoints.forEach(([x, y, situation]) => {

              let posY = situation == "btm" ? y + position : y - position;
              let drilling01 = partSelf.add3DElement('Drilling01', DrillHor, x, posY, positionZ, drillDptFull, drillDia, drillDia);
              drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drillDia / 2 + '" /></svg>', 'x');
            });
          });
        });
      });
    });
  }

  //###############################################################################################################
  // Frame Type Width Covered Height
  //###############################################################################################################

  else if (partSelf.pa_PanelWoodFrameType == 'WidthCoveredHeight') {

    let ProcItem = GlobalFunc.find_ProcessingMapping(Object.ProcessingItem!);
    ProcItem.forEach(Processing => {
      let DrillData = GlobalFunc.find_HardwareDrillHorLibrary(Processing.ProcessingId!, "FramePart");
      DrillData.forEach(Drill => {

        // Variables
        let wdtVert = partSelf.pa_FramePartsWidthVert;
        let wdtHor = partSelf.pa_FramePartsWidthHor;
        let drillDptFull = Drill.TI;
        let drillDpt = drillDptFull / 2;
        let drillDia = Drill.DU;
        let descr = PartConnection.LengthDescriptor!;
        let descrZ = PartConnection.WidthDescriptor!;

        // Connection points for each corner
        let ConnectionPoints: [number, number, string][] = [
          [0, wdtHor - drillDpt, "left"],
          [partSelf._dimx, wdtHor - drillDpt, "right"],
          [partSelf._dimx, partSelf._dimy - wdtHor - drillDpt, "right"],
          [0, partSelf._dimy - wdtHor - drillDpt, "left"],
        ]

        // process the descriptor
        let positions = GlobalFunc.process_Descriptor(descr, wdtVert)
        let positionsZ = GlobalFunc.process_Descriptor(descrZ, partSelf._dimz)

        // create the drawing (for each descriptor position and positionZ)
        positions.forEach(position => {
          positionsZ.forEach(positionZ => {

            // for each corner
            ConnectionPoints.forEach(([x, y, situation]) => {

              let posX = situation == "left" ? x + position : x - position;
              let drilling01 = partSelf.add3DElement('Drilling01', DrillHor, posX, y, positionZ, drillDia, drillDptFull, drillDia);
              drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drillDia / 2 + '" /></svg>', 'y');
            });
          });
        });
      });
    });
  }

  //###############################################################################################################
  // Frame Type Mitre
  //###############################################################################################################

  else if (partSelf.pa_PanelWoodFrameType == 'Mitre') {

    let ProcItem = GlobalFunc.find_ProcessingMapping(Object.ProcessingItem!);
    ProcItem.forEach(Processing => {
      let DrillData = GlobalFunc.find_HardwareDrillHorLibrary(Processing.ProcessingId!, "FramePart");
      DrillData.forEach(Drill => {

        // Variables
        let wdtVert = partSelf.pa_FramePartsWidthVert;
        let wdtHor = partSelf.pa_FramePartsWidthHor;
        let drillDptFull = Drill.TI;
        let drillDpt = drillDptFull / 2;
        let drillDia = Drill.DU;
        let descr = PartConnection.LengthDescriptor!;
        let descrZ = PartConnection.WidthDescriptor!;

        // Connection points for each corner
        let ConnectionPoints: [number, number, string, string, number][] = [
          [wdtHor, wdtHor, "left", "bottom", 225],
          [partSelf._dimx - wdtHor, wdtHor, "right", "bottom", 135],
          [partSelf._dimx - wdtHor, partSelf._dimy - wdtHor, "right", "top", 45],
          [wdtHor, partSelf._dimy - wdtHor, "left", "top", 315],
        ]

        // process the descriptor
        let positions = GlobalFunc.process_Descriptor(descr, wdtVert)
        let positionsZ = GlobalFunc.process_Descriptor(descrZ, partSelf._dimz)

        // create the drawing (for each descriptor position and positionZ)
        positions.forEach(position => {
          positionsZ.forEach(positionZ => {

            // for each corner
            ConnectionPoints.forEach(([x, y, situation, situation2, angle]) => {

              let distance = drillDpt / Math.sqrt(2);
              let posX = situation == "left" ? x - position - distance : x + position + distance;
              let posY = situation2 == "top" ? y + position - distance : y - position + distance;

              let drilling01 = partSelf.add3DElement('Drilling01', DrillHor, posX, posY, positionZ, drillDia, drillDptFull, drillDia);
              drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drillDia / 2 + '" /></svg>', 'y');
              let partMatrix = PartHelper.rotateZ(drilling01, angle, new Vector3(0, 0, 0));
              drilling01.setMatrix(partMatrix);
            });
          });
        });
      });
    });
  }
}


static process_StorageunitShelftopConstruction(m: IFuncParents_mc_Storageunit01, lastBwCon: string = 'None', lastBwPos: number = 0) {

	// Interface to provide the data to the carcase
	//-------------------------------------------------------------------------------------

	interface ShelfTopInfo {
		BwTop: number;          // Manage backwall height
		SpaceTop: number,       // Define the end position of the freespace in height
		SpaceBack: number,      // Define the starting position of the freespace at the last front element
		TopPosBack: number;     // Define back side position of the top shelf (fixed shelf starting position)
		TopPosFront: number;    // Frontposition of the top shelf (free space calculation)
		TopPart: string;        // Name of the construction part (provided in the parts list for fittings like push to open)
		Height: number;
		Width: number;
		Depth: number;
		WidthPos: number;
		HeightPos: number;
		DepthPos: number;
	}

	// Initialisierung mit Default-Werten (z.B. 0)
	let shelfTopInfo: ShelfTopInfo = {
		BwTop: 0,
		SpaceTop: 0,
		SpaceBack: 0,
		TopPosBack: 0,
		TopPosFront: 0,
		TopPart: 'None',
		Height: 0,
		Width: 0,
		Depth: 0,
		WidthPos: 0,
		HeightPos: 0,
		DepthPos: 0
	};

	// Variables
	//-------------------------------------------------------------------------------------

	let moduleName = 'mc_Storageunit01'
	let tmpBwTop = m.mod_CarcaseHeight;
	let tmpTopPosBack = 0;
	let tmpSpaceTop = 0;
	let tmpSpaceBack = lastBwPos;
	let tmpTopPosFront = m.mod_CarcaseDepth;
	let tmpBwPartTop = 'n.a.';
	let tmpAdditionalInfo01: string = m.mod_SlopeAngle === 0 ? 'All' : 'SlopedCeiling';
	let frontHeight = m.mod_LastFrontHeight;
	let shelftopModule: any;
	let retTop: any;

	// Query the settings table to get the modules to insert
	//-------------------------------------------------------------------------------------

	let additionalInfo = m.mod_FingergripTop ? 'Fingergrip' : 'All';
	let retShelves = GlobalFunc.find_CarcaseShelftopSettings(moduleName, m.mod_CarcaseShelftopConstruction, additionalInfo);
	
	retShelves.forEach(elem => {

		//##########################################################################################
		// Library solution
		//##########################################################################################

		if (elem.LibrarySolution) {

			// Reset the value of front height for each iteration
			frontHeight = m.mod_LastFrontHeight - m.mod_FingergripType_matrix.LShapeHeight!;
			let correction = 0;

			//==========================================================================================
			// CarcaseShelftop01 (Shelftop, Rails)
			//==========================================================================================

			if (elem.UsedModule == "mc_CarcaseShelftop01") {

				// Calculation of the part settings
				//-------------------------------------------------------------------------------------

				// Get CarcaseBackwallSettings to use as PartBack in CCK_StorageUnit
				let ccKBw = GlobalFunc.find_CarcaseBackwallSettings(lastBwCon)!;

				// Check the situation on the frontside and backside of the cabinet
				let partBack = 'n.a.';
				let partFront = 'n.a.';

				// Backside of the carcase
				if (elem.BacksideRelevant) {
					if (elem.Construction == "RailBackVertical") {
						if (m.g.basic_RailverttopbackPosition == "BehindBackwall") {
							if (m.g.basic_RailverttopbackThk > lastBwPos - m.mod_BackwallThk) {
								partBack = ccKBw.RailVertBackInFrontBackwall!;
							}
							else {
								partBack = ccKBw.RailVertBackBehindBackwall!;
							}
						}
						else {
							partBack = ccKBw.RailVertBackInFrontBackwall!;
						}
					}
					else {
						partBack = ccKBw.ConstructionBackwallTop!;
					}
					tmpBwPartTop = elem.Construction!;
				}

				// Frontside of the carcase
				if (elem.FrontsideRelevant) {
					if (elem.Construction == "RailFrontVertical") {
						correction = m.mod_FingergripType_matrix.LShapeHeight!;
					}
					if (elem.Construction == "RailFrontVertical" && m.mod_LastFrontName == 'fixedfront') {
						if (elem.HobMoveRelevant && m.g.basic_RailverttopfrontOversize) {
							partFront = "FixedfrontHs";
						}
						else if (m.g.basic_RailverttopfrontOversize) {
							partFront = "Fixedfront";
						}
						else if (m.mod_FingergripTop) {
							partFront = "Fingergrip";
						}
						else {
							partFront = "Overlayed";
						}
					}
					else if (m.mod_FingergripTop) {
						partFront = "Fingergrip";
						if (m.mod_LastFrontName == "door") {
							frontHeight = m.g.basic_RailverttopfrontHeight;
						}
					}
					else {
						frontHeight = m.g.basic_HeatshelfFrontHeightMinimum;
						partFront = "Overlayed";
					}
				}

				// Vertical Rail on backside of the cabinet (hob solution)
				else if (elem.Construction == "RailBackVertical" && elem.HobMoveRelevant) {
					if (m.mod_LastFrontName == 'fixedfront' && m.mod_LastFrontHeight >= m.mod_HobHeightBlockedSpace) {
						frontHeight = m.mod_LastFrontHeight;
						partFront = "FixedfrontHs";
					}
					else if (m.mod_HobHeightBlockedSpace > m.g.basic_HeatshelfFrontHeightMinimum) {
						frontHeight = m.mod_HobHeightBlockedSpace;
						partFront = "Overlayed";
					}
					else if (m.mod_FingergripTop) {
						frontHeight = m.mod_FingergripType_matrix.LShapeHeight!;
						partFront = "Overlayed";
					}
					else {
						frontHeight = m.g.basic_HeatshelfFrontHeightMinimum;
						partFront = "Overlayed";
					}
				}

				// Get StorageunitConstruction
				//-------------------------------------------------------------------------------------

				retTop = GlobalFunc.find_StorageunitConstruction(
					elem.ConstructionTablePartName!,
					m.mod_CarcaseConnectionLeftTop,
					m.mod_CarcaseConnectionLeftBtm,
					m.mod_CarcaseConnectionRightBtm,
					m.mod_CarcaseConnectionRightTop,
					partBack,
					partFront,
					m.mod_CarcaseVisTop,
					tmpAdditionalInfo01
				);

				// Height position
				let hgtPos = retTop.HeightPos(m, frontHeight);

				// Adjustment of the SpaceTop
				if (elem.FrontsideRelevant && tmpSpaceTop > hgtPos || tmpSpaceTop == 0) {
					tmpSpaceTop = hgtPos;
				}

				// Adjustment of the SpaceBack
				if (elem.Construction == "RailBackVertical" && tmpSpaceBack < retTop.DepthPos(m, lastBwPos) + retTop.Depth(m, lastBwPos)) {
					tmpSpaceBack = retTop.DepthPos(m, lastBwPos) + retTop.Depth(m, lastBwPos);
				}

				// Add the module
				//-------------------------------------------------------------------------------------
				if (elem.InsertModule) {

					shelftopModule = m.addOD_M_mc_StorageunitShelftop01();	
					// Set values to the attributes of the child
					shelftopModule.mod_Height = retTop.Height(m, frontHeight);
					shelftopModule.mod_Width = retTop.Width(m, lastBwPos);
					shelftopModule.mod_Depth = retTop.Depth(m, lastBwPos);
					shelftopModule.mod_ShelftopConstruction = elem.Construction!;
					shelftopModule.mod_PartInfo = elem.ConstructionTablePartName!;
					shelftopModule.mod_EdgeFrontType = retTop.EdgeTypeFront!;
					shelftopModule.mod_EdgeLeftType = retTop.EdgeTypeLeft!;
					shelftopModule.mod_EdgeBackType = retTop.EdgeTypeBack!;
					shelftopModule.mod_EdgeRightType = retTop.EdgeTypeRight!;
					shelftopModule.mod_EdgeJointType = retTop.EdgeJointType;

					// setOrigin
					shelftopModule.setOrigin(retTop.WidthPos(m, lastBwPos), hgtPos - correction, retTop.DepthPos(m, lastBwPos));
				
				}

				// Validate DepthPosition
				let depthPosition = retTop.DepthPos(m, lastBwPos);
				if (depthPosition < 0) {
					logError(GlobalFunc.find_ErrorList('Error 22027', 1).Message(elem.ConstructionTablePartName!));
				}

				// Define front side position of the top shelf (to calculate the free space)
				if (elem.FrontsideRelevant) {
					tmpTopPosFront = (m.mod_FingergripTop) ? m.mod_CarcaseDepth : retTop.Depth(m, lastBwPos) + retTop.DepthPos(m, lastBwPos);
				}

				if (elem.BacksideRelevant && tmpBwPartTop != "n.a.") {

					// Define back side position of the top shelf
					tmpTopPosBack = (ccKBw.ConstructionBackwallTop != "Overlayed") ? -10 : retTop.DepthPos(m, lastBwPos);

					// Define backwall topside position relative to TopShelf (to calculate backwall height)
					tmpBwTop = hgtPos;
				}
			}

			//==========================================================================================
			// CarcaseShelftop02 (Heatshelf)
			//==========================================================================================

			if (elem.UsedModule == "mc_CarcaseShelftop02") {

				// Calculations for the insertion height
				//-------------------------------------------------------------------------------------

				let hgtPosHs = m.g.basic_HeatshelfFrontHeightMinimum;
				let partBack = 'Overlayed';
				let partFront = 'Overlayed';

				// Fixed front height
				if (m.mod_LastFrontName == 'fixedfront' && m.mod_LastFrontHeight >= m.mod_HobHeightBlockedSpace) {
					hgtPosHs = m.mod_LastFrontHeight;
				}

				// Blocked area
				else if (m.mod_HobHeightBlockedSpace > m.g.basic_HeatshelfFrontHeightMinimum) {
					hgtPosHs = m.mod_HobHeightBlockedSpace;
				}

				// Fingergrip
				else if (m.mod_FingergripTop) {
					hgtPosHs = m.mod_FingergripType_matrix.LShapeHeight!;
				}

				// To get table entry for fixed front / fingergrip / removable heat shelf
				if (elem.Construction == "Heatshelf" && m.mod_LastFrontName == 'fixedfront' && m.mod_LastFrontHeight >= m.mod_HobHeightBlockedSpace && m.g.basic_RailverttopfrontOversize) {
					partFront = "Fixedfront";
				}
				else {
					partFront = m.mod_FingergripTop == true ? 'Fingergrip' : 'Overlayed';
				}

				// Get StorageunitConstruction
				//-------------------------------------------------------------------------------------

				retTop = GlobalFunc.find_StorageunitConstruction(
					elem.ConstructionTablePartName!,
					m.mod_CarcaseConnectionLeftTop,
					m.mod_CarcaseConnectionLeftBtm,
					m.mod_CarcaseConnectionRightBtm,
					m.mod_CarcaseConnectionRightTop,
					partBack,
					partFront,
					m.mod_CarcaseVisTop,
					tmpAdditionalInfo01
				);

				// Height position
				let hgtPos = retTop.HeightPos(m, hgtPosHs);

				// Adjustment of the SpaceTop
				if (elem.Construction == "Heatshelf") {
					tmpSpaceTop = hgtPos;
				}

				// Add the module
				//-------------------------------------------------------------------------------------
				if (elem.InsertModule) {
					shelftopModule = m.addOD_M_mc_StorageunitShelftop02();

					// Set values to the attributes of the child
					shelftopModule.mod_Height = retTop.Height(m, hgtPosHs);
					shelftopModule.mod_Width = retTop.Width(m, lastBwPos);
					shelftopModule.mod_Depth = retTop.Depth(m, tmpSpaceBack);
					shelftopModule.mod_ShelftopConstruction = elem.Construction!;
					shelftopModule.mod_PartInfo = elem.ConstructionTablePartName!;
					shelftopModule.mod_EdgeFrontType = retTop.EdgeTypeFront!;
					shelftopModule.mod_EdgeLeftType = retTop.EdgeTypeLeft!;
					shelftopModule.mod_EdgeBackType = retTop.EdgeTypeBack!;
					shelftopModule.mod_EdgeRightType = retTop.EdgeTypeRight!;
					shelftopModule.mod_EdgeJointType = retTop.EdgeJointType;

					// setOrigin
					shelftopModule.setOrigin(retTop.WidthPos(m, lastBwPos), hgtPos, retTop.DepthPos(m, tmpSpaceBack));
				}
			}

			//==========================================================================================
			// CarcaseShelftop03 (Fittings for Frontconnection)
			//==========================================================================================

			if (elem.UsedModule == "mc_CarcaseShelftop03") {

				// Add the module
				//-------------------------------------------------------------------------------------
				if (elem.InsertModule) {
					shelftopModule = m.addOD_M_mc_StorageunitShelftop03();

					// Set values to the attributes of the child
					shelftopModule.mod_ShelftopConstruction = elem.Construction!;
					shelftopModule.mod_PartInfo = elem.ConstructionTablePartName!;
				}
			}

			//==========================================================================================
			// CarcaseShelftop04 (Sloped Cabinet)
			//==========================================================================================

			if (elem.UsedModule == "mc_CarcaseShelftop04") {

				// Calculation of the part settings
				//-------------------------------------------------------------------------------------

				// Get CarcaseBackwallSettings to use as PartBack in CCK_StorageUnit
				let ccKBw = GlobalFunc.find_CarcaseBackwallSettings(lastBwCon)!;

				// Check the situation on the frontside and backside of the cabinet
				let partBack = 'n.a.';
				let partFront = 'n.a.';

				// Backside of the carcase
				if (elem.BacksideRelevant) {
					if (m.mod_SlopeAngle != 0) {
						// Read Settings table
						let slopedCeilingSettings = GlobalFunc.find_SlopedCeilingSettings(m.mod_SlopedCeilingConstruction!);
						if (elem.ConstructionTablePartName == "part_SlopedCeilingShelftopHor") {
							partBack = slopedCeilingSettings.ShelftopHor_PartBack!;
						}
						else if (elem.ConstructionTablePartName == "part_SlopedCeilingShelftopAngle") {
							partBack = slopedCeilingSettings.ShelftopAngle_PartBack!;
						}
					}
					tmpBwPartTop = elem.Construction!;
				}

				// Frontside of the carcase
				if (elem.FrontsideRelevant) {
					if (m.mod_SlopeAngle != 0) {
						// Read Settings table
						let slopedCeilingSettings = GlobalFunc.find_SlopedCeilingSettings(m.mod_SlopedCeilingConstruction!);
						if (elem.ConstructionTablePartName == "part_SlopedCeilingShelftopAngle") {
							partFront = slopedCeilingSettings.ShelftopAngle_PartFront!;
						}
						else if (m.mod_FingergripTop) {
							partFront = "Fingergrip";
						}
						else {
							partFront = "Overlayed";
						}
					}
				}


				// Get StorageunitConstruction
				//-------------------------------------------------------------------------------------

				retTop = GlobalFunc.find_StorageunitConstruction(
					elem.ConstructionTablePartName!,
					m.mod_CarcaseConnectionLeftTop,
					m.mod_CarcaseConnectionLeftBtm,
					m.mod_CarcaseConnectionRightBtm,
					m.mod_CarcaseConnectionRightTop,
					partBack,
					partFront,
					m.mod_CarcaseVisTop,
					tmpAdditionalInfo01
				);

				// Height position
				let hgtPos = retTop.HeightPos(m, frontHeight);

				// Adjustment of the SpaceTop
				if (elem.FrontsideRelevant && tmpSpaceTop > hgtPos || tmpSpaceTop == 0) {
					tmpSpaceTop = hgtPos;
				}

				// Add the module
				//-------------------------------------------------------------------------------------
				
				if (elem.InsertModule) {
					
					shelftopModule = m.addOD_M_mc_StorageunitShelftop04();

					// Set values to the attributes of the child
					shelftopModule.mod_Height = retTop.Height(m, frontHeight);
					shelftopModule.mod_Width = retTop.Width(m, lastBwPos);
					shelftopModule.mod_Depth = retTop.Depth(m, lastBwPos);
					shelftopModule.mod_ShelftopConstruction = elem.Construction!;
					shelftopModule.mod_PartInfo = elem.ConstructionTablePartName!;
					shelftopModule.mod_EdgeFrontType = retTop.EdgeTypeFront!;
					shelftopModule.mod_EdgeLeftType = retTop.EdgeTypeLeft!;
					shelftopModule.mod_EdgeBackType = retTop.EdgeTypeBack!;
					shelftopModule.mod_EdgeRightType = retTop.EdgeTypeRight!;
					shelftopModule.mod_EdgeJointType = retTop.EdgeJointType;

					// setOrigin
					shelftopModule.setOrigin(retTop.WidthPos(m, lastBwPos), hgtPos - correction, retTop.DepthPos(m, lastBwPos));
						
				}

				// Validate DepthPosition
				let depthPosition = retTop.DepthPos(m, lastBwPos);
				if (depthPosition < 0) {
					logError(GlobalFunc.find_ErrorList('Error 22027', 1).Message(elem.ConstructionTablePartName!));
				}

				// Define front side position of the top shelf (to calculate the free space)
				if (elem.FrontsideRelevant) {
					tmpTopPosFront = (m.mod_FingergripTop) ? m.mod_CarcaseDepth : retTop.Depth(m, lastBwPos) + retTop.DepthPos(m, lastBwPos);
				}

				if (elem.BacksideRelevant && tmpBwPartTop != "n.a.") {

					// Define back side position of the top shelf
					tmpTopPosBack = (ccKBw.ConstructionBackwallTop != "Overlayed") ? -10 : retTop.DepthPos(m, lastBwPos);

					// Define backwall topside position relative to TopShelf (to calculate backwall height)
					tmpBwTop = hgtPos;
				}
			}
		}

		//##########################################################################################
		// Custom solutions (User Exit)
		//##########################################################################################

		else {


		}
	})

	//##########################################################################################
	// Return the needed data to the carcase
	//##########################################################################################

	shelfTopInfo.BwTop = tmpBwTop;
	shelfTopInfo.SpaceTop = tmpSpaceTop;
	shelfTopInfo.SpaceBack = tmpSpaceBack;
	shelfTopInfo.TopPosBack = tmpTopPosBack;
	shelfTopInfo.TopPosFront = tmpTopPosFront;
	shelfTopInfo.TopPart = tmpBwPartTop;

	shelfTopInfo.Height = retTop.Height(m, lastBwPos);
	shelfTopInfo.Width = retTop.Width(m, lastBwPos);
	shelfTopInfo.Depth = retTop.Depth(m, lastBwPos);
	shelfTopInfo.WidthPos = retTop.WidthPos(m, lastBwPos);
	shelfTopInfo.HeightPos = retTop.HeightPos(m, lastBwPos);
	shelfTopInfo.DepthPos = retTop.DepthPos(m, lastBwPos);

	return JSON.stringify(shelfTopInfo);

}


static find_MaterialMapping(color: string): ICT_tab_MaterialMapping | undefined {

  let retEntry = ct_tab_MaterialMapping.find(p => p.in_ColorId === color);

  // Error handling
  if (retEntry === undefined) {
    const ErrorMessage = GlobalFunc.find_ErrorList('Error 13023', 1);
    logError(ErrorMessage.Message(color));
    retEntry = ct_tab_MaterialMapping.find(p => p.in_ColorId === 'Error');
    return undefined;
  }

  return retEntry;
}


static find_CarcaseShelftopSettings(ModuleName: string, ShelftopConstruction: string, AdditionalInfo1: string = 'All'): ICT_tab_CarcaseShelftopSettings[]{

  let retEntry = ct_tab_CarcaseShelftopSettings.filter(p => p.in_ModuleName == ModuleName && p.in_ShelfTopConstruction == ShelftopConstruction && p.in_AdditionalInfo1 == AdditionalInfo1)!;

  if (retEntry == undefined || retEntry.length == 0) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14026', 1)
    logError(ErrorMessage.Message(ModuleName + " - " + ShelftopConstruction + " - " + AdditionalInfo1));
  }
  return retEntry!;

}


static process_HardwareColor(hardwareId: string) {

  let retHardwareColor: string | undefined;

  let retHardwareMapping = GlobalFunc.find_HardwareLibraryMapping(hardwareId);
  if (retHardwareMapping) {
    retHardwareMapping.forEach(item => {
      retHardwareColor = GlobalFunc.find_HardwareLibrary(item.SupplierArticleNumber!, item.Supplier!).Color;
    });  
  }

  return retHardwareColor;
}


static process_StorageunitShelfbtmConstruction(m: IFuncParents_mc_Storageunit01, firstBwCon: string = 'None', firstBwPos: number = 0) {

  // Interface to provide the data to the carcase
  //-------------------------------------------------------------------------------------

  interface ShelfBtmInfo {
    BwBtm: number;          // Manage starting position of the first backwall
    BtmPosBack: number;     // Define back side position of the bottom shelf (fixed shelf starting position)
    BtmPosFront: number;    // Frontposition of the bottom shelf (free space calculation)
    BtmPart: string;        // Name of the construction part (provided in the parts list for fittings like push to open)
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }

  // Initialize the object
  let shelfBtmInfo: ShelfBtmInfo = {
    BwBtm: 0,
    BtmPosBack: 0,
    BtmPosFront: 0,
    BtmPart: 'None',
    Height: 0,
    Width: 0,
    Depth: 0,
    WidthPos: 0,
    HeightPos: 0,
    DepthPos: 0
  };

	// Variables
  //-------------------------------------------------------------------------------------

  let moduleName = 'mc_Storageunit01'
  let tmpBwBtm: number = 0;
  let tmpBtmPosBack: number = 0;
  let tmpBtmPosFront: number = 0;
  let tmpBtmPart: string = '';
  let retBtm: any;

  // Query the settings table to get the module to insert
  //-------------------------------------------------------------------------------------
  let additionalInfo01 = 'All';
  let shelfbtmSettings = GlobalFunc.find_CarcaseShelfbtmSettings(moduleName, m.mod_CarcaseShelfbtmConstruction, additionalInfo01);

  let librarySolution: boolean = shelfbtmSettings.LibrarySolution!;
  let usedModule: string = shelfbtmSettings.UsedModule!;
  let partName = shelfbtmSettings.ConstructionTablePartName!;
  let insertModule: boolean = shelfbtmSettings.InsertModule!;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    //====================================================================
    // mc_StorageunitShelfbtm01
    //====================================================================
    if (usedModule == 'mc_StorageunitShelfbtm01') {

      // Calculate tmpAdditionalInfo01 (All or SlopedCeiling to use in the ccc-key)
      let tmpAdditionalInfo01: string = m.mod_SlopeAngle === 0 ? 'All' : 'SlopedCeiling';

      // Get CarcaseBackwConstruction to use as PartBack in CCK_StorageUnit
      let CarcaseBackwConstruction_Btm = GlobalFunc.find_CarcaseBackwallSettings(firstBwCon)!;

      // Query the ccc-Key
      retBtm = GlobalFunc.find_StorageunitConstruction(partName, m.mod_CarcaseConnectionLeftTop, m.mod_CarcaseConnectionLeftBtm, m.mod_CarcaseConnectionRightBtm, m.mod_CarcaseConnectionRightTop, CarcaseBackwConstruction_Btm.ConstructionBackwallBottom!, m.mod_CarcaseFrontConstruction_matrix.Bottom!, m.mod_CarcaseVisBtm, tmpAdditionalInfo01);

      if (insertModule) {

        // Add the module
        let Btm = m.addOD_M_mc_StorageunitShelfbtm01();
        
        // Set values to the attributes of the child
        Btm.mod_Height = retBtm.Height(m, firstBwPos);
        Btm.mod_Width = retBtm.Width(m, firstBwPos);
        Btm.mod_Depth = retBtm.Depth(m, firstBwPos);
        Btm.mod_EdgeFrontType = retBtm.EdgeTypeFront!;
        Btm.mod_EdgeLeftType = retBtm.EdgeTypeLeft!;
        Btm.mod_EdgeBackType = retBtm.EdgeTypeBack!;
        Btm.mod_EdgeRightType = retBtm.EdgeTypeRight!;
        Btm.mod_EdgeJointType = retBtm.EdgeJointType;

        // setOrigin
        Btm.setOrigin(retBtm.WidthPos(m, firstBwPos), retBtm.HeightPos(m, firstBwPos), retBtm.DepthPos(m, firstBwPos));

      }
      
      // Define back side position of the bottom shelf (fixed shelf starting position)
      tmpBtmPosBack = (CarcaseBackwConstruction_Btm.ConstructionBackwallBottom! === 'Overlayed') ? -10 : retBtm.DepthPos(m, firstBwPos);

      // Frontposition of the bottom shelf (free space calculation)
      tmpBtmPosFront = retBtm.Depth(m, firstBwPos) + retBtm.DepthPos(m, firstBwPos);

      // Manage starting position of the first backwall
      tmpBwBtm = retBtm.HeightPos(m, firstBwPos) + retBtm.Height(m, firstBwPos);

      // PartName (for Carcase Parts Info)
      tmpBtmPart = 'ShelfBtm';

    }

    //====================================================================
    // Other modules
    //====================================================================
    else {


    }

  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  shelfBtmInfo.BwBtm = tmpBwBtm;
  shelfBtmInfo.BtmPosBack = tmpBtmPosBack;
  shelfBtmInfo.BtmPosFront = tmpBtmPosFront;
  shelfBtmInfo.BtmPart = tmpBtmPart;

  shelfBtmInfo.Height = retBtm.Height(m, firstBwPos);
  shelfBtmInfo.Width = retBtm.Width(m, firstBwPos);
  shelfBtmInfo.Depth = retBtm.Depth(m, firstBwPos);
  shelfBtmInfo.WidthPos = retBtm.WidthPos(m, firstBwPos);
  shelfBtmInfo.HeightPos = retBtm.HeightPos(m, firstBwPos);
  shelfBtmInfo.DepthPos = retBtm.DepthPos(m, firstBwPos);

  return JSON.stringify(shelfBtmInfo);

}


// Process Filler Hardware
static process_FillerHardware(m: IFuncParents_mc_CornerFillerFront01_mc_FillerFront01, Width: number, Height: number, WidthPos:number, HeightPos: number, FrontOrientation: string) {

  //====================================================================
  // Initialize variables
  //====================================================================
  interface iFillerHardwareInfo {
    Object: string[];
    ConnectionSide: string[];
    PosY: number[];
    PosX: number[];
    HardwareItem: string[];
	  ProcessingItem: string[];
	  GraphicItem: string[];
  }

  let fillerHardwareInfo: iFillerHardwareInfo = {
    Object: [],
    ConnectionSide: [],
    PosY: [],
    PosX: [],
    HardwareItem: [],
	  ProcessingItem: [],
    GraphicItem: []
  };

  //====================================================================
  // Calculate FrontOverlay
  //====================================================================

  let frontOverlay = GlobalFunc.calc_FrontOverlay(m, Width, Height, WidthPos, HeightPos, FrontOrientation);

  //====================================================================
  // Get FillerHardwareSettings
  //====================================================================

  let fillerHardwareSettings = GlobalFunc.find_FillerHardwareSettings(m.mod_TypeElement, m.mod_FillerType, m.mod_FillerHardware, Height, Width, m.mod_FingergripTopType, m.mod_FingergripBtmType);

  //====================================================================
  // forEach fillerHardwareSettings calculate output
  //====================================================================

  fillerHardwareSettings.forEach(fillerHardwareSetting => {

    //====================================================================
    // Identify Vertical or Horizontal connection and validate overlay
    //====================================================================
    let connectionLength = 0;
    let connectionSide = '';
    let validOverlay = false;
    if (fillerHardwareSetting.ObjectFrontPosition == 'Side') {
      if (m.mod_Direction == 'Right') {
        connectionLength = frontOverlay.RightThk ? Height : 0;
        connectionSide = 'Right';
        validOverlay = frontOverlay.RightThk ? true : false;
      }
      else if (m.mod_Direction == 'Left') {
        connectionLength = frontOverlay.LeftThk ? Height : 0;
        connectionSide = 'Left';
        validOverlay = frontOverlay.LeftThk ? true : false;
      }
    }
    else if (fillerHardwareSetting.ObjectFrontPosition == 'Top') {
      connectionLength = frontOverlay.TopThk ? Width : 0;
      connectionSide = 'Top';
      validOverlay = frontOverlay.TopThk ? true : false;
    }
    else if (fillerHardwareSetting.ObjectFrontPosition == 'Btm') {
      connectionLength = frontOverlay.BottomThk ? Width : 0;
      connectionSide = 'Btm';
      validOverlay = frontOverlay.BottomThk ? true : false;
    }

 
    if (validOverlay) {

      //====================================================================
      // Process Descriptor
      //====================================================================

      let descriptorPositions = GlobalFunc.process_Descriptor(fillerHardwareSetting.Descriptor!, connectionLength);

      descriptorPositions.forEach(descriptorPosition => {
        fillerHardwareInfo.Object.push(fillerHardwareSetting.Object!);
        fillerHardwareInfo.ConnectionSide.push(connectionSide);
        let hardwareObjectInfo = GlobalFunc.find_ObjectMapping(fillerHardwareSetting.Object!)
        
		    fillerHardwareInfo.HardwareItem.push(hardwareObjectInfo.HardwareItem!);
		    fillerHardwareInfo.ProcessingItem.push(hardwareObjectInfo.ProcessingItem!);
        fillerHardwareInfo.GraphicItem.push(hardwareObjectInfo.GraphicItem!);
		
        switch (connectionSide) {
          case 'Right':
            fillerHardwareInfo.PosY.push(descriptorPosition);
            fillerHardwareInfo.PosX.push(fillerHardwareSetting.ObjectInsertionReference == 'PartShortInside' ? Width - frontOverlay.Right! : Width - frontOverlay.Right! + frontOverlay.RightThk! / 2);
            break;
          case 'Left':
            fillerHardwareInfo.PosY.push(descriptorPosition);
            fillerHardwareInfo.PosX.push(fillerHardwareSetting.ObjectInsertionReference == 'PartShortInside' ? frontOverlay.Left! : frontOverlay.Left! - frontOverlay.LeftThk! / 2);
            break
          case 'Top':
            fillerHardwareInfo.PosY.push(fillerHardwareSetting.ObjectInsertionReference == 'PartShortInside' ? Height - frontOverlay.Top! : Height - frontOverlay.Top! + frontOverlay.TopThk! / 2);
            fillerHardwareInfo.PosX.push(descriptorPosition);
            break
          case 'Btm':
            fillerHardwareInfo.PosY.push(fillerHardwareSetting.ObjectInsertionReference == 'PartShortInside' ? frontOverlay.Bottom! : frontOverlay.Bottom! - frontOverlay.BottomThk! / 2);
            fillerHardwareInfo.PosX.push(descriptorPosition);
            break
        }
      })
    }
  })




  return fillerHardwareInfo;
}


static process_StorageunitSidepanelConstruction(m: IFuncParents_mc_Storageunit01, side: string = 'Left', firstBwCon: string = 'None', firstBwPos: number = 0) {

  // Interface to provide the data to the carcase
  //-------------------------------------------------------------------------------------

  interface SidepanelInfo {
    BwSp: number;           // Manage starting position of the backwalls on the side
    SpPosBack: number;      // Define back side position of the sidepanel (fixed shelf starting position)
    SpPosFront: number;     // Frontposition of the sidepanel (free space calculation)
    SpPart: string;         // Name of the construction part (provided in the parts list for fittings like push to open)
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }

  // Initialize the object
  let sidepanelInfo: SidepanelInfo = {
    BwSp: 0,
    SpPosBack: 0,
    SpPosFront: 0,
    SpPart: 'None',
    Height: 0,
    Width: 0,
    Depth: 0,
    WidthPos: 0,
    HeightPos: 0,
    DepthPos: 0
  };

  // Variables
  //-------------------------------------------------------------------------------------
  let moduleName = 'mc_Storageunit01';
  let CarcaseBackwConstruction: any;
  let Sp: any;
  let tmpBwSp: number = 0;       
  let tmpSpPosBack: number = 0;
  let tmpSpPosFront: number = 0;
  let tmpSpPart: string = '';
  let retSp: any;

  // Query the settings table to get the module to insert
	//-------------------------------------------------------------------------------------

	let additionalInfo01 = 'All';
	let sidePanelSettings = GlobalFunc.find_CarcaseSidepanelSettings(moduleName, side == 'Left' ? m.mod_SidepanelleftType : m.mod_SidepanelrightType, side, additionalInfo01);

  let librarySolution: boolean = sidePanelSettings.LibrarySolution!;
  let usedModule: string = sidePanelSettings.UsedModule!;
  let partName = sidePanelSettings.ConstructionTablePartName!;
  let insertModule: boolean = sidePanelSettings.InsertModule!; 
  let partType: string = sidePanelSettings.PartType!;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    //====================================================================
    // mc_StorageunitSidepanel01
    //====================================================================
    if (usedModule == 'mc_StorageunitSidepanel01') {

      // Calculate tmpAdditionalInfo01 (All or SlopedCeiling to use in the ccc-key)
      let tmpAdditionalInfo01: string = m.mod_SlopeAngle === 0 ? 'All' : 'SlopedCeiling';

      // Get CarcaseBackwConstruction to use as PartBack in CCK_StorageUnit
      CarcaseBackwConstruction = GlobalFunc.find_CarcaseBackwallSettings(firstBwCon)!;

      // Get the constructionBackwall based on the side panel side
      let constructionBackwall = side == "Left" ? CarcaseBackwConstruction.ConstructionBackwallLeft! : CarcaseBackwConstruction.ConstructionBackwallRight!;

      // Get the constructionFront based on the side panel side
      let constructionFront = side == "Left" ? m.mod_CarcaseFrontConstruction_matrix.Left! : m.mod_CarcaseFrontConstruction_matrix.Right!;

      // Get the visibility based on the side panel side
      let visibility = side == "Left" ? m.mod_CarcaseVisLeft : m.mod_CarcaseVisRight;

      // Query the ccc-Key
      retSp = GlobalFunc.find_StorageunitConstruction(partName, m.mod_CarcaseConnectionLeftTop, m.mod_CarcaseConnectionLeftBtm, m.mod_CarcaseConnectionRightBtm, m.mod_CarcaseConnectionRightTop, constructionBackwall, constructionFront, visibility, tmpAdditionalInfo01);

      if (insertModule) {

        // Add the module
        Sp = m.addOD_M_mc_StorageunitSidepanel01();
        
        // Set values to the attributes of the child
        Sp.mod_Height = retSp.Height(m, firstBwPos);
        Sp.mod_Width = retSp.Width(m, firstBwPos);
        Sp.mod_Depth = retSp.Depth(m, firstBwPos);
        Sp.mod_SidepanelType = partType;
        Sp.mod_EdgeFrontType = retSp.EdgeTypeFront!;
        Sp.mod_EdgeLeftType = retSp.EdgeTypeLeft!;
        Sp.mod_EdgeBackType = retSp.EdgeTypeBack!;
        Sp.mod_EdgeRightType = retSp.EdgeTypeRight!;
        Sp.mod_EdgeJointType = retSp.EdgeJointType;
        Sp.mod_Originpos.push(retSp.WidthPos(m, firstBwPos));
        Sp.mod_Originpos.push(retSp.HeightPos(m, firstBwPos));
        Sp.mod_Originpos.push(retSp.DepthPos(m, firstBwPos));

        // setOrigin
        Sp.setOrigin(retSp.WidthPos(m, firstBwPos), retSp.HeightPos(m, firstBwPos), retSp.DepthPos(m, firstBwPos));
      }


      // Manage starting position of the backwalls on the side
      let tmpSpThk = side == 'Left' ? retSp.Width(m, firstBwPos) : 0
      tmpBwSp = retSp.WidthPos(m, firstBwPos) + tmpSpThk;

      // Define back side position of the sidepanel (fixed shelf starting position)
      tmpSpPosBack = constructionBackwall == 'Overlayed' ? -10 : retSp.DepthPos(m, firstBwPos);

      // Frontposition of the sidepanel (free space calculation)
      tmpSpPosFront = retSp.Depth(m, firstBwPos) + retSp.DepthPos(m, firstBwPos);

      // PartName (for Carcase Parts Info)
      tmpSpPart = side === 'Left' ? 'LeftSidePanel' : 'RightSidePanel';

    }


    //====================================================================
    // Other modules
    //====================================================================
    else {


    }


  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  sidepanelInfo.BwSp = tmpBwSp;
  sidepanelInfo.SpPosBack = tmpSpPosBack;
  sidepanelInfo.SpPosFront = tmpSpPosFront;
  sidepanelInfo.SpPart = tmpSpPart;

  sidepanelInfo.Height = retSp.Height(m, firstBwPos);
  sidepanelInfo.Width = retSp.Width(m, firstBwPos);
  sidepanelInfo.Depth = retSp.Depth(m, firstBwPos);
  sidepanelInfo.WidthPos = retSp.WidthPos(m, firstBwPos);
  sidepanelInfo.HeightPos = retSp.HeightPos(m, firstBwPos);
  sidepanelInfo.DepthPos = retSp.DepthPos(m, firstBwPos);

  return JSON.stringify(sidepanelInfo);

}


static process_StorageunitShelffixedConstruction(m: IFuncParents_mc_Storageunit01) {

  // Interface to provide the data to the carcase
  //-------------------------------------------------------------------------------------

  interface ShelfInfo {
    Part: string;
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }

  // Array for the shelves
  let shelfList: ShelfInfo[] = [];

  // Variables
  //-------------------------------------------------------------------------------------

  let tmpPart: string = 'ShelfFixed';
  let tmpAdditionalInfo01: string = m.mod_SlopeAngle === 0 ? 'All' : 'SlopedCeiling';
  let retShelf: any;
  let librarySolution = true;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    //=====================================================================================
    // Get the JSON-data for the mod_FrontAreaInfoList (backwall data)
    //=====================================================================================

    // Define the interface
    interface FrontInfo {
      StartingPosition: number;        // Starting position of the front
      FrontHeight: number;             // Height of the front set from the UserExit
      RealFrontHeight: number;         // Calculated front height without gaps
      BackwallConstruction: string;    // Backwall construction selected on the front
      BackwallPosition: number;        // Backwall position selected on the front
      FixedshelfBottom: boolean;       // Fixed shelf selected on the front
    }

    // Array attribute to store the JSON-objects
    let frontObjects: FrontInfo[] = [];

    // Get all the JSON-strings, parse them and store them
    m.mod_FrontAreaInfoList.forEach(front => {
      let frontInfo = JSON.parse(front);
      frontObjects.push(frontInfo);
    });

    //=====================================================================================
    // For each fixed shelf we found on the fronts
    //=====================================================================================

    m.mod_ShelffixedInfoList.forEach(fixedShelf => {

      //=====================================================================================
      // Get the JSON-data for the fixed shelf
      //=====================================================================================

      // Define the interface
      interface ShelfFixedInfo {
        PosY: number;                  // Height position of the fixed shelf
        Fingergrip: boolean;           // Fingergrip in front of the fixed shelf
        Position: string;              // Position of the fixed shelf related to the fingergrip and gaps
        FingergripType: string;        // Version of fingergrip to get the dimensions
        Backside: string;              // Attribute for "Contact" or "ThrougBw"
        Part: string;                  // Shelffixed or Rail
      }

      let shelfInfo: ShelfFixedInfo = JSON.parse(fixedShelf);

      //=====================================================================================
      // Calculations
      //=====================================================================================

      // Backside situation and backwall position for the query in the CCC-key table
      //-------------------------------------------------------------------------------------

      // Get the data for the relevant fronts
      let hgtPos = shelfInfo.PosY + m.g.basic_FrontGapHor / 2;
      let firstFront = frontObjects.find(front => front.StartingPosition + front.FrontHeight === hgtPos);
      let secondFront = frontObjects.find(front => front.StartingPosition === hgtPos);

      // Default (we can merge the backwalls, or we don't find any data)
      let situationBack = shelfInfo.Backside;
      let backwallPos = m.mod_BackwallPos;

      // If we can not merge the backwall on the backside of the fixed shelf
      if (firstFront && secondFront) {
        if (firstFront.BackwallPosition !== secondFront.BackwallPosition) {
          if (situationBack == "ContactBw") {
            situationBack = "ThroughBw";
            logInfo('The value "ContactBw" is not valid if the backwallpositions are not equal. We changed it to "ThroughBw".')
          }

          backwallPos = Math.min(firstFront.BackwallPosition, secondFront.BackwallPosition);
        }
      }

      // Calculation of the height position of the fixed shelf
      //-------------------------------------------------------------------------------------

      let calcHeightPos = shelfInfo.PosY - m.mod_ShelffixedThk / 2;

      if (shelfInfo.Position == 'GapBelow') {
        calcHeightPos = shelfInfo.PosY - m.g.basic_FrontGapHor / 2 + m.g.basic_ShelffixedOffsetFront
      }
      else if (shelfInfo.Position == 'GapAbove') {
        calcHeightPos = shelfInfo.PosY - m.mod_ShelffixedThk + m.g.basic_FrontGapHor / 2 + m.g.basic_ShelffixedOffsetFront!
      }

      //=====================================================================================
      // Add the module
      //=====================================================================================

      let Shelf = m.addOD_M_mc_StorageunitShelffixed01();

      // Query the ccc-Key
      retShelf = GlobalFunc.find_StorageunitConstruction(shelfInfo.Part, m.mod_CarcaseConnectionLeftTop, m.mod_CarcaseConnectionLeftBtm, m.mod_CarcaseConnectionRightBtm, m.mod_CarcaseConnectionRightTop, situationBack, 'Overlayed', false, tmpAdditionalInfo01);

      // Set values to the attributes of the child
      Shelf.mod_ShelffixedThk = retShelf.Height(m, 0);
      Shelf.mod_Width = retShelf.Width(m, 0);
      Shelf.mod_Depth = retShelf.Depth(m, backwallPos);
      Shelf.mod_EdgeFrontType = retShelf.EdgeTypeFront!;
      Shelf.mod_EdgeLeftType = retShelf.EdgeTypeLeft!;
      Shelf.mod_EdgeBackType = retShelf.EdgeTypeBack!;
      Shelf.mod_EdgeRightType = retShelf.EdgeTypeRight!;
      Shelf.mod_EdgeJointType = retShelf.EdgeJointType;

      // setOrigin
      Shelf.setOrigin(retShelf.WidthPos(m, 0), calcHeightPos, retShelf.DepthPos(m, backwallPos));

      // Add the shelf data to the list
      let shelfData: ShelfInfo = {
        Part: tmpPart,
        Height: retShelf.Height(m, 0),
        Width: retShelf.Width(m, 0),
        Depth: retShelf.Depth(m, backwallPos),
        WidthPos: retShelf.WidthPos(m, 0),
        HeightPos: calcHeightPos,
        DepthPos: retShelf.DepthPos(m, backwallPos)
      };
      shelfList.push(shelfData);

    })
  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  return JSON.stringify(shelfList);

}


static process_PanelLengthSplitByMaximum(
  lengthSegments: number[],
  maximalLength: number,
  optimizeMethod: undefined | 'LeastToAvg' | 'LeastToMin' | 'LeastToLimit' = undefined,
): number[] {
  /**
   * Takes a list of length segments and distributes them into groups so that the sum of each group is less than or equal to the maximal length.
   * The method of distribution can be optimized.
   * @param lengthSegments the segments to distribute
   * @param maximalLength maximum possible length of a group
   * @param optimizeMethod type of criteria to optimize the distribution
   * @returns indices of the segments where the groups start (inclusive) and end (exclusive); this is longer than the count of groups by 1
   */
  const resultToIndices: (groups: number[][]) => number[] = (groups) => {
    let count = 0;
    const result = [0, ...groups.map(group => {
      const groupLength = group.length;
      count += groupLength;
      return count;
    })];
    return result;
  }

  const initialGroupingByMax: number[][] = [];
  let currentGroup: number[] = [];
  let currentGroupSum = 0;
  for (let i = 0; i < lengthSegments.length; i++) {
    const segment = lengthSegments[i];
    if (currentGroupSum + segment <= maximalLength) {
      currentGroup.push(segment);
      currentGroupSum += segment;
    } else {
      initialGroupingByMax.push(currentGroup);
      currentGroup = [segment];
      currentGroupSum = segment;
    }
  }
  if (currentGroup.length > 0) {
    initialGroupingByMax.push(currentGroup);
  }

  if (!optimizeMethod) {
    return resultToIndices(initialGroupingByMax);
  }

  const copy = (obj: any[]) => { return JSON.parse(JSON.stringify(obj)) };

  const computeGroupingScore = (grouping: number[][], limitLength: number, optimize: 'LeastToAvg' | 'LeastToMin' | 'LeastToLimit') => {
    const sumsPerGroups = grouping.map(g => g.reduce((acc, val) => acc + val, 0));
    const avg = sumsPerGroups.reduce((acc, val) => acc + val, 0) / sumsPerGroups.length;
    const min = Math.min(...sumsPerGroups);
    const squareDifferencesFromAverage = sumsPerGroups.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0);
    const squareDifferencesFromLimit = sumsPerGroups.reduce((acc, val) => acc + Math.pow(val - limitLength, 2), 0);
    const squareDifferencesFromMin = sumsPerGroups.reduce((acc, val) => acc + Math.pow(val - min, 2), 0);
    if (optimize === 'LeastToAvg') {
      return squareDifferencesFromAverage;
    }
    else if (optimize === 'LeastToMin') {
      return squareDifferencesFromMin;
    }
    else if (optimize === 'LeastToLimit') {
      return squareDifferencesFromLimit;
    }
    else {
      throw new Error('Invalid optimize parameter in computeGroupingScore.');
    }
  };

  const allGroupedSegmentsVariations = [copy(initialGroupingByMax)];
  const allScoresOfVariations: number[] = [computeGroupingScore(initialGroupingByMax, maximalLength, optimizeMethod)];
  // I don't expect to save a significant amount of utilized boards
  const countOfGroups = initialGroupingByMax.length;

  let managedToChangeInLastIteration = true;
  let currentGroupingVariation = null;
  // this safety value has practically proven to be more than enough already
  let safety = lengthSegments.length * 4;
  while (managedToChangeInLastIteration) {
    safety--;
    if (safety < 0) {
      throw new Error('Safety loop limit in process_DistributeLengthSegmentsByMaximum reached.');
    }

    currentGroupingVariation = copy(allGroupedSegmentsVariations[allGroupedSegmentsVariations.length - 1]);
    managedToChangeInLastIteration = false;
    for (let i = countOfGroups - 1; i >= 1; i--) {
      const currentGroup = currentGroupingVariation[i];
      const previousGroup = currentGroupingVariation[i - 1];
      const currentGroupSum = currentGroup.reduce((acc: number, val: number) => acc + val, 0);
      const lastOfPreviousGroup = previousGroup[previousGroup.length - 1];
      if (currentGroupSum + lastOfPreviousGroup <= maximalLength) {
        currentGroup.unshift(previousGroup.pop());
        managedToChangeInLastIteration = true;
        allGroupedSegmentsVariations.push(copy(currentGroupingVariation));
        allScoresOfVariations.push(computeGroupingScore(currentGroupingVariation, maximalLength, optimizeMethod));
      }
    }
  }

  const bestVariationIndex = allScoresOfVariations.indexOf(Math.min(...allScoresOfVariations));
  return resultToIndices(allGroupedSegmentsVariations[bestVariationIndex]);
}


static process_StorageunitBackwallConstruction(m: IFuncParents_mc_Storageunit01, partLeft: string = 'None', partRight: string = 'None', partBtm: string = 'None', partTop: string = 'None', vertFreeSpace: number = 0, horFreeSpace: number = 0, startLeft: number = 0, startBtm: number = 0, shelfList: string = '') {

  // Define all the interfaces
  //-------------------------------------------------------------------------------------

  // Interface to provide the data to the carcase
  interface BackwallData {
    Part: string;
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }
  let backwallList: BackwallData[] = [];

  // Interface for the backwalls for insertion
  interface BackwallInfo {
    FreespaceVert: number,
    FreespaceHor: number,
    StartBot: number,
    StartLeft: number,
    BackwallPos: number,
    BackwallConstruction: string
  }
  let backwalls: BackwallInfo[] = []

  // Interface for the shelves
  interface ShelfInfo {
    Part: string;
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }
  let shelfInfo: ShelfInfo[] = JSON.parse(shelfList);

  // Interface for the front elements
  interface FrontInfo {
    FrontCategory: string            // Identificator of sepecial fronts
    StartingPosition: number;        // Starting position of the front
    FrontHeight: number;             // Height of the front set from the UserExit
    RealFrontHeight: number;         // Calculated front height without gaps
    BackwallConstruction: string;    // Backwall construction selected on the front
    BackwallPosition: number;        // Backwall position selected on the front
    FixedshelfBottom: boolean;       // Fixed shelf selected on the front
    FingergripBottom: boolean;       // Fingergrip on bottom (true / false)
    FingergripTop: boolean;          // Fingergrip on top (true / false)
    FringergripType: string;         // Type of fingergrip (dimensions)
  }

  // Helper function to get the shelf from the list of shelves
  //-------------------------------------------------------------------------------------

  function FindShelf(targetValue: number, tolerance: number = 20): ShelfInfo | undefined {
    return shelfInfo.find(shelf =>
      shelf.HeightPos >= (targetValue - tolerance) &&
      shelf.HeightPos <= (targetValue + tolerance)
    );
  }

  function FindShelvesInRange(lowerBound: number, upperBound: number, tolerance: number = 20): ShelfInfo[] {
    return shelfInfo
      .filter(shelf =>
        shelf.HeightPos >= lowerBound + tolerance &&
        shelf.HeightPos <= upperBound - tolerance
      )
      .sort((a, b) => a.HeightPos - b.HeightPos);
  }

  // Helper function to add a new backwall
  //-------------------------------------------------------------------------------------

	function TryAddBackwall(freeSpaceVert: number, startPos: number, construction: string | null | undefined, position: number): void {
		if (construction && construction !== "NoBackwall") {
			AddBackwall(freeSpaceVert, startPos, construction, position);
		} 
	}

  function AddBackwall(freeSpaceVertical: number, startPos: number, backwallConstruction: string, backwallPosition: number): void {
    let newBackwall: BackwallInfo = {
      FreespaceVert: freeSpaceVertical,
      FreespaceHor: horFreeSpace,
      StartBot: startPos,
      StartLeft: startLeft,
      BackwallPos: backwallPosition,
      BackwallConstruction: backwallConstruction
    };
    backwalls.push(newBackwall);
  }

  // Variables
  //-------------------------------------------------------------------------------------

  let tmpPart: string = "Backwall";
  let tmpStartPos = 0;
  let tmpEndPos = 0;
  let tmpBwPos = 0;
  let tmpBwConstruction: string | undefined = undefined;
  let tmpBwBefore = false;
  let i = 0;
  let librarySolution = true;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    //=====================================================================================
    // Iterate through the front elements to detect the backwalls
    //=====================================================================================

    // If there is no front in the cabinet
    if (m.mod_FrontAreaInfoList.length === 0) {

      AddBackwall(vertFreeSpace, startBtm, m.mod_CarcaseBackwallConstruction, m.mod_BackwallPos);
      tmpBwBefore = false;
    }

    // If there are fronts in the cabinet
       // If there are fronts in the cabinet
    else {
      m.mod_FrontAreaInfoList.forEach(front => {
        // Store the front element of this iteration
        let frontInfo: FrontInfo = JSON.parse(front);
        i++;

        // If there is more than one front in the cabinet
        if (m.mod_FrontAreaInfoList.length > 1) {
          // If the first front is a fridge
          if (i == 1 && frontInfo.FrontCategory == "Fridge") {
            // Try to find fixed shelves for the backwall insertion
            let foundShelves = FindShelvesInRange(
              frontInfo.StartingPosition,
              frontInfo.StartingPosition + frontInfo.RealFrontHeight
            );
            // Starten wir erst, wenn wir später einen Shelf finden (siehe unten)
          }

          // Define the starting values for the first backwall (nur wenn vorhanden)
          else if (i == 1 && frontInfo.BackwallConstruction != "NoBackwall") {
            tmpStartPos = startBtm;
            tmpBwPos = frontInfo.BackwallPosition;
            tmpBwConstruction = frontInfo.BackwallConstruction; // <- wichtig
            tmpBwBefore = true;
          }

          // Analyse all the front elements if a starting position is defined
          else if (i > 1 && tmpBwBefore) {
            // Try to find a fixed shelf at this position
            let foundShelf = FindShelf(frontInfo.StartingPosition);

            // Backwalls can not be merged because position in depth is not equal
            if (tmpBwPos != frontInfo.BackwallPosition) {
              if (foundShelf) {
                // Add new backwall
                tmpEndPos = foundShelf.HeightPos;
                let freeSpaceVert = tmpEndPos - tmpStartPos;
                TryAddBackwall(freeSpaceVert, tmpStartPos, tmpBwConstruction, tmpBwPos);

                // Initialize the next backwall
                if (frontInfo.BackwallConstruction != "NoBackwall") {
                  tmpStartPos = foundShelf.HeightPos + foundShelf.Height;
                  tmpBwPos = frontInfo.BackwallPosition;
                  tmpBwConstruction = frontInfo.BackwallConstruction; // <- setzen
                  tmpBwBefore = true;
                } else {
                  tmpBwBefore = false;
                  tmpBwConstruction = undefined;
                }
              } else {
                logError("Can not find an end position for the backwall!");
              }
            }

            // Backwalls can not be merged because the fixed shelf is splitting the backwall
            else if (foundShelf && tmpBwPos > foundShelf.DepthPos) {
              // Add new backwall
              tmpEndPos = foundShelf.HeightPos;
              let freeSpaceVert = tmpEndPos - tmpStartPos;
              TryAddBackwall(freeSpaceVert, tmpStartPos, tmpBwConstruction, tmpBwPos);

              // If it is a fridge
              if (frontInfo.FrontCategory == "Fridge") {
                // Try to find fixed shelves for the backwall insertion
                let foundShelves = FindShelvesInRange(
                  frontInfo.StartingPosition,
                  frontInfo.StartingPosition + frontInfo.RealFrontHeight
                );
                let k = 0;

                foundShelves.forEach(shelf => {
                  k++;
                  if (k == 1) {
                    tmpStartPos = shelf.HeightPos + shelf.Height;
                    tmpBwPos = frontInfo.BackwallPosition;
                    tmpBwConstruction = frontInfo.BackwallConstruction; // <- setzen
                    tmpBwBefore = !!tmpBwConstruction && tmpBwConstruction !== "NoBackwall";
                  }
                });
              }

              // Initialize the next backwall
              else if (frontInfo.BackwallConstruction != "NoBackwall") {
                tmpStartPos = foundShelf.HeightPos + foundShelf.Height;
                tmpBwPos = frontInfo.BackwallPosition;
                tmpBwConstruction = frontInfo.BackwallConstruction; // <- setzen
                tmpBwBefore = true;
              } else {
                tmpBwBefore = false;
                tmpBwConstruction = undefined;
              }
            }
          }

          // Try to find a starting position if there are still no backwalls in place
          else {
            let foundShelf = FindShelf(frontInfo.StartingPosition);
            if (foundShelf) {
              if (frontInfo.BackwallConstruction != "NoBackwall") {
                tmpStartPos = foundShelf.HeightPos + foundShelf.Height;
                tmpBwPos = frontInfo.BackwallPosition;
                tmpBwConstruction = frontInfo.BackwallConstruction; // <- setzen
                tmpBwBefore = true;
              } else {
                tmpBwBefore = false;
                tmpBwConstruction = undefined;
              }
            } else {
              if (frontInfo.BackwallConstruction != "NoBackwall") {
                logError("Can not find a starting position for the backwall!");
              }
            }
          }
        }

        // If there is only a fridge
        else if (frontInfo.FrontCategory == "Fridge") {
          // Try to find fixed shelves for the backwall insertion
          let foundShelves = FindShelvesInRange(
            frontInfo.StartingPosition,
            frontInfo.StartingPosition + frontInfo.RealFrontHeight
          );
          let k = 0;

          foundShelves.forEach(shelf => {
            k++;

            if (k == 1) {
              let vertFreeSpaceLocal = shelf.HeightPos - startBtm;
              TryAddBackwall(
                vertFreeSpaceLocal,
                startBtm,
                frontInfo.BackwallConstruction,
                frontInfo.BackwallPosition
              );
              tmpBwBefore = false;
              tmpBwConstruction = undefined;
            } else {
              // nur starten, wenn vorhanden
              if (frontInfo.BackwallConstruction != "NoBackwall") {
                tmpStartPos = shelf.HeightPos + shelf.Height;
                tmpBwPos = frontInfo.BackwallPosition;
                tmpBwConstruction = frontInfo.BackwallConstruction; // <- setzen
                tmpBwBefore = true;
              } else {
                tmpBwBefore = false;
                tmpBwConstruction = undefined;
              }
            }
          });
        }

        // If there is only one front in the cabinet and there is a backwall
        else if (frontInfo.BackwallConstruction != "NoBackwall") {
          TryAddBackwall(
            vertFreeSpace,
            startBtm,
            frontInfo.BackwallConstruction,
            frontInfo.BackwallPosition
          );
          tmpBwBefore = false;
          tmpBwConstruction = undefined;
        }
      });

      // Add the last backwall if there was a starting position created but not an end position
      if (tmpBwBefore) {
        // Add new backwall
        let freeSpaceVert = startBtm + vertFreeSpace - tmpStartPos;
        TryAddBackwall(freeSpaceVert, tmpStartPos, tmpBwConstruction, tmpBwPos);
      }
    }

    //=====================================================================================
    // For each backwall to insert
    //=====================================================================================

    let totalBackwalls: number = backwalls.length;
    let j: number = 0;
    backwalls.forEach(backwall => {
      j++;

      let bwPosition = backwall.BackwallPos;
      let bwThickness = m.mod_BackwallThk;
      let bwSlopeAngle = 0;

      if (j == totalBackwalls && m.mod_SlopeAngle != 0) {
        // If it's the last backwall and the cabinet has SlopeAngle, then we adjust the Thickness

        // Read Settings table
        let slopedCeilingSettings = GlobalFunc.find_SlopedCeilingSettings(
          m.mod_SlopedCeilingConstruction!
        );

        bwThickness = slopedCeilingSettings.BackwallThk!;
        bwThickness != m.mod_BackwallThk
          ? logInfo(
              "Automatic adjustment: Backwall thickness is now " +
                bwThickness +
                " instead of " +
                m.mod_BackwallThk
            )
          : "";

        bwSlopeAngle = m.mod_SlopeAngle;
      }

      // Get the data from the ccc-Key table
      //-------------------------------------------------------------------------------------

      // Query the ccc-Key
      let retBackwall = GlobalFunc.find_BackwallConstruction(
        backwall.BackwallConstruction,
        partLeft,
        partBtm,
        partRight,
        partTop,
        m.mod_CarcaseVisBack
      );

      // Calculations
      let calcHeightPos =
        backwall.StartBot +
        retBackwall.HeightPosition(
          m,
          horFreeSpace,
          vertFreeSpace,
          bwPosition,
          bwThickness
        );

      // Add the module
      //-------------------------------------------------------------------------------------

      let Backwall = m.addOD_M_mc_StorageunitBackwall01();

      // Set values to the attributes of the child
      Backwall.mod_Height = retBackwall.Height(
        m,
        backwall.FreespaceHor,
        backwall.FreespaceVert,
        bwPosition,
        bwThickness
      );
      Backwall.mod_Width = retBackwall.Width(
        m,
        backwall.FreespaceHor,
        backwall.FreespaceVert,
        bwPosition,
        bwThickness
      );
      Backwall.mod_Depth = retBackwall.Depth(
        m,
        backwall.FreespaceHor,
        backwall.FreespaceVert,
        bwPosition,
        bwThickness
      );
      Backwall.mod_EdgeFrontType = retBackwall.matrix_EdgeTypeFront!;
      Backwall.mod_EdgeLeftType = retBackwall.matrix_EdgeTypeLeft!;
      Backwall.mod_EdgeBackType = retBackwall.matrix_EdgeTypeBack!;
      Backwall.mod_EdgeRightType = retBackwall.matrix_EdgeTypeRight!;
      Backwall.mod_EdgeJointType = retBackwall.matrix_EdgeJointType;
      Backwall.mod_SlopeAngle = bwSlopeAngle;

      // setOrigin
      Backwall.setOrigin(
        startLeft +
          retBackwall.WidthPosition(
            m,
            backwall.FreespaceHor,
            backwall.FreespaceVert,
            bwPosition,
            bwThickness
          ),
        calcHeightPos,
        retBackwall.DepthPosition(
          m,
          backwall.FreespaceHor,
          backwall.FreespaceVert,
          bwPosition,
          bwThickness
        )
      );

      // Add the backwall data to the list
      let backwallData: BackwallData = {
        Part: tmpPart,
        Height: retBackwall.Height(
          m,
          backwall.FreespaceHor,
          backwall.FreespaceVert,
          bwPosition,
          bwThickness
        ),
        Width: retBackwall.Width(
          m,
          backwall.FreespaceHor,
          backwall.FreespaceVert,
          bwPosition,
          bwThickness
        ),
        Depth: retBackwall.Depth(
          m,
          backwall.FreespaceHor,
          backwall.FreespaceVert,
          bwPosition,
          bwThickness
        ),
        WidthPos:
          startLeft +
          retBackwall.WidthPosition(
            m,
            backwall.FreespaceHor,
            backwall.FreespaceVert,
            bwPosition,
            bwThickness
          ),
        HeightPos: calcHeightPos,
        DepthPos: retBackwall.DepthPosition(
          m,
          backwall.FreespaceHor,
          backwall.FreespaceVert,
          bwPosition,
          bwThickness
        )
      };
      backwallList.push(backwallData);
    });
  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {
    // custom
  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  return JSON.stringify(backwallList);
}


// Pythagorean Theorem\n//########################################################
static calc_pythagoreanTheorem(Angle: number, AdjacentSide: number, OppositeSide: number, Hypotenuse: number ) {
	//====================================================================
	//Interface to provide the data
  	//====================================================================

  	interface pythagoreanTheorem {
		Angle: number;
		AdjacentSide: number;
		OppositeSide: number;
		Hypotenuse: number;
  	}

  	//---------------Initialize the object-----------------
  	let pythagoreanTheorem: pythagoreanTheorem = {
		Angle: 0,
		AdjacentSide: 0,
		OppositeSide: 0,
		Hypotenuse: 0
  	};
	
	
	if (Angle != 0 && AdjacentSide != 0 && OppositeSide == 0 && Hypotenuse == 0) {
		OppositeSide = AdjacentSide * Math.tan(Angle * (Math.PI / 180));
		Hypotenuse = AdjacentSide / Math.cos(Angle * (Math.PI / 180));
	}
	else if (Angle != 0 && AdjacentSide == 0 && OppositeSide != 0 && Hypotenuse == 0) {
		AdjacentSide = OppositeSide / Math.tan(Angle * (Math.PI / 180));
		Hypotenuse = OppositeSide / Math.sin(Angle * (Math.PI / 180));
	}
	else if (Angle != 0 && AdjacentSide == 0 && OppositeSide == 0 && Hypotenuse != 0) {
		AdjacentSide = Hypotenuse * Math.cos(Angle * (Math.PI / 180));
		OppositeSide = Hypotenuse * Math.sin(Angle * (Math.PI / 180));
	}
	else if (Angle == 0 && AdjacentSide != 0 && OppositeSide != 0 && Hypotenuse == 0) {
		Angle = (Math.atan(OppositeSide / AdjacentSide)) * (180 / Math.PI);
		Hypotenuse = Math.sqrt(AdjacentSide * AdjacentSide + OppositeSide * OppositeSide);
	}
	else if (Angle == 0 && AdjacentSide != 0 && OppositeSide == 0 && Hypotenuse != 0) {
		Angle = (Math.acos(AdjacentSide / Hypotenuse)) * (180 / Math.PI);
		OppositeSide = Math.sqrt(Hypotenuse * Hypotenuse - AdjacentSide * AdjacentSide);
	}
	else if (Angle == 0 && AdjacentSide == 0 && OppositeSide != 0 && Hypotenuse != 0) {
		Angle = (Math.asin(OppositeSide / Hypotenuse)) * (180 / Math.PI);
		AdjacentSide = Math.sqrt(Hypotenuse * Hypotenuse - OppositeSide * OppositeSide);
	}
  
	return [Angle, AdjacentSide, OppositeSide, Hypotenuse];
  }


// Carcase Sloped Ceiling Dimension\n//########################################################
static find_CarcaseSlopedCeilingDimension(Construction:string, DimensionLogic:string):ICT_tab_CarcaseSlopedCeilingDimension{
  let retEntry = ct_tab_CarcaseSlopedCeilingDimension.find(p => p.in_Construction == Construction && p.in_DimensionLogic == DimensionLogic);	
	if (retEntry== undefined) {
    let Text = 'Construction:' + Construction + 'DimensionLogic:' + DimensionLogic;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14032',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


static process_StorageunitFreeSpaceCalculations(m: IFuncParents_mc_Storageunit01, posLeftPart: number = 0, posRightPart: number = 0, posBtm: number = 0, posTop: number = 0, shelfList: string = '', backwallList: string = '') {

  // Interface to provide the data to the carcase
  //-------------------------------------------------------------------------------------

  interface FreeSpaceInfo {
    FullWidthFreeSpace: number;
    FullWidthStartPos: number;
    FullHeightFreeSpace: number;
    FullHeightStartPos: number;
    FullDepthFreeSpace: number;
    FullDepthStartPos: number;
    FreeSpaceDepth: number[];
    FreeSpaceDepthStartPos: number[];
    FreeSpaceHeight: number[];
    FreeSpaceHeightStartPos: number[];
    FreeSpaceWidth: number[];
    FreeSpaceWidthStartPos: number[];
    PosTopShelf: number;
  }

  // Initialize the object
  let freeSpaceInfo: FreeSpaceInfo = {
    FullWidthFreeSpace: 0,
    FullWidthStartPos: 0,
    FullHeightFreeSpace: 0,
    FullHeightStartPos: 0,
    FullDepthFreeSpace: 0,
    FullDepthStartPos: 0,
    FreeSpaceDepth: [],
    FreeSpaceDepthStartPos: [],
    FreeSpaceHeight: [],
    FreeSpaceHeightStartPos: [],
    FreeSpaceWidth: [],
    FreeSpaceWidthStartPos: [],
    PosTopShelf: 0
  };

  // Interface for the fronts
  //-------------------------------------------------------------------------------------

  interface FrontInfo {
	StartingPosition: number;        // Starting position of the front
	FrontHeight: number;             // Height of the front set from the UserExit
	RealFrontHeight: number;         // Calculated front height without gaps
	BackwallConstruction: string;    // Backwall construction selected on the front
	BackwallPosition: number;        // Backwall position selected on the front
	FixedshelfBottom: boolean;       // Fixed shelf selected on the front
	FingergripBottom: boolean;       // Fingergrip on bottom (true / false)
	FingergripTop: boolean;          // Fingergrip on top (true / false)
	FringergripType: string;         // Type of fingergrip (dimensions)
  }	

  // Interface for the backwalls
  //-------------------------------------------------------------------------------------

  interface BackwallData {
    Part: string;
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }
  let backwallInfo: BackwallData[] = JSON.parse(backwallList);

  // Interface for the shelves
  //-------------------------------------------------------------------------------------

  interface ShelfInfo {
    Part: string;
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }
  let shelfInfo: ShelfInfo[] = JSON.parse(shelfList);

  //=====================================================================================
  // Helper functions
  //=====================================================================================

  // Helper function to get the shelf from the list of shelves
  //-------------------------------------------------------------------------------------

  function FindShelf(targetValue: number, tolerance: number = 20): ShelfInfo | undefined {
    return shelfInfo.find(shelf =>
      shelf.HeightPos >= (targetValue - tolerance) &&
      shelf.HeightPos <= (targetValue + tolerance)
    );
  }

  // Helper function to get the backwall from the list of backwalls
  //-------------------------------------------------------------------------------------

  function FindBackwall(position1: number, position2: number, tolerance: number = 20): BackwallData | undefined {
	  const exactMatch = backwallInfo.find(backwall =>
      backwall.HeightPos <= (position1 + tolerance) &&
      backwall.HeightPos + backwall.Height >= (position2 - tolerance)
	  );
  
    if (exactMatch) {
      return exactMatch;
    }
    
    return backwallInfo.find(backwall =>
      backwall.HeightPos <= (position1 + tolerance)
    );
  }

  // Variables
  //-------------------------------------------------------------------------------------

  let librarySolution = true;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    //=====================================================================================
    // Calculation of the full free space (carcase inside dimension)
    //=====================================================================================

    // Calculation of RealPosTop based on Fingergrip top
    const { LShapeHeight, CShapeOverlapBelow, CShapeOverlapAbove, CShapeHeight } = m.mod_FingergripType_matrix;
    const fingergripReductionTop = CShapeHeight! - CShapeOverlapAbove!;
    const fingergripReductionBtm = CShapeOverlapBelow!;
    const lastFrontJson = m.mod_FrontAreaInfoList.length > 0 ? m.mod_FrontAreaInfoList[m.mod_FrontAreaInfoList.length - 1] : undefined;
    const hasFingergripTop = lastFrontJson ? (JSON.parse(lastFrontJson) as FrontInfo).FingergripTop : false;
    let realPosTop = (hasFingergripTop === true && posTop >= m.mod_CarcaseHeight - LShapeHeight!) ? m.mod_CarcaseHeight - LShapeHeight! : posTop;

    // Width
    freeSpaceInfo.FullWidthFreeSpace = posRightPart - posLeftPart;
    freeSpaceInfo.FullWidthStartPos = posLeftPart + m.mod_CarcaseMovement;

    // Height
    freeSpaceInfo.FullHeightFreeSpace = realPosTop - posBtm;
    freeSpaceInfo.FullHeightStartPos = posBtm;
    freeSpaceInfo.PosTopShelf = posTop - posBtm;

    // Depth
    const maxDepthPos = Math.max(...backwallInfo.map(b => b.DepthPos));
    freeSpaceInfo.FullDepthFreeSpace = m.mod_CarcaseDepth - maxDepthPos;
    freeSpaceInfo.FullDepthStartPos = maxDepthPos;

    //=====================================================================================
    // Cycle through the front elements and set its free space
    //=====================================================================================

    m.mod_FrontAreaInfoList.forEach((front, index, array) => {

      // Get the front data
      let frontInfo: FrontInfo = JSON.parse(front);

      // Set the freespace width for this front
      //-------------------------------------------------------------------------------------

      freeSpaceInfo.FreeSpaceWidth.push(freeSpaceInfo.FullWidthFreeSpace);
      freeSpaceInfo.FreeSpaceWidthStartPos.push(freeSpaceInfo.FullWidthStartPos);

      // Set the freespace depth for this front
      //-------------------------------------------------------------------------------------

      let foundBackwall = FindBackwall(frontInfo.StartingPosition, frontInfo.StartingPosition + frontInfo.RealFrontHeight);
      freeSpaceInfo.FreeSpaceDepth.push(m.mod_CarcaseDepth - ((foundBackwall?.DepthPos ?? 0) + (foundBackwall?.Depth ?? 0)));
      freeSpaceInfo.FreeSpaceDepthStartPos.push((foundBackwall?.DepthPos ?? 0) + (foundBackwall?.Depth ?? 0));

      // Set the freespace height for this front
      //-------------------------------------------------------------------------------------

      // Variables
      let tmpHgt = 0;
      let startPos = 0;

      // If there is only one front
      if (array.length === 1) {
		    startPos = posBtm;
        tmpHgt = realPosTop - posBtm;       
      }

      // If it is the first front
      else if (index === 0) {
        startPos = posBtm;
        let tmpPos = frontInfo.RealFrontHeight + frontInfo.StartingPosition - (frontInfo.FingergripTop ? fingergripReductionTop : 0);
        const foundShelf = FindShelf(tmpPos);
        if (foundShelf && foundShelf.HeightPos < tmpPos) {
          tmpPos = foundShelf.HeightPos;
        }
        tmpHgt = tmpPos - posBtm;
      }

      // If it is the last front
      else if (index === array.length - 1) {
        const foundShelfBtm = FindShelf(frontInfo.StartingPosition);
        startPos = foundShelfBtm ? foundShelfBtm.HeightPos + foundShelfBtm.Height : frontInfo.StartingPosition;
        if (frontInfo.FingergripBottom) {
          startPos -= fingergripReductionBtm;
        }
        tmpHgt = realPosTop - startPos;
      }

      // All the fronts in the middle
      else {
        const foundShelfBtm = FindShelf(frontInfo.StartingPosition);
        startPos = foundShelfBtm ? foundShelfBtm.HeightPos + foundShelfBtm.Height : frontInfo.StartingPosition;
        if (frontInfo.FingergripBottom) {
          startPos += fingergripReductionBtm;
        }

        let tmpPos = Math.min(frontInfo.RealFrontHeight + frontInfo.StartingPosition, realPosTop);
        const foundShelfTop = FindShelf(tmpPos);
        if(foundShelfTop && foundShelfTop.HeightPos < tmpPos){
          tmpPos = foundShelfTop.HeightPos;
        }

        tmpHgt = tmpPos - startPos - (frontInfo.FingergripTop ? fingergripReductionTop : 0);
      }

      // Set the calculated values
      freeSpaceInfo.FreeSpaceHeight.push(tmpHgt);
      freeSpaceInfo.FreeSpaceHeightStartPos.push(startPos);
    });
  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  return JSON.stringify(freeSpaceInfo);

}


static process_StorageunitLightConstruction(m: IFuncParents_mc_Storageunit01, retTop: any, retBtm: any) {

  let librarySolution = true;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    // We only have Led's if the System is different from NoLight
    if (m.mod_LightSystem != 'NoLight') {
      let lightPartPosHeight: number = 0; //Position in Height of the part that receives the Light
      let lightPartPosWidth: number = 0; //Position in Width of the part that receives the Light
      let lightPartWidth: number = 0; //Width of the part that receives the Light

      // Get the positions of the TopShelf or BottomShelf to apply the Light's
      if (m.mod_LightPart == 'TopShelf') {
        lightPartPosHeight = retTop.HeightPos;
        lightPartPosWidth = retTop.WidthPos;
        lightPartWidth = retTop.Width;
      }
      else if (m.mod_LightPart == 'BottomShelf') {
        lightPartPosHeight = retBtm.HeightPos;
        lightPartPosWidth = retBtm.WidthPos;
        lightPartWidth = retBtm.Width;
      }
      else {
        let ErrorMessage = GlobalFunc.find_ErrorList('Error 22018', 1);
        logError(ErrorMessage.Message(''));
      }

      let lightArray: number[] = [];
      if (m.mod_LightPosX != "FreePosition") {
        lightArray = GlobalFunc.process_Descriptor(m.mod_LightPosX_matrix.Descriptor!, m.mod_CarcaseWidth); // Process Descriptor into multiple positions
      }
      else {
        if (m.mod_LightPosX1! != 0) { lightArray[0] = m.mod_LightPosX1! };
        if (m.mod_LightPosX2! != 0) { lightArray[1] = m.mod_LightPosX2! };
        if (m.mod_LightPosX3! != 0) { lightArray[2] = m.mod_LightPosX3! };
        if (m.mod_LightPosX4! != 0) { lightArray[3] = m.mod_LightPosX4! };
        if (m.mod_LightPosX5! != 0) { lightArray[4] = m.mod_LightPosX5! };
      }
      let l: number = 0;

      if (m.mod_LightSystem_matrix.Length != 0) // It's like a Spot
      {
        while (l < lightArray.length) //Do a While and insert multiple Lights of type Spot
        {

          // Add the module
          let LightSystem = m.addOD_M_mc_LightSystem01();
          // Set values to the attributes of the child
          LightSystem.mod_Height = m.mod_LightSystem_matrix.Depth;
          LightSystem.mod_Depth = m.mod_LightSystem_matrix.Width;
          LightSystem.mod_Width = m.mod_LightSystem_matrix.Length;
          // setOrigin
          LightSystem.setOrigin(lightArray[l] - m.mod_LightSystem_matrix.Width / 2, lightPartPosHeight, m.mod_CarcaseDepth - m.mod_LightSystem_matrix.Width / 2 - m.mod_LightPosY);
          l++
        }
      }
      else // It's like a Led Strip
      {
        let minPosition: number = lightArray[0] 					// Start Position of LedStrip
        let maxPosition: number = lightArray[lightArray.length - 1] 	// Final Position of LedStrip
        // Add the module
        let LightSystem = m.addOD_M_mc_LightSystem01();
        // Set values to the attributes of the child
        LightSystem.mod_Height = m.mod_LightSystem_matrix.Depth;
        LightSystem.mod_Depth = m.mod_LightSystem_matrix.Width;
        let minInsertPointX: number = 0;
        if (lightPartWidth > maxPosition - minPosition) {
          LightSystem.mod_Width = maxPosition - minPosition;
          minInsertPointX = minPosition;
        }
        else {
          LightSystem.mod_Width = lightPartWidth;
          minInsertPointX = lightPartPosWidth;
        }

        // setOrigin
        LightSystem.setOrigin(minInsertPointX, lightPartPosHeight, m.mod_CarcaseDepth - m.mod_LightSystem_matrix.Width / 2 - m.mod_LightPosY);
      }
    }
  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }
}


static process_StorageunitVertdividerConstruction(m: IFuncParents_mc_Storageunit01, FreeSpaceWidth: any, FreeSpaceHeight: any, FreeSpaceDepth: any, FreeSpaceWidthStartPos: any, FreeSpaceHeightStartPos: any, FreeSpaceDepthStartPos: any, FixedShelves?: any) {

  // Helper function for the recalculation of the freespace
  //-------------------------------------------------------------------------------------------

  function ReCalcFreeSpace(b: number, DividerCount: number, m: any) {

    let side = 1;
    if (!FreeSpaceDividerWidth[b]) {
      FreeSpaceDividerWidth[b] = [];
    }
    if (!FreeSpaceDividerWidthStartPos[b]) {
      FreeSpaceDividerWidthStartPos[b] = [];
    }

    // Manage the freespace (create two sections)
    if (VertDividerInfo.Type[b] == 'MiddleSide' || VertDividerInfo.FrontName[b] == 'mf_Drawer') {
      FreeSpaceDividerWidth[b][side] = VertDividerInfo.FrontWidth[b] - (DividerWidth[DividerCount] / 2) - FreeSpaceWidthStartPos[b - 1];
      FreeSpaceDividerWidthStartPos[b][side] = FreeSpaceWidthStartPos[b - 1];
      side++;
      FreeSpaceDividerWidth[b][side] = FreeSpaceWidth[b - 1] - (VertDividerInfo.FrontWidth[b] - (DividerWidth[DividerCount] / 2) - FreeSpaceWidthStartPos[b - 1]) - DividerWidth[DividerCount];
      FreeSpaceDividerWidthStartPos[b][side] = FreeSpaceWidthStartPos[b - 1] + (VertDividerInfo.FrontWidth[b] - (DividerWidth[DividerCount] / 2) - FreeSpaceWidthStartPos[b - 1]) + DividerWidth[DividerCount];
    }

    // Manage the freespace in depth
    else if ((VertDividerInfo.Type[b] == 'Cleat' || VertDividerInfo.Type[b] == 'MiddleSideShort') && VertDividerInfo.FrontName != 'mf_Drawer') {
      FreeSpaceDepth[b - 1] = FreeSpaceDepth[b - 1] - DividerDepth[DividerCount] - m.g.basic_OffsetFrontVertDivider;
    }
  }

  // Helper function to check the construction of the VertDivider and through errors if needed
  //-------------------------------------------------------------------------------------------

  function CheckMergingErrors(b: number, m: any): boolean {

    // Create Variable for ErrorID and reset it each cycle
    let ErrorId = '';

    // Give an error if the front has cleat and the next one does not have a cleat and the next one does not have a FixedShelf
    if ((VertDividerInfo.Type[b - 1].includes('Cleat') || VertDividerInfo.Type[b - 1].includes('MiddleSide') || VertDividerInfo.Type[b - 1].includes('MiddleSideShort')) && (VertDividerInfo.Type[b] && !VertDividerInfo.Type[b].includes('Cleat') && !VertDividerInfo.Type[b].includes('MiddleSide') && !VertDividerInfo.Type[b].includes('MiddleSideShort') && m.mod_ShelffixedTypeList[b] == 'NoFixedShelf')) {
      ErrorId = 'Error 22002';
    }

    // Give an error if the front does not have a cleat and the next one has a cleat and the next one does not have a FixedShelf
    if ((VertDividerInfo.Type[b - 1] && !VertDividerInfo.Type[b - 1].includes('Cleat') && !VertDividerInfo.Type[b - 1].includes('MiddleSide') && !VertDividerInfo.Type[b].includes('MiddleSideShort')) && (VertDividerInfo.Type[b].includes('Cleat') || VertDividerInfo.Type[b].includes('MiddleSide') || VertDividerInfo.Type[b].includes('MiddleSideShort') && m.mod_ShelffixedTypeList[b] == 'NoFixedShelf')) {
      ErrorId = 'Error 22003';
    }

    // Give an error if the front does not have a bottomshelf bellow and the divider type is different
    if (VertDividerInfo.Type[b - 1] != VertDividerInfo.Type[b] && m.mod_ShelffixedTypeList[b] == 'NoFixedShelf') {
      ErrorId = 'Error 22007';
    }

    // Give an error if the front does not have a bottomshelf bellow and the divider type is equal but there are different front width for each Front
    if (VertDividerInfo.Type[b - 1] == VertDividerInfo.Type[b] && m.mod_ShelffixedTypeList[b] == 'NoFixedShelf' && VertDividerInfo.FrontWidth[b - 1] != VertDividerInfo.FrontWidth[b] && (VertDividerInfo.Type[b].includes('Cleat') || VertDividerInfo.Type[b].includes('MiddleSide') || VertDividerInfo.Type[b].includes('MiddleSideShort') || VertDividerInfo.Type[b - 1].includes('Cleat') || VertDividerInfo.Type[b - 1].includes('MiddleSide') || VertDividerInfo.Type[b - 1].includes('MiddleSideShort'))) {
      ErrorId = 'Error 22008';
    }

    if (ErrorId) {
      let ErrorMessage = GlobalFunc.find_ErrorList(ErrorId, 1);
      logError(ErrorMessage.Message(''));
      return false;
    }
    else {
      return true;
    }
  }

  // Helper function to insert the modules for the vertical deviders
  //-------------------------------------------------------------------------------------------
  function InsertDivider(createDevider: boolean, b: number, m: any) {

    // Check if there is no error
    if (createDevider) {

      // Add the dividers
      let divider = m.addOD_M_mc_VertDivider01();

      // Set attributes of the child
      divider.mod_Width = DividerWidth[b];
      divider.mod_Height = DividerHeight[b];
      divider.mod_Depth = DividerDepth[b];
      divider.mod_VertDividerType = DividerType[b];

      // Push the divider into the array of dividers
      Dividers.push(divider);

      // setOrigin
      divider.setOrigin(DividerWidthStartPos[b], DividerHeightStartPos[b], DividerDepthStartPos[b]);
    }
  }

  // Helper function to update the modules for the vertical deviders
  //-------------------------------------------------------------------------------------
  function UpdateDivider(b: number) {
    Dividers[b - 1].mod_Height = DividerHeight[b];
  }

  // Variables
  //-------------------------------------------------------------------------------------

  let FreeSpaceDividerWidth: number[][] = [];
  let FreeSpaceDividerWidthStartPos: number[][] = [];
  const DividerHeight: number[] = [0];
  const DividerHeightStartPos: number[] = [0];
  const DividerWidth: number[] = [0];						// the number of records from this array equals the total number of dividers in a cabinet
  const DividerWidthStartPos: number[] = [0];		// the number of records from this array equals the total number of dividers in a cabinet
  const DividerDepth: number[] = [];
  const DividerDepthStartPos: number[] = [0];
  const DividerType: string[] = [];
  const Dividers: any = [];
  let DividerCount = 0;
  let createDivider = true;

  const DividerWidthPerFront: number[] = [0];					// the number of records from this array equals the total number of fronts in a cabinet (position in array exists even if no vert divider exists for a specific front)
  const DividerWidthStartPosPerFront: number[] = [0];	// the number of records from this array equals the total number of fronts in a cabinet (position in array exists even if no vert divider exists for a specific front)
  const DividerDepthPerFront: number[] = [0];					// the number of records from this array equals the total number of fronts in a cabinet (position in array exists even if no vert divider exists for a specific front)
  const DividerDepthStartPosPerFront: number[] = [0];	// the number of records from this array equals the total number of fronts in a cabinet (position in array exists even if no vert divider exists for a specific front)

  // Parse the stored data into the JSON-Format
  let VertDividerInfo = JSON.parse(m.mod_VertDividerInfoList[0]);
  let librarySolution = true;

  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    // Cycle through the vertical deviders and make the calculations
    //-------------------------------------------------------------------------------------------

    for (let b = 1; b <= VertDividerInfo.Type.length; b++) {

      if (VertDividerInfo.Type[b] == 'Cleat' || VertDividerInfo.Type[b] == 'MiddleSide' || VertDividerInfo.Type[b] == 'MiddleSideShort') {

        // Merge the vertical divider with the front section below, because there is no fixed shelf
        let tmpDo = false;
        if (tmpDo && b > 1) {

          // Set the new height of the divider
          DividerHeight[DividerCount] += FreeSpaceHeight[b];

          // Call the function for the calculations
          ReCalcFreeSpace(b, DividerCount, m);
          UpdateDivider(DividerCount);
          createDivider = CheckMergingErrors(b, m);

          DividerWidthPerFront[b] = DividerWidthPerFront[b - 1];
          DividerWidthStartPosPerFront[b] = DividerWidthStartPosPerFront[b - 1];
          DividerDepthPerFront[b] = DividerDepthPerFront[b - 1];
          DividerDepthStartPosPerFront[b] = DividerDepthStartPosPerFront[b - 1];
        }

        // Insert a vertical divider for the next front section
        else {

          // Counter
          DividerCount++

          // Managing the height
          DividerHeight[DividerCount] = FreeSpaceHeight[b - 1];
          DividerHeightStartPos[DividerCount] = FreeSpaceHeightStartPos[b - 1];

          // Managing the width
          if (VertDividerInfo.Type[b] == 'MiddleSide' || VertDividerInfo.Type[b] == 'MiddleSideShort') {
            DividerWidth[DividerCount] = m.g.basic_SidepanelmiddleThk;
          }
          else if (VertDividerInfo.Type[b] == 'Cleat') {
            DividerWidth[DividerCount] = m.g.basic_CleatWidth;
          }
          DividerWidthStartPos[DividerCount] = VertDividerInfo.FrontWidth[b] - (DividerWidth[DividerCount] / 2);

          // Managing the depth
          if (VertDividerInfo.Type[b] == 'MiddleSide') {
            DividerDepth[DividerCount] = FreeSpaceDepth[b - 1] - m.g.basic_OffsetFrontVertDivider;
          }
          else if (VertDividerInfo.Type[b] == 'MiddleSideShort') {
            DividerDepth[DividerCount] = m.g.basic_SidepanelmiddleShortWidth;
          }
          else if (VertDividerInfo.Type[b] == 'Cleat') {
            DividerDepth[DividerCount] = m.g.basic_CleatThk;
          }
          DividerDepthStartPos[DividerCount] = FreeSpaceDepthStartPos[b - 1] + FreeSpaceDepth[b - 1] - DividerDepth[DividerCount] - m.g.basic_OffsetFrontVertDivider;

          // Type of divider
          DividerType[DividerCount] = VertDividerInfo.Type[b];

          // Call the function for the calculation of the freespace
          ReCalcFreeSpace(b, DividerCount, m)

          // Call the function to insert the module
          InsertDivider(createDivider, DividerCount, m);

          DividerWidthPerFront[b] = DividerWidth[DividerCount];
          DividerWidthStartPosPerFront[b] = DividerWidthStartPos[DividerCount];
          DividerDepthPerFront[b] = DividerDepth[DividerCount];
          DividerDepthStartPosPerFront[b] = DividerDepthStartPos[DividerCount];
        }
      }
      else {
        // Call the function for the calculation of the freespace
        ReCalcFreeSpace(b, DividerCount, m)

        DividerWidthPerFront[b] = 0;
        DividerWidthStartPosPerFront[b] = 0;
        DividerDepthPerFront[b] = 0;
        DividerDepthStartPosPerFront[b] = 0;
      }
    }
  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  // Create VertDividerInfoEnhanced
  //-------------------------------------------------------------------------------------------

  // Create the Variable VertDividerInfoEnhanced
  let VertDividerInfoEnhanced: any = {
    Type: VertDividerInfo.Type,
    FrontWidth: VertDividerInfo.FrontWidth,
    FrontName: VertDividerInfo.FrontName,
    PosX: DividerWidthStartPosPerFront,
    DimX: DividerWidthPerFront,
    FreeSpaceWidth: FreeSpaceDividerWidth,
    FreeSpaceWidthStartPos: FreeSpaceDividerWidthStartPos
  };

  // Update attribute mod_VertDividerInfoList
  let VertDividerInfoEnhancedJson = JSON.stringify(VertDividerInfoEnhanced);
  m.mod_VertDividerInfoList[0] = VertDividerInfoEnhancedJson;

  // Return data to mc_Storageunit
  //-------------------------------------------------------------------------------------------

  // Create the object to return it
  let VertDividerCarcData: any = {
    DividerWidthStartPosPerFront: DividerWidthStartPosPerFront,
    DividerDepthStartPosPerFront: DividerDepthStartPosPerFront,
    DividerWidthPerFront: DividerWidthPerFront,
    DividerDepthPerFront: DividerDepthPerFront,
    FreeSpaceDepth: FreeSpaceDepth
  }

  // Stringify and return the data
  return JSON.stringify(VertDividerCarcData);

}


// Return list of values from CarcasePartsShape\n//########################################################
static find_CarcasePartsShape(Part: string, Fingergrip: string, AdditionalInfo01: string, AdditionalInfo02: string, AdditionalInfo03:string, AdditionalInfo04:string):ICT_tab_CarcasePartsShape[]{

	// Wildcard parameters
	let WildcardParams: any = {	
    in_Fingergrip: Fingergrip,
    in_AdditionalInfo01: AdditionalInfo01,
    in_AdditionalInfo02: AdditionalInfo02,
		in_AdditionalInfo03: AdditionalInfo03,
		in_AdditionalInfo04: AdditionalInfo04
	};
	
	// Fixed parameters
	let FixedParams: any = {
    in_Part: Part
	};
	
	// Range parameters
	let RangeParams: any = {
	};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=false;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_CarcasePartsShape, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined || retVal.length == 0) {
    let Text = Part + ' - ' + Fingergrip + ' - ' + AdditionalInfo01 + ' - ' + AdditionalInfo02 + ' - ' + AdditionalInfo03 + ' - ' + AdditionalInfo04;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14027',1);
		logError(ErrorMessage.Message(Text));
	}
	// Return Value
	return retVal;
}


// Create the SvgPath for parts with Shape
static process_CarcasePartsShape(m: any /* WARNING: No parent found; assuming 'any' */, Part:string, Fingergrip:string, AdditionalInfo01:string, AdditionalInfo02:string, AdditionalInfo03:string, AdditionalInfo04:string){

	//====================================================================
	// Initialize variables
	//====================================================================
	interface ishapeInfo {
		SvgPath?: string;
    ExtrudeDirection?: string;
	}

  let shapeInfo: ishapeInfo = {
    SvgPath: undefined,
    ExtrudeDirection: undefined
  };


	//====================================================================
	// Find the Shape
	//====================================================================
	let carcasePartsShape = GlobalFunc.find_CarcasePartsShape(Part, Fingergrip, AdditionalInfo01, AdditionalInfo02, AdditionalInfo03, AdditionalInfo04).sort((a, b) => {
		return a.Sequence! - b.Sequence!;
	});

	//====================================================================
	// Create svgPath
	//====================================================================
	let i: number = 0;
	carcasePartsShape.forEach(cps =>
	{
		if (i == 0) { shapeInfo.SvgPath = '' }
		i++
		shapeInfo.SvgPath += cps.SvgPath(m) + ' ';
		shapeInfo.ExtrudeDirection = cps.ExtrudeDirection;
	});

	// Return result
  return shapeInfo;
}


// Process Side Panel Shape
static process_StorageunitSidepanelShape(m: any /* WARNING: No parent found; assuming 'any' */, Part:string){

	//====================================================================
	// Initialize variables
	//====================================================================
	interface ishapeInfo {
		SvgPath?: string;
    ExtrudeDirection?: string;
	}

  let shapeInfo: ishapeInfo = {
    SvgPath: undefined,
    ExtrudeDirection: undefined
  };

  //====================================================================
  // Declare variables for the function find_CarcasePartsShape
  //====================================================================
  let part = Part;
  let fingergrip = 'All'
  let additionalInfo01 = m.mod_SlopeAngle != 0 ? 'SlopedCeiling' : 'All';
  let additionalInfo02 = m.mod_SlopeAngle != 0 ? m.mod_SlopedCeilingConstruction : 'All';
  let additionalInfo03 = m.mod_SlopeAngle != 0 ? m.mod_CarcaseConnectionLeftTop : 'All';
  let additionalInfo04 = m.mod_SlopeAngle != 0 ? 'All' : 'All';


  //====================================================================
  // Find the Shape for Cabinets without Angles and (with fingergrip middle or fingergrip top)
  // or
  // For Cabinets with Angles -with or without fingergrip-
  //====================================================================
  let Shape;
  if ((m.mod_SlopeAngle == 0 && (m.mod_FingergripQtyMiddle > 0 || m.mod_FingergripTop == true)) || m.mod_SlopeAngle != 0) {

    //--------------- Get the generic Shape-----------------
    Shape = GlobalFunc.find_CarcasePartsShape(part, fingergrip, additionalInfo01, additionalInfo02, additionalInfo03, additionalInfo04).sort((a, b) => {
      return a.Sequence! - b.Sequence!;
    });

    //--------------- If there's fingergrip on top, get the Shape of the fingergrip on top-----------------
    if (m.mod_FingergripTop == true) {

      let FingergripTop = GlobalFunc.find_CarcasePartsShape(part, 'Top', additionalInfo01, additionalInfo02, additionalInfo03, additionalInfo04).sort((a, b) => {
        return a.Sequence! - b.Sequence!;
      });

      // push results to Shape
      FingergripTop.forEach(element => {
        Shape.push(element);
      });
    }

    //--------------- If there's fingergrip in the middle, get the Shape of the fingergrip middle as many times as needed -----------------
    if (m.mod_FingergripQtyMiddle > 0) {

      for (let i = 1; i <= m.mod_FingergripQtyMiddle; i++) {
        let FingergripMiddle = GlobalFunc.find_CarcasePartsShape(part, 'Middle' + i, additionalInfo01, additionalInfo02, additionalInfo03, additionalInfo04).sort((a, b) => {
          return a.Sequence! - b.Sequence!;
        });

        // push results to Shape
        FingergripMiddle.forEach(element => {
          Shape.push(element);
        });
      }
    }
  }

	//====================================================================
	// Create svgPath
	//====================================================================
	let i: number = 0;
  if (Shape != undefined && Shape.length > 0) {

    //--------------- Sort the Shape Array-----------------
    let ShapeSorted = Shape.sort((a, b) => {
      return a.Sequence! - b.Sequence!;
    });

    //--------------- Create complete string-----------------
    ShapeSorted.forEach(cps =>
    {
      if (i == 0) { shapeInfo.SvgPath = '' }
      i++
      shapeInfo.SvgPath += cps.SvgPath(m) + ' ';
      shapeInfo.ExtrudeDirection = cps.ExtrudeDirection;
    });
  }
	
  //====================================================================
  // Return result
  //====================================================================
  return shapeInfo;
}


static process_Fridge(m: any, carc: any, FrontNumber: number = 0, LastFront: number = 0) {

	//===================================================================================
	// Interfaces
	//===================================================================================

	// Interface for the fixed shelves
	interface ShelfFixedInfo {
		PosY: number;                  // Height position of the fixed shelf
		Fingergrip: boolean;           // Fingergrip in front of the fixed shelf
		Position: string;              // Position of the fixed shelf related to the fingergrip and front gap
		FingergripType: string;        // Version of fingergrip to get the dimensions
		Backside: string;              // Attribute for "Contact" or "ThrougBw"
		Part: string;                  // Shelffixed or Rail
	}

	// Interface for the front data (backwalls and free space)
	interface FrontInfo {
		FrontCategory: string            // Identificator of sepecial fronts
		StartingPosition: number;        // Starting position of the front
		FrontHeight: number;             // Height of the front set from the UserExit
		RealFrontHeight: number;         // Calculated front height without gaps
		BackwallConstruction: string;    // Backwall construction selected on the front
		BackwallPosition: number;        // Backwall position selected on the front
		FixedshelfBottom: boolean;       // Fixed shelf selected on the front
		FingergripBottom: boolean;       // Fingergrip on bottom (true / false)
		FingergripTop: boolean;          // Fingergrip on top (true / false)
		FringergripType: string;         // Type of fingergrip (dimensions)
  	}

	// Interface for the fridge data (for mf_Fridge)
	interface FridgeData {
		FridgePos: number;
		FrontHgt1: number;
		FrontHgt2: number;
		FrontPos2: number;
		GraphicId: string;
		SplitDoor: boolean
	}

	let fridgeInfo: FridgeData = {
		FridgePos: 0,
		FrontHgt1: 0,
		FrontHgt2: 0,
		FrontPos2: 0,
		GraphicId: "None",
		SplitDoor: false
	}

	//===================================================================================
	// Helper functions
	//===================================================================================

	// Function to create ShelfFixedInfo
	//-------------------------------------------------------------------------------------

	function CreateShelfFixedInfo(posY: number): ShelfFixedInfo {
		return {
			PosY: posY,
			Fingergrip: false,
			Position: 'GapMiddle',
			FingergripType: 'None', 
			Backside: 'ThroughBw',
			Part: 'part_Shelffixed'
		};
	}

	// Function to create FrontInfo
	//-------------------------------------------------------------------------------------

	function CreateFrontInfo(startingPosition: number, frontHeightSelection: number, totalHeight: number): FrontInfo {
		return {
			FrontCategory: "Fridge",
			StartingPosition: startingPosition,
			FrontHeight: frontHeightSelection,
			RealFrontHeight: totalHeight,
			BackwallConstruction: m.mod_CarcaseBackwallConstruction,
			BackwallPosition: m.mod_BackwallPos,
			FixedshelfBottom: true,
			FingergripBottom: false,
			FingergripTop: false,		
			FringergripType: 'NoFingergrip'
		};
	}	

	//===================================================================================
	//          Main calculations
	//===================================================================================

	// Create data for the fridge
	//-------------------------------------------------------------------------

	// Variables
	let hlfGap = m.mod_FrontGapHor / 2;
	let fridgePos = 0;

	// Get the data from the tables
	const fridgeSupplier = m.mod_FridgeSupplier === 'None' || m.mod_FridgeId === 'None' ? 'None' : m.mod_FridgeSupplier;
	const fridgeId = m.mod_FridgeSupplier === 'None' || m.mod_FridgeId === 'None' ? 'None' : m.mod_FridgeId;

	let fridgeData = GlobalFunc.find_FridgeMapping(fridgeSupplier, fridgeId);
  	let fridgeConstruction = GlobalFunc.find_FridgeConstruction(fridgeData.ConstructionId!);
	fridgeInfo.SplitDoor = fridgeConstruction.SplitDoor!;
	fridgeInfo.GraphicId = fridgeData.GraphicId!;

  	// Calculation of the front heights and fridge position
	//-------------------------------------------------------------------------

	if (fridgeConstruction.SplitDoor) {

		// Front heights
		let frontHeights = GlobalFunc.process_Descriptor(m.mod_FridgeFrontHeightDescriptor, m.mod_FrontHeight);
		fridgeInfo.FrontHgt1 = frontHeights[0] - hlfGap;
		fridgeInfo.FrontHgt2 = m.mod_FrontHeight - frontHeights[0] - hlfGap;
		fridgeInfo.FrontPos2 = frontHeights[0] + hlfGap;

    	// Calculate position of the fridge
		let midPos = (fridgeConstruction.MaxHeightDoorBtm - fridgeConstruction.MinHeightDoorBtm) / 2 + fridgeConstruction.MinHeightDoorBtm;
		fridgePos = frontHeights[0] - midPos;
	}
	else {

		// Front height
		fridgeInfo.FrontHgt1 = m.mod_FrontHeight;

		// Calculate position of the fridge
		if (m.mod_FridgeCarcasePositionType == 'Bottom') {
			fridgePos = m.mod_ShelffixedThk / 2;
		}
		else if (m.mod_FridgeCarcasePositionType == 'Top') {
			fridgePos = m.mod_FrontHeight - fridgeConstruction.DefaultHeight - m.mod_ShelffixedThk / 2;
		}
		else {
			let totalSpace = m.mod_FrontHeight - fridgeConstruction.DefaultHeight;
			let freeSpaces = GlobalFunc.process_Descriptor(m.mod_FridgeCarcaseSpaceDescriptor, totalSpace);
			fridgePos = freeSpaces[0];
		}
	}

  	// Add the shelves
	let test = FrontNumber;
	let Pos = m.mod_FrontPosStart;
	let lastFront = LastFront;

	let shelfPosition = m.mod_FrontPosStart + fridgePos - m.mod_ShelffixedThk / 2;
	carc.mod_ShelffixedInfoList.push(JSON.stringify(CreateShelfFixedInfo(shelfPosition)));

	shelfPosition += fridgeConstruction.DefaultHeight + m.mod_ShelffixedThk;
	carc.mod_ShelffixedInfoList.push(JSON.stringify(CreateShelfFixedInfo(shelfPosition)));

	// Add the frontInfo (Backwalls)
	carc.mod_FrontAreaInfoList.push(JSON.stringify(CreateFrontInfo(m.mod_FrontPosStart, m.mod_FrontHeightSelection, m.mod_FrontHeight)))

	// Output the data for the mf_Fridge
	fridgeInfo.FridgePos = fridgePos;
	m.mod_FridgeInfo = JSON.stringify(fridgeInfo);
}


static find_ApplianceGraphicLibrary(GraphicId: string): ICT_tab_ApplianceGraphicLibrary[]{

	let retEntry = ct_tab_ApplianceGraphicLibrary.filter(p => p.in_GraphicId == GraphicId);

	if (retEntry == undefined) {
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11012',1);
		logError(ErrorMessage.Message(GraphicId));
	}

	return retEntry!;
}


static find_HoodMapping(Supplier: string, HoodId: string):ICT_tab_HoodMapping{

	let retEntry = ct_tab_HoodMapping.find(p => p.in_Supplier == Supplier && p.in_HoodId == HoodId)!;
	
	if (retEntry == undefined) {
		let Text = Supplier + " - " + HoodId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13024',1);
		logError(ErrorMessage.Message(Text));
	}	

	return retEntry!;
}



// Find HobMapping
static find_HobMapping(Supplier: string, HobId: string):ICT_tab_HobMapping{

	let retEntry = ct_tab_HobMapping.find(p => p.in_Supplier == Supplier && p.in_HobId == HobId)!;
	
	if (retEntry == undefined) {
		let Text = Supplier + " - " + HobId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13025',1);
		logError(ErrorMessage.Message(Text));
	}	

	return retEntry!;
}


// Find HobConstruction
static find_HobConstruction(ConstructionId: string): ICT_tab_HobConstruction{

	let retEntry = ct_tab_HobConstruction.find(p => p.in_ConstructionId == ConstructionId);

	if (retEntry == undefined) {
		let Text = ConstructionId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11013',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry!;
}


// Find SinkMapping
static find_SinkMapping(Supplier: string, SinkId: string):ICT_tab_SinkMapping{

	let retEntry = ct_tab_SinkMapping.find(p => p.in_Supplier == Supplier && p.in_SinkId == SinkId)!;
	
	if (retEntry == undefined) {
		let Text = Supplier + " - " + SinkId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13026',1);
		logError(ErrorMessage.Message(Text));
	}	

	return retEntry!;
}


// Find SinkConstruction
static find_SinkConstruction(ConstructionId: string): ICT_tab_SinkConstruction{

	let retEntry = ct_tab_SinkConstruction.find(p => p.in_ConstructionId == ConstructionId);

	if (retEntry == undefined) {
		let Text = ConstructionId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11014',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry!;
}


// Filter Sawing Angle Library\n//########################################################
static find_SawingAngleLibrary (ProcessingId:string):ICT_tab_SawingAngleLibrary[]{
	let retEntry = ct_tab_SawingAngleLibrary.filter(p=> p.in_ProcessingId == ProcessingId)!;
	return retEntry!;
}


// Calculate and insert NC-out for Sawing Angle\n//########################################################
static ops_SawingAngle(ncElement: any, ProcessingId: string, StartPointX: number, StartPointY: number, EndPointX: number, EndPointY: number, Angle: number){
  
  let sawingsData = GlobalFunc.find_SawingAngleLibrary(ProcessingId);

  try { 

    sawingsData.forEach(sawingData => {
      let angleSaw = ncElement.addncout_SawingAngle()
      angleSaw.nc_TOOL = "124";
      angleSaw.nc_Side = "Top";
      angleSaw.nc_XA = sawingData.XA(StartPointX);
      angleSaw.nc_YA = sawingData.YA(StartPointY);
      angleSaw.nc_XE = sawingData.XE(EndPointX);
      angleSaw.nc_YE = sawingData.YE(EndPointY);
      angleSaw.nc_XY = sawingData.XY
      angleSaw.nc_WI = sawingData.WI(Angle);
      angleSaw.nc_EM = sawingData.EM;
      angleSaw.nc_Z_ = sawingData.Z_;
      angleSaw.nc_VZ = sawingData.VZ;
      angleSaw.nc_RK = sawingData.RK;
      angleSaw.nc_VT = sawingData.VT;
      angleSaw.nc_AB = sawingData.AB;
      angleSaw.nc_KO = sawingData.matrix_KO || "00";
      if (sawingData.matrix_NB) { angleSaw.nc_NB = sawingData.matrix_NB };
      if (sawingData.matrix_T_) { angleSaw.nc_NB = sawingData.matrix_T_ };
      
    })
  }
  catch (error: any) {
			
		} 
  
}


// Filter Sawing Vertical Library\n//########################################################
static find_SawingVertLibrary (ProcessingId:string, Part2Position:string):ICT_tab_SawingVertLibrary[]{
	let retEntry = ct_tab_SawingVertLibrary.filter(p=> p.in_ProcessingId == ProcessingId && p.in_Part2Position == Part2Position)!;
	return retEntry!;
}


// Generation of Backwall Groove\n//########################################################
static ops_BackwallGroove(elem: any, partSelf: any, part2: any, posRel: any, ProcessingId: string, PartSelfOrientation: string) {

  try {

    // Create variables
    let overcut: number = partSelf._g.basic_GrooveThroughOversizeSecurityDistance; // Over dimension on each side of the groove, in case of through groove
    let part2Position: string = '';
    let partSelfLength: number = 0;
    //====================================================================
    // Calculate part2Position
    //====================================================================
    if (PartSelfOrientation == 'Vertical') {
      partSelfLength = partSelf._dimy;
      if (posRel.x > 0) {
        part2Position = 'Right'
      }
      else if (posRel.x < 0) {
        part2Position = 'Left'
      }
      else {
        throw new Error('ops_BackwallGroove: Cannot identify the side of the collision. Groove could not be generated');
      }
    }
    else if (PartSelfOrientation == 'Horizontal') {
      partSelfLength = partSelf._dimx;
      if (posRel.y > 0) {
        part2Position = 'Top'
      }
      else if (posRel.y < 0) {
        part2Position = 'Btm'
      }
      else {
        throw new Error('ops_BackwallGroove: Cannot identify the side of the collision. Groove could not be generated');
      }
    }
    else { 
      throw new Error('ops_BackwallGroove: Cannot identify the orienttaion of the part. Groove could not be generated');
    }

    //====================================================================
    // Get GrooveData
    //====================================================================
    let groovesData = GlobalFunc.find_SawingVertLibrary(ProcessingId, part2Position);


    groovesData.forEach(grooveData => {
      let grooveElement = elem.addncout_Groove()
      grooveElement.nc_TOOL = "109";
      grooveElement.nc_Side = grooveData.Side;
      grooveElement.nc_XA = grooveData.XA(partSelf, part2, posRel) < 0 ? 0 - overcut : grooveData.XA(partSelf, part2, posRel); // StartPosX
      grooveElement.nc_YA = grooveData.YA(partSelf, part2, posRel); // StartPosY
      grooveElement.nc_XE = grooveData.XE(partSelf, part2, posRel) > partSelfLength ? partSelfLength + overcut : grooveData.XE(partSelf, part2, posRel); // EndPosX
      grooveElement.nc_YE = grooveData.YE(partSelf, part2, posRel); // EndPosY
      grooveElement.nc_TI = grooveData.TI(partSelf, part2, posRel); // Depth
      grooveElement.nc_NB = grooveData.NB(partSelf, part2, posRel); // Width
      grooveElement.nc_RK = grooveData.RK;
      grooveElement.nc_EM = grooveData.EM;
      grooveElement.nc_KO = grooveData.matrix_KO || "00";
    })
  }

  catch (error: any) {

  } 











}





// Generation of vertical pockets for fingergrips\n//########################################################
static ops_FingergripPocketVert  (elem: any, partSelf: any, part2: any, posRel: any, ProcessingId: string, Part: string) {

  try {

    //====================================================================
    // Calculate Fingergrip position
    //====================================================================
    
    //--------------- Initialize variables-----------------
	
    interface iFingergripInfo {
      Position?: number[];
      Height?: number[];
      Depth?: number[];
	  }
    let fingergripInfo: iFingergripInfo = JSON.parse(partSelf.pa_FingergripInfo);

    for (let i = 0; i <= fingergripInfo.Position!.length - 1; i++) {
      //====================================================================
      // Get data from table HardwareMillingLibrary for the ProcessingId and part
      //====================================================================

      let pocketsData = GlobalFunc.find_HardwareMilingLibrary(ProcessingId, Part);

      //====================================================================
      // Cycle through all the grooves (in case there's more than 1)
      //====================================================================

      pocketsData.forEach(pocket => {
        let pocketElement = elem.addncout_Pocket()
        pocketElement.nc_TOOL = "112";
        pocketElement.nc_Side = pocket.Side;
        pocketElement.nc_XA = pocket.XA(fingergripInfo.Position![i], partSelf, '', ''); // CenterPosX
        pocketElement.nc_YA = pocket.YA(0, partSelf, '', ''); // CenterPosY
        pocketElement.nc_LA = pocket.LA(fingergripInfo.Height![i], partSelf, '', ''); // Length
        pocketElement.nc_BR = pocket.BR(fingergripInfo.Depth![i], partSelf, '', ''); // Width
        pocketElement.nc_TI = pocket.TI(0, partSelf, '', ''); // Depth
        pocketElement.nc_RD = pocket.matrix_RD || 0;
        pocketElement.nc_KO = pocket.matrix_KO || "00";
        if (pocket.matrix_T_ != '') {
          pocketElement.nc_T_ = pocket.matrix_T_;
        }
        
      });
    }



  }

  catch (error: any) {

  } 

}





static find_SlopedCeilingSettings(Construction:string):ICT_tab_SlopedCeilingSettings{
  let retEntry = ct_tab_SlopedCeilingSettings.find(p => p.in_Construction == Construction);
	if (retEntry == undefined) {
    let Text = 'Construction: ' + Construction;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14028',1);
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Insert NC-out for Sawing Vert
static ops_SawingVert(ncElement: any, partSelf: any, part2: any, posRel: any, ProcessingId: string, Part2Position: string){
  
  let sawingsData = GlobalFunc.find_SawingVertLibrary(ProcessingId, Part2Position);

  try { 

    sawingsData.forEach(sawingData => {
      let sawingElement = ncElement.addncout_Groove()
      sawingElement.nc_TOOL = "109";
      sawingElement.nc_Side = sawingData.Side;
      sawingElement.nc_XA = sawingData.XA(partSelf, part2, posRel); // StartPosX
      sawingElement.nc_YA = sawingData.YA(partSelf, part2, posRel); // StartPosY
      sawingElement.nc_XE = sawingData.XE(partSelf, part2, posRel); // EndPosX
      sawingElement.nc_YE = sawingData.YE(partSelf, part2, posRel); // EndPosY
      sawingElement.nc_TI = sawingData.TI(partSelf, part2, posRel); // Depth
      sawingElement.nc_NB = sawingData.NB(partSelf, part2, posRel); // Width
      sawingElement.nc_RK = sawingData.RK;
      sawingElement.nc_EM = sawingData.EM;
      sawingElement.nc_KO = sawingData.matrix_KO || "00";
      
    })
  }
  catch (error: any) {
			
		} 
  
}


// Find Carcase Sidepanel Settings
static find_CarcaseSidepanelSettings(ModuleName:string, SidepanelType: string, Side: string, AdditionalInfo01: string = 'All'): ICT_tab_CarcaseSidepanelSettings{

  let retEntry = ct_tab_CarcaseSidepanelSettings.find(p => p.in_ModuleName == ModuleName && p.in_SidepanelType == SidepanelType && p.in_Side == Side && p.in_AdditionalInfo01 == AdditionalInfo01)!;

  if (retEntry == undefined) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14029', 1)
    logError(ErrorMessage.Message('ModuleName = ' + ModuleName + ', SidepanelType = ' + SidepanelType + ', Side = ' + Side + ', AdditionalInfo01 = ' + AdditionalInfo01));
  }
  return retEntry!;

}


static find_FrontEdgeColorMapping(FrontProgram:string, FrontColor:string):ICT_tab_FrontEdgeColorMapping{

	// Wildcard parameters
	let WildcardParams: any = {	
		in_FrontProgram: FrontProgram
	};
	
	// Fixed parameters
	let FixedParams: any = {
		in_FrontColor: FrontColor
	};
	
	// Range parameters
	let RangeParams: any = {};

	// Return multiple rows or a single row (UniqueOutput = true returns a single row)
	let UniqueOutput=true;

	// Call the function and return the value
	let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_FrontEdgeColorMapping, WildcardParams, FixedParams, RangeParams, UniqueOutput);
	if (retVal == undefined) {
		let Text = FrontProgram + ' - ' + FrontColor;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13027',1);
		logError(ErrorMessage.Message(Text));
	}
	// Return Value
	return retVal;
}


// Find carcase shelf bottom settings
static find_CarcaseShelfbtmSettings (ModuleName:string, ShelfbtmConstruction: string, AdditionalInfo01: string = 'All'): ICT_tab_CarcaseShelfbtmSettings{

  let retEntry = ct_tab_CarcaseShelfbtmSettings.find(p => p.in_ModuleName == ModuleName && p.in_ShelfbtmConstruction == ShelfbtmConstruction && p.in_AdditionalInfo01 == AdditionalInfo01)!;

  if (retEntry == undefined) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14030', 1)
    logError(ErrorMessage.Message('ModuleName = ' + ModuleName + ', ShelfbtmConstruction = ' + ShelfbtmConstruction + ', AdditionalInfo01 = ' + AdditionalInfo01));
  }
  return retEntry!;

}


// Find Filler Settings
static find_FillerSettings(FillerType: string, Direction: string, AdditionalInfo01: string = 'All'): ICT_tab_FillerSettings{

  let retEntry = ct_tab_FillerSettings.find(p => p.in_FillerType == FillerType && p.in_Direction == Direction && p.in_AdditionalInfo01 == AdditionalInfo01)!;

  if (retEntry == undefined) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14031', 1)
    logError(ErrorMessage.Message('FillerType = ' + FillerType + ', Direction = ' + Direction + ', AdditionalInfo01 = ' + AdditionalInfo01));
  }
  return retEntry!;

}


static find_FillerHardwareSettings(TypeElement: string, FillerType: string, FillerHardwareType: string, FrontHeight: number, FrontWidth: number, FingergripTypeTop: string, FingergripTypeBtm: string): ICT_tab_FillerHardwareSettings[]{

  let retEntry = ct_tab_FillerHardwareSettings.filter(p => p.in_TypeElement == TypeElement && p.in_FillerType == FillerType && p.in_FillerHardwareType == FillerHardwareType && p.in_FrontHeightMin! < FrontHeight && p.in_FrontHeightMax! >= FrontHeight && p.in_FrontWidthMin! < FrontWidth && p.in_FrontWidthMax! >= FrontWidth && p.in_FingergripTypeTop == FingergripTypeTop && p.in_FingergripTypeBtm == FingergripTypeBtm);

	if (retEntry == undefined || retEntry.length == 0) {
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 14033',1);
		logError(ErrorMessage.Message('TypeElement= ' + TypeElement + ', FillerType= ' + FillerType + ', FillerHardwareType= ' + FillerHardwareType + ', FrontHeight= ' + FrontHeight + ', FrontWidth= ' + FrontWidth + ', FingergripTypeTop= ' + FingergripTypeTop + ', FingergripTypeBtm= ' + FingergripTypeBtm));
	}

	return retEntry!;
}


// Containts an API-like setup for 2D drawings generation
static process_DrawingCalculationsApi() {

    enum FeatureType {
        DRILL_VERTICAL = 'DRILL_VERTICAL',
        DRILL_HORIZONTAL = 'DRILL_HORIZONTAL',
        GROOVE = 'GROOVE',
        POCKET = 'POCKET',
        SKIP = 'SKIP',
        UNKNOWN = 'UNKNOWN',
        PART = 'PART',
        CUTOUT = 'CUTOUT',
        VISIBLE_EDGE = 'VISIBLE_EDGE',
        COUNTERTOP_CONNECTION_SHORT = 'COUNTERTOP_CONNECTION_SHORT',
        COUNTERTOP_CONNECTION_LONG = 'COUNTERTOP_CONNECTION_LONG',
    }
    // ------------------------------
    // Drawing constants and settings
    // ------------------------------
    const DrawingOptions = {
        DrawingCanvasMargin: 50,
        DrawingCanvasWidth: 1920,
        DrawingCanvasEdgeColor: 'magenta',
        DrawingCanvasBackgroundColor: '#FFFFFF',
        DrawingColorFillDrillHorizontal: '#ffffc6',
        DrawingColorFillDrillVertical: 'gray',
        DrawingColorFillError: '#FF0000',
        DrawingColorFillGroove: '#7fff8e',
        DrawingColorFillPart: '#EEEEEE',
        DrawingColorFillPocket: '#7fc9ff',
        DrawingColorFillSkip: '#FF00FF',
        DrawingColorFillUnknown: '#000000',
        DrawingColorStrokeFeature: '#000000',
        DrawingColorStrokeAnnotation: '#000000',
        DrawingColorStrokeDashedReferenceLine: '#999999',
        DrawingAnnotationDrawDashedReferenceLines: true,
        DrawingAnnotationFontSize: 13,
        DrawingAnnotationFontFamily: 'Arial narrow',
        DrawingAnnotationStrokeWidth: 0.5,
        DrawingTableStrokeWidth: 1,
        DrawingFeatureStrokeWidth: 1,
        DrawingAnnotationReferenceLineDashLength: 5,
        DrawingAnnotationTextOffsetY: 5,
        DrawingAnnotationSpacing: 5,
        DrawingAnnotationVerticalLineLength: 10,
        DrawingAnnotationTextDecimalSpaces: 2,
        DrawingFeatureVisibleEdgeDistance: 5,
        DrawingCanvasMaxZoom: 2,
        DrawingAnnotationFirstAnnotationDistance: 25,
        DrawingFeatureCutoutAxisOversize: -25,
        DrawingTableMarginHorizontal: 100,
        DrawingTableMarginVertical: 5,
        DrawingTableFontSize: 13,
        DrawingTableColorHeaderFill: '#EEEEEE',
        // requires computations from other constants - computed below outside of the object
        DrawingAnnotationDistanceBetweenAnnotationLines: 0,
        DrawingAnnotationDistanceOfFirstAnnotationFromDrawing: 0,
        // For everz feature type of the drawing, define columns (attribute keys) and header names for the table
        TABLES_HEADER: new Map<FeatureType, Map<string, string>>([
            [FeatureType.DRILL_VERTICAL, new Map<string, string>([
                ['$HEADER', 'Drill vertical'],
                ['XA', 'PosX'],
                ['YA', 'PosY'],
                ['DU', 'Diameter'],
                ['TI', 'Depth'],
                ['SIDE_Description_DE', 'Side'],
            ])],
            [FeatureType.DRILL_HORIZONTAL, new Map<string, string>([
                ['$HEADER', 'Drill horizontal'],
                ['XA', 'PosX'],
                ['YA', 'PosY'],
                ['DU', 'Diameter'],
                ['TI', 'Depth'],
                ['SIDE_Description_DE', 'Side'],
            ])],
            [FeatureType.GROOVE, new Map<string, string>([
                ['$HEADER', 'Groove'],
                ['XA', 'StartX'],
                ['YA', 'StartY'],
                ['XE', 'EndX'],
                ['YE', 'EndY'],
                ['RK', 'Direction'],
                ['TI', 'Depth'],
                ['SIDE_Description_DE', 'Side'],
            ])],
            [FeatureType.POCKET, new Map<string, string>([
                ['$HEADER', 'Pocket'],
                ['XA', 'PosX'],
                ['YA', 'PosY'],
                ['LA', 'Length'],
                ['TI', 'Width'],
                ['YE', 'Radius'],
                ['TI', 'Depth'],
                ['SIDE_Description_DE', 'Side'],
            ])],
            [FeatureType.CUTOUT, new Map<string, string>([
                ['$HEADER', 'Cutout'],
                ['XA', 'PosX'],
                ['YA', 'PosY'],
                ['LA', 'Length'],
                ['BR', 'Width'],
                ['RD', 'Radius'],
                ['TI', 'Depth'],
                ['SIDE_Description_DE', 'Side'],
            ])],
        ]),
    }
    DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines = DrawingOptions.DrawingAnnotationFontSize + DrawingOptions.DrawingAnnotationTextOffsetY + DrawingOptions.DrawingAnnotationSpacing;
    DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing = DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines + 30;


    enum ViewType {
        TOP = 'TOP',
        BOTTOM = 'BOTTOM',
    };

    const lengthToString = (length: number): string => {
        // round and trim trailing zeros
        return parseFloat(length.toFixed(DrawingOptions.DrawingAnnotationTextDecimalSpaces)).toString();
    };

    const estimateTextLength = (annotationText: string): number => {
        return Array.from(annotationText).reduce((acc: number, char: string) => {
            return acc + DrawingOptions.DrawingAnnotationFontSize * 0.5;
        }, 0);
    };

    /** Process the incoming BOM data */
    class NcData {
        /** MPR Tool being used for this entry */
        Tool = '';
        bomElementTypeId = 'UNKNOWN';
        /** Own definition: English representation of the feature name based on the Tool value */
        ToolFeatureDescription: FeatureType = FeatureType.UNKNOWN;
        Error: string | undefined = undefined;
        /** List of views where this feature is visible */
        VisibleInViews: ViewType[] = [];
        /** Grid distance */
        AB = 0;
        /** Count - WE DON'T HAVE TC ATTRIBUTE FOR THIS */
        AN = 0;
        /** Processing direction - X|Y Plus|Minus */
        BM: 'XP' | 'XM' | 'YP' | 'YM' | '' = '';
        /** NC width, MPR width of processing */
        BR = 0;
        /** Position X */
        coorX1 = 0;
        /** Position Y */
        coorY1 = 0;
        /** Diameter */
        DU = 0;
        /** Diameter */
        DUF = 0;
        /** NC length, length of processing */
        LA = 0;
        /** NC length, length of processing */
        LAF = 0;
        /** Groove width */
        NB = 0;
        /** Radius */
        RD = 0;
        /** Side of the machining */
        SIDE = '';
        /** Color representation of the side */
        SIDE_Color = '#767A95';
        /** German description of the side */
        SIDE_Description_DE = 'unbekannt';
        /** Depth */
        TI = 0;
        /** Depth */
        TIF = 0;
        /** Orientation angle */
        WI = 0;
        /** Pos X */
        XA = 0;
        /** End pos / end point X */
        XE = 0;
        /** Pos Y */
        YA = 0;
        /** End pos / end point Y */
        YE = 0;
        /**  */
        RK: 'WRKL' | 'WRKR' | '' = '';

        EdgesBack: boolean = false;
        EdgesFront: boolean = false;
        EdgesLeft: boolean = false;
        EdgesRight: boolean = false;

        ArticleId: string = '';
        Supplier: string = '';
        Draw: boolean = true;

        Position: string = '';

        constructor(objRaw: any, parentPart: any) {

            const obj: any = {};

            Object.assign(obj, objRaw);

            if (objRaw.getAttributes) {
                objRaw.getAttributes().forEach((value: any, key: string) => {
                    obj[key] = value;
                });
            }
            else if (objRaw.toJson) {
                Object.assign(obj, objRaw.toJson().a);
            }

            this.bomElementTypeId = obj._bomElementTypeId ?? this.bomElementTypeId;
            this.Tool = obj.nc_TOOL ?? this.Tool;
            this.coorX1 = obj.nc_XA ?? this.coorX1;
            this.coorY1 = obj.nc_YA ?? this.coorY1;
            this.XA = obj.nc_XA ?? this.XA;
            this.XE = obj.nc_XE ?? this.XE;
            this.YA = obj.nc_YA ?? this.YA;
            this.YE = obj.nc_YE ?? this.YE;
            this.DU = obj.nc_DU ?? this.DU;
            this.DUF = obj.nc_DU ?? this.DUF;
            this.WI = obj.nc_WI ?? this.WI;
            this.LA = obj.nc_LA ?? this.LA;
            this.LAF = obj.nc_LA ?? this.LAF;
            this.BR = obj.nc_BR ?? this.BR;
            this.RD = obj.nc_RD ?? this.RD;
            if (obj.nc_AN) {
                logWarning('The NcData provided an AN value, although it was not expected. This means that it is not based on a module attribute but gets filled somewhere else.');
            }
            this.AN = obj.nc_AN ?? this.AN;
            this.AB = obj.nc_AB ?? this.AB;
            this.NB = obj.nc_NB ?? this.NB;
            this.BM = obj.nc_BM ?? this.BM;
            this.TI = obj.nc_TI ?? this.TI;
            this.TIF = obj.nc_TI ?? this.TIF;
            this.SIDE = obj.nc_Side ?? this.SIDE;
            this.RK = obj.nc_RK ?? this.RK;
            this.Position = obj.nc_Position ?? this.Position;

            this.EdgesBack = (obj.nc_EdgesBack ?? 'invisible') === 'visible';
            this.EdgesFront = (obj.nc_EdgesFront ?? 'invisible') === 'visible';
            this.EdgesLeft = (obj.nc_EdgesLeft ?? 'invisible') === 'visible';
            this.EdgesRight = (obj.nc_EdgesRight ?? 'invisible') === 'visible';

            this.ArticleId = obj.nc_ArticleId ?? this.ArticleId;
            this.Supplier = obj.nc_Supplier ?? this.Supplier;
            this.Draw = obj.nc_DrawingRelevant !== false;

            // Following is taken from the original bom_outputs.ts by LW, version before April 2025
            switch (this.SIDE) {
                case 'Top':
                    this.SIDE_Description_DE = 'von oben';
                    this.SIDE_Color = '#767A95';
                    break;
                case 'Btm':
                    this.SIDE_Description_DE = 'von unten';
                    this.SIDE_Color = '#F5D0A9';
                    break;
                case 'Front':
                    this.SIDE_Description_DE = 'von vorne';
                    this.SIDE_Color = '#767A95';
                    break;
                case 'Back':
                    this.SIDE_Description_DE = 'von hinten';
                    this.SIDE_Color = '#767A95';
                    break;
                case 'Left':
                    this.SIDE_Description_DE = 'von links';
                    this.SIDE_Color = '#767A95';
                    break;
                case 'Right':
                    this.SIDE_Description_DE = 'von rechts';
                    this.SIDE_Color = '#767A95';
                    break;
                default:
                    this.SIDE_Description_DE = 'unbekannt';
                    this.SIDE_Color = '#767A95';
            }
            const processingGoesThrough = this.TI >= parentPart._thickness;
            switch (this.bomElementTypeId) {
                case 'ncout_DrillVert':
                    this.ToolFeatureDescription = FeatureType.DRILL_VERTICAL;
                    if (processingGoesThrough || this.SIDE === 'Top') { this.VisibleInViews.push(ViewType.TOP); }
                    if (processingGoesThrough || this.SIDE === 'Btm') { this.VisibleInViews.push(ViewType.BOTTOM); }
                    break;
                case 'ncout_DrillHor':
                    this.ToolFeatureDescription = FeatureType.DRILL_HORIZONTAL;
                    this.VisibleInViews.push(ViewType.TOP);
                    this.VisibleInViews.push(ViewType.BOTTOM);
                    break;
                case 'ncout_Groove':
                    this.ToolFeatureDescription = FeatureType.GROOVE;
                    if (processingGoesThrough || this.SIDE === 'Top') { this.VisibleInViews.push(ViewType.TOP); }
                    if (processingGoesThrough || this.SIDE === 'Btm') { this.VisibleInViews.push(ViewType.BOTTOM); }
                    break;
                case 'ncout_Pocket':
                    this.ToolFeatureDescription = FeatureType.POCKET;
                    if (processingGoesThrough || this.SIDE === 'Top') { this.VisibleInViews.push(ViewType.TOP); }
                    if (processingGoesThrough || this.SIDE === 'Btm') { this.VisibleInViews.push(ViewType.BOTTOM); }
                    break;
                case 'ncout_CountertopCutoutRectangular':
                    this.ToolFeatureDescription = FeatureType.CUTOUT;
                    if (processingGoesThrough || this.SIDE === 'Top') { this.VisibleInViews.push(ViewType.TOP); }
                    if (processingGoesThrough || this.SIDE === 'Btm') { this.VisibleInViews.push(ViewType.BOTTOM); }
                    break;
                case 'ncout_CountertopEdges':
                    this.ToolFeatureDescription = FeatureType.VISIBLE_EDGE;
                    this.VisibleInViews.push(ViewType.TOP);
                    break;
                case 'ncout_CountertopConnectionLong':
                    this.ToolFeatureDescription = FeatureType.COUNTERTOP_CONNECTION_LONG;
                    this.VisibleInViews.push(ViewType.TOP);
                    break;
                case 'ncout_CountertopConnectionShort':
                    this.ToolFeatureDescription = FeatureType.COUNTERTOP_CONNECTION_SHORT;
                    this.VisibleInViews.push(ViewType.TOP);
                    break;
                case 'ncout_SawingAngle':
                case 'ncout_Group':
                    this.ToolFeatureDescription = FeatureType.SKIP;
                    break;
                default:
                    this.ToolFeatureDescription = FeatureType.UNKNOWN;
            }
            if (this.SIDE === '' && this.ToolFeatureDescription !== FeatureType.DRILL_HORIZONTAL && this.ToolFeatureDescription !== FeatureType.SKIP && this.ToolFeatureDescription !== FeatureType.UNKNOWN) {
                // logWarning('NcData has no SIDE value, this is not expected. Please check the data.');
                this.VisibleInViews.push(ViewType.TOP);
                this.VisibleInViews.push(ViewType.BOTTOM);
                this.Error = (this.Error ?? '') + 'SIDE="";';
            }
            if (this.ToolFeatureDescription === 'UNKNOWN') {
                logWarning('NcData has unknown ToolFeatureDescription value, this is not expected. Please check the data.');
                this.VisibleInViews.push(ViewType.TOP);
                this.VisibleInViews.push(ViewType.BOTTOM);
                this.Error = (this.Error ?? '') + 'ToolUnknown;';
            }
            if (this.Error) {
                logWarning('NcData error ' + this.Error);
            }
        }


        /**
         * Careful equal comparison to prevent multiple occurences. Lesser problem is to have something twice than to skip it.
         * For known and useful features, we will compare their relevant values.
         * For unknown or unuseful features, we just define they are inequal.
         */
        isEqual(other: NcData): boolean {
            if (
                this.ToolFeatureDescription !== other.ToolFeatureDescription
            ) {
                return false;
            }
            switch (this.ToolFeatureDescription) {
                case FeatureType.DRILL_VERTICAL:
                    return (
                        this.XA === other.XA
                        && this.YA === other.YA
                        && this.TI === other.TI
                        && this.DU === other.DU
                        && this.VisibleInViews.length === other.VisibleInViews.length
                        && this.VisibleInViews.every((view) => other.VisibleInViews.includes(view))
                    );
                case FeatureType.DRILL_HORIZONTAL:
                    return (
                        this.XA === other.XA
                        && this.YA === other.YA
                        && this.TI === other.TI
                        && this.DU === other.DU
                        && this.BM === other.BM
                        && this.VisibleInViews.length === other.VisibleInViews.length
                        && this.VisibleInViews.every((view) => other.VisibleInViews.includes(view))
                    );
                case FeatureType.POCKET:
                    return (
                        this.XA === other.XA
                        && this.YA === other.YA
                        && this.TI === other.TI
                        && this.LA === other.LA
                        && this.VisibleInViews.length === other.VisibleInViews.length
                        && this.VisibleInViews.every((view) => other.VisibleInViews.includes(view))
                    );
                case FeatureType.CUTOUT:
                    return (
                        this.XA === other.XA
                        && this.YA === other.YA
                        && this.TI === other.TI
                        && this.LA === other.LA
                        && this.BR === other.BR
                        && this.RD === other.RD
                        && this.VisibleInViews.length === other.VisibleInViews.length
                        && this.VisibleInViews.every((view) => other.VisibleInViews.includes(view))
                    );
                case FeatureType.GROOVE:
                    return (
                        this.XA === other.XA
                        && this.XE === other.XE
                        && this.YA === other.YA
                        && this.YE === other.YE
                        && this.TI === other.TI
                        && this.NB === other.NB
                        && this.RK === other.RK
                        && this.VisibleInViews.length === other.VisibleInViews.length
                        && this.VisibleInViews.every((view) => other.VisibleInViews.includes(view))
                    );
                case FeatureType.VISIBLE_EDGE:
                    return false;
                case FeatureType.SKIP:
                case FeatureType.UNKNOWN:
                default:
                    return false;
            }
        }

        static fromAny(obj: Array<any>, parentPart: any): NcData[] {
            const result: NcData[] = [];

            obj.forEach((item: any) => {
                const ncData = new NcData(item, parentPart);
                if (ncData.Draw && ncData.ToolFeatureDescription !== FeatureType.SKIP) {
                    result.push(ncData);
                }
                if (item._subBom) {
                    const subNcData = NcData.fromAny(item._subBom, parentPart);
                    result.push(...subNcData);
                }
            });

            return result;
        }
    }

    /** Represent an object structure which can be exported in an XML format. Also contains a constructor for creating a header of an SVG object used further in the drawings. */
    class XmlObject {
        tag: string;
        attributes: any;
        children: any[];
        [key: string]: any;
        metadata: any = {};

        constructor(tag: string, attributes: any = {}, children: any[] = []) {
            this.tag = tag;
            this.attributes = attributes;
            this.children = children;
        }

        push(child: XmlObject | XmlObject[] | string, atStart: boolean = false): void {
            const method = atStart ? 'unshift' : 'push';
            if (Array.isArray(child)) {
                this.children[method](...child);
            }
            else {
                this.children[method](child);
            }
        }

        toString(indent: string = '  ', level: number = 0): string {
            let result = `${indent.repeat(level)}<${this.tag}`

            const keysOfAttributes = Object.keys(this.attributes);
            if (keysOfAttributes.length > 0) {
                result += ` ${keysOfAttributes.map(key => `${key}="${this.attributes[key]}"`).join(' ')}`;
            }

            if (this.children?.length) {
                result += `>`;
                for (const child of this.children) {
                    if (child instanceof XmlObject) {
                        result += `\n${child.toString(indent, level + 1)}`;
                    }
                    else if (typeof child === 'string') {
                        result += `\n${indent.repeat(level + 1)}${child}`;
                    }
                    else {
                        result += `\n${indent.repeat(level + 1)}${child.toString()}`;
                    }
                }
                result += `\n${indent.repeat(level)}</${this.tag}>`;
            }
            else {
                result += ` />`;
            }
            return result;
        }

        deepFind(idValue: string, idKey: string = 'id'): XmlObject | null {
            if (this.attributes[idKey] === idValue) {
                return this;
            }
            for (const child of this.children) {
                if (child instanceof XmlObject) {
                    const found = child.deepFind(idValue, idKey);
                    if (found) {
                        return found;
                    }
                }
            }
            return null;
        }
        deepFindAll(idValue: string, idKey: string = 'id'): XmlObject[] {
            const found: XmlObject[] = [];
            if (this.attributes[idKey] === idValue) {
                found.push(this);
            }
            for (const child of this.children) {
                if (child instanceof XmlObject) {
                    found.push(...child.deepFindAll(idValue));
                }
            }
            return found;
        }

        static CreateSvgHeader(): XmlObject {
            const canvasWidth = DrawingOptions.DrawingCanvasWidth;
            const canvasHeight = DrawingOptions.DrawingCanvasWidth;

            const arrowLength = 12;
            const arrowWidth = 6;

            return new XmlObject(
                'svg',
                {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: canvasWidth,
                    height: canvasHeight,
                },
                [
                    new XmlObject(
                        'defs',
                        {},
                        [
                            new XmlObject(
                                'marker',
                                {
                                    id: 'arrEnd',
                                    markerWidth: arrowLength,
                                    markerHeight: arrowWidth,
                                    refX: arrowLength,
                                    refY: arrowWidth / 2,
                                    orient: 'auto',
                                },
                                [
                                    new XmlObject(
                                        'path',
                                        {
                                            d: `M0,0 L${arrowLength},${arrowWidth / 2} L0,${arrowWidth} z`,
                                            fill: 'context-stroke',
                                        }
                                    ),
                                ]
                            ),
                            new XmlObject(
                                'marker',
                                {
                                    id: 'arrStart',
                                    markerWidth: arrowLength,
                                    markerHeight: arrowWidth,
                                    refX: 0,
                                    refY: arrowWidth / 2,
                                    orient: 'auto',
                                },
                                [
                                    new XmlObject(
                                        'path',
                                        {
                                            d: `M0,${arrowWidth / 2} L${arrowLength},0 L${arrowLength},${arrowWidth} z`,
                                            fill: 'context-stroke',
                                        }
                                    ),
                                ]
                            ),
                        ]
                    ),
                ],
            );

        }










    }

    /** Bounding box of a 2D drawing */
    class BoundingBox {
        x: number;
        y: number;
        w: number;
        h: number;

        annotations: { left: number, right: number, top: number, bottom: number } = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        };

        constructor(x: number, y: number, w: number, h: number, annotations?: { left: number, right: number, top: number, bottom: number }) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            if (annotations) {
                this.annotations = annotations;
            }
        }

        getZoomedBoundingBox(zoom: number): BoundingBox {
            return new BoundingBox(
                this.x - this.annotations.left * zoom,
                this.y - this.annotations.bottom * zoom,
                this.w + (this.annotations.left + this.annotations.right) * zoom,
                this.h + (this.annotations.top + this.annotations.bottom) * zoom,
                {
                    left: this.annotations.left,
                    right: this.annotations.right,
                    top: this.annotations.top,
                    bottom: this.annotations.bottom,
                }
            );
        }
    }

    /** A point that is being annotated. */
    class AnnotatedPoint {
        x: number;
        y: number;
        type: FeatureType;
        label: string | null = null;
        posX: number | null = null;
        posY: number | null = null;
        customSvg: XmlObject | null = null;

        /**
         * 
         * @param x coordinate of the reference
         * @param y 
         * @param type the feature type behind it
         * @param label a custom label for the point``
         * @param positionX optional x, y position of the label and the annotation origin
         * @param positionY if undefined, the annotation will be drawn around the part and evaluated automatically
         * @param customSvg optional custom SVG object to be drawn instead of the default one
         */
        constructor(x: number, y: number, type: FeatureType, customSvg: XmlObject | null = null) {
            this.x = x;
            this.y = y;
            this.type = type;
            this.customSvg = customSvg;
        }
    }

    /** Annotation lines is constructed from annotated points that should be referred by a single annotation line. */
    class AnnotationLine {
        segments: number[] = [];
        referenceCoordinate: number;
        featureType: FeatureType;

        constructor(
            segments: number[],
            referenceCoordinate: number,
            featureType: FeatureType,
        ) {
            this.segments = segments.sort((a: number, b: number) => a - b);
            this.referenceCoordinate = referenceCoordinate;
            this.featureType = featureType;
        }
        toSvg(
            startX: number = 0,
            startY: number = 0,
            zoom: number = 1,
            type: 'horizontal' | 'vertical-topview' | 'vertical-bottomview' = 'horizontal',
            verticalLineDirection: 'up' | 'down' = 'up',
            verticalLineAddition: number = 0,
        ): XmlObject {
            const azimuth = type === 'horizontal' ? 0 : -90;


            // wrapper and return object
            const annotation = new XmlObject('g', {
                transform: `translate(${startX}, ${startY}) rotate(${azimuth})`,
            }, []);

            // for sorting of the annotations to draw them in a correct SVG order
            annotation.metadata = {
                x: startX,
                y: startY,
            };

            let fill;
            switch (this.featureType) {
                case FeatureType.DRILL_HORIZONTAL: fill = DrawingOptions.DrawingColorFillDrillHorizontal; break;
                case FeatureType.DRILL_VERTICAL: fill = DrawingOptions.DrawingColorFillDrillVertical; break;
                case FeatureType.GROOVE: fill = DrawingOptions.DrawingColorFillGroove; break;
                case FeatureType.POCKET: fill = DrawingOptions.DrawingColorFillPocket; break;
                case FeatureType.SKIP: fill = DrawingOptions.DrawingColorFillSkip; break;
                case FeatureType.UNKNOWN: fill = DrawingOptions.DrawingColorFillUnknown; break;
                case FeatureType.PART: fill = DrawingOptions.DrawingColorFillPart; break;
                // this is a cutout, therefore we use the blank background color
                case FeatureType.CUTOUT: fill = DrawingOptions.DrawingCanvasBackgroundColor; break;
                default: fill = DrawingOptions.DrawingColorFillError; break;
            }

            //--------------
            // Definitions
            //--------------
            const spacing = DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines - DrawingOptions.DrawingAnnotationVerticalLineLength;

            const verticalY1 = -DrawingOptions.DrawingAnnotationVerticalLineLength / 2 - (verticalLineDirection === 'up' ? spacing + verticalLineAddition : 0);
            const verticalY2 = DrawingOptions.DrawingAnnotationVerticalLineLength / 2 + (verticalLineDirection === 'down' ? spacing + verticalLineAddition : 0);

            const vertical = (pos: number) => {

                return new XmlObject('line', {
                    x1: pos * zoom,
                    y1: verticalY1,
                    x2: pos * zoom,
                    y2: verticalY2,
                    stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                    'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                    'vector-effect': 'non-scaling-stroke',
                });
            };
            const horizontal = (pos: number, length: number, leftArrow: boolean = true, rightArrow: boolean = true) => new XmlObject('line', {
                x1: pos * zoom,
                y1: 0,
                x2: (pos + length) * zoom,
                y2: 0,
                stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                'vector-effect': 'non-scaling-stroke',
                'marker-end': rightArrow ? 'url(#arrEnd)' : undefined,
                'marker-start': leftArrow ? 'url(#arrStart)' : undefined,
            });


            const text = (pos: number, length: number, additionalOffsetY: number) => {
                const annotationText = lengthToString(length);
                const annotationTextEstimateLength = estimateTextLength(annotationText);
                // opaque background rectangle that hides the <line>s behind it
                const backgroundRect = new XmlObject('rect', {
                    x: (pos * zoom - annotationTextEstimateLength / 2),
                    y: -DrawingOptions.DrawingAnnotationTextOffsetY * 0.8 - additionalOffsetY - DrawingOptions.DrawingAnnotationFontSize,
                    width: annotationTextEstimateLength,
                    height: DrawingOptions.DrawingAnnotationFontSize,
                    fill: DrawingOptions.DrawingCanvasBackgroundColor,
                    'fill-opacity': '1',
                    stroke: 'none',
                });

                const text = new XmlObject('text', {
                    x: (pos) * zoom,
                    y: -DrawingOptions.DrawingAnnotationTextOffsetY - additionalOffsetY,
                    'font-size': `${DrawingOptions.DrawingAnnotationFontSize}px`,
                    'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                    'text-anchor': 'middle',
                    'dominant-baseline': 'bottom',
                    fill: DrawingOptions.DrawingColorStrokeAnnotation,
                    'vector-effect': 'non-scaling-stroke',
                }, [
                    annotationText,
                ]);

                return [backgroundRect, text];
            }

            //---------------
            // Calculate coordinates of the annotations - vertical views need to be reversed because +y in the SVG is down, which is opposite of our coordinates
            //---------------

            const lengths = [];
            for (let i = 0; i < this.segments.length - 1; i++) {
                const curr = this.segments[i];
                const next = this.segments[i + 1];
                const length = Math.abs(next - curr);
                lengths.push(length);
            }

            if (
                type === 'vertical-bottomview'
                || type === 'vertical-topview'
            ) {
                lengths.reverse();
            }

            const adjustedSegments = [0];
            let runningValue = 0;
            for (let i = 0; i < this.segments.length - 1; i++) {
                runningValue += lengths[i];
                adjustedSegments.push(runningValue);
            }

            //---------------
            // Calculate space around the annotations and if the annotations fit
            //---------------

            const estimatedTextLengths = lengths.map((length: number) => estimateTextLength(lengthToString(length)));
            const zoomedLengths = lengths.map((length: number) => length * zoom);
            const remainingSpaceAroundAnnotationText = zoomedLengths.map((space: number, index: number) => (space - estimatedTextLengths[index]) / 2);

            //---------------
            // Draw the annotations
            //---------------

            const verticals: XmlObject[] = [];
            verticals.push(vertical(adjustedSegments[0]));
            for (let i = 0; i < adjustedSegments.length - 1; i++) {
                const curr = adjustedSegments[i];
                const next = adjustedSegments[i + 1];
                const length = next - curr;
                const zoomedLength = length * zoom;
                verticals.push(vertical(next));

                const remainingSpace = remainingSpaceAroundAnnotationText[i];
                const estTextLen = estimatedTextLengths[i];
                const fits = remainingSpace > 0;
                const addition = 10;

                if (fits) {
                    annotation.push(horizontal(curr, length, true, true));
                    annotation.push(text(curr + length / 2, length, 0));
                }
                else {

                    if (i == 0) {
                        annotation.push(horizontal(curr, length, false, false));
                        annotation.push(horizontal(curr - estTextLen - addition, estTextLen + addition, false, true));
                        annotation.push(horizontal(next, DrawingOptions.DrawingAnnotationStrokeWidth, true, false));
                        annotation.push(text(curr - estTextLen / 2 - addition, length, 0));
                        remainingSpaceAroundAnnotationText[i] = length * zoom;
                    }
                    else if (i == adjustedSegments.length - 2) {
                        annotation.push(horizontal(curr, length, false, false));
                        annotation.push(horizontal(next, estTextLen + addition, true, false));
                        annotation.push(horizontal(curr - DrawingOptions.DrawingAnnotationStrokeWidth, DrawingOptions.DrawingAnnotationStrokeWidth, false, true));
                        annotation.push(text(next + estTextLen / 2 + addition, length, 0));
                        remainingSpaceAroundAnnotationText[i] = length * zoom;
                    }
                    else {
                        const remainingSpaceOfLeft = remainingSpaceAroundAnnotationText[i - 1] ?? -999;
                        const remainingSpaceOfRight = remainingSpaceAroundAnnotationText[i + 1] ?? -999;

                        const overlapSize = (estTextLen - zoomedLength) / 2;

                        if (
                            overlapSize < remainingSpaceOfLeft
                            && (
                                (overlapSize < remainingSpaceOfRight)
                                // penultimate annotation, where the last one doesn't fit and will clear the way - which we don't know yet based on remainingSpaceOfRight
                                || (remainingSpaceOfRight < 0 && i === adjustedSegments.length - 3)
                            )
                        ) {
                            // small, but doesn't collide with neighbbours -> make the verticals around it lower
                            [verticals[i], verticals[i + 1]].forEach((vert: XmlObject) => {
                                vert.attributes.y1 = -DrawingOptions.DrawingAnnotationVerticalLineLength / 4;
                            });
                            annotation.push(horizontal(curr, length, true, true));
                            annotation.push(text(curr + length / 2, length, 0));
                        }
                        else {
                            const t = text(curr + length / 2, length, 0);
                            t[1].attributes.fill = 'red';
                            annotation.push(t);
                            logWarning(`Annotation ${i} does not fit: ${lengthToString(length)} (${length})`);
                        }
                    }

                }

            }

            annotation.push(verticals);


            // Sort in following order so that the lines are interrupted behind the text
            // This might be redundant, since the line and text doesn't collide on 1 annotation line and rect is always before the text
            const sortOrder = ['line', 'rect', 'text'];
            annotation.children.sort((a: XmlObject, b: XmlObject) => {
                const aSort = sortOrder.indexOf(a.tag);
                const bSort = sortOrder.indexOf(b.tag);
                return aSort - bSort;
            });

            return annotation;
        }
    }

    /**
     * This represents a top or bottom view of a 2D drawing. Constructed from a list of NC Data and part data.
     * Construction starts by passing the part and NcData, then the SVGs of the drawing and the features are created.
     * All necessary annotations are evaluated.
     * Here the construction stops.
     * Next step is to compute the canvas size and zoom of the drawing and the annotations and then draw the annotations (they are not zoomed).
     * 
     */
    class PartDrawingView {
        viewType: ViewType;
        part: any;
        ncData: NcData[] = [];
        svg: XmlObject;
        annotatedPoints: AnnotatedPoint[] = [];
        referenceLinesVerticalXCoordinates: number[] = [];
        referenceLinesHorizontalYCoordinates: number[] = [];
        annotations: { left: AnnotationLine[], right: AnnotationLine[], top: AnnotationLine[], bottom: AnnotationLine[], custom: AnnotatedPoint[] } = {
            left: [],
            right: [],
            top: [],
            bottom: [],
            custom: [],
        };
        boundingBox: BoundingBox;

        coordinateTransformerX: (c: number) => number;
        coordinateTransformerY: (c: number) => number;

        constructor(args: {
            viewType: ViewType,
            ncData: NcData[],
            part: any,
        }) {
            this.viewType = args.viewType;

            this.coordinateTransformerX = (c: number) => c;
            this.coordinateTransformerY = (c: number) => c;
            if (this.viewType === ViewType.TOP) {
                this.coordinateTransformerY = (c: number) => this.part._depth - c;
            }

            this.ncData = args.ncData.filter((item) => {
                return item.VisibleInViews.includes(this.viewType);
            });
            this.part = args.part;
            this.svg = new XmlObject('g', {
                id: this.viewType.toLowerCase() + ' view',
                transform: `translate(${DrawingOptions.DrawingCanvasMargin}, ${DrawingOptions.DrawingCanvasMargin})`,
            });
            this.drawPart();
            this.setAnnotatedPoints();
            if (DrawingOptions.DrawingAnnotationDrawDashedReferenceLines) {
                this.drawReferenceLines();
            }
            this.drawFeatures();
            this.evaluateAnnotations();
            // display the annotations entry points for dev and debug:
            // this.drawAnnotatedPoints();
            this.boundingBox = this.getBoundingBox();
        }

        lineSegmentFromOutsideToInside(xa: number, ya: number, xe: number, ye: number): { xa: number, ya: number, xe: number, ye: number } {
            const original = { xa, xe, ya, ye };


            const dx = xe - xa;
            const dy = ye - ya;

            if (dx !== 0 && dy !== 0) {
                // linear function y=kx+q
                const k = dy / dx;
                const q = ye - k * xe;
                const fx = (x: number) => k * x + q;
                const fy = (y: number) => (y - q) / k;

                // TODO
                if (xa < 0) { xa = fx(0); }
                else if (xa > this.part._width) { xa = fx(this.part._width); }

                if (xe < 0) { xe = fx(0); }
                else if (xe > this.part._width) { xe = fx(this.part._width); }

                if (ya < 0) { ya = fy(0); }
                else if (ya > this.part._depth) { ya = fy(this.part._depth); }

                if (ye < 0) { ye = fy(0); }
                else if (ye > this.part._depth) { ye = fy(this.part._depth); }

                if (
                    xa < 0 || xa > this.part._width
                    || xe < 0 || xe > this.part._width
                    || ya < 0 || ya > this.part._depth
                    || ye < 0 || ye > this.part._depth
                ) {
                    logWarning(`Line segment from outside to inside: ${JSON.stringify(original)}`);
                }
            }
            else {

                if (dx === 0) {
                    if (ya < 0) { ya = 0; }
                    else if (ya > this.part._depth) { ya = this.part._depth; }

                    if (ye < 0) { ye = 0; }
                    else if (ye > this.part._depth) { ye = this.part._depth; }
                }
                // not else if, could be two points at the same position; such a case will be covered
                if (dy === 0) {
                    if (xa < 0) { xa = 0; }
                    else if (xa > this.part._width) { xa = this.part._width; }

                    if (xe < 0) { xe = 0; }
                    else if (xe > this.part._width) { xe = this.part._width; }
                }
            }



            return { xa, ya, xe, ye };
        }

        /** Draw the part rectangle */
        drawPart() {
            const partRect = new XmlObject('rect', {
                x: 0,
                y: 0,
                width: this.part._width,
                height: this.part._depth,
                fill: DrawingOptions.DrawingColorFillPart,
                'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                stroke: DrawingOptions.DrawingColorStrokeFeature,
                'vector-effect': 'non-scaling-stroke',
            });
            this.svg.push(partRect);
        }

        /** Go through all ncData and evaluate which points need to be annotated. */
        setAnnotatedPoints() {
            const fX = this.coordinateTransformerX;
            const fY = this.coordinateTransformerY;

            // the part itself
            this.annotatedPoints.push(new AnnotatedPoint(0, 0, FeatureType.UNKNOWN, this.part._partNumber));
            this.annotatedPoints.push(new AnnotatedPoint(this.part._width, 0, FeatureType.UNKNOWN, this.part._partNumber));
            this.annotatedPoints.push(new AnnotatedPoint(0, this.part._depth, FeatureType.UNKNOWN, this.part._partNumber));
            this.annotatedPoints.push(new AnnotatedPoint(this.part._width, this.part._depth, FeatureType.UNKNOWN, this.part._partNumber));

            this.ncData.forEach((entry: NcData) => {
                if (entry.ToolFeatureDescription === FeatureType.DRILL_VERTICAL) {
                    this.annotatedPoints.push(new AnnotatedPoint(fX(entry.XA), fY(entry.YA), FeatureType.DRILL_VERTICAL));
                }
                else if (entry.ToolFeatureDescription === FeatureType.DRILL_HORIZONTAL) {

                    this.annotatedPoints.push(new AnnotatedPoint(fX(entry.XA), fY(entry.YA), FeatureType.DRILL_HORIZONTAL));
                }
                else if (entry.ToolFeatureDescription === FeatureType.GROOVE) {
                    const C = this.lineSegmentFromOutsideToInside(fX(entry.XA), fY(entry.YA), fX(entry.XE), fY(entry.YE));

                    this.annotatedPoints.push(new AnnotatedPoint(C.xa, C.ya, FeatureType.GROOVE));
                    this.annotatedPoints.push(new AnnotatedPoint(C.xe, C.ye, FeatureType.GROOVE));
                }
                else if (entry.ToolFeatureDescription === FeatureType.POCKET) {
                    const rw = entry.LA;
                    const rh = entry.TI;
                    const x = fX(entry.XA);
                    const y = fY(entry.YA + rh / 2);
                    const rx = x - rw / 2;
                    const ry = y - rh / 2;
                    this.annotatedPoints.push(new AnnotatedPoint(rx, ry, FeatureType.POCKET));
                    this.annotatedPoints.push(new AnnotatedPoint(rx + rw, ry, FeatureType.POCKET));
                    this.annotatedPoints.push(new AnnotatedPoint(rx, ry + rh, FeatureType.POCKET));
                    this.annotatedPoints.push(new AnnotatedPoint(rx + rw, ry + rh, FeatureType.POCKET));
                }
                else if (entry.ToolFeatureDescription === FeatureType.CUTOUT) {
                    const rw = entry.LA;
                    const rh = entry.BR;
                    const x = fX(entry.XA);
                    const y = fY(entry.YA);
                    const rx = x - rw / 2;
                    const ry = y - rh / 2;
                    this.annotatedPoints.push(new AnnotatedPoint(rx, ry, FeatureType.CUTOUT));
                    this.annotatedPoints.push(new AnnotatedPoint(rx + rw, ry, FeatureType.CUTOUT));
                    this.annotatedPoints.push(new AnnotatedPoint(rx, ry + rh, FeatureType.CUTOUT));
                    this.annotatedPoints.push(new AnnotatedPoint(rx + rw, ry + rh, FeatureType.CUTOUT));
                    this.annotatedPoints.push(new AnnotatedPoint(x, y, FeatureType.CUTOUT));

                    this.annotatedPoints.push(new AnnotatedPoint(rx, ry, FeatureType.CUTOUT, new XmlObject('g', {}, [
                        // arrow to the point
                        new XmlObject('line', {
                            x1: entry.RD / 3,
                            y1: entry.RD / 3,
                            x2: 20,
                            y2: 30,
                            stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                            'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                            'marker-start': 'url(#arrStart)',
                        }),
                        // underline for the text
                        new XmlObject('line', {
                            x1: 20,
                            y1: 30,
                            x2: 60,
                            y2: 30,
                            stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                            'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        }),
                        // text
                        new XmlObject('text', {
                            x: 40,
                            y: 30 - DrawingOptions.DrawingAnnotationTextOffsetY,
                            'font-size': `${DrawingOptions.DrawingAnnotationFontSize}px`,
                            'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                            'text-anchor': 'middle',
                            'dominant-baseline': 'bottom',
                            fill: DrawingOptions.DrawingColorStrokeAnnotation,
                            'vector-effect': 'non-scaling-stroke',
                        }, [
                            `R${entry.RD}`
                        ]),
                    ])));
                    this.annotatedPoints.push(new AnnotatedPoint(rx + 30, ry + rh - 30, FeatureType.CUTOUT, new XmlObject('text', {
                        x: 0,
                        y: - DrawingOptions.DrawingAnnotationTextOffsetY,
                        'font-size': `${DrawingOptions.DrawingAnnotationFontSize * 1.5}px`,
                        'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                        'text-anchor': 'left',
                        fill: DrawingOptions.DrawingColorFillDrillVertical,
                        'vector-effect': 'non-scaling-stroke',
                    }, [
                        entry.Supplier,
                        entry.ArticleId,
                    ])
                    ));
                }
                else if (entry.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_LONG) {
                    const y = fY(0);
                    const x = entry.Position === 'Left' ? entry.LA / 2 : this.part._width - entry.LA / 2;
                    this.annotatedPoints.push(new AnnotatedPoint(x, y, FeatureType.COUNTERTOP_CONNECTION_LONG, new XmlObject('text', {
                        x: 0,
                        y: - DrawingOptions.DrawingAnnotationTextOffsetY,
                        'font-size': `${DrawingOptions.DrawingAnnotationFontSize * 1.5}px`,
                        'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                        'text-anchor': 'middle',
                        fill: DrawingOptions.DrawingColorFillDrillVertical,
                        'vector-effect': 'non-scaling-stroke',
                    }, [
                        'AVV',
                    ])
                    ));
                } else if (entry.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_SHORT) {
                    const y = fY(this.part._depth / 2);
                    const x = entry.Position === 'Left' ? 0 : this.part._width;
                    this.annotatedPoints.push(new AnnotatedPoint(x, y, FeatureType.COUNTERTOP_CONNECTION_LONG, new XmlObject('text', {
                        x: 0,
                        y: 0,
                        'font-size': `${DrawingOptions.DrawingAnnotationFontSize * 1.5}px`,
                        'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                        'text-anchor': 'middle',
                        'dominant-baseline': 'middle',
                        fill: DrawingOptions.DrawingColorFillDrillVertical,
                        transform: `translate(${(entry.Position === 'Left' ? 1 : -1) * (DrawingOptions.DrawingAnnotationFontSize * 1.5 + DrawingOptions.DrawingAnnotationTextOffsetY)},0)  rotate(-90)`,
                        'vector-effect': 'non-scaling-stroke',
                    }, [
                        'AVS',
                    ])
                    ));
                }
            });
        }

        /** Draw the features of the part - drills, grooves, pockets */
        drawFeatures() {
            const fX = this.coordinateTransformerX;
            const fY = this.coordinateTransformerY;

            const connectionThickness = 5;

            const ncDataSort = [
                FeatureType.DRILL_VERTICAL,
                FeatureType.DRILL_HORIZONTAL,
                FeatureType.GROOVE,
                FeatureType.POCKET,
                FeatureType.CUTOUT,
                FeatureType.VISIBLE_EDGE,
                FeatureType.COUNTERTOP_CONNECTION_LONG,
                FeatureType.COUNTERTOP_CONNECTION_SHORT,
            ];
            const ncDataSorted = this.ncData.sort((a: NcData, b: NcData) => {
                const aIndex = ncDataSort.indexOf(a.ToolFeatureDescription);
                const bIndex = ncDataSort.indexOf(b.ToolFeatureDescription);
                return aIndex - bIndex;
            });


            ncDataSorted.forEach((entry: NcData) => {
                if (entry.Error) {
                    const errorText = new XmlObject(
                        'text',
                        {
                            x: fX(entry.XA),
                            y: fY(entry.YA),
                            'font-size': `${DrawingOptions.DrawingAnnotationFontSize}px`,
                            'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                            'text-anchor': 'middle',
                            fill: DrawingOptions.DrawingColorFillError,
                            'vector-effect': 'non-scaling-stroke',
                        },
                        [
                            entry.ToolFeatureDescription,
                            entry.Error,
                        ]
                    );

                    // this.svg.push(errorText);
                }
                if (entry.ToolFeatureDescription === FeatureType.DRILL_VERTICAL) {
                    this.svg.push(new XmlObject('circle', {
                        cx: fX(entry.XA),
                        cy: fY(entry.YA),
                        r: entry.DU / 2,
                        fill: DrawingOptions.DrawingColorFillDrillVertical,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                }
                else if (entry.ToolFeatureDescription === FeatureType.DRILL_HORIZONTAL) {
                    let x, y, rw, rh, rx, ry: number;
                    x = fX(entry.XA);
                    y = fY(entry.YA);
                    switch (entry.BM) {
                        case 'XP': // from left (x plus)
                            rw = entry.TI;
                            rh = entry.DU;
                            rx = x;
                            ry = y - rh / 2;
                            break;
                        case 'XM': // from right (x minus)
                            rw = entry.TI;
                            rh = entry.DU;
                            rx = x - rw;
                            ry = y - rh / 2;
                            break;
                        case 'YP': // from top (y plus)
                            rw = entry.DU;
                            rh = entry.TI;
                            rx = x - rw / 2;
                            if (this.viewType === ViewType.TOP) {
                                ry = y - rh;
                            }
                            else {
                                ry = y;
                            }
                            break;
                        case 'YM': // from bottom (y minus)
                            rw = entry.DU;
                            rh = entry.TI;
                            rx = x - rw / 2;
                            if (this.viewType === ViewType.TOP) {
                                ry = y;
                            }
                            else {
                                ry = y - rh;
                            }

                            break;
                        default:
                            throw (new Error(`Unknown BM: ${entry.BM}`));
                    }
                    this.svg.push(new XmlObject('rect', {
                        x: rx,
                        y: ry,
                        width: rw,
                        height: rh,
                        fill: DrawingOptions.DrawingColorFillDrillHorizontal,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                }
                else if (entry.ToolFeatureDescription === FeatureType.GROOVE) {

                    const C = this.lineSegmentFromOutsideToInside(fX(entry.XA), fY(entry.YA), fX(entry.XE), fY(entry.YE));
                    const XA = C.xa;
                    const YA = C.ya;
                    const XE = C.xe;
                    const YE = C.ye;

                    const grooveLine = new XmlObject(
                        'line',
                        {
                            x1: XA,
                            y1: YA,
                            x2: XE,
                            y2: YE,
                            //stroke: ncData.SIDE_Color,
                            stroke: 'red',
                            'stroke-width': 2,
                            'marker-end': 'url(#arrEnd)',
                            'vector-effect': 'non-scaling-stroke',
                        },
                    );

                    const angle = Math.atan2(YE - YA, XE - XA) * 180 / Math.PI;
                    const azimuth = angle < 0 ? angle + 360 : angle;
                    const length = Math.sqrt(Math.pow(XE - XA, 2) + Math.pow(YE - YA, 2));

                    const grooveRect = new XmlObject(
                        'rect',
                        {
                            fill: DrawingOptions.DrawingColorFillGroove,
                            x: `0`,
                            y: `0`,
                            width: length,
                            height: entry.NB,
                            stroke: DrawingOptions.DrawingColorStrokeFeature,
                            'stroke-width': 1,
                            transform:
                                (
                                    (entry.RK === 'WRKL' && this.viewType === ViewType.TOP)
                                    || (entry.RK === 'WRKR' && this.viewType === ViewType.BOTTOM)
                                )
                                    ? `translate(${XE}, ${YE}) rotate(${180 + azimuth})`
                                    : `translate(${XA}, ${YA}) rotate(${azimuth})`,
                            'vector-effect': 'non-scaling-stroke',
                        },
                    );
                    this.svg.push(grooveRect);
                    //this.svg.push(grooveLine);
                }
                else if (entry.ToolFeatureDescription === FeatureType.POCKET) {
                    const rw = entry.LA;
                    const rh = entry.TI;
                    const x = fX(entry.XA);
                    const y = fY(entry.YA + rh / 2);
                    const rx = x - rw / 2;
                    const ry = y - rh / 2;
                    this.svg.push(new XmlObject('rect', {
                        x: rx,
                        y: ry,
                        width: rw,
                        height: rh,
                        fill: DrawingOptions.DrawingColorFillPocket,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                }
                else if (entry.ToolFeatureDescription === FeatureType.CUTOUT) {
                    const rw = entry.LA;
                    const rh = entry.BR;
                    const x = fX(entry.XA);
                    const y = fY(entry.YA);
                    const rx = x - rw / 2;
                    const ry = y - rh / 2;
                    this.svg.push(new XmlObject('rect', {
                        x: rx,
                        y: ry,
                        width: rw,
                        height: rh,
                        fill: DrawingOptions.DrawingCanvasBackgroundColor,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                        rx: entry.RD,
                    }));

                    // dashed axis line
                    this.svg.push(new XmlObject('line', {
                        x1: rx - DrawingOptions.DrawingFeatureCutoutAxisOversize,
                        y1: ry + rh / 2,
                        x2: rx + rw + DrawingOptions.DrawingFeatureCutoutAxisOversize,
                        y2: ry + rh / 2,
                        stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                        'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                        // dash
                        'stroke-dasharray': `${DrawingOptions.DrawingAnnotationReferenceLineDashLength},${DrawingOptions.DrawingAnnotationReferenceLineDashLength},${DrawingOptions.DrawingAnnotationStrokeWidth},${DrawingOptions.DrawingAnnotationReferenceLineDashLength}`,
                        'stroke-dashoffset': entry.RD,
                    }));
                    this.svg.push(new XmlObject('line', {
                        x1: rx + rw / 2,
                        y1: ry - DrawingOptions.DrawingFeatureCutoutAxisOversize,
                        x2: rx + rw / 2,
                        y2: ry + rh + DrawingOptions.DrawingFeatureCutoutAxisOversize,
                        stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                        'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                        // dash
                        'stroke-dasharray': `${DrawingOptions.DrawingAnnotationReferenceLineDashLength},${DrawingOptions.DrawingAnnotationReferenceLineDashLength},${DrawingOptions.DrawingAnnotationStrokeWidth},${DrawingOptions.DrawingAnnotationReferenceLineDashLength}`,
                        'stroke-dashoffset': entry.RD,
                    }));

                }
                else if (entry.ToolFeatureDescription === FeatureType.VISIBLE_EDGE) {

                    const countertopConnectionLeftShort = this.ncData.find((ncData: NcData) => ncData.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_SHORT && ncData.Position === 'Left');
                    const countertopConnectionLeftLong = this.ncData.find((ncData: NcData) => ncData.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_LONG && ncData.Position === 'Left');
                    const countertopConnectionRightShort = this.ncData.find((ncData: NcData) => ncData.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_SHORT && ncData.Position === 'Right');
                    const countertopConnectionRightLong = this.ncData.find((ncData: NcData) => ncData.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_LONG && ncData.Position === 'Right');

                    let rearEdgeVisible: boolean = (entry.EdgesBack ?? false);
                    let leftEdgeVisible: boolean = (entry.EdgesLeft ?? false) && (countertopConnectionLeftShort === undefined);
                    let rightEdgeVisible: boolean = (entry.EdgesRight ?? false) && (countertopConnectionRightShort === undefined);
                    let frontEdgeVisibleButConnectionLeft: boolean = (entry.EdgesFront ?? false) && (countertopConnectionLeftLong !== undefined);
                    let frontEdgeVisibleButConnectionRight: boolean = (entry.EdgesFront ?? false) && (countertopConnectionRightLong !== undefined);
                    let centralPartOfFrontEdgeVisible: boolean = (entry.EdgesFront ?? false) && !frontEdgeVisibleButConnectionLeft && !frontEdgeVisibleButConnectionRight;

                    let w = this.part._width; let d = this.part._depth;
                    type xy = { x: number, y: number };
                    let BL: xy = { x: 0, y: 0 };
                    let BR: xy = { x: w, y: 0 };
                    let FL: xy = { x: 0, y: d };
                    let FR: xy = { x: w, y: d };
                    let FLM: xy | undefined = undefined;
                    let FRM: xy | undefined = undefined;

                    let e = DrawingOptions.DrawingFeatureVisibleEdgeDistance;

                    if (rearEdgeVisible) {
                        BL.y += e;
                        BR.y += e;
                    }
                    if (leftEdgeVisible) {
                        BL.x += e;
                        FL.x += e;
                    }
                    if (rightEdgeVisible) {
                        BR.x -= e;
                        FR.x -= e;
                    }
                    if (frontEdgeVisibleButConnectionLeft) {
                        FLM = { x: countertopConnectionLeftLong!.LA, y: d - e };
                        if (!frontEdgeVisibleButConnectionRight) {
                            FR.y -= e;
                        }
                    }
                    if (frontEdgeVisibleButConnectionRight) {
                        FRM = { x: w - countertopConnectionRightLong!.LA, y: d - e };
                        if (!frontEdgeVisibleButConnectionLeft) {
                            FL.y -= e;
                        }
                    }
                    if (centralPartOfFrontEdgeVisible) {
                        FL.y -= e;
                        FR.y -= e;
                    }

                    this.annotatedPoints.push(new AnnotatedPoint(BL.x, BL.y, FeatureType.VISIBLE_EDGE));
                    this.annotatedPoints.push(new AnnotatedPoint(BR.x, BR.y, FeatureType.VISIBLE_EDGE));
                    this.annotatedPoints.push(new AnnotatedPoint(FL.x, FL.y, FeatureType.VISIBLE_EDGE));
                    this.annotatedPoints.push(new AnnotatedPoint(FR.x, FR.y, FeatureType.VISIBLE_EDGE));
                    if (frontEdgeVisibleButConnectionLeft) {
                        this.annotatedPoints.push(new AnnotatedPoint(FLM!.x, d, FeatureType.COUNTERTOP_CONNECTION_LONG));
                    }
                    if (frontEdgeVisibleButConnectionRight) {
                        this.annotatedPoints.push(new AnnotatedPoint(FRM!.x, d, FeatureType.COUNTERTOP_CONNECTION_LONG));
                    }

                    if (frontEdgeVisibleButConnectionLeft || frontEdgeVisibleButConnectionRight || centralPartOfFrontEdgeVisible) {
                        const line = new XmlObject('line', {
                            x1: FLM ? FLM.x - connectionThickness : FL.x,
                            y1: (FLM ?? FL).y,
                            x2: FRM ? FRM.x + connectionThickness : FR.x,
                            y2: (FRM ?? FR).y,
                            stroke: DrawingOptions.DrawingColorStrokeFeature,
                            'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        });
                        this.svg.push(line);
                    }
                    if (rearEdgeVisible) {
                        const line = new XmlObject('line', {
                            x1: BL.x,
                            y1: BL.y,
                            x2: BR.x,
                            y2: BR.y,
                            stroke: DrawingOptions.DrawingColorStrokeFeature,
                            'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        });
                        this.svg.push(line);
                    }
                    if (leftEdgeVisible) {
                        const line = new XmlObject('line', {
                            x1: BL.x,
                            y1: BL.y,
                            x2: FL.x,
                            y2: FL.y,
                            stroke: DrawingOptions.DrawingColorStrokeFeature,
                            'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        });
                        this.svg.push(line);
                    }
                    if (rightEdgeVisible) {
                        const line = new XmlObject('line', {
                            x1: BR.x,
                            y1: BR.y,
                            x2: FR.x,
                            y2: FR.y,
                            stroke: DrawingOptions.DrawingColorStrokeFeature,
                            'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        });
                        this.svg.push(line);
                    }


                }
                else if (entry.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_LONG) {
                    // plot line
                    const points: { x: number, y: number }[] = [
                        { x: fX(0), y: fY(0) },
                        { x: fX(entry.LA), y: fY(0) },
                        { x: fX(entry.LA - connectionThickness), y: fY(connectionThickness) },
                        { x: fX(0), y: fY(connectionThickness) },
                    ];
                    if (entry.Position === 'Right') {
                        points.forEach((point: { x: number, y: number }) => {
                            point.x = this.part._width - point.x;
                        });
                    }
                    this.svg.push(new XmlObject('polygon', {
                        points: points.map((point: { x: number, y: number }) => `${point.x},${point.y}`).join(' '),
                        fill: DrawingOptions.DrawingCanvasBackgroundColor,
                        stroke: DrawingOptions.DrawingCanvasBackgroundColor,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth * 1.1,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                    this.svg.push(new XmlObject('line', {
                        x1: points[1].x,
                        y1: points[1].y,
                        x2: points[2].x,
                        y2: points[2].y,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                    this.svg.push(new XmlObject('line', {
                        x1: points[2].x,
                        y1: points[2].y,
                        x2: points[3].x,
                        y2: points[3].y,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                }
                else if (entry.ToolFeatureDescription === FeatureType.COUNTERTOP_CONNECTION_SHORT) {
                    // plot line
                    const points: { x: number, y: number }[] = [
                        { x: fX(0), y: fY(this.part._depth) },
                        { x: fX(0), y: fY(connectionThickness) },
                        { x: fX(connectionThickness), y: fY(0) },
                        { x: fX(-10), y: fY(-10) },
                    ];
                    if (entry.Position === 'Right') {
                        points.forEach((point: { x: number, y: number }) => {
                            point.x = this.part._width - point.x;
                        });
                    }
                    this.svg.push(new XmlObject('polygon', {
                        points: points.map((point: { x: number, y: number }) => `${point.x},${point.y}`).join(' '),
                        fill: DrawingOptions.DrawingCanvasBackgroundColor,
                        stroke: DrawingOptions.DrawingCanvasBackgroundColor,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth * 1.1,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                    this.svg.push(new XmlObject('line', {
                        x1: points[0].x,
                        y1: points[0].y,
                        x2: points[1].x,
                        y2: points[1].y,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                    this.svg.push(new XmlObject('line', {
                        x1: points[1].x,
                        y1: points[1].y,
                        x2: points[2].x,
                        y2: points[2].y,
                        stroke: DrawingOptions.DrawingColorStrokeFeature,
                        'stroke-width': DrawingOptions.DrawingFeatureStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                }
            });
        }

        /** Debug - red cross at place of all annotated points */
        drawAnnotatedPoints() {
            const size = 5;
            this.annotatedPoints.forEach((point: AnnotatedPoint) => {
                // debug: draw a cross at the point location
                if (point.customSvg) {
                    this.svg.push(new XmlObject('circle', {
                        cx: point.x,
                        cy: point.y,
                        r: size,
                        fill: 'red',
                        stroke: 'red',
                        'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                        'vector-effect': 'non-scaling-stroke',
                    }));
                }
                else {
                    this.svg.push(new XmlObject('g', {}, [
                        new XmlObject('line', {
                            x1: point.x - size,
                            y1: point.y - size,
                            x2: point.x + size,
                            y2: point.y + size,
                            stroke: 'red',
                            'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        }),
                        new XmlObject('line', {
                            x1: point.x + size,
                            y1: point.y - size,
                            x2: point.x - size,
                            y2: point.y + size,
                            stroke: 'red',
                            'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                            'vector-effect': 'non-scaling-stroke',
                        }),
                    ]));
                }
            });
        }

        /** Dashed lines */
        drawReferenceLines() {

            this.referenceLinesVerticalXCoordinates = Array.from(new Set(this.annotatedPoints.filter((ap: AnnotatedPoint) => !ap.customSvg).map((point: AnnotatedPoint) => point.x))).sort((a, b) => a - b);
            this.referenceLinesHorizontalYCoordinates = Array.from(new Set(this.annotatedPoints.filter((ap: AnnotatedPoint) => !ap.customSvg).map((point: AnnotatedPoint) => point.y))).sort((a, b) => a - b);

            const referenceLines = new XmlObject('g', {}, []);
            this.referenceLinesVerticalXCoordinates.forEach((x: number) => {
                referenceLines.push(new XmlObject('line', {
                    x1: x,
                    y1: 0,
                    x2: x,
                    y2: this.part._depth,
                    stroke: DrawingOptions.DrawingColorStrokeDashedReferenceLine,
                    'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                    'vector-effect': 'non-scaling-stroke',
                    // dash
                    'stroke-dasharray': `${DrawingOptions.DrawingAnnotationReferenceLineDashLength},${DrawingOptions.DrawingAnnotationReferenceLineDashLength}`,
                    'stroke-dashoffset': x,
                }));
            });
            this.referenceLinesHorizontalYCoordinates.forEach((y: number) => {
                referenceLines.push(new XmlObject('line', {
                    x1: 0,
                    y1: y,
                    x2: this.part._width,
                    y2: y,
                    stroke: DrawingOptions.DrawingColorStrokeDashedReferenceLine,
                    'stroke-width': DrawingOptions.DrawingAnnotationStrokeWidth,
                    'vector-effect': 'non-scaling-stroke',
                    // dash
                    'stroke-dasharray': `${DrawingOptions.DrawingAnnotationReferenceLineDashLength},${DrawingOptions.DrawingAnnotationReferenceLineDashLength}`,
                    'stroke-dashoffset': y,
                }));
            });
            this.svg.push(referenceLines);

        }

        /** Evaluate what annotation lines we have and if they are on top, bottom, left or right */
        evaluateAnnotations() {
            const arrayEqual = (a: number[], b: number[]): boolean => {
                if (a.length !== b.length) return false;
                for (let i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) return false;
                }
                return true;
            }

            const horizontalAnnotations: AnnotationLine[] = [];
            const verticalAnnotations: AnnotationLine[] = [];

            horizontalAnnotations.push(new AnnotationLine([0, this.part._width], this.part._depth, FeatureType.PART));
            verticalAnnotations.push(new AnnotationLine([0, this.part._depth], this.part._width, FeatureType.PART));

            [
                FeatureType.COUNTERTOP_CONNECTION_LONG,
                FeatureType.CUTOUT,
                FeatureType.POCKET,
                FeatureType.GROOVE,
                FeatureType.DRILL_HORIZONTAL,
                FeatureType.DRILL_VERTICAL,
            ].forEach((filteringFeatureType: FeatureType) => {

                this.referenceLinesHorizontalYCoordinates.forEach((y: number) => {

                    const annotationPointsAtTheCoordinate = Array.from(new Set(this.annotatedPoints.filter((point: AnnotatedPoint) => !point.customSvg && point.y === y && point.type === filteringFeatureType).map((point: AnnotatedPoint) => point.x).sort((a: number, b: number) => a - b)));
                    if (annotationPointsAtTheCoordinate[0] !== 0) {
                        annotationPointsAtTheCoordinate.unshift(0);
                    }
                    if (annotationPointsAtTheCoordinate[annotationPointsAtTheCoordinate.length - 1] !== this.part._width) {
                        annotationPointsAtTheCoordinate.push(this.part._width);
                    }

                    const existing = horizontalAnnotations.find((annotation: AnnotationLine) => {
                        return arrayEqual(annotation.segments, annotationPointsAtTheCoordinate);
                    });
                    if (!existing) {
                        horizontalAnnotations.push(new AnnotationLine(annotationPointsAtTheCoordinate, y, filteringFeatureType));
                    }
                });

                this.referenceLinesVerticalXCoordinates.forEach((x: number) => {
                    const annotationPointsAtTheCoordinate = Array.from(new Set(this.annotatedPoints.filter((point: AnnotatedPoint) => !point.customSvg && point.x === x && point.type === filteringFeatureType).map((point: AnnotatedPoint) => point.y).sort((a: number, b: number) => a - b)));
                    if (annotationPointsAtTheCoordinate[0] !== 0) {
                        annotationPointsAtTheCoordinate.unshift(0);
                    }
                    if (annotationPointsAtTheCoordinate[annotationPointsAtTheCoordinate.length - 1] !== this.part._depth) {
                        annotationPointsAtTheCoordinate.push(this.part._depth);
                    }
                    const existing = verticalAnnotations.find((annotation: AnnotationLine) => {
                        return arrayEqual(annotation.segments, annotationPointsAtTheCoordinate);
                    });
                    if (!existing) {
                        verticalAnnotations.push(new AnnotationLine(annotationPointsAtTheCoordinate, x, filteringFeatureType));
                    }
                });
            });

            const annotationSort = (a: AnnotationLine, b: AnnotationLine) => {
                if (a.featureType === b.featureType) {
                    return a.referenceCoordinate - b.referenceCoordinate;
                }
                else {
                    const featureTypeSort = [
                        FeatureType.POCKET,
                        FeatureType.GROOVE,
                        FeatureType.DRILL_HORIZONTAL,
                        FeatureType.DRILL_VERTICAL,
                        FeatureType.PART,
                    ];
                    const aIndex = featureTypeSort.indexOf(a.featureType);
                    const bIndex = featureTypeSort.indexOf(b.featureType);
                    return aIndex - bIndex;
                }
            };

            horizontalAnnotations.sort(annotationSort);
            verticalAnnotations.sort(annotationSort);

            this.annotations.left = verticalAnnotations.filter((annotation: AnnotationLine) => annotation.referenceCoordinate < this.part._width / 2);
            this.annotations.right = verticalAnnotations.filter((annotation: AnnotationLine) => annotation.referenceCoordinate >= this.part._width / 2);
            this.annotations.top = horizontalAnnotations.filter((annotation: AnnotationLine) => annotation.referenceCoordinate < this.part._depth / 2);
            this.annotations.bottom = horizontalAnnotations.filter((annotation: AnnotationLine) => annotation.referenceCoordinate >= this.part._depth / 2);
            this.annotations.custom = this.annotatedPoints.filter((point: AnnotatedPoint) => point.customSvg);

        }

        /** Convert the evaluated annotations to SVG. This step should be done after finding a position for the drawing based on the evaluated annotations. */
        getAnnotationsSvg(x: number, y: number, zoom: number): XmlObject {
            // this is called with origin in bottom left corner of the part view
            const parentGroup = new XmlObject('g', {}, []);

            const annotationsSvgLeft: XmlObject[] = [];
            for (let i = 0; i < this.annotations.left.length; i++) {
                const annotation = this.annotations.left[i].toSvg(
                    x - DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines * i - DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing,
                    y,
                    zoom,
                    this.viewType === 'TOP' ? 'vertical-topview' : 'vertical-bottomview',
                    'down',
                    i === 0 ? DrawingOptions.DrawingAnnotationFirstAnnotationDistance : 0,
                );
                annotationsSvgLeft.push(annotation);
            }
            annotationsSvgLeft.sort((a: XmlObject, b: XmlObject) => a.metadata.x - b.metadata.x);
            parentGroup.push(annotationsSvgLeft);


            const annotationsSvgRight: XmlObject[] = [];
            for (let i = 0; i < this.annotations.right.length; i++) {
                const annotation = this.annotations.right[i].toSvg(
                    x + this.part._width * zoom + DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines * i + DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing,
                    y,
                    zoom,
                    this.viewType === 'TOP' ? 'vertical-topview' : 'vertical-bottomview',
                    'up',
                    i === 0 ? DrawingOptions.DrawingAnnotationFirstAnnotationDistance : 0,
                );
                annotationsSvgRight.push(annotation);
            }
            annotationsSvgRight.sort((a: XmlObject, b: XmlObject) => b.metadata.x - a.metadata.x);
            parentGroup.push(annotationsSvgRight);

            const annotationsSvgTop: XmlObject[] = [];
            for (let i = 0; i < this.annotations.top.length; i++) {
                const annotation = this.annotations.top[i].toSvg(
                    x,
                    y - this.part._depth * zoom - DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines * i - DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing,
                    zoom,
                    'horizontal',
                    'down',
                    i === 0 ? DrawingOptions.DrawingAnnotationFirstAnnotationDistance : 0,
                );
                annotationsSvgTop.push(annotation);
            }
            annotationsSvgTop.sort((a: XmlObject, b: XmlObject) => a.metadata.y - b.metadata.y);
            parentGroup.push(annotationsSvgTop);

            const annotationsSvgBottom: XmlObject[] = [];
            for (let i = 0; i < this.annotations.bottom.length; i++) {
                const annotation = this.annotations.bottom[i].toSvg(
                    x,
                    y + DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines * i + DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing,
                    zoom,
                    'horizontal',
                    'up',
                    i === 0 ? DrawingOptions.DrawingAnnotationFirstAnnotationDistance : 0,
                );
                annotationsSvgBottom.push(annotation);
            }
            annotationsSvgBottom.sort((a: XmlObject, b: XmlObject) => a.metadata.y - b.metadata.y);
            parentGroup.push(annotationsSvgBottom);

            this.annotations.custom.forEach((point: AnnotatedPoint) => {
                const carrier = new XmlObject('g', {
                    transform: `translate(${x + point.x * zoom}, ${y - this.part._depth * zoom + point.y * zoom})`,
                }, [point.customSvg]);
                parentGroup.push(carrier);
            });

            return parentGroup;
        }

        getBoundingBox(): BoundingBox {
            const xValues = this.annotatedPoints.map((point: AnnotatedPoint) => point.x);
            const yValues = this.annotatedPoints.map((point: AnnotatedPoint) => point.y);
            const minX = Math.min(...xValues);
            const maxX = Math.max(...xValues);
            const minY = Math.min(...yValues);
            const maxY = Math.max(...yValues);
            return new BoundingBox(minX, minY, maxX - minX, maxY - minY,
                {
                    left: (this.annotations.left.length * DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines) + (this.annotations.left.length > 0 ? DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing : 0),
                    right: (this.annotations.right.length * DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines) + (this.annotations.right.length > 0 ? DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing : 0),
                    top: (this.annotations.top.length * DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines) + (this.annotations.top.length > 0 ? DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing : 0),
                    bottom: (this.annotations.bottom.length * DrawingOptions.DrawingAnnotationDistanceBetweenAnnotationLines) + (this.annotations.bottom.length > 0 ? DrawingOptions.DrawingAnnotationDistanceOfFirstAnnotationFromDrawing : 0),
                }

            );
        }
    }

    class DrawingTable {
        ncData: NcData[] = [];
        tableHeader: string;
        valuesHeader: Map<string, string>;
        boundingBox: BoundingBox;
        svg: XmlObject = new XmlObject('g', {}, []);

        constructor(featureType: FeatureType, ncData: NcData[]) {
            this.ncData = ncData.filter((entry: NcData) => entry.ToolFeatureDescription === featureType);
            const headerEntry = DrawingOptions.TABLES_HEADER.get(featureType)!;
            // pop first element from the header entry
            this.tableHeader = headerEntry.get('$HEADER')!;
            this.valuesHeader = new Map<string, string>();
            headerEntry.forEach((value: string, key: string) => {
                if (key !== '$HEADER') {
                    this.valuesHeader.set(key, value);
                }
            });
            this.svg = new XmlObject('g', {}, []);
            this.createSvg();
            const tableFrame = this.svg.deepFind('TableFrame', 'id')!;
            this.boundingBox = new BoundingBox(
                parseFloat(tableFrame.attributes.x),
                parseFloat(tableFrame.attributes.y),
                parseFloat(tableFrame.attributes.width),
                parseFloat(tableFrame.attributes.height),
            );
        }

        createSvg() {
            const headerKeys: string[] = Array.from(this.valuesHeader.keys());
            const rowsAndColumnsContent: Map<string, string>[] = [];

            // push the header
            const headerRow: Map<string, string> = new Map<string, string>();
            headerKeys.forEach((key: string) => {
                headerRow.set(key, this.valuesHeader.get(key)!);
            });
            rowsAndColumnsContent.push(headerRow);

            // convert and push the nc data
            this.ncData.forEach((entry: NcData) => {
                const row: Map<string, string> = new Map<string, string>();
                headerKeys.forEach((key: string) => {
                    let value = entry[key as keyof NcData]!;
                    if (typeof value === 'number') {
                        value = lengthToString(value);
                    }
                    row.set(key, value.toString());
                });
                rowsAndColumnsContent.push(row);
            });

            // store maximum widths of every column
            const columnWidthsMap: Map<string, number> = new Map<string, number>();
            headerKeys.forEach((key: string) => {
                columnWidthsMap.set(key, 0);
            });
            rowsAndColumnsContent.forEach((row: Map<string, string>) => {
                row.forEach((value: string, key: string) => {
                    const widthInColumn = estimateTextLength(value);
                    const runningMax = columnWidthsMap.get(key)!;
                    if (widthInColumn > runningMax) {
                        columnWidthsMap.set(key, widthInColumn);
                    }
                });
            });
            const columnWidthsArr = Array.from(columnWidthsMap.values()).map((width: number) => Math.ceil(width / DrawingOptions.DrawingTableMarginHorizontal) * DrawingOptions.DrawingTableMarginHorizontal);
            // cumulative sum of the column widths where the last one is added by half
            let x = columnWidthsArr[0] / 2;
            const columnTextX: number[] = [x];
            for (let i = 1; i < columnWidthsArr.length; i++) {
                x += columnWidthsArr[i];
                columnTextX.push(x);
            }

            const tableWidth = columnWidthsArr.reduce((a: number, b: number) => a + b, 0);
            const rowHeight = DrawingOptions.DrawingAnnotationFontSize + 2 * DrawingOptions.DrawingTableMarginVertical;
            const tableHeight = (
                + 1 // table header
                + 1 // columns header
                + this.ncData.length
            ) * rowHeight;


            // table frame
            this.svg.push(new XmlObject('rect', {
                id: 'TableFrame',
                x: 0,
                y: 0,
                width: tableWidth,
                height: tableHeight,
                fill: DrawingOptions.DrawingCanvasBackgroundColor,
                stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                'stroke-width': DrawingOptions.DrawingTableStrokeWidth,
                'vector-effect': 'non-scaling-stroke',
            }));
            // header row undercolor
            this.svg.push(new XmlObject('rect', {
                x: DrawingOptions.DrawingTableStrokeWidth,
                y: DrawingOptions.DrawingTableStrokeWidth,
                width: tableWidth - 2 * DrawingOptions.DrawingTableStrokeWidth,
                height: rowHeight * 2 - 2 * DrawingOptions.DrawingTableStrokeWidth,
                fill: DrawingOptions.DrawingTableColorHeaderFill,
                // without stroke
                stroke: 'none',
                'vector-effect': 'non-scaling-stroke',
            }));
            // row lines
            for (let r = 1; r < 3; r++) {
                this.svg.push(new XmlObject('line', {
                    x1: 0,
                    y1: r * rowHeight,
                    x2: tableWidth,
                    y2: r * rowHeight,
                    stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                    'stroke-width': DrawingOptions.DrawingTableStrokeWidth,
                    'vector-effect': 'non-scaling-stroke',
                }));
            }
            // row fill undercolor
            for (let r = 3; r < rowsAndColumnsContent.length + 1; r = r + 2) {
                this.svg.push(new XmlObject('rect', {
                    x: DrawingOptions.DrawingTableStrokeWidth,
                    y: DrawingOptions.DrawingTableStrokeWidth + r * rowHeight,
                    width: tableWidth - 2 * DrawingOptions.DrawingTableStrokeWidth,
                    height: rowHeight - 2 * DrawingOptions.DrawingTableStrokeWidth,
                    fill: DrawingOptions.DrawingTableColorHeaderFill,
                    // without stroke
                    stroke: 'none',
                    'vector-effect': 'non-scaling-stroke',
                }));
            }
            // column lines
            for (let c = 0; c < columnWidthsArr.length - 1; c++) {
                this.svg.push(new XmlObject('line', {
                    x1: columnWidthsArr.slice(0, c + 1).reduce((a: number, b: number) => a + b, 0),
                    y1: rowHeight,
                    x2: columnWidthsArr.slice(0, c + 1).reduce((a: number, b: number) => a + b, 0),
                    y2: tableHeight,
                    stroke: DrawingOptions.DrawingColorStrokeAnnotation,
                    'stroke-width': DrawingOptions.DrawingTableStrokeWidth,
                    'vector-effect': 'non-scaling-stroke',
                }));
            }
            // header
            this.svg.push(new XmlObject('text', {
                x: tableWidth / 2,
                y: DrawingOptions.DrawingTableMarginVertical,
                fill: DrawingOptions.DrawingColorStrokeAnnotation,
                'font-size': DrawingOptions.DrawingAnnotationFontSize,
                'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                'text-anchor': 'middle',
                'dominant-baseline': 'hanging',
                'font-weight': 'bold',
                'vector-effect': 'non-scaling-stroke',
            }, [this.tableHeader]));
            // values
            for (let r = 0; r < rowsAndColumnsContent.length; r++) {
                const row: Map<string, string> = rowsAndColumnsContent[r];
                const y = (r + 1) * rowHeight + DrawingOptions.DrawingTableMarginVertical;
                for (let c = 0; c < headerKeys.length; c++) {
                    const key: string = headerKeys[c];
                    const value: string = row.get(key)!;
                    const x = columnTextX[c];
                    this.svg.push(new XmlObject('text', {
                        x: x,
                        y: y,
                        fill: DrawingOptions.DrawingColorStrokeAnnotation,
                        'font-size': DrawingOptions.DrawingAnnotationFontSize,
                        'font-family': DrawingOptions.DrawingAnnotationFontFamily,
                        'text-anchor': 'middle',
                        'dominant-baseline': 'hanging',
                        'vector-effect': 'non-scaling-stroke',
                        // bold if first
                        'font-weight': r === 0 ? 'bold' : 'normal',
                    }, [value]));
                }
            }
        }

    }

    /**
     * Entry point of the drawing. This draws a part from the top and bottom views. 
     * This is consturcted of an object which is:
     * {
     *  part: the data of the part
     *  bomEntries: list of the BOM entries
     * }
    */
    class PartDrawing {
        part: any;
        ncData: NcData[] = [];
        svg: XmlObject;

        constructor(data: any) {
            this.part = data.part;
            const allEntriesAsNcData = NcData
                .fromAny(data.bomEntries, this.part)
                // do not do anything that are groups or are to be skipped or unknown
                .filter((entry: NcData) => {
                    return entry.ToolFeatureDescription !== FeatureType.UNKNOWN && entry.ToolFeatureDescription !== FeatureType.SKIP;
                })
                // some are grouped, some are freely in the array -> sort them to be able to only take the unique ones
                .sort((a: NcData, b: NcData) => {
                    if (a.ToolFeatureDescription === b.ToolFeatureDescription) {
                        if (a.XA !== b.XA) {
                            return a.XA - b.XA;
                        }
                        else if (a.YA !== b.YA) {
                            return a.YA - b.YA;
                        }
                        else {
                            return a.TI + a.DU - (b.TI + b.DU);
                        }
                    }
                    else {
                        return a.ToolFeatureDescription.localeCompare(b.ToolFeatureDescription)
                    }
                });
            // take one after another from the sorted array and check if it already exists in the ncData array
            // combination of pop+unshift on the sorted array is faster because we should have the most similar ones at the end of the array
            while (allEntriesAsNcData.length > 0) {
                const entry = allEntriesAsNcData.pop()!;
                const alreadyExists = this.ncData.some((e: NcData) => e.isEqual(entry));
                if (!alreadyExists) {
                    this.ncData.unshift(entry);
                }
            }

            this.svg = XmlObject.CreateSvgHeader();

            const views = {
                'TOP': new PartDrawingView({ viewType: ViewType.TOP, ncData: this.ncData, part: this.part }),
                'BOTTOM': new PartDrawingView({ viewType: ViewType.BOTTOM, ncData: this.ncData, part: this.part }),
            };


            // draw the two views in the same svg
            // draw only the view that has some features
            // if both views have features, draw the top view only
            const displayedDrawings: PartDrawingView[] = [];
            if (views.BOTTOM.ncData.length > 0) {
                displayedDrawings.unshift(views.BOTTOM);
            }
            if (views.TOP.ncData.length > 0 || displayedDrawings.length === 0) {
                displayedDrawings.unshift(views.TOP);
            }

            let maxDrawingWidth = 0
            let maxDrawingHeight = 0;
            let maxAnnotationsLeftWidth = 0;
            let maxAnnotationsRightWidth = 0;

            const tables = new Map<FeatureType, DrawingTable>();
            [
                FeatureType.DRILL_HORIZONTAL,
                FeatureType.DRILL_VERTICAL,
                FeatureType.POCKET,
                FeatureType.GROOVE,
            ].forEach((featureType: FeatureType) => tables.set(featureType, new DrawingTable(featureType, this.ncData)));




            displayedDrawings.forEach((view: PartDrawingView) => {
                this.svg.push(view.svg);
                const boundingBox = view.boundingBox;
                maxDrawingWidth = Math.max(maxDrawingWidth, boundingBox.w);
                maxDrawingHeight = Math.max(maxDrawingHeight, boundingBox.h);
                maxAnnotationsLeftWidth = Math.max(maxAnnotationsLeftWidth, boundingBox.annotations.left);
                maxAnnotationsRightWidth = Math.max(maxAnnotationsRightWidth, boundingBox.annotations.right);
            });
            let zoom = (DrawingOptions.DrawingCanvasWidth - 2 * DrawingOptions.DrawingCanvasMargin - maxAnnotationsLeftWidth - maxAnnotationsRightWidth) / (maxDrawingWidth);
            if (zoom > DrawingOptions.DrawingCanvasMaxZoom) {
                zoom = DrawingOptions.DrawingCanvasMaxZoom;
            }

            // Calculate feature density
            //const totalFeatures =
            // displayedDrawings.reduce((acc: number, view: PartDrawingView) => acc + view.ncData.length, 0);
            //const partArea = maxDrawingWidth * maxDrawingHeight;
            //const featureDensity = totalFeatures / partArea * 100 * 100 / zoom / zoom;
            //if (featureDensity < 0.4) {
            //    //  zoom = Math.max(zoom * 0.5, 1);
            //}

            // const maxFeatures = Math.max(...displayedDrawings.map((view: PartDrawingView) => view.ncData.length));
            // const drawingArea = maxDrawingHeight * maxDrawingWidth;
            // const zoomedFeatureDensity = maxFeatures / drawingArea * 100 * 100 / zoom / zoom;
            // if (zoomedFeatureDensity < 0.1) {
            //     zoom = Math.max(DrawingOptions.DrawingCanvasMaxZoom / 4, DrawingOptions.DrawingCanvasMaxZoom / 2);
            // }
            // else if (zoomedFeatureDensity < 0.2) {
            //     zoom = Math.min(zoom * 0.5, DrawingOptions.DrawingCanvasMaxZoom);
            // }

            const drawingsPositionX = DrawingOptions.DrawingCanvasWidth / 2 - (maxDrawingWidth * zoom) / 2 + maxAnnotationsLeftWidth / 2 - maxAnnotationsRightWidth / 2;
            let drawingsPositionY = DrawingOptions.DrawingCanvasMargin;
            displayedDrawings.forEach((view: PartDrawingView) => {
                drawingsPositionY += view.boundingBox.annotations.top;
                view.svg.attributes.transform = `translate(${drawingsPositionX}, ${drawingsPositionY}) scale(${zoom})`;
                const drawingHeightZoomed = view.boundingBox.h * zoom;
                this.svg.push(view.getAnnotationsSvg(drawingsPositionX, drawingsPositionY + drawingHeightZoomed, zoom));
                drawingsPositionY += drawingHeightZoomed + view.boundingBox.annotations.bottom + DrawingOptions.DrawingCanvasMargin;
            });

            // draw the tables
            tables.forEach((table: DrawingTable) => {
                if (table.ncData.length > 0) {
                    const tableX = DrawingOptions.DrawingCanvasWidth / 2 - table.boundingBox.w / 2;
                    const tableY = drawingsPositionY;
                    table.svg.attributes.transform = `translate(${tableX}, ${tableY})`;
                    this.svg.push(table.svg);
                    drawingsPositionY += table.boundingBox.h + DrawingOptions.DrawingCanvasMargin;
                }
            });

            this.svg.attributes.height = drawingsPositionY;

            this.svg.push([

                // rect drawing size
                new XmlObject('rect', {
                    x: 0,
                    y: 0,
                    width: this.svg.attributes.width,
                    height: this.svg.attributes.height,
                    fill: DrawingOptions.DrawingCanvasBackgroundColor,
                    stroke: DrawingOptions.DrawingCanvasEdgeColor,
                    'stroke-width': '1',
                    'vector-effect': 'non-scaling-stroke',
                }),
            ], true);

        }


    }

    const SetDrawingOptions = (source: any) => {
        const drawingOptionsKeys = Object.keys(DrawingOptions);
        for (const sourceKey in source) {
            let key = sourceKey as string;
            if (key.startsWith('_basic_')) {
                key = key.substring(7);
            }
            if (drawingOptionsKeys.includes(key)) {
                (DrawingOptions as any)[key] = source[sourceKey];
            }
        }
    }

    return {
        PartDrawing,
        SetDrawingOptions,
    }
}


// Find Parts Graphic Rotation
static find_PartsGraphicRotation (ReferencePointXYZ:string, RotationAxis:string, Rotation:number):ICT_tab_PartsGraphicRotation{
	let retEntry= ct_tab_PartsGraphicRotation.find(p=> p.in_ReferencePointXYZ == ReferencePointXYZ && p.in_RotationAxis == RotationAxis && p.in_Rotation == Rotation);	
	if (retEntry== undefined) {
    let Text = 'ReferencePointXYZ:' + ReferencePointXYZ + ', RotationAxis:' + RotationAxis + ', Rotation:' + Rotation;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 15004',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Find DishwasherMapping
static find_DishwasherMapping(Supplier: string,DishwasherId: string):ICT_tab_DishwasherMapping{

	let retEntry = ct_tab_DishwasherMapping.find(p => p.in_Supplier == Supplier && p.in_DishwasherId == DishwasherId)!;

	if (retEntry == undefined) {
		let Text = Supplier + ', ' + DishwasherId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13028',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry;
}


// Find Dishwasher construction
static find_DishwasherConstruction(ConstructionId: string): ICT_tab_DishwasherConstruction{

	let retEntry = ct_tab_DishwasherConstruction.find(p => p.in_ConstructionId == ConstructionId);

	if (retEntry == undefined) {
		let Text = ConstructionId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11015',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry!;
}


// Find carcase corner unit construction
static find_CarcaseCornerunitConstruction(Part: string, LeftTop: string, LeftBtm: string, RightBtm: string, RightTop: string, PartBackLeft: string, PartFrontLeft: string, PartBackRight: string, PartFrontRight: string, PartVisible:boolean, AdditionalInfo01:string = 'All'):ICT_tab_CarcaseCornerunitConstruction{
  let retEntry = ct_tab_CarcaseCornerunitConstruction.find(p => p.in_Part == Part && p.in_LeftTop == LeftTop && p.in_LeftBtm == LeftBtm && p.in_RightBtm == RightBtm && p.in_RightTop == RightTop && p.in_PartBackLeft == PartBackLeft && p.in_PartFrontLeft == PartFrontLeft && p.in_PartBackRight == PartBackRight && p.in_PartFrontRight == PartFrontRight && p.in_Visible == PartVisible && p.in_AdditionalInfo01 == AdditionalInfo01);
	if (retEntry == undefined) {
    let Text = Part + ' - ' + LeftTop + ' - ' + LeftBtm + ' - ' + RightBtm + ' - ' + RightTop + ' - ' + PartBackLeft + ' - ' + PartFrontLeft + ' - ' + PartBackRight + ' - ' + PartFrontRight + ' - ' + PartVisible + ' - ' + AdditionalInfo01;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11016',1)
		logError(ErrorMessage.Message(Text));
	}
	return retEntry!;
}


// Process to insert the Sidepanel in the Cornerunit
static process_CornerunitSidepanelConstruction(m: IFuncParents_mc_Cornerunit01, side: string = 'Left') {

  // Interface to provide the data to the carcase
  //-------------------------------------------------------------------------------------

  interface SidepanelInfo {
    SpPart: string;         // Name of the construction part (provided in the parts list for fittings like push to open)
    Height: number;
    Width: number;
    Depth: number;
    WidthPos: number;
    HeightPos: number;
    DepthPos: number;
  }

  // Initialize the object
  let sidepanelInfo: SidepanelInfo = {
    SpPart: 'None',
    Height: 0,
    Width: 0,
    Depth: 0,
    WidthPos: 0,
    HeightPos: 0,
    DepthPos: 0
  };

  // Variables
  //-------------------------------------------------------------------------------------
  let moduleName = 'mc_Cornerunit01';
  //let CarcaseBackwConstruction: any;
  let Sp: any;
  //let tmpBwSp: number = 0;       
  //let tmpSpPosBack: number = 0;
  //let tmpSpPosFront: number = 0;
  let tmpSpPart: string = '';
  let retSp: any;

  // Query the settings table to get the module to insert
	//-------------------------------------------------------------------------------------

	let additionalInfo01 = 'All';
	let sidePanelSettings = GlobalFunc.find_CarcaseSidepanelSettings(moduleName, side == 'Left' ? m.mod_SidepanelleftType : m.mod_SidepanelrightType, side, additionalInfo01);

  let librarySolution: boolean = sidePanelSettings.LibrarySolution!;
  let usedModule: string = sidePanelSettings.UsedModule!;
  let partName = sidePanelSettings.ConstructionTablePartName!;
  let insertModule: boolean = sidePanelSettings.InsertModule!; 
  let partType: string = sidePanelSettings.PartType!;


  //##########################################################################################
  // Library solution
  //##########################################################################################

  if (librarySolution) {

    //====================================================================
    // mc_StorageunitSidepanel01
    //====================================================================
    if (usedModule == 'mc_StorageunitSidepanel01') {

      // Calculate tmpAdditionalInfo01 (All or SlopedCeiling to use in the ccc-key)
      let tmpAdditionalInfo01: string = 'All';

      // Get CarcaseBackwConstruction to use as PartBack in CCK_StorageUnit
      //CarcaseBackwConstruction = GlobalFunc.find_CarcaseBackwallSettings(firstBwCon)!;

      // Get the constructionBackwall based on the side panel side
      //let constructionBackwall = side == "Left" ? CarcaseBackwConstruction.ConstructionBackwallLeft! : CarcaseBackwConstruction.ConstructionBackwallRight!;

      // Get the constructionFront based on the side panel side
      let constructionFrontLeft = 'n.a.'; 
      let constructionFrontRight = 'n.a.';
      if (side == "Left") {
        constructionFrontLeft = m.mod_CarcaseFrontConstruction_matrix.Left!;
      }
      if (side == "Right") {
        constructionFrontRight = m.mod_CarcaseFrontConstruction_matrix.Right!;
      }

      // Get the visibility based on the side panel side
      let visibility = side == "Left" ? m.mod_CarcaseVisLeft : m.mod_CarcaseVisRight;

      // Query the ccc-Key
      retSp = GlobalFunc.find_CarcaseCornerunitConstruction(partName, m.mod_CarcaseConnectionLeftTop, m.mod_CarcaseConnectionLeftBtm, m.mod_CarcaseConnectionRightBtm, m.mod_CarcaseConnectionRightTop, 'n.a.', constructionFrontLeft, 'n.a.', constructionFrontRight, visibility, tmpAdditionalInfo01);

      if (insertModule) {

        // Add the module
        Sp = m.addOD_M_mc_StorageunitSidepanel01();
        
        // Set values to the attributes of the child
        Sp.mod_Height = retSp.Height(m);
        Sp.mod_Width = retSp.Width(m);
        Sp.mod_Depth = retSp.Depth(m);
        Sp.mod_SidepanelType = partType;
        Sp.mod_EdgeFrontType = retSp.EdgeTypeFront!;
        Sp.mod_EdgeLeftType = retSp.EdgeTypeLeft!;
        Sp.mod_EdgeBackType = retSp.EdgeTypeBack!;
        Sp.mod_EdgeRightType = retSp.EdgeTypeRight!;
        Sp.mod_EdgeJointType = retSp.EdgeJointType;
        Sp.mod_Originpos.push(retSp.WidthPos(m));
        Sp.mod_Originpos.push(retSp.HeightPos(m));
        Sp.mod_Originpos.push(retSp.DepthPos(m));

        //Rotate and set setOrigin
        let rotation: number = side == "Left" ? 90 : 0;
        let positionCorrection: number = side == "Left" ? retSp.Width(m) : 0;
        let modMatrix = ModuleHelper.posAndRotateY(retSp.WidthPos(m), retSp.HeightPos(m), retSp.DepthPos(m) + positionCorrection, rotation, new Vector3(retSp.WidthPos(m), retSp.HeightPos(m), retSp.DepthPos(m) + positionCorrection));
        Sp.setOrigin(modMatrix);

      }


      // Manage starting position of the backwalls on the side
      //let tmpSpThk = side == 'Left' ? retSp.Width(m) : 0
      //tmpBwSp = retSp.WidthPos(m) + tmpSpThk;

      // Define back side position of the sidepanel (fixed shelf starting position)
      //tmpSpPosBack = constructionBackwall == 'Overlayed' ? -10 : retSp.DepthPos(m);

      // Frontposition of the sidepanel (free space calculation)
      //tmpSpPosFront = retSp.Depth(m, firstBwPos) + retSp.DepthPos(m, firstBwPos);

      // PartName (for Carcase Parts Info)
      tmpSpPart = side === 'Left' ? 'LeftSidePanel' : 'RightSidePanel';

    }


    //====================================================================
    // Other modules
    //====================================================================
    else {


    }


  }

  //##########################################################################################
  // Custom solutions (User Exit)
  //##########################################################################################

  else {


  }

  //##########################################################################################
  // Return the needed data to the carcase
  //##########################################################################################

  //sidepanelInfo.BwSp = tmpBwSp;
  //sidepanelInfo.SpPosBack = tmpSpPosBack;
  //sidepanelInfo.SpPosFront = tmpSpPosFront;
  sidepanelInfo.SpPart = tmpSpPart;

  sidepanelInfo.Height = retSp.Height(m);
  sidepanelInfo.Width = retSp.Width(m);
  sidepanelInfo.Depth = retSp.Depth(m);
  sidepanelInfo.WidthPos = retSp.WidthPos(m);
  sidepanelInfo.HeightPos = retSp.HeightPos(m);
  sidepanelInfo.DepthPos = retSp.DepthPos(m);

  return JSON.stringify(sidepanelInfo);

}


// Process for the brackets
static process_Bracket(m: any) {

	let retBrackets: any={};


	let retPartSettings = GlobalFunc.find_BracketMapping(m.mod_ShelvesBrackets_matrix.Supplier, m.mod_ShelvesBrackets_matrix.SupItemCode);
	let ConstructionId = retPartSettings.ConstructionId;
	let GraphicId = retPartSettings.GraphicId;
	let retGraphSettings = GlobalFunc.find_GraphicLibrary(GraphicId!);

	retBrackets.model3D = retGraphSettings.Model3D;
	retBrackets.xDim = retGraphSettings.DimensionX;
	retBrackets.yDim = retGraphSettings.DimensionY;
	retBrackets.zDim = retGraphSettings.DimensionZ;
	retBrackets.xIns = retGraphSettings.InsertionPointX;
	retBrackets.yIns = retGraphSettings.InsertionPointY;
	retBrackets.zIns = retGraphSettings.InsertionPointZ;


	let retConstrSettings = GlobalFunc.find_BracketConstruction(ConstructionId!,m.mod_ShelvesThk,m.mod_Depth,m.mod_Width);
	//find_BracketConstruction(ConstructionId: string, ShelfThk : number, Shelfdepth: number, ShelfWidth: number)
	retBrackets.BrNo = retConstrSettings.BracketNo;
	retBrackets.Pos1 = retConstrSettings.Position1;
	retBrackets.Pos2 = retConstrSettings.Position2;
	retBrackets.Pos3 = retConstrSettings.Position3;
	retBrackets.Pos4 = retConstrSettings.Position4;
	retBrackets.Pos5 = retConstrSettings.Position5;
	retBrackets.Pos6 = retConstrSettings.Position6;

	let test = retConstrSettings.TestColumn(m);

	
	return retBrackets;	

}


// Find Bracket Mapping
static find_BracketMapping(Supplier: string, BracketId: string):ICT_tab_BracketMapping{

	let retEntry = ct_tab_BracketMapping.find(p => p.in_Supplier == Supplier && p.in_BracketId == BracketId)!;
	
	if (retEntry == undefined) {
		let Text = Supplier + " - " + BracketId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 13015',1);
		logError(ErrorMessage.Message(Text));
	}	

	return retEntry!;
}


// Find teh Shelf bracket construction
static find_BracketConstruction(ConstructionId: string, ShelfThk: number, Shelfdepth: number, ShelfWidth: number): ICT_tab_BracketConstruction{

	let retEntry = ct_tab_BracketConstruction.find(p => p.in_ConstructionId == ConstructionId && p.in_ShelfThk == ShelfThk && p.in_ShelfDepthMin < Shelfdepth && p.in_ShelfDepthMax >= Shelfdepth && p.in_ShelfLenghtMin < ShelfWidth && p.in_ShelfLenghtMax >= ShelfWidth);

	if (retEntry == undefined) {
		let Text = ConstructionId;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 11015',1);
		logError(ErrorMessage.Message(Text));
	}

	return retEntry!;
}


// Grain direction settings\n//#########################################################
static find_GrainDirectionSettings(PartId: string,TypeElement: string, ProgramGroupId: string, ColorGroupId: string, Length: number, Width: number): ICT_tab_GrainDirectionSettings {

  // Wildcard parameters
  let WildcardParams: any = {
    in_TypeElement: TypeElement
  };

  // Fixed parameters
  let FixedParams: any = {
    in_PartId: PartId,
    in_ProgramGroupId: ProgramGroupId,
    in_ColorGroupId: ColorGroupId
  };

  // Range parameters
  let RangeParams: any = {
		"Range1": {
			MinAttr: "in_LengthMin",
			MaxAttr: "in_LengthMax",
			Value: Length
		},
		"Range2": {
			MinAttr: "in_WidthMin",
			MaxAttr: "in_WidthMax",
			Value: Width
		}
	};

  // Return multiple rows or a single row (UniqueOutput = true returns a single row)
  let UniqueOutput = true;

  // Call the function and retrieve the value
  let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_GrainDirectionSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
  if (retVal == undefined) {
    let Text = PartId + ' - ' + TypeElement + ' - ' + ProgramGroupId + ' - ' + ColorGroupId + ' - ' + Length + ' - ' + Width;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14034', 1);
    logError(ErrorMessage.Message(Text));
  }

  // Return the value
  return retVal;

}


// Create the needed data for the gaphic of hardware elements
static process_GraphicLibraryData(GroupName: string): [ICT_tab_GraphicLibrary | undefined, ICT_tab_GraphicFileLibrary | undefined] {

	let file3dModel: ICT_tab_GraphicFileLibrary | undefined;
	let retGraphicLib = ct_tab_GraphicLibrary.find(p => p.in_Model3DGroupName == GroupName);

	if (retGraphicLib == undefined) {
		let Text = 'Model3DGroupName: ' + GroupName;
		let ErrorMessage = GlobalFunc.find_ErrorList('Error 12004', 1);
		logError(ErrorMessage.Message(Text));
	}
	else {
		file3dModel = ct_tab_GraphicFileLibrary.find(p => p.in_GraphicFileId == retGraphicLib.GraphicFileId);

		if (file3dModel == undefined) {
			let Text = 'Model3DGroupName: ' + GroupName;
			let ErrorMessage = GlobalFunc.find_ErrorList('Error 12004', 1);
			logError(ErrorMessage.Message(Text));
		}
	}

	return [retGraphicLib, file3dModel];
}


// Calculation of data for the legs in the plinth area
static process_PlinthAreaLegs(m: any) {

  // Interface and Object
  interface PlinthAreaResult {
    Rotation: number[];
    PosX: number[];
    PosZ: number[];
    ProcessingId: string[];
    Model3DGroupName: string[];
    HardwareId: string[];
    LineLeft: number;
    LineRight: number;
    LineFront: number;
    LineBack: number;
  }

  const emptyResult: PlinthAreaResult = {
    Rotation: [],
    PosX: [],
    PosZ: [],
    ProcessingId: [],
    Model3DGroupName: [],
    HardwareId: [],
    LineLeft: 0,
    LineRight: 0,
    LineFront: 0,
    LineBack: 0
  };

  try {
    const retPlinthArea: PlinthAreaResult = { ...emptyResult };

    //========================================================================
    // Call user exit for customization
    //========================================================================

    if (m.mod_PlinthAreaPosLogic === 'Custom') {
      const retValUe = GlobalFunc.ue_PlinthAreaLegs(m);
      return {
        ...emptyResult,
        Rotation: retValUe.Rotation,
        PosX: retValUe.PosX,
        PosZ: retValUe.PosZ,
        ProcessingId: retValUe.ProcessingId,
        Model3DGroupName: retValUe.Model3DGroupName,
        HardwareId: retValUe.HardwareId,
        LineLeft: retValUe.LineLeft,
        LineRight: retValUe.LineRight,
        LineFront: retValUe.LineFront,
        LineBack: retValUe.LineBack
      };
    }

    //========================================================================
    // Standard Library Solution
    //========================================================================

    else {

      //---------------Initialize Variables-------------------

      const ColorRelevant = m.mod_PlinthAreaDesign_matrix.PlinthAreaElementColor === 'Attribute';
      const ExtraItemRelevant = m.mod_PlinthAreaDesign_matrix.PlinthAreaExtraItem === 'Attribute';
      const carcaseWidth = m.mod_CarcaseWidth ?? 600;
      const carcaseDepth = m.mod_CarcaseDepth ?? 550;
      const weight = m.mod_Weight ?? 0;

      //---------------Find offsets from tab_PlinthAreaSettings-------------

      const retSetting = GlobalFunc.find_PlinthAreaSettings(m.mod_TypeElement, m.mod_PlinthAreaDesign, m.mod_PlinthAreaPosLeftMatrix, m.mod_PlinthAreaPosRightMatrix, m.mod_PlinthAreaPosBackMatrix, m.mod_PlinthAreaPosFrontMatrix, carcaseWidth, carcaseDepth, weight);

      // Cycle for all the legs we found in the table PlinthAreaSettings
      retSetting.forEach(leg => {

        //---------------Call the user exit for special legs------------------
      
        if (leg.SettingsLogic == "Custom") {
          GlobalFunc.ue_PlinthAreaSingleLeg(m, retPlinthArea, leg);
        }

        //---------------Library solution-------------------------------------
        
        else {
          // Save the Offsets for inserting the contour of the plinth panels
          const PosXOffset = leg.PosXOffset(m);
          const PosYOffset = leg.PosYOffset(m);

          if (leg.MatrixPositionType == 11) {
            retPlinthArea.LineBack = PosYOffset;
            retPlinthArea.LineLeft = PosXOffset;
          }
          else if (leg.MatrixPositionType == 33) {
            retPlinthArea.LineFront = PosYOffset;
            retPlinthArea.LineRight = PosXOffset;
          }

          // Return the rotation
          retPlinthArea.Rotation.push(leg.HardwareRotation);

          //---------------Find legs from tab_PlinthAreaMapping-------------

          const retMapping = GlobalFunc.find_PlinthAreaMapping(leg.MatrixPositionType, m.mod_PlinthAreaDesign, m.mod_PlinthAreaElementColor, m.mod_PlinthAreaExtraItem, m.mod_PlinthAreaHeight, m.mod_ShelfbtmThk, ColorRelevant, ExtraItemRelevant);

          //---------------Find data from tab_ObjectMapping (HardwareProcess)-----------

          const retObjectMapping = GlobalFunc.find_ObjectMapping(retMapping.Object!);
          retPlinthArea.ProcessingId.push(retObjectMapping.ProcessingItem!);
          retPlinthArea.HardwareId.push(retObjectMapping.HardwareItem!);

          //---------------Find data from tab_GraphicLibraryMapping-------------

          const retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(retObjectMapping.GraphicItem!);

          //---------------Find data from tab_GraphicLibrary--------------------

          let retGraphicLib: any;
          let Model3DGroupName = "";

          if (retGraphicMapping.length > 1) {
            const ErrorMessage = GlobalFunc.find_ErrorList('Error 40006',1)
		        logError(ErrorMessage.Message(""));
          }

          if (retGraphicMapping.length > 0) {
            const item = retGraphicMapping[0];
            Model3DGroupName = item.Model3DGroupName!;
            retGraphicLib = GlobalFunc.find_GraphicLibrary(Model3DGroupName);
          }

          retPlinthArea.Model3DGroupName.push(Model3DGroupName);

          //---------------Find positions from tab_PlinthAreaConstruction-------

          const retConstruction = GlobalFunc.find_PlinthAreaConstruction(leg.BasePoint!, leg.MatrixPositionType!, leg.HardwareRotation!);
          const DimX = retGraphicLib.DimensionX;
          const DimZ = retGraphicLib.DimensionZ;
          const PosX = retConstruction.PosX(m, PosXOffset, DimX, DimZ);
          const PosZ = retConstruction.PosY(m, PosYOffset, DimX, DimZ);
          retPlinthArea.PosX.push(PosX);
          retPlinthArea.PosZ.push(PosZ);
        }
      });

      // Return statement for the process function
      return retPlinthArea;
    }
  }

  //========================================================================
  // Catch the errors and return an empty object
  //========================================================================

  catch (err: any) {
    const ErrorMessage = GlobalFunc.find_ErrorList('Error 40005',1)
		logError(ErrorMessage.Message(err?.message ?? err));
    return emptyResult;
  }
}


// User exit for the calculation of the legs in the plinth area
static ue_PlinthAreaLegs(m: any) {

  // Interface and Object
	interface PlinthAreaResult {
		Rotation: number[];
		PosX: number[];
		PosZ: number[];
		ProcessingId: string[];
		Model3DGroupName: string[];
		HardwareId: string[];
		LineLeft: number;
		LineRight: number;
		LineFront: number;
		LineBack: number;
	}

	const emptyResult: PlinthAreaResult = {
    Rotation: [],
    PosX: [],
    PosZ: [],
    ProcessingId: [],
    Model3DGroupName: [],
    HardwareId: [],
    LineLeft: 0,
    LineRight: 0,
    LineFront: 0,
    LineBack: 0
  };

	try {
		const retPlinthArea: PlinthAreaResult = { ...emptyResult };
		
		//========================================================================
		// Call user exit for customization
		//========================================================================
			
    //---------------Initialize Variables-------------------

    const ColorRelevant = m.mod_PlinthAreaDesign_matrix.PlinthAreaElementColor === 'Attribute';
    const ExtraItemRelevant = m.mod_PlinthAreaDesign_matrix.PlinthAreaExtraItem === 'Attribute';	
    const carcaseWidth = m.mod_CarcaseWidth ?? 600;
    const carcaseDepth = m.mod_CarcaseDepth ?? 550;
    const weight = m.mod_Weight;

    //---------------Find offsets from tab_PlinthAreaSettings-------------

    const retSetting = GlobalFunc.find_PlinthAreaSettings(m.mod_TypeElement, m.mod_PlinthAreaDesign, m.mod_PlinthAreaPosLeftMatrix, m.mod_PlinthAreaPosRightMatrix, m.mod_PlinthAreaPosBackMatrix, m.mod_PlinthAreaPosFrontMatrix, carcaseWidth, carcaseDepth, weight);

    // Cycle for all the legs we found in the table PlinthAreaSettings
    retSetting.forEach(leg => {

      // Save the Offsets for inserting the contour of the plinth panels
      const PosXOffset = leg.PosXOffset(m);
      const PosYOffset = leg.PosYOffset(m);	

      if (leg.MatrixPositionType == 11) {
        retPlinthArea.LineBack = PosYOffset;
        retPlinthArea.LineLeft = PosXOffset;
      }
      else if (leg.MatrixPositionType == 33) {
        retPlinthArea.LineFront = PosYOffset;
        retPlinthArea.LineRight = PosXOffset;
      }	

      // Return the rotation
      retPlinthArea.Rotation.push(leg.HardwareRotation);

      //---------------Find legs from tab_PlinthAreaMapping-------------

      const retMapping = GlobalFunc.find_PlinthAreaMapping(leg.MatrixPositionType, m.mod_PlinthAreaDesign, m.mod_PlinthAreaElementColor, m.mod_PlinthAreaExtraItem, m.mod_PlinthAreaHeight, m.mod_ShelfbtmThk, ColorRelevant, ExtraItemRelevant);

      //---------------Find data from tab_ObjectMapping (HardwareProcess)-----------

      const retObjectMapping = GlobalFunc.find_ObjectMapping(retMapping.Object!);
      retPlinthArea.ProcessingId.push(retObjectMapping.ProcessingItem!);
      retPlinthArea.HardwareId.push(retObjectMapping.HardwareItem!);

      //---------------Find data from tab_GraphicLibraryMapping-------------

      const retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(retObjectMapping.GraphicItem!);

      //---------------Find data from tab_GraphicLibrary--------------------

      let retGraphicLib: any;
      let Model3DGroupName = "";

      if (retGraphicMapping.length > 0) {
        const item = retGraphicMapping[0];
        Model3DGroupName = item.Model3DGroupName!;
        retGraphicLib = GlobalFunc.find_GraphicLibrary(Model3DGroupName);
      }

      retPlinthArea.Model3DGroupName.push(Model3DGroupName);	
    
      //---------------Find positions from tab_PlinthAreaConstruction-------

      const retConstruction = GlobalFunc.find_PlinthAreaConstruction(leg.BasePoint!,leg.MatrixPositionType!,leg.HardwareRotation!);
      const DimX = retGraphicLib.DimensionX;
      const DimZ = retGraphicLib.DimensionZ;
      const PosX = retConstruction.PosX(m,PosXOffset,DimX,DimZ);
      const PosZ = retConstruction.PosY(m, PosYOffset, DimX, DimZ);
      retPlinthArea.PosX.push(PosX);
      retPlinthArea.PosZ.push(PosZ);

    });	

    // Return statement for the process function
    return retPlinthArea;
  }

	//========================================================================
	// Catch the errors and return an empty object
	//========================================================================

	catch (err: any) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 30002',1)
    logError(ErrorMessage.Message(err?.message ?? err));
    
    return emptyResult;
  }
}


// User exit for calculation of special legs
static ue_PlinthAreaSingleLeg(m: any, input: any, leg: ICT_tab_PlinthAreaSettings) {

  // Interface and Object
  interface PlinthAreaResult {
    Rotation: number[];
    PosX: number[];
    PosZ: number[];
    ProcessingId: string[];
    Model3DGroupName: string[];
    HardwareId: string[];
    LineLeft: number;
    LineRight: number;
    LineFront: number;
    LineBack: number;
  }

  // Receive the object from the process function
  let retPlinthArea: PlinthAreaResult = input;

  // Initialize variables
  const ColorRelevant = m.mod_PlinthAreaDesign_matrix.PlinthAreaElementColor === 'Attribute';
  const ExtraItemRelevant = m.mod_PlinthAreaDesign_matrix.PlinthAreaExtraItem === 'Attribute';

  //========================================================================
  // Try to calculate the leg data and add to the object
  //========================================================================

  try {

    // Save the Offsets for inserting the contour of the plinth panels
    const PosXOffset = leg.PosXOffset(m);
    const PosYOffset = leg.PosYOffset(m);

    if (leg.MatrixPositionType == 11) {
      retPlinthArea.LineBack = PosYOffset;
      retPlinthArea.LineLeft = PosXOffset;
    }
    else if (leg.MatrixPositionType == 33) {
      retPlinthArea.LineFront = PosYOffset;
      retPlinthArea.LineRight = PosXOffset;
    }

    // Return the rotation
    retPlinthArea.Rotation.push(leg.HardwareRotation);

    //---------------Find legs from tab_PlinthAreaMapping-------------

    const retMapping = GlobalFunc.find_PlinthAreaMapping(leg.MatrixPositionType, m.mod_PlinthAreaDesign, m.mod_PlinthAreaElementColor, m.mod_PlinthAreaExtraItem, m.mod_PlinthAreaHeight, m.mod_ShelfbtmThk, ColorRelevant, ExtraItemRelevant);

    //---------------Find data from tab_ObjectMapping (HardwareProcess)-----------

    const retObjectMapping = GlobalFunc.find_ObjectMapping(retMapping.Object!);
    retPlinthArea.ProcessingId.push(retObjectMapping.ProcessingItem!);
    retPlinthArea.HardwareId.push(retObjectMapping.HardwareItem!);

    //---------------Find data from tab_GraphicLibraryMapping-------------

    const retGraphicMapping = GlobalFunc.find_GraphicLibraryMapping(retObjectMapping.GraphicItem!);

    //---------------Find data from tab_GraphicLibrary--------------------

    let retGraphicLib: any;
    let Model3DGroupName = "";

    if (retGraphicMapping.length > 0) {
      const item = retGraphicMapping[0];
      Model3DGroupName = item.Model3DGroupName!;
      retGraphicLib = GlobalFunc.find_GraphicLibrary(Model3DGroupName);
    }

    retPlinthArea.Model3DGroupName.push(Model3DGroupName);

    //---------------Find positions from tab_PlinthAreaConstruction-------

    const retConstruction = GlobalFunc.find_PlinthAreaConstruction(leg.BasePoint!, leg.MatrixPositionType!, leg.HardwareRotation!);
    const DimX = retGraphicLib.DimensionX;
    const DimZ = retGraphicLib.DimensionZ;
    const PosX = retConstruction.PosX(m, PosXOffset, DimX, DimZ);
    const PosZ = retConstruction.PosY(m, PosYOffset, DimX, DimZ);
    retPlinthArea.PosX.push(PosX);
    retPlinthArea.PosZ.push(PosZ);
  }

  //========================================================================
  // Catch the errors and return the initial object
  //========================================================================

  catch (err: any) {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 30003',1)
		logError(ErrorMessage.Message(err?.message ?? err));
  }
}


// Add materials to carcase parts
static process_AddMaterialCarcase(
  Part: any,
  Module: any,
  Category: string,
  Shape: boolean = false,
  SecondColor: boolean = false,
  InsideDirection: string = 'None',
  DrawerShelfColor: string = 'None',
  DrawerShelfGrainId: string = 'NoGrain'
) {

  // Initialize variables, interfaces and types
  //---------------------------------------------------------------------

  type grain = 'Lengthwise' | 'Crosswise' | 'None';

  interface MaterialIds {
    MainMaterialId: string;
    OutsideMaterialId: string;
    EdgeMaterialId: string;
    FrontEdgeMaterialId: string;
  }

  try {

    // sidepanels
    //---------------------------------------------------------------------

    if (Category == 'sidepanel') {

      // Get the material id's
      const {
        MainMaterialId,
        OutsideMaterialId,
        EdgeMaterialId,
        FrontEdgeMaterialId
      } = getMaterialIds(Module.mod_CarcaseColor, Module.mod_CarcaseOutsideColor, Module.mod_CarcaseColor, Module.mod_CarcaseEdgeFrontColor, SecondColor);

      // Define the rotation of the texture
      const GrainDirection: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseProgram_matrix.GrainGroupId, Module.mod_CarcaseColor_matrix.GrainGroupId);
      let InsideRotation = 90;
      let OutsideRotation = 90;
      if (GrainDirection == 'Crosswise') {
        InsideRotation = 0;
      }
      if (SecondColor) {
        const GrainDirectionOutside: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseOutsideProgram_matrix.GrainGroupId, Module.mod_CarcaseOutsideColor_matrix.GrainGroupId);
        if (GrainDirectionOutside == 'Crosswise') {
          OutsideRotation = 0;
        }
      }
      else {
        OutsideRotation = InsideRotation;
      }

      if (InsideDirection == 'right') {
        if (Shape) {
          const edgeColor = (MainMaterialId === OutsideMaterialId) ? EdgeMaterialId : FrontEdgeMaterialId;
          addShapeColors(MainMaterialId, OutsideMaterialId, edgeColor, Category);
        }
        else {
          addAllColors(OutsideMaterialId, OutsideRotation, MainMaterialId, InsideRotation, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90)
        }
      }
      else if (InsideDirection == 'left') {
        if (Shape) {
          const edgeColor = (MainMaterialId === OutsideMaterialId) ? EdgeMaterialId : FrontEdgeMaterialId;
          addShapeColors(OutsideMaterialId, MainMaterialId, edgeColor, Category)
        }
        else {
          addAllColors(MainMaterialId, InsideRotation, OutsideMaterialId, OutsideRotation, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90)
        }
      }
      else {
        if (Shape) {
          const edgeColor = (MainMaterialId === OutsideMaterialId) ? EdgeMaterialId : FrontEdgeMaterialId;
          addShapeColors(MainMaterialId, MainMaterialId, edgeColor, Category)
        }
        else {
          addAllColors(MainMaterialId, InsideRotation, MainMaterialId, InsideRotation, FrontEdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 90)
        }
      }
    }

    // shelves
    //---------------------------------------------------------------------

    else if (Category === "shelf" || Category === "shelfadj" || Category === "shelfdrawer") {

      // Manage the baseColor for shelves and adjustable shelves (avoid to duplicate this case)
      let baseColor = 'None';
      let edgeFrontColor = 'None';
      let edgeColor = 'None';
      let grainGroupId = 'None';

      switch (Category) {
      case "shelf":
        baseColor = Module.mod_CarcaseColor;
        edgeFrontColor = Module.mod_CarcaseEdgeFrontColor;
        edgeColor = Module.mod_CarcaseColor;
        grainGroupId = Module.mod_CarcaseColor_matrix.GrainGroupId;
        break;

      case "shelfadj":
        baseColor = Module.mod_ShelfadjColor;
        edgeFrontColor = Module.mod_ShelfadjColor;
        edgeColor = Module.mod_ShelfadjColor;
        grainGroupId = Module.mod_CarcaseColor_matrix.GrainGroupId;
        break;

      case "shelfdrawer":
        baseColor = DrawerShelfColor;
        edgeFrontColor = DrawerShelfColor;
        edgeColor = DrawerShelfColor;
        grainGroupId = DrawerShelfGrainId;
        break;

      default:
        logError(`Unknown Category: ${Category}`);
      }
  
      // Get the material id's
      const {
        MainMaterialId,
        OutsideMaterialId,
        EdgeMaterialId,
        FrontEdgeMaterialId
      } = getMaterialIds(baseColor, Module.mod_CarcaseOutsideColor, edgeColor, edgeFrontColor, SecondColor);

      // Define the rotation of the texture
      const GrainDirection: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseProgram_matrix.GrainGroupId, grainGroupId);
      let InsideRotation = 0;
      let OutsideRotation = 0;
      if (GrainDirection == 'Crosswise') {
        InsideRotation = 90;
      }
      if (SecondColor) {
        const GrainDirectionOutside: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseOutsideProgram_matrix.GrainGroupId, Module.mod_CarcaseOutsideColor_matrix.GrainGroupId);
        if (GrainDirectionOutside == 'Crosswise') {
          OutsideRotation = 90;
        }
      }
      else {
        OutsideRotation = InsideRotation;
      }

      if (Shape) {
        addDefaultColor(MainMaterialId);
      }
      else if (InsideDirection == 'none') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, EdgeMaterialId, 0, EdgeMaterialId, 0, MainMaterialId, InsideRotation, MainMaterialId, InsideRotation);
      }
      else if (InsideDirection == 'top') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, FrontEdgeMaterialId, 0, EdgeMaterialId, 0, MainMaterialId, InsideRotation, OutsideMaterialId, OutsideRotation);
      }
      else if (InsideDirection == 'bottom') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, FrontEdgeMaterialId, 0, EdgeMaterialId, 0, OutsideMaterialId, OutsideRotation, MainMaterialId, InsideRotation);
      }
      else {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, FrontEdgeMaterialId, 0, EdgeMaterialId, 0, MainMaterialId, InsideRotation, MainMaterialId, InsideRotation);
      }
    }

    // rails
    //---------------------------------------------------------------------

    else if (Category == 'rail') {

      // Get the material id's
      const {
        MainMaterialId,
        OutsideMaterialId,
        EdgeMaterialId,
        FrontEdgeMaterialId
      } = getMaterialIds(Module.mod_CarcaseColor);

      // Define the rotation of the texture
      const GrainDirection: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseProgram_matrix.GrainGroupId, Module.mod_CarcaseColor_matrix.GrainGroupId);
      let InsideRotation = 0;
      let OutsideRotation = 0;
      if (GrainDirection == 'Crosswise') {
        InsideRotation = 90;
      }
      if (SecondColor) {
        const GrainDirectionOutside: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseOutsideProgram_matrix.GrainGroupId, Module.mod_CarcaseOutsideColor_matrix.GrainGroupId);
        if (GrainDirectionOutside == 'Crosswise') {
          OutsideRotation = 90;
        }
      }
      else {
        OutsideRotation = InsideRotation;
      }

      if (Shape) {
        addDefaultColor(MainMaterialId);
      }
      else if (InsideDirection == 'none') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, InsideRotation, MainMaterialId, InsideRotation, EdgeMaterialId, 0, EdgeMaterialId, 0);
      }
      else if (InsideDirection == 'front') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, InsideRotation, OutsideMaterialId, OutsideRotation, EdgeMaterialId, 0, EdgeMaterialId, 0);
      }
      else if (InsideDirection == 'back') {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, OutsideMaterialId, OutsideRotation, MainMaterialId, InsideRotation, EdgeMaterialId, 0, EdgeMaterialId, 0);
      }
      else {
        addAllColors(EdgeMaterialId, 90, EdgeMaterialId, 90, MainMaterialId, InsideRotation, MainMaterialId, InsideRotation, EdgeMaterialId, 0, EdgeMaterialId, 0);
      }
    }

    // backwalls
    //---------------------------------------------------------------------

    if (Category == 'backwall' || Category == 'backwalldrawer') {

      // Manage the baseColor for shelves and adjustable shelves (avoid to duplicate this case)
      let baseColor = 'None';
      let edgeFrontColor = 'None';
      let edgeColor = 'None';
      let grainGroupId = 'None';
      let programGroupId = 'None';

      switch (Category) {
      case "backwall":
        baseColor = Module.mod_CarcaseBackwallColor;
        edgeFrontColor = Module.mod_CarcaseBackwallColor;
        edgeColor = Module.mod_CarcaseBackwallColor;
        grainGroupId = Module.mod_CarcaseBackwallColor_matrix.GrainGroupId;
        programGroupId = Module.mod_CarcaseBackwallProgram_matrix.GrainGroupId;
        break;

      case "backwalldrawer":
        baseColor = DrawerShelfColor;
        edgeFrontColor = DrawerShelfColor;
        edgeColor = DrawerShelfColor;
        grainGroupId = DrawerShelfGrainId;
        programGroupId = Module.mod_CarcaseProgram_matrix.GrainGroupId;
        break;

      default:
        logError(`Unknown Category: ${Category}`);
      }

      // Get the material id's
      const {
        MainMaterialId,
        OutsideMaterialId,
        EdgeMaterialId,
        FrontEdgeMaterialId
      } = getMaterialIds(baseColor, Module.mod_CarcaseOutsideColor, edgeColor, edgeFrontColor, SecondColor);

      // Define the rotation of the texture
      const GrainDirection: grain = getGrainDirection(Module.mod_TypeElement, programGroupId, grainGroupId);
      let InsideRotation = 90;
      let OutsideRotation = 90;
      if (GrainDirection == 'Crosswise') {
        InsideRotation = 0;
      }
      if (SecondColor) {
        const GrainDirectionOutside: grain = getGrainDirection(Module.mod_TypeElement, Module.mod_CarcaseOutsideProgram_matrix.GrainGroupId, Module.mod_CarcaseOutsideColor_matrix.GrainGroupId);
        if (GrainDirectionOutside == 'Crosswise') {
          OutsideRotation = 0;
        }
      }
      else {
        OutsideRotation = InsideRotation;
      }

      if (Shape) {
        addDefaultColor(MainMaterialId);
      }
      else {
        addAllColors(MainMaterialId, 0, MainMaterialId, 0, MainMaterialId, InsideRotation, OutsideMaterialId, OutsideRotation, MainMaterialId, 90, OutsideMaterialId, 90)
      }
    }
  }

  // Error handling
  //---------------------------------------------------------------------
  catch (error: any) {
    logError("Can not create the materials and show it for part: " + Category);
  }

  //=====================================================================
  // Functions to add the materials
  //=====================================================================

  // We got all the colors on each side
  //---------------------------------------------------------------------

  function addAllColors(left: string, rotLeft: number, right: string, rotRight: number, front: string, rotFront: number, back: string, rotBack: number, top: string, rotTop: number, bottom: string, rotBot: number) {
    Part.addFaceMaterial(left, FaceKey.Left, rotLeft, 0, 0, 1, 1);
    Part.addFaceMaterial(right, FaceKey.Right, rotRight, 0, 0, 1, 1);
    Part.addFaceMaterial(front, FaceKey.Front, rotFront, 0, 0, 1, 1);
    Part.addFaceMaterial(back, FaceKey.Back, rotBack, 0, 0, 1, 1);
    Part.addFaceMaterial(top, FaceKey.Top, rotTop, 0, 0, 1, 1);
    Part.addFaceMaterial(bottom, FaceKey.Bottom, rotBot, 0, 0, 1, 1);
  }

  // Add material to shape parts
  //---------------------------------------------------------------------

  function addShapeColors(color1: string, color2: string, side: string, category: string) {
    if (category == 'sidepanel') {
      Part.addFaceMaterial(color1, FaceKey.Top, 90, 0, 0, 1, 1);
      Part.addFaceMaterial(color2, FaceKey.Bottom, 90, 0, 0, 1, 1);
      Part.addFaceMaterial(side, FaceKey.Side, 0, 0, 0, 1, 1);
    }
    else if (category == 'fingergrip') {
      Part.addFaceMaterial(color1, FaceKey.Top, 0, 0, 0, 1, 1);
      Part.addFaceMaterial(color2, FaceKey.Bottom, 0, 0, 0, 1, 1);
      Part.addFaceMaterial(side, FaceKey.Side, 90, 0, 0, 1, 1);
    }
    else if (category == 'frameFrontVert') {
      Part.addFaceMaterial(color1, FaceKey.Top, 90, 0, 0, 1, 1);
      Part.addFaceMaterial(color2, FaceKey.Bottom, 90, 0, 0, 1, 1);
      Part.addFaceMaterial(side, FaceKey.Side, 0, 0, 0, 1, 1);
    }
    else if (category == 'frameFrontHor') {
      Part.addFaceMaterial(side, FaceKey.Top, 0, 0, 0, 1, 1);
      Part.addFaceMaterial(side, FaceKey.Bottom, 0, 0, 0, 1, 1);
      Part.addFaceMaterial(side, FaceKey.Side, 0, 0, 0, 1, 1);
    }
  }

  // Add material default only one color
  //---------------------------------------------------------------------

  function addDefaultColor(color: string) {
    Part.addFaceMaterial(color, FaceKey.Default, 0, 0, 0, 1, 1)
  }

  //=====================================================================
  // Get the grain direction
  //=====================================================================

  // Get the grain direction
  function getGrainDirection(typeElement: string, programGrainGroup: string, colorGrainGroup: string): grain {

    // Get the BomArticleGroup
    const PartSettings = GlobalFunc.find_PartSettings(Part._partId, Part.pa_AdditionalInfo1, false);
    const bomArticleGroup = PartSettings?.BomArticleGroup ?? 'None';

    // BomArticleGroup which is using the table GrainDirectionSettings
    const validGroups = ['Carcase', 'Toekick', 'Countertop'];

    // Get the grain direction candidate
    let GrainDirectionCandidate = 'None';
    if (validGroups.includes(bomArticleGroup)) {
      const GrainDirectionSettings = GlobalFunc.find_GrainDirectionSettings(Part._partId, typeElement, programGrainGroup, colorGrainGroup, Part._width, Part._depth);
      GrainDirectionCandidate = Module.mod_GrainLogic === 'Library' && GrainDirectionSettings.GrainDirection ? GrainDirectionSettings.GrainDirection : 'None';
    }
    else if (bomArticleGroup == 'Fitting') {
      GrainDirectionCandidate = 'None';
    }
    else {
      GrainDirectionCandidate = 'None';
    }

    // Check, we must have a valid grain direction
    if (isValidGrain(GrainDirectionCandidate)) {
      return GrainDirectionCandidate;
    }
    else {
      logError(`Invalid grain direction "${GrainDirectionCandidate}" found for part ${Part._partId}`);
      return 'None';
    }
  }

  // Check if grain direction is valid
  function isValidGrain(value: any): value is grain {
    return ['Lengthwise', 'Crosswise', 'None'].includes(value);
  }

  //=====================================================================
  // Get the material id's
  //=====================================================================

  function getMaterialIds(mainColor: string, outsideColor: string = 'None', mainEdgeColor: string = 'None', frontEdgeColor: string = 'None', secondColor: boolean = false): MaterialIds {
    const MainMaterialId = GlobalFunc.find_MaterialMapping(mainColor)?.MaterialId ?? 'None';

    const EdgeMaterialId = mainEdgeColor !== 'None'
      ? GlobalFunc.find_MaterialMapping(mainEdgeColor)?.MaterialId ?? 'None'
      : MainMaterialId;

    const FrontEdgeMaterialId = frontEdgeColor !== 'None'
      ? GlobalFunc.find_MaterialMapping(frontEdgeColor)?.MaterialId ?? 'None'
      : MainMaterialId;

    const OutsideMaterialId = secondColor
      ? GlobalFunc.find_MaterialMapping(outsideColor)?.MaterialId ?? 'None'
      : MainMaterialId;

    return {
      MainMaterialId,
      OutsideMaterialId,
      EdgeMaterialId,
      FrontEdgeMaterialId
    };
  }


}


// Find FrontPanelConstruction\n//#########################################################
static find_FrontPanelConstruction(PartGroup: string,ConstructionId: string, GrainGroupId: string): ICT_tab_FrontPanelConstruction {

  // Wildcard parameters
  let WildcardParams: any = {
    in_PartGroup: PartGroup
  };

  // Fixed parameters
  let FixedParams: any = {
    in_FrontConstruction: ConstructionId,
    in_GrainGroupId: GrainGroupId
  };

  // Range parameters
  let RangeParams: any = {};

  // Return multiple rows or a single row (UniqueOutput = true returns a single row)
  let UniqueOutput = true;

  // Call the function and retrieve the value
  let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_FrontPanelConstruction, WildcardParams, FixedParams, RangeParams, UniqueOutput);
  if (retVal == undefined) {
    let Text = PartGroup + ' - ' + ConstructionId + ' - ' + GrainGroupId;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14035', 1);
    logError(ErrorMessage.Message(Text));
  }

  // Return the value
  return retVal;

}


// Find PanelWoodFrameConstruction\n//#########################################################
static find_PanelWoodFrameConstruction(PartGroup: string,ConstructionId: string, FrontGrain: string, FillingGrain: string): ICT_tab_PanelWoodFrameConstruction {

  // Wildcard parameters
  let WildcardParams: any = {
    in_PartGroup: PartGroup
  };

  // Fixed parameters
  let FixedParams: any = {
    in_FrontConstructionId: ConstructionId,
    in_FrontColorGrainGroupId: FrontGrain,
    in_FillingColorGrainGroupIdd: FillingGrain
  };

  // Range parameters
  let RangeParams: any = {};

  // Return multiple rows or a single row (UniqueOutput = true returns a single row)
  let UniqueOutput = true;

  // Call the function and retrieve the value
  let retVal = GlobalFunc.process_BasicTableQuery(ct_tab_GrainDirectionSettings, WildcardParams, FixedParams, RangeParams, UniqueOutput);
  if (retVal == undefined) {
    let Text = PartGroup + ' - ' + ConstructionId + ' - ' + FrontGrain + ' - ' + FillingGrain;
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 14036', 1);
    logError(ErrorMessage.Message(Text));
  }

  // Return the value
  return retVal;

}


  // ###############################################################
  // ################### END CUSTOM SCRIPTS ########################
  // ###############################################################
}
