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
import { IModParents_mf_CornerFillerFront } from '../mod-interfaces'
import { IP_part_FillerHardware_PartVarsWritable, P_part_FillerHardware } from '../parts/part_FillerHardware'
import { IP_part_FillerHardwareProcessing_PartVarsWritable, P_part_FillerHardwareProcessing } from '../parts/part_FillerHardwareProcessing'
import { IP_part_FillerUnit_PartVarsWritable, P_part_FillerUnit } from '../parts/part_FillerUnit'
import { OD_M_mc_ThermoformedPanel01, dc_mc_ThermoformedPanel01 } from './mc_ThermoformedPanel01'
import { OD_M_mc_PanelWoodFrame01, dc_mc_PanelWoodFrame01 } from './mc_PanelWoodFrame01'
import { OD_M_mc_MetalFrame01, dc_mc_MetalFrame01 } from './mc_MetalFrame01'
import { OD_M_mc_Handlestrip01, dc_mc_Handlestrip01 } from './mc_Handlestrip01'
import { OD_M_mc_Handle01, dc_mc_Handle01 } from './mc_Handle01'
import { OD_M_mc_FrontPanel01, dc_mc_FrontPanel01 } from './mc_FrontPanel01'
import { IModuleNonNull_mc_CornerFillerFront01,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_FillerFront01_mf_CornerFillerFront,IModParents_mc_CornerFillerFront01_mc_FillerFront01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_FillerFront01_mf_CornerFillerFront,IPartParentsNonNull_mc_CornerFillerFront01_mc_FillerFront01} from '../mod-interfaces'
import {IModVar_mod_CarcaseDirection,IModVarNonNull_mod_CarcaseDirection,IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CornerunitFrontWidth,IModVarNonNull_mod_CornerunitFrontWidth,IModVar_mod_CornerunitStraightConstruction,IModVarNonNull_mod_CornerunitStraightConstruction,IModVar_mod_FingergripTop,IModVarNonNull_mod_FingergripTop,IModVar_mod_FrontColor,IModVarNonNull_mod_FrontColor,IModVar_mod_FrontDesign,IModVarNonNull_mod_FrontDesign,IModVar_mod_FrontEdgeColor,IModVarNonNull_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVarNonNull_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVarNonNull_mod_FrontGapHor,IModVar_mod_FrontGapVert,IModVarNonNull_mod_FrontGapVert,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_FrontOversizeBtm,IModVarNonNull_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeTop,IModVarNonNull_mod_FrontOversizeTop,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_ParentName,IModVarNonNull_mod_ParentName,IModVar_mod_PlinthAreaHeight,IModVarNonNull_mod_PlinthAreaHeight,IModVar_mod_HandleDesign,IModVarNonNull_mod_HandleDesign,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FrontThk,IModVarNonNull_mod_FrontThk,IModVar_mod_DoorDirection,IModVarNonNull_mod_DoorDirection,IModVar_mod_HandlePosMatrix,IModVarNonNull_mod_HandlePosMatrix,IModVar_mod_HandlePosType,IModVarNonNull_mod_HandlePosType,IModVar_mod_HandleColor,IModVarNonNull_mod_HandleColor,IModVar_mod_CornerunitStraightFillerConstruction,IModVarNonNull_mod_CornerunitStraightFillerConstruction,IModVar_mod_FillerType,IModVarNonNull_mod_FillerType,IModVar_mod_FillerHardware,IModVarNonNull_mod_FillerHardware,IModVar_mod_Direction,IModVarNonNull_mod_Direction,IModVar_mod_CarcasePartInfo,IModVarNonNull_mod_CarcasePartInfo,IModVar_mod_FillerHardwareInfo,IModVarNonNull_mod_FillerHardwareInfo,IModVar_mod_Originpos,IModVarNonNull_mod_Originpos,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_FingergripTopType,IModVarNonNull_mod_FingergripTopType,IModVar_mod_FingergripBtmType,IModVarNonNull_mod_FingergripBtmType} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseDirection, IMatrix_mod_CarcaseId, IMatrix_mod_CornerunitFrontWidth, IMatrix_mod_CornerunitStraightConstruction, IMatrix_mod_FingergripTop, IMatrix_mod_FrontColor, IMatrix_mod_FrontDesign, IMatrix_mod_FrontEdgeColor, IMatrix_mod_FrontEdgeThk, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapVert, IMatrix_mod_FrontId, IMatrix_mod_FrontOversizeBtm, IMatrix_mod_FrontOversizeTop, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontProgram, IMatrix_mod_ModuleName, IMatrix_mod_ParentName, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_HandleDesign, IMatrix_mod_FrontWidth, IMatrix_mod_FrontHeight, IMatrix_mod_FrontThk, IMatrix_mod_DoorDirection, IMatrix_mod_HandlePosMatrix, IMatrix_mod_HandlePosType, IMatrix_mod_HandleColor, IMatrix_mod_CornerunitStraightFillerConstruction, IMatrix_mod_FillerType, IMatrix_mod_FillerHardware, IMatrix_mod_Direction, IMatrix_mod_TypeElement, IMatrix_mod_FingergripTopType, IMatrix_mod_FingergripBtmType} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_FillerHardware, IPartAdd_part_FillerHardwareProcessing, IPartAdd_part_FillerUnit } from '../part-add-interfaces';
import { mc_CornerFillerFront01_createBuildPlan, mc_CornerFillerFront01_afterDataCompletion, mc_CornerFillerFront01_manufacturerDataCompletion } from '../../modules/mc_CornerFillerFront01';

