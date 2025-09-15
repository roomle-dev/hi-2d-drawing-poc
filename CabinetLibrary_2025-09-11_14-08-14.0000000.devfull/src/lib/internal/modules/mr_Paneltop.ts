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
import { OD_M_mc_Paneltop01, dc_mc_Paneltop01 } from './mc_Paneltop01'
import { IModuleNonNull_mr_Paneltop,IModParents_mr_Paneltop,IPartParentsNonNull_mr_Paneltop} from '../mod-interfaces'
import {IModVar_mod_PaneltopEdgeBackColor,IModVarNonNull_mod_PaneltopEdgeBackColor,IModVar_mod_PaneltopEdgeFrontColor,IModVarNonNull_mod_PaneltopEdgeFrontColor,IModVar_mod_PaneltopEdgeLeftColor,IModVarNonNull_mod_PaneltopEdgeLeftColor,IModVar_mod_PaneltopEdgeRightColor,IModVarNonNull_mod_PaneltopEdgeRightColor,IModVar_mod_PaneltopEdgeVisBack,IModVarNonNull_mod_PaneltopEdgeVisBack,IModVar_mod_PaneltopEdgeVisFront,IModVarNonNull_mod_PaneltopEdgeVisFront,IModVar_mod_PaneltopEdgeVisLeft,IModVarNonNull_mod_PaneltopEdgeVisLeft,IModVar_mod_PaneltopEdgeVisRight,IModVarNonNull_mod_PaneltopEdgeVisRight,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_CeilingFillerFittingPanelDepth,IModVarNonNull_mod_CeilingFillerFittingPanelDepth,IModVar_mod_CeilingFillerFittingPanelThk,IModVarNonNull_mod_CeilingFillerFittingPanelThk,IModVar_mod_CeilingFillerHeight,IModVarNonNull_mod_CeilingFillerHeight,IModVar_mod_CeilingFillerThk,IModVarNonNull_mod_CeilingFillerThk,IModVar_mod_PaneltopColor,IModVarNonNull_mod_PaneltopColor,IModVar_mod_PaneltopThk,IModVarNonNull_mod_PaneltopThk,IModVar_mod_PaneltopConstruction,IModVarNonNull_mod_PaneltopConstruction,IModVar_mod_PaneltopOverhangFront,IModVarNonNull_mod_PaneltopOverhangFront,IModVar_mod_PaneltopProgram,IModVarNonNull_mod_PaneltopProgram,IModVar_mod_PaneltopOversizeBack,IModVarNonNull_mod_PaneltopOversizeBack,IModVar_mod_FrontGapHor,IModVarNonNull_mod_FrontGapHor,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_LengthList,IModVarNonNull_mod_LengthList,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_PaneltopEdgeBackColor, IMatrix_mod_PaneltopEdgeFrontColor, IMatrix_mod_PaneltopEdgeLeftColor, IMatrix_mod_PaneltopEdgeRightColor, IMatrix_mod_PaneltopEdgeVisBack, IMatrix_mod_PaneltopEdgeVisFront, IMatrix_mod_PaneltopEdgeVisLeft, IMatrix_mod_PaneltopEdgeVisRight, IMatrix_mod_ModuleName, IMatrix_mod_CeilingFillerFittingPanelDepth, IMatrix_mod_CeilingFillerFittingPanelThk, IMatrix_mod_CeilingFillerHeight, IMatrix_mod_CeilingFillerThk, IMatrix_mod_PaneltopColor, IMatrix_mod_PaneltopThk, IMatrix_mod_PaneltopConstruction, IMatrix_mod_PaneltopOverhangFront, IMatrix_mod_PaneltopProgram, IMatrix_mod_PaneltopOversizeBack, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapCarcase, IMatrix_mod_GrainLogic} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mr_Paneltop_createBuildPlan, mr_Paneltop_afterDataCompletion, mr_Paneltop_manufacturerDataCompletion } from '../../modules/mr_Paneltop';

