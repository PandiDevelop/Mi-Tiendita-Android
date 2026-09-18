# Graph Report - Android  (2026-09-17)

## Corpus Check
- 13 files · ~31,211 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 47 nodes · 43 edges · 13 communities (6 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `157f7a9e`
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

## God Nodes (most connected - your core abstractions)
1. `ExampleInstrumentedTest` - 4 edges
2. `scripts` - 4 edges
3. `MainActivity` - 2 edges
4. `ExampleUnitTest` - 2 edges
5. `private` - 1 edges
6. `copy:web` - 1 edges
7. `sync` - 1 edges
8. `open` - 1 edges
9. `@capacitor/android` - 1 edges
10. `@capacitor/android` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.18
Nodes (10): description, devDependencies, @capacitor/cli, name, private, version, @capacitor/android, @capacitor/app (+2 more)

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
Cohesion: 0.50
Nodes (4): dependencies, @capacitor/android, @capacitor/app, @capacitor/core

### Community 5 - "scripts"
Cohesion: 0.50
Nodes (4): scripts, copy:web, open, sync

## Knowledge Gaps
- **20 isolated node(s):** `name`, `version`, `private`, `description`, `copy:web` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 26 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._