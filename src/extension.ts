import * as vscode from "vscode";
import { convertHtmlToJsx } from "./convertHtmlToJsx";
import { isHTML } from "./isHTML";

const RELEVANT_LANGUAGE_IDS = [
    "javascript",
    "javascriptreact",
    "typescriptreact",
];

export function activate() {
    vscode.window.onDidChangeActiveTextEditor(async (editor) => {
        if (editor) {
            const { languageId } = editor.document;

            if (RELEVANT_LANGUAGE_IDS.includes(languageId)) {
                swapClipboard();
            }
        }
    });

    vscode.window.onDidChangeWindowState(async (state) => {
        if (state.focused) {
            const { activeTextEditor } = vscode.window;

            if (activeTextEditor) {
                const { languageId } = activeTextEditor.document;

                if (RELEVANT_LANGUAGE_IDS.includes(languageId)) {
                    swapClipboard();
                }
            }
        }
    });
}

async function swapClipboard() {
    const { clipboard } = vscode.env;

    const clipboardText = await clipboard.readText();

    if (isHTML(clipboardText)) {
        const result = convertHtmlToJsx(clipboardText);

        if (result) {
            await clipboard.writeText(result);
        }
    }
}
