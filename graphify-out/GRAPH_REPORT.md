# Graph Report - Landing  (2026-07-22)

## Corpus Check
- 27 files · ~932,553 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 68 nodes · 65 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_..layoutsBaseLayout.astro|../layouts/BaseLayout.astro]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_index.astro|index.astro]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_Platen Landing|Platen Landing]]
- [[_COMMUNITY_tsconfig.json|tsconfig.json]]
- [[_COMMUNITY_AGENTS|AGENTS.md]]
- [[_COMMUNITY_CLAUDE|CLAUDE.md]]
- [[_COMMUNITY_site.ts|site.ts]]

## God Nodes (most connected - your core abstractions)
1. `../layouts/BaseLayout.astro` - 10 edges
2. `scripts` - 5 edges
3. `../Reveal.astro` - 4 edges
4. `Platen Landing` - 4 edges
5. `../components/Footer.astro` - 3 edges
6. `../components/Header.astro` - 3 edges
7. `../components/home/GuestPreview.astro` - 3 edges
8. `../components/home/Plans.astro` - 3 edges
9. `compilerOptions` - 3 edges
10. `Setup` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 0 - "../layouts/BaseLayout.astro"
Cohesion: 0.15
Nodes (9): ../lib/site, ../styles/global.css, ../components/Footer.astro, year, ../components/Header.astro, links, ../components/Seo.astro, ../layouts/BaseLayout.astro (+1 more)

### Community 1 - "package.json"
Cohesion: 0.18
Nodes (10): engines, node, name, scripts, astro, build, dev, preview (+2 more)

### Community 2 - "index.astro"
Cohesion: 0.27
Nodes (9): ../GlassPillsPreview.astro, items, ../components/home/FinalCta.astro, ../components/home/GuestPreview.astro, ../components/home/Hero.astro, ../components/home/HowItWorks.astro, ../components/home/Plans.astro, plans (+1 more)

### Community 3 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, astro, @astrojs/react, react, react-dom, tailwindcss, @tailwindcss/vite, @types/react (+1 more)

### Community 4 - "Platen Landing"
Cohesion: 0.29
Nodes (6): Brand picker (internal), Env, Platen Landing, Scripts, Setup, Stack

### Community 5 - "tsconfig.json"
Cohesion: 0.29
Nodes (6): compilerOptions, jsx, jsxImportSource, exclude, extends, include

## Knowledge Gaps
- **37 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+32 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/BaseLayout.astro` connect `../layouts/BaseLayout.astro` to `index.astro`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _37 weakly-connected nodes found - possible documentation gaps or missing edges._