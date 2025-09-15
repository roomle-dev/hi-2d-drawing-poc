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
import { IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01 } from '../mod-interfaces'
import { IP_part_Handlestrip_PartVarsWritable, P_part_Handlestrip } from '../parts/part_Handlestrip'
import { IP_part_HandlestripDrill_PartVarsWritable, P_part_HandlestripDrill } from '../parts/part_HandlestripDrill'
import { IModuleNonNull_mc_Handlestrip01,IModParents_mc_Handlestrip01,IPartParentsNonNull_mc_Handlestrip01} from '../mod-interfaces'
import {IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_DoorDirection,IModVarNonNull_mod_DoorDirection,IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_FrontType,IModVarNonNull_mod_FrontType,IModVar_mod_HandleDrill,IModVarNonNull_mod_HandleDrill,IModVar_mod_HandleLine,IModVarNonNull_mod_HandleLine,IModVar_mod_HandlePosLogic,IModVarNonNull_mod_HandlePosLogic,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_HandleColor,IModVarNonNull_mod_HandleColor,IModVar_mod_HandleLength,IModVarNonNull_mod_HandleLength,IModVar_mod_HandleOffsetX,IModVarNonNull_mod_HandleOffsetX,IModVar_mod_HandleOffsetY,IModVarNonNull_mod_HandleOffsetY,IModVar_mod_HandlePosMatrix,IModVarNonNull_mod_HandlePosMatrix,IModVar_mod_HandlePosType,IModVarNonNull_mod_HandlePosType,IModVar_mod_HeightPosInsertion,IModVarNonNull_mod_HeightPosInsertion,IModVar_mod_PlinthAreaHeight,IModVarNonNull_mod_PlinthAreaHeight,IModVar_mod_PartInfo,IModVarNonNull_mod_PartInfo,IModVar_mod_HandleDesign,IModVarNonNull_mod_HandleDesign,IModVar_mod_CarcaseWidth,IModVarNonNull_mod_CarcaseWidth,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_Information,IModVarNonNull_mod_Information,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_FrontGapVert,IModVarNonNull_mod_FrontGapVert,IModVar_mod_ProcessingId,IModVarNonNull_mod_ProcessingId,IModVar_mod_ProcessingLibrary,IModVarNonNull_mod_ProcessingLibrary,IModVar_mod_Rotation,IModVarNonNull_mod_Rotation,IModVar_mod_HardwareId,IModVarNonNull_mod_HardwareId,IModVar_mod_Model3DGroupName,IModVarNonNull_mod_Model3DGroupName,IModVar_mod_FrontThk,IModVarNonNull_mod_FrontThk} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_Depth, IMatrix_mod_DoorDirection, IMatrix_mod_FrontHeight, IMatrix_mod_FrontId, IMatrix_mod_FrontType, IMatrix_mod_HandleDrill, IMatrix_mod_HandleLine, IMatrix_mod_HandlePosLogic, IMatrix_mod_Height, IMatrix_mod_FrontPosStart, IMatrix_mod_Width, IMatrix_mod_FrontProgram, IMatrix_mod_HandleColor, IMatrix_mod_HandleLength, IMatrix_mod_HandleOffsetX, IMatrix_mod_HandleOffsetY, IMatrix_mod_HandlePosMatrix, IMatrix_mod_HandlePosType, IMatrix_mod_HeightPosInsertion, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_PartInfo, IMatrix_mod_HandleDesign, IMatrix_mod_CarcaseWidth, IMatrix_mod_ModuleName, IMatrix_mod_Information, IMatrix_mod_FrontWidth, IMatrix_mod_FrontGapVert, IMatrix_mod_ProcessingId, IMatrix_mod_ProcessingLibrary, IMatrix_mod_Rotation, IMatrix_mod_HardwareId, IMatrix_mod_Model3DGroupName, IMatrix_mod_FrontThk} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_Handlestrip, IPartAdd_part_HandlestripDrill } from '../part-add-interfaces';
import { mc_Handlestrip01_createBuildPlan, mc_Handlestrip01_afterDataCompletion, mc_Handlestrip01_manufacturerDataCompletion } from '../../modules/mc_Handlestrip01';

