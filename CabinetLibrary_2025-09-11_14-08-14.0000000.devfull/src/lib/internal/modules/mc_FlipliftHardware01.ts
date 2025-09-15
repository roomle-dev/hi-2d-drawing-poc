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
import { IModParents_mc_Fliplift01 } from '../mod-interfaces'
import { IP_part_FlipliftHardwareBom_PartVarsWritable, P_part_FlipliftHardwareBom } from '../parts/part_FlipliftHardwareBom'
import { IP_part_FlipliftHardwareGraphic_PartVarsWritable, P_part_FlipliftHardwareGraphic } from '../parts/part_FlipliftHardwareGraphic'
import { IP_part_FlipliftHardwareFrontpanelDrilling_PartVarsWritable, P_part_FlipliftHardwareFrontpanelDrilling } from '../parts/part_FlipliftHardwareFrontpanelDrilling'
import { IP_part_FlipliftHardwareSidepanelDrilling_PartVarsWritable, P_part_FlipliftHardwareSidepanelDrilling } from '../parts/part_FlipliftHardwareSidepanelDrilling'
import { IModuleNonNull_mc_FlipliftHardware01,IModParents_mc_FlipliftHardware01,IPartParentsNonNull_mc_FlipliftHardware01} from '../mod-interfaces'
import {IModVar_mod_CarcaseId,IModVarNonNull_mod_CarcaseId,IModVar_mod_CarcasePartInfo,IModVarNonNull_mod_CarcasePartInfo,IModVar_mod_FlipliftFrontHeightList,IModVarNonNull_mod_FlipliftFrontHeightList,IModVar_mod_FrontHeight,IModVarNonNull_mod_FrontHeight,IModVar_mod_FlipliftType,IModVarNonNull_mod_FlipliftType,IModVar_mod_Width,IModVarNonNull_mod_Width,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_FlipliftFrontNumber,IModVarNonNull_mod_FlipliftFrontNumber,IModVar_mod_FlipliftHardwareColor,IModVarNonNull_mod_FlipliftHardwareColor,IModVar_mod_FlipliftHardwareType,IModVarNonNull_mod_FlipliftHardwareType,IModVar_mod_FrontId,IModVarNonNull_mod_FrontId,IModVar_mod_FrontWidth,IModVarNonNull_mod_FrontWidth,IModVar_mod_ModuleName,IModVarNonNull_mod_ModuleName,IModVar_mod_OpeningType,IModVarNonNull_mod_OpeningType,IModVar_mod_OpeningAngle,IModVarNonNull_mod_OpeningAngle,IModVar_mod_FrontpanelWeightCalculations,IModVarNonNull_mod_FrontpanelWeightCalculations,IModVar_mod_FrontGapCarcase,IModVarNonNull_mod_FrontGapCarcase,IModVar_mod_FrontPosStart,IModVarNonNull_mod_FrontPosStart,IModVar_mod_FrontThk,IModVarNonNull_mod_FrontThk,IModVar_mod_FrontType,IModVarNonNull_mod_FrontType,IModVar_mod_HardwareColor,IModVarNonNull_mod_HardwareColor,IModVar_mod_HardwareTypeList,IModVarNonNull_mod_HardwareTypeList,IModVar_mod_FrontOverlayInfo,IModVarNonNull_mod_FrontOverlayInfo,IModVar_mod_HandleWeightCalculations,IModVarNonNull_mod_HandleWeightCalculations,IModVar_mod_FlipliftLogic,IModVarNonNull_mod_FlipliftLogic} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_CarcaseId, IMatrix_mod_FrontHeight, IMatrix_mod_FlipliftType, IMatrix_mod_Width, IMatrix_mod_Depth, IMatrix_mod_Height, IMatrix_mod_FlipliftFrontNumber, IMatrix_mod_FlipliftHardwareColor, IMatrix_mod_FlipliftHardwareType, IMatrix_mod_FrontId, IMatrix_mod_FrontWidth, IMatrix_mod_ModuleName, IMatrix_mod_OpeningType, IMatrix_mod_FrontGapCarcase, IMatrix_mod_FrontPosStart, IMatrix_mod_FrontThk, IMatrix_mod_FrontType, IMatrix_mod_HardwareColor, IMatrix_mod_FrontOverlayInfo, IMatrix_mod_FlipliftLogic} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'

