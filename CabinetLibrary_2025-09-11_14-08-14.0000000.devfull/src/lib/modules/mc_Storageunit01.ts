import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mc_Storageunit01, dc_mc_Storageunit01, adc_mc_Storageunit01 } from '../internal/modules/mc_Storageunit01'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_StorageunitSidepanel01, OD_M_mc_StorageunitSidepanel01 } from '../internal/modules/mc_StorageunitSidepanel01'
import { dc_mc_StorageunitShelfbtm01, OD_M_mc_StorageunitShelfbtm01 } from '../internal/modules/mc_StorageunitShelfbtm01'
import { dc_mc_StorageunitShelftop01, OD_M_mc_StorageunitShelftop01 } from '../internal/modules/mc_StorageunitShelftop01'
import { dc_mc_StorageunitBackwall01, OD_M_mc_StorageunitBackwall01 } from '../internal/modules/mc_StorageunitBackwall01'
import { dc_mc_StorageunitShelffixed01, OD_M_mc_StorageunitShelffixed01 } from '../internal/modules/mc_StorageunitShelffixed01'
import { dc_mc_LightSystem01, OD_M_mc_LightSystem01 } from '../internal/modules/mc_LightSystem01'
import { dc_mc_HangerSystem01, OD_M_mc_HangerSystem01 } from '../internal/modules/mc_HangerSystem01'
import { dc_mc_VertDivider01, OD_M_mc_VertDivider01 } from '../internal/modules/mc_VertDivider01'
import { dc_mc_StorageunitShelftop02, OD_M_mc_StorageunitShelftop02 } from '../internal/modules/mc_StorageunitShelftop02'
import { dc_mc_StorageunitShelftop03, OD_M_mc_StorageunitShelftop03 } from '../internal/modules/mc_StorageunitShelftop03'
import { dc_mc_StorageunitShelftop04, OD_M_mc_StorageunitShelftop04 } from '../internal/modules/mc_StorageunitShelftop04'
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

