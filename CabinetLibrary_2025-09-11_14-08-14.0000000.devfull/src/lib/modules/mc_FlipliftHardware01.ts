import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mc_FlipliftHardware01, dc_mc_FlipliftHardware01, adc_mc_FlipliftHardware01 } from '../internal/modules/mc_FlipliftHardware01'
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

export function mc_FlipliftHardware01_createBuildPlan(this: cbp_mc_FlipliftHardware01):void {
  internal_enterModuleCreateBuildPlan('mc_FlipliftHardware01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mc_FlipliftHardware01_CREATEBUILDPLAN

  // Schuler Consulting
  // Create: Feb 2025
  // By Ludwig Weber
  // Purpose: CabinetLibrary
  //
  // Description:
  // CreateBuildPlan of mc_FlipliftHardware01
  // Get the data from the parent module
  // Add the fittings and drills for the fliplift
  //
  // Revisions:
  //
  //=============================================================
  
  // Remember a valid hardware color
  let lastValidHwColor: string | undefined = undefined;

  //=============================================================
  // Get the data from the parent module
  //=============================================================

  try {
    let hardwareData = this.mod_HardwareTypeList[4] ? JSON.parse(this.mod_HardwareTypeList[4]) : null;
    let frontOverlay = this.mod_FrontOverlayInfo ? JSON.parse(this.mod_FrontOverlayInfo) : null;

    let connectorPosX = 0;
    let connectorPosY = 0;

    // Create an object to store the hardware id's
    let hardwareElements: { values: string[] } = { values: [] };

    //=============================================================
    // Fliplift FHF
    //=============================================================

    if (this.mod_FlipliftType == "FHF") {

      // Remember a valid hardware color
      lastValidHwColor = undefined;

      // First front (insert the front connectors)
      //-----------------------------------------------------------

      if (this.mod_FlipliftFrontNumber == 0) {

        // Cycle through the hardware elements to insert
        for (let i = 0; i < hardwareData.FrontElements.length; i++) {

          // Identify the hardware element to insert
          let thisElement = hardwareData.FrontElements[i].Data;

          // Insert only the front connectors
          if (thisElement.Identifier == "FrontConnector") {

            // Positioning in X-Direction
            let gposX = thisElement.ConstructionPosX - thisElement.PosX - thisElement.DimX / 2;         
            let dposX = thisElement.ConstructionPosX;
            connectorPosX = thisElement.ConstructionPosX;
            if (hardwareData.FrontElements[i].Direction == "R") {
              gposX = this.mod_Width - gposX - thisElement.DimX;
              dposX = this.mod_Width - dposX;
            }

            // Positioning in Z-Direction
            let gposZ = thisElement.PosZ - thisElement.DimZ;
            let dposZ = -1;

            // Positioning in Y-Direction
            let gposY = this.mod_FrontHeight - thisElement.DimY - thisElement.ConstructionPosY - thisElement.PosY;
            let dposY = this.mod_FrontHeight - thisElement.ConstructionPosY;
            connectorPosY = thisElement.ConstructionPosY;

            // Insertion of the graphic
            let graphic = this.addpart_FlipliftHardwareGraphic(gposX, gposY, gposZ, thisElement.DimX, thisElement.DimY, thisElement.DimZ);
            graphic.assign3DModel(thisElement.Model3D);
            this.assignPartGroup(this.mod_FrontId, graphic);
            this.assignOpenGroup(this.mod_FrontId, graphic);

            // Add the material in the graphic
            let hwColor = GlobalFunc.process_HardwareColor(thisElement.HardwareId!);
            if (hwColor) {
              lastValidHwColor = hwColor;
            } 
            else if (lastValidHwColor) {
              hwColor = lastValidHwColor;
            }

            if (hwColor) {
              GlobalFunc.process_AddMaterial(graphic, 'fliplift', hwColor);
            }

            // Insertion of the drills
            let drill = this.addpart_FlipliftHardwareFrontpanelDrilling(dposX, dposY, dposZ, 1, 1, 1);
            drill.pa_ProcessingId = thisElement.ProcessingId;
            this.assignPartGroup(this.mod_FrontId, drill);

            // Add the bom id
            hardwareElements.values.push(thisElement.HardwareId);
          }
        }

        // First front (insert the mechanism)
        //-----------------------------------------------------------

        // Remember a valid hardware color
        lastValidHwColor = undefined;

        // Cycle through the hardware elements to insert
        for (let i = 0; i < hardwareData.MechanismElements.length; i++) {

          // Identify the hardware element to insert
          let thisElement = hardwareData.MechanismElements[i].Data;
          
          if (thisElement.Identifier == "Mechanism") {

            // Positioning in X-Direction
            let posX = connectorPosX - thisElement.PosX - thisElement.DimX / 2 - thisElement.ConstructionPosX;
            if (hardwareData.MechanismElements[i].Direction == "R") {
              posX = this.mod_Width - posX - thisElement.ConstructionPosX - thisElement.DimX;           
            }

            // Positioning in Z-Direction
            let posZ = thisElement.PosZ - thisElement.DimZ - thisElement.ConstructionPosZ;
            
            // Positioning in Y-Direction
            let posY = this.mod_FrontHeight - connectorPosY - thisElement.ConstructionPosY - thisElement.PosY;

            // Dimension DimY
            let dimY = thisElement.DimY; // this.mod_Height - thisElement.ConstructionDimY - posY;  ==> As long as we can't really stretch the 3D-Models
            
            // Insertion of the graphic
            let graphic = this.addpart_FlipliftHardwareGraphic(posX, posY, posZ, thisElement.DimX, dimY, thisElement.DimZ);
            graphic.assign3DModel(thisElement.Model3D, true);
            this.assignPartGroup(this.mod_FrontId, graphic);

            // Add the material in the graphic
            let hwColor = GlobalFunc.process_HardwareColor(thisElement.HardwareId!);
            if (hwColor) {
              lastValidHwColor = hwColor;
            } 
            else if (lastValidHwColor) {
              hwColor = lastValidHwColor;
            }

            if (hwColor) {
              GlobalFunc.process_AddMaterial(graphic, 'fliplift', hwColor);
            }

            // Add the bom id
            hardwareElements.values.push(thisElement.HardwareId);
          }
        }
      }

      // Second front (insert the powerstorage)
      //-----------------------------------------------------------

      else if (this.mod_FlipliftFrontNumber == 1) {

        // Remember a valid hardware color
        lastValidHwColor = undefined;

        // Cycle through the hardware elements to insert
        for (let i = 0; i < hardwareData.CarcaseElements.length; i++) {

          // Identify the hardware element to insert
          let thisElement = hardwareData.CarcaseElements[i].Data;

          // Insert only the powerstorage
          if (thisElement.Identifier == "CarcaseLeft" || thisElement.Identifier == "CarcaseRight") {

            // Positioning in X-Direction
            let gposX = -thisElement.PosX;
            let dposX = 0;
            if (hardwareData.CarcaseElements[i].Direction == "R") {
              gposX = this.mod_Width + thisElement.PosX - thisElement.DimX;
              dposX = this.mod_Width - 1;
            }

            // Positioning in Z-Direction
            let gposZ = -thisElement.DimZ - this.mod_FrontGapCarcase - thisElement.ConstructionPosZ + thisElement.PosZ;
            let dposZ = - this.mod_FrontGapCarcase - thisElement.ConstructionPosZ;

            // Positioning in Y-Direction
            let gposY = this.mod_FrontHeight - frontOverlay.Top - thisElement.DimY - thisElement.ConstructionPosY + thisElement.PosY;
            let dposY = this.mod_FrontHeight - frontOverlay.Top - thisElement.ConstructionPosY
            
            // Insertion of the graphic
            let graphic = this.addpart_FlipliftHardwareGraphic(gposX, gposY, gposZ, thisElement.DimX, thisElement.DimY, thisElement.DimZ);
            graphic.assign3DModel(thisElement.Model3D);
            this.assignPartGroup(this.mod_FrontId, graphic);

            // Add the material in the graphic
            let hwColor = GlobalFunc.process_HardwareColor(thisElement.HardwareId!);
            if (hwColor) {
              lastValidHwColor = hwColor;
            } 
            else if (lastValidHwColor) {
              hwColor = lastValidHwColor;
            }

            if (hwColor) {
              GlobalFunc.process_AddMaterial(graphic, 'fliplift', hwColor);
            }

            // Insertion of the drills
            let drill = this.addpart_FlipliftHardwareSidepanelDrilling(dposX, dposY, dposZ, 1, 1, 1);
            drill.pa_ProcessingId = thisElement.ProcessingId;
            this.assignPartGroup(this.mod_FrontId, drill);

            // Add the bom id
            hardwareElements.values.push(thisElement.HardwareId);
          }
        }
      }
    }

    //=============================================================
    // Fliplift (all the other versions)
    //=============================================================

    else {

      // Front connectors
      //-----------------------------------------------------------

      // Remember a valid hardware color
      lastValidHwColor = undefined;

      // Cycle through the hardware elements to insert
      for (let i = 0; i < hardwareData.FrontElements.length; i++) {

        // Identify the hardware element to insert
        let thisElement = hardwareData.FrontElements[i].Data;

        // Insert only the front connectors
        if (thisElement.Identifier == "FrontConnector") {

          // Positioning in X-Direction
          let gposX = thisElement.ConstructionPosX - thisElement.PosX - thisElement.DimX / 2;         
          let dposX = thisElement.ConstructionPosX;
          connectorPosX = thisElement.ConstructionPosX;
          if (hardwareData.FrontElements[i].Direction == "R") {
            gposX = this.mod_Width - gposX - thisElement.DimX;
            dposX = this.mod_Width - dposX;
          }

          // Positioning in Z-Direction
          let gposZ = thisElement.PosZ - thisElement.DimZ;
          let dposZ = -1;

          // Positioning in Y-Direction
          let gposY = this.mod_FrontHeight - frontOverlay.Top - thisElement.DimY - thisElement.ConstructionPosY - thisElement.PosY;
          let dposY = this.mod_FrontHeight - frontOverlay.Top - thisElement.ConstructionPosY;
          connectorPosY = thisElement.ConstructionPosY;

          // Insertion of the graphic
          let graphic = this.addpart_FlipliftHardwareGraphic(gposX, gposY, gposZ, thisElement.DimX, thisElement.DimY, thisElement.DimZ);
          graphic.assign3DModel(thisElement.Model3D);
          this.assignPartGroup(this.mod_FrontId, graphic);
          this.assignOpenGroup(this.mod_FrontId, graphic);

          // Add the material in the graphic
          let hwColor = GlobalFunc.process_HardwareColor(thisElement.HardwareId!);
          if (hwColor) {
            lastValidHwColor = hwColor;
          } 
          else if (lastValidHwColor) {
            hwColor = lastValidHwColor;
          }

          if (hwColor) {
            GlobalFunc.process_AddMaterial(graphic, 'fliplift', hwColor);
          }

          // Insertion of the drills
          let drill = this.addpart_FlipliftHardwareFrontpanelDrilling(dposX, dposY, dposZ, 1, 1, 1);
          drill.pa_ProcessingId = thisElement.ProcessingId;
          this.assignPartGroup(this.mod_FrontId, drill);

          // Add the bom id
          hardwareElements.values.push(thisElement.HardwareId);
        }
      }

      // Mechanism
      //-----------------------------------------------------------

      // Remember a valid hardware color
      lastValidHwColor = undefined;

      // Cycle through the hardware elements to insert
      for (let i = 0; i < hardwareData.MechanismElements.length; i++) {

        // Identify the hardware element to insert
        let thisElement = hardwareData.MechanismElements[i].Data;
        
        if (thisElement.Identifier == "Mechanism") {

          // Positioning in X-Direction
          let posX = connectorPosX - thisElement.PosX - thisElement.DimX / 2 - thisElement.ConstructionPosX;
          if (hardwareData.MechanismElements[i].Direction == "R") {
            posX = this.mod_Width - posX - thisElement.ConstructionPosX - thisElement.DimX;           
          }

          // Positioning in Z-Direction
          let posZ = thisElement.PosZ - thisElement.DimZ - thisElement.ConstructionPosZ;
          
          // Positioning in Y-Direction
          let posY = this.mod_FrontHeight - frontOverlay.Top - connectorPosY - thisElement.ConstructionPosY - thisElement.PosY;

          // Dimension DimY
          let dimY = thisElement.DimY
          if (thisElement.ConstructionDimY > 0) {
            dimY = this.mod_Height - thisElement.ConstructionDimY - posY;
          }
          
          // Insertion of the graphic
          let graphic = this.addpart_FlipliftHardwareGraphic(posX, posY, posZ, thisElement.DimX, dimY, thisElement.DimZ);
          graphic.assign3DModel(thisElement.Model3D, true);
          this.assignPartGroup(this.mod_FrontId, graphic);

          // Add the material in the graphic
          let hwColor = GlobalFunc.process_HardwareColor(thisElement.HardwareId!);
          if (hwColor) {
            lastValidHwColor = hwColor;
          } 
          else if (lastValidHwColor) {
            hwColor = lastValidHwColor;
          }

          if (hwColor) {
            GlobalFunc.process_AddMaterial(graphic, 'fliplift', hwColor);
          }

          // Add the bom id
          hardwareElements.values.push(thisElement.HardwareId);
        }
      }

      // Carcase Element (powerstorage)
      //-----------------------------------------------------------

      // Remember a valid hardware color
      lastValidHwColor = undefined;

      // Cycle through the hardware elements to insert
      for (let i = 0; i < hardwareData.CarcaseElements.length; i++) {

        // Identify the hardware element to insert
        let thisElement = hardwareData.CarcaseElements[i].Data;

        // Insert only the powerstorage
        if (thisElement.Identifier == "CarcaseLeft" || thisElement.Identifier == "CarcaseRight") {

          // Positioning in X-Direction
          let gposX = -thisElement.PosX;
          let dposX = 0;
          if (hardwareData.CarcaseElements[i].Direction == "R") {
            gposX = this.mod_Width + thisElement.PosX - thisElement.DimX;
            dposX = this.mod_Width - 1;
          }

          // Positioning in Z-Direction
          let gposZ = -thisElement.DimZ - thisElement.ConstructionPosZ + thisElement.PosZ;
          let dposZ = -thisElement.ConstructionPosZ;

          // Positioning in Y-Direction
          let gposY = this.mod_FrontHeight - frontOverlay.Top - thisElement.DimY - thisElement.ConstructionPosY + thisElement.PosY;
          let dposY = this.mod_FrontHeight - frontOverlay.Top - thisElement.ConstructionPosY
          
          // Insertion of the graphic
          let graphic = this.addpart_FlipliftHardwareGraphic(gposX, gposY, gposZ, thisElement.DimX, thisElement.DimY, thisElement.DimZ);
          graphic.assign3DModel(thisElement.Model3D);
          this.assignPartGroup(this.mod_FrontId, graphic);

          // Add the material in the graphic
          let hwColor = GlobalFunc.process_HardwareColor(thisElement.HardwareId!);
          if (hwColor) {
            lastValidHwColor = hwColor;
          } 
          else if (lastValidHwColor) {
            hwColor = lastValidHwColor;
          }

          if (hwColor) {
            GlobalFunc.process_AddMaterial(graphic, 'fliplift', hwColor);
          }

          // Insertion of the drills
          if (thisElement.ConstructionPart == "Top") {

            // Overwrite positions if the connection is related to the top part
            dposX = thisElement.DrillPosX;
            if (hardwareData.CarcaseElements[i].Direction == "R") {
              dposX = this.mod_Width - thisElement.DrillPosX;
            }           
            dposY = this.mod_FrontHeight - frontOverlay.Top - 1;
          }
          let drill = this.addpart_FlipliftHardwareSidepanelDrilling(dposX, dposY, dposZ, 1, 1, 1);
          drill.pa_ProcessingId = thisElement.ProcessingId;
          this.assignPartGroup(this.mod_FrontId, drill);

          // Add the bom id
          hardwareElements.values.push(thisElement.HardwareId);
        }
      }     
    }

    //=============================================================
    // Insert the BOM part
    //=============================================================

    // Convert the object to a json string
    const jsonString: string = JSON.stringify(hardwareElements);

    // Add the bom part and set the attribute
    let bomPart = this.addpart_FlipliftHardwareBom(0, 0, 0, 1, 1, 1);
    this.assignPartGroup(this.mod_FrontId, bomPart);
    bomPart.pa_BomId = jsonString;

  }

  //=============================================================
  // Handle the errors
  //=============================================================
  catch (error: any) {
    logError("Hardware for fliplift cannot be inserted. Incomplete data: " + error.Message);
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
export function mc_FlipliftHardware01_afterDataCompletion(this: adc_mc_FlipliftHardware01):void {
  internal_enterModuleAfterDataCompletion('mc_FlipliftHardware01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_FlipliftHardware01_AFTERDATACOMPLETION
  // Schuler Consulting
  // Create: Feb 2025
  // By Ludwig Weber
  // Purpose: CabinetLibrary
  //
  // Description:
  // AfterDataCompletion of mc_FlipliftHardware01
  // Call the process function for the hardware
  // Provide the data for CreateBuildPlan and the parent
  //
  // Revisions:
  //
  //===================================================

  //===================================================
  // Call the process function
  //===================================================

  let hardwareData = GlobalFunc.process_Fliplift(this);

  try {
    if (hardwareData) {

      // Return the OpeningAngle
      let OpeningAngle: any = {
        Angle: hardwareData.AddOnData.OpeningAngle
      }
      let strJsonOpeningAngle = JSON.stringify(OpeningAngle);
      this.mod_OpeningAngle.push(strJsonOpeningAngle);

      // Return AddOnData
      this.mod_HardwareTypeList.push(hardwareData.AddOnData.PushToOpen.toString());
      this.mod_HardwareTypeList.push(hardwareData.AddOnData.Hinges.toString());
      this.mod_HardwareTypeList.push(hardwareData.AddOnData.HingeClass);
      this.mod_HardwareTypeList.push(hardwareData.AddOnData.FlipliftHardwareType);
      this.mod_OpeningAngle.push(hardwareData.AddOnData.OpeningAngle.toString());

      // Push the hardware data from the process function to the HardwareTypeList to get access in CreateBuildPlan
      this.mod_HardwareTypeList.push(JSON.stringify(hardwareData));     
    }

    // Error handling
    else {
      throw new Error('No data for the fliplift hardware.');
    }
  }

  // Faild to create the hardware data
  catch (error: any) {
    logError(GlobalFunc.find_ErrorList('Error 22033', 1).Message(error.message));
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
export function mc_FlipliftHardware01_manufacturerDataCompletion(this: dc_mc_FlipliftHardware01):void {
  internal_enterModuleManufacturerDataCompletion('mc_FlipliftHardware01', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mc_FlipliftHardware01_MANUFACTURERDATACOMPLETION

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
