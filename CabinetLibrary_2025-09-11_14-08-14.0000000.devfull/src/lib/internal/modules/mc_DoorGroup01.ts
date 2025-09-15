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
import { IModuleNonNull_mc_DoorGroup01} from '../mod-interfaces'
import {IModVar_mod_BackwallPos,IModVarNonNull_mod_BackwallPos,IModVar_mod_CarcaseBackwallConstruction,IModVarNonNull_mod_CarcaseBackwallConstruction,IModVar_mod_CarcaseDepth,IModVarNonNull_mod_CarcaseDepth,IModVar_mod_CarcaseHeight,IModVarNonNull_mod_CarcaseHeight,IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseWidth,IModVarNonNull_mod_CarcaseWidth,IModVar_mod_DoorDirection,IModVarNonNull_mod_DoorDirection,IModVar_mod_DoorType,IModVarNonNull_mod_DoorType,IModVar_mod_FingergripBtmType,IModVarNonNull_mod_FingergripBtmType,IModVar_mod_FingergripTop,IModVarNonNull_mod_FingergripTop,IModVar_mod_FingergripTopType,IModVarNonNull_mod_FingergripTopType,IModVar_mod_FrontColor,IModVarNonNull_mod_FrontColor,IModVar_mod_FrontDesign,IModVarNonNull_mod_FrontDesign,IModVar_mod_FrontEdgeColor,IModVarNonNull_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVarNonNull_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVarNonNull_mod_FrontGapHor,IModVar_mod_FrontGapHorTop,IModVarNonNull_mod_FrontGapHorTop,IModVar_mod_FrontGapVert,IModVarNonNull_mod_FrontGapVert,IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_FrontOversizeBtm,IModVarNonNull_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeLeft,IModVarNonNull_mod_FrontOversizeLeft,IModVar_mod_FrontOversizeRight,IModVarNonNull_mod_FrontOversizeRight,IModVar_mod_FrontOversizeTop,IModVarNonNull_mod_FrontOversizeTop,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_FrontQtyElements,IModVarNonNull_mod_FrontQtyElements,IModVar_mod_FrontSplit,IModVarNonNull_mod_FrontSplit,IModVar_mod_FrontSplitHeight1,IModVarNonNull_mod_FrontSplitHeight1,IModVar_mod_FrontSplitHeight2,IModVarNonNull_mod_FrontSplitHeight2,IModVar_mod_FrontSplitHeight3,IModVarNonNull_mod_FrontSplitHeight3,IModVar_mod_FrontSplitType1,IModVarNonNull_mod_FrontSplitType1,IModVar_mod_FrontSplitType2,IModVarNonNull_mod_FrontSplitType2,IModVar_mod_FrontThk,IModVarNonNull_mod_FrontThk,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_HandleColor,IModVarNonNull_mod_HandleColor,IModVar_mod_HandleDesign,IModVarNonNull_mod_HandleDesign,IModVar_mod_HandleDrill,IModVarNonNull_mod_HandleDrill,IModVar_mod_HandleLength,IModVarNonNull_mod_HandleLength,IModVar_mod_HandleLine,IModVarNonNull_mod_HandleLine} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_BackwallPos, IMatrix_mod_CarcaseBackwallConstruction, IMatrix_mod_CarcaseDepth, IMatrix_mod_CarcaseHeight, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseWidth, IMatrix_mod_DoorDirection, IMatrix_mod_DoorType, IMatrix_mod_FingergripBtmType, IMatrix_mod_FingergripTop, IMatrix_mod_FingergripTopType, IMatrix_mod_FrontColor, IMatrix_mod_FrontDesign, IMatrix_mod_FrontEdgeColor, IMatrix_mod_FrontEdgeThk, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapHorTop, IMatrix_mod_FrontGapVert, IMatrix_mod_FrontHeight, IMatrix_mod_FrontId, IMatrix_mod_FrontOversizeBtm, IMatrix_mod_FrontOversizeLeft, IMatrix_mod_FrontOversizeRight, IMatrix_mod_FrontOversizeTop, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontProgram, IMatrix_mod_FrontQtyElements, IMatrix_mod_FrontSplit, IMatrix_mod_FrontSplitHeight1, IMatrix_mod_FrontSplitHeight2, IMatrix_mod_FrontSplitHeight3, IMatrix_mod_FrontSplitType1, IMatrix_mod_FrontSplitType2, IMatrix_mod_FrontThk, IMatrix_mod_FrontWidth, IMatrix_mod_HandleColor, IMatrix_mod_HandleDesign, IMatrix_mod_HandleDrill, IMatrix_mod_HandleLength, IMatrix_mod_HandleLine} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mc_DoorGroup01_createBuildPlan, mc_DoorGroup01_afterDataCompletion, mc_DoorGroup01_manufacturerDataCompletion } from '../../modules/mc_DoorGroup01';

