import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'
//#region Imports
import { IGlobalVarsParent } from './global-vars-parent'
import { MathHelper } from './base'
//#endregion Imports

class ExceptionVariants {
  mod_TypeElement?: string;
  public constructor(init?:Partial<ExceptionVariants>) {
    Object.assign(this, init);
}
  clone():ExceptionVariants {
    return new ExceptionVariants({ mod_TypeElement: this.mod_TypeElement });  }
  isEmpty():boolean {
    return this.mod_TypeElement === undefined;
  }
  applyTo(ev:ExceptionVariants):boolean {
    let isApplied:boolean = true;
    if (this.mod_TypeElement === undefined && ev.mod_TypeElement !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_TypeElement === undefined) {
      ev.mod_TypeElement = this.mod_TypeElement;
    }
    return isApplied;
  }
  isMatch(ev:ExceptionVariants):boolean {
    return this.mod_TypeElement?.toUpperCase() === ev.mod_TypeElement?.toUpperCase();
  }
  toString(): string {
      let res : string = "";
    res += "mod_TypeElement: " + (this.mod_TypeElement === undefined ? "(undefined)" : this.mod_TypeElement);
    return res;
  }
}
class ExceptionVariantsbasic_ShelfadjThk extends ExceptionVariants {
  mod_Width?: number;
  mod_Width$max?: number;
  public constructor(init?:Partial<ExceptionVariantsbasic_ShelfadjThk>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_ShelfadjThk {
    return new ExceptionVariantsbasic_ShelfadjThk(Object.assign(super.clone(), { mod_Width: this.mod_Width, mod_Width$max: this.mod_Width$max }));  }
  override isEmpty():boolean {
    return this.mod_Width === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_ShelfadjThk):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_Width === undefined && ev.mod_Width !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_Width === undefined) {
      ev.mod_Width = this.mod_Width;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_ShelfadjThk):boolean {
    return super.isMatch(ev) && isInRange(ev.mod_Width, this.mod_Width, this.mod_Width$max);
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_Width: " + (this.mod_Width === undefined ? "(undefined)" : this.mod_Width);
    return res;
  }
}
class ExceptionVariantsbasic_HardwareColor extends ExceptionVariants {
  mod_CarcaseColor?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_HardwareColor>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_HardwareColor {
    return new ExceptionVariantsbasic_HardwareColor(Object.assign(super.clone(), { mod_CarcaseColor: this.mod_CarcaseColor }));  }
  override isEmpty():boolean {
    return this.mod_CarcaseColor === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_HardwareColor):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_CarcaseColor === undefined && ev.mod_CarcaseColor !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_CarcaseColor === undefined) {
      ev.mod_CarcaseColor = this.mod_CarcaseColor;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_HardwareColor):boolean {
    return super.isMatch(ev) && this.mod_CarcaseColor?.toUpperCase() === ev.mod_CarcaseColor?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_CarcaseColor: " + (this.mod_CarcaseColor === undefined ? "(undefined)" : this.mod_CarcaseColor);
    return res;
  }
}
class ExceptionVariantsbasic_PanelWoodFrameType extends ExceptionVariants {
  mod_FrontProgram?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_PanelWoodFrameType>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_PanelWoodFrameType {
    return new ExceptionVariantsbasic_PanelWoodFrameType(Object.assign(super.clone(), { mod_FrontProgram: this.mod_FrontProgram }));  }
  override isEmpty():boolean {
    return this.mod_FrontProgram === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_PanelWoodFrameType):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_FrontProgram === undefined && ev.mod_FrontProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_FrontProgram === undefined) {
      ev.mod_FrontProgram = this.mod_FrontProgram;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_PanelWoodFrameType):boolean {
    return super.isMatch(ev) && this.mod_FrontProgram?.toUpperCase() === ev.mod_FrontProgram?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_FrontProgram: " + (this.mod_FrontProgram === undefined ? "(undefined)" : this.mod_FrontProgram);
    return res;
  }
}
class ExceptionVariantsbasic_PanelWoodFrameFillingType extends ExceptionVariants {
  mod_FrontProgram?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_PanelWoodFrameFillingType>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_PanelWoodFrameFillingType {
    return new ExceptionVariantsbasic_PanelWoodFrameFillingType(Object.assign(super.clone(), { mod_FrontProgram: this.mod_FrontProgram }));  }
  override isEmpty():boolean {
    return this.mod_FrontProgram === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_PanelWoodFrameFillingType):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_FrontProgram === undefined && ev.mod_FrontProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_FrontProgram === undefined) {
      ev.mod_FrontProgram = this.mod_FrontProgram;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_PanelWoodFrameFillingType):boolean {
    return super.isMatch(ev) && this.mod_FrontProgram?.toUpperCase() === ev.mod_FrontProgram?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_FrontProgram: " + (this.mod_FrontProgram === undefined ? "(undefined)" : this.mod_FrontProgram);
    return res;
  }
}
class ExceptionVariantsbasic_FramePartsWidthHor extends ExceptionVariants {
  mod_FrontProgram?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_FramePartsWidthHor>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_FramePartsWidthHor {
    return new ExceptionVariantsbasic_FramePartsWidthHor(Object.assign(super.clone(), { mod_FrontProgram: this.mod_FrontProgram }));  }
  override isEmpty():boolean {
    return this.mod_FrontProgram === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_FramePartsWidthHor):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_FrontProgram === undefined && ev.mod_FrontProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_FrontProgram === undefined) {
      ev.mod_FrontProgram = this.mod_FrontProgram;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_FramePartsWidthHor):boolean {
    return super.isMatch(ev) && this.mod_FrontProgram?.toUpperCase() === ev.mod_FrontProgram?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_FrontProgram: " + (this.mod_FrontProgram === undefined ? "(undefined)" : this.mod_FrontProgram);
    return res;
  }
}
class ExceptionVariantsbasic_FramePartsWidthVert extends ExceptionVariants {
  mod_FrontProgram?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_FramePartsWidthVert>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_FramePartsWidthVert {
    return new ExceptionVariantsbasic_FramePartsWidthVert(Object.assign(super.clone(), { mod_FrontProgram: this.mod_FrontProgram }));  }
  override isEmpty():boolean {
    return this.mod_FrontProgram === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_FramePartsWidthVert):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_FrontProgram === undefined && ev.mod_FrontProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_FrontProgram === undefined) {
      ev.mod_FrontProgram = this.mod_FrontProgram;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_FramePartsWidthVert):boolean {
    return super.isMatch(ev) && this.mod_FrontProgram?.toUpperCase() === ev.mod_FrontProgram?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_FrontProgram: " + (this.mod_FrontProgram === undefined ? "(undefined)" : this.mod_FrontProgram);
    return res;
  }
}
class ExceptionVariantsbasic_FrontDesign extends ExceptionVariants {
  mod_FrontProgram?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_FrontDesign>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_FrontDesign {
    return new ExceptionVariantsbasic_FrontDesign(Object.assign(super.clone(), { mod_FrontProgram: this.mod_FrontProgram }));  }
  override isEmpty():boolean {
    return this.mod_FrontProgram === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_FrontDesign):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_FrontProgram === undefined && ev.mod_FrontProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_FrontProgram === undefined) {
      ev.mod_FrontProgram = this.mod_FrontProgram;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_FrontDesign):boolean {
    return super.isMatch(ev) && this.mod_FrontProgram?.toUpperCase() === ev.mod_FrontProgram?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_FrontProgram: " + (this.mod_FrontProgram === undefined ? "(undefined)" : this.mod_FrontProgram);
    return res;
  }
}
class ExceptionVariantsbasic_CountertopThk extends ExceptionVariants {
  mod_CountertopProgram?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_CountertopThk>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_CountertopThk {
    return new ExceptionVariantsbasic_CountertopThk(Object.assign(super.clone(), { mod_CountertopProgram: this.mod_CountertopProgram }));  }
  override isEmpty():boolean {
    return this.mod_CountertopProgram === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_CountertopThk):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_CountertopProgram === undefined && ev.mod_CountertopProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_CountertopProgram === undefined) {
      ev.mod_CountertopProgram = this.mod_CountertopProgram;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_CountertopThk):boolean {
    return super.isMatch(ev) && this.mod_CountertopProgram?.toUpperCase() === ev.mod_CountertopProgram?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_CountertopProgram: " + (this.mod_CountertopProgram === undefined ? "(undefined)" : this.mod_CountertopProgram);
    return res;
  }
}
class ExceptionVariantsbasic_PlinthAreaPosLeftMatrix extends ExceptionVariants {
  mod_PlinthAreaVisLeft?: boolean;
  public constructor(init?:Partial<ExceptionVariantsbasic_PlinthAreaPosLeftMatrix>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_PlinthAreaPosLeftMatrix {
    return new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix(Object.assign(super.clone(), { mod_PlinthAreaVisLeft: this.mod_PlinthAreaVisLeft }));  }
  override isEmpty():boolean {
    return this.mod_PlinthAreaVisLeft === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_PlinthAreaPosLeftMatrix):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_PlinthAreaVisLeft === undefined && ev.mod_PlinthAreaVisLeft !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_PlinthAreaVisLeft === undefined) {
      ev.mod_PlinthAreaVisLeft = this.mod_PlinthAreaVisLeft;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_PlinthAreaPosLeftMatrix):boolean {
    return super.isMatch(ev) && this.mod_PlinthAreaVisLeft === ev.mod_PlinthAreaVisLeft;
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_PlinthAreaVisLeft: " + (this.mod_PlinthAreaVisLeft === undefined ? "(undefined)" : this.mod_PlinthAreaVisLeft);
    return res;
  }
}
class ExceptionVariantsbasic_PlinthAreaPosRightMatrix extends ExceptionVariants {
  mod_PlinthAreaVisRight?: boolean;
  public constructor(init?:Partial<ExceptionVariantsbasic_PlinthAreaPosRightMatrix>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_PlinthAreaPosRightMatrix {
    return new ExceptionVariantsbasic_PlinthAreaPosRightMatrix(Object.assign(super.clone(), { mod_PlinthAreaVisRight: this.mod_PlinthAreaVisRight }));  }
  override isEmpty():boolean {
    return this.mod_PlinthAreaVisRight === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_PlinthAreaPosRightMatrix):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_PlinthAreaVisRight === undefined && ev.mod_PlinthAreaVisRight !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_PlinthAreaVisRight === undefined) {
      ev.mod_PlinthAreaVisRight = this.mod_PlinthAreaVisRight;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_PlinthAreaPosRightMatrix):boolean {
    return super.isMatch(ev) && this.mod_PlinthAreaVisRight === ev.mod_PlinthAreaVisRight;
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_PlinthAreaVisRight: " + (this.mod_PlinthAreaVisRight === undefined ? "(undefined)" : this.mod_PlinthAreaVisRight);
    return res;
  }
}
class ExceptionVariantsbasic_HandleColor extends ExceptionVariants {
  mod_HandleDesign?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_HandleColor>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_HandleColor {
    return new ExceptionVariantsbasic_HandleColor(Object.assign(super.clone(), { mod_HandleDesign: this.mod_HandleDesign }));  }
  override isEmpty():boolean {
    return this.mod_HandleDesign === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_HandleColor):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_HandleDesign === undefined && ev.mod_HandleDesign !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_HandleDesign === undefined) {
      ev.mod_HandleDesign = this.mod_HandleDesign;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_HandleColor):boolean {
    return super.isMatch(ev) && this.mod_HandleDesign?.toUpperCase() === ev.mod_HandleDesign?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_HandleDesign: " + (this.mod_HandleDesign === undefined ? "(undefined)" : this.mod_HandleDesign);
    return res;
  }
}
class ExceptionVariantsbasic_HandleLength extends ExceptionVariants {
  mod_HandleDesign?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_HandleLength>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_HandleLength {
    return new ExceptionVariantsbasic_HandleLength(Object.assign(super.clone(), { mod_HandleDesign: this.mod_HandleDesign }));  }
  override isEmpty():boolean {
    return this.mod_HandleDesign === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_HandleLength):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_HandleDesign === undefined && ev.mod_HandleDesign !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_HandleDesign === undefined) {
      ev.mod_HandleDesign = this.mod_HandleDesign;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_HandleLength):boolean {
    return super.isMatch(ev) && this.mod_HandleDesign?.toUpperCase() === ev.mod_HandleDesign?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_HandleDesign: " + (this.mod_HandleDesign === undefined ? "(undefined)" : this.mod_HandleDesign);
    return res;
  }
}
class ExceptionVariantsbasic_HandlePosType extends ExceptionVariants {
  mod_FrontProgram?: string;
  mod_HandleDesign?: string;
  public constructor(init?:Partial<ExceptionVariantsbasic_HandlePosType>) {
    super(init);
    // Object.Assign is needed because the SWC compiler defines the member after calling super (constructor)
    Object.assign(this, init);
}
  override clone():ExceptionVariantsbasic_HandlePosType {
    return new ExceptionVariantsbasic_HandlePosType(Object.assign(super.clone(), { mod_FrontProgram: this.mod_FrontProgram, mod_HandleDesign: this.mod_HandleDesign }));  }
  override isEmpty():boolean {
    return this.mod_FrontProgram === undefined && this.mod_HandleDesign === undefined && super.isEmpty();
  }
  override applyTo(ev:ExceptionVariantsbasic_HandlePosType):boolean {
    let isApplied:boolean = super.applyTo(ev);
    if (this.mod_FrontProgram === undefined && ev.mod_FrontProgram !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_FrontProgram === undefined) {
      ev.mod_FrontProgram = this.mod_FrontProgram;
    }
    if (this.mod_HandleDesign === undefined && ev.mod_HandleDesign !== undefined) {
      isApplied = false;  // if the property is not present in the root, we ignore all lines which has values here!
    }
    if (ev.mod_HandleDesign === undefined) {
      ev.mod_HandleDesign = this.mod_HandleDesign;
    }
    return isApplied;
  }
  override isMatch(ev:ExceptionVariantsbasic_HandlePosType):boolean {
    return super.isMatch(ev) && this.mod_FrontProgram?.toUpperCase() === ev.mod_FrontProgram?.toUpperCase() && this.mod_HandleDesign?.toUpperCase() === ev.mod_HandleDesign?.toUpperCase();
  }
  override toString(): string {
    let res = super.toString();
    if (res) { res += " / "; }
    res += "mod_FrontProgram: " + (this.mod_FrontProgram === undefined ? "(undefined)" : this.mod_FrontProgram);
    res += " / mod_HandleDesign: " + (this.mod_HandleDesign === undefined ? "(undefined)" : this.mod_HandleDesign);
    return res;
  }
}
interface GlobalVarException<T> {
  id:string;
  condition:ExceptionVariants;
  rootValueScript(root: IGlobalVarsParent):T;
}
function isInRange(a?:number, min?:number, max?:number):boolean {
  if (MathHelper.numberEq(a, min) || MathHelper.numberEq(a, max)) { return true; }
  if (a !== undefined && min !== undefined && max !== undefined
    && a <= max && a >= min) { return true; }
  return false;
}
function findGlobalVarException<T1, T2 extends ExceptionVariants>(ev: T2, exceptions:GlobalVarException<T1>[]):GlobalVarException<T1>|undefined {
  var localArr:GlobalVarException<T1>[] = [];
  // * if the ev-property (root) is "undefined", set the entries in the *table* for this property as "undefined", so it matches always
  // * if the table-property is "undefined", then set the table-property to the *value* of the ev-property (root), so it matches always
  exceptions.forEach(p => {
    var p2:GlobalVarException<T1> = {
      id: p.id,
      condition: p.condition.clone(),
      rootValueScript: p.rootValueScript
    };
    if (!p2.condition.isEmpty() && ev.applyTo(p2.condition)) {
      localArr.push(p2);
    }
  })
  var entry = localArr.find(p => p.condition.isMatch(ev));
  return entry;
}

