// @ts-expect-error
import * as HtmlToJsx from "htmltojsx";

export function convertHtmlToJsx(html: string): string | null {
    try {
        const converter = new HtmlToJsx({
            createClass: false,
        });
        return converter.convert(html);
    } catch {
        return null;
    }
}
