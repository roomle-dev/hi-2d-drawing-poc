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
import { IPartBase, PartBase, _toFloat, _toInt, _toString, _toBoolean, IModBaseProp, IDockingInfo, Dock, IInsertLevelInfo } from '../mod-base'
import { loadOrderData } from '../loader'
import { GlobalFunc } from '../global-func'
import { OD_M_mc_Upright01, dc_mc_Upright01 } from './mc_Upright01'
import { IModuleNonNull_mr_Upright,IModParents_mr_Upright,IPartParentsNonNull_mr_Upright} from '../mod-interfaces'
import {IModVar_mod_UprightColor,IModVarNonNull_mod_UprightColor,IModVar_mod_UprightFloorProfileColor,IModVarNonNull_mod_UprightFloorProfileColor,IModVar_mod_UprightDepth,IModVarNonNull_mod_UprightDepth,IModVar_mod_UprightHeight,IModVarNonNull_mod_UprightHeight,IModVar_mod_PlinthAreaHeight,IModVarNonNull_mod_PlinthAreaHeight,IModVar_mod_UprightThk,IModVarNonNull_mod_UprightThk,IModVar_mod_UprightOverhang,IModVarNonNull_mod_UprightOverhang,IModVar_mod_CreateCountertop,IModVarNonNull_mod_CreateCountertop,IModVar_mod_UprightConstruction,IModVarNonNull_mod_UprightConstruction,IModVar_mod_HeightPosInsertion,IModVarNonNull_mod_HeightPosInsertion} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_UprightColor, IMatrix_mod_UprightFloorProfileColor, IMatrix_mod_UprightDepth, IMatrix_mod_UprightHeight, IMatrix_mod_PlinthAreaHeight, IMatrix_mod_UprightThk, IMatrix_mod_UprightOverhang, IMatrix_mod_CreateCountertop, IMatrix_mod_UprightConstruction, IMatrix_mod_HeightPosInsertion} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'
import { IGlobalVarsParent } from '../global-vars-parent'

import { mr_Upright_createBuildPlan, mr_Upright_afterDataCompletion, mr_Upright_manufacturerDataCompletion } from '../../modules/mr_Upright';

export interface cbp_mr_Upright extends IModBaseProp
, IModVarNonNull_mod_UprightColor, IModVarNonNull_mod_UprightFloorProfileColor, IModVarNonNull_mod_UprightDepth, IModVarNonNull_mod_UprightHeight, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_UprightThk, IModVarNonNull_mod_UprightOverhang, IModVarNonNull_mod_CreateCountertop, IModVarNonNull_mod_UprightConstruction, IModVarNonNull_mod_HeightPosInsertion {
  createPartGroup(groupName: string, part: IPartBase): PartGroup;
  assignPartGroup(groupName: string, part: IPartBase): void;
  createOpenGroup(groupName: string, part: IPartBase): OpenGroup;
  assignOpenGroup(groupName: string, part: IPartBase): void;
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  getFullOrigin(): Vector3;
  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void;
  getRoomContours(): RoomContour[];
  get m(): OD_Base[];
}

export interface dc_mr_Upright extends IModBaseProp
, IModVar_mod_UprightColor, IModVar_mod_UprightFloorProfileColor, IModVar_mod_UprightDepth, IModVar_mod_UprightHeight, IModVar_mod_PlinthAreaHeight, IModVar_mod_UprightThk, IModVar_mod_UprightOverhang, IModVar_mod_CreateCountertop, IModVar_mod_UprightConstruction, IModVar_mod_HeightPosInsertion {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mr_Upright;
  addOD_M_mc_Upright01(index?: number): dc_mc_Upright01;
}

export interface adc_mr_Upright extends IModBaseProp
, IModVarNonNull_mod_UprightColor, IModVarNonNull_mod_UprightFloorProfileColor, IModVarNonNull_mod_UprightDepth, IModVarNonNull_mod_UprightHeight, IModVarNonNull_mod_PlinthAreaHeight, IModVarNonNull_mod_UprightThk, IModVarNonNull_mod_UprightOverhang, IModVarNonNull_mod_CreateCountertop, IModVarNonNull_mod_UprightConstruction, IModVarNonNull_mod_HeightPosInsertion {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_Upright01(index?: number): dc_mc_Upright01;
get dockingInfo() : IDockingInfo[];
addDockingInfo(id: Dock, start: Vector3, end: Vector3): IDockingInfo;
get insertLevelInfo(): IInsertLevelInfo[];
get insertLevelFixed(): boolean;
set insertLevelFixed(value: boolean);
addInsertLevelHeight(height:number) : IInsertLevelInfo;
addInsertLevelHeight(height:number, isDefault: boolean|undefined) : IInsertLevelInfo;
  getRoomContours(): RoomContour[];
  get _posData(): Map<string, string|number>;
}

