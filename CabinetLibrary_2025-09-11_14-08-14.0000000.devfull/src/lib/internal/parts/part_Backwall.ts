import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
import { IModBaseProp, IPartBase, PartBase, PartTouch, I3DElement, TouchType } from '../mod-base'
import { CollisionDataRel } from '../touches'
import { GlobalFunc } from '../global-func'
import { P_part_ShelfadjDrill, IP_part_ShelfadjDrill_PartVarsReadOnly } from './part_ShelfadjDrill'
import { P_part_HangerDrill, IP_part_HangerDrill_PartVarsReadOnly } from './part_HangerDrill'
import { BOM_ElementType_bomout_Board } from '../bom/types/bom_bomout_Board'
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
import { IPartParentsNonNull_mc_StorageunitBackwall01 } from '../mod-interfaces'

export interface IP_part_Backwall_PartVarsReadOnly extends IPartBase {
  parent: IPartParentsNonNull_mc_StorageunitBackwall01;
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
  get pa_BomId(): string;
  get pa_AdditionalInfo1(): string;
  get pa_AngleBack(): number;
  get pa_AngleFront(): number;
  get pa_AngleLeft(): number;
  get pa_AngleRight(): number;
  get pa_ColorGrainGroup(): string;
  get pa_GrainLogic(): string;
  get pa_ProgramGrainGroup(): string;
  get pa_TypeElement(): string;
}

export interface IP_part_Backwall_PartVarsWritable extends IP_part_Backwall_PartVarsReadOnly {
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
  set pa_BomId(value: string);
  set pa_AdditionalInfo1(value: string);
  set pa_AngleBack(value: number);
  set pa_AngleFront(value: number);
  set pa_AngleLeft(value: number);
  set pa_AngleRight(value: number);
  set pa_ColorGrainGroup(value: string);
  set pa_GrainLogic(value: string);
  set pa_ProgramGrainGroup(value: string);
  set pa_TypeElement(value: string);
}

