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
import { IP_part_Shelfbtm_PartVarsWritable, P_part_Shelfbtm } from '../parts/part_Shelfbtm'
import { IModuleNonNull_mc_StorageunitShelfbtm01,IModParents_mc_StorageunitShelfbtm01,IPartParentsNonNull_mc_StorageunitShelfbtm01} from '../mod-interfaces'
import {IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcaseVisBtm,IModVarNonNull_mod_CarcaseVisBtm,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_CarcaseColor,IModVarNonNull_mod_CarcaseColor,IModVar_mod_CarcaseOutsideColor,IModVarNonNull_mod_CarcaseOutsideColor,IModVar_mod_CarcaseEdgeBackColor,IModVarNonNull_mod_CarcaseEdgeBackColor,IModVar_mod_CarcaseEdgeColor,IModVarNonNull_mod_CarcaseEdgeColor,IModVar_mod_CarcaseEdgeFrontColor,IModVarNonNull_mod_CarcaseEdgeFrontColor,IModVar_mod_CarcaseProgram,IModVarNonNull_mod_CarcaseProgram,IModVar_mod_CarcaseOutsideProgram,IModVarNonNull_mod_CarcaseOutsideProgram,IModVar_mod_EdgeLeftType,IModVarNonNull_mod_EdgeLeftType,IModVar_mod_EdgeFrontType,IModVarNonNull_mod_EdgeFrontType,IModVar_mod_EdgeBackType,IModVarNonNull_mod_EdgeBackType,IModVar_mod_EdgeRightType,IModVarNonNull_mod_EdgeRightType,IModVar_mod_EdgeJointType,IModVarNonNull_mod_EdgeJointType,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_CarcaseConnectionLeftBtm,IModVarNonNull_mod_CarcaseConnectionLeftBtm,IModVar_mod_CarcaseConnectionRightBtm,IModVarNonNull_mod_CarcaseConnectionRightBtm,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_HardwareColor,IModVarNonNull_mod_HardwareColor,IModVar_mod_ParentName,IModVarNonNull_mod_ParentName,IModVar_mod_PartName,IModVarNonNull_mod_PartName,IModVar_mod_CarcasePartConnectionBtmVert,IModVarNonNull_mod_CarcasePartConnectionBtmVert,IModVar_mod_FittingConnectionLeftBtm,IModVarNonNull_mod_FittingConnectionLeftBtm,IModVar_mod_FittingConnectionRightBtm,IModVarNonNull_mod_FittingConnectionRightBtm,IModVar_mod_FittingConnectionBtmVert,IModVarNonNull_mod_FittingConnectionBtmVert,IModVar_mod_SlopeAngle,IModVarNonNull_mod_SlopeAngle,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseId, IMatrix_mod_CarcaseVisBtm, IMatrix_mod_Depth, IMatrix_mod_Height, IMatrix_mod_Width, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseOutsideColor, IMatrix_mod_CarcaseEdgeBackColor, IMatrix_mod_CarcaseEdgeColor, IMatrix_mod_CarcaseEdgeFrontColor, IMatrix_mod_CarcaseProgram, IMatrix_mod_CarcaseOutsideProgram, IMatrix_mod_EdgeLeftType, IMatrix_mod_EdgeFrontType, IMatrix_mod_EdgeBackType, IMatrix_mod_EdgeRightType, IMatrix_mod_EdgeJointType, IMatrix_mod_ModuleName, IMatrix_mod_CarcaseConnectionLeftBtm, IMatrix_mod_CarcaseConnectionRightBtm, IMatrix_mod_TypeElement, IMatrix_mod_HardwareColor, IMatrix_mod_ParentName, IMatrix_mod_PartName, IMatrix_mod_CarcasePartConnectionBtmVert, IMatrix_mod_FittingConnectionLeftBtm, IMatrix_mod_FittingConnectionRightBtm, IMatrix_mod_FittingConnectionBtmVert, IMatrix_mod_SlopeAngle, IMatrix_mod_GrainLogic} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_Shelfbtm } from '../part-add-interfaces';
import { mc_StorageunitShelfbtm01_createBuildPlan, mc_StorageunitShelfbtm01_afterDataCompletion, mc_StorageunitShelfbtm01_manufacturerDataCompletion } from '../../modules/mc_StorageunitShelfbtm01';

