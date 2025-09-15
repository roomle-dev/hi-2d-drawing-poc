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
import { IModParents_mf_Dishwasher } from '../mod-interfaces'
import { IP_part_ApplianceUnit_PartVarsWritable, P_part_ApplianceUnit } from '../parts/part_ApplianceUnit'
import { OD_M_mc_FrontPanel01, dc_mc_FrontPanel01 } from './mc_FrontPanel01'
import { OD_M_mc_PanelWoodFrame01, dc_mc_PanelWoodFrame01 } from './mc_PanelWoodFrame01'
import { OD_M_mc_Handle01, dc_mc_Handle01 } from './mc_Handle01'
import { OD_M_mc_ApplianceGraphic, dc_mc_ApplianceGraphic } from './mc_ApplianceGraphic'
import { IModuleNonNull_mc_Dishwasher,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IModParents_mc_Dishwasher_mc_Fridge01_mc_Hob01_mc_Oven01_mc_Sink01_mf_Sink_mr_Hood,IModParents_mc_Dishwasher,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IPartParentsNonNull_mc_Dishwasher_mc_Fridge01_mc_Hob01_mc_Oven01_mc_Sink01_mf_Sink_mr_Hood,IPartParentsNonNull_mc_Dishwasher} from '../mod-interfaces'
import {IModVar_mod_FingergripTop,IModVarNonNull_mod_FingergripTop,IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_FrontSplit,IModVarNonNull_mod_FrontSplit,IModVar_mod_FrontThk,IModVarNonNull_mod_FrontThk,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_HandleDrill,IModVarNonNull_mod_HandleDrill,IModVar_mod_HandleLine,IModVarNonNull_mod_HandleLine,IModVar_mod_HandlePosLogic,IModVarNonNull_mod_HandlePosLogic,IModVar_mod_FrontQtyElements,IModVarNonNull_mod_FrontQtyElements,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_FrontColor,IModVarNonNull_mod_FrontColor,IModVar_mod_FrontEdgeColor,IModVarNonNull_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVarNonNull_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVarNonNull_mod_FrontGapHor,IModVar_mod_FrontGapVert,IModVarNonNull_mod_FrontGapVert,IModVar_mod_FrontOversizeBtm,IModVarNonNull_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeLeft,IModVarNonNull_mod_FrontOversizeLeft,IModVar_mod_FrontOversizeRight,IModVarNonNull_mod_FrontOversizeRight,IModVar_mod_FrontOversizeTop,IModVarNonNull_mod_FrontOversizeTop,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_FrontSplitHeight1,IModVarNonNull_mod_FrontSplitHeight1,IModVar_mod_FrontSplitHeight2,IModVarNonNull_mod_FrontSplitHeight2,IModVar_mod_FrontSplitHeight3,IModVarNonNull_mod_FrontSplitHeight3,IModVar_mod_FrontSplitType1,IModVarNonNull_mod_FrontSplitType1,IModVar_mod_FrontSplitType2,IModVarNonNull_mod_FrontSplitType2,IModVar_mod_HandleColor,IModVarNonNull_mod_HandleColor,IModVar_mod_HandleLength,IModVarNonNull_mod_HandleLength,IModVar_mod_HandleOffsetX,IModVarNonNull_mod_HandleOffsetX,IModVar_mod_HandleOffsetY,IModVarNonNull_mod_HandleOffsetY,IModVar_mod_HandlePosMatrix,IModVarNonNull_mod_HandlePosMatrix,IModVar_mod_HandlePosType,IModVarNonNull_mod_HandlePosType,IModVar_mod_HandlestripPos,IModVarNonNull_mod_HandlestripPos,IModVar_mod_HeightPosInsertion,IModVarNonNull_mod_HeightPosInsertion,IModVar_mod_HandleDesign,IModVarNonNull_mod_HandleDesign,IModVar_mod_FrontDesign,IModVarNonNull_mod_FrontDesign,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_FingergripBtmType,IModVarNonNull_mod_FingergripBtmType,IModVar_mod_FingergripTopType,IModVarNonNull_mod_FingergripTopType,IModVar_mod_Originpos,IModVarNonNull_mod_Originpos,IModVar_mod_FrontGapHorTop,IModVarNonNull_mod_FrontGapHorTop,IModVar_mod_FrontDescriptor,IModVarNonNull_mod_FrontDescriptor,IModVar_mod_FramePartsWidthHor,IModVarNonNull_mod_FramePartsWidthHor,IModVar_mod_FramePartsWidthVert,IModVarNonNull_mod_FramePartsWidthVert,IModVar_mod_PanelWoodFrameFillingType,IModVarNonNull_mod_PanelWoodFrameFillingType,IModVar_mod_PanelWoodFrameType,IModVarNonNull_mod_PanelWoodFrameType,IModVar_mod_OpeningAngle,IModVarNonNull_mod_OpeningAngle,IModVar_mod_FrameFillingWoodColor,IModVarNonNull_mod_FrameFillingWoodColor,IModVar_mod_FrontGlassColor,IModVarNonNull_mod_FrontGlassColor,IModVar_mod_DishwasherSupplier,IModVarNonNull_mod_DishwasherSupplier,IModVar_mod_DishwasherId,IModVarNonNull_mod_DishwasherId,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_DishwasherInfo,IModVarNonNull_mod_DishwasherInfo} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_FingergripTop, IMatrix_mod_FrontHeight, IMatrix_mod_FrontId, IMatrix_mod_FrontSplit, IMatrix_mod_FrontThk, IMatrix_mod_FrontWidth, IMatrix_mod_HandleDrill, IMatrix_mod_HandleLine, IMatrix_mod_HandlePosLogic, IMatrix_mod_FrontQtyElements, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontColor, IMatrix_mod_FrontEdgeColor, IMatrix_mod_FrontEdgeThk, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapVert, IMatrix_mod_FrontOversizeBtm, IMatrix_mod_FrontOversizeLeft, IMatrix_mod_FrontOversizeRight, IMatrix_mod_FrontOversizeTop, IMatrix_mod_FrontProgram, IMatrix_mod_FrontSplitHeight1, IMatrix_mod_FrontSplitHeight2, IMatrix_mod_FrontSplitHeight3, IMatrix_mod_FrontSplitType1, IMatrix_mod_FrontSplitType2, IMatrix_mod_HandleColor, IMatrix_mod_HandleLength, IMatrix_mod_HandleOffsetX, IMatrix_mod_HandleOffsetY, IMatrix_mod_HandlePosMatrix, IMatrix_mod_HandlePosType, IMatrix_mod_HandlestripPos, IMatrix_mod_HeightPosInsertion, IMatrix_mod_HandleDesign, IMatrix_mod_FrontDesign, IMatrix_mod_ModuleName, IMatrix_mod_TypeElement, IMatrix_mod_FingergripBtmType, IMatrix_mod_FingergripTopType, IMatrix_mod_FrontGapHorTop, IMatrix_mod_FrontDescriptor, IMatrix_mod_FramePartsWidthHor, IMatrix_mod_FramePartsWidthVert, IMatrix_mod_PanelWoodFrameFillingType, IMatrix_mod_PanelWoodFrameType, IMatrix_mod_FrameFillingWoodColor, IMatrix_mod_FrontGlassColor, IMatrix_mod_DishwasherSupplier, IMatrix_mod_DishwasherId, IMatrix_mod_Depth, IMatrix_mod_Height} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_ApplianceUnit } from '../part-add-interfaces';
import { mc_Dishwasher_createBuildPlan, mc_Dishwasher_afterDataCompletion, mc_Dishwasher_manufacturerDataCompletion } from '../../modules/mc_Dishwasher';

