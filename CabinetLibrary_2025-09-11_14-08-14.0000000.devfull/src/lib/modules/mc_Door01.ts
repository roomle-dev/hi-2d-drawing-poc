import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mc_Door01, dc_mc_Door01, adc_mc_Door01 } from '../internal/modules/mc_Door01'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_FrontPanelGlass01, OD_M_mc_FrontPanelGlass01 } from '../internal/modules/mc_FrontPanelGlass01'
import { dc_mc_FrontPanel01, OD_M_mc_FrontPanel01 } from '../internal/modules/mc_FrontPanel01'
import { dc_mc_Handle01, OD_M_mc_Handle01 } from '../internal/modules/mc_Handle01'
import { dc_mc_Handlestrip01, OD_M_mc_Handlestrip01 } from '../internal/modules/mc_Handlestrip01'
import { dc_mc_Hinge01, OD_M_mc_Hinge01 } from '../internal/modules/mc_Hinge01'
import { dc_mc_ThermoformedPanel01, OD_M_mc_ThermoformedPanel01 } from '../internal/modules/mc_ThermoformedPanel01'
import { dc_mc_MetalFrame01, OD_M_mc_MetalFrame01 } from '../internal/modules/mc_MetalFrame01'
import { dc_mc_Duststrip01, OD_M_mc_Duststrip01 } from '../internal/modules/mc_Duststrip01'
import { dc_mc_Pushtoopen01, OD_M_mc_Pushtoopen01 } from '../internal/modules/mc_Pushtoopen01'
import { dc_mc_PanelWoodFrame01, OD_M_mc_PanelWoodFrame01 } from '../internal/modules/mc_PanelWoodFrame01'
import { dc_mc_HingeGroup01, OD_M_mc_HingeGroup01 } from '../internal/modules/mc_HingeGroup01'
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

