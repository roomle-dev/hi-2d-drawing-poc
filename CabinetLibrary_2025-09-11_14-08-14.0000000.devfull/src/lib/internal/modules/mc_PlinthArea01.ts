import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
import { ct_tab_ApplianceGraphicLibrary, ICT_tab_ApplianceGraphicLibrary, ct2_tab_ApplianceGraphicLibrary} from '../custom-tables/tab_ApplianceGraphicLibrary'
import { ct_tab_BoardLibrary, ICT_tab_BoardLibrary, ct2_tab_BoardLibrary} from '../custom-tables/tab_BoardLibrary'
import { ct_tab_BoardMapping, ICT_tab_BoardMapping, ct2_tab_BoardMapping} from '../custom-tables/tab_BoardMapping'
import { ct_tab_BracketConstruction, ICT_tab_BracketConstruction, ct2_tab_BracketConstruction} from '../custom-tables/tab_BracketConstruction'
import { ct_tab_BracketMapping, ICT_tab_BracketMapping, ct2_tab_BracketMapping} from '../custom-tables/tab_BracketMapping'
import { ct_tab_CarcaseBackwallConstruction, ICT_tab_CarcaseBackwallConstruction, ct2_tab_CarcaseBackwallConstruction} from '../custom-tables/tab_CarcaseBackwallConstruction'
import { ct_tab_CarcaseBackwallSettings, ICT_tab_CarcaseBackwallSettings, ct2_tab_CarcaseBackwallSettings} from '../custom-tables/tab_CarcaseBackwallSettings'
import { ct_tab_CarcaseCornerunitConstruction, ICT_tab_CarcaseCornerunitConstruction, ct2_tab_CarcaseCornerunitConstruction} from '../custom-tables/tab_CarcaseCornerunitConstruction'
import { ct_tab_CarcasePartConnectionCalculations, ICT_tab_CarcasePartConnectionCalculations, ct2_tab_CarcasePartConnectionCalculations} from '../custom-tables/tab_CarcasePartConnectionCalculations'
import { ct_tab_CarcasePartConnectionMapping, ICT_tab_CarcasePartConnectionMapping, ct2_tab_CarcasePartConnectionMapping} from '../custom-tables/tab_CarcasePartConnectionMapping'
import { ct_tab_CarcasePartGrainDirectionSettings, ICT_tab_CarcasePartGrainDirectionSettings, ct2_tab_CarcasePartGrainDirectionSettings} from '../custom-tables/tab_CarcasePartGrainDirectionSettings'
import { ct_tab_CarcasePartsShape, ICT_tab_CarcasePartsShape, ct2_tab_CarcasePartsShape} from '../custom-tables/tab_CarcasePartsShape'
import { ct_tab_CarcaseShelfbtmSettings, ICT_tab_CarcaseShelfbtmSettings, ct2_tab_CarcaseShelfbtmSettings} from '../custom-tables/tab_CarcaseShelfbtmSettings'
import { ct_tab_CarcaseShelftopSettings, ICT_tab_CarcaseShelftopSettings, ct2_tab_CarcaseShelftopSettings} from '../custom-tables/tab_CarcaseShelftopSettings'
import { ct_tab_CarcaseSidepanelSettings, ICT_tab_CarcaseSidepanelSettings, ct2_tab_CarcaseSidepanelSettings} from '../custom-tables/tab_CarcaseSidepanelSettings'
import { ct_tab_CarcaseSlopedCeilingDimension, ICT_tab_CarcaseSlopedCeilingDimension, ct2_tab_CarcaseSlopedCeilingDimension} from '../custom-tables/tab_CarcaseSlopedCeilingDimension'
import { ct_tab_CarcaseStorageunitConstruction, ICT_tab_CarcaseStorageunitConstruction, ct2_tab_CarcaseStorageunitConstruction} from '../custom-tables/tab_CarcaseStorageunitConstruction'
import { ct_tab_CornerunitStraightConstruction, ICT_tab_CornerunitStraightConstruction, ct2_tab_CornerunitStraightConstruction} from '../custom-tables/tab_CornerunitStraightConstruction'
import { ct_tab_DishwasherConstruction, ICT_tab_DishwasherConstruction, ct2_tab_DishwasherConstruction} from '../custom-tables/tab_DishwasherConstruction'
import { ct_tab_DishwasherMapping, ICT_tab_DishwasherMapping, ct2_tab_DishwasherMapping} from '../custom-tables/tab_DishwasherMapping'
import { ct_tab_DoorSettings, ICT_tab_DoorSettings, ct2_tab_DoorSettings} from '../custom-tables/tab_DoorSettings'
import { ct_tab_DrawerBoxColorMapping, ICT_tab_DrawerBoxColorMapping, ct2_tab_DrawerBoxColorMapping} from '../custom-tables/tab_DrawerBoxColorMapping'
import { ct_tab_DrawerBoxConstruction, ICT_tab_DrawerBoxConstruction, ct2_tab_DrawerBoxConstruction} from '../custom-tables/tab_DrawerBoxConstruction'
import { ct_tab_DrawerBoxDimensionMapping, ICT_tab_DrawerBoxDimensionMapping, ct2_tab_DrawerBoxDimensionMapping} from '../custom-tables/tab_DrawerBoxDimensionMapping'
import { ct_tab_DrawerBoxExtraItemSettings, ICT_tab_DrawerBoxExtraItemSettings, ct2_tab_DrawerBoxExtraItemSettings} from '../custom-tables/tab_DrawerBoxExtraItemSettings'
import { ct_tab_DrawerBoxInsertionSettings, ICT_tab_DrawerBoxInsertionSettings, ct2_tab_DrawerBoxInsertionSettings} from '../custom-tables/tab_DrawerBoxInsertionSettings'
import { ct_tab_DrawerBoxMapping, ICT_tab_DrawerBoxMapping, ct2_tab_DrawerBoxMapping} from '../custom-tables/tab_DrawerBoxMapping'
import { ct_tab_DrawerBoxWeightTypeSettings, ICT_tab_DrawerBoxWeightTypeSettings, ct2_tab_DrawerBoxWeightTypeSettings} from '../custom-tables/tab_DrawerBoxWeightTypeSettings'
import { ct_tab_DuststripMapping, ICT_tab_DuststripMapping, ct2_tab_DuststripMapping} from '../custom-tables/tab_DuststripMapping'
import { ct_tab_EdgeClassSettings, ICT_tab_EdgeClassSettings, ct2_tab_EdgeClassSettings} from '../custom-tables/tab_EdgeClassSettings'
import { ct_tab_EdgeFrameSettings, ICT_tab_EdgeFrameSettings, ct2_tab_EdgeFrameSettings} from '../custom-tables/tab_EdgeFrameSettings'
import { ct_tab_EdgeJointMapping, ICT_tab_EdgeJointMapping, ct2_tab_EdgeJointMapping} from '../custom-tables/tab_EdgeJointMapping'
import { ct_tab_EdgeJointSettings, ICT_tab_EdgeJointSettings, ct2_tab_EdgeJointSettings} from '../custom-tables/tab_EdgeJointSettings'
import { ct_tab_EdgeLibrary, ICT_tab_EdgeLibrary, ct2_tab_EdgeLibrary} from '../custom-tables/tab_EdgeLibrary'
import { ct_tab_EdgeMapping, ICT_tab_EdgeMapping, ct2_tab_EdgeMapping} from '../custom-tables/tab_EdgeMapping'
import { ct_tab_EdgeNumberSettings, ICT_tab_EdgeNumberSettings, ct2_tab_EdgeNumberSettings} from '../custom-tables/tab_EdgeNumberSettings'
import { ct_tab_EdgeSettings, ICT_tab_EdgeSettings, ct2_tab_EdgeSettings} from '../custom-tables/tab_EdgeSettings'
import { ct_tab_ErrorList, ICT_tab_ErrorList, ct2_tab_ErrorList} from '../custom-tables/tab_ErrorList'
import { ct_tab_FillerHardwareSettings, ICT_tab_FillerHardwareSettings, ct2_tab_FillerHardwareSettings} from '../custom-tables/tab_FillerHardwareSettings'
import { ct_tab_FillerSettings, ICT_tab_FillerSettings, ct2_tab_FillerSettings} from '../custom-tables/tab_FillerSettings'
import { ct_tab_FlipliftColorMapping, ICT_tab_FlipliftColorMapping, ct2_tab_FlipliftColorMapping} from '../custom-tables/tab_FlipliftColorMapping'
import { ct_tab_FlipliftConstruction, ICT_tab_FlipliftConstruction, ct2_tab_FlipliftConstruction} from '../custom-tables/tab_FlipliftConstruction'
import { ct_tab_FlipliftMapping, ICT_tab_FlipliftMapping, ct2_tab_FlipliftMapping} from '../custom-tables/tab_FlipliftMapping'
import { ct_tab_FlipliftSettings, ICT_tab_FlipliftSettings, ct2_tab_FlipliftSettings} from '../custom-tables/tab_FlipliftSettings'
import { ct_tab_FlipliftWeightTypeMapping, ICT_tab_FlipliftWeightTypeMapping, ct2_tab_FlipliftWeightTypeMapping} from '../custom-tables/tab_FlipliftWeightTypeMapping'
import { ct_tab_FramePartConnectionMapping, ICT_tab_FramePartConnectionMapping, ct2_tab_FramePartConnectionMapping} from '../custom-tables/tab_FramePartConnectionMapping'
import { ct_tab_FridgeConstruction, ICT_tab_FridgeConstruction, ct2_tab_FridgeConstruction} from '../custom-tables/tab_FridgeConstruction'
import { ct_tab_FridgeMapping, ICT_tab_FridgeMapping, ct2_tab_FridgeMapping} from '../custom-tables/tab_FridgeMapping'
import { ct_tab_FrontConstruction, ICT_tab_FrontConstruction, ct2_tab_FrontConstruction} from '../custom-tables/tab_FrontConstruction'
import { ct_tab_FrontEdgeColorMapping, ICT_tab_FrontEdgeColorMapping, ct2_tab_FrontEdgeColorMapping} from '../custom-tables/tab_FrontEdgeColorMapping'
import { ct_tab_FrontPanelConstruction, ICT_tab_FrontPanelConstruction, ct2_tab_FrontPanelConstruction} from '../custom-tables/tab_FrontPanelConstruction'
import { ct_tab_FrontPartGrainDirectionSettings, ICT_tab_FrontPartGrainDirectionSettings, ct2_tab_FrontPartGrainDirectionSettings} from '../custom-tables/tab_FrontPartGrainDirectionSettings'
import { ct_tab_GrainDirectionSettings, ICT_tab_GrainDirectionSettings, ct2_tab_GrainDirectionSettings} from '../custom-tables/tab_GrainDirectionSettings'
import { ct_tab_GrainSettings, ICT_tab_GrainSettings, ct2_tab_GrainSettings} from '../custom-tables/tab_GrainSettings'
import { ct_tab_GraphicFileLibrary, ICT_tab_GraphicFileLibrary, ct2_tab_GraphicFileLibrary} from '../custom-tables/tab_GraphicFileLibrary'
import { ct_tab_GraphicLibrary, ICT_tab_GraphicLibrary, ct2_tab_GraphicLibrary} from '../custom-tables/tab_GraphicLibrary'
import { ct_tab_GraphicLibraryMapping, ICT_tab_GraphicLibraryMapping, ct2_tab_GraphicLibraryMapping} from '../custom-tables/tab_GraphicLibraryMapping'
import { ct_tab_HandleConstruction, ICT_tab_HandleConstruction, ct2_tab_HandleConstruction} from '../custom-tables/tab_HandleConstruction'
import { ct_tab_HandleLengthMapping, ICT_tab_HandleLengthMapping, ct2_tab_HandleLengthMapping} from '../custom-tables/tab_HandleLengthMapping'
import { ct_tab_HandleMapping, ICT_tab_HandleMapping, ct2_tab_HandleMapping} from '../custom-tables/tab_HandleMapping'
import { ct_tab_HandleSettings, ICT_tab_HandleSettings, ct2_tab_HandleSettings} from '../custom-tables/tab_HandleSettings'
import { ct_tab_HangerMapping, ICT_tab_HangerMapping, ct2_tab_HangerMapping} from '../custom-tables/tab_HangerMapping'
import { ct_tab_HangerSettings, ICT_tab_HangerSettings, ct2_tab_HangerSettings} from '../custom-tables/tab_HangerSettings'
import { ct_tab_HardwareDrillHorLibrary, ICT_tab_HardwareDrillHorLibrary, ct2_tab_HardwareDrillHorLibrary} from '../custom-tables/tab_HardwareDrillHorLibrary'
import { ct_tab_HardwareDrillVertLibrary, ICT_tab_HardwareDrillVertLibrary, ct2_tab_HardwareDrillVertLibrary} from '../custom-tables/tab_HardwareDrillVertLibrary'
import { ct_tab_HardwareLibrary, ICT_tab_HardwareLibrary, ct2_tab_HardwareLibrary} from '../custom-tables/tab_HardwareLibrary'
import { ct_tab_HardwareLibraryMapping, ICT_tab_HardwareLibraryMapping, ct2_tab_HardwareLibraryMapping} from '../custom-tables/tab_HardwareLibraryMapping'
import { ct_tab_HardwareMillingLibrary, ICT_tab_HardwareMillingLibrary, ct2_tab_HardwareMillingLibrary} from '../custom-tables/tab_HardwareMillingLibrary'
import { ct_tab_HardwareSettings, ICT_tab_HardwareSettings, ct2_tab_HardwareSettings} from '../custom-tables/tab_HardwareSettings'
import { ct_tab_HingeConstruction, ICT_tab_HingeConstruction, ct2_tab_HingeConstruction} from '../custom-tables/tab_HingeConstruction'
import { ct_tab_HingeDrillingDistance, ICT_tab_HingeDrillingDistance, ct2_tab_HingeDrillingDistance} from '../custom-tables/tab_HingeDrillingDistance'
import { ct_tab_HingeMapping, ICT_tab_HingeMapping, ct2_tab_HingeMapping} from '../custom-tables/tab_HingeMapping'
import { ct_tab_HingePosition, ICT_tab_HingePosition, ct2_tab_HingePosition} from '../custom-tables/tab_HingePosition'
import { ct_tab_HingeSettings, ICT_tab_HingeSettings, ct2_tab_HingeSettings} from '../custom-tables/tab_HingeSettings'
import { ct_tab_HobConstruction, ICT_tab_HobConstruction, ct2_tab_HobConstruction} from '../custom-tables/tab_HobConstruction'
import { ct_tab_HobMapping, ICT_tab_HobMapping, ct2_tab_HobMapping} from '../custom-tables/tab_HobMapping'
import { ct_tab_HoodMapping, ICT_tab_HoodMapping, ct2_tab_HoodMapping} from '../custom-tables/tab_HoodMapping'
import { ct_tab_MaterialMapping, ICT_tab_MaterialMapping, ct2_tab_MaterialMapping} from '../custom-tables/tab_MaterialMapping'
import { ct_tab_ObjectMapping, ICT_tab_ObjectMapping, ct2_tab_ObjectMapping} from '../custom-tables/tab_ObjectMapping'
import { ct_tab_OvenConstruction, ICT_tab_OvenConstruction, ct2_tab_OvenConstruction} from '../custom-tables/tab_OvenConstruction'
import { ct_tab_OvenMapping, ICT_tab_OvenMapping, ct2_tab_OvenMapping} from '../custom-tables/tab_OvenMapping'
import { ct_tab_PanelWoodFrameConstruction, ICT_tab_PanelWoodFrameConstruction, ct2_tab_PanelWoodFrameConstruction} from '../custom-tables/tab_PanelWoodFrameConstruction'
import { ct_tab_PartConnectionSettings, ICT_tab_PartConnectionSettings, ct2_tab_PartConnectionSettings} from '../custom-tables/tab_PartConnectionSettings'
import { ct_tab_PartOverdimensionSettings, ICT_tab_PartOverdimensionSettings, ct2_tab_PartOverdimensionSettings} from '../custom-tables/tab_PartOverdimensionSettings'
import { ct_tab_PartSettings, ICT_tab_PartSettings, ct2_tab_PartSettings} from '../custom-tables/tab_PartSettings'
import { ct_tab_PartsGraphicRotation, ICT_tab_PartsGraphicRotation, ct2_tab_PartsGraphicRotation} from '../custom-tables/tab_PartsGraphicRotation'
import { ct_tab_PlinthAreaConstruction, ICT_tab_PlinthAreaConstruction, ct2_tab_PlinthAreaConstruction} from '../custom-tables/tab_PlinthAreaConstruction'
import { ct_tab_PlinthAreaMapping, ICT_tab_PlinthAreaMapping, ct2_tab_PlinthAreaMapping} from '../custom-tables/tab_PlinthAreaMapping'
import { ct_tab_PlinthAreaSettings, ICT_tab_PlinthAreaSettings, ct2_tab_PlinthAreaSettings} from '../custom-tables/tab_PlinthAreaSettings'
import { ct_tab_ProcessingMapping, ICT_tab_ProcessingMapping, ct2_tab_ProcessingMapping} from '../custom-tables/tab_ProcessingMapping'
import { ct_tab_PullOutElementColorMapping, ICT_tab_PullOutElementColorMapping, ct2_tab_PullOutElementColorMapping} from '../custom-tables/tab_PullOutElementColorMapping'
import { ct_tab_PullOutHardwareInsertionSettings, ICT_tab_PullOutHardwareInsertionSettings, ct2_tab_PullOutHardwareInsertionSettings} from '../custom-tables/tab_PullOutHardwareInsertionSettings'
import { ct_tab_PullOutMapping, ICT_tab_PullOutMapping, ct2_tab_PullOutMapping} from '../custom-tables/tab_PullOutMapping'
import { ct_tab_PullOutSettings, ICT_tab_PullOutSettings, ct2_tab_PullOutSettings} from '../custom-tables/tab_PullOutSettings'
import { ct_tab_PushtoopenMapping, ICT_tab_PushtoopenMapping, ct2_tab_PushtoopenMapping} from '../custom-tables/tab_PushtoopenMapping'
import { ct_tab_PushtoopenSettings, ICT_tab_PushtoopenSettings, ct2_tab_PushtoopenSettings} from '../custom-tables/tab_PushtoopenSettings'
import { ct_tab_SawingAngleLibrary, ICT_tab_SawingAngleLibrary, ct2_tab_SawingAngleLibrary} from '../custom-tables/tab_SawingAngleLibrary'
import { ct_tab_SawingVertLibrary, ICT_tab_SawingVertLibrary, ct2_tab_SawingVertLibrary} from '../custom-tables/tab_SawingVertLibrary'
import { ct_tab_ShelfadjDrillSettings, ICT_tab_ShelfadjDrillSettings, ct2_tab_ShelfadjDrillSettings} from '../custom-tables/tab_ShelfadjDrillSettings'
import { ct_tab_ShelfadjQtyPosSettings, ICT_tab_ShelfadjQtyPosSettings, ct2_tab_ShelfadjQtyPosSettings} from '../custom-tables/tab_ShelfadjQtyPosSettings'
import { ct_tab_ShelfadjSettings, ICT_tab_ShelfadjSettings, ct2_tab_ShelfadjSettings} from '../custom-tables/tab_ShelfadjSettings'
import { ct_tab_SinkConstruction, ICT_tab_SinkConstruction, ct2_tab_SinkConstruction} from '../custom-tables/tab_SinkConstruction'
import { ct_tab_SinkMapping, ICT_tab_SinkMapping, ct2_tab_SinkMapping} from '../custom-tables/tab_SinkMapping'
import { ct_tab_SlopedCeilingSettings, ICT_tab_SlopedCeilingSettings, ct2_tab_SlopedCeilingSettings} from '../custom-tables/tab_SlopedCeilingSettings'
 
