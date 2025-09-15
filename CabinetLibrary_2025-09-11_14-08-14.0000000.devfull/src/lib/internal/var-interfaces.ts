import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'
import { IGlobalVars } from './global-vars';
import { IMatrix_mod_CarcaseBackwallColor, IMatrix_mod_CarcaseBackwallProgram, IMatrix_mod_CarcaseColor, IMatrix_mod_CarcaseFrontConstruction, IMatrix_mod_CarcaseOutsideColor, IMatrix_mod_CarcaseOutsideProgram, IMatrix_mod_CarcaseProgram, IMatrix_mod_CarcaseVisBtm, IMatrix_mod_CarcaseVisLeft, IMatrix_mod_CarcaseVisRight, IMatrix_mod_CarcaseVisTop, IMatrix_mod_CornerunitStraightConstruction, IMatrix_mod_CornerunitStraightFillerConstruction, IMatrix_mod_CountertopColor, IMatrix_mod_CountertopProgram, IMatrix_mod_DoorDirection, IMatrix_mod_DoorType, IMatrix_mod_DrawerBoxDesign, IMatrix_mod_FingergripType, IMatrix_mod_FlipliftType, IMatrix_mod_FrameFillingColor, IMatrix_mod_FrontColor, IMatrix_mod_FrontProgram, IMatrix_mod_FrontSplitColor2, IMatrix_mod_FrontSplitColor3, IMatrix_mod_FrontSplitProgram2, IMatrix_mod_FrontSplitProgram3, IMatrix_mod_HandleDesign, IMatrix_mod_HandlePosLeftMatrix, IMatrix_mod_HandlePosMatrix, IMatrix_mod_HandlePosRightMatrix, IMatrix_mod_HangerPosX, IMatrix_mod_HingeLogic, IMatrix_mod_HingeType, IMatrix_mod_LightPosX, IMatrix_mod_LightSystem, IMatrix_mod_PanelWoodFrameFillingType, IMatrix_mod_PaneltopColor, IMatrix_mod_PaneltopProgram, IMatrix_mod_PlinthAreaDesign, IMatrix_mod_PlinthAreaExtraItem, IMatrix_mod_Program, IMatrix_mod_PullOutType, IMatrix_mod_ShelfadjColor, IMatrix_mod_ShelfadjDesign, IMatrix_mod_ShelfadjDrillType, IMatrix_mod_ShelfadjWoodColor, IMatrix_mod_ShelvesBrackets, IMatrix_mod_ShelvesColor, IMatrix_mod_SlopedCeilingDimensionLogic, IMatrix_mod_ToekickColor, IMatrix_mod_ToekickProgram, IMatrix_mod_VertDividerType } from './selections';

