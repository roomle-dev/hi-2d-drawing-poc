import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from '../logging'
import { IGlobalVars } from '../global-vars';
import { GlobalFunc } from '../global-func';
import { dc_mc_FrontPanel01, adc_mc_FrontPanel01 } from '../modules/mc_FrontPanel01'
import { dc_mc_Drawer01, adc_mc_Drawer01 } from '../modules/mc_Drawer01'
import { dc_mc_Handle01, adc_mc_Handle01 } from '../modules/mc_Handle01'
import { dc_mc_DrawerBox01, adc_mc_DrawerBox01 } from '../modules/mc_DrawerBox01'
import { dc_mc_Hinge01, adc_mc_Hinge01 } from '../modules/mc_Hinge01'
import { dc_mc_Leg01, adc_mc_Leg01 } from '../modules/mc_Leg01'
import { dc_mr_Paneltop, adc_mr_Paneltop } from '../modules/mr_Paneltop'
import { dc_mc_Panel01, adc_mc_Panel01 } from '../modules/mc_Panel01'
import { dc_mf_Drawer, adc_mf_Drawer } from '../modules/mf_Drawer'
import { dc_mc_PlinthArea01, adc_mc_PlinthArea01 } from '../modules/mc_PlinthArea01'
import { dc_mr_StorageunitSingle, adc_mr_StorageunitSingle } from '../modules/mr_StorageunitSingle'
import { dc_mc_FrontPanelGlass01, adc_mc_FrontPanelGlass01 } from '../modules/mc_FrontPanelGlass01'
import { dc_mc_LightSystem01, adc_mc_LightSystem01 } from '../modules/mc_LightSystem01'
import { dc_mc_HangerSystem01, adc_mc_HangerSystem01 } from '../modules/mc_HangerSystem01'
import { dc_mf_Fliplift, adc_mf_Fliplift } from '../modules/mf_Fliplift'
import { dc_mc_Fliplift01, adc_mc_Fliplift01 } from '../modules/mc_Fliplift01'
import { dc_mf_Door, adc_mf_Door } from '../modules/mf_Door'
import { dc_mc_Door01, adc_mc_Door01 } from '../modules/mc_Door01'
import { dc_mr_CornerunitStraight, adc_mr_CornerunitStraight } from '../modules/mr_CornerunitStraight'
import { dc_mc_ShelfadjGroup01, adc_mc_ShelfadjGroup01 } from '../modules/mc_ShelfadjGroup01'
import { dc_mc_ShelfadjWood01, adc_mc_ShelfadjWood01 } from '../modules/mc_ShelfadjWood01'
import { dc_mc_ShelfadjGlass01, adc_mc_ShelfadjGlass01 } from '../modules/mc_ShelfadjGlass01'
import { dc_mc_ShelfadjDrill01, adc_mc_ShelfadjDrill01 } from '../modules/mc_ShelfadjDrill01'
import { dc_mc_ThermoformedPanel01, adc_mc_ThermoformedPanel01 } from '../modules/mc_ThermoformedPanel01'
import { dc_mc_MetalFrame01, adc_mc_MetalFrame01 } from '../modules/mc_MetalFrame01'
import { dc_mc_WoodFrame01, adc_mc_WoodFrame01 } from '../modules/mc_WoodFrame01'
import { dc_mc_Storageunit01, adc_mc_Storageunit01 } from '../modules/mc_Storageunit01'
import { dc_mc_Handlestrip01, adc_mc_Handlestrip01 } from '../modules/mc_Handlestrip01'
import { dc_mc_StorageunitSidepanel01, adc_mc_StorageunitSidepanel01 } from '../modules/mc_StorageunitSidepanel01'
import { dc_mc_StorageunitShelfbtm01, adc_mc_StorageunitShelfbtm01 } from '../modules/mc_StorageunitShelfbtm01'
import { dc_mc_StorageunitShelftop01, adc_mc_StorageunitShelftop01 } from '../modules/mc_StorageunitShelftop01'
import { dc_mc_StorageunitBackwall01, adc_mc_StorageunitBackwall01 } from '../modules/mc_StorageunitBackwall01'
import { dc_mc_StorageunitShelffixed01, adc_mc_StorageunitShelffixed01 } from '../modules/mc_StorageunitShelffixed01'
import { dc_mc_CleatVert01, adc_mc_CleatVert01 } from '../modules/mc_CleatVert01'
import { dc_mc_Panelblind01, adc_mc_Panelblind01 } from '../modules/mc_Panelblind01'
import { dc_mc_CornerunitStraight01, adc_mc_CornerunitStraight01 } from '../modules/mc_CornerunitStraight01'
import { dc_mc_ShelfadjFitting01, adc_mc_ShelfadjFitting01 } from '../modules/mc_ShelfadjFitting01'
import { dc_mf_Oven, adc_mf_Oven } from '../modules/mf_Oven'
import { dc_mc_Oven01, adc_mc_Oven01 } from '../modules/mc_Oven01'
import { dc_mf_Fridge, adc_mf_Fridge } from '../modules/mf_Fridge'
import { dc_mf_RackArea, adc_mf_RackArea } from '../modules/mf_RackArea'
import { dc_mc_RackArea01, adc_mc_RackArea01 } from '../modules/mc_RackArea01'
import { dc_mc_ShelffixedGroup01, adc_mc_ShelffixedGroup01 } from '../modules/mc_ShelffixedGroup01'
import { dc_mc_DoorGroup01, adc_mc_DoorGroup01 } from '../modules/mc_DoorGroup01'
import { dc_mc_VertDivider01, adc_mc_VertDivider01 } from '../modules/mc_VertDivider01'
import { dc_mc_Duststrip01, adc_mc_Duststrip01 } from '../modules/mc_Duststrip01'
import { dc_mr_Upright, adc_mr_Upright } from '../modules/mr_Upright'
import { dc_mc_Upright01, adc_mc_Upright01 } from '../modules/mc_Upright01'
import { dc_mr_Countertop, adc_mr_Countertop } from '../modules/mr_Countertop'
import { dc_mc_Countertop01, adc_mc_Countertop01 } from '../modules/mc_Countertop01'
import { dc_mr_Backsplash, adc_mr_Backsplash } from '../modules/mr_Backsplash'
import { dc_mc_Backsplash, adc_mc_Backsplash } from '../modules/mc_Backsplash'
import { dc_mr_Toekick, adc_mr_Toekick } from '../modules/mr_Toekick'
import { dc_mc_Toekick, adc_mc_Toekick } from '../modules/mc_Toekick'
import { dc_mc_Pushtoopen01, adc_mc_Pushtoopen01 } from '../modules/mc_Pushtoopen01'
import { dc_mc_PanelWoodFrame01, adc_mc_PanelWoodFrame01 } from '../modules/mc_PanelWoodFrame01'
import { dc_mc_HingeGroup01, adc_mc_HingeGroup01 } from '../modules/mc_HingeGroup01'
import { dc_mc_FlipliftHardware01, adc_mc_FlipliftHardware01 } from '../modules/mc_FlipliftHardware01'
import { dc_mr_Fingergrip, adc_mr_Fingergrip } from '../modules/mr_Fingergrip'
import { dc_mf_Fixedfront, adc_mf_Fixedfront } from '../modules/mf_Fixedfront'
import { dc_mc_Fixedfront01, adc_mc_Fixedfront01 } from '../modules/mc_Fixedfront01'
import { dc_mc_StorageunitShelftop02, adc_mc_StorageunitShelftop02 } from '../modules/mc_StorageunitShelftop02'
import { dc_mc_StorageunitShelftop03, adc_mc_StorageunitShelftop03 } from '../modules/mc_StorageunitShelftop03'
import { dc_mc_StorageunitShelftop04, adc_mc_StorageunitShelftop04 } from '../modules/mc_StorageunitShelftop04'
import { dc_mc_Fingergrip01, adc_mc_Fingergrip01 } from '../modules/mc_Fingergrip01'
import { dc_mc_Fridge01, adc_mc_Fridge01 } from '../modules/mc_Fridge01'
import { dc_mc_ApplianceGraphic, adc_mc_ApplianceGraphic } from '../modules/mc_ApplianceGraphic'
import { dc_mr_Hood, adc_mr_Hood } from '../modules/mr_Hood'
import { dc_mc_Paneltop01, adc_mc_Paneltop01 } from '../modules/mc_Paneltop01'
import { dc_mf_Hob, adc_mf_Hob } from '../modules/mf_Hob'
import { dc_mc_Hob01, adc_mc_Hob01 } from '../modules/mc_Hob01'
import { dc_mc_Sink01, adc_mc_Sink01 } from '../modules/mc_Sink01'
import { dc_mf_Sink, adc_mf_Sink } from '../modules/mf_Sink'
import { dc_mr_Filler01, adc_mr_Filler01 } from '../modules/mr_Filler01'
import { dc_mf_FillerFront, adc_mf_FillerFront } from '../modules/mf_FillerFront'
import { dc_mc_FillerFront01, adc_mc_FillerFront01 } from '../modules/mc_FillerFront01'
import { dc_mr_Appliance, adc_mr_Appliance } from '../modules/mr_Appliance'
import { dc_mc_Dishwasher, adc_mc_Dishwasher } from '../modules/mc_Dishwasher'
import { dc_mf_Dishwasher, adc_mf_Dishwasher } from '../modules/mf_Dishwasher'
import { dc_mr_CornerFiller, adc_mr_CornerFiller } from '../modules/mr_CornerFiller'
import { dc_mc_Cornerunit01, adc_mc_Cornerunit01 } from '../modules/mc_Cornerunit01'
import { dc_mr_IslandBackwall, adc_mr_IslandBackwall } from '../modules/mr_IslandBackwall'
import { dc_mr_Shelves, adc_mr_Shelves } from '../modules/mr_Shelves'
import { dc_mc_Shelves01, adc_mc_Shelves01 } from '../modules/mc_Shelves01'
import { dc_mc_Bracket01, adc_mc_Bracket01 } from '../modules/mc_Bracket01'
import { dc_mf_CornerFillerFront, adc_mf_CornerFillerFront } from '../modules/mf_CornerFillerFront'
import { dc_mc_CornerFillerFront01, adc_mc_CornerFillerFront01 } from '../modules/mc_CornerFillerFront01'
import { ITableParents_mc_Handle01_mc_Handlestrip01 } from '../var-interfaces';

