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
import { IModParents_mr_StorageunitSingle } from '../mod-interfaces'
import { OD_M_mc_Fixedfront01, dc_mc_Fixedfront01 } from './mc_Fixedfront01'
import { IModuleNonNull_mf_Fixedfront,IModParents_mf_Fixedfront,IPartParentsNonNull_mf_Fixedfront} from '../mod-interfaces'
import {IModVar_mod_BackwallPos,IModVarNonNull_mod_BackwallPos,IModVar_mod_CarcaseDepth,IModVarNonNull_mod_CarcaseDepth,IModVar_mod_CarcaseHeight,IModVarNonNull_mod_CarcaseHeight,IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseWidth,IModVarNonNull_mod_CarcaseWidth,IModVar_mod_FingergripTop,IModVarNonNull_mod_FingergripTop,IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_FrontThk,IModVarNonNull_mod_FrontThk,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_ShelffixedType,IModVarNonNull_mod_ShelffixedType,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_FrontColor,IModVarNonNull_mod_FrontColor,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVarNonNull_mod_FrontGapHor,IModVar_mod_FrontGapVert,IModVarNonNull_mod_FrontGapVert,IModVar_mod_FrontOversizeBtm,IModVarNonNull_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeLeft,IModVarNonNull_mod_FrontOversizeLeft,IModVar_mod_FrontOversizeRight,IModVarNonNull_mod_FrontOversizeRight,IModVar_mod_FrontOversizeTop,IModVarNonNull_mod_FrontOversizeTop,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_HandlestripPos,IModVarNonNull_mod_HandlestripPos,IModVar_mod_HeightPosInsertion,IModVarNonNull_mod_HeightPosInsertion,IModVar_mod_PlinthAreaHeight,IModVarNonNull_mod_PlinthAreaHeight,IModVar_mod_ShelffixedBtm,IModVarNonNull_mod_ShelffixedBtm,IModVar_mod_ShelffixedPos,IModVarNonNull_mod_ShelffixedPos,IModVar_mod_ShelffixedOffsetFront,IModVarNonNull_mod_ShelffixedOffsetFront,IModVar_mod_ShelffixedThk,IModVarNonNull_mod_ShelffixedThk,IModVar_mod_ShelffixedOversizeFront,IModVarNonNull_mod_ShelffixedOversizeFront,IModVar_mod_ShelffixedOversizeBack,IModVarNonNull_mod_ShelffixedOversizeBack,IModVar_mod_HandleDesign,IModVarNonNull_mod_HandleDesign,IModVar_mod_FrontDesign,IModVarNonNull_mod_FrontDesign,IModVar_mod_CarcaseBackwallConstruction,IModVarNonNull_mod_CarcaseBackwallConstruction,IModVar_mod_Originpos,IModVarNonNull_mod_Originpos,IModVar_mod_DrawerBoxWeightType,IModVarNonNull_mod_DrawerBoxWeightType,IModVar_mod_ParentName,IModVarNonNull_mod_ParentName,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_FingergripBtmType,IModVarNonNull_mod_FingergripBtmType,IModVar_mod_FingergripTopType,IModVarNonNull_mod_FingergripTopType,IModVar_mod_DrawerBoxDesign,IModVarNonNull_mod_DrawerBoxDesign,IModVar_mod_ShelffixedTop,IModVarNonNull_mod_ShelffixedTop,IModVar_mod_VertDividerType,IModVarNonNull_mod_VertDividerType,IModVar_mod_SidepanelmiddleThk,IModVarNonNull_mod_SidepanelmiddleThk,IModVar_mod_CarcaseSpaceDimension,IModVarNonNull_mod_CarcaseSpaceDimension,IModVar_mod_PanelWoodFrameType,IModVarNonNull_mod_PanelWoodFrameType,IModVar_mod_FramePartsWidthHor,IModVarNonNull_mod_FramePartsWidthHor,IModVar_mod_FramePartsWidthVert,IModVarNonNull_mod_FramePartsWidthVert,IModVar_mod_PanelWoodFrameFillingType,IModVarNonNull_mod_PanelWoodFrameFillingType,IModVar_mod_FrontHeightSelection,IModVarNonNull_mod_FrontHeightSelection,IModVar_mod_FrameFillingWoodColor,IModVarNonNull_mod_FrameFillingWoodColor,IModVar_mod_FrontGlassColor,IModVarNonNull_mod_FrontGlassColor,IModVar_mod_FrameFillingColor,IModVarNonNull_mod_FrameFillingColor} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_BackwallPos, IMatrix_mod_CarcaseDepth, IMatrix_mod_CarcaseHeight, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseWidth, IMatrix_mod_FingergripTop, IMatrix_mod_FrontHeight, IMatrix_mod_FrontId, IMatrix_mod_FrontThk, IMatrix_mod_FrontWidth, IMatrix_mod_ShelffixedType, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontColor, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontGapHor, IMatrix_mod_FrontGapVert, IMatrix_mod_FrontOversizeBtm, IMatrix_mod_FrontOversizeLeft, IMatrix_mod_FrontOversizeRight, IMatrix_mod_FrontOversizeTop, IMatrix_mod_FrontProgram, IMatrix_mod_HandlestripPos, IMatrix_mod_HeightPosInsertion, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_ShelffixedBtm, IMatrix_mod_ShelffixedPos, IMatrix_mod_ShelffixedOffsetFront, IMatrix_mod_ShelffixedThk, IMatrix_mod_ShelffixedOversizeFront, IMatrix_mod_ShelffixedOversizeBack, IMatrix_mod_HandleDesign, IMatrix_mod_FrontDesign, IMatrix_mod_CarcaseBackwallConstruction, IMatrix_mod_DrawerBoxWeightType, IMatrix_mod_ParentName, IMatrix_mod_ModuleName, IMatrix_mod_FingergripBtmType, IMatrix_mod_FingergripTopType, IMatrix_mod_DrawerBoxDesign, IMatrix_mod_ShelffixedTop, IMatrix_mod_VertDividerType, IMatrix_mod_SidepanelmiddleThk, IMatrix_mod_PanelWoodFrameType, IMatrix_mod_FramePartsWidthHor, IMatrix_mod_FramePartsWidthVert, IMatrix_mod_PanelWoodFrameFillingType, IMatrix_mod_FrontHeightSelection, IMatrix_mod_FrameFillingWoodColor, IMatrix_mod_FrontGlassColor, IMatrix_mod_FrameFillingColor} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { mf_Fixedfront_createBuildPlan, mf_Fixedfront_afterDataCompletion, mf_Fixedfront_manufacturerDataCompletion } from '../../modules/mf_Fixedfront';

