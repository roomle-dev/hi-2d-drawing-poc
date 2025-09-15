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
import { IModParents_mc_Drawer01 } from '../mod-interfaces'
import { IP_part_DrawerShelfbtm_PartVarsWritable, P_part_DrawerShelfbtm } from '../parts/part_DrawerShelfbtm'
import { IP_part_DrawerBackwallWood_PartVarsWritable, P_part_DrawerBackwallWood } from '../parts/part_DrawerBackwallWood'
import { IP_part_DrawerBackwallSteel_PartVarsWritable, P_part_DrawerBackwallSteel } from '../parts/part_DrawerBackwallSteel'
import { IP_part_DrawerBox_PartVarsWritable, P_part_DrawerBox } from '../parts/part_DrawerBox'
import { IP_part_DrawerSideLeft_PartVarsWritable, P_part_DrawerSideLeft } from '../parts/part_DrawerSideLeft'
import { IP_part_DrawerSideRight_PartVarsWritable, P_part_DrawerSideRight } from '../parts/part_DrawerSideRight'
import { IP_part_DrawerBoxDrilling_PartVarsWritable, P_part_DrawerBoxDrilling } from '../parts/part_DrawerBoxDrilling'
import { IP_part_DrawerBoxBom_PartVarsWritable, P_part_DrawerBoxBom } from '../parts/part_DrawerBoxBom'
import { IP_part_DrawerSlideLeft_PartVarsWritable, P_part_DrawerSlideLeft } from '../parts/part_DrawerSlideLeft'
import { IP_part_DrawerSlideRight_PartVarsWritable, P_part_DrawerSlideRight } from '../parts/part_DrawerSlideRight'
import { IP_part_DrawerFrontConnector_PartVarsWritable, P_part_DrawerFrontConnector } from '../parts/part_DrawerFrontConnector'
import { IP_part_DrawerShelfbtmConnector_PartVarsWritable, P_part_DrawerShelfbtmConnector } from '../parts/part_DrawerShelfbtmConnector'
import { IP_part_DrawerShelfbtmConnectorDrilling_PartVarsWritable, P_part_DrawerShelfbtmConnectorDrilling } from '../parts/part_DrawerShelfbtmConnectorDrilling'
import { IP_part_DrawerBoxSynchronization_PartVarsWritable, P_part_DrawerBoxSynchronization } from '../parts/part_DrawerBoxSynchronization'
import { IModuleNonNull_mc_DrawerBox01,IModParents_mc_DrawerBox01,IPartParentsNonNull_mc_DrawerBox01} from '../mod-interfaces'
import {IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_DrawerBoxColor,IModVarNonNull_mod_DrawerBoxColor,IModVar_mod_DrawerBoxDepthType,IModVarNonNull_mod_DrawerBoxDepthType,IModVar_mod_DrawerBoxHeightType,IModVarNonNull_mod_DrawerBoxHeightType,IModVar_mod_DrawerBoxOffsetDepth,IModVarNonNull_mod_DrawerBoxOffsetDepth,IModVar_mod_DrawerBoxProgram,IModVarNonNull_mod_DrawerBoxProgram,IModVar_mod_DrawerBoxLogic,IModVarNonNull_mod_DrawerBoxLogic,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_DrawerBoxWeightType,IModVarNonNull_mod_DrawerBoxWeightType,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_DrawerBoxDesign,IModVarNonNull_mod_DrawerBoxDesign,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_HardwareColor,IModVarNonNull_mod_HardwareColor,IModVar_mod_TypeElement,IModVarNonNull_mod_TypeElement,IModVar_mod_OpeningType,IModVarNonNull_mod_OpeningType,IModVar_mod_FrontProgram,IModVarNonNull_mod_FrontProgram,IModVar_mod_ParentName,IModVarNonNull_mod_ParentName,IModVar_mod_PartgroupDrawerWeight,IModVarNonNull_mod_PartgroupDrawerWeight,IModVar_mod_CarcaseProgram,IModVarNonNull_mod_CarcaseProgram,IModVar_mod_GrainLogic,IModVarNonNull_mod_GrainLogic} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_FrontHeight, IMatrix_mod_FrontId, IMatrix_mod_DrawerBoxColor, IMatrix_mod_DrawerBoxDepthType, IMatrix_mod_DrawerBoxHeightType, IMatrix_mod_DrawerBoxOffsetDepth, IMatrix_mod_DrawerBoxProgram, IMatrix_mod_DrawerBoxLogic, IMatrix_mod_FrontWidth, IMatrix_mod_DrawerBoxWeightType, IMatrix_mod_ModuleName, IMatrix_mod_DrawerBoxDesign, IMatrix_mod_Depth, IMatrix_mod_Width, IMatrix_mod_Height, IMatrix_mod_HardwareColor, IMatrix_mod_TypeElement, IMatrix_mod_OpeningType, IMatrix_mod_FrontProgram, IMatrix_mod_ParentName, IMatrix_mod_PartgroupDrawerWeight, IMatrix_mod_CarcaseProgram, IMatrix_mod_GrainLogic} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_DrawerShelfbtm, IPartAdd_part_DrawerBackwallWood, IPartAdd_part_DrawerBackwallSteel, IPartAdd_part_DrawerBox, IPartAdd_part_DrawerSideLeft, IPartAdd_part_DrawerSideRight, IPartAdd_part_DrawerBoxDrilling, IPartAdd_part_DrawerBoxBom, IPartAdd_part_DrawerSlideLeft, IPartAdd_part_DrawerSlideRight, IPartAdd_part_DrawerFrontConnector, IPartAdd_part_DrawerShelfbtmConnector, IPartAdd_part_DrawerShelfbtmConnectorDrilling, IPartAdd_part_DrawerBoxSynchronization } from '../part-add-interfaces';
import { mc_DrawerBox01_createBuildPlan, mc_DrawerBox01_afterDataCompletion, mc_DrawerBox01_manufacturerDataCompletion } from '../../modules/mc_DrawerBox01';

