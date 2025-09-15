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
import { IP_part_Shelftop_PartVarsWritable, P_part_Shelftop } from '../parts/part_Shelftop'
import { IP_part_Railhortopfront_PartVarsWritable, P_part_Railhortopfront } from '../parts/part_Railhortopfront'
import { IP_part_Railhortopback_PartVarsWritable, P_part_Railhortopback } from '../parts/part_Railhortopback'
import { IP_part_Railverttopfront_PartVarsWritable, P_part_Railverttopfront } from '../parts/part_Railverttopfront'
import { IP_part_Railverttopback_PartVarsWritable, P_part_Railverttopback } from '../parts/part_Railverttopback'
import { IModuleNonNull_mc_StorageunitShelftop01,IModParents_mc_StorageunitShelftop01,IPartParentsNonNull_mc_StorageunitShelftop01} from '../mod-interfaces'
import {IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseVisTop,IModVarNonNull_mod_CarcaseVisTop,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_ShelftopConstruction,IModVarNonNull_mod_ShelftopConstruction,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_CarcaseColor,IModVarNonNull_mod_CarcaseColor,IModVar_mod_CarcaseOutsideColor,IModVarNonNull_mod_CarcaseOutsideColor,IModVar_mod_CarcaseEdgeBackColor,IModVarNonNull_mod_CarcaseEdgeBackColor,IModVar_mod_CarcaseEdgeColor,IModVarNonNull_mod_CarcaseEdgeColor,IModVar_mod_CarcaseEdgeFrontColor,IModVarNonNull_mod_CarcaseEdgeFrontColor,IModVar_mod_CarcaseProgram,IModVarNonNull_mod_CarcaseProgram,IModVar_mod_CarcaseOutsideProgram,IModVarNonNull_mod_CarcaseOutsideProgram,IModVar_mod_EdgeFrontType,IModVarNonNull_mod_EdgeFrontType,IModVar_mod_EdgeBackType,IModVarNonNull_mod_EdgeBackType,IModVar_mod_EdgeLeftType,IModVarNonNull_mod_EdgeLeftType,IModVar_mod_EdgeRightType,IModVarNonNull_mod_EdgeRightType,IModVar_mod_EdgeJointType,IModVarNonNull_mod_EdgeJointType,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_CarcaseConnectionLeftTop,IModVarNonNull_mod_CarcaseConnectionLeftTop,IModVar_mod_CarcaseConnectionRightTop,IModVarNonNull_mod_CarcaseConnectionRightTop,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_HardwareColor,IModVarNonNull_mod_HardwareColor,IModVar_mod_ParentName,IModVarNonNull_mod_ParentName,IModVar_mod_FittingConnectionLeftTop,IModVarNonNull_mod_FittingConnectionLeftTop,IModVar_mod_FittingConnectionRightTop,IModVarNonNull_mod_FittingConnectionRightTop,IModVar_mod_FittingConnectionTopVert,IModVarNonNull_mod_FittingConnectionTopVert,IModVar_mod_CarcasePartConnectionTopVert,IModVarNonNull_mod_CarcasePartConnectionTopVert,IModVar_mod_PartInfo,IModVarNonNull_mod_PartInfo,IModVar_mod_SlopeAngle,IModVarNonNull_mod_SlopeAngle,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseVisTop, IMatrix_mod_Depth, IMatrix_mod_Height, IMatrix_mod_ShelftopConstruction, IMatrix_mod_Width, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseOutsideColor, IMatrix_mod_CarcaseEdgeBackColor, IMatrix_mod_CarcaseEdgeColor, IMatrix_mod_CarcaseEdgeFrontColor, IMatrix_mod_CarcaseProgram, IMatrix_mod_CarcaseOutsideProgram, IMatrix_mod_EdgeFrontType, IMatrix_mod_EdgeBackType, IMatrix_mod_EdgeLeftType, IMatrix_mod_EdgeRightType, IMatrix_mod_EdgeJointType, IMatrix_mod_ModuleName, IMatrix_mod_CarcaseConnectionLeftTop, IMatrix_mod_CarcaseConnectionRightTop, IMatrix_mod_TypeElement, IMatrix_mod_HardwareColor, IMatrix_mod_ParentName, IMatrix_mod_FittingConnectionLeftTop, IMatrix_mod_FittingConnectionRightTop, IMatrix_mod_FittingConnectionTopVert, IMatrix_mod_CarcasePartConnectionTopVert, IMatrix_mod_PartInfo, IMatrix_mod_SlopeAngle, IMatrix_mod_GrainLogic} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_Shelftop, IPartAdd_part_Railhortopfront, IPartAdd_part_Railhortopback, IPartAdd_part_Railverttopfront, IPartAdd_part_Railverttopback } from '../part-add-interfaces';
import { mc_StorageunitShelftop01_createBuildPlan, mc_StorageunitShelftop01_afterDataCompletion, mc_StorageunitShelftop01_manufacturerDataCompletion } from '../../modules/mc_StorageunitShelftop01';

