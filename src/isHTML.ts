const NO_UPPERCASE_TAGS = /<\s*[A-Z]/;

/**
 * Checks if a given input string is HTML code.
 * @param text The input that should be checked
 */
export function isHTML(text: string): boolean {
    const trimmedText = text.trim();

    if (!trimmedText.startsWith("<") || !trimmedText.endsWith(">")) {
        return false;
    }

    if (NO_UPPERCASE_TAGS.test(trimmedText)) {
        return false;
    }

    return true;
}
