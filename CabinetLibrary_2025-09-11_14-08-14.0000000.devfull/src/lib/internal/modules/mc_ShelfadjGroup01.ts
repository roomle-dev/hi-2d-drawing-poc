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
import { IModParents_mf_Door_mf_Fliplift_mf_RackArea } from '../mod-interfaces'
import { IP_part_ShelfadjFitting_PartVarsWritable, P_part_ShelfadjFitting } from '../parts/part_ShelfadjFitting'
import { OD_M_mc_ShelfadjWood01, dc_mc_ShelfadjWood01 } from './mc_ShelfadjWood01'
import { OD_M_mc_ShelfadjGlass01, dc_mc_ShelfadjGlass01 } from './mc_ShelfadjGlass01'
import { OD_M_mc_ShelfadjDrill01, dc_mc_ShelfadjDrill01 } from './mc_ShelfadjDrill01'
import { OD_M_mc_ShelfadjFitting01, dc_mc_ShelfadjFitting01 } from './mc_ShelfadjFitting01'
import { IModuleNonNull_mc_ShelfadjGroup01,IModParents_mc_ShelfadjFitting01_mc_ShelfadjGroup01,IModParents_mc_ShelfadjGroup01,IPartParentsNonNull_mc_ShelfadjFitting01_mc_ShelfadjGroup01,IPartParentsNonNull_mc_ShelfadjGroup01} from '../mod-interfaces'
import {IModVar_mod_ShelfadjDesign,IModVarNonNull_mod_ShelfadjDesign,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_CarcaseColor,IModVarNonNull_mod_CarcaseColor,IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseProgram,IModVarNonNull_mod_CarcaseProgram,IModVar_mod_FrontDesign,IModVarNonNull_mod_FrontDesign,IModVar_mod_ShelfadjOffsetFront,IModVarNonNull_mod_ShelfadjOffsetFront,IModVar_mod_ShelfadjOffsetBack,IModVarNonNull_mod_ShelfadjOffsetBack,IModVar_mod_ShelfadjDrillType,IModVarNonNull_mod_ShelfadjDrillType,IModVar_mod_ShelfadjDrillDistance,IModVarNonNull_mod_ShelfadjDrillDistance,IModVar_mod_ShelfadjThk,IModVarNonNull_mod_ShelfadjThk,IModVar_mod_ShelfadjDrillinglineOffsetTop,IModVarNonNull_mod_ShelfadjDrillinglineOffsetTop,IModVar_mod_ShelfadjDrillinglineOffsetBtm,IModVarNonNull_mod_ShelfadjDrillinglineOffsetBtm,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_ShelfadjPartParentName,IModVarNonNull_mod_ShelfadjPartParentName,IModVar_mod_ShelfadjPartParentType,IModVarNonNull_mod_ShelfadjPartParentType,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_HardwareId,IModVarNonNull_mod_HardwareId,IModVar_mod_CarcaseSpaceDimension,IModVarNonNull_mod_CarcaseSpaceDimension,IModVar_mod_VertDividerType,IModVarNonNull_mod_VertDividerType,IModVar_mod_VertDividerPosition,IModVarNonNull_mod_VertDividerPosition,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic,IModVar_mod_ShelfadjColor,IModVarNonNull_mod_ShelfadjColor,IModVar_mod_ShelfadjDescriptor,IModVarNonNull_mod_ShelfadjDescriptor} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_ShelfadjDesign, IMatrix_mod_Height, IMatrix_mod_Depth, IMatrix_mod_Width, IMatrix_mod_TypeElement, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseProgram, IMatrix_mod_FrontDesign, IMatrix_mod_ShelfadjOffsetFront, IMatrix_mod_ShelfadjOffsetBack, IMatrix_mod_ShelfadjDrillType, IMatrix_mod_ShelfadjDrillDistance, IMatrix_mod_ShelfadjThk, IMatrix_mod_ShelfadjDrillinglineOffsetTop, IMatrix_mod_ShelfadjDrillinglineOffsetBtm, IMatrix_mod_ModuleName, IMatrix_mod_ShelfadjPartParentName, IMatrix_mod_ShelfadjPartParentType, IMatrix_mod_FrontProgram, IMatrix_mod_HardwareId, IMatrix_mod_VertDividerType, IMatrix_mod_VertDividerPosition, IMatrix_mod_GrainLogic, IMatrix_mod_ShelfadjColor, IMatrix_mod_ShelfadjDescriptor} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_ShelfadjFitting } from '../part-add-interfaces';
import { mc_ShelfadjGroup01_createBuildPlan, mc_ShelfadjGroup01_afterDataCompletion, mc_ShelfadjGroup01_manufacturerDataCompletion } from '../../modules/mc_ShelfadjGroup01';

