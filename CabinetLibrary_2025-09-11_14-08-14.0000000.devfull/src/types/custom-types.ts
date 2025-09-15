import { PartBase } from '../lib/internal/mod-base';

export class OutputData {
	BuildPlan: any;
	Touches: any;
	BOMAfterTouches: any;
	Logs: any;
	AttrChanges: any;
}

export class BomOutputData {
	bomAfterTouches?: PartBase[];
	outputId?: string;
}

export enum DisplaySettingsType {
	None = 0,
	Articles = 0x0001,
	Touches = 0x0002,
	BomAfterTouches = 0x0004,
	Logs = 0x0008,
	AttrChanges = 0x0010,
	TouchesLogs = 0x0020,
}

export class DisplaySettings {
	private displaySettings: DisplaySettingsType = DisplaySettingsType.None;

	setFlag(flag: DisplaySettingsType) {
		this.displaySettings |= flag;
	}

	hasFlag(flag: DisplaySettingsType): boolean {
		return (this.displaySettings & flag) === flag;
	}

	resetFlags() {
		this.displaySettings = DisplaySettingsType.None;
	}
}