import { IPartAdd_part_FlipliftHardwareBom, IPartAdd_part_FlipliftHardwareGraphic, IPartAdd_part_FlipliftHardwareFrontpanelDrilling, IPartAdd_part_FlipliftHardwareSidepanelDrilling } from '../part-add-interfaces';
import { mc_FlipliftHardware01_createBuildPlan, mc_FlipliftHardware01_afterDataCompletion, mc_FlipliftHardware01_manufacturerDataCompletion } from '../../modules/mc_FlipliftHardware01';

export interface cbp_mc_FlipliftHardware01 extends IModBaseProp
, IPartAdd_part_FlipliftHardwareBom, IPartAdd_part_FlipliftHardwareGraphic, IPartAdd_part_FlipliftHardwareFrontpanelDrilling, IPartAdd_part_FlipliftHardwareSidepanelDrilling, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcasePartInfo, IModVarNonNull_mod_FlipliftFrontHeightList, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FlipliftType, IModVarNonNull_mod_Width, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_FlipliftFrontNumber, IModVarNonNull_mod_FlipliftHardwareColor, IModVarNonNull_mod_FlipliftHardwareType, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_OpeningAngle, IModVarNonNull_mod_FrontpanelWeightCalculations, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontType, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_HardwareTypeList, IModVarNonNull_mod_FrontOverlayInfo, IModVarNonNull_mod_HandleWeightCalculations, IModVarNonNull_mod_FlipliftLogic {
  parent: IModParents_mc_Fliplift01;
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  get m(): OD_Base[];
}

export interface dc_mc_FlipliftHardware01 extends IModBaseProp
, IModVar_mod_CarcaseId, IModVar_mod_CarcasePartInfo, IModVar_mod_FlipliftFrontHeightList, IModVar_mod_FrontHeight, IModVar_mod_FlipliftType, IModVar_mod_Width, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_FlipliftFrontNumber, IModVar_mod_FlipliftHardwareColor, IModVar_mod_FlipliftHardwareType, IModVar_mod_FrontId, IModVar_mod_FrontWidth, IModVar_mod_ModuleName, IModVar_mod_OpeningType, IModVar_mod_OpeningAngle, IModVar_mod_FrontpanelWeightCalculations, IModVar_mod_FrontGapCarcase, IModVar_mod_FrontPosStart, IModVar_mod_FrontThk, IModVar_mod_FrontType, IModVar_mod_HardwareColor, IModVar_mod_HardwareTypeList, IModVar_mod_FrontOverlayInfo, IModVar_mod_HandleWeightCalculations, IModVar_mod_FlipliftLogic {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mc_FlipliftHardware01;
  parent: IModParents_mc_Fliplift01;
}

export interface adc_mc_FlipliftHardware01 extends IModBaseProp
, IModVarNonNull_mod_CarcaseId, IModVarNonNull_mod_CarcasePartInfo, IModVarNonNull_mod_FlipliftFrontHeightList, IModVarNonNull_mod_FrontHeight, IModVarNonNull_mod_FlipliftType, IModVarNonNull_mod_Width, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_FlipliftFrontNumber, IModVarNonNull_mod_FlipliftHardwareColor, IModVarNonNull_mod_FlipliftHardwareType, IModVarNonNull_mod_FrontId, IModVarNonNull_mod_FrontWidth, IModVarNonNull_mod_ModuleName, IModVarNonNull_mod_OpeningType, IModVarNonNull_mod_OpeningAngle, IModVarNonNull_mod_FrontpanelWeightCalculations, IModVarNonNull_mod_FrontGapCarcase, IModVarNonNull_mod_FrontPosStart, IModVarNonNull_mod_FrontThk, IModVarNonNull_mod_FrontType, IModVarNonNull_mod_HardwareColor, IModVarNonNull_mod_HardwareTypeList, IModVarNonNull_mod_FrontOverlayInfo, IModVarNonNull_mod_HandleWeightCalculations, IModVarNonNull_mod_FlipliftLogic {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
}