export interface cbp_mc_ShelfadjGroup01 extends IModBaseProp
, IPartAdd_part_ShelfadjFitting, IModVarNonNull_mod_ShelfadjDesign, IModVarNonNull_mod_Height, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Width, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_ShelfadjOffsetFront, IModVarNonNull_mod_ShelfadjOffsetBack, IModVarNonNull_mod_ShelfadjDrillType, IModVarNonNull_mod_ShelfadjDrillDistance, IModVarNonNull_mod_ShelfadjThk, IModVarNonNull_mod_ShelfadjDrillinglineOffsetTop, IModVarNonNull_mod_ShelfadjDrillinglineOffsetBtm, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ShelfadjPartParentName, IModVarNonNull_mod_ShelfadjPartParentType, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_HardwareId, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_VertDividerType, IModVarNonNull_mod_VertDividerPosition, IModVarNonNull_mod_GrainLogic, IModVarNonNull_mod_ShelfadjColor, IModVarNonNull_mod_ShelfadjDescriptor {
  parent: IModParents_mf_Door_mf_Fliplift_mf_RackArea;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_ShelfadjGroup01 extends IModBaseProp
, IModVar_mod_ShelfadjDesign, IModVar_mod_Height, IModVar_mod_Depth, IModVar_mod_Width, IModVar_mod_TypeElement, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseId, IModVar_mod_CarcaseProgram, IModVar_mod_FrontDesign, IModVar_mod_ShelfadjOffsetFront, IModVar_mod_ShelfadjOffsetBack, IModVar_mod_ShelfadjDrillType, IModVar_mod_ShelfadjDrillDistance, IModVar_mod_ShelfadjThk, IModVar_mod_ShelfadjDrillinglineOffsetTop, IModVar_mod_ShelfadjDrillinglineOffsetBtm, IModVar_mod_ModuleName, IModVar_mod_ShelfadjPartParentName, IModVar_mod_ShelfadjPartParentType, IModVar_mod_FrontProgram, IModVar_mod_HardwareId, IModVar_mod_CarcaseSpaceDimension, IModVar_mod_VertDividerType, IModVar_mod_VertDividerPosition, IModVar_mod_GrainLogic, IModVar_mod_ShelfadjColor, IModVar_mod_ShelfadjDescriptor {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_ShelfadjGroup01;
  parent: IModParents_mf_Door_mf_Fliplift_mf_RackArea;
  addOD_M_mc_ShelfadjWood01(index?: number): dc_mc_ShelfadjWood01;
  addOD_M_mc_ShelfadjGlass01(index?: number): dc_mc_ShelfadjGlass01;
  addOD_M_mc_ShelfadjDrill01(index?: number): dc_mc_ShelfadjDrill01;
  addOD_M_mc_ShelfadjFitting01(index?: number): dc_mc_ShelfadjFitting01;
}

export interface adc_mc_ShelfadjGroup01 extends IModBaseProp
, IModVarNonNull_mod_ShelfadjDesign, IModVarNonNull_mod_Height, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Width, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_FrontDesign, IModVarNonNull_mod_ShelfadjOffsetFront, IModVarNonNull_mod_ShelfadjOffsetBack, IModVarNonNull_mod_ShelfadjDrillType, IModVarNonNull_mod_ShelfadjDrillDistance, IModVarNonNull_mod_ShelfadjThk, IModVarNonNull_mod_ShelfadjDrillinglineOffsetTop, IModVarNonNull_mod_ShelfadjDrillinglineOffsetBtm, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_ShelfadjPartParentName, IModVarNonNull_mod_ShelfadjPartParentType, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_HardwareId, IModVarNonNull_mod_CarcaseSpaceDimension, IModVarNonNull_mod_VertDividerType, IModVarNonNull_mod_VertDividerPosition, IModVarNonNull_mod_GrainLogic, IModVarNonNull_mod_ShelfadjColor, IModVarNonNull_mod_ShelfadjDescriptor {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_ShelfadjWood01(index?: number): dc_mc_ShelfadjWood01;
  addOD_M_mc_ShelfadjGlass01(index?: number): dc_mc_ShelfadjGlass01;
  addOD_M_mc_ShelfadjDrill01(index?: number): dc_mc_ShelfadjDrill01;
  addOD_M_mc_ShelfadjFitting01(index?: number): dc_mc_ShelfadjFitting01;
}

export class OD_M_mc_ShelfadjGroup01 extends OD_Base  implements dc_mc_ShelfadjGroup01
,IModParents_mc_ShelfadjFitting01_mc_ShelfadjGroup01,IModParents_mc_ShelfadjGroup01
,IModVar_mod_ShelfadjDesign,IModVar_mod_Height,IModVar_mod_Depth,IModVar_mod_Width,IModVar_mod_TypeElement,IModVar_mod_CarcaseColor,IModVar_mod_CarcaseId,IModVar_mod_CarcaseProgram,IModVar_mod_FrontDesign,IModVar_mod_ShelfadjOffsetFront,IModVar_mod_ShelfadjOffsetBack,IModVar_mod_ShelfadjDrillType,IModVar_mod_ShelfadjDrillDistance,IModVar_mod_ShelfadjThk,IModVar_mod_ShelfadjDrillinglineOffsetTop,IModVar_mod_ShelfadjDrillinglineOffsetBtm,IModVar_mod_ModuleName,IModVar_mod_ShelfadjPartParentName,IModVar_mod_ShelfadjPartParentType,IModVar_mod_FrontProgram,IModVar_mod_HardwareId,IModVar_mod_CarcaseSpaceDimension,IModVar_mod_VertDividerType,IModVar_mod_VertDividerPosition,IModVar_mod_GrainLogic,IModVar_mod_ShelfadjColor,IModVar_mod_ShelfadjDescriptor
 {
  constructor(parent: IModParents_mf_Door_mf_Fliplift_mf_RackArea, manufacturerMode?:boolean) {
    super('mc_ShelfadjGroup01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_ShelfadjGroup01_NonNull(this);
  }
  parent: IModParents_mf_Door_mf_Fliplift_mf_RackArea;
  _selfNonNull: OD_M_mc_ShelfadjGroup01_NonNull;

  override variants:string[] = ['mod_ShelfadjDesign','mod_Height','mod_Depth','mod_Width','mod_TypeElement','mod_CarcaseColor','mod_CarcaseId','mod_CarcaseProgram','mod_FrontDesign','mod_ShelfadjOffsetFront','mod_ShelfadjOffsetBack','mod_ShelfadjDrillType','mod_ShelfadjDrillDistance','mod_ShelfadjThk','mod_ShelfadjDrillinglineOffsetTop','mod_ShelfadjDrillinglineOffsetBtm','mod_ModuleName','mod_ShelfadjPartParentName','mod_ShelfadjPartParentType','mod_FrontProgram','mod_HardwareId','mod_CarcaseSpaceDimension','mod_VertDividerType','mod_VertDividerPosition','mod_GrainLogic','mod_ShelfadjColor','mod_ShelfadjDescriptor',];
  #mod_ShelfadjDesign?: string;
  get mod_ShelfadjDesign(): string | undefined { return this.#mod_ShelfadjDesign}
  set mod_ShelfadjDesign(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjDesign' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjDesign === value) return;
    this.#mod_ShelfadjDesign = value;
  }

  mod_ShelfadjDesign_matrix?: IMatrix_mod_ShelfadjDesign;
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
  #mod_ShelfadjOffsetFront?: number;
  get mod_ShelfadjOffsetFront(): number | undefined { return this.#mod_ShelfadjOffsetFront}
  set mod_ShelfadjOffsetFront(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjOffsetFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjOffsetFront === value) return;
    this.#mod_ShelfadjOffsetFront = value;
  }

  mod_ShelfadjOffsetFront_matrix?: IMatrix_mod_ShelfadjOffsetFront;
  #mod_ShelfadjOffsetBack?: number;
  get mod_ShelfadjOffsetBack(): number | undefined { return this.#mod_ShelfadjOffsetBack}
  set mod_ShelfadjOffsetBack(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjOffsetBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjOffsetBack === value) return;
    this.#mod_ShelfadjOffsetBack = value;
  }

  mod_ShelfadjOffsetBack_matrix?: IMatrix_mod_ShelfadjOffsetBack;
  #mod_ShelfadjDrillType?: string;
  get mod_ShelfadjDrillType(): string | undefined { return this.#mod_ShelfadjDrillType}
  set mod_ShelfadjDrillType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjDrillType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjDrillType === value) return;
    this.#mod_ShelfadjDrillType = value;
  }

  mod_ShelfadjDrillType_matrix?: IMatrix_mod_ShelfadjDrillType;
  #mod_ShelfadjDrillDistance?: number;
  get mod_ShelfadjDrillDistance(): number | undefined { return this.#mod_ShelfadjDrillDistance}
  set mod_ShelfadjDrillDistance(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjDrillDistance' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjDrillDistance === value) return;
    this.#mod_ShelfadjDrillDistance = value;
  }

  mod_ShelfadjDrillDistance_matrix?: IMatrix_mod_ShelfadjDrillDistance;
  #mod_ShelfadjThk?: number;
  get mod_ShelfadjThk(): number | undefined { return this.#mod_ShelfadjThk}
  set mod_ShelfadjThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjThk === value) return;
    this.#mod_ShelfadjThk = value;
  }

  mod_ShelfadjThk_matrix?: IMatrix_mod_ShelfadjThk;
  #mod_ShelfadjDrillinglineOffsetTop?: number;
  get mod_ShelfadjDrillinglineOffsetTop(): number | undefined { return this.#mod_ShelfadjDrillinglineOffsetTop}
  set mod_ShelfadjDrillinglineOffsetTop(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjDrillinglineOffsetTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjDrillinglineOffsetTop === value) return;
    this.#mod_ShelfadjDrillinglineOffsetTop = value;
  }

  mod_ShelfadjDrillinglineOffsetTop_matrix?: IMatrix_mod_ShelfadjDrillinglineOffsetTop;
  #mod_ShelfadjDrillinglineOffsetBtm?: number;
  get mod_ShelfadjDrillinglineOffsetBtm(): number | undefined { return this.#mod_ShelfadjDrillinglineOffsetBtm}
  set mod_ShelfadjDrillinglineOffsetBtm(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjDrillinglineOffsetBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjDrillinglineOffsetBtm === value) return;
    this.#mod_ShelfadjDrillinglineOffsetBtm = value;
  }

  mod_ShelfadjDrillinglineOffsetBtm_matrix?: IMatrix_mod_ShelfadjDrillinglineOffsetBtm;
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
  #mod_ShelfadjPartParentName?: string;
  get mod_ShelfadjPartParentName(): string | undefined { return this.#mod_ShelfadjPartParentName}
  set mod_ShelfadjPartParentName(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjPartParentName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjPartParentName === value) return;
    this.#mod_ShelfadjPartParentName = value;
  }

  mod_ShelfadjPartParentName_matrix?: IMatrix_mod_ShelfadjPartParentName;
  #mod_ShelfadjPartParentType?: string;
  get mod_ShelfadjPartParentType(): string | undefined { return this.#mod_ShelfadjPartParentType}
  set mod_ShelfadjPartParentType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjPartParentType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjPartParentType === value) return;
    this.#mod_ShelfadjPartParentType = value;
  }

  mod_ShelfadjPartParentType_matrix?: IMatrix_mod_ShelfadjPartParentType;
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
  #mod_CarcaseSpaceDimension: string[] = [];
  get mod_CarcaseSpaceDimension(): string[] { return this.#mod_CarcaseSpaceDimension;}
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
  #mod_VertDividerPosition?: number;
  get mod_VertDividerPosition(): number | undefined { return this.#mod_VertDividerPosition}
  set mod_VertDividerPosition(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_VertDividerPosition' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_VertDividerPosition === value) return;
    this.#mod_VertDividerPosition = value;
  }

  mod_VertDividerPosition_matrix?: IMatrix_mod_VertDividerPosition;
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
  #mod_ShelfadjColor?: string;
  get mod_ShelfadjColor(): string | undefined { return this.#mod_ShelfadjColor}
  set mod_ShelfadjColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjColor === value) return;
    this.#mod_ShelfadjColor = value;
  }

  mod_ShelfadjColor_matrix?: IMatrix_mod_ShelfadjColor;
  #mod_ShelfadjDescriptor?: string;
  get mod_ShelfadjDescriptor(): string | undefined { return this.#mod_ShelfadjDescriptor}
  set mod_ShelfadjDescriptor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelfadjDescriptor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelfadjDescriptor === value) return;
    this.#mod_ShelfadjDescriptor = value;
  }

  mod_ShelfadjDescriptor_matrix?: IMatrix_mod_ShelfadjDescriptor;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_ShelfadjDesign', this.mod_ShelfadjDesign);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_CarcaseColor', this.mod_CarcaseColor);
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
  res.set('mod_FrontDesign', this.mod_FrontDesign);
  res.set('mod_ShelfadjOffsetFront', this.mod_ShelfadjOffsetFront);
  res.set('mod_ShelfadjOffsetBack', this.mod_ShelfadjOffsetBack);
  res.set('mod_ShelfadjDrillType', this.mod_ShelfadjDrillType);
  res.set('mod_ShelfadjDrillDistance', this.mod_ShelfadjDrillDistance);
  res.set('mod_ShelfadjThk', this.mod_ShelfadjThk);
  res.set('mod_ShelfadjDrillinglineOffsetTop', this.mod_ShelfadjDrillinglineOffsetTop);
  res.set('mod_ShelfadjDrillinglineOffsetBtm', this.mod_ShelfadjDrillinglineOffsetBtm);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_ShelfadjPartParentName', this.mod_ShelfadjPartParentName);
  res.set('mod_ShelfadjPartParentType', this.mod_ShelfadjPartParentType);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_HardwareId', this.mod_HardwareId);
  res.set('mod_CarcaseSpaceDimension', JSON.stringify(this.mod_CarcaseSpaceDimension));
  res.set('mod_VertDividerType', this.mod_VertDividerType);
  res.set('mod_VertDividerPosition', this.mod_VertDividerPosition);
  res.set('mod_GrainLogic', this.mod_GrainLogic);
  res.set('mod_ShelfadjColor', this.mod_ShelfadjColor);
  res.set('mod_ShelfadjDescriptor', this.mod_ShelfadjDescriptor);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDesign');
    const val = _toString(json['attributes']['mod_ShelfadjDesign'], 'mod_ShelfadjDesign');
    internal_leaveValidateVariant();
    this.mod_ShelfadjDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseColor');
    const val = _toString(json['attributes']['mod_CarcaseColor'], 'mod_CarcaseColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
    const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontDesign');
    const val = _toString(json['attributes']['mod_FrontDesign'], 'mod_FrontDesign');
    internal_leaveValidateVariant();
    this.mod_FrontDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjOffsetFront');
    const val = _toFloat(json['attributes']['mod_ShelfadjOffsetFront'], 'mod_ShelfadjOffsetFront');
    internal_leaveValidateVariant();
    this.mod_ShelfadjOffsetFront = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjOffsetBack');
    const val = _toFloat(json['attributes']['mod_ShelfadjOffsetBack'], 'mod_ShelfadjOffsetBack');
    internal_leaveValidateVariant();
    this.mod_ShelfadjOffsetBack = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDrillType');
    const val = _toString(json['attributes']['mod_ShelfadjDrillType'], 'mod_ShelfadjDrillType');
    internal_leaveValidateVariant();
    this.mod_ShelfadjDrillType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDrillDistance');
    const val = _toFloat(json['attributes']['mod_ShelfadjDrillDistance'], 'mod_ShelfadjDrillDistance');
    internal_leaveValidateVariant();
    this.mod_ShelfadjDrillDistance = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjThk');
    const val = _toFloat(json['attributes']['mod_ShelfadjThk'], 'mod_ShelfadjThk');
    internal_leaveValidateVariant();
    this.mod_ShelfadjThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDrillinglineOffsetTop');
    const val = _toFloat(json['attributes']['mod_ShelfadjDrillinglineOffsetTop'], 'mod_ShelfadjDrillinglineOffsetTop');
    internal_leaveValidateVariant();
    this.mod_ShelfadjDrillinglineOffsetTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDrillinglineOffsetBtm');
    const val = _toFloat(json['attributes']['mod_ShelfadjDrillinglineOffsetBtm'], 'mod_ShelfadjDrillinglineOffsetBtm');
    internal_leaveValidateVariant();
    this.mod_ShelfadjDrillinglineOffsetBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjPartParentName');
    const val = _toString(json['attributes']['mod_ShelfadjPartParentName'], 'mod_ShelfadjPartParentName');
    internal_leaveValidateVariant();
    this.mod_ShelfadjPartParentName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjPartParentType');
    const val = _toString(json['attributes']['mod_ShelfadjPartParentType'], 'mod_ShelfadjPartParentType');
    internal_leaveValidateVariant();
    this.mod_ShelfadjPartParentType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareId');
    const val = _toString(json['attributes']['mod_HardwareId'], 'mod_HardwareId');
    internal_leaveValidateVariant();
    this.mod_HardwareId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_VertDividerType');
    const val = _toString(json['attributes']['mod_VertDividerType'], 'mod_VertDividerType');
    internal_leaveValidateVariant();
    this.mod_VertDividerType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_VertDividerPosition');
    const val = _toFloat(json['attributes']['mod_VertDividerPosition'], 'mod_VertDividerPosition');
    internal_leaveValidateVariant();
    this.mod_VertDividerPosition = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_GrainLogic');
    const val = _toString(json['attributes']['mod_GrainLogic'], 'mod_GrainLogic');
    internal_leaveValidateVariant();
    this.mod_GrainLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjColor');
    const val = _toString(json['attributes']['mod_ShelfadjColor'], 'mod_ShelfadjColor');
    internal_leaveValidateVariant();
    this.mod_ShelfadjColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelfadjDescriptor');
    const val = _toString(json['attributes']['mod_ShelfadjDescriptor'], 'mod_ShelfadjDescriptor');
    internal_leaveValidateVariant();
    this.mod_ShelfadjDescriptor = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_ShelfadjDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfadjDesign')) {
          let pv = <IModVar_mod_ShelfadjDesign>s;
          if (pv.mod_ShelfadjDesign !== undefined) {
            this.mod_ShelfadjDesign = (<IModVar_mod_ShelfadjDesign>s).mod_ShelfadjDesign;
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
    if (this.mod_ShelfadjDrillType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfadjDrillType')) {
          let pv = <IModVar_mod_ShelfadjDrillType>s;
          if (pv.mod_ShelfadjDrillType !== undefined) {
            this.mod_ShelfadjDrillType = (<IModVar_mod_ShelfadjDrillType>s).mod_ShelfadjDrillType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ShelfadjDrillDistance === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfadjDrillDistance')) {
          let pv = <IModVar_mod_ShelfadjDrillDistance>s;
          if (pv.mod_ShelfadjDrillDistance !== undefined) {
            this.mod_ShelfadjDrillDistance = (<IModVar_mod_ShelfadjDrillDistance>s).mod_ShelfadjDrillDistance;
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
    if (this.mod_ShelfadjColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfadjColor')) {
          let pv = <IModVar_mod_ShelfadjColor>s;
          if (pv.mod_ShelfadjColor !== undefined) {
            this.mod_ShelfadjColor = (<IModVar_mod_ShelfadjColor>s).mod_ShelfadjColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ShelfadjDescriptor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelfadjDescriptor')) {
          let pv = <IModVar_mod_ShelfadjDescriptor>s;
          if (pv.mod_ShelfadjDescriptor !== undefined) {
            this.mod_ShelfadjDescriptor = (<IModVar_mod_ShelfadjDescriptor>s).mod_ShelfadjDescriptor;
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
    if (this.mod_Height === undefined) {
      this.mod_Height = 720;
    }
    if (this.mod_Depth === undefined) {
      this.mod_Depth = 522;
    }
    if (this.mod_Width === undefined) {
      this.mod_Width = 600;
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_ShelfadjGroup01";
    }
    if (this.mod_ShelfadjPartParentName === undefined) {
      this.mod_ShelfadjPartParentName = "None";
    }
    if (this.mod_ShelfadjPartParentType === undefined) {
      this.mod_ShelfadjPartParentType = "None";
    }
    if (this.mod_HardwareId === undefined) {
      this.mod_HardwareId = "None";
    }
    if (this.mod_VertDividerType === undefined) {
      this.mod_VertDividerType = "NoVertDivider";
    }
    if (this.mod_VertDividerPosition === undefined) {
      this.mod_VertDividerPosition = 0;
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_ShelfadjOffsetFront === undefined) {
      this.mod_ShelfadjOffsetFront = this.g.basic_ShelfadjOffsetFront;
    }
    if (this.mod_ShelfadjOffsetBack === undefined) {
      this.mod_ShelfadjOffsetBack = this.g.basic_ShelfadjOffsetBack;
    }
    if (this.mod_ShelfadjThk === undefined) {
      this.mod_ShelfadjThk = this.g.basic_ShelfadjThk;
    }
    if (this.mod_ShelfadjDrillinglineOffsetTop === undefined) {
      this.mod_ShelfadjDrillinglineOffsetTop = this.g.basic_ShelfadjDrillinglineOffsetTop;
    }
    if (this.mod_ShelfadjDrillinglineOffsetBtm === undefined) {
      this.mod_ShelfadjDrillinglineOffsetBtm = this.g.basic_ShelfadjDrillinglineOffsetBtm;
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
  #manufacturerDataCompletionInternal = mc_ShelfadjGroup01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_ShelfadjGroup01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_ShelfadjGroup01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_ShelfadjGroup01_NonNull(this);
    return adc;
  }

  addOD_M_mc_ShelfadjWood01(index?: number): dc_mc_ShelfadjWood01 {
    var m = new OD_M_mc_ShelfadjWood01(this);
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
  addOD_M_mc_ShelfadjGlass01(index?: number): dc_mc_ShelfadjGlass01 {
    var m = new OD_M_mc_ShelfadjGlass01(this);
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
  addOD_M_mc_ShelfadjDrill01(index?: number): dc_mc_ShelfadjDrill01 {
    var m = new OD_M_mc_ShelfadjDrill01(this);
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
  addOD_M_mc_ShelfadjFitting01(index?: number): dc_mc_ShelfadjFitting01 {
    var m = new OD_M_mc_ShelfadjFitting01(this);
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
    this.mod_ShelfadjDesign_matrix = VariantValidation.mod_ShelfadjDesign(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_CarcaseColor_matrix = VariantValidation.mod_CarcaseColor(this, this);
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this);
    this.mod_FrontDesign_matrix = VariantValidation.mod_FrontDesign(this, this);
    this.mod_ShelfadjOffsetFront_matrix = VariantValidation.mod_ShelfadjOffsetFront(this, this);
    this.mod_ShelfadjOffsetBack_matrix = VariantValidation.mod_ShelfadjOffsetBack(this, this);
    this.mod_ShelfadjDrillType_matrix = VariantValidation.mod_ShelfadjDrillType(this, this);
    this.mod_ShelfadjDrillDistance_matrix = VariantValidation.mod_ShelfadjDrillDistance(this, this);
    this.mod_ShelfadjThk_matrix = VariantValidation.mod_ShelfadjThk(this, this);
    this.mod_ShelfadjDrillinglineOffsetTop_matrix = VariantValidation.mod_ShelfadjDrillinglineOffsetTop(this, this);
    this.mod_ShelfadjDrillinglineOffsetBtm_matrix = VariantValidation.mod_ShelfadjDrillinglineOffsetBtm(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_ShelfadjPartParentName_matrix = VariantValidation.mod_ShelfadjPartParentName(this, this);
    this.mod_ShelfadjPartParentType_matrix = VariantValidation.mod_ShelfadjPartParentType(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_HardwareId_matrix = VariantValidation.mod_HardwareId(this, this);
    this.mod_VertDividerType_matrix = VariantValidation.mod_VertDividerType(this, this);
    this.mod_VertDividerPosition_matrix = VariantValidation.mod_VertDividerPosition(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
    this.mod_ShelfadjColor_matrix = VariantValidation.mod_ShelfadjColor(this, this);
    this.mod_ShelfadjDescriptor_matrix = VariantValidation.mod_ShelfadjDescriptor(this, this);
  }
  addpart_ShelfadjFitting(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelfadjFitting_PartVarsWritable {
    var c = new P_part_ShelfadjFitting(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_ShelfadjGroup01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_ShelfadjGroup01_NonNull implements cbp_mc_ShelfadjGroup01, adc_mc_ShelfadjGroup01 ,IPartParentsNonNull_mc_ShelfadjFitting01_mc_ShelfadjGroup01,IPartParentsNonNull_mc_ShelfadjGroup01 {
  constructor(parent: OD_M_mc_ShelfadjGroup01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_ShelfadjGroup01;

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
  #createBuildPlanInternal = mc_ShelfadjGroup01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_ShelfadjGroup01_afterDataCompletion;
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
  parent: IModParents_mf_Door_mf_Fliplift_mf_RackArea;
  addpart_ShelfadjFitting(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelfadjFitting_PartVarsWritable {
    return this.#internalParent.addpart_ShelfadjFitting(x, y, z, dimx, dimy, dimz);
  }
  get mod_ShelfadjDesign(): string  {
    return this.#internalParent.mod_ShelfadjDesign!;
  }
  get mod_ShelfadjDesign_matrix(): IMatrix_mod_ShelfadjDesign {
    return this.#internalParent.mod_ShelfadjDesign_matrix!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_CarcaseColor(): string  {
    return this.#internalParent.mod_CarcaseColor!;
  }
  get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor {
    return this.#internalParent.mod_CarcaseColor_matrix!;
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseProgram(): string  {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_FrontDesign(): string  {
    return this.#internalParent.mod_FrontDesign!;
  }
  get mod_ShelfadjOffsetFront(): number  {
    return this.#internalParent.mod_ShelfadjOffsetFront!;
  }
  get mod_ShelfadjOffsetBack(): number  {
    return this.#internalParent.mod_ShelfadjOffsetBack!;
  }
  get mod_ShelfadjDrillType(): string  {
    return this.#internalParent.mod_ShelfadjDrillType!;
  }
  get mod_ShelfadjDrillType_matrix(): IMatrix_mod_ShelfadjDrillType {
    return this.#internalParent.mod_ShelfadjDrillType_matrix!;
  }
  get mod_ShelfadjDrillDistance(): number  {
    return this.#internalParent.mod_ShelfadjDrillDistance!;
  }
  get mod_ShelfadjThk(): number  {
    return this.#internalParent.mod_ShelfadjThk!;
  }
  get mod_ShelfadjDrillinglineOffsetTop(): number  {
    return this.#internalParent.mod_ShelfadjDrillinglineOffsetTop!;
  }
  get mod_ShelfadjDrillinglineOffsetBtm(): number  {
    return this.#internalParent.mod_ShelfadjDrillinglineOffsetBtm!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_ShelfadjPartParentName(): string  {
    return this.#internalParent.mod_ShelfadjPartParentName!;
  }
  get mod_ShelfadjPartParentType(): string  {
    return this.#internalParent.mod_ShelfadjPartParentType!;
  }
  get mod_FrontProgram(): string  {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_HardwareId(): string  {
    return this.#internalParent.mod_HardwareId!;
  }
  get mod_CarcaseSpaceDimension(): string [] {
    return this.#internalParent.mod_CarcaseSpaceDimension!;
  }
  get mod_VertDividerType(): string  {
    return this.#internalParent.mod_VertDividerType!;
  }
  get mod_VertDividerType_matrix(): IMatrix_mod_VertDividerType {
    return this.#internalParent.mod_VertDividerType_matrix!;
  }
  get mod_VertDividerPosition(): number  {
    return this.#internalParent.mod_VertDividerPosition!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
  get mod_ShelfadjColor(): string  {
    return this.#internalParent.mod_ShelfadjColor!;
  }
  get mod_ShelfadjColor_matrix(): IMatrix_mod_ShelfadjColor {
    return this.#internalParent.mod_ShelfadjColor_matrix!;
  }
  get mod_ShelfadjDescriptor(): string  {
    return this.#internalParent.mod_ShelfadjDescriptor!;
  }
  addOD_M_mc_ShelfadjWood01(index?: number): dc_mc_ShelfadjWood01 {
    return this.#internalParent.addOD_M_mc_ShelfadjWood01(index);
  }
  addOD_M_mc_ShelfadjGlass01(index?: number): dc_mc_ShelfadjGlass01 {
    return this.#internalParent.addOD_M_mc_ShelfadjGlass01(index);
  }
  addOD_M_mc_ShelfadjDrill01(index?: number): dc_mc_ShelfadjDrill01 {
    return this.#internalParent.addOD_M_mc_ShelfadjDrill01(index);
  }
  addOD_M_mc_ShelfadjFitting01(index?: number): dc_mc_ShelfadjFitting01 {
    return this.#internalParent.addOD_M_mc_ShelfadjFitting01(index);
  }
}

