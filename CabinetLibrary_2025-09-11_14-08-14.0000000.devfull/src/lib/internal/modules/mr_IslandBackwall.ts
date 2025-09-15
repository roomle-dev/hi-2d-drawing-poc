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
import { OD_M_mc_Panel01, dc_mc_Panel01 } from './mc_Panel01'
import { IModuleNonNull_mr_IslandBackwall,IModParents_mr_IslandBackwall,IPartParentsNonNull_mr_IslandBackwall} from '../mod-interfaces'
import {IModVar_mod_Color,IModVarNonNull_mod_Color,IModVar_mod_Program,IModVarNonNull_mod_Program,IModVar_mod_Depth,IModVarNonNull_mod_Depth,IModVar_mod_Height,IModVarNonNull_mod_Height,IModVar_mod_Thk,IModVarNonNull_mod_Thk,IModVar_mod_PaneltopColor,IModVarNonNull_mod_PaneltopColor,IModVar_mod_PaneltopThk,IModVarNonNull_mod_PaneltopThk,IModVar_mod_IslandBackwallOverhangFront,IModVarNonNull_mod_IslandBackwallOverhangFront,IModVar_mod_IslandBackwallOverdimension,IModVarNonNull_mod_IslandBackwallOverdimension,IModVar_mod_IslandBackwallWidth,IModVarNonNull_mod_IslandBackwallWidth} from '../var-interfaces'
import { VariantValidation, IMatrix_mod_Color, IMatrix_mod_Program, IMatrix_mod_Depth, IMatrix_mod_Height, IMatrix_mod_Thk, IMatrix_mod_PaneltopColor, IMatrix_mod_PaneltopThk, IMatrix_mod_IslandBackwallOverhangFront, IMatrix_mod_IslandBackwallOverdimension, IMatrix_mod_IslandBackwallWidth} from '../selections'
import { IGlobalVars, GlobalVars } from '../global-vars'
import { IGlobalVarsParent } from '../global-vars-parent'

import { mr_IslandBackwall_createBuildPlan, mr_IslandBackwall_afterDataCompletion, mr_IslandBackwall_manufacturerDataCompletion } from '../../modules/mr_IslandBackwall';

