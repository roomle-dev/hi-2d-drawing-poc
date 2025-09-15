import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../internal/logging'

//#region Imports
import { cbp_mf_Fliplift, dc_mf_Fliplift, adc_mf_Fliplift } from '../internal/modules/mf_Fliplift'
import { GlobalFunc } from '../internal/global-func'
import { dc_mc_Fliplift01, OD_M_mc_Fliplift01 } from '../internal/modules/mc_Fliplift01'
import { dc_mc_ShelfadjGroup01, OD_M_mc_ShelfadjGroup01 } from '../internal/modules/mc_ShelfadjGroup01'
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

export function mf_Fliplift_createBuildPlan(this: cbp_mf_Fliplift):void {
  internal_enterModuleCreateBuildPlan('mf_Fliplift', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
// CUSTOMSCRIPT_mf_Fliplift_CREATEBUILDPLAN

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
export function mf_Fliplift_afterDataCompletion(this: adc_mf_Fliplift):void {
  internal_enterModuleAfterDataCompletion('mf_Fliplift', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mf_Fliplift_AFTERDATACOMPLETION
  // CUSTOMSCRIPT_mf_Fliplift_AFTERDATACOMPLETION
  // Schuler Consulting
  // Create: November 2023
  // By Henning Wiesbrock
  // Purpose: CabinetLibrary
  //
  // Description:
  // AfterDataCompletion of mf_Fliplift
  // Add module for the flip lift elements
  // Add module for the adjustable shelves
  //
  // Revisions:
  // 
  //===================================================

  //===================================================
  //          Get the FreeSpace and StartPosition
  //===================================================

  let CarcaseSpaceDimension = JSON.parse(this.mod_CarcaseSpaceDimension[0]);

  // Get the Information of the Carcase Parts Info (to provide to hinges)
  let carcasePartInfo = JSON.parse(this.mod_CarcasePartInfo[0]);

    //If the number of Vertical Parts of the mf_door equals the number of doors it means there's no VertDivider between the doors and we need to add one value for NoVertDivider
    //if (carcasePartInfo.VerticalPartsType.length == doorInfo.DoorQty) {
    //  carcasePartInfo.VerticalPartsType.splice(1, 0, 'NoVertDivider');
    //  carcasePartInfo.VerticalPartsPosX.splice(1, 0, 0);
    //  carcasePartInfo.VerticalPartsPosZ.splice(1, 0, 0);
    //  carcasePartInfo.VerticalPartsDimX.splice(1, 0, 0);
    //  carcasePartInfo.VerticalPartsDimZ.splice(1, 0, 0);
    //  carcasePartInfo.VerticalPartsFrontAngle.splice(1, 0, 0);
    //}

    let i: number = 1;

    let VerticalPartsType: string[] = [];
    VerticalPartsType.push(carcasePartInfo.VerticalPartsType[i - 1]);
    VerticalPartsType.push(carcasePartInfo.VerticalPartsType[i]);

    let VerticalPartsPosX: number[] = [];
    VerticalPartsPosX.push(carcasePartInfo.VerticalPartsPosX[i - 1]);
    VerticalPartsPosX.push(carcasePartInfo.VerticalPartsPosX[i]);

    let VerticalPartsPosZ: number[] = [];
    VerticalPartsPosZ.push(carcasePartInfo.VerticalPartsPosZ[i - 1]);
    VerticalPartsPosZ.push(carcasePartInfo.VerticalPartsPosZ[i]);

    let VerticalPartsDimX: number[] = [];
    VerticalPartsDimX.push(carcasePartInfo.VerticalPartsDimX[i - 1]);
    VerticalPartsDimX.push(carcasePartInfo.VerticalPartsDimX[i]);

    let VerticalPartsDimZ: number[] = [];
    VerticalPartsDimZ.push(carcasePartInfo.VerticalPartsDimZ[i - 1]);
    VerticalPartsDimZ.push(carcasePartInfo.VerticalPartsDimZ[i]);

    let VerticalPartsFrontAngle: number[] = [];
    VerticalPartsFrontAngle.push(carcasePartInfo.VerticalPartsFrontAngle[i - 1]);
    VerticalPartsFrontAngle.push(carcasePartInfo.VerticalPartsFrontAngle[i]);

    let CarcasePartInfoPerFront: any = {
      HorizontalPartsType: carcasePartInfo.HorizontalPartsType,
      HorizontalPartsPosY: carcasePartInfo.HorizontalPartsPosY,
      HorizontalPartsPosZ: carcasePartInfo.HorizontalPartsPosZ,
      HorizontalPartsDimY: carcasePartInfo.HorizontalPartsDimY,
      HorizontalPartsDimZ: carcasePartInfo.HorizontalPartsDimZ,
      HorizontalPartsFrontAngle: carcasePartInfo.HorizontalPartsFrontAngle,
      VerticalPartsType: VerticalPartsType,
      VerticalPartsPosX: VerticalPartsPosX,
      VerticalPartsPosZ: VerticalPartsPosZ,
      VerticalPartsDimX: VerticalPartsDimX,
      VerticalPartsDimZ: VerticalPartsDimZ,
      VerticalPartsFrontAngle: VerticalPartsFrontAngle
    };

    let CarcasePartInfoPerFrontJson = JSON.stringify(CarcasePartInfoPerFront);

  //===================================================
  //          Add module for the Flip Lift (single front)
  //===================================================

  if (this.mod_FlipliftType != 'FHF') {

    // Add the module
    let fliplift = this.addOD_M_mc_Fliplift01();
    fliplift.setOrigin(0, 0, this.mod_FrontGapCarcase);

    // Set attributes of the childs
    fliplift.mod_FrontId = this.mod_FrontId;
    fliplift.mod_FrontWidth = this.mod_FrontWidth;
    fliplift.mod_Originpos.push(this.mod_Originpos[0]);
    fliplift.mod_Originpos.push(this.mod_Originpos[1]);
    fliplift.mod_Originpos.push(this.mod_Originpos[2] + this.mod_FrontGapCarcase);
    fliplift.mod_CarcaseSpaceDimension.push(this.mod_CarcaseSpaceDimension[0]);
    fliplift.mod_CarcasePartInfo.push(CarcasePartInfoPerFrontJson);  

    // Management of the front heights
    fliplift.mod_FrontHeight = this.mod_FrontHeight;
    fliplift.mod_FlipliftFrontHeightList.push(this.mod_FrontHeight);
    fliplift.mod_FlipliftFrontNumber = 0; 
  }

  //===================================================
  //          Add module for the Flip Lift FHF (splitted front)
  //===================================================

  else if (this.mod_FlipliftType == 'FHF') {

    // Value from the attribute
    if (this.mod_FrontSplitDescriptor != 'Automatic') {

      // Prozess Descriptor
      let DescriptorList = GlobalFunc.process_Descriptor(this.mod_FrontSplitDescriptor, this.mod_FrontHeight);

      // Select the first value of the descriptor for calculation of the top front panel
      let BottomHeight = DescriptorList[0];

      // Creates a new array of front heights and adds the second front height (Because the descriptor only delivers the first front)
      let FrontHeightList = DescriptorList.length > 0 ? [...DescriptorList, this.mod_FrontHeight! - BottomHeight] : [this.mod_FrontHeight!]; 

      // Creates a new array of front heights corrected by the gap     
      let FrontHeights = FrontHeightList.map(h => h - this.mod_FrontGapHor / 2);

      // Add the bottom front
      //----------------------------------------------
      let FlipliftBtm = this.addOD_M_mc_Fliplift01(1);
      FlipliftBtm.setOrigin(0, 0, this.mod_FrontGapCarcase);

      // Set the attributes for bottom front
      FlipliftBtm.mod_FrontId = this.mod_FrontId + "Btm"
      FlipliftBtm.mod_FrontWidth = this.mod_FrontWidth;
      FlipliftBtm.mod_Originpos.push(this.mod_Originpos[0]);
      FlipliftBtm.mod_Originpos.push(this.mod_Originpos[1]);
      FlipliftBtm.mod_Originpos.push(this.mod_Originpos[2] + this.mod_FrontGapCarcase);
      FlipliftBtm.mod_CarcaseSpaceDimension.push(this.mod_CarcaseSpaceDimension[0]);
      FlipliftBtm.mod_CarcasePartInfo.push(CarcasePartInfoPerFrontJson);

      // Manage the front heights
      FlipliftBtm.mod_FrontHeight = FrontHeights[0];
      FlipliftBtm.mod_FlipliftFrontHeightList.push(...FrontHeights);
      FlipliftBtm.mod_FlipliftFrontNumber = 0;

      // Get the handle weight
      let sealedBtmFliplift = FlipliftBtm.seal();
      
      // Add the top front
      //----------------------------------------------
      let FlipliftTop = this.addOD_M_mc_Fliplift01(0);
      FlipliftTop.setOrigin(0, FrontHeights[0] + this.mod_FrontGapHor, this.mod_FrontGapCarcase);
      
      //Set the attributes for top front
      FlipliftTop.mod_FrontId = this.mod_FrontId + "Top"
      FlipliftTop.mod_FrontWidth = this.mod_FrontWidth;
      FlipliftTop.mod_Originpos.push(this.mod_Originpos[0]);
      FlipliftTop.mod_Originpos.push(this.mod_Originpos[1] + FrontHeights[0]);
      FlipliftTop.mod_Originpos.push(this.mod_Originpos[2] + this.mod_FrontGapCarcase);
      FlipliftTop.mod_CarcaseSpaceDimension.push(this.mod_CarcaseSpaceDimension[0]);
      FlipliftTop.mod_CarcasePartInfo.push(CarcasePartInfoPerFrontJson);
      FlipliftTop.mod_FrontPosStart! += FrontHeights[0]! + this.mod_FrontGapHor;

      // Manage the front heights
      FlipliftTop.mod_FrontHeight = FrontHeights[1];
      FlipliftTop.mod_FlipliftFrontHeightList.push(...FrontHeights);
      FlipliftTop.mod_FlipliftFrontNumber = 1;

      // Set the handle weight
      FlipliftTop.mod_HandleWeightCalculations.push(sealedBtmFliplift.mod_HandleWeightCalculations[0]);
    }
  }

  //===================================================
  //          Add module for the adjustable shelves
  //===================================================

  if (this.mod_InteriorEquipmentLogic == "Automatic") {

    // Add the module
    let shelfadjgroup = this.addOD_M_mc_ShelfadjGroup01();

    // Set the attributes to the child 
    shelfadjgroup.mod_Width = CarcaseSpaceDimension.WidthFreeSpace;
    shelfadjgroup.mod_Depth = CarcaseSpaceDimension.DepthFreeSpace;
    shelfadjgroup.mod_Height = CarcaseSpaceDimension.HeightFreeSpace;
    shelfadjgroup.mod_ShelfadjPartParentName = "Fliplift";
    shelfadjgroup.mod_ShelfadjPartParentType = this.mod_FlipliftType;
    shelfadjgroup.mod_CarcaseSpaceDimension.push(this.mod_CarcaseSpaceDimension[0]);

    // SetOrigin of the child
    shelfadjgroup.setOrigin(CarcaseSpaceDimension.WidthFreeStartPos - this.mod_Originpos[0], CarcaseSpaceDimension.HeightFreeStartPos - this.mod_Originpos[1], CarcaseSpaceDimension.DepthFreeStartPos - this.mod_Originpos[2])
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
export function mf_Fliplift_manufacturerDataCompletion(this: dc_mf_Fliplift):void {
  internal_enterModuleManufacturerDataCompletion('mf_Fliplift', this._id);
  try {
// ###############################################################
// ####################### CUSTOM SCRIPTS ########################
// ###############################################################
 // CUSTOMSCRIPT_mf_Fliplift_MANUFACTURERDATACOMPLETION

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
