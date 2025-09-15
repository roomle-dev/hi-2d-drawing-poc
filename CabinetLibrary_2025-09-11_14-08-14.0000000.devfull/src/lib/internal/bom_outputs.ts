import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'

import { BOM_ElementTypeBase } from './bom/base';
import { PartBase } from './mod-base'
import { GlobalFunc } from './global-func'
import { GlobalVars } from './global-vars'
import { create as xmlbuilder2Create } from 'xmlbuilder2';

export class BomOutputFileEntry {
  constructor(fileName:string, content:string, contentType:string) {
    this.fileName = fileName;
    this.content = content;
    this.contentType = contentType;
  }
  fileName:string;
  content:string;
  contentType:string;
}

class BomOutput {
  constructor(part?: PartBase) {
    this.part = part;
    var wdt = part?.getWDT();
    if (wdt) {
      this.width = wdt[0];      // length
      this.depth = wdt[1];      // width
      this.thickness = wdt[2];  // thickness
    }
  }
  #g: GlobalVars = new GlobalVars();
  get g() { return this.#g; }
  name?:string;
  bomType?:string;
  part?:PartBase;
  width?:number;
  depth?:number;
  thickness?:number;
  createFileEntry(result:Map<string, BomOutputFileEntry>, fileName:string, content:any, contentType:string = "text/plain;charset=utf-8") {
    var bom = new BomOutputFileEntry(fileName, content, contentType);
    if (result.has(fileName)) {
      throw "File '" + fileName + "' is already placed in the output(duplicate)!";
    }
    result.set(fileName, bom);
  }
  createPartOutput(part:PartBase, bomEntries:BOM_ElementTypeBase[]):Map<string,BomOutputFileEntry> {
    return new Map<string,BomOutputFileEntry>();
  }
}

export function createBomOutputById(bom: PartBase[], bomOutputId: string): Map<string, BomOutputFileEntry> {
  var result = new Map<string,BomOutputFileEntry>();
  bom.forEach(part => {
    var bomOutput = createBomOutputInstance(part, bomOutputId);
    var bomFiltered = part._bom.filter(b => b._bomType.toLowerCase() == bomOutput.bomType!.toLowerCase());
    if (bomFiltered.length > 0) {
      var bomOutput = createBomOutputInstance(part, bomOutputId);
      var res = bomOutput.createPartOutput(part, bomFiltered);
      res.forEach((value, key) => {
        if (result.hasOwnProperty(key)) {
          throw "File '" + key + "' is already placed in the output(duplicate)!";
        }
        result.set(key, value);
      });
    }

    if (part._childParts.length > 0) {
      var res2 = createBomOutputById(part._childParts, bomOutputId);
      res2.forEach((value, key) => {
        if (result.hasOwnProperty(key)) {
          throw "File '" + key + "' is already placed in the output(duplicate)!";
        }
        result.set(key, value);
      });
    }
  });
  return result;
}class BOM_Output_Create_Bom extends BomOutput {
  constructor(part?:PartBase) {
    super(part);
    this.name = 'Create_Bom';
    this.bomType = 'BOM';
  }
  override createPartOutput(part:PartBase, bomEntries:BOM_ElementTypeBase[]):Map<string,BomOutputFileEntry> {
    let result = new Map<string,BomOutputFileEntry>();
    internal_enterBomOutput(part._id, part._partId);
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: Juli 2023
// By Ludwig Weber
// Purpose: HOMAG Converter for bom-elements
//
// Description:
// Converts the bom-elements for output as XML-file
//
// Revisions:
// 
//===================================================

//===================================================
// Interface for the bom data
//===================================================

interface BomEntry {
  id: string;
  parent: string;
  partID: string;
  ArticleGroup: string;
  count: number;
  Type: string;
  Name: string;
  width: number;
  depth: number;
  cutLength: number;
  cutWidth: number;
  thickness: number;
  material: string;
  barcode: string;
  grain: number;
  category: string;
  EdgeFront: string;
  EdgeBack: string;
  EdgeLeft: string;
  EdgeRight: string;
  [key: string]: any;
}

//===================================================
// Helper function to map the data from the bom-element to the interface
//===================================================

function mapBomAttributes(attributes: Map<string, any>, part: any, bomCount: number): { entry: BomEntry, extras: string } {
  const entry: Partial<BomEntry> = {
    count: bomCount,
    partID: part._id,
    grain: 0 // Defaultwert
  };

  let extras = '';

  const mapping: Record<string, keyof BomEntry> = {
    bom_ElementType: "Type",
    bom_ParentId: "parent",
    bom_ElementId: "id",
    bom_ArticleGroup: "ArticleGroup",
    bom_Name: "Name",
    bom_BoardId: "material",
    bom_ElementCategory: "category",
    bom_EdgeTransition: "EdgeTransition",
    bom_EdgeFront: "EdgeFront",
    bom_EdgeBack: "EdgeBack",
    bom_EdgeLeft: "EdgeLeft",
    bom_EdgeRight: "EdgeRight",
    bom_Material: "material",
    bom_Length: "width",
    bom_Width: "depth",
    bom_CutDimLength1: "cutLength",
    bom_CutDimWidth1: "cutWidth",
    bom_Finalthk: "thickness",
    bom_Thk: "thickness"
  };

  attributes.forEach((value, key) => {
    if (key === "bom_GrainOrientation") {
      entry.grain = grainStringToNumber(value);
    } else if (mapping[key]) {
      (entry as any)[mapping[key]] = value;
    } else {
      extras += `   ${key}: ${value}\r\n`;
    }
  });

  entry.barcode = `${part._partId}_${part._id}`;

  // Ensure no undefined values
  const defaultValues: BomEntry = {
    id: '',
    parent: '',
    partID: '',
    ArticleGroup: 'notDefined',
    count: 0,
    Type: '',
    Name: '',
    width: 0,
    depth: 0,
    cutLength: 0,
    cutWidth: 0,
    thickness: 0,
    material: '',
    barcode: '',
    grain: 0,
    category: '',
    EdgeTransition: '',
    EdgeFront: '',
    EdgeBack: '',
    EdgeLeft: '',
    EdgeRight: ''
  };

  Object.keys(defaultValues).forEach((key) => {
    if (entry[key as keyof BomEntry] === undefined) {
      entry[key as keyof BomEntry] = defaultValues[key as keyof BomEntry];
    }
  });

  return { entry: entry as BomEntry, extras };
}


//===================================================
// Helper function to map the grain
//===================================================

function grainStringToNumber(grain: string): number {
  switch (grain) {
    case 'L': return 1;
    case 'N': return 0;
    case 'C': return 2;
    default: return 0; // fallback für unbekannte Werte
  }
}

//===================================================
// Cycle through all the bom-elements
//===================================================

let bomCount = 0;

bomEntries.forEach(b => {
  bomCount++;
  const { entry, extras } = mapBomAttributes(b.getAttributes(), part, bomCount);
  this.createFileEntry(result, JSON.stringify(entry), extras);
});
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
    internal_leaveBomOutput();
    return result;
  }
}
class BOM_Output_Create_Drawing extends BomOutput {
  constructor(part?:PartBase) {
    super(part);
    this.name = 'Create_Drawing';
    this.bomType = 'NC';
  }
  override createPartOutput(part:PartBase, bomEntries:BOM_ElementTypeBase[]):Map<string,BomOutputFileEntry> {
    let result = new Map<string,BomOutputFileEntry>();
    internal_enterBomOutput(part._id, part._partId);
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: April 2025
// By Jiri Polcar (Roomle)
// Purpose: HOMAG drawings generation
//
// Description:
// Converts PartElements to drawings
//
//==================================================================================

      const { PartDrawing, SetDrawingOptions } = GlobalFunc.process_DrawingCalculationsApi();

      SetDrawingOptions(this.g);

const partDrawing = new PartDrawing({
  part: part,
  bomEntries: bomEntries,
});

const newSvgCode = partDrawing.svg.toString();
this.createFileEntry(result, part._partId + "_" + part._id + ".svg", newSvgCode);
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
    internal_leaveBomOutput();
    return result;
  }
}
class BOM_Output_Create_Mpr extends BomOutput {
  constructor(part?:PartBase) {
    super(part);
    this.name = 'Create_Mpr';
    this.bomType = 'NC';
  }
  override createPartOutput(part:PartBase, bomEntries:BOM_ElementTypeBase[]):Map<string,BomOutputFileEntry> {
    let result = new Map<string,BomOutputFileEntry>();
    internal_enterBomOutput(part._id, part._partId);
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: Jan 2023
// By Ludwig Weber
// Purpose: HOMAG MPR Converter for tecConfig
//
// Description:
// Converts PartElements to MPR
// It is necessary to use the Standard PartElements for processings inside the library
//
// Revisions:
// 17/11/2023	Joao Lisboa	Adjusted TOOL to nc_Tool and key to key.substring(3)
// 06/09/2024 Ludwig Weber Added functionality MprRelevant to exclude machinings from the MPR
// 13/11/2024 Henning Wiesbrock Added functionality "parseFloat (value.toFixed(2))" to nc_XA amd nc_YA by all processings
// 24/01/2025 Ludwig Weber Added functionality to turn the parts if the ratio of length to width exceeds the value of "rationLengthWidth"
// 03/04/2025 Joao Lisboa Created Sawing Angle (124) + Adjusted dimensions to round to 2 decimals
//===================================================

// Check the tool
let tmpTool = "Nothing";
let mprOutput = true;
let tmpKO = "00";

// Variable to set the border when to turn the parts
let ratioLengthWidth = 0.7;

// Variables of dimensions (to round to 2 decimals)
let width = parseFloat (this.width!.toFixed(2));
let depth = parseFloat (this.depth!.toFixed(2));
let thickness = parseFloat (this.thickness!.toFixed(2));

// Header
let str = "[H" + "\r\n";
str += "Version=\"4.0 Alpha\"" + "\r\n";
str += "OP=\"1\"" + "\r\n";
str += "FM=\"1\"" + "\r\n";
str += "GP=\"0\"" + "\r\n";
str += "UP=\"0\"" + "\r\n";
str += "DW=\"0\"" + "\r\n";
str += "VIEW=\"NOMIRROR\"" + "\r\n";

// Comments
str += "<101 /Kommentar/" + "\r\n";
str += "KM=\"Kommentar\"" + "\r\n";
str += "KM=\"Bauteil: " + part._partId + "\"" +"\r\n";
str += "KM=\"Abmessungen: " + width + "x" + depth + "x" + thickness + " mm\"" + "\r\n";

// Panel-Information
str += "<100 /WerkStck/" + "\r\n";

// Check if we have to turn the part
if(width! < depth! * ratioLengthWidth){
  str += "LA=\"B\"" + "\r\n";
  str += "BR=\"L\"" + "\r\n";
}
else{
  str += "LA=\"L\"" + "\r\n";
  str += "BR=\"B\"" + "\r\n";
}

str += "DI=\"D\"" + "\r\n";
str += "FNX=\"0\"" + "\r\n";
str += "FNY=\"0\"" + "\r\n";
str += "RNX=\"0\"" + "\r\n";
str += "RNY=\"0\"" + "\r\n";
str += "RNZ=\"0\"" + "\r\n";
str += "AX=\"0\"" + "\r\n";
str += "AY=\"0\"" + "\r\n";

// Panel-Variables
str += "[001" + "\r\n";
str += "L=\"" + width + "\"" + "\r\n";
str += "KM=\"Bauteilbreite\"" + "\r\n";
str += "B=\"" + depth + "\"" + "\r\n";
str += "KM=\"Bauteiltiefe\"" + "\r\n";
str += "D=\"" + thickness + "\"" + "\r\n";
str += "KM=\"Bauteildicke\"" + "\r\n";

// New coordinate system in case we have to turn the part
if(width! < depth! * ratioLengthWidth){
  str += "[K" + "\r\n";
  str += "<00 /Koordinatensystem/" + "\r\n";
  str += "NR=\"04\"" + "\r\n";
  str += "XP=\"0\"" + "\r\n";
  str += "XF=\"1.0\"" + "\r\n";
  str += "YP=\"L\"" + "\r\n";
  str += "YF=\"1.0\"" + "\r\n";
  str += "ZP=\"0\"" + "\r\n";
  str += "ZF=\"1.0\"" + "\r\n";
  str += "D1=\"-90\"" + "\r\n";
  str += "KI=\"0\"" + "\r\n";
  str += "D2=\"0\"" + "\r\n";
  str += "MI=\"0\"" + "\r\n";
  tmpKO = "04"
}

// Cycle for the Makros
bomEntries.forEach(b => {

	// Cycle for the tool
	tmpTool = "Nothing";
	b.getAttributes().forEach((value, key) => {
		if(key == "nc_TOOL"){
			tmpTool = value
		}	
    if(key == "nc_MprRelevant"){
      mprOutput = (value === false) ? false : true;
    }
	});

  // Only if the machining should be included in the MPR
  if (mprOutput){

    // Tool 102 drill vertical
    if (tmpTool == "102"){
      
      str += "<102 /BohrVert/" + "\r\n";
      
      // Cycle for the Attributes
      b.getAttributes().forEach((value, key) => {	
        if(key == "nc_TOOL"){
        }
        else if (key == "nc_XA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YA") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_KO") {
          str += `KO="${tmpKO}"\r\n`;         
        }
        else{	
          str +=  key.substring(3) + '="' + value + '"' + "\r\n";
        }
      })
    }

    // Tool 103 drill horizontal
    else if (tmpTool == "103"){
      
      str += "<103 /BohrHoriz/" + "\r\n";
      
      // Cycle for the Attributes
      b.getAttributes().forEach((value, key) => {	
        if(key == "nc_TOOL"){
        }
        else if (key == "nc_XA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YA") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_KO") {
          str += `KO="${tmpKO}"\r\n`;         
        }
        else{	
          str +=  key.substring(3) + '="' + value + '"' + "\r\n";
        }
      })
    }

    // Tool 109 groove
    else if (tmpTool == "109"){
      
      str += "<109 /Nuten/" + "\r\n";
      
      // Cycle for the Attributes
      b.getAttributes().forEach((value, key) => {	
        if(key == "nc_TOOL"){
        }
        else if (key == "nc_XA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YA") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
		else if (key == "nc_XE") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YE") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
		else if (key == "nc_TI") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_NB") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_KO") {
          str += `KO="${tmpKO}"\r\n`;         
        }
        else{	
          str +=  key.substring(3) + '="' + value + '"' + "\r\n";
        }
      })
    }

    // Tool 112 pocket
    else if (tmpTool == "112"){
      
      str += "<112 /Tasche/" + "\r\n";
      
      // Cycle for the Attributes
      b.getAttributes().forEach((value, key) => {	
        if(key == "nc_TOOL"){
        }
        else if (key == "nc_XA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YA") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_LA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_BR") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
		else if (key == "nc_TI") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_KO") {
          str += `KO="${tmpKO}"\r\n`;         
        }
        else{	
          str +=  key.substring(3) + '="' + value + '"' + "\r\n";
        }
      })
    }
	
