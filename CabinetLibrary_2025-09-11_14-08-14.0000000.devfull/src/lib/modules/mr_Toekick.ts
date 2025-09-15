import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mr_Toekick, dc_mr_Toekick, adc_mr_Toekick } from '../internal/modules/mr_Toekick'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Toekick, OD_M_mc_Toekick } from '../internal/modules/mc_Toekick'
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

export function mr_Toekick_createBuildPlan(this: cbp_mr_Toekick):void {
  internal_enterModuleCreateBuildPlan('mr_Toekick', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mr_Toekick_CREATEBUILDPLAN

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
export function mr_Toekick_afterDataCompletion(this: adc_mr_Toekick):void {
  internal_enterModuleAfterDataCompletion('mr_Toekick', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_Toekick_AFTERDATACOMPLETION
  // Schuler Consulting
  // Create: October 2024
  // By Stefano Cortese
  // Purpose: CabinetLibrary
  //
  // Description:
  // Creation of the Toekick
  // 
  // Modified by Jiri Polcar in Match 2025
  // Added generated toekick from the contours
  //
  // Revisions:
  // 
  //===================================================

  //===================================================
  //          Add module for the Toeckick
  //===================================================
  let toekickCounter = 0
  let posHeight: number | undefined;
  let posLength = 0;
  const {
    LongPartSegment,
    LineSegmentEquation,
    LongPartSegmentEdge,
    Vector3Extended,
    CONTOUR_ATTRIBUTE_OWNER_TYPE,
    CONTOUR_ATTRIBUTE_ADD_TOEKICK,
    CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE,
    CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT,
    CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR,
    mr_CornerunitStraight,
    mr_StorateunitSingle,
    mr_Upright, // do we have to solve the upright? it won't touch the upright contour anyway
  } = GlobalFunc.process_MathLongparts();
  type LongPartSegmentTypeAlias = InstanceType<typeof LongPartSegment>;
  type LongPartSegmentEdgeTypeAlias = InstanceType<typeof LongPartSegmentEdge>;
  type LeftRightAny = { Left: any, Right: any }

  const segments = this.getGenerationContours().map(contour => {
    const lps = new LongPartSegment(contour);
    lps.getOrAddSide(CKind.Left, CKind.Right);
    lps.getOrAddSide(CKind.Right, CKind.Left);
    const sideToekickPossible: LeftRightAny = { Left: true, Right: true };
    lps.additionalData = {
      segmentLength: lps.getLengthBetweenParallelSides(CKind.Left, CKind.Right),
      sideToekickPossible: sideToekickPossible,
      displacementToekickX_Corner: 0,
      addToekickWithLength: 0,
    };
    return lps;
  });

  const frontIsLong = this.mod_ToekickSidepanelTransitionType === 'FrontLong';

  logInfo('mr_Toekick has been instantiated and has received ' + segments.length + ' generation contours.');

  const carcaseSegmentsWithToekicks = segments.filter(segment =>
    [mr_CornerunitStraight, mr_StorateunitSingle].includes(segment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined'))
    && segment.getAttributeOrDefault(CONTOUR_ATTRIBUTE_ADD_TOEKICK, 0) === 1
  );
  const otherSegments = segments.filter(segment => !carcaseSegmentsWithToekicks.includes(segment));

  // match carcases with toekicks
  for (let i = 0; i < carcaseSegmentsWithToekicks.length; i++) {
    const current = carcaseSegmentsWithToekicks[i];
    const rest = carcaseSegmentsWithToekicks.slice(i + 1);
    for (let j = 0; j < rest.length; j++) {
      current.tryMatchNeighboursByAxialContinuity(CKind.Front, rest, { match3D: true, matchFootprint: true });
      current.tryMatchSiblings(rest);
    }
  }

  // match rest of countertop contours with the countertop segments on footprints
  // this will be necessary to determine other countertop attributes based on its neighbours
  for (const nonCarcaseSegment of otherSegments) {
    nonCarcaseSegment.tryMatchNeighboursByPartialCoincidence(carcaseSegmentsWithToekicks, { match3D: false, matchFootprint: true });
  }

  const startingSegments = carcaseSegmentsWithToekicks.filter(segment => segment.neighbours.get(CKind.Left)?.other === null);

  const toekickConnectionSequence = this.mod_ToekickConnectionSequence.split('_');
  if (!toekickConnectionSequence || !toekickConnectionSequence.length) {
    logError('Toekick connection sequence is not set. Using default sequence (L).');
    toekickConnectionSequence.push('L');
  }
  let toekickConnectionSequenceIndex = 0;

  let toekickIndex = 1;
  const addToekick = () => {
    const toekick = this.addOD_M_mc_Toekick();
    toekick.mod_ToekickId = `Toekick_${toekickIndex++}`;
    return toekick;
  }

  for (const segmentIndex in startingSegments) {
    const firstSegment = startingSegments[segmentIndex];
    const allSegmentsInThisSection = [];

    let current: LongPartSegmentTypeAlias | null = firstSegment;
    let lastSegment: any = firstSegment;

    while (current) {
      allSegmentsInThisSection.push(current);
      const currentOwnerType = current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'undefined owner type');

      // do stuff, check with corners etc.
      if (currentOwnerType === mr_CornerunitStraight) {
        const sibling: LongPartSegmentTypeAlias = current.siblings.find((s: any) => s.getAttributeOrDefault(CONTOUR_ATTRIBUTE_OWNER_TYPE, 'no corner') === mr_CornerunitStraight)!;
        const currentIsStraightCornerPart = (current.getAttributeOrDefault(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, 'not a corner')) === CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT;

        const pointOfIntersectionOfFrontSides = current.neighbours.get(CKind.Front)?.edge!.intersection(sibling.neighbours.get(CKind.Front)?.edge!)!;

        const CarcaseDirection = current.getAttributeOrDefault('mod_CarcaseDirection', 'undefined direction');

        // can not use CKind.Front contour, because its direction is not assured.
        const frontSideOriented = new LineSegmentEquation(
          current.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended(),
          current.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended(),
        );

        // TODO: get the transition type from the attribute and distribute it to the corners
        const toekickConnectionType: string = toekickConnectionSequence[(toekickConnectionSequenceIndex++) % toekickConnectionSequence.length];
        if (toekickConnectionSequenceIndex >= toekickConnectionSequence.length - 1) {
          logInfo(`mod_ToekickConnectionSequence ${toekickConnectionSequence.join('_')} is too short - it has ${toekickConnectionSequence.length}, but ${toekickConnectionSequenceIndex} is requested. Sequence is repeated.`);
        }
        const toekickThk = this.mod_ToekickThk;

        // Based on whether this is a left or right corner and if it is its straight or perpendicular part, adjust lengths and displacements
        // Take into consideration the connection type - which of the two ends is the longer one.
        if (CarcaseDirection === 'Left' && currentIsStraightCornerPart) {
          current.additionalData.sideToekickPossible.Left = false;
          current.additionalData.segmentLength = current.neighbours.get(CKind.Right)?.edge?.perpendicularDistanceOfPoint(pointOfIntersectionOfFrontSides);
          current.additionalData.displacementToekickX_Corner = frontSideOriented.getParameterOfPoint(pointOfIntersectionOfFrontSides);
          if (toekickConnectionType === 'L') {
            current.additionalData.segmentLength -= toekickThk;
            current.additionalData.displacementToekickX_Corner += toekickThk;
          }
          else {
            current.additionalData.segmentLength += this.mod_ToekickConnectionOverhang;
            current.additionalData.displacementToekickX_Corner -= this.mod_ToekickConnectionOverhang;
          }
        }
        else if (CarcaseDirection === 'Left' && !currentIsStraightCornerPart) {
          current.additionalData.sideToekickPossible.Right = false;
          current.additionalData.segmentLength = current.neighbours.get(CKind.Left)?.edge?.perpendicularDistanceOfPoint(pointOfIntersectionOfFrontSides);
          current.additionalData.displacementToekickX_Corner = 0;
          if (toekickConnectionType === 'L') {
            current.additionalData.segmentLength += this.mod_ToekickConnectionOverhang;
          }
          else {
            current.additionalData.segmentLength -= toekickThk;
          }
        }
        else if (CarcaseDirection === 'Right' && currentIsStraightCornerPart) {
          current.additionalData.sideToekickPossible.Right = false;
          current.additionalData.segmentLength = current.neighbours.get(CKind.Left)?.edge?.perpendicularDistanceOfPoint(pointOfIntersectionOfFrontSides);
          current.additionalData.displacementToekickX_Corner = 0;
          if (toekickConnectionType === 'L') {
            current.additionalData.segmentLength += this.mod_ToekickConnectionOverhang;
          }
          else {
            current.additionalData.segmentLength -= toekickThk;
          }
        }
        else if (CarcaseDirection === 'Right' && !currentIsStraightCornerPart) {
          current.additionalData.sideToekickPossible.Left = false;
          current.additionalData.segmentLength = current.neighbours.get(CKind.Right)?.edge?.perpendicularDistanceOfPoint(pointOfIntersectionOfFrontSides);
          current.additionalData.displacementToekickX_Corner = frontSideOriented.getParameterOfPoint(pointOfIntersectionOfFrontSides);
          if (toekickConnectionType === 'L') {
            current.additionalData.segmentLength -= toekickThk;
            current.additionalData.displacementToekickX_Corner += toekickThk;
          }
          else {
            current.additionalData.segmentLength += this.mod_ToekickConnectionOverhang;
            current.additionalData.displacementToekickX_Corner -= this.mod_ToekickConnectionOverhang;
          }
        }
        else {
          logError('CarcaseDirection is not set correctly: ' + CarcaseDirection);
        }
      }

      current = current.neighbours.get(CKind.Right)?.other ?? null;
      if (current) {
        lastSegment = current;
        if (allSegmentsInThisSection.includes(current)) {
          logError('Toekicks form a closed loop. This is not supported.');
          break;
        }
      }
    }



    const addLeftSidePanel = (
      firstSegment.getAttributeOrDefault('mod_PlinthAreaVisLeft', 1) > 0
      && firstSegment.additionalData.sideToekickPossible.Left
    );
    const addRightSidePanel = (
      lastSegment.getAttributeOrDefault('mod_PlinthAreaVisRight', 1) > 0
      && lastSegment.additionalData.sideToekickPossible.Right
    );

    if (addRightSidePanel && frontIsLong) {
      lastSegment.additionalData.segmentLength += this.mod_ToekickThk;
    }

    if (addLeftSidePanel && frontIsLong) {
      firstSegment.additionalData.segmentLength += this.mod_ToekickThk;
      firstSegment.additionalData.displacementToekickX_Corner -= this.mod_ToekickThk;
    }

    // Get the maximum toekick possible length from the boards properties.
    let maximumLength;
    try {
      const boardMapping = GlobalFunc.find_BoardMapping(this.mod_ToekickColor, this.mod_ToekickThk);
      const boardEntry = GlobalFunc.find_BoardLibrary(boardMapping.BoardId!);
      maximumLength = boardEntry!.BoardLength;
    }
    catch (e) {
      maximumLength = 9999;
      //logError(`Error while retrieving maximum toekick length. Using fallback value ${maximumLength}. Error: ${e}`);
    }

    /*
     * Distribute the toekick segments to groups of maximum length, do not split them in the middle of the segments and
     * if possible, make them uniform.
     */
    const segmentLengths = allSegmentsInThisSection.map(segment => segment.additionalData.segmentLength);
    const segmentLengthsReversed = [...segmentLengths].reverse();

    const segmentGroupsLeftToRight = GlobalFunc.process_PanelLengthSplitByMaximum(segmentLengths, maximumLength, 'LeastToAvg');
    const segmentGroupsRightToLeft = GlobalFunc.process_PanelLengthSplitByMaximum(segmentLengthsReversed, maximumLength, 'LeastToAvg');

    const segmentGroups = segmentGroupsRightToLeft.length > segmentGroupsLeftToRight.length ? segmentGroupsLeftToRight : segmentGroupsRightToLeft;
    for (let i = 0; i < segmentGroups.length; i++) {
      const start = segmentGroups[i];
      const end = segmentGroups[i + 1] ?? segmentLengths.length;
      for (let j = start; j < end; j++) {
        allSegmentsInThisSection[start].additionalData.addToekickWithLength += allSegmentsInThisSection[j].additionalData.segmentLength;
      }
    }


    // Finally add the toekick modules.

    current = firstSegment;
    let currentToekick = null;
    let lastToekick = null;

    while (current) {
      if (current.additionalData.addToekickWithLength > 0) {

        // get the front edge as an insertion reference
        const frontLeftCorner = current.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended();
        const frontRightCorner = current.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended();
        let directionEquation = new LineSegmentEquation(frontLeftCorner, frontRightCorner, true).extend(current.additionalData.displacementToekickX_Corner, 0);

        currentToekick = addToekick();
        currentToekick.mod_ToekickHeight = firstSegment.generationContour.height - (this.mod_ToekickReductionTop ?? 0);
        currentToekick.mod_ToekickLength = current.additionalData.addToekickWithLength;

        const transformation = directionEquation.getTransformationMatrixToStartPoint();
        currentToekick.setOrigin(transformation);

        // for pricing
        this.mod_LengthList.push(current.additionalData.addToekickWithLength);

        lastToekick = currentToekick;
        posLength += currentToekick.mod_ToekickLength ?? 0;
        posHeight ??= currentToekick.mod_ToekickHeight;
      }

      current = current.neighbours.get(CKind.Right)?.other ?? null;
    }



    // check side toekicks
    if (addLeftSidePanel) {
      const leftToekick = addToekick();
      leftToekick.mod_ToekickHeight =
        firstSegment.generationContour.height
        + (this.mod_ToekickSidepanelOverdimensionBtm ?? 0)
        ;

      const leftToekickLineEquation = new LineSegmentEquation(
        firstSegment.getCornerPoint(CKind.Left, CKind.Back)!.toVector3Extended(),
        firstSegment.getCornerPoint(CKind.Left, CKind.Front)!.toVector3Extended(),
        true,
      )
        .translate({ both: new Vector3(0, -(this.mod_ToekickSidepanelOverdimensionBtm ?? 0), 0) })
        .extend(
          0,
          frontIsLong ? -this.mod_ToekickThk : 0,
        )
        ;
      // TODO who wins and is longer - front or side?
      leftToekick.mod_ToekickLength = leftToekickLineEquation.length + this.mod_ToekickThk;
      leftToekick.setOrigin(
        leftToekickLineEquation.getTransformationMatrixToStartPoint()
      );

      // for pricing
      this.mod_LengthList.push(leftToekick.mod_ToekickLength);
      posLength += leftToekick.mod_ToekickLength ?? 0;
      posHeight ??= leftToekick.mod_ToekickHeight;
    }



    if (addRightSidePanel) {
      const rightToekick = addToekick();
      rightToekick.mod_ToekickHeight =
        firstSegment.generationContour.height
        + (this.mod_ToekickSidepanelOverdimensionBtm ?? 0)
        ;

      const rightToekickLineEquation_beforeAlignment = new LineSegmentEquation(
        lastSegment.getCornerPoint(CKind.Right, CKind.Back)!.toVector3Extended(),
        lastSegment.getCornerPoint(CKind.Right, CKind.Front)!.toVector3Extended(),
        true,
      );
      // TODO who wins and is longer - front or side?
      rightToekick.mod_ToekickLength = rightToekickLineEquation_beforeAlignment.length + this.mod_ToekickThk;
      const rightToekickLineEquation = new LineSegmentEquation(
        rightToekickLineEquation_beforeAlignment.getPointAt(rightToekick.mod_ToekickLength),
        rightToekickLineEquation_beforeAlignment.start,
        true,
      ).translate({ both: new Vector3(0, -(this.mod_ToekickSidepanelOverdimensionBtm ?? 0), 0) })
        .extend(frontIsLong ? this.mod_ToekickThk : 0, 0)
        ;
      rightToekick.setOrigin(
        rightToekickLineEquation.getTransformationMatrixToStartPoint()
      );

      // for pricing
      this.mod_LengthList.push(rightToekick.mod_ToekickLength);
      posLength += rightToekick.mod_ToekickLength ?? 0;
      posHeight ??= rightToekick.mod_ToekickHeight;
    }

  }

  // POS Data
  this._posData.set('depth', this.mod_ToekickThk);
  this._posData.set('width', posLength);
  if (posHeight) {
    this._posData.set('height', posHeight ?? 0);
  }
  this._posData.set('color', this.mod_ToekickColor);
  //this._posData.set('carcaseColor', this.mod_CarcaseColor);
  this._posData.set('doorDirection', this.mod_ToekickConnectionSequence);
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
export function mr_Toekick_manufacturerDataCompletion(this: dc_mr_Toekick):void {
  internal_enterModuleManufacturerDataCompletion('mr_Toekick', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_Toekick_MANUFACTURERDATACOMPLETION

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
