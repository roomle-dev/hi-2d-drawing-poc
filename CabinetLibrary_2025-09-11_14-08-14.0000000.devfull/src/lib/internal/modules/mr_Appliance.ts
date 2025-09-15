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
import { IPartBase, PartBase, _toFloat, _toInt, _toString, _toBoolean, IModBaseProp, IDockingInfo, Dock, IInsertLevelInfo } from '../mod-base'
import { loadOrderData } from '../loader'
import { GlobalFunc } from '../global-func'
import { IP_part_DropZone_PartVarsWritable, P_part_DropZone } from '../parts/part_DropZone'
import { IP_part_PlinthAreaUnit_PartVarsWritable, P_part_PlinthAreaUnit } from '../parts/part_PlinthAreaUnit'
import { OD_M_mf_Dishwasher, dc_mf_Dishwasher } from './mf_Dishwasher'
import { IModuleNonNull_mr_Appliance,IModParents_mr_Appliance_mr_Filler01,IModParents_mr_Appliance,IPartParentsNonNull_mr_Appliance_mr_Filler01,IPartParentsNonNull_mr_Appliance} from '../mod-interfaces'
import {IModVar_mod_FrontColor,IModVarNonNull_mod_FrontColor,IModVar_mod_CountertopInfo,IModVarNonNull_mod_CountertopInfo,IModVar_mod_CountertopThk,IModVarNonNull_mod_CountertopThk,IModVar_mod_CreateCountertop,IModVarNonNull_mod_CreateCountertop,IModVar_mod_CreatePaneltop,IModVarNonNull_mod_CreatePaneltop,IModVar_mod_CreateFingergrip,IModVarNonNull_mod_CreateFingergrip,IModVar_mod_CreateToekick,IModVarNonNull_mod_CreateToekick,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_FingergripType,IModVarNonNull_mod_FingergripType,IModVar_mod_FrontDesign,IModVarNonNull_mod_FrontDesign,IModVar_mod_FrontEdgeColor,IModVarNonNull_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVarNonNull_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVarNonNull_mod_FrontGapHor,IModVar_mod_FrontGapHorTop,IModVarNonNull_mod_FrontGapHorTop,IModVar_mod_FrontGapVert,IModVarNonNull_mod_FrontGapVert,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_HeightPosInsertion,IModVarNonNull_mod_HeightPosInsertion,IModVar_mod_Model,IModVarNonNull_mod_Model,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_ParentName,IModVarNonNull_mod_ParentName,IModVar_mod_PlinthAreaDesign,IModVarNonNull_mod_PlinthAreaDesign,IModVar_mod_PlinthAreaElementColor,IModVarNonNull_mod_PlinthAreaElementColor,IModVar_mod_PlinthAreaExtraItem,IModVarNonNull_mod_PlinthAreaExtraItem,IModVar_mod_PlinthAreaHeight,IModVarNonNull_mod_PlinthAreaHeight,IModVar_mod_PlinthAreaPosBackMatrix,IModVarNonNull_mod_PlinthAreaPosBackMatrix,IModVar_mod_PlinthAreaPosFrontMatrix,IModVarNonNull_mod_PlinthAreaPosFrontMatrix,IModVar_mod_PlinthAreaPositionInfo,IModVarNonNull_mod_PlinthAreaPositionInfo,IModVar_mod_PlinthAreaPosLeftMatrix,IModVarNonNull_mod_PlinthAreaPosLeftMatrix,IModVar_mod_PlinthAreaPosRightMatrix,IModVarNonNull_mod_PlinthAreaPosRightMatrix,IModVar_mod_PlinthAreaVisLeft,IModVarNonNull_mod_PlinthAreaVisLeft,IModVar_mod_PlinthAreaVisRight,IModVarNonNull_mod_PlinthAreaVisRight,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_CarcaseDistanceWall,IModVarNonNull_mod_CarcaseDistanceWall,IModVar_mod_HardwareColor,IModVarNonNull_mod_HardwareColor,IModVar_mod_HandleLine,IModVarNonNull_mod_HandleLine,IModVar_mod_HandlePosType,IModVarNonNull_mod_HandlePosType,IModVar_mod_HandlePosLogic,IModVarNonNull_mod_HandlePosLogic,IModVar_mod_HandleDrill,IModVarNonNull_mod_HandleDrill,IModVar_mod_HandleColor,IModVarNonNull_mod_HandleColor,IModVar_mod_HandleLength,IModVarNonNull_mod_HandleLength,IModVar_mod_HandleDesign,IModVarNonNull_mod_HandleDesign,IModVar_mod_FramePartsWidthHor,IModVarNonNull_mod_FramePartsWidthHor,IModVar_mod_FramePartsWidthVert,IModVarNonNull_mod_FramePartsWidthVert,IModVar_mod_PanelWoodFrameFillingType,IModVarNonNull_mod_PanelWoodFrameFillingType,IModVar_mod_PanelWoodFrameType,IModVarNonNull_mod_PanelWoodFrameType,IModVar_mod_FrameFillingWoodColor,IModVarNonNull_mod_FrameFillingWoodColor,IModVar_mod_FrontGlassColor,IModVarNonNull_mod_FrontGlassColor,IModVar_mod_DropZoneVisible,IModVarNonNull_mod_DropZoneVisible,IModVar_mod_PlinthAreaPosLogic,IModVarNonNull_mod_PlinthAreaPosLogic,IModVar_mod_ShelfbtmThk,IModVarNonNull_mod_ShelfbtmThk,IModVar_mod_InformationList,IModVarNonNull_mod_InformationList} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_FrontColor, IMatrix_mod_CountertopThk, IMatrix_mod_CreateCountertop, IMatrix_mod_CreatePaneltop, IMatrix_mod_CreateFingergrip, IMatrix_mod_CreateToekick, IMatrix_mod_Depth, IMatrix_mod_FingergripType, IMatrix_mod_FrontDesign, IMatrix_mod_FrontEdgeColor, IMatrix_mod_FrontEdgeThk, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapHorTop, IMatrix_mod_FrontGapVert, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontProgram, IMatrix_mod_Height, IMatrix_mod_HeightPosInsertion, IMatrix_mod_Model, IMatrix_mod_ModuleName, IMatrix_mod_ParentName, IMatrix_mod_PlinthAreaDesign, IMatrix_mod_PlinthAreaElementColor, IMatrix_mod_PlinthAreaExtraItem, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_PlinthAreaPosBackMatrix, IMatrix_mod_PlinthAreaPosFrontMatrix, IMatrix_mod_PlinthAreaPosLeftMatrix, IMatrix_mod_PlinthAreaPosRightMatrix, IMatrix_mod_PlinthAreaVisLeft, IMatrix_mod_PlinthAreaVisRight, IMatrix_mod_TypeElement, IMatrix_mod_Width, IMatrix_mod_CarcaseDistanceWall, IMatrix_mod_HardwareColor, IMatrix_mod_HandleLine, IMatrix_mod_HandlePosType, IMatrix_mod_HandlePosLogic, IMatrix_mod_HandleDrill, IMatrix_mod_HandleColor, IMatrix_mod_HandleLength, IMatrix_mod_HandleDesign, IMatrix_mod_FramePartsWidthHor, IMatrix_mod_FramePartsWidthVert, IMatrix_mod_PanelWoodFrameFillingType, IMatrix_mod_PanelWoodFrameType, IMatrix_mod_FrameFillingWoodColor, IMatrix_mod_FrontGlassColor, IMatrix_mod_PlinthAreaPosLogic, IMatrix_mod_ShelfbtmThk} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'
import { IGlobalVarsParent } from '../global-vars-parent'

import { IPartAdd_part_DropZone, IPartAdd_part_PlinthAreaUnit } from '../part-add-interfaces';
import { mr_Appliance_createBuildPlan, mr_Appliance_afterDataCompletion, mr_Appliance_manufacturerDataCompletion } from '../../modules/mr_Appliance';