export interface cbp_mc_Handlestrip01 extends IModBaseProp
, IPartAdd_part_Handlestrip, IPartAdd_part_HandlestripDrill, IModVarNonNull_mod_Depth, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontType, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_Height, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_Width, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetY, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PartInfo, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_Information, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_ProcessingId, IModVarNonNull_mod_ProcessingLibrary, IModVarNonNull_mod_Rotation, IModVarNonNull_mod_HardwareId, IModVarNonNull_mod_Model3DGroupName, IModVarNonNull_mod_FrontThk {
  parent: IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
  ct_tab_HandleSettings: ct2_tab_HandleSettings;
  ct_tab_HandleConstruction: ct2_tab_HandleConstruction;
}

export interface dc_mc_Handlestrip01 extends IModBaseProp
, IModVar_mod_Depth, IModVar_mod_DoorDirection, IModVar_mod_FrontHeight, IModVar_mod_FrontId, IModVar_mod_FrontType, IModVar_mod_HandleDrill, IModVar_mod_HandleLine, IModVar_mod_HandlePosLogic, IModVar_mod_Height, IModVar_mod_FrontPosStart, IModVar_mod_Width, IModVar_mod_FrontProgram, IModVar_mod_HandleColor, IModVar_mod_HandleLength, IModVar_mod_HandleOffsetX, IModVar_mod_HandleOffsetY, IModVar_mod_HandlePosMatrix, IModVar_mod_HandlePosType, IModVar_mod_HeightPosInsertion, IModVar_mod_PlinthAreaHeight, IModVar_mod_PartInfo, IModVar_mod_HandleDesign, IModVar_mod_CarcaseWidth, IModVar_mod_ModuleName, IModVar_mod_Information, IModVar_mod_FrontWidth, IModVar_mod_FrontGapVert, IModVar_mod_ProcessingId, IModVar_mod_ProcessingLibrary, IModVar_mod_Rotation, IModVar_mod_HardwareId, IModVar_mod_Model3DGroupName, IModVar_mod_FrontThk {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_Handlestrip01;
  parent: IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01;
}

export interface adc_mc_Handlestrip01 extends IModBaseProp
, IModVarNonNull_mod_Depth, IModVarNonNull_mod_DoorDirection, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontType, IModVarNonNull_mod_HandleDrill, IModVarNonNull_mod_HandleLine, IModVarNonNull_mod_HandlePosLogic, IModVarNonNull_mod_Height, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_Width, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_HandleColor, IModVarNonNull_mod_HandleLength, IModVarNonNull_mod_HandleOffsetX, IModVarNonNull_mod_HandleOffsetY, IModVarNonNull_mod_HandlePosMatrix, IModVarNonNull_mod_HandlePosType, IModVarNonNull_mod_HeightPosInsertion, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_PartInfo, IModVarNonNull_mod_HandleDesign, IModVarNonNull_mod_CarcaseWidth, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_Information, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_FrontGapVert, IModVarNonNull_mod_ProcessingId, IModVarNonNull_mod_ProcessingLibrary, IModVarNonNull_mod_Rotation, IModVarNonNull_mod_HardwareId, IModVarNonNull_mod_Model3DGroupName, IModVarNonNull_mod_FrontThk {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  ct_tab_HandleSettings: ct2_tab_HandleSettings;
  ct_tab_HandleConstruction: ct2_tab_HandleConstruction;
}

