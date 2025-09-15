var currentLoggingScope:any[] = [];

function internal_enter(scope: any) {
  currentLoggingScope.push(scope);
}

function internal_leave() {
  currentLoggingScope.pop();
}

export function internal_enterBomOutput(id: string, partId: string) {
  internal_enter({
    area: 'BomOutput',
    id: id,
    partId: partId,
  });
}

export function internal_leaveBomOutput() {
  internal_leave();
}

export function internal_enterBomOrderOutput() {
  internal_enter({
    area: 'BomOrderOutput',
  });
}

export function internal_leaveBomOrderOutput() {
  internal_leave();
}

export function internal_enterBomPartMasterDataElements(id: string, partId: string) {
  internal_enter({
    area: 'BomPartMasterDataElements',
    id: id,
    partId: partId,
  });
}

export function internal_leaveBomPartMasterDataElements() {
  internal_leave();
}

export function internal_enterBomPartMasterDataTouches(selfId: string, partSelfId: string, p2Id: string, part2Id: string, touch: string) {
  internal_enter({
    area: 'BomPartMasterDataTouches',
    selfId: selfId,
    partSelfId: partSelfId,
    p2Id: p2Id,
    part2Id: part2Id,
    touch: touch
  });
}

export function internal_enterBomPartMasterDataTouchesStart(selfId: string, partSelfId: string){
  internal_enter({
    area: 'BomPartMasterDataTouchesStart',
    selfId: selfId,
    partSelfId: partSelfId,
  });
}

export function internal_enterBomPartMasterDataTouchesEnd(selfId: string, partSelfId: string){
  internal_enter({
    area: 'BomPartMasterDataTouchesEnd',
    selfId: selfId,
    partSelfId: partSelfId,
  });
}

export function internal_leaveBomPartMasterDataTouches() {
  internal_leave();
}

export function internal_enterFunction(name: string) {
  internal_enter({
    area: 'Function',
    name: name,
  });
}

export function internal_leaveFunction() {
  internal_leave();
}

export function internal_enterModuleManufacturerDataCompletion(moduleId: string, moduleUniqueId: string) {
  internal_enter({
    area: 'ModuleManufacturerDataCompletion',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
  });
}

export function internal_leaveModuleManufacturerDataCompletion() {
  internal_leave();
}

export function internal_enterModuleAfterDataCompletion(moduleId: string, moduleUniqueId: string) {
  internal_enter({
    area: 'ModuleAfterDataCompletion',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
  });
}

export function internal_leaveModuleAfterDataCompletion() {
  internal_leave();
}

export function internal_enterModuleCreateBuildPlan(moduleId: string, moduleUniqueId: string) {
  internal_enter({
    area: 'ModuleCreateBuildPlan',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
  });
}

export function internal_leaveModuleCreateBuildPlan() {
  internal_leave();
}

export function internal_enterCollectParts(moduleId: string, moduleUniqueId: string, id: string, partId: string) {
  internal_enter({
    area: 'CollectParts',
    id: id,
    partId: partId,
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
  });
}

export function internal_leaveCollectParts() {
  internal_leave();
}

export function internal_enterCheckPartAttributes(id: string, partId: string, moduleId: string, moduleUniqueId: string) {
  internal_enter({
    area: 'CheckPartAttributes',
    id: id,
    partId: partId,
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
  });
}

export function internal_leaveCheckPartAttributes() {
  internal_leave();
}
export function internal_enterValidateVariant(moduleId: string, moduleUniqueId: string, attrId: string) {
  internal_enter({
    area: 'ValidateVariants',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
    attrId: attrId
  });
}

export function internal_leaveValidateVariant() {
  internal_leave();
}

export function internal_enterLoadJson(moduleId: string, moduleUniqueId: string) {
internal_enter({
    area: 'LoadJson',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
});
}

export function internal_leaveLoadJson(){
  internal_leave();
}

export function internal_enterDataCompletionAssignDerivedData(moduleId: string, moduleUniqueId: string) {
internal_enter({
    area: 'DataCompletionAssignDerivedData',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
});
}

export function internal_leaveDataCompletionAssignDerivedData(){
  internal_leave();
}

export function internal_enterDataCompletionSetDefault(moduleId: string, moduleUniqueId: string) {
internal_enter({
    area: 'DataCompletionSetDefault',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
});
}

export function internal_leaveDataCompletionSetDefault(){
  internal_leave();
}

export function internal_enterDataCompletionSetGlobalVars(moduleId: string, moduleUniqueId: string) {
internal_enter({
    area: 'DataCompletionSetGlobalVars',
    moduleId: moduleId,
    moduleUniqueId: moduleUniqueId,
});
}

export function internal_leaveDataCompletionSetGlobalVars(){
  internal_leave();
}

var logMessages:LogMessage[] = [];
var logMessageSeqNo = 0;

export class LogMessage {
  constructor(msg:string, category: string) {
    this.msg = msg;
    this.category = category;
    this.seqNo = ++logMessageSeqNo;
    var currentdate = new Date();
    this.timestamp = currentdate.getFullYear() + '-' + (currentdate.getMonth()+1).toString().padStart(2, '0') + '-' + currentdate.getDate().toString().padStart(2, '0') + 'T'  + currentdate.getHours().toString().padStart(2, '0') + ':'  + currentdate.getMinutes().toString().padStart(2, '0') + ':' + currentdate.getSeconds().toString().padStart(2, '0') + '.' + currentdate.getMilliseconds().toString().padStart(3, '0') + 'Z';
  }

  msg: string;
  seqNo: number;
  timestamp: string;
  category:string;
  scope:any[] = [];
  stack:string[] = [];
}

export function getLogMessages(): LogMessage[] {
  return logMessages;
}
export function setLogMessages(logs:LogMessage[]) {
  logMessages = logs;
}
export function clearLogMessages(resetSeqNo?: boolean | undefined): void {
  logMessages = [];
  attributeLogs = [];

  if (resetSeqNo) {
        logMessageSeqNo = 0;
    }
}

function internal_log(category:string, msg:string) {
  var lm = new LogMessage(msg, category);
  lm.scope = JSON.parse(JSON.stringify(currentLoggingScope));
  var stack = new Error().stack;
  if (stack) {
    lm.stack = stack.split('\n');
  }
  logMessages.push(lm);
}

export function logFatal(msg:string) {
  internal_log('Fatal', msg)
}

export function logError(msg:string) {
  internal_log('Error', msg)
}

export function logWarning(msg:string) {
  internal_log('Warning', msg)
}

export function logInfo(msg:string) {
  internal_log('Info', msg)
}

export function logDebug(msg:string) {
  internal_log('Debug', msg)
}
var attributeLogs: LogMessage[] = [];
export function logAttrChange(moduleId: string, moduleUniqueId: string, attrId: string, oldValue: any, newValue: any) {
  var logMessage = new LogMessage(`Attribute '${attrId}' changed from '${oldValue}' to '${newValue}'`, 'Info');
  logMessage.scope = JSON.parse(JSON.stringify(currentLoggingScope));
  logMessage.scope.push({area: 'AttrChanged', moduleUniqueId: moduleUniqueId, moduleId: moduleId, attrId: attrId, oldValue: oldValue, newValue: newValue});
  //var stack = new Error().stack;
  //if (stack) { logMessage.stack = stack.split('\n'); }
  attributeLogs.push(logMessage);
}

export function getAttrChangeLogs(): LogMessage[] {
  return attributeLogs;
}

