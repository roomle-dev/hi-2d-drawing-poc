import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mr_CornerFiller, dc_mr_CornerFiller, adc_mr_CornerFiller } from '../internal/modules/mr_CornerFiller'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Cornerunit01, OD_M_mc_Cornerunit01 } from '../internal/modules/mc_Cornerunit01'
import { dc_mf_CornerFillerFront, OD_M_mf_CornerFillerFront } from '../internal/modules/mf_CornerFillerFront'
import { ct_tab_ApplianceGraphicLibrary, ICT_tab_ApplianceGraphicLibrary } from '../internal/custom-tables/tab_ApplianceGraphicLibrary'
import { ct_tab_BoardLibrary, ICT_tab_BoardLibrary } from '../internal/custom-tables/tab_BoardLibrary'
import { ct_tab_BoardMapping, ICT_tab_BoardMapping } from '../internal/custom-tables/tab_BoardMapping'
import { ct_tab_BracketConstruction, ICT_tab_BracketConstruction } from '../internal/custom-tables/tab_BracketConstruction'
import { ct_tab_BracketMapping, ICT_tab_BracketMapping } from '../internal/custom-tables/tab_BracketMapping'
import { ct_tab_CarcaseBackwallConstruction, ICT_tab_CarcaseBackwallConstruction } from '../internal/custom-tables/tab_CarcaseBackwallConstruction'
import { ct_tab_CarcaseBackwallSettings, ICT_tab_CarcaseBackwallSettings } from '../internal/custom-tables/tab_CarcaseBackwallSettings'
import { ct_tab_CarcaseCornerunitConstruction, ICT_tab_CarcaseCornerunitConstruction } from '../internal/custom-tables/tab_CarcaseCornerunitConstruction'
import { ct_tab_CarcasePartConnectionCalculations, ICT_tab_CarcasePartConnectionCalculations } from '../internal/custom-tables/tab_CarcasePartConnectionCalculations'
import { ct_tab_CarcasePartConnectionMapping, ICT_tab_CarcasePartConnectionMapping } from '../internal/custom-tables/tab_CarcasePartConnectionMapping'
import { ct_tab_CarcasePartGrainDirectionSettings, ICT_tab_CarcasePartGrainDirectionSettings } from '../internal/custom-tables/tab_CarcasePartGrainDirectionSettings'
import { ct_tab_CarcasePartsShape, ICT_tab_CarcasePartsShape } from '../internal/custom-tables/tab_CarcasePartsShape'
import { ct_tab_CarcaseShelfbtmSettings, ICT_tab_CarcaseShelfbtmSettings } from '../internal/custom-tables/tab_CarcaseShelfbtmSettings'
import { ct_tab_CarcaseShelftopSettings, ICT_tab_CarcaseShelftopSettings } from '../internal/custom-tables/tab_CarcaseShelftopSettings'
import { ct_tab_CarcaseSidepanelSettings, ICT_tab_CarcaseSidepanelSettings } from '../internal/custom-tables/tab_CarcaseSidepanelSettings'
import { ct_tab_CarcaseSlopedCeilingDimension, ICT_tab_CarcaseSlopedCeilingDimension } from '../internal/custom-tables/tab_CarcaseSlopedCeilingDimension'
import { ct_tab_CarcaseStorageunitConstruction, ICT_tab_CarcaseStorageunitConstruction } from '../internal/custom-tables/tab_CarcaseStorageunitConstruction'
import { ct_tab_CornerunitStraightConstruction, ICT_tab_CornerunitStraightConstruction } from '../internal/custom-tables/tab_CornerunitStraightConstruction'
import { ct_tab_DishwasherConstruction, ICT_tab_DishwasherConstruction } from '../internal/custom-tables/tab_DishwasherConstruction'
import { ct_tab_DishwasherMapping, ICT_tab_DishwasherMapping } from '../internal/custom-tables/tab_DishwasherMapping'
import { ct_tab_DoorSettings, ICT_tab_DoorSettings } from '../internal/custom-tables/tab_DoorSettings'
import { ct_tab_DrawerBoxColorMapping, ICT_tab_DrawerBoxColorMapping } from '../internal/custom-tables/tab_DrawerBoxColorMapping'
import { ct_tab_DrawerBoxConstruction, ICT_tab_DrawerBoxConstruction } from '../internal/custom-tables/tab_DrawerBoxConstruction'
import { ct_tab_DrawerBoxDimensionMapping, ICT_tab_DrawerBoxDimensionMapping } from '../internal/custom-tables/tab_DrawerBoxDimensionMapping'
import { ct_tab_DrawerBoxExtraItemSettings, ICT_tab_DrawerBoxExtraItemSettings } from '../internal/custom-tables/tab_DrawerBoxExtraItemSettings'
import { ct_tab_DrawerBoxInsertionSettings, ICT_tab_DrawerBoxInsertionSettings } from '../internal/custom-tables/tab_DrawerBoxInsertionSettings'
import { ct_tab_DrawerBoxMapping, ICT_tab_DrawerBoxMapping } from '../internal/custom-tables/tab_DrawerBoxMapping'
import { ct_tab_DrawerBoxWeightTypeSettings, ICT_tab_DrawerBoxWeightTypeSettings } from '../internal/custom-tables/tab_DrawerBoxWeightTypeSettings'
import { ct_tab_DuststripMapping, ICT_tab_DuststripMapping } from '../internal/custom-tables/tab_DuststripMapping'
import { ct_tab_EdgeClassSettings, ICT_tab_EdgeClassSettings } from '../internal/custom-tables/tab_EdgeClassSettings'
import { ct_tab_EdgeFrameSettings, ICT_tab_EdgeFrameSettings } from '../internal/custom-tables/tab_EdgeFrameSettings'
import { ct_tab_EdgeJointMapping, ICT_tab_EdgeJointMapping } from '../internal/custom-tables/tab_EdgeJointMapping'
import { ct_tab_EdgeJointSettings, ICT_tab_EdgeJointSettings } from '../internal/custom-tables/tab_EdgeJointSettings'
import { ct_tab_EdgeLibrary, ICT_tab_EdgeLibrary } from '../internal/custom-tables/tab_EdgeLibrary'
import { ct_tab_EdgeMapping, ICT_tab_EdgeMapping } from '../internal/custom-tables/tab_EdgeMapping'
import { ct_tab_EdgeNumberSettings, ICT_tab_EdgeNumberSettings } from '../internal/custom-tables/tab_EdgeNumberSettings'
import { ct_tab_EdgeSettings, ICT_tab_EdgeSettings } from '../internal/custom-tables/tab_EdgeSettings'
import { ct_tab_ErrorList, ICT_tab_ErrorList } from '../internal/custom-tables/tab_ErrorList'
import { ct_tab_FillerHardwareSettings, ICT_tab_FillerHardwareSettings } from '../internal/custom-tables/tab_FillerHardwareSettings'
import { ct_tab_FillerSettings, ICT_tab_FillerSettings } from '../internal/custom-tables/tab_FillerSettings'
import { ct_tab_FlipliftColorMapping, ICT_tab_FlipliftColorMapping } from '../internal/custom-tables/tab_FlipliftColorMapping'
import { ct_tab_FlipliftConstruction, ICT_tab_FlipliftConstruction } from '../internal/custom-tables/tab_FlipliftConstruction'
import { ct_tab_FlipliftMapping, ICT_tab_FlipliftMapping } from '../internal/custom-tables/tab_FlipliftMapping'
import { ct_tab_FlipliftSettings, ICT_tab_FlipliftSettings } from '../internal/custom-tables/tab_FlipliftSettings'
import { ct_tab_FlipliftWeightTypeMapping, ICT_tab_FlipliftWeightTypeMapping } from '../internal/custom-tables/tab_FlipliftWeightTypeMapping'
import { ct_tab_FramePartConnectionMapping, ICT_tab_FramePartConnectionMapping } from '../internal/custom-tables/tab_FramePartConnectionMapping'
import { ct_tab_FridgeConstruction, ICT_tab_FridgeConstruction } from '../internal/custom-tables/tab_FridgeConstruction'
import { ct_tab_FridgeMapping, ICT_tab_FridgeMapping } from '../internal/custom-tables/tab_FridgeMapping'
import { ct_tab_FrontConstruction, ICT_tab_FrontConstruction } from '../internal/custom-tables/tab_FrontConstruction'
import { ct_tab_FrontEdgeColorMapping, ICT_tab_FrontEdgeColorMapping } from '../internal/custom-tables/tab_FrontEdgeColorMapping'
import { ct_tab_FrontPanelConstruction, ICT_tab_FrontPanelConstruction } from '../internal/custom-tables/tab_FrontPanelConstruction'
import { ct_tab_FrontPartGrainDirectionSettings, ICT_tab_FrontPartGrainDirectionSettings } from '../internal/custom-tables/tab_FrontPartGrainDirectionSettings'
import { ct_tab_GrainDirectionSettings, ICT_tab_GrainDirectionSettings } from '../internal/custom-tables/tab_GrainDirectionSettings'
import { ct_tab_GrainSettings, ICT_tab_GrainSettings } from '../internal/custom-tables/tab_GrainSettings'
import { ct_tab_GraphicFileLibrary, ICT_tab_GraphicFileLibrary } from '../internal/custom-tables/tab_GraphicFileLibrary'
import { ct_tab_GraphicLibrary, ICT_tab_GraphicLibrary } from '../internal/custom-tables/tab_GraphicLibrary'
import { ct_tab_GraphicLibraryMapping, ICT_tab_GraphicLibraryMapping } from '../internal/custom-tables/tab_GraphicLibraryMapping'
import { ct_tab_HandleConstruction, ICT_tab_HandleConstruction } from '../internal/custom-tables/tab_HandleConstruction'
import { ct_tab_HandleLengthMapping, ICT_tab_HandleLengthMapping } from '../internal/custom-tables/tab_HandleLengthMapping'
import { ct_tab_HandleMapping, ICT_tab_HandleMapping } from '../internal/custom-tables/tab_HandleMapping'
import { ct_tab_HandleSettings, ICT_tab_HandleSettings } from '../internal/custom-tables/tab_HandleSettings'
import { ct_tab_HangerMapping, ICT_tab_HangerMapping } from '../internal/custom-tables/tab_HangerMapping'
import { ct_tab_HangerSettings, ICT_tab_HangerSettings } from '../internal/custom-tables/tab_HangerSettings'
import { ct_tab_HardwareDrillHorLibrary, ICT_tab_HardwareDrillHorLibrary } from '../internal/custom-tables/tab_HardwareDrillHorLibrary'
import { ct_tab_HardwareDrillVertLibrary, ICT_tab_HardwareDrillVertLibrary } from '../internal/custom-tables/tab_HardwareDrillVertLibrary'
import { ct_tab_HardwareLibrary, ICT_tab_HardwareLibrary } from '../internal/custom-tables/tab_HardwareLibrary'
import { ct_tab_HardwareLibraryMapping, ICT_tab_HardwareLibraryMapping } from '../internal/custom-tables/tab_HardwareLibraryMapping'
import { ct_tab_HardwareMillingLibrary, ICT_tab_HardwareMillingLibrary } from '../internal/custom-tables/tab_HardwareMillingLibrary'
import { ct_tab_HardwareSettings, ICT_tab_HardwareSettings } from '../internal/custom-tables/tab_HardwareSettings'
import { ct_tab_HingeConstruction, ICT_tab_HingeConstruction } from '../internal/custom-tables/tab_HingeConstruction'
import { ct_tab_HingeDrillingDistance, ICT_tab_HingeDrillingDistance } from '../internal/custom-tables/tab_HingeDrillingDistance'
import { ct_tab_HingeMapping, ICT_tab_HingeMapping } from '../internal/custom-tables/tab_HingeMapping'
import { ct_tab_HingePosition, ICT_tab_HingePosition } from '../internal/custom-tables/tab_HingePosition'
import { ct_tab_HingeSettings, ICT_tab_HingeSettings } from '../internal/custom-tables/tab_HingeSettings'
import { ct_tab_HobConstruction, ICT_tab_HobConstruction } from '../internal/custom-tables/tab_HobConstruction'
import { ct_tab_HobMapping, ICT_tab_HobMapping } from '../internal/custom-tables/tab_HobMapping'
import { ct_tab_HoodMapping, ICT_tab_HoodMapping } from '../internal/custom-tables/tab_HoodMapping'
import { ct_tab_MaterialMapping, ICT_tab_MaterialMapping } from '../internal/custom-tables/tab_MaterialMapping'
import { ct_tab_ObjectMapping, ICT_tab_ObjectMapping } from '../internal/custom-tables/tab_ObjectMapping'
import { ct_tab_OvenConstruction, ICT_tab_OvenConstruction } from '../internal/custom-tables/tab_OvenConstruction'
import { ct_tab_OvenMapping, ICT_tab_OvenMapping } from '../internal/custom-tables/tab_OvenMapping'
import { ct_tab_PanelWoodFrameConstruction, ICT_tab_PanelWoodFrameConstruction } from '../internal/custom-tables/tab_PanelWoodFrameConstruction'
import { ct_tab_PartConnectionSettings, ICT_tab_PartConnectionSettings } from '../internal/custom-tables/tab_PartConnectionSettings'
import { ct_tab_PartOverdimensionSettings, ICT_tab_PartOverdimensionSettings } from '../internal/custom-tables/tab_PartOverdimensionSettings'
import { ct_tab_PartSettings, ICT_tab_PartSettings } from '../internal/custom-tables/tab_PartSettings'
import { ct_tab_PartsGraphicRotation, ICT_tab_PartsGraphicRotation } from '../internal/custom-tables/tab_PartsGraphicRotation'
import { ct_tab_PlinthAreaConstruction, ICT_tab_PlinthAreaConstruction } from '../internal/custom-tables/tab_PlinthAreaConstruction'
import { ct_tab_PlinthAreaMapping, ICT_tab_PlinthAreaMapping } from '../internal/custom-tables/tab_PlinthAreaMapping'
import { ct_tab_PlinthAreaSettings, ICT_tab_PlinthAreaSettings } from '../internal/custom-tables/tab_PlinthAreaSettings'
import { ct_tab_ProcessingMapping, ICT_tab_ProcessingMapping } from '../internal/custom-tables/tab_ProcessingMapping'
import { ct_tab_PullOutElementColorMapping, ICT_tab_PullOutElementColorMapping } from '../internal/custom-tables/tab_PullOutElementColorMapping'
import { ct_tab_PullOutHardwareInsertionSettings, ICT_tab_PullOutHardwareInsertionSettings } from '../internal/custom-tables/tab_PullOutHardwareInsertionSettings'
import { ct_tab_PullOutMapping, ICT_tab_PullOutMapping } from '../internal/custom-tables/tab_PullOutMapping'
import { ct_tab_PullOutSettings, ICT_tab_PullOutSettings } from '../internal/custom-tables/tab_PullOutSettings'
import { ct_tab_PushtoopenMapping, ICT_tab_PushtoopenMapping } from '../internal/custom-tables/tab_PushtoopenMapping'
import { ct_tab_PushtoopenSettings, ICT_tab_PushtoopenSettings } from '../internal/custom-tables/tab_PushtoopenSettings'
import { ct_tab_SawingAngleLibrary, ICT_tab_SawingAngleLibrary } from '../internal/custom-tables/tab_SawingAngleLibrary'
import { ct_tab_SawingVertLibrary, ICT_tab_SawingVertLibrary } from '../internal/custom-tables/tab_SawingVertLibrary'
import { ct_tab_ShelfadjDrillSettings, ICT_tab_ShelfadjDrillSettings } from '../internal/custom-tables/tab_ShelfadjDrillSettings'
import { ct_tab_ShelfadjQtyPosSettings, ICT_tab_ShelfadjQtyPosSettings } from '../internal/custom-tables/tab_ShelfadjQtyPosSettings'
import { ct_tab_ShelfadjSettings, ICT_tab_ShelfadjSettings } from '../internal/custom-tables/tab_ShelfadjSettings'
import { ct_tab_SinkConstruction, ICT_tab_SinkConstruction } from '../internal/custom-tables/tab_SinkConstruction'
import { ct_tab_SinkMapping, ICT_tab_SinkMapping } from '../internal/custom-tables/tab_SinkMapping'
import { ct_tab_SlopedCeilingSettings, ICT_tab_SlopedCeilingSettings } from '../internal/custom-tables/tab_SlopedCeilingSettings'
import { CKind, Contour, GenerationMethod, Matrix4, Vector3 } from '../internal/base'
import { Dock, IDockingInfo, FaceKey, IPartBase, MatrixHelper, ModuleHelper, PartHelper } from '../internal/mod-base'
declare function uuidv4(): string;
//#endregion Imports

