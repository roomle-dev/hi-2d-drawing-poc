import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mc_DrawerBox01, dc_mc_DrawerBox01, adc_mc_DrawerBox01 } from '../internal/modules/mc_DrawerBox01'
import { GlobalFunc } from '../internal/global-func'
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

export function mc_DrawerBox01_createBuildPlan(this: cbp_mc_DrawerBox01):void {
  internal_enterModuleCreateBuildPlan('mc_DrawerBox01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mc_DrawerBox01_CREATEBUILDPLAN

  // Schuler Consulting
  // Create: June 2024
  // By Ludwig Weber
  // Purpose: CabinetLibrary
  //
  // Description:
  // AfterDataCompletion of mc_DrawerBox
  // Basic calculations
  // Insert the box-system (sides and glides)
  // Insert the bottom shelf
  // Insert the back panel
  // Error message if box is too big
  //
  // Revisions:
  // 
  //===================================================

  //===================================================
  // Basic calculations
  //===================================================

  // Call the process function
  let retInfo = GlobalFunc.process_Drawerbox(this);

  // Check the dimensions to make sure they are not bigger than the free space
  let BoxValid = true;
  if (retInfo.SideLeft.DimY! > this.mod_Height) { BoxValid = false }
  if (retInfo.SideLeft.DimZ! > this.mod_Depth) { BoxValid = false }

  // If the box fits into the free space insert it
  if (BoxValid) {

    //===================================================
    // Insert the box-system (sides and glides)
    //===================================================

    // Box side left
    let DrawerBoxLeft = this.addpart_DrawerSideLeft(retInfo.SideLeft.PosX, retInfo.SideLeft.PosY, retInfo.SideLeft.PosZ, retInfo.SideLeft.DimX, retInfo.SideLeft.DimY, retInfo.SideLeft.DimZ)
    DrawerBoxLeft.assign3DModel(retInfo.SideLeft.Model3D);
    GlobalFunc.process_AddMaterial(DrawerBoxLeft, 'drawerbox', retInfo.SideLeft.ColorId!);
    this.assignOpenGroup(this.mod_FrontId, DrawerBoxLeft);

    // Box side right
    let DrawerBoxRight = this.addpart_DrawerSideRight(retInfo.SideRight.PosX, retInfo.SideRight.PosY, retInfo.SideRight.PosZ, retInfo.SideRight.DimX, retInfo.SideRight.DimY, retInfo.SideRight.DimZ)
    DrawerBoxRight.assign3DModel(retInfo.SideRight.Model3D);
    GlobalFunc.process_AddMaterial(DrawerBoxRight, 'drawerbox', retInfo.SideRight.ColorId!);
    this.assignOpenGroup(this.mod_FrontId, DrawerBoxRight);

    // Slide left
    let DrawerSlideLeft = this.addpart_DrawerSlideLeft(retInfo.SlideLeft.PosX, retInfo.SlideLeft.PosY, retInfo.SlideLeft.PosZ, retInfo.SlideLeft.DimX, retInfo.SlideLeft.DimY, retInfo.SlideLeft.DimZ)
    DrawerSlideLeft.assign3DModel(retInfo.SlideLeft.Model3D);
    GlobalFunc.process_AddMaterial(DrawerSlideLeft, 'drawerslide', retInfo.SlideLeft.ColorId!);

    // Slide right
    let DrawerSlideRight = this.addpart_DrawerSlideRight(retInfo.SlideRight.PosX, retInfo.SlideRight.PosY, retInfo.SlideRight.PosZ, retInfo.SlideRight.DimX, retInfo.SlideRight.DimY, retInfo.SlideRight.DimZ)
    DrawerSlideRight.assign3DModel(retInfo.SlideRight.Model3D);
    GlobalFunc.process_AddMaterial(DrawerSlideRight, 'drawerslide', retInfo.SlideRight.ColorId!);

    //===================================================
    // Insert the bottom shelf
    //===================================================

    let DrawerBoxBtm = this.addpart_DrawerShelfbtm(retInfo.BottomShelf.PosX, retInfo.BottomShelf.PosY, retInfo.BottomShelf.PosZ, retInfo.BottomShelf.DimX, retInfo.BottomShelf.DimY, retInfo.BottomShelf.DimZ);
    GlobalFunc.process_AddMaterialCarcase(DrawerBoxBtm, this, 'shelfdrawer', false, false, 'None', retInfo.BottomShelf.BoardColor, retInfo.BottomShelf.BoardGrainId);
    this.assignPartGroup(this.mod_FrontId, DrawerBoxBtm);
    this.assignOpenGroup(this.mod_FrontId, DrawerBoxBtm);

    // Set attributes of the child
    DrawerBoxBtm.pa_BomId = this.mod_FrontId;
    DrawerBoxBtm.pa_ParentName = this.mod_FrontId;
    DrawerBoxBtm.pa_BtmColor = retInfo.BottomShelf.BoardColor;
    DrawerBoxBtm.pa_TopColor = retInfo.BottomShelf.BoardColor;
    DrawerBoxBtm.pa_EdgeFrontColor = retInfo.BottomShelf.EdgeColor;
    DrawerBoxBtm.pa_EdgeBackColor = retInfo.BottomShelf.EdgeColor;
    DrawerBoxBtm.pa_EdgeLeftColor = retInfo.BottomShelf.EdgeColor;
    DrawerBoxBtm.pa_EdgeRightColor = retInfo.BottomShelf.EdgeColor;
    DrawerBoxBtm.pa_EdgeFrontType = retInfo.BottomShelf.EdgeTypeFront;
    DrawerBoxBtm.pa_EdgeBackType = retInfo.BottomShelf.EdgeTypeBack;
    DrawerBoxBtm.pa_EdgeLeftType = retInfo.BottomShelf.EdgeTypeLeft;
    DrawerBoxBtm.pa_EdgeRightType = retInfo.BottomShelf.EdgeTypeRight;
    DrawerBoxBtm.pa_EdgeJointType = retInfo.BottomShelf.EdgeTypeJoint;
    DrawerBoxBtm.pa_ColorGrainGroup = retInfo.BottomShelf.BoardGrainId;
    DrawerBoxBtm.pa_GrainDirection = retInfo.BottomShelf.Grain;
    
    //===================================================
    // Insert the back panel
    //===================================================

    let DrawerBoxBackwall = this.addpart_DrawerBackwallWood(retInfo.Backwall.PosX, retInfo.Backwall.PosY, retInfo.Backwall.PosZ, retInfo.Backwall.DimX, retInfo.Backwall.DimY, retInfo.Backwall.DimZ);
    GlobalFunc.process_AddMaterialCarcase(DrawerBoxBackwall, this, 'backwalldrawer', false, false, 'None', retInfo.Backwall.BoardColor, retInfo.Backwall.BoardGrainId);
    this.assignPartGroup(this.mod_FrontId, DrawerBoxBackwall);
    this.assignOpenGroup(this.mod_FrontId, DrawerBoxBackwall);

    // Set attributes of the child
    DrawerBoxBackwall.pa_BomId = this.mod_FrontId;
    DrawerBoxBackwall.pa_ParentName = this.mod_FrontId;
    DrawerBoxBackwall.pa_BtmColor = retInfo.Backwall.BoardColor;
    DrawerBoxBackwall.pa_TopColor = retInfo.Backwall.BoardColor;
    DrawerBoxBackwall.pa_EdgeFrontColor = retInfo.Backwall.EdgeColor;
    DrawerBoxBackwall.pa_EdgeBackColor = retInfo.Backwall.EdgeColor;
    DrawerBoxBackwall.pa_EdgeLeftColor = retInfo.Backwall.EdgeColor;
    DrawerBoxBackwall.pa_EdgeRightColor = retInfo.Backwall.EdgeColor;
    DrawerBoxBackwall.pa_EdgeFrontType = retInfo.Backwall.EdgeTypeFront;
    DrawerBoxBackwall.pa_EdgeBackType = retInfo.Backwall.EdgeTypeBack;
    DrawerBoxBackwall.pa_EdgeLeftType = retInfo.Backwall.EdgeTypeLeft;
    DrawerBoxBackwall.pa_EdgeRightType = retInfo.Backwall.EdgeTypeRight;
    DrawerBoxBackwall.pa_EdgeJointType = retInfo.Backwall.EdgeTypeJoint;
    DrawerBoxBackwall.pa_ColorGrainGroup = retInfo.BottomShelf.BoardGrainId;
    DrawerBoxBackwall.pa_GrainDirection = retInfo.Backwall.Grain;
    DrawerBoxBackwall.pa_ProcessingId = retInfo.Backwall.ProcessingId;

    //===================================================
    // Insert the bottom shelf connectors
    //===================================================

    // Cycle to insert the connectors based on table entries
    retInfo.BottomShelfConnector.arrPosX.forEach(position => {
      let BSConnector = this.addpart_DrawerShelfbtmConnector(retInfo.BottomShelfConnector.PosX + position - this.mod_Width / 2, retInfo.BottomShelfConnector.PosY, retInfo.BottomShelfConnector.PosZ, retInfo.BottomShelfConnector.DimX, retInfo.BottomShelfConnector.DimY, retInfo.BottomShelfConnector.DimZ);
      BSConnector.assign3DModel(retInfo.BottomShelfConnector.Model3D);
      GlobalFunc.process_AddMaterial(BSConnector, 'hardware', retInfo.BottomShelfConnector.ColorId!);
      this.assignOpenGroup(this.mod_FrontId, BSConnector);

      // Insert the drilling part
      let BSConDrill = this.addpart_DrawerShelfbtmConnectorDrilling(position - this.mod_Width / 2, retInfo.BottomShelfConnector.PosY + retInfo.BottomShelfConnector.DimY - 1, -retInfo.BottomShelfConnector.DimZ, 1, 1, retInfo.BottomShelfConnector.DimZ);
      BSConDrill.pa_ProcessingId = retInfo.BottomShelfConnector.BotConProcessingId;
    });

    //===================================================
    // Insert the synchronization unit
    //===================================================

    if (retInfo.Synchronization.Model3D != undefined){
      let SyncUnit = this.addpart_DrawerBoxSynchronization(retInfo.Synchronization.PosX, retInfo.Synchronization.PosY, retInfo.Synchronization.PosZ, retInfo.Synchronization.DimX, retInfo.Synchronization.DimY, retInfo.Synchronization.DimZ);
      SyncUnit.assign3DModel(retInfo.Synchronization.Model3D);
      GlobalFunc.process_AddMaterial(SyncUnit, 'hardware', retInfo.Synchronization.ColorId!);     
    }

    //===================================================
    // Insert the drilling parts
    //===================================================

    // Drillings on sidepanels and front
    let DrillArea = this.addpart_DrawerBoxDrilling(retInfo.DrillArea.PosX, retInfo.DrillArea.PosY, retInfo.DrillArea.PosZ, retInfo.DrillArea.DimX, retInfo.DrillArea.DimY, retInfo.DrillArea.DimZ);
    DrillArea.pa_ProcessingId = retInfo.DrillArea.BoxProcessingId;
    DrillArea.pa_ProcessingId2 = retInfo.DrillArea.ConProcessingId;

    //===================================================
    // Insert the bom parts
    //===================================================

    let BomElem = this.addpart_DrawerBoxBom(retInfo.BomElement.PosX, retInfo.BomElement.PosY, retInfo.BomElement.PosZ, retInfo.BomElement.DimX, retInfo.BomElement.DimY, retInfo.BomElement.DimZ);
    this.assignPartGroup(this.mod_FrontId, BomElem);
    BomElem.pa_HardwareId = retInfo.BomElement.BoxHardwareId;
    BomElem.pa_HardwareId2 = retInfo.BomElement.ConHardwareId;
    BomElem.pa_HardwareId3 = retInfo.BottomShelfConnector.BotConHardwareId;
    BomElem.pa_HardwareId4 = retInfo.Synchronization.ConHardwareId;

  }

  //===================================================
  // Error message if box is too big
  //===================================================

  else {
    logError('Insertion of drawerbox failed, because the free space is not big enough for the configuration of the drawerbox.');
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
export function mc_DrawerBox01_afterDataCompletion(this: adc_mc_DrawerBox01):void {
  internal_enterModuleAfterDataCompletion('mc_DrawerBox01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_DrawerBox01_AFTERDATACOMPLETION



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
export function mc_DrawerBox01_manufacturerDataCompletion(this: dc_mc_DrawerBox01):void {
  internal_enterModuleManufacturerDataCompletion('mc_DrawerBox01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_DrawerBox01_MANUFACTURERDATACOMPLETION

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