export interface cbp_mc_DrawerBox01 extends IModBaseProp
, IPartAdd_part_DrawerShelfbtm, IPartAdd_part_DrawerBackwallWood, IPartAdd_part_DrawerBackwallSteel, IPartAdd_part_DrawerBox, IPartAdd_part_DrawerSideLeft, IPartAdd_part_DrawerSideRight, IPartAdd_part_DrawerBoxDrilling, IPartAdd_part_DrawerBoxBom, IPartAdd_part_DrawerSlideLeft, IPartAdd_part_DrawerSlideRight, IPartAdd_part_DrawerFrontConnector, IPartAdd_part_DrawerShelfbtmConnector, IPartAdd_part_DrawerShelfbtmConnectorDrilling, IPartAdd_part_DrawerBoxSynchronization, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_DrawerBoxColor, IModVarNonNull_mod_DrawerBoxDepthType, IModVarNonNull_mod_DrawerBoxHeightType, IModVarNonNull_mod_DrawerBoxOffsetDepth, IModVarNonNull_mod_DrawerBoxProgram, IModVarNonNull_mod_DrawerBoxLogic, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_DrawerBoxWeightType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_DrawerBoxDesign, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Width, IModVarNonNull_mod_Height, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PartgroupDrawerWeight, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_GrainLogic {
  parent: IModParents_mc_Drawer01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_DrawerBox01 extends IModBaseProp
, IModVar_mod_FrontHeight, IModVar_mod_FrontId, IModVar_mod_DrawerBoxColor, IModVar_mod_DrawerBoxDepthType, IModVar_mod_DrawerBoxHeightType, IModVar_mod_DrawerBoxOffsetDepth, IModVar_mod_DrawerBoxProgram, IModVar_mod_DrawerBoxLogic, IModVar_mod_FrontWidth, IModVar_mod_DrawerBoxWeightType, IModVar_mod_ModuleName, IModVar_mod_DrawerBoxDesign, IModVar_mod_Depth, IModVar_mod_Width, IModVar_mod_Height, IModVar_mod_HardwareColor, IModVar_mod_TypeElement, IModVar_mod_OpeningType, IModVar_mod_FrontProgram, IModVar_mod_ParentName, IModVar_mod_PartgroupDrawerWeight, IModVar_mod_CarcaseProgram, IModVar_mod_GrainLogic {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_DrawerBox01;
  parent: IModParents_mc_Drawer01;
}

export interface adc_mc_DrawerBox01 extends IModBaseProp
, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_DrawerBoxColor, IModVarNonNull_mod_DrawerBoxDepthType, IModVarNonNull_mod_DrawerBoxHeightType, IModVarNonNull_mod_DrawerBoxOffsetDepth, IModVarNonNull_mod_DrawerBoxProgram, IModVarNonNull_mod_DrawerBoxLogic, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_DrawerBoxWeightType, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_DrawerBoxDesign, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Width, IModVarNonNull_mod_Height, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_TypeElement, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_FrontProgram, IModVarNonNull_mod_ParentName, IModVarNonNull_mod_PartgroupDrawerWeight, IModVarNonNull_mod_CarcaseProgram, IModVarNonNull_mod_GrainLogic {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_DrawerBox01 extends OD_Base  implements dc_mc_DrawerBox01
,IModParents_mc_DrawerBox01
,IModVar_mod_FrontHeight,IModVar_mod_FrontId,IModVar_mod_DrawerBoxColor,IModVar_mod_DrawerBoxDepthType,IModVar_mod_DrawerBoxHeightType,IModVar_mod_DrawerBoxOffsetDepth,IModVar_mod_DrawerBoxProgram,IModVar_mod_DrawerBoxLogic,IModVar_mod_FrontWidth,IModVar_mod_DrawerBoxWeightType,IModVar_mod_ModuleName,IModVar_mod_DrawerBoxDesign,IModVar_mod_Depth,IModVar_mod_Width,IModVar_mod_Height,IModVar_mod_HardwareColor,IModVar_mod_TypeElement,IModVar_mod_OpeningType,IModVar_mod_FrontProgram,IModVar_mod_ParentName,IModVar_mod_PartgroupDrawerWeight,IModVar_mod_CarcaseProgram,IModVar_mod_GrainLogic
 {
  constructor(parent: IModParents_mc_Drawer01, manufacturerMode?:boolean) {
    super('mc_DrawerBox01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_DrawerBox01_NonNull(this);
  }
  parent: IModParents_mc_Drawer01;
  _selfNonNull: OD_M_mc_DrawerBox01_NonNull;

  override variants:string[] = ['mod_FrontHeight','mod_FrontId','mod_DrawerBoxColor','mod_DrawerBoxDepthType','mod_DrawerBoxHeightType','mod_DrawerBoxOffsetDepth','mod_DrawerBoxProgram','mod_DrawerBoxLogic','mod_FrontWidth','mod_DrawerBoxWeightType','mod_ModuleName','mod_DrawerBoxDesign','mod_Depth','mod_Width','mod_Height','mod_HardwareColor','mod_TypeElement','mod_OpeningType','mod_FrontProgram','mod_ParentName','mod_PartgroupDrawerWeight','mod_CarcaseProgram','mod_GrainLogic',];
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
  #mod_DrawerBoxColor?: string;
  get mod_DrawerBoxColor(): string | undefined { return this.#mod_DrawerBoxColor}
  set mod_DrawerBoxColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxColor === value) return;
    this.#mod_DrawerBoxColor = value;
  }

  mod_DrawerBoxColor_matrix?: IMatrix_mod_DrawerBoxColor;
  #mod_DrawerBoxDepthType?: string;
  get mod_DrawerBoxDepthType(): string | undefined { return this.#mod_DrawerBoxDepthType}
  set mod_DrawerBoxDepthType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxDepthType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxDepthType === value) return;
    this.#mod_DrawerBoxDepthType = value;
  }

  mod_DrawerBoxDepthType_matrix?: IMatrix_mod_DrawerBoxDepthType;
  #mod_DrawerBoxHeightType?: string;
  get mod_DrawerBoxHeightType(): string | undefined { return this.#mod_DrawerBoxHeightType}
  set mod_DrawerBoxHeightType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxHeightType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxHeightType === value) return;
    this.#mod_DrawerBoxHeightType = value;
  }

  mod_DrawerBoxHeightType_matrix?: IMatrix_mod_DrawerBoxHeightType;
  #mod_DrawerBoxOffsetDepth?: number;
  get mod_DrawerBoxOffsetDepth(): number | undefined { return this.#mod_DrawerBoxOffsetDepth}
  set mod_DrawerBoxOffsetDepth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxOffsetDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxOffsetDepth === value) return;
    this.#mod_DrawerBoxOffsetDepth = value;
  }

  mod_DrawerBoxOffsetDepth_matrix?: IMatrix_mod_DrawerBoxOffsetDepth;
  #mod_DrawerBoxProgram?: string;
  get mod_DrawerBoxProgram(): string | undefined { return this.#mod_DrawerBoxProgram}
  set mod_DrawerBoxProgram(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxProgram' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxProgram === value) return;
    this.#mod_DrawerBoxProgram = value;
  }

  mod_DrawerBoxProgram_matrix?: IMatrix_mod_DrawerBoxProgram;
  #mod_DrawerBoxLogic?: string;
  get mod_DrawerBoxLogic(): string | undefined { return this.#mod_DrawerBoxLogic}
  set mod_DrawerBoxLogic(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_DrawerBoxLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_DrawerBoxLogic === value) return;
    this.#mod_DrawerBoxLogic = value;
  }

  mod_DrawerBoxLogic_matrix?: IMatrix_mod_DrawerBoxLogic;
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
  #mod_OpeningType?: string;
  get mod_OpeningType(): string | undefined { return this.#mod_OpeningType}
  set mod_OpeningType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_OpeningType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_OpeningType === value) return;
    this.#mod_OpeningType = value;
  }

  mod_OpeningType_matrix?: IMatrix_mod_OpeningType;
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
  #mod_PartgroupDrawerWeight?: number;
  get mod_PartgroupDrawerWeight(): number | undefined { return this.#mod_PartgroupDrawerWeight}
  set mod_PartgroupDrawerWeight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PartgroupDrawerWeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PartgroupDrawerWeight === value) return;
    this.#mod_PartgroupDrawerWeight = value;
  }

  mod_PartgroupDrawerWeight_matrix?: IMatrix_mod_PartgroupDrawerWeight;
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
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_DrawerBoxColor', this.mod_DrawerBoxColor);
  res.set('mod_DrawerBoxDepthType', this.mod_DrawerBoxDepthType);
  res.set('mod_DrawerBoxHeightType', this.mod_DrawerBoxHeightType);
  res.set('mod_DrawerBoxOffsetDepth', this.mod_DrawerBoxOffsetDepth);
  res.set('mod_DrawerBoxProgram', this.mod_DrawerBoxProgram);
  res.set('mod_DrawerBoxLogic', this.mod_DrawerBoxLogic);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_DrawerBoxWeightType', this.mod_DrawerBoxWeightType);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_DrawerBoxDesign', this.mod_DrawerBoxDesign);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_HardwareColor', this.mod_HardwareColor);
  res.set('mod_TypeElement', this.mod_TypeElement);
  res.set('mod_OpeningType', this.mod_OpeningType);
  res.set('mod_FrontProgram', this.mod_FrontProgram);
  res.set('mod_ParentName', this.mod_ParentName);
  res.set('mod_PartgroupDrawerWeight', this.mod_PartgroupDrawerWeight);
  res.set('mod_CarcaseProgram', this.mod_CarcaseProgram);
  res.set('mod_GrainLogic', this.mod_GrainLogic);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
    const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
    internal_leaveValidateVariant();
    this.mod_FrontHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
    const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
    internal_leaveValidateVariant();
    this.mod_FrontId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxColor');
    const val = _toString(json['attributes']['mod_DrawerBoxColor'], 'mod_DrawerBoxColor');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxDepthType');
    const val = _toString(json['attributes']['mod_DrawerBoxDepthType'], 'mod_DrawerBoxDepthType');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxDepthType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxHeightType');
    const val = _toString(json['attributes']['mod_DrawerBoxHeightType'], 'mod_DrawerBoxHeightType');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxHeightType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxOffsetDepth');
    const val = _toFloat(json['attributes']['mod_DrawerBoxOffsetDepth'], 'mod_DrawerBoxOffsetDepth');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxOffsetDepth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxProgram');
    const val = _toString(json['attributes']['mod_DrawerBoxProgram'], 'mod_DrawerBoxProgram');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxLogic');
    const val = _toString(json['attributes']['mod_DrawerBoxLogic'], 'mod_DrawerBoxLogic');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxLogic = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxWeightType');
    const val = _toString(json['attributes']['mod_DrawerBoxWeightType'], 'mod_DrawerBoxWeightType');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxWeightType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_DrawerBoxDesign');
    const val = _toString(json['attributes']['mod_DrawerBoxDesign'], 'mod_DrawerBoxDesign');
    internal_leaveValidateVariant();
    this.mod_DrawerBoxDesign = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareColor');
    const val = _toString(json['attributes']['mod_HardwareColor'], 'mod_HardwareColor');
    internal_leaveValidateVariant();
    this.mod_HardwareColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_TypeElement');
    const val = _toString(json['attributes']['mod_TypeElement'], 'mod_TypeElement');
    internal_leaveValidateVariant();
    this.mod_TypeElement = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_OpeningType');
    const val = _toString(json['attributes']['mod_OpeningType'], 'mod_OpeningType');
    internal_leaveValidateVariant();
    this.mod_OpeningType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontProgram');
    const val = _toString(json['attributes']['mod_FrontProgram'], 'mod_FrontProgram');
    internal_leaveValidateVariant();
    this.mod_FrontProgram = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ParentName');
    const val = _toString(json['attributes']['mod_ParentName'], 'mod_ParentName');
    internal_leaveValidateVariant();
    this.mod_ParentName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PartgroupDrawerWeight');
    const val = _toFloat(json['attributes']['mod_PartgroupDrawerWeight'], 'mod_PartgroupDrawerWeight');
    internal_leaveValidateVariant();
    this.mod_PartgroupDrawerWeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseProgram');
    const val = _toString(json['attributes']['mod_CarcaseProgram'], 'mod_CarcaseProgram');
    internal_leaveValidateVariant();
    this.mod_CarcaseProgram = val; }
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
    if (this.mod_DrawerBoxColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxColor')) {
          let pv = <IModVar_mod_DrawerBoxColor>s;
          if (pv.mod_DrawerBoxColor !== undefined) {
            this.mod_DrawerBoxColor = (<IModVar_mod_DrawerBoxColor>s).mod_DrawerBoxColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DrawerBoxDepthType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxDepthType')) {
          let pv = <IModVar_mod_DrawerBoxDepthType>s;
          if (pv.mod_DrawerBoxDepthType !== undefined) {
            this.mod_DrawerBoxDepthType = (<IModVar_mod_DrawerBoxDepthType>s).mod_DrawerBoxDepthType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DrawerBoxHeightType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxHeightType')) {
          let pv = <IModVar_mod_DrawerBoxHeightType>s;
          if (pv.mod_DrawerBoxHeightType !== undefined) {
            this.mod_DrawerBoxHeightType = (<IModVar_mod_DrawerBoxHeightType>s).mod_DrawerBoxHeightType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DrawerBoxOffsetDepth === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxOffsetDepth')) {
          let pv = <IModVar_mod_DrawerBoxOffsetDepth>s;
          if (pv.mod_DrawerBoxOffsetDepth !== undefined) {
            this.mod_DrawerBoxOffsetDepth = (<IModVar_mod_DrawerBoxOffsetDepth>s).mod_DrawerBoxOffsetDepth;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DrawerBoxProgram === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxProgram')) {
          let pv = <IModVar_mod_DrawerBoxProgram>s;
          if (pv.mod_DrawerBoxProgram !== undefined) {
            this.mod_DrawerBoxProgram = (<IModVar_mod_DrawerBoxProgram>s).mod_DrawerBoxProgram;
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
    if (this.mod_DrawerBoxWeightType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxWeightType')) {
          let pv = <IModVar_mod_DrawerBoxWeightType>s;
          if (pv.mod_DrawerBoxWeightType !== undefined) {
            this.mod_DrawerBoxWeightType = (<IModVar_mod_DrawerBoxWeightType>s).mod_DrawerBoxWeightType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_DrawerBoxDesign === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_DrawerBoxDesign')) {
          let pv = <IModVar_mod_DrawerBoxDesign>s;
          if (pv.mod_DrawerBoxDesign !== undefined) {
            this.mod_DrawerBoxDesign = (<IModVar_mod_DrawerBoxDesign>s).mod_DrawerBoxDesign;
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
    if (this.mod_Width === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_Width')) {
          let pv = <IModVar_mod_Width>s;
          if (pv.mod_Width !== undefined) {
            this.mod_Width = (<IModVar_mod_Width>s).mod_Width;
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
    if (this.mod_OpeningType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_OpeningType')) {
          let pv = <IModVar_mod_OpeningType>s;
          if (pv.mod_OpeningType !== undefined) {
            this.mod_OpeningType = (<IModVar_mod_OpeningType>s).mod_OpeningType;
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
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "mc_DrawerBox01";
    }
    if (this.mod_Height === undefined) {
      this.mod_Height = 0;
    }
    if (this.mod_PartgroupDrawerWeight === undefined) {
      this.mod_PartgroupDrawerWeight = 0;
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_DrawerBoxLogic === undefined) {
      this.mod_DrawerBoxLogic = this.g.basic_DrawerBoxLogic;
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
  #manufacturerDataCompletionInternal = mc_DrawerBox01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_DrawerBox01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_DrawerBox01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_DrawerBox01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_DrawerBoxColor_matrix = VariantValidation.mod_DrawerBoxColor(this, this);
    this.mod_DrawerBoxDepthType_matrix = VariantValidation.mod_DrawerBoxDepthType(this, this);
    this.mod_DrawerBoxHeightType_matrix = VariantValidation.mod_DrawerBoxHeightType(this, this);
    this.mod_DrawerBoxOffsetDepth_matrix = VariantValidation.mod_DrawerBoxOffsetDepth(this, this);
    this.mod_DrawerBoxProgram_matrix = VariantValidation.mod_DrawerBoxProgram(this, this);
    this.mod_DrawerBoxLogic_matrix = VariantValidation.mod_DrawerBoxLogic(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_DrawerBoxWeightType_matrix = VariantValidation.mod_DrawerBoxWeightType(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_DrawerBoxDesign_matrix = VariantValidation.mod_DrawerBoxDesign(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this);
    this.mod_TypeElement_matrix = VariantValidation.mod_TypeElement(this, this);
    this.mod_OpeningType_matrix = VariantValidation.mod_OpeningType(this, this);
    this.mod_FrontProgram_matrix = VariantValidation.mod_FrontProgram(this, this);
    this.mod_ParentName_matrix = VariantValidation.mod_ParentName(this, this);
    this.mod_PartgroupDrawerWeight_matrix = VariantValidation.mod_PartgroupDrawerWeight(this, this);
    this.mod_CarcaseProgram_matrix = VariantValidation.mod_CarcaseProgram(this, this);
    this.mod_GrainLogic_matrix = VariantValidation.mod_GrainLogic(this, this);
  }
  addpart_DrawerShelfbtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtm_PartVarsWritable {
    var c = new P_part_DrawerShelfbtm(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerBackwallWood(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBackwallWood_PartVarsWritable {
    var c = new P_part_DrawerBackwallWood(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerBackwallSteel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBackwallSteel_PartVarsWritable {
    var c = new P_part_DrawerBackwallSteel(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerBox(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBox_PartVarsWritable {
    var c = new P_part_DrawerBox(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerSideLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSideLeft_PartVarsWritable {
    var c = new P_part_DrawerSideLeft(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerSideRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSideRight_PartVarsWritable {
    var c = new P_part_DrawerSideRight(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerBoxDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxDrilling_PartVarsWritable {
    var c = new P_part_DrawerBoxDrilling(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerBoxBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxBom_PartVarsWritable {
    var c = new P_part_DrawerBoxBom(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerSlideLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSlideLeft_PartVarsWritable {
    var c = new P_part_DrawerSlideLeft(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerSlideRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSlideRight_PartVarsWritable {
    var c = new P_part_DrawerSlideRight(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerFrontConnector(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerFrontConnector_PartVarsWritable {
    var c = new P_part_DrawerFrontConnector(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerShelfbtmConnector(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtmConnector_PartVarsWritable {
    var c = new P_part_DrawerShelfbtmConnector(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerShelfbtmConnectorDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtmConnectorDrilling_PartVarsWritable {
    var c = new P_part_DrawerShelfbtmConnectorDrilling(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_DrawerBoxSynchronization(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxSynchronization_PartVarsWritable {
    var c = new P_part_DrawerBoxSynchronization(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_DrawerBox01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_DrawerBox01_NonNull implements cbp_mc_DrawerBox01, adc_mc_DrawerBox01 ,IPartParentsNonNull_mc_DrawerBox01 {
  constructor(parent: OD_M_mc_DrawerBox01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_DrawerBox01;

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
  #createBuildPlanInternal = mc_DrawerBox01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_DrawerBox01_afterDataCompletion;
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
  parent: IModParents_mc_Drawer01;
  addpart_DrawerShelfbtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtm_PartVarsWritable {
    return this.#internalParent.addpart_DrawerShelfbtm(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerBackwallWood(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBackwallWood_PartVarsWritable {
    return this.#internalParent.addpart_DrawerBackwallWood(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerBackwallSteel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBackwallSteel_PartVarsWritable {
    return this.#internalParent.addpart_DrawerBackwallSteel(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerBox(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBox_PartVarsWritable {
    return this.#internalParent.addpart_DrawerBox(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerSideLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSideLeft_PartVarsWritable {
    return this.#internalParent.addpart_DrawerSideLeft(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerSideRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSideRight_PartVarsWritable {
    return this.#internalParent.addpart_DrawerSideRight(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerBoxDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxDrilling_PartVarsWritable {
    return this.#internalParent.addpart_DrawerBoxDrilling(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerBoxBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxBom_PartVarsWritable {
    return this.#internalParent.addpart_DrawerBoxBom(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerSlideLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSlideLeft_PartVarsWritable {
    return this.#internalParent.addpart_DrawerSlideLeft(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerSlideRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSlideRight_PartVarsWritable {
    return this.#internalParent.addpart_DrawerSlideRight(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerFrontConnector(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerFrontConnector_PartVarsWritable {
    return this.#internalParent.addpart_DrawerFrontConnector(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerShelfbtmConnector(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtmConnector_PartVarsWritable {
    return this.#internalParent.addpart_DrawerShelfbtmConnector(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerShelfbtmConnectorDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtmConnectorDrilling_PartVarsWritable {
    return this.#internalParent.addpart_DrawerShelfbtmConnectorDrilling(x, y, z, dimx, dimy, dimz);
  }
  addpart_DrawerBoxSynchronization(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxSynchronization_PartVarsWritable {
    return this.#internalParent.addpart_DrawerBoxSynchronization(x, y, z, dimx, dimy, dimz);
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_DrawerBoxColor(): string  {
    return this.#internalParent.mod_DrawerBoxColor!;
  }
  get mod_DrawerBoxDepthType(): string  {
    return this.#internalParent.mod_DrawerBoxDepthType!;
  }
  get mod_DrawerBoxHeightType(): string  {
    return this.#internalParent.mod_DrawerBoxHeightType!;
  }
  get mod_DrawerBoxOffsetDepth(): number  {
    return this.#internalParent.mod_DrawerBoxOffsetDepth!;
  }
  get mod_DrawerBoxProgram(): string  {
    return this.#internalParent.mod_DrawerBoxProgram!;
  }
  get mod_DrawerBoxLogic(): string  {
    return this.#internalParent.mod_DrawerBoxLogic!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_DrawerBoxWeightType(): string  {
    return this.#internalParent.mod_DrawerBoxWeightType!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_DrawerBoxDesign(): string  {
    return this.#internalParent.mod_DrawerBoxDesign!;
  }
  get mod_DrawerBoxDesign_matrix(): IMatrix_mod_DrawerBoxDesign {
    return this.#internalParent.mod_DrawerBoxDesign_matrix!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_HardwareColor(): string  {
    return this.#internalParent.mod_HardwareColor!;
  }
  get mod_TypeElement(): string  {
    return this.#internalParent.mod_TypeElement!;
  }
  get mod_OpeningType(): string  {
    return this.#internalParent.mod_OpeningType!;
  }
  get mod_FrontProgram(): string  {
    return this.#internalParent.mod_FrontProgram!;
  }
  get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram {
    return this.#internalParent.mod_FrontProgram_matrix!;
  }
  get mod_ParentName(): string  {
    return this.#internalParent.mod_ParentName!;
  }
  get mod_PartgroupDrawerWeight(): number  {
    return this.#internalParent.mod_PartgroupDrawerWeight!;
  }
  get mod_CarcaseProgram(): string  {
    return this.#internalParent.mod_CarcaseProgram!;
  }
  get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram {
    return this.#internalParent.mod_CarcaseProgram_matrix!;
  }
  get mod_GrainLogic(): string  {
    return this.#internalParent.mod_GrainLogic!;
  }
}