export function mc_Storageunit01_createBuildPlan(this: cbp_mc_Storageunit01):void {
  internal_enterModuleCreateBuildPlan('mc_Storageunit01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mc_Storageunit01_CREATEBUILDPLAN
// Schuler Consulting
// Create: Aug 2022
// By Ludwig Weber
// Purpose: CabinetLibrary
//
// Description:
// CreateBuildPlan of mc_Storageunit
// Add PartGroup for the carcase and also create the box
//
// Revisions:
// 
//===================================================

//===================================================
//          Add PartGroup for the carcase and also create the box
//===================================================

let Storageunit=this.addpart_Storageunit(0,0,0,this.mod_CarcaseWidth,this.mod_CarcaseHeight,this.mod_CarcaseDepth);
this.createPartGroup(this.mod_CarcaseId, Storageunit);
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
export function mc_Storageunit01_afterDataCompletion(this: adc_mc_Storageunit01):void {
  internal_enterModuleAfterDataCompletion('mc_Storageunit01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_Storageunit01_AFTERDATACOMPLETION
	
	// Schuler Consulting
	// Create: Okt 2022
	// By Ludwig Weber
	// Purpose: CabinetLibrary
	//
	// Description:
	// AfterDataCompletion of mc_Storageunit01
	// Add the left sidepanel
	// Add the right sidepanel
	// Add the bottom shelf
	// Add the top shelf
	// Add the backwall
	// Freespace calculation
	// Create the part information
	// Add the hangers
	//
	// Revisions:
	// By Ludwig Weber
	// Complete new script
	// Put all the logics in functions
	// March 2025
	//
	//==========================================================================================================

	//==========================================================================================================
	// Interface
	//==========================================================================================================

	interface FrontInfo {
		StartingPosition: number;        // Starting position of the front
		FrontHeight: number;             // Height of the front set from the UserExit
		RealFrontHeight: number;         // Calculated front height without gaps
		BackwallConstruction: string;    // Backwall construction selected on the front
		BackwallPosition: number;        // Backwall position selected on the front
		FixedshelfBottom: boolean;       // Fixed shelf selected on the front
	}

	//==========================================================================================================
	// Pre-calculations for the backwall
	//==========================================================================================================
	let FirstBackWallPosition = this.mod_BackwallPos;
	let FirstBackWallConstruction = this.mod_CarcaseBackwallConstruction;
	let LastBackWallPosition = this.mod_BackwallPos;
	let LastBackWallConstruction = this.mod_CarcaseBackwallConstruction;

	let totalFrontAreaInfoList = this.mod_FrontAreaInfoList.length;
	let j=0;
	this.mod_FrontAreaInfoList.forEach(elem => {
		let front: FrontInfo = JSON.parse(elem);
		j++
		
		FirstBackWallPosition = j == 1 ? front.BackwallPosition : FirstBackWallPosition;
		FirstBackWallConstruction = j == 1 ? front.BackwallConstruction : FirstBackWallConstruction;

		if (j == totalFrontAreaInfoList) {
			LastBackWallPosition =  front.BackwallPosition;
			LastBackWallConstruction = front.BackwallConstruction;
			if (this.mod_SlopeAngle != 0) {

				// Read Settings table
				let slopedCeilingSettings = GlobalFunc.find_SlopedCeilingSettings(this.mod_SlopedCeilingConstruction!);

				LastBackWallPosition = slopedCeilingSettings.BackwallPos!;
				LastBackWallPosition != front.BackwallPosition ? logInfo('Automatic adjustment: Last backwall position is now ' + LastBackWallPosition + ' instead of ' + front.BackwallPosition) : '';
				front.BackwallPosition = slopedCeilingSettings.BackwallPos!;

				LastBackWallConstruction = slopedCeilingSettings.CarcaseBackwallConstruction!;
				LastBackWallConstruction != front.BackwallConstruction ? logInfo('Automatic adjustment: Last backwall construction is now ' + LastBackWallConstruction + ' instead of ' + front.BackwallConstruction) : '';
				front.BackwallConstruction = slopedCeilingSettings.CarcaseBackwallConstruction!;
				this.mod_FrontAreaInfoList[j - 1] = (JSON.stringify(front));

				// If there's only one backwall then the first and last backwall are the same, so we must update the first backwall with the automatic adjustment
				if (totalFrontAreaInfoList == 1) { 
					FirstBackWallPosition = LastBackWallPosition;
					FirstBackWallConstruction = LastBackWallConstruction;
				}
			}
		}
		
	});

	//==========================================================================================================
	//          Add the left sidepanel
	//==========================================================================================================

	// Define variable to store cabinet inside position relative to LeftSidePanel
	let tmpBwLSp = 0;             
	let tmpLSpPosBack = 0 ;       
	let tmpLSpPosFront = 0 ;      
	let tmpLSpPart = 'LeftSidePanel';   
	let retSpl: any;   

	// Call the process function
	let retSidepanelLeft = GlobalFunc.process_StorageunitSidepanelConstruction(this, 'Left', FirstBackWallConstruction, FirstBackWallPosition)
	retSpl = JSON.parse(retSidepanelLeft);

	// Feedback from the process function
	tmpBwLSp = retSpl.BwSp;                     // Manage starting position of the backwalls on the side
	tmpLSpPosBack = retSpl.SpPosBack;           // Define back side position of the sidepanel (not in use)
	tmpLSpPosFront = retSpl.SpPosFront;         // Frontposition of the sidepanel (free space calculation)
	tmpLSpPart = retSpl.SpPart;                 // Name of the construction part (provided in the parts list for fittings like push to open)

	//==========================================================================================================
	//          Add the right sidepanel
	//==========================================================================================================

	// Define variable to store cabinet inside position relative to RightSidePanel
	let tmpBwRSp = 0;
	let tmpRSpPosBack = 0 ;
	let tmpRSpPosFront = this.mod_CarcaseDepth;
	let tmpRSpPart = 'RightSidePanel';
	let retSpr: any;

	// Call the process function
	let retSidepanelRight = GlobalFunc.process_StorageunitSidepanelConstruction(this, 'Right', FirstBackWallConstruction, FirstBackWallPosition)
	retSpr = JSON.parse(retSidepanelRight);

	// Feedback from the process function
	tmpBwRSp = retSpr.BwSp;                     // Manage starting position of the backwalls on the side
	tmpRSpPosBack = retSpr.SpPosBack;           // Define back side position of the sidepanel (not in use)
	tmpRSpPosFront = retSpr.SpPosFront;         // Frontposition of the sidepanel (free space calculation)
	tmpRSpPart = retSpr.SpPart;                 // Name of the construction part (provided in the parts list for fittings like push to open)

	// Calculate the full horizontal freespace
	let freeSpaceWidth = tmpBwRSp - tmpBwLSp;
	let freeSpaceWidthPos = tmpBwLSp;

	//==========================================================================================================
	//          Add the bottom shelf
	//==========================================================================================================

	// Call the process function
	let retBtmShelf = GlobalFunc.process_StorageunitShelfbtmConstruction(this, FirstBackWallConstruction, FirstBackWallPosition);
	let retBtm = JSON.parse(retBtmShelf);

	// Feedback from the process function
	let tmpBwBtm = retBtm.BwBtm;               // Manage starting position of the first backwall
	let tmpBtmPosBack = retBtm.BtmPosBack;     // Define back side position of the bottom shelf (fixed shelf starting position)
	let tmpBtmPosFront = retBtm.BtmPosFront;   // Frontposition of the bottom shelf (free space calculation)
	let tmpBtmPart = retBtm.BtmPart;           // Name of the construction part (provided in the parts list for fittings like push to open)   

	//==========================================================================================================
	//          Add the top shelf
	//==========================================================================================================

	// Call the process function
	let retTopShelf = GlobalFunc.process_StorageunitShelftopConstruction(this, LastBackWallConstruction, LastBackWallPosition);
	let retTop = JSON.parse(retTopShelf);

	// Feedback from the process function
	let tmpBwTop = retTop.BwTop;                // Manage backwall height
	let tmpTopPosBack = retTop.TopPosBack;      // Define back side position of the top shelf (fixed shelf starting position)
	let tmpTopPosFront = retTop.TopPosFront;    // Frontposition of the top shelf (free space calculation)
	let tmpTopPart = retTop.TopPart;            // Name of the construction part (provided in the parts list for fittings like push to open)
	let tmpSpaceTop = retTop.SpaceTop;          // Define the end position of the freespace in height

	// Calculate the full vertical freespace
	let freeSpaceHeight = tmpBwTop - tmpBwBtm;
	let freeSpaceHeightPos = tmpBwBtm;

	//==========================================================================================================
	//          Add the fixed shelves
	//==========================================================================================================

	// Call the process function
	let retShelfFixed = GlobalFunc.process_StorageunitShelffixedConstruction(this);
	let retFixedShelves = JSON.parse(retShelfFixed);

	//==========================================================================================================
	//          Add the backwalls
	//==========================================================================================================

	// Call the process function
	let retBackwall = GlobalFunc.process_StorageunitBackwallConstruction(this, tmpLSpPart, tmpRSpPart, tmpBtmPart, tmpTopPart, freeSpaceHeight, freeSpaceWidth, freeSpaceWidthPos, freeSpaceHeightPos, retShelfFixed);
	let retBackwalls = JSON.parse(retBackwall);

	//==========================================================================================================
	//          Calculate free space
	//==========================================================================================================

	let retFreeSpace = GlobalFunc.process_StorageunitFreeSpaceCalculations(this, tmpBwLSp, tmpBwRSp, tmpBwBtm, tmpSpaceTop, retShelfFixed, retBackwall)
	let freeSpaces = JSON.parse(retFreeSpace);

	// Feedback from the process function
	let FullWidthFreeSpace = freeSpaces.FullWidthFreeSpace;
	let FullWidthStartPos = freeSpaces.FullWidthStartPos;
	let FullHeightFreeSpace = freeSpaces.FullHeightFreeSpace;
	let FullHeightStartPos = freeSpaces.FullHeightStartPos;
	let FullDepthFreeSpace = freeSpaces.FullDepthFreeSpace;
	let FullDepthStartPos = freeSpaces.FullDepthStartPos;
	let PosTopShelf = freeSpaces.PosTopShelf;

	let FreeSpaceDepth = freeSpaces.FreeSpaceDepth;
	let FreeSpaceDepthStartPos = freeSpaces.FreeSpaceDepthStartPos;
	let FreeSpaceHeight = freeSpaces.FreeSpaceHeight;
	let FreeSpaceHeightStartPos = freeSpaces.FreeSpaceHeightStartPos;
	let FreeSpaceWidth = freeSpaces.FreeSpaceWidth;
	let FreeSpaceWidthStartPos = freeSpaces.FreeSpaceWidthStartPos;

	//==========================================================================================================
	//          Add the vertical divider
	//==========================================================================================================

	// Parse the data received
	let VertDividerInfo = JSON.parse(this.mod_VertDividerInfoList[0]);

	// Call the process function
	let retVertDivider = GlobalFunc.process_StorageunitVertdividerConstruction(this, FreeSpaceWidth, FreeSpaceHeight, FreeSpaceDepth, FreeSpaceWidthStartPos, FreeSpaceHeightStartPos, FreeSpaceDepthStartPos);
	let vertDividerData = JSON.parse(retVertDivider);

	//==========================================================================================================
	// Create the Variable CarcaseSpaceDimension, stringify it and push it to mod_CarcaseSpaceDimension
	//==========================================================================================================

	let CarcaseSpaceDimension: any = {
		FullWidthFreeSpace: FullWidthFreeSpace,
		FullHeightFreeSpace: FullHeightFreeSpace,
		FullDepthFreeSpace: FullDepthFreeSpace,
		FullWidthStartPos: FullWidthStartPos,
		FullHeightStartPos: FullHeightStartPos,
		FullDepthStartPos: FullDepthStartPos,
		PosTopShelf: PosTopShelf,
		WidthFreeSpace: FreeSpaceWidth,
		HeightFreeSpace: FreeSpaceHeight,
		DepthFreeSpace: FreeSpaceDepth,
		WidthFreeStartPos: FreeSpaceWidthStartPos,
		HeightFreeStartPos: FreeSpaceHeightStartPos,
		DepthFreeStartPos: FreeSpaceDepthStartPos
	};

	let strJson = JSON.stringify(CarcaseSpaceDimension);
	this.mod_CarcaseSpaceDimension.push(strJson);

	//==========================================================================================================
	// Create the Variable CarcasePartInfo, stringify it and push it to mod_CarcasePartInfo
	//==========================================================================================================

	//--------------- Horizontal Parts -----------------

	// Initialize variables
	let HorizontalPartsType: string[] = ['-'];
	let HorizontalPartsPosY: number[] = [0];
	let HorizontalPartsPosZ: number[] = [0];
	let HorizontalPartsDimY: number[] = [0];
	let HorizontalPartsDimZ: number[] = [0];
	let HorizontalPartsFrontAngle: number[] = [0];

	// BottomShelf
	HorizontalPartsType.push(this.mod_CarcaseShelfbtmConstruction);
	HorizontalPartsPosY.push(retBtm.HeightPos);
	HorizontalPartsPosZ.push(retBtm.DepthPos);
	HorizontalPartsDimY.push(retBtm.Height);
	HorizontalPartsDimZ.push(retBtm.Depth);
	HorizontalPartsFrontAngle.push(90);
	
	// FixedShelves
	/*
	for (let i = 2; i < this.mod_ShelffixedTypeList.length; i++)
	{
		HorizontalPartsType.push(this.mod_ShelffixedTypeList[i]);
		HorizontalPartsPosY.push(this.mod_ShelffixedPosList[i]);
		HorizontalPartsPosZ.push(tmpShelffixedPosZ[i - 2]);
		HorizontalPartsDimY.push(this.mod_ShelffixedThk);
		HorizontalPartsDimZ.push(tmpShelffixedDimZ[i - 2]);
		HorizontalPartsFrontAngle.push(90);
	}
	*/

	for (let i = 1; i <= this.mod_FrontAreaInfoList.length - 1; i++) {
		let frontAreaInfo = JSON.parse(this.mod_FrontAreaInfoList[i]);
		HorizontalPartsType.push(frontAreaInfo.FixedshelfBottom ? "FixedShelf" : "NoFixedShelf");
		HorizontalPartsPosY.push(frontAreaInfo.StartingPosition);
		HorizontalPartsPosZ.push(FullDepthStartPos);
		HorizontalPartsDimY.push(this.mod_ShelffixedThk);
		HorizontalPartsDimZ.push(FullDepthFreeSpace);
		HorizontalPartsFrontAngle.push(90);
	}

	//TopShelf (FrontPart)
	HorizontalPartsType.push(tmpTopPart);
	HorizontalPartsPosY.push(retTop.HeightPos);
	HorizontalPartsPosZ.push(retTop.DepthPos);
	HorizontalPartsDimY.push(retTop.Height);
	HorizontalPartsDimZ.push(retTop.Depth);
	HorizontalPartsFrontAngle.push(90);


	//--------------- Vertical Parts -----------------

	// Initialize variables
	let VerticalPartsType: string[][] = [];
	let VerticalPartsPosX: number[][] = [];
	let VerticalPartsPosZ: number[][] = [];
	let VerticalPartsDimX: number[][] = [];
	let VerticalPartsDimZ: number[][] = [];
	let VerticalPartsFrontAngle: number[][] = [];

	for (let i = 1; i < VertDividerInfo.Type.length; i++) {

		// Create the arrays for this iteration
		VerticalPartsType[i] = VerticalPartsType[i] || [];
		VerticalPartsPosX[i] = VerticalPartsPosX[i] || [];
		VerticalPartsPosZ[i] = VerticalPartsPosZ[i] || [];
		VerticalPartsDimX[i] = VerticalPartsDimX[i] || [];
		VerticalPartsDimZ[i] = VerticalPartsDimZ[i] || [];
		VerticalPartsFrontAngle[i] = VerticalPartsFrontAngle[i] || [];
		
		//Left Side
		VerticalPartsType[i].push('LeftSidePanel');
		VerticalPartsPosX[i].push(retSpl.WidthPos + this.mod_CarcaseMovement);
		VerticalPartsPosZ[i].push(retSpl.DepthPos);
		VerticalPartsDimX[i].push(retSpl.Width);
		VerticalPartsDimZ[i].push(retSpl.Depth);
		VerticalPartsFrontAngle[i].push(90);

		// Vertical Dividers
		if (VertDividerInfo.Type[i] != 'None' && VertDividerInfo.Type[i] != 'NoVertDivider' && !VertDividerInfo.Type[i].includes('DustStrip')) {
			VerticalPartsType[i].push(VertDividerInfo.Type[i]);
			VerticalPartsPosX[i].push(vertDividerData.DividerWidthStartPosPerFront[i]);
			VerticalPartsPosZ[i].push(vertDividerData.DividerDepthStartPosPerFront[i]);
			VerticalPartsDimX[i].push(vertDividerData.DividerWidthPerFront[i]);
			VerticalPartsDimZ[i].push(vertDividerData.DividerDepthPerFront[i]);
			VerticalPartsFrontAngle[i].push(90);
		}

		//Right Side
		VerticalPartsType[i].push('RightSidePanel');
		VerticalPartsPosX[i].push(retSpr.WidthPos + this.mod_CarcaseMovement);
		VerticalPartsPosZ[i].push(retSpr.DepthPos);
		VerticalPartsDimX[i].push(retSpr.Width);
		VerticalPartsDimZ[i].push(retSpr.Depth);
		VerticalPartsFrontAngle[i].push(90);
	}

	// Create CarcasePartInfo
	let CarcasePartInfo: any = {
		HorizontalPartsType: HorizontalPartsType,
		HorizontalPartsPosY: HorizontalPartsPosY,
		HorizontalPartsPosZ: HorizontalPartsPosZ,
		HorizontalPartsDimY: HorizontalPartsDimY,
		HorizontalPartsDimZ: HorizontalPartsDimZ,
		HorizontalPartsFrontAngle: HorizontalPartsFrontAngle,
		VerticalPartsType: VerticalPartsType,
		VerticalPartsPosX: VerticalPartsPosX,
		VerticalPartsPosZ: VerticalPartsPosZ,
		VerticalPartsDimX: VerticalPartsDimX,
		VerticalPartsDimZ: VerticalPartsDimZ,
		VerticalPartsFrontAngle: VerticalPartsFrontAngle		
	};

	let CarcasePartInfoJson = JSON.stringify(CarcasePartInfo);
	this.mod_CarcasePartInfo.push(CarcasePartInfoJson);

	//==========================================================================================================
	//          Add the lights
	//==========================================================================================================

	GlobalFunc.process_StorageunitLightConstruction(this, retTop, retBtm);

	//==========================================================================================================
	//          Add the hangers
	//==========================================================================================================

	if (this.mod_HangerType != 'NoHanger') {

		// Get data from last backwall
		let lastBackwall = retBackwalls[retBackwalls.length - 1];
		let lastSpaceBehindBw = lastBackwall.DepthPos;
		let lastDepthPosBw = lastBackwall.Depth + lastSpaceBehindBw;

		// Call the process function
		GlobalFunc.process_Hanger(this, lastDepthPosBw, lastSpaceBehindBw, tmpBwTop, retFreeSpace);
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
  internal_leaveModuleAfterDataCompletion();
}
// ---------------------------------------------------------------
export function mc_Storageunit01_manufacturerDataCompletion(this: dc_mc_Storageunit01):void {
  internal_enterModuleManufacturerDataCompletion('mc_Storageunit01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_Storageunit01_MANUFACTURERDATACOMPLETION

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