export interface IModVar_mod_BackHeight { mod_BackHeight?: number; }
export interface IModVarNonNull_mod_BackHeight { get mod_BackHeight(): number; }
export interface IModVar_mod_BacksplashColor { mod_BacksplashColor?: string; }
export interface IModVarNonNull_mod_BacksplashColor { get mod_BacksplashColor(): string; }
export interface IModVar_mod_BacksplashHeight { mod_BacksplashHeight?: number; }
export interface IModVarNonNull_mod_BacksplashHeight { get mod_BacksplashHeight(): number; }
export interface IModVar_mod_BacksplashThk { mod_BacksplashThk?: number; }
export interface IModVarNonNull_mod_BacksplashThk { get mod_BacksplashThk(): number; }
export interface IModVar_mod_BacksplashWidth { mod_BacksplashWidth?: number; }
export interface IModVarNonNull_mod_BacksplashWidth { get mod_BacksplashWidth(): number; }
export interface IModVar_mod_BackwallFixedHeight { mod_BackwallFixedHeight?: number; }
export interface IModVarNonNull_mod_BackwallFixedHeight { get mod_BackwallFixedHeight(): number; }
export interface IModVar_mod_BackwallPos { mod_BackwallPos?: number; }
export interface IModVarNonNull_mod_BackwallPos { get mod_BackwallPos(): number; }
export interface IModVar_mod_BackwallPosList { mod_BackwallPosList: number[]; }
export interface IModVarNonNull_mod_BackwallPosList { get mod_BackwallPosList(): number[]; }
export interface IModVar_mod_BackwallThk { mod_BackwallThk?: number; }
export interface IModVarNonNull_mod_BackwallThk { get mod_BackwallThk(): number; }
export interface IModVar_mod_CarcaseBackwallColor { mod_CarcaseBackwallColor?: string; }
export interface IModVarNonNull_mod_CarcaseBackwallColor { get mod_CarcaseBackwallColor(): string; get mod_CarcaseBackwallColor_matrix(): IMatrix_mod_CarcaseBackwallColor; }
export interface IModVar_mod_CarcaseBackwallConstruction { mod_CarcaseBackwallConstruction?: string; }
export interface IModVarNonNull_mod_CarcaseBackwallConstruction { get mod_CarcaseBackwallConstruction(): string; }
export interface IModVar_mod_CarcaseBackwallConstructionList { mod_CarcaseBackwallConstructionList: string[]; }
export interface IModVarNonNull_mod_CarcaseBackwallConstructionList { get mod_CarcaseBackwallConstructionList(): string[]; }
export interface IModVar_mod_CarcaseBackwallProgram { mod_CarcaseBackwallProgram?: string; }
export interface IModVarNonNull_mod_CarcaseBackwallProgram { get mod_CarcaseBackwallProgram(): string; get mod_CarcaseBackwallProgram_matrix(): IMatrix_mod_CarcaseBackwallProgram; }
export interface IModVar_mod_CarcaseColor { mod_CarcaseColor?: string; }
export interface IModVarNonNull_mod_CarcaseColor { get mod_CarcaseColor(): string; get mod_CarcaseColor_matrix(): IMatrix_mod_CarcaseColor; }
export interface IModVar_mod_CarcaseConnectionLeftBtm { mod_CarcaseConnectionLeftBtm?: string; }
export interface IModVarNonNull_mod_CarcaseConnectionLeftBtm { get mod_CarcaseConnectionLeftBtm(): string; }
export interface IModVar_mod_CarcaseConnectionLeftTop { mod_CarcaseConnectionLeftTop?: string; }
export interface IModVarNonNull_mod_CarcaseConnectionLeftTop { get mod_CarcaseConnectionLeftTop(): string; }
export interface IModVar_mod_CarcaseConnectionRightBtm { mod_CarcaseConnectionRightBtm?: string; }
export interface IModVarNonNull_mod_CarcaseConnectionRightBtm { get mod_CarcaseConnectionRightBtm(): string; }
export interface IModVar_mod_CarcaseConnectionRightTop { mod_CarcaseConnectionRightTop?: string; }
export interface IModVarNonNull_mod_CarcaseConnectionRightTop { get mod_CarcaseConnectionRightTop(): string; }
export interface IModVar_mod_CarcaseDepth { mod_CarcaseDepth?: number; }
export interface IModVarNonNull_mod_CarcaseDepth { get mod_CarcaseDepth(): number; }
export interface IModVar_mod_CarcaseDirection { mod_CarcaseDirection?: string; }
export interface IModVarNonNull_mod_CarcaseDirection { get mod_CarcaseDirection(): string; }
export interface IModVar_mod_CarcaseDirectionInfo { mod_CarcaseDirectionInfo?: string; }
export interface IModVarNonNull_mod_CarcaseDirectionInfo { get mod_CarcaseDirectionInfo(): string; }
export interface IModVar_mod_CarcaseDistanceWall { mod_CarcaseDistanceWall?: number; }
export interface IModVarNonNull_mod_CarcaseDistanceWall { get mod_CarcaseDistanceWall(): number; }
export interface IModVar_mod_CarcaseEdgeBackColor { mod_CarcaseEdgeBackColor?: string; }
export interface IModVarNonNull_mod_CarcaseEdgeBackColor { get mod_CarcaseEdgeBackColor(): string; }
export interface IModVar_mod_CarcaseEdgeColor { mod_CarcaseEdgeColor?: string; }
export interface IModVarNonNull_mod_CarcaseEdgeColor { get mod_CarcaseEdgeColor(): string; }
export interface IModVar_mod_CarcaseEdgeFrontColor { mod_CarcaseEdgeFrontColor?: string; }
export interface IModVarNonNull_mod_CarcaseEdgeFrontColor { get mod_CarcaseEdgeFrontColor(): string; }
export interface IModVar_mod_CarcaseFrontConstruction { mod_CarcaseFrontConstruction?: string; }
export interface IModVarNonNull_mod_CarcaseFrontConstruction { get mod_CarcaseFrontConstruction(): string; get mod_CarcaseFrontConstruction_matrix(): IMatrix_mod_CarcaseFrontConstruction; }
export interface IModVar_mod_CarcaseHeight { mod_CarcaseHeight?: number; }
export interface IModVarNonNull_mod_CarcaseHeight { get mod_CarcaseHeight(): number; }
export interface IModVar_mod_CarcaseId { mod_CarcaseId?: string; }
export interface IModVarNonNull_mod_CarcaseId { get mod_CarcaseId(): string; }
export interface IModVar_mod_CarcaseMovement { mod_CarcaseMovement?: number; }
export interface IModVarNonNull_mod_CarcaseMovement { get mod_CarcaseMovement(): number; }
export interface IModVar_mod_CarcaseOutsideColor { mod_CarcaseOutsideColor?: string; }
export interface IModVarNonNull_mod_CarcaseOutsideColor { get mod_CarcaseOutsideColor(): string; get mod_CarcaseOutsideColor_matrix(): IMatrix_mod_CarcaseOutsideColor; }
export interface IModVar_mod_CarcaseOutsideProgram { mod_CarcaseOutsideProgram?: string; }
export interface IModVarNonNull_mod_CarcaseOutsideProgram { get mod_CarcaseOutsideProgram(): string; get mod_CarcaseOutsideProgram_matrix(): IMatrix_mod_CarcaseOutsideProgram; }
export interface IModVar_mod_CarcasePartConnectionBackHor { mod_CarcasePartConnectionBackHor?: string; }
export interface IModVarNonNull_mod_CarcasePartConnectionBackHor { get mod_CarcasePartConnectionBackHor(): string; }
export interface IModVar_mod_CarcasePartConnectionBackVert { mod_CarcasePartConnectionBackVert?: string; }
export interface IModVarNonNull_mod_CarcasePartConnectionBackVert { get mod_CarcasePartConnectionBackVert(): string; }
export interface IModVar_mod_CarcasePartConnectionBtmVert { mod_CarcasePartConnectionBtmVert?: string; }
export interface IModVarNonNull_mod_CarcasePartConnectionBtmVert { get mod_CarcasePartConnectionBtmVert(): string; }
export interface IModVar_mod_CarcasePartConnectionLeftHor { mod_CarcasePartConnectionLeftHor?: string; }
export interface IModVarNonNull_mod_CarcasePartConnectionLeftHor { get mod_CarcasePartConnectionLeftHor(): string; }
export interface IModVar_mod_CarcasePartConnectionRightHor { mod_CarcasePartConnectionRightHor?: string; }
export interface IModVarNonNull_mod_CarcasePartConnectionRightHor { get mod_CarcasePartConnectionRightHor(): string; }
export interface IModVar_mod_CarcasePartConnectionTopVert { mod_CarcasePartConnectionTopVert?: string; }
export interface IModVarNonNull_mod_CarcasePartConnectionTopVert { get mod_CarcasePartConnectionTopVert(): string; }
export interface IModVar_mod_CarcasePartInfo { mod_CarcasePartInfo: string[]; }
export interface IModVarNonNull_mod_CarcasePartInfo { get mod_CarcasePartInfo(): string[]; }
export interface IModVar_mod_CarcaseProgram { mod_CarcaseProgram?: string; }
export interface IModVarNonNull_mod_CarcaseProgram { get mod_CarcaseProgram(): string; get mod_CarcaseProgram_matrix(): IMatrix_mod_CarcaseProgram; }
export interface IModVar_mod_CarcaseShelfbtmConstruction { mod_CarcaseShelfbtmConstruction?: string; }
export interface IModVarNonNull_mod_CarcaseShelfbtmConstruction { get mod_CarcaseShelfbtmConstruction(): string; }
export interface IModVar_mod_CarcaseShelfbtmOversizeInsideWall { mod_CarcaseShelfbtmOversizeInsideWall?: number; }
export interface IModVarNonNull_mod_CarcaseShelfbtmOversizeInsideWall { get mod_CarcaseShelfbtmOversizeInsideWall(): number; }
export interface IModVar_mod_CarcaseShelfbtmOversizeLeft { mod_CarcaseShelfbtmOversizeLeft?: number; }
export interface IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft { get mod_CarcaseShelfbtmOversizeLeft(): number; }
export interface IModVar_mod_CarcaseShelfbtmOversizeRight { mod_CarcaseShelfbtmOversizeRight?: number; }
export interface IModVarNonNull_mod_CarcaseShelfbtmOversizeRight { get mod_CarcaseShelfbtmOversizeRight(): number; }
export interface IModVar_mod_CarcaseShelftopConstruction { mod_CarcaseShelftopConstruction?: string; }
export interface IModVarNonNull_mod_CarcaseShelftopConstruction { get mod_CarcaseShelftopConstruction(): string; }
export interface IModVar_mod_CarcaseShelftopOversizeInsideWall { mod_CarcaseShelftopOversizeInsideWall?: number; }
export interface IModVarNonNull_mod_CarcaseShelftopOversizeInsideWall { get mod_CarcaseShelftopOversizeInsideWall(): number; }
export interface IModVar_mod_CarcaseShelftopOversizeLeft { mod_CarcaseShelftopOversizeLeft?: number; }
export interface IModVarNonNull_mod_CarcaseShelftopOversizeLeft { get mod_CarcaseShelftopOversizeLeft(): number; }
export interface IModVar_mod_CarcaseShelftopOversizeRight { mod_CarcaseShelftopOversizeRight?: number; }
export interface IModVarNonNull_mod_CarcaseShelftopOversizeRight { get mod_CarcaseShelftopOversizeRight(): number; }
export interface IModVar_mod_CarcaseSidepanelleftOversizeBtm { mod_CarcaseSidepanelleftOversizeBtm?: number; }
export interface IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm { get mod_CarcaseSidepanelleftOversizeBtm(): number; }
export interface IModVar_mod_CarcaseSidepanelleftOversizeInsideWall { mod_CarcaseSidepanelleftOversizeInsideWall?: number; }
export interface IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall { get mod_CarcaseSidepanelleftOversizeInsideWall(): number; }
export interface IModVar_mod_CarcaseSidepanelleftOversizeTop { mod_CarcaseSidepanelleftOversizeTop?: number; }
export interface IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop { get mod_CarcaseSidepanelleftOversizeTop(): number; }
export interface IModVar_mod_CarcaseSidepanelrightOversizeBtm { mod_CarcaseSidepanelrightOversizeBtm?: number; }
export interface IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm { get mod_CarcaseSidepanelrightOversizeBtm(): number; }
export interface IModVar_mod_CarcaseSidepanelrightOversizeInsideWall { mod_CarcaseSidepanelrightOversizeInsideWall?: number; }
export interface IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall { get mod_CarcaseSidepanelrightOversizeInsideWall(): number; }
export interface IModVar_mod_CarcaseSidepanelrightOversizeTop { mod_CarcaseSidepanelrightOversizeTop?: number; }
export interface IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop { get mod_CarcaseSidepanelrightOversizeTop(): number; }
export interface IModVar_mod_CarcaseSpaceDimension { mod_CarcaseSpaceDimension: string[]; }
export interface IModVarNonNull_mod_CarcaseSpaceDimension { get mod_CarcaseSpaceDimension(): string[]; }
export interface IModVar_mod_CarcaseVisBack { mod_CarcaseVisBack?: boolean; }
export interface IModVarNonNull_mod_CarcaseVisBack { get mod_CarcaseVisBack(): boolean; }
export interface IModVar_mod_CarcaseVisBtm { mod_CarcaseVisBtm?: boolean; }
export interface IModVarNonNull_mod_CarcaseVisBtm { get mod_CarcaseVisBtm(): boolean; get mod_CarcaseVisBtm_matrix(): IMatrix_mod_CarcaseVisBtm; }
export interface IModVar_mod_CarcaseVisLeft { mod_CarcaseVisLeft?: boolean; }
export interface IModVarNonNull_mod_CarcaseVisLeft { get mod_CarcaseVisLeft(): boolean; get mod_CarcaseVisLeft_matrix(): IMatrix_mod_CarcaseVisLeft; }
export interface IModVar_mod_CarcaseVisRight { mod_CarcaseVisRight?: boolean; }
export interface IModVarNonNull_mod_CarcaseVisRight { get mod_CarcaseVisRight(): boolean; get mod_CarcaseVisRight_matrix(): IMatrix_mod_CarcaseVisRight; }
export interface IModVar_mod_CarcaseVisTop { mod_CarcaseVisTop?: boolean; }
export interface IModVarNonNull_mod_CarcaseVisTop { get mod_CarcaseVisTop(): boolean; get mod_CarcaseVisTop_matrix(): IMatrix_mod_CarcaseVisTop; }
export interface IModVar_mod_CarcaseWidth { mod_CarcaseWidth?: number; }
export interface IModVarNonNull_mod_CarcaseWidth { get mod_CarcaseWidth(): number; }
export interface IModVar_mod_CeilingFillerFittingPanelDepth { mod_CeilingFillerFittingPanelDepth?: number; }
export interface IModVarNonNull_mod_CeilingFillerFittingPanelDepth { get mod_CeilingFillerFittingPanelDepth(): number; }
export interface IModVar_mod_CeilingFillerFittingPanelThk { mod_CeilingFillerFittingPanelThk?: number; }
export interface IModVarNonNull_mod_CeilingFillerFittingPanelThk { get mod_CeilingFillerFittingPanelThk(): number; }
export interface IModVar_mod_CeilingFillerHeight { mod_CeilingFillerHeight?: number; }
export interface IModVarNonNull_mod_CeilingFillerHeight { get mod_CeilingFillerHeight(): number; }
export interface IModVar_mod_CeilingFillerThk { mod_CeilingFillerThk?: number; }
export interface IModVarNonNull_mod_CeilingFillerThk { get mod_CeilingFillerThk(): number; }
export interface IModVar_mod_CleatThk { mod_CleatThk?: number; }
export interface IModVarNonNull_mod_CleatThk { get mod_CleatThk(): number; }
export interface IModVar_mod_CleatWidth { mod_CleatWidth?: number; }
export interface IModVarNonNull_mod_CleatWidth { get mod_CleatWidth(): number; }
export interface IModVar_mod_Color { mod_Color?: string; }
export interface IModVarNonNull_mod_Color { get mod_Color(): string; }
export interface IModVar_mod_CornerunitDimensionLogic { mod_CornerunitDimensionLogic?: string; }
export interface IModVarNonNull_mod_CornerunitDimensionLogic { get mod_CornerunitDimensionLogic(): string; }
export interface IModVar_mod_CornerunitFrontWidth { mod_CornerunitFrontWidth?: number; }
export interface IModVarNonNull_mod_CornerunitFrontWidth { get mod_CornerunitFrontWidth(): number; }
export interface IModVar_mod_CornerunitInfo { mod_CornerunitInfo: string[]; }
export interface IModVarNonNull_mod_CornerunitInfo { get mod_CornerunitInfo(): string[]; }
export interface IModVar_mod_CornerunitStraightConstruction { mod_CornerunitStraightConstruction?: string; }
export interface IModVarNonNull_mod_CornerunitStraightConstruction { get mod_CornerunitStraightConstruction(): string; get mod_CornerunitStraightConstruction_matrix(): IMatrix_mod_CornerunitStraightConstruction; }
export interface IModVar_mod_CornerunitStraightFillerConstruction { mod_CornerunitStraightFillerConstruction?: string; }
export interface IModVarNonNull_mod_CornerunitStraightFillerConstruction { get mod_CornerunitStraightFillerConstruction(): string; get mod_CornerunitStraightFillerConstruction_matrix(): IMatrix_mod_CornerunitStraightFillerConstruction; }
export interface IModVar_mod_CountertopColor { mod_CountertopColor?: string; }
export interface IModVarNonNull_mod_CountertopColor { get mod_CountertopColor(): string; get mod_CountertopColor_matrix(): IMatrix_mod_CountertopColor; }
export interface IModVar_mod_CountertopConnectionLengthLeft { mod_CountertopConnectionLengthLeft?: number; }
export interface IModVarNonNull_mod_CountertopConnectionLengthLeft { get mod_CountertopConnectionLengthLeft(): number; }
export interface IModVar_mod_CountertopConnectionLengthRight { mod_CountertopConnectionLengthRight?: number; }
export interface IModVarNonNull_mod_CountertopConnectionLengthRight { get mod_CountertopConnectionLengthRight(): number; }
export interface IModVar_mod_CountertopConnectionOversize { mod_CountertopConnectionOversize?: number; }
export interface IModVarNonNull_mod_CountertopConnectionOversize { get mod_CountertopConnectionOversize(): number; }
export interface IModVar_mod_CountertopConnectionRadius { mod_CountertopConnectionRadius?: number; }
export interface IModVarNonNull_mod_CountertopConnectionRadius { get mod_CountertopConnectionRadius(): number; }
export interface IModVar_mod_CountertopConnectionSequence { mod_CountertopConnectionSequence?: string; }
export interface IModVarNonNull_mod_CountertopConnectionSequence { get mod_CountertopConnectionSequence(): string; }
export interface IModVar_mod_CountertopDepth { mod_CountertopDepth?: number; }
export interface IModVarNonNull_mod_CountertopDepth { get mod_CountertopDepth(): number; }
export interface IModVar_mod_CountertopEdgeBackType { mod_CountertopEdgeBackType?: string; }
export interface IModVarNonNull_mod_CountertopEdgeBackType { get mod_CountertopEdgeBackType(): string; }
export interface IModVar_mod_CountertopEdgeFrontType { mod_CountertopEdgeFrontType?: string; }
export interface IModVarNonNull_mod_CountertopEdgeFrontType { get mod_CountertopEdgeFrontType(): string; }
export interface IModVar_mod_CountertopEdgeLeftType { mod_CountertopEdgeLeftType?: string; }
export interface IModVarNonNull_mod_CountertopEdgeLeftType { get mod_CountertopEdgeLeftType(): string; }
export interface IModVar_mod_CountertopEdgeRightType { mod_CountertopEdgeRightType?: string; }
export interface IModVarNonNull_mod_CountertopEdgeRightType { get mod_CountertopEdgeRightType(): string; }
export interface IModVar_mod_CountertopId { mod_CountertopId?: string; }
export interface IModVarNonNull_mod_CountertopId { get mod_CountertopId(): string; }
export interface IModVar_mod_CountertopInfo { mod_CountertopInfo: string[]; }
export interface IModVarNonNull_mod_CountertopInfo { get mod_CountertopInfo(): string[]; }
export interface IModVar_mod_CountertopLeftEndType { mod_CountertopLeftEndType?: string; }
export interface IModVarNonNull_mod_CountertopLeftEndType { get mod_CountertopLeftEndType(): string; }
export interface IModVar_mod_CountertopOverhangFront { mod_CountertopOverhangFront?: number; }
export interface IModVarNonNull_mod_CountertopOverhangFront { get mod_CountertopOverhangFront(): number; }
export interface IModVar_mod_CountertopOverhangLeft { mod_CountertopOverhangLeft?: number; }
export interface IModVarNonNull_mod_CountertopOverhangLeft { get mod_CountertopOverhangLeft(): number; }
export interface IModVar_mod_CountertopOverhangRight { mod_CountertopOverhangRight?: number; }
export interface IModVarNonNull_mod_CountertopOverhangRight { get mod_CountertopOverhangRight(): number; }
export interface IModVar_mod_CountertopProgram { mod_CountertopProgram?: string; }
export interface IModVarNonNull_mod_CountertopProgram { get mod_CountertopProgram(): string; get mod_CountertopProgram_matrix(): IMatrix_mod_CountertopProgram; }
export interface IModVar_mod_CountertopRightEndType { mod_CountertopRightEndType?: string; }
export interface IModVarNonNull_mod_CountertopRightEndType { get mod_CountertopRightEndType(): string; }
export interface IModVar_mod_CountertopThk { mod_CountertopThk?: number; }
export interface IModVarNonNull_mod_CountertopThk { get mod_CountertopThk(): number; }
export interface IModVar_mod_CountertopWidth { mod_CountertopWidth?: number; }
export interface IModVarNonNull_mod_CountertopWidth { get mod_CountertopWidth(): number; }
export interface IModVar_mod_CreateCountertop { mod_CreateCountertop?: boolean; }
export interface IModVarNonNull_mod_CreateCountertop { get mod_CreateCountertop(): boolean; }
export interface IModVar_mod_CreateFingergrip { mod_CreateFingergrip?: boolean; }
export interface IModVarNonNull_mod_CreateFingergrip { get mod_CreateFingergrip(): boolean; }
export interface IModVar_mod_CreatePaneltop { mod_CreatePaneltop?: boolean; }
export interface IModVarNonNull_mod_CreatePaneltop { get mod_CreatePaneltop(): boolean; }
export interface IModVar_mod_CreateToekick { mod_CreateToekick?: boolean; }
export interface IModVarNonNull_mod_CreateToekick { get mod_CreateToekick(): boolean; }
export interface IModVar_mod_Depth { mod_Depth?: number; }
export interface IModVarNonNull_mod_Depth { get mod_Depth(): number; }
export interface IModVar_mod_DepthLeft { mod_DepthLeft?: number; }
export interface IModVarNonNull_mod_DepthLeft { get mod_DepthLeft(): number; }
export interface IModVar_mod_DepthRight { mod_DepthRight?: number; }
export interface IModVarNonNull_mod_DepthRight { get mod_DepthRight(): number; }
export interface IModVar_mod_Direction { mod_Direction?: string; }
export interface IModVarNonNull_mod_Direction { get mod_Direction(): string; }
export interface IModVar_mod_DishwasherId { mod_DishwasherId?: string; }
export interface IModVarNonNull_mod_DishwasherId { get mod_DishwasherId(): string; }
export interface IModVar_mod_DishwasherInfo { mod_DishwasherInfo: string[]; }
export interface IModVarNonNull_mod_DishwasherInfo { get mod_DishwasherInfo(): string[]; }
export interface IModVar_mod_DishwasherSupplier { mod_DishwasherSupplier?: string; }
export interface IModVarNonNull_mod_DishwasherSupplier { get mod_DishwasherSupplier(): string; }
export interface IModVar_mod_DoorDirection { mod_DoorDirection?: string; }
export interface IModVarNonNull_mod_DoorDirection { get mod_DoorDirection(): string; get mod_DoorDirection_matrix(): IMatrix_mod_DoorDirection; }
export interface IModVar_mod_DoorType { mod_DoorType?: string; }
export interface IModVarNonNull_mod_DoorType { get mod_DoorType(): string; get mod_DoorType_matrix(): IMatrix_mod_DoorType; }
export interface IModVar_mod_DrawerBackwallThk { mod_DrawerBackwallThk?: number; }
export interface IModVarNonNull_mod_DrawerBackwallThk { get mod_DrawerBackwallThk(): number; }
export interface IModVar_mod_DrawerBoxColor { mod_DrawerBoxColor?: string; }
export interface IModVarNonNull_mod_DrawerBoxColor { get mod_DrawerBoxColor(): string; }
export interface IModVar_mod_DrawerBoxDepthType { mod_DrawerBoxDepthType?: string; }
export interface IModVarNonNull_mod_DrawerBoxDepthType { get mod_DrawerBoxDepthType(): string; }
export interface IModVar_mod_DrawerBoxDesign { mod_DrawerBoxDesign?: string; }
export interface IModVarNonNull_mod_DrawerBoxDesign { get mod_DrawerBoxDesign(): string; get mod_DrawerBoxDesign_matrix(): IMatrix_mod_DrawerBoxDesign; }
export interface IModVar_mod_DrawerBoxHeightType { mod_DrawerBoxHeightType?: string; }
export interface IModVarNonNull_mod_DrawerBoxHeightType { get mod_DrawerBoxHeightType(): string; }
export interface IModVar_mod_DrawerBoxLogic { mod_DrawerBoxLogic?: string; }
export interface IModVarNonNull_mod_DrawerBoxLogic { get mod_DrawerBoxLogic(): string; }
export interface IModVar_mod_DrawerBoxOffsetDepth { mod_DrawerBoxOffsetDepth?: number; }
export interface IModVarNonNull_mod_DrawerBoxOffsetDepth { get mod_DrawerBoxOffsetDepth(): number; }
export interface IModVar_mod_DrawerBoxProgram { mod_DrawerBoxProgram?: string; }
export interface IModVarNonNull_mod_DrawerBoxProgram { get mod_DrawerBoxProgram(): string; }
export interface IModVar_mod_DrawerBoxWeightType { mod_DrawerBoxWeightType?: string; }
export interface IModVarNonNull_mod_DrawerBoxWeightType { get mod_DrawerBoxWeightType(): string; }
export interface IModVar_mod_DrawerDistanceDepth { mod_DrawerDistanceDepth?: number; }
export interface IModVarNonNull_mod_DrawerDistanceDepth { get mod_DrawerDistanceDepth(): number; }
export interface IModVar_mod_DrawerDistanceHeight { mod_DrawerDistanceHeight?: number; }
export interface IModVarNonNull_mod_DrawerDistanceHeight { get mod_DrawerDistanceHeight(): number; }
export interface IModVar_mod_DrawerDistanceWidth { mod_DrawerDistanceWidth?: number; }
export interface IModVarNonNull_mod_DrawerDistanceWidth { get mod_DrawerDistanceWidth(): number; }
export interface IModVar_mod_DrawerOpeningDistance { mod_DrawerOpeningDistance?: number; }
export interface IModVarNonNull_mod_DrawerOpeningDistance { get mod_DrawerOpeningDistance(): number; }
export interface IModVar_mod_DrawerShelfbtmThk { mod_DrawerShelfbtmThk?: number; }
export interface IModVarNonNull_mod_DrawerShelfbtmThk { get mod_DrawerShelfbtmThk(): number; }
export interface IModVar_mod_DrawerType { mod_DrawerType?: string; }
export interface IModVarNonNull_mod_DrawerType { get mod_DrawerType(): string; }
export interface IModVar_mod_DropZoneVisible { mod_DropZoneVisible: boolean[]; }
export interface IModVarNonNull_mod_DropZoneVisible { get mod_DropZoneVisible(): boolean[]; }
export interface IModVar_mod_EdgeBackType { mod_EdgeBackType?: string; }
export interface IModVarNonNull_mod_EdgeBackType { get mod_EdgeBackType(): string; }
export interface IModVar_mod_EdgeFrontType { mod_EdgeFrontType?: string; }
export interface IModVarNonNull_mod_EdgeFrontType { get mod_EdgeFrontType(): string; }
export interface IModVar_mod_EdgeJointType { mod_EdgeJointType?: string; }
export interface IModVarNonNull_mod_EdgeJointType { get mod_EdgeJointType(): string; }
export interface IModVar_mod_EdgeLeftType { mod_EdgeLeftType?: string; }
export interface IModVarNonNull_mod_EdgeLeftType { get mod_EdgeLeftType(): string; }
export interface IModVar_mod_EdgeRightType { mod_EdgeRightType?: string; }
export interface IModVarNonNull_mod_EdgeRightType { get mod_EdgeRightType(): string; }
export interface IModVar_mod_FillerDepth { mod_FillerDepth?: number; }
export interface IModVarNonNull_mod_FillerDepth { get mod_FillerDepth(): number; }
export interface IModVar_mod_FillerDepthLeft { mod_FillerDepthLeft?: number; }
export interface IModVarNonNull_mod_FillerDepthLeft { get mod_FillerDepthLeft(): number; }
export interface IModVar_mod_FillerDepthRight { mod_FillerDepthRight?: number; }
export interface IModVarNonNull_mod_FillerDepthRight { get mod_FillerDepthRight(): number; }
export interface IModVar_mod_FillerHardware { mod_FillerHardware?: string; }
export interface IModVarNonNull_mod_FillerHardware { get mod_FillerHardware(): string; }
export interface IModVar_mod_FillerHardwareInfo { mod_FillerHardwareInfo: string[]; }
export interface IModVarNonNull_mod_FillerHardwareInfo { get mod_FillerHardwareInfo(): string[]; }
export interface IModVar_mod_FillerType { mod_FillerType?: string; }
export interface IModVarNonNull_mod_FillerType { get mod_FillerType(): string; }
export interface IModVar_mod_FingergripBtmType { mod_FingergripBtmType?: string; }
export interface IModVarNonNull_mod_FingergripBtmType { get mod_FingergripBtmType(): string; }
export interface IModVar_mod_FingergripColor { mod_FingergripColor?: string; }
export interface IModVarNonNull_mod_FingergripColor { get mod_FingergripColor(): string; }
export interface IModVar_mod_FingergripLength { mod_FingergripLength?: number; }
export interface IModVarNonNull_mod_FingergripLength { get mod_FingergripLength(): number; }
export interface IModVar_mod_FingergripPos1 { mod_FingergripPos1?: number; }
export interface IModVarNonNull_mod_FingergripPos1 { get mod_FingergripPos1(): number; }
export interface IModVar_mod_FingergripPos2 { mod_FingergripPos2?: number; }
export interface IModVarNonNull_mod_FingergripPos2 { get mod_FingergripPos2(): number; }
export interface IModVar_mod_FingergripPos3 { mod_FingergripPos3?: number; }
export interface IModVarNonNull_mod_FingergripPos3 { get mod_FingergripPos3(): number; }
export interface IModVar_mod_FingergripPos4 { mod_FingergripPos4?: number; }
export interface IModVarNonNull_mod_FingergripPos4 { get mod_FingergripPos4(): number; }
export interface IModVar_mod_FingergripPos5 { mod_FingergripPos5?: number; }
export interface IModVarNonNull_mod_FingergripPos5 { get mod_FingergripPos5(): number; }
export interface IModVar_mod_FingergripPostype { mod_FingergripPostype?: string; }
export interface IModVarNonNull_mod_FingergripPostype { get mod_FingergripPostype(): string; }
export interface IModVar_mod_FingergripQtyMiddle { mod_FingergripQtyMiddle?: number; }
export interface IModVarNonNull_mod_FingergripQtyMiddle { get mod_FingergripQtyMiddle(): number; }
export interface IModVar_mod_FingergripTop { mod_FingergripTop?: boolean; }
export interface IModVarNonNull_mod_FingergripTop { get mod_FingergripTop(): boolean; }
export interface IModVar_mod_FingergripTopType { mod_FingergripTopType?: string; }
export interface IModVarNonNull_mod_FingergripTopType { get mod_FingergripTopType(): string; }
export interface IModVar_mod_FingergripType { mod_FingergripType?: string; }
export interface IModVarNonNull_mod_FingergripType { get mod_FingergripType(): string; get mod_FingergripType_matrix(): IMatrix_mod_FingergripType; }
export interface IModVar_mod_FittingConnectionBtmVert { mod_FittingConnectionBtmVert?: string; }
export interface IModVarNonNull_mod_FittingConnectionBtmVert { get mod_FittingConnectionBtmVert(): string; }
export interface IModVar_mod_FittingConnectionLeftBtm { mod_FittingConnectionLeftBtm?: string; }
export interface IModVarNonNull_mod_FittingConnectionLeftBtm { get mod_FittingConnectionLeftBtm(): string; }
export interface IModVar_mod_FittingConnectionLeftHor { mod_FittingConnectionLeftHor?: string; }
export interface IModVarNonNull_mod_FittingConnectionLeftHor { get mod_FittingConnectionLeftHor(): string; }
export interface IModVar_mod_FittingConnectionLeftTop { mod_FittingConnectionLeftTop?: string; }
export interface IModVarNonNull_mod_FittingConnectionLeftTop { get mod_FittingConnectionLeftTop(): string; }
export interface IModVar_mod_FittingConnectionRightBtm { mod_FittingConnectionRightBtm?: string; }
export interface IModVarNonNull_mod_FittingConnectionRightBtm { get mod_FittingConnectionRightBtm(): string; }
export interface IModVar_mod_FittingConnectionRightHor { mod_FittingConnectionRightHor?: string; }
export interface IModVarNonNull_mod_FittingConnectionRightHor { get mod_FittingConnectionRightHor(): string; }
export interface IModVar_mod_FittingConnectionRightTop { mod_FittingConnectionRightTop?: string; }
export interface IModVarNonNull_mod_FittingConnectionRightTop { get mod_FittingConnectionRightTop(): string; }
export interface IModVar_mod_FittingConnectionTopVert { mod_FittingConnectionTopVert?: string; }
export interface IModVarNonNull_mod_FittingConnectionTopVert { get mod_FittingConnectionTopVert(): string; }
export interface IModVar_mod_FlipliftFrontHeightList { mod_FlipliftFrontHeightList: number[]; }
export interface IModVarNonNull_mod_FlipliftFrontHeightList { get mod_FlipliftFrontHeightList(): number[]; }
export interface IModVar_mod_FlipliftFrontNumber { mod_FlipliftFrontNumber?: number; }
export interface IModVarNonNull_mod_FlipliftFrontNumber { get mod_FlipliftFrontNumber(): number; }
export interface IModVar_mod_FlipliftHardwareColor { mod_FlipliftHardwareColor?: string; }
export interface IModVarNonNull_mod_FlipliftHardwareColor { get mod_FlipliftHardwareColor(): string; }
export interface IModVar_mod_FlipliftHardwareType { mod_FlipliftHardwareType?: string; }
export interface IModVarNonNull_mod_FlipliftHardwareType { get mod_FlipliftHardwareType(): string; }
export interface IModVar_mod_FlipliftLogic { mod_FlipliftLogic?: string; }
export interface IModVarNonNull_mod_FlipliftLogic { get mod_FlipliftLogic(): string; }
export interface IModVar_mod_FlipliftType { mod_FlipliftType?: string; }
export interface IModVarNonNull_mod_FlipliftType { get mod_FlipliftType(): string; get mod_FlipliftType_matrix(): IMatrix_mod_FlipliftType; }
export interface IModVar_mod_FrameFillingColor { mod_FrameFillingColor?: string; }
export interface IModVarNonNull_mod_FrameFillingColor { get mod_FrameFillingColor(): string; get mod_FrameFillingColor_matrix(): IMatrix_mod_FrameFillingColor; }
export interface IModVar_mod_FrameFillingWoodColor { mod_FrameFillingWoodColor?: string; }
export interface IModVarNonNull_mod_FrameFillingWoodColor { get mod_FrameFillingWoodColor(): string; }
export interface IModVar_mod_FramePartsWidthHor { mod_FramePartsWidthHor?: number; }
export interface IModVarNonNull_mod_FramePartsWidthHor { get mod_FramePartsWidthHor(): number; }
export interface IModVar_mod_FramePartsWidthHorAutomatic { mod_FramePartsWidthHorAutomatic?: boolean; }
export interface IModVarNonNull_mod_FramePartsWidthHorAutomatic { get mod_FramePartsWidthHorAutomatic(): boolean; }
export interface IModVar_mod_FramePartsWidthVert { mod_FramePartsWidthVert?: number; }
export interface IModVarNonNull_mod_FramePartsWidthVert { get mod_FramePartsWidthVert(): number; }
export interface IModVar_mod_FramePartsWidthVertAutomatic { mod_FramePartsWidthVertAutomatic?: boolean; }
export interface IModVarNonNull_mod_FramePartsWidthVertAutomatic { get mod_FramePartsWidthVertAutomatic(): boolean; }
export interface IModVar_mod_FridgeCarcasePositionType { mod_FridgeCarcasePositionType?: string; }
export interface IModVarNonNull_mod_FridgeCarcasePositionType { get mod_FridgeCarcasePositionType(): string; }
export interface IModVar_mod_FridgeCarcaseSpaceDescriptor { mod_FridgeCarcaseSpaceDescriptor?: string; }
export interface IModVarNonNull_mod_FridgeCarcaseSpaceDescriptor { get mod_FridgeCarcaseSpaceDescriptor(): string; }
export interface IModVar_mod_FridgeFrontHeightDescriptor { mod_FridgeFrontHeightDescriptor?: string; }
export interface IModVarNonNull_mod_FridgeFrontHeightDescriptor { get mod_FridgeFrontHeightDescriptor(): string; }
export interface IModVar_mod_FridgeGraphicId { mod_FridgeGraphicId?: string; }
export interface IModVarNonNull_mod_FridgeGraphicId { get mod_FridgeGraphicId(): string; }
export interface IModVar_mod_FridgeId { mod_FridgeId?: string; }
export interface IModVarNonNull_mod_FridgeId { get mod_FridgeId(): string; }
export interface IModVar_mod_FridgeInfo { mod_FridgeInfo?: string; }
export interface IModVarNonNull_mod_FridgeInfo { get mod_FridgeInfo(): string; }
export interface IModVar_mod_FridgePositionId { mod_FridgePositionId?: string; }
export interface IModVarNonNull_mod_FridgePositionId { get mod_FridgePositionId(): string; }
export interface IModVar_mod_FridgeSupplier { mod_FridgeSupplier?: string; }
export interface IModVarNonNull_mod_FridgeSupplier { get mod_FridgeSupplier(): string; }
export interface IModVar_mod_FrontAreaInfoList { mod_FrontAreaInfoList: string[]; }
export interface IModVarNonNull_mod_FrontAreaInfoList { get mod_FrontAreaInfoList(): string[]; }
export interface IModVar_mod_FrontColor { mod_FrontColor?: string; }
export interface IModVarNonNull_mod_FrontColor { get mod_FrontColor(): string; get mod_FrontColor_matrix(): IMatrix_mod_FrontColor; }
export interface IModVar_mod_FrontDescriptor { mod_FrontDescriptor?: string; }
export interface IModVarNonNull_mod_FrontDescriptor { get mod_FrontDescriptor(): string; }
export interface IModVar_mod_FrontDesign { mod_FrontDesign?: string; }
export interface IModVarNonNull_mod_FrontDesign { get mod_FrontDesign(): string; }
export interface IModVar_mod_FrontEdgeColor { mod_FrontEdgeColor?: string; }
export interface IModVarNonNull_mod_FrontEdgeColor { get mod_FrontEdgeColor(): string; }
export interface IModVar_mod_FrontEdgeThk { mod_FrontEdgeThk?: string; }
export interface IModVarNonNull_mod_FrontEdgeThk { get mod_FrontEdgeThk(): string; }
export interface IModVar_mod_FrontFrameColor { mod_FrontFrameColor?: string; }
export interface IModVarNonNull_mod_FrontFrameColor { get mod_FrontFrameColor(): string; }
export interface IModVar_mod_FrontGapCarcase { mod_FrontGapCarcase?: number; }
export interface IModVarNonNull_mod_FrontGapCarcase { get mod_FrontGapCarcase(): number; }
export interface IModVar_mod_FrontGapHor { mod_FrontGapHor?: number; }
export interface IModVarNonNull_mod_FrontGapHor { get mod_FrontGapHor(): number; }
export interface IModVar_mod_FrontGapHorTop { mod_FrontGapHorTop?: number; }
export interface IModVarNonNull_mod_FrontGapHorTop { get mod_FrontGapHorTop(): number; }
export interface IModVar_mod_FrontGapVert { mod_FrontGapVert?: number; }
export interface IModVarNonNull_mod_FrontGapVert { get mod_FrontGapVert(): number; }
export interface IModVar_mod_FrontGlassColor { mod_FrontGlassColor?: string; }
export interface IModVarNonNull_mod_FrontGlassColor { get mod_FrontGlassColor(): string; }
export interface IModVar_mod_FrontHeight { mod_FrontHeight?: number; }
export interface IModVarNonNull_mod_FrontHeight { get mod_FrontHeight(): number; }
export interface IModVar_mod_FrontHeightSelection { mod_FrontHeightSelection?: number; }
export interface IModVarNonNull_mod_FrontHeightSelection { get mod_FrontHeightSelection(): number; }
export interface IModVar_mod_FrontId { mod_FrontId?: string; }
export interface IModVarNonNull_mod_FrontId { get mod_FrontId(): string; }
export interface IModVar_mod_FrontOverlayInfo { mod_FrontOverlayInfo?: string; }
export interface IModVarNonNull_mod_FrontOverlayInfo { get mod_FrontOverlayInfo(): string; }
export interface IModVar_mod_FrontOversizeBtm { mod_FrontOversizeBtm?: number; }
export interface IModVarNonNull_mod_FrontOversizeBtm { get mod_FrontOversizeBtm(): number; }
export interface IModVar_mod_FrontOversizeLeft { mod_FrontOversizeLeft?: number; }
export interface IModVarNonNull_mod_FrontOversizeLeft { get mod_FrontOversizeLeft(): number; }
export interface IModVar_mod_FrontOversizeRight { mod_FrontOversizeRight?: number; }
export interface IModVarNonNull_mod_FrontOversizeRight { get mod_FrontOversizeRight(): number; }
export interface IModVar_mod_FrontOversizeTop { mod_FrontOversizeTop?: number; }
export interface IModVarNonNull_mod_FrontOversizeTop { get mod_FrontOversizeTop(): number; }
export interface IModVar_mod_FrontPosStart { mod_FrontPosStart?: number; }
export interface IModVarNonNull_mod_FrontPosStart { get mod_FrontPosStart(): number; }
export interface IModVar_mod_FrontProgram { mod_FrontProgram?: string; }
export interface IModVarNonNull_mod_FrontProgram { get mod_FrontProgram(): string; get mod_FrontProgram_matrix(): IMatrix_mod_FrontProgram; }
export interface IModVar_mod_FrontQtyElements { mod_FrontQtyElements?: number; }
export interface IModVarNonNull_mod_FrontQtyElements { get mod_FrontQtyElements(): number; }
export interface IModVar_mod_FrontSplit { mod_FrontSplit?: boolean; }
export interface IModVarNonNull_mod_FrontSplit { get mod_FrontSplit(): boolean; }
export interface IModVar_mod_FrontSplitColor2 { mod_FrontSplitColor2?: string; }
export interface IModVarNonNull_mod_FrontSplitColor2 { get mod_FrontSplitColor2(): string; get mod_FrontSplitColor2_matrix(): IMatrix_mod_FrontSplitColor2; }
export interface IModVar_mod_FrontSplitColor3 { mod_FrontSplitColor3?: string; }
export interface IModVarNonNull_mod_FrontSplitColor3 { get mod_FrontSplitColor3(): string; get mod_FrontSplitColor3_matrix(): IMatrix_mod_FrontSplitColor3; }
export interface IModVar_mod_FrontSplitDescriptor { mod_FrontSplitDescriptor?: string; }
export interface IModVarNonNull_mod_FrontSplitDescriptor { get mod_FrontSplitDescriptor(): string; }
export interface IModVar_mod_FrontSplitHeight1 { mod_FrontSplitHeight1?: number; }
export interface IModVarNonNull_mod_FrontSplitHeight1 { get mod_FrontSplitHeight1(): number; }
export interface IModVar_mod_FrontSplitHeight2 { mod_FrontSplitHeight2?: number; }
export interface IModVarNonNull_mod_FrontSplitHeight2 { get mod_FrontSplitHeight2(): number; }
export interface IModVar_mod_FrontSplitHeight3 { mod_FrontSplitHeight3?: number; }
export interface IModVarNonNull_mod_FrontSplitHeight3 { get mod_FrontSplitHeight3(): number; }
export interface IModVar_mod_FrontSplitProgram2 { mod_FrontSplitProgram2?: string; }
export interface IModVarNonNull_mod_FrontSplitProgram2 { get mod_FrontSplitProgram2(): string; get mod_FrontSplitProgram2_matrix(): IMatrix_mod_FrontSplitProgram2; }
export interface IModVar_mod_FrontSplitProgram3 { mod_FrontSplitProgram3?: string; }
export interface IModVarNonNull_mod_FrontSplitProgram3 { get mod_FrontSplitProgram3(): string; get mod_FrontSplitProgram3_matrix(): IMatrix_mod_FrontSplitProgram3; }
export interface IModVar_mod_FrontSplitType1 { mod_FrontSplitType1?: string; }
export interface IModVarNonNull_mod_FrontSplitType1 { get mod_FrontSplitType1(): string; }
export interface IModVar_mod_FrontSplitType2 { mod_FrontSplitType2?: string; }
export interface IModVarNonNull_mod_FrontSplitType2 { get mod_FrontSplitType2(): string; }
export interface IModVar_mod_FrontThk { mod_FrontThk?: number; }
export interface IModVarNonNull_mod_FrontThk { get mod_FrontThk(): number; }
export interface IModVar_mod_FrontType { mod_FrontType?: string; }
export interface IModVarNonNull_mod_FrontType { get mod_FrontType(): string; }
export interface IModVar_mod_FrontWidth { mod_FrontWidth?: number; }
export interface IModVarNonNull_mod_FrontWidth { get mod_FrontWidth(): number; }
export interface IModVar_mod_FrontpanelWeightCalculations { mod_FrontpanelWeightCalculations: number[]; }
export interface IModVarNonNull_mod_FrontpanelWeightCalculations { get mod_FrontpanelWeightCalculations(): number[]; }
export interface IModVar_mod_FrontpanelWeightLogic { mod_FrontpanelWeightLogic?: string; }
export interface IModVarNonNull_mod_FrontpanelWeightLogic { get mod_FrontpanelWeightLogic(): string; }
export interface IModVar_mod_GrainLogic { mod_GrainLogic?: string; }
export interface IModVarNonNull_mod_GrainLogic { get mod_GrainLogic(): string; }
export interface IModVar_mod_GraphicId { mod_GraphicId?: string; }
export interface IModVarNonNull_mod_GraphicId { get mod_GraphicId(): string; }
export interface IModVar_mod_HandleColor { mod_HandleColor?: string; }
export interface IModVarNonNull_mod_HandleColor { get mod_HandleColor(): string; }
export interface IModVar_mod_HandleDesign { mod_HandleDesign?: string; }
export interface IModVarNonNull_mod_HandleDesign { get mod_HandleDesign(): string; get mod_HandleDesign_matrix(): IMatrix_mod_HandleDesign; }
export interface IModVar_mod_HandleDrill { mod_HandleDrill?: boolean; }
export interface IModVarNonNull_mod_HandleDrill { get mod_HandleDrill(): boolean; }
export interface IModVar_mod_HandleLength { mod_HandleLength?: number; }
export interface IModVarNonNull_mod_HandleLength { get mod_HandleLength(): number; }
export interface IModVar_mod_HandleLine { mod_HandleLine?: number; }
export interface IModVarNonNull_mod_HandleLine { get mod_HandleLine(): number; }
export interface IModVar_mod_HandleOffsetX { mod_HandleOffsetX?: number; }
export interface IModVarNonNull_mod_HandleOffsetX { get mod_HandleOffsetX(): number; }
export interface IModVar_mod_HandleOffsetY { mod_HandleOffsetY?: number; }
export interface IModVarNonNull_mod_HandleOffsetY { get mod_HandleOffsetY(): number; }
export interface IModVar_mod_HandlePosLeftMatrix { mod_HandlePosLeftMatrix?: string; }
export interface IModVarNonNull_mod_HandlePosLeftMatrix { get mod_HandlePosLeftMatrix(): string; get mod_HandlePosLeftMatrix_matrix(): IMatrix_mod_HandlePosLeftMatrix; }
export interface IModVar_mod_HandlePosLogic { mod_HandlePosLogic?: string; }
export interface IModVarNonNull_mod_HandlePosLogic { get mod_HandlePosLogic(): string; }
export interface IModVar_mod_HandlePosMatrix { mod_HandlePosMatrix?: string; }
export interface IModVarNonNull_mod_HandlePosMatrix { get mod_HandlePosMatrix(): string; get mod_HandlePosMatrix_matrix(): IMatrix_mod_HandlePosMatrix; }
export interface IModVar_mod_HandlePosRightMatrix { mod_HandlePosRightMatrix?: string; }
export interface IModVarNonNull_mod_HandlePosRightMatrix { get mod_HandlePosRightMatrix(): string; get mod_HandlePosRightMatrix_matrix(): IMatrix_mod_HandlePosRightMatrix; }
export interface IModVar_mod_HandlePosType { mod_HandlePosType?: string; }
export interface IModVarNonNull_mod_HandlePosType { get mod_HandlePosType(): string; }
export interface IModVar_mod_HandleWeightCalculations { mod_HandleWeightCalculations: number[]; }
export interface IModVarNonNull_mod_HandleWeightCalculations { get mod_HandleWeightCalculations(): number[]; }
export interface IModVar_mod_HandlestripPos { mod_HandlestripPos?: string; }
export interface IModVarNonNull_mod_HandlestripPos { get mod_HandlestripPos(): string; }
export interface IModVar_mod_HangerColor { mod_HangerColor?: string; }
export interface IModVarNonNull_mod_HangerColor { get mod_HangerColor(): string; }
export interface IModVar_mod_HangerInfo { mod_HangerInfo: string[]; }
export interface IModVarNonNull_mod_HangerInfo { get mod_HangerInfo(): string[]; }
export interface IModVar_mod_HangerOffsetPosY { mod_HangerOffsetPosY?: number; }
export interface IModVarNonNull_mod_HangerOffsetPosY { get mod_HangerOffsetPosY(): number; }
export interface IModVar_mod_HangerPosX { mod_HangerPosX?: string; }
export interface IModVarNonNull_mod_HangerPosX { get mod_HangerPosX(): string; get mod_HangerPosX_matrix(): IMatrix_mod_HangerPosX; }
export interface IModVar_mod_HangerPosY { mod_HangerPosY?: string; }
export interface IModVarNonNull_mod_HangerPosY { get mod_HangerPosY(): string; }
export interface IModVar_mod_HangerType { mod_HangerType?: string; }
export interface IModVarNonNull_mod_HangerType { get mod_HangerType(): string; }
export interface IModVar_mod_HardwareColor { mod_HardwareColor?: string; }
export interface IModVarNonNull_mod_HardwareColor { get mod_HardwareColor(): string; }
export interface IModVar_mod_HardwareId { mod_HardwareId?: string; }
export interface IModVarNonNull_mod_HardwareId { get mod_HardwareId(): string; }
export interface IModVar_mod_HardwareTypeList { mod_HardwareTypeList: string[]; }
export interface IModVarNonNull_mod_HardwareTypeList { get mod_HardwareTypeList(): string[]; }
export interface IModVar_mod_Height { mod_Height?: number; }
export interface IModVarNonNull_mod_Height { get mod_Height(): number; }
export interface IModVar_mod_HeightLeft { mod_HeightLeft?: number; }
export interface IModVarNonNull_mod_HeightLeft { get mod_HeightLeft(): number; }
export interface IModVar_mod_HeightPosInsertion { mod_HeightPosInsertion?: number; }
export interface IModVarNonNull_mod_HeightPosInsertion { get mod_HeightPosInsertion(): number; }
export interface IModVar_mod_HeightRight { mod_HeightRight?: number; }
export interface IModVarNonNull_mod_HeightRight { get mod_HeightRight(): number; }
export interface IModVar_mod_HingeColor { mod_HingeColor?: string; }
export interface IModVarNonNull_mod_HingeColor { get mod_HingeColor(): string; }
export interface IModVar_mod_HingeInfo { mod_HingeInfo: string[]; }
export interface IModVarNonNull_mod_HingeInfo { get mod_HingeInfo(): string[]; }
export interface IModVar_mod_HingeLogic { mod_HingeLogic?: string; }
export interface IModVarNonNull_mod_HingeLogic { get mod_HingeLogic(): string; get mod_HingeLogic_matrix(): IMatrix_mod_HingeLogic; }
export interface IModVar_mod_HingePos1 { mod_HingePos1?: number; }
export interface IModVarNonNull_mod_HingePos1 { get mod_HingePos1(): number; }
export interface IModVar_mod_HingePos2 { mod_HingePos2?: number; }
export interface IModVarNonNull_mod_HingePos2 { get mod_HingePos2(): number; }
export interface IModVar_mod_HingePos3 { mod_HingePos3?: number; }
export interface IModVarNonNull_mod_HingePos3 { get mod_HingePos3(): number; }
export interface IModVar_mod_HingePos4 { mod_HingePos4?: number; }
export interface IModVarNonNull_mod_HingePos4 { get mod_HingePos4(): number; }
export interface IModVar_mod_HingePos5 { mod_HingePos5?: number; }
export interface IModVarNonNull_mod_HingePos5 { get mod_HingePos5(): number; }
export interface IModVar_mod_HingePos6 { mod_HingePos6?: number; }
export interface IModVarNonNull_mod_HingePos6 { get mod_HingePos6(): number; }
export interface IModVar_mod_HingeType { mod_HingeType?: string; }
export interface IModVarNonNull_mod_HingeType { get mod_HingeType(): string; get mod_HingeType_matrix(): IMatrix_mod_HingeType; }
export interface IModVar_mod_HobConstructionId { mod_HobConstructionId?: string; }
export interface IModVarNonNull_mod_HobConstructionId { get mod_HobConstructionId(): string; }
export interface IModVar_mod_HobGraphicId { mod_HobGraphicId?: string; }
export interface IModVarNonNull_mod_HobGraphicId { get mod_HobGraphicId(): string; }
export interface IModVar_mod_HobHeightBlockedSpace { mod_HobHeightBlockedSpace?: number; }
export interface IModVarNonNull_mod_HobHeightBlockedSpace { get mod_HobHeightBlockedSpace(): number; }
export interface IModVar_mod_HobId { mod_HobId?: string; }
export interface IModVarNonNull_mod_HobId { get mod_HobId(): string; }
export interface IModVar_mod_HobInfo { mod_HobInfo: number[]; }
export interface IModVarNonNull_mod_HobInfo { get mod_HobInfo(): number[]; }
export interface IModVar_mod_HobMoveDepth { mod_HobMoveDepth?: number; }
export interface IModVarNonNull_mod_HobMoveDepth { get mod_HobMoveDepth(): number; }
export interface IModVar_mod_HobMoveWidth { mod_HobMoveWidth?: number; }
export interface IModVarNonNull_mod_HobMoveWidth { get mod_HobMoveWidth(): number; }
export interface IModVar_mod_HobSupplier { mod_HobSupplier?: string; }
export interface IModVarNonNull_mod_HobSupplier { get mod_HobSupplier(): string; }
export interface IModVar_mod_HoodId { mod_HoodId?: string; }
export interface IModVarNonNull_mod_HoodId { get mod_HoodId(): string; }
export interface IModVar_mod_HoodSupplier { mod_HoodSupplier?: string; }
export interface IModVarNonNull_mod_HoodSupplier { get mod_HoodSupplier(): string; }
export interface IModVar_mod_Information { mod_Information?: string; }
export interface IModVarNonNull_mod_Information { get mod_Information(): string; }
export interface IModVar_mod_InformationList { mod_InformationList: string[]; }
export interface IModVarNonNull_mod_InformationList { get mod_InformationList(): string[]; }
export interface IModVar_mod_InteriorEquipmentHinge { mod_InteriorEquipmentHinge?: string; }
export interface IModVarNonNull_mod_InteriorEquipmentHinge { get mod_InteriorEquipmentHinge(): string; }
export interface IModVar_mod_InteriorEquipmentLogic { mod_InteriorEquipmentLogic?: string; }
export interface IModVarNonNull_mod_InteriorEquipmentLogic { get mod_InteriorEquipmentLogic(): string; }
export interface IModVar_mod_IslandBackwallOverdimension { mod_IslandBackwallOverdimension?: number; }
export interface IModVarNonNull_mod_IslandBackwallOverdimension { get mod_IslandBackwallOverdimension(): number; }
export interface IModVar_mod_IslandBackwallOverhangFront { mod_IslandBackwallOverhangFront?: number; }
export interface IModVarNonNull_mod_IslandBackwallOverhangFront { get mod_IslandBackwallOverhangFront(): number; }
export interface IModVar_mod_IslandBackwallWidth { mod_IslandBackwallWidth?: number; }
export interface IModVarNonNull_mod_IslandBackwallWidth { get mod_IslandBackwallWidth(): number; }
export interface IModVar_mod_LastFrontHeight { mod_LastFrontHeight?: number; }
export interface IModVarNonNull_mod_LastFrontHeight { get mod_LastFrontHeight(): number; }
export interface IModVar_mod_LastFrontName { mod_LastFrontName?: string; }
export interface IModVarNonNull_mod_LastFrontName { get mod_LastFrontName(): string; }
export interface IModVar_mod_LegInsertion { mod_LegInsertion?: boolean; }
export interface IModVarNonNull_mod_LegInsertion { get mod_LegInsertion(): boolean; }
export interface IModVar_mod_LengthList { mod_LengthList: number[]; }
export interface IModVarNonNull_mod_LengthList { get mod_LengthList(): number[]; }
export interface IModVar_mod_LightPart { mod_LightPart?: string; }
export interface IModVarNonNull_mod_LightPart { get mod_LightPart(): string; }
export interface IModVar_mod_LightPosX { mod_LightPosX?: string; }
export interface IModVarNonNull_mod_LightPosX { get mod_LightPosX(): string; get mod_LightPosX_matrix(): IMatrix_mod_LightPosX; }
export interface IModVar_mod_LightPosX1 { mod_LightPosX1?: number; }
export interface IModVarNonNull_mod_LightPosX1 { get mod_LightPosX1(): number; }
export interface IModVar_mod_LightPosX2 { mod_LightPosX2?: number; }
export interface IModVarNonNull_mod_LightPosX2 { get mod_LightPosX2(): number; }
export interface IModVar_mod_LightPosX3 { mod_LightPosX3?: number; }
export interface IModVarNonNull_mod_LightPosX3 { get mod_LightPosX3(): number; }
export interface IModVar_mod_LightPosX4 { mod_LightPosX4?: number; }
export interface IModVarNonNull_mod_LightPosX4 { get mod_LightPosX4(): number; }
export interface IModVar_mod_LightPosX5 { mod_LightPosX5?: number; }
export interface IModVarNonNull_mod_LightPosX5 { get mod_LightPosX5(): number; }
export interface IModVar_mod_LightPosY { mod_LightPosY?: number; }
export interface IModVarNonNull_mod_LightPosY { get mod_LightPosY(): number; }
export interface IModVar_mod_LightSystem { mod_LightSystem?: string; }
export interface IModVarNonNull_mod_LightSystem { get mod_LightSystem(): string; get mod_LightSystem_matrix(): IMatrix_mod_LightSystem; }
export interface IModVar_mod_MachiningDepth { mod_MachiningDepth: number[]; }
export interface IModVarNonNull_mod_MachiningDepth { get mod_MachiningDepth(): number[]; }
export interface IModVar_mod_MachiningDiameter { mod_MachiningDiameter: number[]; }
export interface IModVarNonNull_mod_MachiningDiameter { get mod_MachiningDiameter(): number[]; }
export interface IModVar_mod_MachiningPosX { mod_MachiningPosX: number[]; }
export interface IModVarNonNull_mod_MachiningPosX { get mod_MachiningPosX(): number[]; }
export interface IModVar_mod_MachiningPosY { mod_MachiningPosY: number[]; }
export interface IModVarNonNull_mod_MachiningPosY { get mod_MachiningPosY(): number[]; }
export interface IModVar_mod_MachiningReferenceX { mod_MachiningReferenceX: string[]; }
export interface IModVarNonNull_mod_MachiningReferenceX { get mod_MachiningReferenceX(): string[]; }
export interface IModVar_mod_MachiningReferenceY { mod_MachiningReferenceY: string[]; }
export interface IModVarNonNull_mod_MachiningReferenceY { get mod_MachiningReferenceY(): string[]; }
export interface IModVar_mod_MachiningType { mod_MachiningType: string[]; }
export interface IModVarNonNull_mod_MachiningType { get mod_MachiningType(): string[]; }
export interface IModVar_mod_MixerId { mod_MixerId?: string; }
export interface IModVarNonNull_mod_MixerId { get mod_MixerId(): string; }
export interface IModVar_mod_MixerSupplier { mod_MixerSupplier?: string; }
export interface IModVarNonNull_mod_MixerSupplier { get mod_MixerSupplier(): string; }
export interface IModVar_mod_Model { mod_Model?: string; }
export interface IModVarNonNull_mod_Model { get mod_Model(): string; }
export interface IModVar_mod_Model3DGroupName { mod_Model3DGroupName?: string; }
export interface IModVarNonNull_mod_Model3DGroupName { get mod_Model3DGroupName(): string; }
export interface IModVar_mod_ModuleName { mod_ModuleName?: string; }
export interface IModVarNonNull_mod_ModuleName { get mod_ModuleName(): string; }
export interface IModVar_mod_MountingPlateType { mod_MountingPlateType?: string; }
export interface IModVarNonNull_mod_MountingPlateType { get mod_MountingPlateType(): string; }
export interface IModVar_mod_OpeningAngle { mod_OpeningAngle: string[]; }
export interface IModVarNonNull_mod_OpeningAngle { get mod_OpeningAngle(): string[]; }
export interface IModVar_mod_OpeningType { mod_OpeningType?: string; }
export interface IModVarNonNull_mod_OpeningType { get mod_OpeningType(): string; }
export interface IModVar_mod_Originpos { mod_Originpos: number[]; }
export interface IModVarNonNull_mod_Originpos { get mod_Originpos(): number[]; }
export interface IModVar_mod_OvenGap1 { mod_OvenGap1?: number; }
export interface IModVarNonNull_mod_OvenGap1 { get mod_OvenGap1(): number; }
export interface IModVar_mod_OvenGap2 { mod_OvenGap2?: number; }
export interface IModVarNonNull_mod_OvenGap2 { get mod_OvenGap2(): number; }
export interface IModVar_mod_OvenGap3 { mod_OvenGap3?: number; }
export interface IModVarNonNull_mod_OvenGap3 { get mod_OvenGap3(): number; }
export interface IModVar_mod_OvenGap4 { mod_OvenGap4?: number; }
export interface IModVarNonNull_mod_OvenGap4 { get mod_OvenGap4(): number; }
export interface IModVar_mod_OvenId { mod_OvenId?: string; }
export interface IModVarNonNull_mod_OvenId { get mod_OvenId(): string; }
export interface IModVar_mod_OvenId1 { mod_OvenId1?: string; }
export interface IModVarNonNull_mod_OvenId1 { get mod_OvenId1(): string; }
export interface IModVar_mod_OvenId2 { mod_OvenId2?: string; }
export interface IModVarNonNull_mod_OvenId2 { get mod_OvenId2(): string; }
export interface IModVar_mod_OvenId3 { mod_OvenId3?: string; }
export interface IModVarNonNull_mod_OvenId3 { get mod_OvenId3(): string; }
export interface IModVar_mod_OvenShelffixedOverhangTop { mod_OvenShelffixedOverhangTop?: number; }
export interface IModVarNonNull_mod_OvenShelffixedOverhangTop { get mod_OvenShelffixedOverhangTop(): number; }
export interface IModVar_mod_OvenSupplier1 { mod_OvenSupplier1?: string; }
export interface IModVarNonNull_mod_OvenSupplier1 { get mod_OvenSupplier1(): string; }
export interface IModVar_mod_OvenSupplier2 { mod_OvenSupplier2?: string; }
export interface IModVarNonNull_mod_OvenSupplier2 { get mod_OvenSupplier2(): string; }
export interface IModVar_mod_OvenSupplier3 { mod_OvenSupplier3?: string; }
export interface IModVarNonNull_mod_OvenSupplier3 { get mod_OvenSupplier3(): string; }
export interface IModVar_mod_PanelId { mod_PanelId?: string; }
export interface IModVarNonNull_mod_PanelId { get mod_PanelId(): string; }
export interface IModVar_mod_PanelWoodFrameFillingType { mod_PanelWoodFrameFillingType?: string; }
export interface IModVarNonNull_mod_PanelWoodFrameFillingType { get mod_PanelWoodFrameFillingType(): string; get mod_PanelWoodFrameFillingType_matrix(): IMatrix_mod_PanelWoodFrameFillingType; }
export interface IModVar_mod_PanelWoodFrameType { mod_PanelWoodFrameType?: string; }
export interface IModVarNonNull_mod_PanelWoodFrameType { get mod_PanelWoodFrameType(): string; }
export interface IModVar_mod_PanelblindThk { mod_PanelblindThk?: number; }
export interface IModVarNonNull_mod_PanelblindThk { get mod_PanelblindThk(): number; }
export interface IModVar_mod_PaneltopColor { mod_PaneltopColor?: string; }
export interface IModVarNonNull_mod_PaneltopColor { get mod_PaneltopColor(): string; get mod_PaneltopColor_matrix(): IMatrix_mod_PaneltopColor; }
export interface IModVar_mod_PaneltopConstruction { mod_PaneltopConstruction?: string; }
export interface IModVarNonNull_mod_PaneltopConstruction { get mod_PaneltopConstruction(): string; }
export interface IModVar_mod_PaneltopEdgeBackColor { mod_PaneltopEdgeBackColor?: string; }
export interface IModVarNonNull_mod_PaneltopEdgeBackColor { get mod_PaneltopEdgeBackColor(): string; }
export interface IModVar_mod_PaneltopEdgeFrontColor { mod_PaneltopEdgeFrontColor?: string; }
export interface IModVarNonNull_mod_PaneltopEdgeFrontColor { get mod_PaneltopEdgeFrontColor(): string; }
export interface IModVar_mod_PaneltopEdgeLeftColor { mod_PaneltopEdgeLeftColor?: string; }
export interface IModVarNonNull_mod_PaneltopEdgeLeftColor { get mod_PaneltopEdgeLeftColor(): string; }
export interface IModVar_mod_PaneltopEdgeRightColor { mod_PaneltopEdgeRightColor?: string; }
export interface IModVarNonNull_mod_PaneltopEdgeRightColor { get mod_PaneltopEdgeRightColor(): string; }
export interface IModVar_mod_PaneltopEdgeVisBack { mod_PaneltopEdgeVisBack?: boolean; }
export interface IModVarNonNull_mod_PaneltopEdgeVisBack { get mod_PaneltopEdgeVisBack(): boolean; }
export interface IModVar_mod_PaneltopEdgeVisFront { mod_PaneltopEdgeVisFront?: boolean; }
export interface IModVarNonNull_mod_PaneltopEdgeVisFront { get mod_PaneltopEdgeVisFront(): boolean; }
export interface IModVar_mod_PaneltopEdgeVisLeft { mod_PaneltopEdgeVisLeft?: boolean; }
export interface IModVarNonNull_mod_PaneltopEdgeVisLeft { get mod_PaneltopEdgeVisLeft(): boolean; }
export interface IModVar_mod_PaneltopEdgeVisRight { mod_PaneltopEdgeVisRight?: boolean; }
export interface IModVarNonNull_mod_PaneltopEdgeVisRight { get mod_PaneltopEdgeVisRight(): boolean; }
export interface IModVar_mod_PaneltopId { mod_PaneltopId?: string; }
export interface IModVarNonNull_mod_PaneltopId { get mod_PaneltopId(): string; }
export interface IModVar_mod_PaneltopOverhangFront { mod_PaneltopOverhangFront?: number; }
export interface IModVarNonNull_mod_PaneltopOverhangFront { get mod_PaneltopOverhangFront(): number; }
export interface IModVar_mod_PaneltopOversizeBack { mod_PaneltopOversizeBack?: number; }
export interface IModVarNonNull_mod_PaneltopOversizeBack { get mod_PaneltopOversizeBack(): number; }
export interface IModVar_mod_PaneltopProgram { mod_PaneltopProgram?: string; }
export interface IModVarNonNull_mod_PaneltopProgram { get mod_PaneltopProgram(): string; get mod_PaneltopProgram_matrix(): IMatrix_mod_PaneltopProgram; }
export interface IModVar_mod_PaneltopThk { mod_PaneltopThk?: number; }
export interface IModVarNonNull_mod_PaneltopThk { get mod_PaneltopThk(): number; }
export interface IModVar_mod_ParentName { mod_ParentName?: string; }
export interface IModVarNonNull_mod_ParentName { get mod_ParentName(): string; }
export interface IModVar_mod_PartInfo { mod_PartInfo?: string; }
export interface IModVarNonNull_mod_PartInfo { get mod_PartInfo(): string; }
export interface IModVar_mod_PartName { mod_PartName?: string; }
export interface IModVarNonNull_mod_PartName { get mod_PartName(): string; }
export interface IModVar_mod_PartgroupDrawerWeight { mod_PartgroupDrawerWeight?: number; }
export interface IModVarNonNull_mod_PartgroupDrawerWeight { get mod_PartgroupDrawerWeight(): number; }
export interface IModVar_mod_PlinthAreaDesign { mod_PlinthAreaDesign?: string; }
export interface IModVarNonNull_mod_PlinthAreaDesign { get mod_PlinthAreaDesign(): string; get mod_PlinthAreaDesign_matrix(): IMatrix_mod_PlinthAreaDesign; }
export interface IModVar_mod_PlinthAreaElementColor { mod_PlinthAreaElementColor?: string; }
export interface IModVarNonNull_mod_PlinthAreaElementColor { get mod_PlinthAreaElementColor(): string; }
export interface IModVar_mod_PlinthAreaExtraItem { mod_PlinthAreaExtraItem?: string; }
export interface IModVarNonNull_mod_PlinthAreaExtraItem { get mod_PlinthAreaExtraItem(): string; get mod_PlinthAreaExtraItem_matrix(): IMatrix_mod_PlinthAreaExtraItem; }
export interface IModVar_mod_PlinthAreaHeight { mod_PlinthAreaHeight?: number; }
export interface IModVarNonNull_mod_PlinthAreaHeight { get mod_PlinthAreaHeight(): number; }
export interface IModVar_mod_PlinthAreaPosBackMatrix { mod_PlinthAreaPosBackMatrix?: string; }
export interface IModVarNonNull_mod_PlinthAreaPosBackMatrix { get mod_PlinthAreaPosBackMatrix(): string; }
export interface IModVar_mod_PlinthAreaPosFrontMatrix { mod_PlinthAreaPosFrontMatrix?: string; }
export interface IModVarNonNull_mod_PlinthAreaPosFrontMatrix { get mod_PlinthAreaPosFrontMatrix(): string; }
export interface IModVar_mod_PlinthAreaPosLeftMatrix { mod_PlinthAreaPosLeftMatrix?: string; }
export interface IModVarNonNull_mod_PlinthAreaPosLeftMatrix { get mod_PlinthAreaPosLeftMatrix(): string; }
export interface IModVar_mod_PlinthAreaPosLogic { mod_PlinthAreaPosLogic?: string; }
export interface IModVarNonNull_mod_PlinthAreaPosLogic { get mod_PlinthAreaPosLogic(): string; }
export interface IModVar_mod_PlinthAreaPosRightMatrix { mod_PlinthAreaPosRightMatrix?: string; }
export interface IModVarNonNull_mod_PlinthAreaPosRightMatrix { get mod_PlinthAreaPosRightMatrix(): string; }
export interface IModVar_mod_PlinthAreaPositionInfo { mod_PlinthAreaPositionInfo: string[]; }
export interface IModVarNonNull_mod_PlinthAreaPositionInfo { get mod_PlinthAreaPositionInfo(): string[]; }
export interface IModVar_mod_PlinthAreaVisLeft { mod_PlinthAreaVisLeft?: boolean; }
export interface IModVarNonNull_mod_PlinthAreaVisLeft { get mod_PlinthAreaVisLeft(): boolean; }
export interface IModVar_mod_PlinthAreaVisRight { mod_PlinthAreaVisRight?: boolean; }
export interface IModVarNonNull_mod_PlinthAreaVisRight { get mod_PlinthAreaVisRight(): boolean; }
export interface IModVar_mod_ProcessingId { mod_ProcessingId?: string; }
export interface IModVarNonNull_mod_ProcessingId { get mod_ProcessingId(): string; }
export interface IModVar_mod_ProcessingLibrary { mod_ProcessingLibrary?: string; }
export interface IModVarNonNull_mod_ProcessingLibrary { get mod_ProcessingLibrary(): string; }
export interface IModVar_mod_Program { mod_Program?: string; }
export interface IModVarNonNull_mod_Program { get mod_Program(): string; get mod_Program_matrix(): IMatrix_mod_Program; }
export interface IModVar_mod_PullOutDesign { mod_PullOutDesign?: string; }
export interface IModVarNonNull_mod_PullOutDesign { get mod_PullOutDesign(): string; }
export interface IModVar_mod_PullOutType { mod_PullOutType?: string; }
export interface IModVarNonNull_mod_PullOutType { get mod_PullOutType(): string; get mod_PullOutType_matrix(): IMatrix_mod_PullOutType; }
export interface IModVar_mod_PushtoopenColor { mod_PushtoopenColor?: string; }
export interface IModVarNonNull_mod_PushtoopenColor { get mod_PushtoopenColor(): string; }
export interface IModVar_mod_PushtoopenInfo { mod_PushtoopenInfo: string[]; }
export interface IModVarNonNull_mod_PushtoopenInfo { get mod_PushtoopenInfo(): string[]; }
export interface IModVar_mod_PushtoopenLine { mod_PushtoopenLine?: number; }
export interface IModVarNonNull_mod_PushtoopenLine { get mod_PushtoopenLine(): number; }
export interface IModVar_mod_PushtoopenOffset { mod_PushtoopenOffset?: number; }
export interface IModVarNonNull_mod_PushtoopenOffset { get mod_PushtoopenOffset(): number; }
export interface IModVar_mod_PushtoopenPosition { mod_PushtoopenPosition?: string; }
export interface IModVarNonNull_mod_PushtoopenPosition { get mod_PushtoopenPosition(): string; }
export interface IModVar_mod_PushtoopenType { mod_PushtoopenType?: string; }
export interface IModVarNonNull_mod_PushtoopenType { get mod_PushtoopenType(): string; }
export interface IModVar_mod_RackAreaManualOffsetCarcase { mod_RackAreaManualOffsetCarcase?: number; }
export interface IModVarNonNull_mod_RackAreaManualOffsetCarcase { get mod_RackAreaManualOffsetCarcase(): number; }
export interface IModVar_mod_RackAreaOversizeCarcaseType { mod_RackAreaOversizeCarcaseType?: string; }
export interface IModVarNonNull_mod_RackAreaOversizeCarcaseType { get mod_RackAreaOversizeCarcaseType(): string; }
export interface IModVar_mod_RackAreaShelftopConstruction { mod_RackAreaShelftopConstruction?: string; }
export interface IModVarNonNull_mod_RackAreaShelftopConstruction { get mod_RackAreaShelftopConstruction(): string; }
export interface IModVar_mod_RackAreaType { mod_RackAreaType?: string; }
export interface IModVarNonNull_mod_RackAreaType { get mod_RackAreaType(): string; }
export interface IModVar_mod_RailhortopbackThk { mod_RailhortopbackThk?: number; }
export interface IModVarNonNull_mod_RailhortopbackThk { get mod_RailhortopbackThk(): number; }
export interface IModVar_mod_RailhortopfrontThk { mod_RailhortopfrontThk?: number; }
export interface IModVarNonNull_mod_RailhortopfrontThk { get mod_RailhortopfrontThk(): number; }
export interface IModVar_mod_RailverttopbackThk { mod_RailverttopbackThk?: number; }
export interface IModVarNonNull_mod_RailverttopbackThk { get mod_RailverttopbackThk(): number; }
export interface IModVar_mod_RailverttopfrontThk { mod_RailverttopfrontThk?: number; }
export interface IModVarNonNull_mod_RailverttopfrontThk { get mod_RailverttopfrontThk(): number; }
export interface IModVar_mod_Rotation { mod_Rotation?: number; }
export interface IModVarNonNull_mod_Rotation { get mod_Rotation(): number; }
export interface IModVar_mod_ShelfadjBackwallDrillDescriptor { mod_ShelfadjBackwallDrillDescriptor?: string; }
export interface IModVarNonNull_mod_ShelfadjBackwallDrillDescriptor { get mod_ShelfadjBackwallDrillDescriptor(): string; }
export interface IModVar_mod_ShelfadjBackwallProcessingId { mod_ShelfadjBackwallProcessingId?: string; }
export interface IModVarNonNull_mod_ShelfadjBackwallProcessingId { get mod_ShelfadjBackwallProcessingId(): string; }
export interface IModVar_mod_ShelfadjColor { mod_ShelfadjColor?: string; }
export interface IModVarNonNull_mod_ShelfadjColor { get mod_ShelfadjColor(): string; get mod_ShelfadjColor_matrix(): IMatrix_mod_ShelfadjColor; }
export interface IModVar_mod_ShelfadjDescriptor { mod_ShelfadjDescriptor?: string; }
export interface IModVarNonNull_mod_ShelfadjDescriptor { get mod_ShelfadjDescriptor(): string; }
export interface IModVar_mod_ShelfadjDesign { mod_ShelfadjDesign?: string; }
export interface IModVarNonNull_mod_ShelfadjDesign { get mod_ShelfadjDesign(): string; get mod_ShelfadjDesign_matrix(): IMatrix_mod_ShelfadjDesign; }
export interface IModVar_mod_ShelfadjDrillDistance { mod_ShelfadjDrillDistance?: number; }
export interface IModVarNonNull_mod_ShelfadjDrillDistance { get mod_ShelfadjDrillDistance(): number; }
export interface IModVar_mod_ShelfadjDrillType { mod_ShelfadjDrillType?: string; }
export interface IModVarNonNull_mod_ShelfadjDrillType { get mod_ShelfadjDrillType(): string; get mod_ShelfadjDrillType_matrix(): IMatrix_mod_ShelfadjDrillType; }
export interface IModVar_mod_ShelfadjDrillinglineOffsetBtm { mod_ShelfadjDrillinglineOffsetBtm?: number; }
export interface IModVarNonNull_mod_ShelfadjDrillinglineOffsetBtm { get mod_ShelfadjDrillinglineOffsetBtm(): number; }
export interface IModVar_mod_ShelfadjDrillinglineOffsetTop { mod_ShelfadjDrillinglineOffsetTop?: number; }
export interface IModVarNonNull_mod_ShelfadjDrillinglineOffsetTop { get mod_ShelfadjDrillinglineOffsetTop(): number; }
export interface IModVar_mod_ShelfadjGlassColor { mod_ShelfadjGlassColor?: string; }
export interface IModVarNonNull_mod_ShelfadjGlassColor { get mod_ShelfadjGlassColor(): string; }
export interface IModVar_mod_ShelfadjOffsetBack { mod_ShelfadjOffsetBack?: number; }
export interface IModVarNonNull_mod_ShelfadjOffsetBack { get mod_ShelfadjOffsetBack(): number; }
export interface IModVar_mod_ShelfadjOffsetFront { mod_ShelfadjOffsetFront?: number; }
export interface IModVarNonNull_mod_ShelfadjOffsetFront { get mod_ShelfadjOffsetFront(): number; }
export interface IModVar_mod_ShelfadjPartParentName { mod_ShelfadjPartParentName?: string; }
export interface IModVarNonNull_mod_ShelfadjPartParentName { get mod_ShelfadjPartParentName(): string; }
export interface IModVar_mod_ShelfadjPartParentType { mod_ShelfadjPartParentType?: string; }
export interface IModVarNonNull_mod_ShelfadjPartParentType { get mod_ShelfadjPartParentType(): string; }
export interface IModVar_mod_ShelfadjPos1 { mod_ShelfadjPos1?: number; }
export interface IModVarNonNull_mod_ShelfadjPos1 { get mod_ShelfadjPos1(): number; }
export interface IModVar_mod_ShelfadjPos2 { mod_ShelfadjPos2?: number; }
export interface IModVarNonNull_mod_ShelfadjPos2 { get mod_ShelfadjPos2(): number; }
export interface IModVar_mod_ShelfadjPos3 { mod_ShelfadjPos3?: number; }
export interface IModVarNonNull_mod_ShelfadjPos3 { get mod_ShelfadjPos3(): number; }
export interface IModVar_mod_ShelfadjPos4 { mod_ShelfadjPos4?: number; }
export interface IModVarNonNull_mod_ShelfadjPos4 { get mod_ShelfadjPos4(): number; }
export interface IModVar_mod_ShelfadjPos5 { mod_ShelfadjPos5?: number; }
export interface IModVarNonNull_mod_ShelfadjPos5 { get mod_ShelfadjPos5(): number; }
export interface IModVar_mod_ShelfadjPos6 { mod_ShelfadjPos6?: number; }
export interface IModVarNonNull_mod_ShelfadjPos6 { get mod_ShelfadjPos6(): number; }
export interface IModVar_mod_ShelfadjPos7 { mod_ShelfadjPos7?: number; }
export interface IModVarNonNull_mod_ShelfadjPos7 { get mod_ShelfadjPos7(): number; }
export interface IModVar_mod_ShelfadjQty { mod_ShelfadjQty?: number; }
export interface IModVarNonNull_mod_ShelfadjQty { get mod_ShelfadjQty(): number; }
export interface IModVar_mod_ShelfadjSidepanelDrillDescriptor { mod_ShelfadjSidepanelDrillDescriptor?: string; }
export interface IModVarNonNull_mod_ShelfadjSidepanelDrillDescriptor { get mod_ShelfadjSidepanelDrillDescriptor(): string; }
export interface IModVar_mod_ShelfadjSidepanelProcessingBackId { mod_ShelfadjSidepanelProcessingBackId?: string; }
export interface IModVarNonNull_mod_ShelfadjSidepanelProcessingBackId { get mod_ShelfadjSidepanelProcessingBackId(): string; }
export interface IModVar_mod_ShelfadjSidepanelProcessingFrontId { mod_ShelfadjSidepanelProcessingFrontId?: string; }
export interface IModVarNonNull_mod_ShelfadjSidepanelProcessingFrontId { get mod_ShelfadjSidepanelProcessingFrontId(): string; }
export interface IModVar_mod_ShelfadjSidepanelProcessingMiddleId { mod_ShelfadjSidepanelProcessingMiddleId?: string; }
export interface IModVarNonNull_mod_ShelfadjSidepanelProcessingMiddleId { get mod_ShelfadjSidepanelProcessingMiddleId(): string; }
export interface IModVar_mod_ShelfadjThk { mod_ShelfadjThk?: number; }
export interface IModVarNonNull_mod_ShelfadjThk { get mod_ShelfadjThk(): number; }
export interface IModVar_mod_ShelfadjVertDividerProcessingId { mod_ShelfadjVertDividerProcessingId?: string; }
export interface IModVarNonNull_mod_ShelfadjVertDividerProcessingId { get mod_ShelfadjVertDividerProcessingId(): string; }
export interface IModVar_mod_ShelfadjVertdividerDrillDescriptor { mod_ShelfadjVertdividerDrillDescriptor?: string; }
export interface IModVarNonNull_mod_ShelfadjVertdividerDrillDescriptor { get mod_ShelfadjVertdividerDrillDescriptor(): string; }
export interface IModVar_mod_ShelfadjWoodColor { mod_ShelfadjWoodColor?: string; }
export interface IModVarNonNull_mod_ShelfadjWoodColor { get mod_ShelfadjWoodColor(): string; get mod_ShelfadjWoodColor_matrix(): IMatrix_mod_ShelfadjWoodColor; }
export interface IModVar_mod_ShelfbtmThk { mod_ShelfbtmThk?: number; }
export interface IModVarNonNull_mod_ShelfbtmThk { get mod_ShelfbtmThk(): number; }
export interface IModVar_mod_ShelffixedBtm { mod_ShelffixedBtm?: boolean; }
export interface IModVarNonNull_mod_ShelffixedBtm { get mod_ShelffixedBtm(): boolean; }
export interface IModVar_mod_ShelffixedInfoList { mod_ShelffixedInfoList: string[]; }
export interface IModVarNonNull_mod_ShelffixedInfoList { get mod_ShelffixedInfoList(): string[]; }
export interface IModVar_mod_ShelffixedOffsetFront { mod_ShelffixedOffsetFront?: number; }
export interface IModVarNonNull_mod_ShelffixedOffsetFront { get mod_ShelffixedOffsetFront(): number; }
export interface IModVar_mod_ShelffixedOversizeBack { mod_ShelffixedOversizeBack?: number; }
export interface IModVarNonNull_mod_ShelffixedOversizeBack { get mod_ShelffixedOversizeBack(): number; }
export interface IModVar_mod_ShelffixedOversizeBackList { mod_ShelffixedOversizeBackList: number[]; }
export interface IModVarNonNull_mod_ShelffixedOversizeBackList { get mod_ShelffixedOversizeBackList(): number[]; }
export interface IModVar_mod_ShelffixedOversizeFront { mod_ShelffixedOversizeFront?: number; }
export interface IModVarNonNull_mod_ShelffixedOversizeFront { get mod_ShelffixedOversizeFront(): number; }
export interface IModVar_mod_ShelffixedOversizeFrontList { mod_ShelffixedOversizeFrontList: number[]; }
export interface IModVarNonNull_mod_ShelffixedOversizeFrontList { get mod_ShelffixedOversizeFrontList(): number[]; }
export interface IModVar_mod_ShelffixedPartParentName { mod_ShelffixedPartParentName?: string; }
export interface IModVarNonNull_mod_ShelffixedPartParentName { get mod_ShelffixedPartParentName(): string; }
export interface IModVar_mod_ShelffixedPartParentType { mod_ShelffixedPartParentType?: string; }
export interface IModVarNonNull_mod_ShelffixedPartParentType { get mod_ShelffixedPartParentType(): string; }
export interface IModVar_mod_ShelffixedPos { mod_ShelffixedPos?: string; }
export interface IModVarNonNull_mod_ShelffixedPos { get mod_ShelffixedPos(): string; }
export interface IModVar_mod_ShelffixedPosList { mod_ShelffixedPosList: number[]; }
export interface IModVarNonNull_mod_ShelffixedPosList { get mod_ShelffixedPosList(): number[]; }
export interface IModVar_mod_ShelffixedThk { mod_ShelffixedThk?: number; }
export interface IModVarNonNull_mod_ShelffixedThk { get mod_ShelffixedThk(): number; }
export interface IModVar_mod_ShelffixedTop { mod_ShelffixedTop?: boolean; }
export interface IModVarNonNull_mod_ShelffixedTop { get mod_ShelffixedTop(): boolean; }
export interface IModVar_mod_ShelffixedType { mod_ShelffixedType?: string; }
export interface IModVarNonNull_mod_ShelffixedType { get mod_ShelffixedType(): string; }
export interface IModVar_mod_ShelffixedTypeList { mod_ShelffixedTypeList: string[]; }
export interface IModVarNonNull_mod_ShelffixedTypeList { get mod_ShelffixedTypeList(): string[]; }
export interface IModVar_mod_ShelftopConstruction { mod_ShelftopConstruction?: string; }
export interface IModVarNonNull_mod_ShelftopConstruction { get mod_ShelftopConstruction(): string; }
export interface IModVar_mod_ShelftopThk { mod_ShelftopThk?: number; }
export interface IModVarNonNull_mod_ShelftopThk { get mod_ShelftopThk(): number; }
export interface IModVar_mod_ShelvesBackwallFittingConnection { mod_ShelvesBackwallFittingConnection?: string; }
export interface IModVarNonNull_mod_ShelvesBackwallFittingConnection { get mod_ShelvesBackwallFittingConnection(): string; }
export interface IModVar_mod_ShelvesBrackets { mod_ShelvesBrackets?: string; }
export interface IModVarNonNull_mod_ShelvesBrackets { get mod_ShelvesBrackets(): string; get mod_ShelvesBrackets_matrix(): IMatrix_mod_ShelvesBrackets; }
export interface IModVar_mod_ShelvesBracketsColor { mod_ShelvesBracketsColor?: string; }
export interface IModVarNonNull_mod_ShelvesBracketsColor { get mod_ShelvesBracketsColor(): string; }
export interface IModVar_mod_ShelvesColor { mod_ShelvesColor?: string; }
export interface IModVarNonNull_mod_ShelvesColor { get mod_ShelvesColor(): string; get mod_ShelvesColor_matrix(): IMatrix_mod_ShelvesColor; }
export interface IModVar_mod_ShelvesThk { mod_ShelvesThk?: number; }
export interface IModVarNonNull_mod_ShelvesThk { get mod_ShelvesThk(): number; }
export interface IModVar_mod_SidepanelType { mod_SidepanelType?: string; }
export interface IModVarNonNull_mod_SidepanelType { get mod_SidepanelType(): string; }
export interface IModVar_mod_SidepanelleftThk { mod_SidepanelleftThk?: number; }
export interface IModVarNonNull_mod_SidepanelleftThk { get mod_SidepanelleftThk(): number; }
export interface IModVar_mod_SidepanelleftType { mod_SidepanelleftType?: string; }
export interface IModVarNonNull_mod_SidepanelleftType { get mod_SidepanelleftType(): string; }
export interface IModVar_mod_SidepanelmiddleShortWidth { mod_SidepanelmiddleShortWidth?: number; }
export interface IModVarNonNull_mod_SidepanelmiddleShortWidth { get mod_SidepanelmiddleShortWidth(): number; }
export interface IModVar_mod_SidepanelmiddleThk { mod_SidepanelmiddleThk?: number; }
export interface IModVarNonNull_mod_SidepanelmiddleThk { get mod_SidepanelmiddleThk(): number; }
export interface IModVar_mod_SidepanelrightThk { mod_SidepanelrightThk?: number; }
export interface IModVarNonNull_mod_SidepanelrightThk { get mod_SidepanelrightThk(): number; }
export interface IModVar_mod_SidepanelrightType { mod_SidepanelrightType?: string; }
export interface IModVarNonNull_mod_SidepanelrightType { get mod_SidepanelrightType(): string; }
export interface IModVar_mod_SinkConstructionId { mod_SinkConstructionId?: string; }
export interface IModVarNonNull_mod_SinkConstructionId { get mod_SinkConstructionId(): string; }
export interface IModVar_mod_SinkGraphicId { mod_SinkGraphicId?: string; }
export interface IModVarNonNull_mod_SinkGraphicId { get mod_SinkGraphicId(): string; }
export interface IModVar_mod_SinkId { mod_SinkId?: string; }
export interface IModVarNonNull_mod_SinkId { get mod_SinkId(): string; }
export interface IModVar_mod_SinkMoveDepth { mod_SinkMoveDepth?: number; }
export interface IModVarNonNull_mod_SinkMoveDepth { get mod_SinkMoveDepth(): number; }
export interface IModVar_mod_SinkMoveWidth { mod_SinkMoveWidth?: number; }
export interface IModVarNonNull_mod_SinkMoveWidth { get mod_SinkMoveWidth(): number; }
export interface IModVar_mod_SinkSupplier { mod_SinkSupplier?: string; }
export interface IModVarNonNull_mod_SinkSupplier { get mod_SinkSupplier(): string; }
export interface IModVar_mod_SlopeAngle { mod_SlopeAngle?: number; }
export interface IModVarNonNull_mod_SlopeAngle { get mod_SlopeAngle(): number; }
export interface IModVar_mod_SlopedCeilingConstruction { mod_SlopedCeilingConstruction?: string; }
export interface IModVarNonNull_mod_SlopedCeilingConstruction { get mod_SlopedCeilingConstruction(): string; }
export interface IModVar_mod_SlopedCeilingDimensionLogic { mod_SlopedCeilingDimensionLogic?: string; }
export interface IModVarNonNull_mod_SlopedCeilingDimensionLogic { get mod_SlopedCeilingDimensionLogic(): string; get mod_SlopedCeilingDimensionLogic_matrix(): IMatrix_mod_SlopedCeilingDimensionLogic; }
export interface IModVar_mod_Supplier { mod_Supplier?: string; }
export interface IModVarNonNull_mod_Supplier { get mod_Supplier(): string; }
export interface IModVar_mod_SupplierNumber { mod_SupplierNumber?: string; }
export interface IModVarNonNull_mod_SupplierNumber { get mod_SupplierNumber(): string; }
export interface IModVar_mod_Thk { mod_Thk?: number; }
export interface IModVarNonNull_mod_Thk { get mod_Thk(): number; }
export interface IModVar_mod_ThkLeft { mod_ThkLeft?: number; }
export interface IModVarNonNull_mod_ThkLeft { get mod_ThkLeft(): number; }
export interface IModVar_mod_ThkRight { mod_ThkRight?: number; }
export interface IModVarNonNull_mod_ThkRight { get mod_ThkRight(): number; }
export interface IModVar_mod_ToekickColor { mod_ToekickColor?: string; }
export interface IModVarNonNull_mod_ToekickColor { get mod_ToekickColor(): string; get mod_ToekickColor_matrix(): IMatrix_mod_ToekickColor; }
export interface IModVar_mod_ToekickConnectionOverhang { mod_ToekickConnectionOverhang?: number; }
export interface IModVarNonNull_mod_ToekickConnectionOverhang { get mod_ToekickConnectionOverhang(): number; }
export interface IModVar_mod_ToekickConnectionSequence { mod_ToekickConnectionSequence?: string; }
export interface IModVarNonNull_mod_ToekickConnectionSequence { get mod_ToekickConnectionSequence(): string; }
export interface IModVar_mod_ToekickHeight { mod_ToekickHeight?: number; }
export interface IModVarNonNull_mod_ToekickHeight { get mod_ToekickHeight(): number; }
export interface IModVar_mod_ToekickId { mod_ToekickId?: string; }
export interface IModVarNonNull_mod_ToekickId { get mod_ToekickId(): string; }
export interface IModVar_mod_ToekickLength { mod_ToekickLength?: number; }
export interface IModVarNonNull_mod_ToekickLength { get mod_ToekickLength(): number; }
export interface IModVar_mod_ToekickProgram { mod_ToekickProgram?: string; }
export interface IModVarNonNull_mod_ToekickProgram { get mod_ToekickProgram(): string; get mod_ToekickProgram_matrix(): IMatrix_mod_ToekickProgram; }
export interface IModVar_mod_ToekickReductionTop { mod_ToekickReductionTop?: number; }
export interface IModVarNonNull_mod_ToekickReductionTop { get mod_ToekickReductionTop(): number; }
export interface IModVar_mod_ToekickSidepanelOverdimensionBtm { mod_ToekickSidepanelOverdimensionBtm?: number; }
export interface IModVarNonNull_mod_ToekickSidepanelOverdimensionBtm { get mod_ToekickSidepanelOverdimensionBtm(): number; }
export interface IModVar_mod_ToekickSidepanelTransitionType { mod_ToekickSidepanelTransitionType?: string; }
export interface IModVarNonNull_mod_ToekickSidepanelTransitionType { get mod_ToekickSidepanelTransitionType(): string; }
export interface IModVar_mod_ToekickThk { mod_ToekickThk?: number; }
export interface IModVarNonNull_mod_ToekickThk { get mod_ToekickThk(): number; }
export interface IModVar_mod_TopDepth { mod_TopDepth?: number; }
export interface IModVarNonNull_mod_TopDepth { get mod_TopDepth(): number; }
export interface IModVar_mod_TotalDimLeft { mod_TotalDimLeft?: number; }
export interface IModVarNonNull_mod_TotalDimLeft { get mod_TotalDimLeft(): number; }
export interface IModVar_mod_TotalDimRight { mod_TotalDimRight?: number; }
export interface IModVarNonNull_mod_TotalDimRight { get mod_TotalDimRight(): number; }
export interface IModVar_mod_TypeElement { mod_TypeElement?: string; }
export interface IModVarNonNull_mod_TypeElement { get mod_TypeElement(): string; }
export interface IModVar_mod_UprightColor { mod_UprightColor?: string; }
export interface IModVarNonNull_mod_UprightColor { get mod_UprightColor(): string; }
export interface IModVar_mod_UprightConstruction { mod_UprightConstruction?: string; }
export interface IModVarNonNull_mod_UprightConstruction { get mod_UprightConstruction(): string; }
export interface IModVar_mod_UprightDepth { mod_UprightDepth?: number; }
export interface IModVarNonNull_mod_UprightDepth { get mod_UprightDepth(): number; }
export interface IModVar_mod_UprightFloorProfileColor { mod_UprightFloorProfileColor?: string; }
export interface IModVarNonNull_mod_UprightFloorProfileColor { get mod_UprightFloorProfileColor(): string; }
export interface IModVar_mod_UprightHeight { mod_UprightHeight?: number; }
export interface IModVarNonNull_mod_UprightHeight { get mod_UprightHeight(): number; }
export interface IModVar_mod_UprightOverhang { mod_UprightOverhang?: number; }
export interface IModVarNonNull_mod_UprightOverhang { get mod_UprightOverhang(): number; }
export interface IModVar_mod_UprightSide { mod_UprightSide?: string; }
export interface IModVarNonNull_mod_UprightSide { get mod_UprightSide(): string; }
export interface IModVar_mod_UprightThk { mod_UprightThk?: number; }
export interface IModVarNonNull_mod_UprightThk { get mod_UprightThk(): number; }
export interface IModVar_mod_VertDividerInfoList { mod_VertDividerInfoList: string[]; }
export interface IModVarNonNull_mod_VertDividerInfoList { get mod_VertDividerInfoList(): string[]; }
export interface IModVar_mod_VertDividerPosition { mod_VertDividerPosition?: number; }
export interface IModVarNonNull_mod_VertDividerPosition { get mod_VertDividerPosition(): number; }
export interface IModVar_mod_VertDividerType { mod_VertDividerType?: string; }
export interface IModVarNonNull_mod_VertDividerType { get mod_VertDividerType(): string; get mod_VertDividerType_matrix(): IMatrix_mod_VertDividerType; }
export interface IModVar_mod_VertDividerTypeList { mod_VertDividerTypeList: string[]; }
export interface IModVarNonNull_mod_VertDividerTypeList { get mod_VertDividerTypeList(): string[]; }
export interface IModVar_mod_Weight { mod_Weight?: number; }
export interface IModVarNonNull_mod_Weight { get mod_Weight(): number; }
export interface IModVar_mod_Width { mod_Width?: number; }
export interface IModVarNonNull_mod_Width { get mod_Width(): number; }
export interface IModVar_mod_WidthLeft { mod_WidthLeft?: number; }
export interface IModVarNonNull_mod_WidthLeft { get mod_WidthLeft(): number; }
export interface IModVar_mod_WidthRight { mod_WidthRight?: number; }
export interface IModVarNonNull_mod_WidthRight { get mod_WidthRight(): number; }