	// Tool 124 Sawing Angle
    else if (tmpTool == "124"){
      
      str += "<124 /Nut_R/" + "\r\n";
      
      // Cycle for the Attributes
      b.getAttributes().forEach((value, key) => {	
        if(key == "nc_TOOL"){
        }
        else if (key == "nc_XA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YA") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
		else if (key == "nc_XE") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YE") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_KO") {
          str += `KO="${tmpKO}"\r\n`;         
        }
        else{	
          str +=  key.substring(3) + '="' + value + '"' + "\r\n";
        }
      })
    }

    // Tool 139 component (makro)
    else if(tmpTool == "139"){
      str += "<139 /Komponente/" + "\r\n";
        
      // Cycle for the Attributes
      b.getAttributes().forEach((value, key) => {

        if(key == "component"){str += "IN=\"" + value + "\"" + "\r\n"};
        if(key == "posX"){str += "XA=\"" + value + "\"" + "\r\n"};
        if(key == "posY"){
          str += "YA=\"" + value + "\"" + "\r\n";
          str += "VA=\"L L\"" + "\r\n";
          str += "VA=\"B B\"" + "\r\n";
          str += "VA=\"D D\"" + "\r\n";
        };
        if(key == "description"){
          str += "KAT=\"Komponentenmakro\"" + "\r\n";
          str += "MNM=\"" +  value + "\"" + "\r\n";
          str += "ORI=\"2\"" + "\r\n";
          str += `KO="${tmpKO}"\r\n`; 
        }
        else if (key == "nc_XA") {
          str +=  key.substring(3) + '="' + parseFloat (value.toFixed(2)) + '"' + "\r\n";
        }
        else if (key == "nc_YA") {
          str +=  key.substring(3) + '="' + parseFloat(value.toFixed(2)) + '"' + "\r\n";
        }
        else{	
          str += "VA=\"" + key.substring(3) + " " + value + "\"" + "\r\n";
        }
      });
    }
  }
});