export interface cbp_mr_Paneltop extends IModBaseProp
, IModVarNonNull_mod_PaneltopEdgeBackColor, IModVarNonNull_mod_PaneltopEdgeFrontColor, IModVarNonNull_mod_PaneltopEdgeLeftColor, IModVarNonNull_mod_PaneltopEdgeRightColor, IModVarNonNull_mod_PaneltopEdgeVisBack, IModVarNonNull_mod_PaneltopEdgeVisFront, IModVarNonNull_mod_PaneltopEdgeVisLeft, IModVarNonNull_mod_PaneltopEdgeVisRight, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CeilingFillerFittingPanelDepth, IModVarNonNull_mod_CeilingFillerFittingPanelThk, IModVarNonNull_mod_CeilingFillerHeight, IModVarNonNull_mod_CeilingFillerThk, IModVarNonNull_mod_PaneltopColor, IModVarNonNull_mod_PaneltopThk, IModVarNonNull_mod_PaneltopConstruction, IModVarNonNull_mod_PaneltopOverhangFront, IModVarNonNull_mod_PaneltopProgram, IModVarNonNull_mod_PaneltopOversizeBack, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_LengthList, IModVarNonNull_mod_GrainLogic {
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  getGenerationContours(): GenerationContour[];
  getRoomContours(): RoomContour[];
  get m(): OD_Base[];
}

export interface dc_mr_Paneltop extends IModBaseProp
, IModVar_mod_PaneltopEdgeBackColor, IModVar_mod_PaneltopEdgeFrontColor, IModVar_mod_PaneltopEdgeLeftColor, IModVar_mod_PaneltopEdgeRightColor, IModVar_mod_PaneltopEdgeVisBack, IModVar_mod_PaneltopEdgeVisFront, IModVar_mod_PaneltopEdgeVisLeft, IModVar_mod_PaneltopEdgeVisRight, IModVar_mod_ModuleName, IModVar_mod_CeilingFillerFittingPanelDepth, IModVar_mod_CeilingFillerFittingPanelThk, IModVar_mod_CeilingFillerHeight, IModVar_mod_CeilingFillerThk, IModVar_mod_PaneltopColor, IModVar_mod_PaneltopThk, IModVar_mod_PaneltopConstruction, IModVar_mod_PaneltopOverhangFront, IModVar_mod_PaneltopProgram, IModVar_mod_PaneltopOversizeBack, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapCarcase, IModVar_mod_LengthList, IModVar_mod_GrainLogic {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mr_Paneltop;
  getGenerationContours(): GenerationContour[];
  addOD_M_mc_Paneltop01(index?: number): dc_mc_Paneltop01;
}

export interface adc_mr_Paneltop extends IModBaseProp
, IModVarNonNull_mod_PaneltopEdgeBackColor, IModVarNonNull_mod_PaneltopEdgeFrontColor, IModVarNonNull_mod_PaneltopEdgeLeftColor, IModVarNonNull_mod_PaneltopEdgeRightColor, IModVarNonNull_mod_PaneltopEdgeVisBack, IModVarNonNull_mod_PaneltopEdgeVisFront, IModVarNonNull_mod_PaneltopEdgeVisLeft, IModVarNonNull_mod_PaneltopEdgeVisRight, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CeilingFillerFittingPanelDepth, IModVarNonNull_mod_CeilingFillerFittingPanelThk, IModVarNonNull_mod_CeilingFillerHeight, IModVarNonNull_mod_CeilingFillerThk, IModVarNonNull_mod_PaneltopColor, IModVarNonNull_mod_PaneltopThk, IModVarNonNull_mod_PaneltopConstruction, IModVarNonNull_mod_PaneltopOverhangFront, IModVarNonNull_mod_PaneltopProgram, IModVarNonNull_mod_PaneltopOversizeBack, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_LengthList, IModVarNonNull_mod_GrainLogic {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_Paneltop01(index?: number): dc_mc_Paneltop01;
  getGenerationContours(): GenerationContour[];
  getRoomContours(): RoomContour[];
  get _posData(): Map<string, string|number>;
}

