import {internal_enterBomOutput,internal_leaveBomOutput, internal_enterBomPartMasterDataElements,internal_leaveBomPartMasterDataElements, internal_enterBomPartMasterDataTouches,internal_leaveBomPartMasterDataTouches, internal_enterFunction,internal_leaveFunction, internal_enterModuleManufacturerDataCompletion,internal_leaveModuleManufacturerDataCompletion, internal_enterModuleAfterDataCompletion,internal_leaveModuleAfterDataCompletion, internal_enterModuleCreateBuildPlan,internal_leaveModuleCreateBuildPlan, internal_enterCollectParts,internal_leaveCollectParts, internal_enterCheckPartAttributes,internal_leaveCheckPartAttributes,internal_enterValidateVariant,internal_leaveValidateVariant,logFatal,logError,logWarning,logInfo,logDebug,getLogMessages, clearLogMessages, internal_enterBomOrderOutput, internal_leaveBomOrderOutput, getAttrChangeLogs, internal_enterLoadJson, internal_leaveLoadJson, internal_enterDataCompletionAssignDerivedData, internal_leaveDataCompletionAssignDerivedData, internal_enterDataCompletionSetDefault, internal_leaveDataCompletionSetDefault, logAttrChange, internal_enterDataCompletionSetGlobalVars, internal_leaveDataCompletionSetGlobalVars, internal_enterBomPartMasterDataTouchesStart, internal_enterBomPartMasterDataTouchesEnd} from './logging'

import { GenerationContour, GenerationMethod, Matrix4, OD_Base, PartGroup, RoomContour } from './base';
import { loadOrderData } from './loader'
import { PartBase, resetPartNumber } from './mod-base';
import { applyPartMatrix, Collision, CollisionMap, createTouchBillOfMaterial, createTouchBillOfMaterialStart, createTouchBillOfMaterialEnd, detectTouches } from './touches';
import { BomOutputFileEntry, bomOutputs, createBomOutputById } from './bom_outputs';
import { setLogMessages, LogMessage } from './logging';
import { PerformanceAnalyzer, PerformanceLog } from './performance-measurer';

declare function uuidv4(): string;

function hideParent(key:string, value:any):any {
  if (key == 'parent') return undefined;
  if (key == 'parentBase') return undefined;
  return value;
}

    export function collectParts(parts: PartBase[], od: OD_Base|undefined = undefined) {
      if (od == undefined) return;
      if (od.p) {
        od.p.forEach(p => {
          internal_enterCollectParts(od.modId, od._id, p._id, p._partId);
          if (p._x === null || isNaN(p._x)) { logError('X-Value is NaN for part ' + p._partId + ' in ' + od.modId); p._x = 0; };
          if (p._y === null || isNaN(p._y)) { logError('Y-Value is NaN for part ' + p._partId + ' in ' + od.modId); p._y = 0; };
          if (p._z === null || isNaN(p._z)) { logError('Z-Value is NaN for part ' + p._partId + ' in ' + od.modId); p._z = 0; };
          if (p._dimx === null || isNaN(p._dimx)) { logError('DimX-Value is NaN for part ' + p._partId + ' in ' + od.modId); p._dimx = 0; };
          if (p._dimy === null || isNaN(p._dimy)) { logError('DimY-Value is NaN for part ' + p._partId + ' in ' + od.modId); p._dimy = 0; };
          if (p._dimz === null || isNaN(p._dimz)) { logError('DimZ-Value is NaN for part ' + p._partId + ' in ' + od.modId); p._dimz = 0; };
          parts.push(p);
          internal_leaveCollectParts();
        });
      }
      if (od.m) {
        od.m.forEach(p => collectParts(parts, p));
      }
}
export function dataCompletionAndCreateBuildPlan(json: any, manufacturerMode: boolean, generationContours?: GenerationContour[], roomContours?: RoomContour[]): OD_Base {
    clearLogMessages(); // clear all log messages
    var od = loadOrderData(json, undefined, manufacturerMode, generationContours !== undefined)

  od.roomContours = roomContours;

  if (generationContours) {
      od.generationContours = generationContours;
  }

  od.dataCompletion();
  //console.log("After DataCompletion: ");
  //console.log(JSON.parse(JSON.stringify(od, hideParent)));  // clone object

  if (manufacturerMode) {
    od.manufacturerDataCompletion();
    //console.log("After ManufacturerDataCompletion: ");
    //console.log(JSON.parse(JSON.stringify(od, hideParent)));  // clone object
  }

  od.afterDataCompletion();
  // check if NO parts are created yet!
  var parts:PartBase[] = [];
  collectParts(parts, od);
  if (parts.length > 0) {
    throw "Before the call to 'createBuildPlan' NO part must be created!";
  }
  //console.log("After AfterDataCompletion: ");
  //console.log(JSON.parse(JSON.stringify(od, hideParent)));  // clone object
  od.createBuildPlan();
  od.setPartModuleMatrix();
  //console.log("After CreateBuildPlan: ");
  //console.log(JSON.parse(JSON.stringify(od, hideParent)));  // clone object
  return od;
}

