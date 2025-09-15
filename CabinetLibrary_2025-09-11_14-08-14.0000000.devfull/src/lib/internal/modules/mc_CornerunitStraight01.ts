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
import { IModParents_mr_CornerunitStraight } from '../mod-interfaces'
import { OD_M_mc_Panelblind01, dc_mc_Panelblind01 } from './mc_Panelblind01'
import { OD_M_mc_VertDivider01, dc_mc_VertDivider01 } from './mc_VertDivider01'
import { IModuleNonNull_mc_CornerunitStraight01,IModParents_mc_CornerunitStraight01,IModParents_mc_CornerunitStraight01_mc_Storageunit01,IPartParentsNonNull_mc_CornerunitStraight01,IPartParentsNonNull_mc_CornerunitStraight01_mc_Storageunit01} from '../mod-interfaces'
import {IModVar_mod_CarcaseColor,IModVarNonNull_mod_CarcaseColor,IModVar_mod_CarcaseDepth,IModVarNonNull_mod_CarcaseDepth,IModVar_mod_CarcaseHeight,IModVarNonNull_mod_CarcaseHeight,IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseOutsideColor,IModVarNonNull_mod_CarcaseOutsideColor,IModVar_mod_CarcaseOutsideProgram,IModVarNonNull_mod_CarcaseOutsideProgram,IModVar_mod_CarcaseProgram,IModVarNonNull_mod_CarcaseProgram,IModVar_mod_CarcaseWidth,IModVarNonNull_mod_CarcaseWidth,IModVar_mod_ShelfbtmThk,IModVarNonNull_mod_ShelfbtmThk,IModVar_mod_ShelftopThk,IModVarNonNull_mod_ShelftopThk,IModVar_mod_SidepanelleftThk,IModVarNonNull_mod_SidepanelleftThk,IModVar_mod_SidepanelrightThk,IModVarNonNull_mod_SidepanelrightThk,IModVar_mod_CornerunitStraightConstruction,IModVarNonNull_mod_CornerunitStraightConstruction,IModVar_mod_CornerunitFrontWidth,IModVarNonNull_mod_CornerunitFrontWidth,IModVar_mod_PanelblindThk,IModVarNonNull_mod_PanelblindThk,IModVar_mod_FingergripTop,IModVarNonNull_mod_FingergripTop,IModVar_mod_FingergripType,IModVarNonNull_mod_FingergripType,IModVar_mod_CarcaseDirection,IModVarNonNull_mod_CarcaseDirection,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_CarcaseConnectionLeftBtm,IModVarNonNull_mod_CarcaseConnectionLeftBtm,IModVar_mod_CarcaseConnectionLeftTop,IModVarNonNull_mod_CarcaseConnectionLeftTop,IModVar_mod_CarcaseConnectionRightBtm,IModVarNonNull_mod_CarcaseConnectionRightBtm,IModVar_mod_CarcaseConnectionRightTop,IModVarNonNull_mod_CarcaseConnectionRightTop,IModVar_mod_CarcasePartConnectionBackHor,IModVarNonNull_mod_CarcasePartConnectionBackHor,IModVar_mod_CarcasePartConnectionBackVert,IModVarNonNull_mod_CarcasePartConnectionBackVert,IModVar_mod_CarcasePartConnectionBtmVert,IModVarNonNull_mod_CarcasePartConnectionBtmVert,IModVar_mod_CarcasePartConnectionLeftHor,IModVarNonNull_mod_CarcasePartConnectionLeftHor,IModVar_mod_CarcasePartConnectionRightHor,IModVarNonNull_mod_CarcasePartConnectionRightHor,IModVar_mod_CarcasePartConnectionTopVert,IModVarNonNull_mod_CarcasePartConnectionTopVert,IModVar_mod_CornerunitInfo,IModVarNonNull_mod_CornerunitInfo,IModVar_mod_FingergripPos1,IModVarNonNull_mod_FingergripPos1,IModVar_mod_FingergripPos2,IModVarNonNull_mod_FingergripPos2,IModVar_mod_FingergripPos3,IModVarNonNull_mod_FingergripPos3,IModVar_mod_FingergripPos4,IModVarNonNull_mod_FingergripPos4,IModVar_mod_FingergripPos5,IModVarNonNull_mod_FingergripPos5,IModVar_mod_FingergripQtyMiddle,IModVarNonNull_mod_FingergripQtyMiddle,IModVar_mod_SidepanelmiddleShortWidth,IModVarNonNull_mod_SidepanelmiddleShortWidth,IModVar_mod_SidepanelmiddleThk,IModVarNonNull_mod_SidepanelmiddleThk,IModVar_mod_CleatThk,IModVarNonNull_mod_CleatThk,IModVar_mod_CleatWidth,IModVarNonNull_mod_CleatWidth,IModVar_mod_CarcaseSpaceDimension,IModVarNonNull_mod_CarcaseSpaceDimension,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseDepth, IMatrix_mod_CarcaseHeight, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseOutsideColor, IMatrix_mod_CarcaseOutsideProgram, IMatrix_mod_CarcaseProgram, IMatrix_mod_CarcaseWidth, IMatrix_mod_ShelfbtmThk, IMatrix_mod_ShelftopThk, IMatrix_mod_SidepanelleftThk, IMatrix_mod_SidepanelrightThk, IMatrix_mod_CornerunitStraightConstruction, IMatrix_mod_CornerunitFrontWidth, IMatrix_mod_PanelblindThk, IMatrix_mod_FingergripTop, IMatrix_mod_FingergripType, IMatrix_mod_CarcaseDirection, IMatrix_mod_ModuleName, IMatrix_mod_CarcaseConnectionLeftBtm, IMatrix_mod_CarcaseConnectionLeftTop, IMatrix_mod_CarcaseConnectionRightBtm, IMatrix_mod_CarcaseConnectionRightTop, IMatrix_mod_CarcasePartConnectionBackHor, IMatrix_mod_CarcasePartConnectionBackVert, IMatrix_mod_CarcasePartConnectionBtmVert, IMatrix_mod_CarcasePartConnectionLeftHor, IMatrix_mod_CarcasePartConnectionRightHor, IMatrix_mod_CarcasePartConnectionTopVert, IMatrix_mod_FingergripPos1, IMatrix_mod_FingergripPos2, IMatrix_mod_FingergripPos3, IMatrix_mod_FingergripPos4, IMatrix_mod_FingergripPos5, IMatrix_mod_FingergripQtyMiddle, IMatrix_mod_SidepanelmiddleShortWidth, IMatrix_mod_SidepanelmiddleThk, IMatrix_mod_CleatThk, IMatrix_mod_CleatWidth, IMatrix_mod_GrainLogic} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mc_CornerunitStraight01_createBuildPlan, mc_CornerunitStraight01_afterDataCompletion, mc_CornerunitStraight01_manufacturerDataCompletion } from '../../modules/mc_CornerunitStraight01';

export interface cbp_mc_CornerunitStraight01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_ShelftopThk, IModVarNonNull_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_CornerunitStraightConstruction, IModVarNonNull_mod_CornerunitFrontWidth, IModVarNonNull_mod_PanelblindThk, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FingergripType, IModVarNonNull_mod_CarcaseDirection, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseConnectionLeftBtm, IModVarNonNull_mod_CarcaseConnectionLeftTop, IModVarNonNull_mod_CarcaseConnectionRightBtm, IModVarNonNull_mod_CarcaseConnectionRightTop, IModVarNonNull_mod_CarcasePartConnectionBackHor, IModVarNonNull_mod_CarcasePartConnectionBackVert, IModVarNonNull_mod_CarcasePartConnectionBtmVert, IModVarNonNull_mod_CarcasePartConnectionLeftHor, IModVarNonNull_mod_CarcasePartConnectionRightHor, IModVarNonNull_mod_CarcasePartConnectionTopVert, IModVarNonNull_mod_CornerunitInfo, IModVarNonNull_mod_FingergripPos1, IModVarNonNull_mod_FingergripPos2, IModVarNonNull_mod_FingergripPos3, IModVarNonNull_mod_FingergripPos4, IModVarNonNull_mod_FingergripPos5, IModVarNonNull_mod_FingergripQtyMiddle, IModVarNonNull_mod_SidepanelmiddleShortWidth, IModVarNonNull_mod_SidepanelmiddleThk, IModVarNonNull_mod_CleatThk, IModVarNonNull_mod_CleatWidth, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_GrainLogic {
  parent: IModParents_mr_CornerunitStraight;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
  ct_tab_CornerunitStraightConstruction: ct2_tab_CornerunitStraightConstruction;
}

