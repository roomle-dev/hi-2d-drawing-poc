import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mr_Countertop, dc_mr_Countertop, adc_mr_Countertop } from '../internal/modules/mr_Countertop'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Countertop01, OD_M_mc_Countertop01 } from '../internal/modules/mc_Countertop01'
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

export function mr_Countertop_createBuildPlan(this: cbp_mr_Countertop):void {
  internal_enterModuleCreateBuildPlan('mr_Countertop', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mr_Countertop_CREATEBUILDPLAN

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
export function mr_Countertop_afterDataCompletion(this: adc_mr_Countertop):void {
  internal_enterModuleAfterDataCompletion('mr_Countertop', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_Countertop_AFTERDATACOMPLETION
  // Schuler Consulting
  // Create: February 2025
  // By Jiri Polcar
  // Purpose: CabinetLibrary
  //
  // Description:
  // Insertion of the counter tops
  // Add GenerationContours logic to create the countertops.
  //
  // Revisions:
  //
  //===================================================

  let posLength = 0;
  let posDepth: number | undefined;

  //===================================================
  //    ANALYZE CONTOURS FOR COUNTERTOPS GENERATION
  //===================================================

  // We don't have an import statement, but this works like that: Imports the necessary functions from the global functions file

  const {
    LongPartSegment,
    LineSegmentEquation,
    LongPartSegmentEdge,
    Vector3Extended,
    CONTOUR_ATTRIBUTE_OWNER_TYPE,
    CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE,
    CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT,
    CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR,
    mr_CornerunitStraight,
    mr_StorateunitSingle,
    mr_Upright,
  } = GlobalFunc.process_MathLongparts();
  // If import was used, this wouldn't be necessary, extract types from the imported functions for later use
  type LongPartSegmentTypeAlias = InstanceType<typeof LongPartSegment>;
  type LongPartSegmentEdgeTypeAlias = InstanceType<typeof LongPartSegmentEdge>;
  // An interable structure for Left and Right side computations
  type LeftRightAny = { Left: any, Right: any }

  //===================================================
  //    Fetch contours and create LongPartSegments
  //===================================================
  // The LongPartSegment is a class that is used to analyze the contours and their neighbours.

  const segments = this.getGenerationContours().map(contour => {
    const lps = new LongPartSegment(contour);
    lps.getOrAddSide(CKind.Left, CKind.Right);
    lps.getOrAddSide(CKind.Right, CKind.Left);
    const uprightOverhang: LeftRightAny = { Left: 0, Right: 0 };
    const visibleOverhang: LeftRightAny = { Left: 0, Right: 0 };
    const connectionType: LeftRightAny = {
      Left: lps.getAttributeOrDefault('mod_CarcaseVisLeft', 0) > 0 ? 'StraightFinished' : 'StraightUnfinished',
      Right: lps.getAttributeOrDefault('mod_CarcaseVisRight', 0) > 0 ? 'StraightFinished' : 'StraightUnfinished',
    };

    // Added by Ludwig -> get the data of the contour for the countertop drawings
    const countertopInfo = lps.getAttributeOrDefault('CountertopInfo', "");

    const connectionLength: LeftRightAny = { Left: 0, Right: 0 };
    lps.additionalData = {
      // An upright is present at the side - this adds its thickness to the countertop
      extensionUpright: uprightOverhang,
      // based on visible left/right, add an overhang
      visibleOverhang: visibleOverhang,
      // The distance in X from the rear left corner to the origin of the countertop
      // This is required especially for the starting countertop on corner units
      displaceOriginX: 0,
      // for assigning to the mc's mod_Countertop[Left|Right]EndType
      connectionType: connectionType,
      connectionLength: connectionLength,
      connectionSequenceIndex: 0,

      // For the countertop drawings
      countertopInfo: countertopInfo
    };
    return lps;
  });

  logInfo('mr_Countertop has been instantiated and has received ' + segments.length + ' generation contours.');

  // ===================================================
  // Match the LongPartSegments with their neighbours
  // ===================================================

  // Match sibling contours (corner units provide two sibling countertop contours for both sides of the corner)
  for (let i = 0; i < segments.length; i++) {
    const current = segments[i];
    const rest = segments.slice(i + 1);
    for (let j = 0; j < rest.length; j++) {
      current.tryMatchSiblings(rest);
    }
  }

  // Filter the carcases that have mod_CreateCountertop set only
  const carcaseSegmentsWithCountertops = segments.filter(segment =>
    [mr_CornerunitStraight, mr_StorateunitSingle].includes(segment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined'))
  );

  // Match carcases to carcases
  for (let i = 0; i < carcaseSegmentsWithCountertops.length; i++) {
    const current = carcaseSegmentsWithCountertops[i];
    const rest = carcaseSegmentsWithCountertops.slice(i + 1);
    for (let j = 0; j < rest.length; j++) {
      current.tryMatchNeighboursByAxialContinuity(CKind.Front, rest, { match3D: true, matchFootprint: true });
    }
  }

  /* Other contours interact with the countertop - these are:
      *  uprights
   * This will be necessary to determine other countertop attributes based on its neighbours.
   */
  const otherSegments = segments.filter(segment => !carcaseSegmentsWithCountertops.includes(segment));
  for (const nonCarcaseSegment of otherSegments) {
    nonCarcaseSegment.tryMatchNeighboursByPartialCoincidence(carcaseSegmentsWithCountertops, { match3D: false, matchFootprint: true });
  }

  // Helper formula for getting the depth of the segment from the side
  const getSegmentDepthFromSide = (segment: any) => {
    return segment.neighbours.get(CKind.Right)?.edge.length + this.mod_CountertopOverhangFront;
  };

  // Helper function to instantiate an mc_Countertop01
  let countertopIndex = 1;
  const addCountertop = () => {
    const countertop = this.addOD_M_mc_Countertop01();
    // Set an unique id to the mc - This prevents the "You can't assign Part to multiple Groups" error
    countertop.mod_CountertopId = `Countertop_${countertopIndex++}`;
    return countertop;
  }

  // Find the starting segments - these are the carcases that have no direct neighbour on the left side
  const startingSegments = carcaseSegmentsWithCountertops.filter(segment => segment.neighbours.get(CKind.Left)?.other === null);

  const mod_CountertopOverhangLeft = this.mod_CountertopOverhangLeft;
  const mod_CountertopOverhangRight = this.mod_CountertopOverhangRight;

  // ===================================================
  //        Get maximum countertop length
  // ===================================================
  let maximumLength;
  try {
    const boardMapping = GlobalFunc.find_BoardMapping(this.mod_CountertopColor, this.mod_CountertopThk);
    const boardEntry = GlobalFunc.find_BoardLibrary(boardMapping.BoardId!);
    maximumLength = boardEntry!.BoardLength;
  }
  catch (e) {
    maximumLength = 9999;
    logError(`Error while retrieving maximum countertop length. Using fallback value ${maximumLength}. Error: ${e}`);
  }

  // ===================================================
  //        Parse connection sequence
  // ===================================================
  const countertopConnectionSequence = this.mod_CountertopConnectionSequence.split('_');
  if (!countertopConnectionSequence || !countertopConnectionSequence.length) {
    logError('Countertop connection sequence is not set. Using default sequence (L).');
    countertopConnectionSequence.push('L');
  }

  // ===================================================
  //        Distribute connection sequence indices
  // ===================================================
  // We don't know which starting segment is the first one, so we need to go through all starts.
  // Then we count corner units, distributing the sequence indices to the corner parts.
  // This will crawl through the corner units that belong to 1 continuous countertop piece.
  // This also means that the indexing has reached from a previous starting segment. In which case, it already has a higher index and therefore we break the loop to quit - the higher index wins.
  for (const start of carcaseSegmentsWithCountertops) {
    let sequenceIndex = 0;
    let currentOrNull: LongPartSegmentTypeAlias | null | undefined = start;
    const alreadyVisited: LongPartSegmentTypeAlias[] = [start];
    while (currentOrNull) {
      const current: LongPartSegmentTypeAlias = currentOrNull!;

      const isCorner = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined') === mr_CornerunitStraight;
      if (isCorner) {
        const sibling = current.siblings.find((s: any) => s.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'no corner') === mr_CornerunitStraight)!;
        if (current.additionalData.connectionSequenceIndex > sequenceIndex) {
          break;
        }
        else {
          current.additionalData.connectionSequenceIndex = sequenceIndex;
          sibling.additionalData.connectionSequenceIndex = sequenceIndex;
          sequenceIndex++;
        }
        const isLeftPartOfCorner = (
          current.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Left' && current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
          || current.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Right' && current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT
        );
        // the neighbour must be on the right part
        currentOrNull = (isLeftPartOfCorner ? sibling : current).neighbours.get(CKind.Right)?.other;
      }
      else {
        currentOrNull = current.neighbours.get(CKind.Right)?.other;
      }
      if (currentOrNull && alreadyVisited.includes(currentOrNull!)) {
        logError('Countertop forms a closed loop. This is not supported.');
        break;
      }
      if (currentOrNull) {
        alreadyVisited.push(currentOrNull);
      }
    }
  }

  // ===================================================
  //       Cycle through the countertop segments
  // ===================================================
  // Compute the contributing lengths to the countertop segments
  // Compute their depth
  // Check if there are uprights, higher neighbours etc.

  for (const current of carcaseSegmentsWithCountertops) {

    const currentOwnerType: string = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined owner type');
    const cornerContourType = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner');
    const currentIsStraightCornerPart = cornerContourType === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT;

    // The neighbours of the current segment. 
    const dockingSegments: LeftRightAny = {
      Left: current,
      Right: current,
    }

    // ===================================================
    // compute length, depth and origin displacement of the long part segments
    // ===================================================

    if (
      currentOwnerType === mr_CornerunitStraight
      && currentIsStraightCornerPart // this ensures it runs only once
    ) {

      // Either CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT or CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR

      // get the side of the corner
      const mod_CarcaseDirection = current.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction');
      // Corner provides two parts of the countertop, we need first to compute both contributions.
      // For this, we need to find the perpendicular and straight part of the corner.
      // We have one of them, the other is its sibling, which we can assume reliably to exist and we can safely use the ! operator.
      const sibling = current.siblings.find((s: any) => s.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'no corner') === mr_CornerunitStraight)!;

      const straightCornerPart: LongPartSegmentTypeAlias = currentIsStraightCornerPart ? current : sibling;
      const perpendicularCornerPart: LongPartSegmentTypeAlias = currentIsStraightCornerPart ? sibling : current;
      // The straight part depth is defined as in the StorageunitSingle by the mod_Depth
      straightCornerPart.additionalData.segmentDepth = getSegmentDepthFromSide(straightCornerPart);
      // if the perpendicular part has a neighbour, take depth from the neighbour; otherwise we assume that the straight and perpendicular depths are the same
      const perpendicularPartDockSide = mod_CarcaseDirection === 'Left' ? CKind.Left : CKind.Right;
      const perpendicularPartNeighbour = perpendicularCornerPart.neighbours.get(perpendicularPartDockSide)!.other;
      perpendicularCornerPart.additionalData.segmentDepth = perpendicularPartNeighbour ? getSegmentDepthFromSide(perpendicularPartNeighbour) : straightCornerPart.additionalData.segmentDepth;

      // Compute the length or the corner part. First, we compute them in a way that they are extended so that their backwalls meet at the corner of the assumed wall
      // We make a line segment of the straight backwall from BL to BR corner:
      const straightBackSide = new LineSegmentEquation(
        // more robust, doesn't rely on contour winding order, than using the getOrAddSide method
        // also it is more confident later for computing the displaceOriginX
        straightCornerPart.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended(),
        straightCornerPart.getCornerPoint(CKind.Right, CKind.Back)!.toVector3Extended()
      );
      // We don't have a contour on the back side of the perpendicular part to create the line segmnet.
      // We get an oriented line segment of the docking side in the direction front front to back.
      const onside = new LineSegmentEquation(
        perpendicularCornerPart.getCornerPoint(perpendicularPartDockSide, CKind.Front)!.toVector3Extended(),
        perpendicularCornerPart.getCornerPoint(perpendicularPartDockSide, CKind.Back)!.toVector3Extended()
      );
      // Then, we use it to compute a coordinate of a point that belongs to the back side at its depth.
      const backpoint = onside.getPointAt(
        perpendicularCornerPart.additionalData.segmentDepth
        - this.mod_CountertopOverhangFront // the overhang is already included on the front; it needs to be subtracted, otherwise it'll be counted twice
      );
      const perpendiuclarPartBackside = new LineSegmentEquation(backpoint, perpendicularCornerPart.neighbours.get(CKind.Front)!.edge!.direction.add(backpoint));
      // and now we can get the point of intersection of the back sides
      const intersectionOfBacksides = straightBackSide.intersection(perpendiuclarPartBackside)!;
      // and finally, we can get the length of the corner parts:
      const straightPartDockSide = mod_CarcaseDirection === 'Left' ? CKind.Right : CKind.Left;
      const straightPartEdge = straightCornerPart.neighbours.get(straightPartDockSide)!.edge!;
      straightCornerPart.additionalData.segmentLength = straightPartEdge.perpendicularDistanceOfPoint(intersectionOfBacksides);
      perpendicularCornerPart.additionalData.segmentLength = perpendicularCornerPart.neighbours.get(perpendicularPartDockSide)!.edge!.perpendicularDistanceOfPoint(intersectionOfBacksides);

      // Now the corners are fully coincident where side of one meets the backside of the other one, and they are ready to get modified with the connection type sequencer. But we will do that later.

      dockingSegments.Left = mod_CarcaseDirection === 'Left' ? perpendicularCornerPart : straightCornerPart;
      dockingSegments.Right = mod_CarcaseDirection === 'Left' ? straightCornerPart : perpendicularCornerPart;

      if (mod_CarcaseDirection === 'Left' && intersectionOfBacksides) {
        straightCornerPart.additionalData.displaceOriginX = straightBackSide.getParameterOfPoint(intersectionOfBacksides);
      }


      // TODO: get the transition type from the attribute and distribute it to the corners
      const sequenceIndex = current.additionalData.connectionSequenceIndex;
      const countertopCornerConnectionType: string = countertopConnectionSequence[(sequenceIndex) % countertopConnectionSequence.length];
      if (sequenceIndex > countertopConnectionSequence.length) {
        logInfo(`mod_CountertopConnectionSequence ${countertopConnectionSequence.join('_')} is too short - it has ${countertopConnectionSequence.length}, but index ${sequenceIndex} is requested. Sequence is repeated.`);
      }
      if (countertopCornerConnectionType === 'L') {
        dockingSegments.Right.additionalData.segmentLength -= dockingSegments.Left.additionalData.segmentDepth;
        if (currentIsStraightCornerPart) {
          // this incrementation is running twice without this condition - TODO refactor so that all those computations run only once (this whole big block of code is duplicated, once for straight, once for perpendicular part of the corner unit)
          dockingSegments.Right.additionalData.displaceOriginX += dockingSegments.Left.additionalData.segmentDepth;
        }
        dockingSegments.Left.additionalData.connectionType.Right = 'Groove';
        dockingSegments.Right.additionalData.connectionType.Left = 'Tongue';
        dockingSegments.Left.additionalData.connectionLength.Right = dockingSegments.Right.additionalData.segmentDepth;
        dockingSegments.Right.additionalData.connectionLength.Left = dockingSegments.Left.additionalData.segmentDepth;
      }
      else if (countertopCornerConnectionType === 'R') {
        dockingSegments.Left.additionalData.segmentLength -= dockingSegments.Right.additionalData.segmentDepth;
        dockingSegments.Left.additionalData.connectionType.Right = 'Tongue';
        dockingSegments.Right.additionalData.connectionType.Left = 'Groove';
        dockingSegments.Left.additionalData.connectionLength.Right = dockingSegments.Right.additionalData.segmentDepth;
        dockingSegments.Right.additionalData.connectionLength.Left = dockingSegments.Left.additionalData.segmentDepth;
      }
      else if (countertopCornerConnectionType === 'M') {
        dockingSegments.Left.additionalData.connectionType.Right = 'Mitre';
        dockingSegments.Right.additionalData.connectionType.Left = 'Mitre';
        // TODO: Should be affected by sin(45 degrees)?
        dockingSegments.Left.additionalData.connectionLength.Right = dockingSegments.Right.additionalData.segmentDepth * Math.SQRT2;
        dockingSegments.Right.additionalData.connectionLength.Left = dockingSegments.Left.additionalData.segmentDepth * Math.SQRT2;
      }
      else {
        logError(`Unknown countertop corner connection type ${countertopCornerConnectionType} in ${this.mod_CountertopConnectionSequence}. Valid types: L, R, M.`);
      }
    }
    else if (currentOwnerType === mr_StorateunitSingle) {
      current.additionalData.segmentLength = current.getLengthBetweenParallelSides(CKind.Left, CKind.Right);
      current.additionalData.segmentDepth = getSegmentDepthFromSide(current);
    }
    else {
      // Perpendicular corner part of the corner unit - ignore, otherwise it'll compute two times.
    }

    // ===================================================
    // For both Left and Right sides, if free (other === null), check footprint neighbours
    // If there is a higher neighbour, no overhang
    // Else if there is an upright with the same size, extension for upright and check further overhang
    // ===================================================

    const currentHeight = current.generationContour.position.y + current.generationContour.height;

    // This also needs to run only once, and at the time the corner unit's dockingSegments are therefore set correctly
    if (
      currentOwnerType === mr_StorateunitSingle
      || currentOwnerType === mr_CornerunitStraight && currentIsStraightCornerPart
    ) {
      ['Left', 'Right'].forEach((s) => {
        const dock = dockingSegments[s as keyof LeftRightAny];
        const dockside = s as CKind;
        const matchside = dockside === CKind.Left ? CKind.Right : CKind.Left;
        const dockEdge = dock.neighbours.get(dockside) as LongPartSegmentEdgeTypeAlias;

        // check if there is an upright
        const upright = dockEdge.neighboursInFootprint.find((n: LongPartSegmentTypeAlias) => n.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined') === mr_Upright);
        if (upright) {
          const uprightHeight = (upright?.generationContour.height ?? 0) + (upright?.generationContour.position.y ?? 0);
          const uprightThk = upright.getLengthBetweenParallelSides(dockside, matchside);
          // check if the upright's top edge is in the same height - if yes, it is covering this carcase and the countertop should be extended
          if (
            Math.abs(uprightHeight - currentHeight) < Vector3Extended.EPS
          ) {
            const overhang = s === 'Left' ? mod_CountertopOverhangLeft : mod_CountertopOverhangRight;
            current.additionalData.extensionUpright[s] = uprightThk! + overhang;
          }
        }

        const sideVisible = current.getAttributeOrDefault(`mod_CarcaseVis${s}`, 0) > 0;
        if (
          dockEdge.other === null
        ) {
          const overhang = s === 'Left' ? mod_CountertopOverhangLeft : mod_CountertopOverhangRight;
          current.additionalData.visibleOverhang[s] = sideVisible ? overhang : 0;
        }

      });
    }
    else {
      // Perpendicular corner part of the corner unit - ignore, otherwise it'll compute two times.
    }

  }

  // =============================================================
  //       Cycle through the starting segments of the countertop
  // =============================================================
  // The starting segments are those who don't have a left neighbour carcase.
  // We need to collect them in a straight line by crawling to the right neighbours.
  // Then we divide the collected segment lengths by the maximum length of the material.

  for (const segmentIndex in startingSegments) {
    const firstSegment = startingSegments[segmentIndex];
    let currentOrNull: LongPartSegmentTypeAlias | null | undefined = firstSegment;
    let lastSegment: any = firstSegment;
    const allSegmentsInThisSection: LongPartSegmentTypeAlias[] = [];

    // From the firstSegment, crawl to the right neighbours until we get to the end
    while (currentOrNull) {
      const current: LongPartSegmentTypeAlias = currentOrNull!;
      allSegmentsInThisSection.push(current);
      // get the next one ... if there is none, the loop will terminate
      currentOrNull = current.neighbours.get(CKind.Right)?.other;
      if (current) { lastSegment = current; }
    }

    // ==========================================================================
    //       Apply the uprights, overhangs to the ends of the countertop
    // ==========================================================================
    // ... where it is eligible.
    // That means both sides of the mr_StorageunitSingle if the sides are free
    // And dockable sides of the mr_CornerUnitStraight if the sides are free

    const firstSegmentType = firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined');
    const lastSegmentType = lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined');
    const firstIsCornerWithFreeLeftSide = (
      firstSegmentType === mr_CornerunitStraight
      && firstSegment.neighbours.get(CKind.Left)?.other === null
      && (
        (
          firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Left'
          && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
        )
        || (
          firstSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Right'
          && firstSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT
        )
      )
    );
    const lastIsCornerWithFreeRightSide = (
      lastSegmentType === mr_CornerunitStraight
      && lastSegment.neighbours.get(CKind.Right)?.other === null
      && (
        (
          lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Right'
          && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR
        )
        || (
          lastSegment.getAttributeOrDefault('mod_CarcaseDirection', 'undefined') === 'Left'
          && lastSegment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'undefined') === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT
        )
      )
    );

    if (firstSegmentType === mr_StorateunitSingle || firstIsCornerWithFreeLeftSide) {
      // Extend by the upright thickness
      firstSegment.additionalData.segmentLength += firstSegment.additionalData.extensionUpright.Left;
      firstSegment.additionalData.displaceOriginX -= firstSegment.additionalData.extensionUpright.Left;
      // Extend by overhang
      firstSegment.additionalData.segmentLength += firstSegment.additionalData.visibleOverhang.Left;
      firstSegment.additionalData.displaceOriginX -= firstSegment.additionalData.visibleOverhang.Left;
      // The left side also needs to move the origin, because the countertop starts on the left side
    }

    if (lastSegmentType === mr_StorateunitSingle || lastIsCornerWithFreeRightSide) {
      // Extend by the upright thickness
      lastSegment.additionalData.segmentLength += lastSegment.additionalData.extensionUpright.Right;
      // Extend by the overhang
      lastSegment.additionalData.segmentLength += lastSegment.additionalData.visibleOverhang.Right;
    }

    // ===================================================
    //     Divide the countertop by maximum length
    // ===================================================
    const segmentLengths = allSegmentsInThisSection.map(segment => segment.additionalData.segmentLength);
    const segmentLengthsReversed = [...segmentLengths].reverse();
    const segmentGroupsLeftToRight = GlobalFunc.process_PanelLengthSplitByMaximum(segmentLengths, maximumLength, 'LeastToAvg');
    const segmentGroupsRightToLeft = GlobalFunc.process_PanelLengthSplitByMaximum(segmentLengthsReversed, maximumLength, 'LeastToAvg');

    // Check whether we get less segments if this is reversed or not
    const segmentGroups = segmentGroupsRightToLeft.length > segmentGroupsLeftToRight.length ? segmentGroupsLeftToRight : segmentGroupsRightToLeft;


    // ===================================================
    //     Instantiate the countertop segments
    // ===================================================
    for (let i = 0; i < segmentGroups.length - 1; i++) {
      const start = segmentGroups[i];
      const end = segmentGroups[i + 1] ?? segmentLengths.length;

      let totalLength = 0;

      for (let j = start; j < end; j++) {
        totalLength += allSegmentsInThisSection[j].additionalData.segmentLength;
      }

      const countertopSegmentStart = allSegmentsInThisSection[start];
      const countertopSegmentEnd = allSegmentsInThisSection[end - 1];

      const displacementCountertopX = countertopSegmentStart.additionalData.displaceOriginX;

      const countertop = addCountertop();
      countertop.mod_CountertopWidth = Math.round(totalLength * 10) / 10;;
      countertop.mod_CountertopThk = this.mod_CountertopThk;
      countertop.mod_CountertopLeftEndType = countertopSegmentStart.additionalData.connectionType.Left;
      countertop.mod_CountertopRightEndType = countertopSegmentEnd.additionalData.connectionType.Right;
      countertop.mod_CountertopConnectionLengthLeft = countertopSegmentStart.additionalData.connectionLength.Left;
      countertop.mod_CountertopConnectionLengthRight = countertopSegmentEnd.additionalData.connectionLength.Right;
      countertop.mod_CountertopDepth = countertopSegmentStart.additionalData.segmentDepth as number;

      // Added by Ludwig -> write the Edgetype correctly so we can use it in the BOM
      //===============================================================================================

      countertop.mod_CountertopEdgeLeftType = (
        countertopSegmentStart.additionalData.connectionType.Left === "StraightFinished"
        // [Jiri] if upright, always visible
        || countertopSegmentStart.additionalData.extensionUpright.Left > 0
      ) ? "Straight"
        : "NoEdge";

      countertop.mod_CountertopEdgeRightType = (
        countertopSegmentEnd.additionalData.connectionType.Right === "StraightFinished"
        // [Jiri] if upright, always visible
        || countertopSegmentEnd.additionalData.extensionUpright.Right > 0
      ) ? "Straight"
        : "NoEdge";

      // Added by Ludwig -> pass data for the drawings to the countertop segment
      //===============================================================================================

      totalLength = 0;
      for (let j = start; j < end; j++) {

        // Read the data from the contour segment
        let data = allSegmentsInThisSection[j].additionalData.countertopInfo;
        let parsedData = data ? JSON.parse(data) : "";

        // Check if data is existing
        if (data) {

          // Check if there is a cutout
          if (parsedData.Cutout === 1) {
            try {
              let cutoutData = JSON.parse(parsedData.CutoutData);

              // Calculate the position of the cutout
              if (typeof cutoutData.CutPosX === 'number') {
                cutoutData.CutPosX += totalLength;
                parsedData.CutoutData = JSON.stringify(cutoutData);
              }
            }
            catch (e) {
              logError('Error parsing HobData: ' + e);
            }
          }
        }

        // Position of the cabinet for next iteration
        totalLength += allSegmentsInThisSection[j].additionalData.segmentLength;
        totalLength = Math.round(totalLength * 10) / 10;

        // Push it to the countertop
        countertop.mod_CountertopInfo.push(JSON.stringify(parsedData));
      }

      //===============================================================================================

      // get the front edge as an insertion reference
      const frontLeftCorner = countertopSegmentStart.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended();
      const frontRightCorner = countertopSegmentStart.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended();
      const rearLeftCorner = countertopSegmentStart.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended();
      // We must align the countertop with the front edge in some offset, but its pivot is at the rear left corner.
      const localTranslation =
        rearLeftCorner
          // direction from the rear left corner to the front left corner
          .subtract(frontLeftCorner)
          .normalize()
          // position of the countertop pivot
          .scale(countertop.mod_CountertopDepth - this.mod_CountertopOverhangFront)
        ;
      const directionEquation =
        new LineSegmentEquation(frontLeftCorner, frontRightCorner)
          .translate({ both: localTranslation })
          .extend(displacementCountertopX, displacementCountertopX)
        ;
      const transformation = directionEquation.getTransformationMatrixToStartPoint();

      countertop.setOrigin(transformation);

      // for pricing
      this.mod_LengthList.push(totalLength);

      posDepth ??= countertop.mod_CountertopDepth;
      posLength += countertop.mod_CountertopWidth ?? 0;
    }
  }

  // POS Data
  if (posDepth) {
    this._posData.set('depth', posDepth);
  }
  this._posData.set('width', posLength);
  this._posData.set('height', this.mod_CountertopThk);
  this._posData.set('color', this.mod_CountertopColor);
  this._posData.set('doorDirection', this.mod_CountertopConnectionSequence);
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
export function mr_Countertop_manufacturerDataCompletion(this: dc_mr_Countertop):void {
  internal_enterModuleManufacturerDataCompletion('mr_Countertop', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_Countertop_MANUFACTURERDATACOMPLETION

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
