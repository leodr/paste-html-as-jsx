const UPPERCASE_TAGS = /<\s*[A-Z]/;
const CLASSNAME_ATTRIBUTE = /<.*className.*>/;

/**
 * Checks if a given input string is HTML code.
 * @param text The input that should be checked
 */
export function isHTML(text: string): boolean {
  text = text.trim();

  if (!text.startsWith("<") || !text.endsWith(">")) {
    return false;
  }

  if (UPPERCASE_TAGS.test(text)) {
    return false;
  }

  if (CLASSNAME_ATTRIBUTE.test(text)) {
    return false;
  }

  return true;
}