export interface ITableParents_mc_Storageunit01  extends   IModVarNonNull_mod_BackwallPos
,  IModVarNonNull_mod_BackwallPosList
,  IModVarNonNull_mod_BackwallThk
,  IModVarNonNull_mod_CarcaseBackwallConstruction
,  IModVarNonNull_mod_CarcaseBackwallConstructionList
,  IModVarNonNull_mod_CarcaseConnectionLeftBtm
,  IModVarNonNull_mod_CarcaseConnectionLeftTop
,  IModVarNonNull_mod_CarcaseConnectionRightBtm
,  IModVarNonNull_mod_CarcaseConnectionRightTop
,  IModVarNonNull_mod_CarcaseDepth
,  IModVarNonNull_mod_CarcaseHeight
,  IModVarNonNull_mod_CarcaseId
,  IModVarNonNull_mod_CarcaseShelfbtmConstruction
,  IModVarNonNull_mod_CarcaseShelftopConstruction
,  IModVarNonNull_mod_CarcaseVisBack
,  IModVarNonNull_mod_CarcaseVisBtm
,  IModVarNonNull_mod_CarcaseVisLeft
,  IModVarNonNull_mod_CarcaseVisRight
,  IModVarNonNull_mod_CarcaseVisTop
,  IModVarNonNull_mod_CarcaseWidth
,  IModVarNonNull_mod_FingergripQtyMiddle
,  IModVarNonNull_mod_FingergripPos1
,  IModVarNonNull_mod_FingergripPos2
,  IModVarNonNull_mod_FingergripPos3
,  IModVarNonNull_mod_FingergripPos4
,  IModVarNonNull_mod_FingergripPos5
,  IModVarNonNull_mod_FingergripTop
,  IModVarNonNull_mod_HangerPosX
,  IModVarNonNull_mod_HangerPosY
,  IModVarNonNull_mod_RailhortopbackThk
,  IModVarNonNull_mod_RailhortopfrontThk
,  IModVarNonNull_mod_RailverttopbackThk
,  IModVarNonNull_mod_RailverttopfrontThk
,  IModVarNonNull_mod_ShelfbtmThk
,  IModVarNonNull_mod_ShelffixedOversizeFrontList
,  IModVarNonNull_mod_ShelffixedPosList
,  IModVarNonNull_mod_ShelffixedThk
,  IModVarNonNull_mod_ShelffixedTypeList
,  IModVarNonNull_mod_ShelftopThk
,  IModVarNonNull_mod_SidepanelleftThk
,  IModVarNonNull_mod_SidepanelleftType
,  IModVarNonNull_mod_SidepanelrightType
,  IModVarNonNull_mod_SidepanelrightThk
,  IModVarNonNull_mod_CarcaseBackwallColor
,  IModVarNonNull_mod_CarcaseBackwallProgram
,  IModVarNonNull_mod_CarcaseColor
,  IModVarNonNull_mod_CarcaseOutsideColor
,  IModVarNonNull_mod_CarcaseEdgeBackColor
,  IModVarNonNull_mod_CarcaseEdgeColor
,  IModVarNonNull_mod_CarcaseEdgeFrontColor
,  IModVarNonNull_mod_CarcaseProgram
,  IModVarNonNull_mod_CarcaseOutsideProgram
,  IModVarNonNull_mod_CarcaseShelfbtmOversizeInsideWall
,  IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft
,  IModVarNonNull_mod_CarcaseShelfbtmOversizeRight
,  IModVarNonNull_mod_CarcaseShelftopOversizeInsideWall
,  IModVarNonNull_mod_CarcaseShelftopOversizeLeft
,  IModVarNonNull_mod_CarcaseShelftopOversizeRight
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop
,  IModVarNonNull_mod_CarcaseDistanceWall
,  IModVarNonNull_mod_FingergripType
,  IModVarNonNull_mod_HangerType
,  IModVarNonNull_mod_LightPosX1
,  IModVarNonNull_mod_LightPosX2
,  IModVarNonNull_mod_LightPosX3
,  IModVarNonNull_mod_LightPosX4
,  IModVarNonNull_mod_LightPosX5
,  IModVarNonNull_mod_LightPart
,  IModVarNonNull_mod_LightPosX
,  IModVarNonNull_mod_LightPosY
,  IModVarNonNull_mod_LightSystem
,  IModVarNonNull_mod_PlinthAreaHeight
,  IModVarNonNull_mod_BackwallFixedHeight
,  IModVarNonNull_mod_ShelffixedOversizeBackList
,  IModVarNonNull_mod_CarcaseSpaceDimension
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_TypeElement
,  IModVarNonNull_mod_HardwareColor
,  IModVarNonNull_mod_CarcasePartConnectionBackHor
,  IModVarNonNull_mod_CarcasePartConnectionBackVert
,  IModVarNonNull_mod_CarcasePartConnectionBtmVert
,  IModVarNonNull_mod_CarcasePartConnectionLeftHor
,  IModVarNonNull_mod_CarcasePartConnectionRightHor
,  IModVarNonNull_mod_CarcasePartConnectionTopVert
,  IModVarNonNull_mod_HangerOffsetPosY
,  IModVarNonNull_mod_HangerColor
,  IModVarNonNull_mod_SidepanelmiddleThk
,  IModVarNonNull_mod_VertDividerInfoList
,  IModVarNonNull_mod_CarcaseFrontConstruction
,  IModVarNonNull_mod_CarcasePartInfo
,  IModVarNonNull_mod_LastFrontHeight
,  IModVarNonNull_mod_LastFrontName
,  IModVarNonNull_mod_HobHeightBlockedSpace
,  IModVarNonNull_mod_ShelffixedInfoList
,  IModVarNonNull_mod_FrontAreaInfoList
,  IModVarNonNull_mod_SlopedCeilingDimensionLogic
,  IModVarNonNull_mod_SlopedCeilingConstruction
,  IModVarNonNull_mod_SlopeAngle
,  IModVarNonNull_mod_BackHeight
,  IModVarNonNull_mod_TopDepth
,  IModVarNonNull_mod_CarcaseDirection
,  IModVarNonNull_mod_CarcaseMovement
,  IModVarNonNull_mod_Originpos
,  IModVarNonNull_mod_GrainLogic

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_Cornerunit01  extends   IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_CarcaseColor
,  IModVarNonNull_mod_CarcaseConnectionLeftBtm
,  IModVarNonNull_mod_CarcaseConnectionLeftTop
,  IModVarNonNull_mod_CarcaseConnectionRightBtm
,  IModVarNonNull_mod_CarcaseConnectionRightTop
,  IModVarNonNull_mod_DepthLeft
,  IModVarNonNull_mod_DepthRight
,  IModVarNonNull_mod_CarcaseEdgeBackColor
,  IModVarNonNull_mod_CarcaseEdgeColor
,  IModVarNonNull_mod_CarcaseEdgeFrontColor
,  IModVarNonNull_mod_CarcaseFrontConstruction
,  IModVarNonNull_mod_Height
,  IModVarNonNull_mod_CarcaseId
,  IModVarNonNull_mod_CarcaseOutsideColor
,  IModVarNonNull_mod_CarcaseOutsideProgram
,  IModVarNonNull_mod_CarcasePartConnectionBackHor
,  IModVarNonNull_mod_CarcasePartConnectionBtmVert
,  IModVarNonNull_mod_CarcasePartConnectionBackVert
,  IModVarNonNull_mod_CarcasePartConnectionLeftHor
,  IModVarNonNull_mod_CarcasePartConnectionTopVert
,  IModVarNonNull_mod_CarcasePartInfo
,  IModVarNonNull_mod_CarcasePartConnectionRightHor
,  IModVarNonNull_mod_CarcaseProgram
,  IModVarNonNull_mod_CarcaseShelfbtmConstruction
,  IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft
,  IModVarNonNull_mod_CarcaseShelfbtmOversizeRight
,  IModVarNonNull_mod_CarcaseShelftopConstruction
,  IModVarNonNull_mod_CarcaseShelftopOversizeLeft
,  IModVarNonNull_mod_CarcaseShelftopOversizeRight
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop
,  IModVarNonNull_mod_CarcaseVisBack
,  IModVarNonNull_mod_CarcaseVisBtm
,  IModVarNonNull_mod_CarcaseVisLeft
,  IModVarNonNull_mod_CarcaseVisTop
,  IModVarNonNull_mod_CarcaseVisRight
,  IModVarNonNull_mod_WidthLeft
,  IModVarNonNull_mod_WidthRight
,  IModVarNonNull_mod_FingergripPos1
,  IModVarNonNull_mod_FingergripPos2
,  IModVarNonNull_mod_FingergripPos3
,  IModVarNonNull_mod_FingergripPos4
,  IModVarNonNull_mod_FingergripPos5
,  IModVarNonNull_mod_FingergripQtyMiddle
,  IModVarNonNull_mod_FingergripTop
,  IModVarNonNull_mod_FingergripType
,  IModVarNonNull_mod_FrontAreaInfoList
,  IModVarNonNull_mod_PlinthAreaHeight
,  IModVarNonNull_mod_ShelfbtmThk
,  IModVarNonNull_mod_ShelftopThk
,  IModVarNonNull_mod_SidepanelleftThk
,  IModVarNonNull_mod_SidepanelleftType
,  IModVarNonNull_mod_SidepanelrightThk
,  IModVarNonNull_mod_SidepanelrightType
,  IModVarNonNull_mod_TypeElement
,  IModVarNonNull_mod_TotalDimLeft
,  IModVarNonNull_mod_TotalDimRight
,  IModVarNonNull_mod_SlopeAngle
,  IModVarNonNull_mod_SlopedCeilingConstruction
,  IModVarNonNull_mod_SlopedCeilingDimensionLogic
,  IModVarNonNull_mod_BackHeight
,  IModVarNonNull_mod_TopDepth
,  IModVarNonNull_mod_CarcaseDirection
,  IModVarNonNull_mod_VertDividerInfoList
,  IModVarNonNull_mod_GrainLogic

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_CornerunitStraight01  extends   IModVarNonNull_mod_CarcaseColor
,  IModVarNonNull_mod_CarcaseDepth
,  IModVarNonNull_mod_CarcaseHeight
,  IModVarNonNull_mod_CarcaseId
,  IModVarNonNull_mod_CarcaseOutsideColor
,  IModVarNonNull_mod_CarcaseOutsideProgram
,  IModVarNonNull_mod_CarcaseProgram
,  IModVarNonNull_mod_CarcaseWidth
,  IModVarNonNull_mod_ShelfbtmThk
,  IModVarNonNull_mod_ShelftopThk
,  IModVarNonNull_mod_SidepanelleftThk
,  IModVarNonNull_mod_SidepanelrightThk
,  IModVarNonNull_mod_CornerunitStraightConstruction
,  IModVarNonNull_mod_CornerunitFrontWidth
,  IModVarNonNull_mod_PanelblindThk
,  IModVarNonNull_mod_FingergripTop
,  IModVarNonNull_mod_FingergripType
,  IModVarNonNull_mod_CarcaseDirection
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_CarcaseConnectionLeftBtm
,  IModVarNonNull_mod_CarcaseConnectionLeftTop
,  IModVarNonNull_mod_CarcaseConnectionRightBtm
,  IModVarNonNull_mod_CarcaseConnectionRightTop
,  IModVarNonNull_mod_CarcasePartConnectionBackHor
,  IModVarNonNull_mod_CarcasePartConnectionBackVert
,  IModVarNonNull_mod_CarcasePartConnectionBtmVert
,  IModVarNonNull_mod_CarcasePartConnectionLeftHor
,  IModVarNonNull_mod_CarcasePartConnectionRightHor
,  IModVarNonNull_mod_CarcasePartConnectionTopVert
,  IModVarNonNull_mod_CornerunitInfo
,  IModVarNonNull_mod_FingergripPos1
,  IModVarNonNull_mod_FingergripPos2
,  IModVarNonNull_mod_FingergripPos3
,  IModVarNonNull_mod_FingergripPos4
,  IModVarNonNull_mod_FingergripPos5
,  IModVarNonNull_mod_FingergripQtyMiddle
,  IModVarNonNull_mod_SidepanelmiddleShortWidth
,  IModVarNonNull_mod_SidepanelmiddleThk
,  IModVarNonNull_mod_CleatThk
,  IModVarNonNull_mod_CleatWidth
,  IModVarNonNull_mod_CarcaseSpaceDimension
,  IModVarNonNull_mod_GrainLogic

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_Drawer01  extends   IModVarNonNull_mod_BackwallPos
,  IModVarNonNull_mod_CarcaseDepth
,  IModVarNonNull_mod_CarcaseHeight
,  IModVarNonNull_mod_CarcaseId
,  IModVarNonNull_mod_CarcaseWidth
,  IModVarNonNull_mod_FingergripTop
,  IModVarNonNull_mod_FrontHeight
,  IModVarNonNull_mod_FrontId
,  IModVarNonNull_mod_FrontSplit
,  IModVarNonNull_mod_FrontThk
,  IModVarNonNull_mod_FrontWidth
,  IModVarNonNull_mod_HandleDrill
,  IModVarNonNull_mod_HandleLine
,  IModVarNonNull_mod_HandlePosLogic
,  IModVarNonNull_mod_FrontQtyElements
,  IModVarNonNull_mod_ShelffixedType
,  IModVarNonNull_mod_FrontPosStart
,  IModVarNonNull_mod_DrawerBoxColor
,  IModVarNonNull_mod_DrawerBoxDepthType
,  IModVarNonNull_mod_DrawerBoxHeightType
,  IModVarNonNull_mod_DrawerBoxOffsetDepth
,  IModVarNonNull_mod_DrawerBoxProgram
,  IModVarNonNull_mod_FrontColor
,  IModVarNonNull_mod_FrontEdgeColor
,  IModVarNonNull_mod_FrontEdgeThk
,  IModVarNonNull_mod_FrontGapCarcase
,  IModVarNonNull_mod_FrontGapHor
,  IModVarNonNull_mod_FrontGapVert
,  IModVarNonNull_mod_FrontOversizeBtm
,  IModVarNonNull_mod_FrontOversizeLeft
,  IModVarNonNull_mod_FrontOversizeRight
,  IModVarNonNull_mod_FrontOversizeTop
,  IModVarNonNull_mod_FrontProgram
,  IModVarNonNull_mod_FrontSplitHeight1
,  IModVarNonNull_mod_FrontSplitHeight2
,  IModVarNonNull_mod_FrontSplitHeight3
,  IModVarNonNull_mod_FrontSplitType1
,  IModVarNonNull_mod_FrontSplitType2
,  IModVarNonNull_mod_HandleColor
,  IModVarNonNull_mod_HandleLength
,  IModVarNonNull_mod_HandleOffsetX
,  IModVarNonNull_mod_HandleOffsetY
,  IModVarNonNull_mod_HandlePosMatrix
,  IModVarNonNull_mod_HandlePosType
,  IModVarNonNull_mod_HandlestripPos
,  IModVarNonNull_mod_HeightPosInsertion
,  IModVarNonNull_mod_PlinthAreaHeight
,  IModVarNonNull_mod_ShelffixedBtm
,  IModVarNonNull_mod_ShelffixedPos
,  IModVarNonNull_mod_HandleDesign
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_FrontGapHorTop
,  IModVarNonNull_mod_FrontDesign
,  IModVarNonNull_mod_DrawerBoxDesign
,  IModVarNonNull_mod_Depth
,  IModVarNonNull_mod_ShelfbtmThk
,  IModVarNonNull_mod_ShelffixedThk
,  IModVarNonNull_mod_TypeElement
,  IModVarNonNull_mod_Originpos
,  IModVarNonNull_mod_VertDividerType
,  IModVarNonNull_mod_DrawerType
,  IModVarNonNull_mod_CarcaseSpaceDimension
,  IModVarNonNull_mod_FramePartsWidthHor
,  IModVarNonNull_mod_FramePartsWidthVert
,  IModVarNonNull_mod_PanelWoodFrameFillingType
,  IModVarNonNull_mod_PanelWoodFrameType
,  IModVarNonNull_mod_FrameFillingWoodColor
,  IModVarNonNull_mod_FrontGlassColor
,  IModVarNonNull_mod_DrawerOpeningDistance
,  IModVarNonNull_mod_FrameFillingColor

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_Fliplift01  extends   IModVarNonNull_mod_CarcaseDepth
,  IModVarNonNull_mod_CarcaseHeight
,  IModVarNonNull_mod_CarcaseId
,  IModVarNonNull_mod_CarcaseWidth
,  IModVarNonNull_mod_FlipliftType
,  IModVarNonNull_mod_FrontHeight
,  IModVarNonNull_mod_FrontId
,  IModVarNonNull_mod_FrontThk
,  IModVarNonNull_mod_FrontWidth
,  IModVarNonNull_mod_HandleDrill
,  IModVarNonNull_mod_HandleLine
,  IModVarNonNull_mod_HandlePosLogic
,  IModVarNonNull_mod_FrontQtyElements
,  IModVarNonNull_mod_ShelffixedType
,  IModVarNonNull_mod_FrontPosStart
,  IModVarNonNull_mod_HardwareColor
,  IModVarNonNull_mod_FrontColor
,  IModVarNonNull_mod_FrontEdgeColor
,  IModVarNonNull_mod_FrontEdgeThk
,  IModVarNonNull_mod_FrontGapCarcase
,  IModVarNonNull_mod_FrontGapHor
,  IModVarNonNull_mod_FrontGapVert
,  IModVarNonNull_mod_FrontOversizeBtm
,  IModVarNonNull_mod_FrontOversizeLeft
,  IModVarNonNull_mod_FrontOversizeRight
,  IModVarNonNull_mod_FrontOversizeTop
,  IModVarNonNull_mod_FrontProgram
,  IModVarNonNull_mod_HandleColor
,  IModVarNonNull_mod_HandleLength
,  IModVarNonNull_mod_HandleOffsetX
,  IModVarNonNull_mod_HandleOffsetY
,  IModVarNonNull_mod_HandlePosMatrix
,  IModVarNonNull_mod_HandlePosType
,  IModVarNonNull_mod_HandlestripPos
,  IModVarNonNull_mod_HeightPosInsertion
,  IModVarNonNull_mod_HingeType
,  IModVarNonNull_mod_PlinthAreaHeight
,  IModVarNonNull_mod_ShelffixedBtm
,  IModVarNonNull_mod_ShelffixedPos
,  IModVarNonNull_mod_HandleDesign
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_FrontDesign
,  IModVarNonNull_mod_CarcaseSpaceDimension
,  IModVarNonNull_mod_FrontSplitDescriptor
,  IModVarNonNull_mod_Originpos
,  IModVarNonNull_mod_OpeningType
,  IModVarNonNull_mod_CarcasePartInfo
,  IModVarNonNull_mod_TypeElement
,  IModVarNonNull_mod_PushtoopenColor
,  IModVarNonNull_mod_PushtoopenLine
,  IModVarNonNull_mod_PushtoopenOffset
,  IModVarNonNull_mod_PushtoopenPosition
,  IModVarNonNull_mod_PushtoopenType
,  IModVarNonNull_mod_OpeningAngle
,  IModVarNonNull_mod_FlipliftFrontHeightList
,  IModVarNonNull_mod_FlipliftFrontNumber
,  IModVarNonNull_mod_FlipliftHardwareColor
,  IModVarNonNull_mod_FlipliftHardwareType
,  IModVarNonNull_mod_FrameFillingWoodColor
,  IModVarNonNull_mod_FrontGlassColor
,  IModVarNonNull_mod_HandleWeightCalculations
,  IModVarNonNull_mod_FrameFillingColor

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_CornerFillerFront01_mc_Dishwasher_mc_Door01_mc_Drawer01_mc_FillerFront01_mc_Fixedfront01_mc_Fliplift01  extends   IModVarNonNull_mod_FrontColor
,  IModVarNonNull_mod_FrontDesign
,  IModVarNonNull_mod_FrontEdgeColor
,  IModVarNonNull_mod_FrontEdgeThk
,  IModVarNonNull_mod_FrontGapCarcase
,  IModVarNonNull_mod_FrontGapHor
,  IModVarNonNull_mod_FrontGapVert
,  IModVarNonNull_mod_FrontId
,  IModVarNonNull_mod_FrontOversizeBtm
,  IModVarNonNull_mod_FrontOversizeTop
,  IModVarNonNull_mod_FrontPosStart
,  IModVarNonNull_mod_FrontProgram
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_FrontWidth
,  IModVarNonNull_mod_FrontHeight
,  IModVarNonNull_mod_FrontThk
,  IModVarNonNull_mod_Originpos
,  IModVarNonNull_mod_TypeElement

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_Handle01_mc_Handlestrip01  extends   IModVarNonNull_mod_Depth
,  IModVarNonNull_mod_FrontHeight
,  IModVarNonNull_mod_FrontId
,  IModVarNonNull_mod_HandleDrill
,  IModVarNonNull_mod_HandleLine
,  IModVarNonNull_mod_HandlePosLogic
,  IModVarNonNull_mod_Height
,  IModVarNonNull_mod_FrontPosStart
,  IModVarNonNull_mod_Width
,  IModVarNonNull_mod_FrontProgram
,  IModVarNonNull_mod_HandleColor
,  IModVarNonNull_mod_HandleLength
,  IModVarNonNull_mod_HandleOffsetX
,  IModVarNonNull_mod_HandleOffsetY
,  IModVarNonNull_mod_HandlePosMatrix
,  IModVarNonNull_mod_HandlePosType
,  IModVarNonNull_mod_HeightPosInsertion
,  IModVarNonNull_mod_PlinthAreaHeight
,  IModVarNonNull_mod_HandleDesign
,  IModVarNonNull_mod_PartInfo
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_ProcessingId
,  IModVarNonNull_mod_ProcessingLibrary
,  IModVarNonNull_mod_HardwareId
,  IModVarNonNull_mod_Model3DGroupName
,  IModVarNonNull_mod_Rotation
,  IModVarNonNull_mod_FrontThk
,  IModVarNonNull_mod_FrontWidth
,  IModVarNonNull_mod_FrontType