function partSetAttributes(od: OD_Base) {
  let parts: PartBase[] = [];
  collectParts(parts, od);
    parts.forEach(p => {
        p._rootRotationY = od._articlePos.rotationY;
        p.setAttributes();
        p.checkAttributes();
      });
}

export function createBillOfMaterial(od: OD_Base) {
  let partGroups = od._partGroups!;
  let parts: PartBase[] = [];
  collectParts(parts, od);
  // first: Remove all parts which are already inside a group
  partGroups.forEach((value, key) => {
    parts = parts.filter(q => q._id != value._mainPart._id);
    value._mainPart._childParts.forEach(p => {
      // remove the part from the part list; we already have processed it...
      parts = parts.filter(q => q._id != p._id);
    });
  });

  // And then add all missing parts to an "own" group for each part
  parts.forEach(p => {
    // place the parts which have no group assigned to an own group
    var groupName = uuidv4();
    var pg = new PartGroup(p.parentId, p, groupName);
    partGroups.set(groupName, pg);
  });

  // Process all part groups and create the bom elements
  partGroups.forEach((value, key) => {
    value._mainPart.createBomElements();
    value._mainPart._childParts.forEach(p => {
      p.createBomElements();
    });
  });  
}
    export function getBOM(od: OD_Base): PartBase[] {
      let partGroups = od._partGroups!;
      // Create BOM out of the part groups:
      let bom: PartBase[] = [];
      partGroups.forEach((value,key) => {
        if (value._mainPart.partParentId === undefined) {
          // We have a "REAL" parent
          bom.push(value._mainPart);
        }
      });
      return bom;
}

export class ArticleResult
{
  rootId: string = null!;
  orderItem?: OD_Base = null!;
  logMessages: LogMessage[] = [];
  bom?:PartBase[];
  bomOutput?: ArticleBomOutput[] = [];
  attrChanges: LogMessage[] = [];
}

export class MultiArticleResult
{
  articleResults: ArticleResult[] = [];
  touches?: Collision[];
  logMessages: LogMessage[] = [];
  globalPartList?: PartBase[];
  performanceLogs?: PerformanceLog[] = [];

  toJson(withTouches?: boolean): string {
    var json: any = new Object();
    json.Logs = this.logMessages;
    json.Articles = [];
    json.PerformanceLogs = this.performanceLogs;
    this.articleResults.forEach(p => {
      var ares:any = new Object();
      ares.RootId = p.rootId;
      ares.Data = p.orderItem?.toJson();
      ares.AttrChanges = p.attrChanges;
      ares.Logs = p.logMessages;
      if (p.bom) {
        var bomArr:any = [];
        p.bom.forEach(p => bomArr.push(p.toJson()));
        ares.Bom = bomArr;
      }
      ares.BomOutput = p.bomOutput;
      json.Articles.push(ares);
    });

    if (withTouches && this.touches) {
      json.Touches = [];
      this.touches.forEach(t => json.Touches.push({
        touch: t.Touch,
        partSelfId: t.PartSelf._id,
        part2Id: t.Part2._id,
        posRelX: t.PosRel.x,
        posRelY: t.PosRel.y,
        posRelZ: t.PosRel.z,
        rotRelX: t.RotRel.x,
        rotRelY: t.RotRel.y,
        rotRelZ: t.RotRel.z
      }))
    }

    return JSON.parse(JSON.stringify(json, hideParent));
  }
}

export class ArticleBomOutput
{
  outputId: string = null!;
  name: string = null!;
  fileEntry: BomOutputFileEntry = null!;

}