export class P_part_Backwall extends PartBase implements IP_part_Backwall_PartVarsWritable {
  constructor(parent: IPartParentsNonNull_mc_StorageunitBackwall01, 
x:number, y:number, z:number, dimx:number, dimy:number, dimz:number) {
    super(parent, 'part_Backwall', x, y, z, dimx, dimy, dimz);
    this.parent = parent;
    this._wdt = 'XYZ';
  }
  parent: IPartParentsNonNull_mc_StorageunitBackwall01; // module which created this part
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
  res.set('pa_BomId', this.#pa_BomId);
  res.set('pa_AdditionalInfo1', this.#pa_AdditionalInfo1);
  res.set('pa_AngleBack', this.#pa_AngleBack);
  res.set('pa_AngleFront', this.#pa_AngleFront);
  res.set('pa_AngleLeft', this.#pa_AngleLeft);
  res.set('pa_AngleRight', this.#pa_AngleRight);
  res.set('pa_ColorGrainGroup', this.#pa_ColorGrainGroup);
  res.set('pa_GrainLogic', this.#pa_GrainLogic);
  res.set('pa_ProgramGrainGroup', this.#pa_ProgramGrainGroup);
  res.set('pa_TypeElement', this.#pa_TypeElement);
    return res;
  }
  setAttributes() {
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
    // part_Backwall_ValueScript
    if (this.#pa_TopColor === undefined) {
      this.pa_TopColor = this.parent.mod_CarcaseBackwallColor;
    }
    if (this.#pa_BtmColor === undefined) {
      this.pa_BtmColor = this.parent.mod_CarcaseOutsideColor;
    }
    if (this.#pa_EdgeFrontColor === undefined) {
      this.pa_EdgeFrontColor = this.parent.mod_CarcaseEdgeColor;
    }
    if (this.#pa_EdgeLeftColor === undefined) {
      this.pa_EdgeLeftColor = this.parent.mod_CarcaseEdgeColor;
    }
    if (this.#pa_EdgeBackColor === undefined) {
      this.pa_EdgeBackColor = this.parent.mod_CarcaseEdgeColor;
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
    if (this.#pa_BomId === undefined) {
      this.pa_BomId = this.parent.mod_CarcaseId;
    }
    if (this.#pa_AdditionalInfo1 === undefined) {
      this.pa_AdditionalInfo1 = 'None';
    }
    if (this.#pa_AngleBack === undefined) {
      this.pa_AngleBack = 0;
    }
    if (this.#pa_AngleFront === undefined) {
      this.pa_AngleFront = 0;
    }
    if (this.#pa_AngleLeft === undefined) {
      this.pa_AngleLeft = 0;
    }
    if (this.#pa_AngleRight === undefined) {
      this.pa_AngleRight = 0;
    }
    if (this.#pa_ColorGrainGroup === undefined) {
      this.pa_ColorGrainGroup = this.parent.mod_CarcaseBackwallColor_matrix.GrainGroupId;
    }
    if (this.#pa_GrainLogic === undefined) {
      this.pa_GrainLogic = this.parent.mod_GrainLogic;
    }
    if (this.#pa_ProgramGrainGroup === undefined) {
      this.pa_ProgramGrainGroup = this.parent.mod_CarcaseBackwallProgram_matrix.GrainGroupId;
    }
    if (this.#pa_TypeElement === undefined) {
      this.pa_TypeElement = this.parent.mod_TypeElement;
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
      logError('Attribute pa_TopColor not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_BtmColor === undefined) {
      logError('Attribute pa_BtmColor not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeFrontColor === undefined) {
      logError('Attribute pa_EdgeFrontColor not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeLeftColor === undefined) {
      logError('Attribute pa_EdgeLeftColor not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeBackColor === undefined) {
      logError('Attribute pa_EdgeBackColor not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeRightColor === undefined) {
      logError('Attribute pa_EdgeRightColor not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeFrontType === undefined) {
      logError('Attribute pa_EdgeFrontType not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeLeftType === undefined) {
      logError('Attribute pa_EdgeLeftType not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeBackType === undefined) {
      logError('Attribute pa_EdgeBackType not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeRightType === undefined) {
      logError('Attribute pa_EdgeRightType not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_EdgeJointType === undefined) {
      logError('Attribute pa_EdgeJointType not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_GrainDirection === undefined) {
      logError('Attribute pa_GrainDirection not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_Program === undefined) {
      logError('Attribute pa_Program not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_BomId === undefined) {
      logError('Attribute pa_BomId not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_AdditionalInfo1 === undefined) {
      logError('Attribute pa_AdditionalInfo1 not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_AngleBack === undefined) {
      logError('Attribute pa_AngleBack not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_AngleFront === undefined) {
      logError('Attribute pa_AngleFront not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_AngleLeft === undefined) {
      logError('Attribute pa_AngleLeft not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_AngleRight === undefined) {
      logError('Attribute pa_AngleRight not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_ColorGrainGroup === undefined) {
      logError('Attribute pa_ColorGrainGroup not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_GrainLogic === undefined) {
      logError('Attribute pa_GrainLogic not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_ProgramGrainGroup === undefined) {
      logError('Attribute pa_ProgramGrainGroup not set in part part_Backwall (id: ' + this._id + ')');
    }
    if (this.#pa_TypeElement === undefined) {
      logError('Attribute pa_TypeElement not set in part part_Backwall (id: ' + this._id + ')');
    }
    internal_leaveCheckPartAttributes();
  }
  createBomElements() {
    try {
    const partSelf = this;
      // bomout_Board: 170
      if (partSelf._g?.basic_CreateBom == 'Library') { // ####################### CUSTOM SCRIPTS ########################
        const parentId = partSelf._id;
        const _bom = new class BOM170 extends BOM_ElementType_bomout_Board {
          constructor() { super(partSelf); }
          set(partSelf: IP_part_Backwall_PartVarsReadOnly) {
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
      // ncout_Group: 347: part_ShelfadjDrill FromFront
    if (touch == PartTouch.FromFront && partNext instanceof P_part_ShelfadjDrill) {
        let part2 = <P_part_ShelfadjDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT347 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Backwall_PartVarsReadOnly, touch: PartTouch, part2: IP_part_ShelfadjDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
// Get data for drillings
//====================================================================

// Call the process function to retrieve drill data
let Info = GlobalFunc.process_ShelfadjDrills(part2.pa_ShelfadjBackwallProcessingId)
let DrillInfo = Info.drill;
let InsertionPoint = Info.insertionPoint.Y;

// Calculate quantity for the drills
let QtyDrills = Math.floor(part2._dimy / part2.pa_ShelfadjDrillDistance) + 1;

//====================================================================
// For each drilling (insert the drillings)
//====================================================================

// Variables
let StartPos = posRel.y;
let DrillingLines = GlobalFunc.process_Descriptor(part2.pa_ShelfadjBackwallDrillDescriptor, part2._dimx);

for(let i = 1; i <= QtyDrills; i++){

  // Insert the drillings in depth (drilling lines)
  let k = 0;
  DrillingLines.forEach(DrillingLine => {

    // Calculate y-position
    let posY = StartPos + DrillInfo.YA + InsertionPoint;

    // Calculate x-position
    let posX = DrillingLine;

    // Add Vertical Drill
    let DrillVert = this.addncout_DrillVert();
    DrillVert.nc_TOOL = "102";
    DrillVert.nc_XA = posX;
    DrillVert.nc_YA = posY;
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
    let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posRel.x + posX, posY, posRel.z - DrillInfo.TI, DrillInfo.DU, DrillInfo.DU, DrillInfo.TI);
    drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + DrillInfo.DU / 2 + '" /></svg>', 'z');

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
      // ncout_Group: 391: part_HangerDrill FromBack
    if (touch == PartTouch.FromBack && partNext instanceof P_part_HangerDrill) {
        let part2 = <P_part_HangerDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT391 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Backwall_PartVarsReadOnly, touch: PartTouch, part2: IP_part_HangerDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
// Get side of Hanger
//====================================================================
let hangerSide = GlobalFunc.find_GraphicLibrary(part2.pa_Model3DGroupName).Identifier!;
              
//====================================================================
// Get data for drillings and rotation
//====================================================================

let drillings: any[] = [];
let drills: any[] = [];
let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);
let insertPoint = GlobalFunc.process_MachiningInsertionHelper('000',part2.pa_Model3DGroupName)

processings.forEach((processing) => {
  drills = GlobalFunc.find_HardwareDrillVertLibrary(processing.ProcessingId!, 'Backwall');
  //====================================================================
  // For each drilling (insert the drillings)
  //====================================================================
  drills.forEach((drill) => {
		
		// Calculate X position
		let posX = 0;
		if(hangerSide == 'HangerLeftVisible' || hangerSide == 'HangerLeftInvisible')
		{
			posX = posRel.x + drill.XA;
		}
		else if (hangerSide == 'HangerRightVisible' || hangerSide == 'HangerRightInvisible')
		{
			posX = posRel.x + part2._dimx - drill.XA;
		}
		
		// Add Vertical Drill
		let DrillVert = this.addncout_DrillVert();
		DrillVert.nc_TOOL="102";
		DrillVert.nc_XA= posX;
		//DrillVert.nc_YA= partSelf._dimy - posRel.y - insertPoint.InsertionPointY - drill.YA;
		DrillVert.nc_YA= partSelf._dimy - (partSelf._dimy - posRel.y - insertPoint.InsertionPointY - drill.YA);
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
		let drilling01 = partSelf.add3DElement('Drilling01', DrillVert, posX, posRel.y + insertPoint.InsertionPointY + drill.YA, 0, drill.TI, drill.DU, drill.DU );
		drilling01.extrude('<svg><circle cx="' + 0 + '" cy="' + 0 + '" r="' + drill.DU/2 + '" /></svg>', 'z');
  });
});

               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Drillings for Hangers";
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
      // ncout_Group: 392: part_HangerDrill Collision
    if (touch == PartTouch.Collision && partNext instanceof P_part_HangerDrill) {
        let part2 = <P_part_HangerDrill>partNext;
        const partSelf = this;
        if (true) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT392 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Backwall_PartVarsReadOnly, touch: PartTouch, part2: IP_part_HangerDrill_PartVarsReadOnly, posRel:CollisionDataRel) {
              this._touchOrigin = touch;
              this._touchPart2Id = part2._id;
              this._touchPart2Name = part2._partId;
              internal_enterBomPartMasterDataTouches(partSelf._id, partSelf._partId, part2._id, part2._partId, touch);
               // ####################### CUSTOM SCRIPTS ########################
//====================================================================
  // Get side of Hanger
  //====================================================================
  let hangerSide = GlobalFunc.find_GraphicLibrary(part2.pa_Model3DGroupName).Identifier!;

  //====================================================================
  // Get data for millings
  //====================================================================

  // Find all processings  (to each part)
  let processings = GlobalFunc.find_ProcessingMapping(part2.pa_ProcessingId);

  // Find the millings
  processings.forEach((processing) => {
    if(processing.ProcessingLibrary == 'Milling')
    {
      let foundMillings = GlobalFunc.find_HardwareMilingLibrary(processing.ProcessingId!, 'Backwall');
      //====================================================================
      // For each milling (insert the millings)
      //====================================================================

      foundMillings.forEach(x => 
        {  
          // Position of the milling in graphics
          // Calculate X position
          let PosX = 0;
          if(hangerSide == 'HangerLeftVisible' || hangerSide == 'HangerLeftInvisible')
          {
            PosX = posRel.x + x.XA(partSelf._dimx, partSelf, part2, posRel);
          }
          else if (hangerSide == 'HangerRightVisible' || hangerSide == 'HangerRightInvisible')
          {
            PosX = posRel.x + part2._dimx - x.LA(0, partSelf, part2, posRel) + x.XA(partSelf._dimx, partSelf, part2, posRel);
          }
        let PosY = posRel.y + part2._dimy - x.BR(0, partSelf, part2, posRel) + x.YA(partSelf._dimx, partSelf, part2, posRel);
          let PosZ=0;

          // Calculate Depth
          let tmpDimZ: number = x.TI(0, partSelf, part2, posRel);
          if (tmpDimZ == 0)
          {
            tmpDimZ = partSelf._dimz;
          }
        
          // Add Milling
          let Milling = this.addncout_Pocket();
          Milling.nc_TOOL="112";
          Milling.nc_Side=x.Side;
          Milling.nc_XA = PosX + x.LA(0, partSelf, part2, posRel)/2;
          Milling.nc_YA = PosY + x.BR(0, partSelf, part2, posRel)/2;
          Milling.nc_LA = x.LA(0, partSelf, part2, posRel);
          Milling.nc_BR = x.BR(0, partSelf, part2, posRel);
          Milling.nc_TI=tmpDimZ;
          Milling.nc_RD=x.matrix_RD || 0;
          Milling.nc_KO=x.matrix_KO || "00";
          Milling.nc_T_='101';
        
        
          // Add drawing
          //let drilling01 = partSelf.add3DElement('Milling01', Milling, PosX, PosY, PosZ, x.LA(0), x.BR(0), partSelf._dimz);
        let drilling01 = partSelf.add3DElement('Milling01', Milling, PosX, PosY, PosZ, x.LA(0, partSelf, part2, posRel), x.BR(0, partSelf, part2, posRel), tmpDimZ);
        drilling01.extrude('<svg><rect x="' + 0 + '" y="' + 0 + '" width="' + x.LA(0, partSelf, part2, posRel) + '" height="' + x.BR(0, partSelf, part2, posRel) + '" /></svg>', 'z');
        
      });
    }
  });
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Millings for Hangers";
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
        if (partSelf.pa_AngleBack != 0) { // ####################### CUSTOM SCRIPTS ########################
          let parentId = partSelf._id;
          const _bom = new class BOMT567 extends BOM_ElementType_ncout_Group {
            constructor() { super(partSelf); }
            set(partSelf: IP_part_Backwall_PartVarsReadOnly) {
              internal_enterBomPartMasterDataTouchesEnd(partSelf._id, partSelf._partId);
               // ####################### CUSTOM SCRIPTS ########################
GlobalFunc.ops_SawingAngle(this, 'AngledCutInLengthPositiveAngle', 0, partSelf._dimy, partSelf._dimx, partSelf._dimy, partSelf.pa_AngleBack);
               // ################### END CUSTOM SCRIPTS ########################
              internal_leaveBomPartMasterDataTouches();
            }
          }
          _bom._parentId = partSelf._id;
          _bom._description = "Sawing Angle in the Back";
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
  get pa_BomId(): string { return this.#pa_BomId!; }
  set pa_BomId(val:string) { this.#pa_BomId = val; }
  #pa_BomId?: string;
  get pa_AdditionalInfo1(): string { return this.#pa_AdditionalInfo1!; }
  set pa_AdditionalInfo1(val:string) { this.#pa_AdditionalInfo1 = val; }
  #pa_AdditionalInfo1?: string;
  get pa_AngleBack(): number { return this.#pa_AngleBack!; }
  set pa_AngleBack(val:number) { this.#pa_AngleBack = val; }
  #pa_AngleBack?: number;
  get pa_AngleFront(): number { return this.#pa_AngleFront!; }
  set pa_AngleFront(val:number) { this.#pa_AngleFront = val; }
  #pa_AngleFront?: number;
  get pa_AngleLeft(): number { return this.#pa_AngleLeft!; }
  set pa_AngleLeft(val:number) { this.#pa_AngleLeft = val; }
  #pa_AngleLeft?: number;
  get pa_AngleRight(): number { return this.#pa_AngleRight!; }
  set pa_AngleRight(val:number) { this.#pa_AngleRight = val; }
  #pa_AngleRight?: number;
  get pa_ColorGrainGroup(): string { return this.#pa_ColorGrainGroup!; }
  set pa_ColorGrainGroup(val:string) { this.#pa_ColorGrainGroup = val; }
  #pa_ColorGrainGroup?: string;
  get pa_GrainLogic(): string { return this.#pa_GrainLogic!; }
  set pa_GrainLogic(val:string) { this.#pa_GrainLogic = val; }
  #pa_GrainLogic?: string;
  get pa_ProgramGrainGroup(): string { return this.#pa_ProgramGrainGroup!; }
  set pa_ProgramGrainGroup(val:string) { this.#pa_ProgramGrainGroup = val; }
  #pa_ProgramGrainGroup?: string;
  get pa_TypeElement(): string { return this.#pa_TypeElement!; }
  set pa_TypeElement(val:string) { this.#pa_TypeElement = val; }
  #pa_TypeElement?: string;
}

