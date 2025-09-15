import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'
import { IP_part_Drawer_PartVarsWritable } from './parts/part_Drawer'
import { IP_part_Fliplift_PartVarsWritable } from './parts/part_Fliplift'
import { IP_part_Door_PartVarsWritable } from './parts/part_Door'
import { IP_part_Filler_PartVarsWritable } from './parts/part_Filler'
import { IP_part_Fixedfront_PartVarsWritable } from './parts/part_Fixedfront'
import { IP_part_ApplianceFront_PartVarsWritable } from './parts/part_ApplianceFront'
import { IP_part_DishwasherPanel_PartVarsWritable } from './parts/part_DishwasherPanel'
import { IP_part_DrawerUnit_PartVarsWritable } from './parts/part_DrawerUnit'
import { IP_part_Handle_PartVarsWritable } from './parts/part_Handle'
import { IP_part_HandleDrill_PartVarsWritable } from './parts/part_HandleDrill'
import { IP_part_DrawerShelfbtm_PartVarsWritable } from './parts/part_DrawerShelfbtm'
import { IP_part_DrawerBackwallWood_PartVarsWritable } from './parts/part_DrawerBackwallWood'
import { IP_part_DrawerBackwallSteel_PartVarsWritable } from './parts/part_DrawerBackwallSteel'
import { IP_part_DrawerBox_PartVarsWritable } from './parts/part_DrawerBox'
import { IP_part_DrawerSideLeft_PartVarsWritable } from './parts/part_DrawerSideLeft'
import { IP_part_DrawerSideRight_PartVarsWritable } from './parts/part_DrawerSideRight'
import { IP_part_DrawerBoxDrilling_PartVarsWritable } from './parts/part_DrawerBoxDrilling'
import { IP_part_DrawerBoxBom_PartVarsWritable } from './parts/part_DrawerBoxBom'
import { IP_part_DrawerSlideLeft_PartVarsWritable } from './parts/part_DrawerSlideLeft'
import { IP_part_DrawerSlideRight_PartVarsWritable } from './parts/part_DrawerSlideRight'
import { IP_part_DrawerFrontConnector_PartVarsWritable } from './parts/part_DrawerFrontConnector'
import { IP_part_DrawerShelfbtmConnector_PartVarsWritable } from './parts/part_DrawerShelfbtmConnector'
import { IP_part_DrawerShelfbtmConnectorDrilling_PartVarsWritable } from './parts/part_DrawerShelfbtmConnectorDrilling'
import { IP_part_DrawerBoxSynchronization_PartVarsWritable } from './parts/part_DrawerBoxSynchronization'
import { IP_part_HingeDoor_PartVarsWritable } from './parts/part_HingeDoor'
import { IP_part_HingeCarcase_PartVarsWritable } from './parts/part_HingeCarcase'
import { IP_part_HingeDrill_PartVarsWritable } from './parts/part_HingeDrill'
import { IP_part_HingeDrillFHF_PartVarsWritable } from './parts/part_HingeDrillFHF'
import { IP_part_Leg_PartVarsWritable } from './parts/part_Leg'
import { IP_part_LegDrill_PartVarsWritable } from './parts/part_LegDrill'
import { IP_part_PanelHor_PartVarsWritable } from './parts/part_PanelHor'
import { IP_part_PanelVert_PartVarsWritable } from './parts/part_PanelVert'
import { IP_part_PanelUnit_PartVarsWritable } from './parts/part_PanelUnit'
import { IP_part_FrontGlass_PartVarsWritable } from './parts/part_FrontGlass'
import { IP_part_Frontprofile_PartVarsWritable } from './parts/part_Frontprofile'
import { IP_part_LightSystem_PartVarsWritable } from './parts/part_LightSystem'
import { IP_part_HangerSystem_PartVarsWritable } from './parts/part_HangerSystem'
import { IP_part_HangerSystemBom_PartVarsWritable } from './parts/part_HangerSystemBom'
import { IP_part_HangerDrill_PartVarsWritable } from './parts/part_HangerDrill'
import { IP_part_FlipliftUnit_PartVarsWritable } from './parts/part_FlipliftUnit'
import { IP_part_DoorUnit_PartVarsWritable } from './parts/part_DoorUnit'
import { IP_part_ShelfadjFitting_PartVarsWritable } from './parts/part_ShelfadjFitting'
import { IP_part_ShelfadjWood_PartVarsWritable } from './parts/part_ShelfadjWood'
import { IP_part_ShelfadjGlass_PartVarsWritable } from './parts/part_ShelfadjGlass'
import { IP_part_ShelfadjDrill_PartVarsWritable } from './parts/part_ShelfadjDrill'
import { IP_part_Storageunit_PartVarsWritable } from './parts/part_Storageunit'
import { IP_part_Handlestrip_PartVarsWritable } from './parts/part_Handlestrip'
import { IP_part_HandlestripDrill_PartVarsWritable } from './parts/part_HandlestripDrill'
import { IP_part_Sidepanelleft_PartVarsWritable } from './parts/part_Sidepanelleft'
import { IP_part_Sidepanelright_PartVarsWritable } from './parts/part_Sidepanelright'
import { IP_part_Sidepanelmiddle_PartVarsWritable } from './parts/part_Sidepanelmiddle'
import { IP_part_Shelfbtm_PartVarsWritable } from './parts/part_Shelfbtm'
import { IP_part_Shelftop_PartVarsWritable } from './parts/part_Shelftop'
import { IP_part_Railhortopfront_PartVarsWritable } from './parts/part_Railhortopfront'
import { IP_part_Railhortopback_PartVarsWritable } from './parts/part_Railhortopback'
import { IP_part_Railverttopfront_PartVarsWritable } from './parts/part_Railverttopfront'
import { IP_part_Railverttopback_PartVarsWritable } from './parts/part_Railverttopback'
import { IP_part_Backwall_PartVarsWritable } from './parts/part_Backwall'
import { IP_part_Shelffixed_PartVarsWritable } from './parts/part_Shelffixed'
import { IP_part_CleatVert_PartVarsWritable } from './parts/part_CleatVert'
import { IP_part_Panelblind_PartVarsWritable } from './parts/part_Panelblind'
import { IP_part_HardwareShelfadjDrill_PartVarsWritable } from './parts/part_HardwareShelfadjDrill'
import { IP_part_RackAreaUnit_PartVarsWritable } from './parts/part_RackAreaUnit'
import { IP_part_Duststrip_PartVarsWritable } from './parts/part_Duststrip'
import { IP_part_FinishPanel_PartVarsWritable } from './parts/part_FinishPanel'
import { IP_part_FinishPanelProfile_PartVarsWritable } from './parts/part_FinishPanelProfile'
import { IP_part_UprightGroup_PartVarsWritable } from './parts/part_UprightGroup'
import { IP_part_Countertop_PartVarsWritable } from './parts/part_Countertop'
import { IP_part_CountertopGroup_PartVarsWritable } from './parts/part_CountertopGroup'
import { IP_part_Backsplash_PartVarsWritable } from './parts/part_Backsplash'
import { IP_part_BacksplashGroup_PartVarsWritable } from './parts/part_BacksplashGroup'
import { IP_part_Toekick_PartVarsWritable } from './parts/part_Toekick'
import { IP_part_ToekickGroup_PartVarsWritable } from './parts/part_ToekickGroup'
import { IP_part_Pushtoopen_PartVarsWritable } from './parts/part_Pushtoopen'
import { IP_part_PushtoopenDrill_PartVarsWritable } from './parts/part_PushtoopenDrill'
import { IP_part_PushtoopenBom_PartVarsWritable } from './parts/part_PushtoopenBom'
import { IP_part_PushtoopenMountingPlateDrill_PartVarsWritable } from './parts/part_PushtoopenMountingPlateDrill'
import { IP_part_PanelWoodFrameTop_PartVarsWritable } from './parts/part_PanelWoodFrameTop'
import { IP_part_PanelWoodFrameLeft_PartVarsWritable } from './parts/part_PanelWoodFrameLeft'
import { IP_part_PanelWoodFrameBtm_PartVarsWritable } from './parts/part_PanelWoodFrameBtm'
import { IP_part_PanelWoodFrameRight_PartVarsWritable } from './parts/part_PanelWoodFrameRight'
import { IP_part_PanelWoodFrameFilling_PartVarsWritable } from './parts/part_PanelWoodFrameFilling'
import { IP_part_DrawerPanelWoodFrame_PartVarsWritable } from './parts/part_DrawerPanelWoodFrame'
import { IP_part_DoorPanelWoodFrame_PartVarsWritable } from './parts/part_DoorPanelWoodFrame'
import { IP_part_FlipliftPanelWoodFrame_PartVarsWritable } from './parts/part_FlipliftPanelWoodFrame'
import { IP_part_FixedfrontPanelWoodFrame_PartVarsWritable } from './parts/part_FixedfrontPanelWoodFrame'
import { IP_part_DishwasherPanelWoodFrame_PartVarsWritable } from './parts/part_DishwasherPanelWoodFrame'
import { IP_part_FlipliftHardwareBom_PartVarsWritable } from './parts/part_FlipliftHardwareBom'
import { IP_part_FlipliftHardwareGraphic_PartVarsWritable } from './parts/part_FlipliftHardwareGraphic'
import { IP_part_FlipliftHardwareFrontpanelDrilling_PartVarsWritable } from './parts/part_FlipliftHardwareFrontpanelDrilling'
import { IP_part_FlipliftHardwareSidepanelDrilling_PartVarsWritable } from './parts/part_FlipliftHardwareSidepanelDrilling'
import { IP_part_FixedfrontUnit_PartVarsWritable } from './parts/part_FixedfrontUnit'
import { IP_part_Heatshelf_PartVarsWritable } from './parts/part_Heatshelf'
import { IP_part_HeatshelfFront_PartVarsWritable } from './parts/part_HeatshelfFront'
import { IP_part_SlopedCeilingShelftopAngle_PartVarsWritable } from './parts/part_SlopedCeilingShelftopAngle'
import { IP_part_SlopedCeilingShelftopHor_PartVarsWritable } from './parts/part_SlopedCeilingShelftopHor'
import { IP_part_FingergripTop_PartVarsWritable } from './parts/part_FingergripTop'
import { IP_part_FingergripMiddle_PartVarsWritable } from './parts/part_FingergripMiddle'
import { IP_part_ApplianceGraphic_PartVarsWritable } from './parts/part_ApplianceGraphic'
import { IP_part_CeilingFillerFittingPanel_PartVarsWritable } from './parts/part_CeilingFillerFittingPanel'
import { IP_part_CeilingFillerPanel_PartVarsWritable } from './parts/part_CeilingFillerPanel'
import { IP_part_PaneltopGroup_PartVarsWritable } from './parts/part_PaneltopGroup'
import { IP_part_Paneltop_PartVarsWritable } from './parts/part_Paneltop'
import { IP_part_CountertopCutout_PartVarsWritable } from './parts/part_CountertopCutout'
import { IP_part_PlinthAreaUnit_PartVarsWritable } from './parts/part_PlinthAreaUnit'
import { IP_part_FillerUnit_PartVarsWritable } from './parts/part_FillerUnit'
import { IP_part_FillerHardware_PartVarsWritable } from './parts/part_FillerHardware'
import { IP_part_FillerHardwareProcessing_PartVarsWritable } from './parts/part_FillerHardwareProcessing'
import { IP_part_DropZone_PartVarsWritable } from './parts/part_DropZone'
import { IP_part_ApplianceUnit_PartVarsWritable } from './parts/part_ApplianceUnit'
import { IP_part_Cornerunit_PartVarsWritable } from './parts/part_Cornerunit'
import { IP_part_Shelves_PartVarsWritable } from './parts/part_Shelves'
import { IP_part_ShelvesBrackets_PartVarsWritable } from './parts/part_ShelvesBrackets'
import { IP_part_FixedfrontDrill_PartVarsWritable } from './parts/part_FixedfrontDrill'
import { IP_part_FlipliftDrill_PartVarsWritable } from './parts/part_FlipliftDrill'
import { IP_part_Hinge_PartVarsWritable } from './parts/part_Hinge'
import { IP_part_MiddleSideShort_PartVarsWritable } from './parts/part_MiddleSideShort'
export interface IPartAdd_part_Drawer {
  addpart_Drawer(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Drawer_PartVarsWritable;
}
export interface IPartAdd_part_Fliplift {
  addpart_Fliplift(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Fliplift_PartVarsWritable;
}
export interface IPartAdd_part_Door {
  addpart_Door(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Door_PartVarsWritable;
}
export interface IPartAdd_part_Filler {
  addpart_Filler(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Filler_PartVarsWritable;
}
export interface IPartAdd_part_Fixedfront {
  addpart_Fixedfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Fixedfront_PartVarsWritable;
}
export interface IPartAdd_part_ApplianceFront {
  addpart_ApplianceFront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ApplianceFront_PartVarsWritable;
}
export interface IPartAdd_part_DishwasherPanel {
  addpart_DishwasherPanel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DishwasherPanel_PartVarsWritable;
}
export interface IPartAdd_part_DrawerUnit {
  addpart_DrawerUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerUnit_PartVarsWritable;
}
export interface IPartAdd_part_Handle {
  addpart_Handle(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Handle_PartVarsWritable;
}
export interface IPartAdd_part_HandleDrill {
  addpart_HandleDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HandleDrill_PartVarsWritable;
}
export interface IPartAdd_part_DrawerShelfbtm {
  addpart_DrawerShelfbtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtm_PartVarsWritable;
}
export interface IPartAdd_part_DrawerBackwallWood {
  addpart_DrawerBackwallWood(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBackwallWood_PartVarsWritable;
}
export interface IPartAdd_part_DrawerBackwallSteel {
  addpart_DrawerBackwallSteel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBackwallSteel_PartVarsWritable;
}
export interface IPartAdd_part_DrawerBox {
  addpart_DrawerBox(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBox_PartVarsWritable;
}
export interface IPartAdd_part_DrawerSideLeft {
  addpart_DrawerSideLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSideLeft_PartVarsWritable;
}
export interface IPartAdd_part_DrawerSideRight {
  addpart_DrawerSideRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSideRight_PartVarsWritable;
}
export interface IPartAdd_part_DrawerBoxDrilling {
  addpart_DrawerBoxDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxDrilling_PartVarsWritable;
}
export interface IPartAdd_part_DrawerBoxBom {
  addpart_DrawerBoxBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxBom_PartVarsWritable;
}
export interface IPartAdd_part_DrawerSlideLeft {
  addpart_DrawerSlideLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSlideLeft_PartVarsWritable;
}
export interface IPartAdd_part_DrawerSlideRight {
  addpart_DrawerSlideRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerSlideRight_PartVarsWritable;
}
export interface IPartAdd_part_DrawerFrontConnector {
  addpart_DrawerFrontConnector(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerFrontConnector_PartVarsWritable;
}
export interface IPartAdd_part_DrawerShelfbtmConnector {
  addpart_DrawerShelfbtmConnector(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtmConnector_PartVarsWritable;
}
export interface IPartAdd_part_DrawerShelfbtmConnectorDrilling {
  addpart_DrawerShelfbtmConnectorDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerShelfbtmConnectorDrilling_PartVarsWritable;
}
export interface IPartAdd_part_DrawerBoxSynchronization {
  addpart_DrawerBoxSynchronization(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerBoxSynchronization_PartVarsWritable;
}
export interface IPartAdd_part_HingeDoor {
  addpart_HingeDoor(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HingeDoor_PartVarsWritable;
}
export interface IPartAdd_part_HingeCarcase {
  addpart_HingeCarcase(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HingeCarcase_PartVarsWritable;
}
export interface IPartAdd_part_HingeDrill {
  addpart_HingeDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HingeDrill_PartVarsWritable;
}
export interface IPartAdd_part_HingeDrillFHF {
  addpart_HingeDrillFHF(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HingeDrillFHF_PartVarsWritable;
}
export interface IPartAdd_part_Leg {
  addpart_Leg(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Leg_PartVarsWritable;
}
export interface IPartAdd_part_LegDrill {
  addpart_LegDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_LegDrill_PartVarsWritable;
}
export interface IPartAdd_part_PanelHor {
  addpart_PanelHor(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelHor_PartVarsWritable;
}
export interface IPartAdd_part_PanelVert {
  addpart_PanelVert(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelVert_PartVarsWritable;
}
export interface IPartAdd_part_PanelUnit {
  addpart_PanelUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelUnit_PartVarsWritable;
}
export interface IPartAdd_part_FrontGlass {
  addpart_FrontGlass(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FrontGlass_PartVarsWritable;
}
export interface IPartAdd_part_Frontprofile {
  addpart_Frontprofile(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Frontprofile_PartVarsWritable;
}
export interface IPartAdd_part_LightSystem {
  addpart_LightSystem(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_LightSystem_PartVarsWritable;
}
export interface IPartAdd_part_HangerSystem {
  addpart_HangerSystem(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HangerSystem_PartVarsWritable;
}
export interface IPartAdd_part_HangerSystemBom {
  addpart_HangerSystemBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HangerSystemBom_PartVarsWritable;
}
export interface IPartAdd_part_HangerDrill {
  addpart_HangerDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HangerDrill_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftUnit {
  addpart_FlipliftUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftUnit_PartVarsWritable;
}
export interface IPartAdd_part_DoorUnit {
  addpart_DoorUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DoorUnit_PartVarsWritable;
}
export interface IPartAdd_part_ShelfadjFitting {
  addpart_ShelfadjFitting(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelfadjFitting_PartVarsWritable;
}
export interface IPartAdd_part_ShelfadjWood {
  addpart_ShelfadjWood(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelfadjWood_PartVarsWritable;
}
export interface IPartAdd_part_ShelfadjGlass {
  addpart_ShelfadjGlass(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelfadjGlass_PartVarsWritable;
}
export interface IPartAdd_part_ShelfadjDrill {
  addpart_ShelfadjDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelfadjDrill_PartVarsWritable;
}
export interface IPartAdd_part_Storageunit {
  addpart_Storageunit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Storageunit_PartVarsWritable;
}
export interface IPartAdd_part_Handlestrip {
  addpart_Handlestrip(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Handlestrip_PartVarsWritable;
}
export interface IPartAdd_part_HandlestripDrill {
  addpart_HandlestripDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HandlestripDrill_PartVarsWritable;
}
export interface IPartAdd_part_Sidepanelleft {
  addpart_Sidepanelleft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Sidepanelleft_PartVarsWritable;
}
export interface IPartAdd_part_Sidepanelright {
  addpart_Sidepanelright(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Sidepanelright_PartVarsWritable;
}
export interface IPartAdd_part_Sidepanelmiddle {
  addpart_Sidepanelmiddle(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Sidepanelmiddle_PartVarsWritable;
}
export interface IPartAdd_part_Shelfbtm {
  addpart_Shelfbtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelfbtm_PartVarsWritable;
}
export interface IPartAdd_part_Shelftop {
  addpart_Shelftop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelftop_PartVarsWritable;
}
export interface IPartAdd_part_Railhortopfront {
  addpart_Railhortopfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railhortopfront_PartVarsWritable;
}
export interface IPartAdd_part_Railhortopback {
  addpart_Railhortopback(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railhortopback_PartVarsWritable;
}
export interface IPartAdd_part_Railverttopfront {
  addpart_Railverttopfront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railverttopfront_PartVarsWritable;
}
export interface IPartAdd_part_Railverttopback {
  addpart_Railverttopback(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Railverttopback_PartVarsWritable;
}
export interface IPartAdd_part_Backwall {
  addpart_Backwall(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Backwall_PartVarsWritable;
}
export interface IPartAdd_part_Shelffixed {
  addpart_Shelffixed(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelffixed_PartVarsWritable;
}
export interface IPartAdd_part_CleatVert {
  addpart_CleatVert(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CleatVert_PartVarsWritable;
}
export interface IPartAdd_part_Panelblind {
  addpart_Panelblind(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Panelblind_PartVarsWritable;
}
export interface IPartAdd_part_HardwareShelfadjDrill {
  addpart_HardwareShelfadjDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HardwareShelfadjDrill_PartVarsWritable;
}
export interface IPartAdd_part_RackAreaUnit {
  addpart_RackAreaUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_RackAreaUnit_PartVarsWritable;
}
export interface IPartAdd_part_Duststrip {
  addpart_Duststrip(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Duststrip_PartVarsWritable;
}
export interface IPartAdd_part_FinishPanel {
  addpart_FinishPanel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FinishPanel_PartVarsWritable;
}
export interface IPartAdd_part_FinishPanelProfile {
  addpart_FinishPanelProfile(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FinishPanelProfile_PartVarsWritable;
}
export interface IPartAdd_part_UprightGroup {
  addpart_UprightGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_UprightGroup_PartVarsWritable;
}
export interface IPartAdd_part_Countertop {
  addpart_Countertop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Countertop_PartVarsWritable;
}
export interface IPartAdd_part_CountertopGroup {
  addpart_CountertopGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CountertopGroup_PartVarsWritable;
}
export interface IPartAdd_part_Backsplash {
  addpart_Backsplash(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Backsplash_PartVarsWritable;
}
export interface IPartAdd_part_BacksplashGroup {
  addpart_BacksplashGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_BacksplashGroup_PartVarsWritable;
}
export interface IPartAdd_part_Toekick {
  addpart_Toekick(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Toekick_PartVarsWritable;
}
export interface IPartAdd_part_ToekickGroup {
  addpart_ToekickGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ToekickGroup_PartVarsWritable;
}
export interface IPartAdd_part_Pushtoopen {
  addpart_Pushtoopen(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Pushtoopen_PartVarsWritable;
}
export interface IPartAdd_part_PushtoopenDrill {
  addpart_PushtoopenDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PushtoopenDrill_PartVarsWritable;
}
export interface IPartAdd_part_PushtoopenBom {
  addpart_PushtoopenBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PushtoopenBom_PartVarsWritable;
}
export interface IPartAdd_part_PushtoopenMountingPlateDrill {
  addpart_PushtoopenMountingPlateDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PushtoopenMountingPlateDrill_PartVarsWritable;
}
export interface IPartAdd_part_PanelWoodFrameTop {
  addpart_PanelWoodFrameTop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelWoodFrameTop_PartVarsWritable;
}
export interface IPartAdd_part_PanelWoodFrameLeft {
  addpart_PanelWoodFrameLeft(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelWoodFrameLeft_PartVarsWritable;
}
export interface IPartAdd_part_PanelWoodFrameBtm {
  addpart_PanelWoodFrameBtm(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelWoodFrameBtm_PartVarsWritable;
}
export interface IPartAdd_part_PanelWoodFrameRight {
  addpart_PanelWoodFrameRight(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelWoodFrameRight_PartVarsWritable;
}
export interface IPartAdd_part_PanelWoodFrameFilling {
  addpart_PanelWoodFrameFilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PanelWoodFrameFilling_PartVarsWritable;
}
export interface IPartAdd_part_DrawerPanelWoodFrame {
  addpart_DrawerPanelWoodFrame(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DrawerPanelWoodFrame_PartVarsWritable;
}
export interface IPartAdd_part_DoorPanelWoodFrame {
  addpart_DoorPanelWoodFrame(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DoorPanelWoodFrame_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftPanelWoodFrame {
  addpart_FlipliftPanelWoodFrame(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftPanelWoodFrame_PartVarsWritable;
}
export interface IPartAdd_part_FixedfrontPanelWoodFrame {
  addpart_FixedfrontPanelWoodFrame(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FixedfrontPanelWoodFrame_PartVarsWritable;
}
export interface IPartAdd_part_DishwasherPanelWoodFrame {
  addpart_DishwasherPanelWoodFrame(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DishwasherPanelWoodFrame_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftHardwareBom {
  addpart_FlipliftHardwareBom(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareBom_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftHardwareGraphic {
  addpart_FlipliftHardwareGraphic(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareGraphic_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftHardwareFrontpanelDrilling {
  addpart_FlipliftHardwareFrontpanelDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareFrontpanelDrilling_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftHardwareSidepanelDrilling {
  addpart_FlipliftHardwareSidepanelDrilling(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftHardwareSidepanelDrilling_PartVarsWritable;
}
export interface IPartAdd_part_FixedfrontUnit {
  addpart_FixedfrontUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FixedfrontUnit_PartVarsWritable;
}
export interface IPartAdd_part_Heatshelf {
  addpart_Heatshelf(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Heatshelf_PartVarsWritable;
}
export interface IPartAdd_part_HeatshelfFront {
  addpart_HeatshelfFront(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_HeatshelfFront_PartVarsWritable;
}
export interface IPartAdd_part_SlopedCeilingShelftopAngle {
  addpart_SlopedCeilingShelftopAngle(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_SlopedCeilingShelftopAngle_PartVarsWritable;
}
export interface IPartAdd_part_SlopedCeilingShelftopHor {
  addpart_SlopedCeilingShelftopHor(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_SlopedCeilingShelftopHor_PartVarsWritable;
}
export interface IPartAdd_part_FingergripTop {
  addpart_FingergripTop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FingergripTop_PartVarsWritable;
}
export interface IPartAdd_part_FingergripMiddle {
  addpart_FingergripMiddle(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FingergripMiddle_PartVarsWritable;
}
export interface IPartAdd_part_ApplianceGraphic {
  addpart_ApplianceGraphic(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ApplianceGraphic_PartVarsWritable;
}
export interface IPartAdd_part_CeilingFillerFittingPanel {
  addpart_CeilingFillerFittingPanel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CeilingFillerFittingPanel_PartVarsWritable;
}
export interface IPartAdd_part_CeilingFillerPanel {
  addpart_CeilingFillerPanel(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CeilingFillerPanel_PartVarsWritable;
}
export interface IPartAdd_part_PaneltopGroup {
  addpart_PaneltopGroup(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PaneltopGroup_PartVarsWritable;
}
export interface IPartAdd_part_Paneltop {
  addpart_Paneltop(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Paneltop_PartVarsWritable;
}
export interface IPartAdd_part_CountertopCutout {
  addpart_CountertopCutout(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_CountertopCutout_PartVarsWritable;
}
export interface IPartAdd_part_PlinthAreaUnit {
  addpart_PlinthAreaUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_PlinthAreaUnit_PartVarsWritable;
}
export interface IPartAdd_part_FillerUnit {
  addpart_FillerUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerUnit_PartVarsWritable;
}
export interface IPartAdd_part_FillerHardware {
  addpart_FillerHardware(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerHardware_PartVarsWritable;
}
export interface IPartAdd_part_FillerHardwareProcessing {
  addpart_FillerHardwareProcessing(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FillerHardwareProcessing_PartVarsWritable;
}
export interface IPartAdd_part_DropZone {
  addpart_DropZone(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_DropZone_PartVarsWritable;
}
export interface IPartAdd_part_ApplianceUnit {
  addpart_ApplianceUnit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ApplianceUnit_PartVarsWritable;
}
export interface IPartAdd_part_Cornerunit {
  addpart_Cornerunit(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Cornerunit_PartVarsWritable;
}
export interface IPartAdd_part_Shelves {
  addpart_Shelves(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Shelves_PartVarsWritable;
}
export interface IPartAdd_part_ShelvesBrackets {
  addpart_ShelvesBrackets(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_ShelvesBrackets_PartVarsWritable;
}
export interface IPartAdd_part_FixedfrontDrill {
  addpart_FixedfrontDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FixedfrontDrill_PartVarsWritable;
}
export interface IPartAdd_part_FlipliftDrill {
  addpart_FlipliftDrill(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_FlipliftDrill_PartVarsWritable;
}
export interface IPartAdd_part_Hinge {
  addpart_Hinge(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_Hinge_PartVarsWritable;
}
export interface IPartAdd_part_MiddleSideShort {
  addpart_MiddleSideShort(x:number, y:number, z:number, dimx:number, dimy:number, dimz:number): IP_part_MiddleSideShort_PartVarsWritable;
}
