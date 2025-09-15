import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mc_PanelWoodFrame01, dc_mc_PanelWoodFrame01, adc_mc_PanelWoodFrame01 } from '../internal/modules/mc_PanelWoodFrame01'
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

export function mc_PanelWoodFrame01_createBuildPlan(this: cbp_mc_PanelWoodFrame01):void {
  internal_enterModuleCreateBuildPlan('mc_PanelWoodFrame01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mc_PanelWoodFrame01_CREATEBUILDPLAN
  // Schuler Consulting
  // Create: Jan 2025
  // By Henning Wiesbrock
  // Purpose: CabinetLibrary
  //
  // Description:
  // CreateBuildPlan of mc_PanelWoodFrame01
  // Add a front panel
  //
  // Revisions:
  //
  //===================================================

  //===================================================
  //          Initialize
  //===================================================

  // Mapping for FrontType configurations with direct method references
  let partConfig = new Map([
    ['DoorLeft', { partGroup: 'Door', handlePosType: true, opening: true, additionalInfo1: this.mod_DoorDirection, createPart: () => this.addpart_DoorPanelWoodFrame(0, 0, 0, this.mod_Width, this.mod_Height, this.mod_Depth) }],
    ['DoorRight', { partGroup: 'Door', handlePosType: true, opening: true, additionalInfo1: this.mod_DoorDirection, createPart: () => this.addpart_DoorPanelWoodFrame(0, 0, 0, this.mod_Width, this.mod_Height, this.mod_Depth) }],
    ['Drawer', { partGroup: 'Drawer', handlePosType: true, opening: true, additionalInfo1: 'None', createPart: () => this.addpart_DrawerPanelWoodFrame(0, 0, 0, this.mod_Width, this.mod_Height, this.mod_Depth) }],
    ['Fliplift', { partGroup: 'Fliplift', handlePosType: true, opening: true, additionalInfo1: this.mod_FlipliftType, createPart: () => this.addpart_FlipliftPanelWoodFrame(0, 0, 0, this.mod_Width, this.mod_Height, this.mod_Depth) }],
    ['Fixedfront', { partGroup: 'Drawer', handlePosType: true, opening: false, additionalInfo1: 'None', createPart: () => this.addpart_FixedfrontPanelWoodFrame(0, 0, 0, this.mod_Width, this.mod_Height, this.mod_Depth) }],
    ['Dishwasher', { partGroup: 'Dishwasher', handlePosType: true, opening: true, additionalInfo1: 'None', createPart: () => this.addpart_DishwasherPanelWoodFrame(0, 0, 0, this.mod_Width, this.mod_Height, this.mod_Depth) }]
  ]);
  let config = partConfig.get(this.mod_FrontType.trim());

  //===================================================
  //          Add the modules for the parts
  //===================================================

  // Check if mod_FrontType is valid (included in the map)
  if (config) {

    // If mod_FrontType is valid we get the information from the map
    let { partGroup, handlePosType, opening, additionalInfo1, createPart } = config;

    try {

      // Find handelPosType
      let handlePos = "None";
      if (handlePosType) {
        handlePos = GlobalFunc.find_HandleSettings(this.mod_HandlePosType, partGroup).HandleOrientation!;
      }  

      // Call function to get Frontconstruction
      let retFrontConstruction = GlobalFunc.find_FrontConstruction(
        this.mod_FrontProgram, this.mod_FrontDesign, partGroup, this.mod_Width, this.mod_Height, this.mod_HandleDesign_matrix.HandleDesignGroup!, handlePos
      );
      if (!retFrontConstruction) {
        throw new Error('Could not retrieve front construction data.');
      }

      // Call function to get FrontWeightCalculations
      let retFrontWeight = GlobalFunc.process_FrontpanelWeightCalculations(this, partGroup, handlePos);
      if (!retFrontWeight) {
        throw new Error('Could not calculate front panel weight.');
      }

      // Variables for FrameConnection
      const isAutomatic = this.mod_FrontDesign === "Automatic";

      const FrameWidthHor = isAutomatic ? retFrontConstruction.FramePartsWidthHor : this.mod_FramePartsWidthHor;
      const FrameWidthVert = isAutomatic ? retFrontConstruction.FramePartsWidthVert : this.mod_FramePartsWidthVert;
      const PanelWoodFrameType = isAutomatic ? retFrontConstruction.FrameType! : this.mod_PanelWoodFrameType;
      const PanelWoodFrameFillingType = isAutomatic ? retFrontConstruction.FrameFillingType! : this.mod_PanelWoodFrameFillingType;
      const FillingThk = isAutomatic ? retFrontConstruction.FrameFillingThk! : this.mod_PanelWoodFrameFillingType_matrix.MaterialThk!;
      const FillingMaterial = isAutomatic ? retFrontConstruction.FrameFillingMaterial! : this.mod_PanelWoodFrameFillingType_matrix.Material!;
      const FillingWoodColor = this.mod_FrameFillingWoodColor === "LikeFrameColor" ? this.mod_FrontColor : this.mod_FrameFillingWoodColor;

      let FrameFillingStartPosX = FrameWidthVert - this.g.basic_FramePanelGrooveDepth + this.g.basic_FillingGrooveGap;
      let FrameFillingStartPosY = FrameWidthHor - this.g.basic_FramePanelGrooveDepth + this.g.basic_FillingGrooveGap;
      let FrameFillingStartPosZ = (this.mod_Depth - FillingThk) / 2;
      let FillingWidth = this.mod_Width - 2 * FrameWidthVert + 2 * this.g.basic_FramePanelGrooveDepth - this.g.basic_FillingGrooveGap;
      let FillingHeight = this.mod_Height - 2 * FrameWidthHor + 2 * this.g.basic_FramePanelGrooveDepth - this.g.basic_FillingGrooveGap;

      // Define FrontEdgeColor
      let FrontEdgeColorData = GlobalFunc.find_FrontEdgeColorMapping(this.mod_FrontProgram, this.mod_FrontColor);
      let FrontEdgeColor = this.mod_FrontEdgeColor == 'Automatic' ? FrontEdgeColorData.StandardColor! : this.mod_FrontEdgeColor;

      // Add the ghost parts
      let element = createPart();
      this.assignPartGroup(this.mod_FrontId, element);
      element.pa_Weight = retFrontWeight;
      element.pa_FramePartsWidthHor = FrameWidthHor;
      element.pa_FramePartsWidthVert = FrameWidthVert;
      element.pa_PanelWoodFrameType = PanelWoodFrameType;
      //element.pa_PanelWoodFrameFillingType = PanelWoodFrameFillingType;
      element.pa_FrameFillingMaterial = FillingMaterial;
      element.pa_FrameFillingThk = FillingThk;
      element.pa_AdditionalInfo1 = additionalInfo1;
      element.pa_FrameFillingWoodColor = FillingWoodColor;
      element.pa_EdgeBackColor = FrontEdgeColor;
      element.pa_EdgeFrontColor = FrontEdgeColor;
      element.pa_EdgeLeftColor = FrontEdgeColor;
      element.pa_EdgeRightColor = FrontEdgeColor;

      if (opening) {
        this.assignOpenGroup(this.mod_FrontId, element);
      }

      // Vertical frame long
      if (PanelWoodFrameType == 'HeightCoveredWidth') {
        addFrameParts(this, this.mod_Height, 0, this.mod_Width - 2 * FrameWidthVert, FrameWidthVert, false, opening, FillingMaterial)
      }

      // Vertical frame short
      else if (PanelWoodFrameType == 'WidthCoveredHeight') {
        addFrameParts(this, this.mod_Height - 2 * FrameWidthHor, FrameWidthHor, this.mod_Width, 0, false, opening, FillingMaterial)
      }

      // Mitre cut
      else if (PanelWoodFrameType == 'Mitre') {
        if (FrameWidthHor == FrameWidthVert) {
          addFrameParts(this, this.mod_Height, 0, this.mod_Width, 0, true, opening, FillingMaterial)
        }
        else {
          // Frame vertical and horizontal is not equal
          throw new Error(String(GlobalFunc.find_ErrorList('Info 22004', 1)));
        }
      }
      else {
        // Should never happen, because it is an attribute with a selection (Only for the development team)
        throw new Error("This construction is not implemented! Framed Front mod_PanelWoodFrameType, mc_PanelWoodFram createBuildPlan!")
      }

      //===================================================
      //          Helper functions
      //===================================================

      // Add the graphical parts
      //---------------------------------------------------

      function addFrameParts(m: any, vertHeight: number, posVert: number, horLength: number, posHor: number, mitre: boolean, opening: boolean, material: string = 'Chipboard') {

        // Vertical left
        let FrameLeft = m.addpart_PanelWoodFrameLeft(0, posVert, 0, FrameWidthVert, vertHeight, m.mod_Depth);
        GlobalFunc.process_AddMaterial(FrameLeft, 'frameFrontVert', m.mod_FrontColor, m.mod_FrontColor, FrontEdgeColor, FrontEdgeColor, 'None', false, mitre);
        if (opening) {
          m.assignOpenGroup(m.mod_FrontId, FrameLeft);         
        }
        
        // Vertical right
        let FrameRight = m.addpart_PanelWoodFrameRight(m.mod_Width - FrameWidthVert, posVert, 0, FrameWidthVert, vertHeight, m.mod_Depth);
        GlobalFunc.process_AddMaterial(FrameRight, 'frameFrontVert', m.mod_FrontColor, m.mod_FrontColor, FrontEdgeColor, FrontEdgeColor, 'None', false, mitre);
        if (opening) {
          m.assignOpenGroup(m.mod_FrontId, FrameRight);        
        }

        // Horizontal bottom
        let FrameBtm = m.addpart_PanelWoodFrameBtm(posHor, 0, 0, horLength, FrameWidthHor, m.mod_Depth);
        GlobalFunc.process_AddMaterial(FrameBtm, 'frameFrontHor', m.mod_FrontColor, m.mod_FrontColor, FrontEdgeColor, FrontEdgeColor, 'None', false, mitre);
        if (opening) {
          m.assignOpenGroup(m.mod_FrontId, FrameBtm);
        }

        // Horizontal top
        let FrameTop = m.addpart_PanelWoodFrameTop(posHor, m.mod_Height - FrameWidthHor, 0, horLength, FrameWidthHor, m.mod_Depth);
        GlobalFunc.process_AddMaterial(FrameTop, 'frameFrontHor', m.mod_FrontColor, m.mod_FrontColor, FrontEdgeColor, FrontEdgeColor, 'None', false, mitre);
        if (opening) {
          m.assignOpenGroup(m.mod_FrontId, FrameTop);
        }

        // Filling
        let FrameFilling = m.addpart_PanelWoodFrameFilling(FrameFillingStartPosX, FrameFillingStartPosY, FrameFillingStartPosZ, FillingWidth, FillingHeight, FillingThk);
        if (material == "Glass") {
          GlobalFunc.process_AddMaterial(FrameFilling, 'front', m.mod_FrontGlassColor, m.mod_FrontGlassColor, m.mod_FrontGlassColor, m.mod_FrontGlassColor, 'None', false, false);
        }
        else {
          GlobalFunc.process_AddMaterial(FrameFilling, 'front', FillingWoodColor, FillingWoodColor, FillingWoodColor, FillingWoodColor, 'None', false, false);
        }
        
        if (opening) {
          m.assignOpenGroup(m.mod_FrontId, FrameFilling);
        }
        FrameFilling.pa_EdgeBackType = 'NOE';
        FrameFilling.pa_EdgeLeftType = 'NOE';
        FrameFilling.pa_EdgeRightType = 'NOE';
        FrameFilling.pa_EdgeFrontType = 'NOE';
        FrameFilling.pa_EdgeJointType = 'FFFF';


        // Mitre cut
        if (mitre) {

          // Create the contour for mitre cut
          let TotalFrameWidth = horLength;
          let TotalFrameHeight = vertHeight;
          let MitreFrameWidth = FrameWidthHor || FrameWidthVert;
          let SVGPathTop = `M0,${MitreFrameWidth} h${TotalFrameWidth} l${-MitreFrameWidth},${-MitreFrameWidth} H${MitreFrameWidth} Z`;
          let SVGPathLeft = `M0,0 v${TotalFrameHeight}  l${MitreFrameWidth},${-MitreFrameWidth} V${MitreFrameWidth} Z`;
          let SVGPathBtm = `M0,0 h${TotalFrameWidth} l${-MitreFrameWidth},${MitreFrameWidth} H${MitreFrameWidth} Z`;
          let SVGPathRight = `M${MitreFrameWidth},0 v${TotalFrameHeight}  l${-MitreFrameWidth},${-MitreFrameWidth} V${MitreFrameWidth} Z`;

          // Extrude the parts
          FrameTop.extrude(`<svg><path d="${SVGPathTop}"></path></svg>`, 'z');
          FrameLeft.extrude(`<svg><path d="${SVGPathLeft}"></path></svg>`, 'z');
          FrameBtm.extrude(`<svg><path d="${SVGPathBtm}"></path></svg>`, 'z');
          FrameRight.extrude(`<svg><path d="${SVGPathRight}"></path></svg>`, 'z');
        }
      }
    }

    //===================================================
    //          Error handling
    //===================================================

    catch (error: any) {
      logError(error.message);
    }
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
export function mc_PanelWoodFrame01_afterDataCompletion(this: adc_mc_PanelWoodFrame01):void {
  internal_enterModuleAfterDataCompletion('mc_PanelWoodFrame01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_PanelWoodFrame01_AFTERDATACOMPLETION

// Schuler Consulting
  // Create: Jan 2025
  // By Henning Wiesbrock
  // Purpose: CabinetLibrary
  //
  // Description:
  // AfterDataCompletion of mc_WoodFrame01
  // Weight calculation of the WoodFrame
  //
  // Revisions:
  //
  //===================================================

  //===================================================
  //          Initialize (Create the map)
  //===================================================

  // Mapping for FrontType configurations with direct method references
  let partConfig = new Map([
    ['DoorLeft', { partGroup: 'Door', handlePosType: true}],
    ['DoorRight', { partGroup: 'Door', handlePosType: true}],
    ['Fliplift', { partGroup: 'Fliplift', handlePosType: true}],
    ['Drawer', { partGroup: 'Drawer', handlePosType: true }],
    ['Fixedfront', { partGroup: 'Drawer', handlePosType: true }],
    ['Dishwasher', { partGroup: 'Dishwasher', handlePosType: true }],
  ]);
  let config = partConfig.get(this.mod_FrontType.trim());

    //===================================================
  // Try to calculate the frontpanel weight
  //===================================================

  // Check if mod_FrontType is valid (included in the map)
  if (config) {

    // If mod_FrontType is valid we get the information from the map
    let { partGroup, handlePosType} = config;

    try {

      // Find handelPosType
      let handlePos = "None";
      if (handlePosType) {
        handlePos = GlobalFunc.find_HandleSettings(this.mod_HandlePosType, partGroup).HandleOrientation!;
      } 

       // Call function to get FrontWeightCalculations
       let retFrontWeight = GlobalFunc.process_FrontpanelWeightCalculations(this, partGroup, handlePos);   
       if (!retFrontWeight) {
         throw new Error('Could not calculate front panel weight.');
       }
       this.mod_FrontpanelWeightCalculations.push(retFrontWeight);
    } 

  //===================================================
  // Catch the errors
  //===================================================
    
    catch (error:any) {
      let ErrorMessage = GlobalFunc.find_ErrorList('Error 21004',1);
      logError(ErrorMessage.Message(error.message));
      return;
    }
  } 
  else {
    let ErrorMessage = GlobalFunc.find_ErrorList('Error 21003',1);
    logError(ErrorMessage.Message(''));
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
export function mc_PanelWoodFrame01_manufacturerDataCompletion(this: dc_mc_PanelWoodFrame01):void {
  internal_enterModuleManufacturerDataCompletion('mc_PanelWoodFrame01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_PanelWoodFrame01_MANUFACTURERDATACOMPLETION

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
