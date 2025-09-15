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
import { IModParents_mc_Storageunit01 } from '../mod-interfaces'
import { IP_part_Backwall_PartVarsWritable, P_part_Backwall } from '../parts/part_Backwall'
import { IModuleNonNull_mc_StorageunitBackwall01,IModParents_mc_StorageunitBackwall01,IPartParentsNonNull_mc_StorageunitBackwall01} from '../mod-interfaces'
import {IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseVisBack,IModVarNonNull_mod_CarcaseVisBack,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_CarcaseBackwallColor,IModVarNonNull_mod_CarcaseBackwallColor,IModVar_mod_CarcaseBackwallProgram,IModVarNonNull_mod_CarcaseBackwallProgram,IModVar_mod_CarcaseOutsideColor,IModVarNonNull_mod_CarcaseOutsideColor,IModVar_mod_CarcaseEdgeColor,IModVarNonNull_mod_CarcaseEdgeColor,IModVar_mod_CarcaseOutsideProgram,IModVarNonNull_mod_CarcaseOutsideProgram,IModVar_mod_EdgeBackType,IModVarNonNull_mod_EdgeBackType,IModVar_mod_EdgeLeftType,IModVarNonNull_mod_EdgeLeftType,IModVar_mod_EdgeFrontType,IModVarNonNull_mod_EdgeFrontType,IModVar_mod_EdgeRightType,IModVarNonNull_mod_EdgeRightType,IModVar_mod_EdgeJointType,IModVarNonNull_mod_EdgeJointType,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_CarcaseProgram,IModVarNonNull_mod_CarcaseProgram,IModVar_mod_CarcaseConnectionLeftTop,IModVarNonNull_mod_CarcaseConnectionLeftTop,IModVar_mod_CarcaseConnectionRightTop,IModVarNonNull_mod_CarcaseConnectionRightTop,IModVar_mod_SlopedCeilingConstruction,IModVarNonNull_mod_SlopedCeilingConstruction,IModVar_mod_SlopeAngle,IModVarNonNull_mod_SlopeAngle,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseVisBack, IMatrix_mod_Depth, IMatrix_mod_Height, IMatrix_mod_Width, IMatrix_mod_CarcaseBackwallColor, IMatrix_mod_CarcaseBackwallProgram, IMatrix_mod_CarcaseOutsideColor, IMatrix_mod_CarcaseEdgeColor, IMatrix_mod_CarcaseOutsideProgram, IMatrix_mod_EdgeBackType, IMatrix_mod_EdgeLeftType, IMatrix_mod_EdgeFrontType, IMatrix_mod_EdgeRightType, IMatrix_mod_EdgeJointType, IMatrix_mod_ModuleName, IMatrix_mod_CarcaseProgram, IMatrix_mod_CarcaseConnectionLeftTop, IMatrix_mod_CarcaseConnectionRightTop, IMatrix_mod_SlopedCeilingConstruction, IMatrix_mod_SlopeAngle, IMatrix_mod_GrainLogic, IMatrix_mod_TypeElement} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_Backwall } from '../part-add-interfaces';
import { mc_StorageunitBackwall01_createBuildPlan, mc_StorageunitBackwall01_afterDataCompletion, mc_StorageunitBackwall01_manufacturerDataCompletion } from '../../modules/mc_StorageunitBackwall01';

