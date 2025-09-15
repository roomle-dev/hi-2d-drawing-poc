import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mr_CornerunitStraight, dc_mr_CornerunitStraight, adc_mr_CornerunitStraight } from '../internal/modules/mr_CornerunitStraight'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Storageunit01, OD_M_mc_Storageunit01 } from '../internal/modules/mc_Storageunit01'
import { dc_mc_PlinthArea01, OD_M_mc_PlinthArea01 } from '../internal/modules/mc_PlinthArea01'
import { dc_mf_Door, OD_M_mf_Door } from '../internal/modules/mf_Door'
import { dc_mc_CornerunitStraight01, OD_M_mc_CornerunitStraight01 } from '../internal/modules/mc_CornerunitStraight01'
import { dc_mf_RackArea, OD_M_mf_RackArea } from '../internal/modules/mf_RackArea'
import { dc_mf_Drawer, OD_M_mf_Drawer } from '../internal/modules/mf_Drawer'
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

export function mr_CornerunitStraight_createBuildPlan(this: cbp_mr_CornerunitStraight):void {
  internal_enterModuleCreateBuildPlan('mr_CornerunitStraight', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mr_CornerunitStraight_CREATEBUILDPLAN
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
	// Countertop
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

	const mf_CornerFillerFront = this.m.find((p) => p instanceof OD_M_mf_CornerFillerFront) as OD_M_mf_CornerFillerFront;
	let FillerWidthLeft = mf_CornerFillerFront?.mod_WidthLeft ?? 0;
	let FillerWidthRight = mf_CornerFillerFront?.mod_WidthRight ?? 0;

	const FillerConstruction = mf_CornerFillerFront?.mod_CornerunitStraightFillerConstruction_matrix?.PartInCornerCabinet ?? 'Mitre';

	if (FillerConstruction === 'Mitre') {
		// do nothing - the mitre cut is not influenced by the sides' thickness
	}
	else if (
		(FillerConstruction === 'Long' && this.mod_CarcaseDirection === 'Left')
		|| (FillerConstruction === 'Short' && this.mod_CarcaseDirection === 'Right')
	) {
		FillerWidthLeft += mf_CornerFillerFront.mod_ThkRight ?? 0;
	}
	else if (
		(FillerConstruction === 'Long' && this.mod_CarcaseDirection === 'Right')
		|| (FillerConstruction === 'Short' && this.mod_CarcaseDirection === 'Left')
	) {
		FillerWidthRight += mf_CornerFillerFront.mod_ThkLeft ?? 0;
	}
	else {
		logError('Cannot determine filler size in mr_CornerunitStraight for calculating fingergrip contours: mod_CornerunitStraightFillerConstruction_matrix?.PartInCornerCabine = ' + FillerConstruction);
	}

	const PlinthAreaType = this.mod_PlinthAreaDesign_matrix.PlinthAreaType ?? 'None';
	const plinthAreaHeight = (PlinthAreaType !== 'None' ? (this.mod_PlinthAreaHeight ?? 0) : 0);

	const countertopContourBounds = {
		xMin: 0,
		xMid: (
			this.mod_CarcaseDirection === 'Right'
				? (
					this.mod_CornerunitFrontWidth
					+ FillerWidthLeft
				)
				: (
					this.mod_Width
					- this.mod_CornerunitFrontWidth
					- FillerWidthRight
				)
		),
		xMax: this.mod_Width,
		zMin: Math.min(
			0,
			-this.mod_CarcaseDistanceWall,
		),
		zMid: this.mod_Depth,
		zMax: (
			this.mod_Depth
			+ (
				this.mod_CarcaseDirection === 'Right'
					? FillerWidthRight
					: FillerWidthLeft
			)
		),
		h: this.mod_Height + plinthAreaHeight,
	};

	//======================================================================
	// Countertop
	//======================================================================

	if (this.mod_CreateCountertop) {

		const contourCountertopStraightPart = Contour
			.M(countertopContourBounds.xMin, countertopContourBounds.zMin)
			.L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMin)
			.L(CKind.Right, countertopContourBounds.xMax, countertopContourBounds.zMid)
			.L(CKind.Front, countertopContourBounds.xMin, countertopContourBounds.zMid)
			.Z(CKind.Left)
			;
		// This actually decides if the countertop should really be added.
		contourCountertopStraightPart.attributes
			.set('mod_CarcaseDirection', this.mod_CarcaseDirection)
			.set('mod_CarcaseVisLeft', this.mod_CarcaseVisLeft ? 1 : 0)
			.set('mod_CarcaseVisRight', this.mod_CarcaseVisRight ? 1 : 0)
			.set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
			.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
			.set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT)
			;

		this.addGenerationContour(
			GenerationMethod.Countertop,
			countertopContourBounds.h,
			contourCountertopStraightPart,
		);

		const contourCountertopPerpendicularPart = this.mod_CarcaseDirection === 'Right'
			? (Contour
				.M(countertopContourBounds.xMax, countertopContourBounds.zMin)
				.L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMax)
				.L(CKind.Right, countertopContourBounds.xMid, countertopContourBounds.zMax)
				.L(CKind.Front, countertopContourBounds.xMid, countertopContourBounds.zMin)
				.Z(CKind.Left)
			) : (Contour
				.M(countertopContourBounds.xMin, countertopContourBounds.zMax)
				.L(CKind.Back, countertopContourBounds.xMin, countertopContourBounds.zMin)
				.L(CKind.Right, countertopContourBounds.xMid, countertopContourBounds.zMin)
				.L(CKind.Front, countertopContourBounds.xMid, countertopContourBounds.zMax)
				.Z(CKind.Left)
			);
		// This actually decides if the countertop should really be added.
		contourCountertopPerpendicularPart.attributes
			.set('mod_CarcaseDirection', this.mod_CarcaseDirection)
			.set('mod_CarcaseVisLeft', this.mod_CarcaseVisLeft ? 1 : 0)
			.set('mod_CarcaseVisRight', this.mod_CarcaseVisRight ? 1 : 0)
			.set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
			.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
			.set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR)
			;

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
	// Fingergrip (gola)
	//======================================================================

	if (this.mod_CreateFingergrip) {

		// collect middle fingergrips, based on corner direction, add them between min and max on x
		const mc = this.m.find(p => p instanceof OD_M_mc_Storageunit01) as any;
		if (mc) {
			const middleFingergripPositions = [
				mc.mod_FingergripPos1 ?? 0,
				mc.mod_FingergripPos2 ?? 0,
				mc.mod_FingergripPos3 ?? 0,
				mc.mod_FingergripPos4 ?? 0,
				mc.mod_FingergripPos5 ?? 0,
			].filter(p => p !== undefined && p > 0) as number[];

			if (middleFingergripPositions.length > 0) {

				const middleFingergripContourBounds = {
					xMin: this.mod_CarcaseDirection === 'Right' ? 0 : this.mod_Width - this.mod_CornerunitFrontWidth,
					xMax: this.mod_CarcaseDirection === 'Right' ? this.mod_CornerunitFrontWidth : this.mod_Width,
					zMin: countertopContourBounds.zMin,
					zMax: countertopContourBounds.zMax,
				}

				middleFingergripPositions.forEach((pos) => {

					const fingergripContour = Contour
						.M(middleFingergripContourBounds.xMin, middleFingergripContourBounds.zMin)
						.L(CKind.Back, middleFingergripContourBounds.xMax, middleFingergripContourBounds.zMin)
						.L(CKind.Right, middleFingergripContourBounds.xMax, middleFingergripContourBounds.zMax)
						.L(CKind.Front, middleFingergripContourBounds.xMin, middleFingergripContourBounds.zMax)
						.Z(CKind.Left)
						;

					fingergripContour.attributes
						.set('mod_FingergripPostype', 'Middle')
						.set('mod_FingergripType', mc.mod_FingergripType ?? 'None')
						;

					this.addGenerationContour(
						GenerationMethod.Fingergrip,
						pos + plinthAreaHeight,
						fingergripContour,
					);
				});
			}

			if (mc.mod_FingergripTop) {

				const h = mc.mod_CarcaseHeight - mc.mod_FingergripType_matrix.LShapeHeight + plinthAreaHeight;

				const profileThickness = this.mod_FingergripType_matrix.LShapeDepth ?? 0;

				let fingergripContourStraight: Contour;
				let fingergripContourPerpendicular: Contour;

				if (this.mod_CarcaseDirection === 'Right') {

					fingergripContourStraight = Contour
						.M(countertopContourBounds.xMin, countertopContourBounds.zMin)
						.L(CKind.Back, countertopContourBounds.xMid + profileThickness, countertopContourBounds.zMin)
						.L(CKind.Right, countertopContourBounds.xMid + profileThickness, countertopContourBounds.zMid)
						.L(CKind.Front, countertopContourBounds.xMin, countertopContourBounds.zMid)
						.Z(CKind.Left)
						;

					fingergripContourPerpendicular = Contour
						.M(countertopContourBounds.xMax, countertopContourBounds.zMid - profileThickness)
						.L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMax)
						.L(CKind.Right, countertopContourBounds.xMid, countertopContourBounds.zMax)
						.L(CKind.Front, countertopContourBounds.xMid, countertopContourBounds.zMid - profileThickness)
						.Z(CKind.Left)
						;

				}
				else {

					fingergripContourStraight = Contour
						.M(countertopContourBounds.xMid - profileThickness, countertopContourBounds.zMin)
						.L(CKind.Back, countertopContourBounds.xMax, countertopContourBounds.zMin)
						.L(CKind.Right, countertopContourBounds.xMax, countertopContourBounds.zMid)
						.L(CKind.Front, countertopContourBounds.xMid - profileThickness, countertopContourBounds.zMid)
						.Z(CKind.Left)
						;

					fingergripContourPerpendicular = Contour
						.M(countertopContourBounds.xMin, countertopContourBounds.zMax)
						.L(CKind.Back, countertopContourBounds.xMin, countertopContourBounds.zMid - profileThickness)
						.L(CKind.Right, countertopContourBounds.xMid, countertopContourBounds.zMid - profileThickness)
						.L(CKind.Front, countertopContourBounds.xMid, countertopContourBounds.zMax)
						.Z(CKind.Left)
						;

				}

				fingergripContourStraight.attributes
					.set('mod_FingergripPostype', 'Top')
					.set('mod_FingergripType', mc.mod_FingergripType ?? 'None')
					;

				fingergripContourPerpendicular.attributes
					.set('mod_FingergripPostype', 'Top')
					.set('mod_FingergripType', mc.mod_FingergripType ?? 'None')
					;

				this.addGenerationContour(
					GenerationMethod.Fingergrip,
					h,
					fingergripContourStraight,
				);

				this.addGenerationContour(
					GenerationMethod.Fingergrip,
					h,
					fingergripContourPerpendicular,
				);
			}

		}

		// if fingergriptop, add two - between side and frontwidth + fillerwidth, then between depth and depth + fillerdepth

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

	if (this.mod_CreateToekick && this.mod_PlinthAreaDesign != "10") {

		// Retrieve the positions of the legs
		let legPositionInfo;
		try {
			legPositionInfo = JSON.parse(this.mod_PlinthAreaPositionInfo[0]);
		}
		catch {
			logError(`Could not parse this.mod_PlinthAreaPositionInfo[0] in mr_CornerunitStraight ${this._id}. Toekick will not be recessed correctly.`)
			legPositionInfo = undefined;
		}
		// legPositionInfo.LineLeft  (In case this.mod_PlinthAreaVisLeft == true)
		// legPositionInfo.LineRight  (In case this.mod_PlinthAreaVisRight == true)
		// legPositionInfo.LineFront
		// legPositionInfo.LineBack (Probably not needed)

		const LineLeft = legPositionInfo?.LineLeft ?? 0;
		const LineRight = legPositionInfo?.LineRight ?? 0;
		const LineFront = legPositionInfo?.LineFront ?? 0;
		const LineBack = legPositionInfo?.LineBack ?? 0;
		const mod_PlinthAreaVisLeft = this.mod_PlinthAreaVisLeft ?? false;
		const mod_PlinthAreaVisRight = this.mod_PlinthAreaVisRight ?? false;


		const toekickContourBounds = {
			xMin: countertopContourBounds.xMin + (
				this.mod_CarcaseDirection === 'Right'
					? 0
					: (this.mod_CarcaseVisLeft ? LineLeft : 0)
			),
			xMid: (
				this.mod_CarcaseDirection === 'Right'
					? (
						this.mod_CornerunitFrontWidth
						+ FillerWidthLeft
						+ LineFront
					)
					: (
						this.mod_Width
						- this.mod_CornerunitFrontWidth
						- FillerWidthRight
						- LineFront
					)
			),
			xMax: countertopContourBounds.xMax + (
				this.mod_CarcaseDirection === 'Right'
					? (this.mod_CarcaseVisRight ? LineRight : 0)
					: 0
			),
			zMin: LineBack,
			zMid: this.mod_Depth - LineFront,
			zMax: (
				this.mod_Depth
				+ (
					this.mod_CarcaseDirection === 'Right'
						? FillerWidthRight
						: FillerWidthLeft
				)
				- (
					this.mod_CarcaseDirection === 'Right'
						? (this.mod_CarcaseVisRight ? LineRight : 0)
						: (this.mod_CarcaseVisLeft ? LineLeft : 0)
				)
			),
			h: plinthAreaHeight,
		};

		const contourToekickStraightPart = Contour
			.M(toekickContourBounds.xMin, toekickContourBounds.zMin)
			.L(CKind.Back, toekickContourBounds.xMax, toekickContourBounds.zMin)
			.L(CKind.Right, toekickContourBounds.xMax, toekickContourBounds.zMid)
			.L(CKind.Front, toekickContourBounds.xMin, toekickContourBounds.zMid)
			.Z(CKind.Left)
			;

		contourToekickStraightPart.attributes
			.set('mod_CarcaseDirection', this.mod_CarcaseDirection)
			.set('mod_PlinthAreaVisLeft', mod_PlinthAreaVisLeft ? 1 : 0)
			.set('mod_PlinthAreaVisRight', mod_PlinthAreaVisRight ? 1 : 0)
			.set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
			.set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, createToekick ? 1 : 0)
			.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
			.set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_STRAIGHT)
			;

		this.addGenerationContour(
			GenerationMethod.Toekick,
			toekickContourBounds.h,
			contourToekickStraightPart,
		);

		const contourToekickPerpendicularPart = this.mod_CarcaseDirection === 'Right'
			? (Contour
				.M(toekickContourBounds.xMax, toekickContourBounds.zMin)
				.L(CKind.Back, toekickContourBounds.xMax, toekickContourBounds.zMax)
				.L(CKind.Right, toekickContourBounds.xMid, toekickContourBounds.zMax)
				.L(CKind.Front, toekickContourBounds.xMid, toekickContourBounds.zMin)
				.Z(CKind.Left)
			) : (Contour
				.M(toekickContourBounds.xMin, toekickContourBounds.zMax)
				.L(CKind.Back, toekickContourBounds.xMin, toekickContourBounds.zMin)
				.L(CKind.Right, toekickContourBounds.xMid, toekickContourBounds.zMin)
				.L(CKind.Front, toekickContourBounds.xMid, toekickContourBounds.zMax)
				.Z(CKind.Left)
			);
		// This actually decides if the countertop should really be added.
		contourToekickPerpendicularPart.attributes
			.set('mod_CarcaseDirection', this.mod_CarcaseDirection)
			.set('mod_PlinthAreaVisLeft', mod_PlinthAreaVisLeft ? 1 : 0)
			.set('mod_PlinthAreaVisRight', mod_PlinthAreaVisRight ? 1 : 0)
			.set(CONTOUR_ATTRIBUTE_OWNER_ID, this._id)
			.set(CONTOUR_ATTRIBUTE_ADD_TOEKICK, createToekick ? 1 : 0)
			.set(CONTOUR_ATTRIBUTE_OWNER_TYPE, mr_CornerunitStraight)
			.set(CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE, CONTOUR_ATTRIBUTE_CORNER_CONTOUR_TYPE_PERPENDICULAR)
			;

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
export function mr_CornerunitStraight_afterDataCompletion(this: adc_mr_CornerunitStraight):void {
  internal_enterModuleAfterDataCompletion('mr_CornerunitStraight', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_CornerunitStraight_AFTERDATACOMPLETION
	// Schuler Consulting
	// Create: Feb 2024
	// By Joao Lisboa
	// Purpose: CabinetLibrary
	//
	// Description:
	// AfterDataCompletion of mr_CornerunitStraight
	// Add the carcase to the root-module
	// Add the PlinthArea to the root-module
	// Cycle through the childs and manage the front elements
	// Cycle through the childs and search for fingergrip
	// Cycle through the childs get backwall information
	//
	// Revisions:
	//
	//===================================================

	//===================================================
	//          Add the carcase to the root-module
	//===================================================

		// Add the module
	//----------------------------------------------------
	
	let carc = this.addOD_M_mc_Storageunit01(0);

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
	  
	function CalculateCarcaseWidth(leftType: string, rightType: string, width: number, leftThk: number, rightThk: number, direction: string): number {
		const leftAdjustment = direction === 'Right' ? GetSideAdjustment(leftType, leftThk) : 0;
		const rightAdjustment = direction === 'Left' ? GetSideAdjustment(rightType, rightThk) : 0;

		return width + leftAdjustment + rightAdjustment;	
	}

	// Set the values to the relevant attributes of the carcase
	//----------------------------------------------------

	let StartPosCabinet = this.mod_PlinthAreaDesign_matrix.PlinthAreaType !== 'None' ? this.mod_PlinthAreaHeight! : 0;
	let CarcaseMovement = this.mod_CarcaseDirection === 'Right' ? GetCarcaseMovement(this.mod_SidepanelleftType, this.mod_SidepanelleftThk): 0;
	
	carc.mod_CarcaseWidth = CalculateCarcaseWidth(this.mod_SidepanelleftType, this.mod_SidepanelrightType, this.mod_Width, this.mod_SidepanelleftThk, this.mod_SidepanelrightThk, this.mod_CarcaseDirection);
	carc.mod_CarcaseMovement = CarcaseMovement;
	carc.mod_CarcaseDepth = this.mod_Depth;
	carc.mod_CarcaseHeight = this.mod_Height;
	carc.mod_CarcaseDirection = this.mod_CarcaseDirection;
	carc.mod_CarcaseId = 'Carcase_01';
	if (this.mod_CarcaseDirection === 'Right') {
		if (this.mod_SidepanelrightType != 'OutSp') logWarning('CornerunitStraight in carcase direction Right can not change the type of the sidepanel right. It will keep the value OutSp!');
		carc.mod_SidepanelleftType = this.mod_SidepanelleftType;
	}
	else {
		if (this.mod_SidepanelleftType != 'OutSp') logWarning('CornerunitStraight in carcase direction Left can not change the type of the sidepanel left. It will keep the value OutSp!');
		carc.mod_SidepanelrightType = this.mod_SidepanelrightType;
	}

	// Set origin of the carcase
	//----------------------------------------------------

	carc.setOrigin(CarcaseMovement, StartPosCabinet, 0);

	// Save origin in Attribute
	carc.mod_Originpos.push(CarcaseMovement);
	carc.mod_Originpos.push(StartPosCabinet);
	carc.mod_Originpos.push(0);

	
	//===================================================
	//          Define Depth Reduction depending on Sidepanelmiddle
	// It's used as Front Overdimension in fixed shelves and reduces the space depth in all fronts
	//===================================================
	let spaceDepthReduction: number = 0;
	if (this.mod_CornerunitStraightConstruction_matrix.IncludeMiddleSideShort == true) {
		spaceDepthReduction = this.g.basic_SidepanelmiddleShortWidth + this.g.basic_OffsetFrontVertDivider;
	}
	else if (this.mod_CornerunitStraightConstruction_matrix.IncludePanelblind == true) {
		spaceDepthReduction = this.mod_PanelblindThk + this.g.basic_OffsetFrontVertDivider;
	}
	else {
		spaceDepthReduction = 0;
	}

	//===================================================
	//          Cycle through the childs and manage the front elements
	//===================================================

	// Define variables
	let GlobalCount: number = 0;
	let CountDoor: number = 0;
	let CountDrawer: number = 0;
	let LastFrontElem: number = 0;
	let CountFingerGrip: number = 0;
	let tmpGapMid: number = 0;
	let FingerGripLine: number = 0;
	let FingergripBottom = false;
	let StartPos = this.mod_FrontPosStart + StartPosCabinet;
	let tmpLastStartPos: number[] = []; //Stores the position of each front
	tmpLastStartPos[0] = 0;
	let tmpLastGap: number[] = []; //Stores the gap between each fronts (either normal gap or fingergrip gap)
	tmpLastGap[0] = 0;
	let tmpLastFrontFingergrip: boolean[] = [false]; // Stores if the front has fingergrip
	tmpLastFrontFingergrip[0] = false;
	// It makes no sense to fetch this before the mf_CornerFillerFront is sealed [JP]
	// let FillerWidthLeft = 0;
	// let FillerWidthRight = 0;

	// Initialize fingergrip information for the carcase
	carc.mod_FingergripTop = false;
	carc.mod_FingergripQtyMiddle = 0;
	carc.mod_FingergripPos1 = 0;
	carc.mod_FingergripPos2 = 0;
	carc.mod_FingergripPos3 = 0;
	carc.mod_FingergripPos4 = 0;
	carc.mod_FingergripPos5 = 0;

	//Initialize Backwall constriuction and Backwall position
	carc.mod_CarcaseBackwallConstructionList[1] = this.mod_CarcaseBackwallConstruction!;
	carc.mod_BackwallPosList[1] = this.mod_BackwallPos!;

	//Initialize variables for Dividers
	let VertDividerType: string[] = [];
	let VertDividerFrontWidth: number[] = [];
	let VertDividerFrontName: string[] = [];

	// Cycle
	this.m.forEach(p => {
		if (p instanceof OD_M_mf_CornerFillerFront) {

			// Get the dimensions of the filler
			// Change: It is too early, the carcase is not sealed yet and we can not compute this properly at this point -> do nothing here [JP]
			// FillerWidthLeft = p.mod_WidthLeft!;
			// FillerWidthRight = p.mod_WidthRight!;
		}
		else {

			//===================================================												  
			// Manage generic dimensions and gaps for all front elements
			//===================================================
			if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Drawer) {

				// Create Carcase ID and Attributes
				GlobalCount++;
				p.mod_CarcaseId = 'Carcase_01';
				p.mod_CarcaseDepth = this.mod_Depth;
				p.mod_CarcaseWidth = this.mod_Width;
				p.mod_FrontWidth = this.mod_CornerunitFrontWidth;
				p.mod_CarcaseHeight = this.mod_Height;
				p.mod_FrontPosStart = StartPos - StartPosCabinet;

				// setOrigin
				if (this.mod_CarcaseDirection == 'Left') {
					p.setOrigin(this.mod_Width - this.mod_CornerunitFrontWidth, StartPos, this.mod_Depth);
					p.mod_Originpos[0] = (this.mod_Width - this.mod_CornerunitFrontWidth);
				}
				else {
					p.setOrigin(0, StartPos, this.mod_Depth);
					p.mod_Originpos[0] = 0;
				}

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
						p.mod_FrontHeight = p.mod_FrontHeightSelection! - tmpGapMid;
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

			}

			//===================================================
			// Manage the fixed shelves
			//===================================================

			if (p instanceof OD_M_mf_Door || p instanceof OD_M_mf_Drawer) {

				// Interface to provide the data for the carcase
				//-------------------------------------------------------------------------------------

				interface ShelfFixedInfo {
					PosY: number;                  // Height position of the fixed shelf
					Fingergrip: boolean;           // Fingergrip in front of the fixed shelf
					Position: string;              // Position of the fixed shelf related to the fingergrip
					FingergripType: string;        // Version of fingergrip to get the dimensions
					Backside: string;              // Attribute for "Contact" or "ThrougBw"
					Part: string;                  // Shelffixed or Rail
				}

				// Function to create ShelfFixedInfo
				//-------------------------------------------------------------------------------------

				function createShelfFixedInfo(p: any, m: any): ShelfFixedInfo {
					return {
						PosY: (tmpLastStartPos[GlobalCount - 1] - tmpLastGap[GlobalCount - 1]),
						Fingergrip: tmpLastFrontFingergrip[GlobalCount - 1] || false,
						Position: p.mod_ShelffixedPos || 'None',
						FingergripType: m.mod_FingergripType || 'None',
						Backside: p.mod_ShelffixedType || 'None',
						Part: 'part_Shelffixed'
					};
				}

				// Check the different situations
				//-------------------------------------------------------------------------------------

				let insertFixedShelf = false;

				// If it's the first front element, we don't need a fixed shelf
				if (GlobalCount === 1) {
					p.mod_ShelffixedBtm = false;
				}
				// If it's not the first front element and fixed shelf has been selected
				else if (GlobalCount > 1 && p.mod_ShelffixedBtm) {
					insertFixedShelf = true;
				}

				// Stringify the object and push it to the list attribute
				//-------------------------------------------------------------------------------------

				if (insertFixedShelf) {
					carc.mod_ShelffixedInfoList.push(JSON.stringify(createShelfFixedInfo(p, this)));
				}


				//===============================================================================================
				// Collect the data of the fronts to supply it to the carcase
				//===============================================================================================

				// Interface to provide the data for the carcase
				//-------------------------------------------------------------------------------------

				interface FrontInfo {
					FrontCategory: string            // Identificator of sepecial fronts
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
				//-------------------------------------------------------------------------------------

				let frontInfo: FrontInfo = {
					FrontCategory: "Standard",
					StartingPosition: p.mod_FrontPosStart!,
					FrontHeight: p.mod_FrontHeightSelection!,
					RealFrontHeight: p.mod_FrontHeight!,
					BackwallConstruction: p.mod_CarcaseBackwallConstruction!,
					BackwallPosition: p.mod_BackwallPos!,
					FixedshelfBottom: p.mod_ShelffixedBtm!,
					FingergripBottom: FingergripBottom,
					FingergripTop: !!p.mod_FingergripTop,		
					FringergripType: this.mod_FingergripType
				}

				// Save the fingergrip for the next front
				FingergripBottom = !!p.mod_FingergripTop;

				// Stringify the object and push it to the list attribute
				//-------------------------------------------------------------------------------------
				carc.mod_FrontAreaInfoList.push(JSON.stringify(frontInfo));
			}

			//===================================================
			// Create Front ID
			//===================================================

			if (p instanceof OD_M_mf_Door) { CountDoor++; p.mod_FrontId = 'Door_' + CountDoor; }
			if (p instanceof OD_M_mf_Drawer) { CountDrawer++; p.mod_FrontId = 'Drawer_' + CountDrawer; }
			/*
			if (p instanceof OD_M_mf_Fliplift) { CountFlipLift++; p.mod_FrontId = 'Fliplift_' + CountFlipLift; }			
			if (p instanceof OD_M_mf_Fixedfront) { CountFixedfront++; p.mod_FrontId = 'Fixedfront_' + CountFixedfront; }
			if (p instanceof OD_M_mf_Oven) { CountOven++; p.mod_FrontId = 'Oven_' + CountOven; }
			if (p instanceof OD_M_mf_Fridge) { CountFridge++; p.mod_FrontId = 'Door_' + CountFridge; }
			if (p instanceof OD_M_mf_RackArea) { CountRackArea++; p.mod_FrontId = 'RackArea_' + CountRackArea; }
			*/

			//===================================================
			// Error Checking
			//===================================================
			if (p instanceof OD_M_mf_Drawer && p.mod_DrawerType == 'Double' && p.mod_VertDividerType! != 'MiddleSide' && p.mod_VertDividerType! != 'MiddleSideShort') {
				let ErrorMessage = GlobalFunc.find_ErrorList('Error 22029', 1);
				logError(ErrorMessage.Message(''));
			}
			else if (p instanceof OD_M_mf_Door && p.mod_VertDividerType_matrix?.IncludeDivider! == true) {
				let ErrorMessage = GlobalFunc.find_ErrorList('Error 22030', 1);
				logError(ErrorMessage.Message(''));
			}
			else if (p instanceof OD_M_mf_Door && (p.mod_DoorDirection! == 'LeftLeft' || p.mod_DoorDirection! == 'RightRight')) {
				let ErrorMessage = GlobalFunc.find_ErrorList('Error 22031', 1);
				logError(ErrorMessage.Message(''));
			}

			//===================================================
			// Manage the Vert Dividers
			//===================================================

			if (p instanceof OD_M_mf_Door) {

				p.mod_CarcaseDirectionInfo = this.mod_CarcaseDirection!;
				// Get the Information about the doors
				let doorInfo = GlobalFunc.process_Door(p);

				// Set the values of the attributes (will be provided to the carcase)
				VertDividerType[GlobalCount] = doorInfo.VertDivider;
				if (this.mod_CarcaseDirection == 'Right') {
					VertDividerFrontWidth[GlobalCount] = doorInfo.FrontWidthList[0];
				}
				else // this.mod_CarcaseDirection == 'Left'
				{
					VertDividerFrontWidth[GlobalCount] = this.mod_Width - this.mod_CornerunitFrontWidth + doorInfo.FrontWidthList[0];
				}
				VertDividerFrontName[GlobalCount] = p.mod_ModuleName!;
			}
			else {
				VertDividerType[GlobalCount] = 'NoVertDivider';
			}
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
	// Manage the filler 
	//===================================================
	// Cycle
	this.m.forEach(f => {

		// Manage generic dimensions and gaps for all front elements
		//===================================================

		if (f instanceof OD_M_mf_CornerFillerFront) {

			const fillerHeightFingergripReduction = carc.mod_FingergripTop ? (this.mod_FingergripType_matrix.LShapeGapAbove ?? 0) : 0;

			f.mod_CarcaseId = 'Carcase_01';
			f.mod_CarcaseDepth = this.mod_Depth;
			f.mod_CarcaseWidth = this.mod_Width;
			f.mod_CarcaseHeight = this.mod_Height;
			f.mod_FrontPosStart = this.mod_FrontPosStart + StartPosCabinet;
			f.mod_HeightLeft = this.mod_Height - this.mod_FrontGapHorTop - this.mod_FrontPosStart - fillerHeightFingergripReduction;
			f.mod_HeightRight = this.mod_Height - this.mod_FrontGapHorTop - this.mod_FrontPosStart - fillerHeightFingergripReduction;
			f.mod_CarcaseDirection = this.mod_CarcaseDirection;
			f.mod_CornerunitFrontWidth = this.mod_CornerunitFrontWidth;

			f.setOrigin(0, this.mod_FrontPosStart + StartPosCabinet, this.mod_Depth);
			f.mod_Originpos[0] = 0;
			f.mod_Originpos[1] = this.mod_FrontPosStart + StartPosCabinet;
			f.mod_Originpos[2] = this.mod_Depth;

		}
	})

	//===================================================
	// Seal mc_Storageunit and get attribute with FreeSpace 
	//===================================================

	let sealedCarc = carc.seal();
	let sealedCarc_CarcaseSpaceDimension = JSON.parse(sealedCarc.mod_CarcaseSpaceDimension[0]);
	let i = 0

	// Cycle for the child modules
	this.m.forEach(p => {

		if (p instanceof OD_M_mf_Door) {

			// Set the attribute for the free space regarding each front
			let CarcaseSpaceDimension: any = {
				FullWidthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullWidthFreeSpace,
				FullHeightFreeSpace: sealedCarc_CarcaseSpaceDimension.FullHeightFreeSpace,
				FullDepthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullDepthFreeSpace,
				FullWidthStartPos: sealedCarc_CarcaseSpaceDimension.FullWidthStartPos,
				FullHeightStartPos: sealedCarc_CarcaseSpaceDimension.FullHeightStartPos,
				FullDepthStartPos: sealedCarc_CarcaseSpaceDimension.FullDepthStartPos,
				WidthFreeSpace: sealedCarc_CarcaseSpaceDimension.WidthFreeSpace[i],
				HeightFreeSpace: sealedCarc_CarcaseSpaceDimension.HeightFreeSpace[i],
				DepthFreeSpace: sealedCarc_CarcaseSpaceDimension.DepthFreeSpace[i] - spaceDepthReduction,
				WidthFreeStartPos: sealedCarc_CarcaseSpaceDimension.WidthFreeStartPos[i],
				HeightFreeStartPos: sealedCarc_CarcaseSpaceDimension.HeightFreeStartPos[i] + StartPosCabinet,
				DepthFreeStartPos: sealedCarc_CarcaseSpaceDimension.DepthFreeStartPos[i]
			};
			let strJson = JSON.stringify(CarcaseSpaceDimension);
			p.mod_CarcaseSpaceDimension.push(strJson);

			// Sequence of the fronts
			i++

		}
		else if (p instanceof OD_M_mf_Drawer) {

			// Recalculate the free space
			let startPosWidth = sealedCarc_CarcaseSpaceDimension.WidthFreeStartPos[i];
			let freespaceWidth = this.mod_CornerunitFrontWidth - sealedCarc_CarcaseSpaceDimension.WidthFreeStartPos[i] * 2;

			// Set the attribute for the free space regarding each front
			let CarcaseSpaceDimension: any = {
				FullWidthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullWidthFreeSpace,
				FullHeightFreeSpace: sealedCarc_CarcaseSpaceDimension.FullHeightFreeSpace,
				FullDepthFreeSpace: sealedCarc_CarcaseSpaceDimension.FullDepthFreeSpace,
				FullWidthStartPos: sealedCarc_CarcaseSpaceDimension.FullWidthStartPos,
				FullHeightStartPos: sealedCarc_CarcaseSpaceDimension.FullHeightStartPos,
				FullDepthStartPos: sealedCarc_CarcaseSpaceDimension.FullDepthStartPos,

				WidthFreeSpace: freespaceWidth,
				WidthFreeStartPos: startPosWidth,

				HeightFreeSpace: sealedCarc_CarcaseSpaceDimension.HeightFreeSpace[i],
				HeightFreeStartPos: sealedCarc_CarcaseSpaceDimension.HeightFreeStartPos[i] + StartPosCabinet,

				DepthFreeSpace: sealedCarc_CarcaseSpaceDimension.DepthFreeSpace[i],
				DepthFreeStartPos: sealedCarc_CarcaseSpaceDimension.DepthFreeStartPos[i]
			};
			let strJson = JSON.stringify(CarcaseSpaceDimension);
			p.mod_CarcaseSpaceDimension.push(strJson);

			// Sequence of the fronts
			i++

		}
	});

	//===================================================
	//          Add the mc_CornerunitStraight to the root-module
	//===================================================

	// Add the module
	let corner1 = this.addOD_M_mc_CornerunitStraight01(1);

	// Set the values to the relevant attributes of the carcase
	corner1.mod_CarcaseDepth = this.mod_Depth;
	corner1.mod_CarcaseWidth = this.mod_Width;
	corner1.mod_CarcaseHeight = this.mod_Height;
	corner1.mod_CarcaseSpaceDimension.push(sealedCarc.mod_CarcaseSpaceDimension[0]);
	corner1.mod_CornerunitFrontWidth = this.mod_CornerunitFrontWidth;
	corner1.mod_FingergripTop = false;
	corner1.mod_FingergripQtyMiddle = 0;
	corner1.mod_FingergripPos1 = 0;
	corner1.mod_FingergripPos2 = 0;
	corner1.mod_FingergripPos3 = 0;
	corner1.mod_FingergripPos4 = 0;
	corner1.mod_FingergripPos5 = 0;
	if (carc.mod_FingergripTop) {
		corner1.mod_FingergripTop = true;
		corner1.mod_FingergripType = carc.mod_FingergripType
	}
	else {
		corner1.mod_FingergripTop = false;
	}

	// Create ID for the carcase
	corner1.mod_CarcaseId = 'Carcase_01';

	// Set origin of the carcase
	StartPosCabinet = 0;
	if (this.mod_PlinthAreaDesign_matrix.PlinthAreaType == 'None') { corner1.setOrigin(0, 0, 0); StartPosCabinet = 0 }
	else { corner1.setOrigin(0, this.mod_PlinthAreaHeight!, 0); StartPosCabinet = this.mod_PlinthAreaHeight! }

	//===================================================
	// Seal mc_CornerunitStraight and get attribute mod_CornerunitInfo 
	//===================================================

	let sealedCornerCabinet = corner1.seal();
	let sealedCornerCabinet_CornerunitInfo = JSON.parse(sealedCornerCabinet.mod_CornerunitInfo[0]);
	let sealedCarc_VertDividerInfoList = JSON.parse(sealedCarc.mod_VertDividerInfoList[0]);
	let sealedCarc_CarcasePartInfo = JSON.parse(sealedCarc.mod_CarcasePartInfo[0]);
	let BtmShelfPosDepth = sealedCarc_CarcasePartInfo.HorizontalPartsPosZ[1];
	let BtmShelfPos = sealedCarc_CarcasePartInfo.HorizontalPartsPosY[1];
	i = 0;

	// Cycle for the child modules (Door)
	this.m.forEach(p => {
		if (p instanceof OD_M_mf_Door) {
			i++;

			//---------------Set the attribute for the carcase parts (mod_CarcasePartInfo) regarding each front (will be used for the calculation of overlay in all 4 sides of each front)-----------------

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


			// Insert the VertDivider or the PanelBlind in the VerticalPartsInfo
			if (this.mod_CornerunitStraightConstruction == 'Construction03') {
				if (this.mod_CarcaseDirection == 'Left') {
					this.m.forEach(f => {
						if (f instanceof OD_M_mf_CornerFillerFront) {
							sealedCarc_CarcasePartInfo.VerticalPartsType[i].splice(1, 0, 'FillerR');
							sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].splice(1, 0, this.mod_Width! - this.mod_CornerunitFrontWidth! - f.mod_WidthRight! - f.mod_FrontGapVert! / 2);
							sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i].splice(1, 0, this.mod_Width! - this.mod_CornerunitFrontWidth! - f.mod_WidthRight! - f.mod_FrontGapVert! / 2); // PENDING TO FIX FORMULA
							sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].splice(1, 0, f.mod_WidthRight!);
							sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i].splice(1, 0, f.mod_WidthRight!); // PENDING TO FIX FORMULA
							sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i].splice(1, 0, 180);
						}
					});
				}
				else {
					this.m.forEach(f => {
						if (f instanceof OD_M_mf_CornerFillerFront) {
							sealedCarc_CarcasePartInfo.VerticalPartsType[i].splice(1, 0, 'FillerL');
							sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].splice(1, 0, this.mod_CornerunitFrontWidth! + f.mod_FrontGapVert! / 2);
							sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i].splice(1, 0, this.mod_CornerunitFrontWidth! + f.mod_FrontGapVert! / 2); // PENDING TO FIX FORMULA
							sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].splice(1, 0, f.mod_WidthLeft!);
							sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i].splice(1, 0, f.mod_WidthLeft!); // PENDING TO FIX FORMULA
							sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i].splice(1, 0, 180);
						}
					});
				}
			}
			else {
				sealedCarc_CarcasePartInfo.VerticalPartsType[i].splice(1, 0, 'MiddleSideShort');
				sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].splice(1, 0, sealedCornerCabinet_CornerunitInfo.MiddleSideShortPosX);
				sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i].splice(1, 0, sealedCornerCabinet_CornerunitInfo.MiddleSideShortPosZ);
				sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].splice(1, 0, sealedCornerCabinet_CornerunitInfo.MiddleSideShortThk);
				sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i].splice(1, 0, sealedCornerCabinet_CornerunitInfo.MiddleSideShortDimZ);
				sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i].splice(1, 0, 90);
			}

			// Adjust the VerticalPartsInfo to reflect only the parts arround the front (Remove the vertical parts that will not affect the Front)
			if (this.mod_CarcaseDirection == 'Left') { // If the Carcase Direction is Left remove the SidePanelLeft
				sealedCarc_CarcasePartInfo.VerticalPartsType[i].splice(0, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].splice(0, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i].splice(0, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].splice(0, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i].splice(0, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i].splice(0, 1);
			}
			else { // If the Carcase Direction is Right remove the SidePanelRight (last part in the array)
				sealedCarc_CarcasePartInfo.VerticalPartsType[i].splice(sealedCarc_CarcasePartInfo.VerticalPartsType[i].length - 1, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].splice(sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].length - 1, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsPosZ[i].splice(sealedCarc_CarcasePartInfo.VerticalPartsPosX[i].length - 1, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].splice(sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].length - 1, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsDimZ[i].splice(sealedCarc_CarcasePartInfo.VerticalPartsDimX[i].length - 1, 1);
				sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i].splice(sealedCarc_CarcasePartInfo.VerticalPartsFrontAngle[i].length - 1, 1);
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

			// Set the attribute for the VertDividerInfoList info (mod_VertDividerInfoList) regarding each front (will be used for the adjustable shelves)
			if (this.mod_CornerunitStraightConstruction != 'Construction03') {
				sealedCarc_VertDividerInfoList.Type.splice(1, 0, 'MiddleSideShort');
				sealedCarc_VertDividerInfoList.PosX.splice(1, 0, sealedCornerCabinet_CornerunitInfo.MiddleSideShortPosX);
				sealedCarc_VertDividerInfoList.DimX.splice(1, 0, sealedCornerCabinet_CornerunitInfo.MiddleSideShortThk);
			}

			let VertDividerInfoList: any = {
				Type: sealedCarc_VertDividerInfoList.Type[i],
				FrontWidth: sealedCarc_VertDividerInfoList.FrontWidth[i],
				FrontName: sealedCarc_VertDividerInfoList.FrontName[i],
				PosX: sealedCarc_VertDividerInfoList.PosX[i],
				DimX: sealedCarc_VertDividerInfoList.DimX[i],
				FreeSpaceWidth: sealedCarc_VertDividerInfoList.FreeSpaceWidth[i],
				FreeSpaceWidthStartPos: sealedCarc_VertDividerInfoList.FreeSpaceWidthStartPos[i]
			};

			let VertDividerInfoListJson = JSON.stringify(VertDividerInfoList);
			p.mod_VertDividerInfoList.push(VertDividerInfoListJson);
		}
	});

	//===================================================
	//          Add the PlinthArea to the root-module
	//===================================================

	// Add the module
	if (this.mod_PlinthAreaDesign_matrix.PlinthAreaType == 'Leg') {
		let plinth = this.addOD_M_mc_PlinthArea01(1);

		// Set the values to the relevant attributes of the carcase
		plinth.mod_CarcaseDepth = this.mod_Depth - BtmShelfPosDepth;
		plinth.mod_CarcaseWidth = this.mod_Width;
		plinth.mod_CarcaseId = 'Carcase_01';

		plinth.setOrigin(0, BtmShelfPos, BtmShelfPosDepth);

		// Seal the plinth area to retrieve the leg positions
		let sealedPlinth = plinth.seal();
		this.mod_PlinthAreaPositionInfo.push(sealedPlinth.mod_PlinthAreaPositionInfo[0]);
	}

	//===================================================
	//          Create vector / docking
	//===================================================

	let TopEndCabinet = StartPosCabinet + this.mod_Height;

	const sealedCornerunitFiller = (this.m.find(m => m instanceof OD_M_mf_CornerFillerFront) as OD_M_mf_CornerFillerFront)?.seal();

	let FillerWidthLeft = sealedCornerunitFiller?.mod_WidthLeft ?? 0;
	let FillerWidthRight = sealedCornerunitFiller?.mod_WidthRight ?? 0;
	const FillerConstruction = sealedCornerunitFiller?.mod_CornerunitStraightFillerConstruction_matrix?.PartInCornerCabinet;

	if (FillerConstruction === 'Mitre') {
		// do nothing - the mitre cut is not influenced by the sides' thickness
	}
	else if (
		(FillerConstruction === 'Long' && this.mod_CarcaseDirection === 'Left')
		|| (FillerConstruction === 'Short' && this.mod_CarcaseDirection === 'Right')
	) {
		FillerWidthLeft += sealedCornerunitFiller?.mod_ThkRight ?? 0;
	}
	else if (
		(FillerConstruction === 'Long' && this.mod_CarcaseDirection === 'Right')
		|| (FillerConstruction === 'Short' && this.mod_CarcaseDirection === 'Left')
	) {
		FillerWidthRight += sealedCornerunitFiller?.mod_ThkLeft ?? 0;
	}
	else {
		logError('Cannot determine filler size in mr_CornerunitStraight for calculating docking vectors: mod_CornerunitStraightFillerConstruction_matrix?.PartInCornerCabine = ' + FillerConstruction);
	}

	// Note: We don't have connection to the neighbour yet, we assume it has the same depth, which explains the own depth in the X-direction coordinates

	// Version blind panel left
	//---------------------------------------------------
	if (this.mod_CarcaseDirection == "Left") {
		// Calculations
		let ZeroX = this.mod_Width - this.mod_CornerunitFrontWidth - FillerWidthRight - this.mod_Depth - this.mod_CarcaseDistanceWall;
		let ZeroZ = -this.mod_CarcaseDistanceWall;
		let LeftZ = this.mod_Depth + FillerWidthLeft;
		let FrontX = this.mod_Depth + ZeroX + this.mod_CarcaseDistanceWall;

		// Left side
		this.addDockingInfo(Dock.LeftBackBottom, new Vector3(ZeroX, 0, ZeroZ), new Vector3(ZeroX, 0, LeftZ));
		this.addDockingInfo(Dock.LeftBackTop, new Vector3(ZeroX, TopEndCabinet, ZeroZ), new Vector3(ZeroX, TopEndCabinet, LeftZ));

		// Right side
		this.addDockingInfo(Dock.RightBottom, new Vector3(this.mod_Width, 0, ZeroZ), new Vector3(this.mod_Width, 0, this.mod_Depth));
		this.addDockingInfo(Dock.RightTop, new Vector3(this.mod_Width, TopEndCabinet, ZeroZ), new Vector3(this.mod_Width, TopEndCabinet, this.mod_Depth));

		// Back side
		this.addDockingInfo(Dock.RightBackBottom, new Vector3(ZeroX, 0, ZeroZ), new Vector3(this.mod_Width, 0, ZeroZ));
		this.addDockingInfo(Dock.RightBackTop, new Vector3(ZeroX, TopEndCabinet, ZeroZ), new Vector3(this.mod_Width, TopEndCabinet, ZeroZ));

		// Front side
		this.addDockingInfo(Dock.LeftBottom, new Vector3(ZeroX, 0, LeftZ), new Vector3(FrontX, 0, LeftZ));
		this.addDockingInfo(Dock.LeftTop, new Vector3(ZeroX, TopEndCabinet, LeftZ), new Vector3(FrontX, TopEndCabinet, LeftZ));
	}

	// Version blind panel right
	//---------------------------------------------------
	else {
		// Calculations
		let EndX = this.mod_CornerunitFrontWidth + FillerWidthLeft + this.mod_Depth + this.mod_CarcaseDistanceWall;
		let ZeroZ = -this.mod_CarcaseDistanceWall;
		let RightZ = this.mod_Depth + FillerWidthRight;
		let FrontX = this.mod_CornerunitFrontWidth + FillerWidthLeft;

		// Left side
		this.addDockingInfo(Dock.LeftBottom, new Vector3(0, 0, ZeroZ), new Vector3(0, 0, this.mod_Depth));
		this.addDockingInfo(Dock.LeftTop, new Vector3(0, TopEndCabinet, ZeroZ), new Vector3(0, TopEndCabinet, this.mod_Depth));

		// Right side
		this.addDockingInfo(Dock.RightBackBottom, new Vector3(EndX, 0, ZeroZ), new Vector3(EndX, 0, RightZ));
		this.addDockingInfo(Dock.RightBackTop, new Vector3(EndX, TopEndCabinet, ZeroZ), new Vector3(EndX, TopEndCabinet, RightZ));

		// Back side
		this.addDockingInfo(Dock.LeftBackBottom, new Vector3(EndX, 0, ZeroZ), new Vector3(0, 0, ZeroZ));
		this.addDockingInfo(Dock.LeftBackTop, new Vector3(EndX, TopEndCabinet, ZeroZ), new Vector3(0, TopEndCabinet, ZeroZ));

		// Front side
		this.addDockingInfo(Dock.RightBottom, new Vector3(EndX, 0, RightZ), new Vector3(FrontX, 0, RightZ));
		this.addDockingInfo(Dock.RightTop, new Vector3(EndX, TopEndCabinet, RightZ), new Vector3(FrontX, TopEndCabinet, RightZ));
	}

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

	//===================================================
	// POS Data
	//===================================================
	
  this._posData.set('depth', this.mod_Depth);
  this._posData.set('width', this.mod_Width);
  this._posData.set('height', this.mod_Height);
  this._posData.set('color', this.mod_FrontColor);
  this._posData.set('carcaseColor', this.mod_CarcaseColor);
	this._posData.set('doorDirection', this.mod_DoorDirection);
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
export function mr_CornerunitStraight_manufacturerDataCompletion(this: dc_mr_CornerunitStraight):void {
  internal_enterModuleManufacturerDataCompletion('mr_CornerunitStraight', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mr_CornerunitStraight_MANUFACTURERDATACOMPLETION



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
