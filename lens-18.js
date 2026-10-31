/* Roadmap Lens 2.18 — built 2026-10-31T16:16:06.820Z */
if (!(globalThis.SFR && globalThis.SFR.booted)) {
globalThis.SFR = { BUILD: 18, VERSION: "2.18", CSS: "/* ==========================================================================\n   Roadmap Lens — design system «نقشه‌راه»\n   Persian-first, RTL-native. Tokens → atoms → layout → views.\n   Type scale (6): 12 · 13 · 14 · 16 · 20 · 48   |  Spacing: 4px grid\n   Radius: control 8 · card 12 · panel 16          |  Motion: 160–240ms\n   Data marks use the validated status palette (--s-*); text never wears it.\n   ========================================================================== */\n\n:host { all: initial; }\n\n/* ---------- tokens ---------- */\n.app, .launcher {\n  --font: \"SFR Vazirmatn\", Vazirmatn, Tahoma, system-ui, sans-serif;\n  --fs-xs: 12px; --fs-sm: 13px; --fs-md: 14px; --fs-lg: 16px; --fs-xl: 20px; --fs-hero: 48px;\n  --r-control: 8px; --r-card: 12px; --r-panel: 16px; --r-pill: 999px;\n  --ease: cubic-bezier(.2, 0, 0, 1); --t-fast: 160ms; --t: 220ms;\n\n  --bg: #f6f5f2;\n  --surface: #fcfcfb;\n  --surface-2: #f1f0ec;\n  --surface-3: #e8e6e0;\n  --ink: #141413;\n  --ink-2: #52514e;\n  --ink-3: #6b6a64;\n  --line: rgba(11, 11, 11, .09);\n  --line-2: rgba(11, 11, 11, .16);\n  --grid: #e1e0d9;\n  --baseline: #c3c2b7;\n  --primary: #141413; --primary-ink: #fcfcfb;\n  --accent: #2a78d6; --accent-soft: rgba(42, 120, 214, .10); --accent-ink: #1c5cab;\n  --brand: #ef0d8a;\n  --danger: #d03b3b; --danger-soft: rgba(208, 59, 59, .10);\n  --ok-ink: #006300;\n  --focus: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent);\n  --shadow-card: 0 1px 2px rgba(20, 20, 19, .05);\n  --shadow-lift: 0 2px 4px rgba(20, 20, 19, .06), 0 8px 24px rgba(20, 20, 19, .08);\n  --shadow-overlay: 0 24px 64px -16px rgba(20, 20, 19, .28), 0 2px 8px rgba(20, 20, 19, .08);\n  --scrim: rgba(20, 20, 19, .28);\n\n  /* status palette — validated (light): CVD ΔE ≥ 9.6, normal-vision ΔE ≥ 15.6 adjacent */\n  --s-done: #008300; --s-devdone: #1baf7a; --s-progress: #2a78d6;\n  --s-pending: #eda100; --s-todo: #6250d6; --s-canceled: #e34948;\n  --s-cat1: #2a78d6;\n}\n.app[data-theme=\"dark\"], .launcher.dark {\n  --bg: #0f0f0e;\n  --surface: #1a1a19;\n  --surface-2: #232321;\n  --surface-3: #2d2d2a;\n  --ink: #f0efec;\n  --ink-2: #c3c2b7;\n  --ink-3: #9d9b92;\n  --line: rgba(255, 255, 255, .09);\n  --line-2: rgba(255, 255, 255, .16);\n  --grid: #2c2c2a;\n  --baseline: #383835;\n  --primary: #f0efec; --primary-ink: #141413;\n  --accent: #3987e5; --accent-soft: rgba(57, 135, 229, .16); --accent-ink: #86b6ef;\n  --danger: #e66767; --danger-soft: rgba(230, 103, 103, .14);\n  --ok-ink: #0ca30c;\n  --shadow-card: none;\n  --shadow-lift: 0 0 0 1px rgba(255, 255, 255, .06), 0 8px 24px rgba(0, 0, 0, .4);\n  --shadow-overlay: 0 24px 64px -12px rgba(0, 0, 0, .7), 0 0 0 1px rgba(255, 255, 255, .06);\n  --scrim: rgba(0, 0, 0, .5);\n  /* dark steps — validated as a set against #1a1a19 */\n  --s-done: #008300; --s-devdone: #1baf7a; --s-progress: #3987e5;\n  --s-pending: #c98500; --s-todo: #9085e9; --s-canceled: #e66767;\n  --s-cat1: #3987e5;\n}\n\n/* ---------- base ---------- */\n.app {\n  position: fixed; inset: 0;\n  display: grid; grid-template-rows: 56px 1fr;\n  background: var(--bg); color: var(--ink);\n  font: 400 var(--fs-md)/1.7 var(--font);\n  letter-spacing: 0;\n  -webkit-font-smoothing: antialiased;\n  color-scheme: light;\n  direction: rtl; text-align: start;\n  animation: app-in var(--t) var(--ease);\n}\n.app[data-theme=\"dark\"] { color-scheme: dark; }\n@keyframes app-in { from { opacity: 0; transform: scale(.995); } }\n.app *, .app *::before, .app *::after { box-sizing: border-box; }\n:where(.app) button, :where(.app) input, :where(.app) select, :where(.app) textarea { font: inherit; color: inherit; letter-spacing: 0; }\n:where(.app) button { cursor: pointer; background: none; border: 0; padding: 0; }\n.app :focus-visible { outline: none; box-shadow: var(--focus); border-radius: var(--r-control); }\n.app [hidden] { display: none !important; }\n:where(.app) a { color: var(--accent-ink); text-decoration: none; }\n:where(.app) a:hover { text-decoration: underline; }\n:where(.app) :where(h1, h2, h3, h4, p, ul, ol, dl, dd) { margin: 0; padding: 0; }\n:where(.app) :where(ul, ol) { list-style: none; }\n.grow { flex: 1 1 auto; }\n.muted { color: var(--ink-3); }\n.center { display: flex; justify-content: center; }\n.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }\n.ic { flex: none; display: inline-block; vertical-align: middle; stroke-width: 1.75; }\n.flip-x { transform: scaleX(-1); }\n.flip-y { transform: scaleY(-1); }\n.spin { animation: spin 1s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\nkbd {\n  font: 500 11px/1 var(--font); color: var(--ink-3);\n  border: 1px solid var(--line-2); border-bottom-width: 2px; border-radius: 4px; padding: 2px 4px;\n  background: var(--surface);\n}\nbdi.key { font: 500 var(--fs-xs)/1 ui-monospace, \"SF Mono\", Menlo, monospace; color: var(--ink-3); unicode-bidi: isolate; }\n.app ::-webkit-scrollbar { width: 10px; height: 10px; }\n.app ::-webkit-scrollbar-thumb { background: var(--surface-3); border-radius: 10px; border: 2px solid transparent; background-clip: content-box; }\n.app ::-webkit-scrollbar-thumb:hover { background-color: var(--line-2); }\n\n/* ---------- atoms: buttons ---------- */\n.btn {\n  display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px;\n  border-radius: var(--r-control); font-weight: 600; font-size: var(--fs-sm); white-space: nowrap;\n  transition: background var(--t-fast) var(--ease), transform var(--t-fast) var(--ease), border-color var(--t-fast);\n}\n.btn:active { transform: scale(.98); }\n.btn-primary { background: var(--primary); color: var(--primary-ink); }\n.btn-primary:hover { opacity: .9; }\n.btn-outline { border: 1px solid var(--line-2); background: var(--surface); }\n.btn-outline:hover, .btn-ghost:hover { background: var(--surface-2); }\n.btn-outline.is-active { border-color: var(--accent); background: var(--accent-soft); color: var(--accent-ink); }\n.btn-ghost { color: var(--ink-2); }\n.btn-ghost.is-active { color: var(--ink); background: var(--surface-2); }\n.btn-soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }\n.btn-soft.is-active .ic { color: var(--ok-ink); }\n.btn-sm { height: 32px; padding: 0 10px; }\n.btn-xs { height: 28px; padding: 0 8px; font-size: var(--fs-xs); }\n.btn.is-busy { opacity: .6; pointer-events: none; }\n.icon-btn {\n  display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: var(--r-control); color: var(--ink-2);\n  transition: background var(--t-fast);\n}\n.icon-btn:hover { background: var(--surface-2); color: var(--ink); text-decoration: none; }\n.icon-btn.is-busy .ic { animation: spin 1s linear infinite; }\n.link { color: var(--accent-ink); font-weight: 600; font-size: var(--fs-sm); }\n.link:hover { text-decoration: underline; }\n\n/* ---------- atoms: chips, pills, counts, tags ---------- */\n.chip {\n  display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 12px;\n  border-radius: var(--r-pill); border: 1px solid var(--line); background: var(--surface);\n  font-size: var(--fs-sm); font-weight: 500; color: var(--ink-2); white-space: nowrap;\n  transition: all var(--t-fast) var(--ease);\n}\n.chip:hover { border-color: var(--line-2); color: var(--ink); }\n.chip.is-on { background: var(--ink); border-color: var(--ink); color: var(--surface); }\n.chip.is-on .av { box-shadow: 0 0 0 1.5px var(--ink); }\n.chip-sm { height: 28px; padding: 0 10px; font-size: var(--fs-xs); }\n.count {\n  display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 6px;\n  border-radius: var(--r-pill); background: var(--surface-2); color: var(--ink-2);\n  font-size: var(--fs-xs); font-weight: 600; line-height: 1;\n}\n.btn-outline.is-active .count, .chip.is-on .count { background: var(--accent); color: #fff; }\n.pill {\n  display: inline-flex; align-items: center; gap: 6px; height: 22px; padding: 0 8px;\n  border-radius: var(--r-pill); font-size: var(--fs-xs); font-weight: 600; color: var(--ink-2); white-space: nowrap;\n  background: var(--surface-2);\n}\n.pill .dot { width: 8px; height: 8px; border-radius: 50%; flex: none; }\n.pill-done .dot { background: var(--s-done); } .pill-devdone .dot { background: var(--s-devdone); }\n.pill-progress .dot { background: var(--s-progress); } .pill-pending .dot { background: var(--s-pending); }\n.pill-todo .dot { background: var(--s-todo); } .pill-canceled .dot { background: var(--s-canceled); }\n.pill-done { background: color-mix(in srgb, var(--s-done) 11%, transparent); }\n.pill-devdone { background: color-mix(in srgb, var(--s-devdone) 13%, transparent); }\n.pill-progress { background: color-mix(in srgb, var(--s-progress) 11%, transparent); }\n.pill-pending { background: color-mix(in srgb, var(--s-pending) 15%, transparent); }\n.pill-todo { background: color-mix(in srgb, var(--s-todo) 10%, transparent); }\n.pill-canceled { background: color-mix(in srgb, var(--s-canceled) 10%, transparent); }\n.pill-late { background: var(--danger-soft); color: var(--danger); gap: 4px; }\n.pill-plain { background: var(--surface-2); }\n.tag {\n  display: inline-flex; align-items: center; gap: 4px; height: 22px; padding: 0 8px; border-radius: 6px;\n  background: var(--surface-2); color: var(--ink-2); font-size: var(--fs-xs); font-weight: 500; margin-inline-end: 4px;\n}\n.size {\n  display: inline-grid; place-items: center; height: 20px; min-width: 24px; padding: 0 6px; border-radius: 6px;\n  border: 1px solid var(--line-2); font: 600 11px/1 var(--font); color: var(--ink-2); direction: ltr;\n}\n\n/* ---------- atoms: avatars ---------- */\n.av {\n  display: inline-grid; place-items: center; flex: none; border-radius: 50%; object-fit: cover;\n  background: var(--surface-3); color: var(--ink-2); font-weight: 700; overflow: hidden;\n  box-shadow: 0 0 0 1.5px var(--surface);\n}\n.av-xs { width: 20px; height: 20px; font-size: 9px; }\n.av-sm { width: 28px; height: 28px; font-size: 11px; }\n.av-md { width: 32px; height: 32px; font-size: 12px; }\n.av-empty { background: var(--surface-2); color: var(--ink-3); }\n\n/* ---------- atoms: inputs ---------- */\n.search {\n  display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 12px; min-width: 300px;\n  border: 1px solid var(--line-2); border-radius: var(--r-control); background: var(--surface); color: var(--ink-3);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.search input { flex: 1; min-width: 0; border: 0; outline: 0; background: none; color: var(--ink); font-size: var(--fs-sm); }\n.search input::placeholder { color: var(--ink-3); }\n.search input:focus-visible { box-shadow: none; }\n.search.sm { height: 32px; min-width: 0; margin: 0 16px 8px; }\n.select {\n  position: relative; display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 10px;\n  border: 1px solid var(--line-2); border-radius: var(--r-control); background: var(--surface); color: var(--ink-3);\n}\n.select select { appearance: none; border: 0; outline: 0; background: none; color: var(--ink); font-size: var(--fs-sm); padding-inline-end: 4px; max-width: 260px; cursor: pointer; }\n.select:focus-within { border-color: var(--accent); }\n\n/* segmented switch */\n.switch { display: inline-flex; padding: 3px; gap: 2px; border-radius: 10px; background: var(--surface-2); border: 1px solid var(--line); }\n.switch button {\n  display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px; border-radius: 7px;\n  font-size: var(--fs-sm); font-weight: 500; color: var(--ink-2); white-space: nowrap; transition: all var(--t-fast);\n}\n.switch button:hover { color: var(--ink); }\n.switch button[aria-selected=\"true\"] { background: var(--surface); color: var(--ink); font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 0 0 1px var(--line); }\n.switch.big button { height: 34px; padding: 0 14px; }\n\n/* ---------- top bar ---------- */\n.topbar {\n  display: flex; align-items: center; gap: 24px; padding: 0 20px;\n  background: var(--surface); border-bottom: 1px solid var(--line);\n}\n.brand { display: flex; align-items: center; gap: 10px; min-width: 0; }\n.logo {\n  display: grid; place-items: center; width: 32px; height: 32px; border-radius: 9px;\n  background: var(--ink); color: var(--surface); position: relative;\n}\n.logo::after { content: \"\"; position: absolute; inset-block-start: -2px; inset-inline-start: -2px; width: 10px; height: 10px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 2px var(--surface); }\n.brand-text { display: grid; line-height: 1.3; }\n.brand-text b { font-size: var(--fs-md); font-weight: 700; }\n.brand-text small { font-size: var(--fs-xs); color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px; }\n.tabs { display: flex; gap: 4px; align-self: stretch; }\n.tabs button {\n  position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 0 14px;\n  font-weight: 500; color: var(--ink-2); transition: color var(--t-fast);\n}\n.tabs button:hover { color: var(--ink); }\n.tabs button[aria-selected=\"true\"] { color: var(--ink); font-weight: 700; }\n.tabs button[aria-selected=\"true\"]::after {\n  content: \"\"; position: absolute; inset-inline: 10px; bottom: -1px; height: 2px; border-radius: 2px 2px 0 0; background: var(--ink);\n}\n.badge {\n  display: inline-grid; place-items: center; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px;\n  background: var(--brand); color: #fff; font-size: 11px; font-weight: 700; line-height: 1;\n}\n.top-actions { display: flex; align-items: center; gap: 4px; margin-inline-start: auto; }\n.sync { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); margin-inline-end: 8px; }\n.me { margin-inline-start: 8px; display: inline-flex; }\n\n/* ---------- main & state ---------- */\n.main { position: relative; min-height: 0; overflow: hidden; }\n.view { height: 100%; min-height: 0; }\n.view[data-view=\"board\"] { display: flex; flex-direction: column; }\n.view[data-view=\"following\"], .view[data-view=\"dashboard\"], .view[data-view=\"sif\"], .view[data-view=\"capacity\"] { overflow-y: auto; }\n.state-screen { height: 100%; padding-top: 72px; }\n.state-screen .kanban { padding-top: 0; }\n\n/* ---------- board toolbar ---------- */\n.toolbar { padding: 16px 20px 12px; display: grid; gap: 12px; }\n.tb-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.seg-group { display: flex; gap: 6px; flex-wrap: wrap; }\n.facepile { display: flex; align-items: center; }\n.face { margin-inline-start: -6px; border-radius: 50%; transition: transform var(--t-fast) var(--ease); }\n.face:first-child { margin-inline-start: 0; }\n.face:hover { transform: translateY(-2px); z-index: 1; }\n.face.is-on .av { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent); }\n.face.more { display: grid; place-items: center; width: 32px; height: 32px; background: var(--surface-2); border: 1px dashed var(--line-2); color: var(--ink-2); margin-inline-start: 4px; }\n.status-filter { display: flex; gap: 4px; flex-wrap: wrap; }\n.sf {\n  display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px; border-radius: var(--r-pill);\n  font-size: var(--fs-sm); color: var(--ink-2); border: 1px solid transparent; transition: all var(--t-fast);\n}\n.sf .dot { width: 8px; height: 8px; border-radius: 50%; }\n.sf b { font-weight: 600; color: var(--ink-3); font-size: var(--fs-xs); }\n.sf:hover { background: var(--surface-2); }\n.sf.is-on { background: var(--surface); border-color: var(--line-2); color: var(--ink); font-weight: 600; box-shadow: var(--shadow-card); }\n.sf-done .dot { background: var(--s-done); } .sf-devdone .dot { background: var(--s-devdone); } .sf-progress .dot { background: var(--s-progress); }\n.sf-pending .dot { background: var(--s-pending); } .sf-todo .dot { background: var(--s-todo); } .sf-canceled .dot { background: var(--s-canceled); }\n.active-chips { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding-inline-start: 12px; border-inline-start: 1px solid var(--line); }\n.active-chips .chip { height: 28px; padding: 0 10px; font-size: var(--fs-xs); }\n.result-count { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--ink-3); }\n\n/* ---------- kanban ---------- */\n.kanban {\n  flex: 1; min-height: 0; display: flex; gap: 12px; padding: 4px 20px 20px; overflow-x: auto; overflow-y: hidden;\n  scroll-snap-type: x proximity; overscroll-behavior-x: contain;\n}\n.column {\n  flex: 0 0 296px; width: 296px; min-width: 0; display: flex; flex-direction: column; min-height: 0; max-height: 100%;\n  background: var(--surface-2); border-radius: var(--r-panel); border: 1px solid transparent;\n  scroll-snap-align: start; transition: border-color var(--t-fast), background var(--t-fast);\n}\n.column.is-backlog { flex-basis: 312px; width: 312px; }\n.column.is-current { background: color-mix(in srgb, var(--accent) 6%, var(--surface-2)); border-color: color-mix(in srgb, var(--accent) 22%, transparent); }\n.column.is-over { border-color: var(--accent); border-style: dashed; background: var(--accent-soft); }\n.column.rail {\n  flex: 0 0 48px; align-items: center; gap: 12px; padding: 16px 0; color: var(--ink-2); cursor: pointer;\n}\n.column.rail span { writing-mode: vertical-rl; font-weight: 700; }\n.column.rail b { font-size: var(--fs-xs); color: var(--ink-3); }\n.column.rail:hover { background: var(--surface-3); }\n.col-head { padding: 12px 14px 10px; display: grid; gap: 8px; }\n.col-title { display: flex; align-items: baseline; gap: 8px; }\n.col-title b { font-size: var(--fs-lg); font-weight: 700; line-height: 1.3; }\n.col-title small { font-size: var(--fs-xs); color: var(--ink-3); }\n.now { font-size: 11px; font-weight: 700; color: var(--accent-ink); background: var(--accent-soft); padding: 1px 8px; border-radius: var(--r-pill); align-self: center; }\n.col-dist { display: flex; gap: 2px; height: 6px; border-radius: 3px; overflow: hidden; }\n.col-dist i { display: block; height: 100%; min-width: 2px; }\n.col-dist.is-none { background: var(--surface-3); }\n.col-done { font-size: var(--fs-xs); color: var(--ink-3); line-height: 1; }\n.col-body { flex: 1; min-height: 0; overflow-y: auto; padding: 2px 8px 10px; display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: 8px; }\n.col-empty { display: grid; justify-items: center; gap: 4px; padding: 24px 0; color: var(--ink-3); font-size: var(--fs-sm); }\n.more {\n  width: 100%; height: 36px; border-radius: var(--r-control); border: 1px dashed var(--line-2);\n  color: var(--ink-2); font-size: var(--fs-xs); font-weight: 600;\n}\n.more:hover { background: var(--surface); color: var(--ink); }\n\n/* card */\n.card {\n  position: relative; display: grid; grid-template-columns: minmax(0, 1fr); min-width: 0; gap: 8px; padding: 12px; border-radius: var(--r-card);\n  background: var(--surface); border: 1px solid var(--line); box-shadow: var(--shadow-card);\n  cursor: pointer; transition: box-shadow var(--t-fast) var(--ease), transform var(--t-fast) var(--ease), border-color var(--t-fast);\n}\n@keyframes card-in { from { opacity: 0; transform: translateY(10px) scale(.985); } }\n.card:hover { box-shadow: var(--shadow-lift); border-color: var(--line-2); transform: translateY(-1px); }\n.card.is-dragging { opacity: .4; transform: rotate(-1.5deg); }\n.card.st-canceled .card-title { color: var(--ink-3); text-decoration: line-through; text-decoration-color: var(--line-2); }\n.card.st-done { background: color-mix(in srgb, var(--s-done) 3%, var(--surface)); }\n.card-top { display: flex; align-items: center; gap: 6px; min-height: 24px; }\n.card-title {\n  font-size: var(--fs-md); font-weight: 600; line-height: 1.65; color: var(--ink);\n  unicode-bidi: plaintext; text-align: start;\n  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;\n}\n.card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: -2px; }\n.card-tags bdi { display: inline-block; max-width: 100%; height: 20px; padding: 0 6px; border-radius: 5px; background: var(--surface-2); color: var(--ink-2); font-size: 11px; font-weight: 500; line-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.card-epic {\n  display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); line-height: 1.5;\n  unicode-bidi: plaintext;\n}\n.card-epic span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.card-foot { display: flex; align-items: center; gap: 6px; padding-top: 8px; border-top: 1px solid var(--line); font-size: var(--fs-xs); color: var(--ink-2); }\n.owner { max-width: 110px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.meta { display: inline-flex; align-items: center; gap: 4px; color: var(--ink-3); font-weight: 500; }\n.meta.is-new { color: var(--ink); font-weight: 700; }\n.star { display: inline-grid; place-items: center; width: 28px; height: 28px; margin: -4px; border-radius: 8px; color: var(--ink-3); opacity: 0; transition: all var(--t-fast); }\n.card:hover .star, .card:focus-within .star, .star.is-on, tr:hover .star, .inbox-item .star { opacity: 1; }\n.star:hover { background: var(--surface-2); color: var(--ink); }\n.star.is-on { color: #e4a400; }\n.star.is-on .ic { fill: currentColor; }\n.news-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 20%, transparent); flex: none; }\n.card.has-news { border-color: color-mix(in srgb, var(--brand) 35%, var(--line)); }\n\n/* skeletons */\n.skel { pointer-events: none; animation: none; }\n.skel i, .skel-line, .skel-block { display: block; height: 12px; border-radius: 6px; background: linear-gradient(90deg, var(--surface-2), var(--surface-3), var(--surface-2)); background-size: 200% 100%; animation: shimmer 1.4s infinite; }\n.skel i.short { width: 55%; }\n.skel-line { width: 60%; height: 16px; }\n.skel-block { height: 56px; border-radius: 10px; margin-bottom: 8px; }\n@keyframes shimmer { to { background-position: -200% 0; } }\n\n/* ---------- table ---------- */\n.table-wrap { flex: 1; min-height: 0; overflow: auto; margin: 0 20px 20px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel); }\n.grid-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-sm); }\n.grid-table th { position: sticky; top: 0; z-index: 1; background: var(--surface); text-align: start; border-bottom: 1px solid var(--line-2); padding: 0; }\n.grid-table th button { display: flex; align-items: center; gap: 4px; width: 100%; height: 40px; padding: 0 12px; font-weight: 600; color: var(--ink-2); font-size: var(--fs-xs); }\n.grid-table th[aria-sort=\"ascending\"] button, .grid-table th[aria-sort=\"descending\"] button { color: var(--ink); }\n.grid-table td { padding: 10px 12px; border-bottom: 1px solid var(--line); vertical-align: middle; white-space: nowrap; }\n.grid-table td.t-title { white-space: normal; min-width: 320px; max-width: 520px; font-weight: 500; unicode-bidi: plaintext; text-align: start; }\n.grid-table tbody tr { cursor: pointer; transition: background var(--t-fast); }\n.grid-table tbody tr:hover { background: var(--surface-2); }\n.grid-table tr.has-news td:first-child { box-shadow: inset -3px 0 0 var(--brand); }\n.num { font-variant-numeric: tabular-nums; }\n.who { display: inline-flex; align-items: center; gap: 6px; }\n\n/* ---------- popover ---------- */\n.popover {\n  position: fixed; z-index: 30; display: flex; flex-direction: column; width: 360px; max-height: min(72vh, 640px);\n  background: var(--surface); border: 1px solid var(--line-2); border-radius: var(--r-panel); box-shadow: var(--shadow-overlay);\n  animation: pop-in var(--t-fast) var(--ease);\n}\n.popover.pop-filters { width: 560px; }\n@keyframes pop-in { from { opacity: 0; transform: translateY(-4px) scale(.99); } }\n.pop-head { display: flex; align-items: baseline; gap: 12px; padding: 16px 16px 10px; }\n.pop-head b { font-size: var(--fs-lg); }\n.pop-head .muted { font-size: var(--fs-xs); }\n.pop-body { overflow-y: auto; padding: 0 16px 12px; display: grid; gap: 16px; }\n.pop-foot { display: flex; justify-content: space-between; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--line); }\n.fgroup h4 { display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); font-weight: 700; color: var(--ink-3); margin-bottom: 8px; }\n.fgroup h4 small { color: var(--accent-ink); }\n.fgroup .chips { display: flex; flex-wrap: wrap; gap: 6px; }\n.pop-body.people { gap: 2px; }\n.person {\n  display: flex; align-items: center; gap: 10px; width: 100%; padding: 6px 8px; border-radius: var(--r-control);\n  text-align: start; font-size: var(--fs-sm);\n}\n.person span { flex: 1; }\n.person b, .person small { font-size: var(--fs-xs); color: var(--ink-3); font-weight: 500; }\n.person:hover, .person.is-on { background: var(--surface-2); }\n.person.is-on span { font-weight: 700; }\n\n/* ---------- drawer & sheet ---------- */\n.drawer, .sheet { position: fixed; inset: 0; z-index: 20; pointer-events: none; }\n.scrim { position: absolute; inset: 0; background: var(--scrim); opacity: 0; transition: opacity var(--t) var(--ease); }\n.drawer-panel, .sheet-panel {\n  position: absolute; inset-block: 0; inset-inline-end: 0; width: min(640px, 100vw);\n  display: flex; flex-direction: column; background: var(--surface); box-shadow: var(--shadow-overlay);\n  transform: translateX(-104%); transition: transform 260ms var(--ease);\n  border-start-end-radius: 0; border-end-end-radius: 0;\n}\n.sheet-panel { width: min(520px, 100vw); }\n.drawer.is-open, .sheet.is-open { pointer-events: auto; }\n.drawer.is-open .scrim, .sheet.is-open .scrim { opacity: 1; }\n.drawer.is-open .drawer-panel, .sheet.is-open .sheet-panel { transform: none; }\n.d-head { display: flex; align-items: center; gap: 4px; height: 56px; padding: 0 16px; border-bottom: 1px solid var(--line); flex: none; }\n.d-head bdi.key { font-size: var(--fs-sm); margin-inline-end: 8px; }\n.d-head > b { font-size: var(--fs-lg); margin-inline-end: 8px; }\n.d-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 24px; }\n.d-scroll > * { flex: none; }\n.d-hero { display: grid; gap: 12px; }\n.d-badges { display: flex; gap: 6px; flex-wrap: wrap; }\n.d-hero h2 { font-size: var(--fs-xl); font-weight: 700; line-height: 1.6; unicode-bidi: plaintext; text-align: start; }\n.follow-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n.watchers { display: flex; align-items: center; font-size: var(--fs-xs); }\n.watchers .av { margin-inline-start: -6px; }\n.watchers .av:first-child { margin-inline-start: 0; }\n.watchers .muted { margin-inline-start: 8px; }\n.facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--r-card); overflow: hidden; }\n.fact { background: var(--surface); padding: 10px 12px; display: grid; gap: 2px; min-width: 0; }\n.fact:last-child:nth-child(odd) { grid-column: 1 / -1; }\n.fact dt { font-size: var(--fs-xs); color: var(--ink-3); }\n.fact dd { font-size: var(--fs-sm); font-weight: 500; overflow-wrap: anywhere; }\n.fact .select { width: 100%; margin-top: 2px; }\n.fact .select select { flex: 1; max-width: none; }\n.d-section { display: grid; gap: 12px; }\n.d-section h3 { display: flex; align-items: center; gap: 8px; font-size: var(--fs-lg); font-weight: 700; }\n.rich { font-size: var(--fs-md); line-height: 1.85; color: var(--ink); overflow-wrap: anywhere; }\n.rich p, .rich li { unicode-bidi: plaintext; text-align: start; }\n.rich p + p { margin-top: 8px; }\n.rich ul, .rich ol { padding-inline-start: 20px; list-style: revert; }\n.rich img { max-width: 100%; height: auto; border-radius: 8px; }\n.rich pre, .rich code { font-family: ui-monospace, Menlo, monospace; font-size: 12px; background: var(--surface-2); border-radius: 6px; padding: 2px 4px; direction: ltr; unicode-bidi: isolate; }\n.rich pre { padding: 8px; overflow-x: auto; }\n.rich table { border-collapse: collapse; font-size: var(--fs-sm); }\n.rich th, .rich td { border: 1px solid var(--line-2); padding: 4px 8px; }\n.rich blockquote { border-inline-start: 3px solid var(--line-2); padding-inline-start: 12px; color: var(--ink-2); margin: 0; }\n.rich.clamp { max-height: 168px; overflow: hidden; mask-image: linear-gradient(#000 60%, transparent); }\n.thread { display: grid; gap: 16px; }\n.comment { display: flex; gap: 10px; align-items: flex-start; }\n.bubble { flex: 1; min-width: 0; background: var(--surface-2); border-radius: 4px var(--r-card) var(--r-card) var(--r-card); padding: 10px 14px; }\n.comment.is-mine .bubble { background: color-mix(in srgb, var(--accent) 7%, var(--surface)); border: 1px solid color-mix(in srgb, var(--accent) 16%, transparent); }\n.c-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: 2px; font-size: var(--fs-xs); }\n.c-head b { font-size: var(--fs-sm); }\n.c-head time { color: var(--ink-3); }\n\n/* composer */\n.composer { flex: none; display: grid; gap: 8px; padding: 12px 16px 16px; border-top: 1px solid var(--line); background: var(--surface); }\n.templates { display: flex; gap: 6px; flex-wrap: wrap; }\n.field { position: relative; }\n.field textarea {\n  display: block; width: 100%; min-height: 84px; max-height: 240px; resize: vertical; padding: 10px 12px;\n  border-radius: var(--r-card); border: 1px solid var(--line-2); background: var(--surface); outline: 0;\n  font-size: var(--fs-md); line-height: 1.8; unicode-bidi: plaintext;\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.mention-pop {\n  position: absolute; inset-inline-start: 8px; bottom: calc(100% + 6px); width: 300px; padding: 6px;\n  background: var(--surface); border: 1px solid var(--line-2); border-radius: var(--r-card); box-shadow: var(--shadow-overlay); z-index: 2;\n}\n.composer-foot { display: flex; align-items: center; gap: 8px; }\n.hint { display: inline-flex; align-items: center; gap: 4px; font-size: var(--fs-xs); }\n\n/* lists used by sheet / dashboard */\n.mini-list { display: grid; }\n.mini-list li {\n  display: flex; align-items: center; gap: 10px; padding: 10px 4px; border-bottom: 1px solid var(--line); cursor: pointer;\n  font-size: var(--fs-sm); border-radius: 6px;\n}\n.mini-list li:hover { background: var(--surface-2); }\n.mini-list li span[dir] { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; text-align: start; }\n.mini-list li small { color: var(--ink-3); font-size: var(--fs-xs); white-space: nowrap; }\n.mini-list.big { overflow-y: auto; padding: 8px 16px 16px; }\n\n/* ---------- following / inbox ---------- */\n.inbox { max-width: 960px; margin: 0 auto; padding: 28px 20px 48px; display: grid; gap: 20px; }\n.inbox-head { display: flex; align-items: flex-end; gap: 16px; }\n.inbox-head h2 { font-size: var(--fs-xl); font-weight: 800; line-height: 1.4; }\n.inbox-head p { font-size: var(--fs-sm); max-width: 560px; }\n.inbox-list { display: grid; gap: 8px; }\n.inbox-item {\n  position: relative; display: flex; gap: 16px; padding: 14px 16px; border-radius: var(--r-card);\n  background: var(--surface); border: 1px solid var(--line); cursor: pointer; transition: all var(--t-fast);\n}\n.inbox-item:hover { border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.inbox-item.has-news { border-color: color-mix(in srgb, var(--brand) 35%, var(--line)); }\n.inbox-item > .news-dot { position: absolute; inset-inline-start: -4px; top: 20px; }\n.ii-main { flex: 1; min-width: 0; display: grid; gap: 6px; }\n.ii-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.ii-main h3 .tag { font-size: 11px; height: 20px; vertical-align: middle; font-weight: 500; }\n.ii-main h3 { font-size: var(--fs-md); font-weight: 700; line-height: 1.6; unicode-bidi: plaintext; text-align: start; }\n.ii-last { display: flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--ink-2); min-width: 0; }\n.ii-last span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; }\n.ii-last b { white-space: nowrap; font-weight: 600; }\n.ii-side { display: grid; justify-items: end; align-content: space-between; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); }\n.inbox .switch { justify-self: start; }\n\n/* empty */\n.empty { display: grid; justify-items: center; gap: 6px; padding: 48px 16px; color: var(--ink-3); text-align: center; }\n.empty b { color: var(--ink); font-size: var(--fs-lg); }\n.empty p { font-size: var(--fs-sm); max-width: 360px; }\n\n/* ---------- dashboard ---------- */\n.dash { max-width: 1400px; margin: 0 auto; padding: 20px 20px 48px; display: grid; gap: 16px; }\n.dash-filters { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: var(--fs-sm); }\n.dash-filters .switch { flex-wrap: wrap; }\n.dash-filters > .muted { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); }\n.loading-note { display: flex; align-items: center; gap: 8px; color: var(--ink-3); }\n.kpis { display: grid; grid-template-columns: minmax(280px, 1fr) 2fr; gap: 12px; }\n.hero {\n  display: grid; gap: 6px; align-content: center; padding: 20px 24px; border-radius: var(--r-panel);\n  background: var(--surface); border: 1px solid var(--line);\n}\n.hero > span { font-size: var(--fs-sm); color: var(--ink-2); font-weight: 600; }\n.hero > b { font-size: var(--fs-hero); font-weight: 800; line-height: 1.15; }\n.hero small { font-size: var(--fs-xs); color: var(--ink-3); }\n.meter { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--s-done) 14%, var(--surface-2)); overflow: hidden; }\n.meter i { display: block; height: 100%; background: var(--s-done); border-radius: 4px; transition: width 600ms var(--ease); }\n.tile-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; }\n.tile {\n  display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 4px 8px; padding: 14px 16px; text-align: start;\n  border-radius: var(--r-panel); background: var(--surface); border: 1px solid var(--line); transition: all var(--t-fast);\n}\n.tile:hover { border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.tile .ic { color: var(--ink-3); }\n.tile span { font-size: var(--fs-sm); color: var(--ink-2); font-weight: 500; }\n.tile b { grid-column: 1 / -1; font-size: var(--fs-xl); font-weight: 800; line-height: 1.3; }\n.dash-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n.viz-card {\n  display: flex; flex-direction: column; gap: 12px; padding: 16px 18px 18px; min-width: 0;\n  background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel);\n}\n.viz-card.wide { grid-column: span 2; }\n.viz-card.tall { grid-row: span 2; }\n.viz-card.full { grid-column: 1 / -1; }\n.viz-body { grid-template-columns: minmax(0, 1fr); }\n.mini-list { grid-template-columns: minmax(0, 1fr); }\n\n/* delayed table */\n.dtable-wrap { overflow-x: auto; margin-inline: -4px; }\n.dtable { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-sm); }\n.dtable th { text-align: start; font-size: var(--fs-xs); font-weight: 600; color: var(--ink-3); padding: 0 8px 8px; border-bottom: 1px solid var(--line-2); white-space: nowrap; }\n.dtable td { padding: 10px 8px; border-bottom: 1px solid var(--line); vertical-align: middle; white-space: nowrap; }\n.dtable tbody tr { cursor: pointer; transition: background var(--t-fast); }\n.dtable tbody tr:hover { background: var(--surface-2); }\n.dtable tbody tr:last-child td { border-bottom: 0; }\n.dtable .dt-title { white-space: normal; width: 44%; min-width: 280px; }\n.dtable .dt-title > span { display: block; font-weight: 600; line-height: 1.6; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 560px; }\n.dtable .dt-title small { display: flex; align-items: center; gap: 4px; margin-top: 2px; }\n.dtable .dt-title small .tag { height: 20px; font-size: 11px; margin: 0; }\n.dtable .dt-fn { color: var(--ink-2); max-width: 200px; overflow: hidden; text-overflow: ellipsis; }\n.dtable .tag { margin: 0; }\n.viz-card .more { margin-top: 4px; }\n.viz-card > header { display: flex; align-items: flex-start; gap: 8px; }\n.viz-card > header > div { flex: 1; }\n.viz-card h3 { font-size: var(--fs-lg); font-weight: 700; line-height: 1.4; }\n.viz-card header p { font-size: var(--fs-xs); color: var(--ink-3); }\n.viz-body { flex: 1; min-height: 0; display: grid; gap: 12px; align-content: start; }\n.viz-table { display: none; overflow: auto; max-height: 420px; }\n.viz-card.show-table .viz-table { display: block; }\n.viz-card.show-table .viz-plot, .viz-card.show-table .hbars, .viz-card.show-table .donut-wrap, .viz-card.show-table .legend { display: none; }\n.viz-table table { width: 100%; border-collapse: collapse; font-size: var(--fs-xs); }\n.viz-table th, .viz-table td { padding: 6px 8px; border-bottom: 1px solid var(--line); text-align: start; white-space: nowrap; }\n.viz-table th { color: var(--ink-3); font-weight: 600; position: sticky; top: 0; background: var(--surface); }\n.skel-card { min-height: 280px; background: linear-gradient(90deg, var(--surface), var(--surface-2), var(--surface)); background-size: 200% 100%; animation: shimmer 1.4s infinite; }\n\n/* legend */\n.legend { display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: var(--fs-xs); color: var(--ink-2); }\n.legend-item { display: inline-flex; align-items: center; gap: 6px; }\n.legend-item b { color: var(--ink-3); font-weight: 600; }\n.sw { display: inline-block; width: 10px; height: 10px; border-radius: 3px; flex: none; }\n\n/* stacked columns (HTML) */\n.viz-plot { position: relative; height: 260px; padding-inline-start: 36px; padding-bottom: 40px; }\n.viz-plot.compact { height: 200px; }\n.grid { position: absolute; inset: 0 0 40px 0; inset-inline-start: 36px; pointer-events: none; }\n.grid-line { position: absolute; inset-inline: 0; border-top: 1px solid var(--grid); }\n.grid-line:first-child { border-top-color: var(--baseline); }\n.grid-line span { position: absolute; inset-inline-start: -36px; width: 30px; transform: translateY(-50%); text-align: end; font-size: 11px; color: var(--ink-3); font-variant-numeric: tabular-nums; }\n.cols { position: relative; display: flex; height: 100%; }\n.col { flex: 1; display: flex; flex-direction: column; align-items: center; min-width: 0; height: 100%; }\n.col-plot { position: relative; flex: 1; width: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }\n.col-bar { width: 24px; display: flex; flex-direction: column-reverse; gap: 2px; min-height: 0; transition: height 500ms var(--ease); }\n.col-bar .seg { display: block; width: 100%; min-height: 2px; transition: filter var(--t-fast), opacity var(--t-fast); }\n.col-bar .seg:last-child { border-radius: 4px 4px 0 0; }\n.col-val { font-size: var(--fs-xs); font-weight: 700; color: var(--ink); margin-bottom: 4px; }\n.col-label { position: absolute; top: 100%; inset-inline: 0; height: 40px; padding-top: 6px; display: grid; justify-items: center; align-content: start; line-height: 1.35; font-size: var(--fs-xs); color: var(--ink-2); text-align: center; white-space: nowrap; }\n.col { position: relative; }\n.col-label small { color: var(--ink-3); font-size: 11px; }\n.col.is-current .col-label { color: var(--ink); font-weight: 700; }\n.col.is-current .col-label::before { content: \"\"; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); position: absolute; top: -1px; }\n.cols:hover .seg { opacity: .55; }\n.cols .col:hover .seg { opacity: 1; }\n.seg:hover { filter: brightness(1.08); }\n\n/* donut */\n.donut-wrap { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }\n.donut { width: 168px; height: 168px; flex: none; }\n.donut .arc { cursor: pointer; transition: stroke-width var(--t-fast) var(--ease); outline: none; }\n.donut .arc:hover, .donut .arc:focus { stroke-width: 17; }\n.donut-num { font: 800 22px var(--font); fill: var(--ink); }\n.donut-cap { font: 500 9px var(--font); fill: var(--ink-3); }\n.donut-legend { flex: 1; display: grid; gap: 2px; min-width: 180px; }\n.donut-legend button { display: flex; align-items: center; gap: 8px; width: 100%; padding: 4px 6px; border-radius: 6px; font-size: var(--fs-sm); color: var(--ink-2); }\n.donut-legend button:hover { background: var(--surface-2); color: var(--ink); }\n.donut-legend span { flex: 1; text-align: start; }\n.donut-legend b { color: var(--ink); font-weight: 700; }\n.donut-legend em { font-style: normal; font-size: var(--fs-xs); color: var(--ink-3); min-width: 36px; text-align: end; }\n\n/* horizontal stacked bars */\n.hbars { display: grid; gap: 10px; }\n.hrow { display: grid; grid-template-columns: minmax(96px, 34%) 1fr auto; align-items: center; gap: 10px; }\n.hrow-label { display: flex; align-items: center; gap: 6px; min-width: 0; font-size: var(--fs-sm); color: var(--ink-2); }\n.hrow-label span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.hrow-track { height: 14px; }\n.hrow-bar { display: flex; gap: 2px; height: 100%; min-width: 2px; transition: width 500ms var(--ease); }\n.hrow-bar .seg { height: 100%; min-width: 2px; }\n.hrow-bar .seg:last-child { border-start-end-radius: 0; border-radius: 4px 0 0 4px; }\n.hrow-val { display: grid; justify-items: end; line-height: 1.25; min-width: 64px; }\n.hrow-val b { font-size: var(--fs-sm); }\n.hrow-val small { font-size: 11px; color: var(--ink-3); }\n.hbars:hover .seg { opacity: .55; }\n.hbars .hrow:hover .seg { opacity: 1; }\n\n/* tooltip */\n.tooltip {\n  position: fixed; top: 0; left: 0; z-index: 50; pointer-events: none; max-width: 280px;\n  padding: 8px 10px; border-radius: 10px; background: var(--ink); color: var(--surface);\n  font-size: var(--fs-xs); line-height: 1.6; box-shadow: var(--shadow-overlay); display: grid; gap: 2px;\n}\n.tooltip.is-hint { padding: 4px 8px; }\n.tooltip b { font-size: var(--fs-sm); margin-bottom: 2px; }\n.tt-row { display: flex; align-items: center; gap: 6px; }\n.tt-row i { width: 8px; height: 8px; border-radius: 2px; flex: none; }\n.tt-row em { font-style: normal; font-weight: 700; margin-inline-start: auto; padding-inline-start: 12px; }\n\n/* toasts */\n.toasts { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 60; display: grid; gap: 8px; justify-items: center; }\n.toast {\n  display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 8px 10px 8px 16px; border-radius: 12px;\n  background: var(--ink); color: var(--surface); font-size: var(--fs-sm); box-shadow: var(--shadow-overlay);\n  animation: toast-in var(--t) var(--ease); transition: opacity var(--t), transform var(--t);\n}\n.toast .btn-ghost { color: var(--surface); background: rgba(255,255,255,.12); }\n.toast .btn-ghost:hover { background: rgba(255,255,255,.2); }\n.app[data-theme=\"dark\"] .toast .btn-ghost { color: var(--surface); background: rgba(0,0,0,.08); }\n.toast-error .ic { color: #ff8a80; }\n.toast-ok .ic { color: #5fd38a; }\n.app[data-theme=\"dark\"] .toast-error .ic { color: var(--danger); }\n.app[data-theme=\"dark\"] .toast-ok .ic { color: var(--ok-ink); }\n.toast.out { opacity: 0; transform: translateY(8px); }\n@keyframes toast-in { from { opacity: 0; transform: translateY(8px); } }\n\n/* ---------- launcher (lives outside .app) ---------- */\n.launcher {\n  position: fixed; bottom: 20px; right: 20px; z-index: 2147483000;\n  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px 0 16px; border: 0; border-radius: 999px;\n  background: #141413; color: #fcfcfb; cursor: pointer;\n  font: 600 14px/1 \"SFR Vazirmatn\", Vazirmatn, Tahoma, sans-serif; letter-spacing: 0;\n  box-shadow: 0 8px 24px rgba(20, 20, 19, .28), 0 0 0 1px rgba(255,255,255,.06) inset;\n  transition: transform 160ms cubic-bezier(.2,0,0,1);\n}\n.launcher:hover { transform: translateY(-2px); }\n.launcher:active { transform: scale(.98); }\n.launcher .ic { color: #ef0d8a; }\n.launcher kbd { font: 500 11px/1 \"SFR Vazirmatn\", sans-serif; color: rgba(252,252,251,.6); border: 1px solid rgba(255,255,255,.18); border-radius: 4px; padding: 3px 4px; background: transparent; }\n.launcher[hidden] { display: none; }\n.launcher:focus-visible { outline: 2px solid #3987e5; outline-offset: 2px; }\n\n/* ---------- responsive ---------- */\n@media (max-width: 1180px) {\n  .dash-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .kpis { grid-template-columns: 1fr; }\n}\n@media (max-width: 860px) {\n  .tabs button { padding: 0 8px; }\n  .brand-text, .top-actions .btn span, .sync { display: none; }\n  .dash-grid { grid-template-columns: 1fr; }\n  .viz-card.wide { grid-column: auto; }\n  .tile-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .search { min-width: 0; flex: 1 1 100%; }\n  .facts { grid-template-columns: 1fr; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .app *, .app *::before, .app *::after { animation: none !important; transition: none !important; }\n}\n@media (forced-colors: active) {\n  .seg, .sw, .col-dist i, .pill .dot { forced-color-adjust: none; }\n}\n\n/* ==========================================================================\n   Colour layer — «شاداب»\n   Snappfood pink as the accent, seasonal column headers, t-shirt-size scale,\n   status stripe on cards, warm canvas. Status colours (--s-*) stay untouched.\n   ========================================================================== */\n.app {\n  --accent: #d40c78; --accent-soft: rgba(212, 12, 120, .09); --accent-ink: #b80c69;\n  --brand-2: #ff7a3d;\n  --bg: #f7f4f2;\n  /* t-shirt sizes: six distinct hues (validated for colour-blind separation between neighbours) + ascending bars.\n     --sz-* are chart marks; --sz-*-bg / -fg are the filled chip and its readable text. */\n  --sz-xs: #1baf7a; --sz-s: #2a78d6; --sz-m: #eda100; --sz-l: #e87ba4; --sz-xl: #6250d6; --sz-xxl: #eb6834; --sz-na: var(--surface-3);\n  --sz-xs-bg: #1baf7a; --sz-xs-fg: #06150f;\n  --sz-s-bg: #256abf;  --sz-s-fg: #ffffff;\n  --sz-m-bg: #eda100;  --sz-m-fg: #1c1400;\n  --sz-l-bg: #e87ba4;  --sz-l-fg: #2b0a18;\n  --sz-xl-bg: #6250d6; --sz-xl-fg: #ffffff;\n  --sz-xxl-bg: #eb6834; --sz-xxl-fg: #200a02;\n  --s-cat3: #1baf7a; --on-accent: #ffffff;\n  /* heat-map ramp (one blue hue, light → dark = little → much) */\n  --hm1: #cde2fb; --hm2: #9ec5f4; --hm3: #6da7ec; --hm4: #3987e5; --hm5: #256abf; --hm6: #184f95;\n  --hm-ink-lo: #0d2d57; --hm-ink-hi: #ffffff;\n  /* seasons (Jalali): bar colour + readable label ink */\n  --ss-spring: #23a35a; --ss-spring-ink: #1a7a43;\n  --ss-summer: #f59e0b; --ss-summer-ink: #9a5200;\n  --ss-autumn: #d9622b; --ss-autumn-ink: #a8431c;\n  --ss-winter: #3b82d6; --ss-winter-ink: #2a6fc0;\n}\n.app[data-theme=\"dark\"] {\n  --accent: #f45bab; --accent-soft: rgba(244, 91, 171, .14); --accent-ink: #f9a8d4;\n  --bg: #121011;\n  --sz-xs: #199e70; --sz-s: #3987e5; --sz-m: #c98500; --sz-l: #d55181; --sz-xl: #9085e9; --sz-xxl: #d95926;\n  --sz-xs-bg: #199e70; --sz-xs-fg: #03120c;\n  --sz-s-bg: #3987e5;  --sz-s-fg: #04111f;\n  --sz-m-bg: #c98500;  --sz-m-fg: #170f00;\n  --sz-l-bg: #d55181;  --sz-l-fg: #1f0510;\n  --sz-xl-bg: #9085e9; --sz-xl-fg: #0f0b2b;\n  --sz-xxl-bg: #d95926; --sz-xxl-fg: #1c0801;\n  --s-cat3: #199e70; --on-accent: #1f0412;\n  --hm1: #1b3354; --hm2: #1f4a7d; --hm3: #2a62ad; --hm4: #3987e5; --hm5: #6da7ec; --hm6: #9ec5f4;\n  --hm-ink-lo: #0a1a30; --hm-ink-hi: #dbe9fb;\n  --ss-spring: #34c472; --ss-spring-ink: #7ddca3;\n  --ss-summer: #f7b23b; --ss-summer-ink: #f9c870;\n  --ss-autumn: #ef7a45; --ss-autumn-ink: #f6a37c;\n  --ss-winter: #5b9ae6; --ss-winter-ink: #93bdf0;\n}\n\n/* warm canvas with a soft brand glow at the top */\n.app { background:\n  radial-gradient(1200px 260px at 85% -80px, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%),\n  radial-gradient(900px 220px at 10% -60px, color-mix(in srgb, var(--brand-2) 8%, transparent), transparent 70%),\n  var(--bg); }\n.topbar { position: relative; background: color-mix(in srgb, var(--surface) 88%, transparent); backdrop-filter: blur(8px); }\n.topbar::after { content: \"\"; position: absolute; inset-inline: 0; bottom: -1px; height: 2px; background: linear-gradient(90deg, var(--brand-2), var(--accent) 60%, #8b5cf6); opacity: .85; }\n.logo { background: linear-gradient(135deg, var(--accent), var(--brand-2)); color: #fff; }\n.logo::after { background: #fff; box-shadow: 0 0 0 2px var(--accent); }\n.tabs button[aria-selected=\"true\"]::after { background: var(--accent); height: 3px; }\n.tabs button[aria-selected=\"true\"] .ic { color: var(--accent); }\n\n/* greeting */\n.greet { display: grid; line-height: 1.35; padding-inline-start: 16px; border-inline-start: 1px solid var(--line); }\n.greet b { font-size: var(--fs-sm); font-weight: 700; }\n.greet small { font-size: var(--fs-xs); color: var(--ink-3); }\n\n/* chips & filters: colour instead of black */\n.chip.is-on { background: var(--accent); border-color: var(--accent); color: #fff; }\n.chip.is-on .count { background: #fff; color: var(--accent-ink); }\n.app[data-theme=\"dark\"] .chip.is-on { color: #1f0412; }\n.chip:hover { border-color: color-mix(in srgb, var(--accent) 40%, var(--line)); }\n.btn-primary { background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, var(--brand-2))); color: #fff; }\n.app[data-theme=\"dark\"] .btn-primary { color: #1f0412; }\n.sf.is-on { border-color: currentColor; }\n.sf-done.is-on { color: var(--ok-ink); background: color-mix(in srgb, var(--s-done) 10%, var(--surface)); }\n.sf-devdone.is-on { background: color-mix(in srgb, var(--s-devdone) 12%, var(--surface)); }\n.sf-progress.is-on { background: color-mix(in srgb, var(--s-progress) 10%, var(--surface)); }\n.sf-pending.is-on { background: color-mix(in srgb, var(--s-pending) 14%, var(--surface)); }\n.sf-todo.is-on { background: color-mix(in srgb, var(--s-todo) 10%, var(--surface)); }\n.sf-canceled.is-on { background: color-mix(in srgb, var(--s-canceled) 10%, var(--surface)); }\n\n/* t-shirt sizes: filled chip + ascending bars (order without colour) */\n.size { display: inline-flex; align-items: center; flex: none; white-space: nowrap; gap: 5px; height: 22px; padding: 0 8px 0 7px; border: 0; border-radius: 7px; font-size: 12px; font-weight: 800; letter-spacing: .01em; background: var(--surface-3); color: var(--ink-2); }\n.size .bars { flex: none; fill: currentColor; }\n.size-xs { background: var(--sz-xs-bg); color: var(--sz-xs-fg); }\n.size-s { background: var(--sz-s-bg); color: var(--sz-s-fg); }\n.size-m { background: var(--sz-m-bg); color: var(--sz-m-fg); }\n.size-l { background: var(--sz-l-bg); color: var(--sz-l-fg); }\n.size-xl { background: var(--sz-xl-bg); color: var(--sz-xl-fg); }\n.size-xxl { background: var(--sz-xxl-bg); color: var(--sz-xxl-fg); }\n\n/* seasonal columns */\n.column { position: relative; overflow: hidden; }\n.column::before { content: \"\"; position: absolute; inset-inline: 0; top: 0; height: 4px; background: var(--season, transparent); }\n.column.ss-spring { --season: var(--ss-spring); --season-ink: var(--ss-spring-ink); }\n.column.ss-summer { --season: var(--ss-summer); --season-ink: var(--ss-summer-ink); }\n.column.ss-autumn { --season: var(--ss-autumn); --season-ink: var(--ss-autumn-ink); }\n.column.ss-winter { --season: var(--ss-winter); --season-ink: var(--ss-winter-ink); }\n.column[class*=\"ss-\"] { background: color-mix(in srgb, var(--season) 5%, var(--surface-2)); }\n.season { display: inline-flex; align-items: center; gap: 4px; align-self: center; height: 20px; padding: 0 7px; border-radius: 999px; font-size: 11px; font-weight: 700;\n  color: var(--season-ink); background: color-mix(in srgb, var(--season) 14%, transparent); }\n.season .ic { stroke-width: 2; }\n.column.is-current { border-color: color-mix(in srgb, var(--accent) 45%, transparent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent); }\n.now { color: #fff; background: var(--accent); }\n.app[data-theme=\"dark\"] .now { color: #1f0412; }\n\n/* cards: status stripe on the start edge + livelier hover */\n.card { border-inline-start: 3px solid var(--stripe, var(--line)); }\n.card.st-done { --stripe: var(--s-done); }\n.card.st-devdone { --stripe: var(--s-devdone); }\n.card.st-progress { --stripe: var(--s-progress); }\n.card.st-pending { --stripe: var(--s-pending); }\n.card.st-todo { --stripe: var(--s-todo); }\n.card.st-canceled { --stripe: var(--s-canceled); }\n.card:hover { box-shadow: 0 2px 4px rgba(20,20,19,.05), 0 10px 28px color-mix(in srgb, var(--stripe, var(--accent)) 16%, transparent); }\n.card-tags bdi { background: color-mix(in srgb, var(--accent) 7%, var(--surface-2)); color: var(--ink-2); }\n.star.is-on { color: #f59e0b; }\n\n/* initials avatars get a friendly colour */\n.av.c0 { background: #ffe4ef; color: #a10c5c; } .av.c1 { background: #ffedd5; color: #9a3412; }\n.av.c2 { background: #dcfce7; color: #166534; } .av.c3 { background: #dbeafe; color: #1e40af; }\n.av.c4 { background: #ede9fe; color: #5b21b6; } .av.c5 { background: #cffafe; color: #155e75; }\n.av.c6 { background: #fef9c3; color: #854d0e; } .av.c7 { background: #fce7f3; color: #9d174d; }\n\n/* dashboard */\n.hero { background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--surface)), var(--surface) 60%); }\n.hero > b { background: linear-gradient(90deg, var(--accent), var(--brand-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }\n.tile .ic { width: 28px; height: 28px; padding: 6px; border-radius: 8px; color: var(--tile, var(--ink-3)); background: color-mix(in srgb, var(--tile, var(--ink-3)) 12%, transparent); }\n.tile { grid-template-columns: auto 1fr; }\n.tile.t-all { --tile: var(--accent); } .tile.t-picked { --tile: #8b5cf6; } .tile.t-progress { --tile: var(--s-progress); }\n.tile.t-pending { --tile: var(--s-pending); } .tile.t-late { --tile: var(--danger); } .tile.t-done { --tile: var(--s-done); }\n.tile:hover { border-color: color-mix(in srgb, var(--tile, var(--accent)) 40%, var(--line)); }\n.viz-card > header h3::before { content: \"\"; display: inline-block; width: 8px; height: 8px; border-radius: 3px; margin-inline-end: 8px; vertical-align: middle; background: linear-gradient(135deg, var(--accent), var(--brand-2)); }\n\n/* following inbox */\n.inbox-head h2 { background: linear-gradient(90deg, var(--ink), var(--accent)); -webkit-background-clip: text; background-clip: text; color: transparent; }\n.inbox-item { border-inline-start: 3px solid var(--stripe, var(--line)); }\n.inbox-item.has-news { box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 8%, transparent); }\n\n.launcher { background: linear-gradient(135deg, #d40c78, #ff7a3d); }\n.launcher .ic { color: #fff; }\n\n@media (max-width: 860px) { .greet { display: none; } }\n\n/* ==========================================================================\n   Game layer — «بازی‌وار»\n   Player chip, quests, achievements, boss cards, delivery journey, new analyses.\n   Animations only ever animate *from* a state (keyframes with `from`), so a reduced-motion\n   user simply sees the finished picture.\n   ========================================================================== */\n@keyframes rise { from { opacity: 0; transform: translateY(8px); } }\n@keyframes grow-y { from { transform: scaleY(0); } }\n@keyframes grow-x { from { transform: scaleX(0); } }\n@keyframes draw { from { stroke-dasharray: 100; stroke-dashoffset: 100; } }\n@keyframes arc-in { from { stroke-dasharray: 0 400; } }\n@keyframes fade-in { from { opacity: 0; } }\n@keyframes halo { 0%, 100% { opacity: .55; transform: scale(.92); } 50% { opacity: .15; transform: scale(1.08); } }\n@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }\n@keyframes xp-rise { 0% { opacity: 0; transform: translate(-50%, 6px) scale(.8); } 15% { opacity: 1; transform: translate(-50%, 0) scale(1.08); } 80% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -46px) scale(1); } }\n@keyframes bump { 0% { transform: scale(1); } 30% { transform: scale(1.06); } 100% { transform: scale(1); } }\n@keyframes boss-glow { 0%, 100% { box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--brand-2) 55%, transparent), 0 0 0 0 color-mix(in srgb, var(--brand-2) 30%, transparent); } 50% { box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--brand-2) 80%, transparent), 0 0 18px 2px color-mix(in srgb, var(--brand-2) 28%, transparent); } }\n@keyframes twinkle { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(1.25) rotate(12deg); } }\n@keyframes col-pop { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent); } 100% { box-shadow: 0 0 0 16px transparent; } }\n@keyframes sheen { to { background-position: -200% 0; } }\n\n/* ----- fx layer ----- */\n.fx { position: fixed; inset: 0; z-index: 70; pointer-events: none; overflow: hidden; }\n.fx canvas { position: absolute; inset: 0; }\n.xp-pop {\n  position: fixed; padding: 2px 12px; border-radius: 999px; font-weight: 800; font-size: 14px; white-space: nowrap;\n  color: var(--accent-ink); background: var(--surface); border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);\n  box-shadow: 0 6px 20px color-mix(in srgb, var(--accent) 25%, transparent); animation: xp-rise 1.5s var(--ease) both;\n}\n.xp-pop.xp-quest { color: var(--on-accent); background: linear-gradient(135deg, var(--accent), var(--brand-2)); border: 0; margin-top: 30px; }\n\n/* ----- player chip ----- */\n.player {\n  position: relative; display: grid; grid-template-columns: 44px auto auto; align-items: center; column-gap: 10px;\n  height: 52px; padding: 0 14px 0 6px; margin-inline-start: 6px; border-radius: 999px;\n  background: var(--surface); border: 1px solid var(--line); cursor: pointer; transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.player:hover { border-color: color-mix(in srgb, var(--accent) 45%, var(--line)); box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 14%, transparent); }\n.player.bump { animation: bump .5s var(--ease); }\n.lv-ring { grid-area: 1 / 1; place-self: center; }\n.player-av { grid-area: 1 / 1; place-self: center; display: inline-flex; }\n.lv-track { stroke: var(--surface-3); }\n.lv-arc { stroke: var(--accent); transition: stroke-dasharray .8s var(--ease); }\n.player-text { display: grid; line-height: 1.35; text-align: start; }\n.player-text b { font-size: var(--fs-sm); font-weight: 800; white-space: nowrap; }\n.player-text b i { font-style: normal; font-weight: 600; color: var(--accent-ink); margin-inline-start: 6px; }\n.player-text small { font-size: 11px; color: var(--ink-3); white-space: nowrap; }\n.streak { display: inline-flex; align-items: center; gap: 3px; padding: 3px 9px 3px 7px; border-radius: 999px; background: var(--surface-2); color: var(--ink-2); font-size: var(--fs-sm); }\n.streak b { font-weight: 800; color: var(--ink); }\n.streak .ic { color: var(--ink-3); }\n.streak.is-hot { background: color-mix(in srgb, var(--brand-2) 16%, transparent); }\n.streak.is-hot .ic { color: var(--brand-2); fill: color-mix(in srgb, var(--brand-2) 35%, transparent); }\n@media (max-width: 1180px) { .player-text { display: none; } .player { grid-template-columns: 44px auto; } }\n\n/* ----- player panel ----- */\n.popover.pop-player { width: 380px; }\n.pp { display: grid; gap: 14px; padding: 18px; overflow-y: auto; }\n.pp-head { display: flex; align-items: center; gap: 16px; }\n.pp-ring { position: relative; width: 72px; height: 72px; flex: none; }\n.pp-lv { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; line-height: 1.1; }\n.pp-lv b { font-size: 24px; font-weight: 800; }\n.pp-lv small { font-size: 10px; color: var(--ink-3); }\n.pp-id { flex: 1; display: grid; gap: 4px; min-width: 0; }\n.pp-id b { font-size: var(--fs-xl); font-weight: 800; }\n.pp-id small { font-size: var(--fs-xs); color: var(--ink-3); }\n.pp-split { display: flex; flex-wrap: wrap; gap: 6px; }\n.pp-split span { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 999px; background: var(--surface-2); font-size: var(--fs-xs); color: var(--ink-2); }\n.pp-split span b { color: var(--ink); font-weight: 800; }\n.pp h4 { display: flex; align-items: baseline; gap: 8px; font-size: var(--fs-md); font-weight: 800; }\n.pp h4 small { font-size: var(--fs-xs); color: var(--ink-3); font-weight: 500; }\n.quests { display: grid; gap: 6px; }\n.quests li { display: grid; grid-template-columns: 32px 1fr auto; gap: 10px; align-items: center; padding: 8px 10px; border-radius: 12px; background: var(--surface-2); border: 1px solid transparent; transition: background var(--t); }\n.quests li b { display: block; font-size: var(--fs-sm); font-weight: 600; line-height: 1.5; }\n.quests li small { display: block; font-size: 11px; color: var(--ink-3); }\n.quests li .meter { margin-top: 5px; height: 5px; }\n.quests li em { font-style: normal; font-weight: 800; font-size: var(--fs-sm); color: var(--accent-ink); }\n.q-ic { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: color-mix(in srgb, var(--accent) 12%, transparent); color: var(--accent-ink); }\n.quests li.is-done { background: color-mix(in srgb, var(--s-done) 9%, var(--surface)); border-color: color-mix(in srgb, var(--s-done) 25%, transparent); }\n.quests li.is-done .q-ic { background: var(--s-done); color: #fff; }\n.quests li.is-done b { color: var(--ink-2); text-decoration: line-through; text-decoration-color: var(--line-2); }\n.quests li.is-done em { color: var(--ok-ink); }\n.meter i { background: linear-gradient(90deg, var(--accent), var(--brand-2)); }\n.medals { display: flex; flex-wrap: wrap; gap: 8px; }\n.pp-note { font-size: 11px; color: var(--ink-3); line-height: 1.7; }\n\n/* ----- medals & achievement cards ----- */\n.medal { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; flex: none; background: var(--surface-2); color: var(--ink-3); border: 1px dashed var(--line-2); }\n.medal.is-on { background: linear-gradient(135deg, var(--accent), var(--brand-2)); color: var(--on-accent); border: 0; box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 30%, transparent); }\n.badge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }\n.badge-card { display: grid; justify-items: start; gap: 6px; padding: 14px; border-radius: 14px; background: var(--surface); border: 1px solid var(--line); position: relative; overflow: hidden; }\n.badge-card .medal { width: 46px; height: 46px; margin-bottom: 4px; }\n.badge-card b { font-size: var(--fs-md); font-weight: 800; }\n.badge-card p { font-size: var(--fs-xs); color: var(--ink-3); line-height: 1.7; min-height: 40px; }\n.badge-card .meter { width: 100%; height: 5px; }\n.badge-card small { font-size: 11px; color: var(--ink-3); }\n.badge-card:not(.is-on) { background: var(--surface); }\n.badge-card:not(.is-on) b { color: var(--ink-2); }\n.badge-card.is-on { border-color: color-mix(in srgb, var(--accent) 35%, var(--line)); background: linear-gradient(160deg, color-mix(in srgb, var(--accent) 7%, var(--surface)), var(--surface) 70%); }\n.badge-card.is-on::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 35%, color-mix(in srgb, #fff 45%, transparent) 50%, transparent 65%); background-size: 200% 100%; background-position: 120% 0; pointer-events: none; transition: background-position .9s var(--ease); }\n.badge-card.is-on:hover::after { background-position: -40% 0; }\n.badge-card.is-on small { color: var(--ok-ink); font-weight: 700; }\n.badge-card.is-team .medal.is-on { background: linear-gradient(135deg, var(--s-cat1), var(--s-cat3)); box-shadow: 0 4px 12px color-mix(in srgb, var(--s-cat1) 30%, transparent); }\n\n/* ----- board: boss cards, wins, month rings ----- */\n.pill-boss { background: linear-gradient(135deg, var(--brand-2), var(--accent)); color: #fff; font-weight: 700; }\n.app[data-theme=\"dark\"] .pill-boss { color: #1f0412; }\n.pill-boss .ic { stroke-width: 2.2; }\n.card.boss { box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--brand-2) 55%, transparent), var(--shadow-card); animation: boss-glow 2.8s ease-in-out infinite; }\n.card.boss.is-slain { animation: none; box-shadow: 0 0 0 1.5px #eda100, var(--shadow-card); background: linear-gradient(160deg, color-mix(in srgb, #eda100 8%, var(--surface)), var(--surface) 60%); }\n.card.boss.is-slain .pill-boss { background: #eda100; color: #231800; }\n.spark { display: inline-flex; color: #eda100; animation: twinkle 2.4s ease-in-out infinite; }\n.card.win { background: linear-gradient(160deg, color-mix(in srgb, var(--s-done) 6%, var(--surface)), var(--surface) 55%); }\n.kanban.enter .card { animation: card-in 440ms var(--ease) both; animation-delay: calc(var(--i, 0) * 34ms); }\n.kanban.enter .column { animation: rise 420ms var(--ease) both; }\n.column.pop { animation: col-pop 650ms var(--ease); }\n.col-done { display: flex; align-items: center; gap: 6px; }\n.mini-ring { flex: none; }\n.mr-track { fill: none; stroke: var(--surface-3); stroke-width: 3; }\n.mr-arc { fill: none; stroke: var(--s-done); stroke-width: 3; stroke-linecap: round; }\n.clear-tag { display: inline-flex; align-items: center; gap: 3px; margin-inline-start: auto; padding: 0 7px; height: 20px; border-radius: 999px; font-style: normal; font-size: 11px; font-weight: 700; color: #6b4600; background: color-mix(in srgb, #eda100 24%, transparent); }\n.app[data-theme=\"dark\"] .clear-tag { color: #f6c453; }\n.column.is-clear::before { background: linear-gradient(90deg, #eda100, #ff7a3d, #eda100); background-size: 200% 100%; animation: sheen 3.2s linear infinite; }\n\n/* ----- dashboard: structure ----- */\n.dash-sec { grid-column: 1 / -1; display: flex; align-items: baseline; gap: 12px; margin-top: 14px; }\n.dash-sec h2 { font-size: var(--fs-xl); font-weight: 800; white-space: nowrap; }\n.dash-sec p { font-size: var(--fs-sm); color: var(--ink-3); white-space: nowrap; }\n.dash-sec::after { content: \"\"; flex: 1; height: 1px; background: var(--line); align-self: center; order: 3; }\n.switch-sm button { padding: 3px 12px; font-size: var(--fs-xs); }\n.viz-card > header .switch { flex: none; }\n\n/* ----- dashboard: journey ----- */\n.journey-card { gap: 14px; background: radial-gradient(900px 220px at 100% 0, color-mix(in srgb, var(--accent) 7%, transparent), transparent 70%), radial-gradient(700px 200px at 0 100%, color-mix(in srgb, var(--brand-2) 6%, transparent), transparent 70%), var(--surface); }\n.jstats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }\n.jstat { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 14px; background: color-mix(in srgb, var(--ink) 4%, transparent); min-width: 0; }\n.jstat-ic { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 12px; flex: none; color: var(--accent-ink); background: color-mix(in srgb, var(--accent) 13%, transparent); }\n.jstat.is-main .jstat-ic { color: var(--on-accent); background: linear-gradient(135deg, var(--accent), var(--brand-2)); }\n.jstat small { display: block; font-size: var(--fs-xs); color: var(--ink-3); }\n.jstat b { display: block; font-size: var(--fs-xl); font-weight: 800; line-height: 1.35; white-space: nowrap; }\n.jstat b em { font-style: normal; font-size: var(--fs-sm); font-weight: 500; color: var(--ink-3); }\n.jstat > div { min-width: 0; }\n.jmeter { display: block; height: 4px; margin-top: 3px; border-radius: 2px; background: var(--surface-3); overflow: hidden; }\n.jmeter u { display: block; height: 100%; text-decoration: none; background: linear-gradient(90deg, var(--accent), var(--brand-2)); }\n.journey-scroll { overflow-x: auto; padding-bottom: 4px; }\n.journey-svg { display: block; width: 100%; height: auto; overflow: visible; }\n.journey .jr-road { fill: none; stroke: var(--line-2); stroke-width: 7; stroke-linecap: round; stroke-dasharray: .1 13; }\n.journey .jr-trail { fill: none; stroke: url(#jgrad); stroke-width: 7; stroke-linecap: round; }\n.journey.is-fresh .jr-trail { animation: draw 1.5s var(--ease) .25s both; }\n.journey.is-fresh .jn { animation: fade-in .5s var(--ease) both; animation-delay: calc(var(--i) * 70ms + 200ms); }\n.jn { cursor: pointer; }\n.jn-base { fill: var(--surface); stroke: var(--line-2); stroke-width: 1.5; transition: stroke var(--t-fast); }\n.jn-track { fill: none; stroke: var(--surface-3); stroke-width: 6; }\n.jn-arc { fill: none; stroke: url(#jgrad); stroke-width: 6; stroke-linecap: round; }\n.jn-num { font: 800 13px var(--font); fill: var(--ink); }\n.jn-num.is-dim { fill: var(--ink-3); font-weight: 500; }\n.jn-label { font: 700 13px var(--font); fill: var(--ink); }\n.jn-sub { font: 500 11px var(--font); fill: var(--ink-3); }\n.jn-check { color: var(--s-done); stroke-width: 3; }\n.jn.is-full .jn-arc { stroke: var(--s-done); }\n.jn.is-full .jn-base { fill: color-mix(in srgb, var(--s-done) 12%, var(--surface)); }\n.jn.is-now .jn-base { stroke: var(--accent); stroke-width: 2.5; }\n.jn.is-empty .jn-base { stroke-dasharray: 3 3; }\n.jn.is-empty .jn-label { fill: var(--ink-3); font-weight: 500; }\n.jn.is-future .jn-label { fill: var(--ink-2); }\n.jn:hover .jn-base, .jn:focus-within .jn-base { stroke: var(--accent); }\n.jn-halo { fill: color-mix(in srgb, var(--accent) 22%, transparent); transform-box: fill-box; transform-origin: center; animation: halo 2.4s ease-in-out infinite; pointer-events: none; }\n.jn-pin { animation: bob 2.2s ease-in-out infinite; pointer-events: none; }\n.jn-pin rect, .jn-pin path { fill: var(--accent); }\n.jn-pin text { font: 700 12px var(--font); fill: var(--on-accent); }\n.jn-boss { pointer-events: none; color: #fff; }\n.jn-boss circle { fill: var(--brand-2); stroke: var(--surface); stroke-width: 2; }\n.jn-boss .ic { stroke-width: 2.2; }\n.jn-boss.is-dead { color: #3a2600; }\n.jn-boss.is-dead circle { fill: #eda100; }\n.jn-late { pointer-events: none; }\n.jn-late circle { fill: var(--danger); stroke: var(--surface); stroke-width: 2; }\n.jn-late text { font: 800 11px var(--font); fill: #fff; }\n.app[data-theme=\"dark\"] .jn-late text { fill: #1f0412; }\n.jn-hit { fill: transparent; outline: none; }\n.jn-hit:focus-visible { stroke: var(--accent); stroke-width: 2; }\n.viz-card.show-table .journey-scroll { display: none; }\n\n/* ----- dashboard: tiles (six across) ----- */\n.tile-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }\n.tile b { font-size: 26px; }\n@media (max-width: 1100px) { .tile-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } .jstats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n\n/* ----- dashboard: heat map ----- */\n.heat { display: grid; gap: 4px; }\n.hm-row { display: grid; grid-template-columns: minmax(90px, 150px) repeat(var(--hm-cols), minmax(0, 1fr)) 40px; gap: 4px; align-items: center; }\n.hm-head span { font-size: 11px; color: var(--ink-3); text-align: center; padding-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.hm-head span.is-now { color: var(--ink); font-weight: 800; }\n.hm-label { font-size: var(--fs-sm); color: var(--ink-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.hm-sum { text-align: center; font-size: var(--fs-xs); color: var(--ink-3); font-variant-numeric: tabular-nums; }\n.hm-cell { position: relative; display: grid; place-items: center; height: 30px; border: 0; border-radius: 7px; font-size: var(--fs-xs); transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast); }\n.hm-cell b { font-weight: 800; font-variant-numeric: tabular-nums; }\n.hm-cell.h0 { background: color-mix(in srgb, var(--ink) 4.5%, transparent); }\n.hm-cell.h1 { background: var(--hm1); color: var(--hm-ink-lo); } .hm-cell.h2 { background: var(--hm2); color: var(--hm-ink-lo); }\n.hm-cell.h3 { background: var(--hm3); color: var(--hm-ink-lo); } .hm-cell.h4 { background: var(--hm4); color: var(--hm-ink-lo); }\n.hm-cell.h5 { background: var(--hm5); color: var(--hm-ink-hi); } .hm-cell.h6 { background: var(--hm6); color: var(--hm-ink-hi); }\n.app[data-theme=\"dark\"] .hm-cell.h4, .app[data-theme=\"dark\"] .hm-cell.h5, .app[data-theme=\"dark\"] .hm-cell.h6 { color: var(--hm-ink-lo); }\n.app[data-theme=\"dark\"] .hm-cell.h1, .app[data-theme=\"dark\"] .hm-cell.h2, .app[data-theme=\"dark\"] .hm-cell.h3 { color: var(--hm-ink-hi); }\n.hm-cell.is-now { box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--accent) 60%, transparent); }\nbutton.hm-cell { cursor: pointer; }\nbutton.hm-cell:hover { transform: scale(1.12); z-index: 1; box-shadow: 0 4px 14px rgba(0, 0, 0, .22); }\n.hm-dot { position: absolute; top: 3px; inset-inline-end: 3px; width: 7px; height: 7px; border-radius: 50%; background: var(--danger); box-shadow: 0 0 0 1.5px var(--surface); }\n.hm-scale { display: flex; align-items: center; gap: 4px; margin-top: 10px; font-size: 11px; color: var(--ink-3); }\n.hm-scale i { width: 22px; height: 10px; border-radius: 3px; }\n.hm-scale i.h1 { background: var(--hm1); } .hm-scale i.h2 { background: var(--hm2); } .hm-scale i.h3 { background: var(--hm3); }\n.hm-scale i.h4 { background: var(--hm4); } .hm-scale i.h5 { background: var(--hm5); } .hm-scale i.h6 { background: var(--hm6); }\n.hm-scale em { margin-inline-start: auto; font-style: normal; display: inline-flex; align-items: center; gap: 4px; }\n.hm-scale em .ic { color: var(--danger); fill: var(--danger); }\n.viz-card.show-table .heat { display: none; }\n.is-fresh .hm-cell { animation: fade-in .6s var(--ease) both; }\n\n/* ----- dashboard: burn-up ----- */\n.burn { display: block; width: 100%; height: auto; overflow: visible; }\n.bu-grid { stroke: var(--grid); stroke-width: 1; }\n.bu-grid.is-base { stroke: var(--baseline); }\n.bu-tick { font: 500 11px var(--font); fill: var(--ink-3); }\n.bu-cat { font: 500 11px var(--font); fill: var(--ink-2); }\n.bu-cat.is-now { font-weight: 800; fill: var(--ink); }\n.bu-line { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }\n.bu-line.p { stroke: var(--s-cat1); } .bu-line.d { stroke: var(--s-cat3); }\n.bu-dot { stroke: var(--surface); stroke-width: 2; } .bu-dot.p { fill: var(--s-cat1); } .bu-dot.d { fill: var(--s-cat3); }\n.bu-gap { fill: color-mix(in srgb, var(--danger) 9%, transparent); }\n.sw.gap { background: color-mix(in srgb, var(--danger) 28%, transparent); }\n.bu-now { stroke: var(--accent); stroke-width: 1.5; stroke-dasharray: 3 4; }\n.bu-nowlbl { font: 700 11px var(--font); fill: var(--accent-ink); }\n.bu-end { font: 800 12px var(--font); fill: var(--ink); paint-order: stroke; stroke: var(--surface); stroke-width: 4px; }\n.bu-hit { fill: transparent; }\n.bu-hit:hover { fill: color-mix(in srgb, var(--ink) 4%, transparent); }\n.is-fresh .bu-line { animation: draw 1.4s var(--ease) .15s both; }\n.viz-card.show-table .viz-plot-wrap { display: none; }\n\n/* ----- dashboard: vitals ----- */\n.vitals { display: grid; gap: 14px; }\n.vt-gauge { display: grid; justify-items: center; gap: 8px; --tone: var(--s-done); }\n.vt-gauge.warn { --tone: var(--s-pending); } .vt-gauge.bad { --tone: var(--danger); }\n.vt-gauge svg, .vt-gtext { grid-area: 1 / 1; }\n.vt-gtrack { fill: none; stroke: var(--surface-3); stroke-width: 9; }\n.vt-garc { fill: none; stroke: var(--tone); stroke-width: 9; stroke-linecap: round; }\n.is-fresh .vt-garc { animation: arc-in 1.1s var(--ease) both; }\n.vt-gtext { display: grid; place-content: center; text-align: center; line-height: 1.1; }\n.vt-gtext b { font-size: 30px; font-weight: 800; }\n.vt-gtext small { font-size: 11px; color: var(--ink-3); }\n.vt-tier { grid-row: 2; display: inline-flex; align-items: center; gap: 6px; padding: 3px 12px; border-radius: 999px; font-size: var(--fs-sm); font-weight: 700; background: color-mix(in srgb, var(--tone) 14%, transparent); }\n.vt-tier .ic { color: var(--tone); }\n.vt-list { display: grid; gap: 6px; }\n.vt { display: grid; grid-template-columns: 1fr auto; gap: 4px 8px; padding: 8px 12px; border-radius: 12px; text-align: start; background: var(--surface-2); border: 1px solid transparent; transition: border-color var(--t-fast); --tone: var(--s-done); }\n.vt.warn { --tone: var(--s-pending); } .vt.bad { --tone: var(--danger); }\n.vt:hover { border-color: var(--line-2); }\n.vt-l { display: flex; align-items: center; gap: 6px; font-size: var(--fs-sm); font-weight: 600; }\n.vt-l .ic { color: var(--tone); }\n.vt-v { font-weight: 800; font-size: var(--fs-md); }\n.vt-bar { grid-column: 1 / -1; height: 6px; border-radius: 3px; background: var(--surface-3); overflow: hidden; }\n.vt-bar i { display: block; height: 100%; border-radius: 3px; background: var(--tone); transform-origin: right center; }\n.is-fresh .vt-bar i { animation: grow-x .9s var(--ease) .2s both; }\n.vt small { grid-column: 1 / -1; font-size: 11px; color: var(--ink-3); }\n\n/* ----- dashboard: podium ----- */\n.podium { display: grid; gap: 12px; }\n.pd-stand { display: flex; justify-content: center; align-items: flex-end; gap: 10px; padding-top: 6px; }\n.pd { display: grid; justify-items: center; gap: 3px; flex: 1; max-width: 118px; min-width: 0; text-align: center; border-radius: 12px; }\n.pd .av { width: 48px; height: 48px; font-size: 15px; box-shadow: 0 0 0 2.5px var(--surface), 0 0 0 4.5px var(--pd-ring, var(--line-2)); }\n.pd-1 { --pd-ring: var(--accent); }\n.pd b { font-size: var(--fs-sm); font-weight: 700; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 6px; }\n.pd-xp { font-size: 11px; color: var(--ink-3); }\n.pd-xp em { font-style: normal; font-weight: 800; font-size: var(--fs-md); color: var(--ink); }\n.pd-crown { color: #eda100; animation: bob 2.4s ease-in-out infinite; line-height: 0; }\n.pd-crown .ic { fill: color-mix(in srgb, #eda100 35%, transparent); }\n.pd-block { width: 100%; display: grid; place-items: start center; padding-top: 8px; border-radius: 12px 12px 4px 4px; background: var(--surface-3); font-style: normal; transform-origin: bottom; }\n.pd-block i { font-style: normal; font-weight: 800; font-size: var(--fs-lg); color: var(--ink-2); }\n.pd-1 .pd-block { height: 88px; background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--brand-2))); }\n.pd-1 .pd-block i { color: var(--on-accent); }\n.pd-2 .pd-block { height: 64px; } .pd-3 .pd-block { height: 48px; }\n.is-fresh .pd-block { animation: grow-y .9s var(--ease) .2s both; }\n.pd:hover .av { --pd-ring: var(--accent); }\n.pd-list { display: grid; gap: 2px; }\n.pd-row { display: grid; grid-template-columns: 18px 22px minmax(70px, 1fr) minmax(40px, 1fr) 40px; gap: 8px; align-items: center; padding: 4px 6px; border-radius: 8px; font-size: var(--fs-sm); color: var(--ink-2); text-align: start; }\n.pd-row:hover { background: var(--surface-2); }\n.pd-n { color: var(--ink-3); font-size: var(--fs-xs); }\n.pd-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.pd-track { height: 6px; border-radius: 3px; background: var(--surface-3); overflow: hidden; }\n.pd-track i { display: block; height: 100%; border-radius: 3px; background: var(--s-cat1); }\n.pd-row b { color: var(--ink); text-align: end; }\n.viz-card.show-table .podium > :not(.viz-table) { display: none; }\n\n/* ----- dashboard: stale list ----- */\n.stale-list li { grid-template-columns: 52px minmax(0, 1fr) auto; }\n.stale-list .days { display: grid; justify-items: center; line-height: 1.1; padding: 3px 0; border-radius: 9px; background: color-mix(in srgb, var(--s-pending) 18%, transparent); font-weight: 800; font-size: var(--fs-md); }\n.stale-list .days small { font-size: 10px; font-weight: 500; color: var(--ink-2); }\n\n/* ----- animations on first showing of the dashboard ----- */\n.is-fresh .col-bar { animation: grow-y .8s var(--ease) both; transform-origin: bottom; }\n.is-fresh .hrow-bar { animation: grow-x .8s var(--ease) both; transform-origin: right center; }\n.is-fresh .donut .arc { animation: arc-in .9s var(--ease) both; }\n.is-fresh .tile, .is-fresh .jstat { animation: rise .5s var(--ease) both; }\n.is-fresh .tile:nth-child(2) { animation-delay: .05s; } .is-fresh .tile:nth-child(3) { animation-delay: .1s; }\n.is-fresh .tile:nth-child(4) { animation-delay: .15s; } .is-fresh .tile:nth-child(5) { animation-delay: .2s; } .is-fresh .tile:nth-child(6) { animation-delay: .25s; }\n.is-fresh .jstat:nth-child(2) { animation-delay: .08s; } .is-fresh .jstat:nth-child(3) { animation-delay: .16s; } .is-fresh .jstat:nth-child(4) { animation-delay: .24s; }\n.badge-card.is-on .medal { transition: transform .4s var(--ease); }\n.badge-card.is-on:hover .medal { transform: rotate(-8deg) scale(1.08); }\n\n/* ----- extras ----- */\n.viz-card.wide .cols-chart:not(.compact) { height: 340px; }\n.viz-card.wide .cols-chart.compact { height: 280px; }\n.viz-card.show-table .xp-key { display: none; }\n.xp-key { display: grid; gap: 8px; padding-top: 12px; border-top: 1px solid var(--line); }\n.xp-key h4 { font-size: var(--fs-sm); font-weight: 700; }\n.xp-key > div { display: flex; flex-wrap: wrap; gap: 8px 14px; }\n.xp-key > div span { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-sm); }\n.xp-key > div span b { font-weight: 800; }\n.xp-key p { font-size: 11px; color: var(--ink-3); line-height: 1.8; }\n\n.card-top { flex-wrap: wrap; row-gap: 4px; }\nbdi.key { white-space: nowrap; }\n\n/* ---- size report ---- */\n.tool-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }\n.viz-card > header .tool-row .switch { flex: none; }\n.srep-wrap { overflow-x: auto; margin-top: 4px; }\n.srep { width: 100%; border-collapse: separate; border-spacing: 0 3px; font-variant-numeric: tabular-nums; }\n.srep th { font-weight: 500; font-size: 11px; color: var(--ink-3); padding: 2px 3px 6px; text-align: center; white-space: nowrap; vertical-align: bottom; }\n.srep th .size { font-size: 11px; }\n.srep .srep-rl { text-align: start; min-width: 150px; padding-inline-end: 8px; }\n.srep td { padding: 0 2px; height: 36px; text-align: center; }\n.sr-na { font-size: 11px; color: var(--ink-3); }\n.sr-row { display: inline-flex; align-items: center; gap: 8px; max-width: 220px; border: 0; background: none; padding: 4px 6px; margin-inline-start: -6px; border-radius: 8px; color: var(--ink); font-size: var(--fs-sm); font-weight: 600; text-align: start; cursor: pointer; }\n.sr-row span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.sr-row:hover { background: color-mix(in srgb, var(--ink) 6%, transparent); }\n.sr-dot { flex: none; width: 9px; height: 9px; border-radius: 50%; }\n.sr-cell { display: grid; place-items: center; width: 100%; min-width: 42px; height: 34px; border: 0; border-radius: 8px; font-size: var(--fs-sm); font-weight: 700; color: var(--ink);\n  background: color-mix(in oklab, var(--c) var(--a), transparent); cursor: pointer; transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast); }\n.sr-cell:hover { transform: translateY(-1px); box-shadow: 0 0 0 2px color-mix(in srgb, var(--c) 75%, transparent); }\n.sr-cell.is-zero { background: none; color: var(--ink-4, var(--ink-3)); font-weight: 400; cursor: default; opacity: .6; }\n.sr-cell.is-foot { box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--c) 70%, transparent); background: none; }\n.srep th.sr-sum, .srep td.sr-sum { padding-inline: 10px; min-width: 70px; }\n.srep td.sr-sum b { font-size: var(--fs-md, 15px); font-weight: 800; }\n.sr-mix { min-width: 150px; width: 22%; }\n.mixbar { display: flex; gap: 2px; height: 12px; border-radius: 6px; overflow: hidden; }\n.mixbar i { display: block; min-width: 2px; border-radius: 2px; }\n.srep-foot td, .srep-foot th { border-top: 1px solid var(--line, var(--hairline)); padding-top: 2px; }\n.is-fresh .sr-cell { animation: fade-in .5s var(--ease) both; }\n.is-fresh .mixbar i { animation: grow-x .8s var(--ease) .2s both; transform-origin: right center; }\n@media (max-width: 720px) { .sr-mix { display: none; } .srep .srep-rl { min-width: 110px; } }\n\n/* ---- size report: filters, stats, definition row, wide labelled bars ---- */\n.sr-filters { grid-column: 1 / -1; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.sr-stats { display: flex; flex-wrap: wrap; gap: 8px 28px; padding: 2px 0 14px; }\n.sr-stat { display: grid; gap: 1px; }\n.sr-stat small { font-size: var(--fs-xs); color: var(--ink-3); }\n.sr-stat b { font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; }\n.sr-stat b i { font-style: normal; font-size: var(--fs-sm); font-weight: 500; color: var(--ink-3); }\n.sr-def { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 16px; margin-top: 48px; padding-top: 12px; border-top: 1px solid var(--line); font-size: var(--fs-sm); color: var(--ink-2); }\n.sr-def > span { display: inline-flex; align-items: center; gap: 6px; }\n.sr-def em { font-style: normal; }\n.sr-def small { margin-inline-start: auto; color: var(--ink-3); font-size: var(--fs-xs); }\n.cols-chart.wide-bars .col-bar { width: 46px; }\n.cols-chart.wide-bars .col-bar .seg { display: grid; place-items: center; }\n.seg-n { font-size: 12px; font-weight: 800; color: #fff; font-variant-numeric: tabular-nums; pointer-events: none; }\n.app[data-theme=\"dark\"] .seg[data-s=\"todo\"] .seg-n { color: #15131f; }\n.xp-key small { color: var(--ink-3); font-size: var(--fs-xs); }\n.jn-year { font-weight: 500; font-size: 11px; fill: var(--ink-3); }\n.pd-card > header { flex-wrap: wrap; }\n.pd-card > header .switch { order: 3; flex: 1 1 100%; display: flex; margin-top: 6px; }\n.pd-card > header .switch button { flex: 1; }\n.jstat { align-items: flex-start; }\n.jdesc { margin: 3px 0 0; font-size: 11px; line-height: 1.55; color: var(--ink-3); white-space: normal; }\n.journey-card > header .switch { flex: none; }\n\n/* ==========================================================================\n   SIF tab — funnel, bottlenecks, value, idea → delivery\n   ========================================================================== */\n.app {\n  /* stages read as a sequence: one blue ramp, then the status colours for the side states */\n  --sf-strategy: var(--hm2); --sf-product: var(--hm3); --sf-tech: var(--hm4);\n  --sf-dispatched: var(--s-done); --sf-approval: var(--hm5); --sf-ready: var(--s-devdone);\n  --sf-review: var(--s-pending); --sf-hold: var(--ink-3); --sf-rejected: var(--danger);\n}\n.sif-filters .select select { max-width: 200px; }\n.dash-sec h2 em { font-style: normal; display: inline-grid; place-items: center; width: 26px; height: 26px; margin-inline-end: 8px; border-radius: 8px; font-size: var(--fs-sm); font-weight: 800; color: var(--on-accent); background: linear-gradient(135deg, var(--accent), var(--brand-2)); vertical-align: 2px; }\n\n.sif-tiles { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 10px; }\n.sif-tile { display: grid; gap: 2px; text-align: start; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--r-card); background: var(--surface); box-shadow: var(--shadow-card); cursor: pointer; transition: transform var(--t-fast) var(--ease), border-color var(--t-fast), box-shadow var(--t-fast); position: relative; overflow: hidden; }\n.sif-tile::before { content: \"\"; position: absolute; inset-inline-start: 0; top: 10px; bottom: 10px; width: 3px; border-radius: 3px; background: var(--line-2); }\n.sif-tile.is-flow::before { background: var(--sf-tech); } .sif-tile.is-ok::before { background: var(--s-done); } .sif-tile.is-warn::before { background: var(--s-pending); }\n.sif-tile:hover { transform: translateY(-2px); border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.sif-tile small { font-size: var(--fs-xs); color: var(--ink-3); }\n.sif-tile b { font-size: 28px; font-weight: 800; line-height: 1.2; font-variant-numeric: tabular-nums; }\n.sif-tile em { font-style: normal; font-size: 11px; color: var(--ink-3); }\n.is-fresh .sif-tile { animation: rise .5s var(--ease) both; }\n.is-fresh .sif-tile:nth-child(2) { animation-delay: .04s; } .is-fresh .sif-tile:nth-child(3) { animation-delay: .08s; }\n.is-fresh .sif-tile:nth-child(4) { animation-delay: .12s; } .is-fresh .sif-tile:nth-child(5) { animation-delay: .16s; } .is-fresh .sif-tile:nth-child(6) { animation-delay: .2s; }\n\n.sif-mine { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: var(--r-card); border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--line)); background: var(--accent-soft); }\n.sif-mine > .ic { color: var(--accent-ink); flex: none; }\n.sif-mine div { flex: 1; display: grid; }\n.sif-mine small { color: var(--ink-3); font-size: var(--fs-xs); }\n.sif-wait { display: flex; align-items: center; gap: 8px; padding: 8px 12px; margin-bottom: 8px; border-radius: var(--r-control); background: var(--surface-2); color: var(--ink-3); font-size: var(--fs-sm); }\n.sif-wait b { margin-inline-start: auto; font-variant-numeric: tabular-nums; color: var(--ink-2); }\n\n.sf-pill { display: inline-flex; align-items: center; gap: 6px; padding: 2px 10px 2px 8px; border-radius: var(--r-pill); font-size: var(--fs-xs); white-space: nowrap; background: color-mix(in srgb, var(--c) 14%, transparent); color: var(--ink); }\n.sf-pill i { width: 8px; height: 8px; border-radius: 50%; background: var(--c); flex: none; }\n.sf-link { display: flex; align-items: center; gap: 8px; min-width: 0; color: inherit; text-decoration: none; }\n.sf-link:hover span[dir] { text-decoration: underline; }\n.dt-title .sf-link { display: grid; gap: 2px; }\n.dt-title .sf-link > span[dir] { max-width: 420px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; text-align: start; }\n\n/* funnel rows (also used for the idea → delivery steps) */\n.fn { display: grid; gap: 6px; }\n.fn-row { display: grid; grid-template-columns: 170px minmax(0, 1fr) 84px 118px 74px; align-items: center; gap: 10px; padding: 4px 6px; border-radius: var(--r-control); }\n.fn-row.pl-row { grid-template-columns: 190px minmax(0, 1fr) 84px 60px; }\n.fn-row.is-leaky { background: color-mix(in srgb, var(--s-pending) 9%, transparent); }\n.fn-label { display: grid; line-height: 1.3; min-width: 0; }\n.fn-label b { font-size: var(--fs-sm); }\n.fn-label small { font-size: 11px; color: var(--ink-3); text-align: end; }\n.fn-track { height: 30px; display: flex; align-items: center; background: none; border: 0; padding: 0; cursor: pointer; border-radius: 6px; }\n.fn-track:hover .fn-bar { filter: brightness(1.06) saturate(1.1); }\n.fn-bar { display: block; height: 100%; min-width: 3px; border-radius: 4px 0 0 4px; background: color-mix(in srgb, var(--c) 38%, var(--surface-2)); overflow: hidden; transition: width 500ms var(--ease), filter var(--t-fast); }\n.fn-bar { border-start-end-radius: 0; border-radius: 4px 0 0 4px; }\n.fn-now { display: block; height: 100%; background: var(--c); border-radius: 4px 0 0 4px; }\n.is-fresh .fn-bar { animation: grow-x .8s var(--ease) both; transform-origin: right center; }\n.fn-val { display: grid; justify-items: end; line-height: 1.25; }\n.fn-val b { font-size: var(--fs-md); font-variant-numeric: tabular-nums; }\n.fn-val small { font-size: 11px; color: var(--ink-3); }\n.fn-conv { display: grid; gap: 1px; justify-items: start; }\n.conv { font-size: var(--fs-xs); font-weight: 700; padding: 2px 8px; border-radius: var(--r-pill); background: var(--surface-2); color: var(--ink-2); }\n.conv.is-start { font-weight: 500; color: var(--ink-3); }\n.fn-conv em { font-style: normal; font-size: 11px; color: var(--ink-2); }\n.lost { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; padding: 2px 8px; border-radius: var(--r-pill); border: 1px solid color-mix(in srgb, var(--danger) 35%, transparent); background: var(--danger-soft); color: var(--danger); cursor: pointer; }\n.fn-key { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 8px; font-size: var(--fs-xs); color: var(--ink-3); }\n.fn-key i { width: 14px; height: 8px; border-radius: 3px; }\n.fn-key .k1 { background: color-mix(in srgb, var(--sf-tech) 38%, var(--surface-2)); } .fn-key .k2 { background: var(--sf-tech); margin-inline-start: 10px; }\n.pl-notes { line-height: 1.8; }\n.viz-card.show-table .sif-plot { display: none; }\n\n.side-list { display: grid; gap: 8px; }\n.side-row { display: grid; grid-template-columns: 6px 1fr auto auto; align-items: center; gap: 10px; padding: 10px 12px; text-align: start; border: 1px solid var(--line); border-radius: var(--r-control); background: var(--surface); cursor: pointer; transition: background var(--t-fast), transform var(--t-fast) var(--ease); }\n.side-row:hover { background: var(--surface-2); transform: translateX(-2px); }\n.side-row i { align-self: stretch; border-radius: 3px; }\n.side-row span { display: grid; line-height: 1.3; } .side-row small { color: var(--ink-3); font-size: 11px; }\n.side-row strong { font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; }\n.side-row em { font-style: normal; font-size: var(--fs-xs); color: var(--ink-3); min-width: 40px; text-align: end; }\n\n/* time in stage */\n.dur { display: grid; gap: 4px; }\n.dur-row { display: grid; grid-template-columns: 190px minmax(0, 1fr) 190px; align-items: center; gap: 12px; padding: 6px 8px; background: none; border: 0; border-radius: var(--r-control); text-align: start; cursor: pointer; }\n.dur-row:hover { background: var(--surface-2); }\n.dur-track { position: relative; height: 16px; border-radius: 4px; background: var(--surface-2); overflow: hidden; }\n.dur-track i { position: absolute; inset-block: 0; inset-inline-start: 0; border-radius: 0 4px 4px 0; }\n.dur-p75 { background: color-mix(in srgb, var(--ink-3) 20%, transparent); }\n.dur-med { height: 100%; }\n.is-fresh .dur-track i { animation: grow-x .8s var(--ease) both; transform-origin: right center; }\n.dur-val { display: grid; line-height: 1.3; } .dur-val b { font-variant-numeric: tabular-nums; } .dur-val small { font-size: 11px; color: var(--ink-3); }\n\n.stuck-list { display: grid; }\n.stuck-list li { display: flex; align-items: center; gap: 8px; padding: 8px 4px; border-bottom: 1px solid var(--line); }\n.stuck-list li > a { flex: 1; min-width: 0; display: grid; gap: 3px; }\n.stuck-list .sl-title { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: var(--fs-sm); }\n.stuck-list .sl-title span { unicode-bidi: plaintext; }\n.stuck-list small { display: flex; align-items: center; gap: 6px; }\n.sl-age { font-size: var(--fs-xs); font-weight: 700; padding: 2px 8px; border-radius: var(--r-pill); background: var(--danger-soft); color: var(--danger); white-space: nowrap; }\n.hrow-val small .late { color: var(--danger); font-weight: 600; }\n\n/* value */\n.q-list { display: grid; gap: 8px; }\n.q-row { display: grid; grid-template-columns: 96px minmax(0, 1fr) 44px; grid-template-areas: \"l t b\" \". s s\"; align-items: center; gap: 2px 10px; padding: 6px 4px; text-align: start; background: none; border: 0; cursor: pointer; border-radius: var(--r-control); font-size: var(--fs-sm); }\n.q-row:hover { background: var(--surface-2); }\n.q-row > span:first-child { grid-area: l; color: var(--ink-2); } .q-track { grid-area: t; height: 10px; border-radius: 5px; background: var(--surface-2); overflow: hidden; }\n.q-track i { display: block; height: 100%; background: var(--sf-tech); border-radius: 0 5px 5px 0; }\n.is-fresh .q-track i { animation: grow-x .8s var(--ease) both; transform-origin: right center; }\n.q-row b { grid-area: b; text-align: end; font-variant-numeric: tabular-nums; } .q-row small { grid-area: s; color: var(--ink-3); font-size: 11px; }\n.q-all { display: flex; align-items: center; gap: 10px; margin-top: 4px; padding: 10px 12px; text-align: start; border: 1px dashed var(--line-2); border-radius: var(--r-control); background: none; cursor: pointer; font-size: var(--fs-xs); color: var(--ink-2); }\n.q-all b { font-size: 22px; font-weight: 800; color: var(--ink); } .q-all u { text-decoration: none; color: var(--ink); font-weight: 600; }\n.rel { display: inline-block; width: 90px; height: 8px; border-radius: 4px; background: var(--surface-2); vertical-align: middle; overflow: hidden; margin-inline-end: 8px; }\n.rel i { display: block; height: 100%; background: var(--accent); border-radius: 0 4px 4px 0; }\n.tag.is-warn { background: color-mix(in srgb, var(--s-pending) 18%, transparent); }\n\n.lead { display: grid; gap: 14px; }\n.lead-stat { display: grid; gap: 2px; padding: 12px 14px; border-radius: var(--r-control); background: var(--surface-2); }\n.lead-stat small { font-size: var(--fs-xs); color: var(--ink-3); } .lead-stat b { font-size: 30px; font-weight: 800; line-height: 1.2; }\n.lead-stat em { font-style: normal; font-size: var(--fs-xs); color: var(--ink-2); } .lead-stat i { font-style: normal; font-size: 11px; color: var(--ink-3); margin-top: 4px; }\n\n.sif-sheet li > a { flex: 1; min-width: 0; }\n.sif-sheet .sl-t { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.sif-sheet .sl-t span { unicode-bidi: plaintext; }\n\n@media (max-width: 1100px) {\n  .sif-tiles { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n  .fn-row { grid-template-columns: 130px minmax(0, 1fr) 70px 96px; } .fn-lost { display: none; }\n  .dur-row { grid-template-columns: 150px minmax(0, 1fr); } .dur-val { display: none; }\n}\n.app[data-theme=\"dark\"] { --sf-strategy: var(--hm3); --sf-product: var(--hm4); --sf-tech: var(--hm5); --sf-approval: var(--hm6); }\n\n/* ==========================================================================\n   Issue drawer — «کارت اینیشیتیو»: Persian star-lattice hero, timeline, editable facts\n   ========================================================================== */\n.drawer-panel { width: min(680px, 100vw); }\n.d-scroll { gap: 16px; background: color-mix(in srgb, var(--bg) 60%, var(--surface)); }\n.d-head .ro { display: inline-flex; align-items: center; gap: 4px; margin-inline-end: 6px; padding: 2px 10px; border-radius: var(--r-pill); background: var(--surface-2); color: var(--ink-3); font-size: var(--fs-xs); }\n\n.d-hero { --st: var(--s-todo); position: relative; overflow: hidden; gap: 12px; padding: 20px 22px; border-radius: var(--r-panel); border: 1px solid color-mix(in srgb, var(--st) 28%, var(--line));\n  background: linear-gradient(135deg, color-mix(in srgb, var(--st) 11%, var(--surface)), var(--surface) 62%); box-shadow: var(--shadow-card); }\n.d-hero.st-done { --st: var(--s-done); } .d-hero.st-devdone { --st: var(--s-devdone); } .d-hero.st-progress { --st: var(--s-progress); }\n.d-hero.st-pending { --st: var(--s-pending); } .d-hero.st-todo { --st: var(--s-todo); } .d-hero.st-canceled { --st: var(--s-canceled); }\n.d-hero::before { content: \"\"; position: absolute; inset-block: 0; inset-inline-end: 0; width: 62%; pointer-events: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Cpath d='M22.0 5.0 L25.6 13.2 L34.0 10.0 L30.8 18.4 L39.0 22.0 L30.8 25.6 L34.0 34.0 L25.6 30.8 L22.0 39.0 L18.4 30.8 L10.0 34.0 L13.2 25.6 L5.0 22.0 L13.2 18.4 L10.0 10.0 L18.4 13.2 Z' fill='none' stroke='%23d40c78' stroke-opacity='.30' stroke-width='1.1'/%3E%3Ccircle cx='0' cy='0' r='2' fill='%23d40c78' fill-opacity='.22'/%3E%3Ccircle cx='44' cy='44' r='2' fill='%23d40c78' fill-opacity='.22'/%3E%3C/svg%3E\"); background-size: 44px 44px; opacity: .4;\n  -webkit-mask-image: linear-gradient(to left, #000 0%, transparent 85%); mask-image: linear-gradient(to left, #000 0%, transparent 85%); }\n.app[data-theme=\"dark\"] .d-hero::before { background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Cpath d='M22.0 5.0 L25.6 13.2 L34.0 10.0 L30.8 18.4 L39.0 22.0 L30.8 25.6 L34.0 34.0 L25.6 30.8 L22.0 39.0 L18.4 30.8 L10.0 34.0 L13.2 25.6 L5.0 22.0 L13.2 18.4 L10.0 10.0 L18.4 13.2 Z' fill='none' stroke='%23f45bab' stroke-opacity='.30' stroke-width='1.1'/%3E%3Ccircle cx='0' cy='0' r='2' fill='%23f45bab' fill-opacity='.22'/%3E%3Ccircle cx='44' cy='44' r='2' fill='%23f45bab' fill-opacity='.22'/%3E%3C/svg%3E\"); opacity: .7; }\n.d-hero::after { content: \"\"; position: absolute; inset-inline: 0; top: 0; height: 3px; background: linear-gradient(90deg, var(--brand-2), var(--accent) 60%, #8b5cf6); }\n.d-hero > * { position: relative; }\n.d-hero h2 { font-size: 22px; font-weight: 800; line-height: 1.7; }\n.d-hero .fact.is-title { grid-column: auto; }\n\n.pen { display: inline-grid; place-items: center; width: 24px; height: 24px; margin-inline-start: 6px; border: 0; border-radius: 8px; background: transparent; color: var(--ink-3); cursor: pointer; vertical-align: middle; opacity: .4; transition: opacity var(--t-fast), background var(--t-fast), color var(--t-fast); }\n.pen:hover, .fact:hover .pen, .dt:hover .pen, h2:hover .pen, .d-section h3:hover .pen, .prog:hover .pen, .pen:focus-visible { opacity: 1; background: var(--accent-soft); color: var(--accent-ink); }\n.unset { color: var(--ink-3); font-weight: 400; font-style: normal; }\n\n.d-card { display: grid; gap: 14px; padding: 16px 18px; border-radius: var(--r-panel); border: 1px solid var(--line); background: var(--surface); box-shadow: var(--shadow-card); }\n.d-card > header { display: flex; align-items: center; gap: 10px; }\n.d-card > header h3 { flex: 1; display: flex; align-items: center; gap: 8px; font-size: var(--fs-lg); font-weight: 800; }\n.d-card > header h3 .ic { color: var(--accent); }\n\n.st-chip { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: var(--r-pill); background: var(--surface-2); color: var(--ink-2); font-size: var(--fs-xs); font-weight: 600; white-space: nowrap; }\n.st-chip.is-ok { background: color-mix(in srgb, var(--s-done) 13%, transparent); color: var(--ok-ink); }\n.st-chip.is-soon { background: color-mix(in srgb, var(--s-pending) 20%, transparent); color: var(--ink); }\n.st-chip.is-late { background: var(--danger-soft); color: var(--danger); }\n\n/* timeline */\n.tl { padding: 26px 10px 2px; }\n.tl-track { position: relative; height: 10px; border-radius: 6px; background: var(--surface-3); }\n.tl-fill { position: absolute; top: 0; bottom: 0; border-radius: 6px; background: linear-gradient(to left, var(--brand-2), var(--accent)); }\n.tl-m { position: absolute; top: 50%; width: 16px; height: 16px; margin-inline-start: -8px; margin-top: -8px; display: grid; place-items: center; }\n.tl-m.is-start { border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px var(--surface); }\n.tl-m.is-end { width: 22px; height: 22px; margin-inline-start: -11px; margin-top: -11px; border-radius: 50%; background: var(--ink); color: var(--surface); box-shadow: 0 0 0 3px var(--surface); }\n.tl-m.is-est { background: var(--s-pending); transform: rotate(45deg) scale(.78); border-radius: 3px; box-shadow: 0 0 0 3px var(--surface); }\n.tl-m.is-today { width: 2px; margin-inline-start: -1px; height: 28px; margin-top: -14px; background: var(--ink); border-radius: 2px; }\n.tl-m.is-today::after { content: \"امروز\"; position: absolute; bottom: calc(100% + 3px); left: 50%; transform: translateX(-50%); font-size: 11px; font-weight: 700; color: var(--ink); white-space: nowrap; }\n.tl-key { display: flex; flex-wrap: wrap; gap: 4px 14px; margin-top: 14px; font-size: 11px; color: var(--ink-3); }\n.tl-key span { display: inline-flex; align-items: center; gap: 5px; }\n.tl-key i { width: 9px; height: 9px; display: inline-block; }\n.k-start { border-radius: 50%; background: var(--accent); } .k-today { width: 2px !important; height: 11px !important; background: var(--ink); } .k-est { background: var(--s-pending); transform: rotate(45deg) scale(.85); border-radius: 2px; }\n.is-fresh .tl-fill { animation: grow-x .9s var(--ease) .25s both; transform-origin: right center; }\n\n.dates { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }\n.dt { position: relative; display: grid; align-content: start; gap: 3px; padding: 12px 14px; border-radius: var(--r-card); border: 1px solid var(--line); background: var(--surface-2); overflow: hidden; }\n.dt::before { content: \"\"; position: absolute; inset-inline: 0; top: 0; height: 3px; background: var(--c, var(--line-2)); }\n.dt.tone-start { --c: var(--accent); } .dt.tone-end { --c: var(--ink); } .dt.tone-est { --c: var(--s-pending); }\n.dt.is-editing { border-color: var(--accent); background: var(--accent-soft); }\n.dt-top { display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); }\n.dt-top .pen { margin-inline-start: auto; }\n.dt-ic { display: inline-grid; place-items: center; width: 22px; height: 22px; border-radius: 7px; background: color-mix(in srgb, var(--c) 14%, transparent); color: var(--ink); }\n.dt-date { font-size: var(--fs-md); font-weight: 800; line-height: 1.5; }\n.dt-date.is-empty { color: var(--ink-3); }\n.dt small { color: var(--ink-3); font-size: 11px; line-height: 1.5; }\n.dt .st-chip { justify-self: start; margin-top: 4px; }\n\n.time-foot { display: flex; align-items: center; gap: 12px 20px; flex-wrap: wrap; }\n.mv { display: flex; align-items: center; gap: 8px; font-size: var(--fs-xs); color: var(--ink-3); }\n.mv > span:first-child { display: inline-flex; align-items: center; gap: 4px; }\n.prog { flex: 1; min-width: 220px; display: flex; align-items: center; gap: 8px; font-size: var(--fs-xs); color: var(--ink-3); }\n.prog-bar { flex: 1; height: 8px; border-radius: 4px; background: var(--surface-3); overflow: hidden; }\n.prog-bar i { display: block; height: 100%; border-radius: 4px; background: linear-gradient(to left, var(--brand-2), var(--accent)); }\n.prog b { color: var(--ink); font-variant-numeric: tabular-nums; }\n\n/* facts */\n.d-card .facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 20px; background: none; border: 0; border-radius: 0; overflow: visible; }\n.d-card .fact { background: none; padding: 0; gap: 4px; }\n.d-card .fact.is-wide, .d-card .fact.is-editing { grid-column: 1 / -1; }\n.d-card .fact dt { display: flex; align-items: center; font-size: var(--fs-xs); color: var(--ink-3); }\n.d-card .fact dd { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; font-size: var(--fs-sm); font-weight: 600; }\n.d-card .fact dd a { display: inline-flex; align-items: center; gap: 4px; }\n.fact.is-editing { padding: 12px; border-radius: var(--r-card); background: var(--accent-soft) !important; border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent); }\n\n/* editors */\n.ed { display: grid; gap: 8px; margin-top: 6px; width: 100%; font-weight: 400; }\n.ed-input { display: block; width: 100%; padding: 9px 12px; border-radius: var(--r-control); border: 1px solid var(--line-2); background: var(--surface); color: var(--ink); outline: 0; font-size: var(--fs-md); unicode-bidi: plaintext; transition: border-color var(--t-fast), box-shadow var(--t-fast); }\n.ed-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.ed-area { min-height: 180px; resize: vertical; line-height: 1.9; }\n.ed-chips { display: flex; flex-wrap: wrap; gap: 6px; }\n.ed-opt { display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; border-radius: var(--r-pill); border: 1px solid var(--line-2); background: var(--surface); color: var(--ink); font-size: var(--fs-sm); cursor: pointer; transition: background var(--t-fast), border-color var(--t-fast), transform var(--t-fast) var(--ease); }\n.ed-opt:hover { border-color: var(--accent); transform: translateY(-1px); }\n.ed-opt.is-on { background: var(--accent); border-color: var(--accent); color: var(--on-accent); font-weight: 700; }\n.ed-opt.is-clear { color: var(--ink-3); border-style: dashed; }\n.ed-opt.is-busy { opacity: .6; pointer-events: none; }\n.ed-foot { display: flex; align-items: center; gap: 8px; }\n.ed-err { color: var(--danger); font-size: var(--fs-xs); }\n.ed-results { display: grid; max-height: 220px; overflow-y: auto; }\n.ed-none { padding: 8px; }\n.ed .hint { color: var(--ink-3); }\n.btn.is-busy { opacity: .6; }\n\n/* Jalali calendar */\n.cal-wrap { display: grid; }\n.cal { width: min(340px, 100%); justify-self: center; padding: 12px; border-radius: var(--r-card); border: 1px solid var(--line-2); background: var(--surface); box-shadow: var(--shadow-lift); animation: pop-in .18s var(--ease) both; }\n.cal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }\n.cal-head b { font-size: var(--fs-md); font-weight: 800; }\n.cal-wd, .cal-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 4px; text-align: center; }\n.cal-wd { margin-bottom: 4px; font-size: var(--fs-xs); color: var(--ink-3); font-weight: 700; }\n.cal-wd .is-fri { color: var(--danger); }\n.cd { aspect-ratio: 1; display: grid; place-items: center; border: 0; border-radius: 10px; background: transparent; color: var(--ink); font-size: var(--fs-sm); font-variant-numeric: tabular-nums; cursor: pointer; transition: background var(--t-fast), transform var(--t-fast) var(--ease); }\n.cd:hover { background: var(--accent-soft); transform: scale(1.08); }\n.cd.is-fri { color: var(--danger); }\n.cd.is-today { box-shadow: inset 0 0 0 1.5px var(--accent); font-weight: 800; }\n.cd.is-sel { background: var(--accent); color: var(--on-accent); font-weight: 800; }\n.cal-foot { display: flex; align-items: center; gap: 6px; margin-top: 10px; }\n\n/* entrance: once per opened card, not on every edit */\n.d-scroll.is-fresh > * { animation: rise .45s var(--ease) both; }\n.d-scroll.is-fresh > :nth-child(2) { animation-delay: .05s; } .d-scroll.is-fresh > :nth-child(3) { animation-delay: .1s; }\n.d-scroll.is-fresh > :nth-child(4) { animation-delay: .15s; } .d-scroll.is-fresh > :nth-child(n+5) { animation-delay: .2s; }\n\n@media (max-width: 640px) { .dates { grid-template-columns: 1fr; } .d-card .facts { grid-template-columns: 1fr; } }\n.d-card .fact { align-content: start; }\n.composer.is-locked { display: flex; align-items: center; gap: 8px; justify-content: center; padding: 16px; color: var(--ink-3); font-size: var(--fs-sm); border-top: 1px solid var(--line); background: var(--surface); }\n\n/* ==========================================================================\n   SIF lists — side sheet + filterable «گیرکرده‌ها»\n   ========================================================================== */\n.sheet.is-sif .sheet-panel { width: min(760px, 100vw); }\n.sd-tools { display: grid; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--bg) 55%, var(--surface)); flex: none; }\n.sd-card .sd-tools { padding: 0 0 12px; background: none; border-bottom: 1px solid var(--line); margin-bottom: 4px; }\n.sd-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.sd-top .search { flex: 1 1 220px; min-width: 0; margin: 0; }\n.sd-top .select select { max-width: 190px; }\n.sd-chips, .sd-flags, .sd-sels { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }\n.sd-chip, .sd-flag { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 12px 0 10px; border-radius: var(--r-pill); border: 1px solid var(--line); background: var(--surface); color: var(--ink-2); font-size: var(--fs-xs); font-family: inherit; cursor: pointer; transition: background var(--t-fast), border-color var(--t-fast), color var(--t-fast); }\n.sd-chip i { width: 8px; height: 8px; border-radius: 50%; background: var(--c); flex: none; }\n.sd-chip em, .sd-flag em { font-style: normal; font-weight: 700; color: var(--ink); background: var(--surface-2); padding: 0 7px; border-radius: var(--r-pill); min-width: 22px; text-align: center; line-height: 20px; }\n.sd-chip:hover, .sd-flag:hover { border-color: color-mix(in srgb, var(--accent) 45%, var(--line)); color: var(--ink); }\n.sd-chip[data-zero]:not(.is-on) { opacity: .45; }\n.sd-chip.is-on { background: color-mix(in srgb, var(--c) 16%, var(--surface)); border-color: var(--c); color: var(--ink); font-weight: 700; }\n.sd-flag.is-on { background: var(--accent); border-color: var(--accent); color: #fff; }\n.sd-flag.is-on em { background: #fff; color: var(--accent-ink); }\n.app[data-theme=\"dark\"] .sd-flag.is-on { color: #1f0412; }\n.sd-sels .select select { max-width: 170px; }\n.sd-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 16px 20px; }\n.sd-group { display: grid; }\n.sd-gh { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; gap: 8px; width: 100%; padding: 10px 4px; margin-top: 8px; border: 0; border-bottom: 1px solid var(--line-2); background: var(--surface); color: var(--ink); font-family: inherit; font-size: var(--fs-sm); cursor: pointer; }\n.sd-gh .ic { color: var(--ink-3); transition: transform var(--t-fast); }\n.sd-gh.is-closed .ic { transform: rotate(90deg); }\n.sd-gh small { color: var(--ink-3); font-size: var(--fs-xs); }\n.sd-gh em { font-style: normal; font-weight: 700; font-size: var(--fs-xs); background: var(--surface-2); padding: 1px 9px; border-radius: var(--r-pill); }\n.sd-list { display: grid; }\n.sd-row { display: flex; align-items: center; gap: 12px; padding: 10px 6px; border-bottom: 1px solid var(--line); border-radius: var(--r-control); transition: background var(--t-fast); }\n.sd-row:hover { background: var(--surface-2); }\n.sd-row.is-late { box-shadow: inset 3px 0 0 var(--danger); }\n.sd-row > a { flex: 1; min-width: 0; display: grid; gap: 6px; }\n.sd-t { font-weight: 600; line-height: 1.6; text-align: start; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; unicode-bidi: plaintext; }\n.sd-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: var(--fs-xs); color: var(--ink-3); }\n.sd-meta .tag { height: 20px; font-size: 11px; margin: 0; }\n.sd-meta .who { gap: 4px; color: var(--ink-2); }\n.sd-nobody { color: var(--danger); font-weight: 600; }\n.sd-back { display: inline-flex; align-items: center; gap: 3px; color: var(--ink-3); }\n.sd-age { display: grid; justify-items: end; gap: 1px; flex: none; min-width: 84px; text-align: end; }\n.sd-age b { font-size: var(--fs-sm); font-weight: 700; }\n.sd-age small { font-size: 11px; color: var(--ink-3); }\n.sd-age.is-late b { color: var(--danger); }\n.sd-age.is-late small { color: var(--danger); }\n.sd-summary { display: flex; align-items: center; gap: 8px; padding: 10px 2px; font-size: var(--fs-sm); color: var(--ink-2); }\n.sd-summary b { font-size: 22px; color: var(--ink); }\n.th-sort { display: inline-flex; align-items: center; gap: 4px; border: 0; background: none; padding: 0; font: inherit; color: inherit; cursor: pointer; }\n.th-sort:hover, .th-sort.is-on { color: var(--accent-ink); }\n.ratio { font-weight: 700; color: var(--ink-2); }\n.ratio.is-hot { color: var(--danger); }\n.sd-table .who { display: inline-flex; margin-inline-end: 6px; }\n.sd-table td .sd-nobody { font-size: var(--fs-xs); }\n@media (max-width: 640px) { .sd-age { min-width: 70px; } .sd-top .select select { max-width: 130px; } }\n.sd-sels { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 6px; }\n.sd-sels .select { width: 100%; height: 34px; }\n.sd-sels .select select { flex: 1; max-width: none; min-width: 0; text-overflow: ellipsis; }\n.sd-sels .chip { justify-self: start; }\n.sd-top .select { height: 34px; }\n.sd-top .select select { max-width: 150px; text-overflow: ellipsis; }\n.sd-tools { gap: 8px; padding: 10px 16px; }\n.sd-chip, .sd-flag { height: 28px; }\n.sd-sels[hidden] { display: none; }\n.sd-adv { margin-inline-start: auto; } .sd-flags .chip-sm { height: 28px; }\n.sd-adv .ic { color: var(--ink-3); }\n.sd-adv.is-open { border-color: var(--accent); color: var(--accent-ink); }\n\n/* ---------- ظرفیت (capacity) ---------- */\n.cp-months { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; font-size: var(--fs-sm); }\n.cp-months b { font-weight: 600; color: var(--ink-2); margin-inline-end: 2px; }\n.cp-months small { color: var(--ink-3); font-size: var(--fs-xs); margin-inline-start: 4px; }\n.cp-months .chip.is-on { background: var(--accent-soft); border-color: var(--accent); color: var(--accent-ink); font-weight: 700; }\n.cp-verdict { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: var(--r-card); background: var(--accent-soft); color: var(--ink); line-height: 1.8; }\n.cp-verdict .ic { color: var(--accent); flex: none; }\n.cp-tile { cursor: default; }\n.cp-tile[role=\"button\"] { cursor: pointer; }\n.cp-tile:not([role=\"button\"]):hover { transform: none; box-shadow: var(--shadow-card); }\n.cp-tile b { font-size: 24px; }\n.cp-tile b i { font-style: normal; font-size: var(--fs-xs); font-weight: 500; color: var(--ink-3); }\n.cp-tile em { line-height: 1.6; }\n.cp-state { display: inline-flex; align-items: center; gap: 4px; height: 22px; padding: 0 8px; border-radius: var(--r-pill); font-size: 11px; font-weight: 700; color: var(--c); background: color-mix(in srgb, var(--c) 12%, transparent); white-space: nowrap; vertical-align: middle; }\n.cp-low { display: inline-flex; align-items: center; height: 20px; padding: 0 7px; margin-inline-start: 4px; border-radius: var(--r-pill); font-size: 11px; color: var(--s-pending); border: 1px dashed currentColor; white-space: nowrap; vertical-align: middle; }\n.cp-plot { display: grid; gap: 4px; margin-top: 6px; }\n.cp-row { display: grid; grid-template-columns: minmax(130px, 190px) minmax(0, 1fr) 118px 190px; align-items: center; gap: 12px; padding: 8px 4px; border-bottom: 1px solid var(--line); }\n.cp-row:last-child { border-bottom: 0; }\n.cp-label { display: grid; min-width: 0; }\n.cp-label b { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.cp-label small, .cp-num small { font-size: 11px; color: var(--ink-3); }\n.cp-track { position: relative; display: flex; height: 22px; border-radius: 6px; background: var(--surface-2); overflow: visible; }\n.cp-seg { height: 100%; border: 0; padding: 0; background: var(--c); cursor: pointer; transition: filter var(--t-fast); min-width: 2px; }\n.cp-seg:first-child { border-start-start-radius: 6px; border-end-start-radius: 6px; }\n.cp-seg:last-of-type { border-start-end-radius: 6px; border-end-end-radius: 6px; }\n.cp-seg:hover { filter: brightness(1.12); }\n.cp-est { position: absolute; inset-block: 0; pointer-events: none; background: repeating-linear-gradient(135deg, rgba(255,255,255,.55) 0 4px, transparent 4px 8px); border-radius: 6px; }\n.cp-over { position: absolute; inset-block: -3px; pointer-events: none; border: 2px solid var(--danger); border-radius: 6px; background: color-mix(in srgb, var(--danger) 10%, transparent); }\n.cp-cap { position: absolute; inset-block: -6px; width: 0; border-inline-start: 2px dashed var(--ink); pointer-events: auto; }\n.cp-num { display: grid; text-align: end; }\n.cp-num b { font-weight: 800; font-variant-numeric: tabular-nums; }\n.cp-num b i { font-style: normal; font-weight: 500; font-size: var(--fs-xs); color: var(--ink-3); }\n.cp-st { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }\n.cp-room { font-size: 11px; color: var(--ink-3); width: 100%; }\n.cp-room.is-over { color: var(--danger); font-weight: 600; }\n.cp-legend .k-est { background: repeating-linear-gradient(135deg, var(--ink-3) 0 3px, transparent 3px 6px); }\n.cp-legend .k-cap { width: 0; height: 14px; border-radius: 0; border-inline-start: 2px dashed var(--ink); }\n.cp-table td, .cp-table th { text-align: center; }\n.cp-table th[scope=\"row\"], .cp-table thead th:first-child, .cp-table tfoot th { text-align: start; }\n.cp-table th[scope=\"row\"] { font-size: var(--fs-sm); color: var(--ink); font-weight: 600; padding: 8px; border-bottom: 1px solid var(--line); }\n.cp-table th small, .cp-table th em { display: block; font-style: normal; font-weight: 400; font-size: 11px; color: var(--ink-3); }\n.cp-table thead th.is-now { color: var(--accent-ink); }\n.cp-table thead th.is-now em { color: var(--accent); font-weight: 700; }\n.cp-table tbody tr { cursor: default; }\n.cp-table tfoot td, .cp-table tfoot th { padding: 10px 8px; border-top: 1px solid var(--line-2); }\n.cp-table td.num small { display: block; font-size: 11px; color: var(--ink-3); }\n.cp-table td { padding: 4px; }\n.cp-cell { display: grid; place-items: center; width: 100%; min-width: 62px; min-height: 44px; border: 0; border-radius: 8px; font-family: inherit; color: var(--ink); cursor: pointer; --k: var(--accent); background: color-mix(in srgb, var(--k) calc(var(--a) * 100%), var(--surface-2)); transition: transform var(--t-fast); }\n.cp-cell.free { --k: var(--s-done); } .cp-cell.ok { --k: var(--accent); } .cp-cell.over { --k: var(--danger); }\n.cp-cell:not(:disabled):hover { transform: scale(1.04); }\n.cp-cell:disabled { cursor: default; background: transparent; color: var(--ink-3); }\n.cp-cell b { font-weight: 700; font-variant-numeric: tabular-nums; }\n.cp-cell small { font-size: 10px; opacity: .8; }\n.cp-trend td { text-align: start; }\n.cp-trend td b { font-weight: 700; margin-inline-end: 4px; }\n.cp-trend td small { display: block; font-size: 11px; color: var(--ink-3); }\n.cp-mini { display: block; width: 72px; height: 5px; border-radius: 3px; background: var(--surface-2); margin-bottom: 3px; overflow: hidden; }\n.cp-mini i { display: block; height: 100%; background: var(--accent); border-radius: 3px; }\n.cp-dir { font-size: var(--fs-xs); color: var(--ink-3); }\n.cp-dir .ic { vertical-align: middle; margin-inline-end: 3px; }\n.cp-dir.up { color: var(--s-done); } .cp-dir.down { color: var(--danger); }\n.cp-card[data-card=\"cap-scen\"] { grid-column: 1 / -1; }\n.cp-scen { display: grid; gap: 12px; }\n.cp-scen-in { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }\n.cp-scen p { line-height: 2; }\n.cp-n { width: 56px; border: 0; outline: 0; background: none; color: var(--ink); font: inherit; font-size: var(--fs-sm); }\n.cp-meter { position: relative; display: flex; height: 14px; border-radius: 7px; background: var(--surface-2); }\n.cp-meter i { display: block; height: 100%; background: var(--accent); }\n.cp-meter i:first-child { border-start-start-radius: 7px; border-end-start-radius: 7px; }\n.cp-meter i.add { background: repeating-linear-gradient(135deg, var(--c) 0 5px, color-mix(in srgb, var(--c) 55%, transparent) 5px 10px); border-start-end-radius: 7px; border-end-end-radius: 7px; }\n.cp-meter b { position: absolute; inset-block: -5px; width: 0; border-inline-start: 2px dashed var(--ink); }\n.cp-how { display: grid; gap: 8px; padding-inline-start: 18px; line-height: 1.9; font-size: var(--fs-sm); color: var(--ink-2); }\n.cp-how b { color: var(--ink); }\n.cp-list .cp-phase { display: flex; align-items: center; gap: 8px; padding: 12px 4px 6px; font-size: var(--fs-sm); font-weight: 700; color: var(--ink); border-bottom: 1px solid var(--line-2); }\n.cp-list .cp-phase i { width: 10px; height: 10px; border-radius: 3px; background: var(--c); }\n.cp-list .sd-row { cursor: pointer; }\n.cp-list .sd-row > .sf-link { flex: 1; min-width: 0; display: grid; gap: 6px; }\n@media (max-width: 1100px) { .cp-tiles { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n@media (max-width: 860px) {\n  .cp-row { grid-template-columns: minmax(0, 1fr) auto; }\n  .cp-track { grid-column: 1 / -1; order: 3; }\n  .cp-st { grid-column: 1 / -1; order: 4; }\n}\n@media (max-width: 560px) { .cp-tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n.cp-sum { padding: 12px 16px; border-bottom: 1px solid var(--line); flex: none; }\n\n/* ---------- board: Gantt ---------- */\n.gt-tools { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 0 20px 8px; font-size: var(--fs-sm); }\n.gt-tools > .muted { font-size: var(--fs-xs); }\n.gt-key { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); }\n.gt-key i { width: 16px; height: 8px; border-radius: 4px; margin-inline-start: 6px; }\n.gt-key .k-bar { background: var(--s-progress); }\n.gt-key .k-est { height: 12px; border: 1.5px dashed var(--s-pending); background: color-mix(in srgb, var(--s-pending) 10%, transparent); }\n.gt-key .k-late { background: var(--surface); border: 2px solid var(--danger); }\n.gt-late-n { color: var(--danger); font-weight: 700; }\n.gt-help { display: flex; align-items: center; gap: 6px; margin: 0 20px 8px; font-size: var(--fs-xs); color: var(--ink-3); }\n.gantt { flex: 1; min-height: 0; overflow: auto; margin: 0 20px 20px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel); position: relative; overscroll-behavior: contain; }\n.gt-inner { position: relative; min-width: 100%; }\n.gt-head { position: sticky; top: 0; z-index: 4; display: flex; background: var(--surface); border-bottom: 1px solid var(--line-2); }\n.gt-corner { position: sticky; inset-inline-start: 0; z-index: 2; flex: none; width: var(--gl); display: flex; align-items: flex-end; padding: 8px 14px; font-size: var(--fs-xs); color: var(--ink-3); background: var(--surface); border-inline-end: 1px solid var(--line-2); }\n.gt-axis { position: relative; flex: none; }\n.gt-ms { position: relative; height: 30px; }\n.gt-m { position: absolute; top: 0; height: 100%; display: flex; align-items: center; padding-inline-start: 8px; font-size: var(--fs-sm); font-weight: 700; white-space: nowrap; overflow: clip; border-inline-start: 1px solid var(--line-2); }\n.gt-m small { font-weight: 400; color: var(--ink-3); margin-inline-start: 4px; font-size: var(--fs-xs); }\n.gt-m.is-now { color: var(--accent-ink); background: var(--accent-soft); }\n.gt-ticks { position: relative; height: 20px; border-top: 1px solid var(--line); }\n.gt-tick { position: absolute; top: 0; height: 100%; padding-inline-start: 3px; font-size: 10px; color: var(--ink-3); border-inline-start: 1px solid var(--line); white-space: nowrap; line-height: 20px; }\n.gt-body { position: relative; }\n.gt-vl { position: absolute; top: 0; bottom: 0; width: 0; border-inline-start: 1px solid var(--line); pointer-events: none; z-index: 0; }\n.gt-now { position: absolute; top: 0; bottom: 0; width: 0; border-inline-start: 2px solid var(--danger); z-index: 2; pointer-events: none; }\n.gt-now b { position: sticky; top: 4px; display: inline-block; transform: translateX(50%); margin-top: 4px; padding: 0 6px; border-radius: var(--r-pill); background: var(--danger); color: #fff; font-size: 10px; line-height: 18px; }\n.gt-row { display: flex; min-height: 44px; border-bottom: 1px solid var(--line); position: relative; }\n.gt-row:not(.gt-group):hover { background: color-mix(in srgb, var(--surface-2) 70%, transparent); }\n.gt-row:not(.gt-group):hover .gt-label { background: var(--surface-2); }\n.gt-row[data-key] { cursor: pointer; }\n.gt-row:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }\n.gt-label { position: sticky; inset-inline-start: 0; z-index: 3; flex: none; width: var(--gl); display: grid; align-content: center; gap: 3px; padding: 6px 14px; background: var(--surface); border-inline-end: 1px solid var(--line-2); min-width: 0; }\n.gt-t { font-size: var(--fs-sm); font-weight: 600; line-height: 1.5; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; unicode-bidi: plaintext; text-align: start; }\n.gt-sub { display: flex; align-items: center; gap: 6px; font-size: 11px; min-width: 0; overflow: hidden; }\n.gt-sub .pill, .gt-sub .key { height: 20px; font-size: 11px; }\n.gt-sub small { font-size: 11px; white-space: nowrap; }\n.gt-lane { position: relative; flex: none; }\n.gt-group { min-height: 38px; background: color-mix(in srgb, var(--bg) 60%, var(--surface)); }\n.gt-gh { display: flex; align-items: center; gap: 8px; border: 0; border-inline-end: 1px solid var(--line-2); font-family: inherit; font-size: var(--fs-sm); color: var(--ink); cursor: pointer; background: color-mix(in srgb, var(--bg) 60%, var(--surface)); text-align: start; grid-auto-flow: column; }\n.gt-gh b { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.gt-gh em { font-style: normal; font-weight: 700; font-size: var(--fs-xs); background: var(--surface-2); padding: 1px 9px; border-radius: var(--r-pill); }\n.gt-gh small { color: var(--ink-3); font-size: 11px; }\n.gt-gh .gt-late-n { font-size: 11px; }\n.gt-gh .ic { color: var(--ink-3); transition: transform var(--t-fast); flex: none; }\n.gt-gh.is-closed .ic { transform: rotate(90deg); }\n.gt-span { position: absolute; top: 50%; height: 6px; margin-top: -3px; border-radius: 3px; background: color-mix(in srgb, var(--ink-3) 30%, transparent); }\n.gt-est { position: absolute; top: 6px; bottom: 6px; border: 1.5px dashed var(--s-pending); border-radius: 6px; background: color-mix(in srgb, var(--s-pending) 9%, transparent); z-index: 1; }\n.gt-bar { position: absolute; top: 50%; height: 22px; margin-top: -11px; border-radius: 6px; background: var(--c); z-index: 2; cursor: grab; display: flex; align-items: center; justify-content: center; touch-action: none; box-shadow: 0 1px 2px rgba(0,0,0,.12); transition: box-shadow var(--t-fast); }\n.gt-bar:hover { box-shadow: 0 0 0 2px color-mix(in srgb, var(--c) 35%, transparent), 0 2px 6px rgba(0,0,0,.18); }\n.gt-bar.st-todo { background: color-mix(in srgb, var(--c) 75%, var(--surface)); }\n.gt-bar.st-canceled { background: repeating-linear-gradient(135deg, color-mix(in srgb, var(--c) 45%, var(--surface)) 0 5px, color-mix(in srgb, var(--c) 25%, var(--surface)) 5px 10px); }\n.gt-bar.is-late { box-shadow: 0 0 0 2px var(--danger); }\n.gt-bar.cut-s { border-start-start-radius: 0; border-end-start-radius: 0; }\n.gt-bar.cut-e { border-start-end-radius: 0; border-end-end-radius: 0; }\n.gt-bt { font-size: 10px; color: #fff; white-space: nowrap; overflow: hidden; padding: 0 10px; pointer-events: none; text-shadow: 0 1px 1px rgba(0,0,0,.25); }\n.gt-h { position: absolute; top: 0; bottom: 0; width: 8px; cursor: ew-resize; border-radius: 6px; }\n.gt-h[data-h=\"s\"] { inset-inline-start: 0; } .gt-h[data-h=\"e\"] { inset-inline-end: 0; }\n.gt-bar:hover .gt-h { background: rgba(255,255,255,.35); }\n.gt-pt { position: absolute; top: 50%; width: 12px; height: 12px; margin-top: -6px; transform: rotate(45deg); border-radius: 2px; background: var(--c); z-index: 2; cursor: grab; touch-action: none; }\n.gt-pt.is-late { box-shadow: 0 0 0 2px var(--danger); }\n.gt-bar.is-dragging, .gt-pt.is-dragging { cursor: grabbing; opacity: .9; box-shadow: 0 0 0 2px var(--accent), 0 6px 16px rgba(0,0,0,.2); }\n.gt-bar.is-dragging::after { content: attr(data-live); position: absolute; bottom: calc(100% + 6px); inset-inline-start: 0; padding: 2px 8px; border-radius: 6px; background: var(--ink); color: var(--surface); font-size: 11px; white-space: nowrap; }\n.gt-bar.is-ro, .gt-pt.is-ro { cursor: not-allowed; }\n.gt-bar.is-pending, .gt-pt.is-pending { outline: 2px dashed var(--accent); outline-offset: 3px; }\n.gt-empty { padding: 40px; position: sticky; inset-inline-start: 0; width: min(100%, 700px); }\n.gt-row .more { margin: 4px 0; }\n.gt-confirm { position: absolute; inset-inline: 40px; bottom: 28px; z-index: 20; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: var(--r-card); background: var(--surface); border: 1px solid var(--accent); box-shadow: var(--shadow-lift); animation: rise .25s var(--ease) both; }\n.gt-confirm > .ic { color: var(--accent); flex: none; }\n.gt-cf-t { display: grid; gap: 2px; min-width: 0; font-size: var(--fs-sm); }\n.gt-cf-t > b { display: flex; align-items: center; gap: 6px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n.gt-cf-t > span { color: var(--ink-2); font-size: var(--fs-xs); }\n.view[data-view=\"board\"] { position: relative; }\n.tt-row.is-late { color: var(--danger); font-weight: 700; }\n.gt-mt { position: sticky; inset-inline-start: calc(var(--gl) + 8px); white-space: nowrap; }\n" };
/* app/util.js */
/* Roadmap Lens — helpers shared by every module (isolated content-script world). */
(() => {
  const SFR = (globalThis.SFR = globalThis.SFR || {});

  /* ---------- numbers & text ---------- */
  const nf = new Intl.NumberFormat('fa-IR');
  const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
  SFR.fa = (n) => (n == null || n === '' ? '' : typeof n === 'number' ? nf.format(n) : String(n).replace(/\d/g, (d) => FA_DIGITS[d]));
  SFR.faPct = (x) => `${nf.format(Math.round(x))}٪`;
  SFR.esc = (s) =>
    String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  SFR.attr = SFR.esc;
  SFR.firstName = (s) => String(s || '').trim().split(/\s+/)[0] || '';
  SFR.initials = (s) =>
    String(s || '?')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  SFR.norm = (s) =>
    String(s || '')
      .toLowerCase()
      .replace(/[يى]/g, 'ی')
      .replace(/ك/g, 'ک')
      .replace(/[‌ً-ٟ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  /* ---------- dates (Jalali labels, Persian relative time) ---------- */
  const jDay = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long' });
  const jFull = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' });
  const jTime = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit' });
  const rtf = new Intl.RelativeTimeFormat('fa', { numeric: 'auto' });
  SFR.jDate = (d) => (d ? jDay.format(new Date(d)) : '');
  SFR.jDateFull = (d) => (d ? `${jFull.format(new Date(d))}، ساعت ${jTime.format(new Date(d))}` : '');
  SFR.ago = (d) => {
    if (!d) return '';
    const s = (new Date(d).getTime() - Date.now()) / 1000;
    const a = Math.abs(s);
    if (a < 60) return 'همین حالا';
    if (a < 3600) return rtf.format(Math.round(s / 60), 'minute');
    if (a < 86400) return rtf.format(Math.round(s / 3600), 'hour');
    if (a < 86400 * 7) return rtf.format(Math.round(s / 86400), 'day');
    return SFR.jDate(d);
  };

  /* ---------- domain vocabulary ---------- */
  // Issue types on this board are used as the initiative state.
  SFR.STATUS = [
    { key: 'done', match: /^done$/i, label: 'انجام‌شده', short: 'انجام‌شده' },
    { key: 'devdone', match: /dev\s*done/i, label: 'توسعه تمام‌شده', short: 'توسعه تمام' },
    { key: 'progress', match: /in\s*progress/i, label: 'در حال انجام', short: 'در جریان' },
    { key: 'pending', match: /pend/i, label: 'معلق', short: 'معلق' },
    { key: 'todo', match: /to-?\s*do/i, label: 'برای انجام', short: 'برای انجام' },
    { key: 'canceled', match: /cancel|removed/i, label: 'لغوشده', short: 'لغوشده' },
  ];
  SFR.statusOf = (typeName) => {
    const s = SFR.STATUS.find((x) => x.match.test(typeName || ''));
    return s ? s.key : 'todo';
  };
  SFR.statusMeta = (key) => SFR.STATUS.find((s) => s.key === key) || SFR.STATUS[4];

  const MONTHS = {
    backlog: ['بک‌لاگ', 'انتخاب‌نشده'],
    jan: ['ژانویه', 'دی ← بهمن'],
    feb: ['فوریه', 'بهمن ← اسفند'],
    mar: ['مارس', 'اسفند ← فروردین'],
    apr: ['آوریل', 'فروردین ← اردیبهشت'],
    may: ['مه', 'اردیبهشت ← خرداد'],
    jun: ['ژوئن', 'خرداد ← تیر'],
    jul: ['ژوئیه', 'تیر ← مرداد'],
    aug: ['اوت', 'مرداد ← شهریور'],
    sep: ['سپتامبر', 'شهریور ← مهر'],
    oct: ['اکتبر', 'مهر ← آبان'],
    nov: ['نوامبر', 'آبان ← آذر'],
    dec: ['دسامبر', 'آذر ← دی'],
  };
  const MONTH_INDEX = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  SFR.monthKey = (colName) => {
    const k = String(colName || '').trim().toLowerCase().slice(0, 3);
    if (k === 'bac' || /not\s*picked/i.test(colName)) return 'backlog';
    return MONTHS[k] ? k : null;
  };
  SFR.monthLabel = (colName) => {
    const k = SFR.monthKey(colName);
    return k ? MONTHS[k] : [colName, ''];
  };
  SFR.monthIdx = (colName) => MONTH_INDEX[SFR.monthKey(colName)];
  SFR.isCurrentMonth = (colName) => {
    const k = SFR.monthKey(colName);
    return k && k !== 'backlog' && MONTH_INDEX[k] === new Date().getMonth();
  };

  SFR.STRATEGIC = { 'Make or Fail': 'حیاتی (Make or Fail)', 'Success Catalyst': 'شتاب‌دهنده', 'Risk Buffer': 'کاهش ریسک' };

  /* ---------- t-shirt sizes & seasons ----------
   * Size = identity colour (6 hues validated for colour-blind separation) + an ascending "bars" glyph that
   * carries the order without colour, so XS…XXL can be told apart at a glance. */
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  SFR.SIZES = SIZES;
  SFR.SIZE_META = {
    // xp grows by one flat step per size (each size is double the work, so the points grow by log, not linearly):
    // a large initiative is worth more, but never so much that a PM without one can't keep up.
    // w = effort in weeks: XS is half a week and every step up doubles the one before. `fa` is that duration in words.
    XS: { n: 1, w: 0.5, xp: 20, fa: 'نیم هفته', hue: 'نعنایی' },
    S: { n: 2, w: 1, xp: 30, fa: 'یک هفته', hue: 'آبی' },
    M: { n: 3, w: 2, xp: 40, fa: 'دو هفته', hue: 'زرد' },
    L: { n: 4, w: 4, xp: 50, fa: 'چهار هفته', hue: 'سرخابی' },
    XL: { n: 5, w: 8, xp: 60, fa: 'هشت هفته', hue: 'بنفش' },
    XXL: { n: 6, w: 16, xp: 70, fa: 'شانزده هفته', hue: 'نارنجی' },
  };
  SFR.weeksOf = (i) => SFR.SIZE_META[SFR.sizeKey(i.size)]?.w ?? 0;
  SFR.sizeKey = (s) => (SIZES.includes(s) ? s : null);
  /** Six ascending bars, the first n filled. */
  SFR.sizeBars = (n, h = 12) =>
    `<svg class="bars" viewBox="0 0 18 12" width="${(h * 18) / 12}" height="${h}" aria-hidden="true">${Array.from(
      { length: 6 },
      (_, i) => `<rect x="${i * 3}" y="${12 - (3 + i * 1.8)}" width="2" height="${3 + i * 1.8}" rx=".7" opacity="${i < n ? 1 : 0.28}"/>`
    ).join('')}</svg>`;
  SFR.sizeChip = (size, { icon = true } = {}) => {
    if (!size || size === 'N/A') return '';
    const k = SFR.sizeKey(size);
    const m = k && SFR.SIZE_META[k];
    return `<span class="size size-${k ? k.toLowerCase() : 'na'}" title="سایز تسک: ${SFR.esc(size)}${m ? ` — ${m.fa}` : ''}" dir="ltr">${icon && m ? SFR.sizeBars(m.n) : ''}${SFR.esc(size)}</span>`;
  };
  /** Value of an initiative: one flat step per size (compressed on purpose), "Make or Fail" a quarter more. Unsized = 25. */
  SFR.xpOf = (i) => {
    const base = SFR.SIZE_META[SFR.sizeKey(i.size)]?.xp ?? 25;
    return Math.round(base * (i.strategic === 'Make or Fail' ? 1.25 : 1));
  };
  /** Points an initiative has delivered: done counts fully, dev-done 60 %. */
  SFR.earnedOf = (i) => (i.status === 'done' ? SFR.xpOf(i) : i.status === 'devdone' ? Math.round(SFR.xpOf(i) * 0.6) : 0);
  /** Personal credit = delivered points + a share for work in flight, so a PM who carries a lot isn't punished for
   * what isn't finished yet. In progress earns 25 % (10 % if nobody touched it for 14+ days), pending 10 %. */
  SFR.creditOf = (i) => {
    const e = SFR.earnedOf(i);
    if (e) return e;
    const x = SFR.xpOf(i);
    if (i.status === 'progress') return Math.round(x * (SFR.daysSince(i.updated) > 14 ? 0.1 : 0.25));
    if (i.status === 'pending') return Math.round(x * 0.1);
    return 0;
  };
  /** Weeks of work an initiative represents (unsized counts as one week so it never vanishes from load figures). */
  SFR.loadWeeks = (i) => SFR.weeksOf(i) || 1;
  SFR.isDelivered = (i) => i.status === 'done' || i.status === 'devdone';
  SFR.isOpen = (i) => i.status !== 'done' && i.status !== 'devdone' && i.status !== 'canceled';
  SFR.daysSince = (d) => (d ? Math.floor((Date.now() - new Date(d).getTime()) / 864e5) : 9999);
  // Gregorian delivery-month column → the Jalali season most of it falls in.
  const SEASON_OF = { apr: 'spring', may: 'spring', jun: 'spring', jul: 'summer', aug: 'summer', sep: 'summer', oct: 'autumn', nov: 'autumn', dec: 'autumn', jan: 'winter', feb: 'winter', mar: 'winter' };
  const SEASONS = { spring: ['بهار', 'sprout'], summer: ['تابستان', 'sun'], autumn: ['پاییز', 'leaf'], winter: ['زمستان', 'snowflake'] };
  SFR.seasonOf = (colName) => {
    const k = SEASON_OF[SFR.monthKey(colName)];
    return k ? { key: k, label: SEASONS[k][0], icon: SEASONS[k][1] } : null;
  };
  SFR.greeting = () => {
    const h = new Date().getHours();
    return h < 5 ? 'شب بخیر' : h < 12 ? 'صبح بخیر' : h < 16 ? 'ظهر بخیر' : h < 20 ? 'عصر بخیر' : 'شب بخیر';
  };
  SFR.today = () => new Intl.DateTimeFormat('fa-IR-u-ca-persian', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  /* ---------- quick-filter grouping ---------- */
  const QF_FA = {
    'Assigned to me': 'سپرده به من',
    'Recently added': 'تازه‌ها (۷ روز اخیر)',
    Delayed: 'تأخیری',
    'To-Do': 'برای انجام',
    'In Progress': 'در حال انجام',
    '[Dev] Done': 'توسعه/انجام‌شده',
    Pending: 'معلق',
    Canceled: 'لغوشده',
    'Non Canceled': 'بدون لغوشده‌ها',
    'Not-tech-only': 'غیر صرفاً فنی',
    'Non Data': 'بدون دیتا',
    'Combat Related': 'مرتبط با کامبت',
    'Division Plan': 'دیویژن پلن',
    'Project Related': 'پروژه‌ای',
    'Internal & Special Tasks': 'داخلی و ویژه',
  };
  SFR.QF_GROUPS = [
    { id: 'fn', label: 'فانکشن', test: (n) => /^\[F\]/.test(n) },
    { id: 'sp', label: 'پروژه‌ی استراتژیک', test: (n) => /^\[S[PF]\]/.test(n) },
    { id: 'battle', label: 'بتل', test: (n) => /^\[B\]/.test(n) },
    { id: 'cycle', label: 'سیکل و بازه', test: (n) => /^\d{4}C\d$/i.test(n) || /^Q\d$/i.test(n) || /-/.test(n) && /^[A-Z][a-z]{2}-[A-Z][a-z]{2}$/.test(n) },
    { id: 'state', label: 'وضعیت', test: (n) => /^(To-Do|In Progress|\[Dev\] Done|Pending|Canceled|Non Canceled)$/i.test(n) },
    { id: 'kind', label: 'نوع اینیشیتیو', test: (n) => /Combat|Division|Project Related|Internal|tech|Data/i.test(n) },
    { id: 'quick', label: 'میان‌بُر', test: (n) => /^(Assigned to me|Recently added|Delayed)$/i.test(n) },
  ];
  SFR.groupOfQf = (name) => (SFR.QF_GROUPS.find((g) => g.test(name)) || { id: 'other' }).id;
  SFR.qfLabel = (name) => QF_FA[name] || name.replace(/^\[(F|SP|SF|B)\]\s*/, '');

  /** "Title [Order & Payment] [Finance]" → { title: "Title", tags: ["Order & Payment", "Finance"] } */
  SFR.splitTitle = (summary) => {
    const tags = [];
    const title = String(summary || '')
      .replace(/\[([^\]]{1,40})\]/g, (_, t) => (tags.push(t.trim()), ' '))
      .replace(/\s{2,}/g, ' ')
      .replace(/^[\s\-–:|]+|[\s\-–:|]+$/g, '')
      .trim();
    return title.length > 3 ? { title, tags: [...new Set(tags)] } : { title: String(summary || ''), tags: [] };
  };

  /* ---------- Jalali calendar (via Intl, so no conversion tables to maintain) ---------- */
  // Dates travel as ISO strings "YYYY-MM-DD" (what Jira stores); Date objects here are UTC noon so zones never shift the day.
  const jParts = new Intl.DateTimeFormat('en-US-u-ca-persian-nu-latn', { timeZone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' });
  const jShow = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' });
  const jShowShort = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { timeZone: 'UTC', day: 'numeric', month: 'long' });
  const jWeekday = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { timeZone: 'UTC', weekday: 'long' });
  const DAY_MS = 864e5;
  const cal = (SFR.cal = {
    MONTHS: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    // Saturday first, as in the Iranian week.
    WEEKDAYS: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
    parse: (iso) => {
      const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
      return m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], 12)) : null;
    },
    iso: (d) => d.toISOString().slice(0, 10),
    today: () => {
      const n = new Date();
      return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), 12));
    },
    add: (d, n) => new Date(d.getTime() + n * DAY_MS),
    diff: (a, b) => Math.round((a - b) / DAY_MS), // days a is after b
    toJ: (d) => {
      const o = {};
      jParts.formatToParts(d).forEach((p) => (o[p.type] = Number(p.value)));
      return { jy: o.year, jm: o.month, jd: o.day };
    },
    fromJ: (jy, jm, jd) => {
      let g = new Date(Date.UTC(jy + 621, 2, 21 + Math.round((jm - 1) * 30.44) + jd - 1, 12));
      for (let k = 0; k < 14; k++) {
        const j = cal.toJ(g);
        const delta = Math.round((jy - j.jy) * 365.25 + (jm - j.jm) * 30.44 + (jd - j.jd));
        if (j.jy === jy && j.jm === jm && j.jd === jd) return g;
        const cmp = Math.sign((jy - j.jy) * 10000 + (jm - j.jm) * 100 + (jd - j.jd));
        g = cal.add(g, Math.abs(delta) < 3 ? cmp : delta);
      }
      return g;
    },
    monthLen: (jy, jm) => cal.diff(jm === 12 ? cal.fromJ(jy + 1, 1, 1) : cal.fromJ(jy, jm + 1, 1), cal.fromJ(jy, jm, 1)),
    full: (iso) => (cal.parse(iso) ? jShow.format(cal.parse(iso)) : ''),
    short: (iso) => (cal.parse(iso) ? jShowShort.format(cal.parse(iso)) : ''),
    weekday: (iso) => (cal.parse(iso) ? jWeekday.format(cal.parse(iso)) : ''),
  });

  /* ---------- tiny DOM helpers ---------- */
  SFR.$ = (root, sel) => root.querySelector(sel);
  SFR.$$ = (root, sel) => Array.from(root.querySelectorAll(sel));
  SFR.debounce = (fn, ms = 200) => {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  };

  /* ---------- sanitize Jira-rendered HTML before it enters our shadow root ---------- */
  const OK_TAGS = new Set('P BR A STRONG B EM I U S DEL INS UL OL LI CODE PRE BLOCKQUOTE SPAN DIV TABLE THEAD TBODY TR TH TD IMG H1 H2 H3 H4 H5 H6 HR SUP SUB TT CITE'.split(' '));
  SFR.sanitize = (html) => {
    const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
    const walk = (node) => {
      [...node.children].forEach((el) => {
        if (!OK_TAGS.has(el.tagName)) {
          if (/^(SCRIPT|STYLE|IFRAME|OBJECT|EMBED|FORM|INPUT|BUTTON|TEXTAREA|SELECT|LINK|META)$/.test(el.tagName)) {
            el.remove();
            return;
          }
          const frag = doc.createDocumentFragment();
          while (el.firstChild) frag.appendChild(el.firstChild);
          el.replaceWith(frag);
          walk(node);
          return;
        }
        [...el.attributes].forEach((a) => {
          const n = a.name.toLowerCase();
          const keep = (n === 'href' && el.tagName === 'A') || ((n === 'src' || n === 'alt') && el.tagName === 'IMG') || n === 'title' || n === 'colspan' || n === 'rowspan';
          if (!keep) el.removeAttribute(a.name);
          else if ((n === 'href' || n === 'src') && /^\s*(javascript|data|vbscript):/i.test(a.value)) el.removeAttribute(a.name);
        });
        if (el.tagName === 'A') {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
        if (el.tagName === 'IMG') el.setAttribute('loading', 'lazy');
        walk(el);
      });
    };
    walk(doc.body.firstElementChild);
    return doc.body.firstElementChild.innerHTML;
  };

  /* ---------- storage ----------
   * The app runs in the Jira page itself (so it can be updated without reinstalling the extension),
   * where chrome.* APIs are not available. Preferences live in Jira-origin localStorage. */
  const PREFIX = 'roadmap-lens:';
  SFR.store = {
    async get(key, fallback) {
      try {
        const v = localStorage.getItem(PREFIX + key);
        return v == null ? fallback : JSON.parse(v);
      } catch {
        return fallback;
      }
    },
    async set(key, value) {
      try {
        localStorage.setItem(PREFIX + key, JSON.stringify(value));
      } catch {
        /* storage full or blocked — keep running in-memory */
      }
    },
  };
})();

/* app/icons.js */
/* Lucide icons (ISC licence, lucide.dev) — generated by scripts/build-icons.js */
(() => {
  globalThis.SFR = globalThis.SFR || {};
  globalThis.SFR.ICONS = {
 "activity": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" /></svg>",
 "arrow-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 5v14\" /><path d=\"m19 12-7 7-7-7\" /></svg>",
 "arrow-down-wide-narrow": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m3 16 4 4 4-4\" /><path d=\"M7 20V4\" /><path d=\"M11 4h10\" /><path d=\"M11 8h7\" /><path d=\"M11 12h4\" /></svg>",
 "arrow-up": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m5 12 7-7 7 7\" /><path d=\"M12 19V5\" /></svg>",
 "at-sign": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\" /></svg>",
 "bell-dot": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.268 21a2 2 0 0 0 3.464 0\" /><path d=\"M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348\" /><circle cx=\"18\" cy=\"5\" r=\"3\" /></svg>",
 "calendar": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M8 2v3\" /><path d=\"M16 2v3\" /><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" /><path d=\"M3 9h18\" /></svg>",
 "calendar-days": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M8 2v3\" /><path d=\"M16 2v3\" /><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" /><path d=\"M3 9h18\" /><path d=\"M8 13h.01\" /><path d=\"M12 13h.01\" /><path d=\"M16 13h.01\" /><path d=\"M8 17h.01\" /><path d=\"M12 17h.01\" /><path d=\"M16 17h.01\" /></svg>",
 "chart-column": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M18 17V9\" /><path d=\"M13 17V5\" /><path d=\"M8 17v-3\" /></svg>",
 "chart-gantt": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10 6h8\" /><path d=\"M12 16h6\" /><path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M8 11h7\" /></svg>",
 "chart-pie": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\" /><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\" /></svg>",
 "check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20 6 9 17l-5-5\" /></svg>",
 "check-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M18 6 7 17l-5-5\" /><path d=\"m22 10-7.5 7.5L13 16\" /></svg>",
 "chevron-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m6 9 6 6 6-6\" /></svg>",
 "chevron-left": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m15 18-6-6 6-6\" /></svg>",
 "chevron-right": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m9 18 6-6-6-6\" /></svg>",
 "circle": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /></svg>",
 "circle-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m16 9-5.5 5.5L8 12\" /></svg>",
 "circle-dashed": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\" /><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\" /><path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\" /><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\" /><path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\" /><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\" /><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\" /><path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\" /></svg>",
 "circle-help": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /><path d=\"M12 17h.01\" /></svg>",
 "clock": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 6v6l4 2\" /></svg>",
 "copy": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" /></svg>",
 "crosshair": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\" /><line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\" /><line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\" /><line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\" /></svg>",
 "crown": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\" /><path d=\"M5 21h14\" /></svg>",
 "external-link": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" /></svg>",
 "eye": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /></svg>",
 "eye-off": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" /><path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" /><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" /><path d=\"m2 2 20 20\" /></svg>",
 "file-spreadsheet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" /><path d=\"M14 2v5a1 1 0 0 0 1 1h5\" /><path d=\"M8 13h2\" /><path d=\"M14 13h2\" /><path d=\"M8 17h2\" /><path d=\"M14 17h2\" /></svg>",
 "file-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" /><path d=\"M14 2v5a1 1 0 0 0 1 1h5\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" /></svg>",
 "flag": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\" /></svg>",
 "flame": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\" /></svg>",
 "flame-kindling": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z\" /><path d=\"m5 22 14-4\" /><path d=\"m5 18 14 4\" /></svg>",
 "focus": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"3\" /><path d=\"M3 7V5a2 2 0 0 1 2-2h2\" /><path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" /><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" /></svg>",
 "gauge": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m12 14 4-4\" /><path d=\"M3.34 19a10 10 0 1 1 17.32 0\" /></svg>",
 "gem": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.5 3 8 9l4 13 4-13-2.5-6\" /><path d=\"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z\" /><path d=\"M2 9h20\" /></svg>",
 "group": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 7V5c0-1.1.9-2 2-2h2\" /><path d=\"M17 3h2c1.1 0 2 .9 2 2v2\" /><path d=\"M21 17v2c0 1.1-.9 2-2 2h-2\" /><path d=\"M7 21H5c-1.1 0-2-.9-2-2v-2\" /><rect width=\"7\" height=\"5\" x=\"7\" y=\"7\" rx=\"1\" /><rect width=\"7\" height=\"5\" x=\"10\" y=\"12\" rx=\"1\" /></svg>",
 "hammer": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9\" /><path d=\"m18 15 4-4\" /><path d=\"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\" /></svg>",
 "heart-pulse": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\" /><path d=\"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\" /></svg>",
 "hourglass": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M5 22h14\" /><path d=\"M5 2h14\" /><path d=\"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22\" /><path d=\"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2\" /></svg>",
 "inbox": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\" /><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\" /></svg>",
 "info": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" /></svg>",
 "kanban": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M5 3v14\" /><path d=\"M12 3v8\" /><path d=\"M19 3v18\" /></svg>",
 "key": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m2 21 9.6-9.6\" /><path d=\"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19\" /><circle cx=\"15.5\" cy=\"7.5\" r=\"5.5\" /></svg>",
 "layers": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\" /><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\" /><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\" /></svg>",
 "leaf": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20\" /><path d=\"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13\" /></svg>",
 "link": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" /></svg>",
 "list-filter": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M2 5h20\" /><path d=\"M6 12h12\" /><path d=\"M9 19h6\" /></svg>",
 "lock": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" /></svg>",
 "log-out": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m16 17 5-5-5-5\" /><path d=\"M21 12H9\" /><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /></svg>",
 "medal": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\" /><path d=\"M11 12 5.12 2.2\" /><path d=\"m13 12 5.88-9.8\" /><path d=\"M8 7h8\" /><circle cx=\"12\" cy=\"17\" r=\"5\" /><path d=\"M12 18v-2h-.5\" /></svg>",
 "message-square": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" /></svg>",
 "minus": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M5 12h14\" /></svg>",
 "monitor": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" /><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" /><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" /></svg>",
 "moon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" /></svg>",
 "move": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 2v20\" /><path d=\"m15 19-3 3-3-3\" /><path d=\"m19 9 3 3-3 3\" /><path d=\"M2 12h20\" /><path d=\"m5 9-3 3 3 3\" /><path d=\"m9 5 3-3 3 3\" /></svg>",
 "octagon-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 16h.01\" /><path d=\"M12 8v4\" /><path d=\"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z\" /></svg>",
 "option": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M14 3h7\" /><path d=\"M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21\" /></svg>",
 "pencil": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /><path d=\"m15 5 4 4\" /></svg>",
 "play": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" /></svg>",
 "plus": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M5 12h14\" /><path d=\"M12 5v14\" /></svg>",
 "podium": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 6V2h-1\" /><path d=\"M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1\" /><path d=\"M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10\" /></svg>",
 "ratio": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" rx=\"2\" /><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\" /></svg>",
 "refresh-cw": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /><path d=\"M21 3v5h-5\" /><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /><path d=\"M8 16H3v5\" /></svg>",
 "rocket": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" /><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" /><path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" /><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" /></svg>",
 "rotate-ccw": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /></svg>",
 "ruler": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\" /><path d=\"m14.5 12.5 2-2\" /><path d=\"m11.5 9.5 2-2\" /><path d=\"m8.5 6.5 2-2\" /><path d=\"m17.5 15.5 2-2\" /></svg>",
 "scroll": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" /></svg>",
 "scroll-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 12h-5\" /><path d=\"M15 8h-5\" /><path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" /></svg>",
 "search": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m21 21-4.34-4.34\" /><circle cx=\"11\" cy=\"11\" r=\"8\" /></svg>",
 "search-x": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m13.5 8.5-5 5\" /><path d=\"m8.5 8.5 5 5\" /><circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" /></svg>",
 "send": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" /></svg>",
 "shield-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /><path d=\"m9 12 2 2 4-4\" /></svg>",
 "shirt": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\" /></svg>",
 "sliders-horizontal": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10 5H3\" /><path d=\"M12 19H3\" /><path d=\"M14 3v4\" /><path d=\"M16 17v4\" /><path d=\"M21 12h-9\" /><path d=\"M21 19h-5\" /><path d=\"M21 5h-7\" /><path d=\"M8 10v4\" /><path d=\"M8 12H3\" /></svg>",
 "snowflake": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m10 20-1.25-2.5L6 18\" /><path d=\"M10 4 8.75 6.5 6 6\" /><path d=\"m14 20 1.25-2.5L18 18\" /><path d=\"m14 4 1.25 2.5L18 6\" /><path d=\"m17 21-3-6h-4\" /><path d=\"m17 3-3 6 1.5 3\" /><path d=\"M2 12h6.5L10 9\" /><path d=\"m20 10-1.5 2 1.5 2\" /><path d=\"M22 12h-6.5L14 15\" /><path d=\"m4 10 1.5 2L4 14\" /><path d=\"m7 21 3-6-1.5-3\" /><path d=\"m7 3 3 6h4\" /></svg>",
 "sparkles": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" /><path d=\"M20 2v4\" /><path d=\"M22 4h-4\" /><circle cx=\"4\" cy=\"20\" r=\"2\" /></svg>",
 "sprout": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3\" /><path d=\"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4\" /><path d=\"M5 21h14\" /></svg>",
 "square-kanban": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M8 7v7\" /><path d=\"M12 7v4\" /><path d=\"M16 7v9\" /></svg>",
 "star": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" /></svg>",
 "summary": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 4H7\" /><path d=\"m18 16 3 3-3 3\" /><path d=\"M3 4v13a2 2 0 0 0 2 2h16\" /><path d=\"M7 14h7\" /><path d=\"M7 9h12\" /></svg>",
 "sun": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" /></svg>",
 "sunrise": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 2v8\" /><path d=\"m4.93 10.93 1.41 1.41\" /><path d=\"M2 18h2\" /><path d=\"M20 18h2\" /><path d=\"m19.07 10.93-1.41 1.41\" /><path d=\"M22 22H2\" /><path d=\"m8 6 4-4 4 4\" /><path d=\"M16 18a4 4 0 0 0-8 0\" /></svg>",
 "swords": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m13 19 6-6\" /><path d=\"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5\" /><path d=\"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586\" /><path d=\"m16 16 4 4\" /><path d=\"m19 21 2-2\" /><path d=\"m5 14 4 4\" /><path d=\"m5 21-2-2\" /><path d=\"M7.5 16.5 4 20\" /></svg>",
 "table": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 3v18\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M3 9h18\" /><path d=\"M3 15h18\" /></svg>",
 "table-2": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 9h18\" /><path d=\"M9 3v18\" /><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" /></svg>",
 "target": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><circle cx=\"12\" cy=\"12\" r=\"6\" /><circle cx=\"12\" cy=\"12\" r=\"2\" /></svg>",
 "text": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21 5H3\" /><path d=\"M15 12H3\" /><path d=\"M17 19H3\" /></svg>",
 "trending-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M16 17h6v-6\" /><path d=\"m22 17-8.5-8.5-5 5L2 7\" /></svg>",
 "trending-up": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M16 7h6v6\" /><path d=\"m22 7-8.5 8.5-5-5L2 17\" /></svg>",
 "triangle-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /><path d=\"M12 9v4\" /><path d=\"M12 17h.01\" /></svg>",
 "trophy": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\" /><path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\" /><path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\" /><path d=\"M4 22h16\" /><path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\" /><path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\" /></svg>",
 "user": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" /></svg>",
 "users": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><path d=\"M16 3.128a4 4 0 0 1 0 7.744\" /><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /></svg>",
 "view": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2\" /><path d=\"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2\" /><circle cx=\"12\" cy=\"12\" r=\"1\" /><path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\" /></svg>",
 "x": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" /></svg>",
 "zap": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z\" /></svg>"
};
})();

/* app/api.js */
/* Roadmap Lens — thin client for Jira Server/DC REST (same-origin, uses the user's session). */
(() => {
  const SFR = globalThis.SFR;

  async function req(path, { method = 'GET', body, raw } = {}) {
    const res = await fetch(path, {
      method,
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        'X-Atlassian-Token': 'no-check',
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok) {
      let msg = '';
      try {
        const j = await res.json();
        msg = [...(j.errorMessages || []), ...Object.values(j.errors || {})].join(' — ');
      } catch {
        /* non-JSON error body */
      }
      const err = new Error(msg || `HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    if (raw || res.status === 204) return res;
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }
  const q = encodeURIComponent;

  const FIELDS = {
    poc: 'customfield_16301',
    cycle: 'customfield_17260',
    fn: 'customfield_16909',
    domain: 'customfield_16604',
    battle: 'customfield_16703',
    battleTitle: 'customfield_16705',
    strategic: 'customfield_18407',
    confidence: 'customfield_18309',
    reach: 'customfield_18307',
    size: 'customfield_16508',
    initStatus: 'customfield_16300',
    epicLink: 'customfield_10101',
    brd: 'customfield_16105',
    impact: 'customfield_18503',
    start: 'customfield_13201',
    end: 'customfield_13102',
    progress: 'customfield_17701',
    estimation: 'customfield_16511',
    prd: 'customfield_16106',
  };
  SFR.FIELDS = FIELDS;
  const LIST_FIELDS = ['summary', 'issuetype', 'status', 'assignee', 'labels', 'comment', 'watches', 'created', 'updated', ...Object.values(FIELDS)].join(',');

  /* The SIF project (strategy initiative funnel): one Story per initiative. */
  const SIF = {
    strategy: 'customfield_18400',
    product: 'customfield_18404',
    tech: 'customfield_18405',
    owners: 'customfield_18402',
    reach: 'customfield_18307',
    confidence: 'customfield_18309',
    impact: 'customfield_18503',
    focus: 'customfield_18413',
    indicators: 'customfield_18414',
    battle: 'customfield_18302',
    cycle: 'customfield_17260',
    fn: 'customfield_18301',
  };
  SFR.SIF_FIELDS = SIF;
  const SIF_LIST = ['summary', 'status', 'priority', 'assignee', 'created', 'updated', 'issuelinks', ...Object.values(SIF)].join(',');
  const SIF_JQL = 'project = SIF AND issuetype = Story';

  SFR.api = {
    sifStories: (onPage) => SFR.api.searchAll(`${SIF_JQL} ORDER BY created ASC`, { fields: SIF_LIST, pageSize: 500, onPage }),
    /** Status history for a batch of SIF keys (≤100 per call — Jira caps changelog pages). */
    sifHistory: (keys) => SFR.api.searchAll(`key in (${keys.join(',')})`, { fields: 'status', pageSize: 100, expand: 'changelog' }),
    me: () => req('/rest/api/2/myself'),

    async boardConfig(boardId) {
      const ed = await req(`/rest/greenhopper/1.0/rapidviewconfig/editmodel.json?rapidViewId=${boardId}`);
      const filterId = ed.filterConfig?.id;
      let filterJql = ed.filterConfig?.query || '';
      if (!filterJql && filterId) filterJql = (await req(`/rest/api/2/filter/${filterId}`)).jql;
      const subJql = ed.subqueryConfig?.subqueries?.map((s) => s.query).filter(Boolean).join(' AND ') || '';
      return {
        name: ed.name,
        filterJql: filterJql.replace(/\s+ORDER\s+BY[\s\S]*$/i, ''),
        subJql,
        quickFilters: (ed.quickFilterConfig?.quickFilters || []).map((f) => ({ id: String(f.id), name: f.name, query: f.query })),
      };
    },

    async boardData(boardId) {
      const d = await req(`/rest/greenhopper/1.0/xboard/work/allData.json?rapidViewId=${boardId}`);
      const types = d.entityData?.types || {};
      return {
        columns: d.columnsData.columns.map((c) => ({ id: String(c.id), name: c.name, statusIds: c.statusIds.map(String) })),
        issues: d.issuesData.issues.map((i, rank) => {
          const extra = Object.fromEntries((i.extraFields || []).map((f) => [f.label.trim(), f]));
          const typeName = types[i.typeId]?.typeName || '';
          return {
            key: i.key,
            id: String(i.id),
            rank,
            summary: i.summary,
            typeName,
            status: SFR.statusOf(typeName),
            statusId: String(i.statusId),
            assignee: i.assignee ? { name: i.assignee, display: i.assigneeName, avatar: i.avatarUrl } : null,
            epic: extra.Epic?.text || '',
            domain: (extra.Domain?.html || '').replace(/<[^>]+>/g, '').trim(),
          };
        }),
      };
    },

    /** Paged JQL search. onPage(pageIssues, loaded, total) lets the UI fill in progressively. */
    async searchAll(jql, { fields = LIST_FIELDS, pageSize = 500, expand = '', onPage } = {}) {
      let startAt = 0;
      let total = Infinity;
      const out = [];
      while (startAt < total) {
        const r = await req(`/rest/api/2/search?jql=${q(jql)}&startAt=${startAt}&maxResults=${pageSize}&fields=${fields}${expand ? `&expand=${expand}` : ''}`);
        total = r.total;
        out.push(...r.issues);
        onPage?.(r.issues, out.length, total);
        if (!r.issues.length) break;
        startAt += r.issues.length;
      }
      return out;
    },
    async keysFor(jql) {
      const list = await SFR.api.searchAll(jql, { fields: 'key', pageSize: 1000 });
      return new Set(list.map((i) => i.key));
    },

    /** Fields the signed-in user may change on this issue (empty / error = read-only). */
    editmeta: (key) => req(`/rest/api/2/issue/${q(key)}/editmeta`),
    /** What the signed-in user may do on this issue (EDIT_ISSUES, ADD_COMMENTS). */
    perms: (key) => req(`/rest/api/2/mypermissions?issueKey=${q(key)}&permissions=EDIT_ISSUES,ADD_COMMENTS`),
    update: (key, fields) => req(`/rest/api/2/issue/${q(key)}`, { method: 'PUT', body: { fields }, raw: true }),
    issue: (key) => req(`/rest/api/2/issue/${q(key)}?expand=renderedFields&fields=${LIST_FIELDS},description`),
    comments: (key) => req(`/rest/api/2/issue/${q(key)}/comment?expand=renderedBody&orderBy=created`),
    addComment: (key, body) => req(`/rest/api/2/issue/${q(key)}/comment?expand=renderedBody`, { method: 'POST', body: { body } }),
    watchers: (key) => req(`/rest/api/2/issue/${q(key)}/watchers`),
    watch: (key, username) => req(`/rest/api/2/issue/${q(key)}/watchers`, { method: 'POST', body: username, raw: true }),
    unwatch: (key, username) => req(`/rest/api/2/issue/${q(key)}/watchers?username=${q(username)}`, { method: 'DELETE', raw: true }),
    transitions: (key) => req(`/rest/api/2/issue/${q(key)}/transitions`),
    transition: (key, id) => req(`/rest/api/2/issue/${q(key)}/transitions`, { method: 'POST', body: { transition: { id } }, raw: true }),
    users: (query) => req(`/rest/api/2/user/search?username=${q(query)}&maxResults=8`),
  };

  /** Flatten a REST search issue into the fields the UI reads. */
  SFR.enrichFromRest = (i) => {
    const f = i.fields;
    const F = FIELDS;
    const user = (u) => (u ? { name: u.name, display: u.displayName, avatar: u.avatarUrls?.['32x32'] || u.avatarUrls?.['24x24'] } : null);
    const opt = (v) => (v == null ? '' : Array.isArray(v) ? v.map((x) => x?.value ?? x?.name ?? x).join('، ') : v.value ?? v.name ?? String(v));
    const fnRaw = f[F.fn];
    const fn = Array.isArray(fnRaw) ? fnRaw.map((x) => x?.label || x?.name || x?.value || x) : fnRaw ? [fnRaw.label || fnRaw.name || fnRaw.value || fnRaw] : [];
    const comments = f.comment?.comments || [];
    const last = comments[comments.length - 1];
    const typeName = f.issuetype?.name || '';
    return {
      key: i.key,
      summary: f.summary,
      typeName,
      status: SFR.statusOf(f[F.initStatus]?.value || typeName),
      isEpic: /epic/i.test(typeName),
      statusName: f.status?.name || '',
      statusId: String(f.status?.id || ''),
      assignee: user(f.assignee),
      poc: user(f[F.poc]) || user(f.assignee),
      cycle: (f[F.cycle] || []).map((c) => c.value),
      fn: fn.map((s) => String(s).replace(/\s*\(TEC-\d+\)\s*$/, '').trim()).filter(Boolean),
      domain: opt(f[F.domain]),
      battle: opt(f[F.battle]) || '',
      battleTitle: f[F.battleTitle] || '',
      strategic: opt(f[F.strategic]),
      confidence: opt(f[F.confidence]),
      reach: opt(f[F.reach]),
      size: opt(f[F.size]),
      brd: typeof f[F.brd] === 'string' ? (f[F.brd].match(/https?:\/\/\S+/) || [''])[0] : '',
      labels: f.labels || [],
      delayed: (f.labels || []).some((l) => /^delayed$/i.test(l)),
      commentCount: f.comment?.total ?? comments.length,
      lastComment: last ? { author: last.author?.name, authorName: last.author?.displayName, avatar: last.author?.avatarUrls?.['24x24'], created: last.created, body: last.body } : null,
      watchCount: f.watches?.watchCount ?? 0,
      watching: !!f.watches?.isWatching,
      start: typeof f[F.start] === 'string' ? f[F.start].slice(0, 10) : '',
      end: typeof f[F.end] === 'string' ? f[F.end].slice(0, 10) : '',
      progress: opt(f[F.progress]),
      estimation: opt(f[F.estimation]),
      prd: typeof f[F.prd] === 'string' ? (f[F.prd].match(/https?:\/\/\S+/) || [''])[0] : '',
      created: f.created,
      updated: f.updated,
    };
  };
})();

/* app/store.js */
/* Roadmap Lens — state, loading and derived data. */
(() => {
  const SFR = globalThis.SFR;
  const listeners = new Set();

  const S = (SFR.state = {
    boardId: null,
    status: 'idle', // idle | loading | ready | error
    error: '',
    me: null,
    cfg: null,
    columns: [],
    colOfStatus: {},
    board: [], // board issues in rank order (from allData)
    rest: new Map(), // key -> enriched issue (project-wide, from REST search)
    restLoaded: 0,
    restTotal: 0,
    restReady: false,
    qfKeys: null, // Set of keys matching active quick filters, null = no filter
    qfLoading: false,
    seen: {},
    seenBaseline: null,
    ui: {
      tab: 'board',
      view: 'kanban',
      qf: [],
      status: [],
      owner: '',
      search: '',
      onlyFollowed: false,
      hideBacklog: false,
      colLimit: {},
      theme: 'auto',
      sort: { by: 'rank', dir: 1 },
      followTab: 'watching',
      gantt: { group: 'fn', zoom: 'month' },
    },
    dash: { cycle: '', fn: '', hideCanceled: true, monthBy: 'status', sizeVal: 'n', sizePhase: 'all', podium: 'reliable', measure: 'n', sr: { cycle: '', month: '', fn: '' } },
    sif: { rows: [], ready: false, loaded: 0, total: 0, histDone: 0, histTotal: 0, histReady: false, started: false, error: '', f: { cycle: '', battle: '', focus: '', poc: '', fn: '', strat: '' } },
    cap: { cycle: '', fn: '', unit: 'w', base: 4, months: {}, scen: { fn: '', size: '', n: 1 } },
    anim: { board: false, dash: false, sif: false, cap: false },
    wins: new Set(),
  });

  SFR.subscribe = (fn) => (listeners.add(fn), () => listeners.delete(fn));
  SFR.emit = (what = 'all') => listeners.forEach((fn) => fn(what));

  const PERSIST = ['view', 'qf', 'status', 'owner', 'onlyFollowed', 'hideBacklog', 'theme', 'tab', 'gantt'];
  SFR.saveUi = () => SFR.store.set(`ui:${S.boardId}`, Object.fromEntries(PERSIST.map((k) => [k, S.ui[k]])));

  /* ---------- loading ---------- */
  SFR.load = async (boardId) => {
    S.boardId = boardId;
    S.status = 'loading';
    SFR.emit();
    Object.assign(S.ui, await SFR.store.get(`ui:${boardId}`, {}));
    S.seen = await SFR.store.get('seen', {});
    S.seenBaseline = await SFR.store.get('seenBaseline', null);
    if (!S.seenBaseline) {
      S.seenBaseline = new Date().toISOString();
      SFR.store.set('seenBaseline', S.seenBaseline);
    }
    try {
      const [me, cfg, data] = await Promise.all([SFR.api.me(), SFR.api.boardConfig(boardId), SFR.api.boardData(boardId)]);
      S.me = { name: me.name, display: me.displayName, avatar: me.avatarUrls?.['48x48'] };
      await SFR.game.init();
      S.cfg = cfg;
      S.columns = data.columns.filter((c) => c.statusIds.length);
      S.colOfStatus = {};
      S.columns.forEach((c) => c.statusIds.forEach((id) => (S.colOfStatus[id] = c.id)));
      S.board = data.issues;
      S.status = 'ready';
      SFR.emit();
      if (S.ui.qf.length) SFR.applyQuickFilters();
      SFR.loadRest();
    } catch (e) {
      S.status = 'error';
      S.error = e.status === 401 ? 'نشست جیرا منقضی شده؛ صفحه را تازه کنید و دوباره وارد شوید.' : `بارگذاری بورد ناموفق بود (${e.message}).`;
      SFR.emit();
    }
  };

  SFR.reload = async () => {
    const data = await SFR.api.boardData(S.boardId);
    S.board = data.issues;
    SFR.emit('board');
    SFR.loadRest();
    if (S.ui.qf.length) SFR.applyQuickFilters();
  };

  SFR.loadRest = async () => {
    // Project-wide (no board sub-query) so the dashboard can also show older cycles.
    const jql = `(${S.cfg.filterJql}) ORDER BY updated DESC`;
    S.restReady = false;
    const fresh = new Map();
    try {
      await SFR.api.searchAll(jql, {
        onPage: (page, loaded, total) => {
          page.forEach((i) => fresh.set(i.key, SFR.enrichFromRest(i)));
          S.restLoaded = loaded;
          S.restTotal = total;
          S.rest = new Map([...S.rest, ...fresh]);
          SFR.emit('rest');
        },
      });
      S.rest = fresh;
      S.restReady = true;
      SFR.emit('rest');
      SFR.game.onData();
    } catch (e) {
      SFR.toast(`جزئیات تکمیلی بارگذاری نشد (${e.message}).`, 'error');
    }
  };

  /* ---------- quick filters: OR inside a group, AND across groups ---------- */
  SFR.applyQuickFilters = async () => {
    const active = S.cfg.quickFilters.filter((f) => S.ui.qf.includes(f.id));
    if (!active.length) {
      S.qfKeys = null;
      SFR.emit('board');
      return;
    }
    const groups = {};
    active.forEach((f) => (groups[SFR.groupOfQf(f.name)] ||= []).push(`(${f.query})`));
    const clause = Object.values(groups)
      .map((g) => `(${g.join(' OR ')})`)
      .join(' AND ');
    const jql = `(${S.cfg.filterJql})${S.cfg.subJql ? ` AND (${S.cfg.subJql})` : ''} AND ${clause}`;
    S.qfLoading = true;
    SFR.emit('board');
    try {
      S.qfKeys = await SFR.api.keysFor(jql);
    } catch (e) {
      SFR.toast(`اعمال فیلتر ناموفق بود: ${e.message}`, 'error');
      S.qfKeys = null;
    }
    S.qfLoading = false;
    SFR.emit('board');
  };

  /* ---------- derived ---------- */
  SFR.issue = (key) => {
    const b = S.board.find((i) => i.key === key);
    const r = S.rest.get(key);
    if (!b && !r) return null;
    return { ...(r || {}), ...(b || {}), ...(r ? { poc: r.poc, status: r.status } : {}) };
  };

  SFR.hasNews = (it) => {
    const lc = it?.lastComment;
    if (!lc || !it.watching || lc.author === S.me?.name) return false;
    const seen = S.seen[it.key] || S.seenBaseline;
    return new Date(lc.created) > new Date(seen);
  };
  SFR.markSeen = (key) => {
    S.seen[key] = new Date().toISOString();
    SFR.store.set('seen', S.seen);
  };
  SFR.markAllSeen = () => {
    const now = new Date().toISOString();
    S.rest.forEach((it) => it.watching && (S.seen[it.key] = now));
    SFR.store.set('seen', S.seen);
    SFR.emit();
  };


  /* ---------- time: which calendar year a board column belongs to, per cycle ----------
   * Board columns are bare month names (Jun … May). For "all cycles" the window around today is used. For one cycle the
   * year is read from that cycle's own cards (their created / updated dates versus the column month), so a past cycle's
   * months are all in the past. Nothing is fetched or changed: it only reads fields the cards already carry. */
  const winCache = { n: -1, v: new Map() };
  SFR.cycleWindow = (cycle) => {
    if (winCache.n !== S.rest.size + S.columns.length) Object.assign(winCache, { n: S.rest.size + S.columns.length, v: new Map() });
    if (winCache.v.has(cycle || '')) return winCache.v.get(cycle || '');
    const bl = S.columns.find((c) => SFR.monthKey(c.name) === 'backlog')?.id;
    const monthCols = S.columns.filter((c) => SFR.monthKey(c.name) && c.id !== bl);
    const startIdx = monthCols.length ? SFR.monthIdx(monthCols[0].name) : 0;
    const now = new Date();
    const curS = now.getMonth() >= startIdx ? now.getFullYear() : now.getFullYear() - 1;
    const out = { s: curS, startIdx, inferred: false };
    if (cycle) {
      const DAY = 864e5;
      const idxOfCol = new Map(monthCols.map((c) => [c.id, SFR.monthIdx(c.name)]));
      const items = [...S.rest.values()].filter((i) => !i.isEpic && i.cycle.includes(cycle) && i.status !== 'canceled' && idxOfCol.has(S.colOfStatus[i.statusId]) && i.created && i.updated);
      if (items.length >= 3) {
        const date = (m, s) => new Date(s + (m < startIdx ? 1 : 0), m, 15).getTime();
        let best = -1;
        let bestScore = -1;
        for (let s = curS - 4; s <= curS + 1; s++) {
          let score = 0;
          for (const i of items) {
            const d = date(idxOfCol.get(S.colOfStatus[i.statusId]), s);
            const c = +new Date(i.created);
            const u = +new Date(i.updated);
            if (i.status === 'done' || i.status === 'devdone') {
              if (d >= c - 45 * DAY && d <= u + 120 * DAY) score += 1;
              if (Math.abs(d - u) <= 75 * DAY) score += 1;
            } else {
              if (d >= c - 45 * DAY && d <= c + 540 * DAY) score += 1;
              if (Math.abs(d - u) <= 180 * DAY) score += 0.5;
            }
          }
          if (score > bestScore || (score === bestScore && Math.abs(s - curS) < Math.abs(best - curS))) [best, bestScore] = [s, score];
        }
        Object.assign(out, { s: best, inferred: true });
      }
    }
    winCache.v.set(cycle || '', out);
    return out;
  };
  /** Year and position (past / current / future) of a board column in a window. */
  SFR.monthState = (colId, win) => {
    const col = S.columns.find((c) => c.id === colId);
    const m = col ? SFR.monthIdx(col.name) : undefined;
    if (m == null) return null;
    const year = win.s + (m < win.startIdx ? 1 : 0);
    const now = Date.now();
    return { year, state: now >= new Date(year, m + 1, 1) ? 'past' : now < new Date(year, m, 1) ? 'future' : 'current' };
  };

  /** Every board issue, merged with its REST enrichment (no filters applied). */
  SFR.boardRows = () =>
    S.board.map((b) => {
      const r = S.rest.get(b.key);
      return r ? { ...r, ...b, poc: r.poc || b.assignee, status: r.status || b.status } : { ...b, poc: b.assignee };
    });

  /** Board issues after client-side filters. */
  SFR.visibleIssues = () => {
    const u = S.ui;
    const q = SFR.norm(u.search);
    return SFR.boardRows()
      .filter((i) => {
        if (S.qfKeys && !S.qfKeys.has(i.key)) return false;
        if (u.status.length && !u.status.includes(i.status)) return false;
        if (u.owner && i.poc?.name !== u.owner) return false;
        if (u.onlyFollowed && !i.watching) return false;
        if (q) {
          const hay = SFR.norm(`${i.key} ${i.summary} ${i.epic} ${i.domain} ${i.poc?.display || ''} ${(i.fn || []).join(' ')} ${i.battle || ''}`);
          if (!q.split(' ').every((w) => hay.includes(w))) return false;
        }
        return true;
      });
  };

  SFR.people = () => {
    const m = new Map();
    S.board.forEach((b) => {
      const p = S.rest.get(b.key)?.poc || b.assignee;
      if (!p) return;
      const e = m.get(p.name) || { ...p, count: 0 };
      e.count++;
      m.set(p.name, e);
    });
    return [...m.values()].sort((a, b) => b.count - a.count);
  };

  /** Patch an issue locally after a write so the UI updates instantly. */
  SFR.patch = (key, patch) => {
    const r = S.rest.get(key);
    if (r) S.rest.set(key, { ...r, ...patch });
    const b = S.board.find((i) => i.key === key);
    if (b && ('statusId' in patch)) b.statusId = patch.statusId;
    if (b && patch.summary) b.summary = patch.summary;
    SFR.emit('board');
  };
})();

/* app/sifdata.js */
/* Roadmap Lens — SIF (strategy initiative funnel): loading, status history and the numbers behind the SIF tab. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const DAY = 864e5;

  /* ---------- vocabulary ---------- */
  // The main funnel, in order. `rank` is how far an initiative got.
  const MAIN = [
    { key: 'strategy', rank: 1, label: 'تأیید استراتژی', en: 'Strategy POC Validation', role: 'POC استراتژی' },
    { key: 'product', rank: 2, label: 'بررسی محصول', en: 'Product POC Check', role: 'POC محصول' },
    { key: 'tech', rank: 3, label: 'بررسی فنی', en: 'Tech POC Check', role: 'POC فنی' },
    { key: 'dispatched', rank: 4, label: 'ارسال‌شده به اجرا', en: 'Dispatched', role: '' },
    { key: 'approval', rank: 5, label: 'تأیید مالک اینیشیتیو', en: 'Initiative Owner approval', role: 'مالک اینیشیتیو' },
    { key: 'ready', rank: 6, label: 'آماده‌ی برنامه‌ریزی', en: 'Ready For Plan', role: '' },
  ];
  const SIDE = [
    { key: 'review', rank: 0, label: 'بازبینی مالک', en: 'Owner Review', role: 'مالک اینیشیتیو' },
    { key: 'hold', rank: 0, label: 'متوقف', en: 'Hold', role: 'مسئول کار' },
    { key: 'rejected', rank: 0, label: 'ردشده', en: 'Rejected', role: '' },
  ];
  const META = Object.fromEntries([...MAIN, ...SIDE].map((s) => [s.key, s]));
  const STATUS_MAP = {
    'strategy poc validation': 'strategy',
    'brd prepration': 'strategy',
    'brd preparation': 'strategy',
    'product poc check': 'product',
    'initiative check for product': 'product',
    'tech poc check': 'tech',
    'initiative check for tech': 'tech',
    dispatching: 'dispatched',
    dispatched: 'dispatched',
    'initiative owner approval': 'approval',
    'ready for plan': 'ready',
    'owner review': 'review',
    hold: 'hold',
    rejected: 'rejected',
  };
  // Older workflow names. Moving between them is not "going back".
  const LEGACY = new Set(['initiative check for product', 'initiative check for tech', 'brd prepration', 'dispatching']);
  const stOf = (name) => STATUS_MAP[String(name || '').trim().toLowerCase()] || 'other';
  const rankOf = (st) => META[st]?.rank || 0;
  // Stages that are waiting for a person (a long stay there means "stuck").
  const WAITING = ['strategy', 'product', 'tech', 'approval', 'review'];
  const TIMED = ['strategy', 'product', 'tech', 'approval', 'review', 'hold', 'dispatched'];

  const clean = (s) => String(s || '').replace(/\s*\((?:[A-Z]+-\d+)\)\s*$/, '').trim();
  const vals = (v) => (v == null ? [] : (Array.isArray(v) ? v : [v]).map((x) => (typeof x === 'string' ? x : x?.value ?? x?.name ?? x?.label ?? '')).filter(Boolean));
  const pct = (v) => {
    const m = String(vals(v)[0] ?? '').match(/\d+(?:\.\d+)?/);
    return m ? Number(m[0]) / 100 : null;
  };
  const person = (u) => (u ? { name: u.name, display: u.displayName, avatar: u.avatarUrls?.['32x32'] || u.avatarUrls?.['24x24'] } : null);
  const persons = (v) => (v == null ? [] : (Array.isArray(v) ? v : [v]).map(person).filter(Boolean));

  function toRow(i) {
    const f = i.fields;
    const F = SFR.SIF_FIELDS;
    const st = stOf(f.status?.name);
    const strategy = persons(f[F.strategy]);
    const product = persons(f[F.product]);
    const tech = persons(f[F.tech]);
    const owners = persons(f[F.owners]);
    const assignee = person(f.assignee);
    const impact = f[F.impact] == null || f[F.impact] === '' ? null : Number(f[F.impact]);
    const reach = pct(f[F.reach]);
    const conf = pct(f[F.confidence]);
    const links = (f.issuelinks || []).map((l) => (l.outwardIssue || l.inwardIssue)?.key).filter(Boolean);
    return {
      key: i.key,
      title: f.summary || i.key,
      statusName: f.status?.name || '',
      st,
      rank: rankOf(st),
      prio: f.priority?.name || '',
      assignee,
      strategy,
      product,
      tech,
      owners,
      reach,
      conf,
      impact: Number.isFinite(impact) ? impact : null,
      ev: Number.isFinite(impact) && reach != null && conf != null ? impact * reach * conf : null,
      focus: clean(vals(f[F.focus])[0]),
      indicators: vals(f[F.indicators]).map(clean),
      battle: clean(vals(f[F.battle])[0]).replace(/^\s*-\s*$/, ''),
      cycle: vals(f[F.cycle]),
      fn: vals(f[F.fn]).map(clean),
      created: Date.parse(f.created),
      updatedRaw: f.updated,
      updated: Date.parse(f.updated),
      ir: [...new Set(links.filter((k) => k.startsWith('IR24H2-')))],
      ctil: [...new Set(links.filter((k) => k.startsWith('CTIL-')))],
      hist: null,
      visits: null,
      maxRank: Math.max(1, rankOf(st)),
      since: null,
      dispatchedAt: null,
      rework: 0,
      rejectedAt: null,
    };
  }

  /** Who is expected to act next, by the stage the initiative is in. */
  function holdersOf(r) {
    const one = (a) => (a.length ? a : r.assignee ? [r.assignee] : []);
    if (r.st === 'strategy') return one(r.strategy);
    if (r.st === 'product') return one(r.product);
    if (r.st === 'tech') return one(r.tech);
    if (r.st === 'approval' || r.st === 'review') return r.owners.length ? r.owners : r.assignee ? [r.assignee] : [];
    if (r.st === 'hold') return r.assignee ? [r.assignee] : [];
    return [];
  }

  function applyHist(r, h) {
    r.hist = h;
    const visits = [];
    let t0 = r.created;
    for (const [t, from] of h) {
      visits.push({ name: from, st: stOf(from), from: t0, to: t });
      t0 = t;
    }
    visits.push({ name: r.statusName, st: r.st, from: t0, to: null });
    r.visits = visits;
    r.maxRank = Math.max(1, ...visits.map((v) => rankOf(v.st)));
    r.since = t0;
    r.dispatchedAt = visits.find((v) => rankOf(v.st) >= 4)?.from ?? null;
    let back = 0;
    for (let k = 0; k < visits.length - 1; k++) {
      const a = visits[k];
      const b = visits[k + 1];
      if (rankOf(a.st) && rankOf(b.st) && rankOf(b.st) < rankOf(a.st) && !LEGACY.has(a.name.toLowerCase()) && !LEGACY.has(b.name.toLowerCase())) back++;
    }
    r.rework = back;
    if (r.st === 'rejected') {
      const prev = [...visits].reverse().find((v) => rankOf(v.st) > 0);
      r.rejectedAt = prev ? rankOf(prev.st) : 1;
    }
  }

  const histOf = (issue) =>
    (issue.changelog?.histories || [])
      .slice()
      .sort((a, b) => Date.parse(a.created) - Date.parse(b.created))
      .flatMap((h) => h.items.filter((x) => x.field === 'status' && x.fromString !== x.toString).map((x) => [Date.parse(h.created), x.fromString, x.toString]));

  /* ---------- loading ---------- */
  const Z = S.sif;
  const CACHE = 'sif-hist-v1';
  const poke = (() => {
    let t = 0;
    return () => {
      if (t) return;
      t = setTimeout(() => ((t = 0), SFR.emit('sif')), 250);
    };
  })();

  async function loadHistory() {
    const cache = await SFR.store.get(CACHE, {});
    const need = [];
    Z.rows.forEach((r) => {
      const c = cache[r.key];
      if (c && c.u === r.updatedRaw) applyHist(r, c.h);
      else need.push(r);
    });
    Z.histTotal = Z.rows.length;
    Z.histDone = Z.rows.length - need.length;
    SFR.emit('sif');
    const byKey = new Map(Z.rows.map((r) => [r.key, r]));
    const chunks = [];
    for (let i = 0; i < need.length; i += 100) chunks.push(need.slice(i, i + 100).map((r) => r.key));
    const run = async (keys) => {
      const got = await SFR.api.sifHistory(keys);
      got.forEach((iss) => {
        const r = byKey.get(iss.key);
        if (!r) return;
        const h = histOf(iss);
        applyHist(r, h);
        cache[r.key] = { u: r.updatedRaw, h };
      });
      Z.histDone += keys.length;
      poke();
    };
    for (let i = 0; i < chunks.length; i += 2) await Promise.all(chunks.slice(i, i + 2).map(run));
    // Rows whose history could not be read keep a one-step fallback so the funnel still counts them.
    Z.rows.forEach((r) => !r.hist && applyHist(r, []));
    Object.keys(cache).forEach((k) => !byKey.has(k) && delete cache[k]);
    SFR.store.set(CACHE, cache);
    Z.histReady = true;
    SFR.emit('sif');
  }

  async function ensure(force = false) {
    if (Z.started && !force) return;
    Z.started = true;
    Z.error = '';
    Z.ready = false;
    Z.histReady = false;
    try {
      const issues = await SFR.api.sifStories((_, loaded, total) => ((Z.loaded = loaded), (Z.total = total), poke()));
      Z.rows = issues.map(toRow);
      Z.ready = true;
      SFR.emit('sif');
      await loadHistory();
    } catch (e) {
      Z.error = e.message || 'خطای نامشخص';
      Z.started = false;
      SFR.emit('sif');
    }
  }

  /* ---------- scope (filters) ---------- */
  const pocNames = (r) => [...r.strategy, ...r.product, ...r.tech, ...r.owners, r.assignee].filter(Boolean).map((p) => p.name);
  function inScope(r, f) {
    if (f.cycle === '__none' ? r.cycle.length : f.cycle && !r.cycle.includes(f.cycle)) return false;
    if (f.battle && r.battle !== f.battle) return false;
    if (f.focus && r.focus !== f.focus) return false;
    if (f.poc && !pocNames(r).includes(f.poc)) return false;
    if (f.fn && !r.fn.includes(f.fn)) return false;
    if (f.strat && r.prio !== f.strat) return false;
    return true;
  }
  const scoped = () => Z.rows.filter((r) => inScope(r, Z.f));

  /* ---------- maths ---------- */
  const pctl = (arr, p) => {
    if (!arr.length) return 0;
    const a = [...arr].sort((x, y) => x - y);
    const k = (a.length - 1) * p;
    const lo = Math.floor(k);
    return a[lo] + (a[Math.ceil(k)] - a[lo]) * (k - lo);
  };
  const days = (ms) => ms / DAY;
  const ageOf = (r, now = Date.now()) => (r.since ? days(now - r.since) : r.updated ? days(now - r.updated) : 0);

  /* ---------- roadmap join ---------- */
  const backlogCol = () => S.columns.find((c) => SFR.monthKey(c.name) === 'backlog')?.id;
  function irPhase(key) {
    const i = S.rest.get(key);
    if (!i) return 'missing';
    if (i.status === 'canceled') return 'canceled';
    if (SFR.isDelivered(i)) return 'delivered';
    if (i.status === 'progress' || i.status === 'pending') return 'progress';
    return S.colOfStatus[i.statusId] === backlogCol() ? 'backlog' : 'planned';
  }
  /** One answer per SIF story: where its roadmap cards stand together. */
  function linkOf(r) {
    if (!r.ir.length) return { kind: r.ctil.length ? 'techonly' : 'none', phase: null, at: null };
    const ph = r.ir.map(irPhase);
    const live = ph.filter((p) => p !== 'canceled' && p !== 'missing');
    let phase;
    if (!live.length) phase = ph.every((p) => p === 'canceled') ? 'canceled' : 'missing';
    else if (live.every((p) => p === 'delivered')) phase = 'delivered';
    else if (live.some((p) => p === 'delivered' || p === 'progress')) phase = 'progress';
    else if (live.some((p) => p === 'planned')) phase = 'planned';
    else phase = 'backlog';
    const at = phase === 'delivered' ? Math.max(...r.ir.map((k) => Date.parse(S.rest.get(k)?.updated) || 0)) : null;
    return { kind: 'roadmap', phase, at };
  }

  /* ---------- the model for the whole tab ---------- */
  function model() {
    const now = Date.now();
    const rows = scoped();
    const histOk = Z.histReady;
    const reachedN = (rank) => rows.filter((r) => r.maxRank >= rank).length;

    const funnel = MAIN.map((s, k) => {
      const reached = reachedN(s.rank);
      const prev = k ? reachedN(MAIN[k - 1].rank) : rows.length;
      return {
        ...s,
        reached,
        conv: prev ? reached / prev : 0,
        now: rows.filter((r) => r.st === s.key).length,
        lostHere: rows.filter((r) => r.st === 'rejected' && r.rejectedAt === s.rank).length,
      };
    });
    const sides = Object.fromEntries(SIDE.map((s) => [s.key, rows.filter((r) => r.st === s.key).length]));
    const reworkRows = rows.filter((r) => r.rework > 0);

    // time in each stage — only visits that have ended
    const dur = Object.fromEntries(TIMED.map((k) => [k, []]));
    rows.forEach((r) => r.visits?.forEach((v) => v.to && dur[v.st] && dur[v.st].push(days(v.to - v.from))));
    const stats = Object.fromEntries(
      TIMED.map((k) => [k, { n: dur[k].length, med: pctl(dur[k], 0.5), p75: pctl(dur[k], 0.75), mean: dur[k].length ? dur[k].reduce((a, b) => a + b, 0) / dur[k].length : 0 }])
    );
    const limit = (st) => Math.max(7, stats[st]?.n >= 5 ? stats[st].p75 : 0);
    const stuck = rows
      .filter((r) => WAITING.includes(r.st) && r.since && ageOf(r, now) > limit(r.st))
      .map((r) => ({ r, age: ageOf(r, now), limit: limit(r.st) }))
      .sort((a, b) => b.age / b.limit - a.age / a.limit);

    // who holds the ball
    const people = new Map();
    rows
      .filter((r) => [...WAITING, 'hold'].includes(r.st))
      .forEach((r) =>
        holdersOf(r).forEach((p) => {
          const e = people.get(p.name) || { p, name: p.name, total: 0, by: {}, ages: [], late: 0 };
          e.total++;
          e.by[r.st] = (e.by[r.st] || 0) + 1;
          e.ages.push(ageOf(r, now));
          if (WAITING.includes(r.st) && r.since && ageOf(r, now) > limit(r.st)) e.late++;
          people.set(p.name, e);
        })
      );
    const holders = [...people.values()]
      .map((e) => ({ ...e, oldest: Math.max(0, ...e.ages), avg: e.ages.reduce((a, b) => a + b, 0) / e.ages.length }))
      .sort((a, b) => b.total - a.total || b.oldest - a.oldest);

    // value
    const live = rows.filter((r) => r.st !== 'rejected');
    const areaMap = new Map();
    rows.forEach((r) => {
      const k = r.focus || '—';
      const e = areaMap.get(k) || { key: k, n: 0, sent: 0, flow: 0, hold: 0, rejected: 0, ev: 0, impact: 0, reach: [], conf: [], full: 0 };
      e.n++;
      if (r.st === 'rejected') e.rejected++;
      else if (r.st === 'hold' || r.st === 'review') e.hold++;
      else if (r.rank >= 4) e.sent++;
      else e.flow++;
      if (r.st !== 'rejected') {
        if (r.ev != null) {
          e.ev += r.ev;
          e.full++;
        }
        if (r.impact != null) e.impact += r.impact;
        if (r.reach != null) e.reach.push(r.reach);
        if (r.conf != null) e.conf.push(r.conf);
      }
      areaMap.set(k, e);
    });
    const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
    const areas = [...areaMap.values()]
      .map((e) => ({ ...e, reachAvg: avg(e.reach), confAvg: avg(e.conf) }))
      .sort((a, b) => b.n - a.n);
    const evMax = {};
    live.forEach((r) => r.ev != null && (evMax[r.focus] = Math.max(evMax[r.focus] || 0, r.ev)));
    const waiting = live
      .filter((r) => r.rank >= 1 && r.rank <= 3 && r.ev != null)
      .map((r) => ({ r, rel: evMax[r.focus] ? r.ev / evMax[r.focus] : 0 }))
      .sort((a, b) => b.rel - a.rel)
      .slice(0, 10);
    const quality = {
      n: live.length,
      impact: live.filter((r) => r.impact != null).length,
      reach: live.filter((r) => r.reach != null).length,
      conf: live.filter((r) => r.conf != null).length,
      focus: live.filter((r) => r.focus).length,
      full: live.filter((r) => r.ev != null && r.focus).length,
    };

    // idea → delivery
    const sentRows = rows.filter((r) => r.maxRank >= 4);
    const links = sentRows.map((r) => ({ r, ...linkOf(r) }));
    const byPhase = (p) => links.filter((l) => l.kind === 'roadmap' && l.phase === p).length;
    const pipeline = {
      all: rows.length,
      sent: sentRows.length,
      linked: links.filter((l) => l.kind === 'roadmap').length,
      techonly: links.filter((l) => l.kind === 'techonly').length,
      none: links.filter((l) => l.kind === 'none').length,
      delivered: byPhase('delivered'),
      progress: byPhase('progress'),
      planned: byPhase('planned'),
      backlog: byPhase('backlog'),
      missing: byPhase('missing'),
      canceled: byPhase('canceled'),
    };
    const toSend = pctl(
      rows.filter((r) => r.dispatchedAt).map((r) => days(r.dispatchedAt - r.created)),
      0.5
    );
    const toDone = links.filter((l) => l.phase === 'delivered' && l.at && l.r.dispatchedAt && l.at > l.r.dispatchedAt).map((l) => days(l.at - l.r.dispatchedAt));
    const lead = { toSend, toSendN: rows.filter((r) => r.dispatchedAt).length, toDone: pctl(toDone, 0.5), toDoneN: toDone.length };

    return { rows, histOk, funnel, sides, reworkRows, stats, limit, stuck, holders, areas, waiting, quality, pipeline, links, lead, now };
  }

  /* ---------- drill predicate ---------- */
  function drillRows(f) {
    const m = model();
    let rows = m.rows;
    if (f.st) rows = rows.filter((r) => r.st === f.st);
    if (f.reached) rows = rows.filter((r) => r.maxRank >= f.reached);
    if (f.lostAt) rows = rows.filter((r) => r.st === 'rejected' && r.rejectedAt === f.lostAt);
    if (f.holder) rows = rows.filter((r) => [...WAITING, 'hold'].includes(r.st) && holdersOf(r).some((p) => p.name === f.holder));
    if (f.stuck) {
      const ids = new Set(m.stuck.map((x) => x.r.key));
      rows = rows.filter((r) => ids.has(r.key));
      if (f.stuck !== true) rows = rows.filter((r) => r.st === f.stuck);
    }
    if (f.rework) rows = rows.filter((r) => r.rework > 0);
    if (f.area !== undefined) rows = rows.filter((r) => (r.focus || '—') === f.area);
    if (f.group) {
      const g = { sent: (r) => r.st !== 'rejected' && r.st !== 'hold' && r.st !== 'review' && r.rank >= 4, flow: (r) => r.st !== 'rejected' && r.st !== 'hold' && r.st !== 'review' && r.rank < 4, hold: (r) => r.st === 'hold' || r.st === 'review', rejected: (r) => r.st === 'rejected' }[f.group];
      rows = rows.filter(g);
    }
    if (f.missing) {
      const k = { impact: 'impact', reach: 'reach', conf: 'conf', focus: 'focus' }[f.missing];
      rows = rows.filter((r) => r.st !== 'rejected' && (f.missing === 'any' ? r.ev == null || !r.focus : r[k] == null || r[k] === ''));
    }
    if (f.link) {
      const want = [].concat(f.link);
      const L = new Map(m.links.map((l) => [l.r.key, l]));
      const hit = (l) => want.some((w) => w === 'all' || (['roadmap', 'techonly', 'none'].includes(w) ? l.kind === w : l.kind === 'roadmap' && l.phase === w));
      rows = rows.filter((r) => L.has(r.key) && hit(L.get(r.key)));
    }
    if (f.sent) rows = rows.filter((r) => r.maxRank >= 4);
    if (f.mine) rows = rows.filter((r) => holdersOf(r).some((p) => p.name === S.me?.name) && WAITING.includes(r.st));
    return rows;
  }

  SFR.sif = { MAIN, SIDE, META, WAITING, TIMED, ensure, model, scoped, inScope, drillRows, holdersOf, ageOf, linkOf, irPhase, pctl, days, stOf };
})();

/* app/charts.js */
/* Roadmap Lens — small, dependency-free charts (HTML bars, SVG donut).
 * Marks: bars ≤24px with a 4px rounded data-end, 2px surface gaps between segments,
 * hairline grid, legend for ≥2 series, hover tooltip via data-tip, drill-down via data-drill,
 * and every chart ships a table view. Text never wears the series colour. */
(() => {
  const SFR = globalThis.SFR;
  const { fa, esc, faPct } = SFR;

  const niceMax = (v) => {
    if (v <= 5) return 5;
    const p = 10 ** Math.floor(Math.log10(v));
    const n = [1, 2, 2.5, 5, 10].find((m) => m * p >= v);
    return n * p;
  };
  const tip = (title, rows) =>
    esc(
      `<b>${esc(title)}</b>` +
        rows.map((r) => `<span class="tt-row"><i style="background:${r.color || 'transparent'}"></i>${esc(r.label)}<em>${esc(r.value)}</em></span>`).join('')
    );
  const legend = (series, totals) =>
    `<div class="legend" role="list">${series
      .map(
        (s) =>
          `<span class="legend-item" role="listitem"><i class="sw" style="background:var(--s-${s.key}, ${s.color})"></i>${esc(s.label)}${
            totals ? `<b>${fa(totals[s.key] || 0)}</b>` : ''
          }</span>`
      )
      .join('')}</div>`;
  const table = (head, rows) =>
    `<div class="viz-table"><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows
      .map((r) => `<tr>${r.map((c, i) => `<td${i ? ' class="num"' : ''}>${typeof c === 'number' ? fa(c) : esc(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`;
  const color = (s) => `var(--s-${s.key}, ${s.color || 'var(--ink-3)'})`;

  /** Stacked columns. cats: [{key,label,sub,current}], series: [{key,label}], data: {catKey:{seriesKey:n}} */
  function stackedColumns({ cats, series, data, drill = 'month', seriesDrill = 'status', unit = 'اینیشیتیو', segLabels = false, allTotals = false, wide = false }) {
    const totals = cats.map((c) => series.reduce((a, s) => a + (data[c.key]?.[s.key] || 0), 0));
    const max = niceMax(Math.max(1, ...totals));
    // Whole-number gridlines: quarters when they land on integers, otherwise halves (or just the top below 8).
    const steps = max % 4 === 0 ? [0, 0.25, 0.5, 0.75, 1] : max % 2 === 0 ? [0, 0.5, 1] : max < 8 ? [0, 1] : [0, 0.5, 1];
    const ticks = steps.map((t) => Math.round(max * t));
    const seriesTotals = Object.fromEntries(series.map((s) => [s.key, cats.reduce((a, c) => a + (data[c.key]?.[s.key] || 0), 0)]));
    const peak = totals.indexOf(Math.max(...totals));
    const cols = cats
      .map((c, ci) => {
        const t = totals[ci];
        const segs = series
          .map((s) => ({ s, v: data[c.key]?.[s.key] || 0 }))
          .filter((x) => x.v > 0);
        const tt = tip(`${c.label} — ${fa(t)} ${unit}`, segs.map((x) => ({ label: x.s.label, value: fa(x.v), color: color(x.s) })));
        return `<div class="col${c.current ? ' is-current' : ''}" data-tip="${tt}">
          <div class="col-plot">
            ${t > 0 && (allTotals || ci === peak || c.current) ? `<span class="col-val">${fa(t)}</span>` : ''}
            <div class="col-bar" style="height:${(t / max) * 100}%">
              ${segs
                .map(
                  (x) =>
                    `<button class="seg" data-s="${esc(x.s.key)}" style="flex:${x.v};background:${color(x.s)}" data-drill="${esc(JSON.stringify({ [drill]: c.key, [seriesDrill]: x.s.drill ?? x.s.key }))}" aria-label="${esc(
                      `${c.label}، ${x.s.label}: ${fa(x.v)}`
                    )}">${segLabels && x.v / max >= 0.07 ? `<span class="seg-n">${fa(x.v)}</span>` : ''}</button>`
                )
                .join('')}
            </div>
          </div>
          <div class="col-label">${esc(c.label)}${c.sub ? `<small>${esc(c.sub)}</small>` : ''}</div>
        </div>`;
      })
      .join('');
    const grid = ticks
      .map((t) => `<div class="grid-line" style="bottom:${(t / max) * 100}%"><span>${fa(t)}</span></div>`)
      .join('');
    return `${legend(series, seriesTotals)}
      <div class="viz-plot cols-chart${wide ? ' wide-bars' : ''}"><div class="grid">${grid}</div><div class="cols">${cols}</div></div>
      ${table(['ماه', ...series.map((s) => s.label), 'جمع'], cats.map((c, i) => [c.label, ...series.map((s) => data[c.key]?.[s.key] || 0), totals[i]]))}`;
  }

  /** Donut. items: [{key,label,value,color?}] — 2px surface gap between arcs. */
  function donut({ items, center, drill = 'status' }) {
    const total = items.reduce((a, b) => a + b.value, 0) || 1;
    const R = 42;
    const C = 2 * Math.PI * R;
    const gap = items.filter((i) => i.value).length > 1 ? 1.6 : 0;
    let off = 0;
    const arcs = items
      .filter((i) => i.value > 0)
      .map((i) => {
        const len = (i.value / total) * C;
        const dash = Math.max(0.5, len - gap);
        const a = `<circle class="arc" r="${R}" cx="60" cy="60" fill="none" stroke="${color(i)}" stroke-width="14"
          stroke-dasharray="${dash} ${C - dash}" stroke-dashoffset="${-off}" data-drill="${esc(JSON.stringify({ [drill]: i.key }))}"
          data-tip="${tip(i.label, [{ label: 'تعداد', value: fa(i.value) }, { label: 'سهم', value: faPct((i.value / total) * 100) }])}" tabindex="0"
          aria-label="${esc(`${i.label}: ${fa(i.value)}`)}"></circle>`;
        off += len;
        return a;
      })
      .join('');
    return `<div class="donut-wrap">
      <svg class="donut" viewBox="0 0 120 120" role="img" aria-label="${esc(center?.label || '')}">
        <g transform="rotate(-90 60 60)">${arcs}</g>
        <text x="60" y="58" text-anchor="middle" class="donut-num">${fa(center?.value ?? total)}</text>
        <text x="60" y="74" text-anchor="middle" class="donut-cap">${esc(center?.label || 'جمع')}</text>
      </svg>
      <ul class="donut-legend">${items
        .map(
          (i) => `<li><button data-drill="${esc(JSON.stringify({ [drill]: i.key }))}"><i class="sw" style="background:${color(i)}"></i><span>${esc(i.label)}</span>
            <b>${fa(i.value)}</b><em>${faPct((i.value / total) * 100)}</em></button></li>`
        )
        .join('')}</ul>
    </div>${table(['دسته', 'تعداد', 'سهم'], items.map((i) => [i.label, i.value, faPct((i.value / total) * 100)]))}`;
  }

  /** Horizontal stacked bars (RTL: grow from the start/right edge). rows: [{key,label,values,avatar?}] */
  function hStacked({ rows, series, drillKey, showDone = true, max: forcedMax }) {
    const totals = rows.map((r) => series.reduce((a, s) => a + (r.values[s.key] || 0), 0));
    const max = forcedMax || Math.max(1, ...totals);
    const body = rows
      .map((r, ri) => {
        const t = totals[ri];
        const done = (r.values.done || 0) + (r.values.devdone || 0);
        const segs = series.map((s) => ({ s, v: r.values[s.key] || 0 })).filter((x) => x.v);
        const tt = tip(`${r.label} — ${fa(t)}`, segs.map((x) => ({ label: x.s.label, value: fa(x.v), color: color(x.s) })));
        return `<div class="hrow" data-tip="${tt}">
          <div class="hrow-label">${r.avatar ? `<img class="av av-xs" src="${esc(r.avatar)}" alt="">` : ''}<span dir="auto">${esc(r.label)}</span></div>
          <div class="hrow-track"><div class="hrow-bar" style="width:${(t / max) * 100}%">${segs
            .map(
              (x) =>
                `<button class="seg" style="flex:${x.v};background:${color(x.s)}" data-drill="${esc(JSON.stringify({ [drillKey]: r.key, status: x.s.key }))}" aria-label="${esc(
                  `${r.label}، ${x.s.label}: ${fa(x.v)}`
                )}"></button>`
            )
            .join('')}</div></div>
          <div class="hrow-val"><b>${fa(t)}</b>${showDone && t ? `<small>${faPct((done / t) * 100)} تحویل</small>` : ''}</div>
        </div>`;
      })
      .join('');
    return `<div class="hbars">${body}</div>${table(['', ...series.map((s) => s.label), 'جمع'], rows.map((r, i) => [r.label, ...series.map((s) => r.values[s.key] || 0), totals[i]]))}`;
  }

  /** Single-series columns (e.g. task size). items: [{key,label,value}] */
  function columns({ items, drillKey, colorKey = 'cat1' }) {
    const max = niceMax(Math.max(1, ...items.map((i) => i.value)));
    return `<div class="viz-plot cols-chart compact"><div class="grid">${[0, 0.5, 1]
      .map((t) => `<div class="grid-line" style="bottom:${t * 100}%"><span>${fa(Math.round(max * t))}</span></div>`)
      .join('')}</div><div class="cols">${items
      .map(
        (i) => `<div class="col"><div class="col-plot"><span class="col-val">${fa(i.value)}</span>
          <div class="col-bar" style="height:${(i.value / max) * 100}%"><button class="seg" style="flex:1;background:${i.color || `var(--s-${colorKey})`}"
            data-drill="${esc(JSON.stringify({ [drillKey]: i.key }))}" data-tip="${tip(i.label, [{ label: 'تعداد', value: fa(i.value) }])}" aria-label="${esc(`${i.label}: ${fa(i.value)}`)}"></button></div></div>
          <div class="col-label">${esc(i.label)}</div></div>`
      )
      .join('')}</div></div>${table(['دسته', 'تعداد'], items.map((i) => [i.label, i.value]))}`;
  }

  SFR.charts = { stackedColumns, donut, hStacked, columns, legend };
})();

/* app/viz.js */
/* Roadmap Lens — richer visuals for the dashboard: delivery journey, heatmap, burn-up, health vitals, podium.
 * Same rules as charts.js: thin marks, recessive grid, hover tip via data-tip, drill-down via data-drill,
 * a table view for every chart, and text never wears a series colour. */
(() => {
  const SFR = globalThis.SFR;
  const { fa, esc, faPct } = SFR;
  const icon = (...a) => SFR.icon(...a);

  const tip = (title, rows = []) =>
    esc(`<b>${esc(title)}</b>` + rows.map((r) => `<span class="tt-row"><i style="background:${r.color || 'transparent'}"></i>${esc(r.label)}<em>${esc(r.value)}</em></span>`).join(''));
  const drill = (o) => esc(JSON.stringify(o));
  const table = (head, rows) =>
    `<div class="viz-table"><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows
      .map((r) => `<tr>${r.map((c, i) => `<td${i ? ' class="num"' : ''}>${typeof c === 'number' ? fa(c) : esc(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`;
  const nice = (v) => {
    if (v <= 5) return 5;
    const p = 10 ** Math.floor(Math.log10(v));
    return [1, 2, 2.5, 5, 10].find((m) => m * p >= v) * p;
  };
  /** Embed a Lucide icon inside an SVG at x,y. */
  const iconAt = (name, x, y, size, cls = '') => SFR.icon(name, size, cls).replace('<svg', `<svg x="${x}" y="${y}"`);

  /* ------------------------------------------------------------------ journey
   * One node per delivery month along a winding road (first month at the right, like the page).
   * ring = share of the month's points already delivered; crown/flame = the month's boss. */
  function journey({ nodes, fresh, measure = 'n' }) {
    const n = nodes.length;
    const step = 118;
    const padX = 64;
    const W = padX * 2 + Math.max(1, n - 1) * step;
    const H = 214;
    const pts = nodes.map((_, i) => ({ x: W - padX - i * step, y: 110 + 24 * Math.sin(i * 1.05 + 0.4) }));
    const curve = (k) =>
      pts
        .slice(0, k + 1)
        .map((p, i, a) => {
          if (!i) return `M${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
          const q = a[i - 1];
          const mx = (p.x + q.x) / 2;
          return `C${mx.toFixed(1)} ${q.y.toFixed(1)} ${mx.toFixed(1)} ${p.y.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
        })
        .join(' ');
    const cur = nodes.findIndex((x) => x.current);
    // How far the road has been travelled: up to the last month that has started (nothing for a cycle still ahead).
    const lastReached = nodes.reduce((a, x, i) => (x.state && x.state !== 'future' ? i : a), -1);
    const R = 29;
    const C = 2 * Math.PI * R;
    const g = nodes
      .map((m, i) => {
        const p = pts[i];
        const ratio = measure === 'n' ? (m.total ? m.done / m.total : 0) : m.xp ? m.earned / m.xp : 0;
        const full = m.total > 0 && m.done === m.total;
        const stateCls = full ? 'is-full' : m.state === 'current' ? 'is-now' : m.xp === 0 ? 'is-empty' : m.state === 'future' ? 'is-future' : 'is-past';
        const t = tip(m.label, [
          { label: 'اینیشیتیو', value: `${fa(m.done)} از ${fa(m.total)} تحویل‌شده` },
          { label: 'امتیاز', value: `${fa(m.earned)} از ${fa(m.xp)}` },
          ...(m.delayed ? [{ label: 'تأخیری', value: fa(m.delayed), color: 'var(--danger)' }] : []),
          ...(m.boss ? [{ label: m.boss.done ? 'کار بزرگِ ماه · تحویل شد' : 'کار بزرگِ ماه · هنوز تحویل نشده', value: m.boss.title.slice(0, 40), color: 'var(--brand-2)' }] : []),
        ]);
        return `<g class="jn ${stateCls}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})" style="--i:${i}">
          ${i === cur ? `<circle class="jn-halo" r="40"/><g class="jn-pin"><rect x="-36" y="-72" width="72" height="24" rx="12"/><path d="M-6 -48 L0 -41 L6 -48 Z"/><text y="-55.5" text-anchor="middle">اینجایی</text></g>` : ''}
          <circle class="jn-base" r="${R + 4}"/>
          <circle class="jn-track" r="${R}"/>
          <circle class="jn-arc" r="${R}" transform="rotate(-90)" stroke-dasharray="${(Math.min(1, ratio) * C).toFixed(1)} ${C.toFixed(1)}"/>
          ${full ? iconAt('check', -11, -11, 22, 'jn-check') : m.total ? `<text class="jn-num" y="5" text-anchor="middle">${faPct(ratio * 100)}</text>` : `<text class="jn-num is-dim" y="5" text-anchor="middle">—</text>`}
          ${m.boss ? `<g class="jn-boss${m.boss.done ? ' is-dead' : ''}" transform="translate(22 -24)"><circle r="11"/>${iconAt(m.boss.done ? 'crown' : 'flame', -7, -7, 14)}</g>` : ''}
          ${m.delayed ? `<g class="jn-late" transform="translate(-22 -24)"><circle r="10"/><text y="4" text-anchor="middle">${fa(m.delayed)}</text></g>` : ''}
          <text class="jn-label" y="${R + 24}" text-anchor="middle">${esc(m.label)}${m.year ? ` <tspan class="jn-year">${SFR.fa(String(m.year))}</tspan>` : ''}</text>
          <text class="jn-sub" y="${R + 41}" text-anchor="middle">${m.total ? `${fa(m.done)} از ${fa(m.total)}` : 'خالی'}</text>
          <circle class="jn-hit" r="${R + 10}" data-drill="${drill({ month: m.id })}" data-tip="${t}" tabindex="0" role="button" aria-label="${esc(`${m.label}: ${fa(m.done)} از ${fa(m.total)}`)}"/>
        </g>`;
      })
      .join('');
    const tbl = table(['ماه', 'تحویل‌شده', 'کل', 'امتیاز کسب‌شده', 'امتیاز کل', 'تأخیری'], nodes.map((m) => [m.label, m.done, m.total, m.earned, m.xp, m.delayed]));
    return `<div class="journey${fresh ? ' is-fresh' : ''}"><div class="journey-scroll viz-plot-wrap"><svg class="viz-plot journey-svg" viewBox="0 0 ${W} ${H}" style="min-width:${Math.round(W * 0.74)}px" role="img" aria-label="مسیر تحویل ماه‌به‌ماه">
      <defs><linearGradient id="jgrad" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--brand-2)"/></linearGradient></defs>
      <path class="jr-road" d="${curve(n - 1)}"/>
      ${lastReached >= 0 ? `<path class="jr-trail" pathLength="100" d="${curve(lastReached)}"/>` : ''}
      ${g}
    </svg></div>${tbl}</div>`;
  }

  /* ------------------------------------------------------------------ heatmap (rows × months → points) */
  function heatmap({ rows, cols, cell, drillOf, measure = 'n' }) {
    const unit = measure === 'n' ? 'اینیشیتیو' : 'امتیاز';
    let max = 0;
    const grid = rows.map((r) => cols.map((c) => ((max = Math.max(max, cell(r, c)[measure])), cell(r, c))));
    const lvl = (v) => (v <= 0 ? 0 : Math.min(6, Math.max(1, Math.ceil((v / max) * 6))));
    const val = (x) => x[measure];
    const head = `<div class="hm-row hm-head"><span></span>${cols.map((c) => `<span class="${c.current ? 'is-now' : ''}">${esc(c.label)}</span>`).join('')}<span class="hm-sum">جمع</span></div>`;
    const body = rows
      .map((r, ri) => {
        const sum = grid[ri].reduce((a, x) => a + x.n, 0);
        return `<div class="hm-row"><span class="hm-label" dir="auto" title="${esc(r.label)}">${esc(r.label)}</span>${cols
          .map((c, ci) => {
            const x = grid[ri][ci];
            const t = tip(`${r.label} · ${c.label}`, [{ label: 'اینیشیتیو', value: fa(x.n) }, { label: 'امتیاز', value: fa(x.xp) }, ...(x.late ? [{ label: 'تأخیری', value: fa(x.late), color: 'var(--danger)' }] : [])]);
            return x.n
              ? `<button class="hm-cell h${lvl(val(x))}${c.current ? ' is-now' : ''}" data-drill="${drill(drillOf(r, c))}" data-tip="${t}" aria-label="${esc(`${r.label}، ${c.label}: ${fa(x.n)} اینیشیتیو، ${fa(x.xp)} ${unit}`)}"><b>${fa(val(x))}</b>${x.late ? '<i class="hm-dot"></i>' : ''}</button>`
              : `<span class="hm-cell h0${c.current ? ' is-now' : ''}"></span>`;
          })
          .join('')}<span class="hm-sum">${fa(sum)}</span></div>`;
      })
      .join('');
    const scale = `<div class="hm-scale"><span>کم</span>${[1, 2, 3, 4, 5, 6].map((k) => `<i class="h${k}"></i>`).join('')}<span>زیاد</span><em>${icon('circle', 8)} نقطه = دست‌کم یک مورد تأخیری</em></div>`;
    return `<div class="heat plot-block" style="--hm-cols:${cols.length}">${head}${body}${scale}</div>${table(['فانکشن', ...cols.map((c) => c.label)], rows.map((r, ri) => [r.label, ...grid[ri].map((x) => x.n)]))}`;
  }

  /* ------------------------------------------------------------------ burn-up (cumulative planned vs delivered) */
  function burnup({ cats, planned, delivered, unit = 'امتیاز' }) {
    const W = 640;
    const H = 270;
    const L = 78; // room on the left for the end labels
    const Rr = 54; // axis labels live on the right, like the other charts
    const T = 22;
    const B = 38;
    const n = cats.length;
    const max = nice(Math.max(1, ...planned, ...delivered.filter((v) => v != null)));
    const x = (i) => W - Rr - (n === 1 ? (W - L - Rr) / 2 : (i * (W - L - Rr)) / (n - 1));
    const edge = W - Rr + 8;
    const y = (v) => T + (1 - v / max) * (H - T - B);
    const path = (arr) => arr.map((v, i) => (v == null ? null : `${x(i).toFixed(1)} ${y(v).toFixed(1)}`)).filter(Boolean).map((p, i) => `${i ? 'L' : 'M'}${p}`).join(' ');
    const lastD = delivered.reduce((a, v, i) => (v != null ? i : a), -1);
    const gap = lastD >= 0 ? `${Array.from({ length: lastD + 1 }, (_, i) => `${x(i).toFixed(1)},${y(planned[i]).toFixed(1)}`).join(' ')} ${Array.from({ length: lastD + 1 }, (_, k) => lastD - k).map((i) => `${x(i).toFixed(1)},${y(delivered[i]).toFixed(1)}`).join(' ')}` : '';
    const ticks = [0, 0.25, 0.5, 0.75, 1];
    const cur = cats.findIndex((c) => c.current);
    const gridSvg = ticks.map((t) => `<line class="bu-grid${t === 0 ? ' is-base' : ''}" x1="${L - 10}" x2="${edge}" y1="${y(max * t)}" y2="${y(max * t)}"/><text class="bu-tick" x="${W - 4}" y="${y(max * t) + 4}" text-anchor="start">${fa(Math.round(max * t))}</text>`).join('');
    const labels = cats.map((c, i) => `<text class="bu-cat${c.current ? ' is-now' : ''}" x="${x(i)}" y="${H - 14}" text-anchor="middle">${esc(c.label)}</text>`).join('');
    const hits = cats
      .map((c, i) => {
        const w = n > 1 ? (W - L - Rr) / (n - 1) : 80;
        const t = tip(c.label, [
          { label: 'برنامه‌ی تجمعی', value: fa(planned[i]), color: 'var(--s-cat1)' },
          ...(delivered[i] != null ? [{ label: 'تحویل تجمعی', value: fa(delivered[i]), color: 'var(--s-cat3)' }, { label: 'فاصله', value: fa(planned[i] - delivered[i]) }] : []),
        ]);
        return `<rect class="bu-hit" x="${x(i) - w / 2}" y="${T}" width="${w}" height="${H - T - B}" data-tip="${t}"/>`;
      })
      .join('');
    const endP = `<circle class="bu-dot p" cx="${x(n - 1)}" cy="${y(planned[n - 1])}" r="4.5"/>`;
    const endD = lastD >= 0 ? `<circle class="bu-dot d" cx="${x(lastD)}" cy="${y(delivered[lastD])}" r="4.5"/>` : '';
    const lblP = `<text class="bu-end" x="${x(n - 1) - 6}" y="${y(planned[n - 1]) - 12}" text-anchor="end">برنامه ${fa(planned[n - 1])}</text>`;
    const lblD = lastD >= 0 ? `<text class="bu-end" x="${x(lastD)}" y="${y(delivered[lastD]) + 22}" text-anchor="middle">تحویل ${fa(delivered[lastD])}</text>` : '';
    return `<div class="legend" role="list"><span class="legend-item" role="listitem"><i class="sw" style="background:var(--s-cat1)"></i>برنامه‌ی تجمعی</span><span class="legend-item" role="listitem"><i class="sw" style="background:var(--s-cat3)"></i>تحویل تجمعی</span><span class="legend-item" role="listitem"><i class="sw gap"></i>فاصله‌ی برنامه و تحویل</span></div>
      <div class="viz-plot-wrap"><svg class="viz-plot burn" viewBox="0 0 ${W} ${H}" role="img" aria-label="نمودار برنامه در برابر تحویل تجمعی">
        ${gridSvg}
        ${cur >= 0 ? `<line class="bu-now" x1="${x(cur)}" x2="${x(cur)}" y1="${T - 6}" y2="${H - B}"/><text class="bu-nowlbl" x="${x(cur)}" y="${T - 10}" text-anchor="middle">امروز</text>` : ''}
        ${gap ? `<polygon class="bu-gap" points="${gap}"/>` : ''}
        <path class="bu-line p" pathLength="100" d="${path(planned)}"/>
        <path class="bu-line d" pathLength="100" d="${path(delivered)}"/>
        ${endP}${endD}${lblP}${lblD}${labels}${hits}
      </svg></div>
      ${table(['ماه', 'برنامه‌ی تجمعی', 'تحویل تجمعی'], cats.map((c, i) => [c.label, planned[i], delivered[i] ?? 0]))}`;
  }

  /* ------------------------------------------------------------------ vitals: ring gauge + health bars */
  function vitals({ score, tier, meters }) {
    const R = 38;
    const C = 2 * Math.PI * R;
    const tone = score >= 80 ? 'good' : score >= 55 ? 'warn' : 'bad';
    const ic = { good: 'heart-pulse', warn: 'activity', bad: 'triangle-alert' }[tone];
    const bars = meters
      .map((m) => {
        const t = m.pct >= 85 ? 'good' : m.pct >= 60 ? 'warn' : 'bad';
        const mark = { good: 'circle-check', warn: 'triangle-alert', bad: 'octagon-alert' }[t];
        return `<button class="vt ${t}" data-drill="${drill(m.drill)}" data-tip="${tip(m.label, [{ label: 'سالم', value: `${fa(m.ok)} از ${fa(m.total)}` }, { label: 'نیازمند توجه', value: fa(m.total - m.ok) }])}">
          <span class="vt-l">${icon(mark, 14)}${esc(m.label)}</span><span class="vt-bar"><i style="width:${m.pct}%"></i></span><span class="vt-v">${faPct(m.pct)}</span><small>${m.total - m.ok ? `${fa(m.total - m.ok)} مورد ${esc(m.fix)}` : 'همه‌چیز خوب است'}</small></button>`;
      })
      .join('');
    return `<div class="vitals"><div class="vt-gauge ${tone}">
        <svg viewBox="0 0 100 100" width="104" height="104" role="img" aria-label="سلامت ${fa(score)} از ۱۰۰"><circle cx="50" cy="50" r="${R}" class="vt-gtrack"/><circle cx="50" cy="50" r="${R}" class="vt-garc" transform="rotate(-90 50 50)" stroke-dasharray="${((score / 100) * C).toFixed(1)} ${C.toFixed(1)}"/></svg>
        <div class="vt-gtext"><b data-count="${score}">${fa(score)}</b><small>از ۱۰۰</small></div>
        <span class="vt-tier">${icon(ic, 14)}${esc(tier)}</span></div>
      <div class="vt-list">${bars}</div></div>`;
  }

  /* ------------------------------------------------------------------ podium of top deliverers */
  function podium({ people, max, unit = '', fmt = 'num', head = ['نفر', 'مقدار', '', ''] }) {
    const top = people.slice(0, 3);
    const rest = people.slice(3, 8);
    const order = [top[1], top[0], top[2]].filter(Boolean); // 2 · 1 · 3
    const rankOf = (p) => top.indexOf(p) + 1;
    const stand = order
      .map((p) => {
        const r = rankOf(p);
        return `<button class="pd pd-${r}" data-drill="${drill({ poc: p.key })}" data-tip="${tip(p.label, [{ label: head[1], value: p.display }, { label: 'جزئیات', value: p.detail || '' }])}">
          ${r === 1 ? `<span class="pd-crown">${icon('crown', 20)}</span>` : ''}
          ${p.avatar ? `<img class="av av-lg" src="${esc(p.avatar)}" alt="">` : `<span class="av av-lg c${[...p.label].reduce((a, c) => (a + c.charCodeAt(0)) % 8, 0)}">${esc(SFR.initials(p.label))}</span>`}
          <b dir="auto">${esc(SFR.firstName(p.label))}</b>
          <span class="pd-xp"><em data-count="${Math.round(p.value)}" data-fmt="${fmt === 'pct' ? 'pct' : ''}" data-cid="pd-${esc(p.key)}">${p.display}</em> ${esc(unit)}</span>
          <span class="pd-block"><i>${fa(r)}</i></span></button>`;
      })
      .join('');
    const list = rest
      .map(
        (p, i) => `<button class="pd-row" data-drill="${drill({ poc: p.key })}">
          <span class="pd-n">${fa(i + 4)}</span>${p.avatar ? `<img class="av av-xs" src="${esc(p.avatar)}" alt="">` : `<span class="av av-xs">${esc(SFR.initials(p.label))}</span>`}
          <span class="pd-name" dir="auto">${esc(p.label)}</span><span class="pd-track"><i style="width:${(p.value / max) * 100}%"></i></span><b>${p.display}</b></button>`
      )
      .join('');
    return `<div class="podium">${top.length ? `<div class="pd-stand">${stand}</div>` : ''}${list ? `<div class="pd-list">${list}</div>` : ''}${!top.length ? SFR.empty('هنوز کسی به حد نصاب نرسیده', 'برای این سکو هر نفر دست‌کم سه مورد لازم دارد.', 'trophy') : ''}</div>
      ${table(head, people.map((p) => [p.label, p.display, p.done, p.due]))}`;
  }

  /* ------------------------------------------------------------------ size report (rows × sizes)
   * One real <table>: rows = phases or functions, columns = XS…XXL + unsized. Each cell is tinted with its own size
   * colour (intensity ∝ √value) so the eye finds the heavy cells; a thin mix bar shows the size composition. */
  function sizeReport({ rows, foot, val = 'n', drillOf, unitLabel }) {
    const keys = [...SFR.SIZES, '—'];
    const colour = (k) => (k === '—' ? 'var(--sz-na)' : `var(--sz-${k.toLowerCase()})`);
    const kLabel = (k) => (k === '—' ? 'بی‌سایز' : `${k} · ${SFR.SIZE_META[k].fa}`);
    let max = 0;
    rows.forEach((r) => keys.forEach((k) => (max = Math.max(max, r.data[k][val]))));
    const sumOf = (r, f) => keys.reduce((a, k) => a + r.data[k][f], 0);
    const line = (r, isFoot) => {
      const tot = sumOf(r, val);
      const cells = keys
        .map((k) => {
          const x = r.data[k];
          const n = x[val];
          if (!n) return `<td><span class="sr-cell is-zero">·</span></td>`;
          const a = Math.round(10 + 38 * Math.sqrt(n / (max || 1)));
          const t = tip(`${r.label} · ${kLabel(k)}`, [{ label: 'اینیشیتیو', value: fa(x.n) }, { label: 'هفته‌ی کاری', value: fa(x.w) }, { label: 'سهم از ردیف', value: faPct((n / (tot || 1)) * 100) }]);
          return `<td><button class="sr-cell${isFoot ? ' is-foot' : ''}" style="--c:${colour(k)};--a:${a}%" data-drill="${drill(drillOf(r, k))}" data-tip="${t}" aria-label="${esc(`${r.label}، ${kLabel(k)}: ${fa(n)}`)}">${fa(n)}</button></td>`;
        })
        .join('');
      const mix = keys
        .filter((k) => r.data[k][val])
        .map((k) => `<i style="flex:${r.data[k][val]};background:${colour(k)}"></i>`)
        .join('');
      const label = `<th scope="row" class="srep-rl"><button class="sr-row" data-drill="${drill(drillOf(r, null))}">${r.color ? `<i class="sr-dot" style="background:${r.color}"></i>` : ''}<span dir="auto">${esc(r.label)}</span></button></th>`;
      return `<tr${isFoot ? ' class="srep-foot"' : ''}>${label}${cells}<td class="sr-sum"><b>${fa(tot)}</b></td><td class="sr-mix"><span class="mixbar">${mix}</span></td></tr>`;
    };
    const head = keys.map((k) => `<th scope="col">${k === '—' ? '<span class="sr-na">بی‌سایز</span>' : SFR.sizeChip(k)}</th>`).join('');
    return `<div class="srep-wrap"><table class="srep" style="--sr-cols:${keys.length}">
      <thead><tr><th class="srep-rl" scope="col"></th>${head}<th scope="col" class="sr-sum">جمع ${unitLabel || ''}</th><th scope="col">ترکیب سایز</th></tr></thead>
      <tbody>${rows.map((r) => line(r)).join('')}</tbody>
      ${foot ? `<tfoot>${line(foot, true)}</tfoot>` : ''}
    </table></div>`;
  }

  SFR.viz = { journey, heatmap, burnup, vitals, podium, sizeReport };
})();

/* app/ui.js */
/* Roadmap Lens — shared UI atoms (strings in, strings out; events are delegated in app.js). */
(() => {
  const SFR = globalThis.SFR;
  const { esc, fa } = SFR;

  SFR.icon = (name, size = 16, cls = '') => {
    const svg = SFR.ICONS[name] || '';
    return svg.replace('<svg', `<svg class="ic ${cls}" width="${size}" height="${size}" aria-hidden="true" focusable="false"`);
  };

  SFR.avatar = (p, size = 'sm') => {
    if (!p) return `<span class="av av-${size} av-empty" title="بدون مسئول">${SFR.icon('user', 12)}</span>`;
    return p.avatar
      ? `<img class="av av-${size}" src="${esc(p.avatar)}" alt="" title="${esc(p.display || p.name)}" loading="lazy">`
      : `<span class="av av-${size} c${[...String(p.name || p.display || '')].reduce((a, c) => (a + c.charCodeAt(0)) % 8, 0)}" title="${esc(p.display || p.name)}">${esc(SFR.initials(p.display || p.name))}</span>`;
  };

  SFR.statusPill = (key, { short = false } = {}) => {
    const m = SFR.statusMeta(key);
    return `<span class="pill pill-${key}"><i class="dot"></i>${esc(short ? m.short : m.label)}</span>`;
  };

  SFR.keyChip = (key) => `<bdi class="key" dir="ltr">${esc(key)}</bdi>`;

  SFR.skeletonCards = (n = 4) => Array.from({ length: n }, () => `<div class="card skel"><i></i><i></i><i class="short"></i></div>`).join('');

  SFR.empty = (title, text, icon = 'inbox') =>
    `<div class="empty">${SFR.icon(icon, 28)}<b>${esc(title)}</b>${text ? `<p>${esc(text)}</p>` : ''}</div>`;

  /* ---------- toast (with optional action) ---------- */
  SFR.toast = (msg, kind = 'info', action) => {
    const toastHost = SFR.root?.querySelector('.toasts');
    if (!toastHost) return;
    const el = document.createElement('div');
    el.className = `toast toast-${kind}`;
    el.setAttribute('role', kind === 'error' ? 'alert' : 'status');
    el.innerHTML = `${SFR.icon(kind === 'error' ? 'triangle-alert' : kind === 'ok' ? 'circle-check' : 'sparkles', 16)}<span>${esc(msg)}</span>${
      action ? `<button class="btn btn-ghost btn-xs">${esc(action.label)}</button>` : ''
    }`;
    if (action) el.querySelector('button').onclick = () => (action.run(), el.remove());
    toastHost.appendChild(el);
    setTimeout(() => el.classList.add('out'), action ? 7000 : 4200);
    setTimeout(() => el.remove(), action ? 7400 : 4600);
  };

  /* ---------- tooltip for [data-tip] (charts) and [data-hint] (buttons) ---------- */
  SFR.installTooltip = (root) => {
    const tt = root.querySelector('.tooltip');
    let cur = null;
    const show = (el, x, y) => {
      const html = el.getAttribute('data-tip');
      const hint = el.getAttribute('data-hint');
      tt.innerHTML = html || esc(hint);
      tt.classList.toggle('is-hint', !html);
      tt.hidden = false;
      const r = tt.getBoundingClientRect();
      const vw = window.innerWidth;
      let left = x - r.width / 2;
      left = Math.max(8, Math.min(vw - r.width - 8, left));
      let top = y - r.height - 12;
      if (top < 8) top = y + 18;
      tt.style.transform = `translate(${left}px, ${top}px)`;
    };
    root.addEventListener('pointermove', (e) => {
      const el = e.target.closest?.('[data-tip],[data-hint]');
      if (!el) {
        if (cur) (tt.hidden = true), (cur = null);
        return;
      }
      cur = el;
      if (el.hasAttribute('data-hint')) {
        const r = el.getBoundingClientRect();
        show(el, r.left + r.width / 2, r.top);
      } else show(el, e.clientX, e.clientY);
    });
    root.addEventListener('pointerleave', () => (tt.hidden = true));
    root.addEventListener('scroll', () => (tt.hidden = true), true);
  };

  SFR.count = (n) => `<span class="count">${fa(n)}</span>`;
})();

/* app/game.js */
/* Roadmap Lens — game layer: points, levels, daily streak, daily quests, achievements, confetti.
 * Everything that comes from board data (delivery points, bosses, achievements) is recomputed from Jira and
 * is the same on every device. Points for actions (comment, follow, move, open) are stored in this browser only. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;

  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const yesterdayKey = () => dayKey(new Date(Date.now() - 864e5));

  /* ---------- levels ---------- */
  const NAMES = ['کارآموز', 'کاوشگر', 'ناوبر', 'استراتژیست', 'معمار نقشه', 'فرمانده', 'اسطوره', 'افسانه'];
  const T = (l) => 40 * (l - 1) * l; // points needed to reach level l: 0, 80, 240, 480, 800, 1200…
  /** scale > 1 stretches the curve (the team earns far more than one person). */
  SFR.levelInfo = (xp, scale = 1) => {
    const x = Math.max(0, xp) / scale;
    const level = Math.max(1, Math.floor((1 + Math.sqrt(1 + x / 10)) / 2));
    const lo = T(level) * scale;
    const hi = T(level + 1) * scale;
    return { level, name: NAMES[Math.min(level - 1, NAMES.length - 1)], xp, lo, hi, into: xp - lo, span: hi - lo, pct: Math.min(100, ((xp - lo) / (hi - lo)) * 100) };
  };

  /* ---------- player state (per Jira user, this browser) ---------- */
  let P = null;
  const blank = () => ({ xp: 0, n: { comment: 0, follow: 0, move: 0, open: 0 }, streak: { last: '', n: 0, best: 0 }, day: { key: '', comment: 0, staleFix: 0, open: [], done: {} }, unlocked: {}, flags: {}, level: null, snap: null });
  const save = () => P && S.me && SFR.store.set(`game:${S.me.name}`, P);
  const rollDay = () => {
    const k = dayKey();
    if (P.day.key !== k) P.day = { key: k, comment: 0, staleFix: 0, open: [], done: {} };
  };

  const rows = () => [...S.rest.values()].filter((i) => !i.isEpic);
  const mineRows = () => rows().filter((i) => i.poc?.name && i.poc.name === S.me?.name);
  const backlogCol = () => S.columns.find((c) => SFR.monthKey(c.name) === 'backlog')?.id;
  const isPicked = (i) => {
    const c = S.colOfStatus[i.statusId];
    return !!c && c !== backlogCol();
  };
  SFR.isStale = (i) => SFR.isOpen(i) && isPicked(i) && SFR.daysSince(i.updated) > 14;

  const mineEarned = () => mineRows().reduce((a, i) => a + SFR.earnedOf(i), 0);
  const mineCredit = () => mineRows().reduce((a, i) => a + SFR.creditOf(i), 0);
  /** Level points = actions + delivered + a share of work in flight. The high-water mark means a level is never lost
   * when a delivery date slips or a card goes quiet. */
  const total = () => {
    if (!P) return 0;
    const raw = P.xp + mineCredit();
    if (raw > (P.peak || 0)) P.peak = raw;
    return P.peak || 0;
  };
  // Is a card in a delivery month that has already ended (in the cycle window of its own labels)?
  const dueIn = (list, { includeCurrent = false } = {}) =>
    list.filter((i) => {
      const c = S.colOfStatus[i.statusId];
      if (!c || c === backlogCol() || i.status === 'canceled') return false;
      const st = SFR.monthState(c, SFR.cycleWindow(''));
      return st && (st.state === 'past' || (includeCurrent && st.state === 'current'));
    });

  /* ---------- fx: confetti and floating points ---------- */
  const COLORS = ['#d40c78', '#ff7a3d', '#2a78d6', '#1baf7a', '#eda100', '#6250d6', '#e87ba4'];
  const fx = (SFR.fx = {
    host: () => SFR.root?.querySelector('.fx'),
    confetti({ x, y, count = 110, spread = 1, chip = false } = {}) {
      const host = fx.host();
      if (!host || reduce()) return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cv = document.createElement('canvas');
      cv.width = W * dpr;
      cv.height = H * dpr;
      cv.style.cssText = `width:${W}px;height:${H}px`;
      host.appendChild(cv);
      const ctx = cv.getContext('2d');
      ctx.scale(dpr, dpr);
      const cr = chip ? SFR.root.querySelector('.player')?.getBoundingClientRect() : null;
      const ox = cr ? cr.left + cr.width / 2 : x ?? W / 2;
      const oy = cr ? cr.bottom : y ?? H * 0.3;
      const parts = Array.from({ length: count }, () => {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.15 * spread;
        const v = 6 + Math.random() * 10;
        return { x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, w: 5 + Math.random() * 6, h: 3 + Math.random() * 5, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.45, c: COLORS[(Math.random() * COLORS.length) | 0], t: 0, max: 80 + Math.random() * 60, round: Math.random() < 0.25 };
      });
      let raf;
      const step = () => {
        ctx.clearRect(0, 0, W, H);
        let alive = 0;
        for (const p of parts) {
          if (p.t >= p.max) continue;
          alive++;
          p.t++;
          p.vy += 0.3;
          p.vx *= 0.991;
          p.x += p.vx;
          p.y += p.vy;
          p.r += p.vr;
          ctx.globalAlpha = Math.min(1, (p.max - p.t) / (p.max * 0.3));
          ctx.fillStyle = p.c;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.r);
          if (p.round) (ctx.beginPath(), ctx.arc(0, 0, p.h * 0.7, 0, 6.3), ctx.fill());
          else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
        if (alive && cv.isConnected) raf = requestAnimationFrame(step);
        else cv.remove();
      };
      raf = requestAnimationFrame(step);
      setTimeout(() => (cancelAnimationFrame(raf), cv.remove()), 4500);
    },
    /** Floating label that rises from the player chip (or any element). */
    pop(text, { kind = 'xp', from } = {}) {
      const host = fx.host();
      if (!host) return;
      const anchor = from || SFR.root.querySelector('.player');
      const r = anchor ? anchor.getBoundingClientRect() : { left: window.innerWidth / 2, width: 0, bottom: 80 };
      const el = document.createElement('div');
      el.className = `xp-pop xp-${kind}`;
      el.textContent = text;
      el.style.left = `${r.left + r.width / 2}px`;
      el.style.top = `${r.bottom - 6}px`;
      host.appendChild(el);
      setTimeout(() => el.remove(), 1700);
    },
    /** Counts [data-count] numbers up from their previous value (or zero). Called after a view renders. */
    countUp(root) {
      const seen = (fx._seen ||= new Map());
      root.querySelectorAll('[data-count]').forEach((el) => {
        const to = Number(el.dataset.count);
        const id = el.dataset.cid || el.dataset.count;
        const from = seen.get(id) ?? 0;
        seen.set(id, to);
        const fmt = (v) => (el.dataset.fmt === 'pct' ? SFR.faPct(v) : SFR.fa(Math.round(v)));
        if (from === to || reduce()) return (el.textContent = fmt(to));
        const t0 = performance.now();
        const dur = 900;
        const tick = (now) => {
          const k = Math.min(1, (now - t0) / dur);
          el.textContent = fmt(from + (to - from) * (1 - (1 - k) ** 3));
          if (k < 1 && el.isConnected) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
  });

  /* ---------- bosses: the biggest open challenge of each delivery month ---------- */
  const bosses = (list) => {
    const by = new Map();
    list.forEach((i) => {
      if (i.status === 'canceled') return;
      const col = S.colOfStatus[i.statusId];
      if (!col || col === backlogCol()) return;
      const xp = SFR.xpOf(i);
      if (!(SFR.SIZE_META[SFR.sizeKey(i.size)]?.n >= 4)) return; // bosses are the L-and-bigger of their month
      const cur = by.get(col);
      if (!cur || xp > SFR.xpOf(cur) || (xp === SFR.xpOf(cur) && i.key < cur.key)) by.set(col, i);
    });
    return by;
  };

  /* ---------- daily quests ---------- */
  const quests = () => {
    rollDay();
    const stale = mineRows().filter(SFR.isStale).length;
    const list = [
      { id: 'review', icon: 'scroll-text', title: 'سه اینیشیتیو را باز کن و بخوان', xp: 15, now: P.day.open.length, goal: 3 },
      { id: 'comment', icon: 'message-square', title: 'یک دیدگاه بنویس', xp: 20, now: P.day.comment, goal: 1 },
      stale || P.day.staleFix
        ? { id: 'stale', icon: 'hourglass', title: 'یکی از موارد بی‌خبرِ خودت را به‌روز کن', hint: `${fa(stale)} مورد بیش از ۱۴ روز تغییر نکرده`, xp: 25, now: P.day.staleFix, goal: 1 }
        : { id: 'stale', icon: 'hourglass', title: 'موارد تو همه به‌روز هستند', xp: 0, now: 1, goal: 1, auto: true },
    ];
    return list.map((q) => ({ ...q, done: q.now >= q.goal }));
  };

  /* ---------- achievements ---------- */
  const badgeList = () => {
    const mine = mineRows();
    const mineDone = mine.filter((i) => i.status === 'done');
    const mineOpen = mine.filter(SFR.isOpen);
    const all = rows();
    const picked = all.filter((i) => isPicked(i) && i.status !== 'canceled');
    const planned = picked.reduce((a, i) => a + SFR.xpOf(i), 0);
    const earned = picked.reduce((a, i) => a + SFR.earnedOf(i), 0);
    const monthsClean = S.columns.filter((c) => c.id !== backlogCol()).filter((c) => {
      const it = picked.filter((i) => S.colOfStatus[i.statusId] === c.id);
      return it.filter((i) => i.status === 'done').length >= 3 && !it.some((i) => i.delayed);
    }).length;
    const fnClear = (() => {
      const m = {};
      picked.forEach((i) => i.fn.forEach((f) => ((m[f] ||= []).push(i))));
      return Object.values(m).filter((l) => l.length >= 3 && l.every((i) => i.status === 'done' || i.status === 'devdone')).length;
    })();
    const watching = all.filter((i) => i.watching).length;
    const staleMine = mineOpen.filter(SFR.isStale).length;
    const b = (id, ic, name, desc, now, goal, scope = 'me') => ({ id, icon: ic, name, desc, now: Math.min(now, goal), goal, done: now >= goal, scope });
    return [
      b('first', 'flag', 'اولین پرچم', 'اولین اینیشیتیوی خودت را به تولید برسان', mineDone.length, 1),
      b('giant', 'swords', 'غول‌کش', 'یک اینیشیتیوی سایز L یا بزرگ‌تر را تحویل بده', mineDone.filter((i) => SFR.SIZE_META[SFR.sizeKey(i.size)]?.n >= 4).length, 1),
      b('golden', 'gem', 'ضربه‌ی طلایی', 'یک اینیشیتیوی «حیاتی» (Make or Fail) را تحویل بده', mineDone.filter((i) => i.strategic === 'Make or Fail').length, 1),
      b('clean', 'shield-check', 'دست پاک', 'سه تحویل داشته باش و هیچ‌کدام از موارد ماه‌دارت تأخیری نباشد', mine.some((i) => i.delayed && isPicked(i)) ? 0 : mineDone.length, 3),
      b('fresh', 'sparkles', 'همیشه تازه', 'حداقل سه مورد باز داشته باش که هیچ‌کدام بیش از ۱۴ روز بی‌خبر نیست', staleMine ? 0 : mineOpen.length, 3),
      b('sized', 'shirt', 'حساب‌کتاب', 'همه‌ی موارد بازت سایز دارند (حداقل سه مورد)', mineOpen.length && mineOpen.every((i) => SFR.sizeKey(i.size)) ? mineOpen.length : 0, 3),
      b('finisher', 'check-check', 'قول و عمل', 'همه‌ی (حداقل سه) کارِ ماه‌های گذشته‌ات تحویل شده', (() => { const due = dueIn(mine); return due.length >= 3 && due.every(SFR.isDelivered) ? due.length : 0; })(), 3),
      b('juggler', 'layers', 'شعبده‌باز', 'پنج کار در جریان داشته باش که هیچ‌کدام بیش از ۱۴ روز بی‌خبر نیست', (() => { const run = mine.filter((i) => i.status === 'progress'); return run.some(SFR.isStale) ? 0 : run.length; })(), 5),
      b('talker', 'message-square', 'سخنگوی تیم', 'ده دیدگاه از همین نما بنویس', P.n.comment, 10),
      b('watcher', 'eye', 'دیده‌بان', 'ده اینیشیتیو را دنبال کن', watching, 10),
      b('streak3', 'flame', 'سه روز پشت‌سرهم', 'سه روز پیاپی به بورد سر بزن', P.streak.best, 3),
      b('streak7', 'flame-kindling', 'هفته‌ی طلایی', 'هفت روز پیاپی به بورد سر بزن', P.streak.best, 7),
      b('early', 'sunrise', 'سحرخیز', 'قبل از ساعت ۸ صبح بورد را باز کن', P.flags.early ? 1 : 0, 1),
      b('quester', 'target', 'مأموریت‌باز', 'هر سه مأموریت یک روز را کامل کن', P.flags.allQuests ? 1 : 0, 1),
      b('clean-month', 'trophy', 'ماه بی‌تأخیر', 'ماهی که دست‌کم سه تحویل دارد و هیچ تأخیری نه', monthsClean, 1, 'team'),
      b('fn-clear', 'medal', 'فانکشن صددرصد', 'فانکشنی که همه‌ی (حداقل سه) اینیشیتیوهایش تمام شده', fnClear, 1, 'team'),
      b('halfway', 'rocket', 'نیمه‌ی راه', 'تیم نیمی از امتیاز برنامه را تحویل داده', planned ? Math.round((earned / planned) * 100) : 0, 50, 'team'),
    ];
  };

  /* ---------- the public surface ---------- */
  const G = (SFR.game = {
    bosses,
    quests: () => (P ? quests() : []),
    badges: () => (P ? badgeList() : []),
    streak: () => P?.streak.n || 0,
    ready: () => !!P,
    mineRows,

    async init() {
      P = { ...blank(), ...(await SFR.store.get(`game:${S.me.name}`, {})) };
      P.n = { ...blank().n, ...P.n };
      P.streak = { ...blank().streak, ...P.streak };
      rollDay();
      const today = dayKey();
      if (P.streak.last !== today) {
        P.streak.n = P.streak.last === yesterdayKey() ? P.streak.n + 1 : 1;
        P.streak.best = Math.max(P.streak.best, P.streak.n);
        P.streak.last = today;
      }
      if (new Date().getHours() < 8) P.flags.early = 1;
      save();
    },

    /** Level, progress and totals for the player chip. */
    me() {
      const earned = mineEarned();
      const credit = mineCredit();
      return { ...SFR.levelInfo(total()), earned, wip: Math.max(0, credit - earned), actions: P?.xp || 0, streak: P?.streak.n || 0 };
    },

    /** Called once the project-wide issue list is loaded: wins since last visit, new achievements, level changes. */
    onData() {
      if (!P || !S.restReady) return;
      const list = rows();
      if (list.length < 20) return;
      const cur = Object.fromEntries(list.map((i) => [i.key, i.status]));
      if (P.snap) {
        const won = list.filter((i) => i.status === 'done' && P.snap[i.key] && P.snap[i.key] !== 'done');
        S.wins = new Set(won.map((i) => i.key));
        if (won.length) {
          SFR.toast(`از آخرین بازدیدت ${fa(won.length)} اینیشیتیو به «انجام‌شده» رسید. دست مریزاد!`, 'ok');
          setTimeout(() => fx.confetti({ count: 140 }), 350);
        }
      }
      P.snap = cur;
      const lv = G.me().level;
      if (P.level != null && lv > P.level) G.levelUp(lv);
      P.level = lv;
      G.checkBadges();
      save();
      G.paint();
    },

    levelUp(lv) {
      const info = SFR.levelInfo(total());
      SFR.toast(`سطح ${fa(lv)} باز شد: «${info.name}»`, 'ok');
      fx.confetti({ count: 160, chip: true });
    },

    checkBadges() {
      const fresh = badgeList().filter((b) => b.done && !P.unlocked[b.id]);
      if (!fresh.length) return;
      const first = !Object.keys(P.unlocked).length;
      fresh.forEach((b) => (P.unlocked[b.id] = Date.now()));
      save();
      if (first) return SFR.toast(`${fa(fresh.length)} دستاورد از قبل برای تو باز بود؛ مجموعه‌ات را از نشان بالای صفحه ببین.`, 'info');
      fresh.slice(0, 2).forEach((b, k) => setTimeout(() => (SFR.toast(`دستاورد تازه: «${b.name}»`, 'ok'), fx.confetti({ count: 120, chip: true })), 600 + k * 900));
    },

    /** Award points for something the person just did. */
    award(kind, key, extra = {}) {
      if (!P) return;
      rollDay();
      const before = G.me().level;
      let gain = { comment: 15, follow: 5, move: 5, open: 0 }[kind] || 0;
      P.n[kind] = (P.n[kind] || 0) + 1;
      if (kind === 'open') {
        if (!P.day.open.includes(key)) P.day.open.push(key);
      } else if (kind === 'comment') {
        P.day.comment++;
        if (extra.wasStale) P.day.staleFix++;
      }
      P.xp += gain;
      if (gain) fx.pop(`+${fa(gain)}`);
      let bonus = 0;
      quests().forEach((q) => {
        if (q.done && !P.day.done[q.id]) {
          P.day.done[q.id] = 1;
          if (!q.auto) {
            bonus += q.xp;
            setTimeout(() => (fx.pop(`مأموریت کامل شد  +${fa(q.xp)}`, { kind: 'quest' }), fx.confetti({ count: 70, spread: 0.8, chip: true })), 500);
          }
        }
      });
      P.xp += bonus;
      if (quests().every((q) => q.done) && !P.flags.allQuests) {
        P.flags.allQuests = 1;
        setTimeout(() => (SFR.toast('هر سه مأموریت امروز تمام شد!', 'ok'), fx.confetti({ count: 170, chip: true })), 1100);
      }
      const after = G.me().level;
      if (after > before) setTimeout(() => G.levelUp(after), 900);
      P.level = after;
      G.checkBadges();
      save();
      G.paint(true);
    },

    /* ---------- UI ---------- */
    ring(info, size = 44, stroke = 3.5) {
      const r = (size - stroke) / 2;
      const c = 2 * Math.PI * r;
      return `<svg class="lv-ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${stroke}" class="lv-track"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${stroke}" class="lv-arc" stroke-linecap="round" stroke-dasharray="${(info.pct / 100) * c} ${c}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>`;
    },

    chipHtml() {
      if (!P || !S.me) return '';
      const m = G.me();
      return `${G.ring(m, 44)}<span class="player-av">${SFR.avatar(S.me, 'md')}</span>
        <span class="player-text"><b>سطح ${fa(m.level)}<i>${esc(m.name)}</i></b><small>${fa(Math.round(m.into))} / ${fa(Math.round(m.span))} امتیاز</small></span>
        <span class="streak${m.streak >= 3 ? ' is-hot' : ''}" data-hint="${fa(m.streak)} روز پشت‌سرهم سر زده‌ای">${icon('flame', 16)}<b>${fa(m.streak)}</b></span>`;
    },

    paint(bump) {
      const el = SFR.root?.querySelector('.player');
      if (!el || !P || !S.me) return;
      el.innerHTML = G.chipHtml();
      el.hidden = false;
      if (bump && !reduce()) {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      }
      const pop = SFR.root.querySelector('.popover.pop-player:not([hidden])');
      if (pop) pop.innerHTML = G.panel();
    },

    badgeHtml(b, { mini = false } = {}) {
      const pct = (b.now / b.goal) * 100;
      if (mini) return `<span class="medal${b.done ? ' is-on' : ''}" data-hint="${esc(`${b.name} — ${b.desc}`)}">${icon(b.icon, 18)}</span>`;
      return `<div class="badge-card${b.done ? ' is-on' : ''}${b.scope === 'team' ? ' is-team' : ''}">
        <span class="medal${b.done ? ' is-on' : ''}">${icon(b.done ? b.icon : 'lock', 22)}</span>
        <b>${esc(b.name)}</b><p>${esc(b.desc)}</p>
        <div class="meter"><i style="width:${pct}%"></i></div>
        <small>${b.done ? 'باز شد' : `${fa(Math.round(b.now))} از ${fa(b.goal)}`}${b.scope === 'team' ? ' · دستاورد تیمی' : ''}</small>
      </div>`;
    },

    panel() {
      const m = G.me();
      const qs = quests();
      const bs = badgeList();
      const doneQ = qs.filter((q) => q.done).length;
      return `<div class="pp">
        <div class="pp-head">
          <div class="pp-ring">${G.ring(m, 72, 5)}<span class="pp-lv"><b>${fa(m.level)}</b><small>سطح</small></span></div>
          <div class="pp-id"><b>${esc(m.name)}</b><small>${fa(m.xp)} امتیاز · ${fa(Math.round(m.span - m.into))} تا سطح بعد</small>
            <div class="meter"><i style="width:${m.pct}%"></i></div></div>
        </div>
        <div class="pp-split"><span>${icon('rocket', 14)}<b>${fa(m.earned)}</b> از تحویل‌ها</span><span>${icon('hammer', 14)}<b>${fa(m.wip)}</b> از کار در جریان</span><span>${icon('zap', 14)}<b>${fa(m.actions)}</b> از کنش‌ها</span><span class="streak${m.streak >= 3 ? ' is-hot' : ''}">${icon('flame', 14)}<b>${fa(m.streak)}</b> روز پیاپی</span></div>
        <h4>مأموریت‌های امروز<small>${fa(doneQ)} از ${fa(qs.length)}</small></h4>
        <ul class="quests">${qs
          .map(
            (q) => `<li class="${q.done ? 'is-done' : ''}">
              <span class="q-ic">${icon(q.done ? 'check' : q.icon, 16)}</span>
              <div><b>${esc(q.title)}</b>${q.hint && !q.done ? `<small>${esc(q.hint)}</small>` : ''}${q.goal > 1 && !q.done ? `<div class="meter"><i style="width:${(q.now / q.goal) * 100}%"></i></div>` : ''}</div>
              <em>${q.auto ? '✓' : `+${fa(q.xp)}`}</em></li>`
          )
          .join('')}</ul>
        <h4>دستاوردها<small>${fa(bs.filter((b) => b.done).length)} از ${fa(bs.length)}</small></h4>
        <div class="medals">${bs.map((b) => G.badgeHtml(b, { mini: true })).join('')}</div>
        <p class="pp-note">امتیاز تحویل‌ها و کارهای در جریان از جیرا حساب می‌شود؛ وزن سایز عمداً فشرده است تا نداشتن اینیشیتیوی بزرگ جلوی تو را نگیرد. سطحی که گرفته‌ای پس گرفته نمی‌شود. امتیاز کنش‌ها فقط روی همین مرورگر می‌ماند.</p>
      </div>`;
    },
  });
})();

/* app/actions.js */
/* Roadmap Lens — write actions (follow, move month, comment) with optimistic UI. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;

  SFR.toggleFollow = async (key) => {
    const it = SFR.issue(key);
    if (!it || !S.me) return;
    const was = !!it.watching;
    SFR.patch(key, { watching: !was, watchCount: Math.max(0, (it.watchCount || 0) + (was ? -1 : 1)) });
    try {
      if (was) await SFR.api.unwatch(key, S.me.name);
      else {
        await SFR.api.watch(key, S.me.name);
        SFR.markSeen(key);
      }
      SFR.toast(was ? `دنبال کردن ${key} متوقف شد.` : `${key} را دنبال می‌کنید؛ دیدگاه‌های تازه در «دنبال‌شده‌ها» می‌آید.`, 'ok');
      if (!was) SFR.game.award('follow', key);
      SFR.emit('follow');
    } catch (e) {
      SFR.patch(key, { watching: was, watchCount: it.watchCount });
      SFR.toast(`تغییر دنبال‌کردن ناموفق بود: ${e.message}`, 'error');
    }
  };

  SFR.moveIssue = async (key, colId, { silent = false } = {}) => {
    const b = S.board.find((i) => i.key === key);
    const col = S.columns.find((c) => c.id === colId);
    if (!b || !col || S.colOfStatus[b.statusId] === colId) return;
    const prevStatus = b.statusId;
    const prevCol = S.columns.find((c) => c.id === S.colOfStatus[prevStatus]);
    let tr;
    try {
      tr = (await SFR.api.transitions(key)).transitions.find((t) => col.statusIds.includes(String(t.to.id)));
    } catch (e) {
      return SFR.toast(`خواندن گذارهای ${key} ناموفق بود: ${e.message}`, 'error');
    }
    if (!tr) return SFR.toast(`جابه‌جایی ${key} به «${SFR.monthLabel(col.name)[0]}» در گردش‌کار جیرا مجاز نیست.`, 'error');
    SFR.patch(key, { statusId: String(tr.to.id) });
    try {
      await SFR.api.transition(key, tr.id);
      SFR.game.award('move', key);
      if (!silent)
        SFR.toast(`${key} به «${SFR.monthLabel(col.name)[0]}» رفت.`, 'ok', {
          label: 'برگرداندن',
          run: () => SFR.moveIssue(key, prevCol.id, { silent: true }),
        });
    } catch (e) {
      SFR.patch(key, { statusId: prevStatus });
      SFR.toast(`جیرا جابه‌جایی را نپذیرفت: ${e.message}`, 'error');
    }
  };

  /** Comment text uses "@Display Name" in the composer; we convert known mentions to Jira [~username]. */
  SFR.postComment = async (key, text, mentions) => {
    let body = text;
    [...mentions.entries()]
      .sort((a, b) => b[0].length - a[0].length)
      .forEach(([display, username]) => {
        body = body.split(`@${display}`).join(`[~${username}]`);
      });
    const c = await SFR.api.addComment(key, body);
    const it = S.rest.get(key);
    const wasStale = !!it && it.poc?.name === S.me.name && SFR.isStale(it);
    if (it)
      SFR.patch(key, {
        commentCount: (it.commentCount || 0) + 1,
        lastComment: { author: S.me.name, authorName: S.me.display, avatar: S.me.avatar, created: c.created, body },
      });
    SFR.game.award('comment', key, { wasStale });
    return c;
  };
})();

/* app/views/board.js */
/* Roadmap Lens — board: toolbar, kanban by delivery month, table view. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;
  const PAGE = 40;

  /* ---------- toolbar ---------- */
  function toolbar(visible) {
    const u = S.ui;
    const quick = S.cfg.quickFilters.filter((f) => SFR.groupOfQf(f.name) === 'quick');
    const people = SFR.people();
    const owner = people.find((p) => p.name === u.owner);
    const nonQuickActive = u.qf.filter((id) => SFR.groupOfQf(S.cfg.quickFilters.find((f) => f.id === id)?.name || '') !== 'quick');
    const counts = Object.fromEntries(SFR.STATUS.map((s) => [s.key, 0]));
    visible.forEach((i) => counts[i.status]++);

    const chips = u.qf
      .map((id) => S.cfg.quickFilters.find((f) => f.id === id))
      .filter(Boolean)
      .map((f) => `<button class="chip is-on" data-act="qf" data-id="${f.id}">${esc(SFR.qfLabel(f.name))}${icon('x', 12)}</button>`);
    if (owner) chips.push(`<button class="chip is-on" data-act="owner" data-name="">${SFR.avatar(owner, 'xs')}${esc(owner.display)}${icon('x', 12)}</button>`);
    if (u.search) chips.push(`<button class="chip is-on" data-act="clear-search">«${esc(u.search)}»${icon('x', 12)}</button>`);

    return `<div class="toolbar">
      <div class="tb-row">
        <label class="search">${icon('search', 16)}<input type="search" data-bind="search" value="${esc(u.search)}" placeholder="جست‌وجوی عنوان، کلید، اپیک، مسئول…" aria-label="جست‌وجو در بورد"><kbd>/</kbd></label>
        <button class="btn btn-outline${nonQuickActive.length ? ' is-active' : ''}" data-act="open-filters" aria-haspopup="dialog">${icon('list-filter', 16)}فیلترها${
          nonQuickActive.length ? SFR.count(nonQuickActive.length) : ''
        }</button>
        <div class="seg-group" role="group" aria-label="میان‌بُرها">${quick
          .map((f) => `<button class="chip${u.qf.includes(f.id) ? ' is-on' : ''}" data-act="qf" data-id="${f.id}">${esc(SFR.qfLabel(f.name))}</button>`)
          .join('')}
          <button class="chip${u.onlyFollowed ? ' is-on' : ''}" data-act="only-followed">${icon('star', 14)}دنبال‌شده‌ها</button>
        </div>
        <span class="grow"></span>
        <div class="facepile" role="group" aria-label="فیلتر بر اساس مسئول">
          ${people
            .slice(0, 6)
            .map(
              (p) =>
                `<button class="face${u.owner === p.name ? ' is-on' : ''}" data-act="owner" data-name="${esc(p.name)}" data-hint="${esc(`${p.display} · ${fa(p.count)} اینیشیتیو`)}">${SFR.avatar(p, 'sm')}</button>`
            )
            .join('')}
          <button class="face more" data-act="open-people" aria-label="همه‌ی مسئول‌ها" data-hint="همه‌ی مسئول‌ها">${icon('users', 16)}</button>
        </div>
      </div>
      <div class="tb-row tb-sub">
        <div class="status-filter" role="group" aria-label="فیلتر وضعیت">
          ${SFR.STATUS.map(
            (s) =>
              `<button class="sf sf-${s.key}${u.status.includes(s.key) ? ' is-on' : ''}" data-act="status" data-key="${s.key}" aria-pressed="${u.status.includes(s.key)}"><i class="dot"></i>${s.short}<b>${fa(
                counts[s.key]
              )}</b></button>`
          ).join('')}
        </div>
        ${chips.length ? `<div class="active-chips">${chips.join('')}<button class="link" data-act="clear-all">پاک کردن همه</button></div>` : ''}
        <span class="grow"></span>
        <span class="result-count">${S.qfLoading ? `${icon('refresh-cw', 14, 'spin')} در حال فیلتر…` : `${fa(visible.length)} اینیشیتیو`}</span>
        <button class="btn btn-ghost btn-sm${u.hideBacklog ? '' : ' is-active'}" data-act="toggle-backlog" aria-pressed="${!u.hideBacklog}">${icon(u.hideBacklog ? 'eye-off' : 'eye', 16)}بک‌لاگ</button>
        <div class="switch" role="tablist" aria-label="نوع نمایش">
          <button role="tab" aria-selected="${u.view === 'kanban'}" data-act="view" data-v="kanban">${icon('square-kanban', 16)}کانبان</button>
          <button role="tab" aria-selected="${u.view === 'table'}" data-act="view" data-v="table">${icon('table-2', 16)}جدول</button>
          <button role="tab" aria-selected="${u.view === 'gantt'}" data-act="view" data-v="gantt">${icon('chart-gantt', 16)}گانت</button>
        </div>
      </div>
    </div>`;
  }

  /* ---------- cards ---------- */
  function card(i, idx = 0, boss = null) {
    const news = SFR.hasNews(i);
    const isBoss = boss === i.key;
    const win = i.status === 'done' && (S.wins.has(i.key) || SFR.daysSince(i.updated) <= 7);
    const epic = i.epic || i.battle || '';
    const t = SFR.splitTitle(i.summary);
    return `<article class="card st-${i.status}${news ? ' has-news' : ''}${isBoss ? ` boss${i.status === 'done' ? ' is-slain' : ''}` : ''}${win ? ' win' : ''}" style="--i:${Math.min(idx, 9)}" draggable="true" data-key="${esc(i.key)}" tabindex="0" aria-label="${esc(`${i.key} ${i.summary}`)}">
      <div class="card-top">
        ${SFR.statusPill(i.status, { short: true })}
        ${i.delayed ? `<span class="pill pill-late">${icon('clock', 12)}تأخیر</span>` : ''}
        ${isBoss ? `<span class="pill pill-boss" data-hint="${i.status === 'done' ? 'بزرگ‌ترین کار این ماه و تحویل شد' : 'بزرگ‌ترین کار این ماه؛ هنوز تحویل نشده'}">${icon(i.status === 'done' ? 'crown' : 'flame', 12)}${i.status === 'done' ? 'بزرگ‌ترینِ ماه · تحویل' : 'بزرگ‌ترینِ ماه'}</span>` : ''}
        ${win ? `<span class="spark" data-hint="تازه تحویل شد">${icon('sparkles', 14)}</span>` : ''}
        <span class="grow"></span>
        ${SFR.keyChip(i.key)}
        <button class="star${i.watching ? ' is-on' : ''}" data-act="follow" data-key="${esc(i.key)}" aria-pressed="${!!i.watching}" aria-label="${i.watching ? 'لغو دنبال کردن' : 'دنبال کردن'}">${icon('star', 16)}</button>
      </div>
      <h3 class="card-title" dir="auto">${esc(t.title)}</h3>
      ${t.tags.length ? `<div class="card-tags">${t.tags.slice(0, 3).map((x) => `<bdi dir="auto">${esc(x)}</bdi>`).join('')}</div>` : ''}
      ${epic ? `<div class="card-epic" dir="auto">${icon('layers', 12)}<span>${esc(epic)}</span></div>` : ''}
      <div class="card-foot">
        ${SFR.avatar(i.poc, 'xs')}<span class="owner">${esc(SFR.firstName(i.poc?.display) || 'بدون مسئول')}</span>
        ${SFR.sizeChip(i.size)}
        <span class="grow"></span>
        ${i.commentCount ? `<span class="meta${news ? ' is-new' : ''}">${icon('message-square', 14)}${fa(i.commentCount)}</span>` : ''}
        ${news ? `<span class="news-dot" aria-label="دیدگاه تازه"></span>` : ''}
      </div>
    </article>`;
  }

  function column(col, items, bossKey) {
    const [title, sub] = SFR.monthLabel(col.name);
    const isBacklog = SFR.monthKey(col.name) === 'backlog';
    const current = SFR.isCurrentMonth(col.name);
    const limit = S.ui.colLimit[col.id] || PAGE;
    const dist = SFR.STATUS.map((s) => ({ s, n: items.filter((i) => i.status === s.key).length })).filter((x) => x.n);
    const done = items.filter((i) => i.status === 'done' || i.status === 'devdone').length;
    const season = SFR.seasonOf(col.name);
    const clear = !isBacklog && items.length > 0 && done === items.length;

    if (isBacklog && S.ui.hideBacklog)
      return `<button class="column rail" data-act="toggle-backlog" aria-label="نمایش بک‌لاگ">${icon('chevron-left', 16)}<span>${title}</span><b>${fa(items.length)}</b></button>`;

    return `<section class="column${current ? ' is-current' : ''}${isBacklog ? ' is-backlog' : ''}${season ? ` ss-${season.key}` : ''}${clear ? ' is-clear' : ''}${S.anim.popCol === col.id ? ' pop' : ''}" data-col="${col.id}" aria-label="${esc(title)}">
      <header class="col-head">
        <div class="col-title"><b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}${current ? '<span class="now">این ماه</span>' : season ? `<span class="season">${icon(season.icon, 12)}${season.label}</span>` : ''}<span class="grow"></span>${SFR.count(items.length)}</div>
        ${
          items.length
            ? `<div class="col-dist" data-tip="${esc(
                `<b>${esc(title)}</b>` + dist.map((x) => `<span class="tt-row"><i style="background:var(--s-${x.s.key})"></i>${x.s.label}<em>${fa(x.n)}</em></span>`).join('')
              )}">${dist.map((x) => `<i style="flex:${x.n};background:var(--s-${x.s.key})"></i>`).join('')}</div>
               ${!isBacklog ? `<div class="col-done">${miniRing(done / items.length)}<span>${fa(done)} از ${fa(items.length)} تحویل‌شده</span>${clear ? `<em class="clear-tag">${icon('trophy', 12)}ماه کامل</em>` : ''}</div>` : ''}`
            : '<div class="col-dist is-none"></div>'
        }
      </header>
      <div class="col-body" data-drop="${col.id}">
        ${items.length ? items.slice(0, limit).map((it, idx) => card(it, idx, bossKey)).join('') : `<div class="col-empty">${icon('inbox', 20)}موردی نیست</div>`}
        ${items.length > limit ? `<button class="more" data-act="more" data-col="${col.id}">نمایش ${fa(Math.min(PAGE, items.length - limit))} مورد دیگر · ${fa(items.length - limit)} باقی‌مانده</button>` : ''}
      </div>
    </section>`;
  }

  const miniRing = (ratio) => {
    const r = 7;
    const c = 2 * Math.PI * r;
    return `<svg class="mini-ring" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="${r}" class="mr-track"/>${ratio > 0 ? `<circle cx="10" cy="10" r="${r}" class="mr-arc" transform="rotate(-90 10 10)" stroke-dasharray="${(ratio * c).toFixed(1)} ${c.toFixed(1)}"/>` : ''}</svg>`;
  };

  function kanban(visible) {
    const by = {};
    S.columns.forEach((c) => (by[c.id] = []));
    visible.forEach((i) => by[S.colOfStatus[i.statusId]]?.push(i));
    // The boss of a month is decided from the whole board, so filters never move the crown.
    const boss = SFR.game.bosses(SFR.boardRows().filter((i) => i.size));
    return `<div class="kanban${S.anim.board ? '' : ' enter'}" data-scroll="kanban">${S.columns.map((c) => column(c, by[c.id], boss.get(c.id)?.key)).join('')}</div>`;
  }

  /* ---------- table ---------- */
  const COLS = [
    { by: 'key', label: 'کلید', get: (i) => i.key },
    { by: 'summary', label: 'عنوان', get: (i) => i.summary },
    { by: 'status', label: 'وضعیت', get: (i) => SFR.STATUS.findIndex((s) => s.key === i.status) },
    { by: 'month', label: 'ماه تحویل', get: (i) => S.columns.findIndex((c) => c.id === S.colOfStatus[i.statusId]) },
    { by: 'fn', label: 'فانکشن', get: (i) => (i.fn || [])[0] || '' },
    { by: 'poc', label: 'مسئول', get: (i) => i.poc?.display || '' },
    { by: 'size', label: 'سایز', get: (i) => ['XS', 'S', 'M', 'L', 'XL', 'XXL'].indexOf(i.size) },
    { by: 'comments', label: 'دیدگاه', get: (i) => i.commentCount || 0 },
    { by: 'updated', label: 'به‌روزرسانی', get: (i) => i.updated || '' },
  ];
  function table(visible) {
    const { by, dir } = S.ui.sort;
    const col = COLS.find((c) => c.by === by);
    const rows = by === 'rank' || !col ? visible : [...visible].sort((a, b) => (col.get(a) > col.get(b) ? 1 : col.get(a) < col.get(b) ? -1 : 0) * dir);
    const shown = rows.slice(0, S.ui.colLimit.table || 200);
    return `<div class="table-wrap"><table class="grid-table">
      <thead><tr>${COLS.map(
        (c) =>
          `<th aria-sort="${c.by === by ? (dir > 0 ? 'ascending' : 'descending') : 'none'}"><button data-act="sort" data-by="${c.by}">${c.label}${
            c.by === by ? icon(dir > 0 ? 'chevron-down' : 'chevron-down', 14, dir > 0 ? '' : 'flip-y') : ''
          }</button></th>`
      ).join('')}<th><span class="sr">دنبال</span></th></tr></thead>
      <tbody>${shown
        .map((i) => {
          const c = S.columns.find((x) => x.id === S.colOfStatus[i.statusId]);
          return `<tr data-key="${esc(i.key)}" tabindex="0" class="${SFR.hasNews(i) ? 'has-news' : ''}">
            <td>${SFR.keyChip(i.key)}</td>
            <td class="t-title" dir="auto">${esc(SFR.splitTitle(i.summary).title)}${i.delayed ? ` <span class="pill pill-late">${icon('clock', 12)}تأخیر</span>` : ''}</td>
            <td>${SFR.statusPill(i.status, { short: true })}</td>
            <td>${c ? esc(SFR.monthLabel(c.name)[0]) : ''}</td>
            <td dir="auto">${esc((i.fn || []).join('، '))}</td>
            <td><span class="who">${SFR.avatar(i.poc, 'xs')}${esc(i.poc?.display || '—')}</span></td>
            <td>${SFR.sizeChip(i.size, { icon: false }) || '—'}</td>
            <td class="num">${i.commentCount ? fa(i.commentCount) : '—'}</td>
            <td class="muted">${SFR.ago(i.updated)}</td>
            <td><button class="star${i.watching ? ' is-on' : ''}" data-act="follow" data-key="${esc(i.key)}" aria-label="${i.watching ? 'لغو دنبال کردن' : 'دنبال کردن'}">${icon('star', 16)}</button></td>
          </tr>`;
        })
        .join('')}</tbody></table>
      ${rows.length > shown.length ? `<button class="more" data-act="more" data-col="table">نمایش ۲۰۰ ردیف بعدی · ${fa(rows.length - shown.length)} باقی‌مانده</button>` : ''}
      ${rows.length ? '' : SFR.empty('نتیجه‌ای پیدا نشد', 'فیلترها را سبک‌تر کنید یا جست‌وجو را تغییر دهید.', 'search')}
    </div>`;
  }

  /* ---------- filter popovers ---------- */
  SFR.filtersPanel = () => {
    const groups = SFR.QF_GROUPS.filter((g) => g.id !== 'quick').concat([{ id: 'other', label: 'سایر' }]);
    const by = {};
    S.cfg.quickFilters.forEach((f) => (by[SFR.groupOfQf(f.name)] ||= []).push(f));
    return `<div class="pop-head"><b>فیلترهای بورد</b><span class="muted">داخل هر گروه «یا»، بین گروه‌ها «و»</span></div>
      <label class="search sm">${icon('search', 14)}<input type="search" data-bind="qf-search" placeholder="جست‌وجو در ${fa(S.cfg.quickFilters.length)} فیلتر…"></label>
      <div class="pop-body">${groups
        .filter((g) => by[g.id]?.length)
        .map(
          (g) => `<section class="fgroup" data-group="${g.id}"><h4>${g.label}<small>${fa(by[g.id].filter((f) => S.ui.qf.includes(f.id)).length || '')}</small></h4><div class="chips">${by[g.id]
            .map((f) => `<button class="chip${S.ui.qf.includes(f.id) ? ' is-on' : ''}" data-act="qf" data-id="${f.id}" data-name="${esc(SFR.norm(f.name + ' ' + SFR.qfLabel(f.name)))}" dir="auto">${esc(SFR.qfLabel(f.name))}</button>`)
            .join('')}</div></section>`
        )
        .join('')}</div>
      <div class="pop-foot"><button class="btn btn-ghost btn-sm" data-act="clear-qf">پاک کردن فیلترها</button><button class="btn btn-primary btn-sm" data-act="close-pop">بستن</button></div>`;
  };

  SFR.peoplePanel = () =>
    `<div class="pop-head"><b>مسئول (Product PoC)</b></div>
     <label class="search sm">${icon('search', 14)}<input type="search" data-bind="people-search" placeholder="جست‌وجوی نام…"></label>
     <div class="pop-body people">
       <button class="person${!S.ui.owner ? ' is-on' : ''}" data-act="owner" data-name="">${icon('users', 16)}<span>همه</span></button>
       ${SFR.people()
         .map(
           (p) =>
             `<button class="person${S.ui.owner === p.name ? ' is-on' : ''}" data-act="owner" data-name="${esc(p.name)}" data-search="${esc(SFR.norm(p.display))}">${SFR.avatar(p, 'sm')}<span dir="auto">${esc(
               p.display
             )}</span><b>${fa(p.count)}</b></button>`
         )
         .join('')}
     </div>`;

  SFR.renderBoard = (el) => {
    if (S.status !== 'ready') return;
    if (S.ui.view === 'gantt' && SFR.gantt.dragging()) return; // never redraw under a bar being dragged
    const visible = SFR.visibleIssues();
    const ganttKeep = SFR.ganttScroll(el);
    const scroller = el.querySelector('[data-scroll="kanban"]');
    const keep = scroller ? scroller.scrollLeft : null;
    const colScroll = {};
    el.querySelectorAll('.col-body[data-drop]').forEach((b) => (colScroll[b.dataset.drop] = b.scrollTop));
    const prevSearch = el.querySelector('input[data-bind="search"]');
    const focusSearch = !!prevSearch && prevSearch === el.getRootNode().activeElement;
    el.innerHTML = toolbar(visible) + (S.ui.view === 'table' ? table(visible) : S.ui.view === 'gantt' ? SFR.ganttView(visible) : kanban(visible));
    if (S.ui.view === 'gantt') SFR.ganttAfter(el, ganttKeep);
    if (S.ui.view === 'kanban') S.anim.board = true;
    S.anim.popCol = null;
    const k = el.querySelector('[data-scroll="kanban"]');
    if (k && keep != null) k.scrollLeft = keep;
    if (k) {
      k.querySelectorAll('.col-body[data-drop]').forEach((b) => (b.scrollTop = colScroll[b.dataset.drop] || 0));
      if (!SFR._scrolledToNow) {
        SFR._scrolledToNow = true;
        k.querySelector('.column.is-current')?.scrollIntoView({ inline: 'center', block: 'nearest' });
      }
    }
    if (focusSearch) {
      const inp = el.querySelector('input[data-bind="search"]');
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
    }
  };
})();

/* app/views/drawer.js */
/* Roadmap Lens — issue drawer: hero, timeline (start / target end / estimated end), facts that can be edited in place,
 * description, comment thread + composer. Fields are editable only when Jira's editmeta says this user may change them. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;
  const cal = SFR.cal;

  const D = (SFR.drawer = { key: null, detail: null, comments: null, watchers: null, meta: null, ed: null, mentions: new Map(), draft: {} });

  /* ---------- which fields can be edited, and how ---------- */
  const F = SFR.FIELDS;
  const EDIT = {
    summary: { id: 'summary', kind: 'text', label: 'عنوان' },
    description: { id: 'description', kind: 'longtext', label: 'توضیحات' },
    start: { id: F.start, kind: 'date', label: 'تاریخ شروع' },
    end: { id: F.end, kind: 'date', label: 'پایان هدف' },
    poc: { id: F.poc, kind: 'user', label: 'مسئول محصول' },
    size: { id: F.size, kind: 'option', label: 'سایز' },
    strategic: { id: F.strategic, kind: 'option', label: 'نوع استراتژیک' },
    domain: { id: F.domain, kind: 'option', label: 'دامنه' },
    reach: { id: F.reach, kind: 'option', label: 'پوشش کاربران' },
    confidence: { id: F.confidence, kind: 'option', label: 'اطمینان' },
    progress: { id: F.progress, kind: 'option', label: 'پیشرفت' },
    estimation: { id: F.estimation, kind: 'option', label: 'تخمین پایان' },
    impact: { id: F.impact, kind: 'number', label: 'اثر' },
    cycle: { id: F.cycle, kind: 'multi', label: 'سیکل' },
    labels: { id: 'labels', kind: 'labels', label: 'برچسب‌ها' },
    brd: { id: F.brd, kind: 'link', label: 'سند BRD' },
    prd: { id: F.prd, kind: 'link', label: 'سند PRD' },
  };
  /* a pencil shows only if Jira says THIS user may edit THIS field on THIS issue:
     the Edit Issues permission, the field present in editmeta, and the "set" operation allowed */
  const canEdit = (fk) => {
    if (!D.meta || D.perms?.edit === false) return false;
    const m = D.meta[EDIT[fk].id];
    return !!m && (!Array.isArray(m.operations) || m.operations.includes('set'));
  };
  const canComment = () => D.perms?.comment !== false;
  const allowed = (fk) => D.meta?.[EDIT[fk].id]?.allowedValues || [];
  const optLabel = (v) => v.value ?? v.name ?? v.label ?? String(v.id);
  const rawField = (fk) => D.detail?.fields?.[EDIT[fk].id];

  const pen = (fk) => (canEdit(fk) && !D.ed ? `<button class="pen" data-act="ed-open" data-f="${fk}" aria-label="ویرایش ${esc(EDIT[fk].label)}" data-hint="ویرایش">${icon('pencil', 14)}</button>` : '');
  const empty = (txt = 'تعیین نشده') => `<span class="unset">${txt}</span>`;

  /* ---------- timeline numbers ---------- */
  const isDone = (it) => it.status === 'done' || it.status === 'devdone';
  const rel = (n, past, future) => (n === 0 ? 'امروز' : n > 0 ? `${fa(n)} روز ${future}` : `${fa(-n)} روز ${past}`);

  function timeline(it) {
    const today = cal.today();
    const pts = [it.start, it.end].map(cal.parse).filter(Boolean);
    if (!pts.length) return '';
    const done = isDone(it);
    const all = [...pts, ...(done ? [] : [today])];
    const lo = Math.min(...all);
    const hi = Math.max(...all);
    const span = Math.max(hi - lo, 864e5 * 7);
    const pos = (d) => 6 + ((d - lo) / span) * 88; // % from the start side (right edge in RTL)
    const s = cal.parse(it.start);
    const e = cal.parse(it.end);
    const fillTo = done ? hi : Math.min(Math.max(today, s || today), hi);
    const fillFrom = s ? pos(s) : pos(lo);
    const m = (cls, d, label, ic) =>
      d ? `<span class="tl-m ${cls}" style="inset-inline-start:${pos(d).toFixed(2)}%" data-hint="${esc(label)}">${ic || ''}</span>` : '';
    return `<div class="tl" role="img" aria-label="خط زمان شروع، امروز و پایان">
      <div class="tl-track">
        <i class="tl-fill" style="inset-inline-start:${fillFrom.toFixed(2)}%;width:${Math.max(0, pos(fillTo) - fillFrom).toFixed(2)}%"></i>
        ${m('is-start', s, `شروع · ${cal.full(it.start)}`)}
        ${m('is-end', e, `پایان هدف · ${cal.full(it.end)}`, icon('flag', 12))}
        ${done ? '' : m('is-today', today, 'امروز')}
      </div>
      <div class="tl-key"><span><i class="k-start"></i>شروع</span><span><i class="k-today"></i>امروز</span><span>${icon('flag', 11)}پایان هدف</span></div>
    </div>`;
  }

  function stateChip(it) {
    const today = cal.today();
    if (isDone(it)) return `<span class="st-chip is-ok">${icon('check', 12)}تحویل شده</span>`;
    const e = cal.parse(it.end);
    if (!e) return `<span class="st-chip">پایانِ هدف هنوز تعیین نشده</span>`;
    const d = cal.diff(e, today);
    if (d < 0) return `<span class="st-chip is-late">${icon('clock', 12)}${rel(d, 'از موعد گذشته', '')}</span>`;
    return `<span class="st-chip ${d <= 3 ? 'is-soon' : 'is-ok'}">${d === 0 ? 'امروز موعد است' : `${fa(d)} روز تا پایان`}</span>`;
  }

  function dateTile(fk, it, { iconName, tone }) {
    const iso = it[fk];
    const editing = D.ed?.f === fk;
    const today = cal.today();
    const dd = iso ? cal.diff(cal.parse(iso), today) : null;
    return `<div class="dt ${tone}${editing ? ' is-editing' : ''}" data-field="${fk}">
      <div class="dt-top"><span class="dt-ic">${icon(iconName, 15)}</span><span class="dt-label">${EDIT[fk].label}</span>${pen(fk)}</div>
      ${
        iso
          ? `<b class="dt-date">${esc(cal.full(iso))}</b><small>${esc(cal.weekday(iso))} · ${rel(dd, 'پیش', 'دیگر')}</small>`
          : `<b class="dt-date is-empty">—</b><small>${canEdit(fk) ? 'با مداد تعیین کنید' : 'هنوز تعیین نشده'}</small>`
      }
    </div>`;
  }

  /** «Estimation» is a month the team picks on the card (Jan … Dec). It is compared with the month of the target end. */
  const monthFa = (name) => SFR.monthLabel(name)[0];
  const monthNo = (name) => ({ jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 })[String(name || '').slice(0, 3).toLowerCase()];
  function estTile(it) {
    const editing = D.ed?.f === 'estimation';
    const m = monthNo(it.estimation);
    const e = cal.parse(it.end);
    let chip = '';
    if (m != null && e) {
      const gap = ((m - e.getUTCMonth() + 18) % 12) - 6; // months after the target end's month, wrapped to −6…+5
      chip = gap > 0 ? `<span class="st-chip is-late">${fa(gap)} ماه بعد از ماهِ پایان هدف</span>` : gap < 0 ? `<span class="st-chip is-ok">${fa(-gap)} ماه زودتر از پایان هدف</span>` : `<span class="st-chip is-ok">هم‌ماه با پایان هدف</span>`;
    }
    return `<div class="dt tone-est${editing ? ' is-editing' : ''}" data-field="estimation">
      <div class="dt-top"><span class="dt-ic">${icon('gauge', 15)}</span><span class="dt-label">تخمین پایان</span>${pen('estimation')}</div>
      ${
        m != null
          ? `<b class="dt-date">${esc(monthFa(it.estimation))}</b><small>${esc(SFR.monthLabel(it.estimation)[1])} · ماهی که تیم تخمین زده</small>${chip}`
          : `<b class="dt-date is-empty">—</b><small>${canEdit('estimation') ? 'با مداد ماه را انتخاب کنید' : 'هنوز تخمین زده نشده'}</small>`
      }
    </div>`;
  }

  /* ---------- editors ---------- */
  function calendar() {
    const { jy, jm } = D.ed.cal;
    const first = cal.fromJ(jy, jm, 1);
    const lead = (first.getUTCDay() + 1) % 7; // Saturday = 0
    const len = cal.monthLen(jy, jm);
    const today = cal.iso(cal.today());
    const cur = (D.ed.f && D.ed.cur) || '';
    const days = [];
    for (let i = 0; i < lead; i++) days.push('<span></span>');
    for (let d = 1; d <= len; d++) {
      const iso = cal.iso(cal.add(first, d - 1));
      const col = (lead + d - 1) % 7;
      days.push(
        `<button class="cd${iso === today ? ' is-today' : ''}${iso === cur ? ' is-sel' : ''}${col === 6 ? ' is-fri' : ''}" data-act="cal-pick" data-iso="${iso}" aria-label="${esc(cal.full(iso))}">${fa(d)}</button>`
      );
    }
    return `<div class="cal" role="dialog" aria-label="انتخاب تاریخ">
      <div class="cal-head">
        <button class="icon-btn" data-act="cal-nav" data-d="-1" aria-label="ماه قبل">${icon('chevron-right', 16)}</button>
        <b>${cal.MONTHS[jm - 1]} ${fa(String(jy))}</b>
        <button class="icon-btn" data-act="cal-nav" data-d="1" aria-label="ماه بعد">${icon('chevron-left', 16)}</button>
      </div>
      <div class="cal-wd">${cal.WEEKDAYS.map((w, i) => `<span${i === 6 ? ' class="is-fri"' : ''}>${w}</span>`).join('')}</div>
      <div class="cal-grid">${days.join('')}</div>
      <div class="cal-foot">
        <button class="chip chip-sm" data-act="cal-today">امروز</button>
        ${cur ? `<button class="chip chip-sm" data-act="ed-clear">${icon('x', 12)}پاک‌کردن تاریخ</button>` : ''}
        <span class="grow"></span>
        <button class="chip chip-sm" data-act="ed-cancel">انصراف</button>
      </div>
      ${D.ed.error ? `<p class="ed-err">${esc(D.ed.error)}</p>` : ''}
    </div>`;
  }

  const saveRow = (extra = '') =>
    `<div class="ed-foot">${D.ed.error ? `<span class="ed-err">${esc(D.ed.error)}</span>` : ''}<span class="grow"></span>${extra}
      <button class="chip chip-sm" data-act="ed-cancel">انصراف</button>
      <button class="btn btn-primary btn-sm${D.ed.busy ? ' is-busy' : ''}" data-act="ed-save" ${D.ed.busy ? 'disabled' : ''}>${icon('check', 14)}ذخیره</button></div>`;

  function editor(fk, it) {
    const def = EDIT[fk];
    const busy = D.ed.busy ? ' is-busy' : '';
    if (def.kind === 'date') return calendar();
    if (def.kind === 'option') {
      const cur = String(rawField(fk)?.id ?? '');
      const req = D.meta?.[def.id]?.required;
      const chips = allowed(fk)
        .map((v) => {
          const label = optLabel(v);
          const inner = fk === 'size' ? SFR.sizeChip(label, { icon: false }) : fk === 'estimation' ? esc(monthFa(label)) : esc(label);
          return `<button class="ed-opt${String(v.id) === cur ? ' is-on' : ''}${busy}" data-act="ed-opt" data-v="${esc(v.id)}">${inner}</button>`;
        })
        .join('');
      return `<div class="ed"><div class="ed-chips">${chips}${!req && cur ? `<button class="ed-opt is-clear" data-act="ed-opt" data-v="">${icon('x', 12)}بدون مقدار</button>` : ''}</div>
        ${D.ed.error ? `<p class="ed-err">${esc(D.ed.error)}</p>` : ''}<div class="ed-foot"><span class="grow"></span><button class="chip chip-sm" data-act="ed-cancel">انصراف</button></div></div>`;
    }
    if (def.kind === 'multi') {
      const chips = allowed(fk)
        .map((v) => `<button class="ed-opt${D.ed.sel.has(String(v.id)) ? ' is-on' : ''}" data-act="ed-toggle" data-v="${esc(v.id)}" aria-pressed="${D.ed.sel.has(String(v.id))}">${esc(optLabel(v))}</button>`)
        .join('');
      return `<div class="ed"><div class="ed-chips">${chips}</div>${saveRow()}</div>`;
    }
    if (def.kind === 'user') {
      return `<div class="ed">
        <input class="ed-input" data-bind="ed-user" dir="auto" placeholder="نام یا نام‌کاربری را بنویسید…" autocomplete="off" aria-label="جست‌وجوی کاربر">
        <div class="ed-results" role="listbox"></div>
        ${D.ed.error ? `<p class="ed-err">${esc(D.ed.error)}</p>` : ''}
        <div class="ed-foot"><span class="grow"></span>${it.poc ? `<button class="chip chip-sm" data-act="ed-clear">${icon('x', 12)}خالی‌کردن مسئول</button>` : ''}<button class="chip chip-sm" data-act="ed-cancel">انصراف</button></div></div>`;
    }
    if (def.kind === 'longtext')
      return `<div class="ed"><textarea class="ed-input ed-area" data-bind="ed-text" rows="9" dir="auto" aria-label="${esc(def.label)}">${esc(rawField(fk) || '')}</textarea>
        <p class="hint">متن به قالبِ جیرا ذخیره می‌شود (مثلاً <code dir="ltr">*bold*</code> یا <code dir="ltr">* item</code>) · <kbd>Ctrl</kbd>+<kbd>Enter</kbd> ذخیره</p>${saveRow()}</div>`;
    const raw = fk === 'labels' ? (rawField(fk) || []).join(' ') : fk === 'cycle' ? '' : String(rawField(fk) ?? (fk === 'summary' ? it.summary : '') ?? '');
    const dir = def.kind === 'link' || fk === 'labels' || def.kind === 'number' ? 'ltr' : 'auto';
    const hint = fk === 'labels' ? '<p class="hint">برچسب‌ها را با فاصله جدا کنید.</p>' : '';
    return `<div class="ed"><input class="ed-input" data-bind="ed-text" dir="${dir}" value="${esc(raw)}" aria-label="${esc(def.label)}"${def.kind === 'number' ? ' inputmode="decimal"' : ''}>${hint}${saveRow()}</div>`;
  }

  /* one labelled fact; the pencil appears only if the user may edit it */
  const fact = (fk, label, valueHtml, it, { ltr = false, wide = false, always = false } = {}) => {
    const editing = D.ed?.f === fk;
    if (!valueHtml && !canEdit(fk) && !always) return '';
    return `<div class="fact${editing ? ' is-editing' : ''}${wide ? ' is-wide' : ''}" data-field="${fk}">
      <dt>${label}${pen(fk)}</dt>
      <dd${ltr ? ' dir="ltr"' : ''}>${valueHtml || empty()}</dd>
      ${editing ? editor(fk, it) : ''}
    </div>`;
  };

  function commentItem(c) {
    const mine = c.author?.name === S.me?.name;
    return `<li class="comment${mine ? ' is-mine' : ''}">
      ${SFR.avatar({ name: c.author?.name, display: c.author?.displayName, avatar: c.author?.avatarUrls?.['32x32'] }, 'md')}
      <div class="bubble">
        <div class="c-head"><b dir="auto">${esc(c.author?.displayName || '')}</b><time title="${esc(SFR.jDateFull(c.created))}">${SFR.ago(c.created)}</time>${
          c.updated && c.updated !== c.created ? '<span class="muted">· ویرایش‌شده</span>' : ''
        }</div>
        <div class="rich" dir="auto">${SFR.sanitize(c.renderedBody || esc(c.body))}</div>
      </div>
    </li>`;
  }

  /* ---------- render ---------- */
  function render() {
    const root = SFR.root.querySelector('.drawer');
    if (!D.key) {
      root.classList.remove('is-open');
      root.setAttribute('aria-hidden', 'true');
      return;
    }
    const it = SFR.issue(D.key) || { key: D.key, summary: '' };
    const det = D.detail;
    const colId = S.colOfStatus[it.statusId];
    const watchers = D.watchers?.watchers || [];
    const comments = D.comments;
    const draft = D.draft[D.key] || '';
    const title = SFR.splitTitle(it.summary);
    const readOnly = D.meta === false || D.perms?.edit === false;
    const panel = root.querySelector('.drawer-panel');
    const keep = panel.querySelector('.d-scroll')?.scrollTop;
    const keepKey = panel.dataset.key;

    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
    panel.dataset.key = D.key;
    panel.innerHTML = `
      <header class="d-head">
        ${SFR.keyChip(it.key)}
        <button class="icon-btn" data-act="copy-link" data-key="${esc(it.key)}" data-hint="کپی لینک">${icon('link', 16)}</button>
        <a class="icon-btn" href="/browse/${encodeURIComponent(it.key)}" target="_blank" rel="noopener" data-hint="باز کردن در جیرا">${icon('external-link', 16)}</a>
        <span class="grow"></span>
        ${readOnly ? `<span class="ro" data-hint="جیرا اجازه‌ی ویرایش این کارت را به شما نمی‌دهد">${icon('lock', 13)}فقط‌خواندنی</span>` : ''}
        <button class="icon-btn" data-act="close-drawer" aria-label="بستن">${icon('x', 18)}</button>
      </header>
      <div class="d-scroll">
        <div class="d-hero st-${esc(it.status || 'todo')}">
          <div class="d-badges">${SFR.statusPill(it.status)}${it.delayed ? `<span class="pill pill-late">${icon('clock', 12)}تأخیر</span>` : ''}${
            it.strategic ? `<span class="pill pill-plain">${esc(SFR.STRATEGIC[it.strategic] || it.strategic)}</span>` : ''
          }${it.size ? SFR.sizeChip(it.size) : ''}</div>
          ${
            D.ed?.f === 'summary'
              ? `<div class="fact is-editing is-title" data-field="summary">${editor('summary', it)}</div>`
              : `<h2 dir="auto">${esc(title.title)}${pen('summary')}</h2>`
          }
          ${title.tags.length ? `<div class="card-tags">${title.tags.map((t) => `<bdi dir="auto">${esc(t)}</bdi>`).join('')}</div>` : ''}
          <div class="follow-row">
            <button class="btn ${it.watching ? 'btn-soft is-active' : 'btn-primary'}" data-act="follow" data-key="${esc(it.key)}" aria-pressed="${!!it.watching}">
              ${icon(it.watching ? 'check' : 'star', 16)}${it.watching ? 'دنبال می‌کنید' : 'دنبال کردن'}</button>
            <div class="watchers" data-hint="${esc(watchers.map((w) => w.displayName).join('، ') || ((D.watchers?.watchCount ?? it.watchCount) ? 'جیرا نام دنبال‌کننده‌ها را به شما نشان نمی‌دهد' : 'هنوز کسی دنبال نمی‌کند'))}">
              ${watchers.slice(0, 5).map((w) => SFR.avatar({ name: w.name, display: w.displayName, avatar: w.avatarUrls?.['24x24'] }, 'sm')).join('')}
              <span class="muted">${fa(D.watchers?.watchCount ?? it.watchCount ?? 0)} دنبال‌کننده</span>
            </div>
          </div>
        </div>

        <section class="d-card d-time">
          <header><h3>${icon('calendar-days', 18)}زمان‌بندی</h3>${stateChip(it)}</header>
          ${timeline(it)}
          <div class="dates">
            ${dateTile('start', it, { iconName: 'play', tone: 'tone-start' })}
            ${dateTile('end', it, { iconName: 'flag', tone: 'tone-end' })}
            ${estTile(it)}
          </div>
          ${D.ed && EDIT[D.ed.f].kind === 'date' ? `<div class="cal-wrap">${calendar()}</div>` : ''}
          ${D.ed?.f === 'estimation' ? editor('estimation', it) : ''}
          <div class="time-foot">
            <label class="mv"><span>${icon('calendar', 14)}ماه تحویل</span>
              <span class="select"><select data-bind="move" data-key="${esc(it.key)}" aria-label="تغییر ماه تحویل">
                ${S.columns.map((c) => `<option value="${c.id}"${c.id === colId ? ' selected' : ''}>${esc(SFR.monthLabel(c.name).join(' · '))}</option>`).join('')}
              </select>${icon('chevron-down', 14)}</span></label>
            ${
              it.progress
                ? `<div class="prog" data-field="progress"><span>پیشرفت</span><span class="prog-bar"><i style="width:${parseInt(it.progress, 10) || 0}%"></i></span><b>${fa(parseInt(it.progress, 10) || 0)}٪</b>${pen('progress')}</div>`
                : canEdit('progress')
                ? `<div class="prog"><span>پیشرفت</span>${empty()}${pen('progress')}</div>`
                : ''
            }
          </div>
          ${D.ed?.f === 'progress' ? editor('progress', it) : ''}
        </section>

        <section class="d-card">
          <header><h3>${icon('users', 18)}مسئولیت و دامنه</h3></header>
          <dl class="facts">
            ${fact('poc', 'مسئول محصول', it.poc ? `<span class="who">${SFR.avatar(it.poc, 'xs')}${esc(it.poc.display)}</span>` : '', it)}
            ${fact('cycle', 'سیکل', (it.cycle || []).map((c) => `<span class="tag" dir="ltr">${esc(c)}</span>`).join(''), it)}
            ${(it.fn || []).length ? `<div class="fact"><dt>فانکشن</dt><dd dir="auto">${esc(it.fn.join('، '))}</dd></div>` : ''}
            ${fact('domain', 'دامنه', esc(it.domain), it)}
            ${it.epic || it.battle ? `<div class="fact is-wide"><dt>اپیک / بتل</dt><dd dir="auto">${esc(it.epic || it.battle)}</dd></div>` : ''}
            ${fact('labels', 'برچسب‌ها', (it.labels || []).map((l) => `<span class="tag" dir="ltr">${esc(l)}</span>`).join(''), it)}
          </dl>
        </section>

        <section class="d-card">
          <header><h3>${icon('gem', 18)}اندازه و ارزش</h3></header>
          <dl class="facts">
            ${fact('size', 'سایز', it.size ? `${SFR.sizeChip(it.size)} <span class="muted">${esc(SFR.SIZE_META[SFR.sizeKey(it.size)]?.fa || '')}</span>` : '', it)}
            ${fact('strategic', 'نوع استراتژیک', esc(SFR.STRATEGIC[it.strategic] || it.strategic), it)}
            ${fact('confidence', 'اطمینان', esc(SFR.fa(it.confidence)), it)}
            ${fact('reach', 'پوشش کاربران', esc(SFR.fa(it.reach)), it)}
            ${fact('impact', 'اثر', rawField('impact') != null && rawField('impact') !== '' ? esc(SFR.fa(String(rawField('impact')))) : '', it)}
            ${fact('brd', 'سند BRD', it.brd ? `<a href="${esc(it.brd)}" target="_blank" rel="noopener">${icon('file-text', 14)}باز کردن سند</a>` : '', it)}
            ${fact('prd', 'سند PRD', it.prd ? `<a href="${esc(it.prd)}" target="_blank" rel="noopener">${icon('file-text', 14)}باز کردن سند</a>` : '', it)}
            ${it.created ? `<div class="fact"><dt>ایجاد</dt><dd><span title="${esc(SFR.jDateFull(it.created))}">${SFR.ago(it.created)}</span></dd></div>` : ''}
          </dl>
        </section>

        ${
          det === null
            ? '<div class="skel-block"></div>'
            : D.ed?.f === 'description'
            ? `<section class="d-section"><h3>توضیحات</h3>${editor('description', it)}</section>`
            : det?.renderedFields?.description || canEdit('description')
            ? `<section class="d-section"><h3>توضیحات${pen('description')}</h3>${
                det?.renderedFields?.description
                  ? `<div class="rich clamp" dir="auto">${SFR.sanitize(det.renderedFields.description)}</div><button class="link" data-act="expand-desc">نمایش کامل</button>`
                  : empty('هنوز توضیحی نوشته نشده')
              }</section>`
            : ''
        }

        <section class="d-section">
          <h3>گفت‌وگو ${comments ? SFR.count(comments.length) : ''}</h3>
          ${
            comments === null
              ? '<div class="skel-block"></div><div class="skel-block"></div>'
              : comments.length
              ? `<ol class="thread">${comments.map(commentItem).join('')}</ol>`
              : SFR.empty('هنوز دیدگاهی ثبت نشده', 'اولین به‌روزرسانی یا سؤال را شما بنویسید.', 'message-square')
          }
        </section>
      </div>

      ${!canComment() ? `<div class="composer is-locked">${icon('lock', 14)}<span>شما اجازهٔ ثبت دیدگاه روی این کارت را ندارید.</span></div>` : `<form class="composer" data-form="comment" data-key="${esc(it.key)}">
        <div class="templates" role="group" aria-label="شروع سریع">
          ${['به‌روزرسانی وضعیت: ', 'سؤال: ', 'ریسک/مانع: ', 'تصمیم: ']
            .map((t) => `<button type="button" class="chip chip-sm" data-act="template" data-text="${esc(t)}">${esc(t.replace(': ', ''))}</button>`)
            .join('')}
        </div>
        <div class="field">
          <textarea data-bind="comment" rows="3" dir="auto" placeholder="دیدگاه بنویسید… با @ هم‌تیمی‌ها را صدا بزنید" aria-label="متن دیدگاه">${esc(draft)}</textarea>
          <div class="mention-pop" hidden role="listbox" aria-label="پیشنهاد هم‌تیمی"></div>
        </div>
        <div class="composer-foot">
          <span class="muted hint">${icon('at-sign', 14)}نام‌بردن · <kbd>Ctrl</kbd>+<kbd>Enter</kbd> ارسال</span>
          <span class="grow"></span>
          <button class="btn btn-primary" type="submit">${icon('send', 16, 'flip-x')}ارسال</button>
        </div>
      </form>`}`;
    const sc = panel.querySelector('.d-scroll');
    if (keepKey !== D.key) sc.classList.add('is-fresh');
    if (keep != null && keepKey === D.key) sc.scrollTop = keep;
    if (D.ed?.focus) {
      D.ed.focus = false;
      const inp = panel.querySelector('.ed-input');
      inp?.focus();
      if (inp && inp.tagName === 'INPUT') inp.setSelectionRange(inp.value.length, inp.value.length);
    }
  }
  D.render = render;

  SFR.openIssue = async (key) => {
    D.key = key;
    D.detail = null;
    D.comments = null;
    D.watchers = null;
    D.meta = null;
    D.perms = null;
    D.ed = null;
    D.mentions = new Map();
    D.lastFocus = SFR.root.activeElement;
    render();
    focusPanel();
    SFR.markSeen(key);
    SFR.game.award('open', key);
    const [det, com, wat, meta, perm] = await Promise.allSettled([SFR.api.issue(key), SFR.api.comments(key), SFR.api.watchers(key), SFR.api.editmeta(key), SFR.api.perms(key)]);
    if (D.key !== key) return;
    D.detail = det.status === 'fulfilled' ? det.value : false;
    D.comments = com.status === 'fulfilled' ? com.value.comments || [] : [];
    D.watchers = wat.status === 'fulfilled' ? wat.value : null;
    // No editmeta (or an empty one) means this user cannot edit: show the card read-only instead of offering pencils that fail.
    const P = perm.status === 'fulfilled' ? perm.value?.permissions : null;
    D.perms = P ? { edit: P.EDIT_ISSUES?.havePermission !== false, comment: P.ADD_COMMENTS?.havePermission !== false } : null;
    D.meta = meta.status === 'fulfilled' && meta.value?.fields && Object.keys(meta.value.fields).length ? meta.value.fields : false;
    if (det.status === 'fulfilled') SFR.patch(key, SFR.enrichFromRest(det.value));
    render();
    focusPanel();
    SFR.emit('board');
  };
  // keyboard focus must live inside the panel (the scrim also carries close-drawer but can't take focus), so Esc reaches the app
  const focusPanel = () => {
    const p = SFR.root.querySelector('.drawer-panel');
    if (p && !p.contains(SFR.root.activeElement)) p.querySelector('button[data-act="close-drawer"]')?.focus({ preventScroll: true });
  };

  SFR.closeIssue = () => {
    D.key = null;
    D.ed = null;
    render();
    D.lastFocus?.focus?.();
  };

  SFR.refreshDrawerMeta = async () => {
    if (!D.key) return;
    try {
      D.watchers = await SFR.api.watchers(D.key);
    } catch {
      /* keep previous */
    }
    render();
  };

  /* ---------- editing ---------- */
  const startCal = (iso) => {
    const d = cal.parse(iso) || cal.today();
    const { jy, jm } = cal.toJ(d);
    return { jy, jm };
  };

  /** Shared write path (the Gantt uses it too): send the fields, re-read the card, and refresh every view from what Jira stored.
   *  Errors are thrown to the caller, which decides what to tell the user. */
  SFR.saveIssueFields = async (key, fields) => {
    await SFR.api.update(key, fields);
    const det = await SFR.api.issue(key);
    SFR.patch(key, SFR.enrichFromRest(det));
    if (D.key === key) {
      D.detail = det;
      render();
    }
    return det;
  };

  /** Sends one field to Jira, then re-reads the card so every view shows what Jira really stored. */
  async function save(fk, value) {
    const def = EDIT[fk];
    D.ed.busy = true;
    D.ed.error = '';
    render();
    try {
      await SFR.api.update(D.key, { [def.id]: value });
      const det = await SFR.api.issue(D.key);
      D.detail = det;
      const flat = SFR.enrichFromRest(det);
      SFR.patch(D.key, flat);
      D.ed = null;
      render();
      SFR.toast(`«${def.label}» ذخیره شد.`, 'ok');
    } catch (e) {
      if (e.status === 401 || e.status === 403) {
        D.meta = false; // Jira refused: this user can't edit here, lock the card
        D.ed = null;
        render();
        return SFR.toast('جیرا اجازهٔ ویرایش این کارت را به شما نمی‌دهد.', 'error');
      }
      if (D.ed) {
        D.ed.busy = false;
        D.ed.error = e.message || 'ذخیره نشد';
      }
      render();
      SFR.toast(`جیرا «${def.label}» را نپذیرفت: ${e.message}`, 'error');
    }
  }

  const textOf = () => SFR.root.querySelector('.drawer [data-bind="ed-text"]')?.value ?? '';
  const searchUsers = SFR.debounce(async (q) => {
    const box = SFR.root.querySelector('.drawer .ed-results');
    if (!box) return;
    if (!q.trim()) return (box.innerHTML = '');
    let users = [];
    try {
      users = await SFR.api.users(q);
    } catch {
      /* ignore */
    }
    box.innerHTML = users.length
      ? users
          .map(
            (u) =>
              `<button type="button" role="option" class="person" data-act="ed-user" data-name="${esc(u.name)}">${SFR.avatar({ name: u.name, display: u.displayName, avatar: u.avatarUrls?.['24x24'] }, 'sm')}<span dir="auto">${esc(u.displayName)}</span><small dir="ltr">${esc(u.name)}</small></button>`
          )
          .join('')
      : '<p class="muted ed-none">کاربری پیدا نشد.</p>';
  }, 220);
  D.searchUsers = searchUsers;

  D.cancelEdit = () => {
    D.ed = null;
    render();
  };

  D.acts = {
    'ed-open': (b) => {
      const fk = b.dataset.f;
      if (!canEdit(fk)) return;
      const it = SFR.issue(D.key);
      D.ed = { f: fk, busy: false, error: '', focus: true };
      if (EDIT[fk].kind === 'date') {
        D.ed.cur = it[fk] || '';
        D.ed.cal = startCal(it[fk]);
      }
      if (EDIT[fk].kind === 'multi') D.ed.sel = new Set((rawField(fk) || []).map((v) => String(v.id)));
      render();
    },
    'ed-cancel': () => D.cancelEdit(),
    'ed-clear': () => {
      const fk = D.ed?.f;
      if (fk) save(fk, null);
    },
    'ed-save': () => {
      const fk = D.ed?.f;
      if (!fk || D.ed.busy) return;
      const def = EDIT[fk];
      const text = textOf();
      if (def.kind === 'number') {
        const n = text.trim() === '' ? null : Number(text.replace(/[٠-٩]/g, (c) => c.charCodeAt(0) - 1632).replace(/[۰-۹]/g, (c) => c.charCodeAt(0) - 1776));
        if (n !== null && !Number.isFinite(n)) return ((D.ed.error = 'یک عدد وارد کنید.'), render());
        return save(fk, n);
      }
      if (def.kind === 'labels') return save(fk, text.split(/\s+/).filter(Boolean));
      if (def.kind === 'multi') return save(fk, [...D.ed.sel].map((id) => ({ id })));
      if (fk === 'summary' && !text.trim()) return ((D.ed.error = 'عنوان نمی‌تواند خالی باشد.'), render());
      if (def.kind === 'link') return save(fk, text.trim() || null);
      return save(fk, fk === 'summary' ? text.trim() : text);
    },
    'ed-opt': (b) => {
      const fk = D.ed?.f;
      if (!fk || D.ed.busy) return;
      save(fk, b.dataset.v ? { id: b.dataset.v } : null);
    },
    'ed-toggle': (b) => {
      const v = b.dataset.v;
      D.ed.sel.has(v) ? D.ed.sel.delete(v) : D.ed.sel.add(v);
      b.classList.toggle('is-on', D.ed.sel.has(v));
      b.setAttribute('aria-pressed', String(D.ed.sel.has(v)));
    },
    'ed-user': (b) => D.ed && !D.ed.busy && save(D.ed.f, { name: b.dataset.name }),
    'cal-nav': (b) => {
      const c = D.ed.cal;
      let jm = c.jm + Number(b.dataset.d);
      let jy = c.jy;
      if (jm > 12) ((jm = 1), (jy += 1));
      if (jm < 1) ((jm = 12), (jy -= 1));
      D.ed.cal = { jy, jm };
      render();
    },
    'cal-pick': (b) => D.ed && !D.ed.busy && save(D.ed.f, b.dataset.iso),
    'cal-today': () => D.ed && !D.ed.busy && save(D.ed.f, cal.iso(cal.today())),
  };

  /* ---------- composer: mentions + submit ---------- */
  const searchMentions = SFR.debounce(async (q, pop, ta) => {
    if (!q) return (pop.hidden = true);
    let users = [];
    try {
      users = await SFR.api.users(q);
    } catch {
      /* ignore */
    }
    if (!users.length) return (pop.hidden = true);
    pop.innerHTML = users
      .map(
        (u, i) =>
          `<button type="button" role="option" class="person${i === 0 ? ' is-on' : ''}" data-act="mention" data-name="${esc(u.name)}" data-display="${esc(u.displayName)}">${SFR.avatar(
            { name: u.name, display: u.displayName, avatar: u.avatarUrls?.['24x24'] },
            'sm'
          )}<span dir="auto">${esc(u.displayName)}</span><small dir="ltr">${esc(u.name)}</small></button>`
      )
      .join('');
    pop.hidden = false;
    pop._ta = ta;
  }, 220);

  D.onInput = (ta) => {
    D.draft[D.key] = ta.value;
    const upto = ta.value.slice(0, ta.selectionStart);
    const m = upto.match(/(?:^|\s)@([^\s@]{1,30})$/);
    const pop = ta.parentElement.querySelector('.mention-pop');
    if (m) searchMentions(m[1], pop, ta);
    else pop.hidden = true;
  };

  D.insertMention = (btn) => {
    const pop = btn.closest('.mention-pop');
    const ta = pop._ta;
    const display = btn.dataset.display;
    const upto = ta.value.slice(0, ta.selectionStart);
    const start = upto.lastIndexOf('@');
    ta.value = `${ta.value.slice(0, start)}@${display} ${ta.value.slice(ta.selectionStart)}`;
    const pos = start + display.length + 2;
    ta.setSelectionRange(pos, pos);
    ta.focus();
    D.mentions.set(display, btn.dataset.name);
    D.draft[D.key] = ta.value;
    pop.hidden = true;
  };

  D.submit = async (form) => {
    const ta = form.querySelector('textarea');
    const text = ta.value.trim();
    if (!text) return ta.focus();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.classList.add('is-busy');
    try {
      const key = form.dataset.key;
      const c = await SFR.postComment(key, text, D.mentions);
      D.draft[key] = '';
      D.comments = [...(D.comments || []), c];
      const it = SFR.issue(key);
      if (it && !it.watching) {
        // Commenting means you care: follow automatically so replies reach you.
        try {
          await SFR.api.watch(key, S.me.name);
          SFR.patch(key, { watching: true, watchCount: (it.watchCount || 0) + 1 });
          D.watchers = await SFR.api.watchers(key);
        } catch {
          /* following is a nicety */
        }
      }
      SFR.markSeen(key);
      render();
      const sc = SFR.root.querySelector('.drawer .d-scroll');
      sc.scrollTop = sc.scrollHeight;
      SFR.toast('دیدگاه ثبت شد.', 'ok');
    } catch (e) {
      SFR.toast(`ثبت دیدگاه ناموفق بود: ${e.message}`, 'error');
      btn.disabled = false;
      btn.classList.remove('is-busy');
    }
  };
})();

/* app/views/gantt.js */
/* Roadmap Lens — board, third view: a Gantt chart of the board cards on a Jalali time axis.
 * Bar = «تاریخ شروع» → «پایان هدف». The dashed band is «تخمین پایان» (the Estimation field, as is; never computed).
 * The board filters apply. A bar can be dragged to change its dates only when Jira lets THIS user edit those fields,
 * and nothing is written before the user confirms. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon, cal } = SFR;
  const F = SFR.FIELDS;
  const DAY = 864e5;
  const LABEL_W = 300;
  const ZOOM = {
    week: { ppd: 26, label: 'هفته' },
    month: { ppd: 6, label: 'ماه' },
    cycle: { ppd: 2.4, label: 'سیکل' },
  };
  const GROUPS = [
    ['fn', 'فانکشن'],
    ['poc', 'مسئول'],
    ['month', 'ماه بورد'],
    ['none', 'بدون گروه'],
  ];
  const MON = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };

  const G = { fold: new Set(['__nodate']), perm: new Map(), drag: null, pending: null, busy: false, scrolled: false, more: 80, suppress: false, geo: null };
  const opt = () => ({ group: 'fn', zoom: 'month', ...(S.ui.gantt || {}) });
  const isDelivered = (i) => i.status === 'done' || i.status === 'devdone';
  const late = (i, e) => e && e < cal.today() && !isDelivered(i) && i.status !== 'canceled';
  const dayAfter = (d) => cal.add(d, 1);

  /* ---------- who may change what: the same rule as the drawer's pencils ---------- */
  function permOf(key) {
    if (!G.perm.has(key)) {
      G.perm.set(
        key,
        Promise.allSettled([SFR.api.editmeta(key), SFR.api.perms(key)]).then(([m, p]) => {
          const P = p.status === 'fulfilled' ? p.value?.permissions : null;
          if (P && P.EDIT_ISSUES?.havePermission === false) return { start: false, end: false };
          const fields = m.status === 'fulfilled' ? m.value?.fields : null;
          const ok = (id) => !!fields?.[id] && (!Array.isArray(fields[id].operations) || fields[id].operations.includes('set'));
          return { start: ok(F.start), end: ok(F.end) };
        })
      );
    }
    return G.perm.get(key);
  }

  /* ---------- the rows ---------- */
  function datesOf(i) {
    const p = G.pending?.key === i.key ? G.pending : null;
    return { s: cal.parse(p ? p.start : i.start), e: cal.parse(p ? p.end : i.end) };
  }
  function estOf(i, ref) {
    const m = MON[String(i.estimation || '').slice(0, 3).toLowerCase()];
    if (m == null) return null;
    const y0 = (ref || cal.today()).getUTCFullYear();
    const cands = [y0 - 1, y0, y0 + 1].map((y) => [new Date(Date.UTC(y, m, 1, 12)), new Date(Date.UTC(y, m + 1, 1, 12))]);
    const mid = (r) => (r[0].getTime() + r[1].getTime()) / 2;
    const r = ref || cal.today();
    return cands.sort((a, b) => Math.abs(mid(a) - r) - Math.abs(mid(b) - r))[0];
  }
  function groupKey(i, by) {
    if (by === 'fn') return i.fn?.[0] || 'بدون فانکشن';
    if (by === 'poc') return i.poc?.display || 'بدون مسئول';
    if (by === 'month') return S.colOfStatus[i.statusId] || '—';
    return 'all';
  }
  const groupTitle = (k, by) => {
    if (by !== 'month') return k;
    const c = S.columns.find((x) => x.id === k);
    return c ? SFR.monthLabel(c.name)[0] : 'بدون ستون';
  };

  /* ---------- geometry ---------- */
  function range(items) {
    const today = cal.today();
    let lo = today;
    let hi = today;
    items.forEach(({ s, e }) => {
      [s, e].forEach((d) => {
        if (!d) return;
        if (d < lo) lo = d;
        if (d > hi) hi = d;
      });
    });
    lo = new Date(Math.max(lo.getTime(), cal.add(today, -540).getTime()));
    hi = new Date(Math.min(hi.getTime(), cal.add(today, 450).getTime()));
    // whole Jalali months, with a little air on both sides
    const a = cal.toJ(cal.add(lo, -10));
    const b = cal.toJ(cal.add(hi, 20));
    const from = cal.fromJ(a.jy, a.jm, 1);
    const to = b.jm === 12 ? cal.fromJ(b.jy + 1, 1, 1) : cal.fromJ(b.jy, b.jm + 1, 1);
    return { from, to, days: cal.diff(to, from) };
  }
  const xOf = (d, geo) => cal.diff(d, geo.from) * geo.ppd;
  function place(s, e, geo) {
    const a = s || e;
    const b = e || s;
    let x0 = xOf(a, geo);
    let x1 = xOf(dayAfter(b), geo);
    const cutS = x0 < 0;
    const cutE = x1 > geo.w;
    x0 = Math.max(0, x0);
    x1 = Math.min(geo.w, x1);
    return { x: x0, w: Math.max(x1 - x0, 6), cutS, cutE };
  }

  function axis(geo) {
    const months = [];
    for (let d = geo.from; d < geo.to; ) {
      const j = cal.toJ(d);
      const next = j.jm === 12 ? cal.fromJ(j.jy + 1, 1, 1) : cal.fromJ(j.jy, j.jm + 1, 1);
      months.push({ d, j, x: xOf(d, geo), w: cal.diff(next, d) * geo.ppd });
      d = next;
    }
    const top = months
      .map((m) => `<span class="gt-m${SFR.cal.toJ(cal.today()).jm === m.j.jm && cal.toJ(cal.today()).jy === m.j.jy ? ' is-now' : ''}" style="inset-inline-start:${m.x}px;width:${m.w}px"><span class="gt-mt">${esc(cal.MONTHS[m.j.jm - 1])}${m.w > 70 ? ` <small>${fa(String(m.j.jy))}</small>` : ''}</span></span>`)
      .join('');
    let ticks = '';
    if (geo.zoom !== 'cycle') {
      // Saturdays (the start of the Iranian week)
      let d = geo.from;
      while (d.getUTCDay() !== 6) d = cal.add(d, 1);
      for (; d < geo.to; d = cal.add(d, 7)) {
        const j = cal.toJ(d);
        ticks += `<span class="gt-tick" style="inset-inline-start:${xOf(d, geo)}px">${geo.zoom === 'week' ? `ش ${fa(j.jd)}` : fa(j.jd)}</span>`;
      }
    }
    const lines = months.map((m) => `<i class="gt-vl" style="inset-inline-start:${LABEL_W + m.x}px"></i>`).join('');
    return { head: `<div class="gt-axis" style="width:${geo.w}px"><div class="gt-ms">${top}</div>${ticks ? `<div class="gt-ticks">${ticks}</div>` : ''}</div>`, lines };
  }

  function tip(i, s, e, est) {
    const row = (k, v) => `<span class="tt-row">${k}<em>${v}</em></span>`;
    const dur = s && e ? cal.diff(e, s) + 1 : null;
    const lateBy = late(i, e) ? cal.diff(cal.today(), e) : 0;
    return (
      `<b>${esc(SFR.splitTitle(i.summary).title)}</b>` +
      row('شروع', s ? esc(cal.full(cal.iso(s))) : 'ثبت نشده') +
      row('پایان هدف', e ? esc(cal.full(cal.iso(e))) : 'ثبت نشده') +
      (dur ? row('مدت', `${fa(dur)} روز`) : '') +
      row('تخمین پایان', est ? esc(`${SFR.monthLabel(i.estimation)[0]} (${SFR.monthLabel(i.estimation)[1]})`) : 'ثبت نشده') +
      row('وضعیت', esc(SFR.statusMeta(i.status).label)) +
      (lateBy ? `<span class="tt-row is-late">${fa(lateBy)} روز از پایان هدف گذشته</span>` : '')
    );
  }

  function rowHtml(i, geo) {
    const { s, e } = datesOf(i);
    const est = estOf(i, e || s);
    const t = SFR.splitTitle(i.summary);
    const lt = late(i, e);
    const pend = G.pending?.key === i.key;
    let lane = '';
    if (est && est[1] > geo.from && est[0] < geo.to) {
      const p = place(est[0], cal.add(est[1], -1), geo);
      lane += `<span class="gt-est" style="inset-inline-start:${p.x}px;width:${p.w}px" data-hint="${esc(`تخمین پایان: ${SFR.monthLabel(i.estimation)[0]}`)}"></span>`;
    }
    if (s || e) {
      const p = place(s, e, geo);
      const both = s && e;
      const txt = both && p.w > 120 ? `<span class="gt-bt">${esc(cal.short(cal.iso(s)))} ← ${esc(cal.short(cal.iso(e)))}</span>` : '';
      lane += both
        ? `<span class="gt-bar st-${i.status}${lt ? ' is-late' : ''}${p.cutS ? ' cut-s' : ''}${p.cutE ? ' cut-e' : ''}${pend ? ' is-pending' : ''}" style="inset-inline-start:${p.x}px;width:${p.w}px;--c:var(--s-${i.status})" data-tip="${esc(tip(i, s, e, est))}"><i class="gt-h" data-h="s"></i>${txt}<i class="gt-h" data-h="e"></i></span>`
        : `<span class="gt-pt st-${i.status}${lt ? ' is-late' : ''}${pend ? ' is-pending' : ''}" style="inset-inline-start:${p.x + p.w / 2 - 6}px;--c:var(--s-${i.status})" data-tip="${esc(tip(i, s, e, est))}" data-one="${s ? 's' : 'e'}"></span>`;
    }
    return `<div class="gt-row${lt ? ' is-late' : ''}" data-key="${esc(i.key)}" tabindex="0">
      <div class="gt-label"><span class="gt-t" dir="auto">${esc(t.title)}</span><span class="gt-sub">${SFR.keyChip(i.key)}${SFR.statusPill(i.status, { short: true })}${SFR.avatar(i.poc, 'xs')}${lt ? `<span class="pill pill-late">${icon('clock', 12)}دیر</span>` : ''}${!s && !e ? '<small class="muted">بدون تاریخ</small>' : !s ? '<small class="muted">بی‌شروع</small>' : !e ? '<small class="muted">بی‌پایان</small>' : ''}</span></div>
      <div class="gt-lane" style="width:${geo.w}px">${lane}</div>
    </div>`;
  }

  /* ---------- the view ---------- */
  SFR.ganttView = (visible) => {
    const o = opt();
    const rows = visible.filter((i) => !(S.ui.hideBacklog && SFR.monthKey(S.columns.find((c) => c.id === S.colOfStatus[i.statusId])?.name || '') === 'backlog'));
    const withD = rows.map((i) => ({ i, ...datesOf(i) }));
    const dated = withD.filter((x) => x.s || x.e);
    const none = withD.filter((x) => !x.s && !x.e);
    const zoom = ZOOM[o.zoom] ? o.zoom : 'month';
    const r = range(dated);
    const geo = (G.geo = { ...r, zoom, ppd: ZOOM[zoom].ppd, w: Math.round(r.days * ZOOM[zoom].ppd) });
    const ax = axis(geo);
    const lateN = dated.filter((x) => late(x.i, x.e)).length;

    // groups
    const by = o.group;
    const groups = new Map();
    dated.forEach((x) => {
      const k = groupKey(x.i, by);
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(x);
    });
    const order = [...groups.keys()].sort((a, b) =>
      by === 'month' ? S.columns.findIndex((c) => c.id === a) - S.columns.findIndex((c) => c.id === b) : groups.get(b).length - groups.get(a).length || String(a).localeCompare(String(b), 'fa')
    );
    // order by the dates Jira has (not a drag waiting for confirmation), so a row never jumps away from the pointer
    const k0 = (x) => cal.parse(x.i.start) || cal.parse(x.i.end) || x.s || x.e;
    const k1 = (x) => cal.parse(x.i.end) || cal.parse(x.i.start) || x.e || x.s;
    const sortRows = (list) => list.sort((a, b) => k0(a) - k0(b) || k1(a) - k1(b));
    let body = '';
    order.forEach((k) => {
      const list = sortRows(groups.get(k));
      const closed = G.fold.has(`${by}:${k}`);
      if (by !== 'none') {
        const lo = Math.min(...list.map((x) => (x.s || x.e).getTime()));
        const hi = Math.max(...list.map((x) => (x.e || x.s).getTime()));
        const p = place(new Date(lo), new Date(hi), geo);
        const nLate = list.filter((x) => late(x.i, x.e)).length;
        body += `<div class="gt-row gt-group"><button class="gt-label gt-gh${closed ? ' is-closed' : ''}" data-act="gt-fold" data-v="${esc(`${by}:${k}`)}" aria-expanded="${!closed}">${icon('chevron-down', 14)}<b dir="auto">${esc(groupTitle(k, by))}</b><em>${fa(list.length)}</em>${nLate ? `<span class="gt-late-n">${fa(nLate)} دیر</span>` : ''}</button><div class="gt-lane" style="width:${geo.w}px"><span class="gt-span" style="inset-inline-start:${p.x}px;width:${p.w}px"></span></div></div>`;
      }
      if (!closed) body += list.map((x) => rowHtml(x.i, geo)).join('');
    });
    if (none.length) {
      const closed = G.fold.has('__nodate');
      body += `<div class="gt-row gt-group is-nodate"><button class="gt-label gt-gh${closed ? ' is-closed' : ''}" data-act="gt-fold" data-v="__nodate" aria-expanded="${!closed}">${icon('chevron-down', 14)}<b>بدون تاریخ</b><em>${fa(none.length)}</em><small>شروع و پایان هدف ثبت نشده</small></button><div class="gt-lane" style="width:${geo.w}px"></div></div>`;
      if (!closed) {
        body += none.slice(0, G.more).map((x) => rowHtml(x.i, geo)).join('');
        if (none.length > G.more) body += `<div class="gt-row"><div class="gt-label"><button class="more" data-act="gt-more">نمایش ${fa(Math.min(80, none.length - G.more))} مورد دیگر · ${fa(none.length - G.more)} باقی‌مانده</button></div></div>`;
      }
    }
    const today = cal.today();
    const todayLine = today >= geo.from && today < geo.to ? `<i class="gt-now" style="inset-inline-start:${LABEL_W + xOf(today, geo) + geo.ppd / 2}px"><b>امروز</b></i>` : '';
    const seg = (act, cur, list) => list.map(([k, l]) => `<button role="tab" aria-selected="${cur === k}" data-act="${act}" data-v="${k}">${l}</button>`).join('');

    const pend = G.pending;
    const pIt = pend && SFR.issue(pend.key);
    const fmt = (iso) => (iso ? cal.full(iso) : 'خالی');
    const confirm = pend
      ? `<div class="gt-confirm" role="dialog" aria-label="تأیید تغییر تاریخ" tabindex="-1">
          ${icon('calendar', 18)}
          <div class="gt-cf-t"><b>${SFR.keyChip(pend.key)} <span dir="auto">${esc(SFR.splitTitle(pIt?.summary || '').title)}</span></b>
            <span>${pend.start !== pend.oldStart ? `شروع: ${esc(fmt(pend.oldStart))} ← <b>${esc(fmt(pend.start))}</b>` : ''}${pend.start !== pend.oldStart && pend.end !== pend.oldEnd ? ' · ' : ''}${pend.end !== pend.oldEnd ? `پایان هدف: ${esc(fmt(pend.oldEnd))} ← <b>${esc(fmt(pend.end))}</b>` : ''}</span></div>
          <span class="grow"></span>
          <button class="btn btn-ghost btn-sm" data-act="gt-cancel"${G.busy ? ' disabled' : ''}>انصراف</button>
          <button class="btn btn-primary btn-sm${G.busy ? ' is-busy' : ''}" data-act="gt-save"${G.busy ? ' disabled' : ''}>${G.busy ? `${icon('refresh-cw', 14, 'spin')}در حال ذخیره…` : `${icon('check', 14)}ذخیره در جیرا`}</button>
        </div>`
      : '';

    return `<div class="gt-tools">
        <div class="switch switch-sm" role="tablist" aria-label="گروه‌بندی">${seg('gt-group', by, GROUPS)}</div>
        <div class="switch switch-sm" role="tablist" aria-label="بزرگنمایی">${seg('gt-zoom', zoom, Object.entries(ZOOM).map(([k, z]) => [k, z.label]))}</div>
        <button class="btn btn-outline btn-sm" data-act="gt-today">${icon('crosshair', 14)}امروز</button>
        <span class="grow"></span>
        <span class="gt-key"><i class="k-bar"></i>شروع ← پایان هدف <i class="k-est"></i>تخمین پایان <i class="k-late"></i>دیر</span>
        <span class="muted">${fa(dated.length)} با تاریخ${lateN ? ` · <b class="gt-late-n">${fa(lateN)} دیر</b>` : ''} · ${fa(none.length)} بدون تاریخ</span>
      </div>
      <p class="gt-help">${icon('info', 14)}روی هر ردیف بزنید تا جزئیات باز شود. برای جابه‌جا کردن تاریخ‌ها میله را بکشید (یا لبه‌اش را برای تغییر فقط شروع یا پایان)؛ اگر جیرا به شما اجازهٔ ویرایش بدهد، قبل از ذخیره تأیید می‌گیریم.</p>
      <div class="gantt" data-scroll="gantt" style="--gl:${LABEL_W}px">
        <div class="gt-inner" style="width:${LABEL_W + geo.w}px">
          <div class="gt-head"><div class="gt-corner">${by === 'none' ? 'کار' : GROUPS.find((g) => g[0] === by)[1]} / کار</div>${ax.head}</div>
          <div class="gt-body">${ax.lines}${todayLine}${body || `<div class="gt-empty">${SFR.empty('کاری با این فیلترها نیست', '', 'inbox')}</div>`}</div>
        </div>
      </div>
      ${confirm}`;
  };

  /* ---------- after each render: keep the scroll, first time jump to today, wire the drag ---------- */
  SFR.ganttAfter = (el, keep) => {
    const sc = el.querySelector('[data-scroll="gantt"]');
    if (!sc) return;
    if (keep) ((sc.scrollLeft = keep.left), (sc.scrollTop = keep.top));
    else if (!G.scrolled) {
      G.scrolled = true;
      scrollToToday(sc);
    }
    sc.addEventListener('pointerdown', onDown);
    sc.addEventListener('pointerover', (e) => {
      const k = e.target.closest?.('.gt-bar,.gt-pt') && e.target.closest('[data-key]')?.dataset.key;
      if (k) permOf(k);
    });
    sc.addEventListener(
      'click',
      (e) => {
        if (G.suppress) {
          G.suppress = false;
          e.stopPropagation();
          e.preventDefault();
        }
      },
      true
    );
  };
  SFR.ganttScroll = (el) => {
    const sc = el.querySelector('[data-scroll="gantt"]');
    return sc ? { left: sc.scrollLeft, top: sc.scrollTop } : null;
  };
  function scrollToToday(sc) {
    const now = sc.querySelector('.gt-now');
    if (!now) return;
    const x = parseFloat(now.style.insetInlineStart) - LABEL_W;
    const rtl = getComputedStyle(sc).direction === 'rtl';
    const target = Math.max(0, x - (sc.clientWidth - LABEL_W) / 2);
    sc.scrollLeft = rtl ? -target : target;
  }

  /* ---------- drag to change dates ---------- */
  function onDown(e) {
    if (e.button !== 0 || G.busy) return;
    const bar = e.target.closest('.gt-bar,.gt-pt');
    if (!bar) return;
    const key = bar.closest('[data-key]').dataset.key;
    if (G.pending && G.pending.key !== key) return SFR.toast('اول تغییرِ قبلی را ذخیره یا لغو کنید.', 'info');
    const it = SFR.issue(key);
    if (!it) return;
    const { s, e: en } = datesOf(it);
    const h = e.target.closest('.gt-h')?.dataset.h;
    const mode = h || (bar.classList.contains('gt-pt') ? bar.dataset.one : 'move');
    e.preventDefault(); // no text selection while dragging; keep keyboard focus inside the app instead
    bar.closest('.gt-row')?.focus({ preventScroll: true });
    bar.setPointerCapture?.(e.pointerId);
    const sc = bar.closest('[data-scroll="gantt"]');
    G.drag = { key, mode, bar, x0: e.clientX, s0: s, e0: en, ns: s, ne: en, moved: false, sign: getComputedStyle(sc).direction === 'rtl' ? -1 : 1, perm: permOf(key) };
    G.drag.perm.then((p) => G.drag?.key === key && !(p.start || p.end) && bar.classList.add('is-ro'));
    bar.addEventListener('pointermove', onMove);
    bar.addEventListener('pointerup', onUp, { once: true });
    bar.addEventListener('pointercancel', onCancel, { once: true });
  }
  function onMove(e) {
    const d = G.drag;
    if (!d) return;
    const dx = (e.clientX - d.x0) * d.sign;
    if (Math.abs(dx) > 4) d.moved = true;
    if (!d.moved) return;
    const n = Math.round(dx / G.geo.ppd);
    const sh = (x) => (x ? cal.add(x, n) : x);
    if (d.mode === 'move') ((d.ns = sh(d.s0)), (d.ne = sh(d.e0)));
    else if (d.mode === 's') ((d.ns = d.e0 ? new Date(Math.min(sh(d.s0), d.e0)) : sh(d.s0)), (d.ne = d.e0));
    else ((d.ne = d.s0 ? new Date(Math.max(sh(d.e0), d.s0)) : sh(d.e0)), (d.ns = d.s0));
    const p = place(d.ns, d.ne, G.geo);
    if (d.bar.classList.contains('gt-pt')) d.bar.style.insetInlineStart = `${p.x + p.w / 2 - 6}px`;
    else ((d.bar.style.insetInlineStart = `${p.x}px`), (d.bar.style.width = `${p.w}px`));
    d.bar.classList.add('is-dragging');
    d.bar.dataset.live = `${d.ns ? cal.short(cal.iso(d.ns)) : '—'} ← ${d.ne ? cal.short(cal.iso(d.ne)) : '—'}`;
  }
  function onCancel() {
    G.drag = null;
    SFR.render();
  }
  async function onUp() {
    const d = G.drag;
    if (!d) return;
    d.bar.removeEventListener('pointermove', onMove);
    if (!d.moved) return void (G.drag = null);
    G.suppress = true;
    setTimeout(() => (G.suppress = false), 400);
    const iso = (x) => (x ? cal.iso(x) : null);
    const it = SFR.issue(d.key);
    const old = { start: G.pending?.key === d.key ? G.pending.oldStart : it.start || null, end: G.pending?.key === d.key ? G.pending.oldEnd : it.end || null };
    const next = { start: iso(d.ns), end: iso(d.ne) };
    d.bar.classList.add('is-checking');
    const p = await d.perm;
    G.drag = null;
    const needS = next.start !== old.start;
    const needE = next.end !== old.end;
    if (!needS && !needE) return ((G.pending = null), SFR.render());
    if ((needS && !p.start) || (needE && !p.end)) {
      G.pending = null;
      SFR.render();
      return SFR.toast(
        p.start || p.end ? `جیرا فقط اجازهٔ تغییر «${p.start ? 'تاریخ شروع' : 'پایان هدف'}» این کارت را به شما می‌دهد.` : 'جیرا اجازهٔ تغییر تاریخ‌های این کارت را به شما نمی‌دهد.',
        'error'
      );
    }
    G.pending = { key: d.key, ...next, oldStart: old.start, oldEnd: old.end };
    SFR.render();
    SFR.root.querySelector('.gt-confirm')?.focus({ preventScroll: true }); // so Esc can cancel
  }

  async function save() {
    const p = G.pending;
    if (!p || G.busy) return;
    const fields = {};
    if (p.start !== p.oldStart) fields[F.start] = p.start;
    if (p.end !== p.oldEnd) fields[F.end] = p.end;
    G.busy = true;
    SFR.render();
    try {
      await SFR.saveIssueFields(p.key, fields);
      G.pending = null;
      SFR.toast('تاریخ‌ها در جیرا ذخیره شد.', 'ok');
    } catch (e) {
      if (e.status === 401 || e.status === 403) {
        G.perm.set(p.key, Promise.resolve({ start: false, end: false }));
        G.pending = null;
        SFR.toast('جیرا اجازهٔ تغییر تاریخ‌های این کارت را به شما نمی‌دهد.', 'error');
      } else SFR.toast(`جیرا تاریخ‌ها را نپذیرفت: ${e.message}`, 'error');
    }
    G.busy = false;
    SFR.render();
  }

  const set = (k, v) => {
    S.ui.gantt = { ...opt(), [k]: v };
    SFR.saveUi();
    SFR.render();
  };
  SFR.gantt = {
    dragging: () => !!G.drag,
    cancel: () => {
      if (!G.pending || G.busy) return false;
      G.pending = null;
      SFR.render();
      return true;
    },
    acts: {
      'gt-group': (b) => set('group', b.dataset.v),
      'gt-zoom': (b) => {
        const sc = SFR.root.querySelector('[data-scroll="gantt"]');
        set('zoom', b.dataset.v);
        if (sc) scrollToToday(SFR.root.querySelector('[data-scroll="gantt"]'));
      },
      'gt-today': () => scrollToToday(SFR.root.querySelector('[data-scroll="gantt"]')),
      'gt-fold': (b) => {
        const k = b.dataset.v;
        G.fold.has(k) ? G.fold.delete(k) : G.fold.add(k);
        SFR.render();
      },
      'gt-more': () => ((G.more += 80), SFR.render()),
      'gt-save': save,
      'gt-cancel': () => SFR.gantt.cancel(),
    },
  };
})();

/* app/views/following.js */
/* Roadmap Lens — "دنبال‌شده‌ها": an inbox of watched / owned initiatives with unread activity. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;

  const snippet = (body) =>
    String(body || '')
      .replace(/\[~([^\]]+)\]/g, '@$1')
      .replace(/\{[^}]+\}|[*_+^~]|h\d\.\s/g, '')
      .replace(/\[([^|\]]+)\|[^\]]+\]/g, '$1')
      .replace(/\s+/g, ' ')
      .slice(0, 180);

  SFR.followingStats = () => {
    let watching = 0;
    let news = 0;
    S.rest.forEach((i) => {
      if (i.watching && !i.isEpic) {
        watching++;
        if (SFR.hasNews(i)) news++;
      }
    });
    return { watching, news };
  };

  SFR.renderFollowing = (el) => {
    if (S.status !== 'ready') return;
    const tab = S.ui.followTab;
    const all = [...S.rest.values()].filter((i) => !i.isEpic);
    const lists = {
      watching: all.filter((i) => i.watching),
      mine: all.filter((i) => i.poc?.name === S.me.name || i.assignee?.name === S.me.name),
      news: all.filter((i) => SFR.hasNews(i)),
    };
    const items = lists[tab].sort((a, b) => new Date(b.lastComment?.created || b.updated) - new Date(a.lastComment?.created || a.updated));
    const tabs = [
      ['news', 'فعالیت تازه', 'bell-dot'],
      ['watching', 'دنبال می‌کنم', 'star'],
      ['mine', 'مسئولیت من', 'user'],
    ];

    el.innerHTML = `<div class="inbox">
      <header class="inbox-head">
        <div>
          <h2>دنبال‌شده‌ها</h2>
          <p class="muted">هر اینیشیتیویی که ستاره بزنید یا در آن دیدگاه بگذارید اینجا می‌آید؛ دیدگاه‌های تازه‌ی دیگران علامت می‌خورند.</p>
        </div>
        <span class="grow"></span>
        ${lists.news.length ? `<button class="btn btn-ghost btn-sm" data-act="mark-all-seen">${icon('check-check', 16)}همه خوانده شد</button>` : ''}
      </header>
      <div class="switch big" role="tablist">${tabs
        .map(([k, l, ic]) => `<button role="tab" aria-selected="${tab === k}" data-act="follow-tab" data-v="${k}">${icon(ic, 16)}${l}${SFR.count(lists[k].length)}</button>`)
        .join('')}</div>
      ${
        !S.restReady && !S.rest.size
          ? `<div class="inbox-list">${SFR.skeletonCards(5)}</div>`
          : items.length
          ? `<ul class="inbox-list">${items
              .map((i) => {
                const news = SFR.hasNews(i);
                const c = S.columns.find((x) => x.statusIds.includes(i.statusId));
                const lc = i.lastComment;
                return `<li class="inbox-item st-${i.status}${news ? ' has-news' : ''}" style="--stripe: var(--s-${i.status})" data-key="${esc(i.key)}" tabindex="0">
                  ${news ? '<span class="news-dot" aria-label="تازه"></span>' : ''}
                  <div class="ii-main">
                    <div class="ii-top">${SFR.statusPill(i.status, { short: true })}${SFR.keyChip(i.key)}${
                      c ? `<span class="tag">${icon('calendar', 12)}${esc(SFR.monthLabel(c.name)[0])}</span>` : ''
                    }${i.delayed ? `<span class="pill pill-late">${icon('clock', 12)}تأخیر</span>` : ''}</div>
                    <h3 dir="auto">${esc(SFR.splitTitle(i.summary).title)}${SFR.splitTitle(i.summary).tags.slice(0, 3).map((t) => ` <bdi class="tag" dir="auto">${esc(t)}</bdi>`).join('')}</h3>
                    ${
                      lc
                        ? `<p class="ii-last">${SFR.avatar({ name: lc.author, display: lc.authorName, avatar: lc.avatar }, 'xs')}<b><bdi>${esc(SFR.firstName(lc.authorName))}</bdi>:</b><span dir="auto">${esc(
                            snippet(lc.body)
                          )}</span></p>`
                        : '<p class="ii-last muted">هنوز گفت‌وگویی شروع نشده.</p>'
                    }
                  </div>
                  <div class="ii-side">
                    <time>${SFR.ago(lc?.created || i.updated)}</time>
                    <span class="meta">${icon('message-square', 14)}${fa(i.commentCount || 0)}</span>
                    <button class="star${i.watching ? ' is-on' : ''}" data-act="follow" data-key="${esc(i.key)}" aria-label="${i.watching ? 'لغو دنبال کردن' : 'دنبال کردن'}">${icon('star', 16)}</button>
                  </div>
                </li>`;
              })
              .join('')}</ul>`
          : SFR.empty(
              tab === 'news' ? 'چیز تازه‌ای نیست' : tab === 'watching' ? 'هنوز چیزی دنبال نمی‌کنید' : 'اینیشیتیویی به نام شما نیست',
              tab === 'watching' ? 'روی ستاره‌ی هر کارت در بورد بزنید تا اینجا بیاید.' : '',
              tab === 'news' ? 'check-check' : 'star'
            )
      }
    </div>`;
  };
})();

/* app/views/dashboard.js */
/* Roadmap Lens — dashboard: KPI tiles + drillable charts computed from live Jira data. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, faPct, icon, charts } = SFR;

  const SERIES = SFR.STATUS.map((s) => ({ key: s.key, label: s.label }));
  const isDone = (i) => i.status === 'done' || i.status === 'devdone';

  function dataset() {
    const d = S.dash;
    return [...S.rest.values()].filter(
      (i) => !i.isEpic && (!d.cycle || i.cycle.includes(d.cycle)) && (!d.fn || i.fn.includes(d.fn)) && (!d.hideCanceled || i.status !== 'canceled')
    );
  }
  const colOf = (i) => S.colOfStatus[i.statusId];
  // Jalali weeks start on Saturday.
  const weekStart = (d) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    x.setDate(x.getDate() - ((x.getDay() + 1) % 7));
    return x;
  };
  const weeksAgo = (d) => (d ? Math.round((weekStart(Date.now()) - weekStart(d)) / (7 * 864e5)) : 99);
  const backlogCol = () => S.columns.find((c) => SFR.monthKey(c.name) === 'backlog')?.id;

  /* Where an initiative stands, for the size report. Pending counts as in-progress; un-picked to-dos are backlog. */
  const PHASES = [
    { key: 'planned', label: 'برنامه‌ریزی‌شده', short: 'برنامه', color: 'var(--s-todo)' },
    { key: 'progress', label: 'در حال انجام', short: 'در حال انجام', color: 'var(--s-progress)' },
    { key: 'delivered', label: 'تحویل‌شده', short: 'تحویل', color: 'var(--s-done)' },
    { key: 'backlog', label: 'بک‌لاگ (بدون ماه)', short: 'بک‌لاگ', color: 'var(--ink-3)' },
  ];
  function phaseOf(i) {
    if (i.status === 'canceled') return null;
    if (isDone(i)) return 'delivered';
    if (i.status === 'progress' || i.status === 'pending') return 'progress';
    return colOf(i) === backlogCol() ? 'backlog' : 'planned';
  }

  function matches(i, f) {
    if (f.status && i.status !== f.status) return false;
    if (f.month && colOf(i) !== f.month) return false;
    if (f.fn && !i.fn.includes(f.fn)) return false;
    if (f.noFn && i.fn.length) return false;
    if (f.strategic !== undefined && (i.strategic || '—') !== f.strategic) return false;
    if (f.poc && (i.poc?.name || '—') !== f.poc) return false;
    if (f.size && (SFR.sizeKey(i.size) || '—') !== f.size) return false;
    if (f.phase && phaseOf(i) !== f.phase) return false;
    if (f.delayed && !i.delayed) return false;
    if (f.picked && colOf(i) === backlogCol()) return false;
    const live = colOf(i) !== backlogCol() && i.status !== 'canceled';
    if (f.unsized && (!live || SFR.sizeKey(i.size))) return false;
    if (f.noOwner && (!live || i.poc)) return false;
    if (f.stale && !SFR.isStale(i)) return false;
    if (f.week !== undefined && weeksAgo(i.updated) !== f.week) return false;
    return true;
  }

  const card = (id, title, sub, body, { wide = false, tall = false, full = false, noTable = false, tools = '', cls = '' } = {}) =>
    `<section class="viz-card${wide ? ' wide' : ''}${tall ? ' tall' : ''}${full ? ' full' : ''}${cls ? ` ${cls}` : ''}" data-card="${id}">
      <header><div><h3>${title}</h3>${sub ? `<p>${sub}</p>` : ''}</div>${tools}
        ${noTable ? '' : `<button class="icon-btn" data-act="toggle-table" data-hint="نمایش جدول" aria-label="نمایش جدول داده">${icon('table-2', 16)}</button>`}</header>
      <div class="viz-body">${body}</div>
    </section>`;

  // Month columns with the calendar year they belong to for the selected cycle (a past cycle's months are all past).
  const monthCats = () => {
    const win = SFR.cycleWindow(S.dash.cycle);
    return S.columns
      .filter((c) => SFR.monthKey(c.name) !== 'backlog')
      .map((c) => {
        const [label, sub] = SFR.monthLabel(c.name);
        const st = SFR.monthState(c.id, win) || { year: win.s, state: 'future' };
        return { key: c.id, id: c.id, label, sub: sub.split(' ← ')[0], year: st.year, state: st.state, current: st.state === 'current' };
      });
  };

  /* ---------- KPI tiles ---------- */
  function tiles(rows) {
    const t = (key, label, value, f, hint, ic, cls = '') =>
      `<button class="tile ${cls}" data-drill="${esc(JSON.stringify(f))}" data-hint="${esc(hint)}">${icon(ic, 16)}<span>${label}</span><b data-count="${value}" data-cid="tile-${key}">${fa(value)}</b></button>`;
    return `<div class="tile-grid">
      ${t('all', 'کل اینیشیتیوها', rows.length, {}, 'همه‌ی موارد این نما', 'layers', 't-all')}
      ${t('picked', 'ماه‌دار', rows.filter((i) => colOf(i) !== backlogCol()).length, { picked: true }, 'مواردی که ماه تحویل دارند', 'calendar', 't-picked')}
      ${t('progress', 'در جریان', rows.filter((i) => i.status === 'progress').length, { status: 'progress' }, 'در حال انجام', 'circle-dashed', 't-progress')}
      ${t('pending', 'معلق', rows.filter((i) => i.status === 'pending').length, { status: 'pending' }, 'معلق یا منتظر', 'clock', 't-pending')}
      ${t('late', 'تأخیری', rows.filter((i) => i.delayed).length, { delayed: true }, 'برچسب Delayed دارند', 'triangle-alert', 't-late')}
      ${t('done', 'انجام‌شده', rows.filter((i) => i.status === 'done').length, { status: 'done' }, 'به تولید رسیده', 'circle-check', 't-done')}
    </div>`;
  }

  /* Unit for the delivery charts: initiatives first (what people actually plan with), points second. */
  const measureTools = () =>
    `<div class="switch switch-sm" role="tablist" aria-label="معیار">${[['n', 'تعداد اینیشیتیو'], ['xp', 'امتیاز']]
      .map(([k, l]) => `<button role="tab" aria-selected="${S.dash.measure === k}" data-act="dash-measure" data-v="${k}">${l}</button>`)
      .join('')}</div>`;

  /* ---------- journey card ---------- */
  function journeyCard(rows, fresh) {
    const live = rows.filter((i) => i.status !== 'canceled');
    const cats = monthCats();
    const bossBy = SFR.game.bosses(live);
    const nodes = cats.map((c) => {
      const it = live.filter((i) => colOf(i) === c.id);
      const b = bossBy.get(c.id);
      return {
        id: c.id,
        label: c.label,
        year: c.year,
        state: c.state,
        current: c.current,
        total: it.length,
        done: it.filter(isDone).length,
        xp: it.reduce((a, i) => a + SFR.xpOf(i), 0),
        earned: it.reduce((a, i) => a + SFR.earnedOf(i), 0),
        delayed: it.filter((i) => i.delayed && !isDone(i)).length,
        boss: b ? { title: SFR.splitTitle(b.summary).title, done: b.status === 'done' } : null,
      };
    });
    const picked = live.filter((i) => colOf(i) !== backlogCol());
    const done = picked.filter(isDone).length;
    const xp = nodes.reduce((a, n) => a + n.xp, 0);
    const earned = nodes.reduce((a, n) => a + n.earned, 0);
    const byCount = S.dash.measure === 'n';
    const rate = byCount ? (picked.length ? (done / picked.length) * 100 : 0) : xp ? (earned / xp) * 100 : 0;
    const bosses = nodes.filter((n) => n.boss);
    const dead = bosses.filter((n) => n.boss.done).length;
    const team = SFR.levelInfo(earned, 48);
    const stat = (ic, label, html, cls = '', desc = '') => `<div class="jstat ${cls}"><span class="jstat-ic">${icon(ic, 18)}</span><div><small>${label}</small><b>${html}</b>${desc ? `<p class="jdesc">${desc}</p>` : ''}</div></div>`;
    const countStat = byCount
      ? stat('circle-check', 'اینیشیتیوی تحویل‌شده', `<span data-count="${done}" data-cid="j-n">${fa(done)}</span><em> از ${fa(picked.length)}</em>`, '', 'انجام‌شده یا توسعه‌تمام‌شده، از اینیشیتیوهایی که ماه دارند')
      : stat('zap', 'امتیاز تحویل‌شده', `<span data-count="${earned}" data-cid="j-xp">${fa(earned)}</span><em> از ${fa(xp)}</em>`, '', 'هر کار بر اساس سایزش امتیاز دارد (XS ۲۰ تا XXL ۷۰)؛ توسعه‌تمام‌شده ۶۰٪ حساب می‌شود');
    return `<section class="viz-card full journey-card" data-card="journey">
      <header><div><h3>مسیر تحویل</h3><p>هر گره یک ماه تحویل است؛ حلقه نشان می‌دهد چند درصدِ ${byCount ? 'اینیشیتیوهای' : 'امتیازِ'} آن ماه تحویل شده. نشان شعله یعنی بزرگ‌ترین کارِ آن ماه هنوز تحویل نشده؛ تاج یعنی تحویل شده.</p></div>
        ${measureTools()}
        <button class="icon-btn" data-act="toggle-table" data-hint="نمایش جدول" aria-label="نمایش جدول داده">${icon('table-2', 16)}</button></header>
      <div class="jstats">
        ${stat('rocket', 'نرخ تحویل', `<span data-count="${Math.round(rate)}" data-fmt="pct" data-cid="j-rate">${faPct(rate)}</span>`, 'is-main', byCount ? 'سهم اینیشیتیوهای ماه‌دار که تحویل شده‌اند' : 'سهم امتیازِ اینیشیتیوهای ماه‌دار که تحویل شده')}
        ${countStat}
        ${stat('swords', 'کارهای بزرگِ تحویل‌شده', `<span data-count="${dead}" data-cid="j-boss">${fa(dead)}</span><em> از ${fa(bosses.length)}</em>`, '', `در هر ماه بزرگ‌ترین اینیشیتیو (سایز L یا بالاتر) را جدا می‌شماریم. ${fa(bosses.length)} ماه چنین کاری دارند و از آن‌ها ${fa(dead)} تا تحویل شده است.`)}
        ${stat('users', 'سطح تیم', `<span>${fa(team.level)}</span><em> ${esc(team.name)}</em><i class="jmeter"><u style="width:${team.pct}%"></u></i>`, '', `بازی‌وار: مجموع امتیاز تحویل‌شده‌ی کل بورد (${fa(earned)}) به یک سطح تبدیل می‌شود؛ هر سطح از قبلی گران‌تر است. ${fa(Math.max(0, Math.round(team.span - team.into)))} امتیاز تا سطح ${fa(team.level + 1)} مانده`)}
      </div>
      <div class="viz-body">${SFR.viz.journey({ nodes, fresh, measure: S.dash.measure })}</div>
    </section>`;
  }

  /* ---------- month workload (status / size / points) ---------- */
  function byMonth(rows) {
    const cats = monthCats();
    const mode = S.dash.monthBy;
    const data = {};
    let series;
    let opts = {};
    if (mode === 'status') {
      series = SERIES.filter((s) => !(S.dash.hideCanceled && s.key === 'canceled'));
      rows.forEach((i) => {
        const c = colOf(i);
        if (c) ((data[c] ||= {})[i.status] = (data[c][i.status] || 0) + 1);
      });
    } else {
      series = [...SFR.SIZES.map((k) => ({ key: k, label: `${k} · ${SFR.SIZE_META[k].fa}`, color: `var(--sz-${k.toLowerCase()})` })), { key: 'NA', drill: '—', label: 'بی‌سایز', color: 'var(--sz-na)' }];
      opts = { seriesDrill: 'size', unit: mode === 'xp' ? 'امتیاز' : 'اینیشیتیو' };
      rows.forEach((i) => {
        const c = colOf(i);
        if (!c || i.status === 'canceled') return;
        const k = SFR.sizeKey(i.size) || 'NA';
        (data[c] ||= {})[k] = (data[c][k] || 0) + (mode === 'xp' ? SFR.xpOf(i) : 1);
      });
    }
    return charts.stackedColumns({ cats, series, data, drill: 'month', ...opts });
  }
  const monthTools = () =>
    `<div class="switch switch-sm" role="tablist" aria-label="رنگ ستون‌ها">${[['status', 'وضعیت'], ['size', 'سایز'], ['xp', 'امتیاز']]
      .map(([k, l]) => `<button role="tab" aria-selected="${S.dash.monthBy === k}" data-act="dash-monthby" data-v="${k}">${l}</button>`)
      .join('')}</div>`;

  function groupRows(rows, keyFn, { labelFn = (k) => k, avatarFn, top = 99 } = {}) {
    const m = new Map();
    rows.forEach((i) =>
      [].concat(keyFn(i)).forEach((k) => {
        if (k == null) return;
        const e = m.get(k) || { key: k, label: labelFn(k), values: {}, avatar: avatarFn?.(i) };
        e.values[i.status] = (e.values[i.status] || 0) + 1;
        m.set(k, e);
      })
    );
    const tot = (r) => Object.values(r.values).reduce((a, b) => a + b, 0);
    return [...m.values()].sort((a, b) => tot(b) - tot(a)).slice(0, top);
  }

  /* ---------- analyses ---------- */
  function healthCard(rows) {
    const live = rows.filter((i) => colOf(i) !== backlogCol() && i.status !== 'canceled');
    const open = live.filter(SFR.isOpen);
    const m = (label, ok, total, fix, drillF) => ({ label, ok, total, fix, drill: drillF, pct: total ? (ok / total) * 100 : 100 });
    const meters = [
      m('سایز مشخص است', live.filter((i) => SFR.sizeKey(i.size)).length, live.length, 'بی‌سایز', { unsized: true }),
      m('مسئول دارد', live.filter((i) => i.poc).length, live.length, 'بدون مسئول', { noOwner: true }),
      m('تازه است (زیر ۱۴ روز)', open.filter((i) => !SFR.isStale(i)).length, open.length, 'بی‌خبر', { stale: true }),
      m('بدون تأخیر', live.filter((i) => !i.delayed).length, live.length, 'تأخیری', { delayed: true }),
    ];
    const score = Math.round(meters.reduce((a, x) => a + x.pct, 0) / meters.length);
    const tier = score >= 85 ? 'عالی' : score >= 70 ? 'خوب' : score >= 50 ? 'نیازمند توجه' : 'بحرانی';
    return card('health', 'سلامت نقشه‌راه', 'چهار نشانه که نشان می‌دهند بورد قابل‌اعتماد است', SFR.viz.vitals({ score, tier, meters }), { noTable: true });
  }

  function heatCard(rows) {
    const cats = monthCats();
    const live = rows.filter((i) => colOf(i) !== backlogCol() && i.status !== 'canceled');
    const fnCount = {};
    live.forEach((i) => (i.fn.length ? i.fn : ['نامشخص']).forEach((f) => (fnCount[f] = (fnCount[f] || 0) + 1)));
    const top = Object.entries(fnCount).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k]) => ({ key: k, label: k }));
    const cell = (r, c) => {
      const it = live.filter((i) => colOf(i) === c.id && (i.fn.length ? i.fn : ['نامشخص']).includes(r.key));
      return { n: it.length, xp: it.reduce((a, i) => a + SFR.xpOf(i), 0), late: it.filter((i) => i.delayed && !isDone(i)).length };
    };
    const m = S.dash.measure;
    return card('heat', 'نقشه‌ی گرمایی بار', `هر سلول: اینیشیتیوهای یک فانکشن در یک ماه؛ تیره‌تر یعنی ${m === 'n' ? 'تعداد اینیشیتیو' : 'امتیاز (بار)'} بیشتر`, SFR.viz.heatmap({ rows: top, cols: cats, cell, measure: m, drillOf: (r, c) => ({ fn: r.key, month: c.id }) }), { wide: true, tools: measureTools() });
  }

  function burnCard(rows) {
    const cats = monthCats();
    const live = rows.filter((i) => i.status !== 'canceled');
    const lastShown = cats.reduce((a, c, i) => (c.state !== 'future' ? i : a), -1);
    const byCount = S.dash.measure === 'n';
    let p = 0;
    let d = 0;
    const planned = [];
    const delivered = [];
    cats.forEach((c, i) => {
      live.filter((x) => colOf(x) === c.id).forEach((x) => {
        p += byCount ? 1 : SFR.xpOf(x);
        d += byCount ? (isDone(x) ? 1 : 0) : SFR.earnedOf(x);
      });
      planned.push(p);
      delivered.push(i <= lastShown ? d : null);
    });
    return card('burn', 'برنامه در برابر تحویل', `مجموع ${byCount ? 'اینیشیتیوهای' : 'امتیازِ'} برنامه‌ریزی‌شده و تحویل‌شده تا پایان هر ماه؛ فاصله‌ی دو خط یعنی عقب‌افتادگی`, SFR.viz.burnup({ cats, planned, delivered, unit: byCount ? 'اینیشیتیو' : 'امتیاز' }), { wide: true, tools: measureTools() });
  }

  /* Three podiums, three ways to be good: keeping promises, carrying load, keeping the board tidy. None of them
   * rewards raw volume of big initiatives, so a PM with a few small, well-run items shines as much as one with a giant. */
  function podiumCard(rows) {
    const mode = S.dash.podium;
    const win = SFR.cycleWindow(S.dash.cycle);
    const stateOf = (i) => (colOf(i) && colOf(i) !== backlogCol() ? SFR.monthState(colOf(i), win)?.state : null);
    const live = rows.filter((i) => i.status !== 'canceled' && i.poc);
    const by = new Map();
    live.forEach((i) => (by.has(i.poc.name) ? by.get(i.poc.name).push(i) : by.set(i.poc.name, [i])));
    const person = (list) => ({ label: list[0].poc.display || list[0].poc.name, avatar: list[0].poc.avatar, key: list[0].poc.name });
    let people = [];
    let unit = '';
    let fmt = 'num';
    let sub;
    let head;
    if (mode === 'reliable') {
      sub = 'چه نسبتی از کارهای ماه‌های گذشته‌شان را تحویل داده‌اند؛ حجم و سایز اثری ندارد (حداقل سه مورد)';
      fmt = 'pct';
      head = ['نفر', 'درصد تحویل', 'تحویل‌شده', 'سررسیدشده'];
      people = [...by.values()]
        .map((l) => {
          const due = l.filter((i) => stateOf(i) === 'past');
          const done = due.filter(isDone).length;
          return { ...person(l), due: due.length, done, value: due.length ? (done / due.length) * 100 : 0, detail: `${fa(done)} از ${fa(due.length)} تحویل` };
        })
        .filter((p) => p.due >= 3)
        .sort((a, b) => b.value - a.value || b.due - a.due);
    } else if (mode === 'load') {
      sub = 'چقدر کار روی دوش دارند: هفته‌ی کارِ تحویل‌شده به‌اضافه‌ی نیمی از کارهای در جریان';
      unit = 'هفته';
      head = ['نفر', 'هفته‌ی کاری', 'تحویل‌شده', 'در جریان'];
      people = [...by.values()]
        .map((l) => {
          const w = (st) => l.filter((i) => i.status === st).reduce((a, i) => a + SFR.loadWeeks(i), 0);
          const value = w('done') + w('devdone') * 0.6 + w('progress') * 0.5 + w('pending') * 0.25;
          return { ...person(l), value: Math.round(value), done: l.filter(isDone).length, due: l.filter((i) => i.status === 'progress').length, detail: `${fa(l.filter(isDone).length)} تحویل · ${fa(l.filter((i) => i.status === 'progress').length)} در جریان` };
        })
        .filter((p) => p.value > 0)
        .sort((a, b) => b.value - a.value);
    } else {
      sub = 'چند درصد از کارهای بازشان سایز دارد و بیش از ۱۴ روز بی‌خبر نیست (حداقل سه مورد)';
      fmt = 'pct';
      head = ['نفر', 'درصد منظم', 'منظم', 'باز'];
      people = [...by.values()]
        .map((l) => {
          const open = l.filter((i) => SFR.isOpen(i) && ['current', 'future'].includes(stateOf(i)));
          const ok = open.filter((i) => SFR.sizeKey(i.size) && SFR.daysSince(i.updated) <= 14).length;
          return { ...person(l), due: open.length, done: ok, value: open.length ? (ok / open.length) * 100 : 0, detail: `${fa(ok)} از ${fa(open.length)} مرتب` };
        })
        .filter((p) => p.due >= 3)
        .sort((a, b) => b.value - a.value || b.due - a.due);
    }
    people.forEach((p) => (p.display = fmt === 'pct' ? faPct(p.value) : fa(p.value)));
    const tools = seg('dash-podium', mode, [['reliable', 'قول و عمل'], ['load', 'پرکار'], ['tidy', 'منظم']], 'سکو');
    return card('podium', 'سکوی قهرمانان', sub, SFR.viz.podium({ people, max: Math.max(1, ...people.map((p) => p.value)), unit, fmt, head }), { tall: false, tools, cls: 'pd-card' });
  }

  function sizeCard(rows) {
    const live = rows.filter((i) => i.status !== 'canceled');
    const items = [...SFR.SIZES, '—'].map((k) => ({
      key: k,
      label: k === '—' ? 'بی‌سایز' : `${k} · ${SFR.SIZE_META[k].fa}`,
      color: k === '—' ? 'var(--sz-na)' : `var(--sz-${k.toLowerCase()})`,
      value: live.filter((i) => (SFR.sizeKey(i.size) || '—') === k).length,
    }));
    const xp = live.reduce((a, i) => a + SFR.xpOf(i), 0);
    const key = `<div class="xp-key"><h4>هر سایز چقدر کار و چند امتیاز است؟</h4><div>${SFR.SIZES.map((k) => `<span>${SFR.sizeChip(k)}<small>${SFR.SIZE_META[k].fa}</small><b>${fa(SFR.SIZE_META[k].xp)}</b></span>`).join('')}</div><p>وزن سایز عمداً فشرده است: هر پله دو برابرِ کار است ولی فقط یک پله امتیاز بیشتر دارد، پس XXL حدود سه برابر XS می‌ارزد نه شانزده برابر. «حیاتی» (Make or Fail) یک‌چهارم بیشتر؛ «انجام‌شده» کامل، «توسعه تمام‌شده» ۶۰٪ و «در حال انجام» ۲۵٪ (۱۰٪ اگر بیش از ۱۴ روز بی‌خبر).</p></div>`;
    return card('size', 'سایز تسک‌ها', 'چند اینیشیتیو از هر سایز داریم', charts.donut({ items, drill: 'size', center: { value: live.length, label: `${fa(xp)} امتیاز` } }) + key);
  }

  function pulseCard(rows) {
    const N = 10;
    const items = Array.from({ length: N }, (_, k) => {
      const w = N - 1 - k;
      const start = weekStart(Date.now() - w * 7 * 864e5);
      return { key: w, label: w === 0 ? 'این هفته' : SFR.jDate(start), value: rows.filter((i) => weeksAgo(i.updated) === w).length };
    });
    const hot = items[N - 1].value;
    const avg = Math.round(items.slice(0, N - 1).reduce((a, x) => a + x.value, 0) / (N - 1));
    return card('pulse', 'ضربان بورد', `چند اینیشیتیو در هر هفته دست خورده‌اند. این هفته ${fa(hot)}، میانگین ده هفته‌ی اخیر ${fa(avg)}`, charts.columns({ items: items.map((x) => ({ ...x, color: x.key === 0 ? 'var(--accent)' : 'var(--s-cat1)' })), drillKey: 'week' }), { wide: true });
  }

  function staleCard(rows) {
    const stale = rows.filter(SFR.isStale).sort((a, b) => new Date(a.updated) - new Date(b.updated));
    return card(
      'stale',
      'بی‌خبرها',
      `${fa(stale.length)} مورد ماه‌دار بیش از ۱۴ روز تغییر نکرده؛ یک دیدگاه کوتاه کافی است`,
      stale.length
        ? `<ul class="mini-list stale-list">${stale
            .slice(0, 7)
            .map((i) => `<li data-key="${esc(i.key)}" tabindex="0"><span class="days">${fa(SFR.daysSince(i.updated))}<small>روز</small></span><span dir="auto">${esc(SFR.splitTitle(i.summary).title)}</span>${SFR.avatar(i.poc, 'xs')}</li>`)
            .join('')}</ul>${stale.length > 7 ? `<button class="more" data-drill="${esc(JSON.stringify({ stale: true }))}">همه‌ی ${fa(stale.length)} مورد</button>` : ''}`
        : SFR.empty('همه‌چیز تازه است', 'هیچ مورد ماه‌داری بیش از دو هفته بی‌خبر نمانده.', 'circle-check'),
      { noTable: true }
    );
  }

  function badgesCard() {
    const bs = SFR.game.badges().sort((a, b) => b.done - a.done || b.now / b.goal - a.now / a.goal);
    return card('badges', 'دستاوردها', `${fa(bs.filter((b) => b.done).length)} از ${fa(bs.length)} باز شده؛ دسته‌ی «تیمی» برای همه‌ی ما حساب می‌شود`, `<div class="badge-grid">${bs.map((b) => SFR.game.badgeHtml(b)).join('')}</div>`, { full: true, noTable: true });
  }


  /* ---------- size report ----------
   * Sizes are time boxes: XS = half a week, S = 1, M = 2, L = 4, XL = 8, XXL = 16 (each step doubles). The main chart
   * stacks delivered / in-progress / planned per size and has its own cycle · month · function filters. */
  const SKEYS = [...SFR.SIZES, '—'];
  const tally = (items) => {
    const d = Object.fromEntries(SKEYS.map((k) => [k, { n: 0, w: 0 }]));
    items.forEach((i) => {
      const x = d[SFR.sizeKey(i.size) || '—'];
      x.n += 1;
      x.w += SFR.weeksOf(i);
    });
    return d;
  };
  const fnsOf = (i) => (i.fn.length ? i.fn : ['نامشخص']);
  const seg = (act, cur, opts, label) =>
    `<div class="switch switch-sm" role="tablist" aria-label="${label}">${opts
      .map(([k, l]) => `<button role="tab" aria-selected="${cur === k}" data-act="${act}" data-v="${k}">${l}</button>`)
      .join('')}</div>`;
  const valTools = () => seg('dash-sizeval', S.dash.sizeVal, [['n', 'تعداد'], ['w', 'هفته‌ی کاری']], 'واحد');
  const monthOk = (i, m) => (m === '' ? colOf(i) !== backlogCol() : m === 'backlog' ? colOf(i) === backlogCol() : colOf(i) === m);
  // Report rows: every live initiative of the chosen cycle and month (no function filter; the chart adds that itself).
  const srRows = () => {
    const f = S.dash.sr;
    return [...S.rest.values()].filter((i) => !i.isEpic && phaseOf(i) && (!f.cycle || i.cycle.includes(f.cycle)) && monthOk(i, f.month));
  };
  const sel = (bind, icon_, value, opts) =>
    `<label class="select">${icon(icon_, 14)}<select data-bind="${bind}" aria-label="${esc(opts[0][1])}">${opts
      .map(([v, l]) => `<option value="${esc(v)}"${value === v ? ' selected' : ''}>${esc(l)}</option>`)
      .join('')}</select>${icon('chevron-down', 14)}</label>`;
  const defRow = () =>
    `<div class="sr-def"><b>سایز یعنی زمانِ کار:</b>${SFR.SIZES.map((k) => `<span>${SFR.sizeChip(k)}<em>${SFR.SIZE_META[k].fa}</em></span>`).join('')}<small>هر پله دو برابر پله‌ی قبل است</small></div>`;

  function sizeReportCards() {
    if (!S.rest.size) return '';
    const f = S.dash.sr;
    const val = S.dash.sizeVal;
    const base = srRows();
    const cycles = [...new Set([...S.rest.values()].flatMap((i) => (i.isEpic ? [] : i.cycle)))].sort().reverse();
    const fnList = [...new Set([...S.rest.values()].flatMap((i) => (i.isEpic ? [] : fnsOf(i))))].sort();
    const monthOpts = [['', 'همه‌ی ماه‌ها (بدون بک‌لاگ)'], ...S.columns.filter((c) => SFR.monthKey(c.name) !== 'backlog').map((c) => [c.id, SFR.monthLabel(c.name)[0] + ' · ' + SFR.monthLabel(c.name)[1].split(' ← ')[0]]), ['backlog', 'بک‌لاگ (ماه‌نداده)']];
    const dirty = f.cycle || f.month || f.fn;
    const bar = `<div class="sr-filters">
      ${sel('sr-cycle', 'refresh-cw', f.cycle, [['', 'همه‌ی سیکل‌ها'], ...cycles.map((c) => [c, c])])}
      ${sel('sr-month', 'calendar', f.month, monthOpts)}
      ${sel('sr-fn', 'target', f.fn, [['', 'همه‌ی فانکشن‌ها'], ...fnList.map((x) => [x, x])])}
      ${dirty ? `<button class="chip" data-act="sr-reset">${icon('x', 14)}پاک‌کردن فیلترها</button>` : ''}
      <span class="grow"></span><button class="chip" data-act="dash-csv" data-hint="دانلود گزارش کامل (همه‌ی فانکشن‌ها × مرحله‌ها × سایزها)">${icon('file-spreadsheet', 14)}CSV</button>
    </div>`;

    // ---- main chart: size on the x-axis, phases stacked
    const scoped = f.fn ? base.filter((i) => fnsOf(i).includes(f.fn)) : base;
    const KEY = { delivered: 'done', progress: 'progress', planned: 'todo', backlog: 'backlog' };
    const cats = [...SFR.SIZES.map((k) => ({ key: k, label: k, sub: SFR.SIZE_META[k].fa })), ...(val === 'n' ? [{ key: '—', label: 'بی‌سایز', sub: 'نامعلوم' }] : [])];
    const data = Object.fromEntries(cats.map((c) => [c.key, { done: 0, progress: 0, todo: 0, backlog: 0 }]));
    scoped.forEach((i) => {
      const k = SFR.sizeKey(i.size) || '—';
      if (data[k]) data[k][KEY[phaseOf(i)]] += val === 'n' ? 1 : SFR.weeksOf(i);
    });
    const used = (k) => cats.some((c) => data[c.key][k] > 0);
    const series = [
      { key: 'done', label: 'تحویل‌شده', drill: 'delivered' },
      { key: 'progress', label: 'در حال انجام', drill: 'progress' },
      { key: 'todo', label: 'برنامه‌ریزی‌شده', drill: 'planned' },
      ...(used('backlog') ? [{ key: 'backlog', label: 'بک‌لاگ', drill: 'backlog', color: 'var(--ink-3)' }] : []),
    ];
    const weeks = scoped.reduce((a, i) => a + SFR.weeksOf(i), 0);
    const doneW = scoped.filter((i) => phaseOf(i) === 'delivered').reduce((a, i) => a + SFR.weeksOf(i), 0);
    const doneN = scoped.filter((i) => phaseOf(i) === 'delivered').length;
    const nosize = scoped.filter((i) => !SFR.sizeKey(i.size)).length;
    const stat = (label, html) => `<div class="sr-stat"><small>${label}</small><b>${html}</b></div>`;
    const stats = `<div class="sr-stats">${stat('اینیشیتیو', fa(scoped.length))}${stat('حجم کار', `${fa(weeks)} <i>هفته</i>`)}${stat('تحویل‌شده', `${fa(doneN)} <i>(${faPct(scoped.length ? (doneN / scoped.length) * 100 : 0)})</i>`)}${stat('از حجم کار', faPct(weeks ? (doneW / weeks) * 100 : 0))}${stat('بی‌سایز', fa(nosize))}</div>`;
    const scopeTxt = [f.cycle || 'همه‌ی سیکل‌ها', monthOpts.find(([v]) => v === f.month)[1], f.fn || 'همه‌ی فانکشن‌ها'].join(' · ');
    const A = card(
      'sizerep-chart',
      'تعداد کارها به تفکیک سایز',
      `${esc(scopeTxt)} — هر میله یک سایز؛ رنگ‌ها نشان می‌دهند چند تا تحویل‌شده، در حال انجام یا برنامه‌ریزی‌شده است`,
      stats + (scoped.length ? charts.stackedColumns({ cats, series, data, drill: 'size', seriesDrill: 'phase', unit: val === 'n' ? 'اینیشیتیو' : 'هفته‌ی کاری', segLabels: true, allTotals: true, wide: true }) : SFR.empty('با این فیلترها اینیشیتیوی نیست', 'یکی از فیلترها را کم کنید', 'inbox')) + defRow(),
      { full: true, tools: valTools(), cls: 'srep-card' }
    );

    // ---- per-function matrix (cycle + month filters apply, function filter does not)
    const ph = S.dash.sizePhase;
    const inPh = ph === 'all' ? base : base.filter((i) => phaseOf(i) === ph);
    const m = new Map();
    inPh.forEach((i) => fnsOf(i).forEach((x) => (m.has(x) ? m.get(x).push(i) : m.set(x, [i]))));
    const fnRows = [...m.entries()]
      .map(([x, items]) => ({ key: x, label: x, data: tally(items) }))
      .sort((a, b) => SKEYS.reduce((t, k) => t + b.data[k][val] - a.data[k][val], 0) || a.label.localeCompare(b.label));
    const foot = { key: '', label: 'جمع یکتا', data: tally(inPh) };
    const phLabel = ph === 'all' ? 'همه‌ی مرحله‌ها' : PHASES.find((p) => p.key === ph).label;
    const tools = `<div class="tool-row">${seg('dash-sizephase', ph, [['all', 'همه'], ...PHASES.map((p) => [p.key, p.short])], 'مرحله')}${valTools()}</div>`;
    const B = card(
      'sizerep-fn',
      'سایز هر فانکشن',
      `${esc(phLabel)} · ${fa(fnRows.length)} فانکشن؛ اینیشیتیوِ چندفانکشنی در هر فانکشنش شمرده می‌شود و «جمع یکتا» هر مورد را یک بار`,
      fnRows.length
        ? SFR.viz.sizeReport({ rows: fnRows, foot, val, unitLabel: val === 'w' ? '(هفته)' : '(اینیشیتیو)', drillOf: (r, k) => ({ ...(ph !== 'all' ? { phase: ph } : {}), ...(r.key === 'نامشخص' ? { noFn: true } : r.key ? { fn: r.key } : {}), ...(k ? { size: k } : {}) }) })
        : SFR.empty('موردی در این مرحله نیست', '', 'inbox'),
      { full: true, noTable: true, tools, cls: 'srep-card' }
    );
    return bar + A + B;
  }

  SFR.exportSizeCsv = () => {
    const live = srRows();
    const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const out = [['فانکشن', 'مرحله', ...SFR.SIZES, 'بی‌سایز', 'جمع', 'هفته‌ی کاری'].map(q).join(',')];
    const add = (name, phase, items) => {
      const d = tally(items);
      out.push([q(name), q(phase), ...SKEYS.map((k) => d[k].n), items.length, SKEYS.reduce((a, k) => a + d[k].w, 0)].join(','));
    };
    const fns = [...new Set(live.flatMap(fnsOf))].sort();
    add('همه‌ی فانکشن‌ها', 'همه‌ی مرحله‌ها', live);
    PHASES.forEach((p) => add('همه‌ی فانکشن‌ها', p.label, live.filter((i) => phaseOf(i) === p.key)));
    fns.forEach((f) => {
      const mine = live.filter((i) => fnsOf(i).includes(f));
      add(f, 'همه‌ی مرحله‌ها', mine);
      PHASES.forEach((p) => add(f, p.label, mine.filter((i) => phaseOf(i) === p.key)));
    });
    const blob = new Blob(['﻿' + out.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `size-report-${new Date().toISOString().slice(0, 10)}.csv`;
    SFR.root.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  };

  const section = (title, sub) => `<div class="dash-sec"><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>`;

  SFR.renderDashboard = (el) => {
    if (S.status !== 'ready') return;
    if (!S.rest.size) {
      el.innerHTML = `<div class="dash"><div class="loading-note">${icon('refresh-cw', 16, 'spin')} در حال خواندن اینیشیتیوها از جیرا…</div><div class="dash-grid">${'<section class="viz-card skel-card"></section>'.repeat(4)}</div></div>`;
      return;
    }
    const rows = dataset();
    const cycles = {};
    const fns = {};
    S.rest.forEach((i) => {
      if (i.isEpic) return;
      i.cycle.forEach((c) => (cycles[c] = (cycles[c] || 0) + 1));
      i.fn.forEach((f) => (fns[f] = (fns[f] || 0) + 1));
    });
    const cycleList = Object.keys(cycles).sort().reverse();
    const d = S.dash;
    const fresh = S.restReady && !S.anim.dash;
    if (S.restReady) S.anim.dash = true;
    const series = SERIES.filter((s) => !(d.hideCanceled && s.key === 'canceled'));
    const fnRows = groupRows(rows, (i) => (i.fn.length ? i.fn : ['نامشخص']));
    const pocRows = groupRows(rows, (i) => i.poc?.name || '—', {
      labelFn: (k) => (k === '—' ? 'بدون مسئول' : [...S.rest.values()].find((x) => x.poc?.name === k)?.poc.display || k),
      avatarFn: (i) => i.poc?.avatar,
      top: 12,
    });
    const stratRows = groupRows(rows, (i) => i.strategic || '—', { labelFn: (k) => (k === '—' ? 'تعیین‌نشده' : SFR.STRATEGIC[k] || k) });
    const statusItems = SFR.STATUS.filter((s) => !(d.hideCanceled && s.key === 'canceled')).map((s) => ({ key: s.key, label: s.label, value: rows.filter((i) => i.status === s.key).length }));
    const monthRank = (i) => {
      const idx = S.columns.findIndex((c) => c.id === colOf(i));
      return colOf(i) === backlogCol() || idx < 0 ? 999 : idx;
    };
    // Still-open delays first (they need attention), then by delivery month.
    const delayed = rows
      .filter((i) => i.delayed)
      .sort((a, b) => isDone(a) - isDone(b) || monthRank(a) - monthRank(b) || new Date(b.updated) - new Date(a.updated));
    const modeSub = { status: 'هر ستون یک ماه تحویل؛ رنگ‌ها وضعیت اینیشیتیوها', size: 'هر ستون یک ماه تحویل؛ رنگ‌ها سایز اینیشیتیوها', xp: 'مجموع امتیاز هر ماه؛ ماه‌های سنگین را پیش از رسیدن پیدا کنید' }[d.monthBy];

    el.innerHTML = `<div class="dash${fresh ? ' is-fresh' : ''}">
      <div class="dash-filters">
        <div class="switch" role="tablist" aria-label="سیکل">
          <button role="tab" aria-selected="${!d.cycle}" data-act="dash-cycle" data-v="">همه‌ی سیکل‌ها</button>
          ${cycleList.map((c) => `<button role="tab" aria-selected="${d.cycle === c}" data-act="dash-cycle" data-v="${esc(c)}"><bdi dir="ltr">${esc(c)}</bdi>${SFR.count(cycles[c])}</button>`).join('')}
        </div>
        <label class="select">${icon('target', 14)}<select data-bind="dash-fn" aria-label="فانکشن">
          <option value="">همه‌ی فانکشن‌ها</option>
          ${Object.keys(fns)
            .sort()
            .map((f) => `<option value="${esc(f)}"${d.fn === f ? ' selected' : ''}>${esc(f)} (${fa(fns[f])})</option>`)
            .join('')}
        </select>${icon('chevron-down', 14)}</label>
        <button class="chip${d.hideCanceled ? ' is-on' : ''}" data-act="dash-canceled" aria-pressed="${d.hideCanceled}">${icon(d.hideCanceled ? 'eye-off' : 'eye', 14)}بدون لغوشده‌ها</button>
        <span class="grow"></span>
        <span class="muted">${S.restReady ? `${fa(rows.length)} اینیشیتیو · روی هر بخش نمودار بزنید تا فهرستش باز شود` : `${icon('refresh-cw', 14, 'spin')} ${fa(S.restLoaded)} از ${fa(S.restTotal)}`}</span>
      </div>
      ${journeyCard(rows, fresh)}
      ${tiles(rows)}
      <div class="dash-grid">
        ${section('بار و ظرفیت', 'کدام ماه‌ها و فانکشن‌ها سنگین‌اند؟')}
        ${card('month', 'بار هر ماه', modeSub, byMonth(rows), { wide: true, tools: monthTools() })}
        ${healthCard(rows)}
        ${heatCard(rows)}
        ${sizeCard(rows)}
        ${section('گزارش سایز', 'چند کار از هر سایز تحویل شده، در حال انجام است یا در برنامه؛ با فیلتر سیکل، ماه و فانکشن')}
        ${sizeReportCards()}
        ${section('زمان‌بندی و آدم‌ها', 'آیا به برنامه نزدیکیم و چه کسانی بار را می‌کشند؟')}
        ${burnCard(rows)}
        ${podiumCard(rows)}
        ${section('فانکشن‌ها و ترکیب')}
        ${card('fn', 'پیشرفت فانکشن‌ها', 'تعداد و درصد تحویل هر فانکشن', charts.hStacked({ rows: fnRows, series, drillKey: 'fn' }), { tall: true })}
        ${card('poc', 'بار کاری مسئول‌ها', 'دوازده Product PoC با بیشترین اینیشیتیو', charts.hStacked({ rows: pocRows, series, drillKey: 'poc' }), { tall: true })}
        ${card('status', 'ترکیب وضعیت', 'سهم هر وضعیت از کل', charts.donut({ items: statusItems, center: { value: rows.length, label: 'اینیشیتیو' } }))}
        ${card('strategic', 'نوع استراتژیک', 'Make or Fail، شتاب‌دهنده، کاهش ریسک', charts.hStacked({ rows: stratRows, series, drillKey: 'strategic' }))}
        ${section('ضربان بورد', 'بورد چقدر زنده است؟')}
        ${pulseCard(rows)}
        ${staleCard(rows)}
        ${section('دستاوردها')}
        ${badgesCard()}
        ${section('تأخیری‌ها')}
        ${card(
          'delayed',
          'تأخیری‌ها',
          `${fa(delayed.length)} اینیشیتیو با برچسب Delayed · ${fa(delayed.filter((i) => !isDone(i)).length)} مورد هنوز باز؛ باز‌ها اول آمده‌اند`,
          delayed.length
            ? `<div class="dtable-wrap"><table class="dtable">
                <thead><tr><th>وضعیت</th><th>اینیشیتیو</th><th>ماه تحویل</th><th>فانکشن</th><th>مسئول</th><th class="num">دیدگاه</th><th>آخرین تغییر</th></tr></thead>
                <tbody>${delayed
                  .slice(0, S.ui.colLimit.delayed || 10)
                  .map((i) => {
                    const c = S.columns.find((x) => x.id === colOf(i));
                    const t = SFR.splitTitle(i.summary);
                    return `<tr data-key="${esc(i.key)}" tabindex="0">
                      <td>${SFR.statusPill(i.status, { short: true })}</td>
                      <td class="dt-title"><span dir="auto">${esc(t.title)}</span><small>${SFR.keyChip(i.key)}${t.tags
                        .slice(0, 2)
                        .map((x) => `<bdi class="tag" dir="auto">${esc(x)}</bdi>`)
                        .join('')}</small></td>
                      <td>${c ? `<span class="tag">${icon('calendar', 12)}${esc(SFR.monthLabel(c.name)[0])}</span>` : '—'}</td>
                      <td class="dt-fn" dir="auto">${esc(i.fn.join('، ') || '—')}</td>
                      <td><span class="who">${SFR.avatar(i.poc, 'xs')}<span dir="auto">${esc(SFR.firstName(i.poc?.display) || '—')}</span></span></td>
                      <td class="num">${i.commentCount ? fa(i.commentCount) : '—'}</td>
                      <td class="muted">${SFR.ago(i.updated)}</td>
                    </tr>`;
                  })
                  .join('')}</tbody></table></div>${
                delayed.length > (S.ui.colLimit.delayed || 10)
                  ? `<button class="more" data-act="more" data-col="delayed">نمایش ${fa(Math.min(10, delayed.length - (S.ui.colLimit.delayed || 10)))} مورد دیگر · ${fa(delayed.length - (S.ui.colLimit.delayed || 10))} باقی‌مانده</button>`
                  : ''
              }`
            : SFR.empty('موردی با تأخیر نیست', '', 'circle-check'),
          { full: true, noTable: true }
        )}
      </div>
    </div>`;
    SFR.fx.countUp(el);
  };

  /* ---------- drill-down sheet ---------- */
  SFR.openDrill = (f) => {
    const rows = dataset().filter((i) => matches(i, f));
    const parts = [];
    if (f.month) parts.push(SFR.monthLabel(S.columns.find((c) => c.id === f.month)?.name)[0]);
    if (f.status) parts.push(SFR.statusMeta(f.status).label);
    if (f.fn) parts.push(f.fn);
    if (f.noFn) parts.push('بدون فانکشن');
    if (f.poc) parts.push(rows[0]?.poc?.display || 'بدون مسئول');
    if (f.strategic) parts.push(SFR.STRATEGIC[f.strategic] || (f.strategic === '—' ? 'تعیین‌نشده' : f.strategic));
    if (f.phase) parts.push(PHASES.find((p) => p.key === f.phase)?.label);
    if (f.size) parts.push(f.size === '—' ? 'بی‌سایز' : `سایز ${f.size}`);
    if (f.delayed) parts.push('تأخیری');
    if (f.picked) parts.push('ماه‌دار');
    if (f.unsized) parts.push('بدون سایز');
    if (f.noOwner) parts.push('بدون مسئول');
    if (f.stale) parts.push('بی‌خبر بیش از ۱۴ روز');
    if (f.week !== undefined) parts.push(f.week === 0 ? 'به‌روزشده در این هفته' : `به‌روزشده ${f.week} هفته پیش`);
    const sheet = SFR.root.querySelector('.sheet');
    sheet.classList.remove('is-sif');
    sheet.querySelector('.sheet-panel').innerHTML = `
      <header class="d-head"><b>${esc(parts.join(' · ') || 'همه')}</b>${SFR.count(rows.length)}<span class="grow"></span>
        <button class="icon-btn" data-act="close-sheet" aria-label="بستن">${icon('x', 18)}</button></header>
      <ul class="mini-list big">${rows
        .slice(0, 300)
        .map((i) => {
          const c = S.columns.find((x) => x.id === colOf(i));
          return `<li data-key="${esc(i.key)}" tabindex="0">${SFR.statusPill(i.status, { short: true })}<span dir="auto">${esc(i.summary)}</span>${SFR.avatar(i.poc, 'xs')}<small>${
            c ? esc(SFR.monthLabel(c.name)[0]) : ''
          }</small></li>`;
        })
        .join('')}</ul>`;
    sheet.classList.add('is-open');
    sheet.querySelector('[data-act="close-sheet"]').focus();
  };
  SFR.closeDrill = () => SFR.root.querySelector('.sheet').classList.remove('is-open');
})();

/* app/views/sif.js */
/* Roadmap Lens — the SIF tab: the strategy-initiative funnel, where it is stuck, what it is worth and how it turns into delivery. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const Z = S.sif;
  const { esc, fa, faPct, icon, charts } = SFR;
  const D = () => SFR.sif;

  /* ---------- small helpers ---------- */
  const fd = (d) => (d < 0.95 ? 'کمتر از ۱ روز' : `${fa(Math.round(d))} روز`);
  const fv = (n) => (n == null ? '—' : fa(n >= 100 ? Math.round(n) : Math.round(n * 10) / 10));
  const sd = (f) => `data-sd="${esc(JSON.stringify(f))}"`;
  const tip = (title, rows) =>
    esc(`<b>${esc(title)}</b>` + rows.map((r) => `<span class="tt-row"><i style="background:${r.color || 'transparent'}"></i>${esc(r.label)}<em>${esc(r.value)}</em></span>`).join(''));
  const col = (st) => `var(--sf-${st})`;
  const pill = (st) => `<span class="sf-pill" style="--c:${D().META[st] ? col(st) : 'var(--ink-3)'}"><i></i>${esc(D().META[st]?.label || 'سایر')}</span>`;
  const link = (r, inner) => `<a class="sf-link" href="/browse/${esc(r.key)}" target="_blank" rel="noopener">${inner}</a>`;
  const titleOf = (r) => `<span dir="auto">${esc(SFR.splitTitle(r.title).title)}</span>`;
  const who = (p) => (p ? `<span class="who">${SFR.avatar(p, 'xs')}<span dir="auto">${esc(SFR.firstName(p.display) || p.display || '')}</span></span>` : '<span class="muted">—</span>');
  const holderOf = (r) => D().holdersOf(r)[0];

  const card = (id, title, sub, body, { wide = false, full = false, noTable = false, cls = '' } = {}) =>
    `<section class="viz-card${wide ? ' wide' : ''}${full ? ' full' : ''}${cls ? ` ${cls}` : ''}" data-card="${id}">
      <header><div><h3>${title}</h3>${sub ? `<p>${sub}</p>` : ''}</div>
        ${noTable ? '' : `<button class="icon-btn" data-act="toggle-table" data-hint="نمایش جدول" aria-label="نمایش جدول داده">${icon('table-2', 16)}</button>`}</header>
      <div class="viz-body">${body}</div>
    </section>`;
  const section = (n, title, sub) => `<div class="dash-sec"><h2><em>${fa(n)}</em>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>`;
  const tbl = (head, rows) =>
    `<div class="viz-table"><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows
      .map((r) => `<tr>${r.map((c, i) => `<td${i ? ' class="num"' : ''}>${typeof c === 'number' ? fa(c) : esc(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`;
  const wait = (msg = 'در حال خواندن تاریخچه‌ی وضعیت‌ها…') =>
    `<div class="sif-wait">${icon('refresh-cw', 16, 'spin')}<span>${msg}</span><b>${fa(Z.histDone)} از ${fa(Z.histTotal)}</b></div>`;

  /* ---------- filter bar ---------- */
  const sel = (bind, ic, value, opts) =>
    `<label class="select">${icon(ic, 14)}<select data-bind="${bind}" aria-label="${esc(opts[0][1])}">${opts
      .map(([v, l]) => `<option value="${esc(v)}"${value === v ? ' selected' : ''}>${esc(l)}</option>`)
      .join('')}</select>${icon('chevron-down', 14)}</label>`;
  function filterBar() {
    const f = Z.f;
    const uniq = (get) => [...new Set(Z.rows.flatMap(get).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    const cycles = uniq((r) => r.cycle).reverse();
    const people = new Map();
    Z.rows.forEach((r) => [...r.strategy, ...r.product, ...r.tech, ...r.owners, r.assignee].forEach((p) => p && people.set(p.name, p.display || p.name)));
    const dirty = Object.values(f).some(Boolean);
    return `<div class="sr-filters sif-filters">
      ${sel('sif-cycle', 'refresh-cw', f.cycle, [['', 'همه‌ی سیکل‌ها'], ['__none', 'بدون سیکل'], ...cycles.map((c) => [c, c])])}
      ${sel('sif-focus', 'target', f.focus, [['', 'همه‌ی حوزه‌های اثر'], ...uniq((r) => [r.focus]).map((x) => [x, x])])}
      ${sel('sif-battle', 'swords', f.battle, [['', 'همه‌ی بتل‌ها و پلن‌ها'], ...uniq((r) => [r.battle]).map((x) => [x, x])])}
      ${sel('sif-poc', 'users', f.poc, [['', 'همه‌ی مسئول‌ها'], ...[...people].sort((a, b) => a[1].localeCompare(b[1])).map(([k, v]) => [k, v])])}
      ${sel('sif-fn', 'layers', f.fn, [['', 'همه‌ی فانکشن‌ها'], ...uniq((r) => r.fn).map((x) => [x, x])])}
      ${sel('sif-strat', 'flag', f.strat, [['', 'همه‌ی انواع استراتژیک'], ...uniq((r) => [r.prio]).map((x) => [x, x])])}
      ${dirty ? `<button class="chip" data-act="sif-reset">${icon('x', 14)}پاک‌کردن فیلترها</button>` : ''}
      <span class="grow"></span>
      <button class="chip" data-act="sif-refresh" data-hint="خواندن دوباره از جیرا">${icon('refresh-cw', 14)}به‌روزرسانی</button>
    </div>`;
  }

  /* ---------- summary tiles ---------- */
  function tiles(m) {
    const n = m.rows.length;
    const flow = m.rows.filter((r) => r.rank >= 1 && r.rank <= 3).length;
    const sent = m.funnel[3].reached;
    const t = (label, value, sub, f, tone = '') =>
      `<button class="sif-tile${tone ? ` is-${tone}` : ''}" ${sd(f)}><small>${label}</small><b data-count="${value}">${fa(value)}</b>${sub ? `<em>${sub}</em>` : ''}</button>`;
    return `<div class="sif-tiles">
      ${t('اینیشیتیو', n, 'در این بازه', {})}
      ${t('در مسیر تأیید', flow, 'استراتژی، محصول یا فنی', { st: 'strategy' }, 'flow')}
      ${t('ارسال‌شده به اجرا', sent, n ? `${faPct((sent / n) * 100)} از ایده‌ها` : '', { reached: 4 }, 'ok')}
      ${t('ردشده', m.sides.rejected, n ? faPct((m.sides.rejected / n) * 100) : '', { st: 'rejected' })}
      ${t('گیر‌کرده', m.histOk ? m.stuck.length : 0, m.histOk ? 'بیش از زمان معمول مرحله' : 'تاریخچه در راه است', { stuck: true }, m.stuck.length ? 'warn' : '')}
      ${t('تحویل‌شده در رودمپ', m.pipeline.delivered, S.restReady ? 'از ایده‌های ارسال‌شده' : 'رودمپ در حال بارگذاری', { link: 'delivered' }, 'ok')}
    </div>`;
  }

  function mineBanner(m) {
    if (!S.me || !m.histOk) return '';
    const mine = m.rows.filter((r) => D().WAITING.includes(r.st) && D().holdersOf(r).some((p) => p.name === S.me.name));
    if (!mine.length) return '';
    const oldest = Math.max(...mine.map((r) => D().ageOf(r, m.now)));
    return `<div class="sif-mine">${icon('hourglass', 18)}<div><b>${fa(mine.length)} اینیشیتیو منتظر اقدام شماست</b><small>قدیمی‌ترینشان ${fd(oldest)} است که در یک مرحله مانده</small></div>
      <button class="btn btn-outline btn-sm" ${sd({ mine: true })}>نمایش فهرست</button></div>`;
  }

  /* ---------- 1 · funnel ---------- */
  function funnelCard(m) {
    const total = m.rows.length || 1;
    const leaky = m.funnel.reduce((a, s, k) => (k && m.funnel[k - 1].reached >= 5 && (a == null || s.conv < m.funnel[a].conv) ? k : a), null);
    const body = m.funnel
      .map((s, k) => {
        const t = tip(`${s.label} — ${fa(s.reached)}`, [
          { label: 'تا این مرحله رسیده‌اند', value: fa(s.reached), color: col(s.key) },
          { label: 'همین حالا اینجا هستند', value: fa(s.now) },
          ...(k ? [{ label: 'عبور از مرحله‌ی قبل', value: faPct(s.conv * 100) }] : []),
          ...(s.lostHere ? [{ label: 'ردشده در همین مرحله', value: fa(s.lostHere) }] : []),
        ]);
        return `<div class="fn-row${leaky === k ? ' is-leaky' : ''}">
          <div class="fn-label"><b>${s.label}</b><small dir="ltr">${s.en}</small></div>
          <button class="fn-track" ${sd({ reached: s.rank })} data-tip="${t}" aria-label="${esc(`${s.label}: ${fa(s.reached)}`)}">
            <span class="fn-bar" style="width:${Math.max(0.8, (s.reached / total) * 100)}%;--c:${col(s.key)}"><span class="fn-now" style="width:${s.reached ? (s.now / s.reached) * 100 : 0}%"></span></span>
          </button>
          <div class="fn-val"><b>${fa(s.reached)}</b><small>${faPct((s.reached / total) * 100)} از کل</small></div>
          <div class="fn-conv">${k ? `<span class="conv">${faPct(s.conv * 100)} عبور</span>${leaky === k ? '<em>کم‌ترین عبور</em>' : ''}` : '<span class="conv is-start">نقطه‌ی شروع</span>'}</div>
          <div class="fn-lost">${s.lostHere ? `<button class="lost" ${sd({ lostAt: s.rank })} data-hint="ردشده در این مرحله">${icon('x', 12)}${fa(s.lostHere)} رد</button>` : ''}</div>
        </div>`;
      })
      .join('');
    const table = tbl(
      ['مرحله', 'تا اینجا رسیده‌اند', 'عبور از قبلی (٪)', 'همین حالا اینجا', 'ردشده در این مرحله'],
      m.funnel.map((s) => [s.label, s.reached, Math.round(s.conv * 100), s.now, s.lostHere])
    );
    return card(
      'sif-funnel',
      'چند ایده تا هر مرحله می‌رسند؟',
      'هر ایده از اعتبارسنجی استراتژی شروع می‌کند و تا آماده‌ی برنامه‌ریزی می‌رود · روی هر میله بزنید تا فهرستش باز شود',
      `${m.histOk ? '' : wait()}
       <div class="fn sif-plot">${body}<p class="fn-key"><i class="k1"></i>روشن: تا این مرحله رسیده‌اند <i class="k2"></i>پررنگ: همین حالا همان‌جا هستند</p></div>${table}`,
      { wide: true }
    );
  }

  function sideCard(m) {
    const n = m.rows.length || 1;
    const row = (st, hint) =>
      `<button class="side-row" ${sd({ st })}><i style="background:${col(st)}"></i><span><b>${D().META[st].label}</b><small>${hint}</small></span><strong>${fa(m.sides[st])}</strong><em>${faPct((m.sides[st] / n) * 100)}</em></button>`;
    const back = m.reworkRows.reduce((a, r) => a + r.rework, 0);
    return card(
      'sif-side',
      'بیرون از مسیر اصلی',
      'ایده‌هایی که جلو نمی‌روند',
      `<div class="side-list">
        ${row('rejected', 'تصمیم به انجام‌ندادن')}
        ${row('hold', 'موقتاً نگه داشته شده')}
        ${row('review', 'برگشته پیش مالک برای بازبینی')}
        <button class="side-row" ${sd({ rework: true })}><i style="background:var(--accent)"></i><span><b>برگشت به عقب</b><small>مثلاً از بررسی فنی دوباره به بررسی محصول</small></span><strong>${m.histOk ? fa(m.reworkRows.length) : '…'}</strong><em>${m.histOk ? `${fa(back)} بار` : ''}</em></button>
      </div>`,
      { noTable: true }
    );
  }

  /* ---------- 2 · bottlenecks ---------- */
  function durationCard(m) {
    const keys = ['strategy', 'product', 'tech', 'approval', 'review', 'hold', 'dispatched'];
    const max = Math.max(1, ...keys.map((k) => m.stats[k].p75));
    const rows = keys.filter((k) => m.stats[k].n);
    const body = rows
      .map((k) => {
        const s = m.stats[k];
        const t = tip(`${D().META[k].label}`, [
          { label: 'میانه (نیمی از موارد زودتر)', value: fd(s.med), color: col(k) },
          { label: 'سه‌چهارم موارد زودتر از', value: fd(s.p75) },
          { label: 'میانگین', value: fd(s.mean) },
          { label: 'تعداد گذر', value: fa(s.n) },
        ]);
        return `<button class="dur-row" ${sd({ st: k })} data-tip="${t}">
          <span class="dur-label">${pill(k)}</span>
          <span class="dur-track"><i class="dur-p75" style="width:${Math.max(1.5, (s.p75 / max) * 100)}%"></i><i class="dur-med" style="width:${Math.max(1, (s.med / max) * 100)}%;background:${col(k)}"></i></span>
          <span class="dur-val"><b>${fd(s.med)}</b><small>سه‌چهارم تا ${fd(s.p75)} · ${fa(s.n)} گذر</small></span>
        </button>`;
      })
      .join('');
    const table = tbl(
      ['مرحله', 'میانه (روز)', '۷۵٪ زودتر از (روز)', 'میانگین (روز)', 'تعداد گذر'],
      rows.map((k) => [D().META[k].label, Math.round(m.stats[k].med * 10) / 10, Math.round(m.stats[k].p75 * 10) / 10, Math.round(m.stats[k].mean * 10) / 10, m.stats[k].n])
    );
    return card(
      'sif-dur',
      'هر ایده چند روز در هر مرحله می‌ماند؟',
      'خط پررنگ = میانه، خط روشن = سه‌چهارم موارد زودتر از این تمام شده‌اند',
      m.histOk
        ? `<div class="dur sif-plot">${body || SFR.empty('هنوز گذری ثبت نشده', '', 'clock')}<p class="fn-key">فقط مرحله‌هایی که تمام شده‌اند حساب شده‌اند، پس ماندنِ فعلیِ کارها در این عدد نیست.</p></div>${table}`
        : wait(),
      { full: true }
    );
  }

  function stuckCard(m) {
    const body = m.histOk ? SFR.sifStuckBody(m) : wait();
    return card('sif-stuck', 'گیرکرده‌ها', '«گیرکرده» یعنی بیش از ۷ روز و بیش از زمانِ معمولِ همان مرحله در یک مرحله مانده · با فیلترها و مرتب‌سازی سرِ هر ستون، دقیق‌تر ببینید', body, { full: true, noTable: true, cls: 'sd-card' });
  }

  function holdersCard(m) {
    const order = ['strategy', 'product', 'tech', 'approval', 'review', 'hold'];
    const rows = m.holders.slice(0, 14);
    const max = Math.max(1, ...rows.map((r) => r.total));
    const body = rows
      .map((h) => {
        const segs = order.filter((k) => h.by[k]);
        const t = tip(`${h.p.display || h.name} — ${fa(h.total)}`, [
          ...segs.map((k) => ({ label: D().META[k].label, value: fa(h.by[k]), color: col(k) })),
          { label: 'قدیمی‌ترین', value: fd(h.oldest) },
          ...(h.late ? [{ label: 'گیرکرده', value: fa(h.late) }] : []),
        ]);
        return `<div class="hrow" data-tip="${t}">
          <div class="hrow-label">${SFR.avatar(h.p, 'xs')}<span dir="auto">${esc(h.p.display || h.name)}</span></div>
          <div class="hrow-track"><div class="hrow-bar" style="width:${(h.total / max) * 100}%">${segs
            .map((k) => `<button class="seg" style="flex:${h.by[k]};background:${col(k)}" ${sd({ holder: h.name, st: k })} aria-label="${esc(`${h.p.display}، ${D().META[k].label}: ${fa(h.by[k])}`)}"></button>`)
            .join('')}</div></div>
          <div class="hrow-val"><b>${fa(h.total)}</b><small>${h.late ? `<span class="late">${fa(h.late)} گیرکرده · </span>` : ''}قدیمی‌ترین ${fd(h.oldest)}</small></div>
        </div>`;
      })
      .join('');
    const legend = charts.legend(order.map((k) => ({ key: `sf-${k}`, label: D().META[k].label, color: col(k) })));
    const table = tbl(
      ['نفر', ...order.map((k) => D().META[k].label), 'جمع', 'قدیمی‌ترین (روز)'],
      m.holders.map((h) => [h.p.display || h.name, ...order.map((k) => h.by[k] || 0), h.total, Math.round(h.oldest)])
    );
    return card(
      'sif-holders',
      'توپ الان زمین چه کسی است؟',
      'هر نفر چند ایده را در دست دارد و باید اقدام کند · رنگ، مرحله‌ی ایده را نشان می‌دهد',
      m.histOk || rows.length ? `${legend}<div class="hbars sif-plot">${body || SFR.empty('کسی منتظر اقدام نیست', '', 'circle-check')}</div>${table}` : wait(),
      { full: true }
    );
  }

  /* ---------- 3 · value ---------- */
  function areasCard(m) {
    const series = [
      { key: 'done', label: 'ارسال‌شده به اجرا', f: 'sent' },
      { key: 'progress', label: 'در مسیر تأیید', f: 'flow' },
      { key: 'pending', label: 'متوقف یا در بازبینی', f: 'hold' },
      { key: 'canceled', label: 'ردشده', f: 'rejected' },
    ];
    const rows = m.areas.slice(0, 12);
    const max = Math.max(1, ...rows.map((a) => a.n));
    const body = rows
      .map((a) => {
        const name = a.key === '—' ? 'بدون حوزه‌ی اثر' : a.key;
        const segs = series.filter((s) => a[s.f]);
        const t = tip(`${name} — ${fa(a.n)}`, [
          ...segs.map((s) => ({ label: s.label, value: fa(a[s.f]), color: `var(--s-${s.key})` })),
          ...(a.reachAvg != null ? [{ label: 'میانگین Reach', value: faPct(a.reachAvg * 100) }] : []),
          ...(a.confAvg != null ? [{ label: 'میانگین Confidence', value: faPct(a.confAvg * 100) }] : []),
          ...(a.full ? [{ label: 'ارزش مورد انتظار (جمع)', value: fv(a.ev) }] : []),
        ]);
        return `<div class="hrow" data-tip="${t}">
          <div class="hrow-label"><span dir="auto">${esc(name)}</span></div>
          <div class="hrow-track"><div class="hrow-bar" style="width:${(a.n / max) * 100}%">${segs
            .map((s) => `<button class="seg" style="flex:${a[s.f]};background:var(--s-${s.key})" ${sd({ area: a.key, group: s.f })} aria-label="${esc(`${name}، ${s.label}: ${fa(a[s.f])}`)}"></button>`)
            .join('')}</div></div>
          <div class="hrow-val"><b>${fa(a.n)}</b><small>${a.reachAvg != null ? `Reach ${faPct(a.reachAvg * 100)}` : ''}${a.confAvg != null ? ` · Conf ${faPct(a.confAvg * 100)}` : ''}</small></div>
        </div>`;
      })
      .join('');
    const table = tbl(
      ['حوزه‌ی اثر', 'کل', ...series.map((s) => s.label), 'جمع Impact', 'میانگین Reach (٪)', 'میانگین Confidence (٪)', 'ارزش مورد انتظار'],
      m.areas.map((a) => [a.key === '—' ? 'بدون حوزه' : a.key, a.n, ...series.map((s) => a[s.f]), Math.round(a.impact), a.reachAvg != null ? Math.round(a.reachAvg * 100) : '—', a.confAvg != null ? Math.round(a.confAvg * 100) : '—', a.full ? Math.round(a.ev) : '—'])
    );
    return card(
      'sif-areas',
      'اینیشیتیوها به تفکیک حوزه‌ی اثر',
      'هر حوزه (مثلاً رضایت مشتری یا صرفه‌جویی هزینه) چند ایده دارد و کدام‌ها پیش رفته‌اند',
      `${charts.legend(series.map((s) => ({ key: s.key, label: s.label })))}<div class="hbars sif-plot">${body}</div><p class="fn-key">ارزش مورد انتظار = اثر × Reach × Confidence. واحدِ اثر در هر حوزه فرق دارد، پس عددها فقط داخلِ یک حوزه قابل مقایسه‌اند (جدول را ببینید).</p>${table}`,
      { wide: true }
    );
  }

  function qualityCard(m) {
    const q = m.quality;
    const rows = [
      ['اثر (Impact)', q.impact, 'impact'],
      ['Reach', q.reach, 'reach'],
      ['Confidence', q.conf, 'conf'],
      ['حوزه‌ی اثر', q.focus, 'focus'],
    ];
    const row = ([label, v, key]) =>
      `<button class="q-row" ${sd({ missing: key })}><span>${label}</span><span class="q-track"><i style="width:${q.n ? (v / q.n) * 100 : 0}%"></i></span><b>${faPct(q.n ? (v / q.n) * 100 : 0)}</b><small>${fa(q.n - v)} بدون مقدار</small></button>`;
    const table = tbl(['فیلد', 'پرشده', 'خالی', 'درصد'], rows.map(([l, v]) => [l, v, q.n - v, q.n ? Math.round((v / q.n) * 100) : 0]));
    return card(
      'sif-quality',
      'کامل‌بودنِ اطلاعاتِ ارزش',
      `از ${fa(q.n)} ایده‌ی ردنشده، چند تا مقدارِ لازم برای سنجشِ ارزش را دارند`,
      `<div class="q-list sif-plot">${rows.map(row).join('')}<button class="q-all" ${sd({ missing: 'any' })}><b>${fa(q.full)}</b><span>ایده هر چهار مقدار را دارد و ارزشش قابل محاسبه است · <u>${fa(q.n - q.full)} مورد ناقص</u></span></button></div>${table}`
    );
  }

  function waitingCard(m) {
    const head = ['اینیشیتیو', 'حوزه‌ی اثر', 'Impact', 'Reach', 'Confidence', 'ارزش نسبت به بهترین‌ِ حوزه', 'مرحله', 'مدت ماندن', 'مسئول'];
    const body = m.waiting.length
      ? `<div class="dtable-wrap"><table class="dtable"><thead><tr>${head.map((h, i) => `<th${i > 1 && i < 5 ? ' class="num"' : ''}>${h}</th>`).join('')}</tr></thead><tbody>${m.waiting
          .map(
            ({ r, rel }) => `<tr>
          <td class="dt-title">${link(r, `${titleOf(r)}<small>${SFR.keyChip(r.key)}</small>`)}</td>
          <td class="dt-fn" dir="auto">${esc(r.focus || '—')}</td>
          <td class="num">${fv(r.impact)}</td><td class="num">${faPct(r.reach * 100)}</td><td class="num">${faPct(r.conf * 100)}</td>
          <td><span class="rel"><i style="width:${Math.round(rel * 100)}%"></i></span><small>${faPct(rel * 100)}</small></td>
          <td>${pill(r.st)}</td><td class="muted">${m.histOk ? fd(D().ageOf(r, m.now)) : '…'}</td><td>${who(holderOf(r))}</td></tr>`
          )
          .join('')}</tbody></table></div>`
      : SFR.empty('ایده‌ی ارزش‌دار و منتظری نیست', 'یا همه ارسال شده‌اند، یا مقدارِ Impact/Reach/Confidence هنوز پر نشده.', 'gem');
    return card('sif-waiting', 'ارزشمندترین ایده‌هایی که هنوز منتظرند', 'ده ایده‌ی ارسال‌نشده با بیشترین ارزشِ مورد انتظار، نسبت به بهترینِ حوزه‌ی خودشان', body, { full: true, noTable: true });
  }

  /* ---------- 4 · idea → delivery ---------- */
  function pipelineCard(m) {
    const p = m.pipeline;
    const total = p.all || 1;
    const steps = [
      { label: 'همه‌ی ایده‌ها', v: p.all, f: {}, c: 'strategy' },
      { label: 'ارسال‌شده به اجرا', v: p.sent, f: { sent: true }, c: 'dispatched' },
      { label: 'کارتِ رودمپ دارند', v: p.linked, f: { link: 'roadmap' }, c: 'product' },
      { label: 'به ماهِ مشخص رسیده‌اند', v: p.planned + p.progress + p.delivered, f: { link: ['planned', 'progress', 'delivered'] }, c: 'tech' },
      { label: 'در حال انجام یا تحویل', v: p.progress + p.delivered, f: { link: ['progress', 'delivered'] }, c: 'approval' },
      { label: 'تحویل‌شده', v: p.delivered, f: { link: 'delivered' }, c: 'ready' },
    ];
    const body = steps
      .map((s, k) => {
        const conv = k ? (steps[k - 1].v ? s.v / steps[k - 1].v : 0) : null;
        return `<div class="fn-row pl-row">
          <div class="fn-label"><b>${s.label}</b></div>
          <button class="fn-track" ${sd(s.f)} data-tip="${tip(s.label, [{ label: 'تعداد', value: fa(s.v), color: col(s.c) }, ...(k ? [{ label: 'نسبت به مرحله‌ی قبل', value: faPct(conv * 100) }] : [])])}"><span class="fn-bar" style="width:${Math.max(0.8, (s.v / total) * 100)}%;--c:${col(s.c)}"></span></button>
          <div class="fn-val"><b>${fa(s.v)}</b><small>${faPct((s.v / total) * 100)} از کل</small></div>
          <div class="fn-conv">${k ? `<span class="conv">${faPct(conv * 100)}</span>` : ''}</div>
        </div>`;
      })
      .join('');
    const notes = [
      p.techonly && `${fa(p.techonly)} ارسال‌شده فقط تیکت فنی دارد`,
      p.none && `${fa(p.none)} هیچ لینکی ندارد`,
      p.backlog && `${fa(p.backlog)} کارتِ رودمپ در بک‌لاگ است`,
      p.canceled && `${fa(p.canceled)} کارتِ رودمپ لغو شده`,
      p.missing && `${fa(p.missing)} لینک به کارتی خارج از بوردِ فعلی می‌رود`,
    ].filter(Boolean);
    const table = tbl(
      ['گام', 'تعداد', 'نسبت به گام قبل (٪)'],
      steps.map((s, k) => [s.label, s.v, k ? Math.round((steps[k - 1].v ? s.v / steps[k - 1].v : 0) * 100) : 100])
    );
    return card(
      'sif-pipeline',
      'ایده‌های ارسال‌شده در رودمپ',
      'ایده‌های ارسال‌شده از طریق لینک به کارت‌های رودمپ (IR24H2) وصل می‌شوند و همان‌جا دنبال می‌شوند',
      `${S.restReady ? '' : `<div class="sif-wait">${icon('refresh-cw', 16, 'spin')}<span>کارت‌های رودمپ هنوز در حال بارگذاری‌اند؛ عددها کامل‌تر می‌شوند.</span></div>`}
       <div class="fn sif-plot">${body}${notes.length ? `<p class="fn-key pl-notes">${notes.join(' · ')}</p>` : ''}</div>${table}`,
      { wide: true }
    );
  }

  function leadCard(m) {
    const L = m.lead;
    const stat = (label, d, n, sub) =>
      `<div class="lead-stat"><small>${label}</small><b>${n ? fd(d) : '—'}</b><em>${n ? `میانه‌ی ${fa(n)} مورد` : 'هنوز دادهٔ کافی نیست'}</em>${sub ? `<i>${sub}</i>` : ''}</div>`;
    return card(
      'sif-lead',
      'سرعتِ مسیر',
      'میانه یعنی نیمی از موارد زودتر از این عدد تمام شده‌اند',
      `<div class="lead">${m.histOk ? `${stat('از ثبتِ ایده تا ارسال به اجرا', L.toSend, L.toSendN)}${stat('از ارسال تا تحویل در رودمپ', L.toDone, L.toDoneN, 'تاریخ تحویل از آخرین تغییرِ کارت گرفته شده؛ تقریبی است')}` : wait()}</div>`,
      { noTable: true }
    );
  }

  function unlinkedCard(m) {
    const gap = m.links.filter((l) => l.kind !== 'roadmap').sort((a, b) => (a.r.dispatchedAt || 0) - (b.r.dispatchedAt || 0));
    const body = gap.length
      ? `<div class="dtable-wrap"><table class="dtable"><thead><tr><th>اینیشیتیو</th><th>وضعیت لینک</th><th>ارسال‌شده</th><th>فانکشن</th><th>مسئول محصول</th></tr></thead><tbody>${gap
          .slice(0, 8)
          .map(
            ({ r, kind }) => `<tr>
          <td class="dt-title">${link(r, `${titleOf(r)}<small>${SFR.keyChip(r.key)}</small>`)}</td>
          <td>${kind === 'techonly' ? '<span class="tag">فقط تیکت فنی</span>' : '<span class="tag is-warn">بدون هیچ لینک</span>'}</td>
          <td class="muted">${r.dispatchedAt ? SFR.ago(r.dispatchedAt) : '—'}</td><td class="dt-fn" dir="auto">${esc(r.fn.join('، ') || '—')}</td><td>${who(r.product[0] || r.assignee)}</td></tr>`
          )
          .join('')}</tbody></table></div>${gap.length > 8 ? `<button class="more" ${sd({ link: ['techonly', 'none'] })}>همه‌ی ${fa(gap.length)} مورد</button>` : ''}`
      : SFR.empty('همه‌ی ارسال‌شده‌ها کارت رودمپ دارند', '', 'circle-check');
    return card('sif-gap', 'ارسال‌شده، ولی هنوز بدون کارت رودمپ', 'قدیمی‌ترین‌ها اول آمده‌اند؛ این‌ها در رودمپ دیده نمی‌شوند', body, { full: true, noTable: true });
  }

  /* ---------- list ---------- */
  function listCard(m) {
    const lim = S.ui.colLimit.sif || 40;
    const rows = [...m.rows].sort((a, b) => b.updated - a.updated);
    const body = `<div class="dtable-wrap"><table class="dtable"><thead><tr><th>اینیشیتیو</th><th>مرحله</th><th>مسئولِ فعلی</th><th>مدت ماندن</th><th>حوزه‌ی اثر</th><th>سیکل</th><th>آخرین تغییر</th></tr></thead><tbody>${rows
      .slice(0, lim)
      .map(
        (r) => `<tr>
        <td class="dt-title">${link(r, `${titleOf(r)}<small>${SFR.keyChip(r.key)}${r.prio ? `<bdi class="tag" dir="auto">${esc(r.prio)}</bdi>` : ''}</small>`)}</td>
        <td>${pill(r.st)}</td><td>${who(holderOf(r))}</td><td class="muted">${m.histOk && r.since ? fd(D().ageOf(r, m.now)) : '—'}</td>
        <td class="dt-fn" dir="auto">${esc(r.focus || '—')}</td><td class="muted" dir="ltr">${esc(r.cycle.join(', ') || '—')}</td><td class="muted">${SFR.ago(r.updated)}</td></tr>`
      )
      .join('')}</tbody></table></div>${rows.length > lim ? `<button class="more" data-act="more" data-col="sif">نمایش ${fa(Math.min(40, rows.length - lim))} مورد دیگر · ${fa(rows.length - lim)} باقی‌مانده</button>` : ''}`;
    return card('sif-list', 'فهرست اینیشیتیوها', `${fa(rows.length)} مورد در این بازه · تازه‌ترین تغییر اول`, body, { full: true, noTable: true });
  }

  /* ---------- page ---------- */
  SFR.renderSif = (el) => {
    if (S.status !== 'ready') return;
    D().ensure();
    if (Z.error) {
      el.innerHTML = `<div class="dash">${SFR.empty('SIF خوانده نشد', Z.error, 'triangle-alert')}<div class="center"><button class="btn btn-primary" data-act="sif-refresh">${icon('rotate-ccw', 16)}تلاش دوباره</button></div></div>`;
      return;
    }
    if (!Z.ready) {
      el.innerHTML = `<div class="dash"><div class="loading-note">${icon('refresh-cw', 16, 'spin')} در حال خواندن اینیشیتیوهای SIF از جیرا… ${Z.total ? `${fa(Z.loaded)} از ${fa(Z.total)}` : ''}</div><div class="dash-grid">${'<section class="viz-card skel-card"></section>'.repeat(4)}</div></div>`;
      return;
    }
    const fresh = !S.anim.sif;
    S.anim.sif = true;
    const m = D().model();
    el.innerHTML = `<div class="dash sif${fresh ? ' is-fresh' : ''}">
      ${filterBar()}
      ${tiles(m)}
      ${mineBanner(m)}
      <div class="dash-grid">
        ${section(1, 'قیف مراحل', 'چند ایده جلو می‌روند و کجا می‌ریزند؟')}
        ${funnelCard(m)}
        ${sideCard(m)}
        ${section(2, 'گلوگاه', 'کجا گیر می‌کنند و گیرِ چه کسی؟')}
        ${durationCard(m)}
        ${stuckCard(m)}
        ${holdersCard(m)}
        ${section(3, 'ارزش', 'اثر، Reach و Confidence')}
        ${areasCard(m)}
        ${qualityCard(m)}
        ${waitingCard(m)}
        ${section(4, 'از ایده تا تحویل', 'SIF ← رودمپ')}
        ${pipelineCard(m)}
        ${leadCard(m)}
        ${unlinkedCard(m)}
        ${section(5, 'همه‌ی اینیشیتیوها')}
        ${listCard(m)}
      </div>
    </div>`;
    SFR.fx.countUp(el);
  };

  SFR.sifui = { fd, fv, pill, link, titleOf, who };
})();

/* app/views/sifdrill.js */
/* Roadmap Lens — SIF lists: the side sheet behind every funnel / bar click, and the filterable «گیرکرده‌ها» table.
 * Both share one small engine: rows → items (age, ratio to the stage's normal time, holder…) → filters → sort → (group). */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;
  const D = () => SFR.sif;
  const U = () => SFR.sifui;

  /* ---------- vocabulary ---------- */
  const STAGE_ORDER = ['strategy', 'product', 'tech', 'dispatched', 'approval', 'ready', 'review', 'hold', 'rejected', 'other'];
  const FLAGS = {
    stuck: { label: 'گیرکرده', test: (x) => x.stuck },
    mine: { label: 'منتظر اقدام من', test: (x) => x.mine },
    nobody: { label: 'بدون مسئول مشخص', test: (x) => x.waiting && !x.holders.length },
    rework: { label: 'برگشته به عقب', test: (x) => x.r.rework > 0 },
    incomplete: { label: 'ارزش ناقص', test: (x) => x.incomplete },
  };
  const SEV = [
    ['', 'هر مدتی'],
    ['x2', 'بیش از ۲ برابر زمان معمول'],
    ['x3', 'بیش از ۳ برابر زمان معمول'],
    ['d30', 'بیش از ۳۰ روز'],
    ['d60', 'بیش از ۶۰ روز'],
    ['d90', 'بیش از ۹۰ روز'],
  ];
  const SEV_TEST = { x2: (x) => x.ratio >= 2, x3: (x) => x.ratio >= 3, d30: (x) => (x.age || 0) >= 30, d60: (x) => (x.age || 0) >= 60, d90: (x) => (x.age || 0) >= 90 };
  const SORTS = [
    ['auto', 'هوشمند (منتظرها قدیمی‌ترین اول)'],
    ['age', 'بیشترین مدت ماندن در وضعیت'],
    ['ratio', 'بیشترین نسبت به زمان معمول'],
    ['updated', 'تازه‌ترین تغییر'],
    ['created', 'قدیمی‌ترین ایده'],
    ['ev', 'بیشترین ارزش مورد انتظار'],
    ['title', 'عنوان (الفبایی)'],
  ];
  const GROUPS = [
    ['status', 'وضعیت فعلی'],
    ['holder', 'مسئول فعلی'],
    ['focus', 'حوزه‌ی اثر'],
    ['cycle', 'سیکل'],
    ['none', 'بدون گروه‌بندی'],
  ];
  const LINK_FA = { roadmap: 'دارای کارت رودمپ', techonly: 'فقط تیکت فنی', none: 'بدون لینک', delivered: 'تحویل‌شده', progress: 'در حال انجام', planned: 'برنامه‌ریزی‌شده', backlog: 'بک‌لاگ', missing: 'کارتِ بیرون از بورد', canceled: 'لغوشده' };
  const GROUP_FA = { sent: 'ارسال‌شده', flow: 'در مسیر تأیید', hold: 'متوقف یا در بازبینی', rejected: 'ردشده' };
  const MISS_FA = { impact: 'بدون Impact', reach: 'بدون Reach', conf: 'بدون Confidence', focus: 'بدون حوزه‌ی اثر', any: 'اطلاعات ناقص' };

  /* ---------- state (one per list) ---------- */
  const fresh = (o = {}) => ({ q: '', st: [], holder: '', focus: '', fn: '', cycle: '', sev: '', flags: [], sort: 'auto', group: 'status', dir: 1, lim: 30, closed: [], more: {}, adv: false, ...o });
  const Dr = fresh(); // the side sheet
  const Su = fresh({ sort: 'ratio', group: 'none', lim: 20 }); // the stuck table
  const UI = { dr: Dr, su: Su };
  let Dctx = null; // what the sheet was opened for

  /* ---------- engine ---------- */
  function items(m, rows) {
    const stuck = new Map(m.stuck.map((s) => [s.r.key, s]));
    return rows.map((r) => {
      const waiting = D().WAITING.includes(r.st);
      const age = m.histOk && r.since ? D().ageOf(r, m.now) : null;
      const limit = waiting ? m.limit(r.st) : null;
      const holders = D().holdersOf(r);
      return {
        r, waiting, age, limit, holders,
        stuck: stuck.has(r.key),
        ratio: waiting && age != null && limit ? age / limit : 0,
        mine: waiting && holders.some((p) => p.name === S.me?.name),
        incomplete: r.st !== 'rejected' && (r.ev == null || !r.focus),
      };
    });
  }

  function pass(x, ui, skip) {
    const r = x.r;
    if (skip !== 'q' && ui.q) {
      const hay = SFR.norm([r.title, r.key, r.battle, r.focus, r.fn.join(' '), ...x.holders.map((p) => p.display)].join(' '));
      if (!ui.q.split(/\s+/).every((w) => hay.includes(SFR.norm(w)))) return false;
    }
    if (skip !== 'st' && ui.st.length && !ui.st.includes(r.st)) return false;
    if (skip !== 'holder' && ui.holder && !(ui.holder === '__none' ? !x.holders.length : x.holders.some((p) => p.name === ui.holder))) return false;
    if (skip !== 'focus' && ui.focus && (r.focus || '—') !== ui.focus) return false;
    if (skip !== 'fn' && ui.fn && !r.fn.includes(ui.fn)) return false;
    if (skip !== 'cycle' && ui.cycle && (ui.cycle === '__none' ? r.cycle.length : !r.cycle.includes(ui.cycle))) return false;
    if (skip !== 'sev' && ui.sev && !SEV_TEST[ui.sev](x)) return false;
    for (const k of ui.flags) if (skip !== `flag:${k}` && !FLAGS[k].test(x)) return false;
    return true;
  }
  const filtered = (all, ui, skip) => all.filter((x) => pass(x, ui, skip));
  const tally = (list, key) => {
    const c = new Map();
    list.forEach((x) => [].concat(key(x)).forEach((k) => c.set(k, (c.get(k) || 0) + 1)));
    return c;
  };

  const COMPARE = {
    age: (a, b) => (b.age ?? -1) - (a.age ?? -1),
    ratio: (a, b) => b.ratio - a.ratio || (b.age ?? -1) - (a.age ?? -1),
    updated: (a, b) => b.r.updated - a.r.updated,
    created: (a, b) => a.r.created - b.r.created,
    ev: (a, b) => (b.r.ev ?? -1) - (a.r.ev ?? -1),
    title: (a, b) => SFR.splitTitle(a.r.title).title.localeCompare(SFR.splitTitle(b.r.title).title, 'fa'),
    auto: (a, b) => (a.waiting === b.waiting ? (a.waiting ? (b.age ?? -1) - (a.age ?? -1) : b.r.updated - a.r.updated) : a.waiting ? -1 : 1),
  };
  const sorted = (list, ui) => {
    const cmp = COMPARE[ui.sort] || COMPARE.auto;
    return [...list].sort((a, b) => ui.dir * cmp(a, b));
  };

  /* ---------- small renderers ---------- */
  const ageBadge = (x) => {
    if (x.age == null) return '<span class="sd-age"><b>—</b></span>';
    if (!x.waiting) return `<span class="sd-age"><b>${U().fd(x.age)}</b><small>در این وضعیت</small></span>`;
    if (x.stuck) return `<span class="sd-age is-late"><b>${U().fd(x.age)}</b><small>${fa(Math.round(x.ratio * 10) / 10)} برابر معمول</small></span>`;
    return `<span class="sd-age"><b>${U().fd(x.age)}</b><small>در حد معمول</small></span>`;
  };
  const whoList = (x) =>
    x.holders.length
      ? x.holders.slice(0, 2).map((p) => `<span class="who">${SFR.avatar(p, 'xs')}<span dir="auto">${esc(SFR.firstName(p.display) || p.display || '')}</span></span>`).join('')
      : x.waiting
      ? '<span class="sd-nobody">بدون مسئول مشخص</span>'
      : '';

  const row = (x) => {
    const r = x.r;
    return `<li class="sd-row${x.stuck ? ' is-late' : ''}">
      <a class="sf-link" href="/browse/${esc(r.key)}" target="_blank" rel="noopener">
        <span class="sd-t" dir="auto">${esc(SFR.splitTitle(r.title).title)}</span>
        <span class="sd-meta">${SFR.keyChip(r.key)}${U().pill(r.st)}${whoList(x)}${r.focus ? `<bdi class="tag" dir="auto">${esc(r.focus)}</bdi>` : ''}${r.cycle[0] ? `<bdi class="tag" dir="ltr">${esc(r.cycle[0])}</bdi>` : ''}${r.rework ? `<span class="sd-back" data-hint="چند بار به مرحله‌ی قبل برگشته">${icon('rotate-ccw', 12)}${fa(r.rework)}</span>` : ''}</span>
      </a>${ageBadge(x)}
    </li>`;
  };

  /* ---------- the shared toolbar ---------- */
  const optSel = (ns, k, value, opts, ic, ariaLabel) =>
    `<label class="select">${icon(ic, 14)}<select data-bind="sd-sel" data-ns="${ns}" data-k="${k}" aria-label="${esc(ariaLabel)}">${opts
      .map(([v, l]) => `<option value="${esc(v)}"${value === v ? ' selected' : ''}>${esc(l)}</option>`)
      .join('')}</select>${icon('chevron-down', 14)}</label>`;

  function toolbar(ns, ui, all, o = {}) {
    const stages = STAGE_ORDER.filter((k) => all.some((x) => x.r.st === k));
    const stN = tally(filtered(all, ui, 'st'), (x) => x.r.st);
    const chips = stages.length > 1 || ui.st.length
      ? `<div class="sd-chips" role="group" aria-label="وضعیت فعلی">${stages
          .map((k) => `<button class="sd-chip${ui.st.includes(k) ? ' is-on' : ''}" data-act="sd-toggle" data-ns="${ns}" data-k="st" data-v="${k}" aria-pressed="${ui.st.includes(k)}"${stN.get(k) ? '' : ' data-zero'} style="--c:${D().META[k] ? `var(--sf-${k})` : 'var(--ink-3)'}"><i></i>${esc(D().META[k]?.label || 'سایر')}<em>${fa(stN.get(k) || 0)}</em></button>`)
          .join('')}</div>`
      : '';
    const flags = (o.flags || Object.keys(FLAGS))
      .map((k) => {
        const n = filtered(all, ui, `flag:${k}`).filter(FLAGS[k].test).length;
        const on = ui.flags.includes(k);
        return n || on ? `<button class="sd-flag${on ? ' is-on' : ''}" data-act="sd-toggle" data-ns="${ns}" data-k="flag" data-v="${k}" aria-pressed="${on}">${esc(FLAGS[k].label)}<em>${fa(n)}</em></button>` : '';
      })
      .join('');

    const hN = tally(filtered(all, ui, 'holder'), (x) => (x.holders.length ? x.holders.map((p) => p.name) : '__none'));
    const names = new Map();
    all.forEach((x) => x.holders.forEach((p) => names.set(p.name, p.display || p.name)));
    const holders = [...names].sort((a, b) => (hN.get(b[0]) || 0) - (hN.get(a[0]) || 0) || a[1].localeCompare(b[1], 'fa'));
    const facet = (key, getter, skip = key) => {
      const c = tally(filtered(all, ui, skip), getter);
      const all2 = [...new Set(all.flatMap((x) => [].concat(getter(x))))].filter((v) => v !== '__none' && v !== '—');
      return all2.sort((a, b) => (c.get(b) || 0) - (c.get(a) || 0) || String(a).localeCompare(String(b), 'fa')).map((v) => [v, `${v} (${fa(c.get(v) || 0)})`]);
    };
    const sels = [
      holders.length || hN.get('__none') ? optSel(ns, 'holder', ui.holder, [['', 'همه‌ی مسئول‌ها'], ...(hN.get('__none') ? [['__none', `بدون مسئول (${fa(hN.get('__none'))})`]] : []), ...holders.map(([k, v]) => [k, `${v} (${fa(hN.get(k) || 0)})`])], 'users', 'مسئول') : '',
      optSel(ns, 'focus', ui.focus, [['', 'همه‌ی حوزه‌های اثر'], ...facet('focus', (x) => x.r.focus || '—')], 'target', 'حوزه‌ی اثر'),
      optSel(ns, 'fn', ui.fn, [['', 'همه‌ی فانکشن‌ها'], ...facet('fn', (x) => x.r.fn)], 'layers', 'فانکشن'),
      optSel(ns, 'cycle', ui.cycle, [['', 'همه‌ی سیکل‌ها'], ...facet('cycle', (x) => (x.r.cycle.length ? x.r.cycle : '__none')).sort((a, b) => b[0].localeCompare(a[0]))], 'refresh-cw', 'سیکل'),
      o.sev ? optSel(ns, 'sev', ui.sev, SEV, 'clock', 'مدت ماندن') : '',
    ].join('');
    const nAdv = [ui.holder, ui.focus, ui.fn, ui.cycle, ui.sev].filter(Boolean).length;
    const dirty = ui.q || ui.st.length || ui.holder || ui.focus || ui.fn || ui.cycle || ui.sev || ui.flags.length;
    return `<div class="sd-tools">
      <div class="sd-top">
        <label class="search sm">${icon('search', 14)}<input data-bind="sd-q" data-ns="${ns}" type="search" value="${esc(ui.q)}" placeholder="جستجو در عنوان، کلید، مسئول، حوزه…" aria-label="جستجو" autocomplete="off"></label>
        ${o.noSort ? '' : optSel(ns, 'sort', ui.sort, SORTS, 'arrow-down-wide-narrow', 'مرتب‌سازی')}
        ${o.noGroup ? '' : optSel(ns, 'group', ui.group, GROUPS, 'layers', 'گروه‌بندی')}
      </div>
      ${chips}
      <div class="sd-flags" role="group" aria-label="فیلترهای سریع">${flags}<button class="sd-flag sd-adv${ui.adv || nAdv ? ' is-open' : ''}" data-act="sd-adv" data-ns="${ns}" aria-expanded="${!!(ui.adv || nAdv)}">${icon('sliders-horizontal', 13)}فیلترهای بیشتر${nAdv ? `<em>${fa(nAdv)}</em>` : ''}</button>${dirty ? `<button class="chip chip-sm" data-act="sd-reset" data-ns="${ns}">${icon('x', 12)}پاک‌کردن فیلترها</button>` : ''}</div>
      <div class="sd-sels"${ui.adv || nAdv ? '' : ' hidden'}>${sels}</div>
    </div>`;
  }

  /* keep typing focus + scroll while a list redraws itself */
  function keepUi(host, fn) {
    const act = host.querySelector('[data-bind="sd-q"]:focus');
    const pos = act ? act.selectionStart : 0;
    const sc = host.querySelector('.sd-scroll');
    const top = sc ? sc.scrollTop : 0;
    fn();
    const sc2 = host.querySelector('.sd-scroll');
    if (sc2) sc2.scrollTop = top;
    if (act) {
      const i = host.querySelector('[data-bind="sd-q"]');
      i?.focus();
      try {
        i?.setSelectionRange(pos, pos);
      } catch {
        /* type=search has no selection in some engines */
      }
    }
  }

  /* ---------- the side sheet ---------- */
  function titleParts(f, m) {
    const parts = [];
    if (f.mine) parts.push('منتظر اقدام شما');
    if (f.holder) parts.push(m.holders.find((h) => h.name === f.holder)?.p.display || f.holder);
    if (f.st) parts.push(D().META[f.st]?.label);
    if (f.reached) parts.push(`رسیده به «${D().MAIN.find((s) => s.rank === f.reached)?.label}»`);
    if (f.lostAt) parts.push(`ردشده در «${D().MAIN.find((s) => s.rank === f.lostAt)?.label}»`);
    if (f.stuck) parts.push('گیرکرده');
    if (f.rework) parts.push('برگشته به مرحله‌ی قبل');
    if (f.area !== undefined) parts.push(f.area === '—' ? 'بدون حوزه' : f.area);
    if (f.group) parts.push(GROUP_FA[f.group]);
    if (f.missing) parts.push(MISS_FA[f.missing]);
    if (f.sent) parts.push('ارسال‌شده به اجرا');
    if (f.link) parts.push([].concat(f.link).map((x) => LINK_FA[x] || x).join(' / '));
    return parts;
  }

  /** The stage this list is "about": its group is shown first. */
  const focusStage = (f) => (f.st && D().META[f.st] ? f.st : f.reached ? D().MAIN.find((s) => s.rank === f.reached)?.key : f.lostAt ? 'rejected' : null);

  function groupsOf(list, ui, f) {
    if (ui.group === 'none') return [{ key: 'all', head: '', items: list }];
    const by = new Map();
    const keyOf = {
      status: (x) => x.r.st,
      holder: (x) => x.holders[0]?.name || '__none',
      focus: (x) => x.r.focus || '—',
      cycle: (x) => x.r.cycle[0] || '__none',
    }[ui.group];
    list.forEach((x) => {
      const k = keyOf(x);
      if (!by.has(k)) by.set(k, []);
      by.get(k).push(x);
    });
    let keys = [...by.keys()];
    if (ui.group === 'status') {
      const first = focusStage(f);
      const rank = (k) => (k === first ? -1 : STAGE_ORDER.indexOf(k));
      keys.sort((a, b) => rank(a) - rank(b));
    } else keys.sort((a, b) => (a === '__none' || a === '—') - (b === '__none' || b === '—') || by.get(b).length - by.get(a).length);
    return keys.map((k) => ({ key: k, items: by.get(k) }));
  }

  function groupHead(g, ui, f) {
    const n = g.items.length;
    let label = '';
    let hint = '';
    if (ui.group === 'status') {
      label = U().pill(g.key);
      const first = focusStage(f);
      const MAIN = D().MAIN;
      const rk = (k) => MAIN.find((s) => s.key === k)?.rank || 0;
      if (f.reached && first) hint = g.key === first ? 'همین حالا اینجا هستند' : g.key === 'rejected' ? 'بعد از رسیدن به این مرحله رد شده‌اند' : rk(g.key) > rk(first) ? 'از این مرحله گذشته‌اند' : rk(g.key) ? 'به مرحله‌ی قبل برگشته‌اند' : 'کنار مسیر اصلی هستند';
      else if (g.key === 'review' || g.key === 'hold') hint = 'کنار مسیر اصلی';
    } else {
      const name = g.key === '__none' ? (ui.group === 'holder' ? 'بدون مسئول مشخص' : 'بدون سیکل') : g.key === '—' ? 'بدون حوزه‌ی اثر' : ui.group === 'holder' ? g.items[0].holders[0]?.display || g.key : g.key;
      label = `<b dir="auto">${esc(name)}</b>`;
    }
    const closed = ui.closed.includes(g.key);
    return `<button class="sd-gh${closed ? ' is-closed' : ''}" data-act="sd-fold" data-ns="dr" data-v="${esc(g.key)}" aria-expanded="${!closed}">${icon('chevron-down', 14)}${label}${hint ? `<small>${hint}</small>` : ''}<span class="grow"></span><em>${fa(n)}</em></button>`;
  }

  function sheetBody(m) {
    const all = Dctx.all;
    const list = sorted(filtered(all, Dr), Dr);
    const groups = groupsOf(list, Dr, Dctx.f);
    const body = list.length
      ? groups
          .map((g) => {
            const closed = Dr.closed.includes(g.key);
            const lim = Dr.more[g.key] || Dr.lim;
            const shown = g.items.slice(0, lim);
            return `<section class="sd-group">${g.head === '' ? '' : groupHead(g, Dr, Dctx.f)}${
              closed ? '' : `<ul class="sd-list">${shown.map(row).join('')}</ul>${g.items.length > lim ? `<button class="more" data-act="sd-more" data-ns="dr" data-v="${esc(g.key)}">نمایش ${fa(Math.min(30, g.items.length - lim))} مورد دیگر · ${fa(g.items.length - lim)} باقی‌مانده</button>` : ''}`
            }</section>`;
          })
          .join('')
      : SFR.empty('موردی با این فیلترها نیست', 'یک فیلتر را بردارید یا «پاک‌کردن فیلترها» را بزنید.', 'search-x');
    return { list, body };
  }

  function drawSheet() {
    const sheet = SFR.root.querySelector('.sheet');
    const panel = sheet.querySelector('.sheet-panel');
    const m = D().model();
    keepUi(panel, () => {
      const { list, body } = sheetBody(m);
      panel.innerHTML = `
        <header class="d-head"><b>${esc(Dctx.title || 'همه‌ی اینیشیتیوها')}</b><span class="count">${list.length === Dctx.all.length ? fa(list.length) : `${fa(list.length)} از ${fa(Dctx.all.length)}`}</span><span class="grow"></span>
          <button class="icon-btn" data-act="sd-copy" data-ns="dr" data-hint="کپی فهرست برای جدول و پیام" aria-label="کپی فهرست">${icon('copy', 16)}</button>
          <button class="icon-btn" data-act="close-sheet" aria-label="بستن">${icon('x', 18)}</button></header>
        ${toolbar('dr', Dr, Dctx.all, { sev: true })}
        <div class="sd-scroll">${body}</div>`;
    });
  }

  SFR.openSifDrill = (f) => {
    const m = D().model();
    Object.assign(Dr, fresh({ sort: f.stuck || f.mine || f.holder || (f.st && D().WAITING.includes(f.st)) ? 'age' : 'auto' }));
    Dctx = { f, title: titleParts(f, m).join(' · '), all: items(m, D().drillRows(f)) };
    const sheet = SFR.root.querySelector('.sheet');
    sheet.classList.add('is-sif');
    drawSheet();
    sheet.classList.add('is-open');
    sheet.querySelector('[data-bind="sd-q"]')?.focus({ preventScroll: true });
  };

  /* ---------- the «گیرکرده‌ها» table ---------- */
  const COLS = [
    ['title', 'اینیشیتیو', 'title'],
    ['st', 'مرحله', null],
    ['holder', 'مسئول', null],
    ['age', 'مدت ماندن', 'age'],
    ['limit', 'زمان معمولِ مرحله', null],
    ['ratio', 'چند برابر معمول', 'ratio'],
    ['focus', 'حوزه‌ی اثر', null],
    ['cycle', 'سیکل', null],
  ];
  const suAll = (m) => items(m, m.stuck.map((s) => s.r));

  function stuckTable(list, ui) {
    const head = COLS.map(([k, label, sort]) => {
      if (!sort) return `<th>${label}</th>`;
      const on = ui.sort === sort;
      return `<th><button class="th-sort${on ? ' is-on' : ''}" data-act="sd-sort" data-ns="su" data-v="${sort}" aria-label="مرتب‌سازی بر اساس ${label}">${label}${on ? icon(ui.dir === 1 ? 'arrow-down' : 'arrow-up', 12) : ''}</button></th>`;
    }).join('');
    const shown = list.slice(0, ui.lim);
    return `<div class="dtable-wrap sd-wrap"><table class="dtable sd-table"><thead><tr>${head}</tr></thead><tbody>${shown
      .map(
        (x) => `<tr>
        <td class="dt-title">${U().link(x.r, `${U().titleOf(x.r)}<small>${SFR.keyChip(x.r.key)}${x.r.prio ? `<bdi class="tag" dir="auto">${esc(x.r.prio)}</bdi>` : ''}${x.r.rework ? `<span class="sd-back" data-hint="چند بار به مرحله‌ی قبل برگشته">${icon('rotate-ccw', 12)}${fa(x.r.rework)}</span>` : ''}</small>`)}</td>
        <td>${U().pill(x.r.st)}</td><td>${whoList(x)}</td>
        <td><span class="sl-age">${U().fd(x.age)}</span></td><td class="muted">تا ${U().fd(x.limit)}</td>
        <td><span class="ratio${x.ratio >= 3 ? ' is-hot' : ''}">${fa(Math.round(x.ratio * 10) / 10)} برابر</span></td>
        <td class="dt-fn" dir="auto">${esc(x.r.focus || '—')}</td><td class="muted" dir="ltr">${esc(x.r.cycle[0] || '—')}</td></tr>`
      )
      .join('')}</tbody></table></div>${list.length > ui.lim ? `<button class="more" data-act="sd-more" data-ns="su" data-v="all">نمایش ${fa(Math.min(20, list.length - ui.lim))} مورد دیگر · ${fa(list.length - ui.lim)} باقی‌مانده</button>` : ''}`;
  }

  SFR.sifStuckBody = (m) => {
    const all = suAll(m);
    if (!all.length) return SFR.empty('چیزی گیر نکرده', 'همه‌ی ایده‌ها در زمان عادیِ مرحله‌شان هستند.', 'circle-check');
    const list = sorted(filtered(all, Su), Su);
    return `<div class="sd-stuck" data-ns="su">
      ${toolbar('su', Su, all, { sev: true, noGroup: true, noSort: true, flags: ['mine', 'nobody', 'rework'] })}
      <div class="sd-summary"><b>${fa(list.length)}</b><span>${list.length === all.length ? 'مورد گیرکرده' : `مورد با این فیلترها، از ${fa(all.length)} گیرکرده`}</span><span class="grow"></span>
        <button class="chip chip-sm" data-act="sd-copy" data-ns="su">${icon('copy', 12)}کپی فهرست</button></div>
      ${list.length ? stuckTable(list, Su) : SFR.empty('موردی با این فیلترها نیست', 'یک فیلتر را بردارید یا «پاک‌کردن فیلترها» را بزنید.', 'search-x')}
    </div>`;
  };
  const drawStuck = () => {
    const body = SFR.root.querySelector('[data-card="sif-stuck"] .viz-body');
    if (!body) return;
    keepUi(body, () => (body.innerHTML = SFR.sifStuckBody(D().model())));
  };

  /* ---------- copy the list ---------- */
  function copyList(ns) {
    const m = D().model();
    const all = ns === 'su' ? suAll(m) : Dctx.all;
    const list = sorted(filtered(all, UI[ns]), UI[ns]);
    const txt = list
      .map((x) => [x.r.key, SFR.splitTitle(x.r.title).title, D().META[x.r.st]?.label || '', x.holders.map((p) => p.display).join('، '), x.age == null ? '' : Math.round(x.age), x.r.focus, `${location.origin}/browse/${x.r.key}`].join('\t'))
      .join('\n');
    navigator.clipboard
      .writeText(['کلید\tعنوان\tمرحله\tمسئول\tروز در وضعیت\tحوزه‌ی اثر\tلینک', txt].join('\n'))
      .then(() => SFR.toast(`${fa(list.length)} مورد کپی شد؛ در جدول یا پیام جای‌گذاری کنید.`, 'ok'))
      .catch(() => SFR.toast('کپی ممکن نشد.', 'error'));
  }

  /* ---------- events (wired in app.js) ---------- */
  const redraw = (ns) => (ns === 'su' ? drawStuck() : drawSheet());
  const flip = (arr, v) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  SFR.sifdrill = {
    acts: {
      'sd-toggle': (b) => {
        const ui = UI[b.dataset.ns];
        const k = b.dataset.k === 'flag' ? 'flags' : 'st';
        ui[k] = flip(ui[k], b.dataset.v);
        ui.more = {};
        redraw(b.dataset.ns);
      },
      'sd-reset': (b) => {
        const ui = UI[b.dataset.ns];
        Object.assign(ui, { q: '', st: [], holder: '', focus: '', fn: '', cycle: '', sev: '', flags: [], more: {} });
        redraw(b.dataset.ns);
      },
      'sd-more': (b) => {
        const ui = UI[b.dataset.ns];
        if (b.dataset.ns === 'su') ui.lim += 20;
        else ui.more[b.dataset.v] = (ui.more[b.dataset.v] || ui.lim) + 30;
        redraw(b.dataset.ns);
      },
      'sd-fold': (b) => {
        Dr.closed = flip(Dr.closed, b.dataset.v);
        drawSheet();
      },
      'sd-sort': (b) => {
        const ui = UI[b.dataset.ns];
        if (ui.sort === b.dataset.v) ui.dir = -ui.dir;
        else Object.assign(ui, { sort: b.dataset.v, dir: 1 });
        redraw(b.dataset.ns);
      },
      'sd-adv': (b) => {
        const ui = UI[b.dataset.ns];
        ui.adv = !(ui.adv || [ui.holder, ui.focus, ui.fn, ui.cycle, ui.sev].some(Boolean));
        redraw(b.dataset.ns);
      },
      'sd-copy': (b) => copyList(b.dataset.ns),
    },
    onInput: (t) => {
      const ui = UI[t.dataset.ns];
      ui.q = t.value;
      ui.more = {};
      ui.lim = ui === Su ? 20 : 30;
      redraw(t.dataset.ns);
    },
    onSelect: (t) => {
      const ui = UI[t.dataset.ns];
      ui[t.dataset.k] = t.value;
      ui.more = {};
      if (t.dataset.k === 'sort') ui.dir = 1;
      redraw(t.dataset.ns);
    },
    clearQuery: (t) => {
      if (!t.value) return false;
      t.value = '';
      SFR.sifdrill.onInput(t);
      return true;
    },
  };
})();

/* app/views/capacity.js */
/* Roadmap Lens — «ظرفیت»: how much each function usually delivers (velocity from finished cycles) against what the current cycle has planned.
 * Nothing here is written back to Jira. Velocity = delivered work per month, because cycles differ in length. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const C = S.cap;
  const { esc, fa, faPct, icon } = SFR;

  /* ---------- knobs ---------- */
  const THR = { free: 0.8, over: 1.1 }; // fill < 80% «جا دارد», 80–110% «بهینه», above «اضافه‌بار»
  const MIN_CYCLES = 3; // fewer finished cycles than this → «دیتای کم»
  const MONTHS_RULE = { core: 0.9, edgeShare: 0.05, edgeCount: 2 }; // a cycle = the shortest run of months with ≥90% of its cards (+ neighbours holding ≥5%)
  const STATE = {
    free: { label: 'جا دارد', color: 'var(--s-done)', icon: 'circle-check' },
    ok: { label: 'بهینه', color: 'var(--accent)', icon: 'gauge' },
    over: { label: 'اضافه‌بار', color: 'var(--danger)', icon: 'triangle-alert' },
    none: { label: 'ظرفیت نامعلوم', color: 'var(--ink-3)', icon: 'circle-help' },
  };
  const PHASE = [
    { key: 'delivered', label: 'تحویل‌شده', color: 'var(--s-done)' },
    { key: 'progress', label: 'در حال انجام', color: 'var(--s-progress)' },
    { key: 'planned', label: 'برنامه‌ریزی‌شده', color: 'var(--s-todo)' },
  ];

  /* ---------- helpers ---------- */
  const isDone = (i) => i.status === 'done' || i.status === 'devdone';
  const med = (a) => {
    if (!a.length) return 0;
    const s = [...a].sort((x, y) => x - y);
    const k = s.length >> 1;
    return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2;
  };
  const r1 = (n) => Math.round(n * 10) / 10;
  const fw = (n) => fa(r1(n));
  const shares = (i) => (i.fn.length ? i.fn.map((f) => [f, 1 / i.fn.length]) : [['نامشخص', 1]]);
  const backlogId = () => S.columns.find((c) => SFR.monthKey(c.name) === 'backlog')?.id;
  const colName = (m) => S.columns.find((c) => c.id !== backlogId() && SFR.monthIdx(c.name) === m)?.name;
  const monthFa = (m) => (colName(m) ? SFR.monthLabel(colName(m))[0] : '');
  const unitWord = () => (C.unit === 'n' ? 'کار' : 'هفته');

  /* ---------- the model ---------- */
  let M = null;
  function build() {
    const unit = C.unit;
    const rows = [...S.rest.values()].filter((i) => !i.isEpic && i.status !== 'canceled' && i.cycle.length);
    const cycles = [...new Set(rows.flatMap((i) => i.cycle))].filter((c) => /^\d{4}C\d$/.test(c)).sort();
    if (!cycles.length) return null;
    const cur = cycles.includes(C.cycle) ? C.cycle : cycles[cycles.length - 1];
    const past = cycles.filter((c) => c < cur).slice(-C.base);
    const bl = backlogId();
    const mOf = (i) => {
      if (!i.statusId || S.colOfStatus[i.statusId] === bl) return null;
      const col = S.columns.find((c) => c.id === S.colOfStatus[i.statusId]);
      return col ? SFR.monthIdx(col.name) : null;
    };

    // the months a cycle covers: the shortest run of calendar months that holds nearly all its planned cards
    const monthsOf = (c) => {
      const cnt = new Array(12).fill(0);
      let total = 0;
      rows.forEach((i) => {
        if (!i.cycle.includes(c)) return;
        const m = mOf(i);
        if (m != null) (cnt[m]++, total++);
      });
      if (!total) return [];
      // the shortest run of months holding ≥90% of the cycle's cards, then widened by any neighbour month that still holds a real share
      const sum = (st, len) => Array.from({ length: len }, (_, k) => cnt[(st + k) % 12]).reduce((x, y) => x + y, 0);
      const need = Math.ceil(total * MONTHS_RULE.core);
      let start = 0;
      let len = 12;
      for (let l = 1; l <= 12 && len === 12; l++) {
        let best = -1;
        for (let st = 0; st < 12; st++) if (sum(st, l) >= need && sum(st, l) > best) ((best = sum(st, l)), (start = st));
        if (best >= 0) len = l;
      }
      const real = (m) => cnt[m] >= MONTHS_RULE.edgeCount && cnt[m] / total >= MONTHS_RULE.edgeShare;
      while (len < 12 && real((start + 11) % 12)) ((start = (start + 11) % 12), len++);
      while (len < 12 && real((start + len) % 12)) len++;
      return Array.from({ length: len }, (_, k) => (start + k) % 12);
    };
    const auto = monthsOf(cur);
    const base0 = auto.length ? (auto[0] + 11) % 12 : 0;
    const ord = (a, b) => ((a - base0 + 12) % 12) - ((b - base0 + 12) % 12);
    const months = (C.months[cur] || auto).slice().sort(ord);
    // the detected months plus one either side, so a month can be added by hand
    const edge = auto.length ? [(auto[0] + 11) % 12, (auto[auto.length - 1] + 1) % 12] : [];
    const monthList = [...new Set([...auto, ...edge, ...(C.months[cur] || [])])].filter((k) => colName(k)).sort(ord);
    // where in the cycle we are
    const now = new Date();
    let win = null;
    if (months.length) {
      const span = (y) => [new Date(y, months[0], 1), new Date(y, months[0] + months.length, 1)];
      const ys = [now.getFullYear() - 1, now.getFullYear(), now.getFullYear() + 1];
      const hit = ys.find((y) => now >= span(y)[0] && now < span(y)[1]);
      const y = hit ?? ys.sort((a, b) => Math.abs(span(a)[0] - now) - Math.abs(span(b)[0] - now))[0];
      const [a, b] = span(y);
      win = { a, b, frac: Math.max(0, Math.min(1, (now - a) / (b - a))), inside: !!hit };
    }

    // typical size of a function's finished work (used for unsized cards and for «room for N more»)
    const sizedDone = rows.filter((i) => isDone(i) && SFR.sizeKey(i.size));
    const globalSize = unit === 'n' ? 1 : med(sizedDone.map(SFR.weeksOf)) || 1;
    const typical = new Map();
    const typicalOf = (f) => {
      if (unit === 'n') return 1;
      if (!typical.has(f)) typical.set(f, med(sizedDone.filter((i) => shares(i).some(([x]) => x === f)).map(SFR.weeksOf)) || globalSize);
      return typical.get(f);
    };
    const wt = (i, f) => (unit === 'n' ? { w: 1, est: false } : SFR.sizeKey(i.size) ? { w: SFR.weeksOf(i), est: false } : { w: typicalOf(f), est: true });

    // velocity of finished cycles
    const fnSet = new Set();
    rows.forEach((i) => shares(i).forEach(([f]) => fnSet.add(f)));
    const pastInfo = past.map((c) => ({ c, months: monthsOf(c).length || 1 }));
    const hist = new Map(); // fn → cycle → {w,n,any}
    const slot = (f, c) => {
      if (!hist.has(f)) hist.set(f, new Map());
      if (!hist.get(f).has(c)) hist.get(f).set(c, { w: 0, n: 0, any: false });
      return hist.get(f).get(c);
    };
    rows.forEach((i) => {
      const c = i.cycle[i.cycle.length - 1];
      if (!past.includes(c)) return;
      shares(i).forEach(([f, s]) => {
        const e = slot(f, c);
        e.any = true;
        if (isDone(i)) {
          e.w += s * wt(i, f).w;
          e.n += s;
        }
      });
    });

    // the plan of the chosen cycle
    const planned = new Map();
    const planSlot = (f) => {
      if (!planned.has(f)) planned.set(f, { delivered: 0, progress: 0, planned: 0, backlog: 0, est: 0, n: 0, estN: 0, byMonth: new Map(), backlogN: 0 });
      return planned.get(f);
    };
    rows
      .filter((i) => i.cycle.includes(cur))
      .forEach((i) => {
        const m = mOf(i);
        const ph = isDone(i) ? 'delivered' : m == null ? 'backlog' : i.status === 'progress' || i.status === 'pending' ? 'progress' : 'planned';
        shares(i).forEach(([f, s]) => {
          const e = planSlot(f);
          const { w, est } = wt(i, f);
          e[ph] += s * w;
          if (ph === 'backlog') return void (e.backlogN += s);
          e.n += s;
          if (est) (e.est += s * w, (e.estN += s));
          const k = months.includes(m) ? m : m == null ? 'x' : 'other';
          e.byMonth.set(k, (e.byMonth.get(k) || 0) + s * w);
        });
      });

    const sizeKeyOf = (w) => SFR.SIZES.reduce((best, k) => (Math.abs(SFR.SIZE_META[k].w - w) < Math.abs(SFR.SIZE_META[best].w - w) ? k : best), SFR.SIZES[0]);
    const fns = [...fnSet]
      .map((f) => {
        const per = pastInfo.map(({ c, months: mc }) => {
          const e = hist.get(f)?.get(c);
          return { c, months: mc, any: !!e?.any, w: e?.w || 0, n: e?.n || 0, mv: e?.any ? e.w / mc : null };
        });
        const used = per.filter((p) => p.mv != null);
        const mv = used.length ? med(used.map((p) => p.mv)) : null;
        const p = planned.get(f) || planSlot(f);
        const load = p.delivered + p.progress + p.planned;
        const cap = mv == null ? null : mv * months.length;
        const fill = cap ? load / cap : null;
        const state = fill == null ? 'none' : fill < THR.free ? 'free' : fill <= THR.over ? 'ok' : 'over';
        const t = typicalOf(f);
        return {
          f, per, mv, nC: used.length, low: used.length < MIN_CYCLES, cap, fill, state, load, p,
          free: cap == null ? null : cap - load,
          room: cap == null || cap - load < t ? 0 : Math.floor((cap - load) / t),
          typ: t,
          typKey: unit === 'n' ? '' : sizeKeyOf(t),
        };
      })
      .filter((x) => x.load > 0 || x.p.backlog > 0 || x.mv)
      .sort((a, b) => (b.cap ?? -1) - (a.cap ?? -1) || b.load - a.load);

    const withCap = fns.filter((x) => x.cap != null);
    const tot = {
      cap: withCap.reduce((a, x) => a + x.cap, 0),
      load: withCap.reduce((a, x) => a + x.load, 0),
      delivered: withCap.reduce((a, x) => a + x.p.delivered, 0),
      est: withCap.reduce((a, x) => a + x.p.est, 0),
      outside: fns.filter((x) => x.cap == null).reduce((a, x) => a + x.load, 0),
      backlogN: fns.reduce((a, x) => a + x.p.backlogN, 0),
    };
    M = { rows, cycles, cur, past, pastInfo, months, auto, monthList, win, fns, tot, unit, mOf, typicalOf, sizeKeyOf };
    return M;
  }

  /* ---------- small pieces ---------- */
  const sel = (bind, ic, value, opts, label) =>
    `<label class="select">${icon(ic, 14)}<select data-bind="${bind}" aria-label="${esc(label)}">${opts.map(([v, l]) => `<option value="${esc(v)}"${String(value) === String(v) ? ' selected' : ''}>${esc(l)}</option>`).join('')}</select>${icon('chevron-down', 14)}</label>`;
  const seg = (act, cur, opts, label) =>
    `<div class="switch switch-sm" role="tablist" aria-label="${label}">${opts.map(([k, l]) => `<button role="tab" aria-selected="${String(cur) === String(k)}" data-act="${act}" data-v="${k}">${l}</button>`).join('')}</div>`;
  const cd = (o) => `data-cd="${esc(JSON.stringify(o))}"`;
  const stateChip = (x) => {
    const s = STATE[x.state];
    return `<span class="cp-state" style="--c:${s.color}">${icon(s.icon, 13)}${s.label}</span>${x.low && x.cap != null ? '<span class="cp-low" data-hint="کمتر از سه سیکل کامل دیتا دارد؛ عدد تقریبی است">دیتای کم</span>' : ''}`;
  };
  const card = (id, title, sub, body, { full = false, tools = '' } = {}) =>
    `<section class="viz-card${full ? ' full' : ''} cp-card" data-card="${id}"><header><div><h3>${title}</h3>${sub ? `<p>${sub}</p>` : ''}</div>${tools}</header><div class="viz-body">${body}</div></section>`;
  const section = (title, sub) => `<div class="dash-sec"><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>`;

  /* ---------- filter bar ---------- */
  function filters(m) {
    const fnOpts = [['', 'همه‌ی فانکشن‌ها'], ...m.fns.map((x) => [x.f, x.f])];
    const monthChips = m.monthList
      .map((k) => `<button class="chip chip-sm${m.months.includes(k) ? ' is-on' : ''}" data-act="cap-month" data-v="${k}" aria-pressed="${m.months.includes(k)}">${esc(monthFa(k))}</button>`)
      .join('');
    return `<div class="dash-filters cp-filters">
      ${sel('cap-cycle', 'refresh-cw', m.cur, m.cycles.slice().reverse().map((c) => [c, c]), 'سیکل')}
      ${sel('cap-fn', 'target', C.fn, fnOpts, 'فانکشن')}
      ${seg('cap-unit', C.unit, [['w', 'هفته‌ی سایز'], ['n', 'تعداد کار']], 'واحد')}
      ${seg('cap-base', C.base, [[3, '۳ سیکل آخر'], [4, '۴ سیکل آخر']], 'پایهٔ ولوسیتی')}
      <span class="grow"></span>
      <span class="muted">${S.restReady ? '' : `${icon('refresh-cw', 14, 'spin')} کارت‌ها هنوز در حال خواندن‌اند`}</span>
    </div>
    <div class="cp-months"><b>ماه‌های این سیکل:</b>${monthChips}<small>${m.months.length ? `${fa(m.months.length)} ماه حساب می‌شود · با زدن روی ماه، آن را کم یا زیاد کنید` : ''}</small></div>`;
  }

  /* ---------- summary ---------- */
  function summary(m) {
    const t = m.tot;
    const fill = t.cap ? t.load / t.cap : null;
    const over = m.fns.filter((x) => x.state === 'over');
    const free = m.fns.filter((x) => x.state === 'free');
    const exp = m.win && m.win.inside ? t.cap * m.win.frac : null;
    const tile = (label, value, sub, tone = '', f) =>
      `<div class="sif-tile cp-tile${tone ? ` is-${tone}` : ''}"${f ? ` ${cd(f)} role="button" tabindex="0"` : ''}><small>${label}</small><b>${value}</b>${sub ? `<em>${sub}</em>` : ''}</div>`;
    const verdict = fill == null
      ? 'برای محاسبهٔ ظرفیت، سیکل کامل‌شدهٔ قبلی لازم است.'
      : `${m.cur}: ${faPct(fill * 100)} از ظرفیتِ معمول پر است. ${over.length ? `${fa(over.length)} فانکشن اضافه‌بار ${over.length > 1 ? 'دارند' : 'دارد'}` : 'هیچ فانکشنی اضافه‌بار ندارد'}${free.length ? ` و ${fa(free.length)} فانکشن هنوز جا ${free.length > 1 ? 'دارند' : 'دارد'}` : ''}.`;
    return `<div class="cp-verdict">${icon('gauge', 18)}<p>${verdict}</p></div>
      <div class="sif-tiles cp-tiles">
        ${tile('ظرفیت معمولِ سیکل', `${fw(t.cap)} <i>${unitWord()}</i>`, `بر پایهٔ ${fa(m.past.length)} سیکل گذشته · ${fa(m.months.length)} ماه`)}
        ${tile('کارِ برنامه‌ریزی‌شده', `${fw(t.load)} <i>${unitWord()}</i>`, `${fill == null ? '' : faPct(fill * 100) + ' از ظرفیت'}${t.est ? ` · ${fw(t.est)} ${unitWord()} تخمینی` : ''}`, fill != null && fill > THR.over ? 'warn' : '')}
        ${tile(t.cap - t.load >= 0 ? 'جای خالی' : 'اضافه‌بار', `${fw(Math.abs(t.cap - t.load))} <i>${unitWord()}</i>`, t.cap - t.load >= 0 ? 'ظرفیتی که هنوز پر نشده' : 'بیشتر از ظرفیتِ معمول', t.cap - t.load < 0 ? 'warn' : 'ok')}
        ${tile('تحویل‌شده تا امروز', `${fw(t.delivered)} <i>${unitWord()}</i>`, exp != null ? `${t.delivered >= exp ? 'جلوتر از' : 'عقب‌تر از'} روند معمول (تا الان ≈ ${fw(exp)})` : '', exp != null && t.delivered < exp * 0.8 ? 'warn' : 'ok', { ph: 'delivered' })}
        ${tile('گذشتهٔ سیکل', m.win ? faPct(m.win.frac * 100) : '—', m.win ? (m.win.inside ? 'از زمان سیکل گذشته' : 'سیکل در بازهٔ امروز نیست') : '')}
        ${tile('در بک‌لاگِ همین سیکل', fa(Math.round(t.backlogN)), 'کارِ بی‌ماه؛ در ظرفیت حساب نشده', '', { ph: 'backlog' })}
      </div>`;
  }

  /* ---------- main: every function against its capacity ---------- */
  function mainCard(m) {
    const list = m.fns.filter((x) => !C.fn || x.f === C.fn);
    const scale = Math.max(1, ...list.map((x) => Math.max(x.cap || 0, x.load)));
    const body = list
      .map((x) => {
        const p = x.p;
        const pct = (v) => `${(v / scale) * 100}%`;
        const seg2 = PHASE.map((ph) => (p[ph.key] > 0 ? `<button class="cp-seg" ${cd({ fn: x.f, ph: ph.key })} style="width:${pct(p[ph.key])};--c:${ph.color}" aria-label="${esc(`${x.f}، ${ph.label}: ${fw(p[ph.key])}`)}"></button>` : '')).join('');
        const overW = x.cap != null && x.load > x.cap ? `<i class="cp-over" style="inset-inline-start:${pct(x.cap)};width:${pct(x.load - x.cap)}"></i>` : '';
        const mark = x.cap != null ? `<i class="cp-cap" style="inset-inline-start:${pct(x.cap)}" data-hint="ظرفیت معمول: ${fw(x.cap)}"></i>` : '';
        const tipTxt = `${x.f}: ${fw(x.load)} از ${x.cap != null ? fw(x.cap) : '؟'}`;
        const num =
          x.cap == null
            ? `<b>${fw(x.load)}</b><small>سابقهٔ تحویل ندارد</small>`
            : `<b>${fw(x.load)}<i> از ${fw(x.cap)}</i></b><small>${faPct(x.fill * 100)}</small>`;
        const room =
          x.cap == null
            ? ''
            : x.free >= 0
            ? `<span class="cp-room">${fw(x.free)} ${unitWord()} جا${x.room && C.unit === 'w' ? ` · ≈ ${fa(x.room)} کار ${x.typKey}` : ''}</span>`
            : `<span class="cp-room is-over">${fw(-x.free)} ${unitWord()} بیشتر از ظرفیت</span>`;
        return `<div class="cp-row" data-tip="${esc(tipTxt)}">
          <div class="cp-label"><b><bdi>${esc(x.f)}</bdi></b><small>${x.mv != null ? `ولوسیتی ${fw(x.mv)} در ماه` : '—'}</small></div>
          <div class="cp-track">${seg2}${p.est > 0 && C.unit === 'w' ? `<span class="cp-est" style="inset-inline-start:${pct(x.load - p.est)};width:${pct(p.est)}" data-hint="${fw(p.est)} هفته از کارت‌های بی‌سایز حدس زده شده"></span>` : ''}${overW}${mark}</div>
          <div class="cp-num">${num}</div>
          <div class="cp-st">${stateChip(x)}${room}</div>
        </div>`;
      })
      .join('');
    const legend = `<p class="fn-key cp-legend">${PHASE.map((ph) => `<i style="background:${ph.color}"></i>${ph.label}`).join(' ')} <i class="k-est"></i>تخمینی (بی‌سایز) <i class="k-cap"></i>خط ظرفیت معمول</p>`;
    return card(
      'cap-main',
      'هر فانکشن چقدر پر است؟',
      `کارهای ${m.cur} نسبت به آنچه آن فانکشن معمولاً در یک سیکل تحویل می‌دهد · روی هر رنگ بزنید تا فهرستش باز شود`,
      list.length ? `${legend}<div class="cp-plot">${body}</div>` : SFR.empty('برای این فیلتر کاری نیست', '', 'inbox'),
      { full: true }
    );
  }

  /* ---------- month × function heat table ---------- */
  function monthCard(m) {
    const list = m.fns.filter((x) => (!C.fn || x.f === C.fn) && (x.load > 0 || x.mv));
    const cols = [...m.months, ...(list.some((x) => x.p.byMonth.get('other')) ? ['other'] : [])];
    const head = cols
      .map((k) => {
        const cur = k !== 'other' && SFR.isCurrentMonth(colName(k) || '');
        return `<th class="${cur ? 'is-now' : ''}">${k === 'other' ? 'ماه‌های دیگر' : esc(monthFa(k))}${cur ? '<em>الان</em>' : ''}</th>`;
      })
      .join('');
    const cell = (x, k) => {
      const v = x.p.byMonth.get(k) || 0;
      const capM = k === 'other' || x.mv == null ? null : x.mv;
      const ratio = capM ? v / capM : null;
      const tone = ratio == null ? '' : ratio > THR.over ? 'over' : ratio < THR.free ? 'free' : 'ok';
      const a = ratio == null ? 0 : Math.min(1, ratio) * 0.55;
      return `<td><button class="cp-cell ${tone}" style="--a:${a}" ${cd({ fn: x.f, m: k })} ${v ? '' : 'disabled'}>${v ? `<b>${fw(v)}</b>${ratio != null ? `<small>${faPct(ratio * 100)}</small>` : ''}` : '<span>·</span>'}</button></td>`;
    };
    const tr = list
      .map((x) => `<tr><th scope="row" dir="auto">${esc(x.f)}<small>${x.mv != null ? `ظرفیت ماه ${fw(x.mv)}` : ''}</small></th>${cols.map((k) => cell(x, k)).join('')}<td class="num"><b>${fw(x.load)}</b></td></tr>`)
      .join('');
    const sum = cols
      .map((k) => {
        const v = list.reduce((a, x) => a + (x.p.byMonth.get(k) || 0), 0);
        const c = k === 'other' ? null : list.reduce((a, x) => a + (x.mv || 0), 0);
        return `<td class="num"><b>${fw(v)}</b>${c ? `<small>${faPct((v / c) * 100)}</small>` : ''}</td>`;
      })
      .join('');
    return card(
      'cap-month',
      'بارِ هر ماه نسبت به ظرفیتِ ماهانه',
      'عدد بزرگ = کارِ برنامه‌ریزی‌شده در آن ماه (ماهِ ستونِ بورد)؛ عدد کوچک = چند درصدِ ظرفیتِ یک ماهِ همان فانکشن',
      list.length
        ? `<div class="dtable-wrap"><table class="dtable cp-table"><thead><tr><th>فانکشن</th>${head}<th class="num">جمع</th></tr></thead><tbody>${tr}</tbody><tfoot><tr><th>همه</th>${sum}<td class="num"><b>${fw(list.reduce((a, x) => a + x.load, 0))}</b></td></tr></tfoot></table></div>
           <p class="fn-key">کارهایی که ماه ندارند (بک‌لاگ) در این جدول نیستند.</p>`
        : SFR.empty('برای این فیلتر کاری نیست', '', 'inbox'),
      { full: true }
    );
  }

  /* ---------- velocity history ---------- */
  function trendCard(m) {
    const list = m.fns.filter((x) => (!C.fn || x.f === C.fn) && x.per.some((p) => p.any));
    const maxMv = Math.max(1, ...list.flatMap((x) => x.per.map((p) => p.mv || 0)));
    const head = m.pastInfo.map(({ c, months }) => `<th>${esc(c)}<em>${fa(months)} ماه</em></th>`).join('');
    const row = (x) => {
      const last = x.per[x.per.length - 1]?.mv;
      const dir = last == null || !x.mv ? 0 : last > x.mv * 1.15 ? 1 : last < x.mv * 0.85 ? -1 : 0;
      return `<tr><th scope="row" dir="auto">${esc(x.f)}${x.low ? '<span class="cp-low">دیتای کم</span>' : ''}</th>${x.per
        .map((p) => `<td>${p.mv == null ? '<span class="muted">—</span>' : `<span class="cp-mini"><i style="width:${(p.mv / maxMv) * 100}%"></i></span><b>${fw(p.mv)}</b><small>${fw(p.w)} در ${fa(p.months)} ماه</small>`}</td>`)
        .join('')}<td class="num"><b>${x.mv != null ? fw(x.mv) : '—'}</b></td><td class="cp-dir ${dir > 0 ? 'up' : dir < 0 ? 'down' : ''}">${dir > 0 ? `${icon('trending-up', 14)}بالا رفته` : dir < 0 ? `${icon('trending-down', 14)}پایین آمده` : x.mv != null ? `${icon('minus', 14)}ثابت` : ''}</td></tr>`;
    };
    return card(
      'cap-trend',
      'ولوسیتی هر فانکشن در سیکل‌های گذشته',
      `کارِ تحویل‌شده در هر ماه (${unitWord()} در ماه) · میانهٔ این عددها همان ولوسیتی است · سیکل‌ها طول یکسان ندارند، برای همین بر حسب ماه سنجیده شده`,
      list.length
        ? `<div class="dtable-wrap"><table class="dtable cp-table cp-trend"><thead><tr><th>فانکشن</th>${head}<th class="num">ولوسیتی (میانه)</th><th>روند آخرین سیکل</th></tr></thead><tbody>${list.map(row).join('')}</tbody></table></div>`
        : SFR.empty('سیکل کامل‌شده‌ای برای مقایسه نیست', '', 'inbox'),
      { full: true }
    );
  }

  /* ---------- "what if" ---------- */
  function scenarioCard(m) {
    const fn = m.fns.find((x) => x.f === C.scen.fn && x.cap != null) || m.fns.find((x) => x.cap != null);
    if (!fn) return '';
    const size = SFR.SIZES.includes(C.scen.size) ? C.scen.size : fn.typKey || 'M';
    const n = Math.max(1, Math.min(50, Number(C.scen.n) || 1));
    const add = m.unit === 'n' ? n : n * SFR.SIZE_META[size].w;
    const after = fn.load + add;
    const f2 = after / fn.cap;
    const st = f2 < THR.free ? 'free' : f2 <= THR.over ? 'ok' : 'over';
    const verdict = {
      free: 'هنوز جا دارد.',
      ok: 'در محدودهٔ بهینه است.',
      over: `از ظرفیتِ معمول ${fw(after - fn.cap)} ${unitWord()} بیشتر می‌شود؛ یا باید چیزی کنار برود یا زمان بیشتری لازم است.`,
    }[st];
    const body = `<div class="cp-scen">
      <div class="cp-scen-in">
        ${sel('cap-sc-fn', 'target', fn.f, m.fns.filter((x) => x.cap != null).map((x) => [x.f, x.f]), 'فانکشن')}
        ${m.unit === 'n' ? '' : sel('cap-sc-size', 'ruler', size, SFR.SIZES.map((k) => [k, `${k} · ${SFR.SIZE_META[k].fa}`]), 'سایز')}
        <label class="select">${icon('plus', 14)}<input class="cp-n" data-bind="cap-sc-n" type="number" min="1" max="50" value="${n}" aria-label="تعداد کار"></label>
      </div>
      <p>اگر به <b>${esc(fn.f)}</b> ${fa(n)} کار${m.unit === 'n' ? '' : ` با سایز <b>${size}</b>`} اضافه کنید (${fw(add)} ${unitWord()})، بار از ${fw(fn.load)} به <b>${fw(after)}</b> می‌رسد؛ یعنی ${faPct(f2 * 100)} از ظرفیت (${fw(fn.cap)}). <span class="cp-state" style="--c:${STATE[st].color}">${icon(STATE[st].icon, 13)}${STATE[st].label}</span> ${verdict}</p>
      <div class="cp-meter"><i style="width:${Math.min(100, (fn.load / Math.max(after, fn.cap)) * 100)}%"></i><i class="add" style="width:${Math.min(100, (add / Math.max(after, fn.cap)) * 100)}%;--c:${STATE[st].color}"></i><b style="inset-inline-start:${(fn.cap / Math.max(after, fn.cap)) * 100}%"></b></div>
      <small class="muted">این فقط یک محاسبه است؛ چیزی در جیرا نوشته نمی‌شود.</small>
    </div>`;
    return card('cap-scen', 'اگر کار اضافه کنم؟', 'ببینید یک فانکشن چند کارِ دیگر را تحمل می‌کند', body);
  }

  function methodCard(m) {
    const unsized = m.fns.reduce((a, x) => a + x.p.estN, 0);
    return card(
      'cap-how',
      'چطور حساب شد؟',
      '',
      `<ul class="cp-how">
        <li><b>ولوسیتی:</b> کارِ تحویل‌شدهٔ هر فانکشن در هر سیکلِ گذشته، تقسیم بر تعداد ماه‌های آن سیکل. میانهٔ این عددها (از ${fa(m.past.length)} سیکلِ آخر: ${m.past.map(esc).join('، ') || '—'}) ولوسیتی ماهانه است.</li>
        <li><b>ظرفیتِ سیکل:</b> ولوسیتی ماهانه × ${fa(m.months.length)} ماه (${m.months.map(monthFa).join('، ') || '—'}).</li>
        <li><b>${unitWord() === 'کار' ? 'واحد' : 'هفتهٔ سایز'}:</b> ${m.unit === 'n' ? 'هر کار یکی حساب می‌شود.' : 'هر سایز یک وزن دارد: ' + SFR.SIZES.map((k) => `${k} = ${SFR.SIZE_META[k].fa}`).join('، ') + '.'}</li>
        <li><b>کارِ سیکل:</b> همهٔ کارهای ${m.cur} که لغو نشده‌اند و ماه دارند (تحویل‌شده + در حال انجام + برنامه‌ریزی‌شده). کارهای بی‌ماه (بک‌لاگ) جدا شمرده می‌شوند.</li>
        ${m.unit === 'w' ? `<li><b>بی‌سایز:</b> ${fa(Math.round(unsized))} کارِ بدونِ سایز با «سایزِ معمولِ همان فانکشن» (میانهٔ کارهای تحویل‌شده‌اش) حدس زده شد و با راه‌راه نشان داده می‌شود. بهتر است سایز واقعی‌شان ثبت شود.</li>` : ''}
        <li><b>وضعیت:</b> کمتر از ${faPct(THR.free * 100)} پر = جا دارد · تا ${faPct(THR.over * 100)} = بهینه · بیشتر = اضافه‌بار. کمتر از ${fa(MIN_CYCLES)} سیکل دیتا = «دیتای کم».</li>
        <li><b>محدودیت:</b> ولوسیتی میانگینِ گذشته است و تعطیلی، مرخصی، یا تغییر اندازهٔ تیم را نمی‌داند.</li>
      </ul>`,
      { full: true }
    );
  }

  /* ---------- page ---------- */
  SFR.renderCapacity = (el) => {
    if (S.status !== 'ready') return;
    if (!S.rest.size) {
      el.innerHTML = `<div class="dash"><div class="loading-note">${icon('refresh-cw', 16, 'spin')} در حال خواندن کارت‌ها از جیرا…</div></div>`;
      return;
    }
    const m = build();
    if (!m) {
      el.innerHTML = `<div class="dash">${SFR.empty('سیکلی پیدا نشد', 'کارت‌ها فیلد Cycle ندارند.', 'inbox')}</div>`;
      return;
    }
    const fresh = S.restReady && !S.anim.cap;
    if (S.restReady) S.anim.cap = true;
    const top = el.scrollTop;
    el.innerHTML = `<div class="dash cp${fresh ? ' is-fresh' : ''}">
      ${filters(m)}
      ${summary(m)}
      <div class="dash-grid">
        ${section('ظرفیت و بار', `${m.cur} نسبت به ولوسیتیِ گذشته`)}
        ${mainCard(m)}
        ${monthCard(m)}
        ${section('اگر … چه می‌شود؟')}
        ${scenarioCard(m)}
        ${section('تاریخچه', 'ولوسیتی از روی سیکل‌های تمام‌شده')}
        ${trendCard(m)}
        ${methodCard(m)}
      </div>
    </div>`;
    el.scrollTop = top;
    SFR.fx.countUp(el);
  };

  /* ---------- drill: the cards behind a number ---------- */
  SFR.openCapDrill = (f) => {
    if (!M) return;
    const m = M;
    const fnRow = f.fn ? m.fns.find((x) => x.f === f.fn) : null;
    const items = m.rows
      .filter((i) => i.cycle.includes(m.cur))
      .map((i) => {
        const mi = m.mOf(i);
        const ph = isDone(i) ? 'delivered' : mi == null ? 'backlog' : i.status === 'progress' || i.status === 'pending' ? 'progress' : 'planned';
        return { i, mi, ph };
      })
      .filter(({ i, mi, ph }) => {
        if (f.fn && !shares(i).some(([x]) => x === f.fn)) return false;
        if (f.ph && ph !== f.ph) return false;
        if (f.m != null && f.m !== '') {
          if (ph === 'backlog') return false;
          const k = m.months.includes(mi) ? mi : 'other';
          if (String(k) !== String(f.m)) return false;
        }
        if (!f.ph && f.m == null && ph === 'backlog') return false;
        return true;
      })
      .sort((a, b) => PHASE.findIndex((p) => p.key === a.ph) - PHASE.findIndex((p) => p.key === b.ph) || SFR.weeksOf(b.i) - SFR.weeksOf(a.i));
    const parts = [m.cur, f.fn, f.ph ? (PHASE.find((p) => p.key === f.ph)?.label || 'بک‌لاگ (بی‌ماه)') : '', f.m != null && f.m !== '' ? (f.m === 'other' ? 'ماه‌های دیگر' : monthFa(Number(f.m))) : ''].filter(Boolean);
    const total = items.reduce((a, { i }) => a + (SFR.sizeKey(i.size) ? SFR.weeksOf(i) : 0), 0);
    const sheet = SFR.root.querySelector('.sheet');
    sheet.classList.add('is-sif');
    let last = '';
    sheet.querySelector('.sheet-panel').innerHTML = `
      <header class="d-head"><b>${esc(parts.join(' · '))}</b><span class="count">${fa(items.length)}</span><span class="grow"></span><button class="icon-btn" data-act="close-sheet" aria-label="بستن">${icon('x', 18)}</button></header>
      <div class="sd-summary cp-sum"><b>${fw(total)}</b><span>هفته‌ی کارِ دارای سایز${items.some(({ i }) => !SFR.sizeKey(i.size)) ? ` · ${fa(items.filter(({ i }) => !SFR.sizeKey(i.size)).length)} کار بی‌سایز` : ''}${fnRow?.cap != null ? ` · ظرفیت ${esc(fnRow.f)}: ${fw(fnRow.cap)}` : ''}</span></div>
      <div class="sd-scroll"><ul class="sd-list cp-list">${items
        .slice(0, 300)
        .map(({ i, mi, ph }) => {
          const head = ph !== last ? ((last = ph), `<li class="cp-phase" style="--c:${PHASE.find((p) => p.key === ph)?.color || 'var(--ink-3)'}"><i></i>${PHASE.find((p) => p.key === ph)?.label || 'بک‌لاگ (بی‌ماه)'}</li>`) : '';
          const t = SFR.splitTitle(i.summary);
          return `${head}<li class="sd-row" data-key="${esc(i.key)}" tabindex="0"><span class="sf-link"><span class="sd-t" dir="auto">${esc(t.title)}</span><span class="sd-meta">${SFR.keyChip(i.key)}${SFR.statusPill(i.status, { short: true })}${SFR.avatar(i.poc, 'xs')}${i.poc ? `<span>${esc(SFR.firstName(i.poc.display))}</span>` : ''}${mi != null ? `<bdi class="tag">${esc(monthFa(mi))}</bdi>` : ''}${i.fn[0] ? `<bdi class="tag" dir="auto">${esc(i.fn[0])}</bdi>` : ''}</span></span><span class="sd-age">${SFR.sizeChip(i.size) || '<small>بی‌سایز</small>'}</span></li>`;
        })
        .join('')}</ul></div>`;
    sheet.classList.add('is-open');
    sheet.querySelector('[data-act="close-sheet"]').focus();
  };

  /* ---------- events (wired in app.js) ---------- */
  const redraw = () => (S.anim.cap = true, SFR.render());
  SFR.capacity = {
    acts: {
      'cap-unit': (b) => ((C.unit = b.dataset.v), redraw()),
      'cap-base': (b) => ((C.base = Number(b.dataset.v)), redraw()),
      'cap-month': (b) => {
        if (!M) return;
        const k = Number(b.dataset.v);
        const cur = new Set(M.months);
        cur.has(k) ? cur.delete(k) : cur.add(k);
        if (cur.size) C.months[M.cur] = [...cur];
        redraw();
      },
    },
    onSelect: (t) => {
      const k = t.dataset.bind;
      if (k === 'cap-cycle') ((C.cycle = t.value), (C.months = C.months || {}));
      else if (k === 'cap-fn') C.fn = t.value;
      else if (k === 'cap-sc-fn') C.scen.fn = t.value;
      else if (k === 'cap-sc-size') C.scen.size = t.value;
      else if (k === 'cap-sc-n') C.scen.n = t.value;
      redraw();
    },
  };
})();

/* app/app.js */
/* Roadmap Lens — app shell, routing between views, event delegation, keyboard, theme. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;

  const shell = () => `
    <div class="app" dir="rtl" lang="fa">
      <header class="topbar">
        <div class="brand">
          <span class="logo" aria-hidden="true">${icon('square-kanban', 18)}</span>
          <div class="brand-text"><b>${esc(S.cfg?.name ? 'نقشه‌راه محصول' : 'نقشه‌راه')}</b><small dir="auto">${esc(S.cfg?.name || '')}</small></div>
        </div>
        <div class="greet" data-greet></div>
        <nav class="tabs" role="tablist" aria-label="بخش‌ها">
          <button role="tab" data-act="tab" data-v="board">${icon('square-kanban', 16)}بورد</button>
          <button role="tab" data-act="tab" data-v="following">${icon('star', 16)}دنبال‌شده‌ها<span class="badge" data-badge="news" hidden></span></button>
          <button role="tab" data-act="tab" data-v="dashboard">${icon('chart-pie', 16)}داشبورد</button>
          <button role="tab" data-act="tab" data-v="sif">${icon('list-filter', 16)}قیف SIF</button>
          <button role="tab" data-act="tab" data-v="capacity">${icon('gauge', 16)}ظرفیت</button>
        </nav>
        <div class="top-actions">
          <span class="sync" data-sync></span>
          <button class="icon-btn" data-act="refresh" data-hint="به‌روزرسانی از جیرا" aria-label="به‌روزرسانی">${icon('refresh-cw', 18)}</button>
          <button class="icon-btn" data-act="theme" data-hint="تغییر تم" aria-label="تغییر تم">${icon('sun', 18)}</button>
          <button class="btn btn-outline btn-sm" data-act="exit" data-hint="Alt + L">${icon('log-out', 16, 'flip-x')}نمای اصلی جیرا</button>
          <button class="player" data-act="player" aria-haspopup="dialog" aria-label="پروفایل بازیکن" hidden></button>
        </div>
      </header>
      <main class="main">
        <div class="view" data-view="board"></div>
        <div class="view" data-view="following"></div>
        <div class="view" data-view="dashboard"></div>
        <div class="view" data-view="sif"></div>
        <div class="view" data-view="capacity"></div>
        <div class="state-screen" data-state></div>
      </main>
      <aside class="drawer" aria-hidden="true"><div class="scrim" data-act="close-drawer"></div><div class="drawer-panel" role="dialog" aria-modal="true" aria-label="جزئیات اینیشیتیو"></div></aside>
      <aside class="sheet"><div class="scrim" data-act="close-sheet"></div><div class="sheet-panel" role="dialog" aria-modal="true" aria-label="فهرست اینیشیتیوها"></div></aside>
      <div class="popover" hidden role="dialog"></div>
      <div class="tooltip" hidden role="tooltip"></div>
      <div class="toasts" aria-live="polite"></div>
      <div class="fx" aria-hidden="true"></div>
    </div>`;

  /* ---------- theme ---------- */
  const mq = matchMedia('(prefers-color-scheme: dark)');
  function applyTheme() {
    const app = SFR.root.querySelector('.app');
    const t = S.ui.theme === 'auto' ? (mq.matches ? 'dark' : 'light') : S.ui.theme;
    app.dataset.theme = t;
    const b = app.querySelector('[data-act="theme"]');
    if (b) {
      b.innerHTML = icon(S.ui.theme === 'auto' ? 'monitor' : t === 'dark' ? 'moon' : 'sun', 18);
      b.dataset.hint = { auto: 'تم: هماهنگ با سیستم', light: 'تم: روشن', dark: 'تم: تیره' }[S.ui.theme];
    }
  }
  mq.addEventListener?.('change', () => SFR.root && applyTheme());

  /* ---------- render ---------- */
  function renderState() {
    const el = SFR.root.querySelector('[data-state]');
    if (S.status === 'loading')
      el.innerHTML = `<div class="kanban">${Array.from({ length: 6 }, () => `<section class="column"><header class="col-head"><div class="skel-line"></div></header><div class="col-body">${SFR.skeletonCards(4)}</div></section>`).join('')}</div>`;
    else if (S.status === 'error') el.innerHTML = `${SFR.empty('بورد باز نشد', S.error, 'triangle-alert')}<div class="center"><button class="btn btn-primary" data-act="retry">${icon('rotate-ccw', 16)}تلاش دوباره</button></div>`;
    else el.innerHTML = '';
    el.hidden = S.status === 'ready';
  }

  function render(what = 'all') {
    if (!SFR.root) return;
    const app = SFR.root.querySelector('.app');
    applyTheme(); // the saved theme arrives after mount, with the board settings
    renderState();
    if (S.cfg) {
      app.querySelector('.brand-text small').textContent = S.cfg.name;
      const g = app.querySelector('[data-greet]');
      if (S.me && g && !g.dataset.done) {
        g.innerHTML = `<b>${SFR.greeting()}، ${esc(SFR.firstName(S.me.display))}</b><small>${SFR.today()}</small>`;
        g.dataset.done = 1;
      }
      SFR.game.paint();
    }
    app.querySelectorAll('[data-act="tab"]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.v === S.ui.tab)));
    app.querySelectorAll('.view').forEach((v) => (v.hidden = v.dataset.view !== S.ui.tab || S.status !== 'ready'));
    if (S.ui.tab !== 'dashboard') S.anim.dash = false;
    if (S.ui.tab !== 'board') S.anim.board = false;
    if (S.ui.tab !== 'sif') S.anim.sif = false;
    if (S.ui.tab !== 'capacity') S.anim.cap = false;
    const st = SFR.followingStats();
    const badge = app.querySelector('[data-badge="news"]');
    badge.hidden = !st.news;
    badge.textContent = fa(st.news);
    app.querySelector('[data-sync]').innerHTML =
      S.status === 'ready' && !S.restReady && S.restTotal ? `${icon('refresh-cw', 14, 'spin')}${fa(S.restLoaded)} / ${fa(S.restTotal)}` : '';
    if (S.status !== 'ready') return;
    const view = app.querySelector(`[data-view="${S.ui.tab}"]`);
    if (S.ui.tab === 'board') SFR.renderBoard(view);
    else if (S.ui.tab === 'following') SFR.renderFollowing(view);
    else if (S.ui.tab === 'sif') SFR.renderSif(view);
    else if (S.ui.tab === 'capacity') SFR.renderCapacity(view);
    else SFR.renderDashboard(view);
    if (what === 'follow' && SFR.drawer.key) SFR.refreshDrawerMeta();
  }
  SFR.render = render;
  const renderSoon = (() => {
    let raf = 0;
    let pending = 'all';
    return (what) => {
      pending = what === 'follow' || pending === 'follow' ? 'follow' : what;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        render(pending);
        pending = 'all';
      });
    };
  })();

  /* ---------- popovers ---------- */
  function openPopover(anchor, html, cls) {
    const pop = SFR.root.querySelector('.popover');
    pop.className = `popover ${cls || ''}`;
    pop.innerHTML = html;
    pop.hidden = false;
    const r = anchor.getBoundingClientRect();
    const w = pop.offsetWidth;
    const right = Math.max(8, Math.min(window.innerWidth - r.right, window.innerWidth - w - 8));
    pop.style.top = `${r.bottom + 8}px`;
    pop.style.right = `${right}px`;
    pop._anchor = anchor;
    pop.querySelector('input')?.focus();
  }
  const closePopover = () => {
    const pop = SFR.root.querySelector('.popover');
    if (!pop.hidden) {
      pop.hidden = true;
      pop._anchor?.focus?.();
    }
  };

  const qfApply = SFR.debounce(() => SFR.applyQuickFilters(), 350);
  const setSearch = SFR.debounce((v) => {
    S.ui.search = v;
    render('board');
  }, 160);

  /* ---------- actions ---------- */
  const ACT = {
    tab: (b) => {
      S.ui.tab = b.dataset.v;
      SFR.saveUi();
      SFR.closeDrill();
      render();
    },
    view: (b) => ((S.ui.view = b.dataset.v), SFR.saveUi(), render()),
    status: (b) => {
      const k = b.dataset.key;
      S.ui.status = S.ui.status.includes(k) ? S.ui.status.filter((x) => x !== k) : [...S.ui.status, k];
      SFR.saveUi();
      render();
    },
    qf: (b) => {
      const id = String(b.dataset.id);
      S.ui.qf = S.ui.qf.includes(id) ? S.ui.qf.filter((x) => x !== id) : [...S.ui.qf, id];
      b.classList.toggle('is-on', S.ui.qf.includes(id));
      SFR.saveUi();
      render();
      qfApply();
    },
    'clear-qf': () => {
      S.ui.qf = [];
      SFR.saveUi();
      SFR.root.querySelectorAll('.popover .chip.is-on').forEach((c) => c.classList.remove('is-on'));
      SFR.applyQuickFilters();
    },
    'clear-all': () => {
      Object.assign(S.ui, { qf: [], status: [], owner: '', search: '', onlyFollowed: false });
      SFR.saveUi();
      SFR.applyQuickFilters();
    },
    'clear-search': () => ((S.ui.search = ''), render()),
    owner: (b) => {
      S.ui.owner = S.ui.owner === b.dataset.name ? '' : b.dataset.name;
      SFR.saveUi();
      closePopover();
      render();
    },
    'only-followed': () => ((S.ui.onlyFollowed = !S.ui.onlyFollowed), SFR.saveUi(), render()),
    'toggle-backlog': () => ((S.ui.hideBacklog = !S.ui.hideBacklog), SFR.saveUi(), render()),
    more: (b) => {
      const c = b.dataset.col;
      const step = { table: 200, delayed: 10 }[c] || 40;
      S.ui.colLimit[c] = (S.ui.colLimit[c] || step) + step;
      render();
    },
    sort: (b) => {
      const by = b.dataset.by;
      S.ui.sort = { by, dir: S.ui.sort.by === by ? -S.ui.sort.dir : 1 };
      render();
    },
    'open-filters': (b) => openPopover(b, SFR.filtersPanel(), 'pop-filters'),
    'open-people': (b) => openPopover(b, SFR.peoplePanel(), 'pop-people'),
    player: (b) => {
      const pop = SFR.root.querySelector('.popover');
      if (!pop.hidden && pop._anchor === b) return closePopover();
      openPopover(b, SFR.game.panel(), 'pop-player');
    },
    'dash-sizeval': (b) => ((S.dash.sizeVal = b.dataset.v), (S.anim.dash = true), render()),
    'dash-sizephase': (b) => ((S.dash.sizePhase = b.dataset.v), (S.anim.dash = true), render()),
    'sr-reset': () => ((S.dash.sr = { cycle: '', month: '', fn: '' }), (S.anim.dash = true), render()),
    'dash-csv': () => SFR.exportSizeCsv(),
    'sif-reset': () => ((S.sif.f = { cycle: '', battle: '', focus: '', poc: '', fn: '', strat: '' }), (S.anim.sif = true), render()),
    'sif-refresh': () => ((S.anim.sif = true), SFR.sif.ensure(true)),
    'dash-podium': (b) => ((S.dash.podium = b.dataset.v), (S.anim.dash = true), render()),
    'dash-measure': (b) => ((S.dash.measure = b.dataset.v), (S.anim.dash = true), render()),
    'dash-monthby': (b) => ((S.dash.monthBy = b.dataset.v), (S.anim.dash = true), render()),
    'close-pop': closePopover,
    follow: (b) => SFR.toggleFollow(b.dataset.key),
    'follow-tab': (b) => ((S.ui.followTab = b.dataset.v), render()),
    'mark-all-seen': () => SFR.markAllSeen(),
    'close-drawer': () => SFR.closeIssue(),
    'close-sheet': () => SFR.closeDrill(),
    'copy-link': async (b) => {
      try {
        await navigator.clipboard.writeText(`${location.origin}/browse/${b.dataset.key}`);
        SFR.toast('لینک کپی شد.', 'ok');
      } catch {
        SFR.toast('کپی لینک ممکن نشد.', 'error');
      }
    },
    'expand-desc': (b) => {
      b.previousElementSibling.classList.remove('clamp');
      b.remove();
    },
    template: (b) => {
      const ta = SFR.root.querySelector('.drawer textarea');
      ta.value = b.dataset.text + ta.value.replace(/^(به‌روزرسانی وضعیت|سؤال|ریسک\/مانع|تصمیم): /, '');
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
      SFR.drawer.draft[SFR.drawer.key] = ta.value;
    },
    mention: (b) => SFR.drawer.insertMention(b),
    'toggle-table': (b) => {
      const c = b.closest('.viz-card');
      c.classList.toggle('show-table');
      b.dataset.hint = c.classList.contains('show-table') ? 'نمایش نمودار' : 'نمایش جدول';
      b.innerHTML = icon(c.classList.contains('show-table') ? 'chart-column' : 'table-2', 16);
    },
    'dash-cycle': (b) => ((S.dash.cycle = b.dataset.v), render()),
    'dash-canceled': () => ((S.dash.hideCanceled = !S.dash.hideCanceled), render()),
    refresh: async (b) => {
      b.classList.add('is-busy');
      try {
        await SFR.reload();
        SFR.toast('بورد به‌روز شد.', 'ok');
      } catch (e) {
        SFR.toast(`به‌روزرسانی ناموفق بود: ${e.message}`, 'error');
      }
      b.classList.remove('is-busy');
    },
    theme: () => {
      S.ui.theme = { auto: 'light', light: 'dark', dark: 'auto' }[S.ui.theme] || 'auto';
      SFR.saveUi();
      applyTheme();
    },
    exit: () => SFR.close(),
    retry: () => SFR.load(S.boardId),
  };

  Object.assign(ACT, SFR.drawer.acts, SFR.sifdrill.acts, SFR.capacity.acts, SFR.gantt.acts);

  function bind(app) {
    app.addEventListener('click', (e) => {
      const pop = SFR.root.querySelector('.popover');
      if (!pop.hidden && !pop.contains(e.target) && !e.target.closest('[data-act="open-filters"],[data-act="open-people"],[data-act="player"]')) closePopover();
      const a = e.target.closest('[data-act]');
      if (a && app.contains(a)) {
        e.preventDefault();
        ACT[a.dataset.act]?.(a, e);
        return;
      }
      const cap = e.target.closest('[data-cd]');
      if (cap && !cap.disabled) return SFR.openCapDrill(JSON.parse(cap.dataset.cd));
      const sif = e.target.closest('[data-sd]');
      if (sif) return SFR.openSifDrill(JSON.parse(sif.dataset.sd));
      const drill = e.target.closest('[data-drill]');
      if (drill) return SFR.openDrill(JSON.parse(drill.dataset.drill));
      const k = e.target.closest('[data-key]');
      if (k && !e.target.closest('a,button,select,textarea,input')) SFR.openIssue(k.dataset.key);
    });

    app.addEventListener('input', (e) => {
      const t = e.target;
      const bindTo = t.dataset?.bind;
      if (bindTo === 'search') setSearch(t.value);
      else if (bindTo === 'qf-search') {
        const q = SFR.norm(t.value);
        SFR.root.querySelectorAll('.popover .chip[data-name]').forEach((c) => (c.hidden = q && !c.dataset.name.includes(q)));
        SFR.root.querySelectorAll('.popover .fgroup').forEach((g) => (g.hidden = ![...g.querySelectorAll('.chip')].some((c) => !c.hidden)));
      } else if (bindTo === 'people-search') {
        const q = SFR.norm(t.value);
        SFR.root.querySelectorAll('.popover .person[data-search]').forEach((p) => (p.hidden = q && !p.dataset.search.includes(q)));
      } else if (bindTo === 'ed-user') SFR.drawer.searchUsers(t.value);
      else if (bindTo === 'comment') SFR.drawer.onInput(t);
      else if (bindTo === 'sd-q') SFR.sifdrill.onInput(t);
    });

    app.addEventListener('change', (e) => {
      const t = e.target;
      if (t.dataset.bind === 'sd-sel') return SFR.sifdrill.onSelect(t);
      if (t.dataset.bind?.startsWith('cap-')) return SFR.capacity.onSelect(t);
      if (t.dataset.bind === 'move') SFR.moveIssue(t.dataset.key, t.value);
      if (t.dataset.bind === 'dash-fn') ((S.dash.fn = t.value), render());
      if (t.dataset.bind?.startsWith('sif-')) ((S.sif.f[t.dataset.bind.slice(4)] = t.value), (S.anim.sif = true), render());
      if (t.dataset.bind?.startsWith('sr-')) ((S.dash.sr[t.dataset.bind.slice(3)] = t.value), (S.anim.dash = true), render());
    });

    app.addEventListener('submit', (e) => {
      e.preventDefault();
      if (e.target.dataset.form === 'comment') SFR.drawer.submit(e.target);
    });

    app.addEventListener('keydown', (e) => {
      const t = e.target;
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);
      const mpop = SFR.root.querySelector('.mention-pop:not([hidden])');
      if (mpop && t.tagName === 'TEXTAREA' && ['ArrowDown', 'ArrowUp', 'Enter', 'Tab'].includes(e.key)) {
        const opts = [...mpop.querySelectorAll('.person')];
        let i = opts.findIndex((o) => o.classList.contains('is-on'));
        if (e.key === 'Enter' || e.key === 'Tab') SFR.drawer.insertMention(opts[Math.max(0, i)]);
        else {
          opts[i]?.classList.remove('is-on');
          i = (i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
          opts[i].classList.add('is-on');
        }
        e.preventDefault();
        return;
      }
      if (e.key === 'Enter' && t.dataset?.bind === 'ed-text' && (t.tagName === 'INPUT' || e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        SFR.drawer.acts['ed-save']();
        return;
      }
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && t.tagName === 'TEXTAREA') {
        e.preventDefault();
        t.form.requestSubmit();
        return;
      }
      if (e.key === 'Escape') {
        if (t.dataset?.bind === 'sd-q' && SFR.sifdrill.clearQuery(t)) return;
        if (mpop) mpop.hidden = true;
        else if (!SFR.root.querySelector('.popover').hidden) closePopover();
        else if (!SFR.drawer.key && SFR.gantt.cancel()) return;
        else if (SFR.drawer.ed) SFR.drawer.cancelEdit();
        else if (SFR.drawer.key) SFR.closeIssue();
        else if (SFR.root.querySelector('.sheet.is-open')) SFR.closeDrill();
        else if (typing) t.blur();
        return;
      }
      if (e.key === 'Enter' && !typing && t.matches('[data-key]:not(button)')) return SFR.openIssue(t.dataset.key);
      if (e.key === 'Enter' && !typing && t.matches('[data-cd]:not(button)')) return SFR.openCapDrill(JSON.parse(t.dataset.cd));
      if (e.key === 'Tab' && SFR.drawer.key) trap(e, SFR.root.querySelector('.drawer-panel'));
      if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === '/') {
        e.preventDefault();
        if (S.ui.tab !== 'board') ACT.tab({ dataset: { v: 'board' } });
        SFR.root.querySelector('input[data-bind="search"]')?.focus();
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) ACT.tab({ dataset: { v: ['board', 'following', 'dashboard', 'sif', 'capacity'][e.key - 1] } });
    });

    /* drag a card to another month */
    let dragKey = null;
    app.addEventListener('dragstart', (e) => {
      const c = e.target.closest?.('.card[data-key]');
      if (!c) return;
      dragKey = c.dataset.key;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', dragKey);
      requestAnimationFrame(() => c.classList.add('is-dragging'));
    });
    app.addEventListener('dragend', (e) => {
      e.target.closest?.('.card')?.classList.remove('is-dragging');
      app.querySelectorAll('.column.is-over').forEach((c) => c.classList.remove('is-over'));
      dragKey = null;
    });
    app.addEventListener('dragover', (e) => {
      const col = e.target.closest?.('.column[data-col]');
      if (!col || !dragKey) return;
      e.preventDefault();
      app.querySelectorAll('.column.is-over').forEach((c) => c !== col && c.classList.remove('is-over'));
      col.classList.add('is-over');
    });
    app.addEventListener('drop', (e) => {
      const col = e.target.closest?.('.column[data-col]');
      if (!col || !dragKey) return;
      e.preventDefault();
      col.classList.remove('is-over');
      S.anim.popCol = col.dataset.col;
      SFR.moveIssue(dragKey, col.dataset.col);
    });
  }

  function trap(e, panel) {
    const f = [...panel.querySelectorAll('button,a[href],textarea,select,input,[tabindex="0"]')].filter((x) => !x.disabled && x.offsetParent);
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    const act = SFR.root.activeElement;
    if (e.shiftKey && act === first) (last.focus(), e.preventDefault());
    else if (!e.shiftKey && act === last) (first.focus(), e.preventDefault());
  }

  /* ---------- mount ---------- */
  let unsub = null;
  SFR.mount = (shadow) => {
    SFR.root = shadow;
    const wrap = document.createElement('div');
    wrap.className = 'app-wrap';
    wrap.innerHTML = shell();
    shadow.appendChild(wrap);
    const app = wrap.querySelector('.app');
    applyTheme();
    bind(app);
    SFR.installTooltip(app);
    unsub = SFR.subscribe(renderSoon);
    render();
    return wrap;
  };
  SFR.unmount = () => {
    unsub?.();
    SFR.root?.querySelector('.app-wrap')?.remove();
  };
})();

/* app/boot.js */
/* Roadmap Lens — bootstrap inside the Jira page: font, shadow host, launcher, open/close.
 * Settings arrive from the extension loader in <script id="roadmap-lens-config" type="application/json">. */
(() => {
  const SFR = globalThis.SFR;
  if (SFR.booted) return;
  SFR.booted = true;
  // Tells the extension loader that the app started.
  document.documentElement.setAttribute('data-roadmap-lens', String(SFR.BUILD));

  const DEFAULTS = { enabled: true, boards: ['314'], autoOpen: true, fontUrl: '' };
  let cfg = DEFAULTS;
  try {
    cfg = { ...DEFAULTS, ...JSON.parse(document.getElementById('roadmap-lens-config')?.textContent || '{}') };
  } catch {
    /* defaults */
  }
  SFR.config = cfg;

  const url = new URL(location.href);
  const onBoard = /RapidBoard\.jspa/.test(url.pathname);
  const onDashboard = /Dashboard\.jspa/.test(url.pathname);
  const boardParam = url.searchParams.get('rapidView');
  const relevant = (onBoard && cfg.boards.includes(boardParam)) || onDashboard;
  if (!cfg.enabled || !relevant) return;

  let host;
  let shadow;
  let open = false;

  function injectFont() {
    if (!cfg.fontUrl || document.getElementById('sfr-font')) return;
    const st = document.createElement('style');
    st.id = 'sfr-font';
    st.textContent = `@font-face{font-family:"SFR Vazirmatn";src:url("${cfg.fontUrl}") format("woff2");font-weight:100 900;font-display:swap;}`;
    document.head.appendChild(st);
  }

  function ensureHost() {
    if (host) return;
    injectFont();
    host = document.createElement('div');
    host.id = 'roadmap-lens-host';
    host.style.cssText = 'all:initial;position:fixed;top:0;left:0;width:0;height:0;z-index:2147483000;';
    shadow = host.attachShadow({ mode: 'open' });
    const css = document.createElement('style');
    css.textContent = SFR.CSS || '';
    shadow.appendChild(css);
    const launcher = document.createElement('button');
    launcher.className = 'launcher';
    launcher.setAttribute('dir', 'rtl');
    launcher.innerHTML = `${SFR.icon('sparkles', 16)}<span>${onDashboard ? 'داشبورد تمیز' : 'نمای تمیز'}</span><kbd>Alt+L</kbd>`;
    launcher.addEventListener('click', () => SFR.open());
    shadow.appendChild(launcher);
    // Keep Jira's global keyboard shortcuts from firing while typing inside the lens.
    ['keydown', 'keypress', 'keyup'].forEach((t) => host.addEventListener(t, (e) => open && e.stopPropagation()));
    document.documentElement.appendChild(host);
  }

  const targetBoard = () => (onBoard && cfg.boards.includes(boardParam) ? boardParam : cfg.boards[0]);

  SFR.open = async (tab) => {
    if (open) return;
    open = true;
    ensureHost();
    shadow.querySelector('.launcher').hidden = true;
    document.documentElement.style.overflow = 'hidden';
    SFR.mount(shadow);
    if (tab) SFR.state.ui.tab = tab;
    if (!SFR.state.cfg || SFR.state.boardId !== targetBoard()) await SFR.load(targetBoard());
    else SFR.render();
    if (onDashboard && !tab) {
      SFR.state.ui.tab = 'dashboard';
      SFR.render();
    }
    SFR.store.set('lastOpen', true);
  };

  SFR.close = () => {
    if (!open) return;
    open = false;
    SFR.unmount();
    document.documentElement.style.overflow = '';
    shadow.querySelector('.launcher').hidden = false;
    SFR.store.set('lastOpen', false);
  };

  document.addEventListener(
    'keydown',
    (e) => {
      if (e.altKey && (e.code === 'KeyL' || e.key === 'l')) {
        e.preventDefault();
        open ? SFR.close() : SFR.open();
      }
    },
    true
  );

  // The extension tells us when a newer version has been downloaded in the background.
  document.addEventListener('roadmap-lens:updated', (e) => {
    if (String(e.detail?.build) === String(SFR.BUILD)) return;
    SFR.toast(`نسخه‌ی تازه‌ی نمای تمیز (${SFR.fa(e.detail?.build ?? '')}) دریافت شد.`, 'info', { label: 'تازه‌سازی صفحه', run: () => location.reload() });
  });

  (async () => {
    ensureHost();
    const lastOpen = await SFR.store.get('lastOpen', true);
    if (onBoard && cfg.autoOpen && lastOpen) SFR.open();
  })();
})();

}