export class OD_M_mc_FlipliftHardware01 extends OD_Base  implements dc_mc_FlipliftHardware01
,IModParents_mc_FlipliftHardware01
,IModVar_mod_CarcaseId,IModVar_mod_CarcasePartInfo,IModVar_mod_FlipliftFrontHeightList,IModVar_mod_FrontHeight,IModVar_mod_FlipliftType,IModVar_mod_Width,IModVar_mod_Depth,IModVar_mod_Height,IModVar_mod_FlipliftFrontNumber,IModVar_mod_FlipliftHardwareColor,IModVar_mod_FlipliftHardwareType,IModVar_mod_FrontId,IModVar_mod_FrontWidth,IModVar_mod_ModuleName,IModVar_mod_OpeningType,IModVar_mod_OpeningAngle,IModVar_mod_FrontpanelWeightCalculations,IModVar_mod_FrontGapCarcase,IModVar_mod_FrontPosStart,IModVar_mod_FrontThk,IModVar_mod_FrontType,IModVar_mod_HardwareColor,IModVar_mod_HardwareTypeList,IModVar_mod_FrontOverlayInfo,IModVar_mod_HandleWeightCalculations,IModVar_mod_FlipliftLogic
 {
  constructor(parent: IModParents_mc_Fliplift01, manufacturerMode?:boolean) {
    super('mc_FlipliftHardware01', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this.parent = parent;
    this._selfNonNull = new OD_M_mc_FlipliftHardware01_NonNull(this);
  }
  parent: IModParents_mc_Fliplift01;
  _selfNonNull: OD_M_mc_FlipliftHardware01_NonNull;

  override variants:string[] = ['mod_CarcaseId','mod_CarcasePartInfo','mod_FlipliftFrontHeightList','mod_FrontHeight','mod_FlipliftType','mod_Width','mod_Depth','mod_Height','mod_FlipliftFrontNumber','mod_FlipliftHardwareColor','mod_FlipliftHardwareType','mod_FrontId','mod_FrontWidth','mod_ModuleName','mod_OpeningType','mod_OpeningAngle','mod_FrontpanelWeightCalculations','mod_FrontGapCarcase','mod_FrontPosStart','mod_FrontThk','mod_FrontType','mod_HardwareColor','mod_HardwareTypeList','mod_FrontOverlayInfo','mod_HandleWeightCalculations','mod_FlipliftLogic',];
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
  #mod_CarcasePartInfo: string[] = [];
  get mod_CarcasePartInfo(): string[] { return this.#mod_CarcasePartInfo;}
  #mod_FlipliftFrontHeightList: number[] = [];
  get mod_FlipliftFrontHeightList(): number[] { return this.#mod_FlipliftFrontHeightList;}
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
  #mod_FlipliftType?: string;
  get mod_FlipliftType(): string | undefined { return this.#mod_FlipliftType}
  set mod_FlipliftType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FlipliftType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FlipliftType === value) return;
    this.#mod_FlipliftType = value;
  }

  mod_FlipliftType_matrix?: IMatrix_mod_FlipliftType;
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
  #mod_FlipliftFrontNumber?: number;
  get mod_FlipliftFrontNumber(): number | undefined { return this.#mod_FlipliftFrontNumber}
  set mod_FlipliftFrontNumber(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FlipliftFrontNumber' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FlipliftFrontNumber === value) return;
    this.#mod_FlipliftFrontNumber = value;
  }

  mod_FlipliftFrontNumber_matrix?: IMatrix_mod_FlipliftFrontNumber;
  #mod_FlipliftHardwareColor?: string;
  get mod_FlipliftHardwareColor(): string | undefined { return this.#mod_FlipliftHardwareColor}
  set mod_FlipliftHardwareColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FlipliftHardwareColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FlipliftHardwareColor === value) return;
    this.#mod_FlipliftHardwareColor = value;
  }

  mod_FlipliftHardwareColor_matrix?: IMatrix_mod_FlipliftHardwareColor;
  #mod_FlipliftHardwareType?: string;
  get mod_FlipliftHardwareType(): string | undefined { return this.#mod_FlipliftHardwareType}
  set mod_FlipliftHardwareType(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FlipliftHardwareType' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FlipliftHardwareType === value) return;
    this.#mod_FlipliftHardwareType = value;
  }

  mod_FlipliftHardwareType_matrix?: IMatrix_mod_FlipliftHardwareType;
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
  #mod_OpeningAngle: string[] = [];
  get mod_OpeningAngle(): string[] { return this.#mod_OpeningAngle;}
  #mod_FrontpanelWeightCalculations: number[] = [];
  get mod_FrontpanelWeightCalculations(): number[] { return this.#mod_FrontpanelWeightCalculations;}
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
  #mod_HardwareTypeList: string[] = [];
  get mod_HardwareTypeList(): string[] { return this.#mod_HardwareTypeList;}
  #mod_FrontOverlayInfo?: string;
  get mod_FrontOverlayInfo(): string | undefined { return this.#mod_FrontOverlayInfo}
  set mod_FrontOverlayInfo(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FrontOverlayInfo' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FrontOverlayInfo === value) return;
    this.#mod_FrontOverlayInfo = value;
  }

  mod_FrontOverlayInfo_matrix?: IMatrix_mod_FrontOverlayInfo;
  #mod_HandleWeightCalculations: number[] = [];
  get mod_HandleWeightCalculations(): number[] { return this.#mod_HandleWeightCalculations;}
  #mod_FlipliftLogic?: string;
  get mod_FlipliftLogic(): string | undefined { return this.#mod_FlipliftLogic}
  set mod_FlipliftLogic(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_FlipliftLogic' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_FlipliftLogic === value) return;
    this.#mod_FlipliftLogic = value;
  }

  mod_FlipliftLogic_matrix?: IMatrix_mod_FlipliftLogic;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_CarcaseId', this.mod_CarcaseId);
  res.set('mod_CarcasePartInfo', JSON.stringify(this.mod_CarcasePartInfo));
  res.set('mod_FlipliftFrontHeightList', JSON.stringify(this.mod_FlipliftFrontHeightList));
  res.set('mod_FrontHeight', this.mod_FrontHeight);
  res.set('mod_FlipliftType', this.mod_FlipliftType);
  res.set('mod_Width', this.mod_Width);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_FlipliftFrontNumber', this.mod_FlipliftFrontNumber);
  res.set('mod_FlipliftHardwareColor', this.mod_FlipliftHardwareColor);
  res.set('mod_FlipliftHardwareType', this.mod_FlipliftHardwareType);
  res.set('mod_FrontId', this.mod_FrontId);
  res.set('mod_FrontWidth', this.mod_FrontWidth);
  res.set('mod_ModuleName', this.mod_ModuleName);
  res.set('mod_OpeningType', this.mod_OpeningType);
  res.set('mod_OpeningAngle', JSON.stringify(this.mod_OpeningAngle));
  res.set('mod_FrontpanelWeightCalculations', JSON.stringify(this.mod_FrontpanelWeightCalculations));
  res.set('mod_FrontGapCarcase', this.mod_FrontGapCarcase);
  res.set('mod_FrontPosStart', this.mod_FrontPosStart);
  res.set('mod_FrontThk', this.mod_FrontThk);
  res.set('mod_FrontType', this.mod_FrontType);
  res.set('mod_HardwareColor', this.mod_HardwareColor);
  res.set('mod_HardwareTypeList', JSON.stringify(this.mod_HardwareTypeList));
  res.set('mod_FrontOverlayInfo', this.mod_FrontOverlayInfo);
  res.set('mod_HandleWeightCalculations', JSON.stringify(this.mod_HandleWeightCalculations));
  res.set('mod_FlipliftLogic', this.mod_FlipliftLogic);
    return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CarcaseId');
    const val = _toString(json['attributes']['mod_CarcaseId'], 'mod_CarcaseId');
    internal_leaveValidateVariant();
    this.mod_CarcaseId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontHeight');
    const val = _toFloat(json['attributes']['mod_FrontHeight'], 'mod_FrontHeight');
    internal_leaveValidateVariant();
    this.mod_FrontHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftType');
    const val = _toString(json['attributes']['mod_FlipliftType'], 'mod_FlipliftType');
    internal_leaveValidateVariant();
    this.mod_FlipliftType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Width');
    const val = _toFloat(json['attributes']['mod_Width'], 'mod_Width');
    internal_leaveValidateVariant();
    this.mod_Width = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftFrontNumber');
    const val = _toInt(json['attributes']['mod_FlipliftFrontNumber'], 'mod_FlipliftFrontNumber');
    internal_leaveValidateVariant();
    this.mod_FlipliftFrontNumber = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftHardwareColor');
    const val = _toString(json['attributes']['mod_FlipliftHardwareColor'], 'mod_FlipliftHardwareColor');
    internal_leaveValidateVariant();
    this.mod_FlipliftHardwareColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftHardwareType');
    const val = _toString(json['attributes']['mod_FlipliftHardwareType'], 'mod_FlipliftHardwareType');
    internal_leaveValidateVariant();
    this.mod_FlipliftHardwareType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontId');
    const val = _toString(json['attributes']['mod_FrontId'], 'mod_FrontId');
    internal_leaveValidateVariant();
    this.mod_FrontId = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontWidth');
    const val = _toFloat(json['attributes']['mod_FrontWidth'], 'mod_FrontWidth');
    internal_leaveValidateVariant();
    this.mod_FrontWidth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_ModuleName');
    const val = _toString(json['attributes']['mod_ModuleName'], 'mod_ModuleName');
    internal_leaveValidateVariant();
    this.mod_ModuleName = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_OpeningType');
    const val = _toString(json['attributes']['mod_OpeningType'], 'mod_OpeningType');
    internal_leaveValidateVariant();
    this.mod_OpeningType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontGapCarcase');
    const val = _toFloat(json['attributes']['mod_FrontGapCarcase'], 'mod_FrontGapCarcase');
    internal_leaveValidateVariant();
    this.mod_FrontGapCarcase = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontPosStart');
    const val = _toFloat(json['attributes']['mod_FrontPosStart'], 'mod_FrontPosStart');
    internal_leaveValidateVariant();
    this.mod_FrontPosStart = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontThk');
    const val = _toFloat(json['attributes']['mod_FrontThk'], 'mod_FrontThk');
    internal_leaveValidateVariant();
    this.mod_FrontThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontType');
    const val = _toString(json['attributes']['mod_FrontType'], 'mod_FrontType');
    internal_leaveValidateVariant();
    this.mod_FrontType = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HardwareColor');
    const val = _toString(json['attributes']['mod_HardwareColor'], 'mod_HardwareColor');
    internal_leaveValidateVariant();
    this.mod_HardwareColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FrontOverlayInfo');
    const val = _toString(json['attributes']['mod_FrontOverlayInfo'], 'mod_FrontOverlayInfo');
    internal_leaveValidateVariant();
    this.mod_FrontOverlayInfo = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_FlipliftLogic');
    const val = _toString(json['attributes']['mod_FlipliftLogic'], 'mod_FlipliftLogic');
    internal_leaveValidateVariant();
    this.mod_FlipliftLogic = val; }
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
    if (this.mod_FlipliftType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FlipliftType')) {
          let pv = <IModVar_mod_FlipliftType>s;
          if (pv.mod_FlipliftType !== undefined) {
            this.mod_FlipliftType = (<IModVar_mod_FlipliftType>s).mod_FlipliftType;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FlipliftFrontNumber === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FlipliftFrontNumber')) {
          let pv = <IModVar_mod_FlipliftFrontNumber>s;
          if (pv.mod_FlipliftFrontNumber !== undefined) {
            this.mod_FlipliftFrontNumber = (<IModVar_mod_FlipliftFrontNumber>s).mod_FlipliftFrontNumber;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FlipliftHardwareColor === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FlipliftHardwareColor')) {
          let pv = <IModVar_mod_FlipliftHardwareColor>s;
          if (pv.mod_FlipliftHardwareColor !== undefined) {
            this.mod_FlipliftHardwareColor = (<IModVar_mod_FlipliftHardwareColor>s).mod_FlipliftHardwareColor;
            break;
          };
        }
        s = s.parentBase;
      }
    }
    if (this.mod_FlipliftHardwareType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FlipliftHardwareType')) {
          let pv = <IModVar_mod_FlipliftHardwareType>s;
          if (pv.mod_FlipliftHardwareType !== undefined) {
            this.mod_FlipliftHardwareType = (<IModVar_mod_FlipliftHardwareType>s).mod_FlipliftHardwareType;
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
    if (this.mod_ModuleName === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_ModuleName')) {
          let pv = <IModVar_mod_ModuleName>s;
          if (pv.mod_ModuleName !== undefined) {
            this.mod_ModuleName = (<IModVar_mod_ModuleName>s).mod_ModuleName;
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
    if (this.mod_FrontType === undefined) {
      let s = this.parentBase;
      // try to find a parent with a valid value
      while (s !== undefined) {
        if (s.variants.includes('mod_FrontType')) {
          let pv = <IModVar_mod_FrontType>s;
          if (pv.mod_FrontType !== undefined) {
            this.mod_FrontType = (<IModVar_mod_FrontType>s).mod_FrontType;
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
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_CarcaseId === undefined) {
      this.mod_CarcaseId = "";
    }
    if (this.mod_Width === undefined) {
      this.mod_Width = 600;
    }
    if (this.mod_Depth === undefined) {
      this.mod_Depth = 350;
    }
    if (this.mod_Height === undefined) {
      this.mod_Height = 600;
    }
    if (this.mod_FrontId === undefined) {
      this.mod_FrontId = "";
    }
    if (this.mod_ModuleName === undefined) {
      this.mod_ModuleName = "";
    }
    if (this.mod_FrontType === undefined) {
      this.mod_FrontType = "";
    }
    if (this.mod_FrontOverlayInfo === undefined) {
      this.mod_FrontOverlayInfo = "";
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_FlipliftLogic === undefined) {
      this.mod_FlipliftLogic = this.g.basic_FlipliftLogic;
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
  #manufacturerDataCompletionInternal = mc_FlipliftHardware01_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mc_FlipliftHardware01_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mc_FlipliftHardware01{
    this.afterDataCompletion();
    const adc = new OD_M_mc_FlipliftHardware01_NonNull(this);
    return adc;
  }

  override validateSelections():void {
    this.mod_CarcaseId_matrix = VariantValidation.mod_CarcaseId(this, this);
    this.mod_FrontHeight_matrix = VariantValidation.mod_FrontHeight(this, this);
    this.mod_FlipliftType_matrix = VariantValidation.mod_FlipliftType(this, this);
    this.mod_Width_matrix = VariantValidation.mod_Width(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_FlipliftFrontNumber_matrix = VariantValidation.mod_FlipliftFrontNumber(this, this);
    this.mod_FlipliftHardwareColor_matrix = VariantValidation.mod_FlipliftHardwareColor(this, this);
    this.mod_FlipliftHardwareType_matrix = VariantValidation.mod_FlipliftHardwareType(this, this);
    this.mod_FrontId_matrix = VariantValidation.mod_FrontId(this, this);
    this.mod_FrontWidth_matrix = VariantValidation.mod_FrontWidth(this, this);
    this.mod_ModuleName_matrix = VariantValidation.mod_ModuleName(this, this);
    this.mod_OpeningType_matrix = VariantValidation.mod_OpeningType(this, this);
    this.mod_FrontGapCarcase_matrix = VariantValidation.mod_FrontGapCarcase(this, this);
    this.mod_FrontPosStart_matrix = VariantValidation.mod_FrontPosStart(this, this);
    this.mod_FrontThk_matrix = VariantValidation.mod_FrontThk(this, this);
    this.mod_FrontType_matrix = VariantValidation.mod_FrontType(this, this);
    this.mod_HardwareColor_matrix = VariantValidation.mod_HardwareColor(this, this);
    this.mod_FrontOverlayInfo_matrix = VariantValidation.mod_FrontOverlayInfo(this, this);
    this.mod_FlipliftLogic_matrix = VariantValidation.mod_FlipliftLogic(this, this);
  }
  addpart_FlipliftHardwareBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareBom_PartVarsWritable {
    var c = new P_part_FlipliftHardwareBom(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_FlipliftHardwareGraphic(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareGraphic_PartVarsWritable {
    var c = new P_part_FlipliftHardwareGraphic(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_FlipliftHardwareFrontpanelDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareFrontpanelDrilling_PartVarsWritable {
    var c = new P_part_FlipliftHardwareFrontpanelDrilling(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }
  addpart_FlipliftHardwareSidepanelDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareSidepanelDrilling_PartVarsWritable {
    var c = new P_part_FlipliftHardwareSidepanelDrilling(this._selfNonNull, x, y, z, dimx, dimy, dimz);
    this.p.push(c);
    return c;
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mc_FlipliftHardware01_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mc_FlipliftHardware01_NonNull implements cbp_mc_FlipliftHardware01, adc_mc_FlipliftHardware01 ,IPartParentsNonNull_mc_FlipliftHardware01 {
  constructor(parent: OD_M_mc_FlipliftHardware01) {
    this.#internalParent = parent;
    this.parent = parent.parent;
  }
  #internalParent: OD_M_mc_FlipliftHardware01;

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
  #createBuildPlanInternal = mc_FlipliftHardware01_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mc_FlipliftHardware01_afterDataCompletion;
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
  parent: IModParents_mc_Fliplift01;
  addpart_FlipliftHardwareBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareBom_PartVarsWritable {
    return this.#internalParent.addpart_FlipliftHardwareBom(x, y, z, dimx, dimy, dimz);
  }
  addpart_FlipliftHardwareGraphic(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareGraphic_PartVarsWritable {
    return this.#internalParent.addpart_FlipliftHardwareGraphic(x, y, z, dimx, dimy, dimz);
  }
  addpart_FlipliftHardwareFrontpanelDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareFrontpanelDrilling_PartVarsWritable {
    return this.#internalParent.addpart_FlipliftHardwareFrontpanelDrilling(x, y, z, dimx, dimy, dimz);
  }
  addpart_FlipliftHardwareSidepanelDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareSidepanelDrilling_PartVarsWritable {
    return this.#internalParent.addpart_FlipliftHardwareSidepanelDrilling(x, y, z, dimx, dimy, dimz);
  }
  get mod_CarcaseId(): string  {
    return this.#internalParent.mod_CarcaseId!;
  }
  get mod_CarcasePartInfo(): string [] {
    return this.#internalParent.mod_CarcasePartInfo!;
  }
  get mod_FlipliftFrontHeightList(): number [] {
    return this.#internalParent.mod_FlipliftFrontHeightList!;
  }
  get mod_FrontHeight(): number  {
    return this.#internalParent.mod_FrontHeight!;
  }
  get mod_FlipliftType(): string  {
    return this.#internalParent.mod_FlipliftType!;
  }
  get mod_FlipliftType_matrix(): IMatrix_mod_FlipliftType {
    return this.#internalParent.mod_FlipliftType_matrix!;
  }
  get mod_Width(): number  {
    return this.#internalParent.mod_Width!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_FlipliftFrontNumber(): number  {
    return this.#internalParent.mod_FlipliftFrontNumber!;
  }
  get mod_FlipliftHardwareColor(): string  {
    return this.#internalParent.mod_FlipliftHardwareColor!;
  }
  get mod_FlipliftHardwareType(): string  {
    return this.#internalParent.mod_FlipliftHardwareType!;
  }
  get mod_FrontId(): string  {
    return this.#internalParent.mod_FrontId!;
  }
  get mod_FrontWidth(): number  {
    return this.#internalParent.mod_FrontWidth!;
  }
  get mod_ModuleName(): string  {
    return this.#internalParent.mod_ModuleName!;
  }
  get mod_OpeningType(): string  {
    return this.#internalParent.mod_OpeningType!;
  }
  get mod_OpeningAngle(): string [] {
    return this.#internalParent.mod_OpeningAngle!;
  }
  get mod_FrontpanelWeightCalculations(): number [] {
    return this.#internalParent.mod_FrontpanelWeightCalculations!;
  }
  get mod_FrontGapCarcase(): number  {
    return this.#internalParent.mod_FrontGapCarcase!;
  }
  get mod_FrontPosStart(): number  {
    return this.#internalParent.mod_FrontPosStart!;
  }
  get mod_FrontThk(): number  {
    return this.#internalParent.mod_FrontThk!;
  }
  get mod_FrontType(): string  {
    return this.#internalParent.mod_FrontType!;
  }
  get mod_HardwareColor(): string  {
    return this.#internalParent.mod_HardwareColor!;
  }
  get mod_HardwareTypeList(): string [] {
    return this.#internalParent.mod_HardwareTypeList!;
  }
  get mod_FrontOverlayInfo(): string  {
    return this.#internalParent.mod_FrontOverlayInfo!;
  }
  get mod_HandleWeightCalculations(): number [] {
    return this.#internalParent.mod_HandleWeightCalculations!;
  }
  get mod_FlipliftLogic(): string  {
    return this.#internalParent.mod_FlipliftLogic!;
  }
}