export interface cbp_mc_Dishwasher extends IModBaseProp
, IPartAdd_part_ApplianceUnit, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontSplit, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_FrontQtyElements, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_FrontSplitHeight1, IModVarNonNull_mod_FrontSplitHeight2, IModVarNonNull_mod_FrontSplitHeight3, IModVarNonNull_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType2, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetY, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandlestripPos, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontDescriptor, IModVarNonNull_mod_FramePartsWidthHor, IModVarNonNull_mod_FramePartsWidthVert, IModVarNonNull_mod_PanelWoodFrameFillingType, IModVarNonNull_mod_PanelWoodFrameType, IModVarNonNull_mod_OpeningAngle, IModVarNonNull_mod_FrameFillingWoodColor, IModVarNonNull_mod_FrontGlassColor, IModVarNonNull_mod_DishwasherSupplier, IModVarNonNull_mod_DishwasherId, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_DishwasherInfo {
  parent: IModParents_mf_Dishwasher;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
  ct_tab_FrontConstruction: ct2_tab_FrontConstruction;
}

export interface dc_mc_Dishwasher extends IModBaseProp
, IModVar_mod_FingergripTop, IModVar_mod_FrontHeight, IModVar_mod_FrontId, IModVar_mod_FrontSplit, IModVar_mod_FrontThk, IModVar_mod_FrontWidth, IModVar_mod_HandleDrill, IModVar_mod_HandleLine, IModVar_mod_HandlePosLogic, IModVar_mod_FrontQtyElements, IModVar_mod_FrontPosStart, IModVar_mod_FrontColor, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapVert, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontProgram, IModVar_mod_FrontSplitHeight1, IModVar_mod_FrontSplitHeight2, IModVar_mod_FrontSplitHeight3, IModVar_mod_FrontSplitType1, IModVar_mod_FrontSplitType2, IModVar_mod_HandleColor, IModVar_mod_HandleLength, IModVar_mod_HandleOffsetX, IModVar_mod_HandleOffsetY, IModVar_mod_HandlePosMatrix, IModVar_mod_HandlePosType, IModVar_mod_HandlestripPos, IModVar_mod_HeightPosInsertion, IModVar_mod_HandleDesign, IModVar_mod_FrontDesign, IModVar_mod_ModuleName, IModVar_mod_TypeElement, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVar_mod_Originpos, IModVar_mod_FrontGapHorTop, IModVar_mod_FrontDescriptor, IModVar_mod_FramePartsWidthHor, IModVar_mod_FramePartsWidthVert, IModVar_mod_PanelWoodFrameFillingType, IModVar_mod_PanelWoodFrameType, IModVar_mod_OpeningAngle, IModVar_mod_FrameFillingWoodColor, IModVar_mod_FrontGlassColor, IModVar_mod_DishwasherSupplier, IModVar_mod_DishwasherId, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_DishwasherInfo {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_Dishwasher;
  parent: IModParents_mf_Dishwasher;
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01;
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01;
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01;
  addOD_M_mc_ApplianceGraphic(index?: number): dc_mc_ApplianceGraphic;
}

export interface adc_mc_Dishwasher extends IModBaseProp
, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontSplit, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_FrontQtyElements, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_FrontSplitHeight1, IModVarNonNull_mod_FrontSplitHeight2, IModVarNonNull_mod_FrontSplitHeight3, IModVarNonNull_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType2, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetY, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HandlestripPos, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontDescriptor, IModVarNonNull_mod_FramePartsWidthHor, IModVarNonNull_mod_FramePartsWidthVert, IModVarNonNull_mod_PanelWoodFrameFillingType, IModVarNonNull_mod_PanelWoodFrameType, IModVarNonNull_mod_OpeningAngle, IModVarNonNull_mod_FrameFillingWoodColor, IModVarNonNull_mod_FrontGlassColor, IModVarNonNull_mod_DishwasherSupplier, IModVarNonNull_mod_DishwasherId, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_DishwasherInfo {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01;
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01;
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01;
  addOD_M_mc_ApplianceGraphic(index?: number): dc_mc_ApplianceGraphic;
  ct_tab_FrontConstruction: ct2_tab_FrontConstruction;
}

