# Change Log

All notable changes to the "html-to-jsx" extension will be documented in this
file.

## [Unreleased]

-   Change activation to `onLanguage`-event for `javascript`, `javascriptreact`
    and `typescriptreact`
-   Swap clipboard also on editor change
-   Only swap clipboard when window receives focus and the active editor is a
    relevant language

## [0.0.1] - 2020-11-20

### Added

-   Convert HTML from clipboard to JSX when the VSCode window has a focus
    change.
