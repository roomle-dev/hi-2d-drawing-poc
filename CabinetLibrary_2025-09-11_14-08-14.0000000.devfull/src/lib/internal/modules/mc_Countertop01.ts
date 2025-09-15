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
import { IModParents_mr_Countertop } from '../mod-interfaces'
import { IP_part_Countertop_PartVarsWritable, P_part_Countertop } from '../parts/part_Countertop'
import { IP_part_CountertopGroup_PartVarsWritable, P_part_CountertopGroup } from '../parts/part_CountertopGroup'
import { IModuleNonNull_mc_Countertop01,IModParents_mc_Countertop01,IPartParentsNonNull_mc_Countertop01} from '../mod-interfaces'
import {IModVar_mod_CountertopLeftEndType,IModVarNonNull_mod_CountertopLeftEndType,IModVar_mod_CountertopColor,IModVarNonNull_mod_CountertopColor,IModVar_mod_CountertopEdgeBackType,IModVarNonNull_mod_CountertopEdgeBackType,IModVar_mod_CountertopEdgeFrontType,IModVarNonNull_mod_CountertopEdgeFrontType,IModVar_mod_CountertopEdgeLeftType,IModVarNonNull_mod_CountertopEdgeLeftType,IModVar_mod_CountertopEdgeRightType,IModVarNonNull_mod_CountertopEdgeRightType,IModVar_mod_CountertopId,IModVarNonNull_mod_CountertopId,IModVar_mod_CountertopDepth,IModVarNonNull_mod_CountertopDepth,IModVar_mod_CountertopThk,IModVarNonNull_mod_CountertopThk,IModVar_mod_CountertopRightEndType,IModVarNonNull_mod_CountertopRightEndType,IModVar_mod_CountertopWidth,IModVarNonNull_mod_CountertopWidth,IModVar_mod_CountertopConnectionLengthLeft,IModVarNonNull_mod_CountertopConnectionLengthLeft,IModVar_mod_CountertopOverhangLeft,IModVarNonNull_mod_CountertopOverhangLeft,IModVar_mod_CountertopOverhangRight,IModVarNonNull_mod_CountertopOverhangRight,IModVar_mod_CountertopConnectionLengthRight,IModVarNonNull_mod_CountertopConnectionLengthRight,IModVar_mod_CountertopConnectionOversize,IModVarNonNull_mod_CountertopConnectionOversize,IModVar_mod_CountertopInfo,IModVarNonNull_mod_CountertopInfo,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic,IModVar_mod_CountertopProgram,IModVarNonNull_mod_CountertopProgram} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CountertopLeftEndType, IMatrix_mod_CountertopColor, IMatrix_mod_CountertopEdgeBackType, IMatrix_mod_CountertopEdgeFrontType, IMatrix_mod_CountertopEdgeLeftType, IMatrix_mod_CountertopEdgeRightType, IMatrix_mod_CountertopId, IMatrix_mod_CountertopDepth, IMatrix_mod_CountertopThk, IMatrix_mod_CountertopRightEndType, IMatrix_mod_CountertopWidth, IMatrix_mod_CountertopConnectionLengthLeft, IMatrix_mod_CountertopOverhangLeft, IMatrix_mod_CountertopOverhangRight, IMatrix_mod_CountertopConnectionLengthRight, IMatrix_mod_CountertopConnectionOversize, IMatrix_mod_GrainLogic, IMatrix_mod_CountertopProgram} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_Countertop, IPartAdd_part_CountertopGroup } from '../part-add-interfaces';
import { mc_Countertop01_createBuildPlan, mc_Countertop01_afterDataCompletion, mc_Countertop01_manufacturerDataCompletion } from '../../modules/mc_Countertop01';