export interface cti_tab_HandleConstruction {
  readonly in_FrontType? : string;
  readonly in_PosHorizontal? : string;
  readonly in_PosVertical? : string;
  readonly in_PosType? : string;
  readonly in_HandlePosHorizontal? : string;
  readonly in_HandlePosVertical? : string;
}

export interface ctm_tab_HandleConstruction {
}

export interface cto_tab_HandleConstruction extends ctm_tab_HandleConstruction {
  readonly _id : number;
  readonly Rotation : number;
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number;
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number;
}

export interface ICT_tab_HandleConstruction
extends cti_tab_HandleConstruction, cto_tab_HandleConstruction {}

export class ct2_tab_HandleConstruction {

public findExactly(
     in_FrontType: string|undefined,
     in_PosHorizontal: string|undefined,
     in_PosVertical: string|undefined,
     in_PosType: string|undefined,
     in_HandlePosHorizontal: string|undefined,
     in_HandlePosVertical: string|undefined,
): cto_tab_HandleConstruction | undefined {
  const res = ct_tab_HandleConstruction.find((p) => 
p.in_FrontType === in_FrontType
 && p.in_PosHorizontal === in_PosHorizontal
 && p.in_PosVertical === in_PosVertical
 && p.in_PosType === in_PosType
 && p.in_HandlePosHorizontal === in_HandlePosHorizontal
 && p.in_HandlePosVertical === in_HandlePosVertical
);
return res;
}

public find(
predicate: (value: cti_tab_HandleConstruction) => boolean
): cto_tab_HandleConstruction | undefined {
  for (let index = 0; index < ct_tab_HandleConstruction.length; index++){
    const element = ct_tab_HandleConstruction[index];
    if(predicate(element)) return element;
  }
  return undefined;
}
}