export class OD_M_mr_Paneltop extends OD_Base  implements dc_mr_Paneltop
,IModParents_mr_Paneltop
,IModVar_mod_PaneltopEdgeBackColor,IModVar_mod_PaneltopEdgeFrontColor,IModVar_mod_PaneltopEdgeLeftColor,IModVar_mod_PaneltopEdgeRightColor,IModVar_mod_PaneltopEdgeVisBack,IModVar_mod_PaneltopEdgeVisFront,IModVar_mod_PaneltopEdgeVisLeft,IModVar_mod_PaneltopEdgeVisRight,IModVar_mod_ModuleName,IModVar_mod_CeilingFillerFittingPanelDepth,IModVar_mod_CeilingFillerFittingPanelThk,IModVar_mod_CeilingFillerHeight,IModVar_mod_CeilingFillerThk,IModVar_mod_PaneltopColor,IModVar_mod_PaneltopThk,IModVar_mod_PaneltopConstruction,IModVar_mod_PaneltopOverhangFront,IModVar_mod_PaneltopProgram,IModVar_mod_PaneltopOversizeBack,IModVar_mod_FrontGapHor,IModVar_mod_FrontGapCarcase,IModVar_mod_LengthList,IModVar_mod_GrainLogic
 {
  constructor(parent?: OD_Base, manufacturerMode?:boolean) {
    super('mr_Paneltop', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_mr_Paneltop_NonNull(this);
    this._isGenerated = true;
  }
  _selfNonNull: OD_M_mr_Paneltop_NonNull;
  getGenerationContours(): GenerationContour[] { return this.generationContours; }

  override variants:string[] = ['mod_PaneltopEdgeBackColor','mod_PaneltopEdgeFrontColor','mod_PaneltopEdgeLeftColor','mod_PaneltopEdgeRightColor','mod_PaneltopEdgeVisBack','mod_PaneltopEdgeVisFront','mod_PaneltopEdgeVisLeft','mod_PaneltopEdgeVisRight','mod_ModuleName','mod_CeilingFillerFittingPanelDepth','mod_CeilingFillerFittingPanelThk','mod_CeilingFillerHeight','mod_CeilingFillerThk','mod_PaneltopColor','mod_PaneltopThk','mod_PaneltopConstruction','mod_PaneltopOverhangFront','mod_PaneltopProgram','mod_PaneltopOversizeBack','mod_FrontGapHor','mod_FrontGapCarcase','mod_LengthList','mod_GrainLogic',];
  #mod_PaneltopEdgeBackColor?: string;
  get mod_PaneltopEdgeBackColor(): string | undefined { return this.#mod_PaneltopEdgeBackColor}
  set mod_PaneltopEdgeBackColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeBackColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeBackColor === value) return;
    this.#mod_PaneltopEdgeBackColor = value;
  }

  mod_PaneltopEdgeBackColor_matrix?: IMatrix_mod_PaneltopEdgeBackColor;
  #mod_PaneltopEdgeFrontColor?: string;
  get mod_PaneltopEdgeFrontColor(): string | undefined { return this.#mod_PaneltopEdgeFrontColor}
  set mod_PaneltopEdgeFrontColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeFrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeFrontColor === value) return;
    this.#mod_PaneltopEdgeFrontColor = value;
  }

  mod_PaneltopEdgeFrontColor_matrix?: IMatrix_mod_PaneltopEdgeFrontColor;
  #mod_PaneltopEdgeLeftColor?: string;
  get mod_PaneltopEdgeLeftColor(): string | undefined { return this.#mod_PaneltopEdgeLeftColor}
  set mod_PaneltopEdgeLeftColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeLeftColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeLeftColor === value) return;
    this.#mod_PaneltopEdgeLeftColor = value;
  }

  mod_PaneltopEdgeLeftColor_matrix?: IMatrix_mod_PaneltopEdgeLeftColor;
  #mod_PaneltopEdgeRightColor?: string;
  get mod_PaneltopEdgeRightColor(): string | undefined { return this.#mod_PaneltopEdgeRightColor}
  set mod_PaneltopEdgeRightColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeRightColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeRightColor === value) return;
    this.#mod_PaneltopEdgeRightColor = value;
  }

  mod_PaneltopEdgeRightColor_matrix?: IMatrix_mod_PaneltopEdgeRightColor;
  #mod_PaneltopEdgeVisBack?: boolean;
  get mod_PaneltopEdgeVisBack(): boolean | undefined { return this.#mod_PaneltopEdgeVisBack}
  set mod_PaneltopEdgeVisBack(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeVisBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeVisBack === value) return;
    this.#mod_PaneltopEdgeVisBack = value;
  }

  mod_PaneltopEdgeVisBack_matrix?: IMatrix_mod_PaneltopEdgeVisBack;
  #mod_PaneltopEdgeVisFront?: boolean;
  get mod_PaneltopEdgeVisFront(): boolean | undefined { return this.#mod_PaneltopEdgeVisFront}
  set mod_PaneltopEdgeVisFront(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeVisFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeVisFront === value) return;
    this.#mod_PaneltopEdgeVisFront = value;
  }

  mod_PaneltopEdgeVisFront_matrix?: IMatrix_mod_PaneltopEdgeVisFront;
  #mod_PaneltopEdgeVisLeft?: boolean;
  get mod_PaneltopEdgeVisLeft(): boolean | undefined { return this.#mod_PaneltopEdgeVisLeft}
  set mod_PaneltopEdgeVisLeft(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeVisLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeVisLeft === value) return;
    this.#mod_PaneltopEdgeVisLeft = value;
  }

  mod_PaneltopEdgeVisLeft_matrix?: IMatrix_mod_PaneltopEdgeVisLeft;
  #mod_PaneltopEdgeVisRight?: boolean;
  get mod_PaneltopEdgeVisRight(): boolean | undefined { return this.#mod_PaneltopEdgeVisRight}
  set mod_PaneltopEdgeVisRight(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopEdgeVisRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopEdgeVisRight === value) return;
    this.#mod_PaneltopEdgeVisRight = value;
  }

  mod_PaneltopEdgeVisRight_matrix?: IMatrix_mod_PaneltopEdgeVisRight;
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
  #mod_CeilingFillerFittingPanelDepth?: number;
  get mod_CeilingFillerFittingPanelDepth(): number | undefined { return this.#mod_CeilingFillerFittingPanelDepth}
  set mod_CeilingFillerFittingPanelDepth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CeilingFillerFittingPanelDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CeilingFillerFittingPanelDepth === value) return;
    this.#mod_CeilingFillerFittingPanelDepth = value;
  }

  mod_CeilingFillerFittingPanelDepth_matrix?: IMatrix_mod_CeilingFillerFittingPanelDepth;
  #mod_CeilingFillerFittingPanelThk?: number;
  get mod_CeilingFillerFittingPanelThk(): number | undefined { return this.#mod_CeilingFillerFittingPanelThk}
  set mod_CeilingFillerFittingPanelThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CeilingFillerFittingPanelThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CeilingFillerFittingPanelThk === value) return;
    this.#mod_CeilingFillerFittingPanelThk = value;
  }

  mod_CeilingFillerFittingPanelThk_matrix?: IMatrix_mod_CeilingFillerFittingPanelThk;
  #mod_CeilingFillerHeight?: number;
  get mod_CeilingFillerHeight(): number | undefined { return this.#mod_CeilingFillerHeight}
  set mod_CeilingFillerHeight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CeilingFillerHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CeilingFillerHeight === value) return;
    this.#mod_CeilingFillerHeight = value;
  }

  mod_CeilingFillerHeight_matrix?: IMatrix_mod_CeilingFillerHeight;
  #mod_CeilingFillerThk?: number;
  get mod_CeilingFillerThk(): number | undefined { return this.#mod_CeilingFillerThk}
  set mod_CeilingFillerThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CeilingFillerThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CeilingFillerThk === value) return;
    this.#mod_CeilingFillerThk = value;
  }

  mod_CeilingFillerThk_matrix?: IMatrix_mod_CeilingFillerThk;
  #mod_PaneltopColor?: string;
  get mod_PaneltopColor(): string | undefined { return this.#mod_PaneltopColor}
  set mod_PaneltopColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopColor === value) return;
    this.#mod_PaneltopColor = value;
  }

  mod_PaneltopColor_matrix?: IMatrix_mod_PaneltopColor;
  #mod_PaneltopThk?: number;
  get mod_PaneltopThk(): number | undefined { return this.#mod_PaneltopThk}
  set mod_PaneltopThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopThk === value) return;
    this.#mod_PaneltopThk = value;
  }

  mod_PaneltopThk_matrix?: IMatrix_mod_PaneltopThk;
  #mod_PaneltopConstruction?: string;
  get mod_PaneltopConstruction(): string | undefined { return this.#mod_PaneltopConstruction}
  set mod_PaneltopConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopConstruction === value) return;
    this.#mod_PaneltopConstruction = value;
  }

  mod_PaneltopConstruction_matrix?: IMatrix_mod_PaneltopConstruction;
  #mod_PaneltopOverhangFront?: number;
  get mod_PaneltopOverhangFront(): number | undefined { return this.#mod_PaneltopOverhangFront}
  set mod_PaneltopOverhangFront(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopOverhangFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopOverhangFront === value) return;
    this.#mod_PaneltopOverhangFront = value;
  }

  mod_PaneltopOverhangFront_matrix?: IMatrix_mod_PaneltopOverhangFront;
  #mod_PaneltopProgram?: string;
  get mod_PaneltopProgram(): string | undefined { return this.#mod_PaneltopProgram}
  set mod_PaneltopProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopProgram === value) return;
    this.#mod_PaneltopProgram = value;
  }

  mod_PaneltopProgram_matrix?: IMatrix_mod_PaneltopProgram;
  #mod_PaneltopOversizeBack?: number;
  get mod_PaneltopOversizeBack(): number | undefined { return this.#mod_PaneltopOversizeBack}
  set mod_PaneltopOversizeBack(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopOversizeBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopOversizeBack === value) return;
    this.#mod_PaneltopOversizeBack = value;
  }

  mod_PaneltopOversizeBack_matrix?: IMatrix_mod_PaneltopOversizeBack;
  #mod_FrontGapHor?: number;
  get mod_FrontGapHor(): number | undefined { return this.#mod_FrontGapHor}
  set mod_FrontGapHor(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontGapHor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontGapHor === value) return;
    this.#mod_FrontGapHor = value;
  }

  mod_FrontGapHor_matrix?: IMatrix_mod_FrontGapHor;
  #mod_FrontGapCarcase?: number;
  get mod_FrontGapCarcase(): number | undefined { return this.#mod_FrontGapCarcase}
  set mod_FrontGapCarcase(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontGapCarcase' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontGapCarcase === value) return;
    this.#mod_FrontGapCarcase = value;
  }

  mod_FrontGapCarcase_matrix?: IMatrix_mod_FrontGapCarcase;
  #mod_LengthList: number[] = [];
  get mod_LengthList(): number[] { return this.#mod_LengthList;}
  #mod_GrainLogic?: string;
  get mod_GrainLogic(): string | undefined { return this.#mod_GrainLogic}
  set mod_GrainLogic(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_GrainLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_GrainLogic === value) return;
    this.#mod_GrainLogic = value;
  }

  mod_GrainLogic_matrix?: IMatrix_mod_GrainLogic;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_PaneltopEdgeBackColor', this.mod_PaneltopEdgeBackColor);
  res.set('mod_PaneltopEdgeFrontColor', this.mod_PaneltopEdgeFrontColor);
  res.set('mod_PaneltopEdgeLeftColor', this.mod_PaneltopEdgeLeftColor);
  res.set('mod_PaneltopEdgeRightColor', this.mod_PaneltopEdgeRightColor);
  res.set('mod_PaneltopEdgeVisBack', this.mod_PaneltopEdgeVisBack);
  res.set('mod_PaneltopEdgeVisFront', this.mod_PaneltopEdgeVisFront);
  res.set('mod_PaneltopEdgeVisLeft', this.mod_PaneltopEdgeVisLeft);
  res.set('mod_PaneltopEdgeVisRight', this.mod_PaneltopEdgeVisRight);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_CeilingFillerFittingPanelDepth', this.mod_CeilingFillerFittingPanelDepth);
  res.set('mod_CeilingFillerFittingPanelThk', this.mod_CeilingFillerFittingPanelThk);
  res.set('mod_CeilingFillerHeight', this.mod_CeilingFillerHeight);
  res.set('mod_CeilingFillerThk', this.mod_CeilingFillerThk);
  res.set('mod_PaneltopColor', this.mod_PaneltopColor);
  res.set('mod_PaneltopThk', this.mod_PaneltopThk);
  res.set('mod_PaneltopConstruction', this.mod_PaneltopConstruction);
  res.set('mod_PaneltopOverhangFront', this.mod_PaneltopOverhangFront);
  res.set('mod_PaneltopProgram', this.mod_PaneltopProgram);
  res.set('mod_PaneltopOversizeBack', this.mod_PaneltopOversizeBack);
  res.set('mod_FrontGapHor', this.mod_FrontGapHor);
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_LengthList', JSON.stringify(this.mod_LengthList));
  res.set('mod_GrainLogic', this.mod_GrainLogic);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
   const res = new Map<string, number | string | boolean | undefined>();
   return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeBackColor');
    const val = _toString(json['attributes']['mod_PaneltopEdgeBackColor'], 'mod_PaneltopEdgeBackColor');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeBackColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeFrontColor');
    const val = _toString(json['attributes']['mod_PaneltopEdgeFrontColor'], 'mod_PaneltopEdgeFrontColor');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeFrontColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeLeftColor');
    const val = _toString(json['attributes']['mod_PaneltopEdgeLeftColor'], 'mod_PaneltopEdgeLeftColor');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeLeftColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeRightColor');
    const val = _toString(json['attributes']['mod_PaneltopEdgeRightColor'], 'mod_PaneltopEdgeRightColor');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeRightColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeVisBack');
    const val = _toBoolean(json['attributes']['mod_PaneltopEdgeVisBack'], 'mod_PaneltopEdgeVisBack');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeVisBack = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeVisFront');
    const val = _toBoolean(json['attributes']['mod_PaneltopEdgeVisFront'], 'mod_PaneltopEdgeVisFront');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeVisFront = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeVisLeft');
    const val = _toBoolean(json['attributes']['mod_PaneltopEdgeVisLeft'], 'mod_PaneltopEdgeVisLeft');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeVisLeft = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopEdgeVisRight');
    const val = _toBoolean(json['attributes']['mod_PaneltopEdgeVisRight'], 'mod_PaneltopEdgeVisRight');
    internal_leaveValidateVariant();
    this.mod_PaneltopEdgeVisRight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerFittingPanelDepth');
    const val = _toFloat(json['attributes']['mod_CeilingFillerFittingPanelDepth'], 'mod_CeilingFillerFittingPanelDepth');
    internal_leaveValidateVariant();
    this.mod_CeilingFillerFittingPanelDepth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerFittingPanelThk');
    const val = _toFloat(json['attributes']['mod_CeilingFillerFittingPanelThk'], 'mod_CeilingFillerFittingPanelThk');
    internal_leaveValidateVariant();
    this.mod_CeilingFillerFittingPanelThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerHeight');
    const val = _toFloat(json['attributes']['mod_CeilingFillerHeight'], 'mod_CeilingFillerHeight');
    internal_leaveValidateVariant();
    this.mod_CeilingFillerHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CeilingFillerThk');
    const val = _toFloat(json['attributes']['mod_CeilingFillerThk'], 'mod_CeilingFillerThk');
    internal_leaveValidateVariant();
    this.mod_CeilingFillerThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopColor');
    const val = _toString(json['attributes']['mod_PaneltopColor'], 'mod_PaneltopColor');
    internal_leaveValidateVariant();
    this.mod_PaneltopColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopThk');
    const val = _toFloat(json['attributes']['mod_PaneltopThk'], 'mod_PaneltopThk');
    internal_leaveValidateVariant();
    this.mod_PaneltopThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopConstruction');
    const val = _toString(json['attributes']['mod_PaneltopConstruction'], 'mod_PaneltopConstruction');
    internal_leaveValidateVariant();
    this.mod_PaneltopConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopOverhangFront');
    const val = _toFloat(json['attributes']['mod_PaneltopOverhangFront'], 'mod_PaneltopOverhangFront');
    internal_leaveValidateVariant();
    this.mod_PaneltopOverhangFront = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopProgram');
    const val = _toString(json['attributes']['mod_PaneltopProgram'], 'mod_PaneltopProgram');
    internal_leaveValidateVariant();
    this.mod_PaneltopProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopOversizeBack');
    const val = _toFloat(json['attributes']['mod_PaneltopOversizeBack'], 'mod_PaneltopOversizeBack');
    internal_leaveValidateVariant();
    this.mod_PaneltopOversizeBack = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHor');
    const val = _toFloat(json['attributes']['mod_FrontGapHor'], 'mod_FrontGapHor');
    internal_leaveValidateVariant();
    this.mod_FrontGapHor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
    const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
    internal_leaveValidateVariant();
    this.mod_FrontGapCarcase = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_GrainLogic');
    const val = _toString(json['attributes']['mod_GrainLogic'], 'mod_GrainLogic');
    internal_leaveValidateVariant();
    this.mod_GrainLogic = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_PaneltopEdgeVisBack === undefined) {
      this.mod_PaneltopEdgeVisBack = false;
    }
    if (this.mod_PaneltopEdgeVisFront === undefined) {
      this.mod_PaneltopEdgeVisFront = false;
    }
    if (this.mod_PaneltopEdgeVisLeft === undefined) {
      this.mod_PaneltopEdgeVisLeft = false;
    }
    if (this.mod_PaneltopEdgeVisRight === undefined) {
      this.mod_PaneltopEdgeVisRight = false;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mr_Paneltop";
    }
    if (this.mod_PaneltopColor === undefined) {
      this.mod_PaneltopColor = "240";
    }
    if (this.mod_PaneltopConstruction === undefined) {
      this.mod_PaneltopConstruction = "Construction1";
    }
    if (this.mod_PaneltopProgram === undefined) {
      this.mod_PaneltopProgram = "Style";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_PaneltopEdgeBackColor === undefined) {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
      // CUSTOMSCRIPT_mr_Paneltop_mod_PaneltopEdgeBackColor_SETDEFAULT
      this.mod_PaneltopEdgeBackColor = this.mod_PaneltopColor;
// ###############################################################
// ################### END CUSTOM SCRIPTS ########################
// ###############################################################
    }
    if (this.mod_PaneltopEdgeFrontColor === undefined) {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
      // CUSTOMSCRIPT_mr_Paneltop_mod_PaneltopEdgeFrontColor_SETDEFAULT
      this.mod_PaneltopEdgeFrontColor = this.mod_PaneltopColor;
// ###############################################################
// ################### END CUSTOM SCRIPTS ########################
// ###############################################################
    }
    if (this.mod_PaneltopEdgeLeftColor === undefined) {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
      // CUSTOMSCRIPT_mr_Paneltop_mod_PaneltopEdgeLeftColor_SETDEFAULT
      this.mod_PaneltopEdgeLeftColor = this.mod_PaneltopColor;
// ###############################################################
// ################### END CUSTOM SCRIPTS ########################
// ###############################################################
    }
    if (this.mod_PaneltopEdgeRightColor === undefined) {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
      // CUSTOMSCRIPT_mr_Paneltop_mod_PaneltopEdgeRightColor_SETDEFAULT
      this.mod_PaneltopEdgeRightColor = this.mod_PaneltopColor;
// ###############################################################
// ################### END CUSTOM SCRIPTS ########################
// ###############################################################
    }
    if (this.mod_CeilingFillerFittingPanelDepth === undefined) {
      this.mod_CeilingFillerFittingPanelDepth = this.g.basic_CeilingFillerFittingPanelDepth;
    }
    if (this.mod_CeilingFillerFittingPanelThk === undefined) {
      this.mod_CeilingFillerFittingPanelThk = this.g.basic_CeilingFillerFittingPanelThk;
    }
    if (this.mod_CeilingFillerHeight === undefined) {
      this.mod_CeilingFillerHeight = this.g.basic_CeilingFillerHeight;
    }
    if (this.mod_CeilingFillerThk === undefined) {
      this.mod_CeilingFillerThk = this.g.basic_CeilingFillerThk;
    }
    if (this.mod_PaneltopThk === undefined) {
      this.mod_PaneltopThk = this.g.basic_PaneltopThk;
    }
    if (this.mod_PaneltopOverhangFront === undefined) {
      this.mod_PaneltopOverhangFront = this.g.basic_PaneltopOverhangFront;
    }
    if (this.mod_PaneltopOversizeBack === undefined) {
      this.mod_PaneltopOversizeBack = this.g.basic_PaneltopOversizeBack;
    }
    if (this.mod_FrontGapHor === undefined) {
      this.mod_FrontGapHor = this.g.basic_FrontGapHor;
    }
    if (this.mod_FrontGapCarcase === undefined) {
      this.mod_FrontGapCarcase = this.g.basic_FrontGapCarcase;
    }
    if (this.mod_GrainLogic === undefined) {
      this.mod_GrainLogic = this.g.basic_GrainLogic;
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
  #manufacturerDataCompletionInternal = mr_Paneltop_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mr_Paneltop_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mr_Paneltop{
    this.afterDataCompletion();
    const adc = new OD_M_mr_Paneltop_NonNull(this);
    return adc;
  }

  addOD_M_mc_Paneltop01(index?: number): dc_mc_Paneltop01 {
    var m = new OD_M_mc_Paneltop01(this);
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
    this.mod_PaneltopEdgeBackColor_matrix = VariantValidation.mod_PaneltopEdgeBackColor(this, this);
    this.mod_PaneltopEdgeFrontColor_matrix = VariantValidation.mod_PaneltopEdgeFrontColor(this, this);
    this.mod_PaneltopEdgeLeftColor_matrix = VariantValidation.mod_PaneltopEdgeLeftColor(this, this);
    this.mod_PaneltopEdgeRightColor_matrix = VariantValidation.mod_PaneltopEdgeRightColor(this, this);
    this.mod_PaneltopEdgeVisBack_matrix = VariantValidation.mod_PaneltopEdgeVisBack(this, this);
    this.mod_PaneltopEdgeVisFront_matrix = VariantValidation.mod_PaneltopEdgeVisFront(this, this);
    this.mod_PaneltopEdgeVisLeft_matrix = VariantValidation.mod_PaneltopEdgeVisLeft(this, this);
    this.mod_PaneltopEdgeVisRight_matrix = VariantValidation.mod_PaneltopEdgeVisRight(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_CeilingFillerFittingPanelDepth_matrix = VariantValidation.mod_CeilingFillerFittingPanelDepth(this, this);
    this.mod_CeilingFillerFittingPanelThk_matrix = VariantValidation.mod_CeilingFillerFittingPanelThk(this, this);
    this.mod_CeilingFillerHeight_matrix = VariantValidation.mod_CeilingFillerHeight(this, this);
    this.mod_CeilingFillerThk_matrix = VariantValidation.mod_CeilingFillerThk(this, this);
    this.mod_PaneltopColor_matrix = VariantValidation.mod_PaneltopColor(this, this);
    this.mod_PaneltopThk_matrix = VariantValidation.mod_PaneltopThk(this, this);
    this.mod_PaneltopConstruction_matrix = VariantValidation.mod_PaneltopConstruction(this, this);
    this.mod_PaneltopOverhangFront_matrix = VariantValidation.mod_PaneltopOverhangFront(this, this);
    this.mod_PaneltopProgram_matrix = VariantValidation.mod_PaneltopProgram(this, this);
    this.mod_PaneltopOversizeBack_matrix = VariantValidation.mod_PaneltopOversizeBack(this, this);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mr_Paneltop_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mr_Paneltop_NonNull implements cbp_mr_Paneltop, adc_mr_Paneltop ,IPartParentsNonNull_mr_Paneltop {
  constructor(parent: OD_M_mr_Paneltop) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_mr_Paneltop;
  getGenerationContours(): GenerationContour[] { return this.#internalParent.getGenerationContours(); }
  getRoomContours(): RoomContour[] { return this.#internalParent.roomContours ?? []; }
  get _posData(): Map<string, string|number> { return this.#internalParent._posData; }

  get _id():string { return this.#internalParent._id; }
  get modId():string { return this.#internalParent.modId; }
  getOrigin():Matrix4 {
    return this.#internalParent.getOrigin();
  }
  getOriginPos():Vector3 {
    return this.#internalParent.getOriginPos();
  }
  createBuildPlan():void {
    this.#createBuildPlanInternal();
  }
  #createBuildPlanInternal = mr_Paneltop_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mr_Paneltop_afterDataCompletion;
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
  get mod_PaneltopEdgeBackColor(): string  {
    return this.#internalParent.mod_PaneltopEdgeBackColor!;
  }
  get mod_PaneltopEdgeFrontColor(): string  {
    return this.#internalParent.mod_PaneltopEdgeFrontColor!;
  }
  get mod_PaneltopEdgeLeftColor(): string  {
    return this.#internalParent.mod_PaneltopEdgeLeftColor!;
  }
  get mod_PaneltopEdgeRightColor(): string  {
    return this.#internalParent.mod_PaneltopEdgeRightColor!;
  }
  get mod_PaneltopEdgeVisBack(): boolean  {
    return this.#internalParent.mod_PaneltopEdgeVisBack!;
  }
  get mod_PaneltopEdgeVisFront(): boolean  {
    return this.#internalParent.mod_PaneltopEdgeVisFront!;
  }
  get mod_PaneltopEdgeVisLeft(): boolean  {
    return this.#internalParent.mod_PaneltopEdgeVisLeft!;
  }
  get mod_PaneltopEdgeVisRight(): boolean  {
    return this.#internalParent.mod_PaneltopEdgeVisRight!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_CeilingFillerFittingPanelDepth(): number  {
    return this.#internalParent.mod_CeilingFillerFittingPanelDepth!;
  }
  get mod_CeilingFillerFittingPanelThk(): number  {
    return this.#internalParent.mod_CeilingFillerFittingPanelThk!;
  }
  get mod_CeilingFillerHeight(): number  {
    return this.#internalParent.mod_CeilingFillerHeight!;
  }
  get mod_CeilingFillerThk(): number  {
    return this.#internalParent.mod_CeilingFillerThk!;
  }
  get mod_PaneltopColor(): string  {
    return this.#internalParent.mod_PaneltopColor!;
  }
  get mod_PaneltopColor_matrix(): IMatrix_mod_PaneltopColor {
    return this.#internalParent.mod_PaneltopColor_matrix!;
  }
  get mod_PaneltopThk(): number  {
    return this.#internalParent.mod_PaneltopThk!;
  }
  get mod_PaneltopConstruction(): string  {
    return this.#internalParent.mod_PaneltopConstruction!;
  }
  get mod_PaneltopOverhangFront(): number  {
    return this.#internalParent.mod_PaneltopOverhangFront!;
  }
  get mod_PaneltopProgram(): string  {
    return this.#internalParent.mod_PaneltopProgram!;
  }
  get mod_PaneltopProgram_matrix(): IMatrix_mod_PaneltopProgram {
    return this.#internalParent.mod_PaneltopProgram_matrix!;
  }
  get mod_PaneltopOversizeBack(): number  {
    return this.#internalParent.mod_PaneltopOversizeBack!;
  }
  get mod_FrontGapHor(): number  {
    return this.#internalParent.mod_FrontGapHor!;
  }
  get mod_FrontGapCarcase(): number  {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_LengthList(): number [] {
    return this.#internalParent.mod_LengthList!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
  addOD_M_mc_Paneltop01(index?: number): dc_mc_Paneltop01 {
    return this.#internalParent.addOD_M_mc_Paneltop01(index);
  }
}

