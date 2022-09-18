const UPPERCASE_TAGS = /<\s*[A-Z]/;
const CLASSNAME_ATTRIBUTE = /<.*className.*>/;

/**
 * Checks if a given input string is HTML code.
 * @param text The input that should be checked
 */
export function isHTML(text: string): boolean {
  const trimmedText = text.trim();

  if (!trimmedText.startsWith("<") || !trimmedText.endsWith(">")) {
    return false;
  }

  if (UPPERCASE_TAGS.test(trimmedText)) {
    return false;
  }

  if (CLASSNAME_ATTRIBUTE.test(trimmedText)) {
    return false;
  }

  return true;
}
