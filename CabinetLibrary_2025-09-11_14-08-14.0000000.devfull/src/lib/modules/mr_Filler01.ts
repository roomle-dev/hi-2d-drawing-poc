import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mr_Filler01, dc_mr_Filler01, adc_mr_Filler01 } from '../internal/modules/mr_Filler01'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Storageunit01, OD_M_mc_Storageunit01 } from '../internal/modules/mc_Storageunit01'
import { dc_mc_PlinthArea01, OD_M_mc_PlinthArea01 } from '../internal/modules/mc_PlinthArea01'
import { dc_mf_FillerFront, OD_M_mf_FillerFront } from '../internal/modules/mf_FillerFront'
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

export function mr_Filler01_createBuildPlan(this: cbp_mr_Filler01):void {
  internal_enterModuleCreateBuildPlan('mr_Filler01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mr_Filler01_CREATEBUILDPLAN
  
  // Schuler Consulting
  // Create: February 2025
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
  // Calculations generation parts
  //======================================================================

  // Create a JSON-object to provide it as attribute for the contour
  const countertopInfo = {
	Element: "storageUnit",
	Width: this.mod_Width,
	Depth: this.mod_Depth,
	DistanceWall: this.mod_CarcaseDistanceWall,
	Hob: 0,
	HobData: ""
  }

  const strJson = JSON.stringify(countertopInfo);

  const {
    CONTOUR_ATTRIBUTE_ADD_TOEKICK,
    CONTOUR_ATTRIBUTE_OWNER_TYPE,
    mr_StorateunitSingle,
  } = GlobalFunc.process_MathLongparts();

  const inSlopedCeilingArea = false;
  const carcaseTopY = this.mod_Height + this.mod_PlinthAreaHeight;
  const plinthAreaHeight = this.mod_PlinthAreaHeight;
  const mc_Storageunit01 = this.m.find(p => p instanceof OD_M_mc_Storageunit01) as any;

  //======================================================================
  // Countertop
  //======================================================================

  const countertopContourBounds = {
    xMin: 0,
    xMax: this.mod_Width,
    zMin: Math.min(
      0,
      -this.mod_CarcaseDistanceWall,
    ),
    zMax: this.mod_Depth,
  };

  if (this.mod_CreateCountertop) {


    // TODO: The contour should be added always, because it is needed for further collision checks.


    const contourCountertop = Contour
      .M(countertopContourBounds.xMin, countertopContourBounds.zMin)
      .L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMin)
      .L(CKind.Right, countertopContourBounds.xMax, countertopContourBounds.zMax)
      .L(CKind.Front, countertopContourBounds.xMin, countertopContourBounds.zMax)
      .Z(CKind.Left)
      ;
    // This actually decides if the countertop should really be added.
    contourCountertop.attributes
      .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorateunitSingle)
      .set('mod_CarcaseVisLeft', 0)
      .set('mod_CarcaseVisRight', 0)
	  .set('CountertopInfo', strJson)
      ;

    this.addGenerationContour(
      GenerationMethod.Countertop,
      carcaseTopY,
      contourCountertop,
    );
  }

  //======================================================================
  // Paneltop
  //======================================================================

  if (this.mod_CreatePaneltop) {

    const topPanelDepth = this.mod_Depth;

    const paneltopContourBounds = {
      xMin: countertopContourBounds.xMin,
      xMax: countertopContourBounds.xMax,
      zMin:
        inSlopedCeilingArea
          ? (
            +	this.mod_Depth
            - topPanelDepth
          )
          : (
            countertopContourBounds.zMin
          ),
      zMax: (
        +	this.mod_Depth
      ),
    };

    const contourPaneltop = Contour
      .M(countertopContourBounds.xMin, paneltopContourBounds.zMin)
      .L(CKind.Back, paneltopContourBounds.xMax, paneltopContourBounds.zMin)
      .L(CKind.Right, paneltopContourBounds.xMax, paneltopContourBounds.zMax)
      .L(CKind.Front, paneltopContourBounds.xMin, paneltopContourBounds.zMax)
      .Z(CKind.Left)
      ;

    contourPaneltop.attributes
      .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorateunitSingle)
      ;

    this.addGenerationContour(
      GenerationMethod.Paneltop,
      carcaseTopY,
      contourPaneltop,
    );

  }

  //======================================================================
  // Fingergrip (gola)
  //======================================================================

  if (this.mod_CreateFingergrip) {

    if (mc_Storageunit01) {
      const middleFingergripPositions = [
        mc_Storageunit01.mod_FingergripPos1 ?? 0,
        mc_Storageunit01.mod_FingergripPos2 ?? 0,
        mc_Storageunit01.mod_FingergripPos3 ?? 0,
        mc_Storageunit01.mod_FingergripPos4 ?? 0,
        mc_Storageunit01.mod_FingergripPos5 ?? 0,
      ].filter(p => p !== undefined && p > 0) as number[];

      let fingergripTopIndex = -1;
      if (mc_Storageunit01.mod_FingergripTop) {
        fingergripTopIndex = middleFingergripPositions.length;
        middleFingergripPositions.push(mc_Storageunit01.mod_CarcaseHeight - mc_Storageunit01.mod_FingergripType_matrix.LShapeHeight);
      }

      middleFingergripPositions.forEach((pos, idx) => {

        const fingergripContour = Contour
          .M(countertopContourBounds.xMin, countertopContourBounds.zMin)
          .L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMin)
          .L(CKind.Right, countertopContourBounds.xMax, countertopContourBounds.zMax)
          .L(CKind.Front, countertopContourBounds.xMin, countertopContourBounds.zMax)
          .Z(CKind.Left)
          ;

        fingergripContour.attributes
          .set('mod_FingergripPostype', idx === fingergripTopIndex ? 'Top' : 'Middle')
          .set('mod_FingergripType', mc_Storageunit01.mod_FingergripType ?? 'None')
          ;

        this.addGenerationContour(
          GenerationMethod.Fingergrip,
          pos + plinthAreaHeight,
          fingergripContour,
        );
      });

    }

  }

  //======================================================================
  // Toekick
  //======================================================================

  // Seems sufficient without the isOnFloor check, but can be added later if needed.
  // const isOnFloor = this.getFullOrigin()._y < 1;
  const createToekick =
    // THIS CONDITION MUST BE IN PLACE !!!!!
    // WITHOUT THE WALL UNITS CREATE ERRORS !!!!!
    (this.mod_CreateToekick ?? false)
    // && isOnFloor
    && this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None'
    ;
  if (this.mod_CreateToekick ?? false) {


    // Retrieve the positions of the legs
    let legPositionInfo;
    try {
      legPositionInfo = JSON.parse(this.mod_PlinthAreaPositionInfo[0]);
    }
    catch {
      logError(`Could not parse this.mod_PlinthAreaPositionInfo[0] in mr_StorageunitStraight ${this._id}. Toekick will not be recessed correctly.`);
      legPositionInfo = undefined;
    }

    const LineLeft = legPositionInfo?.LineLeft ?? 0;
    const LineRight = legPositionInfo?.LineRight ?? 0;
    const LineFront = legPositionInfo?.LineFront ?? 0;
    const LineBack = legPositionInfo?.LineBack ?? 0;
    const mod_PlinthAreaVisLeft = this.mod_PlinthAreaVisLeft ?? false;
    const mod_PlinthAreaVisRight = this.mod_PlinthAreaVisRight ?? false;

    const toekickContourBounds = {
      xMin: mod_PlinthAreaVisLeft ? LineLeft : 0,
      xMax: this.mod_Width - (mod_PlinthAreaVisRight ? LineRight : 0),
      zMin: LineBack,
      zMax: this.mod_Depth - LineFront,
    };

    if (plinthAreaHeight > 0) {

      const contourToekick = Contour
        .M(toekickContourBounds.xMin, toekickContourBounds.zMin)
        .L(CKind.Back, toekickContourBounds.xMax, toekickContourBounds.zMin)
        .L(CKind.Right, toekickContourBounds.xMax, toekickContourBounds.zMax)
        .L(CKind.Front, toekickContourBounds.xMin, toekickContourBounds.zMax)
        .Z(CKind.Left)
        ;

      contourToekick.attributes
        .set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_StorateunitSingle)
        .set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, createToekick ? 1 : 0)
        .set('mod_PlinthAreaVisLeft', mod_PlinthAreaVisLeft ? 1 : 0)
        .set('mod_PlinthAreaVisRight', mod_PlinthAreaVisRight ? 1 : 0)
        ;

      this.addGenerationContour(
        GenerationMethod.Toekick,
        plinthAreaHeight,
        contourToekick,
      );
    }
  } 