export function mr_CornerFiller_createBuildPlan(this: cbp_mr_CornerFiller):void {
  internal_enterModuleCreateBuildPlan('mr_CornerFiller', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mr_CornerFiller_CREATEBUILDPLAN

  // Schuler Consulting
	// Create: July 2025
	// By Ludwig Weber
	// Purpose: CabinetLibrary
	//
	// Description:
	// Insert the contours for the generation modules
	//
	// Revisions:
	//
  //======================================================================

	//======================================================================
	//          Initialize
	//======================================================================

	const {
		CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE,
		CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT,
		CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR,
		CONTOUR_ATTRIBUTE_OWNER_ID,
		CONTOUR_ATTRIBUTE_OWNER_TYPE,
		CONTOUR_ATTRIBUTE_ADD_TOEKICK,
		mr_CornerunitStraight,
	} = GlobalFunc.process_MathLongparts();

  //===================================================
  //          Calculate Carcase Dimensions
  //===================================================

  let widthLeft: number = 0;
  let widthRight: number = 0;
  let depthRight: number = 0;
  let depthLeft: number = 0;
  let totalDimLeft: number = 0;
  let totalDimRight: number = 0;

  if (this.mod_CornerunitDimensionLogic == 'BasedInFrontDimension') {
    widthLeft = this.mod_WidthLeft;
    widthRight = this.mod_WidthRight;
    depthRight = this.mod_DepthRight;
    depthLeft = this.mod_DepthLeft; 
    totalDimLeft = depthRight + widthLeft;
    totalDimRight = depthLeft + widthRight; 
  }
  else if (this.mod_CornerunitDimensionLogic == 'BasedInWallDistance') {
    totalDimLeft = this.mod_TotalDimLeft;
    totalDimRight = this.mod_TotalDimRight;
    depthRight = this.mod_DepthRight;
    depthLeft = this.mod_DepthLeft;
    widthLeft = totalDimLeft - depthRight;
    widthRight = totalDimRight - depthLeft;
  }

  const plinthAreaHeight = (this.mod_PlinthAreaDesign_matrix?.PlinthAreaType !== 'None' ? (this.mod_PlinthAreaHeight ?? 0) : 0);

  //======================================================================
  // Countertop
  //======================================================================

  // Calculate the bounds of the contours
  //----------------------------------------------

  const countertopContourBounds = {
    xMin: 0,
    xMid: depthLeft,
    xMax: totalDimRight,

    zMin: 0,
    zMid: depthRight,
    zMax: totalDimLeft,

    h: this.mod_Height + plinthAreaHeight,
  };

  // Add the contours
  //----------------------------------------------

  if (this.mod_CreateCountertop) {

    // Left element
    const contourCountertopStraightPart = Contour
      .M(countertopContourBounds.xMin, countertopContourBounds.zMin)
      .L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMin)
      .L(CKind.Right, countertopContourBounds.xMax, countertopContourBounds.zMid)
      .L(CKind.Front, countertopContourBounds.xMin, countertopContourBounds.zMid)
      .Z(CKind.Left)
		;

    contourCountertopStraightPart.attributes
      .set('mod_CarcaseDirection', 'Left')
      .set('mod_CarcaseVisLeft', 0)
      .set('mod_CarcaseVisRight', 0)
      .set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
      .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
      .set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT);

    this.addGenerationContour(
      GenerationMethod.Countertop,
      countertopContourBounds.h,
      contourCountertopStraightPart,
    );

    // Right element
    const contourCountertopPerpendicularPart = Contour
      .M(countertopContourBounds.xMin, countertopContourBounds.zMax)
      .L(CKind.Back, countertopContourBounds.xMin, countertopContourBounds.zMin)
      .L(CKind.Right, countertopContourBounds.xMid, countertopContourBounds.zMin)
      .L(CKind.Front, countertopContourBounds.xMid, countertopContourBounds.zMax)
      .Z(CKind.Left)
    ;

    contourCountertopPerpendicularPart.attributes
      .set('mod_CarcaseDirection', 'Left')
      .set('mod_CarcaseVisLeft', 0)
      .set('mod_CarcaseVisRight', 0)
      .set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
      .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
      .set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR);

    this.addGenerationContour(
      GenerationMethod.Countertop,
      countertopContourBounds.h,
      contourCountertopPerpendicularPart,
    );
  }

  //======================================================================
  // Paneltop
  //======================================================================

  if (this.mod_CreatePaneltop) {

  }
  
  //======================================================================
  // Toekick
  //======================================================================
  
  if (this.mod_CreateToekick && this.mod_PlinthAreaDesign !== "10") {

    // Calculate the bounds of the contours
    //----------------------------------------------
  
    let legPositionInfo;
    try {
      legPositionInfo = JSON.parse(this.mod_PlinthAreaPositionInfo[0]);
    } 
    catch {
      logError(`Could not parse this.mod_PlinthAreaPositionInfo[0] in mr_CornerunitStraight ${this._id}. Toekick will not be recessed correctly.`);
    }

    const LineLeft = legPositionInfo?.LineLeft ?? 0;
    const LineRight = legPositionInfo?.LineRight ?? 0;
    const LineFront = legPositionInfo?.LineFront ?? 0;
    const LineBack = legPositionInfo?.LineBack ?? 0;

    const mod_PlinthAreaVisLeft = this.mod_PlinthAreaVisLeft ?? false;
    const mod_PlinthAreaVisRight = this.mod_PlinthAreaVisRight ?? false;

    const toekickContourBounds = {
      xMin: LineBack,
      xMid: depthLeft - LineFront,
      xMax: totalDimRight,

      zMin: LineBack,
      zMid: depthRight - LineFront,  // Ecke
      zMax: totalDimLeft,

      h: plinthAreaHeight,
    };

    // Add the contours
    //----------------------------------------------

    // Left element
    const contourToekickStraightPart = Contour
      .M(toekickContourBounds.xMin, toekickContourBounds.zMin)
      .L(CKind.Back, toekickContourBounds.xMax, toekickContourBounds.zMin)
      .L(CKind.Right, toekickContourBounds.xMax, toekickContourBounds.zMid)
      .L(CKind.Front, toekickContourBounds.xMin, toekickContourBounds.zMid)
      .Z(CKind.Left);

    contourToekickStraightPart.attributes
      .set('mod_CarcaseDirection', 'Left')
      .set('mod_PlinthAreaVisLeft', mod_PlinthAreaVisLeft ? 1 : 0)
      .set('mod_PlinthAreaVisRight', mod_PlinthAreaVisRight ? 1 : 0)
      .set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
      .set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, 1)
      .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
      .set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT);

    this.addGenerationContour(
      GenerationMethod.Toekick,
      toekickContourBounds.h,
      contourToekickStraightPart,
    );

    // Right element
    const contourToekickPerpendicularPart = Contour
      .M(toekickContourBounds.xMin, toekickContourBounds.zMax)
      .L(CKind.Back, toekickContourBounds.xMin, toekickContourBounds.zMin)
      .L(CKind.Right, toekickContourBounds.xMid, toekickContourBounds.zMin)
      .L(CKind.Front, toekickContourBounds.xMid, toekickContourBounds.zMax)
      .Z(CKind.Left);

    contourToekickPerpendicularPart.attributes
      .set('mod_CarcaseDirection', 'Left')
      .set('mod_PlinthAreaVisLeft', mod_PlinthAreaVisLeft ? 1 : 0)
      .set('mod_PlinthAreaVisRight', mod_PlinthAreaVisRight ? 1 : 0)
      .set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
      .set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, 1)
      .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
      .set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR);

    this.addGenerationContour(
      GenerationMethod.Toekick,
      toekickContourBounds.h,
      contourToekickPerpendicularPart,
    );
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
  internal_leaveModuleCreateBuildPlan();
}
// ---------------------------------------------------------------
export function mr_CornerFiller_afterDataCompletion(this: adc_mr_CornerFiller):void {
  internal_enterModuleAfterDataCompletion('mr_CornerFiller', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_CornerFiller_AFTERDATACOMPLETION
  // Schuler Consulting
	// Create: May 2025
	// By Joao Lisboa
	// Purpose: CabinetLibrary
	//
	// Description:
	// AfterDataCompletion of adc_mr_CornerFiller
  // Add the carcase to the root-module
	//
	// Add the PlinthArea to the root-module
	// Cycle through the childs and manage the front elements
	// Cycle through the childs and search for fingergrip
	// Cycle through the childs get backwall information
	//
	// Revisions:
	//===================================================

	//===================================================
	//          Calculate Carcase Dimensions
	//===================================================

	let widthLeft: number = 0;
	let widthRight: number = 0;
	let depthRight: number = 0;
	let depthLeft: number = 0;
	let totalDimLeft: number = 0;
	let totalDimRight: number = 0;
	if (this.mod_CornerunitDimensionLogic == 'BasedInFrontDimension') {
		widthLeft = this.mod_WidthLeft;
		widthRight = this.mod_WidthRight;
		depthRight = this.mod_DepthRight;
		depthLeft = this.mod_DepthLeft; 
		totalDimLeft = depthRight + widthLeft;
		totalDimRight = depthLeft + widthRight; 
	}
	else if (this.mod_CornerunitDimensionLogic == 'BasedInWallDistance') {
		totalDimLeft = this.mod_TotalDimLeft;
		totalDimRight = this.mod_TotalDimRight;
		depthRight = this.mod_DepthRight;
		depthLeft = this.mod_DepthLeft;
		widthLeft = totalDimLeft - depthRight;
		widthRight = totalDimRight - depthLeft;
	}

	//===================================================
	// Calculate the toe kick position
	//===================================================

	let retInfo = GlobalFunc.process_PlinthAreaLegs(this);

	// Provide the position of the legs for creation of the contour
	const legPositions = {
		LineLeft: retInfo.LineLeft,
		LineRight: retInfo.LineRight,
		LineFront: retInfo.LineFront,
		LineBack: retInfo.LineBack
	};
	this.mod_PlinthAreaPositionInfo.push(JSON.stringify(legPositions));

	//===================================================
	//          Add the carcase to the root-module
	//===================================================

	// Add the module
	//----------------------------------------------------
	
	let carc = this.addOD_M_mc_Cornerunit01(0);

	//Set values for attributes not used at the moment
	carc.mod_FingergripPos1 = 0;
	carc.mod_FingergripPos2 = 0;
	carc.mod_FingergripPos3 = 0;
	carc.mod_FingergripPos4 = 0;
	carc.mod_FingergripPos5 = 0;
	carc.mod_FingergripQtyMiddle = 0;
	carc.mod_FingergripTop = false;
	carc.mod_SlopeAngle = 0;
	carc.mod_SlopedCeilingConstruction = 'Construction01';
	carc.mod_SlopedCeilingDimensionLogic = 'FollowWallMaxHeight';
	carc.mod_BackHeight = 0;
	carc.mod_TopDepth = 0;

	// Set attributes of the carcase
	carc.mod_CarcaseId = 'Carcase_01';

	// Adjust dimensions of the carcase
	carc.mod_DepthRight = this.mod_FillerDepthRight;
	carc.mod_DepthLeft = this.mod_FillerDepthLeft;
	carc.mod_TotalDimLeft = this.mod_FillerDepthRight + widthLeft;
	carc.mod_TotalDimRight = this.mod_FillerDepthLeft + widthRight;
	carc.mod_WidthLeft = widthLeft;
	carc.mod_WidthRight = widthRight;

	// Calculate movement of carcase	
	let widthAdjustment = totalDimRight - widthRight - this.mod_FillerDepthLeft;
	let depthAdjustment = totalDimLeft - widthLeft - this.mod_FillerDepthRight;

	// setOrigin
	let StartPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;
	carc.setOrigin(widthAdjustment, StartPosCabinet, depthAdjustment);

	//Initialize variables for Dividers
  let VertDividerType: string[] = [];
  let VertDividerFrontWidth: number[] = [];
  let VertDividerFrontName: string[] = [];

	let GlobalCount: number = 0;

	// Cycle through child modules to get the Corner unit Straight Filler
	this.m.forEach(p => {
		if (p instanceof OD_M_mf_CornerFillerFront) {

			GlobalCount++

			// Set mandatory attributes
			p.mod_CarcaseDirection = 'Left';
			p.mod_CarcaseDepth = depthRight;
			p.mod_CarcaseHeight = this.mod_Height;
			p.mod_CarcaseWidth = totalDimRight;

			// Override attributes
			if (p.mod_CornerunitStraightFillerConstruction == 'Construction01') {
				p.mod_WidthLeft = widthLeft;
				p.mod_WidthRight = widthRight;
			}
			else if (p.mod_CornerunitStraightFillerConstruction == 'Construction02') {
				p.mod_WidthLeft = widthLeft;
				p.mod_WidthRight = widthRight - p.mod_ThkLeft!;
			}
			else if (p.mod_CornerunitStraightFillerConstruction == 'Construction03') {
				p.mod_WidthLeft = widthLeft - p.mod_ThkRight!;
				p.mod_WidthRight = widthRight;
			}
			
			p.mod_HeightLeft = this.mod_Height - this.mod_FrontGapHorTop - this.mod_FrontPosStart;
			p.mod_HeightRight = this.mod_Height - this.mod_FrontGapHorTop - this.mod_FrontPosStart;
			p.mod_FrontPosStart = this.mod_FrontPosStart;

			p.mod_CornerunitFrontWidth = 0;
			p.mod_FrontId = 'CornerFiller'

			p.mod_TypeElement = this.mod_TypeElement;
			p.mod_FillerType = this.mod_FillerType;
			p.mod_FillerHardware = this.mod_FillerHardware;

			p.setOrigin(0, StartPosCabinet + this.mod_FrontPosStart, depthRight);
			p.mod_Originpos.push(this.mod_FillerDepthLeft-depthLeft);
			p.mod_Originpos.push(this.mod_FrontPosStart);
			p.mod_Originpos.push(depthRight-(depthRight - this.mod_FillerDepthRight));

			//===================================================
			// Manage the Vert Dividers
			//===================================================
			VertDividerType[GlobalCount] = 'NoVertDivider';
			VertDividerFrontWidth[GlobalCount] = 0;
			VertDividerFrontName[GlobalCount] = p.mod_ModuleName!;

			// Interface to provide the data for the carcase
			//-------------------------------------------------------------------------------------

			interface FrontInfo {
				StartingPosition: number;        // Starting position of the front
				FrontHeight: number;             // Height of the front set from the UserExit
				RealFrontHeight: number;         // Calculated front height without gaps
				BackwallConstruction: string;    // Backwall construction selected on the front
				BackwallPosition: number;        // Backwall position selected on the front
				FixedshelfBottom: boolean;       // Fixed shelf selected on the front
				FingergripBottom: boolean;       // Fingergrip on bottom (true / false)
				FingergripTop: boolean;          // Fingergrip on top (true / false)
				FringergripType: string;         // Type of fingergrip (dimensions)
			}

			// Create the object
			let frontInfo: FrontInfo = {
				//StartingPosition: p.mod_FrontPosStart!, //UNCOMMENT
				StartingPosition: 0,
				//FrontHeight: p.mod_FrontHeightSelection!, //UNCOMMENT
				FrontHeight: 0,
				//RealFrontHeight: p.mod_FrontHeight!, //UNCOMMENT
				RealFrontHeight: 0,
				//BackwallConstruction: p.mod_CarcaseBackwallConstruction!, //UNCOMMENT
				BackwallConstruction: 'NoBackwall',
				//BackwallPosition: p.mod_BackwallPos!, // UNCOMMENT
				BackwallPosition: 0,
				//FixedshelfBottom: p.mod_ShelffixedBtm!, //UNCOMMENT
				FixedshelfBottom: false,
				FingergripBottom: false,
				//FingergripTop: !!p.mod_FingergripTop, //UNCOMMENT
				FingergripTop: !! false,
				FringergripType: this.mod_FingergripType
			}

			// Stringify the object and push it to the list attribute
			carc.mod_FrontAreaInfoList.push(JSON.stringify(frontInfo));
		} 
	});


	//================================================================================
  //          Stringify the Divider Information and pass it to the mc_Storageunit (will be used to insert the VertDivider in the mc_Storageunit)
  //================================================================================

  let VertDividerInfo: any = {
    Type: VertDividerType,
    FrontWidth: VertDividerFrontWidth,
    FrontName: VertDividerFrontName,
    PosX: undefined,
    DimX: undefined,
    FreeSpaceWidth: undefined,
    FreeSpaceWidthStartPos: undefined
  };

  let strJson = JSON.stringify(VertDividerInfo);
	carc.mod_VertDividerInfoList.push(strJson);


	//===================================================
  // Seal mc_Cornerunit01 and get attribute 
  //===================================================
  let sealedCarc = carc.seal();
  let sealedCarc_CarcasePartInfo = JSON.parse(sealedCarc.mod_CarcasePartInfo[0]);

	let i = 0;
	// Cycle for the child modules
	this.m.forEach(p => {
		if (p instanceof OD_M_mf_CornerFillerFront) {
			i++;
			// Get the information regarding the HorizontalParts in an Array
			let HorizontalPartsType: string[] = [];
			HorizontalPartsType.push(sealedCarc_CarcasePartInfo.HorizontalPartsType[i]);
			let HorizontalPartsPosY: number[] = [];
			HorizontalPartsPosY.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosY[i]);
			let HorizontalPartsPosZ: number[] = [];
			HorizontalPartsPosZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[i]);
			let HorizontalPartsDimY: number[] = [];
			HorizontalPartsDimY.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimY[i]);
			let HorizontalPartsDimZ: number[] = [];
			HorizontalPartsDimZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimZ[i]);
			let HorizontalPartsFrontAngle: number[] = [];
			HorizontalPartsFrontAngle.push(sealedCarc_CarcasePartInfo.HorizontalPartsFrontAngle[i]);

			if (this.mod_CarcaseShelftopConstruction != 'RailTopBackHorizontal' && this.mod_CarcaseShelftopConstruction != 'RailTopBackVertical') { // Only push the top part if it exists
				HorizontalPartsType.push(sealedCarc_CarcasePartInfo.HorizontalPartsType[i + 1]);
				HorizontalPartsPosY.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosY[i + 1]);
				HorizontalPartsPosZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[i + 1]);
				HorizontalPartsDimY.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimY[i + 1]);
				HorizontalPartsDimZ.push(sealedCarc_CarcasePartInfo.HorizontalPartsDimZ[i + 1]);
				HorizontalPartsFrontAngle.push(sealedCarc_CarcasePartInfo.HorizontalPartsFrontAngle[i + 1]);
			}

			// Set the attribute CarcasePartInfo regarding each front
			let CarcasePartInfo: any = {
				HorizontalPartsType: HorizontalPartsType,
				HorizontalPartsPosY: HorizontalPartsPosY,
				HorizontalPartsPosZ: HorizontalPartsPosZ,
				HorizontalPartsDimY: HorizontalPartsDimY,
				HorizontalPartsDimZ: HorizontalPartsDimZ,
				HorizontalPartsFrontAngle: HorizontalPartsFrontAngle,
				VerticalPartsType: sealedCarc_CarcasePartInfo.VerticalPartsType[i],
				VerticalPartsPosX: sealedCarc_CarcasePartInfo.VerticalPartsPosX[i],
				VerticalPartsPosZ: sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i],
				VerticalPartsDimX: sealedCarc_CarcasePartInfo.VerticalPartsDimX[i],
				VerticalPartsDimZ: sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i],
				VerticalPartsFrontAngle: sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i]
			};

			let CarcasePartInfoJson = JSON.stringify(CarcasePartInfo);
			p.mod_CarcasePartInfo.push(CarcasePartInfoJson);
		}
	})

	//===================================================
	//          Create vector / docking
	//===================================================

	let TopEndCabinet = StartPosCabinet + this.mod_Height;

	// Left side
	this.addDockingInfo(Dock.LeftBottom, new Vector3(0, 0, totalDimLeft), new Vector3(depthLeft, 0, totalDimLeft));
	this.addDockingInfo(Dock.LeftTop, new Vector3(0, TopEndCabinet, totalDimLeft), new Vector3(depthLeft, TopEndCabinet, totalDimLeft));

	// Right side
	this.addDockingInfo(Dock.RightBottom, new Vector3(totalDimRight, 0, 0), new Vector3(totalDimRight, 0, depthRight));
	this.addDockingInfo(Dock.RightTop, new Vector3(totalDimRight, TopEndCabinet, 0), new Vector3(totalDimRight, TopEndCabinet, depthRight));

	// Left backwall side
	this.addDockingInfo(Dock.LeftBackBottom, new Vector3(0, 0, 0), new Vector3(0, 0, totalDimLeft));
	this.addDockingInfo(Dock.LeftBackTop, new Vector3(0, TopEndCabinet, 0), new Vector3(0, TopEndCabinet, totalDimLeft));

	// Right backwall side 
	this.addDockingInfo(Dock.RightBackBottom, new Vector3(0, 0, 0), new Vector3(totalDimRight, 0, 0));
	this.addDockingInfo(Dock.RightBackTop, new Vector3(0, TopEndCabinet, 0), new Vector3(totalDimRight, TopEndCabinet, 0));

	//===================================================
	//          Manage the insertion level
	//===================================================

	/*
	if (this.mod_HeightPosInsertion > 0) {
		let InsertionHeight = this.mod_HeightPosInsertion + this.mod_PlinthAreaHeight;
		this.addInsertLevelHeight(InsertionHeight, true);
		this.insertLevelFixed = false;
	}
	else {
		this.addInsertLevelHeight(0, true);
		this.insertLevelFixed = true;
	}
	*/
	
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
  internal_leaveModuleAfterDataCompletion();
}
// ---------------------------------------------------------------
export function mr_CornerFiller_manufacturerDataCompletion(this: dc_mr_CornerFiller):void {
  internal_enterModuleManufacturerDataCompletion('mr_CornerFiller', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_CornerFiller_MANUFACTURERDATACOMPLETION

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
  internal_leaveModuleManufacturerDataCompletion();
}