export interface cbp_mr_Appliance extends IModBaseProp
, IPartAdd_part_DropZone, IPartAdd_part_PlinthAreaUnit, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_CountertopInfo, IModVarNonNull_mod_CountertopThk, IModVarNonNull_mod_CreateCountertop, IModVarNonNull_mod_CreatePaneltop, IModVarNonNull_mod_CreateFingergrip, IModVarNonNull_mod_CreateToekick, IModVarNonNull_mod_Depth, IModVarNonNull_mod_FingergripType, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_Height, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_Model, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaElementColor, IModVarNonNull_mod_PlinthAreaExtraItem, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPositionInfo, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisRight, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseDistanceWall, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FramePartsWidthHor, IModVarNonNull_mod_FramePartsWidthVert, IModVarNonNull_mod_PanelWoodFrameFillingType, IModVarNonNull_mod_PanelWoodFrameType, IModVarNonNull_mod_FrameFillingWoodColor, IModVarNonNull_mod_FrontGlassColor, IModVarNonNull_mod_DropZoneVisible, IModVarNonNull_mod_PlinthAreaPosLogic, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_InformationList {
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void;
  getRoomContours(): RoomContour[];
  get m(): OD_Base[];
}

export interface dc_mr_Appliance extends IModBaseProp
, IModVar_mod_FrontColor, IModVar_mod_CountertopInfo, IModVar_mod_CountertopThk, IModVar_mod_CreateCountertop, IModVar_mod_CreatePaneltop, IModVar_mod_CreateFingergrip, IModVar_mod_CreateToekick, IModVar_mod_Depth, IModVar_mod_FingergripType, IModVar_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapHorTop, IModVar_mod_FrontGapVert, IModVar_mod_FrontPosStart, IModVar_mod_FrontProgram, IModVar_mod_Height, IModVar_mod_HeightPosInsertion, IModVar_mod_Model, IModVar_mod_ModuleName, IModVar_mod_ParentName, IModVar_mod_PlinthAreaDesign, IModVar_mod_PlinthAreaElementColor, IModVar_mod_PlinthAreaExtraItem, IModVar_mod_PlinthAreaHeight, IModVar_mod_PlinthAreaPosBackMatrix, IModVar_mod_PlinthAreaPosFrontMatrix, IModVar_mod_PlinthAreaPositionInfo, IModVar_mod_PlinthAreaPosLeftMatrix, IModVar_mod_PlinthAreaPosRightMatrix, IModVar_mod_PlinthAreaVisLeft, IModVar_mod_PlinthAreaVisRight, IModVar_mod_TypeElement, IModVar_mod_Width, IModVar_mod_CarcaseDistanceWall, IModVar_mod_HardwareColor, IModVar_mod_HandleLine, IModVar_mod_HandlePosType, IModVar_mod_HandlePosLogic, IModVar_mod_HandleDrill, IModVar_mod_HandleColor, IModVar_mod_HandleLength, IModVar_mod_HandleDesign, IModVar_mod_FramePartsWidthHor, IModVar_mod_FramePartsWidthVert, IModVar_mod_PanelWoodFrameFillingType, IModVar_mod_PanelWoodFrameType, IModVar_mod_FrameFillingWoodColor, IModVar_mod_FrontGlassColor, IModVar_mod_DropZoneVisible, IModVar_mod_PlinthAreaPosLogic, IModVar_mod_ShelfbtmThk, IModVar_mod_InformationList {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mr_Appliance;
  addOD_M_mf_Dishwasher(index?: number): dc_mf_Dishwasher;
}

export interface adc_mr_Appliance extends IModBaseProp
, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_CountertopInfo, IModVarNonNull_mod_CountertopThk, IModVarNonNull_mod_CreateCountertop, IModVarNonNull_mod_CreatePaneltop, IModVarNonNull_mod_CreateFingergrip, IModVarNonNull_mod_CreateToekick, IModVarNonNull_mod_Depth, IModVarNonNull_mod_FingergripType, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_Height, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_Model, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PlinthAreaDesign, IModVarNonNull_mod_PlinthAreaElementColor, IModVarNonNull_mod_PlinthAreaExtraItem, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PlinthAreaPosBackMatrix, IModVarNonNull_mod_PlinthAreaPosFrontMatrix, IModVarNonNull_mod_PlinthAreaPositionInfo, IModVarNonNull_mod_PlinthAreaPosLeftMatrix, IModVarNonNull_mod_PlinthAreaPosRightMatrix, IModVarNonNull_mod_PlinthAreaVisLeft, IModVarNonNull_mod_PlinthAreaVisRight, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseDistanceWall, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FramePartsWidthHor, IModVarNonNull_mod_FramePartsWidthVert, IModVarNonNull_mod_PanelWoodFrameFillingType, IModVarNonNull_mod_PanelWoodFrameType, IModVarNonNull_mod_FrameFillingWoodColor, IModVarNonNull_mod_FrontGlassColor, IModVarNonNull_mod_DropZoneVisible, IModVarNonNull_mod_PlinthAreaPosLogic, IModVarNonNull_mod_ShelfbtmThk, IModVarNonNull_mod_InformationList {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mf_Dishwasher(index?: number): dc_mf_Dishwasher;
get dockingInfo() : IDockingInfo[];
addDockingInfo(id: Dock, start: Vector3, end: Vector3): IDockingInfo;
get insertLevelInfo(): IInsertLevelInfo[];
get insertLevelFixed(): boolean;
set insertLevelFixed(value: boolean);
addInsertLevelHeight(height:number) : IInsertLevelInfo;
addInsertLevelHeight(height:number, isDefault: boolean|undefined) : IInsertLevelInfo;
  getRoomContours(): RoomContour[];
  get _posData(): Map<string, string|number>;
}