{
  get g():IGlobalVars;
}
export interface ITableParents_mc_PlinthArea01  extends   IModVarNonNull_mod_CarcaseDepth
,  IModVarNonNull_mod_CarcaseId
,  IModVarNonNull_mod_CarcaseWidth
,  IModVarNonNull_mod_PlinthAreaVisLeft
,  IModVarNonNull_mod_PlinthAreaVisRight
,  IModVarNonNull_mod_SidepanelleftThk
,  IModVarNonNull_mod_SidepanelrightThk
,  IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
,  IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
,  IModVarNonNull_mod_PlinthAreaHeight
,  IModVarNonNull_mod_PlinthAreaPosLeftMatrix
,  IModVarNonNull_mod_PlinthAreaDesign
,  IModVarNonNull_mod_PlinthAreaPosBackMatrix
,  IModVarNonNull_mod_PlinthAreaPosFrontMatrix
,  IModVarNonNull_mod_PlinthAreaPosRightMatrix
,  IModVarNonNull_mod_PlinthAreaPosLogic
,  IModVarNonNull_mod_ShelfbtmThk
,  IModVarNonNull_mod_TypeElement
,  IModVarNonNull_mod_PlinthAreaElementColor
,  IModVarNonNull_mod_ModuleName
,  IModVarNonNull_mod_PlinthAreaExtraItem
,  IModVarNonNull_mod_PlinthAreaPositionInfo
,  IModVarNonNull_mod_LegInsertion
,  IModVarNonNull_mod_Weight

