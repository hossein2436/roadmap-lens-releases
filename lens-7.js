/* Roadmap Lens 2.7 — built 2026-10-24T10:17:17.492Z */
if (!(globalThis.SFR && globalThis.SFR.booted)) {
globalThis.SFR = { BUILD: 7, VERSION: "2.7", CSS: "/* ==========================================================================\n   Roadmap Lens — design system «نقشه‌راه»\n   Persian-first, RTL-native. Tokens → atoms → layout → views.\n   Type scale (6): 12 · 13 · 14 · 16 · 20 · 48   |  Spacing: 4px grid\n   Radius: control 8 · card 12 · panel 16          |  Motion: 160–240ms\n   Data marks use the validated status palette (--s-*); text never wears it.\n   ========================================================================== */\n\n:host { all: initial; }\n\n/* ---------- tokens ---------- */\n.app, .launcher {\n  --font: \"SFR Vazirmatn\", Vazirmatn, Tahoma, system-ui, sans-serif;\n  --fs-xs: 12px; --fs-sm: 13px; --fs-md: 14px; --fs-lg: 16px; --fs-xl: 20px; --fs-hero: 48px;\n  --r-control: 8px; --r-card: 12px; --r-panel: 16px; --r-pill: 999px;\n  --ease: cubic-bezier(.2, 0, 0, 1); --t-fast: 160ms; --t: 220ms;\n\n  --bg: #f6f5f2;\n  --surface: #fcfcfb;\n  --surface-2: #f1f0ec;\n  --surface-3: #e8e6e0;\n  --ink: #141413;\n  --ink-2: #52514e;\n  --ink-3: #6b6a64;\n  --line: rgba(11, 11, 11, .09);\n  --line-2: rgba(11, 11, 11, .16);\n  --grid: #e1e0d9;\n  --baseline: #c3c2b7;\n  --primary: #141413; --primary-ink: #fcfcfb;\n  --accent: #2a78d6; --accent-soft: rgba(42, 120, 214, .10); --accent-ink: #1c5cab;\n  --brand: #ef0d8a;\n  --danger: #d03b3b; --danger-soft: rgba(208, 59, 59, .10);\n  --ok-ink: #006300;\n  --focus: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent);\n  --shadow-card: 0 1px 2px rgba(20, 20, 19, .05);\n  --shadow-lift: 0 2px 4px rgba(20, 20, 19, .06), 0 8px 24px rgba(20, 20, 19, .08);\n  --shadow-overlay: 0 24px 64px -16px rgba(20, 20, 19, .28), 0 2px 8px rgba(20, 20, 19, .08);\n  --scrim: rgba(20, 20, 19, .28);\n\n  /* status palette — validated (light): CVD ΔE ≥ 9.6, normal-vision ΔE ≥ 15.6 adjacent */\n  --s-done: #008300; --s-devdone: #1baf7a; --s-progress: #2a78d6;\n  --s-pending: #eda100; --s-todo: #6250d6; --s-canceled: #e34948;\n  --s-cat1: #2a78d6;\n}\n.app[data-theme=\"dark\"], .launcher.dark {\n  --bg: #0f0f0e;\n  --surface: #1a1a19;\n  --surface-2: #232321;\n  --surface-3: #2d2d2a;\n  --ink: #f0efec;\n  --ink-2: #c3c2b7;\n  --ink-3: #9d9b92;\n  --line: rgba(255, 255, 255, .09);\n  --line-2: rgba(255, 255, 255, .16);\n  --grid: #2c2c2a;\n  --baseline: #383835;\n  --primary: #f0efec; --primary-ink: #141413;\n  --accent: #3987e5; --accent-soft: rgba(57, 135, 229, .16); --accent-ink: #86b6ef;\n  --danger: #e66767; --danger-soft: rgba(230, 103, 103, .14);\n  --ok-ink: #0ca30c;\n  --shadow-card: none;\n  --shadow-lift: 0 0 0 1px rgba(255, 255, 255, .06), 0 8px 24px rgba(0, 0, 0, .4);\n  --shadow-overlay: 0 24px 64px -12px rgba(0, 0, 0, .7), 0 0 0 1px rgba(255, 255, 255, .06);\n  --scrim: rgba(0, 0, 0, .5);\n  /* dark steps — validated as a set against #1a1a19 */\n  --s-done: #008300; --s-devdone: #1baf7a; --s-progress: #3987e5;\n  --s-pending: #c98500; --s-todo: #9085e9; --s-canceled: #e66767;\n  --s-cat1: #3987e5;\n}\n\n/* ---------- base ---------- */\n.app {\n  position: fixed; inset: 0;\n  display: grid; grid-template-rows: 56px 1fr;\n  background: var(--bg); color: var(--ink);\n  font: 400 var(--fs-md)/1.7 var(--font);\n  letter-spacing: 0;\n  -webkit-font-smoothing: antialiased;\n  color-scheme: light;\n  direction: rtl; text-align: start;\n  animation: app-in var(--t) var(--ease);\n}\n.app[data-theme=\"dark\"] { color-scheme: dark; }\n@keyframes app-in { from { opacity: 0; transform: scale(.995); } }\n.app *, .app *::before, .app *::after { box-sizing: border-box; }\n:where(.app) button, :where(.app) input, :where(.app) select, :where(.app) textarea { font: inherit; color: inherit; letter-spacing: 0; }\n:where(.app) button { cursor: pointer; background: none; border: 0; padding: 0; }\n.app :focus-visible { outline: none; box-shadow: var(--focus); border-radius: var(--r-control); }\n.app [hidden] { display: none !important; }\n:where(.app) a { color: var(--accent-ink); text-decoration: none; }\n:where(.app) a:hover { text-decoration: underline; }\n:where(.app) :where(h1, h2, h3, h4, p, ul, ol, dl, dd) { margin: 0; padding: 0; }\n:where(.app) :where(ul, ol) { list-style: none; }\n.grow { flex: 1 1 auto; }\n.muted { color: var(--ink-3); }\n.center { display: flex; justify-content: center; }\n.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }\n.ic { flex: none; display: inline-block; vertical-align: middle; stroke-width: 1.75; }\n.flip-x { transform: scaleX(-1); }\n.flip-y { transform: scaleY(-1); }\n.spin { animation: spin 1s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\nkbd {\n  font: 500 11px/1 var(--font); color: var(--ink-3);\n  border: 1px solid var(--line-2); border-bottom-width: 2px; border-radius: 4px; padding: 2px 4px;\n  background: var(--surface);\n}\nbdi.key { font: 500 var(--fs-xs)/1 ui-monospace, \"SF Mono\", Menlo, monospace; color: var(--ink-3); unicode-bidi: isolate; }\n.app ::-webkit-scrollbar { width: 10px; height: 10px; }\n.app ::-webkit-scrollbar-thumb { background: var(--surface-3); border-radius: 10px; border: 2px solid transparent; background-clip: content-box; }\n.app ::-webkit-scrollbar-thumb:hover { background-color: var(--line-2); }\n\n/* ---------- atoms: buttons ---------- */\n.btn {\n  display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px;\n  border-radius: var(--r-control); font-weight: 600; font-size: var(--fs-sm); white-space: nowrap;\n  transition: background var(--t-fast) var(--ease), transform var(--t-fast) var(--ease), border-color var(--t-fast);\n}\n.btn:active { transform: scale(.98); }\n.btn-primary { background: var(--primary); color: var(--primary-ink); }\n.btn-primary:hover { opacity: .9; }\n.btn-outline { border: 1px solid var(--line-2); background: var(--surface); }\n.btn-outline:hover, .btn-ghost:hover { background: var(--surface-2); }\n.btn-outline.is-active { border-color: var(--accent); background: var(--accent-soft); color: var(--accent-ink); }\n.btn-ghost { color: var(--ink-2); }\n.btn-ghost.is-active { color: var(--ink); background: var(--surface-2); }\n.btn-soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }\n.btn-soft.is-active .ic { color: var(--ok-ink); }\n.btn-sm { height: 32px; padding: 0 10px; }\n.btn-xs { height: 28px; padding: 0 8px; font-size: var(--fs-xs); }\n.btn.is-busy { opacity: .6; pointer-events: none; }\n.icon-btn {\n  display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: var(--r-control); color: var(--ink-2);\n  transition: background var(--t-fast);\n}\n.icon-btn:hover { background: var(--surface-2); color: var(--ink); text-decoration: none; }\n.icon-btn.is-busy .ic { animation: spin 1s linear infinite; }\n.link { color: var(--accent-ink); font-weight: 600; font-size: var(--fs-sm); }\n.link:hover { text-decoration: underline; }\n\n/* ---------- atoms: chips, pills, counts, tags ---------- */\n.chip {\n  display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 12px;\n  border-radius: var(--r-pill); border: 1px solid var(--line); background: var(--surface);\n  font-size: var(--fs-sm); font-weight: 500; color: var(--ink-2); white-space: nowrap;\n  transition: all var(--t-fast) var(--ease);\n}\n.chip:hover { border-color: var(--line-2); color: var(--ink); }\n.chip.is-on { background: var(--ink); border-color: var(--ink); color: var(--surface); }\n.chip.is-on .av { box-shadow: 0 0 0 1.5px var(--ink); }\n.chip-sm { height: 28px; padding: 0 10px; font-size: var(--fs-xs); }\n.count {\n  display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 6px;\n  border-radius: var(--r-pill); background: var(--surface-2); color: var(--ink-2);\n  font-size: var(--fs-xs); font-weight: 600; line-height: 1;\n}\n.btn-outline.is-active .count, .chip.is-on .count { background: var(--accent); color: #fff; }\n.pill {\n  display: inline-flex; align-items: center; gap: 6px; height: 22px; padding: 0 8px;\n  border-radius: var(--r-pill); font-size: var(--fs-xs); font-weight: 600; color: var(--ink-2); white-space: nowrap;\n  background: var(--surface-2);\n}\n.pill .dot { width: 8px; height: 8px; border-radius: 50%; flex: none; }\n.pill-done .dot { background: var(--s-done); } .pill-devdone .dot { background: var(--s-devdone); }\n.pill-progress .dot { background: var(--s-progress); } .pill-pending .dot { background: var(--s-pending); }\n.pill-todo .dot { background: var(--s-todo); } .pill-canceled .dot { background: var(--s-canceled); }\n.pill-done { background: color-mix(in srgb, var(--s-done) 11%, transparent); }\n.pill-devdone { background: color-mix(in srgb, var(--s-devdone) 13%, transparent); }\n.pill-progress { background: color-mix(in srgb, var(--s-progress) 11%, transparent); }\n.pill-pending { background: color-mix(in srgb, var(--s-pending) 15%, transparent); }\n.pill-todo { background: color-mix(in srgb, var(--s-todo) 10%, transparent); }\n.pill-canceled { background: color-mix(in srgb, var(--s-canceled) 10%, transparent); }\n.pill-late { background: var(--danger-soft); color: var(--danger); gap: 4px; }\n.pill-plain { background: var(--surface-2); }\n.tag {\n  display: inline-flex; align-items: center; gap: 4px; height: 22px; padding: 0 8px; border-radius: 6px;\n  background: var(--surface-2); color: var(--ink-2); font-size: var(--fs-xs); font-weight: 500; margin-inline-end: 4px;\n}\n.size {\n  display: inline-grid; place-items: center; height: 20px; min-width: 24px; padding: 0 6px; border-radius: 6px;\n  border: 1px solid var(--line-2); font: 600 11px/1 var(--font); color: var(--ink-2); direction: ltr;\n}\n\n/* ---------- atoms: avatars ---------- */\n.av {\n  display: inline-grid; place-items: center; flex: none; border-radius: 50%; object-fit: cover;\n  background: var(--surface-3); color: var(--ink-2); font-weight: 700; overflow: hidden;\n  box-shadow: 0 0 0 1.5px var(--surface);\n}\n.av-xs { width: 20px; height: 20px; font-size: 9px; }\n.av-sm { width: 28px; height: 28px; font-size: 11px; }\n.av-md { width: 32px; height: 32px; font-size: 12px; }\n.av-empty { background: var(--surface-2); color: var(--ink-3); }\n\n/* ---------- atoms: inputs ---------- */\n.search {\n  display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 12px; min-width: 300px;\n  border: 1px solid var(--line-2); border-radius: var(--r-control); background: var(--surface); color: var(--ink-3);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.search input { flex: 1; min-width: 0; border: 0; outline: 0; background: none; color: var(--ink); font-size: var(--fs-sm); }\n.search input::placeholder { color: var(--ink-3); }\n.search input:focus-visible { box-shadow: none; }\n.search.sm { height: 32px; min-width: 0; margin: 0 16px 8px; }\n.select {\n  position: relative; display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 10px;\n  border: 1px solid var(--line-2); border-radius: var(--r-control); background: var(--surface); color: var(--ink-3);\n}\n.select select { appearance: none; border: 0; outline: 0; background: none; color: var(--ink); font-size: var(--fs-sm); padding-inline-end: 4px; max-width: 260px; cursor: pointer; }\n.select:focus-within { border-color: var(--accent); }\n\n/* segmented switch */\n.switch { display: inline-flex; padding: 3px; gap: 2px; border-radius: 10px; background: var(--surface-2); border: 1px solid var(--line); }\n.switch button {\n  display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px; border-radius: 7px;\n  font-size: var(--fs-sm); font-weight: 500; color: var(--ink-2); white-space: nowrap; transition: all var(--t-fast);\n}\n.switch button:hover { color: var(--ink); }\n.switch button[aria-selected=\"true\"] { background: var(--surface); color: var(--ink); font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,.08), 0 0 0 1px var(--line); }\n.switch.big button { height: 34px; padding: 0 14px; }\n\n/* ---------- top bar ---------- */\n.topbar {\n  display: flex; align-items: center; gap: 24px; padding: 0 20px;\n  background: var(--surface); border-bottom: 1px solid var(--line);\n}\n.brand { display: flex; align-items: center; gap: 10px; min-width: 0; }\n.logo {\n  display: grid; place-items: center; width: 32px; height: 32px; border-radius: 9px;\n  background: var(--ink); color: var(--surface); position: relative;\n}\n.logo::after { content: \"\"; position: absolute; inset-block-start: -2px; inset-inline-start: -2px; width: 10px; height: 10px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 2px var(--surface); }\n.brand-text { display: grid; line-height: 1.3; }\n.brand-text b { font-size: var(--fs-md); font-weight: 700; }\n.brand-text small { font-size: var(--fs-xs); color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px; }\n.tabs { display: flex; gap: 4px; align-self: stretch; }\n.tabs button {\n  position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 0 14px;\n  font-weight: 500; color: var(--ink-2); transition: color var(--t-fast);\n}\n.tabs button:hover { color: var(--ink); }\n.tabs button[aria-selected=\"true\"] { color: var(--ink); font-weight: 700; }\n.tabs button[aria-selected=\"true\"]::after {\n  content: \"\"; position: absolute; inset-inline: 10px; bottom: -1px; height: 2px; border-radius: 2px 2px 0 0; background: var(--ink);\n}\n.badge {\n  display: inline-grid; place-items: center; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px;\n  background: var(--brand); color: #fff; font-size: 11px; font-weight: 700; line-height: 1;\n}\n.top-actions { display: flex; align-items: center; gap: 4px; margin-inline-start: auto; }\n.sync { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); margin-inline-end: 8px; }\n.me { margin-inline-start: 8px; display: inline-flex; }\n\n/* ---------- main & state ---------- */\n.main { position: relative; min-height: 0; overflow: hidden; }\n.view { height: 100%; min-height: 0; }\n.view[data-view=\"board\"] { display: flex; flex-direction: column; }\n.view[data-view=\"following\"], .view[data-view=\"dashboard\"] { overflow-y: auto; }\n.state-screen { height: 100%; padding-top: 72px; }\n.state-screen .kanban { padding-top: 0; }\n\n/* ---------- board toolbar ---------- */\n.toolbar { padding: 16px 20px 12px; display: grid; gap: 12px; }\n.tb-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.seg-group { display: flex; gap: 6px; flex-wrap: wrap; }\n.facepile { display: flex; align-items: center; }\n.face { margin-inline-start: -6px; border-radius: 50%; transition: transform var(--t-fast) var(--ease); }\n.face:first-child { margin-inline-start: 0; }\n.face:hover { transform: translateY(-2px); z-index: 1; }\n.face.is-on .av { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent); }\n.face.more { display: grid; place-items: center; width: 32px; height: 32px; background: var(--surface-2); border: 1px dashed var(--line-2); color: var(--ink-2); margin-inline-start: 4px; }\n.status-filter { display: flex; gap: 4px; flex-wrap: wrap; }\n.sf {\n  display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px; border-radius: var(--r-pill);\n  font-size: var(--fs-sm); color: var(--ink-2); border: 1px solid transparent; transition: all var(--t-fast);\n}\n.sf .dot { width: 8px; height: 8px; border-radius: 50%; }\n.sf b { font-weight: 600; color: var(--ink-3); font-size: var(--fs-xs); }\n.sf:hover { background: var(--surface-2); }\n.sf.is-on { background: var(--surface); border-color: var(--line-2); color: var(--ink); font-weight: 600; box-shadow: var(--shadow-card); }\n.sf-done .dot { background: var(--s-done); } .sf-devdone .dot { background: var(--s-devdone); } .sf-progress .dot { background: var(--s-progress); }\n.sf-pending .dot { background: var(--s-pending); } .sf-todo .dot { background: var(--s-todo); } .sf-canceled .dot { background: var(--s-canceled); }\n.active-chips { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding-inline-start: 12px; border-inline-start: 1px solid var(--line); }\n.active-chips .chip { height: 28px; padding: 0 10px; font-size: var(--fs-xs); }\n.result-count { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--ink-3); }\n\n/* ---------- kanban ---------- */\n.kanban {\n  flex: 1; min-height: 0; display: flex; gap: 12px; padding: 4px 20px 20px; overflow-x: auto; overflow-y: hidden;\n  scroll-snap-type: x proximity; overscroll-behavior-x: contain;\n}\n.column {\n  flex: 0 0 296px; width: 296px; min-width: 0; display: flex; flex-direction: column; min-height: 0; max-height: 100%;\n  background: var(--surface-2); border-radius: var(--r-panel); border: 1px solid transparent;\n  scroll-snap-align: start; transition: border-color var(--t-fast), background var(--t-fast);\n}\n.column.is-backlog { flex-basis: 312px; width: 312px; }\n.column.is-current { background: color-mix(in srgb, var(--accent) 6%, var(--surface-2)); border-color: color-mix(in srgb, var(--accent) 22%, transparent); }\n.column.is-over { border-color: var(--accent); border-style: dashed; background: var(--accent-soft); }\n.column.rail {\n  flex: 0 0 48px; align-items: center; gap: 12px; padding: 16px 0; color: var(--ink-2); cursor: pointer;\n}\n.column.rail span { writing-mode: vertical-rl; font-weight: 700; }\n.column.rail b { font-size: var(--fs-xs); color: var(--ink-3); }\n.column.rail:hover { background: var(--surface-3); }\n.col-head { padding: 12px 14px 10px; display: grid; gap: 8px; }\n.col-title { display: flex; align-items: baseline; gap: 8px; }\n.col-title b { font-size: var(--fs-lg); font-weight: 700; line-height: 1.3; }\n.col-title small { font-size: var(--fs-xs); color: var(--ink-3); }\n.now { font-size: 11px; font-weight: 700; color: var(--accent-ink); background: var(--accent-soft); padding: 1px 8px; border-radius: var(--r-pill); align-self: center; }\n.col-dist { display: flex; gap: 2px; height: 6px; border-radius: 3px; overflow: hidden; }\n.col-dist i { display: block; height: 100%; min-width: 2px; }\n.col-dist.is-none { background: var(--surface-3); }\n.col-done { font-size: var(--fs-xs); color: var(--ink-3); line-height: 1; }\n.col-body { flex: 1; min-height: 0; overflow-y: auto; padding: 2px 8px 10px; display: grid; grid-template-columns: minmax(0, 1fr); align-content: start; gap: 8px; }\n.col-empty { display: grid; justify-items: center; gap: 4px; padding: 24px 0; color: var(--ink-3); font-size: var(--fs-sm); }\n.more {\n  width: 100%; height: 36px; border-radius: var(--r-control); border: 1px dashed var(--line-2);\n  color: var(--ink-2); font-size: var(--fs-xs); font-weight: 600;\n}\n.more:hover { background: var(--surface); color: var(--ink); }\n\n/* card */\n.card {\n  position: relative; display: grid; grid-template-columns: minmax(0, 1fr); min-width: 0; gap: 8px; padding: 12px; border-radius: var(--r-card);\n  background: var(--surface); border: 1px solid var(--line); box-shadow: var(--shadow-card);\n  cursor: pointer; transition: box-shadow var(--t-fast) var(--ease), transform var(--t-fast) var(--ease), border-color var(--t-fast);\n}\n@keyframes card-in { from { opacity: 0; transform: translateY(10px) scale(.985); } }\n.card:hover { box-shadow: var(--shadow-lift); border-color: var(--line-2); transform: translateY(-1px); }\n.card.is-dragging { opacity: .4; transform: rotate(-1.5deg); }\n.card.st-canceled .card-title { color: var(--ink-3); text-decoration: line-through; text-decoration-color: var(--line-2); }\n.card.st-done { background: color-mix(in srgb, var(--s-done) 3%, var(--surface)); }\n.card-top { display: flex; align-items: center; gap: 6px; min-height: 24px; }\n.card-title {\n  font-size: var(--fs-md); font-weight: 600; line-height: 1.65; color: var(--ink);\n  unicode-bidi: plaintext; text-align: start;\n  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;\n}\n.card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: -2px; }\n.card-tags bdi { display: inline-block; max-width: 100%; height: 20px; padding: 0 6px; border-radius: 5px; background: var(--surface-2); color: var(--ink-2); font-size: 11px; font-weight: 500; line-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.card-epic {\n  display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); line-height: 1.5;\n  unicode-bidi: plaintext;\n}\n.card-epic span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.card-foot { display: flex; align-items: center; gap: 6px; padding-top: 8px; border-top: 1px solid var(--line); font-size: var(--fs-xs); color: var(--ink-2); }\n.owner { max-width: 110px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.meta { display: inline-flex; align-items: center; gap: 4px; color: var(--ink-3); font-weight: 500; }\n.meta.is-new { color: var(--ink); font-weight: 700; }\n.star { display: inline-grid; place-items: center; width: 28px; height: 28px; margin: -4px; border-radius: 8px; color: var(--ink-3); opacity: 0; transition: all var(--t-fast); }\n.card:hover .star, .card:focus-within .star, .star.is-on, tr:hover .star, .inbox-item .star { opacity: 1; }\n.star:hover { background: var(--surface-2); color: var(--ink); }\n.star.is-on { color: #e4a400; }\n.star.is-on .ic { fill: currentColor; }\n.news-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 20%, transparent); flex: none; }\n.card.has-news { border-color: color-mix(in srgb, var(--brand) 35%, var(--line)); }\n\n/* skeletons */\n.skel { pointer-events: none; animation: none; }\n.skel i, .skel-line, .skel-block { display: block; height: 12px; border-radius: 6px; background: linear-gradient(90deg, var(--surface-2), var(--surface-3), var(--surface-2)); background-size: 200% 100%; animation: shimmer 1.4s infinite; }\n.skel i.short { width: 55%; }\n.skel-line { width: 60%; height: 16px; }\n.skel-block { height: 56px; border-radius: 10px; margin-bottom: 8px; }\n@keyframes shimmer { to { background-position: -200% 0; } }\n\n/* ---------- table ---------- */\n.table-wrap { flex: 1; min-height: 0; overflow: auto; margin: 0 20px 20px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel); }\n.grid-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-sm); }\n.grid-table th { position: sticky; top: 0; z-index: 1; background: var(--surface); text-align: start; border-bottom: 1px solid var(--line-2); padding: 0; }\n.grid-table th button { display: flex; align-items: center; gap: 4px; width: 100%; height: 40px; padding: 0 12px; font-weight: 600; color: var(--ink-2); font-size: var(--fs-xs); }\n.grid-table th[aria-sort=\"ascending\"] button, .grid-table th[aria-sort=\"descending\"] button { color: var(--ink); }\n.grid-table td { padding: 10px 12px; border-bottom: 1px solid var(--line); vertical-align: middle; white-space: nowrap; }\n.grid-table td.t-title { white-space: normal; min-width: 320px; max-width: 520px; font-weight: 500; unicode-bidi: plaintext; text-align: start; }\n.grid-table tbody tr { cursor: pointer; transition: background var(--t-fast); }\n.grid-table tbody tr:hover { background: var(--surface-2); }\n.grid-table tr.has-news td:first-child { box-shadow: inset -3px 0 0 var(--brand); }\n.num { font-variant-numeric: tabular-nums; }\n.who { display: inline-flex; align-items: center; gap: 6px; }\n\n/* ---------- popover ---------- */\n.popover {\n  position: fixed; z-index: 30; display: flex; flex-direction: column; width: 360px; max-height: min(72vh, 640px);\n  background: var(--surface); border: 1px solid var(--line-2); border-radius: var(--r-panel); box-shadow: var(--shadow-overlay);\n  animation: pop-in var(--t-fast) var(--ease);\n}\n.popover.pop-filters { width: 560px; }\n@keyframes pop-in { from { opacity: 0; transform: translateY(-4px) scale(.99); } }\n.pop-head { display: flex; align-items: baseline; gap: 12px; padding: 16px 16px 10px; }\n.pop-head b { font-size: var(--fs-lg); }\n.pop-head .muted { font-size: var(--fs-xs); }\n.pop-body { overflow-y: auto; padding: 0 16px 12px; display: grid; gap: 16px; }\n.pop-foot { display: flex; justify-content: space-between; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--line); }\n.fgroup h4 { display: flex; align-items: center; gap: 6px; font-size: var(--fs-xs); font-weight: 700; color: var(--ink-3); margin-bottom: 8px; }\n.fgroup h4 small { color: var(--accent-ink); }\n.fgroup .chips { display: flex; flex-wrap: wrap; gap: 6px; }\n.pop-body.people { gap: 2px; }\n.person {\n  display: flex; align-items: center; gap: 10px; width: 100%; padding: 6px 8px; border-radius: var(--r-control);\n  text-align: start; font-size: var(--fs-sm);\n}\n.person span { flex: 1; }\n.person b, .person small { font-size: var(--fs-xs); color: var(--ink-3); font-weight: 500; }\n.person:hover, .person.is-on { background: var(--surface-2); }\n.person.is-on span { font-weight: 700; }\n\n/* ---------- drawer & sheet ---------- */\n.drawer, .sheet { position: fixed; inset: 0; z-index: 20; pointer-events: none; }\n.scrim { position: absolute; inset: 0; background: var(--scrim); opacity: 0; transition: opacity var(--t) var(--ease); }\n.drawer-panel, .sheet-panel {\n  position: absolute; inset-block: 0; inset-inline-end: 0; width: min(640px, 100vw);\n  display: flex; flex-direction: column; background: var(--surface); box-shadow: var(--shadow-overlay);\n  transform: translateX(-104%); transition: transform 260ms var(--ease);\n  border-start-end-radius: 0; border-end-end-radius: 0;\n}\n.sheet-panel { width: min(520px, 100vw); }\n.drawer.is-open, .sheet.is-open { pointer-events: auto; }\n.drawer.is-open .scrim, .sheet.is-open .scrim { opacity: 1; }\n.drawer.is-open .drawer-panel, .sheet.is-open .sheet-panel { transform: none; }\n.d-head { display: flex; align-items: center; gap: 4px; height: 56px; padding: 0 16px; border-bottom: 1px solid var(--line); flex: none; }\n.d-head bdi.key { font-size: var(--fs-sm); margin-inline-end: 8px; }\n.d-head > b { font-size: var(--fs-lg); margin-inline-end: 8px; }\n.d-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 24px; }\n.d-scroll > * { flex: none; }\n.d-hero { display: grid; gap: 12px; }\n.d-badges { display: flex; gap: 6px; flex-wrap: wrap; }\n.d-hero h2 { font-size: var(--fs-xl); font-weight: 700; line-height: 1.6; unicode-bidi: plaintext; text-align: start; }\n.follow-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n.watchers { display: flex; align-items: center; font-size: var(--fs-xs); }\n.watchers .av { margin-inline-start: -6px; }\n.watchers .av:first-child { margin-inline-start: 0; }\n.watchers .muted { margin-inline-start: 8px; }\n.facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--r-card); overflow: hidden; }\n.fact { background: var(--surface); padding: 10px 12px; display: grid; gap: 2px; min-width: 0; }\n.fact:last-child:nth-child(odd) { grid-column: 1 / -1; }\n.fact dt { font-size: var(--fs-xs); color: var(--ink-3); }\n.fact dd { font-size: var(--fs-sm); font-weight: 500; overflow-wrap: anywhere; }\n.fact .select { width: 100%; margin-top: 2px; }\n.fact .select select { flex: 1; max-width: none; }\n.d-section { display: grid; gap: 12px; }\n.d-section h3 { display: flex; align-items: center; gap: 8px; font-size: var(--fs-lg); font-weight: 700; }\n.rich { font-size: var(--fs-md); line-height: 1.85; color: var(--ink); overflow-wrap: anywhere; }\n.rich p, .rich li { unicode-bidi: plaintext; text-align: start; }\n.rich p + p { margin-top: 8px; }\n.rich ul, .rich ol { padding-inline-start: 20px; list-style: revert; }\n.rich img { max-width: 100%; height: auto; border-radius: 8px; }\n.rich pre, .rich code { font-family: ui-monospace, Menlo, monospace; font-size: 12px; background: var(--surface-2); border-radius: 6px; padding: 2px 4px; direction: ltr; unicode-bidi: isolate; }\n.rich pre { padding: 8px; overflow-x: auto; }\n.rich table { border-collapse: collapse; font-size: var(--fs-sm); }\n.rich th, .rich td { border: 1px solid var(--line-2); padding: 4px 8px; }\n.rich blockquote { border-inline-start: 3px solid var(--line-2); padding-inline-start: 12px; color: var(--ink-2); margin: 0; }\n.rich.clamp { max-height: 168px; overflow: hidden; mask-image: linear-gradient(#000 60%, transparent); }\n.thread { display: grid; gap: 16px; }\n.comment { display: flex; gap: 10px; align-items: flex-start; }\n.bubble { flex: 1; min-width: 0; background: var(--surface-2); border-radius: 4px var(--r-card) var(--r-card) var(--r-card); padding: 10px 14px; }\n.comment.is-mine .bubble { background: color-mix(in srgb, var(--accent) 7%, var(--surface)); border: 1px solid color-mix(in srgb, var(--accent) 16%, transparent); }\n.c-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: 2px; font-size: var(--fs-xs); }\n.c-head b { font-size: var(--fs-sm); }\n.c-head time { color: var(--ink-3); }\n\n/* composer */\n.composer { flex: none; display: grid; gap: 8px; padding: 12px 16px 16px; border-top: 1px solid var(--line); background: var(--surface); }\n.templates { display: flex; gap: 6px; flex-wrap: wrap; }\n.field { position: relative; }\n.field textarea {\n  display: block; width: 100%; min-height: 84px; max-height: 240px; resize: vertical; padding: 10px 12px;\n  border-radius: var(--r-card); border: 1px solid var(--line-2); background: var(--surface); outline: 0;\n  font-size: var(--fs-md); line-height: 1.8; unicode-bidi: plaintext;\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }\n.mention-pop {\n  position: absolute; inset-inline-start: 8px; bottom: calc(100% + 6px); width: 300px; padding: 6px;\n  background: var(--surface); border: 1px solid var(--line-2); border-radius: var(--r-card); box-shadow: var(--shadow-overlay); z-index: 2;\n}\n.composer-foot { display: flex; align-items: center; gap: 8px; }\n.hint { display: inline-flex; align-items: center; gap: 4px; font-size: var(--fs-xs); }\n\n/* lists used by sheet / dashboard */\n.mini-list { display: grid; }\n.mini-list li {\n  display: flex; align-items: center; gap: 10px; padding: 10px 4px; border-bottom: 1px solid var(--line); cursor: pointer;\n  font-size: var(--fs-sm); border-radius: 6px;\n}\n.mini-list li:hover { background: var(--surface-2); }\n.mini-list li span[dir] { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; text-align: start; }\n.mini-list li small { color: var(--ink-3); font-size: var(--fs-xs); white-space: nowrap; }\n.mini-list.big { overflow-y: auto; padding: 8px 16px 16px; }\n\n/* ---------- following / inbox ---------- */\n.inbox { max-width: 960px; margin: 0 auto; padding: 28px 20px 48px; display: grid; gap: 20px; }\n.inbox-head { display: flex; align-items: flex-end; gap: 16px; }\n.inbox-head h2 { font-size: var(--fs-xl); font-weight: 800; line-height: 1.4; }\n.inbox-head p { font-size: var(--fs-sm); max-width: 560px; }\n.inbox-list { display: grid; gap: 8px; }\n.inbox-item {\n  position: relative; display: flex; gap: 16px; padding: 14px 16px; border-radius: var(--r-card);\n  background: var(--surface); border: 1px solid var(--line); cursor: pointer; transition: all var(--t-fast);\n}\n.inbox-item:hover { border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.inbox-item.has-news { border-color: color-mix(in srgb, var(--brand) 35%, var(--line)); }\n.inbox-item > .news-dot { position: absolute; inset-inline-start: -4px; top: 20px; }\n.ii-main { flex: 1; min-width: 0; display: grid; gap: 6px; }\n.ii-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.ii-main h3 .tag { font-size: 11px; height: 20px; vertical-align: middle; font-weight: 500; }\n.ii-main h3 { font-size: var(--fs-md); font-weight: 700; line-height: 1.6; unicode-bidi: plaintext; text-align: start; }\n.ii-last { display: flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--ink-2); min-width: 0; }\n.ii-last span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; unicode-bidi: plaintext; }\n.ii-last b { white-space: nowrap; font-weight: 600; }\n.ii-side { display: grid; justify-items: end; align-content: space-between; gap: 6px; font-size: var(--fs-xs); color: var(--ink-3); }\n.inbox .switch { justify-self: start; }\n\n/* empty */\n.empty { display: grid; justify-items: center; gap: 6px; padding: 48px 16px; color: var(--ink-3); text-align: center; }\n.empty b { color: var(--ink); font-size: var(--fs-lg); }\n.empty p { font-size: var(--fs-sm); max-width: 360px; }\n\n/* ---------- dashboard ---------- */\n.dash { max-width: 1400px; margin: 0 auto; padding: 20px 20px 48px; display: grid; gap: 16px; }\n.dash-filters { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: var(--fs-sm); }\n.dash-filters .switch { flex-wrap: wrap; }\n.dash-filters > .muted { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-xs); }\n.loading-note { display: flex; align-items: center; gap: 8px; color: var(--ink-3); }\n.kpis { display: grid; grid-template-columns: minmax(280px, 1fr) 2fr; gap: 12px; }\n.hero {\n  display: grid; gap: 6px; align-content: center; padding: 20px 24px; border-radius: var(--r-panel);\n  background: var(--surface); border: 1px solid var(--line);\n}\n.hero > span { font-size: var(--fs-sm); color: var(--ink-2); font-weight: 600; }\n.hero > b { font-size: var(--fs-hero); font-weight: 800; line-height: 1.15; }\n.hero small { font-size: var(--fs-xs); color: var(--ink-3); }\n.meter { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--s-done) 14%, var(--surface-2)); overflow: hidden; }\n.meter i { display: block; height: 100%; background: var(--s-done); border-radius: 4px; transition: width 600ms var(--ease); }\n.tile-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; }\n.tile {\n  display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 4px 8px; padding: 14px 16px; text-align: start;\n  border-radius: var(--r-panel); background: var(--surface); border: 1px solid var(--line); transition: all var(--t-fast);\n}\n.tile:hover { border-color: var(--line-2); box-shadow: var(--shadow-lift); }\n.tile .ic { color: var(--ink-3); }\n.tile span { font-size: var(--fs-sm); color: var(--ink-2); font-weight: 500; }\n.tile b { grid-column: 1 / -1; font-size: var(--fs-xl); font-weight: 800; line-height: 1.3; }\n.dash-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n.viz-card {\n  display: flex; flex-direction: column; gap: 12px; padding: 16px 18px 18px; min-width: 0;\n  background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-panel);\n}\n.viz-card.wide { grid-column: span 2; }\n.viz-card.tall { grid-row: span 2; }\n.viz-card.full { grid-column: 1 / -1; }\n.viz-body { grid-template-columns: minmax(0, 1fr); }\n.mini-list { grid-template-columns: minmax(0, 1fr); }\n\n/* delayed table */\n.dtable-wrap { overflow-x: auto; margin-inline: -4px; }\n.dtable { width: 100%; border-collapse: separate; border-spacing: 0; font-size: var(--fs-sm); }\n.dtable th { text-align: start; font-size: var(--fs-xs); font-weight: 600; color: var(--ink-3); padding: 0 8px 8px; border-bottom: 1px solid var(--line-2); white-space: nowrap; }\n.dtable td { padding: 10px 8px; border-bottom: 1px solid var(--line); vertical-align: middle; white-space: nowrap; }\n.dtable tbody tr { cursor: pointer; transition: background var(--t-fast); }\n.dtable tbody tr:hover { background: var(--surface-2); }\n.dtable tbody tr:last-child td { border-bottom: 0; }\n.dtable .dt-title { white-space: normal; width: 44%; min-width: 280px; }\n.dtable .dt-title > span { display: block; font-weight: 600; line-height: 1.6; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 560px; }\n.dtable .dt-title small { display: flex; align-items: center; gap: 4px; margin-top: 2px; }\n.dtable .dt-title small .tag { height: 20px; font-size: 11px; margin: 0; }\n.dtable .dt-fn { color: var(--ink-2); max-width: 200px; overflow: hidden; text-overflow: ellipsis; }\n.dtable .tag { margin: 0; }\n.viz-card .more { margin-top: 4px; }\n.viz-card > header { display: flex; align-items: flex-start; gap: 8px; }\n.viz-card > header > div { flex: 1; }\n.viz-card h3 { font-size: var(--fs-lg); font-weight: 700; line-height: 1.4; }\n.viz-card header p { font-size: var(--fs-xs); color: var(--ink-3); }\n.viz-body { flex: 1; min-height: 0; display: grid; gap: 12px; align-content: start; }\n.viz-table { display: none; overflow: auto; max-height: 420px; }\n.viz-card.show-table .viz-table { display: block; }\n.viz-card.show-table .viz-plot, .viz-card.show-table .hbars, .viz-card.show-table .donut-wrap, .viz-card.show-table .legend { display: none; }\n.viz-table table { width: 100%; border-collapse: collapse; font-size: var(--fs-xs); }\n.viz-table th, .viz-table td { padding: 6px 8px; border-bottom: 1px solid var(--line); text-align: start; white-space: nowrap; }\n.viz-table th { color: var(--ink-3); font-weight: 600; position: sticky; top: 0; background: var(--surface); }\n.skel-card { min-height: 280px; background: linear-gradient(90deg, var(--surface), var(--surface-2), var(--surface)); background-size: 200% 100%; animation: shimmer 1.4s infinite; }\n\n/* legend */\n.legend { display: flex; flex-wrap: wrap; gap: 6px 14px; font-size: var(--fs-xs); color: var(--ink-2); }\n.legend-item { display: inline-flex; align-items: center; gap: 6px; }\n.legend-item b { color: var(--ink-3); font-weight: 600; }\n.sw { display: inline-block; width: 10px; height: 10px; border-radius: 3px; flex: none; }\n\n/* stacked columns (HTML) */\n.viz-plot { position: relative; height: 260px; padding-inline-start: 36px; padding-bottom: 40px; }\n.viz-plot.compact { height: 200px; }\n.grid { position: absolute; inset: 0 0 40px 0; inset-inline-start: 36px; pointer-events: none; }\n.grid-line { position: absolute; inset-inline: 0; border-top: 1px solid var(--grid); }\n.grid-line:first-child { border-top-color: var(--baseline); }\n.grid-line span { position: absolute; inset-inline-start: -36px; width: 30px; transform: translateY(-50%); text-align: end; font-size: 11px; color: var(--ink-3); font-variant-numeric: tabular-nums; }\n.cols { position: relative; display: flex; height: 100%; }\n.col { flex: 1; display: flex; flex-direction: column; align-items: center; min-width: 0; height: 100%; }\n.col-plot { position: relative; flex: 1; width: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }\n.col-bar { width: 24px; display: flex; flex-direction: column-reverse; gap: 2px; min-height: 0; transition: height 500ms var(--ease); }\n.col-bar .seg { display: block; width: 100%; min-height: 2px; transition: filter var(--t-fast), opacity var(--t-fast); }\n.col-bar .seg:last-child { border-radius: 4px 4px 0 0; }\n.col-val { font-size: var(--fs-xs); font-weight: 700; color: var(--ink); margin-bottom: 4px; }\n.col-label { position: absolute; top: 100%; inset-inline: 0; height: 40px; padding-top: 6px; display: grid; justify-items: center; align-content: start; line-height: 1.35; font-size: var(--fs-xs); color: var(--ink-2); text-align: center; white-space: nowrap; }\n.col { position: relative; }\n.col-label small { color: var(--ink-3); font-size: 11px; }\n.col.is-current .col-label { color: var(--ink); font-weight: 700; }\n.col.is-current .col-label::before { content: \"\"; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); position: absolute; top: -1px; }\n.cols:hover .seg { opacity: .55; }\n.cols .col:hover .seg { opacity: 1; }\n.seg:hover { filter: brightness(1.08); }\n\n/* donut */\n.donut-wrap { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }\n.donut { width: 168px; height: 168px; flex: none; }\n.donut .arc { cursor: pointer; transition: stroke-width var(--t-fast) var(--ease); outline: none; }\n.donut .arc:hover, .donut .arc:focus { stroke-width: 17; }\n.donut-num { font: 800 22px var(--font); fill: var(--ink); }\n.donut-cap { font: 500 9px var(--font); fill: var(--ink-3); }\n.donut-legend { flex: 1; display: grid; gap: 2px; min-width: 180px; }\n.donut-legend button { display: flex; align-items: center; gap: 8px; width: 100%; padding: 4px 6px; border-radius: 6px; font-size: var(--fs-sm); color: var(--ink-2); }\n.donut-legend button:hover { background: var(--surface-2); color: var(--ink); }\n.donut-legend span { flex: 1; text-align: start; }\n.donut-legend b { color: var(--ink); font-weight: 700; }\n.donut-legend em { font-style: normal; font-size: var(--fs-xs); color: var(--ink-3); min-width: 36px; text-align: end; }\n\n/* horizontal stacked bars */\n.hbars { display: grid; gap: 10px; }\n.hrow { display: grid; grid-template-columns: minmax(96px, 34%) 1fr auto; align-items: center; gap: 10px; }\n.hrow-label { display: flex; align-items: center; gap: 6px; min-width: 0; font-size: var(--fs-sm); color: var(--ink-2); }\n.hrow-label span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.hrow-track { height: 14px; }\n.hrow-bar { display: flex; gap: 2px; height: 100%; min-width: 2px; transition: width 500ms var(--ease); }\n.hrow-bar .seg { height: 100%; min-width: 2px; }\n.hrow-bar .seg:last-child { border-start-end-radius: 0; border-radius: 4px 0 0 4px; }\n.hrow-val { display: grid; justify-items: end; line-height: 1.25; min-width: 64px; }\n.hrow-val b { font-size: var(--fs-sm); }\n.hrow-val small { font-size: 11px; color: var(--ink-3); }\n.hbars:hover .seg { opacity: .55; }\n.hbars .hrow:hover .seg { opacity: 1; }\n\n/* tooltip */\n.tooltip {\n  position: fixed; top: 0; left: 0; z-index: 50; pointer-events: none; max-width: 280px;\n  padding: 8px 10px; border-radius: 10px; background: var(--ink); color: var(--surface);\n  font-size: var(--fs-xs); line-height: 1.6; box-shadow: var(--shadow-overlay); display: grid; gap: 2px;\n}\n.tooltip.is-hint { padding: 4px 8px; }\n.tooltip b { font-size: var(--fs-sm); margin-bottom: 2px; }\n.tt-row { display: flex; align-items: center; gap: 6px; }\n.tt-row i { width: 8px; height: 8px; border-radius: 2px; flex: none; }\n.tt-row em { font-style: normal; font-weight: 700; margin-inline-start: auto; padding-inline-start: 12px; }\n\n/* toasts */\n.toasts { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 60; display: grid; gap: 8px; justify-items: center; }\n.toast {\n  display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 8px 10px 8px 16px; border-radius: 12px;\n  background: var(--ink); color: var(--surface); font-size: var(--fs-sm); box-shadow: var(--shadow-overlay);\n  animation: toast-in var(--t) var(--ease); transition: opacity var(--t), transform var(--t);\n}\n.toast .btn-ghost { color: var(--surface); background: rgba(255,255,255,.12); }\n.toast .btn-ghost:hover { background: rgba(255,255,255,.2); }\n.app[data-theme=\"dark\"] .toast .btn-ghost { color: var(--surface); background: rgba(0,0,0,.08); }\n.toast-error .ic { color: #ff8a80; }\n.toast-ok .ic { color: #5fd38a; }\n.app[data-theme=\"dark\"] .toast-error .ic { color: var(--danger); }\n.app[data-theme=\"dark\"] .toast-ok .ic { color: var(--ok-ink); }\n.toast.out { opacity: 0; transform: translateY(8px); }\n@keyframes toast-in { from { opacity: 0; transform: translateY(8px); } }\n\n/* ---------- launcher (lives outside .app) ---------- */\n.launcher {\n  position: fixed; bottom: 20px; right: 20px; z-index: 2147483000;\n  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px 0 16px; border: 0; border-radius: 999px;\n  background: #141413; color: #fcfcfb; cursor: pointer;\n  font: 600 14px/1 \"SFR Vazirmatn\", Vazirmatn, Tahoma, sans-serif; letter-spacing: 0;\n  box-shadow: 0 8px 24px rgba(20, 20, 19, .28), 0 0 0 1px rgba(255,255,255,.06) inset;\n  transition: transform 160ms cubic-bezier(.2,0,0,1);\n}\n.launcher:hover { transform: translateY(-2px); }\n.launcher:active { transform: scale(.98); }\n.launcher .ic { color: #ef0d8a; }\n.launcher kbd { font: 500 11px/1 \"SFR Vazirmatn\", sans-serif; color: rgba(252,252,251,.6); border: 1px solid rgba(255,255,255,.18); border-radius: 4px; padding: 3px 4px; background: transparent; }\n.launcher[hidden] { display: none; }\n.launcher:focus-visible { outline: 2px solid #3987e5; outline-offset: 2px; }\n\n/* ---------- responsive ---------- */\n@media (max-width: 1180px) {\n  .dash-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .kpis { grid-template-columns: 1fr; }\n}\n@media (max-width: 860px) {\n  .tabs button { padding: 0 8px; }\n  .brand-text, .top-actions .btn span, .sync { display: none; }\n  .dash-grid { grid-template-columns: 1fr; }\n  .viz-card.wide { grid-column: auto; }\n  .tile-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .search { min-width: 0; flex: 1 1 100%; }\n  .facts { grid-template-columns: 1fr; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .app *, .app *::before, .app *::after { animation: none !important; transition: none !important; }\n}\n@media (forced-colors: active) {\n  .seg, .sw, .col-dist i, .pill .dot { forced-color-adjust: none; }\n}\n\n/* ==========================================================================\n   Colour layer — «شاداب»\n   Snappfood pink as the accent, seasonal column headers, t-shirt-size scale,\n   status stripe on cards, warm canvas. Status colours (--s-*) stay untouched.\n   ========================================================================== */\n.app {\n  --accent: #d40c78; --accent-soft: rgba(212, 12, 120, .09); --accent-ink: #b80c69;\n  --brand-2: #ff7a3d;\n  --bg: #f7f4f2;\n  /* t-shirt sizes: six distinct hues (validated for colour-blind separation between neighbours) + ascending bars.\n     --sz-* are chart marks; --sz-*-bg / -fg are the filled chip and its readable text. */\n  --sz-xs: #1baf7a; --sz-s: #2a78d6; --sz-m: #eda100; --sz-l: #e87ba4; --sz-xl: #6250d6; --sz-xxl: #eb6834; --sz-na: var(--surface-3);\n  --sz-xs-bg: #1baf7a; --sz-xs-fg: #06150f;\n  --sz-s-bg: #256abf;  --sz-s-fg: #ffffff;\n  --sz-m-bg: #eda100;  --sz-m-fg: #1c1400;\n  --sz-l-bg: #e87ba4;  --sz-l-fg: #2b0a18;\n  --sz-xl-bg: #6250d6; --sz-xl-fg: #ffffff;\n  --sz-xxl-bg: #eb6834; --sz-xxl-fg: #200a02;\n  --s-cat3: #1baf7a; --on-accent: #ffffff;\n  /* heat-map ramp (one blue hue, light → dark = little → much) */\n  --hm1: #cde2fb; --hm2: #9ec5f4; --hm3: #6da7ec; --hm4: #3987e5; --hm5: #256abf; --hm6: #184f95;\n  --hm-ink-lo: #0d2d57; --hm-ink-hi: #ffffff;\n  /* seasons (Jalali): bar colour + readable label ink */\n  --ss-spring: #23a35a; --ss-spring-ink: #1a7a43;\n  --ss-summer: #f59e0b; --ss-summer-ink: #9a5200;\n  --ss-autumn: #d9622b; --ss-autumn-ink: #a8431c;\n  --ss-winter: #3b82d6; --ss-winter-ink: #2a6fc0;\n}\n.app[data-theme=\"dark\"] {\n  --accent: #f45bab; --accent-soft: rgba(244, 91, 171, .14); --accent-ink: #f9a8d4;\n  --bg: #121011;\n  --sz-xs: #199e70; --sz-s: #3987e5; --sz-m: #c98500; --sz-l: #d55181; --sz-xl: #9085e9; --sz-xxl: #d95926;\n  --sz-xs-bg: #199e70; --sz-xs-fg: #03120c;\n  --sz-s-bg: #3987e5;  --sz-s-fg: #04111f;\n  --sz-m-bg: #c98500;  --sz-m-fg: #170f00;\n  --sz-l-bg: #d55181;  --sz-l-fg: #1f0510;\n  --sz-xl-bg: #9085e9; --sz-xl-fg: #0f0b2b;\n  --sz-xxl-bg: #d95926; --sz-xxl-fg: #1c0801;\n  --s-cat3: #199e70; --on-accent: #1f0412;\n  --hm1: #1b3354; --hm2: #1f4a7d; --hm3: #2a62ad; --hm4: #3987e5; --hm5: #6da7ec; --hm6: #9ec5f4;\n  --hm-ink-lo: #0a1a30; --hm-ink-hi: #dbe9fb;\n  --ss-spring: #34c472; --ss-spring-ink: #7ddca3;\n  --ss-summer: #f7b23b; --ss-summer-ink: #f9c870;\n  --ss-autumn: #ef7a45; --ss-autumn-ink: #f6a37c;\n  --ss-winter: #5b9ae6; --ss-winter-ink: #93bdf0;\n}\n\n/* warm canvas with a soft brand glow at the top */\n.app { background:\n  radial-gradient(1200px 260px at 85% -80px, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%),\n  radial-gradient(900px 220px at 10% -60px, color-mix(in srgb, var(--brand-2) 8%, transparent), transparent 70%),\n  var(--bg); }\n.topbar { position: relative; background: color-mix(in srgb, var(--surface) 88%, transparent); backdrop-filter: blur(8px); }\n.topbar::after { content: \"\"; position: absolute; inset-inline: 0; bottom: -1px; height: 2px; background: linear-gradient(90deg, var(--brand-2), var(--accent) 60%, #8b5cf6); opacity: .85; }\n.logo { background: linear-gradient(135deg, var(--accent), var(--brand-2)); color: #fff; }\n.logo::after { background: #fff; box-shadow: 0 0 0 2px var(--accent); }\n.tabs button[aria-selected=\"true\"]::after { background: var(--accent); height: 3px; }\n.tabs button[aria-selected=\"true\"] .ic { color: var(--accent); }\n\n/* greeting */\n.greet { display: grid; line-height: 1.35; padding-inline-start: 16px; border-inline-start: 1px solid var(--line); }\n.greet b { font-size: var(--fs-sm); font-weight: 700; }\n.greet small { font-size: var(--fs-xs); color: var(--ink-3); }\n\n/* chips & filters: colour instead of black */\n.chip.is-on { background: var(--accent); border-color: var(--accent); color: #fff; }\n.chip.is-on .count { background: #fff; color: var(--accent-ink); }\n.app[data-theme=\"dark\"] .chip.is-on { color: #1f0412; }\n.chip:hover { border-color: color-mix(in srgb, var(--accent) 40%, var(--line)); }\n.btn-primary { background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, var(--brand-2))); color: #fff; }\n.app[data-theme=\"dark\"] .btn-primary { color: #1f0412; }\n.sf.is-on { border-color: currentColor; }\n.sf-done.is-on { color: var(--ok-ink); background: color-mix(in srgb, var(--s-done) 10%, var(--surface)); }\n.sf-devdone.is-on { background: color-mix(in srgb, var(--s-devdone) 12%, var(--surface)); }\n.sf-progress.is-on { background: color-mix(in srgb, var(--s-progress) 10%, var(--surface)); }\n.sf-pending.is-on { background: color-mix(in srgb, var(--s-pending) 14%, var(--surface)); }\n.sf-todo.is-on { background: color-mix(in srgb, var(--s-todo) 10%, var(--surface)); }\n.sf-canceled.is-on { background: color-mix(in srgb, var(--s-canceled) 10%, var(--surface)); }\n\n/* t-shirt sizes: filled chip + ascending bars (order without colour) */\n.size { display: inline-flex; align-items: center; flex: none; white-space: nowrap; gap: 5px; height: 22px; padding: 0 8px 0 7px; border: 0; border-radius: 7px; font-size: 12px; font-weight: 800; letter-spacing: .01em; background: var(--surface-3); color: var(--ink-2); }\n.size .bars { flex: none; fill: currentColor; }\n.size-xs { background: var(--sz-xs-bg); color: var(--sz-xs-fg); }\n.size-s { background: var(--sz-s-bg); color: var(--sz-s-fg); }\n.size-m { background: var(--sz-m-bg); color: var(--sz-m-fg); }\n.size-l { background: var(--sz-l-bg); color: var(--sz-l-fg); }\n.size-xl { background: var(--sz-xl-bg); color: var(--sz-xl-fg); }\n.size-xxl { background: var(--sz-xxl-bg); color: var(--sz-xxl-fg); }\n\n/* seasonal columns */\n.column { position: relative; overflow: hidden; }\n.column::before { content: \"\"; position: absolute; inset-inline: 0; top: 0; height: 4px; background: var(--season, transparent); }\n.column.ss-spring { --season: var(--ss-spring); --season-ink: var(--ss-spring-ink); }\n.column.ss-summer { --season: var(--ss-summer); --season-ink: var(--ss-summer-ink); }\n.column.ss-autumn { --season: var(--ss-autumn); --season-ink: var(--ss-autumn-ink); }\n.column.ss-winter { --season: var(--ss-winter); --season-ink: var(--ss-winter-ink); }\n.column[class*=\"ss-\"] { background: color-mix(in srgb, var(--season) 5%, var(--surface-2)); }\n.season { display: inline-flex; align-items: center; gap: 4px; align-self: center; height: 20px; padding: 0 7px; border-radius: 999px; font-size: 11px; font-weight: 700;\n  color: var(--season-ink); background: color-mix(in srgb, var(--season) 14%, transparent); }\n.season .ic { stroke-width: 2; }\n.column.is-current { border-color: color-mix(in srgb, var(--accent) 45%, transparent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent); }\n.now { color: #fff; background: var(--accent); }\n.app[data-theme=\"dark\"] .now { color: #1f0412; }\n\n/* cards: status stripe on the start edge + livelier hover */\n.card { border-inline-start: 3px solid var(--stripe, var(--line)); }\n.card.st-done { --stripe: var(--s-done); }\n.card.st-devdone { --stripe: var(--s-devdone); }\n.card.st-progress { --stripe: var(--s-progress); }\n.card.st-pending { --stripe: var(--s-pending); }\n.card.st-todo { --stripe: var(--s-todo); }\n.card.st-canceled { --stripe: var(--s-canceled); }\n.card:hover { box-shadow: 0 2px 4px rgba(20,20,19,.05), 0 10px 28px color-mix(in srgb, var(--stripe, var(--accent)) 16%, transparent); }\n.card-tags bdi { background: color-mix(in srgb, var(--accent) 7%, var(--surface-2)); color: var(--ink-2); }\n.star.is-on { color: #f59e0b; }\n\n/* initials avatars get a friendly colour */\n.av.c0 { background: #ffe4ef; color: #a10c5c; } .av.c1 { background: #ffedd5; color: #9a3412; }\n.av.c2 { background: #dcfce7; color: #166534; } .av.c3 { background: #dbeafe; color: #1e40af; }\n.av.c4 { background: #ede9fe; color: #5b21b6; } .av.c5 { background: #cffafe; color: #155e75; }\n.av.c6 { background: #fef9c3; color: #854d0e; } .av.c7 { background: #fce7f3; color: #9d174d; }\n\n/* dashboard */\n.hero { background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--surface)), var(--surface) 60%); }\n.hero > b { background: linear-gradient(90deg, var(--accent), var(--brand-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }\n.tile .ic { width: 28px; height: 28px; padding: 6px; border-radius: 8px; color: var(--tile, var(--ink-3)); background: color-mix(in srgb, var(--tile, var(--ink-3)) 12%, transparent); }\n.tile { grid-template-columns: auto 1fr; }\n.tile.t-all { --tile: var(--accent); } .tile.t-picked { --tile: #8b5cf6; } .tile.t-progress { --tile: var(--s-progress); }\n.tile.t-pending { --tile: var(--s-pending); } .tile.t-late { --tile: var(--danger); } .tile.t-done { --tile: var(--s-done); }\n.tile:hover { border-color: color-mix(in srgb, var(--tile, var(--accent)) 40%, var(--line)); }\n.viz-card > header h3::before { content: \"\"; display: inline-block; width: 8px; height: 8px; border-radius: 3px; margin-inline-end: 8px; vertical-align: middle; background: linear-gradient(135deg, var(--accent), var(--brand-2)); }\n\n/* following inbox */\n.inbox-head h2 { background: linear-gradient(90deg, var(--ink), var(--accent)); -webkit-background-clip: text; background-clip: text; color: transparent; }\n.inbox-item { border-inline-start: 3px solid var(--stripe, var(--line)); }\n.inbox-item.has-news { box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 8%, transparent); }\n\n.launcher { background: linear-gradient(135deg, #d40c78, #ff7a3d); }\n.launcher .ic { color: #fff; }\n\n@media (max-width: 860px) { .greet { display: none; } }\n\n/* ==========================================================================\n   Game layer — «بازی‌وار»\n   Player chip, quests, achievements, boss cards, delivery journey, new analyses.\n   Animations only ever animate *from* a state (keyframes with `from`), so a reduced-motion\n   user simply sees the finished picture.\n   ========================================================================== */\n@keyframes rise { from { opacity: 0; transform: translateY(8px); } }\n@keyframes grow-y { from { transform: scaleY(0); } }\n@keyframes grow-x { from { transform: scaleX(0); } }\n@keyframes draw { from { stroke-dasharray: 100; stroke-dashoffset: 100; } }\n@keyframes arc-in { from { stroke-dasharray: 0 400; } }\n@keyframes fade-in { from { opacity: 0; } }\n@keyframes halo { 0%, 100% { opacity: .55; transform: scale(.92); } 50% { opacity: .15; transform: scale(1.08); } }\n@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }\n@keyframes xp-rise { 0% { opacity: 0; transform: translate(-50%, 6px) scale(.8); } 15% { opacity: 1; transform: translate(-50%, 0) scale(1.08); } 80% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -46px) scale(1); } }\n@keyframes bump { 0% { transform: scale(1); } 30% { transform: scale(1.06); } 100% { transform: scale(1); } }\n@keyframes boss-glow { 0%, 100% { box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--brand-2) 55%, transparent), 0 0 0 0 color-mix(in srgb, var(--brand-2) 30%, transparent); } 50% { box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--brand-2) 80%, transparent), 0 0 18px 2px color-mix(in srgb, var(--brand-2) 28%, transparent); } }\n@keyframes twinkle { 0%, 100% { transform: scale(1) rotate(0); } 50% { transform: scale(1.25) rotate(12deg); } }\n@keyframes col-pop { 0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent); } 100% { box-shadow: 0 0 0 16px transparent; } }\n@keyframes sheen { to { background-position: -200% 0; } }\n\n/* ----- fx layer ----- */\n.fx { position: fixed; inset: 0; z-index: 70; pointer-events: none; overflow: hidden; }\n.fx canvas { position: absolute; inset: 0; }\n.xp-pop {\n  position: fixed; padding: 2px 12px; border-radius: 999px; font-weight: 800; font-size: 14px; white-space: nowrap;\n  color: var(--accent-ink); background: var(--surface); border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);\n  box-shadow: 0 6px 20px color-mix(in srgb, var(--accent) 25%, transparent); animation: xp-rise 1.5s var(--ease) both;\n}\n.xp-pop.xp-quest { color: var(--on-accent); background: linear-gradient(135deg, var(--accent), var(--brand-2)); border: 0; margin-top: 30px; }\n\n/* ----- player chip ----- */\n.player {\n  position: relative; display: grid; grid-template-columns: 44px auto auto; align-items: center; column-gap: 10px;\n  height: 52px; padding: 0 14px 0 6px; margin-inline-start: 6px; border-radius: 999px;\n  background: var(--surface); border: 1px solid var(--line); cursor: pointer; transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.player:hover { border-color: color-mix(in srgb, var(--accent) 45%, var(--line)); box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 14%, transparent); }\n.player.bump { animation: bump .5s var(--ease); }\n.lv-ring { grid-area: 1 / 1; place-self: center; }\n.player-av { grid-area: 1 / 1; place-self: center; display: inline-flex; }\n.lv-track { stroke: var(--surface-3); }\n.lv-arc { stroke: var(--accent); transition: stroke-dasharray .8s var(--ease); }\n.player-text { display: grid; line-height: 1.35; text-align: start; }\n.player-text b { font-size: var(--fs-sm); font-weight: 800; white-space: nowrap; }\n.player-text b i { font-style: normal; font-weight: 600; color: var(--accent-ink); margin-inline-start: 6px; }\n.player-text small { font-size: 11px; color: var(--ink-3); white-space: nowrap; }\n.streak { display: inline-flex; align-items: center; gap: 3px; padding: 3px 9px 3px 7px; border-radius: 999px; background: var(--surface-2); color: var(--ink-2); font-size: var(--fs-sm); }\n.streak b { font-weight: 800; color: var(--ink); }\n.streak .ic { color: var(--ink-3); }\n.streak.is-hot { background: color-mix(in srgb, var(--brand-2) 16%, transparent); }\n.streak.is-hot .ic { color: var(--brand-2); fill: color-mix(in srgb, var(--brand-2) 35%, transparent); }\n@media (max-width: 1180px) { .player-text { display: none; } .player { grid-template-columns: 44px auto; } }\n\n/* ----- player panel ----- */\n.popover.pop-player { width: 380px; }\n.pp { display: grid; gap: 14px; padding: 18px; overflow-y: auto; }\n.pp-head { display: flex; align-items: center; gap: 16px; }\n.pp-ring { position: relative; width: 72px; height: 72px; flex: none; }\n.pp-lv { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; line-height: 1.1; }\n.pp-lv b { font-size: 24px; font-weight: 800; }\n.pp-lv small { font-size: 10px; color: var(--ink-3); }\n.pp-id { flex: 1; display: grid; gap: 4px; min-width: 0; }\n.pp-id b { font-size: var(--fs-xl); font-weight: 800; }\n.pp-id small { font-size: var(--fs-xs); color: var(--ink-3); }\n.pp-split { display: flex; flex-wrap: wrap; gap: 6px; }\n.pp-split span { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 999px; background: var(--surface-2); font-size: var(--fs-xs); color: var(--ink-2); }\n.pp-split span b { color: var(--ink); font-weight: 800; }\n.pp h4 { display: flex; align-items: baseline; gap: 8px; font-size: var(--fs-md); font-weight: 800; }\n.pp h4 small { font-size: var(--fs-xs); color: var(--ink-3); font-weight: 500; }\n.quests { display: grid; gap: 6px; }\n.quests li { display: grid; grid-template-columns: 32px 1fr auto; gap: 10px; align-items: center; padding: 8px 10px; border-radius: 12px; background: var(--surface-2); border: 1px solid transparent; transition: background var(--t); }\n.quests li b { display: block; font-size: var(--fs-sm); font-weight: 600; line-height: 1.5; }\n.quests li small { display: block; font-size: 11px; color: var(--ink-3); }\n.quests li .meter { margin-top: 5px; height: 5px; }\n.quests li em { font-style: normal; font-weight: 800; font-size: var(--fs-sm); color: var(--accent-ink); }\n.q-ic { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: color-mix(in srgb, var(--accent) 12%, transparent); color: var(--accent-ink); }\n.quests li.is-done { background: color-mix(in srgb, var(--s-done) 9%, var(--surface)); border-color: color-mix(in srgb, var(--s-done) 25%, transparent); }\n.quests li.is-done .q-ic { background: var(--s-done); color: #fff; }\n.quests li.is-done b { color: var(--ink-2); text-decoration: line-through; text-decoration-color: var(--line-2); }\n.quests li.is-done em { color: var(--ok-ink); }\n.meter i { background: linear-gradient(90deg, var(--accent), var(--brand-2)); }\n.medals { display: flex; flex-wrap: wrap; gap: 8px; }\n.pp-note { font-size: 11px; color: var(--ink-3); line-height: 1.7; }\n\n/* ----- medals & achievement cards ----- */\n.medal { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; flex: none; background: var(--surface-2); color: var(--ink-3); border: 1px dashed var(--line-2); }\n.medal.is-on { background: linear-gradient(135deg, var(--accent), var(--brand-2)); color: var(--on-accent); border: 0; box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 30%, transparent); }\n.badge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }\n.badge-card { display: grid; justify-items: start; gap: 6px; padding: 14px; border-radius: 14px; background: var(--surface); border: 1px solid var(--line); position: relative; overflow: hidden; }\n.badge-card .medal { width: 46px; height: 46px; margin-bottom: 4px; }\n.badge-card b { font-size: var(--fs-md); font-weight: 800; }\n.badge-card p { font-size: var(--fs-xs); color: var(--ink-3); line-height: 1.7; min-height: 40px; }\n.badge-card .meter { width: 100%; height: 5px; }\n.badge-card small { font-size: 11px; color: var(--ink-3); }\n.badge-card:not(.is-on) { background: var(--surface); }\n.badge-card:not(.is-on) b { color: var(--ink-2); }\n.badge-card.is-on { border-color: color-mix(in srgb, var(--accent) 35%, var(--line)); background: linear-gradient(160deg, color-mix(in srgb, var(--accent) 7%, var(--surface)), var(--surface) 70%); }\n.badge-card.is-on::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 35%, color-mix(in srgb, #fff 45%, transparent) 50%, transparent 65%); background-size: 200% 100%; background-position: 120% 0; pointer-events: none; transition: background-position .9s var(--ease); }\n.badge-card.is-on:hover::after { background-position: -40% 0; }\n.badge-card.is-on small { color: var(--ok-ink); font-weight: 700; }\n.badge-card.is-team .medal.is-on { background: linear-gradient(135deg, var(--s-cat1), var(--s-cat3)); box-shadow: 0 4px 12px color-mix(in srgb, var(--s-cat1) 30%, transparent); }\n\n/* ----- board: boss cards, wins, month rings ----- */\n.pill-boss { background: linear-gradient(135deg, var(--brand-2), var(--accent)); color: #fff; font-weight: 700; }\n.app[data-theme=\"dark\"] .pill-boss { color: #1f0412; }\n.pill-boss .ic { stroke-width: 2.2; }\n.card.boss { box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--brand-2) 55%, transparent), var(--shadow-card); animation: boss-glow 2.8s ease-in-out infinite; }\n.card.boss.is-slain { animation: none; box-shadow: 0 0 0 1.5px #eda100, var(--shadow-card); background: linear-gradient(160deg, color-mix(in srgb, #eda100 8%, var(--surface)), var(--surface) 60%); }\n.card.boss.is-slain .pill-boss { background: #eda100; color: #231800; }\n.spark { display: inline-flex; color: #eda100; animation: twinkle 2.4s ease-in-out infinite; }\n.card.win { background: linear-gradient(160deg, color-mix(in srgb, var(--s-done) 6%, var(--surface)), var(--surface) 55%); }\n.kanban.enter .card { animation: card-in 440ms var(--ease) both; animation-delay: calc(var(--i, 0) * 34ms); }\n.kanban.enter .column { animation: rise 420ms var(--ease) both; }\n.column.pop { animation: col-pop 650ms var(--ease); }\n.col-done { display: flex; align-items: center; gap: 6px; }\n.mini-ring { flex: none; }\n.mr-track { fill: none; stroke: var(--surface-3); stroke-width: 3; }\n.mr-arc { fill: none; stroke: var(--s-done); stroke-width: 3; stroke-linecap: round; }\n.clear-tag { display: inline-flex; align-items: center; gap: 3px; margin-inline-start: auto; padding: 0 7px; height: 20px; border-radius: 999px; font-style: normal; font-size: 11px; font-weight: 700; color: #6b4600; background: color-mix(in srgb, #eda100 24%, transparent); }\n.app[data-theme=\"dark\"] .clear-tag { color: #f6c453; }\n.column.is-clear::before { background: linear-gradient(90deg, #eda100, #ff7a3d, #eda100); background-size: 200% 100%; animation: sheen 3.2s linear infinite; }\n\n/* ----- dashboard: structure ----- */\n.dash-sec { grid-column: 1 / -1; display: flex; align-items: baseline; gap: 12px; margin-top: 14px; }\n.dash-sec h2 { font-size: var(--fs-xl); font-weight: 800; white-space: nowrap; }\n.dash-sec p { font-size: var(--fs-sm); color: var(--ink-3); white-space: nowrap; }\n.dash-sec::after { content: \"\"; flex: 1; height: 1px; background: var(--line); align-self: center; order: 3; }\n.switch-sm button { padding: 3px 12px; font-size: var(--fs-xs); }\n.viz-card > header .switch { flex: none; }\n\n/* ----- dashboard: journey ----- */\n.journey-card { gap: 14px; background: radial-gradient(900px 220px at 100% 0, color-mix(in srgb, var(--accent) 7%, transparent), transparent 70%), radial-gradient(700px 200px at 0 100%, color-mix(in srgb, var(--brand-2) 6%, transparent), transparent 70%), var(--surface); }\n.jstats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }\n.jstat { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 14px; background: color-mix(in srgb, var(--ink) 4%, transparent); min-width: 0; }\n.jstat-ic { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 12px; flex: none; color: var(--accent-ink); background: color-mix(in srgb, var(--accent) 13%, transparent); }\n.jstat.is-main .jstat-ic { color: var(--on-accent); background: linear-gradient(135deg, var(--accent), var(--brand-2)); }\n.jstat small { display: block; font-size: var(--fs-xs); color: var(--ink-3); }\n.jstat b { display: block; font-size: var(--fs-xl); font-weight: 800; line-height: 1.35; white-space: nowrap; }\n.jstat b em { font-style: normal; font-size: var(--fs-sm); font-weight: 500; color: var(--ink-3); }\n.jstat > div { min-width: 0; }\n.jmeter { display: block; height: 4px; margin-top: 3px; border-radius: 2px; background: var(--surface-3); overflow: hidden; }\n.jmeter u { display: block; height: 100%; text-decoration: none; background: linear-gradient(90deg, var(--accent), var(--brand-2)); }\n.journey-scroll { overflow-x: auto; padding-bottom: 4px; }\n.journey-svg { display: block; width: 100%; height: auto; overflow: visible; }\n.journey .jr-road { fill: none; stroke: var(--line-2); stroke-width: 7; stroke-linecap: round; stroke-dasharray: .1 13; }\n.journey .jr-trail { fill: none; stroke: url(#jgrad); stroke-width: 7; stroke-linecap: round; }\n.journey.is-fresh .jr-trail { animation: draw 1.5s var(--ease) .25s both; }\n.journey.is-fresh .jn { animation: fade-in .5s var(--ease) both; animation-delay: calc(var(--i) * 70ms + 200ms); }\n.jn { cursor: pointer; }\n.jn-base { fill: var(--surface); stroke: var(--line-2); stroke-width: 1.5; transition: stroke var(--t-fast); }\n.jn-track { fill: none; stroke: var(--surface-3); stroke-width: 6; }\n.jn-arc { fill: none; stroke: url(#jgrad); stroke-width: 6; stroke-linecap: round; }\n.jn-num { font: 800 13px var(--font); fill: var(--ink); }\n.jn-num.is-dim { fill: var(--ink-3); font-weight: 500; }\n.jn-label { font: 700 13px var(--font); fill: var(--ink); }\n.jn-sub { font: 500 11px var(--font); fill: var(--ink-3); }\n.jn-check { color: var(--s-done); stroke-width: 3; }\n.jn.is-full .jn-arc { stroke: var(--s-done); }\n.jn.is-full .jn-base { fill: color-mix(in srgb, var(--s-done) 12%, var(--surface)); }\n.jn.is-now .jn-base { stroke: var(--accent); stroke-width: 2.5; }\n.jn.is-empty .jn-base { stroke-dasharray: 3 3; }\n.jn.is-empty .jn-label { fill: var(--ink-3); font-weight: 500; }\n.jn.is-future .jn-label { fill: var(--ink-2); }\n.jn:hover .jn-base, .jn:focus-within .jn-base { stroke: var(--accent); }\n.jn-halo { fill: color-mix(in srgb, var(--accent) 22%, transparent); transform-box: fill-box; transform-origin: center; animation: halo 2.4s ease-in-out infinite; pointer-events: none; }\n.jn-pin { animation: bob 2.2s ease-in-out infinite; pointer-events: none; }\n.jn-pin rect, .jn-pin path { fill: var(--accent); }\n.jn-pin text { font: 700 12px var(--font); fill: var(--on-accent); }\n.jn-boss { pointer-events: none; color: #fff; }\n.jn-boss circle { fill: var(--brand-2); stroke: var(--surface); stroke-width: 2; }\n.jn-boss .ic { stroke-width: 2.2; }\n.jn-boss.is-dead { color: #3a2600; }\n.jn-boss.is-dead circle { fill: #eda100; }\n.jn-late { pointer-events: none; }\n.jn-late circle { fill: var(--danger); stroke: var(--surface); stroke-width: 2; }\n.jn-late text { font: 800 11px var(--font); fill: #fff; }\n.app[data-theme=\"dark\"] .jn-late text { fill: #1f0412; }\n.jn-hit { fill: transparent; outline: none; }\n.jn-hit:focus-visible { stroke: var(--accent); stroke-width: 2; }\n.viz-card.show-table .journey-scroll { display: none; }\n\n/* ----- dashboard: tiles (six across) ----- */\n.tile-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }\n.tile b { font-size: 26px; }\n@media (max-width: 1100px) { .tile-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } .jstats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n\n/* ----- dashboard: heat map ----- */\n.heat { display: grid; gap: 4px; }\n.hm-row { display: grid; grid-template-columns: minmax(90px, 150px) repeat(var(--hm-cols), minmax(0, 1fr)) 40px; gap: 4px; align-items: center; }\n.hm-head span { font-size: 11px; color: var(--ink-3); text-align: center; padding-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.hm-head span.is-now { color: var(--ink); font-weight: 800; }\n.hm-label { font-size: var(--fs-sm); color: var(--ink-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.hm-sum { text-align: center; font-size: var(--fs-xs); color: var(--ink-3); font-variant-numeric: tabular-nums; }\n.hm-cell { position: relative; display: grid; place-items: center; height: 30px; border: 0; border-radius: 7px; font-size: var(--fs-xs); transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast); }\n.hm-cell b { font-weight: 800; font-variant-numeric: tabular-nums; }\n.hm-cell.h0 { background: color-mix(in srgb, var(--ink) 4.5%, transparent); }\n.hm-cell.h1 { background: var(--hm1); color: var(--hm-ink-lo); } .hm-cell.h2 { background: var(--hm2); color: var(--hm-ink-lo); }\n.hm-cell.h3 { background: var(--hm3); color: var(--hm-ink-lo); } .hm-cell.h4 { background: var(--hm4); color: var(--hm-ink-lo); }\n.hm-cell.h5 { background: var(--hm5); color: var(--hm-ink-hi); } .hm-cell.h6 { background: var(--hm6); color: var(--hm-ink-hi); }\n.app[data-theme=\"dark\"] .hm-cell.h4, .app[data-theme=\"dark\"] .hm-cell.h5, .app[data-theme=\"dark\"] .hm-cell.h6 { color: var(--hm-ink-lo); }\n.app[data-theme=\"dark\"] .hm-cell.h1, .app[data-theme=\"dark\"] .hm-cell.h2, .app[data-theme=\"dark\"] .hm-cell.h3 { color: var(--hm-ink-hi); }\n.hm-cell.is-now { box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--accent) 60%, transparent); }\nbutton.hm-cell { cursor: pointer; }\nbutton.hm-cell:hover { transform: scale(1.12); z-index: 1; box-shadow: 0 4px 14px rgba(0, 0, 0, .22); }\n.hm-dot { position: absolute; top: 3px; inset-inline-end: 3px; width: 7px; height: 7px; border-radius: 50%; background: var(--danger); box-shadow: 0 0 0 1.5px var(--surface); }\n.hm-scale { display: flex; align-items: center; gap: 4px; margin-top: 10px; font-size: 11px; color: var(--ink-3); }\n.hm-scale i { width: 22px; height: 10px; border-radius: 3px; }\n.hm-scale i.h1 { background: var(--hm1); } .hm-scale i.h2 { background: var(--hm2); } .hm-scale i.h3 { background: var(--hm3); }\n.hm-scale i.h4 { background: var(--hm4); } .hm-scale i.h5 { background: var(--hm5); } .hm-scale i.h6 { background: var(--hm6); }\n.hm-scale em { margin-inline-start: auto; font-style: normal; display: inline-flex; align-items: center; gap: 4px; }\n.hm-scale em .ic { color: var(--danger); fill: var(--danger); }\n.viz-card.show-table .heat { display: none; }\n.is-fresh .hm-cell { animation: fade-in .6s var(--ease) both; }\n\n/* ----- dashboard: burn-up ----- */\n.burn { display: block; width: 100%; height: auto; overflow: visible; }\n.bu-grid { stroke: var(--grid); stroke-width: 1; }\n.bu-grid.is-base { stroke: var(--baseline); }\n.bu-tick { font: 500 11px var(--font); fill: var(--ink-3); }\n.bu-cat { font: 500 11px var(--font); fill: var(--ink-2); }\n.bu-cat.is-now { font-weight: 800; fill: var(--ink); }\n.bu-line { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }\n.bu-line.p { stroke: var(--s-cat1); } .bu-line.d { stroke: var(--s-cat3); }\n.bu-dot { stroke: var(--surface); stroke-width: 2; } .bu-dot.p { fill: var(--s-cat1); } .bu-dot.d { fill: var(--s-cat3); }\n.bu-gap { fill: color-mix(in srgb, var(--danger) 9%, transparent); }\n.sw.gap { background: color-mix(in srgb, var(--danger) 28%, transparent); }\n.bu-now { stroke: var(--accent); stroke-width: 1.5; stroke-dasharray: 3 4; }\n.bu-nowlbl { font: 700 11px var(--font); fill: var(--accent-ink); }\n.bu-end { font: 800 12px var(--font); fill: var(--ink); paint-order: stroke; stroke: var(--surface); stroke-width: 4px; }\n.bu-hit { fill: transparent; }\n.bu-hit:hover { fill: color-mix(in srgb, var(--ink) 4%, transparent); }\n.is-fresh .bu-line { animation: draw 1.4s var(--ease) .15s both; }\n.viz-card.show-table .viz-plot-wrap { display: none; }\n\n/* ----- dashboard: vitals ----- */\n.vitals { display: grid; gap: 14px; }\n.vt-gauge { display: grid; justify-items: center; gap: 8px; --tone: var(--s-done); }\n.vt-gauge.warn { --tone: var(--s-pending); } .vt-gauge.bad { --tone: var(--danger); }\n.vt-gauge svg, .vt-gtext { grid-area: 1 / 1; }\n.vt-gtrack { fill: none; stroke: var(--surface-3); stroke-width: 9; }\n.vt-garc { fill: none; stroke: var(--tone); stroke-width: 9; stroke-linecap: round; }\n.is-fresh .vt-garc { animation: arc-in 1.1s var(--ease) both; }\n.vt-gtext { display: grid; place-content: center; text-align: center; line-height: 1.1; }\n.vt-gtext b { font-size: 30px; font-weight: 800; }\n.vt-gtext small { font-size: 11px; color: var(--ink-3); }\n.vt-tier { grid-row: 2; display: inline-flex; align-items: center; gap: 6px; padding: 3px 12px; border-radius: 999px; font-size: var(--fs-sm); font-weight: 700; background: color-mix(in srgb, var(--tone) 14%, transparent); }\n.vt-tier .ic { color: var(--tone); }\n.vt-list { display: grid; gap: 6px; }\n.vt { display: grid; grid-template-columns: 1fr auto; gap: 4px 8px; padding: 8px 12px; border-radius: 12px; text-align: start; background: var(--surface-2); border: 1px solid transparent; transition: border-color var(--t-fast); --tone: var(--s-done); }\n.vt.warn { --tone: var(--s-pending); } .vt.bad { --tone: var(--danger); }\n.vt:hover { border-color: var(--line-2); }\n.vt-l { display: flex; align-items: center; gap: 6px; font-size: var(--fs-sm); font-weight: 600; }\n.vt-l .ic { color: var(--tone); }\n.vt-v { font-weight: 800; font-size: var(--fs-md); }\n.vt-bar { grid-column: 1 / -1; height: 6px; border-radius: 3px; background: var(--surface-3); overflow: hidden; }\n.vt-bar i { display: block; height: 100%; border-radius: 3px; background: var(--tone); transform-origin: right center; }\n.is-fresh .vt-bar i { animation: grow-x .9s var(--ease) .2s both; }\n.vt small { grid-column: 1 / -1; font-size: 11px; color: var(--ink-3); }\n\n/* ----- dashboard: podium ----- */\n.podium { display: grid; gap: 12px; }\n.pd-stand { display: flex; justify-content: center; align-items: flex-end; gap: 10px; padding-top: 6px; }\n.pd { display: grid; justify-items: center; gap: 3px; flex: 1; max-width: 118px; min-width: 0; text-align: center; border-radius: 12px; }\n.pd .av { width: 48px; height: 48px; font-size: 15px; box-shadow: 0 0 0 2.5px var(--surface), 0 0 0 4.5px var(--pd-ring, var(--line-2)); }\n.pd-1 { --pd-ring: var(--accent); }\n.pd b { font-size: var(--fs-sm); font-weight: 700; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 6px; }\n.pd-xp { font-size: 11px; color: var(--ink-3); }\n.pd-xp em { font-style: normal; font-weight: 800; font-size: var(--fs-md); color: var(--ink); }\n.pd-crown { color: #eda100; animation: bob 2.4s ease-in-out infinite; line-height: 0; }\n.pd-crown .ic { fill: color-mix(in srgb, #eda100 35%, transparent); }\n.pd-block { width: 100%; display: grid; place-items: start center; padding-top: 8px; border-radius: 12px 12px 4px 4px; background: var(--surface-3); font-style: normal; transform-origin: bottom; }\n.pd-block i { font-style: normal; font-weight: 800; font-size: var(--fs-lg); color: var(--ink-2); }\n.pd-1 .pd-block { height: 88px; background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--brand-2))); }\n.pd-1 .pd-block i { color: var(--on-accent); }\n.pd-2 .pd-block { height: 64px; } .pd-3 .pd-block { height: 48px; }\n.is-fresh .pd-block { animation: grow-y .9s var(--ease) .2s both; }\n.pd:hover .av { --pd-ring: var(--accent); }\n.pd-list { display: grid; gap: 2px; }\n.pd-row { display: grid; grid-template-columns: 18px 22px minmax(70px, 1fr) minmax(40px, 1fr) 40px; gap: 8px; align-items: center; padding: 4px 6px; border-radius: 8px; font-size: var(--fs-sm); color: var(--ink-2); text-align: start; }\n.pd-row:hover { background: var(--surface-2); }\n.pd-n { color: var(--ink-3); font-size: var(--fs-xs); }\n.pd-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.pd-track { height: 6px; border-radius: 3px; background: var(--surface-3); overflow: hidden; }\n.pd-track i { display: block; height: 100%; border-radius: 3px; background: var(--s-cat1); }\n.pd-row b { color: var(--ink); text-align: end; }\n.viz-card.show-table .podium > :not(.viz-table) { display: none; }\n\n/* ----- dashboard: stale list ----- */\n.stale-list li { grid-template-columns: 52px minmax(0, 1fr) auto; }\n.stale-list .days { display: grid; justify-items: center; line-height: 1.1; padding: 3px 0; border-radius: 9px; background: color-mix(in srgb, var(--s-pending) 18%, transparent); font-weight: 800; font-size: var(--fs-md); }\n.stale-list .days small { font-size: 10px; font-weight: 500; color: var(--ink-2); }\n\n/* ----- animations on first showing of the dashboard ----- */\n.is-fresh .col-bar { animation: grow-y .8s var(--ease) both; transform-origin: bottom; }\n.is-fresh .hrow-bar { animation: grow-x .8s var(--ease) both; transform-origin: right center; }\n.is-fresh .donut .arc { animation: arc-in .9s var(--ease) both; }\n.is-fresh .tile, .is-fresh .jstat { animation: rise .5s var(--ease) both; }\n.is-fresh .tile:nth-child(2) { animation-delay: .05s; } .is-fresh .tile:nth-child(3) { animation-delay: .1s; }\n.is-fresh .tile:nth-child(4) { animation-delay: .15s; } .is-fresh .tile:nth-child(5) { animation-delay: .2s; } .is-fresh .tile:nth-child(6) { animation-delay: .25s; }\n.is-fresh .jstat:nth-child(2) { animation-delay: .08s; } .is-fresh .jstat:nth-child(3) { animation-delay: .16s; } .is-fresh .jstat:nth-child(4) { animation-delay: .24s; }\n.badge-card.is-on .medal { transition: transform .4s var(--ease); }\n.badge-card.is-on:hover .medal { transform: rotate(-8deg) scale(1.08); }\n\n/* ----- extras ----- */\n.viz-card.wide .cols-chart:not(.compact) { height: 340px; }\n.viz-card.wide .cols-chart.compact { height: 280px; }\n.viz-card.show-table .xp-key { display: none; }\n.xp-key { display: grid; gap: 8px; padding-top: 12px; border-top: 1px solid var(--line); }\n.xp-key h4 { font-size: var(--fs-sm); font-weight: 700; }\n.xp-key > div { display: flex; flex-wrap: wrap; gap: 8px 14px; }\n.xp-key > div span { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-sm); }\n.xp-key > div span b { font-weight: 800; }\n.xp-key p { font-size: 11px; color: var(--ink-3); line-height: 1.8; }\n\n.card-top { flex-wrap: wrap; row-gap: 4px; }\nbdi.key { white-space: nowrap; }\n\n/* ---- size report ---- */\n.tool-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }\n.viz-card > header .tool-row .switch { flex: none; }\n.srep-wrap { overflow-x: auto; margin-top: 4px; }\n.srep { width: 100%; border-collapse: separate; border-spacing: 0 3px; font-variant-numeric: tabular-nums; }\n.srep th { font-weight: 500; font-size: 11px; color: var(--ink-3); padding: 2px 3px 6px; text-align: center; white-space: nowrap; vertical-align: bottom; }\n.srep th .size { font-size: 11px; }\n.srep .srep-rl { text-align: start; min-width: 150px; padding-inline-end: 8px; }\n.srep td { padding: 0 2px; height: 36px; text-align: center; }\n.sr-na { font-size: 11px; color: var(--ink-3); }\n.sr-row { display: inline-flex; align-items: center; gap: 8px; max-width: 220px; border: 0; background: none; padding: 4px 6px; margin-inline-start: -6px; border-radius: 8px; color: var(--ink); font-size: var(--fs-sm); font-weight: 600; text-align: start; cursor: pointer; }\n.sr-row span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.sr-row:hover { background: color-mix(in srgb, var(--ink) 6%, transparent); }\n.sr-dot { flex: none; width: 9px; height: 9px; border-radius: 50%; }\n.sr-cell { display: grid; place-items: center; width: 100%; min-width: 42px; height: 34px; border: 0; border-radius: 8px; font-size: var(--fs-sm); font-weight: 700; color: var(--ink);\n  background: color-mix(in oklab, var(--c) var(--a), transparent); cursor: pointer; transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast); }\n.sr-cell:hover { transform: translateY(-1px); box-shadow: 0 0 0 2px color-mix(in srgb, var(--c) 75%, transparent); }\n.sr-cell.is-zero { background: none; color: var(--ink-4, var(--ink-3)); font-weight: 400; cursor: default; opacity: .6; }\n.sr-cell.is-foot { box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--c) 70%, transparent); background: none; }\n.srep th.sr-sum, .srep td.sr-sum { padding-inline: 10px; min-width: 70px; }\n.srep td.sr-sum b { font-size: var(--fs-md, 15px); font-weight: 800; }\n.sr-mix { min-width: 150px; width: 22%; }\n.mixbar { display: flex; gap: 2px; height: 12px; border-radius: 6px; overflow: hidden; }\n.mixbar i { display: block; min-width: 2px; border-radius: 2px; }\n.srep-foot td, .srep-foot th { border-top: 1px solid var(--line, var(--hairline)); padding-top: 2px; }\n.is-fresh .sr-cell { animation: fade-in .5s var(--ease) both; }\n.is-fresh .mixbar i { animation: grow-x .8s var(--ease) .2s both; transform-origin: right center; }\n@media (max-width: 720px) { .sr-mix { display: none; } .srep .srep-rl { min-width: 110px; } }\n" };
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
    XS: { n: 1, xp: 10, fa: 'خیلی کوچک', hue: 'نعنایی' },
    S: { n: 2, xp: 20, fa: 'کوچک', hue: 'آبی' },
    M: { n: 3, xp: 40, fa: 'متوسط', hue: 'زرد' },
    L: { n: 4, xp: 70, fa: 'بزرگ', hue: 'سرخابی' },
    XL: { n: 5, xp: 110, fa: 'خیلی بزرگ', hue: 'بنفش' },
    XXL: { n: 6, xp: 160, fa: 'غول', hue: 'نارنجی' },
  };
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
  /** Experience value of an initiative: bigger size and "Make or Fail" are worth more. */
  SFR.xpOf = (i) => {
    const base = SFR.SIZE_META[SFR.sizeKey(i.size)]?.xp ?? 15;
    return Math.round(base * (i.strategic === 'Make or Fail' ? 1.5 : 1));
  };
  /** Points an initiative has actually earned: delivered counts fully, dev-done 60 %. */
  SFR.earnedOf = (i) => (i.status === 'done' ? SFR.xpOf(i) : i.status === 'devdone' ? Math.round(SFR.xpOf(i) * 0.6) : 0);
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
 "at-sign": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\" /></svg>",
 "bell-dot": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.268 21a2 2 0 0 0 3.464 0\" /><path d=\"M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348\" /><circle cx=\"18\" cy=\"5\" r=\"3\" /></svg>",
 "calendar": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M8 2v3\" /><path d=\"M16 2v3\" /><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" /><path d=\"M3 9h18\" /></svg>",
 "chart-column": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M18 17V9\" /><path d=\"M13 17V5\" /><path d=\"M8 17v-3\" /></svg>",
 "chart-pie": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\" /><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\" /></svg>",
 "check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20 6 9 17l-5-5\" /></svg>",
 "check-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M18 6 7 17l-5-5\" /><path d=\"m22 10-7.5 7.5L13 16\" /></svg>",
 "chevron-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m6 9 6 6 6-6\" /></svg>",
 "chevron-left": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m15 18-6-6 6-6\" /></svg>",
 "circle": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /></svg>",
 "circle-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m16 9-5.5 5.5L8 12\" /></svg>",
 "circle-dashed": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\" /><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\" /><path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\" /><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\" /><path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\" /><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\" /><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\" /><path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\" /></svg>",
 "clock": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 6v6l4 2\" /></svg>",
 "crown": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\" /><path d=\"M5 21h14\" /></svg>",
 "external-link": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" /></svg>",
 "eye": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /></svg>",
 "eye-off": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" /><path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" /><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" /><path d=\"m2 2 20 20\" /></svg>",
 "file-spreadsheet": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" /><path d=\"M14 2v5a1 1 0 0 0 1 1h5\" /><path d=\"M8 13h2\" /><path d=\"M14 13h2\" /><path d=\"M8 17h2\" /><path d=\"M14 17h2\" /></svg>",
 "file-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" /><path d=\"M14 2v5a1 1 0 0 0 1 1h5\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" /></svg>",
 "flag": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\" /></svg>",
 "flame": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\" /></svg>",
 "flame-kindling": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z\" /><path d=\"m5 22 14-4\" /><path d=\"m5 18 14 4\" /></svg>",
 "gem": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M10.5 3 8 9l4 13 4-13-2.5-6\" /><path d=\"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z\" /><path d=\"M2 9h20\" /></svg>",
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
 "monitor": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" /><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" /><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" /></svg>",
 "moon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" /></svg>",
 "move": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 2v20\" /><path d=\"m15 19-3 3-3-3\" /><path d=\"m19 9 3 3-3 3\" /><path d=\"M2 12h20\" /><path d=\"m5 9-3 3 3 3\" /><path d=\"m9 5 3-3 3 3\" /></svg>",
 "octagon-alert": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 16h.01\" /><path d=\"M12 8v4\" /><path d=\"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z\" /></svg>",
 "podium": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 6V2h-1\" /><path d=\"M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1\" /><path d=\"M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10\" /></svg>",
 "refresh-cw": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /><path d=\"M21 3v5h-5\" /><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /><path d=\"M8 16H3v5\" /></svg>",
 "rocket": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" /><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" /><path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" /><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" /></svg>",
 "rotate-ccw": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /></svg>",
 "scroll": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" /></svg>",
 "scroll-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M15 12h-5\" /><path d=\"M15 8h-5\" /><path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" /></svg>",
 "search": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"m21 21-4.34-4.34\" /><circle cx=\"11\" cy=\"11\" r=\"8\" /></svg>",
 "send": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" /></svg>",
 "shield-check": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /><path d=\"m9 12 2 2 4-4\" /></svg>",
 "shirt": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" ><path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\" /></svg>",
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
  };
  SFR.FIELDS = FIELDS;
  const LIST_FIELDS = ['summary', 'issuetype', 'status', 'assignee', 'labels', 'comment', 'watches', 'created', 'updated', ...Object.values(FIELDS)].join(',');

  SFR.api = {
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
    async searchAll(jql, { fields = LIST_FIELDS, pageSize = 500, onPage } = {}) {
      let startAt = 0;
      let total = Infinity;
      const out = [];
      while (startAt < total) {
        const r = await req(`/rest/api/2/search?jql=${q(jql)}&startAt=${startAt}&maxResults=${pageSize}&fields=${fields}`);
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
    },
    dash: { cycle: '', fn: '', hideCanceled: true, monthBy: 'status', sizeVal: 'n', sizePhase: 'all' },
    anim: { board: false, dash: false },
    wins: new Set(),
  });

  SFR.subscribe = (fn) => (listeners.add(fn), () => listeners.delete(fn));
  SFR.emit = (what = 'all') => listeners.forEach((fn) => fn(what));

  const PERSIST = ['view', 'qf', 'status', 'owner', 'onlyFollowed', 'hideBacklog', 'theme', 'tab'];
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
    SFR.emit('board');
  };
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
  function stackedColumns({ cats, series, data, drill = 'month', seriesDrill = 'status', unit = 'اینیشیتیو' }) {
    const totals = cats.map((c) => series.reduce((a, s) => a + (data[c.key]?.[s.key] || 0), 0));
    const max = niceMax(Math.max(1, ...totals));
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t));
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
            ${ci === peak || c.current ? `<span class="col-val">${fa(t)}</span>` : ''}
            <div class="col-bar" style="height:${(t / max) * 100}%">
              ${segs
                .map(
                  (x) =>
                    `<button class="seg" style="flex:${x.v};background:${color(x.s)}" data-drill="${esc(JSON.stringify({ [drill]: c.key, [seriesDrill]: x.s.drill ?? x.s.key }))}" aria-label="${esc(
                      `${c.label}، ${x.s.label}: ${fa(x.v)}`
                    )}"></button>`
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
      <div class="viz-plot cols-chart"><div class="grid">${grid}</div><div class="cols">${cols}</div></div>
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
  function journey({ nodes, fresh }) {
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
    const lastReached = cur >= 0 ? cur : nodes.reduce((a, x, i) => (x.earned > 0 ? i : a), -1);
    const R = 29;
    const C = 2 * Math.PI * R;
    const g = nodes
      .map((m, i) => {
        const p = pts[i];
        const ratio = m.xp ? m.earned / m.xp : 0;
        const full = m.total > 0 && m.done === m.total;
        const stateCls = full ? 'is-full' : i === cur ? 'is-now' : m.xp === 0 ? 'is-empty' : i > cur && cur >= 0 ? 'is-future' : 'is-past';
        const t = tip(m.label, [
          { label: 'اینیشیتیو', value: `${fa(m.done)} از ${fa(m.total)} تحویل‌شده` },
          { label: 'امتیاز', value: `${fa(m.earned)} از ${fa(m.xp)}` },
          ...(m.delayed ? [{ label: 'تأخیری', value: fa(m.delayed), color: 'var(--danger)' }] : []),
          ...(m.boss ? [{ label: m.boss.done ? 'باس شکست خورد' : 'باس ماه', value: m.boss.title.slice(0, 40), color: 'var(--brand-2)' }] : []),
        ]);
        return `<g class="jn ${stateCls}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})" style="--i:${i}">
          ${i === cur ? `<circle class="jn-halo" r="40"/><g class="jn-pin"><rect x="-36" y="-72" width="72" height="24" rx="12"/><path d="M-6 -48 L0 -41 L6 -48 Z"/><text y="-55.5" text-anchor="middle">اینجایی</text></g>` : ''}
          <circle class="jn-base" r="${R + 4}"/>
          <circle class="jn-track" r="${R}"/>
          <circle class="jn-arc" r="${R}" transform="rotate(-90)" stroke-dasharray="${(Math.min(1, ratio) * C).toFixed(1)} ${C.toFixed(1)}"/>
          ${full ? iconAt('check', -11, -11, 22, 'jn-check') : m.total ? `<text class="jn-num" y="5" text-anchor="middle">${faPct(ratio * 100)}</text>` : `<text class="jn-num is-dim" y="5" text-anchor="middle">—</text>`}
          ${m.boss ? `<g class="jn-boss${m.boss.done ? ' is-dead' : ''}" transform="translate(22 -24)"><circle r="11"/>${iconAt(m.boss.done ? 'crown' : 'flame', -7, -7, 14)}</g>` : ''}
          ${m.delayed ? `<g class="jn-late" transform="translate(-22 -24)"><circle r="10"/><text y="4" text-anchor="middle">${fa(m.delayed)}</text></g>` : ''}
          <text class="jn-label" y="${R + 24}" text-anchor="middle">${esc(m.label)}</text>
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
  function heatmap({ rows, cols, cell, drillOf, unit = 'امتیاز' }) {
    let max = 0;
    const grid = rows.map((r) => cols.map((c) => ((max = Math.max(max, cell(r, c).xp)), cell(r, c))));
    const lvl = (v) => (v <= 0 ? 0 : Math.min(6, Math.max(1, Math.ceil((v / max) * 6))));
    const head = `<div class="hm-row hm-head"><span></span>${cols.map((c) => `<span class="${c.current ? 'is-now' : ''}">${esc(c.label)}</span>`).join('')}<span class="hm-sum">جمع</span></div>`;
    const body = rows
      .map((r, ri) => {
        const sum = grid[ri].reduce((a, x) => a + x.n, 0);
        return `<div class="hm-row"><span class="hm-label" dir="auto" title="${esc(r.label)}">${esc(r.label)}</span>${cols
          .map((c, ci) => {
            const x = grid[ri][ci];
            const t = tip(`${r.label} · ${c.label}`, [{ label: 'اینیشیتیو', value: fa(x.n) }, { label: unit, value: fa(x.xp) }, ...(x.late ? [{ label: 'تأخیری', value: fa(x.late), color: 'var(--danger)' }] : [])]);
            return x.n
              ? `<button class="hm-cell h${lvl(x.xp)}${c.current ? ' is-now' : ''}" data-drill="${drill(drillOf(r, c))}" data-tip="${t}" aria-label="${esc(`${r.label}، ${c.label}: ${fa(x.n)} اینیشیتیو، ${fa(x.xp)} ${unit}`)}"><b>${fa(x.n)}</b>${x.late ? '<i class="hm-dot"></i>' : ''}</button>`
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
  function podium({ people, max }) {
    const top = people.slice(0, 3);
    const rest = people.slice(3, 8);
    const order = [top[1], top[0], top[2]].filter(Boolean); // 2 · 1 · 3
    const rankOf = (p) => top.indexOf(p) + 1;
    const stand = order
      .map((p) => {
        const r = rankOf(p);
        return `<button class="pd pd-${r}" data-drill="${drill({ poc: p.key })}" data-tip="${tip(p.label, [{ label: 'امتیاز تحویل', value: fa(p.earned) }, { label: 'تحویل‌شده', value: `${fa(p.done)} از ${fa(p.total)}` }])}">
          ${r === 1 ? `<span class="pd-crown">${icon('crown', 20)}</span>` : ''}
          ${p.avatar ? `<img class="av av-lg" src="${esc(p.avatar)}" alt="">` : `<span class="av av-lg c${[...p.label].reduce((a, c) => (a + c.charCodeAt(0)) % 8, 0)}">${esc(SFR.initials(p.label))}</span>`}
          <b dir="auto">${esc(SFR.firstName(p.label))}</b>
          <span class="pd-xp"><em data-count="${p.earned}" data-cid="pd-${esc(p.key)}">${fa(p.earned)}</em> امتیاز</span>
          <span class="pd-block"><i>${fa(r)}</i></span></button>`;
      })
      .join('');
    const list = rest
      .map(
        (p, i) => `<button class="pd-row" data-drill="${drill({ poc: p.key })}">
          <span class="pd-n">${fa(i + 4)}</span>${p.avatar ? `<img class="av av-xs" src="${esc(p.avatar)}" alt="">` : `<span class="av av-xs">${esc(SFR.initials(p.label))}</span>`}
          <span class="pd-name" dir="auto">${esc(p.label)}</span><span class="pd-track"><i style="width:${(p.earned / max) * 100}%"></i></span><b>${fa(p.earned)}</b></button>`
      )
      .join('');
    return `<div class="podium">${top.length ? `<div class="pd-stand">${stand}</div>` : ''}${list ? `<div class="pd-list">${list}</div>` : ''}${!top.length ? SFR.empty('هنوز تحویلی ثبت نشده', 'با اولین اینیشیتیوی تمام‌شده اینجا جان می‌گیرد.', 'trophy') : ''}</div>
      ${table(['نفر', 'امتیاز', 'تحویل‌شده', 'کل'], people.map((p) => [p.label, p.earned, p.done, p.total]))}`;
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
          const t = tip(`${r.label} · ${kLabel(k)}`, [{ label: 'اینیشیتیو', value: fa(x.n) }, { label: 'امتیاز', value: fa(x.xp) }, { label: 'سهم از ردیف', value: faPct((n / (tot || 1)) * 100) }]);
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
  const total = () => (P ? P.xp : 0) + mineEarned();

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
      if (xp < 70) return;
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
      return { ...SFR.levelInfo(total()), earned, actions: P?.xp || 0, streak: P?.streak.n || 0 };
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
        <div class="pp-split"><span>${icon('rocket', 14)}<b>${fa(m.earned)}</b> از تحویل‌ها</span><span>${icon('zap', 14)}<b>${fa(m.actions)}</b> از کنش‌ها</span><span class="streak${m.streak >= 3 ? ' is-hot' : ''}">${icon('flame', 14)}<b>${fa(m.streak)}</b> روز پیاپی</span></div>
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
        <p class="pp-note">امتیاز تحویل‌ها از جیرا حساب می‌شود (سایز بزرگ‌تر و «حیاتی» بیشتر می‌ارزد). امتیاز کنش‌ها فقط روی همین مرورگر می‌ماند.</p>
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
        ${isBoss ? `<span class="pill pill-boss" data-hint="${i.status === 'done' ? 'باس این ماه را شکست دادید' : 'بزرگ‌ترین چالش این ماه'}">${icon(i.status === 'done' ? 'crown' : 'flame', 12)}${i.status === 'done' ? 'باس شکست‌خورد' : 'باس ماه'}</span>` : ''}
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
    const visible = SFR.visibleIssues();
    const scroller = el.querySelector('[data-scroll="kanban"]');
    const keep = scroller ? scroller.scrollLeft : null;
    const colScroll = {};
    el.querySelectorAll('.col-body[data-drop]').forEach((b) => (colScroll[b.dataset.drop] = b.scrollTop));
    const prevSearch = el.querySelector('input[data-bind="search"]');
    const focusSearch = !!prevSearch && prevSearch === el.getRootNode().activeElement;
    el.innerHTML = toolbar(visible) + (S.ui.view === 'table' ? table(visible) : kanban(visible));
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
/* Roadmap Lens — issue drawer: facts, follow, month move, description, comment thread + composer. */
(() => {
  const SFR = globalThis.SFR;
  const S = SFR.state;
  const { esc, fa, icon } = SFR;

  const D = (SFR.drawer = { key: null, detail: null, comments: null, watchers: null, mentions: new Map(), draft: {} });

  const fact = (label, value, { ltr = false } = {}) =>
    value ? `<div class="fact"><dt>${label}</dt><dd${ltr ? ' dir="ltr"' : ' dir="auto"'}>${value}</dd></div>` : '';

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

    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
    root.querySelector('.drawer-panel').innerHTML = `
      <header class="d-head">
        ${SFR.keyChip(it.key)}
        <button class="icon-btn" data-act="copy-link" data-key="${esc(it.key)}" data-hint="کپی لینک">${icon('link', 16)}</button>
        <a class="icon-btn" href="/browse/${encodeURIComponent(it.key)}" target="_blank" rel="noopener" data-hint="باز کردن در جیرا">${icon('external-link', 16)}</a>
        <span class="grow"></span>
        <button class="icon-btn" data-act="close-drawer" aria-label="بستن">${icon('x', 18)}</button>
      </header>
      <div class="d-scroll">
        <div class="d-hero">
          <div class="d-badges">${SFR.statusPill(it.status)}${it.delayed ? `<span class="pill pill-late">${icon('clock', 12)}تأخیر</span>` : ''}${
            it.strategic ? `<span class="pill pill-plain">${esc(SFR.STRATEGIC[it.strategic] || it.strategic)}</span>` : ''
          }</div>
          <h2 dir="auto">${esc(SFR.splitTitle(it.summary).title)}</h2>
          ${SFR.splitTitle(it.summary).tags.length ? `<div class="card-tags">${SFR.splitTitle(it.summary).tags.map((t) => `<bdi dir="auto">${esc(t)}</bdi>`).join('')}</div>` : ''}
          <div class="follow-row">
            <button class="btn ${it.watching ? 'btn-soft is-active' : 'btn-primary'}" data-act="follow" data-key="${esc(it.key)}" aria-pressed="${!!it.watching}">
              ${icon(it.watching ? 'check' : 'star', 16)}${it.watching ? 'دنبال می‌کنید' : 'دنبال کردن'}</button>
            <div class="watchers" data-hint="${esc(watchers.map((w) => w.displayName).join('، ') || ((D.watchers?.watchCount ?? it.watchCount) ? 'جیرا نام دنبال‌کننده‌ها را به شما نشان نمی‌دهد' : 'هنوز کسی دنبال نمی‌کند'))}">
              ${watchers.slice(0, 5).map((w) => SFR.avatar({ name: w.name, display: w.displayName, avatar: w.avatarUrls?.['24x24'] }, 'sm')).join('')}
              <span class="muted">${fa(D.watchers?.watchCount ?? it.watchCount ?? 0)} دنبال‌کننده</span>
            </div>
          </div>
        </div>

        <dl class="facts">
          <div class="fact"><dt>ماه تحویل</dt><dd>
            <label class="select">${icon('calendar', 14)}<select data-bind="move" data-key="${esc(it.key)}" aria-label="تغییر ماه تحویل">
              ${S.columns.map((c) => `<option value="${c.id}"${c.id === colId ? ' selected' : ''}>${esc(SFR.monthLabel(c.name).join(' · '))}</option>`).join('')}
            </select>${icon('chevron-down', 14)}</label></dd></div>
          ${fact('مسئول محصول', it.poc ? `<span class="who">${SFR.avatar(it.poc, 'xs')}${esc(it.poc.display)}</span>` : '')}
          ${fact('سیکل', (it.cycle || []).map((c) => `<span class="tag" dir="ltr">${esc(c)}</span>`).join(''))}
          ${fact('فانکشن', esc((it.fn || []).join('، ')))}
          ${fact('دامنه', esc(it.domain))}
          ${fact('اپیک / بتل', esc(it.epic || it.battle))}
          ${fact('سایز', SFR.sizeChip(it.size))}
          ${fact('اطمینان', esc(SFR.fa(it.confidence)))}
          ${fact('پوشش کاربران', esc(SFR.fa(it.reach)))}
          ${fact('برچسب‌ها', (it.labels || []).map((l) => `<span class="tag" dir="ltr">${esc(l)}</span>`).join(''))}
          ${fact('سند BRD', it.brd ? `<a href="${esc(it.brd)}" target="_blank" rel="noopener">${icon('file-text', 14)}باز کردن سند</a>` : '')}
          ${fact('ایجاد', `<span title="${esc(SFR.jDateFull(it.created))}">${SFR.ago(it.created)}</span>`)}
        </dl>

        ${
          det === null
            ? '<div class="skel-block"></div>'
            : det?.renderedFields?.description
            ? `<section class="d-section"><h3>توضیحات</h3><div class="rich clamp" dir="auto">${SFR.sanitize(det.renderedFields.description)}</div><button class="link" data-act="expand-desc">نمایش کامل</button></section>`
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

      <form class="composer" data-form="comment" data-key="${esc(it.key)}">
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
      </form>`;
  }
  D.render = render;

  SFR.openIssue = async (key) => {
    D.key = key;
    D.detail = null;
    D.comments = null;
    D.watchers = null;
    D.mentions = new Map();
    D.lastFocus = SFR.root.activeElement;
    render();
    SFR.root.querySelector('.drawer [data-act="close-drawer"]')?.focus();
    SFR.markSeen(key);
    SFR.game.award('open', key);
    const [det, com, wat] = await Promise.allSettled([SFR.api.issue(key), SFR.api.comments(key), SFR.api.watchers(key)]);
    if (D.key !== key) return;
    D.detail = det.status === 'fulfilled' ? det.value : false;
    D.comments = com.status === 'fulfilled' ? com.value.comments || [] : [];
    D.watchers = wat.status === 'fulfilled' ? wat.value : null;
    if (det.status === 'fulfilled') SFR.patch(key, SFR.enrichFromRest(det.value));
    render();
    SFR.emit('board');
  };

  SFR.closeIssue = () => {
    D.key = null;
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

  /* ---------- composer: mentions + submit ---------- */
  const searchUsers = SFR.debounce(async (q, pop, ta) => {
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
    if (m) searchUsers(m[1], pop, ta);
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

  const monthCats = () =>
    S.columns
      .filter((c) => SFR.monthKey(c.name) !== 'backlog')
      .map((c) => {
        const [label, sub] = SFR.monthLabel(c.name);
        return { key: c.id, id: c.id, label, sub: sub.split(' ← ')[0], current: SFR.isCurrentMonth(c.name) };
      });

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
    const rate = picked.length ? (done / picked.length) * 100 : 0;
    const xp = nodes.reduce((a, n) => a + n.xp, 0);
    const earned = nodes.reduce((a, n) => a + n.earned, 0);
    const bosses = nodes.filter((n) => n.boss);
    const dead = bosses.filter((n) => n.boss.done).length;
    const team = SFR.levelInfo(earned, 60);
    const stat = (ic, label, html, cls = '') => `<div class="jstat ${cls}"><span class="jstat-ic">${icon(ic, 18)}</span><div><small>${label}</small><b>${html}</b></div></div>`;
    return `<section class="viz-card full journey-card" data-card="journey">
      <header><div><h3>مسیر تحویل</h3><p>هر گره یک ماه تحویل است؛ حلقه نشان می‌دهد چند درصدِ امتیاز آن ماه تحویل شده. شعله «باس» ماه است (بزرگ‌ترین چالش)؛ تاج یعنی شکست خورده.</p></div>
        <button class="icon-btn" data-act="toggle-table" data-hint="نمایش جدول" aria-label="نمایش جدول داده">${icon('table-2', 16)}</button></header>
      <div class="jstats">
        ${stat('rocket', 'نرخ تحویل', `<span data-count="${Math.round(rate)}" data-fmt="pct" data-cid="j-rate">${faPct(rate)}</span>`, 'is-main')}
        ${stat('zap', 'امتیاز تحویل‌شده', `<span data-count="${earned}" data-cid="j-xp">${fa(earned)}</span><em> از ${fa(xp)}</em>`)}
        ${stat('swords', 'باس‌های شکست‌خورده', `<span data-count="${dead}" data-cid="j-boss">${fa(dead)}</span><em> از ${fa(bosses.length)}</em>`)}
        ${stat('users', 'سطح تیم', `<span>${fa(team.level)}</span><em> ${esc(team.name)}</em><i class="jmeter"><u style="width:${team.pct}%"></u></i>`)}
      </div>
      <div class="viz-body">${SFR.viz.journey({ nodes, fresh })}</div>
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
    return card('heat', 'نقشه‌ی گرمایی بار', 'هر سلول: اینیشیتیوهای یک فانکشن در یک ماه؛ تیره‌تر یعنی امتیاز (بار) بیشتر', SFR.viz.heatmap({ rows: top, cols: cats, cell, drillOf: (r, c) => ({ fn: r.key, month: c.id }) }), { wide: true });
  }

  function burnCard(rows) {
    const cats = monthCats();
    const live = rows.filter((i) => i.status !== 'canceled');
    const cur = cats.findIndex((c) => c.current);
    const lastShown = cur >= 0 ? cur : cats.length - 1;
    let p = 0;
    let d = 0;
    const planned = [];
    const delivered = [];
    cats.forEach((c, i) => {
      live.filter((x) => colOf(x) === c.id).forEach((x) => ((p += SFR.xpOf(x)), (d += SFR.earnedOf(x))));
      planned.push(p);
      delivered.push(i <= lastShown ? d : null);
    });
    return card('burn', 'برنامه در برابر تحویل', 'مجموع امتیازِ برنامه‌ریزی‌شده و تحویل‌شده تا پایان هر ماه؛ فاصله‌ی دو خط یعنی عقب‌افتادگی', SFR.viz.burnup({ cats, planned, delivered }), { wide: true });
  }

  function podiumCard(rows) {
    const live = rows.filter((i) => i.status !== 'canceled' && i.poc);
    const m = new Map();
    live.forEach((i) => {
      const e = m.get(i.poc.name) || { key: i.poc.name, label: i.poc.display || i.poc.name, avatar: i.poc.avatar, earned: 0, done: 0, total: 0 };
      e.earned += SFR.earnedOf(i);
      e.done += isDone(i) ? 1 : 0;
      e.total++;
      m.set(i.poc.name, e);
    });
    const people = [...m.values()].filter((p) => p.earned > 0).sort((a, b) => b.earned - a.earned || b.done - a.done);
    return card('podium', 'قهرمانان تحویل', 'بر اساس امتیاز اینیشیتیوهای تحویل‌شده (سایز بزرگ‌تر و «حیاتی» بیشتر می‌ارزد)', SFR.viz.podium({ people, max: Math.max(1, people[0]?.earned || 1) }), { tall: false });
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
    const key = `<div class="xp-key"><h4>هر سایز چند امتیاز می‌ارزد؟</h4><div>${SFR.SIZES.map((k) => `<span>${SFR.sizeChip(k)}<b>${fa(SFR.SIZE_META[k].xp)}</b></span>`).join('')}</div><p>اینیشیتیوی «حیاتی» (Make or Fail) یک‌ونیم برابر امتیاز می‌گیرد؛ «انجام‌شده» کامل و «توسعه تمام‌شده» ۶۰٪ حساب می‌شود.</p></div>`;
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


  /* ---------- size report ---------- */
  const SKEYS = [...SFR.SIZES, '—'];
  const tally = (items) => {
    const d = Object.fromEntries(SKEYS.map((k) => [k, { n: 0, xp: 0 }]));
    items.forEach((i) => {
      const x = d[SFR.sizeKey(i.size) || '—'];
      x.n += 1;
      x.xp += SFR.xpOf(i);
    });
    return d;
  };
  const fnsOf = (i) => (i.fn.length ? i.fn : ['نامشخص']);
  const seg = (act, cur, opts, label) =>
    `<div class="switch switch-sm" role="tablist" aria-label="${label}">${opts
      .map(([k, l]) => `<button role="tab" aria-selected="${cur === k}" data-act="${act}" data-v="${k}">${l}</button>`)
      .join('')}</div>`;
  const valTools = () => seg('dash-sizeval', S.dash.sizeVal, [['n', 'تعداد'], ['xp', 'امتیاز']], 'واحد');

  function sizeReportCards(rows) {
    const live = rows.filter((i) => phaseOf(i));
    const val = S.dash.sizeVal;
    const unitLabel = val === 'xp' ? '(امتیاز)' : '(اینیشیتیو)';
    const byPhase = PHASES.map((p) => ({ key: p.key, label: p.label, color: p.color, data: tally(live.filter((i) => phaseOf(i) === p.key)) })).filter((r) => SKEYS.some((k) => r.data[k].n));
    const all = { key: '', label: 'جمع همه‌ی مرحله‌ها', data: tally(live) };
    const A = card('sizerep-phase', 'سایزها در هر مرحله', 'چند XS، چند M، چند L… برنامه‌ریزی شده، در حال انجام یا تحویل شده؟ (معلق جزو «در حال انجام»؛ توسعه‌تمام‌شده جزو «تحویل‌شده»)', SFR.viz.sizeReport({ rows: byPhase, foot: all, val, unitLabel, drillOf: (r, k) => ({ ...(r.key ? { phase: r.key } : {}), ...(k ? { size: k } : {}) }) }), { full: true, noTable: true, tools: valTools(), cls: 'srep-card' });

    const ph = S.dash.sizePhase;
    const scoped = ph === 'all' ? live : live.filter((i) => phaseOf(i) === ph);
    const m = new Map();
    scoped.forEach((i) => fnsOf(i).forEach((f) => (m.has(f) ? m.get(f).push(i) : m.set(f, [i]))));
    const fnRows = [...m.entries()]
      .map(([f, items]) => ({ key: f, label: f, data: tally(items), n: items.length }))
      .sort((a, b) => SKEYS.reduce((t, k) => t + b.data[k][val] - a.data[k][val], 0) || a.label.localeCompare(b.label));
    const foot = { key: '', label: 'جمع یکتا', data: tally(scoped) };
    const phLabel = ph === 'all' ? 'همه‌ی مرحله‌ها' : PHASES.find((p) => p.key === ph).label;
    const tools = `<div class="tool-row">${seg('dash-sizephase', ph, [['all', 'همه'], ...PHASES.map((p) => [p.key, p.short])], 'مرحله')}${valTools()}<button class="chip" data-act="dash-csv" data-hint="دانلود گزارش کامل (همه‌ی فانکشن‌ها × مرحله‌ها)">${icon('file-spreadsheet', 14)}CSV</button></div>`;
    const B = card(
      'sizerep-fn',
      'سایز هر فانکشن',
      `${esc(phLabel)} · ${fa(fnRows.length)} فانکشن؛ اینیشیتیویِ چندفانکشنی در هر فانکشن شمرده می‌شود و ردیف «جمع یکتا» هر مورد را یک بار می‌شمارد`,
      fnRows.length ? SFR.viz.sizeReport({ rows: fnRows, foot, val, unitLabel, drillOf: (r, k) => ({ ...(ph !== 'all' ? { phase: ph } : {}), ...(r.key === 'نامشخص' ? { noFn: true } : r.key ? { fn: r.key } : {}), ...(k ? { size: k } : {}) }) }) : SFR.empty('موردی در این مرحله نیست', '', 'inbox'),
      { full: true, noTable: true, tools, cls: 'srep-card' }
    );
    return A + B;
  }

  SFR.exportSizeCsv = () => {
    const live = dataset().filter((i) => phaseOf(i));
    const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const head = ['فانکشن', 'مرحله', ...SFR.SIZES, 'بی‌سایز', 'جمع', 'امتیاز'];
    const out = [head.map(q).join(',')];
    const add = (name, phase, items) => {
      const d = tally(items);
      out.push([q(name), q(phase), ...SKEYS.map((k) => d[k].n), items.length, SKEYS.reduce((a, k) => a + d[k].xp, 0)].join(','));
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
        ${section('گزارش سایز', 'اینیشیتیوها از نظر اندازه چطور بین مرحله‌ها و فانکشن‌ها پخش شده‌اند؟')}
        ${sizeReportCards(rows)}
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
    'dash-csv': () => SFR.exportSizeCsv(),
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
      } else if (bindTo === 'comment') SFR.drawer.onInput(t);
    });

    app.addEventListener('change', (e) => {
      const t = e.target;
      if (t.dataset.bind === 'move') SFR.moveIssue(t.dataset.key, t.value);
      if (t.dataset.bind === 'dash-fn') ((S.dash.fn = t.value), render());
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
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && t.tagName === 'TEXTAREA') {
        e.preventDefault();
        t.form.requestSubmit();
        return;
      }
      if (e.key === 'Escape') {
        if (mpop) mpop.hidden = true;
        else if (!SFR.root.querySelector('.popover').hidden) closePopover();
        else if (SFR.drawer.key) SFR.closeIssue();
        else if (SFR.root.querySelector('.sheet.is-open')) SFR.closeDrill();
        else if (typing) t.blur();
        return;
      }
      if (e.key === 'Enter' && !typing && t.matches('[data-key]:not(button)')) return SFR.openIssue(t.dataset.key);
      if (e.key === 'Tab' && SFR.drawer.key) trap(e, SFR.root.querySelector('.drawer-panel'));
      if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === '/') {
        e.preventDefault();
        if (S.ui.tab !== 'board') ACT.tab({ dataset: { v: 'board' } });
        SFR.root.querySelector('input[data-bind="search"]')?.focus();
      } else if (['1', '2', '3'].includes(e.key)) ACT.tab({ dataset: { v: ['board', 'following', 'dashboard'][e.key - 1] } });
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
