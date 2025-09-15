import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
import { IModBaseProp, IPartBase, PartBase, PartTouch, I3DElement, TouchType } from '../mod-base'
import { CollisionDataRel } from '../touches'
import { GlobalFunc } from '../global-func'
import { P_part_Shelftop, IP_part_Shelftop_PartVarsReadOnly } from './part_Shelftop'
import { P_part_Shelfbtm, IP_part_Shelfbtm_PartVarsReadOnly } from './part_Shelfbtm'
import { P_part_Shelffixed, IP_part_Shelffixed_PartVarsReadOnly } from './part_Shelffixed'
import { P_part_ShelfadjDrill, IP_part_ShelfadjDrill_PartVarsReadOnly } from './part_ShelfadjDrill'
import { P_part_Railhortopfront, IP_part_Railhortopfront_PartVarsReadOnly } from './part_Railhortopfront'
import { P_part_Railhortopback, IP_part_Railhortopback_PartVarsReadOnly } from './part_Railhortopback'
import { P_part_Railverttopfront, IP_part_Railverttopfront_PartVarsReadOnly } from './part_Railverttopfront'
import { P_part_HingeDrill, IP_part_HingeDrill_PartVarsReadOnly } from './part_HingeDrill'
import { P_part_DrawerBoxDrilling, IP_part_DrawerBoxDrilling_PartVarsReadOnly } from './part_DrawerBoxDrilling'
import { P_part_HangerDrill, IP_part_HangerDrill_PartVarsReadOnly } from './part_HangerDrill'
import { P_part_PushtoopenDrill, IP_part_PushtoopenDrill_PartVarsReadOnly } from './part_PushtoopenDrill'
import { P_part_Railverttopback, IP_part_Railverttopback_PartVarsReadOnly } from './part_Railverttopback'
import { P_part_PushtoopenMountingPlateDrill, IP_part_PushtoopenMountingPlateDrill_PartVarsReadOnly } from './part_PushtoopenMountingPlateDrill'
import { P_part_Panelblind, IP_part_Panelblind_PartVarsReadOnly } from './part_Panelblind'
import { P_part_FlipliftHardwareSidepanelDrilling, IP_part_FlipliftHardwareSidepanelDrilling_PartVarsReadOnly } from './part_FlipliftHardwareSidepanelDrilling'
import { P_part_SlopedCeilingShelftopHor, IP_part_SlopedCeilingShelftopHor_PartVarsReadOnly } from './part_SlopedCeilingShelftopHor'
import { P_part_Backwall, IP_part_Backwall_PartVarsReadOnly } from './part_Backwall'
import { P_part_FillerHardwareProcessing, IP_part_FillerHardwareProcessing_PartVarsReadOnly } from './part_FillerHardwareProcessing'
import { BOM_ElementType_bomout_Board } from '../bom/types/bom_bomout_Board'
import { BOM_ElementType_bomout_Edge } from '../bom/types/bom_bomout_Edge'
import { BOM_ElementType_ncout_Group } from '../bom/types/touch_ncout_Group'
import { ct_tab_ApplianceGraphicLibrary, ICT_tab_ApplianceGraphicLibrary, cto_tab_ApplianceGraphicLibrary, ct2_tab_ApplianceGraphicLibrary } from '../custom-tables/tab_ApplianceGraphicLibrary'
import { ct_tab_BoardLibrary, ICT_tab_BoardLibrary, cto_tab_BoardLibrary, ct2_tab_BoardLibrary } from '../custom-tables/tab_BoardLibrary'
import { ct_tab_BoardMapping, ICT_tab_BoardMapping, cto_tab_BoardMapping, ct2_tab_BoardMapping } from '../custom-tables/tab_BoardMapping'
import { ct_tab_BracketConstruction, ICT_tab_BracketConstruction, cto_tab_BracketConstruction, ct2_tab_BracketConstruction } from '../custom-tables/tab_BracketConstruction'
import { ct_tab_BracketMapping, ICT_tab_BracketMapping, cto_tab_BracketMapping, ct2_tab_BracketMapping } from '../custom-tables/tab_BracketMapping'
import { ct_tab_CarcaseBackwallConstruction, ICT_tab_CarcaseBackwallConstruction, cto_tab_CarcaseBackwallConstruction, ct2_tab_CarcaseBackwallConstruction } from '../custom-tables/tab_CarcaseBackwallConstruction'
import { ct_tab_CarcaseBackwallSettings, ICT_tab_CarcaseBackwallSettings, cto_tab_CarcaseBackwallSettings, ct2_tab_CarcaseBackwallSettings } from '../custom-tables/tab_CarcaseBackwallSettings'
import { ct_tab_CarcaseCornerunitConstruction, ICT_tab_CarcaseCornerunitConstruction, cto_tab_CarcaseCornerunitConstruction, ct2_tab_CarcaseCornerunitConstruction } from '../custom-tables/tab_CarcaseCornerunitConstruction'
import { ct_tab_CarcasePartConnectionCalculations, ICT_tab_CarcasePartConnectionCalculations, cto_tab_CarcasePartConnectionCalculations, ct2_tab_CarcasePartConnectionCalculations } from '../custom-tables/tab_CarcasePartConnectionCalculations'
import { ct_tab_CarcasePartConnectionMapping, ICT_tab_CarcasePartConnectionMapping, cto_tab_CarcasePartConnectionMapping, ct2_tab_CarcasePartConnectionMapping } from '../custom-tables/tab_CarcasePartConnectionMapping'
import { ct_tab_CarcasePartGrainDirectionSettings, ICT_tab_CarcasePartGrainDirectionSettings, cto_tab_CarcasePartGrainDirectionSettings, ct2_tab_CarcasePartGrainDirectionSettings } from '../custom-tables/tab_CarcasePartGrainDirectionSettings'
import { ct_tab_CarcasePartsShape, ICT_tab_CarcasePartsShape, cto_tab_CarcasePartsShape, ct2_tab_CarcasePartsShape } from '../custom-tables/tab_CarcasePartsShape'
import { ct_tab_CarcaseShelfbtmSettings, ICT_tab_CarcaseShelfbtmSettings, cto_tab_CarcaseShelfbtmSettings, ct2_tab_CarcaseShelfbtmSettings } from '../custom-tables/tab_CarcaseShelfbtmSettings'
import { ct_tab_CarcaseShelftopSettings, ICT_tab_CarcaseShelftopSettings, cto_tab_CarcaseShelftopSettings, ct2_tab_CarcaseShelftopSettings } from '../custom-tables/tab_CarcaseShelftopSettings'
import { ct_tab_CarcaseSidepanelSettings, ICT_tab_CarcaseSidepanelSettings, cto_tab_CarcaseSidepanelSettings, ct2_tab_CarcaseSidepanelSettings } from '../custom-tables/tab_CarcaseSidepanelSettings'
import { ct_tab_CarcaseSlopedCeilingDimension, ICT_tab_CarcaseSlopedCeilingDimension, cto_tab_CarcaseSlopedCeilingDimension, ct2_tab_CarcaseSlopedCeilingDimension } from '../custom-tables/tab_CarcaseSlopedCeilingDimension'
import { ct_tab_CarcaseStorageunitConstruction, ICT_tab_CarcaseStorageunitConstruction, cto_tab_CarcaseStorageunitConstruction, ct2_tab_CarcaseStorageunitConstruction } from '../custom-tables/tab_CarcaseStorageunitConstruction'
import { ct_tab_CornerunitStraightConstruction, ICT_tab_CornerunitStraightConstruction, cto_tab_CornerunitStraightConstruction, ct2_tab_CornerunitStraightConstruction } from '../custom-tables/tab_CornerunitStraightConstruction'
import { ct_tab_DishwasherConstruction, ICT_tab_DishwasherConstruction, cto_tab_DishwasherConstruction, ct2_tab_DishwasherConstruction } from '../custom-tables/tab_DishwasherConstruction'
import { ct_tab_DishwasherMapping, ICT_tab_DishwasherMapping, cto_tab_DishwasherMapping, ct2_tab_DishwasherMapping } from '../custom-tables/tab_DishwasherMapping'
import { ct_tab_DoorSettings, ICT_tab_DoorSettings, cto_tab_DoorSettings, ct2_tab_DoorSettings } from '../custom-tables/tab_DoorSettings'
import { ct_tab_DrawerBoxColorMapping, ICT_tab_DrawerBoxColorMapping, cto_tab_DrawerBoxColorMapping, ct2_tab_DrawerBoxColorMapping } from '../custom-tables/tab_DrawerBoxColorMapping'
import { ct_tab_DrawerBoxConstruction, ICT_tab_DrawerBoxConstruction, cto_tab_DrawerBoxConstruction, ct2_tab_DrawerBoxConstruction } from '../custom-tables/tab_DrawerBoxConstruction'
import { ct_tab_DrawerBoxDimensionMapping, ICT_tab_DrawerBoxDimensionMapping, cto_tab_DrawerBoxDimensionMapping, ct2_tab_DrawerBoxDimensionMapping } from '../custom-tables/tab_DrawerBoxDimensionMapping'
import { ct_tab_DrawerBoxExtraItemSettings, ICT_tab_DrawerBoxExtraItemSettings, cto_tab_DrawerBoxExtraItemSettings, ct2_tab_DrawerBoxExtraItemSettings } from '../custom-tables/tab_DrawerBoxExtraItemSettings'
import { ct_tab_DrawerBoxInsertionSettings, ICT_tab_DrawerBoxInsertionSettings, cto_tab_DrawerBoxInsertionSettings, ct2_tab_DrawerBoxInsertionSettings } from '../custom-tables/tab_DrawerBoxInsertionSettings'
import { ct_tab_DrawerBoxMapping, ICT_tab_DrawerBoxMapping, cto_tab_DrawerBoxMapping, ct2_tab_DrawerBoxMapping } from '../custom-tables/tab_DrawerBoxMapping'
import { ct_tab_DrawerBoxWeightTypeSettings, ICT_tab_DrawerBoxWeightTypeSettings, cto_tab_DrawerBoxWeightTypeSettings, ct2_tab_DrawerBoxWeightTypeSettings } from '../custom-tables/tab_DrawerBoxWeightTypeSettings'
import { ct_tab_DuststripMapping, ICT_tab_DuststripMapping, cto_tab_DuststripMapping, ct2_tab_DuststripMapping } from '../custom-tables/tab_DuststripMapping'
import { ct_tab_EdgeClassSettings, ICT_tab_EdgeClassSettings, cto_tab_EdgeClassSettings, ct2_tab_EdgeClassSettings } from '../custom-tables/tab_EdgeClassSettings'
import { ct_tab_EdgeFrameSettings, ICT_tab_EdgeFrameSettings, cto_tab_EdgeFrameSettings, ct2_tab_EdgeFrameSettings } from '../custom-tables/tab_EdgeFrameSettings'
import { ct_tab_EdgeJointMapping, ICT_tab_EdgeJointMapping, cto_tab_EdgeJointMapping, ct2_tab_EdgeJointMapping } from '../custom-tables/tab_EdgeJointMapping'
import { ct_tab_EdgeJointSettings, ICT_tab_EdgeJointSettings, cto_tab_EdgeJointSettings, ct2_tab_EdgeJointSettings } from '../custom-tables/tab_EdgeJointSettings'
import { ct_tab_EdgeLibrary, ICT_tab_EdgeLibrary, cto_tab_EdgeLibrary, ct2_tab_EdgeLibrary } from '../custom-tables/tab_EdgeLibrary'
import { ct_tab_EdgeMapping, ICT_tab_EdgeMapping, cto_tab_EdgeMapping, ct2_tab_EdgeMapping } from '../custom-tables/tab_EdgeMapping'
import { ct_tab_EdgeNumberSettings, ICT_tab_EdgeNumberSettings, cto_tab_EdgeNumberSettings, ct2_tab_EdgeNumberSettings } from '../custom-tables/tab_EdgeNumberSettings'
import { ct_tab_EdgeSettings, ICT_tab_EdgeSettings, cto_tab_EdgeSettings, ct2_tab_EdgeSettings } from '../custom-tables/tab_EdgeSettings'
import { ct_tab_ErrorList, ICT_tab_ErrorList, cto_tab_ErrorList, ct2_tab_ErrorList } from '../custom-tables/tab_ErrorList'
import { ct_tab_FillerHardwareSettings, ICT_tab_FillerHardwareSettings, cto_tab_FillerHardwareSettings, ct2_tab_FillerHardwareSettings } from '../custom-tables/tab_FillerHardwareSettings'
import { ct_tab_FillerSettings, ICT_tab_FillerSettings, cto_tab_FillerSettings, ct2_tab_FillerSettings } from '../custom-tables/tab_FillerSettings'
import { ct_tab_FlipliftColorMapping, ICT_tab_FlipliftColorMapping, cto_tab_FlipliftColorMapping, ct2_tab_FlipliftColorMapping } from '../custom-tables/tab_FlipliftColorMapping'
import { ct_tab_FlipliftConstruction, ICT_tab_FlipliftConstruction, cto_tab_FlipliftConstruction, ct2_tab_FlipliftConstruction } from '../custom-tables/tab_FlipliftConstruction'
import { ct_tab_FlipliftMapping, ICT_tab_FlipliftMapping, cto_tab_FlipliftMapping, ct2_tab_FlipliftMapping } from '../custom-tables/tab_FlipliftMapping'
import { ct_tab_FlipliftSettings, ICT_tab_FlipliftSettings, cto_tab_FlipliftSettings, ct2_tab_FlipliftSettings } from '../custom-tables/tab_FlipliftSettings'
import { ct_tab_FlipliftWeightTypeMapping, ICT_tab_FlipliftWeightTypeMapping, cto_tab_FlipliftWeightTypeMapping, ct2_tab_FlipliftWeightTypeMapping } from '../custom-tables/tab_FlipliftWeightTypeMapping'
import { ct_tab_FramePartConnectionMapping, ICT_tab_FramePartConnectionMapping, cto_tab_FramePartConnectionMapping, ct2_tab_FramePartConnectionMapping } from '../custom-tables/tab_FramePartConnectionMapping'
import { ct_tab_FridgeConstruction, ICT_tab_FridgeConstruction, cto_tab_FridgeConstruction, ct2_tab_FridgeConstruction } from '../custom-tables/tab_FridgeConstruction'
import { ct_tab_FridgeMapping, ICT_tab_FridgeMapping, cto_tab_FridgeMapping, ct2_tab_FridgeMapping } from '../custom-tables/tab_FridgeMapping'
import { ct_tab_FrontConstruction, ICT_tab_FrontConstruction, cto_tab_FrontConstruction, ct2_tab_FrontConstruction } from '../custom-tables/tab_FrontConstruction'
import { ct_tab_FrontEdgeColorMapping, ICT_tab_FrontEdgeColorMapping, cto_tab_FrontEdgeColorMapping, ct2_tab_FrontEdgeColorMapping } from '../custom-tables/tab_FrontEdgeColorMapping'
import { ct_tab_FrontPanelConstruction, ICT_tab_FrontPanelConstruction, cto_tab_FrontPanelConstruction, ct2_tab_FrontPanelConstruction } from '../custom-tables/tab_FrontPanelConstruction'
import { ct_tab_FrontPartGrainDirectionSettings, ICT_tab_FrontPartGrainDirectionSettings, cto_tab_FrontPartGrainDirectionSettings, ct2_tab_FrontPartGrainDirectionSettings } from '../custom-tables/tab_FrontPartGrainDirectionSettings'
import { ct_tab_GrainDirectionSettings, ICT_tab_GrainDirectionSettings, cto_tab_GrainDirectionSettings, ct2_tab_GrainDirectionSettings } from '../custom-tables/tab_GrainDirectionSettings'
import { ct_tab_GrainSettings, ICT_tab_GrainSettings, cto_tab_GrainSettings, ct2_tab_GrainSettings } from '../custom-tables/tab_GrainSettings'
import { ct_tab_GraphicFileLibrary, ICT_tab_GraphicFileLibrary, cto_tab_GraphicFileLibrary, ct2_tab_GraphicFileLibrary } from '../custom-tables/tab_GraphicFileLibrary'
import { ct_tab_GraphicLibrary, ICT_tab_GraphicLibrary, cto_tab_GraphicLibrary, ct2_tab_GraphicLibrary } from '../custom-tables/tab_GraphicLibrary'
import { ct_tab_GraphicLibraryMapping, ICT_tab_GraphicLibraryMapping, cto_tab_GraphicLibraryMapping, ct2_tab_GraphicLibraryMapping } from '../custom-tables/tab_GraphicLibraryMapping'
import { ct_tab_HandleConstruction, ICT_tab_HandleConstruction, cto_tab_HandleConstruction, ct2_tab_HandleConstruction } from '../custom-tables/tab_HandleConstruction'
import { ct_tab_HandleLengthMapping, ICT_tab_HandleLengthMapping, cto_tab_HandleLengthMapping, ct2_tab_HandleLengthMapping } from '../custom-tables/tab_HandleLengthMapping'
import { ct_tab_HandleMapping, ICT_tab_HandleMapping, cto_tab_HandleMapping, ct2_tab_HandleMapping } from '../custom-tables/tab_HandleMapping'
import { ct_tab_HandleSettings, ICT_tab_HandleSettings, cto_tab_HandleSettings, ct2_tab_HandleSettings } from '../custom-tables/tab_HandleSettings'
import { ct_tab_HangerMapping, ICT_tab_HangerMapping, cto_tab_HangerMapping, ct2_tab_HangerMapping } from '../custom-tables/tab_HangerMapping'
import { ct_tab_HangerSettings, ICT_tab_HangerSettings, cto_tab_HangerSettings, ct2_tab_HangerSettings } from '../custom-tables/tab_HangerSettings'
import { ct_tab_HardwareDrillHorLibrary, ICT_tab_HardwareDrillHorLibrary, cto_tab_HardwareDrillHorLibrary, ct2_tab_HardwareDrillHorLibrary } from '../custom-tables/tab_HardwareDrillHorLibrary'
import { ct_tab_HardwareDrillVertLibrary, ICT_tab_HardwareDrillVertLibrary, cto_tab_HardwareDrillVertLibrary, ct2_tab_HardwareDrillVertLibrary } from '../custom-tables/tab_HardwareDrillVertLibrary'
import { ct_tab_HardwareLibrary, ICT_tab_HardwareLibrary, cto_tab_HardwareLibrary, ct2_tab_HardwareLibrary } from '../custom-tables/tab_HardwareLibrary'
import { ct_tab_HardwareLibraryMapping, ICT_tab_HardwareLibraryMapping, cto_tab_HardwareLibraryMapping, ct2_tab_HardwareLibraryMapping } from '../custom-tables/tab_HardwareLibraryMapping'
import { ct_tab_HardwareMillingLibrary, ICT_tab_HardwareMillingLibrary, cto_tab_HardwareMillingLibrary, ct2_tab_HardwareMillingLibrary } from '../custom-tables/tab_HardwareMillingLibrary'
import { ct_tab_HardwareSettings, ICT_tab_HardwareSettings, cto_tab_HardwareSettings, ct2_tab_HardwareSettings } from '../custom-tables/tab_HardwareSettings'
import { ct_tab_HingeConstruction, ICT_tab_HingeConstruction, cto_tab_HingeConstruction, ct2_tab_HingeConstruction } from '../custom-tables/tab_HingeConstruction'
import { ct_tab_HingeDrillingDistance, ICT_tab_HingeDrillingDistance, cto_tab_HingeDrillingDistance, ct2_tab_HingeDrillingDistance } from '../custom-tables/tab_HingeDrillingDistance'
import { ct_tab_HingeMapping, ICT_tab_HingeMapping, cto_tab_HingeMapping, ct2_tab_HingeMapping } from '../custom-tables/tab_HingeMapping'
import { ct_tab_HingePosition, ICT_tab_HingePosition, cto_tab_HingePosition, ct2_tab_HingePosition } from '../custom-tables/tab_HingePosition'
import { ct_tab_HingeSettings, ICT_tab_HingeSettings, cto_tab_HingeSettings, ct2_tab_HingeSettings } from '../custom-tables/tab_HingeSettings'
import { ct_tab_HobConstruction, ICT_tab_HobConstruction, cto_tab_HobConstruction, ct2_tab_HobConstruction } from '../custom-tables/tab_HobConstruction'
import { ct_tab_HobMapping, ICT_tab_HobMapping, cto_tab_HobMapping, ct2_tab_HobMapping } from '../custom-tables/tab_HobMapping'
import { ct_tab_HoodMapping, ICT_tab_HoodMapping, cto_tab_HoodMapping, ct2_tab_HoodMapping } from '../custom-tables/tab_HoodMapping'
import { ct_tab_MaterialMapping, ICT_tab_MaterialMapping, cto_tab_MaterialMapping, ct2_tab_MaterialMapping } from '../custom-tables/tab_MaterialMapping'
import { ct_tab_ObjectMapping, ICT_tab_ObjectMapping, cto_tab_ObjectMapping, ct2_tab_ObjectMapping } from '../custom-tables/tab_ObjectMapping'
import { ct_tab_OvenConstruction, ICT_tab_OvenConstruction, cto_tab_OvenConstruction, ct2_tab_OvenConstruction } from '../custom-tables/tab_OvenConstruction'
import { ct_tab_OvenMapping, ICT_tab_OvenMapping, cto_tab_OvenMapping, ct2_tab_OvenMapping } from '../custom-tables/tab_OvenMapping'
import { ct_tab_PanelWoodFrameConstruction, ICT_tab_PanelWoodFrameConstruction, cto_tab_PanelWoodFrameConstruction, ct2_tab_PanelWoodFrameConstruction } from '../custom-tables/tab_PanelWoodFrameConstruction'
import { ct_tab_PartConnectionSettings, ICT_tab_PartConnectionSettings, cto_tab_PartConnectionSettings, ct2_tab_PartConnectionSettings } from '../custom-tables/tab_PartConnectionSettings'
import { ct_tab_PartOverdimensionSettings, ICT_tab_PartOverdimensionSettings, cto_tab_PartOverdimensionSettings, ct2_tab_PartOverdimensionSettings } from '../custom-tables/tab_PartOverdimensionSettings'
import { ct_tab_PartSettings, ICT_tab_PartSettings, cto_tab_PartSettings, ct2_tab_PartSettings } from '../custom-tables/tab_PartSettings'
import { ct_tab_PartsGraphicRotation, ICT_tab_PartsGraphicRotation, cto_tab_PartsGraphicRotation, ct2_tab_PartsGraphicRotation } from '../custom-tables/tab_PartsGraphicRotation'
import { ct_tab_PlinthAreaConstruction, ICT_tab_PlinthAreaConstruction, cto_tab_PlinthAreaConstruction, ct2_tab_PlinthAreaConstruction } from '../custom-tables/tab_PlinthAreaConstruction'
import { ct_tab_PlinthAreaMapping, ICT_tab_PlinthAreaMapping, cto_tab_PlinthAreaMapping, ct2_tab_PlinthAreaMapping } from '../custom-tables/tab_PlinthAreaMapping'
import { ct_tab_PlinthAreaSettings, ICT_tab_PlinthAreaSettings, cto_tab_PlinthAreaSettings, ct2_tab_PlinthAreaSettings } from '../custom-tables/tab_PlinthAreaSettings'
import { ct_tab_ProcessingMapping, ICT_tab_ProcessingMapping, cto_tab_ProcessingMapping, ct2_tab_ProcessingMapping } from '../custom-tables/tab_ProcessingMapping'
import { ct_tab_PullOutElementColorMapping, ICT_tab_PullOutElementColorMapping, cto_tab_PullOutElementColorMapping, ct2_tab_PullOutElementColorMapping } from '../custom-tables/tab_PullOutElementColorMapping'
import { ct_tab_PullOutHardwareInsertionSettings, ICT_tab_PullOutHardwareInsertionSettings, cto_tab_PullOutHardwareInsertionSettings, ct2_tab_PullOutHardwareInsertionSettings } from '../custom-tables/tab_PullOutHardwareInsertionSettings'
import { ct_tab_PullOutMapping, ICT_tab_PullOutMapping, cto_tab_PullOutMapping, ct2_tab_PullOutMapping } from '../custom-tables/tab_PullOutMapping'
import { ct_tab_PullOutSettings, ICT_tab_PullOutSettings, cto_tab_PullOutSettings, ct2_tab_PullOutSettings } from '../custom-tables/tab_PullOutSettings'
import { ct_tab_PushtoopenMapping, ICT_tab_PushtoopenMapping, cto_tab_PushtoopenMapping, ct2_tab_PushtoopenMapping } from '../custom-tables/tab_PushtoopenMapping'
import { ct_tab_PushtoopenSettings, ICT_tab_PushtoopenSettings, cto_tab_PushtoopenSettings, ct2_tab_PushtoopenSettings } from '../custom-tables/tab_PushtoopenSettings'
import { ct_tab_SawingAngleLibrary, ICT_tab_SawingAngleLibrary, cto_tab_SawingAngleLibrary, ct2_tab_SawingAngleLibrary } from '../custom-tables/tab_SawingAngleLibrary'
import { ct_tab_SawingVertLibrary, ICT_tab_SawingVertLibrary, cto_tab_SawingVertLibrary, ct2_tab_SawingVertLibrary } from '../custom-tables/tab_SawingVertLibrary'
import { ct_tab_ShelfadjDrillSettings, ICT_tab_ShelfadjDrillSettings, cto_tab_ShelfadjDrillSettings, ct2_tab_ShelfadjDrillSettings } from '../custom-tables/tab_ShelfadjDrillSettings'
import { ct_tab_ShelfadjQtyPosSettings, ICT_tab_ShelfadjQtyPosSettings, cto_tab_ShelfadjQtyPosSettings, ct2_tab_ShelfadjQtyPosSettings } from '../custom-tables/tab_ShelfadjQtyPosSettings'
import { ct_tab_ShelfadjSettings, ICT_tab_ShelfadjSettings, cto_tab_ShelfadjSettings, ct2_tab_ShelfadjSettings } from '../custom-tables/tab_ShelfadjSettings'
import { ct_tab_SinkConstruction, ICT_tab_SinkConstruction, cto_tab_SinkConstruction, ct2_tab_SinkConstruction } from '../custom-tables/tab_SinkConstruction'
import { ct_tab_SinkMapping, ICT_tab_SinkMapping, cto_tab_SinkMapping, ct2_tab_SinkMapping } from '../custom-tables/tab_SinkMapping'
import { ct_tab_SlopedCeilingSettings, ICT_tab_SlopedCeilingSettings, cto_tab_SlopedCeilingSettings, ct2_tab_SlopedCeilingSettings } from '../custom-tables/tab_SlopedCeilingSettings'
import { IPartParentsNonNull_mc_StorageunitSidepanel01 } from '../mod-interfaces'