{
  get g():IGlobalVars;
}
import { OD_Base } from './base';
import { IModBaseProp } from './mod-base';
import { dc_mc_ShelfadjWood01 } from './modules/mc_ShelfadjWood01'
import { dc_mc_ShelfadjGlass01 } from './modules/mc_ShelfadjGlass01'
import { dc_mc_ShelfadjDrill01 } from './modules/mc_ShelfadjDrill01'
import { dc_mc_ShelfadjFitting01 } from './modules/mc_ShelfadjFitting01'
import { dc_mc_Storageunit01 } from './modules/mc_Storageunit01'
import { dc_mf_Drawer } from './modules/mf_Drawer'
import { dc_mc_PlinthArea01 } from './modules/mc_PlinthArea01'
import { dc_mf_Fliplift } from './modules/mf_Fliplift'
import { dc_mf_Door } from './modules/mf_Door'
import { dc_mf_Oven } from './modules/mf_Oven'
import { dc_mf_Fridge } from './modules/mf_Fridge'
import { dc_mf_RackArea } from './modules/mf_RackArea'
import { dc_mf_Fixedfront } from './modules/mf_Fixedfront'
import { dc_mf_Hob } from './modules/mf_Hob'
import { dc_mf_Sink } from './modules/mf_Sink'
import { dc_mc_Hinge01 } from './modules/mc_Hinge01'
import { dc_mc_StorageunitSidepanel01 } from './modules/mc_StorageunitSidepanel01'
import { dc_mc_StorageunitShelfbtm01 } from './modules/mc_StorageunitShelfbtm01'
import { dc_mc_StorageunitShelftop01 } from './modules/mc_StorageunitShelftop01'
import { dc_mc_StorageunitBackwall01 } from './modules/mc_StorageunitBackwall01'
import { dc_mc_StorageunitShelffixed01 } from './modules/mc_StorageunitShelffixed01'
import { dc_mc_LightSystem01 } from './modules/mc_LightSystem01'
import { dc_mc_HangerSystem01 } from './modules/mc_HangerSystem01'
import { dc_mc_VertDivider01 } from './modules/mc_VertDivider01'
import { dc_mc_StorageunitShelftop02 } from './modules/mc_StorageunitShelftop02'
import { dc_mc_StorageunitShelftop03 } from './modules/mc_StorageunitShelftop03'
import { dc_mc_StorageunitShelftop04 } from './modules/mc_StorageunitShelftop04'
import { dc_mc_Door01 } from './modules/mc_Door01'
import { dc_mc_ShelfadjGroup01 } from './modules/mc_ShelfadjGroup01'
import { dc_mc_FrontPanelGlass01 } from './modules/mc_FrontPanelGlass01'
import { dc_mc_FrontPanel01 } from './modules/mc_FrontPanel01'
import { dc_mc_Handle01 } from './modules/mc_Handle01'
import { dc_mc_Handlestrip01 } from './modules/mc_Handlestrip01'
import { dc_mc_MetalFrame01 } from './modules/mc_MetalFrame01'
import { dc_mc_ThermoformedPanel01 } from './modules/mc_ThermoformedPanel01'
import { dc_mc_Pushtoopen01 } from './modules/mc_Pushtoopen01'
import { dc_mc_HingeGroup01 } from './modules/mc_HingeGroup01'
import { dc_mc_PanelWoodFrame01 } from './modules/mc_PanelWoodFrame01'
import { dc_mc_Leg01 } from './modules/mc_Leg01'