export interface cbp_mc_Countertop01 extends IModBaseProp
, IPartAdd_part_Countertop, IPartAdd_part_CountertopGroup, IModVarNonNull_mod_CountertopLeftEndType, IModVarNonNull_mod_CountertopColor, IModVarNonNull_mod_CountertopEdgeBackType, IModVarNonNull_mod_CountertopEdgeFrontType, IModVarNonNull_mod_CountertopEdgeLeftType, IModVarNonNull_mod_CountertopEdgeRightType, IModVarNonNull_mod_CountertopId, IModVarNonNull_mod_CountertopDepth, IModVarNonNull_mod_CountertopThk, IModVarNonNull_mod_CountertopRightEndType, IModVarNonNull_mod_CountertopWidth, IModVarNonNull_mod_CountertopConnectionLengthLeft, IModVarNonNull_mod_CountertopOverhangLeft, IModVarNonNull_mod_CountertopOverhangRight, IModVarNonNull_mod_CountertopConnectionLengthRight, IModVarNonNull_mod_CountertopConnectionOversize, IModVarNonNull_mod_CountertopInfo, IModVarNonNull_mod_GrainLogic, IModVarNonNull_mod_CountertopProgram {
  parent: IModParents_mr_Countertop;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_Countertop01 extends IModBaseProp
, IModVar_mod_CountertopLeftEndType, IModVar_mod_CountertopColor, IModVar_mod_CountertopEdgeBackType, IModVar_mod_CountertopEdgeFrontType, IModVar_mod_CountertopEdgeLeftType, IModVar_mod_CountertopEdgeRightType, IModVar_mod_CountertopId, IModVar_mod_CountertopDepth, IModVar_mod_CountertopThk, IModVar_mod_CountertopRightEndType, IModVar_mod_CountertopWidth, IModVar_mod_CountertopConnectionLengthLeft, IModVar_mod_CountertopOverhangLeft, IModVar_mod_CountertopOverhangRight, IModVar_mod_CountertopConnectionLengthRight, IModVar_mod_CountertopConnectionOversize, IModVar_mod_CountertopInfo, IModVar_mod_GrainLogic, IModVar_mod_CountertopProgram {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_Countertop01;
  parent: IModParents_mr_Countertop;
}

export interface adc_mc_Countertop01 extends IModBaseProp
, IModVarNonNull_mod_CountertopLeftEndType, IModVarNonNull_mod_CountertopColor, IModVarNonNull_mod_CountertopEdgeBackType, IModVarNonNull_mod_CountertopEdgeFrontType, IModVarNonNull_mod_CountertopEdgeLeftType, IModVarNonNull_mod_CountertopEdgeRightType, IModVarNonNull_mod_CountertopId, IModVarNonNull_mod_CountertopDepth, IModVarNonNull_mod_CountertopThk, IModVarNonNull_mod_CountertopRightEndType, IModVarNonNull_mod_CountertopWidth, IModVarNonNull_mod_CountertopConnectionLengthLeft, IModVarNonNull_mod_CountertopOverhangLeft, IModVarNonNull_mod_CountertopOverhangRight, IModVarNonNull_mod_CountertopConnectionLengthRight, IModVarNonNull_mod_CountertopConnectionOversize, IModVarNonNull_mod_CountertopInfo, IModVarNonNull_mod_GrainLogic, IModVarNonNull_mod_CountertopProgram {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_Countertop01 extends OD_Base  implements dc_mc_Countertop01
,IModParents_mc_Countertop01
,IModVar_mod_CountertopLeftEndType,IModVar_mod_CountertopColor,IModVar_mod_CountertopEdgeBackType,IModVar_mod_CountertopEdgeFrontType,IModVar_mod_CountertopEdgeLeftType,IModVar_mod_CountertopEdgeRightType,IModVar_mod_CountertopId,IModVar_mod_CountertopDepth,IModVar_mod_CountertopThk,IModVar_mod_CountertopRightEndType,IModVar_mod_CountertopWidth,IModVar_mod_CountertopConnectionLengthLeft,IModVar_mod_CountertopOverhangLeft,IModVar_mod_CountertopOverhangRight,IModVar_mod_CountertopConnectionLengthRight,IModVar_mod_CountertopConnectionOversize,IModVar_mod_CountertopInfo,IModVar_mod_GrainLogic,IModVar_mod_CountertopProgram
 {
  constructor(parent: IModParents_mr_Countertop, manufacturerMode?:boolean) {
    super('mc_Countertop01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_Countertop01_NonNull(this);
  }
  parent: IModParents_mr_Countertop;
  _selfNonNull: OD_M_mc_Countertop01_NonNull;

  override variants:string[] = ['mod_CountertopLeftEndType','mod_CountertopColor','mod_CountertopEdgeBackType','mod_CountertopEdgeFrontType','mod_CountertopEdgeLeftType','mod_CountertopEdgeRightType','mod_CountertopId','mod_CountertopDepth','mod_CountertopThk','mod_CountertopRightEndType','mod_CountertopWidth','mod_CountertopConnectionLengthLeft','mod_CountertopOverhangLeft','mod_CountertopOverhangRight','mod_CountertopConnectionLengthRight','mod_CountertopConnectionOversize','mod_CountertopInfo','mod_GrainLogic','mod_CountertopProgram',];
  #mod_CountertopLeftEndType?: string;
  get mod_CountertopLeftEndType(): string | undefined { return this.#mod_CountertopLeftEndType}
  set mod_CountertopLeftEndType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopLeftEndType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopLeftEndType === value) return;
    this.#mod_CountertopLeftEndType = value;
  }

  mod_CountertopLeftEndType_matrix?: IMatrix_mod_CountertopLeftEndType;
  #mod_CountertopColor?: string;
  get mod_CountertopColor(): string | undefined { return this.#mod_CountertopColor}
  set mod_CountertopColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopColor === value) return;
    this.#mod_CountertopColor = value;
  }

  mod_CountertopColor_matrix?: IMatrix_mod_CountertopColor;
  #mod_CountertopEdgeBackType?: string;
  get mod_CountertopEdgeBackType(): string | undefined { return this.#mod_CountertopEdgeBackType}
  set mod_CountertopEdgeBackType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopEdgeBackType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopEdgeBackType === value) return;
    this.#mod_CountertopEdgeBackType = value;
  }

  mod_CountertopEdgeBackType_matrix?: IMatrix_mod_CountertopEdgeBackType;
  #mod_CountertopEdgeFrontType?: string;
  get mod_CountertopEdgeFrontType(): string | undefined { return this.#mod_CountertopEdgeFrontType}
  set mod_CountertopEdgeFrontType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopEdgeFrontType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopEdgeFrontType === value) return;
    this.#mod_CountertopEdgeFrontType = value;
  }

  mod_CountertopEdgeFrontType_matrix?: IMatrix_mod_CountertopEdgeFrontType;
  #mod_CountertopEdgeLeftType?: string;
  get mod_CountertopEdgeLeftType(): string | undefined { return this.#mod_CountertopEdgeLeftType}
  set mod_CountertopEdgeLeftType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopEdgeLeftType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopEdgeLeftType === value) return;
    this.#mod_CountertopEdgeLeftType = value;
  }

  mod_CountertopEdgeLeftType_matrix?: IMatrix_mod_CountertopEdgeLeftType;
  #mod_CountertopEdgeRightType?: string;
  get mod_CountertopEdgeRightType(): string | undefined { return this.#mod_CountertopEdgeRightType}
  set mod_CountertopEdgeRightType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopEdgeRightType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopEdgeRightType === value) return;
    this.#mod_CountertopEdgeRightType = value;
  }

  mod_CountertopEdgeRightType_matrix?: IMatrix_mod_CountertopEdgeRightType;
  #mod_CountertopId?: string;
  get mod_CountertopId(): string | undefined { return this.#mod_CountertopId}
  set mod_CountertopId(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopId' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopId === value) return;
    this.#mod_CountertopId = value;
  }

  mod_CountertopId_matrix?: IMatrix_mod_CountertopId;
  #mod_CountertopDepth?: number;
  get mod_CountertopDepth(): number | undefined { return this.#mod_CountertopDepth}
  set mod_CountertopDepth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopDepth === value) return;
    this.#mod_CountertopDepth = value;
  }

  mod_CountertopDepth_matrix?: IMatrix_mod_CountertopDepth;
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
  #mod_CountertopRightEndType?: string;
  get mod_CountertopRightEndType(): string | undefined { return this.#mod_CountertopRightEndType}
  set mod_CountertopRightEndType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopRightEndType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopRightEndType === value) return;
    this.#mod_CountertopRightEndType = value;
  }

  mod_CountertopRightEndType_matrix?: IMatrix_mod_CountertopRightEndType;
  #mod_CountertopWidth?: number;
  get mod_CountertopWidth(): number | undefined { return this.#mod_CountertopWidth}
  set mod_CountertopWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopWidth === value) return;
    this.#mod_CountertopWidth = value;
  }

  mod_CountertopWidth_matrix?: IMatrix_mod_CountertopWidth;
  #mod_CountertopConnectionLengthLeft?: number;
  get mod_CountertopConnectionLengthLeft(): number | undefined { return this.#mod_CountertopConnectionLengthLeft}
  set mod_CountertopConnectionLengthLeft(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopConnectionLengthLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopConnectionLengthLeft === value) return;
    this.#mod_CountertopConnectionLengthLeft = value;
  }

  mod_CountertopConnectionLengthLeft_matrix?: IMatrix_mod_CountertopConnectionLengthLeft;
  #mod_CountertopOverhangLeft?: number;
  get mod_CountertopOverhangLeft(): number | undefined { return this.#mod_CountertopOverhangLeft}
  set mod_CountertopOverhangLeft(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopOverhangLeft' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopOverhangLeft === value) return;
    this.#mod_CountertopOverhangLeft = value;
  }

  mod_CountertopOverhangLeft_matrix?: IMatrix_mod_CountertopOverhangLeft;
  #mod_CountertopOverhangRight?: number;
  get mod_CountertopOverhangRight(): number | undefined { return this.#mod_CountertopOverhangRight}
  set mod_CountertopOverhangRight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopOverhangRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopOverhangRight === value) return;
    this.#mod_CountertopOverhangRight = value;
  }

  mod_CountertopOverhangRight_matrix?: IMatrix_mod_CountertopOverhangRight;
  #mod_CountertopConnectionLengthRight?: number;
  get mod_CountertopConnectionLengthRight(): number | undefined { return this.#mod_CountertopConnectionLengthRight}
  set mod_CountertopConnectionLengthRight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopConnectionLengthRight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopConnectionLengthRight === value) return;
    this.#mod_CountertopConnectionLengthRight = value;
  }

  mod_CountertopConnectionLengthRight_matrix?: IMatrix_mod_CountertopConnectionLengthRight;
  #mod_CountertopConnectionOversize?: number;
  get mod_CountertopConnectionOversize(): number | undefined { return this.#mod_CountertopConnectionOversize}
  set mod_CountertopConnectionOversize(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopConnectionOversize' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopConnectionOversize === value) return;
    this.#mod_CountertopConnectionOversize = value;
  }

  mod_CountertopConnectionOversize_matrix?: IMatrix_mod_CountertopConnectionOversize;
  #mod_CountertopInfo: string[] = [];
  get mod_CountertopInfo(): string[] { return this.#mod_CountertopInfo;}
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
  #mod_CountertopProgram?: string;
  get mod_CountertopProgram(): string | undefined { return this.#mod_CountertopProgram}
  set mod_CountertopProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CountertopProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CountertopProgram === value) return;
    this.#mod_CountertopProgram = value;
  }

  mod_CountertopProgram_matrix?: IMatrix_mod_CountertopProgram;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_CountertopLeftEndType', this.mod_CountertopLeftEndType);
  res.set('mod_CountertopColor', this.mod_CountertopColor);
  res.set('mod_CountertopEdgeBackType', this.mod_CountertopEdgeBackType);
  res.set('mod_CountertopEdgeFrontType', this.mod_CountertopEdgeFrontType);
  res.set('mod_CountertopEdgeLeftType', this.mod_CountertopEdgeLeftType);
  res.set('mod_CountertopEdgeRightType', this.mod_CountertopEdgeRightType);
  res.set('mod_CountertopId', this.mod_CountertopId);
  res.set('mod_CountertopDepth', this.mod_CountertopDepth);
  res.set('mod_CountertopThk', this.mod_CountertopThk);
  res.set('mod_CountertopRightEndType', this.mod_CountertopRightEndType);
  res.set('mod_CountertopWidth', this.mod_CountertopWidth);
  res.set('mod_CountertopConnectionLengthLeft', this.mod_CountertopConnectionLengthLeft);
  res.set('mod_CountertopOverhangLeft', this.mod_CountertopOverhangLeft);
  res.set('mod_CountertopOverhangRight', this.mod_CountertopOverhangRight);
  res.set('mod_CountertopConnectionLengthRight', this.mod_CountertopConnectionLengthRight);
  res.set('mod_CountertopConnectionOversize', this.mod_CountertopConnectionOversize);
  res.set('mod_CountertopInfo', JSON.stringify(this.mod_CountertopInfo));
  res.set('mod_GrainLogic', this.mod_GrainLogic);
  res.set('mod_CountertopProgram', this.mod_CountertopProgram);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopLeftEndType');
    const val = _toString(json['attributes']['mod_CountertopLeftEndType'], 'mod_CountertopLeftEndType');
    internal_leaveValidateVariant();
    this.mod_CountertopLeftEndType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopColor');
    const val = _toString(json['attributes']['mod_CountertopColor'], 'mod_CountertopColor');
    internal_leaveValidateVariant();
    this.mod_CountertopColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopEdgeBackType');
    const val = _toString(json['attributes']['mod_CountertopEdgeBackType'], 'mod_CountertopEdgeBackType');
    internal_leaveValidateVariant();
    this.mod_CountertopEdgeBackType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopEdgeFrontType');
    const val = _toString(json['attributes']['mod_CountertopEdgeFrontType'], 'mod_CountertopEdgeFrontType');
    internal_leaveValidateVariant();
    this.mod_CountertopEdgeFrontType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopEdgeLeftType');
    const val = _toString(json['attributes']['mod_CountertopEdgeLeftType'], 'mod_CountertopEdgeLeftType');
    internal_leaveValidateVariant();
    this.mod_CountertopEdgeLeftType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopEdgeRightType');
    const val = _toString(json['attributes']['mod_CountertopEdgeRightType'], 'mod_CountertopEdgeRightType');
    internal_leaveValidateVariant();
    this.mod_CountertopEdgeRightType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopId');
    const val = _toString(json['attributes']['mod_CountertopId'], 'mod_CountertopId');
    internal_leaveValidateVariant();
    this.mod_CountertopId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopDepth');
    const val = _toFloat(json['attributes']['mod_CountertopDepth'], 'mod_CountertopDepth');
    internal_leaveValidateVariant();
    this.mod_CountertopDepth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopThk');
    const val = _toFloat(json['attributes']['mod_CountertopThk'], 'mod_CountertopThk');
    internal_leaveValidateVariant();
    this.mod_CountertopThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopRightEndType');
    const val = _toString(json['attributes']['mod_CountertopRightEndType'], 'mod_CountertopRightEndType');
    internal_leaveValidateVariant();
    this.mod_CountertopRightEndType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopWidth');
    const val = _toFloat(json['attributes']['mod_CountertopWidth'], 'mod_CountertopWidth');
    internal_leaveValidateVariant();
    this.mod_CountertopWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopConnectionLengthLeft');
    const val = _toFloat(json['attributes']['mod_CountertopConnectionLengthLeft'], 'mod_CountertopConnectionLengthLeft');
    internal_leaveValidateVariant();
    this.mod_CountertopConnectionLengthLeft = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopOverhangLeft');
    const val = _toFloat(json['attributes']['mod_CountertopOverhangLeft'], 'mod_CountertopOverhangLeft');
    internal_leaveValidateVariant();
    this.mod_CountertopOverhangLeft = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopOverhangRight');
    const val = _toFloat(json['attributes']['mod_CountertopOverhangRight'], 'mod_CountertopOverhangRight');
    internal_leaveValidateVariant();
    this.mod_CountertopOverhangRight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopConnectionLengthRight');
    const val = _toFloat(json['attributes']['mod_CountertopConnectionLengthRight'], 'mod_CountertopConnectionLengthRight');
    internal_leaveValidateVariant();
    this.mod_CountertopConnectionLengthRight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopConnectionOversize');
    const val = _toFloat(json['attributes']['mod_CountertopConnectionOversize'], 'mod_CountertopConnectionOversize');
    internal_leaveValidateVariant();
    this.mod_CountertopConnectionOversize = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_GrainLogic');
    const val = _toString(json['attributes']['mod_GrainLogic'], 'mod_GrainLogic');
    internal_leaveValidateVariant();
    this.mod_GrainLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CountertopProgram');
    const val = _toString(json['attributes']['mod_CountertopProgram'], 'mod_CountertopProgram');
    internal_leaveValidateVariant();
    this.mod_CountertopProgram = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    if (this.mod_CountertopColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopColor')) {
          let pv = <IModVar_mod_CountertopColor>s;
          if (pv.mod_CountertopColor !== undefined) {
            this.mod_CountertopColor = (<IModVar_mod_CountertopColor>s).mod_CountertopColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopEdgeBackType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopEdgeBackType')) {
          let pv = <IModVar_mod_CountertopEdgeBackType>s;
          if (pv.mod_CountertopEdgeBackType !== undefined) {
            this.mod_CountertopEdgeBackType = (<IModVar_mod_CountertopEdgeBackType>s).mod_CountertopEdgeBackType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopEdgeFrontType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopEdgeFrontType')) {
          let pv = <IModVar_mod_CountertopEdgeFrontType>s;
          if (pv.mod_CountertopEdgeFrontType !== undefined) {
            this.mod_CountertopEdgeFrontType = (<IModVar_mod_CountertopEdgeFrontType>s).mod_CountertopEdgeFrontType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopEdgeLeftType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopEdgeLeftType')) {
          let pv = <IModVar_mod_CountertopEdgeLeftType>s;
          if (pv.mod_CountertopEdgeLeftType !== undefined) {
            this.mod_CountertopEdgeLeftType = (<IModVar_mod_CountertopEdgeLeftType>s).mod_CountertopEdgeLeftType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopEdgeRightType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopEdgeRightType')) {
          let pv = <IModVar_mod_CountertopEdgeRightType>s;
          if (pv.mod_CountertopEdgeRightType !== undefined) {
            this.mod_CountertopEdgeRightType = (<IModVar_mod_CountertopEdgeRightType>s).mod_CountertopEdgeRightType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopId === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopId')) {
          let pv = <IModVar_mod_CountertopId>s;
          if (pv.mod_CountertopId !== undefined) {
            this.mod_CountertopId = (<IModVar_mod_CountertopId>s).mod_CountertopId;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopDepth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopDepth')) {
          let pv = <IModVar_mod_CountertopDepth>s;
          if (pv.mod_CountertopDepth !== undefined) {
            this.mod_CountertopDepth = (<IModVar_mod_CountertopDepth>s).mod_CountertopDepth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopThk === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopThk')) {
          let pv = <IModVar_mod_CountertopThk>s;
          if (pv.mod_CountertopThk !== undefined) {
            this.mod_CountertopThk = (<IModVar_mod_CountertopThk>s).mod_CountertopThk;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopWidth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopWidth')) {
          let pv = <IModVar_mod_CountertopWidth>s;
          if (pv.mod_CountertopWidth !== undefined) {
            this.mod_CountertopWidth = (<IModVar_mod_CountertopWidth>s).mod_CountertopWidth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopConnectionLengthLeft === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopConnectionLengthLeft')) {
          let pv = <IModVar_mod_CountertopConnectionLengthLeft>s;
          if (pv.mod_CountertopConnectionLengthLeft !== undefined) {
            this.mod_CountertopConnectionLengthLeft = (<IModVar_mod_CountertopConnectionLengthLeft>s).mod_CountertopConnectionLengthLeft;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopOverhangLeft === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopOverhangLeft')) {
          let pv = <IModVar_mod_CountertopOverhangLeft>s;
          if (pv.mod_CountertopOverhangLeft !== undefined) {
            this.mod_CountertopOverhangLeft = (<IModVar_mod_CountertopOverhangLeft>s).mod_CountertopOverhangLeft;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopOverhangRight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopOverhangRight')) {
          let pv = <IModVar_mod_CountertopOverhangRight>s;
          if (pv.mod_CountertopOverhangRight !== undefined) {
            this.mod_CountertopOverhangRight = (<IModVar_mod_CountertopOverhangRight>s).mod_CountertopOverhangRight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopConnectionLengthRight === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopConnectionLengthRight')) {
          let pv = <IModVar_mod_CountertopConnectionLengthRight>s;
          if (pv.mod_CountertopConnectionLengthRight !== undefined) {
            this.mod_CountertopConnectionLengthRight = (<IModVar_mod_CountertopConnectionLengthRight>s).mod_CountertopConnectionLengthRight;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_CountertopConnectionOversize === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopConnectionOversize')) {
          let pv = <IModVar_mod_CountertopConnectionOversize>s;
          if (pv.mod_CountertopConnectionOversize !== undefined) {
            this.mod_CountertopConnectionOversize = (<IModVar_mod_CountertopConnectionOversize>s).mod_CountertopConnectionOversize;
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
    if (this.mod_CountertopProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_CountertopProgram')) {
          let pv = <IModVar_mod_CountertopProgram>s;
          if (pv.mod_CountertopProgram !== undefined) {
            this.mod_CountertopProgram = (<IModVar_mod_CountertopProgram>s).mod_CountertopProgram;
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
    if (this.mod_CountertopLeftEndType === undefined) {
      this.mod_CountertopLeftEndType = "StraightUnfinished";
    }
    if (this.mod_CountertopRightEndType === undefined) {
      this.mod_CountertopRightEndType = "StraightUnfinished";
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
  #manufacturerDataCompletionInternal = mc_Countertop01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_Countertop01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_Countertop01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_Countertop01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_CountertopLeftEndType_matrix = VariantValidation.mod_CountertopLeftEndType(this, this);
    this.mod_CountertopColor_matrix = VariantValidation.mod_CountertopColor(this, this);
    this.mod_CountertopEdgeBackType_matrix = VariantValidation.mod_CountertopEdgeBackType(this, this);
    this.mod_CountertopEdgeFrontType_matrix = VariantValidation.mod_CountertopEdgeFrontType(this, this);
    this.mod_CountertopEdgeLeftType_matrix = VariantValidation.mod_CountertopEdgeLeftType(this, this);
    this.mod_CountertopEdgeRightType_matrix = VariantValidation.mod_CountertopEdgeRightType(this, this);
    this.mod_CountertopId_matrix = VariantValidation.mod_CountertopId(this, this);
    this.mod_CountertopDepth_matrix = VariantValidation.mod_CountertopDepth(this, this);
    this.mod_CountertopThk_matrix = VariantValidation.mod_CountertopThk(this, this);
    this.mod_CountertopRightEndType_matrix = VariantValidation.mod_CountertopRightEndType(this, this);
    this.mod_CountertopWidth_matrix = VariantValidation.mod_CountertopWidth(this, this);
    this.mod_CountertopConnectionLengthLeft_matrix = VariantValidation.mod_CountertopConnectionLengthLeft(this, this);
    this.mod_CountertopOverhangLeft_matrix = VariantValidation.mod_CountertopOverhangLeft(this, this);
    this.mod_CountertopOverhangRight_matrix = VariantValidation.mod_CountertopOverhangRight(this, this);
    this.mod_CountertopConnectionLengthRight_matrix = VariantValidation.mod_CountertopConnectionLengthRight(this, this);
    this.mod_CountertopConnectionOversize_matrix = VariantValidation.mod_CountertopConnectionOversize(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
    this.mod_CountertopProgram_matrix = VariantValidation.mod_CountertopProgram(this, this);
  }
  addpart_Countertop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Countertop_PartVarsWritable {
    var c = new P_part_Countertop(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_CountertopGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CountertopGroup_PartVarsWritable {
    var c = new P_part_CountertopGroup(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_Countertop01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_Countertop01_NonNull implements cbp_mc_Countertop01, adc_mc_Countertop01 ,IPartParentsNonNull_mc_Countertop01 {
  constructor(parent: OD_M_mc_Countertop01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_Countertop01;

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
  #createBuildPlanInternal = mc_Countertop01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_Countertop01_afterDataCompletion;
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
  parent: IModParents_mr_Countertop;
  addpart_Countertop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Countertop_PartVarsWritable {
    return this.#internalParent.addpart_Countertop(x, y, z, dimx, dimy, dimz);
  }
  addpart_CountertopGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CountertopGroup_PartVarsWritable {
    return this.#internalParent.addpart_CountertopGroup(x, y, z, dimx, dimy, dimz);
  }
  get mod_CountertopLeftEndType(): string  {
    return this.#internalParent.mod_CountertopLeftEndType!;
  }
  get mod_CountertopColor(): string  {
    return this.#internalParent.mod_CountertopColor!;
  }
  get mod_CountertopColor_matrix(): IMatrix_mod_CountertopColor {
    return this.#internalParent.mod_CountertopColor_matrix!;
  }
  get mod_CountertopEdgeBackType(): string  {
    return this.#internalParent.mod_CountertopEdgeBackType!;
  }
  get mod_CountertopEdgeFrontType(): string  {
    return this.#internalParent.mod_CountertopEdgeFrontType!;
  }
  get mod_CountertopEdgeLeftType(): string  {
    return this.#internalParent.mod_CountertopEdgeLeftType!;
  }
  get mod_CountertopEdgeRightType(): string  {
    return this.#internalParent.mod_CountertopEdgeRightType!;
  }
  get mod_CountertopId(): string  {
    return this.#internalParent.mod_CountertopId!;
  }
  get mod_CountertopDepth(): number  {
    return this.#internalParent.mod_CountertopDepth!;
  }
  get mod_CountertopThk(): number  {
    return this.#internalParent.mod_CountertopThk!;
  }
  get mod_CountertopRightEndType(): string  {
    return this.#internalParent.mod_CountertopRightEndType!;
  }
  get mod_CountertopWidth(): number  {
    return this.#internalParent.mod_CountertopWidth!;
  }
  get mod_CountertopConnectionLengthLeft(): number  {
    return this.#internalParent.mod_CountertopConnectionLengthLeft!;
  }
  get mod_CountertopOverhangLeft(): number  {
    return this.#internalParent.mod_CountertopOverhangLeft!;
  }
  get mod_CountertopOverhangRight(): number  {
    return this.#internalParent.mod_CountertopOverhangRight!;
  }
  get mod_CountertopConnectionLengthRight(): number  {
    return this.#internalParent.mod_CountertopConnectionLengthRight!;
  }
  get mod_CountertopConnectionOversize(): number  {
    return this.#internalParent.mod_CountertopConnectionOversize!;
  }
  get mod_CountertopInfo(): string [] {
    return this.#internalParent.mod_CountertopInfo!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
  get mod_CountertopProgram(): string  {
    return this.#internalParent.mod_CountertopProgram!;
  }
  get mod_CountertopProgram_matrix(): IMatrix_mod_CountertopProgram {
    return this.#internalParent.mod_CountertopProgram_matrix!;
  }
}

