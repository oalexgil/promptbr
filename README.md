# PromptBR

**IA útil, aplicada ao trabalho real.**

PromptBR is a Brazilian, Portuguese-first hub for practical artificial intelligence. It started as a prompt library and is being rebuilt as a distribution and learning layer for prompts, tools, guides, experiments and products that solve real tasks.

**Site:** https://brprompt.tec.br

## Purpose

Reduce the distance between:

```text
"I saw a new AI tool"
        ↓
"What is it actually good for?"
        ↓
"How do I use it in my context?"
        ↓
"Can I repeat the result?"
```

The product is organized around tasks instead of hype.

## Current assets

- **245 prompts** in Portuguese in the public library;
- long-form guides and tutorials;
- task-first AI tools directory;
- Beehiiv newsletter;
- SEO-ready static publishing on GitHub Pages;
- legal/privacy pages;
- room for first-party labs and products as they become public.

## Editorial principles

1. **Utility before novelty.** A topic should change an action, decision or workflow.
2. **Context before magic prompts.** Good output depends on objective, constraints and verification.
3. **Transparent AI use.** AI-assisted content still requires human review.
4. **Brazilian context.** Portuguese that sounds natural and tools/examples relevant to local users.
5. **No invented proof.** Traffic, subscribers, performance and product claims must be measured before publication.

## Information architecture

- `index.html` — positioning and main routes;
- `prompts.html` — searchable prompt library;
- `ferramentas.html` — tools organized by task;
- `blog.html` + `artigo-*.html` — guides and editorial archive;
- `newsletter.html` — real Beehiiv signup;
- `sobre.html` — purpose and editorial model;
- `privacidade.html`, `cookies.html`, `termos.html` — legal pages;
- `global.css` / `global.js` — shared 2026 identity and behavior.

## Brand

The 2026 identity moves away from the generic "green terminal" AI aesthetic.

- dark ink base;
- acid-lime signal color;
- editorial typography;
- modular prompt/cursor mark;
- clear hierarchy and wide whitespace;
- technology shown as a working system, not as sci-fi decoration.

See `BRAND.md`.

## Role in the wider ecosystem

PromptBR is primarily a **distribution asset**. Free prompts and useful guides attract search and recurring readers; newsletter and task pages create owned distribution. First-party tools can later plug into this structure when they have a public, testable value proposition.

## Stack

`HTML` · `CSS` · `JavaScript` · `GitHub Pages` · `Beehiiv`

The static-first architecture remains deliberate: low operating cost, fast pages and minimal infrastructure until a feature actually requires a backend.

## Development

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Current redesign branch

`redesign/ai-aplicada-hub`

The redesign preserves the existing content archive while gradually retiring stale positioning and unverified marketing claims.