import { OD_Base, PartGroup, OpenGroup, Matrix4, Vector3, GenerationContour, Contour, GenerationMethod, RoomContour } from '../base'
import { IPartBase, PartBase, _toFloat, _toInt, _toString, _toBoolean, IModBaseProp } from '../mod-base'
import { loadOrderData } from '../loader'
import { GlobalFunc } from '../global-func'
import { IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle } from '../mod-interfaces'
import { OD_M_mc_Leg01, dc_mc_Leg01 } from './mc_Leg01'
import { IModuleNonNull_mc_PlinthArea01,IModParents_mc_PlinthArea01,IPartParentsNonNull_mc_PlinthArea01} from '../mod-interfaces'
import {IModVar_mod_CarcaseDepth,IModVarNonNull_mod_CarcaseDepth,IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseWidth,IModVarNonNull_mod_CarcaseWidth,IModVar_mod_PlinthAreaVisLeft,IModVarNonNull_mod_PlinthAreaVisLeft,IModVar_mod_PlinthAreaVisRight,IModVarNonNull_mod_PlinthAreaVisRight,IModVar_mod_SidepanelleftThk,IModVarNonNull_mod_SidepanelleftThk,IModVar_mod_SidepanelrightThk,IModVarNonNull_mod_SidepanelrightThk,IModVar_mod_CarcaseSidepanelleftOversizeBtm,IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm,IModVar_mod_CarcaseSidepanelrightOversizeBtm,IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm,IModVar_mod_PlinthAreaHeight,IModVarNonNull_mod_PlinthAreaHeight,IModVar_mod_PlinthAreaPosLeftMatrix,IModVarNonNull_mod_PlinthAreaPosLeftMatrix,IModVar_mod_PlinthAreaDesign,IModVarNonNull_mod_PlinthAreaDesign,IModVar_mod_PlinthAreaPosBackMatrix,IModVarNonNull_mod_PlinthAreaPosBackMatrix,IModVar_mod_PlinthAreaPosFrontMatrix,IModVarNonNull_mod_PlinthAreaPosFrontMatrix,IModVar_mod_PlinthAreaPosRightMatrix,IModVarNonNull_mod_PlinthAreaPosRightMatrix,IModVar_mod_PlinthAreaPosLogic,IModVarNonNull_mod_PlinthAreaPosLogic,IModVar_mod_ShelfbtmThk,IModVarNonNull_mod_ShelfbtmThk,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_PlinthAreaElementColor,IModVarNonNull_mod_PlinthAreaElementColor,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_PlinthAreaExtraItem,IModVarNonNull_mod_PlinthAreaExtraItem,IModVar_mod_PlinthAreaPositionInfo,IModVarNonNull_mod_PlinthAreaPositionInfo,IModVar_mod_LegInsertion,IModVarNonNull_mod_LegInsertion,IModVar_mod_Weight,IModVarNonNull_mod_Weight} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseDepth, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseWidth, IMatrix_mod_PlinthAreaVisLeft, IMatrix_mod_PlinthAreaVisRight, IMatrix_mod_SidepanelleftThk, IMatrix_mod_SidepanelrightThk, IMatrix_mod_CarcaseSidepanelleftOversizeBtm, IMatrix_mod_CarcaseSidepanelrightOversizeBtm, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_PlinthAreaPosLeftMatrix, IMatrix_mod_PlinthAreaDesign, IMatrix_mod_PlinthAreaPosBackMatrix, IMatrix_mod_PlinthAreaPosFrontMatrix, IMatrix_mod_PlinthAreaPosRightMatrix, IMatrix_mod_PlinthAreaPosLogic, IMatrix_mod_ShelfbtmThk, IMatrix_mod_TypeElement, IMatrix_mod_PlinthAreaElementColor, IMatrix_mod_ModuleName, IMatrix_mod_PlinthAreaExtraItem, IMatrix_mod_LegInsertion, IMatrix_mod_Weight} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mc_PlinthArea01_createBuildPlan, mc_PlinthArea01_afterDataCompletion, mc_PlinthArea01_manufacturerDataCompletion } from '../../modules/mc_PlinthArea01';