export interface cbp_mc_DoorGroup01 extends IModBaseProp
, IModVarNonNull_mod_BackwallPos, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_DoorType, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_FrontQtyElements, IModVarNonNull_mod_FrontSplit, IModVarNonNull_mod_FrontSplitHeight1, IModVarNonNull_mod_FrontSplitHeight2, IModVarNonNull_mod_FrontSplitHeight3, IModVarNonNull_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType2, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleLine {
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_DoorGroup01 extends IModBaseProp
, IModVar_mod_BackwallPos, IModVar_mod_CarcaseBackwallConstruction, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseId, IModVar_mod_CarcaseWidth, IModVar_mod_DoorDirection, IModVar_mod_DoorType, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTop, IModVar_mod_FingergripTopType, IModVar_mod_FrontColor, IModVar_mod_FrontDesign, IModVar_mod_FrontEdgeColor, IModVar_mod_FrontEdgeThk, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapHorTop, IModVar_mod_FrontGapVert, IModVar_mod_FrontHeight, IModVar_mod_FrontId, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontPosStart, IModVar_mod_FrontProgram, IModVar_mod_FrontQtyElements, IModVar_mod_FrontSplit, IModVar_mod_FrontSplitHeight1, IModVar_mod_FrontSplitHeight2, IModVar_mod_FrontSplitHeight3, IModVar_mod_FrontSplitType1, IModVar_mod_FrontSplitType2, IModVar_mod_FrontThk, IModVar_mod_FrontWidth, IModVar_mod_HandleColor, IModVar_mod_HandleDesign, IModVar_mod_HandleDrill, IModVar_mod_HandleLength, IModVar_mod_HandleLine {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_DoorGroup01;
  parent: OD_Base;
}

export interface adc_mc_DoorGroup01 extends IModBaseProp
, IModVarNonNull_mod_BackwallPos, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_DoorType, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_FrontEdgeColor, IModVarNonNull_mod_FrontEdgeThk, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapHorTop, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_FrontQtyElements, IModVarNonNull_mod_FrontSplit, IModVarNonNull_mod_FrontSplitHeight1, IModVarNonNull_mod_FrontSplitHeight2, IModVarNonNull_mod_FrontSplitHeight3, IModVarNonNull_mod_FrontSplitType1, IModVarNonNull_mod_FrontSplitType2, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleLine {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_DoorGroup01 extends OD_Base  implements dc_mc_DoorGroup01

,IModVar_mod_BackwallPos,IModVar_mod_CarcaseBackwallConstruction,IModVar_mod_CarcaseDepth,IModVar_mod_CarcaseHeight,IModVar_mod_CarcaseId,IModVar_mod_CarcaseWidth,IModVar_mod_DoorDirection,IModVar_mod_DoorType,IModVar_mod_FingergripBtmType,IModVar_mod_FingergripTop,IModVar_mod_FingergripTopType,IModVar_mod_FrontColor,IModVar_mod_FrontDesign,IModVar_mod_FrontEdgeColor,IModVar_mod_FrontEdgeThk,IModVar_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVar_mod_FrontGapHorTop,IModVar_mod_FrontGapVert,IModVar_mod_FrontHeight,IModVar_mod_FrontId,IModVar_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeLeft,IModVar_mod_FrontOversizeRight,IModVar_mod_FrontOversizeTop,IModVar_mod_FrontPosStart,IModVar_mod_FrontProgram,IModVar_mod_FrontQtyElements,IModVar_mod_FrontSplit,IModVar_mod_FrontSplitHeight1,IModVar_mod_FrontSplitHeight2,IModVar_mod_FrontSplitHeight3,IModVar_mod_FrontSplitType1,IModVar_mod_FrontSplitType2,IModVar_mod_FrontThk,IModVar_mod_FrontWidth,IModVar_mod_HandleColor,IModVar_mod_HandleDesign,IModVar_mod_HandleDrill,IModVar_mod_HandleLength,IModVar_mod_HandleLine
 {
  constructor(parent: OD_Base, manufacturerMode?:boolean) {
    super('mc_DoorGroup01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_DoorGroup01_NonNull(this);
  }
  parent: OD_Base;
  _selfNonNull: OD_M_mc_DoorGroup01_NonNull;

  override variants:string[] = ['mod_BackwallPos','mod_CarcaseBackwallConstruction','mod_CarcaseDepth','mod_CarcaseHeight','mod_CarcaseId','mod_CarcaseWidth','mod_DoorDirection','mod_DoorType','mod_FingergripBtmType','mod_FingergripTop','mod_FingergripTopType','mod_FrontColor','mod_FrontDesign','mod_FrontEdgeColor','mod_FrontEdgeThk','mod_FrontGapCarcase','mod_FrontGapHor','mod_FrontGapHorTop','mod_FrontGapVert','mod_FrontHeight','mod_FrontId','mod_FrontOversizeBtm','mod_FrontOversizeLeft','mod_FrontOversizeRight','mod_FrontOversizeTop','mod_FrontPosStart','mod_FrontProgram','mod_FrontQtyElements','mod_FrontSplit','mod_FrontSplitHeight1','mod_FrontSplitHeight2','mod_FrontSplitHeight3','mod_FrontSplitType1','mod_FrontSplitType2','mod_FrontThk','mod_FrontWidth','mod_HandleColor','mod_HandleDesign','mod_HandleDrill','mod_HandleLength','mod_HandleLine',];
  #mod_BackwallPos?: number;
  get mod_BackwallPos(): number | undefined { return this.#mod_BackwallPos}
  set mod_BackwallPos(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_BackwallPos' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_BackwallPos === value) return;
    this.#mod_BackwallPos = value;
  }

  mod_BackwallPos_matrix?: IMatrix_mod_BackwallPos;
  #mod_CarcaseBackwallConstruction?: string;
  get mod_CarcaseBackwallConstruction(): string | undefined { return this.#mod_CarcaseBackwallConstruction}
  set mod_CarcaseBackwallConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseBackwallConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseBackwallConstruction === value) return;
    this.#mod_CarcaseBackwallConstruction = value;
  }

  mod_CarcaseBackwallConstruction_matrix?: IMatrix_mod_CarcaseBackwallConstruction;
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
  #mod_DoorType?: string;
  get mod_DoorType(): string | undefined { return this.#mod_DoorType}
  set mod_DoorType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DoorType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DoorType === value) return;
    this.#mod_DoorType = value;
  }

  mod_DoorType_matrix?: IMatrix_mod_DoorType;
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
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_BackwallPos', this.mod_BackwallPos);
  res.set('mod_CarcaseBackwallConstruction', this.mod_CarcaseBackwallConstruction);
  res.set('mod_CarcaseDepth', this.mod_CarcaseDepth);
  res.set('mod_CarcaseHeight', this.mod_CarcaseHeight);
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
  res.set('mod_DoorDirection', this.mod_DoorDirection);
  res.set('mod_DoorType', this.mod_DoorType);
  res.set('mod_FingergripBtmType', this.mod_FingergripBtmType);
  res.set('mod_FingergripTop', this.mod_FingergripTop);
  res.set('mod_FingergripTopType', this.mod_FingergripTopType);
  res.set('mod_FrontColor', this.mod_FrontColor);
  res.set('mod_FrontDesign', this.mod_FrontDesign);
  res.set('mod_FrontEdgeColor', this.mod_FrontEdgeColor);
  res.set('mod_FrontEdgeThk', this.mod_FrontEdgeThk);
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_FrontGapHor', this.mod_FrontGapHor);
  res.set('mod_FrontGapHorTop', this.mod_FrontGapHorTop);
  res.set('mod_FrontGapVert', this.mod_FrontGapVert);
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_FrontOversizeBtm', this.mod_FrontOversizeBtm);
  res.set('mod_FrontOversizeLeft', this.mod_FrontOversizeLeft);
  res.set('mod_FrontOversizeRight', this.mod_FrontOversizeRight);
  res.set('mod_FrontOversizeTop', this.mod_FrontOversizeTop);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_FrontQtyElements', this.mod_FrontQtyElements);
  res.set('mod_FrontSplit', this.mod_FrontSplit);
  res.set('mod_FrontSplitHeight1', this.mod_FrontSplitHeight1);
  res.set('mod_FrontSplitHeight2', this.mod_FrontSplitHeight2);
  res.set('mod_FrontSplitHeight3', this.mod_FrontSplitHeight3);
  res.set('mod_FrontSplitType1', this.mod_FrontSplitType1);
  res.set('mod_FrontSplitType2', this.mod_FrontSplitType2);
  res.set('mod_FrontThk', this.mod_FrontThk);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_HandleColor', this.mod_HandleColor);
  res.set('mod_HandleDesign', this.mod_HandleDesign);
  res.set('mod_HandleDrill', this.mod_HandleDrill);
  res.set('mod_HandleLength', this.mod_HandleLength);
  res.set('mod_HandleLine', this.mod_HandleLine);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_BackwallPos');
    const val = _toFloat(json['attributes']['mod_BackwallPos'], 'mod_BackwallPos');
    internal_leaveValidateVariant();
    this.mod_BackwallPos = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseBackwallConstruction');
    const val = _toString(json['attributes']['mod_CarcaseBackwallConstruction'], 'mod_CarcaseBackwallConstruction');
    internal_leaveValidateVariant();
    this.mod_CarcaseBackwallConstruction = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseWidth');
    const val = _toFloat(json['attributes']['mod_CarcaseWidth'], 'mod_CarcaseWidth');
    internal_leaveValidateVariant();
    this.mod_CarcaseWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DoorDirection');
    const val = _toString(json['attributes']['mod_DoorDirection'], 'mod_DoorDirection');
    internal_leaveValidateVariant();
    this.mod_DoorDirection = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DoorType');
    const val = _toString(json['attributes']['mod_DoorType'], 'mod_DoorType');
    internal_leaveValidateVariant();
    this.mod_DoorType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripBtmType');
    const val = _toString(json['attributes']['mod_FingergripBtmType'], 'mod_FingergripBtmType');
    internal_leaveValidateVariant();
    this.mod_FingergripBtmType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTop');
    const val = _toBoolean(json['attributes']['mod_FingergripTop'], 'mod_FingergripTop');
    internal_leaveValidateVariant();
    this.mod_FingergripTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTopType');
    const val = _toString(json['attributes']['mod_FingergripTopType'], 'mod_FingergripTopType');
    internal_leaveValidateVariant();
    this.mod_FingergripTopType = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapHorTop');
    const val = _toFloat(json['attributes']['mod_FrontGapHorTop'], 'mod_FrontGapHorTop');
    internal_leaveValidateVariant();
    this.mod_FrontGapHorTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapVert');
    const val = _toFloat(json['attributes']['mod_FrontGapVert'], 'mod_FrontGapVert');
    internal_leaveValidateVariant();
    this.mod_FrontGapVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
    const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
    internal_leaveValidateVariant();
    this.mod_FrontHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
    const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
    internal_leaveValidateVariant();
    this.mod_FrontId = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontQtyElements');
    const val = _toInt(json['attributes']['mod_FrontQtyElements'], 'mod_FrontQtyElements');
    internal_leaveValidateVariant();
    this.mod_FrontQtyElements = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontSplit');
    const val = _toBoolean(json['attributes']['mod_FrontSplit'], 'mod_FrontSplit');
    internal_leaveValidateVariant();
    this.mod_FrontSplit = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
    const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
    internal_leaveValidateVariant();
    this.mod_FrontThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleColor');
    const val = _toString(json['attributes']['mod_HandleColor'], 'mod_HandleColor');
    internal_leaveValidateVariant();
    this.mod_HandleColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
    const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
    internal_leaveValidateVariant();
    this.mod_HandleDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDrill');
    const val = _toBoolean(json['attributes']['mod_HandleDrill'], 'mod_HandleDrill');
    internal_leaveValidateVariant();
    this.mod_HandleDrill = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLength');
    const val = _toFloat(json['attributes']['mod_HandleLength'], 'mod_HandleLength');
    internal_leaveValidateVariant();
    this.mod_HandleLength = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleLine');
    const val = _toFloat(json['attributes']['mod_HandleLine'], 'mod_HandleLine');
    internal_leaveValidateVariant();
    this.mod_HandleLine = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_BackwallPos === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_BackwallPos')) {
          let pv = <IModVar_mod_BackwallPos>s;
          if (pv.mod_BackwallPos !== undefined) {
            this.mod_BackwallPos = (<IModVar_mod_BackwallPos>s).mod_BackwallPos;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseBackwallConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseBackwallConstruction')) {
          let pv = <IModVar_mod_CarcaseBackwallConstruction>s;
          if (pv.mod_CarcaseBackwallConstruction !== undefined) {
            this.mod_CarcaseBackwallConstruction = (<IModVar_mod_CarcaseBackwallConstruction>s).mod_CarcaseBackwallConstruction;
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
    if (this.mod_DoorType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DoorType')) {
          let pv = <IModVar_mod_DoorType>s;
          if (pv.mod_DoorType !== undefined) {
            this.mod_DoorType = (<IModVar_mod_DoorType>s).mod_DoorType;
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
    if (this.mod_FrontQtyElements === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontQtyElements')) {
          let pv = <IModVar_mod_FrontQtyElements>s;
          if (pv.mod_FrontQtyElements !== undefined) {
            this.mod_FrontQtyElements = (<IModVar_mod_FrontQtyElements>s).mod_FrontQtyElements;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FrontSplit === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontSplit')) {
          let pv = <IModVar_mod_FrontSplit>s;
          if (pv.mod_FrontSplit !== undefined) {
            this.mod_FrontSplit = (<IModVar_mod_FrontSplit>s).mod_FrontSplit;
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
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_FrontWidth === undefined) {
      this.mod_FrontWidth = 597;
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
  #manufacturerDataCompletionInternal = mc_DoorGroup01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_DoorGroup01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_DoorGroup01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_DoorGroup01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_BackwallPos_matrix = VariantValidation.mod_BackwallPos(this, this);
    this.mod_CarcaseBackwallConstruction_matrix = VariantValidation.mod_CarcaseBackwallConstruction(this, this);
    this.mod_CarcaseDepth_matrix = VariantValidation.mod_CarcaseDepth(this, this);
    this.mod_CarcaseHeight_matrix = VariantValidation.mod_CarcaseHeight(this, this);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this);
    this.mod_DoorDirection_matrix = VariantValidation.mod_DoorDirection(this, this);
    this.mod_DoorType_matrix = VariantValidation.mod_DoorType(this, this);
    this.mod_FingergripBtmType_matrix = VariantValidation.mod_FingergripBtmType(this, this);
    this.mod_FingergripTop_matrix = VariantValidation.mod_FingergripTop(this, this);
    this.mod_FingergripTopType_matrix = VariantValidation.mod_FingergripTopType(this, this);
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this);
    this.mod_FrontEdgeColor_matrix = VariantValidation.mod_FrontEdgeColor(this, this);
    this.mod_FrontEdgeThk_matrix = VariantValidation.mod_FrontEdgeThk(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this);
    this.mod_FrontGapHorTop_matrix = VariantValidation.mod_FrontGapHorTop(this, this);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_FrontOversizeBtm_matrix = VariantValidation.mod_FrontOversizeBtm(this, this);
    this.mod_FrontOversizeLeft_matrix = VariantValidation.mod_FrontOversizeLeft(this, this);
    this.mod_FrontOversizeRight_matrix = VariantValidation.mod_FrontOversizeRight(this, this);
    this.mod_FrontOversizeTop_matrix = VariantValidation.mod_FrontOversizeTop(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_FrontQtyElements_matrix = VariantValidation.mod_FrontQtyElements(this, this);
    this.mod_FrontSplit_matrix = VariantValidation.mod_FrontSplit(this, this);
    this.mod_FrontSplitHeight1_matrix = VariantValidation.mod_FrontSplitHeight1(this, this);
    this.mod_FrontSplitHeight2_matrix = VariantValidation.mod_FrontSplitHeight2(this, this);
    this.mod_FrontSplitHeight3_matrix = VariantValidation.mod_FrontSplitHeight3(this, this);
    this.mod_FrontSplitType1_matrix = VariantValidation.mod_FrontSplitType1(this, this);
    this.mod_FrontSplitType2_matrix = VariantValidation.mod_FrontSplitType2(this, this);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_HandleColor_matrix = VariantValidation.mod_HandleColor(this, this);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this);
    this.mod_HandleDrill_matrix = VariantValidation.mod_HandleDrill(this, this);
    this.mod_HandleLength_matrix = VariantValidation.mod_HandleLength(this, this);
    this.mod_HandleLine_matrix = VariantValidation.mod_HandleLine(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_DoorGroup01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_DoorGroup01_NonNull implements cbp_mc_DoorGroup01, adc_mc_DoorGroup01  {
  constructor(parent: OD_M_mc_DoorGroup01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_DoorGroup01;

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
  #createBuildPlanInternal = mc_DoorGroup01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_DoorGroup01_afterDataCompletion;
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
  parent: OD_Base;
  get mod_BackwallPos(): number  {
    return this.#internalParent.mod_BackwallPos!;
  }
  get mod_CarcaseBackwallConstruction(): string  {
    return this.#internalParent.mod_CarcaseBackwallConstruction!;
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
  get mod_CarcaseWidth(): number  {
    return this.#internalParent.mod_CarcaseWidth!;
  }
  get mod_DoorDirection(): string  {
    return this.#internalParent.mod_DoorDirection!;
  }
  get mod_DoorDirection_matrix(): IMatrix_mod_DoorDirection {
    return this.#internalParent.mod_DoorDirection_matrix!;
  }
  get mod_DoorType(): string  {
    return this.#internalParent.mod_DoorType!;
  }
  get mod_DoorType_matrix(): IMatrix_mod_DoorType {
    return this.#internalParent.mod_DoorType_matrix!;
  }
  get mod_FingergripBtmType(): string  {
    return this.#internalParent.mod_FingergripBtmType!;
  }
  get mod_FingergripTop(): boolean  {
    return this.#internalParent.mod_FingergripTop!;
  }
  get mod_FingergripTopType(): string  {
    return this.#internalParent.mod_FingergripTopType!;
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
  get mod_FrontGapHorTop(): number  {
    return this.#internalParent.mod_FrontGapHorTop!;
  }
  get mod_FrontGapVert(): number  {
    return this.#internalParent.mod_FrontGapVert!;
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
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
  get mod_FrontPosStart(): number  {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontProgram(): string  {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_FrontQtyElements(): number  {
    return this.#internalParent.mod_FrontQtyElements!;
  }
  get mod_FrontSplit(): boolean  {
    return this.#internalParent.mod_FrontSplit!;
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
  get mod_FrontThk(): number  {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_HandleColor(): string  {
    return this.#internalParent.mod_HandleColor!;
  }
  get mod_HandleDesign(): string  {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_HandleDrill(): boolean  {
    return this.#internalParent.mod_HandleDrill!;
  }
  get mod_HandleLength(): number  {
    return this.#internalParent.mod_HandleLength!;
  }
  get mod_HandleLine(): number  {
    return this.#internalParent.mod_HandleLine!;
  }
}