export interface cbp_mf_Fixedfront extends IModBaseProp
, IModVarNonNull_mod_BackwallPos, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_ShelffixedType, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_HandlestripPos, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_ShelffixedBtm, IModVarNonNull_mod_ShelffixedPos, IModVarNonNull_mod_ShelffixedOffsetFront, IModVarNonNull_mod_ShelffixedThk, IModVarNonNull_mod_ShelffixedOversizeFront, IModVarNonNull_mod_ShelffixedOversizeBack, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_DrawerBoxWeightType, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_DrawerBoxDesign, IModVarNonNull_mod_ShelffixedTop, IModVarNonNull_mod_VertDividerType, IModVarNonNull_mod_SidepanelmiddleThk, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_PanelWoodFrameType, IModVarNonNull_mod_FramePartsWidthHor, IModVarNonNull_mod_FramePartsWidthVert, IModVarNonNull_mod_PanelWoodFrameFillingType, IModVarNonNull_mod_FrontHeightSelection, IModVarNonNull_mod_FrameFillingWoodColor, IModVarNonNull_mod_FrontGlassColor, IModVarNonNull_mod_FrameFillingColor {
  parent: IModParents_mr_StorageunitSingle;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mf_Fixedfront extends IModBaseProp
, IModVar_mod_BackwallPos, IModVar_mod_CarcaseDepth, IModVar_mod_CarcaseHeight, IModVar_mod_CarcaseId, IModVar_mod_CarcaseWidth, IModVar_mod_FingergripTop, IModVar_mod_FrontHeight, IModVar_mod_FrontId, IModVar_mod_FrontThk, IModVar_mod_FrontWidth, IModVar_mod_ShelffixedType, IModVar_mod_FrontPosStart, IModVar_mod_FrontColor, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontGapHor, IModVar_mod_FrontGapVert, IModVar_mod_FrontOversizeBtm, IModVar_mod_FrontOversizeLeft, IModVar_mod_FrontOversizeRight, IModVar_mod_FrontOversizeTop, IModVar_mod_FrontProgram, IModVar_mod_HandlestripPos, IModVar_mod_HeightPosInsertion, IModVar_mod_PlinthAreaHeight, IModVar_mod_ShelffixedBtm, IModVar_mod_ShelffixedPos, IModVar_mod_ShelffixedOffsetFront, IModVar_mod_ShelffixedThk, IModVar_mod_ShelffixedOversizeFront, IModVar_mod_ShelffixedOversizeBack, IModVar_mod_HandleDesign, IModVar_mod_FrontDesign, IModVar_mod_CarcaseBackwallConstruction, IModVar_mod_Originpos, IModVar_mod_DrawerBoxWeightType, IModVar_mod_ParentName, IModVar_mod_ModuleName, IModVar_mod_FingergripBtmType, IModVar_mod_FingergripTopType, IModVar_mod_DrawerBoxDesign, IModVar_mod_ShelffixedTop, IModVar_mod_VertDividerType, IModVar_mod_SidepanelmiddleThk, IModVar_mod_CarcaseSpaceDimension, IModVar_mod_PanelWoodFrameType, IModVar_mod_FramePartsWidthHor, IModVar_mod_FramePartsWidthVert, IModVar_mod_PanelWoodFrameFillingType, IModVar_mod_FrontHeightSelection, IModVar_mod_FrameFillingWoodColor, IModVar_mod_FrontGlassColor, IModVar_mod_FrameFillingColor {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mf_Fixedfront;
  parent: IModParents_mr_StorageunitSingle;
  addOD_M_mc_Fixedfront01(index?: number): dc_mc_Fixedfront01;
}

export interface adc_mf_Fixedfront extends IModBaseProp
, IModVarNonNull_mod_BackwallPos, IModVarNonNull_mod_CarcaseDepth, IModVarNonNull_mod_CarcaseHeight, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_FingergripTop, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_ShelffixedType, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontColor, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontGapHor, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_FrontOversizeBtm, IModVarNonNull_mod_FrontOversizeLeft, IModVarNonNull_mod_FrontOversizeRight, IModVarNonNull_mod_FrontOversizeTop, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_HandlestripPos, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_ShelffixedBtm, IModVarNonNull_mod_ShelffixedPos, IModVarNonNull_mod_ShelffixedOffsetFront, IModVarNonNull_mod_ShelffixedThk, IModVarNonNull_mod_ShelffixedOversizeFront, IModVarNonNull_mod_ShelffixedOversizeBack, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_CarcaseBackwallConstruction, IModVarNonNull_mod_Originpos, IModVarNonNull_mod_DrawerBoxWeightType, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_FingergripBtmType, IModVarNonNull_mod_FingergripTopType, IModVarNonNull_mod_DrawerBoxDesign, IModVarNonNull_mod_ShelffixedTop, IModVarNonNull_mod_VertDividerType, IModVarNonNull_mod_SidepanelmiddleThk, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_PanelWoodFrameType, IModVarNonNull_mod_FramePartsWidthHor, IModVarNonNull_mod_FramePartsWidthVert, IModVarNonNull_mod_PanelWoodFrameFillingType, IModVarNonNull_mod_FrontHeightSelection, IModVarNonNull_mod_FrameFillingWoodColor, IModVarNonNull_mod_FrontGlassColor, IModVarNonNull_mod_FrameFillingColor {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_Fixedfront01(index?: number): dc_mc_Fixedfront01;
}

export class OD_M_mf_Fixedfront extends OD_Base  implements dc_mf_Fixedfront
,IModParents_mf_Fixedfront
,IModVar_mod_BackwallPos,IModVar_mod_CarcaseDepth,IModVar_mod_CarcaseHeight,IModVar_mod_CarcaseId,IModVar_mod_CarcaseWidth,IModVar_mod_FingergripTop,IModVar_mod_FrontHeight,IModVar_mod_FrontId,IModVar_mod_FrontThk,IModVar_mod_FrontWidth,IModVar_mod_ShelffixedType,IModVar_mod_FrontPosStart,IModVar_mod_FrontColor,IModVar_mod_FrontGapCarcase,IModVar_mod_FrontGapHor,IModVar_mod_FrontGapVert,IModVar_mod_FrontOversizeBtm,IModVar_mod_FrontOversizeLeft,IModVar_mod_FrontOversizeRight,IModVar_mod_FrontOversizeTop,IModVar_mod_FrontProgram,IModVar_mod_HandlestripPos,IModVar_mod_HeightPosInsertion,IModVar_mod_PlinthAreaHeight,IModVar_mod_ShelffixedBtm,IModVar_mod_ShelffixedPos,IModVar_mod_ShelffixedOffsetFront,IModVar_mod_ShelffixedThk,IModVar_mod_ShelffixedOversizeFront,IModVar_mod_ShelffixedOversizeBack,IModVar_mod_HandleDesign,IModVar_mod_FrontDesign,IModVar_mod_CarcaseBackwallConstruction,IModVar_mod_Originpos,IModVar_mod_DrawerBoxWeightType,IModVar_mod_ParentName,IModVar_mod_ModuleName,IModVar_mod_FingergripBtmType,IModVar_mod_FingergripTopType,IModVar_mod_DrawerBoxDesign,IModVar_mod_ShelffixedTop,IModVar_mod_VertDividerType,IModVar_mod_SidepanelmiddleThk,IModVar_mod_CarcaseSpaceDimension,IModVar_mod_PanelWoodFrameType,IModVar_mod_FramePartsWidthHor,IModVar_mod_FramePartsWidthVert,IModVar_mod_PanelWoodFrameFillingType,IModVar_mod_FrontHeightSelection,IModVar_mod_FrameFillingWoodColor,IModVar_mod_FrontGlassColor,IModVar_mod_FrameFillingColor
 {
  constructor(parent: IModParents_mr_StorageunitSingle, manufacturerMode?:boolean) {
    super('mf_Fixedfront', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mf_Fixedfront_NonNull(this);
  }
  parent: IModParents_mr_StorageunitSingle;
  _selfNonNull: OD_M_mf_Fixedfront_NonNull;

  override variants:string[] = ['mod_BackwallPos','mod_CarcaseDepth','mod_CarcaseHeight','mod_CarcaseId','mod_CarcaseWidth','mod_FingergripTop','mod_FrontHeight','mod_FrontId','mod_FrontThk','mod_FrontWidth','mod_ShelffixedType','mod_FrontPosStart','mod_FrontColor','mod_FrontGapCarcase','mod_FrontGapHor','mod_FrontGapVert','mod_FrontOversizeBtm','mod_FrontOversizeLeft','mod_FrontOversizeRight','mod_FrontOversizeTop','mod_FrontProgram','mod_HandlestripPos','mod_HeightPosInsertion','mod_PlinthAreaHeight','mod_ShelffixedBtm','mod_ShelffixedPos','mod_ShelffixedOffsetFront','mod_ShelffixedThk','mod_ShelffixedOversizeFront','mod_ShelffixedOversizeBack','mod_HandleDesign','mod_FrontDesign','mod_CarcaseBackwallConstruction','mod_Originpos','mod_DrawerBoxWeightType','mod_ParentName','mod_ModuleName','mod_FingergripBtmType','mod_FingergripTopType','mod_DrawerBoxDesign','mod_ShelffixedTop','mod_VertDividerType','mod_SidepanelmiddleThk','mod_CarcaseSpaceDimension','mod_PanelWoodFrameType','mod_FramePartsWidthHor','mod_FramePartsWidthVert','mod_PanelWoodFrameFillingType','mod_FrontHeightSelection','mod_FrameFillingWoodColor','mod_FrontGlassColor','mod_FrameFillingColor',];
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
  #mod_ShelffixedType?: string;
  get mod_ShelffixedType(): string | undefined { return this.#mod_ShelffixedType}
  set mod_ShelffixedType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedType === value) return;
    this.#mod_ShelffixedType = value;
  }

  mod_ShelffixedType_matrix?: IMatrix_mod_ShelffixedType;
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
  #mod_ShelffixedBtm?: boolean;
  get mod_ShelffixedBtm(): boolean | undefined { return this.#mod_ShelffixedBtm}
  set mod_ShelffixedBtm(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedBtm === value) return;
    this.#mod_ShelffixedBtm = value;
  }

  mod_ShelffixedBtm_matrix?: IMatrix_mod_ShelffixedBtm;
  #mod_ShelffixedPos?: string;
  get mod_ShelffixedPos(): string | undefined { return this.#mod_ShelffixedPos}
  set mod_ShelffixedPos(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedPos' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedPos === value) return;
    this.#mod_ShelffixedPos = value;
  }

  mod_ShelffixedPos_matrix?: IMatrix_mod_ShelffixedPos;
  #mod_ShelffixedOffsetFront?: number;
  get mod_ShelffixedOffsetFront(): number | undefined { return this.#mod_ShelffixedOffsetFront}
  set mod_ShelffixedOffsetFront(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedOffsetFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedOffsetFront === value) return;
    this.#mod_ShelffixedOffsetFront = value;
  }

  mod_ShelffixedOffsetFront_matrix?: IMatrix_mod_ShelffixedOffsetFront;
  #mod_ShelffixedThk?: number;
  get mod_ShelffixedThk(): number | undefined { return this.#mod_ShelffixedThk}
  set mod_ShelffixedThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedThk === value) return;
    this.#mod_ShelffixedThk = value;
  }

  mod_ShelffixedThk_matrix?: IMatrix_mod_ShelffixedThk;
  #mod_ShelffixedOversizeFront?: number;
  get mod_ShelffixedOversizeFront(): number | undefined { return this.#mod_ShelffixedOversizeFront}
  set mod_ShelffixedOversizeFront(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedOversizeFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedOversizeFront === value) return;
    this.#mod_ShelffixedOversizeFront = value;
  }

  mod_ShelffixedOversizeFront_matrix?: IMatrix_mod_ShelffixedOversizeFront;
  #mod_ShelffixedOversizeBack?: number;
  get mod_ShelffixedOversizeBack(): number | undefined { return this.#mod_ShelffixedOversizeBack}
  set mod_ShelffixedOversizeBack(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedOversizeBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedOversizeBack === value) return;
    this.#mod_ShelffixedOversizeBack = value;
  }

  mod_ShelffixedOversizeBack_matrix?: IMatrix_mod_ShelffixedOversizeBack;
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
  #mod_Originpos: number[] = [];
  get mod_Originpos(): number[] { return this.#mod_Originpos;}
  #mod_DrawerBoxWeightType?: string;
  get mod_DrawerBoxWeightType(): string | undefined { return this.#mod_DrawerBoxWeightType}
  set mod_DrawerBoxWeightType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxWeightType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxWeightType === value) return;
    this.#mod_DrawerBoxWeightType = value;
  }

  mod_DrawerBoxWeightType_matrix?: IMatrix_mod_DrawerBoxWeightType;
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
  #mod_DrawerBoxDesign?: string;
  get mod_DrawerBoxDesign(): string | undefined { return this.#mod_DrawerBoxDesign}
  set mod_DrawerBoxDesign(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxDesign === value) return;
    this.#mod_DrawerBoxDesign = value;
  }

  mod_DrawerBoxDesign_matrix?: IMatrix_mod_DrawerBoxDesign;
  #mod_ShelffixedTop?: boolean;
  get mod_ShelffixedTop(): boolean | undefined { return this.#mod_ShelffixedTop}
  set mod_ShelffixedTop(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelffixedTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelffixedTop === value) return;
    this.#mod_ShelffixedTop = value;
  }

  mod_ShelffixedTop_matrix?: IMatrix_mod_ShelffixedTop;
  #mod_VertDividerType?: string;
  get mod_VertDividerType(): string | undefined { return this.#mod_VertDividerType}
  set mod_VertDividerType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_VertDividerType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_VertDividerType === value) return;
    this.#mod_VertDividerType = value;
  }

  mod_VertDividerType_matrix?: IMatrix_mod_VertDividerType;
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
  #mod_CarcaseSpaceDimension: string[] = [];
  get mod_CarcaseSpaceDimension(): string[] { return this.#mod_CarcaseSpaceDimension;}
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
  #mod_FrontHeightSelection?: number;
  get mod_FrontHeightSelection(): number | undefined { return this.#mod_FrontHeightSelection}
  set mod_FrontHeightSelection(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontHeightSelection' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontHeightSelection === value) return;
    this.#mod_FrontHeightSelection = value;
  }

  mod_FrontHeightSelection_matrix?: IMatrix_mod_FrontHeightSelection;
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
  #mod_FrameFillingColor?: string;
  get mod_FrameFillingColor(): string | undefined { return this.#mod_FrameFillingColor}
  set mod_FrameFillingColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrameFillingColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrameFillingColor === value) return;
    this.#mod_FrameFillingColor = value;
  }

  mod_FrameFillingColor_matrix?: IMatrix_mod_FrameFillingColor;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_BackwallPos', this.mod_BackwallPos);
  res.set('mod_CarcaseDepth', this.mod_CarcaseDepth);
  res.set('mod_CarcaseHeight', this.mod_CarcaseHeight);
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
  res.set('mod_FingergripTop', this.mod_FingergripTop);
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_FrontThk', this.mod_FrontThk);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_ShelffixedType', this.mod_ShelffixedType);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_FrontColor', this.mod_FrontColor);
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_FrontGapHor', this.mod_FrontGapHor);
  res.set('mod_FrontGapVert', this.mod_FrontGapVert);
  res.set('mod_FrontOversizeBtm', this.mod_FrontOversizeBtm);
  res.set('mod_FrontOversizeLeft', this.mod_FrontOversizeLeft);
  res.set('mod_FrontOversizeRight', this.mod_FrontOversizeRight);
  res.set('mod_FrontOversizeTop', this.mod_FrontOversizeTop);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_HandlestripPos', this.mod_HandlestripPos);
  res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
  res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
  res.set('mod_ShelffixedBtm', this.mod_ShelffixedBtm);
  res.set('mod_ShelffixedPos', this.mod_ShelffixedPos);
  res.set('mod_ShelffixedOffsetFront', this.mod_ShelffixedOffsetFront);
  res.set('mod_ShelffixedThk', this.mod_ShelffixedThk);
  res.set('mod_ShelffixedOversizeFront', this.mod_ShelffixedOversizeFront);
  res.set('mod_ShelffixedOversizeBack', this.mod_ShelffixedOversizeBack);
  res.set('mod_HandleDesign', this.mod_HandleDesign);
  res.set('mod_FrontDesign', this.mod_FrontDesign);
  res.set('mod_CarcaseBackwallConstruction', this.mod_CarcaseBackwallConstruction);
  res.set('mod_Originpos', JSON.stringify(this.mod_Originpos));
  res.set('mod_DrawerBoxWeightType', this.mod_DrawerBoxWeightType);
  res.set('mod_ParentName', this.mod_ParentName);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_FingergripBtmType', this.mod_FingergripBtmType);
  res.set('mod_FingergripTopType', this.mod_FingergripTopType);
  res.set('mod_DrawerBoxDesign', this.mod_DrawerBoxDesign);
  res.set('mod_ShelffixedTop', this.mod_ShelffixedTop);
  res.set('mod_VertDividerType', this.mod_VertDividerType);
  res.set('mod_SidepanelmiddleThk', this.mod_SidepanelmiddleThk);
  res.set('mod_CarcaseSpaceDimension', JSON.stringify(this.mod_CarcaseSpaceDimension));
  res.set('mod_PanelWoodFrameType', this.mod_PanelWoodFrameType);
  res.set('mod_FramePartsWidthHor', this.mod_FramePartsWidthHor);
  res.set('mod_FramePartsWidthVert', this.mod_FramePartsWidthVert);
  res.set('mod_PanelWoodFrameFillingType', this.mod_PanelWoodFrameFillingType);
  res.set('mod_FrontHeightSelection', this.mod_FrontHeightSelection);
  res.set('mod_FrameFillingWoodColor', this.mod_FrameFillingWoodColor);
  res.set('mod_FrontGlassColor', this.mod_FrontGlassColor);
  res.set('mod_FrameFillingColor', this.mod_FrameFillingColor);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
   const res = new Map<string, number | string | boolean | undefined>();
   res.set('mod_FrontColor', this.mod_FrontColor);
   res.set('mod_FrontProgram', this.mod_FrontProgram);
   res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
   res.set('mod_HandleDesign', this.mod_HandleDesign);
   return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_BackwallPos');
    const val = _toFloat(json['attributes']['mod_BackwallPos'], 'mod_BackwallPos');
    internal_leaveValidateVariant();
    this.mod_BackwallPos = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
    const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
    internal_leaveValidateVariant();
    this.mod_FrontThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedType');
    const val = _toString(json['attributes']['mod_ShelffixedType'], 'mod_ShelffixedType');
    internal_leaveValidateVariant();
    this.mod_ShelffixedType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontColor');
    const val = _toString(json['attributes']['mod_FrontColor'], 'mod_FrontColor');
    internal_leaveValidateVariant();
    this.mod_FrontColor = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandlestripPos');
    const val = _toString(json['attributes']['mod_HandlestripPos'], 'mod_HandlestripPos');
    internal_leaveValidateVariant();
    this.mod_HandlestripPos = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
    const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
    internal_leaveValidateVariant();
    this.mod_HeightPosInsertion = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
    const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedBtm');
    const val = _toBoolean(json['attributes']['mod_ShelffixedBtm'], 'mod_ShelffixedBtm');
    internal_leaveValidateVariant();
    this.mod_ShelffixedBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedPos');
    const val = _toString(json['attributes']['mod_ShelffixedPos'], 'mod_ShelffixedPos');
    internal_leaveValidateVariant();
    this.mod_ShelffixedPos = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedOffsetFront');
    const val = _toFloat(json['attributes']['mod_ShelffixedOffsetFront'], 'mod_ShelffixedOffsetFront');
    internal_leaveValidateVariant();
    this.mod_ShelffixedOffsetFront = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedThk');
    const val = _toFloat(json['attributes']['mod_ShelffixedThk'], 'mod_ShelffixedThk');
    internal_leaveValidateVariant();
    this.mod_ShelffixedThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedOversizeFront');
    const val = _toFloat(json['attributes']['mod_ShelffixedOversizeFront'], 'mod_ShelffixedOversizeFront');
    internal_leaveValidateVariant();
    this.mod_ShelffixedOversizeFront = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedOversizeBack');
    const val = _toFloat(json['attributes']['mod_ShelffixedOversizeBack'], 'mod_ShelffixedOversizeBack');
    internal_leaveValidateVariant();
    this.mod_ShelffixedOversizeBack = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
    const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
    internal_leaveValidateVariant();
    this.mod_HandleDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDesign');
    const val = _toString(json['attributes']['mod_FrontDesign'], 'mod_FrontDesign');
    internal_leaveValidateVariant();
    this.mod_FrontDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseBackwallConstruction');
    const val = _toString(json['attributes']['mod_CarcaseBackwallConstruction'], 'mod_CarcaseBackwallConstruction');
    internal_leaveValidateVariant();
    this.mod_CarcaseBackwallConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxWeightType');
    const val = _toString(json['attributes']['mod_DrawerBoxWeightType'], 'mod_DrawerBoxWeightType');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxWeightType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
    const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
    internal_leaveValidateVariant();
    this.mod_ParentName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripBtmType');
    const val = _toString(json['attributes']['mod_FingergripBtmType'], 'mod_FingergripBtmType');
    internal_leaveValidateVariant();
    this.mod_FingergripBtmType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FingergripTopType');
    const val = _toString(json['attributes']['mod_FingergripTopType'], 'mod_FingergripTopType');
    internal_leaveValidateVariant();
    this.mod_FingergripTopType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxDesign');
    const val = _toString(json['attributes']['mod_DrawerBoxDesign'], 'mod_DrawerBoxDesign');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelffixedTop');
    const val = _toBoolean(json['attributes']['mod_ShelffixedTop'], 'mod_ShelffixedTop');
    internal_leaveValidateVariant();
    this.mod_ShelffixedTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_VertDividerType');
    const val = _toString(json['attributes']['mod_VertDividerType'], 'mod_VertDividerType');
    internal_leaveValidateVariant();
    this.mod_VertDividerType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SidepanelmiddleThk');
    const val = _toFloat(json['attributes']['mod_SidepanelmiddleThk'], 'mod_SidepanelmiddleThk');
    internal_leaveValidateVariant();
    this.mod_SidepanelmiddleThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PanelWoodFrameType');
    const val = _toString(json['attributes']['mod_PanelWoodFrameType'], 'mod_PanelWoodFrameType');
    internal_leaveValidateVariant();
    this.mod_PanelWoodFrameType = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeightSelection');
    const val = _toFloat(json['attributes']['mod_FrontHeightSelection'], 'mod_FrontHeightSelection');
    internal_leaveValidateVariant();
    this.mod_FrontHeightSelection = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrameFillingWoodColor');
    const val = _toString(json['attributes']['mod_FrameFillingWoodColor'], 'mod_FrameFillingWoodColor');
    internal_leaveValidateVariant();
    this.mod_FrameFillingWoodColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGlassColor');
    const val = _toString(json['attributes']['mod_FrontGlassColor'], 'mod_FrontGlassColor');
    internal_leaveValidateVariant();
    this.mod_FrontGlassColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrameFillingColor');
    const val = _toString(json['attributes']['mod_FrameFillingColor'], 'mod_FrameFillingColor');
    internal_leaveValidateVariant();
    this.mod_FrameFillingColor = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes():void {
    if (this.#mod_CarcaseDepth !== undefined) {
      this.#mod_CarcaseDepth = undefined;
      logWarning('The attribute "mod_CarcaseDepth" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseHeight !== undefined) {
      this.#mod_CarcaseHeight = undefined;
      logWarning('The attribute "mod_CarcaseHeight" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseId !== undefined) {
      this.#mod_CarcaseId = undefined;
      logWarning('The attribute "mod_CarcaseId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_CarcaseWidth !== undefined) {
      this.#mod_CarcaseWidth = undefined;
      logWarning('The attribute "mod_CarcaseWidth" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontHeight !== undefined) {
      this.#mod_FrontHeight = undefined;
      logWarning('The attribute "mod_FrontHeight" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontId !== undefined) {
      this.#mod_FrontId = undefined;
      logWarning('The attribute "mod_FrontId" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontThk !== undefined) {
      this.#mod_FrontThk = undefined;
      logWarning('The attribute "mod_FrontThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ShelffixedThk !== undefined) {
      this.#mod_ShelffixedThk = undefined;
      logWarning('The attribute "mod_ShelffixedThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ParentName !== undefined) {
      this.#mod_ParentName = undefined;
      logWarning('The attribute "mod_ParentName" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_ModuleName !== undefined) {
      this.#mod_ModuleName = undefined;
      logWarning('The attribute "mod_ModuleName" was set in the order data but is marked as "fixed" - the value is ignored');
    }
    if (this.#mod_FingergripBtmType !== undefined) {
      this.#mod_FingergripBtmType = undefined;
      logWarning('The attribute "mod_FingergripBtmType" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FingergripTopType !== undefined) {
      this.#mod_FingergripTopType = undefined;
      logWarning('The attribute "mod_FingergripTopType" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_SidepanelmiddleThk !== undefined) {
      this.#mod_SidepanelmiddleThk = undefined;
      logWarning('The attribute "mod_SidepanelmiddleThk" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_FrontHeightSelection === undefined) {
      logWarning('The required attribute "mod_FrontHeightSelection" was not set in the order data');
    }
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
    if (this.mod_ShelffixedThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelffixedThk')) {
          let pv = <IModVar_mod_ShelffixedThk>s;
          if (pv.mod_ShelffixedThk !== undefined) {
            this.mod_ShelffixedThk = (<IModVar_mod_ShelffixedThk>s).mod_ShelffixedThk;
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
    if (this.mod_VertDividerType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_VertDividerType')) {
          let pv = <IModVar_mod_VertDividerType>s;
          if (pv.mod_VertDividerType !== undefined) {
            this.mod_VertDividerType = (<IModVar_mod_VertDividerType>s).mod_VertDividerType;
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
    if (this.mod_FrameFillingColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrameFillingColor')) {
          let pv = <IModVar_mod_FrameFillingColor>s;
          if (pv.mod_FrameFillingColor !== undefined) {
            this.mod_FrameFillingColor = (<IModVar_mod_FrameFillingColor>s).mod_FrameFillingColor;
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
    if (this.mod_CarcaseId === undefined) {
      this.mod_CarcaseId = "None";
    }
    if (this.mod_FingergripTop === undefined) {
      this.mod_FingergripTop = false;
    }
    if (this.mod_FrontHeight === undefined) {
      this.mod_FrontHeight = 320;
    }
    if (this.mod_FrontId === undefined) {
      this.mod_FrontId = "None";
    }
    if (this.mod_ShelffixedType === undefined) {
      this.mod_ShelffixedType = "ContactBw";
    }
    if (this.mod_FrontPosStart === undefined) {
      this.mod_FrontPosStart = 0;
    }
    if (this.mod_FrontOversizeBtm === undefined) {
      this.mod_FrontOversizeBtm = 0;
    }
    if (this.mod_FrontOversizeLeft === undefined) {
      this.mod_FrontOversizeLeft = 0;
    }
    if (this.mod_FrontOversizeRight === undefined) {
      this.mod_FrontOversizeRight = 0;
    }
    if (this.mod_FrontOversizeTop === undefined) {
      this.mod_FrontOversizeTop = 0;
    }
    if (this.mod_HandlestripPos === undefined) {
      this.mod_HandlestripPos = "4";
    }
    if (this.mod_ShelffixedBtm === undefined) {
      this.mod_ShelffixedBtm = false;
    }
    if (this.mod_ShelffixedPos === undefined) {
      this.mod_ShelffixedPos = "GapMiddle";
    }
    if (this.mod_ShelffixedOffsetFront === undefined) {
      this.mod_ShelffixedOffsetFront = 0;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mf_Drawer";
    }
    if (this.mod_FingergripBtmType === undefined) {
      this.mod_FingergripBtmType = "NoFingergrip";
    }
    if (this.mod_FingergripTopType === undefined) {
      this.mod_FingergripTopType = "NoFingergrip";
    }
    if (this.mod_ShelffixedTop === undefined) {
      this.mod_ShelffixedTop = false;
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_FrontThk === undefined) {
      this.mod_FrontThk = this.g.basic_FrontThk;
    }
    if (this.mod_FrontWidth === undefined) {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
      // CUSTOMSCRIPT_mf_Fixedfront_mod_FrontWidth_SETDEFAULT
      this.mod_FrontWidth = this.parent.mod_Width!;
// ###############################################################
// ################### END CUSTOM SCRIPTS ########################
// ###############################################################
    }
    if (this.mod_ShelffixedOversizeFront === undefined) {
      this.mod_ShelffixedOversizeFront = this.g.basic_ShelffixedOversizeFront;
    }
    if (this.mod_ShelffixedOversizeBack === undefined) {
      this.mod_ShelffixedOversizeBack = this.g.basic_ShelffixedOversizeBack;
    }
    if (this.mod_DrawerBoxWeightType === undefined) {
      this.mod_DrawerBoxWeightType = this.g.basic_DrawerBoxWeightType;
    }
    if (this.mod_DrawerBoxDesign === undefined) {
      this.mod_DrawerBoxDesign = this.g.basic_DrawerBoxDesign;
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
  #manufacturerDataCompletionInternal = mf_Fixedfront_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mf_Fixedfront_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mf_Fixedfront{
    this.afterDataCompletion();
    const adc = new OD_M_mf_Fixedfront_NonNull(this);
    return adc;
  }

  addOD_M_mc_Fixedfront01(index?: number): dc_mc_Fixedfront01 {
    var m = new OD_M_mc_Fixedfront01(this);
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
    this.mod_BackwallPos_matrix = VariantValidation.mod_BackwallPos(this, this);
    this.mod_CarcaseDepth_matrix = VariantValidation.mod_CarcaseDepth(this, this);
    this.mod_CarcaseHeight_matrix = VariantValidation.mod_CarcaseHeight(this, this);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this);
    this.mod_FingergripTop_matrix = VariantValidation.mod_FingergripTop(this, this);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_ShelffixedType_matrix = VariantValidation.mod_ShelffixedType(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_FrontColor_matrix = VariantValidation.mod_FrontColor(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_FrontGapHor_matrix = VariantValidation.mod_FrontGapHor(this, this);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this);
    this.mod_FrontOversizeBtm_matrix = VariantValidation.mod_FrontOversizeBtm(this, this);
    this.mod_FrontOversizeLeft_matrix = VariantValidation.mod_FrontOversizeLeft(this, this);
    this.mod_FrontOversizeRight_matrix = VariantValidation.mod_FrontOversizeRight(this, this);
    this.mod_FrontOversizeTop_matrix = VariantValidation.mod_FrontOversizeTop(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_HandlestripPos_matrix = VariantValidation.mod_HandlestripPos(this, this);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this);
    this.mod_ShelffixedBtm_matrix = VariantValidation.mod_ShelffixedBtm(this, this);
    this.mod_ShelffixedPos_matrix = VariantValidation.mod_ShelffixedPos(this, this);
    this.mod_ShelffixedOffsetFront_matrix = VariantValidation.mod_ShelffixedOffsetFront(this, this);
    this.mod_ShelffixedThk_matrix = VariantValidation.mod_ShelffixedThk(this, this);
    this.mod_ShelffixedOversizeFront_matrix = VariantValidation.mod_ShelffixedOversizeFront(this, this);
    this.mod_ShelffixedOversizeBack_matrix = VariantValidation.mod_ShelffixedOversizeBack(this, this);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this);
    this.mod_CarcaseBackwallConstruction_matrix = VariantValidation.mod_CarcaseBackwallConstruction(this, this);
    this.mod_DrawerBoxWeightType_matrix = VariantValidation.mod_DrawerBoxWeightType(this, this);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_FingergripBtmType_matrix = VariantValidation.mod_FingergripBtmType(this, this);
    this.mod_FingergripTopType_matrix = VariantValidation.mod_FingergripTopType(this, this);
    this.mod_DrawerBoxDesign_matrix = VariantValidation.mod_DrawerBoxDesign(this, this);
    this.mod_ShelffixedTop_matrix = VariantValidation.mod_ShelffixedTop(this, this);
    this.mod_VertDividerType_matrix = VariantValidation.mod_VertDividerType(this, this);
    this.mod_SidepanelmiddleThk_matrix = VariantValidation.mod_SidepanelmiddleThk(this, this);
    this.mod_PanelWoodFrameType_matrix = VariantValidation.mod_PanelWoodFrameType(this, this);
    this.mod_FramePartsWidthHor_matrix = VariantValidation.mod_FramePartsWidthHor(this, this);
    this.mod_FramePartsWidthVert_matrix = VariantValidation.mod_FramePartsWidthVert(this, this);
    this.mod_PanelWoodFrameFillingType_matrix = VariantValidation.mod_PanelWoodFrameFillingType(this, this);
    this.mod_FrontHeightSelection_matrix = VariantValidation.mod_FrontHeightSelection(this, this);
    this.mod_FrameFillingWoodColor_matrix = VariantValidation.mod_FrameFillingWoodColor(this, this);
    this.mod_FrontGlassColor_matrix = VariantValidation.mod_FrontGlassColor(this, this);
    this.mod_FrameFillingColor_matrix = VariantValidation.mod_FrameFillingColor(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mf_Fixedfront_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mf_Fixedfront_NonNull implements cbp_mf_Fixedfront, adc_mf_Fixedfront ,IPartParentsNonNull_mf_Fixedfront {
  constructor(parent: OD_M_mf_Fixedfront) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mf_Fixedfront;

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
  #createBuildPlanInternal = mf_Fixedfront_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mf_Fixedfront_afterDataCompletion;
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
  parent: IModParents_mr_StorageunitSingle;
  get mod_BackwallPos(): number  {
    return this.#internalParent.mod_BackwallPos!;
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
  get mod_FingergripTop(): boolean  {
    return this.#internalParent.mod_FingergripTop!;
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontThk(): number  {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_ShelffixedType(): string  {
    return this.#internalParent.mod_ShelffixedType!;
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
  get mod_HandlestripPos(): string  {
    return this.#internalParent.mod_HandlestripPos!;
  }
  get mod_HeightPosInsertion(): number  {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  get mod_PlinthAreaHeight(): number  {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_ShelffixedBtm(): boolean  {
    return this.#internalParent.mod_ShelffixedBtm!;
  }
  get mod_ShelffixedPos(): string  {
    return this.#internalParent.mod_ShelffixedPos!;
  }
  get mod_ShelffixedOffsetFront(): number  {
    return this.#internalParent.mod_ShelffixedOffsetFront!;
  }
  get mod_ShelffixedThk(): number  {
    return this.#internalParent.mod_ShelffixedThk!;
  }
  get mod_ShelffixedOversizeFront(): number  {
    return this.#internalParent.mod_ShelffixedOversizeFront!;
  }
  get mod_ShelffixedOversizeBack(): number  {
    return this.#internalParent.mod_ShelffixedOversizeBack!;
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
  get mod_CarcaseBackwallConstruction(): string  {
    return this.#internalParent.mod_CarcaseBackwallConstruction!;
  }
  get mod_Originpos(): number [] {
    return this.#internalParent.mod_Originpos!;
  }
  get mod_DrawerBoxWeightType(): string  {
    return this.#internalParent.mod_DrawerBoxWeightType!;
  }
  get mod_ParentName(): string  {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_FingergripBtmType(): string  {
    return this.#internalParent.mod_FingergripBtmType!;
  }
  get mod_FingergripTopType(): string  {
    return this.#internalParent.mod_FingergripTopType!;
  }
  get mod_DrawerBoxDesign(): string  {
    return this.#internalParent.mod_DrawerBoxDesign!;
  }
  get mod_DrawerBoxDesign_matrix(): IMatrix_mod_DrawerBoxDesign {
    return this.#internalParent.mod_DrawerBoxDesign_matrix!;
  }
  get mod_ShelffixedTop(): boolean  {
    return this.#internalParent.mod_ShelffixedTop!;
  }
  get mod_VertDividerType(): string  {
    return this.#internalParent.mod_VertDividerType!;
  }
  get mod_VertDividerType_matrix(): IMatrix_mod_VertDividerType {
    return this.#internalParent.mod_VertDividerType_matrix!;
  }
  get mod_SidepanelmiddleThk(): number  {
    return this.#internalParent.mod_SidepanelmiddleThk!;
  }
  get mod_CarcaseSpaceDimension(): string [] {
    return this.#internalParent.mod_CarcaseSpaceDimension!;
  }
  get mod_PanelWoodFrameType(): string  {
    return this.#internalParent.mod_PanelWoodFrameType!;
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
  get mod_FrontHeightSelection(): number  {
    return this.#internalParent.mod_FrontHeightSelection!;
  }
  get mod_FrameFillingWoodColor(): string  {
    return this.#internalParent.mod_FrameFillingWoodColor!;
  }
  get mod_FrontGlassColor(): string  {
    return this.#internalParent.mod_FrontGlassColor!;
  }
  get mod_FrameFillingColor(): string  {
    return this.#internalParent.mod_FrameFillingColor!;
  }
  get mod_FrameFillingColor_matrix(): IMatrix_mod_FrameFillingColor {
    return this.#internalParent.mod_FrameFillingColor_matrix!;
  }
  addOD_M_mc_Fixedfront01(index?: number): dc_mc_Fixedfront01 {
    return this.#internalParent.addOD_M_mc_Fixedfront01(index);
  }
}