export interface IP_part_Sidepanelleft_PartVarsReadOnly extends IPartBase {
  parent: IPartParentsNonNull_mc_StorageunitSidepanel01;
  get pa_TopColor(): string;
  get pa_BtmColor(): string;
  get pa_EdgeFrontColor(): string;
  get pa_EdgeLeftColor(): string;
  get pa_EdgeBackColor(): string;
  get pa_EdgeRightColor(): string;
  get pa_EdgeFrontType(): string;
  get pa_EdgeLeftType(): string;
  get pa_EdgeBackType(): string;
  get pa_EdgeRightType(): string;
  get pa_EdgeJointType(): string;
  get pa_GrainDirection(): string;
  get pa_Program(): string;
  set pa_HardwareQty1(value: number);
  get pa_HardwareQty1(): number;
  set pa_HardwareQty2(value: number);
  get pa_HardwareQty2(): number;
  set pa_HardwareQty3(value: number);
  get pa_HardwareQty3(): number;
  set pa_HardwareSupplier1(value: string);
  get pa_HardwareSupplier1(): string;
  set pa_HardwareSupplier2(value: string);
  get pa_HardwareSupplier2(): string;
  set pa_HardwareSupplier3(value: string);
  get pa_HardwareSupplier3(): string;
  set pa_HardwareSupplierArticle1(value: string);
  get pa_HardwareSupplierArticle1(): string;
  set pa_HardwareSupplierArticle2(value: string);
  get pa_HardwareSupplierArticle2(): string;
  set pa_HardwareSupplierArticle3(value: string);
  get pa_HardwareSupplierArticle3(): string;
  set pa_HardwareQty4(value: number);
  get pa_HardwareQty4(): number;
  set pa_HardwareQty5(value: number);
  get pa_HardwareQty5(): number;
  set pa_HardwareSupplier4(value: string);
  get pa_HardwareSupplier4(): string;
  set pa_HardwareSupplier5(value: string);
  get pa_HardwareSupplier5(): string;
  set pa_HardwareSupplierArticle4(value: string);
  get pa_HardwareSupplierArticle4(): string;
  set pa_HardwareSupplierArticle5(value: string);
  get pa_HardwareSupplierArticle5(): string;
  get pa_CarcaseConnectionLeftTop(): string;
  get pa_CarcaseConnectionLeftBtm(): string;
  get pa_HardwareColor(): string;
  get pa_TypeElement(): string;
  get pa_ParentName(): string;
  get pa_CarcasePartConnectionLeftHor(): string;
  get pa_FittingConnectionLeftHor(): string;
  get pa_FittingConnectionLeftTop(): string;
  get pa_FittingConnectionLeftBtm(): string;
  get pa_BomId(): string;
  get pa_CarcaseEdgeTypeSettings(): cto_tab_CarcaseStorageunitConstruction|undefined;
  get pa_AdditionalInfo1(): string;
  get pa_FingergripInfo(): string;
  get pa_BackHeight(): number;
  get pa_TopDepth(): number;
  get pa_ColorGrainGroup(): string;
  get pa_ColorOutsideGrainGroup(): string;
  get pa_GrainLogic(): string;
  get pa_ProgramGrainGroup(): string;
  get pa_ProgramOutsideGrainGroup(): string;
}

