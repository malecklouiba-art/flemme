# Project tooling (Claude Code)

This repo ships a curated Claude Code toolset. Plugins are declared in
`.claude/settings.json` (project scope) and auto-load every session; project
skills live in `.claude/skills/`.

## Installed plugins (auto-loaded from `.claude/settings.json`)
| Plugin | Marketplace | What it does |
|--------|-------------|--------------|
| `caveman` | juliusbrussee/caveman | Ultra-compressed "caveman" replies, ~75% fewer tokens. Has a SessionStart hook that offers the mode. |
| `superpowers` | obra/superpowers | Library of skills + subagents (TDD, systematic debugging, brainstorming, parallel agents, plan writing/execution). |
| `ui-ux-pro-max` | nextlevelbuilder/ui-ux-pro-max-skill | Design intelligence: 67 styles, 161 palettes, font pairings, charts, 15 stack guides. |
| `frontend-design` | anthropics/claude-code | Anthropic's frontend design skill for UI/UX implementation. |

> First run in a fresh container fetches these marketplaces from GitHub
> (network required). Manage with `claude plugin list` / `claude plugin update`.

## Project skills (`.claude/skills/`)
- **design-gallery** — animation/3D/component stack: GSAP, Three.js, Anime.js,
  Spline, Animate UI, Forge UI, Vengeance UI, UIverse, + motionsites.ai. Use when
  building animated, modern, premium web UIs.
- **graphify** — turn the codebase into a navigable knowledge graph; see below.

### graphify CLI (not bundled — install once per fresh container)
The `graphify` skill/hooks call the `graphify` CLI, a Python tool that is **not**
persisted in this ephemeral environment. Install it when you want to use it:
```bash
uv tool install graphifyy     # or: pipx install graphifyy / pip install graphifyy
```
The PreToolUse hooks in `.claude/settings.json` are no-ops until a graph exists
(`graphify-out/graph.json`), so they are harmless when the CLI is absent.

---

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