export interface IFuncParents_mc_ShelfadjGroup01 extends IModBaseProp,  IModVarNonNull_mod_ShelfadjDesign
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_CarcaseColor
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcaseProgram
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_ShelfadjOffsetFront
, IModVarNonNull_mod_ShelfadjOffsetBack
, IModVarNonNull_mod_ShelfadjDrillType
, IModVarNonNull_mod_ShelfadjDrillDistance
, IModVarNonNull_mod_ShelfadjThk
, IModVarNonNull_mod_ShelfadjDrillinglineOffsetTop
, IModVarNonNull_mod_ShelfadjDrillinglineOffsetBtm
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_ShelfadjPartParentName
, IModVarNonNull_mod_ShelfadjPartParentType
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_HardwareId
, IModVarNonNull_mod_CarcaseSpaceDimension
, IModVarNonNull_mod_VertDividerType
, IModVarNonNull_mod_VertDividerPosition
, IModVarNonNull_mod_GrainLogic
, IModVarNonNull_mod_ShelfadjColor
, IModVarNonNull_mod_ShelfadjDescriptor

{
  get m(): OD_Base[];
  addOD_M_mc_ShelfadjWood01(index?:number) : dc_mc_ShelfadjWood01
  addOD_M_mc_ShelfadjGlass01(index?:number) : dc_mc_ShelfadjGlass01
  addOD_M_mc_ShelfadjDrill01(index?:number) : dc_mc_ShelfadjDrill01
  addOD_M_mc_ShelfadjFitting01(index?:number) : dc_mc_ShelfadjFitting01
}

