# Graph Report - Android  (2026-09-21)

## Corpus Check
- 14 files · ~31,404 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 57 nodes · 52 edges · 15 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `18109597`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- ExampleInstrumentedTest.java
- copy-web.mjs
- gradlew
- dependencies
- scripts
- MainActivity.java
- publish.mjs
- devDependencies

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `ExampleInstrumentedTest` - 4 edges
3. `MainActivity` - 2 edges
4. `ExampleUnitTest` - 2 edges
5. `private` - 1 edges
6. `copy:web` - 1 edges
7. `sync` - 1 edges
8. `publish` - 1 edges
9. `open` - 1 edges
10. `@capacitor/android` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (15 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.18
Nodes (10): description, name, private, version, @capacitor/android, @capacitor/app, @capacitor/cli, @capacitor/core (+2 more)

### Community 1 - "ExampleInstrumentedTest.java"
Cohesion: 0.33
Nodes (5): ExampleInstrumentedTest, ExampleUnitTest, androidx.test.ext.junit.runners.AndroidJUnit4, org.junit.runner.RunWith, org.junit.Test

### Community 2 - "copy-web.mjs"
Cohesion: 0.33
Nodes (5): dest, here, htmlPath, root, src

### Community 3 - "gradlew"
Cohesion: 0.83
Nodes (3): gradlew script, die(), warn()

### Community 4 - "dependencies"
Cohesion: 0.40
Nodes (5): dependencies, @capacitor/android, @capacitor/app, @capacitor/core, @capgo/capacitor-updater

### Community 5 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, copy:web, open, publish, sync

### Community 13 - "publish.mjs"
Cohesion: 0.40
Nodes (4): here, match, root, versionSrc

### Community 14 - "devDependencies"
Cohesion: 0.67
Nodes (3): devDependencies, @capacitor/cli, @capgo/cli

## Knowledge Gaps
- **29 isolated node(s):** `name`, `version`, `private`, `description`, `copy:web` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 35 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._