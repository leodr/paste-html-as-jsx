import * as vscode from "vscode";
import { ref } from "vue";

type Mode = "automatic" | "on-demand";

export const mode = ref<Mode>();

export function initializeSettings(): vscode.Disposable {
    mode.value = vscode.workspace
        .getConfiguration("paste-html-as-jsx")
        .get("mode");

    const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration("paste-html-as-jsx.mode")) {
            mode.value = vscode.workspace
                .getConfiguration("paste-html-as-jsx")
                .get("mode");
        }
    });

    return disposable;
}