//===================================================
//          Add a ghost part for the plinth area
//===================================================

this.addpart_PlinthAreaUnit(0,0,0,1,1,1);



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
export function mr_Filler01_afterDataCompletion(this: adc_mr_Filler01):void {
  internal_enterModuleAfterDataCompletion('mr_Filler01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_Filler01_AFTERDATACOMPLETION
  // Schuler Consulting
  // Create: April 2025
  // By Joao Lisboa
  // Purpose: CabinetLibrary
  //
  // Description:
  // AfterDataCompletion of mr_Filler01
  // Add the carcase to the root-module
  // Add the PlinthArea to the root-module
  // Cycle through the childs and manage the front elements
  // Cycle through the childs and search for fingergrip
  //===================================================

  //===================================================
  //          Add the carcase to the root-module
  //===================================================

  // Add the module
  //----------------------------------------------------

  let carc = this.addOD_M_mc_Storageunit01(0);

  //  Set attributes based on the Filler Construction
  //----------------------------------------------------
  let additionalInfo: string = 'All';
  let fillerSettings = GlobalFunc.find_FillerSettings(this.mod_FillerType, this.mod_Direction, additionalInfo);

  carc.mod_SidepanelleftType = fillerSettings.SidepanelleftType;
  carc.mod_SidepanelleftThk = fillerSettings.SidepanelleftType == 'NoSp' ? this.mod_FrontGapVert / 2 : this.mod_SidepanelleftThk;
  carc.mod_SidepanelrightType = fillerSettings.SidepanelrightType;
  carc.mod_SidepanelrightThk = fillerSettings.SidepanelrightType == 'NoSp' ? this.mod_FrontGapVert / 2 : this.mod_SidepanelrightThk;
  carc.mod_CarcaseShelftopConstruction = fillerSettings.ShelftopConstruction;
  carc.mod_CarcaseShelfbtmConstruction = fillerSettings.ShelfbtmConstruction;
  carc.mod_CarcaseBackwallConstruction = fillerSettings.BackwallConstruction;
  
  
  // Set attributes not derived (attributes not in use but that need to get values)
  carc.mod_BackwallPos = 8;
  carc.mod_BackwallThk = 8;
  carc.mod_HangerPosX = 'Left_Right';
  carc.mod_HangerPosY = 'Automatic';
  carc.mod_RailhortopbackThk = 19;
  carc.mod_RailhortopfrontThk = 19;
  carc.mod_RailverttopbackThk = 19;
  carc.mod_RailverttopfrontThk = 19;
  carc.mod_ShelffixedThk = 19;
  carc.mod_CarcaseBackwallColor = this.mod_CarcaseColor;
  carc.mod_CarcaseBackwallProgram = this.mod_CarcaseProgram;
  carc.mod_CarcaseShelfbtmOversizeInsideWall = 0;
  carc.mod_CarcaseShelftopOversizeInsideWall = 0;
  carc.mod_CarcaseSidepanelleftOversizeInsideWall = 0;
  carc.mod_CarcaseSidepanelrightOversizeInsideWall = 0;
  carc.mod_HangerType = 'NoHanger';
  carc.mod_LightPosX1 = 0;
  carc.mod_LightPosX2 = 0;
  carc.mod_LightPosX3 = 0;
  carc.mod_LightPosX4 = 0;
  carc.mod_LightPosX5 = 0;
  carc.mod_LightPart = 'BottomShelf';
  carc.mod_LightPosX = 'Central';
  carc.mod_LightPosY = 100;
  carc.mod_LightSystem = 'NoLight';
  carc.mod_BackwallFixedHeight = 100;
  carc.mod_HangerOffsetPosY = 0;
  carc.mod_HangerColor = 'DemoWhite';
  carc.mod_SidepanelmiddleThk = 19;
  carc.mod_SlopedCeilingDimensionLogic = 'FollowWallUserHeight';
  carc.mod_SlopeAngle = 0;
  carc.mod_BackHeight = 600;
  carc.mod_SlopedCeilingConstruction = 'Construction01';
  carc.mod_TopDepth = 150;
  

  // Calculation of the carcase width and starting Position (Endless cabinets)
  //----------------------------------------------------

  function GetSideAdjustment(type: string, thickness: number): number {
    switch (type) {
      case 'OutSp':
      case 'NoSpAtOutSpOversized':
        return 0;
      case 'NoSpAtOutSp':
        return thickness;
      case 'NoSpAtMiSp':
      case 'MiSp':
        return thickness / 2;
      default:
        return 0;
    }
  }

  function GetCarcaseMovement(leftType: string, leftThk: number): number {
    switch (leftType) {
      case 'MiSp':
      case 'NoSpAtMiSp':
        return -leftThk / 2;
      case 'NoSpAtOutSp':
        return -leftThk;
      default:
        return 0;
    }
  }

  function CalculateCarcaseWidth(leftType: string, rightType: string, width: number, leftThk: number, rightThk: number): number {
    const leftAdjustment = GetSideAdjustment(leftType, leftThk);
    const rightAdjustment = GetSideAdjustment(rightType, rightThk);
    return width + leftAdjustment + rightAdjustment;
  }

  // Set the values to the relevant attributes of the carcase
  //----------------------------------------------------

  let StartPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;
  let CarcaseMovement = GetCarcaseMovement(this.mod_SidepanelleftType, this.mod_SidepanelleftThk);

  carc.mod_CarcaseWidth = CalculateCarcaseWidth(this.mod_SidepanelleftType, this.mod_SidepanelrightType, this.mod_Width, this.mod_SidepanelleftThk, this.mod_SidepanelrightThk);
  carc.mod_CarcaseMovement = CarcaseMovement;
  carc.mod_CarcaseDepth = fillerSettings.UseCarcaseDepth ? this.mod_Depth : this.mod_FillerDepth;
  let depthAdjustment = fillerSettings.UseCarcaseDepth ? 0 : this.mod_Depth - this.mod_FillerDepth;
  carc.mod_CarcaseHeight = this.mod_Height;
  carc.mod_CarcaseId = 'Carcase_01';

  // Set origin of the carcase
  //----------------------------------------------------

  carc.setOrigin(CarcaseMovement, StartPosCabinet, depthAdjustment);

  // Save origin in Attribute
  carc.mod_Originpos.push(CarcaseMovement);
  carc.mod_Originpos.push(StartPosCabinet);
  carc.mod_Originpos.push(depthAdjustment);

  //===================================================
  //          Cycle through the childs and manage the front elements
  //===================================================

  // Define variables
  let GlobalCount: number = 0;
  let CountDoor: number = 0;
  let CountFlipLift: number = 0;
  let CountDrawer: number = 0;
  let CountFixedfront: number = 0;
  let CountOven: number = 0;
  let CountFridge: number = 0;
  let CountRackArea: number = 0;
  let LastFrontElem: number = 0;
  let LastFrontHeight: number = 0;
  let CountFingerGrip: number = 0;
  let FingergripBottom = false;
  let tmpGapMid: number = 0;
  let FingerGripLine: number = 0;
  let StartPos = this.mod_FrontPosStart + StartPosCabinet;
  let tmpLastStartPos: number[] = []; //Stores the position of each front
  tmpLastStartPos[0] = 0;
  let tmpLastGap: number[] = []; //Stores the gap between each fronts (either normal gap or fingergrip gap)
  tmpLastGap[0] = 0;
  let tmpLastFrontFingergrip: boolean[] = [false]; // Stores if the front has fingergrip
  tmpLastFrontFingergrip[0] = false;
  let prevtopshelf = 0  //verify if the prvious module has a fix top shelf

  // Initialize fingergrip information for the carcase
  carc.mod_FingergripTop = false;
  carc.mod_FingergripQtyMiddle = 0;
  carc.mod_FingergripPos1 = 0;
  carc.mod_FingergripPos2 = 0;
  carc.mod_FingergripPos3 = 0;
  carc.mod_FingergripPos4 = 0;
  carc.mod_FingergripPos5 = 0;

  //Initialize variables for Dividers
  let VertDividerType: string[] = [];
  let VertDividerFrontWidth: number[] = [];
  let VertDividerFrontName: string[] = [];
  


  // Define variable to inform what's the bottom front 
  let FrontOnBottom: string = 'None';

  //===================================================
  // Create Front ID and Count total quantities
  //===================================================

  const typeCounters = {
    Drawer: 0,
    Door: 0,
    Fliplift: 0,
    Fixedfront: 0,
    Oven: 0,
    Fridge: 0,
    RackArea: 0,
    FillerFront: 0
  };

  this.m.forEach(p => {
    if (p instanceof OD_M_mf_FillerFront) {
      p.mod_FrontId = 'FillerFront_' + (++typeCounters.FillerFront);
      p.mod_DoorDirection = this.mod_Direction == 'Left' ? 'Left' : 'Right';
      p.mod_SidepanelleftThk = this.mod_SidepanelleftType == 'NoSp' ? 0 : this.mod_SidepanelleftThk;
      p.mod_SidepanelrightThk = this.mod_SidepanelleftType == 'NoSp' ? 0 : this.mod_SidepanelrightThk;
    }
  });

  // Cycle
  this.m.forEach(p => {

    //===============================================================================================
    // Manage generic dimensions and gaps for all front elements
    //===============================================================================================

    if (p instanceof OD_M_mf_FillerFront) {

      // Create Carcase ID and Attributes
      GlobalCount++;
      p.mod_CarcaseId = 'Carcase_01';
      p.mod_CarcaseDepth = this.mod_Depth;
      p.mod_CarcaseWidth = this.mod_Width;
      //p.mod_CarcaseHeight = height; // TO DELETE
      p.mod_CarcaseHeight = this.mod_Height;
      p.mod_FrontPosStart = StartPos - StartPosCabinet;

      // setOrigin
      p.setOrigin(0, StartPos, this.mod_Depth);

      p.mod_Originpos[0] = 0;
      p.mod_Originpos[1] = StartPos;
      p.mod_Originpos[2] = this.mod_Depth;

      // Check first and last front element
      if (StartPos + p.mod_FrontHeightSelection! >= this.mod_Height + StartPosCabinet) { LastFrontElem = 1 }

      // Error if front element start over the carcase top end
      if (StartPos >= this.mod_Height + StartPosCabinet) {
        let ErrorMessage = GlobalFunc.find_ErrorList('Error 22019', 1);
        logError(ErrorMessage.Message(''));
      }

      // Calculation of front height and set information to carcase regarding fingergrip
      if (LastFrontElem == 1 && p.mod_FingergripTop == true) {
        carc.mod_FingergripTop = true;
        p.mod_FrontHeight = this.mod_Height - (StartPos - StartPosCabinet + this.mod_FingergripType_matrix.LShapeGapAbove!)
        LastFrontHeight = this.mod_Height - (StartPos - StartPosCabinet);
        StartPos = this.mod_Height;
        tmpLastStartPos.push(StartPos - StartPosCabinet);
        tmpLastGap.push(-this.mod_FingergripType_matrix.CShapeOverlapAbove!);
        if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
        else { p.mod_FingergripBtmType = 'NoFingergrip' }
        tmpLastFrontFingergrip.push(true);
        p.mod_FingergripTopType = carc.mod_FingergripType!;

      }
      else if (LastFrontElem == 1 && p.mod_FingergripTop == false) {
        p.mod_FrontHeight = this.mod_Height - (StartPos - StartPosCabinet + this.mod_FrontGapHorTop);
        LastFrontHeight = this.mod_Height - (StartPos - StartPosCabinet); 
        StartPos = this.mod_Height;
        tmpLastStartPos.push(StartPos - StartPosCabinet);
        tmpLastGap.push(this.mod_FrontGapHorTop);
        if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
        else { p.mod_FingergripBtmType = 'NoFingergrip' }
        tmpLastFrontFingergrip.push(false);
        p.mod_FingergripTopType = 'NoFingergrip';
      }
      else {
        if (p.mod_FingergripTop == true) {

          tmpGapMid = this.mod_FingergripType_matrix.CShapeHeight! - (this.mod_FingergripType_matrix.CShapeOverlapBelow! + this.mod_FingergripType_matrix.CShapeOverlapAbove!);
          p.mod_FrontHeight! = p.mod_FrontHeightSelection! - tmpGapMid;
          StartPos += p.mod_FrontHeightSelection! - tmpGapMid - this.mod_FingergripType_matrix.CShapeOverlapBelow! + this.mod_FingergripType_matrix.CShapeHeight! - this.mod_FingergripType_matrix.CShapeOverlapAbove!;

          FingerGripLine = StartPos + this.mod_FingergripType_matrix.CShapeOverlapAbove! - (StartPosCabinet + this.mod_FingergripType_matrix.CShapeHeight! / 2);
          CountFingerGrip++;

          switch (CountFingerGrip) {
            case 1:
              carc.mod_FingergripPos1 = FingerGripLine;
              break;
            case 2:
              carc.mod_FingergripPos2 = FingerGripLine;
              break;
            case 3:
              carc.mod_FingergripPos3 = FingerGripLine;
              break;
            case 4:
              carc.mod_FingergripPos4 = FingerGripLine;
              break;
            case 5:
              carc.mod_FingergripPos5 = FingerGripLine;
              break;
            default:
              let ErrorMessage = GlobalFunc.find_ErrorList('Error 22020', 1);
              logError(ErrorMessage.Message(''));
              break;
          }
          tmpLastStartPos.push(StartPos - StartPosCabinet);
          tmpLastGap.push(-this.mod_FingergripType_matrix.CShapeOverlapAbove!);
          if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
          else { p.mod_FingergripBtmType = 'NoFingergrip' }
          tmpLastFrontFingergrip.push(true);
          p.mod_FingergripTopType = carc.mod_FingergripType!;

        }
        else {
          StartPos += p.mod_FrontHeightSelection!;
          p.mod_FrontHeight = p.mod_FrontHeightSelection! - this.mod_FrontGapHor;
          tmpLastStartPos.push(StartPos - StartPosCabinet);
          tmpLastGap.push(this.mod_FrontGapHor / 2);
          if (tmpLastFrontFingergrip[tmpLastFrontFingergrip.length - 1] == true) { p.mod_FingergripBtmType = carc.mod_FingergripType! }
          else { p.mod_FingergripBtmType = 'NoFingergrip' }
          tmpLastFrontFingergrip.push(false);
          p.mod_FingergripTopType = 'NoFingergrip';

        }
      }

      //===================================================
      // Provide the data of the last front to the carcase
      //===================================================

      if (LastFrontElem == 1) {

        // Height of the last front element
        carc.mod_LastFrontHeight = LastFrontHeight;

        // FrontName
        if (p instanceof OD_M_mf_FillerFront) {
          carc.mod_LastFrontName = "fillerfront";
        }
      }

      //===================================================
      // Manage Front Width and Construction
      //===================================================
      if (p instanceof OD_M_mf_FillerFront) {
        p.mod_FrontWidth = this.mod_Width;
        if (this.mod_CarcaseFrontConstruction_matrix.Left == "Inlayed") { p.mod_FrontWidth = p.mod_FrontWidth - this.mod_SidepanelleftThk };
        if (this.mod_CarcaseFrontConstruction_matrix.Right == "Inlayed") { p.mod_FrontWidth = p.mod_FrontWidth - this.mod_SidepanelrightThk };
      }
    }

    //===============================================================================================
    // Collect the data of the fronts to supply it to the carcase
    //===============================================================================================

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

    // All the other fronts
    //-------------------------------------------------------------------------------------
    if (p instanceof OD_M_mf_FillerFront) {
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
        FingergripBottom: FingergripBottom,
        //FingergripTop: !!p.mod_FingergripTop, //UNCOMMENT
        FingergripTop: !! false,
        FringergripType: this.mod_FingergripType
      }

      // Stringify the object and push it to the list attribute
      carc.mod_FrontAreaInfoList.push(JSON.stringify(frontInfo));
    }
    // Save the fingergrip for the next front
    //FingergripBottom = !!p.mod_FingergripTop; //UNCOMMENT
    FingergripBottom = !! false;


    //===================================================
    // Manage the Vert Dividers
    //===================================================

    if (p instanceof OD_M_mf_FillerFront) {


      // Get the Information about the doors
      let doorInfo = GlobalFunc.process_Door(p);

      // Set the values of the attributes (will be provided to the carcase)
      VertDividerType[GlobalCount] = doorInfo.VertDivider;
      VertDividerFrontWidth[GlobalCount] = doorInfo.FrontWidthList[0]
      VertDividerFrontName[GlobalCount] = p.mod_ModuleName!;
    }
    else {
      VertDividerType[GlobalCount] = 'NoVertDivider';
    }

    //===================================================
    // Manage ModuleName and RackArea
    //===================================================

    // Save wich front we've managed so that on the next one we know it
    if (p instanceof OD_M_mf_FillerFront) {
      FrontOnBottom = p.mod_ModuleName!;
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
  // Manage the fingergrip
  //===================================================

  carc.mod_FingergripQtyMiddle = CountFingerGrip;

  //===================================================
  // Seal mc_Storageunit and get attribute with FreeSpace
  //===================================================
  let sealedCarc = carc.seal();
  let sealedCarc_CarcaseSpaceDimension = JSON.parse(sealedCarc.mod_CarcaseSpaceDimension[0]);
  let sealedCarc_VertDividerInfoList = JSON.parse(sealedCarc.mod_VertDividerInfoList[0]);
  let sealedCarc_CarcasePartInfo = JSON.parse(sealedCarc.mod_CarcasePartInfo[0]);
  let BtmShelfPosDepth = sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[1];
  let BtmShelfPos = sealedCarc_CarcasePartInfo.HorizontalPartsPosY[1];
  let i = 0

  // Cycle for the child modules
  this.m.forEach(p => {

    if (p instanceof OD_M_mf_FillerFront) {

      // Set the attribute for the free space (CarcaseSpaceDimension) regarding each front
      let CarcaseSpaceDimension: any = {
        FullWidthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullWidthFreeSpace,
        FullHeightFreeSpace: sealedCarc_CarcaseSpaceDimension.FullHeightFreeSpace,
        FullDepthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullDepthFreeSpace,
        FullWidthStartPos: sealedCarc_CarcaseSpaceDimension.FullWidthStartPos,
        FullHeightStartPos: sealedCarc_CarcaseSpaceDimension.FullHeightStartPos,
        FullDepthStartPos: sealedCarc_CarcaseSpaceDimension.FullDepthStartPos,
        WidthFreeSpace: sealedCarc_CarcaseSpaceDimension.WidthFreeSpace[i],
        HeightFreeSpace: sealedCarc_CarcaseSpaceDimension.HeightFreeSpace[i],
        DepthFreeSpace: sealedCarc_CarcaseSpaceDimension.DepthFreeSpace[i],
        WidthFreeStartPos: sealedCarc_CarcaseSpaceDimension.WidthFreeStartPos[i],
        HeightFreeStartPos: sealedCarc_CarcaseSpaceDimension.HeightFreeStartPos[i] + StartPosCabinet,
        DepthFreeStartPos: sealedCarc_CarcaseSpaceDimension.DepthFreeStartPos[i]
      };
      let strJson = JSON.stringify(CarcaseSpaceDimension);
      p.mod_CarcaseSpaceDimension.push(strJson);

      // Sequence of the fronts
      i++

      // Set the attribute for the VertDividerInfoList info (mod_VertDividerInfoList) regarding each front (will be used for the adjustable shelves)


      // Provide the CarcasePartInfo regarding each front
      if (p instanceof OD_M_mf_FillerFront) {

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

    }
  });

  //===================================================
  // Calculate the toe kick position
  //===================================================

  if (this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None') {
    let retInfo = GlobalFunc.process_PlinthAreaLegs(this);

    // Provide the position of the legs for creation of the contour
    const legPositions = {
      LineLeft: retInfo.LineLeft,
      LineRight: retInfo.LineRight,
      LineFront: retInfo.LineFront,
      LineBack: retInfo.LineBack
    };
    this.mod_PlinthAreaPositionInfo.push(JSON.stringify(legPositions));
  }
  
  //===================================================
  //          Create vector / docking
  //===================================================

  let TopEndCabinet = StartPosCabinet + this.mod_Height; 

	// Left side
	this.addDockingInfo(Dock.LeftBottom, new Vector3(0, 0, -this.mod_CarcaseDistanceWall), new Vector3(0, 0, this.mod_Depth));
	this.addDockingInfo(Dock.LeftTop, new Vector3(0, TopEndCabinet, -this.mod_CarcaseDistanceWall), new Vector3(0, TopEndCabinet, this.mod_Depth));

	// Right side
	this.addDockingInfo(Dock.RightBottom, new Vector3(this.mod_Width, 0, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, 0, this.mod_Depth));
	this.addDockingInfo(Dock.RightTop, new Vector3(this.mod_Width, TopEndCabinet, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, TopEndCabinet, this.mod_Depth));

	// Back side
	this.addDockingInfo(Dock.BackBottom, new Vector3(0, 0, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, 0, -this.mod_CarcaseDistanceWall));
	this.addDockingInfo(Dock.BackTop, new Vector3(0, TopEndCabinet, -this.mod_CarcaseDistanceWall), new Vector3(this.mod_Width, TopEndCabinet, -this.mod_CarcaseDistanceWall));

  //===================================================
  //          Manage the insertion level
  //===================================================

  
  if (this.mod_HeightPosInsertion > 0) {
    let InsertionHeight = this.mod_HeightPosInsertion + this.mod_PlinthAreaHeight;
    this.addInsertLevelHeight(InsertionHeight, true);
    this.insertLevelFixed = false;
  }
  else {
    this.addInsertLevelHeight(0, true);
    this.insertLevelFixed = true;
  }
  
  
	//===================================================
	//          Call the UserExit of this module
	//===================================================

	//let retInfo = GlobalFunc.ue_StorageunitSingle(this);

	//===================================================
	// POS Data
	//===================================================
	
	this._posData.set('depth', this.mod_Depth);
	this._posData.set('width', this.mod_Width);
	this._posData.set('height', this.mod_Height);
	this._posData.set('color', this.mod_FrontColor);
	this._posData.set('carcaseColor', this.mod_CarcaseColor);
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
export function mr_Filler01_manufacturerDataCompletion(this: dc_mr_Filler01):void {
  internal_enterModuleManufacturerDataCompletion('mr_Filler01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_Filler01_MANUFACTURERDATACOMPLETION

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
