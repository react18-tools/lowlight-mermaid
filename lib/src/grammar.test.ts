// tests/grammar.test.ts
import { describe, it, expect } from "vitest";
import mermaidGrammar from "./grammar";
import hljs from "highlight.js/lib/core";

hljs.registerLanguage("mermaid", mermaidGrammar);

describe("mermaidGrammar", () => {
  it("highlights comments", () => {
    const tree = hljs.highlight("mermaid", "%% this is a comment");
    expect(JSON.stringify(tree)).toContain("comment");
  });

  it("highlights directives", () => {
    const code = `%%{ init: { "theme": "dark" } }%%`;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("meta");
    expect(JSON.stringify(tree)).toContain("attr");
    expect(JSON.stringify(tree)).toContain("string");
  });

  it("highlights diagram keywords with direction", () => {
    const code = `flowchart LR`;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("keyword");
  });

  it("highlights connectors", () => {
    const code = `A --> B\nB -->> C\nClassA <|-- ClassB\nEntity o{--|| Entity2`;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("operator");
  });

  it("highlights sequence messages", () => {
    const code = `A->>B: Hello World`;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("meta");
    expect(JSON.stringify(tree)).toContain("string");
  });

  it("highlights node shapes", () => {
    const code = `
      A[Rectangle]
      B(Round)
      C((Circle))
      D{Diamond}
      E>Trapezoid]
      F[[Link]]
    `;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("string");
  });

  it("highlights notes", () => {
    const code = `note right of A: this is a note`;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("string");
  });

  it("highlights quoted labels", () => {
    const code = `"some label"`;
    const tree = hljs.highlight("mermaid", code);
    expect(JSON.stringify(tree)).toContain("string");
  });

  it("highlights numbers", () => {
    const code = `dateFormat YYYY-MM-DD`;
    const tree = hljs.highlight("mermaid", "gantt\n2023-01-01");
    expect(JSON.stringify(tree)).toContain("number");
  });
});