export interface cbp_mc_CornerFillerFront01 extends IModBaseProp
, IPartAdd_part_FillerHardware, IPartAdd_part_FillerHardwareProcessing, IPartAdd_part_FillerUnit, IModVarNonNull_mod_CarcaseDirection, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CornerunitFrontWidth, IModVarNonNull_mod_CornerunitStraightConstruction, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_CornerunitStraightFillerConstruction, IModVarNonNull_mod_FillerType, IModVarNonNull_mod_FillerHardware, IModVarNonNull_mod_Direction, IModVarNonNull_mod_CarcasePartInfo, IModVarNonNull_mod_FillerHardwareInfo, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_FingergripBtmType {
  parent: IModParents_mf_CornerFillerFront;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
  ct_tab_FrontConstruction: ct2_tab_FrontConstruction;
}

export interface dc_mc_CornerFillerFront01 extends IModBaseProp
, IModVar_mod_CarcaseDirection, IModVar_mod_CarcaseId, IModVar_mod_CornerunitFrontWidth, IModVar_mod_CornerunitStraightConstruction, IModVar_mod_FingergripTop, IModVar_mod_FrontColor, IModVar_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapVert, IModVar_mod_FrontId, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontPosStart, IModVar_mod_FrontProgram, IModVar_mod_ModuleName, IModVar_mod_ParentName, IModVar_mod_PlinthAreaHeight, IModVar_mod_HandleDesign, IModVar_mod_FrontWidth, IModVar_mod_FrontHeight, IModVar_mod_FrontThk, IModVar_mod_DoorDirection, IModVar_mod_HandlePosMatrix, IModVar_mod_HandlePosType, IModVar_mod_HandleColor, IModVar_mod_CornerunitStraightFillerConstruction, IModVar_mod_FillerType, IModVar_mod_FillerHardware, IModVar_mod_Direction, IModVar_mod_CarcasePartInfo, IModVar_mod_FillerHardwareInfo, IModVar_mod_Originpos, IModVar_mod_TypeElement, IModVar_mod_FingergripTopType, IModVar_mod_FingergripBtmType {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_CornerFillerFront01;
  parent: IModParents_mf_CornerFillerFront;
  addOD_M_mc_ThermoformedPanel01(index?: number): dc_mc_ThermoformedPanel01;
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01;
  addOD_M_mc_MetalFrame01(index?: number): dc_mc_MetalFrame01;
  addOD_M_mc_Handlestrip01(index?: number): dc_mc_Handlestrip01;
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01;
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01;
}

export interface adc_mc_CornerFillerFront01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseDirection, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CornerunitFrontWidth, IModVarNonNull_mod_CornerunitStraightConstruction, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_CornerunitStraightFillerConstruction, IModVarNonNull_mod_FillerType, IModVarNonNull_mod_FillerHardware, IModVarNonNull_mod_Direction, IModVarNonNull_mod_CarcasePartInfo, IModVarNonNull_mod_FillerHardwareInfo, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_FingergripBtmType {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_ThermoformedPanel01(index?: number): dc_mc_ThermoformedPanel01;
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01;
  addOD_M_mc_MetalFrame01(index?: number): dc_mc_MetalFrame01;
  addOD_M_mc_Handlestrip01(index?: number): dc_mc_Handlestrip01;
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01;
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01;
  ct_tab_FrontConstruction: ct2_tab_FrontConstruction;
}

