<h1 align="center">Paste HTML as JSX</h1>

<p align="center">
    Converts copied HTML to JSX before pasting into JavaScript/TypeScript code.
</p>
<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=leodriesch.paste-html-as-jsx" target="_blank">
        <img alt="Visual Studio Marketplace Version" src="https://img.shields.io/visual-studio-marketplace/v/leodriesch.paste-html-as-jsx?color=%236366F1&labelColor=%2327272A&style=for-the-badge">
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=leodriesch.paste-html-as-jsx" target="_blank">
        <img alt="Visual Studio Marketplace Downloads" src="https://img.shields.io/visual-studio-marketplace/d/leodriesch.paste-html-as-jsx?color=%2310B981&labelColor=%2327272A&style=for-the-badge">
    </a>
</p>

---

## Overview

- [Get Started](#get-started)
- [`on-demand` Mode](#on-demand-mode)
- [How It Works](#how-it-works)
- [Problems or Suggestions](#problems-or-suggestions)

## Get Started

Just copy HTML from anywhere and paste it into any JavaScript or TypeScript
file. It has automagically been converted to JSX!

![Demo of Paste HTML as JSX](https://raw.githubusercontent.com/leodr/paste-html-as-jsx/master/assets/demo.png)

## `on-demand` Mode

Sometimes the automatic JSX-conversion can be annoying, for example when working
on hybrid projects that use both JSX and HTML.

If you want to control the conversion by yourself, there is an `on-demand` mode,
which can be activated by setting the `paste-html-as-jsx.mode` setting to
`on-demand`.

When the `on-demand` mode is active, copied HTML will NOT be automatically
converted. A command is added to the palette that can convert your clipboard
contents from HTML to JSX at any point.

## How It Works

Since the VSCode extension API does not offer an interception point to modify
clipboard content before pasting, this has to rely on changing the clipboard
text at potentially relevant times.

The extension kicks in when one of the following events happen:

- You focus the VSCode window and the current editor has a relevant language id
- You focus a different editor that has a relevant language id

The relevant language ids are:

- `javascript`
- `javascriptreact`
- `typescriptreact`

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
