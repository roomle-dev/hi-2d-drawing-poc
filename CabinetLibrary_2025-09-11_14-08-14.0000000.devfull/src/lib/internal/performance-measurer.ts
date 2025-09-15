export class PerformanceLog {
    constructor(methodName: string, moduleId: string, moduleUniqueId: string, durationInMilliseconds: number, startTime: number) {
        this.methodName = methodName;
        this.moduleId = moduleId;
        this.moduleUniqueId = moduleUniqueId;
        this.durationInMilliseconds = durationInMilliseconds;
        this.startTime = startTime;
    }
    methodName?: string;
    moduleId?: string;
    moduleUniqueId?: string;
    durationInMilliseconds?: number;
    startTime?: number;
}

class PerformanceDetails {
    id: string;
    methodName: string;
    moduleId: string;
    moduleUniqueId: string;

    constructor(id: string, methodName: string, moduleId: string, moduleUniqueId: string) {
        this.id = id;
        this.methodName = methodName;
        this.moduleId = moduleId;
        this.moduleUniqueId = moduleUniqueId;
    }

    getAsPerformanceLog(duration: number, startTime: number): PerformanceLog {
        return new PerformanceLog(this.methodName, this.moduleId, this.moduleUniqueId, duration, startTime);
    }
}

class PerformanceMeasurer {
    private performanceDetails: PerformanceDetails[] = [];
    private obs = new PerformanceObserver((_) => { });

    public Init() {
        this.obs.observe({ type: 'measure' });
    }

    public Clean() {
        this.performanceDetails = [];
        performance.clearMarks();
        performance.clearMeasures();
        this.obs.disconnect();
    }

    public Begin(methodName: string, moduleId: string, moduleUniqueId: string): void {
        const startMarker = this.GetPerformanceStartMarker(methodName, moduleId, moduleUniqueId);
        performance.mark(startMarker);
    }

    public End(methodName: string, moduleId: string, moduleUniqueId: string): void {
        const endMarker = this.GetPerformanceEndMarker(methodName, moduleId, moduleUniqueId);
        performance.mark(endMarker);

        const performanceDetailId = this.GetPerformanceDetailId(methodName, moduleId, moduleUniqueId);
        this.performanceDetails.push(new PerformanceDetails(performanceDetailId, methodName, moduleId, moduleUniqueId));

        const startMarker = this.GetPerformanceStartMarker(methodName, moduleId, moduleUniqueId);
        performance.measure(performanceDetailId, startMarker, endMarker);
    }

    public CollectPerformanceLogs(): PerformanceLog[] {
        const list = this.obs.takeRecords();
        const performanceLogs: PerformanceLog[] = [];

        list.forEach((entry) => {
            const details = this.GetPerformanceDetails(entry.name);
            if (details == undefined) {
                return;
            }

            performanceLogs.push(details.getAsPerformanceLog(entry.duration, entry.startTime));
        });

        return performanceLogs;
    }

    private GetPerformanceDetails(id: string): PerformanceDetails | undefined {
        return this.performanceDetails.find((pd) => pd.id === id);
    }

    private GetPerformanceStartMarker(methodName: string, moduleId: string, moduleUniqueId: string): string {
        const marker = `${methodName}_${moduleId}_${moduleUniqueId}_start`;
        return marker;
    }

    private GetPerformanceEndMarker(methodName: string, moduleId: string, moduleUniqueId: string): string {
        const marker = `${methodName}_${moduleId}_${moduleUniqueId}_end`;
        return marker;
    }

    private GetPerformanceDetailId(methodName: string, moduleId: string, moduleUniqueId: string): string {
        const performanceDetailsId = `${methodName}_${moduleId}_${moduleUniqueId}`;
        return performanceDetailsId;
    }
}

export const PerformanceAnalyzer: PerformanceMeasurer =
    new PerformanceMeasurer();