export var ct_tab_HandleConstruction :ICT_tab_HandleConstruction[] = [
{
 _id: 1,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 2,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 3,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 4,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 5,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 6,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 7,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 8,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 9,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 10,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 11,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 12,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 13,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 14,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 15,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 16,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 17,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 18,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 19,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 20,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 21,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 22,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)-((HandleHeight-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 23,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 24,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)-((HandleHeight-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 25,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 26,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 27,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 28,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 29,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 30,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 31,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 32,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 33,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 34,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 35,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 36,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 37,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 38,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 39,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 40,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 41,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 42,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 43,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 44,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 45,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 46,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 47,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 48,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 49,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 50,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 51,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 52,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 53,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 54,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 55,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 56,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 57,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 58,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 59,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 60,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 61,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 62,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 63,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 64,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 65,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 66,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 67,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 68,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 69,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 70,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 71,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 72,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 73,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 74,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 75,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 76,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 77,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 78,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 79,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 80,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 81,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 82,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 83,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 84,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 85,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 86,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 87,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 88,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 89,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 90,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 91,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 92,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 93,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 94,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 95,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 96,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSide",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 97,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 98,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 99,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 100,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 101,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 102,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 103,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 104,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 105,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 106,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 107,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 108,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 109,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 110,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 111,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 112,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 113,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 114,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 115,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 116,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 117,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 118,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 119,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 120,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 121,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 122,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 123,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 124,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 125,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 126,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 127,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 128,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 129,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 130,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 131,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 132,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 133,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 134,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 135,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 136,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 137,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 138,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 139,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 140,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 141,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 142,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 143,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 144,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 145,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 146,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 147,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 148,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 149,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 150,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 151,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 152,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 153,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 154,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 155,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 156,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 157,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 158,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 159,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 160,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 161,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 162,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 163,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 164,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 165,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 166,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+(HandleHeight/2)+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)-((HandleHeight-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 167,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 168,
 in_FrontType: "Door",
 in_PosHorizontal: "Left",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleXDistance+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)-((HandleHeight-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 169,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 170,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 171,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 172,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 173,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 174,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 175,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 176,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 177,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 178,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 179,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 180,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 181,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 182,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 183,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 184,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 185,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 186,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 187,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 188,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 189,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 190,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 191,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 192,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 193,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 194,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 195,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 196,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 197,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 198,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 199,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 200,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 201,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 202,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 203,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 204,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 205,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 206,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 207,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 208,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 209,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 210,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 211,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 212,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 213,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 214,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 215,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 216,
 in_FrontType: "Door",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 217,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 218,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 219,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 220,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 221,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 222,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 223,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 224,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Up",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 225,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 226,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 227,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 228,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 229,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 230,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 231,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 232,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Center",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 233,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 234,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 235,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 236,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleHorSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 237,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 238,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-(HandleHeight/2)-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 239,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 240,
 in_FrontType: "Door",
 in_PosHorizontal: "Right",
 in_PosVertical: "Down",
 in_PosType: "HandleVertSideInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 270,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width-HandleXDistance-m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 241,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 242,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 243,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 244,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 245,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 246,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 247,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 248,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 249,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 250,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 251,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 252,
 in_FrontType: "Drawer",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 253,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 254,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 255,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 256,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 257,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 258,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 259,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 260,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 261,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 262,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 263,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 264,
 in_FrontType: "Fliplift",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 265,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 266,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 267,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 268,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 269,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 270,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 271,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 272,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 273,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 274,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 275,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 276,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Center",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleLine+m.mod_HandleOffsetY;
  }

}
,{
 _id: 277,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 278,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 279,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 280,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 281,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 282,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 283,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 284,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleLength/2)-((HandleLength-DrillDistance)/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 285,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 286,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 287,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+(HandleHeight/2)+m.mod_HandleOffsetY;
  }

}
,{
 _id: 288,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Down",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return HandleYDistance+m.mod_HandleOffsetY;
  }

}
,{
 _id: 289,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 290,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 291,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 292,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 0,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 293,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 294,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 295,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 296,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleVertMiddle",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 90,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height-HandleYDistance-(HandleLength/2)+((HandleLength-DrillDistance)/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 297,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 298,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Border",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
,{
 _id: 299,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Border",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-(HandleHeight/2)-m.mod_HandleOffsetY;
  }

}
,{
 _id: 300,
 in_FrontType: "Dishwasher",
 in_PosHorizontal: "Center",
 in_PosVertical: "Up",
 in_PosType: "HandleHorMiddleInverse",
 in_HandlePosHorizontal: "Center",
 in_HandlePosVertical: "Center",
 Rotation: 180,
  PosX1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleXDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Width/2+m.mod_HandleOffsetX;
  }
,
  PosY1(m: ITableParents_mc_Handle01_mc_Handlestrip01, HandleYDistance:number, HandleLength:number, HandleHeight:number, DrillDistance:number, HandleLine:number):number {
    return m.mod_Height - HandleYDistance-m.mod_HandleOffsetY;
  }

}
];