function makeGlobalPartList(od: OD_Base, globalPartList: PartBase[], correctPos:boolean) {
  var parts: PartBase[] = [];
  collectParts(parts, od);
  applyPartMatrix(parts);
  parts.forEach(p => {
    globalPartList.push(p);
  });
}

export function processMultipleArticles(json:any, manMode:boolean, withBom: boolean, withAllOutputs:boolean, withPerformanceLogs:boolean | undefined) : MultiArticleResult
{
  clearLogMessages(true);
  resetPartNumber();
  var res = new MultiArticleResult();
  if (!Array.isArray(json)) {
    logFatal("Input string is not a json array!");
      res.logMessages = getLogMessages();
      if (withPerformanceLogs) {
          res.performanceLogs = PerformanceAnalyzer.CollectPerformanceLogs();
          PerformanceAnalyzer.Clean();
      }
    return res;
  }

  const ol = json.find(o => o.roomContours !== undefined);
  json.forEach(o => {
    if (!checkIfModuleWasGenerated(o)) {
      var ares = calculateOrderItem(o, manMode, undefined, ol?.roomContours);
      res.articleResults.push(ares);
    }
  });

  processGenerationRootModules(json, manMode, res, ol?.roomContours);

  // Collect all the parts
  var allPartArray: PartBase[] = []; // Store ALL the parts from ALL articles
  res.articleResults.forEach((od) => {
      if (od.orderItem) {
          makeGlobalPartList(od.orderItem, allPartArray, true);
      }
  });

  res.globalPartList = allPartArray;

  if (withBom || withAllOutputs) {
    // Now create touches and touch bom data
    setLogMessages(res.logMessages);  // set to the global log messages

      // Create groups of parts, based on the rotation of the article
    function groupByRotationY(partsBase: PartBase[], groups: Map<number, PartBase[]>): void {
      partsBase.forEach(part => {
          const rot = part._rootRotationY;
          if (!groups.has(rot)) {
            groups.set(rot, []); // Create a new group, if we do not yet have a group
          }
          groups.get(rot)!.push(part); // Add part to the rotationY group
      });
    }

    const detectedTouches = new CollisionMap();
    const groupedByRotationY = new Map<number, PartBase[]>();
    groupedByRotationY.set(-1, allPartArray.filter(p => p.canHaveRotatedTouches));

    groupByRotationY(allPartArray.filter(p => !p.canHaveRotatedTouches ||
        (p.canHaveRotatedTouches && !p._partMatrix?.hasRotation())), groupedByRotationY);

    groupedByRotationY.forEach((parts: PartBase[], rotYKey: number) => {
      try {
        if (parts.length === 0) {
          return;
        }
        let touches = detectTouchesWrapper(parts, rotYKey.toString(), detectedTouches);
        if (res.touches) {
          res.touches = res.touches.concat(touches);
        }
        else {
          res.touches = touches;
        }
        createTouchBillOfMaterialStart(parts);
        createTouchBillOfMaterial(touches);
        createTouchBillOfMaterialEnd(parts);

        setFullMatrixFor3DElements(parts);
      } catch (error) {
        if (error instanceof Error) {
          logError(error.message + '\n' + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
    });
    res.logMessages = getLogMessages();

    res.articleResults.forEach(ares => {
      setLogMessages(ares.logMessages);
      try{
        if (ares.orderItem)
        {
          createBillOfMaterial(ares.orderItem);
          var bomAfterTouches = getBOM(ares.orderItem);
          ares.bom = bomAfterTouches;

          if (withAllOutputs) {
            bomOutputs.forEach(outputId => {
              var bomOutput = createBomOutputById(ares.bom!, outputId);
              bomOutput.forEach((value, key) => {
                var abo = new ArticleBomOutput();
                abo.outputId = outputId;
                abo.name = key;
                abo.fileEntry = value;
                ares.bomOutput?.push(abo);
              });
            })
          }
        }
      }
      catch (error) {
        if (error instanceof Error) {
          logError(error.message + "\n" + error.stack);
        } else {
          logError(JSON.stringify(error, null, 4));
        }
      }
      
      ares.logMessages = getLogMessages();
    });
  }

    if (withPerformanceLogs) {
        res.performanceLogs = PerformanceAnalyzer.CollectPerformanceLogs();
        PerformanceAnalyzer.Clean();
    }
  return res;
}

function calculateOrderItem(o: any, manMode: boolean, generationContours?: GenerationContour[], roomContours?: RoomContour[]): ArticleResult {
  var ares = new ArticleResult();
  var od;
  try {
    ares.rootId = o.id;  // always set the "id", so we can always correlate this entry with the order item
      // INFO: This also clears to log messages
    od = dataCompletionAndCreateBuildPlan(o, manMode, generationContours, roomContours);
    ares.attrChanges = getAttrChangeLogs();
    ares.orderItem = od;

    if (od)
    {
      partSetAttributes(od);

      // Adjust the group name to also contain the article (root) id
      if (od._partGroups) {
        var remap = new Map<string,PartGroup>();
        var rootId = od._id;
        od._partGroups.forEach((value, key) => {
          var grpName = rootId + "-" + value._groupName;
          value._groupName = grpName;
          remap.set(grpName, value);
        });
        od._partGroups = remap;
      }
    }
  }
  catch (error) {
    if (error instanceof Error) {
      logError(error.message + "\n" + error.stack);
    } else {
      logError(JSON.stringify(error, null, 4));
    }
  }

  ares.logMessages = getLogMessages();
  return ares;
}

function setFullMatrixFor3DElements(allPartArray: PartBase[]) {
  allPartArray.forEach(p => {
    if (p._3DElements.length > 0) {
      let m = p._fullMatrix!;
      let pm = new Matrix4().setPosition(p._x, p._y, p._z);
      m.multiply(pm);

      p._3DElements.forEach(bomPart => {
        if (bomPart._partMatrix) {
          bomPart._fullMatrix = m.clone().multiply(bomPart._partMatrix);
        }
        else {
          bomPart._fullMatrix = m.clone();
        }
      });

     if (p._openFullMatrix) {
       let om = p._openFullMatrix;
       let pm = new Matrix4().setPosition(p._x, p._y, p._z);
       om.multiply(pm);
       p._3DElements.forEach(bomPart => {
         if (bomPart._partMatrix) {
           bomPart._openFullMatrix = om.clone().multiply(bomPart._partMatrix);
         }
         else {
           bomPart._openFullMatrix = om.clone();
         }
       });
      }
    }
  });
}
function checkIfModuleWasGenerated(json: any) {
  switch (json['moduleId'].toLowerCase()) {
    case 'mr_paneltop':
    case 'mr_countertop':
    case 'mr_toekick':
    case 'mr_fingergrip':
      return true;
  }

  return false;
}

function processGenerationRootModules(json:any, manMode:boolean, res:MultiArticleResult, roomContours?: RoomContour[]) {
  // Check if we need to add generation modules
  let generationGroups = new Map<GenerationMethod, GenerationContour[]>();
  res.articleResults.forEach((ares) => {
    if (ares.orderItem) {
      ares.orderItem.generationContours.forEach((gc) => {
        if (generationGroups.has(gc.generationMethod)) {
          let gm = generationGroups.get(gc.generationMethod);
          gm!.push(gc);
        } else {
          generationGroups.set(gc.generationMethod, [gc]);
        }
      });
    }
  });

  // Create for each generation method a root module
  generationGroups.forEach((val, key) => {
    let rootModuleId : string | undefined = undefined;
    switch (key) {
      case GenerationMethod.Paneltop:
        rootModuleId = 'mr_Paneltop';
        break;
      case GenerationMethod.Countertop:
        rootModuleId = 'mr_Countertop';
        break;
      case GenerationMethod.Toekick:
        rootModuleId = 'mr_Toekick';
        break;
      case GenerationMethod.Fingergrip:
        rootModuleId = 'mr_Fingergrip';
        break;
      default:
        throw 'Unknown generation method: ' + key;
    }

    // Try to find the properties for this generated module
    let moduleJson:any = undefined;
    json.forEach((o: any) => {
      if (o['moduleId'] == rootModuleId) {
        moduleJson = o;
      }
    });

    if (!moduleJson) {
      moduleJson = { moduleId: rootModuleId };
    }

    if (moduleJson.attributes === undefined) {
      moduleJson.attributes = {};
    }

    let ares = calculateOrderItem(moduleJson, manMode, val, roomContours);
    res.articleResults.push(ares);
  });
}

function detectTouchesWrapper(parts: PartBase[], rotYKey: string, detectedTouches: CollisionMap): Collision[] {
const touches = detectTouches(parts, rotYKey, detectedTouches);
return touches;
}