export class OD_M_mc_Handlestrip01 extends OD_Base  implements dc_mc_Handlestrip01
,IModParents_mc_Handlestrip01
,IModVar_mod_Depth,IModVar_mod_DoorDirection,IModVar_mod_FrontHeight,IModVar_mod_FrontId,IModVar_mod_FrontType,IModVar_mod_HandleDrill,IModVar_mod_HandleLine,IModVar_mod_HandlePosLogic,IModVar_mod_Height,IModVar_mod_FrontPosStart,IModVar_mod_Width,IModVar_mod_FrontProgram,IModVar_mod_HandleColor,IModVar_mod_HandleLength,IModVar_mod_HandleOffsetX,IModVar_mod_HandleOffsetY,IModVar_mod_HandlePosMatrix,IModVar_mod_HandlePosType,IModVar_mod_HeightPosInsertion,IModVar_mod_PlinthAreaHeight,IModVar_mod_PartInfo,IModVar_mod_HandleDesign,IModVar_mod_CarcaseWidth,IModVar_mod_ModuleName,IModVar_mod_Information,IModVar_mod_FrontWidth,IModVar_mod_FrontGapVert,IModVar_mod_ProcessingId,IModVar_mod_ProcessingLibrary,IModVar_mod_Rotation,IModVar_mod_HardwareId,IModVar_mod_Model3DGroupName,IModVar_mod_FrontThk
 {
  constructor(parent: IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01, manufacturerMode?:boolean) {
    super('mc_Handlestrip01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_Handlestrip01_NonNull(this);
  }
  parent: IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01;
  _selfNonNull: OD_M_mc_Handlestrip01_NonNull;

  override variants:string[] = ['mod_Depth','mod_DoorDirection','mod_FrontHeight','mod_FrontId','mod_FrontType','mod_HandleDrill','mod_HandleLine','mod_HandlePosLogic','mod_Height','mod_FrontPosStart','mod_Width','mod_FrontProgram','mod_HandleColor','mod_HandleLength','mod_HandleOffsetX','mod_HandleOffsetY','mod_HandlePosMatrix','mod_HandlePosType','mod_HeightPosInsertion','mod_PlinthAreaHeight','mod_PartInfo','mod_HandleDesign','mod_CarcaseWidth','mod_ModuleName','mod_Information','mod_FrontWidth','mod_FrontGapVert','mod_ProcessingId','mod_ProcessingLibrary','mod_Rotation','mod_HardwareId','mod_Model3DGroupName','mod_FrontThk',];
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
  #mod_FrontType?: string;
  get mod_FrontType(): string | undefined { return this.#mod_FrontType}
  set mod_FrontType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontType === value) return;
    this.#mod_FrontType = value;
  }

  mod_FrontType_matrix?: IMatrix_mod_FrontType;
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
  #mod_PartInfo?: string;
  get mod_PartInfo(): string | undefined { return this.#mod_PartInfo}
  set mod_PartInfo(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PartInfo' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PartInfo === value) return;
    this.#mod_PartInfo = value;
  }

  mod_PartInfo_matrix?: IMatrix_mod_PartInfo;
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
  #mod_Information?: string;
  get mod_Information(): string | undefined { return this.#mod_Information}
  set mod_Information(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Information' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Information === value) return;
    this.#mod_Information = value;
  }

  mod_Information_matrix?: IMatrix_mod_Information;
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
  #mod_ProcessingId?: string;
  get mod_ProcessingId(): string | undefined { return this.#mod_ProcessingId}
  set mod_ProcessingId(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ProcessingId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ProcessingId === value) return;
    this.#mod_ProcessingId = value;
  }

  mod_ProcessingId_matrix?: IMatrix_mod_ProcessingId;
  #mod_ProcessingLibrary?: string;
  get mod_ProcessingLibrary(): string | undefined { return this.#mod_ProcessingLibrary}
  set mod_ProcessingLibrary(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ProcessingLibrary' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ProcessingLibrary === value) return;
    this.#mod_ProcessingLibrary = value;
  }

  mod_ProcessingLibrary_matrix?: IMatrix_mod_ProcessingLibrary;
  #mod_Rotation?: number;
  get mod_Rotation(): number | undefined { return this.#mod_Rotation}
  set mod_Rotation(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Rotation' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Rotation === value) return;
    this.#mod_Rotation = value;
  }

  mod_Rotation_matrix?: IMatrix_mod_Rotation;
  #mod_HardwareId?: string;
  get mod_HardwareId(): string | undefined { return this.#mod_HardwareId}
  set mod_HardwareId(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_HardwareId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_HardwareId === value) return;
    this.#mod_HardwareId = value;
  }

  mod_HardwareId_matrix?: IMatrix_mod_HardwareId;
  #mod_Model3DGroupName?: string;
  get mod_Model3DGroupName(): string | undefined { return this.#mod_Model3DGroupName}
  set mod_Model3DGroupName(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Model3DGroupName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Model3DGroupName === value) return;
    this.#mod_Model3DGroupName = value;
  }

  mod_Model3DGroupName_matrix?: IMatrix_mod_Model3DGroupName;
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
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_DoorDirection', this.mod_DoorDirection);
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_FrontType', this.mod_FrontType);
  res.set('mod_HandleDrill', this.mod_HandleDrill);
  res.set('mod_HandleLine', this.mod_HandleLine);
  res.set('mod_HandlePosLogic', this.mod_HandlePosLogic);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_HandleColor', this.mod_HandleColor);
  res.set('mod_HandleLength', this.mod_HandleLength);
  res.set('mod_HandleOffsetX', this.mod_HandleOffsetX);
  res.set('mod_HandleOffsetY', this.mod_HandleOffsetY);
  res.set('mod_HandlePosMatrix', this.mod_HandlePosMatrix);
  res.set('mod_HandlePosType', this.mod_HandlePosType);
  res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
  res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
  res.set('mod_PartInfo', this.mod_PartInfo);
  res.set('mod_HandleDesign', this.mod_HandleDesign);
  res.set('mod_CarcaseWidth', this.mod_CarcaseWidth);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_Information', this.mod_Information);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_FrontGapVert', this.mod_FrontGapVert);
  res.set('mod_ProcessingId', this.mod_ProcessingId);
  res.set('mod_ProcessingLibrary', this.mod_ProcessingLibrary);
  res.set('mod_Rotation', this.mod_Rotation);
  res.set('mod_HardwareId', this.mod_HardwareId);
  res.set('mod_Model3DGroupName', this.mod_Model3DGroupName);
  res.set('mod_FrontThk', this.mod_FrontThk);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DoorDirection');
    const val = _toString(json['attributes']['mod_DoorDirection'], 'mod_DoorDirection');
    internal_leaveValidateVariant();
    this.mod_DoorDirection = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
    const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
    internal_leaveValidateVariant();
    this.mod_FrontHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
    const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
    internal_leaveValidateVariant();
    this.mod_FrontId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontType');
    const val = _toString(json['attributes']['mod_FrontType'], 'mod_FrontType');
    internal_leaveValidateVariant();
    this.mod_FrontType = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
    const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
    internal_leaveValidateVariant();
    this.mod_HeightPosInsertion = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
    const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PartInfo');
    const val = _toString(json['attributes']['mod_PartInfo'], 'mod_PartInfo');
    internal_leaveValidateVariant();
    this.mod_PartInfo = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HandleDesign');
    const val = _toString(json['attributes']['mod_HandleDesign'], 'mod_HandleDesign');
    internal_leaveValidateVariant();
    this.mod_HandleDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseWidth');
    const val = _toFloat(json['attributes']['mod_CarcaseWidth'], 'mod_CarcaseWidth');
    internal_leaveValidateVariant();
    this.mod_CarcaseWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Information');
    const val = _toString(json['attributes']['mod_Information'], 'mod_Information');
    internal_leaveValidateVariant();
    this.mod_Information = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapVert');
    const val = _toFloat(json['attributes']['mod_FrontGapVert'], 'mod_FrontGapVert');
    internal_leaveValidateVariant();
    this.mod_FrontGapVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ProcessingId');
    const val = _toString(json['attributes']['mod_ProcessingId'], 'mod_ProcessingId');
    internal_leaveValidateVariant();
    this.mod_ProcessingId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ProcessingLibrary');
    const val = _toString(json['attributes']['mod_ProcessingLibrary'], 'mod_ProcessingLibrary');
    internal_leaveValidateVariant();
    this.mod_ProcessingLibrary = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Rotation');
    const val = _toFloat(json['attributes']['mod_Rotation'], 'mod_Rotation');
    internal_leaveValidateVariant();
    this.mod_Rotation = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareId');
    const val = _toString(json['attributes']['mod_HardwareId'], 'mod_HardwareId');
    internal_leaveValidateVariant();
    this.mod_HardwareId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Model3DGroupName');
    const val = _toString(json['attributes']['mod_Model3DGroupName'], 'mod_Model3DGroupName');
    internal_leaveValidateVariant();
    this.mod_Model3DGroupName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
    const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
    internal_leaveValidateVariant();
    this.mod_FrontThk = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
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
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_Depth === undefined) {
      this.mod_Depth = 500;
    }
    if (this.mod_FrontType === undefined) {
      this.mod_FrontType = "";
    }
    if (this.mod_Height === undefined) {
      this.mod_Height = 720;
    }
    if (this.mod_Width === undefined) {
      this.mod_Width = 600;
    }
    if (this.mod_PartInfo === undefined) {
      this.mod_PartInfo = "part_DoorLeft";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_Handlestrip01";
    }
    if (this.mod_Information === undefined) {
      this.mod_Information = "None";
    }
    if (this.mod_ProcessingId === undefined) {
      this.mod_ProcessingId = "None";
    }
    if (this.mod_ProcessingLibrary === undefined) {
      this.mod_ProcessingLibrary = "None";
    }
    if (this.mod_Rotation === undefined) {
      this.mod_Rotation = 0;
    }
    if (this.mod_HardwareId === undefined) {
      this.mod_HardwareId = "None";
    }
    if (this.mod_Model3DGroupName === undefined) {
      this.mod_Model3DGroupName = "None";
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
  #manufacturerDataCompletionInternal = mc_Handlestrip01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_Handlestrip01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_Handlestrip01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_Handlestrip01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_DoorDirection_matrix = VariantValidation.mod_DoorDirection(this, this);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_FrontType_matrix = VariantValidation.mod_FrontType(this, this);
    this.mod_HandleDrill_matrix = VariantValidation.mod_HandleDrill(this, this);
    this.mod_HandleLine_matrix = VariantValidation.mod_HandleLine(this, this);
    this.mod_HandlePosLogic_matrix = VariantValidation.mod_HandlePosLogic(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_HandleColor_matrix = VariantValidation.mod_HandleColor(this, this);
    this.mod_HandleLength_matrix = VariantValidation.mod_HandleLength(this, this);
    this.mod_HandleOffsetX_matrix = VariantValidation.mod_HandleOffsetX(this, this);
    this.mod_HandleOffsetY_matrix = VariantValidation.mod_HandleOffsetY(this, this);
    this.mod_HandlePosMatrix_matrix = VariantValidation.mod_HandlePosMatrix(this, this);
    this.mod_HandlePosType_matrix = VariantValidation.mod_HandlePosType(this, this);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this);
    this.mod_PartInfo_matrix = VariantValidation.mod_PartInfo(this, this);
    this.mod_HandleDesign_matrix = VariantValidation.mod_HandleDesign(this, this);
    this.mod_CarcaseWidth_matrix = VariantValidation.mod_CarcaseWidth(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_Information_matrix = VariantValidation.mod_Information(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_FrontGapVert_matrix = VariantValidation.mod_FrontGapVert(this, this);
    this.mod_ProcessingId_matrix = VariantValidation.mod_ProcessingId(this, this);
    this.mod_ProcessingLibrary_matrix = VariantValidation.mod_ProcessingLibrary(this, this);
    this.mod_Rotation_matrix = VariantValidation.mod_Rotation(this, this);
    this.mod_HardwareId_matrix = VariantValidation.mod_HardwareId(this, this);
    this.mod_Model3DGroupName_matrix = VariantValidation.mod_Model3DGroupName(this, this);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this);
  }
  addpart_Handlestrip(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Handlestrip_PartVarsWritable {
    var c = new P_part_Handlestrip(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_HandlestripDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HandlestripDrill_PartVarsWritable {
    var c = new P_part_HandlestripDrill(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_Handlestrip01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_Handlestrip01_NonNull implements cbp_mc_Handlestrip01, adc_mc_Handlestrip01 ,IPartParentsNonNull_mc_Handlestrip01 {
  constructor(parent: OD_M_mc_Handlestrip01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_Handlestrip01;

  get _id():string { return this.#internalParent._id; }
  get modId():string { return this.#internalParent.modId; }
  getOrigin():Matrix4 {
    return this.#internalParent.getOrigin();
  }
  getOriginPos():Vector3 {
    return this.#internalParent.getOriginPos();
  }
  ct_tab_HandleSettings : ct2_tab_HandleSettings = new ct2_tab_HandleSettings();
  ct_tab_HandleConstruction : ct2_tab_HandleConstruction = new ct2_tab_HandleConstruction();
  createBuildPlan():void {
    this.#createBuildPlanInternal();
  }
  #createBuildPlanInternal = mc_Handlestrip01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_Handlestrip01_afterDataCompletion;
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
  parent: IModParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01;
  addpart_Handlestrip(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Handlestrip_PartVarsWritable {
    return this.#internalParent.addpart_Handlestrip(x, y, z, dimx, dimy, dimz);
  }
  addpart_HandlestripDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HandlestripDrill_PartVarsWritable {
    return this.#internalParent.addpart_HandlestripDrill(x, y, z, dimx, dimy, dimz);
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_DoorDirection(): string  {
    return this.#internalParent.mod_DoorDirection!;
  }
  get mod_DoorDirection_matrix(): IMatrix_mod_DoorDirection {
    return this.#internalParent.mod_DoorDirection_matrix!;
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontType(): string  {
    return this.#internalParent.mod_FrontType!;
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
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_FrontPosStart(): number  {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_FrontProgram(): string  {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
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
  get mod_HeightPosInsertion(): number  {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  get mod_PlinthAreaHeight(): number  {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_PartInfo(): string  {
    return this.#internalParent.mod_PartInfo!;
  }
  get mod_HandleDesign(): string  {
    return this.#internalParent.mod_HandleDesign!;
  }
  get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign {
    return this.#internalParent.mod_HandleDesign_matrix!;
  }
  get mod_CarcaseWidth(): number  {
    return this.#internalParent.mod_CarcaseWidth!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_Information(): string  {
    return this.#internalParent.mod_Information!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_FrontGapVert(): number  {
    return this.#internalParent.mod_FrontGapVert!;
  }
  get mod_ProcessingId(): string  {
    return this.#internalParent.mod_ProcessingId!;
  }
  get mod_ProcessingLibrary(): string  {
    return this.#internalParent.mod_ProcessingLibrary!;
  }
  get mod_Rotation(): number  {
    return this.#internalParent.mod_Rotation!;
  }
  get mod_HardwareId(): string  {
    return this.#internalParent.mod_HardwareId!;
  }
  get mod_Model3DGroupName(): string  {
    return this.#internalParent.mod_Model3DGroupName!;
  }
  get mod_FrontThk(): number  {
    return this.#internalParent.mod_FrontThk!;
  }
}