export interface IP_part_Sidepanelleft_PartVarsWritable extends IP_part_Sidepanelleft_PartVarsReadOnly {
  set pa_TopColor(value: string);
  set pa_BtmColor(value: string);
  set pa_EdgeFrontColor(value: string);
  set pa_EdgeLeftColor(value: string);
  set pa_EdgeBackColor(value: string);
  set pa_EdgeRightColor(value: string);
  set pa_EdgeFrontType(value: string);
  set pa_EdgeLeftType(value: string);
  set pa_EdgeBackType(value: string);
  set pa_EdgeRightType(value: string);
  set pa_EdgeJointType(value: string);
  set pa_GrainDirection(value: string);
  set pa_Program(value: string);
  set pa_CarcaseConnectionLeftTop(value: string);
  set pa_CarcaseConnectionLeftBtm(value: string);
  set pa_HardwareColor(value: string);
  set pa_TypeElement(value: string);
  set pa_ParentName(value: string);
  set pa_CarcasePartConnectionLeftHor(value: string);
  set pa_FittingConnectionLeftHor(value: string);
  set pa_FittingConnectionLeftTop(value: string);
  set pa_FittingConnectionLeftBtm(value: string);
  set pa_BomId(value: string);
  set pa_CarcaseEdgeTypeSettings(value: cto_tab_CarcaseStorageunitConstruction|undefined);
  set pa_AdditionalInfo1(value: string);
  set pa_FingergripInfo(value: string);
  set pa_BackHeight(value: number);
  set pa_TopDepth(value: number);
  set pa_ColorGrainGroup(value: string);
  set pa_ColorOutsideGrainGroup(value: string);
  set pa_GrainLogic(value: string);
  set pa_ProgramGrainGroup(value: string);
  set pa_ProgramOutsideGrainGroup(value: string);
}

