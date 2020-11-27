# Changelog

All notable changes to the "paste-html-as-jsx" extension will be documented in
this file.

## [0.2.3] - 2020-11-27

### Fixed

-   Detect that string is JSX if it contains a `className`-attribute

## [0.2.2] - 2020-11-22

### Fixed

-   Detect if JSX is copied and stop trying to convert it

## [0.2.1] - 2020-11-21

### Changed

-   Decrease minimum VSCode version to 1.45 since it was unnecessarily high.

### Fixed

-   Fix bug where empty alt tags on images where converted to boolean attributes
    ([1](https://github.com/leodr/paste-html-as-jsx/issues/1))

## [0.2.0] - 2020-11-21

### Added

-   Add an MIT license

### Changed

-   Add a proper README
-   Optimize metadataa for VSCode marketplace

## [0.1.0] - 2020-11-20

### Added

-   Swap clipboard on editor change

### Changed

-   Change activation to `onLanguage`-event for `javascript`, `javascriptreact`
    and `typescriptreact`
-   Only swap clipboard when window receives focus and the active editor is a
    relevant language

## [0.0.1] - 2020-11-20

### Added

-   Convert HTML from clipboard to JSX when the VSCode window has a focus
    change.
