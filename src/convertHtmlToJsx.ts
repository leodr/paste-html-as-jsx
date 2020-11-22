// eslint-disable-next-line @typescript-eslint/naming-convention
const HtmlToJsx = require("htmltojsx");

export function convertHtmlToJsx(html: string): string | null {
    const trimmedHTML = html.trim();

    try {
        const converter = new HtmlToJsx({
            createClass: false,
        });

        let jsxString: string = converter.convert(trimmedHTML);

        /**
         * Somehow `htmltojsx` converts empty alt tags on images to boolean
         * attributes, so we just find thoss mistakes by searching for alt tags
         * that are not followed by a `=` and convert them to `alt=""`
         *
         * https://github.com/leodr/paste-html-as-jsx/issues/1
         */
        jsxString = jsxString.replace(/alt(?!=)/g, 'alt=""');

        return jsxString;
    } catch {
        return null;
    }
}