export interface IFuncParents_mc_CornerFillerFront01_mc_Door01_mc_Drawer01_mc_Fixedfront01_mc_Fliplift01_mc_Handlestrip01 extends IModBaseProp,  IModVarNonNull_mod_FrontGapVert
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_HandlePosType

{
  get m(): OD_Base[];
}

export interface IFuncParents_mr_StorageunitSingle extends IModBaseProp,  IModVarNonNull_mod_BackwallPos
, IModVarNonNull_mod_BackwallThk
, IModVarNonNull_mod_CarcaseBackwallConstruction
, IModVarNonNull_mod_CarcaseConnectionLeftBtm
, IModVarNonNull_mod_CarcaseConnectionLeftTop
, IModVarNonNull_mod_CarcaseConnectionRightBtm
, IModVarNonNull_mod_CarcaseConnectionRightTop
, IModVarNonNull_mod_CarcaseShelfbtmConstruction
, IModVarNonNull_mod_CarcaseShelftopConstruction
, IModVarNonNull_mod_CarcaseVisBack
, IModVarNonNull_mod_CarcaseVisBtm
, IModVarNonNull_mod_CarcaseVisLeft
, IModVarNonNull_mod_CarcaseVisRight
, IModVarNonNull_mod_CarcaseVisTop
, IModVarNonNull_mod_HandleLine
, IModVarNonNull_mod_HandlePosLogic
, IModVarNonNull_mod_HangerPosX
, IModVarNonNull_mod_HangerPosY
, IModVarNonNull_mod_PlinthAreaVisLeft
, IModVarNonNull_mod_PlinthAreaVisRight
, IModVarNonNull_mod_RailhortopbackThk
, IModVarNonNull_mod_RailhortopfrontThk
, IModVarNonNull_mod_RailverttopbackThk
, IModVarNonNull_mod_RailverttopfrontThk
, IModVarNonNull_mod_ShelfbtmThk
, IModVarNonNull_mod_ShelffixedThk
, IModVarNonNull_mod_ShelftopThk
, IModVarNonNull_mod_SidepanelleftThk
, IModVarNonNull_mod_SidepanelrightThk
, IModVarNonNull_mod_HardwareColor
, IModVarNonNull_mod_OpeningType
, IModVarNonNull_mod_CarcaseBackwallColor
, IModVarNonNull_mod_CarcaseBackwallProgram
, IModVarNonNull_mod_CarcaseColor
, IModVarNonNull_mod_CarcaseOutsideColor
, IModVarNonNull_mod_CarcaseEdgeBackColor
, IModVarNonNull_mod_CarcaseEdgeColor
, IModVarNonNull_mod_CarcaseEdgeFrontColor
, IModVarNonNull_mod_CarcaseProgram
, IModVarNonNull_mod_CarcaseOutsideProgram
, IModVarNonNull_mod_CarcaseShelfbtmOversizeInsideWall
, IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft
, IModVarNonNull_mod_CarcaseShelfbtmOversizeRight
, IModVarNonNull_mod_CarcaseShelftopOversizeInsideWall
, IModVarNonNull_mod_CarcaseShelftopOversizeLeft
, IModVarNonNull_mod_CarcaseShelftopOversizeRight
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop
, IModVarNonNull_mod_CarcaseDistanceWall
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_FingergripType
, IModVarNonNull_mod_FrontColor
, IModVarNonNull_mod_FrontEdgeColor
, IModVarNonNull_mod_FrontEdgeThk
, IModVarNonNull_mod_FrontFrameColor
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_FrontGapHor
, IModVarNonNull_mod_FrontGapVert
, IModVarNonNull_mod_FrontGlassColor
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_HandleColor
, IModVarNonNull_mod_HandleLength
, IModVarNonNull_mod_HandlePosType
, IModVarNonNull_mod_HangerType
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_HeightPosInsertion
, IModVarNonNull_mod_LightPosX1
, IModVarNonNull_mod_LightPosX2
, IModVarNonNull_mod_LightPosX3
, IModVarNonNull_mod_LightPosX4
, IModVarNonNull_mod_LightPosX5
, IModVarNonNull_mod_LightPart
, IModVarNonNull_mod_LightPosX
, IModVarNonNull_mod_LightPosY
, IModVarNonNull_mod_LightSystem
, IModVarNonNull_mod_Model
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_ShelfadjThk
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_BackwallFixedHeight
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_PlinthAreaPosLeftMatrix
, IModVarNonNull_mod_PlinthAreaDesign
, IModVarNonNull_mod_PlinthAreaPosBackMatrix
, IModVarNonNull_mod_PlinthAreaPosFrontMatrix
, IModVarNonNull_mod_PlinthAreaPosRightMatrix
, IModVarNonNull_mod_PlinthAreaElementColor
, IModVarNonNull_mod_InteriorEquipmentLogic
, IModVarNonNull_mod_ParentName
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_PlinthAreaExtraItem
, IModVarNonNull_mod_FrontGapHorTop
, IModVarNonNull_mod_ShelvesBackwallFittingConnection
, IModVarNonNull_mod_FittingConnectionBtmVert
, IModVarNonNull_mod_FittingConnectionLeftBtm
, IModVarNonNull_mod_FittingConnectionLeftHor
, IModVarNonNull_mod_FittingConnectionLeftTop
, IModVarNonNull_mod_FittingConnectionRightBtm
, IModVarNonNull_mod_FittingConnectionRightHor
, IModVarNonNull_mod_FittingConnectionRightTop
, IModVarNonNull_mod_FittingConnectionTopVert
, IModVarNonNull_mod_CarcasePartConnectionBackHor
, IModVarNonNull_mod_CarcasePartConnectionBackVert
, IModVarNonNull_mod_CarcasePartConnectionBtmVert
, IModVarNonNull_mod_CarcasePartConnectionLeftHor
, IModVarNonNull_mod_CarcasePartConnectionRightHor
, IModVarNonNull_mod_CarcasePartConnectionTopVert
, IModVarNonNull_mod_HangerOffsetPosY
, IModVarNonNull_mod_HangerColor
, IModVarNonNull_mod_RackAreaOversizeCarcaseType
, IModVarNonNull_mod_RackAreaManualOffsetCarcase
, IModVarNonNull_mod_CleatThk
, IModVarNonNull_mod_CleatWidth
, IModVarNonNull_mod_VertDividerType
, IModVarNonNull_mod_SidepanelmiddleThk
, IModVarNonNull_mod_CarcaseFrontConstruction
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_PushtoopenLine
, IModVarNonNull_mod_PushtoopenType
, IModVarNonNull_mod_PushtoopenColor
, IModVarNonNull_mod_FramePartsWidthHor
, IModVarNonNull_mod_FramePartsWidthVert
, IModVarNonNull_mod_PanelWoodFrameFillingType
, IModVarNonNull_mod_PanelWoodFrameType
, IModVarNonNull_mod_CreateCountertop
, IModVarNonNull_mod_CreateToekick
, IModVarNonNull_mod_CreateFingergrip
, IModVarNonNull_mod_CreatePaneltop
, IModVarNonNull_mod_PlinthAreaPositionInfo
, IModVarNonNull_mod_DoorDirection
, IModVarNonNull_mod_SlopedCeilingDimensionLogic
, IModVarNonNull_mod_SlopedCeilingConstruction
, IModVarNonNull_mod_SlopeAngle
, IModVarNonNull_mod_BackHeight
, IModVarNonNull_mod_TopDepth
, IModVarNonNull_mod_FrameFillingWoodColor
, IModVarNonNull_mod_CountertopThk
, IModVarNonNull_mod_CountertopInfo
, IModVarNonNull_mod_SidepanelleftType
, IModVarNonNull_mod_SidepanelrightType
, IModVarNonNull_mod_GrainLogic
, IModVarNonNull_mod_ShelfadjColor
, IModVarNonNull_mod_FrameFillingColor

{
  get m(): OD_Base[];
  addOD_M_mc_Storageunit01(index?:number) : dc_mc_Storageunit01
  addOD_M_mf_Drawer(index?:number) : dc_mf_Drawer
  addOD_M_mc_PlinthArea01(index?:number) : dc_mc_PlinthArea01
  addOD_M_mf_Fliplift(index?:number) : dc_mf_Fliplift
  addOD_M_mf_Door(index?:number) : dc_mf_Door
  addOD_M_mf_Oven(index?:number) : dc_mf_Oven
  addOD_M_mf_Fridge(index?:number) : dc_mf_Fridge
  addOD_M_mf_RackArea(index?:number) : dc_mf_RackArea
  addOD_M_mf_Fixedfront(index?:number) : dc_mf_Fixedfront
  addOD_M_mf_Hob(index?:number) : dc_mf_Hob
  addOD_M_mf_Sink(index?:number) : dc_mf_Sink
}

export interface IFuncParents_mc_DrawerBox01 extends IModBaseProp,  IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_DrawerBoxColor
, IModVarNonNull_mod_DrawerBoxDepthType
, IModVarNonNull_mod_DrawerBoxHeightType
, IModVarNonNull_mod_DrawerBoxOffsetDepth
, IModVarNonNull_mod_DrawerBoxProgram
, IModVarNonNull_mod_DrawerBoxLogic
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_DrawerBoxWeightType
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_DrawerBoxDesign
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_HardwareColor
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_OpeningType
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_ParentName
, IModVarNonNull_mod_PartgroupDrawerWeight
, IModVarNonNull_mod_CarcaseProgram
, IModVarNonNull_mod_GrainLogic

{
  get m(): OD_Base[];
}

export interface IFuncParents_mc_HingeGroup01 extends IModBaseProp,  IModVarNonNull_mod_HingePos1
, IModVarNonNull_mod_HingePos2
, IModVarNonNull_mod_HingePos3
, IModVarNonNull_mod_HingePos4
, IModVarNonNull_mod_HingePos5
, IModVarNonNull_mod_HingePos6
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_FrontType
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_HingeInfo
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_HingeLogic
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_FingergripBtmType
, IModVarNonNull_mod_FingergripTopType
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_HandlePosLogic
, IModVarNonNull_mod_DoorDirection
, IModVarNonNull_mod_InteriorEquipmentHinge
, IModVarNonNull_mod_HingeColor
, IModVarNonNull_mod_MountingPlateType
, IModVarNonNull_mod_Originpos
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_HingeType
, IModVarNonNull_mod_DoorType
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_OpeningAngle
, IModVarNonNull_mod_FlipliftType
, IModVarNonNull_mod_FlipliftHardwareType
, IModVarNonNull_mod_PanelWoodFrameType
, IModVarNonNull_mod_FramePartsWidthHor
, IModVarNonNull_mod_FramePartsWidthVert
, IModVarNonNull_mod_OpeningType

{
  get m(): OD_Base[];
  addOD_M_mc_Hinge01(index?:number) : dc_mc_Hinge01
}

export interface IFuncParents_mc_Storageunit01 extends IModBaseProp,  IModVarNonNull_mod_BackwallPos
, IModVarNonNull_mod_BackwallPosList
, IModVarNonNull_mod_BackwallThk
, IModVarNonNull_mod_CarcaseBackwallConstruction
, IModVarNonNull_mod_CarcaseBackwallConstructionList
, IModVarNonNull_mod_CarcaseConnectionLeftBtm
, IModVarNonNull_mod_CarcaseConnectionLeftTop
, IModVarNonNull_mod_CarcaseConnectionRightBtm
, IModVarNonNull_mod_CarcaseConnectionRightTop
, IModVarNonNull_mod_CarcaseDepth
, IModVarNonNull_mod_CarcaseHeight
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcaseShelfbtmConstruction
, IModVarNonNull_mod_CarcaseShelftopConstruction
, IModVarNonNull_mod_CarcaseVisBack
, IModVarNonNull_mod_CarcaseVisBtm
, IModVarNonNull_mod_CarcaseVisLeft
, IModVarNonNull_mod_CarcaseVisRight
, IModVarNonNull_mod_CarcaseVisTop
, IModVarNonNull_mod_CarcaseWidth
, IModVarNonNull_mod_FingergripQtyMiddle
, IModVarNonNull_mod_FingergripPos1
, IModVarNonNull_mod_FingergripPos2
, IModVarNonNull_mod_FingergripPos3
, IModVarNonNull_mod_FingergripPos4
, IModVarNonNull_mod_FingergripPos5
, IModVarNonNull_mod_FingergripTop
, IModVarNonNull_mod_HangerPosX
, IModVarNonNull_mod_HangerPosY
, IModVarNonNull_mod_RailhortopbackThk
, IModVarNonNull_mod_RailhortopfrontThk
, IModVarNonNull_mod_RailverttopbackThk
, IModVarNonNull_mod_RailverttopfrontThk
, IModVarNonNull_mod_ShelfbtmThk
, IModVarNonNull_mod_ShelffixedOversizeFrontList
, IModVarNonNull_mod_ShelffixedPosList
, IModVarNonNull_mod_ShelffixedThk
, IModVarNonNull_mod_ShelffixedTypeList
, IModVarNonNull_mod_ShelftopThk
, IModVarNonNull_mod_SidepanelleftThk
, IModVarNonNull_mod_SidepanelleftType
, IModVarNonNull_mod_SidepanelrightType
, IModVarNonNull_mod_SidepanelrightThk
, IModVarNonNull_mod_CarcaseBackwallColor
, IModVarNonNull_mod_CarcaseBackwallProgram
, IModVarNonNull_mod_CarcaseColor
, IModVarNonNull_mod_CarcaseOutsideColor
, IModVarNonNull_mod_CarcaseEdgeBackColor
, IModVarNonNull_mod_CarcaseEdgeColor
, IModVarNonNull_mod_CarcaseEdgeFrontColor
, IModVarNonNull_mod_CarcaseProgram
, IModVarNonNull_mod_CarcaseOutsideProgram
, IModVarNonNull_mod_CarcaseShelfbtmOversizeInsideWall
, IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft
, IModVarNonNull_mod_CarcaseShelfbtmOversizeRight
, IModVarNonNull_mod_CarcaseShelftopOversizeInsideWall
, IModVarNonNull_mod_CarcaseShelftopOversizeLeft
, IModVarNonNull_mod_CarcaseShelftopOversizeRight
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop
, IModVarNonNull_mod_CarcaseDistanceWall
, IModVarNonNull_mod_FingergripType
, IModVarNonNull_mod_HangerType
, IModVarNonNull_mod_LightPosX1
, IModVarNonNull_mod_LightPosX2
, IModVarNonNull_mod_LightPosX3
, IModVarNonNull_mod_LightPosX4
, IModVarNonNull_mod_LightPosX5
, IModVarNonNull_mod_LightPart
, IModVarNonNull_mod_LightPosX
, IModVarNonNull_mod_LightPosY
, IModVarNonNull_mod_LightSystem
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_BackwallFixedHeight
, IModVarNonNull_mod_ShelffixedOversizeBackList
, IModVarNonNull_mod_CarcaseSpaceDimension
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_HardwareColor
, IModVarNonNull_mod_CarcasePartConnectionBackHor
, IModVarNonNull_mod_CarcasePartConnectionBackVert
, IModVarNonNull_mod_CarcasePartConnectionBtmVert
, IModVarNonNull_mod_CarcasePartConnectionLeftHor
, IModVarNonNull_mod_CarcasePartConnectionRightHor
, IModVarNonNull_mod_CarcasePartConnectionTopVert
, IModVarNonNull_mod_HangerOffsetPosY
, IModVarNonNull_mod_HangerColor
, IModVarNonNull_mod_SidepanelmiddleThk
, IModVarNonNull_mod_VertDividerInfoList
, IModVarNonNull_mod_CarcaseFrontConstruction
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_LastFrontHeight
, IModVarNonNull_mod_LastFrontName
, IModVarNonNull_mod_HobHeightBlockedSpace
, IModVarNonNull_mod_ShelffixedInfoList
, IModVarNonNull_mod_FrontAreaInfoList
, IModVarNonNull_mod_SlopedCeilingDimensionLogic
, IModVarNonNull_mod_SlopedCeilingConstruction
, IModVarNonNull_mod_SlopeAngle
, IModVarNonNull_mod_BackHeight
, IModVarNonNull_mod_TopDepth
, IModVarNonNull_mod_CarcaseDirection
, IModVarNonNull_mod_CarcaseMovement
, IModVarNonNull_mod_Originpos
, IModVarNonNull_mod_GrainLogic

{
  get m(): OD_Base[];
  addOD_M_mc_StorageunitSidepanel01(index?:number) : dc_mc_StorageunitSidepanel01
  addOD_M_mc_StorageunitShelfbtm01(index?:number) : dc_mc_StorageunitShelfbtm01
  addOD_M_mc_StorageunitShelftop01(index?:number) : dc_mc_StorageunitShelftop01
  addOD_M_mc_StorageunitBackwall01(index?:number) : dc_mc_StorageunitBackwall01
  addOD_M_mc_StorageunitShelffixed01(index?:number) : dc_mc_StorageunitShelffixed01
  addOD_M_mc_LightSystem01(index?:number) : dc_mc_LightSystem01
  addOD_M_mc_HangerSystem01(index?:number) : dc_mc_HangerSystem01
  addOD_M_mc_VertDivider01(index?:number) : dc_mc_VertDivider01
  addOD_M_mc_StorageunitShelftop02(index?:number) : dc_mc_StorageunitShelftop02
  addOD_M_mc_StorageunitShelftop03(index?:number) : dc_mc_StorageunitShelftop03
  addOD_M_mc_StorageunitShelftop04(index?:number) : dc_mc_StorageunitShelftop04
}

export interface IFuncParents_mr_CornerunitStraight_mr_StorageunitSingle extends IModBaseProp,  IModVarNonNull_mod_BackwallFixedHeight
, IModVarNonNull_mod_BackwallPos
, IModVarNonNull_mod_BackwallThk
, IModVarNonNull_mod_CarcaseColor
, IModVarNonNull_mod_CarcaseBackwallColor
, IModVarNonNull_mod_CarcaseBackwallConstruction
, IModVarNonNull_mod_CarcaseProgram
, IModVarNonNull_mod_CarcaseBackwallProgram
, IModVarNonNull_mod_CarcaseConnectionLeftBtm
, IModVarNonNull_mod_CarcaseConnectionLeftTop
, IModVarNonNull_mod_CarcaseConnectionRightBtm
, IModVarNonNull_mod_CarcaseConnectionRightTop
, IModVarNonNull_mod_CarcaseDistanceWall
, IModVarNonNull_mod_CarcaseEdgeBackColor
, IModVarNonNull_mod_CarcaseEdgeColor
, IModVarNonNull_mod_CarcaseEdgeFrontColor
, IModVarNonNull_mod_CarcaseOutsideColor
, IModVarNonNull_mod_CarcaseOutsideProgram
, IModVarNonNull_mod_CarcaseShelfbtmConstruction
, IModVarNonNull_mod_CarcaseShelfbtmOversizeInsideWall
, IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft
, IModVarNonNull_mod_CarcaseShelfbtmOversizeRight
, IModVarNonNull_mod_CarcaseShelftopConstruction
, IModVarNonNull_mod_CarcaseShelftopOversizeInsideWall
, IModVarNonNull_mod_CarcaseShelftopOversizeLeft
, IModVarNonNull_mod_CarcaseShelftopOversizeRight
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop
, IModVarNonNull_mod_CarcaseVisBack
, IModVarNonNull_mod_CarcaseVisBtm
, IModVarNonNull_mod_CarcaseVisLeft
, IModVarNonNull_mod_CarcaseVisRight
, IModVarNonNull_mod_CarcaseVisTop
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_FingergripType
, IModVarNonNull_mod_FrontColor
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_FrontEdgeColor
, IModVarNonNull_mod_FrontEdgeThk
, IModVarNonNull_mod_FrontFrameColor
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_FrontGapHor
, IModVarNonNull_mod_FrontGapVert
, IModVarNonNull_mod_FrontGlassColor
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_HandleColor
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_HandleLength
, IModVarNonNull_mod_HandleLine
, IModVarNonNull_mod_HandlePosLogic
, IModVarNonNull_mod_HandlePosType
, IModVarNonNull_mod_HangerPosX
, IModVarNonNull_mod_HangerPosY
, IModVarNonNull_mod_HangerType
, IModVarNonNull_mod_HardwareColor
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_HeightPosInsertion
, IModVarNonNull_mod_LightPart
, IModVarNonNull_mod_LightPosX
, IModVarNonNull_mod_LightPosX1
, IModVarNonNull_mod_LightPosX2
, IModVarNonNull_mod_LightPosX3
, IModVarNonNull_mod_LightPosX4
, IModVarNonNull_mod_LightPosX5
, IModVarNonNull_mod_LightPosY
, IModVarNonNull_mod_LightSystem
, IModVarNonNull_mod_Model
, IModVarNonNull_mod_OpeningType
, IModVarNonNull_mod_PlinthAreaDesign
, IModVarNonNull_mod_PlinthAreaElementColor
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_PlinthAreaPosBackMatrix
, IModVarNonNull_mod_PlinthAreaPosFrontMatrix
, IModVarNonNull_mod_PlinthAreaPosLeftMatrix
, IModVarNonNull_mod_PlinthAreaPosRightMatrix
, IModVarNonNull_mod_PlinthAreaVisLeft
, IModVarNonNull_mod_PlinthAreaVisRight
, IModVarNonNull_mod_RailhortopbackThk
, IModVarNonNull_mod_RailhortopfrontThk
, IModVarNonNull_mod_RailverttopbackThk
, IModVarNonNull_mod_RailverttopfrontThk
, IModVarNonNull_mod_ShelfadjThk
, IModVarNonNull_mod_ShelfbtmThk
, IModVarNonNull_mod_ShelffixedThk
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_SidepanelrightThk
, IModVarNonNull_mod_SidepanelleftThk
, IModVarNonNull_mod_ShelftopThk
, IModVarNonNull_mod_ParentName
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_FrontGapHorTop
, IModVarNonNull_mod_PlinthAreaExtraItem
, IModVarNonNull_mod_InteriorEquipmentLogic
, IModVarNonNull_mod_ShelvesBackwallFittingConnection
, IModVarNonNull_mod_CarcasePartConnectionBackHor
, IModVarNonNull_mod_CarcasePartConnectionBackVert
, IModVarNonNull_mod_CarcasePartConnectionBtmVert
, IModVarNonNull_mod_CarcasePartConnectionLeftHor
, IModVarNonNull_mod_CarcasePartConnectionRightHor
, IModVarNonNull_mod_CarcasePartConnectionTopVert
, IModVarNonNull_mod_FittingConnectionBtmVert
, IModVarNonNull_mod_FittingConnectionLeftBtm
, IModVarNonNull_mod_FittingConnectionLeftHor
, IModVarNonNull_mod_FittingConnectionLeftTop
, IModVarNonNull_mod_FittingConnectionRightBtm
, IModVarNonNull_mod_FittingConnectionRightHor
, IModVarNonNull_mod_FittingConnectionRightTop
, IModVarNonNull_mod_FittingConnectionTopVert
, IModVarNonNull_mod_HangerOffsetPosY
, IModVarNonNull_mod_HangerColor
, IModVarNonNull_mod_VertDividerType
, IModVarNonNull_mod_SidepanelmiddleThk
, IModVarNonNull_mod_CarcaseFrontConstruction
, IModVarNonNull_mod_CleatThk
, IModVarNonNull_mod_CleatWidth
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_PushtoopenLine
, IModVarNonNull_mod_PushtoopenType
, IModVarNonNull_mod_PushtoopenColor
, IModVarNonNull_mod_PanelWoodFrameType
, IModVarNonNull_mod_PanelWoodFrameFillingType
, IModVarNonNull_mod_FramePartsWidthHor
, IModVarNonNull_mod_FramePartsWidthVert
, IModVarNonNull_mod_CreateCountertop
, IModVarNonNull_mod_CreatePaneltop
, IModVarNonNull_mod_CreateToekick
, IModVarNonNull_mod_CreateFingergrip
, IModVarNonNull_mod_PlinthAreaPositionInfo
, IModVarNonNull_mod_DoorDirection
, IModVarNonNull_mod_SlopeAngle
, IModVarNonNull_mod_SlopedCeilingDimensionLogic
, IModVarNonNull_mod_SlopedCeilingConstruction
, IModVarNonNull_mod_BackHeight
, IModVarNonNull_mod_TopDepth
, IModVarNonNull_mod_FrameFillingWoodColor
, IModVarNonNull_mod_SidepanelrightType
, IModVarNonNull_mod_SidepanelleftType
, IModVarNonNull_mod_GrainLogic
, IModVarNonNull_mod_ShelfadjColor
, IModVarNonNull_mod_FrameFillingColor