export interface cbp_mr_IslandBackwall extends IModBaseProp
, IModVarNonNull_mod_Color, IModVarNonNull_mod_Program, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_Thk, IModVarNonNull_mod_PaneltopColor, IModVarNonNull_mod_PaneltopThk, IModVarNonNull_mod_IslandBackwallOverhangFront, IModVarNonNull_mod_IslandBackwallOverdimension, IModVarNonNull_mod_IslandBackwallWidth {
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

export interface dc_mr_IslandBackwall extends IModBaseProp
, IModVar_mod_Color, IModVar_mod_Program, IModVar_mod_Depth, IModVar_mod_Height, IModVar_mod_Thk, IModVar_mod_PaneltopColor, IModVar_mod_PaneltopThk, IModVar_mod_IslandBackwallOverhangFront, IModVar_mod_IslandBackwallOverdimension, IModVar_mod_IslandBackwallWidth {
  m:OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  seal():IModuleNonNull_mr_IslandBackwall;
  addOD_M_mc_Panel01(index?: number): dc_mc_Panel01;
}

export interface adc_mr_IslandBackwall extends IModBaseProp
, IModVarNonNull_mod_Color, IModVarNonNull_mod_Program, IModVarNonNull_mod_Depth, IModVarNonNull_mod_Height, IModVarNonNull_mod_Thk, IModVarNonNull_mod_PaneltopColor, IModVarNonNull_mod_PaneltopThk, IModVarNonNull_mod_IslandBackwallOverhangFront, IModVarNonNull_mod_IslandBackwallOverdimension, IModVarNonNull_mod_IslandBackwallWidth {
  get m(): OD_Base[];
  setOrigin(x:number|Matrix4,y?:number,z?:number):void;
  addOD_M_mc_Panel01(index?: number): dc_mc_Panel01;
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

export class OD_M_mr_IslandBackwall extends OD_Base  implements dc_mr_IslandBackwall
,IModParents_mr_IslandBackwall
,IModVar_mod_Color,IModVar_mod_Program,IModVar_mod_Depth,IModVar_mod_Height,IModVar_mod_Thk,IModVar_mod_PaneltopColor,IModVar_mod_PaneltopThk,IModVar_mod_IslandBackwallOverhangFront,IModVar_mod_IslandBackwallOverdimension,IModVar_mod_IslandBackwallWidth
 {
  constructor(parent?: OD_Base, manufacturerMode?:boolean) {
    super('mr_IslandBackwall', parent, parent !== undefined ? parent._manufacturerMode : manufacturerMode!);
    this._g = new GlobalVars();
    this._openGroups = new Map<string, OpenGroup>();
    this._partGroups = new Map<string, PartGroup>();
    this._selfNonNull = new OD_M_mr_IslandBackwall_NonNull(this);
  }
  _selfNonNull: OD_M_mr_IslandBackwall_NonNull;

  addGenerationContour(generationMethod: GenerationMethod, height: number, contour: Contour): void {
    this.generationContours.push({
      generationMethod: generationMethod,
      height: height,
      contour: contour,
      position: this._articlePos,
    });
  }

  override variants:string[] = ['mod_Color','mod_Program','mod_Depth','mod_Height','mod_Thk','mod_PaneltopColor','mod_PaneltopThk','mod_IslandBackwallOverhangFront','mod_IslandBackwallOverdimension','mod_IslandBackwallWidth',];
  #mod_Color?: string;
  get mod_Color(): string | undefined { return this.#mod_Color}
  set mod_Color(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Color' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Color === value) return;
    this.#mod_Color = value;
  }

  mod_Color_matrix?: IMatrix_mod_Color;
  #mod_Program?: string;
  get mod_Program(): string | undefined { return this.#mod_Program}
  set mod_Program(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Program' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Program === value) return;
    this.#mod_Program = value;
  }

  mod_Program_matrix?: IMatrix_mod_Program;
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
  #mod_Thk?: number;
  get mod_Thk(): number | undefined { return this.#mod_Thk}
  set mod_Thk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_Thk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_Thk === value) return;
    this.#mod_Thk = value;
  }

  mod_Thk_matrix?: IMatrix_mod_Thk;
  #mod_PaneltopColor?: string;
  get mod_PaneltopColor(): string | undefined { return this.#mod_PaneltopColor}
  set mod_PaneltopColor(value: string | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopColor' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopColor === value) return;
    this.#mod_PaneltopColor = value;
  }

  mod_PaneltopColor_matrix?: IMatrix_mod_PaneltopColor;
  #mod_PaneltopThk?: number;
  get mod_PaneltopThk(): number | undefined { return this.#mod_PaneltopThk}
  set mod_PaneltopThk(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_PaneltopThk' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_PaneltopThk === value) return;
    this.#mod_PaneltopThk = value;
  }

  mod_PaneltopThk_matrix?: IMatrix_mod_PaneltopThk;
  #mod_IslandBackwallOverhangFront?: number;
  get mod_IslandBackwallOverhangFront(): number | undefined { return this.#mod_IslandBackwallOverhangFront}
  set mod_IslandBackwallOverhangFront(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_IslandBackwallOverhangFront' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_IslandBackwallOverhangFront === value) return;
    this.#mod_IslandBackwallOverhangFront = value;
  }

  mod_IslandBackwallOverhangFront_matrix?: IMatrix_mod_IslandBackwallOverhangFront;
  #mod_IslandBackwallOverdimension?: number;
  get mod_IslandBackwallOverdimension(): number | undefined { return this.#mod_IslandBackwallOverdimension}
  set mod_IslandBackwallOverdimension(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_IslandBackwallOverdimension' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_IslandBackwallOverdimension === value) return;
    this.#mod_IslandBackwallOverdimension = value;
  }

  mod_IslandBackwallOverdimension_matrix?: IMatrix_mod_IslandBackwallOverdimension;
  #mod_IslandBackwallWidth?: number;
  get mod_IslandBackwallWidth(): number | undefined { return this.#mod_IslandBackwallWidth}
  set mod_IslandBackwallWidth(value: number | undefined) {
    if(this._adcFinished){
      logError("The property 'mod_IslandBackwallWidth' must not be changed after the module was completed with 'afterDataCompletion'");
      return;
    }
    if(this.#mod_IslandBackwallWidth === value) return;
    this.#mod_IslandBackwallWidth = value;
  }

  mod_IslandBackwallWidth_matrix?: IMatrix_mod_IslandBackwallWidth;
  override getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('mod_Color', this.mod_Color);
  res.set('mod_Program', this.mod_Program);
  res.set('mod_Depth', this.mod_Depth);
  res.set('mod_Height', this.mod_Height);
  res.set('mod_Thk', this.mod_Thk);
  res.set('mod_PaneltopColor', this.mod_PaneltopColor);
  res.set('mod_PaneltopThk', this.mod_PaneltopThk);
  res.set('mod_IslandBackwallOverhangFront', this.mod_IslandBackwallOverhangFront);
  res.set('mod_IslandBackwallOverdimension', this.mod_IslandBackwallOverdimension);
  res.set('mod_IslandBackwallWidth', this.mod_IslandBackwallWidth);
    return res;
  }
  override getCheckAttributes(): Map<string, number | string | boolean | undefined> | undefined {
   const res = new Map<string, number | string | boolean | undefined>();
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
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Color');
    const val = _toString(json['attributes']['mod_Color'], 'mod_Color');
    internal_leaveValidateVariant();
    this.mod_Color = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Program');
    const val = _toString(json['attributes']['mod_Program'], 'mod_Program');
    internal_leaveValidateVariant();
    this.mod_Program = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Depth');
    const val = _toFloat(json['attributes']['mod_Depth'], 'mod_Depth');
    internal_leaveValidateVariant();
    this.mod_Depth = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Height');
    const val = _toFloat(json['attributes']['mod_Height'], 'mod_Height');
    internal_leaveValidateVariant();
    this.mod_Height = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_Thk');
    const val = _toFloat(json['attributes']['mod_Thk'], 'mod_Thk');
    internal_leaveValidateVariant();
    this.mod_Thk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopColor');
    const val = _toString(json['attributes']['mod_PaneltopColor'], 'mod_PaneltopColor');
    internal_leaveValidateVariant();
    this.mod_PaneltopColor = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_PaneltopThk');
    const val = _toFloat(json['attributes']['mod_PaneltopThk'], 'mod_PaneltopThk');
    internal_leaveValidateVariant();
    this.mod_PaneltopThk = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_IslandBackwallOverhangFront');
    const val = _toFloat(json['attributes']['mod_IslandBackwallOverhangFront'], 'mod_IslandBackwallOverhangFront');
    internal_leaveValidateVariant();
    this.mod_IslandBackwallOverhangFront = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_IslandBackwallOverdimension');
    const val = _toFloat(json['attributes']['mod_IslandBackwallOverdimension'], 'mod_IslandBackwallOverdimension');
    internal_leaveValidateVariant();
    this.mod_IslandBackwallOverdimension = val; }
    { internal_enterValidateVariant(this.modId, this._id, 'mod_IslandBackwallWidth');
    const val = _toFloat(json['attributes']['mod_IslandBackwallWidth'], 'mod_IslandBackwallWidth');
    internal_leaveValidateVariant();
    this.mod_IslandBackwallWidth = val; }
    if (withSubModules && json['modules']) {
      json['modules'].forEach((subMod:any) => {this.m.push(loadOrderData(subMod, this, manufacturerMode))});
    }
    internal_leaveLoadJson();
  }
  override checkPosRelevantRequiredAttributes():void {
    if (this.#mod_Depth === undefined) {
      logWarning('The required attribute "mod_Depth" was not set in the order data');
    }
    if (this.#mod_Height === undefined) {
      logWarning('The required attribute "mod_Height" was not set in the order data');
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
    if (this.mod_Color === undefined) {
      this.mod_Color = "240";
    }
    if (this.mod_Program === undefined) {
      this.mod_Program = "Demoprogram1";
    }
    if (this.mod_Thk === undefined) {
      this.mod_Thk = 19;
    }
    if (this.mod_PaneltopColor === undefined) {
      this.mod_PaneltopColor = "380";
    }
    if (this.mod_IslandBackwallOverhangFront === undefined) {
      this.mod_IslandBackwallOverhangFront = 30;
    }
    if (this.mod_IslandBackwallOverdimension === undefined) {
      this.mod_IslandBackwallOverdimension = 10;
    }
    if (this.mod_IslandBackwallWidth === undefined) {
      this.mod_IslandBackwallWidth = 1000;
    }
    internal_leaveDataCompletionSetDefault();
  }
  #dataCompletionSetDefaultScripts() {
    internal_enterDataCompletionSetDefault(this.modId, this._id);
    try {
    if (this.mod_PaneltopThk === undefined) {
      this.mod_PaneltopThk = this.g.basic_PaneltopThk;
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
  #manufacturerDataCompletionInternal = mr_IslandBackwall_manufacturerDataCompletion;
  override afterDataCompletion():void {
    if(this._adcFinished) return;
    this._adcFinished = true;
    this.validateSelections();
    var adc = new OD_M_mr_IslandBackwall_NonNull(this);
    adc.afterDataCompletion();
    this.m.forEach(subMod => subMod.afterDataCompletion());

  }
  seal(): IModuleNonNull_mr_IslandBackwall{
    this.afterDataCompletion();
    const adc = new OD_M_mr_IslandBackwall_NonNull(this);
    return adc;
  }

  addOD_M_mc_Panel01(index?: number): dc_mc_Panel01 {
    var m = new OD_M_mc_Panel01(this);
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
    this.mod_Color_matrix = VariantValidation.mod_Color(this, this);
    this.mod_Program_matrix = VariantValidation.mod_Program(this, this);
    this.mod_Depth_matrix = VariantValidation.mod_Depth(this, this);
    this.mod_Height_matrix = VariantValidation.mod_Height(this, this);
    this.mod_Thk_matrix = VariantValidation.mod_Thk(this, this);
    this.mod_PaneltopColor_matrix = VariantValidation.mod_PaneltopColor(this, this);
    this.mod_PaneltopThk_matrix = VariantValidation.mod_PaneltopThk(this, this);
    this.mod_IslandBackwallOverhangFront_matrix = VariantValidation.mod_IslandBackwallOverhangFront(this, this);
    this.mod_IslandBackwallOverdimension_matrix = VariantValidation.mod_IslandBackwallOverdimension(this, this);
    this.mod_IslandBackwallWidth_matrix = VariantValidation.mod_IslandBackwallWidth(this, this);
  }

  override createBuildPlan():void {
    var cbp = new OD_M_mr_IslandBackwall_NonNull(this);
    cbp.createBuildPlan();
    this.m.forEach(subMod => subMod.createBuildPlan());
  }

}

class OD_M_mr_IslandBackwall_NonNull implements cbp_mr_IslandBackwall, adc_mr_IslandBackwall ,IPartParentsNonNull_mr_IslandBackwall {
  constructor(parent: OD_M_mr_IslandBackwall) {
    this.#internalParent = parent;
  }
  #internalParent: OD_M_mr_IslandBackwall;

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
  #createBuildPlanInternal = mr_IslandBackwall_createBuildPlan;
  afterDataCompletion():void {
    this.#afterDataCompletionInternal();
  }
  #afterDataCompletionInternal = mr_IslandBackwall_afterDataCompletion;
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
  get mod_Color(): string  {
    return this.#internalParent.mod_Color!;
  }
  get mod_Program(): string  {
    return this.#internalParent.mod_Program!;
  }
  get mod_Program_matrix(): IMatrix_mod_Program {
    return this.#internalParent.mod_Program_matrix!;
  }
  get mod_Depth(): number  {
    return this.#internalParent.mod_Depth!;
  }
  get mod_Height(): number  {
    return this.#internalParent.mod_Height!;
  }
  get mod_Thk(): number  {
    return this.#internalParent.mod_Thk!;
  }
  get mod_PaneltopColor(): string  {
    return this.#internalParent.mod_PaneltopColor!;
  }
  get mod_PaneltopColor_matrix(): IMatrix_mod_PaneltopColor {
    return this.#internalParent.mod_PaneltopColor_matrix!;
  }
  get mod_PaneltopThk(): number  {
    return this.#internalParent.mod_PaneltopThk!;
  }
  get mod_IslandBackwallOverhangFront(): number  {
    return this.#internalParent.mod_IslandBackwallOverhangFront!;
  }
  get mod_IslandBackwallOverdimension(): number  {
    return this.#internalParent.mod_IslandBackwallOverdimension!;
  }
  get mod_IslandBackwallWidth(): number  {
    return this.#internalParent.mod_IslandBackwallWidth!;
  }
  addOD_M_mc_Panel01(index?: number): dc_mc_Panel01 {
    return this.#internalParent.addOD_M_mc_Panel01(index);
  }
}