export class P_part_Sidepanelleft extends PartBase implements IP_part_Sidepanelleft_PartVarsWritable {
  constructor(parent: IPartParentsNonNull_mc_StorageunitSidepanel01, 
x:number, y:number, z:number, dimx:number, dimy:number, dimz:number) {
    super(parent, 'part_Sidepanelleft', x, y, z, dimx, dimy, dimz);
    this.parent = parent;
    this._wdt = 'YZX';
  }
  parent: IPartParentsNonNull_mc_StorageunitSidepanel01; // module which created this part
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('pa_TopColor', this.#pa_TopColor);
  res.set('pa_BtmColor', this.#pa_BtmColor);
  res.set('pa_EdgeFrontColor', this.#pa_EdgeFrontColor);
  res.set('pa_EdgeLeftColor', this.#pa_EdgeLeftColor);
  res.set('pa_EdgeBackColor', this.#pa_EdgeBackColor);
  res.set('pa_EdgeRightColor', this.#pa_EdgeRightColor);
  res.set('pa_EdgeFrontType', this.#pa_EdgeFrontType);
  res.set('pa_EdgeLeftType', this.#pa_EdgeLeftType);
  res.set('pa_EdgeBackType', this.#pa_EdgeBackType);
  res.set('pa_EdgeRightType', this.#pa_EdgeRightType);
  res.set('pa_EdgeJointType', this.#pa_EdgeJointType);
  res.set('pa_GrainDirection', this.#pa_GrainDirection);
  res.set('pa_Program', this.#pa_Program);
  res.set('pa_HardwareQty1', this.#pa_HardwareQty1);
  res.set('pa_HardwareQty2', this.#pa_HardwareQty2);
  res.set('pa_HardwareQty3', this.#pa_HardwareQty3);
  res.set('pa_HardwareSupplier1', this.#pa_HardwareSupplier1);
  res.set('pa_HardwareSupplier2', this.#pa_HardwareSupplier2);
  res.set('pa_HardwareSupplier3', this.#pa_HardwareSupplier3);
  res.set('pa_HardwareSupplierArticle1', this.#pa_HardwareSupplierArticle1);
  res.set('pa_HardwareSupplierArticle2', this.#pa_HardwareSupplierArticle2);
  res.set('pa_HardwareSupplierArticle3', this.#pa_HardwareSupplierArticle3);
  res.set('pa_HardwareQty4', this.#pa_HardwareQty4);
  res.set('pa_HardwareQty5', this.#pa_HardwareQty5);
  res.set('pa_HardwareSupplier4', this.#pa_HardwareSupplier4);
  res.set('pa_HardwareSupplier5', this.#pa_HardwareSupplier5);
  res.set('pa_HardwareSupplierArticle4', this.#pa_HardwareSupplierArticle4);
  res.set('pa_HardwareSupplierArticle5', this.#pa_HardwareSupplierArticle5);
  res.set('pa_CarcaseConnectionLeftTop', this.#pa_CarcaseConnectionLeftTop);
  res.set('pa_CarcaseConnectionLeftBtm', this.#pa_CarcaseConnectionLeftBtm);
  res.set('pa_HardwareColor', this.#pa_HardwareColor);
  res.set('pa_TypeElement', this.#pa_TypeElement);
  res.set('pa_ParentName', this.#pa_ParentName);
  res.set('pa_CarcasePartConnectionLeftHor', this.#pa_CarcasePartConnectionLeftHor);
  res.set('pa_FittingConnectionLeftHor', this.#pa_FittingConnectionLeftHor);
  res.set('pa_FittingConnectionLeftTop', this.#pa_FittingConnectionLeftTop);
  res.set('pa_FittingConnectionLeftBtm', this.#pa_FittingConnectionLeftBtm);
  res.set('pa_BomId', this.#pa_BomId);
  res.set('pa_CarcaseEdgeTypeSettings', this.#pa_CarcaseEdgeTypeSettings);
  res.set('pa_AdditionalInfo1', this.#pa_AdditionalInfo1);
  res.set('pa_FingergripInfo', this.#pa_FingergripInfo);
  res.set('pa_BackHeight', this.#pa_BackHeight);
  res.set('pa_TopDepth', this.#pa_TopDepth);
  res.set('pa_ColorGrainGroup', this.#pa_ColorGrainGroup);
  res.set('pa_ColorOutsideGrainGroup', this.#pa_ColorOutsideGrainGroup);
  res.set('pa_GrainLogic', this.#pa_GrainLogic);
  res.set('pa_ProgramGrainGroup', this.#pa_ProgramGrainGroup);
  res.set('pa_ProgramOutsideGrainGroup', this.#pa_ProgramOutsideGrainGroup);
    return res;
  }
  setAttributes() {
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // part_Sidepanelleft_ValueScript
    if (this.#pa_TopColor === undefined) {
      this.pa_TopColor = this.parent.mod_CarcaseColor;
    }
    if (this.#pa_BtmColor === undefined) {
      this.pa_BtmColor = this.parent.mod_CarcaseOutsideColor;
    }
    if (this.#pa_EdgeFrontColor === undefined) {
      this.pa_EdgeFrontColor = this.parent.mod_CarcaseEdgeFrontColor;
    }
    if (this.#pa_EdgeLeftColor === undefined) {
      this.pa_EdgeLeftColor = this.parent.mod_CarcaseEdgeColor;
    }
    if (this.#pa_EdgeBackColor === undefined) {
      this.pa_EdgeBackColor = this.parent.mod_CarcaseEdgeBackColor;
    }
    if (this.#pa_EdgeRightColor === undefined) {
      this.pa_EdgeRightColor = this.parent.mod_CarcaseEdgeColor;
    }
    if (this.#pa_EdgeFrontType === undefined) {
      this.pa_EdgeFrontType = this.parent.mod_EdgeFrontType;
    }
    if (this.#pa_EdgeLeftType === undefined) {
      this.pa_EdgeLeftType = this.parent.mod_EdgeLeftType;
    }
    if (this.#pa_EdgeBackType === undefined) {
      this.pa_EdgeBackType = this.parent.mod_EdgeBackType;
    }
    if (this.#pa_EdgeRightType === undefined) {
      this.pa_EdgeRightType = this.parent.mod_EdgeRightType;
    }
    if (this.#pa_EdgeJointType === undefined) {
      this.pa_EdgeJointType = this.parent.mod_EdgeJointType;
    }
    if (this.#pa_GrainDirection === undefined) {
      this.pa_GrainDirection = 'Neutral';
    }
    if (this.#pa_Program === undefined) {
      this.pa_Program = this.parent.mod_CarcaseProgram;
    }
    if (this.#pa_HardwareQty1 === undefined) {
      this.pa_HardwareQty1 = 0;
    }
    if (this.#pa_HardwareQty2 === undefined) {
      this.pa_HardwareQty2 = 0;
    }
    if (this.#pa_HardwareQty3 === undefined) {
      this.pa_HardwareQty3 = 0;
    }
    if (this.#pa_HardwareSupplier1 === undefined) {
      this.pa_HardwareSupplier1 = 'Empty';
    }
    if (this.#pa_HardwareSupplier2 === undefined) {
      this.pa_HardwareSupplier2 = 'Empty';
    }
    if (this.#pa_HardwareSupplier3 === undefined) {
      this.pa_HardwareSupplier3 = 'Empty';
    }
    if (this.#pa_HardwareSupplierArticle1 === undefined) {
      this.pa_HardwareSupplierArticle1 = 'Empty';
    }
    if (this.#pa_HardwareSupplierArticle2 === undefined) {
      this.pa_HardwareSupplierArticle2 = 'Empty';
    }
    if (this.#pa_HardwareSupplierArticle3 === undefined) {
      this.pa_HardwareSupplierArticle3 = 'Empty';
    }
    if (this.#pa_HardwareQty4 === undefined) {
      this.pa_HardwareQty4 = 0;
    }
    if (this.#pa_HardwareQty5 === undefined) {
      this.pa_HardwareQty5 = 0;
    }
    if (this.#pa_HardwareSupplier4 === undefined) {
      this.pa_HardwareSupplier4 = 'Empty';
    }
    if (this.#pa_HardwareSupplier5 === undefined) {
      this.pa_HardwareSupplier5 = 'Empty';
    }
    if (this.#pa_HardwareSupplierArticle4 === undefined) {
      this.pa_HardwareSupplierArticle4 = 'Empty';
    }
    if (this.#pa_HardwareSupplierArticle5 === undefined) {
      this.pa_HardwareSupplierArticle5 = 'Empty';
    }
    if (this.#pa_CarcaseConnectionLeftTop === undefined) {
      this.pa_CarcaseConnectionLeftTop = this.parent.mod_CarcaseConnectionLeftTop;
    }
    if (this.#pa_CarcaseConnectionLeftBtm === undefined) {
      this.pa_CarcaseConnectionLeftBtm = this.parent.mod_CarcaseConnectionLeftBtm;
    }
    if (this.#pa_HardwareColor === undefined) {
      this.pa_HardwareColor = this.parent.mod_HardwareColor;
    }
    if (this.#pa_TypeElement === undefined) {
      this.pa_TypeElement = this.parent.mod_TypeElement;
    }
    if (this.#pa_ParentName === undefined) {
      this.pa_ParentName = this.parent.mod_ParentName;
    }
    if (this.#pa_CarcasePartConnectionLeftHor === undefined) {
      this.pa_CarcasePartConnectionLeftHor = this.parent.mod_CarcasePartConnectionLeftHor;
    }
    if (this.#pa_FittingConnectionLeftHor === undefined) {
      this.pa_FittingConnectionLeftHor = this.parent.mod_FittingConnectionLeftHor;
    }
    if (this.#pa_FittingConnectionLeftTop === undefined) {
      this.pa_FittingConnectionLeftTop = this.parent.mod_FittingConnectionLeftTop;
    }
    if (this.#pa_FittingConnectionLeftBtm === undefined) {
      this.pa_FittingConnectionLeftBtm = this.parent.mod_FittingConnectionLeftBtm;
    }
    if (this.#pa_BomId === undefined) {
      this.pa_BomId = this.parent.mod_CarcaseId;
    }
    if (this.#pa_AdditionalInfo1 === undefined) {
      this.pa_AdditionalInfo1 = 'None';
    }
    if (this.#pa_FingergripInfo === undefined) {
      this.pa_FingergripInfo = '';
    }
    if (this.#pa_BackHeight === undefined) {
      this.pa_BackHeight = 0;
    }
    if (this.#pa_TopDepth === undefined) {
      this.pa_TopDepth = 0;
    }
    if (this.#pa_ColorGrainGroup === undefined) {
      this.pa_ColorGrainGroup = this.parent.mod_CarcaseColor_matrix.GrainGroupId;
    }
    if (this.#pa_ColorOutsideGrainGroup === undefined) {
      this.pa_ColorOutsideGrainGroup = this.parent.mod_CarcaseOutsideColor_matrix.GrainGroupId;
    }
    if (this.#pa_GrainLogic === undefined) {
      this.pa_GrainLogic = this.parent.mod_GrainLogic;
    }
    if (this.#pa_ProgramGrainGroup === undefined) {
      this.pa_ProgramGrainGroup = this.parent.mod_CarcaseProgram_matrix.GrainGroupId;
    }
    if (this.#pa_ProgramOutsideGrainGroup === undefined) {
      this.pa_ProgramOutsideGrainGroup = this.parent.mod_CarcaseOutsideProgram_matrix.GrainGroupId;
    }
    // ###############################################################
    // ################### END CUSTOM SCRIPTS ########################
    // ###############################################################
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
  }
  checkAttributes() {
    internal_enterCheckPartAttributes(this._id, this._partId, this.parentId, this._parentUniqueId);
    if (this.#pa_TopColor === undefined) {
      logError('Attribute pa_TopColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_BtmColor === undefined) {
      logError('Attribute pa_BtmColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeFrontColor === undefined) {
      logError('Attribute pa_EdgeFrontColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeLeftColor === undefined) {
      logError('Attribute pa_EdgeLeftColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeBackColor === undefined) {
      logError('Attribute pa_EdgeBackColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeRightColor === undefined) {
      logError('Attribute pa_EdgeRightColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeFrontType === undefined) {
      logError('Attribute pa_EdgeFrontType not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeLeftType === undefined) {
      logError('Attribute pa_EdgeLeftType not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeBackType === undefined) {
      logError('Attribute pa_EdgeBackType not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeRightType === undefined) {
      logError('Attribute pa_EdgeRightType not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeJointType === undefined) {
      logError('Attribute pa_EdgeJointType not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_GrainDirection === undefined) {
      logError('Attribute pa_GrainDirection not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_Program === undefined) {
      logError('Attribute pa_Program not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareQty1 === undefined) {
      logError('Attribute pa_HardwareQty1 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareQty2 === undefined) {
      logError('Attribute pa_HardwareQty2 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareQty3 === undefined) {
      logError('Attribute pa_HardwareQty3 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplier1 === undefined) {
      logError('Attribute pa_HardwareSupplier1 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplier2 === undefined) {
      logError('Attribute pa_HardwareSupplier2 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplier3 === undefined) {
      logError('Attribute pa_HardwareSupplier3 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplierArticle1 === undefined) {
      logError('Attribute pa_HardwareSupplierArticle1 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplierArticle2 === undefined) {
      logError('Attribute pa_HardwareSupplierArticle2 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplierArticle3 === undefined) {
      logError('Attribute pa_HardwareSupplierArticle3 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareQty4 === undefined) {
      logError('Attribute pa_HardwareQty4 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareQty5 === undefined) {
      logError('Attribute pa_HardwareQty5 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplier4 === undefined) {
      logError('Attribute pa_HardwareSupplier4 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplier5 === undefined) {
      logError('Attribute pa_HardwareSupplier5 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplierArticle4 === undefined) {
      logError('Attribute pa_HardwareSupplierArticle4 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareSupplierArticle5 === undefined) {
      logError('Attribute pa_HardwareSupplierArticle5 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_CarcaseConnectionLeftTop === undefined) {
      logError('Attribute pa_CarcaseConnectionLeftTop not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_CarcaseConnectionLeftBtm === undefined) {
      logError('Attribute pa_CarcaseConnectionLeftBtm not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_HardwareColor === undefined) {
      logError('Attribute pa_HardwareColor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_TypeElement === undefined) {
      logError('Attribute pa_TypeElement not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_ParentName === undefined) {
      logError('Attribute pa_ParentName not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_CarcasePartConnectionLeftHor === undefined) {
      logError('Attribute pa_CarcasePartConnectionLeftHor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_FittingConnectionLeftHor === undefined) {
      logError('Attribute pa_FittingConnectionLeftHor not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_FittingConnectionLeftTop === undefined) {
      logError('Attribute pa_FittingConnectionLeftTop not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_FittingConnectionLeftBtm === undefined) {
      logError('Attribute pa_FittingConnectionLeftBtm not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_BomId === undefined) {
      logError('Attribute pa_BomId not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_AdditionalInfo1 === undefined) {
      logError('Attribute pa_AdditionalInfo1 not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_FingergripInfo === undefined) {
      logError('Attribute pa_FingergripInfo not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_BackHeight === undefined) {
      logError('Attribute pa_BackHeight not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_TopDepth === undefined) {
      logError('Attribute pa_TopDepth not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_ColorGrainGroup === undefined) {
      logError('Attribute pa_ColorGrainGroup not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_ColorOutsideGrainGroup === undefined) {
      logError('Attribute pa_ColorOutsideGrainGroup not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_GrainLogic === undefined) {
      logError('Attribute pa_GrainLogic not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_ProgramGrainGroup === undefined) {
      logError('Attribute pa_ProgramGrainGroup not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    if (this.#pa_ProgramOutsideGrainGroup === undefined) {
      logError('Attribute pa_ProgramOutsideGrainGroup not set in part part_Sidepanelleft (id: ' + this._id + ')');
    }
    internal_leaveCheckPartAttributes();
  }
  createBomElements() {
    try {
    const partSelf = this;
      // bomout_Board: 141
      if (partSelf._g?.basic_CreateBom == 'Library') { // ####################### CUSTOM SCRIPTS ########################
        const parentId = partSelf._id;
        const _bom = new class BOM141 extends BOM_ElementType_bomout_Board {
          constructor() { super(partSelf); }
          set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
            const part = partSelf;
            internal_enterBomPartMasterDataElements(partSelf._id, partSelf._partId);
             // ####################### CUSTOM SCRIPTS ########################
// Type of the Bom-Element (will be checked in order output)
let elementType='Board';

// ProductionSite Category (to split the orders for different production sites)
let elementCategory='';

// Id of the parent to create the hierarchy
let parentBomId=part.pa_BomId;

// Call the function to process the Bom-Element
GlobalFunc.process_BoardBom(this, part, elementType, elementCategory, parentBomId)
             // ################### END CUSTOM SCRIPTS ########################
            internal_leaveBomPartMasterDataElements();
          }
        }
        _bom._description = "Output Parts / Boards";
        _bom.set(partSelf);
        partSelf._bom.push(_bom);
      }
      // bomout_Edge: 142
      if (partSelf._g?.basic_CreateBom == 'Library') { // ####################### CUSTOM SCRIPTS ########################
        const parentId = partSelf._id;
        const _bom = new class BOM142 extends BOM_ElementType_bomout_Edge {
          constructor() { super(partSelf); }
          set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
            const part = partSelf;
            internal_enterBomPartMasterDataElements(partSelf._id, partSelf._partId);
             // ####################### CUSTOM SCRIPTS ########################
// CONSTANTS PER EDGE
let edgeName:string = 'EdgeFront';

//MANUAL STUFF
let elementType :string='Edge';
let elementCategory :string=''; //ProductionSite Category
let parentId :string=part._id;

// Get EdgeNumberSettings
let edgeNumber = GlobalFunc.find_EdgeNumberSettings(part._partId, edgeName)!;

// Get data from find_EdgeLibrary
let edgeInfo = GlobalFunc.process_EdgeInfo(part._partId, part._thickness, part.pa_EdgeFrontColor, part.pa_EdgeLeftColor, part.pa_EdgeBackColor, part.pa_EdgeRightColor, part.pa_EdgeFrontType, part.pa_EdgeLeftType, part.pa_EdgeBackType, part.pa_EdgeRightType, part.pa_EdgeJointType)!;

// Check empty data
let height:number=0;
if(edgeInfo.EdgeFrontData)
{
  if(edgeInfo.EdgeFrontData.Height)
  {
    height=edgeInfo.EdgeFrontData.Height!;
  }
}

let thickness:number=0;
if(edgeInfo.EdgeFrontData)
{
  if(edgeInfo.EdgeFrontData.Thickness)
  {
    thickness=edgeInfo.EdgeFrontData.Thickness!;
  }
}

let glueType:string=' ';
if(edgeInfo.EdgeFrontData)
{
  if(edgeInfo.EdgeFrontData.GlueType)
  {
    glueType=edgeInfo.EdgeFrontData.GlueType!;
  }
}

let supplierArticleCode:string=' ';
if(edgeInfo.EdgeFrontData)
{
  if(edgeInfo.EdgeFrontData.SupplierArticleNumber!)
  {
    supplierArticleCode=edgeInfo.EdgeFrontData.SupplierArticleNumber!;
  }
}

// Output data
this.bom_Type=edgeNumber.BomEdgeType!;
this.bom_Name=edgeNumber.BomEdgeDescription!;
this.bom_EdgeId=edgeInfo.EdgeFrontCode!;
this.bom_PartId=part._id;
this.bom_Length=part._width;
this.bom_Width=height;
this.bom_Thk=thickness;
this.bom_EdgeJoint=edgeInfo.EdgeJointFrontLeft!;
this.bom_GlueType=glueType;
this.bom_EdgeNumber=edgeNumber.BomEdgeNumber!;
this.bom_Color=part.pa_EdgeFrontColor;
this.bom_SupplierArticle=supplierArticleCode;
this.bom_ElementId=part._id + '_' + edgeNumber.BomEdgeNumber!;
this.bom_ParentId=parentId;
this.bom_ElementType=elementType;
             // ################### END CUSTOM SCRIPTS ########################
            internal_leaveBomPartMasterDataElements();
          }
        }
        _bom._description = "Edge Front";
        _bom.set(partSelf);
        partSelf._bom.push(_bom);
      }
      // bomout_Edge: 144
      if (partSelf._g?.basic_CreateBom == 'Library') { // ####################### CUSTOM SCRIPTS ########################
        const parentId = partSelf._id;
        const _bom = new class BOM144 extends BOM_ElementType_bomout_Edge {
          constructor() { super(partSelf); }
          set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
            const part = partSelf;
            internal_enterBomPartMasterDataElements(partSelf._id, partSelf._partId);
             // ####################### CUSTOM SCRIPTS ########################

// CONSTANTS PER EDGE
let edgeName:string = 'EdgeLeft';

//MANUAL STUFF
let elementType :string='Edge';
let elementCategory :string=''; //ProductionSite Category
let parentId :string=part._id;

// Get EdgeNumberSettings
let edgeNumber = GlobalFunc.find_EdgeNumberSettings(part._partId, edgeName)!;

// Get data from find_EdgeLibrary
let edgeInfo = GlobalFunc.process_EdgeInfo(part._partId, part._thickness, part.pa_EdgeFrontColor, part.pa_EdgeLeftColor, part.pa_EdgeBackColor, part.pa_EdgeRightColor, part.pa_EdgeFrontType, part.pa_EdgeLeftType, part.pa_EdgeBackType, part.pa_EdgeRightType, part.pa_EdgeJointType)!;

// Check empty data
let height:number=0;
if(edgeInfo.EdgeLeftData)
{
  if(edgeInfo.EdgeLeftData.Height)
  {
    height=edgeInfo.EdgeLeftData.Height!;
  }
}

let thickness:number=0;
if(edgeInfo.EdgeLeftData)
{
  if(edgeInfo.EdgeLeftData.Thickness)
  {
    thickness=edgeInfo.EdgeLeftData.Thickness!;
  }
}

let glueType:string=' ';
if(edgeInfo.EdgeLeftData)
{
  if(edgeInfo.EdgeLeftData.GlueType)
  {
    glueType=edgeInfo.EdgeLeftData.GlueType!;
  }
}

let supplierArticleCode:string=' ';
if(edgeInfo.EdgeLeftData)
{
  if(edgeInfo.EdgeLeftData.SupplierArticleNumber!)
  {
    supplierArticleCode=edgeInfo.EdgeLeftData.SupplierArticleNumber!;
  }
}

// Output data
this.bom_Type=edgeNumber.BomEdgeType!;
this.bom_Name=edgeNumber.BomEdgeDescription!;
this.bom_EdgeId=edgeInfo.EdgeLeftCode!;
this.bom_PartId=part._id;
this.bom_Length=part._depth;
this.bom_Width=height;
this.bom_Thk=thickness;
this.bom_EdgeJoint=edgeInfo.EdgeJointLeftBack!;
this.bom_GlueType=glueType;
this.bom_EdgeNumber=edgeNumber.BomEdgeNumber!;
this.bom_Color=part.pa_EdgeLeftColor;
this.bom_SupplierArticle=supplierArticleCode;
this.bom_ElementId=part._id + '_' + edgeNumber.BomEdgeNumber!;
this.bom_ParentId=parentId;
this.bom_ElementType=elementType;

             // ################### END CUSTOM SCRIPTS ########################
            internal_leaveBomPartMasterDataElements();
          }
        }
        _bom._description = "Edge Left";
        _bom.set(partSelf);
        partSelf._bom.push(_bom);
      }
      // bomout_Edge: 145
      if (partSelf._g?.basic_CreateBom == 'Library') { // ####################### CUSTOM SCRIPTS ########################
        const parentId = partSelf._id;
        const _bom = new class BOM145 extends BOM_ElementType_bomout_Edge {
          constructor() { super(partSelf); }
          set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
            const part = partSelf;
            internal_enterBomPartMasterDataElements(partSelf._id, partSelf._partId);
             // ####################### CUSTOM SCRIPTS ########################
// CONSTANTS PER EDGE
let edgeName:string = 'EdgeBack';

//MANUAL STUFF
let elementType :string='Edge';
let elementCategory :string=''; //ProductionSite Category
let parentId :string=part._id;

// Get EdgeNumberSettings
let edgeNumber = GlobalFunc.find_EdgeNumberSettings(part._partId, edgeName)!;

// Get data from find_EdgeLibrary
let edgeInfo = GlobalFunc.process_EdgeInfo(part._partId, part._thickness, part.pa_EdgeFrontColor, part.pa_EdgeLeftColor, part.pa_EdgeBackColor, part.pa_EdgeRightColor, part.pa_EdgeFrontType, part.pa_EdgeLeftType, part.pa_EdgeBackType, part.pa_EdgeRightType, part.pa_EdgeJointType)!;

// Check empty data
let height:number=0;
if(edgeInfo.EdgeBackData)
{
  if(edgeInfo.EdgeBackData.Height)
  {
    height=edgeInfo.EdgeBackData.Height!;
  }
}

let thickness:number=0;
if(edgeInfo.EdgeBackData)
{
  if(edgeInfo.EdgeBackData.Thickness)
  {
    thickness=edgeInfo.EdgeBackData.Thickness!;
  }
}

let glueType:string=' ';
if(edgeInfo.EdgeBackData)
{
  if(edgeInfo.EdgeBackData.GlueType)
  {
    glueType=edgeInfo.EdgeBackData.GlueType!;
  }
}

let supplierArticleCode:string=' ';
if(edgeInfo.EdgeBackData)
{
  if(edgeInfo.EdgeBackData.SupplierArticleNumber!)
  {
    supplierArticleCode=edgeInfo.EdgeBackData.SupplierArticleNumber!;
  }
}

// Output data
this.bom_Type=edgeNumber.BomEdgeType!;
this.bom_Name=edgeNumber.BomEdgeDescription!;
this.bom_EdgeId=edgeInfo.EdgeBackCode!;
this.bom_PartId=part._id;
this.bom_Length=part._width;
this.bom_Width=height;
this.bom_Thk=thickness;
this.bom_EdgeJoint=edgeInfo.EdgeJointBackRight!;
this.bom_GlueType=glueType;
this.bom_EdgeNumber=edgeNumber.BomEdgeNumber!;
this.bom_Color=part.pa_EdgeBackColor;
this.bom_SupplierArticle=supplierArticleCode;
this.bom_ElementId=part._id + '_' + edgeNumber.BomEdgeNumber!;
this.bom_ParentId=parentId;
this.bom_ElementType=elementType;

             // ################### END CUSTOM SCRIPTS ########################
            internal_leaveBomPartMasterDataElements();
          }
        }
        _bom._description = "Edge Back";
        _bom.set(partSelf);
        partSelf._bom.push(_bom);
      }
      // bomout_Edge: 146
      if (partSelf._g?.basic_CreateBom == 'Library') { // ####################### CUSTOM SCRIPTS ########################
        const parentId = partSelf._id;
        const _bom = new class BOM146 extends BOM_ElementType_bomout_Edge {
          constructor() { super(partSelf); }
          set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
            const part = partSelf;
            internal_enterBomPartMasterDataElements(partSelf._id, partSelf._partId);
             // ####################### CUSTOM SCRIPTS ########################
// CONSTANTS PER EDGE
let edgeName:string = 'EdgeRight';

//MANUAL STUFF
let elementType :string='Edge';
let elementCategory :string=''; //ProductionSite Category
let parentId :string=part._id;

// Get EdgeNumberSettings
let edgeNumber = GlobalFunc.find_EdgeNumberSettings(part._partId, edgeName)!;

// Get data from find_EdgeLibrary
let edgeInfo = GlobalFunc.process_EdgeInfo(part._partId, part._thickness, part.pa_EdgeFrontColor, part.pa_EdgeLeftColor, part.pa_EdgeBackColor, part.pa_EdgeRightColor, part.pa_EdgeFrontType, part.pa_EdgeLeftType, part.pa_EdgeBackType, part.pa_EdgeRightType, part.pa_EdgeJointType)!;

// Check empty data
let height:number=0;
if(edgeInfo.EdgeRightData)
{
  if(edgeInfo.EdgeRightData.Height)
  {
    height=edgeInfo.EdgeRightData.Height!;
  }
}

let thickness:number=0;
if(edgeInfo.EdgeRightData)
{
  if(edgeInfo.EdgeRightData.Thickness)
  {
    thickness=edgeInfo.EdgeRightData.Thickness!;
  }
}

let glueType:string=' ';
if(edgeInfo.EdgeRightData)
{
  if(edgeInfo.EdgeRightData.GlueType)
  {
    glueType=edgeInfo.EdgeRightData.GlueType!;
  }
}

let supplierArticleCode:string=' ';
if(edgeInfo.EdgeRightData)
{
  if(edgeInfo.EdgeRightData.SupplierArticleNumber!)
  {
    supplierArticleCode=edgeInfo.EdgeRightData.SupplierArticleNumber!;
  }
}

// Output data
this.bom_Type=edgeNumber.BomEdgeType!;
this.bom_Name=edgeNumber.BomEdgeDescription!;
this.bom_EdgeId=edgeInfo.EdgeRightCode!;
this.bom_PartId=part._id;
this.bom_Length=part._depth;
this.bom_Width=height;
this.bom_Thk=thickness;
this.bom_EdgeJoint=edgeInfo.EdgeJointRightFront!;
this.bom_GlueType=glueType;
this.bom_EdgeNumber=edgeNumber.BomEdgeNumber!;
this.bom_Color=part.pa_EdgeRightColor;
this.bom_SupplierArticle=supplierArticleCode;
this.bom_ElementId=part._id + '_' + edgeNumber.BomEdgeNumber!;
this.bom_ParentId=parentId;
this.bom_ElementType=elementType;
             // ################### END CUSTOM SCRIPTS ########################
            internal_leaveBomPartMasterDataElements();
          }
        }
        _bom._description = "Edge Right";
        _bom.set(partSelf);
        partSelf._bom.push(_bom);
      }
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
  }
  override createBomTouchElementsStart() : void { 
}
  override createBomTouchElements(touch: PartTouch, partNext: PartBase, posRel: CollisionDataRel) {
      try {
      // ncout_Group: 328: part_Shelftop FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Shelftop) {
        let part2 = <P_part_Shelftop>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT328 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Shelftop_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Shelftop
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with top shelf";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 330: part_Shelfbtm FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Shelfbtm) {
        let part2 = <P_part_Shelfbtm>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT330 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Shelfbtm_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
  // Create: January 2025
  // By Ludwig Weber
  // Purpose: CabinetLibrary
  //
  // Description:
  // Connection between Sidepanelleft and Shelfbtm
  // Touch FromRight
  //
  // Revisions:
  // 
  //===================================================

  // Initialize variables
  let Area = "LeftBtm";
  let PartType = 'Sidepanel';
  let DrillingPartType = 'PartLong';
  let DrillingPosition = 'Bottom';
  let TouchDirectionGraphic = 'Right';
  let FallingDirection = 'Left';
  let ConnectionOrientation = 'FrontBack';
  let ConnectionType = partSelf.pa_CarcaseConnectionLeftBtm;
  let FittingType = partSelf.pa_FittingConnectionLeftBtm;
  let InsideDirection = 'Right';

  // Call the process function
  GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with bottom shelf ";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 338: part_Shelffixed FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Shelffixed) {
        let part2 = <P_part_Shelffixed>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT338 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Shelffixed_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Shelffixed
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftHor";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcasePartConnectionLeftHor;
let FittingType = partSelf.pa_FittingConnectionLeftHor;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with fixed shelf";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 345: part_ShelfadjDrill FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_ShelfadjDrill) {
        let part2 = <P_part_ShelfadjDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT345 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_ShelfadjDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
// Get data for drillings
//====================================================================

// Call the process function to retrieve drill data
let Info = GlobalFunc.process_ShelfadjDrills(part2.pa_ShelfadjSidepanelProcessingFrontId)
let DrillInfoFront = Info.drill;
let InsertionPointFront = Info.insertionPoint.Y;

Info = GlobalFunc.process_ShelfadjDrills(part2.pa_ShelfadjSidepanelProcessingMiddleId)
let DrillInfoMiddle = Info.drill;
let InsertionPointMiddle = Info.insertionPoint.Y;

Info = GlobalFunc.process_ShelfadjDrills(part2.pa_ShelfadjSidepanelProcessingBackId)
let DrillInfoBack = Info.drill;
let InsertionPointBack = Info.insertionPoint.Y;

// Calculate quantity for the drills
let QtyDrills = Math.floor(part2._dimy / part2.pa_ShelfadjDrillDistance) + 1;

//====================================================================
// For each drilling (insert the drillings)
//====================================================================

// Variables
let StartPos = posRel.y;
let DrillingLines = GlobalFunc.process_Descriptor(part2.pa_ShelfadjSidepanelDrillDescriptor, part2._dimz);

for(let i = 1; i <= QtyDrills; i++){

  // Insert the drillings in depth (drilling lines)
  let k = 0;
  DrillingLines.forEach(DrillingLine => {

    // Determine the type of drill based on the current iteration
    let DrillInfo = k == 0 ? DrillInfoBack : k == DrillingLines.length-1 ? DrillInfoFront : DrillInfoMiddle;
    let DrillOffset = k == 0 ? InsertionPointBack : k == DrillingLines.length-1 ? InsertionPointFront : InsertionPointMiddle;

    // Calculate y-position
    let posY = StartPos + DrillInfo.YA + DrillOffset;

    // Calculate z-position
    let posZ = posRel.z + DrillingLine;

    // Add Vertical Drill
    let DrillVert = this.addncout_DrillVert();
    DrillVert.nc_TOOL = "102";
    DrillVert.nc_XA = partSelf._dimy - posY;
    DrillVert.nc_YA = partSelf._dimz - posZ;
    DrillVert.nc_TI = DrillInfo.TI;
    DrillVert.nc_DU = DrillInfo.DU;
    DrillVert.nc_BM = DrillInfo.matrix_BM || "LS";
    DrillVert.nc_WI = DrillInfo.matrix_WI ?? 0;
    DrillVert.nc_AB = DrillInfo.matrix_AB ?? 1;
    DrillVert.nc_LA = DrillInfo.matrix_LA ?? 0;
    DrillVert.nc_MI = DrillInfo.matrix_MI ?? 0;
    DrillVert.nc_KO = DrillInfo.matrix_KO || "00";
	DrillVert.nc_Side = "Top";

    // Add drawing
    let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posRel.x - DrillInfo.TI, posY, posZ, DrillInfo.TI, DrillInfo.DU, DrillInfo.DU);
    drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + DrillInfo.DU / 2 + '" /></svg>', 'x');

    // Next drilling line
    k++;
  });

  // Set starting position for the next drills
  StartPos += part2.pa_ShelfadjDrillDistance;
}
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Add the drilling line for adjustable shelves";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 348: part_Shelfbtm FromBottom
    if (touch == PartTouch.FromBottom && partNext instanceof P_part_Shelfbtm) {
        let part2 = <P_part_Shelfbtm>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT348 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Shelfbtm_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Shelfbtm
// Touch FromBottom
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftBtm";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartShort';
let DrillingPosition = 'Bottom';
let TouchDirectionGraphic = 'Bottom';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftBtm;
let FittingType = partSelf.pa_FittingConnectionLeftBtm;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with bottom shelf from bottom";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 349: part_Shelftop FromTop
    if (touch == PartTouch.FromTop && partNext instanceof P_part_Shelftop) {
        let part2 = <P_part_Shelftop>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT349 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Shelftop_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Shelftop
// Touch FromTop
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartShort';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Top';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with top shelf from top";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 362: part_Railhortopfront FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Railhortopfront) {
        let part2 = <P_part_Railhortopfront>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT362 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Railhortopfront_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Rail horizontal top front
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with horizontal rail in top front";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 363: part_Railhortopback FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Railhortopback) {
        let part2 = <P_part_Railhortopback>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT363 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Railhortopback_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Rail horizontal top back
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'BackFront';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with horizontal rail in top back";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 366: part_Railverttopfront FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Railverttopfront) {
        let part2 = <P_part_Railverttopfront>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT366 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Railverttopfront_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Rail vertical top front
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
  let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Front';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'TopBottom';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with vertical rail in top front";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 376: part_HingeDrill FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_HingeDrill) {
        let part2 = <P_part_HingeDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT376 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_HingeDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
  // Get data for drillings and rotation
  //====================================================================

  let drillings: any[] = [];
  let drills: any[] = [];
  let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId2);
  let insertPoint = GlobalFunc.process_MachiningInsertionHelper('012',part2.pa_Model3DGroupName2)
  let dimz=99; // DimZ of part_hingeDrill (Fixed in mc_Hinge)

  processings.forEach((processing) => {
    drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Carcase');
    drills.forEach((drill) => {
      drillings.push(drill);
    });
  });

  //====================================================================
  // For each drilling (insert the drillings)
  //====================================================================

  drillings.forEach(x => 
  {  
    // Add Vertical Drill
    let DrillVert = this.addncout_DrillVert();
    DrillVert.nc_TOOL="102";
    DrillVert.nc_XA=partSelf._dimy - posRel.y - insertPoint.InsertionPointY - x.YA;
    DrillVert.nc_YA=insertPoint.InsertionPointX + x.XA - (part2.pa_FrontGapCarcase - part2.pa_HingeGapCarcase);
    DrillVert.nc_TI=x.TI;
    DrillVert.nc_DU=x.DU;

    DrillVert.nc_BM = x.matrix_BM || "LS"
    DrillVert.nc_WI = x.matrix_WI ?? 0;
    DrillVert.nc_AB = x.matrix_AB ?? 1;
    DrillVert.nc_LA = x.matrix_LA ?? 0;
    DrillVert.nc_MI = x.matrix_MI ?? 0;
    DrillVert.nc_KO = x.matrix_KO || "00";
    DrillVert.nc_Side = "Top";  

    // Add drawing
    let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posRel.x, posRel.y + insertPoint.InsertionPointY + x.YA, partSelf._dimz - insertPoint.InsertionPointX - x.XA + (part2.pa_FrontGapCarcase - part2.pa_HingeGapCarcase), -x.TI, x.DU, x.DU );
    drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + x.DU/2 + '" /></svg>', 'x');
  });
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drilling for MountingPlate";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 382: part_DrawerBoxDrilling FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_DrawerBoxDrilling) {
        let part2 = <P_part_DrawerBoxDrilling>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT382 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_DrawerBoxDrilling_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
// Get data for drillings
//====================================================================

// Variables
let drillings: ICT_tab_HardwareDrillVertLibrary[] = [];

// Find all processings for the drawerbox (to each part)
let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);

// Find the drillings for the sidepanel
processings.forEach((processing) => {
  if(processing.ProcessingLibrary == 'DrillVertical'){
    let foundDrillings = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Carcase');
    drillings = drillings.concat(foundDrillings);
  } 
});

//====================================================================
// For each drilling (insert the drillings)
//====================================================================

drillings.forEach(x => 
{  
  // Position of the drill
  let PosX=posRel.y + x.YA;
  let PosY=posRel.z + part2._dimz - x.XA;

  // Add Vertical Drill
  let DrillVert = this.addncout_DrillVert();
  DrillVert.nc_TOOL="102";
  DrillVert.nc_XA=partSelf._dimy - posRel.y - x.YA;
  DrillVert.nc_YA=partSelf._dimz - PosY;
  DrillVert.nc_TI=x.TI;
  DrillVert.nc_DU=x.DU;

  DrillVert.nc_BM = x.matrix_BM || "LS"
  DrillVert.nc_WI = x.matrix_WI ?? 0;
  DrillVert.nc_AB = x.matrix_AB ?? 1;
  DrillVert.nc_LA = x.matrix_LA ?? 0;
  DrillVert.nc_MI = x.matrix_MI ?? 0;
  DrillVert.nc_KO = x.matrix_KO || "00";
  DrillVert.nc_Side = "Top";  

  // Add drawing
  let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, partSelf._dimx-x.TI, PosX, PosY, x.TI, x.DU, x.DU );
  drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + x.DU/2 + '" /></svg>', 'x');
})
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drillings for the slide of the drawer box";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 389: part_HangerDrill FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_HangerDrill) {
        let part2 = <P_part_HangerDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT389 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_HangerDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
              
//====================================================================
// Get data for drillings and rotation
//====================================================================

let drillings: any[] = [];
let drills: any[] = [];
let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);
let insertPoint = GlobalFunc.process_MachiningInsertionHelper('000',part2.pa_Model3DGroupName)

processings.forEach((processing) => {
  drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Side');
  //====================================================================
  // For each drilling (insert the drillings)
  //====================================================================
  drills.forEach((drill) => {
		// Add Vertical Drill
		let DrillVert = this.addncout_DrillVert();
		DrillVert.nc_TOOL="102";
		DrillVert.nc_XA= (partSelf._dimy - posRel.y) - insertPoint.InsertionPointY - drill.YA;
		DrillVert.nc_YA=partSelf._dimz - posRel.z - insertPoint.InsertionPointZ - drill.XA;
		DrillVert.nc_TI=drill.TI;
		DrillVert.nc_DU=drill.DU;

		DrillVert.nc_BM = drill.matrix_BM || "LS"
		DrillVert.nc_WI = drill.matrix_WI ?? 0;
		DrillVert.nc_AB = drill.matrix_AB ?? 1;
		DrillVert.nc_LA = drill.matrix_LA ?? 0;
		DrillVert.nc_MI = drill.matrix_MI ?? 0;
		DrillVert.nc_KO = drill.matrix_KO || "00";
		DrillVert.nc_Side = "Top";  

		// Add drawing
		let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posRel.x, posRel.y + insertPoint.InsertionPointY + drill.YA, posRel.z + insertPoint.InsertionPointZ + drill.XA, -drill.TI, drill.DU, drill.DU );
		drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drill.DU/2 + '" /></svg>', 'x');
  });
});


               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drilling for Hangers";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 430: part_PushtoopenDrill FromFront
    if (touch == PartTouch.FromFront && partNext instanceof P_part_PushtoopenDrill) {
        let part2 = <P_part_PushtoopenDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT430 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_PushtoopenDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
GlobalFunc.ops_PushtoopenDrill('Carcase', this, partSelf, part2, posRel);
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drillings for PushToOpen";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 436: part_Railverttopback FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Railverttopback) {
        let part2 = <P_part_Railverttopback>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT436 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Railverttopback_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
  // Create: January 2025
  // By Ludwig Weber
  // Purpose: CabinetLibrary
  //
  // Description:
  // Connection between Sidepanelleft and Rail vertical top front
  // Touch FromRight
  //
  // Revisions:
  // 
  //===================================================

  // Initialize variables
  let Area = "LeftTop";
  let PartType = 'Sidepanel';
  let DrillingPartType = 'PartLong';
  let DrillingPosition = 'Back';
  let TouchDirectionGraphic = 'Right';
  let FallingDirection = 'Left';
  let ConnectionOrientation = 'TopBottom';
  let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
  let FittingType = partSelf.pa_FittingConnectionLeftTop;
  let InsideDirection = 'Right';

  // Call the process function
  GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with vertical rail in top back";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 456: part_PushtoopenMountingPlateDrill FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_PushtoopenMountingPlateDrill) {
        let part2 = <P_part_PushtoopenMountingPlateDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT456 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_PushtoopenMountingPlateDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
GlobalFunc.ops_PushtoopenDrill('Carcase', this, partSelf, part2, posRel);
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drillings for PushToOpen Adapter";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 462: part_Panelblind FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_Panelblind) {
        let part2 = <P_part_Panelblind>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT462 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Panelblind_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and panel blind
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftHor";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Front';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'TopBottom';
let ConnectionType = partSelf.pa_CarcasePartConnectionLeftHor;
let FittingType = partSelf.pa_FittingConnectionLeftHor;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with panel blind";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 509: part_FlipliftHardwareSidepanelDrilling FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_FlipliftHardwareSidepanelDrilling) {
        let part2 = <P_part_FlipliftHardwareSidepanelDrilling>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT509 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_FlipliftHardwareSidepanelDrilling_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
  // Get data for drillings
  //====================================================================

  // Variables
  let drillings: ICT_tab_HardwareDrillVertLibrary[] = [];

  // Find all processings for the drawerbox (to each part)
  let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);

  // Find the drillings for the sidepanel
  processings.forEach((processing) => {
    if(processing.ProcessingLibrary == 'DrillVertical'){
      let foundDrillings = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Carcase');
      drillings = drillings.concat(foundDrillings);
    } 
  });

  //====================================================================
  // For each drilling (insert the drillings)
  //====================================================================

  drillings.forEach(x => 
  {  
    // Position of the drill
    let PosX=posRel.y + x.YA;
    let PosY=posRel.z + x.XA;

    // Add Vertical Drill
    let DrillVert = this.addncout_DrillVert();
    DrillVert.nc_TOOL="102";
    DrillVert.nc_XA=partSelf._dimy - posRel.y - x.YA;
    DrillVert.nc_YA=partSelf._dimz - PosY;
    DrillVert.nc_TI=x.TI;
    DrillVert.nc_DU=x.DU;

    DrillVert.nc_BM = x.matrix_BM || "LS"
    DrillVert.nc_WI = x.matrix_WI ?? 0;
    DrillVert.nc_AB = x.matrix_AB ?? 1;
    DrillVert.nc_LA = x.matrix_LA ?? 0;
    DrillVert.nc_MI = x.matrix_MI ?? 0;
    DrillVert.nc_KO = x.matrix_KO || "00";
    DrillVert.nc_Side = "Top";  

    // Add drawing
    let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, partSelf._dimx-x.TI, PosX, PosY, x.TI, x.DU, x.DU );
    drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + x.DU/2 + '" /></svg>', 'x');
  })
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with fliplift fittings";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 545: part_SlopedCeilingShelftopHor FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_SlopedCeilingShelftopHor) {
        let part2 = <P_part_SlopedCeilingShelftopHor>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT545 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_SlopedCeilingShelftopHor_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Shelftop
// Touch FromRight
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartLong';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Right';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with sloped ceiling top shelf horizontal";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 547: part_SlopedCeilingShelftopHor FromTop
    if (touch == PartTouch.FromTop && partNext instanceof P_part_SlopedCeilingShelftopHor) {
        let part2 = <P_part_SlopedCeilingShelftopHor>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT547 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_SlopedCeilingShelftopHor_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
// Schuler Consulting
// Create: January 2025
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// Connection between Sidepanelleft and Shelftop
// Touch FromTop
//
// Revisions:
// 
//===================================================

// Initialize variables
let Area = "LeftTop";
let PartType = 'Sidepanel';
let DrillingPartType = 'PartShort';
let DrillingPosition = 'Top';
let TouchDirectionGraphic = 'Top';
let FallingDirection = 'Left';
let ConnectionOrientation = 'FrontBack';
let ConnectionType = partSelf.pa_CarcaseConnectionLeftTop;
let FittingType = partSelf.pa_FittingConnectionLeftTop;
let InsideDirection = 'Right';

// Call the process function
GlobalFunc.process_CarcasePartConnection(this, partSelf, part2, posRel, Area, PartType, DrillingPosition, TouchDirectionGraphic, FallingDirection, ConnectionOrientation, ConnectionType, FittingType, InsideDirection, DrillingPartType)
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Connection with sloped ceiling top shelf horizontal";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 570: part_Backwall Collision
    if (touch == PartTouch.Collision && partNext instanceof P_part_Backwall) {
        let part2 = <P_part_Backwall>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT570 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_Backwall_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
GlobalFunc.ops_BackwallGroove(this, partSelf, part2, posRel, 'BackwallGrooveSidepanelleft', 'Vertical');
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Groove with backwall";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
      // ncout_Group: 622: part_FillerHardwareProcessing FromRight
    if (touch == PartTouch.FromRight && partNext instanceof P_part_FillerHardwareProcessing) {
        let part2 = <P_part_FillerHardwareProcessing>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT622 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly, touch: PartTouch, part2: IP_part_FillerHardwareProcessing_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
  // Get data for drillings and rotation
  //====================================================================

  let drillings: any[] = [];
  let drills: any[] = [];
  let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);
  let insertPoint = GlobalFunc.process_MachiningInsertionHelper('012',part2.pa_Model3DGroupName)
  if(part2.pa_HardwareIdentifier == 'CarcaseConnector' || part2.pa_HardwareIdentifier == 'FrontAndCarcaseConnector') {

    processings.forEach((processing) => {
      drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Carcase');
      drills.forEach((drill) => {
        drillings.push(drill);
      });
    });

    //====================================================================
    // For each drilling (insert the drillings)
    //====================================================================

    drillings.forEach(x => 
    {  
      // Add Vertical Drill
      let DrillVert = this.addncout_DrillVert();
      DrillVert.nc_TOOL="102";
      DrillVert.nc_XA=partSelf._dimy - posRel.y - insertPoint.InsertionPointY - x.YA;
      DrillVert.nc_YA=insertPoint.InsertionPointX + x.XA - (part2.pa_FrontGapCarcase);
      DrillVert.nc_TI=x.TI;
      DrillVert.nc_DU=x.DU;

      DrillVert.nc_BM = x.matrix_BM || "LS"
      DrillVert.nc_WI = x.matrix_WI ?? 0;
      DrillVert.nc_AB = x.matrix_AB ?? 1;
      DrillVert.nc_LA = x.matrix_LA ?? 0;
      DrillVert.nc_MI = x.matrix_MI ?? 0;
      DrillVert.nc_KO = x.matrix_KO || "00";
      DrillVert.nc_Side = "Top";  

      // Add drawing
      let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posRel.x, posRel.y + insertPoint.InsertionPointY + x.YA, partSelf._dimz - insertPoint.InsertionPointX - x.XA + (part2.pa_FrontGapCarcase) , -x.TI, x.DU, x.DU );
      drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + x.DU/2 + '" /></svg>', 'x');
    });
  }
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drillings for filler hardware";
          _bom.set(partSelf, touch, part2, posRel);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
  }
  override createBomTouchElementsEnd() : void { 
      try {
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT576 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
              internal_enterBomPartMasterDataTouchesEnd(partSelf._id, partSelf._partId);
               // ####################### CUSTOM SCRIPTS ########################
GlobalFunc.ops_FingergripPocketVert(this, partSelf, '', '', 'Fingergrip', 'Sidepanelleft');
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Fingergrip milling";
          _bom.set(partSelf);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      try {
        const partSelf = this;
        if ((partSelf.pa_TopDepth != 0 && partSelf.pa_BackHeight != 0)) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT590 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Sidepanelleft_PartVarsReadOnly) {
              internal_enterBomPartMasterDataTouchesEnd(partSelf._id, partSelf._partId);
               // ####################### CUSTOM SCRIPTS ########################
GlobalFunc.ops_SawingVert(this, partSelf, '', '', 'SlopedCeilingShapeSidepanelleft', 'All');
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Sloped Ceiling Shape";
          _bom.set(partSelf);
          partSelf._bom.push(_bom);
          if(_bom._subBom){
            _bom._subBom.forEach(p => partSelf._bom.push(p));
          }
        }
      } 
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
}

  get pa_TopColor(): string { return this.#pa_TopColor!; }
  set pa_TopColor(val:string) { this.#pa_TopColor = val; }
  #pa_TopColor?: string;
  get pa_BtmColor(): string { return this.#pa_BtmColor!; }
  set pa_BtmColor(val:string) { this.#pa_BtmColor = val; }
  #pa_BtmColor?: string;
  get pa_EdgeFrontColor(): string { return this.#pa_EdgeFrontColor!; }
  set pa_EdgeFrontColor(val:string) { this.#pa_EdgeFrontColor = val; }
  #pa_EdgeFrontColor?: string;
  get pa_EdgeLeftColor(): string { return this.#pa_EdgeLeftColor!; }
  set pa_EdgeLeftColor(val:string) { this.#pa_EdgeLeftColor = val; }
  #pa_EdgeLeftColor?: string;
  get pa_EdgeBackColor(): string { return this.#pa_EdgeBackColor!; }
  set pa_EdgeBackColor(val:string) { this.#pa_EdgeBackColor = val; }
  #pa_EdgeBackColor?: string;
  get pa_EdgeRightColor(): string { return this.#pa_EdgeRightColor!; }
  set pa_EdgeRightColor(val:string) { this.#pa_EdgeRightColor = val; }
  #pa_EdgeRightColor?: string;
  get pa_EdgeFrontType(): string { return this.#pa_EdgeFrontType!; }
  set pa_EdgeFrontType(val:string) { this.#pa_EdgeFrontType = val; }
  #pa_EdgeFrontType?: string;
  get pa_EdgeLeftType(): string { return this.#pa_EdgeLeftType!; }
  set pa_EdgeLeftType(val:string) { this.#pa_EdgeLeftType = val; }
  #pa_EdgeLeftType?: string;
  get pa_EdgeBackType(): string { return this.#pa_EdgeBackType!; }
  set pa_EdgeBackType(val:string) { this.#pa_EdgeBackType = val; }
  #pa_EdgeBackType?: string;
  get pa_EdgeRightType(): string { return this.#pa_EdgeRightType!; }
  set pa_EdgeRightType(val:string) { this.#pa_EdgeRightType = val; }
  #pa_EdgeRightType?: string;
  get pa_EdgeJointType(): string { return this.#pa_EdgeJointType!; }
  set pa_EdgeJointType(val:string) { this.#pa_EdgeJointType = val; }
  #pa_EdgeJointType?: string;
  get pa_GrainDirection(): string { return this.#pa_GrainDirection!; }
  set pa_GrainDirection(val:string) { this.#pa_GrainDirection = val; }
  #pa_GrainDirection?: string;
  get pa_Program(): string { return this.#pa_Program!; }
  set pa_Program(val:string) { this.#pa_Program = val; }
  #pa_Program?: string;
  get pa_HardwareQty1(): number { return this.#pa_HardwareQty1!; }
  set pa_HardwareQty1(val:number) { this.#pa_HardwareQty1 = val; }
  #pa_HardwareQty1?: number;
  get pa_HardwareQty2(): number { return this.#pa_HardwareQty2!; }
  set pa_HardwareQty2(val:number) { this.#pa_HardwareQty2 = val; }
  #pa_HardwareQty2?: number;
  get pa_HardwareQty3(): number { return this.#pa_HardwareQty3!; }
  set pa_HardwareQty3(val:number) { this.#pa_HardwareQty3 = val; }
  #pa_HardwareQty3?: number;
  get pa_HardwareSupplier1(): string { return this.#pa_HardwareSupplier1!; }
  set pa_HardwareSupplier1(val:string) { this.#pa_HardwareSupplier1 = val; }
  #pa_HardwareSupplier1?: string;
  get pa_HardwareSupplier2(): string { return this.#pa_HardwareSupplier2!; }
  set pa_HardwareSupplier2(val:string) { this.#pa_HardwareSupplier2 = val; }
  #pa_HardwareSupplier2?: string;
  get pa_HardwareSupplier3(): string { return this.#pa_HardwareSupplier3!; }
  set pa_HardwareSupplier3(val:string) { this.#pa_HardwareSupplier3 = val; }
  #pa_HardwareSupplier3?: string;
  get pa_HardwareSupplierArticle1(): string { return this.#pa_HardwareSupplierArticle1!; }
  set pa_HardwareSupplierArticle1(val:string) { this.#pa_HardwareSupplierArticle1 = val; }
  #pa_HardwareSupplierArticle1?: string;
  get pa_HardwareSupplierArticle2(): string { return this.#pa_HardwareSupplierArticle2!; }
  set pa_HardwareSupplierArticle2(val:string) { this.#pa_HardwareSupplierArticle2 = val; }
  #pa_HardwareSupplierArticle2?: string;
  get pa_HardwareSupplierArticle3(): string { return this.#pa_HardwareSupplierArticle3!; }
  set pa_HardwareSupplierArticle3(val:string) { this.#pa_HardwareSupplierArticle3 = val; }
  #pa_HardwareSupplierArticle3?: string;
  get pa_HardwareQty4(): number { return this.#pa_HardwareQty4!; }
  set pa_HardwareQty4(val:number) { this.#pa_HardwareQty4 = val; }
  #pa_HardwareQty4?: number;
  get pa_HardwareQty5(): number { return this.#pa_HardwareQty5!; }
  set pa_HardwareQty5(val:number) { this.#pa_HardwareQty5 = val; }
  #pa_HardwareQty5?: number;
  get pa_HardwareSupplier4(): string { return this.#pa_HardwareSupplier4!; }
  set pa_HardwareSupplier4(val:string) { this.#pa_HardwareSupplier4 = val; }
  #pa_HardwareSupplier4?: string;
  get pa_HardwareSupplier5(): string { return this.#pa_HardwareSupplier5!; }
  set pa_HardwareSupplier5(val:string) { this.#pa_HardwareSupplier5 = val; }
  #pa_HardwareSupplier5?: string;
  get pa_HardwareSupplierArticle4(): string { return this.#pa_HardwareSupplierArticle4!; }
  set pa_HardwareSupplierArticle4(val:string) { this.#pa_HardwareSupplierArticle4 = val; }
  #pa_HardwareSupplierArticle4?: string;
  get pa_HardwareSupplierArticle5(): string { return this.#pa_HardwareSupplierArticle5!; }
  set pa_HardwareSupplierArticle5(val:string) { this.#pa_HardwareSupplierArticle5 = val; }
  #pa_HardwareSupplierArticle5?: string;
  get pa_CarcaseConnectionLeftTop(): string { return this.#pa_CarcaseConnectionLeftTop!; }
  set pa_CarcaseConnectionLeftTop(val:string) { this.#pa_CarcaseConnectionLeftTop = val; }
  #pa_CarcaseConnectionLeftTop?: string;
  get pa_CarcaseConnectionLeftBtm(): string { return this.#pa_CarcaseConnectionLeftBtm!; }
  set pa_CarcaseConnectionLeftBtm(val:string) { this.#pa_CarcaseConnectionLeftBtm = val; }
  #pa_CarcaseConnectionLeftBtm?: string;
  get pa_HardwareColor(): string { return this.#pa_HardwareColor!; }
  set pa_HardwareColor(val:string) { this.#pa_HardwareColor = val; }
  #pa_HardwareColor?: string;
  get pa_TypeElement(): string { return this.#pa_TypeElement!; }
  set pa_TypeElement(val:string) { this.#pa_TypeElement = val; }
  #pa_TypeElement?: string;
  get pa_ParentName(): string { return this.#pa_ParentName!; }
  set pa_ParentName(val:string) { this.#pa_ParentName = val; }
  #pa_ParentName?: string;
  get pa_CarcasePartConnectionLeftHor(): string { return this.#pa_CarcasePartConnectionLeftHor!; }
  set pa_CarcasePartConnectionLeftHor(val:string) { this.#pa_CarcasePartConnectionLeftHor = val; }
  #pa_CarcasePartConnectionLeftHor?: string;
  get pa_FittingConnectionLeftHor(): string { return this.#pa_FittingConnectionLeftHor!; }
  set pa_FittingConnectionLeftHor(val:string) { this.#pa_FittingConnectionLeftHor = val; }
  #pa_FittingConnectionLeftHor?: string;
  get pa_FittingConnectionLeftTop(): string { return this.#pa_FittingConnectionLeftTop!; }
  set pa_FittingConnectionLeftTop(val:string) { this.#pa_FittingConnectionLeftTop = val; }
  #pa_FittingConnectionLeftTop?: string;
  get pa_FittingConnectionLeftBtm(): string { return this.#pa_FittingConnectionLeftBtm!; }
  set pa_FittingConnectionLeftBtm(val:string) { this.#pa_FittingConnectionLeftBtm = val; }
  #pa_FittingConnectionLeftBtm?: string;
  get pa_BomId(): string { return this.#pa_BomId!; }
  set pa_BomId(val:string) { this.#pa_BomId = val; }
  #pa_BomId?: string;
  get pa_CarcaseEdgeTypeSettings(): cto_tab_CarcaseStorageunitConstruction|undefined { return this.#pa_CarcaseEdgeTypeSettings; }
  set pa_CarcaseEdgeTypeSettings(val:cto_tab_CarcaseStorageunitConstruction|undefined) { this.#pa_CarcaseEdgeTypeSettings = val; }
  #pa_CarcaseEdgeTypeSettings?: cto_tab_CarcaseStorageunitConstruction;
  get pa_AdditionalInfo1(): string { return this.#pa_AdditionalInfo1!; }
  set pa_AdditionalInfo1(val:string) { this.#pa_AdditionalInfo1 = val; }
  #pa_AdditionalInfo1?: string;
  get pa_FingergripInfo(): string { return this.#pa_FingergripInfo!; }
  set pa_FingergripInfo(val:string) { this.#pa_FingergripInfo = val; }
  #pa_FingergripInfo?: string;
  get pa_BackHeight(): number { return this.#pa_BackHeight!; }
  set pa_BackHeight(val:number) { this.#pa_BackHeight = val; }
  #pa_BackHeight?: number;
  get pa_TopDepth(): number { return this.#pa_TopDepth!; }
  set pa_TopDepth(val:number) { this.#pa_TopDepth = val; }
  #pa_TopDepth?: number;
  get pa_ColorGrainGroup(): string { return this.#pa_ColorGrainGroup!; }
  set pa_ColorGrainGroup(val:string) { this.#pa_ColorGrainGroup = val; }
  #pa_ColorGrainGroup?: string;
  get pa_ColorOutsideGrainGroup(): string { return this.#pa_ColorOutsideGrainGroup!; }
  set pa_ColorOutsideGrainGroup(val:string) { this.#pa_ColorOutsideGrainGroup = val; }
  #pa_ColorOutsideGrainGroup?: string;
  get pa_GrainLogic(): string { return this.#pa_GrainLogic!; }
  set pa_GrainLogic(val:string) { this.#pa_GrainLogic = val; }
  #pa_GrainLogic?: string;
  get pa_ProgramGrainGroup(): string { return this.#pa_ProgramGrainGroup!; }
  set pa_ProgramGrainGroup(val:string) { this.#pa_ProgramGrainGroup = val; }
  #pa_ProgramGrainGroup?: string;
  get pa_ProgramOutsideGrainGroup(): string { return this.#pa_ProgramOutsideGrainGroup!; }
  set pa_ProgramOutsideGrainGroup(val:string) { this.#pa_ProgramOutsideGrainGroup = val; }
  #pa_ProgramOutsideGrainGroup?: string;
}