{
  get m(): OD_Base[];
  addOD_M_mc_Storageunit01(index?:number) : dc_mc_Storageunit01
  addOD_M_mf_Drawer(index?:number) : dc_mf_Drawer
  addOD_M_mc_PlinthArea01(index?:number) : dc_mc_PlinthArea01
  addOD_M_mf_Door(index?:number) : dc_mf_Door
  addOD_M_mf_RackArea(index?:number) : dc_mf_RackArea
}

export interface IFuncParents_mf_Door extends IModBaseProp,  IModVarNonNull_mod_BackwallPos
, IModVarNonNull_mod_CarcaseBackwallConstruction
, IModVarNonNull_mod_CarcaseDepth
, IModVarNonNull_mod_CarcaseHeight
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcaseWidth
, IModVarNonNull_mod_DoorDirection
, IModVarNonNull_mod_DoorType
, IModVarNonNull_mod_FingergripTop
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_FrontSplit
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_HandleDrill
, IModVarNonNull_mod_HandleLine
, IModVarNonNull_mod_HandlePosLogic
, IModVarNonNull_mod_HingePos1
, IModVarNonNull_mod_HingePos2
, IModVarNonNull_mod_HingePos3
, IModVarNonNull_mod_HingePos4
, IModVarNonNull_mod_HingePos5
, IModVarNonNull_mod_HingePos6
, IModVarNonNull_mod_FrontQtyElements
, IModVarNonNull_mod_ShelffixedThk
, IModVarNonNull_mod_ShelffixedType
, IModVarNonNull_mod_SidepanelleftThk
, IModVarNonNull_mod_SidepanelrightThk
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontColor
, IModVarNonNull_mod_FrontEdgeColor
, IModVarNonNull_mod_FrontEdgeThk
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_FrontGapHor
, IModVarNonNull_mod_FrontGapVert
, IModVarNonNull_mod_FrontOversizeBtm
, IModVarNonNull_mod_FrontOversizeLeft
, IModVarNonNull_mod_FrontOversizeRight
, IModVarNonNull_mod_FrontOversizeTop
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_FrontSplitHeight1
, IModVarNonNull_mod_FrontSplitHeight2
, IModVarNonNull_mod_FrontSplitHeight3
, IModVarNonNull_mod_FrontSplitType1
, IModVarNonNull_mod_FrontSplitType2
, IModVarNonNull_mod_HandleColor
, IModVarNonNull_mod_HandleLength
, IModVarNonNull_mod_HandleOffsetX
, IModVarNonNull_mod_HandleOffsetY
, IModVarNonNull_mod_HandlePosMatrix
, IModVarNonNull_mod_HandlePosLeftMatrix
, IModVarNonNull_mod_HandlePosRightMatrix
, IModVarNonNull_mod_HandlePosType
, IModVarNonNull_mod_HandlestripPos
, IModVarNonNull_mod_HeightPosInsertion
, IModVarNonNull_mod_HingeType
, IModVarNonNull_mod_ShelfadjDrillDistance
, IModVarNonNull_mod_ShelfadjDrillType
, IModVarNonNull_mod_ShelfadjOffsetBack
, IModVarNonNull_mod_ShelfadjOffsetFront
, IModVarNonNull_mod_ShelfadjThk
, IModVarNonNull_mod_ShelfadjDrillinglineOffsetBtm
, IModVarNonNull_mod_ShelfadjDrillinglineOffsetTop
, IModVarNonNull_mod_ShelffixedBtm
, IModVarNonNull_mod_ShelffixedPos
, IModVarNonNull_mod_ShelffixedOffsetFront
, IModVarNonNull_mod_ShelffixedOversizeFront
, IModVarNonNull_mod_ShelffixedOversizeBack
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_InteriorEquipmentLogic
, IModVarNonNull_mod_ShelfadjDesign
, IModVarNonNull_mod_Originpos
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_ParentName
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_FrontGapHorTop
, IModVarNonNull_mod_HingeLogic
, IModVarNonNull_mod_FingergripTopType
, IModVarNonNull_mod_FingergripBtmType
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_MountingPlateType
, IModVarNonNull_mod_InteriorEquipmentHinge
, IModVarNonNull_mod_HingeColor
, IModVarNonNull_mod_ShelffixedTop
, IModVarNonNull_mod_VertDividerType
, IModVarNonNull_mod_SidepanelmiddleThk
, IModVarNonNull_mod_FrontDescriptor
, IModVarNonNull_mod_CarcaseFrontConstruction
, IModVarNonNull_mod_CarcaseSpaceDimension
, IModVarNonNull_mod_CarcaseDirectionInfo
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_VertDividerInfoList
, IModVarNonNull_mod_PushtoopenLine
, IModVarNonNull_mod_PushtoopenOffset
, IModVarNonNull_mod_PushtoopenPosition
, IModVarNonNull_mod_PushtoopenType
, IModVarNonNull_mod_PushtoopenColor
, IModVarNonNull_mod_OpeningType
, IModVarNonNull_mod_FramePartsWidthHor
, IModVarNonNull_mod_FramePartsWidthVert
, IModVarNonNull_mod_PanelWoodFrameFillingType
, IModVarNonNull_mod_PanelWoodFrameType
, IModVarNonNull_mod_FrontHeightSelection
, IModVarNonNull_mod_FrameFillingWoodColor
, IModVarNonNull_mod_FrontGlassColor
, IModVarNonNull_mod_GrainLogic
, IModVarNonNull_mod_ShelfadjColor
, IModVarNonNull_mod_ShelfadjDescriptor
, IModVarNonNull_mod_FrameFillingColor

{
  get m(): OD_Base[];
  addOD_M_mc_Door01(index?:number) : dc_mc_Door01
  addOD_M_mc_ShelfadjGroup01(index?:number) : dc_mc_ShelfadjGroup01
}

export interface IFuncParents_mc_FrontPanel01_mc_PanelWoodFrame01 extends IModBaseProp,  IModVarNonNull_mod_Depth
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_FrontType
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_FrontColor
, IModVarNonNull_mod_FrontEdgeColor
, IModVarNonNull_mod_FrontEdgeThk
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_PartInfo
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_HandlePosType
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_FrontpanelWeightCalculations
, IModVarNonNull_mod_DoorDirection
, IModVarNonNull_mod_FlipliftType

{
  get m(): OD_Base[];
}

export interface IFuncParents_mc_Handle01 extends IModBaseProp,  IModVarNonNull_mod_Depth
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_HandleDrill
, IModVarNonNull_mod_HandleLine
, IModVarNonNull_mod_HandlePosLogic
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_HandleColor
, IModVarNonNull_mod_HandleLength
, IModVarNonNull_mod_HandleOffsetX
, IModVarNonNull_mod_HandleOffsetY
, IModVarNonNull_mod_HandlePosMatrix
, IModVarNonNull_mod_HandlePosType
, IModVarNonNull_mod_HeightPosInsertion
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_PartInfo
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_ProcessingId
, IModVarNonNull_mod_ProcessingLibrary
, IModVarNonNull_mod_HardwareId
, IModVarNonNull_mod_Model3DGroupName
, IModVarNonNull_mod_Rotation
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_HandleWeightCalculations
, IModVarNonNull_mod_FrontType
, IModVarNonNull_mod_HardwareTypeList

{
  get m(): OD_Base[];
}

export interface IFuncParents_mc_Door01_mc_Fliplift01 extends IModBaseProp,  IModVarNonNull_mod_CarcaseDepth
, IModVarNonNull_mod_CarcaseHeight
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcaseWidth
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_HandleDrill
, IModVarNonNull_mod_HandleLine
, IModVarNonNull_mod_HandlePosLogic
, IModVarNonNull_mod_FrontQtyElements
, IModVarNonNull_mod_ShelffixedType
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontColor
, IModVarNonNull_mod_FrontEdgeColor
, IModVarNonNull_mod_FrontEdgeThk
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_FrontGapHor
, IModVarNonNull_mod_FrontGapVert
, IModVarNonNull_mod_FrontOversizeBtm
, IModVarNonNull_mod_FrontOversizeLeft
, IModVarNonNull_mod_FrontOversizeRight
, IModVarNonNull_mod_FrontOversizeTop
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_HandleColor
, IModVarNonNull_mod_HandleLength
, IModVarNonNull_mod_HandleOffsetX
, IModVarNonNull_mod_HandleOffsetY
, IModVarNonNull_mod_HandlePosMatrix
, IModVarNonNull_mod_HandlePosType
, IModVarNonNull_mod_HandlestripPos
, IModVarNonNull_mod_HeightPosInsertion
, IModVarNonNull_mod_HingeType
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_ShelffixedBtm
, IModVarNonNull_mod_ShelffixedPos
, IModVarNonNull_mod_HandleDesign
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_Originpos
, IModVarNonNull_mod_CarcaseSpaceDimension
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_PushtoopenLine
, IModVarNonNull_mod_PushtoopenPosition
, IModVarNonNull_mod_PushtoopenType
, IModVarNonNull_mod_PushtoopenOffset
, IModVarNonNull_mod_PushtoopenColor
, IModVarNonNull_mod_OpeningType
, IModVarNonNull_mod_OpeningAngle
, IModVarNonNull_mod_FrameFillingWoodColor
, IModVarNonNull_mod_FrontGlassColor
, IModVarNonNull_mod_FrameFillingColor

{
  get m(): OD_Base[];
  addOD_M_mc_FrontPanelGlass01(index?:number) : dc_mc_FrontPanelGlass01
  addOD_M_mc_FrontPanel01(index?:number) : dc_mc_FrontPanel01
  addOD_M_mc_Handle01(index?:number) : dc_mc_Handle01
  addOD_M_mc_Handlestrip01(index?:number) : dc_mc_Handlestrip01
  addOD_M_mc_MetalFrame01(index?:number) : dc_mc_MetalFrame01
  addOD_M_mc_ThermoformedPanel01(index?:number) : dc_mc_ThermoformedPanel01
  addOD_M_mc_Pushtoopen01(index?:number) : dc_mc_Pushtoopen01
  addOD_M_mc_HingeGroup01(index?:number) : dc_mc_HingeGroup01
  addOD_M_mc_PanelWoodFrame01(index?:number) : dc_mc_PanelWoodFrame01
}

export interface IFuncParents_mc_FlipliftHardware01 extends IModBaseProp,  IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_FlipliftFrontHeightList
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FlipliftType
, IModVarNonNull_mod_Width
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_FlipliftFrontNumber
, IModVarNonNull_mod_FlipliftHardwareColor
, IModVarNonNull_mod_FlipliftHardwareType
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_OpeningType
, IModVarNonNull_mod_OpeningAngle
, IModVarNonNull_mod_FrontpanelWeightCalculations
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_FrontType
, IModVarNonNull_mod_HardwareColor
, IModVarNonNull_mod_HardwareTypeList
, IModVarNonNull_mod_FrontOverlayInfo
, IModVarNonNull_mod_HandleWeightCalculations
, IModVarNonNull_mod_FlipliftLogic

{
  get m(): OD_Base[];
}

export interface IFuncParents_mc_CornerFillerFront01_mc_FillerFront01 extends IModBaseProp,  IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_FingergripTop
, IModVarNonNull_mod_FrontColor
, IModVarNonNull_mod_FrontDesign
, IModVarNonNull_mod_FrontEdgeColor
, IModVarNonNull_mod_FrontEdgeThk
, IModVarNonNull_mod_FrontGapCarcase
, IModVarNonNull_mod_FrontGapHor
, IModVarNonNull_mod_FrontGapVert
, IModVarNonNull_mod_FrontId
, IModVarNonNull_mod_FrontOversizeBtm
, IModVarNonNull_mod_FrontOversizeTop
, IModVarNonNull_mod_FrontPosStart
, IModVarNonNull_mod_FrontProgram
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_ParentName
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_FrontWidth
, IModVarNonNull_mod_FrontHeight
, IModVarNonNull_mod_FrontThk
, IModVarNonNull_mod_DoorDirection
, IModVarNonNull_mod_FillerType
, IModVarNonNull_mod_FillerHardware
, IModVarNonNull_mod_Direction
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_FillerHardwareInfo
, IModVarNonNull_mod_Originpos
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_FingergripTopType
, IModVarNonNull_mod_FingergripBtmType

{
  get m(): OD_Base[];
  addOD_M_mc_FrontPanel01(index?:number) : dc_mc_FrontPanel01
  addOD_M_mc_PanelWoodFrame01(index?:number) : dc_mc_PanelWoodFrame01
  addOD_M_mc_MetalFrame01(index?:number) : dc_mc_MetalFrame01
  addOD_M_mc_ThermoformedPanel01(index?:number) : dc_mc_ThermoformedPanel01
}

export interface IFuncParents_mc_Cornerunit01 extends IModBaseProp,  IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_CarcaseColor
, IModVarNonNull_mod_CarcaseConnectionLeftBtm
, IModVarNonNull_mod_CarcaseConnectionLeftTop
, IModVarNonNull_mod_CarcaseConnectionRightBtm
, IModVarNonNull_mod_CarcaseConnectionRightTop
, IModVarNonNull_mod_DepthLeft
, IModVarNonNull_mod_DepthRight
, IModVarNonNull_mod_CarcaseEdgeBackColor
, IModVarNonNull_mod_CarcaseEdgeColor
, IModVarNonNull_mod_CarcaseEdgeFrontColor
, IModVarNonNull_mod_CarcaseFrontConstruction
, IModVarNonNull_mod_Height
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcaseOutsideColor
, IModVarNonNull_mod_CarcaseOutsideProgram
, IModVarNonNull_mod_CarcasePartConnectionBackHor
, IModVarNonNull_mod_CarcasePartConnectionBtmVert
, IModVarNonNull_mod_CarcasePartConnectionBackVert
, IModVarNonNull_mod_CarcasePartConnectionLeftHor
, IModVarNonNull_mod_CarcasePartConnectionTopVert
, IModVarNonNull_mod_CarcasePartInfo
, IModVarNonNull_mod_CarcasePartConnectionRightHor
, IModVarNonNull_mod_CarcaseProgram
, IModVarNonNull_mod_CarcaseShelfbtmConstruction
, IModVarNonNull_mod_CarcaseShelfbtmOversizeLeft
, IModVarNonNull_mod_CarcaseShelfbtmOversizeRight
, IModVarNonNull_mod_CarcaseShelftopConstruction
, IModVarNonNull_mod_CarcaseShelftopOversizeLeft
, IModVarNonNull_mod_CarcaseShelftopOversizeRight
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeTop
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeInsideWall
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeTop
, IModVarNonNull_mod_CarcaseVisBack
, IModVarNonNull_mod_CarcaseVisBtm
, IModVarNonNull_mod_CarcaseVisLeft
, IModVarNonNull_mod_CarcaseVisTop
, IModVarNonNull_mod_CarcaseVisRight
, IModVarNonNull_mod_WidthLeft
, IModVarNonNull_mod_WidthRight
, IModVarNonNull_mod_FingergripPos1
, IModVarNonNull_mod_FingergripPos2
, IModVarNonNull_mod_FingergripPos3
, IModVarNonNull_mod_FingergripPos4
, IModVarNonNull_mod_FingergripPos5
, IModVarNonNull_mod_FingergripQtyMiddle
, IModVarNonNull_mod_FingergripTop
, IModVarNonNull_mod_FingergripType
, IModVarNonNull_mod_FrontAreaInfoList
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_ShelfbtmThk
, IModVarNonNull_mod_ShelftopThk
, IModVarNonNull_mod_SidepanelleftThk
, IModVarNonNull_mod_SidepanelleftType
, IModVarNonNull_mod_SidepanelrightThk
, IModVarNonNull_mod_SidepanelrightType
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_TotalDimLeft
, IModVarNonNull_mod_TotalDimRight
, IModVarNonNull_mod_SlopeAngle
, IModVarNonNull_mod_SlopedCeilingConstruction
, IModVarNonNull_mod_SlopedCeilingDimensionLogic
, IModVarNonNull_mod_BackHeight
, IModVarNonNull_mod_TopDepth
, IModVarNonNull_mod_CarcaseDirection
, IModVarNonNull_mod_VertDividerInfoList
, IModVarNonNull_mod_GrainLogic

{
  get m(): OD_Base[];
  addOD_M_mc_StorageunitSidepanel01(index?:number) : dc_mc_StorageunitSidepanel01
}

export interface IFuncParents_mc_Bracket01_mr_Shelves extends IModBaseProp,  IModVarNonNull_mod_Width
, IModVarNonNull_mod_Depth
, IModVarNonNull_mod_ShelvesBrackets
, IModVarNonNull_mod_ShelvesThk
, IModVarNonNull_mod_ShelvesColor

{
  get m(): OD_Base[];
}

export interface IFuncParents_mc_PlinthArea01 extends IModBaseProp,  IModVarNonNull_mod_CarcaseDepth
, IModVarNonNull_mod_CarcaseId
, IModVarNonNull_mod_CarcaseWidth
, IModVarNonNull_mod_PlinthAreaVisLeft
, IModVarNonNull_mod_PlinthAreaVisRight
, IModVarNonNull_mod_SidepanelleftThk
, IModVarNonNull_mod_SidepanelrightThk
, IModVarNonNull_mod_CarcaseSidepanelleftOversizeBtm
, IModVarNonNull_mod_CarcaseSidepanelrightOversizeBtm
, IModVarNonNull_mod_PlinthAreaHeight
, IModVarNonNull_mod_PlinthAreaPosLeftMatrix
, IModVarNonNull_mod_PlinthAreaDesign
, IModVarNonNull_mod_PlinthAreaPosBackMatrix
, IModVarNonNull_mod_PlinthAreaPosFrontMatrix
, IModVarNonNull_mod_PlinthAreaPosRightMatrix
, IModVarNonNull_mod_PlinthAreaPosLogic
, IModVarNonNull_mod_ShelfbtmThk
, IModVarNonNull_mod_TypeElement
, IModVarNonNull_mod_PlinthAreaElementColor
, IModVarNonNull_mod_ModuleName
, IModVarNonNull_mod_PlinthAreaExtraItem
, IModVarNonNull_mod_PlinthAreaPositionInfo
, IModVarNonNull_mod_LegInsertion
, IModVarNonNull_mod_Weight

{
  get m(): OD_Base[];
  addOD_M_mc_Leg01(index?:number) : dc_mc_Leg01
}