export interface cbp_mc_StorageunitBackwall01 extends IModBaseProp
, IPartAdd_part_Backwall, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseVisBack, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseBackwallColor, IModVarNonNull_mod_CarcaseBackwallProgram, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_EdgeBackType, IModVarNonNull_mod_EdgeLeftType, IModVarNonNull_mod_EdgeFrontType, IModVarNonNull_mod_EdgeRightType, IModVarNonNull_mod_EdgeJointType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseConnectionLeftTop, IModVarNonNull_mod_CarcaseConnectionRightTop, IModVarNonNull_mod_SlopedCeilingConstruction, IModVarNonNull_mod_SlopeAngle, IModVarNonNull_mod_GrainLogic, IModVarNonNull_mod_TypeElement {
  parent: IModParents_mc_Storageunit01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_StorageunitBackwall01 extends IModBaseProp
, IModVar_mod_CarcaseId, IModVar_mod_CarcaseVisBack, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_Width, IModVar_mod_CarcaseBackwallColor, IModVar_mod_CarcaseBackwallProgram, IModVar_mod_CarcaseOutsideColor, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseOutsideProgram, IModVar_mod_EdgeBackType, IModVar_mod_EdgeLeftType, IModVar_mod_EdgeFrontType, IModVar_mod_EdgeRightType, IModVar_mod_EdgeJointType, IModVar_mod_ModuleName, IModVar_mod_CarcaseProgram, IModVar_mod_CarcaseConnectionLeftTop, IModVar_mod_CarcaseConnectionRightTop, IModVar_mod_SlopedCeilingConstruction, IModVar_mod_SlopeAngle, IModVar_mod_GrainLogic, IModVar_mod_TypeElement {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_StorageunitBackwall01;
  parent: IModParents_mc_Storageunit01;
}

export interface adc_mc_StorageunitBackwall01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseVisBack, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseBackwallColor, IModVarNonNull_mod_CarcaseBackwallProgram, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_EdgeBackType, IModVarNonNull_mod_EdgeLeftType, IModVarNonNull_mod_EdgeFrontType, IModVarNonNull_mod_EdgeRightType, IModVarNonNull_mod_EdgeJointType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseConnectionLeftTop, IModVarNonNull_mod_CarcaseConnectionRightTop, IModVarNonNull_mod_SlopedCeilingConstruction, IModVarNonNull_mod_SlopeAngle, IModVarNonNull_mod_GrainLogic, IModVarNonNull_mod_TypeElement {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_StorageunitBackwall01 extends OD_Base  implements dc_mc_StorageunitBackwall01
,IModParents_mc_StorageunitBackwall01
,IModVar_mod_CarcaseId,IModVar_mod_CarcaseVisBack,IModVar_mod_Depth,IModVar_mod_Height,IModVar_mod_Width,IModVar_mod_CarcaseBackwallColor,IModVar_mod_CarcaseBackwallProgram,IModVar_mod_CarcaseOutsideColor,IModVar_mod_CarcaseEdgeColor,IModVar_mod_CarcaseOutsideProgram,IModVar_mod_EdgeBackType,IModVar_mod_EdgeLeftType,IModVar_mod_EdgeFrontType,IModVar_mod_EdgeRightType,IModVar_mod_EdgeJointType,IModVar_mod_ModuleName,IModVar_mod_CarcaseProgram,IModVar_mod_CarcaseConnectionLeftTop,IModVar_mod_CarcaseConnectionRightTop,IModVar_mod_SlopedCeilingConstruction,IModVar_mod_SlopeAngle,IModVar_mod_GrainLogic,IModVar_mod_TypeElement
 {
  constructor(parent: IModParents_mc_Storageunit01, manufacturerMode?:boolean) {
    super('mc_StorageunitBackwall01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_StorageunitBackwall01_NonNull(this);
  }
  parent: IModParents_mc_Storageunit01;
  _selfNonNull: OD_M_mc_StorageunitBackwall01_NonNull;

  override variants:string[] = ['mod_CarcaseId','mod_CarcaseVisBack','mod_Depth','mod_Height','mod_Width','mod_CarcaseBackwallColor','mod_CarcaseBackwallProgram','mod_CarcaseOutsideColor','mod_CarcaseEdgeColor','mod_CarcaseOutsideProgram','mod_EdgeBackType','mod_EdgeLeftType','mod_EdgeFrontType','mod_EdgeRightType','mod_EdgeJointType','mod_ModuleName','mod_CarcaseProgram','mod_CarcaseConnectionLeftTop','mod_CarcaseConnectionRightTop','mod_SlopedCeilingConstruction','mod_SlopeAngle','mod_GrainLogic','mod_TypeElement',];
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
  #mod_CarcaseVisBack?: boolean;
  get mod_CarcaseVisBack(): boolean | undefined { return this.#mod_CarcaseVisBack}
  set mod_CarcaseVisBack(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseVisBack' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseVisBack === value) return;
    this.#mod_CarcaseVisBack = value;
  }

  mod_CarcaseVisBack_matrix?: IMatrix_mod_CarcaseVisBack;
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
  #mod_CarcaseBackwallColor?: string;
  get mod_CarcaseBackwallColor(): string | undefined { return this.#mod_CarcaseBackwallColor}
  set mod_CarcaseBackwallColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseBackwallColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseBackwallColor === value) return;
    this.#mod_CarcaseBackwallColor = value;
  }

  mod_CarcaseBackwallColor_matrix?: IMatrix_mod_CarcaseBackwallColor;
  #mod_CarcaseBackwallProgram?: string;
  get mod_CarcaseBackwallProgram(): string | undefined { return this.#mod_CarcaseBackwallProgram}
  set mod_CarcaseBackwallProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseBackwallProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseBackwallProgram === value) return;
    this.#mod_CarcaseBackwallProgram = value;
  }

  mod_CarcaseBackwallProgram_matrix?: IMatrix_mod_CarcaseBackwallProgram;
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
  #mod_CarcaseEdgeColor?: string;
  get mod_CarcaseEdgeColor(): string | undefined { return this.#mod_CarcaseEdgeColor}
  set mod_CarcaseEdgeColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseEdgeColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseEdgeColor === value) return;
    this.#mod_CarcaseEdgeColor = value;
  }

  mod_CarcaseEdgeColor_matrix?: IMatrix_mod_CarcaseEdgeColor;
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
  #mod_EdgeBackType?: string;
  get mod_EdgeBackType(): string | undefined { return this.#mod_EdgeBackType}
  set mod_EdgeBackType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_EdgeBackType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_EdgeBackType === value) return;
    this.#mod_EdgeBackType = value;
  }

  mod_EdgeBackType_matrix?: IMatrix_mod_EdgeBackType;
  #mod_EdgeLeftType?: string;
  get mod_EdgeLeftType(): string | undefined { return this.#mod_EdgeLeftType}
  set mod_EdgeLeftType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_EdgeLeftType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_EdgeLeftType === value) return;
    this.#mod_EdgeLeftType = value;
  }

  mod_EdgeLeftType_matrix?: IMatrix_mod_EdgeLeftType;
  #mod_EdgeFrontType?: string;
  get mod_EdgeFrontType(): string | undefined { return this.#mod_EdgeFrontType}
  set mod_EdgeFrontType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_EdgeFrontType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_EdgeFrontType === value) return;
    this.#mod_EdgeFrontType = value;
  }

  mod_EdgeFrontType_matrix?: IMatrix_mod_EdgeFrontType;
  #mod_EdgeRightType?: string;
  get mod_EdgeRightType(): string | undefined { return this.#mod_EdgeRightType}
  set mod_EdgeRightType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_EdgeRightType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_EdgeRightType === value) return;
    this.#mod_EdgeRightType = value;
  }

  mod_EdgeRightType_matrix?: IMatrix_mod_EdgeRightType;
  #mod_EdgeJointType?: string;
  get mod_EdgeJointType(): string | undefined { return this.#mod_EdgeJointType}
  set mod_EdgeJointType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_EdgeJointType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_EdgeJointType === value) return;
    this.#mod_EdgeJointType = value;
  }

  mod_EdgeJointType_matrix?: IMatrix_mod_EdgeJointType;
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
  #mod_SlopedCeilingConstruction?: string;
  get mod_SlopedCeilingConstruction(): string | undefined { return this.#mod_SlopedCeilingConstruction}
  set mod_SlopedCeilingConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_SlopedCeilingConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_SlopedCeilingConstruction === value) return;
    this.#mod_SlopedCeilingConstruction = value;
  }

  mod_SlopedCeilingConstruction_matrix?: IMatrix_mod_SlopedCeilingConstruction;
  #mod_SlopeAngle?: number;
  get mod_SlopeAngle(): number | undefined { return this.#mod_SlopeAngle}
  set mod_SlopeAngle(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_SlopeAngle' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_SlopeAngle === value) return;
    this.#mod_SlopeAngle = value;
  }

  mod_SlopeAngle_matrix?: IMatrix_mod_SlopeAngle;
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
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseVisBack', this.mod_CarcaseVisBack);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_CarcaseBackwallColor', this.mod_CarcaseBackwallColor);
  res.set('mod_CarcaseBackwallProgram', this.mod_CarcaseBackwallProgram);
  res.set('mod_CarcaseOutsideColor', this.mod_CarcaseOutsideColor);
  res.set('mod_CarcaseEdgeColor', this.mod_CarcaseEdgeColor);
  res.set('mod_CarcaseOutsideProgram', this.mod_CarcaseOutsideProgram);
  res.set('mod_EdgeBackType', this.mod_EdgeBackType);
  res.set('mod_EdgeLeftType', this.mod_EdgeLeftType);
  res.set('mod_EdgeFrontType', this.mod_EdgeFrontType);
  res.set('mod_EdgeRightType', this.mod_EdgeRightType);
  res.set('mod_EdgeJointType', this.mod_EdgeJointType);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
  res.set('mod_CarcaseConnectionLeftTop', this.mod_CarcaseConnectionLeftTop);
  res.set('mod_CarcaseConnectionRightTop', this.mod_CarcaseConnectionRightTop);
  res.set('mod_SlopedCeilingConstruction', this.mod_SlopedCeilingConstruction);
  res.set('mod_SlopeAngle', this.mod_SlopeAngle);
  res.set('mod_GrainLogic', this.mod_GrainLogic);
  res.set('mod_TypeElement', this.mod_TypeElement);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseVisBack');
    const val = _toBoolean(json['attributes']['mod_CarcaseVisBack'], 'mod_CarcaseVisBack');
    internal_leaveValidateVariant();
    this.mod_CarcaseVisBack = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseBackwallColor');
    const val = _toString(json['attributes']['mod_CarcaseBackwallColor'], 'mod_CarcaseBackwallColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseBackwallColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseBackwallProgram');
    const val = _toString(json['attributes']['mod_CarcaseBackwallProgram'], 'mod_CarcaseBackwallProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseBackwallProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseOutsideColor');
    const val = _toString(json['attributes']['mod_CarcaseOutsideColor'], 'mod_CarcaseOutsideColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseOutsideColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeColor');
    const val = _toString(json['attributes']['mod_CarcaseEdgeColor'], 'mod_CarcaseEdgeColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseEdgeColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseOutsideProgram');
    const val = _toString(json['attributes']['mod_CarcaseOutsideProgram'], 'mod_CarcaseOutsideProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseOutsideProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeBackType');
    const val = _toString(json['attributes']['mod_EdgeBackType'], 'mod_EdgeBackType');
    internal_leaveValidateVariant();
    this.mod_EdgeBackType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeLeftType');
    const val = _toString(json['attributes']['mod_EdgeLeftType'], 'mod_EdgeLeftType');
    internal_leaveValidateVariant();
    this.mod_EdgeLeftType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeFrontType');
    const val = _toString(json['attributes']['mod_EdgeFrontType'], 'mod_EdgeFrontType');
    internal_leaveValidateVariant();
    this.mod_EdgeFrontType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeRightType');
    const val = _toString(json['attributes']['mod_EdgeRightType'], 'mod_EdgeRightType');
    internal_leaveValidateVariant();
    this.mod_EdgeRightType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeJointType');
    const val = _toString(json['attributes']['mod_EdgeJointType'], 'mod_EdgeJointType');
    internal_leaveValidateVariant();
    this.mod_EdgeJointType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
    const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionLeftTop');
    const val = _toString(json['attributes']['mod_CarcaseConnectionLeftTop'], 'mod_CarcaseConnectionLeftTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionLeftTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionRightTop');
    const val = _toString(json['attributes']['mod_CarcaseConnectionRightTop'], 'mod_CarcaseConnectionRightTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionRightTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SlopedCeilingConstruction');
    const val = _toString(json['attributes']['mod_SlopedCeilingConstruction'], 'mod_SlopedCeilingConstruction');
    internal_leaveValidateVariant();
    this.mod_SlopedCeilingConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SlopeAngle');
    const val = _toFloat(json['attributes']['mod_SlopeAngle'], 'mod_SlopeAngle');
    internal_leaveValidateVariant();
    this.mod_SlopeAngle = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_GrainLogic');
    const val = _toString(json['attributes']['mod_GrainLogic'], 'mod_GrainLogic');
    internal_leaveValidateVariant();
    this.mod_GrainLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
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
    if (this.mod_CarcaseVisBack === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseVisBack')) {
          let pv = <IModVar_mod_CarcaseVisBack>s;
          if (pv.mod_CarcaseVisBack !== undefined) {
            this.mod_CarcaseVisBack = (<IModVar_mod_CarcaseVisBack>s).mod_CarcaseVisBack;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseBackwallColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseBackwallColor')) {
          let pv = <IModVar_mod_CarcaseBackwallColor>s;
          if (pv.mod_CarcaseBackwallColor !== undefined) {
            this.mod_CarcaseBackwallColor = (<IModVar_mod_CarcaseBackwallColor>s).mod_CarcaseBackwallColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CarcaseBackwallProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseBackwallProgram')) {
          let pv = <IModVar_mod_CarcaseBackwallProgram>s;
          if (pv.mod_CarcaseBackwallProgram !== undefined) {
            this.mod_CarcaseBackwallProgram = (<IModVar_mod_CarcaseBackwallProgram>s).mod_CarcaseBackwallProgram;
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
    if (this.mod_CarcaseEdgeColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseEdgeColor')) {
          let pv = <IModVar_mod_CarcaseEdgeColor>s;
          if (pv.mod_CarcaseEdgeColor !== undefined) {
            this.mod_CarcaseEdgeColor = (<IModVar_mod_CarcaseEdgeColor>s).mod_CarcaseEdgeColor;
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
    if (this.mod_SlopedCeilingConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SlopedCeilingConstruction')) {
          let pv = <IModVar_mod_SlopedCeilingConstruction>s;
          if (pv.mod_SlopedCeilingConstruction !== undefined) {
            this.mod_SlopedCeilingConstruction = (<IModVar_mod_SlopedCeilingConstruction>s).mod_SlopedCeilingConstruction;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_SlopeAngle === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_SlopeAngle')) {
          let pv = <IModVar_mod_SlopeAngle>s;
          if (pv.mod_SlopeAngle !== undefined) {
            this.mod_SlopeAngle = (<IModVar_mod_SlopeAngle>s).mod_SlopeAngle;
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
    if (this.mod_Height === undefined) {
      this.mod_Height = 720;
    }
    if (this.mod_Width === undefined) {
      this.mod_Width = 600;
    }
    if (this.mod_EdgeBackType === undefined) {
      this.mod_EdgeBackType = "NOE";
    }
    if (this.mod_EdgeLeftType === undefined) {
      this.mod_EdgeLeftType = "NOE";
    }
    if (this.mod_EdgeFrontType === undefined) {
      this.mod_EdgeFrontType = "NOE";
    }
    if (this.mod_EdgeRightType === undefined) {
      this.mod_EdgeRightType = "NOE";
    }
    if (this.mod_EdgeJointType === undefined) {
      this.mod_EdgeJointType = "VVVV";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_StorageunitBackwall01";
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
  #manufacturerDataCompletionInternal = mc_StorageunitBackwall01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_StorageunitBackwall01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_StorageunitBackwall01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_StorageunitBackwall01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseVisBack_matrix = VariantValidation.mod_CarcaseVisBack(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_CarcaseBackwallColor_matrix = VariantValidation.mod_CarcaseBackwallColor(this, this);
    this.mod_CarcaseBackwallProgram_matrix = VariantValidation.mod_CarcaseBackwallProgram(this, this);
    this.mod_CarcaseOutsideColor_matrix = VariantValidation.mod_CarcaseOutsideColor(this, this);
    this.mod_CarcaseEdgeColor_matrix = VariantValidation.mod_CarcaseEdgeColor(this, this);
    this.mod_CarcaseOutsideProgram_matrix = VariantValidation.mod_CarcaseOutsideProgram(this, this);
    this.mod_EdgeBackType_matrix = VariantValidation.mod_EdgeBackType(this, this);
    this.mod_EdgeLeftType_matrix = VariantValidation.mod_EdgeLeftType(this, this);
    this.mod_EdgeFrontType_matrix = VariantValidation.mod_EdgeFrontType(this, this);
    this.mod_EdgeRightType_matrix = VariantValidation.mod_EdgeRightType(this, this);
    this.mod_EdgeJointType_matrix = VariantValidation.mod_EdgeJointType(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this);
    this.mod_CarcaseConnectionLeftTop_matrix = VariantValidation.mod_CarcaseConnectionLeftTop(this, this);
    this.mod_CarcaseConnectionRightTop_matrix = VariantValidation.mod_CarcaseConnectionRightTop(this, this);
    this.mod_SlopedCeilingConstruction_matrix = VariantValidation.mod_SlopedCeilingConstruction(this, this);
    this.mod_SlopeAngle_matrix = VariantValidation.mod_SlopeAngle(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
  }
  addpart_Backwall(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Backwall_PartVarsWritable {
    var c = new P_part_Backwall(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_StorageunitBackwall01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_StorageunitBackwall01_NonNull implements cbp_mc_StorageunitBackwall01, adc_mc_StorageunitBackwall01 ,IPartParentsNonNull_mc_StorageunitBackwall01 {
  constructor(parent: OD_M_mc_StorageunitBackwall01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_StorageunitBackwall01;

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
  #createBuildPlanInternal = mc_StorageunitBackwall01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_StorageunitBackwall01_afterDataCompletion;
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
  parent: IModParents_mc_Storageunit01;
  addpart_Backwall(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Backwall_PartVarsWritable {
    return this.#internalParent.addpart_Backwall(x, y, z, dimx, dimy, dimz);
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseVisBack(): boolean  {
    return this.#internalParent.mod_CarcaseVisBack!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_CarcaseBackwallColor(): string  {
    return this.#internalParent.mod_CarcaseBackwallColor!;
  }
  get mod_CarcaseBackwallColor_matrix(): IMatrix_mod_CarcaseBackwallColor {
    return this.#internalParent.mod_CarcaseBackwallColor_matrix!;
  }
  get mod_CarcaseBackwallProgram(): string  {
    return this.#internalParent.mod_CarcaseBackwallProgram!;
  }
  get mod_CarcaseBackwallProgram_matrix(): IMatrix_mod_CarcaseBackwallProgram {
    return this.#internalParent.mod_CarcaseBackwallProgram_matrix!;
  }
  get mod_CarcaseOutsideColor(): string  {
    return this.#internalParent.mod_CarcaseOutsideColor!;
  }
  get mod_CarcaseOutsideColor_matrix(): IMatrix_mod_CarcaseOutsideColor {
    return this.#internalParent.mod_CarcaseOutsideColor_matrix!;
  }
  get mod_CarcaseEdgeColor(): string  {
    return this.#internalParent.mod_CarcaseEdgeColor!;
  }
  get mod_CarcaseOutsideProgram(): string  {
    return this.#internalParent.mod_CarcaseOutsideProgram!;
  }
  get mod_CarcaseOutsideProgram_matrix(): IMatrix_mod_CarcaseOutsideProgram {
    return this.#internalParent.mod_CarcaseOutsideProgram_matrix!;
  }
  get mod_EdgeBackType(): string  {
    return this.#internalParent.mod_EdgeBackType!;
  }
  get mod_EdgeLeftType(): string  {
    return this.#internalParent.mod_EdgeLeftType!;
  }
  get mod_EdgeFrontType(): string  {
    return this.#internalParent.mod_EdgeFrontType!;
  }
  get mod_EdgeRightType(): string  {
    return this.#internalParent.mod_EdgeRightType!;
  }
  get mod_EdgeJointType(): string  {
    return this.#internalParent.mod_EdgeJointType!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_CarcaseProgram(): string  {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_CarcaseConnectionLeftTop(): string  {
    return this.#internalParent.mod_CarcaseConnectionLeftTop!;
  }
  get mod_CarcaseConnectionRightTop(): string  {
    return this.#internalParent.mod_CarcaseConnectionRightTop!;
  }
  get mod_SlopedCeilingConstruction(): string  {
    return this.#internalParent.mod_SlopedCeilingConstruction!;
  }
  get mod_SlopeAngle(): number  {
    return this.#internalParent.mod_SlopeAngle!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
}

