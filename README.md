<h1 align="center">Paste HTML as JSX</h1>

<p align="center">
    Converts copied HTML to JSX before pasting into JavaScript/TypeScript code.
</p>

---

## Overview

-   [Overview](#overview)
-   [Get Started](#get-started)
-   [How it works](#how-it-works)
-   [Problems or Suggestions](#problems-or-suggestions)

## Get Started

Just copy HTML from anywhere and paste it into any JavaScript or TypeScript
file. It has automagically been converted to JSX!

![Demo of Paste HTML as JSX](https://raw.githubusercontent.com/leodr/paste-html-as-jsx/master/assets/demo.png)

## How It Works

Since the VSCode extension API does not offer an interception point to modify
clipboard content before pasting, this has to rely on changing the clipboard
text at potentially relevant times.

The extension kicks in when one of the following events happen:

-   You focus the VSCode window and the current editor has a relevant language
    id
-   You focus a different editor that has a relevant language id

The relevant language ids are:

-   `javascript`
-   `javascriptreact`
-   `typescriptreact`

The extension then checks if the clipboard is HTML by checking if the first
non-whitespace character is `<` and the last is `>` (I know, it is not very
accurates). If that is true, it convert your clipboard contents to JSX and
writes it back.

## Problems or Suggestions

If you experience any issues or have ideas on how to improve the extension, feel
free to [open an issue](https://github.com/leodr/paste-html-as-jsx/issues/new).

---

_Paste HTML as JSX_, a VSCode extension by
[leodriesch](https://github.com/leodr).

If you like this extension and would like to know about more cool stuff I do,
check out my Twitter [@leodriesch](https://twitter.com/leodriesch)!

<img
    src="https://raw.githubusercontent.com/leodr/paste-html-as-jsx/master/assets/logo.png"
    width="128"
/>