export class OD_M_mc_CornerFillerFront01 extends OD_Base  implements dc_mc_CornerFillerFront01
,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_FillerFront01_mf_CornerFillerFront,IModParents_mc_CornerFillerFront01_mc_FillerFront01
,IModVar_mod_CarcaseDirection,IModVar_mod_CarcaseId,IModVar_mod_CornerunitFrontWidth,IModVar_mod_CornerunitStraightConstruction,IModVar_mod_FingergripTop,IModVar_mod_FrontColor,IModVar_mod_FrontDesign,IModVar_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVar_mod_FrontGapVert,IModVar_mod_FrontId,IModVar_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeTop,IModVar_mod_FrontPosStart,IModVar_mod_FrontProgram,IModVar_mod_ModuleName,IModVar_mod_ParentName,IModVar_mod_PlinthAreaHeight,IModVar_mod_HandleDesign,IModVar_mod_FrontWidth,IModVar_mod_FrontHeight,IModVar_mod_FrontThk,IModVar_mod_DoorDirection,IModVar_mod_HandlePosMatrix,IModVar_mod_HandlePosType,IModVar_mod_HandleColor,IModVar_mod_CornerunitStraightFillerConstruction,IModVar_mod_FillerType,IModVar_mod_FillerHardware,IModVar_mod_Direction,IModVar_mod_CarcasePartInfo,IModVar_mod_FillerHardwareInfo,IModVar_mod_Originpos,IModVar_mod_TypeElement,IModVar_mod_FingergripTopType,IModVar_mod_FingergripBtmType
 {
  constructor(parent: IModParents_mf_CornerFillerFront, manufacturerMode?:boolean) {
    super('mc_CornerFillerFront01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_CornerFillerFront01_NonNull(this);
  }
  parent: IModParents_mf_CornerFillerFront;
  _selfNonNull: OD_M_mc_CornerFillerFront01_NonNull;

  override variants:string[] = ['mod_CarcaseDirection','mod_CarcaseId','mod_CornerunitFrontWidth','mod_CornerunitStraightConstruction','mod_FingergripTop','mod_FrontColor','mod_FrontDesign','mod_FrontEdgeColor','mod_FrontEdgeThk','mod_FrontGapCarcase','mod_FrontGapHor','mod_FrontGapVert','mod_FrontId','mod_FrontOversizeBtm','mod_FrontOversizeTop','mod_FrontPosStart','mod_FrontProgram','mod_ModuleName','mod_ParentName','mod_PlinthAreaHeight','mod_HandleDesign','mod_FrontWidth','mod_FrontHeight','mod_FrontThk','mod_DoorDirection','mod_HandlePosMatrix','mod_HandlePosType','mod_HandleColor','mod_CornerunitStraightFillerConstruction','mod_FillerType','mod_FillerHardware','mod_Direction','mod_CarcasePartInfo','mod_FillerHardwareInfo','mod_Originpos','mod_TypeElement','mod_FingergripTopType','mod_FingergripBtmType',];
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
  #mod_FrontId?: string;
  get mod_FrontId(): string | undefined { return this.#mod_FrontId}
  set mod_FrontId(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontId === value) return;
    this.#mod_FrontId = value;
  }

  mod_FrontId_matrix?: IMatrix_mod_FrontId;
  #mod_FrontOversizeBtm?: number;
  get mod_FrontOversizeBtm(): number | undefined { return this.#mod_FrontOversizeBtm}
  set mod_FrontOversizeBtm(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontOversizeBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontOversizeBtm === value) return;
    this.#mod_FrontOversizeBtm = value;
  }

  mod_FrontOversizeBtm_matrix?: IMatrix_mod_FrontOversizeBtm;
  #mod_FrontOversizeTop?: number;
  get mod_FrontOversizeTop(): number | undefined { return this.#mod_FrontOversizeTop}
  set mod_FrontOversizeTop(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontOversizeTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontOversizeTop === value) return;
    this.#mod_FrontOversizeTop = value;
  }

  mod_FrontOversizeTop_matrix?: IMatrix_mod_FrontOversizeTop;
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
  #mod_FrontWidth?: number;
  get mod_FrontWidth(): number | undefined { return this.#mod_FrontWidth}
  set mod_FrontWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontWidth === value) return;
    this.#mod_FrontWidth = value;
  }

  mod_FrontWidth_matrix?: IMatrix_mod_FrontWidth;
  #mod_FrontHeight?: number;
  get mod_FrontHeight(): number | undefined { return this.#mod_FrontHeight}
  set mod_FrontHeight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontHeight === value) return;
    this.#mod_FrontHeight = value;
  }

  mod_FrontHeight_matrix?: IMatrix_mod_FrontHeight;
  #mod_FrontThk?: number;
  get mod_FrontThk(): number | undefined { return this.#mod_FrontThk}
  set mod_FrontThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontThk === value) return;
    this.#mod_FrontThk = value;
  }

  mod_FrontThk_matrix?: IMatrix_mod_FrontThk;
  #mod_DoorDirection?: string;
  get mod_DoorDirection(): string | undefined { return this.#mod_DoorDirection}
  set mod_DoorDirection(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DoorDirection' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DoorDirection === value) return;
    this.#mod_DoorDirection = value;
  }

  mod_DoorDirection_matrix?: IMatrix_mod_DoorDirection;
  #mod_HandlePosMatrix?: string;
  get mod_HandlePosMatrix(): string | undefined { return this.#mod_HandlePosMatrix}
  set mod_HandlePosMatrix(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandlePosMatrix' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandlePosMatrix === value) return;
    this.#mod_HandlePosMatrix = value;
  }

  mod_HandlePosMatrix_matrix?: IMatrix_mod_HandlePosMatrix;
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
  #mod_CornerunitStraightFillerConstruction?: string;
  get mod_CornerunitStraightFillerConstruction(): string | undefined { return this.#mod_CornerunitStraightFillerConstruction}
  set mod_CornerunitStraightFillerConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CornerunitStraightFillerConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CornerunitStraightFillerConstruction === value) return;
    this.#mod_CornerunitStraightFillerConstruction = value;
  }

  mod_CornerunitStraightFillerConstruction_matrix?: IMatrix_mod_CornerunitStraightFillerConstruction;
  #mod_FillerType?: string;
  get mod_FillerType(): string | undefined { return this.#mod_FillerType}
  set mod_FillerType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FillerType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FillerType === value) return;
    this.#mod_FillerType = value;
  }

  mod_FillerType_matrix?: IMatrix_mod_FillerType;
  #mod_FillerHardware?: string;
  get mod_FillerHardware(): string | undefined { return this.#mod_FillerHardware}
  set mod_FillerHardware(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FillerHardware' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FillerHardware === value) return;
    this.#mod_FillerHardware = value;
  }

  mod_FillerHardware_matrix?: IMatrix_mod_FillerHardware;
  #mod_Direction?: string;
  get mod_Direction(): string | undefined { return this.#mod_Direction}
  set mod_Direction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Direction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Direction === value) return;
    this.#mod_Direction = value;
  }

  mod_Direction_matrix?: IMatrix_mod_Direction;
  #mod_CarcasePartInfo: string[] = [];
  get mod_CarcasePartInfo(): string[] { return this.#mod_CarcasePartInfo;}
  #mod_FillerHardwareInfo: string[] = [];
  get mod_FillerHardwareInfo(): string[] { return this.#mod_FillerHardwareInfo;}
  #mod_Originpos: number[] = [];
  get mod_Originpos(): number[] { return this.#mod_Originpos;}
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
  #mod_FingergripTopType?: string;
  get mod_FingergripTopType(): string | undefined { return this.#mod_FingergripTopType}
  set mod_FingergripTopType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripTopType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripTopType === value) return;
    this.#mod_FingergripTopType = value;
  }

  mod_FingergripTopType_matrix?: IMatrix_mod_FingergripTopType;
  #mod_FingergripBtmType?: string;
  get mod_FingergripBtmType(): string | undefined { return this.#mod_FingergripBtmType}
  set mod_FingergripBtmType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FingergripBtmType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FingergripBtmType === value) return;
    this.#mod_FingergripBtmType = value;
  }

  mod_FingergripBtmType_matrix?: IMatrix_mod_FingergripBtmType;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_CarcaseDirection', this.mod_CarcaseDirection);
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CornerunitFrontWidth', this.mod_CornerunitFrontWidth);
  res.set('mod_CornerunitStraightConstruction', this.mod_CornerunitStraightConstruction);
  res.set('mod_FingergripTop', this.mod_FingergripTop);
  res.set('mod_FrontColor', this.mod_FrontColor);
  res.set('mod_FrontDesign', this.mod_FrontDesign);
  res.set('mod_FrontEdgeColor', this.mod_FrontEdgeColor);
  res.set('mod_FrontEdgeThk', this.mod_FrontEdgeThk);
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_FrontGapHor', this.mod_FrontGapHor);
  res.set('mod_FrontGapVert', this.mod_FrontGapVert);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_FrontOversizeBtm', this.mod_FrontOversizeBtm);
  res.set('mod_FrontOversizeTop', this.mod_FrontOversizeTop);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_ParentName', this.mod_ParentName);
  res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
  res.set('mod_HandleDesign', this.mod_HandleDesign);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FrontThk', this.mod_FrontThk);
  res.set('mod_DoorDirection', this.mod_DoorDirection);
  res.set('mod_HandlePosMatrix', this.mod_HandlePosMatrix);
  res.set('mod_HandlePosType', this.mod_HandlePosType);
  res.set('mod_HandleColor', this.mod_HandleColor);
  res.set('mod_CornerunitStraightFillerConstruction', this.mod_CornerunitStraightFillerConstruction);
  res.set('mod_FillerType', this.mod_FillerType);
  res.set('mod_FillerHardware', this.mod_FillerHardware);
  res.set('mod_Direction', this.mod_Direction);
  res.set('mod_CarcasePartInfo', JSON.stringify(this.mod_CarcasePartInfo));
  res.set('mod_FillerHardwareInfo', JSON.stringify(this.mod_FillerHardwareInfo));
  res.set('mod_Originpos', JSON.stringify(this.mod_Originpos));
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_FingergripTopType', this.mod_FingergripTopType);
  res.set('mod_FingergripBtmType', this.mod_FingergripBtmType);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseDirection');
    const val = _toString(json['attributes']['mod_CarcaseDirection'], 'mod_CarcaseDirection');
    internal_leaveValidateVariant();
    this.mod_CarcaseDirection = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CornerunitFrontWidth');
    const val = _toFloat(json['attributes']['mod_CornerunitFrontWidth'], 'mod_CornerunitFrontWidth');
    internal_leaveValidateVariant();
    this.mod_CornerunitFrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CornerunitStraightConstruction');
    const val = _toString(json['attributes']['mod_CornerunitStraightConstruction'], 'mod_CornerunitStraightConstruction');
    internal_leaveValidateVariant();
    this.mod_CornerunitStraightConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTop');
    const val = _toBoolean(json['attributes']['mod_FingergripTop'], 'mod_FingergripTop');
    internal_leaveValidateVariant();
    this.mod_FingergripTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontColor');
    const val = _toString(json['attributes']['mod_FrontColor'], 'mod_FrontColor');
    internal_leaveValidateVariant();
    this.mod_FrontColor = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapVert');
    const val = _toFloat(json['attributes']['mod_FrontGapVert'], 'mod_FrontGapVert');
    internal_leaveValidateVariant();
    this.mod_FrontGapVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
    const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
    internal_leaveValidateVariant();
    this.mod_FrontId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeBtm');
    const val = _toFloat(json['attributes']['mod_FrontOversizeBtm'], 'mod_FrontOversizeBtm');
    internal_leaveValidateVariant();
    this.mod_FrontOversizeBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeTop');
    const val = _toFloat(json['attributes']['mod_FrontOversizeTop'], 'mod_FrontOversizeTop');
    internal_leaveValidateVariant();
    this.mod_FrontOversizeTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
    const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
    internal_leaveValidateVariant();
    this.mod_ParentName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
    const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
    const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
    internal_leaveValidateVariant();
    this.mod_HandleDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
    const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
    internal_leaveValidateVariant();
    this.mod_FrontHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
    const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
    internal_leaveValidateVariant();
    this.mod_FrontThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DoorDirection');
    const val = _toString(json['attributes']['mod_DoorDirection'], 'mod_DoorDirection');
    internal_leaveValidateVariant();
    this.mod_DoorDirection = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosMatrix');
    const val = _toString(json['attributes']['mod_HandlePosMatrix'], 'mod_HandlePosMatrix');
    internal_leaveValidateVariant();
    this.mod_HandlePosMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosType');
    const val = _toString(json['attributes']['mod_HandlePosType'], 'mod_HandlePosType');
    internal_leaveValidateVariant();
    this.mod_HandlePosType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleColor');
    const val = _toString(json['attributes']['mod_HandleColor'], 'mod_HandleColor');
    internal_leaveValidateVariant();
    this.mod_HandleColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CornerunitStraightFillerConstruction');
    const val = _toString(json['attributes']['mod_CornerunitStraightFillerConstruction'], 'mod_CornerunitStraightFillerConstruction');
    internal_leaveValidateVariant();
    this.mod_CornerunitStraightFillerConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FillerType');
    const val = _toString(json['attributes']['mod_FillerType'], 'mod_FillerType');
    internal_leaveValidateVariant();
    this.mod_FillerType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FillerHardware');
    const val = _toString(json['attributes']['mod_FillerHardware'], 'mod_FillerHardware');
    internal_leaveValidateVariant();
    this.mod_FillerHardware = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Direction');
    const val = _toString(json['attributes']['mod_Direction'], 'mod_Direction');
    internal_leaveValidateVariant();
    this.mod_Direction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTopType');
    const val = _toString(json['attributes']['mod_FingergripTopType'], 'mod_FingergripTopType');
    internal_leaveValidateVariant();
    this.mod_FingergripTopType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripBtmType');
    const val = _toString(json['attributes']['mod_FingergripBtmType'], 'mod_FingergripBtmType');
    internal_leaveValidateVariant();
    this.mod_FingergripBtmType = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
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
    if (this.mod_CornerunitFrontWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CornerunitFrontWidth')) {
          let pv = <IModVar_mod_CornerunitFrontWidth>s;
          if (pv.mod_CornerunitFrontWidth !== undefined) {
            this.mod_CornerunitFrontWidth = (<IModVar_mod_CornerunitFrontWidth>s).mod_CornerunitFrontWidth;
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
    if (this.mod_FrontColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontColor')) {
          let pv = <IModVar_mod_FrontColor>s;
          if (pv.mod_FrontColor !== undefined) {
            this.mod_FrontColor = (<IModVar_mod_FrontColor>s).mod_FrontColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontDesign')) {
          let pv = <IModVar_mod_FrontDesign>s;
          if (pv.mod_FrontDesign !== undefined) {
            this.mod_FrontDesign = (<IModVar_mod_FrontDesign>s).mod_FrontDesign;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontEdgeColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontEdgeColor')) {
          let pv = <IModVar_mod_FrontEdgeColor>s;
          if (pv.mod_FrontEdgeColor !== undefined) {
            this.mod_FrontEdgeColor = (<IModVar_mod_FrontEdgeColor>s).mod_FrontEdgeColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontEdgeThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontEdgeThk')) {
          let pv = <IModVar_mod_FrontEdgeThk>s;
          if (pv.mod_FrontEdgeThk !== undefined) {
            this.mod_FrontEdgeThk = (<IModVar_mod_FrontEdgeThk>s).mod_FrontEdgeThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGapCarcase === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapCarcase')) {
          let pv = <IModVar_mod_FrontGapCarcase>s;
          if (pv.mod_FrontGapCarcase !== undefined) {
            this.mod_FrontGapCarcase = (<IModVar_mod_FrontGapCarcase>s).mod_FrontGapCarcase;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGapHor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapHor')) {
          let pv = <IModVar_mod_FrontGapHor>s;
          if (pv.mod_FrontGapHor !== undefined) {
            this.mod_FrontGapHor = (<IModVar_mod_FrontGapHor>s).mod_FrontGapHor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGapVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapVert')) {
          let pv = <IModVar_mod_FrontGapVert>s;
          if (pv.mod_FrontGapVert !== undefined) {
            this.mod_FrontGapVert = (<IModVar_mod_FrontGapVert>s).mod_FrontGapVert;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontId === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontId')) {
          let pv = <IModVar_mod_FrontId>s;
          if (pv.mod_FrontId !== undefined) {
            this.mod_FrontId = (<IModVar_mod_FrontId>s).mod_FrontId;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontOversizeBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontOversizeBtm')) {
          let pv = <IModVar_mod_FrontOversizeBtm>s;
          if (pv.mod_FrontOversizeBtm !== undefined) {
            this.mod_FrontOversizeBtm = (<IModVar_mod_FrontOversizeBtm>s).mod_FrontOversizeBtm;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontOversizeTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontOversizeTop')) {
          let pv = <IModVar_mod_FrontOversizeTop>s;
          if (pv.mod_FrontOversizeTop !== undefined) {
            this.mod_FrontOversizeTop = (<IModVar_mod_FrontOversizeTop>s).mod_FrontOversizeTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontPosStart === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontPosStart')) {
          let pv = <IModVar_mod_FrontPosStart>s;
          if (pv.mod_FrontPosStart !== undefined) {
            this.mod_FrontPosStart = (<IModVar_mod_FrontPosStart>s).mod_FrontPosStart;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontProgram')) {
          let pv = <IModVar_mod_FrontProgram>s;
          if (pv.mod_FrontProgram !== undefined) {
            this.mod_FrontProgram = (<IModVar_mod_FrontProgram>s).mod_FrontProgram;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ParentName === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ParentName')) {
          let pv = <IModVar_mod_ParentName>s;
          if (pv.mod_ParentName !== undefined) {
            this.mod_ParentName = (<IModVar_mod_ParentName>s).mod_ParentName;
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
    if (this.mod_HandleDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleDesign')) {
          let pv = <IModVar_mod_HandleDesign>s;
          if (pv.mod_HandleDesign !== undefined) {
            this.mod_HandleDesign = (<IModVar_mod_HandleDesign>s).mod_HandleDesign;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontWidth')) {
          let pv = <IModVar_mod_FrontWidth>s;
          if (pv.mod_FrontWidth !== undefined) {
            this.mod_FrontWidth = (<IModVar_mod_FrontWidth>s).mod_FrontWidth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontHeight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontHeight')) {
          let pv = <IModVar_mod_FrontHeight>s;
          if (pv.mod_FrontHeight !== undefined) {
            this.mod_FrontHeight = (<IModVar_mod_FrontHeight>s).mod_FrontHeight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontThk')) {
          let pv = <IModVar_mod_FrontThk>s;
          if (pv.mod_FrontThk !== undefined) {
            this.mod_FrontThk = (<IModVar_mod_FrontThk>s).mod_FrontThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DoorDirection === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DoorDirection')) {
          let pv = <IModVar_mod_DoorDirection>s;
          if (pv.mod_DoorDirection !== undefined) {
            this.mod_DoorDirection = (<IModVar_mod_DoorDirection>s).mod_DoorDirection;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandlePosMatrix === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandlePosMatrix')) {
          let pv = <IModVar_mod_HandlePosMatrix>s;
          if (pv.mod_HandlePosMatrix !== undefined) {
            this.mod_HandlePosMatrix = (<IModVar_mod_HandlePosMatrix>s).mod_HandlePosMatrix;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandlePosType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandlePosType')) {
          let pv = <IModVar_mod_HandlePosType>s;
          if (pv.mod_HandlePosType !== undefined) {
            this.mod_HandlePosType = (<IModVar_mod_HandlePosType>s).mod_HandlePosType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleColor')) {
          let pv = <IModVar_mod_HandleColor>s;
          if (pv.mod_HandleColor !== undefined) {
            this.mod_HandleColor = (<IModVar_mod_HandleColor>s).mod_HandleColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CornerunitStraightFillerConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CornerunitStraightFillerConstruction')) {
          let pv = <IModVar_mod_CornerunitStraightFillerConstruction>s;
          if (pv.mod_CornerunitStraightFillerConstruction !== undefined) {
            this.mod_CornerunitStraightFillerConstruction = (<IModVar_mod_CornerunitStraightFillerConstruction>s).mod_CornerunitStraightFillerConstruction;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FillerType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FillerType')) {
          let pv = <IModVar_mod_FillerType>s;
          if (pv.mod_FillerType !== undefined) {
            this.mod_FillerType = (<IModVar_mod_FillerType>s).mod_FillerType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FillerHardware === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FillerHardware')) {
          let pv = <IModVar_mod_FillerHardware>s;
          if (pv.mod_FillerHardware !== undefined) {
            this.mod_FillerHardware = (<IModVar_mod_FillerHardware>s).mod_FillerHardware;
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
    if (this.mod_FingergripTopType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripTopType')) {
          let pv = <IModVar_mod_FingergripTopType>s;
          if (pv.mod_FingergripTopType !== undefined) {
            this.mod_FingergripTopType = (<IModVar_mod_FingergripTopType>s).mod_FingergripTopType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FingergripBtmType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FingergripBtmType')) {
          let pv = <IModVar_mod_FingergripBtmType>s;
          if (pv.mod_FingergripBtmType !== undefined) {
            this.mod_FingergripBtmType = (<IModVar_mod_FingergripBtmType>s).mod_FingergripBtmType;
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
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_CornerunitStraightFiller01";
    }
    if (this.mod_Direction === undefined) {
      this.mod_Direction = "Left";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
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
  #manufacturerDataCompletionInternal = mc_CornerFillerFront01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_CornerFillerFront01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_CornerFillerFront01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_CornerFillerFront01_NonNull(this);
    return adc;
  }

  addOD_M_mc_ThermoformedPanel01(index?: number): dc_mc_ThermoformedPanel01 {
    var m = new OD_M_mc_ThermoformedPanel01(this);
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
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01 {
    var m = new OD_M_mc_PanelWoodFrame01(this);
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
  addOD_M_mc_MetalFrame01(index?: number): dc_mc_MetalFrame01 {
    var m = new OD_M_mc_MetalFrame01(this);
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
  addOD_M_mc_Handlestrip01(index?: number): dc_mc_Handlestrip01 {
    var m = new OD_M_mc_Handlestrip01(this);
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
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01 {
    var m = new OD_M_mc_Handle01(this);
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
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01 {
    var m = new OD_M_mc_FrontPanel01(this);
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
    this.mod_CarcaseDirection_matrix = VariantValidation.mod_CarcaseDirection(this, this);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CornerunitFrontWidth_matrix = VariantValidation.mod_CornerunitFrontWidth(this, this);
    this.mod_CornerunitStraightConstruction_matrix = VariantValidation.mod_CornerunitStraightConstruction(this, this);
    this.mod_FingergripTop_matrix = VariantValidation.mod_FingergripTop(this, this);
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this);
    this.mod_FrontEdgeColor_matrix = VariantValidation.mod_FrontEdgeColor(this, this);
    this.mod_FrontEdgeThk_matrix = VariantValidation.mod_FrontEdgeThk(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_FrontOversizeBtm_matrix = VariantValidation.mod_FrontOversizeBtm(this, this);
    this.mod_FrontOversizeTop_matrix = VariantValidation.mod_FrontOversizeTop(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this);
    this.mod_DoorDirection_matrix = VariantValidation.mod_DoorDirection(this, this);
    this.mod_HandlePosMatrix_matrix = VariantValidation.mod_HandlePosMatrix(this, this);
    this.mod_HandlePosType_matrix = VariantValidation.mod_HandlePosType(this, this);
    this.mod_HandleColor_matrix = VariantValidation.mod_HandleColor(this, this);
    this.mod_CornerunitStraightFillerConstruction_matrix = VariantValidation.mod_CornerunitStraightFillerConstruction(this, this);
    this.mod_FillerType_matrix = VariantValidation.mod_FillerType(this, this);
    this.mod_FillerHardware_matrix = VariantValidation.mod_FillerHardware(this, this);
    this.mod_Direction_matrix = VariantValidation.mod_Direction(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_FingergripTopType_matrix = VariantValidation.mod_FingergripTopType(this, this);
    this.mod_FingergripBtmType_matrix = VariantValidation.mod_FingergripBtmType(this, this);
  }
  addpart_FillerHardware(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerHardware_PartVarsWritable {
    var c = new P_part_FillerHardware(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_FillerHardwareProcessing(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerHardwareProcessing_PartVarsWritable {
    var c = new P_part_FillerHardwareProcessing(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_FillerUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerUnit_PartVarsWritable {
    var c = new P_part_FillerUnit(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_CornerFillerFront01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_CornerFillerFront01_NonNull implements cbp_mc_CornerFillerFront01, adc_mc_CornerFillerFront01 ,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_FillerFront01_mf_CornerFillerFront,IPartParentsNonNull_mc_CornerFillerFront01_mc_FillerFront01 {
  constructor(parent: OD_M_mc_CornerFillerFront01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_CornerFillerFront01;

  get _id():string { return this.#internalParent._id; }
  get modId():string { return this.#internalParent.modId; }
  getOrigin():Matrix4 {
    return this.#internalParent.getOrigin();
  }
  getOriginPos():Vector3 {
    return this.#internalParent.getOriginPos();
  }
  ct_tab_FrontConstruction : ct2_tab_FrontConstruction = new ct2_tab_FrontConstruction();
  createBuildPlan():void {
    this.#createBuildPlanInternal();
  }
  #createBuildPlanInternal = mc_CornerFillerFront01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_CornerFillerFront01_afterDataCompletion;
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
  parent: IModParents_mf_CornerFillerFront;
  addpart_FillerHardware(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerHardware_PartVarsWritable {
    return this.#internalParent.addpart_FillerHardware(x, y, z, dimx, dimy, dimz);
  }
  addpart_FillerHardwareProcessing(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerHardwareProcessing_PartVarsWritable {
    return this.#internalParent.addpart_FillerHardwareProcessing(x, y, z, dimx, dimy, dimz);
  }
  addpart_FillerUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerUnit_PartVarsWritable {
    return this.#internalParent.addpart_FillerUnit(x, y, z, dimx, dimy, dimz);
  }
  get mod_CarcaseDirection(): string  {
    return this.#internalParent.mod_CarcaseDirection!;
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CornerunitFrontWidth(): number  {
    return this.#internalParent.mod_CornerunitFrontWidth!;
  }
  get mod_CornerunitStraightConstruction(): string  {
    return this.#internalParent.mod_CornerunitStraightConstruction!;
  }
  get mod_CornerunitStraightConstruction_matrix(): IMatrix_mod_CornerunitStraightConstruction {
    return this.#internalParent.mod_CornerunitStraightConstruction_matrix!;
  }
  get mod_FingergripTop(): boolean  {
    return this.#internalParent.mod_FingergripTop!;
  }
  get mod_FrontColor(): string  {
    return this.#internalParent.mod_FrontColor!;
  }
  get mod_FrontColor_matrix(): IMatrix_mod_FrontColor {
    return this.#internalParent.mod_FrontColor_matrix!;
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
  get mod_FrontGapVert(): number  {
    return this.#internalParent.mod_FrontGapVert!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontOversizeBtm(): number  {
    return this.#internalParent.mod_FrontOversizeBtm!;
  }
  get mod_FrontOversizeTop(): number  {
    return this.#internalParent.mod_FrontOversizeTop!;
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
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_ParentName(): string  {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_PlinthAreaHeight(): number  {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_HandleDesign(): string  {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontThk(): number  {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_DoorDirection(): string  {
    return this.#internalParent.mod_DoorDirection!;
  }
  get mod_DoorDirection_matrix(): IMatrix_mod_DoorDirection {
    return this.#internalParent.mod_DoorDirection_matrix!;
  }
  get mod_HandlePosMatrix(): string  {
    return this.#internalParent.mod_HandlePosMatrix!;
  }
  get mod_HandlePosMatrix_matrix(): IMatrix_mod_HandlePosMatrix {
    return this.#internalParent.mod_HandlePosMatrix_matrix!;
  }
  get mod_HandlePosType(): string  {
    return this.#internalParent.mod_HandlePosType!;
  }
  get mod_HandleColor(): string  {
    return this.#internalParent.mod_HandleColor!;
  }
  get mod_CornerunitStraightFillerConstruction(): string  {
    return this.#internalParent.mod_CornerunitStraightFillerConstruction!;
  }
  get mod_CornerunitStraightFillerConstruction_matrix(): IMatrix_mod_CornerunitStraightFillerConstruction {
    return this.#internalParent.mod_CornerunitStraightFillerConstruction_matrix!;
  }
  get mod_FillerType(): string  {
    return this.#internalParent.mod_FillerType!;
  }
  get mod_FillerHardware(): string  {
    return this.#internalParent.mod_FillerHardware!;
  }
  get mod_Direction(): string  {
    return this.#internalParent.mod_Direction!;
  }
  get mod_CarcasePartInfo(): string [] {
    return this.#internalParent.mod_CarcasePartInfo!;
  }
  get mod_FillerHardwareInfo(): string [] {
    return this.#internalParent.mod_FillerHardwareInfo!;
  }
  get mod_Originpos(): number [] {
    return this.#internalParent.mod_Originpos!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_FingergripTopType(): string  {
    return this.#internalParent.mod_FingergripTopType!;
  }
  get mod_FingergripBtmType(): string  {
    return this.#internalParent.mod_FingergripBtmType!;
  }
  addOD_M_mc_ThermoformedPanel01(index?: number): dc_mc_ThermoformedPanel01 {
    return this.#internalParent.addOD_M_mc_ThermoformedPanel01(index);
  }
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01 {
    return this.#internalParent.addOD_M_mc_PanelWoodFrame01(index);
  }
  addOD_M_mc_MetalFrame01(index?: number): dc_mc_MetalFrame01 {
    return this.#internalParent.addOD_M_mc_MetalFrame01(index);
  }
  addOD_M_mc_Handlestrip01(index?: number): dc_mc_Handlestrip01 {
    return this.#internalParent.addOD_M_mc_Handlestrip01(index);
  }
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01 {
    return this.#internalParent.addOD_M_mc_Handle01(index);
  }
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01 {
    return this.#internalParent.addOD_M_mc_FrontPanel01(index);
  }
}