export class OD_M_mc_Dishwasher extends OD_Base  implements dc_mc_Dishwasher
,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IModParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IModParents_mc_Dishwasher_mc_Fridge01_mc_Hob01_mc_Oven01_mc_Sink01_mf_Sink_mr_Hood,IModParents_mc_Dishwasher
,IModVar_mod_FingergripTop,IModVar_mod_FrontHeight,IModVar_mod_FrontId,IModVar_mod_FrontSplit,IModVar_mod_FrontThk,IModVar_mod_FrontWidth,IModVar_mod_HandleDrill,IModVar_mod_HandleLine,IModVar_mod_HandlePosLogic,IModVar_mod_FrontQtyElements,IModVar_mod_FrontPosStart,IModVar_mod_FrontColor,IModVar_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVar_mod_FrontGapVert,IModVar_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeLeft,IModVar_mod_FrontOversizeRight,IModVar_mod_FrontOversizeTop,IModVar_mod_FrontProgram,IModVar_mod_FrontSplitHeight1,IModVar_mod_FrontSplitHeight2,IModVar_mod_FrontSplitHeight3,IModVar_mod_FrontSplitType1,IModVar_mod_FrontSplitType2,IModVar_mod_HandleColor,IModVar_mod_HandleLength,IModVar_mod_HandleOffsetX,IModVar_mod_HandleOffsetY,IModVar_mod_HandlePosMatrix,IModVar_mod_HandlePosType,IModVar_mod_HandlestripPos,IModVar_mod_HeightPosInsertion,IModVar_mod_HandleDesign,IModVar_mod_FrontDesign,IModVar_mod_ModuleName,IModVar_mod_TypeElement,IModVar_mod_FingergripBtmType,IModVar_mod_FingergripTopType,IModVar_mod_Originpos,IModVar_mod_FrontGapHorTop,IModVar_mod_FrontDescriptor,IModVar_mod_FramePartsWidthHor,IModVar_mod_FramePartsWidthVert,IModVar_mod_PanelWoodFrameFillingType,IModVar_mod_PanelWoodFrameType,IModVar_mod_OpeningAngle,IModVar_mod_FrameFillingWoodColor,IModVar_mod_FrontGlassColor,IModVar_mod_DishwasherSupplier,IModVar_mod_DishwasherId,IModVar_mod_Depth,IModVar_mod_Height,IModVar_mod_DishwasherInfo
 {
  constructor(parent: IModParents_mf_Dishwasher, manufacturerMode?:boolean) {
    super('mc_Dishwasher', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_Dishwasher_NonNull(this);
  }
  parent: IModParents_mf_Dishwasher;
  _selfNonNull: OD_M_mc_Dishwasher_NonNull;

  override variants:string[] = ['mod_FingergripTop','mod_FrontHeight','mod_FrontId','mod_FrontSplit','mod_FrontThk','mod_FrontWidth','mod_HandleDrill','mod_HandleLine','mod_HandlePosLogic','mod_FrontQtyElements','mod_FrontPosStart','mod_FrontColor','mod_FrontEdgeColor','mod_FrontEdgeThk','mod_FrontGapCarcase','mod_FrontGapHor','mod_FrontGapVert','mod_FrontOversizeBtm','mod_FrontOversizeLeft','mod_FrontOversizeRight','mod_FrontOversizeTop','mod_FrontProgram','mod_FrontSplitHeight1','mod_FrontSplitHeight2','mod_FrontSplitHeight3','mod_FrontSplitType1','mod_FrontSplitType2','mod_HandleColor','mod_HandleLength','mod_HandleOffsetX','mod_HandleOffsetY','mod_HandlePosMatrix','mod_HandlePosType','mod_HandlestripPos','mod_HeightPosInsertion','mod_HandleDesign','mod_FrontDesign','mod_ModuleName','mod_TypeElement','mod_FingergripBtmType','mod_FingergripTopType','mod_Originpos','mod_FrontGapHorTop','mod_FrontDescriptor','mod_FramePartsWidthHor','mod_FramePartsWidthVert','mod_PanelWoodFrameFillingType','mod_PanelWoodFrameType','mod_OpeningAngle','mod_FrameFillingWoodColor','mod_FrontGlassColor','mod_DishwasherSupplier','mod_DishwasherId','mod_Depth','mod_Height','mod_DishwasherInfo',];
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
  #mod_FrontSplit?: boolean;
  get mod_FrontSplit(): boolean | undefined { return this.#mod_FrontSplit}
  set mod_FrontSplit(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontSplit' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontSplit === value) return;
    this.#mod_FrontSplit = value;
  }

  mod_FrontSplit_matrix?: IMatrix_mod_FrontSplit;
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
  #mod_FrontQtyElements?: number;
  get mod_FrontQtyElements(): number | undefined { return this.#mod_FrontQtyElements}
  set mod_FrontQtyElements(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontQtyElements' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontQtyElements === value) return;
    this.#mod_FrontQtyElements = value;
  }

  mod_FrontQtyElements_matrix?: IMatrix_mod_FrontQtyElements;
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
  #mod_FrontOversizeLeft?: number;
  get mod_FrontOversizeLeft(): number | undefined { return this.#mod_FrontOversizeLeft}
  set mod_FrontOversizeLeft(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontOversizeLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontOversizeLeft === value) return;
    this.#mod_FrontOversizeLeft = value;
  }

  mod_FrontOversizeLeft_matrix?: IMatrix_mod_FrontOversizeLeft;
  #mod_FrontOversizeRight?: number;
  get mod_FrontOversizeRight(): number | undefined { return this.#mod_FrontOversizeRight}
  set mod_FrontOversizeRight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontOversizeRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontOversizeRight === value) return;
    this.#mod_FrontOversizeRight = value;
  }

  mod_FrontOversizeRight_matrix?: IMatrix_mod_FrontOversizeRight;
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
  #mod_FrontSplitHeight1?: number;
  get mod_FrontSplitHeight1(): number | undefined { return this.#mod_FrontSplitHeight1}
  set mod_FrontSplitHeight1(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontSplitHeight1' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontSplitHeight1 === value) return;
    this.#mod_FrontSplitHeight1 = value;
  }

  mod_FrontSplitHeight1_matrix?: IMatrix_mod_FrontSplitHeight1;
  #mod_FrontSplitHeight2?: number;
  get mod_FrontSplitHeight2(): number | undefined { return this.#mod_FrontSplitHeight2}
  set mod_FrontSplitHeight2(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontSplitHeight2' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontSplitHeight2 === value) return;
    this.#mod_FrontSplitHeight2 = value;
  }

  mod_FrontSplitHeight2_matrix?: IMatrix_mod_FrontSplitHeight2;
  #mod_FrontSplitHeight3?: number;
  get mod_FrontSplitHeight3(): number | undefined { return this.#mod_FrontSplitHeight3}
  set mod_FrontSplitHeight3(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontSplitHeight3' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontSplitHeight3 === value) return;
    this.#mod_FrontSplitHeight3 = value;
  }

  mod_FrontSplitHeight3_matrix?: IMatrix_mod_FrontSplitHeight3;
  #mod_FrontSplitType1?: string;
  get mod_FrontSplitType1(): string | undefined { return this.#mod_FrontSplitType1}
  set mod_FrontSplitType1(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontSplitType1' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontSplitType1 === value) return;
    this.#mod_FrontSplitType1 = value;
  }

  mod_FrontSplitType1_matrix?: IMatrix_mod_FrontSplitType1;
  #mod_FrontSplitType2?: string;
  get mod_FrontSplitType2(): string | undefined { return this.#mod_FrontSplitType2}
  set mod_FrontSplitType2(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontSplitType2' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontSplitType2 === value) return;
    this.#mod_FrontSplitType2 = value;
  }

  mod_FrontSplitType2_matrix?: IMatrix_mod_FrontSplitType2;
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
  #mod_HandleOffsetX?: number;
  get mod_HandleOffsetX(): number | undefined { return this.#mod_HandleOffsetX}
  set mod_HandleOffsetX(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleOffsetX' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleOffsetX === value) return;
    this.#mod_HandleOffsetX = value;
  }

  mod_HandleOffsetX_matrix?: IMatrix_mod_HandleOffsetX;
  #mod_HandleOffsetY?: number;
  get mod_HandleOffsetY(): number | undefined { return this.#mod_HandleOffsetY}
  set mod_HandleOffsetY(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandleOffsetY' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandleOffsetY === value) return;
    this.#mod_HandleOffsetY = value;
  }

  mod_HandleOffsetY_matrix?: IMatrix_mod_HandleOffsetY;
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
  #mod_HandlestripPos?: string;
  get mod_HandlestripPos(): string | undefined { return this.#mod_HandlestripPos}
  set mod_HandlestripPos(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HandlestripPos' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HandlestripPos === value) return;
    this.#mod_HandlestripPos = value;
  }

  mod_HandlestripPos_matrix?: IMatrix_mod_HandlestripPos;
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
  #mod_Originpos: number[] = [];
  get mod_Originpos(): number[] { return this.#mod_Originpos;}
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
  #mod_FrontDescriptor?: string;
  get mod_FrontDescriptor(): string | undefined { return this.#mod_FrontDescriptor}
  set mod_FrontDescriptor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontDescriptor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontDescriptor === value) return;
    this.#mod_FrontDescriptor = value;
  }

  mod_FrontDescriptor_matrix?: IMatrix_mod_FrontDescriptor;
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
  #mod_OpeningAngle: string[] = [];
  get mod_OpeningAngle(): string[] { return this.#mod_OpeningAngle;}
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
  #mod_DishwasherSupplier?: string;
  get mod_DishwasherSupplier(): string | undefined { return this.#mod_DishwasherSupplier}
  set mod_DishwasherSupplier(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DishwasherSupplier' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DishwasherSupplier === value) return;
    this.#mod_DishwasherSupplier = value;
  }

  mod_DishwasherSupplier_matrix?: IMatrix_mod_DishwasherSupplier;
  #mod_DishwasherId?: string;
  get mod_DishwasherId(): string | undefined { return this.#mod_DishwasherId}
  set mod_DishwasherId(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DishwasherId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DishwasherId === value) return;
    this.#mod_DishwasherId = value;
  }

  mod_DishwasherId_matrix?: IMatrix_mod_DishwasherId;
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
  #mod_DishwasherInfo: string[] = [];
  get mod_DishwasherInfo(): string[] { return this.#mod_DishwasherInfo;}
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_FingergripTop', this.mod_FingergripTop);
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_FrontSplit', this.mod_FrontSplit);
  res.set('mod_FrontThk', this.mod_FrontThk);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_HandleDrill', this.mod_HandleDrill);
  res.set('mod_HandleLine', this.mod_HandleLine);
  res.set('mod_HandlePosLogic', this.mod_HandlePosLogic);
  res.set('mod_FrontQtyElements', this.mod_FrontQtyElements);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_FrontColor', this.mod_FrontColor);
  res.set('mod_FrontEdgeColor', this.mod_FrontEdgeColor);
  res.set('mod_FrontEdgeThk', this.mod_FrontEdgeThk);
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_FrontGapHor', this.mod_FrontGapHor);
  res.set('mod_FrontGapVert', this.mod_FrontGapVert);
  res.set('mod_FrontOversizeBtm', this.mod_FrontOversizeBtm);
  res.set('mod_FrontOversizeLeft', this.mod_FrontOversizeLeft);
  res.set('mod_FrontOversizeRight', this.mod_FrontOversizeRight);
  res.set('mod_FrontOversizeTop', this.mod_FrontOversizeTop);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_FrontSplitHeight1', this.mod_FrontSplitHeight1);
  res.set('mod_FrontSplitHeight2', this.mod_FrontSplitHeight2);
  res.set('mod_FrontSplitHeight3', this.mod_FrontSplitHeight3);
  res.set('mod_FrontSplitType1', this.mod_FrontSplitType1);
  res.set('mod_FrontSplitType2', this.mod_FrontSplitType2);
  res.set('mod_HandleColor', this.mod_HandleColor);
  res.set('mod_HandleLength', this.mod_HandleLength);
  res.set('mod_HandleOffsetX', this.mod_HandleOffsetX);
  res.set('mod_HandleOffsetY', this.mod_HandleOffsetY);
  res.set('mod_HandlePosMatrix', this.mod_HandlePosMatrix);
  res.set('mod_HandlePosType', this.mod_HandlePosType);
  res.set('mod_HandlestripPos', this.mod_HandlestripPos);
  res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
  res.set('mod_HandleDesign', this.mod_HandleDesign);
  res.set('mod_FrontDesign', this.mod_FrontDesign);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_FingergripBtmType', this.mod_FingergripBtmType);
  res.set('mod_FingergripTopType', this.mod_FingergripTopType);
  res.set('mod_Originpos', JSON.stringify(this.mod_Originpos));
  res.set('mod_FrontGapHorTop', this.mod_FrontGapHorTop);
  res.set('mod_FrontDescriptor', this.mod_FrontDescriptor);
  res.set('mod_FramePartsWidthHor', this.mod_FramePartsWidthHor);
  res.set('mod_FramePartsWidthVert', this.mod_FramePartsWidthVert);
  res.set('mod_PanelWoodFrameFillingType', this.mod_PanelWoodFrameFillingType);
  res.set('mod_PanelWoodFrameType', this.mod_PanelWoodFrameType);
  res.set('mod_OpeningAngle', JSON.stringify(this.mod_OpeningAngle));
  res.set('mod_FrameFillingWoodColor', this.mod_FrameFillingWoodColor);
  res.set('mod_FrontGlassColor', this.mod_FrontGlassColor);
  res.set('mod_DishwasherSupplier', this.mod_DishwasherSupplier);
  res.set('mod_DishwasherId', this.mod_DishwasherId);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_DishwasherInfo', JSON.stringify(this.mod_DishwasherInfo));
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTop');
    const val = _toBoolean(json['attributes']['mod_FingergripTop'], 'mod_FingergripTop');
    internal_leaveValidateVariant();
    this.mod_FingergripTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
    const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
    internal_leaveValidateVariant();
    this.mod_FrontHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
    const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
    internal_leaveValidateVariant();
    this.mod_FrontId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplit');
    const val = _toBoolean(json['attributes']['mod_FrontSplit'], 'mod_FrontSplit');
    internal_leaveValidateVariant();
    this.mod_FrontSplit = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
    const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
    internal_leaveValidateVariant();
    this.mod_FrontThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDrill');
    const val = _toBoolean(json['attributes']['mod_HandleDrill'], 'mod_HandleDrill');
    internal_leaveValidateVariant();
    this.mod_HandleDrill = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLine');
    const val = _toFloat(json['attributes']['mod_HandleLine'], 'mod_HandleLine');
    internal_leaveValidateVariant();
    this.mod_HandleLine = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosLogic');
    const val = _toString(json['attributes']['mod_HandlePosLogic'], 'mod_HandlePosLogic');
    internal_leaveValidateVariant();
    this.mod_HandlePosLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontQtyElements');
    const val = _toInt(json['attributes']['mod_FrontQtyElements'], 'mod_FrontQtyElements');
    internal_leaveValidateVariant();
    this.mod_FrontQtyElements = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontColor');
    const val = _toString(json['attributes']['mod_FrontColor'], 'mod_FrontColor');
    internal_leaveValidateVariant();
    this.mod_FrontColor = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeBtm');
    const val = _toFloat(json['attributes']['mod_FrontOversizeBtm'], 'mod_FrontOversizeBtm');
    internal_leaveValidateVariant();
    this.mod_FrontOversizeBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeLeft');
    const val = _toFloat(json['attributes']['mod_FrontOversizeLeft'], 'mod_FrontOversizeLeft');
    internal_leaveValidateVariant();
    this.mod_FrontOversizeLeft = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeRight');
    const val = _toFloat(json['attributes']['mod_FrontOversizeRight'], 'mod_FrontOversizeRight');
    internal_leaveValidateVariant();
    this.mod_FrontOversizeRight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOversizeTop');
    const val = _toFloat(json['attributes']['mod_FrontOversizeTop'], 'mod_FrontOversizeTop');
    internal_leaveValidateVariant();
    this.mod_FrontOversizeTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitHeight1');
    const val = _toFloat(json['attributes']['mod_FrontSplitHeight1'], 'mod_FrontSplitHeight1');
    internal_leaveValidateVariant();
    this.mod_FrontSplitHeight1 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitHeight2');
    const val = _toFloat(json['attributes']['mod_FrontSplitHeight2'], 'mod_FrontSplitHeight2');
    internal_leaveValidateVariant();
    this.mod_FrontSplitHeight2 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitHeight3');
    const val = _toFloat(json['attributes']['mod_FrontSplitHeight3'], 'mod_FrontSplitHeight3');
    internal_leaveValidateVariant();
    this.mod_FrontSplitHeight3 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitType1');
    const val = _toString(json['attributes']['mod_FrontSplitType1'], 'mod_FrontSplitType1');
    internal_leaveValidateVariant();
    this.mod_FrontSplitType1 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplitType2');
    const val = _toString(json['attributes']['mod_FrontSplitType2'], 'mod_FrontSplitType2');
    internal_leaveValidateVariant();
    this.mod_FrontSplitType2 = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleColor');
    const val = _toString(json['attributes']['mod_HandleColor'], 'mod_HandleColor');
    internal_leaveValidateVariant();
    this.mod_HandleColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLength');
    const val = _toFloat(json['attributes']['mod_HandleLength'], 'mod_HandleLength');
    internal_leaveValidateVariant();
    this.mod_HandleLength = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleOffsetX');
    const val = _toFloat(json['attributes']['mod_HandleOffsetX'], 'mod_HandleOffsetX');
    internal_leaveValidateVariant();
    this.mod_HandleOffsetX = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleOffsetY');
    const val = _toFloat(json['attributes']['mod_HandleOffsetY'], 'mod_HandleOffsetY');
    internal_leaveValidateVariant();
    this.mod_HandleOffsetY = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosMatrix');
    const val = _toString(json['attributes']['mod_HandlePosMatrix'], 'mod_HandlePosMatrix');
    internal_leaveValidateVariant();
    this.mod_HandlePosMatrix = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlePosType');
    const val = _toString(json['attributes']['mod_HandlePosType'], 'mod_HandlePosType');
    internal_leaveValidateVariant();
    this.mod_HandlePosType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlestripPos');
    const val = _toString(json['attributes']['mod_HandlestripPos'], 'mod_HandlestripPos');
    internal_leaveValidateVariant();
    this.mod_HandlestripPos = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
    const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
    internal_leaveValidateVariant();
    this.mod_HeightPosInsertion = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
    const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
    internal_leaveValidateVariant();
    this.mod_HandleDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDesign');
    const val = _toString(json['attributes']['mod_FrontDesign'], 'mod_FrontDesign');
    internal_leaveValidateVariant();
    this.mod_FrontDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripBtmType');
    const val = _toString(json['attributes']['mod_FingergripBtmType'], 'mod_FingergripBtmType');
    internal_leaveValidateVariant();
    this.mod_FingergripBtmType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTopType');
    const val = _toString(json['attributes']['mod_FingergripTopType'], 'mod_FingergripTopType');
    internal_leaveValidateVariant();
    this.mod_FingergripTopType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHorTop');
    const val = _toFloat(json['attributes']['mod_FrontGapHorTop'], 'mod_FrontGapHorTop');
    internal_leaveValidateVariant();
    this.mod_FrontGapHorTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDescriptor');
    const val = _toString(json['attributes']['mod_FrontDescriptor'], 'mod_FrontDescriptor');
    internal_leaveValidateVariant();
    this.mod_FrontDescriptor = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DishwasherSupplier');
    const val = _toString(json['attributes']['mod_DishwasherSupplier'], 'mod_DishwasherSupplier');
    internal_leaveValidateVariant();
    this.mod_DishwasherSupplier = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DishwasherId');
    const val = _toString(json['attributes']['mod_DishwasherId'], 'mod_DishwasherId');
    internal_leaveValidateVariant();
    this.mod_DishwasherId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
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
    if (this.mod_HandleDrill === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleDrill')) {
          let pv = <IModVar_mod_HandleDrill>s;
          if (pv.mod_HandleDrill !== undefined) {
            this.mod_HandleDrill = (<IModVar_mod_HandleDrill>s).mod_HandleDrill;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleLine === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleLine')) {
          let pv = <IModVar_mod_HandleLine>s;
          if (pv.mod_HandleLine !== undefined) {
            this.mod_HandleLine = (<IModVar_mod_HandleLine>s).mod_HandleLine;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandlePosLogic === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandlePosLogic')) {
          let pv = <IModVar_mod_HandlePosLogic>s;
          if (pv.mod_HandlePosLogic !== undefined) {
            this.mod_HandlePosLogic = (<IModVar_mod_HandlePosLogic>s).mod_HandlePosLogic;
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
    if (this.mod_FrontOversizeLeft === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontOversizeLeft')) {
          let pv = <IModVar_mod_FrontOversizeLeft>s;
          if (pv.mod_FrontOversizeLeft !== undefined) {
            this.mod_FrontOversizeLeft = (<IModVar_mod_FrontOversizeLeft>s).mod_FrontOversizeLeft;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontOversizeRight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontOversizeRight')) {
          let pv = <IModVar_mod_FrontOversizeRight>s;
          if (pv.mod_FrontOversizeRight !== undefined) {
            this.mod_FrontOversizeRight = (<IModVar_mod_FrontOversizeRight>s).mod_FrontOversizeRight;
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
    if (this.mod_FrontSplitHeight1 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontSplitHeight1')) {
          let pv = <IModVar_mod_FrontSplitHeight1>s;
          if (pv.mod_FrontSplitHeight1 !== undefined) {
            this.mod_FrontSplitHeight1 = (<IModVar_mod_FrontSplitHeight1>s).mod_FrontSplitHeight1;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontSplitHeight2 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontSplitHeight2')) {
          let pv = <IModVar_mod_FrontSplitHeight2>s;
          if (pv.mod_FrontSplitHeight2 !== undefined) {
            this.mod_FrontSplitHeight2 = (<IModVar_mod_FrontSplitHeight2>s).mod_FrontSplitHeight2;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontSplitHeight3 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontSplitHeight3')) {
          let pv = <IModVar_mod_FrontSplitHeight3>s;
          if (pv.mod_FrontSplitHeight3 !== undefined) {
            this.mod_FrontSplitHeight3 = (<IModVar_mod_FrontSplitHeight3>s).mod_FrontSplitHeight3;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontSplitType1 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontSplitType1')) {
          let pv = <IModVar_mod_FrontSplitType1>s;
          if (pv.mod_FrontSplitType1 !== undefined) {
            this.mod_FrontSplitType1 = (<IModVar_mod_FrontSplitType1>s).mod_FrontSplitType1;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontSplitType2 === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontSplitType2')) {
          let pv = <IModVar_mod_FrontSplitType2>s;
          if (pv.mod_FrontSplitType2 !== undefined) {
            this.mod_FrontSplitType2 = (<IModVar_mod_FrontSplitType2>s).mod_FrontSplitType2;
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
    if (this.mod_HandleLength === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleLength')) {
          let pv = <IModVar_mod_HandleLength>s;
          if (pv.mod_HandleLength !== undefined) {
            this.mod_HandleLength = (<IModVar_mod_HandleLength>s).mod_HandleLength;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleOffsetX === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleOffsetX')) {
          let pv = <IModVar_mod_HandleOffsetX>s;
          if (pv.mod_HandleOffsetX !== undefined) {
            this.mod_HandleOffsetX = (<IModVar_mod_HandleOffsetX>s).mod_HandleOffsetX;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HandleOffsetY === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandleOffsetY')) {
          let pv = <IModVar_mod_HandleOffsetY>s;
          if (pv.mod_HandleOffsetY !== undefined) {
            this.mod_HandleOffsetY = (<IModVar_mod_HandleOffsetY>s).mod_HandleOffsetY;
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
    if (this.mod_HandlestripPos === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HandlestripPos')) {
          let pv = <IModVar_mod_HandlestripPos>s;
          if (pv.mod_HandlestripPos !== undefined) {
            this.mod_HandlestripPos = (<IModVar_mod_HandlestripPos>s).mod_HandlestripPos;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_HeightPosInsertion === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HeightPosInsertion')) {
          let pv = <IModVar_mod_HeightPosInsertion>s;
          if (pv.mod_HeightPosInsertion !== undefined) {
            this.mod_HeightPosInsertion = (<IModVar_mod_HeightPosInsertion>s).mod_HeightPosInsertion;
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
    if (this.mod_FrontGapHorTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGapHorTop')) {
          let pv = <IModVar_mod_FrontGapHorTop>s;
          if (pv.mod_FrontGapHorTop !== undefined) {
            this.mod_FrontGapHorTop = (<IModVar_mod_FrontGapHorTop>s).mod_FrontGapHorTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontDescriptor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontDescriptor')) {
          let pv = <IModVar_mod_FrontDescriptor>s;
          if (pv.mod_FrontDescriptor !== undefined) {
            this.mod_FrontDescriptor = (<IModVar_mod_FrontDescriptor>s).mod_FrontDescriptor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FramePartsWidthHor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FramePartsWidthHor')) {
          let pv = <IModVar_mod_FramePartsWidthHor>s;
          if (pv.mod_FramePartsWidthHor !== undefined) {
            this.mod_FramePartsWidthHor = (<IModVar_mod_FramePartsWidthHor>s).mod_FramePartsWidthHor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FramePartsWidthVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FramePartsWidthVert')) {
          let pv = <IModVar_mod_FramePartsWidthVert>s;
          if (pv.mod_FramePartsWidthVert !== undefined) {
            this.mod_FramePartsWidthVert = (<IModVar_mod_FramePartsWidthVert>s).mod_FramePartsWidthVert;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PanelWoodFrameFillingType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PanelWoodFrameFillingType')) {
          let pv = <IModVar_mod_PanelWoodFrameFillingType>s;
          if (pv.mod_PanelWoodFrameFillingType !== undefined) {
            this.mod_PanelWoodFrameFillingType = (<IModVar_mod_PanelWoodFrameFillingType>s).mod_PanelWoodFrameFillingType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_PanelWoodFrameType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_PanelWoodFrameType')) {
          let pv = <IModVar_mod_PanelWoodFrameType>s;
          if (pv.mod_PanelWoodFrameType !== undefined) {
            this.mod_PanelWoodFrameType = (<IModVar_mod_PanelWoodFrameType>s).mod_PanelWoodFrameType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrameFillingWoodColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrameFillingWoodColor')) {
          let pv = <IModVar_mod_FrameFillingWoodColor>s;
          if (pv.mod_FrameFillingWoodColor !== undefined) {
            this.mod_FrameFillingWoodColor = (<IModVar_mod_FrameFillingWoodColor>s).mod_FrameFillingWoodColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontGlassColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontGlassColor')) {
          let pv = <IModVar_mod_FrontGlassColor>s;
          if (pv.mod_FrontGlassColor !== undefined) {
            this.mod_FrontGlassColor = (<IModVar_mod_FrontGlassColor>s).mod_FrontGlassColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DishwasherSupplier === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DishwasherSupplier')) {
          let pv = <IModVar_mod_DishwasherSupplier>s;
          if (pv.mod_DishwasherSupplier !== undefined) {
            this.mod_DishwasherSupplier = (<IModVar_mod_DishwasherSupplier>s).mod_DishwasherSupplier;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DishwasherId === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DishwasherId')) {
          let pv = <IModVar_mod_DishwasherId>s;
          if (pv.mod_DishwasherId !== undefined) {
            this.mod_DishwasherId = (<IModVar_mod_DishwasherId>s).mod_DishwasherId;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_Depth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Depth')) {
          let pv = <IModVar_mod_Depth>s;
          if (pv.mod_Depth !== undefined) {
            this.mod_Depth = (<IModVar_mod_Depth>s).mod_Depth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_Height === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Height')) {
          let pv = <IModVar_mod_Height>s;
          if (pv.mod_Height !== undefined) {
            this.mod_Height = (<IModVar_mod_Height>s).mod_Height;
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
    if (this.mod_FrontSplit === undefined) {
      this.mod_FrontSplit = false;
    }
    if (this.mod_FrontWidth === undefined) {
      this.mod_FrontWidth = 597;
    }
    if (this.mod_FrontQtyElements === undefined) {
      this.mod_FrontQtyElements = 1;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_Dishwasher";
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
  #manufacturerDataCompletionInternal = mc_Dishwasher_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_Dishwasher_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_Dishwasher{
    this.afterDataCompletion();
    const adc = new OD_M_mc_Dishwasher_NonNull(this);
    return adc;
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
  addOD_M_mc_ApplianceGraphic(index?: number): dc_mc_ApplianceGraphic {
    var m = new OD_M_mc_ApplianceGraphic(this);
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
    this.mod_FingergripTop_matrix = VariantValidation.mod_FingergripTop(this, this);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_FrontSplit_matrix = VariantValidation.mod_FrontSplit(this, this);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_HandleDrill_matrix = VariantValidation.mod_HandleDrill(this, this);
    this.mod_HandleLine_matrix = VariantValidation.mod_HandleLine(this, this);
    this.mod_HandlePosLogic_matrix = VariantValidation.mod_HandlePosLogic(this, this);
    this.mod_FrontQtyElements_matrix = VariantValidation.mod_FrontQtyElements(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this);
    this.mod_FrontEdgeColor_matrix = VariantValidation.mod_FrontEdgeColor(this, this);
    this.mod_FrontEdgeThk_matrix = VariantValidation.mod_FrontEdgeThk(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this);
    this.mod_FrontOversizeBtm_matrix = VariantValidation.mod_FrontOversizeBtm(this, this);
    this.mod_FrontOversizeLeft_matrix = VariantValidation.mod_FrontOversizeLeft(this, this);
    this.mod_FrontOversizeRight_matrix = VariantValidation.mod_FrontOversizeRight(this, this);
    this.mod_FrontOversizeTop_matrix = VariantValidation.mod_FrontOversizeTop(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_FrontSplitHeight1_matrix = VariantValidation.mod_FrontSplitHeight1(this, this);
    this.mod_FrontSplitHeight2_matrix = VariantValidation.mod_FrontSplitHeight2(this, this);
    this.mod_FrontSplitHeight3_matrix = VariantValidation.mod_FrontSplitHeight3(this, this);
    this.mod_FrontSplitType1_matrix = VariantValidation.mod_FrontSplitType1(this, this);
    this.mod_FrontSplitType2_matrix = VariantValidation.mod_FrontSplitType2(this, this);
    this.mod_HandleColor_matrix = VariantValidation.mod_HandleColor(this, this);
    this.mod_HandleLength_matrix = VariantValidation.mod_HandleLength(this, this);
    this.mod_HandleOffsetX_matrix = VariantValidation.mod_HandleOffsetX(this, this);
    this.mod_HandleOffsetY_matrix = VariantValidation.mod_HandleOffsetY(this, this);
    this.mod_HandlePosMatrix_matrix = VariantValidation.mod_HandlePosMatrix(this, this);
    this.mod_HandlePosType_matrix = VariantValidation.mod_HandlePosType(this, this);
    this.mod_HandlestripPos_matrix = VariantValidation.mod_HandlestripPos(this, this);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_FingergripBtmType_matrix = VariantValidation.mod_FingergripBtmType(this, this);
    this.mod_FingergripTopType_matrix = VariantValidation.mod_FingergripTopType(this, this);
    this.mod_FrontGapHorTop_matrix = VariantValidation.mod_FrontGapHorTop(this, this);
    this.mod_FrontDescriptor_matrix = VariantValidation.mod_FrontDescriptor(this, this);
    this.mod_FramePartsWidthHor_matrix = VariantValidation.mod_FramePartsWidthHor(this, this);
    this.mod_FramePartsWidthVert_matrix = VariantValidation.mod_FramePartsWidthVert(this, this);
    this.mod_PanelWoodFrameFillingType_matrix = VariantValidation.mod_PanelWoodFrameFillingType(this, this);
    this.mod_PanelWoodFrameType_matrix = VariantValidation.mod_PanelWoodFrameType(this, this);
    this.mod_FrameFillingWoodColor_matrix = VariantValidation.mod_FrameFillingWoodColor(this, this);
    this.mod_FrontGlassColor_matrix = VariantValidation.mod_FrontGlassColor(this, this);
    this.mod_DishwasherSupplier_matrix = VariantValidation.mod_DishwasherSupplier(this, this);
    this.mod_DishwasherId_matrix = VariantValidation.mod_DishwasherId(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
  }
  addpart_ApplianceUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ApplianceUnit_PartVarsWritable {
    var c = new P_part_ApplianceUnit(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_Dishwasher_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_Dishwasher_NonNull implements cbp_mc_Dishwasher, adc_mc_Dishwasher ,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01,IPartParentsNonNull_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_Fliplift01,IPartParentsNonNull_mc_Dishwasher_mc_Fridge01_mc_Hob01_mc_Oven01_mc_Sink01_mf_Sink_mr_Hood,IPartParentsNonNull_mc_Dishwasher {
  constructor(parent: OD_M_mc_Dishwasher) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_Dishwasher;

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
  #createBuildPlanInternal = mc_Dishwasher_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_Dishwasher_afterDataCompletion;
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
  parent: IModParents_mf_Dishwasher;
  addpart_ApplianceUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ApplianceUnit_PartVarsWritable {
    return this.#internalParent.addpart_ApplianceUnit(x, y, z, dimx, dimy, dimz);
  }
  get mod_FingergripTop(): boolean  {
    return this.#internalParent.mod_FingergripTop!;
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontSplit(): boolean  {
    return this.#internalParent.mod_FrontSplit!;
  }
  get mod_FrontThk(): number  {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_HandleDrill(): boolean  {
    return this.#internalParent.mod_HandleDrill!;
  }
  get mod_HandleLine(): number  {
    return this.#internalParent.mod_HandleLine!;
  }
  get mod_HandlePosLogic(): string  {
    return this.#internalParent.mod_HandlePosLogic!;
  }
  get mod_FrontQtyElements(): number  {
    return this.#internalParent.mod_FrontQtyElements!;
  }
  get mod_FrontPosStart(): number  {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontColor(): string  {
    return this.#internalParent.mod_FrontColor!;
  }
  get mod_FrontColor_matrix(): IMatrix_mod_FrontColor {
    return this.#internalParent.mod_FrontColor_matrix!;
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
  get mod_FrontOversizeBtm(): number  {
    return this.#internalParent.mod_FrontOversizeBtm!;
  }
  get mod_FrontOversizeLeft(): number  {
    return this.#internalParent.mod_FrontOversizeLeft!;
  }
  get mod_FrontOversizeRight(): number  {
    return this.#internalParent.mod_FrontOversizeRight!;
  }
  get mod_FrontOversizeTop(): number  {
    return this.#internalParent.mod_FrontOversizeTop!;
  }
  get mod_FrontProgram(): string  {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_FrontSplitHeight1(): number  {
    return this.#internalParent.mod_FrontSplitHeight1!;
  }
  get mod_FrontSplitHeight2(): number  {
    return this.#internalParent.mod_FrontSplitHeight2!;
  }
  get mod_FrontSplitHeight3(): number  {
    return this.#internalParent.mod_FrontSplitHeight3!;
  }
  get mod_FrontSplitType1(): string  {
    return this.#internalParent.mod_FrontSplitType1!;
  }
  get mod_FrontSplitType2(): string  {
    return this.#internalParent.mod_FrontSplitType2!;
  }
  get mod_HandleColor(): string  {
    return this.#internalParent.mod_HandleColor!;
  }
  get mod_HandleLength(): number  {
    return this.#internalParent.mod_HandleLength!;
  }
  get mod_HandleOffsetX(): number  {
    return this.#internalParent.mod_HandleOffsetX!;
  }
  get mod_HandleOffsetY(): number  {
    return this.#internalParent.mod_HandleOffsetY!;
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
  get mod_HandlestripPos(): string  {
    return this.#internalParent.mod_HandlestripPos!;
  }
  get mod_HeightPosInsertion(): number  {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  get mod_HandleDesign(): string  {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_FrontDesign(): string  {
    return this.#internalParent.mod_FrontDesign!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_FingergripBtmType(): string  {
    return this.#internalParent.mod_FingergripBtmType!;
  }
  get mod_FingergripTopType(): string  {
    return this.#internalParent.mod_FingergripTopType!;
  }
  get mod_Originpos(): number [] {
    return this.#internalParent.mod_Originpos!;
  }
  get mod_FrontGapHorTop(): number  {
    return this.#internalParent.mod_FrontGapHorTop!;
  }
  get mod_FrontDescriptor(): string  {
    return this.#internalParent.mod_FrontDescriptor!;
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
  get mod_OpeningAngle(): string [] {
    return this.#internalParent.mod_OpeningAngle!;
  }
  get mod_FrameFillingWoodColor(): string  {
    return this.#internalParent.mod_FrameFillingWoodColor!;
  }
  get mod_FrontGlassColor(): string  {
    return this.#internalParent.mod_FrontGlassColor!;
  }
  get mod_DishwasherSupplier(): string  {
    return this.#internalParent.mod_DishwasherSupplier!;
  }
  get mod_DishwasherId(): string  {
    return this.#internalParent.mod_DishwasherId!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_DishwasherInfo(): string [] {
    return this.#internalParent.mod_DishwasherInfo!;
  }
  addOD_M_mc_FrontPanel01(index?: number): dc_mc_FrontPanel01 {
    return this.#internalParent.addOD_M_mc_FrontPanel01(index);
  }
  addOD_M_mc_PanelWoodFrame01(index?: number): dc_mc_PanelWoodFrame01 {
    return this.#internalParent.addOD_M_mc_PanelWoodFrame01(index);
  }
  addOD_M_mc_Handle01(index?: number): dc_mc_Handle01 {
    return this.#internalParent.addOD_M_mc_Handle01(index);
  }
  addOD_M_mc_ApplianceGraphic(index?: number): dc_mc_ApplianceGraphic {
    return this.#internalParent.addOD_M_mc_ApplianceGraphic(index);
  }
}

