import * as vscode from "vscode";
import { watchEffect } from "vue";
import { convertHtmlToJsx } from "./convertHtmlToJsx";
import { isHTML } from "./isHTML";
import { initializeSettings, mode } from "./reactiveSettings";

const RELEVANT_LANGUAGE_IDS = [
    "javascript",
    "javascriptreact",
    "typescriptreact",
];

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(initializeSettings());

    const stopEffect = watchEffect((onInvalidate) => {
        if (mode.value === "automatic") {
            const editorDisposable = vscode.window.onDidChangeActiveTextEditor(
                async (editor) => {
                    if (editor) {
                        const { languageId } = editor.document;

                        if (RELEVANT_LANGUAGE_IDS.includes(languageId)) {
                            swapClipboard();
                        }
                    }
                }
            );

            const windowDisposable = vscode.window.onDidChangeWindowState(
                async (state) => {
                    if (state.focused) {
                        const { activeTextEditor } = vscode.window;

                        if (activeTextEditor) {
                            const { languageId } = activeTextEditor.document;

                            if (RELEVANT_LANGUAGE_IDS.includes(languageId)) {
                                swapClipboard();
                            }
                        }
                    }
                }
            );

            context.subscriptions.push(editorDisposable, windowDisposable);

            onInvalidate(() => {
                editorDisposable.dispose();
                windowDisposable.dispose();
            });
        } else {
            const commandDisposable = vscode.commands.registerCommand(
                "paste-html-as-jsx.swapClipboard",
                () => {
                    swapClipboard();
                }
            );

            vscode.commands.executeCommand(
                "setContext",
                "paste-html-as-jsx:showSwapClipboardAction",
                true
            );

            context.subscriptions.push(commandDisposable);

            onInvalidate(() => {
                vscode.commands.executeCommand(
                    "setContext",
                    "paste-html-as-jsx:showSwapClipboardAction",
                    false
                );
                commandDisposable.dispose();
            });
        }
    });

    context.subscriptions.push(new vscode.Disposable(stopEffect));
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