export interface cbp_mc_StorageunitShelfbtm01 extends IModBaseProp
, IPartAdd_part_Shelfbtm, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseVisBtm, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_EdgeLeftType, IModVarNonNull_mod_EdgeFrontType, IModVarNonNull_mod_EdgeBackType, IModVarNonNull_mod_EdgeRightType, IModVarNonNull_mod_EdgeJointType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseConnectionLeftBtm, IModVarNonNull_mod_CarcaseConnectionRightBtm, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PartName, IModVarNonNull_mod_CarcasePartConnectionBtmVert, IModVarNonNull_mod_FittingConnectionLeftBtm, IModVarNonNull_mod_FittingConnectionRightBtm, IModVarNonNull_mod_FittingConnectionBtmVert, IModVarNonNull_mod_SlopeAngle, IModVarNonNull_mod_GrainLogic {
  parent: IModParents_mc_Storageunit01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_StorageunitShelfbtm01 extends IModBaseProp
, IModVar_mod_CarcaseId, IModVar_mod_CarcaseVisBtm, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_Width, IModVar_mod_CarcaseColor, IModVar_mod_CarcaseOutsideColor, IModVar_mod_CarcaseEdgeBackColor, IModVar_mod_CarcaseEdgeColor, IModVar_mod_CarcaseEdgeFrontColor, IModVar_mod_CarcaseProgram, IModVar_mod_CarcaseOutsideProgram, IModVar_mod_EdgeLeftType, IModVar_mod_EdgeFrontType, IModVar_mod_EdgeBackType, IModVar_mod_EdgeRightType, IModVar_mod_EdgeJointType, IModVar_mod_ModuleName, IModVar_mod_CarcaseConnectionLeftBtm, IModVar_mod_CarcaseConnectionRightBtm, IModVar_mod_TypeElement, IModVar_mod_HardwareColor, IModVar_mod_ParentName, IModVar_mod_PartName, IModVar_mod_CarcasePartConnectionBtmVert, IModVar_mod_FittingConnectionLeftBtm, IModVar_mod_FittingConnectionRightBtm, IModVar_mod_FittingConnectionBtmVert, IModVar_mod_SlopeAngle, IModVar_mod_GrainLogic {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_StorageunitShelfbtm01;
  parent: IModParents_mc_Storageunit01;
}

export interface adc_mc_StorageunitShelfbtm01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcaseVisBtm, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_Width, IModVarNonNull_mod_CarcaseColor, IModVarNonNull_mod_CarcaseOutsideColor, IModVarNonNull_mod_CarcaseEdgeBackColor, IModVarNonNull_mod_CarcaseEdgeColor, IModVarNonNull_mod_CarcaseEdgeFrontColor, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_CarcaseOutsideProgram, IModVarNonNull_mod_EdgeLeftType, IModVarNonNull_mod_EdgeFrontType, IModVarNonNull_mod_EdgeBackType, IModVarNonNull_mod_EdgeRightType, IModVarNonNull_mod_EdgeJointType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_CarcaseConnectionLeftBtm, IModVarNonNull_mod_CarcaseConnectionRightBtm, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PartName, IModVarNonNull_mod_CarcasePartConnectionBtmVert, IModVarNonNull_mod_FittingConnectionLeftBtm, IModVarNonNull_mod_FittingConnectionRightBtm, IModVarNonNull_mod_FittingConnectionBtmVert, IModVarNonNull_mod_SlopeAngle, IModVarNonNull_mod_GrainLogic {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_StorageunitShelfbtm01 extends OD_Base  implements dc_mc_StorageunitShelfbtm01
,IModParents_mc_StorageunitShelfbtm01
,IModVar_mod_CarcaseId,IModVar_mod_CarcaseVisBtm,IModVar_mod_Depth,IModVar_mod_Height,IModVar_mod_Width,IModVar_mod_CarcaseColor,IModVar_mod_CarcaseOutsideColor,IModVar_mod_CarcaseEdgeBackColor,IModVar_mod_CarcaseEdgeColor,IModVar_mod_CarcaseEdgeFrontColor,IModVar_mod_CarcaseProgram,IModVar_mod_CarcaseOutsideProgram,IModVar_mod_EdgeLeftType,IModVar_mod_EdgeFrontType,IModVar_mod_EdgeBackType,IModVar_mod_EdgeRightType,IModVar_mod_EdgeJointType,IModVar_mod_ModuleName,IModVar_mod_CarcaseConnectionLeftBtm,IModVar_mod_CarcaseConnectionRightBtm,IModVar_mod_TypeElement,IModVar_mod_HardwareColor,IModVar_mod_ParentName,IModVar_mod_PartName,IModVar_mod_CarcasePartConnectionBtmVert,IModVar_mod_FittingConnectionLeftBtm,IModVar_mod_FittingConnectionRightBtm,IModVar_mod_FittingConnectionBtmVert,IModVar_mod_SlopeAngle,IModVar_mod_GrainLogic
 {
  constructor(parent: IModParents_mc_Storageunit01, manufacturerMode?:boolean) {
    super('mc_StorageunitShelfbtm01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_StorageunitShelfbtm01_NonNull(this);
  }
  parent: IModParents_mc_Storageunit01;
  _selfNonNull: OD_M_mc_StorageunitShelfbtm01_NonNull;

  override variants:string[] = ['mod_CarcaseId','mod_CarcaseVisBtm','mod_Depth','mod_Height','mod_Width','mod_CarcaseColor','mod_CarcaseOutsideColor','mod_CarcaseEdgeBackColor','mod_CarcaseEdgeColor','mod_CarcaseEdgeFrontColor','mod_CarcaseProgram','mod_CarcaseOutsideProgram','mod_EdgeLeftType','mod_EdgeFrontType','mod_EdgeBackType','mod_EdgeRightType','mod_EdgeJointType','mod_ModuleName','mod_CarcaseConnectionLeftBtm','mod_CarcaseConnectionRightBtm','mod_TypeElement','mod_HardwareColor','mod_ParentName','mod_PartName','mod_CarcasePartConnectionBtmVert','mod_FittingConnectionLeftBtm','mod_FittingConnectionRightBtm','mod_FittingConnectionBtmVert','mod_SlopeAngle','mod_GrainLogic',];
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
  #mod_CarcaseVisBtm?: boolean;
  get mod_CarcaseVisBtm(): boolean | undefined { return this.#mod_CarcaseVisBtm}
  set mod_CarcaseVisBtm(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CarcaseVisBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CarcaseVisBtm === value) return;
    this.#mod_CarcaseVisBtm = value;
  }

  mod_CarcaseVisBtm_matrix?: IMatrix_mod_CarcaseVisBtm;
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
  #mod_PartName?: string;
  get mod_PartName(): string | undefined { return this.#mod_PartName}
  set mod_PartName(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PartName' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PartName === value) return;
    this.#mod_PartName = value;
  }

  mod_PartName_matrix?: IMatrix_mod_PartName;
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
  #mod_FittingConnectionLeftBtm?: string;
  get mod_FittingConnectionLeftBtm(): string | undefined { return this.#mod_FittingConnectionLeftBtm}
  set mod_FittingConnectionLeftBtm(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FittingConnectionLeftBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FittingConnectionLeftBtm === value) return;
    this.#mod_FittingConnectionLeftBtm = value;
  }

  mod_FittingConnectionLeftBtm_matrix?: IMatrix_mod_FittingConnectionLeftBtm;
  #mod_FittingConnectionRightBtm?: string;
  get mod_FittingConnectionRightBtm(): string | undefined { return this.#mod_FittingConnectionRightBtm}
  set mod_FittingConnectionRightBtm(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FittingConnectionRightBtm' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FittingConnectionRightBtm === value) return;
    this.#mod_FittingConnectionRightBtm = value;
  }

  mod_FittingConnectionRightBtm_matrix?: IMatrix_mod_FittingConnectionRightBtm;
  #mod_FittingConnectionBtmVert?: string;
  get mod_FittingConnectionBtmVert(): string | undefined { return this.#mod_FittingConnectionBtmVert}
  set mod_FittingConnectionBtmVert(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FittingConnectionBtmVert' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FittingConnectionBtmVert === value) return;
    this.#mod_FittingConnectionBtmVert = value;
  }

  mod_FittingConnectionBtmVert_matrix?: IMatrix_mod_FittingConnectionBtmVert;
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
  res.set('mod_CarcaseVisBtm', this.mod_CarcaseVisBtm);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_CarcaseColor', this.mod_CarcaseColor);
  res.set('mod_CarcaseOutsideColor', this.mod_CarcaseOutsideColor);
  res.set('mod_CarcaseEdgeBackColor', this.mod_CarcaseEdgeBackColor);
  res.set('mod_CarcaseEdgeColor', this.mod_CarcaseEdgeColor);
  res.set('mod_CarcaseEdgeFrontColor', this.mod_CarcaseEdgeFrontColor);
  res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
  res.set('mod_CarcaseOutsideProgram', this.mod_CarcaseOutsideProgram);
  res.set('mod_EdgeLeftType', this.mod_EdgeLeftType);
  res.set('mod_EdgeFrontType', this.mod_EdgeFrontType);
  res.set('mod_EdgeBackType', this.mod_EdgeBackType);
  res.set('mod_EdgeRightType', this.mod_EdgeRightType);
  res.set('mod_EdgeJointType', this.mod_EdgeJointType);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_CarcaseConnectionLeftBtm', this.mod_CarcaseConnectionLeftBtm);
  res.set('mod_CarcaseConnectionRightBtm', this.mod_CarcaseConnectionRightBtm);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_HardwareColor', this.mod_HardwareColor);
  res.set('mod_ParentName', this.mod_ParentName);
  res.set('mod_PartName', this.mod_PartName);
  res.set('mod_CarcasePartConnectionBtmVert', this.mod_CarcasePartConnectionBtmVert);
  res.set('mod_FittingConnectionLeftBtm', this.mod_FittingConnectionLeftBtm);
  res.set('mod_FittingConnectionRightBtm', this.mod_FittingConnectionRightBtm);
  res.set('mod_FittingConnectionBtmVert', this.mod_FittingConnectionBtmVert);
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseVisBtm');
    const val = _toBoolean(json['attributes']['mod_CarcaseVisBtm'], 'mod_CarcaseVisBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseVisBtm = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeLeftType');
    const val = _toString(json['attributes']['mod_EdgeLeftType'], 'mod_EdgeLeftType');
    internal_leaveValidateVariant();
    this.mod_EdgeLeftType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeFrontType');
    const val = _toString(json['attributes']['mod_EdgeFrontType'], 'mod_EdgeFrontType');
    internal_leaveValidateVariant();
    this.mod_EdgeFrontType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_EdgeBackType');
    const val = _toString(json['attributes']['mod_EdgeBackType'], 'mod_EdgeBackType');
    internal_leaveValidateVariant();
    this.mod_EdgeBackType = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionLeftBtm');
    const val = _toString(json['attributes']['mod_CarcaseConnectionLeftBtm'], 'mod_CarcaseConnectionLeftBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionLeftBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseConnectionRightBtm');
    const val = _toString(json['attributes']['mod_CarcaseConnectionRightBtm'], 'mod_CarcaseConnectionRightBtm');
    internal_leaveValidateVariant();
    this.mod_CarcaseConnectionRightBtm = val; }
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PartName');
    const val = _toString(json['attributes']['mod_PartName'], 'mod_PartName');
    internal_leaveValidateVariant();
    this.mod_PartName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcasePartConnectionBtmVert');
    const val = _toString(json['attributes']['mod_CarcasePartConnectionBtmVert'], 'mod_CarcasePartConnectionBtmVert');
    internal_leaveValidateVariant();
    this.mod_CarcasePartConnectionBtmVert = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FittingConnectionLeftBtm');
    const val = _toString(json['attributes']['mod_FittingConnectionLeftBtm'], 'mod_FittingConnectionLeftBtm');
    internal_leaveValidateVariant();
    this.mod_FittingConnectionLeftBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FittingConnectionRightBtm');
    const val = _toString(json['attributes']['mod_FittingConnectionRightBtm'], 'mod_FittingConnectionRightBtm');
    internal_leaveValidateVariant();
    this.mod_FittingConnectionRightBtm = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FittingConnectionBtmVert');
    const val = _toString(json['attributes']['mod_FittingConnectionBtmVert'], 'mod_FittingConnectionBtmVert');
    internal_leaveValidateVariant();
    this.mod_FittingConnectionBtmVert = val; }
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
    if (this.mod_CarcaseVisBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CarcaseVisBtm')) {
          let pv = <IModVar_mod_CarcaseVisBtm>s;
          if (pv.mod_CarcaseVisBtm !== undefined) {
            this.mod_CarcaseVisBtm = (<IModVar_mod_CarcaseVisBtm>s).mod_CarcaseVisBtm;
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
    if (this.mod_FittingConnectionLeftBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FittingConnectionLeftBtm')) {
          let pv = <IModVar_mod_FittingConnectionLeftBtm>s;
          if (pv.mod_FittingConnectionLeftBtm !== undefined) {
            this.mod_FittingConnectionLeftBtm = (<IModVar_mod_FittingConnectionLeftBtm>s).mod_FittingConnectionLeftBtm;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FittingConnectionRightBtm === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FittingConnectionRightBtm')) {
          let pv = <IModVar_mod_FittingConnectionRightBtm>s;
          if (pv.mod_FittingConnectionRightBtm !== undefined) {
            this.mod_FittingConnectionRightBtm = (<IModVar_mod_FittingConnectionRightBtm>s).mod_FittingConnectionRightBtm;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FittingConnectionBtmVert === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FittingConnectionBtmVert')) {
          let pv = <IModVar_mod_FittingConnectionBtmVert>s;
          if (pv.mod_FittingConnectionBtmVert !== undefined) {
            this.mod_FittingConnectionBtmVert = (<IModVar_mod_FittingConnectionBtmVert>s).mod_FittingConnectionBtmVert;
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
    if (this.mod_EdgeLeftType === undefined) {
      this.mod_EdgeLeftType = "NOE";
    }
    if (this.mod_EdgeFrontType === undefined) {
      this.mod_EdgeFrontType = "NOE";
    }
    if (this.mod_EdgeBackType === undefined) {
      this.mod_EdgeBackType = "NOE";
    }
    if (this.mod_EdgeRightType === undefined) {
      this.mod_EdgeRightType = "NOE";
    }
    if (this.mod_EdgeJointType === undefined) {
      this.mod_EdgeJointType = "VVVV";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_StorageunitShelfbtm01";
    }
    if (this.mod_PartName === undefined) {
      this.mod_PartName = "None";
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
  #manufacturerDataCompletionInternal = mc_StorageunitShelfbtm01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_StorageunitShelfbtm01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_StorageunitShelfbtm01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_StorageunitShelfbtm01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_CarcaseVisBtm_matrix = VariantValidation.mod_CarcaseVisBtm(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_CarcaseColor_matrix = VariantValidation.mod_CarcaseColor(this, this);
    this.mod_CarcaseOutsideColor_matrix = VariantValidation.mod_CarcaseOutsideColor(this, this);
    this.mod_CarcaseEdgeBackColor_matrix = VariantValidation.mod_CarcaseEdgeBackColor(this, this);
    this.mod_CarcaseEdgeColor_matrix = VariantValidation.mod_CarcaseEdgeColor(this, this);
    this.mod_CarcaseEdgeFrontColor_matrix = VariantValidation.mod_CarcaseEdgeFrontColor(this, this);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this);
    this.mod_CarcaseOutsideProgram_matrix = VariantValidation.mod_CarcaseOutsideProgram(this, this);
    this.mod_EdgeLeftType_matrix = VariantValidation.mod_EdgeLeftType(this, this);
    this.mod_EdgeFrontType_matrix = VariantValidation.mod_EdgeFrontType(this, this);
    this.mod_EdgeBackType_matrix = VariantValidation.mod_EdgeBackType(this, this);
    this.mod_EdgeRightType_matrix = VariantValidation.mod_EdgeRightType(this, this);
    this.mod_EdgeJointType_matrix = VariantValidation.mod_EdgeJointType(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_CarcaseConnectionLeftBtm_matrix = VariantValidation.mod_CarcaseConnectionLeftBtm(this, this);
    this.mod_CarcaseConnectionRightBtm_matrix = VariantValidation.mod_CarcaseConnectionRightBtm(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this);
    this.mod_PartName_matrix = VariantValidation.mod_PartName(this, this);
    this.mod_CarcasePartConnectionBtmVert_matrix = VariantValidation.mod_CarcasePartConnectionBtmVert(this, this);
    this.mod_FittingConnectionLeftBtm_matrix = VariantValidation.mod_FittingConnectionLeftBtm(this, this);
    this.mod_FittingConnectionRightBtm_matrix = VariantValidation.mod_FittingConnectionRightBtm(this, this);
    this.mod_FittingConnectionBtmVert_matrix = VariantValidation.mod_FittingConnectionBtmVert(this, this);
    this.mod_SlopeAngle_matrix = VariantValidation.mod_SlopeAngle(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
  }
  addpart_Shelfbtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelfbtm_PartVarsWritable {
    var c = new P_part_Shelfbtm(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_StorageunitShelfbtm01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_StorageunitShelfbtm01_NonNull implements cbp_mc_StorageunitShelfbtm01, adc_mc_StorageunitShelfbtm01 ,IPartParentsNonNull_mc_StorageunitShelfbtm01 {
  constructor(parent: OD_M_mc_StorageunitShelfbtm01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_StorageunitShelfbtm01;

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
  #createBuildPlanInternal = mc_StorageunitShelfbtm01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_StorageunitShelfbtm01_afterDataCompletion;
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
  addpart_Shelfbtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelfbtm_PartVarsWritable {
    return this.#internalParent.addpart_Shelfbtm(x, y, z, dimx, dimy, dimz);
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcaseVisBtm(): boolean  {
    return this.#internalParent.mod_CarcaseVisBtm!;
  }
  get mod_CarcaseVisBtm_matrix(): IMatrix_mod_CarcaseVisBtm {
    return this.#internalParent.mod_CarcaseVisBtm_matrix!;
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
  get mod_EdgeLeftType(): string  {
    return this.#internalParent.mod_EdgeLeftType!;
  }
  get mod_EdgeFrontType(): string  {
    return this.#internalParent.mod_EdgeFrontType!;
  }
  get mod_EdgeBackType(): string  {
    return this.#internalParent.mod_EdgeBackType!;
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
  get mod_CarcaseConnectionLeftBtm(): string  {
    return this.#internalParent.mod_CarcaseConnectionLeftBtm!;
  }
  get mod_CarcaseConnectionRightBtm(): string  {
    return this.#internalParent.mod_CarcaseConnectionRightBtm!;
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
  get mod_PartName(): string  {
    return this.#internalParent.mod_PartName!;
  }
  get mod_CarcasePartConnectionBtmVert(): string  {
    return this.#internalParent.mod_CarcasePartConnectionBtmVert!;
  }
  get mod_FittingConnectionLeftBtm(): string  {
    return this.#internalParent.mod_FittingConnectionLeftBtm!;
  }
  get mod_FittingConnectionRightBtm(): string  {
    return this.#internalParent.mod_FittingConnectionRightBtm!;
  }
  get mod_FittingConnectionBtmVert(): string  {
    return this.#internalParent.mod_FittingConnectionBtmVert!;
  }
  get mod_SlopeAngle(): number  {
    return this.#internalParent.mod_SlopeAngle!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
}