export function mc_Door01_createBuildPlan(this: cbp_mc_Door01):void {
  internal_enterModuleCreateBuildPlan('mc_Door01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mc_Door01_CREATEBUILDPLAN

  // Schuler Consulting
  // Create: September 2023
  // By Stefano Cortese
  // Purpose: CabinetLibrary
  //
  // Description:
  // CreateBuildPlan of mc_Door01
  // Add Partgroup for the door
  // Add the opening for the doors
  //
  // Revisions:
  // 18.10.2024 Ludwig Weber
  // Add Error handling
  //====================================================================

  //====================================================================
  //          Add Partgroup for the door
  //====================================================================

  let DoorUnit=this.addpart_DoorUnit(0,0,0,this.mod_FrontWidth,this.mod_FrontHeight,this.mod_FrontThk);
  this.createPartGroup(this.mod_FrontId, DoorUnit);

  //====================================================================
  //          Add the open group for the door (opening the door)  
  //====================================================================

  let nameOfOpenGroup = this.mod_FrontId;
  let openGrp = this.createOpenGroup(nameOfOpenGroup, DoorUnit);

  //====================================================================
  //          Open matrix (opening the door)         
  //====================================================================

  // Error-Handling
  let openingAngle = 70;
  if(this.mod_OpeningAngle[0] != undefined){
    openingAngle =JSON.parse(this.mod_OpeningAngle[0]).Angle;
  };

  // Set the open matrix
  if(this.mod_DoorDirection == 'Left'){
    openGrp.openMatrix = MatrixHelper.rotateY((360-openingAngle), new Vector3(8, 0, 12));
  }
  else{
    openGrp.openMatrix = MatrixHelper.rotateY(openingAngle, new Vector3(this.mod_FrontWidth-8, 0, 12));
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
export function mc_Door01_afterDataCompletion(this: adc_mc_Door01):void {
  internal_enterModuleAfterDataCompletion('mc_Door01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_Door01_AFTERDATACOMPLETION

  // Schuler Consulting
  // Create: September 2023
  // By Stefano Cortese
  // Purpose: CabinetLibrary
  //
  // Description:
  // AfterDataCompletion of mc_Door01
  // Add module for the front panel
  // Add module for the handle strip
  // Add module for the handle
  // Add module for the hinges
  //
  // Revisions:
  // Feb 2024 Stefano Cortese
  // Add the possibility to insert different front construction modules
  //
  // 18.03.2024 Ludwig Weber
  // Optimization on the code
  // 
  // 18.10.2024 Ludwig Weber
  // Add Error handling
  // 
  // 10.12.2024 Stefano Cortese
  // Exception to exclude the hinges (for the fridge)
  //===================================================

  //===================================================
  //          Call the tables and get information
  //===================================================

  // Retrive all the information about the handlestrip
  let FrontRed = 0;
  let HandleHeight = 0;
  let frontWeight = 0;
  let handleWeight = 0;
  let retHandleStripInfo: any;

  if (this.mod_HandleDesign_matrix.HandleType == "Handlestrip") {
    retHandleStripInfo = GlobalFunc.process_HandlestripPos(this);
    FrontRed = retHandleStripInfo.FrontReduction;
    HandleHeight = retHandleStripInfo.HandleH;
  }

  //Get CarcaseSpace Information
  let CarcaseSpaceDimension = JSON.parse(this.mod_CarcaseSpaceDimension[0]);

  // Get the Information of the Carcase Parts Info
  let carcasePartInfo = JSON.parse(this.mod_CarcasePartInfo[0]);

  // Retrieve information for the front construction
  let handlePosType = GlobalFunc.find_HandleSettings(this.mod_HandlePosType, 'Door').HandleOrientation!;
  let retDoorInfo = GlobalFunc.find_FrontConstruction(this.mod_FrontProgram, this.mod_FrontDesign, 'Door', this.mod_FrontWidth, this.mod_FrontHeight, this.mod_HandleDesign_matrix.HandleDesignGroup!, handlePosType);

  //===================================================
  //          Add module for the front panel
  //===================================================

  let Door: any;
  let DoorDesign = retDoorInfo.FrontModuleId;

  // Add the module
  if (DoorDesign == "FrontPanel01") {
    Door = this.addOD_M_mc_FrontPanel01();
  }
  else if (DoorDesign == "WoodFrame01") {
    Door = this.addOD_M_mc_PanelWoodFrame01();
  }
  else if (DoorDesign == "AlluminiumFrame01") {
    Door = this.addOD_M_mc_MetalFrame01();
  }
  else if (DoorDesign == "ThermoformedFrame01") {
    Door = this.addOD_M_mc_ThermoformedPanel01();
  }
  else {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 22035', 1);
    logError(ErrorMessage.Message(''));
  }

  // Set values to the attributes of the child if Door is correctly created
  Door.mod_Width = retDoorInfo.Width(this);
  Door.mod_Height = retDoorInfo.Height(this);
  Door.mod_Depth = retDoorInfo.Thickness;
  Door.mod_FrontType = this.mod_DoorDirection === "Right" ? "DoorRight" : "DoorLeft";
  Door.mod_DoorDirection = this.mod_DoorDirection;

  // setOrigin
  Door.setOrigin(retDoorInfo.WidthPos(this), retDoorInfo.HeightPos(this), retDoorInfo.DepthPos(this));

  // Seal the frontpanel to get the frontweight
  let sealedDoor = Door.seal();
  frontWeight = sealedDoor.mod_FrontpanelWeightCalculations[0];

  //===================================================
  //          Add module for the handle strip
  //===================================================

  if (this.mod_HandleDesign_matrix.HandleType === "Handlestrip") {

    // Create map of positions for the setOrigin
    const handlePositionConfig = new Map([
      ["StripeTop", (HandleStrip: any) => HandleStrip.setOrigin(this.mod_FrontGapVert / 2, this.mod_FrontHeight - HandleHeight, 0)],
      ["StripeBtm", (HandleStrip: any) => HandleStrip.setOrigin(this.mod_FrontGapVert / 2, 0, 0)],
      ["StripeLeft", (HandleStrip: any) => HandleStrip.setOrigin(this.mod_FrontGapVert / 2, 0, 0)],
      ["StripeRight", (HandleStrip: any) => HandleStrip.setOrigin(this.mod_FrontWidth - this.mod_FrontGapVert / 2 - HandleHeight, 0, 0)]
    ]);

    // Add the module for the handle strip
    let HandleStrip = this.addOD_M_mc_Handlestrip01(2);
    HandleStrip.mod_Information = JSON.stringify(retHandleStripInfo);
    HandleStrip.mod_FrontType = "GroupDoor";

    // Set values to the attributes of the child
    if (handlePosType === 'StripeLeft' || handlePosType === 'StripeRight') {
      HandleStrip.mod_Height = this.mod_FrontHeight - this.mod_FrontGapHor;
    }
    else {
      HandleStrip.mod_Width = this.mod_FrontWidth - this.mod_FrontGapVert;
    }
    HandleStrip.mod_Depth = this.mod_FrontThk;

    // Apply setOrigin based on HandlePosType or log error if not valid
    const setOriginFunc = handlePositionConfig.get(handlePosType);
    if (setOriginFunc) {
      setOriginFunc(HandleStrip);
    }
    else {
      logError(GlobalFunc.find_ErrorList('Error 22025', 1).Message(''));
    }
  }

  //===================================================
  //          Add module for the handle
  //===================================================

  else if (this.mod_HandleDesign_matrix.HandleType == "Handle") {

    // Add the module
    let Handle = this.addOD_M_mc_Handle01(3);

    // Set values to the attributes of the child
    Handle.mod_Width = retDoorInfo.Width(this);
    Handle.mod_Height = retDoorInfo.Height(this);
    Handle.mod_Depth = retDoorInfo.Thickness;

    // Provide Information about part on which the handle is positioned
    Handle.mod_FrontType = 'part_Door';
    Handle.mod_PartInfo = this.mod_DoorDirection;

    // setOrigin
    Handle.setOrigin(retDoorInfo.WidthPos(this), retDoorInfo.HeightPos(this), retDoorInfo.DepthPos(this));

    // Seal the handle to get the frontWeight
    let sealedHandle = Handle.seal();
    handleWeight = sealedHandle.mod_HandleWeightCalculations[0];
  }

  //===================================================
  //          Calculate FrontOverlay ///////////////////////////////////////////////////////////////////// WHEN THE PUSHTOOPEN IS UPDATED (ALL CALCULATION INSIDE mc_Pushtoopen01) THIS CALCULATION SHOULD NOT BE NECESSARY (João Lisboa)
  //===================================================

  let iFrontOverlay = GlobalFunc.calc_FrontOverlay(
    this, retDoorInfo.Width(this),
    retDoorInfo.Height(this),
    retDoorInfo.WidthPos(this) + this.mod_Originpos[0],
    this.mod_FrontPosStart + retDoorInfo.HeightPos(this), 'FromFront'
  );

  //===================================================
  //          Add module for the duststrip
  //===================================================

  if (this.mod_VertDividerType == 'DustStripLeft' && this.mod_DoorDirection == 'Left') {
    let Duststrip = this.addOD_M_mc_Duststrip01(4);
    Duststrip.mod_CarcaseSpaceDimension.push(this.mod_CarcaseSpaceDimension[0]);
    Duststrip.setOrigin(this.mod_FrontWidth, CarcaseSpaceDimension.HeightFreeStartPos - this.mod_Originpos[1], 0);
  }

  else if (this.mod_VertDividerType == 'DustStripRight' && this.mod_DoorDirection == 'Right') {
    let Duststrip = this.addOD_M_mc_Duststrip01(4);
    Duststrip.mod_CarcaseSpaceDimension.push(this.mod_CarcaseSpaceDimension[0]);
    Duststrip.setOrigin(0, CarcaseSpaceDimension.HeightFreeStartPos - this.mod_Originpos[1], 0);
  }

  //===================================================
  //          Add module for the Push To Open
  //===================================================

  if (this.mod_OpeningType == 'PushToOpenManual') {
    try {
      //---------------Run PushToOpen Process-----------------
      let retPushToOpen = GlobalFunc.process_Pushtoopen(this,
        retDoorInfo.HeightPos(this) + this.mod_FrontPosStart,
        retDoorInfo.Height(this), iFrontOverlay, this.mod_DoorDirection, 'Doors'
      );

      if (!retPushToOpen) throw new Error('Missing data for the push to open');

      //---------------Add module-----------------
      let pushToOpen = this.addOD_M_mc_Pushtoopen01(5);
      if (!pushToOpen) throw new Error('The module for push to open is not existing!');

      //---------------Pass info from process to module-----------------
      let pushToOpenInfo: any = {
        FrontWidth: retDoorInfo.Width(this),
        FrontHeight: retDoorInfo.Height(this),
        FrontWidthPos: retDoorInfo.WidthPos(this),
        MinFrontGapCarcase: retPushToOpen.MinFrontGapCarcase,
        Part: retPushToOpen.Part,
        PositionHeight: retPushToOpen.PositionHeight,
        PositionWidth: retPushToOpen.PositionWidth,
        Type: retPushToOpen.Type,
        CarcaseHardwareItem: retPushToOpen.CarcaseHardwareItem,
        CarcaseProcessingItem: retPushToOpen.CarcaseProcessingItem,
        CarcaseGraphic: retPushToOpen.CarcaseGraphic,
        PartThk: retPushToOpen.PartThk,
        Offset: retPushToOpen.Offset,
        PosThk: retPushToOpen.PosThk
      };

      let strJson = JSON.stringify(pushToOpenInfo);
      pushToOpen.mod_PushtoopenInfo.push(strJson);

      //---------------Pass carcasePartInfo to module-----------------
      let strJsoncarcasePartInfo = JSON.stringify(carcasePartInfo);
      pushToOpen.mod_CarcasePartInfo.push(strJsoncarcasePartInfo);

      //---------------SetOrigin to module-----------------
      pushToOpen.setOrigin(this.mod_FrontGapVert / 2, 0, 0);
      pushToOpen.mod_Originpos.push(this.mod_Originpos[0] + this.mod_FrontGapVert / 2);
      pushToOpen.mod_Originpos.push(this.mod_Originpos[1]);
      pushToOpen.mod_Originpos.push(this.mod_Originpos[2]);

    }
    catch (error: any) {
      let ErrorMessage = GlobalFunc.find_ErrorList('Error 22006', 1);
      logError(ErrorMessage.Message(error.message));
    }
  }

  //===================================================
  //          Add module for the hinges
  //===================================================
  
  if (this.mod_HingeType !== 'NoHinges') {

    //---------------Add the module-----------------
    let HingeGroup = this.addOD_M_mc_HingeGroup01();

    //---------------Pass attributes to module-----------------
    HingeGroup.mod_Width = retDoorInfo.Width(this);
    HingeGroup.mod_Height = retDoorInfo.Height(this);
    HingeGroup.mod_Depth = retDoorInfo.Thickness;
    HingeGroup.mod_FrontType = this.mod_DoorDirection === "Right" ? "DoorRight" : "DoorLeft";
    HingeGroup.mod_FrontDesign = this.mod_FrontDesign == 'Automatic' ? retDoorInfo.FrontDesign! : this.mod_FrontDesign;
    HingeGroup.mod_Originpos.push(this.mod_Originpos[0] + this.mod_FrontGapVert / 2);
    HingeGroup.mod_Originpos.push(this.mod_Originpos[1]);
    HingeGroup.mod_Originpos.push(this.mod_Originpos[2]);

    //---------------Pass carcasePartInfo to module-----------------
    let strJsoncarcasePartInfo = JSON.stringify(carcasePartInfo);
    HingeGroup.mod_CarcasePartInfo.push(strJsoncarcasePartInfo);

    //---------------Pass PanelWoodFrameType to module-----------------
    const isAutomatic = this.mod_FrontDesign === "Automatic";
    HingeGroup.mod_PanelWoodFrameType = this.mod_PanelWoodFrameType === "Automatic" ? retDoorInfo.FrameType! : this.mod_PanelWoodFrameType;
    HingeGroup.mod_FramePartsWidthHor = (isAutomatic && retDoorInfo.FramePartsWidthHor! > 0) ? retDoorInfo.FramePartsWidthHor! : this.mod_FramePartsWidthHor;
    HingeGroup.mod_FramePartsWidthVert = (isAutomatic && retDoorInfo.FramePartsWidthVert! > 0) ? retDoorInfo.FramePartsWidthVert! : this.mod_FramePartsWidthVert;

    //--------------- setOrigin-----------------
    HingeGroup.setOrigin(retDoorInfo.WidthPos(this), retDoorInfo.HeightPos(this), retDoorInfo.DepthPos(this));
    
    //===================================================
    // Seal mc_HingeGroup01 and get attribute with OpeningAngle 
    //===================================================
    let sealedHingeGroup = HingeGroup.seal();
    this.mod_OpeningAngle.push(sealedHingeGroup.mod_OpeningAngle[0]);
    
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
export function mc_Door01_manufacturerDataCompletion(this: dc_mc_Door01):void {
  internal_enterModuleManufacturerDataCompletion('mc_Door01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_Door01_MANUFACTURERDATACOMPLETION

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
