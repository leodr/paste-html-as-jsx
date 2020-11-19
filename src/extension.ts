// @ts-expect-error
import * as HtmlToJsx from "htmltojsx";
import * as vscode from "vscode";

export function activate() {
    const { clipboard } = vscode.env;

    vscode.window.onDidChangeWindowState(async (state) => {
        if (state.focused) {
            const clipboardText = await clipboard.readText();

            const trimmedClipboardText = clipboardText.trim();

            const clipboardIsHtml =
                trimmedClipboardText.startsWith("<") &&
                trimmedClipboardText.endsWith(">");

            if (clipboardIsHtml) {
                const converter = new HtmlToJsx({
                    createClass: false,
                });
                let result = converter.convert(trimmedClipboardText);

                await clipboard.writeText(result);
            }
        }
    });
}
