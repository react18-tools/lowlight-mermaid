# Lowlight Mermaid <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/react18-tools/lowlight-mermaid/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/lowlight-mermaid/actions/workflows/test.yml)
[![Maintainability](https://qlty.sh/gh/react18-tools/projects/lowlight-mermaid/maintainability.svg)](https://qlty.sh/gh/react18-tools/projects/lowlight-mermaid)
[![codecov](https://codecov.io/gh/react18-tools/lowlight-mermaid/graph/badge.svg)](https://codecov.io/gh/react18-tools/lowlight-mermaid)
[![Version](https://img.shields.io/npm/v/lowlight-mermaid.svg?colorB=green)](https://www.npmjs.com/package/lowlight-mermaid)
[![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/lowlight-mermaid.svg)](https://www.npmjs.com/package/lowlight-mermaid)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/lowlight-mermaid)

> **TypeScript grammar definitions for Mermaid syntax highlighting**
> Compatible with **highlight.js** and **lowlight**, designed for editors, markdown renderers, and converters.

---

## ✨ Features

- 📦 **No runtime bloat** — ships only grammar definitions
- ⚡ Plug-and-play with [`highlight.js`](https://highlightjs.org/) / [`lowlight`](https://github.com/wooorm/lowlight)
- 🔧 Full **TypeScript types** included
- 🛠 Reusable across **editors, docs, converters** (e.g. [`@tiptap/extension-code-block-lowlight`](https://tiptap.dev) or [`mdast2docx`](https://github.com/react18-tools/mdast2docx))

---

## 🚀 Install

```bash
pnpm add lowlight-mermaid
```

**_or_**

```bash
npm install lowlight-mermaid
```

**_or_**

```bash
yarn add lowlight-mermaid
```

---

## 📖 Usage

```ts
import { mermaidGrammar } from "lowlight-mermaid";
import hljs from "highlight.js/lib/core";

hljs.registerLanguage("mermaid", mermaidGrammar);

const code = `flowchart TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]`;

const result = hljs.highlight(code, { language: "mermaid" });

console.log(result.value);
```

---

## 🙏 Acknowledgments

- [highlight.js](https://highlightjs.org/) — core highlighting engine
- [lowlight](https://github.com/wooorm/lowlight) — AST-friendly wrapper

---

## 📜 License

Licensed under **MPL-2.0** open-source license.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" height="20"/>
  <br/>
  Support my work via <a href="https://github.com/sponsors/mayank1513">GitHub Sponsors</a> or explore <a href="https://mayank-chaudhari.vercel.app/courses">courses</a>.
</p>

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