export class OD_M_mr_Upright extends OD_Base  implements dc_mr_Upright
,IModParents_mr_Upright
,IModVar_mod_UprightColor,IModVar_mod_UprightFloorProfileColor,IModVar_mod_UprightDepth,IModVar_mod_UprightHeight,IModVar_mod_PlinthAreaHeight,IModVar_mod_UprightThk,IModVar_mod_UprightOverhang,IModVar_mod_CreateCountertop,IModVar_mod_UprightConstruction,IModVar_mod_HeightPosInsertion
 {
  constructor(parent?: OD_Base, manufacturerMode?:boolean) {
    super('mr_Upright', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_mr_Upright_NonNull(this);
  }
  _selfNonNull: OD_M_mr_Upright_NonNull;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.generationContours.push({
      generationMethod: generationMethod,
      height: height,
      contour: contour,
      position: this._articlePos,
    });
  }

  override variants:string[] = ['mod_UprightColor','mod_UprightFloorProfileColor','mod_UprightDepth','mod_UprightHeight','mod_PlinthAreaHeight','mod_UprightThk','mod_UprightOverhang','mod_CreateCountertop','mod_UprightConstruction','mod_HeightPosInsertion',];
  #mod_UprightColor?: string;
  get mod_UprightColor(): string | undefined { return this.#mod_UprightColor}
  set mod_UprightColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightColor === value) return;
    this.#mod_UprightColor = value;
  }

  mod_UprightColor_matrix?: IMatrix_mod_UprightColor;
  #mod_UprightFloorProfileColor?: string;
  get mod_UprightFloorProfileColor(): string | undefined { return this.#mod_UprightFloorProfileColor}
  set mod_UprightFloorProfileColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightFloorProfileColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightFloorProfileColor === value) return;
    this.#mod_UprightFloorProfileColor = value;
  }

  mod_UprightFloorProfileColor_matrix?: IMatrix_mod_UprightFloorProfileColor;
  #mod_UprightDepth?: number;
  get mod_UprightDepth(): number | undefined { return this.#mod_UprightDepth}
  set mod_UprightDepth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightDepth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightDepth === value) return;
    this.#mod_UprightDepth = value;
  }

  mod_UprightDepth_matrix?: IMatrix_mod_UprightDepth;
  #mod_UprightHeight?: number;
  get mod_UprightHeight(): number | undefined { return this.#mod_UprightHeight}
  set mod_UprightHeight(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightHeight' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightHeight === value) return;
    this.#mod_UprightHeight = value;
  }

  mod_UprightHeight_matrix?: IMatrix_mod_UprightHeight;
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
  #mod_UprightThk?: number;
  get mod_UprightThk(): number | undefined { return this.#mod_UprightThk}
  set mod_UprightThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightThk === value) return;
    this.#mod_UprightThk = value;
  }

  mod_UprightThk_matrix?: IMatrix_mod_UprightThk;
  #mod_UprightOverhang?: number;
  get mod_UprightOverhang(): number | undefined { return this.#mod_UprightOverhang}
  set mod_UprightOverhang(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightOverhang' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightOverhang === value) return;
    this.#mod_UprightOverhang = value;
  }

  mod_UprightOverhang_matrix?: IMatrix_mod_UprightOverhang;
  #mod_CreateCountertop?: boolean;
  get mod_CreateCountertop(): boolean | undefined { return this.#mod_CreateCountertop}
  set mod_CreateCountertop(value: boolean | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_CreateCountertop' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_CreateCountertop === value) return;
    this.#mod_CreateCountertop = value;
  }

  mod_CreateCountertop_matrix?: IMatrix_mod_CreateCountertop;
  #mod_UprightConstruction?: string;
  get mod_UprightConstruction(): string | undefined { return this.#mod_UprightConstruction}
  set mod_UprightConstruction(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_UprightConstruction' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_UprightConstruction === value) return;
    this.#mod_UprightConstruction = value;
  }

  mod_UprightConstruction_matrix?: IMatrix_mod_UprightConstruction;
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
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_UprightColor', this.mod_UprightColor);
  res.set('mod_UprightFloorProfileColor', this.mod_UprightFloorProfileColor);
  res.set('mod_UprightDepth', this.mod_UprightDepth);
  res.set('mod_UprightHeight', this.mod_UprightHeight);
  res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
  res.set('mod_UprightThk', this.mod_UprightThk);
  res.set('mod_UprightOverhang', this.mod_UprightOverhang);
  res.set('mod_CreateCountertop', this.mod_CreateCountertop);
  res.set('mod_UprightConstruction', this.mod_UprightConstruction);
  res.set('mod_HeightPosInsertion', this.mod_HeightPosInsertion);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
   const res = new Map<string, number | string | boolean | undefined>();
   res.set('mod_PlinthAreaHeight', this.mod_PlinthAreaHeight);
   return res;
  }
  override loadJson(json:any, withSubModules:boolean = true, manufacturerMode:boolean) {
    internal_enterLoadJson(this.modId, this._id);

    if (json['articlePos']) {
      let val:number|string|undefined;
      val = json['articlePos']['x'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position X is invalid!');
        } else {
          this._articlePos.x = val;
        }
      }

      val = json['articlePos']['y'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position Y is invalid!');
        } else {
          this._articlePos.y = val;
        }
      }

      val = json['articlePos']['z'];
      if (val !== undefined) {
        if (typeof val === 'string') { val = parseFloat(val); }
        if (Number.isNaN(val)) {
          logError('Article position Z is invalid!');
        } else {
          this._articlePos.z = val;
        }
      }

      val = json['articlePos']['rotationY'];
      if (val !== undefined) {
        if (typeof val === 'string') {
          val = parseFloat(val);
        }
        if (Number.isNaN(val)) {
          logError('Article rotation Y is invalid!');
        } else {
          this._articlePos.rotationY = val;
        }
      }

    }
    // only take over the attributes we know...
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightColor');
    const val = _toString(json['attributes']['mod_UprightColor'], 'mod_UprightColor');
    internal_leaveValidateVariant();
    this.mod_UprightColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightFloorProfileColor');
    const val = _toString(json['attributes']['mod_UprightFloorProfileColor'], 'mod_UprightFloorProfileColor');
    internal_leaveValidateVariant();
    this.mod_UprightFloorProfileColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightDepth');
    const val = _toFloat(json['attributes']['mod_UprightDepth'], 'mod_UprightDepth');
    internal_leaveValidateVariant();
    this.mod_UprightDepth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightHeight');
    const val = _toFloat(json['attributes']['mod_UprightHeight'], 'mod_UprightHeight');
    internal_leaveValidateVariant();
    this.mod_UprightHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PlinthAreaHeight');
    const val = _toFloat(json['attributes']['mod_PlinthAreaHeight'], 'mod_PlinthAreaHeight');
    internal_leaveValidateVariant();
    this.mod_PlinthAreaHeight = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightThk');
    const val = _toFloat(json['attributes']['mod_UprightThk'], 'mod_UprightThk');
    internal_leaveValidateVariant();
    this.mod_UprightThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightOverhang');
    const val = _toFloat(json['attributes']['mod_UprightOverhang'], 'mod_UprightOverhang');
    internal_leaveValidateVariant();
    this.mod_UprightOverhang = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_CreateCountertop');
    const val = _toBoolean(json['attributes']['mod_CreateCountertop'], 'mod_CreateCountertop');
    internal_leaveValidateVariant();
    this.mod_CreateCountertop = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_UprightConstruction');
    const val = _toString(json['attributes']['mod_UprightConstruction'], 'mod_UprightConstruction');
    internal_leaveValidateVariant();
    this.mod_UprightConstruction = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_HeightPosInsertion');
    const val = _toFloat(json['attributes']['mod_HeightPosInsertion'], 'mod_HeightPosInsertion');
    internal_leaveValidateVariant();
    this.mod_HeightPosInsertion = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes():void {
    if (this.#mod_UprightFloorProfileColor !== undefined) {
      this.#mod_UprightFloorProfileColor = undefined;
      logWarning('The attribute "mod_UprightFloorProfileColor" was set in the order data but is not marked as "pos relevant" - the value is ignored');
    }
    if (this.#mod_UprightDepth === undefined) {
      logWarning('The required attribute "mod_UprightDepth" was not set in the order data');
    }
    if (this.#mod_UprightHeight === undefined) {
      logWarning('The required attribute "mod_UprightHeight" was not set in the order data');
    }
  }
  #dataCompletionAssignDerivedData() {
    internal_enterDataCompletionAssignDerivedData(this.modId, this._id);
    internal_leaveDataCompletionAssignDerivedData();
  }

  #dataCompletionSetDefaults() {
    this.#dataCompletionSetDefaultValues();
    this.#dataCompletionSetDefaultScripts();
  }
  #dataCompletionSetDefaultValues() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    if (this.mod_UprightColor === undefined) {
      this.mod_UprightColor = "240";
    }
    if (this.mod_UprightFloorProfileColor === undefined) {
      this.mod_UprightFloorProfileColor = "DemoStainlessSteel";
    }
    if (this.mod_PlinthAreaHeight === undefined) {
      this.mod_PlinthAreaHeight = 100;
    }
    if (this.mod_UprightThk === undefined) {
      this.mod_UprightThk = 19;
    }
    if (this.mod_UprightOverhang === undefined) {
      this.mod_UprightOverhang = 23;
    }
    if (this.mod_CreateCountertop === undefined) {
      this.mod_CreateCountertop = false;
    }
    if (this.mod_UprightConstruction === undefined) {
      this.mod_UprightConstruction = "ToFloor";
    }
    if (this.mod_HeightPosInsertion === undefined) {
      this.mod_HeightPosInsertion = 0;
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
    this.#dataCompletionSetDefaultValues();
    // Optionally set the global variables based on this root data
    internal_enterDataCompletionSetGlobalVars(this.modId, this._id);
    this._g!.setRootModuleData(this);
    internal_leaveDataCompletionSetGlobalVars();
    this.#dataCompletionSetDefaultScripts();
    this.m.forEach(subMod => subMod.dataCompletion());
  }

  override manufacturerDataCompletion():void {
    this.#manufacturerDataCompletionInternal();
    this.m.forEach(subMod => subMod.manufacturerDataCompletion());
  }
  #manufacturerDataCompletionInternal = mr_Upright_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mr_Upright_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mr_Upright{
    this.afterDataCompletion();
    const adc = new OD_M_mr_Upright_NonNull(this);
    return adc;
  }

  addOD_M_mc_Upright01(index?: number): dc_mc_Upright01 {
    var m = new OD_M_mc_Upright01(this);
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
    this.mod_UprightColor_matrix = VariantValidation.mod_UprightColor(this, this);
    this.mod_UprightFloorProfileColor_matrix = VariantValidation.mod_UprightFloorProfileColor(this, this);
    this.mod_UprightDepth_matrix = VariantValidation.mod_UprightDepth(this, this);
    this.mod_UprightHeight_matrix = VariantValidation.mod_UprightHeight(this, this);
    this.mod_PlinthAreaHeight_matrix = VariantValidation.mod_PlinthAreaHeight(this, this);
    this.mod_UprightThk_matrix = VariantValidation.mod_UprightThk(this, this);
    this.mod_UprightOverhang_matrix = VariantValidation.mod_UprightOverhang(this, this);
    this.mod_CreateCountertop_matrix = VariantValidation.mod_CreateCountertop(this, this);
    this.mod_UprightConstruction_matrix = VariantValidation.mod_UprightConstruction(this, this);
    this.mod_HeightPosInsertion_matrix = VariantValidation.mod_HeightPosInsertion(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mr_Upright_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mr_Upright_NonNull implements cbp_mr_Upright, adc_mr_Upright ,IPartParentsNonNull_mr_Upright {
  constructor(parent: OD_M_mr_Upright) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_mr_Upright;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.#internalParent.addGenerationContour(
      generationMethod,
      height,
      contour
    );
  }
  getRoomContours(): RoomContour[] { return this.#internalParent.roomContours ?? []; }
  get _posData(): Map<string, string|number> { return this.#internalParent._posData; }

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
  #createBuildPlanInternal = mr_Upright_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mr_Upright_afterDataCompletion;
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
  get dockingInfo() { return this.#internalParent.dockingInfo; }
  addDockingInfo(id: Dock, start: Vector3, end: Vector3): IDockingInfo {     return this.#internalParent.addDockingInfo(id, start, end);   }
get insertLevelInfo(): IInsertLevelInfo[] { return this.#internalParent.insertLevelInfo; }
get insertLevelFixed(): boolean { return this.#internalParent.insertLevelFixed; }
set insertLevelFixed(value: boolean) { this.#internalParent.insertLevelFixed = value; }
addInsertLevelHeight(height:number, isDefault: boolean|undefined = undefined) : IInsertLevelInfo  { return this.#internalParent.addInsertLevelHeight(height, isDefault); }
  get mod_UprightColor(): string  {
    return this.#internalParent.mod_UprightColor!;
  }
  get mod_UprightFloorProfileColor(): string  {
    return this.#internalParent.mod_UprightFloorProfileColor!;
  }
  get mod_UprightDepth(): number  {
    return this.#internalParent.mod_UprightDepth!;
  }
  get mod_UprightHeight(): number  {
    return this.#internalParent.mod_UprightHeight!;
  }
  get mod_PlinthAreaHeight(): number  {
    return this.#internalParent.mod_PlinthAreaHeight!;
  }
  get mod_UprightThk(): number  {
    return this.#internalParent.mod_UprightThk!;
  }
  get mod_UprightOverhang(): number  {
    return this.#internalParent.mod_UprightOverhang!;
  }
  get mod_CreateCountertop(): boolean  {
    return this.#internalParent.mod_CreateCountertop!;
  }
  get mod_UprightConstruction(): string  {
    return this.#internalParent.mod_UprightConstruction!;
  }
  get mod_HeightPosInsertion(): number  {
    return this.#internalParent.mod_HeightPosInsertion!;
  }
  addOD_M_mc_Upright01(index?: number): dc_mc_Upright01 {
    return this.#internalParent.addOD_M_mc_Upright01(index);
  }
}

