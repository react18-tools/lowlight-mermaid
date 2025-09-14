import type { HLJSApi, Language } from "highlight.js";

/**
 * Mermaid grammar definition for highlight.js / lowlight
 *
 * Reference: https://mermaid.js.org/intro/syntax-reference.html
 *
 * Register with lowlight:
 *   import { lowlight } from "lowlight/lib/core.js";
 *   import mermaidGrammar from "./grammar";
 *   lowlight.registerLanguage("mermaid", mermaidGrammar);
 */
export const mermaidGrammar = (hljs: HLJSApi): Language => ({
  name: "Mermaid",
  aliases: ["mermaid"],
  case_insensitive: true,
  contains: [
    /**
     * Comments
     * Mermaid uses `%%` for line comments.
     */
    hljs.COMMENT(/%%/, /$/),

    /**
     * Directives
     * Block-style config like: %%{ init: { "theme": "dark" } }%%
     * Highlight the whole directive as `meta`,
     * with keys and values tokenized inside.
     */
    {
      className: "meta",
      begin: /%%\{/,
      end: /\}%%/,
      contains: [
        {
          className: "attr",
          begin: /[A-Za-z][A-Za-z0-9_-]*(?=\s*:)/,
        },
        {
          className: "string",
          begin: /:\s*/,
          end: /(?=(,\s*[A-Za-z]|$))/,
          excludeBegin: true,
        },
      ],
    },

    /**
     * YAML frontmatter
     * Optional config section at the top, delimited by --- lines.
     */
    {
      className: "meta",
      begin: /^---\s*$/,
      end: /^---\s*$/,
      contains: [
        {
          className: "attr", // YAML keys
          begin: /^\s*[A-Za-z][A-Za-z0-9_-]*:/,
          end: /:/,
          excludeEnd: true,
        },
        {
          className: "string", // YAML values
          begin: /:\s*/,
          end: /$/,
          excludeBegin: true,
        },
      ],
    },

    /**
     * Diagram keywords
     * Cover all supported diagram types and optional direction (LR, TB, RL, BT).
     */
    {
      className: "keyword",
      begin:
        /\b(?:flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|pie|gantt|requirement|sankey|timeline|quadrant)(?:\s+(?:LR|TB|RL|BT))?\b/,
    },

    /**
     * Connectors / edges
     * Flow arrows, class/ER relationships, lifeline arrows, etc.
     */
    {
      className: "operator",
      begin:
        /(?:-->|---|-\.-|==>|<-+>|o--o|x--x|\|>|<\||<-->|==|--\||\|--|->>|-->>|<\|--|\*--|:>|o\{--|\}o--)/,
    },

    /**
     * Sequence diagram messages
     * Example: A->>B: message text
     */
    {
      className: "meta",
      begin: /\b[A-Za-z0-9_]+\s*-[->]+[A-Za-z0-9_]+\s*:/,
      end: /$/,
      contains: [
        {
          className: "string",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: true,
        },
      ],
    },

    /**
     * Node shapes
     * Rectangles, rounds, circles, diamonds, trapezoids, links, etc.
     */
    {
      className: "string",
      variants: [
        { begin: /\[[^\]]+\]/ }, // [rect]
        { begin: /\([^)]+\)/ }, // (round)
        { begin: /\(\([^)]+\)\)/ }, // ((circle))
        { begin: /\{[^}]+\}/ }, // {diamond}
        { begin: />[^<]+</ }, // >trapezoid<
        { begin: /\[\[[^\]]+\]\]/ }, // [[link]]
      ],
    },

    /**
     * Notes
     * Example: note left of A: This is a note
     */
    {
      className: "string",
      begin: /note\s+(?:left|right|top|bottom)\s+of\s+[A-Za-z0-9_]+/i,
    },

    /**
     * Identifiers / labels
     * Node IDs or barewords.
     */
    {
      className: "title",
      begin: /\b[A-Za-z0-9_]+\b/,
    },

    /**
     * Quoted text
     * Often used for labels or annotations.
     */
    {
      className: "string",
      begin: /".*?"/,
    },

    /**
     * Numbers
     * Common in gantt/journey/timeline diagrams.
     */
    {
      className: "number",
      begin: /\b\d+([:.]\d+)?\b/,
    },

    /**
     * Punctuation
     * Structural tokens that aren’t part of identifiers or shapes.
     */
    {
      className: "punctuation",
      begin: /[:;#{}[\]()]/,
    },
  ],
});
