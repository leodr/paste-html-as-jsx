/**
 * Just to provide Prettier formatting and syntax
 */
export const html = ([str]: TemplateStringsArray) => {
    if (!str) {
        throw Error("No string specified");
    }
    return str;
};