export interface cbp_mc_PlinthArea01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisRight, IModVarNonNull_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaPosLogic, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_PlinthAreaElementColor, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_PlinthAreaExtraItem, IModVarNonNull_mod_PlinthAreaPositionInfo, IModVarNonNull_mod_LegInsertion, IModVarNonNull_mod_Weight {
  parent: IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
  ct_tab_PlinthAreaSettings: ct2_tab_PlinthAreaSettings;
  ct_tab_PlinthAreaConstruction: ct2_tab_PlinthAreaConstruction;
}

export interface dc_mc_PlinthArea01 extends IModBaseProp
, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseId, IModVar_mod_CarcaseWidth, IModVar_mod_PlinthAreaVisLeft, IModVar_mod_PlinthAreaVisRight, IModVar_mod_SidepanelleftThk, IModVar_mod_SidepanelrightThk, IModVar_mod_CarcaseSidepanelleftOversizeBtm, IModVar_mod_CarcaseSidepanelrightOversizeBtm, IModVar_mod_PlinthAreaHeight, IModVar_mod_PlinthAreaPosLeftMatrix, IModVar_mod_PlinthAreaDesign, IModVar_mod_PlinthAreaPosBackMatrix, IModVar_mod_PlinthAreaPosFrontMatrix, IModVar_mod_PlinthAreaPosRightMatrix, IModVar_mod_PlinthAreaPosLogic, IModVar_mod_ShelfbtmThk, IModVar_mod_TypeElement, IModVar_mod_PlinthAreaElementColor, IModVar_mod_ModuleName, IModVar_mod_PlinthAreaExtraItem, IModVar_mod_PlinthAreaPositionInfo, IModVar_mod_LegInsertion, IModVar_mod_Weight {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_PlinthArea01;
  parent: IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle;
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01;
}