export interface dc_mc_CornerunitStraight01 extends IModBaseProp
, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseId, IModVar_mod_CarcaseOutsideColor, IModVar_mod_CarcaseOutsideProgram, IModVar_mod_CarcaseProgram, IModVar_mod_CarcaseWidth, IModVar_mod_ShelfbtmThk, IModVar_mod_ShelftopThk, IModVar_mod_SidepanelleftThk, IModVar_mod_SidepanelrightThk, IModVar_mod_CornerunitStraightConstruction, IModVar_mod_CornerunitFrontWidth, IModVar_mod_PanelblindThk, IModVar_mod_FingergripTop, IModVar_mod_FingergripType, IModVar_mod_CarcaseDirection, IModVar_mod_ModuleName, IModVar_mod_CarcaseConnectionLeftBtm, IModVar_mod_CarcaseConnectionLeftTop, IModVar_mod_CarcaseConnectionRightBtm, IModVar_mod_CarcaseConnectionRightTop, IModVar_mod_CarcasePartConnectionBackHor, IModVar_mod_CarcasePartConnectionBackVert, IModVar_mod_CarcasePartConnectionBtmVert, IModVar_mod_CarcasePartConnectionLeftHor, IModVar_mod_CarcasePartConnectionRightHor, IModVar_mod_CarcasePartConnectionTopVert, IModVar_mod_CornerunitInfo, IModVar_mod_FingergripPos1, IModVar_mod_FingergripPos2, IModVar_mod_FingergripPos3, IModVar_mod_FingergripPos4, IModVar_mod_FingergripPos5, IModVar_mod_FingergripQtyMiddle, IModVar_mod_SidepanelmiddleShortWidth, IModVar_mod_SidepanelmiddleThk, IModVar_mod_CleatThk, IModVar_mod_CleatWidth, IModVar_mod_CarcaseSpaceDimension, IModVar_mod_GrainLogic {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_CornerunitStraight01;
  parent: IModParents_mr_CornerunitStraight;
  addOD_M_mc_Panelblind01(index?: number): dc_mc_Panelblind01;
  addOD_M_mc_VertDivider01(index?: number): dc_mc_VertDivider01;
}

export interface adc_mc_CornerunitStraight01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_ShelftopThk, IModVarNonNull_mod_SidepanelleftThk, IModVarNonNull_mod_SidepanelrightThk, IModVarNonNull_mod_CornerunitStraightConstruction, IModVarNonNull_mod_CornerunitFrontWidth, IModVarNonNull_mod_PanelblindThk, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FingergripType, IModVarNonNull_mod_CarcaseDirection, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseConnectionLeftBtm, IModVarNonNull_mod_CarcaseConnectionLeftTop, IModVarNonNull_mod_CarcaseConnectionRightBtm, IModVarNonNull_mod_CarcaseConnectionRightTop, IModVarNonNull_mod_CarcasePartConnectionBackHor, IModVarNonNull_mod_CarcasePartConnectionBackVert, IModVarNonNull_mod_CarcasePartConnectionBtmVert, IModVarNonNull_mod_CarcasePartConnectionLeftHor, IModVarNonNull_mod_CarcasePartConnectionRightHor, IModVarNonNull_mod_CarcasePartConnectionTopVert, IModVarNonNull_mod_CornerunitInfo, IModVarNonNull_mod_FingergripPos1, IModVarNonNull_mod_FingergripPos2, IModVarNonNull_mod_FingergripPos3, IModVarNonNull_mod_FingergripPos4, IModVarNonNull_mod_FingergripPos5, IModVarNonNull_mod_FingergripQtyMiddle, IModVarNonNull_mod_SidepanelmiddleShortWidth, IModVarNonNull_mod_SidepanelmiddleThk, IModVarNonNull_mod_CleatThk, IModVarNonNull_mod_CleatWidth, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_GrainLogic {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_Panelblind01(index?: number): dc_mc_Panelblind01;
  addOD_M_mc_VertDivider01(index?: number): dc_mc_VertDivider01;
  ct_tab_CornerunitStraightConstruction: ct2_tab_CornerunitStraightConstruction;
}