export class OD_M_mr_Appliance extends OD_Base  implements dc_mr_Appliance
,IModParents_mr_Appliance_mr_Filler01,IModParents_mr_Appliance
,IModVar_mod_FrontColor,IModVar_mod_CountertopInfo,IModVar_mod_CountertopThk,IModVar_mod_CreateCountertop,IModVar_mod_CreatePaneltop,IModVar_mod_CreateFingergrip,IModVar_mod_CreateToekick,IModVar_mod_Depth,IModVar_mod_FingergripType,IModVar_mod_FrontDesign,IModVar_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVar_mod_FrontGapHorTop,IModVar_mod_FrontGapVert,IModVar_mod_FrontPosStart,IModVar_mod_FrontProgram,IModVar_mod_Height,IModVar_mod_HeightPosInsertion,IModVar_mod_Model,IModVar_mod_ModuleName,IModVar_mod_ParentName,IModVar_mod_PlinthAreaDesign,IModVar_mod_PlinthAreaElementColor,IModVar_mod_PlinthAreaExtraItem,IModVar_mod_PlinthAreaHeight,IModVar_mod_PlinthAreaPosBackMatrix,IModVar_mod_PlinthAreaPosFrontMatrix,IModVar_mod_PlinthAreaPositionInfo,IModVar_mod_PlinthAreaPosLeftMatrix,IModVar_mod_PlinthAreaPosRightMatrix,IModVar_mod_PlinthAreaVisLeft,IModVar_mod_PlinthAreaVisRight,IModVar_mod_TypeElement,IModVar_mod_Width,IModVar_mod_CarcaseDistanceWall,IModVar_mod_HardwareColor,IModVar_mod_HandleLine,IModVar_mod_HandlePosType,IModVar_mod_HandlePosLogic,IModVar_mod_HandleDrill,IModVar_mod_HandleColor,IModVar_mod_HandleLength,IModVar_mod_HandleDesign,IModVar_mod_FramePartsWidthHor,IModVar_mod_FramePartsWidthVert,IModVar_mod_PanelWoodFrameFillingType,IModVar_mod_PanelWoodFrameType,IModVar_mod_FrameFillingWoodColor,IModVar_mod_FrontGlassColor,IModVar_mod_DropZoneVisible,IModVar_mod_PlinthAreaPosLogic,IModVar_mod_ShelfbtmThk,IModVar_mod_InformationList
 {
  constructor(parent?: OD_Base, manufacturerMode?:boolean) {
    super('mr_Appliance', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_mr_Appliance_NonNull(this);
  }
  _selfNonNull: OD_M_mr_Appliance_NonNull;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.generationContours.push({
      generationMethod: generationMethod,
      height: height,
      contour: contour,
      position: this._articlePos,
    });
  }

  override variants:string[] = ['mod_FrontColor','mod_CountertopInfo','mod_CountertopThk','mod_CreateCountertop','mod_CreatePaneltop','mod_CreateFingergrip','mod_CreateToekick','mod_Depth','mod_FingergripType','mod_FrontDesign','mod_FrontEdgeColor','mod_FrontEdgeThk','mod_FrontGapCarcase','mod_FrontGapHor','mod_FrontGapHorTop','mod_FrontGapVert','mod_FrontPosStart','mod_FrontProgram','mod_Height','mod_HeightPosInsertion','mod_Model','mod_ModuleName','mod_ParentName','mod_PlinthAreaDesign','mod_PlinthAreaElementColor','mod_PlinthAreaExtraItem','mod_PlinthAreaHeight','mod_PlinthAreaPosBackMatrix','mod_PlinthAreaPosFrontMatrix','mod_PlinthAreaPositionInfo','mod_PlinthAreaPosLeftMatrix','mod_PlinthAreaPosRightMatrix','mod_PlinthAreaVisLeft','mod_PlinthAreaVisRight','mod_TypeElement','mod_Width','mod_CarcaseDistanceWall','mod_HardwareColor','mod_HandleLine','mod_HandlePosType','mod_HandlePosLogic','mod_HandleDrill','mod_HandleColor','mod_HandleLength','mod_HandleDesign','mod_FramePartsWidthHor','mod_FramePartsWidthVert','mod_PanelWoodFrameFillingType','mod_PanelWoodFrameType','mod_FrameFillingWoodColor','mod_FrontGlassColor','mod_DropZoneVisible','mod_PlinthAreaPosLogic','mod_ShelfbtmThk','mod_InformationList',];
  #mod_FrontColor?: string;
  get mod_FrontColor(): string | undefined { return this.#mod_FrontColor}
  set mod_FrontColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontColor === value) return;
    this.#mod_FrontColor = value;
  }

  mod_FrontColor_matrix?: IMatrix_mod_FrontColor;
  #mod_CountertopInfo: string[] = [];
  get mod_CountertopInfo(): string[] { return this.#mod_CountertopInfo;}
  #mod_CountertopThk?: number;
  get mod_CountertopThk(): number | undefined { return this.#mod_CountertopThk}
  set mod_CountertopThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopThk === value) return;
    this.#mod_CountertopThk = value;
  }

  mod_CountertopThk_matrix?: IMatrix_mod_CountertopThk;
  #mod_CreateCountertop?: boolean;
  get mod_CreateCountertop(): boolean | undefined { return this.#mod_CreateCountertop}
  set mod_CreateCountertop(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CreateCountertop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CreateCountertop === value) return;
    this.#mod_CreateCountertop = value;
  }

  mod_CreateCountertop_matrix?: IMatrix_mod_CreateCountertop;
  #mod_CreatePaneltop?: boolean;
  get mod_CreatePaneltop(): boolean | undefined { return this.#mod_CreatePaneltop}
  set mod_CreatePaneltop(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CreatePaneltop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CreatePaneltop === value) return;
    this.#mod_CreatePaneltop = value;
  }

  mod_CreatePaneltop_matrix?: IMatrix_mod_CreatePaneltop;
  #mod_CreateFingergrip?: boolean;
  get mod_CreateFingergrip(): boolean | undefined { return this.#mod_CreateFingergrip}
  set mod_CreateFingergrip(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CreateFingergrip' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CreateFingergrip === value) return;
    this.#mod_CreateFingergrip = value;
  }

  mod_CreateFingergrip_matrix?: IMatrix_mod_CreateFingergrip;
  #mod_CreateToekick?: boolean;
  get mod_CreateToekick(): boolean | undefined { return this.#mod_CreateToekick}
  set mod_CreateToekick(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CreateToekick' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CreateToekick === value) return;
    this.#mod_CreateToekick = value;
  }

  mod_CreateToekick_matrix?: IMatrix_mod_CreateToekick;
  #mod_Depth?: number;
  get mod_Depth(): number | undefined { return this.#mod_Depth}
  set mod_Depth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Depth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Depth === value) return;
    this.#mod_Depth = value;
  }

  mod_Depth_matrix?: IMatrix_mod_Depth;
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
  #mod_FrontDesign?: string;
  get mod_FrontDesign(): string | undefined { return this.#mod_FrontDesign}
  set mod_FrontDesign(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontDesign === value) return;
    this.#mod_FrontDesign = value;
  }

  mod_FrontDesign_matrix?: IMatrix_mod_FrontDesign;
  #mod_FrontEdgeColor?: string;
  get mod_FrontEdgeColor(): string | undefined { return this.#mod_FrontEdgeColor}
  set mod_FrontEdgeColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontEdgeColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontEdgeColor === value) return;
    this.#mod_FrontEdgeColor = value;
  }

  mod_FrontEdgeColor_matrix?: IMatrix_mod_FrontEdgeColor;
  #mod_FrontEdgeThk?: string;
  get mod_FrontEdgeThk(): string | undefined { return this.#mod_FrontEdgeThk}
  set mod_FrontEdgeThk(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontEdgeThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontEdgeThk === value) return;
    this.#mod_FrontEdgeThk = value;
  }

  mod_FrontEdgeThk_matrix?: IMatrix_mod_FrontEdgeThk;
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
  #mod_FrontGapHorTop?: number;
  get mod_FrontGapHorTop(): number | undefined { return this.#mod_FrontGapHorTop}
  set mod_FrontGapHorTop(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontGapHorTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontGapHorTop === value) return;
    this.#mod_FrontGapHorTop = value;
  }

  mod_FrontGapHorTop_matrix?: IMatrix_mod_FrontGapHorTop;
  #mod_FrontGapVert?: number;
  get mod_FrontGapVert(): number | undefined { return this.#mod_FrontGapVert}
  set mod_FrontGapVert(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontGapVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontGapVert === value) return;
    this.#mod_FrontGapVert = value;
  }

  mod_FrontGapVert_matrix?: IMatrix_mod_FrontGapVert;
  #mod_FrontPosStart?: number;
  get mod_FrontPosStart(): number | undefined { return this.#mod_FrontPosStart}
  set mod_FrontPosStart(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontPosStart' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontPosStart === value) return;
    this.#mod_FrontPosStart = value;
  }

  mod_FrontPosStart_matrix?: IMatrix_mod_FrontPosStart;
  #mod_FrontProgram?: string;
  get mod_FrontProgram(): string | undefined { return this.#mod_FrontProgram}
  set mod_FrontProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontProgram === value) return;
    this.#mod_FrontProgram = value;
  }

  mod_FrontProgram_matrix?: IMatrix_mod_FrontProgram;
  #mod_Height?: number;
  get mod_Height(): number | undefined { return this.#mod_Height}
  set mod_Height(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Height' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Height === value) return;
    this.#mod_Height = value;
  }

  mod_Height_matrix?: IMatrix_mod_Height;
  #mod_HeightPosInsertion?: number;
  get mod_HeightPosInsertion(): number | undefined { return this.#mod_HeightPosInsertion}
  set mod_HeightPosInsertion(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HeightPosInsertion' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HeightPosInsertion === value) return;
    this.#mod_HeightPosInsertion = value;
  }

  mod_HeightPosInsertion_matrix?: IMatrix_mod_HeightPosInsertion;
  #mod_Model?: string;
  get mod_Model(): string | undefined { return this.#mod_Model}
  set mod_Model(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Model' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Model === value) return;
    this.#mod_Model = value;
  }

  mod_Model_matrix?: IMatrix_mod_Model;
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
  #mod_ParentName?: string;
  get mod_ParentName(): string | undefined { return this.#mod_ParentName}
  set mod_ParentName(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ParentName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ParentName === value) return;
    this.#mod_ParentName = value;
  }

  mod_ParentName_matrix?: IMatrix_mod_ParentName;
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
  #mod_PlinthAreaPositionInfo: string[] = [];
  get mod_PlinthAreaPositionInfo(): string[] { return this.#mod_PlinthAreaPositionInfo;}
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
  #mod_Width?: number;
  get mod_Width(): number | undefined { return this.#mod_Width}
  set mod_Width(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Width' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Width === value) return;
    this.#mod_Width = value;
  }

  mod_Width_matrix?: IMatrix_mod_Width;
  #mod_CarcaseDistanceWall?: number;
  get mod_CarcaseDistanceWall(): number | undefined { return this.#mod_CarcaseDistanceWall}
  set mod_CarcaseDistanceWall(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseDistanceWall' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseDistanceWall === value) return;
    this.#mod_CarcaseDistanceWall = value;
  }

  mod_CarcaseDistanceWall_matrix?: IMatrix_mod_CarcaseDistanceWall;
  #mod_HardwareColor?: string;
  get mod_HardwareColor(): string | undefined { return this.#mod_HardwareColor}
  set mod_HardwareColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HardwareColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HardwareColor === value) return;
    this.#mod_HardwareColor = value;
  }

  mod_HardwareColor_matrix?: IMatrix_mod_HardwareColor;
  #mod_HandleLine?: number;
  get mod_HandleLine(): number | undefined { return this.#mod_HandleLine}
  set mod_HandleLine(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleLine' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleLine === value) return;
    this.#mod_HandleLine = value;
  }

  mod_HandleLine_matrix?: IMatrix_mod_HandleLine;
  #mod_HandlePosType?: string;
  get mod_HandlePosType(): string | undefined { return this.#mod_HandlePosType}
  set mod_HandlePosType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandlePosType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandlePosType === value) return;
    this.#mod_HandlePosType = value;
  }

  mod_HandlePosType_matrix?: IMatrix_mod_HandlePosType;
  #mod_HandlePosLogic?: string;
  get mod_HandlePosLogic(): string | undefined { return this.#mod_HandlePosLogic}
  set mod_HandlePosLogic(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandlePosLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandlePosLogic === value) return;
    this.#mod_HandlePosLogic = value;
  }

  mod_HandlePosLogic_matrix?: IMatrix_mod_HandlePosLogic;
  #mod_HandleDrill?: boolean;
  get mod_HandleDrill(): boolean | undefined { return this.#mod_HandleDrill}
  set mod_HandleDrill(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleDrill' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleDrill === value) return;
    this.#mod_HandleDrill = value;
  }

  mod_HandleDrill_matrix?: IMatrix_mod_HandleDrill;
  #mod_HandleColor?: string;
  get mod_HandleColor(): string | undefined { return this.#mod_HandleColor}
  set mod_HandleColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleColor === value) return;
    this.#mod_HandleColor = value;
  }

  mod_HandleColor_matrix?: IMatrix_mod_HandleColor;
  #mod_HandleLength?: number;
  get mod_HandleLength(): number | undefined { return this.#mod_HandleLength}
  set mod_HandleLength(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleLength' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleLength === value) return;
    this.#mod_HandleLength = value;
  }

  mod_HandleLength_matrix?: IMatrix_mod_HandleLength;
  #mod_HandleDesign?: string;
  get mod_HandleDesign(): string | undefined { return this.#mod_HandleDesign}
  set mod_HandleDesign(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleDesign === value) return;
    this.#mod_HandleDesign = value;
  }

  mod_HandleDesign_matrix?: IMatrix_mod_HandleDesign;
  #mod_FramePartsWidthHor?: number;
  get mod_FramePartsWidthHor(): number | undefined { return this.#mod_FramePartsWidthHor}
  set mod_FramePartsWidthHor(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FramePartsWidthHor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FramePartsWidthHor === value) return;
    this.#mod_FramePartsWidthHor = value;
  }

  mod_FramePartsWidthHor_matrix?: IMatrix_mod_FramePartsWidthHor;
  #mod_FramePartsWidthVert?: number;
  get mod_FramePartsWidthVert(): number | undefined { return this.#mod_FramePartsWidthVert}
  set mod_FramePartsWidthVert(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FramePartsWidthVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FramePartsWidthVert === value) return;
    this.#mod_FramePartsWidthVert = value;
  }

  mod_FramePartsWidthVert_matrix?: IMatrix_mod_FramePartsWidthVert;
  #mod_PanelWoodFrameFillingType?: string;
  get mod_PanelWoodFrameFillingType(): string | undefined { return this.#mod_PanelWoodFrameFillingType}
  set mod_PanelWoodFrameFillingType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PanelWoodFrameFillingType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PanelWoodFrameFillingType === value) return;
    this.#mod_PanelWoodFrameFillingType = value;
  }

  mod_PanelWoodFrameFillingType_matrix?: IMatrix_mod_PanelWoodFrameFillingType;
  #mod_PanelWoodFrameType?: string;
  get mod_PanelWoodFrameType(): string | undefined { return this.#mod_PanelWoodFrameType}
  set mod_PanelWoodFrameType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PanelWoodFrameType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PanelWoodFrameType === value) return;
    this.#mod_PanelWoodFrameType = value;
  }

  mod_PanelWoodFrameType_matrix?: IMatrix_mod_PanelWoodFrameType;
  #mod_FrameFillingWoodColor?: string;
  get mod_FrameFillingWoodColor(): string | undefined { return this.#mod_FrameFillingWoodColor}
  set mod_FrameFillingWoodColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrameFillingWoodColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrameFillingWoodColor === value) return;
    this.#mod_FrameFillingWoodColor = value;
  }

  mod_FrameFillingWoodColor_matrix?: IMatrix_mod_FrameFillingWoodColor;
  #mod_FrontGlassColor?: string;
  get mod_FrontGlassColor(): string | undefined { return this.#mod_FrontGlassColor}
  set mod_FrontGlassColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontGlassColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontGlassColor === value) return;
    this.#mod_FrontGlassColor = value;
  }

  mod_FrontGlassColor_matrix?: IMatrix_mod_FrontGlassColor;
  #mod_DropZoneVisible: boolean[] = [];
  get mod_DropZoneVisible(): boolean[] { return this.#mod_DropZoneVisible;}
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
  #mod_InformationList: string[] = [];
  get mod_InformationList(): string[] { return this.#mod_InformationList;}
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_FrontColor', this.mod_FrontColor);
  res.set('mod_CountertopInfo', JSON.stringify(this.mod_CountertopInfo));
  res.set('mod_CountertopThk', this.mod_CountertopThk);
  res.set('mod_CreateCountertop', this.mod_CreateCountertop);
  res.set('mod_CreatePaneltop', this.mod_CreatePaneltop);
  res.set('mod_CreateFingergrip', this.mod_CreateFingergrip);
  res.set('mod_CreateToekick', this.mod_CreateToekick);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_FingergripType', this.mod_FingergripType);
  res.set('mod_FrontDesign', this.mod_FrontDesign);
  res.set('mod_FrontEdgeColor', this.mod_FrontEdgeColor);
  res.set('mod_FrontEdgeThk', this.mod_FrontEdgeThk);
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_FrontGapHor', this.mod_FrontGapHor);
  res.set('mod_FrontGapHorTop', this.mod_FrontGapHorTop);
  res.set('mod_FrontGapVert', this.mod_FrontGapVert);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
  res.set('mod_Model', this.mod_Model);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_ParentName', this.mod_ParentName);
  res.set('mod_PlinthAreaDesign', this.mod_PlinthAreaDesign);
  res.set('mod_PlinthAreaElementColor', this.mod_PlinthAreaElementColor);
  res.set('mod_PlinthAreaExtraItem', this.mod_PlinthAreaExtraItem);
  res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
  res.set('mod_PlinthAreaPosBackMatrix', this.mod_PlinthAreaPosBackMatrix);
  res.set('mod_PlinthAreaPosFrontMatrix', this.mod_PlinthAreaPosFrontMatrix);
  res.set('mod_PlinthAreaPositionInfo', JSON.stringify(this.mod_PlinthAreaPositionInfo));
  res.set('mod_PlinthAreaPosLeftMatrix', this.mod_PlinthAreaPosLeftMatrix);
  res.set('mod_PlinthAreaPosRightMatrix', this.mod_PlinthAreaPosRightMatrix);
  res.set('mod_PlinthAreaVisLeft', this.mod_PlinthAreaVisLeft);
  res.set('mod_PlinthAreaVisRight', this.mod_PlinthAreaVisRight);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_CarcaseDistanceWall', this.mod_CarcaseDistanceWall);
  res.set('mod_HardwareColor', this.mod_HardwareColor);
  res.set('mod_HandleLine', this.mod_HandleLine);
  res.set('mod_HandlePosType', this.mod_HandlePosType);
  res.set('mod_HandlePosLogic', this.mod_HandlePosLogic);
  res.set('mod_HandleDrill', this.mod_HandleDrill);
  res.set('mod_HandleColor', this.mod_HandleColor);
  res.set('mod_HandleLength', this.mod_HandleLength);
  res.set('mod_HandleDesign', this.mod_HandleDesign);
  res.set('mod_FramePartsWidthHor', this.mod_FramePartsWidthHor);
  res.set('mod_FramePartsWidthVert', this.mod_FramePartsWidthVert);
  res.set('mod_PanelWoodFrameFillingType', this.mod_PanelWoodFrameFillingType);
  res.set('mod_PanelWoodFrameType', this.mod_PanelWoodFrameType);
  res.set('mod_FrameFillingWoodColor', this.mod_FrameFillingWoodColor);
  res.set('mod_FrontGlassColor', this.mod_FrontGlassColor);
  res.set('mod_DropZoneVisible', JSON.stringify(this.mod_DropZoneVisible));
  res.set('mod_PlinthAreaPosLogic', this.mod_PlinthAreaPosLogic);
  res.set('mod_ShelfbtmThk', this.mod_ShelfbtmThk);
  res.set('mod_InformationList', JSON.stringify(this.mod_InformationList));
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
   const res = new Map<string, number | string | boolean | undefined>();
   res.set('mod_FrontColor', this.mod_FrontColor);
   res.set('mod_FrontProgram', this.mod_FrontProgram);
   res.set('mod_PlinthAreaDesign', this.mod_PlinthAreaDesign);
   res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
   res.set('mod_TypeElement', this.mod_TypeElement);
   res.set('mod_HardwareColor', this.mod_HardwareColor);
   res.set('mod_HandleColor', this.mod_HandleColor);
   res.set('mod_HandleDesign', this.mod_HandleDesign);
   return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);

    if (json['articlePos']) {
      let val:number|string|undefined;
      val = json['articlePos']['x'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position X is invalid!');
        } else {
          this._articlePos.x = val;
        }
      }

      val = json['articlePos']['y'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position Y is invalid!');
        } else {
          this._articlePos.y = val;
        }
      }

      val = json['articlePos']['z'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position Z is invalid!');
        } else {
          this._articlePos.z = val;
        }
      }

      val = json['articlePos']['rotationY'];
      if (val !== undefined) {
        if (typeof val === 'string') {
          val = parseFloat(val);
        }
        if (Number.isNaN(val)) {
          logError('Article rotation Y is invalid!');
        } else {
          this._articlePos.rotationY = val;
        }
      }

    }
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontColor');
    const val = _toString(json['attributes']['mod_FrontColor'], 'mod_FrontColor');
    internal_leaveValidateVariant();
    this.mod_FrontColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopThk');
    const val = _toFloat(json['attributes']['mod_CountertopThk'], 'mod_CountertopThk');
    internal_leaveValidateVariant();
    this.mod_CountertopThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CreateCountertop');
    const val = _toBoolean(json['attributes']['mod_CreateCountertop'], 'mod_CreateCountertop');
    internal_leaveValidateVariant();
    this.mod_CreateCountertop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CreatePaneltop');
    const val = _toBoolean(json['attributes']['mod_CreatePaneltop'], 'mod_CreatePaneltop');
    internal_leaveValidateVariant();
    this.mod_CreatePaneltop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CreateFingergrip');
    const val = _toBoolean(json['attributes']['mod_CreateFingergrip'], 'mod_CreateFingergrip');
    internal_leaveValidateVariant();
    this.mod_CreateFingergrip = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CreateToekick');
    const val = _toBoolean(json['attributes']['mod_CreateToekick'], 'mod_CreateToekick');
    internal_leaveValidateVariant();
    this.mod_CreateToekick = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripType');
    const val = _toString(json['attributes']['mod_FingergripType'], 'mod_FingergripType');
    internal_leaveValidateVariant();
    this.mod_FingergripType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDesign');
    const val = _toString(json['attributes']['mod_FrontDesign'], 'mod_FrontDesign');
    internal_leaveValidateVariant();
    this.mod_FrontDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontEdgeColor');
    const val = _toString(json['attributes']['mod_FrontEdgeColor'], 'mod_FrontEdgeColor');
    internal_leaveValidateVariant();
    this.mod_FrontEdgeColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontEdgeThk');
    const val = _toString(json['attributes']['mod_FrontEdgeThk'], 'mod_FrontEdgeThk');
    internal_leaveValidateVariant();
    this.mod_FrontEdgeThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
    const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
    internal_leaveValidateVariant();
    this.mod_FrontGapCarcase = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHor');
    const val = _toFloat(json['attributes']['mod_FrontGapHor'], 'mod_FrontGapHor');
    internal_leaveValidateVariant();
    this.mod_FrontGapHor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHorTop');
    const val = _toFloat(json['attributes']['mod_FrontGapHorTop'], 'mod_FrontGapHorTop');
    internal_leaveValidateVariant();
    this.mod_FrontGapHorTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapVert');
    const val = _toFloat(json['attributes']['mod_FrontGapVert'], 'mod_FrontGapVert');
    internal_leaveValidateVariant();
    this.mod_FrontGapVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
    const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
    internal_leaveValidateVariant();
    this.mod_HeightPosInsertion = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Model');
    const val = _toString(json['attributes']['mod_Model'], 'mod_Model');
    internal_leaveValidateVariant();
    this.mod_Model = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
    const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
    internal_leaveValidateVariant();
    this.mod_ParentName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaDesign');
    const val = _toString(json['attributes']['mod_PlinthAreaDesign'], 'mod_PlinthAreaDesign');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaElementColor');
    const val = _toString(json['attributes']['mod_PlinthAreaElementColor'], 'mod_PlinthAreaElementColor');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaElementColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaExtraItem');
    const val = _toString(json['attributes']['mod_PlinthAreaExtraItem'], 'mod_PlinthAreaExtraItem');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaExtraItem = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
    const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosBackMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosBackMatrix'], 'mod_PlinthAreaPosBackMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosBackMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosFrontMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosFrontMatrix'], 'mod_PlinthAreaPosFrontMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosFrontMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosLeftMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosLeftMatrix'], 'mod_PlinthAreaPosLeftMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosLeftMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosRightMatrix');
    const val = _toString(json['attributes']['mod_PlinthAreaPosRightMatrix'], 'mod_PlinthAreaPosRightMatrix');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosRightMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaVisLeft');
    const val = _toBoolean(json['attributes']['mod_PlinthAreaVisLeft'], 'mod_PlinthAreaVisLeft');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaVisLeft = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaVisRight');
    const val = _toBoolean(json['attributes']['mod_PlinthAreaVisRight'], 'mod_PlinthAreaVisRight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaVisRight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDistanceWall');
    const val = _toFloat(json['attributes']['mod_CarcaseDistanceWall'], 'mod_CarcaseDistanceWall');
    internal_leaveValidateVariant();
    this.mod_CarcaseDistanceWall = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareColor');
    const val = _toString(json['attributes']['mod_HardwareColor'], 'mod_HardwareColor');
    internal_leaveValidateVariant();
    this.mod_HardwareColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLine');
    const val = _toFloat(json['attributes']['mod_HandleLine'], 'mod_HandleLine');
    internal_leaveValidateVariant();
    this.mod_HandleLine = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosType');
    const val = _toString(json['attributes']['mod_HandlePosType'], 'mod_HandlePosType');
    internal_leaveValidateVariant();
    this.mod_HandlePosType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosLogic');
    const val = _toString(json['attributes']['mod_HandlePosLogic'], 'mod_HandlePosLogic');
    internal_leaveValidateVariant();
    this.mod_HandlePosLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDrill');
    const val = _toBoolean(json['attributes']['mod_HandleDrill'], 'mod_HandleDrill');
    internal_leaveValidateVariant();
    this.mod_HandleDrill = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleColor');
    const val = _toString(json['attributes']['mod_HandleColor'], 'mod_HandleColor');
    internal_leaveValidateVariant();
    this.mod_HandleColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLength');
    const val = _toFloat(json['attributes']['mod_HandleLength'], 'mod_HandleLength');
    internal_leaveValidateVariant();
    this.mod_HandleLength = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
    const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
    internal_leaveValidateVariant();
    this.mod_HandleDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FramePartsWidthHor');
    const val = _toFloat(json['attributes']['mod_FramePartsWidthHor'], 'mod_FramePartsWidthHor');
    internal_leaveValidateVariant();
    this.mod_FramePartsWidthHor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FramePartsWidthVert');
    const val = _toFloat(json['attributes']['mod_FramePartsWidthVert'], 'mod_FramePartsWidthVert');
    internal_leaveValidateVariant();
    this.mod_FramePartsWidthVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PanelWoodFrameFillingType');
    const val = _toString(json['attributes']['mod_PanelWoodFrameFillingType'], 'mod_PanelWoodFrameFillingType');
    internal_leaveValidateVariant();
    this.mod_PanelWoodFrameFillingType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PanelWoodFrameType');
    const val = _toString(json['attributes']['mod_PanelWoodFrameType'], 'mod_PanelWoodFrameType');
    internal_leaveValidateVariant();
    this.mod_PanelWoodFrameType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrameFillingWoodColor');
    const val = _toString(json['attributes']['mod_FrameFillingWoodColor'], 'mod_FrameFillingWoodColor');
    internal_leaveValidateVariant();
    this.mod_FrameFillingWoodColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGlassColor');
    const val = _toString(json['attributes']['mod_FrontGlassColor'], 'mod_FrontGlassColor');
    internal_leaveValidateVariant();
    this.mod_FrontGlassColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaPosLogic');
    const val = _toString(json['attributes']['mod_PlinthAreaPosLogic'], 'mod_PlinthAreaPosLogic');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaPosLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfbtmThk');
    const val = _toFloat(json['attributes']['mod_ShelfbtmThk'], 'mod_ShelfbtmThk');
    internal_leaveValidateVariant();
    this.mod_ShelfbtmThk = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes():void {
    if (this.#mod_Depth === undefined) {
      logWarning('The required attribute "mod_Depth" was not set in the order data');
    }
    if (this.#mod_Height === undefined) {
      logWarning('The required attribute "mod_Height" was not set in the order data');
    }
    if (this.#mod_ModuleName !== undefined) {
      this.#mod_ModuleName = undefined;
      logWarning('The attribute "mod_ModuleName" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ParentName !== undefined) {
      this.#mod_ParentName = undefined;
      logWarning('The attribute "mod_ParentName" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_Width === undefined) {
      logWarning('The required attribute "mod_Width" was not set in the order data');
    }
    if (this.#mod_ShelfbtmThk !== undefined) {
      this.#mod_ShelfbtmThk = undefined;
      logWarning('The attribute "mod_ShelfbtmThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
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
    if (this.mod_FrontColor === undefined) {
      this.mod_FrontColor = "240";
    }
    if (this.mod_CountertopThk === undefined) {
      this.mod_CountertopThk = 25;
    }
    if (this.mod_CreateCountertop === undefined) {
      this.mod_CreateCountertop = true;
    }
    if (this.mod_CreatePaneltop === undefined) {
      this.mod_CreatePaneltop = false;
    }
    if (this.mod_CreateFingergrip === undefined) {
      this.mod_CreateFingergrip = false;
    }
    if (this.mod_CreateToekick === undefined) {
      this.mod_CreateToekick = true;
    }
    if (this.mod_FingergripType === undefined) {
      this.mod_FingergripType = "None";
    }
    if (this.mod_FrontEdgeColor === undefined) {
      this.mod_FrontEdgeColor = "Automatic";
    }
    if (this.mod_FrontEdgeThk === undefined) {
      this.mod_FrontEdgeThk = "0";
    }
    if (this.mod_FrontProgram === undefined) {
      this.mod_FrontProgram = "Classic";
    }
    if (this.mod_HeightPosInsertion === undefined) {
      this.mod_HeightPosInsertion = 0;
    }
    if (this.mod_Model === undefined) {
      this.mod_Model = "Classic";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mr_Appliance";
    }
    if (this.mod_ParentName === undefined) {
      this.mod_ParentName = "mr_Appliance";
    }
    if (this.mod_PlinthAreaElementColor === undefined) {
      this.mod_PlinthAreaElementColor = "Black";
    }
    if (this.mod_PlinthAreaVisLeft === undefined) {
      this.mod_PlinthAreaVisLeft = false;
    }
    if (this.mod_PlinthAreaVisRight === undefined) {
      this.mod_PlinthAreaVisRight = false;
    }
    if (this.mod_TypeElement === undefined) {
      this.mod_TypeElement = "BaseUnit";
    }
    if (this.mod_CarcaseDistanceWall === undefined) {
      this.mod_CarcaseDistanceWall = 0;
    }
    if (this.mod_HandleDrill === undefined) {
      this.mod_HandleDrill = true;
    }
    if (this.mod_HandleDesign === undefined) {
      this.mod_HandleDesign = "20";
    }
    if (this.mod_FrameFillingWoodColor === undefined) {
      this.mod_FrameFillingWoodColor = "LikeFrameColor";
    }
    if (this.mod_FrontGlassColor === undefined) {
      this.mod_FrontGlassColor = "FloatGlass";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_FrontDesign === undefined) {
      this.mod_FrontDesign = this.g.basic_FrontDesign;
    }
    if (this.mod_FrontGapCarcase === undefined) {
      this.mod_FrontGapCarcase = this.g.basic_FrontGapCarcase;
    }
    if (this.mod_FrontGapHor === undefined) {
      this.mod_FrontGapHor = this.g.basic_FrontGapHor;
    }
    if (this.mod_FrontGapHorTop === undefined) {
      this.mod_FrontGapHorTop = this.g.basic_FrontGapHorTop;
    }
    if (this.mod_FrontGapVert === undefined) {
      this.mod_FrontGapVert = this.g.basic_FrontGapVert;
    }
    if (this.mod_FrontPosStart === undefined) {
      this.mod_FrontPosStart = this.g.basic_FrontPosStart;
    }
    if (this.mod_PlinthAreaDesign === undefined) {
      this.mod_PlinthAreaDesign = this.g.basic_PlinthAreaDesign;
    }
    if (this.mod_PlinthAreaExtraItem === undefined) {
      this.mod_PlinthAreaExtraItem = this.g.basic_PlinthAreaExtraItem;
    }
    if (this.mod_PlinthAreaHeight === undefined) {
      this.mod_PlinthAreaHeight = this.g.basic_PlinthAreaHeight;
    }
    if (this.mod_PlinthAreaPosBackMatrix === undefined) {
      this.mod_PlinthAreaPosBackMatrix = this.g.basic_PlinthAreaPosBackMatrix;
    }
    if (this.mod_PlinthAreaPosFrontMatrix === undefined) {
      this.mod_PlinthAreaPosFrontMatrix = this.g.basic_PlinthAreaPosFrontMatrix;
    }
    if (this.mod_PlinthAreaPosLeftMatrix === undefined) {
      this.mod_PlinthAreaPosLeftMatrix = this.g.basic_PlinthAreaPosLeftMatrix;
    }
    if (this.mod_PlinthAreaPosRightMatrix === undefined) {
      this.mod_PlinthAreaPosRightMatrix = this.g.basic_PlinthAreaPosRightMatrix;
    }
    if (this.mod_HardwareColor === undefined) {
      this.mod_HardwareColor = this.g.basic_HardwareColor;
    }
    if (this.mod_HandleLine === undefined) {
      this.mod_HandleLine = this.g.basic_HandleLine;
    }
    if (this.mod_HandlePosType === undefined) {
      this.mod_HandlePosType = this.g.basic_HandlePosType;
    }
    if (this.mod_HandlePosLogic === undefined) {
      this.mod_HandlePosLogic = this.g.basic_HandlePosLogic;
    }
    if (this.mod_HandleColor === undefined) {
      this.mod_HandleColor = this.g.basic_HandleColor;
    }
    if (this.mod_HandleLength === undefined) {
      this.mod_HandleLength = this.g.basic_HandleLength;
    }
    if (this.mod_FramePartsWidthHor === undefined) {
      this.mod_FramePartsWidthHor = this.g.basic_FramePartsWidthHor;
    }
    if (this.mod_FramePartsWidthVert === undefined) {
      this.mod_FramePartsWidthVert = this.g.basic_FramePartsWidthVert;
    }
    if (this.mod_PanelWoodFrameFillingType === undefined) {
      this.mod_PanelWoodFrameFillingType = this.g.basic_PanelWoodFrameFillingType;
    }
    if (this.mod_PanelWoodFrameType === undefined) {
      this.mod_PanelWoodFrameType = this.g.basic_PanelWoodFrameType;
    }
    if (this.mod_PlinthAreaPosLogic === undefined) {
      this.mod_PlinthAreaPosLogic = this.g.basic_PlinthAreaPosLogic;
    }
    if (this.mod_ShelfbtmThk === undefined) {
      this.mod_ShelfbtmThk = this.g.basic_ShelfbtmThk;
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
    this.#dataCompletionSetDefaultValues();
    // Optionally set the global variables based on this root data
    internal_enterDataCompletionSetGlobalVars(this.modId, this._id);
    this._g!.setRootModuleData(this);
    internal_leaveDataCompletionSetGlobalVars();
    this.#dataCompletionSetDefaultScripts();
    this.m.forEach(subMod => subMod.dataCompletion());
  }

  override manufacturerDataCompletion():void {
    this.#manufacturerDataCompletionInternal();
    this.m.forEach(subMod => subMod.manufacturerDataCompletion());
  }
  #manufacturerDataCompletionInternal = mr_Appliance_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mr_Appliance_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mr_Appliance{
    this.afterDataCompletion();
    const adc = new OD_M_mr_Appliance_NonNull(this);
    return adc;
  }

  addOD_M_mf_Dishwasher(index?: number): dc_mf_Dishwasher {
    var m = new OD_M_mf_Dishwasher(this);
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
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this);
    this.mod_CountertopThk_matrix = VariantValidation.mod_CountertopThk(this, this);
    this.mod_CreateCountertop_matrix = VariantValidation.mod_CreateCountertop(this, this);
    this.mod_CreatePaneltop_matrix = VariantValidation.mod_CreatePaneltop(this, this);
    this.mod_CreateFingergrip_matrix = VariantValidation.mod_CreateFingergrip(this, this);
    this.mod_CreateToekick_matrix = VariantValidation.mod_CreateToekick(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_FingergripType_matrix = VariantValidation.mod_FingergripType(this, this);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this);
    this.mod_FrontEdgeColor_matrix = VariantValidation.mod_FrontEdgeColor(this, this);
    this.mod_FrontEdgeThk_matrix = VariantValidation.mod_FrontEdgeThk(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this);
    this.mod_FrontGapHorTop_matrix = VariantValidation.mod_FrontGapHorTop(this, this);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this);
    this.mod_Model_matrix = VariantValidation.mod_Model(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this);
    this.mod_PlinthAreaDesign_matrix = VariantValidation.mod_PlinthAreaDesign(this, this);
    this.mod_PlinthAreaElementColor_matrix = VariantValidation.mod_PlinthAreaElementColor(this, this);
    this.mod_PlinthAreaExtraItem_matrix = VariantValidation.mod_PlinthAreaExtraItem(this, this);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this);
    this.mod_PlinthAreaPosBackMatrix_matrix = VariantValidation.mod_PlinthAreaPosBackMatrix(this, this);
    this.mod_PlinthAreaPosFrontMatrix_matrix = VariantValidation.mod_PlinthAreaPosFrontMatrix(this, this);
    this.mod_PlinthAreaPosLeftMatrix_matrix = VariantValidation.mod_PlinthAreaPosLeftMatrix(this, this);
    this.mod_PlinthAreaPosRightMatrix_matrix = VariantValidation.mod_PlinthAreaPosRightMatrix(this, this);
    this.mod_PlinthAreaVisLeft_matrix = VariantValidation.mod_PlinthAreaVisLeft(this, this);
    this.mod_PlinthAreaVisRight_matrix = VariantValidation.mod_PlinthAreaVisRight(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_CarcaseDistanceWall_matrix = VariantValidation.mod_CarcaseDistanceWall(this, this);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this);
    this.mod_HandleLine_matrix = VariantValidation.mod_HandleLine(this, this);
    this.mod_HandlePosType_matrix = VariantValidation.mod_HandlePosType(this, this);
    this.mod_HandlePosLogic_matrix = VariantValidation.mod_HandlePosLogic(this, this);
    this.mod_HandleDrill_matrix = VariantValidation.mod_HandleDrill(this, this);
    this.mod_HandleColor_matrix = VariantValidation.mod_HandleColor(this, this);
    this.mod_HandleLength_matrix = VariantValidation.mod_HandleLength(this, this);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this);
    this.mod_FramePartsWidthHor_matrix = VariantValidation.mod_FramePartsWidthHor(this, this);
    this.mod_FramePartsWidthVert_matrix = VariantValidation.mod_FramePartsWidthVert(this, this);
    this.mod_PanelWoodFrameFillingType_matrix = VariantValidation.mod_PanelWoodFrameFillingType(this, this);
    this.mod_PanelWoodFrameType_matrix = VariantValidation.mod_PanelWoodFrameType(this, this);
    this.mod_FrameFillingWoodColor_matrix = VariantValidation.mod_FrameFillingWoodColor(this, this);
    this.mod_FrontGlassColor_matrix = VariantValidation.mod_FrontGlassColor(this, this);
    this.mod_PlinthAreaPosLogic_matrix = VariantValidation.mod_PlinthAreaPosLogic(this, this);
    this.mod_ShelfbtmThk_matrix = VariantValidation.mod_ShelfbtmThk(this, this);
  }
  addpart_DropZone(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DropZone_PartVarsWritable {
    var c = new P_part_DropZone(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_PlinthAreaUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PlinthAreaUnit_PartVarsWritable {
    var c = new P_part_PlinthAreaUnit(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mr_Appliance_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mr_Appliance_NonNull implements cbp_mr_Appliance, adc_mr_Appliance ,IPartParentsNonNull_mr_Appliance_mr_Filler01,IPartParentsNonNull_mr_Appliance {
  constructor(parent: OD_M_mr_Appliance) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_mr_Appliance;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.#internalParent.addGenerationContour(
      generationMethod,
      height,
      contour
    );
  }
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
  #createBuildPlanInternal = mr_Appliance_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mr_Appliance_afterDataCompletion;
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
  get dockingInfo() { return this.#internalParent.dockingInfo; }
  addDockingInfo(id: Dock, start: Vector3, end: Vector3): IDockingInfo {     return this.#internalParent.addDockingInfo(id, start, end);   }
get insertLevelInfo(): IInsertLevelInfo[] { return this.#internalParent.insertLevelInfo; }
get insertLevelFixed(): boolean { return this.#internalParent.insertLevelFixed; }
set insertLevelFixed(value: boolean) { this.#internalParent.insertLevelFixed = value; }
addInsertLevelHeight(height:number, isDefault: boolean|undefined = undefined) : IInsertLevelInfo  { return this.#internalParent.addInsertLevelHeight(height, isDefault); }
  addpart_DropZone(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DropZone_PartVarsWritable {
    return this.#internalParent.addpart_DropZone(x, y, z, dimx, dimy, dimz);
  }
  addpart_PlinthAreaUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PlinthAreaUnit_PartVarsWritable {
    return this.#internalParent.addpart_PlinthAreaUnit(x, y, z, dimx, dimy, dimz);
  }
  get mod_FrontColor(): string  {
    return this.#internalParent.mod_FrontColor!;
  }
  get mod_FrontColor_matrix(): IMatrix_mod_FrontColor {
    return this.#internalParent.mod_FrontColor_matrix!;
  }
  get mod_CountertopInfo(): string [] {
    return this.#internalParent.mod_CountertopInfo!;
  }
  get mod_CountertopThk(): number  {
    return this.#internalParent.mod_CountertopThk!;
  }
  get mod_CreateCountertop(): boolean  {
    return this.#internalParent.mod_CreateCountertop!;
  }
  get mod_CreatePaneltop(): boolean  {
    return this.#internalParent.mod_CreatePaneltop!;
  }
  get mod_CreateFingergrip(): boolean  {
    return this.#internalParent.mod_CreateFingergrip!;
  }
  get mod_CreateToekick(): boolean  {
    return this.#internalParent.mod_CreateToekick!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_FingergripType(): string  {
    return this.#internalParent.mod_FingergripType!;
  }
  get mod_FingergripType_matrix(): IMatrix_mod_FingergripType {
    return this.#internalParent.mod_FingergripType_matrix!;
  }
  get mod_FrontDesign(): string  {
    return this.#internalParent.mod_FrontDesign!;
  }
  get mod_FrontEdgeColor(): string  {
    return this.#internalParent.mod_FrontEdgeColor!;
  }
  get mod_FrontEdgeThk(): string  {
    return this.#internalParent.mod_FrontEdgeThk!;
  }
  get mod_FrontGapCarcase(): number  {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_FrontGapHor(): number  {
    return this.#internalParent.mod_FrontGapHor!;
  }
  get mod_FrontGapHorTop(): number  {
    return this.#internalParent.mod_FrontGapHorTop!;
  }
  get mod_FrontGapVert(): number  {
    return this.#internalParent.mod_FrontGapVert!;
  }
  get mod_FrontPosStart(): number  {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontProgram(): string  {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_HeightPosInsertion(): number  {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  get mod_Model(): string  {
    return this.#internalParent.mod_Model!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_ParentName(): string  {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_PlinthAreaDesign(): string  {
    return this.#internalParent.mod_PlinthAreaDesign!;
  }
  get mod_PlinthAreaDesign_matrix(): IMatrix_mod_PlinthAreaDesign {
    return this.#internalParent.mod_PlinthAreaDesign_matrix!;
  }
  get mod_PlinthAreaElementColor(): string  {
    return this.#internalParent.mod_PlinthAreaElementColor!;
  }
  get mod_PlinthAreaExtraItem(): string  {
    return this.#internalParent.mod_PlinthAreaExtraItem!;
  }
  get mod_PlinthAreaExtraItem_matrix(): IMatrix_mod_PlinthAreaExtraItem {
    return this.#internalParent.mod_PlinthAreaExtraItem_matrix!;
  }
  get mod_PlinthAreaHeight(): number  {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_PlinthAreaPosBackMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosBackMatrix!;
  }
  get mod_PlinthAreaPosFrontMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosFrontMatrix!;
  }
  get mod_PlinthAreaPositionInfo(): string [] {
    return this.#internalParent.mod_PlinthAreaPositionInfo!;
  }
  get mod_PlinthAreaPosLeftMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosLeftMatrix!;
  }
  get mod_PlinthAreaPosRightMatrix(): string  {
    return this.#internalParent.mod_PlinthAreaPosRightMatrix!;
  }
  get mod_PlinthAreaVisLeft(): boolean  {
    return this.#internalParent.mod_PlinthAreaVisLeft!;
  }
  get mod_PlinthAreaVisRight(): boolean  {
    return this.#internalParent.mod_PlinthAreaVisRight!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_CarcaseDistanceWall(): number  {
    return this.#internalParent.mod_CarcaseDistanceWall!;
  }
  get mod_HardwareColor(): string  {
    return this.#internalParent.mod_HardwareColor!;
  }
  get mod_HandleLine(): number  {
    return this.#internalParent.mod_HandleLine!;
  }
  get mod_HandlePosType(): string  {
    return this.#internalParent.mod_HandlePosType!;
  }
  get mod_HandlePosLogic(): string  {
    return this.#internalParent.mod_HandlePosLogic!;
  }
  get mod_HandleDrill(): boolean  {
    return this.#internalParent.mod_HandleDrill!;
  }
  get mod_HandleColor(): string  {
    return this.#internalParent.mod_HandleColor!;
  }
  get mod_HandleLength(): number  {
    return this.#internalParent.mod_HandleLength!;
  }
  get mod_HandleDesign(): string  {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_FramePartsWidthHor(): number  {
    return this.#internalParent.mod_FramePartsWidthHor!;
  }
  get mod_FramePartsWidthVert(): number  {
    return this.#internalParent.mod_FramePartsWidthVert!;
  }
  get mod_PanelWoodFrameFillingType(): string  {
    return this.#internalParent.mod_PanelWoodFrameFillingType!;
  }
  get mod_PanelWoodFrameFillingType_matrix(): IMatrix_mod_PanelWoodFrameFillingType {
    return this.#internalParent.mod_PanelWoodFrameFillingType_matrix!;
  }
  get mod_PanelWoodFrameType(): string  {
    return this.#internalParent.mod_PanelWoodFrameType!;
  }
  get mod_FrameFillingWoodColor(): string  {
    return this.#internalParent.mod_FrameFillingWoodColor!;
  }
  get mod_FrontGlassColor(): string  {
    return this.#internalParent.mod_FrontGlassColor!;
  }
  get mod_DropZoneVisible(): boolean [] {
    return this.#internalParent.mod_DropZoneVisible!;
  }
  get mod_PlinthAreaPosLogic(): string  {
    return this.#internalParent.mod_PlinthAreaPosLogic!;
  }
  get mod_ShelfbtmThk(): number  {
    return this.#internalParent.mod_ShelfbtmThk!;
  }
  get mod_InformationList(): string [] {
    return this.#internalParent.mod_InformationList!;
  }
  addOD_M_mf_Dishwasher(index?: number): dc_mf_Dishwasher {
    return this.#internalParent.addOD_M_mf_Dishwasher(index);
  }
}