// ###### BEGIN: Exception tables #######
var gve_basic_BackwallPos: GlobalVarException<number>[] = [
  {
    id: "283",
    condition: new ExceptionVariants({ mod_TypeElement: "SlopedCeilingBaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):number { return 19.5;}  },
];
var gve_basic_BackwallThk: GlobalVarException<number>[] = [
  {
    id: "282",
    condition: new ExceptionVariants({ mod_TypeElement: "SlopedCeilingBaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):number { return 19;}  },
];
var gve_basic_CarcaseBackwallConstruction: GlobalVarException<string>[] = [
  {
    id: "146",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "Grooved_LR";}  },
  {
    id: "147",
    condition: new ExceptionVariants({ mod_TypeElement: "WallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "Grooved_LBRT";}  },
  {
    id: "148",
    condition: new ExceptionVariants({ mod_TypeElement: "TallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "Grooved_LBRT";}  },
  {
    id: "149",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnitSink", }),
    rootValueScript(root: IGlobalVarsParent):string { return "Grooved_LBRF";}  },
];
var gve_basic_CarcaseShelftopConstruction: GlobalVarException<string>[] = [
  {
    id: "284",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "RailTopFrontBackHorizontal";}  },
  {
    id: "285",
    condition: new ExceptionVariants({ mod_TypeElement: "TallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "ShelfTop";}  },
  {
    id: "286",
    condition: new ExceptionVariants({ mod_TypeElement: "WallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "ShelfTop";}  },
  {
    id: "287",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnitSink", }),
    rootValueScript(root: IGlobalVarsParent):string { return "RailTopFrontBackVertical";}  },
  {
    id: "288",
    condition: new ExceptionVariants({ mod_TypeElement: "CornerUnitStraight", }),
    rootValueScript(root: IGlobalVarsParent):string { return "RailTopFrontBackHorizontal";}  },
  {
    id: "289",
    condition: new ExceptionVariants({ mod_TypeElement: "SlopedCeilingBaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "SlopedCeilingShelfTop";}  },
];
var gve_basic_CountertopThk: GlobalVarException<number>[] = [
  {
    id: "290",
    condition: new ExceptionVariantsbasic_CountertopThk({ mod_TypeElement: "BaseUnit", mod_CountertopProgram: undefined, }),
    rootValueScript(root: IGlobalVarsParent):number { return 19;}  },
  {
    id: "291",
    condition: new ExceptionVariantsbasic_CountertopThk({ mod_TypeElement: "BaseUnit", mod_CountertopProgram: "Style", }),
    rootValueScript(root: IGlobalVarsParent):number { return 25;}  },
  {
    id: "292",
    condition: new ExceptionVariantsbasic_CountertopThk({ mod_TypeElement: "BaseUnit", mod_CountertopProgram: "Cube", }),
    rootValueScript(root: IGlobalVarsParent):number { return 40;}  },
];
var gve_basic_FrontGapHorTop: GlobalVarException<number>[] = [
  {
    id: "43",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):number { return 3;}  },
];
var gve_basic_HandleColor: GlobalVarException<string>[] = [
  {
    id: "332",
    condition: new ExceptionVariantsbasic_HandleColor({ mod_TypeElement: undefined, mod_HandleDesign: "40", }),
    rootValueScript(root: IGlobalVarsParent):string { return "StainlessSteelMattBrushed";}  },
  {
    id: "333",
    condition: new ExceptionVariantsbasic_HandleColor({ mod_TypeElement: undefined, mod_HandleDesign: "20", }),
    rootValueScript(root: IGlobalVarsParent):string { return "StainlessSteelMattBrushed";}  },
  {
    id: "334",
    condition: new ExceptionVariantsbasic_HandleColor({ mod_TypeElement: undefined, mod_HandleDesign: "30", }),
    rootValueScript(root: IGlobalVarsParent):string { return "StainlessSteelMattBrushed";}  },
  {
    id: "335",
    condition: new ExceptionVariantsbasic_HandleColor({ mod_TypeElement: undefined, mod_HandleDesign: "50", }),
    rootValueScript(root: IGlobalVarsParent):string { return "StainlessSteelMattBrushed";}  },
  {
    id: "336",
    condition: new ExceptionVariantsbasic_HandleColor({ mod_TypeElement: undefined, mod_HandleDesign: "100", }),
    rootValueScript(root: IGlobalVarsParent):string { return "Black";}  },
  {
    id: "337",
    condition: new ExceptionVariantsbasic_HandleColor({ mod_TypeElement: undefined, mod_HandleDesign: "80", }),
    rootValueScript(root: IGlobalVarsParent):string { return "NickelPlated";}  },
];
var gve_basic_HandleLength: GlobalVarException<number>[] = [
  {
    id: "268",
    condition: new ExceptionVariantsbasic_HandleLength({ mod_TypeElement: undefined, mod_HandleDesign: "100", }),
    rootValueScript(root: IGlobalVarsParent):number { return 160;}  },
  {
    id: "269",
    condition: new ExceptionVariantsbasic_HandleLength({ mod_TypeElement: undefined, mod_HandleDesign: "80", }),
    rootValueScript(root: IGlobalVarsParent):number { return 212;}  },
  {
    id: "270",
    condition: new ExceptionVariantsbasic_HandleLength({ mod_TypeElement: undefined, mod_HandleDesign: "120", }),
    rootValueScript(root: IGlobalVarsParent):number { return 5;}  },
  {
    id: "271",
    condition: new ExceptionVariantsbasic_HandleLength({ mod_TypeElement: undefined, mod_HandleDesign: "130", }),
    rootValueScript(root: IGlobalVarsParent):number { return 5;}  },
];
var gve_basic_HandlePosType: GlobalVarException<string>[] = [
  {
    id: "350",
    condition: new ExceptionVariantsbasic_HandlePosType({ mod_TypeElement: undefined, mod_FrontProgram: "Classic", mod_HandleDesign: "100", }),
    rootValueScript(root: IGlobalVarsParent):string { return "04";}  },
  {
    id: "351",
    condition: new ExceptionVariantsbasic_HandlePosType({ mod_TypeElement: undefined, mod_FrontProgram: "Tradition", mod_HandleDesign: undefined, }),
    rootValueScript(root: IGlobalVarsParent):string { return "13";}  },
  {
    id: "352",
    condition: new ExceptionVariantsbasic_HandlePosType({ mod_TypeElement: undefined, mod_FrontProgram: "Modern", mod_HandleDesign: undefined, }),
    rootValueScript(root: IGlobalVarsParent):string { return "13";}  },
  {
    id: "353",
    condition: new ExceptionVariantsbasic_HandlePosType({ mod_TypeElement: undefined, mod_FrontProgram: "Nature", mod_HandleDesign: "100", }),
    rootValueScript(root: IGlobalVarsParent):string { return "04";}  },
];
var gve_basic_HangerType: GlobalVarException<string>[] = [
  {
    id: "128",
    condition: new ExceptionVariants({ mod_TypeElement: "WallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "Automatic";}  },
];
var gve_basic_HardwareColor: GlobalVarException<string>[] = [
  {
    id: "354",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "190", }),
    rootValueScript(root: IGlobalVarsParent):string { return "WhiteColor";}  },
  {
    id: "368",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "222", }),
    rootValueScript(root: IGlobalVarsParent):string { return "LightColor";}  },
  {
    id: "367",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "240", }),
    rootValueScript(root: IGlobalVarsParent):string { return "BlackColor";}  },
  {
    id: "366",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "229", }),
    rootValueScript(root: IGlobalVarsParent):string { return "BlackColor";}  },
  {
    id: "365",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "215", }),
    rootValueScript(root: IGlobalVarsParent):string { return "LightColor";}  },
  {
    id: "364",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "324", }),
    rootValueScript(root: IGlobalVarsParent):string { return "DarkColor";}  },
  {
    id: "363",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "214", }),
    rootValueScript(root: IGlobalVarsParent):string { return "LightColor";}  },
  {
    id: "369",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "380", }),
    rootValueScript(root: IGlobalVarsParent):string { return "WhiteColor";}  },
  {
    id: "362",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "165", }),
    rootValueScript(root: IGlobalVarsParent):string { return "LightColor";}  },
  {
    id: "360",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "155", }),
    rootValueScript(root: IGlobalVarsParent):string { return "DarkColor";}  },
  {
    id: "359",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "152", }),
    rootValueScript(root: IGlobalVarsParent):string { return "DarkColor";}  },
  {
    id: "358",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "326", }),
    rootValueScript(root: IGlobalVarsParent):string { return "DarkColor";}  },
  {
    id: "357",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "316", }),
    rootValueScript(root: IGlobalVarsParent):string { return "DarkColor";}  },
  {
    id: "356",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "230", }),
    rootValueScript(root: IGlobalVarsParent):string { return "WhiteColor";}  },
  {
    id: "355",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "199", }),
    rootValueScript(root: IGlobalVarsParent):string { return "BlackColor";}  },
  {
    id: "361",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "160", }),
    rootValueScript(root: IGlobalVarsParent):string { return "LightColor";}  },
  {
    id: "370",
    condition: new ExceptionVariantsbasic_HardwareColor({ mod_TypeElement: undefined, mod_CarcaseColor: "178", }),
    rootValueScript(root: IGlobalVarsParent):string { return "LightColor";}  },
];
var gve_basic_PlinthAreaDesign: GlobalVarException<string>[] = [
  {
    id: "168",
    condition: new ExceptionVariants({ mod_TypeElement: "WallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "10";}  },
];
var gve_basic_PlinthAreaPosLeftMatrix: GlobalVarException<string>[] = [
  {
    id: "210",
    condition: new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix({ mod_TypeElement: "BaseUnit", mod_PlinthAreaVisLeft: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "LCR";}  },
  {
    id: "211",
    condition: new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix({ mod_TypeElement: "BaseUnitSink", mod_PlinthAreaVisLeft: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "LCR";}  },
  {
    id: "212",
    condition: new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix({ mod_TypeElement: "BaseUnitAppliance", mod_PlinthAreaVisLeft: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "LCR";}  },
  {
    id: "213",
    condition: new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix({ mod_TypeElement: "TallUnit", mod_PlinthAreaVisLeft: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "LCR";}  },
  {
    id: "214",
    condition: new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix({ mod_TypeElement: "TallUnitAppliance", mod_PlinthAreaVisLeft: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "LCR";}  },
  {
    id: "215",
    condition: new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix({ mod_TypeElement: "CornerUnitStraight", mod_PlinthAreaVisLeft: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "LCR";}  },
];
var gve_basic_PlinthAreaPosRightMatrix: GlobalVarException<string>[] = [
  {
    id: "216",
    condition: new ExceptionVariantsbasic_PlinthAreaPosRightMatrix({ mod_TypeElement: "BaseUnit", mod_PlinthAreaVisRight: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "RCR";}  },
  {
    id: "217",
    condition: new ExceptionVariantsbasic_PlinthAreaPosRightMatrix({ mod_TypeElement: "BaseUnitSink", mod_PlinthAreaVisRight: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "RCR";}  },
  {
    id: "218",
    condition: new ExceptionVariantsbasic_PlinthAreaPosRightMatrix({ mod_TypeElement: "BaseUnitAppliance", mod_PlinthAreaVisRight: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "RCR";}  },
  {
    id: "219",
    condition: new ExceptionVariantsbasic_PlinthAreaPosRightMatrix({ mod_TypeElement: "TallUnit", mod_PlinthAreaVisRight: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "RCR";}  },
  {
    id: "220",
    condition: new ExceptionVariantsbasic_PlinthAreaPosRightMatrix({ mod_TypeElement: "TallUnitAppliance", mod_PlinthAreaVisRight: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "RCR";}  },
  {
    id: "221",
    condition: new ExceptionVariantsbasic_PlinthAreaPosRightMatrix({ mod_TypeElement: "CornerUnitStraight", mod_PlinthAreaVisRight: true, }),
    rootValueScript(root: IGlobalVarsParent):string { return "RCR";}  },
];
var gve_basic_RailverttopfrontOffsetFront: GlobalVarException<number>[] = [
  {
    id: "153",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnitSink", }),
    rootValueScript(root: IGlobalVarsParent):number { return 2;}  },
];
var gve_basic_SidepanelmiddleShortWidth: GlobalVarException<number>[] = [
  {
    id: "254",
    condition: new ExceptionVariants({ mod_TypeElement: "CornerUnitStraight", }),
    rootValueScript(root: IGlobalVarsParent):number { return 70;}  },
];
var gve_basic_SidepanelmiddleThk: GlobalVarException<number>[] = [
  {
    id: "163",
    condition: new ExceptionVariants({ mod_TypeElement: "CornerUnitStraight", }),
    rootValueScript(root: IGlobalVarsParent):number { return 19;}  },
];
var gve_basic_SlopedCeilingDimensionLogic: GlobalVarException<string>[] = [
  {
    id: "344",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "FollowWallUserHeight";}  },
  {
    id: "345",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnitSink", }),
    rootValueScript(root: IGlobalVarsParent):string { return "FollowWallUserHeight";}  },
  {
    id: "346",
    condition: new ExceptionVariants({ mod_TypeElement: "BaseUnitAppliance", }),
    rootValueScript(root: IGlobalVarsParent):string { return "FollowWallUserHeight";}  },
  {
    id: "347",
    condition: new ExceptionVariants({ mod_TypeElement: "WallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "FollowWallUserHeight";}  },
  {
    id: "348",
    condition: new ExceptionVariants({ mod_TypeElement: "TallUnit", }),
    rootValueScript(root: IGlobalVarsParent):string { return "FollowWallMaxHeight";}  },
  {
    id: "349",
    condition: new ExceptionVariants({ mod_TypeElement: "TallUnitAppliance", }),
    rootValueScript(root: IGlobalVarsParent):string { return "FollowWallMaxHeight";}  },
];
// ###### END: Exception tables #######
function myGetPropertyDescriptor(obj: any, prop: string) : PropertyDescriptor|undefined {
  let desc;
  do {
    desc = Object.getOwnPropertyDescriptor(obj, prop);
  } while (!desc && (obj = Object.getPrototypeOf(obj)));
  return desc;
}
export interface IGlobalVars {
  get basic_SidePanelThk(): number;
  get basic_ShelftopOffsetTop(): number;
  get basic_ShelftopThk(): number;
  get basic_RailhortopfrontDepth(): number;
  get basic_RailhortopfrontThk(): number;
  get basic_RailhortopbackDepth(): number;
  get basic_RailhortopbackThk(): number;
  get basic_RailverttopfrontHeight(): number;
  get basic_RailverttopfrontThk(): number;
  get basic_RailverttopbackHeight(): number;
  get basic_RailverttopbackThk(): number;
  get basic_ShelfbtmOffsetBtm(): number;
  get basic_ShelfbtmThk(): number;
  get basic_SidepanelOffsetSide(): number;
  get basic_BackwallRemovableGapVert(): number;
  get basic_BackwallRemovableGapHor(): number;
  get basic_BackwallGrooveGapDepth(): number;
  get basic_BackwallGrooveGapThk(): number;
  get basic_BackwallGrooveDepthVertOutside(): number;
  get basic_BackwallGrooveDepthVertMidside(): number;
  get basic_BackwallGrooveDepthHorOutside(): number;
  get basic_BackwallGrooveDepthHorMidside(): number;
  get basic_BackwallRabbetDepthVert(): number;
  get basic_BackwallRabbetDepthHor(): number;
  get basic_BackwallRabbetThk(): number;
  get basic_BackwallRabbetGapDepthVert(): number;
  get basic_BackwallRabbetGapDepthHor(): number;
  get basic_BackwallTruncateOffsetBack(): number;
  get basic_BackwallTruncateGapVert(): number;
  get basic_BackwallTruncateGapHor(): number;
  get basic_FrontGapCarcase(): number;
  get basic_BackwallThk(): number;
  get basic_FrontGapVert(): number;
  get basic_FrontGapHor(): number;
  get basic_FrontPosStart(): number;
  get basic_RailhortopOffsetTop(): number;
  get basic_RailverttopOffsetTop(): number;
  get basic_ShelftopOffsetSide(): number;
  get basic_RailhortopfrontOffsetFront(): number;
  get basic_RailhortopbackOffsetBack(): number;
  get basic_RailverttopfrontOffsetFront(): number;
  get basic_RailverttopbackOffsetBack(): number;
  get basic_ShelfbtmOffsetSide(): number;
  get basic_SidepanelOffsetBtm(): number;
  get basic_SidepanelOffsetFront(): number;
  get basic_SidepanelOffsetBack(): number;
  get basic_SidepanelOffsetTop(): number;
  get basic_CarcaseFrontConstruction(): string;
  get basic_CarcaseOversizeInsideWall(): number;
  get basic_CutSuspendSide(): boolean;
  get basic_HandleLine(): number;
  get basic_CarcaseOversizeInlayedFront(): number;
  get basic_PlinthAreaHeight(): number;
  get basic_CarcaseShelftopConstruction(): string;
  get basic_CarcaseShelfbtmConstruction(): string;
  get basic_FrontThk(): number;
  get basic_ShelfadjDrillDistance(): number;
  get basic_ShelfadjDrillType(): string;
  get basic_ShelfadjOffsetFront(): number;
  get basic_ShelfadjOffsetBack(): number;
  get basic_ShelffixedThk(): number;
  get basic_ShelffixedOffsetFront(): number;
  get basic_ShelfadjThk(): number;
  get basic_DrawerBoxProgram(): string;
  get basic_DrawerBoxHeightType(): string;
  get basic_DrawerBoxOffsetDepth(): number;
  get basic_DrawerBoxColor(): string;
  get basic_DrawerBoxDepthType(): string;
  get basic_CarcaseBackwallConstruction(): string;
  get basic_BackwallFixedHeight(): number;
  get basic_BackwallPos(): number;
  get basic_ShelfadjDrillinglineOffsetBtm(): number;
  get basic_ShelfadjDrillinglineOffsetTop(): number;
  get basic_HangerType(): string;
  get basic_FlipliftType(): string;
  get basic_OpeningType(): string;
  get basic_HardwareFlipliftType(): string;
  get basic_HardwareColor(): string;
  get basic_ShelvesOffsetBack(): number;
  get basic_ShelvesOffsetFront(): number;
  get basic_ShelffixedOversizeFront(): number;
  get basic_ShelffixedOversizeBack(): number;
  get basic_HandlePosLogic(): string;
  get basic_PlinthAreaPosLeftMatrix(): string;
  get basic_PlinthAreaPosRightMatrix(): string;
  get basic_PlinthAreaPosFrontMatrix(): string;
  get basic_PlinthAreaPosBackMatrix(): string;
  get basic_PlinthAreaPosLogic(): string;
  get basic_DrawerBoxDesign(): string;
  get basic_DrawerBoxLogic(): string;
  get basic_DrawerBoxWeightType(): string;
  get basic_InteriorEquipmentLogic(): string;
  get basic_ShelfadjDesign(): string;
  get basic_PanelblindThk(): number;
  get basic_CleatThk(): number;
  get basic_CleatWidth(): number;
  get basic_PanelblindPos(): number;
  get basic_CornerunitStraightConstruction(): string;
  get basic_PlinthAreaDesign(): string;
  get basic_PlinthAreaExtraItem(): string;
  get basic_CornerunitStraightFillerConstruction(): string;
  get basic_BlindCornerHingeSpace(): number;
  get basic_FrontGapHorTop(): number;
  get basic_CarcaseBackwallShelfbtmOffset(): number;
  get basic_CarcaseBackwallShelftopOffset(): number;
  get basic_CarcaseBackwallShelffixedOffset(): number;
  get basic_BackwallOverlayedReductionHorTop(): number;
  get basic_BackwallOverlayedReductionHorBtm(): number;
  get basic_BackwallOverlayedReductionHorCenter(): number;
  get basic_BackwallOverlayedReductionVertLeft(): number;
  get basic_BackwallOverlayedReductionVertRight(): number;
  get basic_CarcaseConnectionLeftTop(): string;
  get basic_CarcaseConnectionLeftBtm(): string;
  get basic_CarcaseConnectionRightTop(): string;
  get basic_CarcaseConnectionRightBtm(): string;
  get basic_ShelvesBackwallFittingConnection(): string;
  get basic_FittingConnectionLeftBtm(): string;
  get basic_FittingConnectionLeftTop(): string;
  get basic_FittingConnectionLeftHor(): string;
  get basic_FittingConnectionRightBtm(): string;
  get basic_FittingConnectionRightTop(): string;
  get basic_FittingConnectionRightHor(): string;
  get basic_CarcasePartConnectionLeftHor(): string;
  get basic_CarcasePartConnectionRightHor(): string;
  get basic_CarcasePartConnectionBackHor(): string;
  get basic_CarcasePartConnectionTopVert(): string;
  get basic_CarcasePartConnectionBtmVert(): string;
  get basic_CarcasePartConnectionBackVert(): string;
  get basic_FittingConnectionTopVert(): string;
  get basic_FittingConnectionBtmVert(): string;
  get basic_RackAreaType(): string;
  get basic_RackAreaOversizeCarcaseType(): string;
  get basic_RackAreaDepthFixedCarcase(): number;
  get basic_RackAreaManualOffsetCarcase(): number;
  get basic_RackAreaOversizeAutomaticCarcaseType(): boolean;
  get basic_VertDividerType(): string;
  get basic_OffsetFrontVertDivider(): number;
  get basic_SidepanelmiddleShortWidth(): number;
  get basic_RackAreaShelftopConstruction(): string;
  get basic_SidepanelmiddleThk(): number;
  get basic_DuststripHeightReduction(): number;
  get basic_DoorType(): string;
  get basic_DoorDirection(): string;
  get basic_CountertopConnectionOversize(): number;
  get basic_FrontpanelWeightLogic(): string;
  get basic_PartgroupDrawerWeightLogic(): string;
  get basic_PushtoopenLine(): number;
  get basic_PushtoopenColor(): string;
  get basic_FrontSplitDescriptor(): string;
  get basic_FramePartsWidthHor(): number;
  get basic_FramePartsWidthVert(): number;
  get basic_PanelWoodFrameFillingType(): string;
  get basic_PanelWoodFrameType(): string;
  get basic_FillingGrooveGap(): number;
  get basic_FramePanelGrooveDepth(): number;
  get basic_FrontDesign(): string;
  get basic_DoubleCutDimension(): number;
  get basic_CountertopOverhangSide(): number;
  get basic_FlipliftLogic(): string;
  get basic_CountertopThk(): number;
  get basic_CountertopConnectionRadius(): number;
  get basic_CountertopOverhangFront(): number;
  get basic_ToekickReductionTop(): number;
  get basic_ToekickThk(): number;
  get basic_ToekickConnectionOverhang(): number;
  get basic_ToekickSidepanelOverdimensionBtm(): number;
  get basic_ToekickSidepanelTransitionType(): string;
  get basic_HandlePosType(): string;
  get basic_HandleColor(): string;
  get basic_HandleLength(): number;
  get basic_RailverttopbackPosition(): string;
  get basic_HeatshelfThk(): number;
  get basic_HeatshelfOffsetFront(): number;
  get basic_HeatshelfOffsetSide(): number;
  get basic_HeatshelfFrontOffsetFront(): number;
  get basic_HeatshelfFrontThk(): number;
  get basic_RailverttopfrontOversize(): boolean;
  get basic_RailverttopfrontOverdimension(): number;
  get basic_HeatshelfFrontHeightMinimum(): number;
  get basic_RailverttopfrontOverdimensionHeatshelf(): number;
  get basic_TopDepth(): number;
  get basic_SlopedCeilingDimensionLogic(): string;
  get basic_SlopedCeilingConstruction(): string;
  get basic_SlopedCeilingShelftopOffsetTop(): number;
  get basic_SlopedCeilingShelvesOffsetBack(): number;
  get basic_SlopedCeilingShelvesOffsetFront(): number;
  get basic_SlopedCeilingSidepanelOffsetBack(): number;
  get basic_SlopedCeilingSidepanelOffsetFront(): number;
  get basic_SlopedCeilingSidepanelOffsetSide(): number;
  get basic_SlopedCeilingShelfbtmOffsetBtm(): number;
  get basic_CeilingFillerFittingPanelDepth(): number;
  get basic_PaneltopOversizeBack(): number;
  get basic_PaneltopOverhangFront(): number;
  get basic_CeilingFillerThk(): number;
  get basic_CeilingFillerHeight(): number;
  get basic_CeilingFillerFittingPanelThk(): number;
  get basic_PaneltopThk(): number;
  get basic_SlopedCeilingBackwallOverlayedReductionVertLeft(): number;
  get basic_SlopedCeilingBackwallOverlayedReductionVertRight(): number;
  get basic_GrooveThroughOversizeSecurityDistance(): number;
  get basic_FillerDepth(): number;
  get basic_SlopedCeilingShelftopDepthMin(): number;
  get basic_SlopedCeilingHeightReduction(): number;
  get basic_DrawingCanvasMargin(): number;
  get basic_DrawingCanvasWidth(): number;
  get basic_DrawingColorFillDrillHorizontal(): string;
  get basic_DrawingColorFillDrillVertical(): string;
  get basic_DrawingColorFillError(): string;
  get basic_DrawingColorFillGroove(): string;
  get basic_DrawingColorFillPart(): string;
  get basic_DrawingColorFillPocket(): string;
  get basic_DrawingColorStrokeFeature(): string;
  get basic_DrawingColorStrokeAnnotation(): string;
  get basic_DrawingColorStrokeDashedReferenceLine(): string;
  get basic_DrawingAnnotationDrawDashedReferenceLines(): boolean;
  get basic_DrawingAnnotationReferenceLineDashLength(): number;
  get basic_DrawingAnnotationFontFamily(): string;
  get basic_DrawingAnnotationFontSize(): number;
  get basic_DrawingAnnotationStrokeWidth(): number;
  get basic_DrawingTableStrokeWidth(): number;
  get basic_DrawingFeatureStrokeWidth(): number;
  get basic_DrawingAnnotationTextOffsetY(): number;
  get basic_DrawingAnnotationSpacing(): number;
  get basic_DrawingAnnotationVerticalLineLength(): number;
  get basic_DrawingAnnotationTextDecimalSpaces(): number;
  get basic_DrawingCanvasMaxZoom(): number;
  get basic_DrawingAnnotationFirstAnnotationDistance(): number;
  get basic_DrawingTableMarginHorizontal(): number;
  get basic_DrawingTableMarginVertical(): number;
  get basic_DrawingTableColorHeaderFill(): string;
  get basic_DrawingCanvasBackgroundColor(): string;
  get basic_DrawingCanvasEdgeColor(): string;
  get basic_CreateBom(): string;
  get basic_GrainLogic(): string;
}
class GlobalVarInfoMessage {
  constructor(type: string, message: string) {
    this._type = type;
    this._message = message;
  }

  get Type(): string { return this._type; }
  get Message(): string { return this._message; }

  _type: string;
  _message: string;
}
export class GlobalVars {
  _infoMessages = new Map<string, GlobalVarInfoMessage>();
  getAttributes() : Map<string,any> { 
    let res = new Map<string,any>();
  res.set('basic_SidePanelThk', this._basic_SidePanelThk);
  res.set('basic_ShelftopOffsetTop', this._basic_ShelftopOffsetTop);
  res.set('basic_ShelftopThk', this._basic_ShelftopThk);
  res.set('basic_RailhortopfrontDepth', this._basic_RailhortopfrontDepth);
  res.set('basic_RailhortopfrontThk', this._basic_RailhortopfrontThk);
  res.set('basic_RailhortopbackDepth', this._basic_RailhortopbackDepth);
  res.set('basic_RailhortopbackThk', this._basic_RailhortopbackThk);
  res.set('basic_RailverttopfrontHeight', this._basic_RailverttopfrontHeight);
  res.set('basic_RailverttopfrontThk', this._basic_RailverttopfrontThk);
  res.set('basic_RailverttopbackHeight', this._basic_RailverttopbackHeight);
  res.set('basic_RailverttopbackThk', this._basic_RailverttopbackThk);
  res.set('basic_ShelfbtmOffsetBtm', this._basic_ShelfbtmOffsetBtm);
  res.set('basic_ShelfbtmThk', this._basic_ShelfbtmThk);
  res.set('basic_SidepanelOffsetSide', this._basic_SidepanelOffsetSide);
  res.set('basic_BackwallRemovableGapVert', this._basic_BackwallRemovableGapVert);
  res.set('basic_BackwallRemovableGapHor', this._basic_BackwallRemovableGapHor);
  res.set('basic_BackwallGrooveGapDepth', this._basic_BackwallGrooveGapDepth);
  res.set('basic_BackwallGrooveGapThk', this._basic_BackwallGrooveGapThk);
  res.set('basic_BackwallGrooveDepthVertOutside', this._basic_BackwallGrooveDepthVertOutside);
  res.set('basic_BackwallGrooveDepthVertMidside', this._basic_BackwallGrooveDepthVertMidside);
  res.set('basic_BackwallGrooveDepthHorOutside', this._basic_BackwallGrooveDepthHorOutside);
  res.set('basic_BackwallGrooveDepthHorMidside', this._basic_BackwallGrooveDepthHorMidside);
  res.set('basic_BackwallRabbetDepthVert', this._basic_BackwallRabbetDepthVert);
  res.set('basic_BackwallRabbetDepthHor', this._basic_BackwallRabbetDepthHor);
  res.set('basic_BackwallRabbetThk', this._basic_BackwallRabbetThk);
  res.set('basic_BackwallRabbetGapDepthVert', this._basic_BackwallRabbetGapDepthVert);
  res.set('basic_BackwallRabbetGapDepthHor', this._basic_BackwallRabbetGapDepthHor);
  res.set('basic_BackwallTruncateOffsetBack', this._basic_BackwallTruncateOffsetBack);
  res.set('basic_BackwallTruncateGapVert', this._basic_BackwallTruncateGapVert);
  res.set('basic_BackwallTruncateGapHor', this._basic_BackwallTruncateGapHor);
  res.set('basic_FrontGapCarcase', this._basic_FrontGapCarcase);
  res.set('basic_BackwallThk', this._basic_BackwallThk);
  res.set('basic_FrontGapVert', this._basic_FrontGapVert);
  res.set('basic_FrontGapHor', this._basic_FrontGapHor);
  res.set('basic_FrontPosStart', this._basic_FrontPosStart);
  res.set('basic_RailhortopOffsetTop', this._basic_RailhortopOffsetTop);
  res.set('basic_RailverttopOffsetTop', this._basic_RailverttopOffsetTop);
  res.set('basic_ShelftopOffsetSide', this._basic_ShelftopOffsetSide);
  res.set('basic_RailhortopfrontOffsetFront', this._basic_RailhortopfrontOffsetFront);
  res.set('basic_RailhortopbackOffsetBack', this._basic_RailhortopbackOffsetBack);
  res.set('basic_RailverttopfrontOffsetFront', this._basic_RailverttopfrontOffsetFront);
  res.set('basic_RailverttopbackOffsetBack', this._basic_RailverttopbackOffsetBack);
  res.set('basic_ShelfbtmOffsetSide', this._basic_ShelfbtmOffsetSide);
  res.set('basic_SidepanelOffsetBtm', this._basic_SidepanelOffsetBtm);
  res.set('basic_SidepanelOffsetFront', this._basic_SidepanelOffsetFront);
  res.set('basic_SidepanelOffsetBack', this._basic_SidepanelOffsetBack);
  res.set('basic_SidepanelOffsetTop', this._basic_SidepanelOffsetTop);
  res.set('basic_CarcaseFrontConstruction', this._basic_CarcaseFrontConstruction);
  res.set('basic_CarcaseOversizeInsideWall', this._basic_CarcaseOversizeInsideWall);
  res.set('basic_CutSuspendSide', this._basic_CutSuspendSide);
  res.set('basic_HandleLine', this._basic_HandleLine);
  res.set('basic_CarcaseOversizeInlayedFront', this._basic_CarcaseOversizeInlayedFront);
  res.set('basic_PlinthAreaHeight', this._basic_PlinthAreaHeight);
  res.set('basic_CarcaseShelftopConstruction', this._basic_CarcaseShelftopConstruction);
  res.set('basic_CarcaseShelfbtmConstruction', this._basic_CarcaseShelfbtmConstruction);
  res.set('basic_FrontThk', this._basic_FrontThk);
  res.set('basic_ShelfadjDrillDistance', this._basic_ShelfadjDrillDistance);
  res.set('basic_ShelfadjDrillType', this._basic_ShelfadjDrillType);
  res.set('basic_ShelfadjOffsetFront', this._basic_ShelfadjOffsetFront);
  res.set('basic_ShelfadjOffsetBack', this._basic_ShelfadjOffsetBack);
  res.set('basic_ShelffixedThk', this._basic_ShelffixedThk);
  res.set('basic_ShelffixedOffsetFront', this._basic_ShelffixedOffsetFront);
  res.set('basic_ShelfadjThk', this._basic_ShelfadjThk);
  res.set('basic_DrawerBoxProgram', this._basic_DrawerBoxProgram);
  res.set('basic_DrawerBoxHeightType', this._basic_DrawerBoxHeightType);
  res.set('basic_DrawerBoxOffsetDepth', this._basic_DrawerBoxOffsetDepth);
  res.set('basic_DrawerBoxColor', this._basic_DrawerBoxColor);
  res.set('basic_DrawerBoxDepthType', this._basic_DrawerBoxDepthType);
  res.set('basic_CarcaseBackwallConstruction', this._basic_CarcaseBackwallConstruction);
  res.set('basic_BackwallFixedHeight', this._basic_BackwallFixedHeight);
  res.set('basic_BackwallPos', this._basic_BackwallPos);
  res.set('basic_ShelfadjDrillinglineOffsetBtm', this._basic_ShelfadjDrillinglineOffsetBtm);
  res.set('basic_ShelfadjDrillinglineOffsetTop', this._basic_ShelfadjDrillinglineOffsetTop);
  res.set('basic_HangerType', this._basic_HangerType);
  res.set('basic_FlipliftType', this._basic_FlipliftType);
  res.set('basic_OpeningType', this._basic_OpeningType);
  res.set('basic_HardwareFlipliftType', this._basic_HardwareFlipliftType);
  res.set('basic_HardwareColor', this._basic_HardwareColor);
  res.set('basic_ShelvesOffsetBack', this._basic_ShelvesOffsetBack);
  res.set('basic_ShelvesOffsetFront', this._basic_ShelvesOffsetFront);
  res.set('basic_ShelffixedOversizeFront', this._basic_ShelffixedOversizeFront);
  res.set('basic_ShelffixedOversizeBack', this._basic_ShelffixedOversizeBack);
  res.set('basic_HandlePosLogic', this._basic_HandlePosLogic);
  res.set('basic_PlinthAreaPosLeftMatrix', this._basic_PlinthAreaPosLeftMatrix);
  res.set('basic_PlinthAreaPosRightMatrix', this._basic_PlinthAreaPosRightMatrix);
  res.set('basic_PlinthAreaPosFrontMatrix', this._basic_PlinthAreaPosFrontMatrix);
  res.set('basic_PlinthAreaPosBackMatrix', this._basic_PlinthAreaPosBackMatrix);
  res.set('basic_PlinthAreaPosLogic', this._basic_PlinthAreaPosLogic);
  res.set('basic_DrawerBoxDesign', this._basic_DrawerBoxDesign);
  res.set('basic_DrawerBoxLogic', this._basic_DrawerBoxLogic);
  res.set('basic_DrawerBoxWeightType', this._basic_DrawerBoxWeightType);
  res.set('basic_InteriorEquipmentLogic', this._basic_InteriorEquipmentLogic);
  res.set('basic_ShelfadjDesign', this._basic_ShelfadjDesign);
  res.set('basic_PanelblindThk', this._basic_PanelblindThk);
  res.set('basic_CleatThk', this._basic_CleatThk);
  res.set('basic_CleatWidth', this._basic_CleatWidth);
  res.set('basic_PanelblindPos', this._basic_PanelblindPos);
  res.set('basic_CornerunitStraightConstruction', this._basic_CornerunitStraightConstruction);
  res.set('basic_PlinthAreaDesign', this._basic_PlinthAreaDesign);
  res.set('basic_PlinthAreaExtraItem', this._basic_PlinthAreaExtraItem);
  res.set('basic_CornerunitStraightFillerConstruction', this._basic_CornerunitStraightFillerConstruction);
  res.set('basic_BlindCornerHingeSpace', this._basic_BlindCornerHingeSpace);
  res.set('basic_FrontGapHorTop', this._basic_FrontGapHorTop);
  res.set('basic_CarcaseBackwallShelfbtmOffset', this._basic_CarcaseBackwallShelfbtmOffset);
  res.set('basic_CarcaseBackwallShelftopOffset', this._basic_CarcaseBackwallShelftopOffset);
  res.set('basic_CarcaseBackwallShelffixedOffset', this._basic_CarcaseBackwallShelffixedOffset);
  res.set('basic_BackwallOverlayedReductionHorTop', this._basic_BackwallOverlayedReductionHorTop);
  res.set('basic_BackwallOverlayedReductionHorBtm', this._basic_BackwallOverlayedReductionHorBtm);
  res.set('basic_BackwallOverlayedReductionHorCenter', this._basic_BackwallOverlayedReductionHorCenter);
  res.set('basic_BackwallOverlayedReductionVertLeft', this._basic_BackwallOverlayedReductionVertLeft);
  res.set('basic_BackwallOverlayedReductionVertRight', this._basic_BackwallOverlayedReductionVertRight);
  res.set('basic_CarcaseConnectionLeftTop', this._basic_CarcaseConnectionLeftTop);
  res.set('basic_CarcaseConnectionLeftBtm', this._basic_CarcaseConnectionLeftBtm);
  res.set('basic_CarcaseConnectionRightTop', this._basic_CarcaseConnectionRightTop);
  res.set('basic_CarcaseConnectionRightBtm', this._basic_CarcaseConnectionRightBtm);
  res.set('basic_ShelvesBackwallFittingConnection', this._basic_ShelvesBackwallFittingConnection);
  res.set('basic_FittingConnectionLeftBtm', this._basic_FittingConnectionLeftBtm);
  res.set('basic_FittingConnectionLeftTop', this._basic_FittingConnectionLeftTop);
  res.set('basic_FittingConnectionLeftHor', this._basic_FittingConnectionLeftHor);
  res.set('basic_FittingConnectionRightBtm', this._basic_FittingConnectionRightBtm);
  res.set('basic_FittingConnectionRightTop', this._basic_FittingConnectionRightTop);
  res.set('basic_FittingConnectionRightHor', this._basic_FittingConnectionRightHor);
  res.set('basic_CarcasePartConnectionLeftHor', this._basic_CarcasePartConnectionLeftHor);
  res.set('basic_CarcasePartConnectionRightHor', this._basic_CarcasePartConnectionRightHor);
  res.set('basic_CarcasePartConnectionBackHor', this._basic_CarcasePartConnectionBackHor);
  res.set('basic_CarcasePartConnectionTopVert', this._basic_CarcasePartConnectionTopVert);
  res.set('basic_CarcasePartConnectionBtmVert', this._basic_CarcasePartConnectionBtmVert);
  res.set('basic_CarcasePartConnectionBackVert', this._basic_CarcasePartConnectionBackVert);
  res.set('basic_FittingConnectionTopVert', this._basic_FittingConnectionTopVert);
  res.set('basic_FittingConnectionBtmVert', this._basic_FittingConnectionBtmVert);
  res.set('basic_RackAreaType', this._basic_RackAreaType);
  res.set('basic_RackAreaOversizeCarcaseType', this._basic_RackAreaOversizeCarcaseType);
  res.set('basic_RackAreaDepthFixedCarcase', this._basic_RackAreaDepthFixedCarcase);
  res.set('basic_RackAreaManualOffsetCarcase', this._basic_RackAreaManualOffsetCarcase);
  res.set('basic_RackAreaOversizeAutomaticCarcaseType', this._basic_RackAreaOversizeAutomaticCarcaseType);
  res.set('basic_VertDividerType', this._basic_VertDividerType);
  res.set('basic_OffsetFrontVertDivider', this._basic_OffsetFrontVertDivider);
  res.set('basic_SidepanelmiddleShortWidth', this._basic_SidepanelmiddleShortWidth);
  res.set('basic_RackAreaShelftopConstruction', this._basic_RackAreaShelftopConstruction);
  res.set('basic_SidepanelmiddleThk', this._basic_SidepanelmiddleThk);
  res.set('basic_DuststripHeightReduction', this._basic_DuststripHeightReduction);
  res.set('basic_DoorType', this._basic_DoorType);
  res.set('basic_DoorDirection', this._basic_DoorDirection);
  res.set('basic_CountertopConnectionOversize', this._basic_CountertopConnectionOversize);
  res.set('basic_FrontpanelWeightLogic', this._basic_FrontpanelWeightLogic);
  res.set('basic_PartgroupDrawerWeightLogic', this._basic_PartgroupDrawerWeightLogic);
  res.set('basic_PushtoopenLine', this._basic_PushtoopenLine);
  res.set('basic_PushtoopenColor', this._basic_PushtoopenColor);
  res.set('basic_FrontSplitDescriptor', this._basic_FrontSplitDescriptor);
  res.set('basic_FramePartsWidthHor', this._basic_FramePartsWidthHor);
  res.set('basic_FramePartsWidthVert', this._basic_FramePartsWidthVert);
  res.set('basic_PanelWoodFrameFillingType', this._basic_PanelWoodFrameFillingType);
  res.set('basic_PanelWoodFrameType', this._basic_PanelWoodFrameType);
  res.set('basic_FillingGrooveGap', this._basic_FillingGrooveGap);
  res.set('basic_FramePanelGrooveDepth', this._basic_FramePanelGrooveDepth);
  res.set('basic_FrontDesign', this._basic_FrontDesign);
  res.set('basic_DoubleCutDimension', this._basic_DoubleCutDimension);
  res.set('basic_CountertopOverhangSide', this._basic_CountertopOverhangSide);
  res.set('basic_FlipliftLogic', this._basic_FlipliftLogic);
  res.set('basic_CountertopThk', this._basic_CountertopThk);
  res.set('basic_CountertopConnectionRadius', this._basic_CountertopConnectionRadius);
  res.set('basic_CountertopOverhangFront', this._basic_CountertopOverhangFront);
  res.set('basic_ToekickReductionTop', this._basic_ToekickReductionTop);
  res.set('basic_ToekickThk', this._basic_ToekickThk);
  res.set('basic_ToekickConnectionOverhang', this._basic_ToekickConnectionOverhang);
  res.set('basic_ToekickSidepanelOverdimensionBtm', this._basic_ToekickSidepanelOverdimensionBtm);
  res.set('basic_ToekickSidepanelTransitionType', this._basic_ToekickSidepanelTransitionType);
  res.set('basic_HandlePosType', this._basic_HandlePosType);
  res.set('basic_HandleColor', this._basic_HandleColor);
  res.set('basic_HandleLength', this._basic_HandleLength);
  res.set('basic_RailverttopbackPosition', this._basic_RailverttopbackPosition);
  res.set('basic_HeatshelfThk', this._basic_HeatshelfThk);
  res.set('basic_HeatshelfOffsetFront', this._basic_HeatshelfOffsetFront);
  res.set('basic_HeatshelfOffsetSide', this._basic_HeatshelfOffsetSide);
  res.set('basic_HeatshelfFrontOffsetFront', this._basic_HeatshelfFrontOffsetFront);
  res.set('basic_HeatshelfFrontThk', this._basic_HeatshelfFrontThk);
  res.set('basic_RailverttopfrontOversize', this._basic_RailverttopfrontOversize);
  res.set('basic_RailverttopfrontOverdimension', this._basic_RailverttopfrontOverdimension);
  res.set('basic_HeatshelfFrontHeightMinimum', this._basic_HeatshelfFrontHeightMinimum);
  res.set('basic_RailverttopfrontOverdimensionHeatshelf', this._basic_RailverttopfrontOverdimensionHeatshelf);
  res.set('basic_TopDepth', this._basic_TopDepth);
  res.set('basic_SlopedCeilingDimensionLogic', this._basic_SlopedCeilingDimensionLogic);
  res.set('basic_SlopedCeilingConstruction', this._basic_SlopedCeilingConstruction);
  res.set('basic_SlopedCeilingShelftopOffsetTop', this._basic_SlopedCeilingShelftopOffsetTop);
  res.set('basic_SlopedCeilingShelvesOffsetBack', this._basic_SlopedCeilingShelvesOffsetBack);
  res.set('basic_SlopedCeilingShelvesOffsetFront', this._basic_SlopedCeilingShelvesOffsetFront);
  res.set('basic_SlopedCeilingSidepanelOffsetBack', this._basic_SlopedCeilingSidepanelOffsetBack);
  res.set('basic_SlopedCeilingSidepanelOffsetFront', this._basic_SlopedCeilingSidepanelOffsetFront);
  res.set('basic_SlopedCeilingSidepanelOffsetSide', this._basic_SlopedCeilingSidepanelOffsetSide);
  res.set('basic_SlopedCeilingShelfbtmOffsetBtm', this._basic_SlopedCeilingShelfbtmOffsetBtm);
  res.set('basic_CeilingFillerFittingPanelDepth', this._basic_CeilingFillerFittingPanelDepth);
  res.set('basic_PaneltopOversizeBack', this._basic_PaneltopOversizeBack);
  res.set('basic_PaneltopOverhangFront', this._basic_PaneltopOverhangFront);
  res.set('basic_CeilingFillerThk', this._basic_CeilingFillerThk);
  res.set('basic_CeilingFillerHeight', this._basic_CeilingFillerHeight);
  res.set('basic_CeilingFillerFittingPanelThk', this._basic_CeilingFillerFittingPanelThk);
  res.set('basic_PaneltopThk', this._basic_PaneltopThk);
  res.set('basic_SlopedCeilingBackwallOverlayedReductionVertLeft', this._basic_SlopedCeilingBackwallOverlayedReductionVertLeft);
  res.set('basic_SlopedCeilingBackwallOverlayedReductionVertRight', this._basic_SlopedCeilingBackwallOverlayedReductionVertRight);
  res.set('basic_GrooveThroughOversizeSecurityDistance', this._basic_GrooveThroughOversizeSecurityDistance);
  res.set('basic_FillerDepth', this._basic_FillerDepth);
  res.set('basic_SlopedCeilingShelftopDepthMin', this._basic_SlopedCeilingShelftopDepthMin);
  res.set('basic_SlopedCeilingHeightReduction', this._basic_SlopedCeilingHeightReduction);
  res.set('basic_DrawingCanvasMargin', this._basic_DrawingCanvasMargin);
  res.set('basic_DrawingCanvasWidth', this._basic_DrawingCanvasWidth);
  res.set('basic_DrawingColorFillDrillHorizontal', this._basic_DrawingColorFillDrillHorizontal);
  res.set('basic_DrawingColorFillDrillVertical', this._basic_DrawingColorFillDrillVertical);
  res.set('basic_DrawingColorFillError', this._basic_DrawingColorFillError);
  res.set('basic_DrawingColorFillGroove', this._basic_DrawingColorFillGroove);
  res.set('basic_DrawingColorFillPart', this._basic_DrawingColorFillPart);
  res.set('basic_DrawingColorFillPocket', this._basic_DrawingColorFillPocket);
  res.set('basic_DrawingColorStrokeFeature', this._basic_DrawingColorStrokeFeature);
  res.set('basic_DrawingColorStrokeAnnotation', this._basic_DrawingColorStrokeAnnotation);
  res.set('basic_DrawingColorStrokeDashedReferenceLine', this._basic_DrawingColorStrokeDashedReferenceLine);
  res.set('basic_DrawingAnnotationDrawDashedReferenceLines', this._basic_DrawingAnnotationDrawDashedReferenceLines);
  res.set('basic_DrawingAnnotationReferenceLineDashLength', this._basic_DrawingAnnotationReferenceLineDashLength);
  res.set('basic_DrawingAnnotationFontFamily', this._basic_DrawingAnnotationFontFamily);
  res.set('basic_DrawingAnnotationFontSize', this._basic_DrawingAnnotationFontSize);
  res.set('basic_DrawingAnnotationStrokeWidth', this._basic_DrawingAnnotationStrokeWidth);
  res.set('basic_DrawingTableStrokeWidth', this._basic_DrawingTableStrokeWidth);
  res.set('basic_DrawingFeatureStrokeWidth', this._basic_DrawingFeatureStrokeWidth);
  res.set('basic_DrawingAnnotationTextOffsetY', this._basic_DrawingAnnotationTextOffsetY);
  res.set('basic_DrawingAnnotationSpacing', this._basic_DrawingAnnotationSpacing);
  res.set('basic_DrawingAnnotationVerticalLineLength', this._basic_DrawingAnnotationVerticalLineLength);
  res.set('basic_DrawingAnnotationTextDecimalSpaces', this._basic_DrawingAnnotationTextDecimalSpaces);
  res.set('basic_DrawingCanvasMaxZoom', this._basic_DrawingCanvasMaxZoom);
  res.set('basic_DrawingAnnotationFirstAnnotationDistance', this._basic_DrawingAnnotationFirstAnnotationDistance);
  res.set('basic_DrawingTableMarginHorizontal', this._basic_DrawingTableMarginHorizontal);
  res.set('basic_DrawingTableMarginVertical', this._basic_DrawingTableMarginVertical);
  res.set('basic_DrawingTableColorHeaderFill', this._basic_DrawingTableColorHeaderFill);
  res.set('basic_DrawingCanvasBackgroundColor', this._basic_DrawingCanvasBackgroundColor);
  res.set('basic_DrawingCanvasEdgeColor', this._basic_DrawingCanvasEdgeColor);
  res.set('basic_CreateBom', this._basic_CreateBom);
  res.set('basic_GrainLogic', this._basic_GrainLogic);
    return res;
  }
  _basic_SidePanelThk: number = 19;
  get basic_SidePanelThk(): number { this.checkMsg('basic_SidePanelThk'); return this._basic_SidePanelThk; }
  _basic_ShelftopOffsetTop: number = 0.5;
  get basic_ShelftopOffsetTop(): number { this.checkMsg('basic_ShelftopOffsetTop'); return this._basic_ShelftopOffsetTop; }
  _basic_ShelftopThk: number = 19;
  get basic_ShelftopThk(): number { this.checkMsg('basic_ShelftopThk'); return this._basic_ShelftopThk; }
  _basic_RailhortopfrontDepth: number = 120;
  get basic_RailhortopfrontDepth(): number { this.checkMsg('basic_RailhortopfrontDepth'); return this._basic_RailhortopfrontDepth; }
  _basic_RailhortopfrontThk: number = 19;
  get basic_RailhortopfrontThk(): number { this.checkMsg('basic_RailhortopfrontThk'); return this._basic_RailhortopfrontThk; }
  _basic_RailhortopbackDepth: number = 120;
  get basic_RailhortopbackDepth(): number { this.checkMsg('basic_RailhortopbackDepth'); return this._basic_RailhortopbackDepth; }
  _basic_RailhortopbackThk: number = 19;
  get basic_RailhortopbackThk(): number { this.checkMsg('basic_RailhortopbackThk'); return this._basic_RailhortopbackThk; }
  _basic_RailverttopfrontHeight: number = 120;
  get basic_RailverttopfrontHeight(): number { this.checkMsg('basic_RailverttopfrontHeight'); return this._basic_RailverttopfrontHeight; }
  _basic_RailverttopfrontThk: number = 19;
  get basic_RailverttopfrontThk(): number { this.checkMsg('basic_RailverttopfrontThk'); return this._basic_RailverttopfrontThk; }
  _basic_RailverttopbackHeight: number = 120;
  get basic_RailverttopbackHeight(): number { this.checkMsg('basic_RailverttopbackHeight'); return this._basic_RailverttopbackHeight; }
  _basic_RailverttopbackThk: number = 19;
  get basic_RailverttopbackThk(): number { this.checkMsg('basic_RailverttopbackThk'); return this._basic_RailverttopbackThk; }
  _basic_ShelfbtmOffsetBtm: number = 0.5;
  get basic_ShelfbtmOffsetBtm(): number { this.checkMsg('basic_ShelfbtmOffsetBtm'); return this._basic_ShelfbtmOffsetBtm; }
  _basic_ShelfbtmThk: number = 19;
  get basic_ShelfbtmThk(): number { this.checkMsg('basic_ShelfbtmThk'); return this._basic_ShelfbtmThk; }
  _basic_SidepanelOffsetSide: number = 0.5;
  get basic_SidepanelOffsetSide(): number { this.checkMsg('basic_SidepanelOffsetSide'); return this._basic_SidepanelOffsetSide; }
  _basic_BackwallRemovableGapVert: number = 5;
  get basic_BackwallRemovableGapVert(): number { this.checkMsg('basic_BackwallRemovableGapVert'); return this._basic_BackwallRemovableGapVert; }
  _basic_BackwallRemovableGapHor: number = 5;
  get basic_BackwallRemovableGapHor(): number { this.checkMsg('basic_BackwallRemovableGapHor'); return this._basic_BackwallRemovableGapHor; }
  _basic_BackwallGrooveGapDepth: number = 0.5;
  get basic_BackwallGrooveGapDepth(): number { this.checkMsg('basic_BackwallGrooveGapDepth'); return this._basic_BackwallGrooveGapDepth; }
  _basic_BackwallGrooveGapThk: number = 0.3;
  get basic_BackwallGrooveGapThk(): number { this.checkMsg('basic_BackwallGrooveGapThk'); return this._basic_BackwallGrooveGapThk; }
  _basic_BackwallGrooveDepthVertOutside: number = 10;
  get basic_BackwallGrooveDepthVertOutside(): number { this.checkMsg('basic_BackwallGrooveDepthVertOutside'); return this._basic_BackwallGrooveDepthVertOutside; }
  _basic_BackwallGrooveDepthVertMidside: number = 0;
  get basic_BackwallGrooveDepthVertMidside(): number { this.checkMsg('basic_BackwallGrooveDepthVertMidside'); return this._basic_BackwallGrooveDepthVertMidside; }
  _basic_BackwallGrooveDepthHorOutside: number = 5;
  get basic_BackwallGrooveDepthHorOutside(): number { this.checkMsg('basic_BackwallGrooveDepthHorOutside'); return this._basic_BackwallGrooveDepthHorOutside; }
  _basic_BackwallGrooveDepthHorMidside: number = 0;
  get basic_BackwallGrooveDepthHorMidside(): number { this.checkMsg('basic_BackwallGrooveDepthHorMidside'); return this._basic_BackwallGrooveDepthHorMidside; }
  _basic_BackwallRabbetDepthVert: number = 0;
  get basic_BackwallRabbetDepthVert(): number { this.checkMsg('basic_BackwallRabbetDepthVert'); return this._basic_BackwallRabbetDepthVert; }
  _basic_BackwallRabbetDepthHor: number = 0;
  get basic_BackwallRabbetDepthHor(): number { this.checkMsg('basic_BackwallRabbetDepthHor'); return this._basic_BackwallRabbetDepthHor; }
  _basic_BackwallRabbetThk: number = 0;
  get basic_BackwallRabbetThk(): number { this.checkMsg('basic_BackwallRabbetThk'); return this._basic_BackwallRabbetThk; }
  _basic_BackwallRabbetGapDepthVert: number = 0;
  get basic_BackwallRabbetGapDepthVert(): number { this.checkMsg('basic_BackwallRabbetGapDepthVert'); return this._basic_BackwallRabbetGapDepthVert; }
  _basic_BackwallRabbetGapDepthHor: number = 0;
  get basic_BackwallRabbetGapDepthHor(): number { this.checkMsg('basic_BackwallRabbetGapDepthHor'); return this._basic_BackwallRabbetGapDepthHor; }
  _basic_BackwallTruncateOffsetBack: number = 0;
  get basic_BackwallTruncateOffsetBack(): number { this.checkMsg('basic_BackwallTruncateOffsetBack'); return this._basic_BackwallTruncateOffsetBack; }
  _basic_BackwallTruncateGapVert: number = 0;
  get basic_BackwallTruncateGapVert(): number { this.checkMsg('basic_BackwallTruncateGapVert'); return this._basic_BackwallTruncateGapVert; }
  _basic_BackwallTruncateGapHor: number = 0;
  get basic_BackwallTruncateGapHor(): number { this.checkMsg('basic_BackwallTruncateGapHor'); return this._basic_BackwallTruncateGapHor; }
  _basic_FrontGapCarcase: number = 2;
  get basic_FrontGapCarcase(): number { this.checkMsg('basic_FrontGapCarcase'); return this._basic_FrontGapCarcase; }
  _basic_BackwallThk: number = 8;
  get basic_BackwallThk(): number { this.checkMsg('basic_BackwallThk'); return this._basic_BackwallThk; }
  _basic_FrontGapVert: number = 6;
  get basic_FrontGapVert(): number { this.checkMsg('basic_FrontGapVert'); return this._basic_FrontGapVert; }
  _basic_FrontGapHor: number = 4;
  get basic_FrontGapHor(): number { this.checkMsg('basic_FrontGapHor'); return this._basic_FrontGapHor; }
  _basic_FrontPosStart: number = 0;
  get basic_FrontPosStart(): number { this.checkMsg('basic_FrontPosStart'); return this._basic_FrontPosStart; }
  _basic_RailhortopOffsetTop: number = 0.5;
  get basic_RailhortopOffsetTop(): number { this.checkMsg('basic_RailhortopOffsetTop'); return this._basic_RailhortopOffsetTop; }
  _basic_RailverttopOffsetTop: number = 0.5;
  get basic_RailverttopOffsetTop(): number { this.checkMsg('basic_RailverttopOffsetTop'); return this._basic_RailverttopOffsetTop; }
  _basic_ShelftopOffsetSide: number = 0.5;
  get basic_ShelftopOffsetSide(): number { this.checkMsg('basic_ShelftopOffsetSide'); return this._basic_ShelftopOffsetSide; }
  _basic_RailhortopfrontOffsetFront: number = 0;
  get basic_RailhortopfrontOffsetFront(): number { this.checkMsg('basic_RailhortopfrontOffsetFront'); return this._basic_RailhortopfrontOffsetFront; }
  _basic_RailhortopbackOffsetBack: number = 0;
  get basic_RailhortopbackOffsetBack(): number { this.checkMsg('basic_RailhortopbackOffsetBack'); return this._basic_RailhortopbackOffsetBack; }
  _basic_RailverttopfrontOffsetFront: number = 0;
  get basic_RailverttopfrontOffsetFront(): number { this.checkMsg('basic_RailverttopfrontOffsetFront'); return this._basic_RailverttopfrontOffsetFront; }
  _basic_RailverttopbackOffsetBack: number = 0;
  get basic_RailverttopbackOffsetBack(): number { this.checkMsg('basic_RailverttopbackOffsetBack'); return this._basic_RailverttopbackOffsetBack; }
  _basic_ShelfbtmOffsetSide: number = 0;
  get basic_ShelfbtmOffsetSide(): number { this.checkMsg('basic_ShelfbtmOffsetSide'); return this._basic_ShelfbtmOffsetSide; }
  _basic_SidepanelOffsetBtm: number = 0;
  get basic_SidepanelOffsetBtm(): number { this.checkMsg('basic_SidepanelOffsetBtm'); return this._basic_SidepanelOffsetBtm; }
  _basic_SidepanelOffsetFront: number = 0.5;
  get basic_SidepanelOffsetFront(): number { this.checkMsg('basic_SidepanelOffsetFront'); return this._basic_SidepanelOffsetFront; }
  _basic_SidepanelOffsetBack: number = 0;
  get basic_SidepanelOffsetBack(): number { this.checkMsg('basic_SidepanelOffsetBack'); return this._basic_SidepanelOffsetBack; }
  _basic_SidepanelOffsetTop: number = 0;
  get basic_SidepanelOffsetTop(): number { this.checkMsg('basic_SidepanelOffsetTop'); return this._basic_SidepanelOffsetTop; }
  _basic_CarcaseFrontConstruction: string = "FrontInlayLBRT";
  get basic_CarcaseFrontConstruction(): string { this.checkMsg('basic_CarcaseFrontConstruction'); return this._basic_CarcaseFrontConstruction; }
  _basic_CarcaseOversizeInsideWall: number = 0;
  get basic_CarcaseOversizeInsideWall(): number { this.checkMsg('basic_CarcaseOversizeInsideWall'); return this._basic_CarcaseOversizeInsideWall; }
  _basic_CutSuspendSide: boolean = false;
  get basic_CutSuspendSide(): boolean { this.checkMsg('basic_CutSuspendSide'); return this._basic_CutSuspendSide; }
  _basic_HandleLine: number = 1050;
  get basic_HandleLine(): number { this.checkMsg('basic_HandleLine'); return this._basic_HandleLine; }
  _basic_CarcaseOversizeInlayedFront: number = 1;
  get basic_CarcaseOversizeInlayedFront(): number { this.checkMsg('basic_CarcaseOversizeInlayedFront'); return this._basic_CarcaseOversizeInlayedFront; }
  _basic_PlinthAreaHeight: number = 100;
  get basic_PlinthAreaHeight(): number { this.checkMsg('basic_PlinthAreaHeight'); return this._basic_PlinthAreaHeight; }
  _basic_CarcaseShelftopConstruction: string = "ShelfTop";
  get basic_CarcaseShelftopConstruction(): string { this.checkMsg('basic_CarcaseShelftopConstruction'); return this._basic_CarcaseShelftopConstruction; }
  _basic_CarcaseShelfbtmConstruction: string = "ShelfBtm";
  get basic_CarcaseShelfbtmConstruction(): string { this.checkMsg('basic_CarcaseShelfbtmConstruction'); return this._basic_CarcaseShelfbtmConstruction; }
  _basic_FrontThk: number = 19;
  get basic_FrontThk(): number { this.checkMsg('basic_FrontThk'); return this._basic_FrontThk; }
  _basic_ShelfadjDrillDistance: number = 48;
  get basic_ShelfadjDrillDistance(): number { this.checkMsg('basic_ShelfadjDrillDistance'); return this._basic_ShelfadjDrillDistance; }
  _basic_ShelfadjDrillType: string = "SingleDrill";
  get basic_ShelfadjDrillType(): string { this.checkMsg('basic_ShelfadjDrillType'); return this._basic_ShelfadjDrillType; }
  _basic_ShelfadjOffsetFront: number = 10;
  get basic_ShelfadjOffsetFront(): number { this.checkMsg('basic_ShelfadjOffsetFront'); return this._basic_ShelfadjOffsetFront; }
  _basic_ShelfadjOffsetBack: number = 0;
  get basic_ShelfadjOffsetBack(): number { this.checkMsg('basic_ShelfadjOffsetBack'); return this._basic_ShelfadjOffsetBack; }
  _basic_ShelffixedThk: number = 19;
  get basic_ShelffixedThk(): number { this.checkMsg('basic_ShelffixedThk'); return this._basic_ShelffixedThk; }
  _basic_ShelffixedOffsetFront: number = 0;
  get basic_ShelffixedOffsetFront(): number { this.checkMsg('basic_ShelffixedOffsetFront'); return this._basic_ShelffixedOffsetFront; }
  _basic_ShelfadjThk: number = 19;
  get basic_ShelfadjThk(): number { this.checkMsg('basic_ShelfadjThk'); return this._basic_ShelfadjThk; }
  _basic_DrawerBoxProgram: string = "Pure";
  get basic_DrawerBoxProgram(): string { this.checkMsg('basic_DrawerBoxProgram'); return this._basic_DrawerBoxProgram; }
  _basic_DrawerBoxHeightType: string = "Automatic";
  get basic_DrawerBoxHeightType(): string { this.checkMsg('basic_DrawerBoxHeightType'); return this._basic_DrawerBoxHeightType; }
  _basic_DrawerBoxOffsetDepth: number = 0;
  get basic_DrawerBoxOffsetDepth(): number { this.checkMsg('basic_DrawerBoxOffsetDepth'); return this._basic_DrawerBoxOffsetDepth; }
  _basic_DrawerBoxColor: string = "Automatic";
  get basic_DrawerBoxColor(): string { this.checkMsg('basic_DrawerBoxColor'); return this._basic_DrawerBoxColor; }
  _basic_DrawerBoxDepthType: string = "Automatic";
  get basic_DrawerBoxDepthType(): string { this.checkMsg('basic_DrawerBoxDepthType'); return this._basic_DrawerBoxDepthType; }
  _basic_CarcaseBackwallConstruction: string = "Grooved_LBRT";
  get basic_CarcaseBackwallConstruction(): string { this.checkMsg('basic_CarcaseBackwallConstruction'); return this._basic_CarcaseBackwallConstruction; }
  _basic_BackwallFixedHeight: number = 150;
  get basic_BackwallFixedHeight(): number { this.checkMsg('basic_BackwallFixedHeight'); return this._basic_BackwallFixedHeight; }
  _basic_BackwallPos: number = 28;
  get basic_BackwallPos(): number { this.checkMsg('basic_BackwallPos'); return this._basic_BackwallPos; }
  _basic_ShelfadjDrillinglineOffsetBtm: number = 200;
  get basic_ShelfadjDrillinglineOffsetBtm(): number { this.checkMsg('basic_ShelfadjDrillinglineOffsetBtm'); return this._basic_ShelfadjDrillinglineOffsetBtm; }
  _basic_ShelfadjDrillinglineOffsetTop: number = 150;
  get basic_ShelfadjDrillinglineOffsetTop(): number { this.checkMsg('basic_ShelfadjDrillinglineOffsetTop'); return this._basic_ShelfadjDrillinglineOffsetTop; }
  _basic_HangerType: string = "NoHanger";
  get basic_HangerType(): string { this.checkMsg('basic_HangerType'); return this._basic_HangerType; }
  _basic_FlipliftType: string = "FHF";
  get basic_FlipliftType(): string { this.checkMsg('basic_FlipliftType'); return this._basic_FlipliftType; }
  _basic_OpeningType: string = "Handle";
  get basic_OpeningType(): string { this.checkMsg('basic_OpeningType'); return this._basic_OpeningType; }
  _basic_HardwareFlipliftType: string = "No";
  get basic_HardwareFlipliftType(): string { this.checkMsg('basic_HardwareFlipliftType'); return this._basic_HardwareFlipliftType; }
  _basic_HardwareColor: string = "WhiteColor";
  get basic_HardwareColor(): string { this.checkMsg('basic_HardwareColor'); return this._basic_HardwareColor; }
  _basic_ShelvesOffsetBack: number = 0.5;
  get basic_ShelvesOffsetBack(): number { this.checkMsg('basic_ShelvesOffsetBack'); return this._basic_ShelvesOffsetBack; }
  _basic_ShelvesOffsetFront: number = 0.5;
  get basic_ShelvesOffsetFront(): number { this.checkMsg('basic_ShelvesOffsetFront'); return this._basic_ShelvesOffsetFront; }
  _basic_ShelffixedOversizeFront: number = 0;
  get basic_ShelffixedOversizeFront(): number { this.checkMsg('basic_ShelffixedOversizeFront'); return this._basic_ShelffixedOversizeFront; }
  _basic_ShelffixedOversizeBack: number = 0;
  get basic_ShelffixedOversizeBack(): number { this.checkMsg('basic_ShelffixedOversizeBack'); return this._basic_ShelffixedOversizeBack; }
  _basic_HandlePosLogic: string = "HandleLine";
  get basic_HandlePosLogic(): string { this.checkMsg('basic_HandlePosLogic'); return this._basic_HandlePosLogic; }
  _basic_PlinthAreaPosLeftMatrix: string = "LCF";
  get basic_PlinthAreaPosLeftMatrix(): string { this.checkMsg('basic_PlinthAreaPosLeftMatrix'); return this._basic_PlinthAreaPosLeftMatrix; }
  _basic_PlinthAreaPosRightMatrix: string = "RCF";
  get basic_PlinthAreaPosRightMatrix(): string { this.checkMsg('basic_PlinthAreaPosRightMatrix'); return this._basic_PlinthAreaPosRightMatrix; }
  _basic_PlinthAreaPosFrontMatrix: string = "FCR";
  get basic_PlinthAreaPosFrontMatrix(): string { this.checkMsg('basic_PlinthAreaPosFrontMatrix'); return this._basic_PlinthAreaPosFrontMatrix; }
  _basic_PlinthAreaPosBackMatrix: string = "BCF";
  get basic_PlinthAreaPosBackMatrix(): string { this.checkMsg('basic_PlinthAreaPosBackMatrix'); return this._basic_PlinthAreaPosBackMatrix; }
  _basic_PlinthAreaPosLogic: string = "Library";
  get basic_PlinthAreaPosLogic(): string { this.checkMsg('basic_PlinthAreaPosLogic'); return this._basic_PlinthAreaPosLogic; }
  _basic_DrawerBoxDesign: string = "Legrabox";
  get basic_DrawerBoxDesign(): string { this.checkMsg('basic_DrawerBoxDesign'); return this._basic_DrawerBoxDesign; }
  _basic_DrawerBoxLogic: string = "Library";
  get basic_DrawerBoxLogic(): string { this.checkMsg('basic_DrawerBoxLogic'); return this._basic_DrawerBoxLogic; }
  _basic_DrawerBoxWeightType: string = "Automatic";
  get basic_DrawerBoxWeightType(): string { this.checkMsg('basic_DrawerBoxWeightType'); return this._basic_DrawerBoxWeightType; }
  _basic_InteriorEquipmentLogic: string = "Automatic";
  get basic_InteriorEquipmentLogic(): string { this.checkMsg('basic_InteriorEquipmentLogic'); return this._basic_InteriorEquipmentLogic; }
  _basic_ShelfadjDesign: string = "10";
  get basic_ShelfadjDesign(): string { this.checkMsg('basic_ShelfadjDesign'); return this._basic_ShelfadjDesign; }
  _basic_PanelblindThk: number = 19;
  get basic_PanelblindThk(): number { this.checkMsg('basic_PanelblindThk'); return this._basic_PanelblindThk; }
  _basic_CleatThk: number = 20;
  get basic_CleatThk(): number { this.checkMsg('basic_CleatThk'); return this._basic_CleatThk; }
  _basic_CleatWidth: number = 32;
  get basic_CleatWidth(): number { this.checkMsg('basic_CleatWidth'); return this._basic_CleatWidth; }
  _basic_PanelblindPos: number = 22;
  get basic_PanelblindPos(): number { this.checkMsg('basic_PanelblindPos'); return this._basic_PanelblindPos; }
  _basic_CornerunitStraightConstruction: string = "Construction01";
  get basic_CornerunitStraightConstruction(): string { this.checkMsg('basic_CornerunitStraightConstruction'); return this._basic_CornerunitStraightConstruction; }
  _basic_PlinthAreaDesign: string = "30";
  get basic_PlinthAreaDesign(): string { this.checkMsg('basic_PlinthAreaDesign'); return this._basic_PlinthAreaDesign; }
  _basic_PlinthAreaExtraItem: string = "None";
  get basic_PlinthAreaExtraItem(): string { this.checkMsg('basic_PlinthAreaExtraItem'); return this._basic_PlinthAreaExtraItem; }
  _basic_CornerunitStraightFillerConstruction: string = "Construction03";
  get basic_CornerunitStraightFillerConstruction(): string { this.checkMsg('basic_CornerunitStraightFillerConstruction'); return this._basic_CornerunitStraightFillerConstruction; }
  _basic_BlindCornerHingeSpace: number = 75;
  get basic_BlindCornerHingeSpace(): number { this.checkMsg('basic_BlindCornerHingeSpace'); return this._basic_BlindCornerHingeSpace; }
  _basic_FrontGapHorTop: number = 0;
  get basic_FrontGapHorTop(): number { this.checkMsg('basic_FrontGapHorTop'); return this._basic_FrontGapHorTop; }
  _basic_CarcaseBackwallShelfbtmOffset: number = 10;
  get basic_CarcaseBackwallShelfbtmOffset(): number { this.checkMsg('basic_CarcaseBackwallShelfbtmOffset'); return this._basic_CarcaseBackwallShelfbtmOffset; }
  _basic_CarcaseBackwallShelftopOffset: number = 1;
  get basic_CarcaseBackwallShelftopOffset(): number { this.checkMsg('basic_CarcaseBackwallShelftopOffset'); return this._basic_CarcaseBackwallShelftopOffset; }
  _basic_CarcaseBackwallShelffixedOffset: number = 0;
  get basic_CarcaseBackwallShelffixedOffset(): number { this.checkMsg('basic_CarcaseBackwallShelffixedOffset'); return this._basic_CarcaseBackwallShelffixedOffset; }
  _basic_BackwallOverlayedReductionHorTop: number = 1;
  get basic_BackwallOverlayedReductionHorTop(): number { this.checkMsg('basic_BackwallOverlayedReductionHorTop'); return this._basic_BackwallOverlayedReductionHorTop; }
  _basic_BackwallOverlayedReductionHorBtm: number = 1;
  get basic_BackwallOverlayedReductionHorBtm(): number { this.checkMsg('basic_BackwallOverlayedReductionHorBtm'); return this._basic_BackwallOverlayedReductionHorBtm; }
  _basic_BackwallOverlayedReductionHorCenter: number = 5;
  get basic_BackwallOverlayedReductionHorCenter(): number { this.checkMsg('basic_BackwallOverlayedReductionHorCenter'); return this._basic_BackwallOverlayedReductionHorCenter; }
  _basic_BackwallOverlayedReductionVertLeft: number = 3;
  get basic_BackwallOverlayedReductionVertLeft(): number { this.checkMsg('basic_BackwallOverlayedReductionVertLeft'); return this._basic_BackwallOverlayedReductionVertLeft; }
  _basic_BackwallOverlayedReductionVertRight: number = 3;
  get basic_BackwallOverlayedReductionVertRight(): number { this.checkMsg('basic_BackwallOverlayedReductionVertRight'); return this._basic_BackwallOverlayedReductionVertRight; }
  _basic_CarcaseConnectionLeftTop: string = "SideCShelf";
  get basic_CarcaseConnectionLeftTop(): string { this.checkMsg('basic_CarcaseConnectionLeftTop'); return this._basic_CarcaseConnectionLeftTop; }
  _basic_CarcaseConnectionLeftBtm: string = "SideCShelf";
  get basic_CarcaseConnectionLeftBtm(): string { this.checkMsg('basic_CarcaseConnectionLeftBtm'); return this._basic_CarcaseConnectionLeftBtm; }
  _basic_CarcaseConnectionRightTop: string = "SideCShelf";
  get basic_CarcaseConnectionRightTop(): string { this.checkMsg('basic_CarcaseConnectionRightTop'); return this._basic_CarcaseConnectionRightTop; }
  _basic_CarcaseConnectionRightBtm: string = "SideCShelf";
  get basic_CarcaseConnectionRightBtm(): string { this.checkMsg('basic_CarcaseConnectionRightBtm'); return this._basic_CarcaseConnectionRightBtm; }
  _basic_ShelvesBackwallFittingConnection: string = "Screws";
  get basic_ShelvesBackwallFittingConnection(): string { this.checkMsg('basic_ShelvesBackwallFittingConnection'); return this._basic_ShelvesBackwallFittingConnection; }
  _basic_FittingConnectionLeftBtm: string = "Dowel";
  get basic_FittingConnectionLeftBtm(): string { this.checkMsg('basic_FittingConnectionLeftBtm'); return this._basic_FittingConnectionLeftBtm; }
  _basic_FittingConnectionLeftTop: string = "Dowel";
  get basic_FittingConnectionLeftTop(): string { this.checkMsg('basic_FittingConnectionLeftTop'); return this._basic_FittingConnectionLeftTop; }
  _basic_FittingConnectionLeftHor: string = "Dowel";
  get basic_FittingConnectionLeftHor(): string { this.checkMsg('basic_FittingConnectionLeftHor'); return this._basic_FittingConnectionLeftHor; }
  _basic_FittingConnectionRightBtm: string = "Dowel";
  get basic_FittingConnectionRightBtm(): string { this.checkMsg('basic_FittingConnectionRightBtm'); return this._basic_FittingConnectionRightBtm; }
  _basic_FittingConnectionRightTop: string = "Dowel";
  get basic_FittingConnectionRightTop(): string { this.checkMsg('basic_FittingConnectionRightTop'); return this._basic_FittingConnectionRightTop; }
  _basic_FittingConnectionRightHor: string = "Dowel";
  get basic_FittingConnectionRightHor(): string { this.checkMsg('basic_FittingConnectionRightHor'); return this._basic_FittingConnectionRightHor; }
  _basic_CarcasePartConnectionLeftHor: string = "SideCShelf";
  get basic_CarcasePartConnectionLeftHor(): string { this.checkMsg('basic_CarcasePartConnectionLeftHor'); return this._basic_CarcasePartConnectionLeftHor; }
  _basic_CarcasePartConnectionRightHor: string = "SideCShelf";
  get basic_CarcasePartConnectionRightHor(): string { this.checkMsg('basic_CarcasePartConnectionRightHor'); return this._basic_CarcasePartConnectionRightHor; }
  _basic_CarcasePartConnectionBackHor: string = "BackwallCShelf";
  get basic_CarcasePartConnectionBackHor(): string { this.checkMsg('basic_CarcasePartConnectionBackHor'); return this._basic_CarcasePartConnectionBackHor; }
  _basic_CarcasePartConnectionTopVert: string = "ShelfCSide";
  get basic_CarcasePartConnectionTopVert(): string { this.checkMsg('basic_CarcasePartConnectionTopVert'); return this._basic_CarcasePartConnectionTopVert; }
  _basic_CarcasePartConnectionBtmVert: string = "ShelfCSide";
  get basic_CarcasePartConnectionBtmVert(): string { this.checkMsg('basic_CarcasePartConnectionBtmVert'); return this._basic_CarcasePartConnectionBtmVert; }
  _basic_CarcasePartConnectionBackVert: string = "BackwallCSide";
  get basic_CarcasePartConnectionBackVert(): string { this.checkMsg('basic_CarcasePartConnectionBackVert'); return this._basic_CarcasePartConnectionBackVert; }
  _basic_FittingConnectionTopVert: string = "Dowel";
  get basic_FittingConnectionTopVert(): string { this.checkMsg('basic_FittingConnectionTopVert'); return this._basic_FittingConnectionTopVert; }
  _basic_FittingConnectionBtmVert: string = "Dowel";
  get basic_FittingConnectionBtmVert(): string { this.checkMsg('basic_FittingConnectionBtmVert'); return this._basic_FittingConnectionBtmVert; }
  _basic_RackAreaType: string = "Adj";
  get basic_RackAreaType(): string { this.checkMsg('basic_RackAreaType'); return this._basic_RackAreaType; }
  _basic_RackAreaOversizeCarcaseType: string = "FlexibleOversize";
  get basic_RackAreaOversizeCarcaseType(): string { this.checkMsg('basic_RackAreaOversizeCarcaseType'); return this._basic_RackAreaOversizeCarcaseType; }
  _basic_RackAreaDepthFixedCarcase: number = 15;
  get basic_RackAreaDepthFixedCarcase(): number { this.checkMsg('basic_RackAreaDepthFixedCarcase'); return this._basic_RackAreaDepthFixedCarcase; }
  _basic_RackAreaManualOffsetCarcase: number = 0;
  get basic_RackAreaManualOffsetCarcase(): number { this.checkMsg('basic_RackAreaManualOffsetCarcase'); return this._basic_RackAreaManualOffsetCarcase; }
  _basic_RackAreaOversizeAutomaticCarcaseType: boolean = false;
  get basic_RackAreaOversizeAutomaticCarcaseType(): boolean { this.checkMsg('basic_RackAreaOversizeAutomaticCarcaseType'); return this._basic_RackAreaOversizeAutomaticCarcaseType; }
  _basic_VertDividerType: string = "Automatic";
  get basic_VertDividerType(): string { this.checkMsg('basic_VertDividerType'); return this._basic_VertDividerType; }
  _basic_OffsetFrontVertDivider: number = 0.5;
  get basic_OffsetFrontVertDivider(): number { this.checkMsg('basic_OffsetFrontVertDivider'); return this._basic_OffsetFrontVertDivider; }
  _basic_SidepanelmiddleShortWidth: number = 47;
  get basic_SidepanelmiddleShortWidth(): number { this.checkMsg('basic_SidepanelmiddleShortWidth'); return this._basic_SidepanelmiddleShortWidth; }
  _basic_RackAreaShelftopConstruction: string = "Automatic";
  get basic_RackAreaShelftopConstruction(): string { this.checkMsg('basic_RackAreaShelftopConstruction'); return this._basic_RackAreaShelftopConstruction; }
  _basic_SidepanelmiddleThk: number = 19;
  get basic_SidepanelmiddleThk(): number { this.checkMsg('basic_SidepanelmiddleThk'); return this._basic_SidepanelmiddleThk; }
  _basic_DuststripHeightReduction: number = 2;
  get basic_DuststripHeightReduction(): number { this.checkMsg('basic_DuststripHeightReduction'); return this._basic_DuststripHeightReduction; }
  _basic_DoorType: string = "Automatic";
  get basic_DoorType(): string { this.checkMsg('basic_DoorType'); return this._basic_DoorType; }
  _basic_DoorDirection: string = "Automatic";
  get basic_DoorDirection(): string { this.checkMsg('basic_DoorDirection'); return this._basic_DoorDirection; }
  _basic_CountertopConnectionOversize: number = 20;
  get basic_CountertopConnectionOversize(): number { this.checkMsg('basic_CountertopConnectionOversize'); return this._basic_CountertopConnectionOversize; }
  _basic_FrontpanelWeightLogic: string = "Library";
  get basic_FrontpanelWeightLogic(): string { this.checkMsg('basic_FrontpanelWeightLogic'); return this._basic_FrontpanelWeightLogic; }
  _basic_PartgroupDrawerWeightLogic: string = "Library";
  get basic_PartgroupDrawerWeightLogic(): string { this.checkMsg('basic_PartgroupDrawerWeightLogic'); return this._basic_PartgroupDrawerWeightLogic; }
  _basic_PushtoopenLine: number = 1050;
  get basic_PushtoopenLine(): number { this.checkMsg('basic_PushtoopenLine'); return this._basic_PushtoopenLine; }
  _basic_PushtoopenColor: string = "DemoGrey";
  get basic_PushtoopenColor(): string { this.checkMsg('basic_PushtoopenColor'); return this._basic_PushtoopenColor; }
  _basic_FrontSplitDescriptor: string = "1_1";
  get basic_FrontSplitDescriptor(): string { this.checkMsg('basic_FrontSplitDescriptor'); return this._basic_FrontSplitDescriptor; }
  _basic_FramePartsWidthHor: number = 75;
  get basic_FramePartsWidthHor(): number { this.checkMsg('basic_FramePartsWidthHor'); return this._basic_FramePartsWidthHor; }
  _basic_FramePartsWidthVert: number = 75;
  get basic_FramePartsWidthVert(): number { this.checkMsg('basic_FramePartsWidthVert'); return this._basic_FramePartsWidthVert; }
  _basic_PanelWoodFrameFillingType: string = "Wood";
  get basic_PanelWoodFrameFillingType(): string { this.checkMsg('basic_PanelWoodFrameFillingType'); return this._basic_PanelWoodFrameFillingType; }
  _basic_PanelWoodFrameType: string = "HeightCoveredWidth";
  get basic_PanelWoodFrameType(): string { this.checkMsg('basic_PanelWoodFrameType'); return this._basic_PanelWoodFrameType; }
  _basic_FillingGrooveGap: number = 1;
  get basic_FillingGrooveGap(): number { this.checkMsg('basic_FillingGrooveGap'); return this._basic_FillingGrooveGap; }
  _basic_FramePanelGrooveDepth: number = 10;
  get basic_FramePanelGrooveDepth(): number { this.checkMsg('basic_FramePanelGrooveDepth'); return this._basic_FramePanelGrooveDepth; }
  _basic_FrontDesign: string = "Automatic";
  get basic_FrontDesign(): string { this.checkMsg('basic_FrontDesign'); return this._basic_FrontDesign; }
  _basic_DoubleCutDimension: number = 12;
  get basic_DoubleCutDimension(): number { this.checkMsg('basic_DoubleCutDimension'); return this._basic_DoubleCutDimension; }
  _basic_CountertopOverhangSide: number = 10;
  get basic_CountertopOverhangSide(): number { this.checkMsg('basic_CountertopOverhangSide'); return this._basic_CountertopOverhangSide; }
  _basic_FlipliftLogic: string = "Library";
  get basic_FlipliftLogic(): string { this.checkMsg('basic_FlipliftLogic'); return this._basic_FlipliftLogic; }
  _basic_CountertopThk: number = 25;
  get basic_CountertopThk(): number { this.checkMsg('basic_CountertopThk'); return this._basic_CountertopThk; }
  _basic_CountertopConnectionRadius: number = 6;
  get basic_CountertopConnectionRadius(): number { this.checkMsg('basic_CountertopConnectionRadius'); return this._basic_CountertopConnectionRadius; }
  _basic_CountertopOverhangFront: number = 26;
  get basic_CountertopOverhangFront(): number { this.checkMsg('basic_CountertopOverhangFront'); return this._basic_CountertopOverhangFront; }
  _basic_ToekickReductionTop: number = 10;
  get basic_ToekickReductionTop(): number { this.checkMsg('basic_ToekickReductionTop'); return this._basic_ToekickReductionTop; }
  _basic_ToekickThk: number = 16;
  get basic_ToekickThk(): number { this.checkMsg('basic_ToekickThk'); return this._basic_ToekickThk; }
  _basic_ToekickConnectionOverhang: number = 50;
  get basic_ToekickConnectionOverhang(): number { this.checkMsg('basic_ToekickConnectionOverhang'); return this._basic_ToekickConnectionOverhang; }
  _basic_ToekickSidepanelOverdimensionBtm: number = 0;
  get basic_ToekickSidepanelOverdimensionBtm(): number { this.checkMsg('basic_ToekickSidepanelOverdimensionBtm'); return this._basic_ToekickSidepanelOverdimensionBtm; }
  _basic_ToekickSidepanelTransitionType: string = "FrontShort";
  get basic_ToekickSidepanelTransitionType(): string { this.checkMsg('basic_ToekickSidepanelTransitionType'); return this._basic_ToekickSidepanelTransitionType; }
  _basic_HandlePosType: string = "03";
  get basic_HandlePosType(): string { this.checkMsg('basic_HandlePosType'); return this._basic_HandlePosType; }
  _basic_HandleColor: string = "StainlessSteel";
  get basic_HandleColor(): string { this.checkMsg('basic_HandleColor'); return this._basic_HandleColor; }
  _basic_HandleLength: number = 128;
  get basic_HandleLength(): number { this.checkMsg('basic_HandleLength'); return this._basic_HandleLength; }
  _basic_RailverttopbackPosition: string = "BehindBackwall";
  get basic_RailverttopbackPosition(): string { this.checkMsg('basic_RailverttopbackPosition'); return this._basic_RailverttopbackPosition; }
  _basic_HeatshelfThk: number = 19;
  get basic_HeatshelfThk(): number { this.checkMsg('basic_HeatshelfThk'); return this._basic_HeatshelfThk; }
  _basic_HeatshelfOffsetFront: number = 0.5;
  get basic_HeatshelfOffsetFront(): number { this.checkMsg('basic_HeatshelfOffsetFront'); return this._basic_HeatshelfOffsetFront; }
  _basic_HeatshelfOffsetSide: number = 0.5;
  get basic_HeatshelfOffsetSide(): number { this.checkMsg('basic_HeatshelfOffsetSide'); return this._basic_HeatshelfOffsetSide; }
  _basic_HeatshelfFrontOffsetFront: number = 1;
  get basic_HeatshelfFrontOffsetFront(): number { this.checkMsg('basic_HeatshelfFrontOffsetFront'); return this._basic_HeatshelfFrontOffsetFront; }
  _basic_HeatshelfFrontThk: number = 19;
  get basic_HeatshelfFrontThk(): number { this.checkMsg('basic_HeatshelfFrontThk'); return this._basic_HeatshelfFrontThk; }
  _basic_RailverttopfrontOversize: boolean = true;
  get basic_RailverttopfrontOversize(): boolean { this.checkMsg('basic_RailverttopfrontOversize'); return this._basic_RailverttopfrontOversize; }
  _basic_RailverttopfrontOverdimension: number = 10;
  get basic_RailverttopfrontOverdimension(): number { this.checkMsg('basic_RailverttopfrontOverdimension'); return this._basic_RailverttopfrontOverdimension; }
  _basic_HeatshelfFrontHeightMinimum: number = 30;
  get basic_HeatshelfFrontHeightMinimum(): number { this.checkMsg('basic_HeatshelfFrontHeightMinimum'); return this._basic_HeatshelfFrontHeightMinimum; }
  _basic_RailverttopfrontOverdimensionHeatshelf: number = 5;
  get basic_RailverttopfrontOverdimensionHeatshelf(): number { this.checkMsg('basic_RailverttopfrontOverdimensionHeatshelf'); return this._basic_RailverttopfrontOverdimensionHeatshelf; }
  _basic_TopDepth: number = 150;
  get basic_TopDepth(): number { this.checkMsg('basic_TopDepth'); return this._basic_TopDepth; }
  _basic_SlopedCeilingDimensionLogic: string = "FollowWallMaxHeight";
  get basic_SlopedCeilingDimensionLogic(): string { this.checkMsg('basic_SlopedCeilingDimensionLogic'); return this._basic_SlopedCeilingDimensionLogic; }
  _basic_SlopedCeilingConstruction: string = "Construction01";
  get basic_SlopedCeilingConstruction(): string { this.checkMsg('basic_SlopedCeilingConstruction'); return this._basic_SlopedCeilingConstruction; }
  _basic_SlopedCeilingShelftopOffsetTop: number = 0.5;
  get basic_SlopedCeilingShelftopOffsetTop(): number { this.checkMsg('basic_SlopedCeilingShelftopOffsetTop'); return this._basic_SlopedCeilingShelftopOffsetTop; }
  _basic_SlopedCeilingShelvesOffsetBack: number = 0.5;
  get basic_SlopedCeilingShelvesOffsetBack(): number { this.checkMsg('basic_SlopedCeilingShelvesOffsetBack'); return this._basic_SlopedCeilingShelvesOffsetBack; }
  _basic_SlopedCeilingShelvesOffsetFront: number = 0.5;
  get basic_SlopedCeilingShelvesOffsetFront(): number { this.checkMsg('basic_SlopedCeilingShelvesOffsetFront'); return this._basic_SlopedCeilingShelvesOffsetFront; }
  _basic_SlopedCeilingSidepanelOffsetBack: number = 0.5;
  get basic_SlopedCeilingSidepanelOffsetBack(): number { this.checkMsg('basic_SlopedCeilingSidepanelOffsetBack'); return this._basic_SlopedCeilingSidepanelOffsetBack; }
  _basic_SlopedCeilingSidepanelOffsetFront: number = 0.5;
  get basic_SlopedCeilingSidepanelOffsetFront(): number { this.checkMsg('basic_SlopedCeilingSidepanelOffsetFront'); return this._basic_SlopedCeilingSidepanelOffsetFront; }
  _basic_SlopedCeilingSidepanelOffsetSide: number = 0;
  get basic_SlopedCeilingSidepanelOffsetSide(): number { this.checkMsg('basic_SlopedCeilingSidepanelOffsetSide'); return this._basic_SlopedCeilingSidepanelOffsetSide; }
  _basic_SlopedCeilingShelfbtmOffsetBtm: number = 0.5;
  get basic_SlopedCeilingShelfbtmOffsetBtm(): number { this.checkMsg('basic_SlopedCeilingShelfbtmOffsetBtm'); return this._basic_SlopedCeilingShelfbtmOffsetBtm; }
  _basic_CeilingFillerFittingPanelDepth: number = 80;
  get basic_CeilingFillerFittingPanelDepth(): number { this.checkMsg('basic_CeilingFillerFittingPanelDepth'); return this._basic_CeilingFillerFittingPanelDepth; }
  _basic_PaneltopOversizeBack: number = 20;
  get basic_PaneltopOversizeBack(): number { this.checkMsg('basic_PaneltopOversizeBack'); return this._basic_PaneltopOversizeBack; }
  _basic_PaneltopOverhangFront: number = 23;
  get basic_PaneltopOverhangFront(): number { this.checkMsg('basic_PaneltopOverhangFront'); return this._basic_PaneltopOverhangFront; }
  _basic_CeilingFillerThk: number = 19;
  get basic_CeilingFillerThk(): number { this.checkMsg('basic_CeilingFillerThk'); return this._basic_CeilingFillerThk; }
  _basic_CeilingFillerHeight: number = 150;
  get basic_CeilingFillerHeight(): number { this.checkMsg('basic_CeilingFillerHeight'); return this._basic_CeilingFillerHeight; }
  _basic_CeilingFillerFittingPanelThk: number = 19;
  get basic_CeilingFillerFittingPanelThk(): number { this.checkMsg('basic_CeilingFillerFittingPanelThk'); return this._basic_CeilingFillerFittingPanelThk; }
  _basic_PaneltopThk: number = 19;
  get basic_PaneltopThk(): number { this.checkMsg('basic_PaneltopThk'); return this._basic_PaneltopThk; }
  _basic_SlopedCeilingBackwallOverlayedReductionVertLeft: number = 0;
  get basic_SlopedCeilingBackwallOverlayedReductionVertLeft(): number { this.checkMsg('basic_SlopedCeilingBackwallOverlayedReductionVertLeft'); return this._basic_SlopedCeilingBackwallOverlayedReductionVertLeft; }
  _basic_SlopedCeilingBackwallOverlayedReductionVertRight: number = 0;
  get basic_SlopedCeilingBackwallOverlayedReductionVertRight(): number { this.checkMsg('basic_SlopedCeilingBackwallOverlayedReductionVertRight'); return this._basic_SlopedCeilingBackwallOverlayedReductionVertRight; }
  _basic_GrooveThroughOversizeSecurityDistance: number = 150;
  get basic_GrooveThroughOversizeSecurityDistance(): number { this.checkMsg('basic_GrooveThroughOversizeSecurityDistance'); return this._basic_GrooveThroughOversizeSecurityDistance; }
  _basic_FillerDepth: number = 150;
  get basic_FillerDepth(): number { this.checkMsg('basic_FillerDepth'); return this._basic_FillerDepth; }
  _basic_SlopedCeilingShelftopDepthMin: number = 120;
  get basic_SlopedCeilingShelftopDepthMin(): number { this.checkMsg('basic_SlopedCeilingShelftopDepthMin'); return this._basic_SlopedCeilingShelftopDepthMin; }
  _basic_SlopedCeilingHeightReduction: number = 30;
  get basic_SlopedCeilingHeightReduction(): number { this.checkMsg('basic_SlopedCeilingHeightReduction'); return this._basic_SlopedCeilingHeightReduction; }
  _basic_DrawingCanvasMargin: number = 50;
  get basic_DrawingCanvasMargin(): number { this.checkMsg('basic_DrawingCanvasMargin'); return this._basic_DrawingCanvasMargin; }
  _basic_DrawingCanvasWidth: number = 1920;
  get basic_DrawingCanvasWidth(): number { this.checkMsg('basic_DrawingCanvasWidth'); return this._basic_DrawingCanvasWidth; }
  _basic_DrawingColorFillDrillHorizontal: string = "#ffffc6";
  get basic_DrawingColorFillDrillHorizontal(): string { this.checkMsg('basic_DrawingColorFillDrillHorizontal'); return this._basic_DrawingColorFillDrillHorizontal; }
  _basic_DrawingColorFillDrillVertical: string = "gray";
  get basic_DrawingColorFillDrillVertical(): string { this.checkMsg('basic_DrawingColorFillDrillVertical'); return this._basic_DrawingColorFillDrillVertical; }
  _basic_DrawingColorFillError: string = "#FF0000";
  get basic_DrawingColorFillError(): string { this.checkMsg('basic_DrawingColorFillError'); return this._basic_DrawingColorFillError; }
  _basic_DrawingColorFillGroove: string = "#7fff8e";
  get basic_DrawingColorFillGroove(): string { this.checkMsg('basic_DrawingColorFillGroove'); return this._basic_DrawingColorFillGroove; }
  _basic_DrawingColorFillPart: string = "#EEEEEE";
  get basic_DrawingColorFillPart(): string { this.checkMsg('basic_DrawingColorFillPart'); return this._basic_DrawingColorFillPart; }
  _basic_DrawingColorFillPocket: string = "#7fc9ff";
  get basic_DrawingColorFillPocket(): string { this.checkMsg('basic_DrawingColorFillPocket'); return this._basic_DrawingColorFillPocket; }
  _basic_DrawingColorStrokeFeature: string = "#000000";
  get basic_DrawingColorStrokeFeature(): string { this.checkMsg('basic_DrawingColorStrokeFeature'); return this._basic_DrawingColorStrokeFeature; }
  _basic_DrawingColorStrokeAnnotation: string = "#000000";
  get basic_DrawingColorStrokeAnnotation(): string { this.checkMsg('basic_DrawingColorStrokeAnnotation'); return this._basic_DrawingColorStrokeAnnotation; }
  _basic_DrawingColorStrokeDashedReferenceLine: string = "#999999";
  get basic_DrawingColorStrokeDashedReferenceLine(): string { this.checkMsg('basic_DrawingColorStrokeDashedReferenceLine'); return this._basic_DrawingColorStrokeDashedReferenceLine; }
  _basic_DrawingAnnotationDrawDashedReferenceLines: boolean = true;
  get basic_DrawingAnnotationDrawDashedReferenceLines(): boolean { this.checkMsg('basic_DrawingAnnotationDrawDashedReferenceLines'); return this._basic_DrawingAnnotationDrawDashedReferenceLines; }
  _basic_DrawingAnnotationReferenceLineDashLength: number = 5;
  get basic_DrawingAnnotationReferenceLineDashLength(): number { this.checkMsg('basic_DrawingAnnotationReferenceLineDashLength'); return this._basic_DrawingAnnotationReferenceLineDashLength; }
  _basic_DrawingAnnotationFontFamily: string = "Arial narrow";
  get basic_DrawingAnnotationFontFamily(): string { this.checkMsg('basic_DrawingAnnotationFontFamily'); return this._basic_DrawingAnnotationFontFamily; }
  _basic_DrawingAnnotationFontSize: number = 13;
  get basic_DrawingAnnotationFontSize(): number { this.checkMsg('basic_DrawingAnnotationFontSize'); return this._basic_DrawingAnnotationFontSize; }
  _basic_DrawingAnnotationStrokeWidth: number = 0.5;
  get basic_DrawingAnnotationStrokeWidth(): number { this.checkMsg('basic_DrawingAnnotationStrokeWidth'); return this._basic_DrawingAnnotationStrokeWidth; }
  _basic_DrawingTableStrokeWidth: number = 1;
  get basic_DrawingTableStrokeWidth(): number { this.checkMsg('basic_DrawingTableStrokeWidth'); return this._basic_DrawingTableStrokeWidth; }
  _basic_DrawingFeatureStrokeWidth: number = 1;
  get basic_DrawingFeatureStrokeWidth(): number { this.checkMsg('basic_DrawingFeatureStrokeWidth'); return this._basic_DrawingFeatureStrokeWidth; }
  _basic_DrawingAnnotationTextOffsetY: number = 5;
  get basic_DrawingAnnotationTextOffsetY(): number { this.checkMsg('basic_DrawingAnnotationTextOffsetY'); return this._basic_DrawingAnnotationTextOffsetY; }
  _basic_DrawingAnnotationSpacing: number = 5;
  get basic_DrawingAnnotationSpacing(): number { this.checkMsg('basic_DrawingAnnotationSpacing'); return this._basic_DrawingAnnotationSpacing; }
  _basic_DrawingAnnotationVerticalLineLength: number = 10;
  get basic_DrawingAnnotationVerticalLineLength(): number { this.checkMsg('basic_DrawingAnnotationVerticalLineLength'); return this._basic_DrawingAnnotationVerticalLineLength; }
  _basic_DrawingAnnotationTextDecimalSpaces: number = 2;
  get basic_DrawingAnnotationTextDecimalSpaces(): number { this.checkMsg('basic_DrawingAnnotationTextDecimalSpaces'); return this._basic_DrawingAnnotationTextDecimalSpaces; }
  _basic_DrawingCanvasMaxZoom: number = 2;
  get basic_DrawingCanvasMaxZoom(): number { this.checkMsg('basic_DrawingCanvasMaxZoom'); return this._basic_DrawingCanvasMaxZoom; }
  _basic_DrawingAnnotationFirstAnnotationDistance: number = 25;
  get basic_DrawingAnnotationFirstAnnotationDistance(): number { this.checkMsg('basic_DrawingAnnotationFirstAnnotationDistance'); return this._basic_DrawingAnnotationFirstAnnotationDistance; }
  _basic_DrawingTableMarginHorizontal: number = 100;
  get basic_DrawingTableMarginHorizontal(): number { this.checkMsg('basic_DrawingTableMarginHorizontal'); return this._basic_DrawingTableMarginHorizontal; }
  _basic_DrawingTableMarginVertical: number = 5;
  get basic_DrawingTableMarginVertical(): number { this.checkMsg('basic_DrawingTableMarginVertical'); return this._basic_DrawingTableMarginVertical; }
  _basic_DrawingTableColorHeaderFill: string = "#EEEEEE";
  get basic_DrawingTableColorHeaderFill(): string { this.checkMsg('basic_DrawingTableColorHeaderFill'); return this._basic_DrawingTableColorHeaderFill; }
  _basic_DrawingCanvasBackgroundColor: string = "#FFFFFF";
  get basic_DrawingCanvasBackgroundColor(): string { this.checkMsg('basic_DrawingCanvasBackgroundColor'); return this._basic_DrawingCanvasBackgroundColor; }
  _basic_DrawingCanvasEdgeColor: string = "magenta";
  get basic_DrawingCanvasEdgeColor(): string { this.checkMsg('basic_DrawingCanvasEdgeColor'); return this._basic_DrawingCanvasEdgeColor; }
  _basic_CreateBom: string = "Library";
  get basic_CreateBom(): string { this.checkMsg('basic_CreateBom'); return this._basic_CreateBom; }
  _basic_GrainLogic: string = "Library";
  get basic_GrainLogic(): string { this.checkMsg('basic_GrainLogic'); return this._basic_GrainLogic; }
  setRootModuleData(root: any) {
    try {
  // ###############################################################
  // ####################### CUSTOM SCRIPTS ########################
  // ###############################################################
  // ###############################################################
  // ################### END CUSTOM SCRIPTS ########################
  // ###############################################################
      this.setExceptions(root);
    } 
    catch (error) {
      if (error instanceof Error) {
        logError(error.message + "\n" + error.stack);
      } else {
        logError(JSON.stringify(error, null, 4));
      }
    }
  } // setRootModuleData
  setExceptions(root:any) {
    const ev = new ExceptionVariants();
    if(myGetPropertyDescriptor(root, 'mod_TypeElement')?.get){ ev.mod_TypeElement = root.mod_TypeElement; }
    const evbasic_ShelfadjThk = new ExceptionVariantsbasic_ShelfadjThk(ev);
    if(myGetPropertyDescriptor(root, 'mod_Width')?.get){ evbasic_ShelfadjThk.mod_Width = root.mod_Width; }
    const evbasic_HardwareColor = new ExceptionVariantsbasic_HardwareColor(ev);
    if(myGetPropertyDescriptor(root, 'mod_CarcaseColor')?.get){ evbasic_HardwareColor.mod_CarcaseColor = root.mod_CarcaseColor; }
    const evbasic_PanelWoodFrameType = new ExceptionVariantsbasic_PanelWoodFrameType(ev);
    if(myGetPropertyDescriptor(root, 'mod_FrontProgram')?.get){ evbasic_PanelWoodFrameType.mod_FrontProgram = root.mod_FrontProgram; }
    const evbasic_PanelWoodFrameFillingType = new ExceptionVariantsbasic_PanelWoodFrameFillingType(ev);
    if(myGetPropertyDescriptor(root, 'mod_FrontProgram')?.get){ evbasic_PanelWoodFrameFillingType.mod_FrontProgram = root.mod_FrontProgram; }
    const evbasic_FramePartsWidthHor = new ExceptionVariantsbasic_FramePartsWidthHor(ev);
    if(myGetPropertyDescriptor(root, 'mod_FrontProgram')?.get){ evbasic_FramePartsWidthHor.mod_FrontProgram = root.mod_FrontProgram; }
    const evbasic_FramePartsWidthVert = new ExceptionVariantsbasic_FramePartsWidthVert(ev);
    if(myGetPropertyDescriptor(root, 'mod_FrontProgram')?.get){ evbasic_FramePartsWidthVert.mod_FrontProgram = root.mod_FrontProgram; }
    const evbasic_FrontDesign = new ExceptionVariantsbasic_FrontDesign(ev);
    if(myGetPropertyDescriptor(root, 'mod_FrontProgram')?.get){ evbasic_FrontDesign.mod_FrontProgram = root.mod_FrontProgram; }
    const evbasic_CountertopThk = new ExceptionVariantsbasic_CountertopThk(ev);
    if(myGetPropertyDescriptor(root, 'mod_CountertopProgram')?.get){ evbasic_CountertopThk.mod_CountertopProgram = root.mod_CountertopProgram; }
    const evbasic_PlinthAreaPosLeftMatrix = new ExceptionVariantsbasic_PlinthAreaPosLeftMatrix(ev);
    if(myGetPropertyDescriptor(root, 'mod_PlinthAreaVisLeft')?.get){ evbasic_PlinthAreaPosLeftMatrix.mod_PlinthAreaVisLeft = root.mod_PlinthAreaVisLeft; }
    const evbasic_PlinthAreaPosRightMatrix = new ExceptionVariantsbasic_PlinthAreaPosRightMatrix(ev);
    if(myGetPropertyDescriptor(root, 'mod_PlinthAreaVisRight')?.get){ evbasic_PlinthAreaPosRightMatrix.mod_PlinthAreaVisRight = root.mod_PlinthAreaVisRight; }
    const evbasic_HandleColor = new ExceptionVariantsbasic_HandleColor(ev);
    if(myGetPropertyDescriptor(root, 'mod_HandleDesign')?.get){ evbasic_HandleColor.mod_HandleDesign = root.mod_HandleDesign; }
    const evbasic_HandleLength = new ExceptionVariantsbasic_HandleLength(ev);
    if(myGetPropertyDescriptor(root, 'mod_HandleDesign')?.get){ evbasic_HandleLength.mod_HandleDesign = root.mod_HandleDesign; }
    const evbasic_HandlePosType = new ExceptionVariantsbasic_HandlePosType(ev);
    if(myGetPropertyDescriptor(root, 'mod_FrontProgram')?.get){ evbasic_HandlePosType.mod_FrontProgram = root.mod_FrontProgram; }
    if(myGetPropertyDescriptor(root, 'mod_HandleDesign')?.get){ evbasic_HandlePosType.mod_HandleDesign = root.mod_HandleDesign; }
    {
      const entry = findGlobalVarException<number, ExceptionVariants>(ev, gve_basic_BackwallPos);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_BackwallPos;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_BackwallPos = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_BackwallPos', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_BackwallPos = oldValue;
          this._infoMessages.set('basic_BackwallPos', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_BackwallPos' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_BackwallPos', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_BackwallPos' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariants>(ev, gve_basic_BackwallThk);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_BackwallThk;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_BackwallThk = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_BackwallThk', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_BackwallThk = oldValue;
          this._infoMessages.set('basic_BackwallThk', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_BackwallThk' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_BackwallThk', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_BackwallThk' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariants>(ev, gve_basic_CarcaseBackwallConstruction);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_CarcaseBackwallConstruction;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_CarcaseBackwallConstruction = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_CarcaseBackwallConstruction', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_CarcaseBackwallConstruction = oldValue;
          this._infoMessages.set('basic_CarcaseBackwallConstruction', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_CarcaseBackwallConstruction' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_CarcaseBackwallConstruction', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_CarcaseBackwallConstruction' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariants>(ev, gve_basic_CarcaseShelftopConstruction);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_CarcaseShelftopConstruction;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_CarcaseShelftopConstruction = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_CarcaseShelftopConstruction', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_CarcaseShelftopConstruction = oldValue;
          this._infoMessages.set('basic_CarcaseShelftopConstruction', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_CarcaseShelftopConstruction' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_CarcaseShelftopConstruction', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_CarcaseShelftopConstruction' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariantsbasic_CountertopThk>(evbasic_CountertopThk, gve_basic_CountertopThk);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_CountertopThk;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_CountertopThk = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_CountertopThk', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_CountertopThk = oldValue;
          this._infoMessages.set('basic_CountertopThk', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_CountertopThk' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_CountertopThk', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_CountertopThk.toString() + "): 'basic_CountertopThk' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariants>(ev, gve_basic_FrontGapHorTop);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_FrontGapHorTop;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_FrontGapHorTop = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_FrontGapHorTop', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_FrontGapHorTop = oldValue;
          this._infoMessages.set('basic_FrontGapHorTop', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_FrontGapHorTop' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_FrontGapHorTop', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_FrontGapHorTop' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariantsbasic_HandleColor>(evbasic_HandleColor, gve_basic_HandleColor);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_HandleColor;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_HandleColor = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_HandleColor', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_HandleColor = oldValue;
          this._infoMessages.set('basic_HandleColor', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_HandleColor' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_HandleColor', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_HandleColor.toString() + "): 'basic_HandleColor' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariantsbasic_HandleLength>(evbasic_HandleLength, gve_basic_HandleLength);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_HandleLength;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_HandleLength = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_HandleLength', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_HandleLength = oldValue;
          this._infoMessages.set('basic_HandleLength', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_HandleLength' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_HandleLength', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_HandleLength.toString() + "): 'basic_HandleLength' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariantsbasic_HandlePosType>(evbasic_HandlePosType, gve_basic_HandlePosType);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_HandlePosType;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_HandlePosType = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_HandlePosType', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_HandlePosType = oldValue;
          this._infoMessages.set('basic_HandlePosType', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_HandlePosType' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_HandlePosType', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_HandlePosType.toString() + "): 'basic_HandlePosType' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariants>(ev, gve_basic_HangerType);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_HangerType;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_HangerType = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_HangerType', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_HangerType = oldValue;
          this._infoMessages.set('basic_HangerType', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_HangerType' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_HangerType', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_HangerType' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariantsbasic_HardwareColor>(evbasic_HardwareColor, gve_basic_HardwareColor);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_HardwareColor;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_HardwareColor = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_HardwareColor', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_HardwareColor = oldValue;
          this._infoMessages.set('basic_HardwareColor', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_HardwareColor' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_HardwareColor', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_HardwareColor.toString() + "): 'basic_HardwareColor' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariants>(ev, gve_basic_PlinthAreaDesign);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_PlinthAreaDesign;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_PlinthAreaDesign = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_PlinthAreaDesign', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_PlinthAreaDesign = oldValue;
          this._infoMessages.set('basic_PlinthAreaDesign', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_PlinthAreaDesign' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_PlinthAreaDesign', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_PlinthAreaDesign' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariantsbasic_PlinthAreaPosLeftMatrix>(evbasic_PlinthAreaPosLeftMatrix, gve_basic_PlinthAreaPosLeftMatrix);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_PlinthAreaPosLeftMatrix;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_PlinthAreaPosLeftMatrix = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_PlinthAreaPosLeftMatrix', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_PlinthAreaPosLeftMatrix = oldValue;
          this._infoMessages.set('basic_PlinthAreaPosLeftMatrix', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_PlinthAreaPosLeftMatrix' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_PlinthAreaPosLeftMatrix', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_PlinthAreaPosLeftMatrix.toString() + "): 'basic_PlinthAreaPosLeftMatrix' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariantsbasic_PlinthAreaPosRightMatrix>(evbasic_PlinthAreaPosRightMatrix, gve_basic_PlinthAreaPosRightMatrix);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_PlinthAreaPosRightMatrix;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_PlinthAreaPosRightMatrix = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_PlinthAreaPosRightMatrix', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_PlinthAreaPosRightMatrix = oldValue;
          this._infoMessages.set('basic_PlinthAreaPosRightMatrix', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_PlinthAreaPosRightMatrix' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_PlinthAreaPosRightMatrix', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + evbasic_PlinthAreaPosRightMatrix.toString() + "): 'basic_PlinthAreaPosRightMatrix' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariants>(ev, gve_basic_RailverttopfrontOffsetFront);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_RailverttopfrontOffsetFront;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_RailverttopfrontOffsetFront = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_RailverttopfrontOffsetFront', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_RailverttopfrontOffsetFront = oldValue;
          this._infoMessages.set('basic_RailverttopfrontOffsetFront', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_RailverttopfrontOffsetFront' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_RailverttopfrontOffsetFront', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_RailverttopfrontOffsetFront' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariants>(ev, gve_basic_SidepanelmiddleShortWidth);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_SidepanelmiddleShortWidth;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_SidepanelmiddleShortWidth = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_SidepanelmiddleShortWidth', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_SidepanelmiddleShortWidth = oldValue;
          this._infoMessages.set('basic_SidepanelmiddleShortWidth', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_SidepanelmiddleShortWidth' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_SidepanelmiddleShortWidth', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_SidepanelmiddleShortWidth' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<number, ExceptionVariants>(ev, gve_basic_SidepanelmiddleThk);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_SidepanelmiddleThk;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_SidepanelmiddleThk = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_SidepanelmiddleThk', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined || isNaN(newValue)) {
          this._basic_SidepanelmiddleThk = oldValue;
          this._infoMessages.set('basic_SidepanelmiddleThk', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_SidepanelmiddleThk' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_SidepanelmiddleThk', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_SidepanelmiddleThk' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
    {
      const entry = findGlobalVarException<string, ExceptionVariants>(ev, gve_basic_SlopedCeilingDimensionLogic);
      if (entry !== undefined) {
        let newValue:any;
        const oldValue = this._basic_SlopedCeilingDimensionLogic;
        try {
          newValue = entry.rootValueScript(root);
          this._basic_SlopedCeilingDimensionLogic = newValue;
        }
        catch (e) {
          this._infoMessages.set('basic_SlopedCeilingDimensionLogic', new GlobalVarInfoMessage('Error', `${e}`));
           return;
        }

        if (newValue == null || newValue === undefined) {
          this._basic_SlopedCeilingDimensionLogic = oldValue;
          this._infoMessages.set('basic_SlopedCeilingDimensionLogic', new GlobalVarInfoMessage('Error', `Calculating the exception of 'basic_SlopedCeilingDimensionLogic' does not return a valid result (${newValue})`));
        } else {
          this._infoMessages.set('basic_SlopedCeilingDimensionLogic', new GlobalVarInfoMessage('Info', "Exception used (" + entry.condition.toString() + ") Input (" + ev.toString() + "): 'basic_SlopedCeilingDimensionLogic' is now '" + newValue + "' instead of '" + oldValue +  "'"));
        }
      }
    }
  } // setExceptions

  checkMsg(globalVarId: string) {
    const infoMessage = this._infoMessages.get(globalVarId);
    if (!infoMessage) {
      return;
    }

    if (infoMessage.Type === 'Info') {
      logInfo(infoMessage.Message);
    } else {
      logError(infoMessage.Message);
    }

    this._infoMessages.delete(globalVarId);
  }
}
