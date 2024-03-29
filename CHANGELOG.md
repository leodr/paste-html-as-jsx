# Changelog

All notable changes to the "paste-html-as-jsx" extension will be documented in
this file.

## [1.0.0] - 2022-09-18

### Added

- Web extension compatibility, this extension now works on vscode.dev and other
  instances of VSCode running in a browser context

### Changed

- Use a [new AST-based library](https://github.com/leodr/html-to-jsx-transform)
  for converting HTML to JSX which results in fewer bugs and weird behavior

## [0.3.0] - 2020-12-25

### Added

- Add a `mode` setting that allows to disable the automatic conversion in favor
  of an on-demand conversion via command.

### Fixed

- Properly dispose listeners

## [0.2.3] - 2020-11-27

### Fixed

- Detect that string is JSX if it contains a `className`-attribute

## [0.2.2] - 2020-11-22

### Fixed

- Detect if JSX is copied and stop trying to convert it

## [0.2.1] - 2020-11-21

### Changed

- Decrease minimum VSCode version to 1.45 since it was unnecessarily high.

### Fixed

- Fix bug where empty alt tags on images where converted to boolean attributes
  ([1](https://github.com/leodr/paste-html-as-jsx/issues/1))

## [0.2.0] - 2020-11-21

### Added

- Add an MIT license

### Changed

- Add a proper README
- Optimize metadataa for VSCode marketplace

## [0.1.0] - 2020-11-20

### Added

- Swap clipboard on editor change

### Changed

- Change activation to `onLanguage`-event for `javascript`, `javascriptreact`
  and `typescriptreact`
- Only swap clipboard when window receives focus and the active editor is a
  relevant language

## [0.0.1] - 2020-11-20

### Added

- Convert HTML from clipboard to JSX when the VSCode window has a focus change.