// End of File
str += "!" + "\r\n";
str += "!" + "\r\n";

// Write the File 
this.createFileEntry(result, part._partId + "_" + part._id + ".mpr", str);

// Reminder
// str += "  " + b._bomElementTypeId + " (" + b._bomType + ") - " + JSON.stringify(b.a) + "\r\n"
// this.createFileEntry(result, this.name + "_" + this.bomType + "_" + part._id + ".txt", str);
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
    internal_leaveBomOutput();
    return result;
  }
}
class BOM_Output_create_DrawingOld extends BomOutput {
  constructor(part?:PartBase) {
    super(part);
    this.name = 'create_DrawingOld';
    this.bomType = 'NC';
  }
  override createPartOutput(part:PartBase, bomEntries:BOM_ElementTypeBase[]):Map<string,BomOutputFileEntry> {
    let result = new Map<string,BomOutputFileEntry>();
    internal_enterBomOutput(part._id, part._partId);
    try {
    // ###############################################################
    // ####################### CUSTOM SCRIPTS ########################
    // ###############################################################
// Schuler Consulting
// Create: Jan 2023
// By Ludwig Weber
// Purpose: HOMAG drawings generation for tecConfig
//
// Description:
// Converts PartElements to drawings
//
//==================================================================================

//###########################################################################################################################################
// Interfaces and data structures
//###########################################################################################################################################

// Create a map for the attributes (to get the data accessable)
let ncData = {
  Tool: '',
  coorX1: 0,
  coorY1: 0,
  XA: 0,
  XE: 0,
  YA: 0,
  YE: 0,
  DU: 0,
  DUF: 0,
  WI: 0,
  LA: 0,
  LAF: 0,
  BR: 0,
  RD: 0,
  AN: 0,
  AB: 0,
  NB: 0,
  BM: '',
  TI: 0,
  TIF: 0,
  SIDE: ''
};

// Interface to store the drill data for the measurments
interface dataDrills {
  x: number;
  y: number;
  d: number;
  dpt: number;
  side: string;
}
let drillData: dataDrills[] = [];

//###########################################################################################################################################
// Drawing the main element (panel)
//###########################################################################################################################################

//==================================================================================
// Initialize drawing
//==================================================================================

// Zoom-factor
let zoom1:number = Math.ceil(part._width / 1000);
let zoom2:number = Math.ceil(part._depth / 520);
let zoom:number;

if (zoom1 < zoom2){zoom = zoom2;}
else{zoom = zoom1;}
if (zoom < 2){zoom = 2;}

// Start SVG-File
let svgCode:string = '<svg xmlns="http://www.w3.org/2000/svg" width="1980" height="1080"> \n';

// Insert the code for the arrows in the SVG-file
svgCode += '<defs>\n';
svgCode += '<marker id="arrEnd" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">\n';
svgCode += '<path d="M0,0 L6,2 L0,4 z" fill="black" />\n';
svgCode += '</marker>\n';
svgCode += '<marker id="arrStart" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">\n';
svgCode += '<path d="M0,2 L6,0 L6,4 z" fill="black" />\n';
svgCode += '</marker>\n';
svgCode += '</defs>\n';

//==================================================================================
// Drawing the panel
//==================================================================================

// Panel Face1
let X_F1:number = 580-(part._width/zoom)/2;
let Y_F1:number = 440+(part._depth/zoom)/2;
svgCode += '<rect x="' + X_F1 + '" y="' + (Y_F1-(part._depth/zoom)) + '" width="' + part._width/zoom + '" height="' + part._depth/zoom + '" fill="#F2F3F5" stroke="#001941" stroke-width="1"/>\n';

//###########################################################################################################################################
// Drawing the processings
//###########################################################################################################################################

// Cycle through the nc-elements
bomEntries.forEach(b => {
	
	clear_ncData();
// Process the nc-element attributes
	b.getAttributes().forEach((value, key) => {
    processAttributes(value, key);	
	});

  //==================================================================================
  // Drill vertical
  //==================================================================================

  // Translate the drilling side for table and change the color
  let transSide = translateSide(ncData.SIDE);

  //--------------------------------------------------------------------------------
  // Drilling line (length)
  //--------------------------------------------------------------------------------

	if (ncData.Tool == "102"){	
		if(ncData.LAF>0){
			for (let i:number = 0; i <= ncData.LAF/ncData.AB; i++) {
				let Dist:number = ncData.AB/zoom;
				svgCode += '<circle cx="' + (X_F1+ncData.XA) + '" cy="' + (Y_F1-ncData.YA) + '" r="' + (ncData.DU/2) + '" fill="' + transSide[1] + '" stroke="black" />\n';
				ncData.YA += Dist;
        let newDrill: dataDrills = { x: ncData.coorX1, y: ncData.coorY1, d: ncData.DUF, dpt: ncData.TIF, side: transSide[0] };
        drillData.push(newDrill);
			}
		}

    //--------------------------------------------------------------------------------
    // Drilling linke (quantity)
    //--------------------------------------------------------------------------------

    else if (ncData.AN !== undefined && ncData.AN > 1) {
			for (let i:number = 1; i <= ncData.AN; i++) {
				let Dist = ncData.AB/zoom;
        let PosX = ncData.coorX1;
        let PosY = ncData.coorY1;
				svgCode += '<circle cx="' + (X_F1+ncData.XA) + '" cy="' + (Y_F1-ncData.YA) + '" r="' + (ncData.DU/2) + '" fill="' + transSide[1] + '" stroke="black" />\n';

        if(ncData.WI == 90 || ncData.WI == 270){
          ncData.YA += Dist;
          PosY += ncData.AB * (i - 1);         
        }
        else{
          ncData.XA += Dist;
          PosX += ncData.AB * (i - 1); 
        }

        let newDrill: dataDrills = { x: PosX, y: PosY, d: ncData.DUF, dpt: ncData.TIF, side: transSide[0]  };
        drillData.push(newDrill);
			}
		}

    //--------------------------------------------------------------------------------
    // Single drill
    //--------------------------------------------------------------------------------

		else{
			svgCode += '<circle cx="' + (X_F1+ncData.XA) + '" cy="' + (Y_F1-ncData.YA) + '" r="' + (ncData.DU/2) + '" fill="' + transSide[1] + '" stroke="black" />\n';

      let newDrill: dataDrills = { x: ncData.coorX1, y: ncData.coorY1, d: ncData.DUF, dpt: ncData.TIF, side: transSide[0]  };
      drillData.push(newDrill);
		}
	}

  //==================================================================================
  // Other processings
  //==================================================================================

});

//###########################################################################################################################################
// Measurements
//###########################################################################################################################################

//==================================================================================
// Initialize variables
//==================================================================================

let arrPosLeft: [number, number][] = [];
let arrPosRight: [number, number][] = []
let arrPosTop: [number, number][] = [];
let arrPosBottom: [number, number][] = [];
let xarrPosLeft: number[] = [];
let xarrPosRight: number[] = [];
let yarrPosTop: number[] = [];
let yarrPosBottom: number[] = [];
let levelLeft = 1;
let levelBottom = 1;
let i = 0;

//==================================================================================
// Measurments for vertical drills
//==================================================================================

drillData.forEach(drill => {

  //--------------------------------------------------------------------------------
  // Create the arrays for the vertical dimensions  
  //--------------------------------------------------------------------------------

  if (drill.x < part._width/2) {
    arrPosLeft.push([drill.y, drill.x]);
    if (!xarrPosLeft.includes(drill.x)) {
      xarrPosLeft.push(drill.x);
    }
  } else {
    arrPosRight.push([drill.y, drill.x]);
    if (!xarrPosRight.includes(drill.x)) {
      xarrPosRight.push(drill.x);
    }
  }

  //--------------------------------------------------------------------------------
  // Create the arrays for the horizontal dimensions
  //--------------------------------------------------------------------------------

  if (drill.y < part._depth/2) {
    arrPosBottom.push([drill.x, drill.y]);
    if (!yarrPosBottom.includes(drill.y)) {
      yarrPosBottom.push(drill.y);
    }
  } 
  else {
    arrPosTop.push([drill.x, drill.y]);
    if (!yarrPosTop.includes(drill.y)) {
      yarrPosTop.push(drill.y);
    }
  }
});

//----------------------------------------------------------------------------------
// Create an array of the arrays for the cycle
//----------------------------------------------------------------------------------

let arrays = [
  { arr: FilterDuplicates(arrPosLeft), arr2: removeDuplicatesFromArray2(arrPosLeft, xarrPosLeft), oriValue: "vertical", dirValue: "left", boardDim: part._depth },
  { arr: FilterDuplicates(arrPosRight), arr2: removeDuplicatesFromArray2(arrPosRight, xarrPosRight), oriValue: "vertical", dirValue: "right", boardDim: part._depth },
  { arr: FilterDuplicates(arrPosTop), arr2: removeDuplicatesFromArray2(arrPosTop, yarrPosTop), oriValue: "horizontal", dirValue: "top", boardDim: part._width },
  { arr: FilterDuplicates(arrPosBottom), arr2: removeDuplicatesFromArray2(arrPosBottom, yarrPosBottom), oriValue: "horizontal", dirValue: "bottom", boardDim: part._width }
];

//==================================================================================
// Cycle through the arrays
//==================================================================================

let k=0;
for (let elem of arrays) {
  k++;
  if (elem.arr.length > 0) {
    elem.arr2.sort((a, b) => a - b); 
    if(k==2){ i = 2; } 
    else{i = 1; }  
    for (let arr2Item of elem.arr2){
      let arrMeasures: number[] = [];
      let arrCreated = false;
      for (let arrItem of elem.arr){
        if (arrItem[1] == arr2Item){
          arrMeasures.push(arrItem[0]);
          arrCreated = true;
        }
      }     
      if(arrCreated){
          svgCode += processArray(arrMeasures, elem.oriValue, elem.dirValue, elem.boardDim, i)
          i++;        
      }     
    }
    if(k==1){
      levelLeft = i;
    }   
    if(k==4){
      levelBottom = i;
    }   
  }  
}

//==================================================================================
// Measurements main panel (top, left)
//==================================================================================

svgCode += Measurements(0, part._width, zoom, "horizontal", "bottom", levelBottom, "full", part._width, part._depth, X_F1, Y_F1)
svgCode += Measurements(0, part._depth, zoom, "vertical", "left", levelLeft, "full", part._width, part._depth, X_F1, Y_F1)

//###########################################################################################################################################
// Table for drilling data
//###########################################################################################################################################

let PosTableX = X_F1 + (part._width/zoom) + 200;
let PosTableY = 100;
let WidthTable = 500

// Table header 1
svgCode += '<rect x="' + PosTableX + '" y="' + PosTableY + '" width="' + WidthTable + '" height="30" fill="#F2F3F5" stroke="black" stroke-width="2"/>\n';
svgCode += '<text x="' + (PosTableX + WidthTable/2) + '" y="' + (PosTableY + 20) + '" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16">Bohrungen</text>\n';

// Table header 2
svgCode += '<rect x="' + PosTableX + '" y="' + (PosTableY+30) + '" width="' + WidthTable + '" height="30" fill="#F2F3F5" stroke="black" stroke-width="2"/>\n';
svgCode += '<text x="' + (PosTableX + 50) + '" y="' + (PosTableY + 49) + '" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="14">PosX</text>\n';
svgCode += '<text x="' + (PosTableX + 150) + '" y="' + (PosTableY + 49) + '" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="14">PosY</text>\n';
svgCode += '<text x="' + (PosTableX + 250) + '" y="' + (PosTableY + 49) + '" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="14">Durchmesser</text>\n';
svgCode += '<text x="' + (PosTableX + 350) + '" y="' + (PosTableY + 49) + '" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="14">Tiefe</text>\n';
svgCode += '<text x="' + (PosTableX + 450) + '" y="' + (PosTableY + 49) + '" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="14">Seite</text>\n';

// Table entries
PosTableY = 180;
let z = 1;
drillData.forEach(drill => {
  let color = z % 2 === 0 ? '#F2F3F5' : 'white';
  svgCode += '<rect x="' + (PosTableX) + '" y="' + (PosTableY-19) + '" width="' + WidthTable + '" height="28" fill="' + color + '" />\n';
  svgCode += '<text x="' + (PosTableX + 50) + '" y="' + (PosTableY) + '" text-anchor="middle" font-family="Arial" font-size="14">' + drill.x + '</text>\n';
  svgCode += '<text x="' + (PosTableX + 150) + '" y="' + (PosTableY) + '" text-anchor="middle" font-family="Arial" font-size="14">' + drill.y + '</text>\n';
  svgCode += '<text x="' + (PosTableX + 250) + '" y="' + (PosTableY) + '" text-anchor="middle" font-family="Arial" font-size="14">' + drill.d + '</text>\n';
  svgCode += '<text x="' + (PosTableX + 350) + '" y="' + (PosTableY) + '" text-anchor="middle" font-family="Arial" font-size="14">' + drill.dpt + '</text>\n';
  svgCode += '<text x="' + (PosTableX + 450) + '" y="' + (PosTableY) + '" text-anchor="middle" font-family="Arial" font-size="14">' + drill.side + '</text>\n';
  PosTableY += 30;
  z++;
});

// Table lines for the entries
let PosLineY = 130;
let LenLineY = 130 + z * 30;
for(let k=0; k<6; k++){
  let PosLineX = PosTableX + k * 100;
  svgCode += '<line x1="' + PosLineX + '" y1="' + PosLineY + '" x2="' + PosLineX + '" y2="' + LenLineY + '" stroke="black" />\n';
}
svgCode += '<line x1="' + PosTableX + '" y1="' + LenLineY + '" x2="' + (PosTableX+WidthTable) + '" y2="' + LenLineY + '" stroke="black" />\n';

//###########################################################################################################################################
// Finish
//###########################################################################################################################################

// Close SVG
svgCode += '</svg>';

// Create File
this.createFileEntry(result, part._partId + "_" + part._id + ".svg", svgCode);

//###########################################################################################################################################
// Helper functions
//###########################################################################################################################################

//==================================================================================
// Helper function to reset ncData
//==================================================================================

function clear_ncData(){
ncData.Tool = '';
ncData.coorX1 =  0;
ncData.coorY1 =  0;
ncData.XA =  0;
ncData.XE =  0;
ncData.YA =  0;
ncData.YE =  0;
ncData.DU =  0;
ncData.DUF =  0;
ncData.WI =  0;
ncData.LA =  0;
ncData.LAF =  0;
ncData.BR =  0;
ncData.RD =  0;
ncData.AN =  0;
ncData.AB =  0;
ncData.NB =  0;
ncData.BM =  '';
ncData.TI =  0;
ncData.TIF =  0;
ncData.SIDE =  '';
}

//==================================================================================
// Helper function to process the attributes
//==================================================================================

function processAttributes (value: any, key: any){
  if(key == "nc_TOOL"){ncData.Tool = value;}	
  if(key == "nc_XA"){ncData.XA = value/zoom; ncData.coorX1 = Math.round(value * 10) / 10;}
  if(key == "nc_YA"){ncData.YA = value/zoom; ncData.coorY1 = Math.round(value * 10) / 10;}
  if(key == "nc_XE"){ncData.XE = value/zoom;}
  if(key == "nc_YE"){ncData.YE = value/zoom;}
  if(key == "nc_DU"){ncData.DU = value/zoom; ncData.DUF = value;}
  if(key == "nc_NB"){ncData.NB = value/zoom;}
  if(key == "nc_LA"){ncData.LA = value/zoom; ncData.LAF = value;}
  if(key == "nc_BR"){ncData.BR = value/zoom;}
  if(key == "nc_RD"){ncData.RD = value/zoom;}
  if(key == "nc_TI"){ncData.TI = value/zoom; ncData.TIF = value;}
  if(key == "nc_WI"){ncData.WI = value;}
  if(key == "nc_AB"){ncData.AB = value;}
  if(key == "nc_BM"){ncData.BM = value;}	
  if(key == "nc_AN"){ncData.AN = value;}
  if(key == "nc_Side"){ncData.SIDE = value;}
}

//==================================================================================
// Helper function to process the side
//==================================================================================

function translateSide(side: string): [string, string] {
  switch (side) {
    case 'Top':
      return ['von oben','#767A95'];
    case 'Btm':
      return ['von unten','#F5D0A9'];
    case 'Front':
      return ['von vorne','#767A95'];
    case 'Back':
      return ['von hinten','#767A95'];
    case 'Left':
      return ['von links','#767A95'];
    case 'Right':
      return ['von rechts','#767A95'];
    default:
      return ['unbekannt','#767A95'];
  }
}

//==================================================================================
// Helper function to process the arrays of the measurments
//==================================================================================

function processArray(arr: number [], ori: string, dir: string, boardDim: number, level: number):string{

  // Local variables
  let locSvgCode = "";
  let posPoint = 0;
  let Position = "start";
  let i = 0;
  let ii = 0;

  // Sorting the array
  let sortedArray: number[] = arr.sort((a, b) => a - b);

  // Cycle to add dimensions for each drill to the drawing
  for (i = 0; i < sortedArray.length; i++) {
    locSvgCode += Measurements(posPoint, (sortedArray[i]-posPoint), zoom, ori, dir, level, Position, part._width, part._depth, X_F1, Y_F1);
    posPoint = sortedArray[i];
    Position = "middle";
    ii = i;
  }
  // If there are positions in the array add the end-dimenson to the drawing
  let CloseX = boardDim - sortedArray[ii]
  locSvgCode += Measurements(posPoint, CloseX, zoom, ori, dir, level, "end", part._width, part._depth, X_F1, Y_F1);

  // Return the measurments
  return locSvgCode;
}

//==================================================================================
// Helper functions delete duplicates in the arrays
//==================================================================================

// Delete duplicates in the tuples
function FilterDuplicates(arr: [number, number][]): [number, number][] {
  let uniqueArr: [number, number][] = [];
  let seen: { [key: string]: boolean } = {};

  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    let key = currentItem[0];

    if (!seen[key]) {
      seen[key] = true;
      uniqueArr.push(currentItem);
    }
  }

  return uniqueArr;
}

// Delete duplicated measurement lines
function removeDuplicatesFromArray2(arr: [number, number][], arr2: number[]): number[]{
  for (let i = 0; i < arr2.length; i++) {
    let yValue = arr2[i];
    if (!arr.some((value) => value[0] === yValue)) {
      let index = arr2.indexOf(yValue);
      if (index !== -1) {
        arr2.splice(index, 0);
      }
    }
  }
  return arr2;
}

//==================================================================================
// Helper function to draw the measurments
//==================================================================================

function Measurements(point: number, length: number, zoom: number, ori: string, dir: string, level: number, position: string, boardX: number, boardY: number, startX: number, startY: number): string {

	// Create SVG-String
	let svgString: string = "";
	
	// Rounding if necessary
	let tmpLength: string;
  tmpLength = length.toFixed(0);

	// Variables for the measurments
	let tmpLen = length/zoom;
	let tmpOvDis = 5;
  let tmpFont = 'font-family="Arial narrow" font-size="14"';
	let tmpFontDis = 4;
	let tmpDis = 26 * level;
	let tmpOvDimSmall = 20;
  let tmpStartLeft = 0;
  let tmpStartRight = 0;
  let xPos = 0;
  let yPos= 0;
	
	// Check measurments (line length position of text)
	let tmpPosition = 0;
  let tmpPositionY = 0;
	let tmpAllign: string;
	if(position == "start"){
    tmpPosition = -7; 
    tmpPositionY = -14;
    tmpAllign = "end";
    tmpStartRight = 26 * (level - 1);
  }
  else if(position == "end"){
    tmpPosition = 18; 
    tmpPositionY = 31;
    tmpAllign = "start";
    tmpStartLeft = 26 * (level - 1);
  }
	else {
    tmpPosition = 18; 
    tmpPositionY = 31;
    tmpAllign = "start";
    tmpStartRight = 26 * (level - 1);
    tmpStartLeft = 26 * (level - 1);
  }
	
	//--------------------------------------------------------------------------------
	// Orientation horizontal
  //--------------------------------------------------------------------------------

	if (ori == "horizontal"){
		
		// Direction top
		if (dir == "top"){
      xPos = startX + point / zoom;
      yPos = startY - boardY / zoom;
			if(tmpLen<15){
				svgString += '<line x1="' + (xPos-tmpOvDimSmall) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos-3) + '" y2="' + (yPos-tmpDis) + '" stroke="black" marker-end="url(#arrEnd)" />\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos-tmpDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen+3) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos+tmpLen+tmpOvDimSmall) + '" y2="' + (yPos-tmpDis) + '" stroke="black" marker-start="url(#arrStart)" />\n';
				svgString += '<text x="' + (xPos+tmpPosition) + '" y="' + (yPos-tmpDis-tmpFontDis) + '" text-anchor="' + tmpAllign + '" ' + tmpFont + '>' + tmpLength + '</text>\n';       
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos-tmpOvDis-tmpStartLeft) + '" x2="' + (xPos) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos-tmpOvDis-tmpStartRight) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';			
			}
			else{
				svgString += '<line x1="' + (xPos+3) + '" y1="' + (yPos-tmpDis) + '" x2="' + (xPos+tmpLen-3) + '" y2="' + (yPos-tmpDis) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
				svgString += '<text x="' + (xPos+tmpLen/2) + '" y="' + (yPos-tmpDis-tmpFontDis) + '" text-anchor="middle" ' + tmpFont + '>' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos-tmpOvDis-tmpStartLeft) + '" x2="' + (xPos) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos-tmpOvDis-tmpStartRight) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos-tmpDis-tmpOvDis) + '" stroke="black" />\n';
			}
		}

    // Direction bottom
		else{
      
      xPos = startX + point / zoom;
      yPos = startY;
			if(tmpLen<15){
				svgString += '<line x1="' + (xPos-tmpOvDimSmall) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos-3) + '" y2="' + (yPos+tmpDis) + '" stroke="black" marker-end="url(#arrEnd)" />\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos+tmpDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen+3) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos+tmpLen+tmpOvDimSmall) + '" y2="' + (yPos+tmpDis) + '" stroke="black" marker-start="url(#arrStart)" />\n';				
				svgString += '<text x="' + (xPos+tmpPosition) + '" y="' + (yPos+tmpDis-tmpFontDis) + '" text-anchor="' + tmpAllign + '" ' + tmpFont + '>' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos+tmpOvDis+tmpStartLeft) + '" x2="' + (xPos) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos+tmpOvDis+tmpStartRight) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';					
			}
			else{				
				svgString += '<line x1="' + (xPos+3) + '" y1="' + (yPos+tmpDis) + '" x2="' + (xPos+tmpLen-3) + '" y2="' + (yPos+tmpDis) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
				svgString += '<text x="' + (xPos+tmpLen/2) + '" y="' + (yPos+tmpDis-tmpFontDis) + '" text-anchor="middle" ' + tmpFont + '>' + tmpLength + '</text>\n';
				svgString += '<line x1="' + (xPos) + '" y1="' + (yPos+tmpOvDis+tmpStartLeft) + '" x2="' + (xPos) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';
				svgString += '<line x1="' + (xPos+tmpLen) + '" y1="' + (yPos+tmpOvDis+tmpStartRight) + '" x2="' + (xPos+tmpLen) + '" y2="' + (yPos+tmpDis+tmpOvDis) + '" stroke="black" />\n';	
			}			
		}
	}

  //--------------------------------------------------------------------------------
  // Orientation vertical
  //--------------------------------------------------------------------------------

	else{

		// Direction left
		if (dir == "left"){
      xPos = startX;
      yPos = startY - point / zoom;
      if(tmpLen<15){
        svgString += '<line x1="' + (xPos-tmpDis) + '" y1="' + (yPos-tmpLen-tmpOvDimSmall) + '" x2="' + (xPos-tmpDis) + '" y2="' + (yPos-tmpLen-3) + '" stroke="black" marker-end="url(#arrEnd)" />\n';
        svgString += '<line x1="' + (xPos-tmpDis) + '" y1="' + (yPos) + '" x2="' + (xPos-tmpDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';
        svgString += '<line x1="' + (xPos-tmpDis) + '" y1="' + (yPos+3) + '" x2="' + (xPos-tmpDis) + '" y2="' + (yPos+tmpOvDimSmall) + '" stroke="black" marker-start="url(#arrStart)" />\n';
        svgString += '<text x="' + (xPos-tmpDis-tmpFontDis) + '" y="' + (yPos-tmpPositionY) + '" text-anchor="middle" ' + tmpFont + ' transform="rotate(270, ' + (xPos-tmpDis-tmpFontDis) + ', ' + (yPos-tmpPositionY) + ')">' + tmpLength + '</text>\n';	
        svgString += '<line x1="' + (xPos-tmpOvDis-tmpStartLeft) + '" y1="' + (yPos) + '" x2="' + (xPos-tmpDis-tmpOvDis) + '" y2="' + (yPos) + '" stroke="black" />\n';
        svgString += '<line x1="' + (xPos-tmpOvDis-tmpStartRight) + '" y1="' + (yPos-tmpLen) + '" x2="' + (xPos-tmpDis-tmpOvDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';	
      }
      else{
        svgString += '<line x1="' + (xPos-tmpDis) + '" y1="' + (yPos-3) + '" x2="' + (xPos-tmpDis) + '" y2="' + (yPos-tmpLen+3) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
        svgString += '<text x="' + (xPos-tmpDis-tmpFontDis) + '" y="' + (yPos-tmpLen/2) + '" text-anchor="middle" ' + tmpFont+ ' transform="rotate(270, ' + (xPos-tmpDis-tmpFontDis) + ', ' + (yPos-tmpLen/2) + ')">' + tmpLength + '</text>\n';	
        svgString += '<line x1="' + (xPos-tmpOvDis-tmpStartLeft) + '" y1="' + (yPos) + '" x2="' + (xPos-tmpDis-tmpOvDis) + '" y2="' + (yPos) + '" stroke="black" />\n';
        svgString += '<line x1="' + (xPos-tmpOvDis-tmpStartRight) + '" y1="' + (yPos-tmpLen) + '" x2="' + (xPos-tmpDis-tmpOvDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';	
      }	
		}

    // Direction right
		else{
      xPos = startX + boardX / zoom;
      yPos = startY - point / zoom;
      if(tmpLen<15){
        svgString += '<line x1="' + (xPos+tmpDis) + '" y1="' + (yPos-tmpLen-tmpOvDimSmall) + '" x2="' + (xPos+tmpDis) + '" y2="' + (yPos-tmpLen-3) + '" stroke="black" marker-end="url(#arrEnd)" />\n';
        svgString += '<line x1="' + (xPos+tmpDis) + '" y1="' + (yPos) + '" x2="' + (xPos+tmpDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';
        svgString += '<line x1="' + (xPos+tmpDis) + '" y1="' + (yPos+3) + '" x2="' + (xPos+tmpDis) + '" y2="' + (yPos+tmpOvDimSmall) + '" stroke="black" marker-start="url(#arrStart)" />\n';
        svgString += '<text x="' + (xPos+tmpDis-tmpFontDis) + '" y="' + (yPos-tmpPositionY) + '" text-anchor="middle" ' + tmpFont + ' transform="rotate(270, ' + (xPos+tmpDis-tmpFontDis) + ', ' + (yPos-tmpPositionY) + ')">' + tmpLength + '</text>\n';	
        svgString += '<line x1="' + (xPos+tmpOvDis+tmpStartLeft) + '" y1="' + (yPos) + '" x2="' + (xPos+tmpDis+tmpOvDis) + '" y2="' + (yPos) + '" stroke="black" />\n';
        svgString += '<line x1="' + (xPos+tmpOvDis+tmpStartRight) + '" y1="' + (yPos-tmpLen) + '" x2="' + (xPos+tmpDis+tmpOvDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';	
      }
      else{
        svgString += '<line x1="' + (xPos+tmpDis) + '" y1="' + (yPos-3) + '" x2="' + (xPos+tmpDis) + '" y2="' + (yPos-tmpLen+3) + '" stroke="black" marker-start="url(#arrStart)" marker-end="url(#arrEnd)" />\n';
        svgString += '<text x="' + (xPos+tmpDis-tmpFontDis) + '" y="' + (yPos-tmpLen/2) + '" text-anchor="middle" ' + tmpFont + ' transform="rotate(270, ' + (xPos+tmpDis-tmpFontDis) + ', ' + (yPos-tmpLen/2) + ')">' + tmpLength + '</text>\n';	
        svgString += '<line x1="' + (xPos+tmpOvDis+tmpStartLeft) + '" y1="' + (yPos) + '" x2="' + (xPos+tmpDis+tmpOvDis) + '" y2="' + (yPos) + '" stroke="black" />\n';
        svgString += '<line x1="' + (xPos+tmpOvDis+tmpStartRight) + '" y1="' + (yPos-tmpLen) + '" x2="' + (xPos+tmpDis+tmpOvDis) + '" y2="' + (yPos-tmpLen) + '" stroke="black" />\n';	
      }
			
		}		
	}

	// Return SVG-String to be inserted in the SVG-File
	return svgString;
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
    internal_leaveBomOutput();
    return result;
  }
}

export function createBomOutputInstance(part:PartBase, bomOutputId:string) : BomOutput {
  if (bomOutputId.toLowerCase() == 'create_bom') {
    return new BOM_Output_Create_Bom(part)
  }
  if (bomOutputId.toLowerCase() == 'create_drawing') {
    return new BOM_Output_Create_Drawing(part)
  }
  if (bomOutputId.toLowerCase() == 'create_mpr') {
    return new BOM_Output_Create_Mpr(part)
  }
  if (bomOutputId.toLowerCase() == 'create_drawingold') {
    return new BOM_Output_create_DrawingOld(part)
  }
  throw 'Could not find given bom output type(' + bomOutputId + ')';
}
export var bomOutputs : string[] = [
"Create_Bom"
,"Create_Drawing"
,"Create_Mpr"
,"create_DrawingOld"
];