export class OD_M_mc_CornerunitStraight01 extends OD_Base  implements dc_mc_CornerunitStraight01
,IModParents_mc_CornerunitStraight01,IModParents_mc_CornerunitStraight01_mc_Storageunit01
,IModVar_mod_CarcaseColor,IModVar_mod_CarcaseDepth,IModVar_mod_CarcaseHeight,IModVar_mod_CarcaseId,IModVar_mod_CarcaseOutsideColor,IModVar_mod_CarcaseOutsideProgram,IModVar_mod_CarcaseProgram,IModVar_mod_CarcaseWidth,IModVar_mod_ShelfbtmThk,IModVar_mod_ShelftopThk,IModVar_mod_SidepanelleftThk,IModVar_mod_SidepanelrightThk,IModVar_mod_CornerunitStraightConstruction,IModVar_mod_CornerunitFrontWidth,IModVar_mod_PanelblindThk,IModVar_mod_FingergripTop,IModVar_mod_FingergripType,IModVar_mod_CarcaseDirection,IModVar_mod_ModuleName,IModVar_mod_CarcaseConnectionLeftBtm,IModVar_mod_CarcaseConnectionLeftTop,IModVar_mod_CarcaseConnectionRightBtm,IModVar_mod_CarcaseConnectionRightTop,IModVar_mod_CarcasePartConnectionBackHor,IModVar_mod_CarcasePartConnectionBackVert,IModVar_mod_CarcasePartConnectionBtmVert,IModVar_mod_CarcasePartConnectionLeftHor,IModVar_mod_CarcasePartConnectionRightHor,IModVar_mod_CarcasePartConnectionTopVert,IModVar_mod_CornerunitInfo,IModVar_mod_FingergripPos1,IModVar_mod_FingergripPos2,IModVar_mod_FingergripPos3,IModVar_mod_FingergripPos4,IModVar_mod_FingergripPos5,IModVar_mod_FingergripQtyMiddle,IModVar_mod_SidepanelmiddleShortWidth,IModVar_mod_SidepanelmiddleThk,IModVar_mod_CleatThk,IModVar_mod_CleatWidth,IModVar_mod_CarcaseSpaceDimension,IModVar_mod_GrainLogic
 {
  constructor(parent: IModParents_mr_CornerunitStraight, manufacturerMode?:boolean) {
    super('mc_CornerunitStraight01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_CornerunitStraight01_NonNull(this);
  }
  parent: IModParents_mr_CornerunitStraight;
  _selfNonNull: OD_M_mc_CornerunitStraight01_NonNull;

  override variants:string[] = ['mod_CarcaseColor','mod_CarcaseDepth','mod_CarcaseHeight','mod_CarcaseId','mod_CarcaseOutsideColor','mod_CarcaseOutsideProgram','mod_CarcaseProgram','mod_CarcaseWidth','mod_ShelfbtmThk','mod_ShelftopThk','mod_SidepanelleftThk','mod_SidepanelrightThk','mod_CornerunitStraightConstruction','mod_CornerunitFrontWidth','mod_PanelblindThk','mod_FingergripTop','mod_FingergripType','mod_CarcaseDirection','mod_ModuleName','mod_CarcaseConnectionLeftBtm','mod_CarcaseConnectionLeftTop','mod_CarcaseConnectionRightBtm','mod_CarcaseConnectionRightTop','mod_CarcasePartConnectionBackHor','mod_CarcasePartConnectionBackVert','mod_CarcasePartConnectionBtmVert','mod_CarcasePartConnectionLeftHor','mod_CarcasePartConnectionRightHor','mod_CarcasePartConnectionTopVert','mod_CornerunitInfo','mod_FingergripPos1','mod_FingergripPos2','mod_FingergripPos3','mod_FingergripPos4','mod_FingergripPos5','mod_FingergripQtyMiddle','mod_SidepanelmiddleShortWidth','mod_SidepanelmiddleThk','mod_CleatThk','mod_CleatWidth','mod_CarcaseSpaceDimension','mod_GrainLogic',];
  #mod_CarcaseColor?: string;
  get mod_CarcaseColor(): string | undefined { return this.#mod_CarcaseColor}
  set mod_CarcaseColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseColor === value) return;
    this.#mod_CarcaseColor = value;
  }

  mod_CarcaseColor_matrix?: IMatrix_mod_CarcaseColor;
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
  #mod_CarcaseHeight?: number;
  get mod_CarcaseHeight(): number | undefined { return this.#mod_CarcaseHeight}
  set mod_CarcaseHeight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseHeight === value) return;
    this.#mod_CarcaseHeight = value;
  }

  mod_CarcaseHeight_matrix?: IMatrix_mod_CarcaseHeight;
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
  #mod_CarcaseOutsideColor?: string;
  get mod_CarcaseOutsideColor(): string | undefined { return this.#mod_CarcaseOutsideColor}
  set mod_CarcaseOutsideColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseOutsideColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseOutsideColor === value) return;
    this.#mod_CarcaseOutsideColor = value;
  }

  mod_CarcaseOutsideColor_matrix?: IMatrix_mod_CarcaseOutsideColor;
  #mod_CarcaseOutsideProgram?: string;
  get mod_CarcaseOutsideProgram(): string | undefined { return this.#mod_CarcaseOutsideProgram}
  set mod_CarcaseOutsideProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseOutsideProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseOutsideProgram === value) return;
    this.#mod_CarcaseOutsideProgram = value;
  }

  mod_CarcaseOutsideProgram_matrix?: IMatrix_mod_CarcaseOutsideProgram;
  #mod_CarcaseProgram?: string;
  get mod_CarcaseProgram(): string | undefined { return this.#mod_CarcaseProgram}
  set mod_CarcaseProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseProgram === value) return;
    this.#mod_CarcaseProgram = value;
  }

  mod_CarcaseProgram_matrix?: IMatrix_mod_CarcaseProgram;
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
  #mod_ShelftopThk?: number;
  get mod_ShelftopThk(): number | undefined { return this.#mod_ShelftopThk}
  set mod_ShelftopThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelftopThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelftopThk === value) return;
    this.#mod_ShelftopThk = value;
  }

  mod_ShelftopThk_matrix?: IMatrix_mod_ShelftopThk;
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
  #mod_CornerunitStraightConstruction?: string;
  get mod_CornerunitStraightConstruction(): string | undefined { return this.#mod_CornerunitStraightConstruction}
  set mod_CornerunitStraightConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CornerunitStraightConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CornerunitStraightConstruction === value) return;
    this.#mod_CornerunitStraightConstruction = value;
  }

  mod_CornerunitStraightConstruction_matrix?: IMatrix_mod_CornerunitStraightConstruction;
  #mod_CornerunitFrontWidth?: number;
  get mod_CornerunitFrontWidth(): number | undefined { return this.#mod_CornerunitFrontWidth}
  set mod_CornerunitFrontWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CornerunitFrontWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CornerunitFrontWidth === value) return;
    this.#mod_CornerunitFrontWidth = value;
  }

  mod_CornerunitFrontWidth_matrix?: IMatrix_mod_CornerunitFrontWidth;
  #mod_PanelblindThk?: number;
  get mod_PanelblindThk(): number | undefined { return this.#mod_PanelblindThk}
  set mod_PanelblindThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PanelblindThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PanelblindThk === value) return;
    this.#mod_PanelblindThk = value;
  }

  mod_PanelblindThk_matrix?: IMatrix_mod_PanelblindThk;
  #mod_FingergripTop?: boolean;
  get mod_FingergripTop(): boolean | undefined { return this.#mod_FingergripTop}
  set mod_FingergripTop(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripTop === value) return;
    this.#mod_FingergripTop = value;
  }

  mod_FingergripTop_matrix?: IMatrix_mod_FingergripTop;
  #mod_FingergripType?: string;
  get mod_FingergripType(): string | undefined { return this.#mod_FingergripType}
  set mod_FingergripType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripType === value) return;
    this.#mod_FingergripType = value;
  }

  mod_FingergripType_matrix?: IMatrix_mod_FingergripType;
  #mod_CarcaseDirection?: string;
  get mod_CarcaseDirection(): string | undefined { return this.#mod_CarcaseDirection}
  set mod_CarcaseDirection(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseDirection' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseDirection === value) return;
    this.#mod_CarcaseDirection = value;
  }

  mod_CarcaseDirection_matrix?: IMatrix_mod_CarcaseDirection;
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
  #mod_CarcaseConnectionLeftBtm?: string;
  get mod_CarcaseConnectionLeftBtm(): string | undefined { return this.#mod_CarcaseConnectionLeftBtm}
  set mod_CarcaseConnectionLeftBtm(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseConnectionLeftBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseConnectionLeftBtm === value) return;
    this.#mod_CarcaseConnectionLeftBtm = value;
  }

  mod_CarcaseConnectionLeftBtm_matrix?: IMatrix_mod_CarcaseConnectionLeftBtm;
  #mod_CarcaseConnectionLeftTop?: string;
  get mod_CarcaseConnectionLeftTop(): string | undefined { return this.#mod_CarcaseConnectionLeftTop}
  set mod_CarcaseConnectionLeftTop(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseConnectionLeftTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseConnectionLeftTop === value) return;
    this.#mod_CarcaseConnectionLeftTop = value;
  }

  mod_CarcaseConnectionLeftTop_matrix?: IMatrix_mod_CarcaseConnectionLeftTop;
  #mod_CarcaseConnectionRightBtm?: string;
  get mod_CarcaseConnectionRightBtm(): string | undefined { return this.#mod_CarcaseConnectionRightBtm}
  set mod_CarcaseConnectionRightBtm(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseConnectionRightBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseConnectionRightBtm === value) return;
    this.#mod_CarcaseConnectionRightBtm = value;
  }

  mod_CarcaseConnectionRightBtm_matrix?: IMatrix_mod_CarcaseConnectionRightBtm;
  #mod_CarcaseConnectionRightTop?: string;
  get mod_CarcaseConnectionRightTop(): string | undefined { return this.#mod_CarcaseConnectionRightTop}
  set mod_CarcaseConnectionRightTop(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseConnectionRightTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseConnectionRightTop === value) return;
    this.#mod_CarcaseConnectionRightTop = value;
  }

  mod_CarcaseConnectionRightTop_matrix?: IMatrix_mod_CarcaseConnectionRightTop;
  #mod_CarcasePartConnectionBackHor?: string;
  get mod_CarcasePartConnectionBackHor(): string | undefined { return this.#mod_CarcasePartConnectionBackHor}
  set mod_CarcasePartConnectionBackHor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcasePartConnectionBackHor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcasePartConnectionBackHor === value) return;
    this.#mod_CarcasePartConnectionBackHor = value;
  }

  mod_CarcasePartConnectionBackHor_matrix?: IMatrix_mod_CarcasePartConnectionBackHor;
  #mod_CarcasePartConnectionBackVert?: string;
  get mod_CarcasePartConnectionBackVert(): string | undefined { return this.#mod_CarcasePartConnectionBackVert}
  set mod_CarcasePartConnectionBackVert(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcasePartConnectionBackVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcasePartConnectionBackVert === value) return;
    this.#mod_CarcasePartConnectionBackVert = value;
  }

  mod_CarcasePartConnectionBackVert_matrix?: IMatrix_mod_CarcasePartConnectionBackVert;
  #mod_CarcasePartConnectionBtmVert?: string;
  get mod_CarcasePartConnectionBtmVert(): string | undefined { return this.#mod_CarcasePartConnectionBtmVert}
  set mod_CarcasePartConnectionBtmVert(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcasePartConnectionBtmVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcasePartConnectionBtmVert === value) return;
    this.#mod_CarcasePartConnectionBtmVert = value;
  }

  mod_CarcasePartConnectionBtmVert_matrix?: IMatrix_mod_CarcasePartConnectionBtmVert;
  #mod_CarcasePartConnectionLeftHor?: string;
  get mod_CarcasePartConnectionLeftHor(): string | undefined { return this.#mod_CarcasePartConnectionLeftHor}
  set mod_CarcasePartConnectionLeftHor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcasePartConnectionLeftHor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcasePartConnectionLeftHor === value) return;
    this.#mod_CarcasePartConnectionLeftHor = value;
  }

  mod_CarcasePartConnectionLeftHor_matrix?: IMatrix_mod_CarcasePartConnectionLeftHor;
  #mod_CarcasePartConnectionRightHor?: string;
  get mod_CarcasePartConnectionRightHor(): string | undefined { return this.#mod_CarcasePartConnectionRightHor}
  set mod_CarcasePartConnectionRightHor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcasePartConnectionRightHor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcasePartConnectionRightHor === value) return;
    this.#mod_CarcasePartConnectionRightHor = value;
  }

  mod_CarcasePartConnectionRightHor_matrix?: IMatrix_mod_CarcasePartConnectionRightHor;
  #mod_CarcasePartConnectionTopVert?: string;
  get mod_CarcasePartConnectionTopVert(): string | undefined { return this.#mod_CarcasePartConnectionTopVert}
  set mod_CarcasePartConnectionTopVert(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcasePartConnectionTopVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcasePartConnectionTopVert === value) return;
    this.#mod_CarcasePartConnectionTopVert = value;
  }

  mod_CarcasePartConnectionTopVert_matrix?: IMatrix_mod_CarcasePartConnectionTopVert;
  #mod_CornerunitInfo: string[] = [];
  get mod_CornerunitInfo(): string[] { return this.#mod_CornerunitInfo;}
  #mod_FingergripPos1?: number;
  get mod_FingergripPos1(): number | undefined { return this.#mod_FingergripPos1}
  set mod_FingergripPos1(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripPos1' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripPos1 === value) return;
    this.#mod_FingergripPos1 = value;
  }

  mod_FingergripPos1_matrix?: IMatrix_mod_FingergripPos1;
  #mod_FingergripPos2?: number;
  get mod_FingergripPos2(): number | undefined { return this.#mod_FingergripPos2}
  set mod_FingergripPos2(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripPos2' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripPos2 === value) return;
    this.#mod_FingergripPos2 = value;
  }

  mod_FingergripPos2_matrix?: IMatrix_mod_FingergripPos2;
  #mod_FingergripPos3?: number;
  get mod_FingergripPos3(): number | undefined { return this.#mod_FingergripPos3}
  set mod_FingergripPos3(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripPos3' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripPos3 === value) return;
    this.#mod_FingergripPos3 = value;
  }

  mod_FingergripPos3_matrix?: IMatrix_mod_FingergripPos3;
  #mod_FingergripPos4?: number;
  get mod_FingergripPos4(): number | undefined { return this.#mod_FingergripPos4}
  set mod_FingergripPos4(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripPos4' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripPos4 === value) return;
    this.#mod_FingergripPos4 = value;
  }

  mod_FingergripPos4_matrix?: IMatrix_mod_FingergripPos4;
  #mod_FingergripPos5?: number;
  get mod_FingergripPos5(): number | undefined { return this.#mod_FingergripPos5}
  set mod_FingergripPos5(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripPos5' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripPos5 === value) return;
    this.#mod_FingergripPos5 = value;
  }

  mod_FingergripPos5_matrix?: IMatrix_mod_FingergripPos5;
  #mod_FingergripQtyMiddle?: number;
  get mod_FingergripQtyMiddle(): number | undefined { return this.#mod_FingergripQtyMiddle}
  set mod_FingergripQtyMiddle(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripQtyMiddle' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripQtyMiddle === value) return;
    this.#mod_FingergripQtyMiddle = value;
  }

  mod_FingergripQtyMiddle_matrix?: IMatrix_mod_FingergripQtyMiddle;
  #mod_SidepanelmiddleShortWidth?: number;
  get mod_SidepanelmiddleShortWidth(): number | undefined { return this.#mod_SidepanelmiddleShortWidth}
  set mod_SidepanelmiddleShortWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_SidepanelmiddleShortWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_SidepanelmiddleShortWidth === value) return;
    this.#mod_SidepanelmiddleShortWidth = value;
  }

  mod_SidepanelmiddleShortWidth_matrix?: IMatrix_mod_SidepanelmiddleShortWidth;
  #mod_SidepanelmiddleThk?: number;
  get mod_SidepanelmiddleThk(): number | undefined { return this.#mod_SidepanelmiddleThk}
  set mod_SidepanelmiddleThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_SidepanelmiddleThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_SidepanelmiddleThk === value) return;
    this.#mod_SidepanelmiddleThk = value;
  }

  mod_SidepanelmiddleThk_matrix?: IMatrix_mod_SidepanelmiddleThk;
  #mod_CleatThk?: number;
  get mod_CleatThk(): number | undefined { return this.#mod_CleatThk}
  set mod_CleatThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CleatThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CleatThk === value) return;
    this.#mod_CleatThk = value;
  }

  mod_CleatThk_matrix?: IMatrix_mod_CleatThk;
  #mod_CleatWidth?: number;
  get mod_CleatWidth(): number | undefined { return this.#mod_CleatWidth}
  set mod_CleatWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CleatWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CleatWidth === value) return;
    this.#mod_CleatWidth = value;
  }

  mod_CleatWidth_matrix?: IMatrix_mod_CleatWidth;
  #mod_CarcaseSpaceDimension: string[] = [];
  get mod_CarcaseSpaceDimension(): string[] { return this.#mod_CarcaseSpaceDimension;}
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
  res.set('mod_CarcaseColor', this.mod_CarcaseColor);
  res.set('mod_CarcaseDepth', this.mod_CarcaseDepth);
  res.set('mod_CarcaseHeight', this.mod_CarcaseHeight);
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseOutsideColor', this.mod_CarcaseOutsideColor);
  res.set('mod_CarcaseOutsideProgram', this.mod_CarcaseOutsideProgram);
  res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
  res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
  res.set('mod_ShelfbtmThk', this.mod_ShelfbtmThk);
  res.set('mod_ShelftopThk', this.mod_ShelftopThk);
  res.set('mod_SidepanelleftThk', this.mod_SidepanelleftThk);
  res.set('mod_SidepanelrightThk', this.mod_SidepanelrightThk);
  res.set('mod_CornerunitStraightConstruction', this.mod_CornerunitStraightConstruction);
  res.set('mod_CornerunitFrontWidth', this.mod_CornerunitFrontWidth);
  res.set('mod_PanelblindThk', this.mod_PanelblindThk);
  res.set('mod_FingergripTop', this.mod_FingergripTop);
  res.set('mod_FingergripType', this.mod_FingergripType);
  res.set('mod_CarcaseDirection', this.mod_CarcaseDirection);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_CarcaseConnectionLeftBtm', this.mod_CarcaseConnectionLeftBtm);
  res.set('mod_CarcaseConnectionLeftTop', this.mod_CarcaseConnectionLeftTop);
  res.set('mod_CarcaseConnectionRightBtm', this.mod_CarcaseConnectionRightBtm);
  res.set('mod_CarcaseConnectionRightTop', this.mod_CarcaseConnectionRightTop);
  res.set('mod_CarcasePartConnectionBackHor', this.mod_CarcasePartConnectionBackHor);
  res.set('mod_CarcasePartConnectionBackVert', this.mod_CarcasePartConnectionBackVert);
  res.set('mod_CarcasePartConnectionBtmVert', this.mod_CarcasePartConnectionBtmVert);
  res.set('mod_CarcasePartConnectionLeftHor', this.mod_CarcasePartConnectionLeftHor);
  res.set('mod_CarcasePartConnectionRightHor', this.mod_CarcasePartConnectionRightHor);
  res.set('mod_CarcasePartConnectionTopVert', this.mod_CarcasePartConnectionTopVert);
  res.set('mod_CornerunitInfo', JSON.stringify(this.mod_CornerunitInfo));
  res.set('mod_FingergripPos1', this.mod_FingergripPos1);
  res.set('mod_FingergripPos2', this.mod_FingergripPos2);
  res.set('mod_FingergripPos3', this.mod_FingergripPos3);
  res.set('mod_FingergripPos4', this.mod_FingergripPos4);
  res.set('mod_FingergripPos5', this.mod_FingergripPos5);
  res.set('mod_FingergripQtyMiddle', this.mod_FingergripQtyMiddle);
  res.set('mod_SidepanelmiddleShortWidth', this.mod_SidepanelmiddleShortWidth);
  res.set('mod_SidepanelmiddleThk', this.mod_SidepanelmiddleThk);
  res.set('mod_CleatThk', this.mod_CleatThk);
  res.set('mod_CleatWidth', this.mod_CleatWidth);
  res.set('mod_CarcaseSpaceDimension', JSON.stringify(this.mod_CarcaseSpaceDimension));
  res.set('mod_GrainLogic', this.mod_GrainLogic);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseColor');
    const val = _toString(json['attributes']['mod_CarcaseColor'], 'mod_CarcaseColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDepth');
    const val = _toFloat(json['attributes']['mod_CarcaseDepth'], 'mod_CarcaseDepth');
    internal_leaveValidateVariant();
    this.mod_CarcaseDepth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseHeight');
    const val = _toFloat(json['attributes']['mod_CarcaseHeight'], 'mod_CarcaseHeight');
    internal_leaveValidateVariant();
    this.mod_CarcaseHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseOutsideColor');
    const val = _toString(json['attributes']['mod_CarcaseOutsideColor'], 'mod_CarcaseOutsideColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseOutsideColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseOutsideProgram');
    const val = _toString(json['attributes']['mod_CarcaseOutsideProgram'], 'mod_CarcaseOutsideProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseOutsideProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
    const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseWidth');
    const val = _toFloat(json['attributes']['mod_CarcaseWidth'], 'mod_CarcaseWidth');
    internal_leaveValidateVariant();
    this.mod_CarcaseWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfbtmThk');
    const val = _toFloat(json['attributes']['mod_ShelfbtmThk'], 'mod_ShelfbtmThk');
    internal_leaveValidateVariant();
    this.mod_ShelfbtmThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelftopThk');
    const val = _toFloat(json['attributes']['mod_ShelftopThk'], 'mod_ShelftopThk');
    internal_leaveValidateVariant();
    this.mod_ShelftopThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelleftThk');
    const val = _toFloat(json['attributes']['mod_SidepanelleftThk'], 'mod_SidepanelleftThk');
    internal_leaveValidateVariant();
    this.mod_SidepanelleftThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelrightThk');
    const val = _toFloat(json['attributes']['mod_SidepanelrightThk'], 'mod_SidepanelrightThk');
    internal_leaveValidateVariant();
    this.mod_SidepanelrightThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CornerunitStraightConstruction');
    const val = _toString(json['attributes']['mod_CornerunitStraightConstruction'], 'mod_CornerunitStraightConstruction');
    internal_leaveValidateVariant();
    this.mod_CornerunitStraightConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CornerunitFrontWidth');
    const val = _toFloat(json['attributes']['mod_CornerunitFrontWidth'], 'mod_CornerunitFrontWidth');
    internal_leaveValidateVariant();
    this.mod_CornerunitFrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PanelblindThk');
    const val = _toFloat(json['attributes']['mod_PanelblindThk'], 'mod_PanelblindThk');
    internal_leaveValidateVariant();
    this.mod_PanelblindThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTop');
    const val = _toBoolean(json['attributes']['mod_FingergripTop'], 'mod_FingergripTop');
    internal_leaveValidateVariant();
    this.mod_FingergripTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripType');
    const val = _toString(json['attributes']['mod_FingergripType'], 'mod_FingergripType');
    internal_leaveValidateVariant();
    this.mod_FingergripType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDirection');
    const val = _toString(json['attributes']['mod_CarcaseDirection'], 'mod_CarcaseDirection');
    internal_leaveValidateVariant();
    this.mod_CarcaseDirection = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionLeftBtm');
    const val = _toString(json['attributes']['mod_CarcaseConnectionLeftBtm'], 'mod_CarcaseConnectionLeftBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionLeftBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionLeftTop');
    const val = _toString(json['attributes']['mod_CarcaseConnectionLeftTop'], 'mod_CarcaseConnectionLeftTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionLeftTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionRightBtm');
    const val = _toString(json['attributes']['mod_CarcaseConnectionRightBtm'], 'mod_CarcaseConnectionRightBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionRightBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionRightTop');
    const val = _toString(json['attributes']['mod_CarcaseConnectionRightTop'], 'mod_CarcaseConnectionRightTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionRightTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionBackHor');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionBackHor'], 'mod_CarcasePartConnectionBackHor');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionBackHor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionBackVert');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionBackVert'], 'mod_CarcasePartConnectionBackVert');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionBackVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionBtmVert');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionBtmVert'], 'mod_CarcasePartConnectionBtmVert');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionBtmVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionLeftHor');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionLeftHor'], 'mod_CarcasePartConnectionLeftHor');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionLeftHor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionRightHor');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionRightHor'], 'mod_CarcasePartConnectionRightHor');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionRightHor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionTopVert');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionTopVert'], 'mod_CarcasePartConnectionTopVert');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionTopVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripPos1');
    const val = _toFloat(json['attributes']['mod_FingergripPos1'], 'mod_FingergripPos1');
    internal_leaveValidateVariant();
    this.mod_FingergripPos1 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripPos2');
    const val = _toFloat(json['attributes']['mod_FingergripPos2'], 'mod_FingergripPos2');
    internal_leaveValidateVariant();
    this.mod_FingergripPos2 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripPos3');
    const val = _toFloat(json['attributes']['mod_FingergripPos3'], 'mod_FingergripPos3');
    internal_leaveValidateVariant();
    this.mod_FingergripPos3 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripPos4');
    const val = _toFloat(json['attributes']['mod_FingergripPos4'], 'mod_FingergripPos4');
    internal_leaveValidateVariant();
    this.mod_FingergripPos4 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripPos5');
    const val = _toFloat(json['attributes']['mod_FingergripPos5'], 'mod_FingergripPos5');
    internal_leaveValidateVariant();
    this.mod_FingergripPos5 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripQtyMiddle');
    const val = _toInt(json['attributes']['mod_FingergripQtyMiddle'], 'mod_FingergripQtyMiddle');
    internal_leaveValidateVariant();
    this.mod_FingergripQtyMiddle = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelmiddleShortWidth');
    const val = _toFloat(json['attributes']['mod_SidepanelmiddleShortWidth'], 'mod_SidepanelmiddleShortWidth');
    internal_leaveValidateVariant();
    this.mod_SidepanelmiddleShortWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelmiddleThk');
    const val = _toFloat(json['attributes']['mod_SidepanelmiddleThk'], 'mod_SidepanelmiddleThk');
    internal_leaveValidateVariant();
    this.mod_SidepanelmiddleThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CleatThk');
    const val = _toFloat(json['attributes']['mod_CleatThk'], 'mod_CleatThk');
    internal_leaveValidateVariant();
    this.mod_CleatThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CleatWidth');
    const val = _toFloat(json['attributes']['mod_CleatWidth'], 'mod_CleatWidth');
    internal_leaveValidateVariant();
    this.mod_CleatWidth = val; }
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
    if (this.mod_CarcaseColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseColor')) {
          let pv = <IModVar_mod_CarcaseColor>s;
          if (pv.mod_CarcaseColor !== undefined) {
            this.mod_CarcaseColor = (<IModVar_mod_CarcaseColor>s).mod_CarcaseColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
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
    if (this.mod_CarcaseHeight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseHeight')) {
          let pv = <IModVar_mod_CarcaseHeight>s;
          if (pv.mod_CarcaseHeight !== undefined) {
            this.mod_CarcaseHeight = (<IModVar_mod_CarcaseHeight>s).mod_CarcaseHeight;
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
    if (this.mod_CarcaseOutsideColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseOutsideColor')) {
          let pv = <IModVar_mod_CarcaseOutsideColor>s;
          if (pv.mod_CarcaseOutsideColor !== undefined) {
            this.mod_CarcaseOutsideColor = (<IModVar_mod_CarcaseOutsideColor>s).mod_CarcaseOutsideColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseOutsideProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseOutsideProgram')) {
          let pv = <IModVar_mod_CarcaseOutsideProgram>s;
          if (pv.mod_CarcaseOutsideProgram !== undefined) {
            this.mod_CarcaseOutsideProgram = (<IModVar_mod_CarcaseOutsideProgram>s).mod_CarcaseOutsideProgram;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseProgram')) {
          let pv = <IModVar_mod_CarcaseProgram>s;
          if (pv.mod_CarcaseProgram !== undefined) {
            this.mod_CarcaseProgram = (<IModVar_mod_CarcaseProgram>s).mod_CarcaseProgram;
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
    if (this.mod_ShelftopThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelftopThk')) {
          let pv = <IModVar_mod_ShelftopThk>s;
          if (pv.mod_ShelftopThk !== undefined) {
            this.mod_ShelftopThk = (<IModVar_mod_ShelftopThk>s).mod_ShelftopThk;
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
    if (this.mod_CornerunitStraightConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CornerunitStraightConstruction')) {
          let pv = <IModVar_mod_CornerunitStraightConstruction>s;
          if (pv.mod_CornerunitStraightConstruction !== undefined) {
            this.mod_CornerunitStraightConstruction = (<IModVar_mod_CornerunitStraightConstruction>s).mod_CornerunitStraightConstruction;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PanelblindThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PanelblindThk')) {
          let pv = <IModVar_mod_PanelblindThk>s;
          if (pv.mod_PanelblindThk !== undefined) {
            this.mod_PanelblindThk = (<IModVar_mod_PanelblindThk>s).mod_PanelblindThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripTop')) {
          let pv = <IModVar_mod_FingergripTop>s;
          if (pv.mod_FingergripTop !== undefined) {
            this.mod_FingergripTop = (<IModVar_mod_FingergripTop>s).mod_FingergripTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripType')) {
          let pv = <IModVar_mod_FingergripType>s;
          if (pv.mod_FingergripType !== undefined) {
            this.mod_FingergripType = (<IModVar_mod_FingergripType>s).mod_FingergripType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseDirection === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseDirection')) {
          let pv = <IModVar_mod_CarcaseDirection>s;
          if (pv.mod_CarcaseDirection !== undefined) {
            this.mod_CarcaseDirection = (<IModVar_mod_CarcaseDirection>s).mod_CarcaseDirection;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseConnectionLeftBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseConnectionLeftBtm')) {
          let pv = <IModVar_mod_CarcaseConnectionLeftBtm>s;
          if (pv.mod_CarcaseConnectionLeftBtm !== undefined) {
            this.mod_CarcaseConnectionLeftBtm = (<IModVar_mod_CarcaseConnectionLeftBtm>s).mod_CarcaseConnectionLeftBtm;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseConnectionLeftTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseConnectionLeftTop')) {
          let pv = <IModVar_mod_CarcaseConnectionLeftTop>s;
          if (pv.mod_CarcaseConnectionLeftTop !== undefined) {
            this.mod_CarcaseConnectionLeftTop = (<IModVar_mod_CarcaseConnectionLeftTop>s).mod_CarcaseConnectionLeftTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseConnectionRightBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseConnectionRightBtm')) {
          let pv = <IModVar_mod_CarcaseConnectionRightBtm>s;
          if (pv.mod_CarcaseConnectionRightBtm !== undefined) {
            this.mod_CarcaseConnectionRightBtm = (<IModVar_mod_CarcaseConnectionRightBtm>s).mod_CarcaseConnectionRightBtm;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseConnectionRightTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseConnectionRightTop')) {
          let pv = <IModVar_mod_CarcaseConnectionRightTop>s;
          if (pv.mod_CarcaseConnectionRightTop !== undefined) {
            this.mod_CarcaseConnectionRightTop = (<IModVar_mod_CarcaseConnectionRightTop>s).mod_CarcaseConnectionRightTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcasePartConnectionBackHor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcasePartConnectionBackHor')) {
          let pv = <IModVar_mod_CarcasePartConnectionBackHor>s;
          if (pv.mod_CarcasePartConnectionBackHor !== undefined) {
            this.mod_CarcasePartConnectionBackHor = (<IModVar_mod_CarcasePartConnectionBackHor>s).mod_CarcasePartConnectionBackHor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcasePartConnectionBackVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcasePartConnectionBackVert')) {
          let pv = <IModVar_mod_CarcasePartConnectionBackVert>s;
          if (pv.mod_CarcasePartConnectionBackVert !== undefined) {
            this.mod_CarcasePartConnectionBackVert = (<IModVar_mod_CarcasePartConnectionBackVert>s).mod_CarcasePartConnectionBackVert;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcasePartConnectionBtmVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcasePartConnectionBtmVert')) {
          let pv = <IModVar_mod_CarcasePartConnectionBtmVert>s;
          if (pv.mod_CarcasePartConnectionBtmVert !== undefined) {
            this.mod_CarcasePartConnectionBtmVert = (<IModVar_mod_CarcasePartConnectionBtmVert>s).mod_CarcasePartConnectionBtmVert;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcasePartConnectionLeftHor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcasePartConnectionLeftHor')) {
          let pv = <IModVar_mod_CarcasePartConnectionLeftHor>s;
          if (pv.mod_CarcasePartConnectionLeftHor !== undefined) {
            this.mod_CarcasePartConnectionLeftHor = (<IModVar_mod_CarcasePartConnectionLeftHor>s).mod_CarcasePartConnectionLeftHor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcasePartConnectionRightHor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcasePartConnectionRightHor')) {
          let pv = <IModVar_mod_CarcasePartConnectionRightHor>s;
          if (pv.mod_CarcasePartConnectionRightHor !== undefined) {
            this.mod_CarcasePartConnectionRightHor = (<IModVar_mod_CarcasePartConnectionRightHor>s).mod_CarcasePartConnectionRightHor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcasePartConnectionTopVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcasePartConnectionTopVert')) {
          let pv = <IModVar_mod_CarcasePartConnectionTopVert>s;
          if (pv.mod_CarcasePartConnectionTopVert !== undefined) {
            this.mod_CarcasePartConnectionTopVert = (<IModVar_mod_CarcasePartConnectionTopVert>s).mod_CarcasePartConnectionTopVert;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripPos1 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripPos1')) {
          let pv = <IModVar_mod_FingergripPos1>s;
          if (pv.mod_FingergripPos1 !== undefined) {
            this.mod_FingergripPos1 = (<IModVar_mod_FingergripPos1>s).mod_FingergripPos1;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripPos2 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripPos2')) {
          let pv = <IModVar_mod_FingergripPos2>s;
          if (pv.mod_FingergripPos2 !== undefined) {
            this.mod_FingergripPos2 = (<IModVar_mod_FingergripPos2>s).mod_FingergripPos2;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripPos3 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripPos3')) {
          let pv = <IModVar_mod_FingergripPos3>s;
          if (pv.mod_FingergripPos3 !== undefined) {
            this.mod_FingergripPos3 = (<IModVar_mod_FingergripPos3>s).mod_FingergripPos3;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripPos4 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripPos4')) {
          let pv = <IModVar_mod_FingergripPos4>s;
          if (pv.mod_FingergripPos4 !== undefined) {
            this.mod_FingergripPos4 = (<IModVar_mod_FingergripPos4>s).mod_FingergripPos4;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripPos5 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripPos5')) {
          let pv = <IModVar_mod_FingergripPos5>s;
          if (pv.mod_FingergripPos5 !== undefined) {
            this.mod_FingergripPos5 = (<IModVar_mod_FingergripPos5>s).mod_FingergripPos5;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripQtyMiddle === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripQtyMiddle')) {
          let pv = <IModVar_mod_FingergripQtyMiddle>s;
          if (pv.mod_FingergripQtyMiddle !== undefined) {
            this.mod_FingergripQtyMiddle = (<IModVar_mod_FingergripQtyMiddle>s).mod_FingergripQtyMiddle;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelmiddleShortWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelmiddleShortWidth')) {
          let pv = <IModVar_mod_SidepanelmiddleShortWidth>s;
          if (pv.mod_SidepanelmiddleShortWidth !== undefined) {
            this.mod_SidepanelmiddleShortWidth = (<IModVar_mod_SidepanelmiddleShortWidth>s).mod_SidepanelmiddleShortWidth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SidepanelmiddleThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SidepanelmiddleThk')) {
          let pv = <IModVar_mod_SidepanelmiddleThk>s;
          if (pv.mod_SidepanelmiddleThk !== undefined) {
            this.mod_SidepanelmiddleThk = (<IModVar_mod_SidepanelmiddleThk>s).mod_SidepanelmiddleThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_GrainLogic === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_GrainLogic')) {
          let pv = <IModVar_mod_GrainLogic>s;
          if (pv.mod_GrainLogic !== undefined) {
            this.mod_GrainLogic = (<IModVar_mod_GrainLogic>s).mod_GrainLogic;
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
    if (this.mod_CornerunitFrontWidth === undefined) {
      this.mod_CornerunitFrontWidth = 300;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_CornerunitStraight01";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_CleatThk === undefined) {
      this.mod_CleatThk = this.g.basic_CleatThk;
    }
    if (this.mod_CleatWidth === undefined) {
      this.mod_CleatWidth = this.g.basic_CleatWidth;
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
  #manufacturerDataCompletionInternal = mc_CornerunitStraight01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_CornerunitStraight01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_CornerunitStraight01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_CornerunitStraight01_NonNull(this);
    return adc;
  }

  addOD_M_mc_Panelblind01(index?: number): dc_mc_Panelblind01 {
    var m = new OD_M_mc_Panelblind01(this);
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
  addOD_M_mc_VertDivider01(index?: number): dc_mc_VertDivider01 {
    var m = new OD_M_mc_VertDivider01(this);
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
    this.mod_CarcaseColor_matrix = VariantValidation.mod_CarcaseColor(this, this);
    this.mod_CarcaseDepth_matrix = VariantValidation.mod_CarcaseDepth(this, this);
    this.mod_CarcaseHeight_matrix = VariantValidation.mod_CarcaseHeight(this, this);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseOutsideColor_matrix = VariantValidation.mod_CarcaseOutsideColor(this, this);
    this.mod_CarcaseOutsideProgram_matrix = VariantValidation.mod_CarcaseOutsideProgram(this, this);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this);
    this.mod_ShelfbtmThk_matrix = VariantValidation.mod_ShelfbtmThk(this, this);
    this.mod_ShelftopThk_matrix = VariantValidation.mod_ShelftopThk(this, this);
    this.mod_SidepanelleftThk_matrix = VariantValidation.mod_SidepanelleftThk(this, this);
    this.mod_SidepanelrightThk_matrix = VariantValidation.mod_SidepanelrightThk(this, this);
    this.mod_CornerunitStraightConstruction_matrix = VariantValidation.mod_CornerunitStraightConstruction(this, this);
    this.mod_CornerunitFrontWidth_matrix = VariantValidation.mod_CornerunitFrontWidth(this, this);
    this.mod_PanelblindThk_matrix = VariantValidation.mod_PanelblindThk(this, this);
    this.mod_FingergripTop_matrix = VariantValidation.mod_FingergripTop(this, this);
    this.mod_FingergripType_matrix = VariantValidation.mod_FingergripType(this, this);
    this.mod_CarcaseDirection_matrix = VariantValidation.mod_CarcaseDirection(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_CarcaseConnectionLeftBtm_matrix = VariantValidation.mod_CarcaseConnectionLeftBtm(this, this);
    this.mod_CarcaseConnectionLeftTop_matrix = VariantValidation.mod_CarcaseConnectionLeftTop(this, this);
    this.mod_CarcaseConnectionRightBtm_matrix = VariantValidation.mod_CarcaseConnectionRightBtm(this, this);
    this.mod_CarcaseConnectionRightTop_matrix = VariantValidation.mod_CarcaseConnectionRightTop(this, this);
    this.mod_CarcasePartConnectionBackHor_matrix = VariantValidation.mod_CarcasePartConnectionBackHor(this, this);
    this.mod_CarcasePartConnectionBackVert_matrix = VariantValidation.mod_CarcasePartConnectionBackVert(this, this);
    this.mod_CarcasePartConnectionBtmVert_matrix = VariantValidation.mod_CarcasePartConnectionBtmVert(this, this);
    this.mod_CarcasePartConnectionLeftHor_matrix = VariantValidation.mod_CarcasePartConnectionLeftHor(this, this);
    this.mod_CarcasePartConnectionRightHor_matrix = VariantValidation.mod_CarcasePartConnectionRightHor(this, this);
    this.mod_CarcasePartConnectionTopVert_matrix = VariantValidation.mod_CarcasePartConnectionTopVert(this, this);
    this.mod_FingergripPos1_matrix = VariantValidation.mod_FingergripPos1(this, this);
    this.mod_FingergripPos2_matrix = VariantValidation.mod_FingergripPos2(this, this);
    this.mod_FingergripPos3_matrix = VariantValidation.mod_FingergripPos3(this, this);
    this.mod_FingergripPos4_matrix = VariantValidation.mod_FingergripPos4(this, this);
    this.mod_FingergripPos5_matrix = VariantValidation.mod_FingergripPos5(this, this);
    this.mod_FingergripQtyMiddle_matrix = VariantValidation.mod_FingergripQtyMiddle(this, this);
    this.mod_SidepanelmiddleShortWidth_matrix = VariantValidation.mod_SidepanelmiddleShortWidth(this, this);
    this.mod_SidepanelmiddleThk_matrix = VariantValidation.mod_SidepanelmiddleThk(this, this);
    this.mod_CleatThk_matrix = VariantValidation.mod_CleatThk(this, this);
    this.mod_CleatWidth_matrix = VariantValidation.mod_CleatWidth(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_CornerunitStraight01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_CornerunitStraight01_NonNull implements cbp_mc_CornerunitStraight01, adc_mc_CornerunitStraight01 ,IPartParentsNonNull_mc_CornerunitStraight01,IPartParentsNonNull_mc_CornerunitStraight01_mc_Storageunit01 {
  constructor(parent: OD_M_mc_CornerunitStraight01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_CornerunitStraight01;

  get _id():string { return this.#internalParent._id; }
  get modId():string { return this.#internalParent.modId; }
  getOrigin():Matrix4 {
    return this.#internalParent.getOrigin();
  }
  getOriginPos():Vector3 {
    return this.#internalParent.getOriginPos();
  }
  ct_tab_CornerunitStraightConstruction : ct2_tab_CornerunitStraightConstruction = new ct2_tab_CornerunitStraightConstruction();
  createBuildPlan():void {
    this.#createBuildPlanInternal();
  }
  #createBuildPlanInternal = mc_CornerunitStraight01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_CornerunitStraight01_afterDataCompletion;
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
  parent: IModParents_mr_CornerunitStraight;
  get mod_CarcaseColor(): string  {
    return this.#internalParent.mod_CarcaseColor!;
  }
  get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor {
    return this.#internalParent.mod_CarcaseColor_matrix!;
  }
  get mod_CarcaseDepth(): number  {
    return this.#internalParent.mod_CarcaseDepth!;
  }
  get mod_CarcaseHeight(): number  {
    return this.#internalParent.mod_CarcaseHeight!;
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseOutsideColor(): string  {
    return this.#internalParent.mod_CarcaseOutsideColor!;
  }
  get mod_CarcaseOutsideColor_matrix(): IMatrix_mod_CarcaseOutsideColor {
    return this.#internalParent.mod_CarcaseOutsideColor_matrix!;
  }
  get mod_CarcaseOutsideProgram(): string  {
    return this.#internalParent.mod_CarcaseOutsideProgram!;
  }
  get mod_CarcaseOutsideProgram_matrix(): IMatrix_mod_CarcaseOutsideProgram {
    return this.#internalParent.mod_CarcaseOutsideProgram_matrix!;
  }
  get mod_CarcaseProgram(): string  {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_CarcaseWidth(): number  {
    return this.#internalParent.mod_CarcaseWidth!;
  }
  get mod_ShelfbtmThk(): number  {
    return this.#internalParent.mod_ShelfbtmThk!;
  }
  get mod_ShelftopThk(): number  {
    return this.#internalParent.mod_ShelftopThk!;
  }
  get mod_SidepanelleftThk(): number  {
    return this.#internalParent.mod_SidepanelleftThk!;
  }
  get mod_SidepanelrightThk(): number  {
    return this.#internalParent.mod_SidepanelrightThk!;
  }
  get mod_CornerunitStraightConstruction(): string  {
    return this.#internalParent.mod_CornerunitStraightConstruction!;
  }
  get mod_CornerunitStraightConstruction_matrix(): IMatrix_mod_CornerunitStraightConstruction {
    return this.#internalParent.mod_CornerunitStraightConstruction_matrix!;
  }
  get mod_CornerunitFrontWidth(): number  {
    return this.#internalParent.mod_CornerunitFrontWidth!;
  }
  get mod_PanelblindThk(): number  {
    return this.#internalParent.mod_PanelblindThk!;
  }
  get mod_FingergripTop(): boolean  {
    return this.#internalParent.mod_FingergripTop!;
  }
  get mod_FingergripType(): string  {
    return this.#internalParent.mod_FingergripType!;
  }
  get mod_FingergripType_matrix(): IMatrix_mod_FingergripType {
    return this.#internalParent.mod_FingergripType_matrix!;
  }
  get mod_CarcaseDirection(): string  {
    return this.#internalParent.mod_CarcaseDirection!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_CarcaseConnectionLeftBtm(): string  {
    return this.#internalParent.mod_CarcaseConnectionLeftBtm!;
  }
  get mod_CarcaseConnectionLeftTop(): string  {
    return this.#internalParent.mod_CarcaseConnectionLeftTop!;
  }
  get mod_CarcaseConnectionRightBtm(): string  {
    return this.#internalParent.mod_CarcaseConnectionRightBtm!;
  }
  get mod_CarcaseConnectionRightTop(): string  {
    return this.#internalParent.mod_CarcaseConnectionRightTop!;
  }
  get mod_CarcasePartConnectionBackHor(): string  {
    return this.#internalParent.mod_CarcasePartConnectionBackHor!;
  }
  get mod_CarcasePartConnectionBackVert(): string  {
    return this.#internalParent.mod_CarcasePartConnectionBackVert!;
  }
  get mod_CarcasePartConnectionBtmVert(): string  {
    return this.#internalParent.mod_CarcasePartConnectionBtmVert!;
  }
  get mod_CarcasePartConnectionLeftHor(): string  {
    return this.#internalParent.mod_CarcasePartConnectionLeftHor!;
  }
  get mod_CarcasePartConnectionRightHor(): string  {
    return this.#internalParent.mod_CarcasePartConnectionRightHor!;
  }
  get mod_CarcasePartConnectionTopVert(): string  {
    return this.#internalParent.mod_CarcasePartConnectionTopVert!;
  }
  get mod_CornerunitInfo(): string [] {
    return this.#internalParent.mod_CornerunitInfo!;
  }
  get mod_FingergripPos1(): number  {
    return this.#internalParent.mod_FingergripPos1!;
  }
  get mod_FingergripPos2(): number  {
    return this.#internalParent.mod_FingergripPos2!;
  }
  get mod_FingergripPos3(): number  {
    return this.#internalParent.mod_FingergripPos3!;
  }
  get mod_FingergripPos4(): number  {
    return this.#internalParent.mod_FingergripPos4!;
  }
  get mod_FingergripPos5(): number  {
    return this.#internalParent.mod_FingergripPos5!;
  }
  get mod_FingergripQtyMiddle(): number  {
    return this.#internalParent.mod_FingergripQtyMiddle!;
  }
  get mod_SidepanelmiddleShortWidth(): number  {
    return this.#internalParent.mod_SidepanelmiddleShortWidth!;
  }
  get mod_SidepanelmiddleThk(): number  {
    return this.#internalParent.mod_SidepanelmiddleThk!;
  }
  get mod_CleatThk(): number  {
    return this.#internalParent.mod_CleatThk!;
  }
  get mod_CleatWidth(): number  {
    return this.#internalParent.mod_CleatWidth!;
  }
  get mod_CarcaseSpaceDimension(): string [] {
    return this.#internalParent.mod_CarcaseSpaceDimension!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
  addOD_M_mc_Panelblind01(index?: number): dc_mc_Panelblind01 {
    return this.#internalParent.addOD_M_mc_Panelblind01(index);
  }
  addOD_M_mc_VertDivider01(index?: number): dc_mc_VertDivider01 {
    return this.#internalParent.addOD_M_mc_VertDivider01(index);
  }
}