export interface adc_mc_PlinthArea01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisRight, IModVarNonNull_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaPosLogic, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_PlinthAreaElementColor, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_PlinthAreaExtraItem, IModVarNonNull_mod_PlinthAreaPositionInfo, IModVarNonNull_mod_LegInsertion, IModVarNonNull_mod_Weight {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01;
  ct_tab_PlinthAreaSettings: ct2_tab_PlinthAreaSettings;
  ct_tab_PlinthAreaConstruction: ct2_tab_PlinthAreaConstruction;
}

export class OD_M_mc_PlinthArea01 extends OD_Base  implements dc_mc_PlinthArea01
,IModParents_mc_PlinthArea01
,IModVar_mod_CarcaseDepth,IModVar_mod_CarcaseId,IModVar_mod_CarcaseWidth,IModVar_mod_PlinthAreaVisLeft,IModVar_mod_PlinthAreaVisRight,IModVar_mod_SidepanelleftThk,IModVar_mod_SidepanelrightThk,IModVar_mod_CarcaseSidepanelleftOversizeBtm,IModVar_mod_CarcaseSidepanelrightOversizeBtm,IModVar_mod_PlinthAreaHeight,IModVar_mod_PlinthAreaPosLeftMatrix,IModVar_mod_PlinthAreaDesign,IModVar_mod_PlinthAreaPosBackMatrix,IModVar_mod_PlinthAreaPosFrontMatrix,IModVar_mod_PlinthAreaPosRightMatrix,IModVar_mod_PlinthAreaPosLogic,IModVar_mod_ShelfbtmThk,IModVar_mod_TypeElement,IModVar_mod_PlinthAreaElementColor,IModVar_mod_ModuleName,IModVar_mod_PlinthAreaExtraItem,IModVar_mod_PlinthAreaPositionInfo,IModVar_mod_LegInsertion,IModVar_mod_Weight
 {
  constructor(parent: IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle, manufacturerMode?:boolean) {
    super('mc_PlinthArea01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_PlinthArea01_NonNull(this);
  }
  parent: IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle;
  _selfNonNull: OD_M_mc_PlinthArea01_NonNull;

  override variants:string[] = ['mod_CarcaseDepth','mod_CarcaseId','mod_CarcaseWidth','mod_PlinthAreaVisLeft','mod_PlinthAreaVisRight','mod_SidepanelleftThk','mod_SidepanelrightThk','mod_CarcaseSidepanelleftOversizeBtm','mod_CarcaseSidepanelrightOversizeBtm','mod_PlinthAreaHeight','mod_PlinthAreaPosLeftMatrix','mod_PlinthAreaDesign','mod_PlinthAreaPosBackMatrix','mod_PlinthAreaPosFrontMatrix','mod_PlinthAreaPosRightMatrix','mod_PlinthAreaPosLogic','mod_ShelfbtmThk','mod_TypeElement','mod_PlinthAreaElementColor','mod_ModuleName','mod_PlinthAreaExtraItem','mod_PlinthAreaPositionInfo','mod_LegInsertion','mod_Weight',];
  #mod_CarcaseDepth?: number;
  get mod_CarcaseDepth(): number | undefined { return this.#mod_CarcaseDepth}
  set mod_CarcaseDepth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseDepth === value) return;
    this.#mod_CarcaseDepth = value;
  }

  mod_CarcaseDepth_matrix?: IMatrix_mod_CarcaseDepth;
  #mod_CarcaseId?: string;
  get mod_CarcaseId(): string | undefined { return this.#mod_CarcaseId}
  set mod_CarcaseId(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseId === value) return;
    this.#mod_CarcaseId = value;
  }

  mod_CarcaseId_matrix?: IMatrix_mod_CarcaseId;
  #mod_CarcaseWidth?: number;
  get mod_CarcaseWidth(): number | undefined { return this.#mod_CarcaseWidth}
  set mod_CarcaseWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseWidth === value) return;
    this.#mod_CarcaseWidth = value;
  }

  mod_CarcaseWidth_matrix?: IMatrix_mod_CarcaseWidth;
  #mod_PlinthAreaVisLeft?: boolean;
  get mod_PlinthAreaVisLeft(): boolean | undefined { return this.#mod_PlinthAreaVisLeft}
  set mod_PlinthAreaVisLeft(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaVisLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaVisLeft === value) return;
    this.#mod_PlinthAreaVisLeft = value;
  }

  mod_PlinthAreaVisLeft_matrix?: IMatrix_mod_PlinthAreaVisLeft;
  #mod_PlinthAreaVisRight?: boolean;
  get mod_PlinthAreaVisRight(): boolean | undefined { return this.#mod_PlinthAreaVisRight}
  set mod_PlinthAreaVisRight(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaVisRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaVisRight === value) return;
    this.#mod_PlinthAreaVisRight = value;
  }

  mod_PlinthAreaVisRight_matrix?: IMatrix_mod_PlinthAreaVisRight;
  #mod_SidepanelleftThk?: number;
  get mod_SidepanelleftThk(): number | undefined { return this.#mod_SidepanelleftThk}
  set mod_SidepanelleftThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_SidepanelleftThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_SidepanelleftThk === value) return;
    this.#mod_SidepanelleftThk = value;
  }

  mod_SidepanelleftThk_matrix?: IMatrix_mod_SidepanelleftThk;
  #mod_SidepanelrightThk?: number;
  get mod_SidepanelrightThk(): number | undefined { return this.#mod_SidepanelrightThk}
  set mod_SidepanelrightThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_SidepanelrightThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_SidepanelrightThk === value) return;
    this.#mod_SidepanelrightThk = value;
  }

  mod_SidepanelrightThk_matrix?: IMatrix_mod_SidepanelrightThk;
  #mod_CarcaseSidepanelleftOversizeBtm?: number;
  get mod_CarcaseSidepanelleftOversizeBtm(): number | undefined { return this.#mod_CarcaseSidepanelleftOversizeBtm}
  set mod_CarcaseSidepanelleftOversizeBtm(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseSidepanelleftOversizeBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseSidepanelleftOversizeBtm === value) return;
    this.#mod_CarcaseSidepanelleftOversizeBtm = value;
  }

  mod_CarcaseSidepanelleftOversizeBtm_matrix?: IMatrix_mod_CarcaseSidepanelleftOversizeBtm;
  #mod_CarcaseSidepanelrightOversizeBtm?: number;
  get mod_CarcaseSidepanelrightOversizeBtm(): number | undefined { return this.#mod_CarcaseSidepanelrightOversizeBtm}
  set mod_CarcaseSidepanelrightOversizeBtm(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseSidepanelrightOversizeBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseSidepanelrightOversizeBtm === value) return;
    this.#mod_CarcaseSidepanelrightOversizeBtm = value;
  }

  mod_CarcaseSidepanelrightOversizeBtm_matrix?: IMatrix_mod_CarcaseSidepanelrightOversizeBtm;
  #mod_PlinthAreaHeight?: number;
  get mod_PlinthAreaHeight(): number | undefined { return this.#mod_PlinthAreaHeight}
  set mod_PlinthAreaHeight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaHeight === value) return;
    this.#mod_PlinthAreaHeight = value;
  }

  mod_PlinthAreaHeight_matrix?: IMatrix_mod_PlinthAreaHeight;
  #mod_PlinthAreaPosLeftMatrix?: string;
  get mod_PlinthAreaPosLeftMatrix(): string | undefined { return this.#mod_PlinthAreaPosLeftMatrix}
  set mod_PlinthAreaPosLeftMatrix(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaPosLeftMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaPosLeftMatrix === value) return;
    this.#mod_PlinthAreaPosLeftMatrix = value;
  }

  mod_PlinthAreaPosLeftMatrix_matrix?: IMatrix_mod_PlinthAreaPosLeftMatrix;
  #mod_PlinthAreaDesign?: string;
  get mod_PlinthAreaDesign(): string | undefined { return this.#mod_PlinthAreaDesign}
  set mod_PlinthAreaDesign(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaDesign === value) return;
    this.#mod_PlinthAreaDesign = value;
  }

  mod_PlinthAreaDesign_matrix?: IMatrix_mod_PlinthAreaDesign;
  #mod_PlinthAreaPosBackMatrix?: string;
  get mod_PlinthAreaPosBackMatrix(): string | undefined { return this.#mod_PlinthAreaPosBackMatrix}
  set mod_PlinthAreaPosBackMatrix(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaPosBackMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaPosBackMatrix === value) return;
    this.#mod_PlinthAreaPosBackMatrix = value;
  }

  mod_PlinthAreaPosBackMatrix_matrix?: IMatrix_mod_PlinthAreaPosBackMatrix;
  #mod_PlinthAreaPosFrontMatrix?: string;
  get mod_PlinthAreaPosFrontMatrix(): string | undefined { return this.#mod_PlinthAreaPosFrontMatrix}
  set mod_PlinthAreaPosFrontMatrix(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaPosFrontMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaPosFrontMatrix === value) return;
    this.#mod_PlinthAreaPosFrontMatrix = value;
  }

  mod_PlinthAreaPosFrontMatrix_matrix?: IMatrix_mod_PlinthAreaPosFrontMatrix;
  #mod_PlinthAreaPosRightMatrix?: string;
  get mod_PlinthAreaPosRightMatrix(): string | undefined { return this.#mod_PlinthAreaPosRightMatrix}
  set mod_PlinthAreaPosRightMatrix(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaPosRightMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaPosRightMatrix === value) return;
    this.#mod_PlinthAreaPosRightMatrix = value;
  }

  mod_PlinthAreaPosRightMatrix_matrix?: IMatrix_mod_PlinthAreaPosRightMatrix;
  #mod_PlinthAreaPosLogic?: string;
  get mod_PlinthAreaPosLogic(): string | undefined { return this.#mod_PlinthAreaPosLogic}
  set mod_PlinthAreaPosLogic(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaPosLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaPosLogic === value) return;
    this.#mod_PlinthAreaPosLogic = value;
  }

  mod_PlinthAreaPosLogic_matrix?: IMatrix_mod_PlinthAreaPosLogic;
  #mod_ShelfbtmThk?: number;
  get mod_ShelfbtmThk(): number | undefined { return this.#mod_ShelfbtmThk}
  set mod_ShelfbtmThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfbtmThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfbtmThk === value) return;
    this.#mod_ShelfbtmThk = value;
  }

  mod_ShelfbtmThk_matrix?: IMatrix_mod_ShelfbtmThk;
  #mod_TypeElement?: string;
  get mod_TypeElement(): string | undefined { return this.#mod_TypeElement}
  set mod_TypeElement(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_TypeElement' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_TypeElement === value) return;
    this.#mod_TypeElement = value;
  }

  mod_TypeElement_matrix?: IMatrix_mod_TypeElement;
  #mod_PlinthAreaElementColor?: string;
  get mod_PlinthAreaElementColor(): string | undefined { return this.#mod_PlinthAreaElementColor}
  set mod_PlinthAreaElementColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaElementColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaElementColor === value) return;
    this.#mod_PlinthAreaElementColor = value;
  }

  mod_PlinthAreaElementColor_matrix?: IMatrix_mod_PlinthAreaElementColor;
  #mod_ModuleName?: string;
  get mod_ModuleName(): string | undefined { return this.#mod_ModuleName}
  set mod_ModuleName(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ModuleName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ModuleName === value) return;
    this.#mod_ModuleName = value;
  }

  mod_ModuleName_matrix?: IMatrix_mod_ModuleName;
  #mod_PlinthAreaExtraItem?: string;
  get mod_PlinthAreaExtraItem(): string | undefined { return this.#mod_PlinthAreaExtraItem}
  set mod_PlinthAreaExtraItem(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PlinthAreaExtraItem' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PlinthAreaExtraItem === value) return;
    this.#mod_PlinthAreaExtraItem = value;
  }

  mod_PlinthAreaExtraItem_matrix?: IMatrix_mod_PlinthAreaExtraItem;
  #mod_PlinthAreaPositionInfo: string[] = [];
  get mod_PlinthAreaPositionInfo(): string[] { return this.#mod_PlinthAreaPositionInfo;}
  #mod_LegInsertion?: boolean;
  get mod_LegInsertion(): boolean | undefined { return this.#mod_LegInsertion}
  set mod_LegInsertion(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_LegInsertion' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_LegInsertion === value) return;
    this.#mod_LegInsertion = value;
  }

  mod_LegInsertion_matrix?: IMatrix_mod_LegInsertion;
  #mod_Weight?: number;
  get mod_Weight(): number | undefined { return this.#mod_Weight}
  set mod_Weight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Weight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Weight === value) return;
    this.#mod_Weight = value;
  }

  mod_Weight_matrix?: IMatrix_mod_Weight;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_CarcaseDepth', this.mod_CarcaseDepth);
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
  res.set('mod_PlinthAreaVisLeft', this.mod_PlinthAreaVisLeft);
  res.set('mod_PlinthAreaVisRight', this.mod_PlinthAreaVisRight);
  res.set('mod_SidepanelleftThk', this.mod_SidepanelleftThk);
  res.set('mod_SidepanelrightThk', this.mod_SidepanelrightThk);
  res.set('mod_CarcaseSidepanelleftOversizeBtm', this.mod_CarcaseSidepanelleftOversizeBtm);
  res.set('mod_CarcaseSidepanelrightOversizeBtm', this.mod_CarcaseSidepanelrightOversizeBtm);
  res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
  res.set('mod_PlinthAreaPosLeftMatrix', this.mod_PlinthAreaPosLeftMatrix);
  res.set('mod_PlinthAreaDesign', this.mod_PlinthAreaDesign);
  res.set('mod_PlinthAreaPosBackMatrix', this.mod_PlinthAreaPosBackMatrix);
  res.set('mod_PlinthAreaPosFrontMatrix', this.mod_PlinthAreaPosFrontMatrix);
  res.set('mod_PlinthAreaPosRightMatrix', this.mod_PlinthAreaPosRightMatrix);
  res.set('mod_PlinthAreaPosLogic', this.mod_PlinthAreaPosLogic);
  res.set('mod_ShelfbtmThk', this.mod_ShelfbtmThk);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_PlinthAreaElementColor', this.mod_PlinthAreaElementColor);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_PlinthAreaExtraItem', this.mod_PlinthAreaExtraItem);
  res.set('mod_PlinthAreaPositionInfo', JSON.stringify(this.mod_PlinthAreaPositionInfo));
  res.set('mod_LegInsertion', this.mod_LegInsertion);
  res.set('mod_Weight', this.mod_Weight);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDepth');
    const val = _toFloat(json['attributes']['mod_CarcaseDepth'], 'mod_CarcaseDepth');
    internal_leaveValidateVariant();
    this.mod_CarcaseDepth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseWidth');
    const val = _toFloat(json['attributes']['mod_CarcaseWidth'], 'mod_CarcaseWidth');
    internal_leaveValidateVariant();
    this.mod_CarcaseWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaVisLeft');
    const val = _toBoolean(json['attributes']['mod_PlinthAreaVisLeft'], 'mod_PlinthAreaVisLeft');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaVisLeft = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaVisRight');
    const val = _toBoolean(json['attributes']['mod_PlinthAreaVisRight'], 'mod_PlinthAreaVisRight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaVisRight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelleftThk');
    const val = _toFloat(json['attributes']['mod_SidepanelleftThk'], 'mod_SidepanelleftThk');
    internal_leaveValidateVariant();
    this.mod_SidepanelleftThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelrightThk');
    const val = _toFloat(json['attributes']['mod_SidepanelrightThk'], 'mod_SidepanelrightThk');
    internal_leaveValidateVariant();
    this.mod_SidepanelrightThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseSidepanelleftOversizeBtm');
    const val = _toFloat(json['attributes']['mod_CarcaseSidepanelleftOversizeBtm'], 'mod_CarcaseSidepanelleftOversizeBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseSidepanelleftOversizeBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseSidepanelrightOversizeBtm');
    const val = _toFloat(json['attributes']['mod_CarcaseSidepanelrightOversizeBtm'], 'mod_CarcaseSidepanelrightOversizeBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseSidepanelrightOversizeBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
    const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosLeftMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosLeftMatrix'], 'mod_PlinthAreaPosLeftMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosLeftMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaDesign');
    const val = _toString(json['attributes']['mod_PlinthAreaDesign'], 'mod_PlinthAreaDesign');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosBackMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosBackMatrix'], 'mod_PlinthAreaPosBackMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosBackMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosFrontMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosFrontMatrix'], 'mod_PlinthAreaPosFrontMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosFrontMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosRightMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosRightMatrix'], 'mod_PlinthAreaPosRightMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosRightMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosLogic');
    const val = _toString(json['attributes']['mod_PlinthAreaPosLogic'], 'mod_PlinthAreaPosLogic');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfbtmThk');
    const val = _toFloat(json['attributes']['mod_ShelfbtmThk'], 'mod_ShelfbtmThk');
    internal_leaveValidateVariant();
    this.mod_ShelfbtmThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaElementColor');
    const val = _toString(json['attributes']['mod_PlinthAreaElementColor'], 'mod_PlinthAreaElementColor');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaElementColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaExtraItem');
    const val = _toString(json['attributes']['mod_PlinthAreaExtraItem'], 'mod_PlinthAreaExtraItem');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaExtraItem = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_LegInsertion');
    const val = _toBoolean(json['attributes']['mod_LegInsertion'], 'mod_LegInsertion');
    internal_leaveValidateVariant();
    this.mod_LegInsertion = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Weight');
    const val = _toFloat(json['attributes']['mod_Weight'], 'mod_Weight');
    internal_leaveValidateVariant();
    this.mod_Weight = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_CarcaseDepth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseDepth')) {
          let pv = <IModVar_mod_CarcaseDepth>s;
          if (pv.mod_CarcaseDepth !== undefined) {
            this.mod_CarcaseDepth = (<IModVar_mod_CarcaseDepth>s).mod_CarcaseDepth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseId === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseId')) {
          let pv = <IModVar_mod_CarcaseId>s;
          if (pv.mod_CarcaseId !== undefined) {
            this.mod_CarcaseId = (<IModVar_mod_CarcaseId>s).mod_CarcaseId;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseWidth')) {
          let pv = <IModVar_mod_CarcaseWidth>s;
          if (pv.mod_CarcaseWidth !== undefined) {
            this.mod_CarcaseWidth = (<IModVar_mod_CarcaseWidth>s).mod_CarcaseWidth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaVisLeft === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaVisLeft')) {
          let pv = <IModVar_mod_PlinthAreaVisLeft>s;
          if (pv.mod_PlinthAreaVisLeft !== undefined) {
            this.mod_PlinthAreaVisLeft = (<IModVar_mod_PlinthAreaVisLeft>s).mod_PlinthAreaVisLeft;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaVisRight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaVisRight')) {
          let pv = <IModVar_mod_PlinthAreaVisRight>s;
          if (pv.mod_PlinthAreaVisRight !== undefined) {
            this.mod_PlinthAreaVisRight = (<IModVar_mod_PlinthAreaVisRight>s).mod_PlinthAreaVisRight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelleftThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelleftThk')) {
          let pv = <IModVar_mod_SidepanelleftThk>s;
          if (pv.mod_SidepanelleftThk !== undefined) {
            this.mod_SidepanelleftThk = (<IModVar_mod_SidepanelleftThk>s).mod_SidepanelleftThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelrightThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelrightThk')) {
          let pv = <IModVar_mod_SidepanelrightThk>s;
          if (pv.mod_SidepanelrightThk !== undefined) {
            this.mod_SidepanelrightThk = (<IModVar_mod_SidepanelrightThk>s).mod_SidepanelrightThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaHeight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaHeight')) {
          let pv = <IModVar_mod_PlinthAreaHeight>s;
          if (pv.mod_PlinthAreaHeight !== undefined) {
            this.mod_PlinthAreaHeight = (<IModVar_mod_PlinthAreaHeight>s).mod_PlinthAreaHeight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaPosLeftMatrix === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaPosLeftMatrix')) {
          let pv = <IModVar_mod_PlinthAreaPosLeftMatrix>s;
          if (pv.mod_PlinthAreaPosLeftMatrix !== undefined) {
            this.mod_PlinthAreaPosLeftMatrix = (<IModVar_mod_PlinthAreaPosLeftMatrix>s).mod_PlinthAreaPosLeftMatrix;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaDesign')) {
          let pv = <IModVar_mod_PlinthAreaDesign>s;
          if (pv.mod_PlinthAreaDesign !== undefined) {
            this.mod_PlinthAreaDesign = (<IModVar_mod_PlinthAreaDesign>s).mod_PlinthAreaDesign;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaPosBackMatrix === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaPosBackMatrix')) {
          let pv = <IModVar_mod_PlinthAreaPosBackMatrix>s;
          if (pv.mod_PlinthAreaPosBackMatrix !== undefined) {
            this.mod_PlinthAreaPosBackMatrix = (<IModVar_mod_PlinthAreaPosBackMatrix>s).mod_PlinthAreaPosBackMatrix;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaPosFrontMatrix === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaPosFrontMatrix')) {
          let pv = <IModVar_mod_PlinthAreaPosFrontMatrix>s;
          if (pv.mod_PlinthAreaPosFrontMatrix !== undefined) {
            this.mod_PlinthAreaPosFrontMatrix = (<IModVar_mod_PlinthAreaPosFrontMatrix>s).mod_PlinthAreaPosFrontMatrix;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaPosRightMatrix === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaPosRightMatrix')) {
          let pv = <IModVar_mod_PlinthAreaPosRightMatrix>s;
          if (pv.mod_PlinthAreaPosRightMatrix !== undefined) {
            this.mod_PlinthAreaPosRightMatrix = (<IModVar_mod_PlinthAreaPosRightMatrix>s).mod_PlinthAreaPosRightMatrix;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ShelfbtmThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfbtmThk')) {
          let pv = <IModVar_mod_ShelfbtmThk>s;
          if (pv.mod_ShelfbtmThk !== undefined) {
            this.mod_ShelfbtmThk = (<IModVar_mod_ShelfbtmThk>s).mod_ShelfbtmThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_TypeElement === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_TypeElement')) {
          let pv = <IModVar_mod_TypeElement>s;
          if (pv.mod_TypeElement !== undefined) {
            this.mod_TypeElement = (<IModVar_mod_TypeElement>s).mod_TypeElement;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaElementColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaElementColor')) {
          let pv = <IModVar_mod_PlinthAreaElementColor>s;
          if (pv.mod_PlinthAreaElementColor !== undefined) {
            this.mod_PlinthAreaElementColor = (<IModVar_mod_PlinthAreaElementColor>s).mod_PlinthAreaElementColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PlinthAreaExtraItem === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PlinthAreaExtraItem')) {
          let pv = <IModVar_mod_PlinthAreaExtraItem>s;
          if (pv.mod_PlinthAreaExtraItem !== undefined) {
            this.mod_PlinthAreaExtraItem = (<IModVar_mod_PlinthAreaExtraItem>s).mod_PlinthAreaExtraItem;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_CarcaseSidepanelleftOversizeBtm === undefined) {
      this.mod_CarcaseSidepanelleftOversizeBtm = 0;
    }
    if (this.mod_CarcaseSidepanelrightOversizeBtm === undefined) {
      this.mod_CarcaseSidepanelrightOversizeBtm = 0;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_PlinthArea01";
    }
    if (this.mod_LegInsertion === undefined) {
      this.mod_LegInsertion = true;
    }
    if (this.mod_Weight === undefined) {
      this.mod_Weight = 50;
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_PlinthAreaPosLogic === undefined) {
      this.mod_PlinthAreaPosLogic = this.g.basic_PlinthAreaPosLogic;
    }
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
    internal_leaveDataCompletionSetDefault();
  }

  override dataCompletion():void {
    this.#dataCompletionAssignDerivedData();
    this.#dataCompletionSetDefaults();
    this.m.forEach(subMod => subMod.dataCompletion());
  }

  override manufacturerDataCompletion():void {
    this.#manufacturerDataCompletionInternal();
    this.m.forEach(subMod => subMod.manufacturerDataCompletion());
  }
  #manufacturerDataCompletionInternal = mc_PlinthArea01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_PlinthArea01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_PlinthArea01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_PlinthArea01_NonNull(this);
    return adc;
  }

  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01 {
    var m = new OD_M_mc_Leg01(this);
    m.dataCompletion();
    if (this._manufacturerMode) {
      m.manufacturerDataCompletion();
    }
    if (index !== undefined) {
      this.m.splice(index, 0, m);
    } else {
      this.m.push(m);
    }
    return m;
  }
  override validateSelections():void {
    this.mod_CarcaseDepth_matrix = VariantValidation.mod_CarcaseDepth(this, this);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this);
    this.mod_PlinthAreaVisLeft_matrix = VariantValidation.mod_PlinthAreaVisLeft(this, this);
    this.mod_PlinthAreaVisRight_matrix = VariantValidation.mod_PlinthAreaVisRight(this, this);
    this.mod_SidepanelleftThk_matrix = VariantValidation.mod_SidepanelleftThk(this, this);
    this.mod_SidepanelrightThk_matrix = VariantValidation.mod_SidepanelrightThk(this, this);
    this.mod_CarcaseSidepanelleftOversizeBtm_matrix = VariantValidation.mod_CarcaseSidepanelleftOversizeBtm(this, this);
    this.mod_CarcaseSidepanelrightOversizeBtm_matrix = VariantValidation.mod_CarcaseSidepanelrightOversizeBtm(this, this);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this);
    this.mod_PlinthAreaPosLeftMatrix_matrix = VariantValidation.mod_PlinthAreaPosLeftMatrix(this, this);
    this.mod_PlinthAreaDesign_matrix = VariantValidation.mod_PlinthAreaDesign(this, this);
    this.mod_PlinthAreaPosBackMatrix_matrix = VariantValidation.mod_PlinthAreaPosBackMatrix(this, this);
    this.mod_PlinthAreaPosFrontMatrix_matrix = VariantValidation.mod_PlinthAreaPosFrontMatrix(this, this);
    this.mod_PlinthAreaPosRightMatrix_matrix = VariantValidation.mod_PlinthAreaPosRightMatrix(this, this);
    this.mod_PlinthAreaPosLogic_matrix = VariantValidation.mod_PlinthAreaPosLogic(this, this);
    this.mod_ShelfbtmThk_matrix = VariantValidation.mod_ShelfbtmThk(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_PlinthAreaElementColor_matrix = VariantValidation.mod_PlinthAreaElementColor(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_PlinthAreaExtraItem_matrix = VariantValidation.mod_PlinthAreaExtraItem(this, this);
    this.mod_LegInsertion_matrix = VariantValidation.mod_LegInsertion(this, this);
    this.mod_Weight_matrix = VariantValidation.mod_Weight(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_PlinthArea01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_PlinthArea01_NonNull implements cbp_mc_PlinthArea01, adc_mc_PlinthArea01 ,IPartParentsNonNull_mc_PlinthArea01 {
  constructor(parent: OD_M_mc_PlinthArea01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_PlinthArea01;

  get _id():string { return this.#internalParent._id; }
  get modId():string { return this.#internalParent.modId; }
  getOrigin():Matrix4 {
    return this.#internalParent.getOrigin();
  }
  getOriginPos():Vector3 {
    return this.#internalParent.getOriginPos();
  }
  ct_tab_PlinthAreaSettings : ct2_tab_PlinthAreaSettings = new ct2_tab_PlinthAreaSettings();
  ct_tab_PlinthAreaConstruction : ct2_tab_PlinthAreaConstruction = new ct2_tab_PlinthAreaConstruction();
  createBuildPlan():void {
    this.#createBuildPlanInternal();
  }
  #createBuildPlanInternal = mc_PlinthArea01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_PlinthArea01_afterDataCompletion;
  createPartGroup(groupName:string, part:PartBase): PartGroup { 
    return this.#internalParent.createPartGroup(groupName, part);
  }
  assignPartGroup(groupName:string, part:PartBase): void { 
    this.#internalParent.assignPartGroup(groupName, part);
  }
  createOpenGroup(groupName:string, part:PartBase): OpenGroup { 
    return this.#internalParent.createOpenGroup(groupName, part);
  }
  assignOpenGroup(groupName:string, part:PartBase): void { 
    this.#internalParent.assignOpenGroup(groupName, part);
  }
  setOrigin(x:number|Matrix4,y?:number,z?:number): void { 
    this.#internalParent.setOrigin(x, y, z);
  }
  getFullOrigin(): Vector3 {
    return this.#internalParent.getFullOrigin();
  }
  get m(): OD_Base[] { return this.#internalParent.m; }
  get g(): IGlobalVars { return this.#internalParent.g; }
  parent: IModParents_mr_CornerunitStraight_mr_Filler01_mr_StorageunitSingle;
  get mod_CarcaseDepth(): number  {
    return this.#internalParent.mod_CarcaseDepth!;
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseWidth(): number  {
    return this.#internalParent.mod_CarcaseWidth!;
  }
  get mod_PlinthAreaVisLeft(): boolean  {
    return this.#internalParent.mod_PlinthAreaVisLeft!;
  }
  get mod_PlinthAreaVisRight(): boolean  {
    return this.#internalParent.mod_PlinthAreaVisRight!;
  }
  get mod_SidepanelleftThk(): number  {
    return this.#internalParent.mod_SidepanelleftThk!;
  }
  get mod_SidepanelrightThk(): number  {
    return this.#internalParent.mod_SidepanelrightThk!;
  }
  get mod_CarcaseSidepanelleftOversizeBtm(): number  {
    return this.#internalParent.mod_CarcaseSidepanelleftOversizeBtm!;
  }
  get mod_CarcaseSidepanelrightOversizeBtm(): number  {
    return this.#internalParent.mod_CarcaseSidepanelrightOversizeBtm!;
  }
  get mod_PlinthAreaHeight(): number  {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_PlinthAreaPosLeftMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosLeftMatrix!;
  }
  get mod_PlinthAreaDesign(): string  {
    return this.#internalParent.mod_PlinthAreaDesign!;
  }
  get mod_PlinthAreaDesign_matrix(): IMatrix_mod_PlinthAreaDesign {
    return this.#internalParent.mod_PlinthAreaDesign_matrix!;
  }
  get mod_PlinthAreaPosBackMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosBackMatrix!;
  }
  get mod_PlinthAreaPosFrontMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosFrontMatrix!;
  }
  get mod_PlinthAreaPosRightMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosRightMatrix!;
  }
  get mod_PlinthAreaPosLogic(): string  {
    return this.#internalParent.mod_PlinthAreaPosLogic!;
  }
  get mod_ShelfbtmThk(): number  {
    return this.#internalParent.mod_ShelfbtmThk!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_PlinthAreaElementColor(): string  {
    return this.#internalParent.mod_PlinthAreaElementColor!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_PlinthAreaExtraItem(): string  {
    return this.#internalParent.mod_PlinthAreaExtraItem!;
  }
  get mod_PlinthAreaExtraItem_matrix(): IMatrix_mod_PlinthAreaExtraItem {
    return this.#internalParent.mod_PlinthAreaExtraItem_matrix!;
  }
  get mod_PlinthAreaPositionInfo(): string [] {
    return this.#internalParent.mod_PlinthAreaPositionInfo!;
  }
  get mod_LegInsertion(): boolean  {
    return this.#internalParent.mod_LegInsertion!;
  }
  get mod_Weight(): number  {
    return this.#internalParent.mod_Weight!;
  }
  addOD_M_mc_Leg01(index?: number): dc_mc_Leg01 {
    return this.#internalParent.addOD_M_mc_Leg01(index);
  }
}

