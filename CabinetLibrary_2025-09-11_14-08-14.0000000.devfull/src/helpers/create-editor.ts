import JSONEditor, { JSONEditorOptions } from 'jsoneditor';

export const INPUT_EDITOR_OPTIONS: JSONEditorOptions = {
	mode: 'code',
	modes: ['code', 'form', 'text', 'tree', 'view'],
};

export const OUTPUT_EDITOR_OPTIONS: JSONEditorOptions = {
	mode: 'form',
	modes: ['code', 'form', 'text', 'tree', 'view'],
};

export const createEditor = (elementId: string, options: JSONEditorOptions): JSONEditor => {
	const element = document.getElementById(elementId);

	if (!element) {
		throw new Error(`Element with ${elementId} was not found`);
	}

	const editor = new JSONEditor(element, options);

	return editor;
};