export interface cbp_mc_StorageunitShelftop01 extends IModBaseProp
, IPartAdd_part_Shelftop, IPartAdd_part_Railhortopfront, IPartAdd_part_Railhortopback, IPartAdd_part_Railverttopfront, IPartAdd_part_Railverttopback, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseVisTop, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_ShelftopConstruction, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_EdgeFrontType, IModVarNonNull_mod_EdgeBackType, IModVarNonNull_mod_EdgeLeftType, IModVarNonNull_mod_EdgeRightType, IModVarNonNull_mod_EdgeJointType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseConnectionLeftTop, IModVarNonNull_mod_CarcaseConnectionRightTop, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_FittingConnectionLeftTop, IModVarNonNull_mod_FittingConnectionRightTop, IModVarNonNull_mod_FittingConnectionTopVert, IModVarNonNull_mod_CarcasePartConnectionTopVert, IModVarNonNull_mod_PartInfo, IModVarNonNull_mod_SlopeAngle, IModVarNonNull_mod_GrainLogic {
  parent: IModParents_mc_Storageunit01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_StorageunitShelftop01 extends IModBaseProp
, IModVar_mod_CarcaseId, IModVar_mod_CarcaseVisTop, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_ShelftopConstruction, IModVar_mod_Width, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseOutsideColor, IModVar_mod_CarcaseEdgeBackColor, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseProgram, IModVar_mod_CarcaseOutsideProgram, IModVar_mod_EdgeFrontType, IModVar_mod_EdgeBackType, IModVar_mod_EdgeLeftType, IModVar_mod_EdgeRightType, IModVar_mod_EdgeJointType, IModVar_mod_ModuleName, IModVar_mod_CarcaseConnectionLeftTop, IModVar_mod_CarcaseConnectionRightTop, IModVar_mod_TypeElement, IModVar_mod_HardwareColor, IModVar_mod_ParentName, IModVar_mod_FittingConnectionLeftTop, IModVar_mod_FittingConnectionRightTop, IModVar_mod_FittingConnectionTopVert, IModVar_mod_CarcasePartConnectionTopVert, IModVar_mod_PartInfo, IModVar_mod_SlopeAngle, IModVar_mod_GrainLogic {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_StorageunitShelftop01;
  parent: IModParents_mc_Storageunit01;
}

export interface adc_mc_StorageunitShelftop01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseVisTop, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_ShelftopConstruction, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_EdgeFrontType, IModVarNonNull_mod_EdgeBackType, IModVarNonNull_mod_EdgeLeftType, IModVarNonNull_mod_EdgeRightType, IModVarNonNull_mod_EdgeJointType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseConnectionLeftTop, IModVarNonNull_mod_CarcaseConnectionRightTop, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_FittingConnectionLeftTop, IModVarNonNull_mod_FittingConnectionRightTop, IModVarNonNull_mod_FittingConnectionTopVert, IModVarNonNull_mod_CarcasePartConnectionTopVert, IModVarNonNull_mod_PartInfo, IModVarNonNull_mod_SlopeAngle, IModVarNonNull_mod_GrainLogic {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_StorageunitShelftop01 extends OD_Base  implements dc_mc_StorageunitShelftop01
,IModParents_mc_StorageunitShelftop01
,IModVar_mod_CarcaseId,IModVar_mod_CarcaseVisTop,IModVar_mod_Depth,IModVar_mod_Height,IModVar_mod_ShelftopConstruction,IModVar_mod_Width,IModVar_mod_CarcaseColor,IModVar_mod_CarcaseOutsideColor,IModVar_mod_CarcaseEdgeBackColor,IModVar_mod_CarcaseEdgeColor,IModVar_mod_CarcaseEdgeFrontColor,IModVar_mod_CarcaseProgram,IModVar_mod_CarcaseOutsideProgram,IModVar_mod_EdgeFrontType,IModVar_mod_EdgeBackType,IModVar_mod_EdgeLeftType,IModVar_mod_EdgeRightType,IModVar_mod_EdgeJointType,IModVar_mod_ModuleName,IModVar_mod_CarcaseConnectionLeftTop,IModVar_mod_CarcaseConnectionRightTop,IModVar_mod_TypeElement,IModVar_mod_HardwareColor,IModVar_mod_ParentName,IModVar_mod_FittingConnectionLeftTop,IModVar_mod_FittingConnectionRightTop,IModVar_mod_FittingConnectionTopVert,IModVar_mod_CarcasePartConnectionTopVert,IModVar_mod_PartInfo,IModVar_mod_SlopeAngle,IModVar_mod_GrainLogic
 {
  constructor(parent: IModParents_mc_Storageunit01, manufacturerMode?:boolean) {
    super('mc_StorageunitShelftop01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_StorageunitShelftop01_NonNull(this);
  }
  parent: IModParents_mc_Storageunit01;
  _selfNonNull: OD_M_mc_StorageunitShelftop01_NonNull;

  override variants:string[] = ['mod_CarcaseId','mod_CarcaseVisTop','mod_Depth','mod_Height','mod_ShelftopConstruction','mod_Width','mod_CarcaseColor','mod_CarcaseOutsideColor','mod_CarcaseEdgeBackColor','mod_CarcaseEdgeColor','mod_CarcaseEdgeFrontColor','mod_CarcaseProgram','mod_CarcaseOutsideProgram','mod_EdgeFrontType','mod_EdgeBackType','mod_EdgeLeftType','mod_EdgeRightType','mod_EdgeJointType','mod_ModuleName','mod_CarcaseConnectionLeftTop','mod_CarcaseConnectionRightTop','mod_TypeElement','mod_HardwareColor','mod_ParentName','mod_FittingConnectionLeftTop','mod_FittingConnectionRightTop','mod_FittingConnectionTopVert','mod_CarcasePartConnectionTopVert','mod_PartInfo','mod_SlopeAngle','mod_GrainLogic',];
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
  #mod_CarcaseVisTop?: boolean;
  get mod_CarcaseVisTop(): boolean | undefined { return this.#mod_CarcaseVisTop}
  set mod_CarcaseVisTop(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseVisTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseVisTop === value) return;
    this.#mod_CarcaseVisTop = value;
  }

  mod_CarcaseVisTop_matrix?: IMatrix_mod_CarcaseVisTop;
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
  #mod_ShelftopConstruction?: string;
  get mod_ShelftopConstruction(): string | undefined { return this.#mod_ShelftopConstruction}
  set mod_ShelftopConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_ShelftopConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_ShelftopConstruction === value) return;
    this.#mod_ShelftopConstruction = value;
  }

  mod_ShelftopConstruction_matrix?: IMatrix_mod_ShelftopConstruction;
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
  #mod_CarcaseEdgeBackColor?: string;
  get mod_CarcaseEdgeBackColor(): string | undefined { return this.#mod_CarcaseEdgeBackColor}
  set mod_CarcaseEdgeBackColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseEdgeBackColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseEdgeBackColor === value) return;
    this.#mod_CarcaseEdgeBackColor = value;
  }

  mod_CarcaseEdgeBackColor_matrix?: IMatrix_mod_CarcaseEdgeBackColor;
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
  #mod_CarcaseEdgeFrontColor?: string;
  get mod_CarcaseEdgeFrontColor(): string | undefined { return this.#mod_CarcaseEdgeFrontColor}
  set mod_CarcaseEdgeFrontColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseEdgeFrontColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseEdgeFrontColor === value) return;
    this.#mod_CarcaseEdgeFrontColor = value;
  }

  mod_CarcaseEdgeFrontColor_matrix?: IMatrix_mod_CarcaseEdgeFrontColor;
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
  #mod_FittingConnectionLeftTop?: string;
  get mod_FittingConnectionLeftTop(): string | undefined { return this.#mod_FittingConnectionLeftTop}
  set mod_FittingConnectionLeftTop(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FittingConnectionLeftTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FittingConnectionLeftTop === value) return;
    this.#mod_FittingConnectionLeftTop = value;
  }

  mod_FittingConnectionLeftTop_matrix?: IMatrix_mod_FittingConnectionLeftTop;
  #mod_FittingConnectionRightTop?: string;
  get mod_FittingConnectionRightTop(): string | undefined { return this.#mod_FittingConnectionRightTop}
  set mod_FittingConnectionRightTop(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FittingConnectionRightTop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FittingConnectionRightTop === value) return;
    this.#mod_FittingConnectionRightTop = value;
  }

  mod_FittingConnectionRightTop_matrix?: IMatrix_mod_FittingConnectionRightTop;
  #mod_FittingConnectionTopVert?: string;
  get mod_FittingConnectionTopVert(): string | undefined { return this.#mod_FittingConnectionTopVert}
  set mod_FittingConnectionTopVert(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FittingConnectionTopVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FittingConnectionTopVert === value) return;
    this.#mod_FittingConnectionTopVert = value;
  }

  mod_FittingConnectionTopVert_matrix?: IMatrix_mod_FittingConnectionTopVert;
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
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcaseVisTop', this.mod_CarcaseVisTop);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_ShelftopConstruction', this.mod_ShelftopConstruction);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_CarcaseColor', this.mod_CarcaseColor);
  res.set('mod_CarcaseOutsideColor', this.mod_CarcaseOutsideColor);
  res.set('mod_CarcaseEdgeBackColor', this.mod_CarcaseEdgeBackColor);
  res.set('mod_CarcaseEdgeColor', this.mod_CarcaseEdgeColor);
  res.set('mod_CarcaseEdgeFrontColor', this.mod_CarcaseEdgeFrontColor);
  res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
  res.set('mod_CarcaseOutsideProgram', this.mod_CarcaseOutsideProgram);
  res.set('mod_EdgeFrontType', this.mod_EdgeFrontType);
  res.set('mod_EdgeBackType', this.mod_EdgeBackType);
  res.set('mod_EdgeLeftType', this.mod_EdgeLeftType);
  res.set('mod_EdgeRightType', this.mod_EdgeRightType);
  res.set('mod_EdgeJointType', this.mod_EdgeJointType);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_CarcaseConnectionLeftTop', this.mod_CarcaseConnectionLeftTop);
  res.set('mod_CarcaseConnectionRightTop', this.mod_CarcaseConnectionRightTop);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_HardwareColor', this.mod_HardwareColor);
  res.set('mod_ParentName', this.mod_ParentName);
  res.set('mod_FittingConnectionLeftTop', this.mod_FittingConnectionLeftTop);
  res.set('mod_FittingConnectionRightTop', this.mod_FittingConnectionRightTop);
  res.set('mod_FittingConnectionTopVert', this.mod_FittingConnectionTopVert);
  res.set('mod_CarcasePartConnectionTopVert', this.mod_CarcasePartConnectionTopVert);
  res.set('mod_PartInfo', this.mod_PartInfo);
  res.set('mod_SlopeAngle', this.mod_SlopeAngle);
  res.set('mod_GrainLogic', this.mod_GrainLogic);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseVisTop');
    const val = _toBoolean(json['attributes']['mod_CarcaseVisTop'], 'mod_CarcaseVisTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseVisTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ShelftopConstruction');
    const val = _toString(json['attributes']['mod_ShelftopConstruction'], 'mod_ShelftopConstruction');
    internal_leaveValidateVariant();
    this.mod_ShelftopConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseColor');
    const val = _toString(json['attributes']['mod_CarcaseColor'], 'mod_CarcaseColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseOutsideColor');
    const val = _toString(json['attributes']['mod_CarcaseOutsideColor'], 'mod_CarcaseOutsideColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseOutsideColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeBackColor');
    const val = _toString(json['attributes']['mod_CarcaseEdgeBackColor'], 'mod_CarcaseEdgeBackColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseEdgeBackColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeColor');
    const val = _toString(json['attributes']['mod_CarcaseEdgeColor'], 'mod_CarcaseEdgeColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseEdgeColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseEdgeFrontColor');
    const val = _toString(json['attributes']['mod_CarcaseEdgeFrontColor'], 'mod_CarcaseEdgeFrontColor');
    internal_leaveValidateVariant();
    this.mod_CarcaseEdgeFrontColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
    const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseOutsideProgram');
    const val = _toString(json['attributes']['mod_CarcaseOutsideProgram'], 'mod_CarcaseOutsideProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseOutsideProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeFrontType');
    const val = _toString(json['attributes']['mod_EdgeFrontType'], 'mod_EdgeFrontType');
    internal_leaveValidateVariant();
    this.mod_EdgeFrontType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeBackType');
    const val = _toString(json['attributes']['mod_EdgeBackType'], 'mod_EdgeBackType');
    internal_leaveValidateVariant();
    this.mod_EdgeBackType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeLeftType');
    const val = _toString(json['attributes']['mod_EdgeLeftType'], 'mod_EdgeLeftType');
    internal_leaveValidateVariant();
    this.mod_EdgeLeftType = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionLeftTop');
    const val = _toString(json['attributes']['mod_CarcaseConnectionLeftTop'], 'mod_CarcaseConnectionLeftTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionLeftTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionRightTop');
    const val = _toString(json['attributes']['mod_CarcaseConnectionRightTop'], 'mod_CarcaseConnectionRightTop');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionRightTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareColor');
    const val = _toString(json['attributes']['mod_HardwareColor'], 'mod_HardwareColor');
    internal_leaveValidateVariant();
    this.mod_HardwareColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
    const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
    internal_leaveValidateVariant();
    this.mod_ParentName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FittingConnectionLeftTop');
    const val = _toString(json['attributes']['mod_FittingConnectionLeftTop'], 'mod_FittingConnectionLeftTop');
    internal_leaveValidateVariant();
    this.mod_FittingConnectionLeftTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FittingConnectionRightTop');
    const val = _toString(json['attributes']['mod_FittingConnectionRightTop'], 'mod_FittingConnectionRightTop');
    internal_leaveValidateVariant();
    this.mod_FittingConnectionRightTop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FittingConnectionTopVert');
    const val = _toString(json['attributes']['mod_FittingConnectionTopVert'], 'mod_FittingConnectionTopVert');
    internal_leaveValidateVariant();
    this.mod_FittingConnectionTopVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionTopVert');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionTopVert'], 'mod_CarcasePartConnectionTopVert');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionTopVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PartInfo');
    const val = _toString(json['attributes']['mod_PartInfo'], 'mod_PartInfo');
    internal_leaveValidateVariant();
    this.mod_PartInfo = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_SlopeAngle');
    const val = _toFloat(json['attributes']['mod_SlopeAngle'], 'mod_SlopeAngle');
    internal_leaveValidateVariant();
    this.mod_SlopeAngle = val; }
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
    if (this.mod_CarcaseVisTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseVisTop')) {
          let pv = <IModVar_mod_CarcaseVisTop>s;
          if (pv.mod_CarcaseVisTop !== undefined) {
            this.mod_CarcaseVisTop = (<IModVar_mod_CarcaseVisTop>s).mod_CarcaseVisTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_ShelftopConstruction === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ShelftopConstruction')) {
          let pv = <IModVar_mod_ShelftopConstruction>s;
          if (pv.mod_ShelftopConstruction !== undefined) {
            this.mod_ShelftopConstruction = (<IModVar_mod_ShelftopConstruction>s).mod_ShelftopConstruction;
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
    if (this.mod_CarcaseEdgeBackColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseEdgeBackColor')) {
          let pv = <IModVar_mod_CarcaseEdgeBackColor>s;
          if (pv.mod_CarcaseEdgeBackColor !== undefined) {
            this.mod_CarcaseEdgeBackColor = (<IModVar_mod_CarcaseEdgeBackColor>s).mod_CarcaseEdgeBackColor;
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
    if (this.mod_CarcaseEdgeFrontColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseEdgeFrontColor')) {
          let pv = <IModVar_mod_CarcaseEdgeFrontColor>s;
          if (pv.mod_CarcaseEdgeFrontColor !== undefined) {
            this.mod_CarcaseEdgeFrontColor = (<IModVar_mod_CarcaseEdgeFrontColor>s).mod_CarcaseEdgeFrontColor;
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
    if (this.mod_HardwareColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_HardwareColor')) {
          let pv = <IModVar_mod_HardwareColor>s;
          if (pv.mod_HardwareColor !== undefined) {
            this.mod_HardwareColor = (<IModVar_mod_HardwareColor>s).mod_HardwareColor;
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
    if (this.mod_FittingConnectionLeftTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FittingConnectionLeftTop')) {
          let pv = <IModVar_mod_FittingConnectionLeftTop>s;
          if (pv.mod_FittingConnectionLeftTop !== undefined) {
            this.mod_FittingConnectionLeftTop = (<IModVar_mod_FittingConnectionLeftTop>s).mod_FittingConnectionLeftTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FittingConnectionRightTop === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FittingConnectionRightTop')) {
          let pv = <IModVar_mod_FittingConnectionRightTop>s;
          if (pv.mod_FittingConnectionRightTop !== undefined) {
            this.mod_FittingConnectionRightTop = (<IModVar_mod_FittingConnectionRightTop>s).mod_FittingConnectionRightTop;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FittingConnectionTopVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FittingConnectionTopVert')) {
          let pv = <IModVar_mod_FittingConnectionTopVert>s;
          if (pv.mod_FittingConnectionTopVert !== undefined) {
            this.mod_FittingConnectionTopVert = (<IModVar_mod_FittingConnectionTopVert>s).mod_FittingConnectionTopVert;
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
    if (this.mod_EdgeFrontType === undefined) {
      this.mod_EdgeFrontType = "NOE";
    }
    if (this.mod_EdgeBackType === undefined) {
      this.mod_EdgeBackType = "NOE";
    }
    if (this.mod_EdgeLeftType === undefined) {
      this.mod_EdgeLeftType = "NOE";
    }
    if (this.mod_EdgeRightType === undefined) {
      this.mod_EdgeRightType = "NOE";
    }
    if (this.mod_EdgeJointType === undefined) {
      this.mod_EdgeJointType = "VVVV";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_StorageunitShelftop01";
    }
    if (this.mod_PartInfo === undefined) {
      this.mod_PartInfo = "part_Shelftop";
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
  #manufacturerDataCompletionInternal = mc_StorageunitShelftop01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_StorageunitShelftop01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_StorageunitShelftop01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_StorageunitShelftop01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseVisTop_matrix = VariantValidation.mod_CarcaseVisTop(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_ShelftopConstruction_matrix = VariantValidation.mod_ShelftopConstruction(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_CarcaseColor_matrix = VariantValidation.mod_CarcaseColor(this, this);
    this.mod_CarcaseOutsideColor_matrix = VariantValidation.mod_CarcaseOutsideColor(this, this);
    this.mod_CarcaseEdgeBackColor_matrix = VariantValidation.mod_CarcaseEdgeBackColor(this, this);
    this.mod_CarcaseEdgeColor_matrix = VariantValidation.mod_CarcaseEdgeColor(this, this);
    this.mod_CarcaseEdgeFrontColor_matrix = VariantValidation.mod_CarcaseEdgeFrontColor(this, this);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this);
    this.mod_CarcaseOutsideProgram_matrix = VariantValidation.mod_CarcaseOutsideProgram(this, this);
    this.mod_EdgeFrontType_matrix = VariantValidation.mod_EdgeFrontType(this, this);
    this.mod_EdgeBackType_matrix = VariantValidation.mod_EdgeBackType(this, this);
    this.mod_EdgeLeftType_matrix = VariantValidation.mod_EdgeLeftType(this, this);
    this.mod_EdgeRightType_matrix = VariantValidation.mod_EdgeRightType(this, this);
    this.mod_EdgeJointType_matrix = VariantValidation.mod_EdgeJointType(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_CarcaseConnectionLeftTop_matrix = VariantValidation.mod_CarcaseConnectionLeftTop(this, this);
    this.mod_CarcaseConnectionRightTop_matrix = VariantValidation.mod_CarcaseConnectionRightTop(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this);
    this.mod_FittingConnectionLeftTop_matrix = VariantValidation.mod_FittingConnectionLeftTop(this, this);
    this.mod_FittingConnectionRightTop_matrix = VariantValidation.mod_FittingConnectionRightTop(this, this);
    this.mod_FittingConnectionTopVert_matrix = VariantValidation.mod_FittingConnectionTopVert(this, this);
    this.mod_CarcasePartConnectionTopVert_matrix = VariantValidation.mod_CarcasePartConnectionTopVert(this, this);
    this.mod_PartInfo_matrix = VariantValidation.mod_PartInfo(this, this);
    this.mod_SlopeAngle_matrix = VariantValidation.mod_SlopeAngle(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
  }
  addpart_Shelftop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelftop_PartVarsWritable {
    var c = new P_part_Shelftop(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_Railhortopfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railhortopfront_PartVarsWritable {
    var c = new P_part_Railhortopfront(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_Railhortopback(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railhortopback_PartVarsWritable {
    var c = new P_part_Railhortopback(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_Railverttopfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railverttopfront_PartVarsWritable {
    var c = new P_part_Railverttopfront(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_Railverttopback(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railverttopback_PartVarsWritable {
    var c = new P_part_Railverttopback(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_StorageunitShelftop01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_StorageunitShelftop01_NonNull implements cbp_mc_StorageunitShelftop01, adc_mc_StorageunitShelftop01 ,IPartParentsNonNull_mc_StorageunitShelftop01 {
  constructor(parent: OD_M_mc_StorageunitShelftop01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_StorageunitShelftop01;

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
  #createBuildPlanInternal = mc_StorageunitShelftop01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_StorageunitShelftop01_afterDataCompletion;
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
  addpart_Shelftop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelftop_PartVarsWritable {
    return this.#internalParent.addpart_Shelftop(x, y, z, dimx, dimy, dimz);
  }
  addpart_Railhortopfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railhortopfront_PartVarsWritable {
    return this.#internalParent.addpart_Railhortopfront(x, y, z, dimx, dimy, dimz);
  }
  addpart_Railhortopback(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railhortopback_PartVarsWritable {
    return this.#internalParent.addpart_Railhortopback(x, y, z, dimx, dimy, dimz);
  }
  addpart_Railverttopfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railverttopfront_PartVarsWritable {
    return this.#internalParent.addpart_Railverttopfront(x, y, z, dimx, dimy, dimz);
  }
  addpart_Railverttopback(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railverttopback_PartVarsWritable {
    return this.#internalParent.addpart_Railverttopback(x, y, z, dimx, dimy, dimz);
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseVisTop(): boolean  {
    return this.#internalParent.mod_CarcaseVisTop!;
  }
  get mod_CarcaseVisTop_matrix(): IMatrix_mod_CarcaseVisTop {
    return this.#internalParent.mod_CarcaseVisTop_matrix!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_ShelftopConstruction(): string  {
    return this.#internalParent.mod_ShelftopConstruction!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_CarcaseColor(): string  {
    return this.#internalParent.mod_CarcaseColor!;
  }
  get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor {
    return this.#internalParent.mod_CarcaseColor_matrix!;
  }
  get mod_CarcaseOutsideColor(): string  {
    return this.#internalParent.mod_CarcaseOutsideColor!;
  }
  get mod_CarcaseOutsideColor_matrix(): IMatrix_mod_CarcaseOutsideColor {
    return this.#internalParent.mod_CarcaseOutsideColor_matrix!;
  }
  get mod_CarcaseEdgeBackColor(): string  {
    return this.#internalParent.mod_CarcaseEdgeBackColor!;
  }
  get mod_CarcaseEdgeColor(): string  {
    return this.#internalParent.mod_CarcaseEdgeColor!;
  }
  get mod_CarcaseEdgeFrontColor(): string  {
    return this.#internalParent.mod_CarcaseEdgeFrontColor!;
  }
  get mod_CarcaseProgram(): string  {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_CarcaseOutsideProgram(): string  {
    return this.#internalParent.mod_CarcaseOutsideProgram!;
  }
  get mod_CarcaseOutsideProgram_matrix(): IMatrix_mod_CarcaseOutsideProgram {
    return this.#internalParent.mod_CarcaseOutsideProgram_matrix!;
  }
  get mod_EdgeFrontType(): string  {
    return this.#internalParent.mod_EdgeFrontType!;
  }
  get mod_EdgeBackType(): string  {
    return this.#internalParent.mod_EdgeBackType!;
  }
  get mod_EdgeLeftType(): string  {
    return this.#internalParent.mod_EdgeLeftType!;
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
  get mod_CarcaseConnectionLeftTop(): string  {
    return this.#internalParent.mod_CarcaseConnectionLeftTop!;
  }
  get mod_CarcaseConnectionRightTop(): string  {
    return this.#internalParent.mod_CarcaseConnectionRightTop!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_HardwareColor(): string  {
    return this.#internalParent.mod_HardwareColor!;
  }
  get mod_ParentName(): string  {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_FittingConnectionLeftTop(): string  {
    return this.#internalParent.mod_FittingConnectionLeftTop!;
  }
  get mod_FittingConnectionRightTop(): string  {
    return this.#internalParent.mod_FittingConnectionRightTop!;
  }
  get mod_FittingConnectionTopVert(): string  {
    return this.#internalParent.mod_FittingConnectionTopVert!;
  }
  get mod_CarcasePartConnectionTopVert(): string  {
    return this.#internalParent.mod_CarcasePartConnectionTopVert!;
  }
  get mod_PartInfo(): string  {
    return this.#internalParent.mod_PartInfo!;
  }
  get mod_SlopeAngle(): number  {
    return this.#internalParent.mod_SlopeAngle!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
}

